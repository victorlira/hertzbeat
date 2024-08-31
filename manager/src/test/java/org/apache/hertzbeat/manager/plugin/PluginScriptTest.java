/*
 *
 *  * Licensed to the Apache Software Foundation (ASF) under one or more
 *  * contributor license agreements.  See the NOTICE file distributed with
 *  * this work for additional information regarding copyright ownership.
 *  * The ASF licenses this file to You under the Apache License, Version 2.0
 *  * (the "License"); you may not use this file except in compliance with
 *  * the License.  You may obtain a copy of the License at
 *  *
 *  *     http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

package org.apache.hertzbeat.manager.plugin;

import org.apache.hertzbeat.common.constants.ScriptTypeEnum;
import org.apache.hertzbeat.manager.plugin.validator.ScriptValidator;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * Test case for {@link ScriptExecutor}
 */

public class PluginScriptTest {
    @Test
    public void testJavaScriptScriptComponentValidateFunction(){
        String correctScript = "var a=3;\n" +
                "                var b=2;\n" +
                "                var c=1;\n" +
                "                var d=5;\n" +
                "\n" +
                "                function addByArray(values) {\n" +
                "                    var sum = 0;\n" +
                "                    for (var i = 0; i < values.length; i++) {\n" +
                "                        sum += values[i];\n" +
                "                    }\n" +
                "                    return sum;\n" +
                "                }\n" +
                "\n" +
                "                var result = addByArray([a,b,c,d]);\n" +
                "\n" +
                "                defaultContext.setData(\"s1\",parseInt(result));";

        String wrongScript = "var a=3;\n" +
                "                var b=2;\n" +
                "                var c=1;\n" +
                "                var d=5;\n" +
                "\n" +
                "                fon addByArray(values) {\n" +
                "                    var sum = 0;\n" +
                "                    for (var i = 0; i < values.length; i++) {\n" +
                "                        sum += values[i];\n" +
                "                    }\n" +
                "                    return sum;\n" +
                "                }\n" +
                "\n" +
                "                var result = addByArray([a,b,c,d]);\n" +
                "\n" +
                "                defaultContext.setData(\"s1\",parseInt(result));";
        Assertions.assertTrue(ScriptValidator.validate(correctScript));
        Assertions.assertFalse(ScriptValidator.validate(wrongScript));

        Assertions.assertTrue(ScriptValidator.validate(correctScript, ScriptTypeEnum.JS));
        Assertions.assertFalse(ScriptValidator.validate(correctScript, ScriptTypeEnum.JAVA));
    }
}
