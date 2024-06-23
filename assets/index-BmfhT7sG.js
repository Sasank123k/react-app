function mm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},Ui={},rd={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),gm=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),_m=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),jm=Symbol.for("react.memo"),Nm=Symbol.for("react.lazy"),hc=Symbol.iterator;function bm(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,sd={};function pr(e,t,n){this.props=e,this.context=t,this.refs=sd,this.updater=n||od}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ad(){}ad.prototype=pr.prototype;function cl(e,t,n){this.props=e,this.context=t,this.refs=sd,this.updater=n||od}var ul=cl.prototype=new ad;ul.constructor=cl;id(ul,pr.prototype);ul.isPureReactComponent=!0;var gc=Array.isArray,ld=Object.prototype.hasOwnProperty,dl={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ld.call(t,r)&&!cd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:fo,type:e,key:i,ref:a,props:o,_owner:dl.current}}function km(e,t){return{$$typeof:fo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vc=/\/+/g;function Ss(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function Xo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fo:case gm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ss(a,0):r,gc(o)?(n="",e!=null&&(n=e.replace(vc,"$&/")+"/"),Xo(o,t,n,"",function(u){return u})):o!=null&&(pl(o)&&(o=km(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(vc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",gc(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+Ss(i,l);a+=Xo(i,t,n,c,o)}else if(c=bm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+Ss(i,l++),a+=Xo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Po(e,t,n){if(e==null)return e;var r=[],o=0;return Xo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Em(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ko={transition:null},Bm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:dl};function dd(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=pr;A.Fragment=vm;A.Profiler=xm;A.PureComponent=cl;A.StrictMode=ym;A.Suspense=Cm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;A.act=dd;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=dl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ld.call(t,c)&&!cd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fo,type:e.type,key:o,ref:i,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:_m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};A.createElement=ud;A.createFactory=function(e){var t=ud.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:wm,render:e}};A.isValidElement=pl;A.lazy=function(e){return{$$typeof:Nm,_payload:{_status:-1,_result:e},_init:Em}};A.memo=function(e,t){return{$$typeof:jm,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};A.unstable_act=dd;A.useCallback=function(e,t){return Fe.current.useCallback(e,t)};A.useContext=function(e){return Fe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};A.useEffect=function(e,t){return Fe.current.useEffect(e,t)};A.useId=function(){return Fe.current.useId()};A.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Fe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};A.useRef=function(e){return Fe.current.useRef(e)};A.useState=function(e){return Fe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Fe.current.useTransition()};A.version="18.3.1";rd.exports=A;var C=rd.exports;const It=hm(C),Tm=mm({__proto__:null,default:It},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=C,Rm=Symbol.for("react.element"),Om=Symbol.for("react.fragment"),Mm=Object.prototype.hasOwnProperty,$m=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Im={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Mm.call(t,r)&&!Im.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rm,type:e,key:i,ref:a,props:o,_owner:$m.current}}Ui.Fragment=Om;Ui.jsx=pd;Ui.jsxs=pd;nd.exports=Ui;var s=nd.exports,na={},fd={exports:{}},Ze={},md={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var I=T.length;T.push(R);e:for(;0<I;){var se=I-1>>>1,he=T[se];if(0<o(he,R))T[se]=R,T[I]=he,I=se;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],I=T.pop();if(I!==R){T[0]=I;e:for(var se=0,he=T.length,bo=he>>>1;se<bo;){var gn=2*(se+1)-1,xs=T[gn],vn=gn+1,ko=T[vn];if(0>o(xs,I))vn<he&&0>o(ko,xs)?(T[se]=ko,T[vn]=I,se=vn):(T[se]=xs,T[gn]=I,se=gn);else if(vn<he&&0>o(ko,I))T[se]=ko,T[vn]=I,se=vn;else break e}}return R}function o(T,R){var I=T.sortIndex-R.sortIndex;return I!==0?I:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,m=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function S(T){if(x=!1,h(T),!y)if(n(c)!==null)y=!0,vs(_);else{var R=n(u);R!==null&&ys(S,R.startTime-T)}}function _(T,R){y=!1,x&&(x=!1,g(k),k=-1),v=!0;var I=m;try{for(h(R),f=n(c);f!==null&&(!(f.expirationTime>R)||T&&!Ve());){var se=f.callback;if(typeof se=="function"){f.callback=null,m=f.priorityLevel;var he=se(f.expirationTime<=R);R=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(c)&&r(c),h(R)}else r(c);f=n(c)}if(f!==null)var bo=!0;else{var gn=n(u);gn!==null&&ys(S,gn.startTime-R),bo=!1}return bo}finally{f=null,m=I,v=!1}}var b=!1,E=null,k=-1,K=5,$=-1;function Ve(){return!(e.unstable_now()-$<K)}function xr(){if(E!==null){var T=e.unstable_now();$=T;var R=!0;try{R=E(!0,T)}finally{R?Sr():(b=!1,E=null)}}else b=!1}var Sr;if(typeof p=="function")Sr=function(){p(xr)};else if(typeof MessageChannel<"u"){var mc=new MessageChannel,fm=mc.port2;mc.port1.onmessage=xr,Sr=function(){fm.postMessage(null)}}else Sr=function(){j(xr,0)};function vs(T){E=T,b||(b=!0,Sr())}function ys(T,R){k=j(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,vs(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var I=m;m=R;try{return T()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=m;m=T;try{return R()}finally{m=I}},e.unstable_scheduleCallback=function(T,R,I){var se=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=I+he,T={id:d++,callback:R,priorityLevel:T,startTime:I,expirationTime:he,sortIndex:-1},I>se?(T.sortIndex=I,t(u,T),n(c)===null&&T===n(u)&&(x?(g(k),k=-1):x=!0,ys(S,I-se))):(T.sortIndex=he,t(c,T),y||v||(y=!0,vs(_))),T},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(T){var R=m;return function(){var I=m;m=R;try{return T.apply(this,arguments)}finally{m=I}}}})(hd);md.exports=hd;var Fm=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=C,Ye=Fm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,Vr={};function $n(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Vr[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,Am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yc={},xc={};function Dm(e){return ra.call(xc,e)?!0:ra.call(yc,e)?!1:Am.test(e)?xc[e]=!0:(yc[e]=!0,!1)}function Um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,t,n,r){if(t===null||typeof t>"u"||Um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fl,ml);Se[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fl,ml);Se[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fl,ml);Se[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function hl(e,t,n,r){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hm(t,n,o,r)&&(n=null),r||o===null?Dm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),xd=Symbol.for("react.offscreen"),Sc=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Sc&&e[Sc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,_s;function Br(e){if(_s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_s=t&&t[1]||""}return`
`+_s+e}var ws=!1;function Cs(e,t){if(!e||ws)return"";ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function Wm(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=Cs(e.type,!1),e;case 11:return e=Cs(e.type.render,!1),e;case 1:return e=Cs(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Dn:return"Portal";case oa:return"Profiler";case gl:return"StrictMode";case ia:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case vl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e){var t=Sd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bo(e){e._valueTracker||(e._valueTracker=Vm(e))}function _d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wd(e,t){t=t.checked,t!=null&&hl(e,"checked",t,!1)}function ca(e,t){wd(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&ua(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ua(e,t,n){(t!=="number"||ci(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Tr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Cd(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,Nd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gm=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function bd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function kd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Qm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(Qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,er=null,tr=null;function Nc(e){if(e=go(e)){if(typeof ga!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Gi(t),ga(e.stateNode,e.type,t))}}function Pd(e){er?tr?tr.push(e):tr=[e]:er=e}function Ed(){if(er){var e=er,t=tr;if(tr=er=null,Nc(e),t)for(e=0;e<t.length;e++)Nc(t[e])}}function Bd(e,t){return e(t)}function Td(){}var js=!1;function Ld(e,t,n){if(js)return e(t,n);js=!0;try{return Bd(e,t,n)}finally{js=!1,(er!==null||tr!==null)&&(Td(),Ed())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var va=!1;if(zt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){va=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{va=!1}function Xm(e,t,n,r,o,i,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var $r=!1,ui=null,di=!1,ya=null,Km={onError:function(e){$r=!0,ui=e}};function Jm(e,t,n,r,o,i,a,l,c){$r=!1,ui=null,Xm.apply(Km,arguments)}function Ym(e,t,n,r,o,i,a,l,c){if(Jm.apply(this,arguments),$r){if($r){var u=ui;$r=!1,ui=null}else throw Error(N(198));di||(di=!0,ya=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bc(e){if(In(e)!==e)throw Error(N(188))}function Zm(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return bc(o),e;if(i===r)return bc(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Od(e){return e=Zm(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var $d=Ye.unstable_scheduleCallback,kc=Ye.unstable_cancelCallback,eh=Ye.unstable_shouldYield,th=Ye.unstable_requestPaint,ae=Ye.unstable_now,nh=Ye.unstable_getCurrentPriorityLevel,Sl=Ye.unstable_ImmediatePriority,Id=Ye.unstable_UserBlockingPriority,pi=Ye.unstable_NormalPriority,rh=Ye.unstable_LowPriority,Fd=Ye.unstable_IdlePriority,Hi=null,bt=null;function oh(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:ah,ih=Math.log,sh=Math.LN2;function ah(e){return e>>>=0,e===0?32:31-(ih(e)/sh|0)|0}var Lo=64,Ro=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Lr(l):(i&=a,i!==0&&(r=Lr(i)))}else a=n&~o,a!==0?r=Lr(a):i!==0&&(r=Lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function lh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ch(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-gt(i),l=1<<a,c=o[a];c===-1?(!(l&n)||l&r)&&(o[a]=lh(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zd(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function _l(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function Ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dd,wl,Ud,Hd,Wd,Sa=!1,Oo=[],tn=null,nn=null,rn=null,Xr=new Map,Kr=new Map,Kt=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pc(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function Cr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=go(t),t!==null&&wl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ph(e,t,n,r,o){switch(t){case"focusin":return tn=Cr(tn,e,t,n,r,o),!0;case"dragenter":return nn=Cr(nn,e,t,n,r,o),!0;case"mouseover":return rn=Cr(rn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xr.set(i,Cr(Xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Kr.set(i,Cr(Kr.get(i)||null,e,t,n,r,o)),!0}return!1}function qd(e){var t=jn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Rd(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ha=r,n.target.dispatchEvent(r),ha=null}else return t=go(n),t!==null&&wl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ec(e,t,n){Jo(e)&&n.delete(t)}function fh(){Sa=!1,tn!==null&&Jo(tn)&&(tn=null),nn!==null&&Jo(nn)&&(nn=null),rn!==null&&Jo(rn)&&(rn=null),Xr.forEach(Ec),Kr.forEach(Ec)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sa||(Sa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,fh)))}function Jr(e){function t(o){return jr(o,e)}if(0<Oo.length){jr(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&jr(tn,e),nn!==null&&jr(nn,e),rn!==null&&jr(rn,e),Xr.forEach(t),Kr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&Kt.shift()}var nr=Ht.ReactCurrentBatchConfig,mi=!0;function mh(e,t,n,r){var o=Q,i=nr.transition;nr.transition=null;try{Q=1,Cl(e,t,n,r)}finally{Q=o,nr.transition=i}}function hh(e,t,n,r){var o=Q,i=nr.transition;nr.transition=null;try{Q=4,Cl(e,t,n,r)}finally{Q=o,nr.transition=i}}function Cl(e,t,n,r){if(mi){var o=_a(e,t,n,r);if(o===null)Ms(e,t,r,hi,n),Pc(e,r);else if(ph(o,e,t,n,r))r.stopPropagation();else if(Pc(e,r),t&4&&-1<dh.indexOf(e)){for(;o!==null;){var i=go(o);if(i!==null&&Dd(i),i=_a(e,t,n,r),i===null&&Ms(e,t,r,hi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ms(e,t,r,null,n)}}var hi=null;function _a(e,t,n,r){if(hi=null,e=xl(r),e=jn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hi=e,null}function Vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nh()){case Sl:return 1;case Id:return 4;case pi:case rh:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var Yt=null,jl=null,Yo=null;function Gd(){if(Yo)return Yo;var e,t=jl,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mo(){return!0}function Bc(){return!1}function et(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mo:Bc,this.isPropagationStopped=Bc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=et(fr),ho=oe({},fr,{view:0,detail:0}),gh=et(ho),bs,ks,Nr,Wi=oe({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(bs=e.screenX-Nr.screenX,ks=e.screenY-Nr.screenY):ks=bs=0,Nr=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),Tc=et(Wi),vh=oe({},Wi,{dataTransfer:0}),yh=et(vh),xh=oe({},ho,{relatedTarget:0}),Ps=et(xh),Sh=oe({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),_h=et(Sh),wh=oe({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ch=et(wh),jh=oe({},fr,{data:0}),Lc=et(jh),Nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function bl(){return Ph}var Eh=oe({},ho,{key:function(e){if(e.key){var t=Nh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=et(Eh),Th=oe({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=et(Th),Lh=oe({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),Rh=et(Lh),Oh=oe({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mh=et(Oh),$h=oe({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=et($h),Fh=[9,13,27,32],kl=zt&&"CompositionEvent"in window,Ir=null;zt&&"documentMode"in document&&(Ir=document.documentMode);var zh=zt&&"TextEvent"in window&&!Ir,Qd=zt&&(!kl||Ir&&8<Ir&&11>=Ir),Oc=" ",Mc=!1;function Xd(e,t){switch(e){case"keyup":return Fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Ah(e,t){switch(e){case"compositionend":return Kd(t);case"keypress":return t.which!==32?null:(Mc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Mc?null:e;default:return null}}function Dh(e,t){if(Hn)return e==="compositionend"||!kl&&Xd(e,t)?(e=Gd(),Yo=jl=Yt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uh[e.type]:t==="textarea"}function Jd(e,t,n,r){Pd(r),t=gi(t,"onChange"),0<t.length&&(n=new Nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Yr=null;function Hh(e){lp(e,0)}function qi(e){var t=Vn(e);if(_d(t))return e}function Wh(e,t){if(e==="change")return t}var Yd=!1;if(zt){var Es;if(zt){var Bs="oninput"in document;if(!Bs){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),Bs=typeof Ic.oninput=="function"}Es=Bs}else Es=!1;Yd=Es&&(!document.documentMode||9<document.documentMode)}function Fc(){Fr&&(Fr.detachEvent("onpropertychange",Zd),Yr=Fr=null)}function Zd(e){if(e.propertyName==="value"&&qi(Yr)){var t=[];Jd(t,Yr,e,xl(e)),Ld(Hh,t)}}function qh(e,t,n){e==="focusin"?(Fc(),Fr=t,Yr=n,Fr.attachEvent("onpropertychange",Zd)):e==="focusout"&&Fc()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Yr)}function Gh(e,t){if(e==="click")return qi(t)}function Qh(e,t){if(e==="input"||e==="change")return qi(t)}function Xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Xh;function Zr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ra.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ac(e,t){var n=zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zc(n)}}function ep(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ep(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tp(){for(var e=window,t=ci();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kh(e){var t=tp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ep(n.ownerDocument.documentElement,n)){if(r!==null&&Pl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ac(n,i);var a=Ac(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jh=zt&&"documentMode"in document&&11>=document.documentMode,Wn=null,wa=null,zr=null,Ca=!1;function Dc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Wn==null||Wn!==ci(r)||(r=Wn,"selectionStart"in r&&Pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Zr(zr,r)||(zr=r,r=gi(wa,"onSelect"),0<r.length&&(t=new Nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function $o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Ts={},np={};zt&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Vi(e){if(Ts[e])return Ts[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in np)return Ts[e]=t[n];return e}var rp=Vi("animationend"),op=Vi("animationiteration"),ip=Vi("animationstart"),sp=Vi("transitionend"),ap=new Map,Uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){ap.set(e,t),$n(t,[e])}for(var Ls=0;Ls<Uc.length;Ls++){var Rs=Uc[Ls],Yh=Rs.toLowerCase(),Zh=Rs[0].toUpperCase()+Rs.slice(1);fn(Yh,"on"+Zh)}fn(rp,"onAnimationEnd");fn(op,"onAnimationIteration");fn(ip,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(sp,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ym(r,t,void 0,e),e.currentTarget=null}function lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;Hc(o,l,u),i=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;Hc(o,l,u),i=c}}}if(di)throw e=ya,di=!1,ya=null,e}function Y(e,t){var n=t[Pa];n===void 0&&(n=t[Pa]=new Set);var r=e+"__bubble";n.has(r)||(cp(t,e,2,!1),n.add(r))}function Os(e,t,n){var r=0;t&&(r|=4),cp(n,e,r,t)}var Io="_reactListening"+Math.random().toString(36).slice(2);function eo(e){if(!e[Io]){e[Io]=!0,gd.forEach(function(n){n!=="selectionchange"&&(eg.has(n)||Os(n,!1,e),Os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Io]||(t[Io]=!0,Os("selectionchange",!1,t))}}function cp(e,t,n,r){switch(Vd(t)){case 1:var o=mh;break;case 4:o=hh;break;default:o=Cl}n=o.bind(null,t,n,e),o=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ms(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;l!==null;){if(a=jn(l),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Ld(function(){var u=i,d=xl(n),f=[];e:{var m=ap.get(e);if(m!==void 0){var v=Nl,y=e;switch(e){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":v=Bh;break;case"focusin":y="focus",v=Ps;break;case"focusout":y="blur",v=Ps;break;case"beforeblur":case"afterblur":v=Ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rh;break;case rp:case op:case ip:v=_h;break;case sp:v=Mh;break;case"scroll":v=gh;break;case"wheel":v=Ih;break;case"copy":case"cut":case"paste":v=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Rc}var x=(t&4)!==0,j=!x&&e==="scroll",g=x?m!==null?m+"Capture":null:m;x=[];for(var p=u,h;p!==null;){h=p;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Qr(p,g),S!=null&&x.push(to(p,S,h)))),j)break;p=p.return}0<x.length&&(m=new v(m,y,null,n,d),f.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ha&&(y=n.relatedTarget||n.fromElement)&&(jn(y)||y[At]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?jn(y):null,y!==null&&(j=In(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Tc,S="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Rc,S="onPointerLeave",g="onPointerEnter",p="pointer"),j=v==null?m:Vn(v),h=y==null?m:Vn(y),m=new x(S,p+"leave",v,n,d),m.target=j,m.relatedTarget=h,S=null,jn(d)===u&&(x=new x(g,p+"enter",y,n,d),x.target=h,x.relatedTarget=j,S=x),j=S,v&&y)t:{for(x=v,g=y,p=0,h=x;h;h=An(h))p++;for(h=0,S=g;S;S=An(S))h++;for(;0<p-h;)x=An(x),p--;for(;0<h-p;)g=An(g),h--;for(;p--;){if(x===g||g!==null&&x===g.alternate)break t;x=An(x),g=An(g)}x=null}else x=null;v!==null&&Wc(f,m,v,x,!1),y!==null&&j!==null&&Wc(f,j,y,x,!0)}}e:{if(m=u?Vn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var _=Wh;else if($c(m))if(Yd)_=Qh;else{_=Vh;var b=qh}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Gh);if(_&&(_=_(e,u))){Jd(f,_,n,d);break e}b&&b(e,m,u),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&ua(m,"number",m.value)}switch(b=u?Vn(u):window,e){case"focusin":($c(b)||b.contentEditable==="true")&&(Wn=b,wa=u,zr=null);break;case"focusout":zr=wa=Wn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,Dc(f,n,d);break;case"selectionchange":if(Jh)break;case"keydown":case"keyup":Dc(f,n,d)}var E;if(kl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Hn?Xd(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Qd&&n.locale!=="ko"&&(Hn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Hn&&(E=Gd()):(Yt=d,jl="value"in Yt?Yt.value:Yt.textContent,Hn=!0)),b=gi(u,k),0<b.length&&(k=new Lc(k,e,null,n,d),f.push({event:k,listeners:b}),E?k.data=E:(E=Kd(n),E!==null&&(k.data=E)))),(E=zh?Ah(e,n):Dh(e,n))&&(u=gi(u,"onBeforeInput"),0<u.length&&(d=new Lc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=E))}lp(f,t)})}function to(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qr(e,n),i!=null&&r.unshift(to(e,i,o)),i=Qr(e,t),i!=null&&r.push(to(e,i,o))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=Qr(n,i),c!=null&&a.unshift(to(n,c,l))):o||(c=Qr(n,i),c!=null&&a.push(to(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tg=/\r\n?/g,ng=/\u0000|\uFFFD/g;function qc(e){return(typeof e=="string"?e:""+e).replace(tg,`
`).replace(ng,"")}function Fo(e,t,n){if(t=qc(t),qc(e)!==t&&n)throw Error(N(425))}function vi(){}var ja=null,Na=null;function ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,rg=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(ig)}:ka;function ig(e){setTimeout(function(){throw e})}function $s(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Jr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+mr,no="__reactProps$"+mr,At="__reactContainer$"+mr,Pa="__reactEvents$"+mr,sg="__reactListeners$"+mr,ag="__reactHandles$"+mr;function jn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gc(e);e!==null;){if(n=e[Ct])return n;e=Gc(e)}return t}e=n,n=e.parentNode}return null}function go(e){return e=e[Ct]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Gi(e){return e[no]||null}var Ea=[],Gn=-1;function mn(e){return{current:e}}function Z(e){0>Gn||(e.current=Ea[Gn],Ea[Gn]=null,Gn--)}function J(e,t){Gn++,Ea[Gn]=e.current,e.current=t}var pn={},Pe=mn(pn),Ue=mn(!1),Bn=pn;function sr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function yi(){Z(Ue),Z(Pe)}function Qc(e,t,n){if(Pe.current!==pn)throw Error(N(168));J(Pe,t),J(Ue,n)}function up(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,qm(e)||"Unknown",o));return oe({},n,r)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Bn=Pe.current,J(Pe,e),J(Ue,Ue.current),!0}function Xc(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=up(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,Z(Ue),Z(Pe),J(Pe,e)):Z(Ue),J(Ue,n)}var Rt=null,Qi=!1,Is=!1;function dp(e){Rt===null?Rt=[e]:Rt.push(e)}function lg(e){Qi=!0,dp(e)}function hn(){if(!Is&&Rt!==null){Is=!0;var e=0,t=Q;try{var n=Rt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Qi=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),$d(Sl,hn),o}finally{Q=t,Is=!1}}return null}var Qn=[],Xn=0,Si=null,_i=0,nt=[],rt=0,Tn=null,Mt=1,$t="";function _n(e,t){Qn[Xn++]=_i,Qn[Xn++]=Si,Si=e,_i=t}function pp(e,t,n){nt[rt++]=Mt,nt[rt++]=$t,nt[rt++]=Tn,Tn=e;var r=Mt;e=$t;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var i=32-gt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Mt=1<<32-gt(t)+o|n<<o|r,$t=i+e}else Mt=1<<i|n<<o|r,$t=e}function El(e){e.return!==null&&(_n(e,1),pp(e,1,0))}function Bl(e){for(;e===Si;)Si=Qn[--Xn],Qn[Xn]=null,_i=Qn[--Xn],Qn[Xn]=null;for(;e===Tn;)Tn=nt[--rt],nt[rt]=null,$t=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var Je=null,Ke=null,te=!1,ht=null;function fp(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ke=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Mt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ke=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(te){var t=Ke;if(t){var n=t;if(!Kc(e,t)){if(Ba(e))throw Error(N(418));t=on(n.nextSibling);var r=Je;t&&Kc(e,t)?fp(r,n):(e.flags=e.flags&-4097|2,te=!1,Je=e)}}else{if(Ba(e))throw Error(N(418));e.flags=e.flags&-4097|2,te=!1,Je=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function zo(e){if(e!==Je)return!1;if(!te)return Jc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ba(e.type,e.memoizedProps)),t&&(t=Ke)){if(Ba(e))throw mp(),Error(N(418));for(;t;)fp(e,t),t=on(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Je?on(e.stateNode.nextSibling):null;return!0}function mp(){for(var e=Ke;e;)e=on(e.nextSibling)}function ar(){Ke=Je=null,te=!1}function Tl(e){ht===null?ht=[e]:ht.push(e)}var cg=Ht.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ao(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function hp(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=cn(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,h,S){return p===null||p.tag!==6?(p=Ws(h,g.mode,S),p.return=g,p):(p=o(p,h),p.return=g,p)}function c(g,p,h,S){var _=h.type;return _===Un?d(g,p,h.props.children,S,h.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Qt&&Yc(_)===p.type)?(S=o(p,h.props),S.ref=br(g,p,h),S.return=g,S):(S=si(h.type,h.key,h.props,null,g.mode,S),S.ref=br(g,p,h),S.return=g,S)}function u(g,p,h,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=qs(h,g.mode,S),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function d(g,p,h,S,_){return p===null||p.tag!==7?(p=Pn(h,g.mode,S,_),p.return=g,p):(p=o(p,h),p.return=g,p)}function f(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ws(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Eo:return h=si(p.type,p.key,p.props,null,g.mode,h),h.ref=br(g,null,p),h.return=g,h;case Dn:return p=qs(p,g.mode,h),p.return=g,p;case Qt:var S=p._init;return f(g,S(p._payload),h)}if(Tr(p)||_r(p))return p=Pn(p,g.mode,h,null),p.return=g,p;Ao(g,p)}return null}function m(g,p,h,S){var _=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(g,p,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Eo:return h.key===_?c(g,p,h,S):null;case Dn:return h.key===_?u(g,p,h,S):null;case Qt:return _=h._init,m(g,p,_(h._payload),S)}if(Tr(h)||_r(h))return _!==null?null:d(g,p,h,S,null);Ao(g,h)}return null}function v(g,p,h,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,l(p,g,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Eo:return g=g.get(S.key===null?h:S.key)||null,c(p,g,S,_);case Dn:return g=g.get(S.key===null?h:S.key)||null,u(p,g,S,_);case Qt:var b=S._init;return v(g,p,h,b(S._payload),_)}if(Tr(S)||_r(S))return g=g.get(h)||null,d(p,g,S,_,null);Ao(p,S)}return null}function y(g,p,h,S){for(var _=null,b=null,E=p,k=p=0,K=null;E!==null&&k<h.length;k++){E.index>k?(K=E,E=null):K=E.sibling;var $=m(g,E,h[k],S);if($===null){E===null&&(E=K);break}e&&E&&$.alternate===null&&t(g,E),p=i($,p,k),b===null?_=$:b.sibling=$,b=$,E=K}if(k===h.length)return n(g,E),te&&_n(g,k),_;if(E===null){for(;k<h.length;k++)E=f(g,h[k],S),E!==null&&(p=i(E,p,k),b===null?_=E:b.sibling=E,b=E);return te&&_n(g,k),_}for(E=r(g,E);k<h.length;k++)K=v(E,g,k,h[k],S),K!==null&&(e&&K.alternate!==null&&E.delete(K.key===null?k:K.key),p=i(K,p,k),b===null?_=K:b.sibling=K,b=K);return e&&E.forEach(function(Ve){return t(g,Ve)}),te&&_n(g,k),_}function x(g,p,h,S){var _=_r(h);if(typeof _!="function")throw Error(N(150));if(h=_.call(h),h==null)throw Error(N(151));for(var b=_=null,E=p,k=p=0,K=null,$=h.next();E!==null&&!$.done;k++,$=h.next()){E.index>k?(K=E,E=null):K=E.sibling;var Ve=m(g,E,$.value,S);if(Ve===null){E===null&&(E=K);break}e&&E&&Ve.alternate===null&&t(g,E),p=i(Ve,p,k),b===null?_=Ve:b.sibling=Ve,b=Ve,E=K}if($.done)return n(g,E),te&&_n(g,k),_;if(E===null){for(;!$.done;k++,$=h.next())$=f(g,$.value,S),$!==null&&(p=i($,p,k),b===null?_=$:b.sibling=$,b=$);return te&&_n(g,k),_}for(E=r(g,E);!$.done;k++,$=h.next())$=v(E,g,k,$.value,S),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?k:$.key),p=i($,p,k),b===null?_=$:b.sibling=$,b=$);return e&&E.forEach(function(xr){return t(g,xr)}),te&&_n(g,k),_}function j(g,p,h,S){if(typeof h=="object"&&h!==null&&h.type===Un&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Eo:e:{for(var _=h.key,b=p;b!==null;){if(b.key===_){if(_=h.type,_===Un){if(b.tag===7){n(g,b.sibling),p=o(b,h.props.children),p.return=g,g=p;break e}}else if(b.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Qt&&Yc(_)===b.type){n(g,b.sibling),p=o(b,h.props),p.ref=br(g,b,h),p.return=g,g=p;break e}n(g,b);break}else t(g,b);b=b.sibling}h.type===Un?(p=Pn(h.props.children,g.mode,S,h.key),p.return=g,g=p):(S=si(h.type,h.key,h.props,null,g.mode,S),S.ref=br(g,p,h),S.return=g,g=S)}return a(g);case Dn:e:{for(b=h.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=qs(h,g.mode,S),p.return=g,g=p}return a(g);case Qt:return b=h._init,j(g,p,b(h._payload),S)}if(Tr(h))return y(g,p,h,S);if(_r(h))return x(g,p,h,S);Ao(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=Ws(h,g.mode,S),p.return=g,g=p),a(g)):n(g,p)}return j}var lr=hp(!0),gp=hp(!1),wi=mn(null),Ci=null,Kn=null,Ll=null;function Rl(){Ll=Kn=Ci=null}function Ol(e){var t=wi.current;Z(wi),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Ci=e,Ll=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Ci===null)throw Error(N(308));Kn=e,Ci.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var Nn=null;function Ml(e){Nn===null?Nn=[e]:Nn.push(e)}function vp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ml(t)):(n.next=o.next,o.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ml(r)):(t.next=o.next,o.next=t),r.interleaved=t,Dt(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_l(e,n)}}function Zc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ji(e,t,n,r){var o=e.updateQueue;Xt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;a=0,d=u=c=null,l=i;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(m=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(v,f,m):y,m==null)break e;f=oe({},f,m);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=f):d=d.next=v,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rn|=a,e.lanes=a,e.memoizedState=f}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var vo={},kt=mn(vo),ro=mn(vo),oo=mn(vo);function bn(e){if(e===vo)throw Error(N(174));return e}function Il(e,t){switch(J(oo,t),J(ro,e),J(kt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}Z(kt),J(kt,t)}function cr(){Z(kt),Z(ro),Z(oo)}function xp(e){bn(oo.current);var t=bn(kt.current),n=pa(t,e.type);t!==n&&(J(ro,e),J(kt,n))}function Fl(e){ro.current===e&&(Z(kt),Z(ro))}var ne=mn(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fs=[];function zl(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var ti=Ht.ReactCurrentDispatcher,zs=Ht.ReactCurrentBatchConfig,Ln=0,re=null,fe=null,ge=null,bi=!1,Ar=!1,io=0,ug=0;function _e(){throw Error(N(321))}function Al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,o,i){if(Ln=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?mg:hg,e=n(r,o),Ar){i=0;do{if(Ar=!1,io=0,25<=i)throw Error(N(301));i+=1,ge=fe=null,t.updateQueue=null,ti.current=gg,e=n(r,o)}while(Ar)}if(ti.current=ki,t=fe!==null&&fe.next!==null,Ln=0,ge=fe=re=null,bi=!1,t)throw Error(N(300));return e}function Ul(){var e=io!==0;return io=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?re.memoizedState=ge=e:ge=ge.next=e,ge}function lt(){if(fe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ge===null?re.memoizedState:ge.next;if(t!==null)ge=t,fe=e;else{if(e===null)throw Error(N(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?re.memoizedState=ge=e:ge=ge.next=e}return ge}function so(e,t){return typeof t=="function"?t(e):t}function As(e){var t=lt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,c=null,u=i;do{var d=u.lane;if((Ln&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,re.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=l,xt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,Rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ds(e){var t=lt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);xt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sp(){}function _p(e,t){var n=re,r=lt(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,De=!0),r=r.queue,Hl(jp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,ao(9,Cp.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(N(349));Ln&30||wp(n,t,o)}return o}function wp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,r){t.value=n,t.getSnapshot=r,Np(t)&&bp(e)}function jp(e,t,n){return n(function(){Np(t)&&bp(e)})}function Np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function bp(e){var t=Dt(e,1);t!==null&&vt(t,e,1,-1)}function tu(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},t.queue=e,e=e.dispatch=fg.bind(null,re,e),[t.memoizedState,e]}function ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kp(){return lt().memoizedState}function ni(e,t,n,r){var o=wt();re.flags|=e,o.memoizedState=ao(1|t,n,void 0,r===void 0?null:r)}function Xi(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(fe!==null){var a=fe.memoizedState;if(i=a.destroy,r!==null&&Al(r,a.deps)){o.memoizedState=ao(t,n,i,r);return}}re.flags|=e,o.memoizedState=ao(1|t,n,i,r)}function nu(e,t){return ni(8390656,8,e,t)}function Hl(e,t){return Xi(2048,8,e,t)}function Pp(e,t){return Xi(4,2,e,t)}function Ep(e,t){return Xi(4,4,e,t)}function Bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tp(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,Bp.bind(null,t,e),n)}function Wl(){}function Lp(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rp(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Op(e,t,n){return Ln&21?(xt(n,t)||(n=zd(),re.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function dg(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=zs.transition;zs.transition={};try{e(!1),t()}finally{Q=n,zs.transition=r}}function Mp(){return lt().memoizedState}function pg(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$p(e))Ip(t,n);else if(n=vp(e,t,n,r),n!==null){var o=Ie();vt(n,e,r,o),Fp(n,t,r)}}function fg(e,t,n){var r=ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($p(e))Ip(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,xt(l,a)){var c=t.interleaved;c===null?(o.next=o,Ml(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=vp(e,t,o,r),n!==null&&(o=Ie(),vt(n,e,r,o),Fp(n,t,r))}}function $p(e){var t=e.alternate;return e===re||t!==null&&t===re}function Ip(e,t){Ar=bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_l(e,n)}}var ki={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},mg={readContext:at,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,Bp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pg.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:Wl,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=dg.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=wt();if(te){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ve===null)throw Error(N(349));Ln&30||wp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,nu(jp.bind(null,r,i,e),[e]),r.flags|=2048,ao(9,Cp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=ve.identifierPrefix;if(te){var n=$t,r=Mt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ug++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hg={readContext:at,useCallback:Lp,useContext:at,useEffect:Hl,useImperativeHandle:Tp,useInsertionEffect:Pp,useLayoutEffect:Ep,useMemo:Rp,useReducer:As,useRef:kp,useState:function(){return As(so)},useDebugValue:Wl,useDeferredValue:function(e){var t=lt();return Op(t,fe.memoizedState,e)},useTransition:function(){var e=As(so)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:_p,useId:Mp,unstable_isNewReconciler:!1},gg={readContext:at,useCallback:Lp,useContext:at,useEffect:Hl,useImperativeHandle:Tp,useInsertionEffect:Pp,useLayoutEffect:Ep,useMemo:Rp,useReducer:Ds,useRef:kp,useState:function(){return Ds(so)},useDebugValue:Wl,useDeferredValue:function(e){var t=lt();return fe===null?t.memoizedState=e:Op(t,fe.memoizedState,e)},useTransition:function(){var e=Ds(so)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:_p,useId:Mp,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=ln(e),i=Ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,o),t!==null&&(vt(t,e,o,r),ei(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=ln(e),i=Ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,o),t!==null&&(vt(t,e,o,r),ei(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=ln(e),o=Ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=sn(e,o,r),t!==null&&(vt(t,e,r,n),ei(t,e,r))}};function ru(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(o,i):!0}function zp(e,t,n){var r=!1,o=pn,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=He(t)?Bn:Pe.current,r=t.contextTypes,i=(r=r!=null)?sr(e,o):pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Oa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},$l(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=He(t)?Bn:Pe.current,o.context=sr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ra(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ki.enqueueReplaceState(o,o.state,null),ji(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=Wm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Us(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vg=typeof WeakMap=="function"?WeakMap:Map;function Ap(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ei||(Ei=!0,qa=r),Ma(e,t)},n}function Dp(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ma(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Tg.bind(null,e,t,n),t.then(e,e))}function su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var yg=Ht.ReactCurrentOwner,De=!1;function $e(e,t,n,r){t.child=e===null?gp(t,null,n,r):lr(t,e.child,n,r)}function lu(e,t,n,r,o){n=n.render;var i=t.ref;return rr(t,o),r=Dl(e,t,n,r,i,o),n=Ul(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(te&&n&&El(t),t.flags|=1,$e(e,t,r,o),t.child)}function cu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Yl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Up(e,t,i,r,o)):(e=si(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(a,r)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Up(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zr(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return $a(e,t,n,r,o)}function Hp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Yn,Qe),Qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Yn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(Yn,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(Yn,Qe),Qe|=r;return $e(e,t,o,n),t.child}function Wp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $a(e,t,n,r,o){var i=He(n)?Bn:Pe.current;return i=sr(t,i),rr(t,o),n=Dl(e,t,n,r,i,o),r=Ul(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(te&&r&&El(t),t.flags|=1,$e(e,t,n,o),t.child)}function uu(e,t,n,r,o){if(He(n)){var i=!0;xi(t)}else i=!1;if(rr(t,o),t.stateNode===null)ri(e,t),zp(t,n,r),Oa(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=He(n)?Bn:Pe.current,u=sr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ou(t,a,r,u),Xt=!1;var m=t.memoizedState;a.state=m,ji(t,r,a,o),c=t.memoizedState,l!==r||m!==c||Ue.current||Xt?(typeof d=="function"&&(Ra(t,n,d,r),c=t.memoizedState),(l=Xt||ru(t,n,l,r,m,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,yp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ft(t.type,l),a.props=u,f=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=at(c):(c=He(n)?Bn:Pe.current,c=sr(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==c)&&ou(t,a,r,c),Xt=!1,m=t.memoizedState,a.state=m,ji(t,r,a,o);var y=t.memoizedState;l!==f||m!==y||Ue.current||Xt?(typeof v=="function"&&(Ra(t,n,v,r),y=t.memoizedState),(u=Xt||ru(t,n,u,r,m,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ia(e,t,n,r,i,o)}function Ia(e,t,n,r,o,i){Wp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Xc(t,n,!1),Ut(e,t,i);r=t.stateNode,yg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,l,i)):$e(e,t,l,i),t.memoizedState=r.state,o&&Xc(t,n,!0),t.child}function qp(e){var t=e.stateNode;t.pendingContext?Qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qc(e,t.context,!1),Il(e,t.containerInfo)}function du(e,t,n,r,o){return ar(),Tl(o),t.flags|=256,$e(e,t,n,r),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vp(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Zi(a,r,0,null),e=Pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=za(n),t.memoizedState=Fa,e):ql(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return xg(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=cn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=cn(l,i):(i=Pn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?za(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Fa,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ql(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&Tl(r),lr(t,e.child,null,n),e=ql(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xg(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Us(Error(N(422))),Do(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zi({mode:"visible",children:r.children},o,0,null),i=Pn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,a),t.child.memoizedState=za(a),t.memoizedState=Fa,i);if(!(t.mode&1))return Do(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=Us(i,r,void 0),Do(e,t,a,r)}if(l=(a&e.childLanes)!==0,De||l){if(r=ve,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Dt(e,o),vt(r,e,o,-1))}return Jl(),r=Us(Error(N(421))),Do(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=on(o.nextSibling),Je=t,te=!0,ht=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=$t,nt[rt++]=Tn,Mt=e.id,$t=e.overflow,Tn=t),t=ql(t,r.children),t.flags|=4096,t)}function pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function Hs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Gp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,t);else if(e.tag===19)pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ni(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hs(t,!0,n,null,i);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sg(e,t,n){switch(t.tag){case 3:qp(t),ar();break;case 5:xp(t);break;case 1:He(t.type)&&xi(t);break;case 4:Il(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(wi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Vp(e,t,n):(J(ne,ne.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Hp(e,t,n)}return Ut(e,t,n)}var Qp,Aa,Xp,Kp;Qp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Aa=function(){};Xp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn(kt.current);var i=null;switch(n){case"input":o=la(e,o),r=la(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=da(e,o),r=da(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}fa(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Kp=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _g(e,t,n){var r=t.pendingProps;switch(Bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return He(t.type)&&yi(),we(t),null;case 3:return r=t.stateNode,cr(),Z(Ue),Z(Pe),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Qa(ht),ht=null))),Aa(e,t),we(t),null;case 5:Fl(t);var o=bn(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)Xp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return we(t),null}if(e=bn(kt.current),zo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[no]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)Y(Rr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":_c(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Cc(r,i),Y("invalid",r)}fa(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Fo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Fo(r.textContent,l,e),o=["children",""+l]):Vr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":Bo(r),wc(r,i,!0);break;case"textarea":Bo(r),jc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[no]=r,Qp(e,t,!1,!1),t.stateNode=e;e:{switch(a=ma(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)Y(Rr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":_c(e,r),o=la(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Cc(e,r),o=da(e,r),Y("invalid",e);break;default:o=r}fa(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?kd(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nd(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gr(e,c):typeof c=="number"&&Gr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Y("scroll",e):c!=null&&hl(e,i,c,a))}switch(n){case"input":Bo(e),wc(e,r,!1);break;case"textarea":Bo(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Kp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=bn(oo.current),bn(kt.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return we(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ke!==null&&t.mode&1&&!(t.flags&128))mp(),ar(),t.flags|=98560,i=!1;else if(i=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ct]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else ht!==null&&(Qa(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):Jl())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return cr(),Aa(e,t),e===null&&eo(t.stateNode.containerInfo),we(t),null;case 10:return Ol(t.type._context),we(t),null;case 17:return He(t.type)&&yi(),we(t),null;case 19:if(Z(ne),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)kr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ni(e),a!==null){for(t.flags|=128,kr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>dr&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ni(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!te)return we(t),null}else 2*ae()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Kl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function wg(e,t){switch(Bl(t),t.tag){case 1:return He(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),Z(Ue),Z(Pe),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fl(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return cr(),null;case 10:return Ol(t.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var Uo=!1,ke=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,B=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){ie(e,t,r)}}var fu=!1;function jg(e,t){if(ja=mi,e=tp(),Pl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===o&&(l=a),m===i&&++d===r&&(c=a),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Na={focusedElem:e,selectionRange:n},mi=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:ft(t.type,x),j);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return y=fu,fu=!1,y}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Da(t,n,i)}o=o.next}while(o!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jp(e){var t=e.alternate;t!==null&&(e.alternate=null,Jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[no],delete t[Pa],delete t[sg],delete t[ag])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yp(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var ye=null,mt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Zp(e,t,n),n=n.sibling}function Zp(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Hi,n)}catch{}switch(n.tag){case 5:ke||Jn(n,t);case 6:var r=ye,o=mt;ye=null,Wt(e,t,n),ye=r,mt=o,ye!==null&&(mt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(mt?(e=ye,n=n.stateNode,e.nodeType===8?$s(e.parentNode,n):e.nodeType===1&&$s(e,n),Jr(e)):$s(ye,n.stateNode));break;case 4:r=ye,o=mt,ye=n.stateNode.containerInfo,mt=!0,Wt(e,t,n),ye=r,mt=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Da(n,t,a),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!ke&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,t,l)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Wt(e,t,n),ke=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cg),t.forEach(function(r){var o=Rg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,mt=!1;break e;case 3:ye=l.stateNode.containerInfo,mt=!0;break e;case 4:ye=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(ye===null)throw Error(N(160));Zp(i,a,o),ye=null,mt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ef(t,e),t=t.sibling}function ef(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),_t(e),r&4){try{Dr(3,e,e.return),Ji(3,e)}catch(x){ie(e,e.return,x)}try{Dr(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:ct(t,e),_t(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(ct(t,e),_t(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{Gr(o,"")}catch(x){ie(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&wd(o,i),ma(l,a);var u=ma(l,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?kd(o,f):d==="dangerouslySetInnerHTML"?Nd(o,f):d==="children"?Gr(o,f):hl(o,d,f,u)}switch(l){case"input":ca(o,i);break;case"textarea":Cd(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Zn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Zn(o,!!i.multiple,i.defaultValue,!0):Zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[no]=i}catch(x){ie(e,e.return,x)}}break;case 6:if(ct(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ie(e,e.return,x)}}break;case 3:if(ct(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:ct(t,e),_t(e);break;case 13:ct(t,e),_t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ql=ae())),r&4&&hu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||d,ct(t,e),ke=u):ct(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(f=B=d;B!==null;){switch(m=B,v=m.child,m.tag){case 0:case 11:case 14:case 15:Dr(4,m,m.return);break;case 1:Jn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ie(r,n,x)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){vu(f);continue}}v!==null?(v.return=m,B=v):vu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=bd("display",a))}catch(x){ie(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ie(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ct(t,e),_t(e),r&4&&hu(e);break;case 21:break;default:ct(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yp(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Gr(o,""),r.flags&=-33);var i=mu(e);Wa(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=mu(e);Ha(e,l,a);break;default:throw Error(N(161))}}catch(c){ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ng(e,t,n){B=e,tf(e)}function tf(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var o=B,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Uo;if(!a){var l=o.alternate,c=l!==null&&l.memoizedState!==null||ke;l=Uo;var u=ke;if(Uo=a,(ke=c)&&!u)for(B=o;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?yu(o):c!==null?(c.return=a,B=c):yu(o);for(;i!==null;)B=i,tf(i),i=i.sibling;B=o,Uo=l,ke=u}gu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,B=i):gu(e)}}function gu(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ke||t.flags&512&&Ua(t)}catch(m){ie(t,t.return,m)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function vu(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function yu(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(c){ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ie(t,o,c)}}var i=t.return;try{Ua(t)}catch(c){ie(t,i,c)}break;case 5:var a=t.return;try{Ua(t)}catch(c){ie(t,a,c)}}}catch(c){ie(t,t.return,c)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var bg=Math.ceil,Pi=Ht.ReactCurrentDispatcher,Vl=Ht.ReactCurrentOwner,it=Ht.ReactCurrentBatchConfig,H=0,ve=null,ue=null,xe=0,Qe=0,Yn=mn(0),me=0,lo=null,Rn=0,Yi=0,Gl=0,Ur=null,Ae=null,Ql=0,dr=1/0,Lt=null,Ei=!1,qa=null,an=null,Ho=!1,Zt=null,Bi=0,Hr=0,Va=null,oi=-1,ii=0;function Ie(){return H&6?ae():oi!==-1?oi:oi=ae()}function ln(e){return e.mode&1?H&2&&xe!==0?xe&-xe:cg.transition!==null?(ii===0&&(ii=zd()),ii):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Vd(e.type)),e):1}function vt(e,t,n,r){if(50<Hr)throw Hr=0,Va=null,Error(N(185));mo(e,n,r),(!(H&2)||e!==ve)&&(e===ve&&(!(H&2)&&(Yi|=n),me===4&&Jt(e,xe)),We(e,r),n===1&&H===0&&!(t.mode&1)&&(dr=ae()+500,Qi&&hn()))}function We(e,t){var n=e.callbackNode;ch(e,t);var r=fi(e,e===ve?xe:0);if(r===0)n!==null&&kc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kc(n),t===1)e.tag===0?lg(xu.bind(null,e)):dp(xu.bind(null,e)),og(function(){!(H&6)&&hn()}),n=null;else{switch(Ad(r)){case 1:n=Sl;break;case 4:n=Id;break;case 16:n=pi;break;case 536870912:n=Fd;break;default:n=pi}n=uf(n,nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nf(e,t){if(oi=-1,ii=0,H&6)throw Error(N(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=fi(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ti(e,r);else{t=r;var o=H;H|=2;var i=of();(ve!==e||xe!==t)&&(Lt=null,dr=ae()+500,kn(e,t));do try{Eg();break}catch(l){rf(e,l)}while(!0);Rl(),Pi.current=i,H=o,ue!==null?t=0:(ve=null,xe=0,t=me)}if(t!==0){if(t===2&&(o=xa(e),o!==0&&(r=o,t=Ga(e,o))),t===1)throw n=lo,kn(e,0),Jt(e,r),We(e,ae()),n;if(t===6)Jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!kg(o)&&(t=Ti(e,r),t===2&&(i=xa(e),i!==0&&(r=i,t=Ga(e,i))),t===1))throw n=lo,kn(e,0),Jt(e,r),We(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:wn(e,Ae,Lt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Ql+500-ae(),10<t)){if(fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ka(wn.bind(null,e,Ae,Lt),t);break}wn(e,Ae,Lt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-gt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bg(r/1960))-r,10<r){e.timeoutHandle=ka(wn.bind(null,e,Ae,Lt),r);break}wn(e,Ae,Lt);break;case 5:wn(e,Ae,Lt);break;default:throw Error(N(329))}}}return We(e,ae()),e.callbackNode===n?nf.bind(null,e):null}function Ga(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Qa(t)),e}function Qa(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function kg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Gl,t&=~Yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if(H&6)throw Error(N(327));or();var t=fi(e,0);if(!(t&1))return We(e,ae()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ga(e,r))}if(n===1)throw n=lo,kn(e,0),Jt(e,t),We(e,ae()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Ae,Lt),We(e,ae()),null}function Xl(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(dr=ae()+500,Qi&&hn())}}function On(e){Zt!==null&&Zt.tag===0&&!(H&6)&&or();var t=H;H|=1;var n=it.transition,r=Q;try{if(it.transition=null,Q=1,e)return e()}finally{Q=r,it.transition=n,H=t,!(H&6)&&hn()}}function Kl(){Qe=Yn.current,Z(Yn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rg(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yi();break;case 3:cr(),Z(Ue),Z(Pe),zl();break;case 5:Fl(r);break;case 4:cr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:Ol(r.type._context);break;case 22:case 23:Kl()}n=n.return}if(ve=e,ue=e=cn(e.current,null),xe=Qe=t,me=0,lo=null,Gl=Yi=Rn=0,Ae=Ur=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Nn=null}return e}function rf(e,t){do{var n=ue;try{if(Rl(),ti.current=ki,bi){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bi=!1}if(Ln=0,ge=fe=re=null,Ar=!1,io=0,Vl.current=null,n===null||n.return===null){me=1,lo=t,ue=null;break}e:{var i=e,a=n.return,l=n,c=t;if(t=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=su(a);if(v!==null){v.flags&=-257,au(v,a,l,i,t),v.mode&1&&iu(i,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){iu(i,u,t),Jl();break e}c=Error(N(426))}}else if(te&&l.mode&1){var j=su(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),au(j,a,l,i,t),Tl(ur(c,l));break e}}i=c=ur(c,l),me!==4&&(me=2),Ur===null?Ur=[i]:Ur.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Ap(i,c,t);Zc(i,g);break e;case 1:l=c;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(an===null||!an.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Dp(i,l,t);Zc(i,S);break e}}i=i.return}while(i!==null)}af(n)}catch(_){t=_,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function of(){var e=Pi.current;return Pi.current=ki,e===null?ki:e}function Jl(){(me===0||me===3||me===2)&&(me=4),ve===null||!(Rn&268435455)&&!(Yi&268435455)||Jt(ve,xe)}function Ti(e,t){var n=H;H|=2;var r=of();(ve!==e||xe!==t)&&(Lt=null,kn(e,t));do try{Pg();break}catch(o){rf(e,o)}while(!0);if(Rl(),H=n,Pi.current=r,ue!==null)throw Error(N(261));return ve=null,xe=0,me}function Pg(){for(;ue!==null;)sf(ue)}function Eg(){for(;ue!==null&&!eh();)sf(ue)}function sf(e){var t=cf(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?af(e):ue=t,Vl.current=null}function af(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wg(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ue=null;return}}else if(n=_g(n,t,Qe),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);me===0&&(me=5)}function wn(e,t,n){var r=Q,o=it.transition;try{it.transition=null,Q=1,Bg(e,t,n,r)}finally{it.transition=o,Q=r}return null}function Bg(e,t,n,r){do or();while(Zt!==null);if(H&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(uh(e,i),e===ve&&(ue=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,uf(pi,function(){return or(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var a=Q;Q=1;var l=H;H|=4,Vl.current=null,jg(e,n),ef(n,e),Kh(Na),mi=!!ja,Na=ja=null,e.current=n,Ng(n),th(),H=l,Q=a,it.transition=i}else e.current=n;if(Ho&&(Ho=!1,Zt=e,Bi=o),i=e.pendingLanes,i===0&&(an=null),oh(n.stateNode),We(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ei)throw Ei=!1,e=qa,qa=null,e;return Bi&1&&e.tag!==0&&or(),i=e.pendingLanes,i&1?e===Va?Hr++:(Hr=0,Va=e):Hr=0,hn(),null}function or(){if(Zt!==null){var e=Ad(Bi),t=it.transition,n=Q;try{if(it.transition=null,Q=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Bi=0,H&6)throw Error(N(331));var o=H;for(H|=4,B=e.current;B!==null;){var i=B,a=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Dr(8,d,i)}var f=d.child;if(f!==null)f.return=d,B=f;else for(;B!==null;){d=B;var m=d.sibling,v=d.return;if(Jp(d),d===u){B=null;break}if(m!==null){m.return=v,B=m;break}B=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}B=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,B=a;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,B=g;break e}B=i.return}}var p=e.current;for(B=p;B!==null;){a=B;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,B=h;else e:for(a=p;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ji(9,l)}}catch(_){ie(l,l.return,_)}if(l===a){B=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,B=S;break e}B=l.return}}if(H=o,hn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Hi,e)}catch{}r=!0}return r}finally{Q=n,it.transition=t}}return!1}function Su(e,t,n){t=ur(n,t),t=Ap(e,t,1),e=sn(e,t,1),t=Ie(),e!==null&&(mo(e,1,t),We(e,t))}function ie(e,t,n){if(e.tag===3)Su(e,e,n);else for(;t!==null;){if(t.tag===3){Su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=ur(n,e),e=Dp(t,e,1),t=sn(t,e,1),e=Ie(),t!==null&&(mo(t,1,e),We(t,e));break}}t=t.return}}function Tg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(me===4||me===3&&(xe&130023424)===xe&&500>ae()-Ql?kn(e,0):Gl|=n),We(e,t)}function lf(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Ie();e=Dt(e,t),e!==null&&(mo(e,t,n),We(e,n))}function Lg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lf(e,n)}function Rg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),lf(e,n)}var cf;cf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Sg(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&pp(t,_i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ri(e,t),e=t.pendingProps;var o=sr(t,Pe.current);rr(t,n),o=Dl(null,t,r,e,o,n);var i=Ul();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(i=!0,xi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$l(t),o.updater=Ki,t.stateNode=o,o._reactInternals=t,Oa(t,r,e,n),t=Ia(null,t,r,!0,i,n)):(t.tag=0,te&&i&&El(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Mg(r),e=ft(r,e),o){case 0:t=$a(null,t,r,e,n);break e;case 1:t=uu(null,t,r,e,n);break e;case 11:t=lu(null,t,r,e,n);break e;case 14:t=cu(null,t,r,ft(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),$a(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),uu(e,t,r,o,n);case 3:e:{if(qp(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yp(e,t),ji(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ur(Error(N(423)),t),t=du(e,t,r,n,o);break e}else if(r!==o){o=ur(Error(N(424)),t),t=du(e,t,r,n,o);break e}else for(Ke=on(t.stateNode.containerInfo.firstChild),Je=t,te=!0,ht=null,n=gp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=Ut(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return xp(t),e===null&&Ta(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ba(r,o)?a=null:i!==null&&ba(r,i)&&(t.flags|=32),Wp(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return Vp(e,t,n);case 4:return Il(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),lu(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(wi,r._currentValue),r._currentValue=a,i!==null)if(xt(i.value,a)){if(i.children===o.children&&!Ue.current){t=Ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ft(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),La(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),La(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,rr(t,n),o=at(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),cu(e,t,r,o,n);case 15:return Up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),ri(e,t),t.tag=1,He(r)?(e=!0,xi(t)):e=!1,rr(t,n),zp(t,r,o),Oa(t,r,o,n),Ia(null,t,r,!0,e,n);case 19:return Gp(e,t,n);case 22:return Hp(e,t,n)}throw Error(N(156,t.tag))};function uf(e,t){return $d(e,t)}function Og(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Og(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mg(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===yl)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Yl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Un:return Pn(n.children,o,i,t);case gl:a=8,o|=8;break;case oa:return e=ot(12,n,t,o|2),e.elementType=oa,e.lanes=i,e;case ia:return e=ot(13,n,t,o),e.elementType=ia,e.lanes=i,e;case sa:return e=ot(19,n,t,o),e.elementType=sa,e.lanes=i,e;case xd:return Zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:a=10;break e;case yd:a=9;break e;case vl:a=11;break e;case yl:a=14;break e;case Qt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ot(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Pn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=ot(22,e,r,t),e.elementType=xd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ws(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function qs(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $g(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ns(0),this.expirationTimes=Ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zl(e,t,n,r,o,i,a,l,c){return e=new $g(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(i),e}function Ig(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function df(e){if(!e)return pn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(He(n))return up(e,n,t)}return t}function pf(e,t,n,r,o,i,a,l,c){return e=Zl(n,r,!0,e,o,i,a,l,c),e.context=df(null),n=e.current,r=Ie(),o=ln(n),i=Ft(r,o),i.callback=t??null,sn(n,i,o),e.current.lanes=o,mo(e,o,r),We(e,r),e}function es(e,t,n,r){var o=t.current,i=Ie(),a=ln(o);return n=df(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(o,t,a),e!==null&&(vt(e,o,a,i),ei(e,o,a)),a}function Li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Fg(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}ts.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));es(e,t,null,null)};ts.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){es(null,e,null,null)}),t[At]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&qd(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function zg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Li(a);i.call(u)}}var a=pf(t,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=a,e[At]=a.current,eo(e.nodeType===8?e.parentNode:e),On(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Li(c);l.call(u)}}var c=Zl(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=c,e[At]=c.current,eo(e.nodeType===8?e.parentNode:e),On(function(){es(t,c,n,r)}),c}function rs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var c=Li(a);l.call(c)}}es(t,a,e,o)}else a=zg(n,t,e,o,r);return Li(a)}Dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(_l(t,n|1),We(t,ae()),!(H&6)&&(dr=ae()+500,hn()))}break;case 13:On(function(){var r=Dt(e,1);if(r!==null){var o=Ie();vt(r,e,1,o)}}),ec(e,1)}};wl=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ie();vt(t,e,134217728,n)}ec(e,134217728)}};Ud=function(e){if(e.tag===13){var t=ln(e),n=Dt(e,t);if(n!==null){var r=Ie();vt(n,e,t,r)}ec(e,t)}};Hd=function(){return Q};Wd=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};ga=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gi(r);if(!o)throw Error(N(90));_d(r),ca(r,o)}}}break;case"textarea":Cd(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Bd=Xl;Td=On;var Ag={usingClientEntryPoint:!1,Events:[go,Vn,Gi,Pd,Ed,Xl]},Pr={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dg={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Od(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Fg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Hi=Wo.inject(Dg),bt=Wo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ag;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(N(200));return Ig(e,t,null,n)};Ze.createRoot=function(e,t){if(!nc(e))throw Error(N(299));var n=!1,r="",o=ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zl(e,1,!1,null,null,n,!1,r,o),e[At]=t.current,eo(e.nodeType===8?e.parentNode:e),new tc(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Od(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return On(e)};Ze.hydrate=function(e,t,n){if(!ns(t))throw Error(N(200));return rs(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=ff;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=pf(t,null,e,1,n??null,o,!1,i,a),e[At]=t.current,eo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ts(t)};Ze.render=function(e,t,n){if(!ns(t))throw Error(N(200));return rs(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!ns(e))throw Error(N(40));return e._reactRootContainer?(On(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ze.unstable_batchedUpdates=Xl;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return rs(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),fd.exports=Ze;var Ug=fd.exports,Cu=Ug;na.createRoot=Cu.createRoot,na.hydrateRoot=Cu.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const ju="popstate";function Hg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Xa("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ri(o)}return qg(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wg(){return Math.random().toString(36).substr(2,8)}function Nu(e,t){return{usr:e.state,key:e.key,idx:t}}function Xa(e,t,n,r){return n===void 0&&(n=null),co({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hr(t):t,{state:n,key:t&&t.key||r||Wg()})}function Ri(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=en.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(co({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=en.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:l,location:x.location,delta:g})}function m(j,g){l=en.Push;let p=Xa(x.location,j,g);u=d()+1;let h=Nu(p,u),S=x.createHref(p);try{a.pushState(h,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(S)}i&&c&&c({action:l,location:x.location,delta:1})}function v(j,g){l=en.Replace;let p=Xa(x.location,j,g);u=d();let h=Nu(p,u),S=x.createHref(p);a.replaceState(h,"",S),i&&c&&c({action:l,location:x.location,delta:0})}function y(j){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof j=="string"?j:Ri(j);return p=p.replace(/ $/,"%20"),de(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let x={get action(){return l},get location(){return e(o,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(ju,f),c=j,()=>{o.removeEventListener(ju,f),c=null}},createHref(j){return t(o,j)},createURL:y,encodeLocation(j){let g=y(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(j){return a.go(j)}};return x}var bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bu||(bu={}));function Vg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?hr(t):t,o=rc(r.pathname||"/",n);if(o==null)return null;let i=gf(e);Gg(i);let a=null;for(let l=0;a==null&&l<i.length;++l){let c=iv(o);a=nv(i[l],c)}return a}function gf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=un([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(de(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gf(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ev(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let c of vf(i.path))o(i,a,c)}),t}function vf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=vf(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Gg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qg=/^:[\w-]+$/,Xg=3,Kg=2,Jg=1,Yg=10,Zg=-2,ku=e=>e==="*";function ev(e,t){let n=e.split("/"),r=n.length;return n.some(ku)&&(r+=Zg),t&&(r+=Kg),n.filter(o=>!ku(o)).reduce((o,i)=>o+(Qg.test(i)?Xg:i===""?Jg:Yg),r)}function tv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function nv(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=rv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;i.push({params:r,pathname:un([o,d.pathname]),pathnameBase:cv(un([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=un([o,d.pathnameBase]))}return i}function rv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ov(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let x=l[f]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[f];return v&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function ov(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function iv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?hr(e):e;return{pathname:n?n.startsWith("/")?n:av(n,t):t,search:uv(r),hash:dv(o)}}function av(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yf(e,t){let n=lv(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=hr(e):(o=co({},e),de(!o.pathname||!o.pathname.includes("?"),Vs("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),Vs("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),Vs("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}l=f>=0?t[f]:"/"}let c=sv(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const un=e=>e.join("/").replace(/\/\/+/g,"/"),cv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sf=["post","put","patch","delete"];new Set(Sf);const fv=["get",...Sf];new Set(fv);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(this,arguments)}const oc=C.createContext(null),mv=C.createContext(null),Fn=C.createContext(null),os=C.createContext(null),zn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),_f=C.createContext(null);function hv(e,t){let{relative:n}=t===void 0?{}:t;yo()||de(!1);let{basename:r,navigator:o}=C.useContext(Fn),{hash:i,pathname:a,search:l}=Cf(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:un([r,a])),o.createHref({pathname:c,search:l,hash:i})}function yo(){return C.useContext(os)!=null}function is(){return yo()||de(!1),C.useContext(os).location}function wf(e){C.useContext(Fn).static||C.useLayoutEffect(e)}function ss(){let{isDataRoute:e}=C.useContext(zn);return e?Pv():gv()}function gv(){yo()||de(!1);let e=C.useContext(oc),{basename:t,future:n,navigator:r}=C.useContext(Fn),{matches:o}=C.useContext(zn),{pathname:i}=is(),a=JSON.stringify(yf(o,n.v7_relativeSplatPath)),l=C.useRef(!1);return wf(()=>{l.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=xf(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:un([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,i,e])}function Cf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Fn),{matches:o}=C.useContext(zn),{pathname:i}=is(),a=JSON.stringify(yf(o,r.v7_relativeSplatPath));return C.useMemo(()=>xf(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function vv(e,t){return yv(e,t)}function yv(e,t,n,r){yo()||de(!1);let{navigator:o}=C.useContext(Fn),{matches:i}=C.useContext(zn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=is(),d;if(t){var f;let j=typeof t=="string"?hr(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||de(!1),d=j}else d=u;let m=d.pathname||"/",v=m;if(c!=="/"){let j=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=Vg(e,{pathname:v}),x=Cv(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:un([c,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:un([c,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&x?C.createElement(os.Provider,{value:{location:uo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:en.Pop}},x):x}function xv(){let e=kv(),t=pv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const Sv=C.createElement(xv,null);class _v extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(zn.Provider,{value:this.props.routeContext},C.createElement(_f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wv(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(oc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(zn.Provider,{value:t},r)}function Cv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||de(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:v}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,m)=>{let v,y=!1,x=null,j=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||Sv,c&&(u<0&&m===0?(y=!0,j=null):u===m&&(y=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,m+1)),p=()=>{let h;return v?h=x:y?h=j:f.route.Component?h=C.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,C.createElement(wv,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?C.createElement(_v,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var jf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(jf||{}),Oi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Oi||{});function jv(e){let t=C.useContext(oc);return t||de(!1),t}function Nv(e){let t=C.useContext(mv);return t||de(!1),t}function bv(e){let t=C.useContext(zn);return t||de(!1),t}function Nf(e){let t=bv(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function kv(){var e;let t=C.useContext(_f),n=Nv(Oi.UseRouteError),r=Nf(Oi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Pv(){let{router:e}=jv(jf.UseNavigateStable),t=Nf(Oi.UseNavigateStable),n=C.useRef(!1);return wf(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,uo({fromRouteId:t},i)))},[e,t])}function U(e){de(!1)}function Ev(e){let{basename:t="/",children:n=null,location:r,navigationType:o=en.Pop,navigator:i,static:a=!1,future:l}=e;yo()&&de(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:i,static:a,future:uo({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=hr(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:y="default"}=r,x=C.useMemo(()=>{let j=rc(d,c);return j==null?null:{location:{pathname:j,search:f,hash:m,state:v,key:y},navigationType:o}},[c,d,f,m,v,y,o]);return x==null?null:C.createElement(Fn.Provider,{value:u},C.createElement(os.Provider,{children:n,value:x}))}function Bv(e){let{children:t,location:n}=e;return vv(Ka(t),n)}new Promise(()=>{});function Ka(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,Ka(r.props.children,i));return}r.type!==U&&de(!1),!r.props.index||!r.props.children||de(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ka(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}function Tv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Lv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rv(e,t){return e.button===0&&(!t||t==="_self")&&!Lv(e)}const Ov=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Mv="6";try{window.__reactRouterVersion=Mv}catch{}const $v="startTransition",Pu=Tm[$v];function Iv(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=Hg({window:o,v5Compat:!0}));let a=i.current,[l,c]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=C.useCallback(f=>{u&&Pu?Pu(()=>c(f)):c(f)},[c,u]);return C.useLayoutEffect(()=>a.listen(d),[a,d]),C.createElement(Ev,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,m=Tv(t,Ov),{basename:v}=C.useContext(Fn),y,x=!1;if(typeof u=="string"&&zv.test(u)&&(y=u,Fv))try{let h=new URL(window.location.href),S=u.startsWith("//")?new URL(h.protocol+u):new URL(u),_=rc(S.pathname,v);S.origin===h.origin&&_!=null?u=_+S.search+S.hash:x=!0}catch{}let j=hv(u,{relative:o}),g=Av(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||g(h)}return C.createElement("a",Ja({},m,{href:y||j,onClick:x||i?r:p,ref:n,target:c}))});var Eu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Eu||(Eu={}));var Bu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bu||(Bu={}));function Av(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,c=ss(),u=is(),d=Cf(e,{relative:a});return C.useCallback(f=>{if(Rv(f,n)){f.preventDefault();let m=r!==void 0?r:Ri(u)===Ri(d);c(e,{replace:m,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,c,d,r,o,n,e,i,a,l])}const Dv="_navbar_1itkf_3",Uv="_logo_1itkf_16",Hv="_hamburger_1itkf_23",Wv="_navLinks_1itkf_32",qv="_navLink_1itkf_32",Vv="_closeBtn_1itkf_48",Gv="_profileMenuContainer_1itkf_52",Qv="_userIcon_1itkf_56",Xv="_profileMenu_1itkf_52",Kv="_open_1itkf_108",ce={navbar:Dv,logo:Uv,hamburger:Hv,navLinks:Wv,navLink:qv,closeBtn:Vv,profileMenuContainer:Gv,userIcon:Qv,profileMenu:Xv,open:Kv};var bf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tu=It.createContext&&It.createContext(bf),Jv=["attr","size","title"];function Yv(e,t){if(e==null)return{};var n=Zv(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zv(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}function Lu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lu(Object(n),!0).forEach(function(r){e0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e0(e,t,n){return t=t0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t0(e){var t=n0(e,"string");return typeof t=="symbol"?t:t+""}function n0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kf(e){return e&&e.map((t,n)=>It.createElement(t.tag,$i({key:n},t.attr),kf(t.child)))}function xo(e){return t=>It.createElement(r0,Mi({attr:$i({},e.attr)},t),kf(e.child))}function r0(e){var t=n=>{var{attr:r,size:o,title:i}=e,a=Yv(e,Jv),l=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),It.createElement("svg",Mi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:$i($i({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&It.createElement("title",null,i),e.children)};return Tu!==void 0?It.createElement(Tu.Consumer,null,n=>t(n)):t(bf)}function Ru(e){return xo({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Pf(e){return xo({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function Ef(e){return xo({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Ou(e){return xo({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Bf(e){return xo({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const ic=C.createContext({authState:{token:null,username:null},setAuthState:()=>{}}),o0=({children:e})=>{const[t,n]=C.useState({token:localStorage.getItem("token"),username:null});return C.useEffect(()=>{const r=localStorage.getItem("token");r&&n({token:r,username:null})},[]),s.jsx(ic.Provider,{value:{authState:t,setAuthState:n},children:e})},i0=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),{authState:o,setAuthState:i}=C.useContext(ic),a=()=>{t(!e)},l=()=>{r(!n)},c=()=>{i({token:null,username:null}),localStorage.removeItem("token")};return s.jsxs("nav",{className:ce.navbar,children:[s.jsx("div",{className:ce.logo,children:s.jsx(O,{to:"/",children:s.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:ce.logoImage})})}),s.jsx("button",{className:ce.hamburger,onClick:a,children:e?s.jsx("span",{className:ce.closeIcon,children:"×"}):s.jsx("span",{children:"☰"})}),s.jsxs("ul",{className:`${ce.navLinks} ${e?ce.open:""}`,children:[s.jsx("li",{className:ce.closeBtn,onClick:a,children:"×"}),s.jsx("li",{children:s.jsx(O,{to:"/",className:ce.navLink,onClick:a,children:"Home"})}),s.jsx("li",{children:s.jsx(O,{to:"/components",className:ce.navLink,onClick:a,children:"Components"})}),s.jsx("li",{children:s.jsx(O,{to:"/utilities",className:ce.navLink,onClick:a,children:"Utilities"})}),s.jsx("li",{children:s.jsx(O,{to:"/documentation",className:ce.navLink,onClick:a,children:"Documentation"})}),s.jsx("li",{children:s.jsx(O,{to:"/examples",className:ce.navLink,onClick:a,children:"Examples"})}),s.jsx("li",{className:ce.userActions,children:o.token?s.jsxs("div",{className:ce.profileMenuContainer,children:[s.jsx(Bf,{className:ce.userIcon,onClick:l}),n&&s.jsxs("div",{className:ce.profileMenu,children:[s.jsx(O,{to:"/profile",className:ce.navLink,onClick:l,children:"Profile"}),s.jsx("button",{className:ce.navLink,onClick:c,children:"Logout"})]})]}):s.jsx(O,{to:"/signup",className:ce.navLink,onClick:a,children:"Sign Up"})})]})]})},s0="_home_iomrs_3",a0="_header_iomrs_7",l0="_logo_iomrs_16",c0="_features_iomrs_34",u0="_featureCard_iomrs_41",d0="_icon_iomrs_49",p0="_getStarted_iomrs_74",f0="_getStartedIcon_iomrs_81",pe={home:s0,header:a0,logo:l0,features:c0,featureCard:u0,icon:d0,getStarted:p0,getStartedIcon:f0},m0=()=>s.jsxs("div",{className:pe.home,children:[s.jsxs("header",{className:pe.header,children:[s.jsx("img",{src:"https://via.placeholder.com/100",alt:"Toolkit Logo",className:pe.logo}),s.jsx("h1",{children:"Build fast, responsive sites with Wells Fargo UI Toolkit"}),s.jsx("p",{children:"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."})]}),s.jsxs("div",{className:pe.features,children:[s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 1"})}),s.jsx("h3",{children:"Responsive Design"}),s.jsx("p",{children:"Create responsive designs that look great on all devices, from smartphones to desktops."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 2"})}),s.jsx("h3",{children:"Reusable Components"}),s.jsx("p",{children:"Utilize a library of reusable components to maintain consistency across projects."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 3"})}),s.jsx("h3",{children:"Customization"}),s.jsx("p",{children:"Easily customize components to match your branding and design requirements."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 4"})}),s.jsx("h3",{children:"Accessibility"}),s.jsx("p",{children:"Ensure your applications are accessible to all users with built-in accessibility features."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]})]}),s.jsxs("div",{className:pe.getStarted,children:[s.jsx("div",{className:pe.getStartedIcon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Get Started Icon"})}),s.jsx("h2",{children:"Get started any way you want"}),s.jsx("p",{children:"Jump right into building with the Wells Fargo UI Toolkit—use the CDN, install it via package manager, or download the source code."}),s.jsx("a",{href:"#",className:pe.getStartedLink,children:"Read installation docs >"})]})]}),h0="_componentsContainer_b3o92_3",g0="_heroSection_b3o92_7",v0="_searchBox_b3o92_32",y0="_sectionsContainer_b3o92_47",x0="_section_b3o92_47",S0="_sectionHeading_b3o92_58",_0="_blocksContainer_b3o92_65",w0="_block_b3o92_65",C0="_blockImage_b3o92_86",j0="_blockContent_b3o92_96",N0="_blockTitle_b3o92_100",b0="_blockCount_b3o92_105",P={componentsContainer:h0,heroSection:g0,searchBox:v0,sectionsContainer:y0,section:x0,sectionHeading:S0,blocksContainer:_0,block:w0,blockImage:C0,blockContent:j0,blockTitle:N0,blockCount:b0},k0="_heroSection_1ftnk_1",P0="_mainHeading_1ftnk_7",E0="_heroGrid_1ftnk_13",B0="_heroBox_1ftnk_20",T0="_demoButton_1ftnk_29",Pt={heroSection:k0,mainHeading:P0,heroGrid:E0,heroBox:B0,demoButton:T0},Tf=()=>s.jsxs("div",{className:Pt.heroSection,children:[s.jsx("h1",{className:Pt.mainHeading,children:"Hero Section"}),s.jsxs("div",{className:Pt.heroGrid,children:[s.jsxs("div",{className:Pt.heroBox,children:[s.jsx("h2",{children:"Hero Demo 1"}),s.jsx(O,{to:"/herosection1",children:s.jsx("button",{className:Pt.demoButton,children:"View Demo"})})]}),s.jsxs("div",{className:Pt.heroBox,children:[s.jsx("h2",{children:"Hero Demo 2"}),s.jsx(O,{to:"/herosection2",children:s.jsx("button",{className:Pt.demoButton,children:"View Demo"})})]}),s.jsxs("div",{className:Pt.heroBox,children:[s.jsx("h2",{children:"Hero Demo 3"}),s.jsx(O,{to:"/herosection3",children:s.jsx("button",{className:Pt.demoButton,children:"View Demo"})})]})]})]}),L0="_featureSection_7qm90_1",R0="_mainHeading_7qm90_7",O0="_featureGrid_7qm90_13",M0="_featureBox_7qm90_20",$0="_demoButton_7qm90_29",Et={featureSection:L0,mainHeading:R0,featureGrid:O0,featureBox:M0,demoButton:$0},Lf=()=>s.jsxs("div",{className:Et.featureSection,children:[s.jsx("h1",{className:Et.mainHeading,children:"Feature Section"}),s.jsxs("div",{className:Et.featureGrid,children:[s.jsxs("div",{className:Et.featureBox,children:[s.jsx("h2",{children:"Feature Demo 1"}),s.jsx(O,{to:"/featuresection1",className:Et.demoButton,children:"View Demo"})]}),s.jsxs("div",{className:Et.featureBox,children:[s.jsx("h2",{children:"Feature Demo 2"}),s.jsx(O,{to:"/featuresection2",className:Et.demoButton,children:"View Demo"})]}),s.jsxs("div",{className:Et.featureBox,children:[s.jsx("h2",{children:"Feature Demo 3"}),s.jsx(O,{to:"/featuresection3",className:Et.demoButton,children:"View Demo"})]})]})]}),I0="_ctaContainer_1xpsc_1",F0="_ctaBox_1xpsc_8",z0="_demoButton_1xpsc_16",yn={ctaContainer:I0,ctaBox:F0,demoButton:z0},Rf=()=>{const e=ss(),t=n=>{e(`/ctasection${n}`)};return s.jsxs("div",{className:yn.ctaContainer,children:[s.jsxs("div",{className:yn.ctaBox,children:[s.jsx("h2",{children:"CTA Section 1"}),s.jsx("button",{onClick:()=>t(1),className:yn.demoButton,children:"Show Demo"})]}),s.jsxs("div",{className:yn.ctaBox,children:[s.jsx("h2",{children:"CTA Section 2"}),s.jsx("button",{onClick:()=>t(2),className:yn.demoButton,children:"Show Demo"})]}),s.jsxs("div",{className:yn.ctaBox,children:[s.jsx("h2",{children:"CTA Section 3"}),s.jsx("button",{onClick:()=>t(3),className:yn.demoButton,children:"Show Demo"})]})]})},A0="_pricingPageContainer_sx37m_1",D0="_mainHeading_sx37m_6",U0="_pricingDemosContainer_sx37m_11",H0="_pricingDemoBox_sx37m_17",W0="_viewDemoButton_sx37m_25",xn={pricingPageContainer:A0,mainHeading:D0,pricingDemosContainer:U0,pricingDemoBox:H0,viewDemoButton:W0},Of=()=>s.jsxs("div",{className:xn.pricingPageContainer,children:[s.jsx("h1",{className:xn.mainHeading,children:"Pricing Pages"}),s.jsxs("div",{className:xn.pricingDemosContainer,children:[s.jsxs("div",{className:xn.pricingDemoBox,children:[s.jsx("h2",{children:"Pricing Page 1"}),s.jsx("p",{children:"A simple and elegant pricing page for various plans."}),s.jsx(O,{to:"/pricingpage1",children:s.jsx("button",{className:xn.viewDemoButton,children:"View Demo"})})]}),s.jsxs("div",{className:xn.pricingDemoBox,children:[s.jsx("h2",{children:"Pricing Page 2"}),s.jsx("p",{children:"A modern and detailed pricing page with more features."}),s.jsx(O,{to:"/pricingpage2",children:s.jsx("button",{className:xn.viewDemoButton,children:"View Demo"})})]})]})]}),q0={},V0=()=>s.jsx("div",{className:q0.HeaderSection}),G0={},Q0=()=>s.jsx("div",{className:G0.FooterSection}),X0={},K0=()=>s.jsx("div",{className:X0.TestimonialsSection}),J0={},Y0=()=>s.jsx("div",{className:J0.FAQSection}),Z0={},ey=()=>s.jsx("div",{className:Z0.TeamSection}),ty={},ny=()=>s.jsx("div",{className:ty.NewsletterSection}),ry={},oy=()=>s.jsx("div",{className:ry.LandingPage}),iy="_aboutPageContainer_mi9ot_1",sy="_pageTitle_mi9ot_6",ay="_pageDescription_mi9ot_11",ly="_boxContainer_mi9ot_17",cy="_box_mi9ot_17",uy="_boxImage_mi9ot_38",dy="_boxContent_mi9ot_44",py="_viewDemoButton_mi9ot_59",Ce={aboutPageContainer:iy,pageTitle:sy,pageDescription:ay,boxContainer:ly,box:cy,boxImage:uy,boxContent:dy,viewDemoButton:py},Mf=()=>s.jsxs("div",{className:Ce.aboutPageContainer,children:[s.jsx("h1",{className:Ce.pageTitle,children:"About Us"}),s.jsx("p",{className:Ce.pageDescription,children:"Explore the various aspects of our company, mission, and values through the following pages."}),s.jsxs("div",{className:Ce.boxContainer,children:[s.jsxs("div",{className:Ce.box,children:[s.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 1",className:Ce.boxImage}),s.jsxs("div",{className:Ce.boxContent,children:[s.jsx("h2",{children:"Company Overview"}),s.jsx("p",{children:"Learn more about our company's history, mission, and values."}),s.jsx(O,{to:"/aboutpage1",className:Ce.viewDemoButton,children:"View Demo"})]})]}),s.jsxs("div",{className:Ce.box,children:[s.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 2",className:Ce.boxImage}),s.jsxs("div",{className:Ce.boxContent,children:[s.jsx("h2",{children:"Our Team"}),s.jsx("p",{children:"Meet the dedicated team behind our company's success."}),s.jsx(O,{to:"/aboutpage2",className:Ce.viewDemoButton,children:"View Demo"})]})]}),s.jsxs("div",{className:Ce.box,children:[s.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 3",className:Ce.boxImage}),s.jsxs("div",{className:Ce.boxContent,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"Get in touch with us for any inquiries or support."}),s.jsx(O,{to:"/aboutpage3",className:Ce.viewDemoButton,children:"View Demo"})]})]})]})]}),fy={},my=()=>s.jsx("div",{className:fy.ContactPage}),hy="_loginPageContainer_c2z96_1",gy="_pageBoxes_c2z96_6",vy="_pageBox_c2z96_6",yy="_demoButton_c2z96_34",qo={loginPageContainer:hy,pageBoxes:gy,pageBox:vy,demoButton:yy},$f=()=>{const e=[{name:"Login Page 1",path:"/loginpage1"},{name:"Login Page 2",path:"/loginpage2"},{name:"Login Page 3",path:"/loginpage3"}];return s.jsxs("div",{className:qo.loginPageContainer,children:[s.jsx("h1",{children:"Login Pages"}),s.jsx("div",{className:qo.pageBoxes,children:e.map((t,n)=>s.jsxs("div",{className:qo.pageBox,children:[s.jsx("h2",{children:t.name}),s.jsxs("p",{children:["Explore the design and functionality of ",t.name,"."]}),s.jsx(O,{to:t.path,className:qo.demoButton,children:"View Demo"})]},n))})]})},xy={},Sy=()=>s.jsx("div",{className:xy.RegistrationPage}),_y={},wy=()=>s.jsx("div",{className:_y.DashboardPage}),Cy={},jy=()=>s.jsx("div",{className:Cy.ProfilePage}),Ny={},by=()=>s.jsx("div",{className:Ny.GridLayout}),ky={},Py=()=>s.jsx("div",{className:ky.FlexLayout}),Ey={},By=()=>s.jsx("div",{className:Ey.LoginForm}),Ty={},Ly=()=>s.jsx("div",{className:Ty.RegistrationForm}),Ry={},Oy=()=>s.jsx("div",{className:Ry.ContactForm}),My={},$y=()=>s.jsx("div",{className:My.SubscriptionForm}),Iy={},Fy=()=>s.jsx("div",{className:Iy.FeedbackForm}),zy={},Ay=()=>s.jsx("div",{className:zy.SearchForm}),Dy="_buttonPage_md1jm_1",Uy="_buttonGrid_md1jm_5",Hy="_buttonSection_md1jm_11",Wy="_buttonExample_md1jm_23",qy="_button_md1jm_1",Vy="_buttonText_md1jm_36",Gy="_signOn1_md1jm_54",Qy="_signOn2_md1jm_72",Xy="_learnMore_md1jm_91",Ky="_learnMore2_md1jm_110",Jy="_copyButton_md1jm_131",Yy="_codeBlock_md1jm_145",Zy="_toggleSwitch_md1jm_154",ex="_slider_md1jm_168",Bt={buttonPage:Dy,buttonGrid:Uy,buttonSection:Hy,buttonExample:Wy,button:qy,buttonText:Vy,signOn1:Gy,signOn2:Qy,learnMore:Xy,learnMore2:Ky,copyButton:Jy,codeBlock:Yy,toggleSwitch:Zy,slider:ex},tx=[{label:"Sign On",className:"buttonText",tsxCode:"<div className={styles.buttonText}>Sign On</div>",cssCode:`
.buttonText {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 20px 20px;
}

.buttonText:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `},{label:"Sign On White",className:"signOn1",tsxCode:"<div className={styles.signOn1}>Sign On</div>",cssCode:`
.signOn1 {
  width: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  font-weight: 550;
}

.signOn1:hover {
  text-decoration: underline;
}
    `},{label:"Sign On Purple",className:"signOn2",tsxCode:"<div className={styles.signOn2}>Sign On</div>",cssCode:`
.signOn2 {
  width: 130px;
  background-color: #352b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 20px 20px;
  border: 1px solid;
}

.signOn2:hover {
  text-decoration: underline;
  background-color: #1f1940;
}
    `},{label:"Learn More",className:"learnMore",tsxCode:"<div className={styles.learnMore}>Learn More</div>",cssCode:`
.learnMore {
  width: 130px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  border: 1px solid;
}

.learnMore:hover {
  background-color: #000000;
  color: #ffffff;
}
    `},{label:"Learn More Red",className:"learnMore2",tsxCode:"<div className={styles.learnMore2}>Learn More</div>",cssCode:`
.learnMore2 {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 10px 10px;
  border: 1px solid;
  font-size: 17px;
  font-weight: 400;
}

.learnMore2:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `},{label:"Continue",className:"buttonText",tsxCode:"<div className={styles.buttonText}>Continue</div>",cssCode:`
.buttonText {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 20px 20px;
}

.buttonText:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `},{label:"Get Started",className:"learnMore",tsxCode:"<div className={styles.learnMore}>Get Started</div>",cssCode:`
.learnMore {
  width: 130px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  border: 1px solid;
}

.learnMore:hover {
  background-color: #000000;
  color: #ffffff;
}
    `},{label:"Cancel",className:"learnMore",tsxCode:"<div className={styles.learnMore}>Cancel</div>",cssCode:`
.learnMore {
  width: 130px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  border: 1px solid;
}

.learnMore:hover {
  background-color: #000000;
  color: #ffffff;
}
    `},{label:"Search",className:"learnMore2",tsxCode:"<div className={styles.learnMore2}>Search</div>",cssCode:`
.learnMore2 {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 10px 10px;
  border: 1px solid;
  font-size: 17px;
  font-weight: 400;
}

.learnMore2:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `},{label:"Join Now",className:"learnMore2",tsxCode:"<div className={styles.learnMore2}>Join Now</div>",cssCode:`
.learnMore2 {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 10px 10px;
  border: 1px solid;
  font-size: 17px;
  font-weight: 400;
}

.learnMore2:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `}],If=()=>{const[e,t]=C.useState(null),[n,r]=C.useState({}),o=a=>{navigator.clipboard.writeText(a),t(a),setTimeout(()=>t(null),2e3)},i=a=>{r(l=>({...l,[a]:!l[a]}))};return s.jsxs("div",{className:Bt.buttonPage,children:[s.jsx("h1",{children:"Button Components"}),s.jsx("div",{className:Bt.buttonGrid,children:tx.map((a,l)=>s.jsxs("div",{className:Bt.buttonSection,children:[s.jsx("div",{className:Bt.buttonExample,children:s.jsx("div",{className:Bt[a.className],children:a.label})}),s.jsxs("label",{className:Bt.toggleSwitch,children:[s.jsx("input",{type:"checkbox",checked:n[l]||!1,onChange:()=>i(l)}),s.jsx("span",{className:Bt.slider})]}),s.jsx("button",{className:Bt.copyButton,onClick:()=>o(n[l]?a.cssCode:a.tsxCode),children:e===(n[l]?a.cssCode:a.tsxCode)?"Copied!":"Copy Code"}),s.jsx("pre",{className:Bt.codeBlock,children:n[l]?a.cssCode:a.tsxCode})]},l))})]})},nx="_cardSectionContainer_6gyg9_1",rx="_cardsWrapper_6gyg9_5",ox="_cardWrapper_6gyg9_11",ix="_card_6gyg9_1",sx="_cardImage_6gyg9_28",ax="_cardContent_6gyg9_39",lx="_cardButton_6gyg9_43",cx="_toggleContainer_6gyg9_57",ux="_toggleButton_6gyg9_63",dx="_active_6gyg9_72",px="_codeContainer_6gyg9_76",fx="_code_6gyg9_76",mx="_copyButton_6gyg9_93",hx="_copied_6gyg9_106",F={cardSectionContainer:nx,cardsWrapper:rx,cardWrapper:ox,card:ix,cardImage:sx,cardContent:ax,cardButton:lx,toggleContainer:cx,toggleButton:ux,active:dx,codeContainer:px,code:fx,copyButton:mx,copied:hx},Ff=()=>{const[e,t]=C.useState(null),[n,r]=C.useState("tsx"),[o,i]=C.useState(!1),a=[{id:"1",title:"Earn up to 60,000 bonus points",description:"with the Choice Privileges® Mastercard® Credit Cards",buttonText:"Learn more",imageUrl:"150 x 150"},{id:"2",title:"Plan. Prepare. Enjoy home.",description:"Discover tools and tips to help make buying or refinancing a little easier",buttonText:"Get tips for homebuying",imageUrl:"150 x 150"},{id:"3",title:"Save. Invest. Retire well.",description:"Discover how to start saving to meet your retirement goals",buttonText:"Get ready for retirement",imageUrl:"150 x 150"},{id:"4",title:"Scams are on the rise. Protect yourself.",description:"Recognize the tell-tale signs of scams so you won't be the next victim.",buttonText:"See what to look for",imageUrl:"150 x 150"},{id:"5",title:"Investment Strategy update",description:"Weekly market insights and possible impacts on investors from Wells Fargo Investment Institute.",buttonText:"Get the report",imageUrl:"150 x 150"},{id:"6",title:"Get ready for retirement",description:"Discover how to start saving to meet your retirement goals.",buttonText:"Learn more",imageUrl:"150 x 150"}],l=u=>{navigator.clipboard.writeText(u),i(!0),setTimeout(()=>i(!1),2e3)},c=u=>{var v,y,x,j;if(u!==e)return null;const d=`<div className={styles.card}>
  <div className={styles.cardImage}>
    ${(v=a.find(g=>g.id===u))==null?void 0:v.imageUrl}
  </div>
  <div className={styles.cardContent}>
    <h3>${(y=a.find(g=>g.id===u))==null?void 0:y.title}</h3>
    <p>${(x=a.find(g=>g.id===u))==null?void 0:x.description}</p>
    <button className={styles.cardButton}>
      ${(j=a.find(g=>g.id===u))==null?void 0:j.buttonText}
    </button>
  </div>
</div>`,m=n==="tsx"?d:`.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.cardImage {
  background-color: #eee;
  border-radius: 5px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #aaa;
}

.cardContent {
  margin-top: 15px;
}

.cardButton {
  background-color: #dd1e25;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cardButton:hover {
  background-color: #b01c24;
}`;return s.jsxs("div",{className:F.codeContainer,children:[s.jsx("button",{className:`${F.copyButton} ${o?F.copied:""}`,onClick:()=>l(m),children:o?"Copied!":"Copy"}),s.jsx("pre",{className:F.code,children:m})]})};return s.jsxs("div",{className:F.cardSectionContainer,children:[s.jsx("h2",{children:"Card Section"}),s.jsx("h3",{children:"Rewards Cards"}),s.jsx("div",{className:F.cardsWrapper,children:a.slice(0,2).map(u=>s.jsxs("div",{className:F.cardWrapper,children:[s.jsxs("div",{className:F.card,children:[s.jsx("div",{className:F.cardImage,children:u.imageUrl}),s.jsxs("div",{className:F.cardContent,children:[s.jsx("h3",{children:u.title}),s.jsx("p",{children:u.description}),s.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),s.jsxs("div",{className:F.toggleContainer,children:[s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),s.jsx("h3",{children:"Home Improvement Cards"}),s.jsx("div",{className:F.cardsWrapper,children:a.slice(2,4).map(u=>s.jsxs("div",{className:F.cardWrapper,children:[s.jsxs("div",{className:F.card,children:[s.jsx("div",{className:F.cardImage,children:u.imageUrl}),s.jsxs("div",{className:F.cardContent,children:[s.jsx("h3",{children:u.title}),s.jsx("p",{children:u.description}),s.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),s.jsxs("div",{className:F.toggleContainer,children:[s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),s.jsx("h3",{children:"Security and Investment Cards"}),s.jsx("div",{className:F.cardsWrapper,children:a.slice(4,6).map(u=>s.jsxs("div",{className:F.cardWrapper,children:[s.jsxs("div",{className:F.card,children:[s.jsx("div",{className:F.cardImage,children:u.imageUrl}),s.jsxs("div",{className:F.cardContent,children:[s.jsx("h3",{children:u.title}),s.jsx("p",{children:u.description}),s.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),s.jsxs("div",{className:F.toggleContainer,children:[s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))})]})},gx="_navbarSection_b7mxw_1",vx="_navbar_b7mxw_1",yx="_navbarSecondary_b7mxw_5",xx="_logo_b7mxw_18",Sx="_hamburger_b7mxw_25",_x="_navLinks_b7mxw_34",wx="_navLink_b7mxw_34",Cx="_closeBtn_b7mxw_50",jx="_profileMenuContainer_b7mxw_54",Nx="_userIcon_b7mxw_58",bx="_profileMenu_b7mxw_54",kx="_open_b7mxw_104",Px="_codeBlock_b7mxw_130",Ex="_toggleContainer_b7mxw_158",Bx="_toggleButton_b7mxw_164",Tx="_active_b7mxw_191",D={navbarSection:gx,navbar:vx,navbarSecondary:yx,logo:xx,hamburger:Sx,navLinks:_x,navLink:wx,closeBtn:Cx,profileMenuContainer:jx,userIcon:Nx,profileMenu:bx,open:kx,codeBlock:Px,toggleContainer:Ex,toggleButton:Bx,active:Tx},zf=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState(null),[a,l]=C.useState(!1),c=()=>{t(!e)},u=()=>{r(!n)},d=()=>{},f=g=>{o===g?l(!a):(i(g),l(!1))},m=g=>{navigator.clipboard.writeText(g).then(()=>{alert("Code copied to clipboard")})},v=`
<nav className={styles.navbar}>
  <div className={styles.logo}>
    <Link to="/">
      <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
    </Link>
  </div>
  <button className={styles.hamburger} onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
  <ul className={\`\${styles.navLinks} \${isMobileMenuOpen ? styles.open : ''}\`}>
    <li className={styles.closeBtn} onClick={toggleMobileMenu}>
      &times;
    </li>
    <li>
      <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
    </li>
    <li>
      <Link to="/services" className={styles.navLink} onClick={toggleMobileMenu}>Services</Link>
    </li>
    <li>
      <Link to="/about" className={styles.navLink} onClick={toggleMobileMenu}>About</Link>
    </li>
    <li>
      <Link to="/contact" className={styles.navLink} onClick={toggleMobileMenu}>Contact</Link>
    </li>
    <li className={styles.userActions}>
      <FaUserCircle className={styles.userIcon} onClick={toggleProfileMenu} />
      {isProfileMenuOpen && (
        <div className={styles.profileMenu}>
          <Link to="/profile" className={styles.navLink} onClick={toggleProfileMenu}>Profile</Link>
          <button className={styles.navLink} onClick={handleLogout}>Logout</button>
        </div>
      )}
    </li>
  </ul>
</nav>
`,y=`
.navbarSection {
  margin-bottom: 2rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #d71e28; /* Wells Fargo red */
  border-bottom: 4px solid #ffcd41; /* Yellow border */
  color: #fff;
  border-top-left-radius: 10px; /* Rounded top left corner */
  border-top-right-radius: 10px; /* Rounded top right corner */
  position: relative;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
}

.navLinks {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navLink {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.navLink:hover {
  color: #ffcd41; /* Yellow on hover */
}

.closeBtn {
  display: none;
}

.profileMenuContainer {
  position: relative;
}

.userIcon {
  font-size: 2rem;
  cursor: pointer;
}

.profileMenu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.profileMenu .navLink {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.profileMenu .navLink:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .navLinks {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: inherit;
    flex-direction: column;
    align-items: center;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .navLinks.open {
    transform: translateX(0);
  }

  .navLink {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    font-size: 1.2rem; /* Responsive font size */
  }

  .closeBtn {
    display: block;
    font-size: 2rem;
    color: #ffcd41; /* Yellow color */
    cursor: pointer;
    align-self: flex-end;
    padding: 1rem;
  }

  .logo a {
    font-size: 1.2rem;
  }
}
`,x=`
<nav className={styles.navbar}>
  <div className={styles.logo}>
    <Link to="/">
      <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
    </Link>
  </div>
  <button className={styles.hamburger} onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
  <ul className={\`\${styles.navLinks} \${isMobileMenuOpen ? styles.open : ''}\`}>
    <li className={styles.closeBtn} onClick={toggleMobileMenu}>
      &times;
    </li>
    <li>
      <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
    </li>
    <li>
      <Link to="/features" className={styles.navLink} onClick={toggleMobileMenu}>Features</Link>
    </li>
    <li>
      <Link to="/pricing" className={styles.navLink} onClick={toggleMobileMenu}>Pricing</Link>
    </li>
    <li>
      <Link to="/faq" className={styles.navLink} onClick={toggleMobileMenu}>FAQ</Link>
    </li>
  </ul>
</nav>
`,j=`
.navbarSection {
  margin-bottom: 2rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #d71e28; /* Wells Fargo red */
  border-bottom: 4px solid #ffcd41; /* Yellow border */
  color: #fff;
  border-top-left-radius: 10px; /* Rounded top left corner */
  border-top-right-radius: 10px; /* Rounded top right corner */
  position: relative;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
}

.navLinks {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navLink {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.navLink:hover {
  color: #ffcd41; /* Yellow on hover */
}

.closeBtn {
  display: none;
}

.profileMenuContainer {
  position: relative;
}

.userIcon {
  font-size: 2rem;
  cursor: pointer;
}

.profileMenu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.profileMenu .navLink {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.profileMenu .navLink:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .navLinks {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: inherit;
    flex-direction: column;
    align-items: center;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .navLinks.open {
    transform: translateX(0);
  }

  .navLink {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    font-size: 1.2rem; /* Responsive font size */
  }

  .closeBtn {
    display: block;
    font-size: 2rem;
    color: #ffcd41; /* Yellow color */
    cursor: pointer;
    align-self: flex-end;
    padding: 1rem;
  }

  .logo a {
    font-size: 1.2rem;
  }
}
`;return s.jsxs("div",{className:D.navbarSection,children:[s.jsx("h2",{children:"Navbar 1"}),s.jsxs("nav",{className:D.navbar,children:[s.jsx("div",{className:D.logo,children:s.jsx(O,{to:"/",children:s.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:D.logoImage})})}),s.jsx("button",{className:D.hamburger,onClick:c,children:e?s.jsx(Ou,{}):s.jsx(Ru,{})}),s.jsxs("ul",{className:`${D.navLinks} ${e?D.open:""}`,children:[s.jsx("li",{className:D.closeBtn,onClick:c,children:"×"}),s.jsx("li",{children:s.jsx(O,{to:"/",className:D.navLink,onClick:c,children:"Home"})}),s.jsx("li",{children:s.jsx(O,{to:"/services",className:D.navLink,onClick:c,children:"Services"})}),s.jsx("li",{children:s.jsx(O,{to:"/about",className:D.navLink,onClick:c,children:"About"})}),s.jsx("li",{children:s.jsx(O,{to:"/contact",className:D.navLink,onClick:c,children:"Contact"})}),s.jsxs("li",{className:D.userActions,children:[s.jsx(Bf,{className:D.userIcon,onClick:u}),n&&s.jsxs("div",{className:D.profileMenu,children:[s.jsx(O,{to:"/profile",className:D.navLink,onClick:u,children:"Profile"}),s.jsx("button",{className:D.navLink,onClick:d,children:"Logout"})]})]})]})]}),s.jsx("div",{className:D.toggleContainer,children:s.jsx("button",{className:`${D.toggleButton} ${o==="navbar1"&&a?D.active:""}`,onClick:()=>f("navbar1"),children:o==="navbar1"&&a?"CSS":"TSX"})}),o==="navbar1"&&s.jsxs("div",{className:D.codeBlock,children:[s.jsx("pre",{children:s.jsx("code",{children:a?y:v})}),s.jsxs("button",{onClick:()=>m(a?y:v),children:["Copy ",a?"CSS":"TSX"]})]}),s.jsx("div",{style:{marginBottom:"2rem"}}),s.jsx("h2",{children:"Navbar 2"}),s.jsxs("nav",{className:D.navbar,children:[s.jsx("div",{className:D.logo,children:s.jsx(O,{to:"/",children:s.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:D.logoImage})})}),s.jsx("button",{className:D.hamburger,onClick:c,children:e?s.jsx(Ou,{}):s.jsx(Ru,{})}),s.jsxs("ul",{className:`${D.navLinks} ${e?D.open:""}`,children:[s.jsx("li",{className:D.closeBtn,onClick:c,children:"×"}),s.jsx("li",{children:s.jsx(O,{to:"/",className:D.navLink,onClick:c,children:"Home"})}),s.jsx("li",{children:s.jsx(O,{to:"/features",className:D.navLink,onClick:c,children:"Features"})}),s.jsx("li",{children:s.jsx(O,{to:"/pricing",className:D.navLink,onClick:c,children:"Pricing"})}),s.jsx("li",{children:s.jsx(O,{to:"/faq",className:D.navLink,onClick:c,children:"FAQ"})})]})]}),s.jsx("div",{className:D.toggleContainer,children:s.jsx("button",{className:`${D.toggleButton} ${o==="navbar2"&&a?D.active:""}`,onClick:()=>f("navbar2"),children:o==="navbar2"&&a?"CSS":"TSX"})}),o==="navbar2"&&s.jsxs("div",{className:D.codeBlock,children:[s.jsx("pre",{children:s.jsx("code",{children:a?j:x})}),s.jsxs("button",{onClick:()=>m(a?j:x),children:["Copy ",a?"CSS":"TSX"]})]})]})},Lx={},Rx=()=>s.jsx("div",{className:Lx.ImageGallery}),Ox={},Mx=()=>s.jsx("div",{className:Ox.Chart}),$x={},Ix=()=>s.jsx("div",{className:$x.Divider}),Fx=()=>{const[e,t]=C.useState(""),n=[{name:"Hero Section",category:"Hero Section",count:12,component:Tf},{name:"Feature Section",category:"Feature Section",count:18,component:Lf},{name:"CTA Section",category:"CTA Section",count:11,component:Rf},{name:"Pricing Page",category:"Pricing Page",count:13,component:Of},{name:"Header Section",category:"Header Section",count:10,component:V0},{name:"Footer Section",category:"Footer Section",count:7,component:Q0},{name:"Testimonials Section",category:"Testimonials Section",count:7,component:K0},{name:"FAQ Section",category:"FAQ Section",count:5,component:Y0},{name:"Team Section",category:"Team Section",count:5,component:ey},{name:"Newsletter Section",category:"Newsletter Section",count:7,component:ny}],r=[{name:"Landing Page",category:"Landing Page",count:5,component:oy},{name:"About Page",category:"About Page",count:8,component:Mf},{name:"Contact Page",category:"Contact Page",count:4,component:my},{name:"Login Page",category:"Login Page",count:4,component:$f},{name:"Registration Page",category:"Registration Page",count:4,component:Sy},{name:"Dashboard Page",category:"Dashboard Page",count:4,component:wy},{name:"Profile Page",category:"Profile Page",count:4,component:jy}],o=[{name:"Grid Layout",category:"Grid Layout",count:10,component:by},{name:"Flex Layout",category:"Flex Layout",count:7,component:Py}],i=[{name:"Login Form",category:"Login Form",count:6,component:By},{name:"Registration Form",category:"Registration Form",count:9,component:Ly},{name:"Contact Form",category:"Contact Form",count:4,component:Oy},{name:"Subscription Form",category:"Subscription Form",count:4,component:$y},{name:"Feedback Form",category:"Feedback Form",count:4,component:Fy},{name:"Search Form",category:"Search Form",count:4,component:Ay}],a=[{name:"Button",category:"Button",count:8,component:If},{name:"Card Section",category:"Card Section",count:12,component:Ff}],l=[{name:"Navbar Section",category:"Navbar Section",count:5,component:zf}],c=[{name:"Image Gallery",category:"Image Gallery",count:4,component:Rx}],u=[{name:"Chart",category:"Chart",count:4,component:Mx}],d=[{name:"Divider",category:"Divider",count:3,component:Ix}],f=m=>m.filter(v=>v.name.toLowerCase().includes(e.toLowerCase()));return s.jsxs("div",{className:P.componentsContainer,children:[s.jsxs("div",{className:P.heroSection,children:[s.jsx("h1",{children:"Huge collection of sections"}),s.jsx("h2",{children:"Infinite combinations"}),s.jsx("p",{children:"Discover a multitude of customizable options to craft pixel-perfect pages with ease."}),s.jsx("div",{className:P.searchBox,children:s.jsx("input",{type:"text",placeholder:"Search for multiple components...",value:e,onChange:m=>t(m.target.value)})})]}),s.jsxs("div",{className:P.sectionsContainer,children:[s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Page Sections"}),s.jsx("div",{className:P.blocksContainer,children:f(n).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Pages"}),s.jsx("div",{className:P.blocksContainer,children:f(r).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Layouts"}),s.jsx("div",{className:P.blocksContainer,children:f(o).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Forms"}),s.jsx("div",{className:P.blocksContainer,children:f(i).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"UI Elements"}),s.jsx("div",{className:P.blocksContainer,children:f(a).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Navigation"}),s.jsx("div",{className:P.blocksContainer,children:f(l).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Media"}),s.jsx("div",{className:P.blocksContainer,children:f(c).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Data Display"}),s.jsx("div",{className:P.blocksContainer,children:f(u).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Utility Components"}),s.jsx("div",{className:P.blocksContainer,children:f(d).map((m,v)=>s.jsx(O,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]})]})]})},zx=()=>s.jsx("div",{children:"Utilities"}),Ax=()=>s.jsx("div",{children:"Documentation"}),Dx=()=>s.jsx("div",{children:"Examples"});function Af(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ux}=Object.prototype,{getPrototypeOf:sc}=Object,as=(e=>t=>{const n=Ux.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),St=e=>(e=e.toLowerCase(),t=>as(t)===e),ls=e=>t=>typeof t===e,{isArray:gr}=Array,po=ls("undefined");function Hx(e){return e!==null&&!po(e)&&e.constructor!==null&&!po(e.constructor)&&st(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Df=St("ArrayBuffer");function Wx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Df(e.buffer),t}const qx=ls("string"),st=ls("function"),Uf=ls("number"),cs=e=>e!==null&&typeof e=="object",Vx=e=>e===!0||e===!1,ai=e=>{if(as(e)!=="object")return!1;const t=sc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Gx=St("Date"),Qx=St("File"),Xx=St("Blob"),Kx=St("FileList"),Jx=e=>cs(e)&&st(e.pipe),Yx=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||st(e.append)&&((t=as(e))==="formdata"||t==="object"&&st(e.toString)&&e.toString()==="[object FormData]"))},Zx=St("URLSearchParams"),[e1,t1,n1,r1]=["ReadableStream","Request","Response","Headers"].map(St),o1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function So(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),gr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function Hf(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qf=e=>!po(e)&&e!==Wf;function Ya(){const{caseless:e}=qf(this)&&this||{},t={},n=(r,o)=>{const i=e&&Hf(t,o)||o;ai(t[i])&&ai(r)?t[i]=Ya(t[i],r):ai(r)?t[i]=Ya({},r):gr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&So(arguments[r],n);return t}const i1=(e,t,n,{allOwnKeys:r}={})=>(So(t,(o,i)=>{n&&st(o)?e[i]=Af(o,n):e[i]=o},{allOwnKeys:r}),e),s1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),a1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},l1=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&sc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},c1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},u1=e=>{if(!e)return null;if(gr(e))return e;let t=e.length;if(!Uf(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},d1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&sc(Uint8Array)),p1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},f1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},m1=St("HTMLFormElement"),h1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Mu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),g1=St("RegExp"),Vf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};So(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},v1=e=>{Vf(e,(t,n)=>{if(st(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(st(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},y1=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return gr(e)?r(e):r(String(e).split(t)),n},x1=()=>{},S1=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Gs="abcdefghijklmnopqrstuvwxyz",$u="0123456789",Gf={DIGIT:$u,ALPHA:Gs,ALPHA_DIGIT:Gs+Gs.toUpperCase()+$u},_1=(e=16,t=Gf.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function w1(e){return!!(e&&st(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const C1=e=>{const t=new Array(10),n=(r,o)=>{if(cs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=gr(r)?[]:{};return So(r,(a,l)=>{const c=n(a,o+1);!po(c)&&(i[l]=c)}),t[o]=void 0,i}}return r};return n(e,0)},j1=St("AsyncFunction"),N1=e=>e&&(cs(e)||st(e))&&st(e.then)&&st(e.catch),w={isArray:gr,isArrayBuffer:Df,isBuffer:Hx,isFormData:Yx,isArrayBufferView:Wx,isString:qx,isNumber:Uf,isBoolean:Vx,isObject:cs,isPlainObject:ai,isReadableStream:e1,isRequest:t1,isResponse:n1,isHeaders:r1,isUndefined:po,isDate:Gx,isFile:Qx,isBlob:Xx,isRegExp:g1,isFunction:st,isStream:Jx,isURLSearchParams:Zx,isTypedArray:d1,isFileList:Kx,forEach:So,merge:Ya,extend:i1,trim:o1,stripBOM:s1,inherits:a1,toFlatObject:l1,kindOf:as,kindOfTest:St,endsWith:c1,toArray:u1,forEachEntry:p1,matchAll:f1,isHTMLForm:m1,hasOwnProperty:Mu,hasOwnProp:Mu,reduceDescriptors:Vf,freezeMethods:v1,toObjectSet:y1,toCamelCase:h1,noop:x1,toFiniteNumber:S1,findKey:Hf,global:Wf,isContextDefined:qf,ALPHABET:Gf,generateString:_1,isSpecCompliantForm:w1,toJSONObject:C1,isAsyncFn:j1,isThenable:N1};function L(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}w.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qf=L.prototype,Xf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Xf[e]={value:e}});Object.defineProperties(L,Xf);Object.defineProperty(Qf,"isAxiosError",{value:!0});L.from=(e,t,n,r,o,i)=>{const a=Object.create(Qf);return w.toFlatObject(e,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),L.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const b1=null;function Za(e){return w.isPlainObject(e)||w.isArray(e)}function Kf(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function Iu(e,t,n){return e?e.concat(t).map(function(o,i){return o=Kf(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function k1(e){return w.isArray(e)&&!e.some(Za)}const P1=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function us(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,j){return!w.isUndefined(j[x])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(w.isDate(y))return y.toISOString();if(!c&&w.isBlob(y))throw new L("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(y)||w.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,x,j){let g=y;if(y&&!j&&typeof y=="object"){if(w.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(w.isArray(y)&&k1(y)||(w.isFileList(y)||w.endsWith(x,"[]"))&&(g=w.toArray(y)))return x=Kf(x),g.forEach(function(h,S){!(w.isUndefined(h)||h===null)&&t.append(a===!0?Iu([x],S,i):a===null?x:x+"[]",u(h))}),!1}return Za(y)?!0:(t.append(Iu(j,x,i),u(y)),!1)}const f=[],m=Object.assign(P1,{defaultVisitor:d,convertValue:u,isVisitable:Za});function v(y,x){if(!w.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(y),w.forEach(y,function(g,p){(!(w.isUndefined(g)||g===null)&&o.call(t,g,w.isString(p)?p.trim():p,x,m))===!0&&v(g,x?x.concat(p):[p])}),f.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Fu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ac(e,t){this._pairs=[],e&&us(e,this,t)}const Jf=ac.prototype;Jf.append=function(t,n){this._pairs.push([t,n])};Jf.toString=function(t){const n=t?function(r){return t.call(this,r,Fu)}:Fu;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function E1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yf(e,t,n){if(!t)return e;const r=n&&n.encode||E1,o=n&&n.serialize;let i;if(o?i=o(t,n):i=w.isURLSearchParams(t)?t.toString():new ac(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class zu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Zf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},B1=typeof URLSearchParams<"u"?URLSearchParams:ac,T1=typeof FormData<"u"?FormData:null,L1=typeof Blob<"u"?Blob:null,R1={isBrowser:!0,classes:{URLSearchParams:B1,FormData:T1,Blob:L1},protocols:["http","https","file","blob","url","data"]},lc=typeof window<"u"&&typeof document<"u",O1=(e=>lc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),M1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$1=lc&&window.location.href||"http://localhost",I1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lc,hasStandardBrowserEnv:O1,hasStandardBrowserWebWorkerEnv:M1,origin:$1},Symbol.toStringTag,{value:"Module"})),yt={...I1,...R1};function F1(e,t){return us(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return yt.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function z1(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function A1(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function em(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=n.length;return a=!a&&w.isArray(o)?o.length:a,c?(w.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!w.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&w.isArray(o[a])&&(o[a]=A1(o[a])),!l)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,o)=>{t(z1(r),o,n,0)}),n}return null}function D1(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const _o={transitional:Zf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=w.isObject(t);if(i&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return o?JSON.stringify(em(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return F1(t,this.formSerializer).toString();if((l=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return us(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),D1(t)):t}],transformResponse:[function(t){const n=this.transitional||_o.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?L.from(l,L.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{_o.headers[e]={}});const U1=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),H1=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&U1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Au=Symbol("internals");function Er(e){return e&&String(e).trim().toLowerCase()}function li(e){return e===!1||e==null?e:w.isArray(e)?e.map(li):String(e)}function W1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const q1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Qs(e,t,n,r,o){if(w.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function V1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function G1(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class qe{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,c,u){const d=Er(c);if(!d)throw new Error("header name must be a non-empty string");const f=w.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||c]=li(l))}const a=(l,c)=>w.forEach(l,(u,d)=>i(u,d,c));if(w.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(w.isString(t)&&(t=t.trim())&&!q1(t))a(H1(t),n);else if(w.isHeaders(t))for(const[l,c]of t.entries())i(c,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Er(t),t){const r=w.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return W1(o);if(w.isFunction(n))return n.call(this,o,r);if(w.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Er(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Qs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Er(a),a){const l=w.findKey(r,a);l&&(!n||Qs(r,r[l],l,n))&&(delete r[l],o=!0)}}return w.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Qs(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return w.forEach(this,(o,i)=>{const a=w.findKey(r,i);if(a){n[a]=li(o),delete n[i];return}const l=t?V1(i):String(i).trim();l!==i&&delete n[i],n[l]=li(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Au]=this[Au]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=Er(a);r[l]||(G1(o,a),r[l]=!0)}return w.isArray(t)?t.forEach(i):i(t),this}}qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(qe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});w.freezeMethods(qe);function Xs(e,t){const n=this||_o,r=t||n,o=qe.from(r.headers);let i=r.data;return w.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function tm(e){return!!(e&&e.__CANCEL__)}function vr(e,t,n){L.call(this,e??"canceled",L.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits(vr,L,{__CANCEL__:!0});function nm(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L("Request failed with status code "+n.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Q1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function X1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];a||(a=u),n[o]=c,r[o]=u;let f=i,m=0;for(;f!==o;)m+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=d&&u-d;return v?Math.round(m*1e3/v):void 0}}function K1(e,t){let n=0;const r=1e3/t;let o=null;return function(){const a=this===!0,l=Date.now();if(a||l-n>r)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const Ii=(e,t,n=3)=>{let r=0;const o=X1(50,250);return K1(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=a-r,u=o(c),d=a<=l;r=a;const f={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-a)/u:void 0,event:i,lengthComputable:l!=null};f[t?"download":"upload"]=!0,e(f)},n)},J1=yt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=w.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Y1=yt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];w.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),w.isString(r)&&a.push("path="+r),w.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Z1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function eS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function rm(e,t){return e&&!Z1(t)?eS(e,t):t}const Du=e=>e instanceof qe?{...e}:e;function Mn(e,t){t=t||{};const n={};function r(u,d,f){return w.isPlainObject(u)&&w.isPlainObject(d)?w.merge.call({caseless:f},u,d):w.isPlainObject(d)?w.merge({},d):w.isArray(d)?d.slice():d}function o(u,d,f){if(w.isUndefined(d)){if(!w.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function i(u,d){if(!w.isUndefined(d))return r(void 0,d)}function a(u,d){if(w.isUndefined(d)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(Du(u),Du(d),!0)};return w.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=c[d]||o,m=f(e[d],t[d],d);w.isUndefined(m)&&f!==l||(n[d]=m)}),n}const om=e=>{const t=Mn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=t;t.headers=a=qe.from(a),t.url=Yf(rm(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(w.isFormData(n)){if(yt.hasStandardBrowserEnv||yt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[u,...d]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...d].join("; "))}}if(yt.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&J1(t.url))){const u=o&&i&&Y1.read(i);u&&a.set(o,u)}return t},tS=typeof XMLHttpRequest<"u",nS=tS&&function(e){return new Promise(function(n,r){const o=om(e);let i=o.data;const a=qe.from(o.headers).normalize();let{responseType:l}=o,c;function u(){o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let d=new XMLHttpRequest;d.open(o.method.toUpperCase(),o.url,!0),d.timeout=o.timeout;function f(){if(!d)return;const v=qe.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),x={data:!l||l==="text"||l==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};nm(function(g){n(g),u()},function(g){r(g),u()},x),d=null}"onloadend"in d?d.onloadend=f:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(f)},d.onabort=function(){d&&(r(new L("Request aborted",L.ECONNABORTED,o,d)),d=null)},d.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,o,d)),d=null},d.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const x=o.transitional||Zf;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new L(y,x.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,o,d)),d=null},i===void 0&&a.setContentType(null),"setRequestHeader"in d&&w.forEach(a.toJSON(),function(y,x){d.setRequestHeader(x,y)}),w.isUndefined(o.withCredentials)||(d.withCredentials=!!o.withCredentials),l&&l!=="json"&&(d.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&d.addEventListener("progress",Ii(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Ii(o.onUploadProgress)),(o.cancelToken||o.signal)&&(c=v=>{d&&(r(!v||v.type?new vr(null,e,d):v),d.abort(),d=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const m=Q1(o.url);if(m&&yt.protocols.indexOf(m)===-1){r(new L("Unsupported protocol "+m+":",L.ERR_BAD_REQUEST,e));return}d.send(i||null)})},rS=(e,t)=>{let n=new AbortController,r;const o=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof L?u:new vr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new L(`timeout ${t} of ms exceeded`,L.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",o):c.unsubscribe(o))}),e=null)};e.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=a,[l,()=>{i&&clearTimeout(i),i=null}]},oS=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},iS=async function*(e,t,n){for await(const r of e)yield*oS(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Uu=(e,t,n,r,o)=>{const i=iS(e,t,o);let a=0;return new ReadableStream({type:"bytes",async pull(l){const{done:c,value:u}=await i.next();if(c){l.close(),r();return}let d=u.byteLength;n&&n(a+=d),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),i.return()}},{highWaterMark:2})},Hu=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},ds=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",im=ds&&typeof ReadableStream=="function",el=ds&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),sS=im&&(()=>{let e=!1;const t=new Request(yt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Wu=64*1024,tl=im&&!!(()=>{try{return w.isReadableStream(new Response("").body)}catch{}})(),Fi={stream:tl&&(e=>e.body)};ds&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Fi[t]&&(Fi[t]=w.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new L(`Response type '${t}' is not supported`,L.ERR_NOT_SUPPORT,r)})})})(new Response);const aS=async e=>{if(e==null)return 0;if(w.isBlob(e))return e.size;if(w.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(w.isArrayBufferView(e))return e.byteLength;if(w.isURLSearchParams(e)&&(e=e+""),w.isString(e))return(await el(e)).byteLength},lS=async(e,t)=>{const n=w.toFiniteNumber(e.getContentLength());return n??aS(t)},cS=ds&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:m}=om(e);u=u?(u+"").toLowerCase():"text";let[v,y]=o||i||a?rS([o,i],a):[],x,j;const g=()=>{!x&&setTimeout(()=>{v&&v.unsubscribe()}),x=!0};let p;try{if(c&&sS&&n!=="get"&&n!=="head"&&(p=await lS(d,r))!==0){let b=new Request(t,{method:"POST",body:r,duplex:"half"}),E;w.isFormData(r)&&(E=b.headers.get("content-type"))&&d.setContentType(E),b.body&&(r=Uu(b.body,Wu,Hu(p,Ii(c)),null,el))}w.isString(f)||(f=f?"cors":"omit"),j=new Request(t,{...m,signal:v,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let h=await fetch(j);const S=tl&&(u==="stream"||u==="response");if(tl&&(l||S)){const b={};["status","statusText","headers"].forEach(k=>{b[k]=h[k]});const E=w.toFiniteNumber(h.headers.get("content-length"));h=new Response(Uu(h.body,Wu,l&&Hu(E,Ii(l,!0)),S&&g,el),b)}u=u||"text";let _=await Fi[w.findKey(Fi,u)||"text"](h,e);return!S&&g(),y&&y(),await new Promise((b,E)=>{nm(b,E,{data:_,headers:qe.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:j})})}catch(h){throw g(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new L("Network Error",L.ERR_NETWORK,e,j),{cause:h.cause||h}):L.from(h,h&&h.code,e,j)}}),nl={http:b1,xhr:nS,fetch:cS};w.forEach(nl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const qu=e=>`- ${e}`,uS=e=>w.isFunction(e)||e===null||e===!1,sm={getAdapter:e=>{e=w.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!uS(n)&&(r=nl[(a=String(n)).toLowerCase()],r===void 0))throw new L(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(qu).join(`
`):" "+qu(i[0]):"as no adapter specified";throw new L("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:nl};function Ks(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vr(null,e)}function Vu(e){return Ks(e),e.headers=qe.from(e.headers),e.data=Xs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sm.getAdapter(e.adapter||_o.adapter)(e).then(function(r){return Ks(e),r.data=Xs.call(e,e.transformResponse,r),r.headers=qe.from(r.headers),r},function(r){return tm(r)||(Ks(e),r&&r.response&&(r.response.data=Xs.call(e,e.transformResponse,r.response),r.response.headers=qe.from(r.response.headers))),Promise.reject(r)})}const am="1.7.2",cc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{cc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Gu={};cc.transitional=function(t,n,r){function o(i,a){return"[Axios v"+am+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new L(o(a," has been removed"+(n?" in "+n:"")),L.ERR_DEPRECATED);return n&&!Gu[a]&&(Gu[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function dS(e,t,n){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],c=l===void 0||a(l,i,e);if(c!==!0)throw new L("option "+i+" must be "+c,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L("Unknown option "+i,L.ERR_BAD_OPTION)}}const rl={assertOptions:dS,validators:cc},qt=rl.validators;class En{constructor(t){this.defaults=t,this.interceptors={request:new zu,response:new zu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&rl.assertOptions(r,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1),o!=null&&(w.isFunction(o)?n.paramsSerializer={serialize:o}:rl.assertOptions(o,{encode:qt.function,serialize:qt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&w.merge(i.common,i[n.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=qe.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,f=0,m;if(!c){const y=[Vu.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),m=y.length,d=Promise.resolve(n);f<m;)d=d.then(y[f++],y[f++]);return d}m=l.length;let v=n;for(f=0;f<m;){const y=l[f++],x=l[f++];try{v=y(v)}catch(j){x.call(this,j);break}}try{d=Vu.call(this,v)}catch(y){return Promise.reject(y)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Mn(this.defaults,t);const n=rm(t.baseURL,t.url);return Yf(n,t.params,t.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(t){En.prototype[t]=function(n,r){return this.request(Mn(r||{},{method:t,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(Mn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}En.prototype[t]=n(),En.prototype[t+"Form"]=n(!0)});class uc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new vr(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new uc(function(o){t=o}),cancel:t}}}function pS(e){return function(n){return e.apply(null,n)}}function fS(e){return w.isObject(e)&&e.isAxiosError===!0}const ol={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ol).forEach(([e,t])=>{ol[t]=e});function lm(e){const t=new En(e),n=Af(En.prototype.request,t);return w.extend(n,En.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return lm(Mn(e,o))},n}const le=lm(_o);le.Axios=En;le.CanceledError=vr;le.CancelToken=uc;le.isCancel=tm;le.VERSION=am;le.toFormData=us;le.AxiosError=L;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=pS;le.isAxiosError=fS;le.mergeConfig=Mn;le.AxiosHeaders=qe;le.formToJSON=e=>em(w.isHTMLForm(e)?new FormData(e):e);le.getAdapter=sm.getAdapter;le.HttpStatusCode=ol;le.default=le;const mS="_signUpContainer_13jij_3",hS="_signUpBox_13jij_11",gS="_passwordLabel_13jij_42",vS="_eyeIcon_13jij_55",yS="_saveUsername_13jij_64",xS="_error_13jij_74",SS="_signUpButton_13jij_79",_S="_loginButton_13jij_90",wS="_footerBox_13jij_98",Tt={signUpContainer:mS,signUpBox:hS,passwordLabel:gS,eyeIcon:vS,saveUsername:yS,error:xS,signUpButton:SS,loginButton:_S,footerBox:wS},CS=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[a,l]=C.useState(null),c=ss(),u=async d=>{d.preventDefault();try{await le.post("http://localhost:5000/api/signup",{username:e,password:n}),c("/login")}catch(f){l("Sign up failed. Please try again."),console.error("Sign up failed",f)}};return s.jsx("div",{className:Tt.signUpContainer,children:s.jsxs("div",{className:Tt.signUpBox,children:[s.jsx("h2",{children:"Good morning"}),s.jsx("p",{children:"Sign on to manage your accounts."}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("label",{children:["Username",s.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:d=>t(d.target.value),required:!0})]}),s.jsxs("label",{className:Tt.passwordLabel,children:["Password",s.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value),required:!0}),s.jsx("span",{className:Tt.eyeIcon,onClick:()=>i(!o),children:o?s.jsx(Pf,{}):s.jsx(Ef,{})})]}),s.jsxs("div",{className:Tt.saveUsername,children:[s.jsx("input",{type:"checkbox",id:"saveUsername"}),s.jsx("label",{htmlFor:"saveUsername",children:"Save username"})]}),a&&s.jsx("p",{className:Tt.error,children:a}),s.jsx("button",{type:"submit",className:Tt.signUpButton,children:"Sign Up"}),s.jsx("button",{type:"button",className:Tt.loginButton,onClick:()=>c("/login"),children:"Login"})]}),s.jsxs("div",{className:Tt.footerBox,children:[s.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),s.jsx("a",{href:"/security",children:"Security Center"}),s.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},jS="_loginContainer_xd0hi_3",NS="_loginBox_xd0hi_11",bS="_passwordLabel_xd0hi_42",kS="_eyeIcon_xd0hi_55",PS="_saveUsername_xd0hi_64",ES="_error_xd0hi_74",BS="_loginButton_xd0hi_79",TS="_signUpButton_xd0hi_90",LS="_footerBox_xd0hi_98",Vt={loginContainer:jS,loginBox:NS,passwordLabel:bS,eyeIcon:kS,saveUsername:PS,error:ES,loginButton:BS,signUpButton:TS,footerBox:LS},RS=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[a,l]=C.useState(null),{setAuthState:c}=C.useContext(ic),u=ss(),d=async f=>{f.preventDefault();try{const m=await le.post("http://localhost:5000/api/login",{username:e,password:n}),{token:v}=m.data;c({token:v,username:e}),localStorage.setItem("token",v),u("/")}catch(m){l("Login failed. Please check your username and password."),console.error("Login failed",m)}};return s.jsx("div",{className:Vt.loginContainer,children:s.jsxs("div",{className:Vt.loginBox,children:[s.jsx("h2",{children:"Welcome back"}),s.jsx("p",{children:"Sign on to manage your accounts."}),s.jsxs("form",{onSubmit:d,children:[s.jsxs("label",{children:["Username",s.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:f=>t(f.target.value),required:!0})]}),s.jsxs("label",{className:Vt.passwordLabel,children:["Password",s.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:f=>r(f.target.value),required:!0}),s.jsx("span",{className:Vt.eyeIcon,onClick:()=>i(!o),children:o?s.jsx(Pf,{}):s.jsx(Ef,{})})]}),a&&s.jsx("p",{className:Vt.error,children:a}),s.jsx("button",{type:"submit",className:Vt.loginButton,children:"Sign In"}),s.jsx("button",{type:"button",className:Vt.signUpButton,onClick:()=>u("/signup"),children:"Sign Up"})]}),s.jsxs("div",{className:Vt.footerBox,children:[s.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),s.jsx("a",{href:"/security",children:"Security Center"}),s.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},OS="_footer_bjc8t_3",MS="_container_bjc8t_9",$S="_footerLinks_bjc8t_15",Js={footer:OS,container:MS,footerLinks:$S},IS=()=>s.jsx("footer",{className:Js.footer,children:s.jsx("div",{className:Js.container,children:s.jsxs("ul",{className:Js.footerLinks,children:[s.jsx("li",{children:s.jsx("a",{href:"#",children:"Privacy, Cookies, Security & Legal"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Notice of Data Collection"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"General Terms of Use"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Online Access Agreement"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Ad Choices"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Report Fraud"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"About Wells Fargo"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Careers"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Diversity and Accessibility"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Sitemap"})})]})})});var ps={},fs={},dc={},Ys={},Zs={exports:{}},ea,Qu;function FS(){if(Qu)return ea;Qu=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ea=e,ea}var ta,Xu;function zS(){if(Xu)return ta;Xu=1;var e=FS();function t(){}function n(){}return n.resetWarningCache=t,ta=function(){function r(a,l,c,u,d,f){if(f!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},ta}var Ku;function AS(){return Ku||(Ku=1,Zs.exports=zS()()),Zs.exports}var Ju;function DS(){return Ju||(Ju=1,function(e){(function(t,n){n(e,C,AS())})(td,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=y;var o=a(n),i=a(r);function a(p){return p&&p.__esModule?p:{default:p}}var l=Object.assign||function(p){for(var h=1;h<arguments.length;h++){var S=arguments[h];for(var _ in S)Object.prototype.hasOwnProperty.call(S,_)&&(p[_]=S[_])}return p};function c(p,h){var S={};for(var _ in p)h.indexOf(_)>=0||Object.prototype.hasOwnProperty.call(p,_)&&(S[_]=p[_]);return S}function u(p,h){if(!(p instanceof h))throw new TypeError("Cannot call a class as a function")}var d=function(){function p(h,S){for(var _=0;_<S.length;_++){var b=S[_];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(h,b.key,b)}}return function(h,S,_){return S&&p(h.prototype,S),_&&p(h,_),h}}();function f(p,h){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:p}function m(p,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);p.prototype=Object.create(h&&h.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(p,h):p.__proto__=h)}var v=!1;function y(p){v=p}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){y(!0)}}))}catch{}function x(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return v?p:p.capture}function j(p){if("touches"in p){var h=p.touches[0],S=h.pageX,_=h.pageY;return{x:S,y:_}}var b=p.screenX,E=p.screenY;return{x:b,y:E}}var g=function(p){m(h,p);function h(){var S;u(this,h);for(var _=arguments.length,b=Array(_),E=0;E<_;E++)b[E]=arguments[E];var k=f(this,(S=h.__proto__||Object.getPrototypeOf(h)).call.apply(S,[this].concat(b)));return k._handleSwipeStart=k._handleSwipeStart.bind(k),k._handleSwipeMove=k._handleSwipeMove.bind(k),k._handleSwipeEnd=k._handleSwipeEnd.bind(k),k._onMouseDown=k._onMouseDown.bind(k),k._onMouseMove=k._onMouseMove.bind(k),k._onMouseUp=k._onMouseUp.bind(k),k._setSwiperRef=k._setSwiperRef.bind(k),k}return d(h,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,x({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,x({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(_){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(_))}},{key:"_onMouseMove",value:function(_){this.mouseDown&&this._handleSwipeMove(_)}},{key:"_onMouseUp",value:function(_){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(_)}},{key:"_handleSwipeStart",value:function(_){var b=j(_),E=b.x,k=b.y;this.moveStart={x:E,y:k},this.props.onSwipeStart(_)}},{key:"_handleSwipeMove",value:function(_){if(this.moveStart){var b=j(_),E=b.x,k=b.y,K=E-this.moveStart.x,$=k-this.moveStart.y;this.moving=!0;var Ve=this.props.onSwipeMove({x:K,y:$},_);Ve&&_.cancelable&&_.preventDefault(),this.movePosition={deltaX:K,deltaY:$}}}},{key:"_handleSwipeEnd",value:function(_){this.props.onSwipeEnd(_);var b=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-b?this.props.onSwipeLeft(1,_):this.movePosition.deltaX>b&&this.props.onSwipeRight(1,_),this.movePosition.deltaY<-b?this.props.onSwipeUp(1,_):this.movePosition.deltaY>b&&this.props.onSwipeDown(1,_)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(_){this.swiper=_,this.props.innerRef(_)}},{key:"render",value:function(){var _=this.props;_.tagName;var b=_.className,E=_.style,k=_.children;_.allowMouseEvents,_.onSwipeUp,_.onSwipeDown,_.onSwipeLeft,_.onSwipeRight,_.onSwipeStart,_.onSwipeMove,_.onSwipeEnd,_.innerRef,_.tolerance;var K=c(_,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:b,style:E},K),k)}}]),h}(n.Component);g.displayName="ReactSwipe",g.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},g.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=g})}(Ys)),Ys}(function(e){(function(t,n){n(e,DS())})(td,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})(dc);var wo={},cm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var l in i)t.call(i,l)&&i[l]&&(a=o(a,l));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(cm);var US=cm.exports;Object.defineProperty(wo,"__esModule",{value:!0});wo.default=void 0;var Gt=HS(US);function HS(e){return e&&e.__esModule?e:{default:e}}function WS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var qS={ROOT:function(t){return(0,Gt.default)(WS({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,Gt.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,Gt.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,Gt.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,Gt.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,Gt.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,Gt.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,Gt.default)({dot:!0,selected:t})}};wo.default=qS;var Co={},ms={};Object.defineProperty(ms,"__esModule",{value:!0});ms.outerWidth=void 0;var VS=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};ms.outerWidth=VS;var yr={};Object.defineProperty(yr,"__esModule",{value:!0});yr.default=void 0;var GS=function(t,n,r){var o=t===0?t:t+n,i=r==="horizontal"?[o,0,0]:[0,o,0],a="translate3d",l="("+i.join(",")+")";return a+l};yr.default=GS;var jo={};Object.defineProperty(jo,"__esModule",{value:!0});jo.default=void 0;var QS=function(){return window};jo.default=QS;Object.defineProperty(Co,"__esModule",{value:!0});Co.default=void 0;var ut=JS(C),Sn=hs(wo),XS=ms,Yu=hs(yr),KS=hs(dc),Vo=hs(jo);function hs(e){return e&&e.__esModule?e:{default:e}}function um(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return um=function(){return e},e}function JS(e){if(e&&e.__esModule)return e;if(e===null||Wr(e)!=="object"&&typeof e!="function")return{default:e};var t=um();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Wr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wr=function(n){return typeof n}:Wr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wr(e)}function il(){return il=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(this,arguments)}function YS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ZS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function e_(e,t,n){return t&&ZS(e.prototype,t),e}function t_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&sl(e,t)}function sl(e,t){return sl=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},sl(e,t)}function n_(e){var t=o_();return function(){var r=zi(e),o;if(t){var i=zi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return r_(this,o)}}function r_(e,t){return t&&(Wr(t)==="object"||typeof t=="function")?t:Me(e)}function Me(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function zi(e){return zi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},zi(e)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i_=function(t){return t.hasOwnProperty("key")},pc=function(e){t_(n,e);var t=n_(n);function n(r){var o;return YS(this,n),o=t.call(this,r),be(Me(o),"itemsWrapperRef",void 0),be(Me(o),"itemsListRef",void 0),be(Me(o),"thumbsRef",void 0),be(Me(o),"setItemsWrapperRef",function(i){o.itemsWrapperRef=i}),be(Me(o),"setItemsListRef",function(i){o.itemsListRef=i}),be(Me(o),"setThumbsRef",function(i,a){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[a]=i}),be(Me(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var i=ut.Children.count(o.props.children),a=o.itemsWrapperRef.clientWidth,l=o.props.thumbWidth?o.props.thumbWidth:(0,XS.outerWidth)(o.thumbsRef[0]),c=Math.floor(a/l),u=c<i,d=u?i-c:0;o.setState(function(f,m){return{itemSize:l,visibleItems:c,firstItem:u?o.getFirstItem(m.selectedItem):0,lastPosition:d,showArrows:u}})}}),be(Me(o),"handleClickItem",function(i,a,l){if(!i_(l)||l.key==="Enter"){var c=o.props.onSelectItem;typeof c=="function"&&c(i,a)}}),be(Me(o),"onSwipeStart",function(){o.setState({swiping:!0})}),be(Me(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),be(Me(o),"onSwipeMove",function(i){var a=i.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var l=0,c=ut.Children.count(o.props.children),u=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(c-o.state.visibleItems,0),f=-d*100/o.state.visibleItems;u===l&&a>0&&(a=0),u===f&&a<0&&(a=0);var m=o.itemsWrapperRef.clientWidth,v=u+100/(m/a);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(y){o.itemsListRef.style[y]=(0,Yu.default)(v,"%",o.props.axis)}),!0}),be(Me(o),"slideRight",function(i){o.moveTo(o.state.firstItem-(typeof i=="number"?i:1))}),be(Me(o),"slideLeft",function(i){o.moveTo(o.state.firstItem+(typeof i=="number"?i:1))}),be(Me(o),"moveTo",function(i){i=i<0?0:i,i=i>=o.state.lastPosition?o.state.lastPosition:i,o.setState({firstItem:i})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return e_(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Vo.default)().addEventListener("resize",this.updateSizes),(0,Vo.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Vo.default)().removeEventListener("resize",this.updateSizes),(0,Vo.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var i=o;return o>=this.state.lastPosition&&(i=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),o<this.state.firstItem&&(i=o),i}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(i,a){var l=Sn.default.ITEM(!1,a===o.state.selectedItem),c={key:a,ref:function(d){return o.setThumbsRef(d,a)},className:l,onClick:o.handleClickItem.bind(o,a,o.props.children[a]),onKeyDown:o.handleClickItem.bind(o,a,o.props.children[a]),"aria-label":"".concat(o.props.labels.item," ").concat(a+1),style:{width:o.props.thumbWidth}};return ut.default.createElement("li",il({},c,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var i=ut.Children.count(this.props.children)>1,a=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},u=-this.state.firstItem*(this.state.itemSize||0),d=(0,Yu.default)(u,"px",this.props.axis),f=this.props.transitionTime+"ms";return c={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f},ut.default.createElement("div",{className:Sn.default.CAROUSEL(!1)},ut.default.createElement("div",{className:Sn.default.WRAPPER(!1),ref:this.setItemsWrapperRef},ut.default.createElement("button",{type:"button",className:Sn.default.ARROW_PREV(!a),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),i?ut.default.createElement(KS.default,{tagName:"ul",className:Sn.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):ut.default.createElement("ul",{className:Sn.default.SLIDER(!1,this.state.swiping),ref:function(v){return o.setItemsListRef(v)},style:c},this.renderItems()),ut.default.createElement("button",{type:"button",className:Sn.default.ARROW_NEXT(!l),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(ut.Component);Co.default=pc;be(pc,"displayName","Thumbs");be(pc,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var gs={};Object.defineProperty(gs,"__esModule",{value:!0});gs.default=void 0;var s_=function(){return document};gs.default=s_;var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});Xe.setPosition=Xe.getPosition=Xe.isKeyboardEvent=Xe.defaultStatusFormatter=Xe.noop=void 0;var a_=C,l_=c_(yr);function c_(e){return e&&e.__esModule?e:{default:e}}var u_=function(){};Xe.noop=u_;var d_=function(t,n){return"".concat(t," of ").concat(n)};Xe.defaultStatusFormatter=d_;var p_=function(t){return t?t.hasOwnProperty("key"):!1};Xe.isKeyboardEvent=p_;var f_=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=a_.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,i=r-1;return t&&(t!==i||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===i&&(o+=100-n.centerSlidePercentage),o}return-t*100};Xe.getPosition=f_;var m_=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,l_.default)(t,"%",n)}),r};Xe.setPosition=m_;var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.fadeAnimationHandler=jt.slideStopSwipingHandler=jt.slideSwipeAnimationHandler=jt.slideAnimationHandler=void 0;var dm=C,h_=g_(yr),Nt=Xe;function g_(e){return e&&e.__esModule?e:{default:e}}function Zu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zu(Object(n),!0).forEach(function(r){v_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y_=function(t,n){var r={},o=n.selectedItem,i=o,a=dm.Children.count(t.children)-1,l=t.infiniteLoop&&(o<0||o>a);if(l)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,Nt.setPosition)(-(a+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,Nt.setPosition)(-(a+2)*100,t.axis):i>a&&(r.itemListStyle=(0,Nt.setPosition)(0,t.axis)),r;var c=(0,Nt.getPosition)(o,t),u=(0,h_.default)(c,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=Cn(Cn({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};jt.slideAnimationHandler=y_;var x_=function(t,n,r,o){var i={},a=n.axis==="horizontal",l=dm.Children.count(n.children),c=0,u=(0,Nt.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,Nt.getPosition)(l-1,n)-100:(0,Nt.getPosition)(l-1,n),f=a?t.x:t.y,m=f;u===c&&f>0&&(m=0),u===d&&f<0&&(m=0);var v=u+100/(r.itemSize/m),y=Math.abs(f)>n.swipeScrollTolerance;return n.infiniteLoop&&y&&(r.selectedItem===0&&v>-100?v-=l*100:r.selectedItem===l-1&&v<-l*100&&(v+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||y||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),i.itemListStyle=(0,Nt.setPosition)(v,n.axis)),y&&!r.cancelClick&&o({cancelClick:!0}),i};jt.slideSwipeAnimationHandler=x_;var S_=function(t,n){var r=(0,Nt.getPosition)(n.selectedItem,t),o=(0,Nt.setPosition)(r,t.axis);return{itemListStyle:o}};jt.slideStopSwipingHandler=S_;var __=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(i=Cn(Cn({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:Cn(Cn({},i),{},{opacity:1,position:"relative"}),prevStyle:Cn({},i)}};jt.fadeAnimationHandler=__;Object.defineProperty(fs,"__esModule",{value:!0});fs.default=void 0;var G=j_(C),w_=No(dc),Ot=No(wo),C_=No(Co),Go=No(gs),Qo=No(jo),Or=Xe,Ai=jt;function No(e){return e&&e.__esModule?e:{default:e}}function pm(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return pm=function(){return e},e}function j_(e){if(e&&e.__esModule)return e;if(e===null||qr(e)!=="object"&&typeof e!="function")return{default:e};var t=pm();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function qr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qr=function(n){return typeof n}:qr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qr(e)}function al(){return al=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}function ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ed(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ed(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k_(e,t,n){return t&&b_(e.prototype,t),e}function P_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ll(e,t)}function ll(e,t){return ll=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},ll(e,t)}function E_(e){var t=T_();return function(){var r=Di(e),o;if(t){var i=Di(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return B_(this,o)}}function B_(e,t){return t&&(qr(t)==="object"||typeof t=="function")?t:z(e)}function z(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Di(e){return Di=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Di(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fc=function(e){P_(n,e);var t=E_(n);function n(r){var o;N_(this,n),o=t.call(this,r),M(z(o),"thumbsRef",void 0),M(z(o),"carouselWrapperRef",void 0),M(z(o),"listRef",void 0),M(z(o),"itemsRef",void 0),M(z(o),"timer",void 0),M(z(o),"animationHandler",void 0),M(z(o),"setThumbsRef",function(a){o.thumbsRef=a}),M(z(o),"setCarouselWrapperRef",function(a){o.carouselWrapperRef=a}),M(z(o),"setListRef",function(a){o.listRef=a}),M(z(o),"setItemsRef",function(a,l){o.itemsRef||(o.itemsRef=[]),o.itemsRef[l]=a}),M(z(o),"autoPlay",function(){G.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),M(z(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),M(z(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),M(z(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),M(z(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),M(z(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,Go.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,Go.default)().activeElement)):!1}),M(z(o),"navigateWithKeyboard",function(a){if(o.isFocusWithinTheCarousel()){var l=o.props.axis,c=l==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=c?u.ArrowRight:u.ArrowDown,f=c?u.ArrowLeft:u.ArrowUp;d===a.keyCode?o.increment():f===a.keyCode&&o.decrement()}}),M(z(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var a=o.props.axis==="horizontal",l=o.itemsRef[0];if(l){var c=a?l.clientWidth:l.clientHeight;o.setState({itemSize:c}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),M(z(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),M(z(o),"handleClickItem",function(a,l){if(G.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(a,l),a!==o.state.selectedItem&&o.setState({selectedItem:a})}}),M(z(o),"handleOnChange",function(a,l){G.Children.count(o.props.children)<=1||o.props.onChange(a,l)}),M(z(o),"handleClickThumb",function(a,l){o.props.onClickThumb(a,l),o.moveTo(a)}),M(z(o),"onSwipeStart",function(a){o.setState({swiping:!0}),o.props.onSwipeStart(a)}),M(z(o),"onSwipeEnd",function(a){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(a),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),M(z(o),"onSwipeMove",function(a,l){o.props.onSwipeMove(l);var c=o.props.swipeAnimationHandler(a,o.props,o.state,o.setState.bind(z(o)));return o.setState(dt({},c)),!!Object.keys(c).length}),M(z(o),"decrement",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof a=="number"?a:1))}),M(z(o),"increment",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof a=="number"?a:1))}),M(z(o),"moveTo",function(a){if(typeof a=="number"){var l=G.Children.count(o.props.children)-1;a<0&&(a=o.props.infiniteLoop?l:0),a>l&&(a=o.props.infiniteLoop?0:l),o.selectItem({selectedItem:a}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),M(z(o),"onClickNext",function(){o.increment(1)}),M(z(o),"onClickPrev",function(){o.decrement(1)}),M(z(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),M(z(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),M(z(o),"changeItem",function(a){return function(l){(!(0,Or.isKeyboardEvent)(l)||l.key==="Enter")&&o.moveTo(a)}}),M(z(o),"selectItem",function(a){o.setState(dt({previousItem:o.state.selectedItem},a),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(a.selectedItem,G.Children.toArray(o.props.children)[a.selectedItem])}),M(z(o),"getInitialImage",function(){var a=o.props.selectedItem,l=o.itemsRef&&o.itemsRef[a],c=l&&l.getElementsByTagName("img")||[];return c[0]}),M(z(o),"getVariableItemHeight",function(a){var l=o.itemsRef&&o.itemsRef[a];if(o.state.hasMount&&l&&l.children.length){var c=l.children[0].getElementsByTagName("img")||[];if(c.length>0){var u=c[0];if(!u.complete){var d=function v(){o.forceUpdate(),u.removeEventListener("load",v)};u.addEventListener("load",d)}}var f=c[0]||l.children[0],m=f.clientHeight;return m>0?m:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Ai.fadeAnimationHandler||Ai.slideAnimationHandler,o.state=dt(dt({},i),o.animationHandler(r,i)),o}return k_(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,i){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(dt({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&G.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=o.getInitialImage();i&&!i.complete?i.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,Qo.default)().addEventListener("resize",this.updateSizes),(0,Qo.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,Go.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,Qo.default)().removeEventListener("resize",this.updateSizes),(0,Qo.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,Go.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var i=this;return this.props.children?G.Children.map(this.props.children,function(a,l){var c=l===i.state.selectedItem,u=l===i.state.previousItem,d=c&&i.state.selectedStyle||u&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(d=dt(dt({},d),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(d=dt(dt({},d),{},{pointerEvents:"none"}));var f={ref:function(v){return i.setItemsRef(v,l)},key:"itemKey"+l+(o?"clone":""),className:Ot.default.ITEM(!0,l===i.state.selectedItem,l===i.state.previousItem),onClick:i.handleClickItem.bind(i,l,a),style:d};return G.default.createElement("li",f,i.props.renderItem(a,{isSelected:l===i.state.selectedItem,isPrevious:l===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,i=this.props,a=i.showIndicators,l=i.labels,c=i.renderIndicator,u=i.children;return a?G.default.createElement("ul",{className:"control-dots"},G.Children.map(u,function(d,f){return c&&c(o.changeItem(f),f===o.state.selectedItem,f,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?G.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,G.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||G.Children.count(this.props.children)===0?null:G.default.createElement(C_.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||G.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&G.Children.count(this.props.children)>1,a=this.props.axis==="horizontal",l=this.props.showArrows&&G.Children.count(this.props.children)>1,c=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=l&&(this.state.selectedItem<G.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),f=d.shift(),m=d.pop(),v={className:Ot.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},y={};if(a){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var x=this.getVariableItemHeight(this.state.selectedItem);y.height=x||"auto"}}else v.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,v.style=dt(dt({},v.style),{},{height:this.state.itemSize}),y.height=this.state.itemSize;return G.default.createElement("div",{"aria-label":this.props.ariaLabel,className:Ot.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},G.default.createElement("div",{className:Ot.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),G.default.createElement("div",{className:Ot.default.WRAPPER(!0,this.props.axis),style:y},i?G.default.createElement(w_.default,al({tagName:"ul",innerRef:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&f):G.default.createElement("ul",{className:Ot.default.SLIDER(!0,this.state.swiping),ref:function(g){return o.setListRef(g)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&f)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(G.default.Component);fs.default=fc;M(fc,"displayName","Carousel");M(fc,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Or.noop,onClickThumb:Or.noop,onChange:Or.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return G.default.createElement("button",{type:"button","aria-label":r,className:Ot.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return G.default.createElement("button",{type:"button","aria-label":r,className:Ot.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return G.default.createElement("li",{className:Ot.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=G.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=G.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Or.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Ai.slideSwipeAnimationHandler,stopSwipingHandler:Ai.slideStopSwipingHandler});var L_={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(fs),n=L_,r=o(Co);function o(i){return i&&i.__esModule?i:{default:i}}})(ps);const R_="_aboutPage1Container_14rn1_1",O_="_pageContent_14rn1_6",M_="_heroSection_14rn1_10",$_="_carouselSection_14rn1_28",I_="_missionSection_14rn1_32",F_="_largeImage_14rn1_49",z_="_teamSection_14rn1_55",A_="_teamMembers_14rn1_67",D_="_teamMember_14rn1_67",U_="_valuesSection_14rn1_89",H_="_valueBoxes_14rn1_107",W_="_valueBox_14rn1_107",q_="_contactSection_14rn1_132",V_="_contactDetails_14rn1_145",G_="_toggleContainer_14rn1_150",Q_="_toggleButton_14rn1_156",X_="_active_14rn1_165",K_="_codeContainer_14rn1_170",J_="_copyButton_14rn1_180",Y_="_copied_14rn1_192",Z_="_codeBox_14rn1_196",W={aboutPage1Container:R_,pageContent:O_,heroSection:M_,carouselSection:$_,missionSection:I_,largeImage:F_,teamSection:z_,teamMembers:A_,teamMember:D_,valuesSection:U_,valueBoxes:H_,valueBox:W_,contactSection:q_,contactDetails:V_,toggleContainer:G_,toggleButton:Q_,active:X_,codeContainer:K_,copyButton:J_,copied:Y_,codeBox:Z_},ew=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
import React from 'react';
import './AboutPage1.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage1: React.FC = () => {
  return (
    <div className="aboutPage1Container">
      <section className="heroSection">
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and our team.</p>
      </section>
      <section className="carouselSection">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Carousel 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Carousel 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Carousel 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section>
      <section className="missionSection">
        <h2>Our Mission</h2>
        <p>To deliver the best products and services to our customers and make a positive impact on the community.</p>
        <img src="https://via.placeholder.com/1200x600" alt="Mission Image" className="largeImage" />
      </section>
      <section className="teamSection">
        <h2>Meet Our Team</h2>
        <div className="teamMembers">
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="teamImage" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="teamImage" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="teamImage" />
            <h3>Mike Johnson</h3>
            <p>CFO</p>
          </div>
        </div>
      </section>
      <section className="valuesSection">
        <h2>Our Values</h2>
        <p>We believe in integrity, innovation, and customer satisfaction.</p>
        <div className="valueBoxes">
          <div className="valueBox">
            <h3>Integrity</h3>
            <p>We adhere to the highest standards of integrity and ethical behavior.</p>
          </div>
          <div className="valueBox">
            <h3>Innovation</h3>
            <p>We strive to be industry leaders through innovation and excellence.</p>
          </div>
          <div className="valueBox">
            <h3>Customer Satisfaction</h3>
            <p>We are committed to providing the best customer experience.</p>
          </div>
        </div>
      </section>
      <section className="historySection">
        <h2>Our History</h2>
        <p>We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values.</p>
        <img src="https://via.placeholder.com/1200x600" alt="History Image" className="largeImage" />
      </section>
      <section className="contactSection">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our company, feel free to reach out to us.</p>
        <div className="contactDetails">
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage1;
  `,i=`
.aboutPage1Container {
  padding: 2rem;
  text-align: center;
}

.pageContent {
  margin-bottom: 2rem;
}

.heroSection {
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 8px;
}

.heroSection h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.heroSection p {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
}

.carouselSection {
  margin: 2rem 0;
}

.missionSection {
  margin: 2rem 0;
}

.missionSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.missionSection p {
  font-size: 1.2rem;
  color: #555;
}

.largeImage {
  width: 100%;
  height: auto;
  margin-top: 1rem;
}

.teamSection {
  margin: 2rem 0;
}

.teamSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.teamMembers {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.teamMember {
  margin: 1rem;
  text-align: center;
}

.teamImage {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.teamMember h3 {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}

.teamMember p {
  font-size: 1rem;
  color: #777;
}

.valuesSection {
  margin: 2rem 0;
}

.valuesSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.valueBoxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.valueBox {
  width: 30%;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  text-align: left;
}

.valueBox h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.valueBox p {
  font-size: 1.2rem;
  color: #555;
}

.historySection {
  margin: 2rem 0;
}

.historySection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.historySection p {
  font-size: 1.2rem;
  color: #555;
}

.contactSection {
  margin: 2rem 0;
}

.contactSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contactDetails {
  font-size: 1.2rem;
  color: #555;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:W.aboutPage1Container,children:[s.jsxs("div",{className:W.pageContent,children:[s.jsxs("section",{className:W.heroSection,children:[s.jsx("h1",{children:"About Us"}),s.jsx("p",{children:"Learn more about our company, our mission, and our team."})]}),s.jsx("section",{className:W.carouselSection,children:s.jsxs(ps.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 1"}),s.jsx("p",{className:"legend",children:"Legend 1"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 2"}),s.jsx("p",{className:"legend",children:"Legend 2"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 3"}),s.jsx("p",{className:"legend",children:"Legend 3"})]})]})}),s.jsxs("section",{className:W.missionSection,children:[s.jsx("h2",{children:"Our Mission"}),s.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:W.largeImage})]}),s.jsxs("section",{className:W.teamSection,children:[s.jsx("h2",{children:"Meet Our Team"}),s.jsxs("div",{className:W.teamMembers,children:[s.jsxs("div",{className:W.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:W.teamImage}),s.jsx("h3",{children:"John Doe"}),s.jsx("p",{children:"CEO"})]}),s.jsxs("div",{className:W.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:W.teamImage}),s.jsx("h3",{children:"Jane Smith"}),s.jsx("p",{children:"CTO"})]}),s.jsxs("div",{className:W.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:W.teamImage}),s.jsx("h3",{children:"Mike Johnson"}),s.jsx("p",{children:"CFO"})]})]})]}),s.jsxs("section",{className:W.valuesSection,children:[s.jsx("h2",{children:"Our Values"}),s.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),s.jsxs("div",{className:W.valueBoxes,children:[s.jsxs("div",{className:W.valueBox,children:[s.jsx("h3",{children:"Integrity"}),s.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),s.jsxs("div",{className:W.valueBox,children:[s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),s.jsxs("div",{className:W.valueBox,children:[s.jsx("h3",{children:"Customer Satisfaction"}),s.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),s.jsxs("section",{className:W.historySection,children:[s.jsx("h2",{children:"Our History"}),s.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:W.largeImage})]}),s.jsxs("section",{className:W.contactSection,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),s.jsxs("div",{className:W.contactDetails,children:[s.jsx("p",{children:"Email: contact@company.com"}),s.jsx("p",{children:"Phone: (123) 456-7890"}),s.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),s.jsxs("div",{className:W.toggleContainer,children:[s.jsx("button",{className:`${W.toggleButton} ${e==="tsx"?W.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${W.toggleButton} ${e==="css"?W.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:W.codeContainer,children:[s.jsx("button",{className:`${W.copyButton} ${n?W.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:W.codeBox,children:l})]})]})},tw="_aboutPage2Container_pnlr8_1",nw="_pageContent_pnlr8_6",rw="_heroSection_pnlr8_10",ow="_carouselSection_pnlr8_28",iw="_valuesSection_pnlr8_32",sw="_valueBoxes_pnlr8_47",aw="_valueBox_pnlr8_47",lw="_testimonialsSection_pnlr8_72",cw="_testimonials_pnlr8_72",uw="_testimonial_pnlr8_72",dw="_contactSection_pnlr8_104",pw="_contactDetails_pnlr8_114",fw="_toggleContainer_pnlr8_119",mw="_toggleButton_pnlr8_125",hw="_active_pnlr8_134",gw="_codeContainer_pnlr8_139",vw="_copyButton_pnlr8_149",yw="_copied_pnlr8_161",xw="_codeBox_pnlr8_165",ee={aboutPage2Container:tw,pageContent:nw,heroSection:rw,carouselSection:ow,valuesSection:iw,valueBoxes:sw,valueBox:aw,testimonialsSection:lw,testimonials:cw,testimonial:uw,contactSection:dw,contactDetails:pw,toggleContainer:fw,toggleButton:mw,active:hw,codeContainer:gw,copyButton:vw,copied:yw,codeBox:xw},Sw=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
import React from 'react';
import './AboutPage2.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage2: React.FC = () => {
  return (
    <div className="aboutPage2Container">
      <section className="heroSection">
        <h1>Our Team</h1>
        <p>Meet the dedicated team behind our company's success.</p>
      </section>
      <section className="carouselSection">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Team Carousel 1" />
            <p className="legend">Team Member 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Team Carousel 2" />
            <p className="legend">Team Member 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Team Carousel 3" />
            <p className="legend">Team Member 3</p>
          </div>
        </Carousel>
      </section>
      <section className="valuesSection">
        <h2>Our Values</h2>
        <p>We believe in integrity, innovation, and customer satisfaction.</p>
        <div className="valueBoxes">
          <div className="valueBox">
            <h3>Integrity</h3>
            <p>We adhere to the highest standards of integrity and ethical behavior.</p>
          </div>
          <div className="valueBox">
            <h3>Innovation</h3>
            <p>We strive to be industry leaders through innovation and excellence.</p>
          </div>
          <div className="valueBox">
            <h3>Customer Satisfaction</h3>
            <p>We are committed to providing the best customer experience.</p>
          </div>
        </div>
      </section>
      <section className="testimonialsSection">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"This company is amazing! They really care about their customers."</p>
            <p>- Happy Customer</p>
          </div>
          <div className="testimonial">
            <p>"Fantastic team and outstanding service!"</p>
            <p>- Satisfied Client</p>
          </div>
        </div>
      </section>
      <section className="contactSection">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our company, feel free to reach out to us.</p>
        <div className="contactDetails">
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage2;
  `,i=`
.aboutPage2Container {
  padding: 2rem;
  text-align: center;
}

.pageContent {
  margin-bottom: 2rem;
}

.heroSection {
  background-color: #e0f7fa;
  padding: 2rem;
  border-radius: 8px;
}

.heroSection h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.heroSection p {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
}

.carouselSection {
  margin: 2rem 0;
}

.valuesSection {
  margin: 2rem 0;
}

.valuesSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.valuesSection p {
  font-size: 1.2rem;
  color: #555;
}

.valueBoxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.valueBox {
  width: 30%;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  text-align: left;
}

.valueBox h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.valueBox p {
  font-size: 1.2rem;
  color: #555;
}

.testimonialsSection {
  margin: 2rem 0;
}

.testimonialsSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.testimonials {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.testimonial {
  width: 45%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial p {
  font-size: 1.2rem;
  color: #555;
}

.contactSection {
  margin: 2rem 0;
}

.contactSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contactDetails {
  font-size: 1.2rem;
  color: #555;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:ee.aboutPage2Container,children:[s.jsxs("div",{className:ee.pageContent,children:[s.jsxs("section",{className:ee.heroSection,children:[s.jsx("h1",{children:"Our Team"}),s.jsx("p",{children:"Meet the dedicated team behind our company's success."})]}),s.jsx("section",{className:ee.carouselSection,children:s.jsxs(ps.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 1"}),s.jsx("p",{className:"legend",children:"Team Member 1"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 2"}),s.jsx("p",{className:"legend",children:"Team Member 2"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 3"}),s.jsx("p",{className:"legend",children:"Team Member 3"})]})]})}),s.jsxs("section",{className:ee.valuesSection,children:[s.jsx("h2",{children:"Our Values"}),s.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),s.jsxs("div",{className:ee.valueBoxes,children:[s.jsxs("div",{className:ee.valueBox,children:[s.jsx("h3",{children:"Integrity"}),s.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),s.jsxs("div",{className:ee.valueBox,children:[s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),s.jsxs("div",{className:ee.valueBox,children:[s.jsx("h3",{children:"Customer Satisfaction"}),s.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),s.jsxs("section",{className:ee.testimonialsSection,children:[s.jsx("h2",{children:"Testimonials"}),s.jsxs("div",{className:ee.testimonials,children:[s.jsxs("div",{className:ee.testimonial,children:[s.jsx("p",{children:'"This company is amazing! They really care about their customers."'}),s.jsx("p",{children:"- Happy Customer"})]}),s.jsxs("div",{className:ee.testimonial,children:[s.jsx("p",{children:'"Fantastic team and outstanding service!"'}),s.jsx("p",{children:"- Satisfied Client"})]})]})]}),s.jsxs("section",{className:ee.contactSection,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),s.jsxs("div",{className:ee.contactDetails,children:[s.jsx("p",{children:"Email: contact@company.com"}),s.jsx("p",{children:"Phone: (123) 456-7890"}),s.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),s.jsxs("div",{className:ee.toggleContainer,children:[s.jsx("button",{className:`${ee.toggleButton} ${e==="tsx"?ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${ee.toggleButton} ${e==="css"?ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:ee.codeContainer,children:[s.jsx("button",{className:`${ee.copyButton} ${n?ee.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:ee.codeBox,children:l})]})]})},_w="_aboutPage3Container_166js_1",ww="_pageContent_166js_6",Cw="_heroSection_166js_10",jw="_carouselSection_166js_28",Nw="_historySection_166js_32",bw="_largeImage_166js_49",kw="_missionSection_166js_55",Pw="_teamSection_166js_78",Ew="_teamMembers_166js_90",Bw="_teamMember_166js_90",Tw="_valuesSection_166js_112",Lw="_valueBoxes_166js_130",Rw="_valueBox_166js_130",Ow="_contactSection_166js_155",Mw="_contactDetails_166js_168",$w="_toggleContainer_166js_173",Iw="_toggleButton_166js_179",Fw="_active_166js_188",zw="_codeContainer_166js_193",Aw="_copyButton_166js_203",Dw="_copied_166js_215",Uw="_codeBox_166js_219",q={aboutPage3Container:_w,pageContent:ww,heroSection:Cw,carouselSection:jw,historySection:Nw,largeImage:bw,missionSection:kw,teamSection:Pw,teamMembers:Ew,teamMember:Bw,valuesSection:Tw,valueBoxes:Lw,valueBox:Rw,contactSection:Ow,contactDetails:Mw,toggleContainer:$w,toggleButton:Iw,active:Fw,codeContainer:zw,copyButton:Aw,copied:Dw,codeBox:Uw},Hw=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
import React from 'react';
import './AboutPage3.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage3: React.FC = () => {
  return (
    <div className="aboutPage3Container">
      <section className="heroSection">
        <h1>Our Journey</h1>
        <p>Discover the milestones that define our journey.</p>
      </section>
      <section className="carouselSection">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Journey Carousel 1" />
            <p className="legend">Milestone 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Journey Carousel 2" />
            <p className="legend">Milestone 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Journey Carousel 3" />
            <p className="legend">Milestone 3</p>
          </div>
        </Carousel>
      </section>
      <section className="historySection">
        <h2>Our History</h2>
        <p>We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values.</p>
        <img src="https://via.placeholder.com/1200x600" alt="History Image" className="largeImage" />
      </section>
      <section className="missionSection">
        <h2>Our Mission</h2>
        <p>To deliver the best products and services to our customers and make a positive impact on the community.</p>
        <img src="https://via.placeholder.com/1200x600" alt="Mission Image" className="largeImage" />
      </section>
      <section className="teamSection">
        <h2>Meet Our Team</h2>
        <div className="teamMembers">
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="teamImage" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="teamImage" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="teamImage" />
            <h3>Mike Johnson</h3>
            <p>CFO</p>
          </div>
        </div>
      </section>
      <section className="valuesSection">
        <h2>Our Values</h2>
        <p>We believe in integrity, innovation, and customer satisfaction.</p>
        <div className="valueBoxes">
          <div className="valueBox">
            <h3>Integrity</h3>
            <p>We adhere to the highest standards of integrity and ethical behavior.</p>
          </div>
          <div className="valueBox">
            <h3>Innovation</h3>
            <p>We strive to be industry leaders through innovation and excellence.</p>
          </div>
          <div className="valueBox">
            <h3>Customer Satisfaction</h3>
            <p>We are committed to providing the best customer experience.</p>
          </div>
        </div>
      </section>
      <section className="contactSection">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our company, feel free to reach out to us.</p>
        <div className="contactDetails">
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage3;
  `,i=`
.aboutPage3Container {
  padding: 2rem;
  text-align: center;
}

.pageContent {
  margin-bottom: 2rem;
}

.heroSection {
  background-color: #f0f8ff;
  padding: 2rem;
  border-radius: 8px;
}

.heroSection h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.heroSection p {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
}

.carouselSection {
  margin: 2rem 0;
}

.historySection {
  background-color: #fff8dc;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.historySection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.historySection p {
  font-size: 1.2rem;
  color: #555;
}

.historySection .largeImage {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.missionSection {
  background-color: #e6e6fa;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.missionSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.missionSection p {
  font-size: 1.2rem;
  color: #555;
}

.missionSection .largeImage {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.teamSection {
  background-color: #f5f5f5;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.teamSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.teamMembers {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.teamMember {
  width: 30%;
  text-align: center;
  margin: 1rem;
}

.teamMember h3 {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.teamMember p {
  font-size: 1.2rem;
  color: #555;
}

.valuesSection {
  background-color: #e0ffff;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.valuesSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.valuesSection p {
  font-size: 1.2rem;
  color: #555;
}

.valueBoxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.valueBox {
  width: 30%;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  text-align: left;
}

.valueBox h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.valueBox p {
  font-size: 1.2rem;
  color: #555;
}

.contactSection {
  background-color: #f8f8ff;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.contactSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contactDetails {
  font-size: 1.2rem;
  color: #555;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:q.aboutPage3Container,children:[s.jsxs("div",{className:q.pageContent,children:[s.jsxs("section",{className:q.heroSection,children:[s.jsx("h1",{children:"Our Journey"}),s.jsx("p",{children:"Discover the milestones that define our journey."})]}),s.jsx("section",{className:q.carouselSection,children:s.jsxs(ps.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 1"}),s.jsx("p",{className:"legend",children:"Milestone 1"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 2"}),s.jsx("p",{className:"legend",children:"Milestone 2"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 3"}),s.jsx("p",{className:"legend",children:"Milestone 3"})]})]})}),s.jsxs("section",{className:q.historySection,children:[s.jsx("h2",{children:"Our History"}),s.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:q.largeImage})]}),s.jsxs("section",{className:q.missionSection,children:[s.jsx("h2",{children:"Our Mission"}),s.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:q.largeImage})]}),s.jsxs("section",{className:q.teamSection,children:[s.jsx("h2",{children:"Meet Our Team"}),s.jsxs("div",{className:q.teamMembers,children:[s.jsxs("div",{className:q.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:q.teamImage}),s.jsx("h3",{children:"John Doe"}),s.jsx("p",{children:"CEO"})]}),s.jsxs("div",{className:q.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:q.teamImage}),s.jsx("h3",{children:"Jane Smith"}),s.jsx("p",{children:"CTO"})]}),s.jsxs("div",{className:q.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:q.teamImage}),s.jsx("h3",{children:"Mike Johnson"}),s.jsx("p",{children:"CFO"})]})]})]}),s.jsxs("section",{className:q.valuesSection,children:[s.jsx("h2",{children:"Our Values"}),s.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),s.jsxs("div",{className:q.valueBoxes,children:[s.jsxs("div",{className:q.valueBox,children:[s.jsx("h3",{children:"Integrity"}),s.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),s.jsxs("div",{className:q.valueBox,children:[s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),s.jsxs("div",{className:q.valueBox,children:[s.jsx("h3",{children:"Customer Satisfaction"}),s.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),s.jsxs("section",{className:q.contactSection,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),s.jsxs("div",{className:q.contactDetails,children:[s.jsx("p",{children:"Email: contact@company.com"}),s.jsx("p",{children:"Phone: (123) 456-7890"}),s.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),s.jsxs("div",{className:q.toggleContainer,children:[s.jsx("button",{className:`${q.toggleButton} ${e==="tsx"?q.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${q.toggleButton} ${e==="css"?q.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:q.codeContainer,children:[s.jsx("button",{className:`${q.copyButton} ${n?q.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:q.codeBox,children:l})]})]})},Ww="_loginPage1Container_16987_1",qw="_loginForm_16987_6",Vw="_formGroup_16987_15",Gw="_loginButton_16987_33",Qw="_forgotPassword_16987_48",Xw="_toggleContainer_16987_61",Kw="_toggleButton_16987_67",Jw="_active_16987_76",Yw="_codeContainer_16987_81",Zw="_copyButton_16987_91",eC="_copied_16987_103",tC="_codeBox_16987_107",Ee={loginPage1Container:Ww,loginForm:qw,formGroup:Vw,loginButton:Gw,forgotPassword:Qw,toggleContainer:Xw,toggleButton:Kw,active:Jw,codeContainer:Yw,copyButton:Zw,copied:eC,codeBox:tC},nC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
import React from 'react';
import './LoginPage1.module.css';

const LoginPage1: React.FC = () => {
  return (
    <div className="loginPage1Container">
      <h1>Welcome Back!</h1>
      <form className="loginForm">
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="loginButton">Login</button>
        <p className="forgotPassword"><a href="#">Forgot Password?</a></p>
      </form>
    </div>
  );
};

export default LoginPage1;
  `,i=`
.loginPage1Container {
  padding: 2rem;
  text-align: center;
}

.loginForm {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff8dc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.formGroup {
  margin-bottom: 1rem;
}

.formGroup label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.formGroup input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loginButton {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.loginButton:hover {
  background-color: #0056b3;
}

.forgotPassword {
  margin-top: 1rem;
}

.forgotPassword a {
  color: #007bff;
  text-decoration: none;
}

.forgotPassword a:hover {
  text-decoration: underline;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:Ee.loginPage1Container,children:[s.jsx("h1",{children:"Welcome Back!"}),s.jsxs("form",{className:Ee.loginForm,children:[s.jsxs("div",{className:Ee.formGroup,children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),s.jsxs("div",{className:Ee.formGroup,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),s.jsx("button",{type:"submit",className:Ee.loginButton,children:"Login"}),s.jsx("p",{className:Ee.forgotPassword,children:s.jsx("a",{href:"#",children:"Forgot Password?"})})]}),s.jsxs("div",{className:Ee.toggleContainer,children:[s.jsx("button",{className:`${Ee.toggleButton} ${e==="tsx"?Ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${Ee.toggleButton} ${e==="css"?Ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:Ee.codeContainer,children:[s.jsx("button",{className:`${Ee.copyButton} ${n?Ee.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:Ee.codeBox,children:l})]})]})},rC="_loginPage2Container_1iwfr_1",oC="_loginForm_1iwfr_6",iC="_formGroup_1iwfr_15",sC="_loginButton_1iwfr_33",aC="_forgotPassword_1iwfr_48",lC="_toggleContainer_1iwfr_61",cC="_toggleButton_1iwfr_67",uC="_active_1iwfr_76",dC="_codeContainer_1iwfr_81",pC="_copyButton_1iwfr_91",fC="_copied_1iwfr_103",mC="_codeBox_1iwfr_107",Be={loginPage2Container:rC,loginForm:oC,formGroup:iC,loginButton:sC,forgotPassword:aC,toggleContainer:lC,toggleButton:cC,active:uC,codeContainer:dC,copyButton:pC,copied:fC,codeBox:mC},hC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
import React from 'react';
import './LoginPage2.module.css';

const LoginPage2: React.FC = () => {
  return (
    <div className="loginPage2Container">
      <h1>Login to Your Account</h1>
      <form className="loginForm">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="loginButton">Login</button>
        <p className="forgotPassword"><a href="#">Forgot Password?</a></p>
      </form>
    </div>
  );
};

export default LoginPage2;
  `,i=`
.loginPage2Container {
  padding: 2rem;
  text-align: center;
}

.loginForm {
  max-width: 400px;
  margin: 0 auto;
  background-color: #e6e6fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.formGroup {
  margin-bottom: 1rem;
}

.formGroup label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.formGroup input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loginButton {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.loginButton:hover {
  background-color: #0056b3;
}

.forgotPassword {
  margin-top: 1rem;
}

.forgotPassword a {
  color: #007bff;
  text-decoration: none;
}

.forgotPassword a:hover {
  text-decoration: underline;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:Be.loginPage2Container,children:[s.jsx("h1",{children:"Login to Your Account"}),s.jsxs("form",{className:Be.loginForm,children:[s.jsxs("div",{className:Be.formGroup,children:[s.jsx("label",{htmlFor:"username",children:"Username"}),s.jsx("input",{type:"text",id:"username",name:"username",required:!0})]}),s.jsxs("div",{className:Be.formGroup,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),s.jsx("button",{type:"submit",className:Be.loginButton,children:"Login"}),s.jsx("p",{className:Be.forgotPassword,children:s.jsx("a",{href:"#",children:"Forgot Password?"})})]}),s.jsxs("div",{className:Be.toggleContainer,children:[s.jsx("button",{className:`${Be.toggleButton} ${e==="tsx"?Be.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${Be.toggleButton} ${e==="css"?Be.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:Be.codeContainer,children:[s.jsx("button",{className:`${Be.copyButton} ${n?Be.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:Be.codeBox,children:l})]})]})},gC="_loginPage3Container_1lt4l_1",vC="_loginForm_1lt4l_6",yC="_formGroup_1lt4l_15",xC="_loginButton_1lt4l_33",SC="_forgotPassword_1lt4l_48",_C="_toggleContainer_1lt4l_61",wC="_toggleButton_1lt4l_67",CC="_active_1lt4l_76",jC="_codeContainer_1lt4l_81",NC="_copyButton_1lt4l_91",bC="_copied_1lt4l_103",kC="_codeBox_1lt4l_107",Te={loginPage3Container:gC,loginForm:vC,formGroup:yC,loginButton:xC,forgotPassword:SC,toggleContainer:_C,toggleButton:wC,active:CC,codeContainer:jC,copyButton:NC,copied:bC,codeBox:kC},PC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
import React from 'react';
import './LoginPage3.module.css';

const LoginPage3: React.FC = () => {
  return (
    <div className="loginPage3Container">
      <h1>Sign In</h1>
      <form className="loginForm">
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="loginButton">Sign In</button>
        <p className="forgotPassword"><a href="#">Forgot Password?</a></p>
      </form>
    </div>
  );
};

export default LoginPage3;
  `,i=`
.loginPage3Container {
  padding: 2rem;
  text-align: center;
}

.loginForm {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff0f0;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.formGroup {
  margin-bottom: 1rem;
}

.formGroup label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.formGroup input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loginButton {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.loginButton:hover {
  background-color: #0056b3;
}

.forgotPassword {
  margin-top: 1rem;
}

.forgotPassword a {
  color: #007bff;
  text-decoration: none;
}

.forgotPassword a:hover {
  text-decoration: underline;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:Te.loginPage3Container,children:[s.jsx("h1",{children:"Sign In"}),s.jsxs("form",{className:Te.loginForm,children:[s.jsxs("div",{className:Te.formGroup,children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),s.jsxs("div",{className:Te.formGroup,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),s.jsx("button",{type:"submit",className:Te.loginButton,children:"Sign In"}),s.jsx("p",{className:Te.forgotPassword,children:s.jsx("a",{href:"#",children:"Forgot Password?"})})]}),s.jsxs("div",{className:Te.toggleContainer,children:[s.jsx("button",{className:`${Te.toggleButton} ${e==="tsx"?Te.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${Te.toggleButton} ${e==="css"?Te.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:Te.codeContainer,children:[s.jsx("button",{className:`${Te.copyButton} ${n?Te.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:Te.codeBox,children:l})]})]})},EC="_pricingPageContainer_iekql_1",BC="_mainHeading_iekql_7",TC="_subHeading_iekql_13",LC="_pricingSection_iekql_19",RC="_pricingCard_iekql_27",OC="_pricingCardMain_iekql_36",MC="_planName_iekql_41",$C="_planPrice_iekql_47",IC="_planFeatures_iekql_53",FC="_planButton_iekql_64",zC="_toggleContainer_iekql_77",AC="_toggleButton_iekql_84",DC="_active_iekql_94",UC="_codeContainer_iekql_99",HC="_copyButton_iekql_109",V={pricingPageContainer:EC,mainHeading:BC,subHeading:TC,pricingSection:LC,pricingCard:RC,pricingCardMain:OC,planName:MC,planPrice:$C,planFeatures:IC,planButton:FC,toggleContainer:zC,toggleButton:AC,active:DC,codeContainer:UC,copyButton:HC},WC=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
import React from 'react';
import styles from './PricingPage1.module.css';

const PricingPage1: React.FC = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Pricing plans for teams of all sizes</h1>
      <p className={styles.subHeading}>
        Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Hobby</h2>
          <p className={styles.planPrice}>$15/month</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={\`\${styles.pricingCard} \${styles.pricingCardMain}\`}>
          <h2 className={styles.planName}>Startup</h2>
          <p className={styles.planPrice}>$60/month</p>
          <ul className={styles.planFeatures}>
            <li>25 products</li>
            <li>Up to 10,000 subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Freelancer</h2>
          <p className={styles.planPrice}>$30/month</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Enterprise</h2>
          <p className={styles.planPrice}>$90/month</p>
          <ul className={styles.planFeatures}>
            <li>Unlimited products</li>
            <li>Unlimited subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage1;
`,o=`
.pricingPageContainer {
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
}

.mainHeading {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.subHeading {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666;
}

.pricingSection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.pricingCard {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.planName {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.planPrice {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #007bff;
}

.planFeatures {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.planFeatures li {
  margin-bottom: 0.5rem;
  color: #333;
}

.planButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.planButton:hover {
  background-color: #0056b3;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.toggleButton {
  background-color: #e0e0e0;
  border: none;
  color: #333;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  background-color: #282c34;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  overflow-x: auto;
  max-height: 300px; /* You can adjust the max height as needed */
}

.copyButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 5px;
}
`,i=()=>{const a=e?r:o;navigator.clipboard.writeText(a).then(()=>{alert("Code copied to clipboard")})};return s.jsxs("div",{className:V.pricingPageContainer,children:[s.jsx("h1",{className:V.mainHeading,children:"Pricing plans for teams of all sizes"}),s.jsx("p",{className:V.subHeading,children:"Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales."}),s.jsxs("div",{className:V.pricingSection,children:[s.jsxs("div",{className:V.pricingCard,children:[s.jsx("h2",{className:V.planName,children:"Hobby"}),s.jsx("p",{className:V.planPrice,children:"$15/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"5 products"}),s.jsx("li",{children:"Up to 1,000 subscribers"}),s.jsx("li",{children:"Basic analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]}),s.jsxs("div",{className:`${V.pricingCard} ${V.pricingCardMain}`,children:[s.jsx("h2",{className:V.planName,children:"Startup"}),s.jsx("p",{className:V.planPrice,children:"$60/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"25 products"}),s.jsx("li",{children:"Up to 10,000 subscribers"}),s.jsx("li",{children:"Advanced analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]}),s.jsxs("div",{className:V.pricingCard,children:[s.jsx("h2",{className:V.planName,children:"Freelancer"}),s.jsx("p",{className:V.planPrice,children:"$30/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"5 products"}),s.jsx("li",{children:"Up to 1,000 subscribers"}),s.jsx("li",{children:"Basic analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]}),s.jsxs("div",{className:V.pricingCard,children:[s.jsx("h2",{className:V.planName,children:"Enterprise"}),s.jsx("p",{className:V.planPrice,children:"$90/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"Unlimited products"}),s.jsx("li",{children:"Unlimited subscribers"}),s.jsx("li",{children:"Advanced analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]})]}),s.jsxs("div",{className:V.toggleContainer,children:[s.jsx("button",{className:`${V.toggleButton} ${e?V.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${V.toggleButton} ${e?"":V.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:V.codeContainer,children:[s.jsx("pre",{children:e?r:o}),s.jsx("button",{className:V.copyButton,onClick:i,children:"Copy"})]})]})},qC="_pricingPageContainer_iekql_1",VC="_mainHeading_iekql_7",GC="_subHeading_iekql_13",QC="_pricingSection_iekql_19",XC="_pricingCard_iekql_27",KC="_pricingCardMain_iekql_36",JC="_planName_iekql_41",YC="_planPrice_iekql_47",ZC="_planFeatures_iekql_53",ej="_planButton_iekql_64",tj="_toggleContainer_iekql_77",nj="_toggleButton_iekql_84",rj="_active_iekql_94",oj="_codeContainer_iekql_99",ij="_copyButton_iekql_109",X={pricingPageContainer:qC,mainHeading:VC,subHeading:GC,pricingSection:QC,pricingCard:XC,pricingCardMain:KC,planName:JC,planPrice:YC,planFeatures:ZC,planButton:ej,toggleContainer:tj,toggleButton:nj,active:rj,codeContainer:oj,copyButton:ij},sj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
import React from 'react';
import styles from './PricingPage2.module.css';

const PricingPage2: React.FC = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Simple pricing, no commitment</h1>
      <p className={styles.subHeading}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.
      </p>
      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Starter</h2>
          <p className={styles.planPrice}>$15 USD</p>
          <ul className={styles.planFeatures}>
            <li>Basic invoicing</li>
            <li>Easy to use accounting</li>
            <li>Multi-accounts</li>
          </ul>
          <button className={styles.planButton}>Buy this plan</button>
        </div>
        <div className={\`\${styles.pricingCard} \${styles.pricingCardMain}\`}>
          <h2 className={styles.planName}>Scale</h2>
          <p className={styles.planPrice}>$60 USD</p>
          <ul className={styles.planFeatures}>
            <li>Advanced invoicing</li>
            <li>Easy to use accounting</li>
            <li>Multi-accounts</li>
            <li>Tax planning toolkit</li>
            <li>VAT & VATMOSS filing</li>
            <li>Free bank transfers</li>
          </ul>
          <button className={styles.planButton}>Buy this plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Growth</h2>
          <p className={styles.planPrice}>$30 USD</p>
          <ul className={styles.planFeatures}>
            <li>Basic invoicing</li>
            <li>Easy to use accounting</li>
            <li>Multi-accounts</li>
          </ul>
          <button className={styles.planButton}>Buy this plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage2;
`,o=`
.pricingPageContainer {
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
}

.mainHeading {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.subHeading {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666;
}

.pricingSection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.pricingCard {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pricingCardMain {
  background-color: #f0f0f0;
  border: 1px solid #007bff;
}

.planName {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.planPrice {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #007bff;
}

.planFeatures {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.planFeatures li {
  margin-bottom: 0.5rem;
  color: #333;
}

.planButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.planButton:hover {
  background-color: #0056b3;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.toggleButton {
  background-color: #e0e0e0;
  border: none;
  color: #333;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  background-color: #282c34;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  overflow-x: auto;
  max-height: 300px; /* You can adjust the max height as needed */
}

.copyButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 5px;
}
`,i=()=>{const a=e?r:o;navigator.clipboard.writeText(a).then(()=>{alert("Code copied to clipboard")})};return s.jsxs("div",{className:X.pricingPageContainer,children:[s.jsx("h1",{className:X.mainHeading,children:"Simple pricing, no commitment"}),s.jsx("p",{className:X.subHeading,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus."}),s.jsxs("div",{className:X.pricingSection,children:[s.jsxs("div",{className:X.pricingCard,children:[s.jsx("h2",{className:X.planName,children:"Starter"}),s.jsx("p",{className:X.planPrice,children:"$15 USD"}),s.jsxs("ul",{className:X.planFeatures,children:[s.jsx("li",{children:"Basic invoicing"}),s.jsx("li",{children:"Easy to use accounting"}),s.jsx("li",{children:"Multi-accounts"})]}),s.jsx("button",{className:X.planButton,children:"Buy this plan"})]}),s.jsxs("div",{className:`${X.pricingCard} ${X.pricingCardMain}`,children:[s.jsx("h2",{className:X.planName,children:"Scale"}),s.jsx("p",{className:X.planPrice,children:"$60 USD"}),s.jsxs("ul",{className:X.planFeatures,children:[s.jsx("li",{children:"Advanced invoicing"}),s.jsx("li",{children:"Easy to use accounting"}),s.jsx("li",{children:"Multi-accounts"}),s.jsx("li",{children:"Tax planning toolkit"}),s.jsx("li",{children:"VAT & VATMOSS filing"}),s.jsx("li",{children:"Free bank transfers"})]}),s.jsx("button",{className:X.planButton,children:"Buy this plan"})]}),s.jsxs("div",{className:X.pricingCard,children:[s.jsx("h2",{className:X.planName,children:"Growth"}),s.jsx("p",{className:X.planPrice,children:"$30 USD"}),s.jsxs("ul",{className:X.planFeatures,children:[s.jsx("li",{children:"Basic invoicing"}),s.jsx("li",{children:"Easy to use accounting"}),s.jsx("li",{children:"Multi-accounts"})]}),s.jsx("button",{className:X.planButton,children:"Buy this plan"})]})]}),s.jsxs("div",{className:X.toggleContainer,children:[s.jsx("button",{className:`${X.toggleButton} ${e?X.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${X.toggleButton} ${e?"":X.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:X.codeContainer,children:[s.jsx("pre",{children:e?r:o}),s.jsx("button",{className:X.copyButton,onClick:i,children:"Copy"})]})]})},aj="_featureSectionContainer_9lpqm_1",lj="_textContainer_9lpqm_8",cj="_cards_9lpqm_24",uj="_card_9lpqm_24",dj="_icon_9lpqm_37",pj="_codeToggle_9lpqm_61",fj="_toggleButton_9lpqm_67",mj="_active_9lpqm_77",hj="_codeSection_9lpqm_82",gj="_copyButton_9lpqm_93",je={featureSectionContainer:aj,textContainer:lj,cards:cj,card:uj,icon:dj,codeToggle:pj,toggleButton:fj,active:mj,codeSection:hj,copyButton:gj},vj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
import React from 'react';
import styles from './FeatureSection1.module.css';

const FeatureSection1: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Stay on top of customer support</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>📧</div>
            <h2>Unlimited inboxes</h2>
            <p>Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequuntur dolores incidunt.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>👥</div>
            <h2>Manage team members</h2>
            <p>Vero eum voluptatem aliquid nostrum voluptates. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🗑</div>
            <h2>Spam report</h2>
            <p>Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.</p>
            <a href="/">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection1;
  `,o=`
.featureSectionContainer {
  background-color: #1e293b;
  color: #fff;
  padding: 50px 20px;
  border-radius: 8px;
}

.textContainer {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #334155;
  padding: 20px;
  border-radius: 8px;
  flex: 1 1 calc(33.333% - 20px);
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

a {
  color: #38bdf8;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
  `;return s.jsxs("div",{className:je.featureSectionContainer,children:[s.jsxs("div",{className:je.textContainer,children:[s.jsx("h1",{children:"Stay on top of customer support"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}),s.jsxs("div",{className:je.cards,children:[s.jsxs("div",{className:je.card,children:[s.jsx("div",{className:je.icon,children:"📧"}),s.jsx("h2",{children:"Unlimited inboxes"}),s.jsx("p",{children:"Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequuntur dolores incidunt."}),s.jsx("a",{href:"/",children:"Learn more →"})]}),s.jsxs("div",{className:je.card,children:[s.jsx("div",{className:je.icon,children:"👥"}),s.jsx("h2",{children:"Manage team members"}),s.jsx("p",{children:"Vero eum voluptatem aliquid nostrum voluptates. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus."}),s.jsx("a",{href:"/",children:"Learn more →"})]}),s.jsxs("div",{className:je.card,children:[s.jsx("div",{className:je.icon,children:"🗑"}),s.jsx("h2",{children:"Spam report"}),s.jsx("p",{children:"Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit."}),s.jsx("a",{href:"/",children:"Learn more →"})]})]})]}),s.jsxs("div",{className:je.codeToggle,children:[s.jsx("button",{className:`${je.toggleButton} ${e?je.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${je.toggleButton} ${e?"":je.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:je.codeSection,children:[s.jsx("pre",{children:e?r:o}),s.jsx("button",{className:je.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"})]})]})},yj="_featureSectionContainer_1nm7x_1",xj="_textContainer_1nm7x_9",Sj="_features_1nm7x_28",_j="_icon_1nm7x_39",wj="_imageContainer_1nm7x_44",Cj="_codeSection_1nm7x_54",jj="_toggleButtons_1nm7x_58",Nj="_toggleButton_1nm7x_58",bj="_active_1nm7x_74",kj="_codeContainer_1nm7x_79",Pj="_copyButton_1nm7x_91",Le={featureSectionContainer:yj,textContainer:xj,features:Sj,icon:_j,imageContainer:wj,codeSection:Cj,toggleButtons:jj,toggleButton:Nj,active:bj,codeContainer:kj,copyButton:Pj},Ej=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
import React from 'react';
import styles from './FeatureSection2.module.css';

const FeatureSection2: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Deploy faster</h1>
        <h2>A better workflow</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
        <ul className={styles.features}>
          <li>
            <div className={styles.icon}>🚀</div>
            <div>
              <h3>Push to deploy</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </li>
          <li>
            <div className={styles.icon}>🔒</div>
            <div>
              <h3>SSL certificates</h3>
              <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
            </div>
          </li>
          <li>
            <div className={styles.icon}>💾</div>
            <div>
              <h3>Database backups</h3>
              <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x400" alt="Example" />
      </div>
    </div>
  );
};

export default FeatureSection2;
`,o=`
.featureSectionContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9fafb;
}

.textContainer {
  max-width: 600px;
}

.textContainer h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.textContainer h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.textContainer p {
  font-size: 16px;
  margin-bottom: 30px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  font-size: 40px;
  margin-right: 20px;
}

.imageContainer {
  max-width: 800px;
}

.imageContainer img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.codeSection {
  margin-top: 40px;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.toggleButton {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e2e8f0;
  color: #1a202c;
}

.toggleButton.active {
  background-color: #3182ce;
  color: #fff;
}

.codeContainer {
  position: relative;
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
  max-height: 200px;
}

.copyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #3182ce;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
`;return s.jsxs("div",{children:[s.jsxs("div",{className:Le.featureSectionContainer,children:[s.jsxs("div",{className:Le.textContainer,children:[s.jsx("h1",{children:"Deploy faster"}),s.jsx("h2",{children:"A better workflow"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}),s.jsxs("ul",{className:Le.features,children:[s.jsxs("li",{children:[s.jsx("div",{className:Le.icon,children:"🚀"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Push to deploy"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:Le.icon,children:"🔒"}),s.jsxs("div",{children:[s.jsx("h3",{children:"SSL certificates"}),s.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:Le.icon,children:"💾"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Database backups"}),s.jsx("p",{children:"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."})]})]})]})]}),s.jsx("div",{className:Le.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Example"})})]}),s.jsxs("div",{className:Le.codeSection,children:[s.jsxs("div",{className:Le.toggleButtons,children:[s.jsx("button",{className:`${Le.toggleButton} ${e?Le.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${Le.toggleButton} ${e?"":Le.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:Le.codeContainer,children:[s.jsx("button",{className:Le.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),s.jsx("pre",{children:s.jsx("code",{children:e?r:o})})]})]})]})},Bj="_featureSectionContainer_5fr9w_1",Tj="_textContainer_5fr9w_9",Lj="_features_5fr9w_34",Rj="_imageContainer_5fr9w_59",Oj="_codeSection_5fr9w_70",Mj="_toggleButtons_5fr9w_74",$j="_toggleButton_5fr9w_74",Ij="_active_5fr9w_90",Fj="_codeContainer_5fr9w_95",zj="_copyButton_5fr9w_107",tt={featureSectionContainer:Bj,textContainer:Tj,features:Lj,imageContainer:Rj,codeSection:Oj,toggleButtons:Mj,toggleButton:$j,active:Ij,codeContainer:Fj,copyButton:zj},Aj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
import React from 'react';
import styles from './FeatureSection3.module.css';

const FeatureSection3: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h2>Everything you need</h2>
        <h1>All-in-one platform</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
        <ul className={styles.features}>
          <li>Invite team members</li>
          <li>Keyboard shortcuts</li>
          <li>Notifications</li>
          <li>Reporting</li>
          <li>List view</li>
          <li>Calendars</li>
          <li>Boards</li>
          <li>Mobile app</li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x400" alt="Example" />
      </div>
    </div>
  );
};

export default FeatureSection3;
`,o=`
.featureSectionContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9fafb;
}

.textContainer {
  max-width: 600px;
}

.textContainer h1 {
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.textContainer h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #4a5568;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.textContainer p {
  font-size: 16px;
  margin-bottom: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.features {
  list-style: none;
  padding: 0;
  columns: 2;
}

.features li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
  color: #2d3748;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.features li::before {
  content: '✔';
  margin-right: 10px;
  color: #3182ce;
}

.imageContainer {
  max-width: 800px;
  padding-left: 50px;
}

.imageContainer img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.codeSection {
  margin-top: 40px;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.toggleButton {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e2e8f0;
  color: #1a202c;
}

.toggleButton.active {
  background-color: #3182ce;
  color: #fff;
}

.codeContainer {
  position: relative;
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
  max-height: 300px; /* Adjust height for scrolling */
}

.copyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #3182ce;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
`;return s.jsxs("div",{children:[s.jsxs("div",{className:tt.featureSectionContainer,children:[s.jsxs("div",{className:tt.textContainer,children:[s.jsx("h2",{children:"Everything you need"}),s.jsx("h1",{children:"All-in-one platform"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}),s.jsxs("ul",{className:tt.features,children:[s.jsx("li",{children:"Invite team members"}),s.jsx("li",{children:"Keyboard shortcuts"}),s.jsx("li",{children:"Notifications"}),s.jsx("li",{children:"Reporting"}),s.jsx("li",{children:"List view"}),s.jsx("li",{children:"Calendars"}),s.jsx("li",{children:"Boards"}),s.jsx("li",{children:"Mobile app"})]})]}),s.jsx("div",{className:tt.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Example"})})]}),s.jsxs("div",{className:tt.codeSection,children:[s.jsxs("div",{className:tt.toggleButtons,children:[s.jsx("button",{className:`${tt.toggleButton} ${e?tt.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${tt.toggleButton} ${e?"":tt.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:tt.codeContainer,children:[s.jsx("button",{className:tt.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),s.jsx("pre",{children:s.jsx("code",{children:e?r:o})})]})]})]})},Dj="_ctaSection_uqicq_1",Uj="_textContainer_uqicq_10",Hj="_buttons_uqicq_29",Wj="_primaryButton_uqicq_34",qj="_secondaryButton_uqicq_42",Vj="_imageContainer_uqicq_50",Gj="_codeSection_uqicq_58",Qj="_codeHeader_uqicq_66",Xj="_toggleButtons_uqicq_73",Kj="_toggleButton_uqicq_73",Jj="_active_uqicq_87",Yj="_codeBlock_uqicq_91",Zj="_copyButton_uqicq_99",Re={ctaSection:Dj,textContainer:Uj,buttons:Hj,primaryButton:Wj,secondaryButton:qj,imageContainer:Vj,codeSection:Gj,codeHeader:Qj,toggleButtons:Xj,toggleButton:Kj,active:Jj,codeBlock:Yj,copyButton:Zj},e2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{t(!e)},i=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`import React from 'react';
import styles from './CTASection1.module.css';

const CTASection1: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.textContainer}>
        <h1>Boost your productivity.</h1>
        <h2>Start using our app today.</h2>
        <p>
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Get started</button>
          <button className={styles.secondaryButton}>Learn more</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/400x400" alt="Productivity" />
      </div>
    </div>
  );
};

export default CTASection1;
`,l=`.ctaSection {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 50px;
}

.textContainer {
  max-width: 500px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.primaryButton {
  background-color: #7f56d9;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.secondaryButton {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.imageContainer {
  margin-left: 2rem;
}

.imageContainer img {
  border-radius: 10px;
}
`;return s.jsxs("div",{children:[s.jsxs("div",{className:Re.ctaSection,children:[s.jsxs("div",{className:Re.textContainer,children:[s.jsx("h1",{children:"Boost your productivity."}),s.jsx("h2",{children:"Start using our app today."}),s.jsx("p",{children:"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."}),s.jsxs("div",{className:Re.buttons,children:[s.jsx("button",{className:Re.primaryButton,children:"Get started"}),s.jsx("button",{className:Re.secondaryButton,children:"Learn more"})]})]}),s.jsx("div",{className:Re.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/400x400",alt:"Productivity"})})]}),s.jsxs("div",{className:Re.codeSection,children:[s.jsxs("div",{className:Re.codeHeader,children:[s.jsxs("div",{className:Re.toggleButtons,children:[s.jsx("button",{className:`${Re.toggleButton} ${e?Re.active:""}`,onClick:o,children:"TSX"}),s.jsx("button",{className:`${Re.toggleButton} ${e?"":Re.active}`,onClick:o,children:"CSS"})]}),s.jsx("button",{className:Re.copyButton,onClick:i,children:n?"Code copied!":"Copy"})]}),s.jsx("pre",{className:Re.codeBlock,children:s.jsx("code",{children:e?a:l})})]})]})},t2="_ctaSection_1j0um_1",n2="_imageContainer_1j0um_10",r2="_textContainer_1j0um_20",o2="_primaryButton_1j0um_41",i2="_codeSection_1j0um_49",s2="_codeHeader_1j0um_57",a2="_toggleButtons_1j0um_64",l2="_toggleButton_1j0um_64",c2="_active_1j0um_78",u2="_codeBlock_1j0um_82",d2="_copyButton_1j0um_90",Ge={ctaSection:t2,imageContainer:n2,textContainer:r2,primaryButton:o2,codeSection:i2,codeHeader:s2,toggleButtons:a2,toggleButton:l2,active:c2,codeBlock:u2,copyButton:d2},p2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{t(!e)},i=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`import React from 'react';
import styles from './CTASection2.module.css';

const CTASection2: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x400" alt="Support" />
      </div>
      <div className={styles.textContainer}>
        <h3>Award winning support</h3>
        <h1>We're here to help</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. 
          Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <button className={styles.primaryButton}>Visit the help center</button>
      </div>
    </div>
  );
};

export default CTASection2;
`,l=`.ctaSection {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 50px;
}

.imageContainer {
  flex: 1;
}

.imageContainer img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.textContainer {
  flex: 1;
  max-width: 500px;
  margin-left: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  color: #a5b4fc;
}

p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.primaryButton {
  background-color: #7f56d9;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}
`;return s.jsxs("div",{children:[s.jsxs("div",{className:Ge.ctaSection,children:[s.jsx("div",{className:Ge.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Support"})}),s.jsxs("div",{className:Ge.textContainer,children:[s.jsx("h3",{children:"Award winning support"}),s.jsx("h1",{children:"We're here to help"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."}),s.jsx("button",{className:Ge.primaryButton,children:"Visit the help center"})]})]}),s.jsxs("div",{className:Ge.codeSection,children:[s.jsxs("div",{className:Ge.codeHeader,children:[s.jsxs("div",{className:Ge.toggleButtons,children:[s.jsx("button",{className:`${Ge.toggleButton} ${e?Ge.active:""}`,onClick:o,children:"TSX"}),s.jsx("button",{className:`${Ge.toggleButton} ${e?"":Ge.active}`,onClick:o,children:"CSS"})]}),s.jsx("button",{className:Ge.copyButton,onClick:i,children:n?"Code copied!":"Copy"})]}),s.jsx("pre",{className:Ge.codeBlock,children:s.jsx("code",{children:e?a:l})})]})]})},f2="_ctaSection_19d2u_1",m2="_content_19d2u_9",h2="_imageContainer_19d2u_24",g2="_primaryButton_19d2u_35",v2="_codeSection_19d2u_44",y2="_toggleButton_19d2u_50",x2="_active_19d2u_58",S2="_codeBox_19d2u_63",_2="_copyButton_19d2u_73",pt={ctaSection:f2,content:m2,imageContainer:h2,primaryButton:g2,codeSection:v2,toggleButton:y2,active:x2,codeBox:S2,copyButton:_2},w2=()=>{const[e,t]=C.useState(!0),n=()=>t(!e),r=`
import React from 'react';
import styles from './CTASection3.module.css';

const CTASection3: React.FC = () => {
    return (
        <div className={styles.ctaSection}>
            <div className={styles.content}>
                <h2>Our people</h2>
                <p>
                    Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
                    molestiae velit error quod. Excepturi quidem expedita molestias quas.
                </p>
                <div className={styles.imageContainer}>
                    <img src="https://via.placeholder.com/400x300" alt="Team" />
                    <img src="https://via.placeholder.com/400x300" alt="Work" />
                    <img src="https://via.placeholder.com/400x300" alt="Play" />
                </div>
                <button className={styles.primaryButton}>Join our team</button>
            </div>
        </div>
    );
};

export default CTASection3;
`,o=`
.ctaSection {
    padding: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.content {
    text-align: center;
    color: #333;
}

h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.imageContainer {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

img {
    border-radius: 8px;
}

.primaryButton {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.codeSection {
    width: 100%;
    text-align: center;
    margin-top: 20px;
}

.toggleButton {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.active {
    background-color: #3b82f6;
    color: white;
}

.codeBox {
    padding: 20px;
    border-radius: 5px;
    background-color: #1e1e1e;
    overflow: auto;
    white-space: pre-wrap;
    position: relative;
    color: white;
}

.copyButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
`;return s.jsxs("div",{className:pt.ctaSection,children:[s.jsxs("div",{className:pt.content,children:[s.jsx("h2",{children:"Our people"}),s.jsx("p",{children:"Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas."}),s.jsxs("div",{className:pt.imageContainer,children:[s.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Team"}),s.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Work"}),s.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Play"})]}),s.jsx("button",{className:pt.primaryButton,children:"Join our team"})]}),s.jsxs("div",{className:pt.codeSection,children:[s.jsx("button",{className:`${pt.toggleButton} ${e?pt.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${pt.toggleButton} ${e?"":pt.active}`,onClick:n,children:"CSS"}),s.jsxs("pre",{className:pt.codeBox,children:[s.jsx("button",{className:pt.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),s.jsx("code",{children:e?r:o})]})]})]})},C2="_heroSectionDemo_1htu2_1",j2="_nav_1htu2_9",N2="_content_1htu2_27",b2="_primaryButton_1htu2_44",k2="_secondaryButton_1htu2_45",P2="_codeSection_1htu2_74",E2="_toggleButtons_1htu2_83",B2="_toggleButton_1htu2_83",T2="_active_1htu2_103",L2="_codeContainer_1htu2_107",R2="_code_1htu2_74",O2="_copyButton_1htu2_119",M2="_copySuccess_1htu2_135",Oe={heroSectionDemo:C2,nav:j2,content:N2,primaryButton:b2,secondaryButton:k2,codeSection:P2,toggleButtons:E2,toggleButton:B2,active:T2,codeContainer:L2,code:R2,copyButton:O2,copySuccess:M2},$2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{t(!e)},i=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`
import React from 'react';
import styles from './HeroSection1.module.css';

const HeroSection1: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <nav className={styles.nav}>
        <a href="#">Product</a>
        <a href="#">Features</a>
        <a href="#">Marketplace</a>
        <a href="#">Company</a>
        <a href="#">Log in</a>
      </nav>
      <div className={styles.content}>
        <h1>Data to enrich your online business</h1>
        <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <button className={styles.primaryButton}>Get started</button>
        <button className={styles.secondaryButton}>Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection1;
  `,l=`
.heroSection {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(120deg, #f3ec78, #af4261);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav a {
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover {
  color: #ddd;
}

.content {
  max-width: 600px;
  margin: 0 auto;
  color: #fff;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
}

.content p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.primaryButton,
.secondaryButton {
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;
  font-size: 1rem;
}

.primaryButton {
  background-color: #4f46e5;
  color: #fff;
}

.primaryButton:hover {
  background-color: #4338ca;
}

.secondaryButton {
  background-color: #fff;
  color: #4f46e5;
  border: 1px solid #4f46e5;
}

.secondaryButton:hover {
  background-color: #f3f4f6;
}

.codeSection {
  margin-top: 40px;
  text-align: left;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.toggleButton {
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.2s;
}

.toggleButton:hover {
  background-color: #4338ca;
}

.toggleButton.active {
  background-color: #6366f1;
}

.codeContainer {
  position: relative;
}

.code {
  background-color: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
}

.copyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.copyButton:hover {
  background-color: #4338ca;
}
  `;return s.jsxs("div",{children:[s.jsxs("div",{className:Oe.heroSectionDemo,children:[s.jsxs("nav",{className:Oe.nav,children:[s.jsx("a",{href:"#",children:"Product"}),s.jsx("a",{href:"#",children:"Features"}),s.jsx("a",{href:"#",children:"Marketplace"}),s.jsx("a",{href:"#",children:"Company"}),s.jsx("a",{href:"#",children:"Log in"})]}),s.jsxs("div",{className:Oe.content,children:[s.jsx("h1",{children:"Data to enrich your online business"}),s.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),s.jsx("button",{className:Oe.primaryButton,children:"Get started"}),s.jsx("button",{className:Oe.secondaryButton,children:"Learn more"})]})]}),s.jsxs("div",{className:Oe.codeSection,children:[s.jsxs("div",{className:Oe.toggleButtons,children:[s.jsx("button",{className:`${Oe.toggleButton} ${e?Oe.active:""}`,onClick:o,children:"TSX"}),s.jsx("button",{className:`${Oe.toggleButton} ${e?"":Oe.active}`,onClick:o,children:"CSS"})]}),s.jsxs("div",{className:Oe.codeContainer,children:[s.jsx("pre",{className:Oe.code,children:e?a:l}),s.jsx("button",{className:Oe.copyButton,onClick:i,children:"Copy"}),n&&s.jsx("div",{className:Oe.copySuccess,children:n})]})]})]})},I2="_heroSection_82ka0_1",F2="_textContainer_82ka0_9",z2="_badge_82ka0_14",A2="_version_82ka0_24",D2="_buttons_82ka0_42",U2="_primaryButton_82ka0_48",H2="_secondaryButton_82ka0_57",W2="_codeContainer_82ka0_66",q2="_codeHeader_82ka0_75",V2="_toggleButton_82ka0_81",G2="_active_82ka0_91",Q2="_codeBlock_82ka0_95",X2="_copyButton_82ka0_104",K2="_copySuccess_82ka0_120",J2="_fadeOut_82ka0_1",Ne={heroSection:I2,textContainer:F2,badge:z2,version:A2,buttons:D2,primaryButton:U2,secondaryButton:H2,codeContainer:W2,codeHeader:q2,toggleButton:V2,active:G2,codeBlock:Q2,copyButton:X2,copySuccess:K2,fadeOut:J2},Y2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{const l=e?i:a;navigator.clipboard.writeText(l),r("Code Copied!"),setTimeout(()=>r(""),2e3)},i=`
import { useState } from 'react';
import { Switch } from '@headlessui/react';

function Example() {
  const [enabled, setEnabled] = useState(true);

  return (
    <form action="/notification-settings" method="post">
      <Switch checked={enabled} onChange={setEnabled} name="notifications">
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  );
}
`,a=`
.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f7fafc;
}

.textContainer {
  max-width: 600px;
  text-align: center;
}

.badge {
  background-color: #e2e8f0;
  color: #4a5568;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 8px;
}

.version {
  color: #718096;
  font-size: 14px;
  margin-bottom: 16px;
}

h1 {
  font-size: 48px;
  color: #2d3748;
  margin-bottom: 24px;
}

p {
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 32px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.primaryButton {
  background-color: #5a67d8;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.secondaryButton {
  background-color: #edf2f7;
  color: #2d3748;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.codeContainer {
  background-color: #1a202c;
  padding: 16px;
  border-radius: 8px;
  position: relative;
  width: 100%;
  margin-top: 40px;
}

.codeHeader {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.toggleButton {
  background-color: #2d3748;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 4px;
}

.toggleButton.active {
  background-color: #5a67d8;
}

.codeBlock {
  background-color: #2d3748;
  color: #f7fafc;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  max-height: 300px;
}

.copyButton {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #5a67d8;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.copyButton:active {
  background-color: #4c51bf;
}
`;return s.jsxs("div",{className:Ne.heroSection,children:[s.jsxs("div",{className:Ne.textContainer,children:[s.jsx("div",{className:Ne.badge,children:"What's new"}),s.jsx("div",{className:Ne.version,children:"Just shipped v0.1.0"}),s.jsx("h1",{children:"Supercharge your web applications"}),s.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),s.jsxs("div",{className:Ne.buttons,children:[s.jsx("button",{className:Ne.primaryButton,children:"Documentation"}),s.jsx("button",{className:Ne.secondaryButton,children:"View on GitHub"})]})]}),s.jsxs("div",{className:Ne.codeContainer,children:[s.jsxs("div",{className:Ne.codeHeader,children:[s.jsx("button",{className:`${Ne.toggleButton} ${e?Ne.active:""}`,onClick:()=>t(!0),children:"TSX"}),s.jsx("button",{className:`${Ne.toggleButton} ${e?"":Ne.active}`,onClick:()=>t(!1),children:"CSS"})]}),s.jsx("pre",{className:Ne.codeBlock,children:s.jsx("code",{children:e?i:a})}),s.jsx("button",{className:Ne.copyButton,onClick:o,children:"Copy"}),n&&s.jsx("div",{className:Ne.copySuccess,children:n})]})]})},Z2=()=>s.jsx(o0,{children:s.jsxs(Iv,{children:[s.jsx(i0,{}),s.jsxs(Bv,{children:[s.jsx(U,{path:"/",element:s.jsx(m0,{})}),s.jsx(U,{path:"/components",element:s.jsx(Fx,{})}),s.jsx(U,{path:"/utilities",element:s.jsx(zx,{})}),s.jsx(U,{path:"/documentation",element:s.jsx(Ax,{})}),s.jsx(U,{path:"/examples",element:s.jsx(Dx,{})}),s.jsx(U,{path:"/signup",element:s.jsx(CS,{})}),s.jsx(U,{path:"/login",element:s.jsx(RS,{})}),s.jsx(U,{path:"/button",element:s.jsx(If,{})}),s.jsx(U,{path:"/navbarsection",element:s.jsx(zf,{})}),s.jsx(U,{path:"/cardsection",element:s.jsx(Ff,{})}),s.jsx(U,{path:"/aboutpage",element:s.jsx(Mf,{})}),s.jsx(U,{path:"/aboutpage1",element:s.jsx(ew,{})}),s.jsx(U,{path:"/aboutpage2",element:s.jsx(Sw,{})}),s.jsx(U,{path:"/aboutpage3",element:s.jsx(Hw,{})}),s.jsx(U,{path:"/loginpage",element:s.jsx($f,{})}),s.jsx(U,{path:"/loginpage1",element:s.jsx(nC,{})}),s.jsx(U,{path:"/loginpage2",element:s.jsx(hC,{})}),s.jsx(U,{path:"/loginpage3",element:s.jsx(PC,{})}),s.jsx(U,{path:"/pricingpage",element:s.jsx(Of,{})}),s.jsx(U,{path:"/pricingpage1",element:s.jsx(WC,{})}),s.jsx(U,{path:"/pricingpage2",element:s.jsx(sj,{})}),s.jsx(U,{path:"/featuresection",element:s.jsx(Lf,{})}),s.jsx(U,{path:"/featuresection1",element:s.jsx(vj,{})}),s.jsx(U,{path:"/featuresection2",element:s.jsx(Ej,{})}),s.jsx(U,{path:"/featuresection3",element:s.jsx(Aj,{})}),s.jsx(U,{path:"/ctasection",element:s.jsx(Rf,{})}),s.jsx(U,{path:"/ctasection1",element:s.jsx(e2,{})}),s.jsx(U,{path:"/ctasection2",element:s.jsx(p2,{})}),s.jsx(U,{path:"/ctasection3",element:s.jsx(w2,{})}),s.jsx(U,{path:"/herosection",element:s.jsx(Tf,{})}),s.jsx(U,{path:"/herosection1",element:s.jsx($2,{})}),s.jsx(U,{path:"/herosection2",element:s.jsx(Y2,{})})]}),s.jsx(IS,{})]})});na.createRoot(document.getElementById("root")).render(s.jsx(It.StrictMode,{children:s.jsx(Z2,{})}));
