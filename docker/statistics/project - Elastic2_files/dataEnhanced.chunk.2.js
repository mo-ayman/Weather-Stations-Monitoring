/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.dataEnhanced_bundle_jsonpfunction=window.dataEnhanced_bundle_jsonpfunction||[]).push([[2],{25:function(e,t,a){"use strict";var s,n=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},o=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function r(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function c(e,t){for(var a={},s=[],n=0;n<e.length;n++){var o=e[n],c=t.base?o[0]+t.base:o[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var u=r(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:S(p,t),references:1}),s.push(l)}return s}function d(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var n=a.nc;n&&(s.nonce=n)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,a,s){var n=a?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,a){var s=a.css,n=a.media,o=a.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var x=null,f=0;function S(e,t){var a,s,n;if(t.singleton){var o=f++;a=x||(x=d(t)),s=p.bind(null,a,o,!1),n=p.bind(null,a,o,!0)}else a=d(t),s=h.bind(null,a,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var a=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<a.length;s++){var n=r(a[s]);i[n].references--}for(var o=c(e,t),d=0;d<a.length;d++){var l=r(a[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}a=o}}}},26:function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",s=e[3];if(!s)return a;if(t&&"function"==typeof btoa){var n=(i=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),o=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[a].concat(o).concat([n]).join("\n")}var i,r,c;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,s){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(s)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);s&&n[c[0]]||(a&&(c[2]?c[2]="".concat(a," and ").concat(c[2]):c[2]=a),t.push(c))}},t}},40:function(e,t,a){switch(window.__kbnThemeTag__){case"v7dark":return a(41);case"v7light":return a(43);case"v8dark":return a(45);case"v8light":return a(47)}},41:function(e,t,a){var s=a(25),n=a(42);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};s(n,o);e.exports=n.locals||{}},42:function(e,t,a){(t=a(26)(!1)).push([e.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}",""]),e.exports=t},43:function(e,t,a){var s=a(25),n=a(44);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};s(n,o);e.exports=n.locals||{}},44:function(e,t,a){(t=a(26)(!1)).push([e.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}",""]),e.exports=t},45:function(e,t,a){var s=a(25),n=a(46);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};s(n,o);e.exports=n.locals||{}},46:function(e,t,a){(t=a(26)(!1)).push([e.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}",""]),e.exports=t},47:function(e,t,a){var s=a(25),n=a(48);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};s(n,o);e.exports=n.locals||{}},48:function(e,t,a){(t=a(26)(!1)).push([e.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}",""]),e.exports=t},49:function(e,t,a){"use strict";a.r(t),a.d(t,"SearchSessionIndicator",(function(){return b}));var s=a(13),n=a.n(s),o=a(0),i=a.n(o),r=a(9),c=a(12),d=a.n(c),l=a(22),u=a(5),p=a(2);a(40);var h=a(1);const x=({name:e,editName:t})=>{const[a,s]=i.a.useState(!1),[n,c]=i.a.useState(e),[d,h]=i.a.useState(!1),x=!!n;return Object(o.useEffect)((()=>{a||c(e)}),[a,e]),a?Object(p.jsx)(r.EuiFieldText,{autoFocus:!0,compressed:!0,placeholder:u.i18n.translate("xpack.data.searchSessionName.placeholderText",{defaultMessage:"Enter a name for the search session"}),value:n,onChange:e=>{c(e.target.value)},"aria-label":u.i18n.translate("xpack.data.searchSessionName.ariaLabelText",{defaultMessage:"Search session name"}),"data-test-subj":"searchSessionNameInput",append:Object(p.jsx)(r.EuiButtonEmpty,{size:"xs",color:"text",onClick:async()=>{if(x){if(n!==e&&t){h(!0);try{await t(n)}catch(e){}}h(!1),s(!1)}},disabled:!x,isLoading:d,"data-test-subj":"searchSessionNameSave"},Object(p.jsx)(l.FormattedMessage,{id:"xpack.data.searchSessionName.saveButtonText",defaultMessage:"Save"}))}):Object(p.jsx)(r.EuiFlexGroup,{wrap:!1,responsive:!1,alignItems:"center",justifyContent:"spaceBetween",gutterSize:"none",style:{paddingTop:4,paddingBottom:4}},Object(p.jsx)(r.EuiText,{size:"s",className:"eui-textTruncate"},Object(p.jsx)("h4",{className:"eui-textTruncate"},e)),Object(p.jsx)(r.EuiButtonIcon,{autoFocus:!0,iconType:"pencil",color:"text","aria-label":u.i18n.translate("xpack.data.searchSessionName.editAriaLabelText",{defaultMessage:"Edit search session name"}),"data-test-subj":"searchSessionNameEdit",onClick:()=>s(!0)}))},f=({onCancel:e=(()=>{}),buttonProps:t={}})=>Object(p.jsx)(r.EuiButtonEmpty,n()({onClick:e,"data-test-subj":"searchSessionIndicatorCancelBtn",color:"danger"},t),Object(p.jsx)(l.FormattedMessage,{id:"xpack.data.searchSessionIndicator.cancelButtonText",defaultMessage:"Stop session"})),S=({viewSearchSessionsLink:e="management/kibana/search_sessions",onViewSearchSessions:t=(()=>{}),buttonProps:a={},managementDisabled:s,managementDisabledReasonText:o})=>Object(p.jsx)(r.EuiToolTip,{content:o},Object(p.jsx)(r.EuiButtonEmpty,n()({href:e,onClick:t,"data-test-subj":"searchSessionIndicatorViewSearchSessionsLink",isDisabled:s},a),Object(p.jsx)(l.FormattedMessage,{id:"xpack.data.searchSessionIndicator.viewSearchSessionsLinkText",defaultMessage:"Manage sessions"}))),g={[h.SearchSessionState.None]:null,[h.SearchSessionState.Loading]:{button:{color:"subdued",iconType:({title:e,titleId:t,...a})=>Object(p.jsx)("svg",n()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:16,height:16,"aria-labelledby":t},a),e?Object(p.jsx)("title",{id:t},e):null,Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 13c3.033 0 5.5-2.467 5.5-5.5S10.533 2 7.5 2c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5C11.09 1 14 3.91 14 7.5S11.09 14 7.5 14 1 11.09 1 7.5c0-.27614.22386-.5.5-.5s.5.22386.5.5C2 10.533 4.467 13 7.5 13zM4.6724 1.96808c0 .27614.22386.5.5.5s.5-.22386.5-.5-.22386-.5-.5-.5-.5.22386-.5.5zM2.8627 3.15836c0 .27614.22386.5.5.5s.5-.22386.5-.5c0-.27615-.22386-.5-.5-.5s-.5.22385-.5.5zm-.82355 2.33755c-.27615 0-.5-.22386-.5-.5s.22385-.5.5-.5c.27614 0 .5.22386.5.5s-.22386.5-.5.5zM10.5 7H8V3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z"})),"aria-label":u.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsIconAriaLabel",{defaultMessage:"Search session loading"}),tooltipText:u.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsIconTooltipText",{defaultMessage:"Search session loading"})},popover:{title:u.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsTitle",{defaultMessage:"Your search is taking a while..."}),description:u.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsDescription",{defaultMessage:"Save your session, continue your work, and return to completed results"}),whenText:e=>u.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsWhenText",{defaultMessage:"Started {when}",values:{when:e.startedTime?d()(e.startedTime).format("L @ LTS"):""}}),primaryAction:f,secondaryAction:({onContinueInBackground:e=(()=>{}),buttonProps:t={},saveDisabled:a=!1,saveDisabledReasonText:s})=>Object(p.jsx)(r.EuiToolTip,{content:s},Object(p.jsx)(r.EuiButtonEmpty,n()({onClick:e,"data-test-subj":"searchSessionIndicatorContinueInBackgroundBtn",isDisabled:a},t),Object(p.jsx)(l.FormattedMessage,{id:"xpack.data.searchSessionIndicator.continueInBackgroundButtonText",defaultMessage:"Save session"})))}},[h.SearchSessionState.Completed]:{button:{color:"subdued",iconType:"check","aria-label":u.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedIconAriaLabel",{defaultMessage:"Search session complete"}),tooltipText:u.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedIconTooltipText",{defaultMessage:"Search session complete"})},popover:{title:u.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedText",{defaultMessage:"Search session complete"}),description:u.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedDescriptionText",{defaultMessage:"Save your session and return to it later"}),whenText:e=>u.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedWhenText",{defaultMessage:"Completed {when}",values:{when:e.completedTime?d()(e.completedTime).format("L @ LTS"):""}}),primaryAction:({onSaveResults:e=(()=>{}),buttonProps:t={},saveDisabled:a=!1,saveDisabledReasonText:s})=>Object(p.jsx)(r.EuiToolTip,{content:s},Object(p.jsx)(r.EuiButtonEmpty,n()({onClick:e,"data-test-subj":"searchSessionIndicatorSaveBtn",isDisabled:a},t),Object(p.jsx)(l.FormattedMessage,{id:"xpack.data.searchSessionIndicator.saveButtonText",defaultMessage:"Save session"}))),secondaryAction:S}},[h.SearchSessionState.BackgroundLoading]:{button:{iconType:r.EuiLoadingSpinner,"aria-label":u.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundIconAriaLabel",{defaultMessage:"Saved session in progress"}),tooltipText:u.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundIconTooltipText",{defaultMessage:"Saved session in progress"})},popover:{title:u.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundTitleText",{defaultMessage:"Saved session in progress"}),description:u.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundDescriptionText",{defaultMessage:"You can return to completed results from Management"}),whenText:e=>u.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundWhenText",{defaultMessage:"Started {when}",values:{when:e.startedTime?d()(e.startedTime).format("L @ LTS"):""}}),primaryAction:f,secondaryAction:S}},[h.SearchSessionState.BackgroundCompleted]:{button:{color:"success",iconType:"checkInCircleFilled","aria-label":u.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundIconAriaLabel",{defaultMessage:"Saved session complete"}),tooltipText:u.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundIconTooltipText",{defaultMessage:"Saved session complete"})},popover:{title:u.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundTitleText",{defaultMessage:"Search session saved"}),description:u.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundDescriptionText",{defaultMessage:"You can return to these results from Management"}),whenText:e=>u.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundWhenText",{defaultMessage:"Completed {when}",values:{when:e.completedTime?d()(e.completedTime).format("L @ LTS"):""}}),secondaryAction:S}},[h.SearchSessionState.Restored]:{button:{color:"success",iconType:({title:e,titleId:t,...a})=>Object(p.jsx)("svg",n()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:16,height:16,"aria-labelledby":t},a),e?Object(p.jsx)("title",{id:t},e):null,Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 8c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zm1 0c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8zm-9.14533 2.6459c.098.097.226.146.354.146.128 0 .256-.049.354-.146l4.79173-4.79165c.195-.196.195-.512 0-.708-.196-.195-.512-.195-.708 0L7.20867 9.58486 4.85424 7.2295c-.196-.195-.512-.195-.708 0-.195.196-.195.512 0 .708l2.70843 2.7084z"})),"aria-label":u.i18n.translate("xpack.data.searchSessionIndicator.restoredResultsIconAriaLabel",{defaultMessage:"Saved session restored"}),tooltipText:u.i18n.translate("xpack.data.searchSessionIndicator.restoredResultsTooltipText",{defaultMessage:"Search session restored"})},popover:{title:u.i18n.translate("xpack.data.searchSessionIndicator.restoredTitleText",{defaultMessage:"Search session restored"}),description:u.i18n.translate("xpack.data.searchSessionIndicator.restoredDescriptionText",{defaultMessage:"You are viewing cached data from a specific time range. Changing the time range or filters will re-run the session"}),whenText:e=>u.i18n.translate("xpack.data.searchSessionIndicator.restoredWhenText",{defaultMessage:"Completed {when}",values:{when:e.completedTime?d()(e.completedTime).format("L @ LTS"):""}}),secondaryAction:S}},[h.SearchSessionState.Canceled]:{button:{color:"danger",iconType:"alert","aria-label":u.i18n.translate("xpack.data.searchSessionIndicator.canceledIconAriaLabel",{defaultMessage:"Search session stopped"}),tooltipText:u.i18n.translate("xpack.data.searchSessionIndicator.canceledTooltipText",{defaultMessage:"Search session stopped"})},popover:{title:u.i18n.translate("xpack.data.searchSessionIndicator.canceledTitleText",{defaultMessage:"Search session stopped"}),description:u.i18n.translate("xpack.data.searchSessionIndicator.canceledDescriptionText",{defaultMessage:"You are viewing incomplete data"}),whenText:e=>u.i18n.translate("xpack.data.searchSessionIndicator.canceledWhenText",{defaultMessage:"Stopped {when}",values:{when:e.canceledTime?d()(e.canceledTime).format("L @ LTS"):""}}),secondaryAction:S}}},b=i.a.forwardRef(((e,t)=>{var a,s;const[c,d]=i.a.useState(!1),l=Object(o.useCallback)((()=>d(!1)),[]),u=e.onOpened,h=Object(o.useCallback)((()=>{d(!0),u&&u(e.state)}),[u,e.state]),f=Object(o.useCallback)((()=>{c?l():h()}),[c,h,l]);if(Object(o.useImperativeHandle)(t,(()=>({openPopover:()=>{h()},closePopover:()=>{l()}})),[h,l]),!g[e.state])return null;const{button:S,popover:b}=g[e.state];return Object(p.jsx)(r.EuiPopover,{ownFocus:!0,isOpen:c,closePopover:l,anchorPosition:"downLeft",panelPaddingSize:"m",className:"searchSessionIndicator","data-test-subj":"searchSessionIndicator","data-state":e.state,"data-save-disabled":null!==(a=e.saveDisabled)&&void 0!==a&&a,panelClassName:"searchSessionIndicator__panel",repositionOnScroll:!0,button:Object(p.jsx)(r.EuiToolTip,{content:S.tooltipText,delay:"long"},Object(p.jsx)(r.EuiButtonIcon,{color:S.color,"aria-label":S["aria-label"],iconType:S.iconType,onClick:f}))},Object(p.jsx)("div",{"data-test-subj":"searchSessionIndicatorPopoverContainer"},e.searchSessionName&&e.saveSearchSessionNameFn?Object(p.jsx)(x,{name:e.searchSessionName,editName:e.saveSearchSessionNameFn}):Object(p.jsx)(r.EuiText,{size:"s"},Object(p.jsx)("p",null,b.title)),Object(p.jsx)(r.EuiSpacer,{size:"xs"}),null!==(s=b.whenText)&&void 0!==s&&s.call(b,e)?Object(p.jsx)(i.a.Fragment,null,Object(p.jsx)(r.EuiText,{size:"xs",color:"subdued"},Object(p.jsx)("p",null,b.whenText(e))),Object(p.jsx)(r.EuiSpacer,{size:"xs"})):null,Object(p.jsx)(r.EuiText,{size:"xs",color:"subdued"},Object(p.jsx)("p",null,b.description)),Object(p.jsx)(r.EuiSpacer,{size:"m"}),Object(p.jsx)(r.EuiFlexGroup,{wrap:!0,responsive:!1,alignItems:"center",justifyContent:"flexEnd",gutterSize:"s"},b.primaryAction&&Object(p.jsx)(r.EuiFlexItem,{grow:!1},Object(p.jsx)(b.primaryAction,n()({},e,{buttonProps:{size:"xs"}}))),b.secondaryAction&&Object(p.jsx)(r.EuiFlexItem,{grow:!1},Object(p.jsx)(b.secondaryAction,n()({},e,{buttonProps:{size:"xs",flush:"right"}}))))))}));t.default=b}}]);