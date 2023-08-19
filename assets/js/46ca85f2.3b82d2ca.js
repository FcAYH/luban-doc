"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={},a="Editor\u652f\u6301",i={unversionedId:"manual/editor",id:"manual/editor",title:"Editor\u652f\u6301",description:"GamePlay\u76f8\u5173\u529f\u80fd\u7ecf\u5e38\u6709\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u7684\u9700\u6c42\uff0c\u800c\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u7684\u6570\u636e\u5f80\u5f80\u4ee5\u8bb0\u5f55\u4e3a\u5355\u4f4d\uff0c\u6570\u636e\u7ed3\u6784\u8f83\u4e3a\u590d\u6742\uff0c\u6bcf\u4e2a\u8bb0\u5f55\u4fdd\u5b58\u4e3a\u5355\u72ec\u7684json\u6587\u4ef6\u3002luban\u652f\u6301\u8fd9\u7c7b\u7f16\u8f91\u5668\u5de5\u4f5c\u6d41\u3002",source:"@site/docs/manual/editor.md",sourceDirName:"manual",slug:"/manual/editor",permalink:"/docs/manual/editor",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[{value:"\u751f\u6210\u76f8\u5173\u53c2\u6570",id:"\u751f\u6210\u76f8\u5173\u53c2\u6570",level:2},{value:"\u751f\u6210",id:"\u751f\u6210",level:2},{value:"Unity",id:"unity",level:2},{value:"UE4",id:"ue4",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"editor\u652f\u6301"},"Editor\u652f\u6301"),(0,l.kt)("p",null,"GamePlay\u76f8\u5173\u529f\u80fd\u7ecf\u5e38\u6709\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u7684\u9700\u6c42\uff0c\u800c\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u7684\u6570\u636e\u5f80\u5f80\u4ee5\u8bb0\u5f55\u4e3a\u5355\u4f4d\uff0c\u6570\u636e\u7ed3\u6784\u8f83\u4e3a\u590d\u6742\uff0c\u6bcf\u4e2a\u8bb0\u5f55\u4fdd\u5b58\u4e3a\u5355\u72ec\u7684json\u6587\u4ef6\u3002luban\u652f\u6301\u8fd9\u7c7b\u7f16\u8f91\u5668\u5de5\u4f5c\u6d41\u3002"),(0,l.kt)("p",null,"luban\u751f\u6210\u7f16\u8f91\u5668\u8bfb\u5199\u8bb0\u5f55\u7684json\u6587\u4ef6\u6240\u7528\u7684\u4ee3\u7801\uff0c\u7f16\u8f91\u5668\u5f00\u53d1\u8005\u53ea\u9700\u4f7f\u7528Load\u548cSave\u51fd\u6570\u5c31\u80fd\u52a0\u8f7d\u548c\u4fdd\u5b58\u8bb0\u5f55\u4e3a\u7b26\u5408Luban\u89e3\u6790\u5668\u914d\u7f6e\u89c4\u5219\u7684json\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u751f\u6210\u76f8\u5173\u53c2\u6570"},"\u751f\u6210\u76f8\u5173\u53c2\u6570"),(0,l.kt)("p",null,"\u751f\u6210\u7684editor\u4ee3\u7801\u7c7b\u7684\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u4e3a  \"editor.\" + topmodule \u3002\u53ef\u4ee5\u901a\u8fc7root\u5b9a\u4e49\u6587\u4ef6\u4e2d\u7684option 'editor.topmodule'\u6765\u4fee\u6539\u8fd9\u4e2a\u9ed8\u8ba4\u503c\uff0c\u793a\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<root>\n    <topmodule name="cfg"/>\n    <option name="editor.topmodule" value="MyEditorConfig"/>\n</root>\n')),(0,l.kt)("h2",{id:"\u751f\u6210"},"\u751f\u6210"),(0,l.kt)("p",null,"luban\u4e3a\u7f16\u8f91\u5668\u751f\u6210\u7684\u4ee3\u7801\u8ddf\u4e3a\u9879\u76ee\u8fd0\u884c\u65f6\u4f7f\u7528\u7684\u4ee3\u7801\u5f88\u4e0d\u4e00\u6837\uff0c\u6709\u4ee5\u4e0b\u51e0\u4e2a\u5173\u952e\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u751f\u6210Table\u4ee3\u7801\u3002 \u56e0\u4e3a\u7f16\u8f91\u5668\u4e00\u822c\u4ee5\u8bb0\u5f55\u4e3a\u5355\u4f4d\u64cd\u4f5c\u6570\u636e\uff0c\u6ca1\u5fc5\u8981\u751f\u6210Table\u52a0\u8f7d\u548c\u4fdd\u5b58\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u751f\u6210Tables\u4ee3\u7801\u3002 \u56e0\u4e3a\u6ca1\u8fd9\u4e2a\u9700\u8981\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3aenum\u989d\u5916\u751f\u6210\u751f\u6210\u5143\u6570\u636exxx_Metadata\u7c7b\uff0c\u5b9a\u4e49\u4e86\u6240\u6709enum\u679a\u4e3e\u9879\u7684\u5143\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684bean\u4ee3\u7801\u4e2d\u5305\u542b\u4e86ToJson\u548cFromJson\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"datetime\u7c7b\u578b\u5bf9\u5e94string\u7c7b\u578b,text\u5bf9\u5e94EditorText\u7c7b")),(0,l.kt)("h2",{id:"unity"},"Unity"),(0,l.kt)("p",null,"\u53d6 --gen_types code_cs_unity_editor_json , \u751f\u6210\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u53ef\u53c2\u8003\u793a\u4f8b\u9879\u76ee",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_Editor_json"},"Csharp_Unity_Editor_json")),(0,l.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u52a0\u8f7d\nvar skill = new editor.skill.Skill();\nskill.LoadJsonFile("10001.json");\nUnityEngine.Debug.Log("skill id:{0}, name:{1}", skill.Id, skill.Name);\n\n// \u4fdd\u5b58\nvar skill = new editor.skill.Skill();\nskill.Id = 10001;\nskill.Name = "attack";\nskill.SaveJsonFile("10001.json");\n')),(0,l.kt)("h2",{id:"ue4"},"UE4"),(0,l.kt)("p",null,"\u53d6 --gen_types code_cpp_ue_editor_json\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u8fd8\u672a\u4e25\u8c28\u6d4b\u8bd5\u3002\u7b49\u6709\u5b9e\u9645\u9700\u6c42\u65f6\u518d\u6d4b\u8bd5\u3002"))}d.isMDXComponent=!0}}]);