"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37181],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var o=n(86010),r=n(67294),i=n(73808),a=n(96319),s=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>r.createElement("div",{className:(0,o.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){p(e,t,n[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?r.createElement(g,e):r.createElement(f,e)},f=e=>{var t,n,p,m,f,g,h,v,b,y,x,k,w,O,E,{startRoute:P,showNavigator:N,showLineNumbers:I,showOpenInCodeSandbox:C,initialPercentage:S=50,dependencies:j,showReadOnly:R,options:D={showTabs:!0,initMode:"lazy",classes:{"sp-cm":"p-0 bg-transparent"}},template:M="react-ts",customSetup:L,files:T,previewOnly:z,layout:F,height:A=420,wrapperClassName:H,className:U,showFiles:V=!1,showConsole:B=!1,hidePreview:$=!1}=e,Z=u(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[q,W]=r.useState(!1);r.useEffect((()=>{W(!0)}),[]);const{colorMode:G}=(0,s.I)();var X,_;null!=D||(D={}),null!==(X=(O=D).resizablePanels)&&void 0!==X||(O.resizablePanels=!0),null!==(_=(E=D).editorWidthPercentage)&&void 0!==_||(E.editorWidthPercentage=null!=S?S:50);const J={showTabs:D.showTabs,showLineNumbers:D.showLineNumbers,showInlineErrors:D.showInlineErrors,wrapContent:D.wrapContent,closableTabs:D.closableTabs,initMode:D.initMode,extensions:null===(t=D.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=D.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:D.readOnly,showReadOnly:null!=R?R:D.showReadOnly,additionalLanguages:null===(p=D.codeEditor)||void 0===p?void 0:p.additionalLanguages},K={activeFile:D.activeFile,visibleFiles:D.visibleFiles,recompileMode:D.recompileMode,recompileDelay:D.recompileDelay,autorun:D.autorun,autoReload:D.autoReload,bundlerURL:D.bundlerURL,startRoute:D.startRoute,skipEval:D.skipEval,fileResolver:D.fileResolver,initMode:D.initMode,initModeObserverOptions:D.initModeObserverOptions,externalResources:D.externalResources,logLevel:D.logLevel,classes:D.classes},[Y,Q]=r.useState(!1),{onHandleMouseDown:ee,horizontalSize:te}=(({initialSize:e=50})=>{const[t,n]=r.useState(e),o=r.useRef(null),i=e=>{if(!o.current)return;const t=o.current.parentElement;if(!t)return;const{left:r,width:i}=t.getBoundingClientRect(),a=(e.clientX-r)/i*100,s=Math.min(Math.max(a,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},a=()=>{var e;const t=null===(e=o.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),o.current=null)};return r.useEffect((()=>(document.body.addEventListener("mousemove",i),document.body.addEventListener("mouseup",a),()=>{document.body.removeEventListener("mousemove",i),document.body.removeEventListener("mouseup",a)})),[]),{horizontalSize:t,onHandleMouseDown:r.useCallback((e=>{o.current=e.target}),[])}})({initialSize:D.editorWidthPercentage}),ne=!z&&!(null===(f=F)||void 0===f||null===(m=f.includes)||void 0===m?void 0:m.call(f,"col"));var oe,re,ie,ae,se,le;return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,o.Z)("pb-6",H)},r.createElement("div",{className:(0,o.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",U)},r.createElement(a.oT,c({key:`${M}-${G}-${q}`,customSetup:c({dependencies:j},L),files:T,options:K,template:M,theme:"light"===G?d(c({},i.FM),{colors:d(c({},i.FM.colors),{accent:"#1D1E30",surface1:"#F4F8FB",surface2:"rgb(222, 229, 237)",surface3:"rgb(222, 229, 237)"})}):d(c({},i.I2),{colors:d(c({},i.I2.colors),{surface1:"#1D1E30",surface2:"#303450",surface3:"#303450"})}),className:(0,o.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},Z),r.createElement(a.sp,{className:(0,o.Z)("col"===F&&"!flex-col","col-reverse"===F&&"!flex-col-reverse")},V&&r.createElement(a.Lj,{autoHiddenFiles:!0,style:{height:null!==(oe=D.editorHeight)&&void 0!==oe?oe:A}}),!z&&r.createElement(a._V,d(c({},J),{showLineNumbers:I,closableTabs:V,initMode:"lazy",style:d(c({height:null!==(re=D.editorHeight)&&void 0!==re?re:A},(null===(h=F)||void 0===h||null===(g=h.includes)||void 0===g?void 0:g.call(h,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})})),B?r.createElement(a.Tq,{style:d(c({height:null!==(ie=D.editorHeight)&&void 0!==ie?ie:A},(null===(b=F)||void 0===b||null===(v=b.includes)||void 0===v?void 0:v.call(b,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})}):null,ne?r.createElement(l,{onMouseDown:ee,horizontalSize:te}):null,$?null:r.createElement(r.Fragment,null,r.createElement(a.Gj,{showOpenInCodeSandbox:C,startRoute:P,showNavigator:null!=N?N:D.showNavigator,showRefreshButton:D.showRefreshButton,style:d(c({display:$?"none":"flex"},(null===(x=F)||void 0===x||null===(y=x.includes)||void 0===y?void 0:y.call(x,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-te,flexShrink:100-te,flexBasis:0,width:z?"100%":100-te+"%"}),{gap:0,height:null!==(ae=D.editorHeight)&&void 0!==ae?ae:A})},r.createElement("div",{className:"sp-custom-loading"},r.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,o.Z)("w-12","h-12","rounded-full")}))))))),r.createElement("div",{className:(0,o.Z)(""),style:{height:Number(null!==(se=D.editorHeight)&&void 0!==se?se:A)+2}}),r.createElement("div",{className:(0,o.Z)((null===(w=F)||void 0===w||null===(k=w.includes)||void 0===k?void 0:k.call(w,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=D.editorHeight)&&void 0!==le?le:A)+2}})),r.createElement("section",{className:"hidden max-w-0 max-h-0"},r.createElement("p",null,`Dependencies: ${Object.keys(null!=j?j:{}).map((e=>`${e}@${j[e]}`))}`),r.createElement("h3",null,"Code Files"),Object.keys(null!=T?T:{}).map((e=>r.createElement("div",{key:e},r.createElement("div",null,`File: ${e}`),r.createElement("div",null,`Content: ${"code"in T[e]?T[e].code:T[e]}`))))))},g=e=>{const t={hidePreview:!0};return r.createElement(f,d(c({},e,t),{template:"react-ts"}))};'\nimport { NavigateToResource } from "@refinedev/nextjs-router";\n\nconst Home = () => {\n    return <NavigateToResource resource="products" />;\n};\n\nexport default Home;\n'.trim()},69495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var o=n(67294),r=n(3905),i=n(58943);function a(){return o.createElement(i.x,{height:460,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest"},startRoute:"/",files:{"/App.tsx":{code:s},"/home-page.tsx":{code:l,active:!0}}})}const s='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n      <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          resources={[\n              {\n                  name: "products",\n              },\n          ]}\n      >\n          <HomePage />\n      </Refine>\n  );\n};\n\nexport default App;\n\n'.trim(),l='\nimport React from "react";\nimport { useExport, useList } from "@refinedev/core";\n\nexport const HomePage = () => {\n  const { data } = useList({ resource: "products" });\n  const products = data?.data;\n\n  const { triggerExport, isLoading } = useExport<IProduct>({\n      resource: "products",\n      mapData: (item) => {\n          return {\n              ...item,\n              // category is an object, we need to stringify it\n              category: JSON.stringify(item.category),\n          };\n      },\n  });\n\n  return (\n      <div\n          style={{\n              display: "flex",\n              flexDirection: "column",\n              alignItems: "flex-start",\n              padding: "16px",\n          }}\n      >\n          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>\n              <h2>Products</h2>\n              <button onClick={triggerExport} disabled={isLoading}>\n                  {isLoading ? "Exporting..." : "Export Products"}\n              </button>\n          </div>\n          {products?.map((product) => (\n              <div key={product.id}>\n                  <h4>[ID: {product.id}] - {product.name}</h4>\n                  <p>{product.description}</p>\n              </div>\n          ))}\n      </div>\n  );\n};\n\ninterface IProduct {\n  id: string;\n  name: string;\n  description: string;\n  material: string;\n  price: number;\n  category: {\n      id: string;\n  };\n}\n\n\n'.trim();function p(){return o.createElement(i.x,{height:460,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest"},startRoute:"/",files:{"/App.tsx":{code:c},"/home-page.tsx":{code:d,active:!0}}})}const c='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n      <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          resources={[\n              {\n                  name: "products",\n              },\n          ]}\n      >\n          <HomePage />\n      </Refine>\n  );\n};\n\nexport default App;\n\n'.trim(),d='\nimport React, { useState } from "react";\nimport { useImport, useList } from "@refinedev/core";\n\nexport const HomePage = () => {\n  const { data } = useList({\n      resource: "products",\n      sorters: [{ field: "id", order: "desc" }],\n  });\n  const products = data?.data;\n\n  const [importProgress, setImportProgress] = useState({\n      processed: 0,\n      total: 0,\n  });\n\n  const { inputProps, isLoading } = useImport<IProduct>({\n      resource: "products",\n      onFinish: () => {\n          alert("Import completed!");\n      },\n      onProgress: (progress) => {\n          setImportProgress({\n              processed: progress.processedAmount,\n              total: progress.totalAmount,\n          });\n      },\n  });\n\n  return (\n      <div\n          style={{\n              display: "flex",\n              flexDirection: "column",\n              alignItems: "flex-start",\n              padding: "16px",\n          }}\n      >\n          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>\n              <h2>Products</h2>\n\n              <label\n                  style={{\n                      display: "flex",\n                      alignItems: "center",\n                      gap: "8px",\n                      cursor: "pointer",\n                      padding: "8px",\n                      border: "1px solid #ccc",\n                      borderRadius: "4px",\n                  }}\n              >\n                  {isLoading ? (\n                      <p>\n                          {importProgress.processed} / {importProgress.total}\n                      </p>\n                  ) : (\n                      <p>Import CSV</p>\n                  )}\n                  <input name="csv" {...inputProps} />\n              </label>\n          </div>\n          {products?.map((product) => (\n              <div key={product.id}>\n                  <h4>\n                      [ID: {product.id}] - {product.name}\n                  </h4>\n                  <p>{product.description}</p>\n              </div>\n          ))}\n      </div>\n  );\n};\n\ninterface IProduct {\n  id: string;\n  name: string;\n  description: string;\n  material: string;\n  price: number;\n  category: {\n      id: string;\n  };\n}\n\n'.trim();function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const g={title:"Import - Export"},h="CSV Import - Export",v={unversionedId:"guides-concepts/import-export/index",id:"guides-concepts/import-export/index",title:"Import - Export",description:"Importing and exporting data are essential tasks for managing information in data extensive applications. With CSV export and import, we can speed up the process of data entry and data migration.",source:"@site/docs/guides-concepts/import-export/index.md",sourceDirName:"guides-concepts/import-export",slug:"/guides-concepts/import-export/",permalink:"/docs/guides-concepts/import-export/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/import-export/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704186454,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{title:"Import - Export"},sidebar:"mainSidebar",previous:{title:"Multitenancy",permalink:"/docs/guides-concepts/multi-tenancy/"},next:{title:"Internationalization (i18n)",permalink:"/docs/guides-concepts/i18n/"}},b={},y=[{value:"Import",id:"import",level:2},{value:"Export",id:"export",level:2}],x={toc:y};function k(e){var{components:t}=e,n=f(e,["components"]);return(0,r.kt)("wrapper",m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){u(e,t,n[t])}))}return e}({},x,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"csv-import---export"},"CSV Import - Export"),(0,r.kt)("p",null,"Importing and exporting data are essential tasks for managing information in data extensive applications. With ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," export and import, we can speed up the process of data entry and data migration."),(0,r.kt)("p",null,"Refine provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-import/"},(0,r.kt)("inlineCode",{parentName:"a"},"useImport"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-export/"},(0,r.kt)("inlineCode",{parentName:"a"},"useExport"))," hooks for both bulk importing and exporting data, making it easy to move large datasets between your application and external sources."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useImport")," hook allows you to import data from a ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file. For each row in the file, it calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider according to your configuration."),(0,r.kt)("p",null,"Internally, it uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to parse the file contents."),(0,r.kt)(p,{mdxType:"UseImportExample"}),(0,r.kt)("p",null,"You can use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file to test the import feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="products.csv"',title:'"products.csv"'},'name,material,description,price,category\n"Test Product 1","Test Material 1","Test Description 1","100","{""id"":1}"\n"Test Product 2","Test Material 2","Test Description 2","200","{""id"":2}"\n"Test Product 3","Test Material 3","Test Description 3","300","{""id"":3}"\n')),(0,r.kt)("p",null,"Refine also provides ",(0,r.kt)("inlineCode",{parentName:"p"},"<ImportButton />"),". It's compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"useImport")," hook to easily handle the import process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/import-button/"},"Ant Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/material-ui/components/buttons/import-button/"},"Material UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/mantine/components/buttons/import-button/"},"Mantine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/chakra-ui/components/buttons/import-button/"},"Chakra UI"))),(0,r.kt)("h2",{id:"export"},"Export"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useExport")," hook allows you to export data as a ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file. It calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method of your data provider and downloads the data as a ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file."),(0,r.kt)("p",null,"Internally, it uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},(0,r.kt)("inlineCode",{parentName:"a"},"export-to-csv"))," to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 The download feature for ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," files does not function within an iframe (live-previews). You can copy the code and run it in your own project to see it in action.")),(0,r.kt)(a,{mdxType:"UseExportExample"}),(0,r.kt)("p",null,"Refine also provides ",(0,r.kt)("inlineCode",{parentName:"p"},"<ExportButton />"),". It's compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"useExport")," hook to easily handle the export process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/export-button/"},"Ant Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/material-ui/components/buttons/export-button/"},"Material UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/mantine/components/buttons/export-button/"},"Mantine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/chakra-ui/components/buttons/export-button/"},"Chakra UI"))))}k.isMDXComponent=!0}}]);