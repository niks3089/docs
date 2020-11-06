(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),g=o,h=l["".concat(a,".").concat(g)]||l[g]||p[g]||r;return n?i.a.createElement(h,c(c({ref:t},d),{},{components:n})):i.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),i=n(6),r=(n(0),n(121)),a={id:"nodejs",title:"NodeJS",sidebar_label:"NodeJS"},c={unversionedId:"nodejs",id:"nodejs",isDocsHomePage:!1,title:"NodeJS",description:"Taking an example NodeJS project, we go through",source:"@site/docs/nodejs.md",slug:"/nodejs",permalink:"/docs/nodejs",editUrl:"https://github.com/nimbella/docs/edit/master/docs/nodejs.md",version:"current",sidebar_label:"NodeJS",sidebar:"someSidebar",previous:{title:"Developing & Deploying Serverless APIs",permalink:"/docs/agnostic"},next:{title:"Python",permalink:"/docs/python"}},s=[{value:"Taking an example NodeJS project, we go through",id:"taking-an-example-nodejs-project-we-go-through",children:[]},{value:"Creating packages",id:"creating-packages",children:[]},{value:"Creating Actions",id:"creating-actions",children:[]},{value:"Package.json and where to place them",id:"packagejson-and-where-to-place-them",children:[]},{value:".env",id:"env",children:[]},{value:"Sharing code between actions",id:"sharing-code-between-actions",children:[]},{value:"Adding packages to your actions",id:"adding-packages-to-your-actions",children:[]},{value:"Example on using redis/buckets",id:"example-on-using-redisbuckets",children:[]},{value:"How to debug your functions",id:"how-to-debug-your-functions",children:[]},{value:"How to deploy your functions while developing",id:"how-to-deploy-your-functions-while-developing",children:[]},{value:"Watching your project",id:"watching-your-project",children:[]},{value:"Fetching logs and activations",id:"fetching-logs-and-activations",children:[]},{value:"Multiple stages of development/testing",id:"multiple-stages-of-developmenttesting",children:[]},{value:"Testing your functions locally with express and jest",id:"testing-your-functions-locally-with-express-and-jest",children:[]},{value:"Writing tests",id:"writing-tests",children:[]},{value:"Taking your project to production",id:"taking-your-project-to-production",children:[]},{value:"Setting up CI/CD using github",id:"setting-up-cicd-using-github",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"taking-an-example-nodejs-project-we-go-through"},"Taking an example NodeJS project, we go through"),Object(r.b)("h2",{id:"creating-packages"},"Creating packages"),Object(r.b)("h2",{id:"creating-actions"},"Creating Actions"),Object(r.b)("h2",{id:"packagejson-and-where-to-place-them"},"Package.json and where to place them"),Object(r.b)("h2",{id:"env"},".env"),Object(r.b)("h2",{id:"sharing-code-between-actions"},"Sharing code between actions"),Object(r.b)("h2",{id:"adding-packages-to-your-actions"},"Adding packages to your actions"),Object(r.b)("h2",{id:"example-on-using-redisbuckets"},"Example on using redis/buckets"),Object(r.b)("h2",{id:"how-to-debug-your-functions"},"How to debug your functions"),Object(r.b)("h2",{id:"how-to-deploy-your-functions-while-developing"},"How to deploy your functions while developing"),Object(r.b)("h2",{id:"watching-your-project"},"Watching your project"),Object(r.b)("h2",{id:"fetching-logs-and-activations"},"Fetching logs and activations"),Object(r.b)("h2",{id:"multiple-stages-of-developmenttesting"},"Multiple stages of development/testing"),Object(r.b)("h2",{id:"testing-your-functions-locally-with-express-and-jest"},"Testing your functions locally with express and jest"),Object(r.b)("h2",{id:"writing-tests"},"Writing tests"),Object(r.b)("h2",{id:"taking-your-project-to-production"},"Taking your project to production"),Object(r.b)("h2",{id:"setting-up-cicd-using-github"},"Setting up CI/CD using github"))}u.isMDXComponent=!0}}]);