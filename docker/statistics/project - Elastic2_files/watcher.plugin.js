/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,a,o=t[0],i=t[1],c=0,u=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={0:0};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"watcher.chunk."+e+".js"}(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var o=window.watcher_bundle_jsonpfunction=window.watcher_bundle_jsonpfunction||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=i;a(a.s=9)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return g})),n.d(t,"m",(function(){return _})),n.d(t,"n",(function(){return m})),n.d(t,"f",(function(){return w}));const r={SIMULATE:"simulate",FORCE_SIMULATE:"force_simulate",EXECUTE:"execute",FORCE_EXECUTE:"force_execute",SKIP:"skip"};var a=n(0);const o={OK:a.i18n.translate("xpack.watcher.constants.actionStates.okStateText",{defaultMessage:"OK"}),ACKNOWLEDGED:a.i18n.translate("xpack.watcher.constants.actionStates.acknowledgedStateText",{defaultMessage:"Acked"}),THROTTLED:a.i18n.translate("xpack.watcher.constants.actionStates.throttledStateText",{defaultMessage:"Throttled"}),FIRING:a.i18n.translate("xpack.watcher.constants.actionStates.firingStateText",{defaultMessage:"Firing"}),ERROR:a.i18n.translate("xpack.watcher.constants.actionStates.errorStateText",{defaultMessage:"Error"}),CONFIG_ERROR:a.i18n.translate("xpack.watcher.constants.actionStates.configErrorStateText",{defaultMessage:"Config error"}),UNKNOWN:a.i18n.translate("xpack.watcher.constants.actionStates.unknownStateText",{defaultMessage:"Unknown"})},i={EMAIL:"email",WEBHOOK:"webhook",INDEX:"index",LOGGING:"logging",SLACK:"slack",JIRA:"jira",PAGERDUTY:"pagerduty",UNKNOWN:"unknown/invalid"},c={COUNT:"count",AVERAGE:"avg",SUM:"sum",MIN:"min",MAX:"max"},s={GREATER_THAN:">",GREATER_THAN_OR_EQUALS:">=",BETWEEN:"between",LESS_THAN:"<",LESS_THAN_OR_EQUALS:"<="},u={initialPageSize:10,pageSizeOptions:[10,50,100]},l={ID:"watcher",MINIMUM_LICENSE_REQUIRED:"gold",getI18nName:e=>e.translate("xpack.watcher.appName",{defaultMessage:"Watcher"})},d=6e4,h={WATCH_LIST:d,WATCH_HISTORY:d,WATCH_VISUALIZATION:d},p={API_ROOT:"/api/watcher"},f={ASCENDING:"asc",DESCENDING:"desc"},g={SECOND:"s",MINUTE:"m",HOUR:"h",DAY:"d"},_=(a.i18n.translate("xpack.watcher.constants.watchStateComments.partiallyThrottledStateCommentText",{defaultMessage:"Partially throttled"}),a.i18n.translate("xpack.watcher.constants.watchStateComments.throttledStateCommentText",{defaultMessage:"Throttled"}),a.i18n.translate("xpack.watcher.constants.watchStateComments.partiallyAcknowledgedStateCommentText",{defaultMessage:"Partially acked"}),a.i18n.translate("xpack.watcher.constants.watchStateComments.acknowledgedStateCommentText",{defaultMessage:"Acked"}),a.i18n.translate("xpack.watcher.constants.watchStateComments.executionFailingStateCommentText",{defaultMessage:"Execution failing"}),{DISABLED:a.i18n.translate("xpack.watcher.constants.watchStates.disabledStateText",{defaultMessage:"Disabled"}),OK:a.i18n.translate("xpack.watcher.constants.watchStates.okStateText",{defaultMessage:"OK"}),FIRING:a.i18n.translate("xpack.watcher.constants.watchStates.firingStateText",{defaultMessage:"Firing"}),ERROR:a.i18n.translate("xpack.watcher.constants.watchStates.errorStateText",{defaultMessage:"Error"}),CONFIG_ERROR:a.i18n.translate("xpack.watcher.constants.watchStates.configErrorStateText",{defaultMessage:"Config error"})}),m={JSON:"json",THRESHOLD:"threshold",MONITORING:"monitoring"},w={ERR_PROP_MISSING:"ERR_PROP_MISSING"}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],s=t.base?o[0]+t.base:o[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(h)):i.push({identifier:l,updater:_(h,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function _(e,t){var n,r,a;if(t.singleton){var o=g++;n=f||(f=u(t)),r=h.bind(null,n,o,!1),a=h.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);i[a].references--}for(var o=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t,n){e.exports=n(8)(1075)},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/home/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(10),__kbnBundles__.define("plugin/watcher/public",n,20)},function(e,t,n){n.p=window.__kbnPublicPath__.watcher},function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(12);case"v7light":return n(14);case"v8dark":return n(16);case"v8light":return n(18)}},function(e,t,n){var r=n(3),a=n(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".watcherThresholdWatchActionDropdownContainer{justify-content:flex-end;flex-direction:row}.watcherThresholdWatchActionContextMenuItem,.watcherThresholdWatchInBetweenComparatorText{align-self:center}.watcherThresholdAlertAggFieldContainer{width:300px}",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".watcherThresholdWatchActionDropdownContainer{justify-content:flex-end;flex-direction:row}.watcherThresholdWatchActionContextMenuItem,.watcherThresholdWatchInBetweenComparatorText{align-self:center}.watcherThresholdAlertAggFieldContainer{width:300px}",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".watcherThresholdWatchActionDropdownContainer{justify-content:flex-end;flex-direction:row}.watcherThresholdWatchActionContextMenuItem,.watcherThresholdWatchInBetweenComparatorText{align-self:center}.watcherThresholdAlertAggFieldContainer{width:300px}",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(19);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".watcherThresholdWatchActionDropdownContainer{justify-content:flex-end;flex-direction:row}.watcherThresholdWatchActionContextMenuItem,.watcherThresholdWatchInBetweenComparatorText{align-self:center}.watcherThresholdAlertAggFieldContainer{width:300px}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return d}));n(11);var r=n(6),a=n.n(r),o=n(0),i=n(1),c=n(5),s=n(7),u=n(2);const l=e=>{const{state:t,message:n}=e.check(u.h.ID,u.h.MINIMUM_LICENSE_REQUIRED);return{valid:"valid"===t&&e.getFeature(u.h.ID).isAvailable,message:n}};class plugin_WatcherUIPlugin{constructor(){a()(this,"capabilities$",new c.Subject)}setup({notifications:e,http:t,uiSettings:r,getStartServices:a},{licensing:u,management:d,data:h,home:p,charts:f}){const g=d.sections.section.insightsAndAlerting,_=o.i18n.translate("xpack.watcher.sections.watchList.managementSection.watcherDisplayName",{defaultMessage:"Watcher"}),m=g.registerApp({id:"watcher",title:_,order:3,mount:async({element:o,setBreadcrumbs:c,history:s})=>{const[d]=await a(),{chrome:{docTitle:p},i18n:g,docLinks:m,savedObjects:w,application:b}=d;p.change(_);const{renderApp:x}=await n.e(1).then(n.bind(null,58)),{TimeBuckets:S}=await n.e(2).then(n.bind(null,59)),v=x({licenseStatus$:u.license$.pipe(Object(i.skip)(1),Object(i.map)(l)),element:o,toasts:e.toasts,http:t,uiSettings:r,docLinks:m,setBreadcrumbs:c,theme:f.theme,savedObjects:w.client,I18nContext:g.Context,createTimeBuckets:()=>new S(r,h),history:s,getUrlForApp:b.getUrlForApp});return()=>{p.reset(),v()}}}),w={id:"watcher",title:"Watcher",category:s.FeatureCatalogueCategory.ADMIN,description:o.i18n.translate("xpack.watcher.watcherDescription",{defaultMessage:"Detect changes in your data by creating, managing, and monitoring alerts."}),icon:"watchesApp",path:"/app/management/insightsAndAlerting/watcher/watches",showOnHomePage:!1};p.featureCatalogue.register(w),Object(c.combineLatest)([u.license$.pipe(Object(i.first)(),Object(i.map)(l)),this.capabilities$]).subscribe((([{valid:e},t])=>{var n;e&&!0===(null===(n=t.management.insightsAndAlerting)||void 0===n?void 0:n.watcher)?m.enable():m.disable()}))}start(e){this.capabilities$.next(e.application.capabilities)}stop(){}}const d=()=>new plugin_WatcherUIPlugin},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.SaferLodashSet},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/fieldFormats/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}]);