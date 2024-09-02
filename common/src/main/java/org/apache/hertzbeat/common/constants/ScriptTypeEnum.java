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
 */

package org.apache.hertzbeat.common.constants;

import lombok.Getter;

/**
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
@Getter
public enum ScriptTypeEnum {

    CUSTOM("custom", "custom"),
    GROOVY("groovy", "groovy"),
    QLEXPRESS("qlexpress", "qlexpress"),
    JS("javascript", "js"),
    PYTHON("python", "python"),
    LUA("luaj", "lua"),
    AVIATOR("AviatorScript", "aviator"),
    JAVA("java", "java"),
    KOTLIN("kotlin", "kotlin");

    private String engineName;

    private String displayName;

    ScriptTypeEnum(String engineName, String displayName) {
        this.engineName = engineName;
        this.displayName = displayName;
    }

    public void setEngineName(String engineName) {
        this.engineName = engineName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public static ScriptTypeEnum getEnumByDisplayName(String displayName) {
        for (ScriptTypeEnum e : ScriptTypeEnum.values()) {
            if (e.getDisplayName().equals(displayName)) {
                return e;
            }
        }
        return null;
    }

    /**
     * 校验脚本类型是否合法
     *
     * @param scriptType 脚本类型
     * @return true:合法，false:不合法
     */
    public static boolean checkScriptType(String scriptType) {
        for (ScriptTypeEnum e : ScriptTypeEnum.values()) {
            if (e.getDisplayName().equals(scriptType)) {
                return true;
            }
        }
        return false;
    }

}
