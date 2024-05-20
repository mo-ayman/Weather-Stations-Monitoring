!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=21)}([function(e,t,i){e.exports=i(16)(1075)},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,i){"use strict";i.r(t),i.d(t,"RUNTIME_FIELD_TYPES",(function(){return n.e})),i.d(t,"FLEET_ASSETS_TO_IGNORE",(function(){return n.b})),i.d(t,"META_FIELDS",(function(){return n.d})),i.d(t,"DATA_VIEW_SAVED_OBJECT_TYPE",(function(){return n.a})),i.d(t,"INDEX_PATTERN_SAVED_OBJECT_TYPE",(function(){return n.c})),i.d(t,"isFilterable",(function(){return s.f})),i.d(t,"fieldList",(function(){return s.c})),i.d(t,"DataViewField",(function(){return s.a})),i.d(t,"IndexPatternField",(function(){return s.b})),i.d(t,"isNestedField",(function(){return s.h})),i.d(t,"isMultiField",(function(){return s.g})),i.d(t,"getFieldSubtypeMulti",(function(){return s.d})),i.d(t,"getFieldSubtypeNested",(function(){return s.e})),i.d(t,"DataViewType",(function(){return a})),i.d(t,"IndexPatternType",(function(){return r})),i.d(t,"IndexPatternsService",(function(){return o.d})),i.d(t,"DataViewsService",(function(){return o.b})),i.d(t,"IndexPattern",(function(){return o.c})),i.d(t,"DataView",(function(){return o.a})),i.d(t,"DuplicateDataViewError",(function(){return l.b})),i.d(t,"DataViewSavedObjectConflictError",(function(){return l.a})),i.d(t,"getIndexPatternLoadMeta",(function(){return d.a}));var n=i(7),s=i(6);let a=function(e){return e.DEFAULT="default",e.ROLLUP="rollup",e}({}),r=function(e){return e.DEFAULT="default",e.ROLLUP="rollup",e}({});var o=i(9),l=i(12),d=i(14)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,i){"use strict";i.d(t,"b",(function(){return errors_DataViewMissingIndices})),i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return a})),i.d(t,"e",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"f",(function(){return l}));var n=i(10);class errors_DataViewMissingIndices extends n.KbnError{constructor(e){super(e&&e.length?`No matching indices found: ${e}`:"IndexPattern's configured pattern does not match any indices")}}i(7);const s="ILLEGAL_CHARACTERS",a="CONTAINS_SPACES",r=["\\","/","?",'"',"<",">","|"],o=r.concat(" ");function l(e){const t={},i=function(e){return r.reduce(((t,i)=>(e.includes(i)&&t.push(i),t)),[])}(e);return i.length&&(t[s]=i),function(e){return e.includes(" ")}(e)&&(t[a]=!0),t}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ES_FIELD_TYPES",{enumerable:!0,get:function(){return a.ES_FIELD_TYPES}}),Object.defineProperty(t,"KBN_FIELD_TYPES",{enumerable:!0,get:function(){return a.KBN_FIELD_TYPES}}),Object.defineProperty(t,"KbnFieldType",{enumerable:!0,get:function(){return n.KbnFieldType}}),Object.defineProperty(t,"castEsToKbnFieldTypeName",{enumerable:!0,get:function(){return s.castEsToKbnFieldTypeName}}),Object.defineProperty(t,"getFilterableKbnTypeNames",{enumerable:!0,get:function(){return s.getFilterableKbnTypeNames}}),Object.defineProperty(t,"getKbnFieldType",{enumerable:!0,get:function(){return s.getKbnFieldType}}),Object.defineProperty(t,"getKbnTypeNames",{enumerable:!0,get:function(){return s.getKbnTypeNames}});var n=i(17),s=i(24),a=i(13)},function(e,t,i){"use strict";i.d(t,"f",(function(){return a})),i.d(t,"h",(function(){return r})),i.d(t,"g",(function(){return o})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return d})),i.d(t,"c",(function(){return b})),i.d(t,"a",(function(){return data_view_field_DataViewField})),i.d(t,"b",(function(){return IndexPatternField}));var n=i(5);const s=Object(n.getFilterableKbnTypeNames)();function a(e){return"_id"===e.name||e.scripted||Boolean(e.searchable&&s.includes(e.type))}const r=u,o=h,l=f,d=p,c=/(.).+?\./g;function u(e){var t;const i=null==e?void 0:e.subType;return!(null==i||null===(t=i.nested)||void 0===t||!t.path)}function p(e){return u(e)?e.subType:void 0}function h(e){var t;const i=null==e?void 0:e.subType;return!(null==i||null===(t=i.multi)||void 0===t||!t.parent)}function f(e){return h(e)?e.subType:void 0}var _=i(0),m=i.n(_),E=i(1);class data_view_field_DataViewField{constructor(e){m()(this,"spec",void 0),m()(this,"kbnFieldType",void 0),this.spec={...e,type:"_source"===e.name?"_source":e.type},this.kbnFieldType=Object(n.getKbnFieldType)(e.type)}get count(){return this.spec.count||0}set count(e){this.spec.count=e}get runtimeField(){return this.spec.runtimeField}set runtimeField(e){this.spec.runtimeField=e}get script(){return this.spec.script}set script(e){this.spec.script=e}get lang(){return this.spec.lang}set lang(e){this.spec.lang=e}get customLabel(){return this.spec.customLabel}set customLabel(e){this.spec.customLabel=e}get conflictDescriptions(){return this.spec.conflictDescriptions}set conflictDescriptions(e){this.spec.conflictDescriptions=e}get name(){return this.spec.name}get displayName(){return this.spec.customLabel?this.spec.customLabel:this.spec.shortDotsEnable?"string"!=typeof(e=this.spec.name)?e:e.replace(c,"$1."):this.spec.name;var e}get type(){var e,t;return null!==(e=this.runtimeField)&&void 0!==e&&e.type?Object(n.castEsToKbnFieldTypeName)(null===(t=this.runtimeField)||void 0===t?void 0:t.type):this.spec.type}get esTypes(){var e,t;return null!==(e=this.runtimeField)&&void 0!==e&&e.type?[null===(t=this.runtimeField)||void 0===t?void 0:t.type]:this.spec.esTypes}get scripted(){return!!this.spec.scripted}get searchable(){return!(!this.spec.searchable&&!this.scripted)}get aggregatable(){return!(!this.spec.aggregatable&&!this.scripted)}get readFromDocValues(){return!(!this.spec.readFromDocValues||this.scripted)}get subType(){return this.spec.subType}get isMapped(){return this.spec.isMapped}get sortable(){return"_score"===this.name||(this.spec.indexed||this.aggregatable)&&this.kbnFieldType.sortable}get filterable(){return"_id"===this.name||this.scripted||(this.spec.indexed||this.searchable)&&this.kbnFieldType.filterable}get visualizable(){const e=[n.KBN_FIELD_TYPES.UNKNOWN,n.KBN_FIELD_TYPES.CONFLICT];return this.aggregatable&&!e.includes(this.spec.type)}isSubtypeNested(){return u(this)}isSubtypeMulti(){return h(this)}getSubtypeNested(){return p(this)}getSubtypeMulti(){return f(this)}deleteCount(){delete this.spec.count}toJSON(){return{count:this.count,script:this.script,lang:this.lang,conflictDescriptions:this.conflictDescriptions,name:this.name,type:this.type,esTypes:this.esTypes,scripted:this.scripted,searchable:this.searchable,aggregatable:this.aggregatable,readFromDocValues:this.readFromDocValues,subType:this.subType,customLabel:this.customLabel}}toSpec({getFormatterForField:e}={}){return{count:this.count,script:this.script,lang:this.lang,conflictDescriptions:this.conflictDescriptions,name:this.name,type:this.type,esTypes:this.esTypes,scripted:this.scripted,searchable:this.searchable,aggregatable:this.aggregatable,readFromDocValues:this.readFromDocValues,subType:this.subType,format:e?e(this).toJSON():void 0,customLabel:this.customLabel,shortDotsEnable:this.spec.shortDotsEnable,runtimeField:this.runtimeField,isMapped:this.isMapped}}}class IndexPatternField extends data_view_field_DataViewField{}const b=(e=[],t=!1)=>new class FldList extends Array{constructor(){super(),m()(this,"byName",new Map),m()(this,"groups",new Map),m()(this,"setByName",(e=>this.byName.set(e.name,e))),m()(this,"setByGroup",(e=>{void 0===this.groups.get(e.type)&&this.groups.set(e.type,new Map),this.groups.get(e.type).set(e.name,e)})),m()(this,"removeByGroup",(e=>this.groups.get(e.type).delete(e.name))),m()(this,"getAll",(()=>[...this.byName.values()])),m()(this,"getByName",(e=>this.byName.get(e))),m()(this,"getByType",(e=>[...(this.groups.get(e)||new Map).values()])),m()(this,"add",(e=>{const i=new data_view_field_DataViewField({...e,shortDotsEnable:t});this.push(i),this.setByName(i),this.setByGroup(i)})),m()(this,"remove",(e=>{this.removeByGroup(e),this.byName.delete(e.name);const t=Object(E.findIndex)(this,{name:e.name});this.splice(t,1)})),m()(this,"update",(e=>{const t=new data_view_field_DataViewField(e),i=this.findIndex((e=>e.name===t.name));this.splice(i,1,t),this.setByName(t),this.removeByGroup(t),this.setByGroup(t)})),m()(this,"removeAll",(()=>{this.length=0,this.byName.clear(),this.groups.clear()})),m()(this,"replaceAll",((e=[])=>{this.removeAll(),e.forEach(this.add)})),e.map((e=>this.add(e)))}toSpec({getFormatterForField:e}={}){return{...this.reduce(((t,i)=>(t[i.name]=i.toSpec({getFormatterForField:e}),t)),{})}}}},function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return o}));const n=["keyword","long","double","date","ip","boolean","geo_point"],s={LOGS_INDEX_PATTERN:"logs-*",METRICS_INDEX_PATTERN:"metrics-*",LOGS_DATA_STREAM_TO_IGNORE:"logs-elastic_agent",METRICS_DATA_STREAM_TO_IGNORE:"metrics-elastic_agent",METRICS_ENDPOINT_INDEX_TO_IGNORE:"metrics-endpoint.metadata_current_default"},a="metaFields",r="index-pattern",o=r},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,i){"use strict";function n(){const e={};return{get:t=>e[t],set:(t,i)=>(e[t]=i,i),clear:t=>{delete e[t]},clearAll:()=>{for(const t in e)e.hasOwnProperty(t)&&delete e[t]}}}i.d(t,"e",(function(){return n})),i.d(t,"a",(function(){return data_view_DataView})),i.d(t,"c",(function(){return IndexPattern})),i.d(t,"b",(function(){return data_views_DataViewsService})),i.d(t,"d",(function(){return IndexPatternsService}));var s=i(1),a=i.n(s);function r(e,t={},i=new WeakMap){return function(n,s=!1){const r=function(e,t){return function(i){return a.a.each(t,(function(t){"_source"!==t&&(i[t]=e[t])})),a.a.forOwn(e.fields,(function(e,t){Array.isArray(e)&&e.length<=1?i[t]=e[0]:i[t]=e})),new Proxy(i,{ownKeys:e=>Reflect.ownKeys(e).sort(((e,i)=>{const n=a.a.includes(t,e),s=a.a.includes(t,i);return n&&s?String(e).localeCompare(String(i)):n?1:s?-1:String(e).localeCompare(String(i))}))})}}(n,t),o=i.get(n),l=o||function(e,t,i){const n={},s=e.fields.getByName;return function e(t,r=""){r=r?r+".":"",a.a.forOwn(t,(function(t,o){if(o=r+o,i){const i=s(o),n=i&&"nested"===i.type;if(Array.isArray(t)&&a.a.isPlainObject(a.a.first(t))&&!n)return void a.a.each(t,(t=>e(t,o)))}else if(void 0!==n[o])return;const l=s(o),d=l&&"conflict"!==l.type,c=!a.a.isPlainObject(t);d||c?n[o]?Array.isArray(n[o])?n[o].push(t):n[o]=[n[o],t]:n[o]=t:e(t,o)}))}(t._source),n}(e,n,s);return o||i.set(n,{...l}),r(l)}}var o=i(0),l=i.n(o),d=i(5),c=i(10),u=i(6);class data_view_DataView{constructor({spec:e={},fieldFormats:t,shortDotsEnable:i=!1,metaFields:n=[]}){l()(this,"id",void 0),l()(this,"title",""),l()(this,"fieldFormatMap",void 0),l()(this,"typeMeta",void 0),l()(this,"fields",void 0),l()(this,"timeFieldName",void 0),l()(this,"intervalName",void 0),l()(this,"type",void 0),l()(this,"flattenHit",void 0),l()(this,"metaFields",void 0),l()(this,"version",void 0),l()(this,"sourceFilters",void 0),l()(this,"originalSavedObjectBody",{}),l()(this,"shortDotsEnable",!1),l()(this,"fieldFormats",void 0),l()(this,"fieldAttrs",void 0),l()(this,"runtimeFieldMap",void 0),l()(this,"allowNoIndex",!1),l()(this,"getOriginalSavedObjectBody",(()=>({...this.originalSavedObjectBody}))),l()(this,"resetOriginalSavedObjectBody",(()=>{this.originalSavedObjectBody=this.getAsSavedObjectBody()})),l()(this,"getFieldAttrs",(()=>{const e={...this.fieldAttrs};return this.fields.forEach((t=>{const i={};let n=!1;t.customLabel&&(i.customLabel=t.customLabel,n=!0),t.count&&(i.count=t.count,n=!0),n?e[t.name]=i:delete e[t.name]})),e})),l()(this,"setFieldFormat",((e,t)=>{this.fieldFormatMap[e]=t})),l()(this,"deleteFieldFormat",(e=>{delete this.fieldFormatMap[e]})),this.fieldFormats=t,this.shortDotsEnable=i,this.metaFields=n,this.fields=Object(u.c)([],this.shortDotsEnable),this.flattenHit=r(this,n),this.id=e.id,this.fieldFormatMap=e.fieldFormats||{},this.version=e.version,this.title=e.title||"",this.timeFieldName=e.timeFieldName,this.sourceFilters=e.sourceFilters,this.fields.replaceAll(Object.values(e.fields||{})),this.type=e.type,this.typeMeta=e.typeMeta,this.fieldAttrs=e.fieldAttrs||{},this.intervalName=e.intervalName,this.allowNoIndex=e.allowNoIndex||!1,this.runtimeFieldMap=e.runtimeFieldMap||{}}getComputedFields(){const e={};if(!this.fields)return{storedFields:["*"],scriptFields:e,docvalueFields:[],runtimeFields:{}};const t=Object(s.reject)(this.fields.getByType("date"),"scripted").map((e=>({field:e.name,format:e.esTypes&&-1!==e.esTypes.indexOf("date_nanos")?"strict_date_time":"date_time"})));return Object(s.each)(this.getScriptedFields(),(function(t){e[t.name]={script:{source:t.script,lang:t.lang}}})),{storedFields:["*"],scriptFields:e,docvalueFields:t,runtimeFields:this.runtimeFieldMap}}toSpec(){return{id:this.id,version:this.version,title:this.title,timeFieldName:this.timeFieldName,sourceFilters:this.sourceFilters,fields:this.fields.toSpec({getFormatterForField:this.getFormatterForField.bind(this)}),typeMeta:this.typeMeta,type:this.type,fieldFormats:this.fieldFormatMap,runtimeFieldMap:this.runtimeFieldMap,fieldAttrs:this.fieldAttrs,intervalName:this.intervalName,allowNoIndex:this.allowNoIndex}}getSourceFiltering(){return{excludes:this.sourceFilters&&this.sourceFilters.map((e=>e.value))||[]}}async addScriptedField(e,t,i="string"){const n=this.getScriptedFields(),s=a.a.map(n,"name");if(a.a.includes(s,e))throw new c.DuplicateField(e);this.fields.add({name:e,script:t,type:i,scripted:!0,lang:"painless",aggregatable:!0,searchable:!0,count:0,readFromDocValues:!1})}removeScriptedField(e){const t=this.fields.getByName(e);t&&this.fields.remove(t)}getNonScriptedFields(){return[...this.fields.getAll().filter((e=>!e.scripted))]}getScriptedFields(){return[...this.fields.getAll().filter((e=>e.scripted))]}getIndex(){if(!this.isUnsupportedTimePattern())return this.title;const e=/\[[^\]]*]/g,t=this.title.split(e),i=this.title.match(e)||[];return t.map(((e,t)=>{const n=t>=i.length?"":i[t].replace(/[\[\]]/g,"");return`${e.length?"*":""}${n}`})).join("")}isUnsupportedTimePattern(){return!!this.intervalName}isTimeBased(){return!(!this.timeFieldName||this.fields&&!this.getTimeField())}isTimeNanosBased(){const e=this.getTimeField();return!(!e||!e.esTypes||-1===e.esTypes.indexOf("date_nanos"))}getTimeField(){if(this.timeFieldName&&this.fields&&this.fields.getByName)return this.fields.getByName(this.timeFieldName)}getFieldByName(e){if(this.fields&&this.fields.getByName)return this.fields.getByName(e)}getAggregationRestrictions(){var e;return null===(e=this.typeMeta)||void 0===e?void 0:e.aggs}getAsSavedObjectBody(){var e,t,i;const n=a.a.isEmpty(this.fieldFormatMap)?void 0:JSON.stringify(this.fieldFormatMap),s=this.getFieldAttrs(),r=this.runtimeFieldMap;return{fieldAttrs:s?JSON.stringify(s):void 0,title:this.title,timeFieldName:this.timeFieldName,intervalName:this.intervalName,sourceFilters:this.sourceFilters?JSON.stringify(this.sourceFilters):void 0,fields:JSON.stringify(null!==(e=null===(t=this.fields)||void 0===t?void 0:t.filter((e=>e.scripted)))&&void 0!==e?e:[]),fieldFormatMap:n,type:this.type,typeMeta:JSON.stringify(null!==(i=this.typeMeta)&&void 0!==i?i:{}),allowNoIndex:this.allowNoIndex?this.allowNoIndex:void 0,runtimeFieldMap:r?JSON.stringify(r):void 0}}getFormatterForField(e){const t=this.getFormatterForFieldNoDefault(e.name);return t||this.fieldFormats.getDefaultInstance(e.type,e.esTypes)}addRuntimeField(e,t){const i=this.getFieldByName(e);i?i.runtimeField=t:this.fields.add({name:e,runtimeField:t,type:Object(d.castEsToKbnFieldTypeName)(t.type),aggregatable:!0,searchable:!0,count:0,readFromDocValues:!1}),this.runtimeFieldMap[e]=t}hasRuntimeField(e){return!!this.runtimeFieldMap[e]}getRuntimeField(e){var t;return null!==(t=this.runtimeFieldMap[e])&&void 0!==t?t:null}replaceAllRuntimeFields(e){Object.keys(this.runtimeFieldMap).forEach((e=>{this.removeRuntimeField(e)})),Object.entries(e).forEach((([e,t])=>{this.addRuntimeField(e,t)}))}removeRuntimeField(e){const t=this.getFieldByName(e);t&&(t.isMapped?t.runtimeField=void 0:this.fields.remove(t)),delete this.runtimeFieldMap[e]}getFormatterForFieldNoDefault(e){const t=this.fieldFormatMap[e];if(null!=t&&t.id)return this.fieldFormats.getInstance(t.id,t.params)}setFieldAttrs(e,t,i){this.fieldAttrs[e]||(this.fieldAttrs[e]={}),this.fieldAttrs[e][t]=i}setFieldCustomLabel(e,t){const i=this.fields.getByName(e),n=null===t?void 0:t;i&&(i.customLabel=n),this.setFieldAttrs(e,"customLabel",n)}setFieldCount(e,t){const i=this.fields.getByName(e),n=null===t?void 0:t;i?n?i.count=n:i.deleteCount():this.setFieldAttrs(e,"count",n)}}class IndexPattern extends data_view_DataView{}var p=i(3),h=i(2);const f=(e,t)=>async function(){const i=await this.getIds();let n=await e.get("defaultIndex"),a=!!n;const r=Object(s.includes)(i,n);if(a&&!r&&(await e.remove("defaultIndex"),n=a=!1),!a)return i.length>=1&&await this.hasUserDataView().catch((()=>!0))?(n=i[0],void await e.set("defaultIndex",n)):t()};var _=i(19),m=i(4),E=i(7);var b=i(12);class data_views_DataViewsService{constructor({uiSettings:e,savedObjectsClient:t,apiClient:i,fieldFormats:s,onNotification:a,onError:r,onUnsupportedTimePattern:o,onRedirectNoIndexPattern:u=(()=>{})}){l()(this,"config",void 0),l()(this,"savedObjectsClient",void 0),l()(this,"savedObjectsCache",void 0),l()(this,"apiClient",void 0),l()(this,"fieldFormats",void 0),l()(this,"onNotification",void 0),l()(this,"onError",void 0),l()(this,"onUnsupportedTimePattern",void 0),l()(this,"dataViewCache",void 0),l()(this,"ensureDefaultDataView",void 0),l()(this,"getIds",(async(e=!1)=>(this.savedObjectsCache&&!e||await this.refreshSavedObjectsCache(),this.savedObjectsCache?this.savedObjectsCache.map((e=>null==e?void 0:e.id)):[]))),l()(this,"getTitles",(async(e=!1)=>(this.savedObjectsCache&&!e||await this.refreshSavedObjectsCache(),this.savedObjectsCache?this.savedObjectsCache.map((e=>{var t;return null==e||null===(t=e.attributes)||void 0===t?void 0:t.title})):[]))),l()(this,"find",(async(e,t=10)=>{const i=(await this.savedObjectsClient.find({type:h.DATA_VIEW_SAVED_OBJECT_TYPE,fields:["title"],search:e,searchFields:["title"],perPage:t})).map((async e=>await this.get(e.id)));return await Promise.all(i)})),l()(this,"getIdsWithTitle",(async(e=!1)=>(this.savedObjectsCache&&!e||await this.refreshSavedObjectsCache(),this.savedObjectsCache?this.savedObjectsCache.map((e=>{var t,i,n,s;return{id:null==e?void 0:e.id,title:null==e||null===(t=e.attributes)||void 0===t?void 0:t.title,type:null==e||null===(i=e.attributes)||void 0===i?void 0:i.type,typeMeta:(null==e||null===(n=e.attributes)||void 0===n?void 0:n.typeMeta)&&JSON.parse(null==e||null===(s=e.attributes)||void 0===s?void 0:s.typeMeta)}})):[]))),l()(this,"clearCache",(e=>{this.savedObjectsCache=null,e?this.dataViewCache.clear(e):this.dataViewCache.clearAll()})),l()(this,"getCache",(async()=>(this.savedObjectsCache||await this.refreshSavedObjectsCache(),this.savedObjectsCache))),l()(this,"getDefault",(async()=>{const e=await this.getDefaultId();return e?await this.get(e):null})),l()(this,"getDefaultId",(async()=>{const e=await this.config.get("defaultIndex");return null!=e?e:null})),l()(this,"setDefault",(async(e,t=!1)=>{!t&&this.config.get("defaultIndex")||await this.config.set("defaultIndex",e)})),l()(this,"getFieldsForWildcard",(async e=>{const t=await this.config.get(h.META_FIELDS);return this.apiClient.getFieldsForWildcard({pattern:e.pattern,metaFields:t,type:e.type,rollupIndex:e.rollupIndex,allowNoIndex:e.allowNoIndex})})),l()(this,"getFieldsForIndexPattern",(async(e,t)=>{var i,n;return this.getFieldsForWildcard({type:e.type,rollupIndex:null==e||null===(i=e.typeMeta)||void 0===i||null===(n=i.params)||void 0===n?void 0:n.rollup_index,...t,pattern:e.title})})),l()(this,"refreshFields",(async e=>{try{const t=await this.getFieldsForIndexPattern(e);t.forEach((e=>e.isMapped=!0));const i=e.getScriptedFields().map((e=>e.spec)),n=e.getFieldAttrs(),s=Object.values(this.fieldArrayToMap([...t,...i],n));e.fields.replaceAll(s)}catch(t){t instanceof m.b&&this.onNotification({title:t.message,color:"danger",iconType:"alert"}),this.onError(t,{title:p.i18n.translate("dataViews.fetchFieldErrorTitle",{defaultMessage:"Error fetching fields for index pattern {title} (ID: {id})",values:{id:e.id,title:e.title}})})}})),l()(this,"refreshFieldSpecMap",(async(e,t,i,n,s={})=>{const a=Object.values(e),r=a.filter((e=>e.scripted));try{let e;const t=await this.getFieldsForWildcard(n);return t.forEach((e=>e.isMapped=!0)),e=!n.allowNoIndex||t&&t.length>5?[...t,...r]:a,this.fieldArrayToMap(e,s)}catch(e){if(e instanceof m.b)return this.onNotification({title:e.message,color:"danger",iconType:"alert"}),{};throw this.onError(e,{title:p.i18n.translate("dataViews.fetchFieldErrorTitle",{defaultMessage:"Error fetching fields for index pattern {title} (ID: {id})",values:{id:t,title:i}})}),e}})),l()(this,"fieldArrayToMap",((e,t)=>e.reduce(((e,i)=>{var n,s;return e[i.name]={...i,customLabel:null==t||null===(n=t[i.name])||void 0===n?void 0:n.customLabel,count:null==t||null===(s=t[i.name])||void 0===s?void 0:s.count},e}),{}))),l()(this,"savedObjectToSpec",(e=>{const{id:t,version:i,attributes:{title:n,timeFieldName:s,intervalName:a,fields:r,sourceFilters:o,fieldFormatMap:l,runtimeFieldMap:d,typeMeta:c,type:u,fieldAttrs:p,allowNoIndex:h}}=e,f=o?JSON.parse(o):void 0,_=c?JSON.parse(c):void 0,m=l?JSON.parse(l):{},E=r?JSON.parse(r):[],b=p?JSON.parse(p):{},g=d?JSON.parse(d):{};return{id:t,version:i,title:n,intervalName:a,timeFieldName:s,sourceFilters:f,fields:this.fieldArrayToMap(E,b),typeMeta:_,type:u,fieldFormats:m,fieldAttrs:b,allowNoIndex:h,runtimeFieldMap:g}})),l()(this,"getSavedObjectAndInit",(async e=>{const t=await this.savedObjectsClient.get(h.DATA_VIEW_SAVED_OBJECT_TYPE,e);if(!t.version)throw new c.SavedObjectNotFound(h.DATA_VIEW_SAVED_OBJECT_TYPE,e,"management/kibana/indexPatterns");return this.initFromSavedObject(t)})),l()(this,"initFromSavedObject",(async e=>{const t=this.savedObjectToSpec(e),{title:i,type:n,typeMeta:s,runtimeFieldMap:a}=t;t.fieldAttrs=e.attributes.fieldAttrs?JSON.parse(e.attributes.fieldAttrs):{};try{var r;t.fields=await this.refreshFieldSpecMap(t.fields||{},e.id,t.title,{pattern:i,metaFields:await this.config.get(h.META_FIELDS),type:n,rollupIndex:null==s||null===(r=s.params)||void 0===r?void 0:r.rollup_index,allowNoIndex:t.allowNoIndex},t.fieldAttrs);for(const[e,i]of Object.entries(a||{})){var o,l,c,u;if(!t.fields[e])t.fields[e]={name:e,type:Object(d.castEsToKbnFieldTypeName)(i.type),runtimeField:i,aggregatable:!0,searchable:!0,readFromDocValues:!1,customLabel:null===(o=t.fieldAttrs)||void 0===o||null===(l=o[e])||void 0===l?void 0:l.customLabel,count:null===(c=t.fieldAttrs)||void 0===c||null===(u=c[e])||void 0===u?void 0:u.count}}}catch(t){t instanceof m.b?this.onNotification({title:t.message,color:"danger",iconType:"alert"}):this.onError(t,{title:p.i18n.translate("dataViews.fetchFieldErrorTitle",{defaultMessage:"Error fetching fields for index pattern {title} (ID: {id})",values:{id:e.id,title:i}})})}t.fieldFormats=e.attributes.fieldFormatMap?JSON.parse(e.attributes.fieldFormatMap):{};const f=await this.create(t,!0);return f.isUnsupportedTimePattern()&&this.onUnsupportedTimePattern({id:f.id,title:f.title,index:f.getIndex()}),f.resetOriginalSavedObjectBody(),f})),l()(this,"get",(async e=>{const t=this.dataViewCache.get(e)||this.dataViewCache.set(e,this.getSavedObjectAndInit(e));return t.catch((()=>{this.dataViewCache.clear(e)})),t})),this.apiClient=i,this.config=e,this.savedObjectsClient=t,this.fieldFormats=s,this.onNotification=a,this.onError=r,this.onUnsupportedTimePattern=o,this.ensureDefaultDataView=f(e,u),this.dataViewCache=n()}async refreshSavedObjectsCache(){const e=await this.savedObjectsClient.find({type:h.DATA_VIEW_SAVED_OBJECT_TYPE,fields:["title","type","typeMeta"],perPage:1e4});this.savedObjectsCache=e}async hasUserDataView(){return this.apiClient.hasUserIndexPattern()}migrate(e,t){return this.savedObjectsClient.update(h.DATA_VIEW_SAVED_OBJECT_TYPE,e.id,{title:t,intervalName:null},{version:e.version}).then((({attributes:{title:t,intervalName:i}})=>{e.title=t,e.intervalName=i})).then((()=>this))}async create(e,t=!1){const i=await this.config.get(_.FORMATS_UI_SETTINGS.SHORT_DOTS_ENABLE),n=await this.config.get(h.META_FIELDS),s=new data_view_DataView({spec:e,fieldFormats:this.fieldFormats,shortDotsEnable:i,metaFields:n});return t||await this.refreshFields(s),s}async createAndSave(e,t=!1,i=!1){const n=await this.create(e,i),s=await this.createSavedObject(n,t);return await this.setDefault(s.id),s}async createSavedObject(e,t=!1){const i=await async function(e,t){if(t)return(await e.find({type:E.a,perPage:10,search:`"${t}"`,searchFields:["title"],fields:["title"]})).find((e=>e.attributes.title.toLowerCase()===t.toLowerCase()))}(this.savedObjectsClient,e.title);if(i){if(!t)throw new b.b(`Duplicate index pattern: ${e.title}`);await this.delete(i.id)}const n=e.getAsSavedObjectBody(),s=await this.savedObjectsClient.create(h.DATA_VIEW_SAVED_OBJECT_TYPE,n,{id:e.id}),a=await this.initFromSavedObject(s);return this.dataViewCache.set(a.id,Promise.resolve(a)),this.savedObjectsCache&&this.savedObjectsCache.push(s),a}async updateSavedObject(e,t=0,i=!1){if(!e.id)return;const n=e.getAsSavedObjectBody(),s=e.getOriginalSavedObjectBody(),a=[];return Object.entries(n).forEach((([e,t])=>{t!==s[e]&&a.push(e)})),this.savedObjectsClient.update(h.DATA_VIEW_SAVED_OBJECT_TYPE,e.id,n,{version:e.version}).then((t=>{e.id=t.id,e.version=t.version})).catch((async r=>{var o;if(409===(null==r||null===(o=r.res)||void 0===o?void 0:o.status)&&t++<3){const o=await this.get(e.id),l=o.getAsSavedObjectBody(),d=[];Object.entries(l).forEach((([e,t])=>{t!==n[e]&&t!==s[e]&&d.push(e)}));let c=!1;for(const e of a)for(const t of d)if(e===t){c=!0;break}if(c){if(i)return;const e=p.i18n.translate("dataViews.unableWriteLabel",{defaultMessage:"Unable to write index pattern! Refresh the page to get the most up to date changes for this index pattern."});throw this.onNotification({title:e,color:"danger"}),r}return d.forEach((t=>{e[t]=o[t]})),e.version=o.version,this.dataViewCache.clear(e.id),this.updateSavedObject(e,t,i)}throw r}))}async delete(e){return this.dataViewCache.clear(e),this.savedObjectsClient.delete(h.DATA_VIEW_SAVED_OBJECT_TYPE,e)}async getDefaultDataView(){const e=await this.getIds();let t=await this.config.get("defaultIndex"),i=!!t;const n=e.includes(t);if(i&&!n&&(await this.config.remove("defaultIndex"),t=i=!1),e.length>=1&&await this.hasUserDataView().catch((()=>!0))&&(t=e[0],await this.config.set("defaultIndex",t)),t)return this.get(t)}}class IndexPatternsService extends data_views_DataViewsService{}},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/kibanaUtils/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,i){"use strict";i.d(t,"b",(function(){return DuplicateDataViewError})),i.d(t,"a",(function(){return DataViewSavedObjectConflictError}));class DuplicateDataViewError extends Error{constructor(e){super(e),this.name="DuplicateDataViewError"}}class DataViewSavedObjectConflictError extends Error{constructor(e){super(`Conflict loading DataView saved object, id: ${e}`),this.name="DataViewSavedObjectConflictError"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KBN_FIELD_TYPES=t.ES_FIELD_TYPES=void 0;t.ES_FIELD_TYPES=function(e){return e._ID="_id",e._INDEX="_index",e._SOURCE="_source",e._TYPE="_type",e.STRING="string",e.TEXT="text",e.KEYWORD="keyword",e.VERSION="version",e.BOOLEAN="boolean",e.OBJECT="object",e.DATE="date",e.DATE_NANOS="date_nanos",e.DATE_RANGE="date_range",e.GEO_POINT="geo_point",e.GEO_SHAPE="geo_shape",e.FLOAT="float",e.HALF_FLOAT="half_float",e.SCALED_FLOAT="scaled_float",e.DOUBLE="double",e.INTEGER="integer",e.LONG="long",e.SHORT="short",e.UNSIGNED_LONG="unsigned_long",e.FLOAT_RANGE="float_range",e.DOUBLE_RANGE="double_range",e.INTEGER_RANGE="integer_range",e.LONG_RANGE="long_range",e.NESTED="nested",e.BYTE="byte",e.IP="ip",e.IP_RANGE="ip_range",e.ATTACHMENT="attachment",e.TOKEN_COUNT="token_count",e.MURMUR3="murmur3",e.HISTOGRAM="histogram",e}({}),t.KBN_FIELD_TYPES=function(e){return e._SOURCE="_source",e.ATTACHMENT="attachment",e.BOOLEAN="boolean",e.DATE="date",e.DATE_RANGE="date_range",e.GEO_POINT="geo_point",e.GEO_SHAPE="geo_shape",e.IP="ip",e.IP_RANGE="ip_range",e.MURMUR3="murmur3",e.NUMBER="number",e.NUMBER_RANGE="number_range",e.STRING="string",e.UNKNOWN="unknown",e.CONFLICT="conflict",e.OBJECT="object",e.NESTED="nested",e.HISTOGRAM="histogram",e.MISSING="missing",e}({})},function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(3);const s=()=>({name:"indexPatternLoad",type:"index_pattern",inputTypes:["null"],help:n.i18n.translate("dataViews.indexPatternLoad.help",{defaultMessage:"Loads an index pattern"}),args:{id:{types:["string"],required:!0,help:n.i18n.translate("dataViews.functions.indexPatternLoad.id.help",{defaultMessage:"index pattern id to load"})}},extract(e){const t="indexPatternLoad.id",i=[{name:t,type:"search",id:e.id[0]}];return{state:{...e,id:[t]},references:i}},inject(e,t){const i=t.find((e=>"indexPatternLoad.id"===e.name));return i&&(e.id[0]=i.id),e}})},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,i){"use strict";var n=i(23);Object.defineProperty(t,"__esModule",{value:!0}),t.KbnFieldType=void 0;var s=n(i(0)),a=i(13);t.KbnFieldType=class KbnFieldType{constructor(e={}){(0,s.default)(this,"name",void 0),(0,s.default)(this,"sortable",void 0),(0,s.default)(this,"filterable",void 0),(0,s.default)(this,"esTypes",void 0),this.name=e.name||a.KBN_FIELD_TYPES.UNKNOWN,this.sortable=e.sortable||!1,this.filterable=e.filterable||!1,this.esTypes=Object.freeze((e.esTypes||[]).slice())}}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/fieldFormats/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,i){i(22),__kbnBundles__.define("plugin/dataViews/public",i,26),__kbnBundles__.define("plugin/dataViews/common",i,2)},function(e,t,i){i.p=window.__kbnPublicPath__.dataViews},function(e,t,i){e.exports=i(16)(1077)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getKbnTypeNames=t.getKbnFieldType=t.getFilterableKbnTypeNames=t.castEsToKbnFieldTypeName=void 0;var n=i(25),s=i(13);const a=(0,n.createKbnFieldTypes)();t.getKbnFieldType=e=>a.find((t=>t.name===e))||n.kbnFieldTypeUnknown;t.getKbnTypeNames=()=>a.filter((e=>e.name)).map((e=>e.name));t.castEsToKbnFieldTypeName=e=>{const t=a.find((t=>t.esTypes.includes(e)));return t&&t.name?t.name:s.KBN_FIELD_TYPES.UNKNOWN};t.getFilterableKbnTypeNames=()=>a.filter((e=>e.filterable)).map((e=>e.name))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.kbnFieldTypeUnknown=t.createKbnFieldTypes=void 0;var n=i(17),s=i(13);const a=t.kbnFieldTypeUnknown=new n.KbnFieldType({name:s.KBN_FIELD_TYPES.UNKNOWN});t.createKbnFieldTypes=()=>[new n.KbnFieldType({name:s.KBN_FIELD_TYPES.STRING,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.STRING,s.ES_FIELD_TYPES.TEXT,s.ES_FIELD_TYPES.KEYWORD,s.ES_FIELD_TYPES.VERSION,s.ES_FIELD_TYPES._TYPE,s.ES_FIELD_TYPES._ID]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.NUMBER,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.FLOAT,s.ES_FIELD_TYPES.HALF_FLOAT,s.ES_FIELD_TYPES.SCALED_FLOAT,s.ES_FIELD_TYPES.DOUBLE,s.ES_FIELD_TYPES.INTEGER,s.ES_FIELD_TYPES.LONG,s.ES_FIELD_TYPES.UNSIGNED_LONG,s.ES_FIELD_TYPES.SHORT,s.ES_FIELD_TYPES.BYTE,s.ES_FIELD_TYPES.TOKEN_COUNT]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.NUMBER_RANGE,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.FLOAT_RANGE,s.ES_FIELD_TYPES.DOUBLE_RANGE,s.ES_FIELD_TYPES.INTEGER_RANGE,s.ES_FIELD_TYPES.LONG_RANGE]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.DATE,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.DATE,s.ES_FIELD_TYPES.DATE_NANOS]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.DATE_RANGE,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.DATE_RANGE]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.IP,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.IP]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.IP_RANGE,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.IP_RANGE]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.BOOLEAN,sortable:!0,filterable:!0,esTypes:[s.ES_FIELD_TYPES.BOOLEAN]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.OBJECT,esTypes:[s.ES_FIELD_TYPES.OBJECT]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.NESTED,esTypes:[s.ES_FIELD_TYPES.NESTED]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.GEO_POINT,esTypes:[s.ES_FIELD_TYPES.GEO_POINT]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.GEO_SHAPE,esTypes:[s.ES_FIELD_TYPES.GEO_SHAPE]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.ATTACHMENT,esTypes:[s.ES_FIELD_TYPES.ATTACHMENT]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.MURMUR3,esTypes:[s.ES_FIELD_TYPES.MURMUR3]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES._SOURCE,esTypes:[s.ES_FIELD_TYPES._SOURCE]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.HISTOGRAM,filterable:!0,esTypes:[s.ES_FIELD_TYPES.HISTOGRAM]}),new n.KbnFieldType({name:s.KBN_FIELD_TYPES.CONFLICT}),a]},function(e,t,i){"use strict";i.r(t),i.d(t,"ILLEGAL_CHARACTERS_KEY",(function(){return n.d})),i.d(t,"CONTAINS_SPACES_KEY",(function(){return n.a})),i.d(t,"ILLEGAL_CHARACTERS_VISIBLE",(function(){return n.e})),i.d(t,"ILLEGAL_CHARACTERS",(function(){return n.c})),i.d(t,"validateDataView",(function(){return n.f})),i.d(t,"onRedirectNoIndexPattern",(function(){return c})),i.d(t,"onUnsupportedTimePattern",(function(){return p})),i.d(t,"IndexPatternField",(function(){return _.IndexPatternField})),i.d(t,"IndexPatternsService",(function(){return s.d})),i.d(t,"IndexPattern",(function(){return s.c})),i.d(t,"DataViewsApiClient",(function(){return data_views_api_client_DataViewsApiClient})),i.d(t,"DataViewsService",(function(){return s.b})),i.d(t,"DataView",(function(){return s.a})),i.d(t,"UiSettingsPublicToCommon",(function(){return ui_settings_wrapper_UiSettingsPublicToCommon})),i.d(t,"SavedObjectsClientPublicToCommon",(function(){return saved_objects_client_wrapper_SavedObjectsClientPublicToCommon})),i.d(t,"plugin",(function(){return T}));var n=i(4),s=i(9),a=i(11),r=i(3),o=(i(18),i(15)),l=i(8);let d;const c=(e,t,i)=>()=>{const n=e.management.kibana.indexPatterns?"/management/kibana/indexPatterns":"/home";let s;s&&clearTimeout(s);const c=r.i18n.translate("dataViews.ensureDefaultIndexPattern.bannerLabel",{defaultMessage:"To visualize and explore data in Kibana, you must create an index pattern to retrieve data from Elasticsearch."});return d=i.banners.replace(d,Object(o.toMountPoint)(Object(l.jsx)(a.EuiCallOut,{color:"warning",iconType:"iInCircle",title:c}))),s=setTimeout((()=>{i.banners.remove(d),s=void 0}),15e3),"/home"===n?t("home"):t("management",{path:`/kibana/indexPatterns?bannerMessage=${c}`}),new Promise((()=>{}))};var u=i(20);const p=(e,t)=>({id:i,title:n,index:s})=>{const d=r.i18n.translate("dataViews.warningTitle",{defaultMessage:"Support for time interval index patterns removed"}),c=r.i18n.translate("dataViews.warningText",{defaultMessage:"Currently querying all indices matching {index}. {title} should be migrated to a wildcard-based index pattern.",values:{title:n,index:s}});e.addWarning({title:d,text:Object(o.toMountPoint)(Object(l.jsx)("div",null,Object(l.jsx)("p",null,c),Object(l.jsx)(a.EuiFlexGroup,{justifyContent:"flexEnd",gutterSize:"s"},Object(l.jsx)(a.EuiFlexItem,{grow:!1},Object(l.jsx)(a.EuiButton,{size:"s",onClick:()=>t("management",{path:`/kibana/index_patterns/index_pattern/${i||""}`})},Object(l.jsx)(u.FormattedMessage,{id:"dataViews.editIndexPattern",defaultMessage:"Edit index pattern"}))))))})};var h=i(0),f=i.n(h);class data_views_api_client_DataViewsApiClient{constructor(e){f()(this,"http",void 0),this.http=e}_request(e,t){return this.http.fetch(e,{query:t}).catch((e=>{var t;if(404===e.body.statusCode&&"no_matching_indices"===(null===(t=e.body.attributes)||void 0===t?void 0:t.code))throw new n.b(e.body.message);throw new Error(e.body.message||e.body.error||`${e.body.statusCode} Response`)}))}_getUrl(e){return"/api/index_patterns/"+e.filter(Boolean).map(encodeURIComponent).join("/")}getFieldsForTimePattern(e){const{pattern:t,lookBack:i,metaFields:n}=e,s=this._getUrl(["_fields_for_time_pattern"]);return this._request(s,{pattern:t,look_back:i,meta_fields:n}).then((e=>e.fields))}getFieldsForWildcard({pattern:e,metaFields:t,type:i,rollupIndex:n,allowNoIndex:s}){return this._request(this._getUrl(["_fields_for_wildcard"]),{pattern:e,meta_fields:t,type:i,rollup_index:n,allow_no_index:s}).then((e=>e.fields||[]))}async hasUserIndexPattern(){return(await this._request(this._getUrl(["has_user_index_pattern"]))).result}}var _=i(2);class ui_settings_wrapper_UiSettingsPublicToCommon{constructor(e){f()(this,"uiSettings",void 0),this.uiSettings=e}get(e){return Promise.resolve(this.uiSettings.get(e))}getAll(){return Promise.resolve(this.uiSettings.getAll())}set(e,t){return this.uiSettings.set(e,t),Promise.resolve()}remove(e){return this.uiSettings.remove(e),Promise.resolve()}}var m=i(1);const E=e=>({version:e._version,...Object(m.omit)(e,"_version")});class saved_objects_client_wrapper_SavedObjectsClientPublicToCommon{constructor(e){f()(this,"savedObjectClient",void 0),this.savedObjectClient=e}async find(e){return(await this.savedObjectClient.find(e)).savedObjects.map(E)}async get(e,t){const i=await this.savedObjectClient.resolve(e,t);if("conflict"===i.outcome)throw new _.DataViewSavedObjectConflictError(t);return E(i.saved_object)}async update(e,t,i,n){const s=await this.savedObjectClient.update(e,t,i,n);return E(s)}async create(e,t,i){const n=await this.savedObjectClient.create(e,t,i);return E(n)}delete(e,t){return this.savedObjectClient.delete(e,t)}}var b=i(14);function g({getStartServices:e}){return function({getStartDependencies:e}){return()=>({...Object(b.a)(),async fn(t,i){const{indexPatterns:n}=await e();return{type:"index_pattern",value:(await n.get(i.id)).toSpec()}}})}({getStartDependencies:async()=>{const[,,t]=await e();return{indexPatterns:t}}})}class plugin_DataViewsPublicPlugin{setup(e,{expressions:t}){return t.registerFunction(g({getStartServices:e.getStartServices})),{}}start(e,{fieldFormats:t}){const{uiSettings:i,http:n,notifications:a,savedObjects:r,overlays:o,application:l}=e;return new s.b({uiSettings:new ui_settings_wrapper_UiSettingsPublicToCommon(i),savedObjectsClient:new saved_objects_client_wrapper_SavedObjectsClientPublicToCommon(r.client),apiClient:new data_views_api_client_DataViewsApiClient(n),fieldFormats:t,onNotification:e=>{a.toasts.add(e)},onError:a.toasts.addError.bind(a.toasts),onRedirectNoIndexPattern:c(l.capabilities,l.navigateToApp,o),onUnsupportedTimePattern:p(a.toasts,l.navigateToApp)})}stop(){}}function T(){return new plugin_DataViewsPublicPlugin}}]);