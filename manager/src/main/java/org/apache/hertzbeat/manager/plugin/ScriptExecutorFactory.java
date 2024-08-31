package org.apache.hertzbeat.manager.plugin;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.ServiceLoader;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.hertzbeat.common.constants.ScriptTypeEnum;
import org.apache.hertzbeat.manager.support.exception.ScriptSpiException;

/**
 * Script executor factory class
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
public class ScriptExecutorFactory {

	private static ScriptExecutorFactory scriptExecutorFactory;

	private final Map<String, ScriptExecutor> scriptExecutorMap = new HashMap<>();

	private final String NONE_LANGUAGE = "none";

	public static ScriptExecutorFactory loadInstance() {
		if (ObjectUtils.anyNull(scriptExecutorFactory)) {
			scriptExecutorFactory = new ScriptExecutorFactory();
		}
		return scriptExecutorFactory;
	}

	public ScriptExecutor getScriptExecutor(String language) {
		if (StringUtils.isBlank(language)) {
			language = NONE_LANGUAGE;
		}

		if (!scriptExecutorMap.containsKey(language)) {
			ServiceLoader<ScriptExecutor> loader = ServiceLoader.load(ScriptExecutor.class);

			ScriptExecutor scriptExecutor;
			Iterator<ScriptExecutor> it = loader.iterator();
			while (it.hasNext()) {
				scriptExecutor = it.next().init();
				if (language.equals(NONE_LANGUAGE)) {
					scriptExecutorMap.put(language, scriptExecutor);
					break;
				}
				else {
					ScriptTypeEnum scriptType = ScriptTypeEnum.getEnumByDisplayName(language);
					if (ObjectUtils.anyNull(scriptType)) {
						throw new ScriptSpiException("script language config error");
					}
                    if (scriptType != null && scriptType.equals(scriptExecutor.scriptType())) {
                        scriptExecutorMap.put(language, scriptExecutor);
                        break;
                    }
                }
			}
		}

		if (scriptExecutorMap.containsKey(language)) {
			return scriptExecutorMap.get(language);
		}
		else {
			throw new ScriptSpiException("script spi component failed to load");
		}
	}

	public void cleanScriptCache() {
		this.scriptExecutorMap.forEach((key, value) -> value.cleanCache());
	}

}
