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

package org.apache.hertzbeat.collector.script;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.apache.hertzbeat.common.cache.CacheFactory;
import org.apache.hertzbeat.common.constants.ScriptTypeEnum;
import org.apache.hertzbeat.common.script.ScriptExecutor;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.springframework.stereotype.Component;

/**
 * Js executor using GraalVM.Js.
 * This code references liteflow, thanks to the author zendwang.
 */

@Component
public class GraalJavaScriptExecutor extends ScriptExecutor {

    private final Engine engine;

    public GraalJavaScriptExecutor() {
        this.engine = Engine.create();
    }

    @Override
    public Object executeScript(String scriptKey) {
        Source source = (Source) CacheFactory.getScriptCache().get(scriptKey);
        if (source == null) {
            throw new RuntimeException("Script not found in cache");
        }

        try (Context context = Context.newBuilder().allowAllAccess(true).engine(this.engine).build()) {
            Value value = context.eval(source);
            if (value.isBoolean()) {
                return value.asBoolean();
            } else if (value.isNumber()) {
                return value.asInt();
            } else if (value.isString()) {
                return value.asString();
            }
            return value;
        } catch (Exception e) {
            throw new RuntimeException("Error executing script", e);
        }
    }

    @Override
    public void cleanCache() {
        CacheFactory.getScriptCache().clear();
    }

    @Override
    public ScriptTypeEnum scriptType() {
        return ScriptTypeEnum.JS;
    }

    @Override
    public Object compile(String script) throws Exception {
        String wrapScript = String.format("function process(){ %s } process();", script);
        Context context = Context.newBuilder().allowAllAccess(true).engine(engine).build();
        Source source = Source.create("js", wrapScript);
        context.parse(source);
        // Cache the parsed script
        CacheFactory.getScriptCache().put(script, source);
        return wrapScript;
    }
}
