"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[45660],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,f=g["".concat(c,".").concat(d)]||g[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),i=(n(96540),n(15680));const o={id:"alert_email",title:"Alert email notification",sidebar_label:"Alert email notification",keywords:["open source monitoring tool","open source alerter","open source email notification"]},a=void 0,l={unversionedId:"help/alert_email",id:"version-v1.5.x/help/alert_email",title:"Alert email notification",description:"After the threshold is triggered send alarm information and notify the recipient by email.",source:"@site/versioned_docs/version-v1.5.x/help/alert_email.md",sourceDirName:"help",slug:"/help/alert_email",permalink:"/docs/v1.5.x/help/alert_email",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/alert_email.md",tags:[],version:"v1.5.x",frontMatter:{id:"alert_email",title:"Alert email notification",sidebar_label:"Alert email notification",keywords:["open source monitoring tool","open source alerter","open source email notification"]},sidebar:"docs",previous:{title:"Threshold Trigger Expression",permalink:"/docs/v1.5.x/help/alert_threshold_expr"},next:{title:"Alert webHook notification",permalink:"/docs/v1.5.x/help/alert_webhook"}},c={},s=[{value:"Operation steps",id:"operation-steps",level:3},{value:"Email notification common issues",id:"email-notification-common-issues",level:3}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,i.yg)("wrapper",(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by email.")),(0,i.yg)("h3",{id:"operation-steps"},"Operation steps"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select email notification method\u3011"))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"email",src:n(74751).A,width:"3812",height:"1232"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"\u3010Get verification code\u3011-> \u3010Enter email verification code\u3011-> \u3010Confirm\u3011"),(0,i.yg)("br",{parentName:"li"}),(0,i.yg)("img",{alt:"email",src:n(20100).A,width:"3752",height:"1284"}))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"email",src:n(60045).A,width:"3398",height:"1460"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"))),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"email",src:n(87538).A,width:"3756",height:"1288"})),(0,i.yg)("h3",{id:"email-notification-common-issues"},"Email notification common issues"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Hertzbeat deployed on its own intranet cannot receive email notifications")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Hertzbeat needs to configure its own mail server, not tancloud. Please confirm whether you have configured its own mail server in application.yml")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Cloud environment tancloud cannot receive email notification")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,i.yg)("br",{parentName:"p"}),"\n","Please check whether the mailbox is configured correctly and whether the alarm strategy association is configured.",(0,i.yg)("br",{parentName:"p"}),"\n","Please check whether the warning email is blocked in the trash can of the mailbox.")),(0,i.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}m.isMDXComponent=!0},74751:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/alert-notice-1-97b12cf267f0d5737ce04a5e67d04a66.png"},20100:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/alert-notice-2-06cca23b9fdf814816dcd34e96b5c67b.png"},60045:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/alert-notice-3-c18a90e98e1af7ed78bba845ca5b535f.png"},87538:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"}}]);