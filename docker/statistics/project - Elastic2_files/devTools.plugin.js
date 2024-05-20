!function(e){function t(t){for(var n,r,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);c.length;)c.shift()()}var n={},o={0:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"devTools.chunk."+e+".js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.devTools_bundle_jsonpfunction=window.devTools_bundle_jsonpfunction||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;r(r.s=7)}([function(e,t,n){e.exports=n(9)(1075)},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:_(p,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,h=0;function _(e,t){var n,o,r;if(t.singleton){var i=h++;n=v||(v=c(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){n.r(t);var o=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){n(8),__kbnBundles__.define("plugin/devTools/public",n,19)},function(e,t,n){n.p=window.__kbnPublicPath__.devTools},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(11);case"v7light":return n(13);case"v8dark":return n(15);case"v8light":return n(17)}},function(e,t,n){var o=n(1),r=n(12);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".devApp__container,.devApp{flex:1 1 auto;display:flex;flex-direction:column}.devApp__container>*,.devApp>*{flex-shrink:0}.devAppWrapper{display:flex;flex-direction:column;flex-grow:1}",""]),e.exports=t},function(e,t,n){var o=n(1),r=n(14);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".devApp__container,.devApp{flex:1 1 auto;display:flex;flex-direction:column}.devApp__container>*,.devApp>*{flex-shrink:0}.devAppWrapper{display:flex;flex-direction:column;flex-grow:1}",""]),e.exports=t},function(e,t,n){var o=n(1),r=n(16);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".devApp__container,.devApp{flex:1 1 auto;display:flex;flex-direction:column}.devApp__container>*,.devApp>*{flex-shrink:0}.devAppWrapper{display:flex;flex-direction:column;flex-grow:1}",""]),e.exports=t},function(e,t,n){var o=n(1),r=n(18);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".devApp__container,.devApp{flex:1 1 auto;display:flex;flex-direction:column}.devApp__container>*,.devApp>*{flex-shrink:0}.devAppWrapper{display:flex;flex-direction:column;flex-grow:1}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return c})),n.d(t,"DevToolsPlugin",(function(){return plugin_DevToolsPlugin}));var o=n(0),r=n.n(o),i=n(5),a=n(4),s=n(6),l=n(3);class dev_tool_DevToolApp{constructor(e,t,n,o,i,a="",s=!1){r()(this,"id",void 0),r()(this,"title",void 0),r()(this,"mount",void 0),r()(this,"disabled",void 0),r()(this,"tooltipContent",void 0),r()(this,"enableRouting",void 0),r()(this,"order",void 0),this.id=e,this.title=t,this.mount=n,this.enableRouting=o,this.order=i,this.tooltipContent=a,this.disabled=s}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return this.disabled}}n(10);class plugin_DevToolsPlugin{constructor(){r()(this,"devTools",new Map),r()(this,"appStateUpdater",new i.BehaviorSubject((()=>({}))))}getSortedDevTools(){return Object(s.sortBy)([...this.devTools.values()],"order")}setup(e,{urlForwarding:t}){const{application:o,getStartServices:r}=e;return o.register({id:"dev_tools",title:a.i18n.translate("devTools.devToolsTitle",{defaultMessage:"Dev Tools"}),updater$:this.appStateUpdater,euiIconType:"logoElastic",order:9010,category:l.DEFAULT_APP_CATEGORIES.management,mount:async e=>{const{element:t,history:o}=e;t.classList.add("devAppWrapper");const[i]=await r(),{application:a,chrome:s}=i,{renderApp:l}=await n.e(1).then(n.bind(null,27));return l(t,a,s,o,this.getSortedDevTools())}}),t.forwardApp("dev_tools","dev_tools"),{register:e=>{if(this.devTools.has(e.id))throw new Error(`Dev tool with id [${e.id}] has already been registered. Use a unique id.`);const t=(({id:e,title:t,mount:n,enableRouting:o,order:r,tooltipContent:i,disabled:a})=>new dev_tool_DevToolApp(e,t,n,o,r,i,a))(e);return this.devTools.set(t.id,t),t}}}start(){0===this.getSortedDevTools().length?this.appStateUpdater.next((()=>({navLinkStatus:l.AppNavLinkStatus.hidden}))):this.appStateUpdater.next((()=>({deepLinks:[...this.devTools.values()].filter((e=>!e.enableRouting&&!e.isDisabled()&&"string"==typeof e.title)).map((e=>({id:e.id,title:e.title,path:`#/${e.id}`})))})))}stop(){}}function c(e){return new plugin_DevToolsPlugin}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.Theme},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact}]);