"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[65794],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=n,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||r;return a?i.createElement(f,o(o({ref:t},s),{},{components:a})):i.createElement(f,o({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(58168),n=(a(96540),a(15680));const r={id:"ssl-cert-practice",title:"SSL Certificate Monitor Practice",sidebar_label:"Practice Example"},o=void 0,l={unversionedId:"start/ssl-cert-practice",id:"version-v1.1.x/start/ssl-cert-practice",title:"SSL Certificate Monitor Practice",description:"Most websites now support HTTPS by default. The certificate we apply for is usually 3 months or 1 year. It is easy to expire the SSL certificate over time, but we did not find it the first time, or did not update the certificate in time before it expired.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/start/sslcert-practice.md",sourceDirName:"start",slug:"/start/ssl-cert-practice",permalink:"/docs/v1.1.x/start/ssl-cert-practice",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/start/sslcert-practice.md",tags:[],version:"v1.1.x",frontMatter:{id:"ssl-cert-practice",title:"SSL Certificate Monitor Practice",sidebar_label:"Practice Example"},sidebar:"docs",previous:{title:"Advanced Config",permalink:"/docs/v1.1.x/start/custom-config"},next:{title:"Custom Monitoring",permalink:"/docs/v1.1.x/advanced/extend-point"}},c={},p=[{value:"What is HertzBeat",id:"what-is-hertzbeat",level:4},{value:"Install HertzBeat",id:"install-hertzbeat",level:4},{value:"Monitoring SSL certificates",id:"monitoring-ssl-certificates",level:4},{value:"Finish!",id:"finish",level:4}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,i.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Most websites now support HTTPS by default. The certificate we apply for is usually 3 months or 1 year. It is easy to expire the SSL certificate over time, but we did not find it the first time, or did not update the certificate in time before it expired."),(0,n.yg)("p",null,"This article introduces how to use the hertzbeat monitoring tool to detect the validity period of our website's SSL certificate, and send us a warning message when the certificate expires or a few days before the certificate expires."),(0,n.yg)("h4",{id:"what-is-hertzbeat"},"What is HertzBeat"),(0,n.yg)("p",null,"HertzBeat is a real-time monitoring tool with powerful custom monitoring capabilities without Agent. Website monitoring, PING connectivity, port availability, database, operating system, middleware, API monitoring, threshold alarms, alarm notification (email, WeChat, Ding Ding Feishu)."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Official website: ",(0,n.yg)("a",{parentName:"strong",href:"https://hertzbeat.com"},"https://hertzbeat.com")," | ",(0,n.yg)("a",{parentName:"strong",href:"https://tancloud.cn"},"https://tancloud.cn"))),(0,n.yg)("p",null,"github: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),"\ngitee: ",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")),(0,n.yg)("h4",{id:"install-hertzbeat"},"Install HertzBeat"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If you don't want to install, you can use the cloud service directly ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"TanCloud exploration cloud console.tancloud.cn"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"docker")," environment can be installed with just one command"))),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"After the installation is successful, the browser can access ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:1157")," to start, the default account password is ",(0,n.yg)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,n.yg)("h4",{id:"monitoring-ssl-certificates"},"Monitoring SSL certificates"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Click Add SSL Certificate Monitor")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"System Page -> Monitor Menu -> SSL Certificate -> Add SSL Certificate")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd53f343a5b54feab62e71458d076441~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Configure the monitoring website")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Here we take the example of monitoring Baidu website, configure monitoring host domain name, name, collection interval, etc.\nClick OK Note \u26a0\ufe0fBefore adding, it will test the connectivity of the website by default, and the connection will be successful before adding. Of course, you can also gray out the ",(0,n.yg)("strong",{parentName:"p"},"Test or not")," button.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad1154670648413bb82c8bdeb5b13609~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"View the detection index data")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"In the monitoring list, you can view the monitoring status, and in the monitoring details, you can view the metric data chart, etc.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f874b45e909c4bb0acdd28b3fb034a61~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef5d7443f8c04818ae5aa28d421203be~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Set the threshold (triggered when the certificate expires)")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"System Page -> Alarms -> Alarm Thresholds -> New Thresholds")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d6205172d43463aa34e534477f132f1~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Configure the threshold, select the SSL certificate metric object, configure the alarm expression-triggered when the metric ",(0,n.yg)("inlineCode",{parentName:"p"},"expired")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", that is, ",(0,n.yg)("inlineCode",{parentName:"p"},'equals(expired,"true")'),", set the alarm level notification template information, etc.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83d17b381d994f26a6240e01915b2001~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Associating thresholds with monitoring, in the threshold list, set which monitoring this threshold applies to.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b9063d7bcf9454387be0491fc382bd1~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Set the threshold (triggered one week before the certificate expires)")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"In the same way, add a new configuration threshold and configure an alarm expression - when the metric expires timestamp ",(0,n.yg)("inlineCode",{parentName:"p"},"end_timestamp"),", the ",(0,n.yg)("inlineCode",{parentName:"p"},"now()")," function is the current timestamp, if the configuration triggers an alarm one week in advance: ",(0,n.yg)("inlineCode",{parentName:"p"},"end_timestamp <= (now( ) + 604800000)")," , where ",(0,n.yg)("inlineCode",{parentName:"p"},"604800000")," is the 7-day total time difference in milliseconds.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d6f837f57c247e09f668f60eff4a0ff~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Finally, you can see the triggered alarm in the alarm center.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a61b23127524976b2c209ce0ca6a339~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Alarm notification (in time notification via Dingding WeChat Feishu, etc.)")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Monitoring Tool -> Alarm Notification -> New Receiver")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f36956060ef410a82bbecafcbb2957f~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("p",null,"For token configuration such as Dingding WeChat Feishu, please refer to the help document"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk"),"\n",(0,n.yg)("a",{parentName:"p",href:"https://tancloud.cn/docs/help/alert_dingtalk"},"https://tancloud.cn/docs/help/alert_dingtalk")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Alarm Notification -> New Alarm Notification Policy -> Enable Notification for the Recipient Just Configured")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d976343e81f843138344a039f3aff8a3~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},"OK When the threshold is triggered, we can receive the corresponding alarm message. If there is no notification, you can also view the alarm information in the alarm center.")),(0,n.yg)("hr",null),(0,n.yg)("h4",{id:"finish"},"Finish!"),(0,n.yg)("p",null,"The practice of monitoring SSL certificates is here. Of course, for hertzbeat, this function is just the tip of the iceberg. If you think hertzbeat is a good open source project, please give us a Gitee star on GitHub, thank you very much. Thank you for your support. Refill!"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"github: ",(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"gitee: ",(0,n.yg)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}u.isMDXComponent=!0}}]);