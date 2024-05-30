import{_ as ya,G as Aa,H as qd,o as At,e as hn,E as je,J as qn,K as ba,L as va,v as Vd,F as Ai,M as $i,N as zd,O as Yd,n as Wd,P as jd,c as ls,p as ds}from"./index-6569d9b5.js";var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xd(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function Zd(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ea={exports:{}};(function(a,e){(function(t){var n=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,r=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(l,d,c){if(c=c||{},l=l.trim(),d=d.trim(),!d){if(!c.alwaysNormalize)return l;var u=o.parseURL(l);if(!u)throw new Error("Error trying to parse base URL.");return u.path=o.normalizePath(u.path),o.buildURLFromParts(u)}var h=o.parseURL(d);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return c.alwaysNormalize?(h.path=o.normalizePath(h.path),o.buildURLFromParts(h)):d;var A=o.parseURL(l);if(!A)throw new Error("Error trying to parse base URL.");if(!A.netLoc&&A.path&&A.path[0]!=="/"){var b=i.exec(A.path);A.netLoc=b[1],A.path=b[2]}A.netLoc&&!A.path&&(A.path="/");var v={scheme:A.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(v.netLoc=A.netLoc,h.path[0]!=="/"))if(!h.path)v.path=A.path,h.params||(v.params=A.params,h.query||(v.query=A.query));else{var x=A.path,w=x.substring(0,x.lastIndexOf("/")+1)+h.path;v.path=o.normalizePath(w)}return v.path===null&&(v.path=c.alwaysNormalize?o.normalizePath(h.path):h.path),o.buildURLFromParts(v)},parseURL:function(l){var d=n.exec(l);return d?{scheme:d[1]||"",netLoc:d[2]||"",path:d[3]||"",params:d[4]||"",query:d[5]||"",fragment:d[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(r,"");l.length!==(l=l.replace(s,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};a.exports=o})()})(Ea);var nr=Ea.exports;function cs(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,n)}return t}function Be(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?cs(Object(t),!0).forEach(function(n){tc(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):cs(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Jd(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function ec(a){var e=Jd(a,"string");return typeof e=="symbol"?e:String(e)}function tc(a,e,t){return e=ec(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function we(){return we=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},we.apply(this,arguments)}const J=Number.isFinite||function(a){return typeof a=="number"&&isFinite(a)},nc=Number.isSafeInteger||function(a){return typeof a=="number"&&Math.abs(a)<=ic},ic=Number.MAX_SAFE_INTEGER||9007199254740991;let T=function(a){return a.MEDIA_ATTACHING="hlsMediaAttaching",a.MEDIA_ATTACHED="hlsMediaAttached",a.MEDIA_DETACHING="hlsMediaDetaching",a.MEDIA_DETACHED="hlsMediaDetached",a.BUFFER_RESET="hlsBufferReset",a.BUFFER_CODECS="hlsBufferCodecs",a.BUFFER_CREATED="hlsBufferCreated",a.BUFFER_APPENDING="hlsBufferAppending",a.BUFFER_APPENDED="hlsBufferAppended",a.BUFFER_EOS="hlsBufferEos",a.BUFFER_FLUSHING="hlsBufferFlushing",a.BUFFER_FLUSHED="hlsBufferFlushed",a.MANIFEST_LOADING="hlsManifestLoading",a.MANIFEST_LOADED="hlsManifestLoaded",a.MANIFEST_PARSED="hlsManifestParsed",a.LEVEL_SWITCHING="hlsLevelSwitching",a.LEVEL_SWITCHED="hlsLevelSwitched",a.LEVEL_LOADING="hlsLevelLoading",a.LEVEL_LOADED="hlsLevelLoaded",a.LEVEL_UPDATED="hlsLevelUpdated",a.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",a.LEVELS_UPDATED="hlsLevelsUpdated",a.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",a.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",a.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",a.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",a.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",a.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",a.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",a.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",a.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",a.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",a.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",a.CUES_PARSED="hlsCuesParsed",a.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",a.INIT_PTS_FOUND="hlsInitPtsFound",a.FRAG_LOADING="hlsFragLoading",a.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",a.FRAG_LOADED="hlsFragLoaded",a.FRAG_DECRYPTED="hlsFragDecrypted",a.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",a.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",a.FRAG_PARSING_METADATA="hlsFragParsingMetadata",a.FRAG_PARSED="hlsFragParsed",a.FRAG_BUFFERED="hlsFragBuffered",a.FRAG_CHANGED="hlsFragChanged",a.FPS_DROP="hlsFpsDrop",a.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",a.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",a.ERROR="hlsError",a.DESTROYING="hlsDestroying",a.KEY_LOADING="hlsKeyLoading",a.KEY_LOADED="hlsKeyLoaded",a.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",a.BACK_BUFFER_REACHED="hlsBackBufferReached",a.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",a}({}),re=function(a){return a.NETWORK_ERROR="networkError",a.MEDIA_ERROR="mediaError",a.KEY_SYSTEM_ERROR="keySystemError",a.MUX_ERROR="muxError",a.OTHER_ERROR="otherError",a}({}),O=function(a){return a.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",a.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",a.KEY_SYSTEM_NO_SESSION="keySystemNoSession",a.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",a.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",a.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",a.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",a.MANIFEST_LOAD_ERROR="manifestLoadError",a.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",a.MANIFEST_PARSING_ERROR="manifestParsingError",a.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",a.LEVEL_EMPTY_ERROR="levelEmptyError",a.LEVEL_LOAD_ERROR="levelLoadError",a.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",a.LEVEL_PARSING_ERROR="levelParsingError",a.LEVEL_SWITCH_ERROR="levelSwitchError",a.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",a.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",a.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",a.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",a.FRAG_LOAD_ERROR="fragLoadError",a.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",a.FRAG_DECRYPT_ERROR="fragDecryptError",a.FRAG_PARSING_ERROR="fragParsingError",a.FRAG_GAP="fragGap",a.REMUX_ALLOC_ERROR="remuxAllocError",a.KEY_LOAD_ERROR="keyLoadError",a.KEY_LOAD_TIMEOUT="keyLoadTimeOut",a.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",a.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",a.BUFFER_APPEND_ERROR="bufferAppendError",a.BUFFER_APPENDING_ERROR="bufferAppendingError",a.BUFFER_STALLED_ERROR="bufferStalledError",a.BUFFER_FULL_ERROR="bufferFullError",a.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",a.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",a.INTERNAL_EXCEPTION="internalException",a.INTERNAL_ABORTED="aborted",a.UNKNOWN="unknown",a}({});const mt=function(){},Gi={trace:mt,debug:mt,log:mt,warn:mt,info:mt,error:mt};let fn=Gi;function rc(a){const e=self.console[a];return e?e.bind(self.console,`[${a}] >`):mt}function sc(a,...e){e.forEach(function(t){fn[t]=a[t]?a[t].bind(a):rc(t)})}function ac(a,e){if(typeof console=="object"&&a===!0||typeof a=="object"){sc(a,"debug","log","info","warn","error");try{fn.log(`Debug logs enabled for "${e}" in hls.js version 1.5.8`)}catch{fn=Gi}}else fn=Gi}const B=fn,oc=/^(\d+)x(\d+)$/,us=/(.+?)=(".*?"|.*?)(?:,|$)/g;class Se{constructor(e){typeof e=="string"&&(e=Se.parseAttrList(e)),we(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const n=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)n[i]=parseInt(t.slice(i*2,i*2+2),16);return n}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const n=this[e];return n?parseFloat(n):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=oc.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const n={},i='"';for(us.lastIndex=0;(t=us.exec(e))!==null;){let r=t[2];r.indexOf(i)===0&&r.lastIndexOf(i)===r.length-1&&(r=r.slice(1,-1));const s=t[1].trim();n[s]=r}return n}}function lc(a){return a!=="ID"&&a!=="CLASS"&&a!=="START-DATE"&&a!=="DURATION"&&a!=="END-DATE"&&a!=="END-ON-NEXT"}function dc(a){return a==="SCTE35-OUT"||a==="SCTE35-IN"}class xa{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const n=t.attr;for(const i in n)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==n[i]){B.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=i;break}e=we(new Se({}),n,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const n=new Date(this.attr["END-DATE"]);J(n.getTime())&&(this._endDate=n)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(J(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&J(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class ti{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var ge={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class Sa{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[ge.AUDIO]:null,[ge.VIDEO]:null,[ge.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const n=e.split("@",2);let i;n.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(n[1]),this._byteRange=[i,parseInt(n[0])+i]}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=nr.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class bi extends Sa{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new ti,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const n=Object.keys(this.levelkeys);if(n.length===1)return this._decryptdata=this.levelkeys[n[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!J(this.programDateTime))return null;const e=J(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),n=t.length;if(n>1||n===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,n,i,r,s=!1){const{elementaryStreams:o}=this,l=o[e];if(!l){o[e]={startPTS:t,endPTS:n,startDTS:i,endDTS:r,partial:s};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,n),l.startDTS=Math.min(l.startDTS,i),l.endDTS=Math.max(l.endDTS,r)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[ge.AUDIO]=null,e[ge.VIDEO]=null,e[ge.AUDIOVIDEO]=null}}class cc extends Sa{constructor(e,t,n,i,r){super(n),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new ti,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const s=e.enumeratedString("BYTERANGE");s&&this.setByteRange(s,r),r&&(this.fragOffset=r.fragOffset+r.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const uc=10;class hc{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,n=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!n||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&n>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?J(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||uc}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function ir(a){return Uint8Array.from(atob(a),e=>e.charCodeAt(0))}function fc(a){const e=Ki(a).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function pc(a){const e=function(n,i,r){const s=n[i];n[i]=n[r],n[r]=s};e(a,0,3),e(a,1,2),e(a,4,5),e(a,6,7)}function mc(a){const e=a.split(":");let t=null;if(e[0]==="data"&&e.length===2){const n=e[1].split(";"),i=n[n.length-1].split(",");if(i.length===2){const r=i[0]==="base64",s=i[1];r?(n.splice(-1,1),t=ir(s)):t=fc(s)}}return t}function Ki(a){return Uint8Array.from(unescape(encodeURIComponent(a)),e=>e.charCodeAt(0))}const Ft=typeof self<"u"?self:void 0;var xe={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},Me={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function hs(a){switch(a){case Me.FAIRPLAY:return xe.FAIRPLAY;case Me.PLAYREADY:return xe.PLAYREADY;case Me.WIDEVINE:return xe.WIDEVINE;case Me.CLEARKEY:return xe.CLEARKEY}}var Ta={WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function gc(a){if(a===Ta.WIDEVINE)return xe.WIDEVINE}function fs(a){switch(a){case xe.FAIRPLAY:return Me.FAIRPLAY;case xe.PLAYREADY:return Me.PLAYREADY;case xe.WIDEVINE:return Me.WIDEVINE;case xe.CLEARKEY:return Me.CLEARKEY}}function vi(a){const{drmSystems:e,widevineLicenseUrl:t}=a,n=e?[xe.FAIRPLAY,xe.WIDEVINE,xe.PLAYREADY,xe.CLEARKEY].filter(i=>!!e[i]):[];return!n[xe.WIDEVINE]&&t&&n.push(xe.WIDEVINE),n}const Ca=function(a){return Ft!=null&&(a=Ft.navigator)!=null&&a.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function yc(a,e,t,n){let i;switch(a){case xe.FAIRPLAY:i=["cenc","sinf"];break;case xe.WIDEVINE:case xe.PLAYREADY:i=["cenc"];break;case xe.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${a}`)}return Ac(i,e,t,n)}function Ac(a,e,t,n){return[{initDataTypes:a,persistentState:n.persistentState||"optional",distinctiveIdentifier:n.distinctiveIdentifier||"optional",sessionTypes:n.sessionTypes||[n.sessionType||"temporary"],audioCapabilities:e.map(r=>({contentType:`audio/mp4; codecs="${r}"`,robustness:n.audioRobustness||"",encryptionScheme:n.audioEncryptionScheme||null})),videoCapabilities:t.map(r=>({contentType:`video/mp4; codecs="${r}"`,robustness:n.videoRobustness||"",encryptionScheme:n.videoEncryptionScheme||null}))}]}function bt(a,e,t){return Uint8Array.prototype.slice?a.slice(e,t):new Uint8Array(Array.prototype.slice.call(a,e,t))}const rr=(a,e)=>e+10<=a.length&&a[e]===73&&a[e+1]===68&&a[e+2]===51&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128,wa=(a,e)=>e+10<=a.length&&a[e]===51&&a[e+1]===68&&a[e+2]===73&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128,pn=(a,e)=>{const t=e;let n=0;for(;rr(a,e);){n+=10;const i=ni(a,e+6);n+=i,wa(a,e+10)&&(n+=10),e+=n}if(n>0)return a.subarray(t,t+n)},ni=(a,e)=>{let t=0;return t=(a[e]&127)<<21,t|=(a[e+1]&127)<<14,t|=(a[e+2]&127)<<7,t|=a[e+3]&127,t},bc=(a,e)=>rr(a,e)&&ni(a,e+6)+10<=a.length-e,sr=a=>{const e=La(a);for(let t=0;t<e.length;t++){const n=e[t];if(ka(n))return Cc(n)}},ka=a=>a&&a.key==="PRIV"&&a.info==="com.apple.streaming.transportStreamTimestamp",vc=a=>{const e=String.fromCharCode(a[0],a[1],a[2],a[3]),t=ni(a,4),n=10;return{type:e,size:t,data:a.subarray(n,n+t)}},La=a=>{let e=0;const t=[];for(;rr(a,e);){const n=ni(a,e+6);e+=10;const i=e+n;for(;e+8<i;){const r=vc(a.subarray(e)),s=Ec(r);s&&t.push(s),e+=r.size+10}wa(a,e)&&(e+=10)}return t},Ec=a=>a.type==="PRIV"?xc(a):a.type[0]==="W"?Tc(a):Sc(a),xc=a=>{if(a.size<2)return;const e=Je(a.data,!0),t=new Uint8Array(a.data.subarray(e.length+1));return{key:a.type,info:e,data:t.buffer}},Sc=a=>{if(a.size<2)return;if(a.type==="TXXX"){let t=1;const n=Je(a.data.subarray(t),!0);t+=n.length+1;const i=Je(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=Je(a.data.subarray(1));return{key:a.type,data:e}},Tc=a=>{if(a.type==="WXXX"){if(a.size<2)return;let t=1;const n=Je(a.data.subarray(t),!0);t+=n.length+1;const i=Je(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=Je(a.data);return{key:a.type,data:e}},Cc=a=>{if(a.data.byteLength===8){const e=new Uint8Array(a.data),t=e[3]&1;let n=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return n/=45,t&&(n+=4772185884e-2),Math.round(n)}},Je=(a,e=!1)=>{const t=wc();if(t){const d=t.decode(a);if(e){const c=d.indexOf("\0");return c!==-1?d.substring(0,c):d}return d.replace(/\0/g,"")}const n=a.length;let i,r,s,o="",l=0;for(;l<n;){if(i=a[l++],i===0&&e)return o;if(i===0||i===3)continue;switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:r=a[l++],o+=String.fromCharCode((i&31)<<6|r&63);break;case 14:r=a[l++],s=a[l++],o+=String.fromCharCode((i&15)<<12|(r&63)<<6|(s&63)<<0);break}}return o};let Ei;function wc(){if(!navigator.userAgent.includes("PlayStation 4"))return!Ei&&typeof self.TextDecoder<"u"&&(Ei=new self.TextDecoder("utf-8")),Ei}const We={hexDump:function(a){let e="";for(let t=0;t<a.length;t++){let n=a[t].toString(16);n.length<2&&(n="0"+n),e+=n}return e}},Vn=Math.pow(2,32)-1,kc=[].push,Ia={video:1,audio:2,id3:3,text:4};function Ie(a){return String.fromCharCode.apply(null,a)}function Ra(a,e){const t=a[e]<<8|a[e+1];return t<0?65536+t:t}function ne(a,e){const t=Da(a,e);return t<0?4294967296+t:t}function ps(a,e){let t=ne(a,e);return t*=Math.pow(2,32),t+=ne(a,e+4),t}function Da(a,e){return a[e]<<24|a[e+1]<<16|a[e+2]<<8|a[e+3]}function xi(a,e,t){a[e]=t>>24,a[e+1]=t>>16&255,a[e+2]=t>>8&255,a[e+3]=t&255}function Lc(a){const e=a.byteLength;for(let t=0;t<e;){const n=ne(a,t);if(n>8&&a[t+4]===109&&a[t+5]===111&&a[t+6]===111&&a[t+7]===102)return!0;t=n>1?t+n:e}return!1}function de(a,e){const t=[];if(!e.length)return t;const n=a.byteLength;for(let i=0;i<n;){const r=ne(a,i),s=Ie(a.subarray(i+4,i+8)),o=r>1?i+r:n;if(s===e[0])if(e.length===1)t.push(a.subarray(i+8,o));else{const l=de(a.subarray(i+8,o),e.slice(1));l.length&&kc.apply(t,l)}i=o}return t}function Ic(a){const e=[],t=a[0];let n=8;const i=ne(a,n);n+=4;let r=0,s=0;t===0?(r=ne(a,n),s=ne(a,n+4),n+=8):(r=ps(a,n),s=ps(a,n+8),n+=16),n+=2;let o=a.length+s;const l=Ra(a,n);n+=2;for(let d=0;d<l;d++){let c=n;const u=ne(a,c);c+=4;const h=u&2147483647;if((u&2147483648)>>>31===1)return B.warn("SIDX has hierarchical references (not supported)"),null;const b=ne(a,c);c+=4,e.push({referenceSize:h,subsegmentDuration:b,info:{duration:b/i,start:o,end:o+h-1}}),o+=h,c+=4,n=c}return{earliestPresentationTime:r,timescale:i,version:t,referencesCount:l,references:e}}function Ba(a){const e=[],t=de(a,["moov","trak"]);for(let i=0;i<t.length;i++){const r=t[i],s=de(r,["tkhd"])[0];if(s){let o=s[0];const l=ne(s,o===0?12:20),d=de(r,["mdia","mdhd"])[0];if(d){o=d[0];const c=ne(d,o===0?12:20),u=de(r,["mdia","hdlr"])[0];if(u){const h=Ie(u.subarray(8,12)),A={soun:ge.AUDIO,vide:ge.VIDEO}[h];if(A){const b=de(r,["mdia","minf","stbl","stsd"])[0],v=Rc(b);e[l]={timescale:c,type:A},e[A]=Be({timescale:c,id:l},v)}}}}}return de(a,["moov","mvex","trex"]).forEach(i=>{const r=ne(i,4),s=e[r];s&&(s.default={duration:ne(i,12),flags:ne(i,20)})}),e}function Rc(a){const e=a.subarray(8),t=e.subarray(8+78),n=Ie(e.subarray(4,8));let i=n;const r=n==="enca"||n==="encv";if(r){const o=de(e,[n])[0].subarray(n==="enca"?28:78);de(o,["sinf"]).forEach(d=>{const c=de(d,["schm"])[0];if(c){const u=Ie(c.subarray(4,8));if(u==="cbcs"||u==="cenc"){const h=de(d,["frma"])[0];h&&(i=Ie(h))}}})}switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const s=de(t,["avcC"])[0];i+="."+wn(s[1])+wn(s[2])+wn(s[3]);break}case"mp4a":{const s=de(e,[n])[0],o=de(s.subarray(28),["esds"])[0];if(o&&o.length>12){let l=4;if(o[l++]!==3)break;l=Si(o,l),l+=2;const d=o[l++];if(d&128&&(l+=2),d&64&&(l+=o[l++]),o[l++]!==4)break;l=Si(o,l);const c=o[l++];if(c===64)i+="."+wn(c);else break;if(l+=12,o[l++]!==5)break;l=Si(o,l);const u=o[l++];let h=(u&248)>>3;h===31&&(h+=1+((u&7)<<3)+((o[l]&224)>>5)),i+="."+h}break}case"hvc1":case"hev1":{const s=de(t,["hvcC"])[0],o=s[1],l=["","A","B","C"][o>>6],d=o&31,c=ne(s,2),u=(o&32)>>5?"H":"L",h=s[12],A=s.subarray(6,12);i+="."+l+d,i+="."+c.toString(16).toUpperCase(),i+="."+u+h;let b="";for(let v=A.length;v--;){const x=A[v];(x||b)&&(b="."+x.toString(16).toUpperCase()+b)}i+=b;break}case"dvh1":case"dvhe":{const s=de(t,["dvcC"])[0],o=s[2]>>1&127,l=s[2]<<5&32|s[3]>>3&31;i+="."+Ye(o)+"."+Ye(l);break}case"vp09":{const s=de(t,["vpcC"])[0],o=s[4],l=s[5],d=s[6]>>4&15;i+="."+Ye(o)+"."+Ye(l)+"."+Ye(d);break}case"av01":{const s=de(t,["av1C"])[0],o=s[1]>>>5,l=s[1]&31,d=s[2]>>>7?"H":"M",c=(s[2]&64)>>6,u=(s[2]&32)>>5,h=o===2&&c?u?12:10:c?10:8,A=(s[2]&16)>>4,b=(s[2]&8)>>3,v=(s[2]&4)>>2,x=s[2]&3,w=1,L=1,I=1,D=0;i+="."+o+"."+Ye(l)+d+"."+Ye(h)+"."+A+"."+b+v+x+"."+Ye(w)+"."+Ye(L)+"."+Ye(I)+"."+D;break}}return{codec:i,encrypted:r}}function Si(a,e){const t=e+5;for(;a[e++]&128&&e<t;);return e}function wn(a){return("0"+a.toString(16).toUpperCase()).slice(-2)}function Ye(a){return(a<10?"0":"")+a}function Dc(a,e){if(!a||!e)return a;const t=e.keyId;return t&&e.isCommonEncryption&&de(a,["moov","trak"]).forEach(i=>{const s=de(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let o=de(s,["enca"]);const l=o.length>0;l||(o=de(s,["encv"])),o.forEach(d=>{const c=l?d.subarray(28):d.subarray(78);de(c,["sinf"]).forEach(h=>{const A=_a(h);if(A){const b=A.subarray(8,24);b.some(v=>v!==0)||(B.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${We.hexDump(b)} -> ${We.hexDump(t)}`),A.set(t,8))}})})}),a}function _a(a){const e=de(a,["schm"])[0];if(e){const t=Ie(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return de(a,["schi","tenc"])[0]}return B.error("[eme] missing 'schm' box"),null}function Bc(a,e){return de(e,["moof","traf"]).reduce((t,n)=>{const i=de(n,["tfdt"])[0],r=i[0],s=de(n,["tfhd"]).reduce((o,l)=>{const d=ne(l,4),c=a[d];if(c){let u=ne(i,4);if(r===1){if(u===Vn)return B.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),o;u*=Vn+1,u+=ne(i,8)}const h=c.timescale||9e4,A=u/h;if(J(A)&&(o===null||A<o))return A}return o},null);return s!==null&&J(s)&&(t===null||s<t)?s:t},null)}function _c(a,e){let t=0,n=0,i=0;const r=de(a,["moof","traf"]);for(let s=0;s<r.length;s++){const o=r[s],l=de(o,["tfhd"])[0],d=ne(l,4),c=e[d];if(!c)continue;const u=c.default,h=ne(l,0)|(u==null?void 0:u.flags);let A=u==null?void 0:u.duration;h&8&&(h&2?A=ne(l,12):A=ne(l,8));const b=c.timescale||9e4,v=de(o,["trun"]);for(let x=0;x<v.length;x++){if(t=Pc(v[x]),!t&&A){const w=ne(v[x],4);t=A*w}c.type===ge.VIDEO?n+=t/b:c.type===ge.AUDIO&&(i+=t/b)}}if(n===0&&i===0){let s=1/0,o=0,l=0;const d=de(a,["sidx"]);for(let c=0;c<d.length;c++){const u=Ic(d[c]);if(u!=null&&u.references){s=Math.min(s,u.earliestPresentationTime/u.timescale);const h=u.references.reduce((A,b)=>A+b.info.duration||0,0);o=Math.max(o,h+u.earliestPresentationTime/u.timescale),l=o-s}}if(l&&J(l))return l}return n||i}function Pc(a){const e=ne(a,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let n=0;const i=ne(a,4);for(let r=0;r<i;r++){if(e&256){const s=ne(a,t);n+=s,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return n}function Oc(a,e,t){de(e,["moof","traf"]).forEach(n=>{de(n,["tfhd"]).forEach(i=>{const r=ne(i,4),s=a[r];if(!s)return;const o=s.timescale||9e4;de(n,["tfdt"]).forEach(l=>{const d=l[0],c=t*o;if(c){let u=ne(l,4);if(d===0)u-=c,u=Math.max(u,0),xi(l,4,u);else{u*=Math.pow(2,32),u+=ne(l,8),u-=c,u=Math.max(u,0);const h=Math.floor(u/(Vn+1)),A=Math.floor(u%(Vn+1));xi(l,4,h),xi(l,8,A)}}})})})}function Fc(a){const e={valid:null,remainder:null},t=de(a,["moof"]);if(t.length<2)return e.remainder=a,e;const n=t[t.length-1];return e.valid=bt(a,0,n.byteOffset-8),e.remainder=bt(a,n.byteOffset-8),e}function Ge(a,e){const t=new Uint8Array(a.length+e.length);return t.set(a),t.set(e,a.length),t}function ms(a,e){const t=[],n=e.samples,i=e.timescale,r=e.id;let s=!1;return de(n,["moof"]).map(l=>{const d=l.byteOffset-8;de(l,["traf"]).map(u=>{const h=de(u,["tfdt"]).map(A=>{const b=A[0];let v=ne(A,4);return b===1&&(v*=Math.pow(2,32),v+=ne(A,8)),v/i})[0];return h!==void 0&&(a=h),de(u,["tfhd"]).map(A=>{const b=ne(A,4),v=ne(A,0)&16777215,x=(v&1)!==0,w=(v&2)!==0,L=(v&8)!==0;let I=0;const D=(v&16)!==0;let R=0;const $=(v&32)!==0;let F=8;b===r&&(x&&(F+=8),w&&(F+=4),L&&(I=ne(A,F),F+=4),D&&(R=ne(A,F),F+=4),$&&(F+=4),e.type==="video"&&(s=Mc(e.codec)),de(u,["trun"]).map(H=>{const Y=H[0],M=ne(H,0)&16777215,q=(M&1)!==0;let ae=0;const j=(M&4)!==0,se=(M&256)!==0;let oe=0;const te=(M&512)!==0;let he=0;const pe=(M&1024)!==0,G=(M&2048)!==0;let X=0;const ue=ne(H,4);let ce=8;q&&(ae=ne(H,ce),ce+=4),j&&(ce+=4);let me=ae+d;for(let Ee=0;Ee<ue;Ee++){if(se?(oe=ne(H,ce),ce+=4):oe=I,te?(he=ne(H,ce),ce+=4):he=R,pe&&(ce+=4),G&&(Y===0?X=ne(H,ce):X=Da(H,ce),ce+=4),e.type===ge.VIDEO){let Te=0;for(;Te<he;){const be=ne(n,me);if(me+=4,Nc(s,n[me])){const _e=n.subarray(me,me+be);Pa(_e,s?2:1,a+X/i,t)}me+=be,Te+=be+4}}a+=oe/i}}))})})}),t}function Mc(a){if(!a)return!1;const e=a.indexOf("."),t=e<0?a:a.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function Nc(a,e){if(a){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function Pa(a,e,t,n){const i=Oa(a);let r=0;r+=e;let s=0,o=0,l=0;for(;r<i.length;){s=0;do{if(r>=i.length)break;l=i[r++],s+=l}while(l===255);o=0;do{if(r>=i.length)break;l=i[r++],o+=l}while(l===255);const d=i.length-r;let c=r;if(o<d)r+=o;else if(o>d){B.error(`Malformed SEI payload. ${o} is too small, only ${d} bytes left to parse.`);break}if(s===4){if(i[c++]===181){const h=Ra(i,c);if(c+=2,h===49){const A=ne(i,c);if(c+=4,A===1195456820){const b=i[c++];if(b===3){const v=i[c++],x=31&v,w=64&v,L=w?2+x*3:0,I=new Uint8Array(L);if(w){I[0]=v;for(let D=1;D<L;D++)I[D]=i[c++]}n.push({type:b,payloadType:s,pts:t,bytes:I})}}}}}else if(s===5&&o>16){const u=[];for(let b=0;b<16;b++){const v=i[c++].toString(16);u.push(v.length==1?"0"+v:v),(b===3||b===5||b===7||b===9)&&u.push("-")}const h=o-16,A=new Uint8Array(h);for(let b=0;b<h;b++)A[b]=i[c++];n.push({payloadType:s,pts:t,uuid:u.join(""),userData:Je(A),userDataBytes:A})}}}function Oa(a){const e=a.byteLength,t=[];let n=1;for(;n<e-2;)a[n]===0&&a[n+1]===0&&a[n+2]===3?(t.push(n+2),n+=2):n++;if(t.length===0)return a;const i=e-t.length,r=new Uint8Array(i);let s=0;for(n=0;n<i;s++,n++)s===t[0]&&(s++,t.shift()),r[n]=a[s];return r}function Uc(a){const e=a[0];let t="",n="",i=0,r=0,s=0,o=0,l=0,d=0;if(e===0){for(;Ie(a.subarray(d,d+1))!=="\0";)t+=Ie(a.subarray(d,d+1)),d+=1;for(t+=Ie(a.subarray(d,d+1)),d+=1;Ie(a.subarray(d,d+1))!=="\0";)n+=Ie(a.subarray(d,d+1)),d+=1;n+=Ie(a.subarray(d,d+1)),d+=1,i=ne(a,12),r=ne(a,16),o=ne(a,20),l=ne(a,24),d=28}else if(e===1){d+=4,i=ne(a,d),d+=4;const u=ne(a,d);d+=4;const h=ne(a,d);for(d+=4,s=2**32*u+h,nc(s)||(s=Number.MAX_SAFE_INTEGER,B.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),o=ne(a,d),d+=4,l=ne(a,d),d+=4;Ie(a.subarray(d,d+1))!=="\0";)t+=Ie(a.subarray(d,d+1)),d+=1;for(t+=Ie(a.subarray(d,d+1)),d+=1;Ie(a.subarray(d,d+1))!=="\0";)n+=Ie(a.subarray(d,d+1)),d+=1;n+=Ie(a.subarray(d,d+1)),d+=1}const c=a.subarray(d,a.byteLength);return{schemeIdUri:t,value:n,timeScale:i,presentationTime:s,presentationTimeDelta:r,eventDuration:o,id:l,payload:c}}function $c(a,...e){const t=e.length;let n=8,i=t;for(;i--;)n+=e[i].byteLength;const r=new Uint8Array(n);for(r[0]=n>>24&255,r[1]=n>>16&255,r[2]=n>>8&255,r[3]=n&255,r.set(a,4),i=0,n=8;i<t;i++)r.set(e[i],n),n+=e[i].byteLength;return r}function Gc(a,e,t){if(a.byteLength!==16)throw new RangeError("Invalid system id");let n,i;if(e){n=1,i=new Uint8Array(e.length*16);for(let o=0;o<e.length;o++){const l=e[o];if(l.byteLength!==16)throw new RangeError("Invalid key");i.set(l,o*16)}}else n=0,i=new Uint8Array;let r;n>0?(r=new Uint8Array(4),e.length>0&&new DataView(r.buffer).setUint32(0,e.length,!1)):r=new Uint8Array;const s=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(s.buffer).setUint32(0,t.byteLength,!1),$c([112,115,115,104],new Uint8Array([n,0,0,0]),a,r,i,s,t||new Uint8Array)}function Kc(a){if(!(a instanceof ArrayBuffer)||a.byteLength<32)return null;const e={version:0,systemId:"",kids:null,data:null},t=new DataView(a),n=t.getUint32(0);if(a.byteLength!==n&&n>44||t.getUint32(4)!==1886614376||(e.version=t.getUint32(8)>>>24,e.version>1))return null;e.systemId=We.hexDump(new Uint8Array(a,12,16));const r=t.getUint32(28);if(e.version===0){if(n-32<r)return null;e.data=new Uint8Array(a,32,r)}else if(e.version===1){e.kids=[];for(let s=0;s<r;s++)e.kids.push(new Uint8Array(a,32+s*16,16))}return e}let kn={};class mn{static clearKeyUriToKeyIdMap(){kn={}}constructor(e,t,n,i=[1],r=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=n,this.keyFormatVersions=i,this.iv=r,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case Me.FAIRPLAY:case Me.WIDEVINE:case Me.PLAYREADY:case Me.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&B.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const n=Hc(e);return new mn(this.method,this.uri,"identity",this.keyFormatVersions,n)}const t=mc(this.uri);if(t)switch(this.keyFormat){case Me.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case Me.PLAYREADY:{const n=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=Gc(n,null,t);const i=new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2),r=String.fromCharCode.apply(null,Array.from(i)),s=r.substring(r.indexOf("<"),r.length),d=new DOMParser().parseFromString(s,"text/xml").getElementsByTagName("KID")[0];if(d){const c=d.childNodes[0]?d.childNodes[0].nodeValue:d.getAttribute("VALUE");if(c){const u=ir(c).subarray(0,16);pc(u),this.keyId=u}}break}default:{let n=t.subarray(0,16);if(n.length!==16){const i=new Uint8Array(16);i.set(n,16-n.length),n=i}this.keyId=n;break}}if(!this.keyId||this.keyId.byteLength!==16){let n=kn[this.uri];if(!n){const i=Object.keys(kn).length%Number.MAX_SAFE_INTEGER;n=new Uint8Array(16),new DataView(n.buffer,12,4).setUint32(0,i),kn[this.uri]=n}this.keyId=n}return this}}function Hc(a){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=a>>8*(15-t)&255;return e}const Fa=/\{\$([a-zA-Z0-9-_]+)\}/g;function gs(a){return Fa.test(a)}function Fe(a,e,t){if(a.variableList!==null||a.hasVariableRefs)for(let n=t.length;n--;){const i=t[n],r=e[i];r&&(e[i]=Hi(a,r))}}function Hi(a,e){if(a.variableList!==null||a.hasVariableRefs){const t=a.variableList;return e.replace(Fa,n=>{const i=n.substring(2,n.length-1),r=t==null?void 0:t[i];return r===void 0?(a.playlistParsingError||(a.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),n):r})}return e}function ys(a,e,t){let n=a.variableList;n||(a.variableList=n={});let i,r;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const s=new self.URL(t).searchParams;if(s.has(i))r=s.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(s){a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${s.message}`))}}else i=e.NAME,r=e.VALUE;i in n?a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):n[i]=r||""}function qc(a,e,t){const n=e.IMPORT;if(t&&n in t){let i=a.variableList;i||(a.variableList=i={}),i[n]=t[n]}else a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${n}"`))}function vt(a=!0){return typeof self>"u"?void 0:(a||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}function Vc(a){return typeof self<"u"&&a===self.ManagedMediaSource}const zn={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function zc(a,e){const t=zn[e];return!!t&&!!t[a.slice(0,4)]}function Ti(a,e,t=!0){return!a.split(",").some(n=>!Ma(n,e,t))}function Ma(a,e,t=!0){var n;const i=vt(t);return(n=i==null?void 0:i.isTypeSupported(gn(a,e)))!=null?n:!1}function gn(a,e){return`${e}/mp4;codecs="${a}"`}function As(a){if(a){const e=a.substring(0,4);return zn.video[e]}return 2}function Yn(a){return a.split(",").reduce((e,t)=>{const n=zn.video[t];return n?(n*2+e)/(e?3:2):(zn.audio[t]+e)/(e?2:1)},0)}const Ci={};function Yc(a,e=!0){if(Ci[a])return Ci[a];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"]}[a];for(let n=0;n<t.length;n++)if(Ma(t[n],"audio",e))return Ci[a]=t[n],t[n];return a}const Wc=/flac|opus/i;function Wn(a,e=!0){return a.replace(Wc,t=>Yc(t.toLowerCase(),e))}function bs(a,e){return a&&a!=="mp4a"?a:e&&e.split(",")[0]}function jc(a){const e=a.split(".");if(e.length>2){let t=e.shift()+".";return t+=parseInt(e.shift()).toString(16),t+=("000"+parseInt(e.shift()).toString(16)).slice(-4),t}return a}const vs=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Es=/#EXT-X-MEDIA:(.*)/g,Qc=/^#EXT(?:INF|-X-TARGETDURATION):/m,xs=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),Xc=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class Xe{static findGroup(e,t){for(let n=0;n<e.length;n++){const i=e[n];if(i.id===t)return i}}static resolve(e,t){return nr.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return Qc.test(e)}static parseMasterPlaylist(e,t){const n=gs(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:n},r=[];vs.lastIndex=0;let s;for(;(s=vs.exec(e))!=null;)if(s[1]){var o;const d=new Se(s[1]);Fe(i,d,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const c=Hi(i,s[2]),u={attrs:d,bitrate:d.decimalInteger("BANDWIDTH")||d.decimalInteger("AVERAGE-BANDWIDTH"),name:d.NAME,url:Xe.resolve(c,t)},h=d.decimalResolution("RESOLUTION");h&&(u.width=h.width,u.height=h.height),Zc(d.CODECS,u),(o=u.unknownCodecs)!=null&&o.length||r.push(u),i.levels.push(u)}else if(s[3]){const d=s[3],c=s[4];switch(d){case"SESSION-DATA":{const u=new Se(c);Fe(i,u,["DATA-ID","LANGUAGE","VALUE","URI"]);const h=u["DATA-ID"];h&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[h]=u);break}case"SESSION-KEY":{const u=Ss(c,t,i);u.encrypted&&u.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(u)):B.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${c}"`);break}case"DEFINE":{{const u=new Se(c);Fe(i,u,["NAME","VALUE","QUERYPARAM"]),ys(i,u,t)}break}case"CONTENT-STEERING":{const u=new Se(c);Fe(i,u,["SERVER-URI","PATHWAY-ID"]),i.contentSteering={uri:Xe.resolve(u["SERVER-URI"],t),pathwayId:u["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=Ts(c);break}}}const l=r.length>0&&r.length<i.levels.length;return i.levels=l?r:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,n){let i;const r={},s=n.levels,o={AUDIO:s.map(d=>({id:d.attrs.AUDIO,audioCodec:d.audioCodec})),SUBTITLES:s.map(d=>({id:d.attrs.SUBTITLES,textCodec:d.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(Es.lastIndex=0;(i=Es.exec(e))!==null;){const d=new Se(i[1]),c=d.TYPE;if(c){const u=o[c],h=r[c]||[];r[c]=h,Fe(n,d,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const A=d.LANGUAGE,b=d["ASSOC-LANGUAGE"],v=d.CHANNELS,x=d.CHARACTERISTICS,w=d["INSTREAM-ID"],L={attrs:d,bitrate:0,id:l++,groupId:d["GROUP-ID"]||"",name:d.NAME||A||"",type:c,default:d.bool("DEFAULT"),autoselect:d.bool("AUTOSELECT"),forced:d.bool("FORCED"),lang:A,url:d.URI?Xe.resolve(d.URI,t):""};if(b&&(L.assocLang=b),v&&(L.channels=v),x&&(L.characteristics=x),w&&(L.instreamId=w),u!=null&&u.length){const I=Xe.findGroup(u,L.groupId)||u[0];Cs(L,I,"audioCodec"),Cs(L,I,"textCodec")}h.push(L)}}return r}static parseLevelPlaylist(e,t,n,i,r,s){const o=new hc(t),l=o.fragments;let d=null,c=0,u=0,h=0,A=0,b=null,v=new bi(i,t),x,w,L,I=-1,D=!1,R=null;for(xs.lastIndex=0,o.m3u8=e,o.hasVariableRefs=gs(e);(x=xs.exec(e))!==null;){D&&(D=!1,v=new bi(i,t),v.start=h,v.sn=c,v.cc=A,v.level=n,d&&(v.initSegment=d,v.rawProgramDateTime=d.rawProgramDateTime,d.rawProgramDateTime=null,R&&(v.setByteRange(R),R=null)));const Y=x[1];if(Y){v.duration=parseFloat(Y);const M=(" "+x[2]).slice(1);v.title=M||null,v.tagList.push(M?["INF",Y,M]:["INF",Y])}else if(x[3]){if(J(v.duration)){v.start=h,L&&Ls(v,L,o),v.sn=c,v.level=n,v.cc=A,l.push(v);const M=(" "+x[3]).slice(1);v.relurl=Hi(o,M),ws(v,b),b=v,h+=v.duration,c++,u=0,D=!0}}else if(x[4]){const M=(" "+x[4]).slice(1);b?v.setByteRange(M,b):v.setByteRange(M)}else if(x[5])v.rawProgramDateTime=(" "+x[5]).slice(1),v.tagList.push(["PROGRAM-DATE-TIME",v.rawProgramDateTime]),I===-1&&(I=l.length);else{if(x=x[0].match(Xc),!x){B.warn("No matches on slow regex match for level playlist!");continue}for(w=1;w<x.length&&!(typeof x[w]<"u");w++);const M=(" "+x[w]).slice(1),q=(" "+x[w+1]).slice(1),ae=x[w+2]?(" "+x[w+2]).slice(1):"";switch(M){case"PLAYLIST-TYPE":o.type=q.toUpperCase();break;case"MEDIA-SEQUENCE":c=o.startSN=parseInt(q);break;case"SKIP":{const j=new Se(q);Fe(o,j,["RECENTLY-REMOVED-DATERANGES"]);const se=j.decimalInteger("SKIPPED-SEGMENTS");if(J(se)){o.skippedSegments=se;for(let te=se;te--;)l.unshift(null);c+=se}const oe=j.enumeratedString("RECENTLY-REMOVED-DATERANGES");oe&&(o.recentlyRemovedDateranges=oe.split("	"));break}case"TARGETDURATION":o.targetduration=Math.max(parseInt(q),1);break;case"VERSION":o.version=parseInt(q);break;case"INDEPENDENT-SEGMENTS":case"EXTM3U":break;case"ENDLIST":o.live=!1;break;case"#":(q||ae)&&v.tagList.push(ae?[q,ae]:[q]);break;case"DISCONTINUITY":A++,v.tagList.push(["DIS"]);break;case"GAP":v.gap=!0,v.tagList.push([M]);break;case"BITRATE":v.tagList.push([M,q]);break;case"DATERANGE":{const j=new Se(q);Fe(o,j,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),Fe(o,j,j.clientAttrs);const se=new xa(j,o.dateRanges[j.ID]);se.isValid||o.skippedSegments?o.dateRanges[se.id]=se:B.warn(`Ignoring invalid DATERANGE tag: "${q}"`),v.tagList.push(["EXT-X-DATERANGE",q]);break}case"DEFINE":{{const j=new Se(q);Fe(o,j,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in j?qc(o,j,s):ys(o,j,t)}break}case"DISCONTINUITY-SEQUENCE":A=parseInt(q);break;case"KEY":{const j=Ss(q,t,o);if(j.isSupported()){if(j.method==="NONE"){L=void 0;break}L||(L={}),L[j.keyFormat]&&(L=we({},L)),L[j.keyFormat]=j}else B.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${q}"`);break}case"START":o.startTimeOffset=Ts(q);break;case"MAP":{const j=new Se(q);if(Fe(o,j,["BYTERANGE","URI"]),v.duration){const se=new bi(i,t);ks(se,j,n,L),d=se,v.initSegment=d,d.rawProgramDateTime&&!v.rawProgramDateTime&&(v.rawProgramDateTime=d.rawProgramDateTime)}else{const se=v.byteRangeEndOffset;if(se){const oe=v.byteRangeStartOffset;R=`${se-oe}@${oe}`}else R=null;ks(v,j,n,L),d=v,D=!0}break}case"SERVER-CONTROL":{const j=new Se(q);o.canBlockReload=j.bool("CAN-BLOCK-RELOAD"),o.canSkipUntil=j.optionalFloat("CAN-SKIP-UNTIL",0),o.canSkipDateRanges=o.canSkipUntil>0&&j.bool("CAN-SKIP-DATERANGES"),o.partHoldBack=j.optionalFloat("PART-HOLD-BACK",0),o.holdBack=j.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const j=new Se(q);o.partTarget=j.decimalFloatingPoint("PART-TARGET");break}case"PART":{let j=o.partList;j||(j=o.partList=[]);const se=u>0?j[j.length-1]:void 0,oe=u++,te=new Se(q);Fe(o,te,["BYTERANGE","URI"]);const he=new cc(te,v,t,oe,se);j.push(he),v.duration+=he.duration;break}case"PRELOAD-HINT":{const j=new Se(q);Fe(o,j,["URI"]),o.preloadHint=j;break}case"RENDITION-REPORT":{const j=new Se(q);Fe(o,j,["URI"]),o.renditionReports=o.renditionReports||[],o.renditionReports.push(j);break}default:B.warn(`line parsed but not handled: ${x}`);break}}}b&&!b.relurl?(l.pop(),h-=b.duration,o.partList&&(o.fragmentHint=b)):o.partList&&(ws(v,b),v.cc=A,o.fragmentHint=v,L&&Ls(v,L,o));const $=l.length,F=l[0],H=l[$-1];if(h+=o.skippedSegments*o.targetduration,h>0&&$&&H){o.averagetargetduration=h/$;const Y=H.sn;o.endSN=Y!=="initSegment"?Y:0,o.live||(H.endList=!0),F&&(o.startCC=F.cc)}else o.endSN=0,o.startCC=0;return o.fragmentHint&&(h+=o.fragmentHint.duration),o.totalduration=h,o.endCC=A,I>0&&Jc(l,I),o}}function Ss(a,e,t){var n,i;const r=new Se(a);Fe(t,r,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const s=(n=r.METHOD)!=null?n:"",o=r.URI,l=r.hexadecimalInteger("IV"),d=r.KEYFORMATVERSIONS,c=(i=r.KEYFORMAT)!=null?i:"identity";o&&r.IV&&!l&&B.error(`Invalid IV: ${r.IV}`);const u=o?Xe.resolve(o,e):"",h=(d||"1").split("/").map(Number).filter(Number.isFinite);return new mn(s,u,c,h,l)}function Ts(a){const t=new Se(a).decimalFloatingPoint("TIME-OFFSET");return J(t)?t:null}function Zc(a,e){let t=(a||"").split(/[ ,]+/).filter(n=>n);["video","audio","text"].forEach(n=>{const i=t.filter(r=>zc(r,n));i.length&&(e[`${n}Codec`]=i.join(","),t=t.filter(r=>i.indexOf(r)===-1))}),e.unknownCodecs=t}function Cs(a,e,t){const n=e[t];n&&(a[t]=n)}function Jc(a,e){let t=a[e];for(let n=e;n--;){const i=a[n];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function ws(a,e){a.rawProgramDateTime?a.programDateTime=Date.parse(a.rawProgramDateTime):e!=null&&e.programDateTime&&(a.programDateTime=e.endProgramDateTime),J(a.programDateTime)||(a.programDateTime=null,a.rawProgramDateTime=null)}function ks(a,e,t,n){a.relurl=e.URI,e.BYTERANGE&&a.setByteRange(e.BYTERANGE),a.level=t,a.sn="initSegment",n&&(a.levelkeys=n),a.initSegment=null}function Ls(a,e,t){a.levelkeys=e;const{encryptedFragments:n}=t;(!n.length||n[n.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&n.push(a)}var fe={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},ie={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function Is(a){const{type:e}=a;switch(e){case fe.AUDIO_TRACK:return ie.AUDIO;case fe.SUBTITLE_TRACK:return ie.SUBTITLE;default:return ie.MAIN}}function wi(a,e){let t=a.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class eu{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(T.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,n=t.pLoader,i=t.loader,r=n||i,s=new r(t);return this.loaders[e.type]=s,s}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:n}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:fe.MANIFEST,url:n,deliveryDirectives:null})}onLevelLoading(e,t){const{id:n,level:i,pathwayId:r,url:s,deliveryDirectives:o}=t;this.load({id:n,level:i,pathwayId:r,responseType:"text",type:fe.LEVEL,url:s,deliveryDirectives:o})}onAudioTrackLoading(e,t){const{id:n,groupId:i,url:r,deliveryDirectives:s}=t;this.load({id:n,groupId:i,level:null,responseType:"text",type:fe.AUDIO_TRACK,url:r,deliveryDirectives:s})}onSubtitleTrackLoading(e,t){const{id:n,groupId:i,url:r,deliveryDirectives:s}=t;this.load({id:n,groupId:i,level:null,responseType:"text",type:fe.SUBTITLE_TRACK,url:r,deliveryDirectives:s})}load(e){var t;const n=this.hls.config;let i=this.getInternalLoader(e);if(i){const d=i.context;if(d&&d.url===e.url&&d.level===e.level){B.trace("[playlist-loader]: playlist request ongoing");return}B.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let r;if(e.type===fe.MANIFEST?r=n.manifestLoadPolicy.default:r=we({},n.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),J((t=e.deliveryDirectives)==null?void 0:t.part)){let d;if(e.type===fe.LEVEL&&e.level!==null?d=this.hls.levels[e.level].details:e.type===fe.AUDIO_TRACK&&e.id!==null?d=this.hls.audioTracks[e.id].details:e.type===fe.SUBTITLE_TRACK&&e.id!==null&&(d=this.hls.subtitleTracks[e.id].details),d){const c=d.partTarget,u=d.targetduration;if(c&&u){const h=Math.max(c*3,u*.8)*1e3;r=we({},r,{maxTimeToFirstByteMs:Math.min(h,r.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(h,r.maxTimeToFirstByteMs)})}}}const s=r.errorRetry||r.timeoutRetry||{},o={loadPolicy:r,timeout:r.maxLoadTimeMs,maxRetry:s.maxNumRetry||0,retryDelay:s.retryDelayMs||0,maxRetryDelay:s.maxRetryDelayMs||0},l={onSuccess:(d,c,u,h)=>{const A=this.getInternalLoader(u);this.resetInternalLoader(u.type);const b=d.data;if(b.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(d,u,new Error("no EXTM3U delimiter"),h||null,c);return}c.parsing.start=performance.now(),Xe.isMediaPlaylist(b)?this.handleTrackOrLevelPlaylist(d,c,u,h||null,A):this.handleMasterPlaylist(d,c,u,h)},onError:(d,c,u,h)=>{this.handleNetworkError(c,u,!1,d,h)},onTimeout:(d,c,u)=>{this.handleNetworkError(c,u,!0,void 0,d)}};i.load(e,o,l)}handleMasterPlaylist(e,t,n,i){const r=this.hls,s=e.data,o=wi(e,n),l=Xe.parseMasterPlaylist(s,o);if(l.playlistParsingError){this.handleManifestParsingError(e,n,l.playlistParsingError,i,t);return}const{contentSteering:d,levels:c,sessionData:u,sessionKeys:h,startTimeOffset:A,variableList:b}=l;this.variableList=b;const{AUDIO:v=[],SUBTITLES:x,"CLOSED-CAPTIONS":w}=Xe.parseMasterPlaylistMedia(s,o,l);v.length&&!v.some(I=>!I.url)&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(B.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),v.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new Se({}),bitrate:0,url:""})),r.trigger(T.MANIFEST_LOADED,{levels:c,audioTracks:v,subtitles:x,captions:w,contentSteering:d,url:o,stats:t,networkDetails:i,sessionData:u,sessionKeys:h,startTimeOffset:A,variableList:b})}handleTrackOrLevelPlaylist(e,t,n,i,r){const s=this.hls,{id:o,level:l,type:d}=n,c=wi(e,n),u=0,h=J(l)?l:J(o)?o:0,A=Is(n),b=Xe.parseLevelPlaylist(e.data,c,h,A,u,this.variableList);if(d===fe.MANIFEST){const v={attrs:new Se({}),bitrate:0,details:b,name:"",url:c};s.trigger(T.MANIFEST_LOADED,{levels:[v],audioTracks:[],url:c,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),n.levelDetails=b,this.handlePlaylistLoaded(b,e,t,n,i,r)}handleManifestParsingError(e,t,n,i,r){this.hls.trigger(T.ERROR,{type:re.NETWORK_ERROR,details:O.MANIFEST_PARSING_ERROR,fatal:t.type===fe.MANIFEST,url:e.url,err:n,error:n,reason:n.message,response:e,context:t,networkDetails:i,stats:r})}handleNetworkError(e,t,n=!1,i,r){let s=`A network ${n?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===fe.LEVEL?s+=`: ${e.level} id: ${e.id}`:(e.type===fe.AUDIO_TRACK||e.type===fe.SUBTITLE_TRACK)&&(s+=` id: ${e.id} group-id: "${e.groupId}"`);const o=new Error(s);B.warn(`[playlist-loader]: ${s}`);let l=O.UNKNOWN,d=!1;const c=this.getInternalLoader(e);switch(e.type){case fe.MANIFEST:l=n?O.MANIFEST_LOAD_TIMEOUT:O.MANIFEST_LOAD_ERROR,d=!0;break;case fe.LEVEL:l=n?O.LEVEL_LOAD_TIMEOUT:O.LEVEL_LOAD_ERROR,d=!1;break;case fe.AUDIO_TRACK:l=n?O.AUDIO_TRACK_LOAD_TIMEOUT:O.AUDIO_TRACK_LOAD_ERROR,d=!1;break;case fe.SUBTITLE_TRACK:l=n?O.SUBTITLE_TRACK_LOAD_TIMEOUT:O.SUBTITLE_LOAD_ERROR,d=!1;break}c&&this.resetInternalLoader(e.type);const u={type:re.NETWORK_ERROR,details:l,fatal:d,url:e.url,loader:c,context:e,error:o,networkDetails:t,stats:r};if(i){const h=(t==null?void 0:t.url)||e.url;u.response=Be({url:h,data:void 0},i)}this.hls.trigger(T.ERROR,u)}handlePlaylistLoaded(e,t,n,i,r,s){const o=this.hls,{type:l,level:d,id:c,groupId:u,deliveryDirectives:h}=i,A=wi(t,i),b=Is(i),v=typeof i.level=="number"&&b===ie.MAIN?d:void 0;if(!e.fragments.length){const w=new Error("No Segments found in Playlist");o.trigger(T.ERROR,{type:re.NETWORK_ERROR,details:O.LEVEL_EMPTY_ERROR,fatal:!1,url:A,error:w,reason:w.message,response:t,context:i,level:v,parent:b,networkDetails:r,stats:n});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const x=e.playlistParsingError;if(x){o.trigger(T.ERROR,{type:re.NETWORK_ERROR,details:O.LEVEL_PARSING_ERROR,fatal:!1,url:A,error:x,reason:x.message,response:t,context:i,level:v,parent:b,networkDetails:r,stats:n});return}switch(e.live&&s&&(s.getCacheAge&&(e.ageHeader=s.getCacheAge()||0),(!s.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case fe.MANIFEST:case fe.LEVEL:o.trigger(T.LEVEL_LOADED,{details:e,level:v||0,id:c||0,stats:n,networkDetails:r,deliveryDirectives:h});break;case fe.AUDIO_TRACK:o.trigger(T.AUDIO_TRACK_LOADED,{details:e,id:c||0,groupId:u||"",stats:n,networkDetails:r,deliveryDirectives:h});break;case fe.SUBTITLE_TRACK:o.trigger(T.SUBTITLE_TRACK_LOADED,{details:e,id:c||0,groupId:u||"",stats:n,networkDetails:r,deliveryDirectives:h});break}}}function Na(a,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=a,e.dispatchEvent(t)}function Ua(a,e){const t=a.mode;if(t==="disabled"&&(a.mode="hidden"),a.cues&&!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(n){B.debug(`[texttrack-utils]: ${n}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,a.addCue(i)}catch(i){B.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(a.mode=t)}function _t(a){const e=a.mode;if(e==="disabled"&&(a.mode="hidden"),a.cues)for(let t=a.cues.length;t--;)a.removeCue(a.cues[t]);e==="disabled"&&(a.mode=e)}function qi(a,e,t,n){const i=a.mode;if(i==="disabled"&&(a.mode="hidden"),a.cues&&a.cues.length>0){const r=nu(a.cues,e,t);for(let s=0;s<r.length;s++)(!n||n(r[s]))&&a.removeCue(r[s])}i==="disabled"&&(a.mode=i)}function tu(a,e){if(e<a[0].startTime)return 0;const t=a.length-1;if(e>a[t].endTime)return-1;let n=0,i=t;for(;n<=i;){const r=Math.floor((i+n)/2);if(e<a[r].startTime)i=r-1;else if(e>a[r].startTime&&n<t)n=r+1;else return r}return a[n].startTime-e<e-a[i].startTime?n:i}function nu(a,e,t){const n=[],i=tu(a,e);if(i>-1)for(let r=i,s=a.length;r<s;r++){const o=a[r];if(o.startTime>=e&&o.endTime<=t)n.push(o);else if(o.startTime>t)return n}return n}function Fn(a){const e=[];for(let t=0;t<a.length;t++){const n=a[t];(n.kind==="subtitles"||n.kind==="captions")&&n.label&&e.push(a[t])}return e}var Ve={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const iu=.25;function Vi(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function Rs(a,e,t,n,i){let r=new a(e,t,"");try{r.value=n,i&&(r.type=i)}catch{r=new a(e,t,JSON.stringify(i?Be({type:i},n):n))}return r}const Ln=(()=>{const a=Vi();try{a&&new a(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function ki(a,e){return a.getTime()/1e3-e}function ru(a){return Uint8Array.from(a.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class su{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){this.id3Track&&(_t(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const n=e[t];if(n.kind==="metadata"&&n.label==="id3")return Na(n,this.media),n}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:n,enableID3MetadataCues:i}}}=this;if(!n&&!i)return;const{samples:r}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const s=Vi();if(s)for(let o=0;o<r.length;o++){const l=r[o].type;if(l===Ve.emsg&&!n||!i)continue;const d=La(r[o].data);if(d){const c=r[o].pts;let u=c+r[o].duration;u>Ln&&(u=Ln),u-c<=0&&(u=c+iu);for(let A=0;A<d.length;A++){const b=d[A];if(!ka(b)){this.updateId3CueEnds(c,l);const v=Rs(s,c,u,b,l);v&&this.id3Track.addCue(v)}}}}}updateId3CueEnds(e,t){var n;const i=(n=this.id3Track)==null?void 0:n.cues;if(i)for(let r=i.length;r--;){const s=i[r];s.type===t&&s.startTime<e&&s.endTime===Ln&&(s.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:n,type:i}){const{id3Track:r,hls:s}=this;if(!s)return;const{config:{enableEmsgMetadataCues:o,enableID3MetadataCues:l}}=s;if(r&&(o||l)){let d;i==="audio"?d=c=>c.type===Ve.audioId3&&l:i==="video"?d=c=>c.type===Ve.emsg&&o:d=c=>c.type===Ve.audioId3&&l||c.type===Ve.emsg&&o,qi(r,t,n,d)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:n,id3Track:i}=this,{dateRanges:r}=t,s=Object.keys(r);if(i){const c=Object.keys(n).filter(u=>!s.includes(u));for(let u=c.length;u--;){const h=c[u];Object.keys(n[h].cues).forEach(A=>{i.removeCue(n[h].cues[A])}),delete n[h]}}const o=t.fragments[t.fragments.length-1];if(s.length===0||!J(o==null?void 0:o.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=o.programDateTime/1e3-o.start,d=Vi();for(let c=0;c<s.length;c++){const u=s[c],h=r[u],A=ki(h.startDate,l),b=n[u],v=(b==null?void 0:b.cues)||{};let x=(b==null?void 0:b.durationKnown)||!1,w=Ln;const L=h.endDate;if(L)w=ki(L,l),x=!0;else if(h.endOnNext&&!x){const D=s.reduce((R,$)=>{if($!==h.id){const F=r[$];if(F.class===h.class&&F.startDate>h.startDate&&(!R||h.startDate<R.startDate))return F}return R},null);D&&(w=ki(D.startDate,l),x=!0)}const I=Object.keys(h.attr);for(let D=0;D<I.length;D++){const R=I[D];if(!lc(R))continue;const $=v[R];if($)x&&!b.durationKnown&&($.endTime=w);else if(d){let F=h.attr[R];dc(R)&&(F=ru(F));const H=Rs(d,A,w,{key:R,data:F},Ve.dateRange);H&&(H.id=u,this.id3Track.addCue(H),v[R]=H)}}n[u]={cues:v,dateRange:h,durationKnown:x}}}}class au{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:n,targetduration:i}=e,{liveSyncDuration:r,liveSyncDurationCount:s,lowLatencyMode:o}=this.config,l=this.hls.userConfig;let d=o&&n||t;(l.liveSyncDuration||l.liveSyncDurationCount||d===0)&&(d=r!==void 0?r:s*i);const c=i,u=1;return d+Math.min(this.stallCount*u,c)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,n=this.levelDetails;if(e===null||t===null||n===null)return null;const i=n.edge,r=e-t-this.edgeStalled,s=i-n.totalduration,o=i-(this.config.lowLatencyMode&&n.partTarget||n.targetduration);return Math.min(Math.max(s,r),o)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const n=e.buffered.length;return(n?e.buffered.end(n-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(T.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var n;t.details===O.BUFFER_STALLED_ERROR&&(this.stallCount++,(n=this.levelDetails)!=null&&n.live&&B.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const n=this.computeLatency();if(n===null)return;this._latency=n;const{lowLatencyMode:i,maxLiveSyncPlaybackRate:r}=this.config;if(!i||r===1||!t.live)return;const s=this.targetLatency;if(s===null)return;const o=n-s,l=Math.min(this.maxLatency,s+t.targetduration);if(o<l&&o>.05&&this.forwardBufferLength>1){const c=Math.min(2,Math.max(1,r)),u=Math.round(2/(1+Math.exp(-.75*o-this.edgeStalled))*20)/20;e.playbackRate=Math.min(c,Math.max(1,u))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const zi=["NONE","TYPE-0","TYPE-1",null];function ou(a){return zi.indexOf(a)>-1}const jn=["SDR","PQ","HLG"];function lu(a){return!!a&&jn.indexOf(a)>-1}var Mn={No:"",Yes:"YES",v2:"v2"};function Ds(a){const{canSkipUntil:e,canSkipDateRanges:t,age:n}=a,i=n<e/2;return e&&i?t?Mn.v2:Mn.Yes:Mn.No}class Bs{constructor(e,t,n){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=n}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class Mt{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>!!t).map(t=>t.substring(0,4)).join(","),this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return _s(this._audioGroups,e)}hasSubtitleGroup(e){return _s(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let n=this._audioGroups;n||(n=this._audioGroups=[]),n.indexOf(t)===-1&&n.push(t)}else if(e==="text"){let n=this._subtitleGroups;n||(n=this._subtitleGroups=[]),n.indexOf(t)===-1&&n.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function _s(a,e){return!e||!a?!1:a.indexOf(e)!==-1}function Li(a,e){const t=e.startPTS;if(J(t)){let n=0,i;e.sn>a.sn?(n=t-a.start,i=a):(n=a.start-t,i=e),i.duration!==n&&(i.duration=n)}else e.sn>a.sn?a.cc===e.cc&&a.minEndPTS?e.start=a.start+(a.minEndPTS-a.start):e.start=a.start+a.duration:e.start=Math.max(a.start-e.duration,0)}function $a(a,e,t,n,i,r){n-t<=0&&(B.warn("Fragment should have a positive duration",e),n=t+e.duration,r=i+e.duration);let o=t,l=n;const d=e.startPTS,c=e.endPTS;if(J(d)){const x=Math.abs(d-t);J(e.deltaPTS)?e.deltaPTS=Math.max(x,e.deltaPTS):e.deltaPTS=x,o=Math.max(t,d),t=Math.min(t,d),i=Math.min(i,e.startDTS),l=Math.min(n,c),n=Math.max(n,c),r=Math.max(r,e.endDTS)}const u=t-e.start;e.start!==0&&(e.start=t),e.duration=n-e.start,e.startPTS=t,e.maxStartPTS=o,e.startDTS=i,e.endPTS=n,e.minEndPTS=l,e.endDTS=r;const h=e.sn;if(!a||h<a.startSN||h>a.endSN)return 0;let A;const b=h-a.startSN,v=a.fragments;for(v[b]=e,A=b;A>0;A--)Li(v[A],v[A-1]);for(A=b;A<v.length-1;A++)Li(v[A],v[A+1]);return a.fragmentHint&&Li(v[v.length-1],a.fragmentHint),a.PTSKnown=a.alignedSliding=!0,u}function du(a,e){let t=null;const n=a.fragments;for(let l=n.length-1;l>=0;l--){const d=n[l].initSegment;if(d){t=d;break}}a.fragmentHint&&delete a.fragmentHint.endPTS;let i=0,r;if(hu(a,e,(l,d)=>{l.relurl&&(i=l.cc-d.cc),J(l.startPTS)&&J(l.endPTS)&&(d.start=d.startPTS=l.startPTS,d.startDTS=l.startDTS,d.maxStartPTS=l.maxStartPTS,d.endPTS=l.endPTS,d.endDTS=l.endDTS,d.minEndPTS=l.minEndPTS,d.duration=l.endPTS-l.startPTS,d.duration&&(r=d),e.PTSKnown=e.alignedSliding=!0),d.elementaryStreams=l.elementaryStreams,d.loader=l.loader,d.stats=l.stats,l.initSegment&&(d.initSegment=l.initSegment,t=l.initSegment)}),t&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach(d=>{var c;d&&(!d.initSegment||d.initSegment.relurl===((c=t)==null?void 0:c.relurl))&&(d.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some(l=>!l),e.deltaUpdateFailed){B.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=cu(a.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));const s=e.fragments;if(i){B.warn("discontinuity sliding from playlist, take drift into account");for(let l=0;l<s.length;l++)s[l].cc+=i}e.skippedSegments&&(e.startCC=e.fragments[0].cc),uu(a.partList,e.partList,(l,d)=>{d.elementaryStreams=l.elementaryStreams,d.stats=l.stats}),r?$a(e,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS):Ga(a,e),s.length&&(e.totalduration=e.edge-s[0].start),e.driftStartTime=a.driftStartTime,e.driftStart=a.driftStart;const o=e.advancedDateTime;if(e.advanced&&o){const l=e.edge;e.driftStart||(e.driftStartTime=o,e.driftStart=l),e.driftEndTime=o,e.driftEnd=l}else e.driftEndTime=a.driftEndTime,e.driftEnd=a.driftEnd,e.advancedDateTime=a.advancedDateTime}function cu(a,e,t){const n=we({},a);return t&&t.forEach(i=>{delete n[i]}),Object.keys(e).forEach(i=>{const r=new xa(e[i].attr,n[i]);r.isValid?n[i]=r:B.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`)}),n}function uu(a,e,t){if(a&&e){let n=0;for(let i=0,r=a.length;i<=r;i++){const s=a[i],o=e[i+n];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?t(s,o):n--}}}function hu(a,e,t){const n=e.skippedSegments,i=Math.max(a.startSN,e.startSN)-e.startSN,r=(a.fragmentHint?1:0)+(n?e.endSN:Math.min(a.endSN,e.endSN))-e.startSN,s=e.startSN-a.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=a.fragmentHint?a.fragments.concat(a.fragmentHint):a.fragments;for(let d=i;d<=r;d++){const c=l[s+d];let u=o[d];n&&!u&&d<n&&(u=e.fragments[d]=c),c&&u&&t(c,u)}}function Ga(a,e){const t=e.startSN+e.skippedSegments-a.startSN,n=a.fragments;t<0||t>=n.length||Yi(e,n[t].start)}function Yi(a,e){if(e){const t=a.fragments;for(let n=a.skippedSegments;n<t.length;n++)t[n].start+=e;a.fragmentHint&&(a.fragmentHint.start+=e)}}function fu(a,e=1/0){let t=1e3*a.targetduration;if(a.updated){const n=a.fragments,i=4;if(n.length&&t*i>e){const r=n[n.length-1].duration*1e3;r<t&&(t=r)}}else t/=2;return Math.round(t)}function pu(a,e,t){if(!(a!=null&&a.details))return null;const n=a.details;let i=n.fragments[e-n.startSN];return i||(i=n.fragmentHint,i&&i.sn===e)?i:e<n.startSN&&t&&t.sn===e?t:null}function Ps(a,e,t){var n;return a!=null&&a.details?Ka((n=a.details)==null?void 0:n.partList,e,t):null}function Ka(a,e,t){if(a)for(let n=a.length;n--;){const i=a[n];if(i.index===t&&i.fragment.sn===e)return i}return null}function Ha(a){a.forEach((e,t)=>{const{details:n}=e;n!=null&&n.fragments&&n.fragments.forEach(i=>{i.level=t})})}function Qn(a){switch(a.details){case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_TIMEOUT:case O.LEVEL_LOAD_TIMEOUT:case O.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function Os(a,e){const t=Qn(e);return a.default[`${t?"timeout":"error"}Retry`]}function ar(a,e){const t=a.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*a.retryDelayMs,a.maxRetryDelayMs)}function Fs(a){return Be(Be({},a),{errorRetry:null,timeoutRetry:null})}function Xn(a,e,t,n){if(!a)return!1;const i=n==null?void 0:n.code,r=e<a.maxNumRetry&&(mu(i)||!!t);return a.shouldRetry?a.shouldRetry(a,e,t,n,r):r}function mu(a){return a===0&&navigator.onLine===!1||!!a&&(a<400||a>499)}const qa={search:function(a,e){let t=0,n=a.length-1,i=null,r=null;for(;t<=n;){i=(t+n)/2|0,r=a[i];const s=e(r);if(s>0)t=i+1;else if(s<0)n=i-1;else return r}return null}};function gu(a,e,t){if(e===null||!Array.isArray(a)||!a.length||!J(e))return null;const n=a[0].programDateTime;if(e<(n||0))return null;const i=a[a.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let r=0;r<a.length;++r){const s=a[r];if(yu(e,t,s))return s}return null}function Zn(a,e,t=0,n=0){let i=null;if(a){i=e[a.sn-e[0].sn+1]||null;const s=a.endDTS-t;s>0&&s<15e-7&&(t+=15e-7)}else t===0&&e[0].start===0&&(i=e[0]);if(i&&(!a||a.level===i.level)&&Wi(t,n,i)===0)return i;const r=qa.search(e,Wi.bind(null,t,n));return r&&(r!==a||!i)?r:i}function Wi(a=0,e=0,t){if(t.start<=a&&t.start+t.duration>a)return 0;const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-n<=a?1:t.start-n>a&&t.start?-1:0}function yu(a,e,t){const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-n>a}function Au(a,e){return qa.search(a,t=>t.cc<e?1:t.cc>e?-1:0)}var Pe={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},He={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class bu{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=B.log.bind(B,"[info]:"),this.warn=B.warn.bind(B,"[warning]:"),this.error=B.error.bind(B,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.ERROR,this.onError,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.ERROR,this.onError,this),e.off(T.ERROR,this.onErrorOut,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===ie.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var n,i;if(t.fatal)return;const r=this.hls,s=t.context;switch(t.details){case O.FRAG_LOAD_ERROR:case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_ERROR:case O.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case O.FRAG_PARSING_ERROR:if((n=t.frag)!=null&&n.gap){t.errorAction={action:Pe.DoNothing,flags:He.None};return}case O.FRAG_GAP:case O.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=Pe.SendAlternateToPenaltyBox;return}case O.LEVEL_EMPTY_ERROR:case O.LEVEL_PARSING_ERROR:{var o,l;const d=t.parent===ie.MAIN?t.level:r.loadLevel;t.details===O.LEVEL_EMPTY_ERROR&&((o=t.context)!=null&&(l=o.levelDetails)!=null&&l.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,d):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,d))}return;case O.LEVEL_LOAD_ERROR:case O.LEVEL_LOAD_TIMEOUT:typeof(s==null?void 0:s.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,s.level));return;case O.AUDIO_TRACK_LOAD_ERROR:case O.AUDIO_TRACK_LOAD_TIMEOUT:case O.SUBTITLE_LOAD_ERROR:case O.SUBTITLE_TRACK_LOAD_TIMEOUT:if(s){const d=r.levels[r.loadLevel];if(d&&(s.type===fe.AUDIO_TRACK&&d.hasAudioGroup(s.groupId)||s.type===fe.SUBTITLE_TRACK&&d.hasSubtitleGroup(s.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,r.loadLevel),t.errorAction.action=Pe.SendAlternateToPenaltyBox,t.errorAction.flags=He.MoveAllAlternatesMatchingHost;return}}return;case O.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const d=r.levels[r.loadLevel],c=d==null?void 0:d.attrs["HDCP-LEVEL"];c?t.errorAction={action:Pe.SendAlternateToPenaltyBox,flags:He.MoveAllAlternatesMatchingHDCP,hdcpLevel:c}:this.keySystemError(t)}return;case O.BUFFER_ADD_CODEC_ERROR:case O.REMUX_ALLOC_ERROR:case O.BUFFER_APPEND_ERROR:t.errorAction=this.getLevelSwitchAction(t,(i=t.level)!=null?i:r.loadLevel);return;case O.INTERNAL_EXCEPTION:case O.BUFFER_APPENDING_ERROR:case O.BUFFER_FULL_ERROR:case O.LEVEL_SWITCH_ERROR:case O.BUFFER_STALLED_ERROR:case O.BUFFER_SEEK_OVER_HOLE:case O.BUFFER_NUDGE_ON_STALL:t.errorAction={action:Pe.DoNothing,flags:He.None};return}t.type===re.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const n=this.hls,i=Os(n.config.playlistLoadPolicy,e),r=this.playlistError++;if(Xn(i,r,Qn(e),e.response))return{action:Pe.RetryRequest,flags:He.None,retryConfig:i,retryCount:r};const o=this.getLevelSwitchAction(e,t);return i&&(o.retryConfig=i,o.retryCount=r),o}getFragRetryOrSwitchAction(e){const t=this.hls,n=this.getVariantLevelIndex(e.frag),i=t.levels[n],{fragLoadPolicy:r,keyLoadPolicy:s}=t.config,o=Os(e.details.startsWith("key")?s:r,e),l=t.levels.reduce((c,u)=>c+u.fragmentError,0);if(i&&(e.details!==O.FRAG_GAP&&i.fragmentError++,Xn(o,l,Qn(e),e.response)))return{action:Pe.RetryRequest,flags:He.None,retryConfig:o,retryCount:l};const d=this.getLevelSwitchAction(e,n);return o&&(d.retryConfig=o,d.retryCount=l),d}getLevelSwitchAction(e,t){const n=this.hls;t==null&&(t=n.loadLevel);const i=this.hls.levels[t];if(i){var r,s;const d=e.details;i.loadError++,d===O.BUFFER_APPEND_ERROR&&i.fragmentError++;let c=-1;const{levels:u,loadLevel:h,minAutoLevel:A,maxAutoLevel:b}=n;n.autoLevelEnabled||(n.loadLevel=-1);const v=(r=e.frag)==null?void 0:r.type,w=(v===ie.AUDIO&&d===O.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(d===O.BUFFER_ADD_CODEC_ERROR||d===O.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:$})=>i.audioCodec!==$),I=e.sourceBufferName==="video"&&(d===O.BUFFER_ADD_CODEC_ERROR||d===O.BUFFER_APPEND_ERROR)&&u.some(({codecSet:$,audioCodec:F})=>i.codecSet!==$&&i.audioCodec===F),{type:D,groupId:R}=(s=e.context)!=null?s:{};for(let $=u.length;$--;){const F=($+h)%u.length;if(F!==h&&F>=A&&F<=b&&u[F].loadError===0){var o,l;const H=u[F];if(d===O.FRAG_GAP&&e.frag){const Y=u[F].details;if(Y){const M=Zn(e.frag,Y.fragments,e.frag.start);if(M!=null&&M.gap)continue}}else{if(D===fe.AUDIO_TRACK&&H.hasAudioGroup(R)||D===fe.SUBTITLE_TRACK&&H.hasSubtitleGroup(R))continue;if(v===ie.AUDIO&&(o=i.audioGroups)!=null&&o.some(Y=>H.hasAudioGroup(Y))||v===ie.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(Y=>H.hasSubtitleGroup(Y))||w&&i.audioCodec===H.audioCodec||!w&&i.audioCodec!==H.audioCodec||I&&i.codecSet===H.codecSet)continue}c=F;break}}if(c>-1&&n.loadLevel!==c)return e.levelRetry=!0,this.playlistError=0,{action:Pe.SendAlternateToPenaltyBox,flags:He.None,nextAutoLevel:c}}return{action:Pe.SendAlternateToPenaltyBox,flags:He.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var n;switch((n=t.errorAction)==null?void 0:n.action){case Pe.DoNothing:break;case Pe.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==O.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,n=e.errorAction;if(!n)return;const{flags:i,hdcpLevel:r,nextAutoLevel:s}=n;switch(i){case He.None:this.switchLevel(e,s);break;case He.MoveAllAlternatesMatchingHDCP:r&&(t.maxHdcpLevel=zi[zi.indexOf(r)-1],n.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}n.resolved||this.switchLevel(e,s)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}}class or{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=B.log.bind(B,`${t}:`),this.warn=B.warn.bind(B,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t,n){const i=t==null?void 0:t.renditionReports;if(i){let r=-1;for(let s=0;s<i.length;s++){const o=i[s];let l;try{l=new self.URL(o.URI,t.url).href}catch(d){B.warn(`Could not construct new URL for Rendition Report: ${d}`),l=o.URI||""}if(l===e){r=s;break}else l===e.substring(0,l.length)&&(r=s)}if(r!==-1){const s=i[r],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let l=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const c=Math.min(t.age-t.partTarget,t.targetduration);l>=0&&c>t.partTarget&&(l+=1)}const d=n&&Ds(n);return new Bs(o,l>=0?l:void 0,d)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,n){const{details:i,stats:r}=t,s=self.performance.now(),o=r.loading.first?Math.max(0,s-r.loading.first):0;if(i.advancedDateTime=Date.now()-o,i.live||n!=null&&n.live){if(i.reloaded(n),n&&this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),n&&i.fragments.length>0&&du(n,i),!this.canLoad||!i.live)return;let l,d,c;if(i.canBlockReload&&i.endSN&&i.advanced){const x=this.hls.config.lowLatencyMode,w=i.lastPartSn,L=i.endSN,I=i.lastPartIndex,D=I!==-1,R=w===L,$=x?0:I;D?(d=R?L+1:w,c=R?$:I+1):d=L+1;const F=i.age,H=F+i.ageHeader;let Y=Math.min(H-i.partTarget,i.targetduration*1.5);if(Y>0){if(n&&Y>n.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${Y} with playlist age: ${i.age}`),Y=0;else{const M=Math.floor(Y/i.targetduration);if(d+=M,c!==void 0){const q=Math.round(Y%i.targetduration/i.partTarget);c+=q}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${F.toFixed(2)}s goal: ${Y} skip sn ${M} to part ${c}`)}i.tuneInGoal=Y}if(l=this.getDeliveryDirectives(i,t.deliveryDirectives,d,c),x||!R){this.loadPlaylist(l);return}}else(i.canBlockReload||i.canSkipUntil)&&(l=this.getDeliveryDirectives(i,t.deliveryDirectives,d,c));const u=this.hls.mainForwardBufferInfo,h=u?u.end-u.len:0,A=(i.edge-h)*1e3,b=fu(i,A);i.updated&&s>this.requestScheduled+b&&(this.requestScheduled=r.loading.start),d!==void 0&&i.canBlockReload?this.requestScheduled=r.loading.first+b-(i.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+b<s?this.requestScheduled=s:this.requestScheduled-s<=0&&(this.requestScheduled+=b);let v=this.requestScheduled-s;v=Math.max(0,v),this.log(`reload live playlist ${e} in ${Math.round(v)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),v)}else this.clearTimer()}getDeliveryDirectives(e,t,n,i){let r=Ds(e);return t!=null&&t.skip&&e.deltaUpdateFailed&&(n=t.msn,i=t.part,r=Mn.No),new Bs(n,i,r)}checkRetry(e){const t=e.details,n=Qn(e),i=e.errorAction,{action:r,retryCount:s=0,retryConfig:o}=i||{},l=!!i&&!!o&&(r===Pe.RetryRequest||!i.resolved&&r===Pe.SendAlternateToPenaltyBox);if(l){var d;if(this.requestScheduled=-1,s>=o.maxNumRetry)return!1;if(n&&(d=e.context)!=null&&d.deliveryDirectives)this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const c=ar(o,s);this.timer=self.setTimeout(()=>this.loadPlaylist(),c),this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" in ${c}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}class kt{constructor(e,t=0,n=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=n}sample(e,t){const n=Math.pow(this.alpha_,e);this.estimate_=t*(1-n)+n*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class vu{constructor(e,t,n,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new kt(e),this.fast_=new kt(t),this.defaultTTFB_=i,this.ttfb_=new kt(e)}update(e,t){const{slow_:n,fast_:i,ttfb_:r}=this;n.halfLife!==e&&(this.slow_=new kt(e,n.getEstimate(),n.getTotalWeight())),i.halfLife!==t&&(this.fast_=new kt(t,i.getEstimate(),i.getTotalWeight())),r.halfLife!==e&&(this.ttfb_=new kt(e,r.getEstimate(),r.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const n=8*t,i=e/1e3,r=n/i;this.fast_.sample(i,r),this.slow_.sample(i,r)}sampleTTFB(e){const t=e/1e3,n=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(n,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}const Va={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]},Ms={};function Eu(a,e,t,n,i,r){const s=a.audioCodec?a.audioGroups:null,o=r==null?void 0:r.audioCodec,l=r==null?void 0:r.channels,d=l?parseInt(l):o?1/0:2;let c=null;if(s!=null&&s.length)try{s.length===1&&s[0]?c=e.groups[s[0]].channels:c=s.reduce((u,h)=>{if(h){const A=e.groups[h];if(!A)throw new Error(`Audio track group ${h} not found`);Object.keys(A.channels).forEach(b=>{u[b]=(u[b]||0)+A.channels[b]})}return u},{2:0})}catch{return!0}return a.videoCodec!==void 0&&(a.width>1920&&a.height>1088||a.height>1920&&a.width>1088||a.frameRate>Math.max(n,30)||a.videoRange!=="SDR"&&a.videoRange!==t||a.bitrate>Math.max(i,8e6))||!!c&&J(d)&&Object.keys(c).some(u=>parseInt(u)>d)}function xu(a,e,t){const n=a.videoCodec,i=a.audioCodec;if(!n||!i||!t)return Promise.resolve(Va);const r={width:a.width,height:a.height,bitrate:Math.ceil(Math.max(a.bitrate*.9,a.averageBitrate)),framerate:a.frameRate||30},s=a.videoRange;s!=="SDR"&&(r.transferFunction=s.toLowerCase());const o=n.split(",").map(l=>({type:"media-source",video:Be(Be({},r),{},{contentType:gn(l,"video")})}));return i&&a.audioGroups&&a.audioGroups.forEach(l=>{var d;l&&((d=e.groups[l])==null||d.tracks.forEach(c=>{if(c.groupId===l){const u=c.channels||"",h=parseFloat(u);J(h)&&h>2&&o.push.apply(o,i.split(",").map(A=>({type:"media-source",audio:{contentType:gn(A,"audio"),channels:""+h}})))}}))}),Promise.all(o.map(l=>{const d=Su(l);return Ms[d]||(Ms[d]=t.decodingInfo(l))})).then(l=>({supported:!l.some(d=>!d.supported),configurations:o,decodingInfoResults:l})).catch(l=>({supported:!1,configurations:o,decodingInfoResults:[],error:l}))}function Su(a){const{audio:e,video:t}=a,n=t||e;if(n){const i=n.contentType.split('"')[1];if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}function Tu(){if(typeof matchMedia=="function"){const a=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(a.media!==e.media)return a.matches===!0}return!1}function Cu(a,e){let t=!1,n=[];return a&&(t=a!=="SDR",n=[a]),e&&(n=e.allowedVideoRanges||jn.slice(0),t=e.preferHDR!==void 0?e.preferHDR:Tu(),t?n=n.filter(i=>i!=="SDR"):n=["SDR"]),{preferHDR:t,allowedVideoRanges:n}}function wu(a,e,t,n,i){const r=Object.keys(a),s=n==null?void 0:n.channels,o=n==null?void 0:n.audioCodec,l=s&&parseInt(s)===2;let d=!0,c=!1,u=1/0,h=1/0,A=1/0,b=0,v=[];const{preferHDR:x,allowedVideoRanges:w}=Cu(e,i);for(let R=r.length;R--;){const $=a[r[R]];d=$.channels[2]>0,u=Math.min(u,$.minHeight),h=Math.min(h,$.minFramerate),A=Math.min(A,$.minBitrate);const F=w.filter(H=>$.videoRanges[H]>0);F.length>0&&(c=!0,v=F)}u=J(u)?u:0,h=J(h)?h:0;const L=Math.max(1080,u),I=Math.max(30,h);return A=J(A)?A:t,t=Math.max(A,t),c||(e=void 0,v=[]),{codecSet:r.reduce((R,$)=>{const F=a[$];if($===R)return R;if(F.minBitrate>t)return it($,`min bitrate of ${F.minBitrate} > current estimate of ${t}`),R;if(!F.hasDefaultAudio)return it($,"no renditions with default or auto-select sound found"),R;if(o&&$.indexOf(o.substring(0,4))%5!==0)return it($,`audio codec preference "${o}" not found`),R;if(s&&!l){if(!F.channels[s])return it($,`no renditions with ${s} channel sound found (channels options: ${Object.keys(F.channels)})`),R}else if((!o||l)&&d&&F.channels[2]===0)return it($,"no renditions with stereo sound found"),R;return F.minHeight>L?(it($,`min resolution of ${F.minHeight} > maximum of ${L}`),R):F.minFramerate>I?(it($,`min framerate of ${F.minFramerate} > maximum of ${I}`),R):v.some(H=>F.videoRanges[H]>0)?F.maxScore<b?(it($,`max score of ${F.maxScore} < selected max of ${b}`),R):R&&(Yn($)>=Yn(R)||F.fragmentError>a[R].fragmentError)?R:(b=F.maxScore,$):(it($,`no variants with VIDEO-RANGE of ${JSON.stringify(v)} found`),R)},void 0),videoRanges:v,preferHDR:x,minFramerate:h,minBitrate:A}}function it(a,e){B.log(`[abr] start candidates with "${a}" ignored because ${e}`)}function ku(a){return a.reduce((e,t)=>{let n=e.groups[t.groupId];n||(n=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),n.tracks.push(t);const i=t.channels||"2";return n.channels[i]=(n.channels[i]||0)+1,n.hasDefault=n.hasDefault||t.default,n.hasAutoSelect=n.hasAutoSelect||t.autoselect,n.hasDefault&&(e.hasDefaultAudio=!0),n.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function Lu(a,e,t,n){return a.slice(t,n+1).reduce((i,r)=>{if(!r.codecSet)return i;const s=r.audioGroups;let o=i[r.codecSet];o||(i[r.codecSet]=o={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!s,fragmentError:0}),o.minBitrate=Math.min(o.minBitrate,r.bitrate);const l=Math.min(r.height,r.width);return o.minHeight=Math.min(o.minHeight,l),o.minFramerate=Math.min(o.minFramerate,r.frameRate),o.maxScore=Math.max(o.maxScore,r.score),o.fragmentError+=r.fragmentError,o.videoRanges[r.videoRange]=(o.videoRanges[r.videoRange]||0)+1,s&&s.forEach(d=>{if(!d)return;const c=e.groups[d];c&&(o.hasDefaultAudio=o.hasDefaultAudio||e.hasDefaultAudio?c.hasDefault:c.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(c.channels).forEach(u=>{o.channels[u]=(o.channels[u]||0)+c.channels[u]}))}),i},{})}function Ze(a,e,t){if("attrs"in a){const n=e.indexOf(a);if(n!==-1)return n}for(let n=0;n<e.length;n++){const i=e[n];if(Pt(a,i,t))return n}return-1}function Pt(a,e,t){const{groupId:n,name:i,lang:r,assocLang:s,characteristics:o,default:l}=a,d=a.forced;return(n===void 0||e.groupId===n)&&(i===void 0||e.name===i)&&(r===void 0||e.lang===r)&&(r===void 0||e.assocLang===s)&&(l===void 0||e.default===l)&&(d===void 0||e.forced===d)&&(o===void 0||Iu(o,e.characteristics))&&(t===void 0||t(a,e))}function Iu(a,e=""){const t=a.split(","),n=e.split(",");return t.length===n.length&&!t.some(i=>n.indexOf(i)===-1)}function Lt(a,e){const{audioCodec:t,channels:n}=a;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(n===void 0||n===(e.channels||"2"))}function Ru(a,e,t,n,i){const r=e[n],o=e.reduce((h,A,b)=>{const v=A.uri;return(h[v]||(h[v]=[])).push(b),h},{})[r.uri];o.length>1&&(n=Math.max.apply(Math,o));const l=r.videoRange,d=r.frameRate,c=r.codecSet.substring(0,4),u=Ns(e,n,h=>{if(h.videoRange!==l||h.frameRate!==d||h.codecSet.substring(0,4)!==c)return!1;const A=h.audioGroups,b=t.filter(v=>!A||A.indexOf(v.groupId)!==-1);return Ze(a,b,i)>-1});return u>-1?u:Ns(e,n,h=>{const A=h.audioGroups,b=t.filter(v=>!A||A.indexOf(v.groupId)!==-1);return Ze(a,b,i)>-1})}function Ns(a,e,t){for(let n=e;n;n--)if(t(a[n]))return n;for(let n=e+1;n<a.length;n++)if(t(a[n]))return n;return-1}class Du{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this._abandonRulesCheck=()=>{const{fragCurrent:t,partCurrent:n,hls:i}=this,{autoLevelEnabled:r,media:s}=i;if(!t||!s)return;const o=performance.now(),l=n?n.stats:t.stats,d=n?n.duration:t.duration,c=o-l.loading.start,u=i.minAutoLevel;if(l.aborted||l.loaded&&l.loaded===l.total||t.level<=u){this.clearTimer(),this._nextAutoLevel=-1;return}if(!r||s.paused||!s.playbackRate||!s.readyState)return;const h=i.mainForwardBufferInfo;if(h===null)return;const A=this.bwEstimator.getEstimateTTFB(),b=Math.abs(s.playbackRate);if(c<=Math.max(A,1e3*(d/(b*2))))return;const v=h.len/b,x=l.loading.first?l.loading.first-l.loading.start:-1,w=l.loaded&&x>-1,L=this.getBwEstimate(),I=i.levels,D=I[t.level],R=l.total||Math.max(l.loaded,Math.round(d*D.averageBitrate/8));let $=w?c-x:c;$<1&&w&&($=Math.min(c,l.loaded*8/L));const F=w?l.loaded*1e3/$:0,H=F?(R-l.loaded)/F:R*8/L+A/1e3;if(H<=v)return;const Y=F?F*8:L;let M=Number.POSITIVE_INFINITY,q;for(q=t.level-1;q>u;q--){const j=I[q].maxBitrate;if(M=this.getTimeToLoadFrag(A/1e3,Y,d*j,!I[q].details),M<v)break}if(M>=H||M>d*10)return;i.nextLoadLevel=i.nextAutoLevel=q,w?this.bwEstimator.sample(c-Math.min(A,x),l.loaded):this.bwEstimator.sampleTTFB(c);const ae=I[q].maxBitrate;this.getBwEstimate()*this.hls.config.abrBandWidthUpFactor>ae&&this.resetEstimator(ae),this.clearTimer(),B.warn(`[abr] Fragment ${t.sn}${n?" part "+n.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${v.toFixed(3)} s
      Estimated load time for current fragment: ${H.toFixed(3)} s
      Estimated load time for down switch fragment: ${M.toFixed(3)} s
      TTFB estimate: ${x|0} ms
      Current BW estimate: ${J(L)?L|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${q} @ ${ae|0} bps`),i.trigger(T.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:n,stats:l})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(B.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new vu(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(T.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const n=t.frag;if(!this.ignoreFragment(n)){if(!n.bitrateTest){var i;this.fragCurrent=n,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case O.BUFFER_ADD_CODEC_ERROR:case O.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case O.FRAG_LOAD_TIMEOUT:{const n=t.frag,{fragCurrent:i,partCurrent:r}=this;if(n&&i&&n.sn===i.sn&&n.level===i.level){const s=performance.now(),o=r?r.stats:n.stats,l=s-o.loading.start,d=o.loading.first?o.loading.first-o.loading.start:-1;if(o.loaded&&d>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(u,d),o.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,n,i){const r=e+n/t,s=i?this.lastLevelLoadSec:0;return r+s}onLevelLoaded(e,t){const n=this.hls.config,{loading:i}=t.stats,r=i.end-i.start;J(r)&&(this.lastLevelLoadSec=r/1e3),t.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD)}onFragLoaded(e,{frag:t,part:n}){const i=n?n.stats:t.stats;if(t.type===ie.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const r=n?n.duration:t.duration,s=this.hls.levels[t.level],o=(s.loaded?s.loaded.bytes:0)+i.loaded,l=(s.loaded?s.loaded.duration:0)+r;s.loaded={bytes:o,duration:l},s.realBitrate=Math.round(8*o/l)}if(t.bitrateTest){const r={stats:i,frag:t,part:n,id:t.type};this.onFragBuffered(T.FRAG_BUFFERED,r),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:n,part:i}=t,r=i!=null&&i.stats.loaded?i.stats:n.stats;if(r.aborted||this.ignoreFragment(n))return;const s=r.parsing.end-r.loading.start-Math.min(r.loading.first-r.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(s,r.loaded),r.bwEstimate=this.getBwEstimate(),n.bitrateTest?this.bitrateTestDelay=s/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==ie.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,n=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,r=this.findBestLevel(n,t,e,0,i,1,1);if(r>-1)return r;const s=this.hls.firstLevel,o=Math.min(Math.max(s,t),e);return B.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${o}`),o}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,n=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!n||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const r=n&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const s=this.hls.levels;if(s.length>Math.max(e,r)&&s[e].loadError<=s[r].loadError)return e}return this._nextAutoLevel=r,this.nextAutoLevelKey=this.getAutoLevelKey(),r}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:n}=this,{maxAutoLevel:i,config:r,minAutoLevel:s}=n,o=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),d=this.getStarvationDelay();let c=r.abrBandWidthFactor,u=r.abrBandWidthUpFactor;if(d){const x=this.findBestLevel(l,s,i,d,0,c,u);if(x>=0)return x}let h=o?Math.min(o,r.maxStarvationDelay):r.maxStarvationDelay;if(!d){const x=this.bitrateTestDelay;x&&(h=(o?Math.min(o,r.maxLoadingDelay):r.maxLoadingDelay)-x,B.info(`[abr] bitrate test took ${Math.round(1e3*x)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`),c=u=1)}const A=this.findBestLevel(l,s,i,d,h,c,u);if(B.info(`[abr] ${d?"rebuffering expected":"buffer is empty"}, optimal quality level ${A}`),A>-1)return A;const b=n.levels[s],v=n.levels[n.loadLevel];return(b==null?void 0:b.bitrate)<(v==null?void 0:v.bitrate)?s:n.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const n=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/n}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,n,i,r,s,o){var l;const d=i+r,c=this.lastLoadedFragLevel,u=c===-1?this.hls.firstLevel:c,{fragCurrent:h,partCurrent:A}=this,{levels:b,allAudioTracks:v,loadLevel:x,config:w}=this.hls;if(b.length===1)return 0;const L=b[u],I=!!(L!=null&&(l=L.details)!=null&&l.live),D=x===-1||c===-1;let R,$="SDR",F=(L==null?void 0:L.frameRate)||0;const{audioPreference:H,videoPreference:Y}=w,M=this.audioTracksByGroup||(this.audioTracksByGroup=ku(v));if(D){if(this.firstSelection!==-1)return this.firstSelection;const oe=this.codecTiers||(this.codecTiers=Lu(b,M,t,n)),te=wu(oe,$,e,H,Y),{codecSet:he,videoRanges:pe,minFramerate:G,minBitrate:X,preferHDR:ue}=te;R=he,$=ue?pe[pe.length-1]:pe[0],F=G,e=Math.max(e,X),B.log(`[abr] picked start tier ${JSON.stringify(te)}`)}else R=L==null?void 0:L.codecSet,$=L==null?void 0:L.videoRange;const q=A?A.duration:h?h.duration:0,ae=this.bwEstimator.getEstimateTTFB()/1e3,j=[];for(let oe=n;oe>=t;oe--){var se;const te=b[oe],he=oe>u;if(!te)continue;if(w.useMediaCapabilities&&!te.supportedResult&&!te.supportedPromise){const Ee=navigator.mediaCapabilities;typeof(Ee==null?void 0:Ee.decodingInfo)=="function"&&Eu(te,M,$,F,e,H)?(te.supportedPromise=xu(te,M,Ee),te.supportedPromise.then(Te=>{if(!this.hls)return;te.supportedResult=Te;const be=this.hls.levels,_e=be.indexOf(te);Te.error?B.warn(`[abr] MediaCapabilities decodingInfo error: "${Te.error}" for level ${_e} ${JSON.stringify(Te)}`):Te.supported||(B.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${_e} ${JSON.stringify(Te)}`),_e>-1&&be.length>1&&(B.log(`[abr] Removing unsupported level ${_e}`),this.hls.removeLevel(_e)))})):te.supportedResult=Va}if(R&&te.codecSet!==R||$&&te.videoRange!==$||he&&F>te.frameRate||!he&&F>0&&F<te.frameRate||te.supportedResult&&!((se=te.supportedResult.decodingInfoResults)!=null&&se[0].smooth)){j.push(oe);continue}const pe=te.details,G=(A?pe==null?void 0:pe.partTarget:pe==null?void 0:pe.averagetargetduration)||q;let X;he?X=o*e:X=s*e;const ue=q&&i>=q*2&&r===0?b[oe].averageBitrate:b[oe].maxBitrate,ce=this.getTimeToLoadFrag(ae,X,ue*G,pe===void 0);if(X>=ue&&(oe===c||te.loadError===0&&te.fragmentError===0)&&(ce<=ae||!J(ce)||I&&!this.bitrateTestDelay||ce<d)){const Ee=this.forcedAutoLevel;return oe!==x&&(Ee===-1||Ee!==x)&&(j.length&&B.trace(`[abr] Skipped level(s) ${j.join(",")} of ${n} max with CODECS and VIDEO-RANGE:"${b[j[0]].codecs}" ${b[j[0]].videoRange}; not compatible with "${L.codecs}" ${$}`),B.info(`[abr] switch candidate:${u}->${oe} adjustedbw(${Math.round(X)})-bitrate=${Math.round(X-ue)} ttfb:${ae.toFixed(1)} avgDuration:${G.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${ce.toFixed(1)} firstSelection:${D} codecSet:${R} videoRange:${$} hls.loadLevel:${x}`)),D&&(this.firstSelection=oe),oe}}return-1}set nextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:n}=this.hls,i=Math.min(Math.max(e,n),t);this._nextAutoLevel!==i&&(this.nextAutoLevelKey="",this._nextAutoLevel=i)}}class Bu{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}var De={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class _u{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.BUFFER_APPENDED,this.onBufferAppended,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.BUFFER_APPENDED,this.onBufferAppended,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const n=this.activePartLists[t];if(n)for(let i=n.length;i--;){const r=n[i];if(!r)break;const s=r.end;if(r.start<=e&&s!==null&&e<=s)return r}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:n}=this,i=Object.keys(n);for(let r=i.length;r--;){const s=n[i[r]];if((s==null?void 0:s.body.type)===t&&s.buffered){const o=s.body;if(o.start<=e&&e<=o.end)return o}}return null}detectEvictedFragments(e,t,n,i){this.timeRanges&&(this.timeRanges[e]=t);const r=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(s=>{const o=this.fragments[s];if(!o||r>=o.body.sn)return;if(!o.buffered&&!o.loaded){o.body.type===n&&this.removeFragment(o.body);return}const l=o.range[e];l&&l.time.some(d=>{const c=!this.isTimeBuffered(d.startPTS,d.endPTS,t);return c&&this.removeFragment(o.body),c})})}detectPartialFragments(e){const t=this.timeRanges,{frag:n,part:i}=e;if(!t||n.sn==="initSegment")return;const r=It(n),s=this.fragments[r];if(!s||s.buffered&&n.gap)return;const o=!n.relurl;Object.keys(t).forEach(l=>{const d=n.elementaryStreams[l];if(!d)return;const c=t[l],u=o||d.partial===!0;s.range[l]=this.getBufferedTimes(n,i,u,c)}),s.loaded=null,Object.keys(s.range).length?(s.buffered=!0,(s.body.endList=n.endList||s.body.endList)&&(this.endListFragments[s.body.type]=s),In(s)||this.removeParts(n.sn-1,n.type)):this.removeFragment(s.body)}removeParts(e,t){const n=this.activePartLists[t];n&&(this.activePartLists[t]=n.filter(i=>i.fragment.sn>=e))}fragBuffered(e,t){const n=It(e);let i=this.fragments[n];!i&&t&&(i=this.fragments[n]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,n,i){const r={time:[],partial:n},s=e.start,o=e.end,l=e.minEndPTS||o,d=e.maxStartPTS||s;for(let c=0;c<i.length;c++){const u=i.start(c)-this.bufferPadding,h=i.end(c)+this.bufferPadding;if(d>=u&&l<=h){r.time.push({startPTS:Math.max(s,i.start(c)),endPTS:Math.min(o,i.end(c))});break}else if(s<h&&o>u){const A=Math.max(s,i.start(c)),b=Math.min(o,i.end(c));b>A&&(r.partial=!0,r.time.push({startPTS:A,endPTS:b}))}else if(o<=u)break}return r}getPartialFragment(e){let t=null,n,i,r,s=0;const{bufferPadding:o,fragments:l}=this;return Object.keys(l).forEach(d=>{const c=l[d];c&&In(c)&&(i=c.body.start-o,r=c.body.end+o,e>=i&&e<=r&&(n=Math.min(e-i,r-e),s<=n&&(t=c.body,s=n)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||In(t))}getState(e){const t=It(e),n=this.fragments[t];return n?n.buffered?In(n)?De.PARTIAL:De.OK:De.APPENDING:De.NOT_LOADED}isTimeBuffered(e,t,n){let i,r;for(let s=0;s<n.length;s++){if(i=n.start(s)-this.bufferPadding,r=n.end(s)+this.bufferPadding,e>=i&&t<=r)return!0;if(t<=i)return!1}return!1}onFragLoaded(e,t){const{frag:n,part:i}=t;if(n.sn==="initSegment"||n.bitrateTest)return;const r=i?null:t,s=It(n);this.fragments[s]={body:n,appendedPTS:null,loaded:r,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:n,part:i,timeRanges:r}=t;if(n.sn==="initSegment")return;const s=n.type;if(i){let o=this.activePartLists[s];o||(this.activePartLists[s]=o=[]),o.push(i)}this.timeRanges=r,Object.keys(r).forEach(o=>{const l=r[o];this.detectEvictedFragments(o,l,s,i)})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=It(e);return!!this.fragments[t]}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,n,i,r){i&&!this.hasGaps||Object.keys(this.fragments).forEach(s=>{const o=this.fragments[s];if(!o)return;const l=o.body;l.type!==n||i&&!l.gap||l.start<t&&l.end>e&&(o.buffered||r)&&this.removeFragment(l)})}removeFragment(e){const t=It(e);e.stats.loaded=0,e.clearElementaryStreamInfo();const n=this.activePartLists[e.type];if(n){const i=e.sn;this.activePartLists[e.type]=n.filter(r=>r.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1}}function In(a){var e,t,n;return a.buffered&&(a.body.gap||((e=a.range.video)==null?void 0:e.partial)||((t=a.range.audio)==null?void 0:t.partial)||((n=a.range.audiovideo)==null?void 0:n.partial))}function It(a){return`${a.type}_${a.level}_${a.sn}`}const Pu={length:0,start:()=>0,end:()=>0};class ve{static isBuffered(e,t){try{if(e){const n=ve.getBuffered(e);for(let i=0;i<n.length;i++)if(t>=n.start(i)&&t<=n.end(i))return!0}}catch{}return!1}static bufferInfo(e,t,n){try{if(e){const i=ve.getBuffered(e),r=[];let s;for(s=0;s<i.length;s++)r.push({start:i.start(s),end:i.end(s)});return this.bufferedInfo(r,t,n)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,n){t=Math.max(0,t),e.sort(function(d,c){const u=d.start-c.start;return u||c.end-d.end});let i=[];if(n)for(let d=0;d<e.length;d++){const c=i.length;if(c){const u=i[c-1].end;e[d].start-u<n?e[d].end>u&&(i[c-1].end=e[d].end):i.push(e[d])}else i.push(e[d])}else i=e;let r=0,s,o=t,l=t;for(let d=0;d<i.length;d++){const c=i[d].start,u=i[d].end;if(t+n>=c&&t<u)o=c,l=u,r=l-t;else if(t+n<c){s=c;break}}return{len:r,start:o||0,end:l||0,nextStart:s}}static getBuffered(e){try{return e.buffered}catch(t){return B.log("failed to get media.buffered",t),Pu}}}class lr{constructor(e,t,n,i=0,r=-1,s=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=Rn(),this.buffering={audio:Rn(),video:Rn(),audiovideo:Rn()},this.level=e,this.sn=t,this.id=n,this.size=i,this.part=r,this.partial=s}}function Rn(){return{start:0,executeStart:0,executeEnd:0,end:0}}function Nn(a,e){for(let n=0,i=a.length;n<i;n++){var t;if(((t=a[n])==null?void 0:t.cc)===e)return a[n]}return null}function Ou(a,e,t){return!!(e&&(t.endCC>t.startCC||a&&a.cc<t.startCC))}function Fu(a,e){const t=a.fragments,n=e.fragments;if(!n.length||!t.length){B.log("No fragments to align");return}const i=Nn(t,n[0].cc);if(!i||i&&!i.startPTS){B.log("No frag in previous level to align on");return}return i}function Us(a,e){if(a){const t=a.start+e;a.start=a.startPTS=t,a.endPTS=t+a.duration}}function za(a,e){const t=e.fragments;for(let n=0,i=t.length;n<i;n++)Us(t[n],a);e.fragmentHint&&Us(e.fragmentHint,a),e.alignedSliding=!0}function Mu(a,e,t){e&&(Nu(a,t,e),!t.alignedSliding&&e&&Jn(t,e),!t.alignedSliding&&e&&!t.skippedSegments&&Ga(e,t))}function Nu(a,e,t){if(Ou(a,t,e)){const n=Fu(t,e);n&&J(n.start)&&(B.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),za(n.start,e))}}function Jn(a,e){if(!a.hasProgramDateTime||!e.hasProgramDateTime)return;const t=a.fragments,n=e.fragments;if(!t.length||!n.length)return;let i,r;const s=Math.min(e.endCC,a.endCC);e.startCC<s&&a.startCC<s&&(i=Nn(n,s),r=Nn(t,s)),(!i||!r)&&(i=n[Math.floor(n.length/2)],r=Nn(t,i.cc)||t[Math.floor(t.length/2)]);const o=i.programDateTime,l=r.programDateTime;if(!o||!l)return;const d=(l-o)/1e3-(r.start-i.start);za(d,a)}const $s=Math.pow(2,17);class Uu{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const n=e.url;if(!n)return Promise.reject(new st({type:re.NETWORK_ERROR,details:O.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${n?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(A=>A[0]==="GAP")){l(Ks(e));return}else e.gap=!1;const d=this.loader=e.loader=r?new r(i):new s(i),c=Gs(e),u=Fs(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:$s};e.stats=d.stats,d.load(c,h,{onSuccess:(A,b,v,x)=>{this.resetLoader(e,d);let w=A.data;v.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(w.slice(0,16)),w=w.slice(16)),o({frag:e,part:null,payload:w,networkDetails:x})},onError:(A,b,v,x)=>{this.resetLoader(e,d),l(new st({type:re.NETWORK_ERROR,details:O.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:Be({url:n,data:void 0},A),error:new Error(`HTTP Error ${A.code} ${A.text}`),networkDetails:v,stats:x}))},onAbort:(A,b,v)=>{this.resetLoader(e,d),l(new st({type:re.NETWORK_ERROR,details:O.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:v,stats:A}))},onTimeout:(A,b,v)=>{this.resetLoader(e,d),l(new st({type:re.NETWORK_ERROR,details:O.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:v,stats:A}))},onProgress:(A,b,v,x)=>{t&&t({frag:e,part:null,payload:v,networkDetails:x})}})})}loadPart(e,t,n){this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(Ks(e,t));return}const d=this.loader=e.loader=r?new r(i):new s(i),c=Gs(e,t),u=Fs(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:$s};t.stats=d.stats,d.load(c,h,{onSuccess:(A,b,v,x)=>{this.resetLoader(e,d),this.updateStatsFromPart(e,t);const w={frag:e,part:t,payload:A.data,networkDetails:x};n(w),o(w)},onError:(A,b,v,x)=>{this.resetLoader(e,d),l(new st({type:re.NETWORK_ERROR,details:O.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:Be({url:c.url,data:void 0},A),error:new Error(`HTTP Error ${A.code} ${A.text}`),networkDetails:v,stats:x}))},onAbort:(A,b,v)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,d),l(new st({type:re.NETWORK_ERROR,details:O.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:v,stats:A}))},onTimeout:(A,b,v)=>{this.resetLoader(e,d),l(new st({type:re.NETWORK_ERROR,details:O.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:v,stats:A}))}})})}updateStatsFromPart(e,t){const n=e.stats,i=t.stats,r=i.total;if(n.loaded+=i.loaded,r){const l=Math.round(e.duration/t.duration),d=Math.min(Math.round(n.loaded/r),l),u=(l-d)*Math.round(n.loaded/d);n.total=n.loaded+u}else n.total=Math.max(n.loaded,n.total);const s=n.loading,o=i.loading;s.start?s.first+=o.first-o.start:(s.start=o.start,s.first=o.first),s.end=o.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function Gs(a,e=null){const t=e||a,n={frag:a,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,r=t.byteRangeEndOffset;if(J(i)&&J(r)){var s;let o=i,l=r;if(a.sn==="initSegment"&&((s=a.decryptdata)==null?void 0:s.method)==="AES-128"){const d=r-i;d%16&&(l=r+(16-d%16)),i!==0&&(n.resetIV=!0,o=i-16)}n.rangeStart=o,n.rangeEnd=l}return n}function Ks(a,e){const t=new Error(`GAP ${a.gap?"tag":"attribute"} found`),n={type:re.MEDIA_ERROR,details:O.FRAG_GAP,fatal:!1,frag:a,error:t,networkDetails:null};return e&&(n.part=e),(e||a).stats.aborted=!0,new st(n)}class st extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class $u{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class Gu{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function Ku(a){const e=a.byteLength,t=e&&new DataView(a.buffer).getUint8(e-1);return t?bt(a,0,e-t):a}class Hu{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),n=new Uint32Array(4);for(let i=0;i<4;i++)n[i]=t.getUint32(i*4);return n}initTable(){const e=this.sBox,t=this.invSBox,n=this.subMix,i=n[0],r=n[1],s=n[2],o=n[3],l=this.invSubMix,d=l[0],c=l[1],u=l[2],h=l[3],A=new Uint32Array(256);let b=0,v=0,x=0;for(x=0;x<256;x++)x<128?A[x]=x<<1:A[x]=x<<1^283;for(x=0;x<256;x++){let w=v^v<<1^v<<2^v<<3^v<<4;w=w>>>8^w&255^99,e[b]=w,t[w]=b;const L=A[b],I=A[L],D=A[I];let R=A[w]*257^w*16843008;i[b]=R<<24|R>>>8,r[b]=R<<16|R>>>16,s[b]=R<<8|R>>>24,o[b]=R,R=D*16843009^I*65537^L*257^b*16843008,d[w]=R<<24|R>>>8,c[w]=R<<16|R>>>16,u[w]=R<<8|R>>>24,h[w]=R,b?(b=L^A[A[A[D^L]]],v^=A[A[v]]):b=v=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let n=!0,i=0;for(;i<t.length&&n;)n=t[i]===this.key[i],i++;if(n)return;this.key=t;const r=this.keySize=t.length;if(r!==4&&r!==6&&r!==8)throw new Error("Invalid aes key size="+r);const s=this.ksRows=(r+6+1)*4;let o,l;const d=this.keySchedule=new Uint32Array(s),c=this.invKeySchedule=new Uint32Array(s),u=this.sBox,h=this.rcon,A=this.invSubMix,b=A[0],v=A[1],x=A[2],w=A[3];let L,I;for(o=0;o<s;o++){if(o<r){L=d[o]=t[o];continue}I=L,o%r===0?(I=I<<8|I>>>24,I=u[I>>>24]<<24|u[I>>>16&255]<<16|u[I>>>8&255]<<8|u[I&255],I^=h[o/r|0]<<24):r>6&&o%r===4&&(I=u[I>>>24]<<24|u[I>>>16&255]<<16|u[I>>>8&255]<<8|u[I&255]),d[o]=L=(d[o-r]^I)>>>0}for(l=0;l<s;l++)o=s-l,l&3?I=d[o]:I=d[o-4],l<4||o<=4?c[l]=I:c[l]=b[u[I>>>24]]^v[u[I>>>16&255]]^x[u[I>>>8&255]]^w[u[I&255]],c[l]=c[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,n){const i=this.keySize+6,r=this.invKeySchedule,s=this.invSBox,o=this.invSubMix,l=o[0],d=o[1],c=o[2],u=o[3],h=this.uint8ArrayToUint32Array_(n);let A=h[0],b=h[1],v=h[2],x=h[3];const w=new Int32Array(e),L=new Int32Array(w.length);let I,D,R,$,F,H,Y,M,q,ae,j,se,oe,te;const he=this.networkToHostOrderSwap;for(;t<w.length;){for(q=he(w[t]),ae=he(w[t+1]),j=he(w[t+2]),se=he(w[t+3]),F=q^r[0],H=se^r[1],Y=j^r[2],M=ae^r[3],oe=4,te=1;te<i;te++)I=l[F>>>24]^d[H>>16&255]^c[Y>>8&255]^u[M&255]^r[oe],D=l[H>>>24]^d[Y>>16&255]^c[M>>8&255]^u[F&255]^r[oe+1],R=l[Y>>>24]^d[M>>16&255]^c[F>>8&255]^u[H&255]^r[oe+2],$=l[M>>>24]^d[F>>16&255]^c[H>>8&255]^u[Y&255]^r[oe+3],F=I,H=D,Y=R,M=$,oe=oe+4;I=s[F>>>24]<<24^s[H>>16&255]<<16^s[Y>>8&255]<<8^s[M&255]^r[oe],D=s[H>>>24]<<24^s[Y>>16&255]<<16^s[M>>8&255]<<8^s[F&255]^r[oe+1],R=s[Y>>>24]<<24^s[M>>16&255]<<16^s[F>>8&255]<<8^s[H&255]^r[oe+2],$=s[M>>>24]<<24^s[F>>16&255]<<16^s[H>>8&255]<<8^s[Y&255]^r[oe+3],L[t]=he(I^A),L[t+1]=he($^b),L[t+2]=he(R^v),L[t+3]=he(D^x),A=q,b=ae,v=j,x=se,t=t+4}return L.buffer}}const qu=16;class dr{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch{}this.subtle===null&&(this.useSoftware=!0)}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const n=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?Ku(n):n}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,n){return this.useSoftware?new Promise((i,r)=>{this.softwareDecrypt(new Uint8Array(e),t,n);const s=this.flush();s?i(s.buffer):r(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,n)}softwareDecrypt(e,t,n){const{currentIV:i,currentResult:r,remainderData:s}=this;this.logOnce("JS AES decrypt"),s&&(e=Ge(s,e),this.remainderData=null);const o=this.getValidChunk(e);if(!o.length)return null;i&&(n=i);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new Hu),l.expandKey(t);const d=r;return this.currentResult=l.decrypt(o.buffer,0,n),this.currentIV=bt(o,-16).buffer,d||null}webCryptoDecrypt(e,t,n){const i=this.subtle;return(this.key!==t||!this.fastAesKey)&&(this.key=t,this.fastAesKey=new Gu(i,t)),this.fastAesKey.expandKey().then(r=>i?(this.logOnce("WebCrypto AES decrypt"),new $u(i,new Uint8Array(n)).decrypt(e.buffer,r)):Promise.reject(new Error("web crypto not initialized"))).catch(r=>(B.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`),this.onWebCryptoError(e,t,n)))}onWebCryptoError(e,t,n){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,n);const i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const n=e.length-e.length%qu;return n!==e.length&&(t=bt(e,0,n),this.remainderData=bt(e,n)),t}logOnce(e){this.logEnabled&&(B.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const Vu={toString:function(a){let e="";const t=a.length;for(let n=0;n<t;n++)e+=`[${a.start(n).toFixed(3)}-${a.end(n).toFixed(3)}]`;return e}},K={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class cr extends Bu{constructor(e,t,n,i,r){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=K.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=r,this.logPrefix=i,this.log=B.log.bind(B,`${i}:`),this.warn=B.warn.bind(B,`${i}:`),this.hls=e,this.fragmentLoader=new Uu(e.config),this.keyLoader=n,this.fragmentTracker=t,this.config=e.config,this.decrypter=new dr(e.config),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=K.STOPPED}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const n=t.partList;if(n!=null&&n.length){const r=n[n.length-1];return ve.isBuffered(this.media,r.start+r.duration/2)}const i=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(i)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}onMediaAttached(e,t){const n=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),n.addEventListener("seeking",this.onvseeking),n.addEventListener("ended",this.onvended);const i=this.config;this.levels&&i.autoStartLoad&&this.state===K.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:n,mediaBuffer:i,state:r}=this,s=n?n.currentTime:0,o=ve.bufferInfo(i||n,s,e.maxBufferHole);if(this.log(`media seeking to ${J(s)?s.toFixed(3):s}, state: ${r}`),this.state===K.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,d=t.start-l,c=t.start+t.duration+l;if(!o.len||c<o.start||d>o.end){const u=s>c;(s<d||u)&&(u&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}n&&(this.fragmentTracker.removeFragmentsInRange(s,1/0,this.playlistType,!0),this.lastCurrentTime=s),!this.loadedmetadata&&!o.len&&(this.nextLoadPosition=this.startPosition=s),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),this.stopLoad(),super.onHandlerDestroying(),this.hls=null}onHandlerDestroyed(){this.state=K.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,n){this._loadFragForPlayback(e,t,n)}_loadFragForPlayback(e,t,n){const i=r=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${r.part?" p: "+r.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(r)};this._doFragLoad(e,t,n,i).then(r=>{if(!r)return;const s=this.state;if(this.fragContextChanged(e)){(s===K.FRAG_LOADING||!this.fragCurrent&&s===K.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=K.IDLE);return}"payload"in r&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(T.FRAG_LOADED,r)),this._handleFragmentLoadComplete(r)}).catch(r=>{this.state===K.STOPPED||this.state===K.ERROR||(this.warn(r),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:n}=this;if(n.getState(e)===De.APPENDING){const r=e.type,s=this.getFwdBufferInfo(this.mediaBuffer,r),o=Math.max(e.duration,s?s.len:this.config.maxBufferLength);this.reduceMaxBufferLength(o)&&n.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?n.removeAllFragments():n.hasParts(e.type)&&(n.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),n.getState(e)===De.PARTIAL&&n.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}flushMainBuffer(e,t,n=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:n};this.hls.trigger(T.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(n=>{if(!n||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return n}).then(n=>{const{hls:i}=this,{payload:r}=n,s=e.decryptdata;if(r&&r.byteLength>0&&s!=null&&s.key&&s.iv&&s.method==="AES-128"){const o=self.performance.now();return this.decrypter.decrypt(new Uint8Array(r),s.key.buffer,s.iv.buffer).catch(l=>{throw i.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const d=self.performance.now();return i.trigger(T.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:o,tdecrypt:d}}),n.payload=l,this.completeInitSegmentLoad(n)})}return this.completeInitSegmentLoad(n)}).catch(n=>{this.state===K.STOPPED||this.state===K.ERROR||(this.warn(n),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const n=e.frag.stats;this.state=K.IDLE,e.frag.data=new Uint8Array(e.payload),n.parsing.start=n.buffering.start=self.performance.now(),n.parsing.end=n.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){var n,i,r,s;const o=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===ie.MAIN?"level":"track"} ${e.level} (frag:[${((n=e.startPTS)!=null?n:NaN).toFixed(3)}-${((i=e.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${o?Vu.toString(ve.getBuffered(o)):"(detached)"})`),e.sn!=="initSegment"){var l;if(e.type!==ie.SUBTITLE){const c=e.elementaryStreams;if(!Object.keys(c).some(u=>!!c[u])){this.state=K.IDLE;return}}const d=(l=this.levels)==null?void 0:l[e.level];d!=null&&d.fragmentError&&(this.log(`Resetting level fragment error count of ${d.fragmentError} on frag buffered`),d.fragmentError=0)}this.state=K.IDLE,o&&(!this.loadedmetadata&&e.type==ie.MAIN&&o.buffered.length&&((r=this.fragCurrent)==null?void 0:r.sn)===((s=this.fragPrevious)==null?void 0:s.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:n,part:i,partsLoaded:r}=e,s=!r||r.length===0||r.some(l=>!l),o=new lr(n.level,n.sn,n.stats.chunkCount+1,0,i?i.index:-1,!s);t.flush(o)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,n=null,i){var r;const s=t==null?void 0:t.details;if(!this.levels||!s)throw new Error(`frag load aborted, missing level${s?"":" detail"}s`);let o=null;if(e.encrypted&&!((r=e.decryptdata)!=null&&r.key)?(this.log(`Loading key for ${e.sn} of [${s.startSN}-${s.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=K.KEY_LOADING,this.fragCurrent=e,o=this.keyLoader.load(e).then(c=>{if(!this.fragContextChanged(c.frag))return this.hls.trigger(T.KEY_LOADED,c),this.state===K.KEY_LOADING&&(this.state=K.IDLE),c}),this.hls.trigger(T.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(o=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&s.encryptedFragments.length&&this.keyLoader.loadClear(e,s.encryptedFragments),n=Math.max(e.start,n||0),this.config.lowLatencyMode&&e.sn!=="initSegment"){const c=s.partList;if(c&&i){n>e.end&&s.fragmentHint&&(e=s.fragmentHint);const u=this.getNextPart(c,e,n);if(u>-1){const h=c[u];this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${s.startSN}-${s.endSN}] parts [0-${u}-${c.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(n.toFixed(3))}`),this.nextLoadPosition=h.start+h.duration,this.state=K.FRAG_LOADING;let A;return o?A=o.then(b=>!b||this.fragContextChanged(b.frag)?null:this.doFragPartsLoad(e,h,t,i)).catch(b=>this.handleFragLoadError(b)):A=this.doFragPartsLoad(e,h,t,i).catch(b=>this.handleFragLoadError(b)),this.hls.trigger(T.FRAG_LOADING,{frag:e,part:h,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):A}else if(!e.url||this.loadedEndOfParts(c,n))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${s?"of ["+s.startSN+"-"+s.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(n.toFixed(3))}`),J(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=K.FRAG_LOADING;const l=this.config.progressive;let d;return l&&o?d=o.then(c=>!c||this.fragContextChanged(c==null?void 0:c.frag)?null:this.fragmentLoader.load(e,i)).catch(c=>this.handleFragLoadError(c)):d=Promise.all([this.fragmentLoader.load(e,l?i:void 0),o]).then(([c])=>(!l&&c&&i&&i(c),c)).catch(c=>this.handleFragLoadError(c)),this.hls.trigger(T.FRAG_LOADING,{frag:e,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):d}doFragPartsLoad(e,t,n,i){return new Promise((r,s)=>{var o;const l=[],d=(o=n.details)==null?void 0:o.partList,c=u=>{this.fragmentLoader.loadPart(e,u,i).then(h=>{l[u.index]=h;const A=h.part;this.hls.trigger(T.FRAG_LOADED,h);const b=Ps(n,e.sn,u.index+1)||Ka(d,e.sn,u.index+1);if(b)c(b);else return r({frag:e,part:A,partsLoaded:l})}).catch(s)};c(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===O.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(T.ERROR,t)}else this.hls.trigger(T.ERROR,{type:re.OTHER_ERROR,details:O.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==K.PARSING){!this.fragCurrent&&this.state!==K.STOPPED&&this.state!==K.ERROR&&(this.state=K.IDLE);return}const{frag:n,part:i,level:r}=t,s=self.performance.now();n.stats.parsing.end=s,i&&(i.stats.parsing.end=s),this.updateLevelTiming(n,i,r,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:n}=this,{level:i,sn:r,part:s}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`),null;const o=t[i],l=s>-1?Ps(o,r,s):null,d=l?l.fragment:pu(o,r,n);return d?(n&&n!==d&&(d.stats=n.stats),{frag:d,part:l,level:o}):null}bufferFragmentData(e,t,n,i,r){var s;if(!e||this.state!==K.PARSING)return;const{data1:o,data2:l}=e;let d=o;if(o&&l&&(d=Ge(o,l)),!((s=d)!=null&&s.length))return;const c={type:e.type,frag:t,part:n,chunkMeta:i,parent:t.type,data:d};if(this.hls.trigger(T.BUFFER_APPENDING,c),e.dropped&&e.independent&&!n){if(r)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!ve.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const n=t.currentTime,i=ve.bufferInfo(t,n,0),r=e.duration,s=Math.min(this.config.maxFragLookUpTolerance*2,r*.25),o=Math.max(Math.min(e.start-s,i.end-s),n+s);e.start-o>s&&this.flushMainBuffer(o,e.start)}getFwdBufferInfo(e,t){const n=this.getLoadPosition();return J(n)?this.getFwdBufferInfoAtPos(e,n,t):null}getFwdBufferInfoAtPos(e,t,n){const{config:{maxBufferHole:i}}=this,r=ve.bufferInfo(e,t,i);if(r.len===0&&r.nextStart!==void 0){const s=this.fragmentTracker.getBufferedFrag(t,n);if(s&&r.nextStart<s.end)return ve.bufferInfo(e,t,Math.max(r.nextStart,i))}return r}getMaxBufferLength(e){const{config:t}=this;let n;return e?n=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):n=t.maxBufferLength,Math.min(n,t.maxMaxBufferLength)}reduceMaxBufferLength(e){const t=this.config,n=e||t.maxBufferLength;return t.maxMaxBufferLength>=n?(t.maxMaxBufferLength/=2,this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`),!0):!1}getAppendedFrag(e,t=ie.MAIN){const n=this.fragmentTracker.getAppendedFrag(e,ie.MAIN);return n&&"fragment"in n?n.fragment:n}getNextFragment(e,t){const n=t.fragments,i=n.length;if(!i)return null;const{config:r}=this,s=n[0].start;let o;if(t.live){const l=r.initialLiveManifestSize;if(i<l)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`),null;(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<s)&&(o=this.getInitialLiveFragment(t,n),this.startPosition=this.nextLoadPosition=o?this.hls.liveSyncPosition||o.start:e)}else e<=s&&(o=n[0]);if(!o){const l=r.lowLatencyMode?t.partEnd:t.fragmentEnd;o=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(o)}isLoopLoading(e,t){const n=this.fragmentTracker.getState(e);return(n===De.OK||n===De.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,n,i,r){const s=e.gap,o=this.getNextFragment(this.nextLoadPosition,t);if(o===null)return o;if(e=o,s&&e&&!e.gap&&n.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,n.nextStart,i);if(l!==null&&n.len+l.len>=r)return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,n){let i=-1,r=!1,s=!0;for(let o=0,l=e.length;o<l;o++){const d=e[o];if(s=s&&!d.independent,i>-1&&n<d.start)break;const c=d.loaded;c?i=-1:(r||d.independent||s)&&d.fragment===t&&(i=o),r=c}return i}loadedEndOfParts(e,t){const n=e[e.length-1];return n&&t>n.start&&n.loaded}getInitialLiveFragment(e,t){const n=this.fragPrevious;let i=null;if(n){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),i=gu(t,n.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const r=n.sn+1;if(r>=e.startSN&&r<=e.endSN){const s=t[r-e.startSN];n.cc===s.cc&&(i=s,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=Au(t,n.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const r=this.hls.liveSyncPosition;r!==null&&(i=this.getFragmentAtPosition(r,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,n){const{config:i}=this;let{fragPrevious:r}=this,{fragments:s,endSN:o}=n;const{fragmentHint:l}=n,d=i.maxFragLookUpTolerance,c=n.partList,u=!!(i.lowLatencyMode&&c!=null&&c.length&&l);u&&l&&!this.bitrateTest&&(s=s.concat(l),o=l.sn);let h;if(e<t){const A=e>t-d?0:d;h=Zn(r,s,e,A)}else h=s[s.length-1];if(h){const A=h.sn-n.startSN,b=this.fragmentTracker.getState(h);if((b===De.OK||b===De.PARTIAL&&h.gap)&&(r=h),r&&h.sn===r.sn&&(!u||c[0].fragment.sn>h.sn)&&r&&h.level===r.level){const x=s[A+1];h.sn<o&&this.fragmentTracker.getState(x)!==De.OK?h=x:h=null}}return h}synchronizeToLiveEdge(e){const{config:t,media:n}=this;if(!n)return;const i=this.hls.liveSyncPosition,r=n.currentTime,s=e.fragments[0].start,o=e.edge,l=r>=s-t.maxFragLookUpTolerance&&r<=o;if(i!==null&&n.duration>i&&(r<i||!l)){const d=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&n.readyState<4||r<o-d)&&(this.loadedmetadata||(this.nextLoadPosition=i),n.readyState&&(this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`),n.currentTime=i))}}alignPlaylists(e,t,n){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const r=e.fragments[0].start,s=!t,o=e.alignedSliding&&J(r);if(s||!o&&!r){const{fragPrevious:l}=this;Mu(l,n,e);const d=e.fragments[0].start;return this.log(`Live playlist sliding: ${d.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${l?l.sn:"na"} fragments: ${i}`),d}return r}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let n=this.startPosition;if(n<t&&(n=-1),n===-1||this.lastCurrentTime===-1){const i=this.startTimeOffset!==null,r=i?this.startTimeOffset:e.startTimeOffset;r!==null&&J(r)?(n=t+r,r<0&&(n+=e.totalduration),n=Math.min(Math.max(t,n),t+e.totalduration),this.log(`Start time offset ${r} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${n}`),this.startPosition=n):e.live?n=this.hls.liveSyncPosition||t:this.startPosition=n=0,this.lastCurrentTime=n}this.nextLoadPosition=n}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==K.FRAG_LOADING_WAITING_RETRY)&&(this.state=K.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const c=this.getCurrentContext(t.chunkMeta);c&&(t.frag=c.frag)}const n=t.frag;if(!n||n.type!==e||!this.levels)return;if(this.fragContextChanged(n)){var i;this.warn(`Frag load error must match current frag to retry ${n.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const r=t.details===O.FRAG_GAP;r&&this.fragmentTracker.fragBuffered(n,!0);const s=t.errorAction,{action:o,retryCount:l=0,retryConfig:d}=s||{};if(s&&o===Pe.RetryRequest&&d){this.resetStartWhenNotLoaded(this.levelLastLoaded);const c=ar(d,l);this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${l+1}/${d.maxNumRetry} in ${c}ms`),s.resolved=!0,this.retryDate=self.performance.now()+c,this.state=K.FRAG_LOADING_WAITING_RETRY}else if(d&&s)if(this.resetFragmentErrors(e),l<d.maxNumRetry)!r&&o!==Pe.RemoveAlternatePermanently&&(s.resolved=!0);else{B.warn(`${t.details} reached or exceeded max retry (${l})`);return}else(s==null?void 0:s.action)===Pe.SendAlternateToPenaltyBox?this.state=K.WAITING_LEVEL:this.state=K.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===K.PARSING||this.state===K.PARSED){const t=e.parent,n=this.getFwdBufferInfo(this.mediaBuffer,t),i=n&&n.len>.5;i&&this.reduceMaxBufferLength(n.len);const r=!i;return r&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`),e.frag&&(this.fragmentTracker.removeFragment(e.frag),this.nextLoadPosition=e.frag.start),this.resetLoadingState(),r}return!1}resetFragmentErrors(e){e===ie.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==K.STOPPED&&(this.state=K.IDLE)}afterBufferFlushed(e,t,n){if(!e)return;const i=ve.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,n),this.state===K.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=K.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,n,i){var r;const s=n.details;if(!s){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,d)=>{const c=e.elementaryStreams[d];if(c){const u=c.endPTS-c.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${d} duration reliably (${u})`),l||!1;const h=i?0:$a(s,e,c.startPTS,c.endPTS,c.startDTS,c.endDTS);return this.hls.trigger(T.LEVEL_PTS_UPDATED,{details:s,level:n,drift:h,type:d,frag:e,start:c.startPTS,end:c.endPTS}),!0}return l},!1)&&((r=this.transmuxer)==null?void 0:r.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);if(n.fragmentError===0&&(n.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)),this.warn(l.message),this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${n.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=K.PARSED,this.hls.trigger(T.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.resetTransmuxer(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}class Ya{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let n;if(e.length)e.length===1?n=e[0]:n=zu(e,t);else return new Uint8Array(0);return this.reset(),n}reset(){this.chunks.length=0,this.dataLength=0}}function zu(a,e){const t=new Uint8Array(e);let n=0;for(let i=0;i<a.length;i++){const r=a[i];t.set(r,n),n+=r.length}return t}function Yu(){return typeof __HLS_WORKER_BUNDLE__=="function"}function Wu(){const a=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(a);return{worker:new self.Worker(e),objectURL:e}}function ju(a){const e=new self.URL(a,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function Qe(a="",e=9e4){return{type:a,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class ur{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,n,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,n){}demux(e,t){this.cachedData&&(e=Ge(this.cachedData,e),this.cachedData=null);let n=pn(e,0),i=n?n.length:0,r;const s=this._audioTrack,o=this._id3Track,l=n?sr(n):void 0,d=e.length;for((this.basePTS===null||this.frameIndex===0&&J(l))&&(this.basePTS=Qu(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),n&&n.length>0&&o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:Ve.audioId3,duration:Number.POSITIVE_INFINITY});i<d;){if(this.canParse(e,i)){const c=this.appendFrame(s,e,i);c?(this.frameIndex++,this.lastPTS=c.sample.pts,i+=c.length,r=i):i=d}else bc(e,i)?(n=pn(e,i),o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:Ve.audioId3,duration:Number.POSITIVE_INFINITY}),i+=n.length,r=i):i++;if(i===d&&r!==d){const c=bt(e,r);this.cachedData?this.cachedData=Ge(this.cachedData,c):this.cachedData=c}}return{audioTrack:s,videoTrack:Qe(),id3Track:o,textTrack:Qe()}}demuxSampleAes(e,t,n){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:Qe(),id3Track:this._id3Track,textTrack:Qe()}}destroy(){}}const Qu=(a,e,t)=>{if(J(a))return a*90;const n=t?t.baseTime*9e4/t.timescale:0;return e*9e4+n};function Xu(a,e,t,n){let i,r,s,o;const l=navigator.userAgent.toLowerCase(),d=n,c=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];i=((e[t+2]&192)>>>6)+1;const u=(e[t+2]&60)>>>2;if(u>c.length-1){const h=new Error(`invalid ADTS sampling index:${u}`);a.emit(T.ERROR,T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!0,error:h,reason:h.message});return}return s=(e[t+2]&1)<<2,s|=(e[t+3]&192)>>>6,B.log(`manifest codec:${n}, ADTS type:${i}, samplingIndex:${u}`),/firefox/i.test(l)?u>=6?(i=5,o=new Array(4),r=u-3):(i=2,o=new Array(2),r=u):l.indexOf("android")!==-1?(i=2,o=new Array(2),r=u):(i=5,o=new Array(4),n&&(n.indexOf("mp4a.40.29")!==-1||n.indexOf("mp4a.40.5")!==-1)||!n&&u>=6?r=u-3:((n&&n.indexOf("mp4a.40.2")!==-1&&(u>=6&&s===1||/vivaldi/i.test(l))||!n&&s===1)&&(i=2,o=new Array(2)),r=u)),o[0]=i<<3,o[0]|=(u&14)>>1,o[1]|=(u&1)<<7,o[1]|=s<<3,i===5&&(o[1]|=(r&14)>>1,o[2]=(r&1)<<7,o[2]|=8,o[3]=0),{config:o,samplerate:c[u],channelCount:s,codec:"mp4a.40."+i,manifestCodec:d}}function Wa(a,e){return a[e]===255&&(a[e+1]&246)===240}function ja(a,e){return a[e+1]&1?7:9}function hr(a,e){return(a[e+3]&3)<<11|a[e+4]<<3|(a[e+5]&224)>>>5}function Zu(a,e){return e+5<a.length}function ei(a,e){return e+1<a.length&&Wa(a,e)}function Ju(a,e){return Zu(a,e)&&Wa(a,e)&&hr(a,e)<=a.length-e}function eh(a,e){if(ei(a,e)){const t=ja(a,e);if(e+t>=a.length)return!1;const n=hr(a,e);if(n<=t)return!1;const i=e+n;return i===a.length||ei(a,i)}return!1}function Qa(a,e,t,n,i){if(!a.samplerate){const r=Xu(e,t,n,i);if(!r)return;a.config=r.config,a.samplerate=r.samplerate,a.channelCount=r.channelCount,a.codec=r.codec,a.manifestCodec=r.manifestCodec,B.log(`parsed codec:${a.codec}, rate:${r.samplerate}, channels:${r.channelCount}`)}}function Xa(a){return 1024*9e4/a}function th(a,e){const t=ja(a,e);if(e+t<=a.length){const n=hr(a,e)-t;if(n>0)return{headerLength:t,frameLength:n}}}function Za(a,e,t,n,i){const r=Xa(a.samplerate),s=n+i*r,o=th(e,t);let l;if(o){const{frameLength:u,headerLength:h}=o,A=h+u,b=Math.max(0,t+A-e.length);b?(l=new Uint8Array(A-h),l.set(e.subarray(t+h,e.length),0)):l=e.subarray(t+h,t+A);const v={unit:l,pts:s};return b||a.samples.push(v),{sample:v,length:A,missing:b}}const d=e.length-t;return l=new Uint8Array(d),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:s},length:d,missing:-1}}let Dn=null;const nh=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],ih=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],rh=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],sh=[0,1,1,4];function Ja(a,e,t,n,i){if(t+24>e.length)return;const r=eo(e,t);if(r&&t+r.frameLength<=e.length){const s=r.samplesPerFrame*9e4/r.sampleRate,o=n+i*s,l={unit:e.subarray(t,t+r.frameLength),pts:o,dts:o};return a.config=[],a.channelCount=r.channelCount,a.samplerate=r.sampleRate,a.samples.push(l),{sample:l,length:r.frameLength,missing:0}}}function eo(a,e){const t=a[e+1]>>3&3,n=a[e+1]>>1&3,i=a[e+2]>>4&15,r=a[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&r!==3){const s=a[e+2]>>1&1,o=a[e+3]>>6,l=t===3?3-n:n===3?3:4,d=nh[l*14+i-1]*1e3,u=ih[(t===3?0:t===2?1:2)*3+r],h=o===3?1:2,A=rh[t][n],b=sh[n],v=A*8*b,x=Math.floor(A*d/u+s)*b;if(Dn===null){const I=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Dn=I?parseInt(I[1]):0}return!!Dn&&Dn<=87&&n===2&&d>=224e3&&o===0&&(a[e+3]=a[e+3]|128),{sampleRate:u,channelCount:h,frameLength:x,samplesPerFrame:v}}}function fr(a,e){return a[e]===255&&(a[e+1]&224)===224&&(a[e+1]&6)!==0}function to(a,e){return e+1<a.length&&fr(a,e)}function ah(a,e){return fr(a,e)&&4<=a.length-e}function no(a,e){if(e+1<a.length&&fr(a,e)){const n=eo(a,e);let i=4;n!=null&&n.frameLength&&(i=n.frameLength);const r=e+i;return r===a.length||to(a,r)}return!1}class oh extends ur{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=pn(e,0);let n=(t==null?void 0:t.length)||0;if(no(e,n))return!1;for(let i=e.length;n<i;n++)if(eh(e,n))return B.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return Ju(e,t)}appendFrame(e,t,n){Qa(e,this.observer,t,n,e.manifestCodec);const i=Za(e,t,n,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const lh=/\/emsg[-/]ID3/i;class dh{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,n,i){const r=this.videoTrack=Qe("video",1),s=this.audioTrack=Qe("audio",1),o=this.txtTrack=Qe("text",1);if(this.id3Track=Qe("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=Ba(e);if(l.video){const{id:d,timescale:c,codec:u}=l.video;r.id=d,r.timescale=o.timescale=c,r.codec=u}if(l.audio){const{id:d,timescale:c,codec:u}=l.audio;s.id=d,s.timescale=c,s.codec=u}o.id=Ia.text,r.sampleDuration=0,r.duration=s.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return Lc(e)}demux(e,t){this.timeOffset=t;let n=e;const i=this.videoTrack,r=this.txtTrack;if(this.config.progressive){this.remainderData&&(n=Ge(this.remainderData,e));const o=Fc(n);this.remainderData=o.remainder,i.samples=o.valid||new Uint8Array}else i.samples=n;const s=this.extractID3Track(i,t);return r.samples=ms(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:s,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,n=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return n.samples=ms(e,t),{videoTrack:t,audioTrack:Qe(),id3Track:i,textTrack:Qe()}}extractID3Track(e,t){const n=this.id3Track;if(e.samples.length){const i=de(e.samples,["emsg"]);i&&i.forEach(r=>{const s=Uc(r);if(lh.test(s.schemeIdUri)){const o=J(s.presentationTime)?s.presentationTime/s.timeScale:t+s.presentationTimeDelta/s.timeScale;let l=s.eventDuration===4294967295?Number.POSITIVE_INFINITY:s.eventDuration/s.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const d=s.payload;n.samples.push({data:d,len:d.byteLength,dts:o,pts:o,type:Ve.emsg,duration:l})}})}return n}demuxSampleAes(e,t,n){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}const io=(a,e)=>{let t=0,n=5;e+=n;const i=new Uint32Array(1),r=new Uint32Array(1),s=new Uint8Array(1);for(;n>0;){s[0]=a[e];const o=Math.min(n,8),l=8-o;r[0]=4278190080>>>24+l<<l,i[0]=(s[0]&r[0])>>l,t=t?t<<o|i[0]:i[0],e+=1,n-=o}return t};class ch extends ur{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,n){const i=ro(e,t,n,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=pn(e,0);if(!t)return!1;const n=t.length;return e[n]===11&&e[n+1]===119&&sr(t)!==void 0&&io(e,n)<16}}function ro(a,e,t,n,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const r=e[t+4]>>6;if(r>=3)return-1;const o=[48e3,44100,32e3][r],l=e[t+4]&63,c=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+r]*2;if(t+c>e.length)return-1;const u=e[t+6]>>5;let h=0;u===2?h+=2:(u&1&&u!==1&&(h+=2),u&4&&(h+=2));const A=(e[t+6]<<8|e[t+7])>>12-h&1,v=[2,1,2,3,3,4,4,5][u]+A,x=e[t+5]>>3,w=e[t+5]&7,L=new Uint8Array([r<<6|x<<1|w>>2,(w&3)<<6|u<<3|A<<2|l>>4,l<<4&224]),I=1536/o*9e4,D=n+i*I,R=e.subarray(t,t+c);return a.config=L,a.channelCount=v,a.samplerate=o,a.samples.push({unit:R,pts:D}),c}class uh{constructor(){this.VideoSample=null}createVideoSample(e,t,n,i){return{key:e,frame:!1,pts:t,dts:n,units:[],debug:i,length:0}}getLastNalUnit(e){var t;let n=this.VideoSample,i;if((!n||n.units.length===0)&&(n=e[e.length-1]),(t=n)!=null&&t.units){const r=n.units;i=r[r.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const n=t.samples,i=n.length;if(i){const r=n[i-1];e.pts=r.pts,e.dts=r.dts}else{t.dropped++;return}}t.samples.push(e)}e.debug.length&&B.log(e.pts+"/"+e.dts+":"+e.debug)}}class Hs{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,n=e.byteLength-t,i=new Uint8Array(4),r=Math.min(4,t);if(r===0)throw new Error("no bytes available");i.set(e.subarray(n,n+r)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=r*8,this.bytesAvailable-=r}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const n=this.word>>>32-t;if(e>32&&B.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?n<<t|this.readBits(t):n}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,n=8,i;for(let r=0;r<e;r++)n!==0&&(i=this.readEG(),n=(t+i+256)%256),t=n===0?t:n}readSPS(){let e=0,t=0,n=0,i=0,r,s,o;const l=this.readUByte.bind(this),d=this.readBits.bind(this),c=this.readUEG.bind(this),u=this.readBoolean.bind(this),h=this.skipBits.bind(this),A=this.skipEG.bind(this),b=this.skipUEG.bind(this),v=this.skipScalingList.bind(this);l();const x=l();if(d(5),h(3),l(),b(),x===100||x===110||x===122||x===244||x===44||x===83||x===86||x===118||x===128){const $=c();if($===3&&h(1),b(),b(),h(1),u())for(s=$!==3?8:12,o=0;o<s;o++)u()&&(o<6?v(16):v(64))}b();const w=c();if(w===0)c();else if(w===1)for(h(1),A(),A(),r=c(),o=0;o<r;o++)A();b(),h(1);const L=c(),I=c(),D=d(1);D===0&&h(1),h(1),u()&&(e=c(),t=c(),n=c(),i=c());let R=[1,1];if(u()&&u())switch(l()){case 1:R=[1,1];break;case 2:R=[12,11];break;case 3:R=[10,11];break;case 4:R=[16,11];break;case 5:R=[40,33];break;case 6:R=[24,11];break;case 7:R=[20,11];break;case 8:R=[32,11];break;case 9:R=[80,33];break;case 10:R=[18,11];break;case 11:R=[15,11];break;case 12:R=[64,33];break;case 13:R=[160,99];break;case 14:R=[4,3];break;case 15:R=[3,2];break;case 16:R=[2,1];break;case 255:{R=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((L+1)*16-e*2-t*2),height:(2-D)*(I+1)*16-(D?2:4)*(n+i),pixelRatio:R}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class hh extends uh{parseAVCPES(e,t,n,i,r){const s=this.parseAVCNALu(e,n.data);let o=this.VideoSample,l,d=!1;n.data=null,o&&s.length&&!e.audFound&&(this.pushAccessUnit(o,e),o=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts,"")),s.forEach(c=>{var u;switch(c.type){case 1:{let v=!1;l=!0;const x=c.data;if(d&&x.length>4){const w=new Hs(x).readSliceType();(w===2||w===4||w===7||w===9)&&(v=!0)}if(v){var h;(h=o)!=null&&h.frame&&!o.key&&(this.pushAccessUnit(o,e),o=this.VideoSample=null)}o||(o=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts,"")),o.frame=!0,o.key=v;break}case 5:l=!0,(u=o)!=null&&u.frame&&!o.key&&(this.pushAccessUnit(o,e),o=this.VideoSample=null),o||(o=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts,"")),o.key=!0,o.frame=!0;break;case 6:{l=!0,Pa(c.data,1,n.pts,t.samples);break}case 7:{var A,b;l=!0,d=!0;const v=c.data,w=new Hs(v).readSPS();if(!e.sps||e.width!==w.width||e.height!==w.height||((A=e.pixelRatio)==null?void 0:A[0])!==w.pixelRatio[0]||((b=e.pixelRatio)==null?void 0:b[1])!==w.pixelRatio[1]){e.width=w.width,e.height=w.height,e.pixelRatio=w.pixelRatio,e.sps=[v],e.duration=r;const L=v.subarray(1,4);let I="avc1.";for(let D=0;D<3;D++){let R=L[D].toString(16);R.length<2&&(R="0"+R),I+=R}e.codec=I}break}case 8:l=!0,e.pps=[c.data];break;case 9:l=!0,e.audFound=!0,o&&this.pushAccessUnit(o,e),o=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts,"");break;case 12:l=!0;break;default:l=!1,o&&(o.debug+="unknown NAL "+c.type+" ");break}o&&l&&o.units.push(c)}),i&&o&&(this.pushAccessUnit(o,e),this.VideoSample=null)}parseAVCNALu(e,t){const n=t.byteLength;let i=e.naluState||0;const r=i,s=[];let o=0,l,d,c,u=-1,h=0;for(i===-1&&(u=0,h=t[0]&31,i=0,o=1);o<n;){if(l=t[o++],!i){i=l?0:1;continue}if(i===1){i=l?0:2;continue}if(!l)i=3;else if(l===1){if(d=o-i-1,u>=0){const A={data:t.subarray(u,d),type:h};s.push(A)}else{const A=this.getLastNalUnit(e.samples);A&&(r&&o<=4-r&&A.state&&(A.data=A.data.subarray(0,A.data.byteLength-r)),d>0&&(A.data=Ge(A.data,t.subarray(0,d)),A.state=0))}o<n?(c=t[o]&31,u=o,h=c,i=0):i=-1}else i=0}if(u>=0&&i>=0){const A={data:t.subarray(u,n),type:h,state:i};s.push(A)}if(s.length===0){const A=this.getLastNalUnit(e.samples);A&&(A.data=Ge(A.data,t))}return e.naluState=i,s}}class fh{constructor(e,t,n){this.keyData=void 0,this.decrypter=void 0,this.keyData=n,this.decrypter=new dr(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,n){const i=e[t].unit;if(i.length<=16)return;const r=i.subarray(16,i.length-i.length%16),s=r.buffer.slice(r.byteOffset,r.byteOffset+r.length);this.decryptBuffer(s).then(o=>{const l=new Uint8Array(o);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,n)})}decryptAacSamples(e,t,n){for(;;t++){if(t>=e.length){n();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,n),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,n=new Int8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)n.set(e.subarray(r,r+16),i);return n}getAvcDecryptedUnit(e,t){const n=new Uint8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)e.set(n.subarray(i,i+16),r);return e}decryptAvcSample(e,t,n,i,r){const s=Oa(r.data),o=this.getAvcEncryptedData(s);this.decryptBuffer(o.buffer).then(l=>{r.data=this.getAvcDecryptedUnit(s,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,n+1,i)})}decryptAvcSamples(e,t,n,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,n=0){if(t>=e.length){i();return}const r=e[t].units;for(;!(n>=r.length);n++){const s=r[n];if(!(s.data.length<=48||s.type!==1&&s.type!==5)&&(this.decryptAvcSample(e,t,n,i,s),!this.decrypter.isSync()))return}}}}const Re=188;class ut{constructor(e,t,n){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.videoParser=new hh}static probe(e){const t=ut.syncOffset(e);return t>0&&B.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length;let n=Math.min(Re*5,t-Re)+1,i=0;for(;i<n;){let r=!1,s=-1,o=0;for(let l=i;l<t;l+=Re)if(e[l]===71&&(t-l===Re||e[l+Re]===71)){if(o++,s===-1&&(s=l,s!==0&&(n=Math.min(s+Re*99,e.length-Re)+1)),r||(r=ji(e,l)===0),r&&o>1&&(s===0&&o>2||l+Re>n))return s}else{if(o)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:Ia[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,n,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=ut.createTrack("video"),this._audioTrack=ut.createTrack("audio",i),this._id3Track=ut.createTrack("id3"),this._txtTrack=ut.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=n,this._duration=i}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:n}=this;e&&(e.pesData=null),t&&(t.pesData=null),n&&(n.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,n=!1,i=!1){n||(this.sampleAes=null);let r;const s=this._videoTrack,o=this._audioTrack,l=this._id3Track,d=this._txtTrack;let c=s.pid,u=s.pesData,h=o.pid,A=l.pid,b=o.pesData,v=l.pesData,x=null,w=this.pmtParsed,L=this._pmtId,I=e.length;if(this.remainderData&&(e=Ge(this.remainderData,e),I=e.length,this.remainderData=null),I<Re&&!i)return this.remainderData=e,{audioTrack:o,videoTrack:s,id3Track:l,textTrack:d};const D=Math.max(0,ut.syncOffset(e));I-=(I-D)%Re,I<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,I,e.buffer.byteLength-I));let R=0;for(let F=D;F<I;F+=Re)if(e[F]===71){const H=!!(e[F+1]&64),Y=ji(e,F),M=(e[F+3]&48)>>4;let q;if(M>1){if(q=F+5+e[F+4],q===F+Re)continue}else q=F+4;switch(Y){case c:H&&(u&&(r=Rt(u))&&this.videoParser.parseAVCPES(s,d,r,!1,this._duration),u={data:[],size:0}),u&&(u.data.push(e.subarray(q,F+Re)),u.size+=F+Re-q);break;case h:if(H){if(b&&(r=Rt(b)))switch(o.segmentCodec){case"aac":this.parseAACPES(o,r);break;case"mp3":this.parseMPEGPES(o,r);break;case"ac3":this.parseAC3PES(o,r);break}b={data:[],size:0}}b&&(b.data.push(e.subarray(q,F+Re)),b.size+=F+Re-q);break;case A:H&&(v&&(r=Rt(v))&&this.parseID3PES(l,r),v={data:[],size:0}),v&&(v.data.push(e.subarray(q,F+Re)),v.size+=F+Re-q);break;case 0:H&&(q+=e[q]+1),L=this._pmtId=ph(e,q);break;case L:{H&&(q+=e[q]+1);const ae=mh(e,q,this.typeSupported,n);c=ae.videoPid,c>0&&(s.pid=c,s.segmentCodec=ae.segmentVideoCodec),h=ae.audioPid,h>0&&(o.pid=h,o.segmentCodec=ae.segmentAudioCodec),A=ae.id3Pid,A>0&&(l.pid=A),x!==null&&!w&&(B.warn(`MPEG-TS PMT found at ${F} after unknown PID '${x}'. Backtracking to sync byte @${D} to parse all TS packets.`),x=null,F=D-188),w=this.pmtParsed=!0;break}case 17:case 8191:break;default:x=Y;break}}else R++;if(R>0){const F=new Error(`Found ${R} TS packet/s that do not start with 0x47`);this.observer.emit(T.ERROR,T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,error:F,reason:F.message})}s.pesData=u,o.pesData=b,l.pesData=v;const $={audioTrack:o,videoTrack:s,id3Track:l,textTrack:d};return i&&this.extractRemainingSamples($),$}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:n,id3Track:i,textTrack:r}=e,s=n.pesData,o=t.pesData,l=i.pesData;let d;if(s&&(d=Rt(s))?(this.videoParser.parseAVCPES(n,r,d,!0,this._duration),n.pesData=null):n.pesData=s,o&&(d=Rt(o))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,d);break;case"mp3":this.parseMPEGPES(t,d);break;case"ac3":this.parseAC3PES(t,d);break}t.pesData=null}else o!=null&&o.size&&B.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=o;l&&(d=Rt(l))?(this.parseID3PES(i,d),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,n){const i=this.demux(e,n,!0,!this.config.progressive),r=this.sampleAes=new fh(this.observer,this.config,t);return this.decrypt(i,r)}decrypt(e,t){return new Promise(n=>{const{audioTrack:i,videoTrack:r}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{r.samples?t.decryptAvcSamples(r.samples,0,0,()=>{n(e)}):n(e)}):r.samples&&t.decryptAvcSamples(r.samples,0,0,()=>{n(e)})})}destroy(){this._duration=0}parseAACPES(e,t){let n=0;const i=this.aacOverFlow;let r=t.data;if(i){this.aacOverFlow=null;const u=i.missing,h=i.sample.unit.byteLength;if(u===-1)r=Ge(i.sample.unit,r);else{const A=h-u;i.sample.unit.set(r.subarray(0,u),A),e.samples.push(i.sample),n=i.missing}}let s,o;for(s=n,o=r.length;s<o-1&&!ei(r,s);s++);if(s!==n){let u;const h=s<o-1;h?u=`AAC PES did not start with ADTS header,offset:${s}`:u="No ADTS header found in AAC PES";const A=new Error(u);if(B.warn(`parsing error: ${u}`),this.observer.emit(T.ERROR,T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,levelRetry:h,error:A,reason:u}),!h)return}Qa(e,this.observer,r,s,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const u=Xa(e.samplerate);l=i.sample.pts+u}else{B.warn("[tsdemuxer]: AAC PES unknown PTS");return}let d=0,c;for(;s<o;)if(c=Za(e,r,s,l,d),s+=c.length,c.missing){this.aacOverFlow=c;break}else for(d++;s<o-1&&!ei(r,s);s++);}parseMPEGPES(e,t){const n=t.data,i=n.length;let r=0,s=0;const o=t.pts;if(o===void 0){B.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;s<i;)if(to(n,s)){const l=Ja(e,n,s,o,r);if(l)s+=l.length,r++;else break}else s++}parseAC3PES(e,t){{const n=t.data,i=t.pts;if(i===void 0){B.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const r=n.length;let s=0,o=0,l;for(;o<r&&(l=ro(e,n,o,i,s++))>0;)o+=l}}parseID3PES(e,t){if(t.pts===void 0){B.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const n=we({},t,{type:this._videoTrack?Ve.emsg:Ve.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(n)}}function ji(a,e){return((a[e+1]&31)<<8)+a[e+2]}function ph(a,e){return(a[e+10]&31)<<8|a[e+11]}function mh(a,e,t,n){const i={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},r=(a[e+1]&15)<<8|a[e+2],s=e+3+r-4,o=(a[e+10]&15)<<8|a[e+11];for(e+=12+o;e<s;){const l=ji(a,e),d=(a[e+3]&15)<<8|a[e+4];switch(a[e]){case 207:if(!n){Ii("ADTS AAC");break}case 15:i.audioPid===-1&&(i.audioPid=l);break;case 21:i.id3Pid===-1&&(i.id3Pid=l);break;case 219:if(!n){Ii("H.264");break}case 27:i.videoPid===-1&&(i.videoPid=l,i.segmentVideoCodec="avc");break;case 3:case 4:!t.mpeg&&!t.mp3?B.log("MPEG audio found, not supported in this browser"):i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="mp3");break;case 193:if(!n){Ii("AC-3");break}case 129:t.ac3?i.audioPid===-1&&(i.audioPid=l,i.segmentAudioCodec="ac3"):B.log("AC-3 audio found, not supported in this browser");break;case 6:if(i.audioPid===-1&&d>0){let c=e+5,u=d;for(;u>2;){switch(a[c]){case 106:t.ac3!==!0?B.log("AC-3 audio found, not supported in this browser for now"):(i.audioPid=l,i.segmentAudioCodec="ac3");break}const A=a[c+1]+2;c+=A,u-=A}}break;case 194:case 135:B.warn("Unsupported EC-3 in M2TS found");break;case 36:B.warn("Unsupported HEVC in M2TS found");break}e+=d+5}return i}function Ii(a){B.log(`${a} with AES-128-CBC encryption found in unencrypted stream`)}function Rt(a){let e=0,t,n,i,r,s;const o=a.data;if(!a||a.size===0)return null;for(;o[0].length<19&&o.length>1;)o[0]=Ge(o[0],o[1]),o.splice(1,1);if(t=o[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(n=(t[4]<<8)+t[5],n&&n>a.size-6)return null;const d=t[7];d&192&&(r=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,d&64?(s=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,r-s>60*9e4&&(B.warn(`${Math.round((r-s)/9e4)}s delta between PTS and DTS, align them`),r=s)):s=r),i=t[8];let c=i+9;if(a.size<=c)return null;a.size-=c;const u=new Uint8Array(a.size);for(let h=0,A=o.length;h<A;h++){t=o[h];let b=t.byteLength;if(c)if(c>b){c-=b;continue}else t=t.subarray(c),b-=c,c=0;u.set(t,e),e+=b}return n&&(n-=i+3),{data:u,pts:r,dts:s,len:n}}return null}class gh extends ur{resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=pn(e,0);let n=(t==null?void 0:t.length)||0;if(t&&e[n]===11&&e[n+1]===119&&sr(t)!==void 0&&io(e,n)<=16)return!1;for(let i=e.length;n<i;n++)if(no(e,n))return B.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return ah(e,t)}appendFrame(e,t,n){if(this.basePTS!==null)return Ja(e,t,n,this.basePTS,this.frameIndex)}}class qs{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const ct=Math.pow(2,32)-1;class _{static init(){_.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in _.types)_.types.hasOwnProperty(e)&&(_.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);_.HDLR_TYPES={video:t,audio:n};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),r=new Uint8Array([0,0,0,0,0,0,0,0]);_.STTS=_.STSC=_.STCO=r,_.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),_.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),_.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),_.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);_.FTYP=_.box(_.types.ftyp,s,l,s,o),_.DINF=_.box(_.types.dinf,_.box(_.types.dref,i))}static box(e,...t){let n=8,i=t.length;const r=i;for(;i--;)n+=t[i].byteLength;const s=new Uint8Array(n);for(s[0]=n>>24&255,s[1]=n>>16&255,s[2]=n>>8&255,s[3]=n&255,s.set(e,4),i=0,n=8;i<r;i++)s.set(t[i],n),n+=t[i].byteLength;return s}static hdlr(e){return _.box(_.types.hdlr,_.HDLR_TYPES[e])}static mdat(e){return _.box(_.types.mdat,e)}static mdhd(e,t){t*=e;const n=Math.floor(t/(ct+1)),i=Math.floor(t%(ct+1));return _.box(_.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return _.box(_.types.mdia,_.mdhd(e.timescale,e.duration),_.hdlr(e.type),_.minf(e))}static mfhd(e){return _.box(_.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?_.box(_.types.minf,_.box(_.types.smhd,_.SMHD),_.DINF,_.stbl(e)):_.box(_.types.minf,_.box(_.types.vmhd,_.VMHD),_.DINF,_.stbl(e))}static moof(e,t,n){return _.box(_.types.moof,_.mfhd(e),_.traf(n,t))}static moov(e){let t=e.length;const n=[];for(;t--;)n[t]=_.trak(e[t]);return _.box.apply(null,[_.types.moov,_.mvhd(e[0].timescale,e[0].duration)].concat(n).concat(_.mvex(e)))}static mvex(e){let t=e.length;const n=[];for(;t--;)n[t]=_.trex(e[t]);return _.box.apply(null,[_.types.mvex,...n])}static mvhd(e,t){t*=e;const n=Math.floor(t/(ct+1)),i=Math.floor(t%(ct+1)),r=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return _.box(_.types.mvhd,r)}static sdtp(e){const t=e.samples||[],n=new Uint8Array(4+t.length);let i,r;for(i=0;i<t.length;i++)r=t[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return _.box(_.types.sdtp,n)}static stbl(e){return _.box(_.types.stbl,_.stsd(e),_.box(_.types.stts,_.STTS),_.box(_.types.stsc,_.STSC),_.box(_.types.stsz,_.STSZ),_.box(_.types.stco,_.STCO))}static avc1(e){let t=[],n=[],i,r,s;for(i=0;i<e.sps.length;i++)r=e.sps[i],s=r.byteLength,t.push(s>>>8&255),t.push(s&255),t=t.concat(Array.prototype.slice.call(r));for(i=0;i<e.pps.length;i++)r=e.pps[i],s=r.byteLength,n.push(s>>>8&255),n.push(s&255),n=n.concat(Array.prototype.slice.call(r));const o=_.box(_.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(n))),l=e.width,d=e.height,c=e.pixelRatio[0],u=e.pixelRatio[1];return _.box(_.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,d>>8&255,d&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,_.box(_.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),_.box(_.types.pasp,new Uint8Array([c>>24,c>>16&255,c>>8&255,c&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static audioStsd(e){const t=e.samplerate;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return _.box(_.types.mp4a,_.audioStsd(e),_.box(_.types.esds,_.esds(e)))}static mp3(e){return _.box(_.types[".mp3"],_.audioStsd(e))}static ac3(e){return _.box(_.types["ac-3"],_.audioStsd(e),_.box(_.types.dac3,e.config))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?_.box(_.types.stsd,_.STSD,_.mp3(e)):e.segmentCodec==="ac3"?_.box(_.types.stsd,_.STSD,_.ac3(e)):_.box(_.types.stsd,_.STSD,_.mp4a(e)):_.box(_.types.stsd,_.STSD,_.avc1(e))}static tkhd(e){const t=e.id,n=e.duration*e.timescale,i=e.width,r=e.height,s=Math.floor(n/(ct+1)),o=Math.floor(n%(ct+1));return _.box(_.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,r>>8&255,r&255,0,0]))}static traf(e,t){const n=_.sdtp(e),i=e.id,r=Math.floor(t/(ct+1)),s=Math.floor(t%(ct+1));return _.box(_.types.traf,_.box(_.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),_.box(_.types.tfdt,new Uint8Array([1,0,0,0,r>>24,r>>16&255,r>>8&255,r&255,s>>24,s>>16&255,s>>8&255,s&255])),_.trun(e,n.length+16+20+8+16+8+8),n)}static trak(e){return e.duration=e.duration||4294967295,_.box(_.types.trak,_.tkhd(e),_.mdia(e))}static trex(e){const t=e.id;return _.box(_.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const n=e.samples||[],i=n.length,r=12+16*i,s=new Uint8Array(r);let o,l,d,c,u,h;for(t+=8+r,s.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),o=0;o<i;o++)l=n[o],d=l.duration,c=l.size,u=l.flags,h=l.cts,s.set([d>>>24&255,d>>>16&255,d>>>8&255,d&255,c>>>24&255,c>>>16&255,c>>>8&255,c&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*o);return _.box(_.types.trun,s)}static initSegment(e){_.types||_.init();const t=_.moov(e);return Ge(_.FTYP,t)}}_.types=void 0;_.HDLR_TYPES=void 0;_.STTS=void 0;_.STSC=void 0;_.STCO=void 0;_.STSZ=void 0;_.VMHD=void 0;_.SMHD=void 0;_.STSD=void 0;_.FTYP=void 0;_.DINF=void 0;const so=9e4;function pr(a,e,t=1,n=!1){const i=a*e*t;return n?Math.round(i):i}function yh(a,e,t=1,n=!1){return pr(a,e,1/t,n)}function un(a,e=!1){return pr(a,1e3,1/so,e)}function Ah(a,e=1){return pr(a,so,1/e)}const bh=10*1e3,Vs=1024,vh=1152,Eh=1536;let Dt=null,Ri=null;class Un{constructor(e,t,n,i=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.ISGenerated=!1,Dt===null){const s=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Dt=s?parseInt(s[1]):0}if(Ri===null){const r=navigator.userAgent.match(/Safari\/(\d+)/i);Ri=r?parseInt(r[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){B.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){B.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){B.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const n=e.reduce((i,r)=>{const s=r.pts-i;return s<-4294967296?(t=!0,$e(i,r.pts)):s>0?i:r.pts},e[0].pts);return t&&B.debug("PTS rollover detected"),n}remux(e,t,n,i,r,s,o,l){let d,c,u,h,A,b,v=r,x=r;const w=e.pid>-1,L=t.pid>-1,I=t.samples.length,D=e.samples.length>0,R=o&&I>0||I>1;if((!w||D)&&(!L||R)||this.ISGenerated||o){if(this.ISGenerated){var F,H,Y,M;const se=this.videoTrackConfig;se&&(t.width!==se.width||t.height!==se.height||((F=t.pixelRatio)==null?void 0:F[0])!==((H=se.pixelRatio)==null?void 0:H[0])||((Y=t.pixelRatio)==null?void 0:Y[1])!==((M=se.pixelRatio)==null?void 0:M[1]))&&this.resetInitSegment()}else u=this.generateIS(e,t,r,s);const q=this.isVideoContiguous;let ae=-1,j;if(R&&(ae=xh(t.samples),!q&&this.config.forceKeyFrameOnDiscontinuity))if(b=!0,ae>0){B.warn(`[mp4-remuxer]: Dropped ${ae} out of ${I} video samples due to a missing keyframe`);const se=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(ae),t.dropped+=ae,x+=(t.samples[0].pts-se)/t.inputTimeScale,j=x}else ae===-1&&(B.warn(`[mp4-remuxer]: No keyframe found out of ${I} video samples`),b=!1);if(this.ISGenerated){if(D&&R){const se=this.getVideoStartPts(t.samples),te=($e(e.samples[0].pts,se)-se)/t.inputTimeScale;v+=Math.max(0,te),x+=Math.max(0,-te)}if(D){if(e.samplerate||(B.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,r,s)),c=this.remuxAudio(e,v,this.isAudioContiguous,s,L||R||l===ie.AUDIO?x:void 0),R){const se=c?c.endPTS-c.startPTS:0;t.inputTimeScale||(B.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,r,s)),d=this.remuxVideo(t,x,q,se)}}else R&&(d=this.remuxVideo(t,x,q,0));d&&(d.firstKeyFrame=ae,d.independent=ae!==-1,d.firstKeyFramePTS=j)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(n.samples.length&&(A=ao(n,r,this._initPTS,this._initDTS)),i.samples.length&&(h=oo(i,r,this._initPTS))),{audio:c,video:d,initSegment:u,independent:b,text:h,id3:A}}generateIS(e,t,n,i){const r=e.samples,s=t.samples,o=this.typeSupported,l={},d=this._initPTS;let c=!d||i,u="audio/mp4",h,A,b;if(c&&(h=A=1/0),e.config&&r.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":o.mpeg?(u="audio/mpeg",e.codec=""):o.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&o.mpeg?new Uint8Array(0):_.initSegment([e]),metadata:{channelCount:e.channelCount}},c&&(b=e.inputTimeScale,!d||b!==d.timescale?h=A=r[0].pts-Math.round(b*n):c=!1)}if(t.sps&&t.pps&&s.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:_.initSegment([t]),metadata:{width:t.width,height:t.height}},c)if(b=t.inputTimeScale,!d||b!==d.timescale){const v=this.getVideoStartPts(s),x=Math.round(b*n);A=Math.min(A,$e(s[0].dts,v)-x),h=Math.min(h,v-x)}else c=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,c?(this._initPTS={baseTime:h,timescale:b},this._initDTS={baseTime:A,timescale:b}):h=b=void 0,{tracks:l,initPTS:h,timescale:b}}remuxVideo(e,t,n,i){const r=e.inputTimeScale,s=e.samples,o=[],l=s.length,d=this._initPTS;let c=this.nextAvcDts,u=8,h=this.videoSampleDuration,A,b,v=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,w=!1;if(!n||c===null){const G=t*r,X=s[0].pts-$e(s[0].dts,s[0].pts);Dt&&c!==null&&Math.abs(G-X-c)<15e3?n=!0:c=G-X}const L=d.baseTime*r/d.timescale;for(let G=0;G<l;G++){const X=s[G];X.pts=$e(X.pts-L,c),X.dts=$e(X.dts-L,c),X.dts<s[G>0?G-1:G].dts&&(w=!0)}w&&s.sort(function(G,X){const ue=G.dts-X.dts,ce=G.pts-X.pts;return ue||ce}),A=s[0].dts,b=s[s.length-1].dts;const I=b-A,D=I?Math.round(I/(l-1)):h||e.inputTimeScale/30;if(n){const G=A-c,X=G>D,ue=G<-1;if((X||ue)&&(X?B.warn(`AVC: ${un(G,!0)} ms (${G}dts) hole between fragments detected at ${t.toFixed(3)}`):B.warn(`AVC: ${un(-G,!0)} ms (${G}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!ue||c>=s[0].pts||Dt)){A=c;const ce=s[0].pts-G;if(X)s[0].dts=A,s[0].pts=ce;else for(let me=0;me<s.length&&!(s[me].dts>ce);me++)s[me].dts-=G,s[me].pts-=G;B.log(`Video: Initial PTS/DTS adjusted: ${un(ce,!0)}/${un(A,!0)}, delta: ${un(G,!0)} ms`)}}A=Math.max(0,A);let R=0,$=0,F=A;for(let G=0;G<l;G++){const X=s[G],ue=X.units,ce=ue.length;let me=0;for(let Ee=0;Ee<ce;Ee++)me+=ue[Ee].data.length;$+=me,R+=ce,X.length=me,X.dts<F?(X.dts=F,F+=D/4|0||1):F=X.dts,v=Math.min(X.pts,v),x=Math.max(X.pts,x)}b=s[l-1].dts;const H=$+4*R+8;let Y;try{Y=new Uint8Array(H)}catch(G){this.observer.emit(T.ERROR,T.ERROR,{type:re.MUX_ERROR,details:O.REMUX_ALLOC_ERROR,fatal:!1,error:G,bytes:H,reason:`fail allocating video mdat ${H}`});return}const M=new DataView(Y.buffer);M.setUint32(0,H),Y.set(_.types.mdat,4);let q=!1,ae=Number.POSITIVE_INFINITY,j=Number.POSITIVE_INFINITY,se=Number.NEGATIVE_INFINITY,oe=Number.NEGATIVE_INFINITY;for(let G=0;G<l;G++){const X=s[G],ue=X.units;let ce=0;for(let Te=0,be=ue.length;Te<be;Te++){const _e=ue[Te],Ne=_e.data,tt=_e.data.byteLength;M.setUint32(u,tt),u+=4,Y.set(Ne,u),u+=tt,ce+=4+tt}let me;if(G<l-1)h=s[G+1].dts-X.dts,me=s[G+1].pts-X.pts;else{const Te=this.config,be=G>0?X.dts-s[G-1].dts:D;if(me=G>0?X.pts-s[G-1].pts:D,Te.stretchShortVideoTrack&&this.nextAudioPts!==null){const _e=Math.floor(Te.maxBufferHole*r),Ne=(i?v+i*r:this.nextAudioPts)-X.pts;Ne>_e?(h=Ne-be,h<0?h=be:q=!0,B.log(`[mp4-remuxer]: It is approximately ${Ne/90} ms to the next segment; using duration ${h/90} ms for the last video frame.`)):h=be}else h=be}const Ee=Math.round(X.pts-X.dts);ae=Math.min(ae,h),se=Math.max(se,h),j=Math.min(j,me),oe=Math.max(oe,me),o.push(new zs(X.key,h,ce,Ee))}if(o.length){if(Dt){if(Dt<70){const G=o[0].flags;G.dependsOn=2,G.isNonSync=0}}else if(Ri&&oe-j<se-ae&&D/se<.025&&o[0].cts===0){B.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let G=A;for(let X=0,ue=o.length;X<ue;X++){const ce=G+o[X].duration,me=G+o[X].cts;if(X<ue-1){const Ee=ce+o[X+1].cts;o[X].duration=Ee-me}else o[X].duration=X?o[X-1].duration:D;o[X].cts=0,G=ce}}}h=q||!h?D:h,this.nextAvcDts=c=b+h,this.videoSampleDuration=h,this.isVideoContiguous=!0;const te=_.moof(e.sequenceNumber++,A,we({},e,{samples:o})),he="video",pe={data1:te,data2:Y,startPTS:v/r,endPTS:(x+h)/r,startDTS:A/r,endDTS:c/r,type:he,hasAudio:!1,hasVideo:!0,nb:o.length,dropped:e.dropped};return e.samples=[],e.dropped=0,pe}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return vh;case"ac3":return Eh;default:return Vs}}remuxAudio(e,t,n,i,r){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,l=s/o,d=this.getSamplesPerFrame(e),c=d*l,u=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,A=[],b=r!==void 0;let v=e.samples,x=h?0:8,w=this.nextAudioPts||-1;const L=t*s,I=u.baseTime*s/u.timescale;if(this.isAudioContiguous=n=n||v.length&&w>0&&(i&&Math.abs(L-w)<9e3||Math.abs($e(v[0].pts-I,L)-w)<20*c),v.forEach(function(te){te.pts=$e(te.pts-I,L)}),!n||w<0){if(v=v.filter(te=>te.pts>=0),!v.length)return;r===0?w=0:i&&!b?w=Math.max(0,L):w=v[0].pts}if(e.segmentCodec==="aac"){const te=this.config.maxAudioFramesDrift;for(let he=0,pe=w;he<v.length;he++){const G=v[he],X=G.pts,ue=X-pe,ce=Math.abs(1e3*ue/s);if(ue<=-te*c&&b)he===0&&(B.warn(`Audio frame @ ${(X/s).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*ue/s)} ms.`),this.nextAudioPts=w=pe=X);else if(ue>=te*c&&ce<bh&&b){let me=Math.round(ue/c);pe=X-me*c,pe<0&&(me--,pe+=c),he===0&&(this.nextAudioPts=w=pe),B.warn(`[mp4-remuxer]: Injecting ${me} audio frame @ ${(pe/s).toFixed(3)}s due to ${Math.round(1e3*ue/s)} ms gap.`);for(let Ee=0;Ee<me;Ee++){const Te=Math.max(pe,0);let be=qs.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);be||(B.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),be=G.unit.subarray()),v.splice(he,0,{unit:be,pts:Te}),pe+=c,he++}}G.pts=pe,pe+=c}}let D=null,R=null,$,F=0,H=v.length;for(;H--;)F+=v[H].unit.byteLength;for(let te=0,he=v.length;te<he;te++){const pe=v[te],G=pe.unit;let X=pe.pts;if(R!==null){const ce=A[te-1];ce.duration=Math.round((X-R)/l)}else if(n&&e.segmentCodec==="aac"&&(X=w),D=X,F>0){F+=x;try{$=new Uint8Array(F)}catch(ce){this.observer.emit(T.ERROR,T.ERROR,{type:re.MUX_ERROR,details:O.REMUX_ALLOC_ERROR,fatal:!1,error:ce,bytes:F,reason:`fail allocating audio mdat ${F}`});return}h||(new DataView($.buffer).setUint32(0,F),$.set(_.types.mdat,4))}else return;$.set(G,x);const ue=G.byteLength;x+=ue,A.push(new zs(!0,d,ue,0)),R=X}const Y=A.length;if(!Y)return;const M=A[A.length-1];this.nextAudioPts=w=R+l*M.duration;const q=h?new Uint8Array(0):_.moof(e.sequenceNumber++,D/l,we({},e,{samples:A}));e.samples=[];const ae=D/s,j=w/s,oe={data1:q,data2:$,startPTS:ae,endPTS:j,startDTS:ae,endDTS:j,type:"audio",hasAudio:!0,hasVideo:!1,nb:Y};return this.isAudioContiguous=!0,oe}remuxEmptyAudio(e,t,n,i){const r=e.inputTimeScale,s=e.samplerate?e.samplerate:r,o=r/s,l=this.nextAudioPts,d=this._initDTS,c=d.baseTime*9e4/d.timescale,u=(l!==null?l:i.startDTS*r)+c,h=i.endDTS*r+c,A=o*Vs,b=Math.ceil((h-u)/A),v=qs.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(B.warn("[mp4-remuxer]: remux empty Audio"),!v){B.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const x=[];for(let w=0;w<b;w++){const L=u+w*A;x.push({unit:v,pts:L,dts:L})}return e.samples=x,this.remuxAudio(e,t,n,!1)}}function $e(a,e){let t;if(e===null)return a;for(e<a?t=-8589934592:t=8589934592;Math.abs(a-e)>4294967296;)a+=t;return a}function xh(a){for(let e=0;e<a.length;e++)if(a[e].key)return e;return-1}function ao(a,e,t,n){const i=a.samples.length;if(!i)return;const r=a.inputTimeScale;for(let o=0;o<i;o++){const l=a.samples[o];l.pts=$e(l.pts-t.baseTime*r/t.timescale,e*r)/r,l.dts=$e(l.dts-n.baseTime*r/n.timescale,e*r)/r}const s=a.samples;return a.samples=[],{samples:s}}function oo(a,e,t){const n=a.samples.length;if(!n)return;const i=a.inputTimeScale;for(let s=0;s<n;s++){const o=a.samples[s];o.pts=$e(o.pts-t.baseTime*i/t.timescale,e*i)/i}a.samples.sort((s,o)=>s.pts-o.pts);const r=a.samples;return a.samples=[],{samples:r}}class zs{constructor(e,t,n,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=n,this.cts=i,this.flags={isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:e?2:1,isNonSync:e?0:1}}}class Sh{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,n,i){this.audioCodec=t,this.videoCodec=n,this.generateInitSegment(Dc(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:n}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=Ba(e);i.audio&&(t=Ys(i.audio,ge.AUDIO)),i.video&&(n=Ys(i.video,ge.VIDEO));const r={};i.audio&&i.video?r.audiovideo={container:"video/mp4",codec:t+","+n,initSegment:e,id:"main"}:i.audio?r.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?r.video={container:"video/mp4",codec:n,initSegment:e,id:"main"}:B.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=r}remux(e,t,n,i,r,s){var o,l;let{initPTS:d,lastEndTime:c}=this;const u={audio:void 0,video:void 0,text:i,id3:n,initSegment:void 0};J(c)||(c=this.lastEndTime=r||0);const h=t.samples;if(!(h!=null&&h.length))return u;const A={initPTS:void 0,timescale:1};let b=this.initData;if((o=b)!=null&&o.length||(this.generateInitSegment(h),b=this.initData),!((l=b)!=null&&l.length))return B.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(A.tracks=this.initTracks,this.emitInitSegment=!1);const v=_c(h,b),x=Bc(b,h),w=x===null?r:x;(Th(d,w,r,v)||A.timescale!==d.timescale&&s)&&(A.initPTS=w-r,d&&d.timescale===1&&B.warn(`Adjusting initPTS by ${A.initPTS-d.baseTime}`),this.initPTS=d={baseTime:A.initPTS,timescale:1});const L=e?w-d.baseTime/d.timescale:c,I=L+v;Oc(b,h,d.baseTime/d.timescale),v>0?this.lastEndTime=I:(B.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const D=!!b.audio,R=!!b.video;let $="";D&&($+="audio"),R&&($+="video");const F={data1:h,startPTS:L,startDTS:L,endPTS:I,endDTS:I,type:$,hasAudio:D,hasVideo:R,nb:1,dropped:0};return u.audio=F.type==="audio"?F:void 0,u.video=F.type!=="audio"?F:void 0,u.initSegment=A,u.id3=ao(n,r,d,d),i.samples.length&&(u.text=oo(i,r,d)),u}}function Th(a,e,t,n){if(a===null)return!0;const i=Math.max(n,1),r=e-a.baseTime/a.timescale;return Math.abs(r-t)>i}function Ys(a,e){const t=a==null?void 0:a.codec;if(t&&t.length>4)return t;if(e===ge.AUDIO){if(t==="ec-3"||t==="ac-3"||t==="alac")return t;if(t==="fLaC"||t==="Opus")return Wn(t,!1);const n="mp4a.40.5";return B.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${n}"`),n}return B.warn(`Unhandled video codec "${t}"`),t==="hvc1"||t==="hev1"?"hvc1.1.6.L120.90":t==="av01"?"av01.0.04M.08":"avc1.42e01e"}let at;try{at=self.performance.now.bind(self.performance)}catch{B.debug("Unable to use Performance API on this environment"),at=Ft==null?void 0:Ft.Date.now}const $n=[{demux:dh,remux:Sh},{demux:ut,remux:Un},{demux:oh,remux:Un},{demux:gh,remux:Un}];$n.splice(2,0,{demux:ch,remux:Un});class Ws{constructor(e,t,n,i,r){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=n,this.vendor=i,this.id=r}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,n,i){const r=n.transmuxing;r.executeStart=at();let s=new Uint8Array(e);const{currentTransmuxState:o,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:d,discontinuity:c,trackSwitch:u,accurateTimeOffset:h,timeOffset:A,initSegmentChange:b}=i||o,{audioCodec:v,videoCodec:x,defaultInitPts:w,duration:L,initSegmentData:I}=l,D=Ch(s,t);if(D&&D.method==="AES-128"){const H=this.getDecrypter();if(H.isSync()){let Y=H.softwareDecrypt(s,D.key.buffer,D.iv.buffer);if(n.part>-1&&(Y=H.flush()),!Y)return r.executeEnd=at(),Di(n);s=new Uint8Array(Y)}else return this.decryptionPromise=H.webCryptoDecrypt(s,D.key.buffer,D.iv.buffer).then(Y=>{const M=this.push(Y,null,n);return this.decryptionPromise=null,M}),this.decryptionPromise}const R=this.needsProbing(c,u);if(R){const H=this.configureTransmuxer(s);if(H)return B.warn(`[transmuxer] ${H.message}`),this.observer.emit(T.ERROR,T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,error:H,reason:H.message}),r.executeEnd=at(),Di(n)}(c||u||b||R)&&this.resetInitSegment(I,v,x,L,t),(c||b||R)&&this.resetInitialTimestamp(w),d||this.resetContiguity();const $=this.transmux(s,D,A,h,n),F=this.currentTransmuxState;return F.contiguous=!0,F.discontinuity=!1,F.trackSwitch=!1,r.executeEnd=at(),$}flush(e){const t=e.transmuxing;t.executeStart=at();const{decrypter:n,currentTransmuxState:i,decryptionPromise:r}=this;if(r)return r.then(()=>this.flush(e));const s=[],{timeOffset:o}=i;if(n){const u=n.flush();u&&s.push(this.push(u,null,e))}const{demuxer:l,remuxer:d}=this;if(!l||!d)return t.executeEnd=at(),[Di(e)];const c=l.flush(o);return Gn(c)?c.then(u=>(this.flushRemux(s,u,e),s)):(this.flushRemux(s,c,e),s)}flushRemux(e,t,n){const{audioTrack:i,videoTrack:r,id3Track:s,textTrack:o}=t,{accurateTimeOffset:l,timeOffset:d}=this.currentTransmuxState;B.log(`[transmuxer.ts]: Flushed fragment ${n.sn}${n.part>-1?" p: "+n.part:""} of level ${n.level}`);const c=this.remuxer.remux(i,r,s,o,d,l,!0,this.id);e.push({remuxResult:c,chunkMeta:n}),n.transmuxing.executeEnd=at()}resetInitialTimestamp(e){const{demuxer:t,remuxer:n}=this;!t||!n||(t.resetTimeStamp(e),n.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,n,i,r){const{demuxer:s,remuxer:o}=this;!s||!o||(s.resetInitSegment(e,t,n,i),o.resetInitSegment(e,t,n,r))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,n,i,r){let s;return t&&t.method==="SAMPLE-AES"?s=this.transmuxSampleAes(e,t,n,i,r):s=this.transmuxUnencrypted(e,n,i,r),s}transmuxUnencrypted(e,t,n,i){const{audioTrack:r,videoTrack:s,id3Track:o,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(r,s,o,l,t,n,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,n,i,r){return this.demuxer.demuxSampleAes(e,t,n).then(s=>({remuxResult:this.remuxer.remux(s.audioTrack,s.videoTrack,s.id3Track,s.textTrack,n,i,!1,this.id),chunkMeta:r}))}configureTransmuxer(e){const{config:t,observer:n,typeSupported:i,vendor:r}=this;let s;for(let h=0,A=$n.length;h<A;h++){var o;if((o=$n[h].demux)!=null&&o.probe(e)){s=$n[h];break}}if(!s)return new Error("Failed to find demuxer by probing fragment data");const l=this.demuxer,d=this.remuxer,c=s.remux,u=s.demux;(!d||!(d instanceof c))&&(this.remuxer=new c(n,t,i,r)),(!l||!(l instanceof u))&&(this.demuxer=new u(n,t,i),this.probe=u.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new dr(this.config)),e}}function Ch(a,e){let t=null;return a.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const Di=a=>({remuxResult:{},chunkMeta:a});function Gn(a){return"then"in a&&a.then instanceof Function}class wh{constructor(e,t,n,i,r){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=n,this.duration=i,this.defaultInitPts=r||null}}class kh{constructor(e,t,n,i,r,s){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=n,this.trackSwitch=i,this.timeOffset=r,this.initSegmentChange=s}}var lo={exports:{}};(function(a){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(l,d,c){this.fn=l,this.context=d,this.once=c||!1}function r(l,d,c,u,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var A=new i(c,u||l,h),b=t?t+d:d;return l._events[b]?l._events[b].fn?l._events[b]=[l._events[b],A]:l._events[b].push(A):(l._events[b]=A,l._eventsCount++),l}function s(l,d){--l._eventsCount===0?l._events=new n:delete l._events[d]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var d=[],c,u;if(this._eventsCount===0)return d;for(u in c=this._events)e.call(c,u)&&d.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(c)):d},o.prototype.listeners=function(d){var c=t?t+d:d,u=this._events[c];if(!u)return[];if(u.fn)return[u.fn];for(var h=0,A=u.length,b=new Array(A);h<A;h++)b[h]=u[h].fn;return b},o.prototype.listenerCount=function(d){var c=t?t+d:d,u=this._events[c];return u?u.fn?1:u.length:0},o.prototype.emit=function(d,c,u,h,A,b){var v=t?t+d:d;if(!this._events[v])return!1;var x=this._events[v],w=arguments.length,L,I;if(x.fn){switch(x.once&&this.removeListener(d,x.fn,void 0,!0),w){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,c),!0;case 3:return x.fn.call(x.context,c,u),!0;case 4:return x.fn.call(x.context,c,u,h),!0;case 5:return x.fn.call(x.context,c,u,h,A),!0;case 6:return x.fn.call(x.context,c,u,h,A,b),!0}for(I=1,L=new Array(w-1);I<w;I++)L[I-1]=arguments[I];x.fn.apply(x.context,L)}else{var D=x.length,R;for(I=0;I<D;I++)switch(x[I].once&&this.removeListener(d,x[I].fn,void 0,!0),w){case 1:x[I].fn.call(x[I].context);break;case 2:x[I].fn.call(x[I].context,c);break;case 3:x[I].fn.call(x[I].context,c,u);break;case 4:x[I].fn.call(x[I].context,c,u,h);break;default:if(!L)for(R=1,L=new Array(w-1);R<w;R++)L[R-1]=arguments[R];x[I].fn.apply(x[I].context,L)}}return!0},o.prototype.on=function(d,c,u){return r(this,d,c,u,!1)},o.prototype.once=function(d,c,u){return r(this,d,c,u,!0)},o.prototype.removeListener=function(d,c,u,h){var A=t?t+d:d;if(!this._events[A])return this;if(!c)return s(this,A),this;var b=this._events[A];if(b.fn)b.fn===c&&(!h||b.once)&&(!u||b.context===u)&&s(this,A);else{for(var v=0,x=[],w=b.length;v<w;v++)(b[v].fn!==c||h&&!b[v].once||u&&b[v].context!==u)&&x.push(b[v]);x.length?this._events[A]=x.length===1?x[0]:x:s(this,A)}return this},o.prototype.removeAllListeners=function(d){var c;return d?(c=t?t+d:d,this._events[c]&&s(this,c)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,a.exports=o})(lo);var Lh=lo.exports,mr=Zd(Lh);class co{constructor(e,t,n,i){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const r=e.config;this.hls=e,this.id=t,this.useWorker=!!r.enableWorker,this.onTransmuxComplete=n,this.onFlush=i;const s=(c,u)=>{u=u||{},u.frag=this.frag,u.id=this.id,c===T.ERROR&&(this.error=u.error),this.hls.trigger(c,u)};this.observer=new mr,this.observer.on(T.FRAG_DECRYPTED,s),this.observer.on(T.ERROR,s);const o=vt(r.preferManagedMediaSource)||{isTypeSupported:()=>!1},l={mpeg:o.isTypeSupported("audio/mpeg"),mp3:o.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:o.isTypeSupported('audio/mp4; codecs="ac-3"')},d=navigator.vendor;if(this.useWorker&&typeof Worker<"u"&&(r.workerPath||Yu())){try{r.workerPath?(B.log(`loading Web Worker ${r.workerPath} for "${t}"`),this.workerContext=ju(r.workerPath)):(B.log(`injecting Web Worker for "${t}"`),this.workerContext=Wu()),this.onwmsg=h=>this.onWorkerMessage(h);const{worker:u}=this.workerContext;u.addEventListener("message",this.onwmsg),u.onerror=h=>{const A=new Error(`${h.message}  (${h.filename}:${h.lineno})`);r.enableWorker=!1,B.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(T.ERROR,{type:re.OTHER_ERROR,details:O.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:A})},u.postMessage({cmd:"init",typeSupported:l,vendor:d,id:t,config:JSON.stringify(r)})}catch(u){B.warn(`Error setting up "${t}" Web Worker, fallback to inline`,u),this.resetWorker(),this.error=null,this.transmuxer=new Ws(this.observer,l,r,d,t)}return}this.transmuxer=new Ws(this.observer,l,r,d,t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,n,i,r,s,o,l,d,c){var u,h;d.transmuxing.start=self.performance.now();const{transmuxer:A}=this,b=s?s.start:r.start,v=r.decryptdata,x=this.frag,w=!(x&&r.cc===x.cc),L=!(x&&d.level===x.level),I=x?d.sn-x.sn:-1,D=this.part?d.part-this.part.index:-1,R=I===0&&d.id>1&&d.id===(x==null?void 0:x.stats.chunkCount),$=!L&&(I===1||I===0&&(D===1||R&&D<=0)),F=self.performance.now();(L||I||r.stats.parsing.start===0)&&(r.stats.parsing.start=F),s&&(D||!$)&&(s.stats.parsing.start=F);const H=!(x&&((u=r.initSegment)==null?void 0:u.url)===((h=x.initSegment)==null?void 0:h.url)),Y=new kh(w,$,l,L,b,H);if(!$||w||H){B.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${d.sn} p: ${d.part} level: ${d.level} id: ${d.id}
        discontinuity: ${w}
        trackSwitch: ${L}
        contiguous: ${$}
        accurateTimeOffset: ${l}
        timeOffset: ${b}
        initSegmentChange: ${H}`);const M=new wh(n,i,t,o,c);this.configureTransmuxer(M)}if(this.frag=r,this.part=s,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:v,chunkMeta:d,state:Y},e instanceof ArrayBuffer?[e]:[]);else if(A){const M=A.push(e,v,d,Y);Gn(M)?(A.async=!0,M.then(q=>{this.handleTransmuxComplete(q)}).catch(q=>{this.transmuxerError(q,d,"transmuxer-interface push error")})):(A.async=!1,this.handleTransmuxComplete(M))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let n=t.flush(e);Gn(n)||t.async?(Gn(n)||(n=Promise.resolve(n)),n.then(r=>{this.handleFlushResult(r,e)}).catch(r=>{this.transmuxerError(r,e,"transmuxer-interface flush error")})):this.handleFlushResult(n,e)}}transmuxerError(e,t,n){this.hls&&(this.error=e,this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,chunkMeta:t,fatal:!1,error:e,err:e,reason:n}))}handleFlushResult(e,t){e.forEach(n=>{this.handleTransmuxComplete(n)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data,n=this.hls;switch(t.event){case"init":{var i;const r=(i=this.workerContext)==null?void 0:i.objectURL;r&&self.URL.revokeObjectURL(r);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":B[t.data.logType]&&B[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,n.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}function uo(a,e){if(a.length!==e.length)return!1;for(let t=0;t<a.length;t++)if(!Nt(a[t].attrs,e[t].attrs))return!1;return!0}function Nt(a,e,t){const n=a["STABLE-RENDITION-ID"];return n&&!t?n===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>a[i]!==e[i])}function Qi(a,e){return e.label.toLowerCase()===a.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(a.lang||"").toLowerCase())}const js=100;class Ih extends cr{constructor(e,t,n){super(e,t,n,"[audio-stream-controller]",ie.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){if(n==="main"){const s=t.cc;this.initPTS[t.cc]={baseTime:i,timescale:r},this.log(`InitPTS for cc: ${s} found from main: ${i}`),this.videoTrackCC=s,this.state===K.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=K.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(js),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=K.IDLE):(this.loadedmetadata=!1,this.state=K.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case K.IDLE:this.doTickIdle();break;case K.WAITING_TRACK:{var e;const{levels:n,trackId:i}=this,r=n==null||(e=n[i])==null?void 0:e.details;if(r){if(this.waitForCdnTuneIn(r))break;this.state=K.WAITING_INIT_PTS}break}case K.FRAG_LOADING_WAITING_RETRY:{var t;const n=performance.now(),i=this.retryDate;if(!i||n>=i||(t=this.media)!=null&&t.seeking){const{levels:r,trackId:s}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((r==null?void 0:r[s])||null),this.state=K.IDLE}break}case K.WAITING_INIT_PTS:{const n=this.waitingData;if(n){const{frag:i,part:r,cache:s,complete:o}=n;if(this.initPTS[i.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=K.FRAG_LOADING;const l=s.flush(),d={frag:i,part:r,payload:l,networkDetails:null};this._handleFragmentLoadProgress(d),o&&super._handleFragmentLoadComplete(d)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),d=ve.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Wi(d.end,this.config.maxFragLookUpTolerance,i)<0&&(this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${d.end} is needed`),this.clearWaitingFragment())}}else this.state=K.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=K.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:n,trackId:i}=this,r=e.config;if(!n&&(this.startFragRequested||!r.startFragPrefetch)||!(t!=null&&t[i]))return;const s=t[i],o=s.details;if(!o||o.live&&this.levelLastLoaded!==s||this.waitForCdnTuneIn(o)){this.state=K.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,ge.AUDIO,ie.AUDIO));const d=this.getFwdBufferInfo(l,ie.AUDIO);if(d===null)return;const{bufferedTrack:c,switchingTrack:u}=this;if(!u&&this._streamEnded(d,o)){e.trigger(T.BUFFER_EOS,{type:"audio"}),this.state=K.ENDED;return}const h=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,ie.MAIN),A=d.len,b=this.getMaxBufferLength(h==null?void 0:h.len),v=o.fragments,x=v[0].start;let w=this.flushing?this.getLoadPosition():d.end;if(u&&n){const R=this.getLoadPosition();c&&!Nt(u.attrs,c.attrs)&&(w=R),o.PTSKnown&&R<x&&(d.end>x||d.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),n.currentTime=x+.05)}if(A>=b&&!u&&w<v[v.length-1].start)return;let L=this.getNextFragment(w,o),I=!1;if(L&&this.isLoopLoading(L,w)&&(I=!!L.gap,L=this.getNextFragmentLoopLoading(L,o,d,ie.MAIN,b)),!L){this.bufferFlushed=!0;return}const D=h&&L.start>h.end+o.targetduration;if(D||!(h!=null&&h.len)&&d.len){const R=this.getAppendedFrag(L.start,ie.MAIN);if(R===null||(I||(I=!!R.gap||!!D&&h.len===0),D&&!I||I&&d.nextStart&&d.nextStart<R.end))return}this.loadFragment(L,s,w)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,this.bufferFlushed=this.flushing=!1,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(n=>new Mt(n))}onAudioTrackSwitching(e,t){const n=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),n?this.setInterval(js):this.resetTransmuxer(),n?(this.switchingTrack=t,this.state=K.IDLE,this.flushAudioIfNeeded(t)):(this.switchingTrack=null,this.bufferedTrack=t,this.state=K.STOPPED),this.tick()}onManifestLoading(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=this.flushing=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(T.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var n;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:i}=this,{details:r,id:s}=t;if(!i){this.warn(`Audio tracks were reset while loading level ${s}`);return}this.log(`Audio track ${s} loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:""},duration:${r.totalduration}`);const o=i[s];let l=0;if(r.live||(n=o.details)!=null&&n.live){this.checkLiveUpdate(r);const c=this.mainDetails;if(r.deltaUpdateFailed||!c)return;if(!o.details&&r.hasProgramDateTime&&c.hasProgramDateTime)Jn(r,c),l=r.fragments[0].start;else{var d;l=this.alignPlaylists(r,o.details,(d=this.levelLastLoaded)==null?void 0:d.details)}}o.details=r,this.levelLastLoaded=o,!this.startFragRequested&&(this.mainDetails||!r.live)&&this.setStartPosition(this.mainDetails||r,l),this.state===K.WAITING_TRACK&&!this.waitForCdnTuneIn(r)&&(this.state=K.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:n,part:i,payload:r}=e,{config:s,trackId:o,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const d=l[o];if(!d){this.warn("Audio track is undefined on fragment load progress");return}const c=d.details;if(!c){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(n.start);return}const u=s.defaultAudioCodec||d.audioCodec||"mp4a.40.2";let h=this.transmuxer;h||(h=this.transmuxer=new co(this.hls,ie.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const A=this.initPTS[n.cc],b=(t=n.initSegment)==null?void 0:t.data;if(A!==void 0){const x=i?i.index:-1,w=x!==-1,L=new lr(n.level,n.sn,n.stats.chunkCount,r.byteLength,x,w);h.push(r,b,u,"",n,i,c.totalduration,!1,L,A)}else{this.log(`Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${c.startSN} ,${c.endSN}],track ${o}`);const{cache:v}=this.waitingData=this.waitingData||{frag:n,part:i,cache:new Ya,complete:!1};v.push(new Uint8Array(r)),this.waitingVideoCC=this.videoTrackCC,this.state=K.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const n=t.tracks.audio;n&&(this.mediaBuffer=n.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:n,part:i}=t;if(n.type!==ie.AUDIO){if(!this.loadedmetadata&&n.type===ie.MAIN){const r=this.videoBuffer||this.media;r&&ve.getBuffered(r).length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(n.sn!=="initSegment"){this.fragPrevious=n;const r=this.switchingTrack;r&&(this.bufferedTrack=r,this.switchingTrack=null,this.hls.trigger(T.AUDIO_TRACK_SWITCHED,Be({},r)))}this.fragBufferedComplete(n,i)}onError(e,t){var n;if(t.fatal){this.state=K.ERROR;return}switch(t.details){case O.FRAG_GAP:case O.FRAG_PARSING_ERROR:case O.FRAG_DECRYPT_ERROR:case O.FRAG_LOAD_ERROR:case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_ERROR:case O.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ie.AUDIO,t);break;case O.AUDIO_TRACK_LOAD_ERROR:case O.AUDIO_TRACK_LOAD_TIMEOUT:case O.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===K.WAITING_TRACK&&((n=t.context)==null?void 0:n.type)===fe.AUDIO_TRACK&&(this.state=K.IDLE);break;case O.BUFFER_APPEND_ERROR:case O.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;if(t.details===O.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case O.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==ge.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==ge.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===K.ENDED&&(this.state=K.IDLE);const n=this.mediaBuffer||this.media;n&&(this.afterBufferFlushed(n,t,ie.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const n="audio",{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:l,part:d,level:c}=o,{details:u}=c,{audio:h,text:A,id3:b,initSegment:v}=r;if(this.fragContextChanged(l)||!u){this.fragmentTracker.removeFragment(l);return}if(this.state=K.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),v!=null&&v.tracks){const x=l.initSegment||l;this._bufferInitSegment(c,v.tracks,x,s),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:x,id:n,tracks:v.tracks})}if(h){const{startPTS:x,endPTS:w,startDTS:L,endDTS:I}=h;d&&(d.elementaryStreams[ge.AUDIO]={startPTS:x,endPTS:w,startDTS:L,endDTS:I}),l.setElementaryStreamInfo(ge.AUDIO,x,w,L,I),this.bufferFragmentData(h,l,d,s)}if(b!=null&&(t=b.samples)!=null&&t.length){const x=we({id:n,frag:l,details:u},b);i.trigger(T.FRAG_PARSING_METADATA,x)}if(A){const x=we({id:n,frag:l,details:u},A);i.trigger(T.FRAG_PARSING_USERDATA,x)}}_bufferInitSegment(e,t,n,i){if(this.state!==K.PARSING)return;t.video&&delete t.video;const r=t.audio;if(!r)return;r.id="audio";const s=e.audioCodec;this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${s}/${r.codec}]`),s&&s.split(",").length===1&&(r.levelCodec=s),this.hls.trigger(T.BUFFER_CODECS,t);const o=r.initSegment;if(o!=null&&o.byteLength){const l={type:"audio",frag:n,part:null,chunkMeta:i,parent:n.type,data:o};this.hls.trigger(T.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||i===De.NOT_LOADED||i===De.PARTIAL){var r;if(e.sn==="initSegment")this._loadInitSegment(e,t);else if((r=t.details)!=null&&r.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=K.WAITING_INIT_PTS;const s=this.mainDetails;s&&s.fragments[0].start!==t.details.fragments[0].start&&Jn(t.details,s)}else this.startFragRequested=!0,super.loadFragment(e,t,n)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){const{media:t,bufferedTrack:n}=this,i=n==null?void 0:n.attrs,r=e.attrs;t&&i&&(i.CHANNELS!==r.CHANNELS||n.name!==e.name||n.lang!==e.lang)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null)}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(T.AUDIO_TRACK_SWITCHED,Be({},e))}}class Rh extends or{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Audio track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Audio track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.audioGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(h=>!n||n.indexOf(h.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(h=>h.default)&&(this.selectDefaultTrack=!1),o.forEach((h,A)=>{h.id=A});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const l=this.hls.config.audioPreference;if(!r&&l){const h=Ze(l,o,Lt);if(h>-1)r=o[h];else{const A=Ze(l,this.tracks);r=this.tracks[A]}}let d=this.findTrackId(r);d===-1&&r&&(d=this.findTrackId(null));const c={audioTracks:o};this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${n==null?void 0:n.join(",")}`),this.hls.trigger(T.AUDIO_TRACKS_UPDATED,c);const u=this.trackId;if(d!==-1&&u===-1)this.setAudioTrack(d);else if(o.length&&u===-1){var s;const h=new Error(`No audio track selected for current audio group-ID(s): ${(s=this.groupIds)==null?void 0:s.join(",")} track count: ${o.length}`);this.warn(h.message),this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h})}}else this.shouldReloadPlaylist(r)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===fe.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&(this.requestScheduled=-1,this.checkRetry(t))}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const n=this.allAudioTracks;if(this.selectDefaultTrack=!1,n.length){const i=this.currentTrack;if(i&&Pt(e,i,Lt))return i;const r=Ze(e,this.tracksInGroup,Lt);if(r>-1){const s=this.tracksInGroup[r];return this.setAudioTrack(r),s}else if(i){let s=t.loadLevel;s===-1&&(s=t.firstAutoLevel);const o=Ru(e,t.levels,n,s,Lt);if(o===-1)return null;t.nextLoadLevel=o}if(e.channels||e.audioCodec){const s=Ze(e,n);if(s>-1)return n[s]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e],r=i.details&&!i.details.live;if(e===this.trackId&&i===n&&r||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(T.AUDIO_TRACK_SWITCHING,Be({},i)),r))return;const s=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(s)}findTrackId(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(!(this.selectDefaultTrack&&!i.default)&&(!e||Pt(e,i,Lt)))return n}if(e){const{name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:l}=e;for(let d=0;d<t.length;d++){const c=t[d];if(Pt({name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:l},c,Lt))return d}for(let d=0;d<t.length;d++){const c=t[d];if(Nt(e.attrs,c.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return d}for(let d=0;d<t.length;d++){const c=t[d];if(Nt(e.attrs,c.attrs,["LANGUAGE"]))return d}}return-1}loadPlaylist(e){const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){super.loadPlaylist();const n=t.id,i=t.groupId;let r=t.url;if(e)try{r=e.addDirectives(r)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}this.log(`loading audio-track playlist ${n} "${t.name}" lang:${t.lang} group:${i}`),this.clearTimer(),this.hls.trigger(T.AUDIO_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:e||null})}}}const Qs=500;class Dh extends cr{constructor(e,t,n){super(e,t,n,"[subtitle-stream-controller]",ie.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.ERROR,this.onError,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.ERROR,this.onError,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=K.IDLE,this.setInterval(Qs),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:n,success:i}=t;if(this.fragPrevious=n,this.state=K.IDLE,!i)return;const r=this.tracksBuffered[this.currentTrackId];if(!r)return;let s;const o=n.start;for(let d=0;d<r.length;d++)if(o>=r[d].start&&o<=r[d].end){s=r[d];break}const l=n.start+n.duration;s?s.end=l:(s={start:o,end:l},r.push(s)),this.fragmentTracker.fragBuffered(n),this.fragBufferedComplete(n,null)}onBufferFlushing(e,t){const{startOffset:n,endOffset:i}=t;if(n===0&&i!==Number.POSITIVE_INFINITY){const r=i-1;if(r<=0)return;t.endOffsetSubtitles=Math.max(0,r),this.tracksBuffered.forEach(s=>{for(let o=0;o<s.length;){if(s[o].end<=r){s.shift();continue}else if(s[o].start<r)s[o].start=r;else break;o++}}),this.fragmentTracker.removeFragmentsInRange(n,r,ie.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===ie.MAIN){var n;(n=this.media)!=null&&n.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const n=t.frag;(n==null?void 0:n.type)===ie.SUBTITLE&&(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==K.STOPPED&&(this.state=K.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&uo(this.levels,t)){this.levels=t.map(n=>new Mt(n));return}this.tracksBuffered=[],this.levels=t.map(n=>{const i=new Mt(n);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,ie.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var n;if(this.currentTrackId=t.id,!((n=this.levels)!=null&&n.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.setInterval(Qs)}onSubtitleTrackLoaded(e,t){var n;const{currentTrackId:i,levels:r}=this,{details:s,id:o}=t;if(!r){this.warn(`Subtitle tracks were reset while loading level ${o}`);return}const l=r[i];if(o>=r.length||o!==i||!l)return;this.log(`Subtitle track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let d=0;if(s.live||(n=l.details)!=null&&n.live){const u=this.mainDetails;if(s.deltaUpdateFailed||!u)return;const h=u.fragments[0];if(!l.details)s.hasProgramDateTime&&u.hasProgramDateTime?(Jn(s,u),d=s.fragments[0].start):h&&(d=h.start,Yi(s,d));else{var c;d=this.alignPlaylists(s,l.details,(c=this.levelLastLoaded)==null?void 0:c.details),d===0&&h&&(d=h.start,Yi(s,d))}}l.details=s,this.levelLastLoaded=l,!this.startFragRequested&&(this.mainDetails||!s.live)&&this.setStartPosition(this.mainDetails||s,d),this.tick(),s.live&&!this.fragCurrent&&this.media&&this.state===K.IDLE&&(Zn(null,s.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0))}_handleFragmentLoadComplete(e){const{frag:t,payload:n}=e,i=t.decryptdata,r=this.hls;if(!this.fragContextChanged(t)&&n&&n.byteLength>0&&i!=null&&i.key&&i.iv&&i.method==="AES-128"){const s=performance.now();this.decrypter.decrypt(new Uint8Array(n),i.key.buffer,i.iv.buffer).catch(o=>{throw r.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.FRAG_DECRYPT_ERROR,fatal:!1,error:o,reason:o.message,frag:t}),o}).then(o=>{const l=performance.now();r.trigger(T.FRAG_DECRYPTED,{frag:t,payload:o,stats:{tstart:s,tdecrypt:l}})}).catch(o=>{this.warn(`${o.name}: ${o.message}`),this.state=K.IDLE})}}doTick(){if(!this.media){this.state=K.IDLE;return}if(this.state===K.IDLE){const{currentTrackId:e,levels:t}=this,n=t==null?void 0:t[e];if(!n||!t.length||!n.details)return;const{config:i}=this,r=this.getLoadPosition(),s=ve.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],r,i.maxBufferHole),{end:o,len:l}=s,d=this.getFwdBufferInfo(this.media,ie.MAIN),c=n.details,u=this.getMaxBufferLength(d==null?void 0:d.len)+c.levelTargetDuration;if(l>u)return;const h=c.fragments,A=h.length,b=c.edge;let v=null;const x=this.fragPrevious;if(o<b){const w=i.maxFragLookUpTolerance,L=o>b-w?0:w;v=Zn(x,h,Math.max(h[0].start,o),L),!v&&x&&x.start<h[0].start&&(v=h[0])}else v=h[A-1];if(!v)return;if(v=this.mapToInitFragWhenRequired(v),v.sn!=="initSegment"){const w=v.sn-c.startSN,L=h[w-1];L&&L.cc===v.cc&&this.fragmentTracker.getState(L)===De.NOT_LOADED&&(v=L)}this.fragmentTracker.getState(v)===De.NOT_LOADED&&this.loadFragment(v,n,o)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,n){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,n))}get mediaBufferTimeRanges(){return new Bh(this.tracksBuffered[this.currentTrackId]||[])}}class Bh{constructor(e){this.buffered=void 0;const t=(n,i,r)=>{if(i=i>>>0,i>r-1)throw new DOMException(`Failed to execute '${n}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);return e[i][n]};this.buffered={get length(){return e.length},end(n){return t("end",n,e.length)},start(n){return t("start",n,e.length)}}}}class _h extends or{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const n=Fn(this.media.textTracks);for(let r=0;r<n.length;r++)if(n[r].mode==="hidden")t=n[r];else if(n[r].mode==="showing"){t=n[r];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),Fn(this.media.textTracks).forEach(t=>{_t(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Subtitle track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Subtitle track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.subtitleGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(s=>(i==null?void 0:i.indexOf(s))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const s=this.tracks.filter(c=>!n||n.indexOf(c.groupId)!==-1);if(s.length)this.selectDefaultTrack&&!s.some(c=>c.default)&&(this.selectDefaultTrack=!1),s.forEach((c,u)=>{c.id=u});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=s;const o=this.hls.config.subtitlePreference;if(!r&&o){this.selectDefaultTrack=!1;const c=Ze(o,s);if(c>-1)r=s[c];else{const u=Ze(o,this.tracks);r=this.tracks[u]}}let l=this.findTrackId(r);l===-1&&r&&(l=this.findTrackId(null));const d={subtitleTracks:s};this.log(`Updating subtitle tracks, ${s.length} track(s) found in "${n==null?void 0:n.join(",")}" group-id`),this.hls.trigger(T.SUBTITLE_TRACKS_UPDATED,d),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}else this.shouldReloadPlaylist(r)&&this.setSubtitleTrack(this.trackId)}findTrackId(e){const t=this.tracksInGroup,n=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const r=t[i];if(!(n&&!r.default||!n&&!e)&&(!e||Pt(r,e)))return i}if(e){for(let i=0;i<t.length;i++){const r=t[i];if(Nt(e.attrs,r.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const r=t[i];if(Nt(e.attrs,r.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(Qi(i,e))return n}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===fe.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const n=this.currentTrack;if(n&&Pt(e,n))return n;const i=Ze(e,this.tracksInGroup);if(i>-1){const r=this.tracksInGroup[i];return this.setSubtitleTrack(i),r}else{if(n)return null;{const r=Ze(e,t);if(r>-1)return t[r]}}}}return null}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){const n=t.id,i=t.groupId;let r=t.url;if(e)try{r=e.addDirectives(r)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}this.log(`Loading subtitle playlist for id ${n}`),this.hls.trigger(T.SUBTITLE_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:e||null})}}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=Fn(e.textTracks),n=this.currentTrack;let i;if(n&&(i=t.filter(r=>Qi(n,r))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${n.name}" and language "${n.lang}"`)),[].slice.call(t).forEach(r=>{r.mode!=="disabled"&&r!==i&&(r.mode="disabled")}),i){const r=this.subtitleDisplay?"showing":"hidden";i.mode!==r&&(i.mode=r)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!J(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:e});return}const r=!!i.details&&!i.details.live;if(e===this.trackId&&i===n&&r)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:s,groupId:o="",name:l,type:d,url:c}=i;this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:s,groupId:o,name:l,type:d,url:c});const u=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(u)}}class Ph{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t,n){const i=this.queues[t];i.push(e),i.length===1&&!n&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const n=new Promise(r=>{t=r}),i={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(i,e),n}executeNext(e){const t=this.queues[e];if(t.length){const n=t[0];try{n.execute()}catch(i){B.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`),n.onError(i);const r=this.buffers[e];r!=null&&r.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const Xs=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;class Oh{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendSource=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this.log=void 0,this.warn=void 0,this.error=void 0,this._onEndStreaming=n=>{this.hls&&this.hls.pauseBuffering()},this._onStartStreaming=n=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=()=>{const{media:n,mediaSource:i}=this;this.log("Media source opened"),n&&(n.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(T.MEDIA_ATTACHED,{media:n,mediaSource:i})),i&&i.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:n,_objectUrl:i}=this;n!==i&&B.error(`Media element src was set while attaching MediaSource (${i} > ${n})`)},this.hls=e;const t="[buffer-controller]";this.appendSource=Vc(vt(e.config.preferManagedMediaSource)),this.log=B.log.bind(B,t),this.warn=B.warn.bind(B,t),this.error=B.error.bind(B,t),this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null,this.hls=null}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_APPENDING,this.onBufferAppending,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.BUFFER_EOS,this.onBufferEos,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(T.FRAG_PARSED,this.onFragParsed,this),e.on(T.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_APPENDING,this.onBufferAppending,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.BUFFER_EOS,this.onBufferEos,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(T.FRAG_PARSED,this.onFragParsed,this),e.off(T.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new Ph(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.appendErrors={audio:0,video:0,audiovideo:0},this.lastMpegAudioChunk=null}onManifestLoading(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){let n=2;(t.audio&&!t.video||!t.altAudio)&&(n=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=n,this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const n=this.media=t.media,i=vt(this.appendSource);if(n&&i){var r;const s=this.mediaSource=new i;this.log(`created media source: ${(r=s.constructor)==null?void 0:r.name}`),s.addEventListener("sourceopen",this._onMediaSourceOpen),s.addEventListener("sourceended",this._onMediaSourceEnded),s.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(s.addEventListener("startstreaming",this._onStartStreaming),s.addEventListener("endstreaming",this._onEndStreaming));const o=this._objectUrl=self.URL.createObjectURL(s);if(this.appendSource)try{n.removeAttribute("src");const l=self.ManagedMediaSource;n.disableRemotePlayback=n.disableRemotePlayback||l&&s instanceof l,Zs(n),Fh(n,o),n.load()}catch{n.src=o}else n.src=o;n.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:n}=this;if(t){if(this.log("media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(i){this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(t.removeEventListener("startstreaming",this._onStartStreaming),t.removeEventListener("endstreaming",this._onEndStreaming)),e&&(e.removeEventListener("emptied",this._onMediaEmptied),n&&self.URL.revokeObjectURL(n),this.mediaSrc===n?(e.removeAttribute("src"),this.appendSource&&Zs(e),e.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(T.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{this.resetBuffer(e)}),this._initSourceBuffer()}resetBuffer(e){const t=this.sourceBuffer[e];try{if(t){var n;this.removeBufferListeners(e),this.sourceBuffer[e]=void 0,(n=this.mediaSource)!=null&&n.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(t)}}catch(i){this.warn(`onBufferReset ${e}`,i)}}onBufferCodecs(e,t){const n=this.getSourceBufferTypes().length,i=Object.keys(t);if(i.forEach(s=>{if(n){const l=this.tracks[s];if(l&&typeof l.buffer.changeType=="function"){var o;const{id:d,codec:c,levelCodec:u,container:h,metadata:A}=t[s],b=bs(l.codec,l.levelCodec),v=b==null?void 0:b.replace(Xs,"$1");let x=bs(c,u);const w=(o=x)==null?void 0:o.replace(Xs,"$1");if(x&&v!==w){s.slice(0,5)==="audio"&&(x=Wn(x,this.appendSource));const L=`${h};codecs=${x}`;this.appendChangeType(s,L),this.log(`switching codec ${b} to ${x}`),this.tracks[s]={buffer:l.buffer,codec:c,container:h,levelCodec:u,metadata:A,id:d}}}}else this.pendingTracks[s]=t[s]}),n)return;const r=Math.max(this.bufferCodecEventsExpected-1,0);this.bufferCodecEventsExpected!==r&&(this.log(`${r} bufferCodec event(s) expected ${i.join(",")}`),this.bufferCodecEventsExpected=r),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks()}appendChangeType(e,t){const{operationQueue:n}=this,i={execute:()=>{const r=this.sourceBuffer[e];r&&(this.log(`changing ${e} sourceBuffer type to ${t}`),r.changeType(t)),n.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:r=>{this.warn(`Failed to change ${e} SourceBuffer type`,r)}};n.append(i,e,!!this.pendingTracks[e])}onBufferAppending(e,t){const{hls:n,operationQueue:i,tracks:r}=this,{data:s,type:o,frag:l,part:d,chunkMeta:c}=t,u=c.buffering[o],h=self.performance.now();u.start=h;const A=l.stats.buffering,b=d?d.stats.buffering:null;A.start===0&&(A.start=h),b&&b.start===0&&(b.start=h);const v=r.audio;let x=!1;o==="audio"&&(v==null?void 0:v.container)==="audio/mpeg"&&(x=!this.lastMpegAudioChunk||c.id===1||this.lastMpegAudioChunk.sn!==c.sn,this.lastMpegAudioChunk=c);const w=l.start,L={execute:()=>{if(u.executeStart=self.performance.now(),x){const I=this.sourceBuffer[o];if(I){const D=w-I.timestampOffset;Math.abs(D)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${w} (delta: ${D}) sn: ${l.sn})`),I.timestampOffset=w)}}this.appendExecutor(s,o)},onStart:()=>{},onComplete:()=>{const I=self.performance.now();u.executeEnd=u.end=I,A.first===0&&(A.first=I),b&&b.first===0&&(b.first=I);const{sourceBuffer:D}=this,R={};for(const $ in D)R[$]=ve.getBuffered(D[$]);this.appendErrors[o]=0,o==="audio"||o==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(T.BUFFER_APPENDED,{type:o,frag:l,part:d,chunkMeta:c,parent:l.type,timeRanges:R})},onError:I=>{const D={type:re.MEDIA_ERROR,parent:l.type,details:O.BUFFER_APPEND_ERROR,sourceBufferName:o,frag:l,part:d,chunkMeta:c,error:I,err:I,fatal:!1};if(I.code===DOMException.QUOTA_EXCEEDED_ERR)D.details=O.BUFFER_FULL_ERROR;else{const R=++this.appendErrors[o];D.details=O.BUFFER_APPEND_ERROR,this.warn(`Failed ${R}/${n.config.appendErrorMaxRetry} times to append segment in "${o}" sourceBuffer`),R>=n.config.appendErrorMaxRetry&&(D.fatal=!0)}n.trigger(T.ERROR,D)}};i.append(L,o,!!this.pendingTracks[o])}onBufferFlushing(e,t){const{operationQueue:n}=this,i=r=>({execute:this.removeExecutor.bind(this,r,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(T.BUFFER_FLUSHED,{type:r})},onError:s=>{this.warn(`Failed to remove from ${r} SourceBuffer`,s)}});t.type?n.append(i(t.type),t.type):this.getSourceBufferTypes().forEach(r=>{n.append(i(r),r)})}onFragParsed(e,t){const{frag:n,part:i}=t,r=[],s=i?i.elementaryStreams:n.elementaryStreams;s[ge.AUDIOVIDEO]?r.push("audiovideo"):(s[ge.AUDIO]&&r.push("audio"),s[ge.VIDEO]&&r.push("video"));const o=()=>{const l=self.performance.now();n.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const d=i?i.stats:n.stats;this.hls.trigger(T.FRAG_BUFFERED,{frag:n,part:i,stats:d,id:n.type})};r.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`),this.blockBuffers(o,r)}onFragChanged(e,t){this.trimBuffers()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((i,r)=>{const s=this.sourceBuffer[r];return s&&(!t.type||t.type===r)&&(s.ending=!0,s.ended||(s.ended=!0,this.log(`${r} sourceBuffer now EOS`))),i&&!!(!s||s.ended)},!0)&&(this.log("Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(r=>{const s=this.sourceBuffer[r];s&&(s.ending=!1)});const{mediaSource:i}=this;if(!i||i.readyState!=="open"){i&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),i.endOfStream()}))}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}trimBuffers(){const{hls:e,details:t,media:n}=this;if(!n||t===null||!this.getSourceBufferTypes().length)return;const r=e.config,s=n.currentTime,o=t.levelTargetDuration,l=t.live&&r.liveBackBufferLength!==null?r.liveBackBufferLength:r.backBufferLength;if(J(l)&&l>0){const d=Math.max(l,o),c=Math.floor(s/o)*o-d;this.flushBackBuffer(s,o,c)}if(J(r.frontBufferFlushThreshold)&&r.frontBufferFlushThreshold>0){const d=Math.max(r.maxBufferLength,r.frontBufferFlushThreshold),c=Math.max(d,o),u=Math.floor(s/o)*o+c;this.flushFrontBuffer(s,o,u)}}flushBackBuffer(e,t,n){const{details:i,sourceBuffer:r}=this;this.getSourceBufferTypes().forEach(o=>{const l=r[o];if(l){const d=ve.getBuffered(l);if(d.length>0&&n>d.start(0)){if(this.hls.trigger(T.BACK_BUFFER_REACHED,{bufferEnd:n}),i!=null&&i.live)this.hls.trigger(T.LIVE_BACK_BUFFER_REACHED,{bufferEnd:n});else if(l.ended&&d.end(d.length-1)-e<t*2){this.log(`Cannot flush ${o} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:n,type:o})}}})}flushFrontBuffer(e,t,n){const{sourceBuffer:i}=this;this.getSourceBufferTypes().forEach(s=>{const o=i[s];if(o){const l=ve.getBuffered(o),d=l.length;if(d<2)return;const c=l.start(d-1),u=l.end(d-1);if(n>c||e>=c&&e<=u)return;if(o.ended&&e-u<2*t){this.log(`Cannot flush ${s} front buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:c,endOffset:1/0,type:s})}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:n,mediaSource:i}=this,r=e.fragments[0].start+e.totalduration,s=n.duration,o=J(i.duration)?i.duration:0;e.live&&t.config.liveDurationInfinity?(i.duration=1/0,this.updateSeekableRange(e)):(r>o&&r>s||!J(s))&&(this.log(`Updating Media Source duration to ${r.toFixed(3)}`),i.duration=r)}updateSeekableRange(e){const t=this.mediaSource,n=e.fragments;if(n.length&&e.live&&t!=null&&t.setLiveSeekableRange){const r=Math.max(0,n[0].start),s=Math.max(r,r+e.totalduration);this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${r}-${s}.`),t.setLiveSeekableRange(r,s)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:n}=this,i=Object.keys(n).length;if(i&&(!e||i===2||"audiovideo"in n)){this.createSourceBuffers(n),this.pendingTracks={};const r=this.getSourceBufferTypes();if(r.length)this.hls.trigger(T.BUFFER_CREATED,{tracks:this.tracks}),r.forEach(s=>{t.executeNext(s)});else{const s=new Error("could not create source buffer for media codec(s)");this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:s,reason:s.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:n}=this;if(!n)throw Error("createSourceBuffers called when mediaSource was null");for(const r in e)if(!t[r]){var i;const s=e[r];if(!s)throw Error(`source buffer exists for track ${r}, however track does not`);let o=((i=s.levelCodec)==null?void 0:i.indexOf(","))===-1?s.levelCodec:s.codec;o&&r.slice(0,5)==="audio"&&(o=Wn(o,this.appendSource));const l=`${s.container};codecs=${o}`;this.log(`creating sourceBuffer(${l})`);try{const d=t[r]=n.addSourceBuffer(l),c=r;this.addBufferListener(c,"updatestart",this._onSBUpdateStart),this.addBufferListener(c,"updateend",this._onSBUpdateEnd),this.addBufferListener(c,"error",this._onSBUpdateError),this.appendSource&&this.addBufferListener(c,"bufferedchange",(u,h)=>{const A=h.removedRanges;A!=null&&A.length&&this.hls.trigger(T.BUFFER_FLUSHED,{type:r})}),this.tracks[r]={buffer:d,codec:o,container:s.container,levelCodec:s.levelCodec,metadata:s.metadata,id:s.id}}catch(d){this.error(`error while trying to add sourceBuffer: ${d.message}`),this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:d,sourceBufferName:r,mimeType:l})}}}get mediaSrc(){var e;const t=((e=this.media)==null?void 0:e.firstChild)||this.media;return t==null?void 0:t.src}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const{operationQueue:n}=this;n.current(e).onComplete(),n.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){var n;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(n=this.mediaSource)==null?void 0:n.readyState}`);this.error(`${i}`,t),this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const r=this.operationQueue.current(e);r&&r.onError(i)}removeExecutor(e,t,n){const{media:i,mediaSource:r,operationQueue:s,sourceBuffer:o}=this,l=o[e];if(!i||!r||!l){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),s.shiftAndExecuteNext(e);return}const d=J(i.duration)?i.duration:1/0,c=J(r.duration)?r.duration:1/0,u=Math.max(0,t),h=Math.min(n,d,c);h>u&&(!l.ending||l.ended)?(l.ended=!1,this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`),l.remove(u,h)):s.shiftAndExecuteNext(e)}appendExecutor(e,t){const n=this.sourceBuffer[t];if(!n){if(!this.pendingTracks[t])throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);return}n.ended=!1,n.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:n}=this,i=t.map(r=>n.appendBlocker(r));Promise.all(i).then(()=>{e(),t.forEach(r=>{const s=this.sourceBuffer[r];s!=null&&s.updating||n.shiftAndExecuteNext(r)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,n){const i=this.sourceBuffer[e];if(!i)return;const r=n.bind(this,e);this.listeners[e].push({event:t,listener:r}),i.addEventListener(t,r)}removeBufferListeners(e){const t=this.sourceBuffer[e];t&&this.listeners[e].forEach(n=>{t.removeEventListener(n.event,n.listener)})}}function Zs(a){const e=a.querySelectorAll("source");[].slice.call(e).forEach(t=>{a.removeChild(t)})}function Fh(a,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,a.appendChild(t)}const Js={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},ho=function(e){let t=e;return Js.hasOwnProperty(e)&&(t=Js[e]),String.fromCharCode(t)},qe=15,rt=100,Mh={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Nh={17:2,18:4,21:6,22:8,23:10,19:13,20:15},Uh={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},$h={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Gh=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class Kh{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const n=typeof t=="function"?t():t;B.log(`${this.time} [${e}] ${n}`)}}}const pt=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].toString(16));return t};class fo{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let n=0;n<t.length;n++){const i=t[n];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class Hh{constructor(){this.uchar=" ",this.penState=new fo}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class qh{constructor(e){this.chars=[],this.pos=0,this.currPenState=new fo,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<rt;t++)this.chars.push(new Hh);this.logger=e}equals(e){for(let t=0;t<rt;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<rt;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<rt;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>rt&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=rt)}moveCursor(e){const t=this.pos+e;if(e>1)for(let n=this.pos+1;n<t+1;n++)this.chars[n].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=ho(e);if(this.pos>=rt){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<rt;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let n=0;n<rt;n++){const i=this.chars[n].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class Bi{constructor(e){this.rows=[],this.currRow=qe-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<qe;t++)this.rows.push(new qh(e));this.logger=e}reset(){for(let e=0;e<qe;e++)this.rows[e].clear();this.currRow=qe-1}equals(e){let t=!0;for(let n=0;n<qe;n++)if(!this.rows[n].equals(e.rows[n])){t=!1;break}return t}copy(e){for(let t=0;t<qe;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<qe;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let o=0;o<qe;o++)this.rows[o].clear();const r=this.currRow+1-this.nrRollUpRows,s=this.lastOutputScreen;if(s){const o=s.rows[r].cueStartTime,l=this.logger.time;if(o!==null&&l!==null&&o<l)for(let d=0;d<this.nrRollUpRows;d++)this.rows[t-this.nrRollUpRows+d+1].copy(s.rows[r+d])}}this.currRow=t;const n=this.rows[this.currRow];if(e.indent!==null){const r=e.indent,s=Math.max(r-1,0);n.setCursor(e.indent),e.color=n.chars[s].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let n="",i=-1;for(let r=0;r<qe;r++){const s=this.rows[r].getTextString();s&&(i=r+1,e?t.push("Row "+i+": '"+s+"'"):t.push(s.trim()))}return t.length>0&&(e?n="["+t.join(" | ")+"]":n=t.join(`
`)),n}getTextAndFormat(){return this.rows}}class ea{constructor(e,t,n){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Bi(n),this.nonDisplayedMemory=new Bi(n),this.lastOutputScreen=new Bi(n),this.currRollUpRow=this.displayedMemory.rows[qe-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=n}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[qe-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let n=0;n<e.length;n++)this.writeScreen.insertChar(e[n]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const n=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[n]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class ta{constructor(e,t,n){this.channels=void 0,this.currentChannel=0,this.cmdHistory=ia(),this.logger=void 0;const i=this.logger=new Kh;this.channels=[null,new ea(e,t,i),new ea(e+1,n,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){let n,i,r,s=!1;this.logger.time=e;for(let o=0;o<t.length;o+=2)if(i=t[o]&127,r=t[o+1]&127,!(i===0&&r===0)){if(this.logger.log(3,"["+pt([t[o],t[o+1]])+"] -> ("+pt([i,r])+")"),n=this.parseCmd(i,r),n||(n=this.parseMidrow(i,r)),n||(n=this.parsePAC(i,r)),n||(n=this.parseBackgroundAttributes(i,r)),!n&&(s=this.parseChars(i,r),s)){const l=this.currentChannel;l&&l>0?this.channels[l].insertChars(s):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!n&&!s&&this.logger.log(2,"Couldn't parse cleaned data "+pt([i,r])+" orig: "+pt([t[o],t[o+1]]))}}parseCmd(e,t){const{cmdHistory:n}=this,i=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,r=(e===23||e===31)&&t>=33&&t<=35;if(!(i||r))return!1;if(na(e,t,n))return Bt(null,null,n),this.logger.log(3,"Repeated command ("+pt([e,t])+") is dropped"),!0;const s=e===20||e===21||e===23?1:2,o=this.channels[s];return e===20||e===21||e===28||e===29?t===32?o.ccRCL():t===33?o.ccBS():t===34?o.ccAOF():t===35?o.ccAON():t===36?o.ccDER():t===37?o.ccRU(2):t===38?o.ccRU(3):t===39?o.ccRU(4):t===40?o.ccFON():t===41?o.ccRDC():t===42?o.ccTR():t===43?o.ccRTD():t===44?o.ccEDM():t===45?o.ccCR():t===46?o.ccENM():t===47&&o.ccEOC():o.ccTO(t-32),Bt(e,t,n),this.currentChannel=s,!0}parseMidrow(e,t){let n=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?n=1:n=2,n!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[n];return i?(i.ccMIDROW(t),this.logger.log(3,"MIDROW ("+pt([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let n;const i=this.cmdHistory,r=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,s=(e===16||e===24)&&t>=64&&t<=95;if(!(r||s))return!1;if(na(e,t,i))return Bt(null,null,i),!0;const o=e<=23?1:2;t>=64&&t<=95?n=o===1?Mh[e]:Uh[e]:n=o===1?Nh[e]:$h[e];const l=this.channels[o];return l?(l.setPAC(this.interpretPAC(n,t)),Bt(e,t,i),this.currentChannel=o,!0):!1}interpretPAC(e,t){let n;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?n=t-96:n=t-64,i.underline=(n&1)===1,n<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(n/2)]:n<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((n-16)/2)*4,i}parseChars(e,t){let n,i=null,r=null;if(e>=25?(n=2,r=e-8):(n=1,r=e),r>=17&&r<=19){let s;r===17?s=t+80:r===18?s=t+112:s=t+144,this.logger.log(2,"Special char '"+ho(s)+"' in channel "+n),i=[s]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);if(i){const s=pt(i);this.logger.log(3,"Char codes =  "+s.join(",")),Bt(e,t,this.cmdHistory)}return i}parseBackgroundAttributes(e,t){const n=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(n||i))return!1;let r;const s={};e===16||e===24?(r=Math.floor((t-32)/2),s.background=Gh[r],t%2===1&&(s.background=s.background+"_semi")):t===45?s.background="transparent":(s.foreground="black",t===47&&(s.underline=!0));const o=e<=23?1:2;return this.channels[o].setBkgData(s),Bt(e,t,this.cmdHistory),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}this.cmdHistory=ia()}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const n=this.channels[t];n&&n.cueSplitAtTime(e)}}}function Bt(a,e,t){t.a=a,t.b=e}function na(a,e,t){return t.a===a&&t.b===e}function ia(){return{a:null,b:null}}class Bn{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,n){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=n,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var gr=function(){if(Ft!=null&&Ft.VTTCue)return self.VTTCue;const a=["","lr","rl"],e=["start","middle","end","left","right"];function t(o,l){if(typeof l!="string"||!Array.isArray(o))return!1;const d=l.toLowerCase();return~o.indexOf(d)?d:!1}function n(o){return t(a,o)}function i(o){return t(e,o)}function r(o,...l){let d=1;for(;d<arguments.length;d++){const c=arguments[d];for(const u in c)o[u]=c[u]}return o}function s(o,l,d){const c=this,u={enumerable:!0};c.hasBeenReset=!1;let h="",A=!1,b=o,v=l,x=d,w=null,L="",I=!0,D="auto",R="start",$=50,F="middle",H=50,Y="middle";Object.defineProperty(c,"id",r({},u,{get:function(){return h},set:function(M){h=""+M}})),Object.defineProperty(c,"pauseOnExit",r({},u,{get:function(){return A},set:function(M){A=!!M}})),Object.defineProperty(c,"startTime",r({},u,{get:function(){return b},set:function(M){if(typeof M!="number")throw new TypeError("Start time must be set to a number.");b=M,this.hasBeenReset=!0}})),Object.defineProperty(c,"endTime",r({},u,{get:function(){return v},set:function(M){if(typeof M!="number")throw new TypeError("End time must be set to a number.");v=M,this.hasBeenReset=!0}})),Object.defineProperty(c,"text",r({},u,{get:function(){return x},set:function(M){x=""+M,this.hasBeenReset=!0}})),Object.defineProperty(c,"region",r({},u,{get:function(){return w},set:function(M){w=M,this.hasBeenReset=!0}})),Object.defineProperty(c,"vertical",r({},u,{get:function(){return L},set:function(M){const q=n(M);if(q===!1)throw new SyntaxError("An invalid or illegal string was specified.");L=q,this.hasBeenReset=!0}})),Object.defineProperty(c,"snapToLines",r({},u,{get:function(){return I},set:function(M){I=!!M,this.hasBeenReset=!0}})),Object.defineProperty(c,"line",r({},u,{get:function(){return D},set:function(M){if(typeof M!="number"&&M!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");D=M,this.hasBeenReset=!0}})),Object.defineProperty(c,"lineAlign",r({},u,{get:function(){return R},set:function(M){const q=i(M);if(!q)throw new SyntaxError("An invalid or illegal string was specified.");R=q,this.hasBeenReset=!0}})),Object.defineProperty(c,"position",r({},u,{get:function(){return $},set:function(M){if(M<0||M>100)throw new Error("Position must be between 0 and 100.");$=M,this.hasBeenReset=!0}})),Object.defineProperty(c,"positionAlign",r({},u,{get:function(){return F},set:function(M){const q=i(M);if(!q)throw new SyntaxError("An invalid or illegal string was specified.");F=q,this.hasBeenReset=!0}})),Object.defineProperty(c,"size",r({},u,{get:function(){return H},set:function(M){if(M<0||M>100)throw new Error("Size must be between 0 and 100.");H=M,this.hasBeenReset=!0}})),Object.defineProperty(c,"align",r({},u,{get:function(){return Y},set:function(M){const q=i(M);if(!q)throw new SyntaxError("An invalid or illegal string was specified.");Y=q,this.hasBeenReset=!0}})),c.displayState=void 0}return s.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},s}();class Vh{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function po(a){function e(n,i,r,s){return(n|0)*3600+(i|0)*60+(r|0)+parseFloat(s||0)}const t=a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class zh{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,n){for(let i=0;i<n.length;++i)if(t===n[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const n=parseFloat(t);if(n>=0&&n<=100)return this.set(e,n),!0}return!1}}function mo(a,e,t,n){const i=n?a.split(n):[a];for(const r in i){if(typeof i[r]!="string")continue;const s=i[r].split(t);if(s.length!==2)continue;const o=s[0],l=s[1];e(o,l)}}const Xi=new gr(0,0,""),_n=Xi.align==="middle"?"middle":"center";function Yh(a,e,t){const n=a;function i(){const o=po(a);if(o===null)throw new Error("Malformed timestamp: "+n);return a=a.replace(/^[^\sa-zA-Z-]+/,""),o}function r(o,l){const d=new zh;mo(o,function(h,A){let b;switch(h){case"region":for(let v=t.length-1;v>=0;v--)if(t[v].id===A){d.set(h,t[v].region);break}break;case"vertical":d.alt(h,A,["rl","lr"]);break;case"line":b=A.split(","),d.integer(h,b[0]),d.percent(h,b[0])&&d.set("snapToLines",!1),d.alt(h,b[0],["auto"]),b.length===2&&d.alt("lineAlign",b[1],["start",_n,"end"]);break;case"position":b=A.split(","),d.percent(h,b[0]),b.length===2&&d.alt("positionAlign",b[1],["start",_n,"end","line-left","line-right","auto"]);break;case"size":d.percent(h,A);break;case"align":d.alt(h,A,["start",_n,"end","left","right"]);break}},/:/,/\s/),l.region=d.get("region",null),l.vertical=d.get("vertical","");let c=d.get("line","auto");c==="auto"&&Xi.line===-1&&(c=-1),l.line=c,l.lineAlign=d.get("lineAlign","start"),l.snapToLines=d.get("snapToLines",!0),l.size=d.get("size",100),l.align=d.get("align",_n);let u=d.get("position","auto");u==="auto"&&Xi.position===50&&(u=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=u}function s(){a=a.replace(/^\s+/,"")}if(s(),e.startTime=i(),s(),a.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+n);a=a.slice(3),s(),e.endTime=i(),s(),r(a,e)}function go(a){return a.replace(/<br(?: \/)?>/gi,`
`)}class Wh{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new Vh,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){let r=t.buffer,s=0;for(r=go(r);s<r.length&&r[s]!=="\r"&&r[s]!==`
`;)++s;const o=r.slice(0,s);return r[s]==="\r"&&++s,r[s]===`
`&&++s,t.buffer=r.slice(s),o}function i(r){mo(r,function(s,o){},/:/)}try{let r="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;r=n();const o=r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(o!=null&&o[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let s=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(s?s=!1:r=n(),t.state){case"HEADER":/:/.test(r)?i(r):r||(t.state="ID");continue;case"NOTE":r||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){t.state="NOTE";break}if(!r)continue;if(t.cue=new gr(0,0,""),t.state="CUE",r.indexOf("-->")===-1){t.cue.id=r;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{Yh(r,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const o=r.indexOf("-->")!==-1;if(!r||o&&(s=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=r}continue;case"BADCUE":r||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const jh=/\r\n|\n\r|\n|\r/g,_i=function(e,t,n=0){return e.slice(n,n+t.length)===t},Qh=function(e){let t=parseInt(e.slice(-3));const n=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),r=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!J(t)||!J(n)||!J(i)||!J(r))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*n,t+=60*1e3*i,t+=60*60*1e3*r,t},Pi=function(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0).toString()};function yr(a,e,t){return Pi(a.toString())+Pi(e.toString())+Pi(t)}const Xh=function(e,t,n){let i=e[t],r=e[i.prevCC];if(!r||!r.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(s=r)!=null&&s.new;){var s;e.ccOffset+=i.start-r.start,i.new=!1,i=r,r=e[i.prevCC]}e.presentationOffset=n};function Zh(a,e,t,n,i,r,s){const o=new Wh,l=Je(new Uint8Array(a)).trim().replace(jh,`
`).split(`
`),d=[],c=e?Ah(e.baseTime,e.timescale):0;let u="00:00.000",h=0,A=0,b,v=!0;o.oncue=function(x){const w=t[n];let L=t.ccOffset;const I=(h-c)/9e4;if(w!=null&&w.new&&(A!==void 0?L=t.ccOffset=w.start:Xh(t,n,I)),I){if(!e){b=new Error("Missing initPTS for VTT MPEGTS");return}L=I-t.presentationOffset}const D=x.endTime-x.startTime,R=$e((x.startTime+L-A)*9e4,i*9e4)/9e4;x.startTime=Math.max(R,0),x.endTime=Math.max(R+D,0);const $=x.text.trim();x.text=decodeURIComponent(encodeURIComponent($)),x.id||(x.id=yr(x.startTime,x.endTime,$)),x.endTime>0&&d.push(x)},o.onparsingerror=function(x){b=x},o.onflush=function(){if(b){s(b);return}r(d)},l.forEach(x=>{if(v)if(_i(x,"X-TIMESTAMP-MAP=")){v=!1,x.slice(16).split(",").forEach(w=>{_i(w,"LOCAL:")?u=w.slice(6):_i(w,"MPEGTS:")&&(h=parseInt(w.slice(7)))});try{A=Qh(u)/1e3}catch(w){b=w}return}else x===""&&(v=!1);o.parse(x+`
`)}),o.flush()}const Oi="stpp.ttml.im1t",yo=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Ao=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,Jh={left:"start",center:"center",right:"end",start:"start",end:"end"};function ra(a,e,t,n){const i=de(new Uint8Array(a),["mdat"]);if(i.length===0){n(new Error("Could not parse IMSC1 mdat"));return}const r=i.map(o=>Je(o)),s=yh(e.baseTime,1,e.timescale);try{r.forEach(o=>t(ef(o,s)))}catch(o){n(o)}}function ef(a,e){const i=new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const r={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},s=Object.keys(r).reduce((u,h)=>(u[h]=i.getAttribute(`ttp:${h}`)||r[h],u),{}),o=i.getAttribute("xml:space")!=="preserve",l=sa(Fi(i,"styling","style")),d=sa(Fi(i,"layout","region")),c=Fi(i,"body","[begin]");return[].map.call(c,u=>{const h=bo(u,o);if(!h||!u.hasAttribute("begin"))return null;const A=Ni(u.getAttribute("begin"),s),b=Ni(u.getAttribute("dur"),s);let v=Ni(u.getAttribute("end"),s);if(A===null)throw aa(u);if(v===null){if(b===null)throw aa(u);v=A+b}const x=new gr(A-e,v-e,h);x.id=yr(x.startTime,x.endTime,x.text);const w=d[u.getAttribute("region")],L=l[u.getAttribute("style")],I=tf(w,L,l),{textAlign:D}=I;if(D){const R=Jh[D];R&&(x.lineAlign=R),x.align=D}return we(x,I),x}).filter(u=>u!==null)}function Fi(a,e,t){const n=a.getElementsByTagName(e)[0];return n?[].slice.call(n.querySelectorAll(t)):[]}function sa(a){return a.reduce((e,t)=>{const n=t.getAttribute("xml:id");return n&&(e[n]=t),e},{})}function bo(a,e){return[].slice.call(a.childNodes).reduce((t,n,i)=>{var r;return n.nodeName==="br"&&i?t+`
`:(r=n.childNodes)!=null&&r.length?bo(n,e):e?t+n.textContent.trim().replace(/\s+/g," "):t+n.textContent},"")}function tf(a,e,t){const n="http://www.w3.org/ns/ttml#styling";let i=null;const r=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],s=a!=null&&a.hasAttribute("style")?a.getAttribute("style"):null;return s&&t.hasOwnProperty(s)&&(i=t[s]),r.reduce((o,l)=>{const d=Mi(e,n,l)||Mi(a,n,l)||Mi(i,n,l);return d&&(o[l]=d),o},{})}function Mi(a,e,t){return a&&a.hasAttributeNS(e,t)?a.getAttributeNS(e,t):null}function aa(a){return new Error(`Could not parse ttml timestamp ${a}`)}function Ni(a,e){if(!a)return null;let t=po(a);return t===null&&(yo.test(a)?t=nf(a,e):Ao.test(a)&&(t=rf(a,e))),t}function nf(a,e){const t=yo.exec(a),n=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+n/e.frameRate}function rf(a,e){const t=Ao.exec(a),n=Number(t[1]);switch(t[2]){case"h":return n*3600;case"m":return n*60;case"ms":return n*1e3;case"f":return n/e.frameRate;case"t":return n/e.tickRate}return n}class sf{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=la(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){if(this.config.enableCEA708Captions&&(!this.cea608Parser1||!this.cea608Parser2)){const e=new Bn(this,"textTrack1"),t=new Bn(this,"textTrack2"),n=new Bn(this,"textTrack3"),i=new Bn(this,"textTrack4");this.cea608Parser1=new ta(1,e,t),this.cea608Parser2=new ta(3,n,i)}}addCues(e,t,n,i,r){let s=!1;for(let o=r.length;o--;){const l=r[o],d=af(l[0],l[1],t,n);if(d>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],n),s=!0,d/(n-t)>.5))return}if(s||r.push([t,n]),this.config.renderTextTracksNatively){const o=this.captionsTracks[e];this.Cues.newCue(o,t,n,i)}else{const o=this.Cues.newCue(null,t,n,i);this.hls.trigger(T.CUES_PARSED,{type:"captions",cues:o,track:e})}}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){const{unparsedVttFrags:s}=this;n==="main"&&(this.initPTS[t.cc]={baseTime:i,timescale:r}),s.length&&(this.unparsedVttFrags=[],s.forEach(o=>{this.onFragLoaded(T.FRAG_LOADED,o)}))}getExistingTrack(e,t){const{media:n}=this;if(n)for(let i=0;i<n.textTracks.length;i++){const r=n.textTracks[i];if(oa(r,{name:e,lang:t,attrs:{}}))return r}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:n,media:i}=this,{label:r,languageCode:s}=t[e],o=this.getExistingTrack(r,s);if(o)n[e]=o,_t(n[e]),Na(n[e],i);else{const l=this.createTextTrack("captions",r,s);l&&(l[e]=!0,n[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const n=t.label,i={_id:e,label:n,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,n){const i=this.media;if(i)return i.addTextTrack(e,t,n)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{_t(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=la(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let n=0;n<t.length;n++)_t(t[n])}onSubtitleTracksUpdated(e,t){const n=t.subtitleTracks||[],i=n.some(r=>r.textCodec===Oi);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(uo(this.tracks,n)){this.tracks=n;return}if(this.textTracks=[],this.tracks=n,this.config.renderTextTracksNatively){const s=this.media,o=s?Fn(s.textTracks):null;if(this.tracks.forEach((l,d)=>{let c;if(o){let u=null;for(let h=0;h<o.length;h++)if(o[h]&&oa(o[h],l)){u=o[h],o[h]=null;break}u&&(c=u)}if(c)_t(c);else{const u=vo(l);c=this.createTextTrack(u,l.name,l.lang),c&&(c.mode="disabled")}c&&this.textTracks.push(c)}),o!=null&&o.length){const l=o.filter(d=>d!==null).map(d=>d.label);l.length&&B.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const s=this.tracks.map(o=>({label:o.name,kind:o.type.toLowerCase(),default:o.default,subtitleTrack:o}));this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(n=>{const i=/(?:CC|SERVICE)([1-4])/.exec(n.instreamId);if(!i)return;const r=`textTrack${i[1]}`,s=this.captionsProperties[r];s&&(s.label=n.name,n.lang&&(s.languageCode=n.lang),s.media=n)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){this.initCea608Parsers();const{cea608Parser1:n,cea608Parser2:i,lastCc:r,lastSn:s,lastPartIndex:o}=this;if(!(!this.enabled||!n||!i)&&t.frag.type===ie.MAIN){var l,d;const{cc:c,sn:u}=t.frag,h=(l=t==null||(d=t.part)==null?void 0:d.index)!=null?l:-1;u===s+1||u===s&&h===o+1||c===r||(n.reset(),i.reset()),this.lastCc=c,this.lastSn=u,this.lastPartIndex=h}}onFragLoaded(e,t){const{frag:n,payload:i}=t;if(n.type===ie.SUBTITLE)if(i.byteLength){const r=n.decryptdata,s="stats"in t;if(r==null||!r.encrypted||s){const o=this.tracks[n.level],l=this.vttCCs;l[n.cc]||(l[n.cc]={start:n.start,prevCC:this.prevCC,new:!0},this.prevCC=n.cc),o&&o.textCodec===Oi?this._parseIMSC1(n,i):this._parseVTTs(t)}}else this.hls.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const n=this.hls;ra(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),n.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{B.log(`Failed to parse IMSC1: ${i}`),n.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:n,payload:i}=e,{initPTS:r,unparsedVttFrags:s}=this,o=r.length-1;if(!r[n.cc]&&o===-1){s.push(e);return}const l=this.hls,d=(t=n.initSegment)!=null&&t.data?Ge(n.initSegment.data,new Uint8Array(i)):i;Zh(d,this.initPTS[n.cc],this.vttCCs,n.cc,n.start,c=>{this._appendCues(c,n.level),l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:n})},c=>{const u=c.message==="Missing initPTS for VTT MPEGTS";u?s.push(e):this._fallbackToIMSC1(n,i),B.log(`Failed to parse VTT cue: ${c}`),!(u&&o>n.cc)&&l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:c})})}_fallbackToIMSC1(e,t){const n=this.tracks[e.level];n.textCodec||ra(t,this.initPTS[e.cc],()=>{n.textCodec=Oi,this._parseIMSC1(e,t)},()=>{n.textCodec="wvtt"})}_appendCues(e,t){const n=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(r=>Ua(i,r))}else{const i=this.tracks[t];if(!i)return;const r=i.default?"default":"subtitles"+t;n.trigger(T.CUES_PARSED,{type:"subtitles",cues:e,track:r})}}onFragDecrypted(e,t){const{frag:n}=t;n.type===ie.SUBTITLE&&this.onFragLoaded(T.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){this.initCea608Parsers();const{cea608Parser1:n,cea608Parser2:i}=this;if(!this.enabled||!n||!i)return;const{frag:r,samples:s}=t;if(!(r.type===ie.MAIN&&this.closedCaptionsForLevel(r)==="NONE"))for(let o=0;o<s.length;o++){const l=s[o].bytes;if(l){const d=this.extractCea608Data(l);n.addData(s[o].pts,d[0]),i.addData(s[o].pts,d[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:n,endOffsetSubtitles:i,type:r}){const{media:s}=this;if(!(!s||s.currentTime<n)){if(!r||r==="video"){const{captionsTracks:o}=this;Object.keys(o).forEach(l=>qi(o[l],t,n))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:o}=this;Object.keys(o).forEach(l=>qi(o[l],t,i))}}}extractCea608Data(e){const t=[[],[]],n=e[0]&31;let i=2;for(let r=0;r<n;r++){const s=e[i++],o=127&e[i++],l=127&e[i++];if(o===0&&l===0)continue;if((4&s)!==0){const c=3&s;(c===0||c===1)&&(t[c].push(o),t[c].push(l))}}return t}}function vo(a){return a.characteristics&&/transcribes-spoken-dialog/gi.test(a.characteristics)&&/describes-music-and-sound/gi.test(a.characteristics)?"captions":"subtitles"}function oa(a,e){return!!a&&a.kind===vo(e)&&Qi(e,a)}function af(a,e,t,n){return Math.min(e,n)-Math.max(a,t)}function la(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class Ar{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const n=this.hls.levels[t.droppedLevel];this.isLevelAllowed(n)&&this.restrictedLevels.push({bitrate:n.bitrate,height:n.height,width:n.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const n=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,n.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&J(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,n=this.getMaxLevel(e.length-1);n!==this.autoLevelCapping&&B.log(`Setting autoLevelCapping to ${n}: ${e[n].height}p@${e[n].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=n,t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const n=t.filter((i,r)=>this.isLevelAllowed(i)&&r<=e);return this.clientRect=null,Ar.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,!t.width&&!t.height&&(t.width=n.right-n.left||e.width||0,t.height=n.bottom-n.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(n=>e.bitrate===n.bitrate&&e.width===n.width&&e.height===n.height)}static getMaxLevelByMediaSize(e,t,n){if(!(e!=null&&e.length))return-1;const i=(o,l)=>l?o.width!==l.width||o.height!==l.height:!0;let r=e.length-1;const s=Math.max(t,n);for(let o=0;o<e.length;o+=1){const l=e[o];if((l.width>=s||l.height>=s)&&i(l,e[o+1])){r=o;break}}return r}}class of{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const n=this.hls.config;if(n.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),n.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,n){const i=performance.now();if(t){if(this.lastTime){const r=i-this.lastTime,s=n-this.lastDroppedFrames,o=t-this.lastDecodedFrames,l=1e3*s/r,d=this.hls;if(d.trigger(T.FPS_DROP,{currentDropped:s,currentDecoded:o,totalDroppedFrames:n}),l>0&&s>d.config.fpsDroppedMonitoringThreshold*o){let c=d.currentLevel;B.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(d.autoLevelCapping===-1||d.autoLevelCapping>=c)&&(c=c-1,d.trigger(T.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:d.currentLevel}),d.autoLevelCapping=c,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=n,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const Pn="[eme]";class Ot{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=Ot.CDMCleanupPromise?[Ot.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=B.debug.bind(B,Pn),this.log=B.log.bind(B,Pn),this.warn=B.warn.bind(B,Pn),this.error=B.error.bind(B,Pn),this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:n}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===xe.WIDEVINE&&n)return n;throw new Error(`no license server URL configured for key-system "${e}"`)}getServerCertificateUrl(e){const{drmSystems:t}=this.config,n=t[e];if(n)return n.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,n=(s,o,l)=>!!s&&l.indexOf(s)===o,i=t.map(s=>s.audioCodec).filter(n),r=t.map(s=>s.videoCodec).filter(n);return i.length+r.length===0&&r.push("avc1.42e01e"),new Promise((s,o)=>{const l=d=>{const c=d.shift();this.getMediaKeysPromise(c,i,r).then(u=>s({keySystem:c,mediaKeys:u})).catch(u=>{d.length?l(d):u instanceof Ue?o(u):o(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:n}=this.config;if(typeof n!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${n}`;return Ca===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return n(e,t)}getMediaKeysPromise(e,t,n){const i=yc(e,t,n,this.config.drmSystemOptions),r=this.keySystemAccessPromises[e];let s=r==null?void 0:r.keySystemAccess;if(!s){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`),s=this.requestMediaKeySystemAccess(e,i);const o=this.keySystemAccessPromises[e]={keySystemAccess:s};return s.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),s.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const d=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),o.mediaKeys=l.createMediaKeys().then(c=>(this.log(`Media-keys created for "${e}"`),d.then(u=>u?this.setMediaKeysServerCertificate(c,e,u):c))),o.mediaKeys.catch(c=>{this.error(`Failed to create media-keys for "${e}"}: ${c}`)}),o.mediaKeys})}return s.then(()=>r.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:n}){this.log(`Creating key-system session "${t}" keyId: ${We.hexDump(e.keyId||[])}`);const i=n.createSession(),r={decryptdata:e,keySystem:t,mediaKeys:n,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(r),r}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const n=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),r="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(n,r,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return We.hexDump(e.keyId)}updateKeySession(e,t){var n;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${We.hexDump(((n=e.decryptdata)==null?void 0:n.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,n)=>{const i=vi(this.config),r=e.map(hs).filter(s=>!!s&&i.indexOf(s)!==-1);return this.getKeySystemSelectionPromise(r).then(({keySystem:s})=>{const o=fs(s);o?t(o):n(new Error(`Unable to find format for key-system "${s}"`))}).catch(n)})}loadKey(e){const t=e.keyInfo.decryptdata,n=this.getKeyIdString(t),i=`(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let r=this.keyIdToKeySessionPromise[n];return r||(r=this.keyIdToKeySessionPromise[n]=this.getKeySystemForKeyPromise(t).then(({keySystem:s,mediaKeys:o})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(s,o).then(()=>{this.throwIfDestroyed();const l=this.createMediaKeySessionContext({keySystem:s,mediaKeys:o,decryptdata:t}),d="cenc";return this.generateRequestWithPreferredKeySession(l,d,t.pssh,"playlist-key")}))),r.catch(s=>this.handleError(s))),r}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof Ue?this.hls.trigger(T.ERROR,e.data):this.hls.trigger(T.ERROR,{type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),n=this.keyIdToKeySessionPromise[t];if(!n){const i=hs(e.keyFormat),r=i?[i]:vi(this.config);return this.attemptKeySystemAccess(r)}return n}getKeySystemSelectionPromise(e){if(e.length||(e=vi(this.config)),e.length===0)throw new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}_onMediaEncrypted(e){const{initDataType:t,initData:n}=e;if(this.debug(`"${e.type}" event: init data type: "${t}"`),n===null)return;let i,r;if(t==="sinf"&&this.config.drmSystems[xe.FAIRPLAY]){const c=Ie(new Uint8Array(n));try{const u=ir(JSON.parse(c).sinf),h=_a(new Uint8Array(u));if(!h)return;i=h.subarray(8,24),r=xe.FAIRPLAY}catch{this.warn('Failed to parse sinf "encrypted" event message initData');return}}else{const c=Kc(n);if(c===null)return;c.version===0&&c.systemId===Ta.WIDEVINE&&c.data&&(i=c.data.subarray(8,24)),r=gc(c.systemId)}if(!r||!i)return;const s=We.hexDump(i),{keyIdToKeySessionPromise:o,mediaKeySessions:l}=this;let d=o[s];for(let c=0;c<l.length;c++){const u=l[c],h=u.decryptdata;if(h.pssh||!h.keyId)continue;const A=We.hexDump(h.keyId);if(s===A||h.uri.replace(/-/g,"").indexOf(s)!==-1){d=o[A],delete o[A],h.pssh=new Uint8Array(n),h.keyId=i,d=o[s]=d.then(()=>this.generateRequestWithPreferredKeySession(u,t,n,"encrypted-event-key-match"));break}}d||(d=o[s]=this.getKeySystemSelectionPromise([r]).then(({keySystem:c,mediaKeys:u})=>{var h;this.throwIfDestroyed();const A=new mn("ISO-23001-7",s,(h=fs(c))!=null?h:"");return A.pssh=new Uint8Array(n),A.keyId=i,this.attemptSetMediaKeys(c,u).then(()=>{this.throwIfDestroyed();const b=this.createMediaKeySessionContext({decryptdata:A,keySystem:c,mediaKeys:u});return this.generateRequestWithPreferredKeySession(b,t,n,"encrypted-event-no-match")})})),d.catch(c=>this.handleError(c))}_onWaitingForKey(e){this.log(`"${e.type}" event`)}attemptSetMediaKeys(e,t){const n=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(n).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),n.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(r=>n.indexOf(r)===-1)})}generateRequestWithPreferredKeySession(e,t,n,i){var r,s;const o=(r=this.config.drmSystems)==null||(s=r[e.keySystem])==null?void 0:s.generateRequest;if(o)try{const b=o.call(this.hls,t,n,e);if(!b)throw new Error("Invalid response from configured generateRequest filter");t=b.initDataType,n=e.decryptdata.pssh=b.initData?new Uint8Array(b.initData):null}catch(b){var l;if(this.warn(b.message),(l=this.hls)!=null&&l.config.debug)throw b}if(n===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const d=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${d} (init data type: ${t} length: ${n?n.byteLength:null})`);const c=new mr,u=e._onmessage=b=>{const v=e.mediaKeysSession;if(!v){c.emit("error",new Error("invalid state"));return}const{messageType:x,message:w}=b;this.log(`"${x}" message event for session "${v.sessionId}" message size: ${w.byteLength}`),x==="license-request"||x==="license-renewal"?this.renewLicense(e,w).catch(L=>{this.handleError(L),c.emit("error",L)}):x==="license-release"?e.keySystem===xe.FAIRPLAY&&(this.updateKeySession(e,Ki("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${x}"`)},h=e._onkeystatuseschange=b=>{if(!e.mediaKeysSession){c.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const x=e.keyStatus;c.emit("keyStatus",x),x==="expired"&&(this.warn(`${e.keySystem} expired for key ${d}`),this.renewKeySession(e))};e.mediaKeysSession.addEventListener("message",u),e.mediaKeysSession.addEventListener("keystatuseschange",h);const A=new Promise((b,v)=>{c.on("error",v),c.on("keyStatus",x=>{x.startsWith("usable")?b():x==="output-restricted"?v(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):x==="internal-error"?v(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${x}"`)):x==="expired"?v(new Error("key expired while generating request")):this.warn(`unhandled key status change "${x}"`)})});return e.mediaKeysSession.generateRequest(t,n).then(()=>{var b;this.log(`Request generated for key-session "${(b=e.mediaKeysSession)==null?void 0:b.sessionId}" keyId: ${d}`)}).catch(b=>{throw new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_SESSION,error:b,fatal:!1},`Error generating key-session request: ${b}`)}).then(()=>A).catch(b=>{throw c.removeAllListeners(),this.removeSession(e),b}).then(()=>(c.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,n)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${We.hexDump("buffer"in n?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n))} session keyId: ${We.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,n=t.loader,i=new n(t),r=this.getServerCertificateUrl(e);return r?(this.log(`Fetching server certificate for "${e}"`),new Promise((s,o)=>{const l={responseType:"arraybuffer",url:r},d=t.certLoadPolicy.default,c={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,A,b,v)=>{s(h.data)},onError:(h,A,b,v)=>{o(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:b,response:Be({url:l.url,data:void 0},h)},`"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`))},onTimeout:(h,A,b)=>{o(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:b,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${r})`))},onAbort:(h,A,b)=>{o(new Error("aborted"))}};i.load(l,c,u)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,n){return new Promise((i,r)=>{e.setServerCertificate(n).then(s=>{this.log(`setServerCertificate ${s?"success":"not supported by CDM"} (${n==null?void 0:n.byteLength}) on "${t}"`),i(e)}).catch(s=>{r(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:s,fatal:!0},s.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(n=>this.updateKeySession(e,new Uint8Array(n)).catch(i=>{throw new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const n=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!n.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(n,"application/xml"),r=i.querySelectorAll("HttpHeader");if(r.length>0){let c;for(let u=0,h=r.length;u<h;u++){var s,o;c=r[u];const A=(s=c.querySelector("name"))==null?void 0:s.textContent,b=(o=c.querySelector("value"))==null?void 0:o.textContent;A&&b&&e.setRequestHeader(A,b)}}const l=i.querySelector("Challenge"),d=l==null?void 0:l.textContent;if(!d)throw new Error("Cannot find <Challenge> in key message");return Ki(atob(d))}setupLicenseXHR(e,t,n,i){const r=this.config.licenseXhrSetup;return r?Promise.resolve().then(()=>{if(!n.decryptdata)throw new Error("Key removed");return r.call(this.hls,e,t,n,i)}).catch(s=>{if(!n.decryptdata)throw s;return e.open("POST",t,!0),r.call(this.hls,e,t,n,i)}).then(s=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:s||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const n=this.config.keyLoadPolicy.default;return new Promise((i,r)=>{const s=this.getLicenseServerUrl(e.keySystem);this.log(`Sending license request to URL: ${s}`);const o=new XMLHttpRequest;o.responseType="arraybuffer",o.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return r(new Error("invalid state"));if(o.readyState===4)if(o.status===200){this._requestLicenseFailureCount=0;let l=o.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const d=this.config.licenseResponseCallback;if(d)try{l=d.call(this.hls,o,s,e)}catch(c){this.error(c)}i(l)}else{const l=n.errorRetry,d=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>d||o.status>=400&&o.status<500)r(new Ue({type:re.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:o,response:{url:s,data:void 0,code:o.status,text:o.statusText}},`License Request XHR failed (${s}). Status: ${o.status} (${o.statusText})`));else{const c=d-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${c} attempts left`),this.requestLicense(e,t).then(i,r)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=o,this.setupLicenseXHR(o,s,e,t).then(({xhr:l,licenseChallenge:d})=>{e.keySystem==xe.PLAYREADY&&(d=this.unpackPlayReadyKeyMessage(l,d)),l.send(d)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const n=t.media;this.media=n,n.addEventListener("encrypted",this.onMediaEncrypted),n.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media,t=this.mediaKeySessions;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},mn.clearKeyUriToKeyIdMap();const n=t.length;Ot.CDMCleanupPromise=Promise.all(t.map(i=>this.removeSession(i)).concat(e==null?void 0:e.setMediaKeys(null).catch(i=>{this.log(`Could not clear media keys: ${i}`)}))).then(()=>{n&&(this.log("finished closing key sessions and clearing media keys"),t.length=0)}).catch(i=>{this.log(`Could not close sessions and clear media keys: ${i}`)})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const n=t.reduce((i,r)=>(i.indexOf(r.keyFormat)===-1&&i.push(r.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${n.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(n)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:n}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),n&&n.readyState!==XMLHttpRequest.DONE&&n.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);return i>-1&&this.mediaKeySessions.splice(i,1),t.remove().catch(r=>{this.log(`Could not remove session: ${r}`)}).then(()=>t.close()).catch(r=>{this.log(`Could not close session: ${r}`)})}}}Ot.CDMCleanupPromise=void 0;class Ue extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}var Oe;(function(a){a.MANIFEST="m",a.AUDIO="a",a.VIDEO="v",a.MUXED="av",a.INIT="i",a.CAPTION="c",a.TIMED_TEXT="tt",a.KEY="k",a.OTHER="o"})(Oe||(Oe={}));var Zi;(function(a){a.DASH="d",a.HLS="h",a.SMOOTH="s",a.OTHER="o"})(Zi||(Zi={}));var gt;(function(a){a.OBJECT="CMCD-Object",a.REQUEST="CMCD-Request",a.SESSION="CMCD-Session",a.STATUS="CMCD-Status"})(gt||(gt={}));const lf={[gt.OBJECT]:["br","d","ot","tb"],[gt.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[gt.SESSION]:["cid","pr","sf","sid","st","v"],[gt.STATUS]:["bs","rtp"]};class Ut{constructor(e,t){this.value=void 0,this.params=void 0,Array.isArray(e)&&(e=e.map(n=>n instanceof Ut?n:new Ut(n))),this.value=e,this.params=t}}class Eo{constructor(e){this.description=void 0,this.description=e}}const df="Dict";function cf(a){return Array.isArray(a)?JSON.stringify(a):a instanceof Map?"Map{}":a instanceof Set?"Set{}":typeof a=="object"?JSON.stringify(a):String(a)}function uf(a,e,t,n){return new Error(`failed to ${a} "${cf(e)}" as ${t}`,{cause:n})}const da="Bare Item",hf="Boolean",ff="Byte Sequence",pf="Decimal",mf="Integer";function gf(a){return a<-999999999999999||999999999999999<a}const yf=/[\x00-\x1f\x7f]+/,Af="Token",bf="Key";function et(a,e,t){return uf("serialize",a,e,t)}function vf(a){if(typeof a!="boolean")throw et(a,hf);return a?"?1":"?0"}function Ef(a){return btoa(String.fromCharCode(...a))}function xf(a){if(ArrayBuffer.isView(a)===!1)throw et(a,ff);return`:${Ef(a)}:`}function xo(a){if(gf(a))throw et(a,mf);return a.toString()}function Sf(a){return`@${xo(a.getTime()/1e3)}`}function So(a,e){if(a<0)return-So(-a,e);const t=Math.pow(10,e);if(Math.abs(a*t%1-.5)<Number.EPSILON){const i=Math.floor(a*t);return(i%2===0?i:i+1)/t}else return Math.round(a*t)/t}function Tf(a){const e=So(a,3);if(Math.floor(Math.abs(e)).toString().length>12)throw et(a,pf);const t=e.toString();return t.includes(".")?t:`${t}.0`}const Cf="String";function wf(a){if(yf.test(a))throw et(a,Cf);return`"${a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function kf(a){return a.description||a.toString().slice(7,-1)}function ca(a){const e=kf(a);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw et(e,Af);return e}function Ji(a){switch(typeof a){case"number":if(!J(a))throw et(a,da);return Number.isInteger(a)?xo(a):Tf(a);case"string":return wf(a);case"symbol":return ca(a);case"boolean":return vf(a);case"object":if(a instanceof Date)return Sf(a);if(a instanceof Uint8Array)return xf(a);if(a instanceof Eo)return ca(a);default:throw et(a,da)}}function er(a){if(/^[a-z*][a-z0-9\-_.*]*$/.test(a)===!1)throw et(a,bf);return a}function br(a){return a==null?"":Object.entries(a).map(([e,t])=>t===!0?`;${er(e)}`:`;${er(e)}=${Ji(t)}`).join("")}function To(a){return a instanceof Ut?`${Ji(a.value)}${br(a.params)}`:Ji(a)}function Lf(a){return`(${a.value.map(To).join(" ")})${br(a.params)}`}function If(a,e={whitespace:!0}){if(typeof a!="object")throw et(a,df);const t=a instanceof Map?a.entries():Object.entries(a),n=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,r])=>{r instanceof Ut||(r=new Ut(r));let s=er(i);return r.value===!0?s+=br(r.params):(s+="=",Array.isArray(r.value)?s+=Lf(r):s+=To(r)),s}).join(`,${n}`)}function Rf(a,e){return If(a,e)}const Df=a=>a==="ot"||a==="sf"||a==="st",Bf=a=>typeof a=="number"?J(a):a!=null&&a!==""&&a!==!1;function _f(a,e){const t=new URL(a),n=new URL(e);if(t.origin!==n.origin)return a;const i=t.pathname.split("/").slice(1),r=n.pathname.split("/").slice(1,-1);for(;i[0]===r[0];)i.shift(),r.shift();for(;r.length;)r.shift(),i.unshift("..");return i.join("/")}function Pf(){try{return crypto.randomUUID()}catch{try{const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}catch{let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?r:r&3|8).toString(16)})}}}const Kn=a=>Math.round(a),Of=(a,e)=>(e!=null&&e.baseUrl&&(a=_f(a,e.baseUrl)),encodeURIComponent(a)),On=a=>Kn(a/100)*100,Ff={br:Kn,d:Kn,bl:On,dl:On,mtp:On,nor:Of,rtp:On,tb:Kn};function Mf(a,e){const t={};if(a==null||typeof a!="object")return t;const n=Object.keys(a).sort(),i=we({},Ff,e==null?void 0:e.formatters),r=e==null?void 0:e.filter;return n.forEach(s=>{if(r!=null&&r(s))return;let o=a[s];const l=i[s];l&&(o=l(o,e)),!(s==="v"&&o===1)&&(s=="pr"&&o===1||Bf(o)&&(Df(s)&&typeof o=="string"&&(o=new Eo(o)),t[s]=o))}),t}function Co(a,e={}){return a?Rf(Mf(a,e),we({whitespace:!1},e)):""}function Nf(a,e={}){if(!a)return{};const t=Object.entries(a),n=Object.entries(lf).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),i=t.reduce((r,s)=>{var o,l;const[d,c]=s,u=((o=n.find(h=>h[1].includes(d)))==null?void 0:o[0])||gt.REQUEST;return(l=r[u])!=null||(r[u]={}),r[u][d]=c,r},{});return Object.entries(i).reduce((r,[s,o])=>(r[s]=Co(o,e),r),{})}function Uf(a,e,t){return we(a,Nf(e,t))}const $f="CMCD";function Gf(a,e={}){if(!a)return"";const t=Co(a,e);return`${$f}=${encodeURIComponent(t)}`}const ua=/CMCD=[^&#]+/;function Kf(a,e,t){const n=Gf(e,t);if(!n)return a;if(ua.test(a))return a.replace(ua,n);const i=a.includes("?")?"&":"?";return`${a}${i}${n}`}class Hf{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:Oe.MANIFEST,su:!this.initialized})}catch(r){B.warn("Could not generate manifest CMCD data.",r)}},this.applyFragmentData=i=>{try{const r=i.frag,s=this.hls.levels[r.level],o=this.getObjectType(r),l={d:r.duration*1e3,ot:o};(o===Oe.VIDEO||o===Oe.AUDIO||o==Oe.MUXED)&&(l.br=s.bitrate/1e3,l.tb=this.getTopBandwidth(o)/1e3,l.bl=this.getBufferLength(o)),this.apply(i,l)}catch(r){B.warn("Could not generate segment CMCD data.",r)}},this.hls=e;const t=this.config=e.config,{cmcd:n}=t;n!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||Pf(),this.cid=n.contentId,this.useHeaders=n.useHeaders===!0,this.includeKeys=n.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHED,this.onMediaDetached,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHED,this.onMediaDetached,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var n,i;this.audioBuffer=(n=t.tracks.audio)==null?void 0:n.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:Zi.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){we(t,this.createData());const n=t.ot===Oe.INIT||t.ot===Oe.VIDEO||t.ot===Oe.MUXED;this.starved&&n&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((r,s)=>(i.includes(s)&&(r[s]=t[s]),r),{})),this.useHeaders?(e.headers||(e.headers={}),Uf(e.headers,t)):e.url=Kf(e.url,t)}getObjectType(e){const{type:t}=e;if(t==="subtitle")return Oe.TIMED_TEXT;if(e.sn==="initSegment")return Oe.INIT;if(t==="audio")return Oe.AUDIO;if(t==="main")return this.hls.audioTracks.length?Oe.VIDEO:Oe.MUXED}getTopBandwidth(e){let t=0,n;const i=this.hls;if(e===Oe.AUDIO)n=i.audioTracks;else{const r=i.maxAutoLevel,s=r>-1?r+1:i.levels.length;n=i.levels.slice(0,s)}for(const r of n)r.bitrate>t&&(t=r.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.hls.media,n=e===Oe.AUDIO?this.audioBuffer:this.videoBuffer;return!n||!t?NaN:ve.bufferInfo(n,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}}const qf=3e5;class Vf{constructor(e){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.log=B.log.bind(B,"[content-steering]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.ERROR,this.onError,this))}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(n=>n!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:n}=t;n!==null&&(this.pathwayId=n.pathwayId,this.uri=n.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:n}=t;if((n==null?void 0:n.action)===Pe.SendAlternateToPenaltyBox&&n.flags===He.MoveAllAlternatesMatchingHost){const i=this.levels;let r=this.pathwayPriority,s=this.pathwayId;if(t.context){const{groupId:o,pathwayId:l,type:d}=t.context;o&&i?s=this.getPathwayForGroupId(o,d,s):l&&(s=l)}s in this.penalizedPathways||(this.penalizedPathways[s]=performance.now()),!r&&i&&(r=i.reduce((o,l)=>(o.indexOf(l.pathwayId)===-1&&o.push(l.pathwayId),o),[])),r&&r.length>1&&(this.updatePathwayPriority(r),n.resolved=this.pathwayId!==s),n.resolved||B.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${i&&i.length} priorities: ${JSON.stringify(r)} penalized: ${JSON.stringify(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const n=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${n}"`),t=this.getLevelsForPathway(n),this.pathwayId=n}return t.length!==e.length?(this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t):e}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this.pathwayPriority=e;let t;const n=this.penalizedPathways,i=performance.now();Object.keys(n).forEach(r=>{i-n[r]>qf&&delete n[r]});for(let r=0;r<e.length;r++){const s=e[r];if(s in n)continue;if(s===this.pathwayId)return;const o=this.hls.nextLoadLevel,l=this.hls.levels[o];if(t=this.getLevelsForPathway(s),t.length>0){this.log(`Setting Pathway to "${s}"`),this.pathwayId=s,Ha(t),this.hls.trigger(T.LEVELS_UPDATED,{levels:t});const d=this.hls.levels[o];l&&d&&this.levels&&(d.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&d.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${d.bitrate}`),this.hls.nextLoadLevel=o);break}}}getPathwayForGroupId(e,t,n){const i=this.getLevelsForPathway(n).concat(this.levels||[]);for(let r=0;r<i.length;r++)if(t===fe.AUDIO_TRACK&&i[r].hasAudioGroup(e)||t===fe.SUBTITLE_TRACK&&i[r].hasSubtitleGroup(e))return i[r].pathwayId;return n}clonePathways(e){const t=this.levels;if(!t)return;const n={},i={};e.forEach(r=>{const{ID:s,"BASE-ID":o,"URI-REPLACEMENT":l}=r;if(t.some(c=>c.pathwayId===s))return;const d=this.getLevelsForPathway(o).map(c=>{const u=new Se(c.attrs);u["PATHWAY-ID"]=s;const h=u.AUDIO&&`${u.AUDIO}_clone_${s}`,A=u.SUBTITLES&&`${u.SUBTITLES}_clone_${s}`;h&&(n[u.AUDIO]=h,u.AUDIO=h),A&&(i[u.SUBTITLES]=A,u.SUBTITLES=A);const b=wo(c.uri,u["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l),v=new Mt({attrs:u,audioCodec:c.audioCodec,bitrate:c.bitrate,height:c.height,name:c.name,url:b,videoCodec:c.videoCodec,width:c.width});if(c.audioGroups)for(let x=1;x<c.audioGroups.length;x++)v.addGroupId("audio",`${c.audioGroups[x]}_clone_${s}`);if(c.subtitleGroups)for(let x=1;x<c.subtitleGroups.length;x++)v.addGroupId("text",`${c.subtitleGroups[x]}_clone_${s}`);return v});t.push(...d),ha(this.audioTracks,n,l,s),ha(this.subtitleTracks,i,l,s)})}loadSteeringManifest(e){const t=this.hls.config,n=t.loader;this.loader&&this.loader.destroy(),this.loader=new n(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const c=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+c)}const r={responseType:"json",url:i.href},s=t.steeringManifestLoadPolicy.default,o=s.errorRetry||s.timeoutRetry||{},l={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},d={onSuccess:(c,u,h,A)=>{this.log(`Loaded steering manifest: "${i}"`);const b=c.data;if(b.VERSION!==1){this.log(`Steering VERSION ${b.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=b.TTL;const{"RELOAD-URI":v,"PATHWAY-CLONES":x,"PATHWAY-PRIORITY":w}=b;if(v)try{this.uri=new self.URL(v,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${v}`);return}this.scheduleRefresh(this.uri||h.url),x&&this.clonePathways(x);const L={steeringManifest:b,url:i.toString()};this.hls.trigger(T.STEERING_MANIFEST_LOADED,L),w&&this.updatePathwayPriority(w)},onError:(c,u,h,A)=>{if(this.log(`Error loading steering manifest: ${c.code} ${c.text} (${u.url})`),this.stopLoad(),c.code===410){this.enabled=!1,this.log(`Steering manifest ${u.url} no longer available`);return}let b=this.timeToLoad*1e3;if(c.code===429){const v=this.loader;if(typeof(v==null?void 0:v.getResponseHeader)=="function"){const x=v.getResponseHeader("Retry-After");x&&(b=parseFloat(x)*1e3)}this.log(`Steering manifest ${u.url} rate limited`);return}this.scheduleRefresh(this.uri||u.url,b)},onTimeout:(c,u,h)=>{this.log(`Timeout loading steering manifest (${u.url})`),this.scheduleRefresh(this.uri||u.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(r,l,d)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var n;const i=(n=this.hls)==null?void 0:n.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function ha(a,e,t,n){a&&Object.keys(e).forEach(i=>{const r=a.filter(s=>s.groupId===i).map(s=>{const o=we({},s);return o.details=void 0,o.attrs=new Se(o.attrs),o.url=o.attrs.URI=wo(s.url,s.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),o.groupId=o.attrs["GROUP-ID"]=e[i],o.attrs["PATHWAY-ID"]=n,o});a.push(...r)})}function wo(a,e,t,n){const{HOST:i,PARAMS:r,[t]:s}=n;let o;e&&(o=s==null?void 0:s[e],o&&(a=o));const l=new self.URL(a);return i&&!o&&(l.host=i),r&&Object.keys(r).sort().forEach(d=>{d&&l.searchParams.set(d,r[d])}),l.href}const zf=/^age:\s*[\d.]+\s*$/im;class ko{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new ti,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null,this.stats=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,n){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=n,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const n=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const r=this.xhrSetup;r?Promise.resolve().then(()=>{if(!this.stats.aborted)return r(n,t.url)}).catch(s=>(n.open("GET",t.url,!0),r(n,t.url))).then(()=>{this.stats.aborted||this.openAndSendXhr(n,t,e)}).catch(s=>{this.callbacks.onError({code:n.status,text:s.message},t,n,i)}):this.openAndSendXhr(n,t,e)}openAndSendXhr(e,t,n){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:r,maxLoadTimeMs:s}=n.loadPolicy;if(i)for(const o in i)e.setRequestHeader(o,i[o]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),n.timeout=r&&J(r)?r:s,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:n}=this;if(!e||!t)return;const i=t.readyState,r=this.config;if(!n.aborted&&i>=2&&(n.loading.first===0&&(n.loading.first=Math.max(self.performance.now(),n.loading.start),r.timeout!==r.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),r.timeout=r.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.loadPolicy.maxLoadTimeMs-(n.loading.first-n.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const s=t.status,o=t.responseType!=="text";if(s>=200&&s<300&&(o&&t.response||t.responseText!==null)){n.loading.end=Math.max(self.performance.now(),n.loading.first);const l=o?t.response:t.responseText,d=t.responseType==="arraybuffer"?l.byteLength:l.length;if(n.loaded=n.total=d,n.bwEstimate=n.total*8e3/(n.loading.end-n.loading.first),!this.callbacks)return;const c=this.callbacks.onProgress;if(c&&c(n,e,l,t),!this.callbacks)return;const u={url:t.responseURL,data:l,code:s};this.callbacks.onSuccess(u,n,e,t)}else{const l=r.loadPolicy.errorRetry,d=n.retry,c={url:e.url,data:void 0,code:s};Xn(l,d,!1,c)?this.retry(l):(B.error(`${s} while loading ${e.url}`),this.callbacks.onError({code:s,text:t.statusText},e,t,n))}}}loadtimeout(){var e;const t=(e=this.config)==null?void 0:e.loadPolicy.timeoutRetry,n=this.stats.retry;if(Xn(t,n,!0))this.retry(t);else{var i;B.warn(`timeout while loading ${(i=this.context)==null?void 0:i.url}`);const r=this.callbacks;r&&(this.abortInternal(),r.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:n}=this;this.retryDelay=ar(e,n.retry),n.retry++,B.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${n.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&zf.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}function Yf(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const Wf=/(\d+)-(\d+)\/(\d+)/;class fa{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||Zf,this.controller=new self.AbortController,this.stats=new ti}destroy(){this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}abortInternal(){this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,n){const i=this.stats;if(i.loading.start)throw new Error("Loader can only be used once.");i.loading.start=self.performance.now();const r=jf(e,this.controller.signal),s=n.onProgress,o=e.responseType==="arraybuffer",l=o?"byteLength":"length",{maxTimeToFirstByteMs:d,maxLoadTimeMs:c}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=n,this.request=this.fetchSetup(e,r),self.clearTimeout(this.requestTimeout),t.timeout=d&&J(d)?d:c,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),n.onTimeout(i,e,this.response)},t.timeout),self.fetch(this.request).then(u=>{this.response=this.loader=u;const h=Math.max(self.performance.now(),i.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=c,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),n.onTimeout(i,e,this.response)},c-(h-i.loading.start)),!u.ok){const{status:A,statusText:b}=u;throw new Jf(b||"fetch, bad network response",A,u)}return i.loading.first=h,i.total=Xf(u.headers)||i.total,s&&J(t.highWaterMark)?this.loadProgressively(u,i,e,t.highWaterMark,s):o?u.arrayBuffer():e.responseType==="json"?u.json():u.text()}).then(u=>{const h=this.response;if(!h)throw new Error("loader destroyed");self.clearTimeout(this.requestTimeout),i.loading.end=Math.max(self.performance.now(),i.loading.first);const A=u[l];A&&(i.loaded=i.total=A);const b={url:h.url,data:u,code:h.status};s&&!J(t.highWaterMark)&&s(i,e,u,h),n.onSuccess(b,i,e,h)}).catch(u=>{if(self.clearTimeout(this.requestTimeout),i.aborted)return;const h=u&&u.code||0,A=u?u.message:null;n.onError({code:h,text:A},e,u?u.details:null,i)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,n,i=0,r){const s=new Ya,o=e.body.getReader(),l=()=>o.read().then(d=>{if(d.done)return s.dataLength&&r(t,n,s.flush(),e),Promise.resolve(new ArrayBuffer(0));const c=d.value,u=c.length;return t.loaded+=u,u<i||s.dataLength?(s.push(c),s.dataLength>=i&&r(t,n,s.flush(),e)):r(t,n,c,e),l()}).catch(()=>Promise.reject());return l()}}function jf(a,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(we({},a.headers))};return a.rangeEnd&&t.headers.set("Range","bytes="+a.rangeStart+"-"+String(a.rangeEnd-1)),t}function Qf(a){const e=Wf.exec(a);if(e)return parseInt(e[2])-parseInt(e[1])+1}function Xf(a){const e=a.get("Content-Range");if(e){const n=Qf(e);if(J(n))return n}const t=a.get("Content-Length");if(t)return parseInt(t)}function Zf(a,e){return new self.Request(a.url,e)}class Jf extends Error{constructor(e,t,n){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=n}}const ep=/\s/,tp={newCue(a,e,t,n){const i=[];let r,s,o,l,d;const c=self.VTTCue||self.TextTrackCue;for(let h=0;h<n.rows.length;h++)if(r=n.rows[h],o=!0,l=0,d="",!r.isEmpty()){var u;for(let v=0;v<r.chars.length;v++)ep.test(r.chars[v].uchar)&&o?l++:(d+=r.chars[v].uchar,o=!1);r.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const A=go(d.trim()),b=yr(e,t,A);a!=null&&(u=a.cues)!=null&&u.getCueById(b)||(s=new c(e,t,A),s.id=b,s.line=h+1,s.align="left",s.position=10+Math.min(80,Math.floor(l*8/32)*10),i.push(s))}return a&&i.length&&(i.sort((h,A)=>h.line==="auto"||A.line==="auto"?0:h.line>8&&A.line>8?A.line-h.line:h.line-A.line),i.forEach(h=>Ua(a,h))),i}},np={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},Lo=Be(Be({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:ko,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:Du,bufferController:Oh,capLevelController:Ar,errorController:bu,fpsController:of,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:Ca,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,useMediaCapabilities:!0,certLoadPolicy:{default:np},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},ip()),{},{subtitleStreamController:Dh,subtitleTrackController:_h,timelineController:sf,audioStreamController:Ih,audioTrackController:Rh,emeController:Ot,cmcdController:Hf,contentSteeringController:Vf});function ip(){return{cueHandler:tp,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function rp(a,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const t=tr(a),n=["manifest","level","frag"],i=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return n.forEach(r=>{const s=`${r==="level"?"playlist":r}LoadPolicy`,o=e[s]===void 0,l=[];i.forEach(d=>{const c=`${r}Loading${d}`,u=e[c];if(u!==void 0&&o){l.push(c);const h=t[s].default;switch(e[s]={default:h},d){case"TimeOut":h.maxLoadTimeMs=u,h.maxTimeToFirstByteMs=u;break;case"MaxRetry":h.errorRetry.maxNumRetry=u,h.timeoutRetry.maxNumRetry=u;break;case"RetryDelay":h.errorRetry.retryDelayMs=u,h.timeoutRetry.retryDelayMs=u;break;case"MaxRetryTimeout":h.errorRetry.maxRetryDelayMs=u,h.timeoutRetry.maxRetryDelayMs=u;break}}}),l.length&&B.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${s}": ${JSON.stringify(e[s])}`)}),Be(Be({},t),e)}function tr(a){return a&&typeof a=="object"?Array.isArray(a)?a.map(tr):Object.keys(a).reduce((e,t)=>(e[t]=tr(a[t]),e),{}):a}function sp(a){const e=a.loader;e!==fa&&e!==ko?(B.log("[config]: Custom loader detected, cannot enable progressive streaming"),a.progressive=!1):Yf()&&(a.loader=fa,a.progressive=!0,a.enableSoftwareAES=!0,B.log("[config]: Progressive streaming enabled, using FetchLoader"))}let Ui;class ap extends or{constructor(e,t){super(e,"[level-controller]"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}stopLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.stopLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const n=this.hls.config.preferManagedMediaSource,i=[],r={},s={};let o=!1,l=!1,d=!1;t.levels.forEach(c=>{var u,h;const A=c.attrs;let{audioCodec:b,videoCodec:v}=c;((u=b)==null?void 0:u.indexOf("mp4a.40.34"))!==-1&&(Ui||(Ui=/chrome|firefox/i.test(navigator.userAgent)),Ui&&(c.audioCodec=b=void 0)),b&&(c.audioCodec=b=Wn(b,n)),((h=v)==null?void 0:h.indexOf("avc1"))===0&&(v=c.videoCodec=jc(v));const{width:x,height:w,unknownCodecs:L}=c;if(o||(o=!!(x&&w)),l||(l=!!v),d||(d=!!b),L!=null&&L.length||b&&!Ti(b,"audio",n)||v&&!Ti(v,"video",n))return;const{CODECS:I,"FRAME-RATE":D,"HDCP-LEVEL":R,"PATHWAY-ID":$,RESOLUTION:F,"VIDEO-RANGE":H}=A,M=`${`${$||"."}-`}${c.bitrate}-${F}-${D}-${I}-${H}-${R}`;if(r[M])if(r[M].uri!==c.url&&!c.attrs["PATHWAY-ID"]){const q=s[M]+=1;c.attrs["PATHWAY-ID"]=new Array(q+1).join(".");const ae=new Mt(c);r[M]=ae,i.push(ae)}else r[M].addGroupId("audio",A.AUDIO),r[M].addGroupId("text",A.SUBTITLES);else{const q=new Mt(c);r[M]=q,s[M]=1,i.push(q)}}),this.filterAndSortMediaOptions(i,t,o,l,d)}filterAndSortMediaOptions(e,t,n,i,r){let s=[],o=[],l=e;if((n||i)&&r&&(l=l.filter(({videoCodec:b,videoRange:v,width:x,height:w})=>(!!b||!!(x&&w))&&lu(v))),l.length===0){Promise.resolve().then(()=>{if(this.hls){t.levels.length&&this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);const b=new Error("no level with compatible codecs found in manifest");this.hls.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:b,reason:b.message})}});return}if(t.audioTracks){const{preferManagedMediaSource:b}=this.hls.config;s=t.audioTracks.filter(v=>!v.audioCodec||Ti(v.audioCodec,"audio",b)),pa(s)}t.subtitles&&(o=t.subtitles,pa(o));const d=l.slice(0);l.sort((b,v)=>{if(b.attrs["HDCP-LEVEL"]!==v.attrs["HDCP-LEVEL"])return(b.attrs["HDCP-LEVEL"]||"")>(v.attrs["HDCP-LEVEL"]||"")?1:-1;if(n&&b.height!==v.height)return b.height-v.height;if(b.frameRate!==v.frameRate)return b.frameRate-v.frameRate;if(b.videoRange!==v.videoRange)return jn.indexOf(b.videoRange)-jn.indexOf(v.videoRange);if(b.videoCodec!==v.videoCodec){const x=As(b.videoCodec),w=As(v.videoCodec);if(x!==w)return w-x}if(b.uri===v.uri&&b.codecSet!==v.codecSet){const x=Yn(b.codecSet),w=Yn(v.codecSet);if(x!==w)return w-x}return b.averageBitrate!==v.averageBitrate?b.averageBitrate-v.averageBitrate:0});let c=d[0];if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==d.length)){for(let b=0;b<d.length;b++)if(d[b].pathwayId===l[0].pathwayId){c=d[b];break}}this._levels=l;for(let b=0;b<l.length;b++)if(l[b]===c){var u;this._firstLevel=b;const v=c.bitrate,x=this.hls.bandwidthEstimate;if(this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${v}`),((u=this.hls.userConfig)==null?void 0:u.abrEwmaDefaultEstimate)===void 0){const w=Math.min(v,this.hls.config.abrEwmaDefaultEstimateMax);w>x&&x===Lo.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=w)}break}const h=r&&!i,A={levels:l,audioTracks:s,subtitleTracks:o,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:r,video:i,altAudio:!h&&s.some(b=>!!b.url)};this.hls.trigger(T.MANIFEST_PARSED,A),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}get levels(){return this._levels.length===0?null:this._levels}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const c=new Error("invalid level idx"),u=e<0;if(this.hls.trigger(T.ERROR,{type:re.OTHER_ERROR,details:O.LEVEL_SWITCH_ERROR,level:e,fatal:u,error:c,reason:c.message}),u)return;e=Math.min(e,t.length-1)}const n=this.currentLevelIndex,i=this.currentLevel,r=i?i.attrs["PATHWAY-ID"]:void 0,s=t[e],o=s.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=s,n===e&&s.details&&i&&r===o)return;this.log(`Switching to level ${e} (${s.height?s.height+"p ":""}${s.videoRange?s.videoRange+" ":""}${s.codecSet?s.codecSet+" ":""}@${s.bitrate})${o?" with Pathway "+o:""} from level ${n}${r?" with Pathway "+r:""}`);const l={level:e,attrs:s.attrs,details:s.details,bitrate:s.bitrate,averageBitrate:s.averageBitrate,maxBitrate:s.maxBitrate,realBitrate:s.realBitrate,width:s.width,height:s.height,codecSet:s.codecSet,audioCodec:s.audioCodec,videoCodec:s.videoCodec,audioGroups:s.audioGroups,subtitleGroups:s.subtitleGroups,loaded:s.loaded,loadError:s.loadError,fragmentError:s.fragmentError,name:s.name,id:s.id,uri:s.uri,url:s.url,urlId:0,audioGroupIds:s.audioGroupIds,textGroupIds:s.textGroupIds};this.hls.trigger(T.LEVEL_SWITCHING,l);const d=s.details;if(!d||d.live){const c=this.switchParams(s.uri,i==null?void 0:i.details,d);this.loadPlaylist(c)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this.hls.firstAutoLevel}return this._startLevel}set startLevel(e){this._startLevel=e}onError(e,t){t.fatal||!t.context||t.context.type===fe.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragBuffered(e,{frag:t}){if(t!==void 0&&t.type===ie.MAIN){const n=t.elementaryStreams;if(!Object.keys(n).some(r=>!!n[r]))return;const i=this._levels[t.level];i!=null&&i.loadError&&(this.log(`Resetting level error count of ${i.loadError} on frag buffered`),i.loadError=0)}}onLevelLoaded(e,t){var n;const{level:i,details:r}=t,s=this._levels[i];if(!s){var o;this.warn(`Invalid level index ${i}`),(o=t.deliveryDirectives)!=null&&o.skip&&(r.deltaUpdateFailed=!0);return}i===this.currentLevelIndex?(s.fragmentError===0&&(s.loadError=0),this.playlistLoaded(i,t,s.details)):(n=t.deliveryDirectives)!=null&&n.skip&&(r.deltaUpdateFailed=!0)}loadPlaylist(e){super.loadPlaylist();const t=this.currentLevelIndex,n=this.currentLevel;if(n&&this.shouldLoadPlaylist(n)){let i=n.uri;if(e)try{i=e.addDirectives(i)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}const r=n.attrs["PATHWAY-ID"];this.log(`Loading level index ${t}${(e==null?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${r?" Pathway "+r:""} ${i}`),this.clearTimer(),this.hls.trigger(T.LEVEL_LOADING,{url:i,level:t,pathwayId:n.attrs["PATHWAY-ID"],id:0,deliveryDirectives:e||null})}}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e){var t;const n=this._levels.filter((i,r)=>r!==e?!0:(this.steering&&this.steering.removeLevel(i),i===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,i.details&&i.details.fragments.forEach(s=>s.level=-1)),!1));Ha(n),this._levels=n,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.hls.trigger(T.LEVELS_UPDATED,{levels:n})}onLevelsUpdated(e,{levels:t}){this._levels=t}checkMaxAutoUpdated(){const{autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:n}=this.hls;this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(T.MAX_AUTO_LEVEL_UPDATED,{autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:n}))}}function pa(a){const e={};a.forEach(t=>{const n=t.groupId||"";t.id=e[n]=e[n]||0,e[n]++})}class op{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(e){for(const n in this.keyUriToKeyInfo){const i=this.keyUriToKeyInfo[n].loader;if(i){var t;if(e&&e!==((t=i.context)==null?void 0:t.frag.type))return;i.abort()}}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=O.KEY_LOAD_ERROR,n,i,r){return new st({type:re.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:r,error:n,networkDetails:i})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled){const{sn:n,cc:i}=e;for(let r=0;r<t.length;r++){const s=t[r];if(i<=s.cc&&(n==="initSegment"||s.sn==="initSegment"||n<s.sn)){this.emeController.selectKeySystemFormat(s).then(o=>{s.setKeyFormat(o)});break}}}}load(e){return!e.decryptdata&&e.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var n,i;t&&e.setKeyFormat(t);const r=e.decryptdata;if(!r){const d=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,O.KEY_LOAD_ERROR,d))}const s=r.uri;if(!s)return Promise.reject(this.createKeyLoadError(e,O.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${s}"`)));let o=this.keyUriToKeyInfo[s];if((n=o)!=null&&n.decryptdata.key)return r.key=o.decryptdata.key,Promise.resolve({frag:e,keyInfo:o});if((i=o)!=null&&i.keyLoadPromise){var l;switch((l=o.mediaKeySessionContext)==null?void 0:l.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return o.keyLoadPromise.then(d=>(r.key=d.keyInfo.decryptdata.key,{frag:e,keyInfo:o}))}}switch(o=this.keyUriToKeyInfo[s]={decryptdata:r,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},r.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return r.keyFormat==="identity"?this.loadKeyHTTP(o,e):this.loadKeyEME(o,e);case"AES-128":return this.loadKeyHTTP(o,e);default:return Promise.reject(this.createKeyLoadError(e,O.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${r.method}"`)))}}loadKeyEME(e,t){const n={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const i=this.emeController.loadKey(n);if(i)return(e.keyLoadPromise=i.then(r=>(e.mediaKeySessionContext=r,n))).catch(r=>{throw e.keyLoadPromise=null,r})}return Promise.resolve(n)}loadKeyHTTP(e,t){const n=this.config,i=n.loader,r=new i(n);return t.keyLoader=e.loader=r,e.keyLoadPromise=new Promise((s,o)=>{const l={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},d=n.keyLoadPolicy.default,c={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,A,b,v)=>{const{frag:x,keyInfo:w,url:L}=b;if(!x.decryptdata||w!==this.keyUriToKeyInfo[L])return o(this.createKeyLoadError(x,O.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),v));w.decryptdata.key=x.decryptdata.key=new Uint8Array(h.data),x.keyLoader=null,w.loader=null,s({frag:x,keyInfo:w})},onError:(h,A,b,v)=>{this.resetLoader(A),o(this.createKeyLoadError(t,O.KEY_LOAD_ERROR,new Error(`HTTP Error ${h.code} loading key ${h.text}`),b,Be({url:l.url,data:void 0},h)))},onTimeout:(h,A,b)=>{this.resetLoader(A),o(this.createKeyLoadError(t,O.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),b))},onAbort:(h,A,b)=>{this.resetLoader(A),o(this.createKeyLoadError(t,O.INTERNAL_ABORTED,new Error("key loading aborted"),b))}};r.load(l,c,u)})}resetLoader(e){const{frag:t,keyInfo:n,url:i}=e,r=n.loader;t.keyLoader===r&&(t.keyLoader=null,n.loader=null),delete this.keyUriToKeyInfo[i],r&&r.destroy()}}function Io(){return self.SourceBuffer||self.WebKitSourceBuffer}function Ro(){if(!vt())return!1;const e=Io();return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}function lp(){if(!Ro())return!1;const a=vt();return typeof(a==null?void 0:a.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>a.isTypeSupported(gn(e,"video")))||["mp4a.40.2","fLaC"].some(e=>a.isTypeSupported(gn(e,"audio"))))}function dp(){var a;const e=Io();return typeof(e==null||(a=e.prototype)==null?void 0:a.changeType)=="function"}const cp=250,Hn=2,up=.1,hp=.05;class fp{constructor(e,t,n,i){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=e,this.media=t,this.fragmentTracker=n,this.hls=i}destroy(){this.media=null,this.hls=this.fragmentTracker=null}poll(e,t){const{config:n,media:i,stalled:r}=this;if(i===null)return;const{currentTime:s,seeking:o}=i,l=this.seeking&&!o,d=!this.seeking&&o;if(this.seeking=o,s!==e){if(this.moved=!0,o||(this.nudgeRetry=0),r!==null){if(this.stallReported){const x=self.performance.now()-r;B.warn(`playback not stuck anymore @${s}, after ${Math.round(x)}ms`),this.stallReported=!1}this.stalled=null}return}if(d||l){this.stalled=null;return}if(i.paused&&!o||i.ended||i.playbackRate===0||!ve.getBuffered(i).length){this.nudgeRetry=0;return}const c=ve.bufferInfo(i,s,0),u=c.nextStart||0;if(o){const x=c.len>Hn,w=!u||t&&t.start<=s||u-s>Hn&&!this.fragmentTracker.getPartialFragment(s);if(x||w)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var h;if(!(c.len>0)&&!u)return;const w=Math.max(u,c.start||0)-s,L=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,D=(L==null||(h=L.details)==null?void 0:h.live)?L.details.targetduration*2:Hn,R=this.fragmentTracker.getPartialFragment(s);if(w>0&&(w<=D||R)){i.paused||this._trySkipBufferHole(R);return}}const A=self.performance.now();if(r===null){this.stalled=A;return}const b=A-r;if(!o&&b>=cp&&(this._reportStall(c),!this.media))return;const v=ve.bufferInfo(i,s,n.maxBufferHole);this._tryFixBufferStall(v,b)}_tryFixBufferStall(e,t){const{config:n,fragmentTracker:i,media:r}=this;if(r===null)return;const s=r.currentTime,o=i.getPartialFragment(s);o&&(this._trySkipBufferHole(o)||!this.media)||(e.len>n.maxBufferHole||e.nextStart&&e.nextStart-s<n.maxBufferHole)&&t>n.highBufferWatchdogPeriod*1e3&&(B.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}_reportStall(e){const{hls:t,media:n,stallReported:i}=this;if(!i&&n){this.stallReported=!0;const r=new Error(`Playback stalling at @${n.currentTime} due to low buffer (${JSON.stringify(e)})`);B.warn(r.message),t.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_STALLED_ERROR,fatal:!1,error:r,buffer:e.len})}}_trySkipBufferHole(e){const{config:t,hls:n,media:i}=this;if(i===null)return 0;const r=i.currentTime,s=ve.bufferInfo(i,r,0),o=r<s.start?s.start:s.nextStart;if(o){const l=s.len<=t.maxBufferHole,d=s.len>0&&s.len<1&&i.readyState<3,c=o-r;if(c>0&&(l||d)){if(c>t.maxBufferHole){const{fragmentTracker:h}=this;let A=!1;if(r===0){const b=h.getAppendedFrag(0,ie.MAIN);b&&o<b.end&&(A=!0)}if(!A){const b=e||h.getAppendedFrag(r,ie.MAIN);if(b){let v=!1,x=b.end;for(;x<o;){const w=h.getPartialFragment(x);if(w)x+=w.duration;else{v=!0;break}}if(v)return 0}}}const u=Math.max(o+hp,r+up);if(B.warn(`skipping hole, adjusting currentTime from ${r} to ${u}`),this.moved=!0,this.stalled=null,i.currentTime=u,e&&!e.gap){const h=new Error(`fragment loaded with buffer holes, seeking from ${r} to ${u}`);n.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:h,reason:h.message,frag:e})}return u}}return 0}_tryNudgeBuffer(){const{config:e,hls:t,media:n,nudgeRetry:i}=this;if(n===null)return;const r=n.currentTime;if(this.nudgeRetry++,i<e.nudgeMaxRetry){const s=r+(i+1)*e.nudgeOffset,o=new Error(`Nudging 'currentTime' from ${r} to ${s}`);B.warn(o.message),n.currentTime=s,t.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_NUDGE_ON_STALL,error:o,fatal:!1})}else{const s=new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);B.error(s.message),t.trigger(T.ERROR,{type:re.MEDIA_ERROR,details:O.BUFFER_STALLED_ERROR,error:s,fatal:!0})}}}const pp=100;class mp extends cr{constructor(e,t,n){super(e,t,n,"[stream-controller]",ie.MAIN),this.audioCodecSwap=!1,this.gapController=null,this.level=-1,this._forceStartLoad=!1,this.altAudio=!1,this.audioOnly=!1,this.fragPlaying=null,this.onvplaying=null,this.onvseeked=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(T.ERROR,this.onError,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(T.ERROR,this.onError,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying()}startLoad(e){if(this.levels){const{lastCurrentTime:t,hls:n}=this;if(this.stopLoad(),this.setInterval(pp),this.level=-1,!this.startFragRequested){let i=n.startLevel;i===-1&&(n.config.testBandwidth&&this.levels.length>1?(i=0,this.bitrateTest=!0):i=n.firstAutoLevel),n.nextLoadLevel=i,this.level=n.loadLevel,this.loadedmetadata=!1}t>0&&e===-1&&(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t),this.state=K.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this._forceStartLoad=!0,this.state=K.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case K.WAITING_LEVEL:{const{levels:t,level:n}=this,i=t==null?void 0:t[n],r=i==null?void 0:i.details;if(r&&(!r.live||this.levelLastLoaded===i)){if(this.waitForCdnTuneIn(r))break;this.state=K.IDLE;break}else if(this.hls.nextLoadLevel!==this.level){this.state=K.IDLE;break}break}case K.FRAG_LOADING_WAITING_RETRY:{var e;const t=self.performance.now(),n=this.retryDate;if(!n||t>=n||(e=this.media)!=null&&e.seeking){const{levels:i,level:r}=this,s=i==null?void 0:i[r];this.resetStartWhenNotLoaded(s||null),this.state=K.IDLE}}break}this.state===K.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){super.onTickEnd(),this.checkBuffer(),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:n,media:i}=this;if(t===null||!i&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;const r=e.nextLoadLevel;if(!(n!=null&&n[r]))return;const s=n[r],o=this.getMainFwdBufferInfo();if(o===null)return;const l=this.getLevelDetails();if(l&&this._streamEnded(o,l)){const v={};this.altAudio&&(v.type="video"),this.hls.trigger(T.BUFFER_EOS,v),this.state=K.ENDED;return}e.loadLevel!==r&&e.manualLevel===-1&&this.log(`Adapting to level ${r} from level ${this.level}`),this.level=e.nextLoadLevel=r;const d=s.details;if(!d||this.state===K.WAITING_LEVEL||d.live&&this.levelLastLoaded!==s){this.level=r,this.state=K.WAITING_LEVEL;return}const c=o.len,u=this.getMaxBufferLength(s.maxBitrate);if(c>=u)return;this.backtrackFragment&&this.backtrackFragment.start>o.end&&(this.backtrackFragment=null);const h=this.backtrackFragment?this.backtrackFragment.start:o.end;let A=this.getNextFragment(h,d);if(this.couldBacktrack&&!this.fragPrevious&&A&&A.sn!=="initSegment"&&this.fragmentTracker.getState(A)!==De.OK){var b;const x=((b=this.backtrackFragment)!=null?b:A).sn-d.startSN,w=d.fragments[x-1];w&&A.cc===w.cc&&(A=w,this.fragmentTracker.removeFragment(w))}else this.backtrackFragment&&o.len&&(this.backtrackFragment=null);if(A&&this.isLoopLoading(A,h)){if(!A.gap){const x=this.audioOnly&&!this.altAudio?ge.AUDIO:ge.VIDEO,w=(x===ge.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;w&&this.afterBufferFlushed(w,x,ie.MAIN)}A=this.getNextFragmentLoopLoading(A,d,o,ie.MAIN,u)}A&&(A.initSegment&&!A.initSegment.data&&!this.bitrateTest&&(A=A.initSegment),this.loadFragment(A,s,h))}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);this.fragCurrent=e,i===De.NOT_LOADED||i===De.PARTIAL?e.sn==="initSegment"?this._loadInitSegment(e,t):this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):(this.startFragRequested=!0,super.loadFragment(e,t,n)):this.clearTrackerIfNeeded(e)}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,ie.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let n;const i=this.getAppendedFrag(t.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);const r=this.getLevelDetails();if(r!=null&&r.live){const o=this.getMainFwdBufferInfo();if(!o||o.len<r.targetduration*2)return}if(!t.paused&&e){const o=this.hls.nextLoadLevel,l=e[o],d=this.fragLastKbps;d&&this.fragCurrent?n=this.fragCurrent.duration*l.maxBitrate/(1e3*d)+1:n=0}else n=0;const s=this.getBufferedFrag(t.currentTime+n);if(s){const o=this.followingBufferedFrag(s);if(o){this.abortCurrentFrag();const l=o.maxStartPTS?o.maxStartPTS:o.start,d=o.duration,c=Math.max(s.end,l+Math.min(Math.max(d-this.config.maxFragLookUpTolerance,d*(this.couldBacktrack?.5:.125)),d*(this.couldBacktrack?.75:.25)));this.flushMainBuffer(c,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case K.KEY_LOADING:case K.FRAG_LOADING:case K.FRAG_LOADING_WAITING_RETRY:case K.PARSING:case K.PARSED:this.state=K.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const n=t.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),n.addEventListener("playing",this.onvplaying),n.addEventListener("seeked",this.onvseeked),this.gapController=new fp(this.config,n,this.fragmentTracker,this.hls)}onMediaDetaching(){const{media:e}=this;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),super.onMediaDetaching()}onMediaPlaying(){this.tick()}onMediaSeeked(){const e=this.media,t=e?e.currentTime:null;J(t)&&this.log(`Media seeked to ${t.toFixed(3)}`);const n=this.getMainFwdBufferInfo();if(n===null||n.len===0){this.warn(`Main forward buffer length on "seeked" event ${n?n.len:"empty"})`);return}this.tick()}onManifestLoading(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(T.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=this.fragLastKbps=0,this.levels=this.fragPlaying=this.backtrackFragment=this.levelLastLoaded=null,this.altAudio=this.audioOnly=this.startFragRequested=!1}onManifestParsed(e,t){let n=!1,i=!1;t.levels.forEach(r=>{const s=r.audioCodec;s&&(n=n||s.indexOf("mp4a.40.2")!==-1,i=i||s.indexOf("mp4a.40.5")!==-1)}),this.audioCodecSwitch=n&&i&&!dp(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:n}=this;if(!n||this.state!==K.IDLE)return;const i=n[t.level];(!i.details||i.details.live&&this.levelLastLoaded!==i||this.waitForCdnTuneIn(i.details))&&(this.state=K.WAITING_LEVEL)}onLevelLoaded(e,t){var n;const{levels:i}=this,r=t.level,s=t.details,o=s.totalduration;if(!i){this.warn(`Levels were reset while loading level ${r}`);return}this.log(`Level ${r} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""}, cc [${s.startCC}, ${s.endCC}] duration:${o}`);const l=i[r],d=this.fragCurrent;d&&(this.state===K.FRAG_LOADING||this.state===K.FRAG_LOADING_WAITING_RETRY)&&d.level!==t.level&&d.loader&&this.abortCurrentFrag();let c=0;if(s.live||(n=l.details)!=null&&n.live){var u;if(this.checkLiveUpdate(s),s.deltaUpdateFailed)return;c=this.alignPlaylists(s,l.details,(u=this.levelLastLoaded)==null?void 0:u.details)}if(l.details=s,this.levelLastLoaded=l,this.hls.trigger(T.LEVEL_UPDATED,{details:s,level:r}),this.state===K.WAITING_LEVEL){if(this.waitForCdnTuneIn(s))return;this.state=K.IDLE}this.startFragRequested?s.live&&this.synchronizeToLiveEdge(s):this.setStartPosition(s,c),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:n,part:i,payload:r}=e,{levels:s}=this;if(!s){this.warn(`Levels were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const o=s[n.level],l=o.details;if(!l){this.warn(`Dropping fragment ${n.sn} of level ${n.level} after level details were reset`),this.fragmentTracker.removeFragment(n);return}const d=o.videoCodec,c=l.PTSKnown||!l.live,u=(t=n.initSegment)==null?void 0:t.data,h=this._getAudioCodec(o),A=this.transmuxer=this.transmuxer||new co(this.hls,ie.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),b=i?i.index:-1,v=b!==-1,x=new lr(n.level,n.sn,n.stats.chunkCount,r.byteLength,b,v),w=this.initPTS[n.cc];A.push(r,u,h,d,n,i,l.totalduration,c,x,w)}onAudioTrackSwitching(e,t){const n=this.altAudio;if(!!!t.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const s=this.fragCurrent;s&&(this.log("Switching to main audio track, cancel main fragment load"),s.abortRequests(),this.fragmentTracker.removeFragment(s)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();const r=this.hls;n&&(r.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),r.trigger(T.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const n=t.id,i=!!this.hls.audioTracks[n].url;if(i){const r=this.videoBuffer;r&&this.mediaBuffer!==r&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=r)}this.altAudio=i,this.tick()}onBufferCreated(e,t){const n=t.tracks;let i,r,s=!1;for(const o in n){const l=n[o];if(l.id==="main"){if(r=o,i=l,o==="video"){const d=n[o];d&&(this.videoBuffer=d.buffer)}}else s=!0}s&&i?(this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`),this.mediaBuffer=i.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:n,part:i}=t;if(n&&n.type!==ie.MAIN)return;if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}`),this.state===K.PARSED&&(this.state=K.IDLE);return}const r=i?i.stats:n.stats;this.fragLastKbps=Math.round(8*r.total/(r.buffering.end-r.loading.first)),n.sn!=="initSegment"&&(this.fragPrevious=n),this.fragBufferedComplete(n,i)}onError(e,t){var n;if(t.fatal){this.state=K.ERROR;return}switch(t.details){case O.FRAG_GAP:case O.FRAG_PARSING_ERROR:case O.FRAG_DECRYPT_ERROR:case O.FRAG_LOAD_ERROR:case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_ERROR:case O.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ie.MAIN,t);break;case O.LEVEL_LOAD_ERROR:case O.LEVEL_LOAD_TIMEOUT:case O.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===K.WAITING_LEVEL&&((n=t.context)==null?void 0:n.type)===fe.LEVEL&&(this.state=K.IDLE);break;case O.BUFFER_APPEND_ERROR:case O.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="main")return;if(t.details===O.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case O.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}checkBuffer(){const{media:e,gapController:t}=this;if(!(!e||!t||!e.readyState)){if(this.loadedmetadata||!ve.getBuffered(e).length){const n=this.state!==K.IDLE?this.fragCurrent:null;t.poll(this.lastCurrentTime,n)}this.lastCurrentTime=e.currentTime}}onFragLoadEmergencyAborted(){this.state=K.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==ge.AUDIO||this.audioOnly&&!this.altAudio){const n=(t===ge.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(n,t,ie.MAIN),this.tick()}}onLevelsUpdated(e,t){this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level),this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let n=this.startPosition;if(n>=0&&t<n){if(e.seeking){this.log(`could not seek to ${n}, already seeking at ${t}`);return}const i=ve.getBuffered(e),s=(i.length?i.start(0):0)-n;s>0&&(s<this.config.maxBufferHole||s<this.config.maxFragLookUpTolerance)&&(this.log(`adjusting start position by ${s} to match buffer start`),n+=s,this.startPosition=n),this.log(`seek to target start position ${n} from current time ${t}`),e.currentTime=n}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(n=>{const{hls:i}=this;if(!n||this.fragContextChanged(e))return;t.fragmentError=0,this.state=K.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const r=e.stats;r.parsing.start=r.parsing.end=r.buffering.start=r.buffering.end=self.performance.now(),i.trigger(T.FRAG_LOADED,n),e.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const n="main",{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:l,part:d,level:c}=o,{video:u,text:h,id3:A,initSegment:b}=r,{details:v}=c,x=this.altAudio?void 0:r.audio;if(this.fragContextChanged(l)){this.fragmentTracker.removeFragment(l);return}if(this.state=K.PARSING,b){if(b!=null&&b.tracks){const I=l.initSegment||l;this._bufferInitSegment(c,b.tracks,I,s),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:I,id:n,tracks:b.tracks})}const w=b.initPTS,L=b.timescale;J(w)&&(this.initPTS[l.cc]={baseTime:w,timescale:L},i.trigger(T.INIT_PTS_FOUND,{frag:l,id:n,initPTS:w,timescale:L}))}if(u&&v&&l.sn!=="initSegment"){const w=v.fragments[l.sn-1-v.startSN],L=l.sn===v.startSN,I=!w||l.cc>w.cc;if(r.independent!==!1){const{startPTS:D,endPTS:R,startDTS:$,endDTS:F}=u;if(d)d.elementaryStreams[u.type]={startPTS:D,endPTS:R,startDTS:$,endDTS:F};else if(u.firstKeyFrame&&u.independent&&s.id===1&&!I&&(this.couldBacktrack=!0),u.dropped&&u.independent){const H=this.getMainFwdBufferInfo(),Y=(H?H.end:this.getLoadPosition())+this.config.maxBufferHole,M=u.firstKeyFramePTS?u.firstKeyFramePTS:D;if(!L&&Y<M-this.config.maxBufferHole&&!I){this.backtrack(l);return}else I&&(l.gap=!0);l.setElementaryStreamInfo(u.type,l.start,R,l.start,F,!0)}else L&&D>Hn&&(l.gap=!0);l.setElementaryStreamInfo(u.type,D,R,$,F),this.backtrackFragment&&(this.backtrackFragment=l),this.bufferFragmentData(u,l,d,s,L||I)}else if(L||I)l.gap=!0;else{this.backtrack(l);return}}if(x){const{startPTS:w,endPTS:L,startDTS:I,endDTS:D}=x;d&&(d.elementaryStreams[ge.AUDIO]={startPTS:w,endPTS:L,startDTS:I,endDTS:D}),l.setElementaryStreamInfo(ge.AUDIO,w,L,I,D),this.bufferFragmentData(x,l,d,s)}if(v&&A!=null&&(t=A.samples)!=null&&t.length){const w={id:n,frag:l,details:v,samples:A.samples};i.trigger(T.FRAG_PARSING_METADATA,w)}if(v&&h){const w={id:n,frag:l,details:v,samples:h.samples};i.trigger(T.FRAG_PARSING_USERDATA,w)}}_bufferInitSegment(e,t,n,i){if(this.state!==K.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&delete t.audio;const{audio:r,video:s,audiovideo:o}=t;if(r){let l=e.audioCodec;const d=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5"),r.metadata.channelCount!==1&&d.indexOf("firefox")===-1&&(l="mp4a.40.5")),l&&l.indexOf("mp4a.40.5")!==-1&&d.indexOf("android")!==-1&&r.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),r.levelCodec=l,r.id="main",this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${r.codec}]`)}s&&(s.levelCodec=e.videoCodec,s.id="main",this.log(`Init video buffer, container:${s.container}, codecs[level/parsed]=[${e.videoCodec||""}/${s.codec}]`)),o&&this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`),this.hls.trigger(T.BUFFER_CODECS,t),Object.keys(t).forEach(l=>{const c=t[l].initSegment;c!=null&&c.byteLength&&this.hls.trigger(T.BUFFER_APPENDING,{type:l,data:c,frag:n,part:null,chunkMeta:i,parent:n.type})}),this.tickImmediate()}getMainFwdBufferInfo(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,ie.MAIN)}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=K.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const n=e.currentTime;if(ve.isBuffered(e,n)?t=this.getAppendedFrag(n):ve.isBuffered(e,n+.1)&&(t=this.getAppendedFrag(n+.1)),t){this.backtrackFragment=null;const i=this.fragPlaying,r=t.level;(!i||t.sn!==i.sn||i.level!==r)&&(this.fragPlaying=t,this.hls.trigger(T.FRAG_CHANGED,{frag:t}),(!i||i.level!==r)&&this.hls.trigger(T.LEVEL_SWITCHED,{level:r}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){const e=this.media;return e?this.fragPlaying||this.getAppendedFrag(e.currentTime):null}get currentProgramDateTime(){const e=this.media;if(e){const t=e.currentTime,n=this.currentFrag;if(n&&J(t)&&J(n.programDateTime)){const i=n.programDateTime+(t-n.start)*1e3;return new Date(i)}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class yt{static get version(){return"1.5.8"}static isMSESupported(){return Ro()}static isSupported(){return lp()}static getMediaSource(){return vt()}static get Events(){return T}static get ErrorTypes(){return re}static get ErrorDetails(){return O}static get DefaultConfig(){return yt.defaultConfig?yt.defaultConfig:Lo}static set DefaultConfig(e){yt.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this.started=!1,this._emitter=new mr,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,this.triggeringException=void 0,ac(e.debug||!1,"Hls instance");const t=this.config=rp(yt.DefaultConfig,e);this.userConfig=e,t.progressive&&sp(t);const{abrController:n,bufferController:i,capLevelController:r,errorController:s,fpsController:o}=t,l=new s(this),d=this.abrController=new n(this),c=this.bufferController=new i(this),u=this.capLevelController=new r(this),h=new o(this),A=new eu(this),b=new su(this),v=t.contentSteeringController,x=v?new v(this):null,w=this.levelController=new ap(this,x),L=new _u(this),I=new op(this.config),D=this.streamController=new mp(this,L,I);u.setStreamController(D),h.setStreamController(D);const R=[A,w,D];x&&R.splice(1,0,x),this.networkControllers=R;const $=[d,c,u,h,b,L];this.audioTrackController=this.createController(t.audioTrackController,R);const F=t.audioStreamController;F&&R.push(new F(this,L,I)),this.subtitleTrackController=this.createController(t.subtitleTrackController,R);const H=t.subtitleStreamController;H&&R.push(new H(this,L,I)),this.createController(t.timelineController,$),I.emeController=this.emeController=this.createController(t.emeController,$),this.cmcdController=this.createController(t.cmcdController,$),this.latencyController=this.createController(au,$),this.coreComponents=$,R.push(l);const Y=l.onErrorOut;typeof Y=="function"&&this.on(T.ERROR,Y,l)}createController(e,t){if(e){const n=new e(this);return t&&t.push(n),n}return null}on(e,t,n=this){this._emitter.on(e,t,n)}once(e,t,n=this){this._emitter.once(e,t,n)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,n=this,i){this._emitter.off(e,t,n,i)}listeners(e){return this._emitter.listeners(e)}emit(e,t,n){return this._emitter.emit(e,t,n)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(n){if(B.error("An internal error happened while handling event "+e+'. Error message: "'+n.message+'". Here is a stacktrace:',n),!this.triggeringException){this.triggeringException=!0;const i=e===T.ERROR;this.trigger(T.ERROR,{type:re.OTHER_ERROR,details:O.INTERNAL_EXCEPTION,fatal:i,event:e,error:n}),this.triggeringException=!1}}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){B.log("destroy"),this.trigger(T.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){B.log("attachMedia"),this._media=e,this.trigger(T.MEDIA_ATTACHING,{media:e})}detachMedia(){B.log("detachMedia"),this.trigger(T.MEDIA_DETACHING,void 0),this._media=null}loadSource(e){this.stopLoad();const t=this.media,n=this.url,i=this.url=nr.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});this._autoLevelCapping=-1,this._maxHdcpLevel=null,B.log(`loadSource:${i}`),t&&n&&(n!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(T.MANIFEST_LOADING,{url:e})}startLoad(e=-1){B.log(`startLoad(${e})`),this.started=!0,this.networkControllers.forEach(t=>{t.startLoad(e)})}stopLoad(){B.log("stopLoad"),this.started=!1,this.networkControllers.forEach(e=>{e.stopLoad()})}resumeBuffering(){this.started&&this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.startLoad(-1)})}pauseBuffering(){this.networkControllers.forEach(e=>{"fragmentLoader"in e&&e.stopLoad()})}swapAudioCodec(){B.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){B.log("recoverMediaError");const e=this._media;this.detachMedia(),e&&this.attachMedia(e)}removeLevel(e){this.levelController.removeLevel(e)}get levels(){const e=this.levelController.levels;return e||[]}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){B.log(`set currentLevel:${e}`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){B.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){B.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){B.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){const e=this.levelController.startLevel;return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}set startLevel(e){B.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}set bandwidthEstimate(e){this.abrController.resetEstimator(e)}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(B.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){ou(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const n=e.length;for(let i=0;i<n;i++)if(e[i].maxBitrate>=t)return i;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:n}=this;let i;if(t===-1&&e!=null&&e.length?i=e.length-1:i=t,n)for(let r=i;r--;){const s=e[r].attrs["HDCP-LEVEL"];if(s&&s<=n)return r}return i}get firstAutoLevel(){return this.abrController.firstAutoLevel}get nextAutoLevel(){return this.abrController.nextAutoLevel}set nextAutoLevel(e){this.abrController.nextAutoLevel=e}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}setAudioOption(e){var t;return(t=this.audioTrackController)==null?void 0:t.setAudioOption(e)}setSubtitleOption(e){var t;return(t=this.subtitleTrackController)==null||t.setSubtitleOption(e),null}get allAudioTracks(){const e=this.audioTrackController;return e?e.allAudioTracks:[]}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get allSubtitleTracks(){const e=this.subtitleTrackController;return e?e.allSubtitleTracks:[]}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}}yt.defaultConfig=void 0;var Do={exports:{}};(function(a,e){(function(t,n){a.exports=n()})(self,()=>(()=>{var t={916:(s,o,l)=>{var d=l(471);s.exports=function(c){var u,h="",A=(c=c||{}).video,b=c.options,v=d.$escape,x=c.tran,w=c.icons,L=c.index,I=d.$each;return c.$value,c.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=l(568)(A),h+=u,h+=`
    `,b.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=v(b.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,b.danmaku&&b.danmaku.bottom&&(h+=' style="margin-bottom:',h+=v(b.danmaku.bottom),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,b.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=v(x("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=w.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=v(x("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=w.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=v(x("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(L),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(L),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(L),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(L),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(L),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(L),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=v(x("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(L),h+=`" value="1">
                    <span>`,h+=v(x("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(L),h+=`" value="0" checked>
                    <span>`,h+=v(x("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(L),h+=`" value="2">
                    <span>`,h+=v(x("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=v(x("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=v(x("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=w.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=w.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=w.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=v(b.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=v(b.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,b.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=v(b.theme),h+=';"></span>',h+=v(x("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,b.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=v(b.video.quality[b.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,I(b.video.quality,function(D,R){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=v(R),h+='">',h+=v(D.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,b.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=v(x("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=w.camera,h+=`</span>
        </div>
        `),h+=`
        `,b.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=v(x("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=w.airplay,h+=`</span>
        </div>
        `),h+=`
        `,b.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=v(x("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=w.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=v(x("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=w.comment,h+=`</span>
            </button>
        </div>
        `,b.subtitle&&(h+=`
        `,typeof b.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=v(x("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=w.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=v(x("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=w.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,I(b.subtitle.url,function(D,R){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=v(D.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=v(D.lang?D.name?D.name+" ("+x(D.lang)+")":x(D.lang):D.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=v(x("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=w.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=v(x("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=w.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=v(x("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=v(x("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=v(x("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=v(x("opacity-danmaku")),h+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,I(b.playbackSpeed,function(D,R){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=v(D),h+=`">
                            <span class="dplayer-label">`,h+=v(D===1?x("normal"):D),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=v(x("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=w.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=v(x("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=w.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=v(b.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=v(b.theme),h+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,b.danmaku&&(h+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),h+=`
</div>
<div class="dplayer-menu">
    `,I(b.contextmenu,function(D,R){h+=`
        <div class="dplayer-menu-item">
            <a`,D.link&&(h+=' target="_blank"'),h+=' href="',h+=v(D.link||"javascript:void(0);"),h+='">',D.key&&(h+=" ",h+=v(x(D.key))),D.text&&(h+=" ",h+=v(D.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=w.play,h+=`
</button>`}},568:(s,o,l)=>{var d=l(471);s.exports=function(c){var u="",h=(c=c||{}).enableSubtitle,A=c.subtitle,b=c.current,v=c.airplay,x=c.pic,w=d.$escape,L=c.screenshot,I=c.preload,D=c.url;return h=A&&A.type==="webvtt",u+=`
<video
    class="dplayer-video `,b&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,v&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,x&&(u+='poster="',u+=w(x),u+='"'),u+=`
    `,(L||h)&&(u+='crossorigin="anonymous"'),u+=`
    `,I&&(u+='preload="',u+=w(I),u+='"'),u+=`
    `,v?u+=`
    nosrc
    `:D&&(u+=`
    src="`,u+=w(D),u+=`"
    `),u+=`
    >
    `,v&&(u+=`
    <source src="`,u+=w(D),u+=`">
    `),u+=`
    `,h&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=w(typeof A.url=="string"?A.url:A.url[A.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(s,o,l)=>{l.d(o,{Z:()=>A});var d=l(415),c=l.n(d),u=l(352),h=l.n(u)()(c());h.push([s.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const A=h},685:(s,o,l)=>{l.d(o,{Z:()=>I});var d=l(415),c=l.n(d),u=l(352),h=l.n(u),A=l(49),b=l(80),v=l.n(b),x=new URL(l(831),l.b),w=h()(c());w.i(A.Z);var L=v()(x);w.push([s.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+L+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const I=w},856:s=>{var o=[];function l(u){for(var h=-1,A=0;A<o.length;A++)if(o[A].identifier===u){h=A;break}return h}function d(u,h){for(var A={},b=[],v=0;v<u.length;v++){var x=u[v],w=h.base?x[0]+h.base:x[0],L=A[w]||0,I="".concat(w," ").concat(L);A[w]=L+1;var D=l(I),R={css:x[1],media:x[2],sourceMap:x[3],supports:x[4],layer:x[5]};if(D!==-1)o[D].references++,o[D].updater(R);else{var $=c(R,h);h.byIndex=v,o.splice(v,0,{identifier:I,updater:$,references:1})}b.push(I)}return b}function c(u,h){var A=h.domAPI(h);return A.update(u),function(b){if(b){if(b.css===u.css&&b.media===u.media&&b.sourceMap===u.sourceMap&&b.supports===u.supports&&b.layer===u.layer)return;A.update(u=b)}else A.remove()}}s.exports=function(u,h){var A=d(u=u||[],h=h||{});return function(b){b=b||[];for(var v=0;v<A.length;v++){var x=l(A[v]);o[x].references--}for(var w=d(b,h),L=0;L<A.length;L++){var I=l(A[L]);o[I].references===0&&(o[I].updater(),o.splice(I,1))}A=w}}},370:s=>{var o={};s.exports=function(l,d){var c=function(u){if(o[u]===void 0){var h=document.querySelector(u);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}o[u]=h}return o[u]}(l);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(d)}},278:s=>{s.exports=function(o){var l=document.createElement("style");return o.setAttributes(l,o.attributes),o.insert(l,o.options),l}},458:(s,o,l)=>{s.exports=function(d){var c=l.nc;c&&d.setAttribute("nonce",c)}},470:s=>{s.exports=function(o){var l=o.insertStyleElement(o);return{update:function(d){(function(c,u,h){var A="";h.supports&&(A+="@supports (".concat(h.supports,") {")),h.media&&(A+="@media ".concat(h.media," {"));var b=h.layer!==void 0;b&&(A+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),A+=h.css,b&&(A+="}"),h.media&&(A+="}"),h.supports&&(A+="}");var v=h.sourceMap;v&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),u.styleTagTransform(A,c,u.options)})(l,o,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(l)}}}},488:s=>{s.exports=function(o,l){if(l.styleSheet)l.styleSheet.cssText=o;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(o))}}},251:s=>{s.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:s=>{s.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:s=>{s.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(s,o,l)=>{var d=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},c=Object.create(d),u=/["&'<>]/;function h(A){return typeof A!="string"&&(A=A==null?"":typeof A=="function"?h(A.call(A)):JSON.stringify(A)),A}c.$escape=function(A){return function(b){var v=""+b,x=u.exec(v);if(!x)return b;var w="",L=void 0,I=void 0,D=void 0;for(L=x.index,I=0;L<v.length;L++){switch(v.charCodeAt(L)){case 34:D="&#34;";break;case 38:D="&#38;";break;case 39:D="&#39;";break;case 60:D="&#60;";break;case 62:D="&#62;";break;default:continue}I!==L&&(w+=v.substring(I,L)),I=L+1,w+=D}return I!==L?w+v.substring(I,L):w}(h(A))},c.$each=function(A,b){if(Array.isArray(A))for(var v=0,x=A.length;v<x;v++)b(A[v],v);else for(var w in A)b(A[w],w)},s.exports=c},471:(s,o,l)=>{s.exports=l(897)},352:s=>{s.exports=function(o){var l=[];return l.toString=function(){return this.map(function(d){var c="",u=d[5]!==void 0;return d[4]&&(c+="@supports (".concat(d[4],") {")),d[2]&&(c+="@media ".concat(d[2]," {")),u&&(c+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),c+=o(d),u&&(c+="}"),d[2]&&(c+="}"),d[4]&&(c+="}"),c}).join("")},l.i=function(d,c,u,h,A){typeof d=="string"&&(d=[[null,d,void 0]]);var b={};if(u)for(var v=0;v<this.length;v++){var x=this[v][0];x!=null&&(b[x]=!0)}for(var w=0;w<d.length;w++){var L=[].concat(d[w]);u&&b[L[0]]||(A!==void 0&&(L[5]===void 0||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=A),c&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=c),h&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=h):L[4]="".concat(h)),l.push(L))}},l}},80:s=>{s.exports=function(o,l){return l||(l={}),o&&(o=String(o.__esModule?o.default:o),/^['"].*['"]$/.test(o)&&(o=o.slice(1,-1)),l.hash&&(o+=l.hash),/["'() \t\n]|(%20)/.test(o)||l.needQuotes?'"'.concat(o.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):o)}},415:s=>{s.exports=function(o){var l=o[1],d=o[3];if(!d)return l;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),h="/*# ".concat(u," */");return[l].concat([h]).join(`
`)}return[l].join(`
`)}},937:s=>{function o(l){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},o(l)}s.exports=(typeof self>"u"?"undefined":o(self))=="object"?self.FormData:window.FormData},831:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={id:s,exports:{}};return t[s](l,l.exports,i),l.exports}i.m=t,i.n=s=>{var o=s&&s.__esModule?()=>s.default:()=>s;return i.d(o,{a:o}),o},i.d=(s,o)=>{for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.b=document.baseURI||self.location.href,i.nc=void 0;var r={};return(()=>{i.d(r,{default:()=>Hd});var s=i(856),o=i.n(s),l=i(470),d=i.n(l),c=i(370),u=i.n(c),h=i(458),A=i.n(h),b=i(278),v=i.n(b),x=i(488),w=i.n(x),L=i(685),I={};I.styleTagTransform=w(),I.setAttributes=A(),I.insert=u().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=v(),o()(L.Z,I),L.Z&&L.Z.locals&&L.Z.locals;function D(p){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},D(p)}function R(p,m){this.name="AggregateError",this.errors=p,this.message=m||""}R.prototype=Error.prototype;function $(p){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},$(p)}var F=setTimeout;function H(p){return!!(p&&p.length!==void 0)}function Y(){}function M(p){if(!(this instanceof M))throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],te(p,this)}function q(p,m){for(;p._state===3;)p=p._value;p._state!==0?(p._handled=!0,M._immediateFn(function(){var E=p._state===1?m.onFulfilled:m.onRejected;if(E!==null){var f;try{f=E(p._value)}catch(g){return void j(m.promise,g)}ae(m.promise,f)}else(p._state===1?ae:j)(m.promise,p._value)})):p._deferreds.push(m)}function ae(p,m){try{if(m===p)throw new TypeError("A promise cannot be resolved with itself.");if(m&&($(m)==="object"||typeof m=="function")){var E=m.then;if(m instanceof M)return p._state=3,p._value=m,void se(p);if(typeof E=="function")return void te((f=E,g=m,function(){f.apply(g,arguments)}),p)}p._state=1,p._value=m,se(p)}catch(y){j(p,y)}var f,g}function j(p,m){p._state=2,p._value=m,se(p)}function se(p){p._state===2&&p._deferreds.length===0&&M._immediateFn(function(){p._handled||M._unhandledRejectionFn(p._value)});for(var m=0,E=p._deferreds.length;m<E;m++)q(p,p._deferreds[m]);p._deferreds=null}function oe(p,m,E){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof m=="function"?m:null,this.promise=E}function te(p,m){var E=!1;try{p(function(f){E||(E=!0,ae(m,f))},function(f){E||(E=!0,j(m,f))})}catch(f){if(E)return;E=!0,j(m,f)}}M.prototype.catch=function(p){return this.then(null,p)},M.prototype.then=function(p,m){var E=new this.constructor(Y);return q(this,new oe(p,m,E)),E},M.prototype.finally=function(p){var m=this.constructor;return this.then(function(E){return m.resolve(p()).then(function(){return E})},function(E){return m.resolve(p()).then(function(){return m.reject(E)})})},M.all=function(p){return new M(function(m,E){if(!H(p))return E(new TypeError("Promise.all accepts an array"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var g=f.length;function y(C,k){try{if(k&&($(k)==="object"||typeof k=="function")){var P=k.then;if(typeof P=="function")return void P.call(k,function(N){y(C,N)},E)}f[C]=k,--g==0&&m(f)}catch(N){E(N)}}for(var S=0;S<f.length;S++)y(S,f[S])})},M.any=function(p){var m=this;return new m(function(E,f){if(!p||p.length===void 0)return f(new TypeError("Promise.any accepts an array"));var g=Array.prototype.slice.call(p);if(g.length===0)return f();for(var y=[],S=0;S<g.length;S++)try{m.resolve(g[S]).then(E).catch(function(C){y.push(C),y.length===g.length&&f(new R(y,"All promises were rejected"))})}catch(C){f(C)}})},M.allSettled=function(p){return new this(function(m,E){if(!p||p.length===void 0)return E(new TypeError(D(p)+" "+p+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var g=f.length;function y(C,k){if(k&&(D(k)==="object"||typeof k=="function")){var P=k.then;if(typeof P=="function")return void P.call(k,function(N){y(C,N)},function(N){f[C]={status:"rejected",reason:N},--g==0&&m(f)})}f[C]={status:"fulfilled",value:k},--g==0&&m(f)}for(var S=0;S<f.length;S++)y(S,f[S])})},M.resolve=function(p){return p&&$(p)==="object"&&p.constructor===M?p:new M(function(m){m(p)})},M.reject=function(p){return new M(function(m,E){E(p)})},M.race=function(p){return new M(function(m,E){if(!H(p))return E(new TypeError("Promise.race accepts an array"));for(var f=0,g=p.length;f<g;f++)M.resolve(p[f]).then(m,E)})},M._immediateFn=typeof setImmediate=="function"&&function(p){setImmediate(p)}||function(p){F(p,0)},M._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)};const he=M;var pe=/mobile/i.test(window.navigator.userAgent);const G={secondToTime:function(p){if((p=p||0)===0||p===1/0||p.toString()==="NaN")return"00:00";var m=Math.floor(p/3600),E=Math.floor((p-3600*m)/60),f=Math.floor(p-3600*m-60*E);return(m>0?[m,E,f]:[E,f]).map(function(g){return g<10?"0"+g:""+g}).join(":")},getElementViewLeft:function(p){var m=p.offsetLeft,E=p.offsetParent,f=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;E!==null&&E!==p;)m+=E.offsetLeft,E=E.offsetParent;else for(;E!==null;)m+=E.offsetLeft,E=E.offsetParent;return m-f},getBoundingClientRectViewLeft:function(p){var m=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(p.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var E=document.createElement("div");E.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(E),this.getBoundingClientRectViewLeft.offset=-E.getBoundingClientRect().top-m,document.body.removeChild(E),E=null}var f=p.getBoundingClientRect(),g=this.getBoundingClientRectViewLeft.offset;return f.left+g}return this.getElementViewLeft(p)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(p){var m=p.left,E=m===void 0?0:m,f=p.top,g=f===void 0?0:f;this.isFirefox?(document.documentElement.scrollLeft=E,document.documentElement.scrollTop=g):window.scrollTo(E,g)},isMobile:pe,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(p,m){localStorage.setItem(p,m)},get:function(p){return localStorage.getItem(p)}},nameMap:{dragStart:pe?"touchstart":"mousedown",dragMove:pe?"touchmove":"mousemove",dragEnd:pe?"touchend":"mouseup"},color2Number:function(p){return p[0]==="#"&&(p=p.substr(1)),p.length===3&&(p="".concat(p[0]).concat(p[0]).concat(p[1]).concat(p[1]).concat(p[2]).concat(p[2])),parseInt(p,16)+0&16777215},number2Color:function(p){return"#"+("00000"+p.toString(16)).slice(-6)},number2Type:function(p){switch(p){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function X(p,m){return function(){return p.apply(m,arguments)}}function ue(p){return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ue(p)}var ce,me=Object.prototype.toString,Ee=Object.getPrototypeOf,Te=(ce=Object.create(null),function(p){var m=me.call(p);return ce[m]||(ce[m]=m.slice(8,-1).toLowerCase())}),be=function(p){return p=p.toLowerCase(),function(m){return Te(m)===p}},_e=function(p){return function(m){return ue(m)===p}},Ne=Array.isArray,tt=_e("undefined"),vr=be("ArrayBuffer"),_o=_e("string"),ht=_e("function"),Er=_e("number"),ii=function(p){return p!==null&&ue(p)==="object"},yn=function(p){if(Te(p)!=="object")return!1;var m=Ee(p);return!(m!==null&&m!==Object.prototype&&Object.getPrototypeOf(m)!==null||Symbol.toStringTag in p||Symbol.iterator in p)},Po=be("Date"),Oo=be("File"),Fo=be("Blob"),Mo=be("FileList"),No=be("URLSearchParams");function $t(p,m){var E,f,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},y=g.allOwnKeys,S=y!==void 0&&y;if(p!=null)if(ue(p)!=="object"&&(p=[p]),Ne(p))for(E=0,f=p.length;E<f;E++)m.call(null,p[E],E,p);else{var C,k=S?Object.getOwnPropertyNames(p):Object.keys(p),P=k.length;for(E=0;E<P;E++)C=k[E],m.call(null,p[C],C,p)}}function xr(p,m){m=m.toLowerCase();for(var E,f=Object.keys(p),g=f.length;g-- >0;)if(m===(E=f[g]).toLowerCase())return E;return null}var ri,Sr,Tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Qd,Cr=function(p){return!tt(p)&&p!==Tr},Uo=(ri=typeof Uint8Array<"u"&&Ee(Uint8Array),function(p){return ri&&p instanceof ri}),$o=be("HTMLFormElement"),wr=(Sr=Object.prototype.hasOwnProperty,function(p,m){return Sr.call(p,m)}),Go=be("RegExp"),kr=function(p,m){var E=Object.getOwnPropertyDescriptors(p),f={};$t(E,function(g,y){m(g,y,p)!==!1&&(f[y]=g)}),Object.defineProperties(p,f)};const U={isArray:Ne,isArrayBuffer:vr,isBuffer:function(p){return p!==null&&!tt(p)&&p.constructor!==null&&!tt(p.constructor)&&ht(p.constructor.isBuffer)&&p.constructor.isBuffer(p)},isFormData:function(p){var m="[object FormData]";return p&&(typeof FormData=="function"&&p instanceof FormData||me.call(p)===m||ht(p.toString)&&p.toString()===m)},isArrayBufferView:function(p){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(p):p&&p.buffer&&vr(p.buffer)},isString:_o,isNumber:Er,isBoolean:function(p){return p===!0||p===!1},isObject:ii,isPlainObject:yn,isUndefined:tt,isDate:Po,isFile:Oo,isBlob:Fo,isRegExp:Go,isFunction:ht,isStream:function(p){return ii(p)&&ht(p.pipe)},isURLSearchParams:No,isTypedArray:Uo,isFileList:Mo,forEach:$t,merge:function p(){for(var m=Cr(this)&&this||{},E=m.caseless,f={},g=function(C,k){var P=E&&xr(f,k)||k;yn(f[P])&&yn(C)?f[P]=p(f[P],C):yn(C)?f[P]=p({},C):Ne(C)?f[P]=C.slice():f[P]=C},y=0,S=arguments.length;y<S;y++)arguments[y]&&$t(arguments[y],g);return f},extend:function(p,m,E){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},g=f.allOwnKeys;return $t(m,function(y,S){E&&ht(y)?p[S]=X(y,E):p[S]=y},{allOwnKeys:g}),p},trim:function(p){return p.trim?p.trim():p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(p){return p.charCodeAt(0)===65279&&(p=p.slice(1)),p},inherits:function(p,m,E,f){p.prototype=Object.create(m.prototype,f),p.prototype.constructor=p,Object.defineProperty(p,"super",{value:m.prototype}),E&&Object.assign(p.prototype,E)},toFlatObject:function(p,m,E,f){var g,y,S,C={};if(m=m||{},p==null)return m;do{for(y=(g=Object.getOwnPropertyNames(p)).length;y-- >0;)S=g[y],f&&!f(S,p,m)||C[S]||(m[S]=p[S],C[S]=!0);p=E!==!1&&Ee(p)}while(p&&(!E||E(p,m))&&p!==Object.prototype);return m},kindOf:Te,kindOfTest:be,endsWith:function(p,m,E){p=String(p),(E===void 0||E>p.length)&&(E=p.length),E-=m.length;var f=p.indexOf(m,E);return f!==-1&&f===E},toArray:function(p){if(!p)return null;if(Ne(p))return p;var m=p.length;if(!Er(m))return null;for(var E=new Array(m);m-- >0;)E[m]=p[m];return E},forEachEntry:function(p,m){for(var E,f=(p&&p[Symbol.iterator]).call(p);(E=f.next())&&!E.done;){var g=E.value;m.call(p,g[0],g[1])}},matchAll:function(p,m){for(var E,f=[];(E=p.exec(m))!==null;)f.push(E);return f},isHTMLForm:$o,hasOwnProperty:wr,hasOwnProp:wr,reduceDescriptors:kr,freezeMethods:function(p){kr(p,function(m,E){if(ht(p)&&["arguments","caller","callee"].indexOf(E)!==-1)return!1;var f=p[E];ht(f)&&(m.enumerable=!1,"writable"in m?m.writable=!1:m.set||(m.set=function(){throw Error("Can not rewrite read-only method '"+E+"'")}))})},toObjectSet:function(p,m){var E={},f=function(g){g.forEach(function(y){E[y]=!0})};return Ne(p)?f(p):f(String(p).split(m)),E},toCamelCase:function(p){return p.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(m,E,f){return E.toUpperCase()+f})},noop:function(){},toFiniteNumber:function(p,m){return p=+p,Number.isFinite(p)?p:m},findKey:xr,global:Tr,isContextDefined:Cr,toJSONObject:function(p){var m=new Array(10);return function E(f,g){if(ii(f)){if(m.indexOf(f)>=0)return;if(!("toJSON"in f)){m[g]=f;var y=Ne(f)?[]:{};return $t(f,function(S,C){var k=E(S,g+1);!tt(k)&&(y[C]=k)}),m[g]=void 0,y}}return f}(p,0)}};function Et(p,m,E,f,g){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=p,this.name="AxiosError",m&&(this.code=m),E&&(this.config=E),f&&(this.request=f),g&&(this.response=g)}U.inherits(Et,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Lr=Et.prototype,Ir={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(p){Ir[p]={value:p}}),Object.defineProperties(Et,Ir),Object.defineProperty(Lr,"isAxiosError",{value:!0}),Et.from=function(p,m,E,f,g,y){var S=Object.create(Lr);return U.toFlatObject(p,S,function(C){return C!==Error.prototype},function(C){return C!=="isAxiosError"}),Et.call(S,p.message,m,E,f,g),S.cause=p,S.name=p.name,y&&Object.assign(S,y),S};const ye=Et,Ko=i(937);function si(p){return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},si(p)}function ai(p){return U.isPlainObject(p)||U.isArray(p)}function Rr(p){return U.endsWith(p,"[]")?p.slice(0,-2):p}function Dr(p,m,E){return p?p.concat(m).map(function(f,g){return f=Rr(f),!E&&g?"["+f+"]":f}).join(E?".":""):m}var Ho=U.toFlatObject(U,{},null,function(p){return/^is[A-Z]/.test(p)});const An=function(p,m,E){if(!U.isObject(p))throw new TypeError("target must be an object");m=m||new(Ko||FormData);var f,g=(E=U.toFlatObject(E,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Z,Q){return!U.isUndefined(Q[Z])})).metaTokens,y=E.visitor||N,S=E.dots,C=E.indexes,k=(E.Blob||typeof Blob<"u"&&Blob)&&(f=m)&&U.isFunction(f.append)&&f[Symbol.toStringTag]==="FormData"&&f[Symbol.iterator];if(!U.isFunction(y))throw new TypeError("visitor must be a function");function P(Z){if(Z===null)return"";if(U.isDate(Z))return Z.toISOString();if(!k&&U.isBlob(Z))throw new ye("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(Z)||U.isTypedArray(Z)?k&&typeof Blob=="function"?new Blob([Z]):Buffer.from(Z):Z}function N(Z,Q,z){var ee=Z;if(Z&&!z&&si(Z)==="object"){if(U.endsWith(Q,"{}"))Q=g?Q:Q.slice(0,-2),Z=JSON.stringify(Z);else if(U.isArray(Z)&&function(le){return U.isArray(le)&&!le.some(ai)}(Z)||U.isFileList(Z)||U.endsWith(Q,"[]")&&(ee=U.toArray(Z)))return Q=Rr(Q),ee.forEach(function(le,Le){!U.isUndefined(le)&&le!==null&&m.append(C===!0?Dr([Q],Le,S):C===null?Q:Q+"[]",P(le))}),!1}return!!ai(Z)||(m.append(Dr(z,Q,S),P(Z)),!1)}var V=[],W=Object.assign(Ho,{defaultVisitor:N,convertValue:P,isVisitable:ai});if(!U.isObject(p))throw new TypeError("data must be an object");return function Z(Q,z){if(!U.isUndefined(Q)){if(V.indexOf(Q)!==-1)throw Error("Circular reference detected in "+z.join("."));V.push(Q),U.forEach(Q,function(ee,le){(!(U.isUndefined(ee)||ee===null)&&y.call(m,ee,U.isString(le)?le.trim():le,z,W))===!0&&Z(ee,z?z.concat(le):[le])}),V.pop()}}(p),m};function Br(p){var m={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g,function(E){return m[E]})}function _r(p,m){this._pairs=[],p&&An(p,this,m)}var Pr=_r.prototype;Pr.append=function(p,m){this._pairs.push([p,m])},Pr.toString=function(p){var m=p?function(E){return p.call(this,E,Br)}:Br;return this._pairs.map(function(E){return m(E[0])+"="+m(E[1])},"").join("&")};const Or=_r;function qo(p){return encodeURIComponent(p).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fr(p,m,E){if(!m)return p;var f,g=E&&E.encode||qo,y=E&&E.serialize;if(f=y?y(m,E):U.isURLSearchParams(m)?m.toString():new Or(m,E).toString(g)){var S=p.indexOf("#");S!==-1&&(p=p.slice(0,S)),p+=(p.indexOf("?")===-1?"?":"&")+f}return p}function Gt(p){return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Gt(p)}function Vo(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Gt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Gt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Gt(g)==="symbol"?g:String(g)),f)}var g}var zo=function(){function p(){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,p),this.handlers=[]}var m,E;return m=p,E=[{key:"use",value:function(f,g,y){return this.handlers.push({fulfilled:f,rejected:g,synchronous:!!y&&y.synchronous,runWhen:y?y.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(f){this.handlers[f]&&(this.handlers[f]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(f){U.forEach(this.handlers,function(g){g!==null&&f(g)})}}],E&&Vo(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Mr=zo,Nr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Yo=typeof URLSearchParams<"u"?URLSearchParams:Or,Wo=FormData;var oi,jo=(typeof navigator>"u"||(oi=navigator.product)!=="ReactNative"&&oi!=="NativeScript"&&oi!=="NS")&&typeof window<"u"&&typeof document<"u",Qo=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const ze={isBrowser:!0,classes:{URLSearchParams:Yo,FormData:Wo,Blob},isStandardBrowserEnv:jo,isStandardBrowserWebWorkerEnv:Qo,protocols:["http","https","file","blob","url","data"]},Ur=function(p){function m(f,g,y,S){var C=f[S++],k=Number.isFinite(+C),P=S>=f.length;return C=!C&&U.isArray(y)?y.length:C,P?(U.hasOwnProp(y,C)?y[C]=[y[C],g]:y[C]=g,!k):(y[C]&&U.isObject(y[C])||(y[C]=[]),m(f,g,y[C],S)&&U.isArray(y[C])&&(y[C]=function(N){var V,W,Z={},Q=Object.keys(N),z=Q.length;for(V=0;V<z;V++)Z[W=Q[V]]=N[W];return Z}(y[C])),!k)}if(U.isFormData(p)&&U.isFunction(p.entries)){var E={};return U.forEachEntry(p,function(f,g){m(function(y){return U.matchAll(/\w+|\[(\w*)]/g,y).map(function(S){return S[0]==="[]"?"":S[1]||S[0]})}(f),g,E,0)}),E}return null};var Xo={"Content-Type":void 0},bn={transitional:Nr,adapter:["xhr","http"],transformRequest:[function(p,m){var E,f=m.getContentType()||"",g=f.indexOf("application/json")>-1,y=U.isObject(p);if(y&&U.isHTMLForm(p)&&(p=new FormData(p)),U.isFormData(p))return g&&g?JSON.stringify(Ur(p)):p;if(U.isArrayBuffer(p)||U.isBuffer(p)||U.isStream(p)||U.isFile(p)||U.isBlob(p))return p;if(U.isArrayBufferView(p))return p.buffer;if(U.isURLSearchParams(p))return m.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();if(y){if(f.indexOf("application/x-www-form-urlencoded")>-1)return function(C,k){return An(C,new ze.classes.URLSearchParams,Object.assign({visitor:function(P,N,V,W){return ze.isNode&&U.isBuffer(P)?(this.append(N,P.toString("base64")),!1):W.defaultVisitor.apply(this,arguments)}},k))}(p,this.formSerializer).toString();if((E=U.isFileList(p))||f.indexOf("multipart/form-data")>-1){var S=this.env&&this.env.FormData;return An(E?{"files[]":p}:p,S&&new S,this.formSerializer)}}return y||g?(m.setContentType("application/json",!1),function(C,k,P){if(U.isString(C))try{return(0,JSON.parse)(C),U.trim(C)}catch(N){if(N.name!=="SyntaxError")throw N}return(0,JSON.stringify)(C)}(p)):p}],transformResponse:[function(p){var m=this.transitional||bn.transitional,E=m&&m.forcedJSONParsing,f=this.responseType==="json";if(p&&U.isString(p)&&(E&&!this.responseType||f)){var g=!(m&&m.silentJSONParsing)&&f;try{return JSON.parse(p)}catch(y){if(g)throw y.name==="SyntaxError"?ye.from(y,ye.ERR_BAD_RESPONSE,this,null,this.response):y}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],function(p){bn.headers[p]={}}),U.forEach(["post","put","patch"],function(p){bn.headers[p]=U.merge(Xo)});const li=bn;var Zo=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Kt(p){return Kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Kt(p)}function $r(p,m){(m==null||m>p.length)&&(m=p.length);for(var E=0,f=new Array(m);E<m;E++)f[E]=p[E];return f}function Gr(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Kt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Kt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Kt(g)==="symbol"?g:String(g)),f)}var g}var Kr=Symbol("internals");function Ht(p){return p&&String(p).trim().toLowerCase()}function vn(p){return p===!1||p==null?p:U.isArray(p)?p.map(vn):String(p)}function Hr(p,m,E,f){return U.isFunction(f)?f.call(this,m,E):U.isString(m)?U.isString(f)?m.indexOf(f)!==-1:U.isRegExp(f)?f.test(m):void 0:void 0}var En=function(p,m){function E(S){(function(C,k){if(!(C instanceof k))throw new TypeError("Cannot call a class as a function")})(this,E),S&&this.set(S)}var f,g,y;return f=E,g=[{key:"set",value:function(S,C,k){var P=this;function N(le,Le,Ce){var Ae=Ht(Le);if(!Ae)throw new Error("header name must be a non-empty string");var dt=U.findKey(P,Ae);(!dt||P[dt]===void 0||Ce===!0||Ce===void 0&&P[dt]!==!1)&&(P[dt||Le]=vn(le))}var V,W,Z,Q,z,ee=function(le,Le){return U.forEach(le,function(Ce,Ae){return N(Ce,Ae,Le)})};return U.isPlainObject(S)||S instanceof this.constructor?ee(S,C):U.isString(S)&&(S=S.trim())&&!/^[-_a-zA-Z]+$/.test(S.trim())?ee((z={},(V=S)&&V.split(`
`).forEach(function(le){Q=le.indexOf(":"),W=le.substring(0,Q).trim().toLowerCase(),Z=le.substring(Q+1).trim(),!W||z[W]&&Zo[W]||(W==="set-cookie"?z[W]?z[W].push(Z):z[W]=[Z]:z[W]=z[W]?z[W]+", "+Z:Z)}),z),C):S!=null&&N(C,S,k),this}},{key:"get",value:function(S,C){if(S=Ht(S)){var k=U.findKey(this,S);if(k){var P=this[k];if(!C)return P;if(C===!0)return function(N){for(var V,W=Object.create(null),Z=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;V=Z.exec(N);)W[V[1]]=V[2];return W}(P);if(U.isFunction(C))return C.call(this,P,k);if(U.isRegExp(C))return C.exec(P);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(S,C){if(S=Ht(S)){var k=U.findKey(this,S);return!(!k||C&&!Hr(0,this[k],k,C))}return!1}},{key:"delete",value:function(S,C){var k=this,P=!1;function N(V){if(V=Ht(V)){var W=U.findKey(k,V);!W||C&&!Hr(0,k[W],W,C)||(delete k[W],P=!0)}}return U.isArray(S)?S.forEach(N):N(S),P}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(S){var C=this,k={};return U.forEach(this,function(P,N){var V=U.findKey(k,N);if(V)return C[V]=vn(P),void delete C[N];var W=S?function(Z){return Z.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(Q,z,ee){return z.toUpperCase()+ee})}(N):String(N).trim();W!==N&&delete C[N],C[W]=vn(P),k[W]=!0}),this}},{key:"concat",value:function(){for(var S,C=arguments.length,k=new Array(C),P=0;P<C;P++)k[P]=arguments[P];return(S=this.constructor).concat.apply(S,[this].concat(k))}},{key:"toJSON",value:function(S){var C=Object.create(null);return U.forEach(this,function(k,P){k!=null&&k!==!1&&(C[P]=S&&U.isArray(k)?k.join(", "):k)}),C}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(S){var C,k,P=(k=2,function(N){if(Array.isArray(N))return N}(C=S)||function(N,V){var W=N==null?null:typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"];if(W!=null){var Z,Q,z,ee,le=[],Le=!0,Ce=!1;try{if(z=(W=W.call(N)).next,V===0){if(Object(W)!==W)return;Le=!1}else for(;!(Le=(Z=z.call(W)).done)&&(le.push(Z.value),le.length!==V);Le=!0);}catch(Ae){Ce=!0,Q=Ae}finally{try{if(!Le&&W.return!=null&&(ee=W.return(),Object(ee)!==ee))return}finally{if(Ce)throw Q}}return le}}(C,k)||function(N,V){if(N){if(typeof N=="string")return $r(N,V);var W=Object.prototype.toString.call(N).slice(8,-1);return W==="Object"&&N.constructor&&(W=N.constructor.name),W==="Map"||W==="Set"?Array.from(N):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?$r(N,V):void 0}}(C,k)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return P[0]+": "+P[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],y=[{key:"from",value:function(S){return S instanceof this?S:new this(S)}},{key:"concat",value:function(S){for(var C=new this(S),k=arguments.length,P=new Array(k>1?k-1:0),N=1;N<k;N++)P[N-1]=arguments[N];return P.forEach(function(V){return C.set(V)}),C}},{key:"accessor",value:function(S){var C=(this[Kr]=this[Kr]={accessors:{}}).accessors,k=this.prototype;function P(N){var V=Ht(N);C[V]||(function(W,Z){var Q=U.toCamelCase(" "+Z);["get","set","has"].forEach(function(z){Object.defineProperty(W,z+Q,{value:function(ee,le,Le){return this[z].call(this,Z,ee,le,Le)},configurable:!0})})}(k,N),C[V]=!0)}return U.isArray(S)?S.forEach(P):P(S),this}}],g&&Gr(f.prototype,g),y&&Gr(f,y),Object.defineProperty(f,"prototype",{writable:!1}),E}();En.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),U.freezeMethods(En.prototype),U.freezeMethods(En);const nt=En;function di(p,m){var E=this||li,f=m||E,g=nt.from(f.headers),y=f.data;return U.forEach(p,function(S){y=S.call(E,y,g.normalize(),m?m.status:void 0)}),g.normalize(),y}function qr(p){return!(!p||!p.__CANCEL__)}function Vr(p,m,E){ye.call(this,p??"canceled",ye.ERR_CANCELED,m,E),this.name="CanceledError"}U.inherits(Vr,ye,{__CANCEL__:!0});const xn=Vr,Jo=ze.isStandardBrowserEnv?{write:function(p,m,E,f,g,y){var S=[];S.push(p+"="+encodeURIComponent(m)),U.isNumber(E)&&S.push("expires="+new Date(E).toGMTString()),U.isString(f)&&S.push("path="+f),U.isString(g)&&S.push("domain="+g),y===!0&&S.push("secure"),document.cookie=S.join("; ")},read:function(p){var m=document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)"));return m?decodeURIComponent(m[3]):null},remove:function(p){this.write(p,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function zr(p,m){return p&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(m)?function(E,f){return f?E.replace(/\/+$/,"")+"/"+f.replace(/^\/+/,""):E}(p,m):m}const el=ze.isStandardBrowserEnv?function(){var p,m=/(msie|trident)/i.test(navigator.userAgent),E=document.createElement("a");function f(g){var y=g;return m&&(E.setAttribute("href",y),y=E.href),E.setAttribute("href",y),{href:E.href,protocol:E.protocol?E.protocol.replace(/:$/,""):"",host:E.host,search:E.search?E.search.replace(/^\?/,""):"",hash:E.hash?E.hash.replace(/^#/,""):"",hostname:E.hostname,port:E.port,pathname:E.pathname.charAt(0)==="/"?E.pathname:"/"+E.pathname}}return p=f(window.location.href),function(g){var y=U.isString(g)?f(g):g;return y.protocol===p.protocol&&y.host===p.host}}():function(){return!0};function Yr(p,m){var E=0,f=function(g,y){g=g||10;var S,C=new Array(g),k=new Array(g),P=0,N=0;return y=y!==void 0?y:1e3,function(V){var W=Date.now(),Z=k[N];S||(S=W),C[P]=V,k[P]=W;for(var Q=N,z=0;Q!==P;)z+=C[Q++],Q%=g;if((P=(P+1)%g)===N&&(N=(N+1)%g),!(W-S<y)){var ee=Z&&W-Z;return ee?Math.round(1e3*z/ee):void 0}}}(50,250);return function(g){var y=g.loaded,S=g.lengthComputable?g.total:void 0,C=y-E,k=f(C);E=y;var P={loaded:y,total:S,progress:S?y/S:void 0,bytes:C,rate:k||void 0,estimated:k&&S&&y<=S?(S-y)/k:void 0,event:g};P[m?"download":"upload"]=!0,p(P)}}var ci={http:null,xhr:typeof XMLHttpRequest<"u"&&function(p){return new Promise(function(m,E){var f,g=p.data,y=nt.from(p.headers).normalize(),S=p.responseType;function C(){p.cancelToken&&p.cancelToken.unsubscribe(f),p.signal&&p.signal.removeEventListener("abort",f)}U.isFormData(g)&&(ze.isStandardBrowserEnv||ze.isStandardBrowserWebWorkerEnv)&&y.setContentType(!1);var k=new XMLHttpRequest;if(p.auth){var P=p.auth.username||"",N=p.auth.password?unescape(encodeURIComponent(p.auth.password)):"";y.set("Authorization","Basic "+btoa(P+":"+N))}var V=zr(p.baseURL,p.url);function W(){if(k){var ee=nt.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders());(function(le,Le,Ce){var Ae=Ce.config.validateStatus;Ce.status&&Ae&&!Ae(Ce.status)?Le(new ye("Request failed with status code "+Ce.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(Ce.status/100)-4],Ce.config,Ce.request,Ce)):le(Ce)})(function(le){m(le),C()},function(le){E(le),C()},{data:S&&S!=="text"&&S!=="json"?k.response:k.responseText,status:k.status,statusText:k.statusText,headers:ee,config:p,request:k}),k=null}}if(k.open(p.method.toUpperCase(),Fr(V,p.params,p.paramsSerializer),!0),k.timeout=p.timeout,"onloadend"in k?k.onloadend=W:k.onreadystatechange=function(){k&&k.readyState===4&&(k.status!==0||k.responseURL&&k.responseURL.indexOf("file:")===0)&&setTimeout(W)},k.onabort=function(){k&&(E(new ye("Request aborted",ye.ECONNABORTED,p,k)),k=null)},k.onerror=function(){E(new ye("Network Error",ye.ERR_NETWORK,p,k)),k=null},k.ontimeout=function(){var ee=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded",le=p.transitional||Nr;p.timeoutErrorMessage&&(ee=p.timeoutErrorMessage),E(new ye(ee,le.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,p,k)),k=null},ze.isStandardBrowserEnv){var Z=(p.withCredentials||el(V))&&p.xsrfCookieName&&Jo.read(p.xsrfCookieName);Z&&y.set(p.xsrfHeaderName,Z)}g===void 0&&y.setContentType(null),"setRequestHeader"in k&&U.forEach(y.toJSON(),function(ee,le){k.setRequestHeader(le,ee)}),U.isUndefined(p.withCredentials)||(k.withCredentials=!!p.withCredentials),S&&S!=="json"&&(k.responseType=p.responseType),typeof p.onDownloadProgress=="function"&&k.addEventListener("progress",Yr(p.onDownloadProgress,!0)),typeof p.onUploadProgress=="function"&&k.upload&&k.upload.addEventListener("progress",Yr(p.onUploadProgress)),(p.cancelToken||p.signal)&&(f=function(ee){k&&(E(!ee||ee.type?new xn(null,p,k):ee),k.abort(),k=null)},p.cancelToken&&p.cancelToken.subscribe(f),p.signal&&(p.signal.aborted?f():p.signal.addEventListener("abort",f)));var Q,z=(Q=/^([-+\w]{1,25})(:?\/\/|:)/.exec(V))&&Q[1]||"";z&&ze.protocols.indexOf(z)===-1?E(new ye("Unsupported protocol "+z+":",ye.ERR_BAD_REQUEST,p)):k.send(g||null)})}};U.forEach(ci,function(p,m){if(p){try{Object.defineProperty(p,"name",{value:m})}catch{}Object.defineProperty(p,"adapterName",{value:m})}});function ui(p){if(p.cancelToken&&p.cancelToken.throwIfRequested(),p.signal&&p.signal.aborted)throw new xn(null,p)}function Wr(p){return ui(p),p.headers=nt.from(p.headers),p.data=di.call(p,p.transformRequest),["post","put","patch"].indexOf(p.method)!==-1&&p.headers.setContentType("application/x-www-form-urlencoded",!1),function(m){for(var E,f,g=(m=U.isArray(m)?m:[m]).length,y=0;y<g&&(E=m[y],!(f=U.isString(E)?ci[E.toLowerCase()]:E));y++);if(!f)throw f===!1?new ye("Adapter ".concat(E," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(U.hasOwnProp(ci,E)?"Adapter '".concat(E,"' is not available in the build"):"Unknown adapter '".concat(E,"'"));if(!U.isFunction(f))throw new TypeError("adapter is not a function");return f}(p.adapter||li.adapter)(p).then(function(m){return ui(p),m.data=di.call(p,p.transformResponse,m),m.headers=nt.from(m.headers),m},function(m){return qr(m)||(ui(p),m&&m.response&&(m.response.data=di.call(p,p.transformResponse,m.response),m.response.headers=nt.from(m.response.headers))),Promise.reject(m)})}var jr=function(p){return p instanceof nt?p.toJSON():p};function xt(p,m){m=m||{};var E={};function f(P,N,V){return U.isPlainObject(P)&&U.isPlainObject(N)?U.merge.call({caseless:V},P,N):U.isPlainObject(N)?U.merge({},N):U.isArray(N)?N.slice():N}function g(P,N,V){return U.isUndefined(N)?U.isUndefined(P)?void 0:f(void 0,P,V):f(P,N,V)}function y(P,N){if(!U.isUndefined(N))return f(void 0,N)}function S(P,N){return U.isUndefined(N)?U.isUndefined(P)?void 0:f(void 0,P):f(void 0,N)}function C(P,N,V){return V in m?f(P,N):V in p?f(void 0,P):void 0}var k={url:y,method:y,data:y,baseURL:S,transformRequest:S,transformResponse:S,paramsSerializer:S,timeout:S,timeoutMessage:S,withCredentials:S,adapter:S,responseType:S,xsrfCookieName:S,xsrfHeaderName:S,onUploadProgress:S,onDownloadProgress:S,decompress:S,maxContentLength:S,maxBodyLength:S,beforeRedirect:S,transport:S,httpAgent:S,httpsAgent:S,cancelToken:S,socketPath:S,responseEncoding:S,validateStatus:C,headers:function(P,N){return g(jr(P),jr(N),!0)}};return U.forEach(Object.keys(p).concat(Object.keys(m)),function(P){var N=k[P]||g,V=N(p[P],m[P],P);U.isUndefined(V)&&N!==C||(E[P]=V)}),E}function Sn(p){return Sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Sn(p)}var hi={};["object","boolean","number","function","string","symbol"].forEach(function(p,m){hi[p]=function(E){return Sn(E)===p||"a"+(m<1?"n ":" ")+p}});var Qr={};hi.transitional=function(p,m,E){function f(g,y){return"[Axios v1.2.3] Transitional option '"+g+"'"+y+(E?". "+E:"")}return function(g,y,S){if(p===!1)throw new ye(f(y," has been removed"+(m?" in "+m:"")),ye.ERR_DEPRECATED);return m&&!Qr[y]&&(Qr[y]=!0,console.warn(f(y," has been deprecated since v"+m+" and will be removed in the near future"))),!p||p(g,y,S)}};const fi={assertOptions:function(p,m,E){if(Sn(p)!=="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);for(var f=Object.keys(p),g=f.length;g-- >0;){var y=f[g],S=m[y];if(S){var C=p[y],k=C===void 0||S(C,y,p);if(k!==!0)throw new ye("option "+y+" must be "+k,ye.ERR_BAD_OPTION_VALUE)}else if(E!==!0)throw new ye("Unknown option "+y,ye.ERR_BAD_OPTION)}},validators:hi};function qt(p){return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},qt(p)}function tl(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(qt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(qt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),qt(g)==="symbol"?g:String(g)),f)}var g}var ot=fi.validators,Tn=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.defaults=f,this.interceptors={request:new Mr,response:new Mr}}var m,E;return m=p,(E=[{key:"request",value:function(f,g){typeof f=="string"?(g=g||{}).url=f:g=f||{};var y,S=g=xt(this.defaults,g),C=S.transitional,k=S.paramsSerializer,P=S.headers;C!==void 0&&fi.assertOptions(C,{silentJSONParsing:ot.transitional(ot.boolean),forcedJSONParsing:ot.transitional(ot.boolean),clarifyTimeoutError:ot.transitional(ot.boolean)},!1),k!==void 0&&fi.assertOptions(k,{encode:ot.function,serialize:ot.function},!0),g.method=(g.method||this.defaults.method||"get").toLowerCase(),(y=P&&U.merge(P.common,P[g.method]))&&U.forEach(["delete","get","head","post","put","patch","common"],function(Ae){delete P[Ae]}),g.headers=nt.concat(y,P);var N=[],V=!0;this.interceptors.request.forEach(function(Ae){typeof Ae.runWhen=="function"&&Ae.runWhen(g)===!1||(V=V&&Ae.synchronous,N.unshift(Ae.fulfilled,Ae.rejected))});var W,Z=[];this.interceptors.response.forEach(function(Ae){Z.push(Ae.fulfilled,Ae.rejected)});var Q,z=0;if(!V){var ee=[Wr.bind(this),void 0];for(ee.unshift.apply(ee,N),ee.push.apply(ee,Z),Q=ee.length,W=Promise.resolve(g);z<Q;)W=W.then(ee[z++],ee[z++]);return W}Q=N.length;var le=g;for(z=0;z<Q;){var Le=N[z++],Ce=N[z++];try{le=Le(le)}catch(Ae){Ce.call(this,Ae);break}}try{W=Wr.call(this,le)}catch(Ae){return Promise.reject(Ae)}for(z=0,Q=Z.length;z<Q;)W=W.then(Z[z++],Z[z++]);return W}},{key:"getUri",value:function(f){return Fr(zr((f=xt(this.defaults,f)).baseURL,f.url),f.params,f.paramsSerializer)}}])&&tl(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();U.forEach(["delete","get","head","options"],function(p){Tn.prototype[p]=function(m,E){return this.request(xt(E||{},{method:p,url:m,data:(E||{}).data}))}}),U.forEach(["post","put","patch"],function(p){function m(E){return function(f,g,y){return this.request(xt(y||{},{method:p,headers:E?{"Content-Type":"multipart/form-data"}:{},url:f,data:g}))}}Tn.prototype[p]=m(),Tn.prototype[p+"Form"]=m(!0)});const Cn=Tn;function Vt(p){return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Vt(p)}function Xr(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Vt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Vt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Vt(g)==="symbol"?g:String(g)),f)}var g}var nl=function(){function p(g){if(function(C,k){if(!(C instanceof k))throw new TypeError("Cannot call a class as a function")}(this,p),typeof g!="function")throw new TypeError("executor must be a function.");var y;this.promise=new Promise(function(C){y=C});var S=this;this.promise.then(function(C){if(S._listeners){for(var k=S._listeners.length;k-- >0;)S._listeners[k](C);S._listeners=null}}),this.promise.then=function(C){var k,P=new Promise(function(N){S.subscribe(N),k=N}).then(C);return P.cancel=function(){S.unsubscribe(k)},P},g(function(C,k,P){S.reason||(S.reason=new xn(C,k,P),y(S.reason))})}var m,E,f;return m=p,E=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(g){this.reason?g(this.reason):this._listeners?this._listeners.push(g):this._listeners=[g]}},{key:"unsubscribe",value:function(g){if(this._listeners){var y=this._listeners.indexOf(g);y!==-1&&this._listeners.splice(y,1)}}}],f=[{key:"source",value:function(){var g;return{token:new p(function(y){g=y}),cancel:g}}}],E&&Xr(m.prototype,E),f&&Xr(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const il=nl;function Zr(p,m){(m==null||m>p.length)&&(m=p.length);for(var E=0,f=new Array(m);E<m;E++)f[E]=p[E];return f}var pi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pi).forEach(function(p){var m,E,f=(E=2,function(S){if(Array.isArray(S))return S}(m=p)||function(S,C){var k=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(k!=null){var P,N,V,W,Z=[],Q=!0,z=!1;try{if(V=(k=k.call(S)).next,C===0){if(Object(k)!==k)return;Q=!1}else for(;!(Q=(P=V.call(k)).done)&&(Z.push(P.value),Z.length!==C);Q=!0);}catch(ee){z=!0,N=ee}finally{try{if(!Q&&k.return!=null&&(W=k.return(),Object(W)!==W))return}finally{if(z)throw N}}return Z}}(m,E)||function(S,C){if(S){if(typeof S=="string")return Zr(S,C);var k=Object.prototype.toString.call(S).slice(8,-1);return k==="Object"&&S.constructor&&(k=S.constructor.name),k==="Map"||k==="Set"?Array.from(S):k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)?Zr(S,C):void 0}}(m,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),g=f[0],y=f[1];pi[y]=g});const rl=pi;var ke=function p(m){var E=new Cn(m),f=X(Cn.prototype.request,E);return U.extend(f,Cn.prototype,E,{allOwnKeys:!0}),U.extend(f,E,null,{allOwnKeys:!0}),f.create=function(g){return p(xt(m,g))},f}(li);ke.Axios=Cn,ke.CanceledError=xn,ke.CancelToken=il,ke.isCancel=qr,ke.VERSION="1.2.3",ke.toFormData=An,ke.AxiosError=ye,ke.Cancel=ke.CanceledError,ke.all=function(p){return Promise.all(p)},ke.spread=function(p){return function(m){return p.apply(null,m)}},ke.isAxiosError=function(p){return U.isObject(p)&&p.isAxiosError===!0},ke.mergeConfig=xt,ke.AxiosHeaders=nt,ke.formToJSON=function(p){return Ur(U.isHTMLForm(p)?new FormData(p):p)},ke.HttpStatusCode=rl,ke.default=ke;const Jr=ke,sl={send:function(p){Jr.post(p.url,p.data).then(function(m){var E=m.data;E&&E.code===0?p.success&&p.success(E):p.error&&p.error(E&&E.msg)}).catch(function(m){console.error(m),p.error&&p.error()})},read:function(p){Jr.get(p.url).then(function(m){var E=m.data;E&&E.code===0?p.success&&p.success(E.data.map(function(f){return{time:f[0],type:f[1],color:f[2],author:f[3],text:f[4]}})):p.error&&p.error(E&&E.msg)}).catch(function(m){console.error(m),p.error&&p.error()})}};function mi(p){return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},mi(p)}function al(p){var m=this;this.lang=p,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(E){return E=E.toLowerCase(),St[m.lang]&&St[m.lang][E]?St[m.lang][E]:St[m.fallbackLang]&&St[m.fallbackLang][E]?St[m.fallbackLang][E]:gi[E]?gi[E]:E}}var gi={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},St={en:gi,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},ol=i(730),ll=i.n(ol),dl=i(74),cl=i.n(dl),ul=i(437),hl=i.n(ul),fl=i(644),pl=i.n(fl),ml=i(324),gl=i.n(ml),yl=i(574),Al=i.n(yl),bl=i(300),vl=i.n(bl),El=i(934),xl=i.n(El),Sl=i(428),Tl=i.n(Sl),Cl=i(807),wl=i.n(Cl),kl=i(338),Ll=i.n(kl),Il=i(254),Rl=i.n(Il),Dl=i(965),Bl=i.n(Dl),_l=i(113),Pl=i.n(_l),Ol=i(251),Fl=i.n(Ol),Ml=i(410),Nl=i.n(Ml),Ul=i(182),$l=i.n(Ul),Gl=i(193),Kl=i.n(Gl);const Ke={play:ll(),pause:cl(),volumeUp:hl(),volumeDown:pl(),volumeOff:gl(),full:Al(),fullWeb:vl(),setting:xl(),right:Tl(),comment:wl(),commentOff:Ll(),send:Rl(),pallette:Bl(),camera:Pl(),subtitle:Nl(),loading:$l(),airplay:Fl(),chromecast:Kl()};var Hl=i(916),ql=i.n(Hl);function zt(p){return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},zt(p)}function es(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(zt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(zt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),zt(g)==="symbol"?g:String(g)),f)}var g}var Vl=function(){function p(g){(function(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=g.container,this.options=g.options,this.index=g.index,this.tran=g.tran,this.init()}var m,E,f;return m=p,f=[{key:"NewNotice",value:function(g,y,S){var C=document.createElement("div");return C.classList.add("dplayer-notice"),C.style.opacity=y,C.innerText=g,S&&(C.id="dplayer-notice-".concat(S)),C}}],(E=[{key:"init",value:function(){this.container.innerHTML=ql()({options:this.options,index:this.index,tran:this.tran,icons:Ke,mobile:G.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!G.isSafari||G.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&es(m.prototype,E),f&&es(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ts=Vl;function Tt(p){return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Tt(p)}function zl(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Tt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Tt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Tt(g)==="symbol"?g:String(g)),f)}var g}var Yl=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=f,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var m,E;return m=p,E=[{key:"load",value:function(){var f,g=this;f=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var y=(this.options.api.addition||[]).slice(0);y.push(f),this.events&&this.events.trigger("danmaku_load_start",y),this._readAllEndpoints(y,function(S){g.dan=[].concat.apply([],S).sort(function(C,k){return C.time-k.time}),window.requestAnimationFrame(function(){g.frame()}),g.options.callback(),g.events&&g.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(f){this.options.api=f,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(f,g){for(var y=this,S=[],C=0,k=function(N){y.options.apiBackend.read({url:f[N],success:function(V){S[N]=V,++C===f.length&&g(S)},error:function(V){y.options.error(V||y.options.tran("danmaku-failed")),S[N]=[],++C===f.length&&g(S)}})},P=0;P<f.length;++P)k(P)}},{key:"send",value:function(f,g){var y=this,S={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:f.text,color:f.color,type:f.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:S,success:g,error:function(k){y.options.error(k||y.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,S),this.danIndex++;var C={text:this.htmlEncode(S.text),color:S.color,type:S.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(C),this.events&&this.events.trigger("danmaku_send",S)}},{key:"frame",value:function(){var f=this;if(this.dan.length&&!this.paused&&this.showing){for(var g=this.dan[this.danIndex],y=[];g&&this.options.time()>parseFloat(g.time);)y.push(g),g=this.dan[++this.danIndex];this.draw(y)}window.requestAnimationFrame(function(){f.frame()})}},{key:"opacity",value:function(f){if(f!==void 0){for(var g=this.container.getElementsByClassName("dplayer-danmaku-item"),y=0;y<g.length;y++)g[y].style.opacity=f;this._opacity=f,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(f){var g=this;if(this.showing){var y=this.options.height,S=this.container.offsetWidth,C=this.container.offsetHeight,k=parseInt(C/y),P=function(z){var ee=z.offsetWidth||parseInt(z.style.width),le=z.getBoundingClientRect().right||g.container.getBoundingClientRect().right+ee;return g.container.getBoundingClientRect().right-le},N=function(z){return(S+z)/5},V=function(z,ee,le){for(var Le=S/N(le),Ce=function(ft){var wt=g.danTunnel[ee][ft+""];if(!wt||!wt.length)return g.danTunnel[ee][ft+""]=[z],z.addEventListener("animationend",function(){g.danTunnel[ee][ft+""].splice(0,1)}),{v:ft%k};if(ee!=="right")return"continue";for(var cn=0;cn<wt.length;cn++){var os=P(wt[cn])-10;if(os<=S-Le*N(parseInt(wt[cn].style.width))||os<=0)break;if(cn===wt.length-1)return g.danTunnel[ee][ft+""].push(z),z.addEventListener("animationend",function(){g.danTunnel[ee][ft+""].splice(0,1)}),{v:ft%k}}},Ae=0;g.unlimited||Ae<k;Ae++){var dt=Ce(Ae);if(dt!=="continue"&&Tt(dt)==="object")return dt.v}return-1};Object.prototype.toString.call(f)!=="[object Array]"&&(f=[f]);for(var W=document.createDocumentFragment(),Z=function(){f[Q].type=G.number2Type(f[Q].type),f[Q].color||(f[Q].color=16777215);var z=document.createElement("div");z.classList.add("dplayer-danmaku-item"),z.classList.add("dplayer-danmaku-".concat(f[Q].type)),f[Q].border?z.innerHTML='<span style="border:'.concat(f[Q].border,'">').concat(f[Q].text,"</span>"):z.innerHTML=f[Q].text,z.style.opacity=g._opacity,z.style.color=G.number2Color(f[Q].color),z.addEventListener("animationend",function(){g.container.removeChild(z)});var ee,le=g._measure(f[Q].text);switch(f[Q].type){case"right":(ee=V(z,f[Q].type,le))>=0&&(z.style.width=le+1+"px",z.style.top=y*ee+"px",z.style.transform="translateX(-".concat(S,"px)"));break;case"top":(ee=V(z,f[Q].type))>=0&&(z.style.top=y*ee+"px");break;case"bottom":(ee=V(z,f[Q].type))>=0&&(z.style.bottom=y*ee+"px");break;default:console.error("Can't handled danmaku type: ".concat(f[Q].type))}ee>=0&&(z.classList.add("dplayer-danmaku-move"),z.style.animationDuration=g._danAnimation(f[Q].type),W.appendChild(z))},Q=0;Q<f.length;Q++)Z();return this.container.appendChild(W),W}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(f){if(!this.context){var g=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=g.getPropertyValue("font")}return this.context.measureText(f).width}},{key:"seek",value:function(){this.clear();for(var f=0;f<this.dan.length;f++){if(this.dan[f].time>=this.options.time()){this.danIndex=f;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var f=this.container.offsetWidth,g=this.container.getElementsByClassName("dplayer-danmaku-item"),y=0;y<g.length;y++)g[y].style.transform="translateX(-".concat(f,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(f){this.unlimited=f}},{key:"speed",value:function(f){this.options.api.speedRate=f}},{key:"_danAnimation",value:function(f){var g=this.options.api.speedRate||1,y=!!this.player.fullScreen.isFullScreen();return{top:"".concat((y?6:4)/g,"s"),right:"".concat((y?8:5)/g,"s"),bottom:"".concat((y?6:4)/g,"s")}[f]}}],E&&zl(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Wl=Yl;function Yt(p){return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Yt(p)}function jl(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Yt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Yt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Yt(g)==="symbol"?g:String(g)),f)}var g}const Ql=function(){function p(){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,p),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var m,E;return m=p,(E=[{key:"on",value:function(f,g){this.type(f)&&typeof g=="function"&&(this.events[f]||(this.events[f]=[]),this.events[f].push(g))}},{key:"trigger",value:function(f,g){if(this.events[f]&&this.events[f].length)for(var y=0;y<this.events[f].length;y++)this.events[f][y](g)}},{key:"type",value:function(f){return this.playerEvents.indexOf(f)!==-1?"player":this.videoEvents.indexOf(f)!==-1?"video":(console.error("Unknown event name: ".concat(f)),null)}}])&&jl(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();function Wt(p){return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Wt(p)}function Xl(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Wt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Wt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Wt(g)==="symbol"?g:String(g)),f)}var g}var Zl=function(){function p(f){var g=this;(function(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){g.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){g.player.resize(),G.setScrollPosition(g.lastScrollPosition)}),this.fullscreenchange=function(){g.player.resize(),g.isFullScreen("browser")?g.player.events.trigger("fullscreen"):(G.setScrollPosition(g.lastScrollPosition),g.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var y=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;y&&y!==g.player.container||(g.player.resize(),y?g.player.events.trigger("fullscreen"):(G.setScrollPosition(g.lastScrollPosition),g.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var m,E;return m=p,E=[{key:"isFullScreen",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",g=f==="browser"?"web":"browser",y=this.isFullScreen(g);switch(y||(this.lastScrollPosition=G.getScrollPosition()),f){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}y&&this.cancel(g)}},{key:"cancel",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(f)?this.cancel(f):this.request(f)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],E&&Xl(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Jl=Zl;function jt(p){return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},jt(p)}function ed(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(jt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(jt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),jt(g)==="symbol"?g:String(g)),f)}var g}var td=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:f.options.hasOwnProperty("volume")?f.options.volume:.7,unlimited:(f.options.danmaku&&f.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var m,E;return m=p,(E=[{key:"init",value:function(){for(var f in this.storageName){var g=this.storageName[f];this.data[f]=parseFloat(G.storage.get(g)||this.default[f])}}},{key:"get",value:function(f){return this.data[f]}},{key:"set",value:function(f,g){this.data[f]=g,G.storage.set(this.storageName[f],g)}}])&&ed(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const nd=td;function Qt(p){return Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Qt(p)}function id(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Qt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Qt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Qt(g)==="symbol"?g:String(g)),f)}var g}var rd=function(){function p(f,g,y,S){(function(C,k){if(!(C instanceof k))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.video=g,this.options=y,this.events=S,this.init()}var m,E;return m=p,E=[{key:"init",value:function(){var f=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var g=this.video.textTracks[0];g.oncuechange=function(){var y=g.activeCues[g.activeCues.length-1];if(f.container.innerHTML="",y){var S=document.createElement("div");S.appendChild(y.getCueAsHTML());var C=S.innerHTML.split(/\r?\n/).map(function(k){return"<p>".concat(k,"</p>")}).join("");f.container.innerHTML=C}f.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],E&&id(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const sd=rd;function Xt(p){return Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Xt(p)}function ad(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Xt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Xt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Xt(g)==="symbol"?g:String(g)),f)}var g}var od=function(){function p(f){var g=this;(function(k,P){if(!(k instanceof P))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){g.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){g.adaptiveHeight(),g.show()});for(var y=this.player.template.subtitlesItem.length-1,S=function(k){g.player.template.subtitlesItem[k].addEventListener("click",function(){g.hide(),g.player.options.subtitle.index!==k&&(g.player.template.subtitle.innerHTML="<p></p>",g.player.template.subtrack.src=g.player.template.subtitlesItem[k].dataset.subtitle,g.player.options.subtitle.index=k,g.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&g.subContainerShow())})},C=0;C<y;C++)S(C);this.player.template.subtitlesItem[y].addEventListener("click",function(){g.hide(),g.player.options.subtitle.index!==y&&(g.player.template.subtitle.innerHTML="<p></p>",g.player.template.subtrack.src="",g.player.options.subtitle.index=y,g.subContainerHide())})}var m,E;return m=p,(E=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var f=30*this.player.template.subtitlesItem.length+14,g=.8*this.player.template.videoWrap.offsetHeight;f>=g-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=g-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=g-50+"px")}}])&&ad(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ld=od;function Zt(p){return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Zt(p)}function dd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Zt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Zt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Zt(g)==="symbol"?g:String(g)),f)}var g}var cd=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.elements={},this.elements.volume=f.volumeBar,this.elements.played=f.playedBar,this.elements.loaded=f.loadedBar,this.elements.danmaku=f.danmakuOpacityBar}var m,E;return m=p,(E=[{key:"set",value:function(f,g,y){g=Math.max(g,0),g=Math.min(g,1),this.elements[f].style[y]=100*g+"%"}},{key:"get",value:function(f){return parseFloat(this.elements[f].style.width)/100}}])&&dd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ud=cd;function Jt(p){return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Jt(p)}function hd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(Jt(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(Jt(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),Jt(g)==="symbol"?g:String(g)),f)}var g}var fd=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(g){window.setTimeout(g,1e3/60)},this.types=["loading","info","fps"],this.init()}var m,E;return m=p,(E=[{key:"init",value:function(){var f=this;this.types.map(function(g){return g!=="fps"&&f["init".concat(g,"Checker")](),g})}},{key:"initloadingChecker",value:function(){var f=this,g=0,y=0,S=!1;this.loadingChecker=setInterval(function(){f.enableloadingChecker&&(y=f.player.video.currentTime,S||y!==g||f.player.video.paused||(f.player.container.classList.add("dplayer-loading"),S=!0),S&&y>g&&!f.player.video.paused&&(f.player.container.classList.remove("dplayer-loading"),S=!1),g=y)},100)}},{key:"initfpsChecker",value:function(){var f=this;window.requestAnimationFrame(function(){if(f.enablefpsChecker)if(f.initfpsChecker(),f.fpsStart){f.fpsIndex++;var g=new Date;g-f.fpsStart>1e3&&(f.player.infoPanel.fps(f.fpsIndex/(g-f.fpsStart)*1e3),f.fpsStart=new Date,f.fpsIndex=0)}else f.fpsStart=new Date,f.fpsIndex=0;else f.fpsStart=0,f.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var f=this;this.infoChecker=setInterval(function(){f.enableinfoChecker&&f.player.infoPanel.update()},1e3)}},{key:"enable",value:function(f){this["enable".concat(f,"Checker")]=!0,f==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(f){this["enable".concat(f,"Checker")]=!1}},{key:"destroy",value:function(){var f=this;this.types.map(function(g){return f["enable".concat(g,"Checker")]=!1,f["".concat(g,"Checker")]&&clearInterval(f["".concat(g,"Checker")]),g})}}])&&hd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const pd=fd;function en(p){return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},en(p)}function md(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(en(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(en(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),en(g)==="symbol"?g:String(g)),f)}var g}const gd=function(){function p(f){var g=this;(function(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.container.addEventListener("animationend",function(){g.container.classList.remove("dplayer-bezel-transition")})}var m,E;return m=p,(E=[{key:"switch",value:function(f){this.container.innerHTML=f,this.container.classList.add("dplayer-bezel-transition")}}])&&md(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();function tn(p){return tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},tn(p)}function yd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(tn(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(tn(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),tn(g)==="symbol"?g:String(g)),f)}var g}var Ad=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.container,this.barWidth=f.barWidth,this.container.style.backgroundImage="url('".concat(f.url,"')"),this.events=f.events}var m,E;return m=p,(E=[{key:"resize",value:function(f,g,y){this.container.style.width="".concat(f,"px"),this.container.style.height="".concat(g,"px"),this.container.style.top="".concat(2-g,"px"),this.barWidth=y}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(f){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(f/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(f-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&yd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const bd=Ad;function nn(p){return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},nn(p)}function vd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(nn(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(nn(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),nn(g)==="symbol"?g:String(g)),f)}var g}var lt,ns=!0,yi=!1,Ed=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.autoHideTimer=0,G.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),G.isMobile||this.initVolumeButton()}var m,E;return m=p,(E=[{key:"initPlayButton",value:function(){var f=this;this.player.template.playButton.addEventListener("click",function(){f.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){f.player.toggle()}),G.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){f.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){f.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.player.toggle()}))}},{key:"initHighlights",value:function(){var f=this;this.player.on("durationchange",function(){if(f.player.video.duration!==1&&f.player.video.duration!==1/0&&f.player.options.highlight){var g=f.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(g,0).forEach(function(C){f.player.template.playedBarWrap.removeChild(C)});for(var y=0;y<f.player.options.highlight.length;y++)if(f.player.options.highlight[y].text&&f.player.options.highlight[y].time){var S=document.createElement("div");S.classList.add("dplayer-highlight"),S.style.left=f.player.options.highlight[y].time/f.player.video.duration*100+"%",S.innerHTML='<span class="dplayer-highlight-text">'+f.player.options.highlight[y].text+"</span>",f.player.template.playedBarWrap.insertBefore(S,f.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var f=this;this.player.options.video.thumbnails&&(this.thumbnails=new bd({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){f.thumbnails.resize(160,f.player.video.videoHeight/f.player.video.videoWidth*160,f.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var f=this,g=function(S){var C=((S.clientX||S.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;C=Math.max(C,0),C=Math.min(C,1),f.player.bar.set("played",C,"width"),f.player.template.ptime.innerHTML=G.secondToTime(C*f.player.video.duration)},y=function S(C){document.removeEventListener(G.nameMap.dragEnd,S),document.removeEventListener(G.nameMap.dragMove,g);var k=((C.clientX||C.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;k=Math.max(k,0),k=Math.min(k,1),f.player.bar.set("played",k,"width"),f.player.seek(f.player.bar.get("played")*f.player.video.duration),f.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(G.nameMap.dragStart,function(){f.player.timer.disable("progress"),document.addEventListener(G.nameMap.dragMove,g),document.addEventListener(G.nameMap.dragEnd,y)}),this.player.template.playedBarWrap.addEventListener(G.nameMap.dragMove,function(S){if(f.player.video.duration){var C=f.player.template.playedBarWrap.getBoundingClientRect().left,k=(S.clientX||S.changedTouches[0].clientX)-C;if(k<0||k>f.player.template.playedBarWrap.offsetWidth)return;var P=f.player.video.duration*(k/f.player.template.playedBarWrap.offsetWidth);G.isMobile&&f.thumbnails&&f.thumbnails.show(),f.thumbnails&&f.thumbnails.move(k),f.player.template.playedBarTime.style.left="".concat(k-(P>=3600?25:20),"px"),f.player.template.playedBarTime.innerText=G.secondToTime(P),f.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(G.nameMap.dragEnd,function(){G.isMobile&&f.thumbnails&&f.thumbnails.hide()}),G.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.show(),f.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.hide(),f.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var f=this;this.player.template.browserFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var f=this,g=function(S){var C=S||window.event,k=((C.clientX||C.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(k)},y=function S(){document.removeEventListener(G.nameMap.dragEnd,S),document.removeEventListener(G.nameMap.dragMove,g),f.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(S){var C=S||window.event,k=((C.clientX||C.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(k)}),this.player.template.volumeBarWrapWrap.addEventListener(G.nameMap.dragStart,function(){document.addEventListener(G.nameMap.dragMove,g),document.addEventListener(G.nameMap.dragEnd,y),f.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){f.player.video.muted?(f.player.video.muted=!1,f.player.switchVolumeIcon(),f.player.bar.set("volume",f.player.volume(),"width")):(f.player.video.muted=!0,f.player.template.volumeIcon.innerHTML=Ke.volumeOff,f.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var f=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(g){g.target.classList.contains("dplayer-quality-item")&&f.player.switchQuality(g.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var f=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var g,y=document.createElement("canvas");y.width=f.player.video.videoWidth,y.height=f.player.video.videoHeight,y.getContext("2d").drawImage(f.player.video,0,0,y.width,y.height),y.toBlob(function(S){g=URL.createObjectURL(S);var C=document.createElement("a");C.href=g,C.download="DPlayer.png",C.style.display="none",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(g),f.player.events.trigger("screenshot",g)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(f){f.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var f=window.document.createElement("script");f.setAttribute("type","text/javascript"),f.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(f),window.__onGCastApiAvailable=function(g){if(g){var y=new(lt=window.chrome.cast).SessionRequest(lt.media.DEFAULT_MEDIA_RECEIVER_APP_ID),S=new lt.ApiConfig(y,function(){},function(C){C===lt.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",C)});lt.initialize(S,function(){})}}}},{key:"initChromecastButton",value:function(){var f=this;if(this.player.options.chromecast){ns&&(ns=!1,this.initChromecast());var g=function(S,C){f.currentMedia=C},y=function(S){console.error("Error launching media",S)};this.player.template.chromecastButton.addEventListener("click",function(){yi?(yi=!1,f.currentMedia.stop(),f.session.stop(),f.initChromecast()):(yi=!0,lt.requestSession(function(S){var C,k,P;f.session=S,C=f.player.options.video.url,k=new lt.media.MediaInfo(C),P=new lt.media.LoadRequest(k),f.session?f.session.loadMedia(P,g.bind(f,"loadMedia"),y).play():window.open(C)},function(S){S.code==="cancel"?f.session=void 0:console.error("Error selecting a cast device",S)}))})}}},{key:"initSubtitleButton",value:function(){var f=this;this.player.events.on("subtitle_show",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("hide-subs"),f.player.template.subtitleButtonInner.style.opacity="",f.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("show-subs"),f.player.template.subtitleButtonInner.style.opacity="0.4",f.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){f.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var f=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!f.player.video.played.length||f.player.paused||f.disableAutoHide||f.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){G.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&vd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const xd=Ed;function rn(p){return rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},rn(p)}function Sd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(rn(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(rn(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),rn(g)==="symbol"?g:String(g)),f)}var g}var Td=function(){function p(f){var g=this;(function(P,N){if(!(P instanceof N))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){g.hide()}),this.player.template.settingButton.addEventListener("click",function(){g.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){g.player.template.loopToggle.checked=!g.player.template.loopToggle.checked,g.player.template.loopToggle.checked?g.loop=!0:g.loop=!1,g.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){g.player.template.showDanmakuToggle.checked=!g.player.template.showDanmakuToggle.checked,g.player.template.showDanmakuToggle.checked?(g.showDanmaku=!0,g.player.danmaku.show()):(g.showDanmaku=!1,g.player.danmaku.hide()),g.player.user.set("danmaku",g.showDanmaku?1:0),g.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){g.player.template.unlimitDanmakuToggle.checked=!g.player.template.unlimitDanmakuToggle.checked,g.player.template.unlimitDanmakuToggle.checked?(g.unlimitDanmaku=!0,g.player.danmaku.unlimit(!0)):(g.unlimitDanmaku=!1,g.player.danmaku.unlimit(!1)),g.player.user.set("unlimited",g.unlimitDanmaku?1:0),g.hide()}),this.player.template.speed.addEventListener("click",function(){g.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),g.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var y=function(P){g.player.template.speedItem[P].addEventListener("click",function(){g.player.speed(g.player.template.speedItem[P].dataset.speed),g.hide()})},S=0;S<this.player.template.speedItem.length;S++)y(S);if(this.player.danmaku){this.player.on("danmaku_opacity",function(P){g.player.bar.set("danmaku",P,"width"),g.player.user.set("opacity",P)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var C=function(P){var N=P||window.event,V=((N.clientX||N.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(g.player.template.danmakuOpacityBarWrap))/130;V=Math.max(V,0),V=Math.min(V,1),g.player.danmaku.opacity(V)},k=function P(){document.removeEventListener(G.nameMap.dragEnd,P),document.removeEventListener(G.nameMap.dragMove,C),g.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(P){var N=P||window.event,V=((N.clientX||N.changedTouches[0].clientX)-G.getBoundingClientRectViewLeft(g.player.template.danmakuOpacityBarWrap))/130;V=Math.max(V,0),V=Math.min(V,1),g.player.danmaku.opacity(V)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(G.nameMap.dragStart,function(){document.addEventListener(G.nameMap.dragMove,C),document.addEventListener(G.nameMap.dragEnd,k),g.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var m,E;return m=p,(E=[{key:"hide",value:function(){var f=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){f.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),f.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Sd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Cd=Td;function sn(p){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},sn(p)}function wd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(sn(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(sn(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),sn(g)==="symbol"?g:String(g)),f)}var g}var kd=function(){function p(f){var g=this;(function(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){g.hide()}),this.player.template.commentButton.addEventListener("click",function(){g.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){g.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(g.player.template.commentColorSettingBox.querySelector("input:checked+span")){var y=g.player.template.commentColorSettingBox.querySelector("input:checked").value;g.player.template.commentSettingFill.style.fill=y,g.player.template.commentInput.style.color=y,g.player.template.commentSendFill.style.fill=y}}),this.player.template.commentInput.addEventListener("click",function(){g.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(y){(y||window.event).keyCode===13&&g.send()}),this.player.template.commentSendButton.addEventListener("click",function(){g.send()})}var m,E;return m=p,(E=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var f=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:G.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){f.player.template.commentInput.value="",f.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&wd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Ld=kd;function an(p){return an=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},an(p)}function Id(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(an(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(an(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),an(g)==="symbol"?g:String(g)),f)}var g}var Rd=function(){function p(f){(function(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var m,E;return m=p,(E=[{key:"doHotKey",value:function(f){if(this.player.focus){var g=document.activeElement.tagName.toUpperCase(),y=document.activeElement.getAttribute("contenteditable");if(g!=="INPUT"&&g!=="TEXTAREA"&&y!==""&&y!=="true"){var S,C=f||window.event;switch(C.keyCode){case 32:C.preventDefault(),this.player.toggle();break;case 37:if(C.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(C.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:C.preventDefault(),S=this.player.volume()+.1,this.player.volume(S);break;case 40:C.preventDefault(),S=this.player.volume()-.1,this.player.volume(S)}}}}},{key:"cancelFullScreen",value:function(f){(f||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Id(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Dd=Rd;function on(p){return on=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},on(p)}function Bd(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(on(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(on(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),on(g)==="symbol"?g:String(g)),f)}var g}var _d=function(){function p(f){var g=this;(function(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(y,S){g.player.options.contextmenu[S].click&&y.addEventListener("click",function(){g.player.options.contextmenu[S].click(g.player),g.hide()})}),this.contextmenuHandler=function(y){if(g.shown)g.hide();else{var S=y||window.event;S.preventDefault();var C=g.player.container.getBoundingClientRect();g.show(S.clientX-C.left,S.clientY-C.top),g.player.template.mask.addEventListener("click",function(){g.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var m,E;return m=p,(E=[{key:"show",value:function(f,g){this.player.template.menu.classList.add("dplayer-menu-show");var y=this.player.container.getBoundingClientRect();f+this.player.template.menu.offsetWidth>=y.width?(this.player.template.menu.style.right=y.width-f+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=f+"px",this.player.template.menu.style.right="initial"),g+this.player.template.menu.offsetHeight>=y.height?(this.player.template.menu.style.bottom=y.height-g+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=g+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Bd(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Pd=_d;function ln(p){return ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ln(p)}function Od(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(y,S){if(ln(y)!=="object"||y===null)return y;var C=y[Symbol.toPrimitive];if(C!==void 0){var k=C.call(y,"string");if(ln(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(f.key),ln(g)==="symbol"?g:String(g)),f)}var g}var Fd=function(){function p(f){var g=this;(function(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.template.infoPanel,this.template=f.template,this.video=f.video,this.player=f,this.template.infoPanelClose.addEventListener("click",function(){g.hide()})}var m,E;return m=p,(E=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(f){this.template.infoFPS.innerHTML="".concat(f.toFixed(1))}}])&&Od(m.prototype,E),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Md=Fd;var Nd=i(568),Ud=i.n(Nd);function dn(p){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},dn(p)}function is(p,m){var E=Object.keys(p);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);m&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(p,g).enumerable})),E.push.apply(E,f)}return E}function $d(p,m,E){return(m=ss(m))in p?Object.defineProperty(p,m,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[m]=E,p}function rs(p,m){for(var E=0;E<m.length;E++){var f=m[E];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,ss(f.key),f)}}function ss(p){var m=function(E,f){if(dn(E)!=="object"||E===null)return E;var g=E[Symbol.toPrimitive];if(g!==void 0){var y=g.call(E,"string");if(dn(y)!=="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)}(p);return dn(m)==="symbol"?m:String(m)}var as=0,Ct=[],Gd=function(){function p(g){var y=this;(function(S,C){if(!(S instanceof C))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=function(S){var C={container:S.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:sl,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var k in C)C.hasOwnProperty(k)&&!S.hasOwnProperty(k)&&(S[k]=C[k]);return S.video&&!S.video.type&&(S.video.type="auto"),mi(S.danmaku)==="object"&&S.danmaku&&!S.danmaku.user&&(S.danmaku.user="DIYgod"),S.subtitle&&(!S.subtitle.type&&(S.subtitle.type="webvtt"),!S.subtitle.fontSize&&(S.subtitle.fontSize="20px"),!S.subtitle.bottom&&(S.subtitle.bottom="40px"),!S.subtitle.color&&(S.subtitle.color="#fff")),S.video.quality&&(S.video.url=S.video.quality[S.video.defaultQuality].url),S.lang&&(S.lang=S.lang.toLowerCase()),S.contextmenu=S.contextmenu.concat([{key:"video-info",click:function(P){P.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),S}(function(S){for(var C=1;C<arguments.length;C++){var k=arguments[C]!=null?arguments[C]:{};C%2?is(Object(k),!0).forEach(function(P){$d(S,P,k[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(k)):is(Object(k)).forEach(function(P){Object.defineProperty(S,P,Object.getOwnPropertyDescriptor(k,P))})}return S}({preload:g.video.type==="webtorrent"?"none":"metadata"},g)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new al(this.options.lang).tran,this.events=new Ql,this.user=new nd(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),G.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(S){return S.lang===y.options.subtitle.defaultSubtitle||S.name===y.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(S){return S.lang===y.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new ts({container:this.container,options:this.options,index:as,tran:this.tran}),this.video=this.template.video,this.bar=new ud(this.template),this.bezel=new gd(this.template.bezel),this.fullScreen=new Jl(this),this.controller=new xd(this),this.options.danmaku&&(this.danmaku=new Wl({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){y.template.danmakuLoading.style.display="none",y.options.autoplay&&y.play()},0)},error:function(S){y.notice(S)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return y.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(S){return y.tran(S)}}),this.comment=new Ld(this)),this.setting=new Cd(this),this.plugins={},this.docClickFun=function(){y.focus=!1},this.containerClickFun=function(){y.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new pd(this),this.hotkey=new Dd(this),this.contextmenu=new Pd(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Md(this),!this.danmaku&&this.options.autoplay&&this.play(),as++,Ct.push(this)}var m,E,f;return m=p,E=[{key:"seek",value:function(g){g=Math.max(g,0),this.video.duration&&(g=Math.min(g,this.video.duration)),this.video.currentTime<g?this.notice("".concat(this.tran("ff").replace("%s",(g-this.video.currentTime).toFixed(0)))):this.video.currentTime>g&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-g).toFixed(0)))),this.video.currentTime=g,this.danmaku&&this.danmaku.seek(),this.bar.set("played",g/this.video.duration,"width"),this.template.ptime.innerHTML=G.secondToTime(g)}},{key:"play",value:function(g){var y=this;if(this.paused=!1,this.video.paused&&!G.isMobile&&this.bezel.switch(Ke.play),this.template.playButton.innerHTML=Ke.pause,this.template.mobilePlayButton.innerHTML=Ke.pause,g||he.resolve(this.video.play()).catch(function(){y.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var S=0;S<Ct.length;S++)this!==Ct[S]&&Ct[S].pause()}},{key:"pause",value:function(g){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||G.isMobile||this.bezel.switch(Ke.pause),this.template.playButton.innerHTML=Ke.play,this.template.mobilePlayButton.innerHTML=Ke.play,g||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ke.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ke.volumeDown:this.template.volumeIcon.innerHTML=Ke.volumeOff}},{key:"volume",value:function(g,y,S){if(g=parseFloat(g),!isNaN(g)){g=Math.max(g,0),g=Math.min(g,1),this.bar.set("volume",g,"width");var C="".concat((100*g).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=C,y||this.user.set("volume",g),S||this.notice("".concat(this.tran("volume")," ").concat((100*g).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=g,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(g,y){this.events.on(g,y)}},{key:"switchVideo",value:function(g,y){this.pause(),this.video.poster=g.pic?g.pic:"",this.video.src=g.url,this.initMSE(this.video,g.type||"auto"),y&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:y.id,address:y.api,token:y.token,maximum:y.maximum,addition:y.addition,user:y.user}))}},{key:"initMSE",value:function(g,y){var S=this;if(this.type=y,this.options.video.customType&&this.options.video.customType[y])Object.prototype.toString.call(this.options.video.customType[y])==="[object Function]"?this.options.video.customType[y](this.video,this):console.error("Illegal customType: ".concat(y));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(g.src)?this.type="hls":/.flv(#|\?|$)/i.exec(g.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(g.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(g.canPlayType("application/x-mpegURL")||g.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var C=this.options.pluginOptions.hls,k=new window.Hls(C);this.plugins.hls=k,k.loadSource(g.src),k.attachMedia(g),this.events.on("destroy",function(){k.destroy(),delete S.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var P=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:g.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=P,P.attachMediaElement(g),P.load(),this.events.on("destroy",function(){P.unload(),P.detachMediaElement(),P.destroy(),delete S.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var N=window.dashjs.MediaPlayer().create().initialize(g,g.src,!1),V=this.options.pluginOptions.dash;N.updateSettings(V),this.plugins.dash=N,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete S.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var W=this.options.pluginOptions.webtorrent,Z=new window.WebTorrent(W);this.plugins.webtorrent=Z;var Q=g.src;g.src="",g.preload="metadata",g.addEventListener("durationchange",function(){return S.container.classList.remove("dplayer-loading")},{once:!0}),Z.add(Q,function(z){z.files.find(function(ee){return ee.name.endsWith(".mp4")}).renderTo(S.video,{autoplay:S.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Z.remove(Q),Z.destroy(),delete S.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(g,y){var S=this;this.initMSE(g,y),this.on("durationchange",function(){g.duration!==1&&g.duration!==1/0&&(S.template.dtime.innerHTML=G.secondToTime(g.duration))}),this.on("progress",function(){var P=g.buffered.length?g.buffered.end(g.buffered.length-1)/g.duration:0;S.bar.set("loaded",P,"width")}),this.on("error",function(){S.video.error&&S.tran&&S.notice&&S.type!=="webtorrent"&&S.notice(S.tran("video-failed"))}),this.on("ended",function(){S.bar.set("played",1,"width"),S.setting.loop?(S.seek(0),S.play()):S.pause(),S.danmaku&&(S.danmaku.danIndex=0)}),this.on("play",function(){S.paused&&S.play(!0)}),this.on("pause",function(){S.paused||S.pause(!0)}),this.on("timeupdate",function(){S.bar.set("played",S.video.currentTime/S.video.duration,"width");var P=G.secondToTime(S.video.currentTime);S.template.ptime.innerHTML!==P&&(S.template.ptime.innerHTML=P)});for(var C=function(P){g.addEventListener(S.events.videoEvents[P],function(N){S.events.trigger(S.events.videoEvents[P],N)})},k=0;k<this.events.videoEvents.length;k++)C(k);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new sd(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new ld(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(g){var y=this;if(g=typeof g=="string"?parseInt(g):g,this.qualityIndex!==g&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=g,this.switchingQuality=!0,this.quality=this.options.video.quality[g],this.template.qualityButton.innerHTML=this.quality.name;var S=this.video.paused;this.video.pause();var C=Ud()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),k=new DOMParser().parseFromString(C,"text/html").body.firstChild;this.template.videoWrap.insertBefore(k,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=k,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(y.prevVideo){if(y.video.currentTime!==y.prevVideo.currentTime)return void y.seek(y.prevVideo.currentTime);y.template.videoWrap.removeChild(y.prevVideo),y.video.classList.add("dplayer-video-current"),S||y.video.play(),y.prevVideo=null,y.notice("".concat(y.tran("switched-quality").replace("%q",y.quality.name)),void 0,void 0,"switch-quality"),y.switchingQuality=!1,y.events.trigger("quality_end")}}),this.on("error",function(){y.video.error&&y.prevVideo&&(y.template.videoWrap.removeChild(y.video),y.video=y.prevVideo,S||y.video.play(),y.qualityIndex=y.prevIndex,y.quality=y.options.video.quality[y.qualityIndex],y.noticeTime=setTimeout(function(){y.template.notice.style.opacity=0,y.events.trigger("notice_hide")},3e3),y.prevVideo=null,y.switchingQuality=!1)})}}},{key:"notice",value:function(g){var y,S,C,k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,N=arguments.length>3?arguments[3]:void 0;if(N&&((y=document.getElementById("dplayer-notice-".concat(N)))&&(y.innerHTML=g),this.noticeList[N]&&(clearTimeout(this.noticeList[N]),this.noticeList[N]=null)),!y){var V=ts.NewNotice(g,P,N);this.template.noticeList.appendChild(V),y=V}this.events.trigger("notice_show",y),k>0&&(this.noticeList[N]=setTimeout((S=y,C=this,function(){S.addEventListener("animationend",function(){C.template.noticeList.removeChild(S)}),S.classList.add("remove-notice"),C.events.trigger("notice_hide"),C.noticeList[N]=null}),k))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(g){this.video.playbackRate=g}},{key:"destroy",value:function(){Ct.splice(Ct.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],f=[{key:"version",get:function(){return"1.27.1"}}],E&&rs(m.prototype,E),f&&rs(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Kd=Gd;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Hd=Kd})(),r.default})())})(Do);var gp=Do.exports;const yp=Xd(gp),Ap="/assets/contro-6ca48bdc.jpg";const bp=a=>(ba("data-v-009a56f2"),a=a(),va(),a),vp={class:"container"},Ep=bp(()=>je("div",{id:"dplayer",tabindex:"0"},null,-1)),xp=["src"],Sp={__name:"VideoDetail",emits:["back"],setup(a,{emit:e}){const t=e;let n=null,i=0,r=0;const s={fullScreen:!1,pause:!0},o=()=>{},l={ArrowLeft:o(),ArrowRight:o(),ArrowUp:o(),ArrowDown:o(),Unidentified:()=>t("back"),ContextMenu:()=>t("back"),Enter:()=>{r++,n.toggle(),console.log("state.count log==>",r),r>=2&&(s.fullScreen=!s.fullScreen,s.fullScreen?n.fullScreen.cancel("web"):n.fullScreen.request("web"),r=0,setTimeout(()=>{var c=document.getElementById("dplayer");c.addEventListener("click",function(){console.log("con被点击了！")}),c.click(),console.log("聚焦 log==>")},2e3)),i!=0&&clearTimeout(i),i=setTimeout(()=>r=0,1500)}},d=c=>{l[c.code]&&l[c.code]()};return Aa(()=>{const c=document.getElementById("dplayer");n=new yp({container:c,volume:.9,video:{url:"hls_videos/白兔糖_one/01.m3u8",type:"customHls",customType:{customHls:function(u,h){const A=new yt;A.loadSource(u.src),A.attachMedia(u)}}}}),n.play(),document.addEventListener("keydown",d)}),qd(()=>{document.removeEventListener("keydown",d)}),(c,u)=>(At(),hn("div",vp,[Ep,je("img",{src:qn(Ap),alt:"",style:{width:"25%"}},null,8,xp)]))}},Tp=ya(Sp,[["__scopeId","data-v-009a56f2"]]),ma={state:{},setValue(a,e={}){this.state[a]=e},getValue(a){return this.state[a]},initValue(a,e={}){return this.state[a]?this.getValue(a):(this.setValue(a,e),e)},clean(){this.state={}}};const Bo=a=>(ba("data-v-feecda21"),a=a(),va(),a),Cp={class:"box"},wp=Bo(()=>je("h1",{class:"mr-10"},"动画片",-1)),kp={class:"mr-10"},Lp=Bo(()=>je("h1",{class:"mr-10"},"动画片",-1)),Ip={class:"container"},Rp=["id","tabindex"],Dp={class:"img"},Bp=["src"],_p={class:"tittle"},ga="VideoId_Key",Pp={__name:"VideoList",emits:["detail"],setup(a,{emit:e}){const t=e,n=Vd({keyCode:"",press:"",videoList:[]}),i=n.videoList;for(let d=0;d<100;d++)i.push({focus:d==0,name:"白兔塘"+d,path:"",list:[],thumb:d%2?"https://img2.imgtp.com/2024/05/28/iOGYn0id.webp":"https://img2.imgtp.com/2024/05/28/cl6D1cqW.jpg",history:[1,101001]});let r=ma.initValue(ga,0);const s=()=>setTimeout(()=>{var d;(d=document.getElementById("v"+r))==null||d.focus()},0),o=d=>()=>{const c=r+d.offset;i[c]&&(i[r].focus=!1,i[c].focus=!0,r=c,i[r+d.nextOffset]&&(i[r+d.nextOffset].focus=!1),ma.setValue(ga,r),s())},l={ArrowLeft:o({offset:-1,nextOffset:1}),ArrowRight:o({offset:1,nextOffset:-1}),ArrowUp:o({offset:-8,nextOffset:8}),ArrowDown:o({offset:8,nextOffset:-8}),Enter:()=>t("detail",Yd(i[r]))};return Aa(()=>{var d;s(),(d=document.getElementById("v"+r))==null||d.scrollIntoView(),document.addEventListener("keydown",c=>{n.keyCode=c.code,l[n.keyCode]&&l[n.keyCode]()})}),(d,c)=>(At(),hn($i,null,[je("div",Cp,[wp,je("h1",kp,"按键: "+Ai(n.keyCode),1),Lp]),je("div",Ip,[(At(!0),hn($i,null,zd(qn(i),(u,h)=>(At(),hn("div",{id:"v"+h,key:h,tabindex:h,class:Wd(["video",{mvfoucs:u.focus}])},[je("div",Dp,[je("img",{src:u.thumb,alt:"图片",style:{width:"100%"}},null,8,Bp)]),je("div",_p,Ai(u.name)+" "+Ai("v"+h),1)],10,Rp))),128))])],64))}},Op=ya(Pp,[["__scopeId","data-v-feecda21"]]),$p={__name:"index",setup(a){const e=jd("list"),t=()=>{e.value="detail",console.log("showDetail log==>")},n=()=>{e.value="list"};return(i,r)=>(At(),hn($i,null,[e.value=="list"?(At(),ls(qn(Op),{key:0,onDetail:t})):ds("",!0),e.value=="detail"?(At(),ls(qn(Tp),{key:1,onBack:n})):ds("",!0)],64))}};export{$p as default};
