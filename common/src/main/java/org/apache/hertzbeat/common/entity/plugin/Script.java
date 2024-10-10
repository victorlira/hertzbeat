package org.apache.hertzbeat.common.entity.plugin;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Script {

    private Long id;

    private String type;

    private String content;
}
