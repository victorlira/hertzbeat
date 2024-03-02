"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[85854],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={id:"alert_console",title:"Custom console address in alarm template",sidebar_label:"Console address in alarm template"},l=void 0,i={unversionedId:"help/alert_console",id:"help/alert_console",title:"Custom console address in alarm template",description:"After the threshold is triggered, send the alarm information. When you notify through DingDing / enterprise Wechat / FeiShu robot or email, the alarm content has a detailed link to log in to the console.",source:"@site/docs/help/alert_console.md",sourceDirName:"help",slug:"/help/alert_console",permalink:"/docs/help/alert_console",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/alert_console.md",tags:[],version:"current",frontMatter:{id:"alert_console",title:"Custom console address in alarm template",sidebar_label:"Console address in alarm template"},sidebar:"docs",previous:{title:"Alert FeiShu robot notification",permalink:"/docs/help/alert_feishu"},next:{title:"Alert Enterprise Wechat App notification",permalink:"/docs/help/alert_enterprise_wechat_app"}},s={},c=[{value:"Custom settings",id:"custom-settings",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.yg)("wrapper",(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"After the threshold is triggered, send the alarm information. When you notify through DingDing / enterprise Wechat / FeiShu robot or email, the alarm content has a detailed link to log in to the console.")),(0,o.yg)("h3",{id:"custom-settings"},"Custom settings"),(0,o.yg)("p",null,"In our startup configuration file application.yml, find the following configuration"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yml"},"alerter:\n  console-url: #Here is our custom console address\n")),(0,o.yg)("p",null,"The default value is the official console address of HertzBeat."))}u.isMDXComponent=!0}}]);