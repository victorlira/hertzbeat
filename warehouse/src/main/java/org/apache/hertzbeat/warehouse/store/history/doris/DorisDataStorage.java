/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package org.apache.hertzbeat.warehouse.store.history.doris;

import com.zaxxer.hikari.HikariDataSource;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.hertzbeat.common.constants.CommonConstants;
import org.apache.hertzbeat.common.entity.dto.Value;
import org.apache.hertzbeat.common.entity.message.CollectRep;
import org.apache.hertzbeat.common.util.JsonUtil;
import org.apache.hertzbeat.warehouse.store.history.AbstractHistoryDataStorage;
import org.apache.hertzbeat.warehouse.utils.DorisStreamLoadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(prefix = "warehouse.store.doris", name = "enabled", havingValue = "true")
@Slf4j
public class DorisDataStorage extends AbstractHistoryDataStorage {
    private final static String CREATE_DATABASE_SQL = "CREATE DATABASE %s;";

    private final static String CREATE_TABLE_SQL = """
            CREATE TABLE IF NOT EXISTS %s (
                ts datetime(6),
                monitor_id bigint(20),
                metrics varchar(2000),
                label varchar(2000),
                v VARIANT,
                INDEX idx_var(v) USING INVERTED PROPERTIES("parser" = "unicode"),
                INDEX idx_id(monitor_id) USING INVERTED,
                INDEX idx_metrics(metrics) USING INVERTED PROPERTIES("parser" = "unicode"),
                INDEX idx_label(label) USING INVERTED PROPERTIES("parser" = "unicode")
            )
            ENGINE = OLAP
            DUPLICATE KEY(`ts`)
            PARTITION BY RANGE(`ts`) ()
            DISTRIBUTED BY RANDOM BUCKETS 16
            PROPERTIES (
            "compaction_policy" = "time_series",
            "dynamic_partition.enable" = "true",
            "dynamic_partition.create_history_partition" = "true",
            "dynamic_partition.time_unit" = "DAY",
            "dynamic_partition.start" = "-%s",
            "dynamic_partition.end" = "1",
            "dynamic_partition.prefix" = "p",
            "dynamic_partition.buckets" = "16",
            "dynamic_partition.replication_num" = "1",
            "replication_num" = "1",
            "enable_single_replica_compaction" = "true"
            );
            """;

    private static final String QUERY_HISTORY_SQL = "SELECT UNIX_TIMESTAMP(ts) * 1000 as ts, v['%s'], metrics, label FROM %s WHERE ts >= now() -  interval %s and monitor_id = %s order by ts desc;";

    private static final String QUERY_HISTORY_WITH_LABEL_SQL = "SELECT UNIX_TIMESTAMP(ts) * 1000 as ts, v['%s'], metrics, label FROM %s WHERE ts >= now() - interval %s and monitor_id = %s and label = '%s' order by ts desc;";

    private static final String QUERY_INSTANCE_SQL = "SELECT DISTINCT label FROM %s WHERE ts >= now() - interval 1 WEEK and metrics = '%s';";

    private static final String QUERY_HISTORY_INTERVAL_WITH_INSTANCE_SQL = """
            WITH base_data AS (
                SELECT
                    UNIX_TIMESTAMP(ts) * 1000 asts,
                    CAST(v['%s'] AS DOUBLE) AS value
                FROM
                    %s
                WHERE
                    label = '%s'
                    AND ts >= DATE_SUB(NOW(), INTERVAL 4 HOUR)
                    AND v['%s'] IS NOT NULL
            ),
            first_value_cte AS (
                SELECT
                    ts,
                    value,
                    FIRST_VALUE(value) OVER (ORDER BY ts ASC) AS first
                FROM
                    base_data
            )
            SELECT
                MIN(ts) AS first_ts,
                MIN(first) AS first_value,
                AVG(value) AS avg,
                MIN(value) AS min,
                MAX(value) AS max
            FROM
                first_value_cte;
            
            """;


    private HikariDataSource hikariDataSource;

    @Autowired
    private DorisProperties dorisProperties;

