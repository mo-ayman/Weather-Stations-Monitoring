!function(e){function t(t){for(var n,i,o=t[0],s=t[1],u=0,c=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(a&&a(t);c.length;)c.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"inspector.chunk."+e+".js"}(e);var a=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.inspector_bundle_jsonpfunction=window.inspector_bundle_jsonpfunction||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var a=s;i(i.s=13)}([function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){e.exports=n(24)(1075)},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function u(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],c=n[a]||0,l="".concat(a," ").concat(c);n[a]=c+1;var p=u(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(s[p].references++,s[p].updater(f)):s.push({identifier:l,updater:_(f,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function _(e,t){var n,r,i;if(t.singleton){var o=v++;n=h||(h=c(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=c(t),r=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=u(n[r]);s[i].references--}for(var o=a(e,t),c=0;c<n.length;c++){var l=u(n[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,u,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var a=[].concat(e[u]);r&&i[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.d(t,"c",(function(){return r.RequestStatus})),n.d(t,"a",(function(){return r.RequestAdapter})),n.d(t,"b",(function(){return r.RequestResponder}));var r=n(11)},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}g(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&g(e,"error",t,n)}(e,i,{once:!0})}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var a=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function p(e,t,n,r){var i,o,s,u;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=l(e))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,u=a,console&&console.warn&&console.warn(u)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):_(i,i.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function _(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function g(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return l(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var a=i[e];if(void 0===a)return!1;if("function"==typeof a)o(a,this,t);else{var c=a.length,l=_(a,c);for(n=0;n<c;++n)o(l[n],this,t)}return!0},u.prototype.addListener=function(e,t){return p(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return p(this,e,t,!0)},u.prototype.once=function(e,t){return c(t),this.on(e,d(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,d(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,i,o,s;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return h(this,e,!0)},u.prototype.rawListeners=function(e){return h(this,e,!1)},u.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},u.prototype.listenerCount=v,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){"use strict";n.r(t),n.d(t,"RequestStatus",(function(){return r})),n.d(t,"RequestAdapter",(function(){return request_adapter_RequestAdapter})),n.d(t,"RequestResponder",(function(){return request_responder_RequestResponder}));let r=function(e){return e[e.PENDING=0]="PENDING",e[e.OK=1]="OK",e[e.ERROR=2]="ERROR",e}({});var i=n(1),o=n.n(i),s=n(9),u=n(12),a=n.n(u),c=n(3);class request_responder_RequestResponder{constructor(e,t){o()(this,"request",void 0),o()(this,"onChange",void 0),this.request=e,this.onChange=t}json(e){return this.request.json=e,this.onChange(),this}stats(e){this.request.stats={...this.request.stats||{},...e};const t=new Date(this.request.startTime);return this.request.stats.requestTimestamp={label:c.i18n.translate("inspector.reqTimestampKey",{defaultMessage:"Request timestamp"}),value:t.toISOString(),description:c.i18n.translate("inspector.reqTimestampDescription",{defaultMessage:"Time when the start of the request has been logged"})},this.onChange(),this}finish(e,t){var n;this.request.time=null!==(n=t.time)&&void 0!==n?n:Date.now()-this.request.startTime,this.request.status=e,this.request.response=t,this.onChange()}ok(e){this.finish(r.OK,e)}error(e){this.finish(r.ERROR,e)}}class request_adapter_RequestAdapter extends s.EventEmitter{constructor(){super(),o()(this,"requests",void 0),this.requests=new Map}start(e,t={},n=Date.now()){var i;const o={...t,name:e,startTime:n,status:r.PENDING,id:null!==(i=t.id)&&void 0!==i?i:a()()};return this.requests.set(o.id,o),this._onChange(),new request_responder_RequestResponder(o,(()=>this._onChange()))}reset(){this.requests=new Map,this._onChange()}resetRequest(e){this.requests.delete(e),this._onChange()}getRequests(){return Array.from(this.requests.values())}_onChange(){this.emit("change")}}},function(e,t,n){var r=n(34),i=n(35);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var u=0;u<16;++u)t[o+u]=s[u];return t||i(s)}},function(e,t,n){n(14),__kbnBundles__.define("plugin/inspector/public",n,37),__kbnBundles__.define("plugin/inspector/common",n,36),__kbnBundles__.define("plugin/inspector/common/adapters/request",n,11)},function(e,t,n){n.p=window.__kbnPublicPath__.inspector},function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(16);case"v7light":return n(18);case"v8dark":return n(20);case"v8light":return n(22)}},function(e,t,n){var r=n(5),i=n(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insRequestDetailsStats__icon{margin-right:8px}.insRequestSelector__singleRequest{height:32px;padding:0 8px;display:flex;align-items:center}.insRequestSelector__menuSpinner{margin-left:8px}.insRequestCodeViewer .react-monaco-editor-container{flex-grow:1}",""]),e.exports=t},function(e,t,n){var r=n(5),i=n(19);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insRequestDetailsStats__icon{margin-right:8px}.insRequestSelector__singleRequest{height:32px;padding:0 8px;display:flex;align-items:center}.insRequestSelector__menuSpinner{margin-left:8px}.insRequestCodeViewer .react-monaco-editor-container{flex-grow:1}",""]),e.exports=t},function(e,t,n){var r=n(5),i=n(21);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insRequestDetailsStats__icon{margin-right:8px}.insRequestSelector__singleRequest{height:32px;padding:0 8px;display:flex;align-items:center}.insRequestSelector__menuSpinner{margin-left:8px}.insRequestCodeViewer .react-monaco-editor-container{flex-grow:1}",""]),e.exports=t},function(e,t,n){var r=n(5),i=n(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insRequestDetailsStats__icon{margin-right:8px}.insRequestSelector__singleRequest{height:32px;padding:0 8px;display:flex;align-items:center}.insRequestSelector__menuSpinner{margin-left:8px}.insRequestCodeViewer .react-monaco-editor-container{flex-grow:1}",""]),e.exports=t},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(26);case"v7light":return n(28);case"v8dark":return n(30);case"v8light":return n(32)}},function(e,t,n){var r=n(5),i=n(27);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent{height:100%;display:flex;flex-wrap:nowrap;flex-direction:column}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent>div{flex-grow:0}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent .insRequestCodeViewer{flex-grow:1}",""]),e.exports=t},function(e,t,n){var r=n(5),i=n(29);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent{height:100%;display:flex;flex-wrap:nowrap;flex-direction:column}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent>div{flex-grow:0}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent .insRequestCodeViewer{flex-grow:1}",""]),e.exports=t},function(e,t,n){var r=n(5),i=n(31);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent{height:100%;display:flex;flex-wrap:nowrap;flex-direction:column}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent>div{flex-grow:0}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent .insRequestCodeViewer{flex-grow:1}",""]),e.exports=t},function(e,t,n){var r=n(5),i=n(33);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent{height:100%;display:flex;flex-wrap:nowrap;flex-direction:column}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent>div{flex-grow:0}.insInspectorPanel__flyoutBody .euiFlyoutBody__overflowContent .insRequestCodeViewer{flex-grow:1}",""]),e.exports=t},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,t,n){"use strict";n.r(t);var r=n(7);n.d(t,"RequestAdapter",(function(){return r.a})),n.d(t,"RequestStatus",(function(){return r.c})),n.d(t,"RequestResponder",(function(){return r.b}))},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return v})),n.d(t,"Plugin",(function(){return plugin_InspectorPublicPlugin})),n.d(t,"RequestStatus",(function(){return h.c})),n.d(t,"RequestAdapter",(function(){return h.a})),n.d(t,"RequestResponder",(function(){return h.b}));n(15);var r=n(1),i=n.n(r),o=n(3),s=n(4),u=n(8),a=n(9);class view_registry_InspectorViewRegistry extends a.EventEmitter{constructor(...e){super(...e),i()(this,"views",[])}register(e){e&&(this.views.push(e),this.views.sort(((e,t)=>(e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE))),this.emit("change"))}getAll(){return this.views}getVisible(e){return e?this.views.filter((t=>!t.shouldShow||t.shouldShow(e))):[]}}n(25);var c=n(2),l=n(10),p=n(0);class inspector_view_chooser_InspectorViewChooser extends s.Component{constructor(...e){super(...e),i()(this,"state",{isSelectorOpen:!1}),i()(this,"toggleSelector",(()=>{this.setState((e=>({isSelectorOpen:!e.isSelectorOpen})))})),i()(this,"closeSelector",(()=>{this.setState({isSelectorOpen:!1})})),i()(this,"renderView",((e,t)=>Object(p.jsx)(c.EuiContextMenuItem,{key:t,onClick:()=>{this.props.onViewSelected(e),this.closeSelector()},toolTipContent:e.help,toolTipPosition:"left","data-test-subj":`inspectorViewChooser${e.title}`},e.title)))}renderViewButton(){return Object(p.jsx)(c.EuiButtonEmpty,{size:"s",iconType:"arrowDown",iconSide:"right",onClick:this.toggleSelector,"data-test-subj":"inspectorViewChooser"},Object(p.jsx)(l.FormattedMessage,{id:"inspector.view",defaultMessage:"View: {viewName}",values:{viewName:this.props.selectedView.title}}))}renderSingleView(){return Object(p.jsx)(c.EuiToolTip,{position:"bottom",content:this.props.selectedView.help},Object(p.jsx)(l.FormattedMessage,{id:"inspector.view",defaultMessage:"View: {viewName}",values:{viewName:this.props.selectedView.title}}))}render(){const{views:e}=this.props;if(e.length<2)return this.renderSingleView();const t=this.renderViewButton();return Object(p.jsx)(c.EuiPopover,{id:"inspectorViewChooser",button:t,isOpen:this.state.isSelectorOpen,closePopover:this.closeSelector,panelPaddingSize:"none",anchorPosition:"downRight",repositionOnScroll:!0},Object(p.jsx)(c.EuiContextMenuPanel,{items:e.map(this.renderView)}))}}const f=o.i18n.translate("inspector.title",{defaultMessage:"Inspector"});class inspector_panel_InspectorPanel extends s.Component{constructor(...e){super(...e),i()(this,"state",{selectedView:this.props.views[0],views:this.props.views,adapters:{...this.props.adapters}}),i()(this,"onViewSelected",(e=>{e!==this.state.selectedView&&this.setState({selectedView:e})}))}static getDerivedStateFromProps(e,t){if(n=t.adapters,r=e.adapters,Object.keys(n).length!==Object.keys(r).length||Object.keys(n).some((e=>n[e]!==r[e])))throw new Error("Adapters are not allowed to be changed on an open InspectorPanel.");var n,r;const i=e.views!==t.views&&!e.views.includes(t.selectedView);return{views:e.views,selectedView:i?e.views[0]:t.selectedView}}renderSelectedPanel(){return Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)(c.EuiLoadingSpinner,null)},Object(p.jsx)(this.state.selectedView.component,{adapters:this.props.adapters,title:this.props.title||"",options:this.props.options}))}render(){const{views:e,title:t,dependencies:n}=this.props,{selectedView:r}=this.state;return Object(p.jsx)(u.KibanaContextProvider,{services:n},Object(p.jsx)(c.EuiFlyoutHeader,{hasBorder:!0},Object(p.jsx)(c.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},Object(p.jsx)(c.EuiFlexItem,{grow:!0},Object(p.jsx)(c.EuiTitle,{size:"s"},Object(p.jsx)("h1",null,t))),Object(p.jsx)(c.EuiFlexItem,{grow:!1},Object(p.jsx)(inspector_view_chooser_InspectorViewChooser,{views:e,onViewSelected:this.onViewSelected,selectedView:r})))),Object(p.jsx)(c.EuiFlyoutBody,{className:"insInspectorPanel__flyoutBody"},this.renderSelectedPanel()))}}i()(inspector_panel_InspectorPanel,"defaultProps",{title:f});const d=Object(s.lazy)((()=>n.e(1).then(n.bind(null,40))));class plugin_InspectorPublicPlugin{constructor(e){i()(this,"views",void 0)}setup(e){return this.views=new view_registry_InspectorViewRegistry,this.views.register({title:o.i18n.translate("inspector.requests.requestsTitle",{defaultMessage:"Requests"}),order:20,help:o.i18n.translate("inspector.requests.requestsDescriptionTooltip",{defaultMessage:"View the requests that collected the data"}),shouldShow:e=>Boolean(e.requests),component:d}),{registerView:this.views.register.bind(this.views),__LEGACY:{views:this.views}}}start(e,t){const n=o.i18n.translate("inspector.closeButton",{defaultMessage:"Close Inspector"});return{isAvailable:e=>this.views.getVisible(e).length>0,open:(r,i={})=>{const o=this.views.getVisible(r);if(!o||0===o.length)throw new Error("Tried to open an inspector without views being available.\n          Make sure to call Inspector.isAvailable() with the same adapters before to check\n          if an inspector can be shown.");return e.overlays.openFlyout(Object(u.toMountPoint)(Object(p.jsx)(inspector_panel_InspectorPanel,{views:o,adapters:r,title:i.title,options:i.options,dependencies:{application:e.application,http:e.http,uiSettings:e.uiSettings,share:t.share}})),{"data-test-subj":"inspectorPanel",closeButtonAriaLabel:n})}}}stop(){}}var h=n(7);function v(e){return new plugin_InspectorPublicPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco}]);