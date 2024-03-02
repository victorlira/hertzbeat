"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[38923],{15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(a),s=r,b=m["".concat(c,".").concat(s)]||m[s]||g[s]||p;return a?n.createElement(b,l(l({ref:t},i),{},{components:a})):n.createElement(b,l({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<p;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const p={title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},l=void 0,o={permalink:"/zh-cn/blog/2022/09/10/ssl-practice",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2022-09-10-ssl-practice.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2022-09-10-ssl-practice.md",title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",description:"\u5148\u795d\u770b\u5230\u7684\u540c\u5b66\u4e2d\u79cb\u5feb\u4e50\uff0c\u8eab\u4f53\u5065\u5eb7\uff0c\u5728\u8eab\u4f53\u5065\u5eb7\u7684\u57fa\u7840\u4e0a\u5c3d\u91cf\u66b4\u5bcc\u3002",date:"2022-09-10T00:00:00.000Z",formattedDate:"2022\u5e749\u670810\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:4.25,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},prevItem:{title:"HertzBeat v1.2.0 \u53d1\u5e03\uff01\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177",permalink:"/zh-cn/blog/2022/10/08/hertzbeat-v1.2.0"},nextItem:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",permalink:"/zh-cn/blog/2022/09/04/hertzbeat-v1.1.3"}},c={authorsImageUrls:[void 0]},u=[{value:"HertzBeat\u662f\u4ec0\u4e48",id:"hertzbeat\u662f\u4ec0\u4e48",level:4},{value:"\u5b89\u88c5 HertzBeat",id:"\u5b89\u88c5-hertzbeat",level:4},{value:"\u76d1\u63a7SSL\u8bc1\u4e66",id:"\u76d1\u63a7ssl\u8bc1\u4e66",level:4},{value:"\u5b8c\uff01",id:"\u5b8c",level:4}],i={toc:u};function g(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5148\u795d\u770b\u5230\u7684\u540c\u5b66\u4e2d\u79cb\u5feb\u4e50\uff0c\u8eab\u4f53\u5065\u5eb7\uff0c\u5728\u8eab\u4f53\u5065\u5eb7\u7684\u57fa\u7840\u4e0a\u5c3d\u91cf\u66b4\u5bcc\u3002"),(0,r.yg)("p",null,"\u8fdb\u5165\u6b63\u9898\uff0c\u73b0\u5728\u5927\u90e8\u5206\u7f51\u7ad9\u90fd\u9ed8\u8ba4\u652f\u6301 HTTPS\uff0c\u6211\u4eec\u7533\u8bf7\u7684\u8bc1\u4e66\u4e00\u822c\u662f3\u4e2a\u6708\u6216\u80051\u5e74\uff0c\u5f88\u5bb9\u6613\u968f\u7740\u65f6\u95f4\u7684\u6d41\u901dSSL\u8bc1\u4e66\u8fc7\u671f\u4e86\u6211\u4eec\u5374\u6ca1\u6709\u7b2c\u4e00\u65f6\u95f4\u53d1\u73b0\uff0c\u6216\u8005\u5728\u8fc7\u671f\u4e4b\u524d\u6ca1\u6709\u53ca\u65f6\u66f4\u65b0\u8bc1\u4e66\u3002"),(0,r.yg)("p",null,"\u4eca\u5929\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u5982\u679c\u4f7f\u7528 hertzbeat \u76d1\u63a7\u7cfb\u7edf\u6765\u68c0\u6d4b\u6211\u4eec\u7f51\u7ad9\u7684SSL\u8bc1\u4e66\u6709\u6548\u671f\uff0c\u5f53\u8bc1\u4e66\u8fc7\u671f\u65f6\u6216\u8bc1\u4e66\u5feb\u8fc7\u671f\u524d\u51e0\u5929\uff0c\u7ed9\u6211\u4eec\u53d1\u544a\u8b66\u6d88\u606f\u3002"),(0,r.yg)("h4",{id:"hertzbeat\u662f\u4ec0\u4e48"},"HertzBeat\u662f\u4ec0\u4e48"),(0,r.yg)("p",null,"HertzBeat \u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u65e0\u9700Agent\u7684\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177\u3002\u7f51\u7ad9\u76d1\u6d4b\uff0cPING\u8fde\u901a\u6027\uff0c\u7aef\u53e3\u53ef\u7528\u6027\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\uff0cAPI\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u4ef6\u5fae\u4fe1\u9489\u9489\u98de\u4e66)\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5b98\u7f51: ",(0,r.yg)("a",{parentName:"strong",href:"https://hertzbeat.com"},"https://hertzbeat.com")," | ",(0,r.yg)("a",{parentName:"strong",href:"https://tancloud.cn"},"https://tancloud.cn"))),(0,r.yg)("p",null,"github: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),(0,r.yg)("br",{parentName:"p"}),"\n","gitee: ",(0,r.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")),(0,r.yg)("h4",{id:"\u5b89\u88c5-hertzbeat"},"\u5b89\u88c5 HertzBeat"),(0,r.yg)("p",null,"1.\u5982\u679c\u4e0d\u60f3\u5b89\u88c5\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4e91\u670d\u52a1 ",(0,r.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"TanCloud\u63a2\u4e91 console.tancloud.cn")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"docker")," \u73af\u5883\u4ec5\u9700\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5b89\u88c5")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u5b89\u88c5\u6210\u529f\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"li"},"localhost:1157")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,r.yg)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,r.yg)("h4",{id:"\u76d1\u63a7ssl\u8bc1\u4e66"},"\u76d1\u63a7SSL\u8bc1\u4e66"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u70b9\u51fb\u65b0\u589eSSL\u8bc1\u4e66\u76d1\u63a7")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u9875\u9762 -> \u76d1\u63a7\u83dc\u5355 -> SSL\u8bc1\u4e66 -> \u65b0\u589eSSL\u8bc1\u4e66")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd53f343a5b54feab62e71458d076441~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u914d\u7f6e\u76d1\u63a7\u7f51\u7ad9")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u8fd9\u91cc\u4e3e\u4f8b\u76d1\u63a7\u767e\u5ea6\u7f51\u7ad9, \u914d\u7f6e\u76d1\u63a7host\u57df\u540d\uff0c\u540d\u79f0\uff0c\u91c7\u96c6\u95f4\u9694\u7b49\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u70b9\u51fb\u786e\u5b9a \u6ce8\u610f\u26a0\ufe0f\u65b0\u589e\u524d\u9ed8\u8ba4\u4f1a\u5148\u53bb\u6d4b\u8bd5\u7f51\u7ad9\u8fde\u63a5\u6027\uff0c\u8fde\u63a5\u6210\u529f\u624d\u4f1a\u65b0\u589e\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u628a",(0,r.yg)("strong",{parentName:"p"},"\u662f\u5426\u6d4b\u8bd5"),"\u6309\u94ae\u7f6e\u7070\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad1154670648413bb82c8bdeb5b13609~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u67e5\u770b\u68c0\u6d4b\u6307\u6807\u6570\u636e")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5728\u76d1\u63a7\u5217\u8868\u53ef\u4ee5\u67e5\u770b\u4efb\u52a1\u72b6\u6001\uff0c\u8fdb\u76d1\u63a7\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b\u6307\u6807\u6570\u636e\u56fe\u8868\u7b49\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f874b45e909c4bb0acdd28b3fb034a61~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef5d7443f8c04818ae5aa28d421203be~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e\u9608\u503c(\u8bc1\u4e66\u8fc7\u671f\u65f6\u89e6\u53d1)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u9875\u9762 -> \u544a\u8b66 -> \u544a\u8b66\u9608\u503c -> \u65b0\u589e\u9608\u503c")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d6205172d43463aa34e534477f132f1~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u914d\u7f6e\u9608\u503c\uff0c\u9009\u62e9SSL\u8bc1\u4e66\u6307\u6807\u5bf9\u8c61\uff0c\u914d\u7f6e\u544a\u8b66\u8868\u8fbe\u5f0f-\u5f53\u6307\u6807",(0,r.yg)("inlineCode",{parentName:"p"},"expired"),"\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\u89e6\u53d1\uff0c\u5373",(0,r.yg)("inlineCode",{parentName:"p"},'equals(expired,"true")')," , \u8bbe\u7f6e\u544a\u8b66\u7ea7\u522b\u901a\u77e5\u6a21\u7248\u4fe1\u606f\u7b49\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83d17b381d994f26a6240e01915b2001~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5173\u8054\u9608\u503c\u4e0e\u76d1\u63a7, \u5728\u9608\u503c\u5217\u8868\u8bbe\u7f6e\u6b64\u9608\u503c\u5e94\u7528\u4e8e\u54ea\u4e9b\u76d1\u63a7\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b9063d7bcf9454387be0491fc382bd1~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e\u9608\u503c(\u8bc1\u4e66\u8fc7\u671f\u524d\u4e00\u5468\u89e6\u53d1)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u540c\u7406\u5982\u4e0a\uff0c\u65b0\u589e\u914d\u7f6e\u9608\u503c\uff0c\u914d\u7f6e\u544a\u8b66\u8868\u8fbe\u5f0f-\u5f53\u6307\u6807\u6709\u6548\u671f\u65f6\u95f4\u6233 ",(0,r.yg)("inlineCode",{parentName:"p"},"end_timestamp"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"now()"),"\u51fd\u6570\u4e3a\u5f53\u524d\u65f6\u95f4\u6233\uff0c\u82e5\u914d\u7f6e\u63d0\u524d\u4e00\u5468\u89e6\u53d1\u544a\u8b66\u5373\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"end_timestamp <= (now()  + 604800000)")," , \u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"604800000")," \u4e3a7\u5929\u603b\u65f6\u95f4\u5dee\u6beb\u79d2\u503c\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d6f837f57c247e09f668f60eff4a0ff~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6700\u7ec8\u53ef\u4ee5\u5728\u544a\u8b66\u4e2d\u5fc3\u770b\u5230\u5df2\u89e6\u53d1\u7684\u544a\u8b66\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a61b23127524976b2c209ce0ca6a339~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"\u544a\u8b66\u901a\u77e5(\u901a\u8fc7\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49\u53ca\u65f6\u901a\u77e5)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u7cfb\u7edf -> \u544a\u8b66\u901a\u77e5 -> \u65b0\u589e\u63a5\u6536\u4eba")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f36956060ef410a82bbecafcbb2957f~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("p",null,"\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49token\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003\u5e2e\u52a9\u6587\u6863"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("a",{parentName:"p",href:"https://tancloud.cn/docs/help/alert_dingtalk"},"https://tancloud.cn/docs/help/alert_dingtalk")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u544a\u8b66\u901a\u77e5 -> \u65b0\u589e\u544a\u8b66\u901a\u77e5\u7b56\u7565 -> \u5c06\u521a\u624d\u914d\u7f6e\u7684\u63a5\u6536\u4eba\u542f\u7528\u901a\u77e5")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d976343e81f843138344a039f3aff8a3~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"OK \u5f53\u9608\u503c\u89e6\u53d1\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u6536\u5230\u5bf9\u5e94\u544a\u8b66\u6d88\u606f\u5566\uff0c\u5982\u679c\u6ca1\u6709\u914d\u901a\u77e5\uff0c\u4e5f\u53ef\u4ee5\u5728\u544a\u8b66\u4e2d\u5fc3\u67e5\u770b\u544a\u8b66\u4fe1\u606f\u3002")),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"\u5b8c"},"\u5b8c\uff01"),(0,r.yg)("p",null,"\u76d1\u63a7SSL\u8bc1\u4e66\u7684\u5b9e\u8df5\u5c31\u5230\u8fd9\u91cc\uff0c\u5f53\u7136\u5bf9hertzbeat\u6765\u8bf4\u8fd9\u4e2a\u529f\u80fd\u53ea\u662f\u51b0\u5c71\u4e00\u89d2\uff0c\u5982\u679c\u60a8\u89c9\u5f97hertzbeat\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u4e0d\u9519\u7684\u8bdd\u6b22\u8fce\u7ed9\u6211\u4eec\u5728GitHub Gitee star\u54e6\uff0c\u7070\u5e38\u611f\u8c22\u3002\u611f\u8c22\u8001\u94c1\u4eec\u7684\u652f\u6301\u3002\u7b14\u82af\uff01"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}g.isMDXComponent=!0}}]);