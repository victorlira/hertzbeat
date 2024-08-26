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
import java.sql.Connection;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.time.DateUtils;
import org.apache.hertzbeat.common.constants.CommonConstants;
import org.apache.hertzbeat.common.entity.dto.Value;
import org.apache.hertzbeat.common.entity.message.CollectRep;
import org.apache.hertzbeat.warehouse.store.history.AbstractHistoryDataStorage;
import org.apache.hertzbeat.warehouse.utils.DorisStreamLoadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(prefix = "warehouse.store.doris", name = "enabled", havingValue = "true")
@Slf4j
public class DorisDataStorage extends AbstractHistoryDataStorage {
    private final static String CREATE_TABLE_SQL = """
            CREATE TABLE IF NOT EXISTS %s (
                ts datetime,
                v VARIANT,
                INDEX idx_var(v) USING INVERTED PROPERTIES("parser" = "unicode")
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

    private HikariDataSource hikariDataSource;

    @Autowired
    private DorisProperties dorisProperties;

    public DorisDataStorage(DorisProperties dorisProperties) {
        if (!dorisProperties.enabled()) {
            return;
        }
        this.hikariDataSource = new HikariDataSource();
        this.hikariDataSource.setJdbcUrl("jdbc:mysql://" + dorisProperties.host() + ":" + dorisProperties.jdbcPort() + "/" + "mysql");
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
        // validation query
        this.hikariDataSource.setConnectionTestQuery("select 1");
        createDatabase(dorisProperties.database());
        if (hikariDataSource.isRunning()) {
            this.serverAvailable = true;
        }
    }

    private void createDatabase(String database) {
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute("CREATE DATABASE IF NOT EXISTS " + database);
            log.info("[warehouse doris]--Create database {} successful", database);
        } catch (SQLException e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }

    private void createTable(String tableName) {
        try (Connection connection = hikariDataSource.getConnection()) {
            connection.createStatement().execute("USE " + dorisProperties.database());
            String createTableSql = String.format(CREATE_TABLE_SQL, tableName, dorisProperties.expireTime());
            connection.createStatement().execute(createTableSql);
        } catch (SQLException e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }

    private String getTableName(String app, String metrics) {
        return "hzb_" + app + "_" + metrics;
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
        return Map.of();
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
        return Map.of();
    }

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
        String tableName = getTableName(metricsData.getApp(), metricsData.getMetrics());
        createTable(tableName);
        List<CollectRep.Field> fieldsList = metricsData.getFieldsList();
        StringBuilder jsonData = new StringBuilder();
        jsonData.append("{");

        for (CollectRep.ValueRow valueRow : metricsData.getValuesList()) {
            StringBuilder row = new StringBuilder();
            row.append("\"monitor_id\":\"").append(monitorId).append("\",");
            for (int i = 0; i < fieldsList.size(); i++) {
                CollectRep.Field field = fieldsList.get(i);
                String value = valueRow.getColumns(i);
                if (!CommonConstants.NULL_VALUE.equals(value)) {
                    if (field.getType() == CommonConstants.TYPE_NUMBER) {
                        row.append("\"").append(field.getName()).append("\":").append(Double.parseDouble(value)).append(",");
                    } else if (field.getType() == CommonConstants.TYPE_STRING) {
                        row.append("\"").append(field.getName()).append("\":\"").append(value).append("\",");
                    }
                }
            }
            row.append("},");
            jsonData.append(row);
        }

        // Remove the trailing comma and close the JSON object
        if (jsonData.charAt(jsonData.length() - 1) == ',') {
            jsonData.deleteCharAt(jsonData.length() - 1);
        } else {
            jsonData.append('}');
        }

        System.out.println(jsonData);

        String ts = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        String json =
            """
                {
                  "ts": "%s",
                  "v": %s
                }
            """.formatted(ts, jsonData);

        log.info("[warehouse doris]--Write data: {}", json);

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
            log.info("[warehouse doris]-Write successful");
        } catch (Exception e) {
            log.error("[warehouse doris]--Error: {}", e.getMessage(), e);
        }
    }


    @Override
    public void destroy() throws Exception {

    }
}
