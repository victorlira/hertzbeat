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

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.Connection;
import java.sql.DriverManager;
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
    private final static String CREATE_DATABASE_SQL = "CREATE DATABASE IF NOT EXISTS %s;";

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

    private static final String QUERY_HISTORY_SQL = "SELECT UNIX_TIMESTAMP(ts) * 1000 as ts, v['%s'], label FROM %s WHERE ts >= now() -  interval %s and monitor_id = %s and metrics = '%s' order by ts desc;";

    private static final String QUERY_HISTORY_WITH_LABEL_SQL = "SELECT UNIX_TIMESTAMP(ts) * 1000 as ts, v['%s'], label FROM %s WHERE ts >= now() - interval %s and monitor_id = %s and label = '%s' and metrics = '%s' order by ts desc;";

    private static final String QUERY_INSTANCE_SQL = "SELECT DISTINCT label FROM %s WHERE ts >= now() - interval 1 WEEK and metrics = '%s';";

    private static final String QUERY_HISTORY_INTERVAL_WITH_INSTANCE_SQL = """
            SELECT
                CAST(UNIX_TIMESTAMP(time_bucket) * 1000 AS BIGINT) AS time_bucket,
                first_value(his_value, 1) OVER (PARTITION BY time_bucket ORDER BY ts ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS origin,
                avg(his_value) AS avg,
                min(his_value) AS min,
                max(his_value) AS max
            FROM
                (
                SELECT
                    ts,
                    CAST(v['%s'] AS DOUBLE) AS his_value,
                    DATE_TRUNC (ts,'HOUR') - INTERVAL (HOUR(ts)%4) HOUR AS time_bucket
                FROM
                    %s
                WHERE
                    ts >= now() - INTERVAL 1 MONTH and label = '%S'
                ) AS subquery
            GROUP BY
                time_bucket,
                origin
            ORDER BY
                time_bucket;
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
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl("jdbc:mysql://" + dorisProperties.host() + ":" + dorisProperties.jdbcPort()
                + "/hertzbeat?useUnicode=true&characterEncoding=utf8&useTimezone=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone="+zoneIdString);
        hikariConfig.setUsername(dorisProperties.username());
        hikariConfig.setPassword(dorisProperties.password());
        hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver");
        hikariConfig.setMinimumIdle(2);
        hikariConfig.setMaximumPoolSize(10);
        hikariConfig.setIdleTimeout(30000);
        hikariConfig.setConnectionTimeout(30000);
        this.hikariDataSource = new HikariDataSource(hikariConfig);
//        createDatabase(dorisProperties.database());
        this.serverAvailable = true;
        if (hikariDataSource.isRunning()) {
            this.serverAvailable = true;
        }
    }

    private void createDatabase(String database) {
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute(String.format(CREATE_DATABASE_SQL, database));
        } catch (SQLException e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }

    private void createTable(String tableName) {
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute("USE %s;".formatted(dorisProperties.database()));
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
        String selectSql = label == null ? String.format(QUERY_HISTORY_SQL, metric, getTableName(app), interval, monitorId, metrics)
                : String.format(QUERY_HISTORY_WITH_LABEL_SQL, metric, getTableName(app), interval, monitorId, label, metrics);
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute("USE " + dorisProperties.database());
            ResultSet resultSet = connection.createStatement().executeQuery(selectSql);
            while (resultSet.next()) {
                long ts = resultSet.getLong(1);

                double value = resultSet.getDouble(2);
                String strValue = double2decimalString(value);

                String instanceValue = resultSet.getString(3);
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
     *
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
                    if (instanceValue == null || StringUtils.isBlank(instanceValue) || instanceValue.equals("{}")) {
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
            String selectSql = String.format(QUERY_HISTORY_INTERVAL_WITH_INSTANCE_SQL, metric, table, instanceValue);

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
                    log.error("[warehouse doris] failed to getHistoryIntervalMetricData: {}", e.getMessage(), e);
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
