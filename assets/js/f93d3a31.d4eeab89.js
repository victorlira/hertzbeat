"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[94453],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>d});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},91450:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(58168),r=(o(96540),o(15680));const a={id:"issue",title:"Common issues",sidebar_label:"Common issues"},i=void 0,s={unversionedId:"help/issue",id:"help/issue",title:"Common issues",description:"Monitoring common issues",source:"@site/docs/help/issue.md",sourceDirName:"help",slug:"/help/issue",permalink:"/docs/help/issue",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/issue.md",tags:[],version:"current",frontMatter:{id:"issue",title:"Common issues",sidebar_label:"Common issues"},sidebar:"docs",previous:{title:"Alert Huawei Cloud SMN Notifications",permalink:"/docs/help/alert_smn"},next:{title:"Custom plugin",permalink:"/docs/help/plugin"}},l={},c=[{value:"Monitoring common issues",id:"monitoring-common-issues",level:3},{value:"Docker Deployment common issues",id:"docker-deployment-common-issues",level:3},{value:"Package Deployment common issues",id:"package-deployment-common-issues",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.yg)("wrapper",(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"monitoring-common-issues"},"Monitoring common issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Page feedback\uff1amonitor.host: Monitoring Host must be ipv4, ipv6 or domain name"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"As shown in the information, the entered monitoring Host must be ipv4, ipv6 or domain name, and cannot carry a protocol header, such as http")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"The website API and other monitoring feedback statusCode:403 or 401, but the opposite end service itself does not need authentication, and the direct access of the browser is OK"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please check whether it is blocked by the firewall. For example, BaoTa/aaPanel have set the blocking of ",(0,r.yg)("inlineCode",{parentName:"p"},"User-Agent=Apache-HttpClient")," in the request header by default. If it is blocked, please delete this blocking rule. (user-agent has been simulated as a browser in the v1.0.beat5 version. This problem does not exist)")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Ping connectivity monitoring exception when installing hertzbeat for package deployment.",(0,r.yg)("br",{parentName:"li"}),"The hertzbeat installed and deployed by the installation package is not available for ping connectivity monitoring, but local direct ping is available \u3002")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The deployment of the installation package requires configuring the root permission of the Java virtual machine to start hertzbeat to use ICMP. If the root permission is not enabled, judge whether port 7 of telnet opposite end is opened.",(0,r.yg)("br",{parentName:"p"}),"\n","When you install HertzBeat via DockerDocker root is enabled by default. No such problem.",(0,r.yg)("br",{parentName:"p"}),"\n","See ",(0,r.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/11506321/how-to-ping-an-ip-address"},"https://stackoverflow.com/questions/11506321/how-to-ping-an-ip-address"))),(0,r.yg)("h3",{id:"docker-deployment-common-issues"},"Docker Deployment common issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"MYSQL, TDENGINE and HertzBeat are deployed on the same host by Docker,HertzBeat use localhost or 127.0.0.1 connect to the database but fail"),(0,r.yg)("br",{parentName:"li"}),"The problems lies in Docker container failed to visit and connect localhost port. Because the docker default network mode is Bridge mode which can't access local machine through localhost.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Solution A\uff1aConfigure application.yml. Change database connection address from localhost to external IP of the host machine.",(0,r.yg)("br",{parentName:"p"}),"\n","Solution B\uff1aUse the Host network mode to start Docker, namely making Docker container and hosting share network. ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d --network host ....."))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"According to the process deploy\uff0cvisit http://ip:1157/ no interface"),(0,r.yg)("br",{parentName:"li"}),"Please refer to the following points to troubleshoot issues\uff1a")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"one\uff1aWhether the MySQL database and tdengine database as dependent services have been successfully started, whether the corresponding hertzbeat database has been created, and whether the SQL script has been executed.",(0,r.yg)("br",{parentName:"p"}),"\n","two\uff1aCheck whether dependent service, IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml"),"."),(0,r.yg)("blockquote",{parentName:"blockquote"},(0,r.yg)("p",{parentName:"blockquote"},"three\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," Check whether the container log has errors. If you haven't solved the issue, report it to the communication group or community."))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Log an error TDengine connection or insert SQL failed"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"one\uff1aCheck whether database account and password configured is correct, the database is created.",(0,r.yg)("br",{parentName:"p"}),"\n","two\uff1aIf you install TDengine2.3+ version, you must execute ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server.")),(0,r.yg)("h3",{id:"package-deployment-common-issues"},"Package Deployment common issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"According to the process deploy\uff0cvisit http://ip:1157/ no interface"),(0,r.yg)("br",{parentName:"li"}),"Please refer to the following points to troubleshoot issues:")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"one\uff1aWhether the MySQL database and tdengine database as dependent services have been successfully started, whether the corresponding hertzbeat database has been created, and whether the SQL script has been executed.",(0,r.yg)("br",{parentName:"p"}),"\n","two\uff1aCheck whether dependent services, IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),".",(0,r.yg)("br",{parentName:"p"}),"\n","three\uff1a Check whether the running log has errors in ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/logs/")," directory. If you haven't solved the issue, report it to the communication group or community.")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Log an error TDengine connection or insert SQL failed"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"one\uff1aCheck whether database account and password configured is correct, the database is created.",(0,r.yg)("br",{parentName:"p"}),"\n","two\uff1aIf you install TDengine2.3+ version, you must execute ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server.")))}u.isMDXComponent=!0}}]);