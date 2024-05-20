/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,r,s=t[0],o=t[1],c=0,u=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(a&&a(t);u.length;)u.shift()()}var n={},i={0:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+"ingestPipelines.chunk."+e+".js"}(e);var a=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,n[1](a)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var s=window.ingestPipelines_bundle_jsonpfunction=window.ingestPipelines_bundle_jsonpfunction||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var a=o;r(r.s=15)}([function(e,t,n){e.exports=n(14)(1075)},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/esUiShared/static/forms/hook_form_lib");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/esUiShared/static/forms/components");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));const i="ingest_pipelines",r="/api/ingest_pipelines",s=["manage_pipeline","cluster:monitor/nodes/info"]},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return u}));const i="ingest_pipelines",r="pipelines_list_load",s="pipeline_create",o="pipeline_update",c="pipeline_delete",a="pipeline_delete_many",u="pipeline_simulate"},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f}));const i="/",r="create",s=(e,t=!0)=>`${i}edit/${t?encodeURIComponent(e):e}`,o=()=>`${i}${r}`,c=(e,t=!0)=>`${i}${r}/${t?encodeURIComponent(e):e}`,a=e=>`${i}${e?`?pipeline=${encodeURIComponent(e)}`:""}`,u={list:a(),edit:s(":name",!1),create:o(),clone:c(":sourceName",!1)},l=({inspectedPipelineName:e}={})=>a(e),p=({pipelineName:e})=>s(e,!0),d=()=>o(),f=({clonedPipelineName:e})=>c(e,!0)},function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);const s=new class documentation_DocumentationService{constructor(){r()(this,"esDocBasePath",""),r()(this,"ingestNodeUrl",""),r()(this,"processorsUrl",""),r()(this,"handlingFailureUrl",""),r()(this,"putPipelineApiUrl",""),r()(this,"simulatePipelineApiUrl",""),r()(this,"enrichDataUrl",""),r()(this,"geoMatchUrl",""),r()(this,"dissectKeyModifiersUrl",""),r()(this,"classificationUrl",""),r()(this,"regressionUrl","")}setup(e){const{DOC_LINK_VERSION:t,ELASTIC_WEBSITE_URL:n,links:i}=e,r=`${n}guide/en`;this.esDocBasePath=`${r}/elasticsearch/reference/${t}`,this.ingestNodeUrl=i.ingest.pipelines,this.processorsUrl=i.ingest.processors,this.handlingFailureUrl=i.ingest.pipelineFailure,this.putPipelineApiUrl=i.apis.createPipeline,this.simulatePipelineApiUrl=i.apis.simulatePipeline,this.enrichDataUrl=i.ingest.enrich,this.geoMatchUrl=i.ingest.geoMatch,this.dissectKeyModifiersUrl=i.ingest.dissectKeyModifiers,this.classificationUrl=i.ingest.inferenceClassification,this.regressionUrl=i.ingest.inferenceRegression}getEsDocsBasePath(){return this.esDocBasePath}getIngestNodeUrl(){return this.ingestNodeUrl}getProcessorsUrl(){return this.processorsUrl}getHandlingFailureUrl(){return this.handlingFailureUrl}getPutPipelineApiUrl(){return this.putPipelineApiUrl}getSimulatePipelineApiUrl(){return this.simulatePipelineApiUrl}getEnrichDataUrl(){return this.enrichDataUrl}getGeoMatchUrl(){return this.geoMatchUrl}getDissectKeyModifiersUrl(){return this.dissectKeyModifiersUrl}getClassificationUrl(){return this.classificationUrl}getRegressionUrl(){return this.regressionUrl}};var o=n(13),c=n(5);const a=new class ui_metric_UiMetricService{constructor(){r()(this,"usageCollection",void 0)}setup(e){this.usageCollection=e}track(e){if(!this.usageCollection)return;const{reportUiCounter:t}=this.usageCollection;t(c.a,o.METRIC_TYPE.COUNT,e)}trackUiMetric(e){return this.track(e)}};var u=n(4),l=n(10);const p=new class api_ApiService{constructor(){r()(this,"client",void 0),r()(this,"uiMetricService",void 0)}useRequest(e){if(!this.client)throw new Error("Api service has not be initialized.");return Object(l.F)(this.client,e)}sendRequest(e){if(!this.client)throw new Error("Api service has not be initialized.");return Object(l.z)(this.client,e)}trackUiMetric(e){if(!this.uiMetricService)throw new Error("UI metric service has not be initialized.");return this.uiMetricService.trackUiMetric(e)}setup(e,t){this.client=e,this.uiMetricService=t}useLoadPipelines(){return this.useRequest({path:u.a,method:"get"})}useLoadPipeline(e){return this.useRequest({path:`${u.a}/${encodeURIComponent(e)}`,method:"get"})}async createPipeline(e){const t=await this.sendRequest({path:u.a,method:"post",body:JSON.stringify(e)});return this.trackUiMetric(c.c),t}async updatePipeline(e){const{name:t,...n}=e,i=await this.sendRequest({path:`${u.a}/${encodeURIComponent(t)}`,method:"put",body:JSON.stringify(n)});return this.trackUiMetric(c.g),i}async deletePipelines(e){const t=this.sendRequest({path:`${u.a}/${e.map((e=>encodeURIComponent(e))).join(",")}`,method:"delete"});return this.trackUiMetric(e.length>1?c.e:c.d),t}async simulatePipeline(e){const t=await this.sendRequest({path:`${u.a}/simulate`,method:"post",body:JSON.stringify(e)});return this.trackUiMetric(c.f),t}async loadDocument(e,t){return await this.sendRequest({path:`${u.a}/documents/${encodeURIComponent(e)}/${encodeURIComponent(t)}`,method:"get"})}};var d=n(6);const f=d.i18n.translate("xpack.ingestPipelines.breadcrumb.pipelinesLabel",{defaultMessage:"Ingest Pipelines"});const h=new class breadcrumbs_BreadcrumbService{constructor(){r()(this,"breadcrumbs",{home:[{text:f}],create:[{text:f,href:"/"},{text:d.i18n.translate("xpack.ingestPipelines.breadcrumb.createPipelineLabel",{defaultMessage:"Create pipeline"})}],edit:[{text:f,href:"/"},{text:d.i18n.translate("xpack.ingestPipelines.breadcrumb.editPipelineLabel",{defaultMessage:"Edit pipeline"})}]}),r()(this,"setBreadcrumbsHandler",void 0)}setup(e){this.setBreadcrumbsHandler=e}setBreadcrumbs(e){if(!this.setBreadcrumbsHandler)throw new Error("Breadcrumb service has not been initialized");const t=this.breadcrumbs[e]?[...this.breadcrumbs[e]]:[...this.breadcrumbs.home];this.setBreadcrumbsHandler(t)}}},function(e,t,n){"use strict";n.d(t,"E",(function(){return a}));var i=n(7);n.d(t,"b",(function(){return i.CodeEditor}));var r=n(2);n.d(t,"a",(function(){return r.AuthorizationProvider})),n.d(t,"k",(function(){return r.SectionError})),n.d(t,"l",(function(){return r.SectionLoading})),n.d(t,"z",(function(){return r.sendRequest})),n.d(t,"A",(function(){return r.useAuthorizationContext})),n.d(t,"F",(function(){return r.useRequest})),n.d(t,"r",(function(){return r.WithPrivileges})),n.d(t,"s",(function(){return r.XJson})),n.d(t,"h",(function(){return r.JsonEditor})),n.d(t,"t",(function(){return r.attemptToURIDecode}));var s=n(1);n.d(t,"d",(function(){return s.FIELD_TYPES})),n.d(t,"B",(function(){return s.useForm})),n.d(t,"f",(function(){return s.Form})),n.d(t,"y",(function(){return s.getUseField})),n.d(t,"q",(function(){return s.UseField})),n.d(t,"p",(function(){return s.UseArray})),n.d(t,"C",(function(){return s.useFormContext})),n.d(t,"g",(function(){return s.FormDataProvider})),n.d(t,"w",(function(){return s.getFieldValidityAndErrorMessage})),n.d(t,"D",(function(){return s.useFormData}));var o=n(11);n.d(t,"u",(function(){return o.fieldFormatters})),n.d(t,"v",(function(){return o.fieldValidators}));var c=n(3);n.d(t,"x",(function(){return c.getFormRow})),n.d(t,"e",(function(){return c.Field})),n.d(t,"i",(function(){return c.JsonEditorField})),n.d(t,"o",(function(){return c.ToggleField})),n.d(t,"c",(function(){return c.ComboBoxField})),n.d(t,"j",(function(){return c.NumericField})),n.d(t,"m",(function(){return c.SelectField})),n.d(t,"n",(function(){return c.TextField}));n(12);const a=()=>Object(i.useKibana)()},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/esUiShared/static/forms/helpers");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/esUiShared/static/validators/string");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(16),__kbnBundles__.define("plugin/ingestPipelines/public",n,17)},function(e,t,n){n.p=window.__kbnPublicPath__.ingestPipelines},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return l}));var i=n(6),r=n(4),s=n(9),o=n(0),c=n.n(o),a=n(8);let u=function(e){return e.LIST="pipelines_list",e.EDIT="pipeline_edit",e.CREATE="pipeline_create",e.CLONE="pipeline_clone",e}({});class locator_IngestPipelinesLocatorDefinition{constructor(e){c()(this,"id","INGEST_PIPELINES_APP_LOCATOR"),c()(this,"getLocation",(async e=>{const t=await this.deps.managementAppLocator.getLocation({sectionId:"ingest",appId:r.c});let n="";switch(e.page){case u.EDIT:n=Object(a.d)({pipelineName:e.pipelineId});break;case u.CREATE:n=Object(a.c)();break;case u.LIST:n=Object(a.e)({inspectedPipelineName:e.pipelineId});break;case u.CLONE:n=Object(a.b)({clonedPipelineName:e.pipelineId})}return{...t,path:"/"===n?t.path:t.path+n}})),this.deps=e}}class plugin_IngestPipelinesPlugin{setup(e,t){const{management:o,usageCollection:c,share:a}=t,{http:u,getStartServices:l}=e;s.d.setup(c),s.a.setup(u,s.d);const p=i.i18n.translate("xpack.ingestPipelines.appTitle",{defaultMessage:"Ingest Pipelines"});o.sections.section.ingest.registerApp({id:r.c,order:1,title:p,mount:async t=>{const[i]=await l(),{chrome:{docTitle:r}}=i;r.change(p);const{mountManagementSection:s}=await n.e(1).then(n.bind(null,344)),o=await s(e,t);return()=>{r.reset(),o()}}}),a.url.locators.create(new locator_IngestPipelinesLocatorDefinition({managementAppLocator:o.locator}))}start(){}stop(){}}function l(){return new plugin_IngestPipelinesPlugin}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco}]);