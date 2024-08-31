package org.apache.hertzbeat.manager.plugin;

import org.apache.hertzbeat.common.constants.ScriptTypeEnum;

/**
 * script executor interface
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
public abstract class ScriptExecutor {

	public ScriptExecutor init(){
		return this;
	}

	public abstract void load(String nodeId, String script);

	public abstract void unLoad(String nodeId);


	public Object execute(ScriptExecuteWrap wrap) throws Exception{
        return executeScript(wrap);
    }

	public abstract Object executeScript(ScriptExecuteWrap wrap) throws Exception;

	public abstract void cleanCache();

	public abstract ScriptTypeEnum scriptType();


	/**
	 * compile script
	 *
	 * @param script script content
	 * @return boolean
	 * @throws Exception if compile failed
	 */
	public abstract Object compile(String script) throws Exception;
}
