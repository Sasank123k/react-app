function Bm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},es={},gd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Em=Symbol.for("react.portal"),Tm=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Rm=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Om=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),Fm=Symbol.for("react.suspense"),Im=Symbol.for("react.memo"),zm=Symbol.for("react.lazy"),Bc=Symbol.iterator;function Am(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var vd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xd=Object.assign,yd={};function vr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||vd}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _d(){}_d.prototype=vr.prototype;function wl(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||vd}var jl=wl.prototype=new _d;jl.constructor=wl;xd(jl,vr.prototype);jl.isPureReactComponent=!0;var Pc=Array.isArray,Sd=Object.prototype.hasOwnProperty,Cl={current:null},wd={key:!0,ref:!0,__self:!0,__source:!0};function jd(e,t,n){var r,o={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Sd.call(t,r)&&!wd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:wo,type:e,key:s,ref:a,props:o,_owner:Cl.current}}function Dm(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function Um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ec=/\/+/g;function Ts(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Um(""+e.key):t.toString(36)}function ai(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wo:case Em:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ts(a,0):r,Pc(o)?(n="",e!=null&&(n=e.replace(Ec,"$&/")+"/"),ai(o,t,n,"",function(u){return u})):o!=null&&(bl(o)&&(o=Dm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ec,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Pc(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ts(s,l);a+=ai(s,t,n,c,o)}else if(c=Am(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ts(s,l++),a+=ai(s,t,n,c,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Io(e,t,n){if(e==null)return e;var r=[],o=0;return ai(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Wm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},li={transition:null},Hm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:li,ReactCurrentOwner:Cl};function Cd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Io,forEach:function(e,t,n){Io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Io(e,function(){t++}),t},toArray:function(e){return Io(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=vr;D.Fragment=Tm;D.Profiler=Rm;D.PureComponent=wl;D.StrictMode=Lm;D.Suspense=Fm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;D.act=Cd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xd({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Cl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Sd.call(t,c)&&!wd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:wo,type:e.type,key:o,ref:s,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:Om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$m,_context:e},e.Consumer=e};D.createElement=jd;D.createFactory=function(e){var t=jd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Mm,render:e}};D.isValidElement=bl;D.lazy=function(e){return{$$typeof:zm,_payload:{_status:-1,_result:e},_init:Wm}};D.memo=function(e,t){return{$$typeof:Im,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};D.unstable_act=Cd;D.useCallback=function(e,t){return Ie.current.useCallback(e,t)};D.useContext=function(e){return Ie.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};D.useEffect=function(e,t){return Ie.current.useEffect(e,t)};D.useId=function(){return Ie.current.useId()};D.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ie.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};D.useRef=function(e){return Ie.current.useRef(e)};D.useState=function(e){return Ie.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Ie.current.useTransition()};D.version="18.3.1";gd.exports=D;var S=gd.exports;const Ut=Pm(S),qm=Bm({__proto__:null,default:Ut},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=S,Gm=Symbol.for("react.element"),Xm=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,Km=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jm={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Qm.call(t,r)&&!Jm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gm,type:e,key:s,ref:a,props:o,_owner:Km.current}}es.Fragment=Xm;es.jsx=bd;es.jsxs=bd;hd.exports=es;var i=hd.exports,ha={},Nd={exports:{}},tt={},kd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,$){var F=T.length;T.push($);e:for(;0<F;){var se=F-1>>>1,he=T[se];if(0<o(he,$))T[se]=$,T[F]=he,F=se;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var $=T[0],F=T.pop();if(F!==$){T[0]=F;e:for(var se=0,he=T.length,Mo=he>>>1;se<Mo;){var Sn=2*(se+1)-1,Es=T[Sn],wn=Sn+1,Fo=T[wn];if(0>o(Es,F))wn<he&&0>o(Fo,Es)?(T[se]=Fo,T[wn]=F,se=wn):(T[se]=Es,T[Sn]=F,se=Sn);else if(wn<he&&0>o(Fo,F))T[se]=Fo,T[wn]=F,se=wn;else break e}}return $}function o(T,$){var F=T.sortIndex-$.sortIndex;return F!==0?F:T.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,m=3,v=!1,x=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=T)r(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function _(T){if(y=!1,h(T),!x)if(n(c)!==null)x=!0,Bs(w);else{var $=n(u);$!==null&&Ps(_,$.startTime-T)}}function w(T,$){x=!1,y&&(y=!1,g(k),k=-1),v=!0;var F=m;try{for(h($),p=n(c);p!==null&&(!(p.expirationTime>$)||T&&!Ve());){var se=p.callback;if(typeof se=="function"){p.callback=null,m=p.priorityLevel;var he=se(p.expirationTime<=$);$=e.unstable_now(),typeof he=="function"?p.callback=he:p===n(c)&&r(c),h($)}else r(c);p=n(c)}if(p!==null)var Mo=!0;else{var Sn=n(u);Sn!==null&&Ps(_,Sn.startTime-$),Mo=!1}return Mo}finally{p=null,m=F,v=!1}}var N=!1,P=null,k=-1,K=5,M=-1;function Ve(){return!(e.unstable_now()-M<K)}function Cr(){if(P!==null){var T=e.unstable_now();M=T;var $=!0;try{$=P(!0,T)}finally{$?br():(N=!1,P=null)}}else N=!1}var br;if(typeof f=="function")br=function(){f(Cr)};else if(typeof MessageChannel<"u"){var kc=new MessageChannel,km=kc.port2;kc.port1.onmessage=Cr,br=function(){km.postMessage(null)}}else br=function(){C(Cr,0)};function Bs(T){P=T,N||(N=!0,br())}function Ps(T,$){k=C(function(){T(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Bs(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var F=m;m=$;try{return T()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=m;m=T;try{return $()}finally{m=F}},e.unstable_scheduleCallback=function(T,$,F){var se=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?se+F:se):F=se,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=F+he,T={id:d++,callback:$,priorityLevel:T,startTime:F,expirationTime:he,sortIndex:-1},F>se?(T.sortIndex=F,t(u,T),n(c)===null&&T===n(u)&&(y?(g(k),k=-1):y=!0,Ps(_,F-se))):(T.sortIndex=he,t(c,T),x||v||(x=!0,Bs(w))),T},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(T){var $=m;return function(){var F=m;m=$;try{return T.apply(this,arguments)}finally{m=F}}}})(Bd);kd.exports=Bd;var Ym=kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=S,et=Ym;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pd=new Set,to={};function Dn(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(to[e]=t,e=0;e<t.length;e++)Pd.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tc={},Lc={};function th(e){return ga.call(Lc,e)?!0:ga.call(Tc,e)?!1:eh.test(e)?Lc[e]=!0:(Tc[e]=!0,!1)}function nh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rh(e,t,n,r){if(t===null||typeof t>"u"||nh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nl,kl);_e[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nl,kl);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nl,kl);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rh(t,n,o,r)&&(n=null),r||o===null?th(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Td=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),ya=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ls;function zr(e){if(Ls===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ls=t&&t[1]||""}return`
`+Ls+e}var Rs=!1;function $s(e,t){if(!e||Rs)return"";Rs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,l=s.length-1;1<=a&&0<=l&&o[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==s[l]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Rs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function oh(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=$s(e.type,!1),e;case 11:return e=$s(e.type.render,!1),e;case 1:return e=$s(e.type,!0),e;default:return""}}function _a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Vn:return"Portal";case va:return"Profiler";case Pl:return"StrictMode";case xa:return"Suspense";case ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Td:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case El:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:_a(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return _a(e(t))}catch{}}return null}function ih(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(t);case 8:return t===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sh(e){var t=Rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){e._valueTracker||(e._valueTracker=sh(e))}function $d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Od(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function wa(e,t){Od(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ja(e,t.type,n):t.hasOwnProperty("defaultValue")&&ja(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ja(e,t,n){(t!=="number"||Si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Ar(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function Md(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ba(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ah=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){ah.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function zd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function Ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=zd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var lh=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(e,t){if(t){if(lh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=null;function Ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,ir=null,sr=null;function Ic(e){if(e=bo(e)){if(typeof Pa!="function")throw Error(b(280));var t=e.stateNode;t&&(t=is(t),Pa(e.stateNode,e.type,t))}}function Dd(e){ir?sr?sr.push(e):sr=[e]:ir=e}function Ud(){if(ir){var e=ir,t=sr;if(sr=ir=null,Ic(e),t)for(e=0;e<t.length;e++)Ic(t[e])}}function Wd(e,t){return e(t)}function Hd(){}var Os=!1;function qd(e,t,n){if(Os)return e(t,n);Os=!0;try{return Wd(e,t,n)}finally{Os=!1,(ir!==null||sr!==null)&&(Hd(),Ud())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=is(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Ea=!1;if(Ht)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Ea=!1}function ch(e,t,n,r,o,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var qr=!1,wi=null,ji=!1,Ta=null,uh={onError:function(e){qr=!0,wi=e}};function dh(e,t,n,r,o,s,a,l,c){qr=!1,wi=null,ch.apply(uh,arguments)}function ph(e,t,n,r,o,s,a,l,c){if(dh.apply(this,arguments),qr){if(qr){var u=wi;qr=!1,wi=null}else throw Error(b(198));ji||(ji=!0,Ta=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(Un(e)!==e)throw Error(b(188))}function fh(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return zc(o),e;if(s===r)return zc(o),t;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=s;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Gd(e){return e=fh(e),e!==null?Xd(e):null}function Xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xd(e);if(t!==null)return t;e=e.sibling}return null}var Qd=et.unstable_scheduleCallback,Ac=et.unstable_cancelCallback,mh=et.unstable_shouldYield,hh=et.unstable_requestPaint,ae=et.unstable_now,gh=et.unstable_getCurrentPriorityLevel,Rl=et.unstable_ImmediatePriority,Kd=et.unstable_UserBlockingPriority,Ci=et.unstable_NormalPriority,vh=et.unstable_LowPriority,Jd=et.unstable_IdlePriority,ts=null,Tt=null;function xh(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Sh,yh=Math.log,_h=Math.LN2;function Sh(e){return e>>>=0,e===0?32:31-(yh(e)/_h|0)|0}var Uo=64,Wo=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Dr(l):(s&=a,s!==0&&(r=Dr(s)))}else a=n&~o,a!==0?r=Dr(a):s!==0&&(r=Dr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-St(t),o=1<<n,r|=e[n],t&=~o;return r}function wh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-St(s),l=1<<a,c=o[a];c===-1?(!(l&n)||l&r)&&(o[a]=wh(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function La(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yd(){var e=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),e}function Ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function Ch(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-St(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function $l(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ep,Ol,tp,np,rp,Ra=!1,Ho=[],an=null,ln=null,cn=null,oo=new Map,io=new Map,tn=[],bh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dc(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Br(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=bo(t),t!==null&&Ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Nh(e,t,n,r,o){switch(t){case"focusin":return an=Br(an,e,t,n,r,o),!0;case"dragenter":return ln=Br(ln,e,t,n,r,o),!0;case"mouseover":return cn=Br(cn,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return oo.set(s,Br(oo.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,io.set(s,Br(io.get(s)||null,e,t,n,r,o)),!0}return!1}function op(e){var t=Pn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Vd(n),t!==null){e.blockedOn=t,rp(e.priority,function(){tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ba=r,n.target.dispatchEvent(r),Ba=null}else return t=bo(n),t!==null&&Ol(t),e.blockedOn=n,!1;t.shift()}return!0}function Uc(e,t,n){ci(e)&&n.delete(t)}function kh(){Ra=!1,an!==null&&ci(an)&&(an=null),ln!==null&&ci(ln)&&(ln=null),cn!==null&&ci(cn)&&(cn=null),oo.forEach(Uc),io.forEach(Uc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,kh)))}function so(e){function t(o){return Pr(o,e)}if(0<Ho.length){Pr(Ho[0],e);for(var n=1;n<Ho.length;n++){var r=Ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Pr(an,e),ln!==null&&Pr(ln,e),cn!==null&&Pr(cn,e),oo.forEach(t),io.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)op(n),n.blockedOn===null&&tn.shift()}var ar=Xt.ReactCurrentBatchConfig,Ni=!0;function Bh(e,t,n,r){var o=X,s=ar.transition;ar.transition=null;try{X=1,Ml(e,t,n,r)}finally{X=o,ar.transition=s}}function Ph(e,t,n,r){var o=X,s=ar.transition;ar.transition=null;try{X=4,Ml(e,t,n,r)}finally{X=o,ar.transition=s}}function Ml(e,t,n,r){if(Ni){var o=$a(e,t,n,r);if(o===null)Vs(e,t,r,ki,n),Dc(e,r);else if(Nh(o,e,t,n,r))r.stopPropagation();else if(Dc(e,r),t&4&&-1<bh.indexOf(e)){for(;o!==null;){var s=bo(o);if(s!==null&&ep(s),s=$a(e,t,n,r),s===null&&Vs(e,t,r,ki,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else Vs(e,t,r,null,n)}}var ki=null;function $a(e,t,n,r){if(ki=null,e=Ll(r),e=Pn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ki=e,null}function ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gh()){case Rl:return 1;case Kd:return 4;case Ci:case vh:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var rn=null,Fl=null,ui=null;function sp(){if(ui)return ui;var e,t=Fl,n=t.length,r,o="value"in rn?rn.value:rn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[s-r];r++);return ui=o.slice(e,1<r?1-r:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Wc(){return!1}function nt(e){function t(n,r,o,s,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:Wc,this.isPropagationStopped=Wc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=nt(xr),Co=oe({},xr,{view:0,detail:0}),Eh=nt(Co),Fs,Is,Er,ns=oe({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(Fs=e.screenX-Er.screenX,Is=e.screenY-Er.screenY):Is=Fs=0,Er=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Is}}),Hc=nt(ns),Th=oe({},ns,{dataTransfer:0}),Lh=nt(Th),Rh=oe({},Co,{relatedTarget:0}),zs=nt(Rh),$h=oe({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Oh=nt($h),Mh=oe({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fh=nt(Mh),Ih=oe({},xr,{data:0}),qc=nt(Ih),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dh[e])?!!t[e]:!1}function zl(){return Uh}var Wh=oe({},Co,{key:function(e){if(e.key){var t=zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hh=nt(Wh),qh=oe({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=nt(qh),Vh=oe({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),Gh=nt(Vh),Xh=oe({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=nt(Xh),Kh=oe({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=nt(Kh),Yh=[9,13,27,32],Al=Ht&&"CompositionEvent"in window,Vr=null;Ht&&"documentMode"in document&&(Vr=document.documentMode);var Zh=Ht&&"TextEvent"in window&&!Vr,ap=Ht&&(!Al||Vr&&8<Vr&&11>=Vr),Gc=" ",Xc=!1;function lp(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function eg(e,t){switch(e){case"compositionend":return cp(t);case"keypress":return t.which!==32?null:(Xc=!0,Gc);case"textInput":return e=t.data,e===Gc&&Xc?null:e;default:return null}}function tg(e,t){if(Xn)return e==="compositionend"||!Al&&lp(e,t)?(e=sp(),ui=Fl=rn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ap&&t.locale!=="ko"?null:t.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ng[e.type]:t==="textarea"}function up(e,t,n,r){Dd(r),t=Bi(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ao=null;function rg(e){Sp(e,0)}function rs(e){var t=Jn(e);if($d(t))return e}function og(e,t){if(e==="change")return t}var dp=!1;if(Ht){var As;if(Ht){var Ds="oninput"in document;if(!Ds){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),Ds=typeof Kc.oninput=="function"}As=Ds}else As=!1;dp=As&&(!document.documentMode||9<document.documentMode)}function Jc(){Gr&&(Gr.detachEvent("onpropertychange",pp),ao=Gr=null)}function pp(e){if(e.propertyName==="value"&&rs(ao)){var t=[];up(t,ao,e,Ll(e)),qd(rg,t)}}function ig(e,t,n){e==="focusin"?(Jc(),Gr=t,ao=n,Gr.attachEvent("onpropertychange",pp)):e==="focusout"&&Jc()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(ao)}function ag(e,t){if(e==="click")return rs(t)}function lg(e,t){if(e==="input"||e==="change")return rs(t)}function cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:cg;function lo(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ga.call(t,o)||!Ct(e[o],t[o]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var n=Yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yc(n)}}function fp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mp(){for(var e=window,t=Si();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Si(e.document)}return t}function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ug(e){var t=mp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fp(n.ownerDocument.documentElement,n)){if(r!==null&&Dl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Zc(n,s);var a=Zc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dg=Ht&&"documentMode"in document&&11>=document.documentMode,Qn=null,Oa=null,Xr=null,Ma=!1;function eu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Qn==null||Qn!==Si(r)||(r=Qn,"selectionStart"in r&&Dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&lo(Xr,r)||(Xr=r,r=Bi(Oa,"onSelect"),0<r.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function Vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Us={},hp={};Ht&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function os(e){if(Us[e])return Us[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hp)return Us[e]=t[n];return e}var gp=os("animationend"),vp=os("animationiteration"),xp=os("animationstart"),yp=os("transitionend"),_p=new Map,tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){_p.set(e,t),Dn(t,[e])}for(var Ws=0;Ws<tu.length;Ws++){var Hs=tu[Ws],pg=Hs.toLowerCase(),fg=Hs[0].toUpperCase()+Hs.slice(1);xn(pg,"on"+fg)}xn(gp,"onAnimationEnd");xn(vp,"onAnimationIteration");xn(xp,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(yp,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ph(r,t,void 0,e),e.currentTarget=null}function Sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&o.isPropagationStopped())break e;nu(o,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&o.isPropagationStopped())break e;nu(o,l,u),s=c}}}if(ji)throw e=Ta,ji=!1,Ta=null,e}function Y(e,t){var n=t[Da];n===void 0&&(n=t[Da]=new Set);var r=e+"__bubble";n.has(r)||(wp(t,e,2,!1),n.add(r))}function qs(e,t,n){var r=0;t&&(r|=4),wp(n,e,r,t)}var Go="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Go]){e[Go]=!0,Pd.forEach(function(n){n!=="selectionchange"&&(mg.has(n)||qs(n,!1,e),qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Go]||(t[Go]=!0,qs("selectionchange",!1,t))}}function wp(e,t,n,r){switch(ip(t)){case 1:var o=Bh;break;case 4:o=Ph;break;default:o=Ml}n=o.bind(null,t,n,e),o=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vs(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Pn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}qd(function(){var u=s,d=Ll(n),p=[];e:{var m=_p.get(e);if(m!==void 0){var v=Il,x=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":v=Hh;break;case"focusin":x="focus",v=zs;break;case"focusout":x="blur",v=zs;break;case"beforeblur":case"afterblur":v=zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Gh;break;case gp:case vp:case xp:v=Oh;break;case yp:v=Qh;break;case"scroll":v=Eh;break;case"wheel":v=Jh;break;case"copy":case"cut":case"paste":v=Fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vc}var y=(t&4)!==0,C=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var f=u,h;f!==null;){h=f;var _=h.stateNode;if(h.tag===5&&_!==null&&(h=_,g!==null&&(_=ro(f,g),_!=null&&y.push(uo(f,_,h)))),C)break;f=f.return}0<y.length&&(m=new v(m,x,null,n,d),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Ba&&(x=n.relatedTarget||n.fromElement)&&(Pn(x)||x[qt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?Pn(x):null,x!==null&&(C=Un(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=Hc,_="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Vc,_="onPointerLeave",g="onPointerEnter",f="pointer"),C=v==null?m:Jn(v),h=x==null?m:Jn(x),m=new y(_,f+"leave",v,n,d),m.target=C,m.relatedTarget=h,_=null,Pn(d)===u&&(y=new y(g,f+"enter",x,n,d),y.target=h,y.relatedTarget=C,_=y),C=_,v&&x)t:{for(y=v,g=x,f=0,h=y;h;h=qn(h))f++;for(h=0,_=g;_;_=qn(_))h++;for(;0<f-h;)y=qn(y),f--;for(;0<h-f;)g=qn(g),h--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=qn(y),g=qn(g)}y=null}else y=null;v!==null&&ru(p,m,v,y,!1),x!==null&&C!==null&&ru(p,C,x,y,!0)}}e:{if(m=u?Jn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var w=og;else if(Qc(m))if(dp)w=lg;else{w=sg;var N=ig}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=ag);if(w&&(w=w(e,u))){up(p,w,n,d);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ja(m,"number",m.value)}switch(N=u?Jn(u):window,e){case"focusin":(Qc(N)||N.contentEditable==="true")&&(Qn=N,Oa=u,Xr=null);break;case"focusout":Xr=Oa=Qn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,eu(p,n,d);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":eu(p,n,d)}var P;if(Al)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Xn?lp(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(ap&&n.locale!=="ko"&&(Xn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Xn&&(P=sp()):(rn=d,Fl="value"in rn?rn.value:rn.textContent,Xn=!0)),N=Bi(u,k),0<N.length&&(k=new qc(k,e,null,n,d),p.push({event:k,listeners:N}),P?k.data=P:(P=cp(n),P!==null&&(k.data=P)))),(P=Zh?eg(e,n):tg(e,n))&&(u=Bi(u,"onBeforeInput"),0<u.length&&(d=new qc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}Sp(p,t)})}function uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=ro(e,n),s!=null&&r.unshift(uo(e,s,o)),s=ro(e,t),s!=null&&r.push(uo(e,s,o))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ru(e,t,n,r,o){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=ro(n,s),c!=null&&a.unshift(uo(n,c,l))):o||(c=ro(n,s),c!=null&&a.push(uo(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(gg,"")}function Xo(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(b(425))}function Pi(){}var Fa=null,Ia=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,xg=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(yg)}:Aa;function yg(e){setTimeout(function(){throw e})}function Gs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);so(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+yr,po="__reactProps$"+yr,qt="__reactContainer$"+yr,Da="__reactEvents$"+yr,_g="__reactListeners$"+yr,Sg="__reactHandles$"+yr;function Pn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[Bt])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function bo(e){return e=e[Bt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function is(e){return e[po]||null}var Ua=[],Yn=-1;function yn(e){return{current:e}}function Z(e){0>Yn||(e.current=Ua[Yn],Ua[Yn]=null,Yn--)}function J(e,t){Yn++,Ua[Yn]=e.current,e.current=t}var vn={},Be=yn(vn),Ue=yn(!1),On=vn;function dr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function Ei(){Z(Ue),Z(Be)}function au(e,t,n){if(Be.current!==vn)throw Error(b(168));J(Be,t),J(Ue,n)}function jp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,ih(e)||"Unknown",o));return oe({},n,r)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,On=Be.current,J(Be,e),J(Ue,Ue.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=jp(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,Z(Ue),Z(Be),J(Be,e)):Z(Ue),J(Ue,n)}var It=null,ss=!1,Xs=!1;function Cp(e){It===null?It=[e]:It.push(e)}function wg(e){ss=!0,Cp(e)}function _n(){if(!Xs&&It!==null){Xs=!0;var e=0,t=X;try{var n=It;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,ss=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),Qd(Rl,_n),o}finally{X=t,Xs=!1}}return null}var Zn=[],er=0,Li=null,Ri=0,it=[],st=0,Mn=null,At=1,Dt="";function Nn(e,t){Zn[er++]=Ri,Zn[er++]=Li,Li=e,Ri=t}function bp(e,t,n){it[st++]=At,it[st++]=Dt,it[st++]=Mn,Mn=e;var r=At;e=Dt;var o=32-St(r)-1;r&=~(1<<o),n+=1;var s=32-St(t)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,At=1<<32-St(t)+o|n<<o|r,Dt=s+e}else At=1<<s|n<<o|r,Dt=e}function Ul(e){e.return!==null&&(Nn(e,1),bp(e,1,0))}function Wl(e){for(;e===Li;)Li=Zn[--er],Zn[er]=null,Ri=Zn[--er],Zn[er]=null;for(;e===Mn;)Mn=it[--st],it[st]=null,Dt=it[--st],it[st]=null,At=it[--st],it[st]=null}var Ze=null,Ye=null,te=!1,_t=null;function Np(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Ye=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:At,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Ye=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ha(e){if(te){var t=Ye;if(t){var n=t;if(!cu(e,t)){if(Wa(e))throw Error(b(418));t=un(n.nextSibling);var r=Ze;t&&cu(e,t)?Np(r,n):(e.flags=e.flags&-4097|2,te=!1,Ze=e)}}else{if(Wa(e))throw Error(b(418));e.flags=e.flags&-4097|2,te=!1,Ze=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Qo(e){if(e!==Ze)return!1;if(!te)return uu(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=Ye)){if(Wa(e))throw kp(),Error(b(418));for(;t;)Np(e,t),t=un(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ze?un(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=Ye;e;)e=un(e.nextSibling)}function pr(){Ye=Ze=null,te=!1}function Hl(e){_t===null?_t=[e]:_t.push(e)}var jg=Xt.ReactCurrentBatchConfig;function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=o.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function du(e){var t=e._init;return t(e._payload)}function Bp(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=mn(g,f),g.index=0,g.sibling=null,g}function s(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,h,_){return f===null||f.tag!==6?(f=ta(h,g.mode,_),f.return=g,f):(f=o(f,h),f.return=g,f)}function c(g,f,h,_){var w=h.type;return w===Gn?d(g,f,h.props.children,_,h.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zt&&du(w)===f.type)?(_=o(f,h.props),_.ref=Tr(g,f,h),_.return=g,_):(_=xi(h.type,h.key,h.props,null,g.mode,_),_.ref=Tr(g,f,h),_.return=g,_)}function u(g,f,h,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=na(h,g.mode,_),f.return=g,f):(f=o(f,h.children||[]),f.return=g,f)}function d(g,f,h,_,w){return f===null||f.tag!==7?(f=Rn(h,g.mode,_,w),f.return=g,f):(f=o(f,h),f.return=g,f)}function p(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ta(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zo:return h=xi(f.type,f.key,f.props,null,g.mode,h),h.ref=Tr(g,null,f),h.return=g,h;case Vn:return f=na(f,g.mode,h),f.return=g,f;case Zt:var _=f._init;return p(g,_(f._payload),h)}if(Ar(f)||Nr(f))return f=Rn(f,g.mode,h,null),f.return=g,f;Ko(g,f)}return null}function m(g,f,h,_){var w=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:l(g,f,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zo:return h.key===w?c(g,f,h,_):null;case Vn:return h.key===w?u(g,f,h,_):null;case Zt:return w=h._init,m(g,f,w(h._payload),_)}if(Ar(h)||Nr(h))return w!==null?null:d(g,f,h,_,null);Ko(g,h)}return null}function v(g,f,h,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(h)||null,l(f,g,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zo:return g=g.get(_.key===null?h:_.key)||null,c(f,g,_,w);case Vn:return g=g.get(_.key===null?h:_.key)||null,u(f,g,_,w);case Zt:var N=_._init;return v(g,f,h,N(_._payload),w)}if(Ar(_)||Nr(_))return g=g.get(h)||null,d(f,g,_,w,null);Ko(f,_)}return null}function x(g,f,h,_){for(var w=null,N=null,P=f,k=f=0,K=null;P!==null&&k<h.length;k++){P.index>k?(K=P,P=null):K=P.sibling;var M=m(g,P,h[k],_);if(M===null){P===null&&(P=K);break}e&&P&&M.alternate===null&&t(g,P),f=s(M,f,k),N===null?w=M:N.sibling=M,N=M,P=K}if(k===h.length)return n(g,P),te&&Nn(g,k),w;if(P===null){for(;k<h.length;k++)P=p(g,h[k],_),P!==null&&(f=s(P,f,k),N===null?w=P:N.sibling=P,N=P);return te&&Nn(g,k),w}for(P=r(g,P);k<h.length;k++)K=v(P,g,k,h[k],_),K!==null&&(e&&K.alternate!==null&&P.delete(K.key===null?k:K.key),f=s(K,f,k),N===null?w=K:N.sibling=K,N=K);return e&&P.forEach(function(Ve){return t(g,Ve)}),te&&Nn(g,k),w}function y(g,f,h,_){var w=Nr(h);if(typeof w!="function")throw Error(b(150));if(h=w.call(h),h==null)throw Error(b(151));for(var N=w=null,P=f,k=f=0,K=null,M=h.next();P!==null&&!M.done;k++,M=h.next()){P.index>k?(K=P,P=null):K=P.sibling;var Ve=m(g,P,M.value,_);if(Ve===null){P===null&&(P=K);break}e&&P&&Ve.alternate===null&&t(g,P),f=s(Ve,f,k),N===null?w=Ve:N.sibling=Ve,N=Ve,P=K}if(M.done)return n(g,P),te&&Nn(g,k),w;if(P===null){for(;!M.done;k++,M=h.next())M=p(g,M.value,_),M!==null&&(f=s(M,f,k),N===null?w=M:N.sibling=M,N=M);return te&&Nn(g,k),w}for(P=r(g,P);!M.done;k++,M=h.next())M=v(P,g,k,M.value,_),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?k:M.key),f=s(M,f,k),N===null?w=M:N.sibling=M,N=M);return e&&P.forEach(function(Cr){return t(g,Cr)}),te&&Nn(g,k),w}function C(g,f,h,_){if(typeof h=="object"&&h!==null&&h.type===Gn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case zo:e:{for(var w=h.key,N=f;N!==null;){if(N.key===w){if(w=h.type,w===Gn){if(N.tag===7){n(g,N.sibling),f=o(N,h.props.children),f.return=g,g=f;break e}}else if(N.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zt&&du(w)===N.type){n(g,N.sibling),f=o(N,h.props),f.ref=Tr(g,N,h),f.return=g,g=f;break e}n(g,N);break}else t(g,N);N=N.sibling}h.type===Gn?(f=Rn(h.props.children,g.mode,_,h.key),f.return=g,g=f):(_=xi(h.type,h.key,h.props,null,g.mode,_),_.ref=Tr(g,f,h),_.return=g,g=_)}return a(g);case Vn:e:{for(N=h.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=o(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=na(h,g.mode,_),f.return=g,g=f}return a(g);case Zt:return N=h._init,C(g,f,N(h._payload),_)}if(Ar(h))return x(g,f,h,_);if(Nr(h))return y(g,f,h,_);Ko(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=o(f,h),f.return=g,g=f):(n(g,f),f=ta(h,g.mode,_),f.return=g,g=f),a(g)):n(g,f)}return C}var fr=Bp(!0),Pp=Bp(!1),$i=yn(null),Oi=null,tr=null,ql=null;function Vl(){ql=tr=Oi=null}function Gl(e){var t=$i.current;Z($i),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){Oi=e,ql=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(ql!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Oi===null)throw Error(b(308));tr=e,Oi.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var En=null;function Xl(e){En===null?En=[e]:En.push(e)}function Ep(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Xl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Xl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$l(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mi(e,t,n,r){var o=e.updateQueue;en=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=o.baseState;a=0,d=u=c=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,y=l;switch(m=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(v,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(v,p,m):x,m==null)break e;p=oe({},p,m);break e;case 2:en=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=p):d=d.next=v,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(c=p),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);In|=a,e.lanes=a,e.memoizedState=p}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var No={},Lt=yn(No),fo=yn(No),mo=yn(No);function Tn(e){if(e===No)throw Error(b(174));return e}function Kl(e,t){switch(J(mo,t),J(fo,e),J(Lt,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ba(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ba(t,e)}Z(Lt),J(Lt,t)}function mr(){Z(Lt),Z(fo),Z(mo)}function Lp(e){Tn(mo.current);var t=Tn(Lt.current),n=ba(t,e.type);t!==n&&(J(fo,e),J(Lt,n))}function Jl(e){fo.current===e&&(Z(Lt),Z(fo))}var ne=yn(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qs=[];function Yl(){for(var e=0;e<Qs.length;e++)Qs[e]._workInProgressVersionPrimary=null;Qs.length=0}var fi=Xt.ReactCurrentDispatcher,Ks=Xt.ReactCurrentBatchConfig,Fn=0,re=null,fe=null,ge=null,Ii=!1,Qr=!1,ho=0,Cg=0;function Se(){throw Error(b(321))}function Zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function ec(e,t,n,r,o,s){if(Fn=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?Bg:Pg,e=n(r,o),Qr){s=0;do{if(Qr=!1,ho=0,25<=s)throw Error(b(301));s+=1,ge=fe=null,t.updateQueue=null,fi.current=Eg,e=n(r,o)}while(Qr)}if(fi.current=zi,t=fe!==null&&fe.next!==null,Fn=0,ge=fe=re=null,Ii=!1,t)throw Error(b(300));return e}function tc(){var e=ho!==0;return ho=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?re.memoizedState=ge=e:ge=ge.next=e,ge}function dt(){if(fe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ge===null?re.memoizedState:ge.next;if(t!==null)ge=t,fe=e;else{if(e===null)throw Error(b(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?re.memoizedState=ge=e:ge=ge.next=e}return ge}function go(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=dt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Fn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,re.lanes|=d,In|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,Ct(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,re.lanes|=s,In|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ys(e){var t=dt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);Ct(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Rp(){}function $p(e,t){var n=re,r=dt(),o=t(),s=!Ct(r.memoizedState,o);if(s&&(r.memoizedState=o,De=!0),r=r.queue,nc(Fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,vo(9,Mp.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(b(349));Fn&30||Op(n,t,o)}return o}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mp(e,t,n,r){t.value=n,t.getSnapshot=r,Ip(t)&&zp(e)}function Fp(e,t,n){return n(function(){Ip(t)&&zp(e)})}function Ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function zp(e){var t=Vt(e,1);t!==null&&wt(t,e,1,-1)}function mu(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=kg.bind(null,re,e),[t.memoizedState,e]}function vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ap(){return dt().memoizedState}function mi(e,t,n,r){var o=kt();re.flags|=e,o.memoizedState=vo(1|t,n,void 0,r===void 0?null:r)}function as(e,t,n,r){var o=dt();r=r===void 0?null:r;var s=void 0;if(fe!==null){var a=fe.memoizedState;if(s=a.destroy,r!==null&&Zl(r,a.deps)){o.memoizedState=vo(t,n,s,r);return}}re.flags|=e,o.memoizedState=vo(1|t,n,s,r)}function hu(e,t){return mi(8390656,8,e,t)}function nc(e,t){return as(2048,8,e,t)}function Dp(e,t){return as(4,2,e,t)}function Up(e,t){return as(4,4,e,t)}function Wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hp(e,t,n){return n=n!=null?n.concat([e]):null,as(4,4,Wp.bind(null,t,e),n)}function rc(){}function qp(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vp(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gp(e,t,n){return Fn&21?(Ct(n,t)||(n=Yd(),re.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function bg(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Ks.transition;Ks.transition={};try{e(!1),t()}finally{X=n,Ks.transition=r}}function Xp(){return dt().memoizedState}function Ng(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qp(e))Kp(t,n);else if(n=Ep(e,t,n,r),n!==null){var o=Fe();wt(n,e,r,o),Jp(n,t,r)}}function kg(e,t,n){var r=fn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qp(e))Kp(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.hasEagerState=!0,o.eagerState=l,Ct(l,a)){var c=t.interleaved;c===null?(o.next=o,Xl(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Ep(e,t,o,r),n!==null&&(o=Fe(),wt(n,e,r,o),Jp(n,t,r))}}function Qp(e){var t=e.alternate;return e===re||t!==null&&t===re}function Kp(e,t){Qr=Ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$l(e,n)}}var zi={readContext:ut,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Bg={readContext:ut,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mi(4194308,4,Wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ng.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:rc,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=bg.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=kt();if(te){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ve===null)throw Error(b(349));Fn&30||Op(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,hu(Fp.bind(null,r,s,e),[e]),r.flags|=2048,vo(9,Mp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=kt(),t=ve.identifierPrefix;if(te){var n=Dt,r=At;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pg={readContext:ut,useCallback:qp,useContext:ut,useEffect:nc,useImperativeHandle:Hp,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:Vp,useReducer:Js,useRef:Ap,useState:function(){return Js(go)},useDebugValue:rc,useDeferredValue:function(e){var t=dt();return Gp(t,fe.memoizedState,e)},useTransition:function(){var e=Js(go)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Rp,useSyncExternalStore:$p,useId:Xp,unstable_isNewReconciler:!1},Eg={readContext:ut,useCallback:qp,useContext:ut,useEffect:nc,useImperativeHandle:Hp,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:Vp,useReducer:Ys,useRef:Ap,useState:function(){return Ys(go)},useDebugValue:rc,useDeferredValue:function(e){var t=dt();return fe===null?t.memoizedState=e:Gp(t,fe.memoizedState,e)},useTransition:function(){var e=Ys(go)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Rp,useSyncExternalStore:$p,useId:Xp,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ls={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=fn(e),s=Wt(r,o);s.payload=t,n!=null&&(s.callback=n),t=dn(e,s,o),t!==null&&(wt(t,e,o,r),pi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=fn(e),s=Wt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=dn(e,s,o),t!==null&&(wt(t,e,o,r),pi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=fn(e),o=Wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,r),t!==null&&(wt(t,e,r,n),pi(t,e,r))}};function gu(e,t,n,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,s):!0}function Yp(e,t,n){var r=!1,o=vn,s=t.contextType;return typeof s=="object"&&s!==null?s=ut(s):(o=We(t)?On:Be.current,r=t.contextTypes,s=(r=r!=null)?dr(e,o):vn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ls,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Ga(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ql(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=ut(s):(s=We(t)?On:Be.current,o.context=dr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Va(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ls.enqueueReplaceState(o,o.state,null),Mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",r=t;do n+=oh(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Zs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tg=typeof WeakMap=="function"?WeakMap:Map;function Zp(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Di||(Di=!0,ol=r),Xa(e,t)},n}function ef(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Xa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xa(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qg.bind(null,e,t,n),t.then(e,e))}function yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _u(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var Lg=Xt.ReactCurrentOwner,De=!1;function Me(e,t,n,r){t.child=e===null?Pp(t,null,n,r):fr(t,e.child,n,r)}function Su(e,t,n,r,o){n=n.render;var s=t.ref;return lr(t,o),r=ec(e,t,n,r,s,o),n=tc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(te&&n&&Ul(t),t.flags|=1,Me(e,t,r,o),t.child)}function wu(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,tf(e,t,s,r,o)):(e=xi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(a,r)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=mn(s,r),e.ref=t.ref,e.return=t,t.child=e}function tf(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(lo(s,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return Qa(e,t,n,r,o)}function nf(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(rr,Ke),Ke|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(rr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(rr,Ke),Ke|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,J(rr,Ke),Ke|=r;return Me(e,t,o,n),t.child}function rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,r,o){var s=We(n)?On:Be.current;return s=dr(t,s),lr(t,o),n=ec(e,t,n,r,s,o),r=tc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(te&&r&&Ul(t),t.flags|=1,Me(e,t,n,o),t.child)}function ju(e,t,n,r,o){if(We(n)){var s=!0;Ti(t)}else s=!1;if(lr(t,o),t.stateNode===null)hi(e,t),Yp(t,n,r),Ga(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=We(n)?On:Be.current,u=dr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&vu(t,a,r,u),en=!1;var m=t.memoizedState;a.state=m,Mi(t,r,a,o),c=t.memoizedState,l!==r||m!==c||Ue.current||en?(typeof d=="function"&&(Va(t,n,d,r),c=t.memoizedState),(l=en||gu(t,n,l,r,m,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:xt(t.type,l),a.props=u,p=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ut(c):(c=We(n)?On:Be.current,c=dr(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||m!==c)&&vu(t,a,r,c),en=!1,m=t.memoizedState,a.state=m,Mi(t,r,a,o);var x=t.memoizedState;l!==p||m!==x||Ue.current||en?(typeof v=="function"&&(Va(t,n,v,r),x=t.memoizedState),(u=en||gu(t,n,u,r,m,x,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ka(e,t,n,r,s,o)}function Ka(e,t,n,r,o,s){rf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&lu(t,n,!1),Gt(e,t,s);r=t.stateNode,Lg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fr(t,e.child,null,s),t.child=fr(t,null,l,s)):Me(e,t,l,s),t.memoizedState=r.state,o&&lu(t,n,!0),t.child}function of(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Kl(e,t.containerInfo)}function Cu(e,t,n,r,o){return pr(),Hl(o),t.flags|=256,Me(e,t,n,r),t.child}var Ja={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,o=ne.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return Ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ds(a,r,0,null),e=Rn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ya(n),t.memoizedState=Ja,e):oc(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Rg(e,t,a,r,l,o,n);if(s){s=r.fallback,a=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=mn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=mn(l,s):(s=Rn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Ya(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Ja,r}return s=e.child,e=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oc(e,t){return t=ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,n,r){return r!==null&&Hl(r),fr(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rg(e,t,n,r,o,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Zs(Error(b(422))),Jo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=ds({mode:"visible",children:r.children},o,0,null),s=Rn(s,o,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&fr(t,e.child,null,a),t.child.memoizedState=Ya(a),t.memoizedState=Ja,s);if(!(t.mode&1))return Jo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Zs(s,r,void 0),Jo(e,t,a,r)}if(l=(a&e.childLanes)!==0,De||l){if(r=ve,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Vt(e,o),wt(r,e,o,-1))}return uc(),r=Zs(Error(b(421))),Jo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vg.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Ye=un(o.nextSibling),Ze=t,te=!0,_t=null,e!==null&&(it[st++]=At,it[st++]=Dt,it[st++]=Mn,At=e.id,Dt=e.overflow,Mn=t),t=oc(t,r.children),t.flags|=4096,t)}function bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function ea(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function af(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,n,t);else if(e.tag===19)bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ea(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Fi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ea(t,!0,n,null,s);break;case"together":ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $g(e,t,n){switch(t.tag){case 3:of(t),pr();break;case 5:Lp(t);break;case 1:We(t.type)&&Ti(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J($i,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(J(ne,ne.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return af(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,nf(e,t,n)}return Gt(e,t,n)}var lf,Za,cf,uf;lf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};cf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tn(Lt.current);var s=null;switch(n){case"input":o=Sa(e,o),r=Sa(e,r),s=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":o=Ca(e,o),r=Ca(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pi)}Na(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Og(e,t,n){var r=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return We(t.type)&&Ei(),we(t),null;case 3:return r=t.stateNode,mr(),Z(Ue),Z(Be),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(al(_t),_t=null))),Za(e,t),we(t),null;case 5:Jl(t);var o=Tn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)cf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return we(t),null}if(e=Tn(Lt.current),Qo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Bt]=t,r[po]=s,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<Ur.length;o++)Y(Ur[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":$c(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Mc(r,s),Y("invalid",r)}Na(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,e),o=["children",""+l]):to.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":Ao(r),Oc(r,s,!0);break;case"textarea":Ao(r),Fc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bt]=t,e[po]=r,lf(e,t,!1,!1),t.stateNode=e;e:{switch(a=ka(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ur.length;o++)Y(Ur[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":$c(e,r),o=Sa(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Mc(e,r),o=Ca(e,r),Y("invalid",e);break;default:o=r}Na(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Ad(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Id(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&no(e,c):typeof c=="number"&&no(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Y("scroll",e):c!=null&&Bl(e,s,c,a))}switch(n){case"input":Ao(e),Oc(e,r,!1);break;case"textarea":Ao(e),Fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?or(e,!!r.multiple,s,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Tn(mo.current),Tn(Lt.current),Qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(s=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return we(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ye!==null&&t.mode&1&&!(t.flags&128))kp(),pr(),t.flags|=98560,s=!1;else if(s=Qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Bt]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),s=!1}else _t!==null&&(al(_t),_t=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):uc())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return mr(),Za(e,t),e===null&&co(t.stateNode.containerInfo),we(t),null;case 10:return Gl(t.type._context),we(t),null;case 17:return We(t.type)&&Ei(),we(t),null;case 19:if(Z(ne),s=t.memoizedState,s===null)return we(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Lr(s,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fi(e),a!==null){for(t.flags|=128,Lr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}s.tail!==null&&ae()>gr&&(t.flags|=128,r=!0,Lr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Fi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!te)return we(t),null}else 2*ae()-s.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ae(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return cc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Mg(e,t){switch(Wl(t),t.tag){case 1:return We(t.type)&&Ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),Z(Ue),Z(Be),Yl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jl(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return mr(),null;case 10:return Gl(t.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var Yo=!1,ke=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,E=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Nu=!1;function Ig(e,t){if(Fa=Ni,e=mp(),Dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===o&&(l=a),m===s&&++d===r&&(c=a),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ia={focusedElem:e,selectionRange:n},Ni=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,C=x.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:xt(t.type,y),C);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(_){ie(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=Nu,Nu=!1,x}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&el(t,n,s)}o=o.next}while(o!==r)}}function cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[po],delete t[Da],delete t[_g],delete t[Sg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pf(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pi));else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}var xe=null,yt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)ff(e,t,n),n=n.sibling}function ff(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ts,n)}catch{}switch(n.tag){case 5:ke||nr(n,t);case 6:var r=xe,o=yt;xe=null,Qt(e,t,n),xe=r,yt=o,xe!==null&&(yt?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(yt?(e=xe,n=n.stateNode,e.nodeType===8?Gs(e.parentNode,n):e.nodeType===1&&Gs(e,n),so(e)):Gs(xe,n.stateNode));break;case 4:r=xe,o=yt,xe=n.stateNode.containerInfo,yt=!0,Qt(e,t,n),xe=r,yt=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&el(n,t,a),o=o.next}while(o!==r)}Qt(e,t,n);break;case 1:if(!ke&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,t,l)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Qt(e,t,n),ke=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fg),t.forEach(function(r){var o=Gg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,yt=!1;break e;case 3:xe=l.stateNode.containerInfo,yt=!0;break e;case 4:xe=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(xe===null)throw Error(b(160));ff(s,a,o),xe=null,yt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mf(t,e),t=t.sibling}function mf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Nt(e),r&4){try{Kr(3,e,e.return),cs(3,e)}catch(y){ie(e,e.return,y)}try{Kr(5,e,e.return)}catch(y){ie(e,e.return,y)}}break;case 1:pt(t,e),Nt(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(pt(t,e),Nt(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var o=e.stateNode;try{no(o,"")}catch(y){ie(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Od(o,s),ka(l,a);var u=ka(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Ad(o,p):d==="dangerouslySetInnerHTML"?Id(o,p):d==="children"?no(o,p):Bl(o,d,p,u)}switch(l){case"input":wa(o,s);break;case"textarea":Md(o,s);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?or(o,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?or(o,!!s.multiple,s.defaultValue,!0):or(o,!!s.multiple,s.multiple?[]:"",!1))}o[po]=s}catch(y){ie(e,e.return,y)}}break;case 6:if(pt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(y){ie(e,e.return,y)}}break;case 3:if(pt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(y){ie(e,e.return,y)}break;case 4:pt(t,e),Nt(e);break;case 13:pt(t,e),Nt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(ac=ae())),r&4&&Bu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||d,pt(t,e),ke=u):pt(t,e),Nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(p=E=d;E!==null;){switch(m=E,v=m.child,m.tag){case 0:case 11:case 14:case 15:Kr(4,m,m.return);break;case 1:nr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){Eu(p);continue}}v!==null?(v.return=m,E=v):Eu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=zd("display",a))}catch(y){ie(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ie(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pt(t,e),Nt(e),r&4&&Bu(e);break;case 21:break;default:pt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pf(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(no(o,""),r.flags&=-33);var s=ku(e);rl(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ku(e);nl(e,l,a);break;default:throw Error(b(161))}}catch(c){ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zg(e,t,n){E=e,hf(e)}function hf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Yo;if(!a){var l=o.alternate,c=l!==null&&l.memoizedState!==null||ke;l=Yo;var u=ke;if(Yo=a,(ke=c)&&!u)for(E=o;E!==null;)a=E,c=a.child,a.tag===22&&a.memoizedState!==null?Tu(o):c!==null?(c.return=a,E=c):Tu(o);for(;s!==null;)E=s,hf(s),s=s.sibling;E=o,Yo=l,ke=u}Pu(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,E=s):Pu(e)}}function Pu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||cs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&fu(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&so(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ke||t.flags&512&&tl(t)}catch(m){ie(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Eu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Tu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cs(4,t)}catch(c){ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ie(t,o,c)}}var s=t.return;try{tl(t)}catch(c){ie(t,s,c)}break;case 5:var a=t.return;try{tl(t)}catch(c){ie(t,a,c)}}}catch(c){ie(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var Ag=Math.ceil,Ai=Xt.ReactCurrentDispatcher,ic=Xt.ReactCurrentOwner,lt=Xt.ReactCurrentBatchConfig,W=0,ve=null,ue=null,ye=0,Ke=0,rr=yn(0),me=0,xo=null,In=0,us=0,sc=0,Jr=null,Ae=null,ac=0,gr=1/0,Ft=null,Di=!1,ol=null,pn=null,Zo=!1,on=null,Ui=0,Yr=0,il=null,gi=-1,vi=0;function Fe(){return W&6?ae():gi!==-1?gi:gi=ae()}function fn(e){return e.mode&1?W&2&&ye!==0?ye&-ye:jg.transition!==null?(vi===0&&(vi=Yd()),vi):(e=X,e!==0||(e=window.event,e=e===void 0?16:ip(e.type)),e):1}function wt(e,t,n,r){if(50<Yr)throw Yr=0,il=null,Error(b(185));jo(e,n,r),(!(W&2)||e!==ve)&&(e===ve&&(!(W&2)&&(us|=n),me===4&&nn(e,ye)),He(e,r),n===1&&W===0&&!(t.mode&1)&&(gr=ae()+500,ss&&_n()))}function He(e,t){var n=e.callbackNode;jh(e,t);var r=bi(e,e===ve?ye:0);if(r===0)n!==null&&Ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ac(n),t===1)e.tag===0?wg(Lu.bind(null,e)):Cp(Lu.bind(null,e)),xg(function(){!(W&6)&&_n()}),n=null;else{switch(Zd(r)){case 1:n=Rl;break;case 4:n=Kd;break;case 16:n=Ci;break;case 536870912:n=Jd;break;default:n=Ci}n=jf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(gi=-1,vi=0,W&6)throw Error(b(327));var n=e.callbackNode;if(cr()&&e.callbackNode!==n)return null;var r=bi(e,e===ve?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wi(e,r);else{t=r;var o=W;W|=2;var s=xf();(ve!==e||ye!==t)&&(Ft=null,gr=ae()+500,Ln(e,t));do try{Wg();break}catch(l){vf(e,l)}while(!0);Vl(),Ai.current=s,W=o,ue!==null?t=0:(ve=null,ye=0,t=me)}if(t!==0){if(t===2&&(o=La(e),o!==0&&(r=o,t=sl(e,o))),t===1)throw n=xo,Ln(e,0),nn(e,r),He(e,ae()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dg(o)&&(t=Wi(e,r),t===2&&(s=La(e),s!==0&&(r=s,t=sl(e,s))),t===1))throw n=xo,Ln(e,0),nn(e,r),He(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:kn(e,Ae,Ft);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=ac+500-ae(),10<t)){if(bi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Aa(kn.bind(null,e,Ae,Ft),t);break}kn(e,Ae,Ft);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-St(r);s=1<<a,a=t[a],a>o&&(o=a),r&=~s}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ag(r/1960))-r,10<r){e.timeoutHandle=Aa(kn.bind(null,e,Ae,Ft),r);break}kn(e,Ae,Ft);break;case 5:kn(e,Ae,Ft);break;default:throw Error(b(329))}}}return He(e,ae()),e.callbackNode===n?gf.bind(null,e):null}function sl(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=Wi(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&al(t)),e}function al(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Dg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Ct(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~sc,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(W&6)throw Error(b(327));cr();var t=bi(e,0);if(!(t&1))return He(e,ae()),null;var n=Wi(e,t);if(e.tag!==0&&n===2){var r=La(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=xo,Ln(e,0),nn(e,t),He(e,ae()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ae,Ft),He(e,ae()),null}function lc(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(gr=ae()+500,ss&&_n())}}function zn(e){on!==null&&on.tag===0&&!(W&6)&&cr();var t=W;W|=1;var n=lt.transition,r=X;try{if(lt.transition=null,X=1,e)return e()}finally{X=r,lt.transition=n,W=t,!(W&6)&&_n()}}function cc(){Ke=rr.current,Z(rr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vg(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:mr(),Z(Ue),Z(Be),Yl();break;case 5:Jl(r);break;case 4:mr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:Gl(r.type._context);break;case 22:case 23:cc()}n=n.return}if(ve=e,ue=e=mn(e.current,null),ye=Ke=t,me=0,xo=null,sc=us=In=0,Ae=Jr=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}n.pending=r}En=null}return e}function vf(e,t){do{var n=ue;try{if(Vl(),fi.current=zi,Ii){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ii=!1}if(Fn=0,ge=fe=re=null,Qr=!1,ho=0,ic.current=null,n===null||n.return===null){me=1,xo=t,ue=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=yu(a);if(v!==null){v.flags&=-257,_u(v,a,l,s,t),v.mode&1&&xu(s,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(c),t.updateQueue=y}else x.add(c);break e}else{if(!(t&1)){xu(s,u,t),uc();break e}c=Error(b(426))}}else if(te&&l.mode&1){var C=yu(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),_u(C,a,l,s,t),Hl(hr(c,l));break e}}s=c=hr(c,l),me!==4&&(me=2),Jr===null?Jr=[s]:Jr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Zp(s,c,t);pu(s,g);break e;case 1:l=c;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pn===null||!pn.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=ef(s,l,t);pu(s,_);break e}}s=s.return}while(s!==null)}_f(n)}catch(w){t=w,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function xf(){var e=Ai.current;return Ai.current=zi,e===null?zi:e}function uc(){(me===0||me===3||me===2)&&(me=4),ve===null||!(In&268435455)&&!(us&268435455)||nn(ve,ye)}function Wi(e,t){var n=W;W|=2;var r=xf();(ve!==e||ye!==t)&&(Ft=null,Ln(e,t));do try{Ug();break}catch(o){vf(e,o)}while(!0);if(Vl(),W=n,Ai.current=r,ue!==null)throw Error(b(261));return ve=null,ye=0,me}function Ug(){for(;ue!==null;)yf(ue)}function Wg(){for(;ue!==null&&!mh();)yf(ue)}function yf(e){var t=wf(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?_f(e):ue=t,ic.current=null}function _f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mg(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ue=null;return}}else if(n=Og(n,t,Ke),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);me===0&&(me=5)}function kn(e,t,n){var r=X,o=lt.transition;try{lt.transition=null,X=1,Hg(e,t,n,r)}finally{lt.transition=o,X=r}return null}function Hg(e,t,n,r){do cr();while(on!==null);if(W&6)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ch(e,s),e===ve&&(ue=ve=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,jf(Ci,function(){return cr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var a=X;X=1;var l=W;W|=4,ic.current=null,Ig(e,n),mf(n,e),ug(Ia),Ni=!!Fa,Ia=Fa=null,e.current=n,zg(n),hh(),W=l,X=a,lt.transition=s}else e.current=n;if(Zo&&(Zo=!1,on=e,Ui=o),s=e.pendingLanes,s===0&&(pn=null),xh(n.stateNode),He(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Di)throw Di=!1,e=ol,ol=null,e;return Ui&1&&e.tag!==0&&cr(),s=e.pendingLanes,s&1?e===il?Yr++:(Yr=0,il=e):Yr=0,_n(),null}function cr(){if(on!==null){var e=Zd(Ui),t=lt.transition,n=X;try{if(lt.transition=null,X=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Ui=0,W&6)throw Error(b(331));var o=W;for(W|=4,E=e.current;E!==null;){var s=E,a=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Kr(8,d,s)}var p=d.child;if(p!==null)p.return=d,E=p;else for(;E!==null;){d=E;var m=d.sibling,v=d.return;if(df(d),d===u){E=null;break}if(m!==null){m.return=v,E=m;break}E=v}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}E=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,E=a;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kr(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,E=g;break e}E=s.return}}var f=e.current;for(E=f;E!==null;){a=E;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,E=h;else e:for(a=f;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cs(9,l)}}catch(w){ie(l,l.return,w)}if(l===a){E=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,E=_;break e}E=l.return}}if(W=o,_n(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ts,e)}catch{}r=!0}return r}finally{X=n,lt.transition=t}}return!1}function Ru(e,t,n){t=hr(n,t),t=Zp(e,t,1),e=dn(e,t,1),t=Fe(),e!==null&&(jo(e,1,t),He(e,t))}function ie(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=hr(n,e),e=ef(t,e,1),t=dn(t,e,1),e=Fe(),t!==null&&(jo(t,1,e),He(t,e));break}}t=t.return}}function qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ye&n)===n&&(me===4||me===3&&(ye&130023424)===ye&&500>ae()-ac?Ln(e,0):sc|=n),He(e,t)}function Sf(e,t){t===0&&(e.mode&1?(t=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):t=1);var n=Fe();e=Vt(e,t),e!==null&&(jo(e,t,n),He(e,n))}function Vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sf(e,n)}function Gg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Sf(e,n)}var wf;wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,$g(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&bp(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hi(e,t),e=t.pendingProps;var o=dr(t,Be.current);lr(t,n),o=ec(null,t,r,e,o,n);var s=tc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(s=!0,Ti(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ql(t),o.updater=ls,t.stateNode=o,o._reactInternals=t,Ga(t,r,e,n),t=Ka(null,t,r,!0,s,n)):(t.tag=0,te&&s&&Ul(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Qg(r),e=xt(r,e),o){case 0:t=Qa(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=Su(null,t,r,e,n);break e;case 14:t=wu(null,t,r,xt(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),Qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),ju(e,t,r,o,n);case 3:e:{if(of(t),e===null)throw Error(b(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Tp(e,t),Mi(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=hr(Error(b(423)),t),t=Cu(e,t,r,n,o);break e}else if(r!==o){o=hr(Error(b(424)),t),t=Cu(e,t,r,n,o);break e}else for(Ye=un(t.stateNode.containerInfo.firstChild),Ze=t,te=!0,_t=null,n=Pp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===o){t=Gt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Lp(t),e===null&&Ha(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,za(r,o)?a=null:s!==null&&za(r,s)&&(t.flags|=32),rf(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&Ha(t),null;case 13:return sf(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),Su(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,J($i,r._currentValue),r._currentValue=a,s!==null)if(Ct(s.value,a)){if(s.children===o.children&&!Ue.current){t=Gt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Wt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qa(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(b(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qa(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,lr(t,n),o=ut(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=xt(r,t.pendingProps),o=xt(r.type,o),wu(e,t,r,o,n);case 15:return tf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),hi(e,t),t.tag=1,We(r)?(e=!0,Ti(t)):e=!1,lr(t,n),Yp(t,r,o),Ga(t,r,o,n),Ka(null,t,r,!0,e,n);case 19:return af(e,t,n);case 22:return nf(e,t,n)}throw Error(b(156,t.tag))};function jf(e,t){return Qd(e,t)}function Xg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Xg(e,t,n,r)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===Tl)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,o,s){var a=2;if(r=e,typeof e=="function")dc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Gn:return Rn(n.children,o,s,t);case Pl:a=8,o|=8;break;case va:return e=at(12,n,t,o|2),e.elementType=va,e.lanes=s,e;case xa:return e=at(13,n,t,o),e.elementType=xa,e.lanes=s,e;case ya:return e=at(19,n,t,o),e.elementType=ya,e.lanes=s,e;case Ld:return ds(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:a=10;break e;case Td:a=9;break e;case El:a=11;break e;case Tl:a=14;break e;case Zt:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=at(a,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Rn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function ds(e,t,n,r){return e=at(22,e,r,t),e.elementType=Ld,e.lanes=n,e.stateNode={isHidden:!1},e}function ta(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function na(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ms(0),this.expirationTimes=Ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ms(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function pc(e,t,n,r,o,s,a,l,c){return e=new Kg(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=at(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(s),e}function Jg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cf(e){if(!e)return vn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(We(n))return jp(e,n,t)}return t}function bf(e,t,n,r,o,s,a,l,c){return e=pc(n,r,!0,e,o,s,a,l,c),e.context=Cf(null),n=e.current,r=Fe(),o=fn(n),s=Wt(r,o),s.callback=t??null,dn(n,s,o),e.current.lanes=o,jo(e,o,r),He(e,r),e}function ps(e,t,n,r){var o=t.current,s=Fe(),a=fn(o);return n=Cf(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(o,t,a),e!==null&&(wt(e,o,a,s),pi(e,o,a)),a}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fc(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function Yg(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}fs.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));ps(e,t,null,null)};fs.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){ps(null,e,null,null)}),t[qt]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=np();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&op(e)}};function hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function Zg(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=Hi(a);s.call(u)}}var a=bf(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=a,e[qt]=a.current,co(e.nodeType===8?e.parentNode:e),zn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Hi(c);l.call(u)}}var c=pc(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=c,e[qt]=c.current,co(e.nodeType===8?e.parentNode:e),zn(function(){ps(t,c,n,r)}),c}function hs(e,t,n,r,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var l=o;o=function(){var c=Hi(a);l.call(c)}}ps(t,a,e,o)}else a=Zg(n,t,e,o,r);return Hi(a)}ep=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&($l(t,n|1),He(t,ae()),!(W&6)&&(gr=ae()+500,_n()))}break;case 13:zn(function(){var r=Vt(e,1);if(r!==null){var o=Fe();wt(r,e,1,o)}}),fc(e,1)}};Ol=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Fe();wt(t,e,134217728,n)}fc(e,134217728)}};tp=function(e){if(e.tag===13){var t=fn(e),n=Vt(e,t);if(n!==null){var r=Fe();wt(n,e,t,r)}fc(e,t)}};np=function(){return X};rp=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Pa=function(e,t,n){switch(t){case"input":if(wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=is(r);if(!o)throw Error(b(90));$d(r),wa(r,o)}}}break;case"textarea":Md(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};Wd=lc;Hd=zn;var ev={usingClientEntryPoint:!1,Events:[bo,Jn,is,Dd,Ud,lc]},Rr={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{ts=ei.inject(tv),Tt=ei}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(t))throw Error(b(200));return Jg(e,t,null,n)};tt.createRoot=function(e,t){if(!hc(e))throw Error(b(299));var n=!1,r="",o=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=pc(e,1,!1,null,null,n,!1,r,o),e[qt]=t.current,co(e.nodeType===8?e.parentNode:e),new mc(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Gd(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return zn(e)};tt.hydrate=function(e,t,n){if(!ms(t))throw Error(b(200));return hs(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!hc(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",a=Nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=bf(t,null,e,1,n??null,o,!1,s,a),e[qt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fs(t)};tt.render=function(e,t,n){if(!ms(t))throw Error(b(200));return hs(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!ms(e))throw Error(b(40));return e._reactRootContainer?(zn(function(){hs(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};tt.unstable_batchedUpdates=lc;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ms(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return hs(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),Nd.exports=tt;var nv=Nd.exports,Mu=nv;ha.createRoot=Mu.createRoot,ha.hydrateRoot=Mu.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Fu="popstate";function rv(e){e===void 0&&(e={});function t(r,o){let{pathname:s,search:a,hash:l}=r.location;return ll("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:qi(o)}return iv(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ov(){return Math.random().toString(36).substr(2,8)}function Iu(e,t){return{usr:e.state,key:e.key,idx:t}}function ll(e,t,n,r){return n===void 0&&(n=null),yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_r(t):t,{state:n,key:t&&t.key||r||ov()})}function qi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function iv(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:s=!1}=r,a=o.history,l=sn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(yo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=sn.Pop;let C=d(),g=C==null?null:C-u;u=C,c&&c({action:l,location:y.location,delta:g})}function m(C,g){l=sn.Push;let f=ll(y.location,C,g);u=d()+1;let h=Iu(f,u),_=y.createHref(f);try{a.pushState(h,"",_)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(_)}s&&c&&c({action:l,location:y.location,delta:1})}function v(C,g){l=sn.Replace;let f=ll(y.location,C,g);u=d();let h=Iu(f,u),_=y.createHref(f);a.replaceState(h,"",_),s&&c&&c({action:l,location:y.location,delta:0})}function x(C){let g=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof C=="string"?C:qi(C);return f=f.replace(/ $/,"%20"),de(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return l},get location(){return e(o,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Fu,p),c=C,()=>{o.removeEventListener(Fu,p),c=null}},createHref(C){return t(o,C)},createURL:x,encodeLocation(C){let g=x(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(C){return a.go(C)}};return y}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function sv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?_r(t):t,o=gc(r.pathname||"/",n);if(o==null)return null;let s=Pf(e);av(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=yv(o);a=gv(s[l],c)}return a}function Pf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=hn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Pf(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:mv(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,a);else for(let c of Ef(s.path))o(s,a,c)}),t}function Ef(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return o?[s,""]:[s];let a=Ef(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),o&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function av(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lv=/^:[\w-]+$/,cv=3,uv=2,dv=1,pv=10,fv=-2,Au=e=>e==="*";function mv(e,t){let n=e.split("/"),r=n.length;return n.some(Au)&&(r+=fv),t&&(r+=uv),n.filter(o=>!Au(o)).reduce((o,s)=>o+(lv.test(s)?cv:s===""?dv:pv),r)}function hv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gv(e,t){let{routesMeta:n}=e,r={},o="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=vv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=l.route;s.push({params:r,pathname:hn([o,d.pathname]),pathnameBase:jv(hn([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=hn([o,d.pathnameBase]))}return s}function vv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],a=s.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let y=l[p]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const x=l[p];return v&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function xv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function yv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _v(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?_r(e):e;return{pathname:n?n.startsWith("/")?n:Sv(n,t):t,search:Cv(r),hash:bv(o)}}function Sv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ra(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tf(e,t){let n=wv(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=_r(e):(o=yo({},e),de(!o.pathname||!o.pathname.includes("?"),ra("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),ra("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),ra("#","search","hash",o)));let s=e===""||o.pathname==="",a=s?"/":o.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=_v(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),jv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Nv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rf=["post","put","patch","delete"];new Set(Rf);const kv=["get",...Rf];new Set(kv);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_o.apply(this,arguments)}const vc=S.createContext(null),Bv=S.createContext(null),Wn=S.createContext(null),gs=S.createContext(null),Hn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),$f=S.createContext(null);function Pv(e,t){let{relative:n}=t===void 0?{}:t;ko()||de(!1);let{basename:r,navigator:o}=S.useContext(Wn),{hash:s,pathname:a,search:l}=Mf(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:hn([r,a])),o.createHref({pathname:c,search:l,hash:s})}function ko(){return S.useContext(gs)!=null}function vs(){return ko()||de(!1),S.useContext(gs).location}function Of(e){S.useContext(Wn).static||S.useLayoutEffect(e)}function Bo(){let{isDataRoute:e}=S.useContext(Hn);return e?Uv():Ev()}function Ev(){ko()||de(!1);let e=S.useContext(vc),{basename:t,future:n,navigator:r}=S.useContext(Wn),{matches:o}=S.useContext(Hn),{pathname:s}=vs(),a=JSON.stringify(Tf(o,n.v7_relativeSplatPath)),l=S.useRef(!1);return Of(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Lf(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:hn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function Mf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Wn),{matches:o}=S.useContext(Hn),{pathname:s}=vs(),a=JSON.stringify(Tf(o,r.v7_relativeSplatPath));return S.useMemo(()=>Lf(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Tv(e,t){return Lv(e,t)}function Lv(e,t,n,r){ko()||de(!1);let{navigator:o}=S.useContext(Wn),{matches:s}=S.useContext(Hn),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=vs(),d;if(t){var p;let C=typeof t=="string"?_r(t):t;c==="/"||(p=C.pathname)!=null&&p.startsWith(c)||de(!1),d=C}else d=u;let m=d.pathname||"/",v=m;if(c!=="/"){let C=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=sv(e,{pathname:v}),y=Fv(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:hn([c,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:hn([c,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return t&&y?S.createElement(gs.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sn.Pop}},y):y}function Rv(){let e=Dv(),t=Nv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const $v=S.createElement(Rv,null);class Ov extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Hn.Provider,{value:this.props.routeContext},S.createElement($f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mv(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(vc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Hn.Provider,{value:t},r)}function Fv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||de(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:v}=n,x=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,m)=>{let v,x=!1,y=null,C=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||$v,c&&(u<0&&m===0?(x=!0,C=null):u===m&&(x=!0,C=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,m+1)),f=()=>{let h;return v?h=y:x?h=C:p.route.Component?h=S.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,S.createElement(Mv,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?S.createElement(Ov,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var Ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ff||{}),Vi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vi||{});function Iv(e){let t=S.useContext(vc);return t||de(!1),t}function zv(e){let t=S.useContext(Bv);return t||de(!1),t}function Av(e){let t=S.useContext(Hn);return t||de(!1),t}function If(e){let t=Av(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function Dv(){var e;let t=S.useContext($f),n=zv(Vi.UseRouteError),r=If(Vi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Uv(){let{router:e}=Iv(Ff.UseNavigateStable),t=If(Vi.UseNavigateStable),n=S.useRef(!1);return Of(()=>{n.current=!0}),S.useCallback(function(o,s){s===void 0&&(s={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,_o({fromRouteId:t},s)))},[e,t])}function z(e){de(!1)}function Wv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=sn.Pop,navigator:s,static:a=!1,future:l}=e;ko()&&de(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:s,static:a,future:_o({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=_r(r));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:x="default"}=r,y=S.useMemo(()=>{let C=gc(d,c);return C==null?null:{location:{pathname:C,search:p,hash:m,state:v,key:x},navigationType:o}},[c,d,p,m,v,x,o]);return y==null?null:S.createElement(Wn.Provider,{value:u},S.createElement(gs.Provider,{children:n,value:y}))}function Hv(e){let{children:t,location:n}=e;return Tv(cl(t),n)}new Promise(()=>{});function cl(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let s=[...t,o];if(r.type===S.Fragment){n.push.apply(n,cl(r.props.children,s));return}r.type!==z&&de(!1),!r.props.index||!r.props.children||de(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=cl(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ul.apply(this,arguments)}function qv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Vv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gv(e,t){return e.button===0&&(!t||t==="_self")&&!Vv(e)}const Xv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Qv="6";try{window.__reactRouterVersion=Qv}catch{}const Kv="startTransition",Du=qm[Kv];function Jv(e){let{basename:t,children:n,future:r,window:o}=e,s=S.useRef();s.current==null&&(s.current=rv({window:o,v5Compat:!0}));let a=s.current,[l,c]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=S.useCallback(p=>{u&&Du?Du(()=>c(p)):c(p)},[c,u]);return S.useLayoutEffect(()=>a.listen(d),[a,d]),S.createElement(Wv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:p}=t,m=qv(t,Xv),{basename:v}=S.useContext(Wn),x,y=!1;if(typeof u=="string"&&Zv.test(u)&&(x=u,Yv))try{let h=new URL(window.location.href),_=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=gc(_.pathname,v);_.origin===h.origin&&w!=null?u=w+_.search+_.hash:y=!0}catch{}let C=Pv(u,{relative:o}),g=ex(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||g(h)}return S.createElement("a",ul({},m,{href:x||C,onClick:y||s?r:f,ref:n,target:c}))});var Uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uu||(Uu={}));var Wu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wu||(Wu={}));function ex(e,t){let{target:n,replace:r,state:o,preventScrollReset:s,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,c=Bo(),u=vs(),d=Mf(e,{relative:a});return S.useCallback(p=>{if(Gv(p,n)){p.preventDefault();let m=r!==void 0?r:qi(u)===qi(d);c(e,{replace:m,state:o,preventScrollReset:s,relative:a,unstable_viewTransition:l})}},[u,c,d,r,o,n,e,s,a,l])}const tx="_navbar_1itkf_3",nx="_logo_1itkf_16",rx="_hamburger_1itkf_23",ox="_navLinks_1itkf_32",ix="_navLink_1itkf_32",sx="_closeBtn_1itkf_48",ax="_profileMenuContainer_1itkf_52",lx="_userIcon_1itkf_56",cx="_profileMenu_1itkf_52",ux="_open_1itkf_108",ce={navbar:tx,logo:nx,hamburger:rx,navLinks:ox,navLink:ix,closeBtn:sx,profileMenuContainer:ax,userIcon:lx,profileMenu:cx,open:ux};var zf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hu=Ut.createContext&&Ut.createContext(zf),dx=["attr","size","title"];function px(e,t){if(e==null)return{};var n=fx(e,t),r,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fx(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}function qu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Xi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qu(Object(n),!0).forEach(function(r){mx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mx(e,t,n){return t=hx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hx(e){var t=gx(e,"string");return typeof t=="symbol"?t:t+""}function gx(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Af(e){return e&&e.map((t,n)=>Ut.createElement(t.tag,Xi({key:n},t.attr),Af(t.child)))}function Po(e){return t=>Ut.createElement(vx,Gi({attr:Xi({},e.attr)},t),Af(e.child))}function vx(e){var t=n=>{var{attr:r,size:o,title:s}=e,a=px(e,dx),l=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Ut.createElement("svg",Gi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:Xi(Xi({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Ut.createElement("title",null,s),e.children)};return Hu!==void 0?Ut.createElement(Hu.Consumer,null,n=>t(n)):t(zf)}function Vu(e){return Po({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Df(e){return Po({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function Uf(e){return Po({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Gu(e){return Po({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Wf(e){return Po({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const xc=S.createContext({authState:{token:null,username:null},setAuthState:()=>{}}),xx=({children:e})=>{const[t,n]=S.useState({token:localStorage.getItem("token"),username:null});return S.useEffect(()=>{const r=localStorage.getItem("token");r&&n({token:r,username:null})},[]),i.jsx(xc.Provider,{value:{authState:t,setAuthState:n},children:e})},yx=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!1),{authState:o,setAuthState:s}=S.useContext(xc),a=()=>{t(!e)},l=()=>{r(!n)},c=()=>{s({token:null,username:null}),localStorage.removeItem("token")};return i.jsxs("nav",{className:ce.navbar,children:[i.jsx("div",{className:ce.logo,children:i.jsx(L,{to:"/",children:i.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:ce.logoImage})})}),i.jsx("button",{className:ce.hamburger,onClick:a,children:e?i.jsx("span",{className:ce.closeIcon,children:"×"}):i.jsx("span",{children:"☰"})}),i.jsxs("ul",{className:`${ce.navLinks} ${e?ce.open:""}`,children:[i.jsx("li",{className:ce.closeBtn,onClick:a,children:"×"}),i.jsx("li",{children:i.jsx(L,{to:"/",className:ce.navLink,onClick:a,children:"Home"})}),i.jsx("li",{children:i.jsx(L,{to:"/components",className:ce.navLink,onClick:a,children:"Components"})}),i.jsx("li",{children:i.jsx(L,{to:"/utilities",className:ce.navLink,onClick:a,children:"Utilities"})}),i.jsx("li",{children:i.jsx(L,{to:"/documentation",className:ce.navLink,onClick:a,children:"Documentation"})}),i.jsx("li",{children:i.jsx(L,{to:"/examples",className:ce.navLink,onClick:a,children:"Examples"})}),i.jsx("li",{className:ce.userActions,children:o.token?i.jsxs("div",{className:ce.profileMenuContainer,children:[i.jsx(Wf,{className:ce.userIcon,onClick:l}),n&&i.jsxs("div",{className:ce.profileMenu,children:[i.jsx(L,{to:"/profile",className:ce.navLink,onClick:l,children:"Profile"}),i.jsx("button",{className:ce.navLink,onClick:c,children:"Logout"})]})]}):i.jsx(L,{to:"/signup",className:ce.navLink,onClick:a,children:"Sign Up"})})]})]})},_x="_home_iomrs_3",Sx="_header_iomrs_7",wx="_logo_iomrs_16",jx="_features_iomrs_34",Cx="_featureCard_iomrs_41",bx="_icon_iomrs_49",Nx="_getStarted_iomrs_74",kx="_getStartedIcon_iomrs_81",pe={home:_x,header:Sx,logo:wx,features:jx,featureCard:Cx,icon:bx,getStarted:Nx,getStartedIcon:kx},Bx=()=>i.jsxs("div",{className:pe.home,children:[i.jsxs("header",{className:pe.header,children:[i.jsx("img",{src:"https://via.placeholder.com/100",alt:"Toolkit Logo",className:pe.logo}),i.jsx("h1",{children:"Build fast, responsive sites with Wells Fargo UI Toolkit"}),i.jsx("p",{children:"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."})]}),i.jsxs("div",{className:pe.features,children:[i.jsxs("div",{className:pe.featureCard,children:[i.jsx("div",{className:pe.icon,children:i.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 1"})}),i.jsx("h3",{children:"Responsive Design"}),i.jsx("p",{children:"Create responsive designs that look great on all devices, from smartphones to desktops."}),i.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),i.jsxs("div",{className:pe.featureCard,children:[i.jsx("div",{className:pe.icon,children:i.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 2"})}),i.jsx("h3",{children:"Reusable Components"}),i.jsx("p",{children:"Utilize a library of reusable components to maintain consistency across projects."}),i.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),i.jsxs("div",{className:pe.featureCard,children:[i.jsx("div",{className:pe.icon,children:i.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 3"})}),i.jsx("h3",{children:"Customization"}),i.jsx("p",{children:"Easily customize components to match your branding and design requirements."}),i.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]}),i.jsxs("div",{className:pe.featureCard,children:[i.jsx("div",{className:pe.icon,children:i.jsx("img",{src:"https://via.placeholder.com/50",alt:"Feature Icon 4"})}),i.jsx("h3",{children:"Accessibility"}),i.jsx("p",{children:"Ensure your applications are accessible to all users with built-in accessibility features."}),i.jsx("a",{href:"#",className:pe.learnMore,children:"Learn more >"})]})]}),i.jsxs("div",{className:pe.getStarted,children:[i.jsx("div",{className:pe.getStartedIcon,children:i.jsx("img",{src:"https://via.placeholder.com/50",alt:"Get Started Icon"})}),i.jsx("h2",{children:"Get started any way you want"}),i.jsx("p",{children:"Jump right into building with the Wells Fargo UI Toolkit—use the CDN, install it via package manager, or download the source code."}),i.jsx("a",{href:"#",className:pe.getStartedLink,children:"Read installation docs >"})]})]}),Px="_componentsContainer_b3o92_3",Ex="_heroSection_b3o92_7",Tx="_searchBox_b3o92_32",Lx="_sectionsContainer_b3o92_47",Rx="_section_b3o92_47",$x="_sectionHeading_b3o92_58",Ox="_blocksContainer_b3o92_65",Mx="_block_b3o92_65",Fx="_blockImage_b3o92_86",Ix="_blockContent_b3o92_96",zx="_blockTitle_b3o92_100",Ax="_blockCount_b3o92_105",B={componentsContainer:Px,heroSection:Ex,searchBox:Tx,sectionsContainer:Lx,section:Rx,sectionHeading:$x,blocksContainer:Ox,block:Mx,blockImage:Fx,blockContent:Ix,blockTitle:zx,blockCount:Ax},Dx="_heroSection_1ftnk_1",Ux="_mainHeading_1ftnk_7",Wx="_heroGrid_1ftnk_13",Hx="_heroBox_1ftnk_20",qx="_demoButton_1ftnk_29",Rt={heroSection:Dx,mainHeading:Ux,heroGrid:Wx,heroBox:Hx,demoButton:qx},Hf=()=>i.jsxs("div",{className:Rt.heroSection,children:[i.jsx("h1",{className:Rt.mainHeading,children:"Hero Section"}),i.jsxs("div",{className:Rt.heroGrid,children:[i.jsxs("div",{className:Rt.heroBox,children:[i.jsx("h2",{children:"Hero Demo 1"}),i.jsx(L,{to:"/herosection1",children:i.jsx("button",{className:Rt.demoButton,children:"View Demo"})})]}),i.jsxs("div",{className:Rt.heroBox,children:[i.jsx("h2",{children:"Hero Demo 2"}),i.jsx(L,{to:"/herosection2",children:i.jsx("button",{className:Rt.demoButton,children:"View Demo"})})]}),i.jsxs("div",{className:Rt.heroBox,children:[i.jsx("h2",{children:"Hero Demo 3"}),i.jsx(L,{to:"/herosection3",children:i.jsx("button",{className:Rt.demoButton,children:"View Demo"})})]})]})]}),Vx="_featureSection_7qm90_1",Gx="_mainHeading_7qm90_7",Xx="_featureGrid_7qm90_13",Qx="_featureBox_7qm90_20",Kx="_demoButton_7qm90_29",$t={featureSection:Vx,mainHeading:Gx,featureGrid:Xx,featureBox:Qx,demoButton:Kx},qf=()=>i.jsxs("div",{className:$t.featureSection,children:[i.jsx("h1",{className:$t.mainHeading,children:"Feature Section"}),i.jsxs("div",{className:$t.featureGrid,children:[i.jsxs("div",{className:$t.featureBox,children:[i.jsx("h2",{children:"Feature Demo 1"}),i.jsx(L,{to:"/featuresection1",className:$t.demoButton,children:"View Demo"})]}),i.jsxs("div",{className:$t.featureBox,children:[i.jsx("h2",{children:"Feature Demo 2"}),i.jsx(L,{to:"/featuresection2",className:$t.demoButton,children:"View Demo"})]}),i.jsxs("div",{className:$t.featureBox,children:[i.jsx("h2",{children:"Feature Demo 3"}),i.jsx(L,{to:"/featuresection3",className:$t.demoButton,children:"View Demo"})]})]})]}),Jx="_ctaContainer_1xpsc_1",Yx="_ctaBox_1xpsc_8",Zx="_demoButton_1xpsc_16",jn={ctaContainer:Jx,ctaBox:Yx,demoButton:Zx},Vf=()=>{const e=Bo(),t=n=>{e(`/ctasection${n}`)};return i.jsxs("div",{className:jn.ctaContainer,children:[i.jsxs("div",{className:jn.ctaBox,children:[i.jsx("h2",{children:"CTA Section 1"}),i.jsx("button",{onClick:()=>t(1),className:jn.demoButton,children:"Show Demo"})]}),i.jsxs("div",{className:jn.ctaBox,children:[i.jsx("h2",{children:"CTA Section 2"}),i.jsx("button",{onClick:()=>t(2),className:jn.demoButton,children:"Show Demo"})]}),i.jsxs("div",{className:jn.ctaBox,children:[i.jsx("h2",{children:"CTA Section 3"}),i.jsx("button",{onClick:()=>t(3),className:jn.demoButton,children:"Show Demo"})]})]})},e0="_pricingPageContainer_sx37m_1",t0="_mainHeading_sx37m_6",n0="_pricingDemosContainer_sx37m_11",r0="_pricingDemoBox_sx37m_17",o0="_viewDemoButton_sx37m_25",Cn={pricingPageContainer:e0,mainHeading:t0,pricingDemosContainer:n0,pricingDemoBox:r0,viewDemoButton:o0},Gf=()=>i.jsxs("div",{className:Cn.pricingPageContainer,children:[i.jsx("h1",{className:Cn.mainHeading,children:"Pricing Pages"}),i.jsxs("div",{className:Cn.pricingDemosContainer,children:[i.jsxs("div",{className:Cn.pricingDemoBox,children:[i.jsx("h2",{children:"Pricing Page 1"}),i.jsx("p",{children:"A simple and elegant pricing page for various plans."}),i.jsx(L,{to:"/pricingpage1",children:i.jsx("button",{className:Cn.viewDemoButton,children:"View Demo"})})]}),i.jsxs("div",{className:Cn.pricingDemoBox,children:[i.jsx("h2",{children:"Pricing Page 2"}),i.jsx("p",{children:"A modern and detailed pricing page with more features."}),i.jsx(L,{to:"/pricingpage2",children:i.jsx("button",{className:Cn.viewDemoButton,children:"View Demo"})})]})]})]}),i0={},s0=()=>i.jsx("div",{className:i0.HeaderSection}),a0={},l0=()=>i.jsx("div",{className:a0.FooterSection}),c0={},u0=()=>i.jsx("div",{className:c0.TestimonialsSection}),d0={},p0=()=>i.jsx("div",{className:d0.FAQSection}),f0={},m0=()=>i.jsx("div",{className:f0.TeamSection}),h0={},g0=()=>i.jsx("div",{className:h0.NewsletterSection}),v0={},x0=()=>i.jsx("div",{className:v0.LandingPage}),y0="_aboutPageContainer_mi9ot_1",_0="_pageTitle_mi9ot_6",S0="_pageDescription_mi9ot_11",w0="_boxContainer_mi9ot_17",j0="_box_mi9ot_17",C0="_boxImage_mi9ot_38",b0="_boxContent_mi9ot_44",N0="_viewDemoButton_mi9ot_59",je={aboutPageContainer:y0,pageTitle:_0,pageDescription:S0,boxContainer:w0,box:j0,boxImage:C0,boxContent:b0,viewDemoButton:N0},Xf=()=>i.jsxs("div",{className:je.aboutPageContainer,children:[i.jsx("h1",{className:je.pageTitle,children:"About Us"}),i.jsx("p",{className:je.pageDescription,children:"Explore the various aspects of our company, mission, and values through the following pages."}),i.jsxs("div",{className:je.boxContainer,children:[i.jsxs("div",{className:je.box,children:[i.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 1",className:je.boxImage}),i.jsxs("div",{className:je.boxContent,children:[i.jsx("h2",{children:"Company Overview"}),i.jsx("p",{children:"Learn more about our company's history, mission, and values."}),i.jsx(L,{to:"/aboutpage1",className:je.viewDemoButton,children:"View Demo"})]})]}),i.jsxs("div",{className:je.box,children:[i.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 2",className:je.boxImage}),i.jsxs("div",{className:je.boxContent,children:[i.jsx("h2",{children:"Our Team"}),i.jsx("p",{children:"Meet the dedicated team behind our company's success."}),i.jsx(L,{to:"/aboutpage2",className:je.viewDemoButton,children:"View Demo"})]})]}),i.jsxs("div",{className:je.box,children:[i.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"About Page 3",className:je.boxImage}),i.jsxs("div",{className:je.boxContent,children:[i.jsx("h2",{children:"Contact Us"}),i.jsx("p",{children:"Get in touch with us for any inquiries or support."}),i.jsx(L,{to:"/aboutpage3",className:je.viewDemoButton,children:"View Demo"})]})]})]})]}),k0={},B0=()=>i.jsx("div",{className:k0.ContactPage}),P0="_loginPageContainer_c2z96_1",E0="_pageBoxes_c2z96_6",T0="_pageBox_c2z96_6",L0="_demoButton_c2z96_34",ti={loginPageContainer:P0,pageBoxes:E0,pageBox:T0,demoButton:L0},Qf=()=>{const e=[{name:"Login Page 1",path:"/loginpage1"},{name:"Login Page 2",path:"/loginpage2"},{name:"Login Page 3",path:"/loginpage3"}];return i.jsxs("div",{className:ti.loginPageContainer,children:[i.jsx("h1",{children:"Login Pages"}),i.jsx("div",{className:ti.pageBoxes,children:e.map((t,n)=>i.jsxs("div",{className:ti.pageBox,children:[i.jsx("h2",{children:t.name}),i.jsxs("p",{children:["Explore the design and functionality of ",t.name,"."]}),i.jsx(L,{to:t.path,className:ti.demoButton,children:"View Demo"})]},n))})]})},R0={},$0=()=>i.jsx("div",{className:R0.RegistrationPage}),O0={},M0=()=>i.jsx("div",{className:O0.DashboardPage}),F0={},I0=()=>i.jsx("div",{className:F0.ProfilePage}),z0={},A0=()=>i.jsx("div",{className:z0.GridLayout}),D0={},U0=()=>i.jsx("div",{className:D0.FlexLayout}),W0="_container_13i8j_1",H0="_formBoxes_13i8j_6",q0="_formBox_13i8j_6",V0="_previewImage_13i8j_27",G0="_demoButton_13i8j_33",ft={container:W0,formBoxes:H0,formBox:q0,previewImage:V0,demoButton:G0},Kf=()=>i.jsxs("div",{className:ft.container,children:[i.jsx("h1",{children:"Login Forms"}),i.jsxs("div",{className:ft.formBoxes,children:[i.jsxs("div",{className:ft.formBox,children:[i.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"Login Form 1",className:ft.previewImage}),i.jsx("h2",{children:"Login Form 1"}),i.jsx(L,{to:"/loginform1",className:ft.demoButton,children:"Show Demo"})]}),i.jsxs("div",{className:ft.formBox,children:[i.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"Login Form 2",className:ft.previewImage}),i.jsx("h2",{children:"Login Form 2"}),i.jsx(L,{to:"/loginform2",className:ft.demoButton,children:"Show Demo"})]}),i.jsxs("div",{className:ft.formBox,children:[i.jsx("img",{src:"https://via.placeholder.com/300x200",alt:"Login Form 3",className:ft.previewImage}),i.jsx("h2",{children:"Login Form 3"}),i.jsx(L,{to:"/loginform3",className:ft.demoButton,children:"Show Demo"})]})]})]}),X0={},Q0=()=>i.jsx("div",{className:X0.RegistrationForm}),K0={},J0=()=>i.jsx("div",{className:K0.ContactForm}),Y0={},Z0=()=>i.jsx("div",{className:Y0.SubscriptionForm}),ey={},ty=()=>i.jsx("div",{className:ey.FeedbackForm}),ny={},ry=()=>i.jsx("div",{className:ny.SearchForm}),oy="_buttonPage_md1jm_1",iy="_buttonGrid_md1jm_5",sy="_buttonSection_md1jm_11",ay="_buttonExample_md1jm_23",ly="_button_md1jm_1",cy="_buttonText_md1jm_36",uy="_signOn1_md1jm_54",dy="_signOn2_md1jm_72",py="_learnMore_md1jm_91",fy="_learnMore2_md1jm_110",my="_copyButton_md1jm_131",hy="_codeBlock_md1jm_145",gy="_toggleSwitch_md1jm_154",vy="_slider_md1jm_168",Ot={buttonPage:oy,buttonGrid:iy,buttonSection:sy,buttonExample:ay,button:ly,buttonText:cy,signOn1:uy,signOn2:dy,learnMore:py,learnMore2:fy,copyButton:my,codeBlock:hy,toggleSwitch:gy,slider:vy},xy=[{label:"Sign On",className:"buttonText",tsxCode:"<div className={styles.buttonText}>Sign On</div>",cssCode:`
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
    `}],Jf=()=>{const[e,t]=S.useState(null),[n,r]=S.useState({}),o=a=>{navigator.clipboard.writeText(a),t(a),setTimeout(()=>t(null),2e3)},s=a=>{r(l=>({...l,[a]:!l[a]}))};return i.jsxs("div",{className:Ot.buttonPage,children:[i.jsx("h1",{children:"Button Components"}),i.jsx("div",{className:Ot.buttonGrid,children:xy.map((a,l)=>i.jsxs("div",{className:Ot.buttonSection,children:[i.jsx("div",{className:Ot.buttonExample,children:i.jsx("div",{className:Ot[a.className],children:a.label})}),i.jsxs("label",{className:Ot.toggleSwitch,children:[i.jsx("input",{type:"checkbox",checked:n[l]||!1,onChange:()=>s(l)}),i.jsx("span",{className:Ot.slider})]}),i.jsx("button",{className:Ot.copyButton,onClick:()=>o(n[l]?a.cssCode:a.tsxCode),children:e===(n[l]?a.cssCode:a.tsxCode)?"Copied!":"Copy Code"}),i.jsx("pre",{className:Ot.codeBlock,children:n[l]?a.cssCode:a.tsxCode})]},l))})]})},yy="_cardSectionContainer_6gyg9_1",_y="_cardsWrapper_6gyg9_5",Sy="_cardWrapper_6gyg9_11",wy="_card_6gyg9_1",jy="_cardImage_6gyg9_28",Cy="_cardContent_6gyg9_39",by="_cardButton_6gyg9_43",Ny="_toggleContainer_6gyg9_57",ky="_toggleButton_6gyg9_63",By="_active_6gyg9_72",Py="_codeContainer_6gyg9_76",Ey="_code_6gyg9_76",Ty="_copyButton_6gyg9_93",Ly="_copied_6gyg9_106",I={cardSectionContainer:yy,cardsWrapper:_y,cardWrapper:Sy,card:wy,cardImage:jy,cardContent:Cy,cardButton:by,toggleContainer:Ny,toggleButton:ky,active:By,codeContainer:Py,code:Ey,copyButton:Ty,copied:Ly},Yf=()=>{const[e,t]=S.useState(null),[n,r]=S.useState("tsx"),[o,s]=S.useState(!1),a=[{id:"1",title:"Earn up to 60,000 bonus points",description:"with the Choice Privileges® Mastercard® Credit Cards",buttonText:"Learn more",imageUrl:"150 x 150"},{id:"2",title:"Plan. Prepare. Enjoy home.",description:"Discover tools and tips to help make buying or refinancing a little easier",buttonText:"Get tips for homebuying",imageUrl:"150 x 150"},{id:"3",title:"Save. Invest. Retire well.",description:"Discover how to start saving to meet your retirement goals",buttonText:"Get ready for retirement",imageUrl:"150 x 150"},{id:"4",title:"Scams are on the rise. Protect yourself.",description:"Recognize the tell-tale signs of scams so you won't be the next victim.",buttonText:"See what to look for",imageUrl:"150 x 150"},{id:"5",title:"Investment Strategy update",description:"Weekly market insights and possible impacts on investors from Wells Fargo Investment Institute.",buttonText:"Get the report",imageUrl:"150 x 150"},{id:"6",title:"Get ready for retirement",description:"Discover how to start saving to meet your retirement goals.",buttonText:"Learn more",imageUrl:"150 x 150"}],l=u=>{navigator.clipboard.writeText(u),s(!0),setTimeout(()=>s(!1),2e3)},c=u=>{var v,x,y,C;if(u!==e)return null;const d=`<div className={styles.card}>
  <div className={styles.cardImage}>
    ${(v=a.find(g=>g.id===u))==null?void 0:v.imageUrl}
  </div>
  <div className={styles.cardContent}>
    <h3>${(x=a.find(g=>g.id===u))==null?void 0:x.title}</h3>
    <p>${(y=a.find(g=>g.id===u))==null?void 0:y.description}</p>
    <button className={styles.cardButton}>
      ${(C=a.find(g=>g.id===u))==null?void 0:C.buttonText}
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
}`;return i.jsxs("div",{className:I.codeContainer,children:[i.jsx("button",{className:`${I.copyButton} ${o?I.copied:""}`,onClick:()=>l(m),children:o?"Copied!":"Copy"}),i.jsx("pre",{className:I.code,children:m})]})};return i.jsxs("div",{className:I.cardSectionContainer,children:[i.jsx("h2",{children:"Card Section"}),i.jsx("h3",{children:"Rewards Cards"}),i.jsx("div",{className:I.cardsWrapper,children:a.slice(0,2).map(u=>i.jsxs("div",{className:I.cardWrapper,children:[i.jsxs("div",{className:I.card,children:[i.jsx("div",{className:I.cardImage,children:u.imageUrl}),i.jsxs("div",{className:I.cardContent,children:[i.jsx("h3",{children:u.title}),i.jsx("p",{children:u.description}),i.jsx("button",{className:I.cardButton,children:u.buttonText})]})]}),i.jsxs("div",{className:I.toggleContainer,children:[i.jsx("div",{className:`${I.toggleButton} ${e===u.id&&n==="tsx"?I.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),i.jsx("div",{className:`${I.toggleButton} ${e===u.id&&n==="css"?I.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),i.jsx("h3",{children:"Home Improvement Cards"}),i.jsx("div",{className:I.cardsWrapper,children:a.slice(2,4).map(u=>i.jsxs("div",{className:I.cardWrapper,children:[i.jsxs("div",{className:I.card,children:[i.jsx("div",{className:I.cardImage,children:u.imageUrl}),i.jsxs("div",{className:I.cardContent,children:[i.jsx("h3",{children:u.title}),i.jsx("p",{children:u.description}),i.jsx("button",{className:I.cardButton,children:u.buttonText})]})]}),i.jsxs("div",{className:I.toggleContainer,children:[i.jsx("div",{className:`${I.toggleButton} ${e===u.id&&n==="tsx"?I.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),i.jsx("div",{className:`${I.toggleButton} ${e===u.id&&n==="css"?I.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))}),i.jsx("h3",{children:"Security and Investment Cards"}),i.jsx("div",{className:I.cardsWrapper,children:a.slice(4,6).map(u=>i.jsxs("div",{className:I.cardWrapper,children:[i.jsxs("div",{className:I.card,children:[i.jsx("div",{className:I.cardImage,children:u.imageUrl}),i.jsxs("div",{className:I.cardContent,children:[i.jsx("h3",{children:u.title}),i.jsx("p",{children:u.description}),i.jsx("button",{className:I.cardButton,children:u.buttonText})]})]}),i.jsxs("div",{className:I.toggleContainer,children:[i.jsx("div",{className:`${I.toggleButton} ${e===u.id&&n==="tsx"?I.active:""}`,onClick:()=>{t(u.id),r("tsx")},children:"TSX"}),i.jsx("div",{className:`${I.toggleButton} ${e===u.id&&n==="css"?I.active:""}`,onClick:()=>{t(u.id),r("css")},children:"CSS"})]}),c(u.id)]},u.id))})]})},Ry="_navbarSection_b7mxw_1",$y="_navbar_b7mxw_1",Oy="_navbarSecondary_b7mxw_5",My="_logo_b7mxw_18",Fy="_hamburger_b7mxw_25",Iy="_navLinks_b7mxw_34",zy="_navLink_b7mxw_34",Ay="_closeBtn_b7mxw_50",Dy="_profileMenuContainer_b7mxw_54",Uy="_userIcon_b7mxw_58",Wy="_profileMenu_b7mxw_54",Hy="_open_b7mxw_104",qy="_codeBlock_b7mxw_130",Vy="_toggleContainer_b7mxw_158",Gy="_toggleButton_b7mxw_164",Xy="_active_b7mxw_191",U={navbarSection:Ry,navbar:$y,navbarSecondary:Oy,logo:My,hamburger:Fy,navLinks:Iy,navLink:zy,closeBtn:Ay,profileMenuContainer:Dy,userIcon:Uy,profileMenu:Wy,open:Hy,codeBlock:qy,toggleContainer:Vy,toggleButton:Gy,active:Xy},Zf=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!1),[o,s]=S.useState(null),[a,l]=S.useState(!1),c=()=>{t(!e)},u=()=>{r(!n)},d=()=>{},p=g=>{o===g?l(!a):(s(g),l(!1))},m=g=>{navigator.clipboard.writeText(g).then(()=>{alert("Code copied to clipboard")})},v=`
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
`,C=`
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
`;return i.jsxs("div",{className:U.navbarSection,children:[i.jsx("h2",{children:"Navbar 1"}),i.jsxs("nav",{className:U.navbar,children:[i.jsx("div",{className:U.logo,children:i.jsx(L,{to:"/",children:i.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:U.logoImage})})}),i.jsx("button",{className:U.hamburger,onClick:c,children:e?i.jsx(Gu,{}):i.jsx(Vu,{})}),i.jsxs("ul",{className:`${U.navLinks} ${e?U.open:""}`,children:[i.jsx("li",{className:U.closeBtn,onClick:c,children:"×"}),i.jsx("li",{children:i.jsx(L,{to:"/",className:U.navLink,onClick:c,children:"Home"})}),i.jsx("li",{children:i.jsx(L,{to:"/services",className:U.navLink,onClick:c,children:"Services"})}),i.jsx("li",{children:i.jsx(L,{to:"/about",className:U.navLink,onClick:c,children:"About"})}),i.jsx("li",{children:i.jsx(L,{to:"/contact",className:U.navLink,onClick:c,children:"Contact"})}),i.jsxs("li",{className:U.userActions,children:[i.jsx(Wf,{className:U.userIcon,onClick:u}),n&&i.jsxs("div",{className:U.profileMenu,children:[i.jsx(L,{to:"/profile",className:U.navLink,onClick:u,children:"Profile"}),i.jsx("button",{className:U.navLink,onClick:d,children:"Logout"})]})]})]})]}),i.jsx("div",{className:U.toggleContainer,children:i.jsx("button",{className:`${U.toggleButton} ${o==="navbar1"&&a?U.active:""}`,onClick:()=>p("navbar1"),children:o==="navbar1"&&a?"CSS":"TSX"})}),o==="navbar1"&&i.jsxs("div",{className:U.codeBlock,children:[i.jsx("pre",{children:i.jsx("code",{children:a?x:v})}),i.jsxs("button",{onClick:()=>m(a?x:v),children:["Copy ",a?"CSS":"TSX"]})]}),i.jsx("div",{style:{marginBottom:"2rem"}}),i.jsx("h2",{children:"Navbar 2"}),i.jsxs("nav",{className:U.navbar,children:[i.jsx("div",{className:U.logo,children:i.jsx(L,{to:"/",children:i.jsx("img",{src:"https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png",alt:"Wells Fargo Logo",className:U.logoImage})})}),i.jsx("button",{className:U.hamburger,onClick:c,children:e?i.jsx(Gu,{}):i.jsx(Vu,{})}),i.jsxs("ul",{className:`${U.navLinks} ${e?U.open:""}`,children:[i.jsx("li",{className:U.closeBtn,onClick:c,children:"×"}),i.jsx("li",{children:i.jsx(L,{to:"/",className:U.navLink,onClick:c,children:"Home"})}),i.jsx("li",{children:i.jsx(L,{to:"/features",className:U.navLink,onClick:c,children:"Features"})}),i.jsx("li",{children:i.jsx(L,{to:"/pricing",className:U.navLink,onClick:c,children:"Pricing"})}),i.jsx("li",{children:i.jsx(L,{to:"/faq",className:U.navLink,onClick:c,children:"FAQ"})})]})]}),i.jsx("div",{className:U.toggleContainer,children:i.jsx("button",{className:`${U.toggleButton} ${o==="navbar2"&&a?U.active:""}`,onClick:()=>p("navbar2"),children:o==="navbar2"&&a?"CSS":"TSX"})}),o==="navbar2"&&i.jsxs("div",{className:U.codeBlock,children:[i.jsx("pre",{children:i.jsx("code",{children:a?C:y})}),i.jsxs("button",{onClick:()=>m(a?C:y),children:["Copy ",a?"CSS":"TSX"]})]})]})},Qy={},Ky=()=>i.jsx("div",{className:Qy.ImageGallery}),Jy={},Yy=()=>i.jsx("div",{className:Jy.Chart}),Zy={},e1=()=>i.jsx("div",{className:Zy.Divider}),t1=()=>{const[e,t]=S.useState(""),n=[{name:"Hero Section",category:"Hero Section",count:12,component:Hf},{name:"Feature Section",category:"Feature Section",count:18,component:qf},{name:"CTA Section",category:"CTA Section",count:11,component:Vf},{name:"Pricing Page",category:"Pricing Page",count:13,component:Gf},{name:"Header Section",category:"Header Section",count:10,component:s0},{name:"Footer Section",category:"Footer Section",count:7,component:l0},{name:"Testimonials Section",category:"Testimonials Section",count:7,component:u0},{name:"FAQ Section",category:"FAQ Section",count:5,component:p0},{name:"Team Section",category:"Team Section",count:5,component:m0},{name:"Newsletter Section",category:"Newsletter Section",count:7,component:g0}],r=[{name:"Landing Page",category:"Landing Page",count:5,component:x0},{name:"About Page",category:"About Page",count:8,component:Xf},{name:"Contact Page",category:"Contact Page",count:4,component:B0},{name:"Login Page",category:"Login Page",count:4,component:Qf},{name:"Registration Page",category:"Registration Page",count:4,component:$0},{name:"Dashboard Page",category:"Dashboard Page",count:4,component:M0},{name:"Profile Page",category:"Profile Page",count:4,component:I0}],o=[{name:"Grid Layout",category:"Grid Layout",count:10,component:A0},{name:"Flex Layout",category:"Flex Layout",count:7,component:U0}],s=[{name:"Login Form",category:"Login Form",count:6,component:Kf},{name:"Registration Form",category:"Registration Form",count:9,component:Q0},{name:"Contact Form",category:"Contact Form",count:4,component:J0},{name:"Subscription Form",category:"Subscription Form",count:4,component:Z0},{name:"Feedback Form",category:"Feedback Form",count:4,component:ty},{name:"Search Form",category:"Search Form",count:4,component:ry}],a=[{name:"Button",category:"Button",count:8,component:Jf},{name:"Card Section",category:"Card Section",count:12,component:Yf}],l=[{name:"Navbar Section",category:"Navbar Section",count:5,component:Zf}],c=[{name:"Image Gallery",category:"Image Gallery",count:4,component:Ky}],u=[{name:"Chart",category:"Chart",count:4,component:Yy}],d=[{name:"Divider",category:"Divider",count:3,component:e1}],p=m=>m.filter(v=>v.name.toLowerCase().includes(e.toLowerCase()));return i.jsxs("div",{className:B.componentsContainer,children:[i.jsxs("div",{className:B.heroSection,children:[i.jsx("h1",{children:"Huge collection of sections"}),i.jsx("h2",{children:"Infinite combinations"}),i.jsx("p",{children:"Discover a multitude of customizable options to craft pixel-perfect pages with ease."}),i.jsx("div",{className:B.searchBox,children:i.jsx("input",{type:"text",placeholder:"Search for multiple components...",value:e,onChange:m=>t(m.target.value)})})]}),i.jsxs("div",{className:B.sectionsContainer,children:[i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Page Sections"}),i.jsx("div",{className:B.blocksContainer,children:p(n).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Pages"}),i.jsx("div",{className:B.blocksContainer,children:p(r).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Layouts"}),i.jsx("div",{className:B.blocksContainer,children:p(o).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Forms"}),i.jsx("div",{className:B.blocksContainer,children:p(s).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"UI Elements"}),i.jsx("div",{className:B.blocksContainer,children:p(a).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Navigation"}),i.jsx("div",{className:B.blocksContainer,children:p(l).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Media"}),i.jsx("div",{className:B.blocksContainer,children:p(c).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Data Display"}),i.jsx("div",{className:B.blocksContainer,children:p(u).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]}),i.jsxs("div",{className:B.section,children:[i.jsx("h3",{className:B.sectionHeading,children:"Utility Components"}),i.jsx("div",{className:B.blocksContainer,children:p(d).map((m,v)=>i.jsx(L,{to:`/${m.name.toLowerCase().replace(/ /g,"")}`,className:B.blockLink,children:i.jsxs("div",{className:B.block,children:[i.jsx("div",{className:B.blockImage,children:"Image"}),i.jsxs("div",{className:B.blockContent,children:[i.jsx("p",{className:B.blockTitle,children:m.category}),i.jsxs("p",{className:B.blockCount,children:[m.count," components"]})]})]})},v))})]})]})]})},n1=()=>i.jsx("div",{children:"Utilities"}),r1=()=>i.jsx("div",{children:"Documentation"}),o1="_examples_mznfb_1",i1="_grid_mznfb_5",s1="_card_mznfb_11",a1="_demoButton_mznfb_21",ni={examples:o1,grid:i1,card:s1,demoButton:a1},l1=()=>{const e=Bo(),t=r=>{e(r)},n=[{title:"Template 1: Business Website",path:"/examples/template1"},{title:"Template 2: Portfolio",path:"/examples/template2"},{title:"Template 3: E-commerce",path:"/examples/template3"},{title:"Template 4: Blog",path:"/examples/template4"},{title:"Template 5: Landing Page",path:"/examples/template5"}];return i.jsxs("div",{className:ni.examples,children:[i.jsx("h1",{children:"Examples"}),i.jsx("div",{className:ni.grid,children:n.map((r,o)=>i.jsxs("div",{className:ni.card,children:[i.jsx("h2",{children:r.title}),i.jsx("button",{onClick:()=>t(r.path),className:ni.demoButton,children:"Show Demo"})]},o))})]})};function em(e,t){return function(){return e.apply(t,arguments)}}const{toString:c1}=Object.prototype,{getPrototypeOf:yc}=Object,xs=(e=>t=>{const n=c1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),bt=e=>(e=e.toLowerCase(),t=>xs(t)===e),ys=e=>t=>typeof t===e,{isArray:Sr}=Array,So=ys("undefined");function u1(e){return e!==null&&!So(e)&&e.constructor!==null&&!So(e.constructor)&&ct(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tm=bt("ArrayBuffer");function d1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tm(e.buffer),t}const p1=ys("string"),ct=ys("function"),nm=ys("number"),_s=e=>e!==null&&typeof e=="object",f1=e=>e===!0||e===!1,yi=e=>{if(xs(e)!=="object")return!1;const t=yc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},m1=bt("Date"),h1=bt("File"),g1=bt("Blob"),v1=bt("FileList"),x1=e=>_s(e)&&ct(e.pipe),y1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ct(e.append)&&((t=xs(e))==="formdata"||t==="object"&&ct(e.toString)&&e.toString()==="[object FormData]"))},_1=bt("URLSearchParams"),[S1,w1,j1,C1]=["ReadableStream","Request","Response","Headers"].map(bt),b1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Eo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Sr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),a=s.length;let l;for(r=0;r<a;r++)l=s[r],t.call(null,e[l],l,e)}}function rm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const om=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,im=e=>!So(e)&&e!==om;function dl(){const{caseless:e}=im(this)&&this||{},t={},n=(r,o)=>{const s=e&&rm(t,o)||o;yi(t[s])&&yi(r)?t[s]=dl(t[s],r):yi(r)?t[s]=dl({},r):Sr(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Eo(arguments[r],n);return t}const N1=(e,t,n,{allOwnKeys:r}={})=>(Eo(t,(o,s)=>{n&&ct(o)?e[s]=em(o,n):e[s]=o},{allOwnKeys:r}),e),k1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),B1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},P1=(e,t,n,r)=>{let o,s,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&yc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},E1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},T1=e=>{if(!e)return null;if(Sr(e))return e;let t=e.length;if(!nm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},L1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&yc(Uint8Array)),R1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},$1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},O1=bt("HTMLFormElement"),M1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Xu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F1=bt("RegExp"),sm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Eo(n,(o,s)=>{let a;(a=t(o,s,e))!==!1&&(r[s]=a||o)}),Object.defineProperties(e,r)},I1=e=>{sm(e,(t,n)=>{if(ct(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ct(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},z1=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return Sr(e)?r(e):r(String(e).split(t)),n},A1=()=>{},D1=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,oa="abcdefghijklmnopqrstuvwxyz",Qu="0123456789",am={DIGIT:Qu,ALPHA:oa,ALPHA_DIGIT:oa+oa.toUpperCase()+Qu},U1=(e=16,t=am.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function W1(e){return!!(e&&ct(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const H1=e=>{const t=new Array(10),n=(r,o)=>{if(_s(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=Sr(r)?[]:{};return Eo(r,(a,l)=>{const c=n(a,o+1);!So(c)&&(s[l]=c)}),t[o]=void 0,s}}return r};return n(e,0)},q1=bt("AsyncFunction"),V1=e=>e&&(_s(e)||ct(e))&&ct(e.then)&&ct(e.catch),j={isArray:Sr,isArrayBuffer:tm,isBuffer:u1,isFormData:y1,isArrayBufferView:d1,isString:p1,isNumber:nm,isBoolean:f1,isObject:_s,isPlainObject:yi,isReadableStream:S1,isRequest:w1,isResponse:j1,isHeaders:C1,isUndefined:So,isDate:m1,isFile:h1,isBlob:g1,isRegExp:F1,isFunction:ct,isStream:x1,isURLSearchParams:_1,isTypedArray:L1,isFileList:v1,forEach:Eo,merge:dl,extend:N1,trim:b1,stripBOM:k1,inherits:B1,toFlatObject:P1,kindOf:xs,kindOfTest:bt,endsWith:E1,toArray:T1,forEachEntry:R1,matchAll:$1,isHTMLForm:O1,hasOwnProperty:Xu,hasOwnProp:Xu,reduceDescriptors:sm,freezeMethods:I1,toObjectSet:z1,toCamelCase:M1,noop:A1,toFiniteNumber:D1,findKey:rm,global:om,isContextDefined:im,ALPHABET:am,generateString:U1,isSpecCompliantForm:W1,toJSONObject:H1,isAsyncFn:q1,isThenable:V1};function R(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}j.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lm=R.prototype,cm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{cm[e]={value:e}});Object.defineProperties(R,cm);Object.defineProperty(lm,"isAxiosError",{value:!0});R.from=(e,t,n,r,o,s)=>{const a=Object.create(lm);return j.toFlatObject(e,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),R.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,s&&Object.assign(a,s),a};const G1=null;function pl(e){return j.isPlainObject(e)||j.isArray(e)}function um(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Ku(e,t,n){return e?e.concat(t).map(function(o,s){return o=um(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function X1(e){return j.isArray(e)&&!e.some(pl)}const Q1=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Ss(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,C){return!j.isUndefined(C[y])});const r=n.metaTokens,o=n.visitor||d,s=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(o))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(j.isDate(x))return x.toISOString();if(!c&&j.isBlob(x))throw new R("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(x)||j.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,y,C){let g=x;if(x&&!C&&typeof x=="object"){if(j.endsWith(y,"{}"))y=r?y:y.slice(0,-2),x=JSON.stringify(x);else if(j.isArray(x)&&X1(x)||(j.isFileList(x)||j.endsWith(y,"[]"))&&(g=j.toArray(x)))return y=um(y),g.forEach(function(h,_){!(j.isUndefined(h)||h===null)&&t.append(a===!0?Ku([y],_,s):a===null?y:y+"[]",u(h))}),!1}return pl(x)?!0:(t.append(Ku(C,y,s),u(x)),!1)}const p=[],m=Object.assign(Q1,{defaultVisitor:d,convertValue:u,isVisitable:pl});function v(x,y){if(!j.isUndefined(x)){if(p.indexOf(x)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(x),j.forEach(x,function(g,f){(!(j.isUndefined(g)||g===null)&&o.call(t,g,j.isString(f)?f.trim():f,y,m))===!0&&v(g,y?y.concat(f):[f])}),p.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Ju(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function _c(e,t){this._pairs=[],e&&Ss(e,this,t)}const dm=_c.prototype;dm.append=function(t,n){this._pairs.push([t,n])};dm.toString=function(t){const n=t?function(r){return t.call(this,r,Ju)}:Ju;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function K1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pm(e,t,n){if(!t)return e;const r=n&&n.encode||K1,o=n&&n.serialize;let s;if(o?s=o(t,n):s=j.isURLSearchParams(t)?t.toString():new _c(t,n).toString(r),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Yu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},J1=typeof URLSearchParams<"u"?URLSearchParams:_c,Y1=typeof FormData<"u"?FormData:null,Z1=typeof Blob<"u"?Blob:null,e_={isBrowser:!0,classes:{URLSearchParams:J1,FormData:Y1,Blob:Z1},protocols:["http","https","file","blob","url","data"]},Sc=typeof window<"u"&&typeof document<"u",t_=(e=>Sc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),n_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",r_=Sc&&window.location.href||"http://localhost",o_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sc,hasStandardBrowserEnv:t_,hasStandardBrowserWebWorkerEnv:n_,origin:r_},Symbol.toStringTag,{value:"Module"})),jt={...o_,...e_};function i_(e,t){return Ss(e,new jt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return jt.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function s_(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function a_(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function mm(e){function t(n,r,o,s){let a=n[s++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=s>=n.length;return a=!a&&j.isArray(o)?o.length:a,c?(j.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!j.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],s)&&j.isArray(o[a])&&(o[a]=a_(o[a])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,o)=>{t(s_(r),o,n,0)}),n}return null}function l_(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const To={transitional:fm,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=j.isObject(t);if(s&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return o?JSON.stringify(mm(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return i_(t,this.formSerializer).toString();if((l=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ss(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),l_(t)):t}],transformResponse:[function(t){const n=this.transitional||To.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?R.from(l,R.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{To.headers[e]={}});const c_=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),u_=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&c_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Zu=Symbol("internals");function $r(e){return e&&String(e).trim().toLowerCase()}function _i(e){return e===!1||e==null?e:j.isArray(e)?e.map(_i):String(e)}function d_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const p_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ia(e,t,n,r,o){if(j.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function f_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function m_(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,a){return this[r].call(this,t,o,s,a)},configurable:!0})})}class qe{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,c,u){const d=$r(c);if(!d)throw new Error("header name must be a non-empty string");const p=j.findKey(o,d);(!p||o[p]===void 0||u===!0||u===void 0&&o[p]!==!1)&&(o[p||c]=_i(l))}const a=(l,c)=>j.forEach(l,(u,d)=>s(u,d,c));if(j.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(j.isString(t)&&(t=t.trim())&&!p_(t))a(u_(t),n);else if(j.isHeaders(t))for(const[l,c]of t.entries())s(c,l,r);else t!=null&&s(n,t,r);return this}get(t,n){if(t=$r(t),t){const r=j.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return d_(o);if(j.isFunction(n))return n.call(this,o,r);if(j.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$r(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ia(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(a){if(a=$r(a),a){const l=j.findKey(r,a);l&&(!n||ia(r,r[l],l,n))&&(delete r[l],o=!0)}}return j.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||ia(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return j.forEach(this,(o,s)=>{const a=j.findKey(r,s);if(a){n[a]=_i(o),delete n[s];return}const l=t?f_(s):String(s).trim();l!==s&&delete n[s],n[l]=_i(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Zu]=this[Zu]={accessors:{}}).accessors,o=this.prototype;function s(a){const l=$r(a);r[l]||(m_(o,a),r[l]=!0)}return j.isArray(t)?t.forEach(s):s(t),this}}qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(qe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(qe);function sa(e,t){const n=this||To,r=t||n,o=qe.from(r.headers);let s=r.data;return j.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function hm(e){return!!(e&&e.__CANCEL__)}function wr(e,t,n){R.call(this,e??"canceled",R.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(wr,R,{__CANCEL__:!0});function gm(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function h_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function g_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[s];a||(a=u),n[o]=c,r[o]=u;let p=s,m=0;for(;p!==o;)m+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-a<t)return;const v=d&&u-d;return v?Math.round(m*1e3/v):void 0}}function v_(e,t){let n=0;const r=1e3/t;let o=null;return function(){const a=this===!0,l=Date.now();if(a||l-n>r)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const Qi=(e,t,n=3)=>{let r=0;const o=g_(50,250);return v_(s=>{const a=s.loaded,l=s.lengthComputable?s.total:void 0,c=a-r,u=o(c),d=a<=l;r=a;const p={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-a)/u:void 0,event:s,lengthComputable:l!=null};p[t?"download":"upload"]=!0,e(p)},n)},x_=jt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let a=s;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=j.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),y_=jt.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const a=[e+"="+encodeURIComponent(t)];j.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),j.isString(r)&&a.push("path="+r),j.isString(o)&&a.push("domain="+o),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function __(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function S_(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function vm(e,t){return e&&!__(t)?S_(e,t):t}const ed=e=>e instanceof qe?{...e}:e;function An(e,t){t=t||{};const n={};function r(u,d,p){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:p},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function o(u,d,p){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,p)}else return r(u,d,p)}function s(u,d){if(!j.isUndefined(d))return r(void 0,d)}function a(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,p){if(p in t)return r(u,d);if(p in e)return r(void 0,u)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(ed(u),ed(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=c[d]||o,m=p(e[d],t[d],d);j.isUndefined(m)&&p!==l||(n[d]=m)}),n}const xm=e=>{const t=An({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:s,headers:a,auth:l}=t;t.headers=a=qe.from(a),t.url=pm(vm(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(j.isFormData(n)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[u,...d]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...d].join("; "))}}if(jt.hasStandardBrowserEnv&&(r&&j.isFunction(r)&&(r=r(t)),r||r!==!1&&x_(t.url))){const u=o&&s&&y_.read(s);u&&a.set(o,u)}return t},w_=typeof XMLHttpRequest<"u",j_=w_&&function(e){return new Promise(function(n,r){const o=xm(e);let s=o.data;const a=qe.from(o.headers).normalize();let{responseType:l}=o,c;function u(){o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let d=new XMLHttpRequest;d.open(o.method.toUpperCase(),o.url,!0),d.timeout=o.timeout;function p(){if(!d)return;const v=qe.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),y={data:!l||l==="text"||l==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};gm(function(g){n(g),u()},function(g){r(g),u()},y),d=null}"onloadend"in d?d.onloadend=p:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(p)},d.onabort=function(){d&&(r(new R("Request aborted",R.ECONNABORTED,o,d)),d=null)},d.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,o,d)),d=null},d.ontimeout=function(){let x=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const y=o.transitional||fm;o.timeoutErrorMessage&&(x=o.timeoutErrorMessage),r(new R(x,y.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,o,d)),d=null},s===void 0&&a.setContentType(null),"setRequestHeader"in d&&j.forEach(a.toJSON(),function(x,y){d.setRequestHeader(y,x)}),j.isUndefined(o.withCredentials)||(d.withCredentials=!!o.withCredentials),l&&l!=="json"&&(d.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&d.addEventListener("progress",Qi(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Qi(o.onUploadProgress)),(o.cancelToken||o.signal)&&(c=v=>{d&&(r(!v||v.type?new wr(null,e,d):v),d.abort(),d=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const m=h_(o.url);if(m&&jt.protocols.indexOf(m)===-1){r(new R("Unsupported protocol "+m+":",R.ERR_BAD_REQUEST,e));return}d.send(s||null)})},C_=(e,t)=>{let n=new AbortController,r;const o=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof R?u:new wr(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{o(new R(`timeout ${t} of ms exceeded`,R.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",o):c.unsubscribe(o))}),e=null)};e.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=a,[l,()=>{s&&clearTimeout(s),s=null}]},b_=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},N_=async function*(e,t,n){for await(const r of e)yield*b_(ArrayBuffer.isView(r)?r:await n(String(r)),t)},td=(e,t,n,r,o)=>{const s=N_(e,t,o);let a=0;return new ReadableStream({type:"bytes",async pull(l){const{done:c,value:u}=await s.next();if(c){l.close(),r();return}let d=u.byteLength;n&&n(a+=d),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),s.return()}},{highWaterMark:2})},nd=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},ws=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ym=ws&&typeof ReadableStream=="function",fl=ws&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),k_=ym&&(()=>{let e=!1;const t=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),rd=64*1024,ml=ym&&!!(()=>{try{return j.isReadableStream(new Response("").body)}catch{}})(),Ki={stream:ml&&(e=>e.body)};ws&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ki[t]&&(Ki[t]=j.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new R(`Response type '${t}' is not supported`,R.ERR_NOT_SUPPORT,r)})})})(new Response);const B_=async e=>{if(e==null)return 0;if(j.isBlob(e))return e.size;if(j.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(j.isArrayBufferView(e))return e.byteLength;if(j.isURLSearchParams(e)&&(e=e+""),j.isString(e))return(await fl(e)).byteLength},P_=async(e,t)=>{const n=j.toFiniteNumber(e.getContentLength());return n??B_(t)},E_=ws&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:a,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:p="same-origin",fetchOptions:m}=xm(e);u=u?(u+"").toLowerCase():"text";let[v,x]=o||s||a?C_([o,s],a):[],y,C;const g=()=>{!y&&setTimeout(()=>{v&&v.unsubscribe()}),y=!0};let f;try{if(c&&k_&&n!=="get"&&n!=="head"&&(f=await P_(d,r))!==0){let N=new Request(t,{method:"POST",body:r,duplex:"half"}),P;j.isFormData(r)&&(P=N.headers.get("content-type"))&&d.setContentType(P),N.body&&(r=td(N.body,rd,nd(f,Qi(c)),null,fl))}j.isString(p)||(p=p?"cors":"omit"),C=new Request(t,{...m,signal:v,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let h=await fetch(C);const _=ml&&(u==="stream"||u==="response");if(ml&&(l||_)){const N={};["status","statusText","headers"].forEach(k=>{N[k]=h[k]});const P=j.toFiniteNumber(h.headers.get("content-length"));h=new Response(td(h.body,rd,l&&nd(P,Qi(l,!0)),_&&g,fl),N)}u=u||"text";let w=await Ki[j.findKey(Ki,u)||"text"](h,e);return!_&&g(),x&&x(),await new Promise((N,P)=>{gm(N,P,{data:w,headers:qe.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:C})})}catch(h){throw g(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new R("Network Error",R.ERR_NETWORK,e,C),{cause:h.cause||h}):R.from(h,h&&h.code,e,C)}}),hl={http:G1,xhr:j_,fetch:E_};j.forEach(hl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const od=e=>`- ${e}`,T_=e=>j.isFunction(e)||e===null||e===!1,_m={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let a;if(r=n,!T_(n)&&(r=hl[(a=String(n)).toLowerCase()],r===void 0))throw new R(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+s]=r}if(!r){const s=Object.entries(o).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?s.length>1?`since :
`+s.map(od).join(`
`):" "+od(s[0]):"as no adapter specified";throw new R("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:hl};function aa(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new wr(null,e)}function id(e){return aa(e),e.headers=qe.from(e.headers),e.data=sa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_m.getAdapter(e.adapter||To.adapter)(e).then(function(r){return aa(e),r.data=sa.call(e,e.transformResponse,r),r.headers=qe.from(r.headers),r},function(r){return hm(r)||(aa(e),r&&r.response&&(r.response.data=sa.call(e,e.transformResponse,r.response),r.response.headers=qe.from(r.response.headers))),Promise.reject(r)})}const Sm="1.7.2",wc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{wc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const sd={};wc.transitional=function(t,n,r){function o(s,a){return"[Axios v"+Sm+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return(s,a,l)=>{if(t===!1)throw new R(o(a," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!sd[a]&&(sd[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,a,l):!0}};function L_(e,t,n){if(typeof e!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],a=t[s];if(a){const l=e[s],c=l===void 0||a(l,s,e);if(c!==!0)throw new R("option "+s+" must be "+c,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+s,R.ERR_BAD_OPTION)}}const gl={assertOptions:L_,validators:wc},Kt=gl.validators;class $n{constructor(t){this.defaults=t,this.interceptors={request:new Yu,response:new Yu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=An(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&gl.assertOptions(r,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),o!=null&&(j.isFunction(o)?n.paramsSerializer={serialize:o}:gl.assertOptions(o,{encode:Kt.function,serialize:Kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&j.merge(s.common,s[n.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],x=>{delete s[x]}),n.headers=qe.concat(a,s);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,p=0,m;if(!c){const x=[id.bind(this),void 0];for(x.unshift.apply(x,l),x.push.apply(x,u),m=x.length,d=Promise.resolve(n);p<m;)d=d.then(x[p++],x[p++]);return d}m=l.length;let v=n;for(p=0;p<m;){const x=l[p++],y=l[p++];try{v=x(v)}catch(C){y.call(this,C);break}}try{d=id.call(this,v)}catch(x){return Promise.reject(x)}for(p=0,m=u.length;p<m;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=An(this.defaults,t);const n=vm(t.baseURL,t.url);return pm(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){$n.prototype[t]=function(n,r){return this.request(An(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(s,a,l){return this.request(An(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}$n.prototype[t]=n(),$n.prototype[t+"Form"]=n(!0)});class jc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const a=new Promise(l=>{r.subscribe(l),s=l}).then(o);return a.cancel=function(){r.unsubscribe(s)},a},t(function(s,a,l){r.reason||(r.reason=new wr(s,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new jc(function(o){t=o}),cancel:t}}}function R_(e){return function(n){return e.apply(null,n)}}function $_(e){return j.isObject(e)&&e.isAxiosError===!0}const vl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vl).forEach(([e,t])=>{vl[t]=e});function wm(e){const t=new $n(e),n=em($n.prototype.request,t);return j.extend(n,$n.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return wm(An(e,o))},n}const le=wm(To);le.Axios=$n;le.CanceledError=wr;le.CancelToken=jc;le.isCancel=hm;le.VERSION=Sm;le.toFormData=Ss;le.AxiosError=R;le.Cancel=le.CanceledError;le.all=function(t){return Promise.all(t)};le.spread=R_;le.isAxiosError=$_;le.mergeConfig=An;le.AxiosHeaders=qe;le.formToJSON=e=>mm(j.isHTMLForm(e)?new FormData(e):e);le.getAdapter=_m.getAdapter;le.HttpStatusCode=vl;le.default=le;const O_="_signUpContainer_13jij_3",M_="_signUpBox_13jij_11",F_="_passwordLabel_13jij_42",I_="_eyeIcon_13jij_55",z_="_saveUsername_13jij_64",A_="_error_13jij_74",D_="_signUpButton_13jij_79",U_="_loginButton_13jij_90",W_="_footerBox_13jij_98",Mt={signUpContainer:O_,signUpBox:M_,passwordLabel:F_,eyeIcon:I_,saveUsername:z_,error:A_,signUpButton:D_,loginButton:U_,footerBox:W_},H_=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),[o,s]=S.useState(!1),[a,l]=S.useState(null),c=Bo(),u=async d=>{d.preventDefault();try{await le.post("http://localhost:5000/api/signup",{username:e,password:n}),c("/login")}catch(p){l("Sign up failed. Please try again."),console.error("Sign up failed",p)}};return i.jsx("div",{className:Mt.signUpContainer,children:i.jsxs("div",{className:Mt.signUpBox,children:[i.jsx("h2",{children:"Good morning"}),i.jsx("p",{children:"Sign on to manage your accounts."}),i.jsxs("form",{onSubmit:u,children:[i.jsxs("label",{children:["Username",i.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:d=>t(d.target.value),required:!0})]}),i.jsxs("label",{className:Mt.passwordLabel,children:["Password",i.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value),required:!0}),i.jsx("span",{className:Mt.eyeIcon,onClick:()=>s(!o),children:o?i.jsx(Df,{}):i.jsx(Uf,{})})]}),i.jsxs("div",{className:Mt.saveUsername,children:[i.jsx("input",{type:"checkbox",id:"saveUsername"}),i.jsx("label",{htmlFor:"saveUsername",children:"Save username"})]}),a&&i.jsx("p",{className:Mt.error,children:a}),i.jsx("button",{type:"submit",className:Mt.signUpButton,children:"Sign Up"}),i.jsx("button",{type:"button",className:Mt.loginButton,onClick:()=>c("/login"),children:"Login"})]}),i.jsxs("div",{className:Mt.footerBox,children:[i.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),i.jsx("a",{href:"/security",children:"Security Center"}),i.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},q_="_loginContainer_xd0hi_3",V_="_loginBox_xd0hi_11",G_="_passwordLabel_xd0hi_42",X_="_eyeIcon_xd0hi_55",Q_="_saveUsername_xd0hi_64",K_="_error_xd0hi_74",J_="_loginButton_xd0hi_79",Y_="_signUpButton_xd0hi_90",Z_="_footerBox_xd0hi_98",Jt={loginContainer:q_,loginBox:V_,passwordLabel:G_,eyeIcon:X_,saveUsername:Q_,error:K_,loginButton:J_,signUpButton:Y_,footerBox:Z_},eS=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),[o,s]=S.useState(!1),[a,l]=S.useState(null),{setAuthState:c}=S.useContext(xc),u=Bo(),d=async p=>{p.preventDefault();try{const m=await le.post("http://localhost:5000/api/login",{username:e,password:n}),{token:v}=m.data;c({token:v,username:e}),localStorage.setItem("token",v),u("/")}catch(m){l("Login failed. Please check your username and password."),console.error("Login failed",m)}};return i.jsx("div",{className:Jt.loginContainer,children:i.jsxs("div",{className:Jt.loginBox,children:[i.jsx("h2",{children:"Welcome back"}),i.jsx("p",{children:"Sign on to manage your accounts."}),i.jsxs("form",{onSubmit:d,children:[i.jsxs("label",{children:["Username",i.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:p=>t(p.target.value),required:!0})]}),i.jsxs("label",{className:Jt.passwordLabel,children:["Password",i.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:p=>r(p.target.value),required:!0}),i.jsx("span",{className:Jt.eyeIcon,onClick:()=>s(!o),children:o?i.jsx(Df,{}):i.jsx(Uf,{})})]}),a&&i.jsx("p",{className:Jt.error,children:a}),i.jsx("button",{type:"submit",className:Jt.loginButton,children:"Sign In"}),i.jsx("button",{type:"button",className:Jt.signUpButton,onClick:()=>u("/signup"),children:"Sign Up"})]}),i.jsxs("div",{className:Jt.footerBox,children:[i.jsx("a",{href:"/forgot",children:"Forgot username or password?"}),i.jsx("a",{href:"/security",children:"Security Center"}),i.jsx("a",{href:"/privacy",children:"Privacy, Cookies, and Legal"})]})]})})},tS="_footer_bjc8t_3",nS="_container_bjc8t_9",rS="_footerLinks_bjc8t_15",la={footer:tS,container:nS,footerLinks:rS},oS=()=>i.jsx("footer",{className:la.footer,children:i.jsx("div",{className:la.container,children:i.jsxs("ul",{className:la.footerLinks,children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"Privacy, Cookies, Security & Legal"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Notice of Data Collection"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"General Terms of Use"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Online Access Agreement"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Ad Choices"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Report Fraud"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"About Wells Fargo"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Careers"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Diversity and Accessibility"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"Sitemap"})})]})})});var js={},Cs={},Cc={},ca={},ua={exports:{}},da,ad;function iS(){if(ad)return da;ad=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return da=e,da}var pa,ld;function sS(){if(ld)return pa;ld=1;var e=iS();function t(){}function n(){}return n.resetWarningCache=t,pa=function(){function r(a,l,c,u,d,p){if(p!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function o(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},pa}var cd;function aS(){return cd||(cd=1,ua.exports=sS()()),ua.exports}var ud;function lS(){return ud||(ud=1,function(e){(function(t,n){n(e,S,aS())})(md,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=x;var o=a(n),s=a(r);function a(f){return f&&f.__esModule?f:{default:f}}var l=Object.assign||function(f){for(var h=1;h<arguments.length;h++){var _=arguments[h];for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(f[w]=_[w])}return f};function c(f,h){var _={};for(var w in f)h.indexOf(w)>=0||Object.prototype.hasOwnProperty.call(f,w)&&(_[w]=f[w]);return _}function u(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}var d=function(){function f(h,_){for(var w=0;w<_.length;w++){var N=_[w];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(h,N.key,N)}}return function(h,_,w){return _&&f(h.prototype,_),w&&f(h,w),h}}();function p(f,h){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:f}function m(f,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);f.prototype=Object.create(h&&h.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(f,h):f.__proto__=h)}var v=!1;function x(f){v=f}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){x(!0)}}))}catch{}function y(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return v?f:f.capture}function C(f){if("touches"in f){var h=f.touches[0],_=h.pageX,w=h.pageY;return{x:_,y:w}}var N=f.screenX,P=f.screenY;return{x:N,y:P}}var g=function(f){m(h,f);function h(){var _;u(this,h);for(var w=arguments.length,N=Array(w),P=0;P<w;P++)N[P]=arguments[P];var k=p(this,(_=h.__proto__||Object.getPrototypeOf(h)).call.apply(_,[this].concat(N)));return k._handleSwipeStart=k._handleSwipeStart.bind(k),k._handleSwipeMove=k._handleSwipeMove.bind(k),k._handleSwipeEnd=k._handleSwipeEnd.bind(k),k._onMouseDown=k._onMouseDown.bind(k),k._onMouseMove=k._onMouseMove.bind(k),k._onMouseUp=k._onMouseUp.bind(k),k._setSwiperRef=k._setSwiperRef.bind(k),k}return d(h,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,y({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,y({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(w){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(w))}},{key:"_onMouseMove",value:function(w){this.mouseDown&&this._handleSwipeMove(w)}},{key:"_onMouseUp",value:function(w){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(w)}},{key:"_handleSwipeStart",value:function(w){var N=C(w),P=N.x,k=N.y;this.moveStart={x:P,y:k},this.props.onSwipeStart(w)}},{key:"_handleSwipeMove",value:function(w){if(this.moveStart){var N=C(w),P=N.x,k=N.y,K=P-this.moveStart.x,M=k-this.moveStart.y;this.moving=!0;var Ve=this.props.onSwipeMove({x:K,y:M},w);Ve&&w.cancelable&&w.preventDefault(),this.movePosition={deltaX:K,deltaY:M}}}},{key:"_handleSwipeEnd",value:function(w){this.props.onSwipeEnd(w);var N=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-N?this.props.onSwipeLeft(1,w):this.movePosition.deltaX>N&&this.props.onSwipeRight(1,w),this.movePosition.deltaY<-N?this.props.onSwipeUp(1,w):this.movePosition.deltaY>N&&this.props.onSwipeDown(1,w)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(w){this.swiper=w,this.props.innerRef(w)}},{key:"render",value:function(){var w=this.props;w.tagName;var N=w.className,P=w.style,k=w.children;w.allowMouseEvents,w.onSwipeUp,w.onSwipeDown,w.onSwipeLeft,w.onSwipeRight,w.onSwipeStart,w.onSwipeMove,w.onSwipeEnd,w.innerRef,w.tolerance;var K=c(w,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:N,style:P},K),k)}}]),h}(n.Component);g.displayName="ReactSwipe",g.propTypes={tagName:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,allowMouseEvents:s.default.bool,onSwipeUp:s.default.func,onSwipeDown:s.default.func,onSwipeLeft:s.default.func,onSwipeRight:s.default.func,onSwipeStart:s.default.func,onSwipeMove:s.default.func,onSwipeEnd:s.default.func,innerRef:s.default.func,tolerance:s.default.number.isRequired},g.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=g})}(ca)),ca}(function(e){(function(t,n){n(e,lS())})(md,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(s){return s&&s.__esModule?s:{default:s}}t.default=r.default})})(Cc);var Lo={},jm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(s=o(s,r(l)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var a="";for(var l in s)t.call(s,l)&&s[l]&&(a=o(a,l));return a}function o(s,a){return a?s?s+" "+a:s+a:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(jm);var cS=jm.exports;Object.defineProperty(Lo,"__esModule",{value:!0});Lo.default=void 0;var Yt=uS(cS);function uS(e){return e&&e.__esModule?e:{default:e}}function dS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pS={ROOT:function(t){return(0,Yt.default)(dS({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,Yt.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,Yt.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,Yt.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,Yt.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,Yt.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,Yt.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,Yt.default)({dot:!0,selected:t})}};Lo.default=pS;var Ro={},bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.outerWidth=void 0;var fS=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};bs.outerWidth=fS;var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.default=void 0;var mS=function(t,n,r){var o=t===0?t:t+n,s=r==="horizontal"?[o,0,0]:[0,o,0],a="translate3d",l="("+s.join(",")+")";return a+l};jr.default=mS;var $o={};Object.defineProperty($o,"__esModule",{value:!0});$o.default=void 0;var hS=function(){return window};$o.default=hS;Object.defineProperty(Ro,"__esModule",{value:!0});Ro.default=void 0;var mt=xS(S),bn=Ns(Lo),gS=bs,dd=Ns(jr),vS=Ns(Cc),ri=Ns($o);function Ns(e){return e&&e.__esModule?e:{default:e}}function Cm(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Cm=function(){return e},e}function xS(e){if(e&&e.__esModule)return e;if(e===null||Zr(e)!=="object"&&typeof e!="function")return{default:e};var t=Cm();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Zr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zr=function(n){return typeof n}:Zr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zr(e)}function xl(){return xl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}function yS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function SS(e,t,n){return t&&_S(e.prototype,t),e}function wS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yl(e,t)}function yl(e,t){return yl=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},yl(e,t)}function jS(e){var t=bS();return function(){var r=Ji(e),o;if(t){var s=Ji(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return CS(this,o)}}function CS(e,t){return t&&(Zr(t)==="object"||typeof t=="function")?t:Oe(e)}function Oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ji(e){return Ji=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ji(e)}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var NS=function(t){return t.hasOwnProperty("key")},bc=function(e){wS(n,e);var t=jS(n);function n(r){var o;return yS(this,n),o=t.call(this,r),Ne(Oe(o),"itemsWrapperRef",void 0),Ne(Oe(o),"itemsListRef",void 0),Ne(Oe(o),"thumbsRef",void 0),Ne(Oe(o),"setItemsWrapperRef",function(s){o.itemsWrapperRef=s}),Ne(Oe(o),"setItemsListRef",function(s){o.itemsListRef=s}),Ne(Oe(o),"setThumbsRef",function(s,a){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[a]=s}),Ne(Oe(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var s=mt.Children.count(o.props.children),a=o.itemsWrapperRef.clientWidth,l=o.props.thumbWidth?o.props.thumbWidth:(0,gS.outerWidth)(o.thumbsRef[0]),c=Math.floor(a/l),u=c<s,d=u?s-c:0;o.setState(function(p,m){return{itemSize:l,visibleItems:c,firstItem:u?o.getFirstItem(m.selectedItem):0,lastPosition:d,showArrows:u}})}}),Ne(Oe(o),"handleClickItem",function(s,a,l){if(!NS(l)||l.key==="Enter"){var c=o.props.onSelectItem;typeof c=="function"&&c(s,a)}}),Ne(Oe(o),"onSwipeStart",function(){o.setState({swiping:!0})}),Ne(Oe(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),Ne(Oe(o),"onSwipeMove",function(s){var a=s.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var l=0,c=mt.Children.count(o.props.children),u=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(c-o.state.visibleItems,0),p=-d*100/o.state.visibleItems;u===l&&a>0&&(a=0),u===p&&a<0&&(a=0);var m=o.itemsWrapperRef.clientWidth,v=u+100/(m/a);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(x){o.itemsListRef.style[x]=(0,dd.default)(v,"%",o.props.axis)}),!0}),Ne(Oe(o),"slideRight",function(s){o.moveTo(o.state.firstItem-(typeof s=="number"?s:1))}),Ne(Oe(o),"slideLeft",function(s){o.moveTo(o.state.firstItem+(typeof s=="number"?s:1))}),Ne(Oe(o),"moveTo",function(s){s=s<0?0:s,s=s>=o.state.lastPosition?o.state.lastPosition:s,o.setState({firstItem:s})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return SS(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,ri.default)().addEventListener("resize",this.updateSizes),(0,ri.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,ri.default)().removeEventListener("resize",this.updateSizes),(0,ri.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var s=o;return o>=this.state.lastPosition&&(s=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(s=this.state.firstItem),o<this.state.firstItem&&(s=o),s}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(s,a){var l=bn.default.ITEM(!1,a===o.state.selectedItem),c={key:a,ref:function(d){return o.setThumbsRef(d,a)},className:l,onClick:o.handleClickItem.bind(o,a,o.props.children[a]),onKeyDown:o.handleClickItem.bind(o,a,o.props.children[a]),"aria-label":"".concat(o.props.labels.item," ").concat(a+1),style:{width:o.props.thumbWidth}};return mt.default.createElement("li",xl({},c,{role:"button",tabIndex:0}),s)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var s=mt.Children.count(this.props.children)>1,a=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},u=-this.state.firstItem*(this.state.itemSize||0),d=(0,dd.default)(u,"px",this.props.axis),p=this.props.transitionTime+"ms";return c={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p},mt.default.createElement("div",{className:bn.default.CAROUSEL(!1)},mt.default.createElement("div",{className:bn.default.WRAPPER(!1),ref:this.setItemsWrapperRef},mt.default.createElement("button",{type:"button",className:bn.default.ARROW_PREV(!a),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),s?mt.default.createElement(vS.default,{tagName:"ul",className:bn.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):mt.default.createElement("ul",{className:bn.default.SLIDER(!1,this.state.swiping),ref:function(v){return o.setItemsListRef(v)},style:c},this.renderItems()),mt.default.createElement("button",{type:"button",className:bn.default.ARROW_NEXT(!l),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(mt.Component);Ro.default=bc;Ne(bc,"displayName","Thumbs");Ne(bc,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.default=void 0;var kS=function(){return document};ks.default=kS;var Je={};Object.defineProperty(Je,"__esModule",{value:!0});Je.setPosition=Je.getPosition=Je.isKeyboardEvent=Je.defaultStatusFormatter=Je.noop=void 0;var BS=S,PS=ES(jr);function ES(e){return e&&e.__esModule?e:{default:e}}var TS=function(){};Je.noop=TS;var LS=function(t,n){return"".concat(t," of ").concat(n)};Je.defaultStatusFormatter=LS;var RS=function(t){return t?t.hasOwnProperty("key"):!1};Je.isKeyboardEvent=RS;var $S=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=BS.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,s=r-1;return t&&(t!==s||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===s&&(o+=100-n.centerSlidePercentage),o}return-t*100};Je.getPosition=$S;var OS=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,PS.default)(t,"%",n)}),r};Je.setPosition=OS;var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.fadeAnimationHandler=Pt.slideStopSwipingHandler=Pt.slideSwipeAnimationHandler=Pt.slideAnimationHandler=void 0;var bm=S,MS=FS(jr),Et=Je;function FS(e){return e&&e.__esModule?e:{default:e}}function pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pd(Object(n),!0).forEach(function(r){IS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var zS=function(t,n){var r={},o=n.selectedItem,s=o,a=bm.Children.count(t.children)-1,l=t.infiniteLoop&&(o<0||o>a);if(l)return s<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,Et.setPosition)(-(a+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,Et.setPosition)(-(a+2)*100,t.axis):s>a&&(r.itemListStyle=(0,Et.setPosition)(0,t.axis)),r;var c=(0,Et.getPosition)(o,t),u=(0,MS.default)(c,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=Bn(Bn({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};Pt.slideAnimationHandler=zS;var AS=function(t,n,r,o){var s={},a=n.axis==="horizontal",l=bm.Children.count(n.children),c=0,u=(0,Et.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,Et.getPosition)(l-1,n)-100:(0,Et.getPosition)(l-1,n),p=a?t.x:t.y,m=p;u===c&&p>0&&(m=0),u===d&&p<0&&(m=0);var v=u+100/(r.itemSize/m),x=Math.abs(p)>n.swipeScrollTolerance;return n.infiniteLoop&&x&&(r.selectedItem===0&&v>-100?v-=l*100:r.selectedItem===l-1&&v<-l*100&&(v+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||x||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),s.itemListStyle=(0,Et.setPosition)(v,n.axis)),x&&!r.cancelClick&&o({cancelClick:!0}),s};Pt.slideSwipeAnimationHandler=AS;var DS=function(t,n){var r=(0,Et.getPosition)(n.selectedItem,t),o=(0,Et.setPosition)(r,t.axis);return{itemListStyle:o}};Pt.slideStopSwipingHandler=DS;var US=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",s={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(s=Bn(Bn({},s),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:s,selectedStyle:Bn(Bn({},s),{},{opacity:1,position:"relative"}),prevStyle:Bn({},s)}};Pt.fadeAnimationHandler=US;Object.defineProperty(Cs,"__esModule",{value:!0});Cs.default=void 0;var G=qS(S),WS=Oo(Cc),zt=Oo(Lo),HS=Oo(Ro),oi=Oo(ks),ii=Oo($o),Wr=Je,Yi=Pt;function Oo(e){return e&&e.__esModule?e:{default:e}}function Nm(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Nm=function(){return e},e}function qS(e){if(e&&e.__esModule)return e;if(e===null||eo(e)!=="object"&&typeof e!="function")return{default:e};var t=Nm();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function eo(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?eo=function(n){return typeof n}:eo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},eo(e)}function _l(){return _l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(this,arguments)}function fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ht(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fd(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function GS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function XS(e,t,n){return t&&GS(e.prototype,t),e}function QS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Sl(e,t)}function Sl(e,t){return Sl=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Sl(e,t)}function KS(e){var t=YS();return function(){var r=Zi(e),o;if(t){var s=Zi(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return JS(this,o)}}function JS(e,t){return t&&(eo(t)==="object"||typeof t=="function")?t:A(e)}function A(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Zi(e){return Zi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Zi(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Nc=function(e){QS(n,e);var t=KS(n);function n(r){var o;VS(this,n),o=t.call(this,r),O(A(o),"thumbsRef",void 0),O(A(o),"carouselWrapperRef",void 0),O(A(o),"listRef",void 0),O(A(o),"itemsRef",void 0),O(A(o),"timer",void 0),O(A(o),"animationHandler",void 0),O(A(o),"setThumbsRef",function(a){o.thumbsRef=a}),O(A(o),"setCarouselWrapperRef",function(a){o.carouselWrapperRef=a}),O(A(o),"setListRef",function(a){o.listRef=a}),O(A(o),"setItemsRef",function(a,l){o.itemsRef||(o.itemsRef=[]),o.itemsRef[l]=a}),O(A(o),"autoPlay",function(){G.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),O(A(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),O(A(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),O(A(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),O(A(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),O(A(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,oi.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,oi.default)().activeElement)):!1}),O(A(o),"navigateWithKeyboard",function(a){if(o.isFocusWithinTheCarousel()){var l=o.props.axis,c=l==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=c?u.ArrowRight:u.ArrowDown,p=c?u.ArrowLeft:u.ArrowUp;d===a.keyCode?o.increment():p===a.keyCode&&o.decrement()}}),O(A(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var a=o.props.axis==="horizontal",l=o.itemsRef[0];if(l){var c=a?l.clientWidth:l.clientHeight;o.setState({itemSize:c}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),O(A(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),O(A(o),"handleClickItem",function(a,l){if(G.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(a,l),a!==o.state.selectedItem&&o.setState({selectedItem:a})}}),O(A(o),"handleOnChange",function(a,l){G.Children.count(o.props.children)<=1||o.props.onChange(a,l)}),O(A(o),"handleClickThumb",function(a,l){o.props.onClickThumb(a,l),o.moveTo(a)}),O(A(o),"onSwipeStart",function(a){o.setState({swiping:!0}),o.props.onSwipeStart(a)}),O(A(o),"onSwipeEnd",function(a){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(a),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),O(A(o),"onSwipeMove",function(a,l){o.props.onSwipeMove(l);var c=o.props.swipeAnimationHandler(a,o.props,o.state,o.setState.bind(A(o)));return o.setState(ht({},c)),!!Object.keys(c).length}),O(A(o),"decrement",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof a=="number"?a:1))}),O(A(o),"increment",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof a=="number"?a:1))}),O(A(o),"moveTo",function(a){if(typeof a=="number"){var l=G.Children.count(o.props.children)-1;a<0&&(a=o.props.infiniteLoop?l:0),a>l&&(a=o.props.infiniteLoop?0:l),o.selectItem({selectedItem:a}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),O(A(o),"onClickNext",function(){o.increment(1)}),O(A(o),"onClickPrev",function(){o.decrement(1)}),O(A(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),O(A(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),O(A(o),"changeItem",function(a){return function(l){(!(0,Wr.isKeyboardEvent)(l)||l.key==="Enter")&&o.moveTo(a)}}),O(A(o),"selectItem",function(a){o.setState(ht({previousItem:o.state.selectedItem},a),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(a.selectedItem,G.Children.toArray(o.props.children)[a.selectedItem])}),O(A(o),"getInitialImage",function(){var a=o.props.selectedItem,l=o.itemsRef&&o.itemsRef[a],c=l&&l.getElementsByTagName("img")||[];return c[0]}),O(A(o),"getVariableItemHeight",function(a){var l=o.itemsRef&&o.itemsRef[a];if(o.state.hasMount&&l&&l.children.length){var c=l.children[0].getElementsByTagName("img")||[];if(c.length>0){var u=c[0];if(!u.complete){var d=function v(){o.forceUpdate(),u.removeEventListener("load",v)};u.addEventListener("load",d)}}var p=c[0]||l.children[0],m=p.clientHeight;return m>0?m:null}return null});var s={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Yi.fadeAnimationHandler||Yi.slideAnimationHandler,o.state=ht(ht({},s),o.animationHandler(r,s)),o}return XS(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,s){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),s.swiping&&!this.state.swiping&&this.setState(ht({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&G.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var s=o.getInitialImage();s&&!s.complete?s.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,ii.default)().addEventListener("resize",this.updateSizes),(0,ii.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,oi.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,ii.default)().removeEventListener("resize",this.updateSizes),(0,ii.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,oi.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var s=this;return this.props.children?G.Children.map(this.props.children,function(a,l){var c=l===s.state.selectedItem,u=l===s.state.previousItem,d=c&&s.state.selectedStyle||u&&s.state.prevStyle||s.state.slideStyle||{};s.props.centerMode&&s.props.axis==="horizontal"&&(d=ht(ht({},d),{},{minWidth:s.props.centerSlidePercentage+"%"})),s.state.swiping&&s.state.swipeMovementStarted&&(d=ht(ht({},d),{},{pointerEvents:"none"}));var p={ref:function(v){return s.setItemsRef(v,l)},key:"itemKey"+l+(o?"clone":""),className:zt.default.ITEM(!0,l===s.state.selectedItem,l===s.state.previousItem),onClick:s.handleClickItem.bind(s,l,a),style:d};return G.default.createElement("li",p,s.props.renderItem(a,{isSelected:l===s.state.selectedItem,isPrevious:l===s.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,s=this.props,a=s.showIndicators,l=s.labels,c=s.renderIndicator,u=s.children;return a?G.default.createElement("ul",{className:"control-dots"},G.Children.map(u,function(d,p){return c&&c(o.changeItem(p),p===o.state.selectedItem,p,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?G.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,G.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||G.Children.count(this.props.children)===0?null:G.default.createElement(HS.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||G.Children.count(this.props.children)===0)return null;var s=this.props.swipeable&&G.Children.count(this.props.children)>1,a=this.props.axis==="horizontal",l=this.props.showArrows&&G.Children.count(this.props.children)>1,c=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=l&&(this.state.selectedItem<G.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),p=d.shift(),m=d.pop(),v={className:zt.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},x={};if(a){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var y=this.getVariableItemHeight(this.state.selectedItem);x.height=y||"auto"}}else v.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,v.style=ht(ht({},v.style),{},{height:this.state.itemSize}),x.height=this.state.itemSize;return G.default.createElement("div",{"aria-label":this.props.ariaLabel,className:zt.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},G.default.createElement("div",{className:zt.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),G.default.createElement("div",{className:zt.default.WRAPPER(!0,this.props.axis),style:x},s?G.default.createElement(WS.default,_l({tagName:"ul",innerRef:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&p):G.default.createElement("ul",{className:zt.default.SLIDER(!0,this.state.swiping),ref:function(g){return o.setListRef(g)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&m,this.renderItems(),this.props.infiniteLoop&&p)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(G.default.Component);Cs.default=Nc;O(Nc,"displayName","Carousel");O(Nc,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Wr.noop,onClickThumb:Wr.noop,onChange:Wr.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return G.default.createElement("button",{type:"button","aria-label":r,className:zt.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return G.default.createElement("button",{type:"button","aria-label":r,className:zt.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return G.default.createElement("li",{className:zt.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=G.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=G.Children.toArray(r.props.children).find(function(s){return s.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Wr.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Yi.slideSwipeAnimationHandler,stopSwipingHandler:Yi.slideStopSwipingHandler});var ZS={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(Cs),n=ZS,r=o(Ro);function o(s){return s&&s.__esModule?s:{default:s}}})(js);const ew="_aboutPage1Container_14rn1_1",tw="_pageContent_14rn1_6",nw="_heroSection_14rn1_10",rw="_carouselSection_14rn1_28",ow="_missionSection_14rn1_32",iw="_largeImage_14rn1_49",sw="_teamSection_14rn1_55",aw="_teamMembers_14rn1_67",lw="_teamMember_14rn1_67",cw="_valuesSection_14rn1_89",uw="_valueBoxes_14rn1_107",dw="_valueBox_14rn1_107",pw="_contactSection_14rn1_132",fw="_contactDetails_14rn1_145",mw="_toggleContainer_14rn1_150",hw="_toggleButton_14rn1_156",gw="_active_14rn1_165",vw="_codeContainer_14rn1_170",xw="_copyButton_14rn1_180",yw="_copied_14rn1_192",_w="_codeBox_14rn1_196",H={aboutPage1Container:ew,pageContent:tw,heroSection:nw,carouselSection:rw,missionSection:ow,largeImage:iw,teamSection:sw,teamMembers:aw,teamMember:lw,valuesSection:cw,valueBoxes:uw,valueBox:dw,contactSection:pw,contactDetails:fw,toggleContainer:mw,toggleButton:hw,active:gw,codeContainer:vw,copyButton:xw,copied:yw,codeBox:_w},Sw=()=>{const[e,t]=S.useState("tsx"),[n,r]=S.useState(!1);S.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:s;return i.jsxs("div",{className:H.aboutPage1Container,children:[i.jsxs("div",{className:H.pageContent,children:[i.jsxs("section",{className:H.heroSection,children:[i.jsx("h1",{children:"About Us"}),i.jsx("p",{children:"Learn more about our company, our mission, and our team."})]}),i.jsx("section",{className:H.carouselSection,children:i.jsxs(js.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 1"}),i.jsx("p",{className:"legend",children:"Legend 1"})]}),i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 2"}),i.jsx("p",{className:"legend",children:"Legend 2"})]}),i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Carousel 3"}),i.jsx("p",{className:"legend",children:"Legend 3"})]})]})}),i.jsxs("section",{className:H.missionSection,children:[i.jsx("h2",{children:"Our Mission"}),i.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),i.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:H.largeImage})]}),i.jsxs("section",{className:H.teamSection,children:[i.jsx("h2",{children:"Meet Our Team"}),i.jsxs("div",{className:H.teamMembers,children:[i.jsxs("div",{className:H.teamMember,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:H.teamImage}),i.jsx("h3",{children:"John Doe"}),i.jsx("p",{children:"CEO"})]}),i.jsxs("div",{className:H.teamMember,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:H.teamImage}),i.jsx("h3",{children:"Jane Smith"}),i.jsx("p",{children:"CTO"})]}),i.jsxs("div",{className:H.teamMember,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:H.teamImage}),i.jsx("h3",{children:"Mike Johnson"}),i.jsx("p",{children:"CFO"})]})]})]}),i.jsxs("section",{className:H.valuesSection,children:[i.jsx("h2",{children:"Our Values"}),i.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),i.jsxs("div",{className:H.valueBoxes,children:[i.jsxs("div",{className:H.valueBox,children:[i.jsx("h3",{children:"Integrity"}),i.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),i.jsxs("div",{className:H.valueBox,children:[i.jsx("h3",{children:"Innovation"}),i.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),i.jsxs("div",{className:H.valueBox,children:[i.jsx("h3",{children:"Customer Satisfaction"}),i.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),i.jsxs("section",{className:H.historySection,children:[i.jsx("h2",{children:"Our History"}),i.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),i.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:H.largeImage})]}),i.jsxs("section",{className:H.contactSection,children:[i.jsx("h2",{children:"Contact Us"}),i.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),i.jsxs("div",{className:H.contactDetails,children:[i.jsx("p",{children:"Email: contact@company.com"}),i.jsx("p",{children:"Phone: (123) 456-7890"}),i.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),i.jsxs("div",{className:H.toggleContainer,children:[i.jsx("button",{className:`${H.toggleButton} ${e==="tsx"?H.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),i.jsx("button",{className:`${H.toggleButton} ${e==="css"?H.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),i.jsxs("div",{className:H.codeContainer,children:[i.jsx("button",{className:`${H.copyButton} ${n?H.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),i.jsx("pre",{className:H.codeBox,children:l})]})]})},ww="_aboutPage2Container_pnlr8_1",jw="_pageContent_pnlr8_6",Cw="_heroSection_pnlr8_10",bw="_carouselSection_pnlr8_28",Nw="_valuesSection_pnlr8_32",kw="_valueBoxes_pnlr8_47",Bw="_valueBox_pnlr8_47",Pw="_testimonialsSection_pnlr8_72",Ew="_testimonials_pnlr8_72",Tw="_testimonial_pnlr8_72",Lw="_contactSection_pnlr8_104",Rw="_contactDetails_pnlr8_114",$w="_toggleContainer_pnlr8_119",Ow="_toggleButton_pnlr8_125",Mw="_active_pnlr8_134",Fw="_codeContainer_pnlr8_139",Iw="_copyButton_pnlr8_149",zw="_copied_pnlr8_161",Aw="_codeBox_pnlr8_165",ee={aboutPage2Container:ww,pageContent:jw,heroSection:Cw,carouselSection:bw,valuesSection:Nw,valueBoxes:kw,valueBox:Bw,testimonialsSection:Pw,testimonials:Ew,testimonial:Tw,contactSection:Lw,contactDetails:Rw,toggleContainer:$w,toggleButton:Ow,active:Mw,codeContainer:Fw,copyButton:Iw,copied:zw,codeBox:Aw},Dw=()=>{const[e,t]=S.useState("tsx"),[n,r]=S.useState(!1);S.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:s;return i.jsxs("div",{className:ee.aboutPage2Container,children:[i.jsxs("div",{className:ee.pageContent,children:[i.jsxs("section",{className:ee.heroSection,children:[i.jsx("h1",{children:"Our Team"}),i.jsx("p",{children:"Meet the dedicated team behind our company's success."})]}),i.jsx("section",{className:ee.carouselSection,children:i.jsxs(js.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 1"}),i.jsx("p",{className:"legend",children:"Team Member 1"})]}),i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 2"}),i.jsx("p",{className:"legend",children:"Team Member 2"})]}),i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Team Carousel 3"}),i.jsx("p",{className:"legend",children:"Team Member 3"})]})]})}),i.jsxs("section",{className:ee.valuesSection,children:[i.jsx("h2",{children:"Our Values"}),i.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),i.jsxs("div",{className:ee.valueBoxes,children:[i.jsxs("div",{className:ee.valueBox,children:[i.jsx("h3",{children:"Integrity"}),i.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),i.jsxs("div",{className:ee.valueBox,children:[i.jsx("h3",{children:"Innovation"}),i.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),i.jsxs("div",{className:ee.valueBox,children:[i.jsx("h3",{children:"Customer Satisfaction"}),i.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),i.jsxs("section",{className:ee.testimonialsSection,children:[i.jsx("h2",{children:"Testimonials"}),i.jsxs("div",{className:ee.testimonials,children:[i.jsxs("div",{className:ee.testimonial,children:[i.jsx("p",{children:'"This company is amazing! They really care about their customers."'}),i.jsx("p",{children:"- Happy Customer"})]}),i.jsxs("div",{className:ee.testimonial,children:[i.jsx("p",{children:'"Fantastic team and outstanding service!"'}),i.jsx("p",{children:"- Satisfied Client"})]})]})]}),i.jsxs("section",{className:ee.contactSection,children:[i.jsx("h2",{children:"Contact Us"}),i.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),i.jsxs("div",{className:ee.contactDetails,children:[i.jsx("p",{children:"Email: contact@company.com"}),i.jsx("p",{children:"Phone: (123) 456-7890"}),i.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),i.jsxs("div",{className:ee.toggleContainer,children:[i.jsx("button",{className:`${ee.toggleButton} ${e==="tsx"?ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),i.jsx("button",{className:`${ee.toggleButton} ${e==="css"?ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),i.jsxs("div",{className:ee.codeContainer,children:[i.jsx("button",{className:`${ee.copyButton} ${n?ee.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),i.jsx("pre",{className:ee.codeBox,children:l})]})]})},Uw="_aboutPage3Container_166js_1",Ww="_pageContent_166js_6",Hw="_heroSection_166js_10",qw="_carouselSection_166js_28",Vw="_historySection_166js_32",Gw="_largeImage_166js_49",Xw="_missionSection_166js_55",Qw="_teamSection_166js_78",Kw="_teamMembers_166js_90",Jw="_teamMember_166js_90",Yw="_valuesSection_166js_112",Zw="_valueBoxes_166js_130",ej="_valueBox_166js_130",tj="_contactSection_166js_155",nj="_contactDetails_166js_168",rj="_toggleContainer_166js_173",oj="_toggleButton_166js_179",ij="_active_166js_188",sj="_codeContainer_166js_193",aj="_copyButton_166js_203",lj="_copied_166js_215",cj="_codeBox_166js_219",q={aboutPage3Container:Uw,pageContent:Ww,heroSection:Hw,carouselSection:qw,historySection:Vw,largeImage:Gw,missionSection:Xw,teamSection:Qw,teamMembers:Kw,teamMember:Jw,valuesSection:Yw,valueBoxes:Zw,valueBox:ej,contactSection:tj,contactDetails:nj,toggleContainer:rj,toggleButton:oj,active:ij,codeContainer:sj,copyButton:aj,copied:lj,codeBox:cj},uj=()=>{const[e,t]=S.useState("tsx"),[n,r]=S.useState(!1);S.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:s;return i.jsxs("div",{className:q.aboutPage3Container,children:[i.jsxs("div",{className:q.pageContent,children:[i.jsxs("section",{className:q.heroSection,children:[i.jsx("h1",{children:"Our Journey"}),i.jsx("p",{children:"Discover the milestones that define our journey."})]}),i.jsx("section",{className:q.carouselSection,children:i.jsxs(js.Carousel,{showArrows:!0,autoPlay:!0,infiniteLoop:!0,children:[i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 1"}),i.jsx("p",{className:"legend",children:"Milestone 1"})]}),i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 2"}),i.jsx("p",{className:"legend",children:"Milestone 2"})]}),i.jsxs("div",{children:[i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Journey Carousel 3"}),i.jsx("p",{className:"legend",children:"Milestone 3"})]})]})}),i.jsxs("section",{className:q.historySection,children:[i.jsx("h2",{children:"Our History"}),i.jsx("p",{children:"We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values."}),i.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"History Image",className:q.largeImage})]}),i.jsxs("section",{className:q.missionSection,children:[i.jsx("h2",{children:"Our Mission"}),i.jsx("p",{children:"To deliver the best products and services to our customers and make a positive impact on the community."}),i.jsx("img",{src:"https://via.placeholder.com/1200x600",alt:"Mission Image",className:q.largeImage})]}),i.jsxs("section",{className:q.teamSection,children:[i.jsx("h2",{children:"Meet Our Team"}),i.jsxs("div",{className:q.teamMembers,children:[i.jsxs("div",{className:q.teamMember,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 1",className:q.teamImage}),i.jsx("h3",{children:"John Doe"}),i.jsx("p",{children:"CEO"})]}),i.jsxs("div",{className:q.teamMember,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 2",className:q.teamImage}),i.jsx("h3",{children:"Jane Smith"}),i.jsx("p",{children:"CTO"})]}),i.jsxs("div",{className:q.teamMember,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Team Member 3",className:q.teamImage}),i.jsx("h3",{children:"Mike Johnson"}),i.jsx("p",{children:"CFO"})]})]})]}),i.jsxs("section",{className:q.valuesSection,children:[i.jsx("h2",{children:"Our Values"}),i.jsx("p",{children:"We believe in integrity, innovation, and customer satisfaction."}),i.jsxs("div",{className:q.valueBoxes,children:[i.jsxs("div",{className:q.valueBox,children:[i.jsx("h3",{children:"Integrity"}),i.jsx("p",{children:"We adhere to the highest standards of integrity and ethical behavior."})]}),i.jsxs("div",{className:q.valueBox,children:[i.jsx("h3",{children:"Innovation"}),i.jsx("p",{children:"We strive to be industry leaders through innovation and excellence."})]}),i.jsxs("div",{className:q.valueBox,children:[i.jsx("h3",{children:"Customer Satisfaction"}),i.jsx("p",{children:"We are committed to providing the best customer experience."})]})]})]}),i.jsxs("section",{className:q.contactSection,children:[i.jsx("h2",{children:"Contact Us"}),i.jsx("p",{children:"If you have any questions or would like to learn more about our company, feel free to reach out to us."}),i.jsxs("div",{className:q.contactDetails,children:[i.jsx("p",{children:"Email: contact@company.com"}),i.jsx("p",{children:"Phone: (123) 456-7890"}),i.jsx("p",{children:"Address: 123 Main St, Anytown, USA"})]})]})]}),i.jsxs("div",{className:q.toggleContainer,children:[i.jsx("button",{className:`${q.toggleButton} ${e==="tsx"?q.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),i.jsx("button",{className:`${q.toggleButton} ${e==="css"?q.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),i.jsxs("div",{className:q.codeContainer,children:[i.jsx("button",{className:`${q.copyButton} ${n?q.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),i.jsx("pre",{className:q.codeBox,children:l})]})]})},dj="_loginPage1Container_16987_1",pj="_loginForm_16987_6",fj="_formGroup_16987_15",mj="_loginButton_16987_33",hj="_forgotPassword_16987_48",gj="_toggleContainer_16987_61",vj="_toggleButton_16987_67",xj="_active_16987_76",yj="_codeContainer_16987_81",_j="_copyButton_16987_91",Sj="_copied_16987_103",wj="_codeBox_16987_107",Pe={loginPage1Container:dj,loginForm:pj,formGroup:fj,loginButton:mj,forgotPassword:hj,toggleContainer:gj,toggleButton:vj,active:xj,codeContainer:yj,copyButton:_j,copied:Sj,codeBox:wj},jj=()=>{const[e,t]=S.useState("tsx"),[n,r]=S.useState(!1);S.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:s;return i.jsxs("div",{className:Pe.loginPage1Container,children:[i.jsx("h1",{children:"Welcome Back!"}),i.jsxs("form",{className:Pe.loginForm,children:[i.jsxs("div",{className:Pe.formGroup,children:[i.jsx("label",{htmlFor:"email",children:"Email"}),i.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),i.jsxs("div",{className:Pe.formGroup,children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),i.jsx("button",{type:"submit",className:Pe.loginButton,children:"Login"}),i.jsx("p",{className:Pe.forgotPassword,children:i.jsx("a",{href:"#",children:"Forgot Password?"})})]}),i.jsxs("div",{className:Pe.toggleContainer,children:[i.jsx("button",{className:`${Pe.toggleButton} ${e==="tsx"?Pe.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),i.jsx("button",{className:`${Pe.toggleButton} ${e==="css"?Pe.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),i.jsxs("div",{className:Pe.codeContainer,children:[i.jsx("button",{className:`${Pe.copyButton} ${n?Pe.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),i.jsx("pre",{className:Pe.codeBox,children:l})]})]})},Cj="_loginPage2Container_1iwfr_1",bj="_loginForm_1iwfr_6",Nj="_formGroup_1iwfr_15",kj="_loginButton_1iwfr_33",Bj="_forgotPassword_1iwfr_48",Pj="_toggleContainer_1iwfr_61",Ej="_toggleButton_1iwfr_67",Tj="_active_1iwfr_76",Lj="_codeContainer_1iwfr_81",Rj="_copyButton_1iwfr_91",$j="_copied_1iwfr_103",Oj="_codeBox_1iwfr_107",Ee={loginPage2Container:Cj,loginForm:bj,formGroup:Nj,loginButton:kj,forgotPassword:Bj,toggleContainer:Pj,toggleButton:Ej,active:Tj,codeContainer:Lj,copyButton:Rj,copied:$j,codeBox:Oj},Mj=()=>{const[e,t]=S.useState("tsx"),[n,r]=S.useState(!1);S.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:s;return i.jsxs("div",{className:Ee.loginPage2Container,children:[i.jsx("h1",{children:"Login to Your Account"}),i.jsxs("form",{className:Ee.loginForm,children:[i.jsxs("div",{className:Ee.formGroup,children:[i.jsx("label",{htmlFor:"username",children:"Username"}),i.jsx("input",{type:"text",id:"username",name:"username",required:!0})]}),i.jsxs("div",{className:Ee.formGroup,children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),i.jsx("button",{type:"submit",className:Ee.loginButton,children:"Login"}),i.jsx("p",{className:Ee.forgotPassword,children:i.jsx("a",{href:"#",children:"Forgot Password?"})})]}),i.jsxs("div",{className:Ee.toggleContainer,children:[i.jsx("button",{className:`${Ee.toggleButton} ${e==="tsx"?Ee.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),i.jsx("button",{className:`${Ee.toggleButton} ${e==="css"?Ee.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),i.jsxs("div",{className:Ee.codeContainer,children:[i.jsx("button",{className:`${Ee.copyButton} ${n?Ee.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),i.jsx("pre",{className:Ee.codeBox,children:l})]})]})},Fj="_loginPage3Container_1lt4l_1",Ij="_loginForm_1lt4l_6",zj="_formGroup_1lt4l_15",Aj="_loginButton_1lt4l_33",Dj="_forgotPassword_1lt4l_48",Uj="_toggleContainer_1lt4l_61",Wj="_toggleButton_1lt4l_67",Hj="_active_1lt4l_76",qj="_codeContainer_1lt4l_81",Vj="_copyButton_1lt4l_91",Gj="_copied_1lt4l_103",Xj="_codeBox_1lt4l_107",Te={loginPage3Container:Fj,loginForm:Ij,formGroup:zj,loginButton:Aj,forgotPassword:Dj,toggleContainer:Uj,toggleButton:Wj,active:Hj,codeContainer:qj,copyButton:Vj,copied:Gj,codeBox:Xj},Qj=()=>{const[e,t]=S.useState("tsx"),[n,r]=S.useState(!1);S.useEffect(()=>{window.scrollTo(0,0)},[]);const o=`
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
  `,s=`
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
  `,a=c=>{navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),2e3)},l=e==="tsx"?o:s;return i.jsxs("div",{className:Te.loginPage3Container,children:[i.jsx("h1",{children:"Sign In"}),i.jsxs("form",{className:Te.loginForm,children:[i.jsxs("div",{className:Te.formGroup,children:[i.jsx("label",{htmlFor:"email",children:"Email"}),i.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),i.jsxs("div",{className:Te.formGroup,children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsx("input",{type:"password",id:"password",name:"password",required:!0})]}),i.jsx("button",{type:"submit",className:Te.loginButton,children:"Sign In"}),i.jsx("p",{className:Te.forgotPassword,children:i.jsx("a",{href:"#",children:"Forgot Password?"})})]}),i.jsxs("div",{className:Te.toggleContainer,children:[i.jsx("button",{className:`${Te.toggleButton} ${e==="tsx"?Te.active:""}`,onClick:()=>t("tsx"),children:"TSX"}),i.jsx("button",{className:`${Te.toggleButton} ${e==="css"?Te.active:""}`,onClick:()=>t("css"),children:"CSS"})]}),i.jsxs("div",{className:Te.codeContainer,children:[i.jsx("button",{className:`${Te.copyButton} ${n?Te.copied:""}`,onClick:()=>a(l),children:n?"Copied":"Copy"}),i.jsx("pre",{className:Te.codeBox,children:l})]})]})},Kj="_pricingPageContainer_iekql_1",Jj="_mainHeading_iekql_7",Yj="_subHeading_iekql_13",Zj="_pricingSection_iekql_19",eC="_pricingCard_iekql_27",tC="_pricingCardMain_iekql_36",nC="_planName_iekql_41",rC="_planPrice_iekql_47",oC="_planFeatures_iekql_53",iC="_planButton_iekql_64",sC="_toggleContainer_iekql_77",aC="_toggleButton_iekql_84",lC="_active_iekql_94",cC="_codeContainer_iekql_99",uC="_copyButton_iekql_109",V={pricingPageContainer:Kj,mainHeading:Jj,subHeading:Yj,pricingSection:Zj,pricingCard:eC,pricingCardMain:tC,planName:nC,planPrice:rC,planFeatures:oC,planButton:iC,toggleContainer:sC,toggleButton:aC,active:lC,codeContainer:cC,copyButton:uC},dC=()=>{const[e,t]=S.useState(!0),n=()=>{t(!e)},r=`
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
`,s=()=>{const a=e?r:o;navigator.clipboard.writeText(a).then(()=>{alert("Code copied to clipboard")})};return i.jsxs("div",{className:V.pricingPageContainer,children:[i.jsx("h1",{className:V.mainHeading,children:"Pricing plans for teams of all sizes"}),i.jsx("p",{className:V.subHeading,children:"Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales."}),i.jsxs("div",{className:V.pricingSection,children:[i.jsxs("div",{className:V.pricingCard,children:[i.jsx("h2",{className:V.planName,children:"Hobby"}),i.jsx("p",{className:V.planPrice,children:"$15/month"}),i.jsxs("ul",{className:V.planFeatures,children:[i.jsx("li",{children:"5 products"}),i.jsx("li",{children:"Up to 1,000 subscribers"}),i.jsx("li",{children:"Basic analytics"})]}),i.jsx("button",{className:V.planButton,children:"Buy plan"})]}),i.jsxs("div",{className:`${V.pricingCard} ${V.pricingCardMain}`,children:[i.jsx("h2",{className:V.planName,children:"Startup"}),i.jsx("p",{className:V.planPrice,children:"$60/month"}),i.jsxs("ul",{className:V.planFeatures,children:[i.jsx("li",{children:"25 products"}),i.jsx("li",{children:"Up to 10,000 subscribers"}),i.jsx("li",{children:"Advanced analytics"})]}),i.jsx("button",{className:V.planButton,children:"Buy plan"})]}),i.jsxs("div",{className:V.pricingCard,children:[i.jsx("h2",{className:V.planName,children:"Freelancer"}),i.jsx("p",{className:V.planPrice,children:"$30/month"}),i.jsxs("ul",{className:V.planFeatures,children:[i.jsx("li",{children:"5 products"}),i.jsx("li",{children:"Up to 1,000 subscribers"}),i.jsx("li",{children:"Basic analytics"})]}),i.jsx("button",{className:V.planButton,children:"Buy plan"})]}),i.jsxs("div",{className:V.pricingCard,children:[i.jsx("h2",{className:V.planName,children:"Enterprise"}),i.jsx("p",{className:V.planPrice,children:"$90/month"}),i.jsxs("ul",{className:V.planFeatures,children:[i.jsx("li",{children:"Unlimited products"}),i.jsx("li",{children:"Unlimited subscribers"}),i.jsx("li",{children:"Advanced analytics"})]}),i.jsx("button",{className:V.planButton,children:"Buy plan"})]})]}),i.jsxs("div",{className:V.toggleContainer,children:[i.jsx("button",{className:`${V.toggleButton} ${e?V.active:""}`,onClick:n,children:"TSX"}),i.jsx("button",{className:`${V.toggleButton} ${e?"":V.active}`,onClick:n,children:"CSS"})]}),i.jsxs("div",{className:V.codeContainer,children:[i.jsx("pre",{children:e?r:o}),i.jsx("button",{className:V.copyButton,onClick:s,children:"Copy"})]})]})},pC="_pricingPageContainer_iekql_1",fC="_mainHeading_iekql_7",mC="_subHeading_iekql_13",hC="_pricingSection_iekql_19",gC="_pricingCard_iekql_27",vC="_pricingCardMain_iekql_36",xC="_planName_iekql_41",yC="_planPrice_iekql_47",_C="_planFeatures_iekql_53",SC="_planButton_iekql_64",wC="_toggleContainer_iekql_77",jC="_toggleButton_iekql_84",CC="_active_iekql_94",bC="_codeContainer_iekql_99",NC="_copyButton_iekql_109",Q={pricingPageContainer:pC,mainHeading:fC,subHeading:mC,pricingSection:hC,pricingCard:gC,pricingCardMain:vC,planName:xC,planPrice:yC,planFeatures:_C,planButton:SC,toggleContainer:wC,toggleButton:jC,active:CC,codeContainer:bC,copyButton:NC},kC=()=>{const[e,t]=S.useState(!0),n=()=>{t(!e)},r=`
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
`,s=()=>{const a=e?r:o;navigator.clipboard.writeText(a).then(()=>{alert("Code copied to clipboard")})};return i.jsxs("div",{className:Q.pricingPageContainer,children:[i.jsx("h1",{className:Q.mainHeading,children:"Simple pricing, no commitment"}),i.jsx("p",{className:Q.subHeading,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus."}),i.jsxs("div",{className:Q.pricingSection,children:[i.jsxs("div",{className:Q.pricingCard,children:[i.jsx("h2",{className:Q.planName,children:"Starter"}),i.jsx("p",{className:Q.planPrice,children:"$15 USD"}),i.jsxs("ul",{className:Q.planFeatures,children:[i.jsx("li",{children:"Basic invoicing"}),i.jsx("li",{children:"Easy to use accounting"}),i.jsx("li",{children:"Multi-accounts"})]}),i.jsx("button",{className:Q.planButton,children:"Buy this plan"})]}),i.jsxs("div",{className:`${Q.pricingCard} ${Q.pricingCardMain}`,children:[i.jsx("h2",{className:Q.planName,children:"Scale"}),i.jsx("p",{className:Q.planPrice,children:"$60 USD"}),i.jsxs("ul",{className:Q.planFeatures,children:[i.jsx("li",{children:"Advanced invoicing"}),i.jsx("li",{children:"Easy to use accounting"}),i.jsx("li",{children:"Multi-accounts"}),i.jsx("li",{children:"Tax planning toolkit"}),i.jsx("li",{children:"VAT & VATMOSS filing"}),i.jsx("li",{children:"Free bank transfers"})]}),i.jsx("button",{className:Q.planButton,children:"Buy this plan"})]}),i.jsxs("div",{className:Q.pricingCard,children:[i.jsx("h2",{className:Q.planName,children:"Growth"}),i.jsx("p",{className:Q.planPrice,children:"$30 USD"}),i.jsxs("ul",{className:Q.planFeatures,children:[i.jsx("li",{children:"Basic invoicing"}),i.jsx("li",{children:"Easy to use accounting"}),i.jsx("li",{children:"Multi-accounts"})]}),i.jsx("button",{className:Q.planButton,children:"Buy this plan"})]})]}),i.jsxs("div",{className:Q.toggleContainer,children:[i.jsx("button",{className:`${Q.toggleButton} ${e?Q.active:""}`,onClick:n,children:"TSX"}),i.jsx("button",{className:`${Q.toggleButton} ${e?"":Q.active}`,onClick:n,children:"CSS"})]}),i.jsxs("div",{className:Q.codeContainer,children:[i.jsx("pre",{children:e?r:o}),i.jsx("button",{className:Q.copyButton,onClick:s,children:"Copy"})]})]})},BC="_featureSectionContainer_9lpqm_1",PC="_textContainer_9lpqm_8",EC="_cards_9lpqm_24",TC="_card_9lpqm_24",LC="_icon_9lpqm_37",RC="_codeToggle_9lpqm_61",$C="_toggleButton_9lpqm_67",OC="_active_9lpqm_77",MC="_codeSection_9lpqm_82",FC="_copyButton_9lpqm_93",Ce={featureSectionContainer:BC,textContainer:PC,cards:EC,card:TC,icon:LC,codeToggle:RC,toggleButton:$C,active:OC,codeSection:MC,copyButton:FC},IC=()=>{const[e,t]=S.useState(!0),n=()=>{t(!e)},r=`
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
  `;return i.jsxs("div",{className:Ce.featureSectionContainer,children:[i.jsxs("div",{className:Ce.textContainer,children:[i.jsx("h1",{children:"Stay on top of customer support"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}),i.jsxs("div",{className:Ce.cards,children:[i.jsxs("div",{className:Ce.card,children:[i.jsx("div",{className:Ce.icon,children:"📧"}),i.jsx("h2",{children:"Unlimited inboxes"}),i.jsx("p",{children:"Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequuntur dolores incidunt."}),i.jsx("a",{href:"/",children:"Learn more →"})]}),i.jsxs("div",{className:Ce.card,children:[i.jsx("div",{className:Ce.icon,children:"👥"}),i.jsx("h2",{children:"Manage team members"}),i.jsx("p",{children:"Vero eum voluptatem aliquid nostrum voluptates. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus."}),i.jsx("a",{href:"/",children:"Learn more →"})]}),i.jsxs("div",{className:Ce.card,children:[i.jsx("div",{className:Ce.icon,children:"🗑"}),i.jsx("h2",{children:"Spam report"}),i.jsx("p",{children:"Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit."}),i.jsx("a",{href:"/",children:"Learn more →"})]})]})]}),i.jsxs("div",{className:Ce.codeToggle,children:[i.jsx("button",{className:`${Ce.toggleButton} ${e?Ce.active:""}`,onClick:n,children:"TSX"}),i.jsx("button",{className:`${Ce.toggleButton} ${e?"":Ce.active}`,onClick:n,children:"CSS"})]}),i.jsxs("div",{className:Ce.codeSection,children:[i.jsx("pre",{children:e?r:o}),i.jsx("button",{className:Ce.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"})]})]})},zC="_featureSectionContainer_1nm7x_1",AC="_textContainer_1nm7x_9",DC="_features_1nm7x_28",UC="_icon_1nm7x_39",WC="_imageContainer_1nm7x_44",HC="_codeSection_1nm7x_54",qC="_toggleButtons_1nm7x_58",VC="_toggleButton_1nm7x_58",GC="_active_1nm7x_74",XC="_codeContainer_1nm7x_79",QC="_copyButton_1nm7x_91",Le={featureSectionContainer:zC,textContainer:AC,features:DC,icon:UC,imageContainer:WC,codeSection:HC,toggleButtons:qC,toggleButton:VC,active:GC,codeContainer:XC,copyButton:QC},KC=()=>{const[e,t]=S.useState(!0),n=()=>{t(!e)},r=`
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
`;return i.jsxs("div",{children:[i.jsxs("div",{className:Le.featureSectionContainer,children:[i.jsxs("div",{className:Le.textContainer,children:[i.jsx("h1",{children:"Deploy faster"}),i.jsx("h2",{children:"A better workflow"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}),i.jsxs("ul",{className:Le.features,children:[i.jsxs("li",{children:[i.jsx("div",{className:Le.icon,children:"🚀"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Push to deploy"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."})]})]}),i.jsxs("li",{children:[i.jsx("div",{className:Le.icon,children:"🔒"}),i.jsxs("div",{children:[i.jsx("h3",{children:"SSL certificates"}),i.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."})]})]}),i.jsxs("li",{children:[i.jsx("div",{className:Le.icon,children:"💾"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Database backups"}),i.jsx("p",{children:"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."})]})]})]})]}),i.jsx("div",{className:Le.imageContainer,children:i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Example"})})]}),i.jsxs("div",{className:Le.codeSection,children:[i.jsxs("div",{className:Le.toggleButtons,children:[i.jsx("button",{className:`${Le.toggleButton} ${e?Le.active:""}`,onClick:n,children:"TSX"}),i.jsx("button",{className:`${Le.toggleButton} ${e?"":Le.active}`,onClick:n,children:"CSS"})]}),i.jsxs("div",{className:Le.codeContainer,children:[i.jsx("button",{className:Le.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),i.jsx("pre",{children:i.jsx("code",{children:e?r:o})})]})]})]})},JC="_featureSectionContainer_5fr9w_1",YC="_textContainer_5fr9w_9",ZC="_features_5fr9w_34",eb="_imageContainer_5fr9w_59",tb="_codeSection_5fr9w_70",nb="_toggleButtons_5fr9w_74",rb="_toggleButton_5fr9w_74",ob="_active_5fr9w_90",ib="_codeContainer_5fr9w_95",sb="_copyButton_5fr9w_107",rt={featureSectionContainer:JC,textContainer:YC,features:ZC,imageContainer:eb,codeSection:tb,toggleButtons:nb,toggleButton:rb,active:ob,codeContainer:ib,copyButton:sb},ab=()=>{const[e,t]=S.useState(!0),n=()=>{t(!e)},r=`
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
`;return i.jsxs("div",{children:[i.jsxs("div",{className:rt.featureSectionContainer,children:[i.jsxs("div",{className:rt.textContainer,children:[i.jsx("h2",{children:"Everything you need"}),i.jsx("h1",{children:"All-in-one platform"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}),i.jsxs("ul",{className:rt.features,children:[i.jsx("li",{children:"Invite team members"}),i.jsx("li",{children:"Keyboard shortcuts"}),i.jsx("li",{children:"Notifications"}),i.jsx("li",{children:"Reporting"}),i.jsx("li",{children:"List view"}),i.jsx("li",{children:"Calendars"}),i.jsx("li",{children:"Boards"}),i.jsx("li",{children:"Mobile app"})]})]}),i.jsx("div",{className:rt.imageContainer,children:i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Example"})})]}),i.jsxs("div",{className:rt.codeSection,children:[i.jsxs("div",{className:rt.toggleButtons,children:[i.jsx("button",{className:`${rt.toggleButton} ${e?rt.active:""}`,onClick:n,children:"TSX"}),i.jsx("button",{className:`${rt.toggleButton} ${e?"":rt.active}`,onClick:n,children:"CSS"})]}),i.jsxs("div",{className:rt.codeContainer,children:[i.jsx("button",{className:rt.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),i.jsx("pre",{children:i.jsx("code",{children:e?r:o})})]})]})]})},lb="_ctaSection_uqicq_1",cb="_textContainer_uqicq_10",ub="_buttons_uqicq_29",db="_primaryButton_uqicq_34",pb="_secondaryButton_uqicq_42",fb="_imageContainer_uqicq_50",mb="_codeSection_uqicq_58",hb="_codeHeader_uqicq_66",gb="_toggleButtons_uqicq_73",vb="_toggleButton_uqicq_73",xb="_active_uqicq_87",yb="_codeBlock_uqicq_91",_b="_copyButton_uqicq_99",Re={ctaSection:lb,textContainer:cb,buttons:ub,primaryButton:db,secondaryButton:pb,imageContainer:fb,codeSection:mb,codeHeader:hb,toggleButtons:gb,toggleButton:vb,active:xb,codeBlock:yb,copyButton:_b},Sb=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(""),o=()=>{t(!e)},s=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`import React from 'react';
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
`;return i.jsxs("div",{children:[i.jsxs("div",{className:Re.ctaSection,children:[i.jsxs("div",{className:Re.textContainer,children:[i.jsx("h1",{children:"Boost your productivity."}),i.jsx("h2",{children:"Start using our app today."}),i.jsx("p",{children:"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."}),i.jsxs("div",{className:Re.buttons,children:[i.jsx("button",{className:Re.primaryButton,children:"Get started"}),i.jsx("button",{className:Re.secondaryButton,children:"Learn more"})]})]}),i.jsx("div",{className:Re.imageContainer,children:i.jsx("img",{src:"https://via.placeholder.com/400x400",alt:"Productivity"})})]}),i.jsxs("div",{className:Re.codeSection,children:[i.jsxs("div",{className:Re.codeHeader,children:[i.jsxs("div",{className:Re.toggleButtons,children:[i.jsx("button",{className:`${Re.toggleButton} ${e?Re.active:""}`,onClick:o,children:"TSX"}),i.jsx("button",{className:`${Re.toggleButton} ${e?"":Re.active}`,onClick:o,children:"CSS"})]}),i.jsx("button",{className:Re.copyButton,onClick:s,children:n?"Code copied!":"Copy"})]}),i.jsx("pre",{className:Re.codeBlock,children:i.jsx("code",{children:e?a:l})})]})]})},wb="_ctaSection_1j0um_1",jb="_imageContainer_1j0um_10",Cb="_textContainer_1j0um_20",bb="_primaryButton_1j0um_41",Nb="_codeSection_1j0um_49",kb="_codeHeader_1j0um_57",Bb="_toggleButtons_1j0um_64",Pb="_toggleButton_1j0um_64",Eb="_active_1j0um_78",Tb="_codeBlock_1j0um_82",Lb="_copyButton_1j0um_90",Ge={ctaSection:wb,imageContainer:jb,textContainer:Cb,primaryButton:bb,codeSection:Nb,codeHeader:kb,toggleButtons:Bb,toggleButton:Pb,active:Eb,codeBlock:Tb,copyButton:Lb},Rb=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(""),o=()=>{t(!e)},s=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`import React from 'react';
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
`;return i.jsxs("div",{children:[i.jsxs("div",{className:Ge.ctaSection,children:[i.jsx("div",{className:Ge.imageContainer,children:i.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Support"})}),i.jsxs("div",{className:Ge.textContainer,children:[i.jsx("h3",{children:"Award winning support"}),i.jsx("h1",{children:"We're here to help"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."}),i.jsx("button",{className:Ge.primaryButton,children:"Visit the help center"})]})]}),i.jsxs("div",{className:Ge.codeSection,children:[i.jsxs("div",{className:Ge.codeHeader,children:[i.jsxs("div",{className:Ge.toggleButtons,children:[i.jsx("button",{className:`${Ge.toggleButton} ${e?Ge.active:""}`,onClick:o,children:"TSX"}),i.jsx("button",{className:`${Ge.toggleButton} ${e?"":Ge.active}`,onClick:o,children:"CSS"})]}),i.jsx("button",{className:Ge.copyButton,onClick:s,children:n?"Code copied!":"Copy"})]}),i.jsx("pre",{className:Ge.codeBlock,children:i.jsx("code",{children:e?a:l})})]})]})},$b="_ctaSection_19d2u_1",Ob="_content_19d2u_9",Mb="_imageContainer_19d2u_24",Fb="_primaryButton_19d2u_35",Ib="_codeSection_19d2u_44",zb="_toggleButton_19d2u_50",Ab="_active_19d2u_58",Db="_codeBox_19d2u_63",Ub="_copyButton_19d2u_73",gt={ctaSection:$b,content:Ob,imageContainer:Mb,primaryButton:Fb,codeSection:Ib,toggleButton:zb,active:Ab,codeBox:Db,copyButton:Ub},Wb=()=>{const[e,t]=S.useState(!0),n=()=>t(!e),r=`
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
`;return i.jsxs("div",{className:gt.ctaSection,children:[i.jsxs("div",{className:gt.content,children:[i.jsx("h2",{children:"Our people"}),i.jsx("p",{children:"Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas."}),i.jsxs("div",{className:gt.imageContainer,children:[i.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Team"}),i.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Work"}),i.jsx("img",{src:"https://via.placeholder.com/400x300",alt:"Play"})]}),i.jsx("button",{className:gt.primaryButton,children:"Join our team"})]}),i.jsxs("div",{className:gt.codeSection,children:[i.jsx("button",{className:`${gt.toggleButton} ${e?gt.active:""}`,onClick:n,children:"TSX"}),i.jsx("button",{className:`${gt.toggleButton} ${e?"":gt.active}`,onClick:n,children:"CSS"}),i.jsxs("pre",{className:gt.codeBox,children:[i.jsx("button",{className:gt.copyButton,onClick:()=>navigator.clipboard.writeText(e?r:o),children:"Copy"}),i.jsx("code",{children:e?r:o})]})]})]})},Hb="_heroSectionDemo_1htu2_1",qb="_nav_1htu2_9",Vb="_content_1htu2_27",Gb="_primaryButton_1htu2_44",Xb="_secondaryButton_1htu2_45",Qb="_codeSection_1htu2_74",Kb="_toggleButtons_1htu2_83",Jb="_toggleButton_1htu2_83",Yb="_active_1htu2_103",Zb="_codeContainer_1htu2_107",e2="_code_1htu2_74",t2="_copyButton_1htu2_119",n2="_copySuccess_1htu2_135",$e={heroSectionDemo:Hb,nav:qb,content:Vb,primaryButton:Gb,secondaryButton:Xb,codeSection:Qb,toggleButtons:Kb,toggleButton:Jb,active:Yb,codeContainer:Zb,code:e2,copyButton:t2,copySuccess:n2},r2=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(""),o=()=>{t(!e)},s=()=>{const c=e?a:l;navigator.clipboard.writeText(c).then(()=>{r("Code copied!"),setTimeout(()=>r(""),2e3)})},a=`
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
  `;return i.jsxs("div",{children:[i.jsxs("div",{className:$e.heroSectionDemo,children:[i.jsxs("nav",{className:$e.nav,children:[i.jsx("a",{href:"#",children:"Product"}),i.jsx("a",{href:"#",children:"Features"}),i.jsx("a",{href:"#",children:"Marketplace"}),i.jsx("a",{href:"#",children:"Company"}),i.jsx("a",{href:"#",children:"Log in"})]}),i.jsxs("div",{className:$e.content,children:[i.jsx("h1",{children:"Data to enrich your online business"}),i.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),i.jsx("button",{className:$e.primaryButton,children:"Get started"}),i.jsx("button",{className:$e.secondaryButton,children:"Learn more"})]})]}),i.jsxs("div",{className:$e.codeSection,children:[i.jsxs("div",{className:$e.toggleButtons,children:[i.jsx("button",{className:`${$e.toggleButton} ${e?$e.active:""}`,onClick:o,children:"TSX"}),i.jsx("button",{className:`${$e.toggleButton} ${e?"":$e.active}`,onClick:o,children:"CSS"})]}),i.jsxs("div",{className:$e.codeContainer,children:[i.jsx("pre",{className:$e.code,children:e?a:l}),i.jsx("button",{className:$e.copyButton,onClick:s,children:"Copy"}),n&&i.jsx("div",{className:$e.copySuccess,children:n})]})]})]})},o2="_heroSection_82ka0_1",i2="_textContainer_82ka0_9",s2="_badge_82ka0_14",a2="_version_82ka0_24",l2="_buttons_82ka0_42",c2="_primaryButton_82ka0_48",u2="_secondaryButton_82ka0_57",d2="_codeContainer_82ka0_66",p2="_codeHeader_82ka0_75",f2="_toggleButton_82ka0_81",m2="_active_82ka0_91",h2="_codeBlock_82ka0_95",g2="_copyButton_82ka0_104",v2="_copySuccess_82ka0_120",x2="_fadeOut_82ka0_1",be={heroSection:o2,textContainer:i2,badge:s2,version:a2,buttons:l2,primaryButton:c2,secondaryButton:u2,codeContainer:d2,codeHeader:p2,toggleButton:f2,active:m2,codeBlock:h2,copyButton:g2,copySuccess:v2,fadeOut:x2},y2=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(""),o=()=>{const l=e?s:a;navigator.clipboard.writeText(l),r("Code Copied!"),setTimeout(()=>r(""),2e3)},s=`
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
`;return i.jsxs("div",{className:be.heroSection,children:[i.jsxs("div",{className:be.textContainer,children:[i.jsx("div",{className:be.badge,children:"What's new"}),i.jsx("div",{className:be.version,children:"Just shipped v0.1.0"}),i.jsx("h1",{children:"Supercharge your web applications"}),i.jsx("p",{children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),i.jsxs("div",{className:be.buttons,children:[i.jsx("button",{className:be.primaryButton,children:"Documentation"}),i.jsx("button",{className:be.secondaryButton,children:"View on GitHub"})]})]}),i.jsxs("div",{className:be.codeContainer,children:[i.jsxs("div",{className:be.codeHeader,children:[i.jsx("button",{className:`${be.toggleButton} ${e?be.active:""}`,onClick:()=>t(!0),children:"TSX"}),i.jsx("button",{className:`${be.toggleButton} ${e?"":be.active}`,onClick:()=>t(!1),children:"CSS"})]}),i.jsx("pre",{className:be.codeBlock,children:i.jsx("code",{children:e?s:a})}),i.jsx("button",{className:be.copyButton,onClick:o,children:"Copy"}),n&&i.jsx("div",{className:be.copySuccess,children:n})]})]})},_2="_formWrapper_6w6h4_1",S2="_loginForm_6w6h4_7",w2="_passwordWrapper_6w6h4_37",j2="_signInButton_6w6h4_62",C2="_enrollButton_6w6h4_71",b2="_codeBox_6w6h4_81",N2="_toggleButtons_6w6h4_93",k2="_toggleButton_6w6h4_93",B2="_active_6w6h4_109",P2="_copyButton_6w6h4_114",Xe={formWrapper:_2,loginForm:S2,passwordWrapper:w2,signInButton:j2,enrollButton:C2,codeBox:b2,toggleButtons:N2,toggleButton:k2,active:B2,copyButton:P2},E2=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!0),[o,s]=S.useState(""),a=()=>{t(!e)},l=p=>{r(p==="tsx")},c=p=>{navigator.clipboard.writeText(p),s("Code copied!"),setTimeout(()=>s(""),2e3)},u=`// TSX code for LoginForm 1...
import React, { useState } from 'react';
import styles from './LoginForm1.module.css';

const LoginForm1: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.loginForm}>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input type="email" />
      <label>Password:</label>
      <div className={styles.passwordWrapper}>
        <input type={passwordVisible ? "text" : "password"} />
        <span onClick={handleTogglePassword}>
          {passwordVisible ? '🙈' : '👁️'}
        </span>
      </div>
      <button className={styles.signInButton}>Sign In</button>
      <button className={styles.enrollButton}>Enroll</button>
    </div>
  );
};

export default LoginForm1;
`,d=`/* CSS code for LoginForm 1... */
.loginForm {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.loginForm h2 {
  text-align: center;
  margin-bottom: 20px;
}

.loginForm label {
  display: block;
  margin-bottom: 10px;
}

.loginForm input[type="email"],
.loginForm input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}

.passwordWrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.passwordWrapper input[type="password"] {
  padding-right: 40px; /* Add padding to the right to accommodate the eye icon */
}

.passwordWrapper span {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.loginForm button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.signInButton {
  background-color: #d70018;
  color: #fff;
}

.signInButton:hover {
  background-color: #a50014;
}

.enrollButton {
  background-color: #fff;
  color: #d70018;
  border: 1px solid #d70018;
}

.enrollButton:hover {
  background-color: #ddd;
}

.codeBox {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  max-height: 300px;
  overflow-y: auto;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.toggleButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
}

.toggleButton.active {
  background-color: #d70018;
  border-color: #d70018;
}

.copyButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
}
`;return i.jsxs("div",{children:[i.jsx("div",{className:Xe.formWrapper,children:i.jsxs("div",{className:Xe.loginForm,children:[i.jsx("h2",{children:"Sign In"}),i.jsx("label",{children:"Email:"}),i.jsx("input",{type:"email"}),i.jsx("label",{children:"Password:"}),i.jsxs("div",{className:Xe.passwordWrapper,children:[i.jsx("input",{type:e?"text":"password"}),i.jsx("span",{onClick:a,children:e?"🙈":"👁️"})]}),i.jsx("button",{className:Xe.signInButton,children:"Sign In"}),i.jsx("button",{className:Xe.enrollButton,children:"Enroll"})]})}),i.jsxs("div",{className:Xe.codeBox,children:[i.jsxs("div",{className:Xe.toggleButtons,children:[i.jsx("button",{className:`${Xe.toggleButton} ${n?Xe.active:""}`,onClick:()=>l("tsx"),children:"TSX"}),i.jsx("button",{className:`${Xe.toggleButton} ${n?"":Xe.active}`,onClick:()=>l("css"),children:"CSS"})]}),i.jsx("button",{className:Xe.copyButton,onClick:()=>c(n?u:d),children:"Copy"}),i.jsx("pre",{children:n?u:d}),o&&i.jsx("div",{className:Xe.copyMessage,children:o})]})]})},T2="_formWrapper_1we4b_1",L2="_loginForm_1we4b_7",R2="_passwordWrapper_1we4b_38",$2="_signInButton_1we4b_63",O2="_enrollButton_1we4b_72",M2="_codeBox_1we4b_82",F2="_toggleButtons_1we4b_94",I2="_toggleButton_1we4b_94",z2="_active_1we4b_110",A2="_copyButton_1we4b_115",ot={formWrapper:T2,loginForm:L2,passwordWrapper:R2,signInButton:$2,enrollButton:O2,codeBox:M2,toggleButtons:F2,toggleButton:I2,active:z2,copyButton:A2},D2=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState("tsx"),o=()=>{t(!e)},s=`import React, { useState } from 'react';
import styles from './LoginForm2.module.css';

const LoginForm2: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.loginForm}>
      <h2>Sign In</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <div className={styles.passwordWrapper}>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          name="password"
        />
        <span onClick={togglePasswordVisibility}>
          {passwordVisible ? '🙈' : '👁️'}
        </span>
      </div>
      <label htmlFor="role">Role:</label>
      <select id="role" name="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button className={styles.signInButton}>Sign In</button>
      <button className={styles.enrollButton}>Enroll</button>
    </div>
  );
};

export default LoginForm2;`,a=`.loginForm {
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.loginForm h2 {
  text-align: center;
  margin-bottom: 20px;
}

.loginForm label {
  display: block;
  margin-bottom: 10px;
}

.loginForm input[type="email"],
.loginForm input[type="password"],
.loginForm select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}

.passwordWrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.passwordWrapper input[type="password"] {
  padding-right: 40px;
}

.passwordWrapper span {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.loginForm button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.signInButton {
  background-color: #d70018;
  color: #fff;
}

.signInButton:hover {
  background-color: #a50014;
}

.enrollButton {
  background-color: #fff;
  color: #d70018;
  border: 1px solid #d70018;
}

.enrollButton:hover {
  background-color: #ddd;
}

.codeBox {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  max-height: 300px;
  overflow-y: auto;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.toggleButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
}

.toggleButton.active {
  background-color: #d70018;
  border-color: #d70018;
}

.copyButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
}`,l=()=>{const c=n==="tsx"?s:a;navigator.clipboard.writeText(c).then(()=>{alert("Code copied to clipboard")})};return i.jsxs("div",{className:ot.formWrapper,children:[i.jsxs("div",{className:ot.loginForm,children:[i.jsx("h2",{children:"Sign In"}),i.jsx("label",{htmlFor:"email",children:"Email:"}),i.jsx("input",{type:"email",id:"email",name:"email"}),i.jsx("label",{htmlFor:"password",children:"Password:"}),i.jsxs("div",{className:ot.passwordWrapper,children:[i.jsx("input",{type:e?"text":"password",id:"password",name:"password"}),i.jsx("span",{onClick:o,children:e?"🙈":"👁️"})]}),i.jsx("label",{htmlFor:"role",children:"Role:"}),i.jsxs("select",{id:"role",name:"role",children:[i.jsx("option",{value:"user",children:"User"}),i.jsx("option",{value:"admin",children:"Admin"})]}),i.jsx("button",{className:ot.signInButton,children:"Sign In"}),i.jsx("button",{className:ot.enrollButton,children:"Enroll"})]}),i.jsxs("div",{className:ot.codeBox,children:[i.jsxs("div",{className:ot.toggleButtons,children:[i.jsx("button",{className:`${ot.toggleButton} ${n==="tsx"?ot.active:""}`,onClick:()=>r("tsx"),children:"TSX"}),i.jsx("button",{className:`${ot.toggleButton} ${n==="css"?ot.active:""}`,onClick:()=>r("css"),children:"CSS"})]}),i.jsx("button",{className:ot.copyButton,onClick:l,children:"Copy"}),i.jsx("pre",{children:i.jsx("code",{children:n==="tsx"?s:a})})]})]})},U2="_formWrapper_12uyc_1",W2="_loginForm_12uyc_7",H2="_passwordWrapper_12uyc_38",q2="_checkboxWrapper_12uyc_54",V2="_signInButton_12uyc_73",G2="_enrollButton_12uyc_82",X2="_codeBox_12uyc_92",Q2="_toggleButtons_12uyc_104",K2="_toggleButton_12uyc_104",J2="_active_12uyc_120",Y2="_copyButton_12uyc_125",Qe={formWrapper:U2,loginForm:W2,passwordWrapper:H2,checkboxWrapper:q2,signInButton:V2,enrollButton:G2,codeBox:X2,toggleButtons:Q2,toggleButton:K2,active:J2,copyButton:Y2},Z2=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState("tsx"),o=()=>{t(!e)},s=`import React, { useState } from 'react';
import styles from './LoginForm3.module.css';

const LoginForm3: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.loginForm}>
        <h2>Sign In</h2>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <div className={styles.passwordWrapper}>
          <input type={showPassword ? 'text' : 'password'} />
          <span onClick={togglePasswordVisibility}>👁️</span>
        </div>
        <label>Role:</label>
        <select>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" />
          <label>Subscribe to newsletter</label>
        </div>
        <button className={styles.signInButton}>Sign In</button>
        <button className={styles.enrollButton}>Enroll</button>
      </div>
    </div>
  );
};

export default LoginForm3;`,a=`/* CSS code for LoginForm3.module.css */
.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.loginForm {
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.loginForm h2 {
  text-align: center;
  margin-bottom: 20px;
}

.loginForm label {
  display: block;
  margin-bottom: 10px;
}

.loginForm input[type="email"],
.loginForm input[type="password"],
.loginForm select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}

.passwordWrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.passwordWrapper input[type="password"] {
  padding-right: 40px;
}

.passwordWrapper span {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.checkboxWrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.checkboxWrapper input[type="checkbox"] {
  margin-right: 10px;
}

.loginForm button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.signInButton {
  background-color: #d70018;
  color: #fff;
}

.signInButton:hover {
  background-color: #a50014;
}

.enrollButton {
  background-color: #fff;
  color: #d70018;
  border: 1px solid #d70018;
}

.enrollButton:hover {
  background-color: #ddd;
}

.codeBox {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  max-height: 300px;
  overflow-y: auto;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.toggleButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
}

.toggleButton.active {
  background-color: #d70018;
  border-color: #d70018;
}

.copyButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
}`,l=c=>{navigator.clipboard.writeText(c),alert("Code copied to clipboard")};return i.jsx("div",{children:i.jsxs("div",{className:Qe.formWrapper,children:[i.jsxs("div",{className:Qe.loginForm,children:[i.jsx("h2",{children:"Sign In"}),i.jsx("label",{children:"Email:"}),i.jsx("input",{type:"email"}),i.jsx("label",{children:"Password:"}),i.jsxs("div",{className:Qe.passwordWrapper,children:[i.jsx("input",{type:e?"text":"password"}),i.jsx("span",{onClick:o,children:"👁️"})]}),i.jsx("label",{children:"Role:"}),i.jsxs("select",{children:[i.jsx("option",{value:"admin",children:"Admin"}),i.jsx("option",{value:"user",children:"User"})]}),i.jsxs("div",{className:Qe.checkboxWrapper,children:[i.jsx("input",{type:"checkbox"}),i.jsx("label",{children:"Subscribe to newsletter"})]}),i.jsx("button",{className:Qe.signInButton,children:"Sign In"}),i.jsx("button",{className:Qe.enrollButton,children:"Enroll"})]}),i.jsxs("div",{className:Qe.codeBox,children:[i.jsxs("div",{className:Qe.toggleButtons,children:[i.jsx("span",{className:`${Qe.toggleButton} ${n==="tsx"?Qe.active:""}`,onClick:()=>r("tsx"),children:"TSX"}),i.jsx("span",{className:`${Qe.toggleButton} ${n==="css"?Qe.active:""}`,onClick:()=>r("css"),children:"CSS"})]}),i.jsx("pre",{children:n==="tsx"?s:a}),i.jsx("button",{className:Qe.copyButton,onClick:()=>l(n==="tsx"?s:a),children:"Copy"})]})]})})},eN="_navbar_1hs4y_1",tN="_logo_1hs4y_10",nN="_hamburger_1hs4y_17",rN="_navLinks_1hs4y_26",oN="_open_1hs4y_62",Or={navbar:eN,logo:tN,hamburger:nN,navLinks:rN,open:oN},iN=()=>{const[e,t]=S.useState(!1),n=()=>{t(!e)};return i.jsxs("nav",{className:Or.navbar,children:[i.jsx("div",{className:Or.logo,children:i.jsx(L,{to:"/",children:"Wells Fargo"})}),i.jsx("button",{className:Or.hamburger,onClick:n,children:e?i.jsx("span",{children:"×"}):i.jsx("span",{children:"☰"})}),i.jsxs("ul",{className:`${Or.navLinks} ${e?Or.open:""}`,children:[i.jsx("li",{children:i.jsx(L,{to:"/",children:"Home"})}),i.jsx("li",{children:i.jsx(L,{to:"/about",children:"About"})}),i.jsx("li",{children:i.jsx(L,{to:"/services",children:"Services"})}),i.jsx("li",{children:i.jsx(L,{to:"/contact",children:"Contact"})})]})]})},sN="_heroSection_1bob7_1",aN="_heroContent_1bob7_7",lN="_ctaButton_1bob7_25",fa={heroSection:sN,heroContent:aN,ctaButton:lN},cN=()=>i.jsx("section",{className:fa.heroSection,children:i.jsxs("div",{className:fa.heroContent,children:[i.jsx("h1",{children:"Welcome to Our Website"}),i.jsx("a",{href:"#",className:fa.ctaButton,children:"Get Started"})]})}),uN="_featureSection_1yi6k_1",dN="_features_1yi6k_13",pN="_feature_1yi6k_1",Mr={featureSection:uN,features:dN,feature:pN},fN=()=>i.jsxs("section",{className:Mr.featureSection,children:[i.jsx("h2",{children:"Our Features"}),i.jsxs("div",{className:Mr.features,children:[i.jsxs("div",{className:Mr.feature,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 1"}),i.jsx("h3",{children:"Feature One"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),i.jsxs("div",{className:Mr.feature,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 2"}),i.jsx("h3",{children:"Feature Two"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),i.jsxs("div",{className:Mr.feature,children:[i.jsx("img",{src:"https://via.placeholder.com/150",alt:"Feature 3"}),i.jsx("h3",{children:"Feature Three"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})]}),mN="_testimonialSection_1crso_1",hN="_testimonials_1crso_13",gN="_testimonial_1crso_1",si={testimonialSection:mN,testimonials:hN,testimonial:gN},vN=()=>i.jsxs("section",{className:si.testimonialSection,children:[i.jsx("h2",{children:"What Our Clients Say"}),i.jsxs("div",{className:si.testimonials,children:[i.jsxs("div",{className:si.testimonial,children:[i.jsx("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu ut nisi commodo sodales."'}),i.jsx("h3",{children:"- John Doe"})]}),i.jsxs("div",{className:si.testimonial,children:[i.jsx("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu ut nisi commodo sodales."'}),i.jsx("h3",{children:"- Jane Smith"})]})]})]}),xN="_pricingSection_k7f8y_1",yN="_plans_k7f8y_13",_N="_plan_k7f8y_13",SN="_price_k7f8y_36",wN="_ctaButton_k7f8y_54",vt={pricingSection:xN,plans:yN,plan:_N,price:SN,ctaButton:wN},jN=()=>i.jsxs("section",{className:vt.pricingSection,children:[i.jsx("h2",{children:"Pricing Plans"}),i.jsxs("div",{className:vt.plans,children:[i.jsxs("div",{className:vt.plan,children:[i.jsx("h3",{children:"Basic"}),i.jsx("p",{className:vt.price,children:"$19.99/mo"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Feature One"}),i.jsx("li",{children:"Feature Two"}),i.jsx("li",{children:"Feature Three"})]}),i.jsx("a",{href:"#",className:vt.ctaButton,children:"Get Started"})]}),i.jsxs("div",{className:vt.plan,children:[i.jsx("h3",{children:"Pro"}),i.jsx("p",{className:vt.price,children:"$49.99/mo"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Feature One"}),i.jsx("li",{children:"Feature Two"}),i.jsx("li",{children:"Feature Three"})]}),i.jsx("a",{href:"#",className:vt.ctaButton,children:"Get Started"})]}),i.jsxs("div",{className:vt.plan,children:[i.jsx("h3",{children:"Enterprise"}),i.jsx("p",{className:vt.price,children:"$99.99/mo"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Feature One"}),i.jsx("li",{children:"Feature Two"}),i.jsx("li",{children:"Feature Three"})]}),i.jsx("a",{href:"#",className:vt.ctaButton,children:"Get Started"})]})]})]}),CN="_ctaSection_1570w_1",bN="_ctaContent_1570w_8",NN="_ctaButton_1570w_26",ma={ctaSection:CN,ctaContent:bN,ctaButton:NN},kN=()=>i.jsx("section",{className:ma.ctaSection,children:i.jsxs("div",{className:ma.ctaContent,children:[i.jsx("h2",{children:"Join Us Today!"}),i.jsx("p",{children:"Sign up now and get access to exclusive content and features."}),i.jsx("a",{href:"#",className:ma.ctaButton,children:"Sign Up"})]})}),BN="_footer_na1p0_1",PN="_footerContent_na1p0_8",EN="_socialMedia_na1p0_18",TN="_footerLinks_na1p0_18",LN="_copyRight_na1p0_28",Fr={footer:BN,footerContent:PN,socialMedia:EN,footerLinks:TN,copyRight:LN},RN=()=>i.jsxs("footer",{className:Fr.footer,children:[i.jsxs("div",{className:Fr.footerContent,children:[i.jsxs("div",{className:Fr.socialMedia,children:[i.jsx("a",{href:"#",children:"Facebook"}),i.jsx("a",{href:"#",children:"Twitter"}),i.jsx("a",{href:"#",children:"Instagram"})]}),i.jsxs("div",{className:Fr.footerLinks,children:[i.jsx("a",{href:"#",children:"Privacy Policy"}),i.jsx("a",{href:"#",children:"Terms of Service"}),i.jsx("a",{href:"#",children:"Contact Us"})]})]}),i.jsx("p",{className:Fr.copyRight,children:"© 2024 Your Company. All rights reserved."})]}),$N="_carousel_13zr2_1",ON="_carouselContent_13zr2_12",MN="_active_13zr2_26",FN="_navButton_13zr2_30",Ir={carousel:$N,carouselContent:ON,active:MN,navButton:FN},IN=()=>{const[e,t]=S.useState(0),n=["https://via.placeholder.com/800x300?text=Slide+1","https://via.placeholder.com/800x300?text=Slide+2","https://via.placeholder.com/800x300?text=Slide+3"],r=()=>{t(s=>(s-1+n.length)%n.length)},o=()=>{t(s=>(s+1)%n.length)};return S.useEffect(()=>{const s=setInterval(()=>{o()},3e3);return()=>clearInterval(s)},[]),i.jsxs("div",{className:Ir.carousel,children:[i.jsx("button",{className:Ir.navButton,onClick:r,children:"<"}),i.jsx("div",{className:Ir.carouselContent,children:n.map((s,a)=>i.jsx("img",{src:s,alt:`Slide ${a+1}`,className:a===e?Ir.active:""},a))}),i.jsx("button",{className:Ir.navButton,onClick:o,children:">"})]})},zN="_template_7932q_1",AN={template:zN},DN=()=>i.jsxs("div",{className:AN.template,children:[i.jsx(iN,{}),i.jsx(cN,{}),i.jsx(fN,{}),i.jsx(IN,{}),i.jsx(vN,{}),i.jsx(jN,{}),i.jsx(kN,{}),i.jsx(RN,{})]}),UN=()=>i.jsx(xx,{children:i.jsxs(Jv,{children:[i.jsx(yx,{}),i.jsxs(Hv,{children:[i.jsx(z,{path:"/",element:i.jsx(Bx,{})}),i.jsx(z,{path:"/components",element:i.jsx(t1,{})}),i.jsx(z,{path:"/utilities",element:i.jsx(n1,{})}),i.jsx(z,{path:"/documentation",element:i.jsx(r1,{})}),i.jsx(z,{path:"/examples",element:i.jsx(l1,{})}),i.jsx(z,{path:"/signup",element:i.jsx(H_,{})}),i.jsx(z,{path:"/login",element:i.jsx(eS,{})}),i.jsx(z,{path:"/button",element:i.jsx(Jf,{})}),i.jsx(z,{path:"/navbarsection",element:i.jsx(Zf,{})}),i.jsx(z,{path:"/cardsection",element:i.jsx(Yf,{})}),i.jsx(z,{path:"/aboutpage",element:i.jsx(Xf,{})}),i.jsx(z,{path:"/aboutpage1",element:i.jsx(Sw,{})}),i.jsx(z,{path:"/aboutpage2",element:i.jsx(Dw,{})}),i.jsx(z,{path:"/aboutpage3",element:i.jsx(uj,{})}),i.jsx(z,{path:"/loginpage",element:i.jsx(Qf,{})}),i.jsx(z,{path:"/loginpage1",element:i.jsx(jj,{})}),i.jsx(z,{path:"/loginpage2",element:i.jsx(Mj,{})}),i.jsx(z,{path:"/loginpage3",element:i.jsx(Qj,{})}),i.jsx(z,{path:"/pricingpage",element:i.jsx(Gf,{})}),i.jsx(z,{path:"/pricingpage1",element:i.jsx(dC,{})}),i.jsx(z,{path:"/pricingpage2",element:i.jsx(kC,{})}),i.jsx(z,{path:"/featuresection",element:i.jsx(qf,{})}),i.jsx(z,{path:"/featuresection1",element:i.jsx(IC,{})}),i.jsx(z,{path:"/featuresection2",element:i.jsx(KC,{})}),i.jsx(z,{path:"/featuresection3",element:i.jsx(ab,{})}),i.jsx(z,{path:"/ctasection",element:i.jsx(Vf,{})}),i.jsx(z,{path:"/ctasection1",element:i.jsx(Sb,{})}),i.jsx(z,{path:"/ctasection2",element:i.jsx(Rb,{})}),i.jsx(z,{path:"/ctasection3",element:i.jsx(Wb,{})}),i.jsx(z,{path:"/herosection",element:i.jsx(Hf,{})}),i.jsx(z,{path:"/herosection1",element:i.jsx(r2,{})}),i.jsx(z,{path:"/herosection2",element:i.jsx(y2,{})}),i.jsx(z,{path:"/examples/template1",element:i.jsx(DN,{})}),i.jsx(z,{path:"/loginform",element:i.jsx(Kf,{})}),i.jsx(z,{path:"/loginform1",element:i.jsx(E2,{})}),i.jsx(z,{path:"/loginform2",element:i.jsx(D2,{})}),i.jsx(z,{path:"/loginform3",element:i.jsx(Z2,{})})]}),i.jsx(oS,{})]})});ha.createRoot(document.getElementById("root")).render(i.jsx(Ut.StrictMode,{children:i.jsx(UN,{})}));
