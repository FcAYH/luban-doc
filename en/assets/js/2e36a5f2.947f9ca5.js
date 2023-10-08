"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Differences from the classic version",l={unversionedId:"manual/migrate",id:"manual/migrate",title:"Differences from the classic version",description:"Compared with the classic version, the current version greatly simplifies the code implementation and is more convenient for customization. So the code adjustment is huge, but the usage difference is not huge.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/migrate.md",sourceDirName:"manual",slug:"/manual/migrate",permalink:"/en/docs/manual/migrate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/en/docs/basic"},next:{title:"design philosophy",permalink:"/en/docs/manual/architecture"}},s={},u=[{value:"Remove unnecessary modules",id:"remove-unnecessary-modules",level:2},{value:"excel format adjustment",id:"excel-format-adjustment",level:2},{value:"Command line parameter adjustment",id:"command-line-parameter-adjustment",level:2},{value:"Type system tweaks",id:"type-system-tweaks",level:2},{value:"Define adjustments",id:"define-adjustments",level:2},{value:"Support real multi-code or data target",id:"support-real-multi-code-or-data-target",level:2},{value:"Removed few languages",id:"removed-few-languages",level:2},{value:"More powerful pipeline and customization capabilities",id:"more-powerful-pipeline-and-customization-capabilities",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"differences-from-the-classic-version"},"Differences from the classic version"),(0,r.kt)("p",null,"Compared with the classic version, the current version greatly simplifies the code implementation and is more convenient for customization. So the code adjustment is huge, but the usage difference is not huge.\nThe data configuration format, generated code format, and generated data format of the current version are basically the same as those of the classic version, but there is a big difference in localization."),(0,r.kt)("h2",{id:"remove-unnecessary-modules"},"Remove unnecessary modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed Proto and DB generation, removing a lot of unnecessary abstractions"),(0,r.kt)("li",{parentName:"ul"},"Remove cloud generation, greatly simplify the code")),(0,r.kt)("h2",{id:"excel-format-adjustment"},"excel format adjustment"),(0,r.kt)("p",null,"Excel A1 unit starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"##"),", the first line will be treated as a comment line, while the old version is compatible as a field name definition line."),(0,r.kt)("h2",{id:"command-line-parameter-adjustment"},"Command line parameter adjustment"),(0,r.kt)("p",null,"Great changes. In order to facilitate customization, the new version supports custom parameters."),(0,r.kt)("h2",{id:"type-system-tweaks"},"Type system tweaks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed the vector2, vector3, and vector4 types, and implemented them by the developer with the type mapper"),(0,r.kt)("li",{parentName:"ul"},"text no longer contains key and value fields, but only key. In the old version, text is an independent type, and in the new version, text is the syntactic sugar of ",(0,r.kt)("inlineCode",{parentName:"li"},"string#text=1"))),(0,r.kt)("h2",{id:"define-adjustments"},"Define adjustments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enum and bean support group parameters"),(0,r.kt)("li",{parentName:"ul"},"The read_from_file attribute of table is adjusted to readSchemaFromFile"),(0,r.kt)("li",{parentName:"ul"},"Remove the externaltype type, change it to typeMapper, and define it directly in the sub-elements of enum and bean")),(0,r.kt)("h2",{id:"support-real-multi-code-or-data-target"},"Support real multi-code or data target"),(0,r.kt)("p",null,"Allows generating multiple code and data targets at once using ",(0,r.kt)("inlineCode",{parentName:"p"},"-c target1 -c target2 ...")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-d target1 -d target2 ..."),". Because of the hierarchical parameter mechanism of the new version, it is possible to specify the output directory for each target."),(0,r.kt)("h2",{id:"removed-few-languages"},"Removed few languages"),(0,r.kt)("p",null,"Erlang support is no longer built-in and implemented by users themselves."),(0,r.kt)("h2",{id:"more-powerful-pipeline-and-customization-capabilities"},"More powerful pipeline and customization capabilities"),(0,r.kt)("p",null,"The pipeline and almost all modules can be individually customized and tweaked without affecting the original Luban code."))}d.isMDXComponent=!0}}]);