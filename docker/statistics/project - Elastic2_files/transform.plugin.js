/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var r,o,a=t[0],s=t[1],i=0,u=[];i<a.length;i++)o=a[i],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);u.length;)u.shift()()}var r={},n={1:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=a);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+"transform.chunk."+e+".js"}(e);var c=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}n[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.transform_bundle_jsonpfunction=window.transform_bundle_jsonpfunction||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var c=s;o(o.s=7)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),s=[];function i(e){for(var t=-1,r=0;r<s.length;r++)if(s[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],u=r[c]||0,f="".concat(c," ").concat(u);r[c]=u+1;var l=i(f),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(s[l].references++,s[l].updater(p)):s.push({identifier:f,updater:g(p,t),references:1}),n.push(f)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function d(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,_=0;function g(e,t){var r,n,o;if(t.singleton){var a=_++;r=m||(m=u(t)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=u(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);s[o].references--}for(var a=c(e,t),u=0;u<r.length;u++){var f=i(r[u]);0===s[f].references&&(s[f].updater(),s.splice(f,1))}r=a}}}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(s=n,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var s,i,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},function(e,t,r){"use strict";r.r(t);var n=r(5);r.d(t,"TRANSFORM_RULE_TYPE",(function(){return n.j}))},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"k",(function(){return u})),r.d(t,"i",(function(){return f})),r.d(t,"g",(function(){return l})),r.d(t,"j",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"h",(function(){return m}));var n=r(0);const o=3e4,a=2e3,s="/api/transform/",i=["cluster.cluster:monitor/transform/get","cluster.cluster:monitor/transform/stats/get"],c=["cluster.cluster:monitor/transform/get","cluster.cluster:monitor/transform/stats/get","cluster.cluster:admin/transform/preview","cluster.cluster:admin/transform/put","cluster.cluster:admin/transform/start","cluster.cluster:admin/transform/start_task"],u={ABORTING:"aborting",FAILED:"failed",INDEXING:"indexing",STARTED:"started",STOPPED:"stopped",STOPPING:"stopping",WAITING:"waiting"},f=(Object.values(u),{BATCH:"batch",CONTINUOUS:"continuous"}),l=(Object.values(f),{PIVOT:"pivot",LATEST:"latest"}),p={TRANSFORM_HEALTH:"transform_health"},d="*",m={notStarted:{name:n.i18n.translate("xpack.transform.alertTypes.transformHealth.notStartedCheckName",{defaultMessage:"Transform is not started"}),description:n.i18n.translate("xpack.transform.alertTypes.transformHealth.notStartedCheckDescription",{defaultMessage:"Get alerts when the transform is not started or is not indexing data."})}}},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/home/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,r){r(8),__kbnBundles__.define("plugin/transform/public",r,18),__kbnBundles__.define("plugin/transform/common",r,3)},function(e,t,r){r.p=window.__kbnPublicPath__.transform},function(e,t,r){switch(window.__kbnThemeTag__){case"v7dark":return r(10);case"v7light":return r(12);case"v8dark":return r(14);case"v8light":return r(16)}},function(e,t,r){var n=r(1),o=r(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(2)(!1)).push([e.i,".transform__AggregationLabel--button{width:24px}.transform__AggregationLabel--text{min-width:0}.transform__GroupByLabel--button{width:24px}.transform__GroupByLabel--text{min-width:0}.transform__GroupByLabel--interval{max-width:25%}.transform__progress progress[value]::-webkit-progress-bar{background-color:#fff}.transform__steps .euiStep__content{padding-right:0}.transformCreateTransformSearchDialog{width:720px;min-height:600px}.transformStat{margin-right:8px}.transformStatsBar{height:42px;padding:14px;background-color:#25262e}",""]),e.exports=t},function(e,t,r){var n=r(1),o=r(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(2)(!1)).push([e.i,".transform__AggregationLabel--button{width:24px}.transform__AggregationLabel--text{min-width:0}.transform__GroupByLabel--button{width:24px}.transform__GroupByLabel--text{min-width:0}.transform__GroupByLabel--interval{max-width:25%}.transform__progress progress[value]::-webkit-progress-bar{background-color:#fff}.transform__steps .euiStep__content{padding-right:0}.transformCreateTransformSearchDialog{width:720px;min-height:600px}.transformStat{margin-right:8px}.transformStatsBar{height:42px;padding:14px;background-color:#f5f7fa}",""]),e.exports=t},function(e,t,r){var n=r(1),o=r(15);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(2)(!1)).push([e.i,".transform__AggregationLabel--button{width:24px}.transform__AggregationLabel--text{min-width:0}.transform__GroupByLabel--button{width:24px}.transform__GroupByLabel--text{min-width:0}.transform__GroupByLabel--interval{max-width:25%}.transform__progress progress[value]::-webkit-progress-bar{background-color:#fff}.transform__steps .euiStep__content{padding-right:0}.transformCreateTransformSearchDialog{width:720px;min-height:600px}.transformStat{margin-right:8px}.transformStatsBar{height:42px;padding:14px;background-color:#25262e}",""]),e.exports=t},function(e,t,r){var n=r(1),o=r(17);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(2)(!1)).push([e.i,".transform__AggregationLabel--button{width:24px}.transform__AggregationLabel--text{min-width:0}.transform__GroupByLabel--button{width:24px}.transform__GroupByLabel--text{min-width:0}.transform__GroupByLabel--interval{max-width:25%}.transform__progress progress[value]::-webkit-progress-bar{background-color:#fff}.transform__steps .euiStep__content{padding-right:0}.transformCreateTransformSearchDialog{width:720px;min-height:600px}.transformStat{margin-right:8px}.transformStatsBar{height:42px;padding:14px;background-color:#f5f7fa}",""]),e.exports=t},function(e,t,r){"use strict";r.r(t),r.d(t,"plugin",(function(){return c})),r.d(t,"getTransformHealthRuleType",(function(){return i}));r(9);var n=r(0),o=r(6);var a=r(4),s=r(3);function i(){return{id:s.TRANSFORM_RULE_TYPE.TRANSFORM_HEALTH,description:n.i18n.translate("xpack.transform.alertingRuleTypes.transformHealth.description",{defaultMessage:"Alert when transforms experience operational issues."}),iconClass:"bell",documentationUrl:e=>e.links.transforms.alertingRules,alertParamsExpression:Object(a.lazy)((()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,106)))),validate:e=>{var t;const r={errors:{includeTransforms:new Array}};var o;null!==(t=e.includeTransforms)&&void 0!==t&&t.length||(null===(o=r.errors.includeTransforms)||void 0===o||o.push(n.i18n.translate("xpack.transform.alertTypes.transformHealth.includeTransforms.errorMessage",{defaultMessage:"At least one transform has to be selected"})));return r},requiresAppContext:!1,defaultActionMessage:n.i18n.translate("xpack.transform.alertTypes.transformHealth.defaultActionMessage",{defaultMessage:"[\\{\\{rule.name\\}\\}] Transform health check result:\n\\{\\{context.message\\}\\}\n\\{\\{#context.results\\}\\}\n  Transform ID: \\{\\{transform_id\\}\\}\n  \\{\\{#description\\}\\}Transform description: \\{\\{description\\}\\}\n  \\{\\{/description\\}\\}\\{\\{#transform_state\\}\\}Transform state: \\{\\{transform_state\\}\\}\n  \\{\\{/transform_state\\}\\}\\{\\{#failure_reason\\}\\}Failure reason: \\{\\{failure_reason\\}\\}\n  \\{\\{/failure_reason\\}\\}\\{\\{#notification_message\\}\\}Notification message: \\{\\{notification_message\\}\\}\n  \\{\\{/notification_message\\}\\}\\{\\{#node_name\\}\\}Node name: \\{\\{node_name\\}\\}\n  \\{\\{/node_name\\}\\}\\{\\{#timestamp\\}\\}Timestamp: \\{\\{timestamp\\}\\}\n  \\{\\{/timestamp\\}\\}\n\n\\{\\{/context.results\\}\\}\n"})}}class plugin_TransformUiPlugin{setup(e,t){const{management:a,home:s,triggersActionsUi:c}=t;a.sections.section.data.registerApp({id:"transform",title:n.i18n.translate("xpack.transform.appTitle",{defaultMessage:"Transforms"}),order:5,mount:async t=>{const{mountManagementSection:n}=await Promise.all([r.e(0),r.e(2)]).then(r.bind(null,105));return n(e,t)}}),(e=>{e.featureCatalogue.register({id:"transform",title:n.i18n.translate("xpack.transform.transformsTitle",{defaultMessage:"Transforms"}),description:n.i18n.translate("xpack.transform.transformsDescription",{defaultMessage:"Use transforms to pivot existing Elasticsearch indices into summarized entity-centric indices or to create an indexed view of the latest documents for fast access."}),icon:"managementApp",path:"/app/management/data/transform",showOnHomePage:!1,category:o.FeatureCatalogueCategory.ADMIN})})(s),c&&c.ruleTypeRegistry.register(i())}start(){}stop(){}}const c=()=>new plugin_TransformUiPlugin},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/data/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/ml/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/discover/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/ml/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,r){r.r(t);var n=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.KbnStd},function(e,t){e.exports=__kbnSharedDeps__.TsLib},function(e,t,r){r.r(t);var n=__kbnBundles__.get("plugin/savedObjects/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.ElasticEuiLibServicesFormat},function(e,t){e.exports=__kbnSharedDeps__.Theme}]);