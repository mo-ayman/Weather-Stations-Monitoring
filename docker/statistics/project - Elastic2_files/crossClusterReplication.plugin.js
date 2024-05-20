/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,o,i=t[0],u=t[1],a=0,c=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);c.length;)c.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(e){return o.p+"crossClusterReplication.chunk."+e+".js"}(e);var s=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[e]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.crossClusterReplication_bundle_jsonpfunction=window.crossClusterReplication_bundle_jsonpfunction||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var s=u;o(o.s=11)}([function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return l}));var r=n(4);const o={ID:"crossClusterReplication",TITLE:r.i18n.translate("xpack.crossClusterReplication.appTitle",{defaultMessage:"Cross-Cluster Replication"}),minimumLicenseType:"platinum"},i="cross_cluster_replication",u="data/remote_clusters",a="/api/cross_cluster_replication",s="/api/remote_clusters",c="/api/index_management",l={maxReadRequestOperationCount:5120,maxOutstandingReadRequests:12,maxReadRequestSize:"32mb",maxWriteRequestOperationCount:5120,maxWriteRequestSize:"9223372036854775807b",maxOutstandingWriteRequests:9,maxWriteBufferCount:2147483647,maxWriteBufferSize:"512mb",maxRetryDelay:"500ms",readPollTimeout:"1m"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"o",(function(){return u})),n.d(t,"n",(function(){return a})),n.d(t,"w",(function(){return s})),n.d(t,"p",(function(){return c})),n.d(t,"q",(function(){return l})),n.d(t,"r",(function(){return d})),n.d(t,"s",(function(){return f})),n.d(t,"u",(function(){return p})),n.d(t,"v",(function(){return _})),n.d(t,"x",(function(){return m})),n.d(t,"t",(function(){return b})),n.d(t,"g",(function(){return g})),n.d(t,"d",(function(){return x})),n.d(t,"m",(function(){return O})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return R})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return C})),n.d(t,"l",(function(){return v}));const r={IDLE:"idle",LOADING:"loading",UPDATING:"updating",SAVING:"saving",DELETING:"deleting"},o={AUTO_FOLLOW_PATTERN:"autoFollowPattern",FOLLOWER_INDEX:"followerIndex",REMOTE_CLUSTER:"remoteCluster",CCR_STATS:"ccrStats"},i="cross_cluster_replication",u="follower_index_list_load",a="follower_index_create",s="follower_index_update",c="follower_index_pause",l="follower_index_pause_many",d="follower_index_resume",f="follower_index_resume_many",p="follower_index_unfollow",_="follower_index_unfollow_many",m="follower_index_use_advanced_options",b="follower_index_show_details_click",g="auto_follow_patter_list_load",x="auto_follow_pattern_create",O="auto_follow_pattern_update",w="auto_follow_pattern_delete",R="auto_follow_pattern_delete_many",h="auto_follow_pattern_pause",y="auto_follow_pattern_pause_many",j="auto_follow_pattern_resume",C="auto_follow_pattern_resume_many",v="auto_follow_pattern_show_details_click"},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return a}));var r=n(6);n.d(t,"a",(function(){return r.METRIC_TYPE}));var o=n(1);let i=(e,t)=>{};function u(e){i=e.reportUiCounter.bind(e,o.c)}function a(e,t){return e.then((e=>(i(r.METRIC_TYPE.LOADED,t),e)))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>Array.isArray(e)?e:[e]},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(0);const o=e=>{if(!r.e[e])throw new Error(`Unknown setting ${e}`);return r.e[e]},i=e=>Object.keys(r.e).every((t=>((e,t)=>o(e)===t)(t,e[t])))},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t,n){"use strict";n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"a",(function(){return _})),n.d(t,"r",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"l",(function(){return g})),n.d(t,"n",(function(){return x})),n.d(t,"h",(function(){return O})),n.d(t,"e",(function(){return w})),n.d(t,"b",(function(){return R})),n.d(t,"m",(function(){return h})),n.d(t,"o",(function(){return y})),n.d(t,"q",(function(){return j})),n.d(t,"s",(function(){return C})),n.d(t,"g",(function(){return v})),n.d(t,"i",(function(){return k})),n.d(t,"j",(function(){return P}));var r=n(0),o=n(3),i=n(1),u=n(2),a=n(5);let s;function c(e){s=e}const l=e=>e.map((e=>encodeURIComponent(e))).join(","),d=e=>s.get(`${r.a}/auto_follow_patterns`,{asSystemRequest:e}),f=e=>s.get(`${r.a}/auto_follow_patterns/${encodeURIComponent(e)}`),p=()=>s.get(r.c),_=e=>{const t=s.post(`${r.a}/auto_follow_patterns`,{body:JSON.stringify(e)});return Object(u.d)(t,i.d)},m=(e,t)=>{const n=s.put(`${r.a}/auto_follow_patterns/${encodeURIComponent(e)}`,{body:JSON.stringify(t)});return Object(u.d)(n,i.m)},b=e=>{const t=Object(o.a)(e),n=t.map((e=>encodeURIComponent(e))).join(","),a=s.delete(`${r.a}/auto_follow_patterns/${n}`),c=t.length>1?i.f:i.e;return Object(u.d)(a,c)},g=e=>{const t=Object(o.a)(e),n=t.map(encodeURIComponent).join(","),a=s.post(`${r.a}/auto_follow_patterns/${n}/pause`),c=t.length>1?i.i:i.h;return Object(u.d)(a,c)},x=e=>{const t=Object(o.a)(e),n=t.map(encodeURIComponent).join(","),a=s.post(`${r.a}/auto_follow_patterns/${n}/resume`),c=t.length>1?i.k:i.j;return Object(u.d)(a,c)},O=e=>s.get(`${r.a}/follower_indices`,{asSystemRequest:e}),w=e=>s.get(`${r.a}/follower_indices/${encodeURIComponent(e)}`),R=e=>{const t=[i.n];!Object(a.a)(e)&&t.push(i.x);const n=s.post(`${r.a}/follower_indices`,{body:JSON.stringify(e)});return Object(u.d)(n,t)},h=e=>{const t=Object(o.a)(e),n=l(t),a=s.put(`${r.a}/follower_indices/${n}/pause`),c=t.length>1?i.q:i.p;return Object(u.d)(a,c)},y=e=>{const t=Object(o.a)(e),n=l(t),a=s.put(`${r.a}/follower_indices/${n}/resume`),c=t.length>1?i.s:i.r;return Object(u.d)(a,c)},j=e=>{const t=Object(o.a)(e),n=l(t),a=s.put(`${r.a}/follower_indices/${n}/unfollow`),c=t.length>1?i.v:i.u;return Object(u.d)(a,c)},C=(e,t)=>{const n=[i.w];!Object(a.a)(t)&&n.push(i.x);const{maxReadRequestOperationCount:o,maxOutstandingReadRequests:c,maxReadRequestSize:l,maxWriteRequestOperationCount:d,maxWriteRequestSize:f,maxOutstandingWriteRequests:p,maxWriteBufferCount:_,maxWriteBufferSize:m,maxRetryDelay:b,readPollTimeout:g}=t,x=s.put(`${r.a}/follower_indices/${encodeURIComponent(e)}`,{body:JSON.stringify({maxReadRequestOperationCount:o,maxOutstandingReadRequests:c,maxReadRequestSize:l,maxWriteRequestOperationCount:d,maxWriteRequestSize:f,maxOutstandingWriteRequests:p,maxWriteBufferCount:_,maxWriteBufferSize:m,maxRetryDelay:b,readPollTimeout:g})});return Object(u.d)(x,n)},v=()=>s.get(`${r.a}/stats/auto_follow`);let S=null;const k=()=>{S&&(S.abort(),S=null),S=new AbortController;const{signal:e}=S;return s.get(`${r.b}/indices`,{signal:e}).then((e=>(S=null,e)))},P=()=>s.get(`${r.a}/permissions`)},function(e,t,n){"use strict";let r,o;n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return a}));const i=(e,t)=>{r=e,o=t},u=()=>r,a=()=>o},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t,n){n(12),__kbnBundles__.define("plugin/crossClusterReplication/public",n,13)},function(e,t,n){n.p=window.__kbnPublicPath__.crossClusterReplication},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return l}));var r=n(4),o=n(9),i=n(10),u=n(0),a=n(2),s=n(8),c=n(7);class plugin_CrossClusterReplicationPlugin{constructor(e){this.initializerContext=e}setup(e,t){const{licensing:l,remoteClusters:d,usageCollection:f,management:p,indexManagement:_}=t,m=p.sections.section.data,{http:b,notifications:{toasts:g},fatalErrors:x,getStartServices:O}=e;Object(c.p)(b),Object(a.b)(f),Object(s.c)(g,x);const w=m.registerApp({id:u.f,title:u.g.TITLE,order:6,mount:async({element:e,setBreadcrumbs:t,history:r})=>{const{mountApp:o}=await n.e(1).then(n.bind(null,67)),[i]=await O(),{chrome:{docTitle:a},i18n:{Context:s},docLinks:c,application:{getUrlForApp:l}}=i;a.change(u.g.TITLE);const d=await o({element:e,setBreadcrumbs:t,I18nContext:s,docLinks:c,history:r,getUrlForApp:l});return()=>{a.reset(),d()}}});Promise.all([l.license$.pipe(Object(i.first)()).toPromise(),O()]).then((([e,t])=>{var n;const i="valid"===e.check(u.g.ID,u.g.minimumLicenseType).state,a=this.initializerContext.config.get(),s=(null===(n=t[0].application.capabilities.management.data)||void 0===n?void 0:n[u.f])&&a.ui.enabled&&d.isUiEnabled;if(i&&s){if(_){const e="isFollowerIndex",t={matchIndex:t=>Object(o.get)(t,e),label:r.i18n.translate("xpack.crossClusterReplication.indexMgmtBadge.followerLabel",{defaultMessage:"Follower"}),color:"default",filterExpression:"isFollowerIndex:true"};_.extensionsService.addBadge(t)}}else w.disable()}))}start(){}stop(){}}const l=e=>new plugin_CrossClusterReplicationPlugin(e)},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t,n){n.r(t);var r=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/indexManagement/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}]);