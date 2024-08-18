"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[24790],{15680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>m});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(58168),o=(n(96540),n(15680));const r={id:"extend-http-example-token",title:"Tutorial 2 Obtain TOKEN index value based on HTTP protocol for subsequent collection and authentication",sidebar_label:"Tutorial 2 Get TOKEN for subsequent authentication"},i=void 0,p={unversionedId:"advanced/extend-http-example-token",id:"advanced/extend-http-example-token",title:"Tutorial 2 Obtain TOKEN index value based on HTTP protocol for subsequent collection and authentication",description:"Through this tutorial, we will describe step by step how to modify on the basis of tutorial 1, add metrics, first call the authentication interface to obtain the TOKEN, and use the TOKEN as a parameter for the subsequent metrics collection and authentication.",source:"@site/docs/advanced/extend-http-example-token.md",sourceDirName:"advanced",slug:"/advanced/extend-http-example-token",permalink:"/docs/advanced/extend-http-example-token",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/advanced/extend-http-example-token.md",tags:[],version:"current",frontMatter:{id:"extend-http-example-token",title:"Tutorial 2 Obtain TOKEN index value based on HTTP protocol for subsequent collection and authentication",sidebar_label:"Tutorial 2 Get TOKEN for subsequent authentication"},sidebar:"docs",previous:{title:"Tutorial 1 Adapting an HTTP protocol monitoring",permalink:"/docs/advanced/extend-http-example-hertzbeat"},next:{title:"JDBC Protocol Custom Monitoring",permalink:"/docs/advanced/extend-jdbc"}},l={},s=[{value:"Request process",id:"request-process",level:3},{value:"Add custom monitoring type <code>hertzbeat_token</code>",id:"add-custom-monitoring-type-hertzbeat_token",level:3},{value:"Define metrics <code>auth</code> login request to get <code>token</code>",id:"define-metrics-auth-login-request-to-get-token",level:3},{value:"Use <code>token</code> as a variable parameter to collect and use the following metricss",id:"use-token-as-a-variable-parameter-to-collect-and-use-the-following-metricss",level:3},{value:"Set threshold alarm notification",id:"set-threshold-alarm-notification",level:3},{value:"over!",id:"over",level:4}],h={toc:s};function c(e){let{components:t,...r}=e;return(0,o.yg)("wrapper",(0,a.A)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Through this tutorial, we will describe step by step how to modify on the basis of tutorial 1, add metrics, first call the authentication interface to obtain the TOKEN, and use the TOKEN as a parameter for the subsequent metrics collection and authentication."),(0,o.yg)("p",null,"Before reading this tutorial, we hope that you are familiar with how to customize types, metrics, protocols, etc. from ",(0,o.yg)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring")," and ",(0,o.yg)("a",{parentName:"p",href:"extend-http"},"http Protocol Customization"),"."),(0,o.yg)("h3",{id:"request-process"},"Request process"),(0,o.yg)("p",null,"\u3010",(0,o.yg)("strong",{parentName:"p"},"Authentication information metrics (highest priority)"),"\u3011\u3010",(0,o.yg)("strong",{parentName:"p"},"HTTP interface carries account password call"),"\u3011->\u3010",(0,o.yg)("strong",{parentName:"p"},"Response data analysis"),"\u3011->\u3010",(0,o.yg)("strong",{parentName:"p"},"Analysis and issuance of TOKEN-accessToken as an metric "),"] -> ","[",(0,o.yg)("strong",{parentName:"p"},"Assign accessToken as a variable parameter to other collection index groups"),"]"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Here we still use the hertzbeat monitoring example of Tutorial 1! The hertzbeat background interface not only supports the basic direct account password authentication used in Tutorial 1, but also supports token authentication.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"We need ",(0,o.yg)("inlineCode",{parentName:"strong"},"POST")," to call the login interface ",(0,o.yg)("inlineCode",{parentName:"strong"},"/api/account/auth/form")," to get ",(0,o.yg)("inlineCode",{parentName:"strong"},"accessToken"),", the request body (json format) is as follows"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "credential": "hertzbeat",\n   "identifier": "admin"\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The response structure data is as follows"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "data": {\n     "token": "xxxx",\n     "refreshToken": "xxxx"\n   },\n   "msg": null,\n   "code": 0\n}\n')),(0,o.yg)("h3",{id:"add-custom-monitoring-type-hertzbeat_token"},"Add custom monitoring type ",(0,o.yg)("inlineCode",{parentName:"h3"},"hertzbeat_token")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,o.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,o.yg)("strong",{parentName:"p"},"New Template")," -> ",(0,o.yg)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,o.yg)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,o.yg)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring."),(0,o.yg)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,o.yg)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The custom monitoring type needs to add a new configuration monitoring template yml. We directly reuse the ",(0,o.yg)("inlineCode",{parentName:"li"},"hertzbeat")," monitoring type in Tutorial 1 and modify it based on it")),(0,o.yg)("p",null,"A monitoring configuration definition file named after the monitoring type - hertzbeat_token"),(0,o.yg)("p",null,"We directly reuse the definition content in ",(0,o.yg)("inlineCode",{parentName:"p"},"hertzbeat")," and modify it to our current monitoring type ",(0,o.yg)("inlineCode",{parentName:"p"},"hertzbeat_auth")," configuration parameters, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"app, category, etc"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"category: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: hertzbeat_token\n# The monitoring i18n name\nname:\n  zh-CN: HertzBeat(Token)\n  en-US: HertzBeat(Token)\n# The description and help of this monitoring type\nhelp:\n  zh-CN: Hertzbeat \u5bf9 HertzBeat\u76d1\u63a7(Token)\u8fdb\u884c\u6d4b\u91cf\u76d1\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u70b9\u51fb \u201c<i>\u65b0\u5efa HertzBeat\u76d1\u63a7(Token)</i>\u201d \u5e76\u8fdb\u884c\u914d\u7f6e\uff0c\u6216\u8005\u9009\u62e9\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5bfc\u5165\u5df2\u6709\u914d\u7f6e\u3002\n  en-US: Hertzbeat monitors HertzBeat Monitor(Token). You could click the \"<i>New HertzBeat Monitor(Token)</i>\" button and proceed with the configuration or import an existing setup through the \"<i>More Actions</i>\" menu.\n  zh-TW: Hertzbeat\u5c0dHertzBeat\u76e3\u63a7\uff08Token\uff09\u9032\u884c\u91cf\u6e2c\u76e3\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u9ede\u64ca\u201c<i>\u65b0\u5efaHertzBeat\u76e3\u63a7\uff08Token\uff09</i>\u201d\u4e26\u9032\u884c\u914d\u5bd8\uff0c\u6216\u8005\u9078\u64c7\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5c0e\u5165\u5df2\u6709\u914d\u5bd8\u3002\nhelpLink:\n  zh-CN: https://hertzbeat.apache.org/zh-cn/docs/help/hertzbeat_token\n  en-US: https://hertzbeat.apache.org/docs/help/hertzbeat_token\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u76ee\u6807Host\n      en-US: Target Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    required: true\n    defaultValue: 1157\n    placeholder: 'Please input port'\n  - field: ssl\n    name:\n      zh-CN: \u542f\u52a8SSL\n      en-US: SSL\n    # type-param field type(boolean mapping the html switch tag)\n    type: boolean\n    required: false\n  - field: contentType\n    name:\n      zh-CN: Content-Type\n      en-US: Content-Type\n    type: text\n    placeholder: 'Request Body Type'\n    required: false\n  - field: payload\n    name:\n      zh-CN: \u8bf7\u6c42BODY\n      en-US: BODY\n    type: textarea\n    placeholder: 'Available When POST PUT'\n    required: false\n# collect metrics config list\n")),(0,o.yg)("h3",{id:"define-metrics-auth-login-request-to-get-token"},"Define metrics ",(0,o.yg)("inlineCode",{parentName:"h3"},"auth")," login request to get ",(0,o.yg)("inlineCode",{parentName:"h3"},"token")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Add an index group definition ",(0,o.yg)("inlineCode",{parentName:"li"},"auth")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"hertzbeat_token"),", set the collection priority to the highest 0, and collect the index ",(0,o.yg)("inlineCode",{parentName:"li"},"token"),".")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: hertzbeat_token\n# The monitoring i18n name\nname:\n  zh-CN: HertzBeat(Token)\n  en-US: HertzBeat(Token)\n# The description and help of this monitoring type\nhelp:\n  zh-CN: Hertzbeat \u5bf9 HertzBeat\u76d1\u63a7(Token)\u8fdb\u884c\u6d4b\u91cf\u76d1\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u70b9\u51fb \u201c<i>\u65b0\u5efa HertzBeat\u76d1\u63a7(Token)</i>\u201d \u5e76\u8fdb\u884c\u914d\u7f6e\uff0c\u6216\u8005\u9009\u62e9\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5bfc\u5165\u5df2\u6709\u914d\u7f6e\u3002\n  en-US: Hertzbeat monitors HertzBeat Monitor(Token). You could click the \"<i>New HertzBeat Monitor(Token)</i>\" button and proceed with the configuration or import an existing setup through the \"<i>More Actions</i>\" menu.\n  zh-TW: Hertzbeat\u5c0dHertzBeat\u76e3\u63a7\uff08Token\uff09\u9032\u884c\u91cf\u6e2c\u76e3\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u9ede\u64ca\u201c<i>\u65b0\u5efaHertzBeat\u76e3\u63a7\uff08Token\uff09</i>\u201d\u4e26\u9032\u884c\u914d\u5bd8\uff0c\u6216\u8005\u9078\u64c7\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5c0e\u5165\u5df2\u6709\u914d\u5bd8\u3002\nhelpLink:\n  zh-CN: https://hertzbeat.apache.org/zh-cn/docs/help/hertzbeat_token\n  en-US: https://hertzbeat.apache.org/docs/help/hertzbeat_token\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u76ee\u6807Host\n      en-US: Target Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    required: true\n    defaultValue: 1157\n    placeholder: 'Please input port'\n  - field: ssl\n    name:\n      zh-CN: \u542f\u52a8SSL\n      en-US: SSL\n    # type-param field type(boolean mapping the html switch tag)\n    type: boolean\n    required: false\n  - field: contentType\n    name:\n      zh-CN: Content-Type\n      en-US: Content-Type\n    type: text\n    placeholder: 'Request Body Type'\n    required: false\n  - field: payload\n    name:\n      zh-CN: \u8bf7\u6c42BODY\n      en-US: BODY\n    type: textarea\n    placeholder: 'Available When POST PUT'\n    required: false\n# collect metrics config list\nmetrics:\n  # metrics - auth\n  - name: auth\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-whether it is a metrics label field\n      - field: token\n        type: 1\n      - field: refreshToken\n        type: 1\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # http host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url\n      url: /api/account/auth/form\n      # http method: GET POST PUT DELETE PATCH\n      method: POST\n      # if enabled https\n      ssl: ^_^ssl^_^\n      payload: ^_^payload^_^\n      # http request header content\n      headers:\n        content-type: ^_^contentType^_^\n        ^_^headers^_^: ^_^headers^_^\n      # http request params\n      params:\n        ^_^params^_^: ^_^params^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, prometheus-prometheus exporter rule\n      parseType: jsonPath\n      parseScript: '$.data'\n---\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"At this time, save and apply, add ",(0,o.yg)("inlineCode",{parentName:"strong"},"hertzbeat_token")," type monitoring on the system page, configure input parameters, ",(0,o.yg)("inlineCode",{parentName:"strong"},"content-type")," fill in ",(0,o.yg)("inlineCode",{parentName:"strong"},"application/json"),", ",(0,o.yg)("inlineCode",{parentName:"strong"},"request Body")," fill in the account password json as follows: ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "credential": "hertzbeat",\n   "identifier": "admin"\n}\n')),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(24813).A,width:"3838",height:"1672"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"}," After the addition is successful, we can see the ",(0,o.yg)("inlineCode",{parentName:"strong"},"token"),", ",(0,o.yg)("inlineCode",{parentName:"strong"},"refreshToken")," metric data we collected on the details page. ")),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(34134).A,width:"1921",height:"861"})),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(12223).A,width:"1922",height:"559"})),(0,o.yg)("h3",{id:"use-token-as-a-variable-parameter-to-collect-and-use-the-following-metricss"},"Use ",(0,o.yg)("inlineCode",{parentName:"h3"},"token")," as a variable parameter to collect and use the following metricss"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Add an index group definition ",(0,o.yg)("inlineCode",{parentName:"strong"},"summary")," in ",(0,o.yg)("inlineCode",{parentName:"strong"},"app-hertzbeat_token.yml"),", which is the same as ",(0,o.yg)("inlineCode",{parentName:"strong"},"summary")," in Tutorial 1, and set the collection priority to 1")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Set the authentication method in the HTTP protocol configuration of this index group to ",(0,o.yg)("inlineCode",{parentName:"strong"},"Bearer Token"),", assign the index ",(0,o.yg)("inlineCode",{parentName:"strong"},"token")," collected by the previous index group ",(0,o.yg)("inlineCode",{parentName:"strong"},"auth")," as a parameter, and use ",(0,o.yg)("inlineCode",{parentName:"strong"},"^o^")," as the internal replacement symbol, that is ",(0,o.yg)("inlineCode",{parentName:"strong"}," ^o^token^o^"),". as follows:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"   - name: summary\n# When the protocol is the http protocol, the specific collection configuration\n     http:\n       # authentication\n       authorization:\n         # Authentication methods: Basic Auth, Digest Auth, Bearer Token\n         type: Bearer Token\n         bearerTokenToken: ^o^token^o^\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The final ",(0,o.yg)("inlineCode",{parentName:"strong"},"hertzbeat_token")," template yml is defined as follows:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: hertzbeat_token\n# The monitoring i18n name\nname:\n  zh-CN: HertzBeat(Token)\n  en-US: HertzBeat(Token)\n# The description and help of this monitoring type\nhelp:\n  zh-CN: Hertzbeat \u5bf9 HertzBeat\u76d1\u63a7(Token)\u8fdb\u884c\u6d4b\u91cf\u76d1\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u70b9\u51fb \u201c<i>\u65b0\u5efa HertzBeat\u76d1\u63a7(Token)</i>\u201d \u5e76\u8fdb\u884c\u914d\u7f6e\uff0c\u6216\u8005\u9009\u62e9\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5bfc\u5165\u5df2\u6709\u914d\u7f6e\u3002\n  en-US: Hertzbeat monitors HertzBeat Monitor(Token). You could click the \"<i>New HertzBeat Monitor(Token)</i>\" button and proceed with the configuration or import an existing setup through the \"<i>More Actions</i>\" menu.\n  zh-TW: Hertzbeat\u5c0dHertzBeat\u76e3\u63a7\uff08Token\uff09\u9032\u884c\u91cf\u6e2c\u76e3\u63a7\u3002<br>\u60a8\u53ef\u4ee5\u9ede\u64ca\u201c<i>\u65b0\u5efaHertzBeat\u76e3\u63a7\uff08Token\uff09</i>\u201d\u4e26\u9032\u884c\u914d\u5bd8\uff0c\u6216\u8005\u9078\u64c7\u201c<i>\u66f4\u591a\u64cd\u4f5c</i>\u201d\uff0c\u5c0e\u5165\u5df2\u6709\u914d\u5bd8\u3002\nhelpLink:\n  zh-CN: https://hertzbeat.apache.org/zh-cn/docs/help/hertzbeat_token\n  en-US: https://hertzbeat.apache.org/docs/help/hertzbeat_token\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u76ee\u6807Host\n      en-US: Target Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    required: true\n    defaultValue: 1157\n    placeholder: 'Please input port'\n  - field: ssl\n    name:\n      zh-CN: \u542f\u52a8SSL\n      en-US: SSL\n    # type-param field type(boolean mapping the html switch tag)\n    type: boolean\n    required: false\n  - field: contentType\n    name:\n      zh-CN: Content-Type\n      en-US: Content-Type\n    type: text\n    placeholder: 'Request Body Type'\n    required: false\n  - field: payload\n    name:\n      zh-CN: \u8bf7\u6c42BODY\n      en-US: BODY\n    type: textarea\n    placeholder: 'Available When POST PUT'\n    required: false\n# collect metrics config list\nmetrics:\n  # metrics - auth\n  - name: auth\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-whether it is a metrics label field\n      - field: token\n        type: 1\n      - field: refreshToken\n        type: 1\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # http host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url\n      url: /api/account/auth/form\n      # http method: GET POST PUT DELETE PATCH\n      method: POST\n      # if enabled https\n      ssl: ^_^ssl^_^\n      payload: ^_^payload^_^\n      # http request header content\n      headers:\n        content-type: ^_^contentType^_^\n        ^_^headers^_^: ^_^headers^_^\n      # http request params\n      params:\n        ^_^params^_^: ^_^params^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, prometheus-prometheus exporter rule\n      parseType: jsonPath\n      parseScript: '$.data'\n---\n  - name: summary\n    priority: 1\n    fields:\n      - field: app\n        type: 1\n        label: true\n      - field: category\n        type: 1\n      - field: status\n        type: 0\n      - field: size\n        type: 0\n      - field: availableSize\n        type: 0\n    protocol: http\n    http:\n      host: ^_^host^_^\n      port: ^_^port^_^\n      url: /api/summary\n      method: GET\n      ssl: ^_^ssl^_^\n      authorization:\n        type: Bearer Token\n        # ^o^xxx^o^ ^o^ substitution represents the value of the acquisition metric xxx of the previous priority\n        bearerTokenToken: ^o^token^o^\n      parseType: jsonPath\n      parseScript: '$.data.apps.*'\n\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"After the configuration is complete, save and apply, and check the monitoring details page")),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(5672).A,width:"3840",height:"1718"})),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(45617).A,width:"3836",height:"1712"})),(0,o.yg)("h3",{id:"set-threshold-alarm-notification"},"Set threshold alarm notification"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Next, we can set the threshold normally. After the alarm is triggered, we can view it in the alarm center, add a new recipient, set alarm notification, etc. Have Fun!!!")),(0,o.yg)("hr",null),(0,o.yg)("h4",{id:"over"},"over!"),(0,o.yg)("p",null,"This is the end of the practice of custom monitoring of the HTTP protocol. The HTTP protocol also has other parameters such as headers and params. We can define it like postman, and the playability is also very high!"),(0,o.yg)("p",null,"If you think hertzbeat is a good open source project, please star us on GitHub Gitee, thank you very much."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"github: ",(0,o.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))))}c.isMDXComponent=!0},24813:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-5-f677571505236c90414d8e16957045f4.png"},34134:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-6-dc12eb96a806c88f77d72379614c7118.png"},12223:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-7-310b8de0cc940046c90691944d76b11d.png"},5672:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-8-fb1cc0ffced549c654f6b32f0ba78831.png"},45617:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-9-88108e1c85ebd7d2a342e0e7b79c9d4b.png"}}]);