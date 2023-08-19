"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3048],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=o(a),d=n,N=c["".concat(m,".").concat(d)]||c[d]||k[d]||l;return a?r.createElement(N,i(i({ref:e},u),{},{components:a})):r.createElement(N,i({ref:e},u))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[c]="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6498:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={},i="\u4ee3\u7801\u4e0e\u6570\u636e\u751f\u6210",p={unversionedId:"manual/generatecodedata",id:"manual/generatecodedata",title:"\u4ee3\u7801\u4e0e\u6570\u636e\u751f\u6210",description:"\u652f\u6301\u4e3b\u6d41\u6e38\u620f\u5f15\u64ce\u53ca\u5e73\u53f0",source:"@site/docs/manual/generatecodedata.md",sourceDirName:"manual",slug:"/manual/generatecodedata",permalink:"/en/docs/manual/generatecodedata",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u975eexcel\u6570\u636e\u683c\u5f0f",permalink:"/en/docs/manual/otherdatasource"},next:{title:"\u52a0\u8f7d\u914d\u7f6e",permalink:"/en/docs/manual/loadconfigatruntime"}},m={},o=[{value:"\u652f\u6301\u4e3b\u6d41\u6e38\u620f\u5f15\u64ce\u53ca\u5e73\u53f0",id:"\u652f\u6301\u4e3b\u6d41\u6e38\u620f\u5f15\u64ce\u53ca\u5e73\u53f0",level:2},{value:"\u652f\u6301\u4e3b\u6d41\u7684\u70ed\u65b9\u6848",id:"\u652f\u6301\u4e3b\u6d41\u7684\u70ed\u65b9\u6848",level:2},{value:"\u652f\u6301\u6d41\u884c\u7684\u6e38\u620f\u6846\u67b6",id:"\u652f\u6301\u6d41\u884c\u7684\u6e38\u620f\u6846\u67b6",level:2},{value:"\u652f\u6301\u4e3b\u6d41\u7684\u6e38\u620f\u5f00\u53d1\u8bed\u8a00",id:"\u652f\u6301\u4e3b\u6d41\u7684\u6e38\u620f\u5f00\u53d1\u8bed\u8a00",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f",id:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f",level:2},{value:"\u4e0d\u540c\u8bed\u8a00\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b\uff1a",id:"\u4e0d\u540c\u8bed\u8a00\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b",level:2},{value:"\u751f\u6210",id:"\u751f\u6210",level:2}],u={toc:o},c="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4ee3\u7801\u4e0e\u6570\u636e\u751f\u6210"},"\u4ee3\u7801\u4e0e\u6570\u636e\u751f\u6210"),(0,n.kt)("h2",{id:"\u652f\u6301\u4e3b\u6d41\u6e38\u620f\u5f15\u64ce\u53ca\u5e73\u53f0"},"\u652f\u6301\u4e3b\u6d41\u6e38\u620f\u5f15\u64ce\u53ca\u5e73\u53f0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"unity"),(0,n.kt)("li",{parentName:"ul"},"unreal"),(0,n.kt)("li",{parentName:"ul"},"cocos2d-x"),(0,n.kt)("li",{parentName:"ul"},"godot"),(0,n.kt)("li",{parentName:"ul"},"egret"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5bb6\u652f\u6301js\u7684\u5c0f\u6e38\u620f\u5e73\u53f0")),(0,n.kt)("h2",{id:"\u652f\u6301\u4e3b\u6d41\u7684\u70ed\u65b9\u6848"},"\u652f\u6301\u4e3b\u6d41\u7684\u70ed\u65b9\u6848"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HybridCLR"),(0,n.kt)("li",{parentName:"ul"},"{x,t,s...}lua"),(0,n.kt)("li",{parentName:"ul"},"ILRuntime"),(0,n.kt)("li",{parentName:"ul"},"puerts"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6")),(0,n.kt)("h2",{id:"\u652f\u6301\u6d41\u884c\u7684\u6e38\u620f\u6846\u67b6"},"\u652f\u6301\u6d41\u884c\u7684\u6e38\u620f\u6846\u67b6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"skynet"),(0,n.kt)("li",{parentName:"ul"},"ET"),(0,n.kt)("li",{parentName:"ul"},"GameFramework"),(0,n.kt)("li",{parentName:"ul"},"QFramework"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6")),(0,n.kt)("h2",{id:"\u652f\u6301\u4e3b\u6d41\u7684\u6e38\u620f\u5f00\u53d1\u8bed\u8a00"},"\u652f\u6301\u4e3b\u6d41\u7684\u6e38\u620f\u5f00\u53d1\u8bed\u8a00"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"c# (.net framework 4+. dotnet core 3+)"),(0,n.kt)("li",{parentName:"ul"},"java (1.6+)"),(0,n.kt)("li",{parentName:"ul"},"go (1.10+)"),(0,n.kt)("li",{parentName:"ul"},"lua (5.1+)"),(0,n.kt)("li",{parentName:"ul"},"typescript (3.0+)"),(0,n.kt)("li",{parentName:"ul"},"python (3.0+)"),(0,n.kt)("li",{parentName:"ul"},"c++ (11+)\u3002 classic \u7248\u672cLuban\u652f\u6301\uff0c\u6682\u672a\u8fc1\u79fb\u5230\u5f53\u524d\u7248\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"erlang (18+)\u3002 classic \u7248\u672cLuban\u652f\u6301\uff0c\u6682\u672a\u8fc1\u79fb\u5230\u5f53\u524d\u7248\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"rust (1.5+)\u3002classic \u7248\u672cLuban\u652f\u6301\uff0c\u6682\u672a\u8fc1\u79fb\u5230\u5f53\u524d\u7248\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"godot\u3002 classic \u7248\u672cLuban\u652f\u6301\uff0c\u6682\u672a\u8fc1\u79fb\u5230\u5f53\u524d\u7248\u672c\u3002")),(0,n.kt)("p",null,"\u60f3\u81ea\u5b9a\u4e49\u6216\u8005\u6269\u5c55\u652f\u6301\u65b0\u7684\u8bed\u8a00\u975e\u5e38\u5bb9\u6613\u3002"),(0,n.kt)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f"},"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u540c\u4e00\u79cd\u683c\u5f0f\uff0c\u4e3a\u4e0d\u540c\u8bed\u8a00\u751f\u6210\u7684\u6570\u636e\u662f\u5b8c\u5168\u76f8\u540c\u7684")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"binary \u683c\u5f0f\u3002 \u683c\u5f0f\u7d27\u51d1\uff0c\u52a0\u8f7d\u9ad8\u6548\uff0c\u4f46\u57fa\u672c\u4e0d\u5177\u4f53\u53ef\u8bfb\u6027\u3002\u63a8\u8350\u53ea\u7528\u4e8e\u6b63\u5f0f\u53d1\u5e03\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6807\u51c6 json \u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"protobuf")," bin\u548cjson"),(0,n.kt)("li",{parentName:"ul"},"flatbuffers json"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"msgpack")),(0,n.kt)("li",{parentName:"ul"},"lua "),(0,n.kt)("li",{parentName:"ul"},"xml "),(0,n.kt)("li",{parentName:"ul"},"erlang"),(0,n.kt)("li",{parentName:"ul"},"yaml")),(0,n.kt)("h2",{id:"\u4e0d\u540c\u8bed\u8a00\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b"},"\u4e0d\u540c\u8bed\u8a00\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,"\u540c\u4e00\u4e2a\u8bed\u8a00\uff0c\u9700\u8981\u4e3a\u52a0\u8f7d\u4e0d\u540c\u6570\u636e\u683c\u5f0f\u751f\u6210\u4e0d\u540c\u7684\u4ee3\u7801\u3002\u4e5f\u5c31\u662fcode target\u4e0edata target\u5fc5\u987b\u5339\u914d\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"language"),(0,n.kt)("th",{parentName:"tr",align:"center"},"binary"),(0,n.kt)("th",{parentName:"tr",align:"center"},"json"),(0,n.kt)("th",{parentName:"tr",align:"center"},"lua"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"c#"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"java"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"go"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lua"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"c++"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"go"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"python"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"typescript"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rust"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"godot"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"protobuf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h2",{id:"\u751f\u6210"},"\u751f\u6210"),(0,n.kt)("p",null,"\u5177\u4f53\u8bf7\u89c1",(0,n.kt)("a",{parentName:"p",href:"./commandtools"},"\u547d\u4ee4\u884c\u5de5\u5177"),"\u3002"))}k.isMDXComponent=!0}}]);