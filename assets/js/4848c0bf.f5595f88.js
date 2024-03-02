"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[40922],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var h=2;h<o;h++)i[h]=r[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=r(58168),a=(r(96540),r(15680));const o={id:"alert_threshold",title:"Threshold alarm configuration",sidebar_label:"Threshold alarm configuration"},i=void 0,l={unversionedId:"help/alert_threshold",id:"version-v1.1.x/help/alert_threshold",title:"Threshold alarm configuration",description:"Configure the alarm threshold (warning alarm, critical alarm, emergency alarm) for the monitoring Metrics, and the system calculates and triggers the alarm according to the threshold configuration and the collected Metric data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/alert_threshold.md",sourceDirName:"help",slug:"/help/alert_threshold",permalink:"/docs/v1.1.x/help/alert_threshold",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/alert_threshold.md",tags:[],version:"v1.1.x",frontMatter:{id:"alert_threshold",title:"Threshold alarm configuration",sidebar_label:"Threshold alarm configuration"},sidebar:"docs",previous:{title:"Kubernetes Monitor",permalink:"/docs/v1.1.x/help/kubernetes"},next:{title:"Threshold trigger expression",permalink:"/docs/v1.1.x/help/alert_threshold_expr"}},s={},h=[{value:"Operation steps",id:"operation-steps",level:3}],c={toc:h};function g(e){let{components:t,...o}=e;return(0,a.yg)("wrapper",(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Configure the alarm threshold (warning alarm, critical alarm, emergency alarm) for the monitoring Metrics, and the system calculates and triggers the alarm according to the threshold configuration and the collected Metric data.         ")),(0,a.yg)("h3",{id:"operation-steps"},"Operation steps"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010Alarm configuration\u3011->\u3010Add new threshold\u3011-> \u3010Confirm after configuration\u3011"),"  ")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"threshold",src:r(68498).A,width:"3766",height:"1686"}),"  "),(0,a.yg)("p",null,"As shown above\uff1a     "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Metric object"),"\uff1aSelect the monitoring Metric object for which we need to configure the threshold. Eg\uff1awebsite monitoring type -> summary Metric set -> responseTime-response time Metric",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Threshold trigger expression"),"\uff1aCalculate and judge whether to trigger the threshold according to this expression. See the page prompts for expression environment variables and operators. Eg\uff1aset the response time greater than 50 to trigger an alarm, and the expression is ",(0,a.yg)("inlineCode",{parentName:"p"},"responseTime > 50"),". For detailed help on threshold expression, see ",(0,a.yg)("a",{parentName:"p",href:"alert_threshold_expr"},"Threshold expression help"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Alarm level"),"\uff1aThe alarm level that triggers the threshold, from low to high: warning, critical, emergency.",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Trigger times"),"\uff1aHow many times will the threshold be triggered before the alarm is really triggered.",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Notification template"),"\uff1aNotification information Template sent after alarm triggering, See page prompts for template environment variables, eg\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"${app}.${metrics}.${metric} Metric's value is ${responseTime}, greater than 50 triggers an alarm"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Global default"),"\uff1a Set whether this threshold is valid for such global Metrics, and the default is No. After adding a new threshold, you need to associate the threshold with the monitoring object, so that the threshold will take effect for this monitoring.",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"Enable alarm"),"\uff1aThis alarm threshold configuration is enabled or disabled.   "),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Threshold  association monitoring\u26a0\ufe0f \u3010Alarm configuration\u3011-> \u3010Threshold just set\u3011-> \u3010Configure associated monitoring\u3011-> \u3010Confirm after configuration\u3011"),"  ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f After adding a new threshold, you need to associate the threshold with the monitoring object(That is, to set this threshold for which monitoring is effective), so that the threshold will take effect for this monitoring."),"\u3002   ")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"threshold",src:r(59209).A,width:"3816",height:"1160"}),"   "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"threshold",src:r(4384).A,width:"3814",height:"1282"}),"   "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"After the threshold alarm is configured, the alarm information that has been successfully triggered can be seen in \u3010alarm center\u3011."),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"If you need to notify the relevant personnel of the alarm information by email, Wechat, DingDing and Feishu, it can be configured in \u3010alarm notification\u3011."),"     "),(0,a.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}g.isMDXComponent=!0},68498:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-threshold-1-d42690576e2d740cd262b0c83841ae91.png"},59209:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-threshold-2-c642d543791b5a6a326ec75f3900582a.png"},4384:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-threshold-3-d92f01483904b4c76a459e6e095a2292.png"}}]);