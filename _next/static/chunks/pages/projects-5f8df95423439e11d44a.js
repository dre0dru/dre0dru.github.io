_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{D85t:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r("RHEb")}])},G30a:function(e,t,r){"use strict";var n=r("FdF9").default.createElement;t.a=function(e){var t=e.alt,r=e.src,a=e.className,i=e.width,o=e.height;return n("img",{alt:t,src:r,className:a,width:i,height:o})}},RHEb:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r("FdF9"),a=r("G30a"),i=r("bsnj"),o=[{title:"Tu-144",description:"An interactive museum inside legendary supersonic aircraft.",imgSrc:"/static/images/social-banner.png",href:"/blog/tu-144"},{title:"Military museum",description:"Augmenting maquettes with digital content in Military Museum situated in Moscow.",imgSrc:"/static/images/social-banner.png",href:"/blog/military-museum"},{title:"Ecocenter",description:"Ecocenter is a space located in the heart of the Gorkinsky-Ometyevsky forest of Kazan, in which children receive important environmental knowledge in an interactive way.",imgSrc:"/static/images/portfolio/ecocenter.jpg",href:"/blog/ecocenter"},{title:"Park Tupoley",description:'This application is an augmented reality addition to the interactive exhibition "Park Tupoley", located in the KNITU-KAI campus.',imgSrc:"/static/images/portfolio/park_tu_3.png",href:"/blog/park-tupoley"},{title:"No-spa forte",description:"Marketing solution for the pharmaceutical company Sanofi (France).",imgSrc:"/static/images/social-banner.png",href:"/blog/no-spa-forte"},{title:"KNITU-KAI admission campaign",description:"Admission campaign for the 2019/2020 school year - augmented reality for the brochure of Kazan National Technical University KNITU-KAI.",imgSrc:"/static/images/social-banner.png",href:"/blog/kai-admission-campaign"}],c=r("YNhk"),l=n.default.createElement,s=function(e){var t=e.title,r=e.description,n=e.imgSrc,i=e.href;return l("div",{className:"p-4 md:w-1/2 md",style:{maxWidth:"544px"}},l("div",{className:"h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden"},i?l(c.a,{href:i,"aria-label":"Link to ".concat(t)},l(a.a,{alt:t,src:n,className:"lg:h-48 md:h-36 object-cover object-center",width:544,height:306})):l(a.a,{alt:t,src:n,className:"lg:h-48 md:h-36 object-cover object-center",width:544,height:306}),l("div",{className:"p-6"},l("h2",{className:"text-2xl font-bold leading-8 tracking-tight mb-3"},i?l(c.a,{href:i,"aria-label":"Link to ".concat(t)},t):t),l("p",{className:"prose text-gray-500 max-w-none dark:text-gray-400 mb-3"},r),i&&l(c.a,{href:i,className:"text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400","aria-label":"Link to ".concat(t)},"Learn more \u2192"))))},u=r("7+lg"),f=n.default.createElement;function d(){return f(n.default.Fragment,null,f(u.b,{title:"Projects - ".concat(i.author),description:i.description,url:"".concat(i.siteUrl,"/projects")}),f("div",{className:"divide-y divide-gray-200 dark:divide-gray-700"},f("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5"},f("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},"Projects")),f("div",{className:"container py-12"},f("div",{className:"flex flex-wrap -m-4"},o.map((function(e){return f(s,{key:e.title,title:e.title,description:e.description,imgSrc:e.imgSrc,href:e.href})}))))))}},YFqc:function(e,t,r){e.exports=r("cTJO")},YNhk:function(e,t,r){"use strict";var n=r("wx14");function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=r("FdF9"),o=r("YFqc"),c=r.n(o),l=i.default.createElement;t.a=function(e){var t=e.href,r=a(e,["href"]),i=t&&t.startsWith("/"),o=t&&t.startsWith("#");return i?l(c.a,{href:t},l("a",r)):l("a",o?Object(n.a)({href:t},r):Object(n.a)({target:"_blank",rel:"noopener noreferrer",href:t},r))}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var i=a(r("FdF9")),o=r("elyg"),c=r("nOHt"),l=r("vNVm"),s={};function u(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",f=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),r=n(t,2),i=r[0],c=r[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=i.Children.only(m),k=y&&"object"===typeof y&&y.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),N=n(w,2),x=N[0],E=N[1],j=i.default.useCallback((function(e){x(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,x]);(0,i.useEffect)((function(){var e=E&&t&&(0,o.isLocalURL)(d),n="undefined"!==typeof b?b:r&&r.locale,a=s[d+"%"+p+(n?"%"+n:"")];e&&!a&&u(r,d,p,{locale:n})}),[p,d,E,b,t,r]);var O={ref:j,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:i,locale:l,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,r,d,p,h,g,v,b)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof b?b:r&&r.locale,L=r&&r.isLocaleDomain&&(0,o.getDomainLocale)(p,_,r&&r.locales,r&&r.domainLocales);O.href=L||(0,o.addBasePath)((0,o.addLocale)(p,_,r&&r.defaultLocale))}return i.default.cloneElement(y,O)};t.default=f},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,l=(0,a.useRef)(),s=(0,a.useState)(!1),u=n(s,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!o&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r("FdF9"),i=r("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}},[["D85t",0,1,2,3]]]);