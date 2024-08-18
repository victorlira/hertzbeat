"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[92682],{15680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,g=s["".concat(i,".").concat(m)]||s[m]||c[m]||l;return a?r.createElement(g,o(o({ref:t},h),{},{components:a})):r.createElement(g,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},54631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(58168),n=(a(96540),a(15680));const l={title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},o=void 0,p={permalink:"/zh-cn/blog/2022/09/04/hertzbeat-v1.1.3",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2022-09-04-hertzbeat-v1.1.3.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2022-09-04-hertzbeat-v1.1.3.md",title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",description:"Home: hertzbeat.com | tancloud.cn",date:"2022-09-04T00:00:00.000Z",formattedDate:"2022\u5e749\u67084\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"}],readingTime:2.15,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-cn/blog/2022/09/10/ssl-practice"},nextItem:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.1 \u53d1\u5e03\uff01",permalink:"/zh-cn/blog/2022/07/10/hertzbeat-v1.1.1"}},i={authorsImageUrls:[void 0]},u=[{value:"Have Fun!",id:"have-fun",level:2},{value:"V1.1.3",id:"v113",level:2},{value:"Have Fun!",id:"have-fun-1",level:2}],h={toc:u};function c(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Home: hertzbeat.com | tancloud.cn"),(0,n.yg)("p",null,"Hi guys! HertzBeat v1.1.3 is coming. This version supports kafka monitor, ssl certificate expired monitor and more. Fixed several bugs and improved the overall stable usability."),(0,n.yg)("p",null,"Only one docker command is needed to install and experience hertzbeat\uff1a\n",(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat apache/hertzbeat")),(0,n.yg)("p",null,"Thanks to the contributors! \ud83d\udc4d\ud83d\udc4d"),(0,n.yg)("p",null,"Feature\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/260"},"[web-app]feature:update monitors layout, support host copy to clipboard #260")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/263"},"[monitor] feature: support apache kafka monitor #263")," contribute by @wang1027-wqh"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/265"},"[webapp] support history chart query 3 mouth time range #265")," issue by @ericfrol"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/266"},"[monitor] support ssl certificate expired monitor #266")," suggest by @noear"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/268"},"[web-app] update default interval 600s to 120s #268")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/272"},"[web-app] update layout ui - help button, nav menu #272")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/273"},"[alert,webapp] support delete all alerts at once. #273")," issue by @ericfrol"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/276"},"[web-app] update home background image #276"))),(0,n.yg)("p",null,"Bugfix."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/262"},"[docs] fix extend-http-jsonpath.md parseScript error #262")," contribute by @woshiniusange    ."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/264"},"[monitor] update help docs, refactor redis metrics name #264")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/270"},"[manager] bugfix alert tags is null when tags map key normal value null. #270")," issue by ",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/275"},"[alert] bugfix: the alert global preset config do not take effect #275")," issue by ",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu"))),(0,n.yg)("p",null,"Online ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,n.yg)("h2",{id:"have-fun"},"Have Fun!"),(0,n.yg)("h2",{id:"v113"},"V1.1.3"),(0,n.yg)("p",null,"\u5b98\u7f51: hertzbeat.com | tancloud.cn"),(0,n.yg)("p",null,"\u5927\u5bb6\u597d\uff0cHertzBeat v1.1.3 \u53d1\u5e03\u5566\uff01\u8fd9\u4e2a\u7248\u672c\u652f\u6301\u4e86apache kafka\u76d1\u63a7\uff0cSSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u7b49\u3002\u4fee\u590d\u4e86\u82e5\u5e72bug\uff0c\u63d0\u5347\u6574\u4f53\u7a33\u5b9a\u6027\u3002"),(0,n.yg)("p",null,"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8chertzbeat \uff1a\n",(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat apache/hertzbeat")),(0,n.yg)("p",null,"\u611f\u8c22hertzbeat\u8d21\u732e\u8005\u4eec\u7684\u8d21\u732e\uff01\ud83d\udc4d\ud83d\udc4d"),(0,n.yg)("p",null,"Feature\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/260"},"[web-app]feature:update monitors layout, support host copy to clipboard #260")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/263"},"[monitor] feature: support apache kafka monitor #263")," contribute by @wang1027-wqh"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/265"},"[webapp] support history chart query 3 mouth time range #265")," issue by @ericfrol"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/266"},"[monitor] support ssl certificate expired monitor #266")," suggest by @noear"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/268"},"[web-app] update default interval 600s to 120s #268")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/272"},"[web-app] update layout ui - help button, nav menu #272")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/273"},"[alert,webapp] support delete all alerts at once. #273")," issue by @ericfrol"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/276"},"[web-app] update home background image #276"))),(0,n.yg)("p",null,"Bugfix."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/262"},"[docs] fix extend-http-jsonpath.md parseScript error #262")," contribute by @woshiniusange    ."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/264"},"[monitor] update help docs, refactor redis metrics name #264")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/270"},"[manager] bugfix alert tags is null when tags map key normal value null. #270")," issue by ",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/275"},"[alert] bugfix: the alert global preset config do not take effect #275")," issue by ",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu"))),(0,n.yg)("p",null,"Online ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,n.yg)("h2",{id:"have-fun-1"},"Have Fun!"))}c.isMDXComponent=!0}}]);