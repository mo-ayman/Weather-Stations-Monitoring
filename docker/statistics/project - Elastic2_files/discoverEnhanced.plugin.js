/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){t.exports=r(7)(1075)},function(t,e,r){r.r(e);var n=__kbnBundles__.get("plugin/data/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(n))},function(t,e,r){r.r(e);var n=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(n))},function(t,e,r){r.r(e);var n=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(n))},function(t,e){t.exports=__kbnSharedDeps__.KbnI18n},function(t,e,r){r(6),__kbnBundles__.define("plugin/discoverEnhanced/public",r,8)},function(t,e,r){r.p=window.__kbnPublicPath__.discoverEnhanced},function(t,e){t.exports=__kbnSharedDeps_npm__},function(t,e,r){"use strict";r.r(e),r.d(e,"plugin",(function(){return _}));var n=r(0),a=r.n(n),i=r(1),o=r(3),s=r(2);const c=t=>{if(!t)return[];const e=t.getOutput();return(t=>!(!t||"object"!=typeof t)&&Array.isArray(t.indexPatterns))(e)?e.indexPatterns.map((({id:t})=>t)):[]},l=t=>1===c(t).length;var p=r(4);class abstract_explore_data_action_AbstractExploreDataAction{constructor(t){a()(this,"getIconType",(t=>"discoverApp")),a()(this,"getDisplayName",(t=>p.i18n.translate("xpack.discover.FlyoutCreateDrilldownAction.displayName",{defaultMessage:"Explore underlying data"}))),this.params=t}async isCompatible({embeddable:t}){var e;if(!t)return!1;const{core:r,plugins:n}=this.params.start(),{capabilities:a}=r.application;if(a.discover&&!a.discover.show)return!1;if(!n.discover.locator)return!1;return!!(null===(e=this.params.start().plugins.kibanaLegacy)||void 0===e||!e.dashboardConfig.getHideWriteControls())&&(!!l(t)&&t.getInput().viewMode===s.ViewMode.VIEW)}async execute(t){if(!l(t.embeddable))return;const{core:e}=this.params.start(),{app:r,path:n}=await this.getLocation(t);await e.application.navigateToApp(r,{path:n})}async getHref(t){const{embeddable:e}=t;if(!l(e))throw new Error(`Embeddable not supported for "${this.getDisplayName(t)}" action.`);const{core:r}=this.params.start(),{app:n,path:a}=await this.getLocation(t);return await r.application.getUrlForApp(n,{path:a,absolute:!1})}}const u="ACTION_EXPLORE_DATA";class explore_data_context_menu_action_ExploreDataContextMenuAction extends abstract_explore_data_action_AbstractExploreDataAction{constructor(...t){super(...t),a()(this,"id",u),a()(this,"type",u),a()(this,"order",200),a()(this,"getLocation",(async t=>{const{plugins:e}=this.params.start(),{locator:r}=e.discover;if(!r)throw new Error("Discover URL locator not available.");const{embeddable:n}=t,a={};if(n){a.indexPatternId=c(n)[0]||void 0;const t=n.getInput();t.timeRange&&!a.timeRange&&(a.timeRange=t.timeRange),t.query&&(a.query=t.query),t.filters&&(a.filters=[...t.filters,...a.filters||[]])}return await r.getLocation(a)}))}}const d="ACTION_EXPLORE_DATA_CHART";class explore_data_chart_action_ExploreDataChartAction extends abstract_explore_data_action_AbstractExploreDataAction{constructor(...t){super(...t),a()(this,"id",d),a()(this,"type",d),a()(this,"order",200),a()(this,"getLocation",(async t=>{const{plugins:e}=this.params.start(),{locator:r}=e.discover;if(!r)throw new Error("Discover URL locator not available.");const{embeddable:n}=t,{restOfFilters:a,timeRange:o}=i.esFilters.extractTimeRange(t.filters,t.timeFieldName),s={filters:a,timeRange:o};if(n){s.indexPatternId=c(n)[0]||void 0;const t=n.getInput();t.timeRange&&!s.timeRange&&(s.timeRange=t.timeRange),t.query&&(s.query=t.query),t.filters&&(s.filters=[...t.filters,...s.filters||[]])}return await r.getLocation(s)}))}async isCompatible(t){var e;return"map"!==(null===(e=t.embeddable)||void 0===e?void 0:e.type)&&super.isCompatible(t)}}class plugin_DiscoverEnhancedPlugin{constructor(t){a()(this,"config",void 0),this.context=t,this.config=t.config.get()}setup(t,{uiActions:e,share:r}){const n=Object(o.createStartServicesGetter)(t.getStartServices);if(!!r){const t={start:n};if(this.config.actions.exploreDataInContextMenu.enabled){const r=new explore_data_context_menu_action_ExploreDataContextMenuAction(t);e.addTriggerAction(s.CONTEXT_MENU_TRIGGER,r)}if(this.config.actions.exploreDataInChart.enabled){const r=new explore_data_chart_action_ExploreDataChartAction(t);e.addTriggerAction(i.APPLY_FILTER_TRIGGER,r)}}}start(t,e){}stop(){}}const _=t=>new plugin_DiscoverEnhancedPlugin(t)}]);