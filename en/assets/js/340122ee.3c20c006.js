"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="luban.conf",o={unversionedId:"manual/luban.conf",id:"manual/luban.conf",title:"luban.conf",description:"Defines the global configuration required by luban.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/luban.conf.md",sourceDirName:"manual",slug:"/manual/luban.conf",permalink:"/en/docs/manual/luban.conf",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/en/docs/manual/traits"},next:{title:"schema logical structure",permalink:"/en/docs/manual/schema"}},u={},s=[{value:"Format",id:"format",level:2},{value:"dataDir",id:"datadir",level:2},{value:"schemaFiles",id:"schemafiles",level:2},{value:"targets",id:"targets",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lubanconf"},"luban.conf"),(0,r.kt)("p",null,"Defines the global configuration required by luban."),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"A typical luban.conf configuration content is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "groups":\n    [\n        {"names":["c"], "default":true},\n        {"names":["s"], "default":true},\n        {"names":["e"], "default":true}\n    ],\n    "schemaFiles":\n    [\n        {"fileName":"Defines", "type":""},\n        {"fileName":"Datas/__tables__.xlsx", "type":"table"},\n        {"fileName":"Datas/__beans__.xlsx", "type":"bean"},\n        {"fileName":"Datas/__enums__.xlsx", "type":"enum"}\n    ],\n    "dataDir": "Datas",\n    "targets":\n    [\n        {"name":"server", "manager":"Tables", "groups":["s"], "topModule":"cfg"},\n        {"name":"client", "manager":"Tables", "groups":["c"], "topModule":"cfg"},\n        {"name":"all", "manager":"Tables", "groups":["c,s,e"], "topModule":"cfg"}\n    ]\n}\n\n')),(0,r.kt)("h2",{id:"datadir"},"dataDir"),(0,r.kt)("p",null,"Specify the data root directory, this project configuration cannot be empty."),(0,r.kt)("h2",{id:"schemafiles"},"schemaFiles"),(0,r.kt)("p",null,"Defines the schema sub-definition files that need to be collected, which can be multiple or a directory. In this case, all sub-files under the directory tree (including sub-directories) will be collected recursively."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"The schema sub-definition file that needs to be collected can be a file or a directory. When it is a directory, all sub-files under the directory tree (including sub-directories) will be collected recursively. The type value of the sub-file is the same as the directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Subdefine file type. If it is an xml format definition file, type is not required. If it is an excel family, since each file is only suitable for containing one type of definition, you need to use type to specify which type of definition is included. Valid values are blank string, enum, bean, table")))),(0,r.kt)("p",null,"##groups"),(0,r.kt)("p",null,"groups defines the groups available within the configuration. In practice, the data tables and fields in the tables required by the front-end and back-end are often different. This classification of output content according to the output target corresponds to the concept of group in Luban."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"names"),(0,r.kt)("td",{parentName:"tr",align:null},"list,string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Group name, contains 1-n values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether it is the default export target of the table, that is, if the group of the table is empty, it automatically belongs to this group")))),(0,r.kt)("p",null,"The name field of the group can be any value, but it should not appear repeatedly. It is also possible to use a name like client, but in practice, for convenience, it is usually a simple single character such as c or s."),(0,r.kt)("p",null,"The default field of group does not take effect for enum, bean and field (member field of bean)."),(0,r.kt)("p",null,"When Luban generates code, it will start from the export table and recursively collect all related enum and bean definitions.\nWhen the enum and bean groups are empty, they will be marked as exported types and codes will be generated for them only if they are directly or indirectly referenced by the export table. If their groups are manually set, they do not belong to the current\nExport targets, but when they are indirectly referenced by the export table, the group will be ignored and exported forcibly."),(0,r.kt)("p",null,"If the group of the field is empty, it belongs to all groups by default and cannot be configured. This is because most fields will belong to all groups, and we want to make the fields\nIf the group is empty, it means exporting to all targets, instead of setting its group to all groups."),(0,r.kt)("p",null,"There are multiple groups. Generally, projects include at least c (client) and s (server) groups. If the project has a custom configuration editor, there will generally be an additional target e (editor).\nThere are no restrictions on the number and naming of groups, it is just a convention that they are designed this way."),(0,r.kt)("h2",{id:"targets"},"targets"),(0,r.kt)("p",null,"The export target is defined. Generally speaking, for the export of the client or server, some unique configuration information is required, which corresponds to the concept of luban as target."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"export target name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the generated management class that manages all exported Tables, usually Tables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups"),(0,r.kt)("td",{parentName:"tr",align:null},"list,string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Which groups the output target contains, can be 1-n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topModule"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"is an additional top-level namespace of type"),(0,r.kt)("td",{parentName:"tr",align:null},", can be empty. When you want all the generated configuration code to be in the cfg namespace, you don\u2019t need to add the cfg prefix to each enum, bean, table and other namespaces, just let topModule be cfg")))))}d.isMDXComponent=!0}}]);