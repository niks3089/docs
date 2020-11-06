(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(137)),c={id:"account",title:"Nimbella Account",sidebar_label:"Nimbella Account"},l={unversionedId:"account",id:"account",isDocsHomePage:!1,title:"Nimbella Account",description:"Your Nimbella cloud account",source:"@site/docs/account.md",slug:"/account",permalink:"/docs/docs/account",editUrl:"https://github.com/nimbella/docs/edit/master/docs/account.md",version:"current",sidebar_label:"Nimbella Account",sidebar:"someSidebar",previous:{title:"Why Nimbella",permalink:"/docs/docs/whyNimbella"},next:{title:"Nimbella Features",permalink:"/docs/docs/features"}},i=[{value:"Your Nimbella cloud account",id:"your-nimbella-cloud-account",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"your-nimbella-cloud-account"},"Your Nimbella cloud account"),Object(o.b)("p",null,"Your Nimbella cloud account gives you the following benefits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A dedicated and secure domain name for your cloud applications. If you need more, let us know."),Object(o.b)("li",{parentName:"ul"},"Static front-end assets are automatically deployed to and served from a global CDN."),Object(o.b)("li",{parentName:"ul"},"Back-ends you can run on demand, near-instantly. No servers for you to manage."),Object(o.b)("li",{parentName:"ul"},"A secured data bucket to upload files. Limit access as needed."),Object(o.b)("li",{parentName:"ul"},"Application state recorded in a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io"}),"Redis key-value store"),", with data accessible to all your back-end logic at extremely low latency."),Object(o.b)("li",{parentName:"ul"},"Workflows you can  build and the ability to orchestrate long-running tasks."),Object(o.b)("li",{parentName:"ul"},"CLI and workbench tools to manage Nimbella services, build projects, and deploy your apps.")),Object(o.b)("p",null,"Once you ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/docs/namespaces#create-a-nimbella-namespace"}),"create your first Nimbella Cloud namespace")," you are ready to login and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/docs/commands#nim-command-overview"}),"run CLI commands")," and deploy projects to your Nimbella Cloud."))}s.isMDXComponent=!0}}]);