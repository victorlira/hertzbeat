"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[19432],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),g=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},y=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),d=g(n),u=a,c=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(c,p(p({ref:t},y),{},{components:n})):r.createElement(c,p({ref:t},y))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var g=2;g<l;g++)p[g]=n[g];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const l={id:"api",title:"\u76d1\u63a7\uff1aHTTP API",sidebar_label:"HTTP API"},p=void 0,i={unversionedId:"help/api",id:"version-v1.0.0/help/api",title:"\u76d1\u63a7\uff1aHTTP API",description:"\u8c03\u7528HTTP API\u63a5\u53e3\uff0c\u67e5\u770b\u63a5\u53e3\u662f\u5426\u53ef\u7528\uff0c\u5bf9\u5176\u54cd\u5e94\u65f6\u95f4\u7b49\u6307\u6807\u8fdb\u884c\u76d1\u6d4b",source:"@site/versioned_docs/version-v1.0.0/help/api.md",sourceDirName:"help",slug:"/help/api",permalink:"/docs/v1.0.0/help/api",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/help/api.md",tags:[],version:"v1.0.0",frontMatter:{id:"api",title:"\u76d1\u63a7\uff1aHTTP API",sidebar_label:"HTTP API"},sidebar:"docs",previous:{title:"\u7f51\u7ad9\u76d1\u6d4b",permalink:"/docs/v1.0.0/help/website"},next:{title:"PING\u8fde\u901a\u6027",permalink:"/docs/v1.0.0/help/ping"}},o={},g=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1asummary",id:"\u6307\u6807\u96c6\u5408summary",level:4}],y={toc:g};function m(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u8c03\u7528HTTP API\u63a5\u53e3\uff0c\u67e5\u770b\u63a5\u53e3\u662f\u5426\u53ef\u7528\uff0c\u5bf9\u5176\u54cd\u5e94\u65f6\u95f4\u7b49\u6307\u6807\u8fdb\u884c\u76d1\u6d4b   ")),(0,a.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,a.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7f51\u7ad9\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0chttp\u4e00\u822c\u9ed8\u8ba4\u4e3a80\uff0chttps\u4e00\u822c\u9ed8\u8ba4\u4e3a443\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u76f8\u5bf9\u8def\u5f84"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7f51\u7ad9\u5730\u5740\u9664IP\u7aef\u53e3\u5916\u7684\u540e\u7f00\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,a.yg)("inlineCode",{parentName:"td"},"www.tancloud.cn/console")," \u7f51\u7ad9\u7684\u76f8\u5bf9\u8def\u5f84\u4e3a ",(0,a.yg)("inlineCode",{parentName:"td"},"/console"),"\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u5f0f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u63a5\u53e3\u8c03\u7528\u7684\u8bf7\u6c42\u65b9\u5f0f\uff1aGET,POST,PUT,DELETE\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u542f\u7528HTTPS"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u901a\u8fc7HTTPS\u8bbf\u95ee\u7f51\u7ad9\uff0c\u6ce8\u610f\u26a0\ufe0f\u5f00\u542fHTTPS\u4e00\u822c\u9ed8\u8ba4\u5bf9\u5e94\u7aef\u53e3\u9700\u8981\u6539\u4e3a443")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,a.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3Basic\u8ba4\u8bc1\u6216Digest\u8ba4\u8bc1\u65f6\u4f7f\u7528\u7684\u7528\u6237\u540d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,a.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3Basic\u8ba4\u8bc1\u6216Digest\u8ba4\u8bc1\u65f6\u4f7f\u7528\u7684\u5bc6\u7801")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Content-Type"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u643a\u5e26BODY\u8bf7\u6c42\u4f53\u6570\u636e\u8bf7\u6c42\u65f6\u7684\u8d44\u6e90\u7c7b\u578b")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42BODY"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u643a\u5e26BODY\u8bf7\u6c42\u4f53\u6570\u636e\uff0cPUT POST\u8bf7\u6c42\u65b9\u5f0f\u65f6\u6709\u6548")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,a.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,a.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,a.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,a.yg)("h4",{id:"\u6307\u6807\u96c6\u5408summary"},"\u6307\u6807\u96c6\u5408\uff1asummary"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"responseTime"),(0,a.yg)("td",{parentName:"tr",align:null},"ms\u6beb\u79d2"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7f51\u7ad9\u54cd\u5e94\u65f6\u95f4")))))}m.isMDXComponent=!0}}]);