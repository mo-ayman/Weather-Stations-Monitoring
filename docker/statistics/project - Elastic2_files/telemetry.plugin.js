!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){e.exports=n(8)(1075)},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){"use strict";n.r(t),n.d(t,"CONFIG_TELEMETRY",(function(){return s})),n.d(t,"getConfigTelemetryDesc",(function(){return i})),n.d(t,"REPORT_INTERVAL_MS",(function(){return a})),n.d(t,"LOCALSTORAGE_KEY",(function(){return o})),n.d(t,"PATH_TO_ADVANCED_SETTINGS",(function(){return c})),n.d(t,"PRIVACY_STATEMENT_URL",(function(){return l})),n.d(t,"PAYLOAD_CONTENT_ENCODING",(function(){return h})),n.d(t,"ENDPOINT_VERSION",(function(){return u})),n.d(t,"ENDPOINT_STAGING",(function(){return p})),n.d(t,"ENDPOINT_PROD",(function(){return E})),n.d(t,"TELEMETRY_CHANNELS",(function(){return d}));var r=n(6);const s="telemetry:optIn",i=()=>r.i18n.translate("telemetry.telemetryConfigDescription",{defaultMessage:"Help us improve the Elastic Stack by providing usage statistics for basic features. We will not share this data outside of Elastic."}),a=864e5,o="telemetry.data",c="/app/management/kibana/settings",l="https://www.elastic.co/legal/product-privacy-statement",h="aes256gcm",u="v2",p="https://telemetry-staging.elastic.co/",E="https://telemetry.elastic.co/",d={SNAPSHOT_CHANNEL:"xpack",OPT_IN_STATUS_CHANNEL:"opt_in_status"}},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){(function(t){const n="object"==typeof t&&Object({IS_KIBANA_DISTRIBUTABLE:"true"})&&Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG&&/\bsemver\b/i.test(Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=n}).call(this,n(16))},function(e,t){const n=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:n,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){const r=n(15);e.exports=(e,t,n=!1)=>{if(e instanceof r)return e;try{return new r(e,t)}catch(e){if(!n)return null;throw e}}},function(e,t,n){n(14),__kbnBundles__.define("plugin/telemetry/public",n,20),__kbnBundles__.define("plugin/telemetry/common/constants",n,2)},function(e,t,n){n.p=window.__kbnPublicPath__.telemetry},function(e,t,n){const r=n(9),{MAX_LENGTH:s,MAX_SAFE_INTEGER:i}=n(10),{safeRe:a,t:o}=n(17),c=n(18),{compareIdentifiers:l}=n(19);class SemVer{constructor(e,t){if(t=c(t),e instanceof SemVer){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>s)throw new TypeError(`version is longer than ${s} characters`);r("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const n=e.trim().match(t.loose?a[o.LOOSE]:a[o.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(r("SemVer.compare",this.version,this.options,e),!(e instanceof SemVer)){if("string"==typeof e&&e===this.version)return 0;e=new SemVer(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof SemVer||(e=new SemVer(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)}comparePre(e){if(e instanceof SemVer||(e=new SemVer(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const n=this.prerelease[t],s=e.prerelease[t];if(r("prerelease compare",t,n,s),void 0===n&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===n)return-1;if(n!==s)return l(n,s)}while(++t)}compareBuild(e){e instanceof SemVer||(e=new SemVer(e,this.options));let t=0;do{const n=this.build[t],s=e.build[t];if(r("prerelease compare",t,n,s),void 0===n&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===n)return-1;if(n!==s)return l(n,s)}while(++t)}inc(e,t,n){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,n),this.inc("pre",t,n);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,n),this.inc("pre",t,n);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(n)?1:0;if(!t&&!1===n)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let r=this.prerelease.length;for(;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);if(-1===r){if(t===this.prerelease.join(".")&&!1===n)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let r=[t,e];!1===n&&(r=[t]),0===l(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=r):this.prerelease=r}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=SemVer},function(e,t,n){e.exports=n(8)(916)},function(e,t,n){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:s,MAX_LENGTH:i}=n(10),a=n(9),o=(t=e.exports={}).re=[],c=t.safeRe=[],l=t.src=[],h=t.t={};let u=0;const p="[a-zA-Z0-9-]",E=[["\\s",1],["\\d",i],[p,s]],d=(e,t,n)=>{const r=(e=>{for(const[t,n]of E)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e})(t),s=u++;a(e,s,t),h[e]=s,l[s]=t,o[s]=new RegExp(t,n?"g":void 0),c[s]=new RegExp(r,n?"g":void 0)};d("NUMERICIDENTIFIER","0|[1-9]\\d*"),d("NUMERICIDENTIFIERLOOSE","\\d+"),d("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),d("MAINVERSION",`(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})`),d("MAINVERSIONLOOSE",`(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})`),d("PRERELEASEIDENTIFIER",`(?:${l[h.NUMERICIDENTIFIER]}|${l[h.NONNUMERICIDENTIFIER]})`),d("PRERELEASEIDENTIFIERLOOSE",`(?:${l[h.NUMERICIDENTIFIERLOOSE]}|${l[h.NONNUMERICIDENTIFIER]})`),d("PRERELEASE",`(?:-(${l[h.PRERELEASEIDENTIFIER]}(?:\\.${l[h.PRERELEASEIDENTIFIER]})*))`),d("PRERELEASELOOSE",`(?:-?(${l[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[h.PRERELEASEIDENTIFIERLOOSE]})*))`),d("BUILDIDENTIFIER",`${p}+`),d("BUILD",`(?:\\+(${l[h.BUILDIDENTIFIER]}(?:\\.${l[h.BUILDIDENTIFIER]})*))`),d("FULLPLAIN",`v?${l[h.MAINVERSION]}${l[h.PRERELEASE]}?${l[h.BUILD]}?`),d("FULL",`^${l[h.FULLPLAIN]}$`),d("LOOSEPLAIN",`[v=\\s]*${l[h.MAINVERSIONLOOSE]}${l[h.PRERELEASELOOSE]}?${l[h.BUILD]}?`),d("LOOSE",`^${l[h.LOOSEPLAIN]}$`),d("GTLT","((?:<|>)?=?)"),d("XRANGEIDENTIFIERLOOSE",`${l[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),d("XRANGEIDENTIFIER",`${l[h.NUMERICIDENTIFIER]}|x|X|\\*`),d("XRANGEPLAIN",`[v=\\s]*(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:${l[h.PRERELEASE]})?${l[h.BUILD]}?)?)?`),d("XRANGEPLAINLOOSE",`[v=\\s]*(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:${l[h.PRERELEASELOOSE]})?${l[h.BUILD]}?)?)?`),d("XRANGE",`^${l[h.GTLT]}\\s*${l[h.XRANGEPLAIN]}$`),d("XRANGELOOSE",`^${l[h.GTLT]}\\s*${l[h.XRANGEPLAINLOOSE]}$`),d("COERCE",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),d("COERCERTL",l[h.COERCE],!0),d("LONETILDE","(?:~>?)"),d("TILDETRIM",`(\\s*)${l[h.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",d("TILDE",`^${l[h.LONETILDE]}${l[h.XRANGEPLAIN]}$`),d("TILDELOOSE",`^${l[h.LONETILDE]}${l[h.XRANGEPLAINLOOSE]}$`),d("LONECARET","(?:\\^)"),d("CARETTRIM",`(\\s*)${l[h.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",d("CARET",`^${l[h.LONECARET]}${l[h.XRANGEPLAIN]}$`),d("CARETLOOSE",`^${l[h.LONECARET]}${l[h.XRANGEPLAINLOOSE]}$`),d("COMPARATORLOOSE",`^${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]})$|^$`),d("COMPARATOR",`^${l[h.GTLT]}\\s*(${l[h.FULLPLAIN]})$|^$`),d("COMPARATORTRIM",`(\\s*)${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]}|${l[h.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",d("HYPHENRANGE",`^\\s*(${l[h.XRANGEPLAIN]})\\s+-\\s+(${l[h.XRANGEPLAIN]})\\s*$`),d("HYPHENRANGELOOSE",`^\\s*(${l[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[h.XRANGEPLAINLOOSE]})\\s*$`),d("STAR","(<|>)?=?\\s*\\*"),d("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),d("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},function(e,t){const n=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?n:e:r},function(e,t){const n=/^[0-9]+$/,r=(e,t)=>{const r=n.test(e),s=n.test(t);return r&&s&&(e=+e,t=+t),e===t?0:r&&!s?-1:s&&!r?1:e<t?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return O}));var r=n(0),s=n.n(r),i=n(2),a=n(11);class telemetry_sender_TelemetrySender{static getRetryDelay(e){return 1e3*Math.min(Math.pow(2,e),64)*60}constructor(e){s()(this,"telemetryService",void 0),s()(this,"lastReported",void 0),s()(this,"storage",void 0),s()(this,"intervalId",0),s()(this,"retryCount",0),s()(this,"saveToBrowser",(()=>{this.storage.set(i.LOCALSTORAGE_KEY,{lastReport:this.lastReported})})),s()(this,"shouldSendReport",(()=>{if(this.telemetryService.canSendTelemetry()){if(!this.lastReported)return!0;const e=parseInt(this.lastReported,10);if(isNaN(e)||Date.now()-e>i.REPORT_INTERVAL_MS)return!0}return!1})),s()(this,"sendIfDue",(async()=>{this.shouldSendReport()&&(this.lastReported=`${Date.now()}`,this.saveToBrowser(),this.retryCount=0,await this.sendUsageData())})),s()(this,"sendUsageData",(async()=>{try{const e=this.telemetryService.getTelemetryUrl(),t=await this.telemetryService.fetchTelemetry();await Promise.all(t.map((async({clusterUuid:t,stats:n})=>await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-Elastic-Stack-Version":this.telemetryService.currentKibanaVersion,"X-Elastic-Cluster-ID":t,"X-Elastic-Content-Encoding":i.PAYLOAD_CONTENT_ENCODING},body:n}))))}catch(e){this.retryCount=this.retryCount+1,this.retryCount<20?window.setTimeout(this.sendUsageData,telemetry_sender_TelemetrySender.getRetryDelay(this.retryCount)):console.warn(`TelemetrySender.sendUsageData exceeds number of retry attempts with ${e.message}`)}})),s()(this,"startChecking",(()=>{0===this.intervalId&&(this.intervalId=window.setInterval(this.sendIfDue,6e4))})),this.telemetryService=e,this.storage=new a.Storage(window.localStorage);const t=this.storage.get(i.LOCALSTORAGE_KEY);t&&(this.lastReported=t.lastReport)}}var o=n(6),c=n(12),l=n.n(c);function h(e){try{return l()(e)}catch(e){return null}}function u({channelName:e,env:t}){const n=function(e){switch(e){case"prod":return i.ENDPOINT_PROD;case"staging":return i.ENDPOINT_STAGING;default:throw new Error(`Unknown telemetry endpoint env ${e}.`)}}(t),r=function(e){switch(e){case"snapshot":return i.TELEMETRY_CHANNELS.SNAPSHOT_CHANNEL;case"optInStatus":return i.TELEMETRY_CHANNELS.OPT_IN_STATUS_CHANNEL;default:throw new Error(`Unknown telemetry channel ${e}.`)}}(e);return`${n}${r}/${i.ENDPOINT_VERSION}/send`}class telemetry_service_TelemetryService{constructor({config:e,http:t,isScreenshotMode:n,notifications:r,currentKibanaVersion:a,reportOptInStatusChange:c=!0}){s()(this,"http",void 0),s()(this,"reportOptInStatusChange",void 0),s()(this,"notifications",void 0),s()(this,"defaultConfig",void 0),s()(this,"isScreenshotMode",void 0),s()(this,"updatedConfig",void 0),s()(this,"currentKibanaVersion",void 0),s()(this,"getCanChangeOptInStatus",(()=>this.config.allowChangingOptInStatus)),s()(this,"getOptInStatusUrl",(()=>{const{sendUsageTo:e}=this.config;return u({channelName:"optInStatus",env:e})})),s()(this,"getTelemetryUrl",(()=>{const{sendUsageTo:e}=this.config;return u({channelName:"snapshot",env:e})})),s()(this,"getIsOptedIn",(()=>this.isOptedIn)),s()(this,"canSendTelemetry",(()=>!this.isScreenshotMode&&this.getIsOptedIn())),s()(this,"fetchExample",(async()=>await this.fetchTelemetry({unencrypted:!0,refreshCache:!0}))),s()(this,"fetchTelemetry",(async({unencrypted:e=!1,refreshCache:t=!1}={})=>this.http.post("/api/telemetry/v2/clusters/_stats",{body:JSON.stringify({unencrypted:e,refreshCache:t})}))),s()(this,"setOptIn",(async e=>{if(!this.getCanChangeOptInStatus())return!1;try{const t=await this.http.post("/api/telemetry/v2/optIn",{body:JSON.stringify({enabled:e})});this.reportOptInStatusChange&&await this.reportOptInStatus(t),this.isOptedIn=e}catch(e){return this.notifications.toasts.addError(e,{title:o.i18n.translate("telemetry.optInErrorToastTitle",{defaultMessage:"Error"}),toastMessage:o.i18n.translate("telemetry.optInErrorToastText",{defaultMessage:"An error occurred while trying to set the usage statistics preference."})}),!1}return!0})),s()(this,"setUserHasSeenNotice",(async()=>{try{await this.http.put("/api/telemetry/v2/userHasSeenNotice"),this.userHasSeenOptedInNotice=!0}catch(e){this.notifications.toasts.addError(e,{title:o.i18n.translate("telemetry.optInNoticeSeenErrorTitle",{defaultMessage:"Error"}),toastMessage:o.i18n.translate("telemetry.optInNoticeSeenErrorToastText",{defaultMessage:"An error occurred dismissing the notice"})}),this.userHasSeenOptedInNotice=!1}})),s()(this,"reportOptInStatus",(async e=>{const t=this.getOptInStatusUrl();try{await Promise.all(e.map((async({clusterUuid:e,stats:n})=>await fetch(t,{method:"POST",headers:{"Content-Type":"application/json","X-Elastic-Stack-Version":this.currentKibanaVersion,"X-Elastic-Cluster-ID":e,"X-Elastic-Content-Encoding":i.PAYLOAD_CONTENT_ENCODING},body:n}))))}catch(e){}})),this.defaultConfig=e,this.isScreenshotMode=n,this.reportOptInStatusChange=c,this.notifications=r,this.currentKibanaVersion=a,this.http=t}set config(e){this.updatedConfig=e}get config(){return{...this.defaultConfig,...this.updatedConfig}}get isOptedIn(){return Boolean(this.config.optIn)}set isOptedIn(e){this.config={...this.config,optIn:e}}get userHasSeenOptedInNotice(){return this.config.telemetryNotifyUserAboutOptInDefault}set userHasSeenOptedInNotice(e){this.config={...this.config,telemetryNotifyUserAboutOptInDefault:e}}getUserShouldSeeOptInNotice(){var e;return null!==(e=this.config.telemetryNotifyUserAboutOptInDefault&&this.config.userCanChangeSettings)&&void 0!==e&&e}get userCanChangeSettings(){var e;return null!==(e=this.config.userCanChangeSettings)&&void 0!==e&&e}set userCanChangeSettings(e){this.config={...this.config,userCanChangeSettings:e}}}var p=n(5),E=n(3),d=n(4),I=n(1);class opted_in_notice_banner_OptedInNoticeBanner extends p.PureComponent{render(){const{onSeenBanner:e,http:t}=this.props,n=t.basePath.get(),r=o.i18n.translate("telemetry.telemetryOptedInNoticeTitle",{defaultMessage:"Help us improve the Elastic Stack"});return Object(I.jsx)(E.EuiCallOut,{title:r},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.telemetryOptedInNoticeDescription",defaultMessage:"To learn about how usage data helps us manage and improve our products and services, see our {privacyStatementLink}. To stop collection, {disableLink}.",values:{privacyStatementLink:Object(I.jsx)(E.EuiLink,{onClick:e,href:i.PRIVACY_STATEMENT_URL,target:"_blank",rel:"noopener"},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.telemetryOptedInPrivacyStatement",defaultMessage:"Privacy Statement"})),disableLink:Object(I.jsx)(E.EuiLink,{href:`${n}${i.PATH_TO_ADVANCED_SETTINGS}`,onClick:e},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.telemetryOptedInDisableUsage",defaultMessage:"disable usage data here"}))}}),Object(I.jsx)(E.EuiSpacer,{size:"s"}),Object(I.jsx)(E.EuiButton,{size:"s",onClick:e},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.telemetryOptedInDismissMessage",defaultMessage:"Dismiss"})))}}var m=n(7);class opt_in_message_OptInMessage extends p.PureComponent{render(){return Object(I.jsx)(p.Fragment,null,Object(I.jsx)(d.FormattedMessage,{id:"telemetry.telemetryBannerDescription",defaultMessage:"Want to help us improve the Elastic Stack? Data usage collection is currently disabled. Enabling data usage collection helps us manage and improve our products and services. See our {privacyStatementLink} for more details.",values:{privacyStatementLink:Object(I.jsx)(E.EuiLink,{href:i.PRIVACY_STATEMENT_URL,target:"_blank",rel:"noopener"},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.welcomeBanner.telemetryConfigDetailsDescription.telemetryPrivacyStatementLinkText",defaultMessage:"Privacy Statement"}))}}))}}class opt_in_banner_OptInBanner extends p.PureComponent{render(){const{onChangeOptInClick:e}=this.props,t=Object(I.jsx)(d.FormattedMessage,{id:"telemetry.welcomeBanner.title",defaultMessage:"Help us improve the Elastic Stack"});return Object(I.jsx)(E.EuiCallOut,{iconType:"questionInCircle",title:t},Object(I.jsx)(opt_in_message_OptInMessage,null),Object(I.jsx)(E.EuiSpacer,{size:"s"}),Object(I.jsx)(E.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},Object(I.jsx)(E.EuiFlexItem,{grow:!1},Object(I.jsx)(E.EuiButton,{size:"s","data-test-subj":"enable",onClick:()=>e(!0)},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.welcomeBanner.enableButtonLabel",defaultMessage:"Enable"}))),Object(I.jsx)(E.EuiFlexItem,{grow:!1},Object(I.jsx)(E.EuiButton,{size:"s","data-test-subj":"disable",onClick:()=>e(!1)},Object(I.jsx)(d.FormattedMessage,{id:"telemetry.welcomeBanner.disableButtonLabel",defaultMessage:"Disable"})))))}}class telemetry_notifications_TelemetryNotifications{constructor({http:e,overlays:t,telemetryService:n}){s()(this,"http",void 0),s()(this,"overlays",void 0),s()(this,"telemetryService",void 0),s()(this,"optedInNoticeBannerId",void 0),s()(this,"optInBannerId",void 0),s()(this,"shouldShowOptedInNoticeBanner",(()=>{const e=this.telemetryService.getUserShouldSeeOptInNotice();return!(void 0!==this.optedInNoticeBannerId)&&e})),s()(this,"renderOptedInNoticeBanner",(()=>{const e=function({onSeen:e,overlays:t,http:n}){const r=Object(m.toMountPoint)(Object(I.jsx)(opted_in_notice_banner_OptedInNoticeBanner,{onSeenBanner:e,http:n}));return t.banners.add(r,1e4)}({http:this.http,onSeen:this.setOptedInNoticeSeen,overlays:this.overlays});this.optedInNoticeBannerId=e})),s()(this,"shouldShowOptInBanner",(()=>{const e=this.telemetryService.getIsOptedIn();return!(void 0!==this.optInBannerId)&&null===e})),s()(this,"renderOptInBanner",(()=>{const e=function({setOptIn:e,overlays:t}){const n=Object(m.toMountPoint)(Object(I.jsx)(opt_in_banner_OptInBanner,{onChangeOptInClick:e}));return t.banners.add(n,1e4)}({setOptIn:this.onSetOptInClick,overlays:this.overlays});this.optInBannerId=e})),s()(this,"onSetOptInClick",(async e=>{this.optInBannerId&&(this.overlays.banners.remove(this.optInBannerId),this.optInBannerId=void 0),await this.telemetryService.setOptIn(e)})),s()(this,"setOptedInNoticeSeen",(async()=>{this.optedInNoticeBannerId&&(this.overlays.banners.remove(this.optedInNoticeBannerId),this.optedInNoticeBannerId=void 0),await this.telemetryService.setUserHasSeenNotice()})),this.telemetryService=n,this.http=e,this.overlays=t}}class plugin_TelemetryPlugin{constructor(e){s()(this,"currentKibanaVersion",void 0),s()(this,"config",void 0),s()(this,"telemetrySender",void 0),s()(this,"telemetryNotifications",void 0),s()(this,"telemetryService",void 0),s()(this,"canUserChangeSettings",!0),this.currentKibanaVersion=e.env.packageInfo.version,this.config=e.config.get()}setup({http:e,notifications:t},{screenshotMode:n}){const r=this.config,s=this.currentKibanaVersion;return this.telemetryService=new telemetry_service_TelemetryService({config:r,isScreenshotMode:n.isScreenshotMode(),http:e,notifications:t,currentKibanaVersion:s}),this.telemetrySender=new telemetry_sender_TelemetrySender(this.telemetryService),{telemetryService:this.getTelemetryServicePublicApis()}}start({http:e,overlays:t,application:n,savedObjects:r}){if(!this.telemetryService)throw Error("Telemetry plugin failed to initialize properly.");this.canUserChangeSettings=this.getCanUserChangeSettings(n),this.telemetryService.userCanChangeSettings=this.canUserChangeSettings;const s=new telemetry_notifications_TelemetryNotifications({http:e,overlays:t,telemetryService:this.telemetryService});return this.telemetryNotifications=s,n.currentAppId$.subscribe((async()=>{if(this.getIsUnauthenticated(e))return;const t=await this.getTelemetrySavedObject(r.client),n=await this.updateConfigsBasedOnSavedObjects(t);this.telemetryService.config=n;const s=n.banner;this.maybeStartTelemetryPoller(),s&&(this.maybeShowOptedInNotificationBanner(),this.maybeShowOptInBanner())})),{telemetryService:this.getTelemetryServicePublicApis(),telemetryNotifications:{setOptedInNoticeSeen:()=>s.setOptedInNoticeSeen()},telemetryConstants:{getPrivacyStatementUrl:()=>i.PRIVACY_STATEMENT_URL}}}getTelemetryServicePublicApis(){const e=this.telemetryService;return{getIsOptedIn:()=>e.getIsOptedIn(),setOptIn:t=>e.setOptIn(t),canSendTelemetry:()=>e.canSendTelemetry(),userCanChangeSettings:e.userCanChangeSettings,getCanChangeOptInStatus:()=>e.getCanChangeOptInStatus(),fetchExample:()=>e.fetchExample()}}getCanUserChangeSettings(e){var t,n,r;return null===(t=null===(n=e.capabilities)||void 0===n||null===(r=n.savedObjectsManagement)||void 0===r?void 0:r.edit)||void 0===t||t}getIsUnauthenticated(e){const{anonymousPaths:t}=e;return t.isAnonymous(window.location.pathname)}maybeStartTelemetryPoller(){this.telemetrySender&&this.telemetrySender.startChecking()}maybeShowOptedInNotificationBanner(){if(!this.telemetryNotifications)return;this.telemetryNotifications.shouldShowOptedInNoticeBanner()&&this.telemetryNotifications.renderOptedInNoticeBanner()}maybeShowOptInBanner(){if(!this.telemetryNotifications)return;this.telemetryNotifications.shouldShowOptInBanner()&&this.telemetryNotifications.renderOptInBanner()}async updateConfigsBasedOnSavedObjects(e){const t=this.config.sendUsageFrom,n=this.config.optIn,r=this.config.allowChangingOptInStatus,s=this.currentKibanaVersion,i=function({telemetrySavedObject:e,configTelemetryAllowChangingOptInStatus:t}){return e?void 0===e.allowChangingOptInStatus?t:e.allowChangingOptInStatus:t}({configTelemetryAllowChangingOptInStatus:r,telemetrySavedObject:e}),a=(({telemetrySavedObject:e,currentKibanaVersion:t,allowChangingOptInStatus:n,configTelemetryOptIn:r})=>{if("boolean"==typeof r&&!n)return r;if(!1===e)return!1;if(null===e||"boolean"!=typeof e.enabled)return r;const s=e.enabled;if(!0===s)return s;const i=e.lastVersionChecked;if("string"!=typeof i)return null;if(i===t)return s;const a=h(i),o=h(t);return null==a||null==o||o.major>a.major||o.major===a.major&&o.minor>a.minor?null:s})({configTelemetryOptIn:n,allowChangingOptInStatus:i,telemetrySavedObject:e,currentKibanaVersion:s}),o=function({telemetrySavedObject:e,configTelemetrySendUsageFrom:t}){return e?void 0===e.sendUsageFrom?t:e.sendUsageFrom:t}({configTelemetrySendUsageFrom:t,telemetrySavedObject:e}),c=function({allowChangingOptInStatus:e,telemetrySavedObject:t,telemetryOptedIn:n,configTelemetryOptIn:r}){return!1!==e&&(!t||!0!==t.userHasSeenNotice)&&!0===n&&!0===r}({telemetrySavedObject:e,allowChangingOptInStatus:i,configTelemetryOptIn:n,telemetryOptedIn:a});return{...this.config,optIn:a,sendUsageFrom:o,telemetryNotifyUserAboutOptInDefault:c,userCanChangeSettings:this.canUserChangeSettings}}async getTelemetrySavedObject(e){try{const{savedObjects:[{attributes:t}]}=await e.bulkGet([{id:"telemetry",type:"telemetry"}]);return t}catch(e){const t=e[Symbol("SavedObjectsClientErrorCode")];if("SavedObjectsClient/notFound"===t)return null;if("SavedObjectsClient/forbidden"===t)return!1;throw e}}}function O(e){return new plugin_TelemetryPlugin(e)}}]);