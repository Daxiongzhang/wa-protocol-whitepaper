const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-CkExC5ez.js","assets/users-BnMmtVe1.js","assets/CommunityPage-pWR3QiQf.js"])))=>i.map(i=>d[i]);
(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))F(T);new MutationObserver(T=>{for(const M of T)if(M.type==="childList")for(const U of M.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&F(U)}).observe(document,{childList:!0,subtree:!0});function m(T){const M={};return T.integrity&&(M.integrity=T.integrity),T.referrerPolicy&&(M.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?M.credentials="include":T.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function F(T){if(T.ep)return;T.ep=!0;const M=m(T);fetch(T.href,M)}})();function Jd(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Wo={exports:{}},xa={},Po={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Zd(){if(Du)return X;Du=1;var g=Symbol.for("react.element"),S=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),U=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),W=Symbol.iterator;function P(c){return c===null||typeof c!="object"?null:(c=W&&c[W]||c["@@iterator"],typeof c=="function"?c:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,b={};function E(c,v,I){this.props=c,this.context=v,this.refs=b,this.updater=I||G}E.prototype.isReactComponent={},E.prototype.setState=function(c,v){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,v,"setState")},E.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function oe(){}oe.prototype=E.prototype;function ye(c,v,I){this.props=c,this.context=v,this.refs=b,this.updater=I||G}var Y=ye.prototype=new oe;Y.constructor=ye,q(Y,E.prototype),Y.isPureReactComponent=!0;var we=Array.isArray,Ie=Object.prototype.hasOwnProperty,pe={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Re(c,v,I){var $,ee={},J=null,ie=null;if(v!=null)for($ in v.ref!==void 0&&(ie=v.ref),v.key!==void 0&&(J=""+v.key),v)Ie.call(v,$)&&!Pe.hasOwnProperty($)&&(ee[$]=v[$]);var ae=arguments.length-2;if(ae===1)ee.children=I;else if(1<ae){for(var se=Array(ae),Qe=0;Qe<ae;Qe++)se[Qe]=arguments[Qe+2];ee.children=se}if(c&&c.defaultProps)for($ in ae=c.defaultProps,ae)ee[$]===void 0&&(ee[$]=ae[$]);return{$$typeof:g,type:c,key:J,ref:ie,props:ee,_owner:pe.current}}function ft(c,v){return{$$typeof:g,type:c.type,key:v,ref:c.ref,props:c.props,_owner:c._owner}}function lt(c){return typeof c=="object"&&c!==null&&c.$$typeof===g}function xt(c){var v={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(I){return v[I]})}var Ze=/\/+/g;function je(c,v){return typeof c=="object"&&c!==null&&c.key!=null?xt(""+c.key):v.toString(36)}function be(c,v,I,$,ee){var J=typeof c;(J==="undefined"||J==="boolean")&&(c=null);var ie=!1;if(c===null)ie=!0;else switch(J){case"string":case"number":ie=!0;break;case"object":switch(c.$$typeof){case g:case S:ie=!0}}if(ie)return ie=c,ee=ee(ie),c=$===""?"."+je(ie,0):$,we(ee)?(I="",c!=null&&(I=c.replace(Ze,"$&/")+"/"),be(ee,v,I,"",function(Qe){return Qe})):ee!=null&&(lt(ee)&&(ee=ft(ee,I+(!ee.key||ie&&ie.key===ee.key?"":(""+ee.key).replace(Ze,"$&/")+"/")+c)),v.push(ee)),1;if(ie=0,$=$===""?".":$+":",we(c))for(var ae=0;ae<c.length;ae++){J=c[ae];var se=$+je(J,ae);ie+=be(J,v,I,se,ee)}else if(se=P(c),typeof se=="function")for(c=se.call(c),ae=0;!(J=c.next()).done;)J=J.value,se=$+je(J,ae++),ie+=be(J,v,I,se,ee);else if(J==="object")throw v=String(c),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ie}function et(c,v,I){if(c==null)return c;var $=[],ee=0;return be(c,$,"","",function(J){return v.call(I,J,ee++)}),$}function Ee(c){if(c._status===-1){var v=c._result;v=v(),v.then(function(I){(c._status===0||c._status===-1)&&(c._status=1,c._result=I)},function(I){(c._status===0||c._status===-1)&&(c._status=2,c._result=I)}),c._status===-1&&(c._status=0,c._result=v)}if(c._status===1)return c._result.default;throw c._result}var le={current:null},C={transition:null},L={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:C,ReactCurrentOwner:pe};function y(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:et,forEach:function(c,v,I){et(c,function(){v.apply(this,arguments)},I)},count:function(c){var v=0;return et(c,function(){v++}),v},toArray:function(c){return et(c,function(v){return v})||[]},only:function(c){if(!lt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},X.Component=E,X.Fragment=m,X.Profiler=T,X.PureComponent=ye,X.StrictMode=F,X.Suspense=R,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,X.act=y,X.cloneElement=function(c,v,I){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var $=q({},c.props),ee=c.key,J=c.ref,ie=c._owner;if(v!=null){if(v.ref!==void 0&&(J=v.ref,ie=pe.current),v.key!==void 0&&(ee=""+v.key),c.type&&c.type.defaultProps)var ae=c.type.defaultProps;for(se in v)Ie.call(v,se)&&!Pe.hasOwnProperty(se)&&($[se]=v[se]===void 0&&ae!==void 0?ae[se]:v[se])}var se=arguments.length-2;if(se===1)$.children=I;else if(1<se){ae=Array(se);for(var Qe=0;Qe<se;Qe++)ae[Qe]=arguments[Qe+2];$.children=ae}return{$$typeof:g,type:c.type,key:ee,ref:J,props:$,_owner:ie}},X.createContext=function(c){return c={$$typeof:U,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:M,_context:c},c.Consumer=c},X.createElement=Re,X.createFactory=function(c){var v=Re.bind(null,c);return v.type=c,v},X.createRef=function(){return{current:null}},X.forwardRef=function(c){return{$$typeof:H,render:c}},X.isValidElement=lt,X.lazy=function(c){return{$$typeof:Z,_payload:{_status:-1,_result:c},_init:Ee}},X.memo=function(c,v){return{$$typeof:Q,type:c,compare:v===void 0?null:v}},X.startTransition=function(c){var v=C.transition;C.transition={};try{c()}finally{C.transition=v}},X.unstable_act=y,X.useCallback=function(c,v){return le.current.useCallback(c,v)},X.useContext=function(c){return le.current.useContext(c)},X.useDebugValue=function(){},X.useDeferredValue=function(c){return le.current.useDeferredValue(c)},X.useEffect=function(c,v){return le.current.useEffect(c,v)},X.useId=function(){return le.current.useId()},X.useImperativeHandle=function(c,v,I){return le.current.useImperativeHandle(c,v,I)},X.useInsertionEffect=function(c,v){return le.current.useInsertionEffect(c,v)},X.useLayoutEffect=function(c,v){return le.current.useLayoutEffect(c,v)},X.useMemo=function(c,v){return le.current.useMemo(c,v)},X.useReducer=function(c,v,I){return le.current.useReducer(c,v,I)},X.useRef=function(c){return le.current.useRef(c)},X.useState=function(c){return le.current.useState(c)},X.useSyncExternalStore=function(c,v,I){return le.current.useSyncExternalStore(c,v,I)},X.useTransition=function(){return le.current.useTransition()},X.version="18.3.1",X}var _u;function Io(){return _u||(_u=1,Po.exports=Zd()),Po.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function em(){if(zu)return xa;zu=1;var g=Io(),S=Symbol.for("react.element"),m=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,T=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function U(H,R,Q){var Z,W={},P=null,G=null;Q!==void 0&&(P=""+Q),R.key!==void 0&&(P=""+R.key),R.ref!==void 0&&(G=R.ref);for(Z in R)F.call(R,Z)&&!M.hasOwnProperty(Z)&&(W[Z]=R[Z]);if(H&&H.defaultProps)for(Z in R=H.defaultProps,R)W[Z]===void 0&&(W[Z]=R[Z]);return{$$typeof:S,type:H,key:P,ref:G,props:W,_owner:T.current}}return xa.Fragment=m,xa.jsx=U,xa.jsxs=U,xa}var Mu;function tm(){return Mu||(Mu=1,Wo.exports=em()),Wo.exports}var l=tm(),_r={},jo={exports:{}},$e={},Eo={exports:{}},Do={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function nm(){return Iu||(Iu=1,(function(g){function S(C,L){var y=C.length;C.push(L);e:for(;0<y;){var c=y-1>>>1,v=C[c];if(0<T(v,L))C[c]=L,C[y]=v,y=c;else break e}}function m(C){return C.length===0?null:C[0]}function F(C){if(C.length===0)return null;var L=C[0],y=C.pop();if(y!==L){C[0]=y;e:for(var c=0,v=C.length,I=v>>>1;c<I;){var $=2*(c+1)-1,ee=C[$],J=$+1,ie=C[J];if(0>T(ee,y))J<v&&0>T(ie,ee)?(C[c]=ie,C[J]=y,c=J):(C[c]=ee,C[$]=y,c=$);else if(J<v&&0>T(ie,y))C[c]=ie,C[J]=y,c=J;else break e}}return L}function T(C,L){var y=C.sortIndex-L.sortIndex;return y!==0?y:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var M=performance;g.unstable_now=function(){return M.now()}}else{var U=Date,H=U.now();g.unstable_now=function(){return U.now()-H}}var R=[],Q=[],Z=1,W=null,P=3,G=!1,q=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(C){for(var L=m(Q);L!==null;){if(L.callback===null)F(Q);else if(L.startTime<=C)F(Q),L.sortIndex=L.expirationTime,S(R,L);else break;L=m(Q)}}function we(C){if(b=!1,Y(C),!q)if(m(R)!==null)q=!0,Ee(Ie);else{var L=m(Q);L!==null&&le(we,L.startTime-C)}}function Ie(C,L){q=!1,b&&(b=!1,oe(Re),Re=-1),G=!0;var y=P;try{for(Y(L),W=m(R);W!==null&&(!(W.expirationTime>L)||C&&!xt());){var c=W.callback;if(typeof c=="function"){W.callback=null,P=W.priorityLevel;var v=c(W.expirationTime<=L);L=g.unstable_now(),typeof v=="function"?W.callback=v:W===m(R)&&F(R),Y(L)}else F(R);W=m(R)}if(W!==null)var I=!0;else{var $=m(Q);$!==null&&le(we,$.startTime-L),I=!1}return I}finally{W=null,P=y,G=!1}}var pe=!1,Pe=null,Re=-1,ft=5,lt=-1;function xt(){return!(g.unstable_now()-lt<ft)}function Ze(){if(Pe!==null){var C=g.unstable_now();lt=C;var L=!0;try{L=Pe(!0,C)}finally{L?je():(pe=!1,Pe=null)}}else pe=!1}var je;if(typeof ye=="function")je=function(){ye(Ze)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,et=be.port2;be.port1.onmessage=Ze,je=function(){et.postMessage(null)}}else je=function(){E(Ze,0)};function Ee(C){Pe=C,pe||(pe=!0,je())}function le(C,L){Re=E(function(){C(g.unstable_now())},L)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(C){C.callback=null},g.unstable_continueExecution=function(){q||G||(q=!0,Ee(Ie))},g.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=0<C?Math.floor(1e3/C):5},g.unstable_getCurrentPriorityLevel=function(){return P},g.unstable_getFirstCallbackNode=function(){return m(R)},g.unstable_next=function(C){switch(P){case 1:case 2:case 3:var L=3;break;default:L=P}var y=P;P=L;try{return C()}finally{P=y}},g.unstable_pauseExecution=function(){},g.unstable_requestPaint=function(){},g.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var y=P;P=C;try{return L()}finally{P=y}},g.unstable_scheduleCallback=function(C,L,y){var c=g.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?c+y:c):y=c,C){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=y+v,C={id:Z++,callback:L,priorityLevel:C,startTime:y,expirationTime:v,sortIndex:-1},y>c?(C.sortIndex=y,S(Q,C),m(R)===null&&C===m(Q)&&(b?(oe(Re),Re=-1):b=!0,le(we,y-c))):(C.sortIndex=v,S(R,C),q||G||(q=!0,Ee(Ie))),C},g.unstable_shouldYield=xt,g.unstable_wrapCallback=function(C){var L=P;return function(){var y=P;P=L;try{return C.apply(this,arguments)}finally{P=y}}}})(Do)),Do}var Ru;function am(){return Ru||(Ru=1,Eo.exports=nm()),Eo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function rm(){if(Lu)return $e;Lu=1;var g=Io(),S=am();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F=new Set,T={};function M(e,t){U(e,t),U(e+"Capture",t)}function U(e,t){for(T[e]=t,e=0;e<t.length;e++)F.add(t[e])}var H=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z={},W={};function P(e){return R.call(W,e)?!0:R.call(Z,e)?!1:Q.test(e)?W[e]=!0:(Z[e]=!0,!1)}function G(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,n,a){if(t===null||typeof t>"u"||G(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,a,r,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ye(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,ye);E[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,ye);E[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,ye);E[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,n,a){var r=E.hasOwnProperty(t)?E[t]:null;(r!==null?r.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,n,r,a)&&(n=null),a||r===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,a=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var we=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),pe=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Re=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),lt=Symbol.for("react.provider"),xt=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),C=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var y=Object.assign,c;function v(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var I=!1;function $(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var a=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){a=f}e.call(t.prototype)}else{try{throw Error()}catch(f){a=f}e()}}catch(f){if(f&&a&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),i=a.stack.split(`
`),o=r.length-1,s=i.length-1;1<=o&&0<=s&&r[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==i[s]){var u=`
`+r[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function ee(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1),e;case 11:return e=$(e.type.render,!1),e;case 1:return e=$(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case pe:return"Portal";case ft:return"Profiler";case Re:return"StrictMode";case je:return"Suspense";case be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xt:return(e.displayName||"Context")+".Consumer";case lt:return(e._context.displayName||"Context")+".Provider";case Ze:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function ie(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===Re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qe(e){var t=se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sa(e){e._valueTracker||(e._valueTracker=Qe(e))}function Lo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=se(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zr(e,t){var n=t.checked;return y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oo(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function Mr(e,t){Oo(e,t);var n=ae(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ir(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ir(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ir(e,t,n){(t!=="number"||Ta(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function dn(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Rr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(In(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function Ho(e,t){var n=ae(t.value),a=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ca,$o=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nc=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){nc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Qo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Go(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,r=Qo(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,r):e[n]=r}}var ac=y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Br(e,t){if(t){if(ac[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Or(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function Ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,mn=null,pn=null;function Xo(e){if(e=la(e)){if(typeof Hr!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Ga(t),Hr(e.stateNode,e.type,t))}}function Yo(e){mn?pn?pn.push(e):pn=[e]:mn=e}function Jo(){if(mn){var e=mn,t=pn;if(pn=mn=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function Zo(e,t){return e(t)}function el(){}var Kr=!1;function tl(e,t,n){if(Kr)return e(t,n);Kr=!0;try{return Zo(e,t,n)}finally{Kr=!1,(mn!==null||pn!==null)&&(el(),Jo())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var a=Ga(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Vr=!1;if(H)try{var On={};Object.defineProperty(On,"passive",{get:function(){Vr=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Vr=!1}function rc(e,t,n,a,r,i,o,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(w){this.onError(w)}}var Fn=!1,qa=null,Na=!1,$r=null,ic={onError:function(e){Fn=!0,qa=e}};function oc(e,t,n,a,r,i,o,s,u){Fn=!1,qa=null,rc.apply(ic,arguments)}function lc(e,t,n,a,r,i,o,s,u){if(oc.apply(this,arguments),Fn){if(Fn){var f=qa;Fn=!1,qa=null}else throw Error(m(198));Na||(Na=!0,$r=f)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function al(e){if(Yt(e)!==e)throw Error(m(188))}function sc(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return al(r),e;if(i===a)return al(r),t;i=i.sibling}throw Error(m(188))}if(n.return!==a.return)n=r,a=i;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,a=i;break}if(s===a){o=!0,a=r,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,a=r;break}if(s===a){o=!0,a=i,n=r;break}s=s.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==a)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function rl(e){return e=sc(e),e!==null?il(e):null}function il(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=il(e);if(t!==null)return t;e=e.sibling}return null}var ol=S.unstable_scheduleCallback,ll=S.unstable_cancelCallback,uc=S.unstable_shouldYield,cc=S.unstable_requestPaint,ve=S.unstable_now,dc=S.unstable_getCurrentPriorityLevel,Qr=S.unstable_ImmediatePriority,sl=S.unstable_UserBlockingPriority,Wa=S.unstable_NormalPriority,mc=S.unstable_LowPriority,ul=S.unstable_IdlePriority,Pa=null,gt=null;function pc(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:gc,hc=Math.log,fc=Math.LN2;function gc(e){return e>>>=0,e===0?32:31-(hc(e)/fc|0)|0}var ja=64,Ea=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?a=Un(s):(i&=o,i!==0&&(a=Un(i)))}else o=n&~r,o!==0?a=Un(o):i!==0&&(a=Un(i));if(a===0)return 0;if(t!==0&&t!==a&&(t&r)===0&&(r=a&-a,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-st(t),r=1<<n,a|=e[n],t&=~r;return a}function yc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-st(i),s=1<<o,u=r[o];u===-1?((s&n)===0||(s&a)!==0)&&(r[o]=yc(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Gr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cl(){var e=ja;return ja<<=1,(ja&4194240)===0&&(ja=64),e}function Xr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function kc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-st(n),i=1<<r;t[r]=0,a[r]=-1,e[r]=-1,n&=~i}}function Yr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-st(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}var re=0;function dl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ml,Jr,pl,hl,fl,Zr=!1,_a=[],jt=null,Et=null,Dt=null,Kn=new Map,Vn=new Map,_t=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function $n(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=la(t),t!==null&&Jr(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function bc(e,t,n,a,r){switch(t){case"focusin":return jt=$n(jt,e,t,n,a,r),!0;case"dragenter":return Et=$n(Et,e,t,n,a,r),!0;case"mouseover":return Dt=$n(Dt,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return Kn.set(i,$n(Kn.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,Vn.set(i,$n(Vn.get(i)||null,e,t,n,a,r)),!0}return!1}function yl(e){var t=Jt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=nl(n),t!==null){e.blockedOn=t,fl(e.priority,function(){pl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Fr=a,n.target.dispatchEvent(a),Fr=null}else return t=la(n),t!==null&&Jr(t),e.blockedOn=n,!1;t.shift()}return!0}function vl(e,t,n){za(e)&&n.delete(t)}function xc(){Zr=!1,jt!==null&&za(jt)&&(jt=null),Et!==null&&za(Et)&&(Et=null),Dt!==null&&za(Dt)&&(Dt=null),Kn.forEach(vl),Vn.forEach(vl)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zr||(Zr=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,xc)))}function Gn(e){function t(r){return Qn(r,e)}if(0<_a.length){Qn(_a[0],e);for(var n=1;n<_a.length;n++){var a=_a[n];a.blockedOn===e&&(a.blockedOn=null)}}for(jt!==null&&Qn(jt,e),Et!==null&&Qn(Et,e),Dt!==null&&Qn(Dt,e),Kn.forEach(t),Vn.forEach(t),n=0;n<_t.length;n++)a=_t[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)yl(n),n.blockedOn===null&&_t.shift()}var hn=we.ReactCurrentBatchConfig,Ma=!0;function Ac(e,t,n,a){var r=re,i=hn.transition;hn.transition=null;try{re=1,ei(e,t,n,a)}finally{re=r,hn.transition=i}}function Sc(e,t,n,a){var r=re,i=hn.transition;hn.transition=null;try{re=4,ei(e,t,n,a)}finally{re=r,hn.transition=i}}function ei(e,t,n,a){if(Ma){var r=ti(e,t,n,a);if(r===null)vi(e,t,a,Ia,n),gl(e,a);else if(bc(r,e,t,n,a))a.stopPropagation();else if(gl(e,a),t&4&&-1<wc.indexOf(e)){for(;r!==null;){var i=la(r);if(i!==null&&ml(i),i=ti(e,t,n,a),i===null&&vi(e,t,a,Ia,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else vi(e,t,a,null,n)}}var Ia=null;function ti(e,t,n,a){if(Ia=null,e=Ur(a),e=Jt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ia=e,null}function kl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case Qr:return 1;case sl:return 4;case Wa:case mc:return 16;case ul:return 536870912;default:return 16}default:return 16}}var zt=null,ni=null,Ra=null;function wl(){if(Ra)return Ra;var e,t=ni,n=t.length,a,r="value"in zt?zt.value:zt.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===r[i-a];a++);return Ra=r.slice(e,1<a?1-a:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ba(){return!0}function bl(){return!1}function Ge(e){function t(n,a,r,i,o){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ba:bl,this.isPropagationStopped=bl,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=Ge(fn),Xn=y({},fn,{view:0,detail:0}),Tc=Ge(Xn),ri,ii,Yn,Oa=y({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(ri=e.screenX-Yn.screenX,ii=e.screenY-Yn.screenY):ii=ri=0,Yn=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),xl=Ge(Oa),Cc=y({},Oa,{dataTransfer:0}),qc=Ge(Cc),Nc=y({},Xn,{relatedTarget:0}),oi=Ge(Nc),Wc=y({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pc=Ge(Wc),jc=y({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ec=Ge(jc),Dc=y({},fn,{data:0}),Al=Ge(Dc),_c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ic(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mc[e])?!!t[e]:!1}function li(){return Ic}var Rc=y({},Xn,{key:function(e){if(e.key){var t=_c[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lc=Ge(Rc),Bc=y({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sl=Ge(Bc),Oc=y({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Fc=Ge(Oc),Uc=y({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hc=Ge(Uc),Kc=y({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vc=Ge(Kc),$c=[9,13,27,32],si=H&&"CompositionEvent"in window,Jn=null;H&&"documentMode"in document&&(Jn=document.documentMode);var Qc=H&&"TextEvent"in window&&!Jn,Tl=H&&(!si||Jn&&8<Jn&&11>=Jn),Cl=" ",ql=!1;function Nl(e,t){switch(e){case"keyup":return $c.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Gc(e,t){switch(e){case"compositionend":return Wl(t);case"keypress":return t.which!==32?null:(ql=!0,Cl);case"textInput":return e=t.data,e===Cl&&ql?null:e;default:return null}}function Xc(e,t){if(gn)return e==="compositionend"||!si&&Nl(e,t)?(e=wl(),Ra=ni=zt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tl&&t.locale!=="ko"?null:t.data;default:return null}}var Yc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yc[e.type]:t==="textarea"}function jl(e,t,n,a){Yo(a),t=Va(t,"onChange"),0<t.length&&(n=new ai("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Zn=null,ea=null;function Jc(e){Gl(e,0)}function Fa(e){var t=bn(e);if(Lo(t))return e}function Zc(e,t){if(e==="change")return t}var El=!1;if(H){var ui;if(H){var ci="oninput"in document;if(!ci){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),ci=typeof Dl.oninput=="function"}ui=ci}else ui=!1;El=ui&&(!document.documentMode||9<document.documentMode)}function _l(){Zn&&(Zn.detachEvent("onpropertychange",zl),ea=Zn=null)}function zl(e){if(e.propertyName==="value"&&Fa(ea)){var t=[];jl(t,ea,e,Ur(e)),tl(Jc,t)}}function ed(e,t,n){e==="focusin"?(_l(),Zn=t,ea=n,Zn.attachEvent("onpropertychange",zl)):e==="focusout"&&_l()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fa(ea)}function nd(e,t){if(e==="click")return Fa(t)}function ad(e,t){if(e==="input"||e==="change")return Fa(t)}function rd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:rd;function ta(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!R.call(t,r)||!ut(e[r],t[r]))return!1}return!0}function Ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Il(e,t){var n=Ml(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ml(n)}}function Rl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ll(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ta(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function id(e){var t=Ll(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rl(n.ownerDocument.documentElement,n)){if(a!==null&&di(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=Il(n,i);var o=Il(n,a);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var od=H&&"documentMode"in document&&11>=document.documentMode,yn=null,mi=null,na=null,pi=!1;function Bl(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||yn==null||yn!==Ta(a)||(a=yn,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),na&&ta(na,a)||(na=a,a=Va(mi,"onSelect"),0<a.length&&(t=new ai("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=yn)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},hi={},Ol={};H&&(Ol=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Ha(e){if(hi[e])return hi[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ol)return hi[e]=t[n];return e}var Fl=Ha("animationend"),Ul=Ha("animationiteration"),Hl=Ha("animationstart"),Kl=Ha("transitionend"),Vl=new Map,$l="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Vl.set(e,t),M(t,[e])}for(var fi=0;fi<$l.length;fi++){var gi=$l[fi],ld=gi.toLowerCase(),sd=gi[0].toUpperCase()+gi.slice(1);Mt(ld,"on"+sd)}Mt(Fl,"onAnimationEnd"),Mt(Ul,"onAnimationIteration"),Mt(Hl,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Kl,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Ql(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,lc(a,t,void 0,e),e.currentTarget=null}function Gl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var s=a[o],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==i&&r.isPropagationStopped())break e;Ql(r,s,f),i=u}else for(o=0;o<a.length;o++){if(s=a[o],u=s.instance,f=s.currentTarget,s=s.listener,u!==i&&r.isPropagationStopped())break e;Ql(r,s,f),i=u}}}if(Na)throw e=$r,Na=!1,$r=null,e}function ce(e,t){var n=t[Si];n===void 0&&(n=t[Si]=new Set);var a=e+"__bubble";n.has(a)||(Xl(t,e,2,!1),n.add(a))}function yi(e,t,n){var a=0;t&&(a|=4),Xl(n,e,a,t)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ra(e){if(!e[Ka]){e[Ka]=!0,F.forEach(function(n){n!=="selectionchange"&&(ud.has(n)||yi(n,!1,e),yi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ka]||(t[Ka]=!0,yi("selectionchange",!1,t))}}function Xl(e,t,n,a){switch(kl(t)){case 1:var r=Ac;break;case 4:r=Sc;break;default:r=ei}n=r.bind(null,t,n,e),r=void 0,!Vr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function vi(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=a.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Jt(s),o===null)return;if(u=o.tag,u===5||u===6){a=i=o;continue e}s=s.parentNode}}a=a.return}tl(function(){var f=i,w=Ur(n),x=[];e:{var k=Vl.get(e);if(k!==void 0){var N=ai,D=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":N=Lc;break;case"focusin":D="focus",N=oi;break;case"focusout":D="blur",N=oi;break;case"beforeblur":case"afterblur":N=oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Fc;break;case Fl:case Ul:case Hl:N=Pc;break;case Kl:N=Hc;break;case"scroll":N=Tc;break;case"wheel":N=Vc;break;case"copy":case"cut":case"paste":N=Ec;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Sl}var _=(t&4)!==0,ke=!_&&e==="scroll",p=_?k!==null?k+"Capture":null:k;_=[];for(var d=f,h;d!==null;){h=d;var A=h.stateNode;if(h.tag===5&&A!==null&&(h=A,p!==null&&(A=Bn(d,p),A!=null&&_.push(ia(d,A,h)))),ke)break;d=d.return}0<_.length&&(k=new N(k,D,null,n,w),x.push({event:k,listeners:_}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",k&&n!==Fr&&(D=n.relatedTarget||n.fromElement)&&(Jt(D)||D[At]))break e;if((N||k)&&(k=w.window===w?w:(k=w.ownerDocument)?k.defaultView||k.parentWindow:window,N?(D=n.relatedTarget||n.toElement,N=f,D=D?Jt(D):null,D!==null&&(ke=Yt(D),D!==ke||D.tag!==5&&D.tag!==6)&&(D=null)):(N=null,D=f),N!==D)){if(_=xl,A="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(_=Sl,A="onPointerLeave",p="onPointerEnter",d="pointer"),ke=N==null?k:bn(N),h=D==null?k:bn(D),k=new _(A,d+"leave",N,n,w),k.target=ke,k.relatedTarget=h,A=null,Jt(w)===f&&(_=new _(p,d+"enter",D,n,w),_.target=h,_.relatedTarget=ke,A=_),ke=A,N&&D)t:{for(_=N,p=D,d=0,h=_;h;h=kn(h))d++;for(h=0,A=p;A;A=kn(A))h++;for(;0<d-h;)_=kn(_),d--;for(;0<h-d;)p=kn(p),h--;for(;d--;){if(_===p||p!==null&&_===p.alternate)break t;_=kn(_),p=kn(p)}_=null}else _=null;N!==null&&Yl(x,k,N,_,!1),D!==null&&ke!==null&&Yl(x,ke,D,_,!0)}}e:{if(k=f?bn(f):window,N=k.nodeName&&k.nodeName.toLowerCase(),N==="select"||N==="input"&&k.type==="file")var z=Zc;else if(Pl(k))if(El)z=ad;else{z=td;var B=ed}else(N=k.nodeName)&&N.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(z=nd);if(z&&(z=z(e,f))){jl(x,z,n,w);break e}B&&B(e,k,f),e==="focusout"&&(B=k._wrapperState)&&B.controlled&&k.type==="number"&&Ir(k,"number",k.value)}switch(B=f?bn(f):window,e){case"focusin":(Pl(B)||B.contentEditable==="true")&&(yn=B,mi=f,na=null);break;case"focusout":na=mi=yn=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,Bl(x,n,w);break;case"selectionchange":if(od)break;case"keydown":case"keyup":Bl(x,n,w)}var O;if(si)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else gn?Nl(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Tl&&n.locale!=="ko"&&(gn||K!=="onCompositionStart"?K==="onCompositionEnd"&&gn&&(O=wl()):(zt=w,ni="value"in zt?zt.value:zt.textContent,gn=!0)),B=Va(f,K),0<B.length&&(K=new Al(K,e,null,n,w),x.push({event:K,listeners:B}),O?K.data=O:(O=Wl(n),O!==null&&(K.data=O)))),(O=Qc?Gc(e,n):Xc(e,n))&&(f=Va(f,"onBeforeInput"),0<f.length&&(w=new Al("onBeforeInput","beforeinput",null,n,w),x.push({event:w,listeners:f}),w.data=O))}Gl(x,t)})}function ia(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Bn(e,n),i!=null&&a.unshift(ia(e,i,r)),i=Bn(e,t),i!=null&&a.push(ia(e,i,r))),e=e.return}return a}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yl(e,t,n,a,r){for(var i=t._reactName,o=[];n!==null&&n!==a;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===a)break;s.tag===5&&f!==null&&(s=f,r?(u=Bn(n,i),u!=null&&o.unshift(ia(n,u,s))):r||(u=Bn(n,i),u!=null&&o.push(ia(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cd=/\r\n?/g,dd=/\u0000|\uFFFD/g;function Jl(e){return(typeof e=="string"?e:""+e).replace(cd,`
`).replace(dd,"")}function $a(e,t,n){if(t=Jl(t),Jl(e)!==t&&n)throw Error(m(425))}function Qa(){}var ki=null,wi=null;function bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,md=typeof clearTimeout=="function"?clearTimeout:void 0,Zl=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof Zl<"u"?function(e){return Zl.resolve(null).then(e).catch(hd)}:xi;function hd(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(a===0){e.removeChild(r),Gn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=r}while(n);Gn(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),yt="__reactFiber$"+wn,oa="__reactProps$"+wn,At="__reactContainer$"+wn,Si="__reactEvents$"+wn,fd="__reactListeners$"+wn,gd="__reactHandles$"+wn;function Jt(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=es(e);e!==null;){if(n=e[yt])return n;e=es(e)}return t}e=n,n=e.parentNode}return null}function la(e){return e=e[yt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Ga(e){return e[oa]||null}var Ti=[],xn=-1;function Rt(e){return{current:e}}function de(e){0>xn||(e.current=Ti[xn],Ti[xn]=null,xn--)}function ue(e,t){xn++,Ti[xn]=e.current,e.current=t}var Lt={},De=Rt(Lt),Fe=Rt(!1),Zt=Lt;function An(e,t){var n=e.type.contextTypes;if(!n)return Lt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ue(e){return e=e.childContextTypes,e!=null}function Xa(){de(Fe),de(De)}function ts(e,t,n){if(De.current!==Lt)throw Error(m(168));ue(De,t),ue(Fe,n)}function ns(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var r in a)if(!(r in t))throw Error(m(108,ie(e)||"Unknown",r));return y({},n,a)}function Ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Zt=De.current,ue(De,e),ue(Fe,Fe.current),!0}function as(e,t,n){var a=e.stateNode;if(!a)throw Error(m(169));n?(e=ns(e,t,Zt),a.__reactInternalMemoizedMergedChildContext=e,de(Fe),de(De),ue(De,e)):de(Fe),ue(Fe,n)}var St=null,Ja=!1,Ci=!1;function rs(e){St===null?St=[e]:St.push(e)}function yd(e){Ja=!0,rs(e)}function Bt(){if(!Ci&&St!==null){Ci=!0;var e=0,t=re;try{var n=St;for(re=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}St=null,Ja=!1}catch(r){throw St!==null&&(St=St.slice(e+1)),ol(Qr,Bt),r}finally{re=t,Ci=!1}}return null}var Sn=[],Tn=0,Za=null,er=0,tt=[],nt=0,en=null,Tt=1,Ct="";function tn(e,t){Sn[Tn++]=er,Sn[Tn++]=Za,Za=e,er=t}function is(e,t,n){tt[nt++]=Tt,tt[nt++]=Ct,tt[nt++]=en,en=e;var a=Tt;e=Ct;var r=32-st(a)-1;a&=~(1<<r),n+=1;var i=32-st(t)+r;if(30<i){var o=r-r%5;i=(a&(1<<o)-1).toString(32),a>>=o,r-=o,Tt=1<<32-st(t)+r|n<<r|a,Ct=i+e}else Tt=1<<i|n<<r|a,Ct=e}function qi(e){e.return!==null&&(tn(e,1),is(e,1,0))}function Ni(e){for(;e===Za;)Za=Sn[--Tn],Sn[Tn]=null,er=Sn[--Tn],Sn[Tn]=null;for(;e===en;)en=tt[--nt],tt[nt]=null,Ct=tt[--nt],tt[nt]=null,Tt=tt[--nt],tt[nt]=null}var Xe=null,Ye=null,me=!1,ct=null;function os(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ls(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:Tt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(me){var t=Ye;if(t){var n=t;if(!ls(e,t)){if(Wi(e))throw Error(m(418));t=It(n.nextSibling);var a=Xe;t&&ls(e,t)?os(a,n):(e.flags=e.flags&-4097|2,me=!1,Xe=e)}}else{if(Wi(e))throw Error(m(418));e.flags=e.flags&-4097|2,me=!1,Xe=e}}}function ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function tr(e){if(e!==Xe)return!1;if(!me)return ss(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bi(e.type,e.memoizedProps)),t&&(t=Ye)){if(Wi(e))throw us(),Error(m(418));for(;t;)os(e,t),t=It(t.nextSibling)}if(ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?It(e.stateNode.nextSibling):null;return!0}function us(){for(var e=Ye;e;)e=It(e.nextSibling)}function Cn(){Ye=Xe=null,me=!1}function ji(e){ct===null?ct=[e]:ct.push(e)}var vd=we.ReactCurrentBatchConfig;function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var a=n.stateNode}if(!a)throw Error(m(147,e));var r=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function nr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cs(e){var t=e._init;return t(e._payload)}function ds(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function a(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=Qt(p,d),p.index=0,p.sibling=null,p}function i(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,h,A){return d===null||d.tag!==6?(d=Ao(h,p.mode,A),d.return=p,d):(d=r(d,h),d.return=p,d)}function u(p,d,h,A){var z=h.type;return z===Pe?w(p,d,h.props.children,A,h.key):d!==null&&(d.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ee&&cs(z)===d.type)?(A=r(d,h.props),A.ref=sa(p,d,h),A.return=p,A):(A=Cr(h.type,h.key,h.props,null,p.mode,A),A.ref=sa(p,d,h),A.return=p,A)}function f(p,d,h,A){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=So(h,p.mode,A),d.return=p,d):(d=r(d,h.children||[]),d.return=p,d)}function w(p,d,h,A,z){return d===null||d.tag!==7?(d=cn(h,p.mode,A,z),d.return=p,d):(d=r(d,h),d.return=p,d)}function x(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ao(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ie:return h=Cr(d.type,d.key,d.props,null,p.mode,h),h.ref=sa(p,null,d),h.return=p,h;case pe:return d=So(d,p.mode,h),d.return=p,d;case Ee:var A=d._init;return x(p,A(d._payload),h)}if(In(d)||L(d))return d=cn(d,p.mode,h,null),d.return=p,d;nr(p,d)}return null}function k(p,d,h,A){var z=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return z!==null?null:s(p,d,""+h,A);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ie:return h.key===z?u(p,d,h,A):null;case pe:return h.key===z?f(p,d,h,A):null;case Ee:return z=h._init,k(p,d,z(h._payload),A)}if(In(h)||L(h))return z!==null?null:w(p,d,h,A,null);nr(p,h)}return null}function N(p,d,h,A,z){if(typeof A=="string"&&A!==""||typeof A=="number")return p=p.get(h)||null,s(d,p,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ie:return p=p.get(A.key===null?h:A.key)||null,u(d,p,A,z);case pe:return p=p.get(A.key===null?h:A.key)||null,f(d,p,A,z);case Ee:var B=A._init;return N(p,d,h,B(A._payload),z)}if(In(A)||L(A))return p=p.get(h)||null,w(d,p,A,z,null);nr(d,A)}return null}function D(p,d,h,A){for(var z=null,B=null,O=d,K=d=0,qe=null;O!==null&&K<h.length;K++){O.index>K?(qe=O,O=null):qe=O.sibling;var ne=k(p,O,h[K],A);if(ne===null){O===null&&(O=qe);break}e&&O&&ne.alternate===null&&t(p,O),d=i(ne,d,K),B===null?z=ne:B.sibling=ne,B=ne,O=qe}if(K===h.length)return n(p,O),me&&tn(p,K),z;if(O===null){for(;K<h.length;K++)O=x(p,h[K],A),O!==null&&(d=i(O,d,K),B===null?z=O:B.sibling=O,B=O);return me&&tn(p,K),z}for(O=a(p,O);K<h.length;K++)qe=N(O,p,K,h[K],A),qe!==null&&(e&&qe.alternate!==null&&O.delete(qe.key===null?K:qe.key),d=i(qe,d,K),B===null?z=qe:B.sibling=qe,B=qe);return e&&O.forEach(function(Gt){return t(p,Gt)}),me&&tn(p,K),z}function _(p,d,h,A){var z=L(h);if(typeof z!="function")throw Error(m(150));if(h=z.call(h),h==null)throw Error(m(151));for(var B=z=null,O=d,K=d=0,qe=null,ne=h.next();O!==null&&!ne.done;K++,ne=h.next()){O.index>K?(qe=O,O=null):qe=O.sibling;var Gt=k(p,O,ne.value,A);if(Gt===null){O===null&&(O=qe);break}e&&O&&Gt.alternate===null&&t(p,O),d=i(Gt,d,K),B===null?z=Gt:B.sibling=Gt,B=Gt,O=qe}if(ne.done)return n(p,O),me&&tn(p,K),z;if(O===null){for(;!ne.done;K++,ne=h.next())ne=x(p,ne.value,A),ne!==null&&(d=i(ne,d,K),B===null?z=ne:B.sibling=ne,B=ne);return me&&tn(p,K),z}for(O=a(p,O);!ne.done;K++,ne=h.next())ne=N(O,p,K,ne.value,A),ne!==null&&(e&&ne.alternate!==null&&O.delete(ne.key===null?K:ne.key),d=i(ne,d,K),B===null?z=ne:B.sibling=ne,B=ne);return e&&O.forEach(function(Yd){return t(p,Yd)}),me&&tn(p,K),z}function ke(p,d,h,A){if(typeof h=="object"&&h!==null&&h.type===Pe&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ie:e:{for(var z=h.key,B=d;B!==null;){if(B.key===z){if(z=h.type,z===Pe){if(B.tag===7){n(p,B.sibling),d=r(B,h.props.children),d.return=p,p=d;break e}}else if(B.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ee&&cs(z)===B.type){n(p,B.sibling),d=r(B,h.props),d.ref=sa(p,B,h),d.return=p,p=d;break e}n(p,B);break}else t(p,B);B=B.sibling}h.type===Pe?(d=cn(h.props.children,p.mode,A,h.key),d.return=p,p=d):(A=Cr(h.type,h.key,h.props,null,p.mode,A),A.ref=sa(p,d,h),A.return=p,p=A)}return o(p);case pe:e:{for(B=h.key;d!==null;){if(d.key===B)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=r(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=So(h,p.mode,A),d.return=p,p=d}return o(p);case Ee:return B=h._init,ke(p,d,B(h._payload),A)}if(In(h))return D(p,d,h,A);if(L(h))return _(p,d,h,A);nr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=r(d,h),d.return=p,p=d):(n(p,d),d=Ao(h,p.mode,A),d.return=p,p=d),o(p)):n(p,d)}return ke}var qn=ds(!0),ms=ds(!1),ar=Rt(null),rr=null,Nn=null,Ei=null;function Di(){Ei=Nn=rr=null}function _i(e){var t=ar.current;de(ar),e._currentValue=t}function zi(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){rr=e,Ei=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(He=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(rr===null)throw Error(m(308));Nn=e,rr.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var nn=null;function Mi(e){nn===null?nn=[e]:nn.push(e)}function ps(e,t,n,a){var r=t.interleaved;return r===null?(n.next=n,Mi(t)):(n.next=r.next,r.next=n),t.interleaved=n,qt(e,a)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(te&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,qt(e,n)}return r=a.interleaved,r===null?(t.next=t,Mi(a)):(t.next=r.next,r.next=t),a.interleaved=t,qt(e,n)}function ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Yr(e,n)}}function fs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function or(e,t,n,a){var r=e.updateQueue;Ot=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var u=s,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var w=e.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==o&&(s===null?w.firstBaseUpdate=f:s.next=f,w.lastBaseUpdate=u))}if(i!==null){var x=r.baseState;o=0,w=f=u=null,s=i;do{var k=s.lane,N=s.eventTime;if((a&k)===k){w!==null&&(w=w.next={eventTime:N,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var D=e,_=s;switch(k=t,N=n,_.tag){case 1:if(D=_.payload,typeof D=="function"){x=D.call(N,x,k);break e}x=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=_.payload,k=typeof D=="function"?D.call(N,x,k):D,k==null)break e;x=y({},x,k);break e;case 2:Ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,k=r.effects,k===null?r.effects=[s]:k.push(s))}else N={eventTime:N,lane:k,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(f=w=N,u=x):w=w.next=N,o|=k;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;k=s,s=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);if(w===null&&(u=x),r.baseState=u,r.firstBaseUpdate=f,r.lastBaseUpdate=w,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);on|=o,e.lanes=o,e.memoizedState=x}}function gs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],r=a.callback;if(r!==null){if(a.callback=null,a=n,typeof r!="function")throw Error(m(191,r));r.call(a)}}}var ua={},vt=Rt(ua),ca=Rt(ua),da=Rt(ua);function an(e){if(e===ua)throw Error(m(174));return e}function Ri(e,t){switch(ue(da,t),ue(ca,e),ue(vt,ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lr(t,e)}de(vt),ue(vt,t)}function Pn(){de(vt),de(ca),de(da)}function ys(e){an(da.current);var t=an(vt.current),n=Lr(t,e.type);t!==n&&(ue(ca,e),ue(vt,n))}function Li(e){ca.current===e&&(de(vt),de(ca))}var he=Rt(0);function lr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=[];function Oi(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var sr=we.ReactCurrentDispatcher,Fi=we.ReactCurrentBatchConfig,rn=0,fe=null,Ae=null,Te=null,ur=!1,ma=!1,pa=0,kd=0;function _e(){throw Error(m(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Hi(e,t,n,a,r,i){if(rn=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sr.current=e===null||e.memoizedState===null?Ad:Sd,e=n(a,r),ma){i=0;do{if(ma=!1,pa=0,25<=i)throw Error(m(301));i+=1,Te=Ae=null,t.updateQueue=null,sr.current=Td,e=n(a,r)}while(ma)}if(sr.current=mr,t=Ae!==null&&Ae.next!==null,rn=0,Te=Ae=fe=null,ur=!1,t)throw Error(m(300));return e}function Ki(){var e=pa!==0;return pa=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?fe.memoizedState=Te=e:Te=Te.next=e,Te}function rt(){if(Ae===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Te===null?fe.memoizedState:Te.next;if(t!==null)Te=t,Ae=e;else{if(e===null)throw Error(m(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Te===null?fe.memoizedState=Te=e:Te=Te.next=e}return Te}function ha(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=rt(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var a=Ae,r=a.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}a.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,a=a.baseState;var s=o=null,u=null,f=i;do{var w=f.lane;if((rn&w)===w)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),a=f.hasEagerState?f.eagerState:e(a,f.action);else{var x={lane:w,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=x,o=a):u=u.next=x,fe.lanes|=w,on|=w}f=f.next}while(f!==null&&f!==i);u===null?o=a:u.next=s,ut(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=u,n.lastRenderedState=a}if(e=n.interleaved,e!==null){r=e;do i=r.lane,fe.lanes|=i,on|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=rt(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);ut(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function vs(){}function ks(e,t){var n=fe,a=rt(),r=t(),i=!ut(a.memoizedState,r);if(i&&(a.memoizedState=r,He=!0),a=a.queue,Qi(xs.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,fa(9,bs.bind(null,n,a,r,t),void 0,null),Ce===null)throw Error(m(349));(rn&30)!==0||ws(n,t,r)}return r}function ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bs(e,t,n,a){t.value=n,t.getSnapshot=a,As(t)&&Ss(e)}function xs(e,t,n){return n(function(){As(t)&&Ss(e)})}function As(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ss(e){var t=qt(e,1);t!==null&&ht(t,e,1,-1)}function Ts(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t.queue=e,e=e.dispatch=xd.bind(null,fe,e),[t.memoizedState,e]}function fa(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Cs(){return rt().memoizedState}function cr(e,t,n,a){var r=kt();fe.flags|=e,r.memoizedState=fa(1|t,n,void 0,a===void 0?null:a)}function dr(e,t,n,a){var r=rt();a=a===void 0?null:a;var i=void 0;if(Ae!==null){var o=Ae.memoizedState;if(i=o.destroy,a!==null&&Ui(a,o.deps)){r.memoizedState=fa(t,n,i,a);return}}fe.flags|=e,r.memoizedState=fa(1|t,n,i,a)}function qs(e,t){return cr(8390656,8,e,t)}function Qi(e,t){return dr(2048,8,e,t)}function Ns(e,t){return dr(4,2,e,t)}function Ws(e,t){return dr(4,4,e,t)}function Ps(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function js(e,t,n){return n=n!=null?n.concat([e]):null,dr(4,4,Ps.bind(null,t,e),n)}function Gi(){}function Es(e,t){var n=rt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ui(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ds(e,t){var n=rt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ui(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function _s(e,t,n){return(rn&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n):(ut(n,t)||(n=cl(),fe.lanes|=n,on|=n,e.baseState=!0),t)}function wd(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var a=Fi.transition;Fi.transition={};try{e(!1),t()}finally{re=n,Fi.transition=a}}function zs(){return rt().memoizedState}function bd(e,t,n){var a=Vt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e))Is(t,n);else if(n=ps(e,t,n,a),n!==null){var r=Be();ht(n,e,a,r),Rs(n,t,a)}}function xd(e,t,n){var a=Vt(e),r={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Is(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(r.hasEagerState=!0,r.eagerState=s,ut(s,o)){var u=t.interleaved;u===null?(r.next=r,Mi(t)):(r.next=u.next,u.next=r),t.interleaved=r;return}}catch{}finally{}n=ps(e,t,r,a),n!==null&&(r=Be(),ht(n,e,a,r),Rs(n,t,a))}}function Ms(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Is(e,t){ma=ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Yr(e,n)}}var mr={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Ad={readContext:at,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:qs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cr(4194308,4,Ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return cr(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=kt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=bd.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Ts,useDebugValue:Gi,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Ts(!1),t=e[0];return e=wd.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=fe,r=kt();if(me){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),Ce===null)throw Error(m(349));(rn&30)!==0||ws(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,qs(xs.bind(null,a,i,e),[e]),a.flags|=2048,fa(9,bs.bind(null,a,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=Ce.identifierPrefix;if(me){var n=Ct,a=Tt;n=(a&~(1<<32-st(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sd={readContext:at,useCallback:Es,useContext:at,useEffect:Qi,useImperativeHandle:js,useInsertionEffect:Ns,useLayoutEffect:Ws,useMemo:Ds,useReducer:Vi,useRef:Cs,useState:function(){return Vi(ha)},useDebugValue:Gi,useDeferredValue:function(e){var t=rt();return _s(t,Ae.memoizedState,e)},useTransition:function(){var e=Vi(ha)[0],t=rt().memoizedState;return[e,t]},useMutableSource:vs,useSyncExternalStore:ks,useId:zs,unstable_isNewReconciler:!1},Td={readContext:at,useCallback:Es,useContext:at,useEffect:Qi,useImperativeHandle:js,useInsertionEffect:Ns,useLayoutEffect:Ws,useMemo:Ds,useReducer:$i,useRef:Cs,useState:function(){return $i(ha)},useDebugValue:Gi,useDeferredValue:function(e){var t=rt();return Ae===null?t.memoizedState=e:_s(t,Ae.memoizedState,e)},useTransition:function(){var e=$i(ha)[0],t=rt().memoizedState;return[e,t]},useMutableSource:vs,useSyncExternalStore:ks,useId:zs,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xi(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pr={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Be(),r=Vt(e),i=Nt(a,r);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,r),t!==null&&(ht(t,e,r,a),ir(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Be(),r=Vt(e),i=Nt(a,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,r),t!==null&&(ht(t,e,r,a),ir(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),a=Vt(e),r=Nt(n,a);r.tag=2,t!=null&&(r.callback=t),t=Ft(e,r,a),t!==null&&(ht(t,e,a,n),ir(t,e,a))}};function Ls(e,t,n,a,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!ta(n,a)||!ta(r,i):!0}function Bs(e,t,n){var a=!1,r=Lt,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(r=Ue(t)?Zt:De.current,a=t.contextTypes,i=(a=a!=null)?An(e,r):Lt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pr,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function Os(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&pr.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,a){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Ii(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=at(i):(i=Ue(t)?Zt:De.current,r.context=An(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&pr.enqueueReplaceState(r,r.state,null),or(e,n,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",a=t;do n+=ee(a),a=a.return;while(a);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Ji(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cd=typeof WeakMap=="function"?WeakMap:Map;function Fs(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){wr||(wr=!0,fo=a),Zi(e,t)},n}function Us(e,t,n){n=Nt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=t.value;n.payload=function(){return a(r)},n.callback=function(){Zi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof a!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Hs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Cd;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(r.add(n),e=Bd.bind(null,e,t,n),t.then(e,e))}function Ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vs(e,t,n,a,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var qd=we.ReactCurrentOwner,He=!1;function Le(e,t,n,a){t.child=e===null?ms(t,null,n,a):qn(t,e.child,n,a)}function $s(e,t,n,a,r){n=n.render;var i=t.ref;return Wn(t,r),a=Hi(e,t,n,a,i,r),n=Ki(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(me&&n&&qi(t),t.flags|=1,Le(e,t,a,r),t.child)}function Qs(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gs(e,t,i,a,r)):(e=Cr(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&r)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,a)&&e.ref===t.ref)return Wt(e,t,r)}return t.flags|=1,e=Qt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Gs(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(ta(i,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,r)}return eo(e,t,n,a,r)}function Xs(e,t,n){var a=t.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Dn,Je),Je|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Dn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:n,ue(Dn,Je),Je|=a}else i!==null?(a=i.baseLanes|n,t.memoizedState=null):a=n,ue(Dn,Je),Je|=a;return Le(e,t,r,n),t.child}function Ys(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,n,a,r){var i=Ue(n)?Zt:De.current;return i=An(t,i),Wn(t,r),n=Hi(e,t,n,a,i,r),a=Ki(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(me&&a&&qi(t),t.flags|=1,Le(e,t,n,r),t.child)}function Js(e,t,n,a,r){if(Ue(n)){var i=!0;Ya(t)}else i=!1;if(Wn(t,r),t.stateNode===null)fr(e,t),Bs(t,n,a),Yi(t,n,a,r),a=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=at(f):(f=Ue(n)?Zt:De.current,f=An(t,f));var w=n.getDerivedStateFromProps,x=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==a||u!==f)&&Os(t,o,a,f),Ot=!1;var k=t.memoizedState;o.state=k,or(t,a,o,r),u=t.memoizedState,s!==a||k!==u||Fe.current||Ot?(typeof w=="function"&&(Xi(t,n,w,a),u=t.memoizedState),(s=Ot||Ls(t,n,s,a,k,u,f))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=u),o.props=a,o.state=u,o.context=f,a=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,hs(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:dt(t.type,s),o.props=f,x=t.pendingProps,k=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Ue(n)?Zt:De.current,u=An(t,u));var N=n.getDerivedStateFromProps;(w=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==x||k!==u)&&Os(t,o,a,u),Ot=!1,k=t.memoizedState,o.state=k,or(t,a,o,r);var D=t.memoizedState;s!==x||k!==D||Fe.current||Ot?(typeof N=="function"&&(Xi(t,n,N,a),D=t.memoizedState),(f=Ot||Ls(t,n,f,a,k,D,u)||!1)?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,D,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,D,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),o.props=a,o.state=D,o.context=u,a=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),a=!1)}return to(e,t,n,a,i,r)}function to(e,t,n,a,r,i){Ys(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return r&&as(t,n,!1),Wt(e,t,i);a=t.stateNode,qd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,s,i)):Le(e,t,s,i),t.memoizedState=a.state,r&&as(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?ts(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ts(e,t.context,!1),Ri(e,t.containerInfo)}function eu(e,t,n,a,r){return Cn(),ji(r),t.flags|=256,Le(e,t,n,a),t.child}var no={dehydrated:null,treeContext:null,retryLane:0};function ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function tu(e,t,n){var a=t.pendingProps,r=he.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ue(he,r&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=a.children,e=a.fallback,i?(a=t.mode,i=t.child,o={mode:"hidden",children:o},(a&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=qr(o,a,0,null),e=cn(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ao(n),t.memoizedState=no,e):ro(t,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Nd(e,t,o,a,s,r,n);if(i){i=a.fallback,o=t.mode,r=e.child,s=r.sibling;var u={mode:"hidden",children:a.children};return(o&1)===0&&t.child!==r?(a=t.child,a.childLanes=0,a.pendingProps=u,t.deletions=null):(a=Qt(r,u),a.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=Qt(s,i):(i=cn(i,o,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,o=e.child.memoizedState,o=o===null?ao(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=no,a}return i=e.child,e=i.sibling,a=Qt(i,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function ro(e,t){return t=qr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,a){return a!==null&&ji(a),qn(t,e.child,null,n),e=ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,n,a,r,i,o){if(n)return t.flags&256?(t.flags&=-257,a=Ji(Error(m(422))),hr(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,r=t.mode,a=qr({mode:"visible",children:a.children},r,0,null),i=cn(i,r,o,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,(t.mode&1)!==0&&qn(t,e.child,null,o),t.child.memoizedState=ao(o),t.memoizedState=no,i);if((t.mode&1)===0)return hr(e,t,o,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var s=a.dgst;return a=s,i=Error(m(419)),a=Ji(i,a,void 0),hr(e,t,o,a)}if(s=(o&e.childLanes)!==0,He||s){if(a=Ce,a!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(a.suspendedLanes|o))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,qt(e,r),ht(a,e,r,-1))}return bo(),a=Ji(Error(m(421))),hr(e,t,o,a)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Od.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Ye=It(r.nextSibling),Xe=t,me=!0,ct=null,e!==null&&(tt[nt++]=Tt,tt[nt++]=Ct,tt[nt++]=en,Tt=e.id,Ct=e.overflow,en=t),t=ro(t,a.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),zi(e.return,t,n)}function io(e,t,n,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=r)}function au(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;if(Le(e,t,a.children,n),a=he.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ue(he,a),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&lr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),io(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&lr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}io(t,!0,n,null,i);break;case"together":io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wd(e,t,n){switch(t.tag){case 3:Zs(t),Cn();break;case 5:ys(t);break;case 1:Ue(t.type)&&Ya(t);break;case 4:Ri(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,r=t.memoizedProps.value;ue(ar,a._currentValue),a._currentValue=r;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ue(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?tu(e,t,n):(ue(he,he.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ue(he,he.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return au(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ue(he,he.current),a)break;return null;case 22:case 23:return t.lanes=0,Xs(e,t,n)}return Wt(e,t,n)}var ru,oo,iu,ou;ru=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oo=function(){},iu=function(e,t,n,a){var r=e.memoizedProps;if(r!==a){e=t.stateNode,an(vt.current);var i=null;switch(n){case"input":r=zr(e,r),a=zr(e,a),i=[];break;case"select":r=y({},r,{value:void 0}),a=y({},a,{value:void 0}),i=[];break;case"textarea":r=Rr(e,r),a=Rr(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Qa)}Br(n,a);var o;n=null;for(f in r)if(!a.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var s=r[f];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(T.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in a){var u=a[f];if(s=r?.[f],a.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(T.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&ce("scroll",e),i||s===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}},ou=function(e,t,n,a){n!==a&&(t.flags|=4)};function ga(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Pd(e,t,n){var a=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ue(t.type)&&Xa(),ze(t),null;case 3:return a=t.stateNode,Pn(),de(Fe),de(De),Oi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(vo(ct),ct=null))),oo(e,t),ze(t),null;case 5:Li(t);var r=an(da.current);if(n=t.type,e!==null&&t.stateNode!=null)iu(e,t,n,a,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(m(166));return ze(t),null}if(e=an(vt.current),tr(t)){a=t.stateNode,n=t.type;var i=t.memoizedProps;switch(a[yt]=t,a[oa]=i,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",a),ce("close",a);break;case"iframe":case"object":case"embed":ce("load",a);break;case"video":case"audio":for(r=0;r<aa.length;r++)ce(aa[r],a);break;case"source":ce("error",a);break;case"img":case"image":case"link":ce("error",a),ce("load",a);break;case"details":ce("toggle",a);break;case"input":Bo(a,i),ce("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},ce("invalid",a);break;case"textarea":Uo(a,i),ce("invalid",a)}Br(n,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?a.textContent!==s&&(i.suppressHydrationWarning!==!0&&$a(a.textContent,s,e),r=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&$a(a.textContent,s,e),r=["children",""+s]):T.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ce("scroll",a)}switch(n){case"input":Sa(a),Fo(a,i,!0);break;case"textarea":Sa(a),Ko(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Qa)}a=r,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[yt]=t,e[oa]=a,ru(e,t,!1,!1),t.stateNode=e;e:{switch(o=Or(n,a),n){case"dialog":ce("cancel",e),ce("close",e),r=a;break;case"iframe":case"object":case"embed":ce("load",e),r=a;break;case"video":case"audio":for(r=0;r<aa.length;r++)ce(aa[r],e);r=a;break;case"source":ce("error",e),r=a;break;case"img":case"image":case"link":ce("error",e),ce("load",e),r=a;break;case"details":ce("toggle",e),r=a;break;case"input":Bo(e,a),r=zr(e,a),ce("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=y({},a,{value:void 0}),ce("invalid",e);break;case"textarea":Uo(e,a),r=Rr(e,a),ce("invalid",e);break;default:r=a}Br(n,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Go(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$o(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Rn(e,u):typeof u=="number"&&Rn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(T.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ce("scroll",e):u!=null&&Y(e,i,u,o))}switch(n){case"input":Sa(e),Fo(e,a,!1);break;case"textarea":Sa(e),Ko(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ae(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?dn(e,!!a.multiple,i,!1):a.defaultValue!=null&&dn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)ou(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(n=an(da.current),an(vt.current),tr(t)){if(a=t.stateNode,n=t.memoizedProps,a[yt]=t,(i=a.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:$a(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$a(a.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[yt]=t,t.stateNode=a}return ze(t),null;case 13:if(de(he),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)us(),Cn(),t.flags|=98560,i=!1;else if(i=tr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[yt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else ct!==null&&(vo(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?Se===0&&(Se=3):bo())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Pn(),oo(e,t),e===null&&ra(t.stateNode.containerInfo),ze(t),null;case 10:return _i(t.type._context),ze(t),null;case 17:return Ue(t.type)&&Xa(),ze(t),null;case 19:if(de(he),i=t.memoizedState,i===null)return ze(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)ga(i,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=lr(e),o!==null){for(t.flags|=128,ga(i,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)i=n,e=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>_n&&(t.flags|=128,a=!0,ga(i,!1),t.lanes=4194304)}else{if(!a)if(e=lr(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ga(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!me)return ze(t),null}else 2*ve()-i.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,a=!0,ga(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=he.current,ue(he,a?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return wo(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Je&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function jd(e,t){switch(Ni(t),t.tag){case 1:return Ue(t.type)&&Xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),de(Fe),de(De),Oi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Li(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Pn(),null;case 10:return _i(t.type._context),null;case 22:case 23:return wo(),null;case 24:return null;default:return null}}var gr=!1,Me=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,j=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){ge(e,t,a)}else n.current=null}function lo(e,t,n){try{n()}catch(a){ge(e,t,a)}}var lu=!1;function Dd(e,t){if(ki=Ma,e=Ll(),di(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,f=0,w=0,x=e,k=null;t:for(;;){for(var N;x!==n||r!==0&&x.nodeType!==3||(s=o+r),x!==i||a!==0&&x.nodeType!==3||(u=o+a),x.nodeType===3&&(o+=x.nodeValue.length),(N=x.firstChild)!==null;)k=x,x=N;for(;;){if(x===e)break t;if(k===n&&++f===r&&(s=o),k===i&&++w===a&&(u=o),(N=x.nextSibling)!==null)break;x=k,k=x.parentNode}x=N}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},Ma=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var _=D.memoizedProps,ke=D.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:dt(t.type,_),ke);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(A){ge(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return D=lu,lu=!1,D}function ya(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&lo(t,n,i)}r=r.next}while(r!==a)}}function yr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function so(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[oa],delete t[Si],delete t[fd],delete t[gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uu(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qa));else if(a!==4&&(e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}function co(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(co(e,t,n),e=e.sibling;e!==null;)co(e,t,n),e=e.sibling}var Ne=null,mt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)du(e,t,n),n=n.sibling}function du(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 5:Me||En(n,t);case 6:var a=Ne,r=mt;Ne=null,Ut(e,t,n),Ne=a,mt=r,Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),Gn(e)):Ai(Ne,n.stateNode));break;case 4:a=Ne,r=mt,Ne=n.stateNode.containerInfo,mt=!0,Ut(e,t,n),Ne=a,mt=r;break;case 0:case 11:case 14:case 15:if(!Me&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&lo(n,t,o),r=r.next}while(r!==a)}Ut(e,t,n);break;case 1:if(!Me&&(En(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){ge(n,t,s)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Me=(a=Me)||n.memoizedState!==null,Ut(e,t,n),Me=a):Ut(e,t,n);break;default:Ut(e,t,n)}}function mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ed),t.forEach(function(a){var r=Fd.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,mt=!1;break e;case 3:Ne=s.stateNode.containerInfo,mt=!0;break e;case 4:Ne=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(Ne===null)throw Error(m(160));du(i,o,r),Ne=null,mt=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(f){ge(r,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pu(t,e),t=t.sibling}function pu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),wt(e),a&4){try{ya(3,e,e.return),yr(3,e)}catch(_){ge(e,e.return,_)}try{ya(5,e,e.return)}catch(_){ge(e,e.return,_)}}break;case 1:pt(t,e),wt(e),a&512&&n!==null&&En(n,n.return);break;case 5:if(pt(t,e),wt(e),a&512&&n!==null&&En(n,n.return),e.flags&32){var r=e.stateNode;try{Rn(r,"")}catch(_){ge(e,e.return,_)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Oo(r,i),Or(s,o);var f=Or(s,i);for(o=0;o<u.length;o+=2){var w=u[o],x=u[o+1];w==="style"?Go(r,x):w==="dangerouslySetInnerHTML"?$o(r,x):w==="children"?Rn(r,x):Y(r,w,x,f)}switch(s){case"input":Mr(r,i);break;case"textarea":Ho(r,i);break;case"select":var k=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?dn(r,!!i.multiple,N,!1):k!==!!i.multiple&&(i.defaultValue!=null?dn(r,!!i.multiple,i.defaultValue,!0):dn(r,!!i.multiple,i.multiple?[]:"",!1))}r[oa]=i}catch(_){ge(e,e.return,_)}}break;case 6:if(pt(t,e),wt(e),a&4){if(e.stateNode===null)throw Error(m(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(_){ge(e,e.return,_)}}break;case 3:if(pt(t,e),wt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(_){ge(e,e.return,_)}break;case 4:pt(t,e),wt(e);break;case 13:pt(t,e),wt(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(ho=ve())),a&4&&mu(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(f=Me)||w,pt(t,e),Me=f):pt(t,e),wt(e),a&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!w&&(e.mode&1)!==0)for(j=e,w=e.child;w!==null;){for(x=j=w;j!==null;){switch(k=j,N=k.child,k.tag){case 0:case 11:case 14:case 15:ya(4,k,k.return);break;case 1:En(k,k.return);var D=k.stateNode;if(typeof D.componentWillUnmount=="function"){a=k,n=k.return;try{t=a,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(_){ge(a,n,_)}}break;case 5:En(k,k.return);break;case 22:if(k.memoizedState!==null){gu(x);continue}}N!==null?(N.return=k,j=N):gu(x)}w=w.sibling}e:for(w=null,x=e;;){if(x.tag===5){if(w===null){w=x;try{r=x.stateNode,f?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,u=x.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qo("display",o))}catch(_){ge(e,e.return,_)}}}else if(x.tag===6){if(w===null)try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(_){ge(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;w===x&&(w=null),x=x.return}w===x&&(w=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:pt(t,e),wt(e),a&4&&mu(e);break;case 21:break;default:pt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uu(n)){var a=n;break e}n=n.return}throw Error(m(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(Rn(r,""),a.flags&=-33);var i=cu(e);co(e,i,r);break;case 3:case 4:var o=a.stateNode.containerInfo,s=cu(e);uo(e,s,o);break;default:throw Error(m(161))}}catch(u){ge(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _d(e,t,n){j=e,hu(e)}function hu(e,t,n){for(var a=(e.mode&1)!==0;j!==null;){var r=j,i=r.child;if(r.tag===22&&a){var o=r.memoizedState!==null||gr;if(!o){var s=r.alternate,u=s!==null&&s.memoizedState!==null||Me;s=gr;var f=Me;if(gr=o,(Me=u)&&!f)for(j=r;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?yu(r):u!==null?(u.return=o,j=u):yu(r);for(;i!==null;)j=i,hu(i),i=i.sibling;j=r,gr=s,Me=f}fu(e)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,j=i):fu(e)}}function fu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Me||yr(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Me)if(n===null)a.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);a.componentDidUpdate(r,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&gs(t,i,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var w=f.memoizedState;if(w!==null){var x=w.dehydrated;x!==null&&Gn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Me||t.flags&512&&so(t)}catch(k){ge(t,t.return,k)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function gu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function yu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yr(4,t)}catch(u){ge(t,n,u)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var r=t.return;try{a.componentDidMount()}catch(u){ge(t,r,u)}}var i=t.return;try{so(t)}catch(u){ge(t,i,u)}break;case 5:var o=t.return;try{so(t)}catch(u){ge(t,o,u)}}}catch(u){ge(t,t.return,u)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var zd=Math.ceil,vr=we.ReactCurrentDispatcher,mo=we.ReactCurrentOwner,it=we.ReactCurrentBatchConfig,te=0,Ce=null,xe=null,We=0,Je=0,Dn=Rt(0),Se=0,va=null,on=0,kr=0,po=0,ka=null,Ke=null,ho=0,_n=1/0,Pt=null,wr=!1,fo=null,Ht=null,br=!1,Kt=null,xr=0,wa=0,go=null,Ar=-1,Sr=0;function Be(){return(te&6)!==0?ve():Ar!==-1?Ar:Ar=ve()}function Vt(e){return(e.mode&1)===0?1:(te&2)!==0&&We!==0?We&-We:vd.transition!==null?(Sr===0&&(Sr=cl()),Sr):(e=re,e!==0||(e=window.event,e=e===void 0?16:kl(e.type)),e)}function ht(e,t,n,a){if(50<wa)throw wa=0,go=null,Error(m(185));Hn(e,n,a),((te&2)===0||e!==Ce)&&(e===Ce&&((te&2)===0&&(kr|=n),Se===4&&$t(e,We)),Ve(e,a),n===1&&te===0&&(t.mode&1)===0&&(_n=ve()+500,Ja&&Bt()))}function Ve(e,t){var n=e.callbackNode;vc(e,t);var a=Da(e,e===Ce?We:0);if(a===0)n!==null&&ll(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&ll(n),t===1)e.tag===0?yd(ku.bind(null,e)):rs(ku.bind(null,e)),pd(function(){(te&6)===0&&Bt()}),n=null;else{switch(dl(a)){case 1:n=Qr;break;case 4:n=sl;break;case 16:n=Wa;break;case 536870912:n=ul;break;default:n=Wa}n=qu(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(Ar=-1,Sr=0,(te&6)!==0)throw Error(m(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var a=Da(e,e===Ce?We:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Tr(e,a);else{t=a;var r=te;te|=2;var i=bu();(Ce!==e||We!==t)&&(Pt=null,_n=ve()+500,sn(e,t));do try{Rd();break}catch(s){wu(e,s)}while(!0);Di(),vr.current=i,te=r,xe!==null?t=0:(Ce=null,We=0,t=Se)}if(t!==0){if(t===2&&(r=Gr(e),r!==0&&(a=r,t=yo(e,r))),t===1)throw n=va,sn(e,0),$t(e,a),Ve(e,ve()),n;if(t===6)$t(e,a);else{if(r=e.current.alternate,(a&30)===0&&!Md(r)&&(t=Tr(e,a),t===2&&(i=Gr(e),i!==0&&(a=i,t=yo(e,i))),t===1))throw n=va,sn(e,0),$t(e,a),Ve(e,ve()),n;switch(e.finishedWork=r,e.finishedLanes=a,t){case 0:case 1:throw Error(m(345));case 2:un(e,Ke,Pt);break;case 3:if($t(e,a),(a&130023424)===a&&(t=ho+500-ve(),10<t)){if(Da(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=xi(un.bind(null,e,Ke,Pt),t);break}un(e,Ke,Pt);break;case 4:if($t(e,a),(a&4194240)===a)break;for(t=e.eventTimes,r=-1;0<a;){var o=31-st(a);i=1<<o,o=t[o],o>r&&(r=o),a&=~i}if(a=r,a=ve()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zd(a/1960))-a,10<a){e.timeoutHandle=xi(un.bind(null,e,Ke,Pt),a);break}un(e,Ke,Pt);break;case 5:un(e,Ke,Pt);break;default:throw Error(m(329))}}}return Ve(e,ve()),e.callbackNode===n?vu.bind(null,e):null}function yo(e,t){var n=ka;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Tr(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&vo(t)),e}function vo(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!ut(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~po,t&=~kr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),a=1<<n;e[n]=-1,t&=~a}}function ku(e){if((te&6)!==0)throw Error(m(327));zn();var t=Da(e,0);if((t&1)===0)return Ve(e,ve()),null;var n=Tr(e,t);if(e.tag!==0&&n===2){var a=Gr(e);a!==0&&(t=a,n=yo(e,a))}if(n===1)throw n=va,sn(e,0),$t(e,t),Ve(e,ve()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Ke,Pt),Ve(e,ve()),null}function ko(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(_n=ve()+500,Ja&&Bt())}}function ln(e){Kt!==null&&Kt.tag===0&&(te&6)===0&&zn();var t=te;te|=1;var n=it.transition,a=re;try{if(it.transition=null,re=1,e)return e()}finally{re=a,it.transition=n,te=t,(te&6)===0&&Bt()}}function wo(){Je=Dn.current,de(Dn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,md(n)),xe!==null)for(n=xe.return;n!==null;){var a=n;switch(Ni(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Xa();break;case 3:Pn(),de(Fe),de(De),Oi();break;case 5:Li(a);break;case 4:Pn();break;case 13:de(he);break;case 19:de(he);break;case 10:_i(a.type._context);break;case 22:case 23:wo()}n=n.return}if(Ce=e,xe=e=Qt(e.current,null),We=Je=t,Se=0,va=null,po=kr=on=0,Ke=ka=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],a=n.interleaved,a!==null){n.interleaved=null;var r=a.next,i=n.pending;if(i!==null){var o=i.next;i.next=r,a.next=o}n.pending=a}nn=null}return e}function wu(e,t){do{var n=xe;try{if(Di(),sr.current=mr,ur){for(var a=fe.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}ur=!1}if(rn=0,Te=Ae=fe=null,ma=!1,pa=0,mo.current=null,n===null||n.return===null){Se=1,va=t,xe=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=We,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,w=s,x=w.tag;if((w.mode&1)===0&&(x===0||x===11||x===15)){var k=w.alternate;k?(w.updateQueue=k.updateQueue,w.memoizedState=k.memoizedState,w.lanes=k.lanes):(w.updateQueue=null,w.memoizedState=null)}var N=Ks(o);if(N!==null){N.flags&=-257,Vs(N,o,s,i,t),N.mode&1&&Hs(i,f,t),t=N,u=f;var D=t.updateQueue;if(D===null){var _=new Set;_.add(u),t.updateQueue=_}else D.add(u);break e}else{if((t&1)===0){Hs(i,f,t),bo();break e}u=Error(m(426))}}else if(me&&s.mode&1){var ke=Ks(o);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),Vs(ke,o,s,i,t),ji(jn(u,s));break e}}i=u=jn(u,s),Se!==4&&(Se=2),ka===null?ka=[i]:ka.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Fs(i,u,t);fs(i,p);break e;case 1:s=u;var d=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ht===null||!Ht.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var A=Us(i,s,t);fs(i,A);break e}}i=i.return}while(i!==null)}Au(n)}catch(z){t=z,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function bu(){var e=vr.current;return vr.current=mr,e===null?mr:e}function bo(){(Se===0||Se===3||Se===2)&&(Se=4),Ce===null||(on&268435455)===0&&(kr&268435455)===0||$t(Ce,We)}function Tr(e,t){var n=te;te|=2;var a=bu();(Ce!==e||We!==t)&&(Pt=null,sn(e,t));do try{Id();break}catch(r){wu(e,r)}while(!0);if(Di(),te=n,vr.current=a,xe!==null)throw Error(m(261));return Ce=null,We=0,Se}function Id(){for(;xe!==null;)xu(xe)}function Rd(){for(;xe!==null&&!uc();)xu(xe)}function xu(e){var t=Cu(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Au(e):xe=t,mo.current=null}function Au(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Pd(n,t,Je),n!==null){xe=n;return}}else{if(n=jd(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function un(e,t,n){var a=re,r=it.transition;try{it.transition=null,re=1,Ld(e,t,n,a)}finally{it.transition=r,re=a}return null}function Ld(e,t,n,a){do zn();while(Kt!==null);if((te&6)!==0)throw Error(m(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kc(e,i),e===Ce&&(xe=Ce=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||br||(br=!0,qu(Wa,function(){return zn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=it.transition,it.transition=null;var o=re;re=1;var s=te;te|=4,mo.current=null,Dd(e,n),pu(n,e),id(wi),Ma=!!ki,wi=ki=null,e.current=n,_d(n),cc(),te=s,re=o,it.transition=i}else e.current=n;if(br&&(br=!1,Kt=e,xr=r),i=e.pendingLanes,i===0&&(Ht=null),pc(n.stateNode),Ve(e,ve()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],a(r.value,{componentStack:r.stack,digest:r.digest});if(wr)throw wr=!1,e=fo,fo=null,e;return(xr&1)!==0&&e.tag!==0&&zn(),i=e.pendingLanes,(i&1)!==0?e===go?wa++:(wa=0,go=e):wa=0,Bt(),null}function zn(){if(Kt!==null){var e=dl(xr),t=it.transition,n=re;try{if(it.transition=null,re=16>e?16:e,Kt===null)var a=!1;else{if(e=Kt,Kt=null,xr=0,(te&6)!==0)throw Error(m(331));var r=te;for(te|=4,j=e.current;j!==null;){var i=j,o=i.child;if((j.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(j=f;j!==null;){var w=j;switch(w.tag){case 0:case 11:case 15:ya(8,w,i)}var x=w.child;if(x!==null)x.return=w,j=x;else for(;j!==null;){w=j;var k=w.sibling,N=w.return;if(su(w),w===f){j=null;break}if(k!==null){k.return=N,j=k;break}j=N}}}var D=i.alternate;if(D!==null){var _=D.child;if(_!==null){D.child=null;do{var ke=_.sibling;_.sibling=null,_=ke}while(_!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ya(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,j=p;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){o=j;var h=o.child;if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,j=h;else e:for(o=d;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:yr(9,s)}}catch(z){ge(s,s.return,z)}if(s===o){j=null;break e}var A=s.sibling;if(A!==null){A.return=s.return,j=A;break e}j=s.return}}if(te=r,Bt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Pa,e)}catch{}a=!0}return a}finally{re=n,it.transition=t}}return!1}function Su(e,t,n){t=jn(n,t),t=Fs(e,t,1),e=Ft(e,t,1),t=Be(),e!==null&&(Hn(e,1,t),Ve(e,t))}function ge(e,t,n){if(e.tag===3)Su(e,e,n);else for(;t!==null;){if(t.tag===3){Su(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ht===null||!Ht.has(a))){e=jn(n,e),e=Us(t,e,1),t=Ft(t,e,1),e=Be(),t!==null&&(Hn(t,1,e),Ve(t,e));break}}t=t.return}}function Bd(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(We&n)===n&&(Se===4||Se===3&&(We&130023424)===We&&500>ve()-ho?sn(e,0):po|=n),Ve(e,t)}function Tu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ea,Ea<<=1,(Ea&130023424)===0&&(Ea=4194304)));var n=Be();e=qt(e,t),e!==null&&(Hn(e,t,n),Ve(e,n))}function Od(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tu(e,n)}function Fd(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(m(314))}a!==null&&a.delete(t),Tu(e,n)}var Cu;Cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)He=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return He=!1,Wd(e,t,n);He=(e.flags&131072)!==0}else He=!1,me&&(t.flags&1048576)!==0&&is(t,er,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;fr(e,t),e=t.pendingProps;var r=An(t,De.current);Wn(t,n),r=Hi(null,t,a,e,r,n);var i=Ki();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(a)?(i=!0,Ya(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ii(t),r.updater=pr,t.stateNode=r,r._reactInternals=t,Yi(t,a,e,n),t=to(null,t,a,!0,i,n)):(t.tag=0,me&&i&&qi(t),Le(null,t,r,n),t=t.child),t;case 16:a=t.elementType;e:{switch(fr(e,t),e=t.pendingProps,r=a._init,a=r(a._payload),t.type=a,r=t.tag=Hd(a),e=dt(a,e),r){case 0:t=eo(null,t,a,e,n);break e;case 1:t=Js(null,t,a,e,n);break e;case 11:t=$s(null,t,a,e,n);break e;case 14:t=Qs(null,t,a,dt(a.type,e),n);break e}throw Error(m(306,a,""))}return t;case 0:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:dt(a,r),eo(e,t,a,r,n);case 1:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:dt(a,r),Js(e,t,a,r,n);case 3:e:{if(Zs(t),e===null)throw Error(m(387));a=t.pendingProps,i=t.memoizedState,r=i.element,hs(e,t),or(t,a,null,n);var o=t.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=jn(Error(m(423)),t),t=eu(e,t,a,n,r);break e}else if(a!==r){r=jn(Error(m(424)),t),t=eu(e,t,a,n,r);break e}else for(Ye=It(t.stateNode.containerInfo.firstChild),Xe=t,me=!0,ct=null,n=ms(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),a===r){t=Wt(e,t,n);break e}Le(e,t,a,n)}t=t.child}return t;case 5:return ys(t),e===null&&Pi(t),a=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,bi(a,r)?o=null:i!==null&&bi(a,i)&&(t.flags|=32),Ys(e,t),Le(e,t,o,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return tu(e,t,n);case 4:return Ri(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=qn(t,null,a,n):Le(e,t,a,n),t.child;case 11:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:dt(a,r),$s(e,t,a,r,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,r=t.pendingProps,i=t.memoizedProps,o=r.value,ue(ar,a._currentValue),a._currentValue=o,i!==null)if(ut(i.value,o)){if(i.children===r.children&&!Fe.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===a){if(i.tag===1){u=Nt(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var w=f.pending;w===null?u.next=u:(u.next=w.next,w.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),zi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,a=t.pendingProps.children,Wn(t,n),r=at(r),a=a(r),t.flags|=1,Le(e,t,a,n),t.child;case 14:return a=t.type,r=dt(a,t.pendingProps),r=dt(a.type,r),Qs(e,t,a,r,n);case 15:return Gs(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:dt(a,r),fr(e,t),t.tag=1,Ue(a)?(e=!0,Ya(t)):e=!1,Wn(t,n),Bs(t,a,r),Yi(t,a,r,n),to(null,t,a,!0,e,n);case 19:return au(e,t,n);case 22:return Xs(e,t,n)}throw Error(m(156,t.tag))};function qu(e,t){return ol(e,t)}function Ud(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,a){return new Ud(e,t,n,a)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hd(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ze)return 11;if(e===et)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cr(e,t,n,a,r,i){var o=2;if(a=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pe:return cn(n.children,r,i,t);case Re:o=8,r|=8;break;case ft:return e=ot(12,n,t,r|2),e.elementType=ft,e.lanes=i,e;case je:return e=ot(13,n,t,r),e.elementType=je,e.lanes=i,e;case be:return e=ot(19,n,t,r),e.elementType=be,e.lanes=i,e;case le:return qr(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lt:o=10;break e;case xt:o=9;break e;case Ze:o=11;break e;case et:o=14;break e;case Ee:o=16,a=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=ot(o,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function cn(e,t,n,a){return e=ot(7,e,a,t),e.lanes=n,e}function qr(e,t,n,a){return e=ot(22,e,a,t),e.elementType=le,e.lanes=n,e.stateNode={isHidden:!1},e}function Ao(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kd(e,t,n,a,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function To(e,t,n,a,r,i,o,s,u){return e=new Kd(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ii(i),e}function Vd(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return Lt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Ue(n))return ns(e,n,t)}return t}function Wu(e,t,n,a,r,i,o,s,u){return e=To(n,a,!0,e,r,i,o,s,u),e.context=Nu(null),n=e.current,a=Be(),r=Vt(n),i=Nt(a,r),i.callback=t??null,Ft(n,i,r),e.current.lanes=r,Hn(e,r,a),Ve(e,a),e}function Nr(e,t,n,a){var r=t.current,i=Be(),o=Vt(r);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Ft(r,t,o),e!==null&&(ht(e,r,o,i),ir(e,r,o)),o}function Wr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Co(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function $d(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function qo(e){this._internalRoot=e}Pr.prototype.render=qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Nr(e,t,null,null)},Pr.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Nr(null,e,null,null)}),t[At]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=hl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&yl(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Qd(e,t,n,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var f=Wr(o);i.call(f)}}var o=Wu(t,a,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=o,e[At]=o.current,ra(e.nodeType===8?e.parentNode:e),ln(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var s=a;a=function(){var f=Wr(u);s.call(f)}}var u=To(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=u,e[At]=u.current,ra(e.nodeType===8?e.parentNode:e),ln(function(){Nr(t,u,n,a)}),u}function Er(e,t,n,a,r){var i=n._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var s=r;r=function(){var u=Wr(o);s.call(u)}}Nr(t,o,e,r)}else o=Qd(n,t,e,r,a);return Wr(o)}ml=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Yr(t,n|1),Ve(t,ve()),(te&6)===0&&(_n=ve()+500,Bt()))}break;case 13:ln(function(){var a=qt(e,1);if(a!==null){var r=Be();ht(a,e,1,r)}}),Co(e,1)}},Jr=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Be();ht(t,e,134217728,n)}Co(e,134217728)}},pl=function(e){if(e.tag===13){var t=Vt(e),n=qt(e,t);if(n!==null){var a=Be();ht(n,e,t,a)}Co(e,t)}},hl=function(){return re},fl=function(e,t){var n=re;try{return re=e,t()}finally{re=n}},Hr=function(e,t,n){switch(t){case"input":if(Mr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=Ga(a);if(!r)throw Error(m(90));Lo(a),Mr(a,r)}}}break;case"textarea":Ho(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}},Zo=ko,el=ln;var Gd={usingClientEntryPoint:!1,Events:[la,bn,Ga,Yo,Jo,ko]},ba={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xd={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rl(e),e===null?null:e.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||$d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{Pa=Dr.inject(Xd),gt=Dr}catch{}}return $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd,$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(m(200));return Vd(e,t,null,n)},$e.createRoot=function(e,t){if(!No(e))throw Error(m(299));var n=!1,a="",r=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,a,r),e[At]=t.current,ra(e.nodeType===8?e.parentNode:e),new qo(t)},$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=rl(t),e=e===null?null:e.stateNode,e},$e.flushSync=function(e){return ln(e)},$e.hydrate=function(e,t,n){if(!jr(t))throw Error(m(200));return Er(null,e,t,!0,n)},$e.hydrateRoot=function(e,t,n){if(!No(e))throw Error(m(405));var a=n!=null&&n.hydratedSources||null,r=!1,i="",o=ju;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Wu(t,null,e,1,n??null,r,!1,i,o),e[At]=t.current,ra(e),a)for(e=0;e<a.length;e++)n=a[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Pr(t)},$e.render=function(e,t,n){if(!jr(t))throw Error(m(200));return Er(null,e,t,!1,n)},$e.unmountComponentAtNode=function(e){if(!jr(e))throw Error(m(40));return e._reactRootContainer?(ln(function(){Er(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},$e.unstable_batchedUpdates=ko,$e.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!jr(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Er(e,t,n,!1,a)},$e.version="18.3.1-next-f1338f8080-20240426",$e}var Bu;function im(){if(Bu)return jo.exports;Bu=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(S){console.error(S)}}return g(),jo.exports=rm(),jo.exports}var Ou;function om(){if(Ou)return _r;Ou=1;var g=im();return _r.createRoot=g.createRoot,_r.hydrateRoot=g.hydrateRoot,_r}var lm=om();const sm="modulepreload",um=function(g){return"/v3/v4/"+g},Fu={},bt=function(S,m,F){let T=Promise.resolve();if(m&&m.length>0){let U=function(Q){return Promise.all(Q.map(Z=>Promise.resolve(Z).then(W=>({status:"fulfilled",value:W}),W=>({status:"rejected",reason:W}))))};document.getElementsByTagName("link");const H=document.querySelector("meta[property=csp-nonce]"),R=H?.nonce||H?.getAttribute("nonce");T=U(m.map(Q=>{if(Q=um(Q),Q in Fu)return;Fu[Q]=!0;const Z=Q.endsWith(".css"),W=Z?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Q}"]${W}`))return;const P=document.createElement("link");if(P.rel=Z?"stylesheet":sm,Z||(P.as="script"),P.crossOrigin="",P.href=Q,R&&P.setAttribute("nonce",R),document.head.appendChild(P),Z)return new Promise((G,q)=>{P.addEventListener("load",G),P.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${Q}`)))})}))}function M(U){const H=new Event("vite:preloadError",{cancelable:!0});if(H.payload=U,window.dispatchEvent(H),!H.defaultPrevented)throw U}return T.then(U=>{for(const H of U||[])H.status==="rejected"&&M(H.reason);return S().catch(M)})};var V=Io();const zo=Jd(V);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=g=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dm=g=>g.replace(/^([A-Z])|[\s-_]+(\w)/g,(S,m,F)=>F?F.toUpperCase():m.toLowerCase()),Uu=g=>{const S=dm(g);return S.charAt(0).toUpperCase()+S.slice(1)},Xu=(...g)=>g.filter((S,m,F)=>!!S&&S.trim()!==""&&F.indexOf(S)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=V.forwardRef(({color:g="currentColor",size:S=24,strokeWidth:m=2,absoluteStrokeWidth:F,className:T="",children:M,iconNode:U,...H},R)=>V.createElement("svg",{ref:R,...mm,width:S,height:S,stroke:g,strokeWidth:F?Number(m)*24/Number(S):m,className:Xu("lucide",T),...H},[...U.map(([Q,Z])=>V.createElement(Q,Z)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(g,S)=>{const m=V.forwardRef(({className:F,...T},M)=>V.createElement(pm,{ref:M,iconNode:S,className:Xu(`lucide-${cm(Uu(g))}`,`lucide-${g}`,F),...T}));return m.displayName=Uu(g),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ro=Oe("arrow-left",hm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mo=Oe("chevron-down",fm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ym=Oe("circle-help",gm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],km=Oe("external-link",vm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],bm=Oe("globe",wm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Am=Oe("menu",xm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Hu=Oe("message-circle",Sm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Cm=Oe("search",Tm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Nm=Oe("send",qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Yu=Oe("sparkles",Wm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ku=Oe("star",Pm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Em=Oe("triangle-alert",jm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],_m=Oe("twitter",Dm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mm=Oe("x",zm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Rm=Oe("youtube",Im),Lm={en:{title:"W/A Resource Hub",home:"Home",resources:"Resources",tools:"Tools",community:"Community"},zh:{title:"W/A 中文资料库",home:"首页",resources:"资料库",tools:"工具",community:"社区"},id:{title:"W/A Pusat Sumber Daya",home:"Beranda",resources:"Sumber Daya",tools:"Alat",community:"Komunitas"},th:{title:"W/A ศูนย์ทรัพยากร",home:"หน้าหลัก",resources:"ทรัพยากร",tools:"เครื่องมือ",community:"ชุมชน"},vi:{title:"W/A Trung Tâm Tài Nguyên",home:"Trang Chủ",resources:"Tài Nguyên",tools:"Công Cụ",community:"Cộng Đồng"},ko:{title:"W/A 리소스 허브",home:"홈",resources:"리소스",tools:"도구",community:"커뮤니티"},ja:{title:"W/A リソースハブ",home:"ホーム",resources:"リソース",tools:"ツール",community:"コミュニティ"}},Vu={en:"EN",zh:"中文",id:"ID",th:"TH",vi:"VI",ko:"KR",ja:"JP"},Bm={en:"English",zh:"中文",id:"Bahasa Indonesia",th:"ภาษาไทย",vi:"Tiếng Việt",ko:"한국어",ja:"日本語"},$u=["en","zh","id","th","vi","ko","ja"];function Om({language:g,setLanguage:S,currentPage:m,setCurrentPage:F}){const[T,M]=V.useState(!1),[U,H]=V.useState(!1),[R,Q]=V.useState(!1),Z=V.useMemo(()=>Lm[g],[g]);V.useEffect(()=>{let b;const E=()=>{clearTimeout(b),b=setTimeout(()=>{Q(window.scrollY>5)},16)};return window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),clearTimeout(b)}},[]);const W=V.useCallback(b=>{F(b),M(!1);try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}},[F]),P=V.useCallback(b=>{S(b),H(!1)},[S]),G=V.useCallback(()=>{M(b=>!b)},[]),q=V.useCallback(()=>{H(b=>!b)},[]);return V.useCallback(()=>{M(!1),H(!1)},[]),l.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-2 pb-1",children:[l.jsx("div",{className:`ui-topbar ${R?"ui-topbar--scrolled":"ui-topbar--top"}`,children:l.jsx("div",{className:`ui-divider absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${R?"opacity-100":"opacity-0"}`})}),l.jsx("div",{className:"container mx-auto px-6 relative",children:l.jsxs("div",{className:"flex items-center justify-between h-12 relative z-10",children:[l.jsxs("button",{onClick:()=>W("home"),className:"flex items-center gap-2.5 group",children:[l.jsxs("div",{className:"relative w-8 h-8 flex items-center justify-center",children:[l.jsx(Yu,{size:18,className:"text-lime-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"}),l.jsx("div",{className:"absolute inset-0 bg-lime-400/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),l.jsx("span",{className:"text-[15px] font-medium text-white tracking-tight group-hover:text-lime-50 transition-colors duration-200",children:Z.title})]}),l.jsx("nav",{className:"hidden md:flex items-center gap-1",children:["home","resources","tools","community"].map(b=>l.jsxs("button",{onClick:()=>W(b),className:`relative px-4 py-1.5 text-[18px] font-medium rounded-lg transition-all duration-200 ${m===b?"text-lime-400":"text-white hover:bg-white/5"}`,children:[Z[b],m===b&&l.jsx("span",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-lime-400 rounded-full"})]},b))}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"relative hidden md:block",children:[l.jsxs("button",{onClick:q,className:`flex items-center gap-1.5 px-3 py-1.5 text-[18px] font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400/50 ${U?"text-lime-400 bg-white/5 border border-lime-500/30":"text-white hover:text-lime-400 hover:bg-white/5 border border-transparent"}`,"aria-label":"语言选择","aria-expanded":U,children:[l.jsx(bm,{size:15,className:U?"text-lime-400":""}),l.jsx("span",{children:Vu[g]}),l.jsx(Mo,{size:14,className:`transition-transform duration-200 ${U?"rotate-180":""}`})]}),U&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>H(!1)}),l.jsx("div",{className:"absolute right-0 top-full mt-2 w-52 ui-popover overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-200",children:l.jsx("div",{className:"p-1.5",children:$u.map(b=>l.jsx("button",{onClick:()=>P(b),className:`w-full text-left px-3 py-2 text-[13px] rounded-lg transition-all duration-150 ${g===b?"text-white bg-lime-500/15 font-medium":"text-zinc-400 hover:text-white hover:bg-white/5"}`,children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{children:Bm[b]}),g===b&&l.jsx("span",{className:"w-1.5 h-1.5 bg-lime-400 rounded-full"})]})},b))})})]})]}),l.jsx("button",{onClick:G,className:"md:hidden p-2 hover:bg-white/5 rounded-lg transition-all duration-200 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50","aria-label":T?"关闭菜单":"打开菜单","aria-expanded":T,children:T?l.jsx(Mm,{size:20}):l.jsx(Am,{size:20})})]})]})}),T&&l.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 mt-2 mx-4 ui-popover overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",children:l.jsxs("nav",{className:"p-2",children:[["home","resources","tools","community"].map(b=>l.jsx("button",{onClick:()=>W(b),className:`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-150 ${m===b?"text-lime-400 font-medium":"text-white hover:bg-white/5"}`,children:Z[b]},b)),l.jsxs("div",{className:"mt-3 pt-3 border-t border-zinc-800/50",children:[l.jsx("div",{className:"text-[11px] text-zinc-500 uppercase tracking-wider mb-2 px-4",children:"Language"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:$u.map(b=>l.jsx("button",{onClick:()=>P(b),className:`text-[12px] py-2 px-3 rounded-lg transition-all duration-150 ${g===b?"text-lime-400 font-medium":"text-white hover:bg-white/5"}`,children:Vu[b]},b))})]})]})})]})}const Fm=V.memo(Om),Um={vi:{about:"Về Chúng Tôi",aboutDesc:"Chúng tôi cam kết xây dựng hệ sinh thái Web4 phi tập trung, cung cấp trải nghiệm kỹ thuật số an toàn, hiệu quả và thông minh cho người dùng",quickLinks:"Liên Kết Nhanh",links:["Trang Chủ","Tài Nguyên","Công Cụ","Cộng Đồng"],contact:"Liên Hệ",legal:"Pháp Lý",legalLinks:["Chính Sách Bảo Mật","Điều Khoản Dịch Vụ","Chính Sách Cookie"],copyright:"© 2026 W/A Trung Tâm Tài Nguyên. Đã đăng ký bản quyền"},en:{about:"About Us",aboutDesc:"We are committed to building a decentralized Web4 ecosystem, providing users with secure, efficient, and intelligent digital experiences",quickLinks:"Quick Links",links:["Home","Resources","Tools","Community"],contact:"Contact Us",legal:"Legal",legalLinks:["Privacy Policy","Terms of Service","Cookie Policy"],copyright:"© 2026 W/A Resource Hub. All rights reserved"},id:{about:"Tentang Kami",aboutDesc:"Kami berkomitmen untuk membangun ekosistem Web4 terdesentralisasi, memberikan pengguna pengalaman digital yang aman, efisien, dan cerdas",quickLinks:"Tautan Cepat",links:["Beranda","Sumber Daya","Alat","Komunitas"],contact:"Hubungi Kami",legal:"Hukum",legalLinks:["Kebijakan Privasi","Ketentuan Layanan","Kebijakan Cookie"],copyright:"© 2026 W/A Pusat Sumber Daya. Hak cipta dilindungi"},th:{about:"เกี่ยวกับเรา",aboutDesc:"เรามุ่งมั่นในการสร้างระบบนิเวศ Web4 แบบกระจายอำนาจ มอบประสบการณ์ดิจิทัลที่ปลอดภัย มีประสิทธิภาพ และชาญฉลาดให้กับผู้ใช้",quickLinks:"ลิงก์ด่วน",links:["หน้าหลัก","ทรัพยากร","เครื่องมือ","ชุมชน"],contact:"ติดต่อเรา",legal:"ข้อกฎหมาย",legalLinks:["นโยบายความเป็นส่วนตัว","ข้อกำหนดการใช้บริการ","นโยบายคุกกี้"],copyright:"© 2026 W/A ศูนย์ทรัพยากร. สงวนลิขสิทธิ์"},ko:{about:"회사 소개",aboutDesc:"우리는 분산형 Web4 생태계를 구축하여 사용자에게 안전하고 효율적이며 지능적인 디지털 경험을 제공하는 데 전념하고 있습니다",quickLinks:"빠른 링크",links:["홈","리소스","도구","커뮤니티"],contact:"문의하기",legal:"법적 정보",legalLinks:["개인정보 보호정책","서비스 약관","쿠키 정책"],copyright:"© 2026 W/A 리소스 허브. All rights reserved"},ja:{about:"私たちについて",aboutDesc:"分散型Web4エコシステムの構築に取り組み、ユーザーに安全で効率的でインテリジェントなデジタル体験を提供します",quickLinks:"クイックリンク",links:["ホーム","リソース","ツール","コミュニティ"],contact:"お問い合わせ",legal:"法的情報",legalLinks:["プライバシーポリシー","利用規約","Cookieポリシー"],copyright:"© 2026 W/A リソースハブ. All rights reserved"},zh:{about:"关于我们",aboutDesc:"我们致力于构建去中心化的 Web4 生态系统，为用户提供安全、高效、智能的数字体验",quickLinks:"快速链接",links:["首页","资料库","工具","社区"],contact:"联系我们",legal:"法律信息",legalLinks:["隐私政策","服务条款","Cookie 政策"],copyright:"© 2026 W/A 中文资料库. 保留所有权利"}};function Hm({language:g}){const S=Um[g];return l.jsx("footer",{className:"border-t border-white/5 bg-slate-950/50 backdrop-blur-sm",children:l.jsxs("div",{className:"container mx-auto px-6 py-16",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-medium mb-4 text-sm",children:S.about}),l.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:S.aboutDesc})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-medium mb-4 text-sm",children:S.quickLinks}),l.jsx("ul",{className:"space-y-3",children:S.links.map((m,F)=>l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-slate-400 text-sm hover:text-white transition-colors",children:m})},F))})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-medium mb-4 text-sm",children:S.contact}),l.jsxs("ul",{className:"space-y-3",children:[l.jsx("li",{className:"text-slate-400 text-sm",children:"contact@example.com"}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-slate-400 text-sm hover:text-white transition-colors",children:"Telegram"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-slate-400 text-sm hover:text-white transition-colors",children:"Twitter"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-slate-400 text-sm hover:text-white transition-colors",children:"Discord"})})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-medium mb-4 text-sm",children:S.legal}),l.jsx("ul",{className:"space-y-3",children:S.legalLinks.map((m,F)=>l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-slate-400 text-sm hover:text-white transition-colors",children:m})},F))})]})]}),l.jsx("div",{className:"pt-8 border-t border-white/5",children:l.jsx("p",{className:"text-slate-500 text-sm text-center",children:S.copyright})})]})})}const Km=V.memo(Hm);class Vm extends V.Component{constructor(S){super(S),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(S){return{hasError:!0,error:{code:"REACT_ERROR_BOUNDARY",message:S.message,details:{stack:S.stack},timestamp:Date.now()}}}componentDidCatch(S,m){this.setState({errorInfo:m}),this.logErrorToService(S,m),this.props.onError&&this.props.onError(this.state.error,m)}logErrorToService=(S,m)=>{console.error("Error Boundary caught an error:",{error:{message:S.message,stack:S.stack},errorInfo:m,timestamp:Date.now(),userAgent:navigator.userAgent,url:window.location.href})};handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?this.props.fallback?this.props.fallback:l.jsx("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6",children:l.jsxs("div",{className:"max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6",children:l.jsx("svg",{className:"w-8 h-8 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"})})}),l.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"出现了一些问题"}),l.jsx("p",{className:"text-slate-400 mb-8 leading-relaxed",children:"应用程序遇到了意外错误。我们已经记录了这个问题，请稍后再试。"}),!1,l.jsxs("div",{className:"flex gap-3 justify-center",children:[l.jsx("button",{onClick:this.handleReset,className:"px-6 py-2.5 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-lg transition-colors duration-200",children:"重试"}),l.jsx("button",{onClick:this.handleReload,className:"px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-200",children:"刷新页面"})]})]})}):this.props.children}}const $m=()=>l.jsx("div",{className:"flex items-center justify-center min-h-[60vh]",children:l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"w-16 h-16 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin"}),l.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:l.jsx("div",{className:"w-8 h-8 border-2 border-lime-400/40 border-t-lime-400/60 rounded-full animate-spin animation-delay-150"})})]})}),Qm={en:{title:"WA Protocol of Web4.0 Whitepaper",subtitle:"Building a Sustainable Decentralized Ecosystem",backToHome:"Back to Home",tableOfContents:"Table of Contents",download:"Download PDF",readOnline:"Read Online",chapter:"Chapter"},zh:{title:"WA Protocol of Web4.0 白皮书",subtitle:"构建可持续的去中心化生态系统",backToHome:"返回首页",tableOfContents:"目录",download:"下载 PDF",readOnline:"在线阅读",chapter:"第"},id:{title:"Whitepaper WA Protocol of Web4.0",subtitle:"Membangun Ekosistem Terdesentralisasi yang Berkelanjutan",backToHome:"Kembali ke Beranda",tableOfContents:"Daftar Isi",download:"Unduh PDF",readOnline:"Baca Online",chapter:"Bab"},th:{title:"Whitepaper WA Protocol of Web4.0",subtitle:"สร้างระบบนิเวศแบบกระจายอำนาจที่ยั่งยืน",backToHome:"กลับสู่หน้าหลัก",tableOfContents:"สารบัญ",download:"ดาวน์โหลด PDF",readOnline:"อ่านออนไลน์",chapter:"บทที่"},vi:{title:"Whitepaper WA Protocol of Web4.0",subtitle:"Xây dựng hệ sinh thái phi tập trung bền vững",backToHome:"Về Trang Chủ",tableOfContents:"Mục Lục",download:"Tải PDF",readOnline:"Đọc Trực Tuyến",chapter:"Chương"},ko:{title:"WA Protocol of Web4.0 백서",subtitle:"지속 가능한 분산형 생태계 구축",backToHome:"홈으로",tableOfContents:"목차",download:"PDF 다운로드",readOnline:"온라인으로 읽기",chapter:"제"},ja:{title:"WA Protocol of Web4.0 ホワイトペーパー",subtitle:"持続可能な分散型エコシステムの構築",backToHome:"ホームに戻る",tableOfContents:"目次",download:"PDFダウンロード",readOnline:"オンラインで読む",chapter:"第"}},Qu={zh:{sections:[{id:1,title:"引言 — 从Web1.0走向Web4.0",icon:"Globe",content:`"每一次互联网跃迁，都是一次文明范式的重构。"

互联网从诞生以来，经历了数次革命性的转变，每一次演进不仅是技术的迭代，更是生产关系与价值观的根本变化：

**Web1.0: 只读时代 (Read Only)**
• 用户是"浏览者"
• 信息由少数网站所有者控制
• 网络是静态的内容展示系统
• 典型代表：#门户网站#、#BBS#、#早期博客#

**Web2.0: 用户参与时代 (Read + Write)**
• 用户生成内容（UGC）崛起，社交网络主导
• 平台成为信息与数据的聚合中心
• 然而用户数据与价值归属平台
• 典型代表：#Facebook#、#微博#、#YouTube#

**Web3.0: 去中心化所有权的觉醒 (Own)**
• 区块链引入资产主权、身份主权、DAO治理
• 用户拥有私钥、资产、参与权
• 但协议仍常依赖中心团队维护，激励系统通胀严重，难以持续

**Web4.0: 生存性系统 (Survive) — 不仅拥有，还要"活下去"**

Web4.0 不只是"拥有"，而是"能够运行且不被人干预地持续运行"。

这是一个：
• 完全去权限、无后门、可验证的自治协议系统
• 智能合约与AI共同驱动的自动运作结构
• 激励与责任绑定、运行无需人治的"链上生命体"

> 在 Web4.0 时代，我们不再构建"产品"，而是在构建数字文明的底层生命系统。

---

**未来趋势：AI × 区块链 × 自治协议 = 新互联网文明架构**

• 人工智能：构建自治协作系统与智能风控机制
• 区块链：构建无需信任的规则执行器
• 通证经济：构建动态激励和责任体系
• DApp协议：构建完全自治、自动运行的裂变生态系统

> WA Protocol 不是一次普通项目发布，而是一次面向未来十年的互联网重构：我们不是在构建一个产品，而是在锻造"生存性"的数字系统。

---

**为什么现在是Web4.0的关键时刻？**

• 全球流量成本飙升，裂变效率下滑
• 大量Web3项目死亡率高，缺乏真实现金流
• 人工智能普及带来数据、算力与内容的革命
• 对"可信的数字空间"的社会需求急剧上升

> 我们必须在这个节点，打造一种新的范式：一个能够在无需人类干预的情况下长期运行、内生造血、规则明确的协议体系。

WA Protocol，应运而生。`},{id:2,title:"Web4.0的哲学基础与WA使命",icon:"Brain",content:`**一场范式的重构：从"互联网产品"走向"数字生存系统"**

> 传统Web世界的核心逻辑是"用户-平台"的二元结构：平台控制数据、分配规则、决定激励。而到了 Web3，虽然资产主权实现了"去中心化"，但系统仍依赖"人"的维护 — 团队、后台、调整、更新。

Web4.0 则进一步提出：**规则不应由人控制，系统必须具备"自我生存性"**。

这是一种全新的哲学范式：

| 对比维度 | Web3 | Web4.0 |
|---------|------|--------|
| 核心理念 | 拥有资产 Ownership | 保持运行 Survival |
| 设计中心 | 以人为中心设计 | 以协议为中心设计（无人也可继续运行） |
| 治理方式 | 社区可治理 | 系统可自治，无人能修改规则 |
| 激励模式 | 激励可获得 | 激励需付出责任/成本，避免纯粹薅羊毛 |
| 激励设计 | 激励设计人为主 | 激励由代码设定，不可逆、不可更改 |
| 协议寿命 | 依赖开发团队 | 可自我运行、持续演化、无需人为干预 |

---

### **Web4.0 核心哲学四大支柱：**

**1. 无权限 (Permissionless)**
WA 的协议一经部署，无超级权限、无后门、无法更改。所有机制由智能合约编码，无论创始人是否在场，协议将一直按设定逻辑运行下去。

> "如果一个系统需要人为干预才能维持，它注定不能长久。"

**2. 自运行 (Autonomous)**
一切激励、裂变、消耗、分配均通过链上规则自动完成。WA 拒绝后期手动空投、链下配置或"团队决定发不发奖励"等中心化行为。裂变系统、算力引擎、通证治理、维护费分配 — 全部由链上代码治理。

**3. 共建 (Co-Built)**
每一位用户不只是使用者，更是协作者。WA 并非一个由官方维护的项目，而是一个用户可以直接搭建"自己的协议生态"的开放体系。

• 有想法 → 提案治理
• 有资源 → 发起子协议
   • 有社群 → 构建 MiniApp
   • 有产品 → 接入算力引擎
   WA 是一个由用户自发演化的"协议聚合体"。

**4. 共生 (Symbiotic)**
WA 构建的是一种正向生态循环系统：
• 产出（WANT）必须伴随维护成本（消耗）
• 裂变（卷轴）必须在规则内合规发生
• 激励（邀请奖励）必须来源于真实流通

> 没有无本之木，也没有无限增发。

---

### **WA 的历史使命：**

* 构建第一个真正意义上的Web4.0生态系统
* 实现从"拥有"到"生存"的范式转变
* 为数字文明提供基础设施级协议支持
* 让每个人都能成为数字经济的建设者和受益者

---

### **WA 的愿景：以协议为民，以系统为法**

> 我们正在进入一个后平台时代 — 权力不属于某家公司，而属于代码设定的规则系统。信任不来源于名人背书，而来源于链上规则可验证、激励可预测、风险可控制。

WA 的目标不是成为下一个中心化巨头，而是成为一个所有人都能拥有数字家园的操作系统。

未来每个人都可以拥有自己的：

• 钱包账户
• 小程序协议
• DAO社区
• 自定义激励模型
• 自主经济圈

> 在 WA 的世界里，"用户"不是流量，而是构建者；"产品"不是平台，而是协议。

---

### **总结**

| 特征 | Web4.0 哲学体现 | WA 的实现路径 |
|------|----------------|-------------|
| 权力分散 | 不可更改合约、无权限 DApp | 规则部署即永存 |
| 激励绑定责任 | 裂变=贡献+维护成本 | WANT 维护机制 |
| 去人化运行 | 自动裂变/产出/消耗 | 卷轴系统 + 算力引擎 |
| 去信任化信任 | 可验证透明机制 | 所有数据链上可查 |
| 生态可共建 | 开放接入、激励协作 | MiniApp + 技术资金支持 |

WA Protocol，是我们为未来构建的"文明系统底层"。`},{id:3,title:"WA的定位：去权限化的裂变协作协议",icon:"Network",content:`**什么是 WA？既不是平台，也不是产品，而是协议**

WA 的存在形式不是 App，也不是服务，更不是中心化企业。WA 是一个**"完全链上自治的协议体系"**，具备如下三种特征：

1. **去权限化 (Permissionless)**：无超级管理员，协议规则一经部署不可更改

2. **流量自裂变 (Autonomous Growth)**：通过智能合约控制的卷轴式自动传播系统，实现无人工干预下的几何增长

3. **多方协作 (Collaborative Infrastructure)**：任何用户、团队、社群都可以在协议之上搭建"自己的生态模块"，实现"构建者即股东"

**为什么要"卷轴式裂变"？我们理解流量的本质**

背景现实：Web3 发展面临流量瓶颈
• 用户增长成本高、教育门槛高
• 普通DApp缺乏网络效应，生命周期短
• 绝大多数项目仍依赖Web2广告渠道引流

解决方案：我们设计一种"协议内自裂变"机制 — 无需外部推广团队，无需中心控制，用户即传播节点。

**卷轴式机制：低成本引流的链上解决方案**

WA 卷轴系统本质上是一个智能合约驱动的可裂变流量协议模型，具备以下特性：

✅ **自动裂变**
• 用户触发某操作（如参与、转发、注册等）即自动生成专属邀请口令/链接
• 智能合约追踪关系链，奖励不依赖后台控制

✅ **奖励绑定行为**
• 奖励必须基于"真实链上动作"产生（如充值、提现、维护）
• 防止薅羊毛、注册机、机器人行为

✅ **去中心化结算**
• 所有奖励逻辑链上透明执行
• 没有平台人工干预或撤回权限

✅ **激励与风险动态平衡**
• 裂变邀请者收益与被邀请者真实活跃度挂钩
• 系统自动抑制"空转式"网络膨胀

"裂变的权力从运营团队，彻底下放给了协议本身。"

**WA 的技术定义：Flow-Cooperative Protocol**

WA = Flow-Cooperative Protocol（协作型流量协议）

这不是一个传统意义的"DApp"，而是一个由链上规则驱动的流量与资产双重协作协议，它承担以下角色：

| 功能模块 | 描述 |
|---------|------|
| 卷轴规则引擎 | 自动生成裂变任务/关系绑定 |
| 用户通证化 | 每位用户即资产单元，可量化贡献 |
| 推广协作 | 用户即代理，邀请即合作 |
| 激励分配 | 所有行为与收益自动化执行 |
| 私域授权 | 可接入他人模块，复用流量裂变能力 |

**"流量-协作-价值"三元闭环模型**

1. **流量裂变 (Flow)**
   • 引导新用户进入系统
   • 智能生成专属裂变口令
   • 奖励由行为决定而非人情

2. **协作构建 (Collaborate)**
   • 有私域、有团队者可复用协议
   • 社群/内容/工具团队构建 MiniApp 或 DApp

3. **价值沉淀 (Value)**
   • WANT通证作为协议主资产进行燃料支付、治理、参与等
   • 卷轴不是终点，是价值引导入系统的引擎

**案例场景：WA 卷轴协议如何用于引流？**

| 应用场景 | 卷轴执行效果 |
|---------|------------|
| 社群推广 | 自动生成专属邀请码，链上奖励 |
| 内容分发 | 内容观看/转发带邀请码，链上确认行为 |
| 项目融资 | 投资者邀请新用户参与，WANT按规则奖励 |
| 活动参与 | 每次参与行为可触发裂变口令生成 |
| 教育培训 | 学员完成课程任务即获得"学习裂变奖励" |

以上功能不依赖后台搭建，由协议智能合约自动生成与执行。

**WA 与现有Web3项目的本质区别**

| 对比项目类型 | 控制权 | 裂变方式 | 风险审计 | 用户定位 |
|------------|--------|---------|---------|---------|
| Web3 DApp | 团队控制 | 社群/空投 | 弱 | 使用者 |
| Web3平台 | 中心化 | 内容/广告驱动 | 中等 | 消费者 |
| WA Protocol | 无中心 | 自动裂变 | AI+算法审计 | 构建者 + 合作人 |

WA = 自治裂变协议 + 多方协作底座 + 去权限执行模型

**小结：WA的定位是一种"协议形式的流量操作系统"**

• 它不是一个工具，而是一个「裂变协议」
• 它不是一个平台，而是一个「协作基础设施」
• 它不是一个项目，而是一个「去人化的增长引擎」

WA Protocol 是第一个具备"自传播、自执行、自约束"能力的 Web4.0 级流量协议。`},{id:4,title:"技术架构：Web4.0的链上操作系统",icon:"Code",content:`**从"DApp"到"On-chain OS"：一场范式转移**

大多数 Web3 应用仍是中心化逻辑的"去壳版"：
• 后端存储链上数据
• 前端调用链上合约
• 控制与运维依旧掌握在开发团队手中

WA 则不同 — 它从第一行代码开始，就是链上的"协议原生体"，目标是构建一个像操作系统一样的去人化执行系统。

WA 不是"一个产品"，而是"一组可组合的执行协议"，每个协议模块都可运行、可组合、可审计、不可更改。

**WA 操作系统的五大模块：**

**1. 权限最小化内核 (No Admin Layer)**
• 所有核心模块部署后永久失控，无升级入口
• 没有团队地址、没有暂停合约、没有重置权限
• 创始人无法"抽身修改"或"干预资产"

**2. 自动裂变引擎 (Scroll Engine)**
• 基于邀请行为链上的"裂变行为记录器"
• 不依赖中心服务器
• 所有邀请/关系/激励由合约自动记录和处理

**3. 算力引擎系统 (Power Engine Layer)**
• 类似"链上挖矿"模块
• 用户锁仓 WANT，运行时间产生产出，产出规则固定
• 每72小时需维护，构成真实"运营成本"
• 支撑生态增长、代币需求、通缩机制

**4. 通证机制系统 (WANT & XANT)**
• WANT为核心生态价值流通通证
• XANT为激活引擎所需凭证（销毁式启动器）
• 所有流通逻辑链上执行（提现即流通）

**5. 可组合MiniApp系统（私域生态模块）**
• 为社区开发者提供链上运行空间（像"插件"）
• 可独立部署运行逻辑，调用基础协议引擎
• 构成多元生态协作体

MiniApp = 构建者的"私域数字主权空间"

**"自运行系统"的三大关键属性**

WA 作为链上操作系统，必须实现以下三项能力：

| 能力 | 描述 | 技术实现 |
|------|------|---------|
| 1. 自运行 | 无需人工干预可持续执行 | 无超级管理员、固定合约 |
| 2. 自驱动 | 每个行为都由激励机制引导 | 惩罚+收益由合约自动执行 |
| 3. 自审计 | 所有行为可验证、可追踪 | 全流程链上公开、AI审计辅助 |

---

### **架构总览图（逻辑结构）**

**模块说明**

| 模块 | 功能说明 | 特点 |
|------|---------|------|
| 权限最小化合约 | 系统核心合约无法更改 | 链上透明、零信任假设 |
| 自动裂变引擎 | 实现邀请裂变自动追踪和激励 | 全合约控制 |
| 算力引擎系统 | 产出WANT的唯一机制 | 定期维护 + 消耗 + 分红 |
| MiniApp生态 | 私域功能模块组合使用 | 去中心化接入 |
| 通证经济模块 | 管理激励与治理价值流 | 双币协同通缩治理 |

### **WA 在结构设计上引入三层防御**

1. **部署即锁定（Immutable）**：合约部署后不可升级，避免"后门抽水"

2. **激励绑定责任（Incentive + Cost）**：每个产出都要承担真实消耗成本，防止刷空投、薅羊毛

3. **AI监控行为图谱（On-chain AI Watcher）**：未来引入链上行为模型识别异常地址、裂变风险等

**协议开发者模式：一切皆可组合**

WA 架构允许构建者以极低门槛进行以下动作：

| 构建方式 | 示例 |
|---------|------|
| 复用卷轴引擎 | 创建自己的邀请机制 DApp |
| 嵌套算力引擎 | 结合内容/活动 + 算力奖励 |
| 构建社群协议 | MiniApp + 私域资产工具 |
| 创建治理模块 | 自定义DAO/投票子协议 |
| 建立新激励规则 | Token + Task + Reward协议组合 |

WA 本质上是一个模块化的 Web4.0 Lego 系统，人人都可以在其之上"编织"自己的经济空间。

**总结**

| 特性 | WA 架构体现 |
|------|-----------|
| 自治 | 无权限、合约锁定、不可升级 |
| 自动 | 行为自动追踪、奖励/惩罚自动结算 |
| 安全 | 所有数据链上可查、可审计、可追责 |
| 可扩展 | MiniApp模块支持无限私域生态接入 |
| 协作 | 多方团队/社群可基于相同协议构建新系统 |

WA Protocol 是一个无需控制、无需授权、无需服务器的"链上操作系统"，为 Web4.0 提供真正意义上的运行基础设施。`},{id:5,title:"核心机制设计：从裂变到自治",icon:"Settings",content:`**从用户裂变，到价值产出，再到系统自稳 — 一个完全闭环的运行模型**

WA Protocol 的最大特征不是单点"创新机制"，而是构建了一个完整的自动增长—价值生成—系统调节的自运转闭环：

裂变 ≠ 空投增长，而是成本绑定的系统激活
产出 ≠ 通胀释放，而是带维护成本的链上经济体
消耗 ≠ 被动销毁，而是设计为"生存门槛"的运行保障

**WA生态闭环模型：三重逻辑**

**1. 用户参与逻辑：裂变引流 + 行为绑定**
• 卷轴机制驱动用户邀请
• 所有行为链上记录，邀请奖励与真实行为挂钩
• 没有"薅羊毛"，所有激励都基于链上数据自动发放

**2. 激励产生逻辑：算力引擎决定产出**
• 用户用 WANT 激活引擎（由 XANT 点火）
• 引擎在运行期按周期产出 WANT
• 每 72 小时需维护，维护失败则停产
• 越高阶引擎，收益越高，但门槛、维护成本也越高

**3. 经济自稳逻辑：激励绑定成本 + 系统通缩**
• 每次引擎维护消耗 WANT 的 1%，进入销毁或分红池
• 引擎升级、提现、手续费均涉及燃料消耗
• WANT 总量进入持续通缩轨道

**算力引擎机制：WA 的产出与消耗心脏**

WA 没有"空投"。所有 WANT 的流通，都必须通过"算力引擎"产出。没有参与、没有维护，就没有产出。

引擎结构示例（核心表）：

| 引擎等级 | 门槛(WANT) | 周期(天) | 总产(WANT) | 净收益 | 月化收益率 | 容量限制 |
|---------|-----------|---------|-----------|--------|-----------|---------|
| T10     | 100       | 30      | 130       | 30     | 30%       | 3个 |
| T30     | 1,000     | 40      | 1,500     | 500    | 37.5%     | 2个 |
| T70     | 100,000   | 90      | 200,000   | 100,000| 33.3%     | 1个 |

说明：
• 所有参数写入智能合约，用户不能修改
• 引擎开启后无法中止，只能维护
• 维护间隔为 72 小时，失败将暂停产出

**维护机制：系统的"燃料门槛"**

每个引擎每次维护需燃烧其仓位 1% 的 WANT 作为"燃料"：
• 50%进入黑洞地址（销毁）
• 25%进入全球分红池
• 25%进入协议治理储备（风控 + 支撑）

维护 = 维持系统运行的经济成本。如果一个用户不愿承担消耗，他将不能获得激励。

**XANT 点火机制：一切从"点燃引擎"开始**

用户无法直接开启算力引擎，必须使用"XANT"完成点火，代表其对系统"初始成本投入"。

特点：
• XANT = 激活许可（每个引擎等级需固定XANT量）
• 使用即销毁，永久退出流通
• 市场初始仅由官方按阶段释放，逐步通缩

此机制将系统增长与资源稀缺绑定，防止无序启动：每一次增长，都是真实投入；每一次产出，背后都有真实代价。

**协议治理与可持续设计**

WA设计了激励-成本-激励的生态循环：
1. 用户参与获取收益

2. 但必须持续维护，引擎才能产出

3. 所有维护动作 = 消耗通证 = 驱动通缩 + 激励其他人（分红）

这套机制保证了：
• 无法薅空投
• 无需人工判断"合格用户"
• 所有参与者都必须对系统有真实贡献

---

### **流程结构图（逻辑结构）**

**激励规则 = 自然选择算法**

WA 把激励规则本身，设计成一种"生存激励函数"：
• 你只有持续参与才能获得产出
• 不维护你就失去资格
• 想升级你就要承担更高成本
• 激励越高，机制也越苛刻

这使得系统自动过滤"投机用户"，保留"长期贡献者"。

**小结：WA不是"发币+拉新"，而是"产出+维护"的经济文明协议**

| 环节 | 系统设计 |
|------|---------|
| 用户引流 | 卷轴裂变 + 自动邀请机制 |
| 激励产出 | 算力引擎产出 WANT |
| 激励门槛 | 需XANT点火 + WANT维护 |
| 系统平衡 | 燃料销毁 + 通缩机制 |
| 奖励调节 | 分红池 + 手续费再分配 |
| 可持续性 | 所有参与需承担代价（非零成本） |

WA 的机制让每一个激励都伴随代价，每一份产出都要承担责任 — 真正实现了"经济激励 × 责任绑定 × 自治执行"的链上生态。`},{id:6,title:"双币经济系统：WANT与XANT的共生设计",icon:"Gem",content:`**为什么采用双币模型？**

在传统Web3中，"单币机制"常导致以下三大问题：

| 问题 | 后果 |
|------|------|
| 通证无启动门槛 | 用户可无代价获取，易遭薅羊毛、空转 |
| 激励机制过度通胀 | 无限增发导致币值崩塌 |
| 缺乏持续消耗设计 | 用户产出后立即抛售，系统无法闭环 |

为此，WA 设计了一个双币协同系统，分别承担启动成本与价值承载的两个核心角色：

| 通证 | 功能定位 | 特征 |
|------|---------|------|
| XANT | 启动凭证 | 点火专用、阶段释放、销毁后退出流通 |
| WANT | 系统主币 | 核心资产、产出燃料、价值锚定、治理凭证 |

**XANT: 生态点火器 (Execution Fuel)**

XANT 是系统启动期必需的"点火资源"：

核心机制：
• 用户无法直接获取算力引擎，必须先持有并消耗 XANT
• 每启动一次引擎，对应数量 XANT 将自动销毁
• 系统初始仅由基金会按阶段释放 XANT，总量有限，逐步稀缺
• 不具备产出属性，仅用于合约激活，不流通、不交易

XANT 不存在"二级市场价值"，其全部价值体现在"系统启动权利"。

点火过程：
用户持有XANT → 消耗XANT → 激活算力引擎 → 开始WANT产出周期

**WANT: 生态主币 (Value Anchor)**

WANT 是 WA 协议中唯一具有"支付、激励、治理、消耗"多重角色的核心通证。

来源：
• 通过"算力引擎"产出（需消耗XANT激活）
• 不预挖、无中心释放、全部由用户参与产出

---

### 双币协同关系表

| 特征 | XANT | WANT |
| :--- | :--- | :--- |
| 功能 | 点火凭证 | 生态资产 |
| 获取方式 | 初始释放/任务奖励 | 算力产出 |
| 通缩方式 | 每次激活销毁 | 维护/手续费燃烧 |
| 是否可交易 | 否 | 是 |
| 是否产出 | 不产出 | 持续产出 |
| 是否参与治理 | 否 | 是 |

---

### 双币机制闭环结构图

    XANT 点火  →  激活算力引擎产出 WANT  →  参与生态/维护消耗  →  通缩价值沉淀

---

### 分配机制表

每次系统收取的 WANT 维护费或手续费,按以下比例分配:

| 流向 | 比例 |
| :--- | :--- |
| 黑洞销毁 | 25% |
| 全球分红池 | 50% |
| 治理基金 | 25% |

---

### 经济调控机制

WA 协议通过智能合约引入动态行为调控策略:

* 若市场提现大于维护/销毁,系统自动提高维护成本
* 若 WANT 短期价格剧烈波动,协议将提高分红占比,刺激锁仓
* 若 XANT 释放阶段过快,协议可暂停点火入口,延缓新增

---

消耗场景：

| 场景 | WANT用途 |
|------|---------|
| 算力引擎维护 | 每72h消耗持仓1%，部分销毁，部分进入奖励池 |
| DApp功能支付 | 在MiniApp生态中作为服务费、访问凭证 |
| 提现手续费 | To-Wallet行为需燃烧一定比例 WANT |
| 社群治理 | 投票、提案需锁仓WANT |
| 联名卡/支付 | 跨境支付/兑换也需消耗 WANT |

WANT = 使用权 + 维护权 + 治理权 + 链上活动燃料

**WANT的通缩机制：系统自平衡设计**

WA 不鼓励无限增长，而是通过设计"燃烧机制"来抑制无序扩张：

通缩机制三环：
1. **算力维护销毁**：每次引擎维护，WANT 自动燃烧 1%

2. **手续费销毁**：用户提现、交易时燃烧部分手续费

3. **黑洞地址归集**：所有销毁链上可查、不可逆转，透明运行

分配机制：
每次系统收取的WANT维护费或手续费，按以下比例分配：

| 流向 | 比例 |
|------|------|
| 黑洞销毁 | 25% |
| 全球分红池 | 50% |
| 治理基金 | 25% |

**WANT与XANT的协同关系**

| 特征 | XANT | WANT |
|------|------|------|
| 功能 | 点火凭证 | 生态资产 |
| 获取方式 | 初始释放/任务奖励 | 算力产出 |
| 通缩方式 | 每次激活销毁 | 维护/手续费燃烧 |
| 是否可交易 | 否 | 是 |
| 是否产出 | 不产出 | 持续产出 |
| 是否参与治理 | 否 | 是 |

---

### **双币机制闭环结构（逻辑结构）**

XANT 点火 → 激活算力引擎产出 WANT → 参与生态/维护消耗 → 通缩价值沉淀

**经济调控机制：动态平衡、防止泡沫**

WA 协议通过智能合约引入动态行为调控策略：
• 若市场提现大于维护/销毁，系统自动提高维护成本
• 若WANT短期价格剧烈波动，协议将提高分红占比，刺激锁仓
• 若XANT释放阶段过快，协议可暂停点火入口，延缓新增

所有规则链上部署、社区可提案调整，但无手动干预权限。

**通证发行模型**

| 通证 | 总量 | 分配方式 |
|------|------|---------|
| XANT | 限量（如10亿） | 按阶段释放+任务激励，使用即销毁 |
| WANT | 无上限 | 100%通过算力引擎产出，持续通缩 |

无预挖、无团队预留、无空投。

**小结：WA 的通证不是奖励，而是协议运行的"责任契约"**

| 维度 | XANT | WANT |
| :--- | :--- | :--- |
| 启动激励 | ✓ | ✓ |
| 产出逻辑 | ✗ | ✓ |
| 消耗逻辑 | ✓ | ✓ |
| 治理功能 | ✗ | ✓ |
| 价值支撑 | 稀缺使用场景 | 多重生态消费场景 |

WA 的通证经济设计，核心不是投机流通，而是协议激活 → 用户产出 → 系统消耗 → 价值沉淀的链式闭环。`},{id:7,title:"商业闭环：造血系统与激励规则",icon:"TrendingUp",content:`**背景思考：为什么90%的Web3项目"养不活自己"？**

大多数Web3项目最终失败，根因在于：

| 问题 | 后果 |
|------|------|
| 依赖发行筹资 | 没有真实用户付费行为 |
| 激励靠通胀 | 用户赚到的其实是"后人接盘" |
| 无现金收入 | 项目永远靠融资"输血"生存 |
| 奖励设计脱离现实成本 | 系统通缩无法维持，用户逐步流失 |

WA 的理念是反其道而行之：项目不能靠融资活，而要靠机制"自造血"活。

**WA 的三大造血源系统（真实现金流）**

WA 的每一分钱"分红、激励、回购"，都来自以下可验证的真实收入：

**1. 流量变现系统 (Ad Engine)**
• 内置广告任务平台（短视频观看、内容分享等）
• 广告主按观看量/互动量支付美金广告费
• 用户完成任务获取奖励
• 收益归入生态现金池（USDT）

链路：用户注意力 → 平台广告点击 → Google Ad/合作主投放 → 收益 → 分红/维护/回购

**2. 金融佣金系统 (Fintech Commission)**
• 与全球头部交易所（Binance/OKX 等）合作引流
• 用户通过 WA 注册交易所，平台获得 CPA（注册奖励）+ 手续费返佣
• 与卡组织合作，用户使用联名卡消费产生分润

链路：用户转化 → 注册交易所 → 首充+交易 → 平台获佣金（稳定币结算）

**3. 算法量化系统 (AI Quant Engine)**
• 引导用户将资金托管至量化账户，由 AI 量化策略交易
• 平台收取管理费（如2%）与业绩分成（如20%）
• 所有数据、回撤、收益率链上或API可验证

实盘收益历史：月化约 36%，最大回撤<3%（历史数据，不构成承诺）

**商业闭环总图（逻辑结构）**

    **奖励规则设计：激励 ≠ 发钱，而是贡献换价值**

WA 的奖励系统遵循以下设计理念：

| 原则 | 说明 |
|------|------|
| 奖励必须来自真实行为 | 不奖励注册、奖励"行为"如参与、转发、维护 |
| 激励绑定持续贡献 | 一次拉新 ≠ 奖励，需下级持续活跃 |
| 所有奖励链上发放 | 不依赖后台人工，透明分配 |

**激励体系结构（四种类型）：**

| 类型 | 说明 | 条件 |
| :--- | :--- | :--- |
| 1. 网体解锁奖励 | 基于邀请裂变层级获得部分返佣 | 锁仓/活跃达标 |
| 2. 平级奖励 | 对一代同级别的用户返佣1% | 仅一层，防止穿透无限裂变 |
| 3. 达人等级奖励 | 成为星级达人后，获得级差奖励 | 有效直推+团队体量要求 |
| 4. 全球手续费分红 | 所有手续费按等级倒序分配 | 达人等级越高权重越大 |

**星级达人模型示意（部分）：**

| 等级 | 条件（直推+结构） | 奖励 |
|------|-----------------|------|
| 一星达人 | 推5人+团队5万体量 | 平级奖3% + 分红30% |
| 三星达人 | 推15人+培养2个二星 | 平级奖9% + 分红20% |
| 六星达人 | 推30人+培养3个五星 | 平级奖15% + 分红3% |

所有激励结构链上执行，不可更改。

**风控机制保障激励可持续：**

1. **算力绑定机制**：上级算力必须 ≥ 下级，否则无法获得对应奖励（"烧伤机制"）

---

### 风控架构总图

    AI 实时审计 (识别风险)
            ↓
    链上规则执行 (算力绑定/封顶/燃烧)
            ↓
    治理基金对冲 (资金支撑)
            ↓
    系统自平衡 (动态参数调节)

---

### 三层防护体系

协议具备应对外部冲击的"自愈能力":

| 风险场景 | 协议自动反应机制 |
| :--- | :--- |
| **产出过快(通胀)** | 自动提高 XANT 点火门槛 + 增加 WANT 维护费比例 |
| **市场流动性不足** | 启动"治理基金"进行回购, 或调高分红池分配权重 |
| **恶意攻击/脚本** | AI 审计模型自动锁定异常账户, 延长提现冷却期 |
| **价格剧烈波动** | 动态调整引擎产出速率, 实现"产销平衡" |

---

### 四、治理储备与安全垫
* **治理基金 (Governance Fund)**: 占所有销毁/维护费分配的 25%。
* **用途**: 
  1. 作为极端情况下的流动性支撑。
  2. 用于漏洞赏金与技术升级。
  3. 作为生态 MiniApp 的风险补偿保证金。

2. **封顶机制**：每日动态奖励不得超过算力1.5倍

3. **提现燃烧机制**：提现行为本身消耗 WANT，确保激励 = 成本

激励只是"系统再分配"，绝非"发钱游戏"。

**回购与通缩机制：**

平台所有真实现金收入（USDT），用于：
• 市场回购 WANT
• 将回购 WANT 自动销毁
• 补充分红池与激励支撑

这意味着：用户的每一份产出，背后都有真实现金在"反向托底"。

**小结：WA 不是靠融资，而是靠系统自我进化**

| 模块 | 描述 |
|------|------|
| 收入结构 | 广告 + 金融佣金 + AI量化 |
| 奖励结构 | 行为驱动 + 等级激励 + 平级封顶 |
| 回购机制 | USDT回购WANT + 黑洞销毁 |
| 分红机制 | 等级倒序加权 + 完全链上 |
| 风控机制 | 算力绑定 + 限产 + 动态平衡 |

WA 用一整套机制实现了：
• 可增长（用户裂变）
• 可分配（激励规则）
• 可造血（现金流）
• 可持续（风控通缩）`},{id:8,title:"风控系统与可持续性设计",icon:"Shield",content:`**为什么风控必须"协议原生"？**

传统 Web2 平台的风控依赖：
• 人工审核
• 数据中心监控
• 中控暂停机制

但在 Web3，一旦上链就不可逆、不可更改，所以所有风控必须：
1. 写入智能合约
2. 自动触发执行
3. 不依赖任何"后台干预"

WA Protocol 在此基础上进一步提出：**风控即协议结构本身，风险识别与经济逻辑不可分离**。

**WA 风控体系的五大核心模块：**

**1. 自动行为监管系统 (Behavior Audit)**

目标：识别非人类行为、批量注册、套利行为

机制：
• 监测用户行为序列（频率、路径、时间戳）
• 对符合"机器人模式"的行为自动标记
• 部分激励延迟释放，配合AI模型二次判断
• 规则链上公开
• 非拉黑机制，不影响用户资产安全

**2. 奖励可得性限制系统 (Cap Control)**

目标：避免无限裂变、多账户套取激励

机制：
• 所有用户每日最大收益受算力规模限制（默认上限：1.5倍/天）
• "算力不足"的上级将丧失对应返佣资格（烧伤机制）
• 同级裂变奖励仅支持一层，不可穿透
• 避免"打工式组织"套利
• 奖励严格与真实投入挂钩

**3. 激励动态平衡系统 (Dynamic Incentive Adjuster)**

目标：应对系统快速增长造成的激励透支风险

机制：
• 设定全网每日总激励上限（如1%全网释放量）
• 若实际参与过快，合约自动延后释放周期
• 超量部分进入"缓释池"，分批释放，平滑节奏
• 防止短期拉升导致"通胀幻觉"
• 有效调节裂变节奏

**4. 提现惩罚与黑洞销毁机制 (Exit Cost Design)**

目标：用户不能只产出、不承担运行成本

机制：
• 每次提现将销毁 2%‒5% 的 WANT
• WANT中一部分进入黑洞地址永久销毁
• 系统形成"流动性越高，通缩越强"的反向反馈机制
• 产出行为绑定真实成本
• 提现本身成为系统通缩的一部分

**5. 智能审计与AI监控模块 (AI Sentinel)**

目标：以AI算法识别系统级风险和攻击模型

• 追踪全网地址行为图谱
• 引入时间-关系-频率三维图建模
• 用 AI 识别僵尸网、循环提币、DID串联套利等
• AI模型持续学习，通过 DAO 治理逐步优化智能识别引擎
• 不可直接冻结用户资产
• 可标记"风险地址"延迟激励

**风控 = 算法 + 行为 + 激励 三位一体**

| 模块 | 风控手段 | 触发方式 | 特点 |
|------|---------|---------|------|
| 行为风控 | 频率分析 / 图谱模型 | 自动检测 | 判定"类机器人"行为 |
| 激励风控 | 收益上限／烧伤机制 | 与算力挂钩 | 避免多级套利 |
| 通证风控 | 提现销毁/激励缓释 | 经济行为驱动 | 越提越稀缺 |

**可持续性设计逻辑：**

WA协议提出"经济可持续三原则"：

**原则一：系统中每一分产出，必须来源于真实燃料**
• 无"无代价奖励"
• 所有产出需 XANT 点火 + WANT 维护 + 行为达成

**原则二：系统中每一笔提现，都有通缩影响**
• WANT 提现时将燃烧部分资产
• 防止"产出→提现→价格崩"的无限循环

**原则三：所有结构均有生命周期与"责任绑定"**
• 引擎需维护、达人需稳定团队、每个奖励有上限
• 参与即承担责任，不可一劳永逸

**可持续性：数据模拟示例**

假设某阶段 WA 总用户 10 万人，日活 20%，WANT流通约5,000,000：

| 指标 | 设计影响 |
|------|---------|
| 日激励上限 | 50,000 WANT (1%) |
| 系统每日销毁 | 10,000 WANT（提现 + 维护） |
| 新用户点火成本 | 约合 50 USDT（XANT换算） |
| 流通增长率 | < 产出 × 通缩 → 实现净通缩 |
| 实际回购占比 | 每月总USDT收入约15%，进入回购 |

模型模拟显示：用户增长加速期仍保持净通缩态势，支撑 WANT 价格与稀缺性。

**小结：WA 风控机制不是"封禁"，而是"系统自保护逻辑"**

| 风控维度 | 具体手段 | 核心目标 |
|---------|---------|---------|
| 行为识别 | AI审计／图谱追踪 | 拦截非真实参与行为 |
| 奖励控制 | 激励限额 / 算力绑定 | 防止无限裂变崩盘 |
| 通证控制 | 销毁机制 / 提现惩罚 | 控制流通，防通胀 |
| 激励平滑 | 缓释机制 | 应对短期爆发式增长 |
| 系统安全 | AI Sentinel监控 | 构建生态级免疫系统 |

WA 不依赖"项目方审核"，而是通过一套自洽系统实现：
• 风控 = 协议
• 审计 = AI
• 惩罚 = 通缩

---

### **逻辑结构总结**

AI 实时审计（识别风险）
↓
链上规则执行（算力绑定/封顶/燃烧）
↓
治理基金对冲（资金支撑）
↓
系统自平衡（动态参数调节）

它是一种新的"规则自执行型操作系统"。`},{id:9,title:"五大生态结构：社交、媒乐、资管、交易、支付",icon:"Network",content:`**哲学预设：从"超级平台"到"个体宇宙"**

在 Web2，用户是平台的"产品"。而 Web4.0 的使命是：
• 每个个体都是主权节点
• 每个社区都是独立文明
• 平台变为"土壤"，不是"统治"

WA 协议正是为此设计的：它不是"运营一套产品"，而是托举一代开发者的数字文明工具箱。

---

---

### **万象文明生态图（逻辑结构）**

WA 操作系统 (链上协议)
↓
社交协议 | 商业协议 | 教育协议 | 金融协议 | 治理协议
↓
构建者、创作者、社群节点、私域社区
(共建共赢、各自治理、分布繁衍)

---

**五大生态扩展领域：**

**1. 社交协作协议 (Social Layer)**

愿景：个体构建自己的社群主权空间

• 用户可开设私域社区，部署DApp或MiniApp
• 拥有独立规则、代币、身份系统
• 像"链上部落"，但由用户自己治理

示例：
• 社群激励系统（邀请制成员、贡献计分）
• 推文打赏/点赞分红系统
• 私域群DAO（自动分红、提案）

**2. 商业孵化协议 (Biz Launch Layer)**

愿景：人人可以在链上开公司、发项目、做产品

• 创业团队可无许可部署产品 MVP
• 调用WA裂变/算力/激励系统
• 使用WANT作商业代币，绑定治理与收入分红

示例：
• DApp孵化平台：构建小程序 + 自动激励系统
• 任务经济系统：完成任务获取代币奖励
• 服务支付通道：使用WANT完成付费闭环

**3. 教育共建协议 (Edu-CoBuild Layer)**

愿景：开放式教育网络，人人可教、人人可学、人人得益

• 构建者可开设在线课程、技能训练营
• 学员通过互动解锁、答题、任务参与
• 所有行为被链上记录，生成可转移的学习证明 NFT

示例：
• "AI Prompt训练营"激励机制
• "Web3入门学习路径"绑定裂变传播
• 知识NFT：完成系列学习后自动生成认证

**4. 金融协作协议 (DeFinity Layer)**

愿景：重构可信的"非庞氏金融空间"

WA不直接内嵌DeFi，而是提供底层机制：
• 所有金融产品需接入算法风控层
• 无团队、无空投、无二级币的资产模型
• 所有收益自动结算，智能审计追踪

潜在金融生态：
• 去中心量化基金（链上历史记录+授权托管）
• 自动税收/分红分配系统
• 链上保险 DAO（社区投票赔付）

**5. 公共治理协议 (WA-Gov Layer)**

愿景：建立第一个全链式自治共同体

• 用户可通过WANT参与提案/投票
• 所有参数调整（产出比例、手续费分配等）通过链上共识调整
• 治理过程 + 执行均为链上合约驱动，无"治理后门"

治理机制关键点：
• 权重来自用户锁仓时长 × 算力等级 × 社区评级
• 投票记录可追溯、不能篡改
• 所有DAO合约为开源透明模板

**私域文明模型：从"账户"到"主权节点"**

WA提出一个前所未有的视角：

• 未来每个用户 = 一个"文明原点"
• 每个DApp = 一个"微型国家"
• 每个社群 = 一个"去中心部落"

WA不运营生态，而是托举生态。

**权限自由 + 风控嵌套 = 去中心但有序**

WA所有生态扩展必须遵守一项共识：

✅ 可部署，但要遵守风控协议（如算力绑定、审计模板、激励限额）

系统不做价值判断、不"审批上线"，但所有生态必须遵守自动风控协议，以避免诈骗、庞氏、欺诈项目进入生态。

**小结：WA不是一个项目，而是一种"数字文明生长土壤"**

| 维度 | 表现 |
| :--- | :--- |
| 核心角色 | 协议运行内核（非平台方） |
| 用户角色 | 私域构建者 / 社群主理人 |
| 生态扩展 | 无许可接入 + 模块组合 |
| 风控机制 | 必须接入链上风控合约层 |
| 商业模式 | WA不"控平台"，只控协议机制 |

WA是一个自治的Web4.0原生协议空间，托举数以万计的文明节点生长。`},{id:10,title:"共建机制：人人可参与的私域经济体",icon:"Users",content:`**核心定义：从"用户"到"构建者"**

WA 并非一个由官方维护的项目，而是一个用户可以直接搭建"自己的协议生态"的开放体系。在 Web4.0 的框架下，每一位用户不只是使用者，更是协作者。

**一、MiniApp 生态孵化**

WA 为所有生态成员提供了创建自己 DApp 或 MiniApp 的权限，使其能够直接参与资产沉淀与规则共建。

• **开放式接入**：所有生态成员都可以利用 WA 的协议内核创建个性化的小程序
• **私域数字主权**：MiniApp 被定义为构建者的"私域数字主权空间"，允许开发者在其内自主设定运行逻辑
• **底层能力复用**：开发者可以无缝调用 WA 的算力引擎、裂变引擎以及通证机制，无需从零开始构建底层代码

**二、DAO 社区治理与孵化**

WA 提供了人人可参与的私域经济体模型，核心在于 DAO 的共建机制。

• **去中心化提案**：用户若有想法，可以通过提案治理参与系统决策
• **权重分配模型**：治理权重来自于用户的锁仓时长、算力等级以及社区评级的三重加权
• **自动化执行**：所有的 DAO 社区治理规则一经共识达成，将由链上智能合约自动驱动执行，无人能修改规则

**三、技术与资金支持体系**

为了促进私域经济体的繁荣，WA 协议内置了以下支持机制：

| 支持维度 | 具体体现 |
|---------|---------|
| 技术支持 | 提供可组合、可嵌套、可治理的功能模块模板 |
| 资金支持 | 治理基金池（占手续费/维护费分配的 25%）用于支持生态创新 |
| 流量支持 | 通过卷轴规则引擎为新孵化的 MiniApp 提供自动裂变引流能力 |

**四、私域经济圈的构成要素**

在 WA 的共建机制下，每一个私域经济体都可以拥有自己的：

1. **钱包账户**：独立的数字身份主权
2. **小程序协议**：自定义的交互逻辑
3. **DAO 社区**：独立的共识与治理环境
4. **自定义激励模型**：根据业务需求设定代币产出与消耗规则
5. **自主经济圈**：形成完整的内生价值循环

**小结：WA 不运营生态，而是托举生态**

通过"权限自由 + 风控嵌套"的机制，WA 让每个社区都能成为独立文明，在遵守协议风控底线的前提下实现分布繁衍。`},{id:11,title:"全球扩张与本地化策略",icon:"Map",content:`**核心愿景：3000 万地址目标与链上文明进程**

WA Protocol 的目标不仅是技术上的成功，更是要成为全球首个"去权限化数字文明起源协议"。为了实现全球范围内的共建与增长，我们制定了差异化的本地化扩张策略。

**一、全球重点市场布局与打法**

针对不同国家和地区的互联网生态、金融环境及文化背景，WA 采取了精准的穿透策略：

**亚洲市场 (Asia)**
• **核心逻辑**：社交裂变与高频互动
• **打法**：利用亚洲发达的社群文化，通过"卷轴式"裂变系统快速覆盖社交网络，推动大规模用户入场

**南美与非洲 (South America & Africa)**
• **核心逻辑**：金融普惠与造血生存
• **打法**：侧重于金融协作协议 (DeFinity) 的落地，为当地缺乏稳定金融工具的用户提供 AI 量化与数字造血系统，满足其"数字生存"刚需

**中东、东欧与东南亚 (Middle East, Eastern Europe & SE Asia)**
• **核心逻辑**：商业孵化与私域文明
• **打法**：吸引本地开发者与创业团队在 WA 操作系统上部署 MiniApp，利用去权限化机制构建当地的自主经济圈

**二、流量自裂变 (Autonomous Growth) 的本地化驱动**

扩张的动力并非来源于中心化的营销团队，而是来源于协议内生的增长引擎：

• **流量自裂变机制**：通过智能合约控制的传播系统，实现无人工干预下的几何增长
• **用户即传播节点**：每个区域的用户通过触发真实动作（注册、维护、产出）自动生成专属裂变口令，将扩张权力彻底下放给协议本身
• **低成本引流**：无需依赖传统的 Web2 广告引流，降低全球扩张的边际成本

**三、本地化策略的执行标准**

所有全球化动作必须遵守以下三项共识原则：

1. **规则全球统一**：核心协议（如权限最小化内核、算力产出逻辑）在全球范围内保持一致，无人能修改规则
2. **风控嵌套合规**：所有本地化生态扩展必须遵守自动风控协议（如算力绑定、审计模板），拦截非真实参与行为
3. **主权自治**：允许不同地区的社群根据本地文化建立独立的 DAO 社区与自定义激励模型，形成"去中心部落"

---

### **扩张逻辑总结**

全球化愿景（3000万地址目标）
↓
差异化区域打法（亚洲裂变/南美造血/中东孵化）
↓
协议内生增长引擎（自裂变 + 用户节点传播）
↓
本地化自治社区（各地区 DAO + 私域文明）

WA 的全球扩张不依赖资本推动或营销团队，而是依靠协议本身的自我复制能力与各地用户的自主共建。`},{id:12,title:"未来展望与路线图",icon:"Target",content:`**问题之源：Web 互联网的文明困境**

自 Web1.0 至今，互联网经历了四代演进：

| 时代 | 关键词 | 问题 |
|------|--------|------|
| Web1.0 | 静态网页、信息展示 | 无互动、单向发布 |
| Web2.0 | 社交平台、内容UGC | 数据被垄断、算法黑箱、用户沦为产品 |
| Web3.0 | 区块链、去中心化 | 技术封闭、泡沫频发、公共性缺失 |
| Web4.0 | AI + DAO + Protocol | 尚未形成系统认知框架 |

问题根源在于：互联网每次"升级"，都无法彻底摆脱"中心化+权力滥用"的旧模板。我们需要的不是"改进的平台"，而是一个"全新的文明协议"。

**WA的哲学立场：协议即秩序，算法即共识**

WA 不是一套产品，而是一种文明起源结构。其基本判断是：

真正自由的世界，不是靠"组织者管理"，而是靠"算法自动协调"。
真正公平的协作，不是靠"主权意志"，而是靠"行为驱动的激励合约"。

WA 不是治理世界，而是设计一种可治理的数字现实。

**WA协议的原型价值：10年尺度的系统性认知**

| 系统层级 | WA的原型意义 |
|---------|------------|
| 技术层 | Web4.0 去权限化操作系统 |
| 协议层 | 算法自治 × 协作协议 × 多文明共存 |
| 社会层 | 新型社会组织架构的实验沙盒 |
| 经济层 | 非中心化流通模型的激励引擎 |
| 哲学层 | 信任、权力与秩序的再定义尝试 |

WA 是一种"原生生长结构"而不是"管理式平台"。

**未来演化路线图（3阶段）**

**第一阶段（1‒2年）：协议启动 + 协作模型验证**

• 完成基础协议上线（引擎系统、裂变模型、分红结构）
• 成立多个私域社区（百人~千人规模）
• 实现最早期可用DApp生态
• 开始收集链上行为数据，训练AI审计模型

目标：验证激励-治理-风控三重结构是否"可闭环"

**第二阶段（3‒5年）：多生态自生长 + 协议治理自治化**

• 超100个生态项目/DAO部署在WA协议
• 用户从"使用平台"转向"建设协议"
• 协议参数全部实现链上治理
• AI参与部分内容审核/参数调节建议

目标：演化出无需人工干预的系统更新机制

**第三阶段（5‒10年）：去平台化"世界网民共和国"雏形**

• 用户拥有去权限化身份（DID + 数字签名）
• 所有社交/交易/学习/工作行为链上确权
• 形成多个"链上部落"，每个社区有自组织权利
• 协议成为主权数字协作空间，不再依赖特定团队

目标：协议自演化，用户自治理，构建"个体主权数字文明"

**WA的底层承诺：绝不沦为"平台化异化者"**

WA承诺：
• 不持有"后门密钥"
• 不托管任何用户资产
• 不干预激励分配、激活顺序、提现行为
• 不做"超级DApp"，仅作为协议工具箱

WA 会随着用户共同演化，逐步隐退，最终由协议自己运行。

**WA的未来不是"更好的项目"，而是"更不需要团队的系统"**

Web4.0 的文明形态需要：

| 特征 | WA设计如何支持 |
| :--- | :--- |
| 自动分配 | 所有收益按算法划分，无人工干预 |
| 自动监管 | AI + 图谱风控机制，主动识别风险 |
| 自动演化 | 所有参数链上治理，社区可升级协议版本 |
| 自动裂变 | 卷轴式协作协议，全网行为自扩散 |

未来，人们不再"上线某项目"，而是"接入某个文明协议"。

**终极目标：成为全球首个"去权限化数字文明起源协议"**

WA不是数字产品，而是：
• 一个从行为开始的协议
• 一个从激励开始的秩序
• 一个从协作开始的文明
• 一个从代码开始的未来世界

**结语：一个比"平台"更大，但比"乌托邦"更真实的选择**

WA要构建的不是虚构幻想，而是：
• 一个真实运行、激励真实用户、具有自我调节能力的系统
• 一个足够宽容、支持差异、允许自组织和社区主权的底层协议
• 一个可以共建、共赢、共守的文明土壤

而你，不再是用户。
你，是共建者、是治理者、是这场数字新文明的原始居民。

**WA is not a platform. It is a world.**`}]},en:{sections:[{id:1,title:"Introduction — From Web1.0 to Web4.0",icon:"Globe",content:`"Every internet leap is a reconstruction of civilizational paradigms."

Since its inception, the internet has undergone several revolutionary transformations. Each evolution is not merely a technological iteration, but a fundamental change in production relations and values:

**Web1.0: Read-Only Era**
• Users are "browsers"
• Information controlled by few website owners
• Network as static content display system
• Representative examples: #Portal sites#, #BBS#, #early blogs#

**Web2.0: User Participation Era (Read + Write)**
• User-Generated Content (UGC) rises, social networks dominate
• Platforms become aggregation centers for information and data
• Yet user data and value belong to platforms
• Representative examples: #Facebook#, #Weibo#, #YouTube#

**Web3.0: Awakening of Decentralized Ownership (Own)**
• Blockchain introduces asset sovereignty, identity sovereignty, DAO governance
• Users own private keys, assets, participation rights
• But protocols still rely on central team maintenance, severe inflation in incentive systems, difficult to sustain

**Web4.0: Survival System (Survive) — Not Just Ownership, But "Staying Alive"**

Web4.0 is not just about "owning", but "being able to run and continue to run without human intervention".

This is:
• A fully permissionless, backdoor-free, verifiable autonomous protocol system
• An automated operating structure co-driven by smart contracts and AI
• A "chain-based life form" where incentives bind with responsibilities, operating without human governance

In the Web4.0 era, we are no longer building "products", but constructing the underlying life systems of digital civilization.

**Future Trend: AI × Blockchain × Autonomous Protocol = New Internet Civilization Architecture**
• Artificial Intelligence: Building autonomous collaboration systems and intelligent risk control mechanisms
• Blockchain: Building trustless rule executors
• Token Economy: Building dynamic incentive and responsibility systems
• DApp Protocol: Building fully autonomous, automatically operating viral ecosystem systems

WA Protocol is not an ordinary project launch, but a reconstruction of the internet for the next decade: we are not building a product, but forging a "survival" digital system.

**Why is now the critical moment for Web4.0?**
• Global traffic costs soaring, viral efficiency declining
• High mortality rate of Web3 projects, lacking real cash flow
• AI popularization bringing revolution in data, computing power, and content
• Social demand for "trustworthy digital space" rising sharply

We must, at this juncture, create a new paradigm: a protocol system that can run long-term without human intervention, with internal blood generation and clear rules.

WA Protocol, born at the right time.`},{id:2,title:"Philosophical Foundation of Web4.0 and WA Mission",icon:"Brain",content:`**A Paradigm Reconstruction: From "Internet Products" to "Digital Survival Systems"**

The core logic of the traditional Web world is the binary structure of "user-platform": platforms control data, allocate rules, and determine incentives. In Web3, although asset sovereignty achieved "decentralization," the system still relies on "human" maintenance — teams, backends, adjustments, and updates.

Web4.0 further proposes: **Rules should not be controlled by humans; systems must possess "self-survival capability"**.

This is a completely new philosophical paradigm:

| Comparison Dimension | Web3 | Web4.0 |
|---------|------|--------|
| Core Philosophy | Asset Ownership | System Survival |
| Design Center | Human-centered design | Protocol-centered design (can continue running without humans) |
| Governance Method | Community governable | System autonomous, no one can modify rules |
| Incentive Model | Incentives obtainable | Incentives require responsibility/cost, avoiding pure exploitation |
| Incentive Design | Human-designed incentives | Incentives set by code, irreversible and unchangeable |
| Protocol Lifespan | Dependent on development team | Self-running, continuous evolution, no human intervention needed |

**Four Pillars of Web4.0 Core Philosophy:**

1. **Permissionless**
   Once deployed, WA Protocol has no super permissions, no backdoors, and cannot be modified. All mechanisms are encoded in smart contracts. Whether the founders are present or not, the protocol will continue to run according to its set logic.
   "If a system requires human intervention to maintain, it is destined not to last."

2. **Autonomous**
   All incentives, propagation, consumption, and distribution are automatically completed through on-chain rules. WA rejects post-launch manual airdrops, off-chain configurations, or "team decides whether to issue rewards" and other centralized behaviors. The propagation system, power engine, token governance, and maintenance fee distribution — all governed by on-chain code.

3. **Co-Built**
   Every user is not just a user, but a collaborator. WA is not a project maintained by officials, but an open system where users can directly build "their own protocol ecosystem."
   • Have ideas → Governance proposals
   • Have resources → Launch sub-protocols
   • Have community → Build MiniApps
   • Have products → Connect to power engine
   WA is a "protocol aggregate" that evolves spontaneously by users.

4. **Symbiotic**
   WA builds a positive ecological cycle system:
   • Output (WANT) must be accompanied by maintenance costs (consumption)
   • Propagation (scrolls) must occur compliantly within rules
   • Incentives (invitation rewards) must come from real circulation
   No tree without roots, no unlimited issuance.

**Core Mission of WA Protocol:**

WA Protocol is not an "application," but a unified entity of the following three:
• A fully on-chain autonomous operating system — each functional module is composable, nestable, and governable, forming a complete Web4.0 operating environment
• A digital trust space connecting AI and human collaboration — AI drives propagation and risk identification, blockchain ensures rule credibility and operational stability
• An open, low-threshold, customizable private domain ecosystem platform

**WA's Vision: Protocol for the People, System as Law**

We are entering a post-platform era — power does not belong to any company, but to the rule system set by code. Trust does not come from celebrity endorsements, but from verifiable on-chain rules, predictable incentives, and controllable risks.

WA's goal is not to become the next centralized giant, but to become an operating system where everyone can own their digital homeland.

In the future, everyone can own their own:
• Wallet account
• MiniApp protocol
• DAO community
• Customized incentive model
• Autonomous economic circle

In WA's world, "users" are not traffic, but builders; "products" are not platforms, but protocols.

**Summary**

| Feature | Web4.0 Philosophy Embodiment | WA's Implementation Path |
|------|----------------|-------------|
| Power Decentralization | Immutable contracts, permissionless DApps | Rules deployed are permanent |
| Incentives Bound to Responsibility | Propagation = Contribution + Maintenance cost | WANT maintenance mechanism |
| Dehumanized Operation | Automatic propagation/output/consumption | Scroll system + Power engine |
| Trustless Trust | Verifiable transparent mechanism | All data on-chain and queryable |
| Co-buildable Ecosystem | Open access, incentivized collaboration | MiniApp + Technical funding support |

WA Protocol is the "foundational civilization system" we are building for the future.`},{id:3,title:"WA Positioning: Permissionless Viral Collaboration Protocol",icon:"Network",content:`**What is WA? Not a Platform, Not a Product, But a Protocol**

WA's form of existence is not an App, not a service, and certainly not a centralized enterprise. WA is a **"fully on-chain autonomous protocol system"** with the following three characteristics:

1. **Permissionless**: No super administrator, protocol rules cannot be changed once deployed

2. **Autonomous Growth**: Through a scroll-based automatic propagation system controlled by smart contracts, achieving geometric growth without human intervention

3. **Collaborative Infrastructure**: Any user, team, or community can build "their own ecosystem module" on top of the protocol, realizing "builders as stakeholders"

**Why "Scroll-Based Viral Growth"? We Understand the Nature of Traffic**

Background Reality: Web3 Development Faces Traffic Bottlenecks
• High user acquisition costs, high education barriers
• Ordinary DApps lack network effects, short lifecycle
• Most projects still rely on Web2 advertising channels for traffic

Solution: We design a "protocol-internal self-propagation" mechanism — no external promotion team needed, no central control, users are propagation nodes.

**Scroll Mechanism: Low-Cost Traffic Acquisition On-Chain Solution**

The WA scroll system is essentially a smart contract-driven viral traffic protocol model with the following characteristics:

✅ **Automatic Propagation**
• Users trigger certain operations (such as participation, forwarding, registration, etc.) to automatically generate exclusive invitation codes/links
• Smart contracts track relationship chains, rewards do not depend on backend control

✅ **Rewards Bound to Behavior**
• Rewards must be generated based on "real on-chain actions" (such as deposits, withdrawals, maintenance)
• Prevents exploitation, bots, and automated behavior

✅ **Decentralized Settlement**
• All reward logic executed transparently on-chain
• No platform manual intervention or withdrawal permissions

✅ **Dynamic Balance of Incentives and Risks**
• Viral inviter income linked to invitee's real activity
• System automatically suppresses "idle" network expansion

"The power of propagation has been completely delegated from the operations team to the protocol itself."

**WA's Technical Definition: Flow-Cooperative Protocol**

WA = Flow-Cooperative Protocol

This is not a traditional "DApp," but a dual collaboration protocol of traffic and assets driven by on-chain rules, serving the following roles:

| Function Module | Description |
|---------|------|
| Scroll Rule Engine | Automatically generate viral tasks/relationship binding |
| User Tokenization | Each user is an asset unit, quantifiable contribution |
| Promotion Collaboration | Users are agents, invitations are cooperation |
| Incentive Distribution | All behaviors and benefits automatically executed |
| Private Domain Authorization | Can access others' modules, reuse traffic propagation capabilities |

**"Traffic-Collaboration-Value" Ternary Closed-Loop Model**

1. **Traffic Propagation (Flow)**
   • Guide new users into the system
   • Intelligently generate exclusive propagation codes
   • Rewards determined by behavior, not favors

2. **Collaborative Construction (Collaborate)**
   • Those with private domains and teams can reuse the protocol
   • Community/content/tool teams build MiniApps or DApps

3. **Value Precipitation (Value)**
   • WANT token as the protocol's main asset for fuel payment, governance, participation, etc.
   • Scrolls are not the endpoint, but the engine guiding value into the system

**Case Scenarios: How WA Scroll Protocol is Used for Traffic Acquisition?**

| Application Scenario | Scroll Execution Effect |
|---------|------------|
| Community Promotion | Automatically generate exclusive invitation codes, on-chain rewards |
| Content Distribution | Content viewing/forwarding with invitation codes, on-chain behavior confirmation |
| Project Financing | Investors invite new users to participate, WANT rewards according to rules |
| Event Participation | Each participation behavior can trigger propagation code generation |
| Education & Training | Students completing course tasks receive "learning propagation rewards" |

The above functions do not rely on backend construction, automatically generated and executed by protocol smart contracts.

**Essential Difference Between WA and Existing Web3 Projects**

| Comparison Project Type | Control | Propagation Method | Risk Audit | User Positioning |
|------------|--------|---------|---------|---------|
| Web3 DApp | Team controlled | Community/airdrop | Weak | Users |
| Web3 Platform | Centralized | Content/ad-driven | Medium | Consumers |
| WA Protocol | No center | Automatic propagation | AI+algorithm audit | Builders + Partners |

WA = Autonomous Viral Protocol + Multi-party Collaboration Base + Permissionless Execution Model

**Summary: WA's Positioning is a "Protocol-Form Traffic Operating System"**

• It's not a tool, but a「Viral Protocol」
• It's not a platform, but a「Collaborative Infrastructure」
• It's not a project, but a「Dehumanized Growth Engine」

WA Protocol is the first Web4.0-level traffic protocol with "self-propagation, self-execution, self-constraint" capabilities.`},{id:4,title:"Technical Architecture: Web4.0 On-Chain Operating System",icon:"Code",content:`**From "DApp" to "On-chain OS": A Paradigm Shift**

Most Web3 applications are still "de-shelled versions" of centralized logic:
• Backend stores on-chain data
• Frontend calls on-chain contracts
• Control and operations remain in the hands of development teams

WA is different — from the first line of code, it is a "protocol-native entity" on-chain, aiming to build a dehumanized execution system like an operating system.

WA is not "a product," but "a set of composable execution protocols," where each protocol module can run, be combined, audited, and cannot be changed.

**Five Major Modules of WA Operating System:**

**1. Minimal Permission Kernel (No Admin Layer)**
• All core modules permanently lose control after deployment, no upgrade entry
• No team address, no pause contract, no reset permissions
• Founders cannot "withdraw and modify" or "intervene in assets"

**2. Automatic Viral Engine (Scroll Engine)**
• "Viral behavior recorder" based on invitation behavior on-chain
• Does not rely on central servers
• All invitations/relationships/incentives automatically recorded and processed by contracts

**3. Power Engine System (Power Engine Layer)**
• Similar to "on-chain mining" module
• Users lock WANT, running time generates output, output rules fixed
• Maintenance required every 72 hours, constituting real "operating costs"
• Supports ecosystem growth, token demand, deflationary mechanism

**4. Token Mechanism System (WANT & XANT)**
• WANT as core ecosystem value circulation token
• XANT as activation credential required for engines (burn-type starter)
• All circulation logic executed on-chain (withdrawal = circulation)

**5. Composable MiniApp System (Private Domain Ecosystem Module)**
• Provides on-chain running space for community developers (like "plugins")
• Can independently deploy running logic, call basic protocol engines
• Forms diverse ecosystem collaboration

MiniApp = Builder's "Private Domain Digital Sovereignty Space"

**Three Key Attributes of "Self-Running System"**

As an on-chain operating system, WA must achieve the following three capabilities:

| Capability | Description | Technical Implementation |
|------|------|---------|
| 1. Self-Running | Continuous execution without human intervention | No super administrator, fixed contracts |
| 2. Self-Driven | Every behavior guided by incentive mechanisms | Punishment + rewards automatically executed by contracts |
| 3. Self-Auditing | All behaviors verifiable and traceable | Full process on-chain public, AI audit assistance |

**Module Description**

| Module | Function Description | Features |
|------|---------|------|
| Minimal Permission Contract | System core contracts cannot be changed | On-chain transparent, zero-trust assumption |
| Automatic Viral Engine | Implement invitation viral automatic tracking and incentives | Full contract control |
| Power Engine System | Only mechanism for WANT output | Regular maintenance + consumption + dividends |
| MiniApp Ecosystem | Private domain function module combination use | Decentralized access |
| Token Economy Module | Manage incentives and governance value flow | Dual-token synergistic deflationary governance |

**Security Design: How to Achieve Autonomy Without Losing Control?**

WA introduces three layers of defense in structural design:

1. **Deploy and Lock (Immutable)**: Contracts cannot be upgraded after deployment, avoiding "backdoor extraction"

2. **Incentives Bound to Responsibility (Incentive + Cost)**: Every output must bear real consumption costs, preventing airdrop farming and exploitation

3. **AI Monitoring Behavior Graph (On-chain AI Watcher)**: Future introduction of on-chain behavior models to identify abnormal addresses, viral risks, etc.

**Protocol Developer Mode: Everything is Composable**

WA architecture allows builders to perform the following actions with extremely low barriers:

| Building Method | Example |
|---------|------|
| Reuse Scroll Engine | Create your own invitation mechanism DApp |
| Nest Power Engine | Combine content/activities + power rewards |
| Build Community Protocol | MiniApp + private domain asset tools |
| Create Governance Module | Custom DAO/voting sub-protocol |
| Establish New Incentive Rules | Token + Task + Reward protocol combination |

WA is essentially a modular Web4.0 Lego system, where everyone can "weave" their own economic space on top of it.

**Summary**

| Feature | WA Architecture Embodiment |
|------|-----------|
| Autonomous | Permissionless, contract locked, non-upgradeable |
| Automatic | Behavior automatically tracked, rewards/punishments automatically settled |
| Secure | All data on-chain queryable, auditable, accountable |
| Scalable | MiniApp modules support unlimited private domain ecosystem access |
| Collaborative | Multi-party teams/communities can build new systems based on same protocol |

WA Protocol is an "on-chain operating system" that requires no control, no authorization, and no servers, providing truly meaningful operational infrastructure for Web4.0.`},{id:5,title:"Core Mechanism Design: From Viral Growth to Autonomy",icon:"Settings",content:`**From User Viral Growth to Value Output to System Self-Stabilization — A Completely Closed-Loop Operating Model**

The greatest feature of WA Protocol is not a single "innovative mechanism," but the construction of a complete self-running closed loop of automatic growth—value generation—system regulation:

Viral growth ≠ airdrop growth, but system activation bound to costs
Output ≠ inflationary release, but on-chain economy with maintenance costs
Consumption ≠ passive burning, but designed as "survival threshold" operational guarantee

**WA Ecosystem Closed-Loop Model: Triple Logic**

**1. User Participation Logic: Viral Traffic + Behavior Binding**
• Scroll mechanism drives user invitations
• All behaviors recorded on-chain, invitation rewards linked to real behavior
• No "exploitation," all incentives automatically distributed based on on-chain data

**2. Incentive Generation Logic: Power Engine Determines Output**
• Users activate engines with WANT (ignited by XANT)
• Engines produce WANT periodically during operation
• Maintenance required every 72 hours, failure stops production
• Higher-tier engines yield higher returns, but with higher barriers and maintenance costs

**3. Economic Self-Stabilization Logic: Incentives Bound to Costs + System Deflation**
• Each engine maintenance consumes 1% of WANT, entering burn or dividend pool
• Engine upgrades, withdrawals, fees all involve fuel consumption
• WANT total supply enters continuous deflationary trajectory

**Power Engine Mechanism: WA's Output and Consumption Heart**

WA has no "airdrops." All WANT circulation must be produced through the "Power Engine." No participation, no maintenance, no output.

Engine Structure Example (Core Table):

| Engine Level | Threshold (WANT) | Cycle (Days) | Total Output (WANT) | Net Profit | Monthly ROI | Capacity Limit |
|---------|-----------|---------|-----------|--------|-----------|---------|
| T10     | 100       | 30      | 130       | 30     | 30%       | 3 units |
| T30     | 1,000     | 40      | 1,500     | 500    | 37.5%     | 2 units |
| T70     | 100,000   | 90      | 200,000   | 100,000| 33.3%     | 1 unit |

Notes:
• All parameters written into smart contracts, users cannot modify
• Engines cannot be stopped once started, only maintained
• Maintenance interval is 72 hours, failure will pause output

**Maintenance Mechanism: System's "Fuel Threshold"**

Each engine maintenance requires burning 1% of its position's WANT as "fuel":
• 50% enters black hole address (burn)
• 25% enters global dividend pool
• 25% enters protocol governance reserve (risk control + support)

Maintenance = economic cost of maintaining system operation. If a user is unwilling to bear consumption, they cannot receive incentives.

**XANT Ignition Mechanism: Everything Starts from "Igniting the Engine"**

Users cannot directly start power engines, must use "XANT" to complete ignition, representing their "initial cost investment" in the system.

Features:
• XANT = activation license (each engine level requires fixed XANT amount)
• Use = burn, permanently exits circulation
• Market initially only released by official in stages, gradually deflationary

This mechanism binds system growth with resource scarcity, preventing disorderly activation: every growth is real investment; every output has real cost behind it.

**Protocol Governance and Sustainable Design**

WA designed an incentive-cost-incentive ecological cycle:
1. Users participate to gain benefits

2. But must continuously maintain for engines to produce

3. All maintenance actions = consume tokens = drive deflation + incentivize others (dividends)

This mechanism ensures:
• Cannot farm airdrops
• No need for manual judgment of "qualified users"
• All participants must make real contributions to the system

**Incentive Rules = Natural Selection Algorithm**

WA designs the incentive rules themselves as a "survival incentive function":
• You can only get output through continuous participation
• No maintenance means losing eligibility
• Want to upgrade means bearing higher costs
• Higher incentives, stricter mechanisms

This allows the system to automatically filter "speculative users" and retain "long-term contributors."

**Summary: WA is Not "Issue Tokens + Acquire Users," But an Economic Civilization Protocol of "Output + Maintenance"**

| Link | System Design |
|------|---------|
| User Traffic | Scroll viral + automatic invitation mechanism |
| Incentive Output | Power engine produces WANT |
| Incentive Threshold | Requires XANT ignition + WANT maintenance |
| System Balance | Fuel burn + deflationary mechanism |
| Reward Regulation | Dividend pool + fee redistribution |
| Sustainability | All participation requires bearing costs (non-zero cost) |

WA's mechanism makes every incentive accompanied by cost, every output bears responsibility — truly achieving "economic incentive × responsibility binding × autonomous execution" on-chain ecosystem.`},{id:6,title:"Dual-Token Economic System: Symbiotic Design of WANT and XANT",icon:"Gem",content:`**Why Adopt a Dual-Token Model?**

In traditional Web3, "single-token mechanisms" often lead to the following three major problems:

| Problem | Consequence |
|------|------|
| No activation threshold for tokens | Users can acquire without cost, easily exploited, idle spinning |
| Excessive inflation in incentive mechanisms | Unlimited issuance leads to token value collapse |
| Lack of continuous consumption design | Users sell immediately after output, system cannot close loop |

For this reason, WA designed a dual-token synergistic system, respectively bearing two core roles of activation cost and value carrying:

| Token | Functional Positioning | Features |
|------|---------|------|
| XANT | Activation Credential | Ignition-only, staged release, exits circulation after burning |
| WANT | System Main Token | Core asset, output fuel, value anchor, governance credential |

**XANT: Ecosystem Igniter (Execution Fuel)**

XANT is the "ignition resource" necessary for system startup:

Core Mechanism:
• Users cannot directly acquire power engines, must first hold and consume XANT
• Each engine activation automatically burns corresponding amount of XANT
• System initially only releases XANT by foundation in stages, limited total supply, gradually scarce
• Does not have output attributes, only used for contract activation, non-circulating, non-tradable

XANT has no "secondary market value," its entire value is embodied in "system activation rights."

Ignition Process:
User holds XANT → Consumes XANT → Activates power engine → Begins WANT output cycle

**WANT: Ecosystem Main Token (Value Anchor)**

WANT is the only core token in WA protocol with multiple roles of "payment, incentive, governance, consumption."

Source:
• Produced through "Power Engine" (requires XANT activation consumption)
• No pre-mining, no central release, all produced by user participation

Consumption Scenarios:

| Scenario | WANT Usage |
|------|---------|
| Power Engine Maintenance | Consumes 1% of holdings every 72h, partially burned, partially enters reward pool |
| DApp Function Payment | Used as service fee, access credential in MiniApp ecosystem |
| Withdrawal Fee | To-Wallet behavior requires burning certain proportion of WANT |
| Community Governance | Voting, proposals require locking WANT |
| Co-branded Card/Payment | Cross-border payment/exchange also requires consuming WANT |

WANT = Usage Rights + Maintenance Rights + Governance Rights + On-chain Activity Fuel

**WANT's Deflationary Mechanism: System Self-Balancing Design**

WA does not encourage unlimited growth, but suppresses disorderly expansion through designed "burning mechanism":

Three Rings of Deflationary Mechanism:
1. **Power Maintenance Burn**: Each engine maintenance automatically burns 1% of WANT

2. **Fee Burn**: Users burn partial fees when withdrawing, trading

3. **Black Hole Address Collection**: All burns on-chain queryable, irreversible, transparent operation

Distribution Mechanism:
Each WANT maintenance fee or transaction fee collected by system is distributed according to the following proportions:

| Flow Direction | Proportion |
|------|------|
| Black Hole Burn | 25% |
| Global Dividend Pool | 50% |
| Governance Fund | 25% |

**Synergistic Relationship Between WANT and XANT**

| Feature | XANT | WANT |
|------|------|------|
| Function | Ignition Credential | Ecosystem Asset |
| Acquisition Method | Initial release/task rewards | Power output |
| Deflationary Method | Burned upon each activation | Maintenance/fee burning |
| Tradable | No | Yes |
| Produces Output | No output | Continuous output |
| Participates in Governance | No | Yes |

**Dual-Token Mechanism Closed-Loop Structure:**

XANT Ignition → Activates Power Engine → Produces WANT → Participates in Ecosystem/Maintenance Consumption

**Economic Regulation Mechanism: Dynamic Balance, Prevent Bubbles**

WA protocol introduces dynamic behavior regulation strategies through smart contracts:
• If market withdrawals exceed maintenance/burning, system automatically increases maintenance costs
• If WANT short-term price fluctuates drastically, protocol will increase dividend proportion, stimulate locking
• If XANT release stage too fast, protocol can pause ignition entry, delay new additions

All rules deployed on-chain, community can propose adjustments, but no manual intervention permissions.

**Token Issuance Model**

| Token | Total Supply | Distribution Method |
|------|------|---------|
| XANT | Limited (e.g. 1 billion) | Released in stages + task incentives, burned upon use |
| WANT | No cap | 100% produced through power engines, continuous deflation |

No pre-mining, no team reserve, no airdrops.

**Summary: WA's Tokens Are Not Rewards, But "Responsibility Contracts" for Protocol Operation**

| Dimension | XANT | WANT |
|------|------|------|
| Startup Incentive | ✓ | ✓ |
| Output Logic | ✗ | ✓ |
| Consumption Logic | ✓ | ✓ |
| Governance Function | ✗ | ✓ |
| Value Support | Scarce usage scenarios | Multiple ecosystem consumption scenarios |

WA's token economic design core is not speculative circulation, but a chain-like closed loop of protocol activation → user output → system consumption → value precipitation.`},{id:7,title:"Business Model: Revenue System and Incentive Rules",icon:"TrendingUp",content:`**Background: Why Do 90% of Web3 Projects "Cannot Sustain Themselves"?**

Most Web3 projects ultimately fail because:

| Problem | Consequence |
|------|------|
| Rely on token issuance for funding | No real user payment behavior |
| Incentives rely on inflation | What users earn is actually "later entrants taking over" |
| No cash income | Projects always survive on financing "blood transfusion" |
| Reward design detached from real costs | System deflation cannot be maintained, users gradually leave |

WA's philosophy is the opposite: projects cannot survive on financing, but must survive through mechanism "self-generation."

**WA's Three Major Revenue Generation Systems (Real Cash Flow)**

Every cent of WA's "dividends, incentives, buybacks" comes from the following verifiable real income:

**1. Traffic Monetization System (Ad Engine)**
• Built-in advertising task platform (short video viewing, content sharing, etc.)
• Advertisers pay USD advertising fees based on views/interactions
• Users complete tasks to receive rewards
• Revenue enters ecosystem cash pool (USDT)

Chain: User attention → Platform ad clicks → Google Ad/partner placement → Revenue → Dividends/maintenance/buyback

**2. Financial Commission System (Fintech Commission)**
• Cooperate with global leading exchanges (Binance/OKX, etc.) for traffic
• Users register exchanges through WA, platform receives CPA (registration rewards) + fee rebates
• Cooperate with card organizations, users using co-branded cards generate profit sharing

Chain: User conversion → Register exchange → First deposit + trading → Platform receives commission (stablecoin settlement)

**3. Algorithmic Quantitative System (AI Quant Engine)**
• Guide users to entrust funds to quantitative accounts, traded by AI quantitative strategies
• Platform charges management fee (e.g. 2%) and performance share (e.g. 20%)
• All data, drawdown, returns verifiable on-chain or via API

Historical live returns: Monthly ~36%, max drawdown <3% (historical data, not a promise)

**Business Closed-Loop Diagram:**

User behavior → Real revenue engines (ads + finance + quant) → Platform income (USDT) → Distribution:
• Dividend pool: 50%
• WANT buyback: 25%
• Governance fund pool: 25%

**Reward Rule Design: Incentive ≠ Giving Money, But Contribution for Value**

WA's reward system follows these design principles:

| Principle | Description |
|------|------|
| Rewards must come from real behavior | Don't reward registration, reward "behavior" like participation, forwarding, maintenance |
| Incentives bound to continuous contribution | One-time referral ≠ reward, requires downstream continuous activity |
| All rewards distributed on-chain | Does not rely on backend manual, transparent distribution |

**Incentive System Structure (Four Types):**

| Type | Description | Conditions |
|------|------|------|
| 1. Network Unlock Rewards | Receive partial rebates based on invitation viral levels | Locking/activity standards met |
| 2. Peer Rewards | 1% rebate for first-generation same-level users | Only one layer, prevent unlimited viral penetration |
| 3. Expert Level Rewards | After becoming star expert, receive tier differential rewards | Effective direct referrals + team volume requirements |
| 4. Global Fee Dividends | All fees distributed in reverse order by level | Higher expert level, greater weight |

**Star Expert Model Example (Partial):**

| Level | Conditions (Direct referrals + Structure) | Rewards |
|------|-----------------|------|
| One-Star Expert | Refer 5 + team 50K volume | Peer reward 3% + dividend 30% |
| Three-Star Expert | Refer 15 + cultivate 2 two-stars | Peer reward 9% + dividend 20% |
| Six-Star Expert | Refer 30 + cultivate 3 five-stars | Peer reward 15% + dividend 3% |

All incentive structures executed on-chain, cannot be changed.

**Risk Control Mechanisms Ensure Incentive Sustainability:**

1. **Power Binding Mechanism**: Superior power must ≥ subordinate, otherwise cannot receive corresponding rewards ("burn mechanism")

2. **Cap Mechanism**: Daily dynamic rewards cannot exceed 1.5x power

3. **Withdrawal Burn Mechanism**: Withdrawal behavior itself consumes WANT, ensuring incentive = cost

Incentives are just "system redistribution," absolutely not a "money-giving game."

**Buyback and Deflation Mechanism:**

All real cash income (USDT) from platform used for:
• Market buyback WANT
• Automatically burn bought-back WANT
• Supplement dividend pool and incentive support

This means: behind every user's output, there is real cash "reverse supporting."

**Summary: WA Does Not Rely on Financing, But on System Self-Evolution**

| Module | Description |
|------|------|
| Revenue Structure | Ads + Financial commission + AI quant |
| Reward Structure | Behavior-driven + Level incentives + Peer capping |
| Buyback Mechanism | USDT buyback WANT + Black hole burn |
| Dividend Mechanism | Level reverse weighted + Fully on-chain |
| Risk Control Mechanism | Power binding + Production limit + Dynamic balance |

WA uses a complete set of mechanisms to achieve:
• Growable (user viral)
• Distributable (incentive rules)
• Self-generating (cash flow)
• Sustainable (risk control deflation)`},{id:8,title:"Risk Control System and Sustainability Design",icon:"Shield",content:`**Why Must Risk Control Be "Protocol-Native"?**

Traditional Web2 platform risk control relies on:
• Manual review
• Data center monitoring
• Central pause mechanisms

But in Web3, once on-chain it's irreversible and unchangeable, so all risk control must:
1. Be written into smart contracts
2. Automatically trigger execution
3. Not rely on any "backend intervention"

WA Protocol further proposes: **Risk control is the protocol structure itself, risk identification and economic logic are inseparable**.

**Five Core Modules of WA Risk Control System:**

**1. Automatic Behavior Monitoring System (Behavior Audit)**

Goal: Identify non-human behavior, batch registration, arbitrage behavior

Mechanism:
• Monitor user behavior sequences (frequency, path, timestamp)
• Automatically flag behaviors matching "bot patterns"
• Partial incentives delayed release, cooperate with AI model secondary judgment
• Rules publicly on-chain
• Not a blacklist mechanism, does not affect user asset security

**2. Reward Availability Limit System (Cap Control)**

Goal: Avoid unlimited viral, multi-account incentive extraction

Mechanism:
• All users' daily maximum returns limited by power scale (default cap: 1.5x/day)
• Superiors with "insufficient power" lose corresponding rebate eligibility (burn mechanism)
• Same-level viral rewards only support one layer, cannot penetrate
• Avoid "labor-type organization" arbitrage
• Rewards strictly linked to real investment

**3. Incentive Dynamic Balance System (Dynamic Incentive Adjuster)**

Goal: Address incentive overdraft risk caused by rapid system growth

Mechanism:
• Set network-wide daily total incentive cap (e.g. 1% network-wide release)
• If actual participation too fast, contract automatically delays release cycle
• Excess portion enters "slow-release pool," released in batches, smoothing rhythm
• Prevent short-term surge causing "inflation illusion"
• Effectively regulate viral rhythm

**4. Withdrawal Penalty and Black Hole Burn Mechanism (Exit Cost Design)**

Goal: Users cannot only output without bearing operating costs

Mechanism:
• Each withdrawal burns 2%‒5% of WANT
• Portion of WANT enters black hole address permanently burned
• System forms "higher liquidity, stronger deflation" reverse feedback mechanism
• Output behavior bound to real costs
• Withdrawal itself becomes part of system deflation

**5. Smart Audit and AI Monitoring Module (AI Sentinel)**

Goal: Use AI algorithms to identify system-level risks and attack models

• Track network-wide address behavior graphs
• Introduce time-relationship-frequency three-dimensional graph modeling
• Use AI to identify zombie networks, circular withdrawals, DID串联 arbitrage, etc.
• AI model continuously learns, gradually optimizes intelligent recognition engine through DAO governance
• Cannot directly freeze user assets
• Can flag "risk addresses" for delayed incentives

**Risk Control = Algorithm + Behavior + Incentive Trinity**

| Module | Risk Control Method | Trigger Method | Features |
|------|---------|---------|------|
| Behavior Risk Control | Frequency analysis / Graph model | Automatic detection | Determine "bot-like" behavior |
| Incentive Risk Control | Return cap / Burn mechanism | Linked to power | Avoid multi-level arbitrage |
| Token Risk Control | Withdrawal burn / Incentive slow-release | Economic behavior driven | More withdrawal, more scarcity |

**Sustainability Design Logic:**

WA protocol proposes "Three Principles of Economic Sustainability":

**Principle 1: Every output in system must come from real fuel**
• No "costless rewards"
• All output requires XANT ignition + WANT maintenance + behavior achievement

**Principle 2: Every withdrawal in system has deflationary impact**
• WANT withdrawal burns partial assets
• Prevent "output→withdrawal→price collapse" infinite loop

**Principle 3: All structures have lifecycle and "responsibility binding"**
• Engines need maintenance, experts need stable teams, every reward has cap
• Participation means bearing responsibility, cannot be once-and-for-all

**Summary: WA Risk Control Mechanism is Not "Banning," But "System Self-Protection Logic"**

| Risk Control Dimension | Specific Methods | Core Goal |
|---------|---------|---------|
| Behavior Recognition | AI audit / Graph tracking | Intercept non-real participation behavior |
| Reward Control | Incentive limits / Power binding | Prevent unlimited viral collapse |
| Token Control | Burn mechanism / Withdrawal penalty | Control circulation, prevent inflation |
| Incentive Smoothing | Slow-release mechanism | Address short-term explosive growth |
| System Security | AI Sentinel monitoring | Build ecosystem-level immune system |

WA does not rely on "project party review," but achieves through a self-consistent system:
• Risk control = Protocol
• Audit = AI
• Punishment = Deflation

It is a new "rule self-executing operating system."`},{id:9,title:"Five Ecosystem Structures: Social, Media, Asset Management, Trading, Payment",icon:"Network",content:`**Philosophical Premise: From "Super Platform" to "Individual Universe"**

In Web2, users are the platform's "product." Web4.0's mission is:
• Every individual is a sovereign node
• Every community is an independent civilization
• Platform becomes "soil," not "rule"

WA protocol is designed for this: it's not "operating a product," but supporting a generation of developers' digital civilization toolkit.

**Five Major Ecosystem Expansion Areas:**

**1. Social Collaboration Protocol (Social Layer)**

Vision: Individuals build their own community sovereignty space

• Users can open private domain communities, deploy DApps or MiniApps
• Have independent rules, tokens, identity systems
• Like "on-chain tribes," but governed by users themselves

Examples:
• Community incentive systems (invitation-only members, contribution scoring)
• Tweet tipping/like dividend systems
• Private group DAO (automatic dividends, proposals)

**2. Business Incubation Protocol (Biz Launch Layer)**

Vision: Everyone can start companies, launch projects, make products on-chain

• Startup teams can permissionlessly deploy product MVPs
• Call WA viral/power/incentive systems
• Use WANT as business token, bind governance and revenue dividends

Examples:
• DApp incubation platform: Build mini-programs + automatic incentive systems
• Task economy system: Complete tasks to receive token rewards
• Service payment channel: Use WANT to complete payment closed loop

**3. Education Co-building Protocol (Edu-CoBuild Layer)**

Vision: Open education network, everyone can teach, everyone can learn, everyone benefits

• Builders can open online courses, skill training camps
• Students participate through interaction unlocking, quizzes, tasks
• All behaviors recorded on-chain, generate transferable learning proof NFTs

Examples:
• "AI Prompt Training Camp" incentive mechanism
• "Web3 Beginner Learning Path" bound to viral propagation
• Knowledge NFT: Automatically generated certification after completing series learning

**4. Financial Collaboration Protocol (DeFinity Layer)**

Vision: Reconstruct trustworthy "non-Ponzi financial space"

WA does not directly embed DeFi, but provides underlying mechanisms:
• All financial products must access algorithmic risk control layer
• No team, no airdrops, no secondary token asset model
• All returns automatically settled, smart audit tracking

Potential financial ecosystem:
• Decentralized quantitative fund (on-chain historical records + authorized custody)
• Automatic tax/dividend distribution system
• On-chain insurance DAO (community voting compensation)

**5. Public Governance Protocol (WA-Gov Layer)**

Vision: Establish first full-chain autonomous community

• Users can participate in proposals/voting through WANT
• All parameter adjustments (output ratio, fee distribution, etc.) adjusted through on-chain consensus
• Governance process + execution both driven by on-chain contracts, no "governance backdoor"

Key governance mechanism points:
• Weight from user locking duration × power level × community rating
• Voting records traceable, cannot be tampered
• All DAO contracts are open-source transparent templates

**Private Domain Civilization Model: From "Account" to "Sovereign Node"**

WA proposes an unprecedented perspective:

• Future each user = a "civilization origin point"
• Each DApp = a "micro-nation"
• Each community = a "decentralized tribe"

WA does not operate ecosystem, but supports ecosystem.

**Permission Freedom + Risk Control Nesting = Decentralized But Orderly**

All WA ecosystem expansions must follow one consensus:

✅ Can deploy, but must comply with risk control protocol (such as power binding, audit templates, incentive limits)

System does not make value judgments, does not "approve launch," but all ecosystems must comply with automatic risk control protocols to avoid scams, Ponzi, fraud projects entering ecosystem.

**Summary: WA is Not a Project, But a "Digital Civilization Growth Soil"**

| Dimension | Performance |
|------|------|
| Core Role | Protocol operating kernel (not platform party) |
| User Role | Private domain builders / Community managers |
| Ecosystem Expansion | Permissionless access + Module combination |
| Risk Control Mechanism | Must access on-chain risk control contract layer |
| Business Model | WA does not "control platform," only controls protocol mechanism |

WA is an autonomous Web4.0 native protocol space, supporting tens of thousands of civilization nodes to grow.`},{id:10,title:"Co-building Mechanism: Private Domain Economy Everyone Can Participate In",icon:"Users",content:`**MiniApp = Builder's "Private Domain Digital Sovereignty Space"**

WA protocol allows builders to perform the following actions with extremely low barriers:

| Building Method | Example |
|---------|------|
| Reuse Scroll Engine | Create your own invitation mechanism DApp |
| Nest Power Engine | Combine content/activities + power rewards |
| Build Community Protocol | MiniApp + private domain asset tools |
| Create Governance Module | Custom DAO/voting sub-protocol |
| Establish New Incentive Rules | Token + Task + Reward protocol combination |

**Private Domain Civilization Model: From "Account" to "Sovereign Node"**

WA proposes an unprecedented perspective:

• Future each user = a "civilization origin point"
• Each DApp = a "micro-nation"
• Each community = a "decentralized tribe"

WA does not operate ecosystem, but supports ecosystem.

**Permission Freedom + Risk Control Nesting = Decentralized But Orderly**

All WA ecosystem expansions must follow one consensus:

✅ Can deploy, but must comply with risk control protocol (such as power binding, audit templates, incentive limits)

System does not make value judgments, does not "approve launch," but all ecosystems must comply with automatic risk control protocols to avoid scams, Ponzi, fraud projects entering ecosystem.

**Myriad Civilization Ecosystem Diagram:**

WA Operating System (On-chain Protocol)
↓
Social Protocol | Business Protocol | Education Protocol | Financial Protocol | Governance Protocol
↓
Builders, Creators, Community Nodes, Private Domain Communities
↓
Co-build and win-win, self-governance, distributed reproduction`},{id:11,title:"Global Expansion and Localization Strategy",icon:"Map",content:`**Global Deployment Strategy**

WA Protocol's goal is to become global Web4.0 infrastructure, supporting multi-language, multi-region, multi-cultural ecosystem development.

**Regional Strategic Focus:**

**Asian Market**
• China/Southeast Asia: Focus on promoting viral social model
• Japan/Korea: Emphasize technological innovation and community governance
• India: Focus on education training and skill monetization

**European and American Markets**
• North America: Focus on DeFi applications and institutional cooperation
• Europe: Emphasize compliance and data privacy protection

**Middle East/Africa Markets**
• Mobile-first strategy
• Cross-border payment and remittance scenarios
• Inclusive finance applications

**South American Market**
• Anti-inflation demand
• Community economy model
• Localized payment solutions

**Localization Strategy:**

1. **Multi-language Support**
   • 7 major language interfaces (Chinese/English/Japanese/Korean/Thai/Vietnamese/Indonesian)
   • Localized documentation and tutorials
   • Multi-language community support

2. **Compliance Adaptation**
   • Research on regional laws and regulations
   • Flexible KYC/AML configuration
   • Tax compliance guidance

3. **Local Partners**
   • Regional exchange cooperation
   • Local payment channel access
   • Community KOLs and opinion leaders

4. **Cultural Adaptation**
   • Understand local user habits
   • Adapt to local social platforms
   • Respect cultural differences

**Global Expansion Roadmap:**

**Phase 1 (2024 Q1-Q2)**
• Core markets: China, Southeast Asia
• Establish initial community (100K+ users)
• Complete basic protocol deployment

**Phase 2 (2024 Q3-Q4)**
• Expansion markets: Japan-Korea, Europe-America
• User scale reaches 500K+
• Multiple MiniApp ecosystems launch

**Phase 3 (2025)**
• Global deployment complete
• User scale exceeds 1M
• Mature multi-regional ecosystem`},{id:12,title:"Future Vision and Roadmap",icon:"Target",content:`**Source of Problem: Web Internet's Civilization Dilemma**

From Web1.0 to now, the internet has experienced four generations of evolution:

| Era | Keywords | Problems |
|------|--------|------|
| Web1.0 | Static pages, information display | No interaction, one-way publishing |
| Web2.0 | Social platforms, UGC content | Data monopolized, algorithm black box, users become products |
| Web3.0 | Blockchain, decentralization | Technology closed, frequent bubbles, lack of public nature |
| Web4.0 | AI + DAO + Protocol | Systematic cognitive framework not yet formed |

Root problem: Every internet "upgrade" cannot completely escape the old template of "centralization + power abuse." What we need is not an "improved platform," but a "brand new civilization protocol."

**WA's Philosophical Position: Protocol is Order, Algorithm is Consensus**

WA is not a product, but a civilization origin structure. Its basic judgment is:

A truly free world relies not on "organizer management," but on "algorithmic automatic coordination."
Truly fair collaboration relies not on "sovereign will," but on "behavior-driven incentive contracts."

WA does not govern the world, but designs a governable digital reality.

**WA Protocol's Prototype Value: 10-Year Scale Systematic Cognition**

| System Level | WA's Prototype Significance |
|---------|------------|
| Technical Layer | Web4.0 permissionless operating system |
| Protocol Layer | Algorithmic autonomy × Collaboration protocol × Multi-civilization coexistence |
| Social Layer | Experimental sandbox for new social organizational architecture |
| Economic Layer | Incentive engine for non-centralized circulation model |
| Philosophical Layer | Attempt to redefine trust, power, and order |

WA is a "native growth structure" not a "management platform."

**Future Evolution Roadmap (3 Stages)**

**Stage 1 (1‒2 years): Protocol Launch + Collaboration Model Verification**

• Complete basic protocol launch (engine system, viral model, dividend structure)
• Establish multiple private domain communities (hundred to thousand scale)
• Realize earliest usable DApp ecosystem
• Begin collecting on-chain behavior data, training AI audit model

Goal: Verify whether incentive-governance-risk control triple structure is "closed-loop"

**Stage 2 (3‒5 years): Multi-ecosystem Self-growth + Protocol Governance Autonomization**

• Over 100 ecosystem projects/DAOs deployed on WA protocol
• Users shift from "using platform" to "building protocol"
• Protocol parameters all achieve on-chain governance
• AI participates in partial content review/parameter adjustment suggestions

Goal: Evolve system update mechanism without human intervention

**Stage 3 (5‒10 years): De-platformization "World Netizen Republic" Prototype**

• Users own permissionless identity (DID + digital signature)
• All social/trading/learning/work behaviors on-chain confirmed
• Form multiple "on-chain tribes," each community has self-organization rights
• Protocol becomes sovereign digital collaboration space, no longer relies on specific team

Goal: Protocol self-evolution, user self-governance, build "individual sovereignty digital civilization"

**WA's Bottom-line Promise: Never Become "Platform Alienator"**

WA promises:
• Does not hold "backdoor keys"
• Does not custody any user assets
• Does not intervene in incentive distribution, activation order, withdrawal behavior
• Does not make "super DApp," only serves as protocol toolkit

WA will evolve with users, gradually retreat, ultimately run by protocol itself.

**WA's Future is Not "Better Project," But "System That Needs Team Less"**

Web4.0 civilization form needs:

| Feature | How WA Design Supports |
|------|-------------|
| Automatic Distribution | All returns divided by algorithm, no human intervention |
| Automatic Regulation | AI + graph risk control mechanism, proactively identify risks |
| Automatic Evolution | All parameters on-chain governance, community can upgrade protocol version |
| Automatic Viral | Scroll-type collaboration protocol, network-wide behavior self-diffusion |

In the future, people no longer "go online to a project," but "access a civilization protocol."

**Ultimate Goal: Become World's First "Permissionless Digital Civilization Origin Protocol"**

WA is not a digital product, but:
• A protocol starting from behavior
• An order starting from incentives
• A civilization starting from collaboration
• A future world starting from code

**Conclusion: A Choice Larger Than "Platform" But More Real Than "Utopia"**

What WA wants to build is not fictional fantasy, but:
• A system that actually runs, incentivizes real users, has self-regulation capability
• An underlying protocol tolerant enough, supporting differences, allowing self-organization and community sovereignty
• A civilization soil that can be co-built, win-win, and co-guarded

And you are no longer a user.
You are a co-builder, a governor, an original resident of this digital new civilization.

**WA is not a platform. It is a world.**`}]},id:{sections:[{id:1,title:"Pendahuluan — Dari Web1.0 Menuju Web4.0",icon:"Globe",content:`"Setiap lompatan internet adalah rekonstruksi paradigma peradaban."

Sejak awal kemunculannya, internet telah mengalami beberapa transformasi revolusioner. Setiap evolusi bukan hanya iterasi teknologi, tetapi perubahan mendasar dalam hubungan produksi dan nilai:

**Web1.0: Era Hanya-Baca (Read Only)**
• Pengguna adalah "pengunjung"
• Informasi dikontrol oleh segelintir pemilik situs web
• Jaringan adalah sistem tampilan konten statis
• Contoh representatif: #Situs portal#, #BBS#, #Blog awal#

**Web2.0: Era Partisipasi Pengguna (Read + Write)**
• Konten Buatan Pengguna (UGC) bangkit, jejaring sosial mendominasi
• Platform menjadi pusat agregasi informasi dan data
• Namun data dan nilai pengguna milik platform
• Contoh representatif: #Facebook#, #Weibo#, #YouTube#

**Web3.0: Kebangkitan Kepemilikan Terdesentralisasi (Own)**
• Blockchain memperkenalkan kedaulatan aset, kedaulatan identitas, tata kelola DAO
• Pengguna memiliki kunci pribadi, aset, hak partisipasi
• Namun protokol masih sering bergantung pada pemeliharaan tim pusat, inflasi sistem insentif parah, sulit berkelanjutan

**Web4.0: Sistem Kelangsungan Hidup (Survive) — Bukan Hanya Memiliki, Tapi "Tetap Hidup"**

Web4.0 bukan hanya tentang "memiliki", tetapi "mampu berjalan dan terus berjalan tanpa campur tangan manusia".

Ini adalah:
• Sistem protokol otonom yang sepenuhnya tanpa izin, tanpa backdoor, dapat diverifikasi
• Struktur operasi otomatis yang didorong bersama oleh kontrak pintar dan AI
• "Bentuk kehidupan on-chain" di mana insentif terikat dengan tanggung jawab, beroperasi tanpa tata kelola manusia

Di era Web4.0, kita tidak lagi membangun "produk", tetapi membangun sistem kehidupan dasar peradaban digital.

**Tren Masa Depan: AI × Blockchain × Protokol Otonom = Arsitektur Peradaban Internet Baru**
• Kecerdasan Buatan: Membangun sistem kolaborasi otonom dan mekanisme kontrol risiko cerdas
• Blockchain: Membangun eksekutor aturan tanpa kepercayaan
• Ekonomi Token: Membangun sistem insentif dan tanggung jawab dinamis
• Protokol DApp: Membangun sistem ekosistem viral yang sepenuhnya otonom dan beroperasi otomatis

WA Protocol bukan peluncuran proyek biasa, tetapi rekonstruksi internet untuk dekade mendatang: kami tidak membangun produk, tetapi menempa sistem digital "kelangsungan hidup".

**Mengapa sekarang adalah momen kritis untuk Web4.0?**
• Biaya lalu lintas global melonjak, efisiensi viral menurun
• Tingkat kematian proyek Web3 tinggi, kurang arus kas nyata
• Popularisasi AI membawa revolusi dalam data, daya komputasi, dan konten
• Permintaan sosial untuk "ruang digital yang dapat dipercaya" meningkat tajam

Kita harus, pada titik ini, menciptakan paradigma baru: sistem protokol yang dapat berjalan jangka panjang tanpa campur tangan manusia, dengan pembangkitan darah internal dan aturan yang jelas.

WA Protocol, lahir pada waktu yang tepat.`},{id:2,title:"Fondasi Filosofis Web4.0 dan Misi WA",icon:"Brain",content:`**Rekonstruksi Paradigma: Dari "Produk Internet" Menuju "Sistem Kelangsungan Hidup Digital"**

Logika inti dunia Web tradisional adalah struktur biner "pengguna-platform": platform mengontrol data, mengalokasikan aturan, menentukan insentif. Di Web3, meskipun kedaulatan aset mencapai "desentralisasi", sistem masih bergantung pada pemeliharaan "manusia" — tim, backend, penyesuaian, pembaruan.

Web4.0 lebih lanjut mengusulkan: **Aturan tidak boleh dikontrol oleh manusia; sistem harus memiliki "kemampuan kelangsungan hidup sendiri"**.

Ini adalah paradigma filosofis yang sepenuhnya baru:

| Dimensi Perbandingan | Web3 | Web4.0 |
|---------|------|--------|
| Filosofi Inti | Kepemilikan Aset | Kelangsungan Sistem |
| Pusat Desain | Desain berpusat pada manusia | Desain berpusat pada protokol (dapat terus berjalan tanpa manusia) |
| Metode Tata Kelola | Dapat dikelola komunitas | Sistem otonom, tidak ada yang dapat mengubah aturan |
| Model Insentif | Insentif dapat diperoleh | Insentif memerlukan tanggung jawab/biaya, menghindari eksploitasi murni |
| Desain Insentif | Insentif dirancang manusia | Insentif ditetapkan oleh kode, tidak dapat diubah |
| Umur Protokol | Bergantung pada tim pengembangan | Dapat berjalan sendiri, evolusi berkelanjutan, tanpa campur tangan manusia |

**Empat Pilar Filosofi Inti Web4.0:**

1. **Tanpa Izin (Permissionless)**
   Setelah protokol WA diterapkan, tidak ada izin super, tidak ada backdoor, tidak dapat diubah. Semua mekanisme dikodekan dalam kontrak pintar. Terlepas dari apakah pendiri hadir atau tidak, protokol akan terus berjalan sesuai logika yang ditetapkan.
   "Jika sistem memerlukan campur tangan manusia untuk bertahan, itu ditakdirkan tidak akan bertahan lama."

2. **Otonom (Autonomous)**
   Semua insentif, viral, konsumsi, distribusi diselesaikan secara otomatis melalui aturan on-chain. WA menolak airdrop manual pasca-peluncuran, konfigurasi off-chain, atau perilaku terpusat seperti "tim memutuskan apakah akan memberikan hadiah". Sistem viral, mesin daya, tata kelola token, distribusi biaya pemeliharaan — semuanya diatur oleh kode on-chain.

3. **Ko-Bangun (Co-Built)**
   Setiap pengguna bukan hanya pengguna, tetapi juga kolaborator. WA bukan proyek yang dikelola secara resmi, tetapi sistem terbuka di mana pengguna dapat langsung membangun "ekosistem protokol mereka sendiri".
   • Punya ide → Proposal tata kelola
   • Punya sumber daya → Luncurkan sub-protokol
   • Punya komunitas → Bangun MiniApp
   • Punya produk → Hubungkan ke mesin daya
   WA adalah "agregat protokol" yang berevolusi secara spontan oleh pengguna.

4. **Simbiosis (Symbiotic)**
   WA membangun sistem siklus ekologi positif:
   • Output (WANT) harus disertai biaya pemeliharaan (konsumsi)
   • Viral (scroll) harus terjadi sesuai aturan
   • Insentif (hadiah undangan) harus berasal dari sirkulasi nyata
   Tidak ada pohon tanpa akar, tidak ada penerbitan tanpa batas.

**Misi Inti WA Protocol:**

WA Protocol bukan "aplikasi", tetapi entitas terpadu dari tiga hal berikut:
• Sistem operasi otonom yang sepenuhnya dapat berjalan on-chain — setiap modul fungsional dapat digabungkan, disarangkan, dikelola, membentuk lingkungan operasi Web4.0 yang lengkap
• Ruang kepercayaan digital yang menghubungkan AI dan kolaborasi manusia — AI mendorong viral dan identifikasi risiko, blockchain memastikan kredibilitas aturan dan stabilitas operasional
• Platform ekosistem domain pribadi yang terbuka, ambang rendah, dapat disesuaikan

**Visi WA: Protokol untuk Rakyat, Sistem sebagai Hukum**

Kita memasuki era pasca-platform — kekuasaan bukan milik perusahaan mana pun, tetapi milik sistem aturan yang ditetapkan oleh kode. Kepercayaan tidak berasal dari dukungan selebriti, tetapi dari aturan on-chain yang dapat diverifikasi, insentif yang dapat diprediksi, dan risiko yang dapat dikontrol.

Tujuan WA bukan menjadi raksasa terpusat berikutnya, tetapi menjadi sistem operasi di mana semua orang dapat memiliki rumah digital mereka.

Di masa depan, setiap orang dapat memiliki:
• Akun dompet
• Protokol MiniApp
• Komunitas DAO
• Model insentif yang disesuaikan
• Lingkaran ekonomi otonom

Di dunia WA, "pengguna" bukan lalu lintas, tetapi pembangun; "produk" bukan platform, tetapi protokol.

**Ringkasan**

| Fitur | Perwujudan Filosofi Web4.0 | Jalur Implementasi WA |
|------|----------------|-------------|
| Desentralisasi Kekuasaan | Kontrak tidak dapat diubah, DApp tanpa izin | Aturan yang diterapkan permanen |
| Insentif Terikat Tanggung Jawab | Viral = Kontribusi + Biaya pemeliharaan | Mekanisme pemeliharaan WANT |
| Operasi Tanpa Manusia | Viral/output/konsumsi otomatis | Sistem scroll + Mesin daya |
| Kepercayaan Tanpa Kepercayaan | Mekanisme transparan yang dapat diverifikasi | Semua data dapat diperiksa on-chain |
| Ekosistem Ko-Bangun | Akses terbuka, kolaborasi insentif | MiniApp + Dukungan dana teknis |

WA Protocol adalah "fondasi sistem peradaban" yang kami bangun untuk masa depan.`},{id:3,title:"Posisi WA: Protokol Kolaborasi Viral Tanpa Izin",icon:"Network",content:`**Apa itu WA? Bukan Platform, Bukan Produk, Tapi Protokol**

Bentuk keberadaan WA bukan App, bukan layanan, dan tentu bukan perusahaan terpusat. WA adalah **"sistem protokol otonom yang sepenuhnya on-chain"** dengan tiga karakteristik berikut:

1. **Tanpa Izin (Permissionless)**: Tidak ada super administrator, aturan protokol tidak dapat diubah setelah diterapkan

2. **Pertumbuhan Viral Otonom (Autonomous Growth)**: Melalui sistem propagasi otomatis berbasis scroll yang dikontrol kontrak pintar, mencapai pertumbuhan geometris tanpa campur tangan manusia

3. **Kolaborasi Multi-Pihak (Collaborative Infrastructure)**: Setiap pengguna, tim, komunitas dapat membangun "modul ekosistem mereka sendiri" di atas protokol, mewujudkan "pembangun adalah pemegang saham"

**Mengapa "Viral Berbasis Scroll"? Kami Memahami Esensi Lalu Lintas**

Realitas Latar Belakang: Pengembangan Web3 menghadapi hambatan lalu lintas
• Biaya pertumbuhan pengguna tinggi, ambang pendidikan tinggi
• DApp biasa kurang efek jaringan, siklus hidup pendek
• Sebagian besar proyek masih bergantung pada saluran iklan Web2 untuk lalu lintas

Solusi: Kami merancang mekanisme "viral internal protokol" — tanpa tim promosi eksternal, tanpa kontrol pusat, pengguna adalah node propagasi.

**Mekanisme Scroll: Solusi On-Chain untuk Lalu Lintas Berbiaya Rendah**

Sistem scroll WA pada dasarnya adalah model protokol lalu lintas viral yang didorong kontrak pintar, dengan karakteristik berikut:

✅ **Viral Otomatis**
• Pengguna memicu operasi tertentu (seperti partisipasi, forward, registrasi, dll.) secara otomatis menghasilkan kode/tautan undangan eksklusif
• Kontrak pintar melacak rantai hubungan, hadiah tidak bergantung pada kontrol backend

✅ **Hadiah Terikat Perilaku**
• Hadiah harus didasarkan pada "tindakan on-chain nyata" (seperti deposit, penarikan, pemeliharaan)
• Mencegah eksploitasi, bot registrasi, perilaku bot

✅ **Penyelesaian Terdesentralisasi**
• Semua logika hadiah dieksekusi secara transparan on-chain
• Tidak ada campur tangan manual platform atau hak penarikan

✅ **Keseimbangan Dinamis Insentif dan Risiko**
• Pendapatan pengundang viral terkait dengan aktivitas nyata yang diundang
• Sistem secara otomatis menekan ekspansi jaringan "idle"

"Kekuatan viral sepenuhnya didelegasikan dari tim operasi ke protokol itu sendiri."

**Definisi Teknis WA: Flow-Cooperative Protocol**

WA = Flow-Cooperative Protocol (Protokol Lalu Lintas Kolaboratif)

Ini bukan "DApp" dalam arti tradisional, tetapi protokol kolaborasi ganda lalu lintas dan aset yang didorong oleh aturan on-chain, memainkan peran berikut:

| Modul Fungsional | Deskripsi |
|---------|------|
| Mesin Aturan Scroll | Secara otomatis menghasilkan tugas viral/pengikatan hubungan |
| Tokenisasi Pengguna | Setiap pengguna adalah unit aset, kontribusi dapat dikuantifikasi |
| Kolaborasi Promosi | Pengguna adalah agen, undangan adalah kolaborasi |
| Distribusi Insentif | Semua perilaku dan pendapatan dieksekusi secara otomatis |
| Otorisasi Domain Pribadi | Dapat mengintegrasikan modul orang lain, menggunakan kembali kemampuan viral lalu lintas |

**Model Loop Tertutup Tiga Elemen "Lalu Lintas-Kolaborasi-Nilai"**

1. **Viral Lalu Lintas (Flow)**
   • Memandu pengguna baru masuk ke sistem
   • Secara cerdas menghasilkan kode viral eksklusif
   • Hadiah ditentukan oleh perilaku bukan hubungan

2. **Kolaborasi Konstruksi (Collaborate)**
   • Mereka yang memiliki domain pribadi, tim dapat menggunakan kembali protokol
   • Tim komunitas/konten/alat membangun MiniApp atau DApp

3. **Pengendapan Nilai (Value)**
   • Token WANT sebagai aset protokol utama untuk pembayaran bahan bakar, tata kelola, partisipasi, dll.
   • Scroll bukan titik akhir, tetapi mesin yang memandu nilai masuk ke sistem

**Skenario Kasus: Bagaimana Protokol Scroll WA Digunakan untuk Lalu Lintas?**

| Skenario Aplikasi | Efek Eksekusi Scroll |
|---------|------------|
| Promosi Komunitas | Secara otomatis menghasilkan kode undangan eksklusif, hadiah on-chain |
| Distribusi Konten | Menonton/forward konten dengan kode undangan, konfirmasi perilaku on-chain |
| Pendanaan Proyek | Investor mengundang pengguna baru untuk berpartisipasi, WANT dihargai sesuai aturan |
| Partisipasi Acara | Setiap perilaku partisipasi dapat memicu pembuatan kode viral |
| Pelatihan Pendidikan | Siswa menyelesaikan tugas kursus mendapatkan "hadiah viral pembelajaran" |

Fungsi di atas tidak bergantung pada konstruksi backend, secara otomatis dihasilkan dan dieksekusi oleh kontrak pintar protokol.

**Perbedaan Esensial WA dengan Proyek Web3 yang Ada**

| Jenis Proyek Perbandingan | Kontrol | Metode Viral | Audit Risiko | Posisi Pengguna |
|------------|--------|---------|---------|---------|
| Web3 DApp | Kontrol tim | Komunitas/airdrop | Lemah | Pengguna |
| Platform Web3 | Terpusat | Didorong konten/iklan | Sedang | Konsumen |
| WA Protocol | Tanpa pusat | Viral otomatis | Audit AI+algoritma | Pembangun + Mitra |

WA = Protokol viral otonom + Basis kolaborasi multi-pihak + Model eksekusi tanpa izin

**Ringkasan: Posisi WA adalah "Sistem Operasi Lalu Lintas dalam Bentuk Protokol"**

• Ini bukan alat, tetapi "protokol viral"
• Ini bukan platform, tetapi "infrastruktur kolaborasi"
• Ini bukan proyek, tetapi "mesin pertumbuhan tanpa manusia"

WA Protocol adalah protokol lalu lintas tingkat Web4.0 pertama dengan kemampuan "propagasi sendiri, eksekusi sendiri, pembatasan sendiri".`}]}},Gm=()=>{const g=[{feature:"AI智能分析",description:"基于深度学习的智能数据分析系统，提供实时洞察和预测"},{feature:"数据可视化",description:"直观的图表展示，支持多种数据格式和自定义样式"},{feature:"实时监控",description:"24/7全天候监控系统，及时发现异常并自动报警"},{feature:"云端同步",description:"多设备数据同步，随时随地访问和管理您的数据"}];return l.jsx("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"table-fixed w-full",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[l.jsx("th",{className:"w-1/3 px-6 py-4 text-left font-semibold text-white",children:"功能名称"}),l.jsx("th",{className:"w-2/3 px-6 py-4 text-left font-semibold text-white",children:"功能描述"})]})}),l.jsx("tbody",{children:g.map((S,m)=>l.jsxs("tr",{className:"hover:bg-white/5 transition-colors duration-200 border-b border-white/5 last:border-b-0",children:[l.jsx("td",{className:"px-6 py-4 text-slate-300 align-middle",children:l.jsx("span",{className:"inline-block text-sm leading-normal",children:S.feature})}),l.jsx("td",{className:"px-6 py-4 text-slate-300 align-middle",children:l.jsx("span",{className:"inline-block text-sm leading-normal",children:S.description})})]},m))})]})})})},Xm=[{id:"architecture-diagram",title:"架构总览图（逻辑结构）",keywords:["架构总览图","逻辑结构"],description:"WA Protocol 操作系统架构总览图",component:null},{id:"flow-diagram",title:"流程结构图（逻辑结构）",keywords:["流程结构图","逻辑结构"],description:"WA Protocol 用户参与流程结构图",component:null},{id:"business-loop-diagram",title:"商业闭环总图（逻辑结构）",keywords:["商业闭环总图","逻辑结构"],description:"WA Protocol 商业闭环总图",component:null}],Ym=g=>Xm.find(S=>S.keywords.every(m=>g.includes(m)))||null;class Mn{static components=new Map;static register(S,m){this.components.set(S,m)}static get(S){return this.components.get(S)||null}static getAll(){return new Map(this.components)}}const Aa="chart-registry-updated",Ju={registerComponents(){bt(()=>import("./OptimizedArchitectureImage-DZTSNt9F.js"),[]).then(g=>{Mn.register("architecture-diagram",g.default),window.dispatchEvent(new Event(Aa))}),bt(()=>import("./FlowDiagramImage-BlYVuX93.js"),[]).then(g=>{Mn.register("flow-diagram",g.default),window.dispatchEvent(new Event(Aa))}),bt(()=>import("./BusinessLoopImage-wxlqq21k.js"),[]).then(g=>{Mn.register("business-loop-diagram",g.default),window.dispatchEvent(new Event(Aa))})},renderChart(g,S,m){const F=Ym(g);if(!F)return null;const T=Mn.get(F.id);return T?l.jsx("div",{className:"my-8",children:l.jsx(T,{...m})},`${F.id}-${S}`):null},getRegisteredCharts(){return Mn.getAll()},isChartRegistered(g){return Mn.get(g)!==null}},_o=({text:g,index:S,language:m})=>{const[,F]=zo.useState(0);return zo.useEffect(()=>{const T=()=>F(M=>M+1);return window.addEventListener(Aa,T),()=>window.removeEventListener(Aa,T)},[]),Ju.renderChart(g,`chart-${S}`,{language:m})},Jm=()=>{zo.useEffect(()=>{Ju.registerComponents()},[])};function Zm({language:g,setCurrentPage:S}){const[m,F]=V.useState(null),[T,M]=V.useState(null),U=Qm[g],H=Qu[g]||Qu.en;Jm(),V.useEffect(()=>{const W=()=>{const P=H.sections;for(let G=P.length-1;G>=0;G--){const q=document.getElementById(`section-${P[G].id}`);if(q&&q.getBoundingClientRect().top<=80){F(P[G].id);break}}};return window.addEventListener("scroll",W,{passive:!0}),()=>window.removeEventListener("scroll",W)},[H.sections]),V.useEffect(()=>{window.scrollTo(0,0)},[]);const R=W=>{M(W);const P=()=>{const G=document.getElementById(`section-${W}`);if(!G)return;const q=document.querySelector(".ui-topbar"),b=(q instanceof HTMLElement?q.closest("header"):null)||document.querySelector("header"),E=b instanceof HTMLElement?b.getBoundingClientRect().height:0,ye=G.getBoundingClientRect().top+window.scrollY-E-12;window.scrollTo({top:Math.max(0,ye),behavior:"smooth"})};requestAnimationFrame(()=>{requestAnimationFrame(()=>{P(),requestAnimationFrame(()=>{P()})})})},Q=W=>{M(T===W?null:W)},Z=W=>{const P=W.split(`
`),G=[];let q=0;for(;q<P.length;){const b=P[q].trim();if(!b){q++;continue}if(b.startsWith("|")){let E=[];for(;q<P.length&&P[q].trim().startsWith("|");)E.push(P[q].trim()),q++;const oe=E.filter(ye=>ye.trim());if(oe.length>=2){const ye=oe[0].split("|").slice(1,-1).map(y=>y.trim()),Y=ye.length;let we=!1,Ie=0;const pe=Array(Math.max(1,Y)).fill(0);oe.slice(2).forEach(y=>{y.split("|").slice(1,-1).forEach((v,I)=>{const $=v.trim().length;Ie=Math.max(Ie,$),pe[I]=Math.max(pe[I]??0,$),$>20&&(we=!0)})});const Pe=Y<=3?22:14,Re=!we&&Ie<=Pe,ft="text-[13px]",lt="text-[12px]",xt=Re?"whitespace-nowrap":"whitespace-normal",Ze=Re?"whitespace-nowrap":"whitespace-normal",je=y=>{if(Y===2){const c=pe[0]||0,v=pe[1]||0,I=Math.max(1,c+v),$=(c-v)/I,J=((ie,ae,se)=>Math.min(se,Math.max(ae,ie)))(42+$*12,38,46);return y===0?J:100-J}if(Y===3){const c=pe[1]||0,v=pe[2]||0;return Math.abs(c-v)<=10?y===0?22:39:y===0?22:y===1?48:30}return Y===4?y===0?15:y===1||y===2?25:35:Y===5?y===0?12:y===1||y===2||y===3?20:28:Y===6?y===0?10:18:Y===7?y===0?8:y===1||y===2||y===3||y===4||y===5?15:17:y===0?25:75/Math.max(1,Y-1)},be=Y===2,et=we?"align-top":"align-middle",Ee=y=>{const c=y.trim();if(!c)return!1;const v=c.replace(/,/g,"");return/^[-+]?\d+(?:\.\d+)?%?$/.test(v)},le=Array(Math.max(1,Y)).fill(!1);for(let y=0;y<Y;y++){const c=oe.slice(2).map(I=>(I.split("|").slice(1,-1)[y]??"").trim()).filter(Boolean);if(c.length===0){le[y]=!1;continue}const v=c.filter(Ee).length;le[y]=v/c.length>=.7}const C=y=>y===0?"text-left":le[y]?"text-right tabular-nums":be||Y>=3||y===0?"text-left":(pe[y]||0)<=8?"text-center":"text-left",L=y=>Y===2?y===0?"pl-10 pr-7":"pl-7 pr-10":Y===3?y===0?"pl-9 pr-7":y===1?"px-7":"pl-7 pr-9":Y===4?y===0?"px-6":y===1||y===2?"px-4":"px-6":Y>=5?y===0||y===Y-1?"px-4":"px-3":"px-4";G.push(l.jsx("div",{className:"my-8",children:l.jsx("div",{className:"ui-panel-soft overflow-hidden",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsx("div",{className:"px-4 sm:px-5 py-2",children:l.jsxs("table",{className:`table-auto ${be?"mx-auto w-full max-w-[560px]":Y===3?"mx-auto w-full max-w-[720px] min-w-[620px]":"w-full min-w-[720px]"} border-0 border-separate`,style:{border:"none",borderCollapse:"separate",borderSpacing:"0"},children:[l.jsx("thead",{children:l.jsx("tr",{className:"bg-white/[0.06] border-b border-white/10",children:ye.map((y,c)=>l.jsx("th",{style:{width:`${je(c)}%`},className:`${L(c)} ${be?"py-4":"py-3.5"} font-semibold text-slate-50 align-middle ${c===0?"text-left":le[c]?"text-right tabular-nums":"text-left"} ${c<Y-1?"border-r border-white/10":""} ${!be&&Y===3&&c===0?"whitespace-nowrap":Ze} ${!be&&Y===3&&c===1?"whitespace-nowrap":""}`,children:l.jsx("span",{className:`block ${ft} leading-5 tracking-wide text-slate-50/90`,children:y})},c))})}),l.jsx("tbody",{children:oe.slice(2).map((y,c)=>l.jsx("tr",{className:"border-0 odd:bg-white/[0.015] hover:bg-white/[0.035] transition-colors",style:{border:"none"},children:y.split("|").slice(1,-1).map((v,I)=>l.jsx("td",{style:{width:`${je(I)}%`,border:"none"},className:`${L(I)} ${be?"py-4":"py-3.5"} text-slate-300 ${et} ${C(I)} ${!be&&Y===3&&I===0?"whitespace-nowrap":xt} ${!be&&Y===3&&I===1?"whitespace-nowrap":""} border-0`,children:l.jsx("span",{className:`block ${lt} leading-[22px] tracking-[0.01em] break-words ${I===0?"text-slate-100/90 font-medium":"text-slate-300/80"}`,children:v})},I))},c))})]})})})})},q))}continue}if(b.startsWith("•")){let E=[];for(;q<P.length&&P[q].trim().startsWith("•");)E.push(P[q].trim()),q++;G.push(l.jsx("ul",{className:"space-y-3",children:E.map((oe,ye)=>l.jsxs("li",{className:"flex items-start gap-3 text-slate-300 leading-relaxed break-words",children:[l.jsx("span",{className:"inline-flex items-center justify-center w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"}),l.jsx("span",{dangerouslySetInnerHTML:{__html:oe.substring(1).trim().replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-medium">$1</strong>').replace(/#YouTube#/g,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(220 38 38); border-color: rgb(220 38 38); color: rgb(255 255 255);">YouTube</span>').replace(/#Facebook#/g,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(37 99 235); border-color: rgb(37 99 235); color: rgb(255 255 255);">Facebook</span>').replace(/#微博#/g,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(225 29 72); border-color: rgb(225 29 72); color: rgb(255 255 255);">微博</span>').replace(/#Weibo#/gi,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(225 29 72); border-color: rgb(225 29 72); color: rgb(255 255 255);">Weibo</span>').replace(/#门户网站#/g,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">门户网站</span>').replace(/#BBS#/gi,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(5 150 105); border-color: rgb(5 150 105); color: rgb(255 255 255);">BBS</span>').replace(/#早期博客#/g,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">早期博客</span>').replace(/#([^#]+)#/g,'<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium bg-lime-500/10 text-lime-300 rounded-lg border border-lime-500/25">$1</span>')}})]},ye))},q))}else if(b.startsWith("✅"))G.push(l.jsx("h4",{className:"flex items-center gap-4 text-xl font-light text-emerald-400 mt-8 mb-6",dangerouslySetInnerHTML:{__html:b.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-medium">$1</strong>').replace("✅",'<span class="inline-flex items-center justify-center w-7 h-7 bg-emerald-500 text-white text-lg rounded-xl font-bold">✓</span>')}},q)),q++;else if(b.startsWith("**")&&b.endsWith("**")){const E=b.slice(2,-2);G.push(l.jsx("h3",{className:"text-xl font-light text-lime-400 mt-8 mb-6",children:E},q)),E==="架构总览图（逻辑结构）"&&G.push(l.jsx("div",{className:"my-8",children:l.jsx(Gm,{})},`demo-${q}`)),G.push(l.jsx(_o,{text:E,index:q,language:g},`chart-${q}`)),q++}else if(b.startsWith("###")){const E=b.replace("###","").trim(),oe=E.startsWith("**")&&E.endsWith("**")?E.slice(2,-2):E;G.push(l.jsx("h3",{className:"text-xl font-light text-lime-400 mt-8 mb-6",children:oe},q)),G.push(l.jsx(_o,{text:oe,index:q,language:g},`chart-${q}`)),q++}else if(b.startsWith("*")&&b.endsWith("*")){const E=b.slice(1,-1).trim();G.push(l.jsx("h3",{className:"text-xl font-light text-lime-400 mt-8 mb-6",children:E},q)),G.push(l.jsx(_o,{text:E,index:q,language:g},`chart-${q}`)),q++}else if(b.startsWith(">"))G.push(l.jsx("blockquote",{className:"border-l-4 border-lime-500 pl-6 py-4 my-6 bg-lime-500/10 rounded-r-xl text-slate-300 italic leading-relaxed backdrop-blur-sm break-words",children:b.replace(">","").trim()},q)),q++;else if(b.startsWith("---"))G.push(l.jsx("div",{className:"my-12",children:l.jsx("div",{className:"border-t border-white/10"})},q)),q++;else{let E=b;for(;q+1<P.length&&P[q+1].trim()&&!P[q+1].trim().startsWith("|")&&!P[q+1].trim().startsWith("•")&&!P[q+1].trim().startsWith("**")&&!P[q+1].trim().startsWith("###")&&!P[q+1].trim().startsWith("*")&&!P[q+1].trim().startsWith("✅")&&!P[q+1].trim().startsWith(">")&&!P[q+1].trim().startsWith("---");)q++,E+=" "+P[q].trim();G.push(l.jsx("p",{className:"text-slate-300 leading-relaxed mb-4 break-words",dangerouslySetInnerHTML:{__html:E.replace(/\*(.*?)\*/g,'<strong class="text-white font-medium">$1</strong>').replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-medium">$1</strong>')}},q)),q++}}return l.jsx(l.Fragment,{children:G})};return l.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] text-white",children:[l.jsxs("div",{className:"fixed inset-0 overflow-hidden z-[-1] opacity-60",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-lime-500/20 via-emerald-500/10 to-cyan-500/20 rounded-full blur-3xl animate-pulse"}),l.jsx("div",{className:"absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"}),l.jsx("div",{className:"absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-bl from-amber-500/20 via-orange-500/10 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1400"})]}),l.jsxs("div",{className:"container mx-auto px-6 py-20 relative max-w-2xl lg:max-w-3xl",children:[l.jsx(Ku,{className:"absolute top-28 right-[15%] text-lime-400/40",size:16}),l.jsx(Ku,{className:"absolute top-48 left-[20%] text-lime-300/30",size:12}),l.jsx(Yu,{className:"absolute bottom-32 right-[25%] text-lime-400/30",size:18}),l.jsxs("header",{className:"mb-24 text-center",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs tracking-wide text-lime-300/90 bg-lime-500/5 border border-lime-500/20 rounded-full",children:[l.jsx("span",{className:"w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"}),"Whitepaper Documentation"]}),l.jsx("h1",{className:"mb-8",children:l.jsx("div",{className:"text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight mb-3",children:U.title})}),l.jsx("p",{className:"text-slate-400 text-lg mb-14 max-w-2xl mx-auto font-light leading-relaxed",children:U.subtitle})]}),l.jsx("nav",{className:"mb-24",children:l.jsxs("div",{className:"ui-panel-soft ui-panel-hover p-8 hover:border-emerald-500/50 transition-all duration-300",children:[l.jsxs("h2",{className:"text-xl font-light text-white mb-8 flex items-center gap-3",children:[l.jsx("span",{className:"w-2 h-2 bg-lime-400 rounded-full animate-pulse"}),U.tableOfContents]}),l.jsx("div",{className:"grid gap-3",children:H.sections.map(W=>l.jsx("button",{onClick:()=>R(W.id),className:`group text-left p-5 rounded-xl transition-all duration-300 ${m===W.id?"bg-lime-600/20 border border-lime-500/30 text-lime-400 shadow-lg shadow-lime-500/10":"hover:bg-white/5 border border-transparent text-slate-300 hover:text-white hover:border-white/20"}`,children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 font-mono text-sm ${m===W.id?"bg-lime-600 text-white shadow-lg":"bg-white/10 text-slate-500 group-hover:bg-lime-600/20 group-hover:text-lime-400"}`,children:String(W.id).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("div",{className:`font-medium transition-colors duration-300 ${m===W.id?"text-lime-300":"text-white group-hover:text-lime-400"}`,children:W.title}),l.jsxs("div",{className:"text-xs text-slate-500 mt-1",children:["Chapter ",W.id]})]})]}),l.jsx("div",{className:`transition-all duration-300 ${m===W.id?"text-lime-400":"text-slate-600 group-hover:text-lime-400"}`,children:l.jsx("div",{className:"w-2 h-2 rounded-full bg-current"})})]})},W.id))})]})}),l.jsx("main",{className:"space-y-12",children:H.sections.map(W=>l.jsxs("article",{id:`section-${W.id}`,className:"ui-panel-soft ui-panel-hover group hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden",children:[l.jsx("button",{onClick:()=>Q(W.id),className:"w-full text-left p-8 hover:bg-white/5 transition-colors duration-300",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("div",{className:`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 font-mono text-lg font-bold ${T===W.id?"bg-lime-600 text-white shadow-lg shadow-lime-500/30":"bg-white/10 text-slate-400 group-hover:bg-lime-600/20 group-hover:text-lime-400"}`,children:String(W.id).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("h2",{className:`text-xl md:text-2xl font-light transition-colors duration-300 ${T===W.id?"text-lime-400":"text-white group-hover:text-lime-400"}`,children:W.title}),l.jsx("div",{className:"text-sm text-slate-500 mt-2",children:T===W.id?"Click to collapse":"Click to expand"})]})]}),l.jsx("div",{className:`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${T===W.id?"bg-lime-600 text-white rotate-45":"bg-white/10 text-slate-400 group-hover:bg-lime-600/20 group-hover:text-lime-400"}`,children:l.jsx("span",{className:"text-2xl font-light",children:T===W.id?"−":"+"})})]})}),T===W.id&&l.jsx("div",{className:"border-t border-white/10 bg-black/20",children:l.jsx("div",{className:"p-8",children:Z(W.content)})})]},W.id))}),l.jsx("div",{className:"mt-24 text-center",children:l.jsxs("button",{onClick:()=>S("home"),className:"group flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 mx-auto",children:[l.jsx(Ro,{size:18,className:"group-hover:-translate-x-1 transition-transform duration-200"}),l.jsx("span",{className:"text-sm",children:U.backToHome})]})})]})]})}const Zu=V.memo(Zm),ep=Object.freeze(Object.defineProperty({__proto__:null,WhitepaperPage:Zu},Symbol.toStringTag,{value:"Module"})),tp={title:"百问百答",subtitle:"W/A 协议：执行风险摘要与百问百答全集",backToHome:"返回首页",searchPlaceholder:"搜索问题或答案...",riskSummary:{title:"⚠️ 执行风险摘要（投委会版）",items:[{label:"协议本质",text:"W/A 是一个全链上（All-On-Chain）的 Web4.0 协议，而非一家公司。协议不托管资产，不进行任何形式的自由裁量决策，也不保证任何结果。"},{label:"收益特征",text:"不存在固定、稳定或保证的回报。任何收益完全通过预设的链上机制和用户参与产生。"},{label:"核心风险",text:"市场波动性风险、协议设计与执行风险、用户行为与采用率风险、监管与司法管辖权的不确定性。"},{label:"控制与治理",text:'核心协议规则具有不可篡改性（Immutable）。不存在管理后台或"超级管理员"权限，无法进行人为干预或规则覆盖。'},{label:"投委会结论",text:"W/A 协议通过确定性的代码执行取代了对人为决策的信任。风险并未被消除，而是被显式地编码进了协议规则之中。"}]},disclaimer:"💡 本内容仅用于机制讲解与规则说明，不构成任何收益承诺，参数以链上合约为准。",categories:{basic:"基础认知",revenue:"收益与节奏",organization:"组织与推广",risk:"风控与信任",conclusion:"核心金句"},totalQuestions:"共 {{count}} 个问题",noResults:"暂无匹配的问题",faqs:{basic:[{q:"W/A 是什么？",a:"一个全链上 Web4.0 协作型算力与流量系统，用规则分配价值。"},{q:"Web4.0 与 Web3 的区别？",a:"Web3 解决资产确权，Web4.0 侧重于大规模协作与自动执行。"},{q:"WANT 和 XANT 有什么区别？",a:"WANT 是生态通证与结算单位；XANT 是用于点火算力引擎的种子凭证。"},{q:"为什么要强调全链上（All-On-Chain）？",a:"所有分配与销毁均在链上执行，可审计、不可篡改。"},{q:"是否有超级权限？",a:"没有，核心合约不依赖人为干预，自动执行。"},{q:"什么是算力引擎？",a:"产出 WANT 的基础工具，也是承载收益能力的凭证。"},{q:"为什么要维护？",a:"维护确保引擎处于活跃状态，未维护或到期将失去收益资格。"},{q:"维护费用怎么算？",a:"每月消耗该引擎持仓/锁仓 WANT 的 1%。"},{q:"什么是有效算力？",a:"只有运行中、已维护且未到期的算力才算有效。"},{q:"什么是有效地址（Active Address）？",a:"至少持有并运行一台指定等级以上算力引擎的地址。"},{q:"为什么不看注册人数？",a:"注册可造假，算力需要真实成本，系统只认真实参与。"},{q:"是否中心化运营？",a:"结算与收益分配完全由链上规则执行。"},{q:"是否需要实名？",a:"协议层不强制，但部分入口可能有合规要求。"},{q:"普通人能参与吗？",a:"可以，从小算力或体验型引擎开始。"},{q:"早晚期参与者区别？",a:"早期重在结构建立，后期重在效率与规模。"}],revenue:[{q:"为什么前期赚钱慢？",a:"静态收益前期需要复利滚动，动态收益是早期的现金流来源。"},{q:"静态慢是设计问题吗？",a:"不是，它是复利曲线，前期平缓、后期放大。"},{q:"动态收益有哪些？",a:"包含网络发展收益、星级级差奖励、全网手续费分红。"},{q:"动态每天都有吗？",a:"只要网络与算力承载有效，每日结算。"},{q:"是拉人头吗？",a:"不是，基于有效地址和业绩贡献，而非注册数。"},{q:"为什么收益到账不多？",a:"可能触发了当日动态封顶或算力承载不足。"},{q:"什么是当日动态封顶？",a:"系统限制每日可到账收益的上限。"},{q:"封顶怎么算？",a:"当日静态产出 × 1.5 × 身份系数。"},{q:"身份系数是什么？",a:"由持有运行的最高档位引擎决定。"},{q:"升级算力有什么用？",a:"提高静态产出的同时提高动态收益的承载上限。"},{q:"允许补仓追回烧伤吗？",a:"不允许，避免事后套利，保证规则公平。"},{q:"烧伤是亏损吗？",a:"不是罚款，是超出承载能力的自动作废。"},{q:"烧伤会变多吗？",a:"当网络增长快于算力承载时会增加。"},{q:"如何减少烧伤？",a:"同步升级算力、保持引擎活跃并关注封顶提示。"},{q:"可以只做动态吗？",a:"可以，但混合策略长期更稳。"},{q:"可以只做静态吗？",a:"可以，但节奏慢，错过动态杠杆。"},{q:"何时适合复投？",a:"当算力规模偏小且网络处于增长期时。"},{q:"何时适合提现？",a:"根据个人现金流需求或风险目标。"},{q:"鼓励长期持有吗？",a:"规则对长期参与者更友好，但不强制。"},{q:"收益稳定吗？",a:"无任何收益承诺，取决于规则与个人行为。"}],organization:[{q:"20 代网体是什么？",a:"系统统计向下延展的有效网络层级上限。"},{q:"为什么限制代数？",a:"防止无限级差导致系统失衡。"},{q:"多条线有什么好处？",a:"降低单线风险，提升星级与级差空间。"},{q:"什么是级差？",a:"不同星级之间的收益差额分配。"},{q:"平级奖存在吗？",a:"以合约规则为准，通常仅限一代平级。"},{q:"倒序分红是什么？",a:"按规则倒序分配的奖励机制。"},{q:"如何成为星级达人？",a:"需满足有效地址数、业绩与算力要求。"},{q:"星级越高越好吗？",a:"等级越高，责任与承载要求也越高。"},{q:"必须地推吗？",a:"不一定，线上、内容、社群均可。"},{q:"T1 引擎有什么用？",a:"降低体验门槛，用于引流转化。"},{q:"T1 会被薅羊毛吗？",a:"通过低收益和短周期限制刷号成本。"},{q:"有效直推如何判定？",a:"是否真实运行并形成有效地址。"},{q:"可以送矿机给下级吗？",a:"在算力承载规则允许范围内可以。"},{q:"组织做大一定赚钱吗？",a:"必须同步提升自身承载，否则会烧伤。"},{q:"网体越大压力越大？",a:"因为动态承载责任随之放大。"},{q:"市场最重要的是什么？",a:"先结构、再算力、最后规模。"},{q:"后期新人还有机会吗？",a:"有，成熟期转化效率更高。"},{q:"大户与小户谁有优势？",a:"大户有资金，小户有执行力。"},{q:"支持跨区域吗？",a:"是的，全链上体系不分地域。"},{q:"有统一话术吗？",a:"以官方披露及商学院口径为准。"},{q:"有团队补贴吗？",a:"由激励池规则和公告决定。"},{q:"榜单如何评选？",a:"基于链上数据��动统计。"},{q:"奖励从哪来？",a:"来自专门的激励池，不影响主产出。"},{q:"如何防作弊？",a:"资金关联分析、算力校验、链上追溯。"},{q:"烧伤的 WANT 去了哪？",a:"按规则链上销毁，不进入任何个人账户。"}],risk:[{q:"销毁可查吗？",a:"链上透明审计。"},{q:"项目方如何获利？",a:"靠生态发展和市场占有，而非囤币。"},{q:"规则会暗改吗？",a:"核心规则上链后不可随意修改。"},{q:"参数可调吗？",a:"仅通过治理路径或既定路径调整。"},{q:"有跑路风险吗？",a:"设计上降低了人为风险，但不消除市场风险。"},{q:"合约审计了吗？",a:"以官方披露为准。"},{q:"币价谁决定？",a:"市场供需。"},{q:"会控盘吗？",a:"项目不承诺也不控制价格。"},{q:"为什么要封顶？",a:"保护系统稳定性，防止被极端行为击穿。"},{q:"封顶限制收益吗？",a:"是限制不匹配承载能力的过载收益。"},{q:"不封顶会怎样？",a:"短期爽，长期崩。"},{q:"支持治理投票吗？",a:"随治理模块上线开启。"},{q:"规则一致吗？",a:"是的，规则面前人人平等。"},{q:"人工干预结算吗？",a:"不，结算不依赖人工。"},{q:"提现受限吗？",a:"按规则和流动性情况执行。"},{q:"为什么要手续费？",a:"用于运营、激励与风控。"},{q:"手续费流向透明吗？",a:"规则化分配，链上可查。"},{q:"资金池挪用吗？",a:"核心资金流向由合约执行。"},{q:"项目能走多远？",a:"取决于规则执行力和参与者行为。"},{q:"失败风险存在吗？",a:"存在，任何市场行为都有风险。"},{q:"鼓励理性参与吗？",a:"是的，规则即风险提示。"},{q:"适合所有人吗？",a:"不，只适合理解规则的人。"},{q:"为什么不许诺未来？",a:"因为未来已经写在规则里。"},{q:"一句话概括？",a:"用规则替代承诺，用执行替代想象。"}],conclusion:[{q:"最核心的一句话？",a:"网体决定产出，算力决定承载。"},{q:"核心价值？",a:"规则透明，执行确定。"},{q:"最容易踩的坑？",a:"只扩网体，不升算力。"},{q:"最稳策略？",a:"静态复投 + 动态扩张。"},{q:"何时该停？",a:"当你不理解规则的时候。"},{q:"何时该快？",a:"当你承载能力领先网体的时候。"},{q:"系统讨厌什么？",a:"投机与事后补救。"},{q:"系统奖励什么？",a:"提前规划与持续执行。"},{q:"卖的是什么？",a:"一套可执行的规则，而非某种币。"},{q:"夜聊总结？",a:"不许诺未来，只执行规则。"},{q:"W/A 像什么？",a:"一个自动运行的经济操作系统。"},{q:"参与者角色？",a:"规则的执行者，而非索取者。"},{q:"长期主义在哪？",a:"短期爽点都被规则压制了。"},{q:"有人犹豫怎么办？",a:"说明还没准备好理解规则。"},{q:"最终决定权？",a:"永远在你自己。"}]}},np={title:"Q&A",subtitle:"W/A Protocol: Executive Risk Summary & Full FAQ",backToHome:"Back to Home",searchPlaceholder:"Search questions or answers…",riskSummary:{title:"⚠️ Executive Risk Summary (Investment Committee)",items:[{label:"What it is",text:"W/A is an all-on-chain Web4 protocol—not a company. It does not custody user assets, make discretionary decisions, or promise outcomes."},{label:"Returns profile",text:"There are no fixed, stable, or guaranteed returns. Any distribution is produced solely by predefined on-chain rules and user behavior."},{label:"Key risks",text:"Market volatility; protocol design/execution risk; user behavior and adoption risk; and regulatory/jurisdictional uncertainty."},{label:"Control & governance",text:"Core rules are immutable. There is no admin panel, no backdoor, and no “super admin” role that can override settlement."},{label:"Bottom line",text:"W/A replaces trust in people with deterministic code. Risk isn’t removed—it’s made explicit and enforced by the protocol."}]},disclaimer:"💡 For mechanism and rule explanation only. This is not a promise of returns. Parameters are subject to the on-chain contracts.",categories:{basic:"Basics",revenue:"Returns & Timing",organization:"Growth & Network",risk:"Risk & Trust",conclusion:"Key Takeaways"},totalQuestions:"Total {{count}} questions",noResults:"No matching questions found",faqs:{basic:[{q:"What is W/A?",a:"An all-on-chain Web4 protocol that coordinates computing power and traffic, distributing value strictly through rules."},{q:"How is Web4 different from Web3?",a:"Web3 secures ownership; Web4 focuses on large-scale coordination and automated execution."},{q:"What's the difference between WANT and XANT?",a:"WANT is the ecosystem token and settlement unit. XANT is a “seed” credential used to ignite the computing engine."},{q:"Why emphasize “All-on-chain”?",a:"Distribution and burns are executed on-chain—auditable, transparent, and tamper-resistant."},{q:"Is there any admin key or “super privilege”?",a:"No. Core contracts run automatically and do not rely on human intervention."},{q:"What is a computing engine?",a:"The basic instrument that produces WANT—effectively a credential for earning capacity."},{q:"Why does an engine need maintenance?",a:"Maintenance keeps an engine active. If it's not maintained or it expires, it no longer qualifies for rewards."},{q:"How are maintenance fees calculated?",a:"Each month, 1% of the WANT held/locked in the engine is consumed as maintenance."},{q:"What counts as “effective” computing power?",a:"Only engines that are running, maintained, and not expired are counted as effective."},{q:"What is an Active Address?",a:"An address that holds and runs at least one engine at or above the required tier."},{q:"Why not track registrations?",a:"Registrations can be faked. Effective computing power has real cost—so the protocol measures real participation."},{q:"Is the system centrally operated?",a:"No. Settlement and distribution are enforced by on-chain rules."},{q:"Is KYC required?",a:"Not at the protocol level, but certain entry points may impose compliance requirements."},{q:"Can ordinary users participate?",a:"Yes. You can start with smaller capacity or entry-level engines."},{q:"What's the difference between early and late participants?",a:"Early participants build structure; later participants benefit more from efficiency and scale."}],revenue:[{q:"Why are returns slow at the beginning?",a:"Static returns follow a compounding curve (slow early, faster later). Dynamic returns typically provide earlier cash flow."},{q:"Is slow “static” a design flaw?",a:"No. It's the nature of compounding: flat at first, amplified over time."},{q:"What counts as dynamic returns?",a:"Network-growth rewards, star-tier differential rewards, and network-wide fee dividends."},{q:"Are dynamic returns paid daily?",a:"Yes—so long as the network is valid and your capacity can carry the payout, settlement is daily."},{q:"Is this a pyramid scheme?",a:"No. Rewards are based on effective addresses and contribution—not raw registration counts."},{q:"Why does my credited payout look low?",a:"Most commonly: you hit the daily cap, or your capacity was insufficient to carry the full dynamic payout."},{q:"What is the daily dynamic cap?",a:"A protocol rule that limits how much dynamic payout can be credited per day."},{q:"How is the cap calculated?",a:"Daily static output × 1.5 × identity coefficient."},{q:"What is the identity coefficient?",a:"A multiplier determined by the highest-tier engine you hold and actively run."},{q:"Why upgrade capacity?",a:"Upgrading increases static output and raises the ceiling for how much dynamic payout you can carry."},{q:"Can I “top up” later to recover burned rewards?",a:"No. This prevents after-the-fact arbitrage and keeps the rules fair."},{q:"Is “burn” the same as a loss or penalty?",a:"It's not a manual penalty. Anything beyond your carrying capacity is automatically voided by rule."},{q:"Will burn increase over time?",a:"It can—especially if network growth outpaces your capacity upgrades."},{q:"How do I reduce burn?",a:"Upgrade capacity in step with network growth, keep engines active, and watch for cap prompts/alerts."},{q:"Can I focus on dynamic rewards only?",a:"Yes, but a blended approach is typically more resilient long-term."},{q:"Can I focus on static rewards only?",a:"Yes, but growth is slower and you may miss the leverage from dynamic rewards."},{q:"When does reinvestment make sense?",a:"When your capacity is still small and the network is in a growth phase."},{q:"When does withdrawal make sense?",a:"When it fits your personal cash-flow needs and risk preference."},{q:"Does the protocol encourage long-term holding?",a:"Rules are generally friendlier to long-term participants, but nothing is mandatory."},{q:"Are returns stable?",a:"No returns are promised. Outcomes depend on the rules and participant behavior."}],organization:[{q:"What is the “20-generation network” cap?",a:"The protocol only counts effective network depth up to 20 generations below an account."},{q:"Why cap the depth?",a:"To prevent unlimited rank differentials from accumulating and destabilizing incentives."},{q:"What’s the benefit of building multiple lines?",a:"It reduces single-line risk and improves your chances of reaching higher star tiers and capturing rank differentials."},{q:"What is a rank differential?",a:"A rule-based allocation of the reward gap between different star tiers."},{q:"Is there a peer (same-rank) bonus?",a:"If enabled by contract rules, it is typically limited to a small number of generations (often one)."},{q:"What is “reverse-order” distribution?",a:"A reward mechanism that distributes payouts in reverse order according to the on-chain rules."},{q:"How do I qualify for a star tier?",a:"You must meet requirements on effective addresses, performance, and your own capacity."},{q:"Is a higher star tier always better?",a:"Higher tiers come with higher responsibility and higher capacity requirements."},{q:"Do I have to do offline outreach?",a:"Not necessarily. Online channels, content, and community growth can all work."},{q:"What is the Tier-1 (T1) engine for?",a:"To lower the onboarding barrier and improve conversion for new users."},{q:"Can T1 be farmed?",a:"It is designed to be costly to farm by keeping returns low and the cycle short."},{q:"How is an “effective direct referral” determined?",a:"Whether the referred account actually runs an engine and becomes an effective address."},{q:"Can I gift engines to downlines?",a:"Yes—so long as it stays within the protocol’s capacity/carrying rules."},{q:"Does a bigger organization automatically mean more profit?",a:"Only if you upgrade your own capacity in step. Otherwise, excess rewards may be burned/voided."},{q:"Does a bigger network mean bigger pressure?",a:"Yes. The responsibility to carry dynamic payouts grows with your network."},{q:"What matters most in growth?",a:"Structure first, capacity second, scale last."},{q:"Do late joiners still have a chance?",a:"Yes. In later phases, conversion efficiency can be higher."},{q:"Who has the advantage—whales or small players?",a:"Whales have capital; smaller players often win on execution."},{q:"Does this work across regions?",a:"Yes. An all-on-chain system is geography-agnostic."},{q:"Is there an official script/messaging guide?",a:"Follow official disclosures and any academy guidelines."},{q:"Are there team subsidies?",a:"If any, they are determined by incentive-pool rules and announcements."},{q:"How are rankings calculated?",a:"They are computed automatically from on-chain data."},{q:"Where do incentives come from?",a:"From a dedicated incentive pool; they do not reduce the main output."},{q:"How do you prevent cheating?",a:"Through fund-correlation analysis, capacity verification, and on-chain traceability."},{q:"Where does burned WANT go?",a:"It is burned on-chain by rule and does not go to any individual account."}],risk:[{q:"Is the burn verifiable on-chain?",a:"Yes. It is transparent and auditable on-chain."},{q:"How does the project benefit?",a:"Through ecosystem growth and market share—not by hoarding tokens."},{q:"Can the rules be changed secretly?",a:"Core rules are immutable once on-chain; changes must follow defined governance paths."},{q:"Can parameters be adjusted?",a:"Only through governance or predetermined upgrade paths."},{q:"Is there rug-pull risk?",a:"The design reduces human intervention risk, but it cannot remove market risk."},{q:"Has the contract been audited?",a:"Refer to official disclosures."},{q:"Who sets the token price?",a:"The market—supply and demand."},{q:"Will the team “control the price”?",a:"The protocol does not promise or control prices."},{q:"Why have caps?",a:"To protect system stability and prevent extreme behavior from breaking incentives."},{q:"Do caps limit earnings?",a:"They limit overload payouts that exceed your carrying capacity."},{q:"What happens without caps?",a:"It may feel good short-term, but it tends to collapse long-term."},{q:"Is there governance voting?",a:"It will open when the governance module goes live."},{q:"Are the rules the same for everyone?",a:"Yes. The rules are applied consistently."},{q:"Can settlement be manually overridden?",a:"No. Settlement is rule-based and not dependent on manual operations."},{q:"Are withdrawals restricted?",a:"They follow protocol rules and available liquidity conditions."},{q:"Why are there transaction fees?",a:"To fund operations, incentives, and risk controls."},{q:"Is fee distribution transparent?",a:"Yes. Distribution is rule-based and verifiable on-chain."},{q:"Can funds be misappropriated?",a:"Core fund flows are executed by contracts under predefined rules."},{q:"How far can the protocol go?",a:"It depends on rule execution and participant behavior."},{q:"Is failure possible?",a:"Yes. Any market system carries risk."},{q:"Do you encourage rational participation?",a:"Yes. The rules themselves are the risk disclosure."},{q:"Is this suitable for everyone?",a:"No. It’s only suitable for people who understand the rules."},{q:"Why not promise the future?",a:"Because outcomes are determined by the rules—not by promises."},{q:"One-sentence summary?",a:"Replace promises with rules—and replace imagination with execution."}],conclusion:[{q:"One core principle?",a:"Network drives output; capacity determines what you can carry."},{q:"Core value?",a:"Transparent rules and deterministic execution."},{q:"The most common mistake?",a:"Growing the network without upgrading capacity."},{q:"The most stable strategy?",a:"Static reinvestment + dynamic expansion."},{q:"When should you stop?",a:"When you don’t understand the rules."},{q:"When should you accelerate?",a:"When your capacity upgrades are ahead of your network growth."},{q:"What does the system dislike?",a:"Speculation—and after-the-fact “fixes.”"},{q:"What does the system reward?",a:"Planning ahead and consistent execution."},{q:"What are you actually “selling”?",a:"A set of executable rules—not a token narrative."},{q:"Evening chat summary?",a:"No promises about the future—only rule execution."},{q:"What is W/A like?",a:"An economic operating system that runs automatically."},{q:"What is a participant’s role?",a:"To execute the rules—not to demand outcomes."},{q:"Where is long-termism?",a:"The rules compress short-term thrills and reward long-term discipline."},{q:"What if someone hesitates?",a:"It usually means they’re not ready to understand the rules yet."},{q:"Who makes the final call?",a:"You do."}]}},ap={title:"Tanya & Jawab",subtitle:"Protokol W/A: Ringkasan Risiko & FAQ Lengkap",backToHome:"Kembali ke Beranda",searchPlaceholder:"Cari pertanyaan atau jawaban…",riskSummary:{title:"⚠️ Ringkasan Risiko Eksekutif",items:[{label:"Sifat protokol",text:"W/A adalah protokol Web4 “All-on-chain”, bukan “perusahaan”. Protokol tidak melakukan custody aset pengguna, tidak membuat keputusan diskresioner, dan tidak menjanjikan hasil."},{label:"Profil return",text:"Tidak ada return tetap/stabil/terjamin. Setiap distribusi hanya dihasilkan oleh aturan on-chain yang sudah didefinisikan dan perilaku partisipan."},{label:"Risiko utama",text:"Volatilitas pasar; risiko desain/eksekusi protokol; risiko perilaku & adopsi pengguna; serta ketidakpastian regulasi/yurisdiksi."},{label:"Kontrol & tata kelola",text:"Aturan inti bersifat immutable setelah on-chain. Tidak ada admin panel/backend, tidak ada “super admin”, dan tidak ada cara untuk override settlement secara manual."},{label:"Kesimpulan",text:"W/A menggantikan “trust pada manusia” dengan “eksekusi kode deterministik”. Risiko tidak hilang—melainkan dibuat eksplisit dan ditegakkan oleh aturan protokol."}]},disclaimer:"💡 Konten ini hanya untuk penjelasan mekanisme dan klarifikasi aturan, bukan janji pendapatan. Parameter tunduk pada kontrak on-chain.",categories:{basic:"Dasar",revenue:"Return & timing",organization:"Pertumbuhan & jaringan",risk:"Risiko & trust",conclusion:"Ringkasan inti"},totalQuestions:"Total {{count}} pertanyaan",noResults:"Tidak ada pertanyaan yang cocok",faqs:{basic:[{q:"Apa itu W/A?",a:"Sebuah sistem Web4 “All-on-chain” yang mengoordinasikan computing power (engine) dan traffic jaringan, lalu mendistribusikan nilai secara murni lewat aturan."},{q:"Apa bedanya Web4 dengan Web3?",a:"Web3 fokus pada “kepemilikan aset”. Web4 fokus pada koordinasi skala besar di tingkat jaringan dan eksekusi otomatis berbasis aturan."},{q:"Apa bedanya WANT dan XANT?",a:"WANT adalah token ekosistem sekaligus unit settlement. XANT adalah “seed credential” untuk menyalakan engine komputasi."},{q:"Kenapa menekankan All-on-chain?",a:"Karena perhitungan, distribusi, dan Burn semuanya berjalan on-chain: transparan, bisa diaudit, dan tahan manipulasi."},{q:"Apakah ada admin key / “super privilege”?",a:"Tidak ada. Kontrak inti berjalan otomatis dan tidak bergantung pada intervensi manusia."},{q:"Apa itu engine komputasi?",a:"Unit dasar untuk menghasilkan WANT—sekaligus kredensial Capacity (kemampuan menampung/meng-carry payout)."},{q:"Kenapa engine perlu maintenance?",a:"Maintenance menjaga engine tetap aktif. Engine yang tidak di-maintain atau kedaluwarsa akan kehilangan kelayakan menerima reward."},{q:"Bagaimana maintenance fee dihitung?",a:"Setiap bulan, 1% dari WANT yang terikat (held/locked) pada engine akan dikonsumsi sebagai maintenance."},{q:"Apa yang dimaksud computing power “efektif”?",a:"Hanya engine yang sedang berjalan, sudah di-maintain, dan belum kedaluwarsa yang dihitung efektif."},{q:"Apa itu Active Address?",a:"Alamat yang memegang dan menjalankan minimal satu engine pada tier yang disyaratkan."},{q:"Kenapa tidak menghitung jumlah pendaftaran?",a:"Pendaftaran bisa dipalsukan. Menjalankan engine punya biaya nyata—jadi protokol mengukur partisipasi nyata."},{q:"Apakah sistem ini terpusat?",a:"Tidak. Settlement dan distribusi dipaksa oleh aturan on-chain."},{q:"Apakah KYC wajib?",a:"Tidak di level protokol, tetapi beberapa entry point bisa menerapkan persyaratan compliance."},{q:"Apakah pengguna biasa bisa ikut?",a:"Bisa. Kamu dapat mulai dari capacity kecil atau engine entry-level/percobaan."},{q:"Apa beda peserta awal vs peserta belakangan?",a:"Fase awal menekankan “membangun struktur”; fase belakangan lebih unggul di efisiensi dan scale."}],revenue:[{q:"Kenapa return terlihat lambat di awal?",a:"Return statis mengikuti kurva compounding (awal lambat, kemudian makin cepat). Return dinamis sering memberi cashflow lebih awal."},{q:"Apakah “statis lambat” itu cacat desain?",a:"Tidak. Itu sifat compounding: awalnya datar, lalu teramplifikasi seiring waktu."},{q:"Apa saja yang termasuk return dinamis?",a:"Misalnya: reward pertumbuhan jaringan, differential reward berdasarkan Star Tier, dan dividen fee seluruh jaringan."},{q:"Apakah return dinamis dibayar harian?",a:"Ya—selama jaringan valid dan Capacity kamu cukup untuk carry payout, settlement dilakukan harian."},{q:"Apakah ini skema piramida?",a:"Bukan. Reward berbasis effective address dan kontribusi—bukan jumlah pendaftaran."},{q:"Kenapa payout yang tercatat (credited) kecil?",a:"Umumnya karena kamu menyentuh daily cap, atau Capacity kamu tidak cukup untuk carry payout dinamis sepenuhnya."},{q:"Apa itu daily dynamic cap?",a:"Aturan protokol yang membatasi berapa banyak payout dinamis yang bisa di-credit per hari."},{q:"Bagaimana cap dihitung?",a:"Output statis harian × 1.5 × koefisien identitas."},{q:"Apa itu koefisien identitas?",a:"Multiplier yang ditentukan oleh engine tier tertinggi yang kamu miliki dan kamu jalankan."},{q:"Kenapa perlu upgrade capacity?",a:"Upgrade menaikkan output statis dan meningkatkan plafon berapa banyak payout dinamis yang bisa kamu carry."},{q:"Bisa “top up” belakangan untuk memulihkan Burn?",a:"Tidak. Ini mencegah arbitrase setelah kejadian dan menjaga fairness aturan."},{q:"Apakah Burn sama dengan rugi/denda?",a:"Bukan denda manual. Bagian yang melampaui Capacity akan otomatis di-void oleh aturan."},{q:"Apakah Burn bisa meningkat?",a:"Bisa—terutama jika pertumbuhan jaringan melampaui upgrade Capacity kamu."},{q:"Bagaimana cara mengurangi Burn?",a:"Upgrade Capacity seiring pertumbuhan jaringan, jaga engine tetap aktif, dan perhatikan prompt/peringatan cap."},{q:"Boleh fokus hanya pada dinamis?",a:"Boleh, tapi strategi campuran (statis + dinamis) biasanya lebih tahan banting jangka panjang."},{q:"Boleh fokus hanya pada statis?",a:"Boleh, tapi pertumbuhan lebih lambat dan kamu bisa kehilangan leverage dari dinamis."},{q:"Kapan reinvest masuk akal?",a:"Saat Capacity kamu masih kecil dan jaringan sedang berada dalam fase pertumbuhan."},{q:"Kapan withdraw masuk akal?",a:"Saat sesuai dengan kebutuhan cashflow pribadi dan preferensi risiko kamu."},{q:"Apakah protokol mendorong long-term holding?",a:"Aturan cenderung lebih ramah untuk partisipan jangka panjang, tetapi tidak ada yang wajib."},{q:"Apakah return stabil?",a:"Tidak ada return yang dijanjikan. Hasil bergantung pada aturan dan perilaku partisipan."}],organization:[{q:"Apa itu “cap jaringan 20 generasi (20-generation)”?",a:"Protokol hanya menghitung kedalaman jaringan efektif ke bawah sampai maksimal 20 generasi."},{q:"Kenapa kedalaman dibatasi?",a:"Untuk mencegah diferensial level yang tak terbatas menumpuk dan membuat insentif jadi tidak stabil."},{q:"Apa manfaat membangun beberapa line?",a:"Mengurangi risiko single-line dan meningkatkan peluang mencapai Star Tier lebih tinggi serta menangkap diferensial."},{q:"Apa itu diferensial (selisih level)?",a:"Alokasi berbasis aturan atas “gap reward” di antara Star Tier yang berbeda."},{q:"Apakah ada bonus peer (level yang sama)?",a:"Jika diaktifkan oleh aturan kontrak, biasanya dibatasi hanya sampai beberapa generasi (seringnya 1 generasi)."},{q:"Apa itu distribusi “reverse-order”?",a:"Mekanisme reward yang mendistribusikan payout dalam urutan terbalik sesuai aturan on-chain."},{q:"Bagaimana cara qualify Star Tier?",a:"Kamu harus memenuhi syarat effective address, performance, dan Capacity kamu sendiri."},{q:"Apakah Star Tier lebih tinggi selalu lebih baik?",a:"Tier lebih tinggi biasanya lebih menguntungkan, tapi tanggung jawab carry dan kebutuhan Capacity juga ikut naik."},{q:"Harus melakukan outreach offline?",a:"Tidak harus. Channel online, konten, dan pengembangan komunitas juga bisa."},{q:"Untuk apa engine T1?",a:"Untuk menurunkan hambatan onboarding dan meningkatkan konversi pengguna baru."},{q:"Apakah T1 bisa “difarm”?",a:"Desainnya membuat farming jadi mahal: return rendah dan siklus pendek."},{q:"Bagaimana menentukan “direct referral yang efektif”?",a:"Apakah akun yang direferensikan benar-benar menjalankan engine dan menjadi effective address."},{q:"Bisakah gift engine ke downline?",a:"Bisa—selama masih dalam aturan Capacity/Carry protokol."},{q:"Apakah organisasi lebih besar otomatis lebih untung?",a:"Tidak. Hanya jika kamu upgrade Capacity seiring pertumbuhan; kalau tidak, excess reward bisa Burn/void."},{q:"Apakah jaringan lebih besar berarti tekanan lebih besar?",a:"Ya. Tanggung jawab untuk carry payout dinamis tumbuh bersama jaringanmu."},{q:"Apa yang paling penting untuk growth?",a:"Struktur dulu, Capacity kedua, skala terakhir."},{q:"Apakah late joiner masih punya peluang?",a:"Ya. Di fase lebih matang, efisiensi konversi bisa lebih tinggi."},{q:"Siapa yang lebih unggul: whale atau pemain kecil?",a:"Whale unggul di modal; pemain kecil sering menang di eksekusi."},{q:"Apakah bisa lintas wilayah?",a:"Bisa. Sistem All-on-chain tidak bergantung pada geografi."},{q:"Apakah ada pedoman pesan/skrip resmi?",a:"Ikuti disclosure resmi dan (jika ada) panduan academy."},{q:"Apakah ada subsidi tim?",a:"Jika ada, ditentukan oleh aturan incentive pool dan pengumuman."},{q:"Bagaimana ranking dihitung?",a:"Dihitung otomatis berdasarkan data on-chain."},{q:"Insentif berasal dari mana?",a:"Dari incentive pool khusus; tidak mengurangi output utama."},{q:"Bagaimana mencegah kecurangan?",a:"Analisis korelasi dana, verifikasi Capacity, dan traceability on-chain."},{q:"Ke mana WANT yang di-Burn pergi?",a:"Di-Burn on-chain sesuai aturan dan tidak masuk ke akun individu mana pun."}],risk:[{q:"Apakah Burn bisa diverifikasi on-chain?",a:"Ya. Semua Burn transparan dan bisa diaudit on-chain."},{q:"Dari mana proyek/ekosistem mendapat manfaat?",a:"Bukan dari “menimbun token”, melainkan dari pertumbuhan ekosistem dan market share penggunaan."},{q:"Bisakah aturan diubah diam-diam?",a:"Aturan inti bersifat immutable setelah on-chain; perubahan harus mengikuti jalur governance/upgrade yang didefinisikan."},{q:"Bisakah parameter diubah?",a:"Hanya lewat governance atau jalur upgrade yang sudah ditentukan."},{q:"Apakah ada risiko rug pull?",a:"Desain mengurangi risiko intervensi manusia, tapi tidak bisa menghapus risiko pasar."},{q:"Apakah kontrak sudah diaudit?",a:"Silakan rujuk disclosure resmi."},{q:"Siapa yang menentukan harga token?",a:"Pasar—supply dan demand."},{q:"Apakah tim “mengontrol harga”?",a:"Protokol tidak menjanjikan atau mengontrol harga."},{q:"Kenapa ada cap (batas)?",a:"Untuk menjaga stabilitas sistem dan mencegah perilaku ekstrem merusak insentif."},{q:"Apakah cap membatasi pendapatan?",a:"Cap membatasi payout overload yang melebihi Capacity kamu."},{q:"Apa yang terjadi jika tidak ada cap?",a:"Mungkin terasa enak jangka pendek, tapi cenderung kolaps jangka panjang."},{q:"Apakah ada voting governance?",a:"Akan dibuka ketika modul governance aktif."},{q:"Apakah aturan sama untuk semua orang?",a:"Ya. Aturan diterapkan secara konsisten."},{q:"Apakah settlement bisa di-override manual?",a:"Tidak. Settlement berbasis aturan dan tidak bergantung operasi manual."},{q:"Apakah withdraw dibatasi?",a:"Mengikuti aturan protokol dan kondisi likuiditas yang tersedia."},{q:"Kenapa ada transaction fee?",a:"Untuk membiayai operasi, insentif, dan kontrol risiko."},{q:"Apakah distribusi fee transparan?",a:"Ya. Distribusi berbasis aturan dan bisa diverifikasi on-chain."},{q:"Apakah dana pool bisa diselewengkan?",a:"Aliran dana inti dieksekusi oleh kontrak sesuai aturan yang sudah didefinisikan."},{q:"Seberapa jauh protokol bisa berjalan?",a:"Tergantung pada eksekusi aturan dan perilaku partisipan."},{q:"Apakah kegagalan mungkin terjadi?",a:"Ya. Semua sistem pasar memiliki risiko."},{q:"Apakah mendorong partisipasi yang rasional?",a:"Ya. Aturannya sendiri adalah “risk disclosure”."},{q:"Apakah cocok untuk semua orang?",a:"Tidak. Hanya cocok untuk orang yang memahami aturan."},{q:"Kenapa tidak menjanjikan masa depan?",a:"Karena outcome ditentukan oleh aturan—bukan oleh janji."},{q:"Ringkas dalam satu kalimat?",a:"Ganti janji dengan aturan—dan ganti imajinasi dengan eksekusi."}],conclusion:[{q:"Satu prinsip paling inti?",a:"“Jaringan mendorong output; Capacity menentukan apa yang bisa kamu carry.”"},{q:"Nilai inti?",a:"Aturan transparan dan eksekusi deterministik."},{q:"Kesalahan paling umum?",a:"Membesarkan jaringan tanpa upgrade Capacity."},{q:"Strategi paling stabil?",a:"Reinvest statis + ekspansi dinamis."},{q:"Kapan sebaiknya berhenti?",a:"Saat kamu merasa tidak memahami aturan."},{q:"Kapan sebaiknya gas?",a:"Saat upgrade Capacity kamu berada “di depan” pertumbuhan jaringan."},{q:"Apa yang tidak disukai sistem?",a:"Spekulasi dan “perbaikan” setelah kejadian."},{q:"Apa yang dihargai sistem?",a:"Perencanaan dari awal dan eksekusi yang konsisten."},{q:"Apa yang sebenarnya “dijual”?",a:"Sekumpulan aturan yang bisa dieksekusi—bukan narasi token."},{q:"Ringkasan obrolan malam?",a:"Tidak menjanjikan masa depan—hanya mengeksekusi aturan."},{q:"W/A itu seperti apa?",a:"Sebuah economic operating system yang berjalan otomatis."},{q:"Peran partisipan?",a:"Eksekutor aturan—bukan penuntut hasil."},{q:"Di mana “long-termism”?",a:"Aturan menekan sensasi jangka pendek dan memberi reward pada disiplin jangka panjang."},{q:"Kalau seseorang ragu?",a:"Biasanya itu tanda dia belum siap untuk memahami aturan."},{q:"Siapa yang mengambil keputusan akhir?",a:"Kamu."}]}},rp={title:"ถาม-ตอบ",subtitle:"โปรโตคอล W/A: สรุปความเสี่ยง & FAQ ฉบับสมบูรณ์",backToHome:"กลับสู่หน้าหลัก",searchPlaceholder:"ค้นหาคำถามหรือคำตอบ…",riskSummary:{title:"⚠️ สรุปความเสี่ยงสำหรับผู้บริหาร",items:[{label:"ธรรมชาติของโปรโตคอล",text:"W/A คือโปรโตคอล Web4.0 แบบ All-on-chain ไม่ใช่ “บริษัท” โปรโตคอลไม่ถือครองทรัพย์สิน ไม่ตัดสินใจตามดุลพินิจ และไม่รับประกันผลลัพธ์ใดๆ"},{label:"ธรรมชาติของรายได้",text:"ไม่มีผลตอบแทนที่แน่นอน/คงที่/รับประกัน รายได้ทั้งหมดเกิดจากกลไก on-chain ที่กำหนดไว้ล่วงหน้า และระดับการมีส่วนร่วมของผู้ใช้อย่างแท้จริง"},{label:"ความเสี่ยงหลัก",text:"ความผันผวนของตลาด, ความเสี่ยงด้านการออกแบบ/การทำงานของโปรโตคอล, ความเสี่ยงจากพฤติกรรมและการนำไปใช้ของผู้ใช้, และความไม่แน่นอนด้านกฎระเบียบ/เขตอำนาจศาล"},{label:"การควบคุม & ธรรมาภิบาล",text:"กฎหลักของโปรโตคอลเป็นแบบ on-chain และไม่สามารถแก้ไขตามอำเภอใจ ไม่มีแอดมินแบ็กเอนด์หรือสิทธิ์ “ซูเปอร์แอดมิน” สำหรับการแทรกแซงของมนุษย์หรือการ override กฎ"},{label:"ข้อสรุป",text:"W/A แทน “ความไว้ใจในคน” ด้วย “การรันโค้ดแบบกำหนดได้” ความเสี่ยงไม่ได้หายไป แต่ถูกทำให้ชัดเจนและถูกเข้ารหัสไว้ในกฎของโปรโตคอล"}]},disclaimer:"💡 เนื้อหานี้มีไว้เพื่ออธิบายกลไกและทำความเข้าใจกฎเท่านั้น ไม่ใช่คำมั่นสัญญาเรื่องรายได้ พารามิเตอร์จริงยึดตามคอนแทรกต์ on-chain",categories:{basic:"พื้นฐาน",revenue:"รายได้ & จังหวะ",organization:"โครงสร้างทีม & การขยายเครือข่าย",risk:"ความเสี่ยง & การควบคุมความเสี่ยง",conclusion:"สรุปหลักการ"},totalQuestions:"รวม {{count}} คำถาม",noResults:"ไม่พบคำถามที่ตรงกัน",faqs:{basic:[{q:"W/A คืออะไร?",a:"ระบบ Web4.0 แบบ All-on-chain ที่ทำให้ “พลังประมวลผล (engine)” และ “ทราฟฟิกของเครือข่าย” ทำงานร่วมกัน เพื่อกระจายมูลค่าตามกฎ"},{q:"Web4.0 ต่างจาก Web3 อย่างไร?",a:"Web3 เน้นเรื่อง “ความเป็นเจ้าของสินทรัพย์” ส่วน Web4.0 เน้น “ความร่วมมือระดับเครือข่ายขนาดใหญ่” และ “การรันอัตโนมัติด้วยกฎ”"},{q:"WANT กับ XANT ต่างกันอย่างไร?",a:"WANT คือโทเค็นของระบบนิเวศและหน่วยชำระบัญชี ส่วน XANT คือเครดิตเริ่มต้นสำหรับการเปิดใช้งาน engine"},{q:"ทำไมต้องย้ำ All-on-chain?",a:"เพราะการคำนวณ การแจกจ่าย และการ Burn ถูกทำบนเชน ตรวจสอบได้ และ (ตามกฎหลัก) เปลี่ยนยาก/ไม่สามารถแก้ตามอำเภอใจ"},{q:"มีสิทธิ์ “ผู้มีอำนาจสูงสุด” ไหม?",a:"ไม่มี กฎหลักรันอัตโนมัติบนเชน ไม่พึ่งการแทรกแซงจากมนุษย์"},{q:"engine (เครื่องยนต์คอมพิวเตอร์) คืออะไร?",a:"เครื่องมือพื้นฐานที่ใช้สร้าง WANT และเป็น “ใบรับรอง” ของความสามารถในการสร้างรายได้ (Capacity)"},{q:"ทำไมต้องมีการบำรุงรักษา?",a:"เพื่อให้ engine อยู่ในสถานะทำงาน หากไม่บำรุงหรือหมดอายุ จะเสียสิทธิ์รับรายได้"},{q:"ค่าบำรุงรักษาคิดอย่างไร?",a:"โดยทั่วไปคิดเป็น 1% ต่อเดือนของ WANT ที่เกี่ยวข้องกับ engine (ตามกฎในคอนแทรกต์)"},{q:"พลังประมวลผลที่ “มีผล” คืออะไร?",a:"นับเฉพาะ engine ที่กำลังรันอยู่ บำรุงรักษาแล้ว และยังไม่หมดอายุเท่านั้น"},{q:"“ที่อยู่ที่มีผล/Active Address” คืออะไร?",a:"ที่อยู่ที่ถือและรัน engine อย่างน้อย 1 ตัวตามเกณฑ์ที่กำหนด"},{q:"ทำไมไม่ใช้ “จำนวนสมัครสมาชิก/ลงทะเบียน” เป็นตัวนับ?",a:"เพราะลงทะเบียนปลอมได้ แต่การรัน engine มีต้นทุนจริง ระบบจึงนับเฉพาะการมีส่วนร่วมจริง"},{q:"เป็นระบบรวมศูนย์ไหม?",a:"การชำระบัญชีและการแจกจ่ายรายได้ถูกดำเนินการโดยกฎ on-chain"},{q:"ต้องทำ KYC ไหม?",a:"ระดับโปรโตคอลไม่บังคับ แต่อาจมีข้อกำหนดด้าน compliance ที่จุดเข้า (เช่น แพลตฟอร์ม) บางแห่ง"},{q:"คนทั่วไปเข้าร่วมได้ไหม?",a:"ได้ เริ่มจาก engine ขนาดเล็กหรือ engine ทดลองได้"},{q:"คนเข้าก่อน/เข้าทีหลังต่างกันอย่างไร?",a:"ช่วงต้นเน้น “วางโครงสร้าง” ช่วงหลังเน้น “ประสิทธิภาพและสเกล”"}],revenue:[{q:"ทำไมช่วงแรกผลตอบแทนดูช้า?",a:"รายได้แบบสแตติกเป็นเส้นโค้ง “ทบต้น” (ช่วงต้นค่อยๆ ไป ช่วงหลังเร่ง) ส่วนรายได้แบบไดนามิกมักเป็นกระแสเงินสดที่มาเร็วกว่า"},{q:"สแตติกช้าเป็นข้อบกพร่องของระบบไหม?",a:"ไม่ใช่ เป็นธรรมชาติของการทบต้น: ช่วงต้นแบน ช่วงหลังเร่งขึ้น"},{q:"รายได้แบบไดนามิกมีอะไรบ้าง?",a:"เช่น รางวัลการเติบโตของเครือข่าย, รางวัลส่วนต่างตาม Star Tier, และเงินปันผลจากค่าธรรมเนียมรวมของระบบ"},{q:"รายได้ไดนามิกจ่ายรายวันไหม?",a:"จ่ายได้รายวันเมื่อเครือข่ายมีผล และ Capacity ของคุณสามารถ “รับจ่าย/Carry” ได้"},{q:"เป็นแชร์ลูกโซ่ไหม?",a:"ไม่ ระบบอิง “ที่อยู่ที่มีผลและการมีส่วนร่วมจริง” ไม่ใช่จำนวนการลงทะเบียน"},{q:"ทำไมยอดที่เข้ามา (เครดิต) ถึงน้อย?",a:"มักเกิดจากชนเพดานไดนามิกต่อวัน หรือ Capacity ไม่พอสำหรับการ Carry"},{q:"เพดานไดนามิกต่อวันคืออะไร?",a:"ระบบจำกัดจำนวนรายได้ไดนามิกสูงสุดที่สามารถถูกเครดิตต่อวัน"},{q:"เพดานคำนวณอย่างไร?",a:"สแตติกต่อวัน × 1.5 × ค่าสัมประสิทธิ์เอกลักษณ์"},{q:"ค่าสัมประสิทธิ์เอกลักษณ์คืออะไร?",a:"ขึ้นกับ engine ระดับสูงสุดที่คุณถือและกำลังรันอยู่"},{q:"การอัปเกรดมีประโยชน์อะไร?",a:"เพิ่มสแตติกต่อวัน และเพิ่มเพดานรับรายได้ไดนามิก (Capacity/Carry limit) ไปพร้อมกัน"},{q:"Burn ที่เกิดขึ้น “เอาคืน” ได้ไหม?",a:"ไม่ได้ เพื่อหลีกเลี่ยงการทำอาร์บิทราจภายหลังและรักษาความยุติธรรมของกฎ"},{q:"Burn คือการ “โดนปรับ” ไหม?",a:"ไม่ใช่ค่าปรับ แต่คือการทำให้ “ส่วนที่เกิน Capacity” เป็นโมฆะโดยอัตโนมัติ"},{q:"Burn จะเพิ่มขึ้นได้ไหม?",a:"ได้ หากเครือข่ายโตเร็วกว่าการขยาย Capacity"},{q:"ลด Burn ได้อย่างไร?",a:"อัปเกรด Capacity ให้ทันการเติบโตของเครือข่าย, รักษา engine ให้อยู่สถานะทำงาน, และติดตามการแจ้งเตือน/เพดาน"},{q:"โฟกัสเฉพาะไดนามิกได้ไหม?",a:"ได้ แต่โดยทั่วไปการผสมสแตติก+ไดนามิกมักเสถียรกว่าในระยะยาว"},{q:"โฟกัสเฉพาะสแตติกได้ไหม?",a:"ได้ แต่จังหวะจะช้ากว่า และอาจพลาดเลเวอเรจจากไดนามิก"},{q:"เมื่อไหร่ควรรีอินเวสต์?",a:"ตอนที่ Capacity ยังเล็ก และเครือข่ายอยู่ในช่วงเติบโต"},{q:"เมื่อไหร่ควรถอน?",a:"ขึ้นกับกระแสเงินสดส่วนบุคคลและระดับความเสี่ยงที่รับได้"},{q:"สนับสนุนการถือยาวไหม?",a:"กฎเอื้อให้คนที่อยู่ระยะยาว แต่ไม่ได้บังคับ"},{q:"รายได้เสถียรไหม?",a:"ไม่มีการรับประกัน รายได้ขึ้นกับกฎและพฤติกรรมของผู้เข้าร่วม"}],organization:[{q:"“เครือข่าย 20 เจเนอเรชัน” (20-generation) คืออะไร?",a:"โปรโตคอลนับความลึกของเครือข่ายที่มีผลลงไปด้านล่างสูงสุด 20 รุ่น"},{q:"ทำไมต้องจำกัดความลึก/เลเวล?",a:"เพื่อป้องกันไม่ให้ส่วนต่าง (差额/ความต่างชั้น) สะสมแบบไร้ขีดจำกัดจนทำให้ระบบอินเซนทีฟเสียเสถียร"},{q:"การทำหลายไลน์มีข้อดีอะไร?",a:"ลดความเสี่ยงจากไลน์เดียว และเพิ่มโอกาสในการขึ้น Star Tier/เก็บส่วนต่าง"},{q:"“ส่วนต่าง” คืออะไร?",a:"กลไกการจัดสรร “ช่องว่างของรายได้” ระหว่าง Star Tier ที่ต่างกัน ตามกฎของโปรโตคอล"},{q:"มีโบนัสระดับเดียวกัน (peer) ไหม?",a:"ขึ้นกับกฎในคอนแทรกต์ โดยทั่วไปจะจำกัดแค่บางรุ่น (เช่น รุ่นที่ 1)"},{q:"“ปันผลย้อนลำดับ” คืออะไร?",a:"กลไกที่จ่ายผลตอบแทนตามลำดับย้อนกลับตามกฎ on-chain"},{q:"จะเป็น Star ได้อย่างไร?",a:"ต้องมีจำนวนที่อยู่ที่มีผล, ผลงาน (performance), และ Capacity ของตัวเองถึงเกณฑ์"},{q:"Star ที่สูงขึ้นดีกว่าเสมอไหม?",a:"Tier ที่สูงขึ้นมักได้เปรียบกว่า แต่ “ความรับผิดชอบในการ Carry” และเงื่อนไข Capacity ก็สูงขึ้นด้วย"},{q:"ต้องทำออฟไลน์/พาคนมาเองไหม?",a:"ไม่จำเป็น ทำผ่านออนไลน์ คอนเทนต์ และการทำคอมมูนิตี้ก็ได้"},{q:"T1 engine มีไว้ทำอะไร?",a:"เพื่อลดบาเรียร์ในการเริ่มต้น และช่วยการ onboarding/แปลงผู้สนใจให้ใช้งานจริง"},{q:"T1 ถูกเอาไปฟาร์มได้ไหม?",a:"ถูกจำกัดด้วยผลตอบแทนต่ำและรอบสั้น ทำให้ฟาร์มให้คุ้มได้ยาก"},{q:"“แนะนำแบบมีผล” ตัดสินอย่างไร?",a:"ดูว่าบัญชีที่แนะนำ “รัน engine จริง” และกลายเป็นที่อยู่ที่มีผลหรือไม่"},{q:"ให้/โอน engine ให้ดาวน์ไลน์ได้ไหม?",a:"ทำได้ แต่ต้องอยู่ภายใต้กฎ Capacity/Carry ของโปรโตคอล"},{q:"ทีมใหญ่ขึ้นแปลว่ากำไรมากขึ้นอัตโนมัติไหม?",a:"ไม่ หากคุณไม่อัปเกรด Capacity ให้ทัน ส่วนเกินที่รับไม่ไหวอาจถูก Burn/กลายเป็นโมฆะ"},{q:"เครือข่ายใหญ่ขึ้น = แรงกดดันมากขึ้นไหม?",a:"ใช่ เพราะภาระการ Carry รายได้ไดนามิกจะเพิ่มตามเครือข่าย"},{q:"อะไรสำคัญที่สุดในการเติบโต?",a:"โครงสร้างก่อน, Capacity ถัดมา, สเกลเป็นลำดับท้าย"},{q:"เข้าทีหลังก็ยังมีโอกาสไหม?",a:"มี เมื่อระบบเข้าสู่ช่วงสุกงอม อัตราการแปลงอาจสูงขึ้น"},{q:"วาฬกับรายย่อย ใครได้เปรียบกว่า?",a:"วาฬได้เปรียบด้านทุน ส่วนรายย่อยได้เปรียบด้านการลงมือทำและความคล่องตัว"},{q:"ทำข้ามภูมิภาคได้ไหม?",a:"ได้ ระบบ All-on-chain แทบไม่ติดข้อจำกัดด้านภูมิศาสตร์"},{q:"มีแนวทางสื่อสารแบบเป็นทางการไหม?",a:"ควรยึดตามประกาศ/เอกสารทางการ และแนวทางของอคาเดมี (ถ้ามี)"},{q:"มีเงินสนับสนุนทีมไหม?",a:"ถ้ามี จะยึดตามกฎของ incentive pool และประกาศ"},{q:"อันดับ (ranking) คำนวณอย่างไร?",a:"คำนวณอัตโนมัติจากข้อมูล on-chain"},{q:"รางวัลมาจากไหน?",a:"มาจาก incentive pool เฉพาะ และไม่ลดทอนผลลัพธ์หลัก"},{q:"กันการโกงอย่างไร?",a:"ใช้การวิเคราะห์ความเชื่อมโยงของเงินทุน, การตรวจสอบ Capacity, และการติดตามบนเชน"},{q:"WANT ที่ถูก Burn ไปไหน?",a:"ถูก Burn บนเชนตามกฎ และไม่เข้าบัญชีส่วนบุคคลใดๆ"}],risk:[{q:"Burn ตรวจสอบบนเชนได้ไหม?",a:"ได้ ตรวจสอบได้อย่างโปร่งใสบนเชน"},{q:"ทีม/โปรเจกต์ได้รายได้จากอะไร?",a:"ไม่ใช่การกักตุนเหรียญ แต่จากการเติบโตของระบบนิเวศและส่วนแบ่งการใช้งาน"},{q:"กฎสามารถถูกเปลี่ยนแบบเงียบๆ ได้ไหม?",a:"กฎหลักเป็น on-chain และไม่ควรถูกเปลี่ยนตามอำเภอใจ หากมีการเปลี่ยนต้องผ่านเส้นทางธรรมาภิบาลที่กำหนด"},{q:"พารามิเตอร์ปรับได้ไหม?",a:"ได้เฉพาะผ่าน governance หรือเส้นทางอัปเกรดที่กำหนดไว้ล่วงหน้า"},{q:"มีความเสี่ยง rug pull ไหม?",a:"ดีไซน์ลดความเสี่ยงจากคน แต่ไม่สามารถลบความเสี่ยงด้านตลาดได้"},{q:"คอนแทรกต์ผ่านการ audit ไหม?",a:"โปรดตรวจสอบประกาศ/เอกสารทางการ"},{q:"ใครกำหนดราคาโทเค็น?",a:"ตลาด (อุปสงค์-อุปทาน)"},{q:"ทีมควบคุมหรือการันตีราคาไหม?",a:"ไม่สัญญาและไม่ควบคุมราคา"},{q:"ทำไมต้องมีเพดาน (cap)?",a:"เพื่อความเสถียรของระบบ และกันพฤติกรรมสุดโต่งที่ทำให้แรงจูงใจพัง"},{q:"เพดานจำกัดรายได้ไหม?",a:"เพดานจำกัด “การจ่ายที่เกิน Capacity” เพื่อไม่ให้ระบบ overload"},{q:"ถ้าไม่มีเพดานจะเกิดอะไรขึ้น?",a:"อาจดูดีระยะสั้น แต่เสี่ยงพังระยะยาว"},{q:"มีโหวตธรรมาภิบาลไหม?",a:"เมื่อมีการเปิดใช้โมดูล governance ก็จะเริ่มได้"},{q:"กฎใช้กับทุกคนเท่ากันไหม?",a:"ใช่ กฎถูกบังคับใช้อย่างสม่ำเสมอ"},{q:"มีการแทรกแซงการชำระบัญชีด้วยคนได้ไหม?",a:"ไม่ได้ การชำระบัญชีเป็น rule-based และไม่พึ่งงาน manual"},{q:"การถอนถูกจำกัดได้ไหม?",a:"ขึ้นกับกฎของโปรโตคอลและสภาพคล่อง"},{q:"ทำไมมีค่าธรรมเนียมธุรกรรม?",a:"เพื่อการดำเนินงาน อินเซนทีฟ และการควบคุมความเสี่ยง"},{q:"การกระจายค่าธรรมเนียมโปร่งใสไหม?",a:"โปร่งใส เป็นการกระจายตามกฎและตรวจสอบได้บนเชน"},{q:"มีโอกาส “ยักยอก” กองทุนพูลไหม?",a:"กระแสเงินหลักถูกกำหนดและรันโดยคอนแทรกต์"},{q:"โปรโตคอลจะไปได้ไกลแค่ไหน?",a:"ขึ้นกับการรันกฎและพฤติกรรมของผู้เข้าร่วม"},{q:"มีความเสี่ยงล้มเหลวไหม?",a:"มี ระบบในตลาดทุกแบบมีความเสี่ยง"},{q:"สนับสนุนให้เข้าร่วมอย่างมีเหตุผลไหม?",a:"ใช่ กฎเองคือ “การเปิดเผยความเสี่ยง”"},{q:"เหมาะกับทุกคนไหม?",a:"ไม่ เหมาะกับผู้ที่เข้าใจและยอมรับกฎได้เท่านั้น"},{q:"ทำไมไม่สัญญาเรื่องอนาคต?",a:"เพราะผลลัพธ์ถูกกำหนดด้วยกฎ ไม่ใช่คำสัญญา"},{q:"สรุปในประโยคเดียว?",a:"แทนคำสัญญาด้วยกฎ และแทนจินตนาการด้วยการลงมือทำ"}],conclusion:[{q:"แก่นที่สุดในประโยคเดียว?",a:"“เครือข่ายกำหนดผลลัพธ์ และ Capacity กำหนดขีดจำกัดการ Carry”"},{q:"คุณค่าหลักคืออะไร?",a:"กฎโปร่งใส และการรันเป็นแบบกำหนดได้ (deterministic)"},{q:"ความผิดพลาดที่พบบ่อยที่สุด?",a:"ขยายเครือข่ายอย่างเดียว แต่ไม่อัปเกรด Capacity"},{q:"กลยุทธ์ที่เสถียรที่สุด?",a:"รีอินเวสต์สแตติก + ขยายไดนามิก"},{q:"เมื่อไหร่ควรหยุด?",a:"เมื่อรู้สึกว่า “ยังไม่เข้าใจกฎ”"},{q:"เมื่อไหร่ควรเร่ง?",a:"เมื่อ Capacity ที่อัปเกรดไว้ “นำหน้า” การเติบโตของเครือข่าย"},{q:"ระบบไม่ชอบอะไร?",a:"การเก็งกำไร และการ “แก้ทีหลัง”"},{q:"ระบบให้รางวัลกับอะไร?",a:"การออกแบบล่วงหน้า และการลงมือทำอย่างสม่ำเสมอ"},{q:"สิ่งที่ “ขายจริงๆ” คืออะไร?",a:"ไม่ใช่เหรียญ แต่คือ “ชุดกฎที่รันได้จริง”"},{q:"สรุปบทสนทนายามค่ำ?",a:"ไม่สัญญาอนาคต รันตามกฎเท่านั้น"},{q:"W/A เหมือนอะไร?",a:"ระบบปฏิบัติการเศรษฐกิจที่รันอัตโนมัติ"},{q:"บทบาทของผู้เข้าร่วม?",a:"ผู้รันกฎ ไม่ใช่ผู้ไป “ทวงผลลัพธ์”"},{q:"ความเป็นระยะยาวอยู่ตรงไหน?",a:"ความสนุกระยะสั้นถูกกดด้วยกฎ และให้รางวัลกับวินัยระยะยาว"},{q:"ถ้าใครสักคนลังเล?",a:"มักหมายถึงเขายังไม่พร้อมจะเข้าใจกฎ"},{q:"การตัดสินใจสุดท้าย?",a:"อยู่ที่คุณเสมอ"}]}},ip={title:"Hỏi & Đáp",subtitle:"Giao Thức W/A: Tóm Tắt Rủi Ro & FAQ Đầy Đủ",backToHome:"Về Trang Chủ",searchPlaceholder:"Tìm kiếm câu hỏi hoặc câu trả lời…",riskSummary:{title:"⚠️ Tóm Tắt Rủi Ro Điều Hành",items:[{label:"Bản chất của giao thức",text:"W/A là giao thức Web4 “All-on-chain”, không phải “công ty”. Giao thức không custody tài sản, không ra quyết định theo kiểu tùy nghi, và không cam kết bất kỳ kết quả nào."},{label:"Bản chất của lợi nhuận",text:"Không có lợi nhuận cố định/ổn định/được đảm bảo. Mọi phân phối chỉ phát sinh từ các quy tắc on-chain được định nghĩa trước và mức độ tham gia thực sự của người dùng."},{label:"Rủi ro cốt lõi",text:"Biến động thị trường, rủi ro thiết kế/triển khai giao thức, rủi ro hành vi & mức độ chấp nhận của người dùng, và bất định về quy định/pháp lý theo từng khu vực."},{label:"Kiểm soát & quản trị",text:"Quy tắc cốt lõi là bất biến (immutable) sau khi lên chain. Không có backend admin hay quyền “siêu quản trị” để can thiệp con người hoặc ghi đè quy tắc."},{label:"Kết luận",text:"W/A thay “niềm tin vào con người” bằng “thực thi mã theo tính quyết định”. Rủi ro không biến mất, mà được công khai và mã hóa trực tiếp vào quy tắc giao thức."}]},disclaimer:"💡 Nội dung này chỉ nhằm giải thích cơ chế và làm rõ quy tắc, không phải lời hứa lợi nhuận. Tham số thực tế tuân theo hợp đồng on-chain.",categories:{basic:"Cơ bản",revenue:"Lợi nhuận & nhịp độ",organization:"Tổ chức & mở rộng",risk:"Rủi ro & kiểm soát rủi ro",conclusion:"Tóm tắt nguyên tắc"},totalQuestions:"Tổng {{count}} câu hỏi",noResults:"Không tìm thấy câu hỏi phù hợp",faqs:{basic:[{q:"W/A là gì?",a:"Một hệ thống Web4 “All-on-chain” kết nối “công suất tính toán (engine)” với “traffic mạng”, và phân phối giá trị theo các quy tắc."},{q:"Web4 khác Web3 ở điểm nào?",a:"Web3 tập trung vào “quyền sở hữu tài sản”, còn Web4 tập trung vào “hợp tác quy mô lớn theo mạng” và “thực thi tự động theo luật chơi”."},{q:"WANT và XANT khác nhau thế nào?",a:"WANT là token hệ sinh thái và đơn vị thanh toán/đối soát. XANT là credit/điểm khởi tạo để kích hoạt engine."},{q:"Vì sao nhấn mạnh All-on-chain?",a:"Vì tính toán, phân phối và Burn đều chạy on-chain: minh bạch, kiểm chứng được, và (đối với luật cốt lõi) khó/không thể sửa tùy ý."},{q:"Có “siêu quyền hạn” (admin key) không?",a:"Không. Quy tắc cốt lõi tự chạy on-chain, không phụ thuộc can thiệp con người."},{q:"Engine là gì?",a:"Đơn vị cơ bản để tạo WANT, đồng thời là “chứng chỉ” về Capacity (khả năng nhận/Carry lợi nhuận)."},{q:"Tại sao cần bảo trì?",a:"Bảo trì để engine luôn ở trạng thái hoạt động. Engine không bảo trì hoặc hết hạn sẽ mất quyền nhận lợi nhuận."},{q:"Phí bảo trì tính thế nào?",a:"Thông thường là 1%/tháng trên lượng WANT liên quan đến engine (theo quy tắc hợp đồng)."},{q:"Công suất tính toán “hiệu lực” là gì?",a:"Chỉ engine đang chạy, đã bảo trì và chưa hết hạn mới được tính."},{q:"“Địa chỉ hiệu lực/Active Address” là gì?",a:"Địa chỉ sở hữu và vận hành ít nhất 1 engine theo ngưỡng quy định."},{q:"Vì sao không đếm số lượt đăng ký?",a:"Đăng ký có thể “ảo”, còn chạy engine có chi phí thật. Hệ thống chỉ công nhận sự tham gia thật."},{q:"Đây có phải vận hành tập trung không?",a:"Không. Đối soát và phân phối lợi nhuận được cưỡng chế bằng quy tắc on-chain."},{q:"Có bắt buộc KYC không?",a:"Ở cấp giao thức thì không bắt buộc, nhưng một số cổng vào (platform) có thể yêu cầu tuân thủ."},{q:"Người mới có thể tham gia không?",a:"Có. Bạn có thể bắt đầu từ engine nhỏ hoặc engine trải nghiệm."},{q:"Người tham gia sớm và muộn khác nhau gì?",a:"Giai đoạn sớm ưu tiên “xây cấu trúc”, giai đoạn muộn ưu tiên “hiệu suất & quy mô”."}],revenue:[{q:"Vì sao giai đoạn đầu lợi nhuận trông “chậm”?",a:"Lợi nhuận tĩnh đi theo đường cong lãi kép (đầu chậm, về sau tăng tốc). Lợi nhuận động thường tạo dòng tiền nhanh hơn."},{q:"Lợi nhuận tĩnh chậm có phải lỗi thiết kế không?",a:"Không. Đó là bản chất của lãi kép: giai đoạn đầu “phẳng”, về sau mới “bật lên”."},{q:"Lợi nhuận động gồm những gì?",a:"Ví dụ: thưởng tăng trưởng mạng, thưởng chênh lệch theo Star Tier, và cổ tức từ tổng phí của toàn mạng."},{q:"Lợi nhuận động có trả hằng ngày không?",a:"Có thể trả theo ngày nếu mạng hợp lệ và Capacity của bạn đủ để “nhận/Carry”."},{q:"Đây có phải mô hình đa cấp không?",a:"Không. Hệ thống dựa trên “địa chỉ hiệu lực” và đóng góp thực, không phải số lượt đăng ký."},{q:"Vì sao số tiền được ghi có (credit) ít?",a:"Thường do chạm “cap động theo ngày” hoặc Capacity không đủ để Carry hết."},{q:"Cap động theo ngày là gì?",a:"Quy tắc giới hạn mức lợi nhuận động tối đa có thể được credit mỗi ngày."},{q:"Cap được tính như thế nào?",a:"Sản lượng tĩnh/ngày × 1.5 × hệ số định danh."},{q:"Hệ số định danh là gì?",a:"Hệ số nhân được quyết định bởi engine tier cao nhất bạn đang nắm giữ và đang vận hành."},{q:"Nâng cấp có tác dụng gì?",a:"Vừa tăng sản lượng tĩnh/ngày, vừa tăng trần nhận lợi nhuận động (Capacity/Carry limit)."},{q:"Có thể “bù lại” phần đã Burn về sau không?",a:"Không. Điều này nhằm tránh arbitrage sau và giữ sự công bằng của quy tắc."},{q:"Burn có phải là bị “phạt” không?",a:"Không phải phạt. Phần vượt quá Capacity sẽ bị vô hiệu hóa tự động theo quy tắc."},{q:"Burn có thể tăng không?",a:"Có, nếu mạng tăng trưởng nhanh hơn tốc độ mở rộng Capacity."},{q:"Làm sao để giảm Burn?",a:"Nâng Capacity đồng bộ với tăng trưởng mạng, giữ engine ở trạng thái hoạt động, và theo dõi cảnh báo/cap."},{q:"Chỉ tập trung lợi nhuận động được không?",a:"Được, nhưng về dài hạn chiến lược kết hợp tĩnh + động thường ổn định hơn."},{q:"Chỉ tập trung lợi nhuận tĩnh được không?",a:"Được, nhưng nhịp độ sẽ chậm hơn và dễ bỏ lỡ đòn bẩy từ lợi nhuận động."},{q:"Khi nào nên tái đầu tư?",a:"Khi Capacity còn nhỏ và mạng đang ở pha tăng trưởng."},{q:"Khi nào nên rút?",a:"Tùy nhu cầu dòng tiền cá nhân và mức chịu rủi ro của bạn."},{q:"Có khuyến khích nắm giữ dài hạn không?",a:"Quy tắc có lợi cho người tham gia dài hạn, nhưng không bắt buộc."},{q:"Lợi nhuận có ổn định không?",a:"Không có cam kết lợi nhuận. Kết quả phụ thuộc vào quy tắc và hành vi của người tham gia."}],organization:[{q:"“Mạng 20 thế hệ (20-generation)” là gì?",a:"Giao thức chỉ đếm độ sâu mạng hiệu lực theo chiều “đi xuống” tối đa 20 thế hệ."},{q:"Vì sao phải giới hạn độ sâu/cấp?",a:"Để tránh chênh lệch (gap) tích lũy vô hạn làm hệ thống incentive mất ổn định."},{q:"Lợi ích của việc làm nhiều nhánh (multi-line)?",a:"Giảm rủi ro phụ thuộc một nhánh, đồng thời tăng cơ hội đạt Star Tier và “giữ” được chênh lệch."},{q:"“Chênh lệch” là gì?",a:"Cơ chế phân bổ phần chênh lệch lợi nhuận giữa các Star Tier khác nhau theo quy tắc giao thức."},{q:"Có thưởng “cùng cấp” (peer) không?",a:"Tùy quy tắc hợp đồng; thường chỉ áp dụng đến một số thế hệ nhất định (ví dụ: thế hệ 1)."},{q:"“Phân phối ngược” là gì?",a:"Cơ chế trả thưởng theo thứ tự ngược, được thực thi theo quy tắc on-chain."},{q:"Làm sao để lên Star Tier?",a:"Cần số lượng địa chỉ hiệu lực, hiệu suất (performance), và yêu cầu Capacity của chính bạn đạt ngưỡng."},{q:"Star Tier cao hơn luôn tốt hơn?",a:"Tier cao thường có lợi hơn, nhưng trách nhiệm Carry và yêu cầu Capacity cũng cao hơn."},{q:"Có bắt buộc làm offline kéo người không?",a:"Không bắt buộc. Bạn có thể làm online, làm nội dung, hoặc vận hành cộng đồng."},{q:"Engine T1 dùng để làm gì?",a:"Hạ rào cản tham gia và tăng hiệu quả onboarding/chuyển đổi."},{q:"T1 có thể bị “farm” không?",a:"Do lợi nhuận thấp và chu kỳ ngắn, việc farm hiệu quả sẽ khó."},{q:"Thế nào là “giới thiệu hiệu lực”?",a:"Xem tài khoản được giới thiệu có vận hành engine thật và trở thành địa chỉ hiệu lực hay không."},{q:"Có thể tặng/chuyển engine cho downline không?",a:"Có, nhưng phải tuân theo quy tắc Capacity/Carry của giao thức."},{q:"Tổ chức lớn hơn = lợi nhuận nhiều hơn tự động?",a:"Không. Nếu bạn không nâng Capacity theo kịp, phần vượt khả năng nhận có thể bị Burn/vô hiệu."},{q:"Mạng lớn hơn thì áp lực cũng lớn hơn?",a:"Có. Trách nhiệm Carry lợi nhuận động sẽ tăng theo mạng."},{q:"Điều quan trọng nhất khi tăng trưởng là gì?",a:"Cấu trúc trước, Capacity thứ hai, quy mô là cuối cùng."},{q:"Người tham gia muộn còn cơ hội không?",a:"Có. Ở giai đoạn trưởng thành, hiệu quả chuyển đổi có thể cao hơn."},{q:"Cá voi vs vốn nhỏ: ai lợi thế hơn?",a:"Cá voi mạnh về vốn; vốn nhỏ mạnh về tốc độ triển khai và tính linh hoạt."},{q:"Có thể làm xuyên khu vực không?",a:"Có. Hệ thống All-on-chain gần như không bị giới hạn bởi địa lý."},{q:"Có guideline truyền thông chính thức không?",a:"Hãy bám theo công bố/tài liệu chính thức và guideline của academy (nếu có)."},{q:"Có trợ cấp cho team không?",a:"Nếu có, sẽ theo quy tắc incentive pool và thông báo."},{q:"Ranking được tính như thế nào?",a:"Tự động tính dựa trên dữ liệu on-chain."},{q:"Phần thưởng đến từ đâu?",a:"Từ incentive pool riêng, không làm giảm “đầu ra” chính."},{q:"Ngăn gian lận như thế nào?",a:"Phân tích tương quan dòng tiền, kiểm chứng Capacity, và theo dõi on-chain."},{q:"WANT bị Burn đi đâu?",a:"Bị Burn on-chain theo quy tắc và không đi vào bất kỳ tài khoản cá nhân nào."}],risk:[{q:"Có thể kiểm chứng Burn on-chain không?",a:"Có. Mọi Burn đều minh bạch và kiểm chứng được on-chain."},{q:"Team/dự án hưởng lợi từ đâu?",a:"Không phải từ việc “gom coin”, mà từ tăng trưởng hệ sinh thái và thị phần sử dụng."},{q:"Quy tắc có thể bị đổi “lén” không?",a:"Luật cốt lõi là on-chain và bất biến. Nếu có thay đổi, phải đi qua cơ chế quản trị/upgrade đã được định nghĩa."},{q:"Có thể điều chỉnh tham số không?",a:"Chỉ có thể qua governance hoặc lộ trình upgrade định trước."},{q:"Có rủi ro rug pull không?",a:"Thiết kế giảm rủi ro “con người can thiệp”, nhưng không thể loại bỏ rủi ro thị trường."},{q:"Hợp đồng đã audit chưa?",a:"Vui lòng theo dõi công bố/tài liệu chính thức."},{q:"Ai quyết định giá token?",a:"Thị trường (cung – cầu)."},{q:"Team có thao túng hoặc cam kết giá không?",a:"Không cam kết và không kiểm soát giá."},{q:"Vì sao cần cap (giới hạn)?",a:"Để giữ ổn định hệ thống, tránh hành vi cực đoan làm incentive sụp."},{q:"Cap có “giới hạn lợi nhuận” không?",a:"Cap giới hạn phần trả vượt quá Capacity để tránh quá tải hệ thống."},{q:"Nếu không có cap thì sao?",a:"Ngắn hạn có thể “đẹp”, nhưng dài hạn dễ dẫn tới sụp đổ."},{q:"Có bỏ phiếu governance không?",a:"Khi module governance được triển khai/đưa vào hoạt động thì sẽ có."},{q:"Quy tắc có áp dụng công bằng không?",a:"Có. Quy tắc áp dụng nhất quán cho mọi người."},{q:"Có thể can thiệp thủ công vào đối soát không?",a:"Không. Đối soát là rule-based và không phụ thuộc thao tác thủ công."},{q:"Việc rút có thể bị giới hạn không?",a:"Tùy quy tắc giao thức và điều kiện thanh khoản."},{q:"Vì sao có phí giao dịch?",a:"Để vận hành, tạo incentive và kiểm soát rủi ro."},{q:"Phân phối phí có minh bạch không?",a:"Minh bạch. Phân phối theo quy tắc và có thể kiểm chứng on-chain."},{q:"Pool quỹ có thể bị lạm dụng không?",a:"Dòng tiền cốt lõi được thực thi theo quy tắc bằng hợp đồng."},{q:"Giao thức có thể đi xa tới đâu?",a:"Phụ thuộc vào việc thực thi quy tắc và hành vi người tham gia."},{q:"Có rủi ro thất bại không?",a:"Có. Bất kỳ hệ thống thị trường nào cũng có rủi ro."},{q:"Có khuyến nghị tham gia “hợp lý” không?",a:"Có. Bản thân quy tắc đã là “công bố rủi ro”."},{q:"Có phù hợp với tất cả mọi người không?",a:"Không. Chỉ phù hợp với người hiểu và chấp nhận được quy tắc."},{q:"Vì sao không hứa hẹn tương lai?",a:"Vì kết quả được quyết định bởi quy tắc, không phải lời hứa."},{q:"Tóm tắt một câu?",a:"Thay lời hứa bằng quy tắc, thay tưởng tượng bằng hành động."}],conclusion:[{q:"Cốt lõi một câu là gì?",a:"“Mạng quyết định đầu ra; Capacity quyết định giới hạn Carry.”"},{q:"Giá trị cốt lõi?",a:"Quy tắc minh bạch, thực thi theo tính quyết định."},{q:"Sai lầm phổ biến nhất?",a:"Chỉ mở rộng mạng nhưng không nâng Capacity."},{q:"Chiến lược ổn định nhất?",a:"Tái đầu tư tĩnh + mở rộng động."},{q:"Khi nào nên dừng?",a:"Khi bạn cảm thấy mình “chưa hiểu luật chơi”."},{q:"Khi nào nên tăng tốc?",a:"Khi nâng cấp Capacity của bạn đang “đi trước” tốc độ tăng trưởng của mạng."},{q:"Hệ thống không thích gì?",a:"Đầu cơ và “chữa cháy” sau."},{q:"Hệ thống thưởng gì?",a:"Thiết kế trước và thực thi nhất quán."},{q:"Thực ra “bán” cái gì?",a:"Không phải câu chuyện về coin, mà là một bộ quy tắc có thể thực thi."},{q:"Tóm tắt cuộc trò chuyện buổi tối?",a:"Không hứa tương lai. Chỉ thực thi quy tắc."},{q:"W/A giống gì?",a:"Một hệ điều hành kinh tế tự chạy."},{q:"Vai trò của người tham gia?",a:"Người thực thi quy tắc, không phải người “đòi kết quả”."},{q:"Tinh thần dài hạn nằm ở đâu?",a:"Niềm vui ngắn hạn bị “nén” bởi quy tắc; kỷ luật và sự bền bỉ dài hạn được thưởng."},{q:"Nếu ai đó do dự?",a:"Thường là dấu hiệu họ chưa sẵn sàng để hiểu quy tắc."},{q:"Quyết định cuối cùng?",a:"Luôn là bạn."}]}},op={title:"Q&A",subtitle:"W/A 프로토콜: 경영진 리스크 요약 & 전체 FAQ",backToHome:"홈으로",searchPlaceholder:"질문 또는 답변 검색…",riskSummary:{title:"⚠️ 경영진 리스크 요약(투자위원회용)",items:[{label:"프로토콜의 본질",text:"W/A는 “올온체인(All-on-chain)” Web4 프로토콜이며, 회사가 아닙니다. 자산을 수탁(custody)하지 않고, 재량적 결정을 내리지 않으며, 어떠한 결과도 약속하지 않습니다."},{label:"수익(리턴) 특성",text:"고정·안정·보장 수익은 존재하지 않습니다. 분배는 사전에 정의된 온체인 규칙과 참여자 행동에 의해서만 발생합니다."},{label:"핵심 리스크",text:"시장 변동성, 프로토콜 설계/실행 리스크, 사용자 행동 및 채택 리스크, 규제/관할권 불확실성."},{label:"통제/거버넌스",text:"핵심 규칙은 불변(Immutable)입니다. 관리자 백엔드/백도어/“슈퍼 관리자” 권한이 없으며, 정산을 사람 손으로 덮어쓸 수 없습니다."},{label:"결론",text:"W/A는 “사람에 대한 신뢰”를 “결정론적 코드 실행”으로 대체합니다. 리스크는 사라지는 것이 아니라, 규칙으로 명시되고 프로토콜에 의해 강제됩니다."}]},disclaimer:"💡 이 내용은 메커니즘 설명 및 규칙 명확화만을 위한 것이며 수익 약속이 아닙니다. 매개변수는 온체인 계약에 따릅니다.",categories:{basic:"기본 이해",revenue:"수익 & 타이밍",organization:"조직 & 확장",risk:"리스크 & 신뢰",conclusion:"핵심 요약"},totalQuestions:"총 {{count}}개 질문",noResults:"일치하는 질문이 없습니다",faqs:{basic:[{q:"W/A는 무엇인가요?",a:"올온체인 Web4 프로토콜입니다. 컴퓨팅 파워와 트래픽을 협업 방식으로 연결하고, 규칙에 따라 가치를 분배합니다."},{q:"Web4는 Web3와 무엇이 다른가요?",a:"Web3는 소유권/확권에 초점을 두고, Web4는 대규모 협업과 자동 실행에 초점을 둡니다."},{q:"WANT와 XANT의 차이는 무엇인가요?",a:"WANT는 생태계 토큰이자 정산 단위입니다. XANT는 컴퓨팅 엔진을 “점화”하기 위한 시드(Seed) 자격입니다."},{q:"왜 “올온체인(All-on-chain)”을 강조하나요?",a:"분배와 소각(또는 무효화)이 온체인에서 실행되며, 감사 가능하고 위·변조가 어렵기 때문입니다."},{q:"슈퍼 권한(관리자 키)이 있나요?",a:"없습니다. 핵심 컨트랙트는 사람 개입 없이 자동 실행됩니다."},{q:"컴퓨팅 엔진(Engine)이란 무엇인가요?",a:"WANT를 산출하는 기본 유닛입니다. 동시에 “수익을 받아낼 수 있는 캐파시티(수용능력)”를 나타내는 자격이기도 합니다."},{q:"왜 유지 관리(메인터넌스)가 필요한가요?",a:"유지 관리는 엔진을 활성 상태로 유지합니다. 미유지/만료된 엔진은 수익 자격을 잃습니다."},{q:"유지 관리 비용은 어떻게 계산되나요?",a:"매월, 엔진에 연결된 보유/락업 WANT의 1%가 유지 관리로 소모됩니다."},{q:"유효(Effective) 컴퓨팅 파워란?",a:"가동 중이고, 유지 관리가 되어 있으며, 만료되지 않은 엔진만 유효로 카운트됩니다."},{q:"활성 주소(Active Address)란?",a:"요구 티어 이상 엔진을 최소 1대 보유하고 실제로 가동 중인 주소입니다."},{q:"왜 “가입자 수”를 보지 않나요?",a:"가입은 조작이 가능하지만, 컴퓨팅 파워는 실비용이 듭니다. 프로토콜은 실제 참여를 지표로 봅니다."},{q:"중앙에서 운영하나요?",a:"아니요. 정산과 분배는 온체인 규칙으로 강제됩니다."},{q:"KYC가 필요한가요?",a:"프로토콜 레벨에서는 필수가 아니지만, 일부 진입 경로는 규정 준수를 요구할 수 있습니다."},{q:"일반 사용자도 참여할 수 있나요?",a:"가능합니다. 작은 캐파시티 또는 입문용 엔진부터 시작할 수 있습니다."},{q:"초기 참여자와 후기 참여자의 차이는?",a:"초기는 구조를 만드는 구간, 후기는 효율과 스케일에 강점이 있는 구간입니다."}],revenue:[{q:"왜 초기에 수익이 느린가요?",a:"정적 수익은 복리 곡선(초반 완만, 후반 가속)을 따릅니다. 동적 수익이 상대적으로 빠른 현금흐름이 되기 쉽습니다."},{q:"정적이 느린 건 설계 결함인가요?",a:"아니요. 복리의 성격상 초반은 평평하고 시간이 지날수록 커집니다."},{q:"동적 수익에는 무엇이 포함되나요?",a:"네트워크 성장 보상, 스타(등급) 차등 보상, 전체 수수료 배당 등이 포함됩니다."},{q:"동적 수익은 매일 정산되나요?",a:"네트워크가 유효하고, 내 캐파시티가 지급을 “받아낼 수” 있다면 일일 정산됩니다."},{q:"피라미드(다단계)인가요?",a:"아니요. 가입자 수가 아니라 유효 주소와 기여도에 기반합니다."},{q:"왜 적립(크레딧) 금액이 적게 보이나요?",a:"대부분 “일일 캡(상한)에 도달”하거나 “캐파시티 부족으로 전액을 수용하지 못함” 때문입니다."},{q:"일일 동적 캡(상한)이란?",a:"동적 수익으로 일일에 크레딧될 수 있는 최대 금액을 제한하는 규칙입니다."},{q:"캡은 어떻게 계산되나요?",a:"일일 정적 산출 × 1.5 × 신원(아이덴티티) 계수."},{q:"신원(아이덴티티) 계수란?",a:"보유하고 실제로 가동 중인 최고 티어 엔진으로 결정되는 배수입니다."},{q:"캐파시티를 업그레이드하는 이유는?",a:"정적 산출이 늘 뿐 아니라, 동적 수익을 “수용할 수 있는 한도(캐리 한도)”도 올라갑니다."},{q:"나중에 추가해서 ‘소각분’을 복구할 수 있나요?",a:"불가합니다. 사후 차익거래를 막고 규칙의 공정성을 유지하기 위함입니다."},{q:"소각(Burn)은 손실/벌금인가요?",a:"사람이 벌금을 매기는 것이 아닙니다. 캐파시티를 초과한 분이 규칙에 따라 자동 무효화됩니다."},{q:"소각이 증가할 수 있나요?",a:"네트워크 성장 속도가 캐파시티 확장보다 빠르면 증가할 수 있습니다."},{q:"소각을 줄이려면?",a:"네트워크 성장에 맞춰 캐파시티를 올리고, 엔진을 활성 상태로 유지하며, 캡 알림/경고를 확인하세요."},{q:"동적만 집중해도 되나요?",a:"가능하지만, 장기적으로는 정적+동적 혼합이 더 안정적인 경우가 많습니다."},{q:"정적만 집중해도 되나요?",a:"가능하지만 속도는 느리고, 동적 레버리지를 놓치기 쉽습니다."},{q:"언제 재투자가 유리한가요?",a:"캐파시티가 아직 작고 네트워크가 성장 국면일 때입니다."},{q:"언제 인출이 유리한가요?",a:"개인 현금흐름 필요와 리스크 선호에 맞춰 결정합니다."},{q:"장기 보유를 권장하나요?",a:"규칙은 장기 참여에 유리하지만, 강제는 없습니다."},{q:"수익이 안정적인가요?",a:"수익은 보장되지 않습니다. 결과는 규칙과 참여자 행동에 달려 있습니다."}],organization:[{q:"“20세대(20-generation) 네트워크” 캡이란?",a:"프로토콜은 아래 방향 유효 네트워크 깊이를 최대 20세대까지만 카운트합니다."},{q:"왜 깊이에 상한을 두나요?",a:"무한한 급차(차등)가 누적되어 인센티브가 불안정해지는 것을 막기 위해서입니다."},{q:"여러 라인을 만드는 장점은?",a:"단일 라인 리스크를 줄이고, 더 높은 스타 티어 달성 및 급차(차등) 확보 가능성을 높입니다."},{q:"급차(차등)란?",a:"서로 다른 스타 티어 간에 발생하는 보상 격차를 규칙에 따라 배분하는 메커니즘입니다."},{q:"평급(동일 등급) 보너스가 있나요?",a:"여부는 컨트랙트 규칙에 따르며, 보통 제한된 세대(예: 1세대)까지만 적용됩니다."},{q:"“역순 분배”란?",a:"온체인 규칙에 따라 지급 순서를 역순으로 배분하는 보상 메커니즘입니다."},{q:"스타 티어는 어떻게 달성하나요?",a:"유효 주소 수, 실적(퍼포먼스), 그리고 본인의 캐파시티 요건을 충족해야 합니다."},{q:"스타는 높을수록 항상 좋은가요?",a:"티어가 높을수록 유리하지만, 책임과 캐파시티 요구도 함께 커집니다."},{q:"오프라인 지인이/지추가 필수인가요?",a:"필수는 아닙니다. 온라인 채널, 콘텐츠, 커뮤니티 운영 등도 모두 가능합니다."},{q:"T1 엔진은 무엇을 위한 건가요?",a:"진입 장벽을 낮추고 온보딩/전환 효율을 높이기 위한 엔진입니다."},{q:"T1이 파밍될 수 있나요?",a:"낮은 수익·짧은 사이클로 파밍 비용을 높여, 효율적으로 파밍하기 어렵게 설계됩니다."},{q:"“유효 직추천”은 어떻게 판단하나요?",a:"추천된 계정이 실제로 엔진을 가동하고 유효 주소가 되었는지로 판단합니다."},{q:"다운라인에게 엔진을 선물할 수 있나요?",a:"가능합니다. 다만 프로토콜의 캐파시티/캐리 규칙 범위 내에서만 가능합니다."},{q:"조직이 커지면 자동으로 더 벌게 되나요?",a:"아닙니다. 본인 캐파시티를 함께 올리지 않으면 초과분이 소각/무효화될 수 있습니다."},{q:"네트워크가 커질수록 압박도 커지나요?",a:"네. 동적 수익을 “받아낼 책임(캐리 책임)”은 네트워크와 함께 커집니다."},{q:"성장에 가장 중요한 것은?",a:"구조가 먼저, 캐파시티가 다음, 규모는 마지막입니다."},{q:"후기 참여자도 기회가 있나요?",a:"있습니다. 성숙기에 들어서면 전환 효율이 더 높아질 수 있습니다."},{q:"고래 vs 소액, 누가 유리한가요?",a:"고래는 자본, 소액은 실행력이 강점이 될 수 있습니다."},{q:"지역을 넘어도 가능한가요?",a:"예. 올온체인 시스템은 지리적 제약이 거의 없습니다."},{q:"공식 메시지/가이드가 있나요?",a:"공식 공지/공개 자료 및 (있다면) 아카데미 가이드라인을 따르세요."},{q:"팀 보조금(서브시디)이 있나요?",a:"있다면 인센티브 풀 규칙과 공지로 결정됩니다."},{q:"랭킹은 어떻게 계산되나요?",a:"온체인 데이터를 기반으로 자동 계산됩니다."},{q:"인센티브는 어디서 나오나요?",a:"전용 인센티브 풀에서 지급되며, 메인 산출을 줄이지 않습니다."},{q:"부정행위는 어떻게 막나요?",a:"자금 상관 분석, 캐파시티 검증, 온체인 추적 등으로 방지합니다."},{q:"소각된 WANT는 어디로 가나요?",a:"규칙에 따라 온체인에서 소각되며, 어떤 개인 계정에도 들어가지 않습니다."}],risk:[{q:"소각은 온체인에서 확인할 수 있나요?",a:"네. 온체인에서 투명하게 확인할 수 있습니다."},{q:"프로젝트(팀)는 어떻게 이익을 얻나요?",a:"토큰을 쌓아두는 방식이 아니라, 생태계 성장과 시장 점유율 확대로부터입니다."},{q:"규칙을 몰래 바꿀 수 있나요?",a:"핵심 규칙은 온체인 후 불변입니다. 변경이 있다면 정의된 거버넌스 경로를 따라야 합니다."},{q:"파라미터는 조정할 수 있나요?",a:"거버넌스 또는 사전에 정의된 업그레이드 경로를 통해서만 가능합니다."},{q:"러그풀 리스크가 있나요?",a:"설계로 사람 개입 리스크는 줄였지만, 시장 리스크를 없앨 수는 없습니다."},{q:"컨트랙트 감사(Audit)는 되었나요?",a:"공식 공개를 확인해 주세요."},{q:"토큰 가격은 누가 결정하나요?",a:"시장입니다(수요와 공급)."},{q:"팀이 가격을 조작하나요?",a:"가격을 약속하지도, 통제하지도 않습니다."},{q:"왜 캡(상한)이 있나요?",a:"시스템 안정성을 위해서입니다. 극단적 행동으로 인센티브가 무너지는 것을 방지합니다."},{q:"캡이 수익을 제한하나요?",a:"캐파시티를 초과하는 “과부하 지급”을 제한하는 장치입니다."},{q:"캡이 없으면 어떻게 되나요?",a:"단기적으로는 좋아 보일 수 있지만, 장기적으로는 붕괴하기 쉽습니다."},{q:"거버넌스 투표가 있나요?",a:"거버넌스 모듈이 공개/가동되면 시작됩니다."},{q:"규칙은 모두에게 동일하게 적용되나요?",a:"네. 규칙은 일관되게 적용됩니다."},{q:"정산을 수동으로 덮어쓸 수 있나요?",a:"아니요. 정산은 룰 기반이며 사람 손에 의존하지 않습니다."},{q:"인출이 제한될 수 있나요?",a:"프로토콜 규칙과 유동성 조건에 따라 실행됩니다."},{q:"왜 거래 수수료가 있나요?",a:"운영, 인센티브, 리스크 컨트롤 재원으로 사용됩니다."},{q:"수수료 분배는 투명한가요?",a:"네. 룰 기반으로 분배되며 온체인에서 검증 가능합니다."},{q:"자금 풀을 유용할 수 있나요?",a:"핵심 자금 흐름은 컨트랙트가 사전에 정의된 규칙대로 집행합니다."},{q:"프로토콜은 어디까지 갈 수 있나요?",a:"규칙 실행력과 참여자 행동에 달려 있습니다."},{q:"실패 가능성이 있나요?",a:"있습니다. 어떤 시장 시스템이든 리스크는 존재합니다."},{q:"합리적인 참여를 권장하나요?",a:"네. 규칙 자체가 리스크 공지(디스클로저)입니다."},{q:"모든 사람에게 적합한가요?",a:"아니요. 규칙을 이해할 수 있는 사람에게 적합합니다."},{q:"왜 미래를 약속하지 않나요?",a:"결과는 약속이 아니라 규칙으로 결정되기 때문입니다."},{q:"한 문장으로 요약하면?",a:"약속을 규칙으로, 상상을 실행으로 대체합니다."}],conclusion:[{q:"가장 핵심 한 문장?",a:"“네트워크가 산출을 결정하고, 캐파시티가 캐리 한도를 결정한다.”"},{q:"핵심 가치?",a:"투명한 규칙, 결정론적 실행."},{q:"가장 흔한 실수?",a:"네트워크만 키우고 캐파시티를 올리지 않는 것."},{q:"가장 안정적인 전략?",a:"정적 재투자 + 동적 확장."},{q:"언제 멈춰야 하나요?",a:"규칙을 이해하지 못하겠다고 느낄 때."},{q:"언제 가속해야 하나요?",a:"캐파시티 업그레이드가 네트워크 성장보다 앞설 때."},{q:"시스템이 싫어하는 것은?",a:"투기와 사후 “땜질”."},{q:"시스템이 보상하는 것은?",a:"사전 설계와 일관된 실행."},{q:"실제로 “파는 것”은?",a:"토큰 서사가 아니라, 실행 가능한 규칙 세트."},{q:"저녁 대화 요약?",a:"미래를 약속하지 않는다. 규칙만 실행한다."},{q:"W/A는 무엇과 같나요?",a:"자동으로 돌아가는 경제 운영체제(OS)."},{q:"참여자의 역할?",a:"결과를 요구하는 사람이 아니라, 규칙을 실행하는 사람."},{q:"장기주의는 어디에?",a:"단기 쾌감은 규칙으로 압축되고, 장기적 규율과 지속이 보상됩니다."},{q:"누군가 망설이면?",a:"대부분 아직 규칙을 이해할 준비가 되지 않았다는 신호입니다."},{q:"최종 결정?",a:"항상 당신입니다."}]}},lp={title:"Q&A",subtitle:"W/Aプロトコル：エグゼクティブ・リスク概要 & FAQ完全版",backToHome:"ホームに戻る",searchPlaceholder:"質問または回答を検索…",riskSummary:{title:"⚠️ エグゼクティブ・リスク概要（投資委員会向け）",items:[{label:"プロトコルの本質",text:"W/Aは「全オンチェーン（All-on-chain）」のWeb4プロトコルであり、企業ではありません。資産のカストディ、裁量判断、結果の保証は行いません。"},{label:"リターン特性",text:"固定・安定・保証されたリターンは存在しません。分配は、事前定義されたオンチェーンルールとユーザー行動によってのみ発生します。"},{label:"主要リスク",text:"市場ボラティリティ、プロトコル設計/実行リスク、ユーザー行動と採用リスク、規制/管轄の不確実性。"},{label:"コントロール/ガバナンス",text:"中核ルールは不変（Immutable）です。管理画面・バックドア・“スーパー管理者”権限は存在せず、決済を人為的に上書きできません。"},{label:"結論",text:"W/Aは「人への信頼」を「決定論的なコード実行」に置き換えます。リスクは消えるのではなく、ルールとして明示され、プロトコルによって強制されます。"}]},disclaimer:"💡 本コンテンツはメカニズム/ルール説明のみを目的としており、収益の約束ではありません。パラメータはオンチェーンコントラクトに従います。",categories:{basic:"基本認知",revenue:"収益とタイミング",organization:"組織と拡大",risk:"リスクと信頼",conclusion:"要点（キーフレーズ）"},totalQuestions:"合計{{count}}件の質問",noResults:"一致する質問が見つかりません",faqs:{basic:[{q:"W/Aとは？",a:"全オンチェーンのWeb4プロトコル。算力とトラフィックを協調させ、ルールにもとづいて価値を分配します。"},{q:"Web4とWeb3の違いは？",a:"Web3は資産の所有/確権を扱い、Web4は大規模な協調と自動実行に主眼を置きます。"},{q:"WANTとXANTの違いは？",a:"WANTはエコシステムトークンであり決済単位。XANTは算力エンジンを起動するための“シード”資格です。"},{q:"なぜ「全オンチェーン（All-on-chain）」が重要？",a:"分配とバーン（焼却/失効）はすべてオンチェーンで実行され、監査可能で改ざん困難です。"},{q:"管理者権限（スーパー権限）はありますか？",a:"ありません。中核コントラクトは人為的な介入なしに自動実行されます。"},{q:"算力エンジン（Engine）とは？",a:"WANTを産出する基本ユニット。収益を“受け取れるキャパシティ”を表す資格でもあります。"},{q:"なぜメンテナンスが必要？",a:"メンテナンスでエンジンをアクティブ状態に保ちます。未メンテ/期限切れは収益対象外になります。"},{q:"メンテナンス費用はどう計算される？",a:"毎月、エンジンに紐づく保有/ロックWANTの1%がメンテナンスとして消費されます。"},{q:"「有効な算力（Effective）」とは？",a:"稼働中で、メンテナンス済み、かつ未期限切れのエンジンのみが有効としてカウントされます。"},{q:"アクティブアドレス（Active Address）とは？",a:"所定のティア以上のエンジンを少なくとも1台、保有して稼働させているアドレスです。"},{q:"なぜ登録人数を見ない？",a:"登録は作れますが、算力には実コストが伴います。プロトコルは“実参加”のみを指標にします。"},{q:"中央集権的な運営ですか？",a:"いいえ。決済/分配はオンチェーンルールで強制されます。"},{q:"KYCは必要？",a:"プロトコル層では必須ではありませんが、入口によっては法令遵守（コンプライアンス）が求められる場合があります。"},{q:"誰でも参加できますか？",a:"はい。小さなキャパシティや入門エンジンから始められます。"},{q:"早期参加者と後期参加者の違いは？",a:"早期は構造づくり、後期は効率とスケールに強みがあります。"}],revenue:[{q:"なぜ初期はリターンが遅い？",a:"静的リターンは複利カーブ（序盤は緩やか/後半で加速）。動的リターンは比較的早い段階のキャッシュフローになりやすいです。"},{q:"静的が遅いのは設計ミス？",a:"いいえ。複利の性質で、最初は平坦で、時間とともに増幅します。"},{q:"動的リターンには何が含まれる？",a:"ネットワーク成長報酬、スター（星）ティア差分報酬、全体手数料の配当など。"},{q:"動的リターンは日次で受け取れますか？",a:"はい。ネットワークが有効で、かつあなたのキャパシティが支払いを“受け止められる”限り、日次で決済されます。"},{q:"ピラミッド（ねずみ講）ですか？",a:"いいえ。登録数ではなく、有効アドレスと貢献度に基づいて分配されます。"},{q:"なぜ入金（クレジット）額が少なく見える？",a:"多くの場合「日次上限に到達」または「キャパシティ不足で全額を受け止められない」が原因です。"},{q:"日次動的上限とは？",a:"動的リターンとして日次にクレジットされる金額の上限を定めるルールです。"},{q:"上限の計算式は？",a:"日次静的産出 × 1.5 × アイデンティティ係数。"},{q:"アイデンティティ係数とは？",a:"保有し稼働している最高ティアのエンジンで決まる倍率です。"},{q:"キャパシティを上げる（アップグレードする）理由は？",a:"静的産出が増えるだけでなく、動的リターンを受け止められる上限（Carry上限）が上がります。"},{q:"あとから追加してバーン分を取り戻せますか？",a:"できません。事後の裁定を防ぎ、ルールの公平性を保つためです。"},{q:"バーン（焼却/失効）は損失や罰金？",a:"人為的な罰ではありません。キャパシティを超えた分がルールで自動的に無効化されます。"},{q:"バーンは増えますか？",a:"ネットワーク成長がキャパシティの増強を上回ると増える可能性があります。"},{q:"バーンを減らすには？",a:"ネットワークの伸びに合わせてキャパシティを上げ、エンジンをアクティブに保ち、上限の通知/アラートを確認してください。"},{q:"動的だけに集中できますか？",a:"可能ですが、長期的には静的と動的を組み合わせた方が安定しやすいです。"},{q:"静的だけに集中できますか？",a:"可能ですが、成長は遅く、動的のレバレッジを取り逃がしやすいです。"},{q:"再投資（複利）が向くのは？",a:"キャパシティがまだ小さく、ネットワークが成長局面にあるとき。"},{q:"引き出し（利益確定）の目安は？",a:"個人のキャッシュフロー要件やリスク許容度に合わせて判断します。"},{q:"長期保有を推奨しますか？",a:"ルールは長期参加に有利な設計ですが、強制はありません。"},{q:"リターンは安定していますか？",a:"リターンは保証されません。結果はルールと参加者行動に依存します。"}],organization:[{q:"「20世代（20-generation）上限」とは？",a:"あなたの下方向の有効ネットワーク深度を、最大20世代までしかカウントしないルールです。"},{q:"なぜ深度に上限があるの？",a:"差分（級差）が無限に積み上がってインセンティブが崩れるのを防ぐためです。"},{q:"複数ラインを作るメリットは？",a:"単一ラインのリスクを下げ、スター・ティア到達や差分（級差）獲得の確率を高められます。"},{q:"差分（級差）とは？",a:"スター・ティアの違いによって生じる報酬ギャップを、ルールにもとづき配分する仕組みです。"},{q:"平級（同格）ボーナスはありますか？",a:"有無はコントラクト仕様に従います。一般に世代数は限定（例：1世代）されます。"},{q:"「逆順配当」とは？",a:"オンチェーンルールに従い、支払い順序を“逆順”で配分する報酬メカニズムです。"},{q:"スター・ティアの条件は？",a:"有効アドレス数、実績（パフォーマンス）、そして自身のキャパシティ要件を満たす必要があります。"},{q:"スターは高いほど良い？",a:"高いほど有利な面もありますが、責任とキャパシティ要件も上がります。"},{q:"オフラインの地推は必須？",a:"必須ではありません。オンライン施策、コンテンツ、コミュニティ運営などでも成立します。"},{q:"T1エンジンの目的は？",a:"参加ハードルを下げ、オンボーディングや導線づくり（コンバージョン）に使うためです。"},{q:"T1は“ファーム”されませんか？",a:"低リターン・短サイクルなどで、ファーミングの費用対効果が合いにくい設計になっています。"},{q:"「有効な直紹介」はどう判定？",a:"紹介先が実際にエンジンを稼働し、有効アドレスになっているかで判定します。"},{q:"下位（ダウンライン）にエンジンを渡せますか？",a:"可能です。ただし、プロトコルのキャパシティ/Carryルールの範囲内で行う必要があります。"},{q:"組織が大きいほど必ず儲かる？",a:"必ずではありません。自身のキャパシティを同時に上げないと、超過分はバーン（失効）され得ます。"},{q:"ネットワークが大きいほどプレッシャーも増える？",a:"はい。動的リターンを“受け止める責任（Carry責任）”はネットワーク規模とともに増えます。"},{q:"拡大で最重要なのは？",a:"構造が先、キャパシティが次、規模は最後です。"},{q:"後期参入でもチャンスはありますか？",a:"あります。成熟フェーズでは転換効率が高くなることがあります。"},{q:"大口（whale）と小口、どちらが有利？",a:"大口は資本、小口は実行力が強みになりやすいです。"},{q:"地域をまたいでも成立しますか？",a:"はい。全オンチェーンの仕組みは地理に依存しません。"},{q:"公式の話法（メッセージ）はありますか？",a:"公式の開示内容、および（あれば）アカデミーのガイドラインに従ってください。"},{q:"チーム補助（サブシディ）はありますか？",a:"有無はインセンティブプールのルールと告知によって決まります。"},{q:"ランキングはどう算出される？",a:"オンチェーンデータをもとに自動計算されます。"},{q:"インセンティブはどこから来る？",a:"専用のインセンティブプールから支払われ、メインの産出を減らしません。"},{q:"不正はどう防ぐ？",a:"資金相関分析、キャパシティ検証、オンチェーン追跡などで抑止します。"},{q:"バーンされたWANTはどこへ？",a:"ルールに従いオンチェーンでバーンされ、誰の口座にも入りません。"}],risk:[{q:"バーンはオンチェーンで検証できますか？",a:"はい。オンチェーンで透明に確認できます。"},{q:"プロジェクト（チーム）はどうやって利益を得る？",a:"トークンの囲い込みではなく、エコシステム成長と市場シェアの拡大によってです。"},{q:"ルールはこっそり変えられますか？",a:"中核ルールはオンチェーン後は不変です。変更がある場合も、定義されたガバナンス経路に従う必要があります。"},{q:"パラメータは調整できますか？",a:"ガバナンス、または事前に定められたアップグレード経路でのみ可能です。"},{q:"ラグプル（持ち逃げ）のリスクは？",a:"人為介入リスクは設計で下げていますが、市場リスクを消すことはできません。"},{q:"コントラクト監査は？",a:"公式の開示を参照してください。"},{q:"トークン価格は誰が決める？",a:"市場です（需給によって決まります）。"},{q:"チームが価格を操作しますか？",a:"価格の保証もコントロールもしません。"},{q:"なぜ上限（キャップ）が必要？",a:"システム安定性のため。極端な行動でインセンティブが破壊されるのを防ぎます。"},{q:"上限は稼ぎを制限しますか？",a:"キャパシティを超える“過負荷の支払い”を抑える仕組みです。"},{q:"上限がないと？",a:"短期的には気持ち良くても、長期的には崩れやすくなります。"},{q:"ガバナンス投票はありますか？",a:"ガバナンス機能の実装/公開にあわせて開始されます。"},{q:"ルールは誰にでも同じ？",a:"はい。一貫して同じルールが適用されます。"},{q:"決済を手動で上書きできますか？",a:"できません。決済はルールベースで、人為操作に依存しません。"},{q:"引き出しは制限されますか？",a:"ルールと流動性条件に従って実行されます。"},{q:"なぜ手数料がある？",a:"運用、インセンティブ、リスクコントロールの原資として使われます。"},{q:"手数料の配分は透明？",a:"はい。ルールにもとづき配分され、オンチェーンで検証できます。"},{q:"資金プールが流用されますか？",a:"中核の資金フローはコントラクトによりルールで実行されます。"},{q:"プロトコルはどこまで伸びる？",a:"ルールの実行力と参加者行動に依存します。"},{q:"失敗する可能性は？",a:"あります。どんな市場システムにもリスクはあります。"},{q:"理性的な参加を推奨しますか？",a:"はい。ルール自体がリスク開示（注意喚起）になっています。"},{q:"誰にでも向いていますか？",a:"いいえ。ルールを理解できる人に向いています。"},{q:"なぜ未来を約束しない？",a:"結果は約束ではなく、ルールで決まるからです。"},{q:"一文でまとめると？",a:"「約束をルールに、想像を実行に」置き換える。"}],conclusion:[{q:"最重要の一言は？",a:"「ネットワークが産出を決め、キャパシティが受け止め上限を決める」。"},{q:"コア価値は？",a:"透明なルールと、確定的な実行。"},{q:"よくある落とし穴は？",a:"ネットワークだけ伸ばして、キャパシティを上げないこと。"},{q:"いちばん堅い戦略は？",a:"静的の再投資＋動的の拡大。"},{q:"やめるべきタイミングは？",a:"ルールが理解できないと感じたとき。"},{q:"加速すべきタイミングは？",a:"キャパシティ強化がネットワーク成長を先行しているとき。"},{q:"システムが嫌うものは？",a:"投機と、事後の“つじつま合わせ”。"},{q:"システムが報いるものは？",a:"先回りの設計と、継続的な実行。"},{q:"本質的に“売っている”ものは？",a:"トークン物語ではなく、実行可能なルールのセット。"},{q:"夜会話の要約は？",a:"未来は約束しない。ルールだけを実行する。"},{q:"W/Aは何に似ている？",a:"自動で動く“経済OS”。"},{q:"参加者の役割は？",a:"結果を要求する人ではなく、ルールを実行する人。"},{q:"長期主義はどこにある？",a:"短期の快感はルールで圧縮され、継続と規律が報われます。"},{q:"迷う人がいたら？",a:"たいていは、まだルールを理解する準備ができていないサインです。"},{q:"最終決定は誰？",a:"あなたです。"}]}},Gu={zh:tp,en:np,id:ap,th:rp,vi:ip,ko:op,ja:lp};function sp({language:g,setCurrentPage:S}){const m=Gu[g]||Gu.zh,[F,T]=V.useState("basic"),[M,U]=V.useState(null),[H,R]=V.useState(""),[Q,Z]=V.useState(!0),P=(()=>{const b=["basic","revenue","organization","risk","conclusion"];let E=1;for(let oe=0;oe<b.indexOf(F);oe++)E+=m.faqs[b[oe]].length;return m.faqs[F].map((oe,ye)=>({...oe,number:E+ye}))})(),G=H?P.filter(b=>b.q.toLowerCase().includes(H.toLowerCase())||b.a.toLowerCase().includes(H.toLowerCase())):P,q=Object.values(m.faqs).flat().length;return l.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20",children:l.jsxs("div",{className:"container mx-auto px-6",children:[l.jsxs("button",{onClick:()=>S("home"),className:"group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors duration-200",children:[l.jsx(Ro,{size:18,className:"group-hover:-translate-x-1 transition-transform duration-200"}),l.jsx("span",{className:"text-sm",children:m.backToHome})]}),l.jsxs("div",{className:"max-w-5xl mx-auto text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-lime-500/10 rounded-2xl mb-6",children:l.jsx(ym,{className:"text-lime-400",size:32})}),l.jsx("h1",{className:"text-4xl md:text-5xl font-medium text-white mb-4",children:m.title}),l.jsx("p",{className:"text-lg text-zinc-400",children:m.subtitle})]}),l.jsxs("div",{className:"max-w-5xl mx-auto mb-8",children:[l.jsxs("button",{onClick:()=>Z(!Q),className:"w-full p-5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-between hover:bg-red-500/15 transition-colors duration-200",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(Em,{className:"text-red-400 flex-shrink-0",size:24}),l.jsx("span",{className:"text-lg font-medium text-white",children:m.riskSummary.title})]}),l.jsx(Mo,{size:20,className:`text-zinc-400 transition-transform duration-200 ${Q?"rotate-180":""}`})]}),l.jsx("div",{className:`overflow-hidden transition-all duration-300 ${Q?"max-h-[2000px] opacity-100 mt-3":"max-h-0 opacity-0"}`,children:l.jsx("div",{className:"space-y-3",children:m.riskSummary.items.map((b,E)=>l.jsxs("div",{className:"p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-lg",children:[l.jsx("h4",{className:"text-sm font-medium text-red-300 mb-2",children:b.label}),l.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed",children:b.text})]},E))})})]}),l.jsx("div",{className:"max-w-5xl mx-auto mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg",children:l.jsx("p",{className:"text-sm text-amber-200 text-center",children:m.disclaimer})}),l.jsx("div",{className:"max-w-5xl mx-auto mb-8",children:l.jsxs("div",{className:"relative",children:[l.jsx(Cm,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500",size:20}),l.jsx("input",{type:"text",placeholder:m.searchPlaceholder,value:H,onChange:b=>R(b.target.value),className:"ui-input pl-12 pr-4 py-3.5"})]})}),l.jsx("div",{className:"max-w-5xl mx-auto mb-8 overflow-x-auto",children:l.jsx("div",{className:"flex gap-2 p-1 bg-zinc-900/30 border border-zinc-800/50 rounded-lg w-fit min-w-full md:min-w-0",children:Object.keys(m.categories).map(b=>l.jsx("button",{onClick:()=>{T(b),U(null),R("")},className:`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${F===b?"bg-lime-500/15 text-white":"text-zinc-400 hover:text-white"}`,children:m.categories[b]},b))})}),l.jsx("div",{className:"max-w-5xl mx-auto space-y-3",children:G.length===0?l.jsx("div",{className:"text-center py-12 text-zinc-500",children:m.noResults}):G.map((b,E)=>l.jsxs("div",{className:"ui-list-item overflow-hidden",children:[l.jsxs("button",{onClick:()=>U(M===E?null:E),className:"w-full p-5 flex items-start justify-between gap-4 text-left",children:[l.jsxs("div",{className:"flex-1 flex items-start gap-3",children:[l.jsxs("span",{className:"ui-badge ui-badge-lime ui-badge-mono flex-shrink-0",children:["Q",b.number]}),l.jsx("h3",{className:"text-base font-medium text-white",children:b.q})]}),l.jsx(Mo,{size:20,className:`text-zinc-400 flex-shrink-0 transition-transform duration-200 ${M===E?"rotate-180":""}`})]}),l.jsx("div",{className:`overflow-hidden transition-all duration-300 ${M===E?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:l.jsx("div",{className:"px-5 pb-5 pt-0",children:l.jsx("div",{className:"pl-11",children:l.jsxs("p",{className:"text-sm text-zinc-400 leading-relaxed pt-4",children:[l.jsx("span",{className:"ui-divider-soft block mb-4"}),b.a]})})})})]},E))}),l.jsx("div",{className:"max-w-5xl mx-auto mt-8 text-center",children:l.jsx("p",{className:"text-sm text-zinc-500",children:m.totalQuestions.replace("{{count}}",q.toString())})})]})})}const ec=V.memo(sp),up=Object.freeze(Object.defineProperty({__proto__:null,FAQPage:ec},Symbol.toStringTag,{value:"Module"})),cp={en:{title:"Social Channels",subtitle:"Connect with us on Telegram, Twitter, Discord, and YouTube",backToHome:"Back to Home",joinCommunity:"Join Community",follow:"Follow",subscribe:"Subscribe",members:"members",followers:"followers",channels:{telegram:{name:"Telegram",desc:"Join our official Telegram group for real-time updates and community discussions",link:"Join Group"},twitter:{name:"Twitter",desc:"Follow us on Twitter for the latest news, announcements, and insights",link:"Follow Us"},discord:{name:"Discord",desc:"Connect with our community on Discord for support and collaboration",link:"Join Server"},youtube:{name:"YouTube",desc:"Subscribe to our YouTube channel for tutorials, updates, and educational content",link:"Subscribe"}}},zh:{title:"社交渠道",subtitle:"通过 Telegram、Twitter、Discord 和 YouTube 与我们保持联系",backToHome:"返回首页",joinCommunity:"加入社区",follow:"关注",subscribe:"订阅",members:"成员",followers:"关注者",channels:{telegram:{name:"Telegram",desc:"加入我们的官方 Telegram 群组，获取实时更新和社区讨论",link:"加入群组"},twitter:{name:"Twitter",desc:"在 Twitter 上关注我们，获取最新资讯、公告和见解",link:"关注我们"},discord:{name:"Discord",desc:"在 Discord 上与我们的社区连接，获取支持和协作",link:"加入服务器"},youtube:{name:"YouTube",desc:"订阅我们的 YouTube 频道，观看教程、更新和教育内容",link:"订阅频道"}}},id:{title:"Saluran Sosial",subtitle:"Terhubung dengan kami di Telegram, Twitter, Discord, dan YouTube",backToHome:"Kembali ke Beranda",joinCommunity:"Gabung Komunitas",follow:"Ikuti",subscribe:"Berlangganan",members:"anggota",followers:"pengikut",channels:{telegram:{name:"Telegram",desc:"Bergabunglah dengan grup Telegram resmi kami untuk pembaruan real-time dan diskusi komunitas",link:"Gabung Grup"},twitter:{name:"Twitter",desc:"Ikuti kami di Twitter untuk berita terbaru, pengumuman, dan wawasan",link:"Ikuti Kami"},discord:{name:"Discord",desc:"Terhubung dengan komunitas kami di Discord untuk dukungan dan kolaborasi",link:"Gabung Server"},youtube:{name:"YouTube",desc:"Berlangganan saluran YouTube kami untuk tutorial, pembaruan, dan konten edukatif",link:"Berlangganan"}}},th:{title:"ช่องทางโซเชียล",subtitle:"เชื่อมต่อกับเราบน Telegram, Twitter, Discord และ YouTube",backToHome:"กลับสู่หน้าหลัก",joinCommunity:"เข้าร่วมชุมชน",follow:"ติดตาม",subscribe:"สมัครสมาชิก",members:"สมาชิก",followers:"ผู้ติดตาม",channels:{telegram:{name:"Telegram",desc:"เข้าร่วมกลุ่ม Telegram อย่างเป็นทางการของเราสำหรับการอัปเดตแบบเรียลไทม์และการสนทนาในชุมชน",link:"เข้าร่วมกลุ่ม"},twitter:{name:"Twitter",desc:"ติดตามเราบน Twitter สำหรับข่าวสาร ประกาศ และข้อมูลเชิงลึกล่าสุด",link:"ติดตามเรา"},discord:{name:"Discord",desc:"เชื่อมต่อกับชุมชนของเราบน Discord เพื่อรับการสนับสนุนและความร่วมมือ",link:"เข้าร่วมเซิร์ฟเวอร์"},youtube:{name:"YouTube",desc:"สมัครสมาชิกช่อง YouTube ของเราสำหรับบทช่วยสอน การอัปเดต และเนื้อหาการศึกษา",link:"สมัครสมาชิก"}}},vi:{title:"Kênh Xã Hội",subtitle:"Kết nối với chúng tôi trên Telegram, Twitter, Discord và YouTube",backToHome:"Về Trang Chủ",joinCommunity:"Tham Gia Cộng Đồng",follow:"Theo Dõi",subscribe:"Đăng Ký",members:"thành viên",followers:"người theo dõi",channels:{telegram:{name:"Telegram",desc:"Tham gia nhóm Telegram chính thức của chúng tôi để nhận cập nhật theo thời gian thực và thảo luận cộng đồng",link:"Tham Gia Nhóm"},twitter:{name:"Twitter",desc:"Theo dõi chúng tôi trên Twitter để biết tin tức, thông báo và thông tin chi tiết mới nhất",link:"Theo Dõi Chúng Tôi"},discord:{name:"Discord",desc:"Kết nối với cộng đồng của chúng tôi trên Discord để được hỗ trợ và cộng tác",link:"Tham Gia Máy Chủ"},youtube:{name:"YouTube",desc:"Đăng ký kênh YouTube của chúng tôi để xem hướng dẫn, cập nhật và nội dung giáo dục",link:"Đăng Ký"}}},ko:{title:"소셜 채널",subtitle:"Telegram, Twitter, Discord 및 YouTube에서 우리와 연결하세요",backToHome:"홈으로",joinCommunity:"커뮤니티 가입",follow:"팔로우",subscribe:"구독",members:"멤버",followers:"팔로워",channels:{telegram:{name:"Telegram",desc:"실시간 업데이트 및 커뮤니티 토론을 위해 공식 Telegram 그룹에 가입하세요",link:"그룹 가입"},twitter:{name:"Twitter",desc:"최신 뉴스, 공지사항 및 인사이트를 보려면 Twitter에서 팔로우하세요",link:"팔로우하기"},discord:{name:"Discord",desc:"지원 및 협업을 위해 Discord에서 커뮤니티와 연결하세요",link:"서버 가입"},youtube:{name:"YouTube",desc:"튜토리얼, 업데이트 및 교육 콘텐츠를 보려면 YouTube 채널을 구독하세요",link:"구독하기"}}},ja:{title:"ソーシャルチャンネル",subtitle:"Telegram、Twitter、Discord、YouTubeで私たちとつながりましょう",backToHome:"ホームに戻る",joinCommunity:"コミュニティに参加",follow:"フォロー",subscribe:"登録",members:"メンバー",followers:"フォロワー",channels:{telegram:{name:"Telegram",desc:"リアルタイムの更新とコミュニティディスカッションのために公式Telegramグループに参加してください",link:"グループに参加"},twitter:{name:"Twitter",desc:"最新ニュース、お知らせ、インサイトのためにTwitterでフォローしてください",link:"フォローする"},discord:{name:"Discord",desc:"サポートとコラボレーションのためにDiscordでコミュニティとつながりましょう",link:"サーバーに参加"},youtube:{name:"YouTube",desc:"チュートリアル、更新、教育コンテンツのためにYouTubeチャンネルを登録してください",link:"登録する"}}}},dp=[{id:"telegram",color:"from-blue-500 to-cyan-500",bgColor:"bg-blue-500/10",borderColor:"border-blue-500/30",hoverBorder:"hover:border-blue-500/50",stats:"50K+"},{id:"twitter",color:"from-sky-500 to-blue-500",bgColor:"bg-sky-500/10",borderColor:"border-sky-500/30",hoverBorder:"hover:border-sky-500/50",stats:"30K+"},{id:"discord",color:"from-indigo-500 to-purple-500",bgColor:"bg-indigo-500/10",borderColor:"border-indigo-500/30",hoverBorder:"hover:border-indigo-500/50",stats:"20K+"},{id:"youtube",color:"from-red-500 to-pink-500",bgColor:"bg-red-500/10",borderColor:"border-red-500/30",hoverBorder:"hover:border-red-500/50",stats:"15K+"}];function mp({language:g,setCurrentPage:S}){const m=cp[g],F={telegram:Nm,twitter:_m,discord:Hu,youtube:Rm};return l.jsx("div",{className:"min-h-screen bg-[#0a0a0a] pt-24 pb-20",children:l.jsxs("div",{className:"container mx-auto px-6",children:[l.jsxs("button",{onClick:()=>S("home"),className:"group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors duration-200",children:[l.jsx(Ro,{size:18,className:"group-hover:-translate-x-1 transition-transform duration-200"}),l.jsx("span",{className:"text-sm",children:m.backToHome})]}),l.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-16",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-lime-500/10 to-emerald-500/10 rounded-2xl mb-6",children:l.jsx(Hu,{className:"text-lime-400",size:32})}),l.jsx("h1",{className:"text-4xl md:text-5xl font-medium text-white mb-4",children:m.title}),l.jsx("p",{className:"text-lg text-zinc-400",children:m.subtitle})]}),l.jsx("div",{className:"max-w-5xl mx-auto grid md:grid-cols-2 gap-6",children:dp.map(T=>{const M=F[T.id],U=m.channels[T.id];return l.jsxs("div",{className:`group p-6 bg-zinc-900/30 border ${T.borderColor} ${T.hoverBorder} rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1`,children:[l.jsxs("div",{className:"flex items-start justify-between mb-4",children:[l.jsx("div",{className:`w-14 h-14 ${T.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,children:l.jsx(M,{className:`bg-gradient-to-br ${T.color} bg-clip-text text-transparent`,size:28})}),l.jsxs("div",{className:"text-right",children:[l.jsx("div",{className:"text-xl font-semibold text-white",children:T.stats}),l.jsx("div",{className:"text-xs text-zinc-500",children:T.id==="telegram"||T.id==="discord"?m.members:m.followers})]})]}),l.jsx("h3",{className:"text-xl font-medium text-white mb-2",children:U.name}),l.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed mb-5",children:U.desc}),l.jsxs("button",{className:`group/btn w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${T.color} bg-opacity-10 hover:bg-opacity-20 text-white border ${T.borderColor} ${T.hoverBorder} rounded-lg transition-all duration-200`,children:[l.jsx("span",{className:"text-sm font-medium",children:U.link}),l.jsx(km,{size:16,className:"group-hover/btn:translate-x-0.5 transition-transform duration-200"})]})]},T.id)})})]})})}const tc=V.memo(mp),pp=Object.freeze(Object.defineProperty({__proto__:null,SocialPage:tc},Symbol.toStringTag,{value:"Module"})),Xt={home:"HomePage",resources:"ResourcesPage",tools:"ToolsPage",community:"CommunityPage",whitepaper:"WhitepaperPage",faq:"FAQPage",social:"SocialPage"},hp={[Xt.home]:V.lazy(()=>bt(()=>import("./HomePage-CkExC5ez.js"),__vite__mapDeps([0,1])).then(g=>({default:g.default}))),[Xt.resources]:V.lazy(()=>bt(()=>import("./ResourcesPage-D9l85nHM.js"),[]).then(g=>({default:g.ResourcesPage}))),[Xt.tools]:V.lazy(()=>bt(()=>import("./ToolsPage-BTf14aMw.js"),[]).then(g=>({default:g.ToolsPage}))),[Xt.community]:V.lazy(()=>bt(()=>import("./CommunityPage-pWR3QiQf.js"),__vite__mapDeps([2,1])).then(g=>({default:g.CommunityPage}))),[Xt.whitepaper]:V.lazy(()=>bt(()=>Promise.resolve().then(()=>ep),void 0).then(g=>({default:g.WhitepaperPage}))),[Xt.faq]:V.lazy(()=>bt(()=>Promise.resolve().then(()=>up),void 0).then(g=>({default:g.FAQPage}))),[Xt.social]:V.lazy(()=>bt(()=>Promise.resolve().then(()=>pp),void 0).then(g=>({default:g.SocialPage})))};function fp(){const[g,S]=V.useState("zh"),[m,F]=V.useState("home"),T=V.useCallback(R=>{S(R);try{localStorage.setItem("preferred-language",R)}catch(Q){console.warn("Failed to save language preference:",Q)}},[]),M=V.useCallback(R=>{F(R);try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}},[]);V.useEffect(()=>{try{const R=localStorage.getItem("preferred-language");R&&["en","zh","id","th","vi","ko","ja"].includes(R)&&S(R)}catch(R){console.warn("Failed to load language preference:",R)}},[]),V.useEffect(()=>{try{document.title=`WA - ${m}`,document.body.dataset.page=m}catch{}},[m]);const U=V.useMemo(()=>{if(m==="whitepaper")return l.jsx(Zu,{language:g,setCurrentPage:M});if(m==="faq")return l.jsx(ec,{language:g,setCurrentPage:M});if(m==="social")return l.jsx(tc,{language:g,setCurrentPage:M});const R=Xt[m],Q=hp[R];return m==="home"?l.jsx(Q,{language:g,setCurrentPage:M}):l.jsx(Q,{language:g})},[m,g,M]),H=V.useMemo(()=>({className:`min-h-screen relative overflow-hidden lang-${g}`}),[g]);return l.jsx(Vm,{children:l.jsxs("div",{...H,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"}),l.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[l.jsx(Fm,{language:g,setLanguage:T,currentPage:m,setCurrentPage:M}),l.jsx("main",{className:"flex-1",children:l.jsx(V.Suspense,{fallback:l.jsx($m,{}),children:U})}),l.jsx(Km,{language:g})]})]})})}lm.createRoot(document.getElementById("root")).render(l.jsx(fp,{}));export{km as E,bm as G,Hu as M,Ku as S,Yu as a,Cm as b,Oe as c,l as j,V as r};
