"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[18561],{15680:(e,t,r)=>{r.d(t,{xA:()=>o,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),y=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},o=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=y(r),m=n,c=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(c,g(g({ref:t},o),{},{components:r})):a.createElement(c,g({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,g=new Array(l);g[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,g[1]=i;for(var y=2;y<l;y++)g[y]=r[y];return a.createElement.apply(null,g)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=r(58168),n=(r(96540),r(15680));const l={id:"sqlserver",title:"\u76d1\u63a7\uff1aSqlServer\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"SqlServer\u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","SqlServer\u6570\u636e\u5e93\u76d1\u63a7"]},g=void 0,i={unversionedId:"help/sqlserver",id:"version-v1.1.x/help/sqlserver",title:"\u76d1\u63a7\uff1aSqlServer\u6570\u636e\u5e93\u76d1\u63a7",description:"\u5bf9SqlServer\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301SqlServer 2017+\u3002",source:"@site/versioned_docs/version-v1.1.x/help/sqlserver.md",sourceDirName:"help",slug:"/help/sqlserver",permalink:"/zh-cn/docs/v1.1.x/help/sqlserver",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.1.x/help/sqlserver.md",tags:[],version:"v1.1.x",frontMatter:{id:"sqlserver",title:"\u76d1\u63a7\uff1aSqlServer\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"SqlServer\u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","SqlServer\u6570\u636e\u5e93\u76d1\u63a7"]},sidebar:"docs",previous:{title:"PostgreSQL\u6570\u636e\u5e93",permalink:"/zh-cn/docs/v1.1.x/help/postgresql"},next:{title:"ORACLE\u6570\u636e\u5e93",permalink:"/zh-cn/docs/v1.1.x/help/oracle"}},p={},y=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1abasic",id:"\u6307\u6807\u96c6\u5408basic",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aperformance_counters",id:"\u6307\u6807\u96c6\u5408performance_counters",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aconnection",id:"\u6307\u6807\u96c6\u5408connection",level:4},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],o={toc:y};function d(e){let{components:t,...r}=e;return(0,n.yg)("wrapper",(0,a.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u5bf9SqlServer\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301SqlServer 2017+\u3002")),(0,n.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,n.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a1433\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eSQL\u67e5\u8be2\u672a\u54cd\u5e94\u6570\u636e\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u540d\u79f0\uff0c\u53ef\u9009\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d\uff0c\u53ef\u9009")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801\uff0c\u53ef\u9009")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"URL"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5URL\uff0c\u53ef\u9009\uff0c\u82e5\u914d\u7f6e\uff0c\u5219URL\u91cc\u9762\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u540d\u5bc6\u7801\u7b49\u53c2\u6570\u4f1a\u8986\u76d6\u4e0a\u9762\u914d\u7f6e\u7684\u53c2\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,n.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,n.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,n.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,n.yg)("h4",{id:"\u6307\u6807\u96c6\u5408basic"},"\u6307\u6807\u96c6\u5408\uff1abasic"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"machine_name"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u670d\u52a1\u5668\u5b9e\u4f8b\u7684 Windows \u8ba1\u7b97\u673a\u540d\u79f0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"server_name"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4e0eWindows\u5b9e\u4f8b\u5173\u8054\u7684\u670d\u52a1\u5668\u548c\u5b9e\u4f8b\u4fe1\u606fSQL Server")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"version"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},'\u5b9e\u4f8b\u7684\u7248\u672c\uff0cSQL Server\uff0c\u683c\u5f0f\u4e3a"major.minor.build.revision"')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"edition"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5df2\u5b89\u88c5\u7684 \u5b9e\u4f8b\u7684\u4ea7\u54c1SQL Server\u7248\u672c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"start_time"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u542f\u52a8\u65f6\u95f4")))),(0,n.yg)("h4",{id:"\u6307\u6807\u96c6\u5408performance_counters"},"\u6307\u6807\u96c6\u5408\uff1aperformance_counters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"database_pages"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"Database pages, \u5df2\u83b7\u5f97\u7684\u9875\u9762\u6570(\u7f13\u51b2\u6c60)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"target_pages"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"Target pages, \u7f13\u51b2\u6c60\u5fc5\u987b\u7684\u7406\u60f3\u9875\u9762\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"page_life_expectancy"),(0,n.yg)("td",{parentName:"tr",align:null},"s,\u79d2"),(0,n.yg)("td",{parentName:"tr",align:null},"Page life expectancy, \u6570\u636e\u9875\u5728\u7f13\u51b2\u6c60\u4e2d\u9a7b\u7559\u7684\u65f6\u95f4\uff0c\u8fd9\u4e2a\u65f6\u95f4\u4e00\u822c\u4f1a\u5927\u4e8e 300")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"buffer_cache_hit_ratio"),(0,n.yg)("td",{parentName:"tr",align:null},"%"),(0,n.yg)("td",{parentName:"tr",align:null},"Buffer cache hit ratio, \u6570\u636e\u5e93\u7f13\u51b2\u6c60\u9ad8\u901f\u7f13\u51b2\u547d\u4e2d\u7387\uff0c\u88ab\u8bf7\u6c42\u7684\u6570\u636e\u5728\u7f13\u51b2\u6c60\u4e2d\u88ab\u627e\u5230\u7684\u6982\u7387\uff0c\u4e00\u822c\u4f1a\u5927\u4e8e 80% \u624d\u7b97\u6b63\u5e38\uff0c\u5426\u5219\u53ef\u80fd\u662f\u7f13\u51b2\u6c60\u5bb9\u91cf\u592a\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"checkpoint_pages_sec"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"Checkpoint pages/sec, \u68c0\u67e5\u70b9\u6bcf\u79d2\u5199\u5165\u78c1\u76d8\u7684\u810f\u9875\u4e2a\u6570\uff0c\u5982\u679c\u6570\u636e\u8fc7\u9ad8\uff0c\u8bc1\u660e\u7f3a\u5c11\u5185\u5b58\u5bb9\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"page_reads_sec"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"Page reads/sec, \u7f13\u5b58\u6c60\u4e2d\u6bcf\u79d2\u8bfb\u7684\u9875\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"page_writes_sec"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"Page writes/sec, \u7f13\u5b58\u6c60\u4e2d\u6bcf\u79d2\u5199\u7684\u9875\u6570")))),(0,n.yg)("h4",{id:"\u6307\u6807\u96c6\u5408connection"},"\u6307\u6807\u96c6\u5408\uff1aconnection"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"user_connection"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5df2\u8fde\u63a5\u7684\u4f1a\u8bdd\u6570")))),(0,n.yg)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"SSL\u8fde\u63a5\u95ee\u9898\u4fee\u590d  ")),(0,n.yg)("p",null,"jdk\u7248\u672c\uff1ajdk11",(0,n.yg)("br",{parentName:"p"}),"\n","\u95ee\u9898\u63cf\u8ff0\uff1aSQL Server2019\u4f7f\u7528SA\u7528\u6237\u8fde\u63a5\u62a5\u9519",(0,n.yg)("br",{parentName:"p"}),"\n","\u9519\u8bef\u4fe1\u606f\uff1a   "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},'The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption. Error: "PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target". ClientConnectionId:xxxxxxxxxxxxxxxxx\n')),(0,n.yg)("p",null,"\u95ee\u9898\u622a\u56fe\uff1a\n",(0,n.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/38679717/206621658-c0741d48-673d-45ff-9a3b-47d113064c12.png",alt:"issue"})),(0,n.yg)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a",(0,n.yg)("br",{parentName:"p"}),"\n","\u6dfb\u52a0",(0,n.yg)("inlineCode",{parentName:"p"},"SqlServer"),"\u76d1\u63a7\u65f6\u4f7f\u7528\u9ad8\u7ea7\u8bbe\u7f6e\uff0c\u81ea\u5b9a\u4e49JDBC URL\uff0c\u62fc\u63a5\u7684jdbc url\u540e\u9762\u52a0\u4e0a\u53c2\u6570\u914d\u7f6e\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},";encrypt=true;trustServerCertificate=true;"),"\u8fd9\u4e2a\u53c2\u6570true\u8868\u793a\u65e0\u6761\u4ef6\u4fe1\u4efbserver\u7aef\u8fd4\u56de\u7684\u4efb\u4f55\u6839\u8bc1\u4e66\u3002 "),(0,n.yg)("p",null,"\u6837\u4f8b\uff1a",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc:sqlserver://127.0.0.1:1433;DatabaseName=demo;encrypt=true;trustServerCertificate=true;"),"    "),(0,n.yg)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/azure-database-support-blog/pkix-path-building-failed-unable-to-find-valid-certification/ba-p/2591304"},"microsoft pkix-path-building-failed-unable-to-find-valid-certification")))}d.isMDXComponent=!0}}]);