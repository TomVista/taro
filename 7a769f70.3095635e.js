(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1735:function(e,t,l){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return n}))},1736:function(e,t,l){"use strict";function n(e,t){if(null==e)return{};var l,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}l.d(t,"a",(function(){return n}))},1737:function(e,t,l){"use strict";l.d(t,"a",(function(){return d}));var n=l(0),a=l.n(n);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function b(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var O=a.a.createContext({}),j=function(e){var t=a.a.useContext(O),l=t;return e&&(l="function"==typeof e?e(t):b(b({},t),e)),l},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},i=a.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,O=u(e,["components","mdxType","originalType","parentName"]),i=j(l),d=n,s=i["".concat(r,".").concat(d)]||i[d]||o[d]||c;return l?a.a.createElement(s,b(b({ref:t},O),{},{components:l})):a.a.createElement(s,b({ref:t},O))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=l.length,r=new Array(c);r[0]=i;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var O=2;O<c;O++)r[O]=l[O];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,l)}i.displayName="MDXCreateElement"},874:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return b})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return j}));var n=l(1735),a=l(1736),c=(l(0),l(1737)),r={title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},b={unversionedId:"apis/wxml/IntersectionObserver",id:"apis/wxml/IntersectionObserver",isDocsHomePage:!1,title:"IntersectionObserver",description:"IntersectionObserver \u5bf9\u8c61\uff0c\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002",source:"@site/docs/apis/wxml/IntersectionObserver.md",slug:"/apis/wxml/IntersectionObserver",permalink:"/taro/docs/next/apis/wxml/IntersectionObserver",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/wxml/IntersectionObserver.md",version:"current",sidebar_label:"IntersectionObserver",sidebar:"API",previous:{title:"Taro.createIntersectionObserver(component, options)",permalink:"/taro/docs/next/apis/wxml/createIntersectionObserver"},next:{title:"NodesRef",permalink:"/taro/docs/next/apis/wxml/NodesRef"}},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"disconnect",id:"disconnect",children:[]},{value:"observe",id:"observe",children:[]},{value:"relativeTo",id:"relativeto",children:[]},{value:"relativeToViewport",id:"relativetoviewport",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"ObserveCallback",id:"observecallback",children:[]},{value:"ObserveCallbackResult",id:"observecallbackresult",children:[]},{value:"RelativeRectResult",id:"relativerectresult",children:[]},{value:"IntersectionRectResult",id:"intersectionrectresult",children:[]},{value:"BoundingClientRectResult",id:"boundingclientrectresult",children:[]},{value:"RelativeToMargins",id:"relativetomargins",children:[]},{value:"RelativeToViewportMargins",id:"relativetoviewportmargins",children:[]}]}],O={rightToc:u};function j(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},O,l,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"IntersectionObserver")," \u5bf9\u8c61\uff0c\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.a)("h3",{id:"disconnect"},"disconnect"),Object(c.a)("p",null,"\u505c\u6b62\u76d1\u542c\u3002\u56de\u8c03\u51fd\u6570\u5c06\u4e0d\u518d\u89e6\u53d1"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.a)("h3",{id:"observe"},"observe"),Object(c.a)("p",null,"\u6307\u5b9a\u76ee\u6807\u8282\u70b9\u5e76\u5f00\u59cb\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u60c5\u51b5"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(targetSelector: string, callback: ObserveCallback) => void\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"targetSelector"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u9009\u62e9\u5668")),Object(c.a)("tr",null,Object(c.a)("td",null,"callback"),Object(c.a)("td",null,Object(c.a)("code",null,"ObserveCallback")),Object(c.a)("td",null,"\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h3",{id:"relativeto"},"relativeTo"),Object(c.a)("p",null,"\u4f7f\u7528\u9009\u62e9\u5668\u6307\u5b9a\u4e00\u4e2a\u8282\u70b9\uff0c\u4f5c\u4e3a\u53c2\u7167\u533a\u57df\u4e4b\u4e00\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(selector: string, margins?: RelativeToMargins) => IntersectionObserver\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"selector"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u9009\u62e9\u5668")),Object(c.a)("tr",null,Object(c.a)("td",null,"margins"),Object(c.a)("td",null,Object(c.a)("code",null,"RelativeToMargins")),Object(c.a)("td",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c")))),Object(c.a)("h3",{id:"relativetoviewport"},"relativeToViewport"),Object(c.a)("p",null,"\u6307\u5b9a\u9875\u9762\u663e\u793a\u533a\u57df\u4f5c\u4e3a\u53c2\u7167\u533a\u57df\u4e4b\u4e00"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(margins?: RelativeToViewportMargins) => IntersectionObserver\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"margins"),Object(c.a)("td",null,Object(c.a)("code",null,"RelativeToViewportMargins")),Object(c.a)("td",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c")))),Object(c.a)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u76ee\u6807\u8282\u70b9\uff08\u7528\u9009\u62e9\u5668 .target-class \u6307\u5b9a\uff09\u8fdb\u5165\u663e\u793a\u533a\u57df\u4ee5\u4e0b 100px \u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {\n  res.intersectionRatio // \u76f8\u4ea4\u533a\u57df\u5360\u76ee\u6807\u8282\u70b9\u7684\u5e03\u5c40\u533a\u57df\u7684\u6bd4\u4f8b\n  res.intersectionRect // \u76f8\u4ea4\u533a\u57df\n  res.intersectionRect.left // \u76f8\u4ea4\u533a\u57df\u7684\u5de6\u8fb9\u754c\u5750\u6807\n  res.intersectionRect.top // \u76f8\u4ea4\u533a\u57df\u7684\u4e0a\u8fb9\u754c\u5750\u6807\n  res.intersectionRect.width // \u76f8\u4ea4\u533a\u57df\u7684\u5bbd\u5ea6\n  res.intersectionRect.height // \u76f8\u4ea4\u533a\u57df\u7684\u9ad8\u5ea6\n})\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"observecallback"},"ObserveCallback"),Object(c.a)("p",null,"\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(result: ObserveCallbackResult) => void\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"result"),Object(c.a)("td",null,Object(c.a)("code",null,"ObserveCallbackResult"))))),Object(c.a)("h3",{id:"observecallbackresult"},"ObserveCallbackResult"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"boundingClientRect"),Object(c.a)("td",null,Object(c.a)("code",null,"BoundingClientRectResult")),Object(c.a)("td",null,"\u76ee\u6807\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"intersectionRatio"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u76f8\u4ea4\u6bd4\u4f8b")),Object(c.a)("tr",null,Object(c.a)("td",null,"intersectionRect"),Object(c.a)("td",null,Object(c.a)("code",null,"IntersectionRectResult")),Object(c.a)("td",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"relativeRect"),Object(c.a)("td",null,Object(c.a)("code",null,"RelativeRectResult")),Object(c.a)("td",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"time"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u76f8\u4ea4\u68c0\u6d4b\u65f6\u7684\u65f6\u95f4\u6233")))),Object(c.a)("h3",{id:"relativerectresult"},"RelativeRectResult"),Object(c.a)("p",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"bottom"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u4e0b\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"left"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u5de6\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"right"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u53f3\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"top"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u4e0a\u8fb9\u754c")))),Object(c.a)("h3",{id:"intersectionrectresult"},"IntersectionRectResult"),Object(c.a)("p",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"bottom"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u4e0b\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"height"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u9ad8\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"left"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u5de6\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"right"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u53f3\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"top"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u4e0a\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"width"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u5bbd\u5ea6")))),Object(c.a)("h3",{id:"boundingclientrectresult"},"BoundingClientRectResult"),Object(c.a)("p",null,"\u76ee\u6807\u8fb9\u754c"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"bottom"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u4e0b\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"height"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u9ad8\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"left"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u5de6\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"right"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u53f3\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"top"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u4e0a\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"width"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u5bbd\u5ea6")))),Object(c.a)("h3",{id:"relativetomargins"},"RelativeToMargins"),Object(c.a)("p",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"bottom"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0b\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"left"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u5de6\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"right"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u53f3\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"top"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0a\u8fb9\u754c")))),Object(c.a)("h3",{id:"relativetoviewportmargins"},"RelativeToViewportMargins"),Object(c.a)("p",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"bottom"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0b\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"left"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u5de6\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"right"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u53f3\u8fb9\u754c")),Object(c.a)("tr",null,Object(c.a)("td",null,"top"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0a\u8fb9\u754c")))))}j.isMDXComponent=!0}}]);