    public DorisDataStorage(DorisProperties dorisProperties) {
        if (!dorisProperties.enabled()) {
            return;
        }
        ZoneId systemZoneId = ZoneId.systemDefault();
        String zoneIdString = systemZoneId.getId();
        this.hikariDataSource = new HikariDataSource();
        this.hikariDataSource.setJdbcUrl("jdbc:mysql://" + dorisProperties.host() + ":" + dorisProperties.jdbcPort()
                + "/mysql?useUnicode=true&characterEncoding=utf8&useTimezone=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone="+zoneIdString);
        this.hikariDataSource.setUsername(dorisProperties.username());
        this.hikariDataSource.setPassword(dorisProperties.password());
        this.hikariDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        // minimum number of idle connection
        this.hikariDataSource.setMinimumIdle(10);
        // maximum number of connection in the pool
        this.hikariDataSource.setMaximumPoolSize(10);
        // maximum wait milliseconds for get connection from pool
        this.hikariDataSource.setConnectionTimeout(30000);
        // maximum lifetime for each connection
        this.hikariDataSource.setMaxLifetime(0);
        // max idle time for recycle idle connection
        this.hikariDataSource.setIdleTimeout(0);
//        createDatabase(dorisProperties.database());
        this.serverAvailable = true;
        if (hikariDataSource.isRunning()) {
            this.serverAvailable = true;
        }
    }

    private void createDatabase(String database) {
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.prepareStatement(String.format(CREATE_DATABASE_SQL, database)).executeUpdate();
        } catch (SQLException e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }

    private void createTable(String tableName) {
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute("USE " + dorisProperties.database());
            String createTableSql = String.format(CREATE_TABLE_SQL, tableName, dorisProperties.expireTime());
            connection.createStatement().executeUpdate(createTableSql);
        } catch (SQLException e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }

    private String getTableName(String app) {
        return "hzb_" + app;
    }


    /**
     * query history range metrics data from doris
     *
     * @param monitorId monitor id
     * @param app       monitor type
     * @param metrics   metrics
     * @param metric    metric
     * @param label     label
     * @param history   range
     * @return metrics data
     */
    @Override
    public Map<String, List<Value>> getHistoryMetricData(Long monitorId, String app, String metrics, String metric, String label, String history) {
        Map<String, List<Value>> instanceValuesMap = new HashMap<>(8);
        if (!isServerAvailable()) {
            return instanceValuesMap;
        }

        String interval = history2interval(history);
        String selectSql = label == null ? String.format(QUERY_HISTORY_SQL, metric, getTableName(app), interval, monitorId)
                : String.format(QUERY_HISTORY_WITH_LABEL_SQL, metric, getTableName(app), interval, monitorId, label);
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute("USE " + dorisProperties.database());
            ResultSet resultSet = connection.createStatement().executeQuery(selectSql);
            while (resultSet.next()) {
                long ts = resultSet.getLong(1);

                double value = resultSet.getDouble(2);
                String strValue = double2decimalString(value);

                String instanceValue = resultSet.getString(4);
                if (instanceValue == null || StringUtils.isBlank(instanceValue)) {
                    instanceValue = "";
                }

                List<Value> valueList = instanceValuesMap.computeIfAbsent(instanceValue, k -> new LinkedList<>());
                valueList.add(new Value(strValue, ts));
            }
        } catch (SQLException e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }

