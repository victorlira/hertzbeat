"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[3510],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,u=s["".concat(p,".").concat(d)]||s[d]||g[d]||a;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={id:"ping",title:"Monitoring\uff1aPING connectivity",sidebar_label:"PING connectivity",keywords:["open source monitoring tool","open source network monitoring tool","monitoring ping metrics"]},i=void 0,l={unversionedId:"help/ping",id:"help/ping",title:"Monitoring\uff1aPING connectivity",description:"Ping the opposite end HOST address and judge its connectivity.",source:"@site/docs/help/ping.md",sourceDirName:"help",slug:"/help/ping",permalink:"/docs/help/ping",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/ping.md",tags:[],version:"current",frontMatter:{id:"ping",title:"Monitoring\uff1aPING connectivity",sidebar_label:"PING connectivity",keywords:["open source monitoring tool","open source network monitoring tool","monitoring ping metrics"]},sidebar:"docs",previous:{title:"HTTP API",permalink:"/docs/help/api"},next:{title:"Port availability",permalink:"/docs/help/port"}},p={},c=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1asummary",id:"metric-setsummary",level:4},{value:"Common Problem",id:"common-problem",level:3}],m={toc:c};function g(e){let{components:t,...n}=e;return(0,o.yg)("wrapper",(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Ping the opposite end HOST address and judge its connectivity.    ")),(0,o.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,o.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,o.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Ping timeout"),(0,o.yg)("td",{parentName:"tr",align:null},"Set the timeout when Ping does not respond to data, unit:ms, default: 3000ms")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,o.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,o.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,o.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,o.yg)("h3",{id:"collection-metric"},"Collection Metric"),(0,o.yg)("h4",{id:"metric-setsummary"},"Metric set\uff1asummary"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,o.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,o.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"responseTime"),(0,o.yg)("td",{parentName:"tr",align:null},"ms"),(0,o.yg)("td",{parentName:"tr",align:null},"Website response time")))),(0,o.yg)("h3",{id:"common-problem"},"Common Problem"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Ping connectivity monitoring exception when installing hertzbeat for package deployment.",(0,o.yg)("br",{parentName:"li"}),"The hertzbeat installed and deployed by the installation package is not available for ping connectivity monitoring, but local direct ping is available \u3002",(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"The deployment of the installation package requires configuring the root permission of the Java virtual machine to start hertzbeat to use ICMP. If the root permission is not enabled, judge whether port 7 of telnet opposite end is opened.",(0,o.yg)("br",{parentName:"p"}),"\n","When you install HertzBeat via DockerDocker root is enabled by default. No such problem.",(0,o.yg)("br",{parentName:"p"}),"\n","See ",(0,o.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/11506321/how-to-ping-an-ip-address"},"https://stackoverflow.com/questions/11506321/how-to-ping-an-ip-address"))))))}g.isMDXComponent=!0}}]);