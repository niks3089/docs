(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,b=s["".concat(a,".").concat(d)]||s[d]||g[d]||o;return t?i.a.createElement(b,l(l({ref:n},c),{},{components:t})):i.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),o=(t(0),t(121)),a={id:"web",title:"Developing & Deploying Web",sidebar_label:"Developing & Deploying Web"},l={unversionedId:"web",id:"web",isDocsHomePage:!1,title:"Developing & Deploying Web",description:"Example using React",source:"@site/docs/web.md",slug:"/web",permalink:"/docs/web",editUrl:"https://github.com/nimbella/docs/edit/master/docs/web.md",version:"current",sidebar_label:"Developing & Deploying Web",sidebar:"someSidebar",previous:{title:"Go",permalink:"/docs/go"},next:{title:"Taking your application to production",permalink:"/docs/production"}},p=[{value:"Example using React",id:"example-using-react",children:[]},{value:"Example using Angular",id:"example-using-angular",children:[]},{value:"Example using html/css",id:"example-using-htmlcss",children:[]},{value:"Deploying your app using Netlify",id:"deploying-your-app-using-netlify",children:[]},{value:"Deploying your app using Gatsby",id:"deploying-your-app-using-gatsby",children:[]}],c={rightToc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-using-react"},"Example using React"),Object(o.b)("h2",{id:"example-using-angular"},"Example using Angular"),Object(o.b)("h2",{id:"example-using-htmlcss"},"Example using html/css"),Object(o.b)("h2",{id:"deploying-your-app-using-netlify"},"Deploying your app using Netlify"),Object(o.b)("h2",{id:"deploying-your-app-using-gatsby"},"Deploying your app using Gatsby"))}u.isMDXComponent=!0}}]);