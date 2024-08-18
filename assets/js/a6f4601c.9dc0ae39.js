"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[98298],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),y=r,u=m["".concat(g,".").concat(y)]||m[y]||p[y]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={id:"opengauss",title:"OpenGauss Database Monitor",sidebar_label:"OpenGauss Database",keywords:["open source monitoring tool","open source database monitoring tool","monitoring opengauss database metrics"]},i=void 0,o={unversionedId:"help/opengauss",id:"version-v1.5.x/help/opengauss",title:"OpenGauss Database Monitor",description:"Collect and monitor the general performance Metrics of OpenGauss database.",source:"@site/versioned_docs/version-v1.5.x/help/opengauss.md",sourceDirName:"help",slug:"/help/opengauss",permalink:"/docs/v1.5.x/help/opengauss",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/opengauss.md",tags:[],version:"v1.5.x",frontMatter:{id:"opengauss",title:"OpenGauss Database Monitor",sidebar_label:"OpenGauss Database",keywords:["open source monitoring tool","open source database monitoring tool","monitoring opengauss database metrics"]},sidebar:"docs",previous:{title:"DM Database",permalink:"/docs/v1.5.x/help/dm"},next:{title:"NebulaGraph Database",permalink:"/docs/v1.5.x/help/nebulaGraph"}},g={},s=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1abasic",id:"metric-setbasic",level:4},{value:"Metric set\uff1astate",id:"metric-setstate",level:4},{value:"Metric set\uff1aactivity",id:"metric-setactivity",level:4}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of OpenGauss database.")),(0,r.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Port"),(0,r.yg)("td",{parentName:"tr",align:null},"Port provided by the database. The default is 5432")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Query timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the timeout time when SQL query does not respond to data, unit: ms, default: 3000ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Database name"),(0,r.yg)("td",{parentName:"tr",align:null},"Database instance name, optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Username"),(0,r.yg)("td",{parentName:"tr",align:null},"Database connection user name, optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Password"),(0,r.yg)("td",{parentName:"tr",align:null},"Database connection password, optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"URL"),(0,r.yg)("td",{parentName:"tr",align:null},"Database connection URL\uff0coptional\uff0cIf configured, the database name, user name, password and other parameters in the URL will overwrite the above configured parameters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,r.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,r.yg)("h3",{id:"collection-metric"},"Collection Metric"),(0,r.yg)("h4",{id:"metric-setbasic"},"Metric set\uff1abasic"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server_version"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Version number of the database server")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Database server exposure service port")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server_encoding"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Character set encoding of database server")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_directory"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Database storage data disk address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_connections"),(0,r.yg)("td",{parentName:"tr",align:null},"connections"),(0,r.yg)("td",{parentName:"tr",align:null},"Database maximum connections")))),(0,r.yg)("h4",{id:"metric-setstate"},"Metric set\uff1astate"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name, or share-object is a shared object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"conflicts"),(0,r.yg)("td",{parentName:"tr",align:null},"times"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of queries canceled in the database due to a conflict with recovery")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"deadlocks"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of deadlocks detected in the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blks_read"),(0,r.yg)("td",{parentName:"tr",align:null},"times"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of disk blocks read in the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blks_hit"),(0,r.yg)("td",{parentName:"tr",align:null},"times"),(0,r.yg)("td",{parentName:"tr",align:null},"Times the disk block has been found to be in the buffer, so there is no need to read it once (This only includes hits in the PostgreSQL buffer, not in the operating system file system buffer)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blk_read_time"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Time spent by the backend reading data file blocks in the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blk_write_time"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Time spent by the backend writing data file blocks in the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stats_reset"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"The last time these statistics were reset")))),(0,r.yg)("h4",{id:"metric-setactivity"},"Metric set\uff1aactivity"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"running"),(0,r.yg)("td",{parentName:"tr",align:null},"connections"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of current client connections")))))}p.isMDXComponent=!0}}]);