"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[76964],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,u=c["".concat(m,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={id:"windows",title:"Monitoring\uff1aWindows operating system monitoring",sidebar_label:"Windows operating system",keywords:["open source monitoring tool","open source windows monitoring tool","monitoring windows metrics"]},i=void 0,l={unversionedId:"help/windows",id:"help/windows",title:"Monitoring\uff1aWindows operating system monitoring",description:"Collect and monitor the general performance Metrics of Windows operating system through SNMP protocol.",source:"@site/docs/help/windows.md",sourceDirName:"help",slug:"/help/windows",permalink:"/docs/help/windows",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/windows.md",tags:[],version:"current",frontMatter:{id:"windows",title:"Monitoring\uff1aWindows operating system monitoring",sidebar_label:"Windows operating system",keywords:["open source monitoring tool","open source windows monitoring tool","monitoring windows metrics"]},sidebar:"docs",previous:{title:"Linux operating system",permalink:"/docs/help/linux"},next:{title:"Ubuntu operating system",permalink:"/docs/help/ubuntu"}},m={},p=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1asystem",id:"metric-setsystem",level:4}],s={toc:p};function g(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Windows operating system through SNMP protocol.\nNote\u26a0\ufe0f You need to start SNMP service for Windows server.")),(0,a.yg)("p",null,"References:",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://www.cnblogs.com/xdp-gacl/p/3978825.html"},"What is SNMP protocol 1"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://www.auvik.com/franklyit/blog/network-basics-what-is-snmp/"},"What is SNMP protocol 2"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/troubleshoot/windows-server/networking/configure-snmp-service"},"Win configure SNMP in English"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/troubleshoot/windows-server/networking/configure-snmp-service"},"Win configure SNMP in Chinese")),(0,a.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"Port provided by Windows SNMP service. The default is 161")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SNMP version"),(0,a.yg)("td",{parentName:"tr",align:null},"SNMP protocol version V1 V2c V3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SNMP community Word"),(0,a.yg)("td",{parentName:"tr",align:null},"SNMP agreement community name(Community Name). It is used to realize the authentication of SNMP network administrator when accessing SNMP management agent. Similar to password, the default value is public")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Protocol connection timeout")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.yg)("h3",{id:"collection-metric"},"Collection Metric"),(0,a.yg)("h4",{id:"metric-setsystem"},"Metric set\uff1asystem"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Host name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"descr"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Operating system description")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"uptime"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"System running time")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"numUsers"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"Current number of users")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"services"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"Current number of services")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"processes"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"Current number of processes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"responseTime"),(0,a.yg)("td",{parentName:"tr",align:null},"ms"),(0,a.yg)("td",{parentName:"tr",align:null},"Collection response time")))))}g.isMDXComponent=!0}}]);