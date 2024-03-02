"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[75654],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=p(n),u=r,d=y["".concat(m,".").concat(u)]||y[u]||c[u]||l;return n?a.createElement(d,o(o({ref:t},g),{},{components:n})):a.createElement(d,o({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={id:"shenyu",title:"Monitoring\uff1aApache ShenYu API Gateway",sidebar_label:"Apache ShenYu",keywords:["open source monitoring tool","open source apache shenyu monitoring tool","monitoring apache shenyu metrics"]},o=void 0,i={unversionedId:"help/shenyu",id:"version-v1.1.x/help/shenyu",title:"Monitoring\uff1aApache ShenYu API Gateway",description:"monitor ShenYu running status(JVM-related), include request response and other related metrics.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/shenyu.md",sourceDirName:"help",slug:"/help/shenyu",permalink:"/docs/v1.1.x/help/shenyu",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/shenyu.md",tags:[],version:"v1.1.x",frontMatter:{id:"shenyu",title:"Monitoring\uff1aApache ShenYu API Gateway",sidebar_label:"Apache ShenYu",keywords:["open source monitoring tool","open source apache shenyu monitoring tool","monitoring apache shenyu metrics"]},sidebar:"docs",previous:{title:"Apache Tomcat",permalink:"/docs/v1.1.x/help/tomcat"},next:{title:"DynamicTp Monitor",permalink:"/docs/v1.1.x/help/dynamic_tp"}},m={},p=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Index collection: shenyu_request_total",id:"index-collection-shenyu_request_total",level:4},{value:"Metric collection: shenyu_request_throw_created",id:"metric-collection-shenyu_request_throw_created",level:4},{value:"Metric collection: process_cpu_seconds_total",id:"metric-collection-process_cpu_seconds_total",level:4},{value:"Metric collection: process_open_fds",id:"metric-collection-process_open_fds",level:4},{value:"Metric collection: process_max_fds",id:"metric-collection-process_max_fds",level:4},{value:"Metric collection: jvm_info",id:"metric-collection-jvm_info",level:4},{value:"Metric collection: jvm_memory_bytes_used",id:"metric-collection-jvm_memory_bytes_used",level:4},{value:"Metric collection: jvm_memory_pool_bytes_used",id:"metric-collection-jvm_memory_pool_bytes_used",level:4},{value:"Metric collection: jvm_memory_pool_bytes_committed",id:"metric-collection-jvm_memory_pool_bytes_committed",level:4},{value:"Metric collection: jvm_memory_pool_bytes_max",id:"metric-collection-jvm_memory_pool_bytes_max",level:4},{value:"Metric collection: jvm_threads_state",id:"metric-collection-jvm_threads_state",level:4}],g={toc:p};function c(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"monitor ShenYu running status(JVM-related), include request response and other related metrics.           ")),(0,r.yg)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,r.yg)("p",null,"Enable ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," plugin in ShenYu, expose it's prometheus metrics endpoint\u3002  "),(0,r.yg)("p",null,"Refer ",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/docs/plugin-center/observability/metrics-plugin"},"ShenYu Document"),"  "),(0,r.yg)("p",null,"Two Steps Mainly: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"add metrics plugin dependency in gateway's pom.xml.  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"modify this config in shenyu gateway yaml. ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  metrics:\n    enabled: false #false is close, true is open\n    name : prometheus \n    host: 127.0.0.1 \n    port: 8090 \n    jmxConfig: \n    props:\n      jvm_enabled: true #enable jvm monitoring\n")),(0,r.yg)("p",null,"Finally, restart the access gateway metrics endpoint ",(0,r.yg)("inlineCode",{parentName:"p"},"http://ip:8090")," to respond to prometheus format data."),(0,r.yg)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.yg)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Port"),(0,r.yg)("td",{parentName:"tr",align:null},"The port provided by the gateway Metric interface, the default is 8090.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP request response timeout")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.yg)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.yg)("h3",{id:"collect-metrics"},"Collect metrics"),(0,r.yg)("h4",{id:"index-collection-shenyu_request_total"},"Index collection: shenyu_request_total"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Collect all requests from ShenYu gateway")))),(0,r.yg)("h4",{id:"metric-collection-shenyu_request_throw_created"},"Metric collection: shenyu_request_throw_created"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Collect the number of abnormal requests from ShenYu Gateway")))),(0,r.yg)("h4",{id:"metric-collection-process_cpu_seconds_total"},"Metric collection: process_cpu_seconds_total"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"total user and system CPU elapsed seconds")))),(0,r.yg)("h4",{id:"metric-collection-process_open_fds"},"Metric collection: process_open_fds"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"number of open file descriptors")))),(0,r.yg)("h4",{id:"metric-collection-process_max_fds"},"Metric collection: process_max_fds"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"maximum number of open file descriptors")))),(0,r.yg)("h4",{id:"metric-collection-jvm_info"},"Metric collection: jvm_info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"runtime"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM version information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"vendor"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM version information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM version information")))),(0,r.yg)("h4",{id:"metric-collection-jvm_memory_bytes_used"},"Metric collection: jvm_memory_bytes_used"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"area"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM memory area")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"used size of the given JVM memory region")))),(0,r.yg)("h4",{id:"metric-collection-jvm_memory_pool_bytes_used"},"Metric collection: jvm_memory_pool_bytes_used"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pool"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"used size of the given JVM memory pool")))),(0,r.yg)("h4",{id:"metric-collection-jvm_memory_pool_bytes_committed"},"Metric collection: jvm_memory_pool_bytes_committed"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pool"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"The committed size of the given JVM memory pool")))),(0,r.yg)("h4",{id:"metric-collection-jvm_memory_pool_bytes_max"},"Metric collection: jvm_memory_pool_bytes_max"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pool"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum size of the memory pool for the given JVM")))),(0,r.yg)("h4",{id:"metric-collection-jvm_threads_state"},"Metric collection: jvm_threads_state"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"thread state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of threads corresponding to the thread state")))))}c.isMDXComponent=!0}}]);