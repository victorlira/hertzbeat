"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[62433],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(58168),i=(n(96540),n(15680));const a={id:"extend-http-example-token",title:"Tutorial 2 Obtain TOKEN index value based on HTTP protocol for subsequent collection and authentication",sidebar_label:"Tutorial 2 Get TOKEN for subsequent authentication"},r=void 0,s={unversionedId:"advanced/extend-http-example-token",id:"version-v1.1.x/advanced/extend-http-example-token",title:"Tutorial 2 Obtain TOKEN index value based on HTTP protocol for subsequent collection and authentication",description:"Through this tutorial, we will describe step by step how to modify on the basis of tutorial 1, add an metrics, first call the authentication interface to obtain the TOKEN, and use the TOKEN as a parameter for the subsequent metrics collection and authentication.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/advanced/extend-http-example-token.md",sourceDirName:"advanced",slug:"/advanced/extend-http-example-token",permalink:"/docs/v1.1.x/advanced/extend-http-example-token",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/advanced/extend-http-example-token.md",tags:[],version:"v1.1.x",frontMatter:{id:"extend-http-example-token",title:"Tutorial 2 Obtain TOKEN index value based on HTTP protocol for subsequent collection and authentication",sidebar_label:"Tutorial 2 Get TOKEN for subsequent authentication"},sidebar:"docs",previous:{title:"Tutorial 1 Adapting an HTTP protocol monitoring",permalink:"/docs/v1.1.x/advanced/extend-http-example-hertzbeat"},next:{title:"JDBC Protocol Custom Monitoring",permalink:"/docs/v1.1.x/advanced/extend-jdbc"}},l={},p=[{value:"Request process",id:"request-process",level:3},{value:"Add custom monitoring type <code>hertzbeat_token</code>",id:"add-custom-monitoring-type-hertzbeat_token",level:3},{value:"Define metrics <code>auth</code> login request to get <code>token</code>",id:"define-metrics-auth-login-request-to-get-token",level:3},{value:"Use <code>token</code> as a variable parameter to collect and use the following metricss",id:"use-token-as-a-variable-parameter-to-collect-and-use-the-following-metricss",level:3},{value:"Set threshold alarm notification",id:"set-threshold-alarm-notification",level:3},{value:"over!",id:"over",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.yg)("wrapper",(0,o.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Through this tutorial, we will describe step by step how to modify on the basis of tutorial 1, add an metrics, first call the authentication interface to obtain the TOKEN, and use the TOKEN as a parameter for the subsequent metrics collection and authentication."),(0,i.yg)("p",null,"Before reading this tutorial, we hope that you are familiar with how to customize types, metrics, protocols, etc. from ","[Custom Monitoring]"," (extend-point) and ","[http Protocol Customization]"," (extend-http)."),(0,i.yg)("h3",{id:"request-process"},"Request process"),(0,i.yg)("p",null,"\u3010",(0,i.yg)("strong",{parentName:"p"},"Authentication information metrics (highest priority)"),"\u3011\u3010",(0,i.yg)("strong",{parentName:"p"},"HTTP interface carries account password call"),"\u3011->\u3010",(0,i.yg)("strong",{parentName:"p"},"Response data analysis"),"\u3011->\u3010",(0,i.yg)("strong",{parentName:"p"},"Analysis and issuance of TOKEN-accessToken as an metric "),"] -> ","[",(0,i.yg)("strong",{parentName:"p"},"Assign accessToken as a variable parameter to other collection index groups"),"]"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Here we still use the hertzbeat monitoring example of Tutorial 1! The hertzbeat background interface not only supports the basic direct account password authentication used in Tutorial 1, but also supports token authentication.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"We need ",(0,i.yg)("inlineCode",{parentName:"strong"},"POST")," to call the login interface ",(0,i.yg)("inlineCode",{parentName:"strong"},"/api/account/auth/form")," to get ",(0,i.yg)("inlineCode",{parentName:"strong"},"accessToken"),", the request body (json format) is as follows"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "credential": "hertzbeat",\n   "identifier": "admin"\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The response structure data is as follows"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "data": {\n     "token": "xxxx",\n     "refreshToken": "xxxx"\n   },\n   "msg": null,\n   "code": 0\n}\n')),(0,i.yg)("h3",{id:"add-custom-monitoring-type-hertzbeat_token"},"Add custom monitoring type ",(0,i.yg)("inlineCode",{parentName:"h3"},"hertzbeat_token")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The custom monitoring type needs to add a new configuration YML file. We directly reuse the ",(0,i.yg)("inlineCode",{parentName:"li"},"hertzbeat")," monitoring type in Tutorial 1 and modify it based on it")),(0,i.yg)("p",null,"A monitoring configuration definition file named after the monitoring type - app-hertzbeat_token.yml needs to be located in the installation directory /hertzbeat/define/"),(0,i.yg)("p",null,"The monitoring configuration definition file is used to define the collection type, which protocol collection method needs to be used, the collection metrics, protocol configuration parameters, etc.\nWe directly reuse the definition content in app-hertzbeat.yml and modify it to our current monitoring type ",(0,i.yg)("inlineCode",{parentName:"p"},"hertzbeat_auth")," configuration parameters, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"app, category, etc"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"# This monitoring type belongs to the category: service-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type (consistent with the file name) eg: linux windows tomcat mysql aws...\napp: hertzbeat_token\nname:\n   en-GB: HertzBeat Monitoring (Token)\n   en-US: Hertz Beat Monitor (Token)\nparams:\n   # field - field name identifier\n   - field: host\n     # name - parameter field display name\n     name:\n       en-CN: Host Host\n       en-US: Host\n     # type-field type, style (mostly map input tag type attribute)\n     type: host\n     # Whether it is a required item true-required false-optional\n     required: true\n   - field: port\n     name:\n       en-CN: port\n       en-US: Port\n     type: number\n     # When the type is number, use range to represent the range\n     range: '[0,65535]'\n     required: true\n     # port default\n     defaultValue: 1157\n     # Parameter input box prompt information\n     placeholder: 'Please enter the port'\n   - field: ssl\n     name:\n       en-CN: Enable SSL\n       en-US: SSL\n     # When the type is boolean, the front end uses switch to display the switch\n     type: boolean\n     required: false\n   - field: contentType\n     name:\n       en-CN: Content-Type\n       en-US: Content-Type\n     type: text\n     placeholder: 'Request Body Type'\n     required: false\n   - field: payload\n     name:\n       en-CN: request BODY\n       en-US: BODY\n     type: textarea\n     placeholder: 'Available When POST PUT'\n     required: false\n# Index group list configuration under todo\nmetrics: ....\n\n")),(0,i.yg)("h3",{id:"define-metrics-auth-login-request-to-get-token"},"Define metrics ",(0,i.yg)("inlineCode",{parentName:"h3"},"auth")," login request to get ",(0,i.yg)("inlineCode",{parentName:"h3"},"token")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Add an index group definition ",(0,i.yg)("inlineCode",{parentName:"li"},"auth")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"app-hertzbeat_token.yml"),", set the collection priority to the highest 0, and collect the index ",(0,i.yg)("inlineCode",{parentName:"li"},"token"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"\n# This monitoring type belongs to the category: service-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type (consistent with the file name) eg: linux windows tomcat mysql aws...\napp: hertzbeat_token\nname:\n   en-GB: HertzBeat Monitoring (Token)\n   en-US: Hertz Beat Monitor (Token)\nparams:\n   # field - field name identifier\n   - field: host\n     # name - parameter field display name\n     name:\n       en-CN: Host Host\n       en-US: Host\n     # type-field type, style (mostly map input tag type attribute)\n     type: host\n     # Whether it is a required item true-required false-optional\n     required: true\n   - field: port\n     name:\n       en-CN: port\n       en-US: Port\n     type: number\n     # When the type is number, use range to represent the range\n     range: '[0,65535]'\n     required: true\n     # port default\n     defaultValue: 1157\n     # Parameter input box prompt information\n     placeholder: 'Please enter the port'\n   - field: ssl\n     name:\n       en-CN: Enable SSL\n       en-US: SSL\n     # When the type is boolean, the front end uses switch to display the switch\n     type: boolean\n     required: false\n   - field: contentType\n     name:\n       en-CN: Content-Type\n       en-US: Content-Type\n     type: text\n     placeholder: 'Request Body Type'\n     required: false\n   - field: payload\n     name:\n       en-CN: request BODY\n       en-US: BODY\n     type: textarea\n     placeholder: 'Available When POST PUT'\n     required: false\n# List of metricss\nmetrics:\n   # The first monitoring index group auth\n   # Note: Built-in monitoring metrics have (responseTime - response time)\n   - name: auth\n     # The smaller the index group scheduling priority (0-127), the higher the priority, and the index group with low priority will not be scheduled until the collection of index groups with high priority is completed, and the index groups with the same priority will be scheduled and collected in parallel\n     # The metrics with priority 0 is the availability metrics, that is, it will be scheduled first, and other metricss will continue to be scheduled if the collection is successful, and the scheduling will be interrupted if the collection fails\n     priority: 0\n     # Specific monitoring metrics in the metrics\n     fields:\n       # metric information includes field name type field type: 0-number, 1-string , label-if is metrics label,  unit: metric unit\n       - field: token\n         type: 1\n       - field: refreshToken\n         type: 1\n     # Monitoring and collection protocol eg: sql, ssh, http, telnet, wmi, snmp, sdk\n     protocol: http\n     # When the protocol is the http protocol, the specific collection configuration\n     http:\n       host: ^_^host^_^\n       # port\n       port: ^_^port^_^\n       # url request interface path\n       url: /api/account/auth/form\n       # Request method GET POST PUT DELETE PATCH\n       method: POST\n       # Whether to enable ssl/tls, that is, http or https, default false\n       ssl: ^_^ssl^_^\n       payload: ^_^payload^_^\n       # request header content\n       headers:\n         content-type: ^_^contentType^_^\n       # Response data analysis method: default-system rules, jsonPath-jsonPath script, website-website usability metric monitoring\n       parseType: jsonPath\n       parseScript: '$.data'\n\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"At this time, restart the hertzbeat system, add ",(0,i.yg)("inlineCode",{parentName:"strong"},"hertzbeat_token")," type monitoring on the system page, configure input parameters, ",(0,i.yg)("inlineCode",{parentName:"strong"},"content-type")," fill in ",(0,i.yg)("inlineCode",{parentName:"strong"},"application/json"),", ",(0,i.yg)("inlineCode",{parentName:"strong"},"request Body")," fill in the account password json as follows: ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "credential": "hertzbeat",\n   "identifier": "admin"\n}\n')),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(24813).A,width:"3838",height:"1672"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"}," After the addition is successful, we can see the ",(0,i.yg)("inlineCode",{parentName:"strong"},"token"),", ",(0,i.yg)("inlineCode",{parentName:"strong"},"refreshToken")," metric data we collected on the details page. ")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(34134).A,width:"1921",height:"861"})),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(12223).A,width:"1922",height:"559"})),(0,i.yg)("h3",{id:"use-token-as-a-variable-parameter-to-collect-and-use-the-following-metricss"},"Use ",(0,i.yg)("inlineCode",{parentName:"h3"},"token")," as a variable parameter to collect and use the following metricss"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Add an index group definition ",(0,i.yg)("inlineCode",{parentName:"strong"},"summary")," in ",(0,i.yg)("inlineCode",{parentName:"strong"},"app-hertzbeat_token.yml"),", which is the same as ",(0,i.yg)("inlineCode",{parentName:"strong"},"summary")," in Tutorial 1, and set the collection priority to 1")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Set the authentication method in the HTTP protocol configuration of this index group to ",(0,i.yg)("inlineCode",{parentName:"strong"},"Bearer Token"),", assign the index ",(0,i.yg)("inlineCode",{parentName:"strong"},"token")," collected by the previous index group ",(0,i.yg)("inlineCode",{parentName:"strong"},"auth")," as a parameter, and use ",(0,i.yg)("inlineCode",{parentName:"strong"},"^o^")," as the internal replacement symbol, that is ",(0,i.yg)("inlineCode",{parentName:"strong"}," ^o^token^o^"),". as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"   - name: summary\n# When the protocol is the http protocol, the specific collection configuration\n     http:\n       # authentication\n       authorization:\n         # Authentication methods: Basic Auth, Digest Auth, Bearer Token\n         type: Bearer Token\n         bearerTokenToken: ^o^token^o^\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The final ",(0,i.yg)("inlineCode",{parentName:"strong"},"app-hertzbeat_token.yml")," is defined as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"\n# This monitoring type belongs to the category: service-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type (consistent with the file name) eg: linux windows tomcat mysql aws...\napp: hertzbeat_token\nname:\n   en-GB: HertzBeat Monitoring (Token)\n   en-US: Hertz Beat Monitor (Token)\nparams:\n   # field - field name identifier\n   - field: host\n     # name - parameter field display name\n     name:\n       en-CN: Host Host\n       en-US: Host\n     # type-field type, style (mostly map input tag type attribute)\n     type: host\n     # Whether it is a required item true-required false-optional\n     required: true\n   - field: port\n     name:\n       en-CN: port\n       en-US: Port\n     type: number\n     # When the type is number, use range to represent the range\n     range: '[0,65535]'\n     required: true\n     # port default\n     defaultValue: 1157\n     # Parameter input box prompt information\n     placeholder: 'Please enter the port'\n   - field: ssl\n     name:\n       en-CN: Enable SSL\n       en-US: SSL\n     # When the type is boolean, the front end uses switch to display the switch\n     type: boolean\n     required: false\n   - field: contentType\n     name:\n       en-CN: Content-Type\n       en-US: Content-Type\n     type: text\n     placeholder: 'Request Body Type'\n     required: false\n   - field: payload\n     name:\n       en-CN: request BODY\n       en-US: BODY\n     type: textarea\n     placeholder: 'Available When POST PUT'\n     required: false\n# List of metricss\nmetrics:\n# The first monitoring index group cpu\n# Note: Built-in monitoring metrics have (responseTime - response time)\n   - name: auth\n     # The smaller the index group scheduling priority (0-127), the higher the priority, and the index group with low priority will not be scheduled until the collection of index groups with high priority is completed, and the index groups with the same priority will be scheduled and collected in parallel\n     # The metrics with priority 0 is the availability metrics, that is, it will be scheduled first, and other metricss will continue to be scheduled if the collection is successful, and the scheduling will be interrupted if the collection fails\n     priority: 0\n     # Specific monitoring metrics in the metrics\n     fields:\n       # metric information includes field name type field type: 0-number, 1-string , label-if is metrics label,  unit: metric unit\n       - field: token\n         type: 1\n       - field: refreshToken\n         type: 1\n     # Monitoring and collection protocol eg: sql, ssh, http, telnet, wmi, snmp, sdk\n     protocol: http\n     # When the protocol is the http protocol, the specific collection configuration\n     http:\n       host: ^_^host^_^\n       # port\n       port: ^_^port^_^\n       # url request interface path\n       url: /api/account/auth/form\n       # Request method GET POST PUT DELETE PATCH\n       method: POST\n       # Whether to enable ssl/tls, that is, http or https, default false\n       ssl: ^_^ssl^_^\n       payload: ^_^payload^_^\n       # request header content\n       headers:\n         content-type: ^_^contentType^_^\n         ^_^headers^_^: ^_^headers^_^\n       # Request parameter content\n       params:\n         ^_^params^_^: ^_^params^_^\n       # Response data analysis method: default-system rules, jsonPath-jsonPath script, website-website usability metric monitoring\n       parseType: jsonPath\n       parseScript: '$.data'\n\n\n   - name: summary\n     # The smaller the index group scheduling priority (0-127), the higher the priority, and the index group with low priority will not be scheduled until the collection of index groups with high priority is completed, and the index groups with the same priority will be scheduled and collected in parallel\n     # The metrics with priority 0 is the availability metrics, that is, it will be scheduled first, and other metricss will continue to be scheduled if the collection is successful, and the scheduling will be interrupted if the collection fails\n     priority: 1\n     # Specific monitoring metrics in the metrics\n     fields:\n       # metric information includes field name type field type: 0-number, 1-string , label-if is metrics label,  unit: metric unit\n       - field: category\n         type: 1\n       - field: app\n         type: 1\n       - field: size\n         type: 0\n       - field: status\n         type: 0\n# Monitoring and collection protocol eg: sql, ssh, http, telnet, wmi, snmp, sdk\n     protocol: http\n# When the protocol is the http protocol, the specific collection configuration\n     http:\n       host: ^_^host^_^\n       # port\n       port: ^_^port^_^\n       # url request interface path\n       url: /api/summary\n       # Request method GET POST PUT DELETE PATCH\n       method: GET\n       # Whether to enable ssl/tls, that is, http or https, default false\n       ssl: ^_^ssl^_^\n       # authentication\n       authorization:\n         # Authentication methods: Basic Auth, Digest Auth, Bearer Token\n         type: Bearer Token\n         bearerTokenToken: ^o^token^o^\n       # Response data analysis method: default-system rules, jsonPath-jsonPath script, website-website usability metric monitoring\n       parseType: jsonPath\n       parseScript: '$.data.apps.*'\n\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"After the configuration is complete, restart the ",(0,i.yg)("inlineCode",{parentName:"strong"},"hertzbeat")," system again, and check the monitoring details page")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(5672).A,width:"3840",height:"1718"})),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(45617).A,width:"3836",height:"1712"})),(0,i.yg)("h3",{id:"set-threshold-alarm-notification"},"Set threshold alarm notification"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Next, we can set the threshold normally. After the alarm is triggered, we can view it in the alarm center, add a new recipient, set alarm notification, etc. Have Fun!!!")),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"over"},"over!"),(0,i.yg)("p",null,"This is the end of the practice of custom monitoring of the HTTP protocol. The HTTP protocol also has other parameters such as headers and params. We can define it like postman, and the playability is also very high!"),(0,i.yg)("p",null,"If you think hertzbeat is a good open source project, please star us on GitHub Gitee, thank you very much. Thanks for the old iron support. Refill!"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"github: ",(0,i.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"gitee: ",(0,i.yg)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}d.isMDXComponent=!0},24813:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/extend-http-example-5-f677571505236c90414d8e16957045f4.png"},34134:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/extend-http-example-6-dc12eb96a806c88f77d72379614c7118.png"},12223:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/extend-http-example-7-310b8de0cc940046c90691944d76b11d.png"},5672:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/extend-http-example-8-fb1cc0ffced549c654f6b32f0ba78831.png"},45617:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/extend-http-example-9-88108e1c85ebd7d2a342e0e7b79c9d4b.png"}}]);