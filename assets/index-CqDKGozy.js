function Cm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dd={exports:{}},Ki={},pd={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),bm=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),Pm=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Lm=Symbol.for("react.suspense"),Rm=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),jc=Symbol.iterator;function $m(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var fd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},md=Object.assign,hd={};function fr(e,t,n){this.props=e,this.context=t,this.refs=hd,this.updater=n||fd}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gd(){}gd.prototype=fr.prototype;function xl(e,t,n){this.props=e,this.context=t,this.refs=hd,this.updater=n||fd}var yl=xl.prototype=new gd;yl.constructor=xl;md(yl,fr.prototype);yl.isPureReactComponent=!0;var Nc=Array.isArray,vd=Object.prototype.hasOwnProperty,_l={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function yd(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)vd.call(t,r)&&!xd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:xo,type:e,key:i,ref:a,props:o,_owner:_l.current}}function Mm(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function Im(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bc=/\/+/g;function ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Im(""+e.key):t.toString(36)}function ri(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xo:case Nm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ks(a,0):r,Nc(o)?(n="",e!=null&&(n=e.replace(bc,"$&/")+"/"),ri(o,t,n,"",function(u){return u})):o!=null&&(Sl(o)&&(o=Mm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(bc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Nc(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+ks(i,l);a+=ri(i,t,n,c,o)}else if(c=$m(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+ks(i,l++),a+=ri(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Oo(e,t,n){if(e==null)return e;var r=[],o=0;return ri(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Fm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},oi={transition:null},zm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:oi,ReactCurrentOwner:_l};function _d(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Oo,forEach:function(e,t,n){Oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oo(e,function(){t++}),t},toArray:function(e){return Oo(e,function(t){return t})||[]},only:function(e){if(!Sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=fr;A.Fragment=bm;A.Profiler=Pm;A.PureComponent=xl;A.StrictMode=km;A.Suspense=Lm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;A.act=_d;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=md({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=_l.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)vd.call(t,c)&&!xd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xo,type:e.type,key:o,ref:i,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:Bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Em,_context:e},e.Consumer=e};A.createElement=yd;A.createFactory=function(e){var t=yd.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Tm,render:e}};A.isValidElement=Sl;A.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:Fm}};A.memo=function(e,t){return{$$typeof:Rm,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=oi.transition;oi.transition={};try{e()}finally{oi.transition=t}};A.unstable_act=_d;A.useCallback=function(e,t){return Fe.current.useCallback(e,t)};A.useContext=function(e){return Fe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};A.useEffect=function(e,t){return Fe.current.useEffect(e,t)};A.useId=function(){return Fe.current.useId()};A.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Fe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};A.useRef=function(e){return Fe.current.useRef(e)};A.useState=function(e){return Fe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Fe.current.useTransition()};A.version="18.3.1";pd.exports=A;var C=pd.exports;const Ft=jm(C),Am=Cm({__proto__:null,default:Ft},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=C,Um=Symbol.for("react.element"),Hm=Symbol.for("react.fragment"),Wm=Object.prototype.hasOwnProperty,qm=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vm={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Wm.call(t,r)&&!Vm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Um,type:e,key:i,ref:a,props:o,_owner:qm.current}}Ki.Fragment=Hm;Ki.jsx=Sd;Ki.jsxs=Sd;dd.exports=Ki;var s=dd.exports,da={},wd={exports:{}},Ze={},Cd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var I=T.length;T.push(O);e:for(;0<I;){var se=I-1>>>1,he=T[se];if(0<o(he,O))T[se]=O,T[I]=he,I=se;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],I=T.pop();if(I!==O){T[0]=I;e:for(var se=0,he=T.length,Lo=he>>>1;se<Lo;){var vn=2*(se+1)-1,bs=T[vn],xn=vn+1,Ro=T[xn];if(0>o(bs,I))xn<he&&0>o(Ro,bs)?(T[se]=Ro,T[xn]=I,se=xn):(T[se]=bs,T[vn]=I,se=vn);else if(xn<he&&0>o(Ro,I))T[se]=Ro,T[xn]=I,se=xn;else break e}}return O}function o(T,O){var I=T.sortIndex-O.sortIndex;return I!==0?I:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,m=3,v=!1,x=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function _(T){if(y=!1,h(T),!x)if(n(c)!==null)x=!0,js(S);else{var O=n(u);O!==null&&Ns(_,O.startTime-T)}}function S(T,O){x=!1,y&&(y=!1,g(k),k=-1),v=!0;var I=m;try{for(h(O),f=n(c);f!==null&&(!(f.expirationTime>O)||T&&!Ve());){var se=f.callback;if(typeof se=="function"){f.callback=null,m=f.priorityLevel;var he=se(f.expirationTime<=O);O=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(c)&&r(c),h(O)}else r(c);f=n(c)}if(f!==null)var Lo=!0;else{var vn=n(u);vn!==null&&Ns(_,vn.startTime-O),Lo=!1}return Lo}finally{f=null,m=I,v=!1}}var b=!1,E=null,k=-1,K=5,M=-1;function Ve(){return!(e.unstable_now()-M<K)}function _r(){if(E!==null){var T=e.unstable_now();M=T;var O=!0;try{O=E(!0,T)}finally{O?Sr():(b=!1,E=null)}}else b=!1}var Sr;if(typeof p=="function")Sr=function(){p(_r)};else if(typeof MessageChannel<"u"){var Cc=new MessageChannel,wm=Cc.port2;Cc.port1.onmessage=_r,Sr=function(){wm.postMessage(null)}}else Sr=function(){j(_r,0)};function js(T){E=T,b||(b=!0,Sr())}function Ns(T,O){k=j(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,js(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var I=m;m=O;try{return T()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=m;m=T;try{return O()}finally{m=I}},e.unstable_scheduleCallback=function(T,O,I){var se=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=I+he,T={id:d++,callback:O,priorityLevel:T,startTime:I,expirationTime:he,sortIndex:-1},I>se?(T.sortIndex=I,t(u,T),n(c)===null&&T===n(u)&&(y?(g(k),k=-1):y=!0,Ns(_,I-se))):(T.sortIndex=he,t(c,T),x||v||(x=!0,js(S))),T},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(T){var O=m;return function(){var I=m;m=O;try{return T.apply(this,arguments)}finally{m=I}}}})(jd);Cd.exports=jd;var Gm=Cd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=C,Ye=Gm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nd=new Set,Jr={};function In(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)Nd.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Pc={};function Km(e){return pa.call(Pc,e)?!0:pa.call(kc,e)?!1:Xm.test(e)?Pc[e]=!0:(kc[e]=!0,!1)}function Jm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ym(e,t,n,r){if(t===null||typeof t>"u"||Jm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function Cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wl,Cl);_e[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wl,Cl);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wl,Cl);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function jl(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ym(t,n,o,r)&&(n=null),r||o===null?Km(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Nl=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),kd=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),kl=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Pd=Symbol.for("react.offscreen"),Ec=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ps;function $r(e){if(Ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ps=t&&t[1]||""}return`
`+Ps+e}var Es=!1;function Bs(e,t){if(!e||Es)return"";Es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function Zm(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Un:return"Portal";case fa:return"Profiler";case Nl:return"StrictMode";case ma:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kd:return(e.displayName||"Context")+".Consumer";case bd:return(e._context.displayName||"Context")+".Provider";case bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kl:return t=e.displayName||null,t!==null?t:ga(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return ga(e(t))}catch{}}return null}function eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(t);case 8:return t===Nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function th(e){var t=Ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){e._valueTracker||(e._valueTracker=th(e))}function Bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function va(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Td(e,t){t=t.checked,t!=null&&jl(e,"checked",t,!1)}function xa(e,t){Td(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Mr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function Ld(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Io,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nh=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){nh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function $d(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$d(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var rh=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(e,t){if(t){if(rh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,tr=null,nr=null;function Oc(e){if(e=So(e)){if(typeof Na!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ts(t),Na(e.stateNode,e.type,t))}}function Id(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Fd(){if(tr){var e=tr,t=nr;if(nr=tr=null,Oc(e),t)for(e=0;e<t.length;e++)Oc(t[e])}}function zd(e,t){return e(t)}function Ad(){}var Ts=!1;function Dd(e,t,n){if(Ts)return e(t,n);Ts=!0;try{return zd(e,t,n)}finally{Ts=!1,(tr!==null||nr!==null)&&(Ad(),Fd())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ba=!1;if(At)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ba=!1}function oh(e,t,n,r,o,i,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Dr=!1,xi=null,yi=!1,ka=null,ih={onError:function(e){Dr=!0,xi=e}};function sh(e,t,n,r,o,i,a,l,c){Dr=!1,xi=null,oh.apply(ih,arguments)}function ah(e,t,n,r,o,i,a,l,c){if(sh.apply(this,arguments),Dr){if(Dr){var u=xi;Dr=!1,xi=null}else throw Error(N(198));yi||(yi=!0,ka=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ud(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $c(e){if(Fn(e)!==e)throw Error(N(188))}function lh(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $c(o),e;if(i===r)return $c(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Hd(e){return e=lh(e),e!==null?Wd(e):null}function Wd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wd(e);if(t!==null)return t;e=e.sibling}return null}var qd=Ye.unstable_scheduleCallback,Mc=Ye.unstable_cancelCallback,ch=Ye.unstable_shouldYield,uh=Ye.unstable_requestPaint,ae=Ye.unstable_now,dh=Ye.unstable_getCurrentPriorityLevel,El=Ye.unstable_ImmediatePriority,Vd=Ye.unstable_UserBlockingPriority,_i=Ye.unstable_NormalPriority,ph=Ye.unstable_LowPriority,Gd=Ye.unstable_IdlePriority,Ji=null,kt=null;function fh(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:gh,mh=Math.log,hh=Math.LN2;function gh(e){return e>>>=0,e===0?32:31-(mh(e)/hh|0)|0}var Fo=64,zo=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Ir(l):(i&=a,i!==0&&(r=Ir(i)))}else a=n&~o,a!==0?r=Ir(a):i!==0&&(r=Ir(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function vh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-vt(i),l=1<<a,c=o[a];c===-1?(!(l&n)||l&r)&&(o[a]=vh(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qd(){var e=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),e}function Ls(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function yh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function Xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,Tl,Jd,Yd,Zd,Ea=!1,Ao=[],nn=null,rn=null,on=null,eo=new Map,to=new Map,Jt=[],_h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function jr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=So(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sh(e,t,n,r,o){switch(t){case"focusin":return nn=jr(nn,e,t,n,r,o),!0;case"dragenter":return rn=jr(rn,e,t,n,r,o),!0;case"mouseover":return on=jr(on,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return eo.set(i,jr(eo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,to.set(i,jr(to.get(i)||null,e,t,n,r,o)),!0}return!1}function ep(e){var t=Nn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ud(n),t!==null){e.blockedOn=t,Zd(e.priority,function(){Jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ja=r,n.target.dispatchEvent(r),ja=null}else return t=So(n),t!==null&&Tl(t),e.blockedOn=n,!1;t.shift()}return!0}function Fc(e,t,n){ii(e)&&n.delete(t)}function wh(){Ea=!1,nn!==null&&ii(nn)&&(nn=null),rn!==null&&ii(rn)&&(rn=null),on!==null&&ii(on)&&(on=null),eo.forEach(Fc),to.forEach(Fc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ea||(Ea=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,wh)))}function no(e){function t(o){return Nr(o,e)}if(0<Ao.length){Nr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Nr(nn,e),rn!==null&&Nr(rn,e),on!==null&&Nr(on,e),eo.forEach(t),to.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)ep(n),n.blockedOn===null&&Jt.shift()}var rr=Wt.ReactCurrentBatchConfig,wi=!0;function Ch(e,t,n,r){var o=Q,i=rr.transition;rr.transition=null;try{Q=1,Ll(e,t,n,r)}finally{Q=o,rr.transition=i}}function jh(e,t,n,r){var o=Q,i=rr.transition;rr.transition=null;try{Q=4,Ll(e,t,n,r)}finally{Q=o,rr.transition=i}}function Ll(e,t,n,r){if(wi){var o=Ba(e,t,n,r);if(o===null)Us(e,t,r,Ci,n),Ic(e,r);else if(Sh(o,e,t,n,r))r.stopPropagation();else if(Ic(e,r),t&4&&-1<_h.indexOf(e)){for(;o!==null;){var i=So(o);if(i!==null&&Kd(i),i=Ba(e,t,n,r),i===null&&Us(e,t,r,Ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Us(e,t,r,null,n)}}var Ci=null;function Ba(e,t,n,r){if(Ci=null,e=Pl(r),e=Nn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ud(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ci=e,null}function tp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dh()){case El:return 1;case Vd:return 4;case _i:case ph:return 16;case Gd:return 536870912;default:return 16}default:return 16}}var Zt=null,Rl=null,si=null;function np(){if(si)return si;var e,t=Rl,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return si=o.slice(e,1<r?1-r:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function zc(){return!1}function et(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Do:zc,this.isPropagationStopped=zc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=et(mr),_o=oe({},mr,{view:0,detail:0}),Nh=et(_o),Rs,Os,br,Yi=oe({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Rs=e.screenX-br.screenX,Os=e.screenY-br.screenY):Os=Rs=0,br=e),Rs)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),Ac=et(Yi),bh=oe({},Yi,{dataTransfer:0}),kh=et(bh),Ph=oe({},_o,{relatedTarget:0}),$s=et(Ph),Eh=oe({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=et(Eh),Th=oe({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=et(Th),Rh=oe({},mr,{data:0}),Dc=et(Rh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function $l(){return Ih}var Fh=oe({},_o,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=et(Fh),Ah=oe({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=et(Ah),Dh=oe({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Uh=et(Dh),Hh=oe({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wh=et(Hh),qh=oe({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=et(qh),Gh=[9,13,27,32],Ml=At&&"CompositionEvent"in window,Ur=null;At&&"documentMode"in document&&(Ur=document.documentMode);var Qh=At&&"TextEvent"in window&&!Ur,rp=At&&(!Ml||Ur&&8<Ur&&11>=Ur),Hc=" ",Wc=!1;function op(e,t){switch(e){case"keyup":return Gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Xh(e,t){switch(e){case"compositionend":return ip(t);case"keypress":return t.which!==32?null:(Wc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Wc?null:e;default:return null}}function Kh(e,t){if(Wn)return e==="compositionend"||!Ml&&op(e,t)?(e=np(),si=Rl=Zt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rp&&t.locale!=="ko"?null:t.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jh[e.type]:t==="textarea"}function sp(e,t,n,r){Id(r),t=ji(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ro=null;function Yh(e){vp(e,0)}function Zi(e){var t=Gn(e);if(Bd(t))return e}function Zh(e,t){if(e==="change")return t}var ap=!1;if(At){var Ms;if(At){var Is="oninput"in document;if(!Is){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Is=typeof Vc.oninput=="function"}Ms=Is}else Ms=!1;ap=Ms&&(!document.documentMode||9<document.documentMode)}function Gc(){Hr&&(Hr.detachEvent("onpropertychange",lp),ro=Hr=null)}function lp(e){if(e.propertyName==="value"&&Zi(ro)){var t=[];sp(t,ro,e,Pl(e)),Dd(Yh,t)}}function eg(e,t,n){e==="focusin"?(Gc(),Hr=t,ro=n,Hr.attachEvent("onpropertychange",lp)):e==="focusout"&&Gc()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(ro)}function ng(e,t){if(e==="click")return Zi(t)}function rg(e,t){if(e==="input"||e==="change")return Zi(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:og;function oo(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!pa.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Qc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qc(n)}}function cp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function up(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ig(e){var t=up(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cp(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xc(n,i);var a=Xc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sg=At&&"documentMode"in document&&11>=document.documentMode,qn=null,Ta=null,Wr=null,La=!1;function Kc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;La||qn==null||qn!==vi(r)||(r=qn,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&oo(Wr,r)||(Wr=r,r=ji(Ta,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function Uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Fs={},dp={};At&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function es(e){if(Fs[e])return Fs[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dp)return Fs[e]=t[n];return e}var pp=es("animationend"),fp=es("animationiteration"),mp=es("animationstart"),hp=es("transitionend"),gp=new Map,Jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){gp.set(e,t),In(t,[e])}for(var zs=0;zs<Jc.length;zs++){var As=Jc[zs],ag=As.toLowerCase(),lg=As[0].toUpperCase()+As.slice(1);mn(ag,"on"+lg)}mn(pp,"onAnimationEnd");mn(fp,"onAnimationIteration");mn(mp,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(hp,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ah(r,t,void 0,e),e.currentTarget=null}function vp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;Yc(o,l,u),i=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;Yc(o,l,u),i=c}}}if(yi)throw e=ka,yi=!1,ka=null,e}function Y(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function Ds(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Ho]){e[Ho]=!0,Nd.forEach(function(n){n!=="selectionchange"&&(cg.has(n)||Ds(n,!1,e),Ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,Ds("selectionchange",!1,t))}}function xp(e,t,n,r){switch(tp(t)){case 1:var o=Ch;break;case 4:o=jh;break;default:o=Ll}n=o.bind(null,t,n,e),o=void 0,!ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Us(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Nn(l),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Dd(function(){var u=i,d=Pl(n),f=[];e:{var m=gp.get(e);if(m!==void 0){var v=Ol,x=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":v=zh;break;case"focusin":x="focus",v=$s;break;case"focusout":x="blur",v=$s;break;case"beforeblur":case"afterblur":v=$s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uh;break;case pp:case fp:case mp:v=Bh;break;case hp:v=Wh;break;case"scroll":v=Nh;break;case"wheel":v=Vh;break;case"copy":case"cut":case"paste":v=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Uc}var y=(t&4)!==0,j=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var p=u,h;p!==null;){h=p;var _=h.stateNode;if(h.tag===5&&_!==null&&(h=_,g!==null&&(_=Zr(p,g),_!=null&&y.push(so(p,_,h)))),j)break;p=p.return}0<y.length&&(m=new v(m,x,null,n,d),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ja&&(x=n.relatedTarget||n.fromElement)&&(Nn(x)||x[Dt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?Nn(x):null,x!==null&&(j=Fn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=Ac,_="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Uc,_="onPointerLeave",g="onPointerEnter",p="pointer"),j=v==null?m:Gn(v),h=x==null?m:Gn(x),m=new y(_,p+"leave",v,n,d),m.target=j,m.relatedTarget=h,_=null,Nn(d)===u&&(y=new y(g,p+"enter",x,n,d),y.target=h,y.relatedTarget=j,_=y),j=_,v&&x)t:{for(y=v,g=x,p=0,h=y;h;h=Dn(h))p++;for(h=0,_=g;_;_=Dn(_))h++;for(;0<p-h;)y=Dn(y),p--;for(;0<h-p;)g=Dn(g),h--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Dn(y),g=Dn(g)}y=null}else y=null;v!==null&&Zc(f,m,v,y,!1),x!==null&&j!==null&&Zc(f,j,x,y,!0)}}e:{if(m=u?Gn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Zh;else if(qc(m))if(ap)S=rg;else{S=tg;var b=eg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=ng);if(S&&(S=S(e,u))){sp(f,S,n,d);break e}b&&b(e,m,u),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&ya(m,"number",m.value)}switch(b=u?Gn(u):window,e){case"focusin":(qc(b)||b.contentEditable==="true")&&(qn=b,Ta=u,Wr=null);break;case"focusout":Wr=Ta=qn=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Kc(f,n,d);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":Kc(f,n,d)}var E;if(Ml)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Wn?op(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(rp&&n.locale!=="ko"&&(Wn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Wn&&(E=np()):(Zt=d,Rl="value"in Zt?Zt.value:Zt.textContent,Wn=!0)),b=ji(u,k),0<b.length&&(k=new Dc(k,e,null,n,d),f.push({event:k,listeners:b}),E?k.data=E:(E=ip(n),E!==null&&(k.data=E)))),(E=Qh?Xh(e,n):Kh(e,n))&&(u=ji(u,"onBeforeInput"),0<u.length&&(d=new Dc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=E))}vp(f,t)})}function so(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zr(e,n),i!=null&&r.unshift(so(e,i,o)),i=Zr(e,t),i!=null&&r.push(so(e,i,o))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=Zr(n,i),c!=null&&a.unshift(so(n,c,l))):o||(c=Zr(n,i),c!=null&&a.push(so(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ug=/\r\n?/g,dg=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(ug,`
`).replace(dg,"")}function Wo(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(N(425))}function Ni(){}var Ra=null,Oa=null;function $a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(mg)}:Ma;function mg(e){setTimeout(function(){throw e})}function Hs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),no(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);no(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),jt="__reactFiber$"+hr,ao="__reactProps$"+hr,Dt="__reactContainer$"+hr,Ia="__reactEvents$"+hr,hg="__reactListeners$"+hr,gg="__reactHandles$"+hr;function Nn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[jt])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[jt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ts(e){return e[ao]||null}var Fa=[],Qn=-1;function hn(e){return{current:e}}function Z(e){0>Qn||(e.current=Fa[Qn],Fa[Qn]=null,Qn--)}function J(e,t){Qn++,Fa[Qn]=e.current,e.current=t}var fn={},Pe=hn(fn),Ue=hn(!1),Tn=fn;function ar(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function bi(){Z(Ue),Z(Pe)}function ru(e,t,n){if(Pe.current!==fn)throw Error(N(168));J(Pe,t),J(Ue,n)}function yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,eh(e)||"Unknown",o));return oe({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Tn=Pe.current,J(Pe,e),J(Ue,Ue.current),!0}function ou(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=yp(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,Z(Ue),Z(Pe),J(Pe,e)):Z(Ue),J(Ue,n)}var Ot=null,ns=!1,Ws=!1;function _p(e){Ot===null?Ot=[e]:Ot.push(e)}function vg(e){ns=!0,_p(e)}function gn(){if(!Ws&&Ot!==null){Ws=!0;var e=0,t=Q;try{var n=Ot;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,ns=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),qd(El,gn),o}finally{Q=t,Ws=!1}}return null}var Xn=[],Kn=0,Pi=null,Ei=0,nt=[],rt=0,Ln=null,Mt=1,It="";function wn(e,t){Xn[Kn++]=Ei,Xn[Kn++]=Pi,Pi=e,Ei=t}function Sp(e,t,n){nt[rt++]=Mt,nt[rt++]=It,nt[rt++]=Ln,Ln=e;var r=Mt;e=It;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Mt=1<<32-vt(t)+o|n<<o|r,It=i+e}else Mt=1<<i|n<<o|r,It=e}function Fl(e){e.return!==null&&(wn(e,1),Sp(e,1,0))}function zl(e){for(;e===Pi;)Pi=Xn[--Kn],Xn[Kn]=null,Ei=Xn[--Kn],Xn[Kn]=null;for(;e===Ln;)Ln=nt[--rt],nt[rt]=null,It=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var Je=null,Ke=null,te=!1,gt=null;function wp(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function iu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ke=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Mt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ke=null,!0):!1;default:return!1}}function za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(te){var t=Ke;if(t){var n=t;if(!iu(e,t)){if(za(e))throw Error(N(418));t=sn(n.nextSibling);var r=Je;t&&iu(e,t)?wp(r,n):(e.flags=e.flags&-4097|2,te=!1,Je=e)}}else{if(za(e))throw Error(N(418));e.flags=e.flags&-4097|2,te=!1,Je=e}}}function su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function qo(e){if(e!==Je)return!1;if(!te)return su(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$a(e.type,e.memoizedProps)),t&&(t=Ke)){if(za(e))throw Cp(),Error(N(418));for(;t;)wp(e,t),t=sn(t.nextSibling)}if(su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Je?sn(e.stateNode.nextSibling):null;return!0}function Cp(){for(var e=Ke;e;)e=sn(e.nextSibling)}function lr(){Ke=Je=null,te=!1}function Al(e){gt===null?gt=[e]:gt.push(e)}var xg=Wt.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Vo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function au(e){var t=e._init;return t(e._payload)}function jp(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=un(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,h,_){return p===null||p.tag!==6?(p=Js(h,g.mode,_),p.return=g,p):(p=o(p,h),p.return=g,p)}function c(g,p,h,_){var S=h.type;return S===Hn?d(g,p,h.props.children,_,h.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xt&&au(S)===p.type)?(_=o(p,h.props),_.ref=kr(g,p,h),_.return=g,_):(_=mi(h.type,h.key,h.props,null,g.mode,_),_.ref=kr(g,p,h),_.return=g,_)}function u(g,p,h,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ys(h,g.mode,_),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function d(g,p,h,_,S){return p===null||p.tag!==7?(p=En(h,g.mode,_,S),p.return=g,p):(p=o(p,h),p.return=g,p)}function f(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Js(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $o:return h=mi(p.type,p.key,p.props,null,g.mode,h),h.ref=kr(g,null,p),h.return=g,h;case Un:return p=Ys(p,g.mode,h),p.return=g,p;case Xt:var _=p._init;return f(g,_(p._payload),h)}if(Mr(p)||wr(p))return p=En(p,g.mode,h,null),p.return=g,p;Vo(g,p)}return null}function m(g,p,h,_){var S=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(g,p,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $o:return h.key===S?c(g,p,h,_):null;case Un:return h.key===S?u(g,p,h,_):null;case Xt:return S=h._init,m(g,p,S(h._payload),_)}if(Mr(h)||wr(h))return S!==null?null:d(g,p,h,_,null);Vo(g,h)}return null}function v(g,p,h,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(h)||null,l(p,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $o:return g=g.get(_.key===null?h:_.key)||null,c(p,g,_,S);case Un:return g=g.get(_.key===null?h:_.key)||null,u(p,g,_,S);case Xt:var b=_._init;return v(g,p,h,b(_._payload),S)}if(Mr(_)||wr(_))return g=g.get(h)||null,d(p,g,_,S,null);Vo(p,_)}return null}function x(g,p,h,_){for(var S=null,b=null,E=p,k=p=0,K=null;E!==null&&k<h.length;k++){E.index>k?(K=E,E=null):K=E.sibling;var M=m(g,E,h[k],_);if(M===null){E===null&&(E=K);break}e&&E&&M.alternate===null&&t(g,E),p=i(M,p,k),b===null?S=M:b.sibling=M,b=M,E=K}if(k===h.length)return n(g,E),te&&wn(g,k),S;if(E===null){for(;k<h.length;k++)E=f(g,h[k],_),E!==null&&(p=i(E,p,k),b===null?S=E:b.sibling=E,b=E);return te&&wn(g,k),S}for(E=r(g,E);k<h.length;k++)K=v(E,g,k,h[k],_),K!==null&&(e&&K.alternate!==null&&E.delete(K.key===null?k:K.key),p=i(K,p,k),b===null?S=K:b.sibling=K,b=K);return e&&E.forEach(function(Ve){return t(g,Ve)}),te&&wn(g,k),S}function y(g,p,h,_){var S=wr(h);if(typeof S!="function")throw Error(N(150));if(h=S.call(h),h==null)throw Error(N(151));for(var b=S=null,E=p,k=p=0,K=null,M=h.next();E!==null&&!M.done;k++,M=h.next()){E.index>k?(K=E,E=null):K=E.sibling;var Ve=m(g,E,M.value,_);if(Ve===null){E===null&&(E=K);break}e&&E&&Ve.alternate===null&&t(g,E),p=i(Ve,p,k),b===null?S=Ve:b.sibling=Ve,b=Ve,E=K}if(M.done)return n(g,E),te&&wn(g,k),S;if(E===null){for(;!M.done;k++,M=h.next())M=f(g,M.value,_),M!==null&&(p=i(M,p,k),b===null?S=M:b.sibling=M,b=M);return te&&wn(g,k),S}for(E=r(g,E);!M.done;k++,M=h.next())M=v(E,g,k,M.value,_),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?k:M.key),p=i(M,p,k),b===null?S=M:b.sibling=M,b=M);return e&&E.forEach(function(_r){return t(g,_r)}),te&&wn(g,k),S}function j(g,p,h,_){if(typeof h=="object"&&h!==null&&h.type===Hn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case $o:e:{for(var S=h.key,b=p;b!==null;){if(b.key===S){if(S=h.type,S===Hn){if(b.tag===7){n(g,b.sibling),p=o(b,h.props.children),p.return=g,g=p;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xt&&au(S)===b.type){n(g,b.sibling),p=o(b,h.props),p.ref=kr(g,b,h),p.return=g,g=p;break e}n(g,b);break}else t(g,b);b=b.sibling}h.type===Hn?(p=En(h.props.children,g.mode,_,h.key),p.return=g,g=p):(_=mi(h.type,h.key,h.props,null,g.mode,_),_.ref=kr(g,p,h),_.return=g,g=_)}return a(g);case Un:e:{for(b=h.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Ys(h,g.mode,_),p.return=g,g=p}return a(g);case Xt:return b=h._init,j(g,p,b(h._payload),_)}if(Mr(h))return x(g,p,h,_);if(wr(h))return y(g,p,h,_);Vo(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=Js(h,g.mode,_),p.return=g,g=p),a(g)):n(g,p)}return j}var cr=jp(!0),Np=jp(!1),Bi=hn(null),Ti=null,Jn=null,Dl=null;function Ul(){Dl=Jn=Ti=null}function Hl(e){var t=Bi.current;Z(Bi),e._currentValue=t}function Da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Ti=e,Dl=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Ti===null)throw Error(N(308));Jn=e,Ti.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var bn=null;function Wl(e){bn===null?bn=[e]:bn.push(e)}function bp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Wl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}function lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Li(e,t,n,r){var o=e.updateQueue;Kt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;a=0,d=u=c=null,l=i;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,y=l;switch(m=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(v,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(v,f,m):x,m==null)break e;f=oe({},f,m);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=f):d=d.next=v,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);On|=a,e.lanes=a,e.memoizedState=f}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var wo={},Pt=hn(wo),lo=hn(wo),co=hn(wo);function kn(e){if(e===wo)throw Error(N(174));return e}function Vl(e,t){switch(J(co,t),J(lo,e),J(Pt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sa(t,e)}Z(Pt),J(Pt,t)}function ur(){Z(Pt),Z(lo),Z(co)}function Pp(e){kn(co.current);var t=kn(Pt.current),n=Sa(t,e.type);t!==n&&(J(lo,e),J(Pt,n))}function Gl(e){lo.current===e&&(Z(Pt),Z(lo))}var ne=hn(0);function Ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function Ql(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var ci=Wt.ReactCurrentDispatcher,Vs=Wt.ReactCurrentBatchConfig,Rn=0,re=null,fe=null,ge=null,Oi=!1,qr=!1,uo=0,yg=0;function Se(){throw Error(N(321))}function Xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Kl(e,t,n,r,o,i){if(Rn=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ci.current=e===null||e.memoizedState===null?Cg:jg,e=n(r,o),qr){i=0;do{if(qr=!1,uo=0,25<=i)throw Error(N(301));i+=1,ge=fe=null,t.updateQueue=null,ci.current=Ng,e=n(r,o)}while(qr)}if(ci.current=$i,t=fe!==null&&fe.next!==null,Rn=0,ge=fe=re=null,Oi=!1,t)throw Error(N(300));return e}function Jl(){var e=uo!==0;return uo=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?re.memoizedState=ge=e:ge=ge.next=e,ge}function lt(){if(fe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ge===null?re.memoizedState:ge.next;if(t!==null)ge=t,fe=e;else{if(e===null)throw Error(N(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?re.memoizedState=ge=e:ge=ge.next=e}return ge}function po(e,t){return typeof t=="function"?t(e):t}function Gs(e){var t=lt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,c=null,u=i;do{var d=u.lane;if((Rn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,re.lanes|=d,On|=d}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=l,_t(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,On|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qs(e){var t=lt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);_t(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ep(){}function Bp(e,t){var n=re,r=lt(),o=t(),i=!_t(r.memoizedState,o);if(i&&(r.memoizedState=o,De=!0),r=r.queue,Yl(Rp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,fo(9,Lp.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(N(349));Rn&30||Tp(n,t,o)}return o}function Tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lp(e,t,n,r){t.value=n,t.getSnapshot=r,Op(t)&&$p(e)}function Rp(e,t,n){return n(function(){Op(t)&&$p(e)})}function Op(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function $p(e){var t=Ut(e,1);t!==null&&xt(t,e,1,-1)}function uu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t.queue=e,e=e.dispatch=wg.bind(null,re,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mp(){return lt().memoizedState}function ui(e,t,n,r){var o=Ct();re.flags|=e,o.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(fe!==null){var a=fe.memoizedState;if(i=a.destroy,r!==null&&Xl(r,a.deps)){o.memoizedState=fo(t,n,i,r);return}}re.flags|=e,o.memoizedState=fo(1|t,n,i,r)}function du(e,t){return ui(8390656,8,e,t)}function Yl(e,t){return rs(2048,8,e,t)}function Ip(e,t){return rs(4,2,e,t)}function Fp(e,t){return rs(4,4,e,t)}function zp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ap(e,t,n){return n=n!=null?n.concat([e]):null,rs(4,4,zp.bind(null,t,e),n)}function Zl(){}function Dp(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Up(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hp(e,t,n){return Rn&21?(_t(n,t)||(n=Qd(),re.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function _g(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Vs.transition;Vs.transition={};try{e(!1),t()}finally{Q=n,Vs.transition=r}}function Wp(){return lt().memoizedState}function Sg(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qp(e))Vp(t,n);else if(n=bp(e,t,n,r),n!==null){var o=Ie();xt(n,e,r,o),Gp(n,t,r)}}function wg(e,t,n){var r=cn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qp(e))Vp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,_t(l,a)){var c=t.interleaved;c===null?(o.next=o,Wl(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=bp(e,t,o,r),n!==null&&(o=Ie(),xt(n,e,r,o),Gp(n,t,r))}}function qp(e){var t=e.alternate;return e===re||t!==null&&t===re}function Vp(e,t){qr=Oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}var $i={readContext:at,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Cg={readContext:at,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ui(4194308,4,zp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return ui(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sg.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:Zl,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=_g.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=Ct();if(te){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ve===null)throw Error(N(349));Rn&30||Tp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,du(Rp.bind(null,r,i,e),[e]),r.flags|=2048,fo(9,Lp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=ve.identifierPrefix;if(te){var n=It,r=Mt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jg={readContext:at,useCallback:Dp,useContext:at,useEffect:Yl,useImperativeHandle:Ap,useInsertionEffect:Ip,useLayoutEffect:Fp,useMemo:Up,useReducer:Gs,useRef:Mp,useState:function(){return Gs(po)},useDebugValue:Zl,useDeferredValue:function(e){var t=lt();return Hp(t,fe.memoizedState,e)},useTransition:function(){var e=Gs(po)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Ep,useSyncExternalStore:Bp,useId:Wp,unstable_isNewReconciler:!1},Ng={readContext:at,useCallback:Dp,useContext:at,useEffect:Yl,useImperativeHandle:Ap,useInsertionEffect:Ip,useLayoutEffect:Fp,useMemo:Up,useReducer:Qs,useRef:Mp,useState:function(){return Qs(po)},useDebugValue:Zl,useDeferredValue:function(e){var t=lt();return fe===null?t.memoizedState=e:Hp(t,fe.memoizedState,e)},useTransition:function(){var e=Qs(po)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Ep,useSyncExternalStore:Bp,useId:Wp,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var os={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=cn(e),i=zt(r,o);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(xt(t,e,o,r),li(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=cn(e),i=zt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(xt(t,e,o,r),li(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=cn(e),o=zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(xt(t,e,r,n),li(t,e,r))}};function pu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!oo(n,r)||!oo(o,i):!0}function Qp(e,t,n){var r=!1,o=fn,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=He(t)?Tn:Pe.current,r=t.contextTypes,i=(r=r!=null)?ar(e,o):fn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function Ha(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ql(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=He(t)?Tn:Pe.current,o.context=ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ua(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&os.enqueueReplaceState(o,o.state,null),Li(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=Zm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Xs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function Xp(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ii||(Ii=!0,el=r),Wa(e,t)},n}function Kp(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Wa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wa(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ag.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var kg=Wt.ReactCurrentOwner,De=!1;function Me(e,t,n,r){t.child=e===null?Np(t,null,n,r):cr(t,e.child,n,r)}function vu(e,t,n,r,o){n=n.render;var i=t.ref;return or(t,o),r=Kl(e,t,n,r,i,o),n=Jl(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(te&&n&&Fl(t),t.flags|=1,Me(e,t,r,o),t.child)}function xu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ac(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jp(e,t,i,r,o)):(e=mi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(a,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=un(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oo(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return qa(e,t,n,r,o)}function Yp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Zn,Qe),Qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Zn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(Zn,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(Zn,Qe),Qe|=r;return Me(e,t,o,n),t.child}function Zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qa(e,t,n,r,o){var i=He(n)?Tn:Pe.current;return i=ar(t,i),or(t,o),n=Kl(e,t,n,r,i,o),r=Jl(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(te&&r&&Fl(t),t.flags|=1,Me(e,t,n,o),t.child)}function yu(e,t,n,r,o){if(He(n)){var i=!0;ki(t)}else i=!1;if(or(t,o),t.stateNode===null)di(e,t),Qp(t,n,r),Ha(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=He(n)?Tn:Pe.current,u=ar(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&fu(t,a,r,u),Kt=!1;var m=t.memoizedState;a.state=m,Li(t,r,a,o),c=t.memoizedState,l!==r||m!==c||Ue.current||Kt?(typeof d=="function"&&(Ua(t,n,d,r),c=t.memoizedState),(l=Kt||pu(t,n,l,r,m,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,kp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:mt(t.type,l),a.props=u,f=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=at(c):(c=He(n)?Tn:Pe.current,c=ar(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==c)&&fu(t,a,r,c),Kt=!1,m=t.memoizedState,a.state=m,Li(t,r,a,o);var x=t.memoizedState;l!==f||m!==x||Ue.current||Kt?(typeof v=="function"&&(Ua(t,n,v,r),x=t.memoizedState),(u=Kt||pu(t,n,u,r,m,x,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Va(e,t,n,r,i,o)}function Va(e,t,n,r,o,i){Zp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&ou(t,n,!1),Ht(e,t,i);r=t.stateNode,kg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,l,i)):Me(e,t,l,i),t.memoizedState=r.state,o&&ou(t,n,!0),t.child}function ef(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),Vl(e,t.containerInfo)}function _u(e,t,n,r,o){return lr(),Al(o),t.flags|=256,Me(e,t,n,r),t.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function tf(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=as(a,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qa(n),t.memoizedState=Ga,e):ec(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Pg(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=un(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=un(l,i):(i=En(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Qa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ga,r}return i=e.child,e=i.sibling,r=un(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=as({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Go(e,t,n,r){return r!==null&&Al(r),cr(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pg(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Xs(Error(N(422))),Go(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=as({mode:"visible",children:r.children},o,0,null),i=En(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cr(t,e.child,null,a),t.child.memoizedState=Qa(a),t.memoizedState=Ga,i);if(!(t.mode&1))return Go(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=Xs(i,r,void 0),Go(e,t,a,r)}if(l=(a&e.childLanes)!==0,De||l){if(r=ve,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ut(e,o),xt(r,e,o,-1))}return sc(),r=Xs(Error(N(421))),Go(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Dg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=sn(o.nextSibling),Je=t,te=!0,gt=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=It,nt[rt++]=Ln,Mt=e.id,It=e.overflow,Ln=t),t=ec(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Da(e.return,t,n)}function Ks(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function nf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ri(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ks(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ri(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ks(t,!0,n,null,i);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eg(e,t,n){switch(t.tag){case 3:ef(t),lr();break;case 5:Pp(t);break;case 1:He(t.type)&&ki(t);break;case 4:Vl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(Bi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?tf(e,t,n):(J(ne,ne.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Yp(e,t,n)}return Ht(e,t,n)}var rf,Xa,of,sf;rf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xa=function(){};of=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,kn(Pt.current);var i=null;switch(n){case"input":o=va(e,o),r=va(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=_a(e,o),r=_a(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ni)}wa(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};sf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bg(e,t,n){var r=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return He(t.type)&&bi(),we(t),null;case 3:return r=t.stateNode,ur(),Z(Ue),Z(Pe),Ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(rl(gt),gt=null))),Xa(e,t),we(t),null;case 5:Gl(t);var o=kn(co.current);if(n=t.type,e!==null&&t.stateNode!=null)of(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return we(t),null}if(e=kn(Pt.current),qo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[jt]=t,r[ao]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<Fr.length;o++)Y(Fr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Bc(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Lc(r,i),Y("invalid",r)}wa(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,l,e),o=["children",""+l]):Jr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":Mo(r),Tc(r,i,!0);break;case"textarea":Mo(r),Rc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ni)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[jt]=t,e[ao]=r,rf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ca(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fr.length;o++)Y(Fr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":Bc(e,r),o=va(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Lc(e,r),o=_a(e,r),Y("invalid",e);break;default:o=r}wa(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Md(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Od(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Yr(e,c):typeof c=="number"&&Yr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Y("scroll",e):c!=null&&jl(e,i,c,a))}switch(n){case"input":Mo(e),Tc(e,r,!1);break;case"textarea":Mo(e),Rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)sf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=kn(co.current),kn(Pt.current),qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(i=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return we(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ke!==null&&t.mode&1&&!(t.flags&128))Cp(),lr(),t.flags|=98560,i=!1;else if(i=qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[jt]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else gt!==null&&(rl(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):sc())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return ur(),Xa(e,t),e===null&&io(t.stateNode.containerInfo),we(t),null;case 10:return Hl(t.type._context),we(t),null;case 17:return He(t.type)&&bi(),we(t),null;case 19:if(Z(ne),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Pr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ri(e),a!==null){for(t.flags|=128,Pr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>pr&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ri(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!te)return we(t),null}else 2*ae()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Tg(e,t){switch(zl(t),t.tag){case 1:return He(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),Z(Ue),Z(Pe),Ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gl(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return ur(),null;case 10:return Hl(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Qo=!1,ke=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,B=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Ka(e,t,n){try{n()}catch(r){ie(e,t,r)}}var wu=!1;function Rg(e,t){if(Ra=wi,e=up(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===o&&(l=a),m===i&&++d===r&&(c=a),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oa={focusedElem:e,selectionRange:n},wi=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,j=x.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:mt(t.type,y),j);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(_){ie(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return x=wu,wu=!1,x}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ka(t,n,i)}o=o.next}while(o!==r)}}function is(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function af(e){var t=e.alternate;t!==null&&(e.alternate=null,af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[ao],delete t[Ia],delete t[hg],delete t[gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function Cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ni));else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}var xe=null,ht=!1;function qt(e,t,n){for(n=n.child;n!==null;)cf(e,t,n),n=n.sibling}function cf(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:ke||Yn(n,t);case 6:var r=xe,o=ht;xe=null,qt(e,t,n),xe=r,ht=o,xe!==null&&(ht?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ht?(e=xe,n=n.stateNode,e.nodeType===8?Hs(e.parentNode,n):e.nodeType===1&&Hs(e,n),no(e)):Hs(xe,n.stateNode));break;case 4:r=xe,o=ht,xe=n.stateNode.containerInfo,ht=!0,qt(e,t,n),xe=r,ht=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ka(n,t,a),o=o.next}while(o!==r)}qt(e,t,n);break;case 1:if(!ke&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,t,l)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,qt(e,t,n),ke=r):qt(e,t,n);break;default:qt(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lg),t.forEach(function(r){var o=Ug.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ht=!1;break e;case 3:xe=l.stateNode.containerInfo,ht=!0;break e;case 4:xe=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(xe===null)throw Error(N(160));cf(i,a,o),xe=null,ht=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uf(t,e),t=t.sibling}function uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{Vr(3,e,e.return),is(3,e)}catch(y){ie(e,e.return,y)}try{Vr(5,e,e.return)}catch(y){ie(e,e.return,y)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var o=e.stateNode;try{Yr(o,"")}catch(y){ie(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Td(o,i),Ca(l,a);var u=Ca(l,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Md(o,f):d==="dangerouslySetInnerHTML"?Od(o,f):d==="children"?Yr(o,f):jl(o,d,f,u)}switch(l){case"input":xa(o,i);break;case"textarea":Ld(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?er(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?er(o,!!i.multiple,i.defaultValue,!0):er(o,!!i.multiple,i.multiple?[]:"",!1))}o[ao]=i}catch(y){ie(e,e.return,y)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ie(e,e.return,y)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(t.containerInfo)}catch(y){ie(e,e.return,y)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(rc=ae())),r&4&&ju(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||d,ct(t,e),ke=u):ct(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(f=B=d;B!==null;){switch(m=B,v=m.child,m.tag){case 0:case 11:case 14:case 15:Vr(4,m,m.return);break;case 1:Yn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:Yn(m,m.return);break;case 22:if(m.memoizedState!==null){bu(f);continue}}v!==null?(v.return=m,B=v):bu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=$d("display",a))}catch(y){ie(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ie(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ct(t,e),wt(e),r&4&&ju(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lf(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yr(o,""),r.flags&=-33);var i=Cu(e);Za(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Cu(e);Ya(e,l,a);break;default:throw Error(N(161))}}catch(c){ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Og(e,t,n){B=e,df(e)}function df(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var o=B,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Qo;if(!a){var l=o.alternate,c=l!==null&&l.memoizedState!==null||ke;l=Qo;var u=ke;if(Qo=a,(ke=c)&&!u)for(B=o;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?ku(o):c!==null?(c.return=a,B=c):ku(o);for(;i!==null;)B=i,df(i),i=i.sibling;B=o,Qo=l,ke=u}Nu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,B=i):Nu(e)}}function Nu(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||is(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&no(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ke||t.flags&512&&Ja(t)}catch(m){ie(t,t.return,m)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function bu(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function ku(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{is(4,t)}catch(c){ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ie(t,o,c)}}var i=t.return;try{Ja(t)}catch(c){ie(t,i,c)}break;case 5:var a=t.return;try{Ja(t)}catch(c){ie(t,a,c)}}}catch(c){ie(t,t.return,c)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var $g=Math.ceil,Mi=Wt.ReactCurrentDispatcher,tc=Wt.ReactCurrentOwner,it=Wt.ReactCurrentBatchConfig,H=0,ve=null,ue=null,ye=0,Qe=0,Zn=hn(0),me=0,mo=null,On=0,ss=0,nc=0,Gr=null,Ae=null,rc=0,pr=1/0,Rt=null,Ii=!1,el=null,ln=null,Xo=!1,en=null,Fi=0,Qr=0,tl=null,pi=-1,fi=0;function Ie(){return H&6?ae():pi!==-1?pi:pi=ae()}function cn(e){return e.mode&1?H&2&&ye!==0?ye&-ye:xg.transition!==null?(fi===0&&(fi=Qd()),fi):(e=Q,e!==0||(e=window.event,e=e===void 0?16:tp(e.type)),e):1}function xt(e,t,n,r){if(50<Qr)throw Qr=0,tl=null,Error(N(185));yo(e,n,r),(!(H&2)||e!==ve)&&(e===ve&&(!(H&2)&&(ss|=n),me===4&&Yt(e,ye)),We(e,r),n===1&&H===0&&!(t.mode&1)&&(pr=ae()+500,ns&&gn()))}function We(e,t){var n=e.callbackNode;xh(e,t);var r=Si(e,e===ve?ye:0);if(r===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?vg(Pu.bind(null,e)):_p(Pu.bind(null,e)),fg(function(){!(H&6)&&gn()}),n=null;else{switch(Xd(r)){case 1:n=El;break;case 4:n=Vd;break;case 16:n=_i;break;case 536870912:n=Gd;break;default:n=_i}n=yf(n,pf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pf(e,t){if(pi=-1,fi=0,H&6)throw Error(N(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=Si(e,e===ve?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zi(e,r);else{t=r;var o=H;H|=2;var i=mf();(ve!==e||ye!==t)&&(Rt=null,pr=ae()+500,Pn(e,t));do try{Fg();break}catch(l){ff(e,l)}while(!0);Ul(),Mi.current=i,H=o,ue!==null?t=0:(ve=null,ye=0,t=me)}if(t!==0){if(t===2&&(o=Pa(e),o!==0&&(r=o,t=nl(e,o))),t===1)throw n=mo,Pn(e,0),Yt(e,r),We(e,ae()),n;if(t===6)Yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Mg(o)&&(t=zi(e,r),t===2&&(i=Pa(e),i!==0&&(r=i,t=nl(e,i))),t===1))throw n=mo,Pn(e,0),Yt(e,r),We(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Cn(e,Ae,Rt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=rc+500-ae(),10<t)){if(Si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ma(Cn.bind(null,e,Ae,Rt),t);break}Cn(e,Ae,Rt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-vt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$g(r/1960))-r,10<r){e.timeoutHandle=Ma(Cn.bind(null,e,Ae,Rt),r);break}Cn(e,Ae,Rt);break;case 5:Cn(e,Ae,Rt);break;default:throw Error(N(329))}}}return We(e,ae()),e.callbackNode===n?pf.bind(null,e):null}function nl(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=zi(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&rl(t)),e}function rl(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!_t(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~nc,t&=~ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if(H&6)throw Error(N(327));ir();var t=Si(e,0);if(!(t&1))return We(e,ae()),null;var n=zi(e,t);if(e.tag!==0&&n===2){var r=Pa(e);r!==0&&(t=r,n=nl(e,r))}if(n===1)throw n=mo,Pn(e,0),Yt(e,t),We(e,ae()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,Ae,Rt),We(e,ae()),null}function oc(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(pr=ae()+500,ns&&gn())}}function $n(e){en!==null&&en.tag===0&&!(H&6)&&ir();var t=H;H|=1;var n=it.transition,r=Q;try{if(it.transition=null,Q=1,e)return e()}finally{Q=r,it.transition=n,H=t,!(H&6)&&gn()}}function ic(){Qe=Zn.current,Z(Zn)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pg(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:ur(),Z(Ue),Z(Pe),Ql();break;case 5:Gl(r);break;case 4:ur();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:Hl(r.type._context);break;case 22:case 23:ic()}n=n.return}if(ve=e,ue=e=un(e.current,null),ye=Qe=t,me=0,mo=null,nc=ss=On=0,Ae=Gr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}bn=null}return e}function ff(e,t){do{var n=ue;try{if(Ul(),ci.current=$i,Oi){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oi=!1}if(Rn=0,ge=fe=re=null,qr=!1,uo=0,tc.current=null,n===null||n.return===null){me=1,mo=t,ue=null;break}e:{var i=e,a=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=hu(a);if(v!==null){v.flags&=-257,gu(v,a,l,i,t),v.mode&1&&mu(i,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(c),t.updateQueue=y}else x.add(c);break e}else{if(!(t&1)){mu(i,u,t),sc();break e}c=Error(N(426))}}else if(te&&l.mode&1){var j=hu(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),gu(j,a,l,i,t),Al(dr(c,l));break e}}i=c=dr(c,l),me!==4&&(me=2),Gr===null?Gr=[i]:Gr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Xp(i,c,t);lu(i,g);break e;case 1:l=c;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ln===null||!ln.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Kp(i,l,t);lu(i,_);break e}}i=i.return}while(i!==null)}gf(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function mf(){var e=Mi.current;return Mi.current=$i,e===null?$i:e}function sc(){(me===0||me===3||me===2)&&(me=4),ve===null||!(On&268435455)&&!(ss&268435455)||Yt(ve,ye)}function zi(e,t){var n=H;H|=2;var r=mf();(ve!==e||ye!==t)&&(Rt=null,Pn(e,t));do try{Ig();break}catch(o){ff(e,o)}while(!0);if(Ul(),H=n,Mi.current=r,ue!==null)throw Error(N(261));return ve=null,ye=0,me}function Ig(){for(;ue!==null;)hf(ue)}function Fg(){for(;ue!==null&&!ch();)hf(ue)}function hf(e){var t=xf(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?gf(e):ue=t,tc.current=null}function gf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tg(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ue=null;return}}else if(n=Bg(n,t,Qe),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);me===0&&(me=5)}function Cn(e,t,n){var r=Q,o=it.transition;try{it.transition=null,Q=1,zg(e,t,n,r)}finally{it.transition=o,Q=r}return null}function zg(e,t,n,r){do ir();while(en!==null);if(H&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yh(e,i),e===ve&&(ue=ve=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,yf(_i,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var a=Q;Q=1;var l=H;H|=4,tc.current=null,Rg(e,n),uf(n,e),ig(Oa),wi=!!Ra,Oa=Ra=null,e.current=n,Og(n),uh(),H=l,Q=a,it.transition=i}else e.current=n;if(Xo&&(Xo=!1,en=e,Fi=o),i=e.pendingLanes,i===0&&(ln=null),fh(n.stateNode),We(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ii)throw Ii=!1,e=el,el=null,e;return Fi&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===tl?Qr++:(Qr=0,tl=e):Qr=0,gn(),null}function ir(){if(en!==null){var e=Xd(Fi),t=it.transition,n=Q;try{if(it.transition=null,Q=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Fi=0,H&6)throw Error(N(331));var o=H;for(H|=4,B=e.current;B!==null;){var i=B,a=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Vr(8,d,i)}var f=d.child;if(f!==null)f.return=d,B=f;else for(;B!==null;){d=B;var m=d.sibling,v=d.return;if(af(d),d===u){B=null;break}if(m!==null){m.return=v,B=m;break}B=v}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}B=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,B=a;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,B=g;break e}B=i.return}}var p=e.current;for(B=p;B!==null;){a=B;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,B=h;else e:for(a=p;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:is(9,l)}}catch(S){ie(l,l.return,S)}if(l===a){B=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,B=_;break e}B=l.return}}if(H=o,gn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{Q=n,it.transition=t}}return!1}function Eu(e,t,n){t=dr(n,t),t=Xp(e,t,1),e=an(e,t,1),t=Ie(),e!==null&&(yo(e,1,t),We(e,t))}function ie(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=dr(n,e),e=Kp(t,e,1),t=an(t,e,1),e=Ie(),t!==null&&(yo(t,1,e),We(t,e));break}}t=t.return}}function Ag(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ye&n)===n&&(me===4||me===3&&(ye&130023424)===ye&&500>ae()-rc?Pn(e,0):nc|=n),We(e,t)}function vf(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=Ie();e=Ut(e,t),e!==null&&(yo(e,t,n),We(e,n))}function Dg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vf(e,n)}function Ug(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),vf(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Eg(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&Sp(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var o=ar(t,Pe.current);or(t,n),o=Kl(null,t,r,e,o,n);var i=Jl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(i=!0,ki(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ql(t),o.updater=os,t.stateNode=o,o._reactInternals=t,Ha(t,r,e,n),t=Va(null,t,r,!0,i,n)):(t.tag=0,te&&i&&Fl(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Wg(r),e=mt(r,e),o){case 0:t=qa(null,t,r,e,n);break e;case 1:t=yu(null,t,r,e,n);break e;case 11:t=vu(null,t,r,e,n);break e;case 14:t=xu(null,t,r,mt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),yu(e,t,r,o,n);case 3:e:{if(ef(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,kp(e,t),Li(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=dr(Error(N(423)),t),t=_u(e,t,r,n,o);break e}else if(r!==o){o=dr(Error(N(424)),t),t=_u(e,t,r,n,o);break e}else for(Ke=sn(t.stateNode.containerInfo.firstChild),Je=t,te=!0,gt=null,n=Np(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===o){t=Ht(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Pp(t),e===null&&Aa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,$a(r,o)?a=null:i!==null&&$a(r,i)&&(t.flags|=32),Zp(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return tf(e,t,n);case 4:return Vl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),vu(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(Bi,r._currentValue),r._currentValue=a,i!==null)if(_t(i.value,a)){if(i.children===o.children&&!Ue.current){t=Ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=zt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Da(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Da(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=at(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),xu(e,t,r,o,n);case 15:return Jp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),di(e,t),t.tag=1,He(r)?(e=!0,ki(t)):e=!1,or(t,n),Qp(t,r,o),Ha(t,r,o,n),Va(null,t,r,!0,e,n);case 19:return nf(e,t,n);case 22:return Yp(e,t,n)}throw Error(N(156,t.tag))};function yf(e,t){return qd(e,t)}function Hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Hg(e,t,n,r)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wg(e){if(typeof e=="function")return ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bl)return 11;if(e===kl)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")ac(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hn:return En(n.children,o,i,t);case Nl:a=8,o|=8;break;case fa:return e=ot(12,n,t,o|2),e.elementType=fa,e.lanes=i,e;case ma:return e=ot(13,n,t,o),e.elementType=ma,e.lanes=i,e;case ha:return e=ot(19,n,t,o),e.elementType=ha,e.lanes=i,e;case Pd:return as(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bd:a=10;break e;case kd:a=9;break e;case bl:a=11;break e;case kl:a=14;break e;case Xt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ot(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function as(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Pd,e.lanes=n,e.stateNode={isHidden:!1},e}function Js(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ls(0),this.expirationTimes=Ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ls(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lc(e,t,n,r,o,i,a,l,c){return e=new qg(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(i),e}function Vg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return fn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(He(n))return yp(e,n,t)}return t}function Sf(e,t,n,r,o,i,a,l,c){return e=lc(n,r,!0,e,o,i,a,l,c),e.context=_f(null),n=e.current,r=Ie(),o=cn(n),i=zt(r,o),i.callback=t??null,an(n,i,o),e.current.lanes=o,yo(e,o,r),We(e,r),e}function ls(e,t,n,r){var o=t.current,i=Ie(),a=cn(o);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,a),e!==null&&(xt(e,o,a,i),li(e,o,a)),a}function Ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function Gg(){return null}var wf=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}cs.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ls(e,t,null,null)};cs.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){ls(null,e,null,null)}),t[Dt]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&ep(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function Qg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ai(a);i.call(u)}}var a=Sf(t,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=a,e[Dt]=a.current,io(e.nodeType===8?e.parentNode:e),$n(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ai(c);l.call(u)}}var c=lc(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=c,e[Dt]=c.current,io(e.nodeType===8?e.parentNode:e),$n(function(){ls(t,c,n,r)}),c}function ds(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var c=Ai(a);l.call(c)}}ls(t,a,e,o)}else a=Qg(n,t,e,o,r);return Ai(a)}Kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Bl(t,n|1),We(t,ae()),!(H&6)&&(pr=ae()+500,gn()))}break;case 13:$n(function(){var r=Ut(e,1);if(r!==null){var o=Ie();xt(r,e,1,o)}}),cc(e,1)}};Tl=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ie();xt(t,e,134217728,n)}cc(e,134217728)}};Jd=function(e){if(e.tag===13){var t=cn(e),n=Ut(e,t);if(n!==null){var r=Ie();xt(n,e,t,r)}cc(e,t)}};Yd=function(){return Q};Zd=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Na=function(e,t,n){switch(t){case"input":if(xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ts(r);if(!o)throw Error(N(90));Bd(r),xa(r,o)}}}break;case"textarea":Ld(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};zd=oc;Ad=$n;var Xg={usingClientEntryPoint:!1,Events:[So,Gn,ts,Id,Fd,oc]},Er={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kg={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hd(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Ji=Ko.inject(Kg),kt=Ko}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(N(200));return Vg(e,t,null,n)};Ze.createRoot=function(e,t){if(!dc(e))throw Error(N(299));var n=!1,r="",o=wf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lc(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,io(e.nodeType===8?e.parentNode:e),new uc(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Hd(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return $n(e)};Ze.hydrate=function(e,t,n){if(!us(t))throw Error(N(200));return ds(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=wf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Sf(t,null,e,1,n??null,o,!1,i,a),e[Dt]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cs(t)};Ze.render=function(e,t,n){if(!us(t))throw Error(N(200));return ds(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!us(e))throw Error(N(40));return e._reactRootContainer?($n(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Ze.unstable_batchedUpdates=oc;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!us(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ds(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function Cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf)}catch(e){console.error(e)}}Cf(),wd.exports=Ze;var Jg=wd.exports,Lu=Jg;da.createRoot=Lu.createRoot,da.hydrateRoot=Lu.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const Ru="popstate";function Yg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return ol("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Di(o)}return ev(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zg(){return Math.random().toString(36).substr(2,8)}function Ou(e,t){return{usr:e.state,key:e.key,idx:t}}function ol(e,t,n,r){return n===void 0&&(n=null),ho({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||r||Zg()})}function Di(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ev(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=tn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ho({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=tn.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:l,location:y.location,delta:g})}function m(j,g){l=tn.Push;let p=ol(y.location,j,g);u=d()+1;let h=Ou(p,u),_=y.createHref(p);try{a.pushState(h,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(_)}i&&c&&c({action:l,location:y.location,delta:1})}function v(j,g){l=tn.Replace;let p=ol(y.location,j,g);u=d();let h=Ou(p,u),_=y.createHref(p);a.replaceState(h,"",_),i&&c&&c({action:l,location:y.location,delta:0})}function x(j){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof j=="string"?j:Di(j);return p=p.replace(/ $/,"%20"),de(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return l},get location(){return e(o,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Ru,f),c=j,()=>{o.removeEventListener(Ru,f),c=null}},createHref(j){return t(o,j)},createURL:x,encodeLocation(j){let g=x(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(j){return a.go(j)}};return y}var $u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($u||($u={}));function tv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?gr(t):t,o=pc(r.pathname||"/",n);if(o==null)return null;let i=Nf(e);nv(i);let a=null;for(let l=0;a==null&&l<i.length;++l){let c=mv(o);a=dv(i[l],c)}return a}function Nf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=dn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(de(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nf(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:cv(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let c of bf(i.path))o(i,a,c)}),t}function bf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=bf(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function nv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rv=/^:[\w-]+$/,ov=3,iv=2,sv=1,av=10,lv=-2,Mu=e=>e==="*";function cv(e,t){let n=e.split("/"),r=n.length;return n.some(Mu)&&(r+=lv),t&&(r+=iv),n.filter(o=>!Mu(o)).reduce((o,i)=>o+(rv.test(i)?ov:i===""?sv:av),r)}function uv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function dv(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=pv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;i.push({params:r,pathname:dn([o,d.pathname]),pathnameBase:xv(dn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=dn([o,d.pathnameBase]))}return i}function pv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let y=l[f]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const x=l[f];return v&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function fv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function mv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?gr(e):e;return{pathname:n?n.startsWith("/")?n:gv(n,t):t,search:yv(r),hash:_v(o)}}function gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kf(e,t){let n=vv(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=gr(e):(o=ho({},e),de(!o.pathname||!o.pathname.includes("?"),Zs("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),Zs("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),Zs("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}l=f>=0?t[f]:"/"}let c=hv(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const dn=e=>e.join("/").replace(/\/\/+/g,"/"),xv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ef=["post","put","patch","delete"];new Set(Ef);const wv=["get",...Ef];new Set(wv);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}const fc=C.createContext(null),Cv=C.createContext(null),zn=C.createContext(null),ps=C.createContext(null),An=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Bf=C.createContext(null);function jv(e,t){let{relative:n}=t===void 0?{}:t;Co()||de(!1);let{basename:r,navigator:o}=C.useContext(zn),{hash:i,pathname:a,search:l}=Lf(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:dn([r,a])),o.createHref({pathname:c,search:l,hash:i})}function Co(){return C.useContext(ps)!=null}function fs(){return Co()||de(!1),C.useContext(ps).location}function Tf(e){C.useContext(zn).static||C.useLayoutEffect(e)}function jo(){let{isDataRoute:e}=C.useContext(An);return e?Iv():Nv()}function Nv(){Co()||de(!1);let e=C.useContext(fc),{basename:t,future:n,navigator:r}=C.useContext(zn),{matches:o}=C.useContext(An),{pathname:i}=fs(),a=JSON.stringify(kf(o,n.v7_relativeSplatPath)),l=C.useRef(!1);return Tf(()=>{l.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Pf(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:dn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,i,e])}function Lf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(zn),{matches:o}=C.useContext(An),{pathname:i}=fs(),a=JSON.stringify(kf(o,r.v7_relativeSplatPath));return C.useMemo(()=>Pf(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function bv(e,t){return kv(e,t)}function kv(e,t,n,r){Co()||de(!1);let{navigator:o}=C.useContext(zn),{matches:i}=C.useContext(An),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=fs(),d;if(t){var f;let j=typeof t=="string"?gr(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||de(!1),d=j}else d=u;let m=d.pathname||"/",v=m;if(c!=="/"){let j=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=tv(e,{pathname:v}),y=Lv(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:dn([c,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:dn([c,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&y?C.createElement(ps.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tn.Pop}},y):y}function Pv(){let e=Mv(),t=Sv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const Ev=C.createElement(Pv,null);class Bv extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(An.Provider,{value:this.props.routeContext},C.createElement(Bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tv(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(fc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(An.Provider,{value:t},r)}function Lv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||de(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:v}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,m)=>{let v,x=!1,y=null,j=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,y=f.route.errorElement||Ev,c&&(u<0&&m===0?(x=!0,j=null):u===m&&(x=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,m+1)),p=()=>{let h;return v?h=y:x?h=j:f.route.Component?h=C.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,C.createElement(Tv,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?C.createElement(Bv,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Rf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rf||{}),Ui=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ui||{});function Rv(e){let t=C.useContext(fc);return t||de(!1),t}function Ov(e){let t=C.useContext(Cv);return t||de(!1),t}function $v(e){let t=C.useContext(An);return t||de(!1),t}function Of(e){let t=$v(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function Mv(){var e;let t=C.useContext(Bf),n=Ov(Ui.UseRouteError),r=Of(Ui.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Iv(){let{router:e}=Rv(Rf.UseNavigateStable),t=Of(Ui.UseNavigateStable),n=C.useRef(!1);return Tf(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,go({fromRouteId:t},i)))},[e,t])}function U(e){de(!1)}function Fv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=tn.Pop,navigator:i,static:a=!1,future:l}=e;Co()&&de(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:i,static:a,future:go({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=gr(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:x="default"}=r,y=C.useMemo(()=>{let j=pc(d,c);return j==null?null:{location:{pathname:j,search:f,hash:m,state:v,key:x},navigationType:o}},[c,d,f,m,v,x,o]);return y==null?null:C.createElement(zn.Provider,{value:u},C.createElement(ps.Provider,{children:n,value:y}))}function zv(e){let{children:t,location:n}=e;return bv(il(t),n)}new Promise(()=>{});function il(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,il(r.props.children,i));return}r.type!==U&&de(!1),!r.props.index||!r.props.children||de(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=il(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}function Av(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Dv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,t){return e.button===0&&(!t||t==="_self")&&!Dv(e)}const Hv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Wv="6";try{window.__reactRouterVersion=Wv}catch{}const qv="startTransition",Iu=Am[qv];function Vv(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=Yg({window:o,v5Compat:!0}));let a=i.current,[l,c]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=C.useCallback(f=>{u&&Iu?Iu(()=>c(f)):c(f)},[c,u]);return C.useLayoutEffect(()=>a.listen(d),[a,d]),C.createElement(Fv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,m=Av(t,Hv),{basename:v}=C.useContext(zn),x,y=!1;if(typeof u=="string"&&Qv.test(u)&&(x=u,Gv))try{let h=new URL(window.location.href),_=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=pc(_.pathname,v);_.origin===h.origin&&S!=null?u=S+_.search+_.hash:y=!0}catch{}let j=jv(u,{relative:o}),g=Xv(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||g(h)}return C.createElement("a",sl({},m,{href:x||j,onClick:y||i?r:p,ref:n,target:c}))});var Fu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fu||(Fu={}));var zu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zu||(zu={}));function Xv(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,c=jo(),u=fs(),d=Lf(e,{relative:a});return C.useCallback(f=>{if(Uv(f,n)){f.preventDefault();let m=r!==void 0?r:Di(u)===Di(d);c(e,{replace:m,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,c,d,r,o,n,e,i,a,l])}const Kv="_navbar_1itkf_3",Jv="_logo_1itkf_16",Yv="_hamburger_1itkf_23",Zv="_navLinks_1itkf_32",ex="_navLink_1itkf_32",tx="_closeBtn_1itkf_48",nx="_profileMenuContainer_1itkf_52",rx="_userIcon_1itkf_56",ox="_profileMenu_1itkf_52",ix="_open_1itkf_108",ce={navbar:Kv,logo:Jv,hamburger:Yv,navLinks:Zv,navLink:ex,closeBtn:tx,profileMenuContainer:nx,userIcon:rx,profileMenu:ox,open:ix};var $f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Au=Ft.createContext&&Ft.createContext($f),sx=["attr","size","title"];function ax(e,t){if(e==null)return{};var n=lx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function lx(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hi.apply(this,arguments)}function Du(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Wi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Du(Object(n),!0).forEach(function(r){cx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Du(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cx(e,t,n){return t=ux(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ux(e){var t=dx(e,"string");return typeof t=="symbol"?t:t+""}function dx(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mf(e){return e&&e.map((t,n)=>Ft.createElement(t.tag,Wi({key:n},t.attr),Mf(t.child)))}function No(e){return t=>Ft.createElement(px,Hi({attr:Wi({},e.attr)},t),Mf(e.child))}function px(e){var t=n=>{var{attr:r,size:o,title:i}=e,a=ax(e,sx),l=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Ft.createElement("svg",Hi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:Wi(Wi({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Ft.createElement("title",null,i),e.children)};return Au!==void 0?Ft.createElement(Au.Consumer,null,n=>t(n)):t($f)}function Uu(e){return No({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function If(e){return No({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function Ff(e){return No({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Hu(e){return No({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function zf(e){return No({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const mc=C.createContext({authState:{token:null,username:null},setAuthState:()=>{}}),fx=({children:e})=>{const[t,n]=C.useState({token:localStorage.getItem("token"),username:null});return C.useEffect(()=>{const r=localStorage.getItem("token");r&&n({token:r,username:null})},[]),s.jsx(mc.Provider,{value:{authState:t,setAuthState:n},children:e})},mx=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),{authState:o,setAuthState:i}=C.useContext(mc),a=()=>{t(!e)},l=()=>{r(!n)},c=()=>{i({token:null,username:null}),localStorage.removeItem("token")};return s.jsxs("nav",{className:ce.navbar,children:[s.jsx("div",{className:ce.logo,children:s.jsx(L,{to:"/",children:s.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:ce.logoImage})})}),s.jsx("button",{className:ce.hamburger,onClick:a,children:e?s.jsx("span",{className:ce.closeIcon,children:"×"}):s.jsx("span",{children:"☰"})}),s.jsxs("ul",{className:`${ce.navLinks} ${e?ce.open:""}`,children:[s.jsx("li",{className:ce.closeBtn,onClick:a,children:"×"}),s.jsx("li",{children:s.jsx(L,{to:"/",className:ce.navLink,onClick:a,children:"Home"})}),s.jsx("li",{children:s.jsx(L,{to:"/components",className:ce.navLink,onClick:a,children:"Components"})}),s.jsx("li",{children:s.jsx(L,{to:"/utilities",className:ce.navLink,onClick:a,children:"Utilities"})}),s.jsx("li",{children:s.jsx(L,{to:"/documentation",className:ce.navLink,onClick:a,children:"Documentation"})}),s.jsx("li",{children:s.jsx(L,{to:"/examples",className:ce.navLink,onClick:a,children:"Examples"})}),s.jsx("li",{className:ce.userActions,children:o.token?s.jsxs("div",{className:ce.profileMenuContainer,children:[s.jsx(zf,{className:ce.userIcon,onClick:l}),n&&s.jsxs("div",{className:ce.profileMenu,children:[s.jsx(L,{to:"/profile",className:ce.navLink,onClick:l,children:"Profile"}),s.jsx("button",{className:ce.navLink,onClick:c,children:"Logout"})]})]}):s.jsx(L,{to:"/signup",className:ce.navLink,onClick:a,children:"Sign Up"})})]})]})},hx="_home_iomrs_3",gx="_header_iomrs_7",vx="_logo_iomrs_16",xx="_features_iomrs_34",yx="_featureCard_iomrs_41",_x="_icon_iomrs_49",Sx="_getStarted_iomrs_74",wx="_getStartedIcon_iomrs_81",pe={home:hx,header:gx,logo:vx,features:xx,featureCard:yx,icon:_x,getStarted:Sx,getStartedIcon:wx},Cx=()=>s.jsxs("div",{className:pe.home,children:[s.jsxs("header",{className:pe.header,children:[s.jsx("img",{src:"https://via.placeholder.com/100",alt:"Toolkit Logo",className:pe.logo}),s.jsx("h1",{children:"Build fast, responsive sites with Wells Fargo UI Toolkit"}),s.jsx("p",{children:"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."})]}),s.jsxs("div",{className:pe.features,children:[s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 1"})}),s.jsx("h3",{children:"Responsive Design"}),s.jsx("p",{children:"Create responsive designs that look great on all devices, from smartphones to desktops."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 2"})}),s.jsx("h3",{children:"Reusable Components"}),s.jsx("p",{children:"Utilize a library of reusable components to maintain consistency across projects."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 3"})}),s.jsx("h3",{children:"Customization"}),s.jsx("p",{children:"Easily customize components to match your branding and design requirements."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),s.jsxs("div",{className:pe.featureCard,children:[s.jsx("div",{className:pe.icon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 4"})}),s.jsx("h3",{children:"Accessibility"}),s.jsx("p",{children:"Ensure your applications are accessible to all users with built-in accessibility features."}),s.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]})]}),s.jsxs("div",{className:pe.getStarted,children:[s.jsx("div",{className:pe.getStartedIcon,children:s.jsx("img",{src:"https://via.placeholder.com/50",alt:"Get Started Icon"})}),s.jsx("h2",{children:"Get started any way you want"}),s.jsx("p",{children:"Jump right into building with the Wells Fargo UI Toolkit—use the CDN, install it via package manager, or download the source code."}),s.jsx("a",{href:"#",className:pe.getStartedLink,children:"Read installation docs >"})]})]}),jx="_componentsContainer_b3o92_3",Nx="_heroSection_b3o92_7",bx="_searchBox_b3o92_32",kx="_sectionsContainer_b3o92_47",Px="_section_b3o92_47",Ex="_sectionHeading_b3o92_58",Bx="_blocksContainer_b3o92_65",Tx="_block_b3o92_65",Lx="_blockImage_b3o92_86",Rx="_blockContent_b3o92_96",Ox="_blockTitle_b3o92_100",$x="_blockCount_b3o92_105",P={componentsContainer:jx,heroSection:Nx,searchBox:bx,sectionsContainer:kx,section:Px,sectionHeading:Ex,blocksContainer:Bx,block:Tx,blockImage:Lx,blockContent:Rx,blockTitle:Ox,blockCount:$x},Mx="_heroSection_1ftnk_1",Ix="_mainHeading_1ftnk_7",Fx="_heroGrid_1ftnk_13",zx="_heroBox_1ftnk_20",Ax="_demoButton_1ftnk_29",Et={heroSection:Mx,mainHeading:Ix,heroGrid:Fx,heroBox:zx,demoButton:Ax},Af=()=>s.jsxs("div",{className:Et.heroSection,children:[s.jsx("h1",{className:Et.mainHeading,children:"Hero Section"}),s.jsxs("div",{className:Et.heroGrid,children:[s.jsxs("div",{className:Et.heroBox,children:[s.jsx("h2",{children:"Hero Demo 1"}),s.jsx(L,{to:"/herosection1",children:s.jsx("button",{className:Et.demoButton,children:"View Demo"})})]}),s.jsxs("div",{className:Et.heroBox,children:[s.jsx("h2",{children:"Hero Demo 2"}),s.jsx(L,{to:"/herosection2",children:s.jsx("button",{className:Et.demoButton,children:"View Demo"})})]}),s.jsxs("div",{className:Et.heroBox,children:[s.jsx("h2",{children:"Hero Demo 3"}),s.jsx(L,{to:"/herosection3",children:s.jsx("button",{className:Et.demoButton,children:"View Demo"})})]})]})]}),Dx="_featureSection_7qm90_1",Ux="_mainHeading_7qm90_7",Hx="_featureGrid_7qm90_13",Wx="_featureBox_7qm90_20",qx="_demoButton_7qm90_29",Bt={featureSection:Dx,mainHeading:Ux,featureGrid:Hx,featureBox:Wx,demoButton:qx},Df=()=>s.jsxs("div",{className:Bt.featureSection,children:[s.jsx("h1",{className:Bt.mainHeading,children:"Feature Section"}),s.jsxs("div",{className:Bt.featureGrid,children:[s.jsxs("div",{className:Bt.featureBox,children:[s.jsx("h2",{children:"Feature Demo 1"}),s.jsx(L,{to:"/featuresection1",className:Bt.demoButton,children:"View Demo"})]}),s.jsxs("div",{className:Bt.featureBox,children:[s.jsx("h2",{children:"Feature Demo 2"}),s.jsx(L,{to:"/featuresection2",className:Bt.demoButton,children:"View Demo"})]}),s.jsxs("div",{className:Bt.featureBox,children:[s.jsx("h2",{children:"Feature Demo 3"}),s.jsx(L,{to:"/featuresection3",className:Bt.demoButton,children:"View Demo"})]})]})]}),Vx="_ctaContainer_1xpsc_1",Gx="_ctaBox_1xpsc_8",Qx="_demoButton_1xpsc_16",yn={ctaContainer:Vx,ctaBox:Gx,demoButton:Qx},Uf=()=>{const e=jo(),t=n=>{e(`/ctasection${n}`)};return s.jsxs("div",{className:yn.ctaContainer,children:[s.jsxs("div",{className:yn.ctaBox,children:[s.jsx("h2",{children:"CTA Section 1"}),s.jsx("button",{onClick:()=>t(1),className:yn.demoButton,children:"Show Demo"})]}),s.jsxs("div",{className:yn.ctaBox,children:[s.jsx("h2",{children:"CTA Section 2"}),s.jsx("button",{onClick:()=>t(2),className:yn.demoButton,children:"Show Demo"})]}),s.jsxs("div",{className:yn.ctaBox,children:[s.jsx("h2",{children:"CTA Section 3"}),s.jsx("button",{onClick:()=>t(3),className:yn.demoButton,children:"Show Demo"})]})]})},Xx="_pricingPageContainer_sx37m_1",Kx="_mainHeading_sx37m_6",Jx="_pricingDemosContainer_sx37m_11",Yx="_pricingDemoBox_sx37m_17",Zx="_viewDemoButton_sx37m_25",_n={pricingPageContainer:Xx,mainHeading:Kx,pricingDemosContainer:Jx,pricingDemoBox:Yx,viewDemoButton:Zx},Hf=()=>s.jsxs("div",{className:_n.pricingPageContainer,children:[s.jsx("h1",{className:_n.mainHeading,children:"Pricing Pages"}),s.jsxs("div",{className:_n.pricingDemosContainer,children:[s.jsxs("div",{className:_n.pricingDemoBox,children:[s.jsx("h2",{children:"Pricing Page 1"}),s.jsx("p",{children:"A simple and elegant pricing page for various plans."}),s.jsx(L,{to:"/pricingpage1",children:s.jsx("button",{className:_n.viewDemoButton,children:"View Demo"})})]}),s.jsxs("div",{className:_n.pricingDemoBox,children:[s.jsx("h2",{children:"Pricing Page 2"}),s.jsx("p",{children:"A modern and detailed pricing page with more features."}),s.jsx(L,{to:"/pricingpage2",children:s.jsx("button",{className:_n.viewDemoButton,children:"View Demo"})})]})]})]}),ey={},ty=()=>s.jsx("div",{className:ey.HeaderSection}),ny={},ry=()=>s.jsx("div",{className:ny.FooterSection}),oy={},iy=()=>s.jsx("div",{className:oy.TestimonialsSection}),sy={},ay=()=>s.jsx("div",{className:sy.FAQSection}),ly={},cy=()=>s.jsx("div",{className:ly.TeamSection}),uy={},dy=()=>s.jsx("div",{className:uy.NewsletterSection}),py={},fy=()=>s.jsx("div",{className:py.LandingPage}),my="_aboutPageContainer_mi9ot_1",hy="_pageTitle_mi9ot_6",gy="_pageDescription_mi9ot_11",vy="_boxContainer_mi9ot_17",xy="_box_mi9ot_17",yy="_boxImage_mi9ot_38",_y="_boxContent_mi9ot_44",Sy="_viewDemoButton_mi9ot_59",Ce={aboutPageContainer:my,pageTitle:hy,pageDescription:gy,boxContainer:vy,box:xy,boxImage:yy,boxContent:_y,viewDemoButton:Sy},Wf=()=>s.jsxs("div",{className:Ce.aboutPageContainer,children:[s.jsx("h1",{className:Ce.pageTitle,children:"About Us"}),s.jsx("p",{className:Ce.pageDescription,children:"Explore the various aspects of our company, mission, and values through the following pages."}),s.jsxs("div",{className:Ce.boxContainer,children:[s.jsxs("div",{className:Ce.box,children:[s.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 1",className:Ce.boxImage}),s.jsxs("div",{className:Ce.boxContent,children:[s.jsx("h2",{children:"Company Overview"}),s.jsx("p",{children:"Learn more about our company's history, mission, and values."}),s.jsx(L,{to:"/aboutpage1",className:Ce.viewDemoButton,children:"View Demo"})]})]}),s.jsxs("div",{className:Ce.box,children:[s.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 2",className:Ce.boxImage}),s.jsxs("div",{className:Ce.boxContent,children:[s.jsx("h2",{children:"Our Team"}),s.jsx("p",{children:"Meet the dedicated team behind our company's success."}),s.jsx(L,{to:"/aboutpage2",className:Ce.viewDemoButton,children:"View Demo"})]})]}),s.jsxs("div",{className:Ce.box,children:[s.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 3",className:Ce.boxImage}),s.jsxs("div",{className:Ce.boxContent,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"Get in touch with us for any inquiries or support."}),s.jsx(L,{to:"/aboutpage3",className:Ce.viewDemoButton,children:"View Demo"})]})]})]})]}),wy={},Cy=()=>s.jsx("div",{className:wy.ContactPage}),jy="_loginPageContainer_c2z96_1",Ny="_pageBoxes_c2z96_6",by="_pageBox_c2z96_6",ky="_demoButton_c2z96_34",Jo={loginPageContainer:jy,pageBoxes:Ny,pageBox:by,demoButton:ky},qf=()=>{const e=[{name:"Login Page 1",path:"/loginpage1"},{name:"Login Page 2",path:"/loginpage2"},{name:"Login Page 3",path:"/loginpage3"}];return s.jsxs("div",{className:Jo.loginPageContainer,children:[s.jsx("h1",{children:"Login Pages"}),s.jsx("div",{className:Jo.pageBoxes,children:e.map((t,n)=>s.jsxs("div",{className:Jo.pageBox,children:[s.jsx("h2",{children:t.name}),s.jsxs("p",{children:["Explore the design and functionality of ",t.name,"."]}),s.jsx(L,{to:t.path,className:Jo.demoButton,children:"View Demo"})]},n))})]})},Py={},Ey=()=>s.jsx("div",{className:Py.RegistrationPage}),By={},Ty=()=>s.jsx("div",{className:By.DashboardPage}),Ly={},Ry=()=>s.jsx("div",{className:Ly.ProfilePage}),Oy={},$y=()=>s.jsx("div",{className:Oy.GridLayout}),My={},Iy=()=>s.jsx("div",{className:My.FlexLayout}),Fy={},zy=()=>s.jsx("div",{className:Fy.LoginForm}),Ay={},Dy=()=>s.jsx("div",{className:Ay.RegistrationForm}),Uy={},Hy=()=>s.jsx("div",{className:Uy.ContactForm}),Wy={},qy=()=>s.jsx("div",{className:Wy.SubscriptionForm}),Vy={},Gy=()=>s.jsx("div",{className:Vy.FeedbackForm}),Qy={},Xy=()=>s.jsx("div",{className:Qy.SearchForm}),Ky="_buttonPage_md1jm_1",Jy="_buttonGrid_md1jm_5",Yy="_buttonSection_md1jm_11",Zy="_buttonExample_md1jm_23",e0="_button_md1jm_1",t0="_buttonText_md1jm_36",n0="_signOn1_md1jm_54",r0="_signOn2_md1jm_72",o0="_learnMore_md1jm_91",i0="_learnMore2_md1jm_110",s0="_copyButton_md1jm_131",a0="_codeBlock_md1jm_145",l0="_toggleSwitch_md1jm_154",c0="_slider_md1jm_168",Tt={buttonPage:Ky,buttonGrid:Jy,buttonSection:Yy,buttonExample:Zy,button:e0,buttonText:t0,signOn1:n0,signOn2:r0,learnMore:o0,learnMore2:i0,copyButton:s0,codeBlock:a0,toggleSwitch:l0,slider:c0},u0=[{label:"Sign On",className:"buttonText",tsxCode:"<div className={styles.buttonText}>Sign On</div>",cssCode:`
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
    `}],Vf=()=>{const[e,t]=C.useState(null),[n,r]=C.useState({}),o=a=>{navigator.clipboard.writeText(a),t(a),setTimeout(()=>t(null),2e3)},i=a=>{r(l=>({...l,[a]:!l[a]}))};return s.jsxs("div",{className:Tt.buttonPage,children:[s.jsx("h1",{children:"Button Components"}),s.jsx("div",{className:Tt.buttonGrid,children:u0.map((a,l)=>s.jsxs("div",{className:Tt.buttonSection,children:[s.jsx("div",{className:Tt.buttonExample,children:s.jsx("div",{className:Tt[a.className],children:a.label})}),s.jsxs("label",{className:Tt.toggleSwitch,children:[s.jsx("input",{type:"checkbox",checked:n[l]||!1,onChange:()=>i(l)}),s.jsx("span",{className:Tt.slider})]}),s.jsx("button",{className:Tt.copyButton,onClick:()=>o(n[l]?a.cssCode:a.tsxCode),children:e===(n[l]?a.cssCode:a.tsxCode)?"Copied!":"Copy Code"}),s.jsx("pre",{className:Tt.codeBlock,children:n[l]?a.cssCode:a.tsxCode})]},l))})]})},d0="_cardSectionContainer_6gyg9_1",p0="_cardsWrapper_6gyg9_5",f0="_cardWrapper_6gyg9_11",m0="_card_6gyg9_1",h0="_cardImage_6gyg9_28",g0="_cardContent_6gyg9_39",v0="_cardButton_6gyg9_43",x0="_toggleContainer_6gyg9_57",y0="_toggleButton_6gyg9_63",_0="_active_6gyg9_72",S0="_codeContainer_6gyg9_76",w0="_code_6gyg9_76",C0="_copyButton_6gyg9_93",j0="_copied_6gyg9_106",F={cardSectionContainer:d0,cardsWrapper:p0,cardWrapper:f0,card:m0,cardImage:h0,cardContent:g0,cardButton:v0,toggleContainer:x0,toggleButton:y0,active:_0,codeContainer:S0,code:w0,copyButton:C0,copied:j0},Gf=()=>{const[e,t]=C.useState(null),[n,r]=C.useState("tsx"),[o,i]=C.useState(!1),a=[{id:"1",title:"Earn up to 60,000 bonus points",description:"with the Choice Privileges® Mastercard® Credit Cards",buttonText:"Learn more",imageUrl:"150 x 150"},{id:"2",title:"Plan. Prepare. Enjoy home.",description:"Discover tools and tips to help make buying or refinancing a little easier",buttonText:"Get tips for homebuying",imageUrl:"150 x 150"},{id:"3",title:"Save. Invest. Retire well.",description:"Discover how to start saving to meet your retirement goals",buttonText:"Get ready for retirement",imageUrl:"150 x 150"},{id:"4",title:"Scams are on the rise. Protect yourself.",description:"Recognize the tell-tale signs of scams so you won't be the next victim.",buttonText:"See what to look for",imageUrl:"150 x 150"},{id:"5",title:"Investment Strategy update",description:"Weekly market insights and possible impacts on investors from Wells Fargo Investment Institute.",buttonText:"Get the report",imageUrl:"150 x 150"},{id:"6",title:"Get ready for retirement",description:"Discover how to start saving to meet your retirement goals.",buttonText:"Learn more",imageUrl:"150 x 150"}],l=u=>{navigator.clipboard.writeText(u),i(!0),setTimeout(()=>i(!1),2e3)},c=u=>{var v,x,y,j;if(u!==e)return null;const d=`<div className={styles.card}>
  <div className={styles.cardImage}>
    ${(v=a.find(g=>g.id===u))==null?void 0:v.imageUrl}
  </div>
  <div className={styles.cardContent}>
    <h3>${(x=a.find(g=>g.id===u))==null?void 0:x.title}</h3>
    <p>${(y=a.find(g=>g.id===u))==null?void 0:y.description}</p>
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
}`;return s.jsxs("div",{className:F.codeContainer,children:[s.jsx("button",{className:`${F.copyButton} ${o?F.copied:""}`,onClick:()=>l(m),children:o?"Copied!":"Copy"}),s.jsx("pre",{className:F.code,children:m})]})};return s.jsxs("div",{className:F.cardSectionContainer,children:[s.jsx("h2",{children:"Card Section"}),s.jsx("h3",{children:"Rewards Cards"}),s.jsx("div",{className:F.cardsWrapper,children:a.slice(0,2).map(u=>s.jsxs("div",{className:F.cardWrapper,children:[s.jsxs("div",{className:F.card,children:[s.jsx("div",{className:F.cardImage,children:u.imageUrl}),s.jsxs("div",{className:F.cardContent,children:[s.jsx("h3",{children:u.title}),s.jsx("p",{children:u.description}),s.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),s.jsxs("div",{className:F.toggleContainer,children:[s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),s.jsx("h3",{children:"Home Improvement Cards"}),s.jsx("div",{className:F.cardsWrapper,children:a.slice(2,4).map(u=>s.jsxs("div",{className:F.cardWrapper,children:[s.jsxs("div",{className:F.card,children:[s.jsx("div",{className:F.cardImage,children:u.imageUrl}),s.jsxs("div",{className:F.cardContent,children:[s.jsx("h3",{children:u.title}),s.jsx("p",{children:u.description}),s.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),s.jsxs("div",{className:F.toggleContainer,children:[s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),s.jsx("h3",{children:"Security and Investment Cards"}),s.jsx("div",{className:F.cardsWrapper,children:a.slice(4,6).map(u=>s.jsxs("div",{className:F.cardWrapper,children:[s.jsxs("div",{className:F.card,children:[s.jsx("div",{className:F.cardImage,children:u.imageUrl}),s.jsxs("div",{className:F.cardContent,children:[s.jsx("h3",{children:u.title}),s.jsx("p",{children:u.description}),s.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),s.jsxs("div",{className:F.toggleContainer,children:[s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),s.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))})]})},N0="_navbarSection_b7mxw_1",b0="_navbar_b7mxw_1",k0="_navbarSecondary_b7mxw_5",P0="_logo_b7mxw_18",E0="_hamburger_b7mxw_25",B0="_navLinks_b7mxw_34",T0="_navLink_b7mxw_34",L0="_closeBtn_b7mxw_50",R0="_profileMenuContainer_b7mxw_54",O0="_userIcon_b7mxw_58",$0="_profileMenu_b7mxw_54",M0="_open_b7mxw_104",I0="_codeBlock_b7mxw_130",F0="_toggleContainer_b7mxw_158",z0="_toggleButton_b7mxw_164",A0="_active_b7mxw_191",D={navbarSection:N0,navbar:b0,navbarSecondary:k0,logo:P0,hamburger:E0,navLinks:B0,navLink:T0,closeBtn:L0,profileMenuContainer:R0,userIcon:O0,profileMenu:$0,open:M0,codeBlock:I0,toggleContainer:F0,toggleButton:z0,active:A0},Qf=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState(null),[a,l]=C.useState(!1),c=()=>{t(!e)},u=()=>{r(!n)},d=()=>{},f=g=>{o===g?l(!a):(i(g),l(!1))},m=g=>{navigator.clipboard.writeText(g).then(()=>{alert("Code copied to clipboard")})},v=`
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
`,x=`
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
`,y=`
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
`;return s.jsxs("div",{className:D.navbarSection,children:[s.jsx("h2",{children:"Navbar 1"}),s.jsxs("nav",{className:D.navbar,children:[s.jsx("div",{className:D.logo,children:s.jsx(L,{to:"/",children:s.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:D.logoImage})})}),s.jsx("button",{className:D.hamburger,onClick:c,children:e?s.jsx(Hu,{}):s.jsx(Uu,{})}),s.jsxs("ul",{className:`${D.navLinks} ${e?D.open:""}`,children:[s.jsx("li",{className:D.closeBtn,onClick:c,children:"×"}),s.jsx("li",{children:s.jsx(L,{to:"/",className:D.navLink,onClick:c,children:"Home"})}),s.jsx("li",{children:s.jsx(L,{to:"/services",className:D.navLink,onClick:c,children:"Services"})}),s.jsx("li",{children:s.jsx(L,{to:"/about",className:D.navLink,onClick:c,children:"About"})}),s.jsx("li",{children:s.jsx(L,{to:"/contact",className:D.navLink,onClick:c,children:"Contact"})}),s.jsxs("li",{className:D.userActions,children:[s.jsx(zf,{className:D.userIcon,onClick:u}),n&&s.jsxs("div",{className:D.profileMenu,children:[s.jsx(L,{to:"/profile",className:D.navLink,onClick:u,children:"Profile"}),s.jsx("button",{className:D.navLink,onClick:d,children:"Logout"})]})]})]})]}),s.jsx("div",{className:D.toggleContainer,children:s.jsx("button",{className:`${D.toggleButton} ${o==="navbar1"&&a?D.active:""}`,onClick:()=>f("navbar1"),children:o==="navbar1"&&a?"CSS":"TSX"})}),o==="navbar1"&&s.jsxs("div",{className:D.codeBlock,children:[s.jsx("pre",{children:s.jsx("code",{children:a?x:v})}),s.jsxs("button",{onClick:()=>m(a?x:v),children:["Copy ",a?"CSS":"TSX"]})]}),s.jsx("div",{style:{marginBottom:"2rem"}}),s.jsx("h2",{children:"Navbar 2"}),s.jsxs("nav",{className:D.navbar,children:[s.jsx("div",{className:D.logo,children:s.jsx(L,{to:"/",children:s.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:D.logoImage})})}),s.jsx("button",{className:D.hamburger,onClick:c,children:e?s.jsx(Hu,{}):s.jsx(Uu,{})}),s.jsxs("ul",{className:`${D.navLinks} ${e?D.open:""}`,children:[s.jsx("li",{className:D.closeBtn,onClick:c,children:"×"}),s.jsx("li",{children:s.jsx(L,{to:"/",className:D.navLink,onClick:c,children:"Home"})}),s.jsx("li",{children:s.jsx(L,{to:"/features",className:D.navLink,onClick:c,children:"Features"})}),s.jsx("li",{children:s.jsx(L,{to:"/pricing",className:D.navLink,onClick:c,children:"Pricing"})}),s.jsx("li",{children:s.jsx(L,{to:"/faq",className:D.navLink,onClick:c,children:"FAQ"})})]})]}),s.jsx("div",{className:D.toggleContainer,children:s.jsx("button",{className:`${D.toggleButton} ${o==="navbar2"&&a?D.active:""}`,onClick:()=>f("navbar2"),children:o==="navbar2"&&a?"CSS":"TSX"})}),o==="navbar2"&&s.jsxs("div",{className:D.codeBlock,children:[s.jsx("pre",{children:s.jsx("code",{children:a?j:y})}),s.jsxs("button",{onClick:()=>m(a?j:y),children:["Copy ",a?"CSS":"TSX"]})]})]})},D0={},U0=()=>s.jsx("div",{className:D0.ImageGallery}),H0={},W0=()=>s.jsx("div",{className:H0.Chart}),q0={},V0=()=>s.jsx("div",{className:q0.Divider}),G0=()=>{const[e,t]=C.useState(""),n=[{name:"Hero Section",category:"Hero Section",count:12,component:Af},{name:"Feature Section",category:"Feature Section",count:18,component:Df},{name:"CTA Section",category:"CTA Section",count:11,component:Uf},{name:"Pricing Page",category:"Pricing Page",count:13,component:Hf},{name:"Header Section",category:"Header Section",count:10,component:ty},{name:"Footer Section",category:"Footer Section",count:7,component:ry},{name:"Testimonials Section",category:"Testimonials Section",count:7,component:iy},{name:"FAQ Section",category:"FAQ Section",count:5,component:ay},{name:"Team Section",category:"Team Section",count:5,component:cy},{name:"Newsletter Section",category:"Newsletter Section",count:7,component:dy}],r=[{name:"Landing Page",category:"Landing Page",count:5,component:fy},{name:"About Page",category:"About Page",count:8,component:Wf},{name:"Contact Page",category:"Contact Page",count:4,component:Cy},{name:"Login Page",category:"Login Page",count:4,component:qf},{name:"Registration Page",category:"Registration Page",count:4,component:Ey},{name:"Dashboard Page",category:"Dashboard Page",count:4,component:Ty},{name:"Profile Page",category:"Profile Page",count:4,component:Ry}],o=[{name:"Grid Layout",category:"Grid Layout",count:10,component:$y},{name:"Flex Layout",category:"Flex Layout",count:7,component:Iy}],i=[{name:"Login Form",category:"Login Form",count:6,component:zy},{name:"Registration Form",category:"Registration Form",count:9,component:Dy},{name:"Contact Form",category:"Contact Form",count:4,component:Hy},{name:"Subscription Form",category:"Subscription Form",count:4,component:qy},{name:"Feedback Form",category:"Feedback Form",count:4,component:Gy},{name:"Search Form",category:"Search Form",count:4,component:Xy}],a=[{name:"Button",category:"Button",count:8,component:Vf},{name:"Card Section",category:"Card Section",count:12,component:Gf}],l=[{name:"Navbar Section",category:"Navbar Section",count:5,component:Qf}],c=[{name:"Image Gallery",category:"Image Gallery",count:4,component:U0}],u=[{name:"Chart",category:"Chart",count:4,component:W0}],d=[{name:"Divider",category:"Divider",count:3,component:V0}],f=m=>m.filter(v=>v.name.toLowerCase().includes(e.toLowerCase()));return s.jsxs("div",{className:P.componentsContainer,children:[s.jsxs("div",{className:P.heroSection,children:[s.jsx("h1",{children:"Huge collection of sections"}),s.jsx("h2",{children:"Infinite combinations"}),s.jsx("p",{children:"Discover a multitude of customizable options to craft pixel-perfect pages with ease."}),s.jsx("div",{className:P.searchBox,children:s.jsx("input",{type:"text",placeholder:"Search for multiple components...",value:e,onChange:m=>t(m.target.value)})})]}),s.jsxs("div",{className:P.sectionsContainer,children:[s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Page Sections"}),s.jsx("div",{className:P.blocksContainer,children:f(n).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Pages"}),s.jsx("div",{className:P.blocksContainer,children:f(r).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Layouts"}),s.jsx("div",{className:P.blocksContainer,children:f(o).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Forms"}),s.jsx("div",{className:P.blocksContainer,children:f(i).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"UI Elements"}),s.jsx("div",{className:P.blocksContainer,children:f(a).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Navigation"}),s.jsx("div",{className:P.blocksContainer,children:f(l).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Media"}),s.jsx("div",{className:P.blocksContainer,children:f(c).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Data Display"}),s.jsx("div",{className:P.blocksContainer,children:f(u).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),s.jsxs("div",{className:P.section,children:[s.jsx("h3",{className:P.sectionHeading,children:"Utility Components"}),s.jsx("div",{className:P.blocksContainer,children:f(d).map((m,v)=>s.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:s.jsxs("div",{className:P.block,children:[s.jsx("div",{className:P.blockImage,children:"Image"}),s.jsxs("div",{className:P.blockContent,children:[s.jsx("p",{className:P.blockTitle,children:m.category}),s.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]})]})]})},Q0=()=>s.jsx("div",{children:"Utilities"}),X0=()=>s.jsx("div",{children:"Documentation"}),K0="_examples_mznfb_1",J0="_grid_mznfb_5",Y0="_card_mznfb_11",Z0="_demoButton_mznfb_21",Yo={examples:K0,grid:J0,card:Y0,demoButton:Z0},e1=()=>{const e=jo(),t=r=>{e(r)},n=[{title:"Template 1: Business Website",path:"/examples/template1"},{title:"Template 2: Portfolio",path:"/examples/template2"},{title:"Template 3: E-commerce",path:"/examples/template3"},{title:"Template 4: Blog",path:"/examples/template4"},{title:"Template 5: Landing Page",path:"/examples/template5"}];return s.jsxs("div",{className:Yo.examples,children:[s.jsx("h1",{children:"Examples"}),s.jsx("div",{className:Yo.grid,children:n.map((r,o)=>s.jsxs("div",{className:Yo.card,children:[s.jsx("h2",{children:r.title}),s.jsx("button",{onClick:()=>t(r.path),className:Yo.demoButton,children:"Show Demo"})]},o))})]})};function Xf(e,t){return function(){return e.apply(t,arguments)}}const{toString:t1}=Object.prototype,{getPrototypeOf:hc}=Object,ms=(e=>t=>{const n=t1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),St=e=>(e=e.toLowerCase(),t=>ms(t)===e),hs=e=>t=>typeof t===e,{isArray:vr}=Array,vo=hs("undefined");function n1(e){return e!==null&&!vo(e)&&e.constructor!==null&&!vo(e.constructor)&&st(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Kf=St("ArrayBuffer");function r1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Kf(e.buffer),t}const o1=hs("string"),st=hs("function"),Jf=hs("number"),gs=e=>e!==null&&typeof e=="object",i1=e=>e===!0||e===!1,hi=e=>{if(ms(e)!=="object")return!1;const t=hc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},s1=St("Date"),a1=St("File"),l1=St("Blob"),c1=St("FileList"),u1=e=>gs(e)&&st(e.pipe),d1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||st(e.append)&&((t=ms(e))==="formdata"||t==="object"&&st(e.toString)&&e.toString()==="[object FormData]"))},p1=St("URLSearchParams"),[f1,m1,h1,g1]=["ReadableStream","Request","Response","Headers"].map(St),v1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),vr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function Yf(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,em=e=>!vo(e)&&e!==Zf;function al(){const{caseless:e}=em(this)&&this||{},t={},n=(r,o)=>{const i=e&&Yf(t,o)||o;hi(t[i])&&hi(r)?t[i]=al(t[i],r):hi(r)?t[i]=al({},r):vr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&bo(arguments[r],n);return t}const x1=(e,t,n,{allOwnKeys:r}={})=>(bo(t,(o,i)=>{n&&st(o)?e[i]=Xf(o,n):e[i]=o},{allOwnKeys:r}),e),y1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},S1=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&hc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},w1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},C1=e=>{if(!e)return null;if(vr(e))return e;let t=e.length;if(!Jf(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},j1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hc(Uint8Array)),N1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},b1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},k1=St("HTMLFormElement"),P1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Wu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),E1=St("RegExp"),tm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};bo(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},B1=e=>{tm(e,(t,n)=>{if(st(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(st(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},T1=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return vr(e)?r(e):r(String(e).split(t)),n},L1=()=>{},R1=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ea="abcdefghijklmnopqrstuvwxyz",qu="0123456789",nm={DIGIT:qu,ALPHA:ea,ALPHA_DIGIT:ea+ea.toUpperCase()+qu},O1=(e=16,t=nm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function $1(e){return!!(e&&st(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const M1=e=>{const t=new Array(10),n=(r,o)=>{if(gs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=vr(r)?[]:{};return bo(r,(a,l)=>{const c=n(a,o+1);!vo(c)&&(i[l]=c)}),t[o]=void 0,i}}return r};return n(e,0)},I1=St("AsyncFunction"),F1=e=>e&&(gs(e)||st(e))&&st(e.then)&&st(e.catch),w={isArray:vr,isArrayBuffer:Kf,isBuffer:n1,isFormData:d1,isArrayBufferView:r1,isString:o1,isNumber:Jf,isBoolean:i1,isObject:gs,isPlainObject:hi,isReadableStream:f1,isRequest:m1,isResponse:h1,isHeaders:g1,isUndefined:vo,isDate:s1,isFile:a1,isBlob:l1,isRegExp:E1,isFunction:st,isStream:u1,isURLSearchParams:p1,isTypedArray:j1,isFileList:c1,forEach:bo,merge:al,extend:x1,trim:v1,stripBOM:y1,inherits:_1,toFlatObject:S1,kindOf:ms,kindOfTest:St,endsWith:w1,toArray:C1,forEachEntry:N1,matchAll:b1,isHTMLForm:k1,hasOwnProperty:Wu,hasOwnProp:Wu,reduceDescriptors:tm,freezeMethods:B1,toObjectSet:T1,toCamelCase:P1,noop:L1,toFiniteNumber:R1,findKey:Yf,global:Zf,isContextDefined:em,ALPHABET:nm,generateString:O1,isSpecCompliantForm:$1,toJSONObject:M1,isAsyncFn:I1,isThenable:F1};function R(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}w.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const rm=R.prototype,om={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{om[e]={value:e}});Object.defineProperties(R,om);Object.defineProperty(rm,"isAxiosError",{value:!0});R.from=(e,t,n,r,o,i)=>{const a=Object.create(rm);return w.toFlatObject(e,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),R.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const z1=null;function ll(e){return w.isPlainObject(e)||w.isArray(e)}function im(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function Vu(e,t,n){return e?e.concat(t).map(function(o,i){return o=im(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function A1(e){return w.isArray(e)&&!e.some(ll)}const D1=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function vs(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,j){return!w.isUndefined(j[y])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(o))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(w.isDate(x))return x.toISOString();if(!c&&w.isBlob(x))throw new R("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(x)||w.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,y,j){let g=x;if(x&&!j&&typeof x=="object"){if(w.endsWith(y,"{}"))y=r?y:y.slice(0,-2),x=JSON.stringify(x);else if(w.isArray(x)&&A1(x)||(w.isFileList(x)||w.endsWith(y,"[]"))&&(g=w.toArray(x)))return y=im(y),g.forEach(function(h,_){!(w.isUndefined(h)||h===null)&&t.append(a===!0?Vu([y],_,i):a===null?y:y+"[]",u(h))}),!1}return ll(x)?!0:(t.append(Vu(j,y,i),u(x)),!1)}const f=[],m=Object.assign(D1,{defaultVisitor:d,convertValue:u,isVisitable:ll});function v(x,y){if(!w.isUndefined(x)){if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(x),w.forEach(x,function(g,p){(!(w.isUndefined(g)||g===null)&&o.call(t,g,w.isString(p)?p.trim():p,y,m))===!0&&v(g,y?y.concat(p):[p])}),f.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Gu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function gc(e,t){this._pairs=[],e&&vs(e,this,t)}const sm=gc.prototype;sm.append=function(t,n){this._pairs.push([t,n])};sm.toString=function(t){const n=t?function(r){return t.call(this,r,Gu)}:Gu;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function U1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function am(e,t,n){if(!t)return e;const r=n&&n.encode||U1,o=n&&n.serialize;let i;if(o?i=o(t,n):i=w.isURLSearchParams(t)?t.toString():new gc(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Qu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const lm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},H1=typeof URLSearchParams<"u"?URLSearchParams:gc,W1=typeof FormData<"u"?FormData:null,q1=typeof Blob<"u"?Blob:null,V1={isBrowser:!0,classes:{URLSearchParams:H1,FormData:W1,Blob:q1},protocols:["http","https","file","blob","url","data"]},vc=typeof window<"u"&&typeof document<"u",G1=(e=>vc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Q1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",X1=vc&&window.location.href||"http://localhost",K1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vc,hasStandardBrowserEnv:G1,hasStandardBrowserWebWorkerEnv:Q1,origin:X1},Symbol.toStringTag,{value:"Module"})),yt={...K1,...V1};function J1(e,t){return vs(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return yt.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Y1(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Z1(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function cm(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=n.length;return a=!a&&w.isArray(o)?o.length:a,c?(w.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!w.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&w.isArray(o[a])&&(o[a]=Z1(o[a])),!l)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,o)=>{t(Y1(r),o,n,0)}),n}return null}function e_(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ko={transitional:lm,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=w.isObject(t);if(i&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return o?JSON.stringify(cm(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return J1(t,this.formSerializer).toString();if((l=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return vs(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),e_(t)):t}],transformResponse:[function(t){const n=this.transitional||ko.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?R.from(l,R.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{ko.headers[e]={}});const t_=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),n_=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&t_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Xu=Symbol("internals");function Br(e){return e&&String(e).trim().toLowerCase()}function gi(e){return e===!1||e==null?e:w.isArray(e)?e.map(gi):String(e)}function r_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const o_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ta(e,t,n,r,o){if(w.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function i_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function s_(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class qe{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,c,u){const d=Br(c);if(!d)throw new Error("header name must be a non-empty string");const f=w.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||c]=gi(l))}const a=(l,c)=>w.forEach(l,(u,d)=>i(u,d,c));if(w.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(w.isString(t)&&(t=t.trim())&&!o_(t))a(n_(t),n);else if(w.isHeaders(t))for(const[l,c]of t.entries())i(c,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Br(t),t){const r=w.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return r_(o);if(w.isFunction(n))return n.call(this,o,r);if(w.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Br(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ta(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Br(a),a){const l=w.findKey(r,a);l&&(!n||ta(r,r[l],l,n))&&(delete r[l],o=!0)}}return w.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||ta(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return w.forEach(this,(o,i)=>{const a=w.findKey(r,i);if(a){n[a]=gi(o),delete n[i];return}const l=t?i_(i):String(i).trim();l!==i&&delete n[i],n[l]=gi(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Xu]=this[Xu]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=Br(a);r[l]||(s_(o,a),r[l]=!0)}return w.isArray(t)?t.forEach(i):i(t),this}}qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(qe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});w.freezeMethods(qe);function na(e,t){const n=this||ko,r=t||n,o=qe.from(r.headers);let i=r.data;return w.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function um(e){return!!(e&&e.__CANCEL__)}function xr(e,t,n){R.call(this,e??"canceled",R.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits(xr,R,{__CANCEL__:!0});function dm(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function a_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function l_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];a||(a=u),n[o]=c,r[o]=u;let f=i,m=0;for(;f!==o;)m+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=d&&u-d;return v?Math.round(m*1e3/v):void 0}}function c_(e,t){let n=0;const r=1e3/t;let o=null;return function(){const a=this===!0,l=Date.now();if(a||l-n>r)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const qi=(e,t,n=3)=>{let r=0;const o=l_(50,250);return c_(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=a-r,u=o(c),d=a<=l;r=a;const f={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-a)/u:void 0,event:i,lengthComputable:l!=null};f[t?"download":"upload"]=!0,e(f)},n)},u_=yt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=w.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),d_=yt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];w.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),w.isString(r)&&a.push("path="+r),w.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function p_(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function f_(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function pm(e,t){return e&&!p_(t)?f_(e,t):t}const Ku=e=>e instanceof qe?{...e}:e;function Mn(e,t){t=t||{};const n={};function r(u,d,f){return w.isPlainObject(u)&&w.isPlainObject(d)?w.merge.call({caseless:f},u,d):w.isPlainObject(d)?w.merge({},d):w.isArray(d)?d.slice():d}function o(u,d,f){if(w.isUndefined(d)){if(!w.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function i(u,d){if(!w.isUndefined(d))return r(void 0,d)}function a(u,d){if(w.isUndefined(d)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(Ku(u),Ku(d),!0)};return w.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=c[d]||o,m=f(e[d],t[d],d);w.isUndefined(m)&&f!==l||(n[d]=m)}),n}const fm=e=>{const t=Mn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=t;t.headers=a=qe.from(a),t.url=am(pm(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(w.isFormData(n)){if(yt.hasStandardBrowserEnv||yt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[u,...d]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...d].join("; "))}}if(yt.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&u_(t.url))){const u=o&&i&&d_.read(i);u&&a.set(o,u)}return t},m_=typeof XMLHttpRequest<"u",h_=m_&&function(e){return new Promise(function(n,r){const o=fm(e);let i=o.data;const a=qe.from(o.headers).normalize();let{responseType:l}=o,c;function u(){o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let d=new XMLHttpRequest;d.open(o.method.toUpperCase(),o.url,!0),d.timeout=o.timeout;function f(){if(!d)return;const v=qe.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),y={data:!l||l==="text"||l==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};dm(function(g){n(g),u()},function(g){r(g),u()},y),d=null}"onloadend"in d?d.onloadend=f:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(f)},d.onabort=function(){d&&(r(new R("Request aborted",R.ECONNABORTED,o,d)),d=null)},d.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,o,d)),d=null},d.ontimeout=function(){let x=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const y=o.transitional||lm;o.timeoutErrorMessage&&(x=o.timeoutErrorMessage),r(new R(x,y.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,o,d)),d=null},i===void 0&&a.setContentType(null),"setRequestHeader"in d&&w.forEach(a.toJSON(),function(x,y){d.setRequestHeader(y,x)}),w.isUndefined(o.withCredentials)||(d.withCredentials=!!o.withCredentials),l&&l!=="json"&&(d.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&d.addEventListener("progress",qi(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",qi(o.onUploadProgress)),(o.cancelToken||o.signal)&&(c=v=>{d&&(r(!v||v.type?new xr(null,e,d):v),d.abort(),d=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const m=a_(o.url);if(m&&yt.protocols.indexOf(m)===-1){r(new R("Unsupported protocol "+m+":",R.ERR_BAD_REQUEST,e));return}d.send(i||null)})},g_=(e,t)=>{let n=new AbortController,r;const o=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof R?u:new xr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new R(`timeout ${t} of ms exceeded`,R.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",o):c.unsubscribe(o))}),e=null)};e.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=a,[l,()=>{i&&clearTimeout(i),i=null}]},v_=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},x_=async function*(e,t,n){for await(const r of e)yield*v_(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Ju=(e,t,n,r,o)=>{const i=x_(e,t,o);let a=0;return new ReadableStream({type:"bytes",async pull(l){const{done:c,value:u}=await i.next();if(c){l.close(),r();return}let d=u.byteLength;n&&n(a+=d),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),i.return()}},{highWaterMark:2})},Yu=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},xs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mm=xs&&typeof ReadableStream=="function",cl=xs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),y_=mm&&(()=>{let e=!1;const t=new Request(yt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Zu=64*1024,ul=mm&&!!(()=>{try{return w.isReadableStream(new Response("").body)}catch{}})(),Vi={stream:ul&&(e=>e.body)};xs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Vi[t]&&(Vi[t]=w.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new R(`Response type '${t}' is not supported`,R.ERR_NOT_SUPPORT,r)})})})(new Response);const __=async e=>{if(e==null)return 0;if(w.isBlob(e))return e.size;if(w.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(w.isArrayBufferView(e))return e.byteLength;if(w.isURLSearchParams(e)&&(e=e+""),w.isString(e))return(await cl(e)).byteLength},S_=async(e,t)=>{const n=w.toFiniteNumber(e.getContentLength());return n??__(t)},w_=xs&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:m}=fm(e);u=u?(u+"").toLowerCase():"text";let[v,x]=o||i||a?g_([o,i],a):[],y,j;const g=()=>{!y&&setTimeout(()=>{v&&v.unsubscribe()}),y=!0};let p;try{if(c&&y_&&n!=="get"&&n!=="head"&&(p=await S_(d,r))!==0){let b=new Request(t,{method:"POST",body:r,duplex:"half"}),E;w.isFormData(r)&&(E=b.headers.get("content-type"))&&d.setContentType(E),b.body&&(r=Ju(b.body,Zu,Yu(p,qi(c)),null,cl))}w.isString(f)||(f=f?"cors":"omit"),j=new Request(t,{...m,signal:v,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let h=await fetch(j);const _=ul&&(u==="stream"||u==="response");if(ul&&(l||_)){const b={};["status","statusText","headers"].forEach(k=>{b[k]=h[k]});const E=w.toFiniteNumber(h.headers.get("content-length"));h=new Response(Ju(h.body,Zu,l&&Yu(E,qi(l,!0)),_&&g,cl),b)}u=u||"text";let S=await Vi[w.findKey(Vi,u)||"text"](h,e);return!_&&g(),x&&x(),await new Promise((b,E)=>{dm(b,E,{data:S,headers:qe.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:j})})}catch(h){throw g(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new R("Network Error",R.ERR_NETWORK,e,j),{cause:h.cause||h}):R.from(h,h&&h.code,e,j)}}),dl={http:z1,xhr:h_,fetch:w_};w.forEach(dl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ed=e=>`- ${e}`,C_=e=>w.isFunction(e)||e===null||e===!1,hm={getAdapter:e=>{e=w.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!C_(n)&&(r=dl[(a=String(n)).toLowerCase()],r===void 0))throw new R(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(ed).join(`
`):" "+ed(i[0]):"as no adapter specified";throw new R("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:dl};function ra(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xr(null,e)}function td(e){return ra(e),e.headers=qe.from(e.headers),e.data=na.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),hm.getAdapter(e.adapter||ko.adapter)(e).then(function(r){return ra(e),r.data=na.call(e,e.transformResponse,r),r.headers=qe.from(r.headers),r},function(r){return um(r)||(ra(e),r&&r.response&&(r.response.data=na.call(e,e.transformResponse,r.response),r.response.headers=qe.from(r.response.headers))),Promise.reject(r)})}const gm="1.7.2",xc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const nd={};xc.transitional=function(t,n,r){function o(i,a){return"[Axios v"+gm+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new R(o(a," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!nd[a]&&(nd[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function j_(e,t,n){if(typeof e!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],c=l===void 0||a(l,i,e);if(c!==!0)throw new R("option "+i+" must be "+c,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+i,R.ERR_BAD_OPTION)}}const pl={assertOptions:j_,validators:xc},Vt=pl.validators;class Bn{constructor(t){this.defaults=t,this.interceptors={request:new Qu,response:new Qu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&pl.assertOptions(r,{silentJSONParsing:Vt.transitional(Vt.boolean),forcedJSONParsing:Vt.transitional(Vt.boolean),clarifyTimeoutError:Vt.transitional(Vt.boolean)},!1),o!=null&&(w.isFunction(o)?n.paramsSerializer={serialize:o}:pl.assertOptions(o,{encode:Vt.function,serialize:Vt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&w.merge(i.common,i[n.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),n.headers=qe.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,f=0,m;if(!c){const x=[td.bind(this),void 0];for(x.unshift.apply(x,l),x.push.apply(x,u),m=x.length,d=Promise.resolve(n);f<m;)d=d.then(x[f++],x[f++]);return d}m=l.length;let v=n;for(f=0;f<m;){const x=l[f++],y=l[f++];try{v=x(v)}catch(j){y.call(this,j);break}}try{d=td.call(this,v)}catch(x){return Promise.reject(x)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Mn(this.defaults,t);const n=pm(t.baseURL,t.url);return am(n,t.params,t.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(t){Bn.prototype[t]=function(n,r){return this.request(Mn(r||{},{method:t,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(Mn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Bn.prototype[t]=n(),Bn.prototype[t+"Form"]=n(!0)});class yc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new xr(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new yc(function(o){t=o}),cancel:t}}}function N_(e){return function(n){return e.apply(null,n)}}function b_(e){return w.isObject(e)&&e.isAxiosError===!0}const fl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fl).forEach(([e,t])=>{fl[t]=e});function vm(e){const t=new Bn(e),n=Xf(Bn.prototype.request,t);return w.extend(n,Bn.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return vm(Mn(e,o))},n}const le=vm(ko);le.Axios=Bn;le.CanceledError=xr;le.CancelToken=yc;le.isCancel=um;le.VERSION=gm;le.toFormData=vs;le.AxiosError=R;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=N_;le.isAxiosError=b_;le.mergeConfig=Mn;le.AxiosHeaders=qe;le.formToJSON=e=>cm(w.isHTMLForm(e)?new FormData(e):e);le.getAdapter=hm.getAdapter;le.HttpStatusCode=fl;le.default=le;const k_="_signUpContainer_13jij_3",P_="_signUpBox_13jij_11",E_="_passwordLabel_13jij_42",B_="_eyeIcon_13jij_55",T_="_saveUsername_13jij_64",L_="_error_13jij_74",R_="_signUpButton_13jij_79",O_="_loginButton_13jij_90",$_="_footerBox_13jij_98",Lt={signUpContainer:k_,signUpBox:P_,passwordLabel:E_,eyeIcon:B_,saveUsername:T_,error:L_,signUpButton:R_,loginButton:O_,footerBox:$_},M_=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[a,l]=C.useState(null),c=jo(),u=async d=>{d.preventDefault();try{await le.post("http://localhost:5000/api/signup",{username:e,password:n}),c("/login")}catch(f){l("Sign up failed. Please try again."),console.error("Sign up failed",f)}};return s.jsx("div",{className:Lt.signUpContainer,children:s.jsxs("div",{className:Lt.signUpBox,children:[s.jsx("h2",{children:"Good morning"}),s.jsx("p",{children:"Sign on to manage your accounts."}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("label",{children:["Username",s.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:d=>t(d.target.value),required:!0})]}),s.jsxs("label",{className:Lt.passwordLabel,children:["Password",s.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value),required:!0}),s.jsx("span",{className:Lt.eyeIcon,onClick:()=>i(!o),children:o?s.jsx(If,{}):s.jsx(Ff,{})})]}),s.jsxs("div",{className:Lt.saveUsername,children:[s.jsx("input",{type:"checkbox",id:"saveUsername"}),s.jsx("label",{htmlFor:"saveUsername",children:"Save username"})]}),a&&s.jsx("p",{className:Lt.error,children:a}),s.jsx("button",{type:"submit",className:Lt.signUpButton,children:"Sign Up"}),s.jsx("button",{type:"button",className:Lt.loginButton,onClick:()=>c("/login"),children:"Login"})]}),s.jsxs("div",{className:Lt.footerBox,children:[s.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),s.jsx("a",{href:"/security",children:"Security Center"}),s.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},I_="_loginContainer_xd0hi_3",F_="_loginBox_xd0hi_11",z_="_passwordLabel_xd0hi_42",A_="_eyeIcon_xd0hi_55",D_="_saveUsername_xd0hi_64",U_="_error_xd0hi_74",H_="_loginButton_xd0hi_79",W_="_signUpButton_xd0hi_90",q_="_footerBox_xd0hi_98",Gt={loginContainer:I_,loginBox:F_,passwordLabel:z_,eyeIcon:A_,saveUsername:D_,error:U_,loginButton:H_,signUpButton:W_,footerBox:q_},V_=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[a,l]=C.useState(null),{setAuthState:c}=C.useContext(mc),u=jo(),d=async f=>{f.preventDefault();try{const m=await le.post("http://localhost:5000/api/login",{username:e,password:n}),{token:v}=m.data;c({token:v,username:e}),localStorage.setItem("token",v),u("/")}catch(m){l("Login failed. Please check your username and password."),console.error("Login failed",m)}};return s.jsx("div",{className:Gt.loginContainer,children:s.jsxs("div",{className:Gt.loginBox,children:[s.jsx("h2",{children:"Welcome back"}),s.jsx("p",{children:"Sign on to manage your accounts."}),s.jsxs("form",{onSubmit:d,children:[s.jsxs("label",{children:["Username",s.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:f=>t(f.target.value),required:!0})]}),s.jsxs("label",{className:Gt.passwordLabel,children:["Password",s.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:f=>r(f.target.value),required:!0}),s.jsx("span",{className:Gt.eyeIcon,onClick:()=>i(!o),children:o?s.jsx(If,{}):s.jsx(Ff,{})})]}),a&&s.jsx("p",{className:Gt.error,children:a}),s.jsx("button",{type:"submit",className:Gt.loginButton,children:"Sign In"}),s.jsx("button",{type:"button",className:Gt.signUpButton,onClick:()=>u("/signup"),children:"Sign Up"})]}),s.jsxs("div",{className:Gt.footerBox,children:[s.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),s.jsx("a",{href:"/security",children:"Security Center"}),s.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},G_="_footer_bjc8t_3",Q_="_container_bjc8t_9",X_="_footerLinks_bjc8t_15",oa={footer:G_,container:Q_,footerLinks:X_},K_=()=>s.jsx("footer",{className:oa.footer,children:s.jsx("div",{className:oa.container,children:s.jsxs("ul",{className:oa.footerLinks,children:[s.jsx("li",{children:s.jsx("a",{href:"#",children:"Privacy, Cookies, Security & Legal"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Notice of Data Collection"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"General Terms of Use"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Online Access Agreement"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Ad Choices"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Report Fraud"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"About Wells Fargo"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Careers"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Diversity and Accessibility"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Sitemap"})})]})})});var ys={},_s={},_c={},ia={},sa={exports:{}},aa,rd;function J_(){if(rd)return aa;rd=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return aa=e,aa}var la,od;function Y_(){if(od)return la;od=1;var e=J_();function t(){}function n(){}return n.resetWarningCache=t,la=function(){function r(a,l,c,u,d,f){if(f!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},la}var id;function Z_(){return id||(id=1,sa.exports=Y_()()),sa.exports}var sd;function eS(){return sd||(sd=1,function(e){(function(t,n){n(e,C,Z_())})(ud,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=x;var o=a(n),i=a(r);function a(p){return p&&p.__esModule?p:{default:p}}var l=Object.assign||function(p){for(var h=1;h<arguments.length;h++){var _=arguments[h];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(p[S]=_[S])}return p};function c(p,h){var _={};for(var S in p)h.indexOf(S)>=0||Object.prototype.hasOwnProperty.call(p,S)&&(_[S]=p[S]);return _}function u(p,h){if(!(p instanceof h))throw new TypeError("Cannot call a class as a function")}var d=function(){function p(h,_){for(var S=0;S<_.length;S++){var b=_[S];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(h,b.key,b)}}return function(h,_,S){return _&&p(h.prototype,_),S&&p(h,S),h}}();function f(p,h){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:p}function m(p,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);p.prototype=Object.create(h&&h.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(p,h):p.__proto__=h)}var v=!1;function x(p){v=p}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){x(!0)}}))}catch{}function y(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return v?p:p.capture}function j(p){if("touches"in p){var h=p.touches[0],_=h.pageX,S=h.pageY;return{x:_,y:S}}var b=p.screenX,E=p.screenY;return{x:b,y:E}}var g=function(p){m(h,p);function h(){var _;u(this,h);for(var S=arguments.length,b=Array(S),E=0;E<S;E++)b[E]=arguments[E];var k=f(this,(_=h.__proto__||Object.getPrototypeOf(h)).call.apply(_,[this].concat(b)));return k._handleSwipeStart=k._handleSwipeStart.bind(k),k._handleSwipeMove=k._handleSwipeMove.bind(k),k._handleSwipeEnd=k._handleSwipeEnd.bind(k),k._onMouseDown=k._onMouseDown.bind(k),k._onMouseMove=k._onMouseMove.bind(k),k._onMouseUp=k._onMouseUp.bind(k),k._setSwiperRef=k._setSwiperRef.bind(k),k}return d(h,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,y({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,y({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(S){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(S))}},{key:"_onMouseMove",value:function(S){this.mouseDown&&this._handleSwipeMove(S)}},{key:"_onMouseUp",value:function(S){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(S)}},{key:"_handleSwipeStart",value:function(S){var b=j(S),E=b.x,k=b.y;this.moveStart={x:E,y:k},this.props.onSwipeStart(S)}},{key:"_handleSwipeMove",value:function(S){if(this.moveStart){var b=j(S),E=b.x,k=b.y,K=E-this.moveStart.x,M=k-this.moveStart.y;this.moving=!0;var Ve=this.props.onSwipeMove({x:K,y:M},S);Ve&&S.cancelable&&S.preventDefault(),this.movePosition={deltaX:K,deltaY:M}}}},{key:"_handleSwipeEnd",value:function(S){this.props.onSwipeEnd(S);var b=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-b?this.props.onSwipeLeft(1,S):this.movePosition.deltaX>b&&this.props.onSwipeRight(1,S),this.movePosition.deltaY<-b?this.props.onSwipeUp(1,S):this.movePosition.deltaY>b&&this.props.onSwipeDown(1,S)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(S){this.swiper=S,this.props.innerRef(S)}},{key:"render",value:function(){var S=this.props;S.tagName;var b=S.className,E=S.style,k=S.children;S.allowMouseEvents,S.onSwipeUp,S.onSwipeDown,S.onSwipeLeft,S.onSwipeRight,S.onSwipeStart,S.onSwipeMove,S.onSwipeEnd,S.innerRef,S.tolerance;var K=c(S,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:b,style:E},K),k)}}]),h}(n.Component);g.displayName="ReactSwipe",g.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},g.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=g})}(ia)),ia}(function(e){(function(t,n){n(e,eS())})(ud,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})(_c);var Po={},xm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var l in i)t.call(i,l)&&i[l]&&(a=o(a,l));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(xm);var tS=xm.exports;Object.defineProperty(Po,"__esModule",{value:!0});Po.default=void 0;var Qt=nS(tS);function nS(e){return e&&e.__esModule?e:{default:e}}function rS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oS={ROOT:function(t){return(0,Qt.default)(rS({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,Qt.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,Qt.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,Qt.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,Qt.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,Qt.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,Qt.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,Qt.default)({dot:!0,selected:t})}};Po.default=oS;var Eo={},Ss={};Object.defineProperty(Ss,"__esModule",{value:!0});Ss.outerWidth=void 0;var iS=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};Ss.outerWidth=iS;var yr={};Object.defineProperty(yr,"__esModule",{value:!0});yr.default=void 0;var sS=function(t,n,r){var o=t===0?t:t+n,i=r==="horizontal"?[o,0,0]:[0,o,0],a="translate3d",l="("+i.join(",")+")";return a+l};yr.default=sS;var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0});Bo.default=void 0;var aS=function(){return window};Bo.default=aS;Object.defineProperty(Eo,"__esModule",{value:!0});Eo.default=void 0;var ut=uS(C),Sn=ws(Po),lS=Ss,ad=ws(yr),cS=ws(_c),Zo=ws(Bo);function ws(e){return e&&e.__esModule?e:{default:e}}function ym(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return ym=function(){return e},e}function uS(e){if(e&&e.__esModule)return e;if(e===null||Xr(e)!=="object"&&typeof e!="function")return{default:e};var t=ym();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Xr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xr=function(n){return typeof n}:Xr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xr(e)}function ml(){return ml=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(this,arguments)}function dS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fS(e,t,n){return t&&pS(e.prototype,t),e}function mS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&hl(e,t)}function hl(e,t){return hl=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},hl(e,t)}function hS(e){var t=vS();return function(){var r=Gi(e),o;if(t){var i=Gi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return gS(this,o)}}function gS(e,t){return t&&(Xr(t)==="object"||typeof t=="function")?t:$e(e)}function $e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Gi(e){return Gi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Gi(e)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xS=function(t){return t.hasOwnProperty("key")},Sc=function(e){mS(n,e);var t=hS(n);function n(r){var o;return dS(this,n),o=t.call(this,r),be($e(o),"itemsWrapperRef",void 0),be($e(o),"itemsListRef",void 0),be($e(o),"thumbsRef",void 0),be($e(o),"setItemsWrapperRef",function(i){o.itemsWrapperRef=i}),be($e(o),"setItemsListRef",function(i){o.itemsListRef=i}),be($e(o),"setThumbsRef",function(i,a){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[a]=i}),be($e(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var i=ut.Children.count(o.props.children),a=o.itemsWrapperRef.clientWidth,l=o.props.thumbWidth?o.props.thumbWidth:(0,lS.outerWidth)(o.thumbsRef[0]),c=Math.floor(a/l),u=c<i,d=u?i-c:0;o.setState(function(f,m){return{itemSize:l,visibleItems:c,firstItem:u?o.getFirstItem(m.selectedItem):0,lastPosition:d,showArrows:u}})}}),be($e(o),"handleClickItem",function(i,a,l){if(!xS(l)||l.key==="Enter"){var c=o.props.onSelectItem;typeof c=="function"&&c(i,a)}}),be($e(o),"onSwipeStart",function(){o.setState({swiping:!0})}),be($e(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),be($e(o),"onSwipeMove",function(i){var a=i.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var l=0,c=ut.Children.count(o.props.children),u=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(c-o.state.visibleItems,0),f=-d*100/o.state.visibleItems;u===l&&a>0&&(a=0),u===f&&a<0&&(a=0);var m=o.itemsWrapperRef.clientWidth,v=u+100/(m/a);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(x){o.itemsListRef.style[x]=(0,ad.default)(v,"%",o.props.axis)}),!0}),be($e(o),"slideRight",function(i){o.moveTo(o.state.firstItem-(typeof i=="number"?i:1))}),be($e(o),"slideLeft",function(i){o.moveTo(o.state.firstItem+(typeof i=="number"?i:1))}),be($e(o),"moveTo",function(i){i=i<0?0:i,i=i>=o.state.lastPosition?o.state.lastPosition:i,o.setState({firstItem:i})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return fS(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Zo.default)().addEventListener("resize",this.updateSizes),(0,Zo.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Zo.default)().removeEventListener("resize",this.updateSizes),(0,Zo.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var i=o;return o>=this.state.lastPosition&&(i=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),o<this.state.firstItem&&(i=o),i}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(i,a){var l=Sn.default.ITEM(!1,a===o.state.selectedItem),c={key:a,ref:function(d){return o.setThumbsRef(d,a)},className:l,onClick:o.handleClickItem.bind(o,a,o.props.children[a]),onKeyDown:o.handleClickItem.bind(o,a,o.props.children[a]),"aria-label":"".concat(o.props.labels.item," ").concat(a+1),style:{width:o.props.thumbWidth}};return ut.default.createElement("li",ml({},c,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var i=ut.Children.count(this.props.children)>1,a=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},u=-this.state.firstItem*(this.state.itemSize||0),d=(0,ad.default)(u,"px",this.props.axis),f=this.props.transitionTime+"ms";return c={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f},ut.default.createElement("div",{className:Sn.default.CAROUSEL(!1)},ut.default.createElement("div",{className:Sn.default.WRAPPER(!1),ref:this.setItemsWrapperRef},ut.default.createElement("button",{type:"button",className:Sn.default.ARROW_PREV(!a),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),i?ut.default.createElement(cS.default,{tagName:"ul",className:Sn.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):ut.default.createElement("ul",{className:Sn.default.SLIDER(!1,this.state.swiping),ref:function(v){return o.setItemsListRef(v)},style:c},this.renderItems()),ut.default.createElement("button",{type:"button",className:Sn.default.ARROW_NEXT(!l),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(ut.Component);Eo.default=Sc;be(Sc,"displayName","Thumbs");be(Sc,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var Cs={};Object.defineProperty(Cs,"__esModule",{value:!0});Cs.default=void 0;var yS=function(){return document};Cs.default=yS;var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});Xe.setPosition=Xe.getPosition=Xe.isKeyboardEvent=Xe.defaultStatusFormatter=Xe.noop=void 0;var _S=C,SS=wS(yr);function wS(e){return e&&e.__esModule?e:{default:e}}var CS=function(){};Xe.noop=CS;var jS=function(t,n){return"".concat(t," of ").concat(n)};Xe.defaultStatusFormatter=jS;var NS=function(t){return t?t.hasOwnProperty("key"):!1};Xe.isKeyboardEvent=NS;var bS=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=_S.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,i=r-1;return t&&(t!==i||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===i&&(o+=100-n.centerSlidePercentage),o}return-t*100};Xe.getPosition=bS;var kS=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,SS.default)(t,"%",n)}),r};Xe.setPosition=kS;var Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});Nt.fadeAnimationHandler=Nt.slideStopSwipingHandler=Nt.slideSwipeAnimationHandler=Nt.slideAnimationHandler=void 0;var _m=C,PS=ES(yr),bt=Xe;function ES(e){return e&&e.__esModule?e:{default:e}}function ld(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ld(Object(n),!0).forEach(function(r){BS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ld(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var TS=function(t,n){var r={},o=n.selectedItem,i=o,a=_m.Children.count(t.children)-1,l=t.infiniteLoop&&(o<0||o>a);if(l)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,bt.setPosition)(-(a+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,bt.setPosition)(-(a+2)*100,t.axis):i>a&&(r.itemListStyle=(0,bt.setPosition)(0,t.axis)),r;var c=(0,bt.getPosition)(o,t),u=(0,PS.default)(c,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=jn(jn({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};Nt.slideAnimationHandler=TS;var LS=function(t,n,r,o){var i={},a=n.axis==="horizontal",l=_m.Children.count(n.children),c=0,u=(0,bt.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,bt.getPosition)(l-1,n)-100:(0,bt.getPosition)(l-1,n),f=a?t.x:t.y,m=f;u===c&&f>0&&(m=0),u===d&&f<0&&(m=0);var v=u+100/(r.itemSize/m),x=Math.abs(f)>n.swipeScrollTolerance;return n.infiniteLoop&&x&&(r.selectedItem===0&&v>-100?v-=l*100:r.selectedItem===l-1&&v<-l*100&&(v+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||x||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),i.itemListStyle=(0,bt.setPosition)(v,n.axis)),x&&!r.cancelClick&&o({cancelClick:!0}),i};Nt.slideSwipeAnimationHandler=LS;var RS=function(t,n){var r=(0,bt.getPosition)(n.selectedItem,t),o=(0,bt.setPosition)(r,t.axis);return{itemListStyle:o}};Nt.slideStopSwipingHandler=RS;var OS=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(i=jn(jn({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:jn(jn({},i),{},{opacity:1,position:"relative"}),prevStyle:jn({},i)}};Nt.fadeAnimationHandler=OS;Object.defineProperty(_s,"__esModule",{value:!0});_s.default=void 0;var G=IS(C),$S=To(_c),$t=To(Po),MS=To(Eo),ei=To(Cs),ti=To(Bo),zr=Xe,Qi=Nt;function To(e){return e&&e.__esModule?e:{default:e}}function Sm(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Sm=function(){return e},e}function IS(e){if(e&&e.__esModule)return e;if(e===null||Kr(e)!=="object"&&typeof e!="function")return{default:e};var t=Sm();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Kr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kr=function(n){return typeof n}:Kr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kr(e)}function gl(){return gl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}function cd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cd(Object(n),!0).forEach(function(r){$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function AS(e,t,n){return t&&zS(e.prototype,t),e}function DS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&vl(e,t)}function vl(e,t){return vl=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},vl(e,t)}function US(e){var t=WS();return function(){var r=Xi(e),o;if(t){var i=Xi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return HS(this,o)}}function HS(e,t){return t&&(Kr(t)==="object"||typeof t=="function")?t:z(e)}function z(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Xi(e){return Xi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Xi(e)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var wc=function(e){DS(n,e);var t=US(n);function n(r){var o;FS(this,n),o=t.call(this,r),$(z(o),"thumbsRef",void 0),$(z(o),"carouselWrapperRef",void 0),$(z(o),"listRef",void 0),$(z(o),"itemsRef",void 0),$(z(o),"timer",void 0),$(z(o),"animationHandler",void 0),$(z(o),"setThumbsRef",function(a){o.thumbsRef=a}),$(z(o),"setCarouselWrapperRef",function(a){o.carouselWrapperRef=a}),$(z(o),"setListRef",function(a){o.listRef=a}),$(z(o),"setItemsRef",function(a,l){o.itemsRef||(o.itemsRef=[]),o.itemsRef[l]=a}),$(z(o),"autoPlay",function(){G.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),$(z(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),$(z(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),$(z(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),$(z(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),$(z(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,ei.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,ei.default)().activeElement)):!1}),$(z(o),"navigateWithKeyboard",function(a){if(o.isFocusWithinTheCarousel()){var l=o.props.axis,c=l==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=c?u.ArrowRight:u.ArrowDown,f=c?u.ArrowLeft:u.ArrowUp;d===a.keyCode?o.increment():f===a.keyCode&&o.decrement()}}),$(z(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var a=o.props.axis==="horizontal",l=o.itemsRef[0];if(l){var c=a?l.clientWidth:l.clientHeight;o.setState({itemSize:c}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),$(z(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),$(z(o),"handleClickItem",function(a,l){if(G.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(a,l),a!==o.state.selectedItem&&o.setState({selectedItem:a})}}),$(z(o),"handleOnChange",function(a,l){G.Children.count(o.props.children)<=1||o.props.onChange(a,l)}),$(z(o),"handleClickThumb",function(a,l){o.props.onClickThumb(a,l),o.moveTo(a)}),$(z(o),"onSwipeStart",function(a){o.setState({swiping:!0}),o.props.onSwipeStart(a)}),$(z(o),"onSwipeEnd",function(a){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(a),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),$(z(o),"onSwipeMove",function(a,l){o.props.onSwipeMove(l);var c=o.props.swipeAnimationHandler(a,o.props,o.state,o.setState.bind(z(o)));return o.setState(dt({},c)),!!Object.keys(c).length}),$(z(o),"decrement",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof a=="number"?a:1))}),$(z(o),"increment",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof a=="number"?a:1))}),$(z(o),"moveTo",function(a){if(typeof a=="number"){var l=G.Children.count(o.props.children)-1;a<0&&(a=o.props.infiniteLoop?l:0),a>l&&(a=o.props.infiniteLoop?0:l),o.selectItem({selectedItem:a}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),$(z(o),"onClickNext",function(){o.increment(1)}),$(z(o),"onClickPrev",function(){o.decrement(1)}),$(z(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),$(z(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),$(z(o),"changeItem",function(a){return function(l){(!(0,zr.isKeyboardEvent)(l)||l.key==="Enter")&&o.moveTo(a)}}),$(z(o),"selectItem",function(a){o.setState(dt({previousItem:o.state.selectedItem},a),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(a.selectedItem,G.Children.toArray(o.props.children)[a.selectedItem])}),$(z(o),"getInitialImage",function(){var a=o.props.selectedItem,l=o.itemsRef&&o.itemsRef[a],c=l&&l.getElementsByTagName("img")||[];return c[0]}),$(z(o),"getVariableItemHeight",function(a){var l=o.itemsRef&&o.itemsRef[a];if(o.state.hasMount&&l&&l.children.length){var c=l.children[0].getElementsByTagName("img")||[];if(c.length>0){var u=c[0];if(!u.complete){var d=function v(){o.forceUpdate(),u.removeEventListener("load",v)};u.addEventListener("load",d)}}var f=c[0]||l.children[0],m=f.clientHeight;return m>0?m:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Qi.fadeAnimationHandler||Qi.slideAnimationHandler,o.state=dt(dt({},i),o.animationHandler(r,i)),o}return AS(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,i){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(dt({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&G.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=o.getInitialImage();i&&!i.complete?i.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,ti.default)().addEventListener("resize",this.updateSizes),(0,ti.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,ei.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,ti.default)().removeEventListener("resize",this.updateSizes),(0,ti.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,ei.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var i=this;return this.props.children?G.Children.map(this.props.children,function(a,l){var c=l===i.state.selectedItem,u=l===i.state.previousItem,d=c&&i.state.selectedStyle||u&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(d=dt(dt({},d),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(d=dt(dt({},d),{},{pointerEvents:"none"}));var f={ref:function(v){return i.setItemsRef(v,l)},key:"itemKey"+l+(o?"clone":""),className:$t.default.ITEM(!0,l===i.state.selectedItem,l===i.state.previousItem),onClick:i.handleClickItem.bind(i,l,a),style:d};return G.default.createElement("li",f,i.props.renderItem(a,{isSelected:l===i.state.selectedItem,isPrevious:l===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,i=this.props,a=i.showIndicators,l=i.labels,c=i.renderIndicator,u=i.children;return a?G.default.createElement("ul",{className:"control-dots"},G.Children.map(u,function(d,f){return c&&c(o.changeItem(f),f===o.state.selectedItem,f,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?G.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,G.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||G.Children.count(this.props.children)===0?null:G.default.createElement(MS.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||G.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&G.Children.count(this.props.children)>1,a=this.props.axis==="horizontal",l=this.props.showArrows&&G.Children.count(this.props.children)>1,c=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=l&&(this.state.selectedItem<G.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),f=d.shift(),m=d.pop(),v={className:$t.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},x={};if(a){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var y=this.getVariableItemHeight(this.state.selectedItem);x.height=y||"auto"}}else v.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,v.style=dt(dt({},v.style),{},{height:this.state.itemSize}),x.height=this.state.itemSize;return G.default.createElement("div",{"aria-label":this.props.ariaLabel,className:$t.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},G.default.createElement("div",{className:$t.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),G.default.createElement("div",{className:$t.default.WRAPPER(!0,this.props.axis),style:x},i?G.default.createElement($S.default,gl({tagName:"ul",innerRef:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&f):G.default.createElement("ul",{className:$t.default.SLIDER(!0,this.state.swiping),ref:function(g){return o.setListRef(g)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&f)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(G.default.Component);_s.default=wc;$(wc,"displayName","Carousel");$(wc,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:zr.noop,onClickThumb:zr.noop,onChange:zr.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return G.default.createElement("button",{type:"button","aria-label":r,className:$t.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return G.default.createElement("button",{type:"button","aria-label":r,className:$t.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return G.default.createElement("li",{className:$t.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=G.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=G.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:zr.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Qi.slideSwipeAnimationHandler,stopSwipingHandler:Qi.slideStopSwipingHandler});var qS={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(_s),n=qS,r=o(Eo);function o(i){return i&&i.__esModule?i:{default:i}}})(ys);const VS="_aboutPage1Container_14rn1_1",GS="_pageContent_14rn1_6",QS="_heroSection_14rn1_10",XS="_carouselSection_14rn1_28",KS="_missionSection_14rn1_32",JS="_largeImage_14rn1_49",YS="_teamSection_14rn1_55",ZS="_teamMembers_14rn1_67",ew="_teamMember_14rn1_67",tw="_valuesSection_14rn1_89",nw="_valueBoxes_14rn1_107",rw="_valueBox_14rn1_107",ow="_contactSection_14rn1_132",iw="_contactDetails_14rn1_145",sw="_toggleContainer_14rn1_150",aw="_toggleButton_14rn1_156",lw="_active_14rn1_165",cw="_codeContainer_14rn1_170",uw="_copyButton_14rn1_180",dw="_copied_14rn1_192",pw="_codeBox_14rn1_196",W={aboutPage1Container:VS,pageContent:GS,heroSection:QS,carouselSection:XS,missionSection:KS,largeImage:JS,teamSection:YS,teamMembers:ZS,teamMember:ew,valuesSection:tw,valueBoxes:nw,valueBox:rw,contactSection:ow,contactDetails:iw,toggleContainer:sw,toggleButton:aw,active:lw,codeContainer:cw,copyButton:uw,copied:dw,codeBox:pw},fw=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:W.aboutPage1Container,children:[s.jsxs("div",{className:W.pageContent,children:[s.jsxs("section",{className:W.heroSection,children:[s.jsx("h1",{children:"About Us"}),s.jsx("p",{children:"Learn more about our company, our mission, and our team."})]}),s.jsx("section",{className:W.carouselSection,children:s.jsxs(ys.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 1"}),s.jsx("p",{className:"legend",children:"Legend 1"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 2"}),s.jsx("p",{className:"legend",children:"Legend 2"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 3"}),s.jsx("p",{className:"legend",children:"Legend 3"})]})]})}),s.jsxs("section",{className:W.missionSection,children:[s.jsx("h2",{children:"Our Mission"}),s.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:W.largeImage})]}),s.jsxs("section",{className:W.teamSection,children:[s.jsx("h2",{children:"Meet Our Team"}),s.jsxs("div",{className:W.teamMembers,children:[s.jsxs("div",{className:W.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:W.teamImage}),s.jsx("h3",{children:"John Doe"}),s.jsx("p",{children:"CEO"})]}),s.jsxs("div",{className:W.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:W.teamImage}),s.jsx("h3",{children:"Jane Smith"}),s.jsx("p",{children:"CTO"})]}),s.jsxs("div",{className:W.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:W.teamImage}),s.jsx("h3",{children:"Mike Johnson"}),s.jsx("p",{children:"CFO"})]})]})]}),s.jsxs("section",{className:W.valuesSection,children:[s.jsx("h2",{children:"Our Values"}),s.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),s.jsxs("div",{className:W.valueBoxes,children:[s.jsxs("div",{className:W.valueBox,children:[s.jsx("h3",{children:"Integrity"}),s.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),s.jsxs("div",{className:W.valueBox,children:[s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),s.jsxs("div",{className:W.valueBox,children:[s.jsx("h3",{children:"Customer Satisfaction"}),s.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),s.jsxs("section",{className:W.historySection,children:[s.jsx("h2",{children:"Our History"}),s.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:W.largeImage})]}),s.jsxs("section",{className:W.contactSection,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),s.jsxs("div",{className:W.contactDetails,children:[s.jsx("p",{children:"Email: contact@company.com"}),s.jsx("p",{children:"Phone: (123) 456-7890"}),s.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),s.jsxs("div",{className:W.toggleContainer,children:[s.jsx("button",{className:`${W.toggleButton} ${e==="tsx"?W.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${W.toggleButton} ${e==="css"?W.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:W.codeContainer,children:[s.jsx("button",{className:`${W.copyButton} ${n?W.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:W.codeBox,children:l})]})]})},mw="_aboutPage2Container_pnlr8_1",hw="_pageContent_pnlr8_6",gw="_heroSection_pnlr8_10",vw="_carouselSection_pnlr8_28",xw="_valuesSection_pnlr8_32",yw="_valueBoxes_pnlr8_47",_w="_valueBox_pnlr8_47",Sw="_testimonialsSection_pnlr8_72",ww="_testimonials_pnlr8_72",Cw="_testimonial_pnlr8_72",jw="_contactSection_pnlr8_104",Nw="_contactDetails_pnlr8_114",bw="_toggleContainer_pnlr8_119",kw="_toggleButton_pnlr8_125",Pw="_active_pnlr8_134",Ew="_codeContainer_pnlr8_139",Bw="_copyButton_pnlr8_149",Tw="_copied_pnlr8_161",Lw="_codeBox_pnlr8_165",ee={aboutPage2Container:mw,pageContent:hw,heroSection:gw,carouselSection:vw,valuesSection:xw,valueBoxes:yw,valueBox:_w,testimonialsSection:Sw,testimonials:ww,testimonial:Cw,contactSection:jw,contactDetails:Nw,toggleContainer:bw,toggleButton:kw,active:Pw,codeContainer:Ew,copyButton:Bw,copied:Tw,codeBox:Lw},Rw=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:ee.aboutPage2Container,children:[s.jsxs("div",{className:ee.pageContent,children:[s.jsxs("section",{className:ee.heroSection,children:[s.jsx("h1",{children:"Our Team"}),s.jsx("p",{children:"Meet the dedicated team behind our company's success."})]}),s.jsx("section",{className:ee.carouselSection,children:s.jsxs(ys.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 1"}),s.jsx("p",{className:"legend",children:"Team Member 1"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 2"}),s.jsx("p",{className:"legend",children:"Team Member 2"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 3"}),s.jsx("p",{className:"legend",children:"Team Member 3"})]})]})}),s.jsxs("section",{className:ee.valuesSection,children:[s.jsx("h2",{children:"Our Values"}),s.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),s.jsxs("div",{className:ee.valueBoxes,children:[s.jsxs("div",{className:ee.valueBox,children:[s.jsx("h3",{children:"Integrity"}),s.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),s.jsxs("div",{className:ee.valueBox,children:[s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),s.jsxs("div",{className:ee.valueBox,children:[s.jsx("h3",{children:"Customer Satisfaction"}),s.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),s.jsxs("section",{className:ee.testimonialsSection,children:[s.jsx("h2",{children:"Testimonials"}),s.jsxs("div",{className:ee.testimonials,children:[s.jsxs("div",{className:ee.testimonial,children:[s.jsx("p",{children:'"This company is amazing! They really care about their customers."'}),s.jsx("p",{children:"- Happy Customer"})]}),s.jsxs("div",{className:ee.testimonial,children:[s.jsx("p",{children:'"Fantastic team and outstanding service!"'}),s.jsx("p",{children:"- Satisfied Client"})]})]})]}),s.jsxs("section",{className:ee.contactSection,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),s.jsxs("div",{className:ee.contactDetails,children:[s.jsx("p",{children:"Email: contact@company.com"}),s.jsx("p",{children:"Phone: (123) 456-7890"}),s.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),s.jsxs("div",{className:ee.toggleContainer,children:[s.jsx("button",{className:`${ee.toggleButton} ${e==="tsx"?ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${ee.toggleButton} ${e==="css"?ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:ee.codeContainer,children:[s.jsx("button",{className:`${ee.copyButton} ${n?ee.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:ee.codeBox,children:l})]})]})},Ow="_aboutPage3Container_166js_1",$w="_pageContent_166js_6",Mw="_heroSection_166js_10",Iw="_carouselSection_166js_28",Fw="_historySection_166js_32",zw="_largeImage_166js_49",Aw="_missionSection_166js_55",Dw="_teamSection_166js_78",Uw="_teamMembers_166js_90",Hw="_teamMember_166js_90",Ww="_valuesSection_166js_112",qw="_valueBoxes_166js_130",Vw="_valueBox_166js_130",Gw="_contactSection_166js_155",Qw="_contactDetails_166js_168",Xw="_toggleContainer_166js_173",Kw="_toggleButton_166js_179",Jw="_active_166js_188",Yw="_codeContainer_166js_193",Zw="_copyButton_166js_203",eC="_copied_166js_215",tC="_codeBox_166js_219",q={aboutPage3Container:Ow,pageContent:$w,heroSection:Mw,carouselSection:Iw,historySection:Fw,largeImage:zw,missionSection:Aw,teamSection:Dw,teamMembers:Uw,teamMember:Hw,valuesSection:Ww,valueBoxes:qw,valueBox:Vw,contactSection:Gw,contactDetails:Qw,toggleContainer:Xw,toggleButton:Kw,active:Jw,codeContainer:Yw,copyButton:Zw,copied:eC,codeBox:tC},nC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:q.aboutPage3Container,children:[s.jsxs("div",{className:q.pageContent,children:[s.jsxs("section",{className:q.heroSection,children:[s.jsx("h1",{children:"Our Journey"}),s.jsx("p",{children:"Discover the milestones that define our journey."})]}),s.jsx("section",{className:q.carouselSection,children:s.jsxs(ys.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 1"}),s.jsx("p",{className:"legend",children:"Milestone 1"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 2"}),s.jsx("p",{className:"legend",children:"Milestone 2"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 3"}),s.jsx("p",{className:"legend",children:"Milestone 3"})]})]})}),s.jsxs("section",{className:q.historySection,children:[s.jsx("h2",{children:"Our History"}),s.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:q.largeImage})]}),s.jsxs("section",{className:q.missionSection,children:[s.jsx("h2",{children:"Our Mission"}),s.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),s.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:q.largeImage})]}),s.jsxs("section",{className:q.teamSection,children:[s.jsx("h2",{children:"Meet Our Team"}),s.jsxs("div",{className:q.teamMembers,children:[s.jsxs("div",{className:q.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:q.teamImage}),s.jsx("h3",{children:"John Doe"}),s.jsx("p",{children:"CEO"})]}),s.jsxs("div",{className:q.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:q.teamImage}),s.jsx("h3",{children:"Jane Smith"}),s.jsx("p",{children:"CTO"})]}),s.jsxs("div",{className:q.teamMember,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:q.teamImage}),s.jsx("h3",{children:"Mike Johnson"}),s.jsx("p",{children:"CFO"})]})]})]}),s.jsxs("section",{className:q.valuesSection,children:[s.jsx("h2",{children:"Our Values"}),s.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),s.jsxs("div",{className:q.valueBoxes,children:[s.jsxs("div",{className:q.valueBox,children:[s.jsx("h3",{children:"Integrity"}),s.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),s.jsxs("div",{className:q.valueBox,children:[s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),s.jsxs("div",{className:q.valueBox,children:[s.jsx("h3",{children:"Customer Satisfaction"}),s.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),s.jsxs("section",{className:q.contactSection,children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),s.jsxs("div",{className:q.contactDetails,children:[s.jsx("p",{children:"Email: contact@company.com"}),s.jsx("p",{children:"Phone: (123) 456-7890"}),s.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),s.jsxs("div",{className:q.toggleContainer,children:[s.jsx("button",{className:`${q.toggleButton} ${e==="tsx"?q.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${q.toggleButton} ${e==="css"?q.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:q.codeContainer,children:[s.jsx("button",{className:`${q.copyButton} ${n?q.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:q.codeBox,children:l})]})]})},rC="_loginPage1Container_16987_1",oC="_loginForm_16987_6",iC="_formGroup_16987_15",sC="_loginButton_16987_33",aC="_forgotPassword_16987_48",lC="_toggleContainer_16987_61",cC="_toggleButton_16987_67",uC="_active_16987_76",dC="_codeContainer_16987_81",pC="_copyButton_16987_91",fC="_copied_16987_103",mC="_codeBox_16987_107",Ee={loginPage1Container:rC,loginForm:oC,formGroup:iC,loginButton:sC,forgotPassword:aC,toggleContainer:lC,toggleButton:cC,active:uC,codeContainer:dC,copyButton:pC,copied:fC,codeBox:mC},hC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:Ee.loginPage1Container,children:[s.jsx("h1",{children:"Welcome Back!"}),s.jsxs("form",{className:Ee.loginForm,children:[s.jsxs("div",{className:Ee.formGroup,children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),s.jsxs("div",{className:Ee.formGroup,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),s.jsx("button",{type:"submit",className:Ee.loginButton,children:"Login"}),s.jsx("p",{className:Ee.forgotPassword,children:s.jsx("a",{href:"#",children:"Forgot Password?"})})]}),s.jsxs("div",{className:Ee.toggleContainer,children:[s.jsx("button",{className:`${Ee.toggleButton} ${e==="tsx"?Ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${Ee.toggleButton} ${e==="css"?Ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:Ee.codeContainer,children:[s.jsx("button",{className:`${Ee.copyButton} ${n?Ee.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:Ee.codeBox,children:l})]})]})},gC="_loginPage2Container_1iwfr_1",vC="_loginForm_1iwfr_6",xC="_formGroup_1iwfr_15",yC="_loginButton_1iwfr_33",_C="_forgotPassword_1iwfr_48",SC="_toggleContainer_1iwfr_61",wC="_toggleButton_1iwfr_67",CC="_active_1iwfr_76",jC="_codeContainer_1iwfr_81",NC="_copyButton_1iwfr_91",bC="_copied_1iwfr_103",kC="_codeBox_1iwfr_107",Be={loginPage2Container:gC,loginForm:vC,formGroup:xC,loginButton:yC,forgotPassword:_C,toggleContainer:SC,toggleButton:wC,active:CC,codeContainer:jC,copyButton:NC,copied:bC,codeBox:kC},PC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:Be.loginPage2Container,children:[s.jsx("h1",{children:"Login to Your Account"}),s.jsxs("form",{className:Be.loginForm,children:[s.jsxs("div",{className:Be.formGroup,children:[s.jsx("label",{htmlFor:"username",children:"Username"}),s.jsx("input",{type:"text",id:"username",name:"username",required:!0})]}),s.jsxs("div",{className:Be.formGroup,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),s.jsx("button",{type:"submit",className:Be.loginButton,children:"Login"}),s.jsx("p",{className:Be.forgotPassword,children:s.jsx("a",{href:"#",children:"Forgot Password?"})})]}),s.jsxs("div",{className:Be.toggleContainer,children:[s.jsx("button",{className:`${Be.toggleButton} ${e==="tsx"?Be.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${Be.toggleButton} ${e==="css"?Be.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:Be.codeContainer,children:[s.jsx("button",{className:`${Be.copyButton} ${n?Be.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:Be.codeBox,children:l})]})]})},EC="_loginPage3Container_1lt4l_1",BC="_loginForm_1lt4l_6",TC="_formGroup_1lt4l_15",LC="_loginButton_1lt4l_33",RC="_forgotPassword_1lt4l_48",OC="_toggleContainer_1lt4l_61",$C="_toggleButton_1lt4l_67",MC="_active_1lt4l_76",IC="_codeContainer_1lt4l_81",FC="_copyButton_1lt4l_91",zC="_copied_1lt4l_103",AC="_codeBox_1lt4l_107",Te={loginPage3Container:EC,loginForm:BC,formGroup:TC,loginButton:LC,forgotPassword:RC,toggleContainer:OC,toggleButton:$C,active:MC,codeContainer:IC,copyButton:FC,copied:zC,codeBox:AC},DC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:i;return s.jsxs("div",{className:Te.loginPage3Container,children:[s.jsx("h1",{children:"Sign In"}),s.jsxs("form",{className:Te.loginForm,children:[s.jsxs("div",{className:Te.formGroup,children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),s.jsxs("div",{className:Te.formGroup,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),s.jsx("button",{type:"submit",className:Te.loginButton,children:"Sign In"}),s.jsx("p",{className:Te.forgotPassword,children:s.jsx("a",{href:"#",children:"Forgot Password?"})})]}),s.jsxs("div",{className:Te.toggleContainer,children:[s.jsx("button",{className:`${Te.toggleButton} ${e==="tsx"?Te.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),s.jsx("button",{className:`${Te.toggleButton} ${e==="css"?Te.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),s.jsxs("div",{className:Te.codeContainer,children:[s.jsx("button",{className:`${Te.copyButton} ${n?Te.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),s.jsx("pre",{className:Te.codeBox,children:l})]})]})},UC="_pricingPageContainer_iekql_1",HC="_mainHeading_iekql_7",WC="_subHeading_iekql_13",qC="_pricingSection_iekql_19",VC="_pricingCard_iekql_27",GC="_pricingCardMain_iekql_36",QC="_planName_iekql_41",XC="_planPrice_iekql_47",KC="_planFeatures_iekql_53",JC="_planButton_iekql_64",YC="_toggleContainer_iekql_77",ZC="_toggleButton_iekql_84",ej="_active_iekql_94",tj="_codeContainer_iekql_99",nj="_copyButton_iekql_109",V={pricingPageContainer:UC,mainHeading:HC,subHeading:WC,pricingSection:qC,pricingCard:VC,pricingCardMain:GC,planName:QC,planPrice:XC,planFeatures:KC,planButton:JC,toggleContainer:YC,toggleButton:ZC,active:ej,codeContainer:tj,copyButton:nj},rj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
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
`,i=()=>{const a=e?r:o;navigator.clipboard.writeText(a).then(()=>{alert("Code copied to clipboard")})};return s.jsxs("div",{className:V.pricingPageContainer,children:[s.jsx("h1",{className:V.mainHeading,children:"Pricing plans for teams of all sizes"}),s.jsx("p",{className:V.subHeading,children:"Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales."}),s.jsxs("div",{className:V.pricingSection,children:[s.jsxs("div",{className:V.pricingCard,children:[s.jsx("h2",{className:V.planName,children:"Hobby"}),s.jsx("p",{className:V.planPrice,children:"$15/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"5 products"}),s.jsx("li",{children:"Up to 1,000 subscribers"}),s.jsx("li",{children:"Basic analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]}),s.jsxs("div",{className:`${V.pricingCard} ${V.pricingCardMain}`,children:[s.jsx("h2",{className:V.planName,children:"Startup"}),s.jsx("p",{className:V.planPrice,children:"$60/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"25 products"}),s.jsx("li",{children:"Up to 10,000 subscribers"}),s.jsx("li",{children:"Advanced analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]}),s.jsxs("div",{className:V.pricingCard,children:[s.jsx("h2",{className:V.planName,children:"Freelancer"}),s.jsx("p",{className:V.planPrice,children:"$30/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"5 products"}),s.jsx("li",{children:"Up to 1,000 subscribers"}),s.jsx("li",{children:"Basic analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]}),s.jsxs("div",{className:V.pricingCard,children:[s.jsx("h2",{className:V.planName,children:"Enterprise"}),s.jsx("p",{className:V.planPrice,children:"$90/month"}),s.jsxs("ul",{className:V.planFeatures,children:[s.jsx("li",{children:"Unlimited products"}),s.jsx("li",{children:"Unlimited subscribers"}),s.jsx("li",{children:"Advanced analytics"})]}),s.jsx("button",{className:V.planButton,children:"Buy plan"})]})]}),s.jsxs("div",{className:V.toggleContainer,children:[s.jsx("button",{className:`${V.toggleButton} ${e?V.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${V.toggleButton} ${e?"":V.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:V.codeContainer,children:[s.jsx("pre",{children:e?r:o}),s.jsx("button",{className:V.copyButton,onClick:i,children:"Copy"})]})]})},oj="_pricingPageContainer_iekql_1",ij="_mainHeading_iekql_7",sj="_subHeading_iekql_13",aj="_pricingSection_iekql_19",lj="_pricingCard_iekql_27",cj="_pricingCardMain_iekql_36",uj="_planName_iekql_41",dj="_planPrice_iekql_47",pj="_planFeatures_iekql_53",fj="_planButton_iekql_64",mj="_toggleContainer_iekql_77",hj="_toggleButton_iekql_84",gj="_active_iekql_94",vj="_codeContainer_iekql_99",xj="_copyButton_iekql_109",X={pricingPageContainer:oj,mainHeading:ij,subHeading:sj,pricingSection:aj,pricingCard:lj,pricingCardMain:cj,planName:uj,planPrice:dj,planFeatures:pj,planButton:fj,toggleContainer:mj,toggleButton:hj,active:gj,codeContainer:vj,copyButton:xj},yj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
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
`,i=()=>{const a=e?r:o;navigator.clipboard.writeText(a).then(()=>{alert("Code copied to clipboard")})};return s.jsxs("div",{className:X.pricingPageContainer,children:[s.jsx("h1",{className:X.mainHeading,children:"Simple pricing, no commitment"}),s.jsx("p",{className:X.subHeading,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus."}),s.jsxs("div",{className:X.pricingSection,children:[s.jsxs("div",{className:X.pricingCard,children:[s.jsx("h2",{className:X.planName,children:"Starter"}),s.jsx("p",{className:X.planPrice,children:"$15 USD"}),s.jsxs("ul",{className:X.planFeatures,children:[s.jsx("li",{children:"Basic invoicing"}),s.jsx("li",{children:"Easy to use accounting"}),s.jsx("li",{children:"Multi-accounts"})]}),s.jsx("button",{className:X.planButton,children:"Buy this plan"})]}),s.jsxs("div",{className:`${X.pricingCard} ${X.pricingCardMain}`,children:[s.jsx("h2",{className:X.planName,children:"Scale"}),s.jsx("p",{className:X.planPrice,children:"$60 USD"}),s.jsxs("ul",{className:X.planFeatures,children:[s.jsx("li",{children:"Advanced invoicing"}),s.jsx("li",{children:"Easy to use accounting"}),s.jsx("li",{children:"Multi-accounts"}),s.jsx("li",{children:"Tax planning toolkit"}),s.jsx("li",{children:"VAT & VATMOSS filing"}),s.jsx("li",{children:"Free bank transfers"})]}),s.jsx("button",{className:X.planButton,children:"Buy this plan"})]}),s.jsxs("div",{className:X.pricingCard,children:[s.jsx("h2",{className:X.planName,children:"Growth"}),s.jsx("p",{className:X.planPrice,children:"$30 USD"}),s.jsxs("ul",{className:X.planFeatures,children:[s.jsx("li",{children:"Basic invoicing"}),s.jsx("li",{children:"Easy to use accounting"}),s.jsx("li",{children:"Multi-accounts"})]}),s.jsx("button",{className:X.planButton,children:"Buy this plan"})]})]}),s.jsxs("div",{className:X.toggleContainer,children:[s.jsx("button",{className:`${X.toggleButton} ${e?X.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${X.toggleButton} ${e?"":X.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:X.codeContainer,children:[s.jsx("pre",{children:e?r:o}),s.jsx("button",{className:X.copyButton,onClick:i,children:"Copy"})]})]})},_j="_featureSectionContainer_9lpqm_1",Sj="_textContainer_9lpqm_8",wj="_cards_9lpqm_24",Cj="_card_9lpqm_24",jj="_icon_9lpqm_37",Nj="_codeToggle_9lpqm_61",bj="_toggleButton_9lpqm_67",kj="_active_9lpqm_77",Pj="_codeSection_9lpqm_82",Ej="_copyButton_9lpqm_93",je={featureSectionContainer:_j,textContainer:Sj,cards:wj,card:Cj,icon:jj,codeToggle:Nj,toggleButton:bj,active:kj,codeSection:Pj,copyButton:Ej},Bj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
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
  `;return s.jsxs("div",{className:je.featureSectionContainer,children:[s.jsxs("div",{className:je.textContainer,children:[s.jsx("h1",{children:"Stay on top of customer support"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}),s.jsxs("div",{className:je.cards,children:[s.jsxs("div",{className:je.card,children:[s.jsx("div",{className:je.icon,children:"📧"}),s.jsx("h2",{children:"Unlimited inboxes"}),s.jsx("p",{children:"Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequuntur dolores incidunt."}),s.jsx("a",{href:"/",children:"Learn more →"})]}),s.jsxs("div",{className:je.card,children:[s.jsx("div",{className:je.icon,children:"👥"}),s.jsx("h2",{children:"Manage team members"}),s.jsx("p",{children:"Vero eum voluptatem aliquid nostrum voluptates. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus."}),s.jsx("a",{href:"/",children:"Learn more →"})]}),s.jsxs("div",{className:je.card,children:[s.jsx("div",{className:je.icon,children:"🗑"}),s.jsx("h2",{children:"Spam report"}),s.jsx("p",{children:"Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit."}),s.jsx("a",{href:"/",children:"Learn more →"})]})]})]}),s.jsxs("div",{className:je.codeToggle,children:[s.jsx("button",{className:`${je.toggleButton} ${e?je.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${je.toggleButton} ${e?"":je.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:je.codeSection,children:[s.jsx("pre",{children:e?r:o}),s.jsx("button",{className:je.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"})]})]})},Tj="_featureSectionContainer_1nm7x_1",Lj="_textContainer_1nm7x_9",Rj="_features_1nm7x_28",Oj="_icon_1nm7x_39",$j="_imageContainer_1nm7x_44",Mj="_codeSection_1nm7x_54",Ij="_toggleButtons_1nm7x_58",Fj="_toggleButton_1nm7x_58",zj="_active_1nm7x_74",Aj="_codeContainer_1nm7x_79",Dj="_copyButton_1nm7x_91",Le={featureSectionContainer:Tj,textContainer:Lj,features:Rj,icon:Oj,imageContainer:$j,codeSection:Mj,toggleButtons:Ij,toggleButton:Fj,active:zj,codeContainer:Aj,copyButton:Dj},Uj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
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
`;return s.jsxs("div",{children:[s.jsxs("div",{className:Le.featureSectionContainer,children:[s.jsxs("div",{className:Le.textContainer,children:[s.jsx("h1",{children:"Deploy faster"}),s.jsx("h2",{children:"A better workflow"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}),s.jsxs("ul",{className:Le.features,children:[s.jsxs("li",{children:[s.jsx("div",{className:Le.icon,children:"🚀"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Push to deploy"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:Le.icon,children:"🔒"}),s.jsxs("div",{children:[s.jsx("h3",{children:"SSL certificates"}),s.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:Le.icon,children:"💾"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Database backups"}),s.jsx("p",{children:"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."})]})]})]})]}),s.jsx("div",{className:Le.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Example"})})]}),s.jsxs("div",{className:Le.codeSection,children:[s.jsxs("div",{className:Le.toggleButtons,children:[s.jsx("button",{className:`${Le.toggleButton} ${e?Le.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${Le.toggleButton} ${e?"":Le.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:Le.codeContainer,children:[s.jsx("button",{className:Le.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),s.jsx("pre",{children:s.jsx("code",{children:e?r:o})})]})]})]})},Hj="_featureSectionContainer_5fr9w_1",Wj="_textContainer_5fr9w_9",qj="_features_5fr9w_34",Vj="_imageContainer_5fr9w_59",Gj="_codeSection_5fr9w_70",Qj="_toggleButtons_5fr9w_74",Xj="_toggleButton_5fr9w_74",Kj="_active_5fr9w_90",Jj="_codeContainer_5fr9w_95",Yj="_copyButton_5fr9w_107",tt={featureSectionContainer:Hj,textContainer:Wj,features:qj,imageContainer:Vj,codeSection:Gj,toggleButtons:Qj,toggleButton:Xj,active:Kj,codeContainer:Jj,copyButton:Yj},Zj=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)},r=`
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
`;return s.jsxs("div",{children:[s.jsxs("div",{className:tt.featureSectionContainer,children:[s.jsxs("div",{className:tt.textContainer,children:[s.jsx("h2",{children:"Everything you need"}),s.jsx("h1",{children:"All-in-one platform"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}),s.jsxs("ul",{className:tt.features,children:[s.jsx("li",{children:"Invite team members"}),s.jsx("li",{children:"Keyboard shortcuts"}),s.jsx("li",{children:"Notifications"}),s.jsx("li",{children:"Reporting"}),s.jsx("li",{children:"List view"}),s.jsx("li",{children:"Calendars"}),s.jsx("li",{children:"Boards"}),s.jsx("li",{children:"Mobile app"})]})]}),s.jsx("div",{className:tt.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Example"})})]}),s.jsxs("div",{className:tt.codeSection,children:[s.jsxs("div",{className:tt.toggleButtons,children:[s.jsx("button",{className:`${tt.toggleButton} ${e?tt.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${tt.toggleButton} ${e?"":tt.active}`,onClick:n,children:"CSS"})]}),s.jsxs("div",{className:tt.codeContainer,children:[s.jsx("button",{className:tt.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),s.jsx("pre",{children:s.jsx("code",{children:e?r:o})})]})]})]})},e2="_ctaSection_uqicq_1",t2="_textContainer_uqicq_10",n2="_buttons_uqicq_29",r2="_primaryButton_uqicq_34",o2="_secondaryButton_uqicq_42",i2="_imageContainer_uqicq_50",s2="_codeSection_uqicq_58",a2="_codeHeader_uqicq_66",l2="_toggleButtons_uqicq_73",c2="_toggleButton_uqicq_73",u2="_active_uqicq_87",d2="_codeBlock_uqicq_91",p2="_copyButton_uqicq_99",Re={ctaSection:e2,textContainer:t2,buttons:n2,primaryButton:r2,secondaryButton:o2,imageContainer:i2,codeSection:s2,codeHeader:a2,toggleButtons:l2,toggleButton:c2,active:u2,codeBlock:d2,copyButton:p2},f2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{t(!e)},i=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`import React from 'react';
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
`;return s.jsxs("div",{children:[s.jsxs("div",{className:Re.ctaSection,children:[s.jsxs("div",{className:Re.textContainer,children:[s.jsx("h1",{children:"Boost your productivity."}),s.jsx("h2",{children:"Start using our app today."}),s.jsx("p",{children:"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."}),s.jsxs("div",{className:Re.buttons,children:[s.jsx("button",{className:Re.primaryButton,children:"Get started"}),s.jsx("button",{className:Re.secondaryButton,children:"Learn more"})]})]}),s.jsx("div",{className:Re.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/400x400",alt:"Productivity"})})]}),s.jsxs("div",{className:Re.codeSection,children:[s.jsxs("div",{className:Re.codeHeader,children:[s.jsxs("div",{className:Re.toggleButtons,children:[s.jsx("button",{className:`${Re.toggleButton} ${e?Re.active:""}`,onClick:o,children:"TSX"}),s.jsx("button",{className:`${Re.toggleButton} ${e?"":Re.active}`,onClick:o,children:"CSS"})]}),s.jsx("button",{className:Re.copyButton,onClick:i,children:n?"Code copied!":"Copy"})]}),s.jsx("pre",{className:Re.codeBlock,children:s.jsx("code",{children:e?a:l})})]})]})},m2="_ctaSection_1j0um_1",h2="_imageContainer_1j0um_10",g2="_textContainer_1j0um_20",v2="_primaryButton_1j0um_41",x2="_codeSection_1j0um_49",y2="_codeHeader_1j0um_57",_2="_toggleButtons_1j0um_64",S2="_toggleButton_1j0um_64",w2="_active_1j0um_78",C2="_codeBlock_1j0um_82",j2="_copyButton_1j0um_90",Ge={ctaSection:m2,imageContainer:h2,textContainer:g2,primaryButton:v2,codeSection:x2,codeHeader:y2,toggleButtons:_2,toggleButton:S2,active:w2,codeBlock:C2,copyButton:j2},N2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{t(!e)},i=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`import React from 'react';
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
`;return s.jsxs("div",{children:[s.jsxs("div",{className:Ge.ctaSection,children:[s.jsx("div",{className:Ge.imageContainer,children:s.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Support"})}),s.jsxs("div",{className:Ge.textContainer,children:[s.jsx("h3",{children:"Award winning support"}),s.jsx("h1",{children:"We're here to help"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."}),s.jsx("button",{className:Ge.primaryButton,children:"Visit the help center"})]})]}),s.jsxs("div",{className:Ge.codeSection,children:[s.jsxs("div",{className:Ge.codeHeader,children:[s.jsxs("div",{className:Ge.toggleButtons,children:[s.jsx("button",{className:`${Ge.toggleButton} ${e?Ge.active:""}`,onClick:o,children:"TSX"}),s.jsx("button",{className:`${Ge.toggleButton} ${e?"":Ge.active}`,onClick:o,children:"CSS"})]}),s.jsx("button",{className:Ge.copyButton,onClick:i,children:n?"Code copied!":"Copy"})]}),s.jsx("pre",{className:Ge.codeBlock,children:s.jsx("code",{children:e?a:l})})]})]})},b2="_ctaSection_19d2u_1",k2="_content_19d2u_9",P2="_imageContainer_19d2u_24",E2="_primaryButton_19d2u_35",B2="_codeSection_19d2u_44",T2="_toggleButton_19d2u_50",L2="_active_19d2u_58",R2="_codeBox_19d2u_63",O2="_copyButton_19d2u_73",pt={ctaSection:b2,content:k2,imageContainer:P2,primaryButton:E2,codeSection:B2,toggleButton:T2,active:L2,codeBox:R2,copyButton:O2},$2=()=>{const[e,t]=C.useState(!0),n=()=>t(!e),r=`
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
`;return s.jsxs("div",{className:pt.ctaSection,children:[s.jsxs("div",{className:pt.content,children:[s.jsx("h2",{children:"Our people"}),s.jsx("p",{children:"Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas."}),s.jsxs("div",{className:pt.imageContainer,children:[s.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Team"}),s.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Work"}),s.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Play"})]}),s.jsx("button",{className:pt.primaryButton,children:"Join our team"})]}),s.jsxs("div",{className:pt.codeSection,children:[s.jsx("button",{className:`${pt.toggleButton} ${e?pt.active:""}`,onClick:n,children:"TSX"}),s.jsx("button",{className:`${pt.toggleButton} ${e?"":pt.active}`,onClick:n,children:"CSS"}),s.jsxs("pre",{className:pt.codeBox,children:[s.jsx("button",{className:pt.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),s.jsx("code",{children:e?r:o})]})]})]})},M2="_heroSectionDemo_1htu2_1",I2="_nav_1htu2_9",F2="_content_1htu2_27",z2="_primaryButton_1htu2_44",A2="_secondaryButton_1htu2_45",D2="_codeSection_1htu2_74",U2="_toggleButtons_1htu2_83",H2="_toggleButton_1htu2_83",W2="_active_1htu2_103",q2="_codeContainer_1htu2_107",V2="_code_1htu2_74",G2="_copyButton_1htu2_119",Q2="_copySuccess_1htu2_135",Oe={heroSectionDemo:M2,nav:I2,content:F2,primaryButton:z2,secondaryButton:A2,codeSection:D2,toggleButtons:U2,toggleButton:H2,active:W2,codeContainer:q2,code:V2,copyButton:G2,copySuccess:Q2},X2=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{t(!e)},i=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`
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
  `;return s.jsxs("div",{children:[s.jsxs("div",{className:Oe.heroSectionDemo,children:[s.jsxs("nav",{className:Oe.nav,children:[s.jsx("a",{href:"#",children:"Product"}),s.jsx("a",{href:"#",children:"Features"}),s.jsx("a",{href:"#",children:"Marketplace"}),s.jsx("a",{href:"#",children:"Company"}),s.jsx("a",{href:"#",children:"Log in"})]}),s.jsxs("div",{className:Oe.content,children:[s.jsx("h1",{children:"Data to enrich your online business"}),s.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),s.jsx("button",{className:Oe.primaryButton,children:"Get started"}),s.jsx("button",{className:Oe.secondaryButton,children:"Learn more"})]})]}),s.jsxs("div",{className:Oe.codeSection,children:[s.jsxs("div",{className:Oe.toggleButtons,children:[s.jsx("button",{className:`${Oe.toggleButton} ${e?Oe.active:""}`,onClick:o,children:"TSX"}),s.jsx("button",{className:`${Oe.toggleButton} ${e?"":Oe.active}`,onClick:o,children:"CSS"})]}),s.jsxs("div",{className:Oe.codeContainer,children:[s.jsx("pre",{className:Oe.code,children:e?a:l}),s.jsx("button",{className:Oe.copyButton,onClick:i,children:"Copy"}),n&&s.jsx("div",{className:Oe.copySuccess,children:n})]})]})]})},K2="_heroSection_82ka0_1",J2="_textContainer_82ka0_9",Y2="_badge_82ka0_14",Z2="_version_82ka0_24",eN="_buttons_82ka0_42",tN="_primaryButton_82ka0_48",nN="_secondaryButton_82ka0_57",rN="_codeContainer_82ka0_66",oN="_codeHeader_82ka0_75",iN="_toggleButton_82ka0_81",sN="_active_82ka0_91",aN="_codeBlock_82ka0_95",lN="_copyButton_82ka0_104",cN="_copySuccess_82ka0_120",uN="_fadeOut_82ka0_1",Ne={heroSection:K2,textContainer:J2,badge:Y2,version:Z2,buttons:eN,primaryButton:tN,secondaryButton:nN,codeContainer:rN,codeHeader:oN,toggleButton:iN,active:sN,codeBlock:aN,copyButton:lN,copySuccess:cN,fadeOut:uN},dN=()=>{const[e,t]=C.useState(!0),[n,r]=C.useState(""),o=()=>{const l=e?i:a;navigator.clipboard.writeText(l),r("Code Copied!"),setTimeout(()=>r(""),2e3)},i=`
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
`;return s.jsxs("div",{className:Ne.heroSection,children:[s.jsxs("div",{className:Ne.textContainer,children:[s.jsx("div",{className:Ne.badge,children:"What's new"}),s.jsx("div",{className:Ne.version,children:"Just shipped v0.1.0"}),s.jsx("h1",{children:"Supercharge your web applications"}),s.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),s.jsxs("div",{className:Ne.buttons,children:[s.jsx("button",{className:Ne.primaryButton,children:"Documentation"}),s.jsx("button",{className:Ne.secondaryButton,children:"View on GitHub"})]})]}),s.jsxs("div",{className:Ne.codeContainer,children:[s.jsxs("div",{className:Ne.codeHeader,children:[s.jsx("button",{className:`${Ne.toggleButton} ${e?Ne.active:""}`,onClick:()=>t(!0),children:"TSX"}),s.jsx("button",{className:`${Ne.toggleButton} ${e?"":Ne.active}`,onClick:()=>t(!1),children:"CSS"})]}),s.jsx("pre",{className:Ne.codeBlock,children:s.jsx("code",{children:e?i:a})}),s.jsx("button",{className:Ne.copyButton,onClick:o,children:"Copy"}),n&&s.jsx("div",{className:Ne.copySuccess,children:n})]})]})},pN="_navbar_1hs4y_1",fN="_logo_1hs4y_10",mN="_hamburger_1hs4y_17",hN="_navLinks_1hs4y_26",gN="_open_1hs4y_62",Tr={navbar:pN,logo:fN,hamburger:mN,navLinks:hN,open:gN},vN=()=>{const[e,t]=C.useState(!1),n=()=>{t(!e)};return s.jsxs("nav",{className:Tr.navbar,children:[s.jsx("div",{className:Tr.logo,children:s.jsx(L,{to:"/",children:"Wells Fargo"})}),s.jsx("button",{className:Tr.hamburger,onClick:n,children:e?s.jsx("span",{children:"×"}):s.jsx("span",{children:"☰"})}),s.jsxs("ul",{className:`${Tr.navLinks} ${e?Tr.open:""}`,children:[s.jsx("li",{children:s.jsx(L,{to:"/",children:"Home"})}),s.jsx("li",{children:s.jsx(L,{to:"/about",children:"About"})}),s.jsx("li",{children:s.jsx(L,{to:"/services",children:"Services"})}),s.jsx("li",{children:s.jsx(L,{to:"/contact",children:"Contact"})})]})]})},xN="_heroSection_1bob7_1",yN="_heroContent_1bob7_7",_N="_ctaButton_1bob7_25",ca={heroSection:xN,heroContent:yN,ctaButton:_N},SN=()=>s.jsx("section",{className:ca.heroSection,children:s.jsxs("div",{className:ca.heroContent,children:[s.jsx("h1",{children:"Welcome to Our Website"}),s.jsx("a",{href:"#",className:ca.ctaButton,children:"Get Started"})]})}),wN="_featureSection_1yi6k_1",CN="_features_1yi6k_13",jN="_feature_1yi6k_1",Lr={featureSection:wN,features:CN,feature:jN},NN=()=>s.jsxs("section",{className:Lr.featureSection,children:[s.jsx("h2",{children:"Our Features"}),s.jsxs("div",{className:Lr.features,children:[s.jsxs("div",{className:Lr.feature,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 1"}),s.jsx("h3",{children:"Feature One"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),s.jsxs("div",{className:Lr.feature,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 2"}),s.jsx("h3",{children:"Feature Two"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),s.jsxs("div",{className:Lr.feature,children:[s.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 3"}),s.jsx("h3",{children:"Feature Three"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})]}),bN="_testimonialSection_1crso_1",kN="_testimonials_1crso_13",PN="_testimonial_1crso_1",ni={testimonialSection:bN,testimonials:kN,testimonial:PN},EN=()=>s.jsxs("section",{className:ni.testimonialSection,children:[s.jsx("h2",{children:"What Our Clients Say"}),s.jsxs("div",{className:ni.testimonials,children:[s.jsxs("div",{className:ni.testimonial,children:[s.jsx("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu ut nisi commodo sodales."'}),s.jsx("h3",{children:"- John Doe"})]}),s.jsxs("div",{className:ni.testimonial,children:[s.jsx("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu ut nisi commodo sodales."'}),s.jsx("h3",{children:"- Jane Smith"})]})]})]}),BN="_pricingSection_k7f8y_1",TN="_plans_k7f8y_13",LN="_plan_k7f8y_13",RN="_price_k7f8y_36",ON="_ctaButton_k7f8y_54",ft={pricingSection:BN,plans:TN,plan:LN,price:RN,ctaButton:ON},$N=()=>s.jsxs("section",{className:ft.pricingSection,children:[s.jsx("h2",{children:"Pricing Plans"}),s.jsxs("div",{className:ft.plans,children:[s.jsxs("div",{className:ft.plan,children:[s.jsx("h3",{children:"Basic"}),s.jsx("p",{className:ft.price,children:"$19.99/mo"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Feature One"}),s.jsx("li",{children:"Feature Two"}),s.jsx("li",{children:"Feature Three"})]}),s.jsx("a",{href:"#",className:ft.ctaButton,children:"Get Started"})]}),s.jsxs("div",{className:ft.plan,children:[s.jsx("h3",{children:"Pro"}),s.jsx("p",{className:ft.price,children:"$49.99/mo"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Feature One"}),s.jsx("li",{children:"Feature Two"}),s.jsx("li",{children:"Feature Three"})]}),s.jsx("a",{href:"#",className:ft.ctaButton,children:"Get Started"})]}),s.jsxs("div",{className:ft.plan,children:[s.jsx("h3",{children:"Enterprise"}),s.jsx("p",{className:ft.price,children:"$99.99/mo"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Feature One"}),s.jsx("li",{children:"Feature Two"}),s.jsx("li",{children:"Feature Three"})]}),s.jsx("a",{href:"#",className:ft.ctaButton,children:"Get Started"})]})]})]}),MN="_ctaSection_1570w_1",IN="_ctaContent_1570w_8",FN="_ctaButton_1570w_26",ua={ctaSection:MN,ctaContent:IN,ctaButton:FN},zN=()=>s.jsx("section",{className:ua.ctaSection,children:s.jsxs("div",{className:ua.ctaContent,children:[s.jsx("h2",{children:"Join Us Today!"}),s.jsx("p",{children:"Sign up now and get access to exclusive content and features."}),s.jsx("a",{href:"#",className:ua.ctaButton,children:"Sign Up"})]})}),AN="_footer_na1p0_1",DN="_footerContent_na1p0_8",UN="_socialMedia_na1p0_18",HN="_footerLinks_na1p0_18",WN="_copyRight_na1p0_28",Rr={footer:AN,footerContent:DN,socialMedia:UN,footerLinks:HN,copyRight:WN},qN=()=>s.jsxs("footer",{className:Rr.footer,children:[s.jsxs("div",{className:Rr.footerContent,children:[s.jsxs("div",{className:Rr.socialMedia,children:[s.jsx("a",{href:"#",children:"Facebook"}),s.jsx("a",{href:"#",children:"Twitter"}),s.jsx("a",{href:"#",children:"Instagram"})]}),s.jsxs("div",{className:Rr.footerLinks,children:[s.jsx("a",{href:"#",children:"Privacy Policy"}),s.jsx("a",{href:"#",children:"Terms of Service"}),s.jsx("a",{href:"#",children:"Contact Us"})]})]}),s.jsx("p",{className:Rr.copyRight,children:"© 2024 Your Company. All rights reserved."})]}),VN="_carousel_13zr2_1",GN="_carouselContent_13zr2_12",QN="_active_13zr2_26",XN="_navButton_13zr2_30",Or={carousel:VN,carouselContent:GN,active:QN,navButton:XN},KN=()=>{const[e,t]=C.useState(0),n=["https://via.placeholder.com/800x300?text=Slide+1","https://via.placeholder.com/800x300?text=Slide+2","https://via.placeholder.com/800x300?text=Slide+3"],r=()=>{t(i=>(i-1+n.length)%n.length)},o=()=>{t(i=>(i+1)%n.length)};return C.useEffect(()=>{const i=setInterval(()=>{o()},3e3);return()=>clearInterval(i)},[]),s.jsxs("div",{className:Or.carousel,children:[s.jsx("button",{className:Or.navButton,onClick:r,children:"<"}),s.jsx("div",{className:Or.carouselContent,children:n.map((i,a)=>s.jsx("img",{src:i,alt:`Slide ${a+1}`,className:a===e?Or.active:""},a))}),s.jsx("button",{className:Or.navButton,onClick:o,children:">"})]})},JN="_template_7932q_1",YN={template:JN},ZN=()=>s.jsxs("div",{className:YN.template,children:[s.jsx(vN,{}),s.jsx(SN,{}),s.jsx(NN,{}),s.jsx(KN,{}),s.jsx(EN,{}),s.jsx($N,{}),s.jsx(zN,{}),s.jsx(qN,{})]}),eb=()=>s.jsx(fx,{children:s.jsxs(Vv,{children:[s.jsx(mx,{}),s.jsxs(zv,{children:[s.jsx(U,{path:"/",element:s.jsx(Cx,{})}),s.jsx(U,{path:"/components",element:s.jsx(G0,{})}),s.jsx(U,{path:"/utilities",element:s.jsx(Q0,{})}),s.jsx(U,{path:"/documentation",element:s.jsx(X0,{})}),s.jsx(U,{path:"/examples",element:s.jsx(e1,{})}),s.jsx(U,{path:"/signup",element:s.jsx(M_,{})}),s.jsx(U,{path:"/login",element:s.jsx(V_,{})}),s.jsx(U,{path:"/button",element:s.jsx(Vf,{})}),s.jsx(U,{path:"/navbarsection",element:s.jsx(Qf,{})}),s.jsx(U,{path:"/cardsection",element:s.jsx(Gf,{})}),s.jsx(U,{path:"/aboutpage",element:s.jsx(Wf,{})}),s.jsx(U,{path:"/aboutpage1",element:s.jsx(fw,{})}),s.jsx(U,{path:"/aboutpage2",element:s.jsx(Rw,{})}),s.jsx(U,{path:"/aboutpage3",element:s.jsx(nC,{})}),s.jsx(U,{path:"/loginpage",element:s.jsx(qf,{})}),s.jsx(U,{path:"/loginpage1",element:s.jsx(hC,{})}),s.jsx(U,{path:"/loginpage2",element:s.jsx(PC,{})}),s.jsx(U,{path:"/loginpage3",element:s.jsx(DC,{})}),s.jsx(U,{path:"/pricingpage",element:s.jsx(Hf,{})}),s.jsx(U,{path:"/pricingpage1",element:s.jsx(rj,{})}),s.jsx(U,{path:"/pricingpage2",element:s.jsx(yj,{})}),s.jsx(U,{path:"/featuresection",element:s.jsx(Df,{})}),s.jsx(U,{path:"/featuresection1",element:s.jsx(Bj,{})}),s.jsx(U,{path:"/featuresection2",element:s.jsx(Uj,{})}),s.jsx(U,{path:"/featuresection3",element:s.jsx(Zj,{})}),s.jsx(U,{path:"/ctasection",element:s.jsx(Uf,{})}),s.jsx(U,{path:"/ctasection1",element:s.jsx(f2,{})}),s.jsx(U,{path:"/ctasection2",element:s.jsx(N2,{})}),s.jsx(U,{path:"/ctasection3",element:s.jsx($2,{})}),s.jsx(U,{path:"/herosection",element:s.jsx(Af,{})}),s.jsx(U,{path:"/herosection1",element:s.jsx(X2,{})}),s.jsx(U,{path:"/herosection2",element:s.jsx(dN,{})}),s.jsx(U,{path:"/examples/template1",element:s.jsx(ZN,{})})]}),s.jsx(K_,{})]})});da.createRoot(document.getElementById("root")).render(s.jsx(Ft.StrictMode,{children:s.jsx(eb,{})}));
