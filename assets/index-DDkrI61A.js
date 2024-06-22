function sm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},Mi={},Ju={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=Symbol.for("react.element"),am=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),hm=Symbol.for("react.suspense"),gm=Symbol.for("react.memo"),vm=Symbol.for("react.lazy"),ac=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Zu={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Xu}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=ir.prototype;function ta(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Xu}var na=ta.prototype=new ed;na.constructor=ta;Yu(na,ir.prototype);na.isPureReactComponent=!0;var cc=Array.isArray,td=Object.prototype.hasOwnProperty,ra={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)td.call(t,r)&&!nd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:io,type:e,key:i,ref:s,props:o,_owner:ra.current}}function xm(e,t){return{$$typeof:io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===io}function wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uc=/\/+/g;function fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wm(""+e.key):t.toString(36)}function Uo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case io:case am:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+fs(s,0):r,cc(o)?(n="",e!=null&&(n=e.replace(uc,"$&/")+"/"),Uo(o,t,n,"",function(u){return u})):o!=null&&(oa(o)&&(o=xm(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(uc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",cc(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+fs(i,a);s+=Uo(i,t,n,c,o)}else if(c=ym(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+fs(i,a++),s+=Uo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function So(e,t,n){if(e==null)return e;var r=[],o=0;return Uo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Wo={transition:null},_m={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:ra};function od(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ir;z.Fragment=cm;z.Profiler=dm;z.PureComponent=ta;z.StrictMode=um;z.Suspense=hm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;z.act=od;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ra.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)td.call(t,c)&&!nd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:io,type:e.type,key:o,ref:i,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fm,_context:e},e.Consumer=e};z.createElement=rd;z.createFactory=function(e){var t=rd.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:mm,render:e}};z.isValidElement=oa;z.lazy=function(e){return{$$typeof:vm,_payload:{_status:-1,_result:e},_init:Sm}};z.memo=function(e,t){return{$$typeof:gm,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};z.unstable_act=od;z.useCallback=function(e,t){return Me.current.useCallback(e,t)};z.useContext=function(e){return Me.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};z.useEffect=function(e,t){return Me.current.useEffect(e,t)};z.useId=function(){return Me.current.useId()};z.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Me.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};z.useRef=function(e){return Me.current.useRef(e)};z.useState=function(e){return Me.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Me.current.useTransition()};z.version="18.3.1";Ju.exports=z;var C=Ju.exports;const Lt=lm(C),Cm=sm({__proto__:null,default:Lt},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=C,Nm=Symbol.for("react.element"),km=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,Pm=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Em={key:!0,ref:!0,__self:!0,__source:!0};function id(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)bm.call(t,r)&&!Em.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nm,type:e,key:i,ref:s,props:o,_owner:Pm.current}}Mi.Fragment=km;Mi.jsx=id;Mi.jsxs=id;Qu.exports=Mi;var l=Qu.exports,Ks={},sd={exports:{}},Qe={},ld={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var I=L.length;L.push(R);e:for(;0<I;){var se=I-1>>>1,ge=L[se];if(0<o(ge,R))L[se]=R,L[I]=ge,I=se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],I=L.pop();if(I!==R){L[0]=I;e:for(var se=0,ge=L.length,xo=ge>>>1;se<xo;){var un=2*(se+1)-1,ds=L[un],dn=un+1,wo=L[dn];if(0>o(ds,I))dn<ge&&0>o(wo,ds)?(L[se]=wo,L[dn]=I,se=dn):(L[se]=ds,L[un]=I,se=un);else if(dn<ge&&0>o(wo,I))L[se]=wo,L[dn]=I,se=dn;else break e}}return R}function o(L,R){var I=L.sortIndex-R.sortIndex;return I!==0?I:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,p=null,m=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(L){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=L)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function w(L){if(x=!1,h(L),!y)if(n(c)!==null)y=!0,cs(S);else{var R=n(u);R!==null&&us(w,R.startTime-L)}}function S(L,R){y=!1,x&&(x=!1,g(b),b=-1),v=!0;var I=m;try{for(h(R),p=n(c);p!==null&&(!(p.expirationTime>R)||L&&!We());){var se=p.callback;if(typeof se=="function"){p.callback=null,m=p.priorityLevel;var ge=se(p.expirationTime<=R);R=e.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(c)&&r(c),h(R)}else r(c);p=n(c)}if(p!==null)var xo=!0;else{var un=n(u);un!==null&&us(w,un.startTime-R),xo=!1}return xo}finally{p=null,m=I,v=!1}}var k=!1,E=null,b=-1,Q=5,M=-1;function We(){return!(e.unstable_now()-M<Q)}function fr(){if(E!==null){var L=e.unstable_now();M=L;var R=!0;try{R=E(!0,L)}finally{R?pr():(k=!1,E=null)}}else k=!1}var pr;if(typeof f=="function")pr=function(){f(fr)};else if(typeof MessageChannel<"u"){var lc=new MessageChannel,im=lc.port2;lc.port1.onmessage=fr,pr=function(){im.postMessage(null)}}else pr=function(){j(fr,0)};function cs(L){E=L,k||(k=!0,pr())}function us(L,R){b=j(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,cs(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var I=m;m=R;try{return L()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=m;m=L;try{return R()}finally{m=I}},e.unstable_scheduleCallback=function(L,R,I){var se=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=I+ge,L={id:d++,callback:R,priorityLevel:L,startTime:I,expirationTime:ge,sortIndex:-1},I>se?(L.sortIndex=I,t(u,L),n(c)===null&&L===n(u)&&(x?(g(b),b=-1):x=!0,us(w,I-se))):(L.sortIndex=ge,t(c,L),y||v||(y=!0,cs(S))),L},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(L){var R=m;return function(){var I=m;m=R;try{return L.apply(this,arguments)}finally{m=I}}}})(ad);ld.exports=ad;var Tm=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=C,Ke=Tm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,Dr={};function En(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Dr[e]=t,e=0;e<t.length;e++)cd.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=Object.prototype.hasOwnProperty,Om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dc={},fc={};function Rm(e){return Qs.call(fc,e)?!0:Qs.call(dc,e)?!1:Om.test(e)?fc[e]=!0:(dc[e]=!0,!1)}function Bm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mm(e,t,n,r){if(t===null||typeof t>"u"||Bm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ia,sa);_e[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ia,sa);_e[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ia,sa);_e[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function la(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mm(t,n,o,r)&&(n=null),r||o===null?Rm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),Js=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),dd=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),Xs=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),ua=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),pc=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ps;function Cr(e){if(ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||""}return`
`+ps+e}var ms=!1;function hs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Im(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=hs(e.type,!1),e;case 11:return e=hs(e.type.render,!1),e;case 1:return e=hs(e.type,!0),e;default:return""}}function Zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Bn:return"Portal";case Js:return"Profiler";case aa:return"StrictMode";case Xs:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ua:return t=e.displayName||null,t!==null?t:Zs(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Zs(e(t))}catch{}}return null}function Fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zs(t);case 8:return t===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e){var t=pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=$m(e))}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&la(e,"checked",t,!1)}function tl(e,t){hd(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(jr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function gd(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){Dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function xd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=xd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var zm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,t){if(t){if(zm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ll=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Gn=null,Kn=null;function yc(e){if(e=ao(e)){if(typeof al!="function")throw Error(N(280));var t=e.stateNode;t&&(t=zi(t),al(e.stateNode,e.type,t))}}function Sd(e){Gn?Kn?Kn.push(e):Kn=[e]:Gn=e}function _d(){if(Gn){var e=Gn,t=Kn;if(Kn=Gn=null,yc(e),t)for(e=0;e<t.length;e++)yc(t[e])}}function Cd(e,t){return e(t)}function jd(){}var gs=!1;function Nd(e,t,n){if(gs)return e(t,n);gs=!0;try{return Cd(e,t,n)}finally{gs=!1,(Gn!==null||Kn!==null)&&(jd(),_d())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var cl=!1;if(Rt)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){cl=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{cl=!1}function Am(e,t,n,r,o,i,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Er=!1,ri=null,oi=!1,ul=null,Um={onError:function(e){Er=!0,ri=e}};function Wm(e,t,n,r,o,i,s,a,c){Er=!1,ri=null,Am.apply(Um,arguments)}function Hm(e,t,n,r,o,i,s,a,c){if(Wm.apply(this,arguments),Er){if(Er){var u=ri;Er=!1,ri=null}else throw Error(N(198));oi||(oi=!0,ul=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xc(e){if(Tn(e)!==e)throw Error(N(188))}function Vm(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xc(o),e;if(i===r)return xc(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function bd(e){return e=Vm(e),e!==null?Pd(e):null}function Pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pd(e);if(t!==null)return t;e=e.sibling}return null}var Ed=Ke.unstable_scheduleCallback,wc=Ke.unstable_cancelCallback,qm=Ke.unstable_shouldYield,Gm=Ke.unstable_requestPaint,le=Ke.unstable_now,Km=Ke.unstable_getCurrentPriorityLevel,fa=Ke.unstable_ImmediatePriority,Td=Ke.unstable_UserBlockingPriority,ii=Ke.unstable_NormalPriority,Qm=Ke.unstable_LowPriority,Ld=Ke.unstable_IdlePriority,Ii=null,wt=null;function Jm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Zm,Xm=Math.log,Ym=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Xm(e)/Ym|0)|0}var No=64,ko=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Nr(a):(i&=s,i!==0&&(r=Nr(i)))}else s=n&~o,s!==0?r=Nr(s):i!==0&&(r=Nr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),o=1<<n,r|=e[n],t&=~o;return r}function eh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function th(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ut(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=eh(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Od(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function so(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function nh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ut(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,ma,Md,Id,Fd,fl=!1,bo=[],Qt=null,Jt=null,Xt=null,Ur=new Map,Wr=new Map,Ht=[],rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ao(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function oh(e,t,n,r,o){switch(t){case"focusin":return Qt=gr(Qt,e,t,n,r,o),!0;case"dragenter":return Jt=gr(Jt,e,t,n,r,o),!0;case"mouseover":return Xt=gr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ur.set(i,gr(Ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,gr(Wr.get(i)||null,e,t,n,r,o)),!0}return!1}function $d(e){var t=vn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=kd(n),t!==null){e.blockedOn=t,Fd(e.priority,function(){Md(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ll=r,n.target.dispatchEvent(r),ll=null}else return t=ao(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function _c(e,t,n){Ho(e)&&n.delete(t)}function ih(){fl=!1,Qt!==null&&Ho(Qt)&&(Qt=null),Jt!==null&&Ho(Jt)&&(Jt=null),Xt!==null&&Ho(Xt)&&(Xt=null),Ur.forEach(_c),Wr.forEach(_c)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,ih)))}function Hr(e){function t(o){return vr(o,e)}if(0<bo.length){vr(bo[0],e);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&vr(Qt,e),Jt!==null&&vr(Jt,e),Xt!==null&&vr(Xt,e),Ur.forEach(t),Wr.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)$d(n),n.blockedOn===null&&Ht.shift()}var Qn=Ft.ReactCurrentBatchConfig,li=!0;function sh(e,t,n,r){var o=G,i=Qn.transition;Qn.transition=null;try{G=1,ha(e,t,n,r)}finally{G=o,Qn.transition=i}}function lh(e,t,n,r){var o=G,i=Qn.transition;Qn.transition=null;try{G=4,ha(e,t,n,r)}finally{G=o,Qn.transition=i}}function ha(e,t,n,r){if(li){var o=pl(e,t,n,r);if(o===null)bs(e,t,r,ai,n),Sc(e,r);else if(oh(o,e,t,n,r))r.stopPropagation();else if(Sc(e,r),t&4&&-1<rh.indexOf(e)){for(;o!==null;){var i=ao(o);if(i!==null&&Bd(i),i=pl(e,t,n,r),i===null&&bs(e,t,r,ai,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else bs(e,t,r,null,n)}}var ai=null;function pl(e,t,n,r){if(ai=null,e=da(r),e=vn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ai=e,null}function Dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case fa:return 1;case Td:return 4;case ii:case Qm:return 16;case Ld:return 536870912;default:return 16}default:return 16}}var qt=null,ga=null,Vo=null;function zd(){if(Vo)return Vo;var e,t=ga,n=t.length,r,o="value"in qt?qt.value:qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Vo=o.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Cc(){return!1}function Je(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:Cc,this.isPropagationStopped=Cc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Je(sr),lo=oe({},sr,{view:0,detail:0}),ah=Je(lo),ys,xs,yr,Fi=oe({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(ys=e.screenX-yr.screenX,xs=e.screenY-yr.screenY):xs=ys=0,yr=e),ys)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),jc=Je(Fi),ch=oe({},Fi,{dataTransfer:0}),uh=Je(ch),dh=oe({},lo,{relatedTarget:0}),ws=Je(dh),fh=oe({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),ph=Je(fh),mh=oe({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hh=Je(mh),gh=oe({},sr,{data:0}),Nc=Je(gh),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xh[e])?!!t[e]:!1}function ya(){return wh}var Sh=oe({},lo,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_h=Je(Sh),Ch=oe({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=Je(Ch),jh=oe({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),Nh=Je(jh),kh=oe({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=Je(kh),Ph=oe({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=Je(Ph),Th=[9,13,27,32],xa=Rt&&"CompositionEvent"in window,Tr=null;Rt&&"documentMode"in document&&(Tr=document.documentMode);var Lh=Rt&&"TextEvent"in window&&!Tr,Ad=Rt&&(!xa||Tr&&8<Tr&&11>=Tr),bc=" ",Pc=!1;function Ud(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Oh(e,t){switch(e){case"compositionend":return Wd(t);case"keypress":return t.which!==32?null:(Pc=!0,bc);case"textInput":return e=t.data,e===bc&&Pc?null:e;default:return null}}function Rh(e,t){if(In)return e==="compositionend"||!xa&&Ud(e,t)?(e=zd(),Vo=ga=qt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ad&&t.locale!=="ko"?null:t.data;default:return null}}var Bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bh[e.type]:t==="textarea"}function Hd(e,t,n,r){Sd(r),t=ci(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Vr=null;function Mh(e){tf(e,0)}function $i(e){var t=Dn(e);if(md(t))return e}function Ih(e,t){if(e==="change")return t}var Vd=!1;if(Rt){var Ss;if(Rt){var _s="oninput"in document;if(!_s){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),_s=typeof Tc.oninput=="function"}Ss=_s}else Ss=!1;Vd=Ss&&(!document.documentMode||9<document.documentMode)}function Lc(){Lr&&(Lr.detachEvent("onpropertychange",qd),Vr=Lr=null)}function qd(e){if(e.propertyName==="value"&&$i(Vr)){var t=[];Hd(t,Vr,e,da(e)),Nd(Mh,t)}}function Fh(e,t,n){e==="focusin"?(Lc(),Lr=t,Vr=n,Lr.attachEvent("onpropertychange",qd)):e==="focusout"&&Lc()}function $h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Vr)}function Dh(e,t){if(e==="click")return $i(t)}function zh(e,t){if(e==="input"||e==="change")return $i(t)}function Ah(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Ah;function qr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Qs.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rc(e,t){var n=Oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oc(n)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kd(){for(var e=window,t=ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ni(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uh(e){var t=Kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gd(n.ownerDocument.documentElement,n)){if(r!==null&&wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Rc(n,i);var s=Rc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wh=Rt&&"documentMode"in document&&11>=document.documentMode,Fn=null,ml=null,Or=null,hl=!1;function Bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||Fn==null||Fn!==ni(r)||(r=Fn,"selectionStart"in r&&wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&qr(Or,r)||(Or=r,r=ci(ml,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Cs={},Qd={};Rt&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Di(e){if(Cs[e])return Cs[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qd)return Cs[e]=t[n];return e}var Jd=Di("animationend"),Xd=Di("animationiteration"),Yd=Di("animationstart"),Zd=Di("transitionend"),ef=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){ef.set(e,t),En(t,[e])}for(var js=0;js<Mc.length;js++){var Ns=Mc[js],Hh=Ns.toLowerCase(),Vh=Ns[0].toUpperCase()+Ns.slice(1);ln(Hh,"on"+Vh)}ln(Jd,"onAnimationEnd");ln(Xd,"onAnimationIteration");ln(Yd,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Zd,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qh=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function Ic(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hm(r,t,void 0,e),e.currentTarget=null}function tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Ic(o,a,u),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Ic(o,a,u),i=c}}}if(oi)throw e=ul,oi=!1,ul=null,e}function Y(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(nf(t,e,2,!1),n.add(r))}function ks(e,t,n){var r=0;t&&(r|=4),nf(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[To]){e[To]=!0,cd.forEach(function(n){n!=="selectionchange"&&(qh.has(n)||ks(n,!1,e),ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,ks("selectionchange",!1,t))}}function nf(e,t,n,r){switch(Dd(t)){case 1:var o=sh;break;case 4:o=lh;break;default:o=ha}n=o.bind(null,t,n,e),o=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=vn(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Nd(function(){var u=i,d=da(n),p=[];e:{var m=ef.get(e);if(m!==void 0){var v=va,y=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":v=_h;break;case"focusin":y="focus",v=ws;break;case"focusout":y="blur",v=ws;break;case"beforeblur":case"afterblur":v=ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Nh;break;case Jd:case Xd:case Yd:v=ph;break;case Zd:v=bh;break;case"scroll":v=ah;break;case"wheel":v=Eh;break;case"copy":case"cut":case"paste":v=hh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kc}var x=(t&4)!==0,j=!x&&e==="scroll",g=x?m!==null?m+"Capture":null:m;x=[];for(var f=u,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,g!==null&&(w=Ar(f,g),w!=null&&x.push(Kr(f,w,h)))),j)break;f=f.return}0<x.length&&(m=new v(m,y,null,n,d),p.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ll&&(y=n.relatedTarget||n.fromElement)&&(vn(y)||y[Bt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?vn(y):null,y!==null&&(j=Tn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=jc,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=kc,w="onPointerLeave",g="onPointerEnter",f="pointer"),j=v==null?m:Dn(v),h=y==null?m:Dn(y),m=new x(w,f+"leave",v,n,d),m.target=j,m.relatedTarget=h,w=null,vn(d)===u&&(x=new x(g,f+"enter",y,n,d),x.target=h,x.relatedTarget=j,w=x),j=w,v&&y)t:{for(x=v,g=y,f=0,h=x;h;h=Rn(h))f++;for(h=0,w=g;w;w=Rn(w))h++;for(;0<f-h;)x=Rn(x),f--;for(;0<h-f;)g=Rn(g),h--;for(;f--;){if(x===g||g!==null&&x===g.alternate)break t;x=Rn(x),g=Rn(g)}x=null}else x=null;v!==null&&Fc(p,m,v,x,!1),y!==null&&j!==null&&Fc(p,j,y,x,!0)}}e:{if(m=u?Dn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Ih;else if(Ec(m))if(Vd)S=zh;else{S=$h;var k=Fh}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Dh);if(S&&(S=S(e,u))){Hd(p,S,n,d);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&nl(m,"number",m.value)}switch(k=u?Dn(u):window,e){case"focusin":(Ec(k)||k.contentEditable==="true")&&(Fn=k,ml=u,Or=null);break;case"focusout":Or=ml=Fn=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,Bc(p,n,d);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":Bc(p,n,d)}var E;if(xa)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else In?Ud(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Ad&&n.locale!=="ko"&&(In||b!=="onCompositionStart"?b==="onCompositionEnd"&&In&&(E=zd()):(qt=d,ga="value"in qt?qt.value:qt.textContent,In=!0)),k=ci(u,b),0<k.length&&(b=new Nc(b,e,null,n,d),p.push({event:b,listeners:k}),E?b.data=E:(E=Wd(n),E!==null&&(b.data=E)))),(E=Lh?Oh(e,n):Rh(e,n))&&(u=ci(u,"onBeforeInput"),0<u.length&&(d=new Nc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}tf(p,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ar(e,n),i!=null&&r.unshift(Kr(e,i,o)),i=Ar(e,t),i!=null&&r.push(Kr(e,i,o))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=Ar(n,i),c!=null&&s.unshift(Kr(n,c,a))):o||(c=Ar(n,i),c!=null&&s.push(Kr(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function $c(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(Kh,"")}function Lo(e,t,n){if(t=$c(t),$c(e)!==t&&n)throw Error(N(425))}function ui(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,Dc=typeof Promise=="function"?Promise:void 0,Jh=typeof queueMicrotask=="function"?queueMicrotask:typeof Dc<"u"?function(e){return Dc.resolve(null).then(e).catch(Xh)}:xl;function Xh(e){setTimeout(function(){throw e})}function Ps(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),vt="__reactFiber$"+lr,Qr="__reactProps$"+lr,Bt="__reactContainer$"+lr,wl="__reactEvents$"+lr,Yh="__reactListeners$"+lr,Zh="__reactHandles$"+lr;function vn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zc(e);e!==null;){if(n=e[vt])return n;e=zc(e)}return t}e=n,n=e.parentNode}return null}function ao(e){return e=e[vt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function zi(e){return e[Qr]||null}var Sl=[],zn=-1;function an(e){return{current:e}}function Z(e){0>zn||(e.current=Sl[zn],Sl[zn]=null,zn--)}function X(e,t){zn++,Sl[zn]=e.current,e.current=t}var sn={},Pe=an(sn),De=an(!1),Cn=sn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function di(){Z(De),Z(Pe)}function Ac(e,t,n){if(Pe.current!==sn)throw Error(N(168));X(Pe,t),X(De,n)}function rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,Fm(e)||"Unknown",o));return oe({},n,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Cn=Pe.current,X(Pe,e),X(De,De.current),!0}function Uc(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=rf(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,Z(De),Z(Pe),X(Pe,e)):Z(De),X(De,n)}var bt=null,Ai=!1,Es=!1;function of(e){bt===null?bt=[e]:bt.push(e)}function eg(e){Ai=!0,of(e)}function cn(){if(!Es&&bt!==null){Es=!0;var e=0,t=G;try{var n=bt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Ai=!1}catch(o){throw bt!==null&&(bt=bt.slice(e+1)),Ed(fa,cn),o}finally{G=t,Es=!1}}return null}var An=[],Un=0,pi=null,mi=0,Xe=[],Ye=0,jn=null,Et=1,Tt="";function mn(e,t){An[Un++]=mi,An[Un++]=pi,pi=e,mi=t}function sf(e,t,n){Xe[Ye++]=Et,Xe[Ye++]=Tt,Xe[Ye++]=jn,jn=e;var r=Et;e=Tt;var o=32-ut(r)-1;r&=~(1<<o),n+=1;var i=32-ut(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Et=1<<32-ut(t)+o|n<<o|r,Tt=i+e}else Et=1<<i|n<<o|r,Tt=e}function Sa(e){e.return!==null&&(mn(e,1),sf(e,1,0))}function _a(e){for(;e===pi;)pi=An[--Un],An[Un]=null,mi=An[--Un],An[Un]=null;for(;e===jn;)jn=Xe[--Ye],Xe[Ye]=null,Tt=Xe[--Ye],Xe[Ye]=null,Et=Xe[--Ye],Xe[Ye]=null}var Ge=null,qe=null,te=!1,ct=null;function lf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,qe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:Et,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,qe=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(te){var t=qe;if(t){var n=t;if(!Wc(e,t)){if(_l(e))throw Error(N(418));t=Yt(n.nextSibling);var r=Ge;t&&Wc(e,t)?lf(r,n):(e.flags=e.flags&-4097|2,te=!1,Ge=e)}}else{if(_l(e))throw Error(N(418));e.flags=e.flags&-4097|2,te=!1,Ge=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Oo(e){if(e!==Ge)return!1;if(!te)return Hc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=qe)){if(_l(e))throw af(),Error(N(418));for(;t;)lf(e,t),t=Yt(t.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ge?Yt(e.stateNode.nextSibling):null;return!0}function af(){for(var e=qe;e;)e=Yt(e.nextSibling)}function er(){qe=Ge=null,te=!1}function Ca(e){ct===null?ct=[e]:ct.push(e)}var tg=Ft.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function cf(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=nn(g,f),g.index=0,g.sibling=null,g}function i(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,f,h,w){return f===null||f.tag!==6?(f=Is(h,g.mode,w),f.return=g,f):(f=o(f,h),f.return=g,f)}function c(g,f,h,w){var S=h.type;return S===Mn?d(g,f,h.props.children,w,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&Vc(S)===f.type)?(w=o(f,h.props),w.ref=xr(g,f,h),w.return=g,w):(w=Zo(h.type,h.key,h.props,null,g.mode,w),w.ref=xr(g,f,h),w.return=g,w)}function u(g,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Fs(h,g.mode,w),f.return=g,f):(f=o(f,h.children||[]),f.return=g,f)}function d(g,f,h,w,S){return f===null||f.tag!==7?(f=Sn(h,g.mode,w,S),f.return=g,f):(f=o(f,h),f.return=g,f)}function p(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Is(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:return h=Zo(f.type,f.key,f.props,null,g.mode,h),h.ref=xr(g,null,f),h.return=g,h;case Bn:return f=Fs(f,g.mode,h),f.return=g,f;case Ut:var w=f._init;return p(g,w(f._payload),h)}if(jr(f)||mr(f))return f=Sn(f,g.mode,h,null),f.return=g,f;Ro(g,f)}return null}function m(g,f,h,w){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(g,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _o:return h.key===S?c(g,f,h,w):null;case Bn:return h.key===S?u(g,f,h,w):null;case Ut:return S=h._init,m(g,f,S(h._payload),w)}if(jr(h)||mr(h))return S!==null?null:d(g,f,h,w,null);Ro(g,h)}return null}function v(g,f,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(h)||null,a(f,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _o:return g=g.get(w.key===null?h:w.key)||null,c(f,g,w,S);case Bn:return g=g.get(w.key===null?h:w.key)||null,u(f,g,w,S);case Ut:var k=w._init;return v(g,f,h,k(w._payload),S)}if(jr(w)||mr(w))return g=g.get(h)||null,d(f,g,w,S,null);Ro(f,w)}return null}function y(g,f,h,w){for(var S=null,k=null,E=f,b=f=0,Q=null;E!==null&&b<h.length;b++){E.index>b?(Q=E,E=null):Q=E.sibling;var M=m(g,E,h[b],w);if(M===null){E===null&&(E=Q);break}e&&E&&M.alternate===null&&t(g,E),f=i(M,f,b),k===null?S=M:k.sibling=M,k=M,E=Q}if(b===h.length)return n(g,E),te&&mn(g,b),S;if(E===null){for(;b<h.length;b++)E=p(g,h[b],w),E!==null&&(f=i(E,f,b),k===null?S=E:k.sibling=E,k=E);return te&&mn(g,b),S}for(E=r(g,E);b<h.length;b++)Q=v(E,g,b,h[b],w),Q!==null&&(e&&Q.alternate!==null&&E.delete(Q.key===null?b:Q.key),f=i(Q,f,b),k===null?S=Q:k.sibling=Q,k=Q);return e&&E.forEach(function(We){return t(g,We)}),te&&mn(g,b),S}function x(g,f,h,w){var S=mr(h);if(typeof S!="function")throw Error(N(150));if(h=S.call(h),h==null)throw Error(N(151));for(var k=S=null,E=f,b=f=0,Q=null,M=h.next();E!==null&&!M.done;b++,M=h.next()){E.index>b?(Q=E,E=null):Q=E.sibling;var We=m(g,E,M.value,w);if(We===null){E===null&&(E=Q);break}e&&E&&We.alternate===null&&t(g,E),f=i(We,f,b),k===null?S=We:k.sibling=We,k=We,E=Q}if(M.done)return n(g,E),te&&mn(g,b),S;if(E===null){for(;!M.done;b++,M=h.next())M=p(g,M.value,w),M!==null&&(f=i(M,f,b),k===null?S=M:k.sibling=M,k=M);return te&&mn(g,b),S}for(E=r(g,E);!M.done;b++,M=h.next())M=v(E,g,b,M.value,w),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?b:M.key),f=i(M,f,b),k===null?S=M:k.sibling=M,k=M);return e&&E.forEach(function(fr){return t(g,fr)}),te&&mn(g,b),S}function j(g,f,h,w){if(typeof h=="object"&&h!==null&&h.type===Mn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case _o:e:{for(var S=h.key,k=f;k!==null;){if(k.key===S){if(S=h.type,S===Mn){if(k.tag===7){n(g,k.sibling),f=o(k,h.props.children),f.return=g,g=f;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&Vc(S)===k.type){n(g,k.sibling),f=o(k,h.props),f.ref=xr(g,k,h),f.return=g,g=f;break e}n(g,k);break}else t(g,k);k=k.sibling}h.type===Mn?(f=Sn(h.props.children,g.mode,w,h.key),f.return=g,g=f):(w=Zo(h.type,h.key,h.props,null,g.mode,w),w.ref=xr(g,f,h),w.return=g,g=w)}return s(g);case Bn:e:{for(k=h.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=o(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Fs(h,g.mode,w),f.return=g,g=f}return s(g);case Ut:return k=h._init,j(g,f,k(h._payload),w)}if(jr(h))return y(g,f,h,w);if(mr(h))return x(g,f,h,w);Ro(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=o(f,h),f.return=g,g=f):(n(g,f),f=Is(h,g.mode,w),f.return=g,g=f),s(g)):n(g,f)}return j}var tr=cf(!0),uf=cf(!1),hi=an(null),gi=null,Wn=null,ja=null;function Na(){ja=Wn=gi=null}function ka(e){var t=hi.current;Z(hi),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){gi=e,ja=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(gi===null)throw Error(N(308));Wn=e,gi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var yn=null;function ba(e){yn===null?yn=[e]:yn.push(e)}function df(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ba(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,ba(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}function qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vi(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(i!==null){var p=o.baseState;s=0,d=u=c=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(m=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=oe({},p,m);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,c=p):d=d.next=v,s|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(c=p),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=s,e.lanes=s,e.memoizedState=p}}function Gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var co={},St=an(co),Jr=an(co),Xr=an(co);function xn(e){if(e===co)throw Error(N(174));return e}function Ea(e,t){switch(X(Xr,t),X(Jr,e),X(St,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}Z(St),X(St,t)}function nr(){Z(St),Z(Jr),Z(Xr)}function pf(e){xn(Xr.current);var t=xn(St.current),n=ol(t,e.type);t!==n&&(X(Jr,e),X(St,n))}function Ta(e){Jr.current===e&&(Z(St),Z(Jr))}var ne=an(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function La(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var Ko=Ft.ReactCurrentDispatcher,Ls=Ft.ReactCurrentBatchConfig,Nn=0,re=null,me=null,ye=null,xi=!1,Rr=!1,Yr=0,ng=0;function Ce(){throw Error(N(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,o,i){if(Nn=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?sg:lg,e=n(r,o),Rr){i=0;do{if(Rr=!1,Yr=0,25<=i)throw Error(N(301));i+=1,ye=me=null,t.updateQueue=null,Ko.current=ag,e=n(r,o)}while(Rr)}if(Ko.current=wi,t=me!==null&&me.next!==null,Nn=0,ye=me=re=null,xi=!1,t)throw Error(N(300));return e}function Ba(){var e=Yr!==0;return Yr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?re.memoizedState=ye=e:ye=ye.next=e,ye}function rt(){if(me===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?re.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(N(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?re.memoizedState=ye=e:ye=ye.next=e}return ye}function Zr(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=rt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,u=i;do{var d=u.lane;if((Nn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,s=r):c=c.next=p,re.lanes|=d,kn|=d}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=a,pt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rs(e){var t=rt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);pt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mf(){}function hf(e,t){var n=re,r=rt(),o=t(),i=!pt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Ma(yf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,eo(9,vf.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(N(349));Nn&30||gf(n,t,o)}return o}function gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vf(e,t,n,r){t.value=n,t.getSnapshot=r,xf(t)&&wf(e)}function yf(e,t,n){return n(function(){xf(t)&&wf(e)})}function xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function wf(e){var t=Mt(e,1);t!==null&&dt(t,e,1,-1)}function Kc(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=ig.bind(null,re,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sf(){return rt().memoizedState}function Qo(e,t,n,r){var o=gt();re.flags|=e,o.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function Ui(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(me!==null){var s=me.memoizedState;if(i=s.destroy,r!==null&&Oa(r,s.deps)){o.memoizedState=eo(t,n,i,r);return}}re.flags|=e,o.memoizedState=eo(1|t,n,i,r)}function Qc(e,t){return Qo(8390656,8,e,t)}function Ma(e,t){return Ui(2048,8,e,t)}function _f(e,t){return Ui(4,2,e,t)}function Cf(e,t){return Ui(4,4,e,t)}function jf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nf(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4,4,jf.bind(null,t,e),n)}function Ia(){}function kf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pf(e,t,n){return Nn&21?(pt(n,t)||(n=Od(),re.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function rg(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Ls.transition;Ls.transition={};try{e(!1),t()}finally{G=n,Ls.transition=r}}function Ef(){return rt().memoizedState}function og(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tf(e))Lf(t,n);else if(n=df(e,t,n,r),n!==null){var o=Be();dt(n,e,r,o),Of(n,t,r)}}function ig(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tf(e))Lf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,pt(a,s)){var c=t.interleaved;c===null?(o.next=o,ba(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=df(e,t,o,r),n!==null&&(o=Be(),dt(n,e,r,o),Of(n,t,r))}}function Tf(e){var t=e.alternate;return e===re||t!==null&&t===re}function Lf(e,t){Rr=xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}var wi={readContext:nt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},sg={readContext:nt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Qc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4194308,4,jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=og.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:Ia,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=rg.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=gt();if(te){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),xe===null)throw Error(N(349));Nn&30||gf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Qc(yf.bind(null,r,i,e),[e]),r.flags|=2048,eo(9,vf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=xe.identifierPrefix;if(te){var n=Tt,r=Et;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ng++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lg={readContext:nt,useCallback:kf,useContext:nt,useEffect:Ma,useImperativeHandle:Nf,useInsertionEffect:_f,useLayoutEffect:Cf,useMemo:bf,useReducer:Os,useRef:Sf,useState:function(){return Os(Zr)},useDebugValue:Ia,useDeferredValue:function(e){var t=rt();return Pf(t,me.memoizedState,e)},useTransition:function(){var e=Os(Zr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:mf,useSyncExternalStore:hf,useId:Ef,unstable_isNewReconciler:!1},ag={readContext:nt,useCallback:kf,useContext:nt,useEffect:Ma,useImperativeHandle:Nf,useInsertionEffect:_f,useLayoutEffect:Cf,useMemo:bf,useReducer:Rs,useRef:Sf,useState:function(){return Rs(Zr)},useDebugValue:Ia,useDeferredValue:function(e){var t=rt();return me===null?t.memoizedState=e:Pf(t,me.memoizedState,e)},useTransition:function(){var e=Rs(Zr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:mf,useSyncExternalStore:hf,useId:Ef,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wi={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=tn(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(dt(t,e,o,r),Go(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=tn(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(dt(t,e,o,r),Go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=tn(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(dt(t,e,r,n),Go(t,e,r))}};function Jc(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(o,i):!0}function Rf(e,t,n){var r=!1,o=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=ze(t)?Cn:Pe.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function kl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Pa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=ze(t)?Cn:Pe.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Nl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wi.enqueueReplaceState(o,o.state,null),vi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=Im(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cg=typeof WeakMap=="function"?WeakMap:Map;function Bf(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Fl=r),bl(e,t)},n}function Mf(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Yc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cg.bind(null,e,t,n),t.then(e,e))}function Zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var ug=Ft.ReactCurrentOwner,$e=!1;function Re(e,t,n,r){t.child=e===null?uf(t,null,n,r):tr(t,e.child,n,r)}function tu(e,t,n,r,o){n=n.render;var i=t.ref;return Jn(t,o),r=Ra(e,t,n,r,i,o),n=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(te&&n&&Sa(t),t.flags|=1,Re(e,t,r,o),t.child)}function nu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ha(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,If(e,t,i,r,o)):(e=Zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(s,r)&&e.ref===t.ref)return It(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function If(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(qr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,It(e,t,o)}return Pl(e,t,n,r,o)}function Ff(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Vn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Vn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Vn,He),He|=r;return Re(e,t,o,n),t.child}function $f(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,o){var i=ze(n)?Cn:Pe.current;return i=Zn(t,i),Jn(t,o),n=Ra(e,t,n,r,i,o),r=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(te&&r&&Sa(t),t.flags|=1,Re(e,t,n,o),t.child)}function ru(e,t,n,r,o){if(ze(n)){var i=!0;fi(t)}else i=!1;if(Jn(t,o),t.stateNode===null)Jo(e,t),Rf(t,n,r),kl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=ze(n)?Cn:Pe.current,u=Zn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Xc(t,s,r,u),Wt=!1;var m=t.memoizedState;s.state=m,vi(t,r,s,o),c=t.memoizedState,a!==r||m!==c||De.current||Wt?(typeof d=="function"&&(Nl(t,n,d,r),c=t.memoizedState),(a=Wt||Jc(t,n,a,r,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ff(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:lt(t.type,a),s.props=u,p=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=nt(c):(c=ze(n)?Cn:Pe.current,c=Zn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==c)&&Xc(t,s,r,c),Wt=!1,m=t.memoizedState,s.state=m,vi(t,r,s,o);var y=t.memoizedState;a!==p||m!==y||De.current||Wt?(typeof v=="function"&&(Nl(t,n,v,r),y=t.memoizedState),(u=Wt||Jc(t,n,u,r,m,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return El(e,t,n,r,i,o)}function El(e,t,n,r,o,i){$f(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Uc(t,n,!1),It(e,t,i);r=t.stateNode,ug.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=tr(t,e.child,null,i),t.child=tr(t,null,a,i)):Re(e,t,a,i),t.memoizedState=r.state,o&&Uc(t,n,!0),t.child}function Df(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),Ea(e,t.containerInfo)}function ou(e,t,n,r,o){return er(),Ca(o),t.flags|=256,Re(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function zf(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ne,o&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=qi(s,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ll(n),t.memoizedState=Tl,e):Fa(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return dg(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=nn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=nn(a,i):(i=Sn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bo(e,t,n,r){return r!==null&&Ca(r),tr(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dg(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Bs(Error(N(422))),Bo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qi({mode:"visible",children:r.children},o,0,null),i=Sn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tr(t,e.child,null,s),t.child.memoizedState=Ll(s),t.memoizedState=Tl,i);if(!(t.mode&1))return Bo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=Bs(i,r,void 0),Bo(e,t,s,r)}if(a=(s&e.childLanes)!==0,$e||a){if(r=xe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),dt(r,e,o,-1))}return Wa(),r=Bs(Error(N(421))),Bo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=Yt(o.nextSibling),Ge=t,te=!0,ct=null,e!==null&&(Xe[Ye++]=Et,Xe[Ye++]=Tt,Xe[Ye++]=jn,Et=e.id,Tt=e.overflow,jn=t),t=Fa(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function Ms(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Af(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ms(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ms(t,!0,n,null,i);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fg(e,t,n){switch(t.tag){case 3:Df(t),er();break;case 5:pf(t);break;case 1:ze(t.type)&&fi(t);break;case 4:Ea(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(hi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?zf(e,t,n):(X(ne,ne.current&1),e=It(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Af(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Ff(e,t,n)}return It(e,t,n)}var Uf,Ol,Wf,Hf;Uf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};Wf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(St.current);var i=null;switch(n){case"input":o=el(e,o),r=el(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=rl(e,o),r=rl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ui)}il(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Hf=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pg(e,t,n){var r=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return ze(t.type)&&di(),je(t),null;case 3:return r=t.stateNode,nr(),Z(De),Z(Pe),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(zl(ct),ct=null))),Ol(e,t),je(t),null;case 5:Ta(t);var o=xn(Xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return je(t),null}if(e=xn(St.current),Oo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[Qr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<kr.length;o++)Y(kr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":mc(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":gc(r,i),Y("invalid",r)}il(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,a,e),o=["children",""+a]):Dr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":Co(r),hc(r,i,!0);break;case"textarea":Co(r),vc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ui)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[Qr]=r,Uf(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<kr.length;o++)Y(kr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":mc(e,r),o=el(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Y("invalid",e);break;case"textarea":gc(e,r),o=rl(e,r),Y("invalid",e);break;default:o=r}il(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?wd(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yd(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&zr(e,c):typeof c=="number"&&zr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Y("scroll",e):c!=null&&la(e,i,c,s))}switch(n){case"input":Co(e),hc(e,r,!1);break;case"textarea":Co(e),vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ui)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Hf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=xn(Xr.current),xn(St.current),Oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return je(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&qe!==null&&t.mode&1&&!(t.flags&128))af(),er(),t.flags|=98560,i=!1;else if(i=Oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[vt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),i=!1}else ct!==null&&(zl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?he===0&&(he=3):Wa())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return nr(),Ol(e,t),e===null&&Gr(t.stateNode.containerInfo),je(t),null;case 10:return ka(t.type._context),je(t),null;case 17:return ze(t.type)&&di(),je(t),null;case 19:if(Z(ne),i=t.memoizedState,i===null)return je(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)wr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=yi(e),s!==null){for(t.flags|=128,wr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>or&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=yi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!te)return je(t),null}else 2*le()-i.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Ua(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function mg(e,t){switch(_a(t),t.tag){case 1:return ze(t.type)&&di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),Z(De),Z(Pe),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return nr(),null;case 10:return ka(t.type._context),null;case 22:case 23:return Ua(),null;case 24:return null;default:return null}}var Mo=!1,be=!1,hg=typeof WeakSet=="function"?WeakSet:Set,T=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var su=!1;function gg(e,t){if(gl=li,e=Kd(),wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(a=s+o),p!==i||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===o&&(a=s),m===i&&++d===r&&(c=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},li=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:lt(t.type,x),j);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=su,su=!1,y}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Rl(t,n,i)}o=o.next}while(o!==r)}}function Hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Qr],delete t[wl],delete t[Yh],delete t[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qf(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ui));else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}var we=null,at=!1;function $t(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:be||Hn(n,t);case 6:var r=we,o=at;we=null,$t(e,t,n),we=r,at=o,we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?Ps(e.parentNode,n):e.nodeType===1&&Ps(e,n),Hr(e)):Ps(we,n.stateNode));break;case 4:r=we,o=at,we=n.stateNode.containerInfo,at=!0,$t(e,t,n),we=r,at=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Rl(n,t,s),o=o.next}while(o!==r)}$t(e,t,n);break;case 1:if(!be&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,$t(e,t,n),be=r):$t(e,t,n);break;default:$t(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hg),t.forEach(function(r){var o=Ng.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,at=!1;break e;case 3:we=a.stateNode.containerInfo,at=!0;break e;case 4:we=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(we===null)throw Error(N(160));Gf(i,s,o),we=null,at=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}function Kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ht(e),r&4){try{Br(3,e,e.return),Hi(3,e)}catch(x){ie(e,e.return,x)}try{Br(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:ot(t,e),ht(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(ot(t,e),ht(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{zr(o,"")}catch(x){ie(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&hd(o,i),sl(a,s);var u=sl(a,i);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];d==="style"?wd(o,p):d==="dangerouslySetInnerHTML"?yd(o,p):d==="children"?zr(o,p):la(o,d,p,u)}switch(a){case"input":tl(o,i);break;case"textarea":gd(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?qn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?qn(o,!!i.multiple,i.defaultValue,!0):qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Qr]=i}catch(x){ie(e,e.return,x)}}break;case 6:if(ot(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ie(e,e.return,x)}}break;case 3:if(ot(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:ot(t,e),ht(e);break;case 13:ot(t,e),ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(za=le())),r&4&&au(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||d,ot(t,e),be=u):ot(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(T=e,d=e.child;d!==null;){for(p=T=d;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:Br(4,m,m.return);break;case 1:Hn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ie(r,n,x)}}break;case 5:Hn(m,m.return);break;case 22:if(m.memoizedState!==null){uu(p);continue}}v!==null?(v.return=m,T=v):uu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=xd("display",s))}catch(x){ie(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){ie(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ot(t,e),ht(e),r&4&&au(e);break;case 21:break;default:ot(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qf(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(zr(o,""),r.flags&=-33);var i=lu(e);Il(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=lu(e);Ml(e,a,s);break;default:throw Error(N(161))}}catch(c){ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vg(e,t,n){T=e,Qf(e)}function Qf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Mo;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||be;a=Mo;var u=be;if(Mo=s,(be=c)&&!u)for(T=o;T!==null;)s=T,c=s.child,s.tag===22&&s.memoizedState!==null?du(o):c!==null?(c.return=s,T=c):du(o);for(;i!==null;)T=i,Qf(i),i=i.sibling;T=o,Mo=a,be=u}cu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):cu(e)}}function cu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Hr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}be||t.flags&512&&Bl(t)}catch(m){ie(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function uu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function du(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hi(4,t)}catch(c){ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ie(t,o,c)}}var i=t.return;try{Bl(t)}catch(c){ie(t,i,c)}break;case 5:var s=t.return;try{Bl(t)}catch(c){ie(t,s,c)}}}catch(c){ie(t,t.return,c)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var yg=Math.ceil,Si=Ft.ReactCurrentDispatcher,$a=Ft.ReactCurrentOwner,et=Ft.ReactCurrentBatchConfig,U=0,xe=null,de=null,Se=0,He=0,Vn=an(0),he=0,to=null,kn=0,Vi=0,Da=0,Mr=null,Fe=null,za=0,or=1/0,kt=null,_i=!1,Fl=null,en=null,Io=!1,Gt=null,Ci=0,Ir=0,$l=null,Xo=-1,Yo=0;function Be(){return U&6?le():Xo!==-1?Xo:Xo=le()}function tn(e){return e.mode&1?U&2&&Se!==0?Se&-Se:tg.transition!==null?(Yo===0&&(Yo=Od()),Yo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Dd(e.type)),e):1}function dt(e,t,n,r){if(50<Ir)throw Ir=0,$l=null,Error(N(185));so(e,n,r),(!(U&2)||e!==xe)&&(e===xe&&(!(U&2)&&(Vi|=n),he===4&&Vt(e,Se)),Ae(e,r),n===1&&U===0&&!(t.mode&1)&&(or=le()+500,Ai&&cn()))}function Ae(e,t){var n=e.callbackNode;th(e,t);var r=si(e,e===xe?Se:0);if(r===0)n!==null&&wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wc(n),t===1)e.tag===0?eg(fu.bind(null,e)):of(fu.bind(null,e)),Jh(function(){!(U&6)&&cn()}),n=null;else{switch(Rd(r)){case 1:n=fa;break;case 4:n=Td;break;case 16:n=ii;break;case 536870912:n=Ld;break;default:n=ii}n=rp(n,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jf(e,t){if(Xo=-1,Yo=0,U&6)throw Error(N(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=si(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var o=U;U|=2;var i=Yf();(xe!==e||Se!==t)&&(kt=null,or=le()+500,wn(e,t));do try{Sg();break}catch(a){Xf(e,a)}while(!0);Na(),Si.current=i,U=o,de!==null?t=0:(xe=null,Se=0,t=he)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(r=o,t=Dl(e,o))),t===1)throw n=to,wn(e,0),Vt(e,r),Ae(e,le()),n;if(t===6)Vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!xg(o)&&(t=ji(e,r),t===2&&(i=dl(e),i!==0&&(r=i,t=Dl(e,i))),t===1))throw n=to,wn(e,0),Vt(e,r),Ae(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:hn(e,Fe,kt);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=za+500-le(),10<t)){if(si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=xl(hn.bind(null,e,Fe,kt),t);break}hn(e,Fe,kt);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ut(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yg(r/1960))-r,10<r){e.timeoutHandle=xl(hn.bind(null,e,Fe,kt),r);break}hn(e,Fe,kt);break;case 5:hn(e,Fe,kt);break;default:throw Error(N(329))}}}return Ae(e,le()),e.callbackNode===n?Jf.bind(null,e):null}function Dl(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=ji(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&zl(t)),e}function zl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function xg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Da,t&=~Vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if(U&6)throw Error(N(327));Xn();var t=si(e,0);if(!(t&1))return Ae(e,le()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Dl(e,r))}if(n===1)throw n=to,wn(e,0),Vt(e,t),Ae(e,le()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Fe,kt),Ae(e,le()),null}function Aa(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(or=le()+500,Ai&&cn())}}function bn(e){Gt!==null&&Gt.tag===0&&!(U&6)&&Xn();var t=U;U|=1;var n=et.transition,r=G;try{if(et.transition=null,G=1,e)return e()}finally{G=r,et.transition=n,U=t,!(U&6)&&cn()}}function Ua(){He=Vn.current,Z(Vn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(_a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:nr(),Z(De),Z(Pe),La();break;case 5:Ta(r);break;case 4:nr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:ka(r.type._context);break;case 22:case 23:Ua()}n=n.return}if(xe=e,de=e=nn(e.current,null),Se=He=t,he=0,to=null,Da=Vi=kn=0,Fe=Mr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}yn=null}return e}function Xf(e,t){do{var n=de;try{if(Na(),Ko.current=wi,xi){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xi=!1}if(Nn=0,ye=me=re=null,Rr=!1,Yr=0,$a.current=null,n===null||n.return===null){he=1,to=t,de=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=Se,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Zc(s);if(v!==null){v.flags&=-257,eu(v,s,a,i,t),v.mode&1&&Yc(i,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Yc(i,u,t),Wa();break e}c=Error(N(426))}}else if(te&&a.mode&1){var j=Zc(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),eu(j,s,a,i,t),Ca(rr(c,a));break e}}i=c=rr(c,a),he!==4&&(he=2),Mr===null?Mr=[i]:Mr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Bf(i,c,t);qc(i,g);break e;case 1:a=c;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(en===null||!en.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Mf(i,a,t);qc(i,w);break e}}i=i.return}while(i!==null)}ep(n)}catch(S){t=S,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Yf(){var e=Si.current;return Si.current=wi,e===null?wi:e}function Wa(){(he===0||he===3||he===2)&&(he=4),xe===null||!(kn&268435455)&&!(Vi&268435455)||Vt(xe,Se)}function ji(e,t){var n=U;U|=2;var r=Yf();(xe!==e||Se!==t)&&(kt=null,wn(e,t));do try{wg();break}catch(o){Xf(e,o)}while(!0);if(Na(),U=n,Si.current=r,de!==null)throw Error(N(261));return xe=null,Se=0,he}function wg(){for(;de!==null;)Zf(de)}function Sg(){for(;de!==null&&!qm();)Zf(de)}function Zf(e){var t=np(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?ep(e):de=t,$a.current=null}function ep(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mg(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=pg(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function hn(e,t,n){var r=G,o=et.transition;try{et.transition=null,G=1,_g(e,t,n,r)}finally{et.transition=o,G=r}return null}function _g(e,t,n,r){do Xn();while(Gt!==null);if(U&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(nh(e,i),e===xe&&(de=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,rp(ii,function(){return Xn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var s=G;G=1;var a=U;U|=4,$a.current=null,gg(e,n),Kf(n,e),Uh(vl),li=!!gl,vl=gl=null,e.current=n,vg(n),Gm(),U=a,G=s,et.transition=i}else e.current=n;if(Io&&(Io=!1,Gt=e,Ci=o),i=e.pendingLanes,i===0&&(en=null),Jm(n.stateNode),Ae(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_i)throw _i=!1,e=Fl,Fl=null,e;return Ci&1&&e.tag!==0&&Xn(),i=e.pendingLanes,i&1?e===$l?Ir++:(Ir=0,$l=e):Ir=0,cn(),null}function Xn(){if(Gt!==null){var e=Rd(Ci),t=et.transition,n=G;try{if(et.transition=null,G=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Ci=0,U&6)throw Error(N(331));var o=U;for(U|=4,T=e.current;T!==null;){var i=T,s=i.child;if(T.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Br(8,d,i)}var p=d.child;if(p!==null)p.return=d,T=p;else for(;T!==null;){d=T;var m=d.sibling,v=d.return;if(Vf(d),d===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}T=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,T=s;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Br(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,T=g;break e}T=i.return}}var f=e.current;for(T=f;T!==null;){s=T;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,T=h;else e:for(s=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hi(9,a)}}catch(S){ie(a,a.return,S)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(U=o,cn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{G=n,et.transition=t}}return!1}function pu(e,t,n){t=rr(n,t),t=Bf(e,t,1),e=Zt(e,t,1),t=Be(),e!==null&&(so(e,1,t),Ae(e,t))}function ie(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=rr(n,e),e=Mf(t,e,1),t=Zt(t,e,1),e=Be(),t!==null&&(so(t,1,e),Ae(t,e));break}}t=t.return}}function Cg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>le()-za?wn(e,0):Da|=n),Ae(e,t)}function tp(e,t){t===0&&(e.mode&1?(t=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):t=1);var n=Be();e=Mt(e,t),e!==null&&(so(e,t,n),Ae(e,n))}function jg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tp(e,n)}function Ng(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),tp(e,n)}var np;np=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,fg(e,t,n);$e=!!(e.flags&131072)}else $e=!1,te&&t.flags&1048576&&sf(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var o=Zn(t,Pe.current);Jn(t,n),o=Ra(null,t,r,e,o,n);var i=Ba();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,fi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pa(t),o.updater=Wi,t.stateNode=o,o._reactInternals=t,kl(t,r,e,n),t=El(null,t,r,!0,i,n)):(t.tag=0,te&&i&&Sa(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bg(r),e=lt(r,e),o){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,lt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Pl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),ru(e,t,r,o,n);case 3:e:{if(Df(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ff(e,t),vi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rr(Error(N(423)),t),t=ou(e,t,r,n,o);break e}else if(r!==o){o=rr(Error(N(424)),t),t=ou(e,t,r,n,o);break e}else for(qe=Yt(t.stateNode.containerInfo.firstChild),Ge=t,te=!0,ct=null,n=uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===o){t=It(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return pf(t),e===null&&Cl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,yl(r,o)?s=null:i!==null&&yl(r,i)&&(t.flags|=32),$f(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return zf(e,t,n);case 4:return Ea(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),tu(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,X(hi,r._currentValue),r._currentValue=s,i!==null)if(pt(i.value,s)){if(i.children===o.children&&!De.current){t=It(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ot(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),jl(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),jl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Jn(t,n),o=nt(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),nu(e,t,r,o,n);case 15:return If(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Jo(e,t),t.tag=1,ze(r)?(e=!0,fi(t)):e=!1,Jn(t,n),Rf(t,r,o),kl(t,r,o,n),El(null,t,r,!0,e,n);case 19:return Af(e,t,n);case 22:return Ff(e,t,n)}throw Error(N(156,t.tag))};function rp(e,t){return Ed(e,t)}function kg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new kg(e,t,n,r)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bg(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===ua)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Ha(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mn:return Sn(n.children,o,i,t);case aa:s=8,o|=8;break;case Js:return e=Ze(12,n,t,o|2),e.elementType=Js,e.lanes=i,e;case Xs:return e=Ze(13,n,t,o),e.elementType=Xs,e.lanes=i,e;case Ys:return e=Ze(19,n,t,o),e.elementType=Ys,e.lanes=i,e;case fd:return qi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:s=10;break e;case dd:s=9;break e;case ca:s=11;break e;case ua:s=14;break e;case Ut:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ze(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=fd,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vs(0),this.expirationTimes=vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Va(e,t,n,r,o,i,s,a,c){return e=new Pg(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(i),e}function Eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function op(e){if(!e)return sn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ze(n))return rf(e,n,t)}return t}function ip(e,t,n,r,o,i,s,a,c){return e=Va(n,r,!0,e,o,i,s,a,c),e.context=op(null),n=e.current,r=Be(),o=tn(n),i=Ot(r,o),i.callback=t??null,Zt(n,i,o),e.current.lanes=o,so(e,o,r),Ae(e,r),e}function Gi(e,t,n,r){var o=t.current,i=Be(),s=tn(o);return n=op(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,s),e!==null&&(dt(e,o,s,i),Go(e,o,s)),s}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qa(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function Tg(){return null}var sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}Ki.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Gi(e,t,null,null)};Ki.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Gi(null,e,null,null)}),t[Bt]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&$d(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Lg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ni(s);i.call(u)}}var s=ip(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=s,e[Bt]=s.current,Gr(e.nodeType===8?e.parentNode:e),bn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ni(c);a.call(u)}}var c=Va(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=c,e[Bt]=c.current,Gr(e.nodeType===8?e.parentNode:e),bn(function(){Gi(t,c,n,r)}),c}function Ji(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Ni(s);a.call(c)}}Gi(t,s,e,o)}else s=Lg(n,t,e,o,r);return Ni(s)}Bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(pa(t,n|1),Ae(t,le()),!(U&6)&&(or=le()+500,cn()))}break;case 13:bn(function(){var r=Mt(e,1);if(r!==null){var o=Be();dt(r,e,1,o)}}),qa(e,1)}};ma=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Be();dt(t,e,134217728,n)}qa(e,134217728)}};Md=function(e){if(e.tag===13){var t=tn(e),n=Mt(e,t);if(n!==null){var r=Be();dt(n,e,t,r)}qa(e,t)}};Id=function(){return G};Fd=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};al=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zi(r);if(!o)throw Error(N(90));md(r),tl(r,o)}}}break;case"textarea":gd(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Cd=Aa;jd=bn;var Og={usingClientEntryPoint:!1,Events:[ao,Dn,zi,Sd,_d,Aa]},Sr={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rg={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Ii=Fo.inject(Rg),wt=Fo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Og;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(N(200));return Eg(e,t,null,n)};Qe.createRoot=function(e,t){if(!Ka(e))throw Error(N(299));var n=!1,r="",o=sp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Va(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new Ga(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return bn(e)};Qe.hydrate=function(e,t,n){if(!Qi(t))throw Error(N(200));return Ji(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=sp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ip(t,null,e,1,n??null,o,!1,i,s),e[Bt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ki(t)};Qe.render=function(e,t,n){if(!Qi(t))throw Error(N(200));return Ji(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(N(40));return e._reactRootContainer?(bn(function(){Ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Aa;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qi(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ji(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp)}catch(e){console.error(e)}}lp(),sd.exports=Qe;var Bg=sd.exports,gu=Bg;Ks.createRoot=gu.createRoot,Ks.hydrateRoot=gu.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const vu="popstate";function Mg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Al("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ki(o)}return Fg(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ap(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ig(){return Math.random().toString(36).substr(2,8)}function yu(e,t){return{usr:e.state,key:e.key,idx:t}}function Al(e,t,n,r){return n===void 0&&(n=null),no({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||Ig()})}function ki(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Kt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(no({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=Kt.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:a,location:x.location,delta:g})}function m(j,g){a=Kt.Push;let f=Al(x.location,j,g);u=d()+1;let h=yu(f,u),w=x.createHref(f);try{s.pushState(h,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}i&&c&&c({action:a,location:x.location,delta:1})}function v(j,g){a=Kt.Replace;let f=Al(x.location,j,g);u=d();let h=yu(f,u),w=x.createHref(f);s.replaceState(h,"",w),i&&c&&c({action:a,location:x.location,delta:0})}function y(j){let g=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof j=="string"?j:ki(j);return f=f.replace(/ $/,"%20"),fe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let x={get action(){return a},get location(){return e(o,s)},listen(j){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(vu,p),c=j,()=>{o.removeEventListener(vu,p),c=null}},createHref(j){return t(o,j)},createURL:y,encodeLocation(j){let g=y(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(j){return s.go(j)}};return x}var xu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xu||(xu={}));function $g(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ar(t):t,o=Qa(r.pathname||"/",n);if(o==null)return null;let i=cp(e);Dg(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let c=Xg(o);s=Kg(i[a],c)}return s}function cp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=rn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),cp(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:qg(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of up(i.path))o(i,s,c)}),t}function up(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=up(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Dg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zg=/^:[\w-]+$/,Ag=3,Ug=2,Wg=1,Hg=10,Vg=-2,wu=e=>e==="*";function qg(e,t){let n=e.split("/"),r=n.length;return n.some(wu)&&(r+=Vg),t&&(r+=Ug),n.filter(o=>!wu(o)).reduce((o,i)=>o+(zg.test(i)?Ag:i===""?Wg:Hg),r)}function Gg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Kg(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],c=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=Qg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;i.push({params:r,pathname:rn([o,d.pathname]),pathnameBase:tv(rn([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=rn([o,d.pathnameBase]))}return i}function Qg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let x=a[p]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[p];return v&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function Jg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ap(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Xg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ap(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ar(e):e;return{pathname:n?n.startsWith("/")?n:Zg(n,t):t,search:nv(r),hash:rv(o)}}function Zg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function $s(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ev(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dp(e,t){let n=ev(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ar(e):(o=no({},e),fe(!o.pathname||!o.pathname.includes("?"),$s("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),$s("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),$s("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}a=p>=0?t[p]:"/"}let c=Yg(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),tv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pp=["post","put","patch","delete"];new Set(pp);const iv=["get",...pp];new Set(iv);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}const Ja=C.createContext(null),sv=C.createContext(null),Ln=C.createContext(null),Xi=C.createContext(null),On=C.createContext({outlet:null,matches:[],isDataRoute:!1}),mp=C.createContext(null);function lv(e,t){let{relative:n}=t===void 0?{}:t;uo()||fe(!1);let{basename:r,navigator:o}=C.useContext(Ln),{hash:i,pathname:s,search:a}=gp(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:rn([r,s])),o.createHref({pathname:c,search:a,hash:i})}function uo(){return C.useContext(Xi)!=null}function Yi(){return uo()||fe(!1),C.useContext(Xi).location}function hp(e){C.useContext(Ln).static||C.useLayoutEffect(e)}function Xa(){let{isDataRoute:e}=C.useContext(On);return e?wv():av()}function av(){uo()||fe(!1);let e=C.useContext(Ja),{basename:t,future:n,navigator:r}=C.useContext(Ln),{matches:o}=C.useContext(On),{pathname:i}=Yi(),s=JSON.stringify(dp(o,n.v7_relativeSplatPath)),a=C.useRef(!1);return hp(()=>{a.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=fp(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:rn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,i,e])}function gp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Ln),{matches:o}=C.useContext(On),{pathname:i}=Yi(),s=JSON.stringify(dp(o,r.v7_relativeSplatPath));return C.useMemo(()=>fp(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function cv(e,t){return uv(e,t)}function uv(e,t,n,r){uo()||fe(!1);let{navigator:o}=C.useContext(Ln),{matches:i}=C.useContext(On),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Yi(),d;if(t){var p;let j=typeof t=="string"?ar(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||fe(!1),d=j}else d=u;let m=d.pathname||"/",v=m;if(c!=="/"){let j=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=$g(e,{pathname:v}),x=hv(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:rn([c,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:rn([c,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&x?C.createElement(Xi.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kt.Pop}},x):x}function dv(){let e=xv(),t=ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const fv=C.createElement(dv,null);class pv extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(On.Provider,{value:this.props.routeContext},C.createElement(mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mv(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Ja);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(On.Provider,{value:t},r)}function hv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||fe(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:v}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,m)=>{let v,y=!1,x=null,j=null;n&&(v=a&&p.route.id?a[p.route.id]:void 0,x=p.route.errorElement||fv,c&&(u<0&&m===0?(y=!0,j=null):u===m&&(y=!0,j=p.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,m+1)),f=()=>{let h;return v?h=x:y?h=j:p.route.Component?h=C.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,C.createElement(mv,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?C.createElement(pv,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var vp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vp||{}),bi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bi||{});function gv(e){let t=C.useContext(Ja);return t||fe(!1),t}function vv(e){let t=C.useContext(sv);return t||fe(!1),t}function yv(e){let t=C.useContext(On);return t||fe(!1),t}function yp(e){let t=yv(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function xv(){var e;let t=C.useContext(mp),n=vv(bi.UseRouteError),r=yp(bi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wv(){let{router:e}=gv(vp.UseNavigateStable),t=yp(bi.UseNavigateStable),n=C.useRef(!1);return hp(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ro({fromRouteId:t},i)))},[e,t])}function J(e){fe(!1)}function Sv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Kt.Pop,navigator:i,static:s=!1,future:a}=e;uo()&&fe(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:i,static:s,future:ro({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=ar(r));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:y="default"}=r,x=C.useMemo(()=>{let j=Qa(d,c);return j==null?null:{location:{pathname:j,search:p,hash:m,state:v,key:y},navigationType:o}},[c,d,p,m,v,y,o]);return x==null?null:C.createElement(Ln.Provider,{value:u},C.createElement(Xi.Provider,{children:n,value:x}))}function _v(e){let{children:t,location:n}=e;return cv(Ul(t),n)}new Promise(()=>{});function Ul(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,Ul(r.props.children,i));return}r.type!==J&&fe(!1),!r.props.index||!r.props.children||fe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ul(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wl(){return Wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wl.apply(this,arguments)}function Cv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function jv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Nv(e,t){return e.button===0&&(!t||t==="_self")&&!jv(e)}const kv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bv="6";try{window.__reactRouterVersion=bv}catch{}const Pv="startTransition",Su=Cm[Pv];function Ev(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=Mg({window:o,v5Compat:!0}));let s=i.current,[a,c]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=C.useCallback(p=>{u&&Su?Su(()=>c(p)):c(p)},[c,u]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.createElement(Sv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:c,to:u,preventScrollReset:d,unstable_viewTransition:p}=t,m=Cv(t,kv),{basename:v}=C.useContext(Ln),y,x=!1;if(typeof u=="string"&&Lv.test(u)&&(y=u,Tv))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Qa(w.pathname,v);w.origin===h.origin&&S!=null?u=S+w.search+w.hash:x=!0}catch{}let j=lv(u,{relative:o}),g=Ov(u,{replace:s,state:a,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||g(h)}return C.createElement("a",Wl({},m,{href:y||j,onClick:x||i?r:f,ref:n,target:c}))});var _u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_u||(_u={}));var Cu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cu||(Cu={}));function Ov(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,c=Xa(),u=Yi(),d=gp(e,{relative:s});return C.useCallback(p=>{if(Nv(p,n)){p.preventDefault();let m=r!==void 0?r:ki(u)===ki(d);c(e,{replace:m,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[u,c,d,r,o,n,e,i,s,a])}const Rv="_navbar_1itkf_3",Bv="_logo_1itkf_16",Mv="_hamburger_1itkf_23",Iv="_navLinks_1itkf_32",Fv="_navLink_1itkf_32",$v="_closeBtn_1itkf_48",Dv="_profileMenuContainer_1itkf_52",zv="_userIcon_1itkf_56",Av="_profileMenu_1itkf_52",Uv="_open_1itkf_108",ce={navbar:Rv,logo:Bv,hamburger:Mv,navLinks:Iv,navLink:Fv,closeBtn:$v,profileMenuContainer:Dv,userIcon:zv,profileMenu:Av,open:Uv};var xp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ju=Lt.createContext&&Lt.createContext(xp),Wv=["attr","size","title"];function Hv(e,t){if(e==null)return{};var n=Vv(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Vv(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Pi(){return Pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pi.apply(this,arguments)}function Nu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ei(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nu(Object(n),!0).forEach(function(r){qv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qv(e,t,n){return t=Gv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gv(e){var t=Kv(e,"string");return typeof t=="symbol"?t:t+""}function Kv(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wp(e){return e&&e.map((t,n)=>Lt.createElement(t.tag,Ei({key:n},t.attr),wp(t.child)))}function fo(e){return t=>Lt.createElement(Qv,Pi({attr:Ei({},e.attr)},t),wp(e.child))}function Qv(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=Hv(e,Wv),a=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Lt.createElement("svg",Pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:Ei(Ei({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Lt.createElement("title",null,i),e.children)};return ju!==void 0?Lt.createElement(ju.Consumer,null,n=>t(n)):t(xp)}function ku(e){return fo({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Sp(e){return fo({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function _p(e){return fo({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function bu(e){return fo({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Cp(e){return fo({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const Ya=C.createContext({authState:{token:null,username:null},setAuthState:()=>{}}),Jv=({children:e})=>{const[t,n]=C.useState({token:localStorage.getItem("token"),username:null});return C.useEffect(()=>{const r=localStorage.getItem("token");r&&n({token:r,username:null})},[]),l.jsx(Ya.Provider,{value:{authState:t,setAuthState:n},children:e})},Xv=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),{authState:o,setAuthState:i}=C.useContext(Ya),s=()=>{t(!e)},a=()=>{r(!n)},c=()=>{i({token:null,username:null}),localStorage.removeItem("token")};return l.jsxs("nav",{className:ce.navbar,children:[l.jsx("div",{className:ce.logo,children:l.jsx(D,{to:"/",children:l.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:ce.logoImage})})}),l.jsx("button",{className:ce.hamburger,onClick:s,children:e?l.jsx("span",{className:ce.closeIcon,children:"×"}):l.jsx("span",{children:"☰"})}),l.jsxs("ul",{className:`${ce.navLinks} ${e?ce.open:""}`,children:[l.jsx("li",{className:ce.closeBtn,onClick:s,children:"×"}),l.jsx("li",{children:l.jsx(D,{to:"/",className:ce.navLink,onClick:s,children:"Home"})}),l.jsx("li",{children:l.jsx(D,{to:"/components",className:ce.navLink,onClick:s,children:"Components"})}),l.jsx("li",{children:l.jsx(D,{to:"/utilities",className:ce.navLink,onClick:s,children:"Utilities"})}),l.jsx("li",{children:l.jsx(D,{to:"/documentation",className:ce.navLink,onClick:s,children:"Documentation"})}),l.jsx("li",{children:l.jsx(D,{to:"/examples",className:ce.navLink,onClick:s,children:"Examples"})}),l.jsx("li",{className:ce.userActions,children:o.token?l.jsxs("div",{className:ce.profileMenuContainer,children:[l.jsx(Cp,{className:ce.userIcon,onClick:a}),n&&l.jsxs("div",{className:ce.profileMenu,children:[l.jsx(D,{to:"/profile",className:ce.navLink,onClick:a,children:"Profile"}),l.jsx("button",{className:ce.navLink,onClick:c,children:"Logout"})]})]}):l.jsx(D,{to:"/signup",className:ce.navLink,onClick:s,children:"Sign Up"})})]})]})},Yv="_home_iomrs_3",Zv="_header_iomrs_7",ey="_logo_iomrs_16",ty="_features_iomrs_34",ny="_featureCard_iomrs_41",ry="_icon_iomrs_49",oy="_getStarted_iomrs_74",iy="_getStartedIcon_iomrs_81",pe={home:Yv,header:Zv,logo:ey,features:ty,featureCard:ny,icon:ry,getStarted:oy,getStartedIcon:iy},sy=()=>l.jsxs("div",{className:pe.home,children:[l.jsxs("header",{className:pe.header,children:[l.jsx("img",{src:"https://via.placeholder.com/100",alt:"Toolkit Logo",className:pe.logo}),l.jsx("h1",{children:"Build fast, responsive sites with Wells Fargo UI Toolkit"}),l.jsx("p",{children:"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."})]}),l.jsxs("div",{className:pe.features,children:[l.jsxs("div",{className:pe.featureCard,children:[l.jsx("div",{className:pe.icon,children:l.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 1"})}),l.jsx("h3",{children:"Responsive Design"}),l.jsx("p",{children:"Create responsive designs that look great on all devices, from smartphones to desktops."}),l.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),l.jsxs("div",{className:pe.featureCard,children:[l.jsx("div",{className:pe.icon,children:l.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 2"})}),l.jsx("h3",{children:"Reusable Components"}),l.jsx("p",{children:"Utilize a library of reusable components to maintain consistency across projects."}),l.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),l.jsxs("div",{className:pe.featureCard,children:[l.jsx("div",{className:pe.icon,children:l.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 3"})}),l.jsx("h3",{children:"Customization"}),l.jsx("p",{children:"Easily customize components to match your branding and design requirements."}),l.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),l.jsxs("div",{className:pe.featureCard,children:[l.jsx("div",{className:pe.icon,children:l.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 4"})}),l.jsx("h3",{children:"Accessibility"}),l.jsx("p",{children:"Ensure your applications are accessible to all users with built-in accessibility features."}),l.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]})]}),l.jsxs("div",{className:pe.getStarted,children:[l.jsx("div",{className:pe.getStartedIcon,children:l.jsx("img",{src:"https://via.placeholder.com/50",alt:"Get Started Icon"})}),l.jsx("h2",{children:"Get started any way you want"}),l.jsx("p",{children:"Jump right into building with the Wells Fargo UI Toolkit—use the CDN, install it via package manager, or download the source code."}),l.jsx("a",{href:"#",className:pe.getStartedLink,children:"Read installation docs >"})]})]}),ly="_componentsContainer_b3o92_3",ay="_heroSection_b3o92_7",cy="_searchBox_b3o92_32",uy="_sectionsContainer_b3o92_47",dy="_section_b3o92_47",fy="_sectionHeading_b3o92_58",py="_blocksContainer_b3o92_65",my="_block_b3o92_65",hy="_blockImage_b3o92_86",gy="_blockContent_b3o92_96",vy="_blockTitle_b3o92_100",yy="_blockCount_b3o92_105",P={componentsContainer:ly,heroSection:ay,searchBox:cy,sectionsContainer:uy,section:dy,sectionHeading:fy,blocksContainer:py,block:my,blockImage:hy,blockContent:gy,blockTitle:vy,blockCount:yy},xy="_heroSectionsPage_t37qd_3",wy="_heroSection_t37qd_3",Sy="_hero_t37qd_3",_y="_heroFeature_t37qd_17",Cy="_heroCTA_t37qd_23",jy="_container_t37qd_29",Ny="_title_t37qd_34",ky="_subtitle_t37qd_40",by="_ctaButton_t37qd_45",Py="_card_t37qd_58",Ey="_copyButton_t37qd_64",Ty="_codeBlock_t37qd_78",ue={heroSectionsPage:xy,heroSection:wy,hero:Sy,heroFeature:_y,heroCTA:Cy,container:jy,title:Ny,subtitle:ky,ctaButton:by,card:Py,copyButton:Ey,codeBlock:Ty},jp=()=>{const[e,t]=C.useState(null),n=o=>{navigator.clipboard.writeText(o),t(o),setTimeout(()=>t(null),2e3)},r=[{id:1,title:"Standard Hero Section",component:l.jsx("section",{className:ue.hero,children:l.jsxs("div",{className:ue.container,children:[l.jsx("h1",{className:ue.title,children:"Welcome to Our Website"}),l.jsx("p",{className:ue.subtitle,children:"Discover our amazing services and features."}),l.jsx("button",{className:ue.ctaButton,children:"Get Started"})]})}),code:`
<section className={styles.hero}>
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to Our Website</h1>
    <p className={styles.subtitle}>Discover our amazing services and features.</p>
    <button className={styles.ctaButton}>Get Started</button>
  </div>
</section>`},{id:2,title:"Feature Highlight Hero Section",component:l.jsx("section",{className:ue.heroFeature,children:l.jsxs("div",{className:ue.container,children:[l.jsx("h1",{className:ue.title,children:"Amazing Features"}),l.jsx("p",{className:ue.subtitle,children:"Explore the unique features we offer."}),l.jsx("button",{className:ue.ctaButton,children:"Learn More"})]})}),code:`
<section className={styles.heroFeature}>
  <div className={styles.container}>
    <h1 className={styles.title}>Amazing Features</h1>
    <p className={styles.subtitle}>Explore the unique features we offer.</p>
    <button className={styles.ctaButton}>Learn More</button>
  </div>
</section>`},{id:3,title:"Call to Action Card Hero Section",component:l.jsx("section",{className:ue.heroCTA,children:l.jsxs("div",{className:ue.container,children:[l.jsx("h1",{className:ue.title,children:"Join Us Today"}),l.jsx("p",{className:ue.subtitle,children:"Sign up now and start enjoying our services."}),l.jsx("div",{className:ue.card,children:l.jsx("button",{className:ue.ctaButton,children:"Sign Up"})})]})}),code:`
<section className={styles.heroCTA}>
  <div className={styles.container}>
    <h1 className={styles.title}>Join Us Today</h1>
    <p className={styles.subtitle}>Sign up now and start enjoying our services.</p>
    <div className={styles.card}>
      <button className={styles.ctaButton}>Sign Up</button>
    </div>
  </div>
</section>`}];return l.jsxs("div",{className:ue.heroSectionsPage,children:[l.jsx("h1",{children:"Hero Sections"}),r.map(o=>l.jsxs("div",{className:ue.heroSection,children:[l.jsx("h2",{children:o.title}),o.component,l.jsx("button",{className:ue.copyButton,onClick:()=>n(o.code),children:e===o.code?"Copied!":"Copy Code"}),l.jsx("pre",{className:ue.codeBlock,children:o.code})]},o.id))]})},Ly="_featureSectionContainer_kv7im_1",Oy="_mainHeading_kv7im_7",Ry="_featureGrid_kv7im_13",By="_featureBox_kv7im_19",My="_featureImage_kv7im_29",Iy="_featureTitle_kv7im_36",Fy="_featureDescription_kv7im_42",$y="_viewDemoButton_kv7im_48",ve={featureSectionContainer:Ly,mainHeading:Oy,featureGrid:Ry,featureBox:By,featureImage:My,featureTitle:Iy,featureDescription:Fy,viewDemoButton:$y},Np=()=>l.jsxs("div",{className:ve.featureSectionContainer,children:[l.jsx("h1",{className:ve.mainHeading,children:"Feature Sections"}),l.jsxs("div",{className:ve.featureGrid,children:[l.jsxs("div",{className:ve.featureBox,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 1",className:ve.featureImage}),l.jsx("h2",{className:ve.featureTitle,children:"Feature Section 1"}),l.jsx("p",{className:ve.featureDescription,children:"Discover amazing features to enhance your experience."}),l.jsx(D,{to:"/featuresection1",className:ve.viewDemoButton,children:"View Demo"})]}),l.jsxs("div",{className:ve.featureBox,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 2",className:ve.featureImage}),l.jsx("h2",{className:ve.featureTitle,children:"Feature Section 2"}),l.jsx("p",{className:ve.featureDescription,children:"Explore the capabilities of our feature-rich platform."}),l.jsx(D,{to:"/featuresection2",className:ve.viewDemoButton,children:"View Demo"})]}),l.jsxs("div",{className:ve.featureBox,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 3",className:ve.featureImage}),l.jsx("h2",{className:ve.featureTitle,children:"Feature Section 3"}),l.jsx("p",{className:ve.featureDescription,children:"Utilize advanced features for better productivity."}),l.jsx(D,{to:"/featuresection3",className:ve.viewDemoButton,children:"View Demo"})]})]})]}),Dy={},zy=()=>l.jsx("div",{className:Dy.CTASection}),Ay="_pricingPageContainer_sx37m_1",Uy="_mainHeading_sx37m_6",Wy="_pricingDemosContainer_sx37m_11",Hy="_pricingDemoBox_sx37m_17",Vy="_viewDemoButton_sx37m_25",fn={pricingPageContainer:Ay,mainHeading:Uy,pricingDemosContainer:Wy,pricingDemoBox:Hy,viewDemoButton:Vy},kp=()=>l.jsxs("div",{className:fn.pricingPageContainer,children:[l.jsx("h1",{className:fn.mainHeading,children:"Pricing Pages"}),l.jsxs("div",{className:fn.pricingDemosContainer,children:[l.jsxs("div",{className:fn.pricingDemoBox,children:[l.jsx("h2",{children:"Pricing Page 1"}),l.jsx("p",{children:"A simple and elegant pricing page for various plans."}),l.jsx(D,{to:"/pricingpage1",children:l.jsx("button",{className:fn.viewDemoButton,children:"View Demo"})})]}),l.jsxs("div",{className:fn.pricingDemoBox,children:[l.jsx("h2",{children:"Pricing Page 2"}),l.jsx("p",{children:"A modern and detailed pricing page with more features."}),l.jsx(D,{to:"/pricingpage2",children:l.jsx("button",{className:fn.viewDemoButton,children:"View Demo"})})]})]})]}),qy={},Gy=()=>l.jsx("div",{className:qy.HeaderSection}),Ky={},Qy=()=>l.jsx("div",{className:Ky.FooterSection}),Jy={},Xy=()=>l.jsx("div",{className:Jy.TestimonialsSection}),Yy={},Zy=()=>l.jsx("div",{className:Yy.FAQSection}),e0={},t0=()=>l.jsx("div",{className:e0.TeamSection}),n0={},r0=()=>l.jsx("div",{className:n0.NewsletterSection}),o0={},i0=()=>l.jsx("div",{className:o0.LandingPage}),s0="_aboutPageContainer_mi9ot_1",l0="_pageTitle_mi9ot_6",a0="_pageDescription_mi9ot_11",c0="_boxContainer_mi9ot_17",u0="_box_mi9ot_17",d0="_boxImage_mi9ot_38",f0="_boxContent_mi9ot_44",p0="_viewDemoButton_mi9ot_59",Ne={aboutPageContainer:s0,pageTitle:l0,pageDescription:a0,boxContainer:c0,box:u0,boxImage:d0,boxContent:f0,viewDemoButton:p0},bp=()=>l.jsxs("div",{className:Ne.aboutPageContainer,children:[l.jsx("h1",{className:Ne.pageTitle,children:"About Us"}),l.jsx("p",{className:Ne.pageDescription,children:"Explore the various aspects of our company, mission, and values through the following pages."}),l.jsxs("div",{className:Ne.boxContainer,children:[l.jsxs("div",{className:Ne.box,children:[l.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 1",className:Ne.boxImage}),l.jsxs("div",{className:Ne.boxContent,children:[l.jsx("h2",{children:"Company Overview"}),l.jsx("p",{children:"Learn more about our company's history, mission, and values."}),l.jsx(D,{to:"/aboutpage1",className:Ne.viewDemoButton,children:"View Demo"})]})]}),l.jsxs("div",{className:Ne.box,children:[l.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 2",className:Ne.boxImage}),l.jsxs("div",{className:Ne.boxContent,children:[l.jsx("h2",{children:"Our Team"}),l.jsx("p",{children:"Meet the dedicated team behind our company's success."}),l.jsx(D,{to:"/aboutpage2",className:Ne.viewDemoButton,children:"View Demo"})]})]}),l.jsxs("div",{className:Ne.box,children:[l.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 3",className:Ne.boxImage}),l.jsxs("div",{className:Ne.boxContent,children:[l.jsx("h2",{children:"Contact Us"}),l.jsx("p",{children:"Get in touch with us for any inquiries or support."}),l.jsx(D,{to:"/aboutpage3",className:Ne.viewDemoButton,children:"View Demo"})]})]})]})]}),m0={},h0=()=>l.jsx("div",{className:m0.ContactPage}),g0="_loginPageContainer_c2z96_1",v0="_pageBoxes_c2z96_6",y0="_pageBox_c2z96_6",x0="_demoButton_c2z96_34",$o={loginPageContainer:g0,pageBoxes:v0,pageBox:y0,demoButton:x0},Pp=()=>{const e=[{name:"Login Page 1",path:"/loginpage1"},{name:"Login Page 2",path:"/loginpage2"},{name:"Login Page 3",path:"/loginpage3"}];return l.jsxs("div",{className:$o.loginPageContainer,children:[l.jsx("h1",{children:"Login Pages"}),l.jsx("div",{className:$o.pageBoxes,children:e.map((t,n)=>l.jsxs("div",{className:$o.pageBox,children:[l.jsx("h2",{children:t.name}),l.jsxs("p",{children:["Explore the design and functionality of ",t.name,"."]}),l.jsx(D,{to:t.path,className:$o.demoButton,children:"View Demo"})]},n))})]})},w0={},S0=()=>l.jsx("div",{className:w0.RegistrationPage}),_0={},C0=()=>l.jsx("div",{className:_0.DashboardPage}),j0={},N0=()=>l.jsx("div",{className:j0.ProfilePage}),k0={},b0=()=>l.jsx("div",{className:k0.GridLayout}),P0={},E0=()=>l.jsx("div",{className:P0.FlexLayout}),T0={},L0=()=>l.jsx("div",{className:T0.LoginForm}),O0={},R0=()=>l.jsx("div",{className:O0.RegistrationForm}),B0={},M0=()=>l.jsx("div",{className:B0.ContactForm}),I0={},F0=()=>l.jsx("div",{className:I0.SubscriptionForm}),$0={},D0=()=>l.jsx("div",{className:$0.FeedbackForm}),z0={},A0=()=>l.jsx("div",{className:z0.SearchForm}),U0="_buttonPage_md1jm_1",W0="_buttonGrid_md1jm_5",H0="_buttonSection_md1jm_11",V0="_buttonExample_md1jm_23",q0="_button_md1jm_1",G0="_buttonText_md1jm_36",K0="_signOn1_md1jm_54",Q0="_signOn2_md1jm_72",J0="_learnMore_md1jm_91",X0="_learnMore2_md1jm_110",Y0="_copyButton_md1jm_131",Z0="_codeBlock_md1jm_145",e1="_toggleSwitch_md1jm_154",t1="_slider_md1jm_168",_t={buttonPage:U0,buttonGrid:W0,buttonSection:H0,buttonExample:V0,button:q0,buttonText:G0,signOn1:K0,signOn2:Q0,learnMore:J0,learnMore2:X0,copyButton:Y0,codeBlock:Z0,toggleSwitch:e1,slider:t1},n1=[{label:"Sign On",className:"buttonText",tsxCode:"<div className={styles.buttonText}>Sign On</div>",cssCode:`
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
    `}],Ep=()=>{const[e,t]=C.useState(null),[n,r]=C.useState({}),o=s=>{navigator.clipboard.writeText(s),t(s),setTimeout(()=>t(null),2e3)},i=s=>{r(a=>({...a,[s]:!a[s]}))};return l.jsxs("div",{className:_t.buttonPage,children:[l.jsx("h1",{children:"Button Components"}),l.jsx("div",{className:_t.buttonGrid,children:n1.map((s,a)=>l.jsxs("div",{className:_t.buttonSection,children:[l.jsx("div",{className:_t.buttonExample,children:l.jsx("div",{className:_t[s.className],children:s.label})}),l.jsxs("label",{className:_t.toggleSwitch,children:[l.jsx("input",{type:"checkbox",checked:n[a]||!1,onChange:()=>i(a)}),l.jsx("span",{className:_t.slider})]}),l.jsx("button",{className:_t.copyButton,onClick:()=>o(n[a]?s.cssCode:s.tsxCode),children:e===(n[a]?s.cssCode:s.tsxCode)?"Copied!":"Copy Code"}),l.jsx("pre",{className:_t.codeBlock,children:n[a]?s.cssCode:s.tsxCode})]},a))})]})},r1="_cardSectionContainer_6gyg9_1",o1="_cardsWrapper_6gyg9_5",i1="_cardWrapper_6gyg9_11",s1="_card_6gyg9_1",l1="_cardImage_6gyg9_28",a1="_cardContent_6gyg9_39",c1="_cardButton_6gyg9_43",u1="_toggleContainer_6gyg9_57",d1="_toggleButton_6gyg9_63",f1="_active_6gyg9_72",p1="_codeContainer_6gyg9_76",m1="_code_6gyg9_76",h1="_copyButton_6gyg9_93",g1="_copied_6gyg9_106",F={cardSectionContainer:r1,cardsWrapper:o1,cardWrapper:i1,card:s1,cardImage:l1,cardContent:a1,cardButton:c1,toggleContainer:u1,toggleButton:d1,active:f1,codeContainer:p1,code:m1,copyButton:h1,copied:g1},Tp=()=>{const[e,t]=C.useState(null),[n,r]=C.useState("tsx"),[o,i]=C.useState(!1),s=[{id:"1",title:"Earn up to 60,000 bonus points",description:"with the Choice Privileges® Mastercard® Credit Cards",buttonText:"Learn more",imageUrl:"150 x 150"},{id:"2",title:"Plan. Prepare. Enjoy home.",description:"Discover tools and tips to help make buying or refinancing a little easier",buttonText:"Get tips for homebuying",imageUrl:"150 x 150"},{id:"3",title:"Save. Invest. Retire well.",description:"Discover how to start saving to meet your retirement goals",buttonText:"Get ready for retirement",imageUrl:"150 x 150"},{id:"4",title:"Scams are on the rise. Protect yourself.",description:"Recognize the tell-tale signs of scams so you won't be the next victim.",buttonText:"See what to look for",imageUrl:"150 x 150"},{id:"5",title:"Investment Strategy update",description:"Weekly market insights and possible impacts on investors from Wells Fargo Investment Institute.",buttonText:"Get the report",imageUrl:"150 x 150"},{id:"6",title:"Get ready for retirement",description:"Discover how to start saving to meet your retirement goals.",buttonText:"Learn more",imageUrl:"150 x 150"}],a=u=>{navigator.clipboard.writeText(u),i(!0),setTimeout(()=>i(!1),2e3)},c=u=>{var v,y,x,j;if(u!==e)return null;const d=`<div className={styles.card}>
  <div className={styles.cardImage}>
    ${(v=s.find(g=>g.id===u))==null?void 0:v.imageUrl}
  </div>
  <div className={styles.cardContent}>
    <h3>${(y=s.find(g=>g.id===u))==null?void 0:y.title}</h3>
    <p>${(x=s.find(g=>g.id===u))==null?void 0:x.description}</p>
    <button className={styles.cardButton}>
      ${(j=s.find(g=>g.id===u))==null?void 0:j.buttonText}
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
}`;return l.jsxs("div",{className:F.codeContainer,children:[l.jsx("button",{className:`${F.copyButton} ${o?F.copied:""}`,onClick:()=>a(m),children:o?"Copied!":"Copy"}),l.jsx("pre",{className:F.code,children:m})]})};return l.jsxs("div",{className:F.cardSectionContainer,children:[l.jsx("h2",{children:"Card Section"}),l.jsx("h3",{children:"Rewards Cards"}),l.jsx("div",{className:F.cardsWrapper,children:s.slice(0,2).map(u=>l.jsxs("div",{className:F.cardWrapper,children:[l.jsxs("div",{className:F.card,children:[l.jsx("div",{className:F.cardImage,children:u.imageUrl}),l.jsxs("div",{className:F.cardContent,children:[l.jsx("h3",{children:u.title}),l.jsx("p",{children:u.description}),l.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),l.jsxs("div",{className:F.toggleContainer,children:[l.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),l.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),l.jsx("h3",{children:"Home Improvement Cards"}),l.jsx("div",{className:F.cardsWrapper,children:s.slice(2,4).map(u=>l.jsxs("div",{className:F.cardWrapper,children:[l.jsxs("div",{className:F.card,children:[l.jsx("div",{className:F.cardImage,children:u.imageUrl}),l.jsxs("div",{className:F.cardContent,children:[l.jsx("h3",{children:u.title}),l.jsx("p",{children:u.description}),l.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),l.jsxs("div",{className:F.toggleContainer,children:[l.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),l.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),l.jsx("h3",{children:"Security and Investment Cards"}),l.jsx("div",{className:F.cardsWrapper,children:s.slice(4,6).map(u=>l.jsxs("div",{className:F.cardWrapper,children:[l.jsxs("div",{className:F.card,children:[l.jsx("div",{className:F.cardImage,children:u.imageUrl}),l.jsxs("div",{className:F.cardContent,children:[l.jsx("h3",{children:u.title}),l.jsx("p",{children:u.description}),l.jsx("button",{className:F.cardButton,children:u.buttonText})]})]}),l.jsxs("div",{className:F.toggleContainer,children:[l.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="tsx"?F.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),l.jsx("div",{className:`${F.toggleButton} ${e===u.id&&n==="css"?F.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))})]})},v1="_navbarSection_b7mxw_1",y1="_navbar_b7mxw_1",x1="_navbarSecondary_b7mxw_5",w1="_logo_b7mxw_18",S1="_hamburger_b7mxw_25",_1="_navLinks_b7mxw_34",C1="_navLink_b7mxw_34",j1="_closeBtn_b7mxw_50",N1="_profileMenuContainer_b7mxw_54",k1="_userIcon_b7mxw_58",b1="_profileMenu_b7mxw_54",P1="_open_b7mxw_104",E1="_codeBlock_b7mxw_130",T1="_toggleContainer_b7mxw_158",L1="_toggleButton_b7mxw_164",O1="_active_b7mxw_191",A={navbarSection:v1,navbar:y1,navbarSecondary:x1,logo:w1,hamburger:S1,navLinks:_1,navLink:C1,closeBtn:j1,profileMenuContainer:N1,userIcon:k1,profileMenu:b1,open:P1,codeBlock:E1,toggleContainer:T1,toggleButton:L1,active:O1},Lp=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState(null),[s,a]=C.useState(!1),c=()=>{t(!e)},u=()=>{r(!n)},d=()=>{},p=g=>{o===g?a(!s):(i(g),a(!1))},m=g=>{navigator.clipboard.writeText(g).then(()=>{alert("Code copied to clipboard")})},v=`
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
`;return l.jsxs("div",{className:A.navbarSection,children:[l.jsx("h2",{children:"Navbar 1"}),l.jsxs("nav",{className:A.navbar,children:[l.jsx("div",{className:A.logo,children:l.jsx(D,{to:"/",children:l.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:A.logoImage})})}),l.jsx("button",{className:A.hamburger,onClick:c,children:e?l.jsx(bu,{}):l.jsx(ku,{})}),l.jsxs("ul",{className:`${A.navLinks} ${e?A.open:""}`,children:[l.jsx("li",{className:A.closeBtn,onClick:c,children:"×"}),l.jsx("li",{children:l.jsx(D,{to:"/",className:A.navLink,onClick:c,children:"Home"})}),l.jsx("li",{children:l.jsx(D,{to:"/services",className:A.navLink,onClick:c,children:"Services"})}),l.jsx("li",{children:l.jsx(D,{to:"/about",className:A.navLink,onClick:c,children:"About"})}),l.jsx("li",{children:l.jsx(D,{to:"/contact",className:A.navLink,onClick:c,children:"Contact"})}),l.jsxs("li",{className:A.userActions,children:[l.jsx(Cp,{className:A.userIcon,onClick:u}),n&&l.jsxs("div",{className:A.profileMenu,children:[l.jsx(D,{to:"/profile",className:A.navLink,onClick:u,children:"Profile"}),l.jsx("button",{className:A.navLink,onClick:d,children:"Logout"})]})]})]})]}),l.jsx("div",{className:A.toggleContainer,children:l.jsx("button",{className:`${A.toggleButton} ${o==="navbar1"&&s?A.active:""}`,onClick:()=>p("navbar1"),children:o==="navbar1"&&s?"CSS":"TSX"})}),o==="navbar1"&&l.jsxs("div",{className:A.codeBlock,children:[l.jsx("pre",{children:l.jsx("code",{children:s?y:v})}),l.jsxs("button",{onClick:()=>m(s?y:v),children:["Copy ",s?"CSS":"TSX"]})]}),l.jsx("div",{style:{marginBottom:"2rem"}}),l.jsx("h2",{children:"Navbar 2"}),l.jsxs("nav",{className:A.navbar,children:[l.jsx("div",{className:A.logo,children:l.jsx(D,{to:"/",children:l.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:A.logoImage})})}),l.jsx("button",{className:A.hamburger,onClick:c,children:e?l.jsx(bu,{}):l.jsx(ku,{})}),l.jsxs("ul",{className:`${A.navLinks} ${e?A.open:""}`,children:[l.jsx("li",{className:A.closeBtn,onClick:c,children:"×"}),l.jsx("li",{children:l.jsx(D,{to:"/",className:A.navLink,onClick:c,children:"Home"})}),l.jsx("li",{children:l.jsx(D,{to:"/features",className:A.navLink,onClick:c,children:"Features"})}),l.jsx("li",{children:l.jsx(D,{to:"/pricing",className:A.navLink,onClick:c,children:"Pricing"})}),l.jsx("li",{children:l.jsx(D,{to:"/faq",className:A.navLink,onClick:c,children:"FAQ"})})]})]}),l.jsx("div",{className:A.toggleContainer,children:l.jsx("button",{className:`${A.toggleButton} ${o==="navbar2"&&s?A.active:""}`,onClick:()=>p("navbar2"),children:o==="navbar2"&&s?"CSS":"TSX"})}),o==="navbar2"&&l.jsxs("div",{className:A.codeBlock,children:[l.jsx("pre",{children:l.jsx("code",{children:s?j:x})}),l.jsxs("button",{onClick:()=>m(s?j:x),children:["Copy ",s?"CSS":"TSX"]})]})]})},R1={},B1=()=>l.jsx("div",{className:R1.ImageGallery}),M1={},I1=()=>l.jsx("div",{className:M1.Chart}),F1={},$1=()=>l.jsx("div",{className:F1.Divider}),D1=()=>{const[e,t]=C.useState(""),n=[{name:"Hero Section",category:"Hero Section",count:12,component:jp},{name:"Feature Section",category:"Feature Section",count:18,component:Np},{name:"CTA Section",category:"CTA Section",count:11,component:zy},{name:"Pricing Page",category:"Pricing Page",count:13,component:kp},{name:"Header Section",category:"Header Section",count:10,component:Gy},{name:"Footer Section",category:"Footer Section",count:7,component:Qy},{name:"Testimonials Section",category:"Testimonials Section",count:7,component:Xy},{name:"FAQ Section",category:"FAQ Section",count:5,component:Zy},{name:"Team Section",category:"Team Section",count:5,component:t0},{name:"Newsletter Section",category:"Newsletter Section",count:7,component:r0}],r=[{name:"Landing Page",category:"Landing Page",count:5,component:i0},{name:"About Page",category:"About Page",count:8,component:bp},{name:"Contact Page",category:"Contact Page",count:4,component:h0},{name:"Login Page",category:"Login Page",count:4,component:Pp},{name:"Registration Page",category:"Registration Page",count:4,component:S0},{name:"Dashboard Page",category:"Dashboard Page",count:4,component:C0},{name:"Profile Page",category:"Profile Page",count:4,component:N0}],o=[{name:"Grid Layout",category:"Grid Layout",count:10,component:b0},{name:"Flex Layout",category:"Flex Layout",count:7,component:E0}],i=[{name:"Login Form",category:"Login Form",count:6,component:L0},{name:"Registration Form",category:"Registration Form",count:9,component:R0},{name:"Contact Form",category:"Contact Form",count:4,component:M0},{name:"Subscription Form",category:"Subscription Form",count:4,component:F0},{name:"Feedback Form",category:"Feedback Form",count:4,component:D0},{name:"Search Form",category:"Search Form",count:4,component:A0}],s=[{name:"Button",category:"Button",count:8,component:Ep},{name:"Card Section",category:"Card Section",count:12,component:Tp}],a=[{name:"Navbar Section",category:"Navbar Section",count:5,component:Lp}],c=[{name:"Image Gallery",category:"Image Gallery",count:4,component:B1}],u=[{name:"Chart",category:"Chart",count:4,component:I1}],d=[{name:"Divider",category:"Divider",count:3,component:$1}],p=m=>m.filter(v=>v.name.toLowerCase().includes(e.toLowerCase()));return l.jsxs("div",{className:P.componentsContainer,children:[l.jsxs("div",{className:P.heroSection,children:[l.jsx("h1",{children:"Huge collection of sections"}),l.jsx("h2",{children:"Infinite combinations"}),l.jsx("p",{children:"Discover a multitude of customizable options to craft pixel-perfect pages with ease."}),l.jsx("div",{className:P.searchBox,children:l.jsx("input",{type:"text",placeholder:"Search for multiple components...",value:e,onChange:m=>t(m.target.value)})})]}),l.jsxs("div",{className:P.sectionsContainer,children:[l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Page Sections"}),l.jsx("div",{className:P.blocksContainer,children:p(n).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Pages"}),l.jsx("div",{className:P.blocksContainer,children:p(r).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Layouts"}),l.jsx("div",{className:P.blocksContainer,children:p(o).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Forms"}),l.jsx("div",{className:P.blocksContainer,children:p(i).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"UI Elements"}),l.jsx("div",{className:P.blocksContainer,children:p(s).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Navigation"}),l.jsx("div",{className:P.blocksContainer,children:p(a).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Media"}),l.jsx("div",{className:P.blocksContainer,children:p(c).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Data Display"}),l.jsx("div",{className:P.blocksContainer,children:p(u).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]}),l.jsxs("div",{className:P.section,children:[l.jsx("h3",{className:P.sectionHeading,children:"Utility Components"}),l.jsx("div",{className:P.blocksContainer,children:p(d).map((m,v)=>l.jsx(D,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:P.blockLink,children:l.jsxs("div",{className:P.block,children:[l.jsx("div",{className:P.blockImage,children:"Image"}),l.jsxs("div",{className:P.blockContent,children:[l.jsx("p",{className:P.blockTitle,children:m.category}),l.jsxs("p",{className:P.blockCount,children:[m.count," components"]})]})]})},v))})]})]})]})},z1=()=>l.jsx("div",{children:"Utilities"}),A1=()=>l.jsx("div",{children:"Documentation"}),U1=()=>l.jsx("div",{children:"Examples"});function Op(e,t){return function(){return e.apply(t,arguments)}}const{toString:W1}=Object.prototype,{getPrototypeOf:Za}=Object,Zi=(e=>t=>{const n=W1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mt=e=>(e=e.toLowerCase(),t=>Zi(t)===e),es=e=>t=>typeof t===e,{isArray:cr}=Array,oo=es("undefined");function H1(e){return e!==null&&!oo(e)&&e.constructor!==null&&!oo(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Rp=mt("ArrayBuffer");function V1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Rp(e.buffer),t}const q1=es("string"),tt=es("function"),Bp=es("number"),ts=e=>e!==null&&typeof e=="object",G1=e=>e===!0||e===!1,ei=e=>{if(Zi(e)!=="object")return!1;const t=Za(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},K1=mt("Date"),Q1=mt("File"),J1=mt("Blob"),X1=mt("FileList"),Y1=e=>ts(e)&&tt(e.pipe),Z1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||tt(e.append)&&((t=Zi(e))==="formdata"||t==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"))},ex=mt("URLSearchParams"),[tx,nx,rx,ox]=["ReadableStream","Request","Response","Headers"].map(mt),ix=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function po(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),cr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Mp(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ip=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fp=e=>!oo(e)&&e!==Ip;function Hl(){const{caseless:e}=Fp(this)&&this||{},t={},n=(r,o)=>{const i=e&&Mp(t,o)||o;ei(t[i])&&ei(r)?t[i]=Hl(t[i],r):ei(r)?t[i]=Hl({},r):cr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&po(arguments[r],n);return t}const sx=(e,t,n,{allOwnKeys:r}={})=>(po(t,(o,i)=>{n&&tt(o)?e[i]=Op(o,n):e[i]=o},{allOwnKeys:r}),e),lx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ax=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},cx=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Za(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ux=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dx=e=>{if(!e)return null;if(cr(e))return e;let t=e.length;if(!Bp(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},fx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Za(Uint8Array)),px=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},mx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},hx=mt("HTMLFormElement"),gx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Pu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),vx=mt("RegExp"),$p=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};po(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},yx=e=>{$p(e,(t,n)=>{if(tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xx=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return cr(e)?r(e):r(String(e).split(t)),n},wx=()=>{},Sx=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ds="abcdefghijklmnopqrstuvwxyz",Eu="0123456789",Dp={DIGIT:Eu,ALPHA:Ds,ALPHA_DIGIT:Ds+Ds.toUpperCase()+Eu},_x=(e=16,t=Dp.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Cx(e){return!!(e&&tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jx=e=>{const t=new Array(10),n=(r,o)=>{if(ts(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=cr(r)?[]:{};return po(r,(s,a)=>{const c=n(s,o+1);!oo(c)&&(i[a]=c)}),t[o]=void 0,i}}return r};return n(e,0)},Nx=mt("AsyncFunction"),kx=e=>e&&(ts(e)||tt(e))&&tt(e.then)&&tt(e.catch),_={isArray:cr,isArrayBuffer:Rp,isBuffer:H1,isFormData:Z1,isArrayBufferView:V1,isString:q1,isNumber:Bp,isBoolean:G1,isObject:ts,isPlainObject:ei,isReadableStream:tx,isRequest:nx,isResponse:rx,isHeaders:ox,isUndefined:oo,isDate:K1,isFile:Q1,isBlob:J1,isRegExp:vx,isFunction:tt,isStream:Y1,isURLSearchParams:ex,isTypedArray:fx,isFileList:X1,forEach:po,merge:Hl,extend:sx,trim:ix,stripBOM:lx,inherits:ax,toFlatObject:cx,kindOf:Zi,kindOfTest:mt,endsWith:ux,toArray:dx,forEachEntry:px,matchAll:mx,isHTMLForm:hx,hasOwnProperty:Pu,hasOwnProp:Pu,reduceDescriptors:$p,freezeMethods:yx,toObjectSet:xx,toCamelCase:gx,noop:wx,toFiniteNumber:Sx,findKey:Mp,global:Ip,isContextDefined:Fp,ALPHABET:Dp,generateString:_x,isSpecCompliantForm:Cx,toJSONObject:jx,isAsyncFn:Nx,isThenable:kx};function O(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}_.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const zp=O.prototype,Ap={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ap[e]={value:e}});Object.defineProperties(O,Ap);Object.defineProperty(zp,"isAxiosError",{value:!0});O.from=(e,t,n,r,o,i)=>{const s=Object.create(zp);return _.toFlatObject(e,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),O.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const bx=null;function Vl(e){return _.isPlainObject(e)||_.isArray(e)}function Up(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Tu(e,t,n){return e?e.concat(t).map(function(o,i){return o=Up(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Px(e){return _.isArray(e)&&!e.some(Vl)}const Ex=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function ns(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,j){return!_.isUndefined(j[x])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(!c&&_.isBlob(y))throw new O("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,x,j){let g=y;if(y&&!j&&typeof y=="object"){if(_.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&Px(y)||(_.isFileList(y)||_.endsWith(x,"[]"))&&(g=_.toArray(y)))return x=Up(x),g.forEach(function(h,w){!(_.isUndefined(h)||h===null)&&t.append(s===!0?Tu([x],w,i):s===null?x:x+"[]",u(h))}),!1}return Vl(y)?!0:(t.append(Tu(j,x,i),u(y)),!1)}const p=[],m=Object.assign(Ex,{defaultVisitor:d,convertValue:u,isVisitable:Vl});function v(y,x){if(!_.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));p.push(y),_.forEach(y,function(g,f){(!(_.isUndefined(g)||g===null)&&o.call(t,g,_.isString(f)?f.trim():f,x,m))===!0&&v(g,x?x.concat(f):[f])}),p.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Lu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ec(e,t){this._pairs=[],e&&ns(e,this,t)}const Wp=ec.prototype;Wp.append=function(t,n){this._pairs.push([t,n])};Wp.toString=function(t){const n=t?function(r){return t.call(this,r,Lu)}:Lu;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Tx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Hp(e,t,n){if(!t)return e;const r=n&&n.encode||Tx,o=n&&n.serialize;let i;if(o?i=o(t,n):i=_.isURLSearchParams(t)?t.toString():new ec(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ou{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Vp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lx=typeof URLSearchParams<"u"?URLSearchParams:ec,Ox=typeof FormData<"u"?FormData:null,Rx=typeof Blob<"u"?Blob:null,Bx={isBrowser:!0,classes:{URLSearchParams:Lx,FormData:Ox,Blob:Rx},protocols:["http","https","file","blob","url","data"]},tc=typeof window<"u"&&typeof document<"u",Mx=(e=>tc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ix=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fx=tc&&window.location.href||"http://localhost",$x=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tc,hasStandardBrowserEnv:Mx,hasStandardBrowserWebWorkerEnv:Ix,origin:Fx},Symbol.toStringTag,{value:"Module"})),ft={...$x,...Bx};function Dx(e,t){return ns(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return ft.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function zx(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ax(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function qp(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),c=i>=n.length;return s=!s&&_.isArray(o)?o.length:s,c?(_.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!_.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&_.isArray(o[s])&&(o[s]=Ax(o[s])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,o)=>{t(zx(r),o,n,0)}),n}return null}function Ux(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const mo={transitional:Vp,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o?JSON.stringify(qp(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dx(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ns(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Ux(t)):t}],transformResponse:[function(t){const n=this.transitional||mo.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?O.from(a,O.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{mo.headers[e]={}});const Wx=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hx=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Wx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ru=Symbol("internals");function _r(e){return e&&String(e).trim().toLowerCase()}function ti(e){return e===!1||e==null?e:_.isArray(e)?e.map(ti):String(e)}function Vx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function zs(e,t,n,r,o){if(_.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Gx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Kx(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Ue{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,c,u){const d=_r(c);if(!d)throw new Error("header name must be a non-empty string");const p=_.findKey(o,d);(!p||o[p]===void 0||u===!0||u===void 0&&o[p]!==!1)&&(o[p||c]=ti(a))}const s=(a,c)=>_.forEach(a,(u,d)=>i(u,d,c));if(_.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(_.isString(t)&&(t=t.trim())&&!qx(t))s(Hx(t),n);else if(_.isHeaders(t))for(const[a,c]of t.entries())i(c,a,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=_r(t),t){const r=_.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Vx(o);if(_.isFunction(n))return n.call(this,o,r);if(_.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_r(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||zs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=_r(s),s){const a=_.findKey(r,s);a&&(!n||zs(r,r[a],a,n))&&(delete r[a],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||zs(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return _.forEach(this,(o,i)=>{const s=_.findKey(r,i);if(s){n[s]=ti(o),delete n[i];return}const a=t?Gx(i):String(i).trim();a!==i&&delete n[i],n[a]=ti(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ru]=this[Ru]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=_r(s);r[a]||(Kx(o,s),r[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}Ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Ue.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(Ue);function As(e,t){const n=this||mo,r=t||n,o=Ue.from(r.headers);let i=r.data;return _.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Gp(e){return!!(e&&e.__CANCEL__)}function ur(e,t,n){O.call(this,e??"canceled",O.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(ur,O,{__CANCEL__:!0});function Kp(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new O("Request failed with status code "+n.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Qx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Jx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];s||(s=u),n[o]=c,r[o]=u;let p=i,m=0;for(;p!==o;)m+=n[p++],p=p%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const v=d&&u-d;return v?Math.round(m*1e3/v):void 0}}function Xx(e,t){let n=0;const r=1e3/t;let o=null;return function(){const s=this===!0,a=Date.now();if(s||a-n>r)return o&&(clearTimeout(o),o=null),n=a,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(a-n)))}}const Ti=(e,t,n=3)=>{let r=0;const o=Jx(50,250);return Xx(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,c=s-r,u=o(c),d=s<=a;r=s;const p={loaded:s,total:a,progress:a?s/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:i,lengthComputable:a!=null};p[t?"download":"upload"]=!0,e(p)},n)},Yx=ft.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=_.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),Zx=ft.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),_.isString(r)&&s.push("path="+r),_.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ew(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tw(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Qp(e,t){return e&&!ew(t)?tw(e,t):t}const Bu=e=>e instanceof Ue?{...e}:e;function Pn(e,t){t=t||{};const n={};function r(u,d,p){return _.isPlainObject(u)&&_.isPlainObject(d)?_.merge.call({caseless:p},u,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function o(u,d,p){if(_.isUndefined(d)){if(!_.isUndefined(u))return r(void 0,u,p)}else return r(u,d,p)}function i(u,d){if(!_.isUndefined(d))return r(void 0,d)}function s(u,d){if(_.isUndefined(d)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,p){if(p in t)return r(u,d);if(p in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>o(Bu(u),Bu(d),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=c[d]||o,m=p(e[d],t[d],d);_.isUndefined(m)&&p!==a||(n[d]=m)}),n}const Jp=e=>{const t=Pn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=Ue.from(s),t.url=Hp(Qp(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(ft.hasStandardBrowserEnv||ft.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[u,...d]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(ft.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&Yx(t.url))){const u=o&&i&&Zx.read(i);u&&s.set(o,u)}return t},nw=typeof XMLHttpRequest<"u",rw=nw&&function(e){return new Promise(function(n,r){const o=Jp(e);let i=o.data;const s=Ue.from(o.headers).normalize();let{responseType:a}=o,c;function u(){o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let d=new XMLHttpRequest;d.open(o.method.toUpperCase(),o.url,!0),d.timeout=o.timeout;function p(){if(!d)return;const v=Ue.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};Kp(function(g){n(g),u()},function(g){r(g),u()},x),d=null}"onloadend"in d?d.onloadend=p:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(p)},d.onabort=function(){d&&(r(new O("Request aborted",O.ECONNABORTED,o,d)),d=null)},d.onerror=function(){r(new O("Network Error",O.ERR_NETWORK,o,d)),d=null},d.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const x=o.transitional||Vp;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new O(y,x.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,o,d)),d=null},i===void 0&&s.setContentType(null),"setRequestHeader"in d&&_.forEach(s.toJSON(),function(y,x){d.setRequestHeader(x,y)}),_.isUndefined(o.withCredentials)||(d.withCredentials=!!o.withCredentials),a&&a!=="json"&&(d.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&d.addEventListener("progress",Ti(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Ti(o.onUploadProgress)),(o.cancelToken||o.signal)&&(c=v=>{d&&(r(!v||v.type?new ur(null,e,d):v),d.abort(),d=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const m=Qx(o.url);if(m&&ft.protocols.indexOf(m)===-1){r(new O("Unsupported protocol "+m+":",O.ERR_BAD_REQUEST,e));return}d.send(i||null)})},ow=(e,t)=>{let n=new AbortController,r;const o=function(c){if(!r){r=!0,s();const u=c instanceof Error?c:this.reason;n.abort(u instanceof O?u:new ur(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new O(`timeout ${t} of ms exceeded`,O.ETIMEDOUT))},t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",o):c.unsubscribe(o))}),e=null)};e.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",o));const{signal:a}=n;return a.unsubscribe=s,[a,()=>{i&&clearTimeout(i),i=null}]},iw=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},sw=async function*(e,t,n){for await(const r of e)yield*iw(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Mu=(e,t,n,r,o)=>{const i=sw(e,t,o);let s=0;return new ReadableStream({type:"bytes",async pull(a){const{done:c,value:u}=await i.next();if(c){a.close(),r();return}let d=u.byteLength;n&&n(s+=d),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),i.return()}},{highWaterMark:2})},Iu=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},rs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Xp=rs&&typeof ReadableStream=="function",ql=rs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),lw=Xp&&(()=>{let e=!1;const t=new Request(ft.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Fu=64*1024,Gl=Xp&&!!(()=>{try{return _.isReadableStream(new Response("").body)}catch{}})(),Li={stream:Gl&&(e=>e.body)};rs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Li[t]&&(Li[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new O(`Response type '${t}' is not supported`,O.ERR_NOT_SUPPORT,r)})})})(new Response);const aw=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(_.isArrayBufferView(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await ql(e)).byteLength},cw=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??aw(t)},uw=rs&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:d,withCredentials:p="same-origin",fetchOptions:m}=Jp(e);u=u?(u+"").toLowerCase():"text";let[v,y]=o||i||s?ow([o,i],s):[],x,j;const g=()=>{!x&&setTimeout(()=>{v&&v.unsubscribe()}),x=!0};let f;try{if(c&&lw&&n!=="get"&&n!=="head"&&(f=await cw(d,r))!==0){let k=new Request(t,{method:"POST",body:r,duplex:"half"}),E;_.isFormData(r)&&(E=k.headers.get("content-type"))&&d.setContentType(E),k.body&&(r=Mu(k.body,Fu,Iu(f,Ti(c)),null,ql))}_.isString(p)||(p=p?"cors":"omit"),j=new Request(t,{...m,signal:v,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let h=await fetch(j);const w=Gl&&(u==="stream"||u==="response");if(Gl&&(a||w)){const k={};["status","statusText","headers"].forEach(b=>{k[b]=h[b]});const E=_.toFiniteNumber(h.headers.get("content-length"));h=new Response(Mu(h.body,Fu,a&&Iu(E,Ti(a,!0)),w&&g,ql),k)}u=u||"text";let S=await Li[_.findKey(Li,u)||"text"](h,e);return!w&&g(),y&&y(),await new Promise((k,E)=>{Kp(k,E,{data:S,headers:Ue.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:j})})}catch(h){throw g(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,e,j),{cause:h.cause||h}):O.from(h,h&&h.code,e,j)}}),Kl={http:bx,xhr:rw,fetch:uw};_.forEach(Kl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $u=e=>`- ${e}`,dw=e=>_.isFunction(e)||e===null||e===!1,Yp={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!dw(n)&&(r=Kl[(s=String(n)).toLowerCase()],r===void 0))throw new O(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map($u).join(`
`):" "+$u(i[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Kl};function Us(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ur(null,e)}function Du(e){return Us(e),e.headers=Ue.from(e.headers),e.data=As.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yp.getAdapter(e.adapter||mo.adapter)(e).then(function(r){return Us(e),r.data=As.call(e,e.transformResponse,r),r.headers=Ue.from(r.headers),r},function(r){return Gp(r)||(Us(e),r&&r.response&&(r.response.data=As.call(e,e.transformResponse,r.response),r.response.headers=Ue.from(r.response.headers))),Promise.reject(r)})}const Zp="1.7.2",nc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{nc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zu={};nc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Zp+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new O(o(s," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!zu[s]&&(zu[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};function fw(e,t,n){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],c=a===void 0||s(a,i,e);if(c!==!0)throw new O("option "+i+" must be "+c,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+i,O.ERR_BAD_OPTION)}}const Ql={assertOptions:fw,validators:nc},Dt=Ql.validators;class _n{constructor(t){this.defaults=t,this.interceptors={request:new Ou,response:new Ou}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Pn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Ql.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),o!=null&&(_.isFunction(o)?n.paramsSerializer={serialize:o}:Ql.assertOptions(o,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ue.concat(s,i);const a=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(c=c&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,p=0,m;if(!c){const y=[Du.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),m=y.length,d=Promise.resolve(n);p<m;)d=d.then(y[p++],y[p++]);return d}m=a.length;let v=n;for(p=0;p<m;){const y=a[p++],x=a[p++];try{v=y(v)}catch(j){x.call(this,j);break}}try{d=Du.call(this,v)}catch(y){return Promise.reject(y)}for(p=0,m=u.length;p<m;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=Pn(this.defaults,t);const n=Qp(t.baseURL,t.url);return Hp(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){_n.prototype[t]=function(n,r){return this.request(Pn(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Pn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}_n.prototype[t]=n(),_n.prototype[t+"Form"]=n(!0)});class rc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new ur(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new rc(function(o){t=o}),cancel:t}}}function pw(e){return function(n){return e.apply(null,n)}}function mw(e){return _.isObject(e)&&e.isAxiosError===!0}const Jl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jl).forEach(([e,t])=>{Jl[t]=e});function em(e){const t=new _n(e),n=Op(_n.prototype.request,t);return _.extend(n,_n.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return em(Pn(e,o))},n}const ae=em(mo);ae.Axios=_n;ae.CanceledError=ur;ae.CancelToken=rc;ae.isCancel=Gp;ae.VERSION=Zp;ae.toFormData=ns;ae.AxiosError=O;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=pw;ae.isAxiosError=mw;ae.mergeConfig=Pn;ae.AxiosHeaders=Ue;ae.formToJSON=e=>qp(_.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=Yp.getAdapter;ae.HttpStatusCode=Jl;ae.default=ae;const hw="_signUpContainer_13jij_3",gw="_signUpBox_13jij_11",vw="_passwordLabel_13jij_42",yw="_eyeIcon_13jij_55",xw="_saveUsername_13jij_64",ww="_error_13jij_74",Sw="_signUpButton_13jij_79",_w="_loginButton_13jij_90",Cw="_footerBox_13jij_98",Ct={signUpContainer:hw,signUpBox:gw,passwordLabel:vw,eyeIcon:yw,saveUsername:xw,error:ww,signUpButton:Sw,loginButton:_w,footerBox:Cw},jw=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[s,a]=C.useState(null),c=Xa(),u=async d=>{d.preventDefault();try{await ae.post("http://localhost:5000/api/signup",{username:e,password:n}),c("/login")}catch(p){a("Sign up failed. Please try again."),console.error("Sign up failed",p)}};return l.jsx("div",{className:Ct.signUpContainer,children:l.jsxs("div",{className:Ct.signUpBox,children:[l.jsx("h2",{children:"Good morning"}),l.jsx("p",{children:"Sign on to manage your accounts."}),l.jsxs("form",{onSubmit:u,children:[l.jsxs("label",{children:["Username",l.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:d=>t(d.target.value),required:!0})]}),l.jsxs("label",{className:Ct.passwordLabel,children:["Password",l.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value),required:!0}),l.jsx("span",{className:Ct.eyeIcon,onClick:()=>i(!o),children:o?l.jsx(Sp,{}):l.jsx(_p,{})})]}),l.jsxs("div",{className:Ct.saveUsername,children:[l.jsx("input",{type:"checkbox",id:"saveUsername"}),l.jsx("label",{htmlFor:"saveUsername",children:"Save username"})]}),s&&l.jsx("p",{className:Ct.error,children:s}),l.jsx("button",{type:"submit",className:Ct.signUpButton,children:"Sign Up"}),l.jsx("button",{type:"button",className:Ct.loginButton,onClick:()=>c("/login"),children:"Login"})]}),l.jsxs("div",{className:Ct.footerBox,children:[l.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),l.jsx("a",{href:"/security",children:"Security Center"}),l.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},Nw="_loginContainer_xd0hi_3",kw="_loginBox_xd0hi_11",bw="_passwordLabel_xd0hi_42",Pw="_eyeIcon_xd0hi_55",Ew="_saveUsername_xd0hi_64",Tw="_error_xd0hi_74",Lw="_loginButton_xd0hi_79",Ow="_signUpButton_xd0hi_90",Rw="_footerBox_xd0hi_98",zt={loginContainer:Nw,loginBox:kw,passwordLabel:bw,eyeIcon:Pw,saveUsername:Ew,error:Tw,loginButton:Lw,signUpButton:Ow,footerBox:Rw},Bw=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(!1),[s,a]=C.useState(null),{setAuthState:c}=C.useContext(Ya),u=Xa(),d=async p=>{p.preventDefault();try{const m=await ae.post("http://localhost:5000/api/login",{username:e,password:n}),{token:v}=m.data;c({token:v,username:e}),localStorage.setItem("token",v),u("/")}catch(m){a("Login failed. Please check your username and password."),console.error("Login failed",m)}};return l.jsx("div",{className:zt.loginContainer,children:l.jsxs("div",{className:zt.loginBox,children:[l.jsx("h2",{children:"Welcome back"}),l.jsx("p",{children:"Sign on to manage your accounts."}),l.jsxs("form",{onSubmit:d,children:[l.jsxs("label",{children:["Username",l.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:p=>t(p.target.value),required:!0})]}),l.jsxs("label",{className:zt.passwordLabel,children:["Password",l.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:p=>r(p.target.value),required:!0}),l.jsx("span",{className:zt.eyeIcon,onClick:()=>i(!o),children:o?l.jsx(Sp,{}):l.jsx(_p,{})})]}),s&&l.jsx("p",{className:zt.error,children:s}),l.jsx("button",{type:"submit",className:zt.loginButton,children:"Sign In"}),l.jsx("button",{type:"button",className:zt.signUpButton,onClick:()=>u("/signup"),children:"Sign Up"})]}),l.jsxs("div",{className:zt.footerBox,children:[l.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),l.jsx("a",{href:"/security",children:"Security Center"}),l.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},Mw="_footer_bjc8t_3",Iw="_container_bjc8t_9",Fw="_footerLinks_bjc8t_15",Ws={footer:Mw,container:Iw,footerLinks:Fw},$w=()=>l.jsx("footer",{className:Ws.footer,children:l.jsx("div",{className:Ws.container,children:l.jsxs("ul",{className:Ws.footerLinks,children:[l.jsx("li",{children:l.jsx("a",{href:"#",children:"Privacy, Cookies, Security & Legal"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Notice of Data Collection"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"General Terms of Use"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Online Access Agreement"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Ad Choices"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Report Fraud"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"About Wells Fargo"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Careers"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Diversity and Accessibility"})}),l.jsx("li",{children:l.jsx("a",{href:"#",children:"Sitemap"})})]})})});var os={},is={},oc={},Hs={},Vs={exports:{}},qs,Au;function Dw(){if(Au)return qs;Au=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return qs=e,qs}var Gs,Uu;function zw(){if(Uu)return Gs;Uu=1;var e=Dw();function t(){}function n(){}return n.resetWarningCache=t,Gs=function(){function r(s,a,c,u,d,p){if(p!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Gs}var Wu;function Aw(){return Wu||(Wu=1,Vs.exports=zw()()),Vs.exports}var Hu;function Uw(){return Hu||(Hu=1,function(e){(function(t,n){n(e,C,Aw())})(Ku,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=y;var o=s(n),i=s(r);function s(f){return f&&f.__esModule?f:{default:f}}var a=Object.assign||function(f){for(var h=1;h<arguments.length;h++){var w=arguments[h];for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&(f[S]=w[S])}return f};function c(f,h){var w={};for(var S in f)h.indexOf(S)>=0||Object.prototype.hasOwnProperty.call(f,S)&&(w[S]=f[S]);return w}function u(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}var d=function(){function f(h,w){for(var S=0;S<w.length;S++){var k=w[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(h,k.key,k)}}return function(h,w,S){return w&&f(h.prototype,w),S&&f(h,S),h}}();function p(f,h){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:f}function m(f,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);f.prototype=Object.create(h&&h.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(f,h):f.__proto__=h)}var v=!1;function y(f){v=f}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){y(!0)}}))}catch{}function x(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return v?f:f.capture}function j(f){if("touches"in f){var h=f.touches[0],w=h.pageX,S=h.pageY;return{x:w,y:S}}var k=f.screenX,E=f.screenY;return{x:k,y:E}}var g=function(f){m(h,f);function h(){var w;u(this,h);for(var S=arguments.length,k=Array(S),E=0;E<S;E++)k[E]=arguments[E];var b=p(this,(w=h.__proto__||Object.getPrototypeOf(h)).call.apply(w,[this].concat(k)));return b._handleSwipeStart=b._handleSwipeStart.bind(b),b._handleSwipeMove=b._handleSwipeMove.bind(b),b._handleSwipeEnd=b._handleSwipeEnd.bind(b),b._onMouseDown=b._onMouseDown.bind(b),b._onMouseMove=b._onMouseMove.bind(b),b._onMouseUp=b._onMouseUp.bind(b),b._setSwiperRef=b._setSwiperRef.bind(b),b}return d(h,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,x({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,x({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(S){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(S))}},{key:"_onMouseMove",value:function(S){this.mouseDown&&this._handleSwipeMove(S)}},{key:"_onMouseUp",value:function(S){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(S)}},{key:"_handleSwipeStart",value:function(S){var k=j(S),E=k.x,b=k.y;this.moveStart={x:E,y:b},this.props.onSwipeStart(S)}},{key:"_handleSwipeMove",value:function(S){if(this.moveStart){var k=j(S),E=k.x,b=k.y,Q=E-this.moveStart.x,M=b-this.moveStart.y;this.moving=!0;var We=this.props.onSwipeMove({x:Q,y:M},S);We&&S.cancelable&&S.preventDefault(),this.movePosition={deltaX:Q,deltaY:M}}}},{key:"_handleSwipeEnd",value:function(S){this.props.onSwipeEnd(S);var k=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-k?this.props.onSwipeLeft(1,S):this.movePosition.deltaX>k&&this.props.onSwipeRight(1,S),this.movePosition.deltaY<-k?this.props.onSwipeUp(1,S):this.movePosition.deltaY>k&&this.props.onSwipeDown(1,S)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(S){this.swiper=S,this.props.innerRef(S)}},{key:"render",value:function(){var S=this.props;S.tagName;var k=S.className,E=S.style,b=S.children;S.allowMouseEvents,S.onSwipeUp,S.onSwipeDown,S.onSwipeLeft,S.onSwipeRight,S.onSwipeStart,S.onSwipeMove,S.onSwipeEnd,S.innerRef,S.tolerance;var Q=c(S,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,a({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:k,style:E},Q),b)}}]),h}(n.Component);g.displayName="ReactSwipe",g.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},g.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=g})}(Hs)),Hs}(function(e){(function(t,n){n(e,Uw())})(Ku,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})(oc);var ho={},tm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(i=o(i,r(a)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var a in i)t.call(i,a)&&i[a]&&(s=o(s,a));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(tm);var Ww=tm.exports;Object.defineProperty(ho,"__esModule",{value:!0});ho.default=void 0;var At=Hw(Ww);function Hw(e){return e&&e.__esModule?e:{default:e}}function Vw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var qw={ROOT:function(t){return(0,At.default)(Vw({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,At.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,At.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,At.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,At.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,At.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,At.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,At.default)({dot:!0,selected:t})}};ho.default=qw;var go={},ss={};Object.defineProperty(ss,"__esModule",{value:!0});ss.outerWidth=void 0;var Gw=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};ss.outerWidth=Gw;var dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.default=void 0;var Kw=function(t,n,r){var o=t===0?t:t+n,i=r==="horizontal"?[o,0,0]:[0,o,0],s="translate3d",a="("+i.join(",")+")";return s+a};dr.default=Kw;var vo={};Object.defineProperty(vo,"__esModule",{value:!0});vo.default=void 0;var Qw=function(){return window};vo.default=Qw;Object.defineProperty(go,"__esModule",{value:!0});go.default=void 0;var it=Yw(C),pn=ls(ho),Jw=ss,Vu=ls(dr),Xw=ls(oc),Do=ls(vo);function ls(e){return e&&e.__esModule?e:{default:e}}function nm(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return nm=function(){return e},e}function Yw(e){if(e&&e.__esModule)return e;if(e===null||Fr(e)!=="object"&&typeof e!="function")return{default:e};var t=nm();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Fr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fr=function(n){return typeof n}:Fr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fr(e)}function Xl(){return Xl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}function Zw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function eS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tS(e,t,n){return t&&eS(e.prototype,t),e}function nS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Yl(e,t)}function Yl(e,t){return Yl=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Yl(e,t)}function rS(e){var t=iS();return function(){var r=Oi(e),o;if(t){var i=Oi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return oS(this,o)}}function oS(e,t){return t&&(Fr(t)==="object"||typeof t=="function")?t:Oe(e)}function Oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Oi(e){return Oi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Oi(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var sS=function(t){return t.hasOwnProperty("key")},ic=function(e){nS(n,e);var t=rS(n);function n(r){var o;return Zw(this,n),o=t.call(this,r),ke(Oe(o),"itemsWrapperRef",void 0),ke(Oe(o),"itemsListRef",void 0),ke(Oe(o),"thumbsRef",void 0),ke(Oe(o),"setItemsWrapperRef",function(i){o.itemsWrapperRef=i}),ke(Oe(o),"setItemsListRef",function(i){o.itemsListRef=i}),ke(Oe(o),"setThumbsRef",function(i,s){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[s]=i}),ke(Oe(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var i=it.Children.count(o.props.children),s=o.itemsWrapperRef.clientWidth,a=o.props.thumbWidth?o.props.thumbWidth:(0,Jw.outerWidth)(o.thumbsRef[0]),c=Math.floor(s/a),u=c<i,d=u?i-c:0;o.setState(function(p,m){return{itemSize:a,visibleItems:c,firstItem:u?o.getFirstItem(m.selectedItem):0,lastPosition:d,showArrows:u}})}}),ke(Oe(o),"handleClickItem",function(i,s,a){if(!sS(a)||a.key==="Enter"){var c=o.props.onSelectItem;typeof c=="function"&&c(i,s)}}),ke(Oe(o),"onSwipeStart",function(){o.setState({swiping:!0})}),ke(Oe(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),ke(Oe(o),"onSwipeMove",function(i){var s=i.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var a=0,c=it.Children.count(o.props.children),u=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(c-o.state.visibleItems,0),p=-d*100/o.state.visibleItems;u===a&&s>0&&(s=0),u===p&&s<0&&(s=0);var m=o.itemsWrapperRef.clientWidth,v=u+100/(m/s);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(y){o.itemsListRef.style[y]=(0,Vu.default)(v,"%",o.props.axis)}),!0}),ke(Oe(o),"slideRight",function(i){o.moveTo(o.state.firstItem-(typeof i=="number"?i:1))}),ke(Oe(o),"slideLeft",function(i){o.moveTo(o.state.firstItem+(typeof i=="number"?i:1))}),ke(Oe(o),"moveTo",function(i){i=i<0?0:i,i=i>=o.state.lastPosition?o.state.lastPosition:i,o.setState({firstItem:i})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return tS(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Do.default)().addEventListener("resize",this.updateSizes),(0,Do.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Do.default)().removeEventListener("resize",this.updateSizes),(0,Do.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var i=o;return o>=this.state.lastPosition&&(i=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),o<this.state.firstItem&&(i=o),i}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(i,s){var a=pn.default.ITEM(!1,s===o.state.selectedItem),c={key:s,ref:function(d){return o.setThumbsRef(d,s)},className:a,onClick:o.handleClickItem.bind(o,s,o.props.children[s]),onKeyDown:o.handleClickItem.bind(o,s,o.props.children[s]),"aria-label":"".concat(o.props.labels.item," ").concat(s+1),style:{width:o.props.thumbWidth}};return it.default.createElement("li",Xl({},c,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var i=it.Children.count(this.props.children)>1,s=this.state.showArrows&&this.state.firstItem>0,a=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},u=-this.state.firstItem*(this.state.itemSize||0),d=(0,Vu.default)(u,"px",this.props.axis),p=this.props.transitionTime+"ms";return c={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p},it.default.createElement("div",{className:pn.default.CAROUSEL(!1)},it.default.createElement("div",{className:pn.default.WRAPPER(!1),ref:this.setItemsWrapperRef},it.default.createElement("button",{type:"button",className:pn.default.ARROW_PREV(!s),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),i?it.default.createElement(Xw.default,{tagName:"ul",className:pn.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):it.default.createElement("ul",{className:pn.default.SLIDER(!1,this.state.swiping),ref:function(v){return o.setItemsListRef(v)},style:c},this.renderItems()),it.default.createElement("button",{type:"button",className:pn.default.ARROW_NEXT(!a),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(it.Component);go.default=ic;ke(ic,"displayName","Thumbs");ke(ic,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var as={};Object.defineProperty(as,"__esModule",{value:!0});as.default=void 0;var lS=function(){return document};as.default=lS;var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0});Ve.setPosition=Ve.getPosition=Ve.isKeyboardEvent=Ve.defaultStatusFormatter=Ve.noop=void 0;var aS=C,cS=uS(dr);function uS(e){return e&&e.__esModule?e:{default:e}}var dS=function(){};Ve.noop=dS;var fS=function(t,n){return"".concat(t," of ").concat(n)};Ve.defaultStatusFormatter=fS;var pS=function(t){return t?t.hasOwnProperty("key"):!1};Ve.isKeyboardEvent=pS;var mS=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=aS.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,i=r-1;return t&&(t!==i||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===i&&(o+=100-n.centerSlidePercentage),o}return-t*100};Ve.getPosition=mS;var hS=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,cS.default)(t,"%",n)}),r};Ve.setPosition=hS;var yt={};Object.defineProperty(yt,"__esModule",{value:!0});yt.fadeAnimationHandler=yt.slideStopSwipingHandler=yt.slideSwipeAnimationHandler=yt.slideAnimationHandler=void 0;var rm=C,gS=vS(dr),xt=Ve;function vS(e){return e&&e.__esModule?e:{default:e}}function qu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function gn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qu(Object(n),!0).forEach(function(r){yS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xS=function(t,n){var r={},o=n.selectedItem,i=o,s=rm.Children.count(t.children)-1,a=t.infiniteLoop&&(o<0||o>s);if(a)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,xt.setPosition)(-(s+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,xt.setPosition)(-(s+2)*100,t.axis):i>s&&(r.itemListStyle=(0,xt.setPosition)(0,t.axis)),r;var c=(0,xt.getPosition)(o,t),u=(0,gS.default)(c,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=gn(gn({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};yt.slideAnimationHandler=xS;var wS=function(t,n,r,o){var i={},s=n.axis==="horizontal",a=rm.Children.count(n.children),c=0,u=(0,xt.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,xt.getPosition)(a-1,n)-100:(0,xt.getPosition)(a-1,n),p=s?t.x:t.y,m=p;u===c&&p>0&&(m=0),u===d&&p<0&&(m=0);var v=u+100/(r.itemSize/m),y=Math.abs(p)>n.swipeScrollTolerance;return n.infiniteLoop&&y&&(r.selectedItem===0&&v>-100?v-=a*100:r.selectedItem===a-1&&v<-a*100&&(v+=a*100)),(!n.preventMovementUntilSwipeScrollTolerance||y||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),i.itemListStyle=(0,xt.setPosition)(v,n.axis)),y&&!r.cancelClick&&o({cancelClick:!0}),i};yt.slideSwipeAnimationHandler=wS;var SS=function(t,n){var r=(0,xt.getPosition)(n.selectedItem,t),o=(0,xt.setPosition)(r,t.axis);return{itemListStyle:o}};yt.slideStopSwipingHandler=SS;var _S=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(i=gn(gn({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:gn(gn({},i),{},{opacity:1,position:"relative"}),prevStyle:gn({},i)}};yt.fadeAnimationHandler=_S;Object.defineProperty(is,"__esModule",{value:!0});is.default=void 0;var q=NS(C),CS=yo(oc),Pt=yo(ho),jS=yo(go),zo=yo(as),Ao=yo(vo),br=Ve,Ri=yt;function yo(e){return e&&e.__esModule?e:{default:e}}function om(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return om=function(){return e},e}function NS(e){if(e&&e.__esModule)return e;if(e===null||$r(e)!=="object"&&typeof e!="function")return{default:e};var t=om();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function $r(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$r=function(n){return typeof n}:$r=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$r(e)}function Zl(){return Zl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function Gu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gu(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function PS(e,t,n){return t&&bS(e.prototype,t),e}function ES(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ea(e,t)}function ea(e,t){return ea=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},ea(e,t)}function TS(e){var t=OS();return function(){var r=Bi(e),o;if(t){var i=Bi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return LS(this,o)}}function LS(e,t){return t&&($r(t)==="object"||typeof t=="function")?t:$(e)}function $(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function OS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Bi(e){return Bi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Bi(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var sc=function(e){ES(n,e);var t=TS(n);function n(r){var o;kS(this,n),o=t.call(this,r),B($(o),"thumbsRef",void 0),B($(o),"carouselWrapperRef",void 0),B($(o),"listRef",void 0),B($(o),"itemsRef",void 0),B($(o),"timer",void 0),B($(o),"animationHandler",void 0),B($(o),"setThumbsRef",function(s){o.thumbsRef=s}),B($(o),"setCarouselWrapperRef",function(s){o.carouselWrapperRef=s}),B($(o),"setListRef",function(s){o.listRef=s}),B($(o),"setItemsRef",function(s,a){o.itemsRef||(o.itemsRef=[]),o.itemsRef[a]=s}),B($(o),"autoPlay",function(){q.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),B($(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),B($(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),B($(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),B($(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),B($(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,zo.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,zo.default)().activeElement)):!1}),B($(o),"navigateWithKeyboard",function(s){if(o.isFocusWithinTheCarousel()){var a=o.props.axis,c=a==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=c?u.ArrowRight:u.ArrowDown,p=c?u.ArrowLeft:u.ArrowUp;d===s.keyCode?o.increment():p===s.keyCode&&o.decrement()}}),B($(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var s=o.props.axis==="horizontal",a=o.itemsRef[0];if(a){var c=s?a.clientWidth:a.clientHeight;o.setState({itemSize:c}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),B($(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),B($(o),"handleClickItem",function(s,a){if(q.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(s,a),s!==o.state.selectedItem&&o.setState({selectedItem:s})}}),B($(o),"handleOnChange",function(s,a){q.Children.count(o.props.children)<=1||o.props.onChange(s,a)}),B($(o),"handleClickThumb",function(s,a){o.props.onClickThumb(s,a),o.moveTo(s)}),B($(o),"onSwipeStart",function(s){o.setState({swiping:!0}),o.props.onSwipeStart(s)}),B($(o),"onSwipeEnd",function(s){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(s),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),B($(o),"onSwipeMove",function(s,a){o.props.onSwipeMove(a);var c=o.props.swipeAnimationHandler(s,o.props,o.state,o.setState.bind($(o)));return o.setState(st({},c)),!!Object.keys(c).length}),B($(o),"decrement",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof s=="number"?s:1))}),B($(o),"increment",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof s=="number"?s:1))}),B($(o),"moveTo",function(s){if(typeof s=="number"){var a=q.Children.count(o.props.children)-1;s<0&&(s=o.props.infiniteLoop?a:0),s>a&&(s=o.props.infiniteLoop?0:a),o.selectItem({selectedItem:s}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),B($(o),"onClickNext",function(){o.increment(1)}),B($(o),"onClickPrev",function(){o.decrement(1)}),B($(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),B($(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),B($(o),"changeItem",function(s){return function(a){(!(0,br.isKeyboardEvent)(a)||a.key==="Enter")&&o.moveTo(s)}}),B($(o),"selectItem",function(s){o.setState(st({previousItem:o.state.selectedItem},s),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(s.selectedItem,q.Children.toArray(o.props.children)[s.selectedItem])}),B($(o),"getInitialImage",function(){var s=o.props.selectedItem,a=o.itemsRef&&o.itemsRef[s],c=a&&a.getElementsByTagName("img")||[];return c[0]}),B($(o),"getVariableItemHeight",function(s){var a=o.itemsRef&&o.itemsRef[s];if(o.state.hasMount&&a&&a.children.length){var c=a.children[0].getElementsByTagName("img")||[];if(c.length>0){var u=c[0];if(!u.complete){var d=function v(){o.forceUpdate(),u.removeEventListener("load",v)};u.addEventListener("load",d)}}var p=c[0]||a.children[0],m=p.clientHeight;return m>0?m:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Ri.fadeAnimationHandler||Ri.slideAnimationHandler,o.state=st(st({},i),o.animationHandler(r,i)),o}return PS(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,i){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(st({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&q.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=o.getInitialImage();i&&!i.complete?i.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,Ao.default)().addEventListener("resize",this.updateSizes),(0,Ao.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,zo.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,Ao.default)().removeEventListener("resize",this.updateSizes),(0,Ao.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,zo.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var i=this;return this.props.children?q.Children.map(this.props.children,function(s,a){var c=a===i.state.selectedItem,u=a===i.state.previousItem,d=c&&i.state.selectedStyle||u&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(d=st(st({},d),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(d=st(st({},d),{},{pointerEvents:"none"}));var p={ref:function(v){return i.setItemsRef(v,a)},key:"itemKey"+a+(o?"clone":""),className:Pt.default.ITEM(!0,a===i.state.selectedItem,a===i.state.previousItem),onClick:i.handleClickItem.bind(i,a,s),style:d};return q.default.createElement("li",p,i.props.renderItem(s,{isSelected:a===i.state.selectedItem,isPrevious:a===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,i=this.props,s=i.showIndicators,a=i.labels,c=i.renderIndicator,u=i.children;return s?q.default.createElement("ul",{className:"control-dots"},q.Children.map(u,function(d,p){return c&&c(o.changeItem(p),p===o.state.selectedItem,p,a.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?q.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,q.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||q.Children.count(this.props.children)===0?null:q.default.createElement(jS.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||q.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&q.Children.count(this.props.children)>1,s=this.props.axis==="horizontal",a=this.props.showArrows&&q.Children.count(this.props.children)>1,c=a&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=a&&(this.state.selectedItem<q.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),p=d.shift(),m=d.pop(),v={className:Pt.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},y={};if(s){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var x=this.getVariableItemHeight(this.state.selectedItem);y.height=x||"auto"}}else v.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,v.style=st(st({},v.style),{},{height:this.state.itemSize}),y.height=this.state.itemSize;return q.default.createElement("div",{"aria-label":this.props.ariaLabel,className:Pt.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},q.default.createElement("div",{className:Pt.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),q.default.createElement("div",{className:Pt.default.WRAPPER(!0,this.props.axis),style:y},i?q.default.createElement(CS.default,Zl({tagName:"ul",innerRef:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&p):q.default.createElement("ul",{className:Pt.default.SLIDER(!0,this.state.swiping),ref:function(g){return o.setListRef(g)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&p)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(q.default.Component);is.default=sc;B(sc,"displayName","Carousel");B(sc,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:br.noop,onClickThumb:br.noop,onChange:br.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return q.default.createElement("button",{type:"button","aria-label":r,className:Pt.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return q.default.createElement("button",{type:"button","aria-label":r,className:Pt.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return q.default.createElement("li",{className:Pt.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=q.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=q.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:br.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Ri.slideSwipeAnimationHandler,stopSwipingHandler:Ri.slideStopSwipingHandler});var RS={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(is),n=RS,r=o(go);function o(i){return i&&i.__esModule?i:{default:i}}})(os);const BS="_aboutPage1Container_14rn1_1",MS="_pageContent_14rn1_6",IS="_heroSection_14rn1_10",FS="_carouselSection_14rn1_28",$S="_missionSection_14rn1_32",DS="_largeImage_14rn1_49",zS="_teamSection_14rn1_55",AS="_teamMembers_14rn1_67",US="_teamMember_14rn1_67",WS="_valuesSection_14rn1_89",HS="_valueBoxes_14rn1_107",VS="_valueBox_14rn1_107",qS="_contactSection_14rn1_132",GS="_contactDetails_14rn1_145",KS="_toggleContainer_14rn1_150",QS="_toggleButton_14rn1_156",JS="_active_14rn1_165",XS="_codeContainer_14rn1_170",YS="_copyButton_14rn1_180",ZS="_copied_14rn1_192",e_="_codeBox_14rn1_196",W={aboutPage1Container:BS,pageContent:MS,heroSection:IS,carouselSection:FS,missionSection:$S,largeImage:DS,teamSection:zS,teamMembers:AS,teamMember:US,valuesSection:WS,valueBoxes:HS,valueBox:VS,contactSection:qS,contactDetails:GS,toggleContainer:KS,toggleButton:QS,active:JS,codeContainer:XS,copyButton:YS,copied:ZS,codeBox:e_},t_=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},a=e==="tsx"?o:i;return l.jsxs("div",{className:W.aboutPage1Container,children:[l.jsxs("div",{className:W.pageContent,children:[l.jsxs("section",{className:W.heroSection,children:[l.jsx("h1",{children:"About Us"}),l.jsx("p",{children:"Learn more about our company, our mission, and our team."})]}),l.jsx("section",{className:W.carouselSection,children:l.jsxs(os.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 1"}),l.jsx("p",{className:"legend",children:"Legend 1"})]}),l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 2"}),l.jsx("p",{className:"legend",children:"Legend 2"})]}),l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 3"}),l.jsx("p",{className:"legend",children:"Legend 3"})]})]})}),l.jsxs("section",{className:W.missionSection,children:[l.jsx("h2",{children:"Our Mission"}),l.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),l.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:W.largeImage})]}),l.jsxs("section",{className:W.teamSection,children:[l.jsx("h2",{children:"Meet Our Team"}),l.jsxs("div",{className:W.teamMembers,children:[l.jsxs("div",{className:W.teamMember,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:W.teamImage}),l.jsx("h3",{children:"John Doe"}),l.jsx("p",{children:"CEO"})]}),l.jsxs("div",{className:W.teamMember,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:W.teamImage}),l.jsx("h3",{children:"Jane Smith"}),l.jsx("p",{children:"CTO"})]}),l.jsxs("div",{className:W.teamMember,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:W.teamImage}),l.jsx("h3",{children:"Mike Johnson"}),l.jsx("p",{children:"CFO"})]})]})]}),l.jsxs("section",{className:W.valuesSection,children:[l.jsx("h2",{children:"Our Values"}),l.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),l.jsxs("div",{className:W.valueBoxes,children:[l.jsxs("div",{className:W.valueBox,children:[l.jsx("h3",{children:"Integrity"}),l.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),l.jsxs("div",{className:W.valueBox,children:[l.jsx("h3",{children:"Innovation"}),l.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),l.jsxs("div",{className:W.valueBox,children:[l.jsx("h3",{children:"Customer Satisfaction"}),l.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),l.jsxs("section",{className:W.historySection,children:[l.jsx("h2",{children:"Our History"}),l.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),l.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:W.largeImage})]}),l.jsxs("section",{className:W.contactSection,children:[l.jsx("h2",{children:"Contact Us"}),l.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),l.jsxs("div",{className:W.contactDetails,children:[l.jsx("p",{children:"Email: contact@company.com"}),l.jsx("p",{children:"Phone: (123) 456-7890"}),l.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),l.jsxs("div",{className:W.toggleContainer,children:[l.jsx("button",{className:`${W.toggleButton} ${e==="tsx"?W.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),l.jsx("button",{className:`${W.toggleButton} ${e==="css"?W.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),l.jsxs("div",{className:W.codeContainer,children:[l.jsx("button",{className:`${W.copyButton} ${n?W.copied:""}`,onClick:()=>s(a),children:n?"Copied":"Copy"}),l.jsx("pre",{className:W.codeBox,children:a})]})]})},n_="_aboutPage2Container_pnlr8_1",r_="_pageContent_pnlr8_6",o_="_heroSection_pnlr8_10",i_="_carouselSection_pnlr8_28",s_="_valuesSection_pnlr8_32",l_="_valueBoxes_pnlr8_47",a_="_valueBox_pnlr8_47",c_="_testimonialsSection_pnlr8_72",u_="_testimonials_pnlr8_72",d_="_testimonial_pnlr8_72",f_="_contactSection_pnlr8_104",p_="_contactDetails_pnlr8_114",m_="_toggleContainer_pnlr8_119",h_="_toggleButton_pnlr8_125",g_="_active_pnlr8_134",v_="_codeContainer_pnlr8_139",y_="_copyButton_pnlr8_149",x_="_copied_pnlr8_161",w_="_codeBox_pnlr8_165",ee={aboutPage2Container:n_,pageContent:r_,heroSection:o_,carouselSection:i_,valuesSection:s_,valueBoxes:l_,valueBox:a_,testimonialsSection:c_,testimonials:u_,testimonial:d_,contactSection:f_,contactDetails:p_,toggleContainer:m_,toggleButton:h_,active:g_,codeContainer:v_,copyButton:y_,copied:x_,codeBox:w_},S_=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},a=e==="tsx"?o:i;return l.jsxs("div",{className:ee.aboutPage2Container,children:[l.jsxs("div",{className:ee.pageContent,children:[l.jsxs("section",{className:ee.heroSection,children:[l.jsx("h1",{children:"Our Team"}),l.jsx("p",{children:"Meet the dedicated team behind our company's success."})]}),l.jsx("section",{className:ee.carouselSection,children:l.jsxs(os.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 1"}),l.jsx("p",{className:"legend",children:"Team Member 1"})]}),l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 2"}),l.jsx("p",{className:"legend",children:"Team Member 2"})]}),l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 3"}),l.jsx("p",{className:"legend",children:"Team Member 3"})]})]})}),l.jsxs("section",{className:ee.valuesSection,children:[l.jsx("h2",{children:"Our Values"}),l.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),l.jsxs("div",{className:ee.valueBoxes,children:[l.jsxs("div",{className:ee.valueBox,children:[l.jsx("h3",{children:"Integrity"}),l.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),l.jsxs("div",{className:ee.valueBox,children:[l.jsx("h3",{children:"Innovation"}),l.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),l.jsxs("div",{className:ee.valueBox,children:[l.jsx("h3",{children:"Customer Satisfaction"}),l.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),l.jsxs("section",{className:ee.testimonialsSection,children:[l.jsx("h2",{children:"Testimonials"}),l.jsxs("div",{className:ee.testimonials,children:[l.jsxs("div",{className:ee.testimonial,children:[l.jsx("p",{children:'"This company is amazing! They really care about their customers."'}),l.jsx("p",{children:"- Happy Customer"})]}),l.jsxs("div",{className:ee.testimonial,children:[l.jsx("p",{children:'"Fantastic team and outstanding service!"'}),l.jsx("p",{children:"- Satisfied Client"})]})]})]}),l.jsxs("section",{className:ee.contactSection,children:[l.jsx("h2",{children:"Contact Us"}),l.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),l.jsxs("div",{className:ee.contactDetails,children:[l.jsx("p",{children:"Email: contact@company.com"}),l.jsx("p",{children:"Phone: (123) 456-7890"}),l.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),l.jsxs("div",{className:ee.toggleContainer,children:[l.jsx("button",{className:`${ee.toggleButton} ${e==="tsx"?ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),l.jsx("button",{className:`${ee.toggleButton} ${e==="css"?ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),l.jsxs("div",{className:ee.codeContainer,children:[l.jsx("button",{className:`${ee.copyButton} ${n?ee.copied:""}`,onClick:()=>s(a),children:n?"Copied":"Copy"}),l.jsx("pre",{className:ee.codeBox,children:a})]})]})},__="_aboutPage3Container_166js_1",C_="_pageContent_166js_6",j_="_heroSection_166js_10",N_="_carouselSection_166js_28",k_="_historySection_166js_32",b_="_largeImage_166js_49",P_="_missionSection_166js_55",E_="_teamSection_166js_78",T_="_teamMembers_166js_90",L_="_teamMember_166js_90",O_="_valuesSection_166js_112",R_="_valueBoxes_166js_130",B_="_valueBox_166js_130",M_="_contactSection_166js_155",I_="_contactDetails_166js_168",F_="_toggleContainer_166js_173",$_="_toggleButton_166js_179",D_="_active_166js_188",z_="_codeContainer_166js_193",A_="_copyButton_166js_203",U_="_copied_166js_215",W_="_codeBox_166js_219",H={aboutPage3Container:__,pageContent:C_,heroSection:j_,carouselSection:N_,historySection:k_,largeImage:b_,missionSection:P_,teamSection:E_,teamMembers:T_,teamMember:L_,valuesSection:O_,valueBoxes:R_,valueBox:B_,contactSection:M_,contactDetails:I_,toggleContainer:F_,toggleButton:$_,active:D_,codeContainer:z_,copyButton:A_,copied:U_,codeBox:W_},H_=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},a=e==="tsx"?o:i;return l.jsxs("div",{className:H.aboutPage3Container,children:[l.jsxs("div",{className:H.pageContent,children:[l.jsxs("section",{className:H.heroSection,children:[l.jsx("h1",{children:"Our Journey"}),l.jsx("p",{children:"Discover the milestones that define our journey."})]}),l.jsx("section",{className:H.carouselSection,children:l.jsxs(os.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 1"}),l.jsx("p",{className:"legend",children:"Milestone 1"})]}),l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 2"}),l.jsx("p",{className:"legend",children:"Milestone 2"})]}),l.jsxs("div",{children:[l.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 3"}),l.jsx("p",{className:"legend",children:"Milestone 3"})]})]})}),l.jsxs("section",{className:H.historySection,children:[l.jsx("h2",{children:"Our History"}),l.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),l.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:H.largeImage})]}),l.jsxs("section",{className:H.missionSection,children:[l.jsx("h2",{children:"Our Mission"}),l.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),l.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:H.largeImage})]}),l.jsxs("section",{className:H.teamSection,children:[l.jsx("h2",{children:"Meet Our Team"}),l.jsxs("div",{className:H.teamMembers,children:[l.jsxs("div",{className:H.teamMember,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:H.teamImage}),l.jsx("h3",{children:"John Doe"}),l.jsx("p",{children:"CEO"})]}),l.jsxs("div",{className:H.teamMember,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:H.teamImage}),l.jsx("h3",{children:"Jane Smith"}),l.jsx("p",{children:"CTO"})]}),l.jsxs("div",{className:H.teamMember,children:[l.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:H.teamImage}),l.jsx("h3",{children:"Mike Johnson"}),l.jsx("p",{children:"CFO"})]})]})]}),l.jsxs("section",{className:H.valuesSection,children:[l.jsx("h2",{children:"Our Values"}),l.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),l.jsxs("div",{className:H.valueBoxes,children:[l.jsxs("div",{className:H.valueBox,children:[l.jsx("h3",{children:"Integrity"}),l.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),l.jsxs("div",{className:H.valueBox,children:[l.jsx("h3",{children:"Innovation"}),l.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),l.jsxs("div",{className:H.valueBox,children:[l.jsx("h3",{children:"Customer Satisfaction"}),l.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),l.jsxs("section",{className:H.contactSection,children:[l.jsx("h2",{children:"Contact Us"}),l.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),l.jsxs("div",{className:H.contactDetails,children:[l.jsx("p",{children:"Email: contact@company.com"}),l.jsx("p",{children:"Phone: (123) 456-7890"}),l.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),l.jsxs("div",{className:H.toggleContainer,children:[l.jsx("button",{className:`${H.toggleButton} ${e==="tsx"?H.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),l.jsx("button",{className:`${H.toggleButton} ${e==="css"?H.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),l.jsxs("div",{className:H.codeContainer,children:[l.jsx("button",{className:`${H.copyButton} ${n?H.copied:""}`,onClick:()=>s(a),children:n?"Copied":"Copy"}),l.jsx("pre",{className:H.codeBox,children:a})]})]})},V_="_loginPage1Container_16987_1",q_="_loginForm_16987_6",G_="_formGroup_16987_15",K_="_loginButton_16987_33",Q_="_forgotPassword_16987_48",J_="_toggleContainer_16987_61",X_="_toggleButton_16987_67",Y_="_active_16987_76",Z_="_codeContainer_16987_81",eC="_copyButton_16987_91",tC="_copied_16987_103",nC="_codeBox_16987_107",Ee={loginPage1Container:V_,loginForm:q_,formGroup:G_,loginButton:K_,forgotPassword:Q_,toggleContainer:J_,toggleButton:X_,active:Y_,codeContainer:Z_,copyButton:eC,copied:tC,codeBox:nC},rC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},a=e==="tsx"?o:i;return l.jsxs("div",{className:Ee.loginPage1Container,children:[l.jsx("h1",{children:"Welcome Back!"}),l.jsxs("form",{className:Ee.loginForm,children:[l.jsxs("div",{className:Ee.formGroup,children:[l.jsx("label",{htmlFor:"email",children:"Email"}),l.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),l.jsxs("div",{className:Ee.formGroup,children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),l.jsx("button",{type:"submit",className:Ee.loginButton,children:"Login"}),l.jsx("p",{className:Ee.forgotPassword,children:l.jsx("a",{href:"#",children:"Forgot Password?"})})]}),l.jsxs("div",{className:Ee.toggleContainer,children:[l.jsx("button",{className:`${Ee.toggleButton} ${e==="tsx"?Ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),l.jsx("button",{className:`${Ee.toggleButton} ${e==="css"?Ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),l.jsxs("div",{className:Ee.codeContainer,children:[l.jsx("button",{className:`${Ee.copyButton} ${n?Ee.copied:""}`,onClick:()=>s(a),children:n?"Copied":"Copy"}),l.jsx("pre",{className:Ee.codeBox,children:a})]})]})},oC="_loginPage2Container_1iwfr_1",iC="_loginForm_1iwfr_6",sC="_formGroup_1iwfr_15",lC="_loginButton_1iwfr_33",aC="_forgotPassword_1iwfr_48",cC="_toggleContainer_1iwfr_61",uC="_toggleButton_1iwfr_67",dC="_active_1iwfr_76",fC="_codeContainer_1iwfr_81",pC="_copyButton_1iwfr_91",mC="_copied_1iwfr_103",hC="_codeBox_1iwfr_107",Te={loginPage2Container:oC,loginForm:iC,formGroup:sC,loginButton:lC,forgotPassword:aC,toggleContainer:cC,toggleButton:uC,active:dC,codeContainer:fC,copyButton:pC,copied:mC,codeBox:hC},gC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},a=e==="tsx"?o:i;return l.jsxs("div",{className:Te.loginPage2Container,children:[l.jsx("h1",{children:"Login to Your Account"}),l.jsxs("form",{className:Te.loginForm,children:[l.jsxs("div",{className:Te.formGroup,children:[l.jsx("label",{htmlFor:"username",children:"Username"}),l.jsx("input",{type:"text",id:"username",name:"username",required:!0})]}),l.jsxs("div",{className:Te.formGroup,children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),l.jsx("button",{type:"submit",className:Te.loginButton,children:"Login"}),l.jsx("p",{className:Te.forgotPassword,children:l.jsx("a",{href:"#",children:"Forgot Password?"})})]}),l.jsxs("div",{className:Te.toggleContainer,children:[l.jsx("button",{className:`${Te.toggleButton} ${e==="tsx"?Te.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),l.jsx("button",{className:`${Te.toggleButton} ${e==="css"?Te.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),l.jsxs("div",{className:Te.codeContainer,children:[l.jsx("button",{className:`${Te.copyButton} ${n?Te.copied:""}`,onClick:()=>s(a),children:n?"Copied":"Copy"}),l.jsx("pre",{className:Te.codeBox,children:a})]})]})},vC="_loginPage3Container_1lt4l_1",yC="_loginForm_1lt4l_6",xC="_formGroup_1lt4l_15",wC="_loginButton_1lt4l_33",SC="_forgotPassword_1lt4l_48",_C="_toggleContainer_1lt4l_61",CC="_toggleButton_1lt4l_67",jC="_active_1lt4l_76",NC="_codeContainer_1lt4l_81",kC="_copyButton_1lt4l_91",bC="_copied_1lt4l_103",PC="_codeBox_1lt4l_107",Le={loginPage3Container:vC,loginForm:yC,formGroup:xC,loginButton:wC,forgotPassword:SC,toggleContainer:_C,toggleButton:CC,active:jC,codeContainer:NC,copyButton:kC,copied:bC,codeBox:PC},EC=()=>{const[e,t]=C.useState("tsx"),[n,r]=C.useState(!1);C.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},a=e==="tsx"?o:i;return l.jsxs("div",{className:Le.loginPage3Container,children:[l.jsx("h1",{children:"Sign In"}),l.jsxs("form",{className:Le.loginForm,children:[l.jsxs("div",{className:Le.formGroup,children:[l.jsx("label",{htmlFor:"email",children:"Email"}),l.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),l.jsxs("div",{className:Le.formGroup,children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),l.jsx("button",{type:"submit",className:Le.loginButton,children:"Sign In"}),l.jsx("p",{className:Le.forgotPassword,children:l.jsx("a",{href:"#",children:"Forgot Password?"})})]}),l.jsxs("div",{className:Le.toggleContainer,children:[l.jsx("button",{className:`${Le.toggleButton} ${e==="tsx"?Le.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),l.jsx("button",{className:`${Le.toggleButton} ${e==="css"?Le.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),l.jsxs("div",{className:Le.codeContainer,children:[l.jsx("button",{className:`${Le.copyButton} ${n?Le.copied:""}`,onClick:()=>s(a),children:n?"Copied":"Copy"}),l.jsx("pre",{className:Le.codeBox,children:a})]})]})},TC="_pricingPageContainer_1lsey_1",LC="_mainHeading_1lsey_7",OC="_subHeading_1lsey_13",RC="_toggleContainer_1lsey_19",BC="_toggleButton_1lsey_23",MC="_active_1lsey_36",IC="_pricingSection_1lsey_41",FC="_pricingCard_1lsey_48",$C="_planName_1lsey_57",DC="_planPrice_1lsey_63",zC="_planDescription_1lsey_69",AC="_planFeatures_1lsey_75",UC="_planButton_1lsey_86",V={pricingPageContainer:TC,mainHeading:LC,subHeading:OC,toggleContainer:RC,toggleButton:BC,active:MC,pricingSection:IC,pricingCard:FC,planName:$C,planPrice:DC,planDescription:zC,planFeatures:AC,planButton:UC},WC=()=>l.jsxs("div",{className:V.pricingPageContainer,children:[l.jsx("h1",{className:V.mainHeading,children:"Pricing plans for teams of all sizes"}),l.jsx("p",{className:V.subHeading,children:"Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."}),l.jsxs("div",{className:V.toggleContainer,children:[l.jsx("button",{className:`${V.toggleButton} ${V.active}`,children:"Monthly"}),l.jsx("button",{className:V.toggleButton,children:"Annually"})]}),l.jsxs("div",{className:V.pricingSection,children:[l.jsxs("div",{className:V.pricingCard,children:[l.jsx("h3",{className:V.planName,children:"Hobby"}),l.jsx("p",{className:V.planPrice,children:"$15/month"}),l.jsx("p",{className:V.planDescription,children:"The essentials to provide your best work for clients."}),l.jsxs("ul",{className:V.planFeatures,children:[l.jsx("li",{children:"5 products"}),l.jsx("li",{children:"Up to 1,000 subscribers"}),l.jsx("li",{children:"Basic analytics"})]}),l.jsx("button",{className:V.planButton,children:"Buy plan"})]}),l.jsxs("div",{className:V.pricingCard,children:[l.jsx("h3",{className:V.planName,children:"Freelancer"}),l.jsx("p",{className:V.planPrice,children:"$30/month"}),l.jsx("p",{className:V.planDescription,children:"The essentials to provide your best work for clients."}),l.jsxs("ul",{className:V.planFeatures,children:[l.jsx("li",{children:"5 products"}),l.jsx("li",{children:"Up to 1,000 subscribers"}),l.jsx("li",{children:"Basic analytics"}),l.jsx("li",{children:"48-hour support response time"})]}),l.jsx("button",{className:V.planButton,children:"Buy plan"})]}),l.jsxs("div",{className:V.pricingCard,children:[l.jsx("h3",{className:V.planName,children:"Startup"}),l.jsx("p",{className:V.planPrice,children:"$60/month"}),l.jsx("p",{className:V.planDescription,children:"A plan that scales with your rapidly growing business."}),l.jsxs("ul",{className:V.planFeatures,children:[l.jsx("li",{children:"25 products"}),l.jsx("li",{children:"Up to 10,000 subscribers"}),l.jsx("li",{children:"Advanced analytics"}),l.jsx("li",{children:"24-hour support response time"}),l.jsx("li",{children:"Marketing automations"})]}),l.jsx("button",{className:V.planButton,children:"Buy plan"})]}),l.jsxs("div",{className:V.pricingCard,children:[l.jsx("h3",{className:V.planName,children:"Enterprise"}),l.jsx("p",{className:V.planPrice,children:"$90/month"}),l.jsx("p",{className:V.planDescription,children:"Dedicated support and infrastructure for your company."}),l.jsxs("ul",{className:V.planFeatures,children:[l.jsx("li",{children:"Unlimited products"}),l.jsx("li",{children:"Unlimited subscribers"}),l.jsx("li",{children:"Advanced analytics"}),l.jsx("li",{children:"1-hour, dedicated support response time"}),l.jsx("li",{children:"Marketing automations"}),l.jsx("li",{children:"Custom reporting tools"})]}),l.jsx("button",{className:V.planButton,children:"Buy plan"})]})]})]}),HC="_pricingPageContainer_1qgsg_1",VC="_mainHeading_1qgsg_7",qC="_subHeading_1qgsg_13",GC="_toggleContainer_1qgsg_19",KC="_toggleButton_1qgsg_23",QC="_active_1qgsg_36",JC="_pricingSection_1qgsg_41",XC="_pricingCard_1qgsg_48",YC="_pricingCardMain_1qgsg_57",ZC="_planName_1qgsg_62",ej="_planPrice_1qgsg_68",tj="_billingCycle_1qgsg_74",nj="_planFeatures_1qgsg_80",rj="_planButton_1qgsg_91",K={pricingPageContainer:HC,mainHeading:VC,subHeading:qC,toggleContainer:GC,toggleButton:KC,active:QC,pricingSection:JC,pricingCard:XC,pricingCardMain:YC,planName:ZC,planPrice:ej,billingCycle:tj,planFeatures:nj,planButton:rj},oj=()=>l.jsxs("div",{className:K.pricingPageContainer,children:[l.jsx("h1",{className:K.mainHeading,children:"Simple pricing, no commitment"}),l.jsx("p",{className:K.subHeading,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus."}),l.jsxs("div",{className:K.toggleContainer,children:[l.jsx("button",{className:`${K.toggleButton} ${K.active}`,children:"Monthly"}),l.jsx("button",{className:K.toggleButton,children:"Annually"})]}),l.jsxs("div",{className:K.pricingSection,children:[l.jsxs("div",{className:K.pricingCard,children:[l.jsx("h3",{className:K.planName,children:"Starter"}),l.jsx("p",{className:K.planPrice,children:"$15 USD"}),l.jsx("p",{className:K.billingCycle,children:"Billed monthly"}),l.jsxs("ul",{className:K.planFeatures,children:[l.jsx("li",{children:"Basic invoicing"}),l.jsx("li",{children:"Easy to use accounting"}),l.jsx("li",{children:"Multi-accounts"})]}),l.jsx("button",{className:K.planButton,children:"Buy this plan"})]}),l.jsxs("div",{className:`${K.pricingCard} ${K.pricingCardMain}`,children:[l.jsx("h3",{className:K.planName,children:"Scale"}),l.jsx("p",{className:K.planPrice,children:"$60 USD"}),l.jsx("p",{className:K.billingCycle,children:"Billed monthly"}),l.jsxs("ul",{className:K.planFeatures,children:[l.jsx("li",{children:"Advanced invoicing"}),l.jsx("li",{children:"Easy to use accounting"}),l.jsx("li",{children:"Multi-accounts"}),l.jsx("li",{children:"Tax planning toolkit"}),l.jsx("li",{children:"VAT & VATMOSS filing"}),l.jsx("li",{children:"Free bank transfers"})]}),l.jsx("button",{className:K.planButton,children:"Buy this plan"})]}),l.jsxs("div",{className:K.pricingCard,children:[l.jsx("h3",{className:K.planName,children:"Growth"}),l.jsx("p",{className:K.planPrice,children:"$30 USD"}),l.jsx("p",{className:K.billingCycle,children:"Billed monthly"}),l.jsxs("ul",{className:K.planFeatures,children:[l.jsx("li",{children:"Basic invoicing"}),l.jsx("li",{children:"Easy to use accounting"}),l.jsx("li",{children:"Multi-accounts"}),l.jsx("li",{children:"Tax planning toolkit"})]}),l.jsx("button",{className:K.planButton,children:"Buy this plan"})]})]})]}),ij="_featureSection_oqeqb_1",sj="_heading_oqeqb_6",lj="_description_oqeqb_12",aj="_featureImage_oqeqb_18",cj="_toggleButton_oqeqb_24",uj="_codeContainer_oqeqb_37",dj="_codeBox_oqeqb_41",fj="_code_oqeqb_37",jt={featureSection:ij,heading:sj,description:lj,featureImage:aj,toggleButton:cj,codeContainer:uj,codeBox:dj,code:fj},pj=()=>{const[e,t]=C.useState(!1),n=()=>{t(!e)};return l.jsxs("div",{className:jt.featureSection,children:[l.jsx("h1",{className:jt.heading,children:"Feature Section 1"}),l.jsxs("div",{className:jt.featureContent,children:[l.jsx("p",{className:jt.description,children:"This is the first feature section with amazing features and functionalities."}),l.jsx("img",{src:"https://via.placeholder.com/600x400",alt:"Feature",className:jt.featureImage}),l.jsx("button",{className:jt.toggleButton,onClick:n,children:e?"Hide Code":"View Code"}),e&&l.jsx("div",{className:jt.codeContainer,children:l.jsx("div",{className:jt.codeBox,children:l.jsx("pre",{children:l.jsx("code",{className:jt.code,children:mj})})})})]})]})},mj=`
import React from 'react';
import styles from './FeatureSection1.module.css';

const FeatureSection1 = () => (
  <div className={styles.featureSection}>
    <h1 className={styles.heading}>Feature Section 1</h1>
    <p className={styles.description}>
      This is the first feature section with amazing features and functionalities.
    </p>
    <img src="https://via.placeholder.com/600x400" alt="Feature" className={styles.featureImage} />
  </div>
);

export default FeatureSection1;
`,hj="_featureSection_oqeqb_1",gj="_heading_oqeqb_6",vj="_description_oqeqb_12",yj="_featureImage_oqeqb_18",xj="_toggleButton_oqeqb_24",wj="_codeContainer_oqeqb_37",Sj="_codeBox_oqeqb_41",_j="_code_oqeqb_37",Nt={featureSection:hj,heading:gj,description:vj,featureImage:yj,toggleButton:xj,codeContainer:wj,codeBox:Sj,code:_j},Cj=()=>{const[e,t]=C.useState(!1),n=()=>{t(!e)};return l.jsxs("div",{className:Nt.featureSection,children:[l.jsx("h1",{className:Nt.heading,children:"Feature Section 2"}),l.jsxs("div",{className:Nt.featureContent,children:[l.jsx("p",{className:Nt.description,children:"This is the second feature section with more advanced features and capabilities."}),l.jsx("img",{src:"https://via.placeholder.com/600x400",alt:"Feature",className:Nt.featureImage}),l.jsx("button",{className:Nt.toggleButton,onClick:n,children:e?"Hide Code":"View Code"}),e&&l.jsx("div",{className:Nt.codeContainer,children:l.jsx("div",{className:Nt.codeBox,children:l.jsx("pre",{children:l.jsx("code",{className:Nt.code,children:jj})})})})]})]})},jj=`
import React from 'react';
import styles from './FeatureSection2.module.css';

const FeatureSection2 = () => (
  <div className={styles.featureSection}>
    <h1 className={styles.heading}>Feature Section 2</h1>
    <p className={styles.description}>
      This is the second feature section with more advanced features and capabilities.
    </p>
    <img src="https://via.placeholder.com/600x400" alt="Feature" className={styles.featureImage} />
  </div>
);

export default FeatureSection2;
`,Nj=()=>l.jsx(Jv,{children:l.jsxs(Ev,{children:[l.jsx(Xv,{}),l.jsxs(_v,{children:[l.jsx(J,{path:"/",element:l.jsx(sy,{})}),l.jsx(J,{path:"/components",element:l.jsx(D1,{})}),l.jsx(J,{path:"/utilities",element:l.jsx(z1,{})}),l.jsx(J,{path:"/documentation",element:l.jsx(A1,{})}),l.jsx(J,{path:"/examples",element:l.jsx(U1,{})}),l.jsx(J,{path:"/signup",element:l.jsx(jw,{})}),l.jsx(J,{path:"/login",element:l.jsx(Bw,{})}),l.jsx(J,{path:"/herosection",element:l.jsx(jp,{})}),l.jsx(J,{path:"/button",element:l.jsx(Ep,{})}),l.jsx(J,{path:"/navbarsection",element:l.jsx(Lp,{})}),l.jsx(J,{path:"/cardsection",element:l.jsx(Tp,{})}),l.jsx(J,{path:"/aboutpage",element:l.jsx(bp,{})}),l.jsx(J,{path:"/aboutpage1",element:l.jsx(t_,{})}),l.jsx(J,{path:"/aboutpage2",element:l.jsx(S_,{})}),l.jsx(J,{path:"/aboutpage3",element:l.jsx(H_,{})}),l.jsx(J,{path:"/loginpage",element:l.jsx(Pp,{})}),l.jsx(J,{path:"/loginpage1",element:l.jsx(rC,{})}),l.jsx(J,{path:"/loginpage2",element:l.jsx(gC,{})}),l.jsx(J,{path:"/loginpage3",element:l.jsx(EC,{})}),l.jsx(J,{path:"/pricingpage",element:l.jsx(kp,{})}),l.jsx(J,{path:"/pricingpage1",element:l.jsx(WC,{})}),l.jsx(J,{path:"/pricingpage2",element:l.jsx(oj,{})}),l.jsx(J,{path:"/featuresection",element:l.jsx(Np,{})}),l.jsx(J,{path:"/featuresection1",element:l.jsx(pj,{})}),l.jsx(J,{path:"/featuresection2",element:l.jsx(Cj,{})})]}),l.jsx($w,{})]})});Ks.createRoot(document.getElementById("root")).render(l.jsx(Lt.StrictMode,{children:l.jsx(Nj,{})}));
