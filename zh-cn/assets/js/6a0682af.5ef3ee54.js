"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[91497],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>s});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=c(r),s=n,h=u["".concat(i,".").concat(s)]||u[s]||m[s]||o;return r?a.createElement(h,l(l({ref:t},g),{},{components:r})):a.createElement(h,l({ref:t},g))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.4 \u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},l=void 0,p={permalink:"/zh-cn/blog/2022/02/28/hertzbeat-v1.0-beta.4",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2022-02-28-hertzbeat-v1.0-beta.4.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2022-02-28-hertzbeat-v1.0-beta.4.md",title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.4 \u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf",description:"HertzBeat\u8d6b\u5179\u8df3\u52a8\u662f\u7531Dromara\u5b75\u5316\uff0cTanCloud\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u5168\u7ad9\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",date:"2022-02-28T00:00:00.000Z",formattedDate:"2022\u5e742\u670828\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"}],readingTime:4.925,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.4 \u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.5 \u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf",permalink:"/zh-cn/blog/2022/03/10/hertzbeat-v1.0-beta.5"},nextItem:{title:"\u88f8\u8f9e\u540e\u6211\u505a\u4e86\u4e2a\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf",permalink:"/zh-cn/blog/2022/02/17/hertzbeat"}},i={authorsImageUrls:[void 0]},c=[{value:"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6",id:"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6",level:5}],g={toc:c};function m(e){let{components:t,...r}=e;return(0,n.yg)("wrapper",(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"HertzBeat\u8d6b\u5179\u8df3\u52a8\u662f\u7531Dromara\u5b75\u5316\uff0cTanCloud\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u5168\u7ad9\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002"),(0,n.yg)("p",null,"\u5b98\u7f51:hertzbeat.com | tancloud.cn"),(0,n.yg)("p",null,"\u6b64\u5347\u7ea7\u7248\u672c\u5305\u542b\u4e86\u5927\u91cf\u7279\u6027\u4e0e\u4fee\u590d\uff0c\u5305\u62ec\u7528\u6237\u6025\u9700\u7684\u8d26\u6237\u7528\u6237\u914d\u7f6e\uff0c\u4e30\u5bcc\u4e86\u4e3b\u6d41\u7b2c\u4e09\u65b9\u544a\u8b66\u901a\u77e5(\u4f01\u4e1a\u5fae\u4fe1\u673a\u5668\u4eba\uff0c\u9489\u9489\u673a\u5668\u4eba\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u66f4\u597d\u770b\u7684\u90ae\u4ef6\u6a21\u7248\uff0c\u81ea\u5b9a\u4e49\u90ae\u4ef6\u670d\u52a1\u5668\u7b49\uff0c\u6b22\u8fce\u4f7f\u7528\u3002"),(0,n.yg)("p",null,"\u7248\u672c\u7279\u6027\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u544a\u8b66\u901a\u77e5\uff1a\u96c6\u6210\u98de\u4e66\u5b98\u65b9WebHook\u5b9e\u73b0\u63a8\u9001\u544a\u8b66\u4fe1\u606f #PR9 \u7531 @learning-code \u8d21\u732e thanks"),(0,n.yg)("li",{parentName:"ol"},"\u544a\u8b66\u901a\u77e5\uff1a\u5b9e\u73b0\u4f01\u4e1a\u5fae\u4fe1WebHook\u544a\u8b66\u4fe1\u606f\u63a8\u9001 #PR8 \u7531 @learning-code \u8d21\u732e thanks"),(0,n.yg)("li",{parentName:"ol"},"\u544a\u8b66\u901a\u77e5\uff1a\u544a\u8b66\u90ae\u4ef6\u901a\u77e5\u6a21\u7248\u4f18\u5316 \u7531 @learning-code \u8d21\u732e thanks"),(0,n.yg)("li",{parentName:"ol"},"\u544a\u8b66\u901a\u77e5\uff1a\u96c6\u6210\u9489\u9489\u7fa4\u673a\u5668\u4eba\u5b9e\u73b0\u63a8\u9001\u544a\u8b66\u4fe1\u606f"),(0,n.yg)("li",{parentName:"ol"},"\u8d26\u6237\uff1a\u66b4\u9732\u652f\u6301YML\u6587\u4ef6\u914d\u7f6e\u767b\u9646\u7528\u6237\u8d26\u6237\u4fe1\u606f"),(0,n.yg)("li",{parentName:"ol"},"\u652f\u6301\u81ea\u5b9a\u4e49\u90ae\u4ef6\u670d\u52a1\u5668"),(0,n.yg)("li",{parentName:"ol"},"\u65b0\u589e\u5e2e\u52a9\u4e2d\u5fc3\uff0c\u76d1\u63a7\u544a\u8b66\u7b49\u529f\u80fd\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u5e2e\u52a9\u6587\u6863. ",(0,n.yg)("a",{parentName:"li",href:"https://tancloud.cn/docs/help/guide"},"https://tancloud.cn/docs/help/guide")),(0,n.yg)("li",{parentName:"ol"},"DOC\u5176\u5b83\u6587\u6863\u66f4\u65b0\uff0c\u672c\u5730\u542f\u52a8\u5e2e\u52a9"),(0,n.yg)("li",{parentName:"ol"},"\u65b0LOGO\u66f4\u65b0"),(0,n.yg)("li",{parentName:"ol"},"\u76d1\u63a7\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u653e\u5f00\u4e3a7\u5929"),(0,n.yg)("li",{parentName:"ol"},"\u65b0\u589econtroller\u63a5\u53e3\u5165\u53c2\u9650\u5b9a\u4fee\u9970\u7b26 \u7531 @learning-code \u8d21\u732e thanks")),(0,n.yg)("p",null,"BUG\u4fee\u590d"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u76d1\u63a7host\u53c2\u6570\u4fee\u590d\u6821\u9a8c."),(0,n.yg)("li",{parentName:"ol"},"fixBug\u81ea\u5b9a\u4e49\u90ae\u4ef6\u670d\u52a1\u5668\u672a\u751f\u6548"),(0,n.yg)("li",{parentName:"ol"},"\u90ae\u4ef6\u9875\u9762\u4f18\u5316\uff0cfix\u544a\u8b66\u7ea7\u522b\u672a\u8f6c\u8bd1"),(0,n.yg)("li",{parentName:"ol"},"fix\u76d1\u63a7\u5220\u9664\u540e\u544a\u8b66\u5b9a\u4e49\u5173\u8054\u672a\u5220\u9664"),(0,n.yg)("li",{parentName:"ol"},"\u8c03\u6574jvm\u542f\u52a8\u5185\u5b58\u5927\u5c0f,fixOOM"),(0,n.yg)("li",{parentName:"ol"},"fixbug\u91cd\u542f\u540e\u72b6\u6001\u5f02\u5e38\u76d1\u63a7\u65e0\u6cd5\u89e6\u53d1\u6062\u590d\u544a\u8b66"),(0,n.yg)("li",{parentName:"ol"},"fix pmd error"),(0,n.yg)("li",{parentName:"ol"},"bugfix\u544a\u8b66\u8bbe\u7f6e\u786e\u5b9a\u540e\u5f02\u5e38,\u6309\u94ae\u8fd8\u5728\u65cb\u8f6c"),(0,n.yg)("li",{parentName:"ol"},"fix\u591a\u4f59\u79df\u6237ID\u4f9d\u8d56"),(0,n.yg)("li",{parentName:"ol"},"fix receiver\u7684email\u7c7b\u578b\u9519\u8bef\uff0c\u8c03\u6574\u5f39\u51fa\u6846\u5927\u5c0f"),(0,n.yg)("li",{parentName:"ol"},"fixbug\u544a\u8b66\u5b9a\u4e49\u5173\u8054\u76d1\u63a7\u4e0d\u5b58\u5728\u65f6\u5f02\u5e38")),(0,n.yg)("p",null,"\u6b22\u8fce\u5728\u7ebf\u8bd5\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn")),(0,n.yg)("p",null,"\u7248\u672c\u5347\u7ea7\u6ce8\u610f\u26a0\ufe0f"),(0,n.yg)("p",null,"1.0-beta2\u5347\u7ea7\u4e0a\u6765\uff0cMYSQL\u7684\u6570\u636e\u5e93\u9700\u6267\u884c\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","ALTER TABLE alert_define_monitor_bind DROP monitor_name;"),(0,n.yg)("p",null,"1.0-beta2,1.0-beta3\u5347\u7ea7\u4e0a\u6765\uff0cMYSQL\u7684\u6570\u636e\u5e93\u9700\u6267\u884c\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","ALTER TABLE notice_receiver ADD access_token varchar(255);"),(0,n.yg)("hr",null),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat\u8d6b\u5179\u8df3\u52a8")," \u662f\u7531",(0,n.yg)("a",{parentName:"p",href:"https://dromara.org"},"Dromara"),"\u5b75\u5316\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"SAAS\u7248\u672c\u76d1\u63a7\u4e91")),"\uff0c\u4e2d\u5c0f\u56e2\u961f\u548c\u4e2a\u4eba\u65e0\u9700\u518d\u4e3a\u4e86\u76d1\u63a7\u81ea\u5df1\u7684\u7f51\u7ad9\u8d44\u6e90\uff0c\u800c\u53bb\u90e8\u7f72\u4e00\u5957\u7e41\u7410\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"\u767b\u5f55\u5373\u53ef\u514d\u8d39\u5f00\u59cb")),"\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301",(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/advanced/extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7")," ,\u53ea\u7528\u901a\u8fc7\u914d\u7f6eYML\u6587\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\u548c\u6307\u6807\uff0c\u6765\u6ee1\u8db3\u5e38\u89c1\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u6a21\u5757\u5316\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"manager, collector, scheduler, warehouse, alerter")," \u5404\u4e2a\u6a21\u5757\u89e3\u8026\u5408\uff0c\u65b9\u4fbf\u7406\u89e3\u4e0e\u5b9a\u5236\u5f00\u53d1\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301\u66f4\u81ea\u7531\u5316\u7684\u544a\u8b66\u914d\u7f6e(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c\u652f\u6301\u544a\u8b66\u901a\u77e5\uff0c\u544a\u8b66\u6a21\u7248\uff0c\u90ae\u4ef6\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49\u53ca\u65f6\u901a\u77e5\u9001\u8fbe",(0,n.yg)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u767b\u5f55 HertzBeat \u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"\u4e91\u73af\u5883TanCloud")," \u8bd5\u7528\u53d1\u73b0\u66f4\u591a\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u6211\u4eec\u6b63\u5728\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u6b22\u8fce\u53c2\u4e0e\u52a0\u5165\u4e00\u8d77\u5171\u5efa\u9879\u76ee\u5f00\u6e90\u751f\u6001\u3002")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,n.yg)("p",null,"\u8001\u94c1\u4eec\u53ef\u4ee5\u901a\u8fc7\u6f14\u793a\u89c6\u9891\u6765\u76f4\u89c2\u4e86\u89e3\u529f\u80fd\uff1a ",(0,n.yg)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Vi4y1f7i8"},"https://www.bilibili.com/video/BV1Vi4y1f7i8")),(0,n.yg)("h5",{id:"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6"},"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5fae\u4fe1\u4ea4\u6d41\u7fa4"),"   "),(0,n.yg)("p",null,"\u52a0\u5fae\u4fe1\u53f7 tan-cloud \u6216 \u626b\u63cf\u4e0b\u9762\u8d26\u53f7\u4e8c\u7ef4\u7801\u62c9\u8fdb\u5fae\u4fe1\u7fa4\u3002   "),(0,n.yg)("img",{alt:"tan-cloud",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/docs/help/tan-cloud-wechat.jpg",width:"200"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"QQ\u4ea4\u6d41\u7fa4"),"  "),(0,n.yg)("p",null,"\u52a0QQ\u7fa4\u53f7 236915833 \u6216 \u626b\u63cf\u4e0b\u9762\u7684\u7fa4\u4e8c\u7ef4\u7801\u8fdb\u7fa4, \u9a8c\u8bc1\u4fe1\u606f: tancloud"),(0,n.yg)("img",{alt:"tan-cloud",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/docs/help/qq-qr.jpg",width:"200"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u4ed3\u5e93\u5730\u5740"),"      "),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"Github")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"Gitee")," ",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"),"    "),(0,n.yg)("p",null,"\u770b\u5230\u8fd9\u91cc\u4e0d\u59a8\u7ed9\u4e2aStar\u54e6\uff0c\u7070\u5e38\u611f\u8c22\uff0c\u5f2f\u8170!!"))}m.isMDXComponent=!0}}]);