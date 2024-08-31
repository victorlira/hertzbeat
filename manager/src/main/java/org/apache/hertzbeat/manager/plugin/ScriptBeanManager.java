package org.apache.hertzbeat.manager.plugin;

import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

/**
 * The Script Bean Manager
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
public class ScriptBeanManager {

	@Getter
    private static final Map<String, Object> scriptBeanMap = new HashMap<>();

	public static void addScriptBean(String key, Object bean) {
		scriptBeanMap.put(key, bean);
	}

}
