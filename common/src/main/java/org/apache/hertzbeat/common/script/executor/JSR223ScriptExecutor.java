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

package org.apache.hertzbeat.common.script.executor;


import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.script.Bindings;
import javax.script.Compilable;
import javax.script.CompiledScript;
import javax.script.ScriptEngine;
import javax.script.ScriptException;
import javax.script.SimpleBindings;
import lombok.extern.slf4j.Slf4j;
import org.apache.hertzbeat.common.script.ScriptExecutor;
import org.apache.hertzbeat.common.support.exception.ScriptLoadException;
import org.graalvm.polyglot.Source;

/**
 * JSR223 script engine
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
@Slf4j
public abstract class JSR223ScriptExecutor extends ScriptExecutor {


	private ScriptEngine scriptEngine;

	private final Map<String, CompiledScript> compiledScriptMap = new ConcurrentHashMap<>();

//	@Override
//	public ScriptExecutor init() {
//		ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
//		scriptEngine = scriptEngineManager.getEngineByName(this.scriptType().getEngineName());
//		return this;
//	}

	protected String convertScript(String script) {
		return script;
	}




	@Override
	public Object executeScript(String scriptKey) throws Exception {
//		if (!compiledScriptMap.containsKey(wrap.getNodeId())) {
//			String errorMsg = String.format("script for node[%s] is not loaded", wrap.getNodeId());
//			throw new ScriptLoadException(errorMsg);
//		}

		CompiledScript compiledScript = compiledScriptMap.get(scriptKey);
		Bindings bindings = new SimpleBindings();

		return compiledScript.eval(bindings);
	}

	@Override
	public void cleanCache() {
		compiledScriptMap.clear();
	}

	@Override
	public Object compile(String script) throws ScriptException {
		if(scriptEngine == null) {
			log.error("script engine has not init");
		}
		return ((Compilable) scriptEngine).compile(convertScript(script));
	}

}
