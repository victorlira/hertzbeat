"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[75944],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,y=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(y,p(p({ref:n},m),{},{components:t})):a.createElement(y,p({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},86402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const o={id:"extend-point",title:"\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"\u81ea\u5b9a\u4e49\u76d1\u63a7"},p=void 0,l={unversionedId:"advanced/extend-point",id:"version-v1.0.0/advanced/extend-point",title:"\u81ea\u5b9a\u4e49\u76d1\u63a7",description:"HertzBeat\u62e5\u6709\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u60a8\u53ea\u9700\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6\u5c31\u80fd\u9002\u914d\u4e00\u6b3e\u81ea\u5b9a\u4e49\u7684\u76d1\u63a7\u7c7b\u578b\u3002",source:"@site/versioned_docs/version-v1.0.0/advanced/extend-point.md",sourceDirName:"advanced",slug:"/advanced/extend-point",permalink:"/zh-cn/docs/v1.0.0/advanced/extend-point",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/advanced/extend-point.md",tags:[],version:"v1.0.0",frontMatter:{id:"extend-point",title:"\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"\u81ea\u5b9a\u4e49\u76d1\u63a7"},sidebar:"docs",previous:{title:"\u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72",permalink:"/zh-cn/docs/v1.0.0/start/package-deploy"},next:{title:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/v1.0.0/advanced/extend-http"}},i={},s=[{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6",id:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6",level:3},{value:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6",id:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6",level:3}],m={toc:s};function u(e){let{components:n,...t}=e;return(0,r.yg)("wrapper",(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"HertzBeat\u62e5\u6709\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u60a8\u53ea\u9700\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6\u5c31\u80fd\u9002\u914d\u4e00\u6b3e\u81ea\u5b9a\u4e49\u7684\u76d1\u63a7\u7c7b\u578b\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u76ee\u524d\u81ea\u5b9a\u4e49\u76d1\u63a7\u652f\u6301",(0,r.yg)("a",{parentName:"p",href:"extend-http"},"HTTP\u534f\u8bae"),"\uff0c",(0,r.yg)("a",{parentName:"p",href:"extend-jdbc"},"JDBC\u534f\u8bae"),"(mysql,mariadb,postgresql..)\uff0c",(0,r.yg)("a",{parentName:"p",href:"extend-ssh"},"SSH\u534f\u8bae"),"\uff0c\u540e\u7eed\u4f1a\u652f\u6301\u66f4\u591a\u901a\u7528\u534f\u8bae(ssh telnet wmi snmp)\u3002        ")),(0,r.yg)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,r.yg)("p",null,"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u9700\u65b0\u589e\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aexample.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/app/ \u4e0b"),(0,r.yg)("li",{parentName:"ol"},"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aexample.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/param/ \u4e0b"),(0,r.yg)("li",{parentName:"ol"},"\u91cd\u542fhertzbeat\u7cfb\u7edf\uff0c\u6211\u4eec\u5c31\u9002\u914d\u597d\u4e86\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u3002  ")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u8fd9\u4fe9\u6587\u4ef6\u7684\u914d\u7f6e\u7528\u6cd5\u3002   "),(0,r.yg)("h3",{id:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,r.yg)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u6620\u5c04, \u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e\u4fe1\u606f"),"\u7b49\u3002  ")),(0,r.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528HTTP\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u6587\u4ef6\u540d\u79f0: example.yml \u4f4d\u4e8e /define/app/example.yml   "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# \u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1 program-\u5e94\u7528\u7a0b\u5e8f db-\u6570\u636e\u5e93 custom-\u81ea\u5b9a\u4e49 os-\u64cd\u4f5c\u7cfb\u7edf bigdata-\u5927\u6570\u636e mid-\u4e2d\u95f4\u4ef6 webserver-web\u670d\u52a1\u5668 cache-\u7f13\u5b58 cn-\u4e91\u539f\u751f network-\u7f51\u7edc\u76d1\u63a7\u7b49\u7b49\ncategory: custom\n# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: example\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\n# \u53c2\u6570\u6620\u5c04map. \u8fd9\u4e9b\u4e3a\u8f93\u5165\u53c2\u6570\u53d8\u91cf\uff0c\u5373\u53ef\u4ee5\u7528^_^host^_^\u7684\u5f62\u5f0f\u5199\u5230\u540e\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u7cfb\u7edf\u81ea\u52a8\u53d8\u91cf\u503c\u66ff\u6362\n# type\u662f\u53c2\u6570\u7c7b\u578b: 0-number\u6570\u5b57, 1-string\u660e\u6587\u5b57\u7b26\u4e32, 2-secret\u52a0\u5bc6\u5b57\u7b26\u4e32\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n# \u91c7\u96c6\u6307\u6807\u914d\u7f6e\u5217\u8868\nmetrics:\n# \u7b2c\u4e00\u4e2a\u76d1\u63a7\u6307\u6807 cpu\n# \u6ce8\u610f\uff1a\u5185\u7f6e\u76d1\u63a7\u6307\u6807\u6709 (responseTime - \u54cd\u5e94\u65f6\u95f4)\n  - name: cpu\n    # \u6307\u6807\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u4e3a\u53ef\u7528\u6027\u6307\u6807,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # \u5177\u4f53\u76d1\u63a7\u6307\u6807\u5217\u8868\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: hostname\n        type: 1\n        instance: true\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: cores\n        type: 0\n      - field: waitTime\n        type: 0\n        unit: s\n# (\u975e\u5fc5\u987b)\u76d1\u63a7\u6307\u6807\u522b\u540d\uff0c\u4e0e\u4e0a\u9762\u7684\u6307\u6807\u540d\u6620\u5c04\u3002\u7528\u4e8e\u91c7\u96c6\u63a5\u53e3\u6570\u636e\u5b57\u6bb5\u4e0d\u76f4\u63a5\u662f\u6700\u7ec8\u6307\u6807\u540d\u79f0,\u9700\u8981\u6b64\u522b\u540d\u505a\u6620\u5c04\u8f6c\u6362\n    aliasFields:\n      - hostname\n      - core1\n      - core2\n      - usage\n      - allTime\n      - runningTime\n# (\u975e\u5fc5\u987b)\u6307\u6807\u8ba1\u7b97\u8868\u8fbe\u5f0f,\u4e0e\u4e0a\u9762\u7684\u522b\u540d\u4e00\u8d77\u4f5c\u7528,\u8ba1\u7b97\u51fa\u6700\u7ec8\u9700\u8981\u7684\u6307\u6807\u503c\n# eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - hostname=hostname\n      - cores=core1+core2\n      - usage=usage\n      - waitTime=allTime-runningTime\n# \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    http:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      # url\u8bf7\u6c42\u63a5\u53e3\u8def\u5f84\n      url: /metrics/cpu\n      # \u8bf7\u6c42\u65b9\u5f0f GET POST PUT DELETE PATCH\n      method: GET\n      # \u662f\u5426\u542f\u7528ssl/tls,\u5373\u662fhttp\u8fd8\u662fhttps,\u9ed8\u8ba4false\n      ssl: false\n      # \u8bf7\u6c42\u5934\u5185\u5bb9\n      headers:\n        apiVersion: v1\n      # \u8bf7\u6c42\u53c2\u6570\u5185\u5bb9\n      params:\n        param1: param1\n        param2: param2\n      # \u8ba4\u8bc1\n      authorization:\n        # \u8ba4\u8bc1\u65b9\u5f0f: Basic Auth, Digest Auth, Bearer Token\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      # \u54cd\u5e94\u6570\u636e\u89e3\u6790\u65b9\u5f0f: default-\u7cfb\u7edf\u89c4\u5219,jsonPath-jsonPath\u811a\u672c,website-\u7f51\u7ad9\u53ef\u7528\u6027\u6307\u6807\u76d1\u63a7\n      # todo xmlPath-xmlPath\u811a\u672c,prometheus-Prometheus\u6570\u636e\u89c4\u5219\n      parseType: jsonPath\n      parseScript: '$'\n\n  - name: memory\n    priority: 1\n    fields:\n      - field: hostname\n        type: 1\n        instance: true\n      - field: total\n        type: 0\n        unit: kb\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: speed\n        type: 0\n    protocol: http\n    http:\n      host: ^_^host^_^\n      port: ^_^port^_^\n      url: /metrics/memory\n      method: GET\n      headers:\n        apiVersion: v1\n      params:\n        param1: param1\n        param2: param2\n      authorization:\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      parseType: default\n")),(0,r.yg)("h3",{id:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6"},"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,r.yg)("em",{parentName:"p"},"\u9700\u8981\u7684\u8f93\u5165\u53c2\u6570\u5b57\u6bb5\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u7ed3\u6784\u6e32\u67d3\u8f93\u5165\u53c2\u6570\u6846)"),"\u3002   ")),(0,r.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528HTTP\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u6587\u4ef6\u540d\u79f0: example.yml \u4f4d\u4e8e /define/param/example.yml   "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b\u540d\u79f0(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: example\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host(ipv4,ipv6,\u57df\u540d)\nparam:\n    # field-\u5b57\u6bb5\u540d\u79f0\u6807\u8bc6\u7b26\n  - field: host\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name: \u4e3b\u673aHost\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: host\n    # \u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: true\n  - field: port\n    name: \u7aef\u53e3\n    type: number\n    # \u5f53type\u4e3anumber\u65f6,\u7528range\u8868\u793a\u8303\u56f4\n    range: '[0,65535]'\n    required: true\n    # \u7aef\u53e3\u9ed8\u8ba4\u503c\n    defaultValue: 80\n    # \u53c2\u6570\u8f93\u5165\u6846\u63d0\u793a\u4fe1\u606f\n    placeholder: '\u8bf7\u8f93\u5165\u7aef\u53e3'\n  - field: username\n    name: \u7528\u6237\u540d\n    type: text\n    # \u5f53type\u4e3atext\u65f6,\u7528limit\u8868\u793a\u5b57\u7b26\u4e32\u9650\u5236\u5927\u5c0f\n    limit: 20\n    required: false\n  - field: password\n    name: \u5bc6\u7801\n    type: password\n    required: false\n  - field: ssl\n    name: \u542f\u52a8SSL\n    # \u5f53type\u4e3aboolean\u65f6,\u524d\u7aef\u7528switch\u5c55\u793a\u5f00\u5173\n    type: boolean\n    required: false\n  - field: method\n    name: \u8bf7\u6c42\u65b9\u5f0f\n    type: radio\n    required: true\n    # \u5f53type\u4e3aradio\u5355\u9009\u6846,checkbox\u590d\u9009\u6846\u65f6,option\u8868\u793a\u53ef\u9009\u9879\u503c\u5217\u8868 {name1:value1,name2:value2}\n    options:\n      - label: GET\u8bf7\u6c42\n        value: GET\n      - label: POST\u8bf7\u6c42\n        value: POST\n      - label: PUT\u8bf7\u6c42\n        value: PUT\n      - label: DELETE\u8bf7\u6c42\n        value: DELETE\n")))}u.isMDXComponent=!0}}]);