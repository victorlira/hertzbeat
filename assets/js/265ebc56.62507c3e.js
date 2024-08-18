"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[64721],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={id:"extend-http-jsonpath",title:"HTTP Protocol JsonPath Parsing Method",sidebar_label:"JsonPath Parsing Method"},i=void 0,l={unversionedId:"advanced/extend-http-jsonpath",id:"version-v1.5.x/advanced/extend-http-jsonpath",title:"HTTP Protocol JsonPath Parsing Method",description:"After calling the HTTP api to obtain the response data, use JsonPath script parsing method to parse the response data.",source:"@site/versioned_docs/version-v1.5.x/advanced/extend-http-jsonpath.md",sourceDirName:"advanced",slug:"/advanced/extend-http-jsonpath",permalink:"/docs/v1.5.x/advanced/extend-http-jsonpath",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/advanced/extend-http-jsonpath.md",tags:[],version:"v1.5.x",frontMatter:{id:"extend-http-jsonpath",title:"HTTP Protocol JsonPath Parsing Method",sidebar_label:"JsonPath Parsing Method"},sidebar:"docs",previous:{title:"Default Parsing Method",permalink:"/docs/v1.5.x/advanced/extend-http-default"},next:{title:"Tutorial 1 Adapting an HTTP protocol monitoring",permalink:"/docs/v1.5.x/advanced/extend-http-example-hertzbeat"}},p={},s=[{value:"JsonPath Operator",id:"jsonpath-operator",level:4},{value:"HertzBeat data format specification",id:"hertzbeat-data-format-specification",level:4},{value:"Example",id:"example",level:4}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"After calling the HTTP api to obtain the response data, use JsonPath script parsing method to parse the response data.")),(0,a.yg)("p",null,"Note\u26a0\ufe0f The response data is JSON format."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use the JsonPath script to parse the response data into data that conforms to the data structure rules specified by HertzBeat")),(0,a.yg)("h4",{id:"jsonpath-operator"},"JsonPath Operator"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.jsonpath.cn"},"JSONPath online verification")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"JSONPATH"),(0,a.yg)("th",{parentName:"tr",align:null},"Help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"$"),(0,a.yg)("td",{parentName:"tr",align:null},"Root object or element")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@"),(0,a.yg)("td",{parentName:"tr",align:null},"Current object or element")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},". or []"),(0,a.yg)("td",{parentName:"tr",align:null},"Child element operator")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},".."),(0,a.yg)("td",{parentName:"tr",align:null},"Recursively match all child elements")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"*"),(0,a.yg)("td",{parentName:"tr",align:null},"Wildcard.  Match all objects or elements")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[]"),(0,a.yg)("td",{parentName:"tr",align:null},"Subscript operator, jsonpath index starts from 0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[,]"),(0,a.yg)("td",{parentName:"tr",align:null},"Join operator, return multiple results as an array. Jsonpath allows the use of aliases")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"[start\ud83d\udd1astep]"),(0,a.yg)("td",{parentName:"tr",align:null},"Array slice operator")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"?()"),(0,a.yg)("td",{parentName:"tr",align:null},"Filter (script) expression")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"()"),(0,a.yg)("td",{parentName:"tr",align:null},"Script Expression")))),(0,a.yg)("h4",{id:"hertzbeat-data-format-specification"},"HertzBeat data format specification"),(0,a.yg)("p",null,"Single layer format \uff1akey-value"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "metricName1": "metricValue",\n  "metricName2": "metricValue",\n  "metricName3": "metricValue",\n  "metricName4": "metricValue"\n}\n')),(0,a.yg)("p",null,"Multilayer format\uff1aSet key value in the array"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  },\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  }\n]\n')),(0,a.yg)("h4",{id:"example"},"Example"),(0,a.yg)("p",null,"Query the value information of the custom system, and its exposed interface is  ",(0,a.yg)("inlineCode",{parentName:"p"},"/metrics/person"),". We need ",(0,a.yg)("inlineCode",{parentName:"p"},"type,num")," Metric.",(0,a.yg)("br",{parentName:"p"}),"\n","The raw data returned by the interface is as follows\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "lastName" : "doe",\n  "age"      : 26,\n  "address"  : {\n    "streetAddress": "naist street",\n    "city"         : "Nara",\n    "postalCode"   : "630-0192"\n  },\n  "number": [\n    {\n      "type": "core",\n      "num": 3343\n    },\n    {\n      "type": "home",\n      "num": 4543\n    }\n  ]\n}\n')),(0,a.yg)("p",null,"We use the jsonpath script to parse, and the corresponding script is: ",(0,a.yg)("inlineCode",{parentName:"p"},"$.number[*]"),"\uff0cThe parsed data structure is as follows\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "core",\n    "num": 3343\n  },\n  {\n    "type": "home",\n    "num": 4543\n  }\n]\n')),(0,a.yg)("p",null,"This data structure conforms to the data format specification of HertzBeat, and the Metric ",(0,a.yg)("inlineCode",{parentName:"p"},"type,num")," is successfully extracted."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The corresponding monitoring template yml can be configured as follows")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\nparams:\n  # field-field name identifier\n  - field: host\n    # name-parameter field display name\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-field type, style(most mappings are input label type attribute)\n    type: host\n    # required or not  true-required  false-optional\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    # When type is number, range is used to represent the range.\n    range: '[0,65535]'\n    required: true\n    # port default\n    defaultValue: 80\n    # Prompt information of parameter input box\n    placeholder: 'Please enter the port'\n# Metric group list\nmetrics:\n# The first monitoring Metric group person\n# Note\uff1athe built-in monitoring Metrics have (responseTime - response time)\n  - name: cpu\n    # The smaller Metric group scheduling priority(0-127), the higher the priority. After completion of the high priority Metric group collection,the low priority Metric group will then be scheduled. Metric groups with the same priority  will be scheduled in parallel.\n    # Metric group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # metrics fields list\n    fields:\n      # Metric information include   field: name   type: field type(0-number: number, 1-string: string)   label-if is metrics label   unit: Metric unit\n      - field: type\n        type: 1\n        label: true\n      - field: num\n        type: 0\n# protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# Specific collection configuration when the protocol is HTTP protocol\n    http:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      # url request interface path\n      url: /metrics/person\n      # request mode GET POST PUT DELETE PATCH\n      method: GET\n      # enable ssl/tls or not, that is to say, HTTP or HTTPS. The default is false\n      ssl: false\n      # parsing method for response data: default-system rules, jsonPath-jsonPath script, website-website availability Metric monitoring\n      # jsonPath parsing is used here\n      parseType: jsonPath\n      parseScript: '$.number[*]' \n")))}m.isMDXComponent=!0}}]);