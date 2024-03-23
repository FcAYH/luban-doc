"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={},o="localization",r={unversionedId:"manual/l10n",id:"manual/l10n",title:"localization",description:"Multiple localization mechanisms are supported and they can be used simultaneously.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/l10n.md",sourceDirName:"manual",slug:"/manual/l10n",permalink:"/en/docs/manual/l10n",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"data tag",permalink:"/en/docs/manual/tag"},next:{title:"Best Practices",permalink:"/en/docs/manual/bestpractices"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"ITextProvider",id:"itextprovider",level:3},{value:"DefaultTextProvider",id:"defaulttextprovider",level:3},{value:"Time localization",id:"time-localization",level:2},{value:"text type",id:"text-type",level:2},{value:"Static localization",id:"static-localization",level:2},{value:"Collect a list of all texts in the configuration table",id:"collect-a-list-of-all-texts-in-the-configuration-table",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"localization"},"localization"),(0,i.kt)("p",null,"Multiple localization mechanisms are supported and they can be used simultaneously."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"The following types of localization are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time localization. Convert the datetime type data in the configuration into UTC seconds according to the specified region"),(0,i.kt)("li",{parentName:"ul"},"text type. A dedicated type that expresses localized string keys and can verify the validity of the keys."),(0,i.kt)("li",{parentName:"ul"},"Static localization. Convert the localized key string to the corresponding actual language value when exporting to avoid the trouble of re-conversion at runtime")),(0,i.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("h3",{id:"itextprovider"},"ITextProvider"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"-x l10n.textProviderFile=xxx")," parameter is not provided, text validity checking and static localization will be automatically disabled.")),(0,i.kt)("p",null,"ITextProvider is used to provide a valid text mapping table so that TextValidator can check the validity of the localization key. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"-x l10n.provider=xxx")," to specify that you use ITextProvider,\n",(0,i.kt)("inlineCode",{parentName:"p"},"default")," corresponds to DefaultTextProvider. You can also implement your own TextProvider."),(0,i.kt)("h3",{id:"defaulttextprovider"},"DefaultTextProvider"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"-x l10n.textFile.path=xxx")," to specify the localized key-value file. DefaultTextProvider uses builtin DataLoader to read data in localized files.\nDefaultTextProvider assumes the table format is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\n<bean name="TextInfo">\n   <var name="{key}" type="string"/>\n   <var name="{language1}" type="string"/>\n   <var name="{language2}" type="string"/>\n   ...\n</bean>\n<table name="TbTextInfo" value="TextInfo" input="xxx"/>\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{key}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{languege_xxx}")," are custom values, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"{key}")," takes key, ",(0,i.kt)("inlineCode",{parentName:"p"},"{language_x}")," takes ",(0,i.kt)("inlineCode",{parentName:"p"},"zh"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"en")," and so on."),(0,i.kt)("p",null,"If you only perform text verification, you do not need fields such as ",(0,i.kt)("inlineCode",{parentName:"p"},"{langauge_xx}"),". Luban only uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"{key}")," field to verify the validity of the key."),(0,i.kt)("p",null,"The localized data file can be in excel format, or in a format such as json or xml, as long as it conforms to the format standard of luban's builtin DataLoader (see ","[excel format]"," (excel) and ","[non-excel format]"," (otherdatasource) documents) That\u2019s it.\nWhen using json format, since it is impossible to put only one text data in a json file, in practice, the json file will contain a text list, and a composite data file format can be used (see ","[non-excel format]"," (otherdatasource))\nfill. The following is a sample localized text table in json format. Specify the text list to be read through ",(0,i.kt)("inlineCode",{parentName:"p"},"-x l10.textFile.path=*@your_text_file.json"),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"When the localized string file is in a format such as json, since one file contains multiple localized data, ",(0,i.kt)("inlineCode",{parentName:"p"},"*@")," must be added before the localized file, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"*@your_text_file.json"),", otherwise there will be a loading error!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"text",src:a(8091).Z,width:"494",height:"197"})),(0,i.kt)("h2",{id:"time-localization"},"Time localization"),(0,i.kt)("p",null,"Datetime type data will output the UTC seconds of the corresponding moment according to the target time zone, which is convenient for program use. The default time zone used is the local time zone, which can be used through the command line\nParameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--timeZone")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-t")," to specify the target time zone."),(0,i.kt)("p",null,'The time zone is the time zone name under Linux or Win, for example: -t "Asia/Shanghai" or -t "China Standard Time" specifies that the target time zone is Shanghai, Asia (that is, Beijing time)'),(0,i.kt)("h2",{id:"text-type"},"text type"),(0,i.kt)("p",null,"Due to the extensive localization needs, the text type is specially provided to support corresponding needs. text is a special syntactic sugar, not an independent type. It is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"string#text=1"),", which is a string containing ",(0,i.kt)("inlineCode",{parentName:"p"},"text=1")," tag\ntype."),(0,i.kt)("p",null,"Text semantically corresponds to the key of the localized string. Luban will check the validity of this key in the data validator."),(0,i.kt)("p",null,"You must set and specify the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.textFile.path"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.textFile.keyFieldName")," to enable text verification. Examples are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'   -x l10n.provider=default ^\n   -x "l10n.textFile.path=*@D:\\workspace2\\luban_examples\\DataTables\\Datas\\l10n\\texts.json" ^\n   -x l10n.textFile.keyFieldName=key\n')),(0,i.kt)("h2",{id:"static-localization"},"Static localization"),(0,i.kt)("p",null,"Static localization will convert the text type from key to actual text value during the export process, which is suitable for occasions where the localization language has been fixed. Users no longer need to convert keys into actual documents, making it more convenient to use."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"l10n.provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.textFile.path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.textFile.keyFieldName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.textFile.languageFieldName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.convertTextKeyToValue")," must be set\nOnly these parameters will enable static localization. Examples are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'   -x l10n.provider=default ^\n   -x "l10n.textFile.path=*@D:\\workspace2\\luban_examples\\DataTables\\Datas\\l10n\\texts.json" ^\n   -x l10n.textFile.keyFieldName=key ^\n   -x l10n.textFile.languageFieldName=zh ^\n   -x l10n.convertTextKeyToValue=1\n')),(0,i.kt)("h2",{id:"collect-a-list-of-all-texts-in-the-configuration-table"},"Collect a list of all texts in the configuration table"),(0,i.kt)("p",null,"Sometimes you want to collect all localized text keys in the configuration. DataTarget text-list is used for this purpose. text-list will collect all text data that appears in the configuration table, sort it from small to large, and then output the file.\nSpecify the output file through the ",(0,i.kt)("inlineCode",{parentName:"p"},"l10n.textListFile")," option. For details, see the ",(0,i.kt)("a",{parentName:"p",href:"./commandtools"},"Command Line Tools")," document."),(0,i.kt)("p",null,"An example command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},"dotnet Luban.dll -t all -d text-list ^\n--conf D:\\workspace2\\luban_examples\\DataTables\\luban.conf ^\n--validationFailAsError ^\n-x outputDataDir=D:\\workspace2\\luban_examples\\Projects\\GenerateDatas\\text ^\n-x l10n.textListFile=texts.txt\n")))}u.isMDXComponent=!0},8091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/l10n_text-cfb7e64cd9dc44ecda12fce66b489f72.jpg"}}]);