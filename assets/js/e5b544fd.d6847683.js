"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[8020],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||g[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={id:"alert_webhook",title:"Alert WebHook callback notification",sidebar_label:"Alert webHook notification",keywords:["open source monitoring tool","open source alerter","open source webhook notification"]},i=void 0,l={unversionedId:"help/alert_webhook",id:"version-v1.5.x/help/alert_webhook",title:"Alert WebHook callback notification",description:"After the threshold is triggered send alarm information and call the Webhook interface through post request to notify the recipient.",source:"@site/versioned_docs/version-v1.5.x/help/alert_webhook.md",sourceDirName:"help",slug:"/help/alert_webhook",permalink:"/docs/v1.5.x/help/alert_webhook",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/alert_webhook.md",tags:[],version:"v1.5.x",frontMatter:{id:"alert_webhook",title:"Alert WebHook callback notification",sidebar_label:"Alert webHook notification",keywords:["open source monitoring tool","open source alerter","open source webhook notification"]},sidebar:"docs",previous:{title:"Alert email notification",permalink:"/docs/v1.5.x/help/alert_email"},next:{title:"Alert Discord bot notification",permalink:"/docs/v1.5.x/help/alert_discord"}},c={},s=[{value:"Operation steps",id:"operation-steps",level:3},{value:"WebHook callback POST body BODY content",id:"webhook-callback-post-body-body-content",level:3},{value:"Webhook notification common issues",id:"webhook-notification-common-issues",level:3}],p={toc:s};function g(e){let{components:t,...o}=e;return(0,a.yg)("wrapper",(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and call the Webhook interface through post request to notify the recipient.")),(0,a.yg)("h3",{id:"operation-steps"},"Operation steps"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select WebHook notification method\u3011-> \u3010Set WebHook callback address\u3011 -> \u3010Confirm\u3011"))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"email",src:r(1755).A,width:"3804",height:"1184"})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"email",src:r(87538).A,width:"3756",height:"1288"})),(0,a.yg)("h3",{id:"webhook-callback-post-body-body-content"},"WebHook callback POST body BODY content"),(0,a.yg)("p",null,"Content format\uff1aJSON"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "alarmId": 76456,\n  "target": "${target}",\n  "thresholdId": 33455,\n  "priority": 0,\n  "content": "udp_port monitoring availability alert, code is FAIL",\n  "status": 0,\n  "times": 1,\n  "triggerTime": "2022-02-25T13:32:13",\n  "tags": {\n    "app": "windows",\n    "monitorId": "180427708350720",\n    "metrics": "availability",\n    "code": "UN_CONNECTABLE",\n    "thresholdId": "112",\n    "monitorName": "WINDOWS_192.168.124.12"\n  }\n}\n')),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"alarmId"),(0,a.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm record entity primary key index ID \u544a\u8b66\u8bb0\u5f55\u5b9e\u4f53\u4e3b\u952e\u7d22\u5f15ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"target"),(0,a.yg)("td",{parentName:"tr",align:null},"string title: Alert target object: monitor availability-available metrics-app.metrics.field \u544a\u8b66\u76ee\u6807\u5bf9\u8c61: \u76d1\u63a7\u53ef\u7528\u6027-available \u6307\u6807-app.metrics.field")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"thresholdId"),(0,a.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm definition ID associated with the alarm \u544a\u8b66\u5173\u8054\u7684\u544a\u8b66\u5b9a\u4e49ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"priority"),(0,a.yg)("td",{parentName:"tr",align:null},"string($byte) title: Alarm level 0: high-emergency-critical alarm-red 1: medium-critical-critical alarm-orange 2: low-warning-warning alarm-yellow \u544a\u8b66\u7ea7\u522b 0:\u9ad8-emergency-\u7d27\u6025\u544a\u8b66-\u7ea2\u8272 1:\u4e2d-critical-\u4e25\u91cd\u544a\u8b66-\u6a59\u8272 2:\u4f4e-warning-\u8b66\u544a\u544a\u8b66-\u9ec4\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"content"),(0,a.yg)("td",{parentName:"tr",align:null},"string title: The actual content of the alarm notification \u544a\u8b66\u901a\u77e5\u5b9e\u9645\u5185\u5bb9")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"status"),(0,a.yg)("td",{parentName:"tr",align:null},"string($byte) title: Alarm status: 0-normal alarm (to be processed) 1-threshold triggered but not reached the number of alarms 2-recovered alarm 3-processed \u544a\u8b66\u72b6\u6001: 0-\u6b63\u5e38\u544a\u8b66(\u5f85\u5904\u7406) 1-\u9608\u503c\u89e6\u53d1\u4f46\u672a\u8fbe\u5230\u544a\u8b66\u6b21\u6570 2-\u6062\u590d\u544a\u8b66 3-\u5df2\u5904\u7406")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"times"),(0,a.yg)("td",{parentName:"tr",align:null},"integer($int32) title: Alarm threshold trigger times \u544a\u8b66\u9608\u503c\u89e6\u53d1\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"triggerTime"),(0,a.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm trigger time (timestamp in milliseconds) \u9996\u6b21\u544a\u8b66\u89e6\u53d1\u65f6\u95f4(\u6beb\u79d2\u65f6\u95f4\u6233)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"tags"),(0,a.yg)("td",{parentName:"tr",align:null},"example: {key1:value1}")))),(0,a.yg)("h3",{id:"webhook-notification-common-issues"},"Webhook notification common issues"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"WebHook callback did not take effect")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,a.yg)("br",{parentName:"p"}),"\n","Please check whether the configured webhook callback address is correct.")),(0,a.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}g.isMDXComponent=!0},87538:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},1755:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-5-2a87516f9ad552183d6f7d715e55f4af.png"}}]);