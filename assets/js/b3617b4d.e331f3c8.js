"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[62066],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),c=o,y=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(58168),o=(n(96540),n(15680));const i={id:"extend-point",title:"Custom Monitoring",sidebar_label:"Custom Monitoring"},a=void 0,p={unversionedId:"advanced/extend-point",id:"advanced/extend-point",title:"Custom Monitoring",description:"HertzBeat has custom monitoring ability. You only need to configure monitoring template yml to fit a custom monitoring type.",source:"@site/docs/advanced/extend-point.md",sourceDirName:"advanced",slug:"/advanced/extend-point",permalink:"/docs/advanced/extend-point",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/advanced/extend-point.md",tags:[],version:"current",frontMatter:{id:"extend-point",title:"Custom Monitoring",sidebar_label:"Custom Monitoring"},sidebar:"docs",previous:{title:"Practice Example",permalink:"/docs/start/ssl-cert-practice"},next:{title:"Tutorial Case",permalink:"/docs/advanced/extend-tutorial"}},l={},m=[{value:"Custom Monitoring Steps",id:"custom-monitoring-steps",level:3},{value:"Monitoring Templates YML",id:"monitoring-templates-yml",level:3}],s={toc:m};function u(e){let{components:t,...n}=e;return(0,o.yg)("wrapper",(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"HertzBeat has custom monitoring ability. You only need to configure monitoring template yml to fit a custom monitoring type.",(0,o.yg)("br",{parentName:"p"}),"\n","Custom monitoring currently supports ",(0,o.yg)("a",{parentName:"p",href:"extend-http"},"HTTP protocol"),"\uff0c",(0,o.yg)("a",{parentName:"p",href:"extend-jdbc"},"JDBC protocol"),", ",(0,o.yg)("a",{parentName:"p",href:"extend-ssh"},"SSH protocol"),", ",(0,o.yg)("a",{parentName:"p",href:"extend-jmx"},"JMX protocol"),", ",(0,o.yg)("a",{parentName:"p",href:"extend-snmp"},"SNMP protocol"),". And it will support more general protocols in the future.        ")),(0,o.yg)("h3",{id:"custom-monitoring-steps"},"Custom Monitoring Steps"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,o.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,o.yg)("strong",{parentName:"p"},"New Template")," -> ",(0,o.yg)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,o.yg)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,o.yg)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")," "),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Configuration usages of the monitoring templates yml are detailed below."),(0,o.yg)("h3",{id:"monitoring-templates-yml"},"Monitoring Templates YML"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,o.yg)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.  ")),(0,o.yg)("p",null,"eg\uff1aDefine a custom monitoring type ",(0,o.yg)("inlineCode",{parentName:"p"},"app")," named ",(0,o.yg)("inlineCode",{parentName:"p"},"example2")," which use the HTTP protocol to collect data.    "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,o.yg)("strong",{parentName:"p"},"Config New Monitoring Template Yml")," -> ",(0,o.yg)("strong",{parentName:"p"},"Save and Apply"),"  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: example2\n# The monitoring i18n name\nname:\n  zh-CN: \u6a21\u62df\u7f51\u7ad9\u76d1\u6d4b\n  en-US: EXAMPLE WEBSITE\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: port\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    # required-true or false\n    required: true\n    # default value\n    defaultValue: 80\n  # field-param field key\n  - field: uri\n    # name-param field display i18n name\n    name:\n      zh-CN: \u76f8\u5bf9\u8def\u5f84\n      en-US: URI\n    # type-param field type(most mapping the html input tag)\n    type: text\n    # when type is text, use limit to limit string length\n    limit: 200\n    # required-true or false\n    required: false\n    # param field input placeholder\n    placeholder: 'Website uri path(no ip port) EG:/console'\n  # field-param field key\n  - field: ssl\n    # name-param field display i18n name\n    name:\n      zh-CN: \u542f\u7528HTTPS\n      en-US: HTTPS\n    # type-param field type(most mapping the html input type)\n    type: boolean\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: timeout\n    # name-param field display i18n name\n    name:\n      zh-CN: \u8d85\u65f6\u65f6\u95f4(ms)\n      en-US: Timeout(ms)\n    # type-param field type(most mapping the html input tag)\n    type: number\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n\nmetrics:\n  # metrics - summary, inner monitoring metrics (responseTime - response time, keyword - number of keywords)\n  - name: summary\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-if is metrics label\n      - field: responseTime\n        type: 0\n        unit: ms\n      - field: keyword\n        type: 0\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # http host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url\n      url: ^_^uri^_^\n      timeout: ^_^timeout^_^\n      # http method: GET POST PUT DELETE PATCH\n      method: GET\n      # if enabled https\n      ssl: ^_^ssl^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, prometheus-prometheus exporter rule\n      parseType: website\n\n")))}u.isMDXComponent=!0}}]);