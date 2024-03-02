"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[76554],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},u=Object.keys(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||u;return r?a.createElement(h,n(n({ref:t},c),{},{components:r})):a.createElement(h,n({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,n=new Array(u);n[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var s=2;s<u;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var a=r(58168),o=(r(96540),r(15680));const u={id:"huaweicloud",title:"HertzBeat & HuaweiCloud",sidebar_label:"HertzBeat & HuaweiCloud"},n=void 0,i={unversionedId:"others/huaweicloud",id:"version-v1.3.x/others/huaweicloud",title:"HertzBeat & HuaweiCloud",description:"HertzBeat \u4e0e HuaweiCloud \u7684\u5f00\u6e90\u5408\u4f5c\u9700\u6c42Issue",source:"@site/versioned_docs/version-v1.3.x/others/huaweicloud.md",sourceDirName:"others",slug:"/others/huaweicloud",permalink:"/docs/v1.3.x/others/huaweicloud",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/others/huaweicloud.md",tags:[],version:"v1.3.x",frontMatter:{id:"huaweicloud",title:"HertzBeat & HuaweiCloud",sidebar_label:"HertzBeat & HuaweiCloud"}},l={},s=[{value:"HertzBeat \u4e0e HuaweiCloud \u7684\u5f00\u6e90\u5408\u4f5c\u9700\u6c42Issue",id:"hertzbeat-\u4e0e-huaweicloud-\u7684\u5f00\u6e90\u5408\u4f5c\u9700\u6c42issue",level:3},{value:"\u5173\u4e8e HuaweiCloud \u5f00\u6e90\u6d3b\u52a8",id:"\u5173\u4e8e-huaweicloud-\u5f00\u6e90\u6d3b\u52a8",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.yg)("wrapper",(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"hertzbeat-\u4e0e-huaweicloud-\u7684\u5f00\u6e90\u5408\u4f5c\u9700\u6c42issue"},"HertzBeat \u4e0e HuaweiCloud \u7684\u5f00\u6e90\u5408\u4f5c\u9700\u6c42Issue"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u6b22\u8fce\u5927\u5bb6\u5bf9\u611f\u5174\u8da3\u7684Issue\u9886\u53d6\u8d21\u732e\u3002")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"[Task]"," support using Huawei Cloud OBS to store custom define yml file ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/issues/841"},"#841")," "),(0,o.yg)("li",{parentName:"ul"},"[Task]"," support Huawei Cloud CCE metrics monitoring  ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/issues/839"},"#839")),(0,o.yg)("li",{parentName:"ul"},"[Task]"," support EulerOS metrics monitoring ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/issues/838"},"#838")),(0,o.yg)("li",{parentName:"ul"},"[Task]"," support using Huawei Cloud SMN send alarm notification message ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/issues/837"},"#837")),(0,o.yg)("li",{parentName:"ul"},"[Task]"," support using GaussDB For Influx store history metrics data ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/issues/836"},"#836"))),(0,o.yg)("h3",{id:"\u5173\u4e8e-huaweicloud-\u5f00\u6e90\u6d3b\u52a8"},"\u5173\u4e8e HuaweiCloud \u5f00\u6e90\u6d3b\u52a8"),(0,o.yg)("p",null,"HuaweiCloud \u534e\u4e3a\u4e91\u5c06\u9762\u5411\u5f00\u6e90\u8f6f\u4ef6\u5de5\u5177\u94fe\u4e0e\u73af\u5883\u3001\u5f00\u6e90\u5e94\u7528\u6784\u5efa\u548c\u5f00\u6e90\u751f\u6001\u7ec4\u4ef6\u6784\u5efa\u8fd9\u4e09\u5927\u91cd\u70b9\u573a\u666f\uff0c\u63d0\u4f9b\u6280\u672f\u652f\u6301\u3001\u5956\u91d1\u652f\u6301\u3001\u6d3b\u52a8\u652f\u6301\uff0c\u9080\u8bf7\u66f4\u591a\u7684\u5f00\u53d1\u8005\uff0c\u643a\u624b\u6784\u5efa\u5f00\u6e90for HuaweiCloud\u3002"),(0,o.yg)("p",null,"\u5f00\u53d1\u8005\u5c06\u5f00\u6e90\u8f6f\u4ef6\u5de5\u5177\u3001\u5f00\u6e90\u5e94\u7528\u548c\u5f00\u6e90\u7ec4\u4ef6\u4e0e\u534e\u4e3a\u4e91\u5bf9\u8c61\u5b58\u50a8OBS\u3001\u6570\u4ed3DWS\u3001\u4e91\u5bb9\u5668CCE\u7b49\u4e91\u670d\u52a1\u5bf9\u63a5\uff0c\u540c\u65f6\u57fa\u4e8eTerraform\u6a21\u677f\uff0c\u4e0a\u67b6\u5230\u534e\u4e3a\u4e91\u4e91\u5546\u5e97\uff0c\u652f\u6301\u5176\u4ed6\u5f00\u53d1\u8005\u4e00\u952e\u90e8\u7f72\u4f7f\u7528\u5f00\u6e90\u7ec4\u4ef6 \uff0c\u79f0\u4e3a\u201c\u5f00\u6e90xxx for HuaweiCloud\u201d\u3002    "),(0,o.yg)("p",null,"\u611f\u5174\u8da3\u7684\u5f00\u53d1\u8005\u53ef\u4ee5\u67e5\u770b\uff1a\u534e\u4e3a\u4e91\u5f00\u6e90\u9879\u76ee\u4ed3\u5e93 ",(0,o.yg)("a",{parentName:"p",href:"https://gitee.com/HuaweiCloudDeveloper/huaweicloud-cloud-native-plugins-kits"},"https://gitee.com/HuaweiCloudDeveloper/huaweicloud-cloud-native-plugins-kits")," \u4e86\u89e3\u66f4\u591a\u3002"))}p.isMDXComponent=!0}}]);