!function(e){function n(n){for(var i,r,a=n[0],o=n[1],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&p.push(t[r][0]),t[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(c&&c(n);p.length;)p.shift()()}var i={},t={0:0};function r(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(e){var n=[],i=t[e];if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(n,r){i=t[e]=[n,r]}));n.push(i[2]=a);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=function(e){return r.p+"kibanaOverview.chunk."+e+".js"}(e);var c=new Error;o=function(n){d.onerror=d.onload=null,clearTimeout(p);var i=t[e];if(0!==i){if(i){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}t[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(n)},r.m=e,r.c=i,r.d=function(e,n,i){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(i,t,function(n){return e[n]}.bind(null,t));return i},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r.oe=function(e){throw console.error(e),e};var a=window.kibanaOverview_bundle_jsonpfunction=window.kibanaOverview_bundle_jsonpfunction||[],o=a.push.bind(a);a.push=n,a=a.slice();for(var d=0;d<a.length;d++)n(a[d]);var c=o;r(r.s=9)}([function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return r})),i.d(n,"d",(function(){return a})),i.d(n,"a",(function(){return o}));const t="kibanaOverview",r="Overview",a="/app/kibana_overview",o="logoKibana"},function(e,n,i){i.r(n);var t=__kbnBundles__.get("entry/core/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(t))},function(e,n){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,n,i){"use strict";var t,r=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[n]=i}return e[n]}}(),o=[];function d(e){for(var n=-1,i=0;i<o.length;i++)if(o[i].identifier===e){n=i;break}return n}function c(e,n){for(var i={},t=[],r=0;r<e.length;r++){var a=e[r],c=n.base?a[0]+n.base:a[0],p=i[c]||0,s="".concat(c," ").concat(p);i[c]=p+1;var v=d(s),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==v?(o[v].references++,o[v].updater(l)):o.push({identifier:s,updater:x(l,n),references:1}),t.push(s)}return t}function p(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var r=i.nc;r&&(t.nonce=r)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,v=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function l(e,n,i,t){var r=i?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=v(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function m(e,n,i){var t=i.css,r=i.media,a=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var w=null,u=0;function x(e,n){var i,t,r;if(n.singleton){var a=u++;i=w||(w=p(n)),t=l.bind(null,i,a,!1),r=l.bind(null,i,a,!0)}else i=p(n),t=m.bind(null,i,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var i=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<i.length;t++){var r=d(i[t]);o[r].references--}for(var a=c(e,n),p=0;p<i.length;p++){var s=d(i[p]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}i=a}}}},function(e,n,i){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var i=function(e,n){var i=e[1]||"",t=e[3];if(!t)return i;if(n&&"function"==typeof btoa){var r=(o=t,d=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[i].concat(a).concat([r]).join("\n")}var o,d,c;return[i].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(i,"}"):i})).join("")},n.i=function(e,i,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);t&&r[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),n.push(c))}},n}},function(e,n){e.exports=__kbnSharedDeps__.KbnI18n},function(e,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o}));var t=i(7);let r;function a(e){r=e}function o(e,n){r&&r("kibana_overview",e,n)}i.d(n,"a",(function(){return t.METRIC_TYPE}))},function(e,n){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,n){e.exports=__kbnSharedDeps__.Rxjs},function(e,n,i){i(10),__kbnBundles__.define("plugin/kibanaOverview/public",i,20)},function(e,n,i){i.p=window.__kbnPublicPath__.kibanaOverview},function(e,n,i){switch(window.__kbnThemeTag__){case"v7dark":return i(12);case"v7light":return i(14);case"v8dark":return i(16);case"v8light":return i(18)}},function(e,n,i){var t=i(3),r=i(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};t(r,a);e.exports=r.locals||{}},function(e,n,i){(n=i(4)(!1)).push([e.i,".kbnOverviewApps__item .kbnRedirectCrossAppLinks,.kbnOverviewMore__item .kbnRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}.kbnOverviewNews__content article+article{margin-top:24px}.kbnOverviewNews__content article>*+*,.kbnOverviewNews__content article header>*+*{margin-top:4px}.kbnOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}.kbnOverviewSolution.enterpriseSearch .euiCard__image{background-color:#ffce7a}.kbnOverviewSolution.observability .euiCard__image{background-color:#f990c0}.kbnOverviewSolution.securitySolution .euiCard__image{background-color:#7de2d1}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}.kbnOverviewData--expanded{flex-direction:column}.kbnOverviewData--expanded,.kbnOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}",""]),e.exports=n},function(e,n,i){var t=i(3),r=i(15);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};t(r,a);e.exports=r.locals||{}},function(e,n,i){(n=i(4)(!1)).push([e.i,".kbnOverviewApps__item .kbnRedirectCrossAppLinks,.kbnOverviewMore__item .kbnRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}.kbnOverviewNews__content article+article{margin-top:24px}.kbnOverviewNews__content article>*+*,.kbnOverviewNews__content article header>*+*{margin-top:4px}.kbnOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}.kbnOverviewSolution.enterpriseSearch .euiCard__image{background-color:#f5a700}.kbnOverviewSolution.observability .euiCard__image{background-color:#dd0a73}.kbnOverviewSolution.securitySolution .euiCard__image{background-color:#017d73}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}.kbnOverviewData--expanded{flex-direction:column}.kbnOverviewData--expanded,.kbnOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}",""]),e.exports=n},function(e,n,i){var t=i(3),r=i(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};t(r,a);e.exports=r.locals||{}},function(e,n,i){(n=i(4)(!1)).push([e.i,".kbnOverviewApps__item .kbnRedirectCrossAppLinks,.kbnOverviewMore__item .kbnRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}.kbnOverviewNews__content article+article{margin-top:24px}.kbnOverviewNews__content article>*+*,.kbnOverviewNews__content article header>*+*{margin-top:4px}.kbnOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}.kbnOverviewSolution.enterpriseSearch .euiCard__image{background-color:#f3d371}.kbnOverviewSolution.observability .euiCard__image{background-color:#f68fbe}.kbnOverviewSolution.securitySolution .euiCard__image{background-color:#7dded8}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}.kbnOverviewData--expanded{flex-direction:column}.kbnOverviewData--expanded,.kbnOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}",""]),e.exports=n},function(e,n,i){var t=i(3),r=i(19);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};t(r,a);e.exports=r.locals||{}},function(e,n,i){(n=i(4)(!1)).push([e.i,".kbnOverviewApps__item .kbnRedirectCrossAppLinks,.kbnOverviewMore__item .kbnRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--primary .kbnOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewApps__group--secondary .kbnOverviewApps__item{max-width:calc(25% - 24px)}}.kbnOverviewNews__content article+article{margin-top:24px}.kbnOverviewNews__content article>*+*,.kbnOverviewNews__content article header>*+*{margin-top:4px}.kbnOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewMore__item{max-width:calc(33.3333333333% - 24px)}}.kbnOverviewSolution.enterpriseSearch .euiCard__image{background-color:#fec514}.kbnOverviewSolution.observability .euiCard__image{background-color:#f04e98}.kbnOverviewSolution.securitySolution .euiCard__image{background-color:#00bfb3}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px){.kbnOverviewSupplements--noNews .kbnOverviewMore .kbnOverviewMore__content{justify-content:center}}.kbnOverviewData--expanded{flex-direction:column}.kbnOverviewData--expanded,.kbnOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}@media only screen and (min-width: 768px)and (max-width: 991px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px){.kbnOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}",""]),e.exports=n},function(e,n,i){"use strict";i.r(n),i.d(n,"plugin",(function(){return p}));i(11);var t=i(5),r=i(8),a=i(2),o=i(1),d=i(0),c=i(6);class plugin_KibanaOverviewPlugin{setup(e,{home:n,usageCollection:p}){p&&Object(c.b)(p.reportUiCounter);const s=Object(r.from)(e.getStartServices()).pipe(Object(a.switchMap)((([e])=>e.chrome.navLinks.getNavLinks$())),Object(a.map)((e=>Boolean(e.find((({id:e,category:n,hidden:i})=>!i&&"kibana"===(null==n?void 0:n.id)&&e!==d.b))))),Object(a.distinct)(),Object(a.map)((e=>()=>e?{status:o.AppStatus.accessible,navLinkStatus:o.AppNavLinkStatus.default}:{status:o.AppStatus.inaccessible,navLinkStatus:o.AppNavLinkStatus.hidden})));return e.application.register({category:o.DEFAULT_APP_CATEGORIES.kibana,id:d.b,title:d.c,euiIconType:d.a,order:-2e3,updater$:s,appRoute:d.d,async mount(n){const{renderApp:t}=await i.e(1).then(i.bind(null,32)),[r,a]=await e.getStartServices();return t(r,a,n)}}),n&&n.featureCatalogue.registerSolution({id:"kibana",title:t.i18n.translate("kibanaOverview.kibana.solution.title",{defaultMessage:"Analytics"}),description:t.i18n.translate("kibanaOverview.kibana.solution.description",{defaultMessage:"Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications."}),icon:"logoKibana",path:d.d,order:400}),{}}start(e){return{}}stop(){}}function p(){return new plugin_KibanaOverviewPlugin}},function(e,n){e.exports=__kbnSharedDeps__.React},function(e,n){e.exports=__kbnSharedDeps__.EmotionReact},function(e,n){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,n){e.exports=__kbnSharedDeps__.ElasticEui},function(e,n,i){i.r(n);var t=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(t))},function(e,n){e.exports=__kbnSharedDeps__.ReactDom},function(e,n,i){i.r(n);var t=__kbnBundles__.get("plugin/newsfeed/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(t))},function(e,n){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,n){e.exports=__kbnSharedDeps__.Lodash},function(e,n,i){i.r(n);var t=__kbnBundles__.get("plugin/home/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(t))},function(e,n){e.exports=__kbnSharedDeps__.Classnames}]);