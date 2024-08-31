package org.apache.hertzbeat.manager.plugin.executor;


import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.script.Bindings;
import javax.script.Compilable;
import javax.script.CompiledScript;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.script.SimpleBindings;
import lombok.extern.slf4j.Slf4j;
import org.apache.hertzbeat.manager.plugin.ScriptExecuteWrap;
import org.apache.hertzbeat.manager.plugin.ScriptExecutor;
import org.apache.hertzbeat.manager.support.exception.ScriptLoadException;

/**
 * JSR223 script engine
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
@Slf4j
public abstract class JSR223ScriptExecutor extends ScriptExecutor {


	private ScriptEngine scriptEngine;

	private final Map<String, CompiledScript> compiledScriptMap = new ConcurrentHashMap<>();

	@Override
	public ScriptExecutor init() {
		ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
		scriptEngine = scriptEngineManager.getEngineByName(this.scriptType().getEngineName());
		return this;
	}

	protected String convertScript(String script) {
		return script;
	}

	@Override
	public void load(String nodeId, String script) {
		try {
			compiledScriptMap.put(nodeId, (CompiledScript) compile(script));
		}
		catch (Exception e) {
			String errorMsg = String.format("script loading error for node[%s], error msg:%s", nodeId, e.getMessage());
			throw new ScriptLoadException(errorMsg);
		}
	}

	@Override
	public void unLoad(String nodeId) {
		compiledScriptMap.remove(nodeId);
	}


	@Override
	public Object executeScript(ScriptExecuteWrap wrap) throws Exception {
		if (!compiledScriptMap.containsKey(wrap.getNodeId())) {
			String errorMsg = String.format("script for node[%s] is not loaded", wrap.getNodeId());
			throw new ScriptLoadException(errorMsg);
		}

		CompiledScript compiledScript = compiledScriptMap.get(wrap.getNodeId());
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
