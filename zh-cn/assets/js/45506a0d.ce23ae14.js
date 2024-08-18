"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[46126],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=g(a),y=r,s=u["".concat(p,".").concat(y)]||u[y]||c[y]||i;return a?n.createElement(s,l(l({ref:t},m),{},{components:a})):n.createElement(s,l({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const i={title:"\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c, \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat v1.4.1 \u53d1\u5e03",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},l=void 0,o={permalink:"/zh-cn/blog/2023/09/26/hertzbeat-v1.4.1",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2023-09-26-hertzbeat-v1.4.1.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-09-26-hertzbeat-v1.4.1.md",title:"\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c, \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat v1.4.1 \u53d1\u5e03",description:"\u54c8\u55bd\u5927\u5bb6\u597d\uff0c\u65f6\u95f4\u5f88\u5feb\u4e24\u4e2a\u6708\u53c8\u8fc7\u53bb\u4e86\uff0cHertzBeat \u7ecf\u8fc7\u8fd1\u4e24\u4e2a\u6708\u7684\u8fed\u4ee3\u7ec8\u4e8e\u53d1\u5e03\u4e86 v1.4.1 \u7248\u672c\u3002\u4e3a\u4ec0\u4e48\u662f\u7ec8\u4e8e\uff0c\u56e0\u4e3a\u6709\u70b9\u96be\u54c8\u54c8\u3002\u6211\u4eec\u53c2\u8003 rocketmq \u91cd\u6784\u4e86 netty \u7684 server client \u7aef\u6a21\u5757\uff0c\u91cd\u6784\u4e86\u91c7\u96c6\u5668\u96c6\u7fa4\u8c03\u5ea6\u3002\u6bd4\u8d77\u4e0a\u4e00\u7248\u672c\u6709\u4e86\u66f4\u4f18\u96c5\u7684\u901a\u8baf\u4ee3\u7801\uff0c\u66f4\u5b8c\u5584\u5168\u9762\u7684\u96c6\u7fa4\u3002",date:"2023-09-26T00:00:00.000Z",formattedDate:"2023\u5e749\u670826\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:5.77,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c, \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat v1.4.1 \u53d1\u5e03",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},prevItem:{title:"HertzBeat v1.4.2 \u7248\u672c\u53d1\u5e03\uff0c\u81ea\u5b9a\u4e49\u6d88\u606f\u901a\u77e5\u6a21\u7248",permalink:"/zh-cn/blog/2023/11/12/hertzbeat-v1.4.2"},nextItem:{title:"\u70ed\u70c8\u6b22\u8fce HertzBeat \u5c0f\u4f19\u4f34\u65b0\u664b\u793e\u533a Committer!",permalink:"/zh-cn/blog/2023/08/28/new-committer"}},p={authorsImageUrls:[void 0]},g=[{value:"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b\uff1a",id:"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b",level:3},{value:"\u4e0a\u6548\u679c\u56fe:",id:"\u4e0a\u6548\u679c\u56fe",level:3},{value:"\u4ec0\u4e48\u662f HertzBeat?",id:"\u4ec0\u4e48\u662f-hertzbeat",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u5c1d\u8bd5\u90e8\u7f72",id:"\u5c1d\u8bd5\u90e8\u7f72",level:3},{value:"\u26c4 \u5df2\u652f\u6301",id:"-\u5df2\u652f\u6301",level:2}],m={toc:g};function c(e){let{components:t,...i}=e;return(0,r.yg)("wrapper",(0,n.A)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u54c8\u55bd\u5927\u5bb6\u597d\uff0c\u65f6\u95f4\u5f88\u5feb\u4e24\u4e2a\u6708\u53c8\u8fc7\u53bb\u4e86\uff0cHertzBeat \u7ecf\u8fc7\u8fd1\u4e24\u4e2a\u6708\u7684\u8fed\u4ee3\u7ec8\u4e8e\u53d1\u5e03\u4e86 v1.4.1 \u7248\u672c\u3002\u4e3a\u4ec0\u4e48\u662f\u7ec8\u4e8e\uff0c\u56e0\u4e3a\u6709\u70b9\u96be\u54c8\u54c8\u3002\u6211\u4eec\u53c2\u8003 rocketmq \u91cd\u6784\u4e86 netty \u7684 server client \u7aef\u6a21\u5757\uff0c\u91cd\u6784\u4e86\u91c7\u96c6\u5668\u96c6\u7fa4\u8c03\u5ea6\u3002\u6bd4\u8d77\u4e0a\u4e00\u7248\u672c\u6709\u4e86\u66f4\u4f18\u96c5\u7684\u901a\u8baf\u4ee3\u7801\uff0c\u66f4\u5b8c\u5584\u5168\u9762\u7684\u96c6\u7fa4\u3002\n\u91c7\u96c6\u4efb\u52a1\u4e00\u81f4\u6027hash\u8c03\u5ea6\uff0c\u96c6\u7fa4\u5fc3\u8df3\u4fdd\u6d3b\uff0c\u65ad\u5f00\u4e3b\u52a8\u91cd\u8fde\uff0c\u4e3b\u52a8\u4e0a\u7ebf\u4e0b\u7ebf\uff0c\u4e3b\u52a8\u505c\u673a\u7b49\u7b49\u8fd9\u4e9b\u90fd\u6709\u3002\u8bbe\u8ba1\u4e86\u65b0\u7684\u63a7\u5236\u53f0\u767b\u9646\u754c\u9762\u548c\u6b22\u8fce\u9875\u9762\uff0c\u652f\u6301\u4e86\u91c7\u96c6\u5668\u96c6\u7fa4\u7684UI\u7ba1\u7406\uff0c\u5408\u5e76\u4e86\u5f00\u6e90\u4e4b\u590f\u4e24\u4f4d\u540c\u5b66\u7684\u5e2e\u52a9\u63d0\u793a\u5934\u7279\u6027\u548c\u9608\u503c\u8868\u8fbe\u5f0f\u7279\u6027\uff0c\u5f88\u591a\u7528\u6237\u9700\u8981\u7684\u76d1\u63a7\u6307\u6807\u540d\u79f0\u56fd\u9645\u5316\u7b49\u7b49\uff0c\u6700\u91cd\u8981\u7684\u5f53\u7136\u662f\u4fee\u590d\u82e5\u5e72BUG\uff0c\u4f53\u9a8c\u4e0b\u6765\u786e\u5b9e\u589e\u5f3a\u4e86\u7528\u6237\u4f53\u9a8c\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"hertzBeat",src:a(56850).A,width:"4064",height:"2188"})),(0,r.yg)("h3",{id:"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b"},"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u91cd\u6784netty client server, \u91c7\u96c6\u5668\u96c6\u7fa4\u8c03\u5ea6")," @Ceilzcx @tomsun28"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u91c7\u96c6\u5668\u96c6\u7fa4\u7684UI\u754c\u9762\u7ba1\u7406")," @Ceilzcx @tomsun28"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u529f\u80fd\u9875\u9762\u5e2e\u52a9\u4fe1\u606f\u6a21\u5757\u548c\u9608\u503c\u8868\u8fbe\u5f0f\u589e\u5f3a")," \u5f00\u6e90\u4e4b\u590f\u548cGLCC\u8bfe\u9898 @YutingNie @mikezzb"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65b0\u7684\u63a7\u5236\u53f0\u767b\u9646\u754c\u9762\u548c\u6b22\u8fce\u9875\u9762")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u76d1\u63a7\u6307\u6807\u540d\u79f0\u56fd\u9645\u5316")," \u7528\u6237\u53ef\u4ee5\u770b\u6307\u6807\u7684\u4e2d\u82f1\u6587\u540d\u79f0\u5566\uff0c\u6b22\u8fce\u4e00\u8d77\u5b8c\u5584\u76d1\u63a7\u6a21\u7248\u91cc\u9762\u7684i18n\u56fd\u9645\u5316\u8d44\u6e90"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301kubernetes helm charts\u4e00\u952e\u90e8\u7f72")," \u89c1 ",(0,r.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/search?repo=hertzbeat"},"https://artifacthub.io/packages/search?repo=hertzbeat"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u66f4\u591a\u7684\u7279\u6027\u548cBUG\u4fee\u590d\uff0c\u7a33\u5b9a\u6027\u63d0\u793a")," \u611f\u8c22 @zqr10159 @Carpe-Wang @luxx-lq @l646505418 @LINGLUOJUN @luelueking @qyaaaa @novohit @gcdd1993"),(0,r.yg)("h3",{id:"\u4e0a\u6548\u679c\u56fe"},"\u4e0a\u6548\u679c\u56fe:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u65b0\u7684\u767b\u9646\u9875\u9762UI"),(0,r.yg)("img",{width:"1952",alt:"image",src:"https://github.com/apache/hertzbeat/assets/24788200/5bc5015a-9343-472d-9754-6b06b9138893"}),(0,r.yg)("img",{width:"1950",alt:"image",src:"https://github.com/apache/hertzbeat/assets/24788200/71a29284-9cad-4ed2-983a-50430ddb1e2f"})),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u91c7\u96c6\u5668\u96c6\u7fa4\u7ba1\u7406"))),(0,r.yg)("img",{width:"1943",alt:"image",src:"https://github.com/apache/hertzbeat/assets/24788200/ba79f743-a450-4b01-adf0-5f15f3722c19"}),(0,r.yg)("img",{width:"1901",alt:"image",src:"https://github.com/apache/hertzbeat/assets/24788200/b090ec18-5aae-444e-9ef6-e62fd1d8d239"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u53cb\u597d\u7684\u5e2e\u52a9\u6587\u6863\u5934")),(0,r.yg)("img",{width:"1942",alt:"image",src:"https://github.com/apache/hertzbeat/assets/24788200/c635fab6-504b-47de-9b7e-0c2df86f7e6a"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u76d1\u63a7\u6307\u6807\u540d\u79f0\u56fd\u9645\u5316")),(0,r.yg)("img",{width:"1802",alt:"image",src:"https://github.com/apache/hertzbeat/assets/24788200/d5c74647-6c18-4b12-b858-f29cf1c61661"}),(0,r.yg)("h3",{id:"\u4ec0\u4e48\u662f-hertzbeat"},"\u4ec0\u4e48\u662f HertzBeat?"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat \u8d6b\u5179\u8df3\u52a8")," \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u9ad8\u6027\u80fd\u96c6\u7fa4\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u3002"),(0,r.yg)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u96c6 ",(0,r.yg)("strong",{parentName:"li"},"\u76d1\u63a7+\u544a\u8b66+\u901a\u77e5")," \u4e3a\u4e00\u4f53\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u5e94\u7528\u7a0b\u5e8f\uff0c\u6570\u636e\u5e93\uff0c\u7f13\u5b58\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5927\u6570\u636e\uff0c\u4e2d\u95f4\u4ef6\uff0cWeb\u670d\u52a1\u5668\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\uff0c\u81ea\u5b9a\u4e49\u7b49\u76d1\u63a7\u9608\u503c\u544a\u8b66\u901a\u77e5\u4e00\u6b65\u5230\u4f4d\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6613\u7528\u53cb\u597d\uff0c\u65e0\u9700 ",(0,r.yg)("inlineCode",{parentName:"li"},"Agent"),"\uff0c\u5168 ",(0,r.yg)("inlineCode",{parentName:"li"},"WEB")," \u9875\u9762\u64cd\u4f5c\uff0c\u9f20\u6807\u70b9\u4e00\u70b9\u5c31\u80fd\u76d1\u63a7\u544a\u8b66\uff0c\u96f6\u4e0a\u624b\u5b66\u4e60\u6210\u672c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5c06 ",(0,r.yg)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," \u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u5728\u6d4f\u89c8\u5668\u914d\u7f6e\u76d1\u63a7\u6a21\u7248 ",(0,r.yg)("inlineCode",{parentName:"li"},"YML")," \u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u60f3\u8981\u7684\u6307\u6807\u3002\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6e\u4e0b\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u6b3e ",(0,r.yg)("inlineCode",{parentName:"li"},"K8s")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"li"},"Docker")," \u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f"),(0,r.yg)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff0c\u652f\u6301\u591a\u91c7\u96c6\u5668\u96c6\u7fa4\u6a2a\u5411\u6269\u5c55\uff0c\u652f\u6301\u591a\u9694\u79bb\u7f51\u7edc\u76d1\u63a7\uff0c\u4e91\u8fb9\u534f\u540c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u81ea\u7531\u7684\u544a\u8b66\u9608\u503c\u89c4\u5219\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Webhook")," \u7b49\u65b9\u5f0f\u6d88\u606f\u53ca\u65f6\u9001\u8fbe\u3002")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u9ad8\u6027\u80fd\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"hertzBeat",src:a(72428).A,width:"2814",height:"1772"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,r.yg)("h3",{id:"\u5c1d\u8bd5\u90e8\u7f72"},"\u5c1d\u8bd5\u90e8\u7f72"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"docker")," \u73af\u5883\u4ec5\u9700\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5f00\u59cb")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat apache/hertzbeat")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"\u6216\u8005\u4f7f\u7528 quay.io (\u82e5 dockerhub \u7f51\u7edc\u94fe\u63a5\u8d85\u65f6)")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,r.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u90e8\u7f72\u91c7\u96c6\u5668\u96c6\u7fa4"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector apache/hertzbeat-collector\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : \u914d\u7f6e\u6b64\u91c7\u96c6\u5668\u7684\u552f\u4e00\u6027\u6807\u8bc6\u7b26\u540d\u79f0\uff0c\u591a\u4e2a\u91c7\u96c6\u5668\u540d\u79f0\u4e0d\u80fd\u76f8\u540c\uff0c\u5efa\u8bae\u81ea\u5b9a\u4e49\u82f1\u6587\u540d\u79f0\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : \u914d\u7f6e\u8fde\u63a5\u4e3bHertzBeat\u670d\u52a1\u7684\u5bf9\u5916IP\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : \u914d\u7f6e\u8fde\u63a5\u4e3bHertzBeat\u670d\u52a1\u7684\u5bf9\u5916\u7aef\u53e3\uff0c\u9ed8\u8ba41158\u3002")),(0,r.yg)("p",null,"\u66f4\u591a\u914d\u7f6e\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"-\u5df2\u652f\u6301"},"\u26c4 \u5df2\u652f\u6301"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06\u76d1\u63a7\u91c7\u96c6\u7c7b\u578b(mysql,jvm,k8s)\u90fd\u5b9a\u4e49\u4e3ayml\u76d1\u63a7\u6a21\u7248\uff0c\u7528\u6237\u53ef\u4ee5\u5bfc\u5165\u8fd9\u4e9b\u6a21\u7248\u6765\u652f\u6301\u5bf9\u5e94\u7c7b\u578b\u7684\u76d1\u63a7!",(0,r.yg)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u5927\u5bb6\u4e00\u8d77\u8d21\u732e\u4f60\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u7684\u901a\u7528\u76d1\u63a7\u7c7b\u578b\u76d1\u63a7\u6a21\u7248\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,r.yg)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,r.yg)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,r.yg)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,r.yg)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,r.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,r.yg)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,r.yg)("li",{parentName:"ul"},"Notifications support ",(0,r.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Mail")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Pinning")," ",(0,r.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,r.yg)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,r.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Webhook"),"."),(0,r.yg)("li",{parentName:"ul"},"\u548c\u66f4\u591a\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u901a\u77e5\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,r.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Server\u9171"),"\u3002")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))))}c.isMDXComponent=!0},72428:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/hertzbeat-arch-d8c2eca122dd35a5e67678da69c8ba0c.png"},56850:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/0-ded5d92a836dc3867ff1619a25466735.png"}}]);