"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[12763],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var i=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||g[d]||n;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},33006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(58168),r=(a(96540),a(15680));const n={id:"ssl-cert-practice",title:"SSL Certificate Monitor Practice",sidebar_label:"Practice Example"},o=void 0,s={unversionedId:"start/ssl-cert-practice",id:"start/ssl-cert-practice",title:"SSL Certificate Monitor Practice",description:"Most websites now support HTTPS by default. The certificate we apply for is usually 3 months or 1 year. It is easy to expire the SSL certificate over time, but we did not find it the first time, or did not update the certificate in time before it expired.",source:"@site/docs/start/sslcert-practice.md",sourceDirName:"start",slug:"/start/ssl-cert-practice",permalink:"/docs/start/ssl-cert-practice",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/sslcert-practice.md",tags:[],version:"current",frontMatter:{id:"ssl-cert-practice",title:"SSL Certificate Monitor Practice",sidebar_label:"Practice Example"},sidebar:"docs",previous:{title:"Advanced Params Config",permalink:"/docs/start/custom-config"},next:{title:"Custom Monitoring",permalink:"/docs/advanced/extend-point"}},l={},c=[{value:"What is HertzBeat",id:"what-is-hertzbeat",level:4},{value:"Install HertzBeat",id:"install-hertzbeat",level:4},{value:"Monitoring SSL certificates",id:"monitoring-ssl-certificates",level:4},{value:"Finish!",id:"finish",level:4}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Most websites now support HTTPS by default. The certificate we apply for is usually 3 months or 1 year. It is easy to expire the SSL certificate over time, but we did not find it the first time, or did not update the certificate in time before it expired."),(0,r.yg)("p",null,"This article introduces how to use the hertzbeat monitoring tool to detect the validity period of our website's SSL certificate, and send us a warning message when the certificate expires or a few days before the certificate expires."),(0,r.yg)("h4",{id:"what-is-hertzbeat"},"What is HertzBeat"),(0,r.yg)("p",null,"HertzBeat is a real-time monitoring tool with powerful custom monitoring capabilities without Agent. Website monitoring, PING connectivity, port availability, database, operating system, middleware, API monitoring, threshold alarms, alarm notification (email, WeChat, Ding Ding Feishu)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Official website: ",(0,r.yg)("a",{parentName:"strong",href:"https://hertzbeat.com"},"https://hertzbeat.com")," | ",(0,r.yg)("a",{parentName:"strong",href:"https://tancloud.cn"},"https://tancloud.cn"))),(0,r.yg)("p",null,"github: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),"\ngitee: ",(0,r.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")),(0,r.yg)("h4",{id:"install-hertzbeat"},"Install HertzBeat"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you don't want to install, you can use the cloud service directly ",(0,r.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"TanCloud exploration cloud console.tancloud.cn"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"docker")," environment can be installed with just one command"))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"After the installation is successful, the browser can access ",(0,r.yg)("inlineCode",{parentName:"li"},"localhost:1157")," to start, the default account password is ",(0,r.yg)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,r.yg)("h4",{id:"monitoring-ssl-certificates"},"Monitoring SSL certificates"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Click Add SSL Certificate Monitor")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"System Page -> Monitor Menu -> SSL Certificate -> Add SSL Certificate")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(54865).A,width:"1862",height:"702"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Configure the monitoring website")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Here we take the example of monitoring Baidu website, configure monitoring host domain name, name, collection interval, etc.\nClick OK Note \u26a0\ufe0fBefore adding, it will test the connectivity of the website by default, and the connection will be successful before adding. Of course, you can also gray out the ",(0,r.yg)("strong",{parentName:"p"},"Test or not")," button.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(78618).A,width:"1867",height:"807"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"View the detection index data")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In the monitoring list, you can view the monitoring status, and in the monitoring details, you can view the metric data chart, etc.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(84803).A,width:"1736",height:"716"})),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(29628).A,width:"1905",height:"910"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Set the threshold (triggered when the certificate expires)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"System Page -> Alarms -> Alarm Thresholds -> New Thresholds")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(35404).A,width:"1894",height:"609"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Configure the threshold, select the SSL certificate metric object, configure the alarm expression-triggered when the metric ",(0,r.yg)("inlineCode",{parentName:"p"},"expired")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", that is, ",(0,r.yg)("inlineCode",{parentName:"p"},'equals(expired,"true")'),", set the alarm level notification template information, etc.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(47029).A,width:"1710",height:"931"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Associating thresholds with monitoring, in the threshold list, set which monitoring this threshold applies to.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(10302).A,width:"1487",height:"605"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Set the threshold (triggered one week before the certificate expires)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In the same way, add a new configuration threshold and configure an alarm expression - when the metric expires timestamp ",(0,r.yg)("inlineCode",{parentName:"p"},"end_timestamp"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"now()")," function is the current timestamp, if the configuration triggers an alarm one week in advance: ",(0,r.yg)("inlineCode",{parentName:"p"},"end_timestamp <= (now( ) + 604800000)")," , where ",(0,r.yg)("inlineCode",{parentName:"p"},"604800000")," is the 7-day total time difference in milliseconds.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(86087).A,width:"1617",height:"828"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Finally, you can see the triggered alarm in the alarm center.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(41856).A,width:"1917",height:"869"})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Alarm notification (in time notification via Dingding WeChat Feishu, etc.)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Monitoring Tool -> Alarm Notification -> New Receiver")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(47141).A,width:"1651",height:"853"})),(0,r.yg)("p",null,"For token configuration such as Dingding WeChat Feishu, please refer to the help document"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk"),"\n",(0,r.yg)("a",{parentName:"p",href:"https://tancloud.cn/docs/help/alert_dingtalk"},"https://tancloud.cn/docs/help/alert_dingtalk")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Alarm Notification -> New Alarm Notification Policy -> Enable Notification for the Recipient Just Configured")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(29628).A,width:"1905",height:"910"})),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"OK When the threshold is triggered, we can receive the corresponding alarm message. If there is no notification, you can also view the alarm information in the alarm center.")),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"finish"},"Finish!"),(0,r.yg)("p",null,"The practice of monitoring SSL certificates is here. Of course, for hertzbeat, this function is just the tip of the iceberg. If you think hertzbeat is a good open source project, please give us a Gitee star on GitHub, thank you very much. Thank you for your support. Refill!"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}g.isMDXComponent=!0},54865:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_1-1ca043d3cdd151bd01ac35bcd8dc9f1e.png"},47141:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_10-c1f682943a3ef8730606c0e766005d8b.png"},29628:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_11-fa46c0a1cb0fd4029a8b5fb1d609b172.png"},78618:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_2-5b6dd90f079ca240edda3c84af84885a.png"},84803:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_3-2be15d288750161ef733c372661a873b.png"},35404:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_4-a70d80785671dd659d88d6600b4a512b.png"},47029:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_5-a860222c6d3355f138f01da107eeb335.png"},10302:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_6-8dce70b6caf5dc58718ce8a6707711db.png"},86087:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_7-832596aa87845c2f31f1873f98f14357.png"},41856:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ssl_8-8ff18a53d95e83e1ac04ca098d13aff7.png"}}]);