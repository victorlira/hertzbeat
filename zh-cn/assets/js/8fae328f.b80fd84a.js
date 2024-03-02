"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[72514],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),i=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(y.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=i(a),d=r,N=u["".concat(y,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(N,g(g({ref:t},o),{},{components:a})):n.createElement(N,g({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=u;var p={};for(var y in t)hasOwnProperty.call(t,y)&&(p[y]=t[y]);p.originalType=e,p.mdxType="string"==typeof e?e:r,g[1]=p;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={id:"kafka",title:"\u76d1\u63a7\uff1aKafka\u76d1\u63a7",sidebar_label:"Kafka\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","Kafka\u76d1\u63a7"]},g=void 0,p={unversionedId:"help/kafka",id:"version-v1.1.x/help/kafka",title:"\u76d1\u63a7\uff1aKafka\u76d1\u63a7",description:"\u5bf9Kafka\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7",source:"@site/versioned_docs/version-v1.1.x/help/kafka.md",sourceDirName:"help",slug:"/help/kafka",permalink:"/zh-cn/docs/v1.1.x/help/kafka",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.1.x/help/kafka.md",tags:[],version:"v1.1.x",frontMatter:{id:"kafka",title:"\u76d1\u63a7\uff1aKafka\u76d1\u63a7",sidebar_label:"Kafka\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","Kafka\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Zookeeper\u76d1\u63a7",permalink:"/zh-cn/docs/v1.1.x/help/zookeeper"},next:{title:"Tomcat\u76d1\u63a7",permalink:"/zh-cn/docs/v1.1.x/help/tomcat"}},y={},i=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1aserver_info",id:"\u6307\u6807\u96c6\u5408server_info",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1acode_cache",id:"\u6307\u6807\u96c6\u5408code_cache",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aactive_controller_count",id:"\u6307\u6807\u96c6\u5408active_controller_count",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1abroker_partition_count",id:"\u6307\u6807\u96c6\u5408broker_partition_count",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1abroker_leader_count",id:"\u6307\u6807\u96c6\u5408broker_leader_count",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1abroker_handler_avg_percent \u8bf7\u6c42\u5904\u7406\u5668\u7a7a\u95f2\u7387",id:"\u6307\u6807\u96c6\u5408broker_handler_avg_percent-\u8bf7\u6c42\u5904\u7406\u5668\u7a7a\u95f2\u7387",level:4}],o={toc:i};function m(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9Kafka\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u534f\u8bae\uff1aJMX")," "),(0,r.yg)("h3",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u5728 Kafka \u5f00\u542f ",(0,r.yg)("inlineCode",{parentName:"p"},"JMX")," \u670d\u52a1\uff0cHertzBeat \u4f7f\u7528 JMX \u534f\u8bae\u5bf9 Kafka \u8fdb\u884c\u6307\u6807\u91c7\u96c6\u3002")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5b89\u88c5\u90e8\u7f72 Kafka \u670d\u52a1")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 Kafka \u542f\u52a8\u811a\u672c"))),(0,r.yg)("p",null,"\u4fee\u6539 Kafka \u5b89\u88c5\u76ee\u5f55\u4e0b\u7684\u542f\u52a8\u811a\u672c ",(0,r.yg)("inlineCode",{parentName:"p"},"/bin/kafka-server-start.sh"),(0,r.yg)("br",{parentName:"p"}),"\n","\u5728\u5012\u6570\u7b2c\u4e8c\u884c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9, \u26a0\ufe0f\u6ce8\u610f\u66ff\u6362\u60a8\u81ea\u5df1\u7684\u7aef\u53e3\u548c\u5bf9\u5916 IP \u5730\u5740  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export JMX_PORT=9999;\nexport KAFKA_JMX_OPTS="-Djava.rmi.server.hostname=ip\u5730\u5740 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false";\n\n#  \u8fd9\u662f\u6700\u540e\u4e00\u884c\u672c\u6765\u5c31\u5b58\u5728\u7684\n# exec $base_dir/kafka-run-class.sh $EXTRA_ARGS kafka.Kafka "$@"\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u91cd\u542f Kafka \u670d\u52a1")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eKafka\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408server_info"},"\u6307\u6807\u96c6\u5408\uff1aserver_info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StartTimeMs"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CommitId"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7248\u672c\u63d0\u4ea4ID")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408code_cache"},"\u6307\u6807\u96c6\u5408\uff1acode_cache"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"committed"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"init"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"used"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408active_controller_count"},"\u6307\u6807\u96c6\u5408\uff1aactive_controller_count"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Value"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d3b\u8dc3\u76d1\u63a7\u5668\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408broker_partition_count"},"\u6307\u6807\u96c6\u5408\uff1abroker_partition_count"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Value"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5206\u533a\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408broker_leader_count"},"\u6307\u6807\u96c6\u5408\uff1abroker_leader_count"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Value"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9886\u5bfc\u8005\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408broker_handler_avg_percent-\u8bf7\u6c42\u5904\u7406\u5668\u7a7a\u95f2\u7387"},"\u6307\u6807\u96c6\u5408\uff1abroker_handler_avg_percent \u8bf7\u6c42\u5904\u7406\u5668\u7a7a\u95f2\u7387"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EventType"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RateUnit"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5177\u4f53\u60c5\u51b5\u5177\u4f53\u5206\u6790"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u4f4d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OneMinuteRate"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u5206\u949f\u5904\u7406\u7387")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FiveMinuteRate"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e94\u5206\u949f\u5904\u7406\u7387")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MeanRate"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e73\u5747\u5904\u7406\u7387")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FifteenMinuteRate"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5341\u4e94\u5206\u949f\u5904\u7406\u7387")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5176\u4ed6\u6307\u6807\u89c1\u6587\u77e5\u610f\uff0c\u6b22\u8fce\u8d21\u732e\u4e00\u8d77\u4f18\u5316\u6587\u6863\u3002")))}m.isMDXComponent=!0}}]);