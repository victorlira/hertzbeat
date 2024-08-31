
package org.apache.hertzbeat.manager.support.exception;

import java.io.Serial;

/**
 * scrip load exception
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
public class ScriptLoadException extends RuntimeException {

	@Serial
	private static final long serialVersionUID = 1L;

	private String message;

	public ScriptLoadException(String message) {
		this.message = message;
	}

	@Override
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
