(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(137)),o={id:"flags",title:"Command Flags",sidebar_label:"Command Flags"},l={unversionedId:"flags",id:"flags",isDocsHomePage:!1,title:"Command Flags",description:"Nim command flags",source:"@site/docs/common-flags.md",slug:"/flags",permalink:"/docs/docs/flags",editUrl:"https://github.com/nimbella/docs/edit/master/docs/common-flags.md",version:"current",sidebar_label:"Command Flags",sidebar:"someSidebar",previous:{title:"Nim Commands",permalink:"/docs/docs/commands"},next:{title:"Command Summary",permalink:"/docs/docs/commandSummary"}},c=[],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"nim-command-flags"},"Nim command flags"),Object(i.b)("p",null,"This document explains flags that appear on many ",Object(i.b)("inlineCode",{parentName:"p"},"nim")," commands with similar meaning.  Flags unique to one or very few commands are documented ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/docs/commandSummary"}),"in the command summary"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--apihost"}),Object(i.b)("inlineCode",{parentName:"a"},"--apihost"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--auth"}),Object(i.b)("inlineCode",{parentName:"a"},"--auth"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--help"}),Object(i.b)("inlineCode",{parentName:"a"},"--debug"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--help"}),Object(i.b)("inlineCode",{parentName:"a"},"--help"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--json"}),Object(i.b)("inlineCode",{parentName:"a"},"--json"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--verbose"}),Object(i.b)("inlineCode",{parentName:"a"},"--verbose"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#--version"}),Object(i.b)("inlineCode",{parentName:"a"},"--version")))),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--apihost"},"--apihost"),Object(i.b)("p",null,"Most Nimbella users do not need to specify this flag and generally shouldn't.  It becomes relevant if you use ",Object(i.b)("inlineCode",{parentName:"p"},"nim")," with OpenWhisk resources outside the Nimbella stack, or if you are developing on the Nimbella stack using test versions of the stack.  It specifies the URL of the OpenWhisk backend with which you are interacting."),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--auth"},"--auth"),Object(i.b)("p",null,"Alias ",Object(i.b)("inlineCode",{parentName:"p"},"-u"),"."),Object(i.b)("p",null,"Most Nimbella users do not need to specify this flag and generally shouldn't.  It becomes relevant if you use ",Object(i.b)("inlineCode",{parentName:"p"},"nim"),' with OpenWhisk resources outside the Nimbella stack.  You use it to provide an OpenWhisk "API key" in the form ',Object(i.b)("inlineCode",{parentName:"p"},"<uuid>:<key>"),".   Usually you must also provide ",Object(i.b)("inlineCode",{parentName:"p"},"--apihost")," when you provide ",Object(i.b)("inlineCode",{parentName:"p"},"--auth"),"."),Object(i.b)("p",null,"Typical Nimbella users either have a single set of credentials, which should support all the ",Object(i.b)("inlineCode",{parentName:"p"},"nim")," commands, or, if you have multiple namespaces, use the techniques described in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/docs/namespaces"}),"Nimbella Namespaces")," to manage them."),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--debug"},"--debug"),Object(i.b)("p",null,"This flag is used to activate debugging traces that are useful in diagnosing problems.  If you are getting help from Nimbella staff on a problem you may be asked to use this flag.  We do not document the values that can follow this flag but you can obtain an understanding of how it works if you are familiar with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nimbella/nimbella-cli"}),"the code"),"."),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--help"},"--help"),Object(i.b)("p",null,"Displays the syntax for the command on which it appears.  The command doesn't execute."),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--json"},"--json"),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--verbose"},"--verbose"),Object(i.b)("p",null,"Alias ",Object(i.b)("inlineCode",{parentName:"p"},"-v"),"."),Object(i.b)("p",null,"Normally, errors result in an informative message with no distracting stack trace.  When the error is unexpected and might represent a bug, the ",Object(i.b)("inlineCode",{parentName:"p"},"--verbose")," or ",Object(i.b)("inlineCode",{parentName:"p"},"-v")," flag causes the entire error object (including a stack trace, usually) to be displayed for reporting purposes."),Object(i.b)("hr",null),Object(i.b)("h5",{id:"--version"},"--version"),Object(i.b)("p",null,"This flag causes ",Object(i.b)("inlineCode",{parentName:"p"},"nim")," to display version information and exit.  Usually, the ",Object(i.b)("inlineCode",{parentName:"p"},"nim info")," command is more informative but ",Object(i.b)("inlineCode",{parentName:"p"},"--version")," is terser and may be better for scripts."),Object(i.b)("hr",null))}s.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);