"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[8185],{15680:(e,r,t)=>{t.d(r,{xA:()=>h,yg:()=>u});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},h=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),g=p(t),u=a,d=g["".concat(l,".").concat(u)]||g[u]||c[u]||i;return t?n.createElement(d,o(o({ref:r},h),{},{components:t})):n.createElement(d,o({ref:r},h))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},21961:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const i={id:"alert_threshold_expr",title:"Threshold trigger expression",sidebar_label:"Threshold trigger expression"},o=void 0,s={unversionedId:"help/alert_threshold_expr",id:"help/alert_threshold_expr",title:"Threshold trigger expression",description:"When we configure the threshold alarm, we need to configure the threshold trigger expression. The system calculates whether to trigger the alarm according to the expression and the monitoring index value. Here is a detailed introduction to the use of the expression.",source:"@site/docs/help/alert_threshold_expr.md",sourceDirName:"help",slug:"/help/alert_threshold_expr",permalink:"/docs/help/alert_threshold_expr",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/alert_threshold_expr.md",tags:[],version:"current",frontMatter:{id:"alert_threshold_expr",title:"Threshold trigger expression",sidebar_label:"Threshold trigger expression"},sidebar:"docs",previous:{title:"Threshold alarm configuration",permalink:"/docs/help/alert_threshold"},next:{title:"Alert email notification",permalink:"/docs/help/alert_email"}},l={},p=[{value:"Operators supported by expressions",id:"operators-supported-by-expressions",level:4},{value:"Supported environment variables",id:"supported-environment-variables",level:4},{value:"Expression setting case",id:"expression-setting-case",level:4}],h={toc:p};function c(e){let{components:r,...t}=e;return(0,a.yg)("wrapper",(0,n.A)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"When we configure the threshold alarm, we need to configure the threshold trigger expression. The system calculates whether to trigger the alarm according to the expression and the monitoring index value. Here is a detailed introduction to the use of the expression.    ")),(0,a.yg)("h4",{id:"operators-supported-by-expressions"},"Operators supported by expressions"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"equals(str1,str2) \n==\n<\n<=\n>\n>=\n!=\n( )\n+\n-\n&&\n||\n")),(0,a.yg)("p",null,"Rich operators allow us to define expressions freely.",(0,a.yg)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0f For the equality of string, please use ",(0,a.yg)("inlineCode",{parentName:"p"},"equals(str1,str2)"),", while for the equality judgment of number, please use == or != "),(0,a.yg)("h4",{id:"supported-environment-variables"},"Supported environment variables"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Environment variables, i.e. supported variables such as Metric values, are used in the expression. When the threshold value is calculated and judged, the variables will be replaced with actual values for calculation.   ")),(0,a.yg)("p",null,"Non fixed environment variables\uff1aThese variables will change dynamically according to the monitoring Metric object we choose. For example, if we choose ",(0,a.yg)("strong",{parentName:"p"},"response time Metric of website monitoring"),", the environment variables will have ",(0,a.yg)("inlineCode",{parentName:"p"},"responseTime - This is the response time variable"),(0,a.yg)("br",{parentName:"p"}),"\n","If we want to set ",(0,a.yg)("strong",{parentName:"p"},"when the response time of website monitoring is greater than 400")," to trigger an alarm\uff0cthe expression is ",(0,a.yg)("inlineCode",{parentName:"p"},"responseTime>400")),(0,a.yg)("p",null,"Fixed environment variables(Rarely used)\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"instance : Row instance value"),(0,a.yg)("br",{parentName:"p"}),"\n","This variable is mainly used to calculate multiple instances. For example, we collected ",(0,a.yg)("inlineCode",{parentName:"p"},"usage"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"usage is non fixed environment variables"),") of disk C and disk D, but we only want to set the alarm when ",(0,a.yg)("strong",{parentName:"p"},"the usage of C disk is greater than 80"),". Then the expression is ",(0,a.yg)("inlineCode",{parentName:"p"},'equals(instance,"c")&&usage>80')," "),(0,a.yg)("h4",{id:"expression-setting-case"},"Expression setting case"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Website monitoring -> Trigger alarm when the response time is greater than or equal to 400ms",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},"responseTime>=400"),"    "),(0,a.yg)("li",{parentName:"ol"},"API monitoring -> Trigger alarm when the response time is greater than 3000ms",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},"responseTime>3000"),"   "),(0,a.yg)("li",{parentName:"ol"},"Entire site monitoring -> Trigger alarm when URL(instance) path is ",(0,a.yg)("inlineCode",{parentName:"li"},"https://baidu.com/book/3")," and the response time is greater than 200ms",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},'equals(instance,"https://baidu.com/book/3")&&responseTime>200'),"     "),(0,a.yg)("li",{parentName:"ol"},"MYSQL monitoring -> status Metric group -> Trigger alarm when hreads_running(number of running threads) Metric is greater than 7",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},"threads_running>7"),"   ")),(0,a.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}c.isMDXComponent=!0}}]);