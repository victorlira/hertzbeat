"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[40699],{15680:(t,e,a)=>{a.d(e,{xA:()=>i,yg:()=>o});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},i=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,i=y(t,["components","mdxType","originalType","parentName"]),u=d(a),o=r,N=u["".concat(p,".").concat(o)]||u[o]||m[o]||l;return a?n.createElement(N,g(g({ref:e},i),{},{components:a})):n.createElement(N,g({ref:e},i))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var y={};for(var p in e)hasOwnProperty.call(e,p)&&(y[p]=e[p]);y.originalType=t,y.mdxType="string"==typeof t?t:r,g[1]=y;for(var d=2;d<l;d++)g[d]=a[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25047:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>y,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const l={id:"presto",title:"\u76d1\u63a7\uff1aPrestoDB \u6570\u636e\u5e93",sidebar_label:"PrestoDB \u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Presto\u6570\u636e\u5e93\u76d1\u63a7"]},g=void 0,y={unversionedId:"help/presto",id:"help/presto",title:"\u76d1\u63a7\uff1aPrestoDB \u6570\u636e\u5e93",description:"\u5bf9PrestoDB Atlas \u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/prestodb.md",sourceDirName:"help",slug:"/help/presto",permalink:"/zh-cn/docs/help/presto",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/prestodb.md",tags:[],version:"current",frontMatter:{id:"presto",title:"\u76d1\u63a7\uff1aPrestoDB \u6570\u636e\u5e93",sidebar_label:"PrestoDB \u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Presto\u6570\u636e\u5e93\u76d1\u63a7"]},sidebar:"docs",previous:{title:"InfluxDB \u6570\u636e\u5e93",permalink:"/zh-cn/docs/help/influxdb"},next:{title:"Apache HugeGraph",permalink:"/zh-cn/docs/help/hugegraph"}},p={},d=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1a\u96c6\u7fa4\u72b6\u6001",id:"\u6307\u6807\u96c6\u5408\u96c6\u7fa4\u72b6\u6001",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a\u8282\u70b9\u4fe1\u606f",id:"\u6307\u6807\u96c6\u5408\u8282\u70b9\u4fe1\u606f",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a\u8282\u70b9\u72b6\u6001",id:"\u6307\u6807\u96c6\u5408\u8282\u70b9\u72b6\u6001",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a \u4efb\u52a1\u67e5\u8be2",id:"\u6307\u6807\u96c6\u5408-\u4efb\u52a1\u67e5\u8be2",level:4}],i={toc:d};function m(t){let{components:e,...a}=t;return(0,r.yg)("wrapper",(0,n.A)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9PrestoDB Atlas \u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5e73\u53f0\u7aef\u53e3\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fde\u63a5PrestoDB\u672a\u54cd\u5e94\u6570\u636e\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba46000\u6beb\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed1\u5b9a\u6807\u7b7e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5bf9\u76d1\u63a7\u8d44\u6e90\u8fdb\u884c\u5206\u7c7b\u7ba1\u7406\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f\u3002")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u96c6\u7fa4\u72b6\u6001"},"\u6307\u6807\u96c6\u5408\uff1a\u96c6\u7fa4\u72b6\u6001"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"activeWorkers"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d3b\u8dc3\u8282\u70b9\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"runningQueries"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u4e2d\u7684\u67e5\u8be2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queuedQueries"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u961f\u5217\u4e2d\u7684\u67e5\u8be2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blockedQueries"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u963b\u585e\u7684\u67e5\u8be2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"runningDrivers"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u4e2d\u7684\u9a71\u52a8\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"runningTasks"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u8282\u70b9\u4fe1\u606f"},"\u6307\u6807\u96c6\u5408\uff1a\u8282\u70b9\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uri"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8282\u70b9\u94fe\u63a5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"recentRequests"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u8bf7\u6c42\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"recentFailures"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u5931\u8d25\u8bf7\u6c42\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"recentSuccesses"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u6210\u529f\u8bf7\u6c42\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastRequestTime"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u8fd1\u4e00\u6b21\u8bf7\u6c42\u7684\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastResponseTime"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u8fd1\u4e00\u6b21\u54cd\u5e94\u7684\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6301\u7eed\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"recentFailureRatio"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u5931\u8d25")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u8282\u70b9\u72b6\u6001"},"\u6307\u6807\u96c6\u5408\uff1a\u8282\u70b9\u72b6\u6001"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeId"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8282\u70b9ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"environment"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u73af\u5883")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"coordinator"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u534f\u8c03\u8282\u70b9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uptime"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u8fd0\u884c\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"externalAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5916\u90e8\u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"internalAddress"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u90e8\u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"processors"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5904\u7406\u5668\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"processCpuLoad"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fdb\u7a0bCPU\u8d1f\u8f7d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"systemCpuLoad"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7cfb\u7edfCPU\u8d1f\u8f7d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"heapUsed"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528\u5806\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"heapAvailable"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u7528\u5806\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonHeapUsed"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bf7\u5df2\u4f7f\u7528\u975e\u5806\u5185\u5b58")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408-\u4efb\u52a1\u67e5\u8be2"},"\u6307\u6807\u96c6\u5408\uff1a \u4efb\u52a1\u67e5\u8be2"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"taskId"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u72b6\u6001")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"self"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u8eab")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastHeartbeat"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u540e\u5fc3\u8df3\u65f6\u95f4")))))}m.isMDXComponent=!0}}]);