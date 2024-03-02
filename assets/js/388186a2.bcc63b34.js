"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[13160],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),g=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=g(n),y=r,u=d["".concat(m,".").concat(y)]||d[y]||p[y]||l;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={id:"iotdb",title:"Monitoring Apache IoTDB Database",sidebar_label:"IoTDB Database",keywords:["open source monitoring tool","open source database monitoring tool","monitoring IotDB database metrics"]},i=void 0,o={unversionedId:"help/iotdb",id:"version-v1.3.x/help/iotdb",title:"Monitoring Apache IoTDB Database",description:"Monitor the running status of the Apache IoTDB Internet of Things time series database (JVM-related), memory task clusters and other related Metrics.",source:"@site/versioned_docs/version-v1.3.x/help/iotdb.md",sourceDirName:"help",slug:"/help/iotdb",permalink:"/docs/v1.3.x/help/iotdb",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/help/iotdb.md",tags:[],version:"v1.3.x",frontMatter:{id:"iotdb",title:"Monitoring Apache IoTDB Database",sidebar_label:"IoTDB Database",keywords:["open source monitoring tool","open source database monitoring tool","monitoring IotDB database metrics"]},sidebar:"docs",previous:{title:"OpenGauss Database",permalink:"/docs/v1.3.x/help/opengauss"},next:{title:"REDIS\u6570\u636e\u5e93",permalink:"/docs/v1.3.x/help/redis"}},m={},g=[{value:"Operation before monitoring",id:"operation-before-monitoring",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Metric collection: cluster_node_status",id:"metric-collection-cluster_node_status",level:4},{value:"Metric collection: jvm_memory_committed_bytes",id:"metric-collection-jvm_memory_committed_bytes",level:4},{value:"Metric collection: jvm_memory_used_bytes",id:"metric-collection-jvm_memory_used_bytes",level:4},{value:"Metric collection: jvm_threads_states_threads",id:"metric-collection-jvm_threads_states_threads",level:4},{value:"Index collection: quantity business data",id:"index-collection-quantity-business-data",level:4},{value:"Metric collection: cache_hit cache",id:"metric-collection-cache_hit-cache",level:4},{value:"Metric collection: queue task queue",id:"metric-collection-queue-task-queue",level:4},{value:"Metric collection: thrift_connections",id:"metric-collection-thrift_connections",level:4}],c={toc:g};function p(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Monitor the running status of the Apache IoTDB Internet of Things time series database (JVM-related), memory task clusters and other related Metrics.")),(0,r.yg)("h2",{id:"operation-before-monitoring"},"Operation before monitoring"),(0,r.yg)("p",null,"You need to enable the ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," function in IoTDB, which will provide interface data in the form of prometheus metrics."),(0,r.yg)("p",null,"To enable the ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," function, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Metric-Tool.html"},"Official Documentation")),(0,r.yg)("p",null,"The main steps are as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The metric collection is disabled by default, you need to modify the parameters in ",(0,r.yg)("inlineCode",{parentName:"li"},"conf/iotdb-metric.yml")," first, then restart the server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# Whether to start the monitoring module, the default is false\nenableMetric: true\n\n# Whether to enable operation delay statistics\nenablePerformanceStat: false\n\n# Data provision method, externally provide metrics data through jmx and prometheus protocol, optional parameters: [JMX, PROMETHEUS, IOTDB], IOTDB is closed by default.\nmetricReporterList:\n   - JMX\n   - PROMETHEUS\n\n# The metric architecture used at the bottom layer, optional parameters: [MICROMETER, DROPWIZARD]\nmonitorType: MICROMETER\n\n# Initialize the level of the metric, optional parameters: [CORE, IMPORTANT, NORMAL, ALL]\nmetricLevel: IMPORTANT\n\n# Predefined metrics set, optional parameters: [JVM, LOGBACK, FILE, PROCESS, SYSTEM]\npredefinedMetrics:\n   - JVM\n   - FILE\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart IoTDB, open a browser or use curl to access http://servier_ip:9091/metrics, and you can see the metric data.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the corresponding IoTDB monitoring in HertzBeat."))),(0,r.yg)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.yg)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Port"),(0,r.yg)("td",{parentName:"tr",align:null},"The port provided by the IoTDB Metric interface, which is 9091 by default.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP request query timeout")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.yg)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.yg)("h3",{id:"collect-metrics"},"Collect metrics"),(0,r.yg)("h4",{id:"metric-collection-cluster_node_status"},"Metric collection: cluster_node_status"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Node name IP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Node status, 1=online 2=offline")))),(0,r.yg)("h4",{id:"metric-collection-jvm_memory_committed_bytes"},"Metric collection: jvm_memory_committed_bytes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"area"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"heap memory or nonheap memory")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"memory block")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"The memory size currently requested by the JVM")))),(0,r.yg)("h4",{id:"metric-collection-jvm_memory_used_bytes"},"Metric collection: jvm_memory_used_bytes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"area"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"heap memory or nonheap memory")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"memory block")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM used memory size")))),(0,r.yg)("h4",{id:"metric-collection-jvm_threads_states_threads"},"Metric collection: jvm_threads_states_threads"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"thread state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of threads corresponding to the thread state")))),(0,r.yg)("h4",{id:"index-collection-quantity-business-data"},"Index collection: quantity business data"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Business name timeSeries/storageGroup/device/deviceUsingTemplate")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"type total/normal/template/template")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The current timeSeries/storageGroup/device/The number of devices that have activated the template")))),(0,r.yg)("h4",{id:"metric-collection-cache_hit-cache"},"Metric collection: cache_hit cache"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Cache name chunk/timeSeriesMeta/bloomFilter")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"chunk/timeSeriesMeta cache hit rate, bloomFilter interception rate")))),(0,r.yg)("h4",{id:"metric-collection-queue-task-queue"},"Metric collection: queue task queue"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Queue name compaction_inner/compaction_cross/flush")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"status running/waiting")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of tasks at current time")))),(0,r.yg)("h4",{id:"metric-collection-thrift_connections"},"Metric collection: thrift_connections"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"thrift current connection number")))))}p.isMDXComponent=!0}}]);