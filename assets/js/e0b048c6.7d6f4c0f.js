"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[92361],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),m=r,u=g["".concat(s,".").concat(m)]||g[m]||d[m]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={id:"tdengine-init",title:"Use Time Series Database TDengine to Store Metrics Data (Optional)",sidebar_label:"Use TDengine Store Metrics"},i=void 0,l={unversionedId:"start/tdengine-init",id:"version-v1.5.x/start/tdengine-init",title:"Use Time Series Database TDengine to Store Metrics Data (Optional)",description:"Apache HertzBeat (incubating)'s historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)",source:"@site/versioned_docs/version-v1.5.x/start/tdengine-init.md",sourceDirName:"start",slug:"/start/tdengine-init",permalink:"/docs/v1.5.x/start/tdengine-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/start/tdengine-init.md",tags:[],version:"v1.5.x",frontMatter:{id:"tdengine-init",title:"Use Time Series Database TDengine to Store Metrics Data (Optional)",sidebar_label:"Use TDengine Store Metrics"},sidebar:"docs",previous:{title:"Use IoTDB Store Metrics",permalink:"/docs/v1.5.x/start/iotdb-init"},next:{title:"Use GreptimeDB Store Metrics",permalink:"/docs/v1.5.x/start/greptime-init"}},s={},c=[{value:"Install TDengine via Docker",id:"install-tdengine-via-docker",level:3},{value:"Create database instance",id:"create-database-instance",level:3},{value:"Configure the database connection in hertzbeat <code>application.yml</code> configuration file",id:"configure-the-database-connection-in-hertzbeat-applicationyml-configuration-file",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache HertzBeat (incubating)'s historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It is recommended to use VictoriaMetrics as metrics storage.")),(0,r.yg)("p",null,"TDengine is an open-source IoT time-series database, which we use to store the collected historical data of monitoring metrics. Pay attention to support \u26a0\ufe0f 3.x version."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Time series database is optional, but production environment configuration is strongly recommended to provide more complete historical chart functions and high performance"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"\u26a0\ufe0f If you do not configure a time series database, only the last hour of historical data is retained."),(0,r.yg)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0f Need TDengine 3.x Version."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you have TDengine environment, can directly skip to create a database instance.")),(0,r.yg)("h3",{id:"install-tdengine-via-docker"},"Install TDengine via Docker"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Refer to the official website ",(0,r.yg)("a",{parentName:"p",href:"https://docs.taosdata.com/get-started/docker/"},"installation tutorial"),"  "),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"Download and install Docker environment",(0,r.yg)("br",{parentName:"li"}),"Docker tools download refer to ",(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),".",(0,r.yg)("br",{parentName:"li"}),"After the installation you can check if the Docker version normally output at the terminal.")),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n")),(0,r.yg)("ol",{parentName:"blockquote",start:2},(0,r.yg)("li",{parentName:"ol"},"Install TDengine with Docker")),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp \\\n-v /opt/taosdata:/var/lib/taos \\ \n--name tdengine -e TZ=Asia/Shanghai \\\ntdengine/tdengine:3.0.4.0\n")),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"-v /opt/taosdata:/var/lib/taos")," is local persistent mount of TDengine data directory. ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/taosdata")," should be replaced with the actual local directory.",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},'-e TZ="Asia/Shanghai"')," can set time zone for TDengine.Set up the corresponding time zone you want.",(0,r.yg)("br",{parentName:"p"}),"\n","use",(0,r.yg)("inlineCode",{parentName:"p"},"$ docker ps")," to check if the database started successfully")),(0,r.yg)("h3",{id:"create-database-instance"},"Create database instance"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter database Docker container"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ docker exec -it tdengine /bin/bash\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create database named hertzbeat",(0,r.yg)("br",{parentName:"p"}),"\n","After entering the container\uff0cexecute ",(0,r.yg)("inlineCode",{parentName:"p"},"taos")," command as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"root@tdengine-server:~/TDengine-server# taos\nWelcome to the TDengine shell from Linux, Client Version\nCopyright (c) 2020 by TAOS Data, Inc. All rights reserved.\ntaos>\n")),(0,r.yg)("p",{parentName:"li"},"execute commands to create database"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"taos> show databases;\ntaos> CREATE DATABASE hertzbeat KEEP 90 DURATION 10 BUFFER 16;\n")),(0,r.yg)("p",{parentName:"li"},"The above statements will create a database named hertzbeat. The data will be saved for 90 days (more than 90 days data will be automatically deleted).",(0,r.yg)("br",{parentName:"p"}),"\n","A data file every 10 days, memory blocks buffer is 16MB.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check if hertzbeat database has been created success"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"taos> show databases;\ntaos> use hertzbeat;\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0fIf you install TDengine using package")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In addition to start the server\uff0cyou must execute ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter")),(0,r.yg)("h3",{id:"configure-the-database-connection-in-hertzbeat-applicationyml-configuration-file"},"Configure the database connection in hertzbeat ",(0,r.yg)("inlineCode",{parentName:"h3"},"application.yml")," configuration file"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Configure HertzBeat's configuration file",(0,r.yg)("br",{parentName:"li"}),"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," configuration file ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),(0,r.yg)("br",{parentName:"li"}),"Note\u26a0\ufe0fThe docker container way need to mount application.yml file locally,while you can use installation package way to unzip and modify ",(0,r.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml"),(0,r.yg)("br",{parentName:"li"}),"Replace ",(0,r.yg)("inlineCode",{parentName:"li"},"warehouse.store.td-engine")," data source parameters, URL account and password.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # disable jpa\n      jpa:\n         enabled: false\n      # enable td-engine   \n      td-engine:\n         enabled: true\n         driver-class-name: com.taosdata.jdbc.rs.RestfulDriver\n         url: jdbc:TAOS-RS://localhost:6041/hertzbeat\n         username: root\n         password: taosdata\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Restart HertzBeat")),(0,r.yg)("h3",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Do both the time series databases IoTDB and TDengine need to be configured? Can they both be used?")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You don't need to configure all of them, you can choose one of them. Use the enable parameter to control whether it is used or not. You can also install and configure neither, which only affects the historical chart data.")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"The historical chart of the monitoring page is not displayed, and pops up ","[Unable to provide historical chart data, please configure to rely on the time series database]")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"As shown in the pop-up window, the premise of displaying the history chart is to install and configure the dependent services of hertzbeat - IotDB database or TDengine database")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"The historical picture of monitoring details is not displayed or has no data, and TDengine has been deployed")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please confirm whether the installed TDengine version is 3.x, version 2.x are not compatible.")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"The TDengine database is installed and configured, but the page still displays a pop-up ","[Unable to provide historical chart data, please configure the dependent time series database]")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please check if the configuration parameters are correct",(0,r.yg)("br",{parentName:"p"}),"\n","Is td-engine enable set to true",(0,r.yg)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0fIf both hertzbeat and TDengine are started under the same host for docker containers, 127.0.0.1 cannot be used for communication between containers by default, and the host IP is changed",(0,r.yg)("br",{parentName:"p"}),"\n","You can check the startup logs according to the logs directory")))}d.isMDXComponent=!0}}]);