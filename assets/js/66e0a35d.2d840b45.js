"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="\u52a0\u8f7d\u914d\u7f6e",l={unversionedId:"manual/loadconfigatruntime",id:"manual/loadconfigatruntime",title:"\u52a0\u8f7d\u914d\u7f6e",description:"\u52a0\u8f7d\u6570\u636e\u4f9d\u8d56\u4e00\u4e9bLuban Runtime\u4ee3\u7801\u3002\u5bf9\u4e8eUnity+C#\uff0c\u5df2\u7ecf\u63d0\u4f9b\u4e86com.code-philosophy.luban\u5305\u3002\u5728Package Manager\u4e2d\u5b89\u88c5com.code-philosophy.luban\u5305\uff0c\u5730\u5740 https//github.com/focus-creative-games/lubanunity\u4e0b\u8f7d)\u3002\u5bf9\u4e8e\u5176\u4ed6\u8bed\u8a00\u8bf7\u5728 \u793a\u4f8b\u9879\u76ee\u4e2d\u627e\u5230\u4e0e\u4f60\u9879\u76ee\u7c7b\u578b\u76f8\u7b26\u7684\u9879\u76ee\uff0c",source:"@site/docs/manual/loadconfigatruntime.md",sourceDirName:"manual",slug:"/manual/loadconfigatruntime",permalink:"/docs/manual/loadconfigatruntime",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7801\u98ce\u683c",permalink:"/docs/manual/codestyle"},next:{title:"\u6570\u636e\u6821\u9a8c\u5668",permalink:"/docs/manual/validator"}},s={},c=[{value:"unity + c# + json",id:"unity--c--json",level:2},{value:"unity\u9879\u76ee\u4e2d\u4f7f\u7528c#\u4ee3\u7801\u5e76\u81ea\u52a8\u5224\u65ad\u52a0\u8f7dbin\u6216json\u914d\u7f6e",id:"unity\u9879\u76ee\u4e2d\u4f7f\u7528c\u4ee3\u7801\u5e76\u81ea\u52a8\u5224\u65ad\u52a0\u8f7dbin\u6216json\u914d\u7f6e",level:2},{value:"\u5176\u4ed6\u9879\u76ee\u7c7b\u578b",id:"\u5176\u4ed6\u9879\u76ee\u7c7b\u578b",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u52a0\u8f7d\u914d\u7f6e"},"\u52a0\u8f7d\u914d\u7f6e"),(0,a.kt)("p",null,"\u52a0\u8f7d\u6570\u636e\u4f9d\u8d56\u4e00\u4e9bLuban Runtime\u4ee3\u7801\u3002\u5bf9\u4e8eUnity+C#\uff0c\u5df2\u7ecf\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"com.code-philosophy.luban"),"\u5305\u3002\u5728Package Manager\u4e2d\u5b89\u88c5com.code-philosophy.luban\u5305\uff0c\u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/focus-creative-games/luban_unity.git"),"(\u6216\u8005\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/focus-creative-games/luban_unity"),"\u4e0b\u8f7d)\u3002\u5bf9\u4e8e\u5176\u4ed6\u8bed\u8a00\u8bf7\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects"},"\u793a\u4f8b\u9879\u76ee"),"\u4e2d\u627e\u5230\u4e0e\u4f60\u9879\u76ee\u7c7b\u578b\u76f8\u7b26\u7684\u9879\u76ee\uff0c\n\u4ece\u8be5\u9879\u76ee\u4e2d\u590d\u5236Luban\u76f8\u5173\u7684Runtime\u4ee3\u7801\u3002"),(0,a.kt)("h2",{id:"unity--c--json"},"unity + c# + json"),(0,a.kt)("p",null,"\u5bf9\u5e94\u793a\u4f8b\u9879\u76ee\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_json"},"Csharp_Unity_json"),"\uff0c\n\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/LubanLib"),"\u76ee\u5f55\u590d\u5236\u5230\u4f60\u7684\u9879\u76ee\uff0c\u5728'Player Building'\u4e2d\u5f00\u542f'unsafe code'\u652f\u6301\u3002\u63a5\u7740\u53ea\u9700\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u52a0\u8f7d\u6240\u6709\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'\n    void Load()\n    {\n        // \u4e00\u884c\u4ee3\u7801\u53ef\u4ee5\u52a0\u8f7d\u6240\u6709\u914d\u7f6e\u3002 cfg.Tables \u5305\u542b\u6240\u6709\u8868\u7684\u4e00\u4e2a\u5b9e\u4f8b\u5b57\u6bb5\u3002\n        var tables = new cfg.Tables(Loader);\n        // \u8bbf\u95ee\u4e00\u4e2a\u5355\u4f8b\u8868\n        Console.WriteLine(tables.TbGlobal.Name);\n        // \u8bbf\u95ee\u666e\u901a\u7684 key-value \u8868\n        Console.WriteLine(tables.TbItem.Get(12).Name);\n        // \u652f\u6301 operator []\u7528\u6cd5\n        Console.WriteLine(tables.TbMail[1001].Desc);\n    }\n\n    private static JSONNode LoadJson(string file)\n    {\n        return JSON.Parse(File.ReadAllText($"{your_json_dir}/{file}.json", System.Text.Encoding.UTF8));\n    }\n\n')),(0,a.kt)("h2",{id:"unity\u9879\u76ee\u4e2d\u4f7f\u7528c\u4ee3\u7801\u5e76\u81ea\u52a8\u5224\u65ad\u52a0\u8f7dbin\u6216json\u914d\u7f6e"},"unity\u9879\u76ee\u4e2d\u4f7f\u7528c#\u4ee3\u7801\u5e76\u81ea\u52a8\u5224\u65ad\u52a0\u8f7dbin\u6216json\u914d\u7f6e"),(0,a.kt)("p",null,"\u5f00\u53d1\u671f\u5e0c\u671b\u4f7f\u7528json\u5bfc\u51fa\u683c\u5f0f\uff0c\u4f46\u4e3a\u4e86\u8282\u7ea6\u5bfc\u51fa\u6587\u4ef6\u5927\u5c0f\u4ee5\u53ca\u63d0\u9ad8\u52a0\u8f7d\u6027\u80fd\uff0c\u5e0c\u671b\u4f7f\u7528bin\u5bfc\u51fa\u683c\u5f0f\u3002\u901a\u8fc7\u53cd\u5c04\u521b\u5efacfg.Tables\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u505a\u5230\u4e0d\u6539\u4ee3\u7801\uff0c\u81ea\u52a8\u9002\u5e94\u8fd9\u4e24\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    void Start()\n    {\n        var tablesCtor = typeof(cfg.Tables).GetConstructors()[0];\n        var loaderReturnType = tablesCtor.GetParameters()[0].ParameterType.GetGenericArguments()[1];\n        // \u6839\u636ecfg.Tables\u7684\u6784\u9020\u51fd\u6570\u7684Loader\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u51b3\u5b9a\u4f7f\u7528json\u8fd8\u662fByteBuf Loader\n        System.Delegate loader = loaderReturnType == typeof(ByteBuf) ?\n            new System.Func<string, ByteBuf>(LoadByteBuf)\n            : (System.Delegate)new System.Func<string, JSONNode>(LoadJson);\n        var tables = (cfg.Tables)tablesCtor.Invoke(new object[] {loader});\n\n        // \u8bbf\u95ee\u4e00\u4e2a\u5355\u4f8b\u8868\n        Console.WriteLine(tables.TbGlobal.Name);\n        // \u8bbf\u95ee\u666e\u901a\u7684 key-value \u8868\n        Console.WriteLine(tables.TbItem.Get(12).Name);\n        // \u652f\u6301 operator []\u7528\u6cd5\n        Console.WriteLine(tables.TbMail[1001].Desc);\n    }\n\n    private static JSONNode LoadJson(string file)\n    {\n        return JSON.Parse(File.ReadAllText($"{your_json_dir}/{file}.json", System.Text.Encoding.UTF8));\n    }\n\n    private static ByteBuf LoadByteBuf(string file)\n    {\n        return new ByteBuf(File.ReadAllBytes($"{your_json_dir}/{file}.bytes"));\n    }\n')),(0,a.kt)("h2",{id:"\u5176\u4ed6\u9879\u76ee\u7c7b\u578b"},"\u5176\u4ed6\u9879\u76ee\u7c7b\u578b"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects"},"Projects"),"\u4e2d\u627e\u5230\u4e0e\u4f60\u9879\u76ee\u7c7b\u578b\u76f8\u7b26\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u53c2\u8003\u5176\u52a0\u8f7d\n\u4ee3\u7801\u5373\u53ef\u3002"))}m.isMDXComponent=!0}}]);