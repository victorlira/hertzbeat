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

package org.apache.hertzbeat.common.script;

import org.apache.hertzbeat.common.constants.ScriptTypeEnum;

/**
 * script executor interface
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
public abstract class ScriptExecutor {

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