        return instanceValuesMap;
    }

    /**
     * query history range interval metrics data from doris
     * max min mean metrics value
     *
     * @param monitorId monitor id
     * @param app       monitor type
     * @param metrics   metrics
     * @param metric    metric
     * @param label     label
     * @param history   history range
     * @return metrics data
     */
    @Override
    public Map<String, List<Value>> getHistoryIntervalMetricData(Long monitorId, String app, String metrics, String metric, String label, String history) {
        if (!isServerAvailable()) {
            return Collections.emptyMap();
        }
        List<String> instances = new LinkedList<>();
        if (label != null && !StringUtils.isBlank(label)) {
            instances.add(label);
        }
        String table = getTableName(app);

        if (instances.isEmpty()) {
            String selectSql = String.format(QUERY_INSTANCE_SQL, table, metrics);
            try (Connection connection = hikariDataSource.getConnection();
                 Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(selectSql)) {
                while (resultSet.next()) {
                    String instanceValue = resultSet.getString(1);
                    if (instanceValue == null || StringUtils.isBlank(instanceValue)) {
                        instances.add("''");
                    } else {
                        instances.add(instanceValue);
                    }
                }
            } catch (Exception e) {
                log.error("[warehouse doris] failed to query instances{}", e.getMessage(), e);
            }
        }
        Map<String, List<Value>> instanceValuesMap = new HashMap<>(instances.size());
        for (String instanceValue : instances) {
            String selectSql = String.format(QUERY_HISTORY_INTERVAL_WITH_INSTANCE_SQL, metric, table, label, metric,
                    table, instanceValue, history2interval(history));

            if (log.isDebugEnabled()) {
                log.debug("[warehouse greptime] getHistoryIntervalMetricData sql: {}", selectSql);
            }

            List<Value> values = instanceValuesMap.computeIfAbsent(instanceValue, k -> new LinkedList<>());
            try (Connection connection = hikariDataSource.getConnection();
                 Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(selectSql)) {
                while (resultSet.next()) {
                    long ts = resultSet.getLong(1);
                    double origin = resultSet.getDouble(2);
                    String originStr = double2decimalString(origin);
                    double avg = resultSet.getDouble(3);
                    String avgStr = double2decimalString(avg);
                    double min = resultSet.getDouble(4);
                    String minStr = double2decimalString(min);
                    double max = resultSet.getDouble(5);
                    String maxStr = double2decimalString(max);
                    Value value = Value.builder().origin(originStr).mean(avgStr).min(minStr).max(maxStr).time(ts)
                            .build();
                    values.add(value);
                }
            } catch (Exception e) {
                    log.error("[warehouse greptime] failed to getHistoryIntervalMetricData: {}", e.getMessage(), e);
            }
        }
        return instanceValuesMap;}

    /**
     * save metrics data
     *
     * @param metricsData metrics data
     */
    @Override
    public void saveData(CollectRep.MetricsData metricsData) {
        if (!isServerAvailable() || metricsData.getCode() != CollectRep.Code.SUCCESS) {
            return;
        }
        if (metricsData.getValuesList().isEmpty()) {
            log.info("[warehouse doris] flush metrics data {} is null, ignore.", metricsData.getId());
            return;
        }
        String monitorId = String.valueOf(metricsData.getId());
        String tableName = getTableName(metricsData.getApp());
        String metrics = metricsData.getMetrics();
        createTable(tableName);
        List<CollectRep.Field> fieldsList = metricsData.getFieldsList();

        Map<String, Object> dataMap = new HashMap<>();
        Map<String, String> labels = new HashMap<>(8);
        for (CollectRep.ValueRow valueRow : metricsData.getValuesList()) {
            for (int i = 0; i < fieldsList.size(); i++) {
                CollectRep.Field field = fieldsList.get(i);
                if (!CommonConstants.NULL_VALUE.equals(valueRow.getColumns(i))) {
                    if (field.getType() == CommonConstants.TYPE_NUMBER) {
                        dataMap.put(field.getName(), Double.parseDouble(valueRow.getColumns(i)));
                    } else if (field.getType() == CommonConstants.TYPE_STRING) {
                        dataMap.put(field.getName(), valueRow.getColumns(i));
                    }
                    if (field.getLabel()) {
                        labels.put(field.getName(), valueRow.getColumns(i));
                    }
                } else {
                    dataMap.put(field.getName(), null);
                }
            }

        }

        Map<String, Object> outerMap = new HashMap<>();
        outerMap.put("ts", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS")));
        outerMap.put("monitor_id", monitorId);
        outerMap.put("metrics", metrics);
        outerMap.put("label", labels);
        outerMap.put("v", dataMap);
        String json = JsonUtil.toJson(outerMap);
        try {
            DorisStreamLoadUtil.sendData(
                    dorisProperties.host(),
                    dorisProperties.httpPort(),
                    dorisProperties.username(),
                    dorisProperties.password(),
                    dorisProperties.database(),
                    tableName,
                    json
            );
        } catch (Exception e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }


    @Override
    public void destroy() throws Exception {}

    private String double2decimalString(double d) {
        return BigDecimal.valueOf(d).setScale(4, RoundingMode.HALF_UP).stripTrailingZeros().toPlainString();
    }

    private String history2interval(String history) {
        if (history == null) {
            return null;
        }
        history = history.trim().toLowerCase();
        return history.replaceAll("d", " day") //
                .replaceAll("s", " second") //
                .replaceAll("w", " week") //
                .replaceAll("h", " hour")//
                .replaceAll("m", " minute");
    }
}
