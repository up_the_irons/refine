"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Frequently Asked Questions",sidebar_label:"FAQ"},l=void 0,d={unversionedId:"guides-concepts/faq/index",id:"guides-concepts/faq/index",title:"Frequently Asked Questions",description:"How can I change the form data before submitting it to the API?",source:"@site/docs/guides-concepts/faq/index.md",sourceDirName:"guides-concepts/faq",slug:"/guides-concepts/faq/",permalink:"/docs/guides-concepts/faq/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/faq/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704186454,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{title:"Frequently Asked Questions",sidebar_label:"FAQ"},sidebar:"mainSidebar",previous:{title:"Contributing",permalink:"/docs/guides-concepts/contributing/"},next:{title:"<Refine>",permalink:"/docs/core/refine-component/"}},p={},u=[{value:"How can I change the form data before submitting it to the API?",id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",level:2},{value:"How can I refetch data?",id:"how-can-i-refetch-data",level:2},{value:"How can I request an API with nested route?",id:"how-can-i-request-an-api-with-nested-route",level:2},{value:"How can I ensure a query is only run after a certain variable is available and not on load?",id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",level:2},{value:"Can I work with JavaScript?",id:"can-i-work-with-javascript",level:2},{value:"How I can override specific function of Data Providers?",id:"how-i-can-override-specific-function-of-data-providers",level:2},{value:"Why are API calls triggering twice?",id:"why-are-api-calls-triggering-twice",level:2},{value:"How can I add an item to the Sider component?",id:"how-can-i-add-an-item-to-the-sider-component",level:2},{value:"Using Resource Definitions",id:"using-resource-definitions",level:4},{value:"Using <code>render</code> property of <code>&lt;Sider&gt;</code> component",id:"using-render-property-of-sider-component",level:4},{value:"Using <code>swizzle</code> command",id:"using-swizzle-command",level:4},{value:"How to hide items from the Sider component?",id:"how-to-hide-items-from-the-sider-component",level:2},{value:"How can I remove GitHub Banner?",id:"how-can-i-remove-github-banner",level:2},{value:"How to solve &quot;Module &#39;X&#39; has no exported member &#39;Y&#39;&quot; error?",id:"how-to-solve-module-x-has-no-exported-member-y-error",level:2},{value:"How to use React Query DevTools with Refine?",id:"how-to-use-react-query-devtools-with-refine",level:2},{value:"How do invalidation works in queries?",id:"how-do-invalidation-works-in-queries",level:2},{value:"How to handle filters and sorters when using client side pagination?",id:"how-to-handle-filters-and-sorters-when-using-client-side-pagination",level:2},{value:"How to handle server side validation errors?",id:"how-to-handle-server-side-validation-errors",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("Tabs"),h=c("TabItem"),f={toc:u};function v(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api"},"How can I change the form data before submitting it to the API?"),(0,a.kt)("p",null,"You may need to modify the form data before it is sent to the API for various reasons. For example, you may want to add a field to the form data or change the value of a field before submitting it to the API. This can be achieved easily by Refine's ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," implementations."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides-concepts/forms/#modifying-data-before-submission"},"Modifying Data Before Submission section in Forms guide")," to learn how to achieve this."),(0,a.kt)("h2",{id:"how-can-i-refetch-data"},"How can I refetch data?"),(0,a.kt)("p",null,"Refine automatically invalidates the affected resources after mutations. However, in some cases you may want to refetch manually."),(0,a.kt)(m,{defaultValue:"refetch",values:[{label:"React Query Refetch",value:"refetch"},{label:"useInvalidate Hook",value:"useinvalidate"}],mdxType:"Tabs"},(0,a.kt)(h,{value:"refetch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useForm, useShow } from "@refinedev/core";\n\n// All "data" related hooks provided by Refine can use queryResult\' refetch function\nconst { tableQueryResult: { refetch } } = useTable();\nconst { queryResult: { refetch } } = useForm();\n...\n...\nconst { queryResult: { refetch } } = useShow();\n...\n...\n'))),(0,a.kt)(h,{value:"useinvalidate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useInvalidate } from "@refinedev/core";\n\nconst invalidate = useInvalidate();\n\n// To invalidate the list and many states of the Posts resource\ninvalidate({\n  resource: "posts",\n  invalidates: ["list", "many"],\n});\n\n// To invalidate the state of a Posts with an id of 1\ninvalidate({\n  resource: "posts",\n  invalidates: ["detail"],\n  id: 1,\n});\n\n// To invalidate the list and many states of the Posts resource of the dataProvider named "second-data-provider"\ninvalidate({\n  resource: "posts",\n  dataProviderName: "second-data-provider",\n  invalidates: ["list"],\n});\n\n// To invalidate all states of dataprovider named "second-data-provider"\ninvalidate({\n  dataProviderName: "second-data-provider",\n  invalidates: ["all"],\n});\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/use-invalidate"},"Refer to the Refine useInvalidate hook documentation for more information. \u2192")))),(0,a.kt)("h2",{id:"how-can-i-request-an-api-with-nested-route"},"How can I request an API with nested route?"),(0,a.kt)("p",null,"Refine's way of doing this is with the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property on all data hooks. You can think of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property as the URL."),(0,a.kt)("p",null,"For example, If you want to make a request of the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"/user/1/posts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useOne } from "@refinedev/core";\n\nuseTable({\n  resource: "/users/1/posts",\n});\n')),(0,a.kt)("h2",{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load"},"How can I ensure a query is only run after a certain variable is available and not on load?"),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," related hooks (",(0,a.kt)("inlineCode",{parentName:"p"},"useMany"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne"),", etc.) can also accept all ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," options, which allows you to implement dependent queries whereby a query is only run after a certain data is available. This is particularly useful if you want ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany")," to only run after a certain data is available and not on load."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/dependent-queries"},"Refer to react-query docs on ",(0,a.kt)("strong",{parentName:"a"},"dependent queries")," for more information \u2192 ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Suppose you want this query to run after ",(0,a.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched by a preceding query, you can set ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"categoryIds.length > 0"),". This will ensure that ",(0,a.kt)("inlineCode",{parentName:"li"},"useMany")," is only run after ",(0,a.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  resource: "categories",\n  ids: categoryIds,\n  // highlight-next-line\n  queryOptions: { enabled: categoryIds.length > 0 },\n});\n')),(0,a.kt)("h2",{id:"can-i-work-with-javascript"},"Can I work with JavaScript?"),(0,a.kt)("p",null,"Although Refine is written in TypeScript and it is recommended to use TypeScript, you can also work with Javascript without any problems. Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/with-javascript"},"Refine with Javascript example \u2192")),(0,a.kt)("h2",{id:"how-i-can-override-specific-function-of-data-providers"},"How I can override specific function of Data Providers?"),(0,a.kt)("p",null,"In some cases, you may need to override functions of Refine data providers. The simplest way to do this is to use the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")),(0,a.kt)("p",null,"Below code sample, overrides the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," function of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/simple-rest"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/simple-rest")),". You can apply custom logic to the data provider methods or handle a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property for your needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import dataProvider from "@refinedev/simple-rest";\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n  ...simpleRestProvider,\n  update: async ({ resource, id, variables, meta }) => {\n    console.log("Overriding the update function");\n\n    // You can either send a request from scratch or use the original function\n    return await simpleRestProvider.update({ resource, id, variables, meta });\n  },\n};\n\n<Refine dataProvider={myDataProvider} />;\n')),(0,a.kt)("h2",{id:"why-are-api-calls-triggering-twice"},"Why are API calls triggering twice?"),(0,a.kt)("p",null,"This is the expected behavior if you use ","[",(0,a.kt)("inlineCode",{parentName:"p"},"<React.StrictMode>"),"][https://react.dev/reference/react/StrictMode]",". In this mode, React will render the components twice in ",(0,a.kt)("strong",{parentName:"p"},"development mode")," to identify unsafe life cycles, unexpected side effects, and legacy or deprecated APIs. It's used for highlighting possible problems. You can also check out the related issue on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TanStack/query/issues/3633"},"TanStack Query repository"),"."),(0,a.kt)("h2",{id:"how-can-i-add-an-item-to-the-sider-component"},"How can I add an item to the Sider component?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Sider />")," components use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component to render the navigation links. If a resource has a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," property, it will be rendered as a navigation link in the sider. To add a custom item to the sider, you can use three different approaches:"),(0,a.kt)("h4",{id:"using-resource-definitions"},"Using Resource Definitions"),(0,a.kt)("p",null,"The first and simplest way is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component shows the resources whose ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," property is set. So, you can have an extra navigation link by adding a resource with the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\n<Refine\n    ...\n    resources={[\n        {\n            name: "dashboard",\n            list: "/",\n            meta: {\n                label: "Dashboard",\n                icon: "\ud83c\udfe0",\n            },\n        },\n    ]}\n/>;\n')),(0,a.kt)("h4",{id:"using-render-property-of-sider-component"},"Using ",(0,a.kt)("inlineCode",{parentName:"h4"},"render")," property of ",(0,a.kt)("inlineCode",{parentName:"h4"},"<Sider>")," component"),(0,a.kt)("p",null,"The second way is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component. The ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," property is a function that receives an object with the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," properties. The ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," property is the list of navigation items and the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," property is the logout button."),(0,a.kt)(m,{defaultValue:"antd",values:[{label:"Ant Design",value:"antd"},{label:"Material UI",value:"mui"},{label:"Mantine",value:"mantine"},{label:"Chakra UI",value:"chakra-ui"}],mdxType:"Tabs"},(0,a.kt)(h,{value:"antd",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/antd";\n\nconst CustomSider = () => {\n  return (\n    <Sider\n      render={({ items, logout }) => {\n        return (\n          <>\n            <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n            {items}\n            {logout}\n          </>\n        );\n      }}\n    />\n  );\n};\n\nconst CustomLayout = () => {\n  return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,a.kt)(h,{value:"mui",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/mui";\n\nconst CustomSider = () => {\n  return (\n    <Sider\n      render={({ items, logout }) => {\n        return (\n          <>\n            <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n            {items}\n            {logout}\n          </>\n        );\n      }}\n    />\n  );\n};\n\nconst CustomLayout = () => {\n  return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,a.kt)(h,{value:"mantine",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/mantine";\n\nconst CustomSider = () => {\n  return (\n    <Sider\n      render={({ items, logout }) => {\n        return (\n          <>\n            <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n            {items}\n            {logout}\n          </>\n        );\n      }}\n    />\n  );\n};\n\nconst CustomLayout = () => {\n  return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,a.kt)(h,{value:"chakra-ui",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/chakra-ui";\n\nconst CustomSider = () => {\n  return (\n    <Sider\n      render={({ items, logout }) => {\n        return (\n          <>\n            <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n            {items}\n            {logout}\n          </>\n        );\n      }}\n    />\n  );\n};\n\nconst CustomLayout = () => {\n  return <Layout Sider={CustomSider}>...</Layout>;\n};\n')))),(0,a.kt)("h4",{id:"using-swizzle-command"},"Using ",(0,a.kt)("inlineCode",{parentName:"h4"},"swizzle")," command"),(0,a.kt)("p",null,"The third way is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzle")," command."),(0,a.kt)("p",null,"You can use the command to copy the default ",(0,a.kt)("inlineCode",{parentName:"p"},"Sider")," component to your project. This will allow you to customize the sider as you want."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides-concepts/development/#using-swizzle"},"Refer to the swizzle section of Development guide. ","\u2192")),(0,a.kt)("h2",{id:"how-to-hide-items-from-the-sider-component"},"How to hide items from the Sider component?"),(0,a.kt)("p",null,"Refine's ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-menu/"},(0,a.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook and ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider />")," components use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component to render the navigation links. If a resource has a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," property, it will be rendered as a navigation link in the sider. To hide a resource from the menu, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.hide")," property of the resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nconst App = () => (\n  <Refine\n    ...\n    resources={[\n      {\n        name: "posts",\n        list: "/posts",\n        meta: {\n          label: "Posts",\n          icon: "\ud83d\udcdd",\n        },\n      },\n      {\n        name: "users",\n        list: "/users",\n        meta: {\n          // Users resource will be hidden from the menu but will be accessible via the URL\n          hide: true,\n        },\n      },\n    ]}\n  />\n);\n')),(0,a.kt)("h2",{id:"how-can-i-remove-github-banner"},"How can I remove GitHub Banner?"),(0,a.kt)("p",null,"To remove the GitHub Banner, you need to find and remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"<GitHubBanner />")," component from your React application. The specific location of this component may vary depending on the React platform you are using."),(0,a.kt)("p",null,"Here are the locations where you can find and remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"<GitHubBanner />")," component based on different React platforms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vite: ",(0,a.kt)("inlineCode",{parentName:"li"},"src/App.tsx")," - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/examples/auth-antd/src/App.tsx#L161"},"See an example")),(0,a.kt)("li",{parentName:"ul"},"Next.js: ",(0,a.kt)("inlineCode",{parentName:"li"},"pages/_app.tsx")," - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/examples/with-nextjs/pages/_app.tsx#L47"},"See an example")),(0,a.kt)("li",{parentName:"ul"},"Remix: ",(0,a.kt)("inlineCode",{parentName:"li"},"app/root.tsx")," - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/examples/with-remix-antd/app/root.tsx#L37"},"See an example"))),(0,a.kt)("h2",{id:"how-to-solve-module-x-has-no-exported-member-y-error"},"How to solve \"Module 'X' has no exported member 'Y'\" error?"),(0,a.kt)("p",null,"The error message \"Module 'X' has no exported member 'Y'\" typically occurs when using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," due to its cache system. We are aware of this issue and are actively working on resolving it by updating our peer dependencies with each version release. However, this is still a work in progress. In the meantime, you can resolve this error by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i <module-name>@latest")," command."),(0,a.kt)("p",null,"Here are a couple of examples of reported errors and their corresponding fix:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Error: \"Module '@refinedev/mantine' has no exported member 'HamburgerMenu'\""),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Solution: Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i @refinedev/mantine@latest")," to install the latest version of the ",(0,a.kt)("inlineCode",{parentName:"li"},"@refinedev/mantine")," module."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Error: \"Module '@refinedev/antd' has no exported member 'ThemedLayoutV2'\""),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Solution: Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i @refinedev/antd@latest")," to install the latest version of the ",(0,a.kt)("inlineCode",{parentName:"li"},"@refinedev/antd")," module.")))),(0,a.kt)("p",null,'By following these steps and updating to the latest module versions, you should be able to resolve the "not exported" error.'),(0,a.kt)("h2",{id:"how-to-use-react-query-devtools-with-refine"},"How to use React Query DevTools with Refine?"),(0,a.kt)("p",null,"Until ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),"'s version ",(0,a.kt)("inlineCode",{parentName:"p"},"4.28.2"),", Refine had the ",(0,a.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query-devtools")," package available by default. However, this package has been removed from the core package and is no longer available by default."),(0,a.kt)("p",null,"We're recommending ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides-concepts/development/#using-devtools"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/devtools"))," as an alternative to ",(0,a.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query-devtools"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/devtools")," is tailored for Refine and provides more detailed information about the queries and mutations with its monitoring panel and much more."),(0,a.kt)("h2",{id:"how-do-invalidation-works-in-queries"},"How do invalidation works in queries?"),(0,a.kt)("p",null,"Refine invalidates and refetches the related queries after a successful mutation. To have a better understanding of how invalidation works in Refine, check out the ",(0,a.kt)("a",{parentName:"p",href:"docs/guides-concepts/general-concepts/#state-management"},"State Management section of General Concepts guide.")),(0,a.kt)("h2",{id:"how-to-handle-filters-and-sorters-when-using-client-side-pagination"},"How to handle filters and sorters when using client side pagination?"),(0,a.kt)("p",null,"When you're implementing client side pagination with the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination.mode"),' set to "client," you might run into issues when applying client side filtering and sorting. This is due to the fact that client side filtering and sorting are applied to the sliced data, not the whole data. To ensure that the client side filtering and sorting are applied to the whole data, you need to use the ',(0,a.kt)("inlineCode",{parentName:"p"},'pagination.mode: "off"')," prop."),(0,a.kt)("h2",{id:"how-to-handle-server-side-validation-errors"},"How to handle server side validation errors?"),(0,a.kt)("p",null,"When working with forms and mutations, using only client side validation might not be enough. You may also need to validate the data on the server side. Refine provides an interface ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/interface-references/#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))," to propagate the server side validation errors to the form values. You can use this interface to handle server side validation errors."),(0,a.kt)("p",null,"To learn more about server side validation and see an example, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides-concepts/forms/#server-side-validation-"},"Server Side Validation section of the Forms guide.")))}v.isMDXComponent=!0}}]);