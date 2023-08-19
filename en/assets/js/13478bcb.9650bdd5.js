"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,d=m["".concat(o,".").concat(s)]||m[s]||b[s]||l;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,u[1]=i;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},u="\u6269\u5c55Luban\u5b9e\u73b0",i={unversionedId:"manual/extendluban",id:"manual/extendluban",title:"\u6269\u5c55Luban\u5b9e\u73b0",description:"\u5728\u6743\u8861\u7075\u6d3b\u6027\u548c\u7b80\u4fbf\u6027\u540e\uff0cluban\u6ca1\u6709\u4f7f\u7528\u63d2\u4ef6\u673a\u5236\uff0c\u800c\u662f\u5728\u6e90\u7801\u5de5\u7a0b\u4e2d\u65b0\u589e\u4e00\u4e9b\u6269\u5c55\u9879\u76ee\u6765\u5b9e\u73b0\u6269\u5c55\u3002",source:"@site/docs/manual/extendluban.md",sourceDirName:"manual",slug:"/manual/extendluban",permalink:"/en/docs/manual/extendluban",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/en/docs/manual/bestpractices"},next:{title:"FAQ",permalink:"/en/docs/help/faq"}},o={},p=[{value:"\u521b\u5efa\u6269\u5c55\u6a21\u5757",id:"\u521b\u5efa\u6269\u5c55\u6a21\u5757",level:2},{value:"\u53ef\u6269\u5c55\u7684\u90e8\u5206",id:"\u53ef\u6269\u5c55\u7684\u90e8\u5206",level:2},{value:"\u5c06Luban\u5d4c\u5165\u5230\u5176\u4ed6C#\u5de5\u7a0b\u4e2d",id:"\u5c06luban\u5d4c\u5165\u5230\u5176\u4ed6c\u5de5\u7a0b\u4e2d",level:2}],c={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6269\u5c55luban\u5b9e\u73b0"},"\u6269\u5c55Luban\u5b9e\u73b0"),(0,a.kt)("p",null,"\u5728\u6743\u8861\u7075\u6d3b\u6027\u548c\u7b80\u4fbf\u6027\u540e\uff0cluban\u6ca1\u6709\u4f7f\u7528\u63d2\u4ef6\u673a\u5236\uff0c\u800c\u662f\u5728\u6e90\u7801\u5de5\u7a0b\u4e2d\u65b0\u589e\u4e00\u4e9b\u6269\u5c55\u9879\u76ee\u6765\u5b9e\u73b0\u6269\u5c55\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u6269\u5c55\u6a21\u5757"},"\u521b\u5efa\u6269\u5c55\u6a21\u5757"),(0,a.kt)("p",null,"\u6e90\u7801\u4e2d\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Luban.Core"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Luban"),"\u4ee5\u5916\u7684\u9879\u76ee\u90fd\u662f\u6269\u5c55\u9879\u76ee\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u53c2\u8003\u5b83\u4eec\u7ed9Luban\u6dfb\u52a0\u6269\u5c55\u6a21\u5757\u3002\nSimpleLauncher\u4f1a\u81ea\u52a8\u641c\u7d22\u6a21\u5757\u540d\u4e2d\u5305\u542bLuban\u7684\u6a21\u5757\uff0c\u56e0\u6b64",(0,a.kt)("strong",{parentName:"p"},"\u6269\u5c55\u6a21\u5757\u540d\u4e2d\u6700\u597d\u90fd\u5305\u542bLuban"),"\uff0c\u5426\u5219\u9700\u8981\n\u81ea\u5df1\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleLauncher.ScanResigerAssembly"),"\u6ce8\u518c\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u7c7b\u3002"),(0,a.kt)("p",null,"\u4ee5\u521b\u5efaLuban.Demo\u6a21\u5757\u4e3a\u4f8b\uff0c\u521b\u5efa\u6269\u5c55\u6a21\u5757\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u9879\u76ee Luban.Demo"),(0,a.kt)("li",{parentName:"ul"},"\u5728Luban\u9879\u76ee\u4e2d\u5f15\u7528Luban.Demo\u9879\u76ee"),(0,a.kt)("li",{parentName:"ul"},"Luban.Demo\u9879\u76ee\u4e2d\u65b0\u589e\u5bf9Luban.Core\u7684\u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u4eceLuban.CSharp\u9879\u76ee\u4e2d\u590d\u5236AssemblyInfo.cs\u5230\u672c\u76ee\u5f55")),(0,a.kt)("h2",{id:"\u53ef\u6269\u5c55\u7684\u90e8\u5206"},"\u53ef\u6269\u5c55\u7684\u90e8\u5206"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pipeline"),(0,a.kt)("li",{parentName:"ul"},"Schema Collector"),(0,a.kt)("li",{parentName:"ul"},"Data Loader"),(0,a.kt)("li",{parentName:"ul"},"CodeTarget"),(0,a.kt)("li",{parentName:"ul"},"DataTarget"),(0,a.kt)("li",{parentName:"ul"},"DataValidator"),(0,a.kt)("li",{parentName:"ul"},"CodeStyle"),(0,a.kt)("li",{parentName:"ul"},"PostProcessor"),(0,a.kt)("li",{parentName:"ul"},"OutputSaver"),(0,a.kt)("li",{parentName:"ul"},"TextProvider")),(0,a.kt)("h2",{id:"\u5c06luban\u5d4c\u5165\u5230\u5176\u4ed6c\u5de5\u7a0b\u4e2d"},"\u5c06Luban\u5d4c\u5165\u5230\u5176\u4ed6C#\u5de5\u7a0b\u4e2d"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u9700\u8981\u5728\u5176\u4ed6\u5de5\u5177\u4e2d\u5d4c\u5165Luban\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528Luban\u547d\u4ee4\u884c\u5de5\u5177\u3002\u5d4c\u5165\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f15\u7528Luban.Core\u9879\u76ee\uff0c\u5f3a\u70c8\u5efa\u8bae\u4e5f\u5f15\u5165\u90a3\u51e0\u4e2aLuban.XXX.Builtin\u9879\u76ee\uff0c\u56e0\u4e3a\u5b83\u4eec\u5305\u542b\u4e86Luban\u6240\u9700\u8981\u7684\u6838\u5fc3\u9ed8\u8ba4\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528SimpleLauncher\u7c7b\u521d\u59cb\u5316\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528DefaultPipeline\u6216\u8005\u81ea\u5b9a\u4e49Pipeline\u8fd0\u884c\u751f\u6210\u7ba1\u7ebf")))}b.isMDXComponent=!0}}]);