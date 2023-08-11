"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=s(n),d=a,m=i["".concat(c,".").concat(d)]||i[d]||_[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[i]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="\u6e90\u6570\u636e\u8f6c\u6362",u={unversionedId:"manual/convert",id:"manual/convert",title:"\u6e90\u6570\u636e\u8f6c\u6362",description:"Luban\u652f\u6301\u5bf9\u5404\u79cd\u683c\u5f0f\u7684\u6570\u636e\u8fdb\u884c\u8f6c\u6362\uff0c\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570\uff1a",source:"@site/docs/manual/convert.md",sourceDirName:"manual",slug:"/manual/convert",permalink:"/docs/manual/convert",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editor\u652f\u6301",permalink:"/docs/manual/editor"},next:{title:"\u672c\u5730\u5316",permalink:"/docs/manual/l10n"}},c={},s=[{value:"\u8f6c\u6362\u4e3ajson",id:"\u8f6c\u6362\u4e3ajson",level:3},{value:"\u8f6c\u6362\u4e3alua",id:"\u8f6c\u6362\u4e3alua",level:3},{value:"\u8f6c\u6362\u4e3axlsx",id:"\u8f6c\u6362\u4e3axlsx",level:3}],p={toc:s},i="wrapper";function _(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6e90\u6570\u636e\u8f6c\u6362"},"\u6e90\u6570\u636e\u8f6c\u6362"),(0,a.kt)("p",null,"Luban\u652f\u6301\u5bf9\u5404\u79cd\u683c\u5f0f\u7684\u6570\u636e\u8fdb\u884c\u8f6c\u6362\uff0c\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"convert_json \u5c06\u6e90\u6570\u636e\u5168\u90e8\u8f6c\u6362\u4e3ajson\u6e90\u6570\u636e\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"convert_lua \u5c06\u6e90\u6570\u636e\u5168\u90e8\u8f6c\u6362\u4e3alua\u6e90\u6570\u636e\u683c\u5f0f\uff0c\u6bcf\u4e2a\u8bb0\u5f55\u5360\u4e00\u4e2a\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"convert_xlsx \u5c06\u6e90\u6570\u636e\u5168\u90e8\u8f6c\u6362\u4e3axlsx\u683c\u5f0f\uff0c\u6bcf\u4e2a\u8868\u5360\u4e00\u4e2a\u6587\u4ef6")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0cluban\u53ef\u4ee5\u5728\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u4e4b\u95f4\u4efb\u610f\u8fdb\u884c\u683c\u5f0f\u8f6c\u6362\uff0c\u8fd9\u662fLuban\u7684\u901a\u7528\u529f\u80fd\uff0c\u53ea\u9700\u8981\u6b63\u786e\u5b9a\u4e49\u548c\u8bbe\u7f6e\u53c2\u6570\uff0c\u66f4\u52a0\u5b8c\u6574\u529f\u80fd\u89c1luban_example\u4e2dProjects\u76ee\u5f55\u4e0b\u7684\u66f4\u591a\u5b9e\u4f8b\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u4ee5luban_example\u4e2dProjects/ConvertDatas\u76ee\u5f55\u4e0b\u51e0\u4e2a\u9879\u76ee\u4e3a\u4f8b\u3002"),(0,a.kt)("h3",{id:"\u8f6c\u6362\u4e3ajson"},"\u8f6c\u6362\u4e3ajson"),(0,a.kt)("p",null,"\u4f60\u7684\u751f\u6210\u547d\u4ee4\u5982\u4e0b\u5927\u7565\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," %GEN_CLIENT% -h %LUBAN_SERVER_IP% -j cfg --^\n -d %CONF_ROOT%\\Defines\\__root__.xml ^\n --input_data_dir %CONF_ROOT%\\Datas ^\n --output_data_dir convert_json ^\n --gen_types convert_json ^\n -s all\n")),(0,a.kt)("p",null,'\u5373--gen_types\u53c2\u6570\u53d6"convert_json"\uff0c\u5c06Datas\u4e2d\u7684\u6570\u636e\u8f6c\u6362\u4e3ajson\u683c\u5f0f\uff0c\u8f93\u51fa\u76ee\u5f55\u4e3aconvert_json\u3002'),(0,a.kt)("h3",{id:"\u8f6c\u6362\u4e3alua"},"\u8f6c\u6362\u4e3alua"),(0,a.kt)("p",null,"\u4f60\u7684\u547d\u4ee4\u884c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," %GEN_CLIENT% -h %LUBAN_SERVER_IP% -j cfg --^\n -d %CONF_ROOT%\\Defines\\__root__.xml ^\n --input_data_dir %CONF_ROOT%\\Datas ^\n --output_data_dir convert_lua ^\n --gen_types convert_lua ^\n -s all\n")),(0,a.kt)("p",null,'\u5373--gen_types\u53c2\u6570\u53d6"convert_lua"\uff0c\u5c06\u6307\u5b9a\u6570\u636e\u8f6c\u6362\u4e3alua\u683c\u5f0f\uff0c\u8f93\u51fa\u76ee\u5f55\u4e3aconvert_lua\u3002'),(0,a.kt)("h3",{id:"\u8f6c\u6362\u4e3axlsx"},"\u8f6c\u6362\u4e3axlsx"),(0,a.kt)("p",null,"\u5b9e\u4f8b\u4e2d\u5c06json\u683c\u5f0f\u8f6c\u5316\u4e3axlsx\uff0c\u547d\u4ee4\u884c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," %GEN_CLIENT% -h %LUBAN_SERVER_IP% -j cfg --^\n -d %CONF_ROOT%\\Defines\\__root__.xml ^\n --input_data_dir %CONF_ROOT%\\Datas ^\n --input:convert:data_dir convert_json ^\n --output_data_dir conver_json_to_xlsx ^\n --gen_types convert_xlsx ^\n -s all\n")),(0,a.kt)("p",null,'--gen_types\u53c2\u6570\u53d6"convert_xlsx"\uff0c\u6570\u636e\u6e90\u76ee\u5f55\u4e3aconvert_json\uff0c\u5c06\u6307\u5b9a\u6570\u636e\u8f6c\u6362\u4e3axlsx\u683c\u5f0f\uff0c\u8f93\u51fa\u76ee\u5f55\u4e3aconvert_json_to_xlsx\u3002',(0,a.kt)("br",{parentName:"p"}),"\n","\u9700\u8981\u6ce8\u610f\uff1a\u8f6c\u6362\u540e\u7684xlsx\u683c\u5f0f\u53ef\u80fd\u4e0d\u7b26\u5408Luban\u914d\u7f6e\u8981\u6c42\uff0c\u5982\u4f55\u518d\u9700\u8981\u4f7f\u7528Luban\u5bfc\u51fa\uff0c\u5219\u9700\u8981\u4fee\u6539\u683c\u5f0f\u3002"))}_.isMDXComponent=!0}}]);