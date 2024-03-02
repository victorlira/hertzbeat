"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[94453],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(58168),a=(n(96540),n(15680));const r={id:"issue",title:"Common issues",sidebar_label:"Common issues"},i=void 0,s={unversionedId:"help/issue",id:"help/issue",title:"Common issues",description:"Monitoring common issues",source:"@site/docs/help/issue.md",sourceDirName:"help",slug:"/help/issue",permalink:"/docs/help/issue",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/issue.md",tags:[],version:"current",frontMatter:{id:"issue",title:"Common issues",sidebar_label:"Common issues"},sidebar:"docs",previous:{title:"Alert Huawei Cloud SMN Notifications",permalink:"/docs/help/alert_smn"},next:{title:"Media Friend",permalink:"/docs/others/media"}},p={},l=[{value:"Monitoring common issues",id:"monitoring-common-issues",level:3},{value:"Docker Deployment common issues",id:"docker-deployment-common-issues",level:3},{value:"Package Deployment common issues",id:"package-deployment-common-issues",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"monitoring-common-issues"},"Monitoring common issues"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Page feedback\uff1amonitor.host: Monitoring Host must be ipv4, ipv6 or domain name"),"   "),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"As shown in the information, the entered monitoring Host must be ipv4, ipv6 or domain name, and cannot carry a protocol header, such as http   "))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"The website API and other monitoring feedback statusCode:403 or 401, but the opposite end service itself does not need authentication, and the direct access of the browser is OK"),"       "),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"Please check whether it is blocked by the firewall. For example, BaoTa/aaPanel have set the blocking of ",(0,a.yg)("inlineCode",{parentName:"p"},"User-Agent=Apache-HttpClient")," in the request header by default. If it is blocked, please delete this blocking rule. (user-agent has been simulated as a browser in the v1.0.beat5 version. This problem does not exist)        "))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Ping connectivity monitoring exception when installing hertzbeat for package deployment.",(0,a.yg)("br",{parentName:"p"}),"\n","The hertzbeat installed and deployed by the installation package is not available for ping connectivity monitoring, but local direct ping is available \u3002     "),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"The deployment of the installation package requires configuring the root permission of the Java virtual machine to start hertzbeat to use ICMP. If the root permission is not enabled, judge whether port 7 of telnet opposite end is opened.",(0,a.yg)("br",{parentName:"p"}),"\n","When you install HertzBeat via DockerDocker root is enabled by default. No such problem.",(0,a.yg)("br",{parentName:"p"}),"\n","See ",(0,a.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/11506321/how-to-ping-an-ip-address"},"https://stackoverflow.com/questions/11506321/how-to-ping-an-ip-address")," "))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If the history chart on the monitoring page is not displayed\uff0cpopup ","[please configure dependency service on TDengine time series database]"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"As shown in the popup window\uff0cthe premise of history chart display is that you need install and configure hertzbeat's dependency service - TDengine database.\nInstallation and initialization this database refers to ",(0,a.yg)("a",{parentName:"p",href:"../start/tdengine-init"},"TDengine Installation and Initialization"),".   ")))),(0,a.yg)("h3",{id:"docker-deployment-common-issues"},"Docker Deployment common issues"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"MYSQL, TDENGINE and HertzBeat are deployed on the same host by Docker,HertzBeat use localhost or 127.0.0.1 connect to the database but fail"),(0,a.yg)("br",{parentName:"p"}),"\n","The problems lies in Docker container failed to visit and connect localhost port. Beacuse the docker default network mode is Bridge mode which can't access loacl machine through localhost."),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"Solution A\uff1aConfigure application.yml. Change database connection address from localhost to external IP of the host machine.",(0,a.yg)("br",{parentName:"p"}),"\n","Solution B\uff1aUse the Host network mode to start Docker, namely making Docker container and hosting share network. ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run -d --network host ....."),"    "))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"According to the process deploy\uff0cvisit http://ip:1157/ no interface"),(0,a.yg)("br",{parentName:"p"}),"\n","Please refer to the following points to troubleshoot issuess\uff1a  "),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"one\uff1aWhether the MySQL database and tdengine database as dependent services have been successfully started, whether the corresponding hertzbeat database has been created, and whether the SQL script has been executed.",(0,a.yg)("br",{parentName:"p"}),"\n","two\uff1aCheck whether dependent service, IP account and password configuration is correct in HertzBeat's configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"application.yml"),".  "),(0,a.yg)("blockquote",{parentName:"blockquote"},(0,a.yg)("p",{parentName:"blockquote"},"three\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," Check whether the container log has errors. If you haven't solved the issue, report it to the communication group or community.")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Log an error TDengine connection or insert SQL failed"),"  "),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"one\uff1aCheck whether database account and password configured is correct, the database is created.",(0,a.yg)("br",{parentName:"p"}),"\n","two\uff1aIf you install TDengine2.3+ version, you must execute ",(0,a.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server.   ")))),(0,a.yg)("h3",{id:"package-deployment-common-issues"},"Package Deployment common issues"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"According to the process deploy\uff0cvisit http://ip:1157/ no interface"),(0,a.yg)("br",{parentName:"p"}),"\n","Please refer to the following points to troubleshoot issuess:"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"one\uff1aWhether the MySQL database and tdengine database as dependent services have been successfully started, whether the corresponding hertzbeat database has been created, and whether the SQL script has been executed.",(0,a.yg)("br",{parentName:"p"}),"\n","two\uff1aCheck whether dependent services, IP account and password configuration is correct in HertzBeat's configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),".",(0,a.yg)("br",{parentName:"p"}),"\n","three\uff1a Check whether the running log has errors in ",(0,a.yg)("inlineCode",{parentName:"p"},"hertzbeat/logs/")," directory. If you haven't solved the issue, report it to the communication group or community."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Log an error TDengine connection or insert SQL failed")),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"one\uff1aCheck whether database account and password configured is correct, the database is created.",(0,a.yg)("br",{parentName:"p"}),"\n","two\uff1aIf you install TDengine2.3+ version, you must execute ",(0,a.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server.")))))}m.isMDXComponent=!0}}]);