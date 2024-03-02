"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[72838],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),y=a,m=g["".concat(p,".").concat(y)]||g[y]||d[y]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={id:"tdengine-init",title:"\u4f9d\u8d56\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"TDengine\u5b89\u88c5\u521d\u59cb\u5316"},o=void 0,l={unversionedId:"start/tdengine-init",id:"version-v1.0.0/start/tdengine-init",title:"\u4f9d\u8d56\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316",description:"TDengine\u662f\u4e00\u6b3e\u56fd\u4ea7\u7684\u5f00\u6e90\u7269\u8054\u7f51\u65f6\u5e8f\u578b\u6570\u636e\u5e93\uff0c\u6211\u4eec\u4f7f\u7528\u5176\u66ff\u6362\u4e86InfluxDb\uff0c\u6765\u5b58\u50a8\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002",source:"@site/versioned_docs/version-v1.0.0/start/tdengine-init.md",sourceDirName:"start",slug:"/start/tdengine-init",permalink:"/zh-cn/docs/v1.0.0/start/tdengine-init",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/start/tdengine-init.md",tags:[],version:"v1.0.0",frontMatter:{id:"tdengine-init",title:"\u4f9d\u8d56\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"TDengine\u5b89\u88c5\u521d\u59cb\u5316"},sidebar:"docs",previous:{title:"MYSQL\u5b89\u88c5\u521d\u59cb\u5316",permalink:"/zh-cn/docs/v1.0.0/start/mysql-init"},next:{title:"Docker\u65b9\u5f0f\u90e8\u7f72",permalink:"/zh-cn/docs/v1.0.0/start/docker-deploy"}},p={},c=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5TDengine",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5tdengine",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",id:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"TDengine\u662f\u4e00\u6b3e\u56fd\u4ea7\u7684\u5f00\u6e90\u7269\u8054\u7f51\u65f6\u5e8f\u578b\u6570\u636e\u5e93\uff0c\u6211\u4eec\u4f7f\u7528\u5176\u66ff\u6362\u4e86InfluxDb\uff0c\u6765\u5b58\u50a8\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002"),(0,a.yg)("p",null,"\u5b89\u88c5\u90e8\u7f72\u89c6\u9891\u6559\u7a0b: ",(0,a.yg)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1GY41177YL"},"HertzBeat\u5b89\u88c5\u90e8\u7f72-BiliBili"),"  "),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709TDengine\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b\u90a3\u4e00\u6b65\u3002")),(0,a.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5tdengine"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5TDengine"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003\u5b98\u65b9\u7f51\u7ad9",(0,a.yg)("a",{parentName:"p",href:"https://www.taosdata.com/docs/cn/v2.0/getting-started/docker"},"\u5b89\u88c5\u6559\u7a0b"),"  "),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,a.yg)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,a.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5TDengine",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp -v /opt/taosdata:/var/lib/taos --name tdengine -e TZ=Asia/Shanghai tdengine/tdengine:2.4.0.12\n526aa188da767ae94b244226a2b2eec2b5f17dd8eff594533d9ec0cd0f3a1ccd\n")),(0,a.yg)("inlineCode",{parentName:"li"},"-v /opt/taosdata:/var/lib/taos")," \u4e3atdengine\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,a.yg)("inlineCode",{parentName:"li"},"/opt/taosdata"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},'-e TZ="Asia/Shanghai"')," \u4e3atdengine\u8bbe\u7f6e\u65f6\u533a\uff0c\u8fd9\u91cc\u53ef\u9009\u8bbe\u7f6e\u5bf9\u5e94\u7684\u65f6\u533a",(0,a.yg)("br",{parentName:"li"}),"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"li"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f"))),(0,a.yg)("h3",{id:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b"},"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8fdb\u5165\u6570\u636e\u5e93Docker\u5bb9\u5668  ",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker exec -it tdengine /bin/bash\nroot@tdengine-server:~/TDengine-server-2.4.0.4#\n"))),(0,a.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93\n\u8fdb\u5165\u5bb9\u5668\u540e\uff0c\u6267\u884c taos shell \u5ba2\u6237\u7aef\u7a0b\u5e8f\u3002",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"root@tdengine-server:~/TDengine-server-2.4.0.4# taos\nWelcome to the TDengine shell from Linux, Client Version:2.4.0.4\nCopyright (c) 2020 by TAOS Data, Inc. All rights reserved.\ntaos>\n")),"\u6267\u884c\u521b\u5efa\u6570\u636e\u5e93\u547d\u4ee4",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"taos> show databases;\ntaos> CREATE DATABASE hertzbeat KEEP 90 DAYS 10 BLOCKS 6 UPDATE 1;\n")),"\u4e0a\u8ff0\u8bed\u53e5\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a hertzbeat \u7684\u5e93\uff0c\u8fd9\u4e2a\u5e93\u7684\u6570\u636e\u5c06\u4fdd\u755990\u5929\uff08\u8d85\u8fc790\u5929\u5c06\u88ab\u81ea\u52a8\u5220\u9664\uff09\uff0c\u6bcf 10 \u5929\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\uff0c\u5185\u5b58\u5757\u6570\u4e3a 6\uff0c\u5141\u8bb8\u66f4\u65b0\u6570\u636e"),(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770bhertzbeat\u6570\u636e\u5e93\u662f\u5426\u6210\u529f\u521b\u5efa",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"taos> show databases;\ntaos> use hertzbeat;\n")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f\u82e5\u662f\u5b89\u88c5\u5305\u5b89\u88c5\u7684TDengine2.3+\u7248\u672c"),"       "),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9664\u4e86\u542f\u52a8server\u5916\uff0c\u8fd8\u9700\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," \u542f\u52a8 adapter")))}d.isMDXComponent=!0}}]);