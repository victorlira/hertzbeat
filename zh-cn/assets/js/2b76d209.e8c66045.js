"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[17471],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,c=d["".concat(i,".").concat(y)]||d[y]||m[y]||p;return t?r.createElement(c,l(l({ref:n},u),{},{components:t})):r.createElement(c,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const p={id:"extend-ssh",title:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},l=void 0,o={unversionedId:"advanced/extend-ssh",id:"version-v1.0.0/advanced/extend-ssh",title:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",description:"\u4ece\u81ea\u5b9a\u4e49\u76d1\u63a7\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002",source:"@site/versioned_docs/version-v1.0.0/advanced/extend-ssh.md",sourceDirName:"advanced",slug:"/advanced/extend-ssh",permalink:"/zh-cn/docs/v1.0.0/advanced/extend-ssh",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/advanced/extend-ssh.md",tags:[],version:"v1.0.0",frontMatter:{id:"extend-ssh",title:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},sidebar:"docs",previous:{title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/v1.0.0/advanced/extend-jdbc"},next:{title:"\u5e2e\u52a9\u5165\u95e8",permalink:"/zh-cn/docs/v1.0.0/help/guide"}},i={},s=[{value:"SSH\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",id:"ssh\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",level:3},{value:"<strong>oneRow</strong>",id:"onerow",level:4},{value:"<strong>multiRow</strong>",id:"multirow",level:4},{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6",id:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6",level:3},{value:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6",id:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6",level:3}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,a.yg)("wrapper",(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u4ece",(0,a.yg)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002\nSSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7\u53ef\u4ee5\u8ba9\u6211\u4eec\u5f88\u65b9\u4fbf\u7684\u901a\u8fc7\u5199sh\u547d\u4ee4\u811a\u672c\u5c31\u80fd\u76d1\u63a7\u91c7\u96c6\u5230\u6211\u4eec\u60f3\u76d1\u63a7\u7684Linux\u6307\u6807     ")),(0,a.yg)("h3",{id:"ssh\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"},"SSH\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"),(0,a.yg)("p",null,"\u3010",(0,a.yg)("strong",{parentName:"p"},"\u7cfb\u7edf\u76f4\u8fdeLinux"),"\u3011->\u3010",(0,a.yg)("strong",{parentName:"p"},"\u8fd0\u884cSHELL\u547d\u4ee4\u811a\u672c\u8bed\u53e5"),"\u3011->\u3010",(0,a.yg)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u89e3\u6790:oneRow, multiRow"),"\u3011->\u3010",(0,a.yg)("strong",{parentName:"p"},"\u6307\u6807\u6570\u636e\u63d0\u53d6"),"\u3011   "),(0,a.yg)("p",null,"\u7531\u6d41\u7a0b\u53ef\u89c1\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2aSSH\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\uff0c\u9700\u8981\u914d\u7f6eSSH\u8bf7\u6c42\u53c2\u6570\uff0c\u914d\u7f6e\u83b7\u53d6\u54ea\u4e9b\u6307\u6807\uff0c\u914d\u7f6e\u67e5\u8be2\u811a\u672c\u8bed\u53e5\u3002"),(0,a.yg)("h3",{id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"},"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"),(0,a.yg)("p",null,"SHELL\u811a\u672c\u67e5\u8be2\u56de\u6765\u7684\u6570\u636e\u5b57\u6bb5\u548c\u6211\u4eec\u9700\u8981\u7684\u6307\u6807\u6620\u5c04\uff0c\u5c31\u80fd\u83b7\u53d6\u5bf9\u5e94\u7684\u6307\u6807\u6570\u636e\uff0c\u76ee\u524d\u6620\u5c04\u89e3\u6790\u65b9\u5f0f\u6709\u4e24\u79cd\uff1aoneRow, multiRow\uff0c\u80fd\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u6307\u6807\u9700\u6c42\u3002"),(0,a.yg)("h4",{id:"onerow"},(0,a.yg)("strong",{parentName:"h4"},"oneRow")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u67e5\u8be2\u51fa\u4e00\u5217\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5b57\u6bb5\u503c(\u4e00\u884c\u4e00\u4e2a\u503c)\u4e0e\u5b57\u6bb5\u6620\u5c04    ")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n","\u9700\u8981\u67e5\u8be2Linux\u7684\u6307\u6807 hostname-\u4e3b\u673a\u540d\u79f0\uff0cuptime-\u542f\u52a8\u65f6\u95f4",(0,a.yg)("br",{parentName:"p"}),"\n","\u4e3b\u673a\u540d\u79f0\u539f\u59cb\u67e5\u8be2\u547d\u4ee4\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"hostname"),(0,a.yg)("br",{parentName:"p"}),"\n","\u542f\u52a8\u65f6\u95f4\u539f\u59cb\u67e5\u8be2\u547d\u4ee4\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"uptime | awk -F \",\" '{print $1}'"),(0,a.yg)("br",{parentName:"p"}),"\n","\u5219\u5728hertzbeat\u5bf9\u5e94\u7684\u8fd9\u4e24\u4e2a\u6307\u6807\u7684\u67e5\u8be2\u811a\u672c\u4e3a(\u7528",(0,a.yg)("inlineCode",{parentName:"p"},";"),"\u5c06\u5176\u8fde\u63a5\u5230\u4e00\u8d77)\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"hostname; uptime | awk -F \",\" '{print $1}'"),(0,a.yg)("br",{parentName:"p"}),"\n","\u7ec8\u7aef\u54cd\u5e94\u7684\u6570\u636e\u4e3a\uff1a    "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"tombook\n14:00:15 up 72 days  \n")),(0,a.yg)("p",null,"\u5219\u6700\u540e\u91c7\u96c6\u5230\u7684\u6307\u6807\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n","hostname\u503c\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"tombook"),(0,a.yg)("br",{parentName:"p"}),"\n","uptime\u503c\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"14:00:15 up 72 days"),"      "),(0,a.yg)("p",null,"\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\u4e00\u884c\u91c7\u96c6\u6570\u636e\u3002     "),(0,a.yg)("h4",{id:"multirow"},(0,a.yg)("strong",{parentName:"h4"},"multiRow")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u67e5\u8be2\u591a\u884c\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5217\u540d\u79f0\uff0c\u548c\u67e5\u8be2\u7684\u6307\u6807\u5b57\u6bb5\u6620\u5c04  ")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n","\u67e5\u8be2\u7684Linux\u5185\u5b58\u76f8\u5173\u6307\u6807\u5b57\u6bb5\uff1atotal-\u5185\u5b58\u603b\u91cf used-\u5df2\u4f7f\u7528\u5185\u5b58 free-\u7a7a\u95f2\u5185\u5b58 buff-cache-\u7f13\u5b58\u5927\u5c0f available-\u53ef\u7528\u5185\u5b58",(0,a.yg)("br",{parentName:"p"}),"\n","\u5185\u5b58\u6307\u6807\u539f\u59cb\u67e5\u8be2\u547d\u4ee4\u4e3a\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"free -m"),", \u63a7\u5236\u53f0\u54cd\u5e94\uff1a  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"              total        used        free      shared  buff/cache   available\nMem:           7962        4065         333           1        3562        3593\nSwap:          8191          33        8158\n")),(0,a.yg)("p",null,"\u5728hertzbeat\u4e2dmultiRow\u683c\u5f0f\u89e3\u6790\u9700\u8981\u54cd\u5e94\u6570\u636e\u5217\u540d\u79f0\u548c\u6307\u6807\u503c\u4e00\u4e00\u6620\u5c04\uff0c\u5219\u5bf9\u5e94\u7684\u67e5\u8be2SHELL\u811a\u672c\u4e3a\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"free -m | grep Mem | awk 'BEGIN{print \"total used free buff_cache available\"} {print $2,$3,$4,$6,$7}'"),(0,a.yg)("br",{parentName:"p"}),"\n","\u63a7\u5236\u53f0\u54cd\u5e94\u4e3a\uff1a  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"total  used  free  buff_cache  available\n7962   4066  331   3564        3592\n")),(0,a.yg)("p",null,"\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\u91c7\u96c6\u6570\u636e\u3002"),(0,a.yg)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,a.yg)("p",null,"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u9700\u65b0\u589e\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aexample_linux.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/app/ \u4e0b"),(0,a.yg)("li",{parentName:"ol"},"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aexample_linux.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/param/ \u4e0b"),(0,a.yg)("li",{parentName:"ol"},"\u91cd\u542fhertzbeat\u7cfb\u7edf\uff0c\u6211\u4eec\u5c31\u9002\u914d\u597d\u4e86\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u3002")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u8fd9\u4fe9\u6587\u4ef6\u7684\u914d\u7f6e\u7528\u6cd5\uff0c\u8bf7\u6ce8\u610f\u770b\u4f7f\u7528\u6ce8\u91ca\u3002   "),(0,a.yg)("h3",{id:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,a.yg)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u6620\u5c04, \u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e\u4fe1\u606f"),"\u7b49\u3002  ")),(0,a.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample_linux\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528SSH\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u6587\u4ef6\u540d\u79f0: example_linux.yml \u4f4d\u4e8e /define/app/example_linux.yml   "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# \u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1 program-\u5e94\u7528\u7a0b\u5e8f db-\u6570\u636e\u5e93 custom-\u81ea\u5b9a\u4e49 os-\u64cd\u4f5c\u7cfb\u7edf bigdata-\u5927\u6570\u636e mid-\u4e2d\u95f4\u4ef6 webserver-web\u670d\u52a1\u5668 cache-\u7f13\u5b58 cn-\u4e91\u539f\u751f network-\u7f51\u7edc\u76d1\u63a7\u7b49\u7b49\ncategory: os\n# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: example_linux\nname:\n  zh-CN: \u6a21\u62dfLINUX\u5e94\u7528\u7c7b\u578b\n  en-US: LINUX EXAMPLE APP\n# \u53c2\u6570\u6620\u5c04map. \u8fd9\u4e9b\u4e3a\u8f93\u5165\u53c2\u6570\u53d8\u91cf\uff0c\u5373\u53ef\u4ee5\u7528^_^host^_^\u7684\u5f62\u5f0f\u5199\u5230\u540e\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u7cfb\u7edf\u81ea\u52a8\u53d8\u91cf\u503c\u66ff\u6362\n# type\u662f\u53c2\u6570\u7c7b\u578b: 0-number\u6570\u5b57, 1-string\u660e\u6587\u5b57\u7b26\u4e32, 2-secret\u52a0\u5bc6\u5b57\u7b26\u4e32\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n# \u91c7\u96c6\u6307\u6807\u914d\u7f6e\u5217\u8868\nmetrics:\n  # \u7b2c\u4e00\u4e2a\u76d1\u63a7\u6307\u6807 basic\n  # \u6ce8\u610f\uff1a\u5185\u7f6e\u76d1\u63a7\u6307\u6807\u6709 (responseTime - \u54cd\u5e94\u65f6\u95f4)\n  - name: basic\n    # \u6307\u6807\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u4e3a\u53ef\u7528\u6027\u6307\u6807,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # \u5177\u4f53\u76d1\u63a7\u6307\u6807\u5217\u8868\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: hostname\n        type: 1\n        instance: true\n      - field: version\n        type: 1\n      - field: uptime\n        type: 1\n    # \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    ssh:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: (uname -r ; hostname ; uptime | awk -F \",\" '{print $1}' | sed  \"s/ //g\") | sed \":a;N;s/\\n/^/g;ta\" | awk -F '^' 'BEGIN{print \"version hostname uptime\"} {print $1, $2, $3}'\n      # \u54cd\u5e94\u6570\u636e\u89e3\u6790\u65b9\u5f0f\uff1aoneRow, multiRow\n      parseType: multiRow\n\n  - name: cpu\n    priority: 1\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: info\n        type: 1\n      - field: cores\n        type: 0\n        unit: \u6838\u6570\n      - field: interrupt\n        type: 0\n        unit: \u4e2a\u6570\n      - field: load\n        type: 1\n      - field: context_switch\n        type: 0\n        unit: \u4e2a\u6570\n    # \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    ssh:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: \"LANG=C lscpu | awk -F: '/Model name/ {print $2}';awk '/processor/{core++} END{print core}' /proc/cpuinfo;uptime | sed 's/,/ /g' | awk '{for(i=NF-2;i<=NF;i++)print $i }' | xargs;vmstat 1 1 | awk 'NR==3{print $11}';vmstat 1 1 | awk 'NR==3{print $12}'\"\n      parseType: oneRow\n\n  - name: memory\n    priority: 2\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: total\n        type: 0\n        unit: Mb\n      - field: used\n        type: 0\n        unit: Mb\n      - field: free\n        type: 0\n        unit: Mb\n      - field: buff_cache\n        type: 0\n        unit: Mb\n      - field: available\n        type: 0\n        unit: Mb\n    # \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    ssh:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: free -m | grep Mem | awk 'BEGIN{print \"total used free buff_cache available\"} {print $2,$3,$4,$6,$7}'\n      parseType: multiRow\n")),(0,a.yg)("h3",{id:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6"},"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,a.yg)("em",{parentName:"p"},"\u9700\u8981\u7684\u8f93\u5165\u53c2\u6570\u5b57\u6bb5\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u7ed3\u6784\u6e32\u67d3\u8f93\u5165\u53c2\u6570\u6846)"),"\u3002")),(0,a.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample_linux\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528SSH\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u6587\u4ef6\u540d\u79f0: example_linux.yml \u4f4d\u4e8e /define/param/example_linux.yml   "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"app: example_linux\nparam:\n  - field: host\n    name: \u4e3b\u673aHost\n    type: host\n    required: true\n  - field: port\n    name: \u7aef\u53e3\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 22\n    placeholder: '\u8bf7\u8f93\u5165\u7aef\u53e3'\n  - field: username\n    name: \u7528\u6237\u540d\n    type: text\n    limit: 20\n    required: true\n  - field: password\n    name: \u5bc6\u7801\n    type: password\n    required: true\n")))}m.isMDXComponent=!0}}]);