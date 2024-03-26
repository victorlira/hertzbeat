"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[52053],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,s=p["".concat(m,".").concat(u)]||p[u]||d[u]||l;return n?r.createElement(s,o(o({ref:t},g),{},{components:n})):r.createElement(s,o({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={id:"memcached",title:"Monitoring Memcached",sidebar_label:"Memcached Monitor",keywords:["open source monitoring tool","open source Memcached monitoring tool","monitoring memcached metrics"]},o=void 0,i={unversionedId:"help/memcached",id:"version-v1.4.x/help/memcached",title:"Monitoring Memcached",description:"Collect and monitor the general performance Metrics of Memcached.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/help/memcached.md",sourceDirName:"help",slug:"/help/memcached",permalink:"/zh-cn/docs/v1.4.x/help/memcached",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/help/memcached.md",tags:[],version:"v1.4.x",frontMatter:{id:"memcached",title:"Monitoring Memcached",sidebar_label:"Memcached Monitor",keywords:["open source monitoring tool","open source Memcached monitoring tool","monitoring memcached metrics"]},sidebar:"docs",previous:{title:"REDIS\u6570\u636e\u5e93",permalink:"/zh-cn/docs/v1.4.x/help/redis"},next:{title:"Linux\u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh-cn/docs/v1.4.x/help/linux"}},m={},c=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1aserver_info",id:"metrics-setserver_info",level:4}],g={toc:c};function d(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Memcached.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Protocol Use\uff1aMemcached")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"The default YML configuration for the memcache version is in compliance with 1.4.15. \nYou need to use the stats command to view the parameters that your memcache can monitor\n")),(0,a.yg)("h3",{id:""}),(0,a.yg)("p",null,"**1\u3001Obtain usable parameter indicators through commands such as stats\u3001stats setting\u3001stats settings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# telnet ip port\n[root@server ~]# telnet localhost 11211\nTrying ::1...\nConnected to localhost.\nEscape character is '^]'.\nstats\nSTAT pid 15168\nSTAT uptime 11691\nSTAT time 1702569246\nSTAT version 1.4.15\n...\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"There is help_doc: ",(0,a.yg)("a",{parentName:"strong",href:"https://www.runoob.com/memcached/memcached-stats.html"},"https://www.runoob.com/memcached/memcached-stats.html"))),(0,a.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"Port provided by Memcached")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.yg)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,a.yg)("h4",{id:"metrics-setserver_info"},"Metrics Set\uff1aserver_info"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pid"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Memcache server process ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"uptime"),(0,a.yg)("td",{parentName:"tr",align:null},"s"),(0,a.yg)("td",{parentName:"tr",align:null},"The number of seconds the server has been running")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"version"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Memcache version")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"curr_connections"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Current number of connections")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"auth_errors"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Number of authentication failures")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"threads"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Current number of threads")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"item_size"),(0,a.yg)("td",{parentName:"tr",align:null},"byte"),(0,a.yg)("td",{parentName:"tr",align:null},"The size of the item")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"item_count"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Number of items")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"curr_items"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The total number of data currently stored")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"total_items"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The total number of data stored since startup")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bytes"),(0,a.yg)("td",{parentName:"tr",align:null},"byte"),(0,a.yg)("td",{parentName:"tr",align:null},"The current number of bytes occupied by storage")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cmd_get"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Get command request count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cmd_set"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Set command request count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cmd_flush"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Flush command request count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"get_misses"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Get command misses")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"delete_misses"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Delete command misses")))))}d.isMDXComponent=!0}}]);