package org.apache.hertzbeat.manager.plugin.validator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ServiceLoader;
import lombok.extern.slf4j.Slf4j;
import org.apache.hertzbeat.common.constants.ScriptTypeEnum;
import org.apache.hertzbeat.manager.plugin.ScriptExecutor;

/**
 * Script validator class
 * This code references dromara/liteflow, thanks to the author Ge_Zuao.
 */
@Slf4j
public class ScriptValidator {

    private static final Map<ScriptTypeEnum, ScriptExecutor> scriptExecutors;

    static {
        List<ScriptExecutor> scriptExecutorList = new ArrayList<>();
        scriptExecutors = new HashMap<>();
        ServiceLoader.load(ScriptExecutor.class).forEach(scriptExecutorList::add);
        scriptExecutorList.stream()
                .peek(ScriptExecutor::init)
                .forEach(scriptExecutor -> scriptExecutors.put(scriptExecutor.scriptType(), scriptExecutor));
    }

    /**
     * 验证脚本逻辑的公共部分
     *
     * @param script     脚本
     * @param scriptType 脚本类型
     * @return boolean
     */
    private static boolean validateScript(String script, ScriptTypeEnum scriptType){

        if(scriptExecutors.isEmpty()){
            log.error("The loaded script modules not found.");
            return false;
        }

        if (scriptType != null && !scriptExecutors.containsKey(scriptType)) {
            log.error(String.format("Specified script language %s was not found.", scriptType));
            return false;
        }

        if (scriptExecutors.size() > 1 && scriptType == null) {
            log.error("The loaded script modules more than 1. Please specify the script language.");
            return false;
        }

        ScriptExecutor scriptExecutor = (scriptType != null) ? scriptExecutors.get(scriptType) : scriptExecutors.values().iterator().next();
        try {
            scriptExecutor.compile(script);
        } catch (Exception e) {
            log.error(String.format("%s Script component validate failure. ", scriptExecutor.scriptType()) + e.getMessage());
            return false;
        }
        return true;
    }

    /**
     * @param script script
     * @return boolean
     */
    public static boolean validate(String script){
        return validateScript(script, null);
    }

    /**
     *
     * @param script script
     * @param scriptType scriptType
     * @return boolean
     */
    public static boolean validate(String script, ScriptTypeEnum scriptType){
        return validateScript(script, scriptType);
    }

    /**
     *
     * @param scripts scripts
     * @return boolean
     */
    public static boolean validate(Map<ScriptTypeEnum, String> scripts){
        for(Map.Entry<ScriptTypeEnum, String> script : scripts.entrySet()){
            if(!validate(script.getValue(), script.getKey())){
                return false;
            }
        }
        return true;
    }
}
