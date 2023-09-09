"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),x=a,m=d["".concat(p,".").concat(x)]||d[x]||s[x]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=x;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},7139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="\u672c\u5730\u5316",o={unversionedId:"manual/l10n",id:"manual/l10n",title:"\u672c\u5730\u5316",description:"\u652f\u6301\u591a\u79cd\u672c\u5730\u5316\u673a\u5236\uff0c\u5b83\u4eec\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u3002",source:"@site/docs/manual/l10n.md",sourceDirName:"manual",slug:"/manual/l10n",permalink:"/docs/manual/l10n",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636etag",permalink:"/docs/manual/tag"},next:{title:"\u4e0eclassic\u7248\u672c\u5dee\u5f02",permalink:"/docs/manual/migrate"}},p={},u=[{value:"\u65f6\u95f4\u672c\u5730\u5316",id:"\u65f6\u95f4\u672c\u5730\u5316",level:2},{value:"text\u672c\u5730\u5316",id:"text\u672c\u5730\u5316",level:2},{value:"ITextProvider",id:"itextprovider",level:3},{value:"DefaultTextProvider",id:"defaulttextprovider",level:3},{value:"\u6536\u96c6\u914d\u7f6e\u8868\u4e2d\u6240\u6709text\u7684\u5217\u8868",id:"\u6536\u96c6\u914d\u7f6e\u8868\u4e2d\u6240\u6709text\u7684\u5217\u8868",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u672c\u5730\u5316"},"\u672c\u5730\u5316"),(0,a.kt)("p",null,"\u652f\u6301\u591a\u79cd\u672c\u5730\u5316\u673a\u5236\uff0c\u5b83\u4eec\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u65f6\u95f4\u672c\u5730\u5316"},"\u65f6\u95f4\u672c\u5730\u5316"),(0,a.kt)("p",null,"datetime\u7c7b\u578b\u6570\u636e\u4f1a\u6839\u636e\u76ee\u6807\u65f6\u533a\uff0c\u8f93\u51fa\u76f8\u5e94\u65f6\u523b\u7684UTC\u65f6\u95f4\uff0c\u65b9\u4fbf\u7a0b\u5e8f\u4f7f\u7528\u3002\u9ed8\u8ba4\u4f7f\u7528\u7684\u65f6\u533a\u4e3a\u672c\u5730\u65f6\u533a\u3002\u901a\u8fc7\u547d\u4ee4\u884c\n\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"--timeZone"),"\u6765\u6307\u5b9a\u76ee\u6807\u65f6\u533a\u3002"),(0,a.kt)("p",null,'\u8be5\u65f6\u533a\u4e3alinux\u6216win\u4e0b\u7684\u65f6\u533a\u540d\uff0c\u4f8b\u5982: -t "Asia/Shanghai" \u6216\u8005 -t "China Standard Time"  \u6307\u5b9a\u76ee\u6807\u65f6\u533a\u4e3a \u4e9a\u6d32\u4e0a\u6d77\uff08\u4e5f\u5373\u5317\u4eac\u65f6\u95f4\uff09'),(0,a.kt)("h2",{id:"text\u672c\u5730\u5316"},"text\u672c\u5730\u5316"),(0,a.kt)("p",null,"\u7531\u4e8e\u672c\u5730\u5316\u9700\u6c42\u7684\u5e7f\u6cdb\u6027\uff0c\u7279\u5730\u63d0\u4f9btext\u7c7b\u578b\u652f\u6301\u5bf9\u5e94\u9700\u6c42\u3002text\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u8bed\u6cd5\u7cd6\uff0c\u5e76\u4e0d\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7c7b\u578b\u3002\u5b83\u7b49\u4ef7",(0,a.kt)("inlineCode",{parentName:"p"},"string#text=1"),"\uff0c\u5373\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"text=1")," tag\u7684string\n\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"text\u8bed\u4e49\u4e0a\u5bf9\u5e94\u672c\u5730\u5316\u5b57\u7b26\u4e32\u7684key\uff0cLuban\u5728\u6570\u636e\u6821\u9a8c\u5668\u4e2d\u4f1a\u68c0\u67e5\u8fd9\u4e2akey\u7684\u6709\u6548\u6027\u3002"),(0,a.kt)("h3",{id:"itextprovider"},"ITextProvider"),(0,a.kt)("p",null,"ITextProvider\u7528\u4e8e\u63d0\u4f9b\u6709\u6548\u7684text\u6620\u5c04\u8868\uff0c\u8fd9\u6837TextValidator\u53ef\u4ee5\u68c0\u67e5\u672c\u5730\u5316key\u7684\u6709\u6548\u6027\u3002\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-x l10n.textProviderName=xxx"),"\u6307\u5b9a\u4f60\u4f7f\u7528TextProvider\uff0c\u9ed8\u8ba4\u4e3a\n",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"\uff0c\u5bf9\u5e94DefaultTextProvider\u3002\u4f60\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684TextProvider\u3002"),(0,a.kt)("h3",{id:"defaulttextprovider"},"DefaultTextProvider"),(0,a.kt)("p",null,"DefaultTextProvider\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-x l10n.textProviderFile=xxx"),"\u6307\u5b9a\u672c\u5730\u5316key-value\u7684\u6587\u4ef6\u3002DefaultTextProvider\u4f7f\u7528builtin DataLoader\u8bfb\u53d6\u672c\u5730\u5316\u6587\u4ef6\u5185\u6570\u636e\u3002\nDefaultTextProvider\u5047\u5b9a\u8868\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\n<bean name="TextInfo">\n  <var name="key" type="string"/>\n</bean>\n<table name="TbTextInfo" value="TextInfo" input="xxx"/>\n')),(0,a.kt)("p",null,"\u672c\u5730\u5316\u6587\u4ef6\u7684key\u5b57\u6bb5\u540d\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u4e5f\u652f\u6301\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-x l10n.key=you_key"),"\u6765\u6307\u5b9akey\u5b57\u6bb5\u540d\u3002"),(0,a.kt)("p",null,"\u672c\u5730\u5316\u6570\u636e\u6587\u4ef6\u53ef\u4ee5\u662fexcel\u683c\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u662fjson\u3001xml\u4e4b\u7c7b\u7684\u683c\u5f0f\uff0c\u53ea\u8981\u5b83\u7b26\u5408luban\u7684builtin DataLoader\u7684\u683c\u5f0f\u6807\u51c6\uff08\u89c1",(0,a.kt)("a",{parentName:"p",href:"excel"},"excel\u683c\u5f0f"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"otherdatasource"},"\u975eexcel\u683c\u5f0f"),"\u6587\u6863\uff09\u5373\u53ef\u3002\n\u5f53\u4f7f\u7528json\u683c\u5f0f\u65f6\uff0c\u7531\u4e8e\u4e0d\u53ef\u80fd\u5728\u4e00\u4e2ajson\u6587\u4ef6\u4e2d\u53ea\u653e\u4e00\u4e2atext\u6570\u636e\uff0c\u5b9e\u8df5\u4e2d\u4f1a\u8ba9json\u6587\u4ef6\u4e2d\u5305\u542btext\u5217\u8868\uff0c\u53ef\u4ee5\u7528\u590d\u5408\u6570\u636e\u6587\u4ef6\u683c\u5f0f\uff08\u89c1",(0,a.kt)("a",{parentName:"p",href:"otherdatasource"},"\u975eexcel\u683c\u5f0f"),"\uff09\n\u586b\u3002\u4ee5\u4e0b\u4e3a\u793a\u4f8bjson\u683c\u5f0f\u7684\u672c\u5730\u5316\u6587\u672c\u8868\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"-x l10.textProviderFile=*@your_text_file.json")," \u6307\u5b9a\u8bfb\u5165text\u5217\u8868\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"text",src:n(8091).Z,width:"494",height:"197"})),(0,a.kt)("h3",{id:"\u6536\u96c6\u914d\u7f6e\u8868\u4e2d\u6240\u6709text\u7684\u5217\u8868"},"\u6536\u96c6\u914d\u7f6e\u8868\u4e2d\u6240\u6709text\u7684\u5217\u8868"),(0,a.kt)("p",null,"DataTarget text-list\u4f1a\u6536\u96c6\u914d\u7f6e\u8868\u4e2d\u51fa\u73b0\u7684\u6240\u6709text\u6570\u636e\uff0c\u6309\u4ece\u5c0f\u5230\u5927\u6392\u5e8f\u540e\uff0c\u8f93\u51fa\u6587\u4ef6\u3002\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"l10n.textListFile"),"\u9009\u9879\u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\uff0c\u8be6\u7ec6\u89c1",(0,a.kt)("a",{parentName:"p",href:"./commandtools"},"\u547d\u4ee4\u884c\u5de5\u5177"),"\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bat"},"dotnet Luban.dll -t all -d text-list ^\n--conf D:\\workspace2\\luban_examples\\DataTables\\luban.conf ^\n--validationFailAsError ^\n-x outputDataDir=D:\\workspace2\\luban_examples\\Projects\\GenerateDatas\\text ^\n-x l10n.textListFile=texts.txt\n")))}s.isMDXComponent=!0},8091:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/l10n_text-cfb7e64cd9dc44ecda12fce66b489f72.jpg"}}]);