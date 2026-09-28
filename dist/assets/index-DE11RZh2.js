(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))p(k);new MutationObserver(k=>{for(const x of k)if(x.type==="childList")for(const N of x.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&p(N)}).observe(document,{childList:!0,subtree:!0});function u(k){const x={};return k.integrity&&(x.integrity=k.integrity),k.referrerPolicy&&(x.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?x.credentials="include":k.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(k){if(k.ep)return;k.ep=!0;const x=u(k);fetch(k.href,x)}})();function zu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var So={exports:{}},ci={},Co={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function Lp(){if(gu)return se;gu=1;var a=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.iterator;function M(v){return v===null||typeof v!="object"?null:(v=I&&v[I]||v["@@iterator"],typeof v=="function"?v:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,F={};function P(v,C,te){this.props=v,this.context=C,this.refs=F,this.updater=te||Z}P.prototype.isReactComponent={},P.prototype.setState=function(v,C){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,C,"setState")},P.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function K(){}K.prototype=P.prototype;function ve(v,C,te){this.props=v,this.context=C,this.refs=F,this.updater=te||Z}var Te=ve.prototype=new K;Te.constructor=ve,z(Te,P.prototype),Te.isPureReactComponent=!0;var D=Array.isArray,le=Object.prototype.hasOwnProperty,ee={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function he(v,C,te){var ie,ae={},ce=null,xe=null;if(C!=null)for(ie in C.ref!==void 0&&(xe=C.ref),C.key!==void 0&&(ce=""+C.key),C)le.call(C,ie)&&!oe.hasOwnProperty(ie)&&(ae[ie]=C[ie]);var fe=arguments.length-2;if(fe===1)ae.children=te;else if(1<fe){for(var ye=Array(fe),Ze=0;Ze<fe;Ze++)ye[Ze]=arguments[Ze+2];ae.children=ye}if(v&&v.defaultProps)for(ie in fe=v.defaultProps,fe)ae[ie]===void 0&&(ae[ie]=fe[ie]);return{$$typeof:a,type:v,key:ce,ref:xe,props:ae,_owner:ee.current}}function Ae(v,C){return{$$typeof:a,type:v.type,key:C,ref:v.ref,props:v.props,_owner:v._owner}}function ke(v){return typeof v=="object"&&v!==null&&v.$$typeof===a}function Qe(v){var C={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(te){return C[te]})}var rt=/\/+/g;function Xe(v,C){return typeof v=="object"&&v!==null&&v.key!=null?Qe(""+v.key):C.toString(36)}function _e(v,C,te,ie,ae){var ce=typeof v;(ce==="undefined"||ce==="boolean")&&(v=null);var xe=!1;if(v===null)xe=!0;else switch(ce){case"string":case"number":xe=!0;break;case"object":switch(v.$$typeof){case a:case s:xe=!0}}if(xe)return xe=v,ae=ae(xe),v=ie===""?"."+Xe(xe,0):ie,D(ae)?(te="",v!=null&&(te=v.replace(rt,"$&/")+"/"),_e(ae,C,te,"",function(Ze){return Ze})):ae!=null&&(ke(ae)&&(ae=Ae(ae,te+(!ae.key||xe&&xe.key===ae.key?"":(""+ae.key).replace(rt,"$&/")+"/")+v)),C.push(ae)),1;if(xe=0,ie=ie===""?".":ie+":",D(v))for(var fe=0;fe<v.length;fe++){ce=v[fe];var ye=ie+Xe(ce,fe);xe+=_e(ce,C,te,ye,ae)}else if(ye=M(v),typeof ye=="function")for(v=ye.call(v),fe=0;!(ce=v.next()).done;)ce=ce.value,ye=ie+Xe(ce,fe++),xe+=_e(ce,C,te,ye,ae);else if(ce==="object")throw C=String(v),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return xe}function ft(v,C,te){if(v==null)return v;var ie=[],ae=0;return _e(v,ie,"","",function(ce){return C.call(te,ce,ae++)}),ie}function we(v){if(v._status===-1){var C=v._result;C=C(),C.then(function(te){(v._status===0||v._status===-1)&&(v._status=1,v._result=te)},function(te){(v._status===0||v._status===-1)&&(v._status=2,v._result=te)}),v._status===-1&&(v._status=0,v._result=C)}if(v._status===1)return v._result.default;throw v._result}var Ne={current:null},V={transition:null},Y={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:V,ReactCurrentOwner:ee};function U(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:ft,forEach:function(v,C,te){ft(v,function(){C.apply(this,arguments)},te)},count:function(v){var C=0;return ft(v,function(){C++}),C},toArray:function(v){return ft(v,function(C){return C})||[]},only:function(v){if(!ke(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},se.Component=P,se.Fragment=u,se.Profiler=k,se.PureComponent=ve,se.StrictMode=p,se.Suspense=g,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,se.act=U,se.cloneElement=function(v,C,te){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ie=z({},v.props),ae=v.key,ce=v.ref,xe=v._owner;if(C!=null){if(C.ref!==void 0&&(ce=C.ref,xe=ee.current),C.key!==void 0&&(ae=""+C.key),v.type&&v.type.defaultProps)var fe=v.type.defaultProps;for(ye in C)le.call(C,ye)&&!oe.hasOwnProperty(ye)&&(ie[ye]=C[ye]===void 0&&fe!==void 0?fe[ye]:C[ye])}var ye=arguments.length-2;if(ye===1)ie.children=te;else if(1<ye){fe=Array(ye);for(var Ze=0;Ze<ye;Ze++)fe[Ze]=arguments[Ze+2];ie.children=fe}return{$$typeof:a,type:v.type,key:ae,ref:ce,props:ie,_owner:xe}},se.createContext=function(v){return v={$$typeof:N,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:x,_context:v},v.Consumer=v},se.createElement=he,se.createFactory=function(v){var C=he.bind(null,v);return C.type=v,C},se.createRef=function(){return{current:null}},se.forwardRef=function(v){return{$$typeof:y,render:v}},se.isValidElement=ke,se.lazy=function(v){return{$$typeof:S,_payload:{_status:-1,_result:v},_init:we}},se.memo=function(v,C){return{$$typeof:_,type:v,compare:C===void 0?null:C}},se.startTransition=function(v){var C=V.transition;V.transition={};try{v()}finally{V.transition=C}},se.unstable_act=U,se.useCallback=function(v,C){return Ne.current.useCallback(v,C)},se.useContext=function(v){return Ne.current.useContext(v)},se.useDebugValue=function(){},se.useDeferredValue=function(v){return Ne.current.useDeferredValue(v)},se.useEffect=function(v,C){return Ne.current.useEffect(v,C)},se.useId=function(){return Ne.current.useId()},se.useImperativeHandle=function(v,C,te){return Ne.current.useImperativeHandle(v,C,te)},se.useInsertionEffect=function(v,C){return Ne.current.useInsertionEffect(v,C)},se.useLayoutEffect=function(v,C){return Ne.current.useLayoutEffect(v,C)},se.useMemo=function(v,C){return Ne.current.useMemo(v,C)},se.useReducer=function(v,C,te){return Ne.current.useReducer(v,C,te)},se.useRef=function(v){return Ne.current.useRef(v)},se.useState=function(v){return Ne.current.useState(v)},se.useSyncExternalStore=function(v,C,te){return Ne.current.useSyncExternalStore(v,C,te)},se.useTransition=function(){return Ne.current.useTransition()},se.version="18.3.1",se}var xu;function Mo(){return xu||(xu=1,Co.exports=Lp()),Co.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu;function Mp(){if(vu)return ci;vu=1;var a=Mo(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,k=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function N(y,g,_){var S,I={},M=null,Z=null;_!==void 0&&(M=""+_),g.key!==void 0&&(M=""+g.key),g.ref!==void 0&&(Z=g.ref);for(S in g)p.call(g,S)&&!x.hasOwnProperty(S)&&(I[S]=g[S]);if(y&&y.defaultProps)for(S in g=y.defaultProps,g)I[S]===void 0&&(I[S]=g[S]);return{$$typeof:s,type:y,key:M,ref:Z,props:I,_owner:k.current}}return ci.Fragment=u,ci.jsx=N,ci.jsxs=N,ci}var wu;function Fp(){return wu||(wu=1,So.exports=Mp()),So.exports}var r=Fp(),re=Mo();const Vp=zu(re);var Ms={},_o={exports:{}},pt={},Eo={exports:{}},To={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu;function Dp(){return yu||(yu=1,(function(a){function s(V,Y){var U=V.length;V.push(Y);e:for(;0<U;){var v=U-1>>>1,C=V[v];if(0<k(C,Y))V[v]=Y,V[U]=C,U=v;else break e}}function u(V){return V.length===0?null:V[0]}function p(V){if(V.length===0)return null;var Y=V[0],U=V.pop();if(U!==Y){V[0]=U;e:for(var v=0,C=V.length,te=C>>>1;v<te;){var ie=2*(v+1)-1,ae=V[ie],ce=ie+1,xe=V[ce];if(0>k(ae,U))ce<C&&0>k(xe,ae)?(V[v]=xe,V[ce]=U,v=ce):(V[v]=ae,V[ie]=U,v=ie);else if(ce<C&&0>k(xe,U))V[v]=xe,V[ce]=U,v=ce;else break e}}return Y}function k(V,Y){var U=V.sortIndex-Y.sortIndex;return U!==0?U:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;a.unstable_now=function(){return x.now()}}else{var N=Date,y=N.now();a.unstable_now=function(){return N.now()-y}}var g=[],_=[],S=1,I=null,M=3,Z=!1,z=!1,F=!1,P=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Te(V){for(var Y=u(_);Y!==null;){if(Y.callback===null)p(_);else if(Y.startTime<=V)p(_),Y.sortIndex=Y.expirationTime,s(g,Y);else break;Y=u(_)}}function D(V){if(F=!1,Te(V),!z)if(u(g)!==null)z=!0,we(le);else{var Y=u(_);Y!==null&&Ne(D,Y.startTime-V)}}function le(V,Y){z=!1,F&&(F=!1,K(he),he=-1),Z=!0;var U=M;try{for(Te(Y),I=u(g);I!==null&&(!(I.expirationTime>Y)||V&&!Qe());){var v=I.callback;if(typeof v=="function"){I.callback=null,M=I.priorityLevel;var C=v(I.expirationTime<=Y);Y=a.unstable_now(),typeof C=="function"?I.callback=C:I===u(g)&&p(g),Te(Y)}else p(g);I=u(g)}if(I!==null)var te=!0;else{var ie=u(_);ie!==null&&Ne(D,ie.startTime-Y),te=!1}return te}finally{I=null,M=U,Z=!1}}var ee=!1,oe=null,he=-1,Ae=5,ke=-1;function Qe(){return!(a.unstable_now()-ke<Ae)}function rt(){if(oe!==null){var V=a.unstable_now();ke=V;var Y=!0;try{Y=oe(!0,V)}finally{Y?Xe():(ee=!1,oe=null)}}else ee=!1}var Xe;if(typeof ve=="function")Xe=function(){ve(rt)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ft=_e.port2;_e.port1.onmessage=rt,Xe=function(){ft.postMessage(null)}}else Xe=function(){P(rt,0)};function we(V){oe=V,ee||(ee=!0,Xe())}function Ne(V,Y){he=P(function(){V(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_continueExecution=function(){z||Z||(z=!0,we(le))},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return M},a.unstable_getFirstCallbackNode=function(){return u(g)},a.unstable_next=function(V){switch(M){case 1:case 2:case 3:var Y=3;break;default:Y=M}var U=M;M=Y;try{return V()}finally{M=U}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var U=M;M=V;try{return Y()}finally{M=U}},a.unstable_scheduleCallback=function(V,Y,U){var v=a.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?v+U:v):U=v,V){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=U+C,V={id:S++,callback:Y,priorityLevel:V,startTime:U,expirationTime:C,sortIndex:-1},U>v?(V.sortIndex=U,s(_,V),u(g)===null&&V===u(_)&&(F?(K(he),he=-1):F=!0,Ne(D,U-v))):(V.sortIndex=C,s(g,V),z||Z||(z=!0,we(le))),V},a.unstable_shouldYield=Qe,a.unstable_wrapCallback=function(V){var Y=M;return function(){var U=M;M=Y;try{return V.apply(this,arguments)}finally{M=U}}}})(To)),To}var bu;function Up(){return bu||(bu=1,Eo.exports=Dp()),Eo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku;function $p(){if(ku)return pt;ku=1;var a=Mo(),s=Up();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,k={};function x(e,t){N(e,t),N(e+"Capture",t)}function N(e,t){for(k[e]=t,e=0;e<t.length;e++)p.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},I={};function M(e){return g.call(I,e)?!0:g.call(S,e)?!1:_.test(e)?I[e]=!0:(S[e]=!0,!1)}function Z(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,n,i){if(t===null||typeof t>"u"||Z(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,n,i,l,o,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=c}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function ve(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(K,ve);P[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(K,ve);P[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(K,ve);P[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function Te(e,t,n,i){var l=P.hasOwnProperty(t)?P[t]:null;(l!==null?l.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,n,l,i)&&(n=null),i||l===null?M(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,i=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),ee=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),Ae=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Qe=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,v;function C(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var te=!1;function ie(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var i=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){i=j}e.call(t.prototype)}else{try{throw Error()}catch(j){i=j}e()}}catch(j){if(j&&i&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),o=i.stack.split(`
`),c=l.length-1,d=o.length-1;1<=c&&0<=d&&l[c]!==o[d];)d--;for(;1<=c&&0<=d;c--,d--)if(l[c]!==o[d]){if(c!==1||d!==1)do if(c--,d--,0>d||l[c]!==o[d]){var h=`
`+l[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=d);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function ae(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case ee:return"Portal";case Ae:return"Profiler";case he:return"StrictMode";case Xe:return"Suspense";case _e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qe:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){i=""+c,o.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(c){i=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qn(e){e._valueTracker||(e._valueTracker=Ze(e))}function fi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ye(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cn(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mi(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=fe(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gi(e,t){t=t.checked,t!=null&&Te(e,"checked",t,!1)}function wr(e,t){gi(e,t);var n=fe(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yr(e,t.type,n):t.hasOwnProperty("defaultValue")&&yr(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yr(e,t,n){(t!=="number"||Kn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function tn(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+fe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function br(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(_n(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fe(n)}}function wi(e,t){var n=fe(t.value),i=fe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function yi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yn,ki=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function En(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$s=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){$s.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Ni(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function ji(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,l=Ni(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,l):e[n]=l}}var Ws=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nr(e,t){if(t){if(Ws[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function jr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function Cr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,nn=null,rn=null;function Si(e){if(e=Kr(e)){if(typeof _r!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Zi(t),_r(e.stateNode,e.type,t))}}function Ci(e){nn?rn?rn.push(e):rn=[e]:nn=e}function _i(){if(nn){var e=nn,t=rn;if(rn=nn=null,Si(e),t)for(e=0;e<t.length;e++)Si(t[e])}}function Ei(e,t){return e(t)}function Ti(){}var Er=!1;function Ai(e,t,n){if(Er)return e(t,n);Er=!0;try{return Ei(e,t,n)}finally{Er=!1,(nn!==null||rn!==null)&&(Ti(),_i())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var i=Zi(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Tr=!1;if(y)try{var f={};Object.defineProperty(f,"passive",{get:function(){Tr=!0}}),window.addEventListener("test",f,f),window.removeEventListener("test",f,f)}catch{Tr=!1}function O(e,t,n,i,l,o,c,d,h){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(T){this.onError(T)}}var L=!1,G=null,me=!1,Ie=null,mt={onError:function(e){L=!0,G=e}};function Ri(e,t,n,i,l,o,c,d,h){L=!1,G=null,O.apply(mt,arguments)}function Hu(e,t,n,i,l,o,c,d,h){if(Ri.apply(this,arguments),L){if(L){var j=G;L=!1,G=null}else throw Error(u(198));me||(me=!0,Ie=j)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Do(e){if(Rn(e)!==e)throw Error(u(188))}function Gu(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Do(l),e;if(o===i)return Do(l),t;o=o.sibling}throw Error(u(188))}if(n.return!==i.return)n=l,i=o;else{for(var c=!1,d=l.child;d;){if(d===n){c=!0,n=l,i=o;break}if(d===i){c=!0,i=l,n=o;break}d=d.sibling}if(!c){for(d=o.child;d;){if(d===n){c=!0,n=o,i=l;break}if(d===i){c=!0,i=o,n=l;break}d=d.sibling}if(!c)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Uo(e){return e=Gu(e),e!==null?$o(e):null}function $o(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$o(e);if(t!==null)return t;e=e.sibling}return null}var Wo=s.unstable_scheduleCallback,Bo=s.unstable_cancelCallback,qu=s.unstable_shouldYield,Ku=s.unstable_requestPaint,Le=s.unstable_now,Yu=s.unstable_getCurrentPriorityLevel,Bs=s.unstable_ImmediatePriority,Ho=s.unstable_UserBlockingPriority,zi=s.unstable_NormalPriority,Qu=s.unstable_LowPriority,Go=s.unstable_IdlePriority,Ii=null,Lt=null;function Xu(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:ed,Zu=Math.log,Ju=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Zu(e)/Ju|0)|0}var Pi=64,Oi=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var d=c&~l;d!==0?i=Ar(d):(o&=c,o!==0&&(i=Ar(o)))}else c=n&~l,c!==0?i=Ar(c):o!==0&&(i=Ar(o));if(i===0)return 0;if(t!==0&&t!==i&&(t&l)===0&&(l=i&-i,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Et(t),l=1<<n,i|=e[n],t&=~l;return i}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-Et(o),d=1<<c,h=l[c];h===-1?((d&n)===0||(d&i)!==0)&&(l[c]=td(d,t)):h<=t&&(e.expiredLanes|=d),o&=~d}}function Hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qo(){var e=Pi;return Pi<<=1,(Pi&4194240)===0&&(Pi=64),e}function Gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Et(n),o=1<<l;t[l]=0,i[l]=-1,e[l]=-1,n&=~o}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Et(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}var ge=0;function Ko(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yo,Ks,Qo,Xo,Zo,Ys=!1,Mi=[],sn=null,ln=null,on=null,zr=new Map,Ir=new Map,an=[],id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jo(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function Pr(e,t,n,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Kr(t),t!==null&&Ks(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sd(e,t,n,i,l){switch(t){case"focusin":return sn=Pr(sn,e,t,n,i,l),!0;case"dragenter":return ln=Pr(ln,e,t,n,i,l),!0;case"mouseover":return on=Pr(on,e,t,n,i,l),!0;case"pointerover":var o=l.pointerId;return zr.set(o,Pr(zr.get(o)||null,e,t,n,i,l)),!0;case"gotpointercapture":return o=l.pointerId,Ir.set(o,Pr(Ir.get(o)||null,e,t,n,i,l)),!0}return!1}function ea(e){var t=zn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vo(n),t!==null){e.blockedOn=t,Zo(e.priority,function(){Qo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Sr=i,n.target.dispatchEvent(i),Sr=null}else return t=Kr(n),t!==null&&Ks(t),e.blockedOn=n,!1;t.shift()}return!0}function ta(e,t,n){Fi(e)&&n.delete(t)}function ld(){Ys=!1,sn!==null&&Fi(sn)&&(sn=null),ln!==null&&Fi(ln)&&(ln=null),on!==null&&Fi(on)&&(on=null),zr.forEach(ta),Ir.forEach(ta)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ld)))}function Lr(e){function t(l){return Or(l,e)}if(0<Mi.length){Or(Mi[0],e);for(var n=1;n<Mi.length;n++){var i=Mi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(sn!==null&&Or(sn,e),ln!==null&&Or(ln,e),on!==null&&Or(on,e),zr.forEach(t),Ir.forEach(t),n=0;n<an.length;n++)i=an[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)ea(n),n.blockedOn===null&&an.shift()}var Qn=D.ReactCurrentBatchConfig,Vi=!0;function od(e,t,n,i){var l=ge,o=Qn.transition;Qn.transition=null;try{ge=1,Qs(e,t,n,i)}finally{ge=l,Qn.transition=o}}function ad(e,t,n,i){var l=ge,o=Qn.transition;Qn.transition=null;try{ge=4,Qs(e,t,n,i)}finally{ge=l,Qn.transition=o}}function Qs(e,t,n,i){if(Vi){var l=Xs(e,t,n,i);if(l===null)fl(e,t,i,Di,n),Jo(e,i);else if(sd(l,e,t,n,i))i.stopPropagation();else if(Jo(e,i),t&4&&-1<id.indexOf(e)){for(;l!==null;){var o=Kr(l);if(o!==null&&Yo(o),o=Xs(e,t,n,i),o===null&&fl(e,t,i,Di,n),o===l)break;l=o}l!==null&&i.stopPropagation()}else fl(e,t,i,null,n)}}var Di=null;function Xs(e,t,n,i){if(Di=null,e=Cr(i),e=zn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function na(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yu()){case Bs:return 1;case Ho:return 4;case zi:case Qu:return 16;case Go:return 536870912;default:return 16}default:return 16}}var cn=null,Zs=null,Ui=null;function ra(){if(Ui)return Ui;var e,t=Zs,n=t.length,i,l="value"in cn?cn.value:cn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(i=1;i<=c&&t[n-i]===l[o-i];i++);return Ui=l.slice(e,1<i?1-i:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function ia(){return!1}function gt(e){function t(n,i,l,o,c){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:ia,this.isPropagationStopped=ia,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=gt(Xn),Mr=U({},Xn,{view:0,detail:0}),cd=gt(Mr),el,tl,Fr,Bi=U({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(el=e.screenX-Fr.screenX,tl=e.screenY-Fr.screenY):tl=el=0,Fr=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),sa=gt(Bi),ud=U({},Bi,{dataTransfer:0}),dd=gt(ud),pd=U({},Mr,{relatedTarget:0}),nl=gt(pd),hd=U({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=gt(hd),md=U({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=gt(md),xd=U({},Xn,{data:0}),la=gt(xd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function rl(){return bd}var kd=U({},Mr,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=gt(kd),jd=U({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oa=gt(jd),Sd=U({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Cd=gt(Sd),_d=U({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=gt(_d),Td=U({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=gt(Td),Rd=[9,13,27,32],il=y&&"CompositionEvent"in window,Vr=null;y&&"documentMode"in document&&(Vr=document.documentMode);var zd=y&&"TextEvent"in window&&!Vr,aa=y&&(!il||Vr&&8<Vr&&11>=Vr),ca=" ",ua=!1;function da(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Id(e,t){switch(e){case"compositionend":return pa(t);case"keypress":return t.which!==32?null:(ua=!0,ca);case"textInput":return e=t.data,e===ca&&ua?null:e;default:return null}}function Pd(e,t){if(Zn)return e==="compositionend"||!il&&da(e,t)?(e=ra(),Ui=Zs=cn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return aa&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function fa(e,t,n,i){Ci(i),t=Yi(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Dr=null,Ur=null;function Ld(e){za(e,0)}function Hi(e){var t=rr(e);if(fi(t))return e}function Md(e,t){if(e==="change")return t}var ma=!1;if(y){var sl;if(y){var ll="oninput"in document;if(!ll){var ga=document.createElement("div");ga.setAttribute("oninput","return;"),ll=typeof ga.oninput=="function"}sl=ll}else sl=!1;ma=sl&&(!document.documentMode||9<document.documentMode)}function xa(){Dr&&(Dr.detachEvent("onpropertychange",va),Ur=Dr=null)}function va(e){if(e.propertyName==="value"&&Hi(Ur)){var t=[];fa(t,Ur,e,Cr(e)),Ai(Ld,t)}}function Fd(e,t,n){e==="focusin"?(xa(),Dr=t,Ur=n,Dr.attachEvent("onpropertychange",va)):e==="focusout"&&xa()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Ur)}function Dd(e,t){if(e==="click")return Hi(t)}function Ud(e,t){if(e==="input"||e==="change")return Hi(t)}function $d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:$d;function $r(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!g.call(t,l)||!Tt(e[l],t[l]))return!1}return!0}function wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ya(e,t){var n=wa(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wa(n)}}function ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ka(){for(var e=window,t=Kn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kn(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=ka(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ba(n.ownerDocument.documentElement,n)){if(i!==null&&ol(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(i.start,l);i=i.end===void 0?o:Math.min(i.end,l),!e.extend&&o>i&&(l=i,i=o,o=l),l=ya(n,o);var c=ya(n,i);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=y&&"documentMode"in document&&11>=document.documentMode,Jn=null,al=null,Wr=null,cl=!1;function Na(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||Jn==null||Jn!==Kn(i)||(i=Jn,"selectionStart"in i&&ol(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wr&&$r(Wr,i)||(Wr=i,i=Yi(al,"onSelect"),0<i.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Jn)))}function Gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},ul={},ja={};y&&(ja=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function qi(e){if(ul[e])return ul[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ja)return ul[e]=t[n];return e}var Sa=qi("animationend"),Ca=qi("animationiteration"),_a=qi("animationstart"),Ea=qi("transitionend"),Ta=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Ta.set(e,t),x(t,[e])}for(var dl=0;dl<Aa.length;dl++){var pl=Aa[dl],Hd=pl.toLowerCase(),Gd=pl[0].toUpperCase()+pl.slice(1);un(Hd,"on"+Gd)}un(Sa,"onAnimationEnd"),un(Ca,"onAnimationIteration"),un(_a,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(Ea,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Ra(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Hu(i,t,void 0,e),e.currentTarget=null}function za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var c=i.length-1;0<=c;c--){var d=i[c],h=d.instance,j=d.currentTarget;if(d=d.listener,h!==o&&l.isPropagationStopped())break e;Ra(l,d,j),o=h}else for(c=0;c<i.length;c++){if(d=i[c],h=d.instance,j=d.currentTarget,d=d.listener,h!==o&&l.isPropagationStopped())break e;Ra(l,d,j),o=h}}}if(me)throw e=Ie,me=!1,Ie=null,e}function je(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var i=e+"__bubble";n.has(i)||(Ia(t,e,2,!1),n.add(i))}function hl(e,t,n){var i=0;t&&(i|=4),Ia(n,e,i,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ki]){e[Ki]=!0,p.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,hl("selectionchange",!1,t))}}function Ia(e,t,n,i){switch(na(t)){case 1:var l=od;break;case 4:l=ad;break;default:l=Qs}n=l.bind(null,t,n,e),l=void 0,!Tr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function fl(e,t,n,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var d=i.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(c===4)for(c=i.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;c=c.return}for(;d!==null;){if(c=zn(d),c===null)return;if(h=c.tag,h===5||h===6){i=o=c;continue e}d=d.parentNode}}i=i.return}Ai(function(){var j=o,T=Cr(n),A=[];e:{var E=Ta.get(e);if(E!==void 0){var $=Js,B=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":$=Nd;break;case"focusin":B="focus",$=nl;break;case"focusout":B="blur",$=nl;break;case"beforeblur":case"afterblur":$=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Cd;break;case Sa:case Ca:case _a:$=fd;break;case Ea:$=Ed;break;case"scroll":$=cd;break;case"wheel":$=Ad;break;case"copy":case"cut":case"paste":$=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=oa}var H=(t&4)!==0,Me=!H&&e==="scroll",w=H?E!==null?E+"Capture":null:E;H=[];for(var m=j,b;m!==null;){b=m;var R=b.stateNode;if(b.tag===5&&R!==null&&(b=R,w!==null&&(R=An(m,w),R!=null&&H.push(Gr(m,R,b)))),Me)break;m=m.return}0<H.length&&(E=new $(E,B,null,n,T),A.push({event:E,listeners:H}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",E&&n!==Sr&&(B=n.relatedTarget||n.fromElement)&&(zn(B)||B[$t]))break e;if(($||E)&&(E=T.window===T?T:(E=T.ownerDocument)?E.defaultView||E.parentWindow:window,$?(B=n.relatedTarget||n.toElement,$=j,B=B?zn(B):null,B!==null&&(Me=Rn(B),B!==Me||B.tag!==5&&B.tag!==6)&&(B=null)):($=null,B=j),$!==B)){if(H=sa,R="onMouseLeave",w="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(H=oa,R="onPointerLeave",w="onPointerEnter",m="pointer"),Me=$==null?E:rr($),b=B==null?E:rr(B),E=new H(R,m+"leave",$,n,T),E.target=Me,E.relatedTarget=b,R=null,zn(T)===j&&(H=new H(w,m+"enter",B,n,T),H.target=b,H.relatedTarget=Me,R=H),Me=R,$&&B)t:{for(H=$,w=B,m=0,b=H;b;b=tr(b))m++;for(b=0,R=w;R;R=tr(R))b++;for(;0<m-b;)H=tr(H),m--;for(;0<b-m;)w=tr(w),b--;for(;m--;){if(H===w||w!==null&&H===w.alternate)break t;H=tr(H),w=tr(w)}H=null}else H=null;$!==null&&Pa(A,E,$,H,!1),B!==null&&Me!==null&&Pa(A,Me,B,H,!0)}}e:{if(E=j?rr(j):window,$=E.nodeName&&E.nodeName.toLowerCase(),$==="select"||$==="input"&&E.type==="file")var q=Md;else if(ha(E))if(ma)q=Ud;else{q=Vd;var Q=Fd}else($=E.nodeName)&&$.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(q=Dd);if(q&&(q=q(e,j))){fa(A,q,n,T);break e}Q&&Q(e,E,j),e==="focusout"&&(Q=E._wrapperState)&&Q.controlled&&E.type==="number"&&yr(E,"number",E.value)}switch(Q=j?rr(j):window,e){case"focusin":(ha(Q)||Q.contentEditable==="true")&&(Jn=Q,al=j,Wr=null);break;case"focusout":Wr=al=Jn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Na(A,n,T);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":Na(A,n,T)}var X;if(il)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Zn?da(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(aa&&n.locale!=="ko"&&(Zn||J!=="onCompositionStart"?J==="onCompositionEnd"&&Zn&&(X=ra()):(cn=T,Zs="value"in cn?cn.value:cn.textContent,Zn=!0)),Q=Yi(j,J),0<Q.length&&(J=new la(J,e,null,n,T),A.push({event:J,listeners:Q}),X?J.data=X:(X=pa(n),X!==null&&(J.data=X)))),(X=zd?Id(e,n):Pd(e,n))&&(j=Yi(j,"onBeforeInput"),0<j.length&&(T=new la("onBeforeInput","beforeinput",null,n,T),A.push({event:T,listeners:j}),T.data=X))}za(A,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=An(e,n),o!=null&&i.unshift(Gr(e,o,l)),o=An(e,t),o!=null&&i.push(Gr(e,o,l))),e=e.return}return i}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pa(e,t,n,i,l){for(var o=t._reactName,c=[];n!==null&&n!==i;){var d=n,h=d.alternate,j=d.stateNode;if(h!==null&&h===i)break;d.tag===5&&j!==null&&(d=j,l?(h=An(n,o),h!=null&&c.unshift(Gr(n,h,d))):l||(h=An(n,o),h!=null&&c.push(Gr(n,h,d)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Kd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Yd,"")}function Qi(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(u(425))}function Xi(){}var ml=null,gl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,La=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof La<"u"?function(e){return La.resolve(null).then(e).catch(Zd)}:vl;function Zd(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(i===0){e.removeChild(l),Lr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=l}while(n);Lr(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+nr,qr="__reactProps$"+nr,$t="__reactContainer$"+nr,yl="__reactEvents$"+nr,Jd="__reactListeners$"+nr,ep="__reactHandles$"+nr;function zn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Mt])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[Mt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Zi(e){return e[qr]||null}var bl=[],ir=-1;function pn(e){return{current:e}}function Se(e){0>ir||(e.current=bl[ir],bl[ir]=null,ir--)}function be(e,t){ir++,bl[ir]=e.current,e.current=t}var hn={},Je=pn(hn),ot=pn(!1),In=hn;function sr(e,t){var n=e.type.contextTypes;if(!n)return hn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function Ji(){Se(ot),Se(Je)}function Fa(e,t,n){if(Je.current!==hn)throw Error(u(168));be(Je,t),be(ot,n)}function Va(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var l in i)if(!(l in t))throw Error(u(108,xe(e)||"Unknown",l));return U({},n,i)}function es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,In=Je.current,be(Je,e),be(ot,ot.current),!0}function Da(e,t,n){var i=e.stateNode;if(!i)throw Error(u(169));n?(e=Va(e,t,In),i.__reactInternalMemoizedMergedChildContext=e,Se(ot),Se(Je),be(Je,e)):Se(ot),be(ot,n)}var Wt=null,ts=!1,kl=!1;function Ua(e){Wt===null?Wt=[e]:Wt.push(e)}function tp(e){ts=!0,Ua(e)}function fn(){if(!kl&&Wt!==null){kl=!0;var e=0,t=ge;try{var n=Wt;for(ge=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Wt=null,ts=!1}catch(l){throw Wt!==null&&(Wt=Wt.slice(e+1)),Wo(Bs,fn),l}finally{ge=t,kl=!1}}return null}var lr=[],or=0,ns=null,rs=0,kt=[],Nt=0,Pn=null,Bt=1,Ht="";function On(e,t){lr[or++]=rs,lr[or++]=ns,ns=e,rs=t}function $a(e,t,n){kt[Nt++]=Bt,kt[Nt++]=Ht,kt[Nt++]=Pn,Pn=e;var i=Bt;e=Ht;var l=32-Et(i)-1;i&=~(1<<l),n+=1;var o=32-Et(t)+l;if(30<o){var c=l-l%5;o=(i&(1<<c)-1).toString(32),i>>=c,l-=c,Bt=1<<32-Et(t)+l|n<<l|i,Ht=o+e}else Bt=1<<o|n<<l|i,Ht=e}function Nl(e){e.return!==null&&(On(e,1),$a(e,1,0))}function jl(e){for(;e===ns;)ns=lr[--or],lr[or]=null,rs=lr[--or],lr[or]=null;for(;e===Pn;)Pn=kt[--Nt],kt[Nt]=null,Ht=kt[--Nt],kt[Nt]=null,Bt=kt[--Nt],kt[Nt]=null}var xt=null,vt=null,Ee=!1,At=null;function Wa(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,vt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Bt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,vt=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(Ee){var t=vt;if(t){var n=t;if(!Ba(e,t)){if(Sl(e))throw Error(u(418));t=dn(n.nextSibling);var i=xt;t&&Ba(e,t)?Wa(i,n):(e.flags=e.flags&-4097|2,Ee=!1,xt=e)}}else{if(Sl(e))throw Error(u(418));e.flags=e.flags&-4097|2,Ee=!1,xt=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function is(e){if(e!==xt)return!1;if(!Ee)return Ha(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=vt)){if(Sl(e))throw Ga(),Error(u(418));for(;t;)Wa(e,t),t=dn(t.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=xt?dn(e.stateNode.nextSibling):null;return!0}function Ga(){for(var e=vt;e;)e=dn(e.nextSibling)}function ar(){vt=xt=null,Ee=!1}function _l(e){At===null?At=[e]:At.push(e)}var np=D.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var i=n.stateNode}if(!i)throw Error(u(147,e));var l=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(c){var d=l.refs;c===null?delete d[o]:d[o]=c},t._stringRef=o,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ss(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qa(e){var t=e._init;return t(e._payload)}function Ka(e){function t(w,m){if(e){var b=w.deletions;b===null?(w.deletions=[m],w.flags|=16):b.push(m)}}function n(w,m){if(!e)return null;for(;m!==null;)t(w,m),m=m.sibling;return null}function i(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function l(w,m){return w=kn(w,m),w.index=0,w.sibling=null,w}function o(w,m,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<m?(w.flags|=2,m):b):(w.flags|=2,m)):(w.flags|=1048576,m)}function c(w){return e&&w.alternate===null&&(w.flags|=2),w}function d(w,m,b,R){return m===null||m.tag!==6?(m=wo(b,w.mode,R),m.return=w,m):(m=l(m,b),m.return=w,m)}function h(w,m,b,R){var q=b.type;return q===oe?T(w,m,b.props.children,R,b.key):m!==null&&(m.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===we&&qa(q)===m.type)?(R=l(m,b.props),R.ref=Yr(w,m,b),R.return=w,R):(R=Ts(b.type,b.key,b.props,null,w.mode,R),R.ref=Yr(w,m,b),R.return=w,R)}function j(w,m,b,R){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=yo(b,w.mode,R),m.return=w,m):(m=l(m,b.children||[]),m.return=w,m)}function T(w,m,b,R,q){return m===null||m.tag!==7?(m=Wn(b,w.mode,R,q),m.return=w,m):(m=l(m,b),m.return=w,m)}function A(w,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wo(""+m,w.mode,b),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case le:return b=Ts(m.type,m.key,m.props,null,w.mode,b),b.ref=Yr(w,null,m),b.return=w,b;case ee:return m=yo(m,w.mode,b),m.return=w,m;case we:var R=m._init;return A(w,R(m._payload),b)}if(_n(m)||Y(m))return m=Wn(m,w.mode,b,null),m.return=w,m;ss(w,m)}return null}function E(w,m,b,R){var q=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return q!==null?null:d(w,m,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case le:return b.key===q?h(w,m,b,R):null;case ee:return b.key===q?j(w,m,b,R):null;case we:return q=b._init,E(w,m,q(b._payload),R)}if(_n(b)||Y(b))return q!==null?null:T(w,m,b,R,null);ss(w,b)}return null}function $(w,m,b,R,q){if(typeof R=="string"&&R!==""||typeof R=="number")return w=w.get(b)||null,d(m,w,""+R,q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case le:return w=w.get(R.key===null?b:R.key)||null,h(m,w,R,q);case ee:return w=w.get(R.key===null?b:R.key)||null,j(m,w,R,q);case we:var Q=R._init;return $(w,m,b,Q(R._payload),q)}if(_n(R)||Y(R))return w=w.get(b)||null,T(m,w,R,q,null);ss(m,R)}return null}function B(w,m,b,R){for(var q=null,Q=null,X=m,J=m=0,He=null;X!==null&&J<b.length;J++){X.index>J?(He=X,X=null):He=X.sibling;var pe=E(w,X,b[J],R);if(pe===null){X===null&&(X=He);break}e&&X&&pe.alternate===null&&t(w,X),m=o(pe,m,J),Q===null?q=pe:Q.sibling=pe,Q=pe,X=He}if(J===b.length)return n(w,X),Ee&&On(w,J),q;if(X===null){for(;J<b.length;J++)X=A(w,b[J],R),X!==null&&(m=o(X,m,J),Q===null?q=X:Q.sibling=X,Q=X);return Ee&&On(w,J),q}for(X=i(w,X);J<b.length;J++)He=$(X,w,J,b[J],R),He!==null&&(e&&He.alternate!==null&&X.delete(He.key===null?J:He.key),m=o(He,m,J),Q===null?q=He:Q.sibling=He,Q=He);return e&&X.forEach(function(Nn){return t(w,Nn)}),Ee&&On(w,J),q}function H(w,m,b,R){var q=Y(b);if(typeof q!="function")throw Error(u(150));if(b=q.call(b),b==null)throw Error(u(151));for(var Q=q=null,X=m,J=m=0,He=null,pe=b.next();X!==null&&!pe.done;J++,pe=b.next()){X.index>J?(He=X,X=null):He=X.sibling;var Nn=E(w,X,pe.value,R);if(Nn===null){X===null&&(X=He);break}e&&X&&Nn.alternate===null&&t(w,X),m=o(Nn,m,J),Q===null?q=Nn:Q.sibling=Nn,Q=Nn,X=He}if(pe.done)return n(w,X),Ee&&On(w,J),q;if(X===null){for(;!pe.done;J++,pe=b.next())pe=A(w,pe.value,R),pe!==null&&(m=o(pe,m,J),Q===null?q=pe:Q.sibling=pe,Q=pe);return Ee&&On(w,J),q}for(X=i(w,X);!pe.done;J++,pe=b.next())pe=$(X,w,J,pe.value,R),pe!==null&&(e&&pe.alternate!==null&&X.delete(pe.key===null?J:pe.key),m=o(pe,m,J),Q===null?q=pe:Q.sibling=pe,Q=pe);return e&&X.forEach(function(Op){return t(w,Op)}),Ee&&On(w,J),q}function Me(w,m,b,R){if(typeof b=="object"&&b!==null&&b.type===oe&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case le:e:{for(var q=b.key,Q=m;Q!==null;){if(Q.key===q){if(q=b.type,q===oe){if(Q.tag===7){n(w,Q.sibling),m=l(Q,b.props.children),m.return=w,w=m;break e}}else if(Q.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===we&&qa(q)===Q.type){n(w,Q.sibling),m=l(Q,b.props),m.ref=Yr(w,Q,b),m.return=w,w=m;break e}n(w,Q);break}else t(w,Q);Q=Q.sibling}b.type===oe?(m=Wn(b.props.children,w.mode,R,b.key),m.return=w,w=m):(R=Ts(b.type,b.key,b.props,null,w.mode,R),R.ref=Yr(w,m,b),R.return=w,w=R)}return c(w);case ee:e:{for(Q=b.key;m!==null;){if(m.key===Q)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(w,m.sibling),m=l(m,b.children||[]),m.return=w,w=m;break e}else{n(w,m);break}else t(w,m);m=m.sibling}m=yo(b,w.mode,R),m.return=w,w=m}return c(w);case we:return Q=b._init,Me(w,m,Q(b._payload),R)}if(_n(b))return B(w,m,b,R);if(Y(b))return H(w,m,b,R);ss(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(w,m.sibling),m=l(m,b),m.return=w,w=m):(n(w,m),m=wo(b,w.mode,R),m.return=w,w=m),c(w)):n(w,m)}return Me}var cr=Ka(!0),Ya=Ka(!1),ls=pn(null),os=null,ur=null,El=null;function Tl(){El=ur=os=null}function Al(e){var t=ls.current;Se(ls),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){os=e,El=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ct=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(os===null)throw Error(u(308));ur=e,os.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Ln=null;function zl(e){Ln===null?Ln=[e]:Ln.push(e)}function Qa(e,t,n,i){var l=t.interleaved;return l===null?(n.next=n,zl(t)):(n.next=l.next,l.next=n),t.interleaved=n,Gt(e,i)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,Gt(e,n)}return l=i.interleaved,l===null?(t.next=t,zl(i)):(t.next=l.next,l.next=t),i.interleaved=t,Gt(e,n)}function as(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qs(e,n)}}function Za(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cs(e,t,n,i){var l=e.updateQueue;mn=!1;var o=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var h=d,j=h.next;h.next=null,c===null?o=j:c.next=j,c=h;var T=e.alternate;T!==null&&(T=T.updateQueue,d=T.lastBaseUpdate,d!==c&&(d===null?T.firstBaseUpdate=j:d.next=j,T.lastBaseUpdate=h))}if(o!==null){var A=l.baseState;c=0,T=j=h=null,d=o;do{var E=d.lane,$=d.eventTime;if((i&E)===E){T!==null&&(T=T.next={eventTime:$,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var B=e,H=d;switch(E=t,$=n,H.tag){case 1:if(B=H.payload,typeof B=="function"){A=B.call($,A,E);break e}A=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=H.payload,E=typeof B=="function"?B.call($,A,E):B,E==null)break e;A=U({},A,E);break e;case 2:mn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,E=l.effects,E===null?l.effects=[d]:E.push(d))}else $={eventTime:$,lane:E,tag:d.tag,payload:d.payload,callback:d.callback,next:null},T===null?(j=T=$,h=A):T=T.next=$,c|=E;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;E=d,d=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);if(T===null&&(h=A),l.baseState=h,l.firstBaseUpdate=j,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Vn|=c,e.lanes=c,e.memoizedState=A}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],l=i.callback;if(l!==null){if(i.callback=null,i=n,typeof l!="function")throw Error(u(191,l));l.call(i)}}}var Qr={},Ft=pn(Qr),Xr=pn(Qr),Zr=pn(Qr);function Mn(e){if(e===Qr)throw Error(u(174));return e}function Pl(e,t){switch(be(Zr,t),be(Xr,e),be(Ft,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kr(t,e)}Se(Ft),be(Ft,t)}function pr(){Se(Ft),Se(Xr),Se(Zr)}function ec(e){Mn(Zr.current);var t=Mn(Ft.current),n=kr(t,e.type);t!==n&&(be(Xr,e),be(Ft,n))}function Ol(e){Xr.current===e&&(Se(Ft),Se(Xr))}var Re=pn(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function Ml(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var ds=D.ReactCurrentDispatcher,Fl=D.ReactCurrentBatchConfig,Fn=0,ze=null,De=null,We=null,ps=!1,Jr=!1,ei=0,rp=0;function et(){throw Error(u(321))}function Vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Dl(e,t,n,i,l,o){if(Fn=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?op:ap,e=n(i,l),Jr){o=0;do{if(Jr=!1,ei=0,25<=o)throw Error(u(301));o+=1,We=De=null,t.updateQueue=null,ds.current=cp,e=n(i,l)}while(Jr)}if(ds.current=ms,t=De!==null&&De.next!==null,Fn=0,We=De=ze=null,ps=!1,t)throw Error(u(300));return e}function Ul(){var e=ei!==0;return ei=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ze.memoizedState=We=e:We=We.next=e,We}function St(){if(De===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=We===null?ze.memoizedState:We.next;if(t!==null)We=t,De=e;else{if(e===null)throw Error(u(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},We===null?ze.memoizedState=We=e:We=We.next=e}return We}function ti(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=St(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=De,l=i.baseQueue,o=n.pending;if(o!==null){if(l!==null){var c=l.next;l.next=o.next,o.next=c}i.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,i=i.baseState;var d=c=null,h=null,j=o;do{var T=j.lane;if((Fn&T)===T)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),i=j.hasEagerState?j.eagerState:e(i,j.action);else{var A={lane:T,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(d=h=A,c=i):h=h.next=A,ze.lanes|=T,Vn|=T}j=j.next}while(j!==null&&j!==o);h===null?c=i:h.next=d,Tt(i,t.memoizedState)||(ct=!0),t.memoizedState=i,t.baseState=c,t.baseQueue=h,n.lastRenderedState=i}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ze.lanes|=o,Vn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=St(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do o=e(o,c.action),c=c.next;while(c!==l);Tt(o,t.memoizedState)||(ct=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function tc(){}function nc(e,t){var n=ze,i=St(),l=t(),o=!Tt(i.memoizedState,l);if(o&&(i.memoizedState=l,ct=!0),i=i.queue,Bl(sc.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ni(9,ic.bind(null,n,i,l,t),void 0,null),Be===null)throw Error(u(349));(Fn&30)!==0||rc(n,t,l)}return l}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,i){t.value=n,t.getSnapshot=i,lc(t)&&oc(e)}function sc(e,t,n){return n(function(){lc(t)&&oc(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function oc(e){var t=Gt(e,1);t!==null&&Pt(t,e,1,-1)}function ac(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=lp.bind(null,ze,e),[t.memoizedState,e]}function ni(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function cc(){return St().memoizedState}function hs(e,t,n,i){var l=Vt();ze.flags|=e,l.memoizedState=ni(1|t,n,void 0,i===void 0?null:i)}function fs(e,t,n,i){var l=St();i=i===void 0?null:i;var o=void 0;if(De!==null){var c=De.memoizedState;if(o=c.destroy,i!==null&&Vl(i,c.deps)){l.memoizedState=ni(t,n,o,i);return}}ze.flags|=e,l.memoizedState=ni(1|t,n,o,i)}function uc(e,t){return hs(8390656,8,e,t)}function Bl(e,t){return fs(2048,8,e,t)}function dc(e,t){return fs(4,2,e,t)}function pc(e,t){return fs(4,4,e,t)}function hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fc(e,t,n){return n=n!=null?n.concat([e]):null,fs(4,4,hc.bind(null,t,e),n)}function Hl(){}function mc(e,t){var n=St();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Vl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function gc(e,t){var n=St();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Vl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function xc(e,t,n){return(Fn&21)===0?(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n):(Tt(n,t)||(n=qo(),ze.lanes|=n,Vn|=n,e.baseState=!0),t)}function ip(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var i=Fl.transition;Fl.transition={};try{e(!1),t()}finally{ge=n,Fl.transition=i}}function vc(){return St().memoizedState}function sp(e,t,n){var i=yn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wc(e))yc(t,n);else if(n=Qa(e,t,n,i),n!==null){var l=st();Pt(n,e,i,l),bc(n,t,i)}}function lp(e,t,n){var i=yn(e),l={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wc(e))yc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,d=o(c,n);if(l.hasEagerState=!0,l.eagerState=d,Tt(d,c)){var h=t.interleaved;h===null?(l.next=l,zl(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=Qa(e,t,l,i),n!==null&&(l=st(),Pt(n,e,i,l),bc(n,t,i))}}function wc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function yc(e,t){Jr=ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qs(e,n)}}var ms={readContext:jt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},op={readContext:jt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hs(4194308,4,hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return hs(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Vt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=sp.bind(null,ze,e),[i.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:ac,useDebugValue:Hl,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=ac(!1),t=e[0];return e=ip.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ze,l=Vt();if(Ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Be===null)throw Error(u(349));(Fn&30)!==0||rc(i,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,uc(sc.bind(null,i,o,e),[e]),i.flags|=2048,ni(9,ic.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Be.identifierPrefix;if(Ee){var n=Ht,i=Bt;n=(i&~(1<<32-Et(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ap={readContext:jt,useCallback:mc,useContext:jt,useEffect:Bl,useImperativeHandle:fc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:gc,useReducer:$l,useRef:cc,useState:function(){return $l(ti)},useDebugValue:Hl,useDeferredValue:function(e){var t=St();return xc(t,De.memoizedState,e)},useTransition:function(){var e=$l(ti)[0],t=St().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:vc,unstable_isNewReconciler:!1},cp={readContext:jt,useCallback:mc,useContext:jt,useEffect:Bl,useImperativeHandle:fc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:gc,useReducer:Wl,useRef:cc,useState:function(){return Wl(ti)},useDebugValue:Hl,useDeferredValue:function(e){var t=St();return De===null?t.memoizedState=e:xc(t,De.memoizedState,e)},useTransition:function(){var e=Wl(ti)[0],t=St().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:vc,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=st(),l=yn(e),o=qt(i,l);o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,l),t!==null&&(Pt(t,e,l,i),as(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=st(),l=yn(e),o=qt(i,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,l),t!==null&&(Pt(t,e,l,i),as(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),i=yn(e),l=qt(n,i);l.tag=2,t!=null&&(l.callback=t),t=gn(e,l,i),t!==null&&(Pt(t,e,i,n),as(t,e,i))}};function kc(e,t,n,i,l,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,c):t.prototype&&t.prototype.isPureReactComponent?!$r(n,i)||!$r(l,o):!0}function Nc(e,t,n){var i=!1,l=hn,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(l=at(t)?In:Je.current,i=t.contextTypes,o=(i=i!=null)?sr(e,l):hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function jc(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function ql(e,t,n,i){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Il(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=jt(o):(o=at(t)?In:Je.current,l.context=sr(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Gl(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&gs.enqueueReplaceState(l,l.state,null),cs(e,n,l,i),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",i=t;do n+=ae(i),i=i.return;while(i);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Sc(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ns||(Ns=!0,uo=i),Yl(e,t)},n}function Cc(e,t,n){n=qt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){Yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof i!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function _c(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new up;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(l.add(n),e=jp.bind(null,e,t,n),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tc(e,t,n,i,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var dp=D.ReactCurrentOwner,ct=!1;function it(e,t,n,i){t.child=e===null?Ya(t,null,n,i):cr(t,e.child,n,i)}function Ac(e,t,n,i,l){n=n.render;var o=t.ref;return dr(t,l),i=Dl(e,t,n,i,o,l),n=Ul(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Kt(e,t,l)):(Ee&&n&&Nl(t),t.flags|=1,it(e,t,i,l),t.child)}function Rc(e,t,n,i,l){if(e===null){var o=n.type;return typeof o=="function"&&!vo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zc(e,t,o,i,l)):(e=Ts(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(c,i)&&e.ref===t.ref)return Kt(e,t,l)}return t.flags|=1,e=kn(o,i),e.ref=t.ref,e.return=t,t.child=e}function zc(e,t,n,i,l){if(e!==null){var o=e.memoizedProps;if($r(o,i)&&e.ref===t.ref)if(ct=!1,t.pendingProps=i=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,Kt(e,t,l)}return Ql(e,t,n,i,l)}function Ic(e,t,n){var i=t.pendingProps,l=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(mr,wt),wt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(mr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,be(mr,wt),wt|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,be(mr,wt),wt|=i;return it(e,t,l,n),t.child}function Pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,i,l){var o=at(n)?In:Je.current;return o=sr(t,o),dr(t,l),n=Dl(e,t,n,i,o,l),i=Ul(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Kt(e,t,l)):(Ee&&i&&Nl(t),t.flags|=1,it(e,t,n,l),t.child)}function Oc(e,t,n,i,l){if(at(n)){var o=!0;es(t)}else o=!1;if(dr(t,l),t.stateNode===null)vs(e,t),Nc(t,n,i),ql(t,n,i,l),i=!0;else if(e===null){var c=t.stateNode,d=t.memoizedProps;c.props=d;var h=c.context,j=n.contextType;typeof j=="object"&&j!==null?j=jt(j):(j=at(n)?In:Je.current,j=sr(t,j));var T=n.getDerivedStateFromProps,A=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function";A||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==i||h!==j)&&jc(t,c,i,j),mn=!1;var E=t.memoizedState;c.state=E,cs(t,i,c,l),h=t.memoizedState,d!==i||E!==h||ot.current||mn?(typeof T=="function"&&(Gl(t,n,T,i),h=t.memoizedState),(d=mn||kc(t,n,d,i,E,h,j))?(A||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),c.props=i,c.state=h,c.context=j,i=d):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Xa(e,t),d=t.memoizedProps,j=t.type===t.elementType?d:Rt(t.type,d),c.props=j,A=t.pendingProps,E=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=jt(h):(h=at(n)?In:Je.current,h=sr(t,h));var $=n.getDerivedStateFromProps;(T=typeof $=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==A||E!==h)&&jc(t,c,i,h),mn=!1,E=t.memoizedState,c.state=E,cs(t,i,c,l);var B=t.memoizedState;d!==A||E!==B||ot.current||mn?(typeof $=="function"&&(Gl(t,n,$,i),B=t.memoizedState),(j=mn||kc(t,n,j,i,E,B,h)||!1)?(T||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,B,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,B,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=B),c.props=i,c.state=B,c.context=h,i=j):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),i=!1)}return Xl(e,t,n,i,o,l)}function Xl(e,t,n,i,l,o){Pc(e,t);var c=(t.flags&128)!==0;if(!i&&!c)return l&&Da(t,n,!1),Kt(e,t,o);i=t.stateNode,dp.current=t;var d=c&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&c?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,d,o)):it(e,t,d,o),t.memoizedState=i.state,l&&Da(t,n,!0),t.child}function Lc(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),Pl(e,t.containerInfo)}function Mc(e,t,n,i,l){return ar(),_l(l),t.flags|=256,it(e,t,n,i),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,n){var i=t.pendingProps,l=Re.current,o=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(l&2)!==0),d?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),be(Re,l&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=i.children,e=i.fallback,o?(i=t.mode,o=t.child,c={mode:"hidden",children:c},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=c):o=As(c,i,0,null),e=Wn(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jl(n),t.memoizedState=Zl,e):eo(t,c));if(l=e.memoizedState,l!==null&&(d=l.dehydrated,d!==null))return pp(e,t,c,i,d,l,n);if(o){o=i.fallback,c=t.mode,l=e.child,d=l.sibling;var h={mode:"hidden",children:i.children};return(c&1)===0&&t.child!==l?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=kn(l,h),i.subtreeFlags=l.subtreeFlags&14680064),d!==null?o=kn(d,o):(o=Wn(o,c,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,c=e.child.memoizedState,c=c===null?Jl(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,t.memoizedState=Zl,i}return o=e.child,e=o.sibling,i=kn(o,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function eo(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,i){return i!==null&&_l(i),cr(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,n,i,l,o,c){if(n)return t.flags&256?(t.flags&=-257,i=Kl(Error(u(422))),xs(e,t,c,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,l=t.mode,i=As({mode:"visible",children:i.children},l,0,null),o=Wn(o,l,c,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,(t.mode&1)!==0&&cr(t,e.child,null,c),t.child.memoizedState=Jl(c),t.memoizedState=Zl,o);if((t.mode&1)===0)return xs(e,t,c,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var d=i.dgst;return i=d,o=Error(u(419)),i=Kl(o,i,void 0),xs(e,t,c,i)}if(d=(c&e.childLanes)!==0,ct||d){if(i=Be,i!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|c))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Gt(e,l),Pt(i,e,l,-1))}return xo(),i=Kl(Error(u(421))),xs(e,t,c,i)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,vt=dn(l.nextSibling),xt=t,Ee=!0,At=null,e!==null&&(kt[Nt++]=Bt,kt[Nt++]=Ht,kt[Nt++]=Pn,Bt=e.id,Ht=e.overflow,Pn=t),t=eo(t,i.children),t.flags|=4096,t)}function Vc(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Rl(e.return,t,n)}function to(e,t,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=l)}function Dc(e,t,n){var i=t.pendingProps,l=i.revealOrder,o=i.tail;if(it(e,t,i.children,n),i=Re.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vc(e,n,t);else if(e.tag===19)Vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(be(Re,i),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&us(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&us(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hp(e,t,n){switch(t.tag){case 3:Lc(t),ar();break;case 5:ec(t);break;case 1:at(t.type)&&es(t);break;case 4:Pl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,l=t.memoizedProps.value;be(ls,i._currentValue),i._currentValue=l;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(be(Re,Re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Fc(e,t,n):(be(Re,Re.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);be(Re,Re.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Dc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),be(Re,Re.current),i)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return Kt(e,t,n)}var Uc,no,$c,Wc;Uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},no=function(){},$c=function(e,t,n,i){var l=e.memoizedProps;if(l!==i){e=t.stateNode,Mn(Ft.current);var o=null;switch(n){case"input":l=Cn(e,l),i=Cn(e,i),o=[];break;case"select":l=U({},l,{value:void 0}),i=U({},i,{value:void 0}),o=[];break;case"textarea":l=br(e,l),i=br(e,i),o=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Xi)}Nr(n,i);var c;n=null;for(j in l)if(!i.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var d=l[j];for(c in d)d.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(k.hasOwnProperty(j)?o||(o=[]):(o=o||[]).push(j,null));for(j in i){var h=i[j];if(d=l!=null?l[j]:void 0,i.hasOwnProperty(j)&&h!==d&&(h!=null||d!=null))if(j==="style")if(d){for(c in d)!d.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&d[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(o||(o=[]),o.push(j,n)),n=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,d=d?d.__html:void 0,h!=null&&d!==h&&(o=o||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(k.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&je("scroll",e),o||d===h||(o=[])):(o=o||[]).push(j,h))}n&&(o=o||[]).push("style",n);var j=o;(t.updateQueue=j)&&(t.flags|=4)}},Wc=function(e,t,n,i){n!==i&&(t.flags|=4)};function ri(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function fp(e,t,n){var i=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return at(t.type)&&Ji(),tt(t),null;case 3:return i=t.stateNode,pr(),Se(ot),Se(Je),Ml(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(fo(At),At=null))),no(e,t),tt(t),null;case 5:Ol(t);var l=Mn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)$c(e,t,n,i,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(u(166));return tt(t),null}if(e=Mn(Ft.current),is(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[Mt]=t,i[qr]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(l=0;l<Br.length;l++)je(Br[l],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":mi(i,o),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},je("invalid",i);break;case"textarea":vi(i,o),je("invalid",i)}Nr(n,o),l=null;for(var c in o)if(o.hasOwnProperty(c)){var d=o[c];c==="children"?typeof d=="string"?i.textContent!==d&&(o.suppressHydrationWarning!==!0&&Qi(i.textContent,d,e),l=["children",d]):typeof d=="number"&&i.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Qi(i.textContent,d,e),l=["children",""+d]):k.hasOwnProperty(c)&&d!=null&&c==="onScroll"&&je("scroll",i)}switch(n){case"input":qn(i),xi(i,o,!0);break;case"textarea":qn(i),yi(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Xi)}i=l,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n==="select"&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Mt]=t,e[qr]=i,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(c=jr(n,i),n){case"dialog":je("cancel",e),je("close",e),l=i;break;case"iframe":case"object":case"embed":je("load",e),l=i;break;case"video":case"audio":for(l=0;l<Br.length;l++)je(Br[l],e);l=i;break;case"source":je("error",e),l=i;break;case"img":case"image":case"link":je("error",e),je("load",e),l=i;break;case"details":je("toggle",e),l=i;break;case"input":mi(e,i),l=Cn(e,i),je("invalid",e);break;case"option":l=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},l=U({},i,{value:void 0}),je("invalid",e);break;case"textarea":vi(e,i),l=br(e,i),je("invalid",e);break;default:l=i}Nr(n,l),d=l;for(o in d)if(d.hasOwnProperty(o)){var h=d[o];o==="style"?ji(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ki(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&En(e,h):typeof h=="number"&&En(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(k.hasOwnProperty(o)?h!=null&&o==="onScroll"&&je("scroll",e):h!=null&&Te(e,o,h,c))}switch(n){case"input":qn(e),xi(e,i,!1);break;case"textarea":qn(e),yi(e);break;case"option":i.value!=null&&e.setAttribute("value",""+fe(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?tn(e,!!i.multiple,o,!1):i.defaultValue!=null&&tn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Xi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Wc(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(n=Mn(Zr.current),Mn(Ft.current),is(t)){if(i=t.stateNode,n=t.memoizedProps,i[Mt]=t,(o=i.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Qi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mt]=t,t.stateNode=i}return tt(t),null;case 13:if(Se(Re),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ga(),ar(),t.flags|=98560,o=!1;else if(o=is(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Mt]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else At!==null&&(fo(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?Ue===0&&(Ue=3):xo())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return pr(),no(e,t),e===null&&Hr(t.stateNode.containerInfo),tt(t),null;case 10:return Al(t.type._context),tt(t),null;case 17:return at(t.type)&&Ji(),tt(t),null;case 19:if(Se(Re),o=t.memoizedState,o===null)return tt(t),null;if(i=(t.flags&128)!==0,c=o.rendering,c===null)if(i)ri(o,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=us(e),c!==null){for(t.flags|=128,ri(o,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Re,Re.current&1|2),t.child}e=e.sibling}o.tail!==null&&Le()>gr&&(t.flags|=128,i=!0,ri(o,!1),t.lanes=4194304)}else{if(!i)if(e=us(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Ee)return tt(t),null}else 2*Le()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,i=!0,ri(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(n=o.last,n!==null?n.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,n=Re.current,be(Re,i?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return go(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(wt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function mp(e,t){switch(jl(t),t.tag){case 1:return at(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Se(ot),Se(Je),Ml(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(Se(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Re),null;case 4:return pr(),null;case 10:return Al(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var ws=!1,nt=!1,gp=typeof WeakSet=="function"?WeakSet:Set,W=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pe(e,t,i)}else n.current=null}function ro(e,t,n){try{n()}catch(i){Pe(e,t,i)}}var Bc=!1;function xp(e,t){if(ml=Vi,e=ka(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,d=-1,h=-1,j=0,T=0,A=e,E=null;t:for(;;){for(var $;A!==n||l!==0&&A.nodeType!==3||(d=c+l),A!==o||i!==0&&A.nodeType!==3||(h=c+i),A.nodeType===3&&(c+=A.nodeValue.length),($=A.firstChild)!==null;)E=A,A=$;for(;;){if(A===e)break t;if(E===n&&++j===l&&(d=c),E===o&&++T===i&&(h=c),($=A.nextSibling)!==null)break;A=E,E=A.parentNode}A=$}n=d===-1||h===-1?null:{start:d,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(gl={focusedElem:e,selectionRange:n},Vi=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var H=B.memoizedProps,Me=B.memoizedState,w=t.stateNode,m=w.getSnapshotBeforeUpdate(t.elementType===t.type?H:Rt(t.type,H),Me);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(R){Pe(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return B=Bc,Bc=!1,B}function ii(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ro(t,n,o)}l=l.next}while(l!==i)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[qr],delete t[yl],delete t[Jd],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gc(e){return e.tag===5||e.tag===3||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function so(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(i!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}function lo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var qe=null,zt=!1;function xn(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:nt||fr(n,t);case 6:var i=qe,l=zt;qe=null,xn(e,t,n),qe=i,zt=l,qe!==null&&(zt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(zt?(e=qe,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Lr(e)):wl(qe,n.stateNode));break;case 4:i=qe,l=zt,qe=n.stateNode.containerInfo,zt=!0,xn(e,t,n),qe=i,zt=l;break;case 0:case 11:case 14:case 15:if(!nt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var o=l,c=o.destroy;o=o.tag,c!==void 0&&((o&2)!==0||(o&4)!==0)&&ro(n,t,c),l=l.next}while(l!==i)}xn(e,t,n);break;case 1:if(!nt&&(fr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(d){Pe(n,t,d)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(nt=(i=nt)||n.memoizedState!==null,xn(e,t,n),nt=i):xn(e,t,n);break;default:xn(e,t,n)}}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(i){var l=Cp.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];try{var o=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 5:qe=d.stateNode,zt=!1;break e;case 3:qe=d.stateNode.containerInfo,zt=!0;break e;case 4:qe=d.stateNode.containerInfo,zt=!0;break e}d=d.return}if(qe===null)throw Error(u(160));Kc(o,c,l),qe=null,zt=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(j){Pe(l,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Dt(e),i&4){try{ii(3,e,e.return),ys(3,e)}catch(H){Pe(e,e.return,H)}try{ii(5,e,e.return)}catch(H){Pe(e,e.return,H)}}break;case 1:It(t,e),Dt(e),i&512&&n!==null&&fr(n,n.return);break;case 5:if(It(t,e),Dt(e),i&512&&n!==null&&fr(n,n.return),e.flags&32){var l=e.stateNode;try{En(l,"")}catch(H){Pe(e,e.return,H)}}if(i&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,d=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&gi(l,o),jr(d,c);var j=jr(d,o);for(c=0;c<h.length;c+=2){var T=h[c],A=h[c+1];T==="style"?ji(l,A):T==="dangerouslySetInnerHTML"?ki(l,A):T==="children"?En(l,A):Te(l,T,A,j)}switch(d){case"input":wr(l,o);break;case"textarea":wi(l,o);break;case"select":var E=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var $=o.value;$!=null?tn(l,!!o.multiple,$,!1):E!==!!o.multiple&&(o.defaultValue!=null?tn(l,!!o.multiple,o.defaultValue,!0):tn(l,!!o.multiple,o.multiple?[]:"",!1))}l[qr]=o}catch(H){Pe(e,e.return,H)}}break;case 6:if(It(t,e),Dt(e),i&4){if(e.stateNode===null)throw Error(u(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(H){Pe(e,e.return,H)}}break;case 3:if(It(t,e),Dt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(H){Pe(e,e.return,H)}break;case 4:It(t,e),Dt(e);break;case 13:It(t,e),Dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(co=Le())),i&4&&Yc(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(j=nt)||T,It(t,e),nt=j):It(t,e),Dt(e),i&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!T&&(e.mode&1)!==0)for(W=e,T=e.child;T!==null;){for(A=W=T;W!==null;){switch(E=W,$=E.child,E.tag){case 0:case 11:case 14:case 15:ii(4,E,E.return);break;case 1:fr(E,E.return);var B=E.stateNode;if(typeof B.componentWillUnmount=="function"){i=E,n=E.return;try{t=i,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(H){Pe(i,n,H)}}break;case 5:fr(E,E.return);break;case 22:if(E.memoizedState!==null){Jc(A);continue}}$!==null?($.return=E,W=$):Jc(A)}T=T.sibling}e:for(T=null,A=e;;){if(A.tag===5){if(T===null){T=A;try{l=A.stateNode,j?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=A.stateNode,h=A.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,d.style.display=Ni("display",c))}catch(H){Pe(e,e.return,H)}}}else if(A.tag===6){if(T===null)try{A.stateNode.nodeValue=j?"":A.memoizedProps}catch(H){Pe(e,e.return,H)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;T===A&&(T=null),A=A.return}T===A&&(T=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:It(t,e),Dt(e),i&4&&Yc(e);break;case 21:break;default:It(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gc(n)){var i=n;break e}n=n.return}throw Error(u(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(En(l,""),i.flags&=-33);var o=qc(e);lo(e,o,l);break;case 3:case 4:var c=i.stateNode.containerInfo,d=qc(e);so(e,d,c);break;default:throw Error(u(161))}}catch(h){Pe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vp(e,t,n){W=e,Xc(e)}function Xc(e,t,n){for(var i=(e.mode&1)!==0;W!==null;){var l=W,o=l.child;if(l.tag===22&&i){var c=l.memoizedState!==null||ws;if(!c){var d=l.alternate,h=d!==null&&d.memoizedState!==null||nt;d=ws;var j=nt;if(ws=c,(nt=h)&&!j)for(W=l;W!==null;)c=W,h=c.child,c.tag===22&&c.memoizedState!==null?eu(l):h!==null?(h.return=c,W=h):eu(l);for(;o!==null;)W=o,Xc(o),o=o.sibling;W=l,ws=d,nt=j}Zc(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,W=o):Zc(e)}}function Zc(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||ys(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!nt)if(n===null)i.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);i.componentDidUpdate(l,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ja(t,o,i);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,c,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var T=j.memoizedState;if(T!==null){var A=T.dehydrated;A!==null&&Lr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}nt||t.flags&512&&io(t)}catch(E){Pe(t,t.return,E)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Jc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function eu(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(h){Pe(t,n,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var l=t.return;try{i.componentDidMount()}catch(h){Pe(t,l,h)}}var o=t.return;try{io(t)}catch(h){Pe(t,o,h)}break;case 5:var c=t.return;try{io(t)}catch(h){Pe(t,c,h)}}}catch(h){Pe(t,t.return,h)}if(t===e){W=null;break}var d=t.sibling;if(d!==null){d.return=t.return,W=d;break}W=t.return}}var wp=Math.ceil,bs=D.ReactCurrentDispatcher,oo=D.ReactCurrentOwner,Ct=D.ReactCurrentBatchConfig,de=0,Be=null,Fe=null,Ke=0,wt=0,mr=pn(0),Ue=0,si=null,Vn=0,ks=0,ao=0,li=null,ut=null,co=0,gr=1/0,Yt=null,Ns=!1,uo=null,vn=null,js=!1,wn=null,Ss=0,oi=0,po=null,Cs=-1,_s=0;function st(){return(de&6)!==0?Le():Cs!==-1?Cs:Cs=Le()}function yn(e){return(e.mode&1)===0?1:(de&2)!==0&&Ke!==0?Ke&-Ke:np.transition!==null?(_s===0&&(_s=qo()),_s):(e=ge,e!==0||(e=window.event,e=e===void 0?16:na(e.type)),e)}function Pt(e,t,n,i){if(50<oi)throw oi=0,po=null,Error(u(185));Rr(e,n,i),((de&2)===0||e!==Be)&&(e===Be&&((de&2)===0&&(ks|=n),Ue===4&&bn(e,Ke)),dt(e,i),n===1&&de===0&&(t.mode&1)===0&&(gr=Le()+500,ts&&fn()))}function dt(e,t){var n=e.callbackNode;nd(e,t);var i=Li(e,e===Be?Ke:0);if(i===0)n!==null&&Bo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Bo(n),t===1)e.tag===0?tp(nu.bind(null,e)):Ua(nu.bind(null,e)),Xd(function(){(de&6)===0&&fn()}),n=null;else{switch(Ko(i)){case 1:n=Bs;break;case 4:n=Ho;break;case 16:n=zi;break;case 536870912:n=Go;break;default:n=zi}n=uu(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(Cs=-1,_s=0,(de&6)!==0)throw Error(u(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var i=Li(e,e===Be?Ke:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Es(e,i);else{t=i;var l=de;de|=2;var o=iu();(Be!==e||Ke!==t)&&(Yt=null,gr=Le()+500,Un(e,t));do try{kp();break}catch(d){ru(e,d)}while(!0);Tl(),bs.current=o,de=l,Fe!==null?t=0:(Be=null,Ke=0,t=Ue)}if(t!==0){if(t===2&&(l=Hs(e),l!==0&&(i=l,t=ho(e,l))),t===1)throw n=si,Un(e,0),bn(e,i),dt(e,Le()),n;if(t===6)bn(e,i);else{if(l=e.current.alternate,(i&30)===0&&!yp(l)&&(t=Es(e,i),t===2&&(o=Hs(e),o!==0&&(i=o,t=ho(e,o))),t===1))throw n=si,Un(e,0),bn(e,i),dt(e,Le()),n;switch(e.finishedWork=l,e.finishedLanes=i,t){case 0:case 1:throw Error(u(345));case 2:$n(e,ut,Yt);break;case 3:if(bn(e,i),(i&130023424)===i&&(t=co+500-Le(),10<t)){if(Li(e,0)!==0)break;if(l=e.suspendedLanes,(l&i)!==i){st(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vl($n.bind(null,e,ut,Yt),t);break}$n(e,ut,Yt);break;case 4:if(bn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,l=-1;0<i;){var c=31-Et(i);o=1<<c,c=t[c],c>l&&(l=c),i&=~o}if(i=l,i=Le()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wp(i/1960))-i,10<i){e.timeoutHandle=vl($n.bind(null,e,ut,Yt),i);break}$n(e,ut,Yt);break;case 5:$n(e,ut,Yt);break;default:throw Error(u(329))}}}return dt(e,Le()),e.callbackNode===n?tu.bind(null,e):null}function ho(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Es(e,t),e!==2&&(t=ut,ut=n,t!==null&&fo(t)),e}function fo(e){ut===null?ut=e:ut.push.apply(ut,e)}function yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var l=n[i],o=l.getSnapshot;l=l.value;try{if(!Tt(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~ao,t&=~ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),i=1<<n;e[n]=-1,t&=~i}}function nu(e){if((de&6)!==0)throw Error(u(327));xr();var t=Li(e,0);if((t&1)===0)return dt(e,Le()),null;var n=Es(e,t);if(e.tag!==0&&n===2){var i=Hs(e);i!==0&&(t=i,n=ho(e,i))}if(n===1)throw n=si,Un(e,0),bn(e,t),dt(e,Le()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,ut,Yt),dt(e,Le()),null}function mo(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(gr=Le()+500,ts&&fn())}}function Dn(e){wn!==null&&wn.tag===0&&(de&6)===0&&xr();var t=de;de|=1;var n=Ct.transition,i=ge;try{if(Ct.transition=null,ge=1,e)return e()}finally{ge=i,Ct.transition=n,de=t,(de&6)===0&&fn()}}function go(){wt=mr.current,Se(mr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),Fe!==null)for(n=Fe.return;n!==null;){var i=n;switch(jl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ji();break;case 3:pr(),Se(ot),Se(Je),Ml();break;case 5:Ol(i);break;case 4:pr();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:Al(i.type._context);break;case 22:case 23:go()}n=n.return}if(Be=e,Fe=e=kn(e.current,null),Ke=wt=t,Ue=0,si=null,ao=ks=Vn=0,ut=li=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],i=n.interleaved,i!==null){n.interleaved=null;var l=i.next,o=n.pending;if(o!==null){var c=o.next;o.next=l,i.next=c}n.pending=i}Ln=null}return e}function ru(e,t){do{var n=Fe;try{if(Tl(),ds.current=ms,ps){for(var i=ze.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}ps=!1}if(Fn=0,We=De=ze=null,Jr=!1,ei=0,oo.current=null,n===null||n.return===null){Ue=1,si=t,Fe=null;break}e:{var o=e,c=n.return,d=n,h=t;if(t=Ke,d.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,T=d,A=T.tag;if((T.mode&1)===0&&(A===0||A===11||A===15)){var E=T.alternate;E?(T.updateQueue=E.updateQueue,T.memoizedState=E.memoizedState,T.lanes=E.lanes):(T.updateQueue=null,T.memoizedState=null)}var $=Ec(c);if($!==null){$.flags&=-257,Tc($,c,d,o,t),$.mode&1&&_c(o,j,t),t=$,h=j;var B=t.updateQueue;if(B===null){var H=new Set;H.add(h),t.updateQueue=H}else B.add(h);break e}else{if((t&1)===0){_c(o,j,t),xo();break e}h=Error(u(426))}}else if(Ee&&d.mode&1){var Me=Ec(c);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),Tc(Me,c,d,o,t),_l(hr(h,d));break e}}o=h=hr(h,d),Ue!==4&&(Ue=2),li===null?li=[o]:li.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=Sc(o,h,t);Za(o,w);break e;case 1:d=h;var m=o.type,b=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(vn===null||!vn.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var R=Cc(o,d,t);Za(o,R);break e}}o=o.return}while(o!==null)}lu(n)}catch(q){t=q,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function iu(){var e=bs.current;return bs.current=ms,e===null?ms:e}function xo(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Be===null||(Vn&268435455)===0&&(ks&268435455)===0||bn(Be,Ke)}function Es(e,t){var n=de;de|=2;var i=iu();(Be!==e||Ke!==t)&&(Yt=null,Un(e,t));do try{bp();break}catch(l){ru(e,l)}while(!0);if(Tl(),de=n,bs.current=i,Fe!==null)throw Error(u(261));return Be=null,Ke=0,Ue}function bp(){for(;Fe!==null;)su(Fe)}function kp(){for(;Fe!==null&&!qu();)su(Fe)}function su(e){var t=cu(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?lu(e):Fe=t,oo.current=null}function lu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fp(n,t,wt),n!==null){Fe=n;return}}else{if(n=mp(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ue===0&&(Ue=5)}function $n(e,t,n){var i=ge,l=Ct.transition;try{Ct.transition=null,ge=1,Np(e,t,n,i)}finally{Ct.transition=l,ge=i}return null}function Np(e,t,n,i){do xr();while(wn!==null);if((de&6)!==0)throw Error(u(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rd(e,o),e===Be&&(Fe=Be=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||js||(js=!0,uu(zi,function(){return xr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ct.transition,Ct.transition=null;var c=ge;ge=1;var d=de;de|=4,oo.current=null,xp(e,n),Qc(n,e),Wd(gl),Vi=!!ml,gl=ml=null,e.current=n,vp(n),Ku(),de=d,ge=c,Ct.transition=o}else e.current=n;if(js&&(js=!1,wn=e,Ss=l),o=e.pendingLanes,o===0&&(vn=null),Xu(n.stateNode),dt(e,Le()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],i(l.value,{componentStack:l.stack,digest:l.digest});if(Ns)throw Ns=!1,e=uo,uo=null,e;return(Ss&1)!==0&&e.tag!==0&&xr(),o=e.pendingLanes,(o&1)!==0?e===po?oi++:(oi=0,po=e):oi=0,fn(),null}function xr(){if(wn!==null){var e=Ko(Ss),t=Ct.transition,n=ge;try{if(Ct.transition=null,ge=16>e?16:e,wn===null)var i=!1;else{if(e=wn,wn=null,Ss=0,(de&6)!==0)throw Error(u(331));var l=de;for(de|=4,W=e.current;W!==null;){var o=W,c=o.child;if((W.flags&16)!==0){var d=o.deletions;if(d!==null){for(var h=0;h<d.length;h++){var j=d[h];for(W=j;W!==null;){var T=W;switch(T.tag){case 0:case 11:case 15:ii(8,T,o)}var A=T.child;if(A!==null)A.return=T,W=A;else for(;W!==null;){T=W;var E=T.sibling,$=T.return;if(Hc(T),T===j){W=null;break}if(E!==null){E.return=$,W=E;break}W=$}}}var B=o.alternate;if(B!==null){var H=B.child;if(H!==null){B.child=null;do{var Me=H.sibling;H.sibling=null,H=Me}while(H!==null)}}W=o}}if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,W=c;else e:for(;W!==null;){if(o=W,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ii(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,W=w;break e}W=o.return}}var m=e.current;for(W=m;W!==null;){c=W;var b=c.child;if((c.subtreeFlags&2064)!==0&&b!==null)b.return=c,W=b;else e:for(c=m;W!==null;){if(d=W,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:ys(9,d)}}catch(q){Pe(d,d.return,q)}if(d===c){W=null;break e}var R=d.sibling;if(R!==null){R.return=d.return,W=R;break e}W=d.return}}if(de=l,fn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Ii,e)}catch{}i=!0}return i}finally{ge=n,Ct.transition=t}}return!1}function ou(e,t,n){t=hr(n,t),t=Sc(e,t,1),e=gn(e,t,1),t=st(),e!==null&&(Rr(e,1,t),dt(e,t))}function Pe(e,t,n){if(e.tag===3)ou(e,e,n);else for(;t!==null;){if(t.tag===3){ou(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vn===null||!vn.has(i))){e=hr(n,e),e=Cc(t,e,1),t=gn(t,e,1),e=st(),t!==null&&(Rr(t,1,e),dt(t,e));break}}t=t.return}}function jp(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ke&n)===n&&(Ue===4||Ue===3&&(Ke&130023424)===Ke&&500>Le()-co?Un(e,0):ao|=n),dt(e,t)}function au(e,t){t===0&&((e.mode&1)===0?t=1:(t=Oi,Oi<<=1,(Oi&130023424)===0&&(Oi=4194304)));var n=st();e=Gt(e,t),e!==null&&(Rr(e,t,n),dt(e,n))}function Sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),au(e,n)}function Cp(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(u(314))}i!==null&&i.delete(t),au(e,n)}var cu;cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)ct=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ct=!1,hp(e,t,n);ct=(e.flags&131072)!==0}else ct=!1,Ee&&(t.flags&1048576)!==0&&$a(t,rs,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;vs(e,t),e=t.pendingProps;var l=sr(t,Je.current);dr(t,n),l=Dl(null,t,i,e,l,n);var o=Ul();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(i)?(o=!0,es(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Il(t),l.updater=gs,t.stateNode=l,l._reactInternals=t,ql(t,i,e,n),t=Xl(null,t,i,!0,o,n)):(t.tag=0,Ee&&o&&Nl(t),it(null,t,l,n),t=t.child),t;case 16:i=t.elementType;e:{switch(vs(e,t),e=t.pendingProps,l=i._init,i=l(i._payload),t.type=i,l=t.tag=Ep(i),e=Rt(i,e),l){case 0:t=Ql(null,t,i,e,n);break e;case 1:t=Oc(null,t,i,e,n);break e;case 11:t=Ac(null,t,i,e,n);break e;case 14:t=Rc(null,t,i,Rt(i.type,e),n);break e}throw Error(u(306,i,""))}return t;case 0:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Rt(i,l),Ql(e,t,i,l,n);case 1:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Rt(i,l),Oc(e,t,i,l,n);case 3:e:{if(Lc(t),e===null)throw Error(u(387));i=t.pendingProps,o=t.memoizedState,l=o.element,Xa(e,t),cs(t,i,null,n);var c=t.memoizedState;if(i=c.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=hr(Error(u(423)),t),t=Mc(e,t,i,n,l);break e}else if(i!==l){l=hr(Error(u(424)),t),t=Mc(e,t,i,n,l);break e}else for(vt=dn(t.stateNode.containerInfo.firstChild),xt=t,Ee=!0,At=null,n=Ya(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),i===l){t=Kt(e,t,n);break e}it(e,t,i,n)}t=t.child}return t;case 5:return ec(t),e===null&&Cl(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,c=l.children,xl(i,l)?c=null:o!==null&&xl(i,o)&&(t.flags|=32),Pc(e,t),it(e,t,c,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return Fc(e,t,n);case 4:return Pl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=cr(t,null,i,n):it(e,t,i,n),t.child;case 11:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Rt(i,l),Ac(e,t,i,l,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,l=t.pendingProps,o=t.memoizedProps,c=l.value,be(ls,i._currentValue),i._currentValue=c,o!==null)if(Tt(o.value,c)){if(o.children===l.children&&!ot.current){t=Kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var d=o.dependencies;if(d!==null){c=o.child;for(var h=d.firstContext;h!==null;){if(h.context===i){if(o.tag===1){h=qt(-1,n&-n),h.tag=2;var j=o.updateQueue;if(j!==null){j=j.shared;var T=j.pending;T===null?h.next=h:(h.next=T.next,T.next=h),j.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Rl(o.return,n,t),d.lanes|=n;break}h=h.next}}else if(o.tag===10)c=o.type===t.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(u(341));c.lanes|=n,d=c.alternate,d!==null&&(d.lanes|=n),Rl(c,n,t),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===t){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}it(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,i=t.pendingProps.children,dr(t,n),l=jt(l),i=i(l),t.flags|=1,it(e,t,i,n),t.child;case 14:return i=t.type,l=Rt(i,t.pendingProps),l=Rt(i.type,l),Rc(e,t,i,l,n);case 15:return zc(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Rt(i,l),vs(e,t),t.tag=1,at(i)?(e=!0,es(t)):e=!1,dr(t,n),Nc(t,i,l),ql(t,i,l,n),Xl(null,t,i,!0,e,n);case 19:return Dc(e,t,n);case 22:return Ic(e,t,n)}throw Error(u(156,t.tag))};function uu(e,t){return Wo(e,t)}function _p(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,i){return new _p(e,t,n,i)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===ft)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,i,l,o){var c=2;if(i=e,typeof e=="function")vo(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case oe:return Wn(n.children,l,o,t);case he:c=8,l|=8;break;case Ae:return e=_t(12,n,t,l|2),e.elementType=Ae,e.lanes=o,e;case Xe:return e=_t(13,n,t,l),e.elementType=Xe,e.lanes=o,e;case _e:return e=_t(19,n,t,l),e.elementType=_e,e.lanes=o,e;case Ne:return As(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:c=10;break e;case Qe:c=9;break e;case rt:c=11;break e;case ft:c=14;break e;case we:c=16,i=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=_t(c,n,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function Wn(e,t,n,i){return e=_t(7,e,i,t),e.lanes=n,e}function As(e,t,n,i){return e=_t(22,e,i,t),e.elementType=Ne,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function yo(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tp(e,t,n,i,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function bo(e,t,n,i,l,o,c,d,h){return e=new Tp(e,t,n,d,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(o),e}function Ap(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function du(e){if(!e)return hn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(at(n))return Va(e,n,t)}return t}function pu(e,t,n,i,l,o,c,d,h){return e=bo(n,i,!0,e,l,o,c,d,h),e.context=du(null),n=e.current,i=st(),l=yn(n),o=qt(i,l),o.callback=t??null,gn(n,o,l),e.current.lanes=l,Rr(e,l,i),dt(e,i),e}function Rs(e,t,n,i){var l=t.current,o=st(),c=yn(l);return n=du(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,c),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=gn(l,t,c),e!==null&&(Pt(e,l,c,o),as(e,l,c)),c}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ko(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function Rp(){return null}var fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}Is.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Rs(e,t,null,null)},Is.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){Rs(null,e,null,null)}),t[$t]=null}};function Is(e){this._internalRoot=e}Is.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&ea(e)}};function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function zp(e,t,n,i,l){if(l){if(typeof i=="function"){var o=i;i=function(){var j=zs(c);o.call(j)}}var c=pu(t,i,e,0,null,!1,!1,"",mu);return e._reactRootContainer=c,e[$t]=c.current,Hr(e.nodeType===8?e.parentNode:e),Dn(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof i=="function"){var d=i;i=function(){var j=zs(h);d.call(j)}}var h=bo(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=h,e[$t]=h.current,Hr(e.nodeType===8?e.parentNode:e),Dn(function(){Rs(t,h,n,i)}),h}function Os(e,t,n,i,l){var o=n._reactRootContainer;if(o){var c=o;if(typeof l=="function"){var d=l;l=function(){var h=zs(c);d.call(h)}}Rs(t,c,e,l)}else c=zp(n,t,e,l,i);return zs(c)}Yo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(qs(t,n|1),dt(t,Le()),(de&6)===0&&(gr=Le()+500,fn()))}break;case 13:Dn(function(){var i=Gt(e,1);if(i!==null){var l=st();Pt(i,e,1,l)}}),ko(e,1)}},Ks=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=st();Pt(t,e,134217728,n)}ko(e,134217728)}},Qo=function(e){if(e.tag===13){var t=yn(e),n=Gt(e,t);if(n!==null){var i=st();Pt(n,e,t,i)}ko(e,t)}},Xo=function(){return ge},Zo=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},_r=function(e,t,n){switch(t){case"input":if(wr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=Zi(i);if(!l)throw Error(u(90));fi(i),wr(i,l)}}}break;case"textarea":wi(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}},Ei=mo,Ti=Dn;var Ip={usingClientEntryPoint:!1,Events:[Kr,rr,Zi,Ci,_i,mo]},ai={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pp={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uo(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Ii=Ls.inject(Pp),Lt=Ls}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip,pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(t))throw Error(u(200));return Ap(e,t,null,n)},pt.createRoot=function(e,t){if(!jo(e))throw Error(u(299));var n=!1,i="",l=fu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=bo(e,1,!1,null,null,n,!1,i,l),e[$t]=t.current,Hr(e.nodeType===8?e.parentNode:e),new No(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Uo(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return Dn(e)},pt.hydrate=function(e,t,n){if(!Ps(t))throw Error(u(200));return Os(null,e,t,!0,n)},pt.hydrateRoot=function(e,t,n){if(!jo(e))throw Error(u(405));var i=n!=null&&n.hydratedSources||null,l=!1,o="",c=fu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=pu(t,null,e,1,n??null,l,!1,o,c),e[$t]=t.current,Hr(e),i)for(e=0;e<i.length;e++)n=i[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Is(t)},pt.render=function(e,t,n){if(!Ps(t))throw Error(u(200));return Os(null,e,t,!1,n)},pt.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(u(40));return e._reactRootContainer?(Dn(function(){Os(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},pt.unstable_batchedUpdates=mo,pt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Ps(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Os(e,t,n,!1,i)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Nu;function Wp(){if(Nu)return _o.exports;Nu=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),_o.exports=$p(),_o.exports}var ju;function Bp(){if(ju)return Ms;ju=1;var a=Wp();return Ms.createRoot=a.createRoot,Ms.hydrateRoot=a.hydrateRoot,Ms}var Hp=Bp();const Gp=zu(Hp);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...a)=>a.filter((s,u,p)=>!!s&&s.trim()!==""&&p.indexOf(s)===u).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=re.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:u=2,absoluteStrokeWidth:p,className:k="",children:x,iconNode:N,...y},g)=>re.createElement("svg",{ref:g,...Kp,width:s,height:s,stroke:a,strokeWidth:p?Number(u)*24/Number(s):u,className:Iu("lucide",k),...y},[...N.map(([_,S])=>re.createElement(_,S)),...Array.isArray(x)?x:[x]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(a,s)=>{const u=re.forwardRef(({className:p,...k},x)=>re.createElement(Yp,{ref:x,iconNode:s,className:Iu(`lucide-${qp(a)}`,p),...k}));return u.displayName=`${a}`,u};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ne("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=ne("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=ne("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=ne("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ne("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=ne("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=ne("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=ne("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=ne("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=ne("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=ne("CirclePower",[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=ne("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=ne("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=ne("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=ne("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ne("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=ne("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=ne("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=ne("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=ne("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=ne("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=ne("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=ne("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=ne("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=ne("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=ne("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=ne("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=ne("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=ne("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=ne("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=ne("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=ne("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=ne("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=ne("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=ne("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=ne("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function oh({theme:a,setTheme:s}){return r.jsxs(r.Fragment,{children:[r.jsxs("header",{className:"app-header",children:[r.jsxs("div",{className:"app-header__identity",children:[r.jsx("div",{className:"app-header__brand-mark",children:r.jsx(lt,{size:20,strokeWidth:1.8})}),r.jsxs("div",{className:"app-header__brand-copy",children:[r.jsxs("div",{className:"app-header__title-row",children:[r.jsx("h1",{children:"ARCOT IIOT 1.0"}),r.jsx("span",{className:"app-header__product",children:"BUILDING MANAGEMENT SYSTEM"})]}),r.jsx("p",{children:"Integrated Building Intelligence & Real-Time Monitoring"})]})]}),r.jsxs("div",{className:"app-header__actions",children:[r.jsxs("div",{className:"app-header__live",children:[r.jsx("span",{className:"app-header__live-dot"}),r.jsxs("div",{children:[r.jsx("small",{children:"PLATFORM STATUS"}),r.jsx("strong",{children:"SYSTEM LIVE"})]})]}),r.jsxs("div",{className:"app-theme-toggle","aria-label":"Dashboard theme",children:[r.jsxs("button",{type:"button",className:a==="light"?"is-active":"",onClick:()=>s("light"),title:"Bright mode","aria-label":"Use bright mode",children:[r.jsx(Mu,{size:14}),r.jsx("span",{children:"Bright"})]}),r.jsxs("button",{type:"button",className:a==="dark"?"is-active":"",onClick:()=>s("dark"),title:"Dark mode","aria-label":"Use dark mode",children:[r.jsx(Ou,{size:14}),r.jsx("span",{children:"Dark"})]})]})]})]}),r.jsx("style",{children:`
        .app-header {
          width: 100%;
          min-height: 64px;

          padding: 8px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;

          /* No separate header-card background */
          background: transparent;

          border: 0;
          border-bottom: 1px solid
            var(
              --app-border,
              rgba(96, 119, 138, 0.22)
            );

          border-radius: 0;
          box-shadow: none;
        }

        .app-header__identity {
          min-width: 0;

          display: flex;
          align-items: center;
          gap: 11px;
        }

        .app-header__brand-mark {
          width: 38px;
          height: 38px;

          flex: 0 0 38px;

          display: grid;
          place-items: center;

          color: #ffffff;

          background: #146886;

          border: 1px solid #2589a8;
          border-radius: 5px;
        }

        .app-header__brand-copy {
          min-width: 0;
        }

        .app-header__title-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .app-header h1 {
          margin: 0;

          color: var(
            --app-text,
            #132033
          );

          font-size: clamp(
            18px,
            1.35vw,
            23px
          );

          font-weight: 750;
          line-height: 1;

          letter-spacing: -0.025em;
        }

        .app-header__product {
          padding-left: 12px;

          border-left: 1px solid
            var(
              --app-border,
              #d5dee7
            );

          color: #1483a2;

          font-size: 8px;
          font-weight: 800;

          letter-spacing: 0.13em;
          white-space: nowrap;
        }

        .app-header__brand-copy p {
          margin: 5px 0 0;

          color: var(
            --app-muted,
            #758798
          );

          font-size: 9px;
          font-weight: 500;

          letter-spacing: 0.015em;
        }

        .app-header__actions {
          flex-shrink: 0;

          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ========================================
           REAL-TIME PLATFORM STATUS
        ======================================== */

        .app-header__live {
          min-width: 126px;
          height: 38px;

          padding: 0 11px;

          display: flex;
          align-items: center;
          gap: 9px;

          border: 1px solid
            rgba(29, 164, 117, 0.35);

          border-radius: 5px;

          background:
            rgba(24, 139, 99, 0.06);
        }

        .app-header__live-dot {
          width: 8px;
          height: 8px;

          flex: 0 0 8px;

          border-radius: 50%;

          background: #22bd83;

          box-shadow:
            0 0 0 3px
            rgba(34, 189, 131, 0.12);
        }

        .app-header__live > div {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .app-header__live small {
          color: var(
            --app-muted,
            #82919d
          );

          font-size: 6px;
          font-weight: 750;

          letter-spacing: 0.12em;
        }

        .app-header__live strong {
          color: #16835e;

          font-size: 8px;
          font-weight: 850;

          letter-spacing: 0.08em;
        }

        /* ========================================
           THEME CONTROL
        ======================================== */

        .app-theme-toggle {
          height: 38px;

          padding: 3px;

          display: flex;
          align-items: center;

          border: 1px solid
            var(
              --app-border,
              #d2dce5
            );

          border-radius: 5px;

          background:
            var(
              --app-surface-2,
              #edf2f6
            );
        }

        .app-theme-toggle button {
          height: 30px;

          padding: 0 10px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

          border: 0;
          border-radius: 3px;

          color: var(
            --app-muted,
            #718291
          );

          background: transparent;

          font-family: inherit;
          font-size: 8px;
          font-weight: 750;

          cursor: pointer;

          transition:
            color 0.15s ease,
            background 0.15s ease;
        }

        .app-theme-toggle button:hover {
          color: var(
            --app-text,
            #152638
          );
        }

        .app-theme-toggle button.is-active {
          color: #ffffff;

          background: #147c9d;
        }

        /* ========================================
           DARK MODE
        ======================================== */

        html[data-theme="dark"]
          .app-header h1 {
          color: #f2f6fa;
        }

        html[data-theme="dark"]
          .app-header {
          border-bottom-color:
            rgba(106, 139, 163, 0.2);
        }

        html[data-theme="dark"]
          .app-header__product {
          color: #49c6e1;

          border-left-color:
            rgba(115, 145, 167, 0.25);
        }

        html[data-theme="dark"]
          .app-header__brand-copy p {
          color: #8297a9;
        }

        html[data-theme="dark"]
          .app-header__live {
          border-color:
            rgba(42, 194, 139, 0.27);

          background:
            rgba(24, 139, 99, 0.08);
        }

        html[data-theme="dark"]
          .app-header__live strong {
          color: #65d9ad;
        }

        html[data-theme="dark"]
          .app-theme-toggle {
          border-color: #203951;
          background: #101e2d;
        }

        html[data-theme="dark"]
          .app-theme-toggle button {
          color: #8499aa;
        }

        html[data-theme="dark"]
          .app-theme-toggle button:hover {
          color: #e7f0f6;
        }

        html[data-theme="dark"]
          .app-theme-toggle
          button.is-active {
          color: #ffffff;
          background: #176f8c;
        }

        /* ========================================
           RESPONSIVE
        ======================================== */

        @media (max-width: 760px) {
          .app-header {
            padding: 8px 12px;
          }

          .app-header__product {
            display: none;
          }

          .app-header__brand-copy p {
            display: none;
          }

          .app-header__live {
            min-width: 0;
          }

          .app-header__live small {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .app-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .app-header__actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `})]})}function ah({item:a,onOpen:s}){const u=a.icon,p=a.health||"HEALTHY",k=String(a.status||"ONLINE").toLowerCase(),x=String(p).toLowerCase();return r.jsxs("button",{type:"button",className:`flow-card flow-card--${a.color} flow-card--status-${k}`,onClick:()=>s(a),children:[r.jsxs("div",{className:"flow-card__top",children:[r.jsx("div",{className:"flow-card__icon",children:r.jsx(u,{size:22,strokeWidth:1.8})}),r.jsxs("div",{className:`flow-card__live flow-card__live--${k}`,children:[r.jsx("span",{className:"flow-card__live-dot"}),a.status]})]}),r.jsxs("div",{className:"flow-card__content",children:[r.jsxs("div",{className:"flow-card__identity",children:[r.jsx("h2",{children:a.name}),r.jsx("p",{children:a.description})]}),r.jsxs("div",{className:"flow-card__reading",children:[r.jsx("span",{children:"LIVE VALUE"}),r.jsx("strong",{children:a.value})]})]}),r.jsxs("div",{className:"flow-card__footer",children:[r.jsxs("span",{className:`flow-card__health flow-card__health--${x}`,children:[r.jsx("span",{className:"flow-card__health-dot"}),p]}),r.jsxs("span",{className:"flow-card__open",children:["OPEN ",r.jsx(Jp,{size:14})]})]})]})}const Po=[{id:"source",name:"Source",shortName:"33 kV Source",icon:Lu,status:"ONLINE",health:"HEALTHY",value:"33 kV",color:"source"},{id:"feeder",name:"Feeder",shortName:"33 kV Feeder",icon:Pu,status:"ONLINE",health:"HEALTHY",value:"1 IN / 6 OUT",color:"feeder"},{id:"transformer",name:"Transformer",shortName:"33/0.433 kV",icon:Ge,status:"ONLINE",health:"HEALTHY",value:"6 Units",color:"transformer"},{id:"lt-kiosk",name:"LT Kiosk",shortName:"LT Distribution",icon:Fo,status:"ONLINE",health:"HEALTHY",value:"6 Units",color:"lt-kiosk"},{id:"busduct",name:"Busduct",shortName:"LT Busduct / Busbar",icon:Bn,status:"ONLINE",health:"HEALTHY",value:"6 Busbars",color:"busduct"},{id:"pcc",name:"PCC",shortName:"Power Control Centre",icon:Hn,status:"ONLINE",health:"HEALTHY",value:"4 Panels",color:"pcc"},{id:"raising-main",name:"Raising Main",shortName:"Vertical Distribution",icon:Xt,status:"ONLINE",health:"HEALTHY",value:"4 Mains",color:"raising-main"},{id:"wing",name:"Wing",shortName:"Building Distribution",icon:Zt,status:"ONLINE",health:"HEALTHY",value:"2 Wings",color:"wing"},{id:"dg",name:"DG",shortName:"Diesel Generator Plant",icon:Ve,status:"STANDBY",health:"READY",value:"7 DGs",color:"dg"},{id:"hvac",name:"HVAC",shortName:"HVAC Cooling Plant",icon:Vs,status:"ONLINE",health:"HEALTHY",value:"Running",color:"hvac"},{id:"wtp",name:"Water Management",shortName:"STP / WTP / Tanks",icon:Oe,status:"ONLINE",health:"HEALTHY",value:"Normal",color:"wtp"},{id:"fire",name:"Fire",shortName:"Fire & Life Safety",icon:Gn,status:"ONLINE",health:"NORMAL",value:"Normal",color:"fire"}],Ce=(a,s,u,p="electrical",k={})=>({id:a,name:s,label:u,type:p,...k}),ue=(a,s,u,p,k=null)=>({id:`${a}-${s}`,name:u,label:p==="incoming"?"Incoming Circuit":p==="coupler"?"Bus Coupler":"Outgoing Circuit",type:p==="coupler"?"coupler":"pcc-circuit",direction:p,section:k}),Du=[ue("pcc1","lt6-in","LT6 IN","incoming","A"),ue("pcc1","dg1234-in-a","DG1-4 IN","incoming","A"),ue("pcc1","og1","OG1","outgoing","A"),ue("pcc1","rm1-a","RM1","outgoing","A"),ue("pcc1","rm2-a","RM2","outgoing","A"),ue("pcc1","utility1","Utility 1","outgoing","A"),ue("pcc1","spare1","Spare 1","outgoing","A"),ue("pcc1","bus-coupler","Bus Coupler","coupler"),ue("pcc1","lt5-in","LT5 IN","incoming","B"),ue("pcc1","dg1234-in-b","DG1-4 IN","incoming","B"),ue("pcc1","rm1-b","RM1","outgoing","B"),ue("pcc1","rm2-b","RM2","outgoing","B"),ue("pcc1","utility2","Utility 2","outgoing","B"),ue("pcc1","spare2","Spare 2","outgoing","B")],Uu=[ue("pcc2","lt1-in","LT1 IN","incoming","A"),ue("pcc2","dg1234-in-a","DG1-4 IN","incoming","A"),ue("pcc2","og1","OG1","outgoing","A"),ue("pcc2","rm1-a","RM1","outgoing","A"),ue("pcc2","rm2-a","RM2","outgoing","A"),ue("pcc2","utility1","Utility 1","outgoing","A"),ue("pcc2","spare1","Spare 1","outgoing","A"),ue("pcc2","bus-coupler","Bus Coupler","coupler"),ue("pcc2","lt2-in","LT2 IN","incoming","B"),ue("pcc2","dg1234-in-b","DG1-4 IN","incoming","B"),ue("pcc2","rm1-b","RM1","outgoing","B"),ue("pcc2","rm2-b","RM2","outgoing","B"),ue("pcc2","utility2","Utility 2","outgoing","B"),ue("pcc2","spare2","Spare 2","outgoing","B")],$u=[ue("pcc3","lt4-in","LT4 IN","incoming"),ue("pcc3","dg567-in","DG5-7 IN","incoming"),...Array.from({length:10},(a,s)=>ue("pcc3",`og-${s+1}`,`OG ${s+1}`,"outgoing"))],Wu=[ue("pcc4","lt3-in","LT3 IN","incoming"),ue("pcc4","dg567-in","DG5-7 IN","incoming"),...Array.from({length:10},(a,s)=>ue("pcc4",`og-${s+1}`,`OG ${s+1}`,"outgoing"))],pi={source:{id:"source",title:"33 kV Source",subtitle:"Incoming HT Source & Metering",layout:"grid",category:"electrical",equipment:[Ce("source-inc1","INC1","Primary Incoming Feeder","incomer"),Ce("source-out","OUT","Outgoing Busbar","busbar"),Ce("source-inc2","INC2","Secondary Incoming Feeder","incomer"),Ce("source-meter","Metering Unit","33 kV Energy Monitoring Meter","meter")]},feeder:{id:"feeder",title:"33 kV Feeder Panel",subtitle:"1 Incoming / 6 Outgoing Feeders",layout:"feeder",category:"electrical",incoming:Ce("feeder-in-1","Incoming Feeder 1","33 kV Feeder Incoming","incomer"),equipment:Array.from({length:6},(a,s)=>Ce(`feeder-og-${s+1}`,`OG-${s+1}`,`Outgoing Feeder → TR-${s+1}`,"feeder"))},transformer:{id:"transformer",title:"Transformers",subtitle:"33 kV / 433 V Step-Down Transformers",layout:"parallel",category:"transformer",equipment:Array.from({length:6},(a,s)=>Ce(`transformer-${s+1}`,`TR-${s+1}`,"33 kV / 433 V Transformer","transformer"))},"lt-kiosk":{id:"lt-kiosk",title:"LT Kiosk",subtitle:"433 V LT Distribution Panels",layout:"parallel",category:"electrical",equipment:Array.from({length:6},(a,s)=>Ce(`kiosk-${s+1}`,`KIOSK-${s+1}`,"433 V LT Kiosk","kiosk"))},busduct:{id:"busduct",title:"LT Busduct / Busbar",subtitle:"Busbar Condition Monitoring",layout:"parallel",category:"busduct",equipment:Array.from({length:6},(a,s)=>Ce(`bus-${s+1}`,`BUS-${s+1}`,"LT Busduct / Busbar","busduct"))},pcc:{id:"pcc",title:"Power Control Centre",subtitle:"PCC 1–4 Incomings, Outgoings & Bus Couplers",layout:"pcc",category:"pcc",panels:[{id:"pcc-1",name:"PCC 1",label:"Wing A",circuits:Du},{id:"pcc-2",name:"PCC 2",label:"Wing B",circuits:Uu},{id:"pcc-3",name:"PCC 3",label:"Chillers",circuits:$u},{id:"pcc-4",name:"PCC 4",label:"Chillers",circuits:Wu}]},ups:{id:"ups",title:"UPS",subtitle:"Uninterruptible Power Supply",layout:"parallel",category:"ups",equipment:[Ce("ups-30-1","30kVA-1","30 kVA UPS","ups"),Ce("ups-30-2","30kVA-2","30 kVA UPS","ups"),Ce("ups-10-1","10kVA-1","10 kVA UPS","ups"),Ce("ups-10-2","10kVA-2","10 kVA UPS","ups")]},"raising-main":{id:"raising-main",title:"Raising Main",subtitle:"Vertical Building Power Distribution",layout:"parallel",category:"electrical",equipment:Array.from({length:4},(a,s)=>Ce(`rm-${s+1}`,`Raising Main ${s+1}`,s<2?"Wing A Vertical Distribution":"Wing B Vertical Distribution","raising-main"))},wing:{id:"wing",title:"Building Wings",subtitle:"Wing-Level Electrical Monitoring",layout:"parallel",category:"wing",equipment:[Ce("wing-a","Wing A","20 Floors","wing"),Ce("wing-b","Wing B","20 Floors","wing")]},dg:{id:"dg",title:"Diesel Generator Plant",subtitle:"Emergency / Standby Generation",layout:"parallel",category:"dg",equipment:Array.from({length:7},(a,s)=>Ce(`dg-${s+1}`,`DG-${s+1}`,s<4?"1500 kVA GENSET":"1250 kVA GENSET","dg"))},hvac:{id:"hvac",title:"HVAC",subtitle:"HVAC Cooling Plant",layout:"empty",category:"electrical",equipment:[]},wtp:{id:"wtp",title:"Water Management",subtitle:"Water, STP, WTP & Tank Monitoring",layout:"water",category:"water",equipment:[{id:"water-management",name:"Water Management",label:"Central Water Monitoring",type:"water-main"},{id:"stp",name:"STP",label:"Sewage Treatment Plant",type:"stp"},{id:"wtp",name:"WTP",label:"Water Treatment Plant",type:"wtp"},...Array.from({length:4},(a,s)=>({id:`tank-${s+1}`,name:`Tank Level-${s+1}`,label:"Water Storage Tank",type:"tank"}))]},fire:{id:"fire",title:"Fire & Life Safety",subtitle:"Fire Alarm, Fire Fighting & Pump Monitoring",layout:"parallel",category:"fire",equipment:[{id:"fire-alarms",name:"Fire Alarms",label:"Detection & Alarm System",type:"fire-alarm"},{id:"fire-fighting",name:"Fire Fighting",label:"Hydrant & Sprinkler System",type:"fire-fighting"},{id:"fire-pump",name:"Fire Pump",label:"Fire Pump System",type:"fire-pump"}]}},_u=[[54,61,68],[52,59,62],[55,60,71],[53,58,65],[56,63,74],[51,57,60]],ch=a=>{const[s,u,p]=_u[a%_u.length];return{...$e(a,433),status:"ON",health:"HEALTHY",communication:!0,kWh:1840+a*37,kVAh:1710+a*35,voltage:433,current:245+a%10*7,powerFactor:a%3===0?.96:a%3===1?.97:.98,oilTemp:s+Math.floor(a/6),windingTemp:u+Math.floor(a/6),buchholz:"Healthy",buchholzRelay:"Healthy",relay:"Healthy",load:p,protectionStatus:"Normal",operatingStatus:"Running",fault:!1,trip:!1,warning:!1}},$e=(a=0,s=433)=>({status:"ON",health:"HEALTHY",communication:!0,kWh:1245+a*18,kVAh:1180+a*15,voltage:s,current:210+a*4,powerFactor:a%2===0?.98:.97,load:62+a%5*4,fault:!1,trip:!1,warning:!1}),en={"source-inc1":{...$e(0,33),kWh:1280,kVAh:1195,current:420,powerFactor:.98,load:78,healthScore:94,operatingStatus:"Stable"},"source-out":{...$e(1,33),kWh:1560,kVAh:1430,current:460,powerFactor:.99,load:86,healthScore:96,operatingStatus:"Stable"},"source-inc2":{...$e(2,33),kWh:1110,kVAh:1020,current:390,powerFactor:.97,load:72,healthScore:92,operatingStatus:"Stable"},"source-meter":{...$e(3,33),kWh:1420,kVAh:1300,current:435,powerFactor:.98,load:81,healthScore:95,operatingStatus:"Stable"},...Object.fromEntries(Array.from({length:20},(a,s)=>[`source-inc${s+1}`,{...$e(s,33),load:64+s*5%28,healthScore:90+s%8,operatingStatus:"Stable"}])),...Object.fromEntries(Array.from({length:30},(a,s)=>[s===0?"source-out":`source-out-${s+1}`,{...$e(s+20,33),load:58+s*4%34,healthScore:89+s%9,operatingStatus:"Stable"}])),...Object.fromEntries(Array.from({length:20},(a,s)=>[s===0?"source-meter":`source-meter-${s+1}`,{...$e(s+50,33),healthScore:92+s%6,operatingStatus:"Stable"}])),...Object.fromEntries(Array.from({length:20},(a,s)=>[`feeder-in-${s+1}`,{...$e(s,33),current:Math.max(260,432-s*6),direction:"incoming",feederNumber:s+1,operatingStatus:"Stable"}])),...Object.fromEntries(Array.from({length:30},(a,s)=>[`feeder-og-${s+1}`,{...$e(s+1,33),current:Math.max(120,390-s*9),direction:"outgoing",feederNumber:s+1,operatingStatus:"Stable"}])),...Object.fromEntries(Array.from({length:6},(a,s)=>[`feeder-og-${s+1}`,{...$e(s+1,33),current:390-s*13}])),...Object.fromEntries(Array.from({length:30},(a,s)=>[`transformer-${s+1}`,ch(s)])),...Object.fromEntries(Array.from({length:30},(a,s)=>[`kiosk-${s+1}`,{...$e(s,433),operatingStatus:"Stable"}])),...Object.fromEntries(Array.from({length:30},(a,s)=>[`bus-${s+1}`,{status:"ON",health:"HEALTHY",communication:!0,temperature:38+s,vibration:Number((1.2+s*.1).toFixed(1)),voltage:433,load:61+s*2,fault:!1,trip:!1,warning:!1}])),...Object.fromEntries(Array.from({length:20},(a,s)=>[`pcc-${s+1}`,{...$e(s,433),panelNumber:s+1,operatingStatus:"Running"}])),"ups-30-1":{status:"ON",health:"HEALTHY",communication:!0,capacity:"30 kVA",inputVoltage:433,outputVoltage:230,load:62,battery:96,inputFrequency:50,outputFrequency:50,batteryVoltage:216,backupTime:"42 min",mode:"ONLINE",fault:!1,trip:!1,warning:!1},"ups-30-2":{status:"ON",health:"HEALTHY",communication:!0,capacity:"30 kVA",inputVoltage:433,outputVoltage:230,load:58,battery:94,inputFrequency:50,outputFrequency:50,batteryVoltage:215,backupTime:"45 min",mode:"ONLINE",fault:!1,trip:!1,warning:!1},"ups-10-1":{status:"ON",health:"HEALTHY",communication:!0,capacity:"10 kVA",inputVoltage:433,outputVoltage:230,load:48,battery:97,inputFrequency:50,outputFrequency:50,batteryVoltage:216,backupTime:"56 min",mode:"ONLINE",fault:!1,trip:!1,warning:!1},"ups-10-2":{status:"ON",health:"HEALTHY",communication:!0,capacity:"10 kVA",inputVoltage:433,outputVoltage:230,load:45,battery:95,inputFrequency:50,outputFrequency:50,batteryVoltage:215,backupTime:"59 min",mode:"ONLINE",fault:!1,trip:!1,warning:!1},...Object.fromEntries(Array.from({length:20},(a,s)=>[`rm-${s+1}`,$e(s,433)])),...Object.fromEntries(Array.from({length:10},(a,s)=>[`wing-${String.fromCharCode(65+s).toLowerCase()}`,{...$e(s,433),demand:Math.max(720,1240-s*60),activeAlarms:0}])),...Object.fromEntries(Array.from({length:20},(a,s)=>[`dg-${s+1}`,{...$e(s,433),status:s===0?"ON":"STANDBY",health:"READY",capacity:s<4?"1500 kVA":"1250 kVA"}])),hvac:{...$e(0,433)},...Object.fromEntries(Array.from({length:30},(a,s)=>[`hvac-${s+1}`,{...$e(90+s*4,415),status:s%9===0?"STANDBY":"ON",health:s%11===0?"CHECK":"HEALTHY"}])),"water-management":{status:"ON",health:"HEALTHY",communication:!0,flowRate:148,totalWater:72,pressure:3.2,fault:!1,trip:!1,warning:!1},stp:{status:"ON",health:"HEALTHY",communication:!0,inletFlow:82,outletFlow:76,ph:7.2,turbidity:2.4,fault:!1,trip:!1,warning:!1},wtp:{status:"ON",health:"HEALTHY",communication:!0,inletFlow:96,outletFlow:91,ph:7.1,turbidity:1.8,fault:!1,trip:!1,warning:!1},"tank-1":{status:"ON",health:"HEALTHY",communication:!0,level:78,volume:42,inletFlow:18,outletFlow:14,fault:!1,trip:!1,warning:!1},"tank-2":{status:"ON",health:"HEALTHY",communication:!0,level:66,volume:36,inletFlow:15,outletFlow:12,fault:!1,trip:!1,warning:!1},"tank-3":{status:"ON",health:"HEALTHY",communication:!0,level:83,volume:45,inletFlow:19,outletFlow:16,fault:!1,trip:!1,warning:!1},"tank-4":{status:"ON",health:"HEALTHY",communication:!0,level:59,volume:31,inletFlow:14,outletFlow:11,fault:!1,trip:!1,warning:!1},...Object.fromEntries(Array.from({length:20},(a,s)=>[`tank-${s+1}`,{status:"ON",health:"HEALTHY",communication:!0,level:54+s*7%35,volume:28+s*5%24,inletFlow:12+s*3%10,outletFlow:10+s*2%9,fault:!1,trip:!1,warning:!1}])),"fire-alarms":{status:"ON",health:"NORMAL",communication:!0,smokeDetectors:128,heatDetectors:64,alarmZones:12,activeAlarms:0,fault:!1,trip:!1,warning:!1},"fire-fighting":{status:"ON",health:"NORMAL",communication:!0,pressure:7.2,hydrantNetwork:"NORMAL",sprinklerNetwork:"NORMAL",mainValve:"OPEN",fault:!1,trip:!1,warning:!1},"fire-pump":{status:"STANDBY",health:"READY",communication:!0,voltage:415,pressure:7.4,mode:"AUTO",pumpState:"STANDBY",fault:!1,trip:!1,warning:!1}};[...Du,...Uu,...$u,...Wu].forEach((a,s)=>{en[a.id]={...$e(s,433),breakerState:a.direction==="coupler"?"OPEN":"CLOSED",direction:a.direction,section:a.section}});function uh(a){if(!a)return[];if(a.layout==="pcc")return Array.isArray(a.panels)?a.panels.flatMap(s=>Array.isArray(s.circuits)?s.circuits:[]):[];if(a.id==="feeder"){const s=Array.isArray(a.incomingFeeders)?a.incomingFeeders:a.incoming?[a.incoming]:[],u=Array.isArray(a.outgoingFeeders)?a.outgoingFeeders:Array.isArray(a.equipment)?a.equipment:[];return[...s,...u]}return[...a.incoming?[a.incoming]:[],...Array.isArray(a.equipment)?a.equipment:[]]}const Ye=(a,s=0,u=100)=>{const p=Number(a);return Number.isFinite(p)?Math.max(0,Math.min(u,Math.floor(p))):s},Us=(a,s="33kV")=>a?String(a).replace(/\s+/g,"").replace("KV","kV").replace("Kv","kV").replace("kv","kV"):s,Oo=a=>a?{...a,incoming:a.incoming?{...a.incoming}:void 0,incomingFeeders:Array.isArray(a.incomingFeeders)?a.incomingFeeders.map(s=>({...s})):void 0,outgoingFeeders:Array.isArray(a.outgoingFeeders)?a.outgoingFeeders.map(s=>({...s})):void 0,equipment:Array.isArray(a.equipment)?a.equipment.map(s=>({...s})):void 0,panels:Array.isArray(a.panels)?a.panels.map(s=>({...s,circuits:Array.isArray(s.circuits)?s.circuits.map(u=>({...u})):[]})):void 0}:null,dh=(a={})=>{const s=Us(a.voltageLevel,"33kV"),u=Ye(a.incomingCount,2,20),p=Ye(a.outgoingCount,1,30),k=Ye(a.meterCount,1,20),x=!!a.protectionRelay,N=!!a.busCoupler,y=[];for(let g=0;g<u;g+=1)y.push(Ce(`source-inc${g+1}`,`Incoming ${g+1}`,`${s} Incoming Feeder`,"incomer",{voltageLevel:s,role:"incoming"}));for(let g=0;g<p;g+=1)y.push(Ce(g===0?"source-out":`source-out-${g+1}`,`Outgoing ${g+1}`,`${s} Outgoing Feeder`,"busbar",{voltageLevel:s,role:"outgoing"}));for(let g=0;g<k;g+=1)y.push(Ce(g===0?"source-meter":`source-meter-${g+1}`,`Meter ${g+1}`,`${s} Energy Monitoring Meter`,"meter",{voltageLevel:s,role:"meter"}));return{id:"source",title:`${s} Source`,subtitle:`${u} Incoming / ${p} Outgoing / ${k} Meter${k===1?"":"s"}`,layout:"grid",category:"electrical",voltageLevel:s,configuration:{...a,voltageLevel:s,incomingCount:u,outgoingCount:p,meterCount:k,protectionRelay:x,busCoupler:N},equipment:y}},ph=(a={})=>{const s=Us(a.voltageLevel,"33kV"),u=Ye(a.incomingCount,1,20),p=Ye(a.outgoingCount,6,30),k=Array.from({length:u},(N,y)=>Ce(`feeder-in-${y+1}`,u===1?"Incoming Feeder":`Incoming Feeder ${y+1}`,`${s} Incoming Feeder`,"incomer",{voltageLevel:s,direction:"incoming",feederNumber:y+1})),x=Array.from({length:p},(N,y)=>Ce(`feeder-og-${y+1}`,`OG-${y+1}`,`Outgoing Feeder ${y+1}`,"feeder",{voltageLevel:s,direction:"outgoing",feederNumber:y+1}));return{id:"feeder",title:`${s} Feeder Panel`,subtitle:`${u} Incoming / ${p} Outgoing Feeders`,layout:"feeder",category:"electrical",voltageLevel:s,configuration:{...a,voltageLevel:s,incomingCount:u,outgoingCount:p},incomingFeeders:k,outgoingFeeders:x,incoming:k[0]||null,equipment:x}},hi=({systemId:a,title:s,subtitle:u,category:p,count:k,equipmentIdPrefix:x,equipmentNamePrefix:N,labelBuilder:y,type:g,configuration:_})=>({id:a,title:s,subtitle:u,layout:"parallel",category:p,configuration:_,equipment:Array.from({length:k},(S,I)=>Ce(`${x}-${I+1}`,`${N}-${I+1}`,y(I),g))}),hh=(a={})=>{const s=Ye(a.count,6,30),u=Us(a.primaryVoltage,"33kV"),p=a.secondaryVoltage||"433V";return hi({systemId:"transformer",title:"Transformers",subtitle:`${u} / ${p} Step-Down Transformers`,category:"transformer",count:s,equipmentIdPrefix:"transformer",equipmentNamePrefix:"TR",labelBuilder:()=>`${u} / ${p} Transformer`,type:"transformer",configuration:{...a,count:s,primaryVoltage:u,secondaryVoltage:p}})},fh=(a={})=>{const s=Ye(a.count,6,30),u=a.voltage||"433V";return hi({systemId:"lt-kiosk",title:"LT Kiosk",subtitle:`${u} LT Distribution Panels`,category:"electrical",count:s,equipmentIdPrefix:"kiosk",equipmentNamePrefix:"KIOSK",labelBuilder:()=>`${u} LT Kiosk`,type:"kiosk",configuration:{...a,count:s,voltage:u}})},mh=(a={})=>{const s=Ye(a.count,6,30);return hi({systemId:"busduct",title:"LT Busduct / Busbar",subtitle:"Busbar Condition Monitoring",category:"busduct",count:s,equipmentIdPrefix:"bus",equipmentNamePrefix:"BUS",labelBuilder:()=>"LT Busduct / Busbar",type:"busduct",configuration:{...a,count:s}})},gh=(a={})=>{const s=Ye(a.count,4,20);return hi({systemId:"raising-main",title:"Raising Main",subtitle:"Vertical Building Power Distribution",category:"electrical",count:s,equipmentIdPrefix:"rm",equipmentNamePrefix:"Raising Main",labelBuilder:u=>u<2?"Wing A Vertical Distribution":u<4?"Wing B Vertical Distribution":"Configured Vertical Distribution",type:"raising-main",configuration:{...a,count:s}})},xh=(a={})=>{const s=Ye(a.count,2,10),u=Ye(a.floorsPerWing,20,100),p=Array.from({length:s},(k,x)=>{const N=String.fromCharCode(65+x);return Ce(`wing-${N.toLowerCase()}`,`Wing ${N}`,`${u} Floors`,"wing")});return{id:"wing",title:"Building Wings",subtitle:"Wing-Level Electrical Monitoring",layout:"parallel",category:"wing",configuration:{...a,count:s,floorsPerWing:u},equipment:p}},vh=(a={})=>{const s=Ye(a.count,7,20),u=Array.isArray(a.units)?a.units:[];return hi({systemId:"dg",title:"Diesel Generator Plant",subtitle:"Emergency / Standby Generation",category:"dg",count:s,equipmentIdPrefix:"dg",equipmentNamePrefix:"DG",labelBuilder:p=>{const k=u[p];return`${(k==null?void 0:k.capacity)||(p<4?1500:1250)} kVA GENSET`},type:"dg",configuration:{...a,count:s}})},wh=(a={})=>{const s=Ye(a.count,0,30);return{id:"hvac",title:"HVAC",subtitle:"HVAC Cooling Plant",layout:s===0?"empty":"parallel",category:"electrical",configuration:{...a,count:s},equipment:Array.from({length:s},(u,p)=>Ce(`hvac-${p+1}`,`HVAC-${p+1}`,"HVAC Equipment","hvac"))}},yh=(a={})=>{const s=a.stpEnabled!==!1,u=a.wtpEnabled!==!1,p=Ye(a.tankCount,4,20),k=[{id:"water-management",name:"Water Management",label:"Central Water Monitoring",type:"water-main"}];return s&&k.push({id:"stp",name:"STP",label:"Sewage Treatment Plant",type:"stp"}),u&&k.push({id:"wtp",name:"WTP",label:"Water Treatment Plant",type:"wtp"}),p>0&&k.push(...Array.from({length:p},(x,N)=>({id:`tank-${N+1}`,name:`Tank Level-${N+1}`,label:"Water Storage Tank",type:"tank"}))),{id:"wtp",title:"Water Management",subtitle:"Water, STP, WTP & Tank Monitoring",layout:"water",category:"water",configuration:{...a,stpEnabled:s,wtpEnabled:u,tankCount:p},equipment:k}},bh=(a={})=>{const s=a.fireAlarms!==!1,u=a.fireFighting!==!1,p=a.firePump!==!1,k=Oo(pi.fire),x=new Set([s?"fire-alarms":null,u?"fire-fighting":null,p?"fire-pump":null].filter(Boolean));return{...k,configuration:{...a,fireAlarms:s,fireFighting:u,firePump:p},equipment:k.equipment.filter(N=>x.has(N.id))}},kh=(a={})=>{const s=Ye(a.count,4,20),u=Oo(pi.pcc).panels||[],p=Array.isArray(a.panels)?a.panels:null,k=Array.from({length:s},(x,N)=>{const y=N+1,g=u[N],_=p==null?void 0:p[N],S=Array.isArray(_==null?void 0:_.equipment)?_.equipment:null,I=Array.isArray(_==null?void 0:_.upsUnits)?_.upsUnits:[],M=(g==null?void 0:g.circuits)||[],Z=p?M.filter(z=>(S==null?void 0:S.includes("utility1"))&&z.id.endsWith("-utility1")||(S==null?void 0:S.includes("utility2"))&&z.id.endsWith("-utility2")):M;return{id:(_==null?void 0:_.id)||(g==null?void 0:g.id)||`pcc-${y}`,name:(_==null?void 0:_.name)||(g==null?void 0:g.name)||`PCC ${y}`,label:(g==null?void 0:g.label)||"Configured PCC Panel",circuits:Z,equipment:S||void 0,upsUnits:p?I:y<=2?["ups-30-1","ups-30-2","ups-10-1","ups-10-2"]:[]}});return{...Oo(pi.pcc),subtitle:`PCC 1-${s} Incomings, Outgoings & Bus Couplers`,panels:k,configuration:{...a,count:s}}};function Bu(a){if(!a)return null;const s=a.type||a.id,u=a.configuration||{};switch(s){case"source":return dh(u);case"feeder":return ph(u);case"transformer":return hh(u);case"lt-kiosk":return fh(u);case"busduct":return mh(u);case"pcc":return kh(u);case"raising-main":return gh(u);case"wing":return xh(u);case"dg":return vh(u);case"hvac":return wh(u);case"wtp":return yh(u);case"fire":return bh(u);default:return null}}function Nh(a){return!a||!Array.isArray(a.systems)?pi:Object.fromEntries(a.systems.map(s=>{const u=Bu(s);return u?[u.id,u]:null}).filter(Boolean))}function jh(a,s){if(!s)return null;if(!a||!Array.isArray(a.systems))return pi[s]||null;const u=a.systems.find(p=>(p.type||p.id)===s);return u?Bu(u):null}function Sh(a){if(!a||!Array.isArray(a.systems))return Po;const s=Nh(a);return a.systems.map(u=>{var g,_,S,I,M,Z,z,F,P;const p=u.type||u.id,k=Po.find(K=>K.id===p),x=s[p];if(!k||!x)return null;const N=u.configuration||{},y={...k,projectSystem:u,configuration:N};if(p==="source"){const K=Us(N.voltageLevel,"33kV");y.shortName=`${K} Source`,y.value=K}if(p==="feeder"){const K=Ye(N.incomingCount,1),ve=Ye(N.outgoingCount,6);y.value=`${K} IN / ${ve} OUT`}if(p==="transformer"){const K=((g=x.equipment)==null?void 0:g.length)||0;y.value=`${K} Unit${K===1?"":"s"}`}if(p==="lt-kiosk"){const K=((_=x.equipment)==null?void 0:_.length)||0;y.value=`${K} Unit${K===1?"":"s"}`}if(p==="busduct"){const K=((S=x.equipment)==null?void 0:S.length)||0;y.value=`${K} Busbar${K===1?"":"s"}`}if(p==="pcc"){const K=((I=x.panels)==null?void 0:I.length)||0;y.value=`${K} Panel${K===1?"":"s"}`}if(p==="raising-main"){const K=((M=x.equipment)==null?void 0:M.length)||0;y.value=`${K} Main${K===1?"":"s"}`}if(p==="wing"){const K=((Z=x.equipment)==null?void 0:Z.length)||0;y.value=`${K} Wing${K===1?"":"s"}`}if(p==="dg"){const K=((z=x.equipment)==null?void 0:z.length)||0;y.value=`${K} DG${K===1?"":"s"}`}if(p==="hvac"){const K=((F=x.equipment)==null?void 0:F.length)||0;K===0?(y.status="NOT CONFIGURED",y.health="UNAVAILABLE",y.value="0 Units"):(y.status="ONLINE",y.health="HEALTHY",y.value=`${K} Unit${K===1?"":"s"}`)}if(p==="wtp"){const K=((P=x.configuration)==null?void 0:P.tankCount)??4;y.value=`${K} Tank${K===1?"":"s"}`}return y}).filter(Boolean)}function Ch({project:a,onOpenFlow:s}){const[u,p]=re.useState([]),k=re.useRef(null),x=re.useMemo(()=>!a||!Array.isArray(a.systems)?Po:a.systems.length===0?[]:Sh(a).map(y=>({...y,projectId:a.id,projectName:a.projectName,clientName:a.clientName})),[a]);re.useLayoutEffect(()=>{const y=k.current;if(!y)return;let g=null;const _=()=>{g&&cancelAnimationFrame(g),g=requestAnimationFrame(()=>{const I=[...y.querySelectorAll("[data-flow-node]")],M=y.getBoundingClientRect(),Z=[];for(let z=0;z<I.length-1;z+=1){const F=I[z].getBoundingClientRect(),P=I[z+1].getBoundingClientRect(),K=F.left-M.left+F.width/2,ve=F.top-M.top+F.height/2,Te=P.left-M.left+P.width/2,D=P.top-M.top+P.height/2;if(Math.abs(ve-D)<Math.max(F.height,P.height)*.55){const ee=Te>K,oe=ee?F.right-M.left:F.left-M.left,he=ee?P.left-M.left:P.right-M.left,Ae=ve;Z.push({d:`M ${oe} ${Ae} L ${he} ${Ae}`})}else{const ee=K,oe=F.bottom-M.top,he=Te,Ae=P.top-M.top,ke=Math.max(0,Ae-oe),Qe=ke>0?oe+ke/2:oe+14;Z.push({d:`M ${ee} ${oe} L ${ee} ${Qe} L ${he} ${Qe} L ${he} ${Ae}`})}}p(Z)})};_();const S=new ResizeObserver(_);return S.observe(y),[...y.querySelectorAll("[data-flow-node]")].forEach(I=>{S.observe(I)}),window.addEventListener("resize",_),()=>{g&&cancelAnimationFrame(g),S.disconnect(),window.removeEventListener("resize",_)}},[x]);const N=y=>{s==null||s(y)};return r.jsx("main",{className:"overview-shell",children:r.jsx("section",{className:"overview-dashboard",children:r.jsxs("section",{className:"overview-section",children:[r.jsxs("div",{className:"overview-section__header",children:[r.jsxs("div",{children:[r.jsx("span",{children:"REAL-TIME SYSTEM FLOW"}),r.jsx("h2",{children:"Systems"})]}),r.jsxs("p",{children:[x.length," ",x.length===1?"system":"systems"," ","connected"]})]}),a&&r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px",marginBottom:"18px",padding:"12px 16px",border:"1px solid rgba(69, 130, 153, 0.28)",background:"rgba(12, 37, 51, 0.72)"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{marginBottom:"4px",color:"#67cbd8",fontSize:"8px",fontWeight:800,letterSpacing:".12em"},children:"ACTIVE BMS PROJECT"}),r.jsx("div",{style:{color:"#e8f3f7",fontSize:"13px",fontWeight:700},children:a.projectName})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{color:"#9ab4c2",fontSize:"9px"},children:a.clientName}),r.jsxs("div",{style:{marginTop:"3px",color:"#718f9f",fontSize:"8px"},children:[a.projectCode,a.location?` • ${a.location}`:""]})]})]}),r.jsxs("div",{className:"overview-flow-canvas",ref:k,children:[r.jsxs("svg",{className:"overview-flow-lines","aria-hidden":"true",children:[r.jsx("defs",{children:r.jsx("marker",{id:"overview-flow-arrow",markerWidth:"6",markerHeight:"6",refX:"5.5",refY:"3",orient:"auto",markerUnits:"strokeWidth",children:r.jsx("path",{d:"M0,0 L6,3 L0,6 Z",className:"overview-flow-arrowhead"})})}),u.map((y,g)=>r.jsxs("g",{children:[r.jsx("path",{d:y.d,className:"overview-flow-path overview-flow-path--rail"}),r.jsx("path",{d:y.d,className:"overview-flow-path overview-flow-path--glow"}),r.jsx("path",{d:y.d,className:"overview-flow-path overview-flow-path--live",markerEnd:"url(#overview-flow-arrow)"})]},`${g}-${y.d}`))]}),r.jsx("div",{className:"flow-grid",children:x.map(y=>r.jsx("div",{className:"overview-flow-node","data-flow-node":!0,children:r.jsx(ah,{item:y,onOpen:N})},y.id))})]})]})})})}function _h(a){switch(a){case"incomer":return Lu;case"meter":return ht;case"feeder":return Pu;case"transformer":return Ge;case"kiosk":return Fo;case"busbar":case"busduct":return Bn;case"pcc-circuit":case"coupler":return Hn;case"ups":return Sn;case"raising-main":return Xt;case"wing":return Zt;case"dg":return Ve;case"hvac":return Vs;case"water-main":case"stp":case"wtp":case"tank":return Oe;case"fire-alarm":case"fire-fighting":case"fire-pump":return Gn;default:return lt}}function Ds(a,s){if(!a||!s)return[];const u=(p,k="")=>p!=null&&p!==""?`${p}${k}`:"--";switch(a.type){case"incomer":return[["Voltage",s.voltage===33?"33 kV":u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"meter":return[["Voltage",s.voltage===33?"33 kV":u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"feeder":return[["Voltage",s.voltage===33?"33 kV":u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"transformer":return[["Oil Temp",u(s.oilTemp,"°C")],["Winding Temp",u(s.windingTemp,"°C")],["Load",u(s.load,"%")],["Relay",u(s.buchholzRelay??s.relay)],["Status",u(s.status)]];case"kiosk":return[["Voltage",u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"busduct":case"busbar":return[["Temperature",u(s.temperature,"°C")],["Vibration",u(s.vibration," mm/s")],["Load",u(s.load,"%")],["Health",u(s.health)],["Status",u(s.status)]];case"pcc-circuit":case"coupler":return[["Voltage",u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"raising-main":return[["Voltage",u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"wing":return[["Voltage",u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]];case"dg":return[["Voltage",u(s.voltage," V")],["Amps",u(s.current??s.amps," A")],["PF",u(s.powerFactor)],["Load",u(s.load,"%")],["Status",u(s.status)]];case"ups":return[["Capacity",u(s.capacity)],["Input V",u(s.inputVoltage," V")],["Output V",u(s.outputVoltage," V")],["Load",u(s.load,"%")],["Battery",u(s.battery,"%")],["Input Hz",u(s.inputFrequency," Hz")],["Output Hz",u(s.outputFrequency," Hz")],["Battery V",u(s.batteryVoltage," V")],["Backup",u(s.backupTime," min")],["Mode",u(s.mode)],["Status",u(s.status)]];case"water-main":return[["Flow",u(s.flowRate," m³/h")],["Water",u(s.totalWater,"%")],["Pressure",u(s.pressure," bar")],["Health",u(s.health)],["Status",u(s.status)]];case"stp":case"wtp":return[["Inlet Flow",u(s.inletFlow," m³/h")],["Outlet Flow",u(s.outletFlow," m³/h")],["pH",u(s.ph)],["Turbidity",u(s.turbidity," NTU")],["Status",u(s.status)]];case"tank":return[["Level",u(s.level,"%")],["Volume",u(s.volume," m³")],["Inlet Flow",u(s.inletFlow," m³/h")],["Outlet Flow",u(s.outletFlow," m³/h")],["Status",u(s.status)]];case"fire-alarm":return[["Smoke",u(s.smokeDetectors)],["Heat",u(s.heatDetectors)],["Active Alarms",u(s.activeAlarms)],["Health",u(s.health)],["Status",u(s.status)]];case"fire-fighting":return[["Pressure",u(s.pressure," bar")],["Hydrant",u(s.hydrantNetwork)],["Main Valve",u(s.mainValve)],["Health",u(s.health)],["Status",u(s.status)]];case"fire-pump":return[["Voltage",u(s.voltage," V")],["Pressure",u(s.pressure," bar")],["Mode",u(s.mode)],["Health",u(s.health)],["Status",u(s.status)]];default:return[["Voltage",u(s.voltage," V")],["PF",u(s.powerFactor)],["Amps",u(s.current??s.amps," A")],["kVAh",u(s.kVAh)],["kWh",u(s.kWh)]]}}function bt({equipment:a,onOpen:s}){if(!a)return null;const u=_h(a.type),p=en[a.id],k=(p==null?void 0:p.fault)||(p==null?void 0:p.trip)||(p==null?void 0:p.warning),x=(p==null?void 0:p.status)||"OFFLINE",N=Ds(a,p);return r.jsxs("button",{type:"button",className:`eq-card ${k?"eq-card--alarm":""}`,onClick:()=>s==null?void 0:s({...a,telemetry:p}),children:[r.jsxs("div",{className:"eq-card__top",children:[r.jsx("span",{className:"eq-card__icon",children:r.jsx(u,{size:19})}),r.jsxs("span",{className:`eq-status ${x==="ON"?"eq-status--on":x==="STANDBY"?"eq-status--standby":"eq-status--off"}`,children:[r.jsx("i",{}),x]})]}),r.jsxs("div",{className:"eq-card__name",children:[r.jsx("h3",{children:a.name}),r.jsx("p",{children:a.label})]}),N.length>0&&r.jsxs("div",{className:"eq-card__hover","aria-hidden":"true",children:[r.jsx("span",{className:"eq-card__hover-title",children:"LIVE READINGS"}),r.jsx("div",{className:"eq-card__hover-grid",children:N.map(([y,g])=>r.jsxs("div",{children:[r.jsx("span",{children:y}),r.jsx("strong",{children:g})]},y))}),r.jsx("small",{children:"Click to open operational view"})]}),r.jsxs("div",{className:"eq-card__bottom",children:[r.jsxs("span",{children:[r.jsx("i",{}),(p==null?void 0:p.health)||"UNKNOWN"]}),r.jsx("strong",{children:"View Operation →"})]})]})}function Jt({title:a,subtitle:s,eyebrow:u,icon:p,onClick:k,live:x=!0,equipment:N}){const y=N?en[N.id]:null,g=N?Ds(N,y):[],_=r.jsxs(r.Fragment,{children:[u&&r.jsx("span",{className:"simple-card__eyebrow",children:u}),p&&r.jsx(p,{size:22}),r.jsx("h3",{children:a}),s&&r.jsx("p",{children:s}),x&&r.jsxs("strong",{children:[r.jsx("i",{})," LIVE"]}),g.length>0&&r.jsxs("div",{className:"simple-card__hover","aria-hidden":"true",children:[r.jsx("span",{children:"LIVE READINGS"}),r.jsx("div",{children:g.map(([S,I])=>r.jsxs("small",{children:[S,r.jsx("b",{children:I})]},S))}),r.jsx("em",{children:"Click to open operational view"})]})]});return k?r.jsx("button",{type:"button",className:"simple-card",onClick:k,children:_}):r.jsx("div",{className:"simple-card",children:_})}function Eh({topology:a,onOpenEquipment:s}){const u=(a==null?void 0:a.configuration)||{},p=u.voltageLevel||(a==null?void 0:a.voltageLevel)||"33kV",k=u.incomingCount??2,x=u.outgoingCount??1,N=u.meterCount??1,y=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],g=y.filter(P=>P.role==="incoming"||P.type==="incomer"),_=y.filter(P=>P.role==="outgoing"||P.type==="busbar"),S=y.filter(P=>P.role==="meter"||P.type==="meter"),I=205,M=28,Z=Math.max(g.length,_.length,S.length,1),z=Math.max(620,Z*I+Math.max(Z-1,0)*M);return r.jsxs("div",{className:"source-view",children:[r.jsx("style",{children:`
    /* =====================================================
       SOURCE FLOW

                       33kV SOURCE
                            │
                  ──────────┴──────────
                  │                   │
                INC1                INC2

                INC1 ─── OUT ─── INC2
                           │
                         METER

       Static engineering topology.
       No animated lines.
       No absolute card positioning.
    ===================================================== */

    .source-view {
      --wire: #2eb5c9;
      --wire-size: 2px;

      --source-card-width: 205px;
      --source-card-height: 132px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 3vw, 44px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;

      /* EquipmentCard reads this */
      --equipment-card-width:
        var(--source-card-width);
    }


    /* =====================================================
       PARENT SOURCE
    ===================================================== */

    .source-parent {
      position: relative;

      width:
        clamp(
          360px,
          34vw,
          460px
        );

      min-height: 112px;

      padding: 16px 24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border:
        1px solid #367fb1;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 3;
    }


    .source-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .source-parent svg {
      margin-bottom: 2px;

      color: #71d0e2;
    }


    .source-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .source-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 20px;
      font-weight: 700;

      line-height: 1.15;
    }


    .source-parent p {
      margin: 0;

      color: #adc7d7;

      font-size: 9px;
      font-weight: 600;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       PARENT → DISTRIBUTION BUS
    ===================================================== */

    .source-main-stem {
      width: var(--wire-size);
      height: 32px;

      flex: 0 0 32px;

      background: var(--wire);
    }


    /* =====================================================
       COMPLETE SOURCE TOPOLOGY AREA
    ===================================================== */

    .source-network {
      /*
       Keep the engineering topology readable.
       On smaller screens this section scrolls instead
       of destroying the card dimensions.
      */

      width: min(100%, 1080px);
      min-width: 760px;

      display: flex;
      flex-direction: column;

      align-items: stretch;

      position: relative;
    }

    .source-row-label {
      margin: 0 0 8px;
      color: #5d7686;
      font-size: 8px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: .14em;
      text-align: center;
    }

    .source-dynamic-section {
      width: 100%;
    }

    .source-dynamic-distribution {
      position: relative;
      width: 100%;
      height: 28px;
      min-height: 28px;
    }

    .source-dynamic-bus {
      position: absolute;
      top: 0;
      left: calc(100% / (var(--source-row-count) * 2));
      right: calc(100% / (var(--source-row-count) * 2));
      height: var(--wire-size);
      background: var(--wire);
    }

    .source-dynamic-bus--single {
      left: 50%;
      right: 50%;
    }

    .source-dynamic-lines {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns:
        repeat(
          var(--source-row-count),
          minmax(0, 1fr)
        );
      pointer-events: none;
    }

    .source-dynamic-line {
      position: relative;
    }

    .source-dynamic-line::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: var(--wire-size);
      transform: translateX(-50%);
      background: var(--wire);
    }

    .source-dynamic-grid {
      width: 100%;
      display: grid;
      grid-template-columns:
        repeat(
          var(--source-row-count),
          minmax(0, 1fr)
        );
      gap: 0;
      align-items: start;
    }

    .source-dynamic-slot {
      position: relative;
      min-width: 0;
      display: flex;
      justify-content: center;
    }

    .source-dynamic-slot::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 6px;
      height: 6px;
      box-sizing: border-box;
      border: 1px solid var(--wire);
      border-radius: 50%;
      background: #ffffff;
      transform: translate(-50%, -50%);
      z-index: 7;
    }

    .source-dynamic-slot > .eq-card {
      width: var(--source-card-width);
      min-width: var(--source-card-width);
      max-width: var(--source-card-width);
      height: var(--source-card-height);
      min-height: var(--source-card-height);
      max-height: var(--source-card-height);
      margin: 0;
    }

    .source-bus-stem {
      width: var(--wire-size);
      height: 32px;
      margin: 0 auto;
      background: var(--wire);
    }


    /* =====================================================
       TOP DISTRIBUTION

                ─────────────────
                │               │
              INC1            INC2

       The horizontal bus terminates exactly at the
       center line of INC1 and INC2.
    ===================================================== */

    .source-distribution {
      position: relative;

      width: 100%;
      height: 30px;

      flex: 0 0 30px;
    }


    .source-distribution__bus {
      position: absolute;

      top: 0;

      /*
       INC1 and INC2 are the first and third columns.
       Each column occupies one third of the grid.

       Their centers therefore sit at:
       16.666% and 83.333%
      */

      left: 16.6667%;
      right: 16.6667%;

      height: var(--wire-size);

      background: var(--wire);
    }


    .source-distribution__left,
    .source-distribution__right {
      position: absolute;

      top: 0;

      width: var(--wire-size);
      height: 30px;

      background: var(--wire);
    }


    .source-distribution__left {
      left: 16.6667%;

      transform:
        translateX(-50%);
    }


    .source-distribution__right {
      right: 16.6667%;

      transform:
        translateX(50%);
    }


    /* =====================================================
       EQUIPMENT ROW

          INC1          OUT          INC2

       Every equipment node receives exactly one third
       of the available topology width.

       Cards are centered inside their slot.
    ===================================================== */

    .source-equipment-row {
      position: relative;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          3,
          minmax(0, 1fr)
        );

      align-items: start;

      z-index: 2;
    }


    .source-slot {
      position: relative;

      min-width: 0;

      display: flex;
      flex-direction: column;

      align-items: center;

      z-index: 2;
    }


    /* =====================================================
       CARD WIDTH

       EquipmentCard remains reusable.
       Source controls its required size here.
    ===================================================== */

    .source-slot > .eq-card {
      width:
        var(--source-card-width);

      min-width:
        var(--source-card-width);

      max-width:
        var(--source-card-width);

      height:
        var(--source-card-height);

      min-height:
        var(--source-card-height);

      max-height:
        var(--source-card-height);

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       INC1 ───── OUT ───── INC2

       Critical improvement:

       Instead of top:61px / top:66px,
       the conductor is calculated from the actual
       card height.

       Card center:
       card height / 2
    ===================================================== */

    .source-card-bus {
      position: absolute;

      z-index: 1;

      top:
        calc(
          var(--source-card-height) / 2
        );

      left:
        calc(
          16.6667% +
          var(--source-card-width) / 2
        );

      right:
        calc(
          16.6667% +
          var(--source-card-width) / 2
        );

      height:
        var(--wire-size);

      background:
        var(--wire);

      pointer-events: none;
    }


    /* =====================================================
       OUT → METER
    ===================================================== */

    .source-meter-connector {
      width:
        var(--wire-size);

      height: 34px;

      flex: 0 0 34px;

      background:
        var(--wire);
    }


    .source-meter-slot {
      width:
        var(--source-card-width);

      display: flex;

      justify-content: center;

      position: relative;

      z-index: 5;
    }


    .source-meter-slot > .eq-card {
      width:
        var(--source-card-width);

      min-width:
        var(--source-card-width);

      max-width:
        var(--source-card-width);

      height:
        var(--source-card-height);

      min-height:
        var(--source-card-height);

      max-height:
        var(--source-card-height);
    }


    /* =====================================================
       CONNECTION TERMINALS

       Small terminal points make the topology look
       more like an engineering / SCADA diagram.
       They are static — no animation.
    ===================================================== */

    .source-slot--inc1::after,
    .source-slot--inc2::after {
      content: "";

      position: absolute;

      top: -3px;

      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       METER SECTION

       Meter stays directly under OUT.
    ===================================================== */

    .source-meter-area {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          3,
          minmax(0, 1fr)
        );
    }


    .source-meter-column {
      grid-column: 2;

      min-width: 0;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       PREVENT HOVER FROM BREAKING CONNECTORS
    ===================================================== */

    .source-view .eq-card:hover,
    .source-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .source-view {
        --source-card-width: 215px;
        --source-card-height: 138px;

        padding-left: 60px;
        padding-right: 60px;
      }


      .source-network {
        width:
          min(
            100%,
            1180px
          );
      }


      .source-parent {
        width: 470px;

        min-height: 116px;
      }


      .source-main-stem {
        height: 36px;

        flex-basis: 36px;
      }


      .source-distribution {
        height: 34px;

        flex-basis: 34px;
      }


      .source-distribution__left,
      .source-distribution__right {
        height: 34px;
      }


      .source-meter-connector {
        height: 38px;

        flex-basis: 38px;
      }
    }


    /* =====================================================
       STANDARD LAPTOP
       1366 / 1440 width
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .source-view {
        --source-card-width: 190px;
        --source-card-height: 128px;

        padding-top: 12px;
      }


      .source-network {
        width:
          min(
            100%,
            940px
          );
      }


      .source-parent {
        width: 400px;

        min-height: 100px;

        padding: 13px 20px;
      }


      .source-parent h2 {
        font-size: 18px;
      }


      .source-main-stem {
        height: 26px;

        flex-basis: 26px;
      }


      .source-distribution {
        height: 26px;

        flex-basis: 26px;
      }


      .source-distribution__left,
      .source-distribution__right {
        height: 26px;
      }


      .source-meter-connector {
        height: 26px;

        flex-basis: 26px;
      }
    }


    /* =====================================================
       TABLET / SMALL LAPTOP

       Do not crush the electrical topology.
       Allow horizontal scrolling instead.
    ===================================================== */

    @media (max-width: 1100px) {

      .source-view {
        --source-card-width: 180px;
        --source-card-height: 126px;

        align-items: flex-start;

        padding:
          14px 20px 24px;

        overflow-x: auto;
      }


      .source-parent {
        width: 380px;

        min-height: 100px;

        flex: 0 0 auto;

        align-self: center;
      }


      .source-main-stem {
        align-self: center;
      }


      .source-network {
        width: 820px;
        min-width: 820px;

        align-self: center;
      }
    }
  `}),r.jsxs("div",{className:"source-parent",children:[r.jsx(Ge,{size:27,strokeWidth:1.8}),r.jsx("span",{children:"CENTRAL CONTROL PANEL"}),r.jsxs("h2",{children:[p," SOURCE"]}),r.jsxs("p",{children:[k," INCOMING /"," ",x," OUTGOING",N>0?` / ${N} METER${N===1?"":"S"}`:""]})]}),r.jsx("div",{className:"source-main-stem"}),r.jsxs("div",{className:"source-network",style:{width:`${z}px`,minWidth:`${z}px`},children:[g.length>0&&r.jsxs("div",{className:"source-dynamic-section",style:{"--source-row-count":g.length},children:[r.jsx("div",{className:"source-row-label",children:"INCOMING SOURCES"}),r.jsxs("div",{className:"source-dynamic-distribution",children:[r.jsx("div",{className:`source-dynamic-bus ${g.length===1?"source-dynamic-bus--single":""}`}),r.jsx("div",{className:"source-dynamic-lines",children:g.map(P=>r.jsx("div",{className:"source-dynamic-line"},`line-${P.id}`))})]}),r.jsx("div",{className:"source-dynamic-grid",children:g.map(P=>r.jsx("div",{className:"source-dynamic-slot",children:r.jsx(bt,{equipment:P,onOpen:s})},P.id))})]}),g.length>0&&_.length>0&&r.jsx("div",{className:"source-bus-stem"}),_.length>0&&r.jsxs("div",{className:"source-dynamic-section",style:{"--source-row-count":_.length},children:[r.jsx("div",{className:"source-row-label",children:"MAIN BUS / OUTGOING"}),r.jsxs("div",{className:"source-dynamic-distribution",children:[r.jsx("div",{className:`source-dynamic-bus ${_.length===1?"source-dynamic-bus--single":""}`}),r.jsx("div",{className:"source-dynamic-lines",children:_.map(P=>r.jsx("div",{className:"source-dynamic-line"},`line-${P.id}`))})]}),r.jsx("div",{className:"source-dynamic-grid",children:_.map(P=>r.jsx("div",{className:"source-dynamic-slot",children:r.jsx(bt,{equipment:P,onOpen:s})},P.id))})]}),S.length>0&&_.length>0&&r.jsx("div",{className:"source-bus-stem"}),S.length>0&&r.jsxs("div",{className:"source-dynamic-section",style:{"--source-row-count":S.length},children:[r.jsx("div",{className:"source-row-label",children:"ENERGY METERING"}),r.jsxs("div",{className:"source-dynamic-distribution",children:[r.jsx("div",{className:`source-dynamic-bus ${S.length===1?"source-dynamic-bus--single":""}`}),r.jsx("div",{className:"source-dynamic-lines",children:S.map(P=>r.jsx("div",{className:"source-dynamic-line"},`line-${P.id}`))})]}),r.jsx("div",{className:"source-dynamic-grid",children:S.map(P=>r.jsx("div",{className:"source-dynamic-slot",children:r.jsx(bt,{equipment:P,onOpen:s})},P.id))})]})]})]})}function Th({topology:a,onOpenEquipment:s}){const p=((a==null?void 0:a.configuration)||{}).voltageLevel||(a==null?void 0:a.voltageLevel)||"33kV",k=Array.isArray(a==null?void 0:a.incomingFeeders)?a.incomingFeeders:a!=null&&a.incoming?[a.incoming]:[],x=Array.isArray(a==null?void 0:a.outgoingFeeders)?a.outgoingFeeders:Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],N=k.length,y=x.length,g=180,_=28,S=N>0?N*g+Math.max(N-1,0)*_:0,I=y>0?y*g+Math.max(y-1,0)*_:0,M=Math.max(760,S,I),Z=`
    .fd-feeder {
      width: 100%;
      min-width: 0;
    }


    /* =====================================================
       HEADER
    ===================================================== */

    .fd-feeder__header {
      display: flex;

      align-items: center;
      justify-content: space-between;

      gap: 20px;

      margin-bottom: 24px;

      padding-bottom: 14px;

      border-bottom:
        1px solid
        rgba(105, 150, 175, 0.16);
    }


    .fd-feeder__header-copy {
      min-width: 0;
    }


    .fd-feeder__eyebrow {
      display: block;

      margin-bottom: 5px;

      color: #6aaec3;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.15em;

      text-transform: uppercase;
    }


    .fd-feeder__title {
      margin: 0;

      color:
        var(
          --text-primary,
          #eaf4fb
        );

      font-size:
        clamp(
          20px,
          2vw,
          28px
        );

      font-weight: 700;

      letter-spacing: -0.02em;
    }


    .fd-feeder__subtitle {
      margin:
        6px 0 0;

      color:
        var(
          --text-secondary,
          #8499a9
        );

      font-size: 12px;
      font-weight: 500;
    }


    .fd-feeder__voltage {
      flex: 0 0 auto;

      padding:
        9px 14px;

      border:
        1px solid
        rgba(46, 181, 201, 0.34);

      border-radius: 4px;

      background:
        rgba(46, 181, 201, 0.06);

      color: #69c7d7;

      font-size: 12px;
      font-weight: 800;

      letter-spacing: 0.05em;
    }


    /* =====================================================
       SCROLLABLE ENGINEERING WORKSPACE
    ===================================================== */

    .fd-feeder__viewport {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding:
        8px 0 22px;
    }


    .fd-feeder__network {
      width:
        ${M}px;

      min-width:
        ${M}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: stretch;

      box-sizing: border-box;
    }


    /* =====================================================
       SECTION LABEL
    ===================================================== */

    .fd-feeder__section-label {
      display: block;

      margin-bottom: 12px;

      color: #718899;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.14em;

      text-align: center;

      text-transform: uppercase;
    }


    /* =====================================================
       INCOMING GRID
    ===================================================== */

    .fd-feeder__incoming-grid {
      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(N,1)},
          ${g}px
        );

      justify-content: center;

      column-gap:
        ${_}px;

      width: max-content;

      max-width: 100%;

      margin:
        0 auto;
    }


    .fd-feeder__incoming-column {
      width:
        ${g}px;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /*
      No card movement on hover.

      The conductor begins directly below the
      equipment card and remains aligned with its
      center.
    */

    .fd-feeder__incoming-drop {
      width: 2px;
      height: 34px;

      flex: 0 0 34px;

      background: #2eb5c9;
    }


    /* =====================================================
       INCOMING COLLECTION BUS
    ===================================================== */

    .fd-feeder__incoming-collector {
      position: relative;

      width:
        ${N<=1?g:S}px;

      height: 34px;

      margin:
        0 auto;
    }


    /*
      Horizontal collection bus runs exactly between
      the center of the first and last incoming cards.
    */

    .fd-feeder__incoming-horizontal {
      position: absolute;

      top: 0;

      left:
        ${N<=1,g/2}px;

      right:
        ${N<=1?g/2-2:g/2}px;

      height: 2px;

      background: #2eb5c9;
    }


    /*
      Center stem connects incoming collection bus
      to the main distribution bus.
    */

    .fd-feeder__incoming-center-stem {
      position: absolute;

      top: 0;
      left: 50%;

      width: 2px;
      height: 34px;

      transform:
        translateX(-50%);

      background: #2eb5c9;
    }


    /* =====================================================
       MAIN BUS
    ===================================================== */

    .fd-feeder__bus-label {
      margin:
        0 0 8px;

      color: #668092;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.14em;

      text-align: center;

      text-transform: uppercase;
    }


    .fd-feeder__main-bus-wrap {
      width:
        ${Math.max(I,g)}px;

      margin:
        0 auto;

      display: flex;

      justify-content: center;
    }


    /*
      Bus starts at the center of the first outgoing
      feeder and finishes at the center of the last
      outgoing feeder.

      Therefore no floating conductor endpoints.
    */

    .fd-feeder__main-bus {
      width:
        ${y<=1?2:Math.max(I-g,2)}px;

      height: 2px;

      background: #2eb5c9;
    }


    /* =====================================================
       OUTGOING GRID
    ===================================================== */

    .fd-feeder__outgoing-grid {
      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(y,1)},
          ${g}px
        );

      justify-content: center;

      column-gap:
        ${_}px;

      width: max-content;

      max-width: 100%;

      margin:
        0 auto;
    }


    .fd-feeder__outgoing-column {
      width:
        ${g}px;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    .fd-feeder__outgoing-drop {
      width: 2px;
      height: 36px;

      flex: 0 0 36px;

      background: #2eb5c9;
    }


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    .fd-feeder__empty {
      width:
        min(
          520px,
          calc(
            100% - 32px
          )
        );

      margin:
        28px auto;

      padding: 26px;

      box-sizing:
        border-box;

      border:
        1px solid
        rgba(
          110,
          140,
          160,
          0.22
        );

      border-radius: 4px;

      background:
        rgba(
          70,
          105,
          125,
          0.05
        );

      text-align: center;
    }


    .fd-feeder__empty strong {
      display: block;

      margin-bottom: 6px;

      color:
        var(
          --text-primary,
          #e2edf4
        );

      font-size: 14px;
    }


    .fd-feeder__empty span {
      color:
        var(
          --text-secondary,
          #8499a9
        );

      font-size: 11px;
    }


    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media (
      max-width: 900px
    ) {
      .fd-feeder__header {
        align-items:
          flex-start;

        flex-direction:
          column;
      }
    }
  `;return N<1||y<1?r.jsxs("div",{className:"fd-feeder",children:[r.jsx("style",{children:Z}),r.jsxs("div",{className:"fd-feeder__empty",children:[r.jsx("strong",{children:"Feeder configuration unavailable"}),r.jsx("span",{children:"At least one incoming feeder and one outgoing feeder are required."})]})]}):r.jsxs("div",{className:"fd-feeder",children:[r.jsx("style",{children:Z}),r.jsxs("div",{className:"fd-feeder__header",children:[r.jsxs("div",{className:"fd-feeder__header-copy",children:[r.jsx("span",{className:"fd-feeder__eyebrow",children:"ELECTRICAL DISTRIBUTION"}),r.jsxs("h2",{className:"fd-feeder__title",children:[p," FEEDER PANEL"]}),r.jsxs("p",{className:"fd-feeder__subtitle",children:[N," Incoming"," / ",y," Outgoing"," ","Feeder",y===1?"":"s"]})]}),r.jsx("div",{className:"fd-feeder__voltage",children:p})]}),r.jsx("div",{className:"fd-feeder__viewport",children:r.jsxs("div",{className:"fd-feeder__network",children:[r.jsx("span",{className:"fd-feeder__section-label",children:"INCOMING FEEDERS"}),r.jsx("div",{className:"fd-feeder__incoming-grid",children:k.map(z=>r.jsxs("div",{className:"fd-feeder__incoming-column",children:[r.jsx(bt,{equipment:z,onOpen:s}),r.jsx("div",{className:"fd-feeder__incoming-drop"})]},z.id))}),r.jsxs("div",{className:"fd-feeder__incoming-collector",children:[N>1&&r.jsx("div",{className:"fd-feeder__incoming-horizontal"}),r.jsx("div",{className:"fd-feeder__incoming-center-stem"})]}),r.jsxs("div",{className:"fd-feeder__bus-label",children:[p," DISTRIBUTION BUS"]}),r.jsx("div",{className:"fd-feeder__main-bus-wrap",children:r.jsx("div",{className:"fd-feeder__main-bus"})}),r.jsx("div",{className:"fd-feeder__outgoing-grid",children:x.map(z=>r.jsxs("div",{className:"fd-feeder__outgoing-column",children:[r.jsx("div",{className:"fd-feeder__outgoing-drop"}),r.jsx(bt,{equipment:z,onOpen:s})]},z.id))})]})})]})}function Ah({topology:a,onOpenEquipment:s}){const u=(a==null?void 0:a.configuration)||{},p=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],k=p.length,x=u.primaryVoltage||(a==null?void 0:a.primaryVoltage)||"33kV",N=u.secondaryVoltage||(a==null?void 0:a.secondaryVoltage)||"433V",y=172,g=28,_=k>0?k*y+Math.max(k-1,0)*g:y,S=Math.max(760,_),I=`
    /* =====================================================
       DYNAMIC TRANSFORMER FLOW

                   TRANSFORMER PLANT
                          │
                          │
              ────────────┼────────────
               │     │     │     │
              TR1   TR2   TR3   TR4 ...

       Number of transformers is controlled by the
       project configuration.

       Static BMS / electrical topology.
       No animation.
       No moving cards.
    ===================================================== */

    .transformer-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --transformer-card-width:
        ${y}px;

      --transformer-card-height:
        136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;

      overflow: hidden;

      --equipment-card-width:
        var(
          --transformer-card-width
        );
    }


    /* =====================================================
       HEADER / PARENT
    ===================================================== */

    .transformer-parent {
      position: relative;

      width:
        clamp(
          390px,
          34vw,
          470px
        );

      min-height: 108px;

      padding: 15px 24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border:
        1px solid #367fb1;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(
          11,
          44,
          75,
          .13
        );

      z-index: 5;
    }


    .transformer-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .transformer-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .transformer-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .transformer-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .transformer-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       SCROLLABLE WORKSPACE

       Parent remains centered.

       Only the electrical transformer topology needs
       horizontal scrolling when the client configures
       a large transformer count.
    ===================================================== */

    .transformer-scroll {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 12px;
    }


    .transformer-scroll-inner {
      width:
        ${S}px;

      min-width:
        ${S}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       PARENT → BUS
    ===================================================== */

    .transformer-stem {
      width:
        var(--wire-size);

      height: 34px;

      min-height: 34px;

      flex: 0 0 34px;

      background:
        var(--wire);
    }


    /* =====================================================
       NETWORK
    ===================================================== */

    .transformer-network {
      position: relative;

      width:
        ${_}px;

      min-width:
        ${_}px;

      margin: 0 auto;
    }


    /* =====================================================
       DISTRIBUTION BUS

       The horizontal line begins at the exact center
       of the first transformer and ends at the exact
       center of the last transformer.
    ===================================================== */

    .transformer-distribution {
      position: relative;

      width: 100%;

      height: 36px;

      min-height: 36px;
    }


    .transformer-bus {
      position: absolute;

      top: 0;

      left:
        ${y/2}px;

      right:
        ${y/2}px;

      height:
        var(--wire-size);

      background:
        var(--wire);

      pointer-events: none;
    }


    /*
      When there is only one transformer, the horizontal
      bus does not need to extend anywhere.

      This small center terminal keeps the main stem and
      branch electrically aligned.
    */

    .transformer-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       DYNAMIC VERTICAL BRANCHES

       Uses exactly the same width, card width and gap
       as the equipment row below.
    ===================================================== */

    .transformer-branch-lines {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 36px;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(k,1)},
          ${y}px
        );

      column-gap:
        ${g}px;

      pointer-events: none;
    }


    .transformer-line-slot {
      position: relative;

      width:
        ${y}px;

      height: 36px;
    }


    .transformer-line-slot::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width:
        var(--wire-size);

      background:
        var(--wire);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       TRANSFORMER CARDS
    ===================================================== */

    .transformer-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(k,1)},
          ${y}px
        );

      column-gap:
        ${g}px;

      align-items: start;

      margin: 0;
      padding: 0;

      position: relative;

      z-index: 3;
    }


    .transformer-branch {
      position: relative;

      width:
        ${y}px;

      min-width:
        ${y}px;

      display: flex;

      justify-content: center;
      align-items: flex-start;
    }


    .transformer-branch >
    .eq-card {
      width:
        var(
          --transformer-card-width
        );

      min-width:
        var(
          --transformer-card-width
        );

      max-width:
        var(
          --transformer-card-width
        );

      height:
        var(
          --transformer-card-height
        );

      min-height:
        var(
          --transformer-card-height
        );

      max-height:
        var(
          --transformer-card-height
        );

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       CONNECTION TERMINAL
    ===================================================== */

    .transformer-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing:
        border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background:
        var(
          --page-bg,
          #07131e
        );

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       IMPORTANT:
       DO NOT MOVE CARDS ON HOVER
    ===================================================== */

    .transformer-view
    .eq-card:hover,

    .transformer-view
    .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    .transformer-empty {
      width:
        min(
          520px,
          calc(
            100% - 32px
          )
        );

      margin: 30px auto;

      padding: 25px;

      box-sizing:
        border-box;

      border:
        1px solid
        rgba(
          80,
          130,
          160,
          .28
        );

      border-radius: 4px;

      color: #7893a4;

      background:
        rgba(
          40,
          80,
          105,
          .06
        );

      text-align: center;

      font-size: 11px;
    }


    .transformer-empty strong {
      display: block;

      margin-bottom: 6px;

      color: #dceaf1;

      font-size: 14px;
    }


    /* =====================================================
       LAPTOP
    ===================================================== */

    @media (
      max-width: 1200px
    ) {

      .transformer-view {
        padding-left: 20px;
        padding-right: 20px;
      }


      .transformer-parent {
        width: 390px;

        min-height: 98px;
      }
    }


    /* =====================================================
       MOBILE / TABLET
    ===================================================== */

    @media (
      max-width: 700px
    ) {

      .transformer-view {
        padding:
          16px
          14px
          24px;
      }


      .transformer-parent {
        width:
          min(
            100%,
            380px
          );

        min-height: 96px;
      }


      .transformer-parent h2 {
        font-size: 16px;
      }
    }
  `;return k===0?r.jsxs("div",{className:"transformer-view",children:[r.jsx("style",{children:I}),r.jsxs("div",{className:"transformer-empty",children:[r.jsx("strong",{children:"No transformers configured"}),"Configure at least one transformer for this project."]})]}):r.jsxs("div",{className:"transformer-view",children:[r.jsx("style",{children:I}),r.jsxs("div",{className:"transformer-parent",children:[r.jsx(Ge,{size:26,strokeWidth:1.8}),r.jsx("span",{children:"STEP-DOWN SUBSTATION"}),r.jsxs("h2",{children:[x," / ",N," ","TRANSFORMERS"]}),r.jsxs("p",{children:[k," ","TRANSFORMER",k===1?"":"S"," ","· DISTRIBUTION"]})]}),r.jsx("div",{className:"transformer-scroll",children:r.jsxs("div",{className:"transformer-scroll-inner",children:[r.jsx("div",{className:"transformer-stem"}),r.jsxs("div",{className:"transformer-network",children:[r.jsxs("div",{className:"transformer-distribution",children:[r.jsx("div",{className:`transformer-bus ${k===1?"transformer-bus--single":""}`}),r.jsx("div",{className:"transformer-branch-lines",children:p.map(M=>r.jsx("div",{className:"transformer-line-slot"},`line-${M.id}`))})]}),r.jsx("div",{className:"transformer-grid",children:p.map(M=>r.jsx("div",{className:"transformer-branch",children:r.jsx(bt,{equipment:M,onOpen:s})},M.id))})]})]})})]})}function Rh({topology:a,onOpenEquipment:s}){const u=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],p=u.length,x=((a==null?void 0:a.configuration)||{}).voltage||"433V",N=172,y=0,g=p>0?p*N+Math.max(p-1,0)*y:N,_=Math.max(760,g),S=`
    /* =====================================================
       LT KIOSK FLOW

                      LT KIOSKS
                          │
                          │
        ┌────────┬────────┬┴───────┬────────┬────────┐
        │        │        │        │        │        │
     KIOSK-1  KIOSK-2  KIOSK-3  KIOSK-4  ...

       Static electrical distribution topology.
    ===================================================== */

    .kiosk-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --kiosk-card-width: ${N}px;
      --kiosk-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      overflow: hidden;

      /*
       Shared EquipmentCard uses this value.
      */
      --equipment-card-width:
        var(--kiosk-card-width);
    }


    .kiosk-scroll {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 12px;
    }


    .kiosk-scroll-inner {
      width:
        ${_}px;

      min-width:
        ${_}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       PARENT LT KIOSK PANEL
    ===================================================== */

    .kiosk-parent {
      position: relative;

      width:
        clamp(
          380px,
          32vw,
          440px
        );

      min-height: 104px;

      padding: 14px 22px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border: 1px solid #367fb1;
      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    /* TOP ACCENT */

    .kiosk-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .kiosk-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .kiosk-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .kiosk-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .kiosk-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       PARENT → DISTRIBUTION BUS
    ===================================================== */

    .kiosk-stem {
      width: var(--wire-size);

      height: 34px;
      min-height: 34px;

      flex: 0 0 34px;

      background: var(--wire);
    }


    /* =====================================================
       COMPLETE LT KIOSK NETWORK
    ===================================================== */

    .kiosk-network {
      position: relative;

      width:
        ${g}px;

      min-width:
        ${g}px;

      margin: 0 auto;
    }


    /* =====================================================
       BUS + BRANCH AREA
    ===================================================== */

    .kiosk-distribution {
      position: relative;

      width: 100%;

      height: 34px;
      min-height: 34px;
    }


    /* =====================================================
       HORIZONTAL BUS

       The horizontal bus starts at the center of the
       first kiosk and ends at the center of the last.
    ===================================================== */

    .kiosk-bus {
      position: absolute;

      top: 0;

      left: ${N/2}px;
      right: ${N/2}px;

      height: var(--wire-size);

      background: var(--wire);

      pointer-events: none;
    }


    .kiosk-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       DYNAMIC VERTICAL DROPS

       This grid is identical to the equipment grid.
    ===================================================== */

    .kiosk-branch-lines {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 34px;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${N}px
        );

      column-gap:
        ${y}px;

      pointer-events: none;
    }


    .kiosk-line-slot {
      position: relative;

      width: 100%;
      min-width: 0;

      height: 100%;
    }


    .kiosk-line-slot::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      background: var(--wire);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       EQUIPMENT GRID

       Same count-based geometry as connector grid.
    ===================================================== */

    .kiosk-grid {
      position: relative;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${N}px
        );

      align-items: start;

      column-gap:
        ${y}px;

      margin: 0;
      padding: 0;

      z-index: 3;
    }


    .kiosk-branch {
      position: relative;

      width: 100%;
      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       MEDIUM EQUIPMENT CARDS
    ===================================================== */

    .kiosk-branch > .eq-card {
      width:
        var(--kiosk-card-width);

      min-width:
        var(--kiosk-card-width);

      max-width:
        var(--kiosk-card-width);

      height:
        var(--kiosk-card-height);

      min-height:
        var(--kiosk-card-height);

      max-height:
        var(--kiosk-card-height);

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       CONNECTION TERMINAL

       Small fixed point where branch meets card.
    ===================================================== */

    .kiosk-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       CARD MUST NOT MOVE
       Keeps flow lines connected.
    ===================================================== */

    .kiosk-view .eq-card:hover,
    .kiosk-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
       1500px+
    ===================================================== */

    @media (min-width: 1500px) {

      .kiosk-view {
        --kiosk-card-height: 142px;

        padding-left: 50px;
        padding-right: 50px;
      }


      .kiosk-parent {
        width: 450px;
        min-height: 110px;
      }


      .kiosk-stem {
        height: 38px;
        min-height: 38px;

        flex-basis: 38px;
      }


      .kiosk-distribution {
        height: 38px;
        min-height: 38px;
      }


      .kiosk-branch-lines {
        height: 38px;
      }
    }


    /* =====================================================
       STANDARD LAPTOP
       1201px - 1499px
    ===================================================== */

    @media (
      min-width: 1201px
    ) and (
      max-width: 1499px
    ) {

      .kiosk-view {
        --kiosk-card-height: 136px;

        padding-left: 24px;
        padding-right: 24px;
      }


      .kiosk-parent {
        width: 400px;
        min-height: 98px;

        padding: 13px 20px;
      }


      .kiosk-parent h2 {
        font-size: 18px;
      }


      .kiosk-stem {
        height: 30px;
        min-height: 30px;

        flex-basis: 30px;
      }


      .kiosk-distribution {
        height: 30px;
        min-height: 30px;
      }


      .kiosk-branch-lines {
        height: 30px;
      }
    }


    /* =====================================================
       SMALL LAPTOP
       901px - 1200px
    ===================================================== */

    @media (
      min-width: 901px
    ) and (
      max-width: 1200px
    ) {

      .kiosk-view {
        --kiosk-card-height: 132px;

        align-items: flex-start;

        padding-left: 20px;
        padding-right: 20px;
      }


      .kiosk-parent {
        width: 390px;
        min-height: 96px;

        align-self: center;
      }


      .kiosk-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

        align-self: center;
      }


      .kiosk-distribution {
        height: 28px;
        min-height: 28px;
      }


      .kiosk-branch-lines {
        height: 28px;
      }
    }


    /* =====================================================
       TABLET / MOBILE

       Don't destroy the topology by making cards tiny.
       Allow horizontal scrolling.
    ===================================================== */

    @media (max-width: 900px) {

      .kiosk-view {
        --kiosk-card-height: 132px;

        align-items: flex-start;
        justify-content: flex-start;

        padding:
          16px
          18px
          24px;

      }


      .kiosk-parent {
        width: 380px;
        min-height: 96px;

        align-self: center;
      }


      .kiosk-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

      }


      .kiosk-distribution {
        height: 28px;
        min-height: 28px;
      }


      .kiosk-branch-lines {
        height: 28px;
      }
    }
  `;return r.jsxs("div",{className:"kiosk-view",children:[r.jsx("style",{children:S}),r.jsxs("div",{className:"kiosk-parent",children:[r.jsx(Fo,{size:26,strokeWidth:1.8}),r.jsx("span",{children:"LOW TENSION DISTRIBUTION"}),r.jsx("h2",{children:"LT KIOSKS"}),r.jsxs("p",{children:[x," ","DISTRIBUTION"]})]}),r.jsx("div",{className:"kiosk-scroll",children:r.jsxs("div",{className:"kiosk-scroll-inner",children:[r.jsx("div",{className:"kiosk-stem"}),r.jsxs("div",{className:"kiosk-network",children:[r.jsxs("div",{className:"kiosk-distribution",children:[r.jsx("div",{className:`kiosk-bus ${p===1?"kiosk-bus--single":""}`}),r.jsx("div",{className:"kiosk-branch-lines",children:u.map(I=>r.jsx("div",{className:"kiosk-line-slot"},`line-${I.id}`))})]}),r.jsx("div",{className:"kiosk-grid",children:u.map(I=>r.jsx("div",{className:"kiosk-branch",children:r.jsx(bt,{equipment:I,onOpen:s})},I.id))})]})]})})]})}function zh({topology:a,onOpenEquipment:s}){const u=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],p=u.length,k=172,x=0,N=p>0?p*k+Math.max(p-1,0)*x:k,y=Math.max(760,N),g=`
    /* =====================================================
       BUSDUCT FLOW

                     LT BUSDUCTS
                          │
                          │
        ┌────────┬────────┬┴───────┬────────┬────────┐
        │        │        │        │        │        │
      BUS-1    BUS-2    BUS-3    BUS-4    ...

       Static BMS electrical distribution topology.
    ===================================================== */

    .busduct-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --busduct-card-width: ${k}px;
      --busduct-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      overflow: hidden;

      --equipment-card-width:
        var(--busduct-card-width);
    }


    .busduct-scroll {
      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      padding-bottom: 12px;
    }


    .busduct-scroll-inner {
      width:
        ${y}px;

      min-width:
        ${y}px;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    /* =====================================================
       BUSDUCT PARENT
    ===================================================== */

    .busduct-parent {
      position: relative;

      width:
        clamp(
          380px,
          32vw,
          440px
        );

      min-height: 104px;

      padding: 14px 22px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      border: 1px solid #367fb1;
      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    /* TOP ACCENT */

    .busduct-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .busduct-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .busduct-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .busduct-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .busduct-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;

      line-height: 1.2;

      letter-spacing: .03em;
    }


    /* =====================================================
       PARENT → BUS
    ===================================================== */

    .busduct-stem {
      width: var(--wire-size);

      height: 34px;
      min-height: 34px;

      flex: 0 0 34px;

      background: var(--wire);
    }


    /* =====================================================
       COMPLETE BUSDUCT NETWORK
    ===================================================== */

    .busduct-network {
      position: relative;

      width:
        ${N}px;

      min-width:
        ${N}px;

      margin: 0 auto;
    }


    /* =====================================================
       DISTRIBUTION AREA
    ===================================================== */

    .busduct-distribution {
      position: relative;

      width: 100%;

      height: 34px;
      min-height: 34px;
    }


    /* =====================================================
       HORIZONTAL BUS

       The bus starts at the center of the first card
       and finishes at the center of the last card.
    ===================================================== */

    .busduct-bus {
      position: absolute;

      top: 0;

      left: ${k/2}px;
      right: ${k/2}px;

      height: var(--wire-size);

      background: var(--wire);

      pointer-events: none;
    }


    .busduct-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       DYNAMIC VERTICAL DROPS

       Uses exactly the same grid as cards.
    ===================================================== */

    .busduct-branch-lines {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 34px;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${k}px
        );

      column-gap:
        ${x}px;

      pointer-events: none;
    }


    .busduct-line-slot {
      position: relative;

      width: 100%;
      min-width: 0;

      height: 100%;
    }


    .busduct-line-slot::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      background: var(--wire);

      transform:
        translateX(-50%);
    }


    /* =====================================================
       BUSDUCT EQUIPMENT GRID

       Same count-based columns as connector grid.
    ===================================================== */

    .busduct-grid {
      position: relative;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${k}px
        );

      align-items: start;

      column-gap:
        ${x}px;

      margin: 0;
      padding: 0;

      z-index: 3;
    }


    .busduct-branch {
      position: relative;

      width: 100%;
      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       MEDIUM BUSDUCT CARDS
    ===================================================== */

    .busduct-branch > .eq-card {
      width:
        var(--busduct-card-width);

      min-width:
        var(--busduct-card-width);

      max-width:
        var(--busduct-card-width);

      height:
        var(--busduct-card-height);

      min-height:
        var(--busduct-card-height);

      max-height:
        var(--busduct-card-height);

      position: relative;

      z-index: 5;
    }


    /* =====================================================
       CONNECTION POINT
    ===================================================== */

    .busduct-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    /* =====================================================
       KEEP FLOW ATTACHED DURING HOVER
    ===================================================== */

    .busduct-view .eq-card:hover,
    .busduct-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .busduct-view {
        --busduct-card-height: 142px;

        padding-left: 50px;
        padding-right: 50px;
      }


      .busduct-parent {
        width: 450px;
        min-height: 110px;
      }


      .busduct-stem {
        height: 38px;
        min-height: 38px;

        flex-basis: 38px;
      }


      .busduct-distribution {
        height: 38px;
        min-height: 38px;
      }


      .busduct-branch-lines {
        height: 38px;
      }
    }


    /* =====================================================
       STANDARD LAPTOP
       1201px - 1499px
    ===================================================== */

    @media (
      min-width: 1201px
    ) and (
      max-width: 1499px
    ) {

      .busduct-view {
        --busduct-card-height: 136px;

        padding-left: 24px;
        padding-right: 24px;
      }


      .busduct-parent {
        width: 400px;
        min-height: 98px;

        padding: 13px 20px;
      }


      .busduct-parent h2 {
        font-size: 18px;
      }


      .busduct-stem {
        height: 30px;
        min-height: 30px;

        flex-basis: 30px;
      }


      .busduct-distribution {
        height: 30px;
        min-height: 30px;
      }


      .busduct-branch-lines {
        height: 30px;
      }
    }


    /* =====================================================
       SMALL LAPTOP
       901px - 1200px
    ===================================================== */

    @media (
      min-width: 901px
    ) and (
      max-width: 1200px
    ) {

      .busduct-view {
        --busduct-card-height: 132px;

        align-items: flex-start;

        padding-left: 20px;
        padding-right: 20px;
      }


      .busduct-parent {
        width: 390px;
        min-height: 96px;

        align-self: center;
      }


      .busduct-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

        align-self: center;
      }


      .busduct-distribution {
        height: 28px;
        min-height: 28px;
      }


      .busduct-branch-lines {
        height: 28px;
      }
    }


    /* =====================================================
       TABLET / MOBILE

       Preserve readable cards and topology.
    ===================================================== */

    @media (max-width: 900px) {

      .busduct-view {
        --busduct-card-height: 132px;

        align-items: flex-start;
        justify-content: flex-start;

        padding:
          16px
          18px
          24px;

      }


      .busduct-parent {
        width: 380px;
        min-height: 96px;

        align-self: center;
      }


      .busduct-stem {
        height: 28px;
        min-height: 28px;

        flex-basis: 28px;

      }


      .busduct-distribution {
        height: 28px;
        min-height: 28px;
      }


      .busduct-branch-lines {
        height: 28px;
      }
    }
  `;return r.jsxs("div",{className:"busduct-view",children:[r.jsx("style",{children:g}),r.jsxs("div",{className:"busduct-parent",children:[r.jsx(Bn,{size:26,strokeWidth:1.8}),r.jsx("span",{children:"LT POWER DISTRIBUTION"}),r.jsx("h2",{children:"LT BUSDUCTS"}),r.jsx("p",{children:"433 V BUSDUCT / BUSBAR"})]}),r.jsx("div",{className:"busduct-scroll",children:r.jsxs("div",{className:"busduct-scroll-inner",children:[r.jsx("div",{className:"busduct-stem"}),r.jsxs("div",{className:"busduct-network",children:[r.jsxs("div",{className:"busduct-distribution",children:[r.jsx("div",{className:`busduct-bus ${p===1?"busduct-bus--single":""}`}),r.jsx("div",{className:"busduct-branch-lines",children:u.map(_=>r.jsx("div",{className:"busduct-line-slot"},`line-${_.id}`))})]}),r.jsx("div",{className:"busduct-grid",children:u.map(_=>r.jsx("div",{className:"busduct-branch",children:r.jsx(bt,{equipment:_,onOpen:s})},_.id))})]})]})})]})}const Eu={"pcc-1":"Wing A","pcc-2":"Wing B","pcc-3":"Chillers","pcc-4":"Chillers"};function Ih({topology:a,onOpenEquipment:s}){const[u,p]=re.useState(null),k=Array.isArray(a==null?void 0:a.panels)?a.panels:[],x=k.length,N=210,y=0,g=x>0?x*N+Math.max(x-1,0)*y:N,_=Math.max(520,g),S=k.find(F=>F.id===u),I=`
    /* =====================================================
       PCC ROOT
    ===================================================== */

    .pcc-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 2.5vw, 40px)
        24px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       PCC OVERVIEW PARENT
    ===================================================== */

    .pcc-parent {
      position: relative;

      width:
        clamp(
          380px,
          32vw,
          440px
        );

      min-height: 104px;

      margin: 0 auto;

      padding: 14px 22px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #367fb1;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    .pcc-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .pcc-parent svg {
      margin-bottom: 2px;

      color: #72d1e2;
    }


    .pcc-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .pcc-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;
    }


    .pcc-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;
    }


    /* =====================================================
       PCC PARENT → MAIN BUS
    ===================================================== */

    .pcc-stem {
      width:
        var(--wire-size);

      height: 34px;
      min-height: 34px;

      margin: 0 auto;

      background:
        var(--wire);
    }


    /* =====================================================
       PCC OVERVIEW NETWORK
    ===================================================== */

    .pcc-overview-network {
      width:
        ${_}px;

      min-width:
        ${_}px;

      margin: 0 auto;
    }


    .pcc-distribution {
      position: relative;

      width: 100%;

      height: 34px;
      min-height: 34px;
    }


    /*
       The overview bus starts at the first panel
       center and ends at the final panel center.
    */

    .pcc-bus {
      position: absolute;

      top: 0;

      left:
        ${N/2}px;

      right:
        ${N/2}px;

      height:
        var(--wire-size);

      background:
        var(--wire);
    }


    .pcc-bus--single {
      left: 50%;
      right: auto;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);
    }


    .pcc-overview-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(x,1)},
          ${N}px
        );

      column-gap:
        ${y}px;

      pointer-events: none;
    }


    .pcc-overview-line {
      position: relative;
    }


    .pcc-overview-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);

      background:
        var(--wire);
    }


    /* =====================================================
       PCC OVERVIEW CARDS
    ===================================================== */

    .pcc-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(x,1)},
          ${N}px
        );

      column-gap:
        ${y}px;

      align-items: start;
    }


    .pcc-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    .pcc-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 7;
    }


    .pcc-panel-card {
      position: relative;

      width: 210px;
      min-width: 210px;
      max-width: 210px;

      height: 136px;

      margin: 0;

      padding: 13px 12px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #327ba2;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #174766,
          #123b58 55%,
          #0e3049
        );

      box-shadow:
        0 5px 14px
        rgba(10, 39, 59, .13);

      cursor: pointer;

      transition:
        border-color .15s ease,
        box-shadow .15s ease;
    }


    .pcc-panel-card:hover,
    .pcc-panel-card:focus-visible {
      transform: none;

      outline: none;

      border-color: #59bad0;

      box-shadow:
        0 7px 18px
        rgba(10, 42, 64, .18);
    }


    .pcc-panel-card svg {
      margin-bottom: 2px;

      color: #71d0e2;
    }


    .pcc-panel-card span {
      color: #87bddd;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .12em;
    }


    .pcc-panel-card h3 {
      margin:
        5px 0 2px;

      color: #ffffff;

      font-size: 16px;
      font-weight: 700;
    }


    .pcc-panel-card p {
      margin: 0;

      color: #b5cede;

      font-size: 9px;
    }


    .pcc-panel-card strong {
      margin-top: 6px;

      color: #79dfb7;

      font-size: 8px;
      font-weight: 700;
    }


    /* =====================================================
       INTERNAL PCC
    ===================================================== */

    .pcc-internal {
      width: 100%;
      min-width: 0;
    }


    .pcc-internal-head {
      width: 100%;

      margin-bottom: 20px;

      display: flex;

      align-items: center;

      gap: 14px;
    }


    .pcc-internal-head button {
      height: 36px;

      padding:
        0 12px;

      display:
        inline-flex;

      align-items: center;

      gap: 6px;

      border:
        1px solid #426780;

      border-radius: 5px;

      color: #dce9f2;

      background: #173b56;

      cursor: pointer;
    }


    .pcc-internal-head button:hover {
      background: #19445f;

      border-color: #4da8bd;
    }


    .pcc-internal-head span {
      color: #748b9c;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .13em;
    }


    .pcc-internal-head h2 {
      margin:
        2px 0;

      color: #17354b;

      font-size: 21px;
      font-weight: 700;
    }


    .pcc-internal-head p {
      margin: 0;

      color: #718492;

      font-size: 9px;
    }


    /* =====================================================
       COMPLETE PCC SWITCHBOARD AREA

       Lineup and Utility → UPS geometry share
       the same width.

       This is important because the Utility
       connections must remain aligned with the
       actual switchboard cells.
    ===================================================== */

    .pcc-switchboard-scroll {
      width: 100%;

      overflow-x: auto;

      overflow-y: visible;

      padding-bottom: 8px;
    }


    .pcc-switchboard {
      width: 100%;

      min-width: 1120px;

      position: relative;

      margin: 0 auto;
    }


    .pcc-empty-panel {
      width:
        min(
          520px,
          calc(100% - 32px)
        );

      margin: 30px auto;

      padding: 24px;

      box-sizing:
        border-box;

      border:
        1px solid
        rgba(
          80,
          130,
          160,
          .28
        );

      border-radius: 4px;

      color: #7893a4;

      background:
        rgba(
          40,
          80,
          105,
          .06
        );

      text-align: center;

      font-size: 11px;
    }


    .pcc-empty-panel strong {
      display: block;

      margin-bottom: 6px;

      color: #dceaf1;

      font-size: 14px;
    }


    /* =====================================================
       PCC LINEUP
    ===================================================== */

    .pcc-lineup {
      --pcc-count: 14;

      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--pcc-count),
          minmax(80px, 1fr)
        );

      gap: 0;

      box-sizing: border-box;

      border:
        2px solid #1e6f9e;

      background: #0e2c4e;
    }


    /* =====================================================
       PCC CIRCUIT
    ===================================================== */

    .pcc-cell {
      position: relative;

      min-width: 0;

      height: 122px;

      margin: 0;

      padding:
        9px 5px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border: 0;

      border-right:
        1px solid
        rgba(
          93,
          145,
          177,
          .46
        );

      color: #ffffff;

      background: #102f54;

      cursor: pointer;

      transition:
        background .14s ease;
    }


    .pcc-cell:last-child {
      border-right: 0;
    }


    .pcc-cell--incoming {
      background: #123a5d;
    }


    .pcc-cell--outgoing {
      background: #102f54;
    }


    .pcc-cell--coupler {
      background: #3d3828;
    }


    .pcc-cell:hover,
    .pcc-cell:focus-visible {
      transform: none;

      outline: none;

      background: #17486b;
    }


    .pcc-cell--coupler:hover,
    .pcc-cell--coupler:focus-visible {
      background: #51492f;
    }


    .pcc-cell > svg {
      flex:
        0 0 auto;

      color: #6ecbdd;
    }


    .pcc-cell > small {
      color: #7fa9c4;

      font-size: 6px;
      font-weight: 700;

      line-height: 1;

      letter-spacing: .04em;
    }


    .pcc-cell > strong {
      width: 100%;

      margin:
        4px 0 2px;

      overflow: hidden;

      color: #ffffff;

      font-size: 8px;
      font-weight: 700;

      line-height: 11px;

      text-align: center;

      display:
        -webkit-box;

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }


    .pcc-cell > em {
      color: #79dfb7;

      font-size: 7px;
      font-weight: 700;

      line-height: 1;

      font-style: normal;
    }


    /* =====================================================
       PCC CIRCUIT HOVER
    ===================================================== */

    .pcc-cell-readings {
      position: absolute;

      inset: 0;

      z-index: 20;

      padding:
        8px 7px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      overflow: hidden;

      background:
        linear-gradient(
          145deg,
          #123f5d,
          #0d324c
        );

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .13s ease,
        visibility .13s ease;
    }


    .pcc-cell:hover
    .pcc-cell-readings,

    .pcc-cell:focus-visible
    .pcc-cell-readings {
      opacity: 1;

      visibility: visible;
    }


    .pcc-cell-readings-title {
      height: 15px;
      min-height: 15px;

      margin-bottom: 3px;

      color: #73d0e1;

      font-size: 6px;
      font-weight: 800;

      line-height: 15px;

      text-align: left;

      letter-spacing: .08em;

      white-space: nowrap;
    }


    .pcc-cell-readings-grid {
      min-height: 0;

      flex: 1;

      display: grid;

      grid-template-rows:
        repeat(
          5,
          minmax(0, 1fr)
        );

      overflow: hidden;
    }


    .pcc-cell-reading {
      min-height: 0;

      display: grid;

      grid-template-columns:
        minmax(0, 1fr)
        minmax(28px, auto);

      align-items: center;

      column-gap: 4px;
    }


    .pcc-cell-reading span {
      min-width: 0;

      overflow: hidden;

      color: #9eb9c7;

      font-size: 6px;
      font-weight: 550;

      text-align: left;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    .pcc-cell-reading strong {
      min-width: 0;

      margin: 0;

      overflow: hidden;

      color: #ffffff;

      font-size: 6.5px;
      font-weight: 700;

      text-align: right;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    /* =====================================================
       UTILITY → UPS SUPPLY
       Exact PCC1/PCC2 14-cell switchboard geometry.

       Utility 1 = cell 6
       Utility 2 = cell 13
       UPS take-off = exact midpoint between both utilities.
    ===================================================== */

    .pcc-utility-supply {
      --utility-row-height: 48px;
      position: relative;
      width: 100%;
      height: var(--utility-row-height);
      display: grid;
      grid-template-columns: repeat(14, minmax(80px, 1fr));
      pointer-events: none;
    }

    .pcc-utility-one {
      position: relative;
      grid-column: 6;
      height: 100%;
    }

    .pcc-utility-one::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: var(--wire-size);
      height: 18px;
      transform: translateX(-50%);
      background: var(--wire);
    }

    .pcc-utility-two {
      position: relative;
      grid-column: 13;
      height: 100%;
    }

    .pcc-utility-two::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: var(--wire-size);
      height: 18px;
      transform: translateX(-50%);
      background: var(--wire);
    }

    .pcc-utility-horizontal {
      position: absolute;
      top: 16px;
      left: calc((100% / 14) * 5.5);
      right: calc(100% - ((100% / 14) * 12.5));
      height: var(--wire-size);
      background: var(--wire);
    }

    .pcc-utility-to-ups {
      position: absolute;
      top: 16px;
      left: calc((100% / 14) * 9);
      width: var(--wire-size);
      height: calc(var(--utility-row-height) - 16px);
      transform: translateX(-50%);
      background: var(--wire);
    }


    /* =====================================================
       UPS SECTION
    ===================================================== */

    .pcc-ups-area {
      position: relative;

      width: 100%;

      height: auto;

      min-height: 260px;
    }


    /* =====================================================
       UPS PARENT ROW

       Parent is positioned under the Utility
       midpoint.
    ===================================================== */

    .pcc-ups-parent-row {
      position: relative;

      width: 100%;

      height: 82px;
    }


    .pcc-ups-parent {
      position: absolute;

      top: 0;

      left:
        calc((100% / 14) * 9);

      width: 220px;
      height: 82px;

      padding: 8px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 2px;

      transform:
        translateX(-50%);

      border:
        1px solid #2879ad;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #123d63,
          #0e3154
        );

      z-index: 5;
    }


    .pcc-ups-parent svg {
      color: #71d0e2;
    }


    .pcc-ups-parent h3 {
      margin:
        3px 0 0;

      font-size: 14px;
      font-weight: 700;
    }


    .pcc-ups-parent span {
      color: #a9c4d5;

      font-size: 7px;
      font-weight: 700;

      letter-spacing: .08em;
    }


    /* =====================================================
       UPS PARENT → UPS SUBNETWORK
    ===================================================== */

    .pcc-ups-parent-stem {
      position: relative;

      width: 100%;

      height: 28px;
    }


    .pcc-ups-parent-stem::before {
      content: "";

      position: absolute;

      top: 0;

      left:
        calc((100% / 14) * 9);

      width:
        var(--wire-size);

      height: 28px;

      transform:
        translateX(-50%);

      background:
        var(--wire);
    }


    /* =====================================================
       CENTERED UPS SUBNETWORK

       We position the whole four-unit network under
       the UPS parent instead of stretching it across
       the complete PCC switchboard.
    ===================================================== */

    .pcc-ups-network {
      position: absolute;

      top: 110px;

      left:
        calc((100% / 14) * 9);

      width: 700px;

      max-width: calc(100% - 24px);

      transform:
        translateX(-50%);
    }


    .pcc-ups-distribution {
      position: relative;

      width: 100%;

      height: 28px;
    }


    /*
       Four columns:

       first = 1/8
       last  = 7/8
    */

    .pcc-ups-bus {
      position: absolute;

      top: 0;

      left:
        calc(100% / (var(--ups-count) * 2));

      right:
        calc(100% / (var(--ups-count) * 2));

      height:
        var(--wire-size);

      background:
        var(--wire);
    }


    .pcc-ups-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--ups-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .pcc-ups-line {
      position: relative;
    }


    .pcc-ups-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width:
        var(--wire-size);

      transform:
        translateX(-50%);

      background:
        var(--wire);
    }


    /* =====================================================
       UPS UNIT GRID
    ===================================================== */

    .pcc-ups-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--ups-count),
          minmax(0, 1fr)
        );

      gap: 0;
    }


    .pcc-ups-unit-wrap {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    .pcc-ups-unit-wrap::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 5px;
      height: 5px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       UPS CARD
    ===================================================== */

    .pcc-ups-unit {
      position: relative;

      width: 155px;
      min-width: 155px;
      max-width: 155px;
      height: 108px;

      margin: 0;

      padding:
        9px 10px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #2d729d;

      border-radius: 5px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #143d63,
          #103354
        );

      cursor: pointer;

      transition:
        border-color .14s ease,
        box-shadow .14s ease;
    }


    .pcc-ups-unit:hover,
    .pcc-ups-unit:focus-visible {
      transform: none;

      outline: none;

      border-color: #58b8ce;

      box-shadow:
        0 5px 14px
        rgba(10, 44, 66, .15);
    }


    .pcc-ups-unit > svg {
      color: #71d0e2;
    }


    .pcc-ups-unit > strong {
      margin-top: 3px;

      color: #ffffff;

      font-size: 11px;
      font-weight: 700;
    }


    .pcc-ups-unit > span {
      color: #a9c4d5;

      font-size: 7.5px;
    }


    /* =====================================================
       UPS HOVER READINGS
    ===================================================== */

    .pcc-ups-readings {
      position: absolute;

      inset: 0;

      z-index: 20;

      padding:
        7px 9px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      overflow: hidden;

      background:
        linear-gradient(
          145deg,
          #123f5d,
          #0c304a
        );

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity .13s ease,
        visibility .13s ease;
    }


    .pcc-ups-unit:hover
    .pcc-ups-readings,

    .pcc-ups-unit:focus-visible
    .pcc-ups-readings {
      opacity: 1;

      visibility: visible;
    }


    .pcc-ups-readings-title {
      height: 15px;
      min-height: 15px;

      margin-bottom: 2px;

      color: #73d0e1;

      font-size: 6px;
      font-weight: 800;

      line-height: 15px;

      text-align: left;

      letter-spacing: .08em;
    }


    .pcc-ups-readings-grid {
      min-height: 0;

      flex: 1;

      display: flex;
      flex-direction: column;

      gap: 2px;

      overflow-x: hidden;
      overflow-y: auto;

      padding-right: 2px;

      scrollbar-width: thin;
    }


    .pcc-ups-reading {
      min-height: 14px;

      display: grid;

      grid-template-columns:
        minmax(0, 1fr)
        minmax(42px, auto);

      align-items: center;

      column-gap: 5px;
    }


    .pcc-ups-reading span {
      min-width: 0;

      overflow: hidden;

      color: #a5bdc9;

      font-size: 6px;

      text-align: left;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    .pcc-ups-reading strong {
      min-width: 0;

      margin: 0;

      overflow: hidden;

      color: #ffffff;

      font-size: 6.5px;
      font-weight: 700;

      text-align: right;

      text-overflow: ellipsis;

      white-space: nowrap;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .pcc-overview-network {
        width:
          ${_}px;

        min-width:
          ${_}px;
      }


      .pcc-panel-card {
        height: 142px;
      }


      .pcc-switchboard {
        min-width: 1260px;
      }


      .pcc-lineup {
        grid-template-columns:
          repeat(
            var(--pcc-count),
            minmax(90px, 1fr)
          );
      }


      .pcc-cell {
        height: 126px;
      }


      .pcc-ups-network {
        width: 760px;
      }


      .pcc-ups-unit {
        width: 170px;
        min-width: 170px;
        max-width: 170px;
        height: 112px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .pcc-panel-card {
        height: 136px;
      }


      .pcc-switchboard {
        min-width: 1120px;
      }


      .pcc-ups-network {
        width: 700px;
      }


      .pcc-ups-unit {
        width: 155px;
        min-width: 155px;
        max-width: 155px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET
    ===================================================== */

    @media (max-width: 1100px) {

      .pcc-view {
        padding-left: 18px;
        padding-right: 18px;
      }


      .pcc-overview-network {
        width:
          ${_}px;

        min-width:
          ${_}px;
      }


      .pcc-panel-card {
        height: 132px;
      }


      .pcc-switchboard {
        width: 1120px;
        min-width: 1120px;
      }


      .pcc-ups-network {
        width: 700px;
      }
    }
  `,M=({direction:F})=>F==="incoming"?r.jsx(Qp,{size:15,strokeWidth:1.8}):F==="outgoing"?r.jsx(eh,{size:15,strokeWidth:1.8}):r.jsx(Xp,{size:16,strokeWidth:1.8}),Z=(F,P={})=>Ds({...F,type:F.type||(F.direction==="coupler"?"coupler":"pcc-circuit")},{...P,status:(P==null?void 0:P.status)||"LIVE"}),z=[{id:"ups-30-1",name:"30kVA-1",label:"30 kVA",type:"ups"},{id:"ups-30-2",name:"30kVA-2",label:"30 kVA",type:"ups"},{id:"ups-10-1",name:"10kVA-1",label:"10 kVA",type:"ups"},{id:"ups-10-2",name:"10kVA-2",label:"10 kVA",type:"ups"}];if(S){const F=Array.isArray(S.circuits)?S.circuits:[],P=Array.isArray(S.upsUnits)?S.upsUnits:[],K=P.length>0?z.filter(D=>P.includes(D.id)):S.id==="pcc-1"||S.id==="pcc-2"?z:[],ve=K.length>0,Te=F.some(D=>D.id.endsWith("-utility1"))&&F.some(D=>D.id.endsWith("-utility2"));return r.jsxs("div",{className:"pcc-view",children:[r.jsx("style",{children:I}),r.jsxs("div",{className:"pcc-internal",children:[r.jsxs("div",{className:"pcc-internal-head",children:[r.jsxs("button",{type:"button",onClick:()=>p(null),children:[r.jsx(vr,{size:15}),"PCC Main"]}),r.jsxs("div",{children:[r.jsx("span",{children:"POWER CONTROL CENTRE"}),r.jsx("h2",{children:S.name}),r.jsx("p",{children:Eu[S.id]||S.label})]})]}),r.jsx("div",{className:"pcc-switchboard-scroll",children:r.jsxs("div",{className:"pcc-switchboard",children:[F.length===0&&!ve&&r.jsxs("div",{className:"pcc-empty-panel",children:[r.jsx("strong",{children:"Internal topology not configured"}),"This PCC panel is available in the project, but no verified internal circuit layout is defined for it."]}),F.length>0&&r.jsx("div",{className:"pcc-lineup",style:{"--pcc-count":F.length},children:F.map(D=>{const le=en[D.id]||{},ee=Z(D,le),he=String((le==null?void 0:le.status)||"LIVE").toUpperCase()==="OFF";return r.jsxs("button",{type:"button",className:`pcc-cell pcc-cell--${D.direction}`,onClick:()=>s==null?void 0:s({...D,type:D.type||(D.direction==="coupler"?"coupler":"pcc-circuit"),telemetry:le}),children:[r.jsx(M,{direction:D.direction}),r.jsx("small",{children:D.direction==="coupler"?"B/C":D.direction.toUpperCase()}),r.jsx("strong",{title:D.name,children:D.name}),r.jsxs("em",{children:["●"," ",he?"OFF":"LIVE"]}),ee.length>0&&r.jsxs("div",{className:"pcc-cell-readings",children:[r.jsx("div",{className:"pcc-cell-readings-title",children:"LIVE READINGS"}),r.jsx("div",{className:"pcc-cell-readings-grid",children:ee.slice(0,5).map(([Ae,ke],Qe)=>r.jsxs("div",{className:"pcc-cell-reading",children:[r.jsx("span",{title:Ae,children:Ae}),r.jsx("strong",{title:String(ke),children:ke})]},`${Ae}-${Qe}`))})]})]},D.id)})}),ve&&r.jsxs(r.Fragment,{children:[Te&&r.jsxs("div",{className:"pcc-utility-supply",children:[r.jsx("div",{className:"pcc-utility-one"}),r.jsx("div",{className:"pcc-utility-two"}),r.jsx("div",{className:"pcc-utility-horizontal"}),r.jsx("div",{className:"pcc-utility-to-ups"})]}),r.jsxs("div",{className:"pcc-ups-area",children:[r.jsx("div",{className:"pcc-ups-parent-row",children:r.jsxs("div",{className:"pcc-ups-parent",children:[r.jsx(Sn,{size:21,strokeWidth:1.8}),r.jsx("h3",{children:"UPS"}),r.jsx("span",{children:"SUPPLY"})]})}),r.jsx("div",{className:"pcc-ups-parent-stem"}),r.jsxs("div",{className:"pcc-ups-network",style:{"--ups-count":K.length},children:[r.jsxs("div",{className:"pcc-ups-distribution",children:[r.jsx("div",{className:"pcc-ups-bus"}),r.jsx("div",{className:"pcc-ups-lines",children:K.map(D=>r.jsx("div",{className:"pcc-ups-line"},`line-${D.id}`))})]}),r.jsx("div",{className:"pcc-ups-grid",children:K.map(D=>{const le=en[D.id]||{},ee=Ds(D,le);return r.jsx("div",{className:"pcc-ups-unit-wrap",children:r.jsxs("button",{type:"button",className:"pcc-ups-unit",onClick:()=>s==null?void 0:s({...D,telemetry:le}),children:[r.jsx(Sn,{size:18,strokeWidth:1.8}),r.jsx("strong",{children:D.name}),r.jsx("span",{children:D.label}),ee.length>0&&r.jsxs("div",{className:"pcc-ups-readings",children:[r.jsx("div",{className:"pcc-ups-readings-title",children:"LIVE READINGS"}),r.jsx("div",{className:"pcc-ups-readings-grid",children:ee.map(([oe,he],Ae)=>r.jsxs("div",{className:"pcc-ups-reading",children:[r.jsx("span",{title:oe,children:oe}),r.jsx("strong",{title:String(he),children:he})]},`${oe}-${Ae}`))})]})]})},D.id)})})]})]})]})]})})]})]})}return r.jsxs("div",{className:"pcc-view",children:[r.jsx("style",{children:I}),r.jsxs("div",{className:"pcc-parent",children:[r.jsx(Hn,{size:26,strokeWidth:1.8}),r.jsx("span",{children:"MAIN LT DISTRIBUTION"}),r.jsx("h2",{children:"PCC"}),r.jsx("p",{children:"MAIN LT DISTRIBUTION"})]}),r.jsx("div",{className:"pcc-stem"}),r.jsxs("div",{className:"pcc-overview-network",children:[r.jsxs("div",{className:"pcc-distribution",children:[r.jsx("div",{className:`pcc-bus ${x===1?"pcc-bus--single":""}`}),r.jsx("div",{className:"pcc-overview-lines",children:k.map(F=>r.jsx("div",{className:"pcc-overview-line"},`line-${F.id}`))})]}),r.jsx("div",{className:"pcc-grid",children:k.map(F=>r.jsx("div",{className:"pcc-branch",children:r.jsxs("button",{type:"button",className:"pcc-panel-card",onClick:()=>p(F.id),children:[r.jsx(Hn,{size:24,strokeWidth:1.8}),r.jsx("span",{children:"POWER CONTROL CENTRE"}),r.jsx("h3",{children:F.name}),r.jsx("p",{children:Eu[F.id]||F.label}),r.jsx("strong",{children:"● LIVE"})]})},F.id))})]})]})}function Ph({topology:a,onOpenEquipment:s}){const u=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],p=[{title:"WING A",items:u.slice(0,2)},{title:"WING B",items:u.slice(2,4)},{title:"CONFIGURED",items:u.slice(4)}].filter(I=>I.items.length>0),k=p.length,x=210,N=190,y=Math.max(470,...p.map(I=>I.items.length*N)),g=Math.max(900,k*y),_=`
    /* =====================================================
       RAISING MAIN ROOT
    ===================================================== */

    .raising-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --wing-card-width: ${x}px;
      --wing-card-height: 118px;

      --rm-card-width: ${N}px;
      --rm-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 3vw, 44px)
        26px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE TOPOLOGY

       Keep one common width for:
       parent
       wing bus
       wing cards
       RM buses
       RM cards
    ===================================================== */

    .raising-network {
      width: ${g}px;
      min-width: ${g}px;

      margin: 0 auto;
    }


    /* =====================================================
       MAIN RAISING MAIN PARENT
    ===================================================== */

    .raising-parent {
      width: 100%;

      display: flex;

      justify-content: center;
      align-items: center;
    }


    .raising-parent > .simple-card {
      width: 420px;
      min-width: 420px;
      max-width: 420px;

      height: 112px;
      min-height: 112px;
      max-height: 112px;

      margin: 0;
    }


    /* =====================================================
       PARENT → WING BUS
    ===================================================== */

    .raising-main-stem {
      width: var(--wire-size);
      height: 34px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       WING DISTRIBUTION

                    RAISING MAIN
                         │
               ─────────┼─────────
               │                  │
            WING A             WING B
    ===================================================== */

    .raising-wing-distribution {
      position: relative;

      width: 100%;
      height: 34px;
    }


    /*
       Group columns are generated from the configured
       equipment without inventing extra wing mappings.
    */

    .raising-wing-bus {
      position: absolute;

      top: 0;

      left: ${y/2}px;
      right: ${y/2}px;

      height: var(--wire-size);

      background: var(--wire);
    }


    .raising-wing-bus--single {
      left: 50%;
      right: auto;
      width: var(--wire-size);
      transform: translateX(-50%);
    }


    .raising-wing-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(k,1)},
          ${y}px
        );

      pointer-events: none;
    }


    .raising-wing-line {
      position: relative;
    }


    .raising-wing-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform: translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       WING CARDS

       Exact same 2-column grid as connector lines.
    ===================================================== */

    .raising-wing-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(k,1)},
          ${y}px
        );

      gap: 0;

      align-items: start;
    }


    .raising-wing {
      position: relative;

      min-width: 0;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    .raising-wing-card-wrap {
      position: relative;

      width: 100%;

      display: flex;

      justify-content: center;
      align-items: flex-start;
    }


    .raising-wing-card-wrap::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    .raising-wing-card-wrap > .simple-card {
      width: var(--wing-card-width);
      min-width: var(--wing-card-width);
      max-width: var(--wing-card-width);

      height: var(--wing-card-height);
      min-height: var(--wing-card-height);
      max-height: var(--wing-card-height);

      margin: 0;
    }


    /* =====================================================
       WING → RAISING MAIN BUS
    ===================================================== */

    .raising-child-stem {
      width: var(--wire-size);
      height: 32px;

      margin: 0 auto;

      background: var(--wire);
    }


    /*
       This network belongs to one wing.

                  WING
                    │
              ──────┼──────
              │           │
             RM1         RM2
    */

    .raising-child-network {
      width:
        calc(
          var(--rm-count) *
          var(--rm-card-width)
        );

      min-width:
        calc(
          var(--rm-count) *
          var(--rm-card-width)
        );

      margin: 0 auto;
    }


    .raising-child-distribution {
      position: relative;

      width: 100%;
      height: 32px;
    }


    .raising-child-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          var(--rm-card-width) / 2
        );

      right:
        calc(
          var(--rm-card-width) / 2
        );

      height: var(--wire-size);

      background: var(--wire);
    }


    .raising-child-bus--single {
      left: 50%;
      right: auto;
      width: var(--wire-size);
      transform: translateX(-50%);
    }


    .raising-child-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--rm-count),
          var(--rm-card-width)
        );

      pointer-events: none;
    }


    .raising-child-line {
      position: relative;
    }


    .raising-child-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform: translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       RAISING MAIN EQUIPMENT CARDS
    ===================================================== */

    .raising-children {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--rm-count),
          var(--rm-card-width)
        );

      gap: 0;

      align-items: start;
    }


    .raising-child {
      position: relative;

      min-width: 0;

      display: flex;

      justify-content: center;
      align-items: flex-start;
    }


    .raising-child::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /*
       Control the RM card from this topology.

       This keeps all four cards equal and prevents
       connector/card misalignment.
    */

    .raising-child > .simple-card {
      width: var(--rm-card-width);
      min-width: var(--rm-card-width);
      max-width: var(--rm-card-width);

      height: var(--rm-card-height);
      min-height: var(--rm-card-height);
      max-height: var(--rm-card-height);

      margin: 0;
    }


    /* =====================================================
       IMPORTANT

       Cards must NEVER translate on hover because
       the connector must remain visually attached.
    ===================================================== */

    .raising-view .simple-card:hover,
    .raising-view .simple-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .raising-view {
        --wing-card-height: 122px;

        --rm-card-height: 142px;
      }


      .raising-network {
        width: ${g}px;
        min-width: ${g}px;
      }


      .raising-parent > .simple-card {
        width: 440px;
        min-width: 440px;
        max-width: 440px;

        height: 116px;
        min-height: 116px;
        max-height: 116px;
      }


      .raising-child-network {
        width: 500px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .raising-view {
        --wing-card-height: 114px;

        --rm-card-height: 136px;
      }


      .raising-network {
        width: ${g}px;
        min-width: ${g}px;
      }


      .raising-parent > .simple-card {
        width: 400px;
        min-width: 400px;
        max-width: 400px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }


      .raising-child-network {
        width: 450px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       Preserve topology instead of squeezing cards.
       The parent FlowDetail container can scroll.
    ===================================================== */

    @media (max-width: 1100px) {

      .raising-view {
        --wing-card-height: 110px;

        --rm-card-height: 132px;

        padding-left: 18px;
        padding-right: 18px;
      }


      .raising-network {
        width: ${g}px;
        min-width: ${g}px;
      }


      .raising-parent > .simple-card {
        width: 380px;
        min-width: 380px;
        max-width: 380px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }


    }
  `,S=(I,M)=>r.jsxs("section",{className:"raising-wing",children:[r.jsx("div",{className:"raising-wing-card-wrap",children:r.jsx(Jt,{title:I,subtitle:"Vertical Distribution",icon:Zt})}),r.jsx("div",{className:"raising-child-stem"}),r.jsxs("div",{className:"raising-child-network",style:{"--rm-count":Math.max(M.length,1)},children:[r.jsxs("div",{className:"raising-child-distribution",children:[r.jsx("div",{className:`raising-child-bus ${M.length===1?"raising-child-bus--single":""}`}),r.jsx("div",{className:"raising-child-lines",children:M.map(Z=>r.jsx("div",{className:"raising-child-line"},`line-${Z.id}`))})]}),r.jsx("div",{className:"raising-children",children:M.map(Z=>r.jsx("div",{className:"raising-child",children:r.jsx(Jt,{title:Z.name.toUpperCase(),subtitle:`${I} Vertical Bus`,icon:Xt,equipment:Z,onClick:()=>{var z;return s==null?void 0:s({...Z,telemetry:{...en[Z.id],capacity:(z=Z.label)==null?void 0:z.replace(" GENSET","")}})}})},Z.id))})]})]},`raising-group-${I}`);return r.jsxs("div",{className:"raising-view",children:[r.jsx("style",{children:_}),r.jsxs("div",{className:"raising-network",children:[r.jsx("div",{className:"raising-parent",children:r.jsx(Jt,{title:"RAISING MAIN",subtitle:"Main Vertical Distribution",icon:Xt})}),r.jsx("div",{className:"raising-main-stem"}),r.jsxs("div",{className:"raising-wing-distribution",children:[r.jsx("div",{className:`raising-wing-bus ${k===1?"raising-wing-bus--single":""}`}),r.jsx("div",{className:"raising-wing-lines",children:p.map(I=>r.jsx("div",{className:"raising-wing-line"},`group-line-${I.title}`))})]}),r.jsx("div",{className:"raising-wing-grid",children:p.map(I=>S(I.title,I.items))})]})]})}function Oh({topology:a,onOpenEquipment:s}){const u=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],p=u.length,k=220,x=Math.max(760,p*k),N=`
    /* =====================================================
       WING / BUILDING ROOT
    ===================================================== */

    .wing-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --wing-card-width: ${k}px;
      --wing-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(16px, 2vh, 26px)
        clamp(20px, 3vw, 46px)
        28px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE NETWORK

       One common coordinate system is used for:
       - parent
       - horizontal bus
       - vertical branches
       - Wing A / Wing B cards
    ===================================================== */

    .wing-network {
      width: ${x}px;
      min-width: ${x}px;

      margin: 0 auto;
    }


    /* =====================================================
       BUILDINGS PARENT
    ===================================================== */

    .wing-parent {
      position: relative;

      width: 420px;
      min-width: 420px;
      max-width: 420px;

      height: 110px;
      min-height: 110px;

      margin: 0 auto;

      padding: 13px 20px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 2px;

      overflow: hidden;

      border: 1px solid #367fb1;
      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #153e72 0%,
          #102f61 55%,
          #0d2853 100%
        );

      box-shadow:
        0 7px 18px
        rgba(11, 44, 75, .13);

      z-index: 5;
    }


    .wing-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .wing-parent svg {
      flex: 0 0 auto;

      margin-bottom: 2px;

      color: #72d1e2;
    }


    .wing-parent span {
      color: #8ec5ea;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .wing-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;
    }


    .wing-parent p {
      margin: 0;

      color: #b3cada;

      font-size: 9px;
      font-weight: 550;
    }


    /* =====================================================
       BUILDINGS → DISTRIBUTION BUS STEM
    ===================================================== */

    .wing-main-stem {
      width: var(--wire-size);
      height: 36px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       WING DISTRIBUTION

                    BUILDINGS
                        │
                        │
                 ───────┼───────
                 │              │
              WING A         WING B

       The bus starts at the first wing center and
       ends at the final wing center.
    ===================================================== */

    .wing-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    .wing-bus {
      position: absolute;

      top: 0;

      left: ${k/2}px;
      right: ${k/2}px;

      height: var(--wire-size);

      background: var(--wire);
    }


    .wing-bus--single {
      left: 50%;
      right: auto;
      width: var(--wire-size);
      transform: translateX(-50%);
    }


    /* =====================================================
       EXACT VERTICAL BRANCHES

       Uses the SAME two-column grid as the cards.
    ===================================================== */

    .wing-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${k}px
        );

      pointer-events: none;
    }


    .wing-line {
      position: relative;
    }


    .wing-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform: translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       WING CARD GRID

       IMPORTANT:
       Same exact columns as .wing-lines.
       No arbitrary 120px gap.
    ===================================================== */

    .wing-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${k}px
        );

      gap: 0;

      align-items: start;
    }


    .wing-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       CARD / FLOW CONNECTION POINT
    ===================================================== */

    .wing-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       WING EQUIPMENT CARDS

       Topology controls the exact dimensions instead
       of allowing EquipmentCard to change geometry.
    ===================================================== */

    .wing-branch > .eq-card {
      width: var(--wing-card-width);
      min-width: var(--wing-card-width);
      max-width: var(--wing-card-width);

      height: var(--wing-card-height);
      min-height: var(--wing-card-height);
      max-height: var(--wing-card-height);

      margin: 0;
    }


    /* =====================================================
       NO MOVEMENT ON HOVER

       Flow connector must stay attached.
    ===================================================== */

    .wing-view .eq-card:hover,
    .wing-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .wing-view {
        --wing-card-height: 142px;
      }


      .wing-network {
        width: ${x}px;
        min-width: ${x}px;
      }


      .wing-parent {
        width: 440px;
        min-width: 440px;
        max-width: 440px;

        height: 114px;
        min-height: 114px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .wing-view {
        --wing-card-height: 136px;
      }


      .wing-network {
        width: ${x}px;
        min-width: ${x}px;
      }


      .wing-parent {
        width: 400px;
        min-width: 400px;
        max-width: 400px;

        height: 106px;
        min-height: 106px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       Keep topology intact rather than squeezing
       cards and disconnecting flow lines.
    ===================================================== */

    @media (max-width: 1100px) {

      .wing-view {
        --wing-card-height: 132px;

        padding-left: 18px;
        padding-right: 18px;
      }


      .wing-network {
        width: ${x}px;
        min-width: ${x}px;
      }


      .wing-parent {
        width: 380px;
        min-width: 380px;
        max-width: 380px;

        height: 104px;
        min-height: 104px;
      }
    }
  `;return r.jsxs("div",{className:"wing-view",children:[r.jsx("style",{children:N}),r.jsxs("div",{className:"wing-network",children:[r.jsxs("div",{className:"wing-parent",children:[r.jsx(Zt,{size:26,strokeWidth:1.8}),r.jsx("span",{children:"MAIN BUILDING DISTRIBUTION"}),r.jsx("h2",{children:"BUILDINGS"}),r.jsx("p",{children:"WING EQUIPMENT"})]}),r.jsx("div",{className:"wing-main-stem"}),r.jsxs("div",{className:"wing-distribution",children:[r.jsx("div",{className:`wing-bus ${p===1?"wing-bus--single":""}`}),r.jsx("div",{className:"wing-lines",children:u.map(y=>r.jsx("div",{className:"wing-line"},`line-${y.id}`))})]}),r.jsx("div",{className:"wing-grid",children:u.map(y=>r.jsx("div",{className:"wing-branch",children:r.jsx(bt,{equipment:y,onOpen:s})},y.id))})]})]})}function Lh({topology:a,onOpenEquipment:s}){const u=Array.isArray(a==null?void 0:a.equipment)?a.equipment:[],p=u.length,k=150,x=Math.max(760,p*k),N=`
    /* =====================================================
       DG ROOT
    ===================================================== */

    .dg-view {
      --wire: #19b8cf;
      --wire-size: 2px;

      --dg-card-width: ${k}px;
      --dg-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(16px, 2vw, 34px)
        26px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE DG NETWORK

       One common coordinate system controls:
       - Parent
       - Main stem
       - Horizontal bus
       - DG branches
       - DG cards
    ===================================================== */

    .dg-network {
      width: ${x}px;
      min-width: ${x}px;

      margin: 0 auto;
    }


    /* =====================================================
       DG PARENT
    ===================================================== */

    .dg-parent {
      width: 100%;

      display: flex;

      align-items: center;
      justify-content: center;
    }


    .dg-parent > .simple-card {
      width: 500px;
      min-width: 500px;
      max-width: 500px;

      height: 112px;
      min-height: 112px;
      max-height: 112px;

      margin: 0;
    }


    /* =====================================================
       PARENT → DG BUS
    ===================================================== */

    .dg-main-stem {
      width: var(--wire-size);
      height: 38px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       DG DISTRIBUTION

                         DG PLANT
                            │
                            │
          ──────────────────┼──────────────────
          │    │    │    │    │    │    │
         DG1  DG2  DG3  ...
    ===================================================== */

    .dg-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    /* =====================================================
       HORIZONTAL DG BUS

       The bus starts and ends exactly at the first
       and last DG branch centers.
    ===================================================== */

    .dg-bus {
      position: absolute;

      top: 0;

      left:
        ${k/2}px;

      right:
        ${k/2}px;

      height: var(--wire-size);

      background: var(--wire);
    }


    .dg-bus--single {
      left: 50%;
      right: auto;
      width: var(--wire-size);
      transform: translateX(-50%);
    }


    /* =====================================================
       EXACT VERTICAL BRANCHES

       IMPORTANT:
       This grid is identical to .dg-grid below.
    ===================================================== */

    .dg-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${k}px
        );

      pointer-events: none;
    }


    .dg-line {
      position: relative;
    }


    .dg-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       DG CARD GRID

       Same exact columns as connector branches.

       No gap is used in the geometry.
       Spacing comes naturally from the column width.
    ===================================================== */

    .dg-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          ${Math.max(p,1)},
          ${k}px
        );

      gap: 0;

      align-items: start;
    }


    .dg-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       CONNECTOR / CARD JUNCTION
    ===================================================== */

    .dg-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       DG CARDS
    ===================================================== */

    .dg-branch > .simple-card {
      width: var(--dg-card-width);
      min-width: var(--dg-card-width);
      max-width: var(--dg-card-width);

      height: var(--dg-card-height);
      min-height: var(--dg-card-height);
      max-height: var(--dg-card-height);

      margin: 0;

      padding: 10px 8px;

      box-sizing: border-box;
    }


    .dg-branch .simple-card h3 {
      margin: 2px 0;

      font-size: 14px;
      line-height: 17px;

      white-space: normal;

      text-align: center;
    }


    /* =====================================================
       NO CARD MOVEMENT

       Connector must remain attached while hovering.
    ===================================================== */

    .dg-view .simple-card:hover,
    .dg-view .simple-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .dg-view {
        --dg-card-height: 142px;
      }


      .dg-network {
        width: ${x}px;
        min-width: ${x}px;
      }


      .dg-parent > .simple-card {
        width: 540px;
        min-width: 540px;
        max-width: 540px;

        height: 116px;
        min-height: 116px;
        max-height: 116px;
      }


      .dg-branch .simple-card h3 {
        font-size: 15px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .dg-view {
        --dg-card-height: 136px;
      }


      .dg-network {
        width: ${x}px;
        min-width: ${x}px;
      }


      .dg-parent > .simple-card {
        width: 480px;
        min-width: 480px;
        max-width: 480px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       DG cards should not be crushed into a small
       viewport.

       Preserve the engineering topology and allow
       horizontal scrolling.
    ===================================================== */

    @media (max-width: 1100px) {

      .dg-view {
        --dg-card-height: 132px;

        padding-left: 16px;
        padding-right: 16px;
      }


      .dg-network {
        width: ${x}px;
        min-width: ${x}px;
      }


      .dg-parent > .simple-card {
        width: 450px;
        min-width: 450px;
        max-width: 450px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }


      .dg-branch .simple-card h3 {
        font-size: 13px;
      }
    }
  `;return r.jsxs("div",{className:"dg-view",children:[r.jsx("style",{children:N}),r.jsxs("div",{className:"dg-network",children:[r.jsx("div",{className:"dg-parent",children:r.jsx(Jt,{title:"DIESEL GENERATOR PLANT",eyebrow:"EMERGENCY POWER PANEL",icon:Ve,live:!1})}),r.jsx("div",{className:"dg-main-stem"}),r.jsxs("div",{className:"dg-distribution",children:[r.jsx("div",{className:`dg-bus ${p===1?"dg-bus--single":""}`}),r.jsx("div",{className:"dg-lines",children:u.map(y=>r.jsx("div",{className:"dg-line"},`line-${y.id}`))})]}),r.jsx("div",{className:"dg-grid",children:u.map(y=>r.jsx("div",{className:"dg-branch",children:r.jsx(Jt,{title:y.name,eyebrow:"DIESEL GENERATOR",subtitle:y.label,icon:Ve,equipment:y,onClick:()=>s==null?void 0:s({...y,telemetry:en[y.id]})})},y.id))})]})]})}function Mh({topology:a,onOpenEquipment:s}){const u=(a==null?void 0:a.equipment)||[],p=u.length,N=p>0?Math.max(560,p*190+Math.max(p-1,0)*34):560,y=`
    .hvac-view {
      width:min(560px,92%);min-height:270px;margin:auto;padding:34px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;border:1px solid #b9c9d5;border-radius:8px;background:#eef3f6;
    }
    .hvac-view__icon {
      width:58px;height:58px;margin-bottom:14px;display:grid;place-items:center;
      border:1px solid #397da9;border-radius:7px;color:#d7efff;background:#173f75;
    }
    .hvac-view span { color:#6f8799;font-size:8px;font-weight:800;letter-spacing:.16em; }
    .hvac-view h2 { margin:7px 0 5px;color:#17324a;font-size:21px; }
    .hvac-view p { margin:0;color:#708291;font-size:11px; }
    .hvac-view strong {
      margin-top:18px;padding:7px 12px;border:1px solid #c6d3dc;border-radius:5px;
      color:#5f7484;background:#fff;font-size:9px;letter-spacing:.1em;
    }
    .hvac-flow-view {
      --wire:#397da9;
      --wire-size:2px;
      --hvac-card-width:190px;
      width:100%;
      min-width:0;
      min-height:100%;
      margin:0;
      padding:clamp(14px,2vh,24px) clamp(18px,3vw,42px) 28px;
      box-sizing:border-box;
      overflow-x:auto;
    }
    .hvac-network {
      width:var(--hvac-network-width);
      min-width:var(--hvac-network-width);
      margin:0 auto;
    }
    .hvac-parent {
      display:flex;
      justify-content:center;
    }
    .hvac-parent > .simple-card {
      width:420px;
      min-width:420px;
      max-width:420px;
      height:110px;
      min-height:110px;
      max-height:110px;
      margin:0;
    }
    .hvac-main-stem {
      width:var(--wire-size);
      height:36px;
      margin:0 auto;
      background:var(--wire);
    }
    .hvac-distribution {
      position:relative;
      width:100%;
      height:36px;
      min-height:36px;
    }
    .hvac-bus {
      position:absolute;
      top:0;
      left:calc(100% / (var(--hvac-count) * 2));
      right:calc(100% / (var(--hvac-count) * 2));
      height:var(--wire-size);
      background:var(--wire);
    }
    .hvac-bus--single {
      left:50%;
      right:50%;
    }
    .hvac-lines,
    .hvac-grid {
      display:grid;
      grid-template-columns:repeat(var(--hvac-count),var(--hvac-card-width));
      justify-content:space-between;
      gap:0;
    }
    .hvac-lines {
      position:absolute;
      inset:0;
      pointer-events:none;
    }
    .hvac-line,
    .hvac-branch {
      position:relative;
      display:flex;
      justify-content:center;
    }
    .hvac-line::before {
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      left:50%;
      width:var(--wire-size);
      transform:translateX(-50%);
      background:var(--wire);
    }
    .hvac-branch::before {
      content:"";
      position:absolute;
      top:0;
      left:50%;
      width:6px;
      height:6px;
      box-sizing:border-box;
      border:1px solid var(--wire);
      border-radius:50%;
      background:#fff;
      transform:translate(-50%,-50%);
      z-index:8;
    }
    .hvac-branch > .eq-card {
      width:var(--hvac-card-width);
      min-width:var(--hvac-card-width);
      max-width:var(--hvac-card-width);
      height:136px;
      min-height:136px;
      max-height:136px;
      margin:0;
    }
    .hvac-flow-view .eq-card:hover,
    .hvac-flow-view .eq-card:focus-visible {
      transform:none;
    }
  `;return p>0?r.jsxs("div",{className:"hvac-flow-view",children:[r.jsx("style",{children:y}),r.jsxs("div",{className:"hvac-network",style:{"--hvac-count":p,"--hvac-network-width":`${N}px`},children:[r.jsx("div",{className:"hvac-parent",children:r.jsx(Jt,{title:"HVAC COOLING PLANT",subtitle:"Configured HVAC Equipment",eyebrow:"MECHANICAL SERVICES",icon:Vs})}),r.jsx("div",{className:"hvac-main-stem"}),r.jsxs("div",{className:"hvac-distribution",children:[r.jsx("div",{className:`hvac-bus ${p===1?"hvac-bus--single":""}`}),r.jsx("div",{className:"hvac-lines",children:u.map(g=>r.jsx("div",{className:"hvac-line"},`line-${g.id}`))})]}),r.jsx("div",{className:"hvac-grid",children:u.map(g=>r.jsx("div",{className:"hvac-branch",children:r.jsx(bt,{equipment:g,onOpen:s})},g.id))})]})]}):r.jsxs("div",{className:"hvac-view",children:[r.jsx("style",{children:y}),r.jsx("span",{className:"hvac-view__icon",children:r.jsx(Vs,{size:30})}),r.jsx("span",{children:"MECHANICAL SERVICES"}),r.jsx("h2",{children:"HVAC COOLING PLANT"}),r.jsx("p",{children:"No internal HVAC equipment is configured for this flow."}),r.jsx("strong",{children:"0 EQUIPMENT"})]})}function Fh({topology:a,onOpenEquipment:s}){const[u,p]=re.useState(!1),k=a.equipment.find(z=>z.type==="water-main"),x=a.equipment.find(z=>z.type==="stp"),N=a.equipment.find(z=>z.type==="wtp"),y=a.equipment.filter(z=>z.type==="tank"),g=[x?{id:"stp",kind:"stp",equipment:x}:null,N?{id:"wtp",kind:"wtp",equipment:N}:null,y.length>0?{id:"water-tanks",kind:"tanks"}:null].filter(Boolean),_=g.length,S=y.length,I=Math.max(520,_*240),M=Math.max(520,S*220),Z=`
    /* =====================================================
       WATER MANAGEMENT ROOT
    ===================================================== */

    .water-view {
      --wire: #249bb5;
      --wire-size: 2px;

      --water-card-width: 220px;
      --water-card-height: 136px;

      --tank-card-width: 190px;
      --tank-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 3vw, 42px)
        28px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE MAIN NETWORK
    ===================================================== */

    .water-network {
      width: var(--water-network-width);
      min-width: var(--water-network-width);

      margin: 0 auto;
    }


    /* =====================================================
       WATER MANAGEMENT PARENT
    ===================================================== */

    .water-parent {
      width: 100%;

      display: flex;

      align-items: center;
      justify-content: center;
    }


    .water-parent > .simple-card {
      width: 440px;
      min-width: 440px;
      max-width: 440px;

      height: 112px;
      min-height: 112px;
      max-height: 112px;

      margin: 0;
    }


    /* =====================================================
       PARENT → MAIN WATER BUS
    ===================================================== */

    .water-main-stem {
      width: var(--wire-size);
      height: 38px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       MAIN WATER DISTRIBUTION

                    WATER MANAGEMENT
                           │
                           │
             ──────────────┼──────────────
             │             │             │
            STP           WTP       WATER TANKS
    ===================================================== */

    .water-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    /* =====================================================
       MAIN HORIZONTAL BUS

       Three equal columns:

       STP center         = 1/6
       WTP center         = 3/6
       Water Tanks center = 5/6

       Bus starts at STP and ends at Water Tanks.
    ===================================================== */

    .water-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          100% / (var(--water-branch-count) * 2)
        );

      right:
        calc(
          100% / (var(--water-branch-count) * 2)
        );

      height: var(--wire-size);

      background: var(--wire);
    }

    .water-bus--single {
      left: 50%;
      right: 50%;
    }


    /* =====================================================
       EXACT THREE VERTICAL BRANCHES
    ===================================================== */

    .water-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--water-branch-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .water-line {
      position: relative;
    }


    .water-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       MAIN WATER CARD GRID

       Same exact 3-column geometry as .water-lines.
    ===================================================== */

    .water-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--water-branch-count),
          minmax(0, 1fr)
        );

      gap: 0;

      align-items: start;
    }


    .water-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       CARD CONNECTION POINT
    ===================================================== */

    .water-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       STP / WTP CARDS
    ===================================================== */

    .water-branch > .simple-card {
      width: var(--water-card-width);
      min-width: var(--water-card-width);
      max-width: var(--water-card-width);

      height: var(--water-card-height);
      min-height: var(--water-card-height);
      max-height: var(--water-card-height);

      margin: 0;

      box-sizing: border-box;
    }


    /* =====================================================
       WATER TANK GROUP CARD
    ===================================================== */

    .water-tank-group {
      position: relative;

      width: var(--water-card-width);
      min-width: var(--water-card-width);
      max-width: var(--water-card-width);

      height: var(--water-card-height);
      min-height: var(--water-card-height);
      max-height: var(--water-card-height);

      margin: 0;

      padding: 12px 14px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 3px;

      overflow: hidden;

      border:
        1px solid #327ba2;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #174766,
          #123b58 55%,
          #0e3049
        );

      box-shadow:
        0 5px 14px
        rgba(10, 39, 59, .13);

      cursor: pointer;

      transition:
        border-color .15s ease,
        box-shadow .15s ease;
    }


    .water-tank-group::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #3eb9d0;
    }


    .water-tank-group:hover,
    .water-tank-group:focus-visible {
      transform: none;

      outline: none;

      border-color: #59bad0;

      box-shadow:
        0 7px 18px
        rgba(10, 42, 64, .18);
    }


    .water-tank-group svg {
      margin: 3px 0;

      color: #71d0e2;
    }


    .water-tank-group span {
      color: #87bddd;

      font-size: 7px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .12em;
    }


    .water-tank-group h3 {
      margin: 3px 0 1px;

      color: #ffffff;

      font-size: 15px;
      font-weight: 700;

      line-height: 18px;
    }


    .water-tank-group p {
      margin: 0;

      color: #b5cede;

      font-size: 8px;

      line-height: 12px;
    }


    .water-tank-group strong {
      margin-top: 5px;

      color: #73d0e1;

      font-size: 7px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .05em;
    }


    /* =====================================================
       DON'T MOVE FLOW CARDS ON HOVER
    ===================================================== */

    .water-view .simple-card:hover,
    .water-view .simple-card:focus-visible,
    .water-view .eq-card:hover,
    .water-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       WATER TANK SUBVIEW HEADER
    ===================================================== */

    .water-tanks-head {
      width: min(100%, 1040px);

      margin:
        0 auto
        20px;

      display: flex;

      align-items: center;

      gap: 14px;
    }


    .water-tanks-head button {
      height: 36px;

      padding:
        0 12px;

      display: inline-flex;

      align-items: center;

      gap: 6px;

      border:
        1px solid #426780;

      border-radius: 5px;

      color: #dce9f2;

      background: #173b56;

      cursor: pointer;

      transition:
        background .15s ease,
        border-color .15s ease;
    }


    .water-tanks-head button:hover,
    .water-tanks-head button:focus-visible {
      outline: none;

      background: #19445f;

      border-color: #4da8bd;
    }


    .water-tanks-head h2 {
      margin: 0;

      color: #17354b;

      font-size: 21px;
      font-weight: 700;
    }


    /* =====================================================
       COMPLETE TANK NETWORK
    ===================================================== */

    .water-tanks-network {
      width: var(--tank-network-width);
      min-width: var(--tank-network-width);

      margin: 0 auto;
    }


    /* =====================================================
       WATER TANKS PARENT
    ===================================================== */

    .water-tanks-parent {
      width: 100%;

      display: flex;

      justify-content: center;
      align-items: center;
    }


    .water-tanks-parent > .simple-card {
      width: 420px;
      min-width: 420px;
      max-width: 420px;

      height: 110px;
      min-height: 110px;
      max-height: 110px;

      margin: 0;
    }


    /* =====================================================
       WATER TANK PARENT → BUS
    ===================================================== */

    .water-tanks-main-stem {
      width: var(--wire-size);
      height: 36px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       FOUR TANK DISTRIBUTION

                       WATER TANKS
                            │
                            │
             ───────────────┼───────────────
             │        │          │         │
           TANK1    TANK2      TANK3     TANK4
    ===================================================== */

    .water-tanks-distribution {
      position: relative;

      width: 100%;

      height: 36px;
      min-height: 36px;
    }


    /*
       Four equal columns.

       Tank 1 center = 1/8
       Tank 4 center = 7/8
    */

    .water-tanks-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          100% / (var(--tank-count) * 2)
        );

      right:
        calc(
          100% / (var(--tank-count) * 2)
        );

      height: var(--wire-size);

      background: var(--wire);
    }

    .water-tanks-bus--single {
      left: 50%;
      right: 50%;
    }


    /* =====================================================
       EXACT FOUR TANK BRANCHES
    ===================================================== */

    .water-tank-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--tank-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .water-tank-line {
      position: relative;
    }


    .water-tank-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       TANK CARD GRID

       Same exact 4-column geometry as tank lines.
    ===================================================== */

    .water-tanks-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--tank-count),
          minmax(0, 1fr)
        );

      gap: 0;

      align-items: start;
    }


    .water-tank {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       TANK CARD CONNECTION
    ===================================================== */

    .water-tank::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       TANK EQUIPMENT CARDS
    ===================================================== */

    .water-tank > .eq-card {
      width: var(--tank-card-width);
      min-width: var(--tank-card-width);
      max-width: var(--tank-card-width);

      height: var(--tank-card-height);
      min-height: var(--tank-card-height);
      max-height: var(--tank-card-height);

      margin: 0;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .water-view {
        --water-card-width: 230px;
        --water-card-height: 142px;

        --tank-card-width: 200px;
        --tank-card-height: 142px;
      }


      .water-network,
      .water-tanks-network {
        max-width: none;
      }


      .water-parent > .simple-card {
        width: 460px;
        min-width: 460px;
        max-width: 460px;

        height: 116px;
        min-height: 116px;
        max-height: 116px;
      }


      .water-tanks-parent > .simple-card {
        width: 440px;
        min-width: 440px;
        max-width: 440px;

        height: 114px;
        min-height: 114px;
        max-height: 114px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .water-view {
        --water-card-width: 210px;
        --water-card-height: 136px;

        --tank-card-width: 190px;
        --tank-card-height: 136px;
      }


      .water-network,
      .water-tanks-network {
        max-width: none;
      }


      .water-parent > .simple-card {
        width: 420px;
        min-width: 420px;
        max-width: 420px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }


      .water-tanks-parent > .simple-card {
        width: 400px;
        min-width: 400px;
        max-width: 400px;

        height: 108px;
        min-height: 108px;
        max-height: 108px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       Keep the topology intact.
       Horizontal scrolling is preferable to
       compressing the cards/flow lines.
    ===================================================== */

    @media (max-width: 1100px) {

      .water-view {
        --water-card-width: 195px;
        --water-card-height: 132px;

        --tank-card-width: 182px;
        --tank-card-height: 132px;

        padding-left: 18px;
        padding-right: 18px;
      }


      .water-network,
      .water-tanks-network {
        width: var(--water-network-width);
        min-width: var(--water-network-width);
      }

      .water-tanks-network {
        width: var(--tank-network-width);
        min-width: var(--tank-network-width);
      }


      .water-parent > .simple-card {
        width: 390px;
        min-width: 390px;
        max-width: 390px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }


      .water-tanks-parent > .simple-card {
        width: 380px;
        min-width: 380px;
        max-width: 380px;

        height: 106px;
        min-height: 106px;
        max-height: 106px;
      }
    }
  `;return u?r.jsxs("div",{className:"water-view",children:[r.jsx("style",{children:Z}),r.jsxs("div",{className:"water-tanks-head",children:[r.jsxs("button",{type:"button",onClick:()=>p(!1),children:[r.jsx(vr,{size:15}),"Water Management"]}),r.jsx("h2",{children:"WATER TANKS"})]}),r.jsxs("div",{className:"water-tanks-network",style:{"--tank-count":S,"--tank-network-width":`${M}px`},children:[r.jsx("div",{className:"water-tanks-parent",children:r.jsx(Jt,{title:"WATER TANKS",subtitle:"Tank Level Monitoring",eyebrow:"STORAGE DISTRIBUTION",icon:Oe})}),r.jsx("div",{className:"water-tanks-main-stem"}),r.jsxs("div",{className:"water-tanks-distribution",children:[r.jsx("div",{className:`water-tanks-bus ${S===1?"water-tanks-bus--single":""}`}),r.jsx("div",{className:"water-tank-lines",children:y.map(z=>r.jsx("div",{className:"water-tank-line"},`line-${z.id}`))})]}),r.jsx("div",{className:"water-tanks-grid",children:y.map(z=>r.jsx("div",{className:"water-tank",children:r.jsx(bt,{equipment:z,onOpen:s})},z.id))})]})]}):r.jsxs("div",{className:"water-view",children:[r.jsx("style",{children:Z}),r.jsxs("div",{className:"water-network",style:{"--water-branch-count":_,"--water-network-width":`${I}px`},children:[r.jsx("div",{className:"water-parent",children:r.jsx(Jt,{title:"WATER MANAGEMENT",subtitle:"CENTRAL WATER MONITORING",eyebrow:"CENTRAL WATER SYSTEM",icon:Oe,equipment:k,onClick:k?()=>s==null?void 0:s({...k,telemetry:en[k.id]}):void 0})}),_>0&&r.jsx("div",{className:"water-main-stem"}),_>0&&r.jsxs("div",{className:"water-distribution",children:[r.jsx("div",{className:`water-bus ${_===1?"water-bus--single":""}`}),r.jsx("div",{className:"water-lines",children:g.map(z=>r.jsx("div",{className:"water-line"},`line-${z.id}`))})]}),_>0&&r.jsx("div",{className:"water-grid",children:g.map(z=>{if(z.kind==="tanks")return r.jsx("div",{className:"water-branch",children:r.jsxs("button",{type:"button",className:"water-tank-group",onClick:()=>p(!0),children:[r.jsx("span",{children:"STORAGE DISTRIBUTION"}),r.jsx(Oe,{size:22,strokeWidth:1.8}),r.jsx("h3",{children:"WATER TANKS"}),r.jsx("p",{children:"TANK LEVEL MONITORING"}),r.jsxs("strong",{children:["VIEW ",S," TANK",S===1?"":"S"," →"]})]})},z.id);const F=z.equipment;return r.jsx("div",{className:"water-branch",children:r.jsx(Jt,{title:z.kind==="stp"?"STP":"WTP",eyebrow:z.kind==="stp"?"SEWAGE TREATMENT PLANT":"WATER TREATMENT PLANT",subtitle:z.kind==="stp"?"Sewage Water Treatment":"Water Treatment",icon:Oe,equipment:F,onClick:()=>s==null?void 0:s({...F,telemetry:en[F.id]})})},z.id)})})]})]})}function Vh({topology:a,onOpenEquipment:s}){const u=(a==null?void 0:a.equipment)||[],p=u.length,k=Math.max(520,p*250);return r.jsxs("div",{className:"fire-view",children:[r.jsx("style",{children:`
    /* =====================================================
       FIRE ROOT
    ===================================================== */

    .fire-view {
      --wire: #b55b66;
      --wire-size: 2px;

      --fire-card-width: 210px;
      --fire-card-height: 136px;

      width: 100%;
      min-width: 0;
      min-height: 100%;

      margin: 0;

      padding:
        clamp(14px, 2vh, 24px)
        clamp(18px, 3vw, 42px)
        28px;

      box-sizing: border-box;

      overflow-x: auto;
    }


    /* =====================================================
       COMPLETE FIRE NETWORK

       Parent, bus, branches and cards all share
       the same coordinate system.
    ===================================================== */

    .fire-network {
      width: var(--fire-network-width);
      min-width: var(--fire-network-width);

      margin: 0 auto;
    }


    /* =====================================================
       FIRE PROTECTION PARENT
    ===================================================== */

    .fire-parent {
      position: relative;

      width: 430px;
      min-width: 430px;
      max-width: 430px;

      height: 110px;
      min-height: 110px;

      margin: 0 auto;

      padding: 13px 20px;

      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 2px;

      overflow: hidden;

      border:
        1px solid #a64f5d;

      border-radius: 6px;

      color: #ffffff;

      background:
        linear-gradient(
          145deg,
          #663442 0%,
          #572c39 55%,
          #48232f 100%
        );

      box-shadow:
        0 7px 18px
        rgba(74, 30, 40, .14);

      z-index: 5;
    }


    .fire-parent::before {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 3px;

      background: #cf6c78;
    }


    .fire-parent svg {
      flex: 0 0 auto;

      margin-bottom: 2px;

      color: #f0a8b2;
    }


    .fire-parent span {
      color: #efb8c0;

      font-size: 8px;
      font-weight: 800;

      line-height: 1;

      letter-spacing: .16em;
    }


    .fire-parent h2 {
      margin: 5px 0 2px;

      color: #ffffff;

      font-size: 19px;
      font-weight: 700;

      line-height: 1.15;

      text-align: center;
    }


    .fire-parent p {
      margin: 0;

      color: #e3bdc3;

      font-size: 9px;
      font-weight: 550;

      text-align: center;
    }


    /* =====================================================
       FIRE PARENT → MAIN BUS
    ===================================================== */

    .fire-main-stem {
      width: var(--wire-size);
      height: 38px;

      margin: 0 auto;

      background: var(--wire);
    }


    /* =====================================================
       FIRE DISTRIBUTION

                  FIRE PROTECTION
                        │
                        │
             ───────────┼───────────
             │          │          │
          ALARMS     FIGHTING     PUMP
    ===================================================== */

    .fire-distribution {
      position: relative;

      width: 100%;

      height: 38px;
      min-height: 38px;
    }


    /* =====================================================
       HORIZONTAL BUS

       Three equal columns:

       first center  = 1/6
       middle center = 3/6
       last center   = 5/6

       Bus begins at the first branch and terminates
       at the third branch.
    ===================================================== */

    .fire-bus {
      position: absolute;

      top: 0;

      left:
        calc(
          100% / (var(--fire-count) * 2)
        );

      right:
        calc(
          100% / (var(--fire-count) * 2)
        );

      height: var(--wire-size);

      background: var(--wire);
    }

    .fire-bus--single {
      left: 50%;
      right: 50%;
    }


    /* =====================================================
       EXACT THREE VERTICAL BRANCHES

       Uses the same grid as the cards.
    ===================================================== */

    .fire-lines {
      position: absolute;

      inset: 0;

      display: grid;

      grid-template-columns:
        repeat(
          var(--fire-count),
          minmax(0, 1fr)
        );

      pointer-events: none;
    }


    .fire-line {
      position: relative;
    }


    .fire-line::before {
      content: "";

      position: absolute;

      top: 0;
      bottom: 0;

      left: 50%;

      width: var(--wire-size);

      transform:
        translateX(-50%);

      background: var(--wire);
    }


    /* =====================================================
       FIRE EQUIPMENT GRID

       IMPORTANT:
       Same three columns as .fire-lines.

       No gap is used for connector geometry.
    ===================================================== */

    .fire-grid {
      width: 100%;

      display: grid;

      grid-template-columns:
        repeat(
          var(--fire-count),
          minmax(0, 1fr)
        );

      gap: 0;

      align-items: start;
    }


    .fire-branch {
      position: relative;

      min-width: 0;

      display: flex;

      align-items: flex-start;
      justify-content: center;
    }


    /* =====================================================
       FLOW → CARD CONNECTION POINT
    ===================================================== */

    .fire-branch::before {
      content: "";

      position: absolute;

      top: 0;
      left: 50%;

      width: 6px;
      height: 6px;

      box-sizing: border-box;

      border:
        1px solid
        var(--wire);

      border-radius: 50%;

      background: #ffffff;

      transform:
        translate(
          -50%,
          -50%
        );

      z-index: 8;
    }


    /* =====================================================
       FIRE EQUIPMENT CARDS
    ===================================================== */

    .fire-branch > .eq-card {
      width: var(--fire-card-width);
      min-width: var(--fire-card-width);
      max-width: var(--fire-card-width);

      height: var(--fire-card-height);
      min-height: var(--fire-card-height);
      max-height: var(--fire-card-height);

      margin: 0;

      box-sizing: border-box;
    }


    /* =====================================================
       FIRE CARD ACCENT

       Keep operational colors inside EquipmentCard.
       Only use a restrained fire-system accent here.
    ===================================================== */

    .fire-branch > .eq-card {
      border-color:
        rgba(
          181,
          91,
          102,
          .72
        );
    }


    /* =====================================================
       NO MOVEMENT ON HOVER

       Critical for connector alignment.
    ===================================================== */

    .fire-view .eq-card:hover,
    .fire-view .eq-card:focus-visible {
      transform: none;
    }


    /* =====================================================
       LARGE DESKTOP
    ===================================================== */

    @media (min-width: 1500px) {

      .fire-view {
        --fire-card-width: 220px;
        --fire-card-height: 142px;
      }


      .fire-network {
        max-width: none;
      }


      .fire-parent {
        width: 450px;
        min-width: 450px;
        max-width: 450px;

        height: 114px;
        min-height: 114px;
      }
    }


    /* =====================================================
       NORMAL LAPTOP
    ===================================================== */

    @media (
      min-width: 1101px
    ) and (
      max-width: 1499px
    ) {

      .fire-view {
        --fire-card-width: 200px;
        --fire-card-height: 136px;
      }


      .fire-network {
        max-width: none;
      }


      .fire-parent {
        width: 420px;
        min-width: 420px;
        max-width: 420px;

        height: 108px;
        min-height: 108px;
      }
    }


    /* =====================================================
       SMALL LAPTOP / TABLET

       Preserve the topology instead of squeezing
       the three cards.
    ===================================================== */

    @media (max-width: 1100px) {

      .fire-view {
        --fire-card-width: 190px;
        --fire-card-height: 132px;

        padding-left: 18px;
        padding-right: 18px;
      }


      .fire-network {
        width: var(--fire-network-width);
        min-width: var(--fire-network-width);
      }


      .fire-parent {
        width: 390px;
        min-width: 390px;
        max-width: 390px;

        height: 104px;
        min-height: 104px;
      }
    }
  `}),r.jsxs("div",{className:"fire-network",style:{"--fire-count":p,"--fire-network-width":`${k}px`},children:[r.jsxs("div",{className:"fire-parent",children:[r.jsx(Gn,{size:26,strokeWidth:1.8}),r.jsx("span",{children:"LIFE SAFETY"}),r.jsx("h2",{children:"FIRE PROTECTION SYSTEM"}),r.jsx("p",{children:"DETECTION / PROTECTION / PUMP"})]}),p>0&&r.jsx("div",{className:"fire-main-stem"}),p>0&&r.jsxs("div",{className:"fire-distribution",children:[r.jsx("div",{className:`fire-bus ${p===1?"fire-bus--single":""}`}),r.jsx("div",{className:"fire-lines",children:u.map(N=>r.jsx("div",{className:"fire-line"},`line-${N.id}`))})]}),p>0&&r.jsx("div",{className:"fire-grid",children:u.map(N=>r.jsx("div",{className:"fire-branch",children:r.jsx(bt,{equipment:N,onOpen:s})},N.id))})]})]})}function Dh({topology:a,onOpenEquipment:s}){return r.jsxs("div",{className:"ups-view",children:[r.jsx("style",{children:`
    .ups-view {
      --wire:#19b8cf;
      width:100%;min-width:760px;min-height:100%;margin:0 auto;
      display:flex;flex-direction:column;justify-content:center;
    }
    .ups-parent {
      width:430px;min-height:100px;margin:0 auto;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      border:2px solid #2378b7;border-radius:7px;color:#fff;background:#102f6e;
    }
    .ups-parent h2 { margin:5px 0;font-size:18px; }
    .ups-stem { width:2px;height:34px;margin:0 auto;background:var(--wire); }
    .ups-grid {
      position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
      gap:18px;padding-top:34px;
    }
    .ups-bus {
      position:absolute;top:0;left:calc(50% / 4);right:calc(50% / 4);
      height:2px;background:var(--wire);
    }
    .ups-branch { position:relative; }
    .ups-branch::before {
      content:"";position:absolute;left:50%;bottom:100%;width:2px;height:34px;
      transform:translateX(-50%);background:var(--wire);
    }
    .ups-view .eq-card:hover { transform:none; }
  `}),r.jsxs("div",{className:"ups-parent",children:[r.jsx(Sn,{size:26}),r.jsx("h2",{children:"UPS SYSTEM"}),r.jsx("span",{children:"UNINTERRUPTIBLE POWER SUPPLY"})]}),r.jsx("div",{className:"ups-stem"}),r.jsxs("div",{className:"ups-grid",children:[r.jsx("div",{className:"ups-bus"}),a.equipment.map(p=>r.jsx("div",{className:"ups-branch",children:r.jsx(bt,{equipment:p,onOpen:s})},p.id))]})]})}function Uh({topology:a,onOpenEquipment:s}){switch(a.id){case"source":return r.jsx(Eh,{topology:a,onOpenEquipment:s});case"feeder":return r.jsx(Th,{topology:a,onOpenEquipment:s});case"transformer":return r.jsx(Ah,{topology:a,onOpenEquipment:s});case"lt-kiosk":return r.jsx(Rh,{topology:a,onOpenEquipment:s});case"busduct":return r.jsx(zh,{topology:a,onOpenEquipment:s});case"pcc":return r.jsx(Ih,{topology:a,onOpenEquipment:s});case"raising-main":return r.jsx(Ph,{topology:a,onOpenEquipment:s});case"wing":return r.jsx(Oh,{topology:a,onOpenEquipment:s});case"dg":return r.jsx(Lh,{topology:a,onOpenEquipment:s});case"hvac":return r.jsx(Mh,{topology:a,onOpenEquipment:s});case"wtp":return r.jsx(Fh,{topology:a,onOpenEquipment:s});case"fire":return r.jsx(Vh,{topology:a,onOpenEquipment:s});case"ups":return r.jsx(Dh,{topology:a,onOpenEquipment:s});default:return null}}function $h({project:a,flow:s,onBack:u,onOpenEquipment:p}){const k=jh(a,s==null?void 0:s.id);if(!k)return r.jsxs("main",{className:"fd-shell",children:[r.jsx("style",{children:Tu}),r.jsxs("div",{className:"fd-empty",children:[r.jsx(lt,{size:38}),r.jsx("h2",{children:"Flow configuration unavailable"}),r.jsx("button",{type:"button",onClick:u,children:"Back"})]})]});uh(k);const x=(s==null?void 0:s.icon)||lt;return r.jsxs("main",{className:"fd-shell",children:[r.jsx("style",{children:Tu}),r.jsxs("section",{className:"fd-dashboard",children:[r.jsxs("header",{className:"fd-header",children:[r.jsxs("div",{className:"fd-header__left",children:[r.jsxs("button",{type:"button",className:"fd-back",onClick:u,children:[r.jsx(vr,{size:17})," Overview"]}),r.jsx("span",{className:"fd-main-icon",children:r.jsx(x,{size:23})}),r.jsxs("div",{children:[r.jsx("span",{className:"fd-eyebrow",children:"BMS LIVE FLOW"}),r.jsx("h1",{children:k.title}),r.jsx("p",{children:k.subtitle})]})]}),r.jsxs("div",{className:"fd-header__right",children:[r.jsxs("span",{className:"fd-live",children:[r.jsx("i",{}),"DEMO LIVE"]}),r.jsxs("span",{className:"fd-comm",children:[r.jsx(lh,{size:15}),"Connected"]})]})]}),r.jsxs("section",{className:"fd-workspace",children:[r.jsxs("header",{className:"workspace-title",children:[r.jsxs("div",{children:[r.jsx("span",{children:"INTERNAL EQUIPMENT"}),r.jsx("h2",{children:"Operational Flow"})]}),r.jsxs("div",{className:"workspace-legend",children:[r.jsxs("span",{children:[r.jsx("i",{className:"dot-on"}),"Active"]}),r.jsxs("span",{children:[r.jsx("i",{className:"dot-standby"}),"Standby"]}),r.jsxs("span",{children:[r.jsx("i",{className:"dot-fault"}),"Fault"]})]})]}),r.jsx("div",{className:"fd-content",children:r.jsx(Uh,{topology:k,onOpenEquipment:p})})]}),r.jsx("footer",{className:"fd-footer",children:"Demo telemetry • Monitoring only • Backend-ready equipment IDs"})]})]})}const Tu=`
*,
*::before,
*::after { box-sizing:border-box; }

.fd-shell {
  width:100%;
  height:100%;
  min-height:0;
  padding:0;
  overflow:hidden;
  color:#18283a;
  background:transparent;
}

.fd-dashboard {
  width:100%;
  max-width:none;
  height:100%;
  min-height:0;
  margin:0;
  display:grid;
  grid-template-rows:64px minmax(0,1fr) 14px;
  gap:4px;
}

.fd-header {
  min-width:0;
  padding:8px 14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  border:1px solid #1e3b54;
  border-radius:9px;
  background:linear-gradient(120deg,#112b42 0%,#0b2033 52%,#102a40 100%);
}

.fd-header__left,
.fd-header__right { display:flex;align-items:center; }

.fd-header__left { min-width:0;gap:11px; }
.fd-header__right { flex-shrink:0;gap:8px; }

.fd-back {
  height:36px;padding:0 12px;display:inline-flex;align-items:center;gap:7px;
  border:1px solid #45647d;border-radius:6px;color:#e6eef5;background:#193850;
  cursor:pointer;font-size:10px;font-weight:700;
}

.fd-main-icon {
  width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;
  border:1px solid #477da4;border-radius:7px;color:#fff;background:#205475;
}

.fd-eyebrow {
  display:block;margin-bottom:2px;color:#7f9bb1;font-size:8px;font-weight:800;
  letter-spacing:.14em;
}

.fd-header h1 { margin:0;color:#fff;font-size:clamp(18px,1.35vw,24px);line-height:1.05; }
.fd-header p { margin:3px 0 0;color:#9bb0c0;font-size:9px; }

.fd-live,
.fd-comm {
  height:32px;padding:0 11px;display:inline-flex;align-items:center;gap:7px;
  border-radius:6px;font-size:8px;font-weight:800;letter-spacing:.04em;
}

.fd-live { color:#9de8c6;border:1px solid #32765f;background:#123e32; }
.fd-live i { width:7px;height:7px;border-radius:50%;background:#30d79b; }
.fd-comm { color:#d0dce6;border:1px solid #405f77;background:#17344c; }




.fd-workspace {
  width:100%;
  min-width:0;
  min-height:0;
  display:grid;
  grid-template-rows:46px minmax(0,1fr);
  overflow:hidden;
  border:0;
  border-radius:0;
  background:transparent;
}

.workspace-title {
  width:100%;
  padding:6px 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border:0;
  border-bottom:1px solid rgba(117,137,153,.20);
  background:transparent;
}

.workspace-title > div:first-child span {
  display:block;color:#82919e;font-size:7px;font-weight:800;letter-spacing:.14em;
}

.workspace-title h2 { margin:2px 0 0;color:#1e384d;font-size:16px; }
.workspace-legend { display:flex;gap:14px; }
.workspace-legend span {
  display:inline-flex;align-items:center;gap:5px;color:#687986;font-size:8px;font-weight:650;
}
.workspace-legend i { width:7px;height:7px;border-radius:50%; }
.dot-on { background:#22bf87; }
.dot-standby { background:#dda33d; }
.dot-fault { background:#dd4b5d; }

.fd-content {
  width:100%;
  min-width:0;
  min-height:0;
  padding:10px 18px 6px;
  overflow:auto;
  background:transparent;
}

/* SHARED EQUIPMENT CARD */
.eq-card {
  width:100%;min-width:0;min-height:132px;padding:12px 13px 10px;position:relative;
  display:flex;flex-direction:column;overflow:hidden;text-align:left;
  border:1px solid #2c75a7;border-radius:8px;color:#fff;
  background:linear-gradient(145deg,#173f75 0%,#103264 52%,#0c2855 100%);
  box-shadow:none;cursor:pointer;transition:border-color .16s ease,box-shadow .16s ease;
}

.eq-card::before {
  content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#2bd197;
}

.eq-card:hover,
.eq-card:focus-visible {
  border-color:#59b8d3;
  box-shadow:0 8px 20px rgba(13,47,72,.13);
  outline:none;
}

.eq-card--alarm {
  border-color:#a54e5d;
  background:linear-gradient(145deg,#6b3746,#4b2732);
}
.eq-card--alarm::before { background:#ef6575; }

.eq-card__top { display:flex;align-items:center;justify-content:space-between;gap:8px; }
.eq-card__icon {
  width:35px;height:35px;display:grid;place-items:center;
  border:1px solid rgba(255,255,255,.15);border-radius:6px;color:#b9dcf4;background:#12345f;
}

.eq-status {
  min-height:23px;padding:0 8px;display:inline-flex;align-items:center;gap:5px;
  border-radius:4px;font-size:8px;font-weight:800;
}
.eq-status i { width:6px;height:6px;border-radius:50%; }
.eq-status--on { color:#91e8c3;background:#124534; }
.eq-status--on i { background:#2dd69a; }
.eq-status--standby { color:#f1cd7c;background:#4b3a1d; }
.eq-status--standby i { background:#dfa63d; }
.eq-status--off { color:#d0d9e0;background:#334958; }
.eq-status--off i { background:#8a9aa7; }

.eq-card__name { margin:12px 0 8px; }
.eq-card__name h3 {
  margin:0;overflow:hidden;color:#fff;font-size:15px;font-weight:750;
  text-overflow:ellipsis;white-space:nowrap;
}
.eq-card__name p {
  min-height:12px;margin:3px 0 0;overflow:hidden;color:#a9c5d8;font-size:8px;
  text-overflow:ellipsis;white-space:nowrap;
}

.eq-card__bottom {
  min-height:24px;margin-top:auto;padding-top:7px;display:flex;align-items:center;
  justify-content:space-between;gap:6px;border-top:1px solid rgba(255,255,255,.10);
  color:#88e1bc;font-size:7px;
}
.eq-card__bottom > span { display:inline-flex;align-items:center;gap:4px; }
.eq-card__bottom i { width:6px;height:6px;border-radius:50%;background:#2bd197; }
.eq-card__bottom strong { color:#c5d3dd;font-size:7px; }

.eq-card__hover {
  position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
  justify-content:center;gap:10px;opacity:0;visibility:hidden;transform:translateY(5px);
  color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
  transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
}
.eq-card:hover .eq-card__hover,
.eq-card:focus-visible .eq-card__hover {
  opacity:1;visibility:visible;transform:translateY(0);
}
.eq-card__hover-title { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.16em; }
.eq-card__hover-grid {
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
  border-top:1px solid rgba(121,217,236,.22);
  border-bottom:1px solid rgba(121,217,236,.22);
}
.eq-card__hover-grid > div { min-width:0;padding:9px 7px; }
.eq-card__hover-grid > div + div { border-left:1px solid rgba(121,217,236,.18); }
.eq-card__hover-grid span { display:block;margin-bottom:3px;color:#91aabd;font-size:7px; }
.eq-card__hover-grid strong {
  display:block;overflow:hidden;color:#fff;font-size:11px;font-weight:650;
  text-overflow:ellipsis;white-space:nowrap;
}
.eq-card__hover small { color:#a8bac8;font-size:7px; }

/* SHARED SIMPLE CARD */
.simple-card {
  width:100%;min-height:132px;padding:16px 18px;position:relative;display:flex;
  flex-direction:column;align-items:center;justify-content:center;overflow:hidden;
  border:2px solid #1975bd;border-radius:7px;color:#fff;text-align:center;
  background:#102f6e;box-shadow:none;
}
button.simple-card { cursor:pointer; }
.simple-card svg { margin:5px 0;color:#a5d4f2; }
.simple-card__eyebrow { color:#9dc9eb;font-size:8px;font-weight:800;letter-spacing:.17em; }
.simple-card h3 { margin:4px 0;color:#fff;font-size:18px;font-weight:800; }
.simple-card p { margin:2px 0 8px;color:#c1d2e3;font-size:10px;font-weight:650; }
.simple-card > strong {
  display:inline-flex;align-items:center;gap:6px;color:#37dda7;font-size:8px;
}
.simple-card > strong i { width:8px;height:8px;border-radius:50%;background:#2bd197; }

.simple-card__hover {
  position:absolute;inset:0;z-index:5;padding:14px;display:flex;flex-direction:column;
  justify-content:center;gap:9px;opacity:0;visibility:hidden;transform:translateY(5px);
  color:#fff;background:linear-gradient(145deg,rgba(9,34,66,.985),rgba(8,45,75,.985));
  transition:opacity .16s ease,transform .16s ease,visibility .16s ease;pointer-events:none;
}
.simple-card:hover .simple-card__hover,
.simple-card:focus-visible .simple-card__hover {
  opacity:1;visibility:visible;transform:translateY(0);
}
.simple-card__hover > span { color:#79d9ec;font-size:7px;font-weight:800;letter-spacing:.15em; }
.simple-card__hover > div {
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
  border-top:1px solid rgba(121,217,236,.22);
  border-bottom:1px solid rgba(121,217,236,.22);
}
.simple-card__hover small { min-width:0;padding:8px 5px;color:#91aabd;font-size:7px; }
.simple-card__hover small + small { border-left:1px solid rgba(121,217,236,.18); }
.simple-card__hover b {
  display:block;margin-top:3px;overflow:hidden;color:#fff;font-size:10px;
  text-overflow:ellipsis;white-space:nowrap;
}
.simple-card__hover em { color:#a8bac8;font-size:7px;font-style:normal; }

.fd-footer { padding:0 4px;display:flex;align-items:center;color:#6f8190;font-size:7px;white-space:nowrap; }

.fd-empty {
  min-height:100vh;display:grid;place-items:center;align-content:center;gap:12px;
}
.fd-empty button {
  padding:9px 14px;border:0;border-radius:6px;color:#fff;background:#234f73;
}

/* Global dark theme only. Individual topology colors remain inside each view. */
html[data-theme="dark"] .fd-shell {
  color:var(--app-text,#f4f8fc);
  background:var(--app-bg,#07111f);
}
html[data-theme="dark"] .fd-workspace,
html[data-theme="dark"] .fd-content,
html[data-theme="dark"] .workspace-title {
  border-color:var(--app-border,#203651);
  background-color:var(--app-surface,#0b1728);
}
html[data-theme="dark"] .workspace-title h2 { color:var(--app-text,#f4f8fc); }
html[data-theme="dark"] .workspace-title span,
html[data-theme="dark"] .workspace-legend span { color:var(--app-muted,#8294aa); }

@media(max-width:900px) {
  .fd-shell { height:auto;min-height:100%;overflow:visible; }
  .fd-dashboard { height:auto;min-height:100%;display:flex;flex-direction:column; }
  .fd-header { flex-wrap:wrap; }
  .fd-workspace { overflow:visible; }
  .fd-content { overflow-x:auto;overflow-y:visible; }
}

@media(max-width:600px) {
  .fd-shell { padding:6px; }
  .fd-header { align-items:flex-start;flex-direction:column; }
  .fd-header__left { width:100%;flex-wrap:wrap; }
  .fd-header__right { width:100%;justify-content:flex-end; }
  .workspace-title { align-items:flex-start;flex-direction:column;gap:6px; }
}
`,Au={fault1:!1,fault2:!1,fault3:!1,fault4:!1};function Wh(a){switch(a==null?void 0:a.type){case"transformer":return[{key:"fault1",label:"Oil Temperature",icon:jn},{key:"fault2",label:"Winding Temperature",icon:jn},{key:"fault3",label:"Buchholz Relay",icon:di},{key:"fault4",label:"Transformer Fault",icon:Ge}];case"busduct":case"busbar":return[{key:"fault1",label:"High Temperature",icon:jn},{key:"fault2",label:"Vibration",icon:Qt},{key:"fault3",label:"Busduct Health",icon:Ot},{key:"fault4",label:"Busduct Fault",icon:Ut}];case"ups":return[{key:"fault1",label:"Input Supply",icon:Ge},{key:"fault2",label:"Battery Warning",icon:Sn},{key:"fault3",label:"Output Supply",icon:Xt},{key:"fault4",label:"UPS Fault",icon:Ut}];case"stp":case"wtp":return[{key:"fault1",label:"Inlet Flow",icon:Oe},{key:"fault2",label:"Outlet Flow",icon:Oe},{key:"fault3",label:"Water Quality",icon:Qt},{key:"fault4",label:"Plant Fault",icon:Ut}];case"tank":return[{key:"fault1",label:"High Level",icon:Oe},{key:"fault2",label:"Low Level",icon:Oe},{key:"fault3",label:"Flow Condition",icon:Qt},{key:"fault4",label:"Tank Alarm",icon:Ut}];case"fire-alarm":return[{key:"fault1",label:"Smoke Alarm",icon:Gn},{key:"fault2",label:"Heat Alarm",icon:jn},{key:"fault3",label:"Zone Alarm",icon:di},{key:"fault4",label:"System Fault",icon:Ut}];case"fire-fighting":return[{key:"fault1",label:"Low Pressure",icon:ht},{key:"fault2",label:"Hydrant Network",icon:Oe},{key:"fault3",label:"Sprinkler Network",icon:Oe},{key:"fault4",label:"Valve Fault",icon:Ut}];case"fire-pump":return[{key:"fault1",label:"Pump Fault",icon:Ut},{key:"fault2",label:"Low Pressure",icon:ht},{key:"fault3",label:"Supply Fault",icon:Ge},{key:"fault4",label:"Mode Fault",icon:di}];case"pcc-circuit":case"coupler":return[{key:"fault1",label:"Breaker Fault",icon:Ve},{key:"fault2",label:"Earth Fault",icon:Qt},{key:"fault3",label:"Short Circuit",icon:Ge},{key:"fault4",label:"Over Current",icon:Xt}];default:return[{key:"fault1",label:"System Fault",icon:Ut},{key:"fault2",label:"Earth Fault",icon:Qt},{key:"fault3",label:"Short Circuit",icon:Ge},{key:"fault4",label:"Over Current",icon:Xt}]}}function Ao(a){return[{icon:Xt,label:"Energy",value:(a==null?void 0:a.kWh)??"--",unit:(a==null?void 0:a.kWh)!=null?"kWh":""},{icon:lt,label:"Apparent Energy",value:(a==null?void 0:a.kVAh)??"--",unit:(a==null?void 0:a.kVAh)!=null?"kVAh":""},{icon:Ge,label:"Voltage",value:(a==null?void 0:a.voltage)??"--",unit:(a==null?void 0:a.voltage)!=null?a.voltage===33?"kV":"V":""},{icon:lt,label:"Current",value:(a==null?void 0:a.current)??"--",unit:(a==null?void 0:a.current)!=null?"A":""},{icon:ht,label:"Power Factor",value:(a==null?void 0:a.powerFactor)??"--"},{icon:ht,label:"Load",value:(a==null?void 0:a.load)??"--",unit:(a==null?void 0:a.load)!=null?"%":""}]}function Bh(a,s){switch(a==null?void 0:a.type){case"transformer":return[{icon:jn,label:"Oil Temperature",value:(s==null?void 0:s.oilTemp)??"--",unit:(s==null?void 0:s.oilTemp)!=null?"°C":""},{icon:jn,label:"Winding Temperature",value:(s==null?void 0:s.windingTemp)??"--",unit:(s==null?void 0:s.windingTemp)!=null?"°C":""},{icon:Ot,label:"Buchholz Relay",value:(s==null?void 0:s.buchholz)??"--"},{icon:ht,label:"Load",value:(s==null?void 0:s.load)??"--",unit:(s==null?void 0:s.load)!=null?"%":""}];case"busduct":case"busbar":return[{icon:jn,label:"Temperature",value:(s==null?void 0:s.temperature)??"--",unit:(s==null?void 0:s.temperature)!=null?"°C":""},{icon:Qt,label:"Vibration",value:(s==null?void 0:s.vibration)??"--",unit:typeof(s==null?void 0:s.vibration)=="number"?"mm/s":""},{icon:Ge,label:"Voltage",value:(s==null?void 0:s.voltage)??"--",unit:(s==null?void 0:s.voltage)!=null?"V":""},{icon:ht,label:"Load",value:(s==null?void 0:s.load)??"--",unit:(s==null?void 0:s.load)!=null?"%":""},{icon:Ot,label:"Health",value:(s==null?void 0:s.health)??"--"},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"ups":return[{icon:Sn,label:"Capacity",value:(s==null?void 0:s.capacity)??"--"},{icon:Ge,label:"Input Voltage",value:(s==null?void 0:s.inputVoltage)??"--",unit:(s==null?void 0:s.inputVoltage)!=null?"V":""},{icon:Ge,label:"Output Voltage",value:(s==null?void 0:s.outputVoltage)??"--",unit:(s==null?void 0:s.outputVoltage)!=null?"V":""},{icon:ht,label:"Load",value:(s==null?void 0:s.load)??"--",unit:(s==null?void 0:s.load)!=null?"%":""},{icon:Sn,label:"Battery",value:(s==null?void 0:s.battery)??"--",unit:(s==null?void 0:s.battery)!=null?"%":""},{icon:Qt,label:"Input Frequency",value:(s==null?void 0:s.inputFrequency)??"--",unit:(s==null?void 0:s.inputFrequency)!=null?"Hz":""},{icon:Qt,label:"Output Frequency",value:(s==null?void 0:s.outputFrequency)??"--",unit:(s==null?void 0:s.outputFrequency)!=null?"Hz":""},{icon:Sn,label:"Battery Voltage",value:(s==null?void 0:s.batteryVoltage)??"--",unit:(s==null?void 0:s.batteryVoltage)!=null?"V":""},{icon:lt,label:"Backup Time",value:(s==null?void 0:s.backupTime)??"--"},{icon:Ve,label:"Mode",value:(s==null?void 0:s.mode)??"--"}];case"water-main":return[{icon:Oe,label:"Flow Rate",value:(s==null?void 0:s.flowRate)??"--",unit:(s==null?void 0:s.flowRate)!=null?"m³/h":""},{icon:Oe,label:"Total Water",value:(s==null?void 0:s.totalWater)??"--",unit:(s==null?void 0:s.totalWater)!=null?"%":""},{icon:ht,label:"Pressure",value:(s==null?void 0:s.pressure)??"--",unit:(s==null?void 0:s.pressure)!=null?"bar":""},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"stp":case"wtp":return[{icon:Oe,label:"Inlet Flow",value:(s==null?void 0:s.inletFlow)??"--",unit:(s==null?void 0:s.inletFlow)!=null?"m³/h":""},{icon:Oe,label:"Outlet Flow",value:(s==null?void 0:s.outletFlow)??"--",unit:(s==null?void 0:s.outletFlow)!=null?"m³/h":""},{icon:lt,label:"pH",value:(s==null?void 0:s.ph)??"--"},{icon:Qt,label:"Turbidity",value:(s==null?void 0:s.turbidity)??"--",unit:(s==null?void 0:s.turbidity)!=null?"NTU":""},{icon:Ot,label:"Health",value:(s==null?void 0:s.health)??"--"},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"tank":return[{icon:Oe,label:"Level",value:(s==null?void 0:s.level)??"--",unit:(s==null?void 0:s.level)!=null?"%":""},{icon:Oe,label:"Volume",value:(s==null?void 0:s.volume)??"--",unit:(s==null?void 0:s.volume)!=null?"m³":""},{icon:lt,label:"Inlet Flow",value:(s==null?void 0:s.inletFlow)??"--",unit:(s==null?void 0:s.inletFlow)!=null?"m³/h":""},{icon:lt,label:"Outlet Flow",value:(s==null?void 0:s.outletFlow)??"--",unit:(s==null?void 0:s.outletFlow)!=null?"m³/h":""},{icon:Ot,label:"Health",value:(s==null?void 0:s.health)??"--"},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"fire-alarm":return[{icon:Gn,label:"Smoke Detectors",value:(s==null?void 0:s.smokeDetectors)??"--"},{icon:jn,label:"Heat Detectors",value:(s==null?void 0:s.heatDetectors)??"--"},{icon:di,label:"Alarm Zones",value:(s==null?void 0:s.alarmZones)??"--"},{icon:Ut,label:"Active Alarms",value:(s==null?void 0:s.activeAlarms)??"--"},{icon:Ot,label:"Health",value:(s==null?void 0:s.health)??"--"},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"fire-fighting":return[{icon:ht,label:"Pressure",value:(s==null?void 0:s.pressure)??"--",unit:(s==null?void 0:s.pressure)!=null?"bar":""},{icon:Oe,label:"Hydrant Network",value:(s==null?void 0:s.hydrantNetwork)??"--"},{icon:Oe,label:"Sprinkler Network",value:(s==null?void 0:s.sprinklerNetwork)??"--"},{icon:lt,label:"Main Valve",value:(s==null?void 0:s.mainValve)??"--"},{icon:Ot,label:"Health",value:(s==null?void 0:s.health)??"--"},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"fire-pump":return[{icon:Ge,label:"Voltage",value:(s==null?void 0:s.voltage)??"--",unit:(s==null?void 0:s.voltage)!=null?"V":""},{icon:ht,label:"Pressure",value:(s==null?void 0:s.pressure)??"--",unit:(s==null?void 0:s.pressure)!=null?"bar":""},{icon:lt,label:"Operating Mode",value:(s==null?void 0:s.mode)??"--"},{icon:Ve,label:"Pump State",value:(s==null?void 0:s.pumpState)??"--"},{icon:Ot,label:"Health",value:(s==null?void 0:s.health)??"--"},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"pcc-circuit":return[...Ao(s),{icon:Ve,label:"Breaker State",value:(s==null?void 0:s.breakerState)??"--"}];case"coupler":return[{icon:Ve,label:"Breaker State",value:(s==null?void 0:s.breakerState)??"--"},{icon:Ge,label:"Voltage",value:(s==null?void 0:s.voltage)??"--",unit:(s==null?void 0:s.voltage)!=null?"V":""},{icon:lt,label:"Current",value:(s==null?void 0:s.current)??"--",unit:(s==null?void 0:s.current)!=null?"A":""},{icon:ht,label:"Power Factor",value:(s==null?void 0:s.powerFactor)??"--"},{icon:ht,label:"Load",value:(s==null?void 0:s.load)??"--",unit:(s==null?void 0:s.load)!=null?"%":""},{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];case"dg":return[{icon:Ve,label:"Capacity",value:(s==null?void 0:s.capacity)??"--"},...Ao(s),{icon:Ve,label:"Status",value:(s==null?void 0:s.status)??"--"}];default:return Ao(s)}}function Fs({label:a,active:s,tone:u,icon:p}){return r.jsxs("article",{className:`status-tile status-tile--${u} ${s?"is-active":""}`,children:[r.jsx("div",{className:"status-tile__icon",children:r.jsx(p,{size:22,strokeWidth:1.9})}),r.jsxs("div",{className:"status-tile__content",children:[r.jsx("span",{children:a}),r.jsx("strong",{children:s?"ACTIVE":"STANDBY"})]}),r.jsx("span",{className:"status-tile__indicator"})]})}function Hh({icon:a,label:s,value:u,unit:p}){return r.jsxs("article",{className:"metric-card",children:[r.jsx("div",{className:"metric-card__icon",children:r.jsx(a,{size:20,strokeWidth:1.9})}),r.jsxs("div",{className:"metric-card__body",children:[r.jsx("span",{children:s}),r.jsxs("strong",{children:[u??"--",p&&r.jsx("small",{children:p})]})]})]})}function Gh({flow:a,equipment:s,onBack:u}){const p=(s==null?void 0:s.telemetry)||{},k=!!(p!=null&&p.fault)||!!(p!=null&&p.trip),x=(p==null?void 0:p.status)!=="OFF"&&(p==null?void 0:p.status)!=="OFFLINE",[N,y]=re.useState(x),[g,_]=re.useState(Au),S=(a==null?void 0:a.icon)||lt,I=Wh(s),M=Bh(s,p),Z=re.useMemo(()=>Object.values(g).some(Boolean),[g]),z=k||Z,F=re.useMemo(()=>z?"TRIP":N?"ON":"OFF",[z,N]),P=N&&!z&&(p==null?void 0:p.warning)!==!0,K=D=>{_(le=>({...le,[D]:!le[D]}))},ve=()=>{z||y(D=>!D)},Te=()=>{_(Au),y((p==null?void 0:p.status)!=="OFF"&&(p==null?void 0:p.status)!=="OFFLINE")};return s?r.jsx("main",{className:"system-detail-shell",children:r.jsxs("section",{className:"system-detail-dashboard",children:[r.jsxs("header",{className:"topbar",children:[r.jsxs("div",{className:"topbar__left",children:[r.jsx("button",{type:"button",className:"back-button",onClick:u,children:r.jsx(vr,{size:18})}),r.jsxs("div",{className:"system-identity",children:[r.jsx("div",{className:"system-identity__mark",children:r.jsx(S,{size:22})}),r.jsxs("div",{children:[r.jsx("strong",{children:s.name}),r.jsx("span",{children:s.label||(a==null?void 0:a.description)})]})]})]}),r.jsxs("div",{className:"topbar__right",children:[r.jsxs("div",{className:`connection-state ${P?"is-live":""}`,children:[r.jsx("span",{}),z?"TRIP ACTIVE":N?"SYSTEM ONLINE":"SYSTEM OFFLINE"]}),r.jsxs("button",{type:"button",className:`action-btn action-btn--power ${P?"is-on":""}`,onClick:ve,disabled:z,children:[r.jsx(ui,{size:17}),P?"ON":"OFF"]}),r.jsxs("button",{type:"button",className:"action-btn",onClick:Te,children:[r.jsx(yt,{size:17}),"Reset"]})]})]}),r.jsxs("section",{className:"status-row",children:[r.jsx(Fs,{label:"ON",active:F==="ON",tone:"on",icon:Ve}),r.jsx(Fs,{label:"OFF",active:F==="OFF",tone:"off",icon:ui}),r.jsx(Fs,{label:"TRIP",active:F==="TRIP",tone:"trip",icon:di}),r.jsx(Fs,{label:"HEALTHY",active:P,tone:"healthy",icon:Ot})]}),r.jsxs("section",{className:"workspace",children:[r.jsxs("section",{className:"protection-card",children:[r.jsxs("div",{className:"section-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"section-kicker",children:"MONITORING"}),r.jsxs("h2",{children:[s.name," Monitoring"]})]}),r.jsxs("div",{className:`alarm-badge ${z?"is-alarm":""}`,children:[r.jsx("span",{}),z?"Alarm Active":"Normal"]})]}),r.jsx("div",{className:"fault-grid",children:I.map(({key:D,label:le,icon:ee})=>{const oe=g[D];return r.jsxs("button",{type:"button",className:`fault-card ${oe?"is-active":""}`,onClick:()=>K(D),children:[r.jsxs("div",{className:"fault-card__top",children:[r.jsx("span",{className:"fault-card__icon",children:r.jsx(ee,{size:22,strokeWidth:1.9})}),r.jsx("span",{className:"fault-card__led"})]}),r.jsxs("div",{children:[r.jsx("strong",{children:le}),r.jsx("span",{children:oe?"Detected":"Normal"})]})]},D)})})]}),r.jsxs("aside",{className:`breaker-card breaker-card--${F.toLowerCase()}`,children:[r.jsx("div",{className:"section-head section-head--compact",children:r.jsxs("div",{children:[r.jsx("span",{className:"section-kicker",children:"EQUIPMENT"}),r.jsx("h2",{children:"Operating State"})]})}),r.jsxs("div",{className:"breaker-visual",children:[r.jsx("div",{className:"breaker-ring breaker-ring--outer"}),r.jsx("div",{className:"breaker-ring breaker-ring--middle"}),r.jsxs("div",{className:"breaker-core",children:[r.jsx(ui,{size:32,strokeWidth:1.8}),r.jsx("strong",{children:F}),r.jsx("span",{children:P?"Healthy":z?"Fault Active":"Stopped"})]})]}),r.jsxs("div",{className:"breaker-details",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Equipment"}),r.jsx("strong",{children:N?"Running":"Stopped"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"Monitoring"}),r.jsx("strong",{children:z?"Alarm":"Normal"})]})]})]})]}),r.jsxs("section",{className:"metering-card",children:[r.jsxs("div",{className:"section-head section-head--meter",children:[r.jsx("div",{children:r.jsxs("h2",{children:[s.name," Parameters"]})}),r.jsxs("div",{className:"live-badge",children:[r.jsx("span",{}),"LIVE"]})]}),r.jsx("div",{className:"metrics-grid",children:M.map(D=>r.jsx(Hh,{icon:D.icon,label:D.label,value:N?D.value:"--",unit:N?D.unit:""},D.label))})]})]})}):r.jsx("main",{className:"system-detail-shell",children:r.jsx("section",{className:"system-detail-dashboard",children:r.jsx("div",{style:{minHeight:"calc(100vh - 32px)",display:"grid",placeItems:"center",textAlign:"center"},children:r.jsxs("div",{children:[r.jsx(Ut,{size:34}),r.jsx("h2",{children:"No equipment selected"}),r.jsx("button",{type:"button",className:"back-button",onClick:u,children:r.jsx(vr,{size:18})})]})})})})}function qh({theme:a,setTheme:s,projects:u=[],onCreateProject:p,onOpenProject:k}){const x=`
    .sa-dashboard {
      --bg:#07131e;
      --surface:#0d1e2c;
      --surface-2:#102638;
      --border:#203d50;
      --text:#f4f8fb;
      --muted:#819cab;
      --cyan:#20b8ce;
      --green:#31c48d;

      width:100%;
      min-height:100vh;
      box-sizing:border-box;
      background:var(--bg);
      color:var(--text);
      font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    }

    .sa-dashboard__header {
      height:72px;
      padding:0 34px;
      box-sizing:border-box;
      display:flex;
      align-items:center;
      justify-content:space-between;
      border-bottom:1px solid var(--border);
      background:#091823;
    }

    .sa-dashboard__brand {
      display:flex;
      align-items:center;
      gap:12px;
    }

    .sa-dashboard__brand-icon {
      width:40px;
      height:40px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px solid #247f98;
      border-radius:6px;
      color:#5bd3e2;
      background:#0e3448;
    }

    .sa-dashboard__brand strong {
      display:block;
      font-size:15px;
      line-height:1.1;
    }

    .sa-dashboard__brand span {
      display:block;
      margin-top:4px;
      color:#7798aa;
      font-size:8px;
      font-weight:800;
      letter-spacing:.14em;
    }

    .sa-dashboard__header-actions {
      display:flex;
      align-items:center;
      gap:12px;
    }

    .sa-dashboard__role {
      padding:7px 10px;
      border:1px solid #24556d;
      border-radius:5px;
      color:#75cbd9;
      background:#0d2939;
      font-size:9px;
      font-weight:800;
      letter-spacing:.08em;
    }

    .sa-dashboard__theme {
      width:38px;
      height:38px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px solid var(--border);
      border-radius:5px;
      color:#9ab9c9;
      background:#102536;
      cursor:pointer;
    }

    .sa-dashboard__body {
      width:min(100%,1440px);
      margin:0 auto;
      padding:32px 38px 44px;
      box-sizing:border-box;
    }

    .sa-dashboard__intro {
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap:30px;
      margin-bottom:28px;
    }

    .sa-dashboard__eyebrow {
      margin-bottom:7px;
      color:var(--cyan);
      font-size:9px;
      font-weight:800;
      letter-spacing:.14em;
    }

    .sa-dashboard__intro h1 {
      margin:0;
      font-size:29px;
      font-weight:720;
      letter-spacing:-.025em;
    }

    .sa-dashboard__intro p {
      max-width:650px;
      margin:8px 0 0;
      color:var(--muted);
      font-size:11px;
      line-height:1.6;
    }

    .sa-dashboard__create {
      height:42px;
      padding:0 17px;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      flex-shrink:0;
      border:1px solid #28a9bd;
      border-radius:5px;
      color:#04171e;
      background:#36c3d3;
      font-size:10px;
      font-weight:800;
      cursor:pointer;
    }

    .sa-dashboard__create:hover {
      background:#50d0dd;
    }

    .sa-dashboard__stats {
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:14px;
      margin-bottom:30px;
    }

    .sa-stat {
      min-height:102px;
      padding:17px;
      box-sizing:border-box;
      display:flex;
      align-items:center;
      gap:14px;
      border:1px solid var(--border);
      border-radius:6px;
      background:var(--surface);
    }

    .sa-stat__icon {
      width:42px;
      height:42px;
      flex:0 0 42px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px solid #235a70;
      border-radius:5px;
      color:#56c9d9;
      background:#103246;
    }

    .sa-stat span {
      display:block;
      margin-bottom:4px;
      color:var(--muted);
      font-size:8px;
      font-weight:800;
      letter-spacing:.09em;
    }

    .sa-stat strong {
      display:block;
      font-size:22px;
      font-weight:600;
    }

    .sa-dashboard__section-head {
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-bottom:13px;
    }

    .sa-dashboard__section-head h2 {
      margin:0;
      font-size:15px;
      font-weight:700;
    }

    .sa-dashboard__section-head span {
      color:var(--muted);
      font-size:9px;
    }

    .sa-projects {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:16px;
    }

    .sa-project {
      min-height:218px;
      padding:18px;
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      border:1px solid var(--border);
      border-radius:6px;
      background:var(--surface);
    }

    .sa-project__top {
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
    }

    .sa-project__icon {
      width:40px;
      height:40px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px solid #28667d;
      border-radius:5px;
      color:#5dd0df;
      background:#103247;
    }

    .sa-project__status {
      display:flex;
      align-items:center;
      gap:6px;
      color:#7fd8b5;
      font-size:8px;
      font-weight:800;
      letter-spacing:.08em;
    }

    .sa-project__status::before {
      content:"";
      width:6px;
      height:6px;
      border-radius:50%;
      background:var(--green);
    }

    .sa-project h3 {
      margin:16px 0 4px;
      font-size:15px;
      font-weight:700;
    }

    .sa-project__client {
      margin:0;
      color:var(--muted);
      font-size:9px;
    }

    .sa-project__systems {
      margin:14px 0;
      color:#9eb7c5;
      font-size:9px;
      line-height:1.55;
    }

    .sa-project__open {
      width:100%;
      height:36px;
      margin-top:auto;
      padding:0 11px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      border:1px solid #285b72;
      border-radius:4px;
      color:#bcd2de;
      background:#10283a;
      font-size:9px;
      font-weight:800;
      cursor:pointer;
    }

    .sa-project__open:hover {
      border-color:#2d9db5;
      color:#67d1df;
    }

    .sa-projects-empty {
      grid-column:1 / -1;
      min-height:310px;
      padding:40px;
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      border:1px dashed #294b60;
      border-radius:6px;
      background:#0a1b28;
      text-align:center;
    }

    .sa-projects-empty__icon {
      width:56px;
      height:56px;
      margin-bottom:16px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px solid #265b71;
      border-radius:6px;
      color:#5acbd9;
      background:#0f2c3e;
    }

    .sa-projects-empty h3 {
      margin:0 0 7px;
      font-size:16px;
    }

    .sa-projects-empty p {
      max-width:460px;
      margin:0 0 18px;
      color:var(--muted);
      font-size:10px;
      line-height:1.6;
    }

    html[data-theme="light"] .sa-dashboard {
      --bg:#f3f6f8;
      --surface:#ffffff;
      --surface-2:#edf3f6;
      --border:#cfdae0;
      --text:#17354b;
      --muted:#647e8e;
      background:var(--bg);
    }

    html[data-theme="light"] .sa-dashboard__header {
      background:#ffffff;
    }

    html[data-theme="light"] .sa-dashboard__theme {
      color:#476879;
      background:#ffffff;
    }

    html[data-theme="light"] .sa-project__open {
      color:#315a70;
      background:#edf4f7;
    }

    html[data-theme="light"] .sa-projects-empty {
      background:#ffffff;
    }

    @media (max-width:1050px) {
      .sa-dashboard__stats {
        grid-template-columns:repeat(2,minmax(0,1fr));
      }

      .sa-projects {
        grid-template-columns:repeat(2,minmax(0,1fr));
      }
    }

    @media (max-width:700px) {
      .sa-dashboard__header {
        padding:0 18px;
      }

      .sa-dashboard__role {
        display:none;
      }

      .sa-dashboard__body {
        padding:24px 18px 35px;
      }

      .sa-dashboard__intro {
        align-items:flex-start;
        flex-direction:column;
      }

      .sa-dashboard__stats,
      .sa-projects {
        grid-template-columns:1fr;
      }
    }
  `,N=u.reduce((y,g)=>{var _;return y+(((_=g.systems)==null?void 0:_.length)||0)},0);return r.jsxs("main",{className:"sa-dashboard",children:[r.jsx("style",{children:x}),r.jsxs("header",{className:"sa-dashboard__header",children:[r.jsxs("div",{className:"sa-dashboard__brand",children:[r.jsx("div",{className:"sa-dashboard__brand-icon",children:r.jsx(lt,{size:21,strokeWidth:1.8})}),r.jsxs("div",{children:[r.jsx("strong",{children:"BMS CONTROL"}),r.jsx("span",{children:"PROJECT CONFIGURATION PLATFORM"})]})]}),r.jsxs("div",{className:"sa-dashboard__header-actions",children:[r.jsx("div",{className:"sa-dashboard__role",children:"SUPER ADMIN"}),r.jsx("button",{type:"button",className:"sa-dashboard__theme",onClick:()=>s==null?void 0:s(a==="dark"?"light":"dark"),"aria-label":"Change theme",children:a==="dark"?r.jsx(Mu,{size:17}):r.jsx(Ou,{size:17})})]})]}),r.jsxs("section",{className:"sa-dashboard__body",children:[r.jsxs("div",{className:"sa-dashboard__intro",children:[r.jsxs("div",{children:[r.jsx("div",{className:"sa-dashboard__eyebrow",children:"BMS PROJECT MANAGEMENT"}),r.jsx("h1",{children:"Super Admin Dashboard"}),r.jsx("p",{children:"Create and configure client BMS projects from one place. Selected systems, equipment and topology will be used to generate the project's operational dashboard."})]}),r.jsxs("button",{type:"button",className:"sa-dashboard__create",onClick:p,children:[r.jsx(Cu,{size:16}),"CREATE NEW PROJECT"]})]}),r.jsxs("div",{className:"sa-dashboard__stats",children:[r.jsxs("div",{className:"sa-stat",children:[r.jsx("div",{className:"sa-stat__icon",children:r.jsx(ih,{size:20})}),r.jsxs("div",{children:[r.jsx("span",{children:"TOTAL PROJECTS"}),r.jsx("strong",{children:u.length})]})]}),r.jsxs("div",{className:"sa-stat",children:[r.jsx("div",{className:"sa-stat__icon",children:r.jsx(Zt,{size:20})}),r.jsxs("div",{children:[r.jsx("span",{children:"CLIENTS"}),r.jsx("strong",{children:u.length})]})]}),r.jsxs("div",{className:"sa-stat",children:[r.jsx("div",{className:"sa-stat__icon",children:r.jsx(Hn,{size:20})}),r.jsxs("div",{children:[r.jsx("span",{children:"CONFIGURED SYSTEMS"}),r.jsx("strong",{children:N})]})]}),r.jsxs("div",{className:"sa-stat",children:[r.jsx("div",{className:"sa-stat__icon",children:r.jsx(Ge,{size:20})}),r.jsxs("div",{children:[r.jsx("span",{children:"PLATFORM STATUS"}),r.jsx("strong",{style:{fontSize:"14px",color:"#31c48d"},children:"ACTIVE"})]})]})]}),r.jsxs("div",{className:"sa-dashboard__section-head",children:[r.jsx("h2",{children:"Client Projects"}),r.jsxs("span",{children:[u.length," configured"]})]}),r.jsx("div",{className:"sa-projects",children:u.length===0?r.jsxs("div",{className:"sa-projects-empty",children:[r.jsx("div",{className:"sa-projects-empty__icon",children:r.jsx(Zt,{size:27})}),r.jsx("h3",{children:"No BMS projects yet"}),r.jsx("p",{children:"Create your first client project and configure its Source, Transformer, DG and other BMS systems."}),r.jsxs("button",{type:"button",className:"sa-dashboard__create",onClick:p,children:[r.jsx(Cu,{size:16}),"CREATE FIRST PROJECT"]})]}):u.map(y=>{var _;const g=((_=y.systems)==null?void 0:_.map(S=>S.name||S.title||S.type).join(" • "))||"No systems configured";return r.jsxs("article",{className:"sa-project",children:[r.jsxs("div",{className:"sa-project__top",children:[r.jsx("div",{className:"sa-project__icon",children:r.jsx(Zt,{size:20})}),r.jsx("div",{className:"sa-project__status",children:"ACTIVE"})]}),r.jsx("h3",{children:y.projectName||y.name}),r.jsx("p",{className:"sa-project__client",children:y.clientName||"Client"}),r.jsx("div",{className:"sa-project__systems",children:g}),r.jsxs("button",{type:"button",className:"sa-project__open",onClick:()=>k==null?void 0:k(y),children:["OPEN BMS DASHBOARD",r.jsx(nh,{size:15})]})]},y.id)})})]})]})}const Ru=[{id:"source",name:"Source",description:"HT source and incoming supply monitoring",icon:Fu},{id:"feeder",name:"Feeder",description:"Incoming and outgoing feeder monitoring",icon:ht},{id:"transformer",name:"Transformer",description:"Transformer status and load monitoring",icon:Ge},{id:"lt-kiosk",name:"LT Kiosk",description:"LT kiosk distribution monitoring",icon:Io},{id:"busduct",name:"Busduct",description:"Busduct temperature and health monitoring",icon:Bn},{id:"pcc",name:"PCC",description:"Power control centre monitoring",icon:Hn},{id:"raising-main",name:"Raising Main",description:"Vertical distribution monitoring",icon:sh},{id:"wing",name:"Wing",description:"Building wing electrical monitoring",icon:Zt},{id:"dg",name:"DG",description:"Diesel generator monitoring",icon:ui},{id:"hvac",name:"HVAC",description:"Mechanical equipment monitoring",icon:Vu},{id:"wtp",name:"Water Management",description:"STP, WTP and tank monitoring",icon:Oe},{id:"fire",name:"Fire",description:"Fire and life safety monitoring",icon:Gn}],Kh=[{id:1,label:"PROJECT"},{id:2,label:"SYSTEMS"},{id:3,label:"CONFIGURE"},{id:4,label:"REVIEW"}],Ro=a=>Array.from({length:a},(s,u)=>({name:`DG${u+1}`,capacity:u<4?1500:1250})),Lo=[{id:"ups-30-1",name:"30kVA-1"},{id:"ups-30-2",name:"30kVA-2"},{id:"ups-10-1",name:"10kVA-1"},{id:"ups-10-2",name:"10kVA-2"}],zo=a=>Array.from({length:a},(s,u)=>({id:`pcc-${u+1}`,name:`PCC ${u+1}`,equipment:u<2?["utility1","utility2","ups"]:[],upsUnits:u<2?Lo.map(p=>p.id):[]}));function Yh({onCancel:a,onProjectCreated:s}){const[u,p]=re.useState(1),[k,x]=re.useState(""),[N,y]=re.useState({clientName:"",projectName:"",projectCode:"",location:"",email:"",password:""}),[g,_]=re.useState(["source"]),[S,I]=re.useState({voltageLevel:"33kV",incomingCount:2,outgoingCount:1,meterCount:1,protectionRelay:!0,busCoupler:!1}),[M,Z]=re.useState({voltageLevel:"33kV",incomingCount:1,outgoingCount:6}),[z,F]=re.useState({count:6,primaryVoltage:"33kV",secondaryVoltage:"433V"}),[P,K]=re.useState({count:6}),[ve,Te]=re.useState({count:6}),[D,le]=re.useState({count:4,panels:zo(4)}),[ee,oe]=re.useState({count:4}),[he,Ae]=re.useState({count:2,floorsPerWing:20}),[ke,Qe]=re.useState({count:7,units:Ro(7)}),[rt,Xe]=re.useState({count:0}),[_e,ft]=re.useState({stpEnabled:!0,wtpEnabled:!0,tankCount:4}),[we,Ne]=re.useState({fireAlarms:!0,fireFighting:!0,firePump:!0}),V=re.useMemo(()=>Ru.filter(f=>g.includes(f.id)),[g]),Y=(f,O)=>{y(L=>({...L,[f]:O})),x("")},U=(f,O)=>{I(L=>({...L,[f]:O})),x("")},v=(f,O)=>{Z(L=>({...L,[f]:O})),x("")},C=(f,O)=>{F(L=>({...L,[f]:O})),x("")},te=(f,O)=>{K(L=>({...L,[f]:O})),x("")},ie=(f,O)=>{Te(L=>({...L,[f]:O})),x("")},ae=(f,O)=>{le(L=>{{const G=Number(O);if(!Number.isInteger(G))return{...L,count:O};const me=zo(G);return{...L,count:O,panels:Array.from({length:Math.max(G,0)},(Ie,mt)=>{var Ri;return((Ri=L.panels)==null?void 0:Ri[mt])||me[mt]})}}}),x("")},ce=(f,O,L)=>{le(G=>({...G,panels:G.panels.map((me,Ie)=>Ie===f?{...me,[O]:L}:me)})),x("")},xe=(f,O)=>{le(L=>({...L,panels:L.panels.map((G,me)=>{if(me!==f)return G;const Ie=G.equipment.includes(O)?G.equipment.filter(mt=>mt!==O):[...G.equipment,O];return{...G,equipment:Ie,upsUnits:O==="ups"&&Ie.includes("ups")&&G.upsUnits.length===0?[Lo[0].id]:Ie.includes("ups")?G.upsUnits:[]}})})),x("")},fe=(f,O)=>{le(L=>({...L,panels:L.panels.map((G,me)=>{if(me!==f)return G;const Ie=G.upsUnits.includes(O)?G.upsUnits.filter(mt=>mt!==O):[...G.upsUnits,O];return{...G,upsUnits:Ie,equipment:Ie.length>0&&!G.equipment.includes("ups")?[...G.equipment,"ups"]:Ie.length===0?G.equipment.filter(mt=>mt!=="ups"):G.equipment}})})),x("")},ye=(f,O)=>{oe(L=>({...L,[f]:O})),x("")},Ze=(f,O)=>{Ae(L=>({...L,[f]:O})),x("")},qn=(f,O)=>{Qe(L=>{{const G=Number(O);if(!Number.isInteger(G))return{...L,count:O};const me=Ro(G);return{...L,count:O,units:Array.from({length:Math.max(G,0)},(Ie,mt)=>L.units[mt]||me[mt])}}}),x("")},fi=(f,O,L)=>{Qe(G=>({...G,units:G.units.map((me,Ie)=>Ie===f?{...me,[O]:L}:me)})),x("")},Kn=(f,O)=>{Xe(L=>({...L,[f]:O})),x("")},Cn=(f,O)=>{ft(L=>({...L,[f]:O})),x("")},mi=(f,O)=>{Ne(L=>({...L,[f]:O})),x("")},gi=f=>{_(O=>O.includes(f)?O.filter(L=>L!==f):[...O,f]),x("")},wr=()=>N.clientName.trim()?N.projectName.trim()?N.projectCode.trim()?N.location.trim()?N.email.trim()?N.password.trim()?!0:(x("Enter a demo client password."),!1):(x("Enter the client email."),!1):(x("Enter the project location."),!1):(x("Enter the project code."),!1):(x("Enter the project name."),!1):(x("Enter the client name."),!1),xi=()=>g.length===0?(x("Select at least one BMS system."),!1):!0,yr=()=>{if(g.includes("source")){const f=Number(S.incomingCount),O=Number(S.outgoingCount),L=Number(S.meterCount);if(!Number.isInteger(f)||f<0||f>20)return x("Source incoming feeder count must be between 0 and 20."),!1;if(!Number.isInteger(O)||O<0||O>30)return x("Source outgoing feeder count must be between 0 and 30."),!1;if(!Number.isInteger(L)||L<0||L>20)return x("Source energy meter count must be between 0 and 20."),!1;if(f===0&&O===0)return x("Source requires at least one incoming or outgoing feeder."),!1}if(g.includes("feeder")){const f=Number(M.incomingCount),O=Number(M.outgoingCount);if(!Number.isInteger(f)||f<1||f>20)return x("Feeder incoming feeder count must be between 1 and 20."),!1;if(!Number.isInteger(O)||O<1||O>30)return x("Feeder outgoing feeder count must be between 1 and 30."),!1}if(g.includes("transformer")){const f=Number(z.count);if(!Number.isInteger(f)||f<1||f>30)return x("Transformer count must be between 1 and 30."),!1;if(!z.primaryVoltage)return x("Select the transformer primary voltage."),!1;if(!z.secondaryVoltage)return x("Select the transformer secondary voltage."),!1}if(g.includes("lt-kiosk")){const f=Number(P.count);if(!Number.isInteger(f)||f<1||f>30)return x("LT Kiosk count must be between 1 and 30."),!1}if(g.includes("busduct")){const f=Number(ve.count);if(!Number.isInteger(f)||f<1||f>30)return x("Busduct count must be between 1 and 30."),!1}if(g.includes("pcc")){const f=Number(D.count);if(!Number.isInteger(f)||f<1||f>20)return x("PCC panel count must be between 1 and 20."),!1;if(!Array.isArray(D.panels)||D.panels.length!==f)return x("PCC panel configuration rows must match the PCC panel count."),!1;if(D.panels.find(L=>!L.name.trim()||L.equipment.includes("ups")&&L.upsUnits.length===0))return x("Enter each PCC panel name and select at least one UPS unit when UPS is enabled."),!1}if(g.includes("raising-main")){const f=Number(ee.count);if(!Number.isInteger(f)||f<1||f>20)return x("Raising Main count must be between 1 and 20."),!1}if(g.includes("wing")){const f=Number(he.count),O=Number(he.floorsPerWing);if(!Number.isInteger(f)||f<1||f>10)return x("Wing count must be between 1 and 10."),!1;if(!Number.isInteger(O)||O<1||O>100)return x("Floors per Wing must be between 1 and 100."),!1}if(g.includes("dg")){const f=Number(ke.count);if(!Number.isInteger(f)||f<1||f>20)return x("DG count must be between 1 and 20."),!1;if(ke.units.length!==f)return x("DG capacity rows must match the DG count."),!1;if(ke.units.find(L=>{const G=Number(L.capacity);return!L.name.trim()||!Number.isFinite(G)||G<1||G>5e3}))return x("Enter valid DG names and capacities between 1 and 5000 kVA."),!1}if(g.includes("hvac")){const f=Number(rt.count);if(!Number.isInteger(f)||f<0||f>30)return x("HVAC equipment count must be between 0 and 30."),!1}if(g.includes("wtp")){const f=Number(_e.tankCount);if(!Number.isInteger(f)||f<0||f>20)return x("Water tank count must be between 0 and 20."),!1}return g.includes("fire")&&!we.fireAlarms&&!we.fireFighting&&!we.firePump?(x("Select at least one Fire subsystem."),!1):!0},_n=()=>{x(""),!(u===1&&!wr())&&(u===2&&!xi()||u===3&&!yr()||p(f=>Math.min(f+1,4)))},tn=()=>{x(""),p(f=>Math.max(f-1,1))},br=()=>{const f=`project-${Date.now()}`,O=V.map(G=>G.id==="source"?{id:"source",type:"source",name:`${S.voltageLevel} Source`,title:`${S.voltageLevel} SOURCE`,configuration:{voltageLevel:S.voltageLevel,incomingCount:Number(S.incomingCount),outgoingCount:Number(S.outgoingCount),meterCount:Number(S.meterCount),protectionRelay:S.protectionRelay,busCoupler:S.busCoupler}}:G.id==="feeder"?{id:"feeder",type:"feeder",name:`${M.voltageLevel} Feeder`,title:`${M.voltageLevel} FEEDER`,configuration:{voltageLevel:M.voltageLevel,incomingCount:Number(M.incomingCount),outgoingCount:Number(M.outgoingCount)}}:G.id==="transformer"?{id:"transformer",type:"transformer",name:"Transformer",title:"TRANSFORMER",configuration:{count:Number(z.count),primaryVoltage:z.primaryVoltage,secondaryVoltage:z.secondaryVoltage}}:G.id==="lt-kiosk"?{id:"lt-kiosk",type:"lt-kiosk",name:"LT Kiosk",title:"LT KIOSK",configuration:{count:Number(P.count)}}:G.id==="busduct"?{id:"busduct",type:"busduct",name:"Busduct",title:"BUSDUCT",configuration:{count:Number(ve.count)}}:G.id==="pcc"?{id:"pcc",type:"pcc",name:"PCC",title:"PCC",configuration:{count:Number(D.count),panels:D.panels.map((me,Ie)=>({id:me.id||`pcc-${Ie+1}`,name:me.name.trim()||`PCC ${Ie+1}`,equipment:me.equipment.filter(Boolean),upsUnits:me.equipment.includes("ups")?me.upsUnits.filter(Boolean):[]}))}}:G.id==="raising-main"?{id:"raising-main",type:"raising-main",name:"Raising Main",title:"RAISING MAIN",configuration:{count:Number(ee.count)}}:G.id==="wing"?{id:"wing",type:"wing",name:"Wing",title:"WING",configuration:{count:Number(he.count),floorsPerWing:Number(he.floorsPerWing)}}:G.id==="dg"?{id:"dg",type:"dg",name:"DG",title:"DG",configuration:{count:Number(ke.count),units:ke.units.map((me,Ie)=>({name:me.name.trim()||`DG${Ie+1}`,capacity:Number(me.capacity)}))}}:G.id==="hvac"?{id:"hvac",type:"hvac",name:"HVAC",title:"HVAC",configuration:{count:Number(rt.count)}}:G.id==="wtp"?{id:"wtp",type:"wtp",name:"Water Management",title:"WATER MANAGEMENT",configuration:{stpEnabled:_e.stpEnabled,wtpEnabled:_e.wtpEnabled,tankCount:Number(_e.tankCount)}}:G.id==="fire"?{id:"fire",type:"fire",name:"Fire",title:"FIRE",configuration:{fireAlarms:we.fireAlarms,fireFighting:we.fireFighting,firePump:we.firePump}}:{id:G.id,type:G.id,name:G.name,title:G.name.toUpperCase(),configuration:{}}),L={id:f,clientName:N.clientName.trim(),projectName:N.projectName.trim(),projectCode:N.projectCode.trim().toUpperCase(),location:N.location.trim(),clientCredentials:{email:N.email.trim().toLowerCase(),password:N.password},status:"active",systems:O,createdAt:new Date().toISOString()};s==null||s(L)},vi=()=>{I({voltageLevel:"33kV",incomingCount:2,outgoingCount:1,meterCount:1,protectionRelay:!0,busCoupler:!1})},wi=()=>{Z({voltageLevel:"33kV",incomingCount:1,outgoingCount:6})},yi=()=>{F({count:6,primaryVoltage:"33kV",secondaryVoltage:"433V"})},bi=()=>{K({count:6})},kr=()=>{Te({count:6})},Yn=()=>{le({count:4,panels:zo(4)})},ki=()=>{oe({count:4})},En=()=>{Ae({count:2,floorsPerWing:20})},Tn=()=>{Qe({count:7,units:Ro(7)})},$s=()=>{Xe({count:0})},Ni=()=>{ft({stpEnabled:!0,wtpEnabled:!0,tankCount:4})},ji=()=>{Ne({fireAlarms:!0,fireFighting:!0,firePump:!0})},Ws=`
    .cp {
      --cp-bg:#07131e;
      --cp-surface:#0d1e2c;
      --cp-surface-2:#102638;
      --cp-surface-3:#0a1a27;
      --cp-border:#203e51;
      --cp-border-strong:#2b6077;
      --cp-text:#f4f8fb;
      --cp-muted:#7f9aaa;
      --cp-cyan:#35c4d5;
      --cp-cyan-soft:#63d3df;
      --cp-green:#31c48d;
      --cp-red:#ff707a;

      width:100%;
      min-height:100vh;

      box-sizing:border-box;

      color:var(--cp-text);

      background:var(--cp-bg);

      font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    }

    .cp * {
      box-sizing:border-box;
    }

    .cp-header {
      height:72px;

      padding:0 34px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-bottom:
        1px solid
        var(--cp-border);

      background:#091823;
    }

    .cp-header__left {
      display:flex;
      align-items:center;
      gap:15px;
    }

    .cp-back {
      width:38px;
      height:38px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        var(--cp-border);

      border-radius:5px;

      color:#9db8c7;

      background:#102536;

      cursor:pointer;
    }

    .cp-back:hover {
      color:var(--cp-cyan-soft);
      border-color:#348da5;
    }

    .cp-header__copy strong {
      display:block;

      font-size:14px;
    }

    .cp-header__copy span {
      display:block;

      margin-top:3px;

      color:var(--cp-muted);

      font-size:8px;
      font-weight:800;

      letter-spacing:.12em;
    }

    .cp-header__badge {
      display:flex;
      align-items:center;
      gap:6px;

      padding:7px 10px;

      border:
        1px solid
        #275b70;

      border-radius:4px;

      color:#67cbd8;

      background:#0e2939;

      font-size:8px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-shell {
      width:min(100%,1380px);

      margin:0 auto;

      padding:30px 38px 45px;
    }

    .cp-title {
      margin-bottom:25px;
    }

    .cp-title__eyebrow {
      margin-bottom:7px;

      color:var(--cp-cyan);

      font-size:8px;
      font-weight:800;

      letter-spacing:.14em;
    }

    .cp-title h1 {
      margin:0;

      font-size:28px;
      font-weight:720;

      letter-spacing:-.025em;
    }

    .cp-title p {
      max-width:690px;

      margin:7px 0 0;

      color:var(--cp-muted);

      font-size:10px;

      line-height:1.6;
    }

    /* =====================================================
       STEPS
    ===================================================== */

    .cp-steps {
      display:grid;

      grid-template-columns:
        repeat(4,minmax(0,1fr));

      margin-bottom:28px;

      border:
        1px solid
        var(--cp-border);

      background:var(--cp-surface);
    }

    .cp-step {
      position:relative;

      min-height:66px;

      padding:0 18px;

      display:flex;
      align-items:center;

      gap:10px;

      color:#607f91;

      border-right:
        1px solid
        var(--cp-border);
    }

    .cp-step:last-child {
      border-right:0;
    }

    .cp-step__number {
      width:27px;
      height:27px;

      flex:0 0 27px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #345265;

      border-radius:50%;

      font-size:9px;
      font-weight:800;
    }

    .cp-step span {
      font-size:9px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-step--active {
      color:#dcecf3;

      background:#10293a;
    }

    .cp-step--active::after {
      content:"";

      position:absolute;

      left:0;
      right:0;
      bottom:-1px;

      height:2px;

      background:var(--cp-cyan);
    }

    .cp-step--active
    .cp-step__number {
      border-color:var(--cp-cyan);

      color:#04181f;

      background:var(--cp-cyan);
    }

    .cp-step--complete {
      color:#8fcab2;
    }

    .cp-step--complete
    .cp-step__number {
      border-color:#2d916b;

      color:#b2ecd1;

      background:#12392d;
    }

    /* =====================================================
       CONTENT PANEL
    ===================================================== */

    .cp-panel {
      border:
        1px solid
        var(--cp-border);

      background:var(--cp-surface);
    }

    .cp-panel__header {
      padding:20px 22px;

      border-bottom:
        1px solid
        var(--cp-border);
    }

    .cp-panel__header h2 {
      margin:0;

      font-size:16px;
      font-weight:700;
    }

    .cp-panel__header p {
      margin:6px 0 0;

      color:var(--cp-muted);

      font-size:9px;

      line-height:1.5;
    }

    .cp-panel__body {
      padding:23px;
    }

    /* =====================================================
       FORM
    ===================================================== */

    .cp-form-grid {
      display:grid;

      grid-template-columns:
        repeat(2,minmax(0,1fr));

      gap:18px;
    }

    .cp-field {
      display:flex;
      flex-direction:column;

      gap:7px;
    }

    .cp-field--full {
      grid-column:1 / -1;
    }

    .cp-field label {
      color:#b7ccd7;

      font-size:8px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-required {
      color:#ff8a91;
    }

    .cp-input,
    .cp-select {
      width:100%;
      height:44px;

      padding:0 13px;

      border:
        1px solid
        #294b60;

      border-radius:4px;

      outline:none;

      color:#edf6fa;

      background:#0a1d2b;

      font-family:inherit;

      font-size:10px;
    }

    .cp-input::placeholder {
      color:#557487;
    }

    .cp-input:focus,
    .cp-select:focus {
      border-color:#3196ad;

      box-shadow:
        0 0 0 3px
        rgba(53,196,213,.06);
    }

    .cp-select {
      cursor:pointer;
    }

    /* =====================================================
       SYSTEM SELECTION
    ===================================================== */

    .cp-system-grid {
      display:grid;

      grid-template-columns:
        repeat(4,minmax(0,1fr));

      gap:13px;
    }

    .cp-system {
      position:relative;

      min-height:142px;

      padding:16px;

      border:
        1px solid
        #29495c;

      border-radius:5px;

      text-align:left;

      color:var(--cp-text);

      background:#0b1c29;

      cursor:pointer;
    }

    .cp-system:hover {
      border-color:#34778e;
    }

    .cp-system--selected {
      border-color:#2faabd;

      background:#0e2b3b;
    }

    .cp-system__check {
      position:absolute;

      top:12px;
      right:12px;

      width:20px;
      height:20px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #38586a;

      border-radius:3px;

      color:transparent;

      background:#0b1a26;
    }

    .cp-system--selected
    .cp-system__check {
      border-color:var(--cp-cyan);

      color:#04171d;

      background:var(--cp-cyan);
    }

    .cp-system__icon {
      width:37px;
      height:37px;

      margin-bottom:13px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #285c72;

      border-radius:4px;

      color:#5bcbd9;

      background:#103145;
    }

    .cp-system strong {
      display:block;

      margin-bottom:5px;

      font-size:11px;
    }

    .cp-system p {
      margin:0;

      color:#718e9f;

      font-size:8px;

      line-height:1.45;
    }

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    .cp-config-stack {
      display:flex;
      flex-direction:column;

      gap:16px;
    }

    .cp-config-card {
      border:
        1px solid
        #294b5f;

      background:#0a1b28;
    }

    .cp-config-card__head {
      min-height:58px;

      padding:0 17px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-bottom:
        1px solid
        #244355;
    }

    .cp-config-card__identity {
      display:flex;
      align-items:center;

      gap:10px;
    }

    .cp-config-card__icon {
      width:34px;
      height:34px;

      display:flex;
      align-items:center;
      justify-content:center;

      border:
        1px solid
        #2b647a;

      border-radius:4px;

      color:#5bcbd9;

      background:#103247;
    }

    .cp-config-card__identity strong {
      display:block;

      font-size:11px;
    }

    .cp-config-card__identity span {
      display:block;

      margin-top:3px;

      color:#6f8d9e;

      font-size:8px;
    }

    .cp-reset {
      height:31px;

      padding:0 10px;

      display:flex;
      align-items:center;
      gap:6px;

      border:
        1px solid
        #31566a;

      border-radius:4px;

      color:#91adbc;

      background:#102332;

      font-size:8px;
      font-weight:800;

      cursor:pointer;
    }

    .cp-config-card__body {
      padding:18px;
    }

    .cp-config-grid {
      display:grid;

      grid-template-columns:
        repeat(3,minmax(0,1fr));

      gap:16px;
    }

    .cp-toggle-field {
      min-height:70px;

      padding:12px 13px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:15px;

      border:
        1px solid
        #27475a;

      background:#0d202e;
    }

    .cp-toggle-field strong {
      display:block;

      margin-bottom:3px;

      font-size:9px;
    }

    .cp-toggle-field span {
      color:#6f8d9d;

      font-size:8px;
    }

    .cp-toggle {
      width:45px;
      height:24px;

      padding:2px;

      border:0;

      border-radius:20px;

      background:#344d5d;

      cursor:pointer;
    }

    .cp-toggle::after {
      content:"";

      display:block;

      width:20px;
      height:20px;

      border-radius:50%;

      background:#b8c6ce;

      transition:
        transform .15s ease;
    }

    .cp-toggle--on {
      background:#218e78;
    }

    .cp-toggle--on::after {
      transform:translateX(21px);

      background:#e5fff5;
    }

    .cp-config-placeholder {
      padding:17px;

      border:
        1px dashed
        #315064;

      color:#6f8d9e;

      background:#0b1d2a;

      font-size:9px;

      line-height:1.6;
    }

    /* =====================================================
       REVIEW
    ===================================================== */

    .cp-review-grid {
      display:grid;

      grid-template-columns:
        minmax(0,1fr)
        minmax(0,1fr);

      gap:17px;
    }

    .cp-review-card {
      border:
        1px solid
        #294b5f;

      background:#0a1b28;
    }

    .cp-review-card__head {
      padding:14px 16px;

      border-bottom:
        1px solid
        #244355;

      color:#c7d9e2;

      font-size:9px;
      font-weight:800;

      letter-spacing:.08em;
    }

    .cp-review-card__body {
      padding:15px 16px;
    }

    .cp-review-row {
      min-height:35px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:15px;

      border-bottom:
        1px solid
        rgba(43,75,94,.55);
    }

    .cp-review-row:last-child {
      border-bottom:0;
    }

    .cp-review-row span {
      color:#718e9e;

      font-size:8px;
    }

    .cp-review-row strong {
      max-width:65%;

      color:#e5f0f5;

      font-size:9px;
      font-weight:650;

      text-align:right;
    }

    .cp-review-systems {
      display:flex;
      flex-wrap:wrap;

      gap:7px;
    }

    .cp-review-system {
      padding:7px 9px;

      border:
        1px solid
        #2b6075;

      border-radius:3px;

      color:#8bd6df;

      background:#0e2a3a;

      font-size:8px;
      font-weight:750;
    }

    .cp-review-source {
      grid-column:1 / -1;
    }

    /* =====================================================
       ERROR
    ===================================================== */

    .cp-error {
      margin-top:16px;

      padding:11px 13px;

      border-left:
        3px solid
        var(--cp-red);

      color:#ffabb1;

      background:
        rgba(185,59,71,.11);

      font-size:9px;
    }

    /* =====================================================
       FOOTER
    ===================================================== */

    .cp-footer {
      margin-top:17px;

      padding-top:17px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      border-top:
        1px solid
        var(--cp-border);
    }

    .cp-footer__right {
      display:flex;
      gap:9px;
    }

    .cp-btn {
      height:39px;

      padding:0 15px;

      display:flex;
      align-items:center;
      justify-content:center;

      gap:7px;

      border-radius:4px;

      font-family:inherit;

      font-size:9px;
      font-weight:800;

      cursor:pointer;
    }

    .cp-btn--secondary {
      border:
        1px solid
        #315367;

      color:#9cb6c4;

      background:#102331;
    }

    .cp-btn--primary {
      border:
        1px solid
        #2aa9bc;

      color:#04171d;

      background:var(--cp-cyan);
    }

    .cp-btn--create {
      border:
        1px solid
        #2fa676;

      color:#041c13;

      background:#42ca94;
    }

    .cp-btn:hover {
      filter:brightness(1.08);
    }

    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media(max-width:1050px) {
      .cp-system-grid {
        grid-template-columns:
          repeat(3,minmax(0,1fr));
      }

      .cp-config-grid {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }
    }

    @media(max-width:760px) {
      .cp-header {
        padding:0 17px;
      }

      .cp-shell {
        padding:22px 17px 35px;
      }

      .cp-steps {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }

      .cp-step:nth-child(2) {
        border-right:0;
      }

      .cp-step:nth-child(-n+2) {
        border-bottom:
          1px solid
          var(--cp-border);
      }

      .cp-form-grid,
      .cp-review-grid {
        grid-template-columns:1fr;
      }

      .cp-review-source {
        grid-column:auto;
      }

      .cp-system-grid,
      .cp-config-grid {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }
    }

    @media(max-width:520px) {
      .cp-system-grid,
      .cp-config-grid {
        grid-template-columns:1fr;
      }

      .cp-footer {
        align-items:stretch;
        flex-direction:column;

        gap:9px;
      }

      .cp-footer__right {
        display:grid;
        grid-template-columns:1fr 1fr;
      }

      .cp-footer .cp-btn {
        width:100%;
      }
    }
  `,Nr=()=>r.jsxs("section",{className:"cp-panel",children:[r.jsxs("div",{className:"cp-panel__header",children:[r.jsx("h2",{children:"Client & Project Details"}),r.jsx("p",{children:"Enter the basic information for the new BMS project."})]}),r.jsx("div",{className:"cp-panel__body",children:r.jsxs("div",{className:"cp-form-grid",children:[r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:["CLIENT NAME"," ",r.jsx("span",{className:"cp-required",children:"*"})]}),r.jsx("input",{className:"cp-input",value:N.clientName,placeholder:"Example: ABC Technologies",onChange:f=>Y("clientName",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:["PROJECT NAME"," ",r.jsx("span",{className:"cp-required",children:"*"})]}),r.jsx("input",{className:"cp-input",value:N.projectName,placeholder:"Example: ABC Tech Park",onChange:f=>Y("projectName",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:["PROJECT CODE"," ",r.jsx("span",{className:"cp-required",children:"*"})]}),r.jsx("input",{className:"cp-input",value:N.projectCode,placeholder:"Example: BMS-001",onChange:f=>Y("projectCode",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:["PROJECT LOCATION"," ",r.jsx("span",{className:"cp-required",children:"*"})]}),r.jsx("input",{className:"cp-input",value:N.location,placeholder:"Example: Hyderabad",onChange:f=>Y("location",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:["CLIENT EMAIL"," ",r.jsx("span",{className:"cp-required",children:"*"})]}),r.jsx("input",{className:"cp-input",type:"email",value:N.email,placeholder:"client@company.com",onChange:f=>Y("email",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:["DEMO CLIENT PASSWORD"," ",r.jsx("span",{className:"cp-required",children:"*"})]}),r.jsx("input",{className:"cp-input",type:"text",value:N.password,placeholder:"Demo password",onChange:f=>Y("password",f.target.value)})]})]})})]}),jr=()=>r.jsxs("section",{className:"cp-panel",children:[r.jsxs("div",{className:"cp-panel__header",children:[r.jsx("h2",{children:"Select BMS Systems"}),r.jsx("p",{children:"Choose the systems available in this client project. Only selected systems will eventually appear in the project dashboard."})]}),r.jsx("div",{className:"cp-panel__body",children:r.jsx("div",{className:"cp-system-grid",children:Ru.map(f=>{const O=g.includes(f.id),L=f.icon||Ot;return r.jsxs("button",{type:"button",className:`cp-system ${O?"cp-system--selected":""}`,onClick:()=>gi(f.id),children:[r.jsx("div",{className:"cp-system__check",children:r.jsx(Su,{size:13})}),r.jsx("div",{className:"cp-system__icon",children:r.jsx(L,{size:19,strokeWidth:1.8})}),r.jsx("strong",{children:f.name}),r.jsx("p",{children:f.description||"Selected for this project"})]},f.id)})})})]}),Sr=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Fu,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"SOURCE"}),r.jsx("span",{children:"HT source and incoming supply configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:vi,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsxs("div",{className:"cp-config-grid",children:[r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"VOLTAGE LEVEL"}),r.jsxs("select",{className:"cp-select",value:S.voltageLevel,onChange:f=>U("voltageLevel",f.target.value),children:[r.jsx("option",{value:"11kV",children:"11 kV"}),r.jsx("option",{value:"22kV",children:"22 kV"}),r.jsx("option",{value:"33kV",children:"33 kV"}),r.jsx("option",{value:"66kV",children:"66 kV"})]})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"INCOMING FEEDERS"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"20",value:S.incomingCount,onChange:f=>U("incomingCount",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"OUTGOING FEEDERS"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"30",value:S.outgoingCount,onChange:f=>U("outgoingCount",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"ENERGY METERS"}),r.jsx("input",{className:"cp-input",type:"number",min:"0",max:"20",value:S.meterCount,onChange:f=>U("meterCount",f.target.value)})]}),r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Protection Relay"}),r.jsx("span",{children:"Include source protection relay"})]}),r.jsx("button",{type:"button",className:`cp-toggle ${S.protectionRelay?"cp-toggle--on":""}`,"aria-label":"Toggle protection relay",onClick:()=>U("protectionRelay",!S.protectionRelay)})]}),r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Bus Coupler"}),r.jsx("span",{children:"Include bus coupler equipment"})]}),r.jsx("button",{type:"button",className:`cp-toggle ${S.busCoupler?"cp-toggle--on":""}`,"aria-label":"Toggle bus coupler",onClick:()=>U("busCoupler",!S.busCoupler)})]})]})})]}),Cr=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Bn,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"FEEDER"}),r.jsx("span",{children:"HT feeder incoming and outgoing configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:wi,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsxs("div",{className:"cp-config-grid",children:[r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"VOLTAGE LEVEL"}),r.jsxs("select",{className:"cp-select",value:M.voltageLevel,onChange:f=>v("voltageLevel",f.target.value),children:[r.jsx("option",{value:"11kV",children:"11 kV"}),r.jsx("option",{value:"22kV",children:"22 kV"}),r.jsx("option",{value:"33kV",children:"33 kV"}),r.jsx("option",{value:"66kV",children:"66 kV"})]})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"INCOMING FEEDERS"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"20",value:M.incomingCount,onChange:f=>v("incomingCount",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"OUTGOING FEEDERS"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"30",value:M.outgoingCount,onChange:f=>v("outgoingCount",f.target.value)})]})]})})]}),_r=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Ge,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"TRANSFORMER"}),r.jsx("span",{children:"Step-down transformer configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:yi,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsxs("div",{className:"cp-config-grid",children:[r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"TRANSFORMER COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"30",value:z.count,onChange:f=>C("count",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"PRIMARY VOLTAGE"}),r.jsxs("select",{className:"cp-select",value:z.primaryVoltage,onChange:f=>C("primaryVoltage",f.target.value),children:[r.jsx("option",{value:"11kV",children:"11 kV"}),r.jsx("option",{value:"22kV",children:"22 kV"}),r.jsx("option",{value:"33kV",children:"33 kV"}),r.jsx("option",{value:"66kV",children:"66 kV"})]})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"SECONDARY VOLTAGE"}),r.jsxs("select",{className:"cp-select",value:z.secondaryVoltage,onChange:f=>C("secondaryVoltage",f.target.value),children:[r.jsx("option",{value:"415V",children:"415 V"}),r.jsx("option",{value:"433V",children:"433 V"}),r.jsx("option",{value:"440V",children:"440 V"})]})]})]})})]}),nn=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Io,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"LT KIOSK"}),r.jsx("span",{children:"LT distribution kiosk configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:bi,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsxs("div",{className:"cp-config-card__body",children:[r.jsx("div",{className:"cp-config-grid",children:r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"LT KIOSK COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"30",value:P.count,onChange:f=>te("count",f.target.value)})]})}),r.jsx("div",{className:"cp-config-stack",children:D.panels.map((f,O)=>r.jsxs("div",{className:"cp-config-card",children:[r.jsx("div",{className:"cp-config-card__head",children:r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Io,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:f.name||`PCC ${O+1}`}),r.jsx("span",{children:"Internal supported equipment"})]})]})}),r.jsxs("div",{className:"cp-config-card__body",children:[r.jsxs("div",{className:"cp-config-grid",children:[r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"PANEL NAME"}),r.jsx("input",{className:"cp-input",value:f.name,onChange:L=>ce(O,"name",L.target.value)})]}),[["utility1","Utility 1","Existing PCC utility circuit"],["utility2","Utility 2","Existing PCC utility circuit"],["ups","UPS","Existing UPS subsystem inside PCC"]].map(([L,G,me])=>r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:G}),r.jsx("span",{children:me})]}),r.jsx("button",{type:"button",className:`cp-toggle ${f.equipment.includes(L)?"cp-toggle--on":""}`,"aria-label":`Toggle ${G}`,onClick:()=>xe(O,L)})]},L))]}),f.equipment.includes("ups")&&r.jsx("div",{className:"cp-config-grid",children:Lo.map(L=>r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:L.name}),r.jsx("span",{children:"UPS unit inside this PCC"})]}),r.jsx("button",{type:"button",className:`cp-toggle ${f.upsUnits.includes(L.id)?"cp-toggle--on":""}`,"aria-label":`Toggle ${L.name}`,onClick:()=>fe(O,L.id)})]},L.id))})]})]},f.id))})]})]}),rn=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Bn,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"BUSDUCT"}),r.jsx("span",{children:"LT busduct and busbar configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:kr,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsx("div",{className:"cp-config-grid",children:r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"BUSDUCT COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"30",value:ve.count,onChange:f=>ie("count",f.target.value)})]})})})]}),Si=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Hn,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"PCC"}),r.jsx("span",{children:"Power control centre panel configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:Yn,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsx("div",{className:"cp-config-grid",children:r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"PCC PANEL COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"20",value:D.count,onChange:f=>ae("count",f.target.value)})]})})})]}),Ci=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Xt,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"RAISING MAIN"}),r.jsx("span",{children:"Vertical distribution configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:ki,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsx("div",{className:"cp-config-grid",children:r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"RAISING MAIN COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"20",value:ee.count,onChange:f=>ye("count",f.target.value)})]})})})]}),_i=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Zt,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"WING"}),r.jsx("span",{children:"Building wing and floor configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:En,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsxs("div",{className:"cp-config-grid",children:[r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"WING COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"10",value:he.count,onChange:f=>Ze("count",f.target.value)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"FLOORS PER WING"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"100",value:he.floorsPerWing,onChange:f=>Ze("floorsPerWing",f.target.value)})]})]})})]}),Ei=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(ui,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"DG"}),r.jsx("span",{children:"Diesel generator capacity configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:Tn,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsxs("div",{className:"cp-config-card__body",children:[r.jsx("div",{className:"cp-config-grid",children:r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"DG COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"20",value:ke.count,onChange:f=>qn("count",f.target.value)})]})}),r.jsx("div",{className:"cp-config-grid",children:ke.units.map((f,O)=>r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{children:[f.name||`DG${O+1}`," CAPACITY"]}),r.jsx("input",{className:"cp-input",type:"number",min:"1",max:"5000",value:f.capacity,onChange:L=>fi(O,"capacity",L.target.value)})]},`dg-unit-${O}`))})]})]}),Ti=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Vu,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"HVAC"}),r.jsx("span",{children:"Mechanical equipment configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:$s,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsx("div",{className:"cp-config-grid",children:r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"HVAC EQUIPMENT COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"0",max:"30",value:rt.count,onChange:f=>Kn("count",f.target.value)})]})})})]}),Er=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Oe,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"WATER MANAGEMENT"}),r.jsx("span",{children:"STP, WTP and tank monitoring configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:Ni,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsxs("div",{className:"cp-config-grid",children:[r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"STP"}),r.jsx("span",{children:"Sewage treatment plant monitoring"})]}),r.jsx("button",{type:"button",className:`cp-toggle ${_e.stpEnabled?"cp-toggle--on":""}`,"aria-label":"Toggle STP",onClick:()=>Cn("stpEnabled",!_e.stpEnabled)})]}),r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"WTP"}),r.jsx("span",{children:"Water treatment plant monitoring"})]}),r.jsx("button",{type:"button",className:`cp-toggle ${_e.wtpEnabled?"cp-toggle--on":""}`,"aria-label":"Toggle WTP",onClick:()=>Cn("wtpEnabled",!_e.wtpEnabled)})]}),r.jsxs("div",{className:"cp-field",children:[r.jsx("label",{children:"WATER TANK COUNT"}),r.jsx("input",{className:"cp-input",type:"number",min:"0",max:"20",value:_e.tankCount,onChange:f=>Cn("tankCount",f.target.value)})]})]})})]}),Ai=()=>r.jsxs("div",{className:"cp-config-card",children:[r.jsxs("div",{className:"cp-config-card__head",children:[r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Gn,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:"FIRE"}),r.jsx("span",{children:"Life safety subsystem configuration"})]})]}),r.jsxs("button",{type:"button",className:"cp-reset",onClick:ji,children:[r.jsx(yt,{size:12}),"RESET"]})]}),r.jsx("div",{className:"cp-config-card__body",children:r.jsx("div",{className:"cp-config-grid",children:[["fireAlarms","Fire Alarms","Detection and alarm system"],["fireFighting","Fire Fighting","Hydrant and sprinkler system"],["firePump","Fire Pump","Fire pump monitoring"]].map(([f,O,L])=>r.jsxs("div",{className:"cp-toggle-field",children:[r.jsxs("div",{children:[r.jsx("strong",{children:O}),r.jsx("span",{children:L})]}),r.jsx("button",{type:"button",className:`cp-toggle ${we[f]?"cp-toggle--on":""}`,"aria-label":`Toggle ${O}`,onClick:()=>mi(f,!we[f])})]},f))})})]}),An=()=>r.jsxs("section",{className:"cp-panel",children:[r.jsxs("div",{className:"cp-panel__header",children:[r.jsx("h2",{children:"Configure Selected Systems"}),r.jsx("p",{children:"Configure Source and Feeder for this client project. Remaining selected systems will receive their detailed configuration in the next stages."})]}),r.jsx("div",{className:"cp-panel__body",children:r.jsxs("div",{className:"cp-config-stack",children:[g.includes("source")&&Sr(),g.includes("feeder")&&Cr(),g.includes("transformer")&&_r(),g.includes("lt-kiosk")&&nn(),g.includes("busduct")&&rn(),g.includes("pcc")&&Si(),g.includes("raising-main")&&Ci(),g.includes("wing")&&_i(),g.includes("dg")&&Ei(),g.includes("hvac")&&Ti(),g.includes("wtp")&&Er(),g.includes("fire")&&Ai(),V.filter(f=>f.id!=="source"&&f.id!=="feeder"&&f.id!=="transformer"&&f.id!=="lt-kiosk"&&f.id!=="busduct"&&f.id!=="pcc"&&f.id!=="raising-main"&&f.id!=="wing"&&f.id!=="dg"&&f.id!=="hvac"&&f.id!=="wtp"&&f.id!=="fire").map(f=>r.jsxs("div",{className:"cp-config-card",children:[r.jsx("div",{className:"cp-config-card__head",children:r.jsxs("div",{className:"cp-config-card__identity",children:[r.jsx("div",{className:"cp-config-card__icon",children:r.jsx(Bn,{size:18})}),r.jsxs("div",{children:[r.jsx("strong",{children:f.name.toUpperCase()}),r.jsx("span",{children:"Selected for this project"})]})]})}),r.jsx("div",{className:"cp-config-card__body",children:r.jsxs("div",{className:"cp-config-placeholder",children:[f.name," is selected for this project. Its detailed equipment configuration will be added in the next configuration stage."]})})]},f.id))]})})]}),Tr=()=>r.jsxs("section",{className:"cp-panel",children:[r.jsxs("div",{className:"cp-panel__header",children:[r.jsx("h2",{children:"Review Project Configuration"}),r.jsx("p",{children:"Confirm the client, project and BMS system configuration before creating the demo project."})]}),r.jsx("div",{className:"cp-panel__body",children:r.jsxs("div",{className:"cp-review-grid",children:[r.jsxs("div",{className:"cp-review-card",children:[r.jsx("div",{className:"cp-review-card__head",children:"PROJECT INFORMATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Client"}),r.jsx("strong",{children:N.clientName})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Project"}),r.jsx("strong",{children:N.projectName})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Project Code"}),r.jsx("strong",{children:N.projectCode.toUpperCase()})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Location"}),r.jsx("strong",{children:N.location})]})]})]}),r.jsxs("div",{className:"cp-review-card",children:[r.jsx("div",{className:"cp-review-card__head",children:"CLIENT ACCESS — DEMO"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Email"}),r.jsx("strong",{children:N.email})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Demo Password"}),r.jsx("strong",{children:N.password})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Status"}),r.jsx("strong",{style:{color:"#31c48d"},children:"ACTIVE"})]})]})]}),r.jsxs("div",{className:"cp-review-card",children:[r.jsx("div",{className:"cp-review-card__head",children:"SELECTED SYSTEMS"}),r.jsx("div",{className:"cp-review-card__body",children:r.jsx("div",{className:"cp-review-systems",children:V.map(f=>r.jsx("div",{className:"cp-review-system",children:f.name},f.id))})})]}),g.includes("source")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"SOURCE CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Voltage Level"}),r.jsx("strong",{children:S.voltageLevel})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Incoming Feeders"}),r.jsx("strong",{children:S.incomingCount})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Outgoing Feeders"}),r.jsx("strong",{children:S.outgoingCount})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Energy Meters"}),r.jsx("strong",{children:S.meterCount})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Protection Relay"}),r.jsx("strong",{children:S.protectionRelay?"Included":"Not Included"})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Bus Coupler"}),r.jsx("strong",{children:S.busCoupler?"Included":"Not Included"})]})]})]}),g.includes("feeder")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"FEEDER CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Voltage Level"}),r.jsx("strong",{children:M.voltageLevel})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Incoming Feeders"}),r.jsx("strong",{children:M.incomingCount})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Outgoing Feeders"}),r.jsx("strong",{children:M.outgoingCount})]})]})]}),g.includes("transformer")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"TRANSFORMER CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Transformer Count"}),r.jsx("strong",{children:z.count})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Primary Voltage"}),r.jsx("strong",{children:z.primaryVoltage})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Secondary Voltage"}),r.jsx("strong",{children:z.secondaryVoltage})]})]})]}),g.includes("lt-kiosk")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"LT KIOSK CONFIGURATION"}),r.jsx("div",{className:"cp-review-card__body",children:r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"LT Kiosk Count"}),r.jsx("strong",{children:P.count})]})})]}),g.includes("busduct")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"BUSDUCT CONFIGURATION"}),r.jsx("div",{className:"cp-review-card__body",children:r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Busduct Count"}),r.jsx("strong",{children:ve.count})]})})]}),g.includes("pcc")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"PCC CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"PCC Panel Count"}),r.jsx("strong",{children:D.count})]}),D.panels.map(f=>r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:f.name}),r.jsx("strong",{children:[f.equipment.includes("utility1")?"Utility 1":null,f.equipment.includes("utility2")?"Utility 2":null,f.equipment.includes("ups")?`UPS (${f.upsUnits.length})`:null].filter(Boolean).join(", ")||"No internal equipment"})]},f.id))]})]}),g.includes("raising-main")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"RAISING MAIN CONFIGURATION"}),r.jsx("div",{className:"cp-review-card__body",children:r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Raising Main Count"}),r.jsx("strong",{children:ee.count})]})})]}),g.includes("wing")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"WING CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Wing Count"}),r.jsx("strong",{children:he.count})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Floors per Wing"}),r.jsx("strong",{children:he.floorsPerWing})]})]})]}),g.includes("dg")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"DG CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"DG Count"}),r.jsx("strong",{children:ke.count})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Capacities"}),r.jsx("strong",{children:ke.units.map(f=>`${f.name}: ${f.capacity} kVA`).join(", ")})]})]})]}),g.includes("hvac")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"HVAC CONFIGURATION"}),r.jsx("div",{className:"cp-review-card__body",children:r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"HVAC Equipment Count"}),r.jsx("strong",{children:rt.count})]})})]}),g.includes("wtp")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"WATER MANAGEMENT CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"STP"}),r.jsx("strong",{children:_e.stpEnabled?"Enabled":"Disabled"})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"WTP"}),r.jsx("strong",{children:_e.wtpEnabled?"Enabled":"Disabled"})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Water Tank Count"}),r.jsx("strong",{children:_e.tankCount})]})]})]}),g.includes("fire")&&r.jsxs("div",{className:"cp-review-card cp-review-source",children:[r.jsx("div",{className:"cp-review-card__head",children:"FIRE CONFIGURATION"}),r.jsxs("div",{className:"cp-review-card__body",children:[r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Fire Alarms"}),r.jsx("strong",{children:we.fireAlarms?"Enabled":"Disabled"})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Fire Fighting"}),r.jsx("strong",{children:we.fireFighting?"Enabled":"Disabled"})]}),r.jsxs("div",{className:"cp-review-row",children:[r.jsx("span",{children:"Fire Pump"}),r.jsx("strong",{children:we.firePump?"Enabled":"Disabled"})]})]})]})]})})]});return r.jsxs("main",{className:"cp",children:[r.jsx("style",{children:Ws}),r.jsxs("header",{className:"cp-header",children:[r.jsxs("div",{className:"cp-header__left",children:[r.jsx("button",{type:"button",className:"cp-back",onClick:a,"aria-label":"Back to Super Admin Dashboard",children:r.jsx(vr,{size:17})}),r.jsxs("div",{className:"cp-header__copy",children:[r.jsx("strong",{children:"Create BMS Project"}),r.jsx("span",{children:"SUPER ADMIN / PROJECT BUILDER"})]})]}),r.jsxs("div",{className:"cp-header__badge",children:[r.jsx(Ot,{size:13}),"FRONTEND DEMO"]})]}),r.jsxs("div",{className:"cp-shell",children:[r.jsxs("div",{className:"cp-title",children:[r.jsx("div",{className:"cp-title__eyebrow",children:"CONFIGURATION-DRIVEN BMS"}),r.jsx("h1",{children:"New Client Project"}),r.jsx("p",{children:"Define a client project and its BMS systems. The resulting configuration will later drive the same Overview, FlowDetail and SystemDetail components without creating a separate frontend for each client."})]}),r.jsx("div",{className:"cp-steps",children:Kh.map(f=>{const O=u>f.id,L=u===f.id;return r.jsxs("div",{className:`cp-step ${L?"cp-step--active":""} ${O?"cp-step--complete":""}`,children:[r.jsx("div",{className:"cp-step__number",children:O?r.jsx(Su,{size:13}):f.id}),r.jsx("span",{children:f.label})]},f.id)})}),u===1&&Nr(),u===2&&jr(),u===3&&An(),u===4&&Tr(),k&&r.jsx("div",{className:"cp-error",children:k}),r.jsxs("div",{className:"cp-footer",children:[r.jsx("button",{type:"button",className:"cp-btn cp-btn--secondary",onClick:a,children:"CANCEL"}),r.jsxs("div",{className:"cp-footer__right",children:[u>1&&r.jsxs("button",{type:"button",className:"cp-btn cp-btn--secondary",onClick:tn,children:[r.jsx(th,{size:14}),"BACK"]}),u<4?r.jsxs("button",{type:"button",className:"cp-btn cp-btn--primary",onClick:_n,children:["CONTINUE",r.jsx(Zp,{size:14})]}):r.jsxs("button",{type:"button",className:"cp-btn cp-btn--create",onClick:br,children:[r.jsx(rh,{size:15}),"CREATE PROJECT"]})]})]})]})]})}function Qh(){const[a,s]=re.useState(()=>typeof window>"u"?"dark":localStorage.getItem("arcot-dashboard-theme")||"dark"),[u,p]=re.useState("superadmin-dashboard"),[k,x]=re.useState([]),[N,y]=re.useState(null),[g,_]=re.useState(null),[S,I]=re.useState(null);re.useEffect(()=>{localStorage.setItem("arcot-dashboard-theme",a),document.documentElement.setAttribute("data-theme",a)},[a]);const M=()=>{p("create-project")},Z=()=>{p("superadmin-dashboard")},z=ee=>{x(oe=>[...oe,ee]),p("superadmin-dashboard")},F=ee=>{y(ee),_(null),I(null),p("bms")},P=()=>{y(null),_(null),I(null),p("superadmin-dashboard")},K=ee=>{_(ee),I(null)},ve=ee=>{I(ee)},Te=()=>{_(null),I(null)},D=()=>{I(null)};if(u==="superadmin-dashboard")return r.jsx(qh,{theme:a,setTheme:s,projects:k,onCreateProject:M,onOpenProject:F});if(u==="create-project")return r.jsx(Yh,{theme:a,setTheme:s,onCancel:Z,onProjectCreated:z});let le;return g?S?le=r.jsx(Gh,{project:N,flow:g,equipment:S,onBack:D}):le=r.jsx($h,{project:N,flow:g,onBack:Te,onOpenEquipment:ve}):le=r.jsx(Ch,{project:N,onOpenFlow:K}),r.jsxs("div",{className:"app-root",children:[r.jsx(oh,{theme:a,setTheme:s,project:N,onExitProject:P}),r.jsx("div",{className:"app-page",children:le})]})}Gp.createRoot(document.getElementById("root")).render(r.jsx(Vp.StrictMode,{children:r.jsx(Qh,{})}));
