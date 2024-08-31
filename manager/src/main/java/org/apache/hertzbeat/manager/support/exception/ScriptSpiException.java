
package org.apache.hertzbeat.manager.support.exception;

import java.io.Serial;

/**
 * Script SPI plugin loading exception
 * This code references dromara/liteflow, thanks to the author Bryan.
 */
public class ScriptSpiException extends RuntimeException {

	@Serial
	private static final long serialVersionUID = 1L;

	private String message;

	public ScriptSpiException(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
