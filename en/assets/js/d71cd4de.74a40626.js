"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9578],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>k});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),u=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=u(t.components);return n.createElement(p.Provider,{value:a},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(e),g=l,k=m["".concat(p,".").concat(g)]||m[g]||s[g]||r;return e?n.createElement(k,i(i({ref:a},d),{},{components:e})):n.createElement(k,i({ref:a},d))}));function k(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}g.displayName="MDXCreateElement"},5045:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=e(7462),l=(e(7294),e(3905));const r={},i="\u547d\u4ee4\u884c\u5de5\u5177",o={unversionedId:"manual/commandtools",id:"manual/commandtools",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"\u8de8\u5e73\u53f0",source:"@site/docs/manual/commandtools.md",sourceDirName:"manual",slug:"/manual/commandtools",permalink:"/en/docs/manual/commandtools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u5b9a\u4e49",permalink:"/en/docs/manual/defaultschemacollector"},next:{title:"\u5c42\u7ea7\u53c2\u6570\u673a\u5236",permalink:"/en/docs/manual/cascadingoption"}},p={},u=[{value:"\u8de8\u5e73\u53f0",id:"\u8de8\u5e73\u53f0",level:2},{value:"\u547d\u4ee4\u683c\u5f0f",id:"\u547d\u4ee4\u683c\u5f0f",level:2},{value:"SchemaCollector",id:"schemacollector",level:2},{value:"Code Target",id:"code-target",level:2},{value:"Data Target",id:"data-target",level:2},{value:"Pipeline",id:"pipeline",level:2},{value:"xargs",id:"xargs",level:2},{value:"OutputSaver",id:"outputsaver",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"unity + c# + bin",id:"unity--c--bin",level:3},{value:"unity + c# + json",id:"unity--c--json",level:3},{value:"dotnet + c# + bin",id:"dotnet--c--bin",level:3},{value:"go + bin",id:"go--bin",level:3},{value:"java + bin",id:"java--bin",level:3},{value:"\u7528\u4e8e\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\uff0c\u4e0d\u751f\u6210\u4efb\u4f55\u4ee3\u7801\u548c\u6587\u4ef6",id:"\u7528\u4e8e\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\u4e0d\u751f\u6210\u4efb\u4f55\u4ee3\u7801\u548c\u6587\u4ef6",level:3},{value:"\u540c\u65f6\u751f\u6210 cs-bin\u548cjava-bin\u4ee3\u7801",id:"\u540c\u65f6\u751f\u6210-cs-bin\u548cjava-bin\u4ee3\u7801",level:3}],d={toc:u},m="wrapper";function s(t){let{components:a,...e}=t;return(0,l.kt)(m,(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("h2",{id:"\u8de8\u5e73\u53f0"},"\u8de8\u5e73\u53f0"),(0,l.kt)("p",null,"\u5f97\u76ca\u4e8e.net\u7684\u8de8\u5e73\u53f0\u80fd\u529b\uff0cLuban\u53ef\u4ee5\u5728\u4e3b\u6d41\u7684Win\u3001Linux\u53camacOS\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u683c\u5f0f"},"\u547d\u4ee4\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"\ndotnet <path_of_luban.dll> [args] \n\nargs\uff1a\n\n  -s, --schemaCollector      schema collector name\n\n  --schemaPath               Required. schema path\n\n  -t, --target               Required. target name\n\n  -c, --codeTarget           code target name. allow multi instance.\n\n  -d, --dataTarget           data target name. allow multi instance.\n\n  -p, --pipeline             pipeline name\n\n  -i, --includeTag           include tag. allow multi instance.\n\n  -e, --excludeTag           exclude tag. allow multi instance.\n\n  -o, --outputTable          output table. allow multi instance.\n\n  --timeZone                 timezone\n\n  --customTemplateDir        custom template search dir\n\n  --validationFailAsError    validation fail as error\n\n  -x, --xargs                args like -x a=1 -x b=2. allow multi instance.\n\n  -v, --verbose              verbose\n\n  --help                     Display this help screen.\n\n  --version                  Display version information.\n\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s, --schemaCollector"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"schema\u6839\u6536\u96c6\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--schemaPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"schema\u6839\u6536\u96c6\u5668\u7684\u6839\u8f93\u5165\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-t\uff0c --target"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u76ee\u6807\uff0c\u53d6schema\u5168\u5c40\u53c2\u6570target\u4e2d\u7684\u4e00\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-c, --codeTarget"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684\u4ee3\u7801\u76ee\u6807\u3002\u53ef\u4ee5\u67090-n\u4e2a\u3002\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"-c cs-bin -c java-json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-d, --dataTarget"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684\u6570\u636e\u76ee\u6807\u3002\u53ef\u4ee5\u67090-n\u4e2a\u3002\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"-d bin -d json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-p, --pipeline"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7ba1\u7ebf\u3002\u9ed8\u8ba4\u4e3a\u5185\u7f6e\u7684DefaultPipeline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-i, --inlcudeTag"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5tag\u7684\u8bb0\u5f55\u4f1a\u88ab\u8f93\u51fa\u5230\u6570\u636e\u76ee\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-e, --excludeTag"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5tag\u7684\u8bb0\u5f55\u4e0d\u4f1a\u88ab\u8f93\u51fa\u5230\u6570\u636e\u76ee\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-o, --outputTable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u751f\u6210\u7684table\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"td"},"-o item.tbItem -o bag.TbBag"),"\u3002\u5982\u679c\u672a\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u5219\u6309\u7167group\u89c4\u5219\u8ba1\u7b97\u5bfc\u51fa\u7684table\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--timeZone"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5f53\u524d\u65f6\u533a\uff0c\u9ed8\u8ba4\u53d6\u672c\u5730\u65f6\u533a\u3002\u6b64\u53c2\u6570\u4f1a\u5f71\u54cddatetime\u7c7b\u578b\u3002\u8be5\u53c2\u6570\u4e3alinux\u6216win\u4e0b\u7684\u65f6\u533a\u540d\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"Asia/Shanghai")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"China Standard Time"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--customTemplateDir"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49template\u641c\u7d22\u8def\u5f84\uff0c\u4f18\u5148\u7ea7\u641c\u7d22\u6b64\u8def\u5f84\uff0c\u518d\u641c\u7d22\u9ed8\u8ba4\u7684Templates\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--validationFailAsError"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6709\u4efb\u4f55\u6821\u9a8c\u5668\u672a\u901a\u8fc7\uff0c\u5219\u751f\u6210\u5931\u8d25\u3002\u6b64\u53c2\u6570\u4e00\u822c\u5728\u6b63\u5f0f\u53d1\u5e03\u65f6\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-x, --xargs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4e00\u4e9b\u7279\u6b8a\u53c2\u6570\u3002\u5177\u4f53\u9700\u8981\u54ea\u4e9b\u53c2\u6570\u7531\u751f\u6210\u7ba1\u7ebf\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u7684\u6a21\u5757\u51b3\u5b9a")))),(0,l.kt)("h2",{id:"schemacollector"},"SchemaCollector"),(0,l.kt)("p",null,"Luban.SchemaCollector.Builtin\u9879\u76ee\u5b9e\u73b0\u4e86DefaultSchemaCollector\uff0c\u5b83\u652f\u6301\u4e0e\u65e7\u7248\u672cLuban\u76f8\u4f3c\u7684\u5b9a\u4e49\u683c\u5f0f\u3002\u8be5schemaCollector\u540d\u4e3adefault\u3002"),(0,l.kt)("h2",{id:"code-target"},"Code Target"),(0,l.kt)("p",null,"\u76ee\u524d\u5185\u7f6e\u652f\u6301\u4ee5\u4e0bcode target\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code target"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cs-bin"),(0,l.kt)("td",{parentName:"tr",align:null},"C#\uff0c\u8bfb\u53d6bin\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cs-simple-json"),(0,l.kt)("td",{parentName:"tr",align:null},"C#\uff0c\u4f7f\u7528SimpleJSON\u8bfb\u53d6json\u6587\u4ef6\uff0c\u63a8\u8350\u7528\u4e8eUnity\u5ba2\u6237\u7aef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cs-dotnet-json"),(0,l.kt)("td",{parentName:"tr",align:null},"C#\uff0c\u4f7f\u7528System.Text.Json\u5e93\u8bfb\u53d6json\u6587\u4ef6\uff0c\u63a8\u8350\u7528\u4e8edotnet core\u670d\u52a1\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lua-lua"),(0,l.kt)("td",{parentName:"tr",align:null},"lua\uff0c\u8bfb\u53d6lua\u683c\u5f0f\u7684\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lua-bin"),(0,l.kt)("td",{parentName:"tr",align:null},"lua\uff0c\u8bfb\u53d6bin\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"java-bin"),(0,l.kt)("td",{parentName:"tr",align:null},"java\uff0c\u8bfb\u53d6bin\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"java-json"),(0,l.kt)("td",{parentName:"tr",align:null},"java\uff0c\u4f7f\u7528gson\u5e93\u8bfb\u53d6json\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpp-bin"),(0,l.kt)("td",{parentName:"tr",align:null},"cpp\uff0c\u8bfb\u53d6bin\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"go-bin"),(0,l.kt)("td",{parentName:"tr",align:null},"go\uff0c\u8bfb\u53d6bin\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"go-json"),(0,l.kt)("td",{parentName:"tr",align:null},"go\uff0c\u8bfb\u53d6json\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"python-json"),(0,l.kt)("td",{parentName:"tr",align:null},"python\uff0c\u8bfb\u53d6json\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gdscript-json"),(0,l.kt)("td",{parentName:"tr",align:null},"gdscript\uff0c\u8bfb\u53d6json\u683c\u5f0f\u6587\u4ef6\u3002\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u4f7f\u7528C#\u8bed\u8a00\u5f00\u53d1\uff0c\u63a8\u8350\u4f7f\u7528\u66f4\u9ad8\u6548\u7684cs-bin\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"typescript-json"),(0,l.kt)("td",{parentName:"tr",align:null},"typescript\uff0c\u8bfb\u53d6json\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protobuf2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210proto2\u8bed\u6cd5\u7684schema\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protobuf3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210proto3\u8bed\u6cd5\u7684schema\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flatbuffers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210flatbuffers\u7684schema\u6587\u4ef6")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"code target\u5fc5\u987b\u4e0edata target\u5339\u914d\uff0c\u5426\u5219\u4f1a\u52a0\u8f7d\u5931\u8d25\u3002")),(0,l.kt)("p",null,"\u4e00\u6b21\u751f\u6210\u591a\u4e2acode target\u65f6\uff0c\u5fc5\u987b\u4e3a\u6bcf\u4e2acode target\u5355\u72ec\u6307\u5b9a\u8f93\u51fa\u76ee\u5f55\uff0c\u5426\u5219\u4f1a\u76f8\u4e92\u8986\u76d6\u3002\u5b9e\u8df5\u4e2d\u4e5f\u4e0d\u53ef\u80fd\u8ba9\u4e0d\u540c\u7684\u4ee3\u7801\u8f93\u51fa\u5230\u540c\u4e00\u4e2a\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("p",null,"Luban\u7684\u5927\u591a\u6570\u5185\u7f6e\u6a21\u677f\u90fd\u4f7f\u7528\u4e86",(0,l.kt)("a",{parentName:"p",href:"./cascadingoption"},"\u5c42\u7ea7\u53c2\u6570(Cascading Option)"),"\u673a\u5236\uff0c\u4f60\u53ea\u9700\u8981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"<code target name>.outputCodeDir"),"\u53c2\u6570\n\u5206\u522b\u4e3a\u6bcf\u4e2atarget\u6307\u5b9a\u8f93\u51fa\u76ee\u5f55\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"data-target"},"Data Target"),(0,l.kt)("p",null,"\u5185\u7f6e\u652f\u6301\u4ee5\u4e0b data target\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"data target"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bin"),(0,l.kt)("td",{parentName:"tr",align:null},"Luban\u72ec\u6709\u7684binary\u683c\u5f0f\uff0c\u7d27\u51d1\u3001\u9ad8\u6548\uff0c\u63a8\u8350\u7528\u4e8e\u6b63\u5f0f\u53d1\u5e03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bin-offset"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4ee5bin\u683c\u5f0f\u5bfc\u51fa\u7684\u6570\u636e\u6587\u4ef6\u4e2d\u6bcf\u4e2a\u8bb0\u5f55\u7684\u7d22\u5f15\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u7528\u4e8e\u4ee5\u8bb0\u5f55\u4e3a\u7c92\u5ea6\u7684lazy\u52a0\u8f7d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"json\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lua"),(0,l.kt)("td",{parentName:"tr",align:null},"lua\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xml"),(0,l.kt)("td",{parentName:"tr",align:null},"xml\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"yml"),(0,l.kt)("td",{parentName:"tr",align:null},"yaml\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bson"),(0,l.kt)("td",{parentName:"tr",align:null},"bson\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgpack"),(0,l.kt)("td",{parentName:"tr",align:null},"msgpack\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protobuf-bin"),(0,l.kt)("td",{parentName:"tr",align:null},"protobuf\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protobuf-json"),(0,l.kt)("td",{parentName:"tr",align:null},"protobuf3\u8d77\u652f\u6301\u7684json\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flatbuffers-json"),(0,l.kt)("td",{parentName:"tr",align:null},"flatbuffers\u652f\u6301\u7684json\u683c\u5f0f")))),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4e00\u6b21\u8f93\u51fa\u591a\u4e2atarget\uff0c\u89e3\u51b3\u529e\u6cd5\u4e0ecode target\u7c7b\u4f3c\u3002\u53ea\u9700\u8981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"<data target name>.outputDataDir"),"\u53c2\u6570\n\u5206\u522b\u4e3a\u6bcf\u4e2atarget\u6307\u5b9a\u8f93\u51fa\u76ee\u5f55\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2acode target\u53ea\u80fd\u8bfb\u53d6\u4e00\u79cd\u76f8\u5339\u914d\u7684\u6570\u636e\u683c\u5f0f\u3002\u4f8b\u5982cs-bin\u751f\u6210\u7684c#\u4ee3\u7801\u53ea\u80fd\u8bfb\u53d6bin\u683c\u5f0f\u6570\u636e\uff0c java-json\u751f\u6210\u7684java\u4ee3\u7801\u53ea\u80fd\u8bfb\u53d6json\u683c\u5f0f\u3002"),(0,l.kt)("h2",{id:"pipeline"},"Pipeline"),(0,l.kt)("p",null,"Luban.Core\u4e2d\u5b9e\u73b0\u4e00\u4e2a\u9ed8\u8ba4\u7ba1\u7ebfDefaultPipeline\uff0c\u540d\u4e3adefault\u3002\u4f7f\u7528\u8005\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684Pipeline\u3002"),(0,l.kt)("h2",{id:"xargs"},"xargs"),(0,l.kt)("p",null,"\u8fd8\u6709\u5927\u91cf\u7684\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u7531\u4e8e\u5b83\u4eec\u662fPipeline\u4e2d\u5404\u4e2a\u53ef\u5b9a\u5236\u6a21\u5757\u72ec\u6709\u7684\u53c2\u6570\uff0c\u56e0\u800c\u8fd9\u4e9b\u53c2\u6570\u6ca1\u653e\u5230\u6807\u51c6\u547d\u4ee4\u884c\u53c2\u6570\u4e2d\uff0c\u7edf\u4e00\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-x --xargs"),"\u53c2\u6570\u6307\u4ee4\u3002"),(0,l.kt)("p",null,"\u5185\u7f6e\u6a21\u5757\u7528\u5230\u7684\u53c2\u6570\u6709\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7528\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputDataDir"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e90\u6570\u636e\u6587\u4ef6\u7684\u6839\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x inputDataDir=/my/datatable/path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputCodeDir"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u76ee\u6807\u7684\u8f93\u51fa\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x outputCodeDir=/my/output/dir")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputDataDir"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u76ee\u6807\u7684\u8f93\u51fa\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x outputDataDir=/my/output/dir")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"codeStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u76ee\u6807\u7684\u547d\u540d\u98ce\u683c\uff0c\u5185\u7f6e\u5b9e\u73b0\u7684Code Target\u90fd\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u4e0e\u76ee\u6807\u8bed\u8a00\u76f8\u5339\u914d\u7684codeStyle\uff0c\u4e0d\u9700\u8981\u663e\u5f0f\u6307\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:null},"none\u3001csharp-default\u3001java-default\u3001go-default\u3001lua-default\u3001typescript-default\u3001cpp-default\u3001python-default"),(0,l.kt)("td",{parentName:"tr",align:null},"-x codeStyle=csharp-default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataExporter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5bfc\u51fa\u5668"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3001default"),(0,l.kt)("td",{parentName:"tr",align:null},"-x dataExporter=default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"codePostprocess"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u540e\u5904\u7406\u5668\uff0c\u53ef\u4ee5\u4e3a\u591a\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u5b9e\u73b0\u4efb\u4f55\u5185\u7f6epostprocess"),(0,l.kt)("td",{parentName:"tr",align:null},"-x codePostProcess=a,b,c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataPostprocess"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u540e\u5904\u7406\u5668\uff0c\u53ef\u4ee5\u4e3a\u591a\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u5b9e\u73b0\u4efb\u4f55\u5185\u7f6epostprocess"),(0,l.kt)("td",{parentName:"tr",align:null},"-x dataPostProcess=a,b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputSaver"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4fdd\u5b58\u5668\uff0c\u9ed8\u8ba4\u4e3alocal\uff0c\u5373\u8f93\u51fa\u5230\u672c\u5730\u76ee\u5f55\uff0c\u5982\u679c\u4e0d\u60f3\u8f93\u51fa\u4efb\u4f55\u6587\u4ef6\uff0c\u53ef\u4ee5\u7528null"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3001local"),(0,l.kt)("td",{parentName:"tr",align:null},"-x outputSaver=local")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"l10n.textProviderName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5316\u6587\u672cProvider"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x l10n.textProviderName=default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"l10n.textProviderFile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5316\u6587\u672c\u6570\u636e\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x l10n.textProviderFile=xxxx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forceLoadDatas"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5373\u4f7f\u6ca1\u6709data target\uff0c\u4e5f\u8981\u52a0\u8f7d\u6e90\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x forceLoadDatas=1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pathValidator.rootDir"),(0,l.kt)("td",{parentName:"tr",align:null},"path\u6821\u9a8c\u5668\u641c\u7d22\u6587\u4ef6\u6240\u7528\u7684\u6839\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-x pathValidator.rootDir=/xx/yy")))),(0,l.kt)("h2",{id:"outputsaver"},"OutputSaver"),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684\u6570\u636e\u7684\u4fdd\u5b58\u5668\u3002\u5f53\u524d\u5b9e\u73b0\u4e86\u4e24\u4e2a\u4fdd\u5b58\u5668local\u548cnull\u3002"),(0,l.kt)("p",null,"local\u5c06\u6587\u4ef6\u4fdd\u5b58\u5230\u672c\u5730\u76ee\u5f55\u3002null\u5219\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002local\u662f\u9ed8\u8ba4\u4f7f\u7528\u7684\u4fdd\u5b58\u5668\uff0c\u4e00\u822c\u751f\u6210\u4efb\u52a1\u4f7f\u7528local\u3002\u5bf9\u4e8e\u53ea\u60f3\u6821\u9a8c\u914d\u7f6e\u8868\uff0c\u4e0d\u60f3\u751f\u6210\u4efb\u4f55\u6570\u636e\uff0c\u4f7f\u7528null\n\u4fdd\u5b58\u5668\u53ef\u4ee5\u8fbe\u5230\u8fd9\u4e2a\u76ee\u6807\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684\u751f\u6210\u547d\u4ee4\u793a\u4f8b\uff0c\u66f4\u591a\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects"},"luban_examples/Projects"),"\u3002"),(0,l.kt)("h3",{id:"unity--c--bin"},"unity + c# + bin"),(0,l.kt)("p",null,"\u793a\u4f8b\u9879\u76ee",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_bin"},"Csharp_Unity_bin"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c cs-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=Assets/Gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n")),(0,l.kt)("h3",{id:"unity--c--json"},"unity + c# + json"),(0,l.kt)("p",null,"\u793a\u4f8b\u9879\u76ee",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_json"},"Csharp_Unity_json"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset GEN_CLIENT=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %GEN_CLIENT% ^\n    -t all ^\n    -c cs-simple-json ^\n    -d json  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=Assets/Gen ^\n    -x outputDataDir=..\\GenerateDatas\\json ^\n    -x pathValidator.rootDir=D:\\workspace2\\luban_examples\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@D:\\workspace2\\luban_examples\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n\n")),(0,l.kt)("h3",{id:"dotnet--c--bin"},"dotnet + c# + bin"),(0,l.kt)("p",null,"\u793a\u4f8b\u9879\u76ee",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_DotNet_bin"},"Csharp_DotNet_bin"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c cs-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=Gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n")),(0,l.kt)("h3",{id:"go--bin"},"go + bin"),(0,l.kt)("p",null,"\u793a\u4f8b\u9879\u76ee ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Go_bin"},"Go_bin"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c go-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json ^\n    -x lubanGoModule=demo/luban\n\n")),(0,l.kt)("h3",{id:"java--bin"},"java + bin"),(0,l.kt)("p",null,"\u793a\u4f8b\u9879\u76ee ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Java_bin"},"Java_bin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c java-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=src/main/gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n")),(0,l.kt)("h3",{id:"\u7528\u4e8e\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\u4e0d\u751f\u6210\u4efb\u4f55\u4ee3\u7801\u548c\u6587\u4ef6"},"\u7528\u4e8e\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\uff0c\u4e0d\u751f\u6210\u4efb\u4f55\u4ee3\u7801\u548c\u6587\u4ef6"),(0,l.kt)("p",null,"\u793a\u4f8b\u9879\u76ee ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/DesignerConfigs"},"ConfigCheck"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json ^\n    -x forceLoadDatas=1\n")),(0,l.kt)("h3",{id:"\u540c\u65f6\u751f\u6210-cs-bin\u548cjava-bin\u4ee3\u7801"},"\u540c\u65f6\u751f\u6210 cs-bin\u548cjava-bin\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c cs-bin ^\n    -c java-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x cs-bin.outputCodeDir=cs_output_path ^\n    -x java-bin.outputCodeDir=java_output_path ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n")))}s.isMDXComponent=!0}}]);