"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[22903],{15680:(t,e,a)=>{a.d(e,{xA:()=>i,yg:()=>c});var r=a(96540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var g=r.createContext({}),l=function(t){var e=r.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):h(h({},e),t)),a},i=function(t){var e=l(t.components);return r.createElement(g.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,g=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),p=l(a),c=n,m=p["".concat(g,".").concat(c)]||p[c]||s[c]||o;return a?r.createElement(m,h(h({ref:e},i),{},{components:a})):r.createElement(m,h({ref:e},i))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,h=new Array(o);h[0]=p;var u={};for(var g in e)hasOwnProperty.call(e,g)&&(u[g]=e[g]);u.originalType=t,u.mdxType="string"==typeof t?t:n,h[1]=u;for(var l=2;l<o;l++)h[l]=a[l];return r.createElement.apply(null,h)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71599:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>h,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=a(58168),n=(a(96540),a(15680));const o={title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.0 \u6b63\u5f0f\u53d1\u5e03\u5566",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},h=void 0,u={permalink:"/zh-cn/blog/2022/06/01/hertzbeat-v1.0",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2022-06-01-hertzbeat-v1.0.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2022-06-01-hertzbeat-v1.0.md",title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.0 \u6b63\u5f0f\u53d1\u5e03\u5566",description:"HertzBeat \u8d6b\u5179\u8df3\u52a8 \u662f\u7531 Dromara \u5b75\u5316\uff0cTanCloud \u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u5168\u7ad9\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5 (\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",date:"2022-06-01T00:00:00.000Z",formattedDate:"2022\u5e746\u67081\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"}],readingTime:4.725,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.0 \u6b63\u5f0f\u53d1\u5e03\u5566",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.0 \u53d1\u5e03\uff01\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5f00\u542f\u76d1\u63a7\u4e4b\u65c5\uff01",permalink:"/zh-cn/blog/2022/06/19/hertzbeat-v1.1.0"}},g={authorsImageUrls:[void 0]},l=[],i={toc:l};function s(t){let{components:e,...a}=t;return(0,n.yg)("wrapper",(0,r.A)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat \u8d6b\u5179\u8df3\u52a8")," \u662f\u7531 ",(0,n.yg)("a",{parentName:"p",href:"https://dromara.org"},"Dromara")," \u5b75\u5316\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud")," \u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u5168\u7ad9\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5 (\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5b98\u7f51: ",(0,n.yg)("a",{parentName:"strong",href:"https://hertzbeat.com"},"hertzbeat.com")," | ",(0,n.yg)("a",{parentName:"strong",href:"https://tancloud.cn"},"tancloud.cn"))),(0,n.yg)("p",null,"\u4ecev1.0-beta.1\u5230v1.0-beat.8\uff0c\u7ecf\u8fc7\u591a\u4e2a\u7248\u672c\u7684\u8fed\u4ee3\u5b8c\u5584\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u5ba3\u5e03hertzbeat v1.0\u6b63\u5f0f\u53d1\u5e03\u3002"),(0,n.yg)("p",null,"\u611f\u8c22\u4ecebeat.1\u7248\u672c\u4ee5\u6765 HertzBeat Contributors \u7684\u8d21\u732e\uff0c\u793e\u533a\u540c\u5b66\u548c\u7528\u6237\u4eec\u7684\u652f\u6301\u3002  \u6b64\u7248\u672c\u66f4\u65b0\u652f\u6301\u4e86Redis\u7684\u76d1\u63a7( @gcdd1993 \u8d21\u732e)\uff0c\u8986\u76d6Redis\u7684\u5185\u5b58CPU\u7b49\u5404\u4e2a\u6027\u80fd\u6307\u6807\uff0c\u5168\u65b9\u9762\u76d1\u63a7Redis\u3002\u4fee\u590d\u4e86\u591a\u4e2abug\u8fdb\u4e00\u6b65\u589e\u5f3a\u7a33\u5b9a\u6027\u3002"),(0,n.yg)("table",null,(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/tomsun28"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/24788200?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"tomsun28"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=tomsun28",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=tomsun28",title:"Documentation"},"\ud83d\udcd6")," ",(0,n.yg)("a",{href:"#design-tomsun28",title:"Design"},"\ud83c\udfa8")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/wang1027-wqh"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/71161318?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"\u4f1a\u7f16\u7a0b\u7684\u738b\u5b66\u957f"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=wang1027-wqh",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=wang1027-wqh",title:"Documentation"},"\ud83d\udcd6")," ",(0,n.yg)("a",{href:"#design-wang1027-wqh",title:"Design"},"\ud83c\udfa8")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://www.maxkey.top/"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/1563377?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"MaxKey"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=shimingxy",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"#design-shimingxy",title:"Design"},"\ud83c\udfa8")," ",(0,n.yg)("a",{href:"#ideas-shimingxy",title:"Ideas, Planning, & Feedback"},"\ud83e\udd14")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://blog.gcdd.top/"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/26523525?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"\u89c2\u6ca7\u6d77"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=gcdd1993",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"#design-gcdd1993",title:"Design"},"\ud83c\udfa8")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3Agcdd1993",title:"Bug reports"},"\ud83d\udc1b")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/a25017012"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/32265356?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"yuye"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=a25017012",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=a25017012",title:"Documentation"},"\ud83d\udcd6")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/jx10086"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/5323228?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"jx10086"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=jx10086",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3Ajx10086",title:"Bug reports"},"\ud83d\udc1b")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/winnerTimer"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/76024658?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"winnerTimer"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=winnerTimer",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3AwinnerTimer",title:"Bug reports"},"\ud83d\udc1b"))),(0,n.yg)("tr",null,(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/goo-kits"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/13163673?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"goo-kits"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=goo-kits",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3Agoo-kits",title:"Bug reports"},"\ud83d\udc1b")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/brave4Time"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/105094014?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"brave4Time"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=brave4Time",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3Abrave4Time",title:"Bug reports"},"\ud83d\udc1b")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/walkerlee-lab"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/8426753?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"WalkerLee"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=walkerlee-lab",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3Awalkerlee-lab",title:"Bug reports"},"\ud83d\udc1b")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/fullofjoy"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/30247571?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"jianghang"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=fullofjoy",title:"Code"},"\ud83d\udcbb")," ",(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/issues?q=author%3Afullofjoy",title:"Bug reports"},"\ud83d\udc1b")),(0,n.yg)("td",{align:"center"},(0,n.yg)("a",{href:"https://github.com/ChineseTony"},(0,n.yg)("img",{src:"https://avatars.githubusercontent.com/u/24618786?v=4?s=100",width:"100px;",alt:""}),(0,n.yg)("br",null),(0,n.yg)("sub",null,(0,n.yg)("b",null,"ChineseTony"))),(0,n.yg)("br",null),(0,n.yg)("a",{href:"https://github.com/tomsun28/hertzbeat/commits?author=ChineseTony",title:"Code"},"\ud83d\udcbb")))),(0,n.yg)("p",null,"\u7279\u6027\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/142"},"monitor feature:\u652f\u6301redis\u76d1\u63a7\u534f\u8bae #142"),"   contribute by @gcdd1993"),(0,n.yg)("li",{parentName:"ol"},"Copyright & NOTICE contribute by @shimingxy"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/144"},"alerter bugfix: \u652f\u6301\u7cfb\u7edf\u544a\u8b66\u8bbe\u7f6e\u89e6\u53d1\u6b21\u6570 #144"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/146"},"collector feature: redis\u590d\u7528\u5355\u8fde\u63a5 #146"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/159"},"collector \u9690\u85cf\u65e5\u5fd7\u4e2dIP\u3001\u8d26\u53f7\u4e0e\u5bc6\u7801\u7b49\u654f\u611f\u4fe1\u606f #159")," idea from @goo-kits"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/137"},"\u652f\u6301 zookeeper \u76d1\u63a7\u5e2e\u52a9\u6587\u6863 #137")," contributr by @wang1027-wqh")),(0,n.yg)("p",null,"Bug\u4fee\u590d."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/131"},"[monitor]bugfix: \u4fee\u590dresource bundle\u5728en.HK\u52a0\u8f7d\u8d44\u6e90\u9519\u8bef\u95ee\u9898 #131"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/132"},"[web-app]bugfix:\u4fee\u590d\u5f53\u4e3b\u9898\u4e3adark\u65f6\u90e8\u5206\u83dc\u5355\u4e0d\u53ef\u89c1 #132"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/140"},"[monitor]bugfix: \u4fee\u590d\u901a\u77e5\u7b56\u7565\u8fc7\u6ee4\u6807\u7b7e\u65f6\u53ea\u80fd\u9009\u62e9\u4e00\u4e2a #140"),".  issue by @daqianxiaoyao"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/150"},"[td-engine store]bugfix: \u4fee\u590dtdengine\u5165\u5e93\u6307\u6807\u6570\u636e\u65f6\u65e0table\u62a5\u9519\u65e5\u5fd7#150"),". contribute by @ChineseTony"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/153"},"[collector]bugfix: \u4fee\u590d warehouse data queue \u672a\u6d88\u8d39\u5f02\u5e38 #153"),".  issue by @daqianxiaoyao"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/157"},"[web-app]bugfix: \u4fee\u590d\u9ed1\u6697\u4e3b\u9898\u65f6\u9875\u9762\u8f93\u5165\u6846\u6821\u9a8c\u51fa\u9519\u65f6\u4e0d\u53ef\u89c1 #157"),". issue by @ConradWen")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/compare/v1.0-beta.8...v1.0"},"https://github.com/apache/hertzbeat/compare/v1.0-beta.8...v1.0")),(0,n.yg)("p",null,"Online ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Redis\u76d1\u63a7\u6765\u5566\uff1a"),(0,n.yg)("img",{width:"1910",alt:"2022-05-29 20 23 58",src:"https://user-images.githubusercontent.com/24788200/170868079-325ccc08-165f-4d0e-9ebb-18b0b5c9db3f.png"}),(0,n.yg)("img",{width:"959",alt:"2022-05-29 20 24 21",src:"https://user-images.githubusercontent.com/24788200/170868094-3c4de70f-934a-4a13-ae1a-0744c30f14f3.png"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat\u8d6b\u5179\u8df3\u52a8")," \u662f\u7531 ",(0,n.yg)("a",{parentName:"p",href:"https://dromara.org"},"Dromara")," \u5b75\u5316\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"SAAS\u4e91\u76d1\u63a7\u7248\u672c"),"\uff0c\u4e2d\u5c0f\u56e2\u961f\u548c\u4e2a\u4eba\u65e0\u9700\u518d\u4e3a\u4e86\u76d1\u63a7\u81ea\u5df1\u7684\u7f51\u7ad9\u8d44\u6e90\uff0c\u800c\u53bb\u90e8\u7f72\u4e00\u5957\u7e41\u7410\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"\u767b\u5f55\u5373\u53ef\u514d\u8d39\u5f00\u59cb"),"\u76d1\u63a7\u4e4b\u65c5\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301\u81ea\u5b9a\u4e49\u76d1\u63a7\uff0c\u53ea\u7528\u901a\u8fc7\u914d\u7f6eYML\u6587\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\u548c\u6307\u6807\uff0c\u6765\u6ee1\u8db3\u5e38\u89c1\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002\nHertzBeat \u6a21\u5757\u5316\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"manager, collector, scheduler, warehouse, alerter")," \u5404\u4e2a\u6a21\u5757\u89e3\u8026\u5408\uff0c\u65b9\u4fbf\u7406\u89e3\u4e0e\u5b9a\u5236\u5f00\u53d1\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301\u66f4\u81ea\u7531\u5316\u7684\u544a\u8b66\u914d\u7f6e(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c\u652f\u6301\u544a\u8b66\u901a\u77e5\uff0c\u544a\u8b66\u6a21\u7248\uff0c\u90ae\u4ef6\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49\u53ca\u65f6\u901a\u77e5\u9001\u8fbe",(0,n.yg)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u767b\u5f55 HertzBeat \u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"\u4e91\u73af\u5883TanCloud")," \u8bd5\u7528\u53d1\u73b0\u66f4\u591a\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u6211\u4eec\u6b63\u5728\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u6b22\u8fce\u53c2\u4e0e\u52a0\u5165\u5171\u5efa\u9879\u76ee\u5f00\u6e90\u751f\u6001\u3002"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"HertzBeat")," \u7684\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u4ed3\u5e93\u5730\u5740")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"Github")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/hertzbeat/hertzbeat"},"Gitee")," ",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat")))}s.isMDXComponent=!0}}]);