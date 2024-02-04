"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[55573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={id:"alert_wework",title:"Alert enterprise Wechat notification",sidebar_label:"Alert enterprise Wechat notification",keywords:["open source monitoring tool","open source alerter","open source WeWork notification"]},i=void 0,s={unversionedId:"help/alert_wework",id:"help/alert_wework",title:"Alert enterprise Wechat notification",description:"After the threshold is triggered send alarm information and notify the recipient by enterprise Wechat robot.",source:"@site/docs/help/alert_wework.md",sourceDirName:"help",slug:"/help/alert_wework",permalink:"/docs/help/alert_wework",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/alert_wework.md",tags:[],version:"current",frontMatter:{id:"alert_wework",title:"Alert enterprise Wechat notification",sidebar_label:"Alert enterprise Wechat notification",keywords:["open source monitoring tool","open source alerter","open source WeWork notification"]},sidebar:"docs",previous:{title:"Alert Telegram bot notification",permalink:"/docs/help/alert_telegram"},next:{title:"Alert DingDing robot notification",permalink:"/docs/help/alert_dingtalk"}},l={},c=[{value:"Operation steps",id:"operation-steps",level:3},{value:"Enterprise Wechat robot common issues",id:"enterprise-wechat-robot-common-issues",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by enterprise Wechat robot.         ")),(0,n.kt)("h3",{id:"operation-steps"},"Operation steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u3010Enterprise Wechat\u3011-> \u3010Group settings\u3011-> \u3010Group robot\u3011-> \u3010Add new robot\u3011-> \u3010Set robot name and avatar\u3011-> \u3010Copy its webhook address after adding successfully\u3011"),"  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"email",src:r(5567).Z,width:"1080",height:"2412"}),"  "),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u3010Save the key value of the WebHook address of the robot\u3011"),"     ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"eg\uff1a webHook address\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=3adafc96-23d0-4cd5-8feb-17f6e0b5fcs4"),(0,n.kt)("br",{parentName:"p"}),"\n","Its robot KEY value is ",(0,n.kt)("inlineCode",{parentName:"p"},"3adafc96-23d0-4cd5-8feb-17f6e0b5fcs4"),"      ")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select enterprise Wechat robot notification method\u3011->\u3010Set enterprise Wechat robot KEY\u3011-> \u3010Confirm\u3011"),"    ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"email",src:r(76854).Z,width:"3804",height:"942"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"),"  ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"   ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"email",src:r(68832).Z,width:"3756",height:"1288"}),"    "),(0,n.kt)("h3",{id:"enterprise-wechat-robot-common-issues"},"Enterprise Wechat robot common issues"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The enterprise wechat group did not receive the robot alarm notification.        ",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,n.kt)("br",{parentName:"p"}),"\n","Please check whether the robot key is configured correctly and whether the alarm strategy association is configured.   ")))),(0,n.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}d.isMDXComponent=!0},68832:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},5567:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/alert-notice-6-d706cd903604bb21c0a7b0a313d63368.jpg"},76854:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/alert-notice-7-567edc108fd5e9943fdf60d00229d223.png"}}]);