(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9498:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[B]}function s(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===H}(e)||Array.isArray(e)||!!e[V]||!!(null===(t=e.constructor)||void 0===t?void 0:t[V])||h(e)||d(e))}function o(e,t,n){void 0===n&&(n=!1),0===a(e)?(n?Object.keys:z)(e).forEach(function(r){n&&"symbol"==typeof r||t(r,e[r],e)}):e.forEach(function(n,r){return t(r,n,e)})}function a(e){var t=e[B];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:h(e)?2:d(e)?3:0}function l(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,n){var r=a(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){return F&&e instanceof Map}function d(e){return q&&e instanceof Set}function p(e){return e.o||e.t}function f(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=$(e);delete t[B];for(var n=z(t),r=0;r<n.length;r++){var i=n[r],s=t[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function _(e,t){return void 0===t&&(t=!1),g(e)||i(e)||!s(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=m),Object.freeze(e),t&&o(e,function(e,t){return _(t,!0)},!0)),e}function m(){r(2)}function g(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function v(e){var t=G[e];return t||r(18,e),t}function y(e,t){t&&(v("Patches"),e.u=[],e.s=[],e.v=t)}function b(e){w(e),e.p.forEach(T),e.p=null}function w(e){e===M&&(M=e.l)}function I(e){return M={p:[],l:M,h:e,m:!0,_:0}}function T(e){var t=e[B];0===t.i||1===t.i?t.j():t.O=!0}function E(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.g||v("ES5").S(t,e,i),i?(n[B].P&&(b(t),r(4)),s(e)&&(e=C(t,e),t.l||S(t,e)),t.u&&v("Patches").M(n[B].t,e,t.u,t.s)):e=C(t,n,[]),b(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function C(e,t,n){if(g(t))return t;var r=t[B];if(!r)return o(t,function(i,s){return k(e,r,t,i,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return S(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=f(r.k):r.o;o(3===r.i?new Set(i):i,function(t,s){return k(e,r,i,t,s,n)}),S(e,i,!1),n&&e.u&&v("Patches").R(r,n,e.u,e.s)}return r.o}function k(e,t,n,r,o,a){if(i(o)){var c=C(e,o,a&&t&&3!==t.i&&!l(t.D,r)?a.concat(r):void 0);if(u(n,r,c),!i(c))return;e.m=!1}if(s(o)&&!g(o)){if(!e.h.F&&e._<1)return;C(e,o),t&&t.A.l||S(e,o)}}function S(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&_(t,n)}function R(e,t){var n=e[B];return(n?p(n):e)[t]}function P(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function O(e){e.o||(e.o=f(e.t))}function A(e,t,n){var r,i,s,o,a,l,u,c,p,f=h(t)?v("MapSet").N(t,n):d(t)?v("MapSet").T(t,n):e.g?(a=o={i:(s=Array.isArray(t))?1:0,A:n?n.A:M,P:!1,I:!1,D:{},l:n,t:t,k:null,o:null,j:null,C:!1},l=K,s&&(a=[o],l=Y),c=(u=Proxy.revocable(a,l)).revoke,p=u.proxy,o.k=p,o.j=c,p):v("ES5").J(t,n);return(n?n.A:M).p.push(f),f}function D(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return f(e)}n.d(t,{xC:function(){return eE},hg:function(){return eD},oM:function(){return eS}});var x,L,M,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),F="undefined"!=typeof Map,q="undefined"!=typeof Set,j="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=U?Symbol.for("immer-nothing"):((L={})["immer-nothing"]=!0,L),V=U?Symbol.for("immer-draftable"):"__$immer_draftable",B=U?Symbol.for("immer-state"):"__$immer_state",H=""+Object.prototype.constructor,z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,$=Object.getOwnPropertyDescriptors||function(e){var t={};return z(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},G={},K={get:function(e,t){if(t===B)return e;var n,r,i,o,a,u=p(e);if(!l(u,t))return n=e,r=u,(a=P(r,i=t))?"value"in a?a.value:null===(o=a.get)||void 0===o?void 0:o.call(n.k):void 0;var c=u[t];return e.I||!s(c)?c:c===R(e.t,t)?(O(e),e.o[t]=A(e.A.h,c,e)):c},has:function(e,t){return t in p(e)},ownKeys:function(e){return Reflect.ownKeys(p(e))},set:function(e,t,n){var r=P(p(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=R(p(e),t),s=null==i?void 0:i[B];if(s&&s.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(c(n,i)&&(void 0!==n||l(e.t,t)))return!0;O(e),N(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==R(e.t,t)||t in e.t?(e.D[t]=!1,O(e),N(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=p(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},Y={};o(K,function(e,t){Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)},Y.set=function(e,t,n){return K.set.call(this,e[0],t,n,e[0])};var J=new(function(){function e(e){var t=this;this.g=j,this.F=!0,this.produce=function(e,n,i){if("function"==typeof e&&"function"!=typeof n){var o,a=n;return n=e,function(e){var r=this;void 0===e&&(e=a);for(var i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(s))})}}if("function"!=typeof n&&r(6),void 0!==i&&"function"!=typeof i&&r(7),s(e)){var l=I(t),u=A(t,e,void 0),c=!0;try{o=n(u),c=!1}finally{c?b(l):w(l)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return y(l,i),E(e,l)},function(e){throw b(l),e}):(y(l,i),E(o,l))}if(!e||"object"!=typeof e){if(void 0===(o=n(e))&&(o=e),o===W&&(o=void 0),t.F&&_(o,!0),i){var h=[],d=[];v("Patches").M(e,o,h,d),i(h,d)}return o}r(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return t.produceWithPatches(n,function(t){return e.apply(void 0,[t].concat(i))})};var r,i,s=t.produce(e,n,function(e,t){r=e,i=t});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(function(e){return[e,r,i]}):[s,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){s(e)||r(8),i(e)&&(t=e,i(t)||r(22,t),e=function e(t){if(!s(t))return t;var n,r=t[B],i=a(t);if(r){if(!r.P&&(r.i<4||!v("ES5").K(r)))return r.t;r.I=!0,n=D(t,i),r.I=!1}else n=D(t,i);return o(n,function(t,i){var s,o;r&&(2===a(s=r.t)?s.get(t):s[t])===i||u(n,t,e(i))}),3===i?new Set(n):n}(t));var t,n=I(this),l=A(this,e,void 0);return l[B].C=!0,w(n),l},t.finishDraft=function(e,t){var n,r=(e&&e[B]).A;return y(r,t),E(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!j&&r(20),this.g=e},t.applyPatches=function(e,t){for(n=t.length-1;n>=0;n--){var n,r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var s=v("Patches").$;return i(e)?s(e,t):this.produce(e,function(e){return s(e,t)})},e}()),Q=J.produce;function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(t){X(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}J.produceWithPatches.bind(J),J.setAutoFreeze.bind(J),J.setUseProxies.bind(J),J.applyPatches.bind(J),J.createDraft.bind(J),J.finishDraft.bind(J);var en="function"==typeof Symbol&&Symbol.observable||"@@observable",er=function(){return Math.random().toString(36).substring(7).split("").join(".")},ei={INIT:"@@redux/INIT"+er(),REPLACE:"@@redux/REPLACE"+er(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+er()}};function es(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function eo(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error(et(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},s=t.map(function(e){return e(i)});return r=es.apply(void 0,s)(n.dispatch),ee(ee({},n),{},{dispatch:r})}}}function ea(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var el=ea();el.withExtraArgument=ea,n(3454);var eu=(x=function(e,t){return(x=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ec=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},eh=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},ed=Object.defineProperty,ep=Object.defineProperties,ef=Object.getOwnPropertyDescriptors,e_=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,eg=Object.prototype.propertyIsEnumerable,ev=function(e,t,n){return t in e?ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ey=function(e,t){for(var n in t||(t={}))em.call(t,n)&&ev(e,n,t[n]);if(e_)for(var r=0,i=e_(t);r<i.length;r++){var n=i[r];eg.call(t,n)&&ev(e,n,t[n])}return e},eb=function(e,t){return ep(e,ef(t))},ew="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?es:es.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var eI=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return eu(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,eh([void 0],e[0].concat(this)))):new(t.bind.apply(t,eh([void 0],e.concat(this))))},t}(Array);function eT(e){return s(e)?Q(e,function(){}):e}function eE(e){var t,n=function(e){var t,n,r,i,s;return t=e,void 0===t&&(t={}),r=t.thunk,i=void 0===r||r,t.immutableCheck,t.serializableCheck,s=new eI,i&&("boolean"==typeof(n=i)?s.push(el):s.push(el.withExtraArgument(i.extraArgument))),s},r=e||{},i=r.reducer,s=void 0===i?void 0:i,o=r.middleware,a=void 0===o?n():o,l=r.devTools,u=void 0===l||l,c=r.preloadedState,h=r.enhancers,d=void 0===h?void 0:h;if("function"==typeof s)t=s;else if(function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}(s))t=function(e){for(var t,n=Object.keys(e),r={},i=0;i<n.length;i++){var s=n[i];"function"==typeof e[s]&&(r[s]=e[s])}var o=Object.keys(r);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:ei.INIT}))throw Error(et(12));if(void 0===n(void 0,{type:ei.PROBE_UNKNOWN_ACTION()}))throw Error(et(13))})}(r)}catch(a){t=a}return function(e,n){if(void 0===e&&(e={}),t)throw t;for(var i=!1,s={},a=0;a<o.length;a++){var l=o[a],u=r[l],c=e[l],h=u(c,n);if(void 0===h)throw n&&n.type,Error(et(14));s[l]=h,i=i||h!==c}return(i=i||o.length!==Object.keys(e).length)?s:e}}(s);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=a;"function"==typeof p&&(p=p(n));var f=eo.apply(void 0,p),_=es;u&&(_=ew(ey({trace:!1},"object"==typeof u&&u)));var m=[f];Array.isArray(d)?m=eh([f],d):"function"==typeof d&&(m=d(m));var g=_.apply(void 0,m);return function e(t,n,r){if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw Error(et(0));if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw Error(et(1));return r(e)(t,n)}if("function"!=typeof t)throw Error(et(2));var i,s=t,o=n,a=[],l=a,u=!1;function c(){l===a&&(l=a.slice())}function h(){if(u)throw Error(et(3));return o}function d(e){if("function"!=typeof e)throw Error(et(4));if(u)throw Error(et(5));var t=!0;return c(),l.push(e),function(){if(t){if(u)throw Error(et(6));t=!1,c();var n=l.indexOf(e);l.splice(n,1),a=null}}}function p(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(et(7));if(void 0===e.type)throw Error(et(8));if(u)throw Error(et(9));try{u=!0,o=s(o,e)}finally{u=!1}for(var t=a=l,n=0;n<t.length;n++)(0,t[n])();return e}return p({type:ei.INIT}),(i={dispatch:p,subscribe:d,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error(et(10));s=e,p({type:ei.REPLACE})}})[en]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(et(11));function t(){e.next&&e.next(h())}return t(),{unsubscribe:d(t)}}})[en]=function(){return this},e},i}(t,void 0===c?void 0:c,g)}function eC(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw Error("prepareAction did not return an object");return ey(ey({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function ek(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function eS(e){var t,n=e.name;if(!n)throw Error("`name` is a required option for createSlice");var r="function"==typeof e.initialState?e.initialState:eT(e.initialState),o=e.reducers||{},a=Object.keys(o),l={},u={},c={};function h(){var t="function"==typeof e.extraReducers?ek(e.extraReducers):[e.extraReducers],n=t[0],o=t[1],a=void 0===o?[]:o,l=t[2],c=void 0===l?void 0:l,h=ey(ey({},void 0===n?{}:n),u);return function(e,t,n,r){void 0===n&&(n=[]);var o,a,l="function"==typeof t?ek(t):[t,n,void 0],u=l[0],c=l[1],h=l[2];if("function"==typeof e)o=function(){return eT(e())};else{var d=eT(e);o=function(){return d}}function p(e,t){void 0===e&&(e=o());var n=eh([u[t.type]],c.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===n.filter(function(e){return!!e}).length&&(n=[h]),n.reduce(function(e,n){if(n){if(i(e)){var r=n(e,t);return void 0===r?e:r}if(s(e))return Q(e,function(e){return n(e,t)});var r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e},e)}return p.getInitialState=o,p}(r,function(e){for(var t in h)e.addCase(t,h[t]);for(var n=0;n<a.length;n++){var r=a[n];e.addMatcher(r.matcher,r.reducer)}c&&e.addDefaultCase(c)})}return a.forEach(function(e){var t,r,i,s,a=o[e],h=n+"/"+e;"reducer"in a?(t=a.reducer,r=a.prepare):t=a,l[e]=t,u[h]=t,c[e]=r?eC(h,r):eC(h)}),{name:n,reducer:function(e,n){return t||(t=h()),t(e,n)},actions:c,caseReducers:l,getInitialState:function(){return t||(t=h()),t.getInitialState()}}}var eR=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},eP=["name","message","stack","code"],eN=function(e,t){this.payload=e,this.meta=t},eO=function(e,t){this.payload=e,this.meta=t},eA=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0;n<eP.length;n++){var r=eP[n];"string"==typeof e[r]&&(t[r]=e[r])}return t}return{message:String(e)}},eD=function(){function e(e,t,n){var r=eC(e+"/fulfilled",function(e,t,n,r){return{payload:e,meta:eb(ey({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}}),i=eC(e+"/pending",function(e,t,n){return{payload:void 0,meta:eb(ey({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),s=eC(e+"/rejected",function(e,t,r,i,s){return{payload:i,error:(n&&n.serializeError||eA)(e||"Rejected"),meta:eb(ey({},s||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(a,l,u){var c,h=(null==n?void 0:n.idGenerator)?n.idGenerator(e):eR(),d=new o,p=new Promise(function(e,t){return d.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),f=!1;function _(e){f&&(c=e,d.abort())}var m=function(){var o,c;return o=this,c=function(){var o,c,m,g,v,y;return ec(this,function(y){switch(y.label){case 0:var b;if(y.trys.push([0,4,,5]),b=g=null==(o=null==n?void 0:n.condition)?void 0:o.call(n,e,{getState:l,extra:u}),null===b||"object"!=typeof b||"function"!=typeof b.then)return[3,2];return[4,g];case 1:g=y.sent(),y.label=2;case 2:if(!1===g)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return f=!0,a(i(h,e,null==(c=null==n?void 0:n.getPendingMeta)?void 0:c.call(n,{requestId:h,arg:e},{getState:l,extra:u}))),[4,Promise.race([p,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:h,signal:d.signal,abort:_,rejectWithValue:function(e,t){return new eN(e,t)},fulfillWithValue:function(e,t){return new eO(e,t)}})).then(function(t){if(t instanceof eN)throw t;return t instanceof eO?r(t.payload,h,e,t.meta):r(t,h,e)})])];case 3:return m=y.sent(),[3,5];case 4:return m=(v=y.sent())instanceof eN?s(null,h,e,v.payload,v.meta):s(v,h,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&s.match(m)&&m.meta.condition||a(m),[2,m]}})},new Promise(function(e,t){var n=function(e){try{i(c.next(e))}catch(n){t(n)}},r=function(e){try{i(c.throw(e))}catch(n){t(n)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(n,r)};i((c=c.apply(o,null)).next())})}();return Object.assign(m,{abort:_,requestId:h,arg:e,unwrap:function(){return m.then(ex)}})}},{pending:i,rejected:s,fulfilled:r,typePrefix:e})}return e.withTypes=e,e}();function ex(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var eL="listenerMiddleware";eC(eL+"/add"),eC(eL+"/removeAll"),eC(eL+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:n.g),function(){function e(e,t){var n=u[e];return n?n.enumerable=t:u[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[B];return K.get(t,e)},set:function(t){var n=this[B];K.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][B];if(!i.P)switch(i.i){case 5:r(i)&&N(i);break;case 4:n(i)&&N(i)}}}function n(e){for(var t=e.t,n=e.k,r=z(n),i=r.length-1;i>=0;i--){var s=r[i];if(s!==B){var o=t[s];if(void 0===o&&!l(t,s))return!0;var a=n[s],u=a&&a[B];if(u?u.t!==o:!c(a,o))return!0}}var h=!!t[B];return r.length!==z(t).length+(h?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var s,a,u={};a={J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var s=$(n);delete s[B];for(var o=z(s),a=0;a<o.length;a++){var l=o[a];s[l]=e(l,t||!!s[l].enumerable)}return Object.create(Object.getPrototypeOf(n),s)}(r,t),s={i:r?5:4,A:n?n.A:M,P:!1,I:!1,D:{},l:n,t:t,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,B,{value:s,writable:!0}),i},S:function(e,n,s){s?i(n)&&n[B].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[B];if(n){var i=n.t,s=n.k,a=n.D,u=n.i;if(4===u)o(s,function(t){t!==B&&(void 0!==i[t]||l(i,t)?a[t]||e(s[t]):(a[t]=!0,N(n)))}),o(i,function(e){void 0!==s[e]||l(s,e)||(a[e]=!1,N(n))});else if(5===u){if(r(n)&&(N(n),a.length=!0),s.length<i.length)for(var c=s.length;c<i.length;c++)a[c]=!1;else for(var h=i.length;h<s.length;h++)a[h]=!0;for(var d=Math.min(s.length,i.length),p=0;p<d;p++)s.hasOwnProperty(p)||(a[p]=!0),void 0===a[p]&&e(s[p])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}},G.ES5||(G.ES5=a)}()},8679:function(e,t,n){"use strict";var r=n(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return r.isMemo(e)?o:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(f){var i=p(n);i&&i!==f&&e(t,i,r)}var o=c(n);h&&(o=o.concat(h(n)));for(var a=l(t),_=l(n),m=0;m<o.length;++m){var g=o[m];if(!s[g]&&!(r&&r[g])&&!(_&&_[g])&&!(a&&a[g])){var v=d(n,g);try{u(t,g,v)}catch(y){}}}}return t}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7726)}])},3940:function(e,t,n){"use strict";n.d(t,{fZ:function(){return g},lQ:function(){return v},rX:function(){return y},I8:function(){return h7},db:function(){return de},tO:function(){return dt}});var r,i,s,o,a,l,u,c,h,d,p,f,_,m,g={};n.r(g),n.d(g,{ActionCodeOperation:function(){return e9},ActionCodeURL:function(){return nS},AuthCredential:function(){return no},AuthErrorCodes:function(){return tr},EmailAuthCredential:function(){return nv},EmailAuthProvider:function(){return nP},FacebookAuthProvider:function(){return nD},FactorId:function(){return e4},GithubAuthProvider:function(){return nL},GoogleAuthProvider:function(){return nx},OAuthCredential:function(){return nb},OAuthProvider:function(){return nA},OperationType:function(){return e8},PhoneAuthCredential:function(){return nk},PhoneAuthProvider:function(){return ip},PhoneMultiFactorGenerator:function(){return se},ProviderId:function(){return e6},RecaptchaVerifier:function(){return io},SAMLAuthProvider:function(){return nU},SignInMethod:function(){return e5},TwitterAuthProvider:function(){return nF},applyActionCode:function(){return n8},beforeAuthStateChanged:function(){return rT},browserLocalPersistence:function(){return rF},browserPopupRedirectResolver:function(){return i8},browserSessionPersistence:function(){return rj},checkActionCode:function(){return n9},confirmPasswordReset:function(){return n5},connectAuthEmulator:function(){return nr},createUserWithEmailAndPassword:function(){return re},debugErrorMap:function(){return te},deleteUser:function(){return rR},fetchSignInMethodsForEmail:function(){return ro},getAdditionalUserInfo:function(){return rb},getAuth:function(){return si},getIdToken:function(){return tM},getIdTokenResult:function(){return tU},getMultiFactorResolver:function(){return rO},getRedirectResult:function(){return iq},inMemoryPersistence:function(){return tJ},indexedDBLocalPersistence:function(){return r3},initializeAuth:function(){return tm},isSignInWithEmailLink:function(){return rr},linkWithCredential:function(){return nX},linkWithPhoneNumber:function(){return iu},linkWithPopup:function(){return iE},linkWithRedirect:function(){return iU},multiFactor:function(){return rx},onAuthStateChanged:function(){return rE},onIdTokenChanged:function(){return rI},parseActionCodeURL:function(){return nR},prodErrorMap:function(){return tt},reauthenticateWithCredential:function(){return nZ},reauthenticateWithPhoneNumber:function(){return ic},reauthenticateWithPopup:function(){return iT},reauthenticateWithRedirect:function(){return iL},reload:function(){return tH},sendEmailVerification:function(){return ra},sendPasswordResetEmail:function(){return n6},sendSignInLinkToEmail:function(){return rn},setPersistence:function(){return rw},signInAnonymously:function(){return nV},signInWithCredential:function(){return nQ},signInWithCustomToken:function(){return n1},signInWithEmailAndPassword:function(){return rt},signInWithEmailLink:function(){return ri},signInWithPhoneNumber:function(){return il},signInWithPopup:function(){return iI},signInWithRedirect:function(){return iD},signOut:function(){return rS},unlink:function(){return n$},updateCurrentUser:function(){return rk},updateEmail:function(){return rh},updatePassword:function(){return rd},updatePhoneNumber:function(){return id},updateProfile:function(){return rc},useDeviceLanguage:function(){return rC},verifyBeforeUpdateEmail:function(){return rl},verifyPasswordResetCode:function(){return n7}});var v={};n.r(v),n.d(v,{DataSnapshot:function(){return uM},Database:function(){return cb},OnDisconnect:function(){return uN},QueryConstraint:function(){return u3},TransactionResult:function(){return cA},_QueryImpl:function(){return uO},_QueryParams:function(){return ae},_ReferenceImpl:function(){return uL},_TEST_ACCESS_forceRestClient:function(){return cL},_TEST_ACCESS_hijackHash:function(){return cx},_repoManagerDatabaseFromApp:function(){return cy},_setSDKVersion:function(){return su},_validatePathString:function(){return l3},_validateWritablePath:function(){return l6},child:function(){return uq},connectDatabaseEmulator:function(){return cC},enableLogging:function(){return cR},endAt:function(){return u6},endBefore:function(){return u8},equalTo:function(){return c_},forceLongPolling:function(){return cT},forceWebSockets:function(){return cI},get:function(){return uG},getDatabase:function(){return cE},goOffline:function(){return ck},goOnline:function(){return cS},increment:function(){return cO},limitToFirst:function(){return cr},limitToLast:function(){return cs},off:function(){return u2},onChildAdded:function(){return uX},onChildChanged:function(){return uZ},onChildMoved:function(){return u0},onChildRemoved:function(){return u1},onDisconnect:function(){return uj},onValue:function(){return uQ},orderByChild:function(){return ca},orderByKey:function(){return cu},orderByPriority:function(){return ch},orderByValue:function(){return cp},push:function(){return uW},query:function(){return cm},ref:function(){return uU},refFromURL:function(){return uF},remove:function(){return uV},runTransaction:function(){return cD},serverTimestamp:function(){return cN},set:function(){return uB},setPriority:function(){return uH},setWithPriority:function(){return uz},startAfter:function(){return ct},startAt:function(){return u7},update:function(){return u$}});var y={};n.r(y),n.d(y,{StringFormat:function(){return c6},_FbsBlob:function(){return ht},_Location:function(){return cK},_TaskEvent:function(){return hT},_TaskState:function(){return hE},_UploadTask:function(){return hL},_dataFromString:function(){return c8},_getChild:function(){return h3},_invalidArgument:function(){return cB},_invalidRootOperation:function(){return cz},connectStorageEmulator:function(){return h6},deleteObject:function(){return h1},getBlob:function(){return h5},getBytes:function(){return h$},getDownloadURL:function(){return h0},getMetadata:function(){return hJ},getStorage:function(){return h4},getStream:function(){return h8},list:function(){return hX},listAll:function(){return hZ},ref:function(){return h2},updateMetadata:function(){return hQ},uploadBytes:function(){return hG},uploadBytesResumable:function(){return hY},uploadString:function(){return hK}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},w=function(e,t){if(!e)throw I(t)},I=function(e){return Error("Firebase Database ("+b.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},T=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},E=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let o=e[n++],a=e[n++],l=e[n++],u=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let c=e[n++],h=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&h)}}return t.join("")},C={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,p=63&u;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;let l=i<e.length,u=l?n[e.charAt(i)]:64;++i;let c=i<e.length,h=c?n[e.charAt(i)]:64;if(++i,null==s||null==a||null==u||null==h)throw Error();let d=s<<2|a>>4;if(r.push(d),64!==u){let p=a<<4&240|u>>2;if(r.push(p),64!==h){let f=u<<6&192|h;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},k=function(e){let t=T(e);return C.encodeByteArray(t,!0)},S=function(e){return k(e).replace(/\./g,"")},R=function(e){try{return C.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function P(e){return"__proto__"!==e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function D(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(A())}function x(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function L(){return!0===b.NODE_CLIENT||!0===b.NODE_ADMIN}class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(n=o,r=i,n.replace(F,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`,u=new M(s,l,i);return u}}let F=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q(e){return JSON.parse(e)}function j(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let W=function(e){let t={},n={},r={},i="";try{let s=e.split(".");t=q(R(s[0])||""),n=q(R(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:r,signature:i}},V=function(e){let t=W(e),n=t.claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},B=function(e){let t=W(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function $(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function G(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function K(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let s=e[i],o=t[i];if(Y(s)&&Y(o)){if(!K(s,o))return!1}else if(s!==o)return!1}for(let a of r)if(!n.includes(a))return!1;return!0}function Y(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Q(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function X(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let s=16;s<80;s++){let o=n[s-3]^n[s-8]^n[s-14]^n[s-16];n[s]=(o<<1|o>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],c=this.chain_[3],h=this.chain_[4],d,p;for(let f=0;f<80;f++){f<40?f<20?(d=c^l&(u^c),p=1518500249):(d=l^u^c,p=1859775393):f<60?(d=l&u|c&(l|u),p=2400959708):(d=l^u^c,p=3395469782);let _=(a<<5|a>>>27)+d+h+p+n[f]&4294967295;h=c,c=u,u=(l<<30|l>>>2)&4294967295,l=a,a=_}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}class ee{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=et),void 0===r.error&&(r.error=et),void 0===r.complete&&(r.complete=et);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){!this.finalized&&(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function et(){}function en(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let er=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let s=i-55296;w(++r<e.length,"Surrogate pair missing trail surrogate.");let o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ei=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function es(e){return e&&e._delegate?e._delegate:e}class eo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ea="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class el{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new N;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){var t;if(t=e,"EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ea})}catch(n){}for(let[r,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(r);try{let o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch(a){}}}}clearInstance(e=ea){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ea){return this.instances.has(e)}getOptions(e=ea){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,s]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(i);n===o&&s.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===ea?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=ea){return this.component?this.component.multipleInstances?e:ea:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new el(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ec=[];(r=f||(f={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let eh={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},ed=f.INFO,ep={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},ef=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=ep[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e_{constructor(e){this.name=e,this._logLevel=ed,this._logHandler=ef,this._userLogHandler=null,ec.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}let em=(e,t)=>t.some(t=>e instanceof t),eg,ev,ey=new WeakMap,eb=new WeakMap,ew=new WeakMap,eI=new WeakMap,eT=new WeakMap,eE={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eb.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ew.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eC(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eC(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eC(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&ey.set(t,e)}).catch(()=>{}),eT.set(t,e),t}(e);if(eI.has(e))return eI.get(e);let t=function(e){if("function"==typeof e){var t;return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(e)?function(...t){return e.apply(ek(this),t),eC(ey.get(this))}:function(...t){return eC(e.apply(ek(this),t))}:function(t,...n){let r=e.call(ek(this),t,...n);return ew.set(r,t.sort?t.sort():[t]),eC(r)}}return(e instanceof IDBTransaction&&function(e){if(eb.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eb.set(e,t)}(e),em(e,eg||(eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(e,eE):e}(e);return t!==e&&(eI.set(e,t),eT.set(t,e)),t}let ek=e=>eT.get(e),eS=["get","getKey","getAll","getAllKeys","count"],eR=["put","add","delete","clear"],eP=new Map;function eN(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eP.get(t))return eP.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=eR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eS.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done,]))[0]};return eP.set(t,s),s}eE=(i=e=>({...e,get:(t,n,r)=>eN(t,n)||e.get(t,n,r),has:(t,n)=>!!eN(t,n)||e.has(t,n)}))(eE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eO{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eA="@firebase/app",eD="0.7.33",ex=new e_("@firebase/app"),eL="[DEFAULT]",eM={[eA]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eU=new Map,eF=new Map;function eq(e,t){try{e.container.addComponent(t)}catch(n){ex.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ej(e){let t=e.name;if(eF.has(t))return ex.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eF.set(t,e),eU.values()))eq(n,e);return!0}function eW(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let eV=new U("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eB{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eV.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eH="9.10.0";function ez(e=eL){let t=eU.get(e);if(!t)throw eV.create("no-app",{appName:e});return t}function e$(e,t,n){var r;let i=null!==(r=eM[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ex.warn(a.join(" "));return}ej(new eo(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let eG="firebase-heartbeat-store",eK=null;function eY(){return eK||(eK=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=eC(o);return r&&o.addEventListener("upgradeneeded",e=>{r(eC(o.result),e.oldVersion,e.newVersion,eC(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(eG)}}).catch(e=>{throw eV.create("idb-open",{originalErrorMessage:e.message})})),eK}async function eJ(e){var t;try{let n=await eY();return n.transaction(eG).objectStore(eG).get(eX(e))}catch(i){if(i instanceof M)ex.warn(i.message);else{let r=eV.create("idb-get",{originalErrorMessage:null===(t=i)||void 0===t?void 0:t.message});ex.warn(r.message)}}}async function eQ(e,t){var n;try{let r=await eY(),i=r.transaction(eG,"readwrite"),s=i.objectStore(eG);return await s.put(t,eX(e)),i.done}catch(a){if(a instanceof M)ex.warn(a.message);else{let o=eV.create("idb-set",{originalErrorMessage:null===(n=a)||void 0===n?void 0:n.message});ex.warn(o.message)}}}function eX(e){return`${e.name}!${e.options.appId}`}class eZ{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new e1(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=e0();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=e0(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let s=n.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),e2(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),e2(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function e0(){let e=new Date;return e.toISOString().substring(0,10)}class e1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await eJ(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return eQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return eQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function e2(e){return S(JSON.stringify({version:2,heartbeats:e})).length}ej(new eo("platform-logger",e=>new eO(e),"PRIVATE")),ej(new eo("heartbeat",e=>new eZ(e),"PRIVATE")),e$(eA,eD,""),e$(eA,eD,"esm2017"),e$("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ e$("firebase","9.10.0","app");var e3=n(655);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let e4={PHONE:"phone"},e6={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},e5={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},e8={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},e9={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function e7(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let te=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},tt=e7,tn=new U("auth","Firebase",e7()),tr={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},ti=new e_("@firebase/auth");function ts(e,...t){ti.logLevel<=f.ERROR&&ti.error(`Auth (${eH}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function to(e,...t){throw tc(e,...t)}function ta(e,...t){return tc(e,...t)}function tl(e,t,n){let r=Object.assign(Object.assign({},tt()),{[t]:n}),i=new U("auth","Firebase",r);return i.create(t,{appName:e.name})}function tu(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&to(e,"argument-error"),tl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tc(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return tn.create(e,...t)}function th(e,t,...n){if(!e)throw tc(t,...n)}function td(e){let t="INTERNAL ASSERTION FAILED: "+e;throw ts(t),Error(t)}function tp(e,t){e||td(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tf=new Map;function t_(e){tp(e instanceof Function,"Expected a class definition");let t=tf.get(e);return t?(tp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tf.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tm(e,t){let n=eW(e,"auth");if(n.isInitialized()){let r=n.getImmediate(),i=n.getOptions();if(K(i,null!=t?t:{}))return r;to(r,"already-initialized")}let s=n.initialize({options:t});return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tg(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tv(){return"http:"===ty()||"https:"===ty()}function ty(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tb{constructor(e,t){this.shortDelay=e,this.longDelay=t,tp(t>e,"Short delay should be less than long delay!"),this.isMobile=D()||x()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(tv()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tw(e,t){tp(e.emulator,"Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tI{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void td("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void td("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void td("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},tE=new tb(3e4,6e4);function tC(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tk(e,t,n,r,i={}){return tS(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});let o=J(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tI.fetch()(tP(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function tS(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},tT),t);try{let i=new tN(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw tO(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===l)throw tO(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw tO(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw tO(e,"user-disabled",o);let c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tl(e,c,u);to(e,c)}}catch(h){if(h instanceof M)throw h;to(e,"network-request-failed")}}async function tR(e,t,n,r,i={}){let s=await tk(e,t,n,r,i);return"mfaPendingCredential"in s&&to(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tP(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?tw(e.config,i):`${e.config.apiScheme}://${i}`}class tN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ta(this.auth,"network-request-failed")),tE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tO(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=ta(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tA(e,t){return tk(e,"POST","/v1/accounts:delete",t)}async function tD(e,t){return tk(e,"POST","/v1/accounts:update",t)}async function tx(e,t){return tk(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tL(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tM(e,t=!1){return es(e).getIdToken(t)}async function tU(e,t=!1){let n=es(e),r=await n.getIdToken(t),i=tq(r);th(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tL(tF(i.auth_time)),issuedAtTime:tL(tF(i.iat)),expirationTime:tL(tF(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function tF(e){return 1e3*Number(e)}function tq(e){var t;let[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return ts("JWT malformed, contained fewer than 3 sections"),null;try{let s=R(r);if(!s)return ts("Failed to decode base64 JWT payload"),null;return JSON.parse(s)}catch(o){return ts("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tj(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof M&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tW{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=r-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){(null===(e=t)||void 0===e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tV{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tL(this.lastLoginAt),this.creationTime=tL(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tB(e){var t,n;let r=e.auth,i=await e.getIdToken(),s=await tj(e,tx(r,{idToken:i}));th(null==s?void 0:s.users.length,r,"internal-error");let o=s.users[0];e._notifyReloadListener(o);let a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?(n=o.providerUserInfo,n.map(e=>{var{providerId:t}=e,n=(0,e3.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],l=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,a),u=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==l?void 0:l.length),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new tV(o.createdAt,o.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function tH(e){let t=es(e);await tB(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tz(e,t){let n=await tS(e,{},async()=>{let n=J({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=tP(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tI.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){th(e.idToken,"internal-error"),th(void 0!==e.idToken,"internal-error"),th(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=tq(e);return th(t,"internal-error"),th(void 0!==t.exp,"internal-error"),th(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(th(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await tz(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new t$;return n&&(th("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(th("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(th("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t$,this.toJSON())}_performRefresh(){return td("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tG(e,t){th("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tK{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,e3.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tW(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tV(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await tj(this,this.stsTokenManager.getToken(this.auth,e));return th(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tU(this,e)}reload(){return tH(this)}_assign(e){this!==e&&(th(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tK(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){th(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tB(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await tj(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:I}=t;th(v&&I,e,"internal-error");let T=t$.fromJSON(this.name,I);th("string"==typeof v,e,"internal-error"),tG(c,e.name),tG(h,e.name),th("boolean"==typeof y,e,"internal-error"),th("boolean"==typeof b,e,"internal-error"),tG(d,e.name),tG(p,e.name),tG(f,e.name),tG(_,e.name),tG(m,e.name),tG(g,e.name);let E=new tK({uid:v,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(E.providerData=w.map(e=>Object.assign({},e))),_&&(E._redirectEventId=_),E}static async _fromIdTokenResponse(e,t,n=!1){let r=new t$;r.updateFromServerResponse(t);let i=new tK({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await tB(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tY{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tY.type="NONE";let tJ=tY;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tQ(e,t,n){return`firebase:${e}:${t}:${n}`}class tX{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=tQ(this.userKey,r.apiKey,i),this.fullPersistenceKey=tQ("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tK._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new tX(t_(tJ),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||t_(tJ),s=tQ(n,e.config.apiKey,e.name),o=null;for(let a of t)try{let l=await a._get(s);if(l){let u=tK._fromJSON(e,l);a!==i&&(o=u),i=a;break}}catch(c){}let h=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&h.length&&(i=h[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new tX(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tZ(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(t3(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(t0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(t6(t))return"Blackberry";if(t5(t))return"Webos";if(t1(t))return"Safari";if((t.includes("chrome/")||t2(t))&&!t.includes("edge/"))return"Chrome";if(t4(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function t0(e=A()){return/firefox\//i.test(e)}function t1(e=A()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function t2(e=A()){return/crios\//i.test(e)}function t3(e=A()){return/iemobile/i.test(e)}function t4(e=A()){return/android/i.test(e)}function t6(e=A()){return/blackberry/i.test(e)}function t5(e=A()){return/webos/i.test(e)}function t8(e=A()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function t9(e=A()){return t8(e)||t4(e)||t5(e)||t6(e)||/windows phone/i.test(e)||t3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function t7(e,t=[]){let n;switch(e){case"Browser":n=tZ(A());break;case"Worker":n=`${tZ(A())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${eH}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let i=e(t);n(i)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(o){for(let i of(n.reverse(),n))try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=o)||void 0===t?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nt{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nn(this),this.idTokenSubscription=new nn(this),this.beforeStateQueue=new ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=t_(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await tX.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&(null==a?void 0:a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(th(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await tB(e)}catch(n){if((null===(t=n)||void 0===t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?es(e):null;return t&&th(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&th(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(t_(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new U("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&t_(e)||this._popupRedirectResolver;th(t,this,"argument-error"),this.redirectPersistenceManager=await tX.create(this,[t_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(th(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return th(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!(!e||this.frameworks.includes(e))&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t7(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}class nn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let n=new ee(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return th(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function nr(e,t,n){var r;let i=es(e);th(i._canInitEmulator,i,"emulator-config-failed"),th(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");let s=!!(null==n?void 0:n.disableWarnings),o=ni(t),{host:a,port:l}=function(e){let t=ni(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:ns(r.substr(s.length+1))}}{let[o,a]=r.split(":");return{host:o,port:ns(a)}}}(t),u=null===l?"":`:${l}`;i.config.emulator={url:`${o}//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function ni(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ns(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class no{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return td("not implemented")}_getIdTokenResponse(e){return td("not implemented")}_linkToIdToken(e,t){return td("not implemented")}_getReauthenticationResolver(e){return td("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function na(e,t){return tk(e,"POST","/v1/accounts:resetPassword",tC(e,t))}async function nl(e,t){return tk(e,"POST","/v1/accounts:update",t)}async function nu(e,t){return tk(e,"POST","/v1/accounts:update",tC(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nc(e,t){return tR(e,"POST","/v1/accounts:signInWithPassword",tC(e,t))}async function nh(e,t){return tk(e,"POST","/v1/accounts:sendOobCode",tC(e,t))}async function nd(e,t){return nh(e,t)}async function np(e,t){return nh(e,t)}async function nf(e,t){return nh(e,t)}async function n_(e,t){return nh(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nm(e,t){return tR(e,"POST","/v1/accounts:signInWithEmailLink",tC(e,t))}async function ng(e,t){return tR(e,"POST","/v1/accounts:signInWithEmailLink",tC(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nv extends no{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new nv(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nv(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nc(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nm(e,{email:this._email,oobCode:this._password});default:to(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nl(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ng(e,{idToken:t,email:this._email,oobCode:this._password});default:to(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ny(e,t){return tR(e,"POST","/v1/accounts:signInWithIdp",tC(e,t))}class nb extends no{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new nb(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):to("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,e3.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new nb(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return ny(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,ny(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ny(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=J(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nw(e,t){return tk(e,"POST","/v1/accounts:sendVerificationCode",tC(e,t))}async function nI(e,t){return tR(e,"POST","/v1/accounts:signInWithPhoneNumber",tC(e,t))}async function nT(e,t){let n=await tR(e,"POST","/v1/accounts:signInWithPhoneNumber",tC(e,t));if(n.temporaryProof)throw tO(e,"account-exists-with-different-credential",n);return n}let nE={USER_NOT_FOUND:"user-not-found"};async function nC(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return tR(e,"POST","/v1/accounts:signInWithPhoneNumber",tC(e,n),nE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nk extends no{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new nk({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new nk({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nT(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return nC(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new nk({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class nS{constructor(e){var t,n,r,i,s,o;let a=Q(X(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);th(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=Q(X(e)).link,n=t?Q(X(t)).deep_link_id:null,r=Q(X(e)).deep_link_id,i=r?Q(X(r)).link:null;return i||r||n||t||e}(e);try{return new nS(t)}catch(n){return null}}}function nR(e){return nS.parseLink(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nP{constructor(){this.providerId=nP.PROVIDER_ID}static credential(e,t){return nv._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=nS.parseLink(t);return th(n,"argument-error"),nv._fromEmailAndCode(e,n.code,n.tenantId)}}nP.PROVIDER_ID="password",nP.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nP.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nN{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nO extends nN{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class nA extends nO{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return th("providerId"in t&&"signInMethod"in t,"argument-error"),nb._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return th(e.idToken||e.accessToken,"argument-error"),nb._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return nA.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return nA.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i||!o)return null;try{return new nA(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nD extends nO{constructor(){super("facebook.com")}static credential(e){return nb._fromParams({providerId:nD.PROVIDER_ID,signInMethod:nD.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nD.credentialFromTaggedObject(e)}static credentialFromError(e){return nD.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nD.credential(e.oauthAccessToken)}catch(t){return null}}}nD.FACEBOOK_SIGN_IN_METHOD="facebook.com",nD.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nx extends nO{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nb._fromParams({providerId:nx.PROVIDER_ID,signInMethod:nx.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nx.credentialFromTaggedObject(e)}static credentialFromError(e){return nx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nx.credential(t,n)}catch(r){return null}}}nx.GOOGLE_SIGN_IN_METHOD="google.com",nx.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nL extends nO{constructor(){super("github.com")}static credential(e){return nb._fromParams({providerId:nL.PROVIDER_ID,signInMethod:nL.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nL.credentialFromTaggedObject(e)}static credentialFromError(e){return nL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nL.credential(e.oauthAccessToken)}catch(t){return null}}}nL.GITHUB_SIGN_IN_METHOD="github.com",nL.PROVIDER_ID="github.com";class nM extends no{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){let t=this.buildRequest();return ny(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,ny(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ny(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new nM(n,i):null}static _create(e,t){return new nM(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class nU extends nN{constructor(e){th(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return nU.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return nU.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=nM.fromJSON(e);return th(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return nM._create(n,t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nF extends nO{constructor(){super("twitter.com")}static credential(e,t){return nb._fromParams({providerId:nF.PROVIDER_ID,signInMethod:nF.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nF.credentialFromTaggedObject(e)}static credentialFromError(e){return nF.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nF.credential(t,n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nq(e,t){return tR(e,"POST","/v1/accounts:signUp",tC(e,t))}nF.TWITTER_SIGN_IN_METHOD="twitter.com",nF.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nj{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await tK._fromIdTokenResponse(e,n,r),s=nW(n),o=new nj({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=nW(n);return new nj({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function nW(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nV(e){var t,n;let r=es(e);if(await r._initializationPromise,null===(t=r.currentUser)||void 0===t?void 0:t.isAnonymous)return new nj({user:r.currentUser,providerId:null,operationType:"signIn"});let i=await nq(r,{returnSecureToken:!0}),s=await nj._fromIdTokenResponse(r,"signIn",i,!0);return await r._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nB extends M{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nB.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nB(e,t,n,r)}}function nH(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nB._fromErrorAndOperation(e,n,t,r);throw n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nz(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n$(e,t){let n=es(e);await nK(!0,n,t);let{providerUserInfo:r}=await tD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=nz(r||[]);return n.providerData=n.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function nG(e,t,n=!1){let r=await tj(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nj._forOperation(e,"link",r)}async function nK(e,t,n){await tB(t);let r=nz(t.providerData);th(r.has(n)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nY(e,t,n=!1){var r;let{auth:i}=e,s="reauthenticate";try{let o=await tj(e,nH(i,s,t,e),n);th(o.idToken,i,"internal-error");let a=tq(o.idToken);th(a,i,"internal-error");let{sub:l}=a;return th(e.uid===l,i,"user-mismatch"),nj._forOperation(e,s,o)}catch(u){throw(null===(r=u)||void 0===r?void 0:r.code)==="auth/user-not-found"&&to(i,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nJ(e,t,n=!1){let r="signIn",i=await nH(e,r,t),s=await nj._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function nQ(e,t){var n;return nJ(es(e),t)}async function nX(e,t){let n=es(e);return await nK(!1,n,t.providerId),nG(n,t)}async function nZ(e,t){return nY(es(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n0(e,t){return tR(e,"POST","/v1/accounts:signInWithCustomToken",tC(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n1(e,t){var n;let r=es(e),i=await n0(r,{token:t,returnSecureToken:!0}),s=await nj._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n2{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?n3._fromServerResponse(e,t):to(e,"internal-error")}}class n3 extends n2{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new n3(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function n4(e,t,n){var r;th((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),th(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(th(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(th(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n6(e,t,n){let r=es(e),i={requestType:"PASSWORD_RESET",email:t};n&&n4(r,i,n),await np(r,i)}async function n5(e,t,n){await na(es(e),{oobCode:t,newPassword:n})}async function n8(e,t){await nu(es(e),{oobCode:t})}async function n9(e,t){let n=es(e),r=await na(n,{oobCode:t}),i=r.requestType;switch(th(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":th(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":th(r.mfaInfo,n,"internal-error");default:th(r.email,n,"internal-error")}let s=null;if(r.mfaInfo){var o;s=n2._fromServerResponse(es(n),r.mfaInfo)}return{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function n7(e,t){let{data:n}=await n9(es(e),t);return n.email}async function re(e,t,n){var r;let i=es(e),s=await nq(i,{returnSecureToken:!0,email:t,password:n}),o=await nj._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(o.user),o}function rt(e,t,n){return nQ(es(e),nP.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rn(e,t,n){let r=es(e),i={requestType:"EMAIL_SIGNIN",email:t};th(n.handleCodeInApp,r,"argument-error"),n&&n4(r,i,n),await nf(r,i)}function rr(e,t){let n=nS.parseLink(t);return(null==n?void 0:n.operation)==="EMAIL_SIGNIN"}async function ri(e,t,n){let r=es(e),i=nP.credentialWithLink(t,n||tg());return th(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),nQ(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rs(e,t){return tk(e,"POST","/v1/accounts:createAuthUri",tC(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ro(e,t){let n=tv()?tg():"http://localhost",{signinMethods:r}=await rs(es(e),{identifier:t,continueUri:n});return r||[]}async function ra(e,t){let n=es(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&n4(n.auth,i,t);let{email:s}=await nd(n.auth,i);s!==e.email&&await e.reload()}async function rl(e,t,n){let r=es(e),i=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&n4(r.auth,s,n);let{email:o}=await n_(r.auth,s);o!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ru(e,t){return tk(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rc(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let r=es(e),i=await r.getIdToken(),s=await tj(r,ru(r.auth,{idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0}));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;let o=r.providerData.find(({providerId:e})=>"password"===e);o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function rh(e,t){return rp(es(e),t,null)}function rd(e,t){return rp(es(e),null,t)}async function rp(e,t,n){let{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);let o=await tj(e,nl(r,s));await e._updateTokensIfNecessary(o,!0)}class rf{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class r_ extends rf{constructor(e,t,n,r){super(e,t,n),this.username=r}}class rm extends rf{constructor(e,t){super(e,"facebook.com",t)}}class rg extends r_{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class rv extends rf{constructor(e,t){super(e,"google.com",t)}}class ry extends r_{constructor(e,t,n){super(e,"twitter.com",t,n)}}function rb(e){let{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){var t,n;if(!e)return null;let{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){let o=null===(n=null===(t=tq(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(o)return new rf(s,"anonymous"!==o&&"custom"!==o?o:null)}if(!r)return null;switch(r){case"facebook.com":return new rm(s,i);case"github.com":return new rg(s,i);case"google.com":return new rv(s,i);case"twitter.com":return new ry(s,i,e.screenName||null);case"custom":case"anonymous":return new rf(s,null);default:return new rf(s,r,i)}}(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rw(e,t){return es(e).setPersistence(t)}function rI(e,t,n,r){return es(e).onIdTokenChanged(t,n,r)}function rT(e,t,n){return es(e).beforeAuthStateChanged(t,n)}function rE(e,t,n,r){return es(e).onAuthStateChanged(t,n,r)}function rC(e){es(e).useDeviceLanguage()}function rk(e,t){return es(e).updateCurrentUser(t)}function rS(e){return es(e).signOut()}async function rR(e){return es(e).delete()}class rP{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new rP("enroll",e,t)}static _fromMfaPendingCredential(e){return new rP("signin",e)}toJSON(){let e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return rP._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return rP._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rN{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){var n;let r=es(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(e=>n2._fromServerResponse(r,e));th(i.mfaPendingCredential,r,"internal-error");let o=rP._fromMfaPendingCredential(i.mfaPendingCredential);return new rN(o,s,async e=>{let n=await e._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;let s=Object.assign(Object.assign({},i),{idToken:n.idToken,refreshToken:n.refreshToken});switch(t.operationType){case"signIn":let a=await nj._fromIdTokenResponse(r,t.operationType,s);return await r._updateCurrentUser(a.user),a;case"reauthenticate":return th(t.user,r,"internal-error"),nj._forOperation(t.user,t.operationType,s);default:to(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}function rO(e,t){var n;let r=es(e);return th(t.customData.operationType,r,"argument-error"),th(null===(n=t.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),rN._fromError(r,t)}class rA{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>n2._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new rA(e)}async getSession(){return rP._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){let n=await this.getSession(),r=await tj(this.user,e._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t,n,r;let i="string"==typeof e?e:e.uid,s=await this.user.getIdToken(),o=await tj(this.user,tk(n=this.user.auth,"POST","/v2/accounts/mfaEnrollment:withdraw",tC(n,{idToken:s,mfaEnrollmentId:i})));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==i),await this.user._updateTokensIfNecessary(o);try{await this.user.reload()}catch(a){if((null===(t=a)||void 0===t?void 0:t.code)!=="auth/user-token-expired")throw a}}}let rD=new WeakMap;function rx(e){let t=es(e);return rD.has(t)||rD.set(t,rA._fromUser(t)),rD.get(t)}let rL="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rM{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rL,"1"),this.storage.removeItem(rL),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class rU extends rM{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=A();return t1(e)||t8(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=t9(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let i=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(function(){let e=A();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rU.type="LOCAL";let rF=rU;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rq extends rM{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rq.type="SESSION";let rj=rq;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rW{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new rW(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){var t;let{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});let o=Array.from(s).map(async t=>t(e.origin,i)),a=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rV(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}rW.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw Error("connection_unavailable");let i,s;return new Promise((o,a)=>{let l=rV("",20);r.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rH(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rz(){return void 0!==rH().WorkerGlobalScope&&"function"==typeof rH().importScripts}async function r$(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rG="firebaseLocalStorageDb",rK="firebaseLocalStorage",rY="fbase_key";class rJ{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rQ(e,t){return e.transaction([rK],t?"readwrite":"readonly").objectStore(rK)}function rX(){let e=indexedDB.open(rG,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rK,{keyPath:rY})}catch(r){n(r)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(rK)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(rG);return new rJ(e).toPromise()}(),t(await rX()))})})}async function rZ(e,t,n){let r=rQ(e,!0).put({[rY]:t,value:n});return new rJ(r).toPromise()}async function r0(e,t){let n=rQ(e,!1).get(t),r=await new rJ(n).toPromise();return void 0===r?null:r.value}function r1(e,t){let n=rQ(e,!0).delete(t);return new rJ(n).toPromise()}class r2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rX()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rz()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rW._getInstance(rz()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await r$(),!this.activeServiceWorker)return;this.sender=new rB(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rX();return await rZ(e,rL,"1"),await r1(e,rL),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rZ(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>r0(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>r1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=rQ(e,!1).getAll();return new rJ(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}r2.type="LOCAL";let r3=r2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function r4(e){return(await tk(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}function r6(e){return new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=ta("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)})}function r5(e){return`__${e}${Math.floor(1e6*Math.random())}`}class r8{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let n=this.counter;return this._widgets.set(n,new r9(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;let n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class r9{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let r="string"==typeof e?document.getElementById(e):e;th(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<50;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}(50);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r7=r5("rcb"),ie=new tb(3e4,6e4);class it{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=rH().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){var n;return(th((n=t,n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)),e,"argument-error"),this.shouldResolveImmediately(t))?Promise.resolve(rH().grecaptcha):new Promise((n,r)=>{let i=rH().setTimeout(()=>{r(ta(e,"network-request-failed"))},ie.get());rH()[r7]=()=>{rH().clearTimeout(i),delete rH()[r7];let s=rH().grecaptcha;if(!s){r(ta(e,"internal-error"));return}let o=s.render;s.render=(e,t)=>{let n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};let s=`https://www.google.com/recaptcha/api.js??${J({onload:r7,render:"explicit",hl:t})}`;r6(s).catch(()=>{clearTimeout(i),r(ta(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=rH().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class ir{async load(e){return new r8(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ii="recaptcha",is={theme:"light",type:"image"};class io{constructor(e,t=Object.assign({},is),n){var r;this.parameters=t,this.type=ii,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=es(n),this.isInvisible="invisible"===this.parameters.size,th("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let i="string"==typeof e?document.getElementById(e):e;th(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ir:new it,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{let r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){th(!this.parameters.sitekey,this.auth,"argument-error"),th(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),th("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let n=rH()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){th(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;th(tv()&&!rz(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await r4(this.auth);th(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return th(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ia{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=nk._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function il(e,t,n){var r;let i=es(e),s=await ih(i,t,es(n));return new ia(s,e=>nQ(i,e))}async function iu(e,t,n){let r=es(e);await nK(!1,r,"phone");let i=await ih(r.auth,t,es(n));return new ia(i,e=>nX(r,e))}async function ic(e,t,n){let r=es(e),i=await ih(r.auth,t,es(n));return new ia(i,e=>nZ(r,e))}async function ih(e,t,n){var r,i,s,o,a;let l=await n.verify();try{th("string"==typeof l,e,"argument-error"),th(n.type===ii,e,"argument-error");let u;if(u="string"==typeof t?{phoneNumber:t}:t,"session"in u){let c=u.session;if("phoneNumber"in u){th("enroll"===c.type,e,"internal-error");let h=await (i=e,s={idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:l}},tk(i,"POST","/v2/accounts/mfaEnrollment:start",tC(i,s)));return h.phoneSessionInfo.sessionInfo}{th("signin"===c.type,e,"internal-error");let d=(null===(r=u.multiFactorHint)||void 0===r?void 0:r.uid)||u.multiFactorUid;th(d,e,"missing-multi-factor-info");let p=await (o=e,a={mfaPendingCredential:c.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:l}},tk(o,"POST","/v2/accounts/mfaSignIn:start",tC(o,a)));return p.phoneResponseInfo.sessionInfo}}{let{sessionInfo:f}=await nw(e,{phoneNumber:u.phoneNumber,recaptchaToken:l});return f}}finally{n._reset()}}async function id(e,t){await nG(es(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ip{constructor(e){var t;this.providerId=ip.PROVIDER_ID,this.auth=es(e)}verifyPhoneNumber(e,t){return ih(this.auth,e,es(t))}static credential(e,t){return nk._fromVerification(e,t)}static credentialFromResult(e){return ip.credentialFromTaggedObject(e)}static credentialFromError(e){return ip.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?nk._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i_(e,t){return t?t_(t):(th(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}ip.PROVIDER_ID="phone",ip.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class im extends no{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ny(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ny(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ny(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ig(e){return nJ(e.auth,new im(e),e.bypassAuthState)}function iv(e){let{auth:t,user:n}=e;return th(n,t,"internal-error"),nY(n,new im(e),e.bypassAuthState)}async function iy(e){let{auth:t,user:n}=e;return th(n,t,"internal-error"),nG(n,new im(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ib{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ig;case"linkViaPopup":case"linkViaRedirect":return iy;case"reauthViaPopup":case"reauthViaRedirect":return iv;default:to(this.auth,"internal-error")}}resolve(e){tp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iw=new tb(2e3,1e4);async function iI(e,t,n){var r;let i=es(e);tu(e,t,nN);let s=i_(i,n),o=new iC(i,"signInViaPopup",t,s);return o.executeNotNull()}async function iT(e,t,n){let r=es(e);tu(r.auth,t,nN);let i=i_(r.auth,n),s=new iC(r.auth,"reauthViaPopup",t,i,r);return s.executeNotNull()}async function iE(e,t,n){let r=es(e);tu(r.auth,t,nN);let i=i_(r.auth,n),s=new iC(r.auth,"linkViaPopup",t,i,r);return s.executeNotNull()}class iC extends ib{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,iC.currentPopupAction&&iC.currentPopupAction.cancel(),iC.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return th(e,this.auth,"internal-error"),e}async onExecution(){tp(1===this.filter.length,"Popup operations only handle one event");let e=rV();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ta(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ta(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,iC.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ta(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iw.get())};e()}}iC.currentPopupAction=null;let ik=new Map;class iS extends ib{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ik.get(this.auth._key());if(!e){try{let t=await iR(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}ik.set(this.auth._key(),e)}return this.bypassAuthState||ik.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iR(e,t){let n=iA(t),r=iO(e);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}async function iP(e,t){return iO(e)._set(iA(t),"true")}function iN(e,t){ik.set(e._key(),t)}function iO(e){return t_(e._redirectPersistence)}function iA(e){return tQ("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iD(e,t,n){return ix(e,t,n)}async function ix(e,t,n){var r;let i=es(e);tu(e,t,nN);let s=i_(i,n);return await iP(s,i),s._openRedirect(i,t,"signInViaRedirect")}function iL(e,t,n){return iM(e,t,n)}async function iM(e,t,n){let r=es(e);tu(r.auth,t,nN);let i=i_(r.auth,n);await iP(i,r.auth);let s=await iW(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}function iU(e,t,n){return iF(e,t,n)}async function iF(e,t,n){let r=es(e);tu(r.auth,t,nN);let i=i_(r.auth,n);await nK(!1,r,t.providerId),await iP(i,r.auth);let s=await iW(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function iq(e,t){var n;return await es(e)._initializationPromise,ij(e,t,!1)}async function ij(e,t,n=!1){var r;let i=es(e),s=i_(i,t),o=new iS(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}async function iW(e){let t=rV(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class iV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iH(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!iH(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ta(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(iB(e))}saveEventToCache(e){this.cachedEventUids.add(iB(e)),this.lastProcessedEventTime=Date.now()}}function iB(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function iH({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function iz(e,t={}){return tk(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iG=/^https?/;async function iK(e){if(e.config.emulator)return;let{authorizedDomains:t}=await iz(e);for(let n of t)try{if(iY(n))return}catch(r){}to(e,"unauthorized-domain")}function iY(e){let t=tg(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!iG.test(n))return!1;if(i$.test(e))return r===e;let s=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+s+"|"+s+")$","i");return o.test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iJ=new tb(3e4,6e4);function iQ(){let e=rH().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let iX=null,iZ=new tb(5e3,15e3),i0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function i2(e){var t,n;let r=await (iX=iX||new Promise((t,n)=>{var r,i,s;function o(){iQ(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){iQ(),n(ta(e,"network-request-failed"))},timeout:iJ.get()})}if(null===(i=null===(r=rH().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=rH().gapi)||void 0===s?void 0:s.load)o();else{let a=r5("iframefcb");return rH()[a]=()=>{gapi.load?o():n(ta(e,"network-request-failed"))},r6(`https://apis.google.com/js/api.js?onload=${a}`).catch(e=>n(e))}}).catch(e=>{throw iX=null,e})),i=rH().gapi;return th(i,e,"internal-error"),r.open({where:document.body,url:function(e){let t=e.config;th(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?tw(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:eH},i=i1.get(e.config.apiHost);i&&(r.eid=i);let s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${J(r).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i0,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=ta(e,"network-request-failed"),s=rH().setTimeout(()=>{r(i)},iZ.get());function o(){rH().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class i4{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function i6(e,t,n,r,i,s){th(e.config.authDomain,e,"auth-domain-config-required"),th(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:eH,eventId:i};if(t instanceof nN)for(let[a,l]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",$(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[a]=l;if(t instanceof nO){let u=t.getScopes().filter(e=>""!==e);u.length>0&&(o.scopes=u.join(","))}for(let c of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[c]&&delete o[c];return`${function({config:e}){return e.emulator?tw(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${J(o).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i5="webStorageSupport",i8=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rj,this._completeRedirectFn=ij,this._overrideRedirectResult=iN}async _openPopup(e,t,n,r){var i;tp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");let s=i6(e,t,n,tg(),r);return function(e,t,n,r=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",l=Object.assign(Object.assign({},i3),{width:r.toString(),height:i.toString(),top:s,left:o}),u=A().toLowerCase();n&&(a=t2(u)?"_blank":n),t0(u)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=A()){var t;return t8(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",a),new i4(null);let h=window.open(t||"",a,c);th(h,e,"popup-blocked");try{h.focus()}catch(d){}return new i4(h)}(e,s,rV())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=i6(e,t,n,tg(),r),rH().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(tp(r,"If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await i2(e),n=new iV(e);return t.register("authEvent",t=>{th(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(i5,{type:i5},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[i5];void 0!==i&&t(!!i),to(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iK(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return t9()||t1()||t8()}};class i9{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return td("unexpected MultiFactorSessionType")}}}class i7 extends i9{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new i7(e)}_finalizeEnroll(e,t,n){var r,i;return tk(e,"POST","/v2/accounts/mfaEnrollment:finalize",tC(e,i={idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){var n,r;return tk(e,"POST","/v2/accounts/mfaSignIn:finalize",tC(e,r={mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class se{constructor(){}static assertion(e){return i7._fromCredential(e)}}se.FACTOR_ID="phone";var st="@firebase/auth",sn="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){th(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function si(e=ez()){let t=eW(e,"auth");return t.isInitialized()?t.getImmediate():tm(e,{popupRedirectResolver:i8,persistence:[r3,rF,rj]})}s="Browser",ej(new eo("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{th(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),th(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let r={apiKey:i,authDomain:o,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t7(s)},a=new nt(e,n,r);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(t_);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),ej(new eo("auth-internal",e=>{var t,n;let r=es(t=e.getProvider("auth").getImmediate());return new sr(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),e$(st,sn,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(s)),e$(st,sn,"esm2017");var ss=n(3454);let so="@firebase/database",sa="0.13.6",sl="";function su(e){sl=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:q(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return H(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sd=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new sc(t)}}catch(n){}return new sh},sp=sd("localStorage"),sf=sd("sessionStorage"),s_=new e_("@firebase/database"),sm,sg=(sm=1,function(){return sm++}),sv=function(e){let t=er(e),n=new Z;n.update(t);let r=n.digest();return C.encodeByteArray(r)},sy=function(...e){let t="";for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=sy.apply(null,r):"object"==typeof r?t+=j(r):t+=r,t+=" "}return t},sb=null,sw=!0,sI=function(e,t){w(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(s_.logLevel=f.VERBOSE,sb=s_.log.bind(s_),t&&sf.set("logging_enabled",!0)):"function"==typeof e?sb=e:(sb=null,sf.remove("logging_enabled"))},sT=function(...e){if(!0===sw&&(sw=!1,null===sb&&!0===sf.get("logging_enabled")&&sI(!0)),sb){let t=sy.apply(null,e);sb(t)}},sE=function(e){return function(...t){sT(e,...t)}},sC=function(...e){let t="FIREBASE INTERNAL ERROR: "+sy(...e);s_.error(t)},sk=function(...e){let t=`FIREBASE FATAL ERROR: ${sy(...e)}`;throw s_.error(t),Error(t)},sS=function(...e){let t="FIREBASE WARNING: "+sy(...e);s_.warn(t)},sR=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&sS("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sP=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},sN=function(e){if(L()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},sO="[MIN_NAME]",sA="[MAX_NAME]",sD=function(e,t){if(e===t)return 0;if(e===sO||t===sA)return -1;if(t===sO||e===sA)return 1;{let n=sW(e),r=sW(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},sx=function(e,t){return e===t?0:e<t?-1:1},sL=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+j(t))},sM=function(e){if("object"!=typeof e||null===e)return j(e);let t=[];for(let n in e)t.push(n);t.sort();let r="{";for(let i=0;i<t.length;i++)0!==i&&(r+=","),r+=j(t[i]),r+=":",r+=sM(e[t[i]]);return r+"}"},sU=function(e,t){let n=e.length;if(n<=t)return[e];let r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function sF(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let sq=function(e){w(!sP(e),"Invalid JSON number");let t,n,r,i,s;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,r=Math.round(e*Math.pow(2,52-i)-4503599627370496)):(n=0,r=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let u=parseInt(a.substr(s,8),2).toString(16);1===u.length&&(u="0"+u),l+=u}return l.toLowerCase()},sj=RegExp("^-?(0*)\\d{1,10}$"),sW=function(e){if(sj.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},sV=function(e){try{e()}catch(t){setTimeout(()=>{let e=t.stack||"";throw sS("Exception was thrown by user callback.",e),t},Math.floor(0))}},sB=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},sH=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sz{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){sS(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s${constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(sT("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sS(e)}}class sG{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sG.OWNER="owner";let sK=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sY="websocket",sJ="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sQ{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sp.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sp.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sX(e,t,n){var r;w("string"==typeof t,"typeof type must == string"),w("object"==typeof n,"typeof params must == object");let i;if(t===sY)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===sJ)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let s=[];return sF(n,(e,t)=>{s.push(e+"="+t)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sZ{constructor(){this.counters_={}}incrementCounter(e,t=1){H(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){var e;return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let r in n)n.hasOwnProperty(r)&&P(r)&&(t[r]=e(t[r],n[r]));return t}(void 0,e=this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s0={},s1={};function s2(e){let t=e.toString();return s0[t]||(s0[t]=new sZ),s0[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&sV(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s4="start";class s6{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sE(e),this.stats_=s2(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),sX(t,sJ,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new s3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),sN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new s5((...e)=>{let[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===s4)this.id=n,this.password=r;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[s4]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&sK.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){s6.forceAllow_=!0}static forceDisallow(){s6.forceDisallow_=!0}static isAvailable(){return!L()&&(!!s6.forceAllow_||!s6.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=k(t),r=sU(n,1840);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(L())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=j(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class s5{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,L())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=sg(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=s5.createIFrame_();let i="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let s=document.domain;i='<script>document.domain="'+s+'";</script>'}let o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){sT("frame writing exception"),a.stack&&sT(a.stack),sT(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||sT("No IE domain setting required")}catch(r){let n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){let i=this.pendingSegs[0];if(i.d.length+30+n.length<=1870){let s=this.pendingSegs.shift();n=n+"&seg"+r+"="+s.seg+"&ts"+r+"="+s.ts+"&d"+r+"="+s.d,r++}else break}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){L()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{sT("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(r){}},Math.floor(1))}}let s8=null;"undefined"!=typeof MozWebSocket?s8=MozWebSocket:"undefined"!=typeof WebSocket&&(s8=WebSocket);class s9{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sE(this.connId),this.stats_=s2(t),this.connURL=s9.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){let s={};return s.v="5",!L()&&"undefined"!=typeof location&&location.hostname&&sK.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),sX(e,sY,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sp.set("previous_websocket_failure",!0);try{let n;if(L()){let r=this.nodeAdmin?"AdminNode":"Node";n={headers:{"User-Agent":`Firebase/5/${sl}/${ss.platform}/${r}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(n.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);let i=ss.env,s=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;s&&(n.proxy={origin:s})}this.mySock=new s8(this.connURL,[],n)}catch(a){this.log_("Error instantiating WebSocket.");let o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){s9.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==s8&&!s9.forceDisallow_}static previouslyFailed(){return sp.isInMemoryStorage||!0===sp.get("previous_websocket_failure")}markConnectionHealthy(){sp.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let n=q(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();let t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=sU(t,16384);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}s9.responsesRequiredToBeHealthy=2,s9.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s7{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[s6,s9]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=s9&&s9.isAvailable(),n=t&&!s9.previouslyFailed();if(e.webSocketOnly&&(t||sS("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[s9];else{let r=this.transports_=[];for(let i of s7.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);s7.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}s7.globalTransportInitialized_=!1;class oe{constructor(e,t,n,r,i,s,o,a,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sE("c:"+this.id+":"),this.transportManager_=new s7(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=sH(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=sL("t",e),n=sL("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=sL("t",e),n=sL("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=sL("t",e);if("d"in e){let n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?sC("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sC("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&sS("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),sH(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):sH(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sp.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ot{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class on{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){w(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class or extends on{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||D()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new or}getInitialEvent(e){return w("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class oi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function os(){return new oi("")}function oo(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function oa(e){return e.pieces_.length-e.pieceNum_}function ol(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new oi(e.pieces_,t)}function ou(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function oc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function oh(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new oi(t,0)}function od(e,t){let n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof oi)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{let s=t.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new oi(n,0)}function op(e){return e.pieceNum_>=e.pieces_.length}function of(e,t){let n=oo(e),r=oo(t);if(null===n)return t;if(n===r)return of(ol(e),ol(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function o_(e,t){let n=oc(e,0),r=oc(t,0);for(let i=0;i<n.length&&i<r.length;i++){let s=sD(n[i],r[i]);if(0!==s)return s}return n.length===r.length?0:n.length<r.length?-1:1}function om(e,t){if(oa(e)!==oa(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function og(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(oa(e)>oa(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ov{constructor(e,t){this.errorPrefix_=t,this.parts_=oc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=ei(this.parts_[n]);oy(this)}}function oy(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ob(e))}function ob(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ow extends on{constructor(){super(["visible"]);let e,t;"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new ow}getInitialEvent(e){return w("visible"===e,"Unknown event type: "+e),[this.visible_]}}class oI extends ot{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=oI.nextPersistentConnectionId_++,this.log_=sE("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!L())throw Error("Auth override specified in options, but not supported on non Node.js platforms");ow.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&or.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(j(i)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();let t=new N,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete(e){let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();let i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");let o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);let i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{let s=i.d,o=i.s;oI.warnOnListenWarnings_(s,t);let a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&H(e,"w")){let n=z(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();sS(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&40===e.length;(t||B(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=V(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);let i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){let i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();let s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{let t=e.s;if("ok"!==t){let n=e.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):sC("Unrecognized action received from server: "+j(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let t=new Date().getTime()-this.lastConnectionAttemptTime_,n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+oI.nextConnectionId_++,i=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())},l=function(e){w(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};let u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[c,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?sT("getToken() completed but was canceled"):(sT("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,o=new oe(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{sS(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},i))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&sS(d),a())}}}interrupt(e){sT("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sT("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>sM(e)).join("$"):"default";let r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){let n=new oi(e).toString(),r;if(this.listens.has(n)){let i=this.listens.get(n);r=i.get(t),i.delete(t),0===i.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){sT("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){sT("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){let r=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(r.action,r.pathString,r.data,r.onComplete)}for(let i=0;i<this.outstandingGets_.length;i++)this.outstandingGets_[i]&&this.sendGet_(i)}sendConnectStats_(){let e={},t="js";L()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+sl.replace(/\./g,"-")]=1,D()?e["framework.cordova"]=1:x()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=or.getInstance().currentlyOnline();return $(this.interruptReasons_)&&e}}oI.nextPersistentConnectionId_=0,oI.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oT{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new oT(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oE{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new oT(sO,e),r=new oT(sO,t);return 0!==this.compare(n,r)}minPost(){return oT.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oC;class ok extends oE{static get __EMPTY_NODE(){return oC}static set __EMPTY_NODE(e){oC=e}compare(e,t){return sD(e.name,t.name)}isDefinedOn(e){throw I("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return oT.MIN}maxPost(){return new oT(sA,oC)}makePost(e,t){return w("string"==typeof e,"KeyIndex indexValue must always be a string."),new oT(e,oC)}toString(){return".key"}}let oS=new ok;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oR{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oP{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:oP.RED,this.left=null!=r?r:oN.EMPTY_NODE,this.right=null!=i?i:oN.EMPTY_NODE}copy(e,t,n,r,i){return new oP(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return oN.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,r;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return oN.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,oP.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,oP.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}oP.RED=!0,oP.BLACK=!1;class oN{constructor(e,t=oN.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new oN(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,oP.BLACK,null,null))}remove(e){return new oN(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oP.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(r)return r.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oR(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new oR(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new oR(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new oR(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oO(e,t){return sD(e.name,t.name)}function oA(e,t){return sD(e,t)}oN.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new oP(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oD,ox=function(e){return"number"==typeof e?"number:"+sq(e):"string:"+e},oL=function(e){if(e.isLeafNode()){let t=e.val();w("string"==typeof t||"number"==typeof t||"object"==typeof t&&H(t,".sv"),"Priority must be a string or number.")}else w(e===oD||e.isEmpty(),"priority of unexpected type.");w(e===oD||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},oM;class oU{constructor(e,t=oU.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),oL(this.priorityNode_)}static set __childrenNodeConstructor(e){oM=e}static get __childrenNodeConstructor(){return oM}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oU(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:oU.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return op(e)?this:".priority"===oo(e)?this.priorityNode_:oU.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:oU.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=oo(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(w(".priority"!==n||1===oa(e),".priority must be the last token in a path"),this.updateImmediateChild(n,oU.__childrenNodeConstructor.EMPTY_NODE.updateChild(ol(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ox(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=sq(this.value_):e+=this.value_,this.lazyHash_=sv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oU.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oU.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,r=oU.VALUE_TYPE_ORDER.indexOf(t),i=oU.VALUE_TYPE_ORDER.indexOf(n);return(w(r>=0,"Unknown leaf type: "+t),w(i>=0,"Unknown leaf type: "+n),r!==i)?i-r:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}oU.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oF,oq,oj=new class extends oE{compare(e,t){let n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?sD(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return oT.MIN}maxPost(){return new oT(sA,new oU("[PRIORITY-POST]",oq))}makePost(e,t){let n=oF(e);return new oT(t,new oU("[PRIORITY-POST]",n))}toString(){return".priority"}},oW=Math.log(2);class oV{constructor(e){var t;this.count=parseInt(Math.log(e+1)/oW,10),this.current_=this.count-1;let n=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&n}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let oB=function(e,t,n,r){e.sort(t);let i=function(t,r){let s=r-t,o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new oP(a,o.node,oP.BLACK,null,null);{let l=parseInt(s/2,10)+t,u=i(t,l),c=i(l+1,r);return o=e[l],a=n?n(o):o,new oP(a,o.node,oP.BLACK,u,c)}},s=new oV(e.length),o=function(t){let r=null,s=null,o=e.length,a=function(t,r){let s=o-t;o-=t;let a=i(s+1,o),u=e[s],c=n?n(u):u;l(new oP(c,u.node,r,null,a))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let u=0;u<t.count;++u){let c=t.nextBitIsOne(),h=Math.pow(2,t.count-(u+1));c?a(h,oP.BLACK):(a(h,oP.BLACK),a(h,oP.RED))}return s}(s);return new oN(r||t,o)},oH,oz={};class o${constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return w(oz&&oj,"ChildrenNode.ts has not been loaded"),oH=oH||new o$({".priority":oz},{".priority":oj})}get(e){let t=z(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof oN?t:null}hasIndex(e){return H(this.indexSet_,e.toString())}addIndex(e,t){w(e!==oS,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],r=!1,i=t.getIterator(oT.Wrap),s=i.getNext();for(;s;)r=r||e.isDefinedOn(s.node),n.push(s),s=i.getNext();let o;o=r?oB(n,e.getCompare()):oz;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let u=Object.assign({},this.indexes_);return u[a]=o,new o$(u,l)}addToIndexes(e,t){let n=G(this.indexes_,(n,r)=>{let i=z(this.indexSet_,r);if(w(i,"Missing index implementation for "+r),n===oz){if(!i.isDefinedOn(e.node))return oz;{let s=[],o=t.getIterator(oT.Wrap),a=o.getNext();for(;a;)a.name!==e.name&&s.push(a),a=o.getNext();return s.push(e),oB(s,i.getCompare())}}{let l=t.get(e.name),u=n;return l&&(u=u.remove(new oT(e.name,l))),u.insert(e,e.node)}});return new o$(n,this.indexSet_)}removeFromIndexes(e,t){let n=G(this.indexes_,n=>{if(n===oz)return n;{let r=t.get(e.name);return r?n.remove(new oT(e.name,r)):n}});return new o$(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oG;class oK{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&oL(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oG||(oG=new oK(new oN(oA),null,o$.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oG}updatePriority(e){return this.children_.isEmpty()?this:new oK(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?oG:t}}getChild(e){let t=oo(e);return null===t?this:this.getImmediateChild(t).getChild(ol(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n=new oT(e,t),r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));let s=r.isEmpty()?oG:this.priorityNode_;return new oK(r,s,i)}}updateChild(e,t){let n=oo(e);if(null===n)return t;{w(".priority"!==oo(e)||1===oa(e),".priority must be the last token in a path");let r=this.getImmediateChild(n).updateChild(ol(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,r=0,i=!0;if(this.forEachChild(oj,(s,o)=>{t[s]=o.val(e),n++,i&&oK.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),e||!i||!(r<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let s=[];for(let o in t)s[o]=t[o];return s}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ox(this.getPriority().val())+":"),this.forEachChild(oj,(t,n)=>{let r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":sv(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let r=this.resolveIndex_(n);if(!r)return this.children_.getPredecessorKey(e);{let i=r.getPredecessorKey(new oT(e,t));return i?i.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let n=t.minKey();return n&&n.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new oT(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let n=t.maxKey();return n&&n.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new oT(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let r=this.children_.getIteratorFrom(e.name,oT.Wrap),i=r.peek();for(;null!=i&&0>t.compare(i,e);)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let r=this.children_.getReverseIteratorFrom(e.name,oT.Wrap),i=r.peek();for(;null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oY?-1:0}withIndex(e){if(e===oS||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new oK(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===oS||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority()))return!1;if(this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(oj),n=e.getIterator(oj),r=t.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}}resolveIndex_(e){return e===oS?null:this.indexMap_.get(e.toString())}}oK.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let oY=new class extends oK{constructor(){super(new oN(oA),oK.EMPTY_NODE,o$.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oK.EMPTY_NODE}isEmpty(){return!1}};function oJ(e,t=null){if(null===e)return oK.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),w(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let n=e;return new oU(n,oJ(t))}if(e instanceof Array){let r=oK.EMPTY_NODE;return sF(e,(t,n)=>{if(H(e,t)&&"."!==t.substring(0,1)){let i=oJ(n);(i.isLeafNode()||!i.isEmpty())&&(r=r.updateImmediateChild(t,i))}}),r.updatePriority(oJ(t))}{let i=[],s=!1,o=e;if(sF(o,(e,t)=>{if("."!==e.substring(0,1)){let n=oJ(t);n.isEmpty()||(s=s||!n.getPriority().isEmpty(),i.push(new oT(e,n)))}}),0===i.length)return oK.EMPTY_NODE;let a=oB(i,oO,e=>e.name,oA);if(!s)return new oK(a,oJ(t),o$.Default);{let l=oB(i,oj.getCompare());return new oK(a,oJ(t),new o$({".priority":l},{".priority":oj}))}}}Object.defineProperties(oT,{MIN:{value:new oT(sO,oK.EMPTY_NODE)},MAX:{value:new oT(sA,oY)}}),ok.__EMPTY_NODE=oK.EMPTY_NODE,oU.__childrenNodeConstructor=oK,oD=oY,oq=oY,oF=oJ;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oQ extends oE{constructor(e){super(),this.indexPath_=e,w(!op(e)&&".priority"!==oo(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?sD(e.name,t.name):i}makePost(e,t){let n=oJ(e),r=oK.EMPTY_NODE.updateChild(this.indexPath_,n);return new oT(t,r)}maxPost(){let e=oK.EMPTY_NODE.updateChild(this.indexPath_,oY);return new oT(sA,e)}toString(){return oc(this.indexPath_,0).join("/")}}let oX=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class extends oE{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?sD(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return oT.MIN}maxPost(){return oT.MAX}makePost(e,t){let n=oJ(e);return new oT(t,n)}toString(){return".value"}},oZ="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",o0=function(){let e=0,t=[];return function(n){let r=n===e;e=n;let i,s=Array(8);for(i=7;i>=0;i--)s[i]=oZ.charAt(n%64),n=Math.floor(n/64);w(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=oZ.charAt(t[i]);return w(20===o.length,"nextPushId: Length should be 20."),o}}(),o1=function(e){if("2147483647"===e)return"-";let t=sW(e);if(null!=t)return""+(t+1);let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);if(n.length<786)return n.push("-"),n.join("");let i=n.length-1;for(;i>=0&&"z"===n[i];)i--;if(-1===i)return sA;let s=n[i],o=oZ.charAt(oZ.indexOf(s)+1);return n[i]=o,n.slice(0,i+1).join("")},o2=function(e){if("-2147483648"===e)return sO;let t=sW(e);if(null!=t)return""+(t-1);let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);return"-"===n[n.length-1]?1===n.length?"2147483647":(delete n[n.length-1],n.join("")):(n[n.length-1]=oZ.charAt(oZ.indexOf(n[n.length-1])-1),n.join("")+"z".repeat(786-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function o3(e){return{type:"value",snapshotNode:e}}function o4(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function o6(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function o5(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o8{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(o6(t,o)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(o4(t,n)):s.trackChildChange(o5(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(oj,(e,r)=>{t.hasChild(e)||n.trackChildChange(o6(e,r))}),t.isLeafNode()||t.forEachChild(oj,(t,r)=>{if(e.hasChild(t)){let i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(o5(t,r,i))}else n.trackChildChange(o4(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?oK.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o9{constructor(e){this.indexedFilter_=new o8(e.getIndex()),this.index_=e.getIndex(),this.startPost_=o9.getStartPost_(e),this.endPost_=o9.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return 0>=this.index_.compare(this.getStartPost(),e)&&0>=this.index_.compare(e,this.getEndPost())}updateChild(e,t,n,r,i,s){return this.matches(new oT(t,n))||(n=oK.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=oK.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(oK.EMPTY_NODE);let i=this;return t.forEachChild(oj,(e,t)=>{i.matches(new oT(e,t))||(r=r.updateImmediateChild(e,oK.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o7{constructor(e){this.rangedFilter_=new o9(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return(this.rangedFilter_.matches(new oT(t,n))||(n=oK.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=oK.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){r=oK.EMPTY_NODE.withIndex(this.index_);let i;i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;i.hasNext()&&s<this.limit_;){let o=i.getNext(),a;if(this.reverse_?0>=this.index_.compare(this.rangedFilter_.getStartPost(),o):0>=this.index_.compare(o,this.rangedFilter_.getEndPost()))r=r.updateImmediateChild(o.name,o.node),s++;else break}}else{r=(r=t.withIndex(this.index_)).updatePriority(oK.EMPTY_NODE);let l,u,c,h;if(this.reverse_){h=r.getReverseIterator(this.index_),l=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();let d=this.index_.getCompare();c=(e,t)=>d(t,e)}else h=r.getIterator(this.index_),l=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();let p=0,f=!1;for(;h.hasNext();){let _=h.getNext();!f&&0>=c(l,_)&&(f=!0);let m=f&&p<this.limit_&&0>=c(_,u);m?p++:r=r.updateImmediateChild(_.name,oK.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){let o=this.index_.getCompare();s=(e,t)=>o(t,e)}else s=this.index_.getCompare();w(e.numChildren()===this.limit_,"");let a=new oT(t,n),l=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(e.hasChild(t)){let c=e.getImmediateChild(t),h=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||e.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);let d=null==h?1:s(h,a),p=u&&!n.isEmpty()&&d>=0;if(p)return null!=i&&i.trackChildChange(o5(t,n,c)),e.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(o6(t,c));let f=e.updateImmediateChild(t,oK.EMPTY_NODE),_=null!=h&&this.rangedFilter_.matches(h);return _?(null!=i&&i.trackChildChange(o4(h.name,h.node)),f.updateImmediateChild(h.name,h.node)):f}}return n.isEmpty()?e:u?s(l,a)>=0?(null!=i&&(i.trackChildChange(o6(l.name,l.node)),i.trackChildChange(o4(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(l.name,oK.EMPTY_NODE)):e:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oj}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(w(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:sO}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(w(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:sA}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oj}copy(){let e=new ae;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function at(e,t,n){let r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function an(e,t,n){let r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function ar(e,t){let n=e.copy();return n.index_=t,n}function ai(e){let t={};if(e.isDefault())return t;let n;return e.index_===oj?n="$priority":e.index_===oX?n="$value":e.index_===oS?n="$key":(w(e.index_ instanceof oQ,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=j(n),e.startSet_&&(t.startAt=j(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+j(e.indexStartName_))),e.endSet_&&(t.endAt=j(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+j(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function as(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==oj&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ao extends ot{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=sE("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){let i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);let s=ao.getListenId_(e,n),o={};this.listens_[s]=o;let a=ai(e._queryParams);this.restRequest_(i+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),z(this.listens_,s)===o&&r(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=ao.getListenId_(e,t);delete this.listens_[n]}get(e){let t=ai(e._queryParams),n=e._path.toString(),r=new N;return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+J(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=q(o.responseText)}catch(t){sS("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&sS("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aa{constructor(){this.rootNode_=oK.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function al(){return{value:null,children:new Map}}function au(e,t,n){if(op(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{let r=oo(t);e.children.has(r)||e.children.set(r,al());let i=e.children.get(r);t=ol(t),au(i,t,n)}}function ac(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,r)=>{let i=new oi(t.toString()+"/"+e);ac(r,i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ah{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&sF(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class ad{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ah(e),sH(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;sF(e,(e,r)=>{r>0&&H(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),sH(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function ap(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function af(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function a_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(u=_||(_={}))[u.OVERWRITE=0]="OVERWRITE",u[u.MERGE=1]="MERGE",u[u.ACK_USER_WRITE=2]="ACK_USER_WRITE",u[u.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class am{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=_.ACK_USER_WRITE,this.source=ap()}operationForChild(e){if(!op(this.path))return w(oo(this.path)===e,"operationForChild called for unrelated child."),new am(ol(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new oi(e));return new am(os(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ag{constructor(e,t){this.source=e,this.path=t,this.type=_.LISTEN_COMPLETE}operationForChild(e){return op(this.path)?new ag(this.source,os()):new ag(this.source,ol(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class av{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=_.OVERWRITE}operationForChild(e){return op(this.path)?new av(this.source,os(),this.snap.getImmediateChild(e)):new av(this.source,ol(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ay{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=_.MERGE}operationForChild(e){if(!op(this.path))return w(oo(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ay(this.source,ol(this.path),this.children);{let t=this.children.subtree(new oi(e));return t.isEmpty()?null:t.value?new av(this.source,os(),t.value):new ay(this.source,os(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ab{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(op(e))return this.isFullyInitialized()&&!this.filtered_;let t=oo(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aI(e,t,n,r,i,s){let o=r.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw I("Should only compare child_ events.");let r=new oT(t.childName,t.snapshotNode),i=new oT(n.childName,n.snapshotNode);return e.index_.compare(r,i)})(e,t,n)),o.forEach(n=>{var r,o,a;let l=(r=e,o=n,a=s,"value"===o.type||"child_removed"===o.type||(o.prevName=a.getPredecessorChildName(o.childName,o.snapshotNode,r.index_)),o);i.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(l,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aT(e,t){return{eventCache:e,serverCache:t}}function aE(e,t,n,r){return aT(new ab(t,n,r),e.serverCache)}function aC(e,t,n,r){return aT(e.eventCache,new ab(t,n,r))}function ak(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function aS(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let aR,aP=()=>(aR||(aR=new oN(sx)),aR);class aN{constructor(e,t=aP()){this.value=e,this.children=t}static fromObject(e){let t=new aN(null);return sF(e,(e,n)=>{t=t.set(new oi(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:os(),value:this.value};if(op(e))return null;{let n=oo(e),r=this.children.get(n);if(null===r)return null;{let i=r.findRootMostMatchingPathAndValue(ol(e),t);if(null==i)return null;{let s=od(new oi(n),i.path);return{path:s,value:i.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(op(e))return this;{let t=oo(e),n=this.children.get(t);return null!==n?n.subtree(ol(e)):new aN(null)}}set(e,t){if(op(e))return new aN(t,this.children);{let n=oo(e),r=this.children.get(n)||new aN(null),i=r.set(ol(e),t),s=this.children.insert(n,i);return new aN(this.value,s)}}remove(e){if(op(e))return this.children.isEmpty()?new aN(null):new aN(null,this.children);{let t=oo(e),n=this.children.get(t);if(!n)return this;{let r=n.remove(ol(e)),i;return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new aN(null):new aN(this.value,i)}}}get(e){if(op(e))return this.value;{let t=oo(e),n=this.children.get(t);return n?n.get(ol(e)):null}}setTree(e,t){if(op(e))return t;{let n=oo(e),r=this.children.get(n)||new aN(null),i=r.setTree(ol(e),t),s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new aN(this.value,s)}}fold(e){return this.fold_(os(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(od(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,os(),t)}findOnPath_(e,t,n){let r=!!this.value&&n(t,this.value);if(r)return r;if(op(e))return null;{let i=oo(e),s=this.children.get(i);return s?s.findOnPath_(ol(e),od(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,os(),t)}foreachOnPath_(e,t,n){if(op(e))return this;{this.value&&n(t,this.value);let r=oo(e),i=this.children.get(r);return i?i.foreachOnPath_(ol(e),od(t,r),n):new aN(null)}}foreach(e){this.foreach_(os(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(od(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aO{constructor(e){this.writeTree_=e}static empty(){return new aO(new aN(null))}}function aA(e,t,n){if(op(t))return new aO(new aN(n));{let r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){let i=r.path,s=r.value,o=of(i,t);return s=s.updateChild(o,n),new aO(e.writeTree_.set(i,s))}{let a=new aN(n),l=e.writeTree_.setTree(t,a);return new aO(l)}}}function aD(e,t,n){let r=e;return sF(n,(e,n)=>{r=aA(r,od(t,e),n)}),r}function ax(e,t){if(op(t))return aO.empty();{let n=e.writeTree_.setTree(t,new aN(null));return new aO(n)}}function aL(e,t){return null!=aM(e,t)}function aM(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(of(n.path,t)):null}function aU(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(oj,(e,n)=>{t.push(new oT(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new oT(e,n.value))}),t}function aF(e,t){if(op(t))return e;{let n=aM(e,t);return new aO(null!=n?new aN(n):e.writeTree_.subtree(t))}}function aq(e){return e.writeTree_.isEmpty()}function aj(e,t){return function e(t,n,r){if(null!=n.value)return r.updateChild(t,n.value);{let i=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(w(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):r=e(od(t,n),s,r)}),r.getChild(t).isEmpty()||null===i||(r=r.updateChild(od(t,".priority"),i)),r}}(os(),e.writeTree_,t)}function aW(e,t){if(e.snap)return og(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&og(od(e.path,n),t))return!0;return!1}function aV(e){return e.visible}function aB(e,t,n){let r=aO.empty();for(let i=0;i<e.length;++i){let s=e[i];if(t(s)){let o=s.path,a;if(s.snap)og(n,o)?(a=of(n,o),r=aA(r,a,s.snap)):og(o,n)&&(a=of(o,n),r=aA(r,os(),s.snap.getChild(a)));else if(s.children){if(og(n,o))a=of(n,o),r=aD(r,a,s.children);else if(og(o,n)){if(a=of(o,n),op(a))r=aD(r,os(),s.children);else{let l=z(s.children,oo(a));if(l){let u=l.getChild(ol(a));r=aA(r,os(),u)}}}}else throw I("WriteRecord should have .snap or .children")}}return r}function aH(e,t,n,r,i){if(r||i){let s=aF(e.visibleWrites,t);if(!i&&aq(s))return n;if(!i&&null==n&&!aL(s,os()))return null;{let o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(og(e.path,t)||og(t,e.path))},a=aB(e.allWrites,o,t),l=n||oK.EMPTY_NODE;return aj(a,l)}}{let u=aM(e.visibleWrites,t);if(null!=u)return u;{let c=aF(e.visibleWrites,t);if(aq(c))return n;if(null==n&&!aL(c,os()))return null;{let h=n||oK.EMPTY_NODE;return aj(c,h)}}}}function az(e,t,n,r){return aH(e.writeTree,e.treePath,t,n,r)}function a$(e,t){return function(e,t,n){let r=oK.EMPTY_NODE,i=aM(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(oj,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){let s=aF(e.visibleWrites,t);return n.forEachChild(oj,(e,t)=>{let n=aj(aF(s,new oi(e)),t);r=r.updateImmediateChild(e,n)}),aU(s).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{let o=aF(e.visibleWrites,t);return aU(o).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}(e.writeTree,e.treePath,t)}function aG(e,t,n,r){return function(e,t,n,r,i){w(r||i,"Either existingEventSnap or existingServerSnap must exist");let s=od(t,n);if(aL(e.visibleWrites,s))return null;{let o=aF(e.visibleWrites,s);return aq(o)?i.getChild(n):aj(o,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function aK(e,t){var n,r;return n=e.writeTree,r=od(e.treePath,t),aM(n.visibleWrites,r)}function aY(e,t,n){return function(e,t,n,r){let i=od(t,n),s=aM(e.visibleWrites,i);if(null!=s)return s;if(!r.isCompleteForChild(n))return null;{let o=aF(e.visibleWrites,i);return aj(o,r.getNode().getImmediateChild(n))}}(e.writeTree,e.treePath,t,n)}function aJ(e,t){return aQ(od(e.treePath,t),e.writeTree)}function aQ(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aX{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;w("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),w(".priority"!==n,"Only non-priority child changes can be tracked.");let r=this.changeMap.get(n);if(r){let i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,o5(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,o6(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,o4(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===i)this.changeMap.set(n,o5(n,e.snapshotNode,r.oldSnap));else throw I("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let aZ=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class a0{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let n=null!=this.optCompleteServerCache_?new ab(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return aY(this.writes_,e,n)}}getChildAfterChild(e,t,n){var r,i,s,o,a;let l=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:aS(this.viewCache_),u=function(e,t,n,r,i,s,o){let a,l=aF(e.visibleWrites,t),u=aM(l,os());if(null!=u)a=u;else{if(null==n)return[];a=aj(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o),p=d.getNext();for(;p&&c.length<1;)0!==h(p,r)&&c.push(p),p=d.getNext();return c}}((r=this.writes_).writeTree,r.treePath,l,t,1,n,e);return 0===u.length?null:u[0]}}function a1(e,t,n,r,i,s){let o=t.eventCache;if(null!=aK(r,n))return t;{let a,l;if(op(n)){if(w(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let u=aS(t),c=u instanceof oK?u:oK.EMPTY_NODE,h=a$(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),h,s)}else{let d=az(r,aS(t));a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}}else{let p=oo(n);if(".priority"===p){w(1===oa(n),"Can't have a priority with additional path components");let f=o.getNode();l=t.serverCache.getNode();let _=aG(r,n,f,l);a=null!=_?e.filter.updatePriority(f,_):o.getNode()}else{let m=ol(n),g;if(o.isCompleteForChild(p)){l=t.serverCache.getNode();let v=aG(r,n,o.getNode(),l);g=null!=v?o.getNode().getImmediateChild(p).updateChild(m,v):o.getNode().getImmediateChild(p)}else g=aY(r,p,t.serverCache);a=null!=g?e.filter.updateChild(o.getNode(),p,g,m,i,s):o.getNode()}}return aE(t,a,o.isFullyInitialized()||op(n),e.filter.filtersNodes())}}function a2(e,t,n,r,i,s,o,a){let l=t.serverCache,u,c=o?e.filter:e.filter.getIndexedFilter();if(op(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){let h=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),h,null)}else{let d=oo(n);if(!l.isCompleteForPath(n)&&oa(n)>1)return t;let p=ol(n),f=l.getNode().getImmediateChild(d),_=f.updateChild(p,r);u=".priority"===d?c.updatePriority(l.getNode(),_):c.updateChild(l.getNode(),d,_,p,aZ,null)}let m=aC(t,u,l.isFullyInitialized()||op(n),c.filtersNodes()),g=new a0(i,m,s);return a1(e,m,n,i,g,a)}function a3(e,t,n,r,i,s,o){let a=t.eventCache,l,u,c=new a0(i,t,s);if(op(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=aE(t,u,!0,e.filter.filtersNodes());else{let h=oo(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),l=aE(t,u,a.isFullyInitialized(),a.isFiltered());else{let d=ol(n),p=a.getNode().getImmediateChild(h),f;if(op(d))f=r;else{let _=c.getCompleteChild(h);f=null!=_?".priority"===ou(d)&&_.getChild(oh(d)).isEmpty()?_:_.updateChild(d,r):oK.EMPTY_NODE}if(p.equals(f))l=t;else{let m=e.filter.updateChild(a.getNode(),h,f,d,c,o);l=aE(t,m,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function a4(e,t){return e.eventCache.isCompleteForChild(t)}function a6(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function a5(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;u=op(n)?r:new aN(null).setTree(n,r);let c=t.serverCache.getNode();return u.children.inorderTraversal((n,r)=>{if(c.hasChild(n)){let u=t.serverCache.getNode().getImmediateChild(n),h=a6(e,u,r);l=a2(e,l,new oi(n),h,i,s,o,a)}}),u.children.inorderTraversal((n,r)=>{let u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!c.hasChild(n)&&!u){let h=t.serverCache.getNode().getImmediateChild(n),d=a6(e,h,r);l=a2(e,l,new oi(n),d,i,s,o,a)}}),l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a8{constructor(e,t){var n,r;this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,s=new o8(i.getIndex()),o=i.loadsAllData()?new o8(i.getIndex()):i.hasLimit()?new o7(i):new o9(i);this.processor_={filter:o};let a=t.serverCache,l=t.eventCache,u=s.updateFullNode(oK.EMPTY_NODE,a.getNode(),null),c=o.updateFullNode(oK.EMPTY_NODE,l.getNode(),null),h=new ab(u,a.isFullyInitialized(),s.filtersNodes()),d=new ab(c,l.isFullyInitialized(),o.filtersNodes());this.viewCache_=aT(d,h),this.eventGenerator_=new aw(this.query_)}get query(){return this.query_}}function a9(e,t){let n=aS(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!op(t)&&!n.getImmediateChild(oo(t)).isEmpty())?n.getChild(t):null}function a7(e){return 0===e.eventRegistrations_.length}function le(e,t,n){let r=[];if(n){w(null==t,"A cancel should cancel all event registrations.");let i=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let s=[];for(let o=0;o<e.eventRegistrations_.length;++o){let a=e.eventRegistrations_[o];if(a.matches(t)){if(t.hasAnyCallback()){s=s.concat(e.eventRegistrations_.slice(o+1));break}}else s.push(a)}e.eventRegistrations_=s}else e.eventRegistrations_=[];return r}function lt(e,t,n,r){var i,s;t.type===_.MERGE&&null!==t.source.queryId&&(w(aS(e.viewCache_),"We should always have a full cache before handling merges"),w(ak(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,r,i){let s=new aX,o,a;if(n.type===_.OVERWRITE)n.source.fromUser?o=a3(e,t,n.path,n.snap,r,i,s):(w(n.source.fromServer,"Unknown source."),a=n.source.tagged||t.serverCache.isFiltered()&&!op(n.path),o=a2(e,t,n.path,n.snap,r,i,a,s));else if(n.type===_.MERGE){var l,u,c,h,d,p,f;let m;n.source.fromUser?(l=e,u=t,c=n.path,h=n.children,d=r,p=i,f=s,m=u,o=(h.foreach((e,t)=>{let n=od(c,e);a4(u,oo(n))&&(m=a3(l,m,n,t,d,p,f))}),h.foreach((e,t)=>{let n=od(c,e);a4(u,oo(n))||(m=a3(l,m,n,t,d,p,f))}),m)):(w(n.source.fromServer,"Unknown source."),a=n.source.tagged||t.serverCache.isFiltered(),o=a5(e,t,n.path,n.children,r,i,a,s))}else if(n.type===_.ACK_USER_WRITE)o=n.revert?function(e,t,n,r,i,s){let o;if(null!=aK(r,n))return t;{let a=new a0(r,t,i),l=t.eventCache.getNode(),u;if(op(n)||".priority"===oo(n)){let c;if(t.serverCache.isFullyInitialized())c=az(r,aS(t));else{let h=t.serverCache.getNode();w(h instanceof oK,"serverChildren would be complete if leaf node"),c=a$(r,h)}u=e.filter.updateFullNode(l,c,s)}else{let d=oo(n),p=aY(r,d,t.serverCache);null==p&&t.serverCache.isCompleteForChild(d)&&(p=l.getImmediateChild(d)),(u=null!=p?e.filter.updateChild(l,d,p,ol(n),a,s):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(l,d,oK.EMPTY_NODE,ol(n),a,s):l).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=az(r,aS(t))).isLeafNode()&&(u=e.filter.updateFullNode(u,o,s))}return o=t.serverCache.isFullyInitialized()||null!=aK(r,os()),aE(t,u,o,e.filter.filtersNodes())}}(e,t,n.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=aK(i,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(op(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return a2(e,t,n,l.getNode().getChild(n),i,s,a,o);if(!op(n))return t;{let u=new aN(null);return l.getNode().forEachChild(oS,(e,t)=>{u=u.set(new oi(e),t)}),a5(e,t,n,u,i,s,a,o)}}{let c=new aN(null);return r.foreach((e,t)=>{let r=od(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))}),a5(e,t,n,c,i,s,a,o)}}(e,t,n.path,n.affectedTree,r,i,s);else if(n.type===_.LISTEN_COMPLETE)o=function(e,t,n,r,i){let s=t.serverCache,o=aC(t,s.getNode(),s.isFullyInitialized()||op(n),s.isFiltered());return a1(e,o,n,r,aZ,i)}(e,t,n.path,r,s);else throw I("Unknown operation type: "+n.type);let g=s.getChanges();return function(e,t,n){let r=t.eventCache;if(r.isFullyInitialized()){let i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ak(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!i||r.getNode().equals(s))&&r.getNode().getPriority().equals(s.getPriority())||n.push(o3(ak(t)))}}(t,o,g),{viewCache:o,changes:g}}(e.processor_,o,t,n,r);return i=e.processor_,w((s=a.viewCache).eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),w(s.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),w(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,ln(e,a.changes,a.viewCache.eventCache.getNode(),null)}function ln(e,t,n,r){let i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){let i=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n,r;s.push((n=t.childName,r=t.snapshotNode,{type:"child_moved",snapshotNode:r,childName:n}))}}),aI(e,i,"child_removed",t,r,n),aI(e,i,"child_added",t,r,n),aI(e,i,"child_moved",s,r,n),aI(e,i,"child_changed",t,r,n),aI(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let lr;class li{constructor(){this.views=new Map}}function ls(e,t,n,r){let i=t.source.queryId;if(null!==i){let s=e.views.get(i);return w(null!=s,"SyncTree gave us an op for an invalid query."),lt(s,t,n,r)}{let o=[];for(let a of e.views.values())o=o.concat(lt(a,t,n,r));return o}}function lo(e,t,n,r,i){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=az(n,i?r:null),l=!1;a?l=!0:r instanceof oK?(a=a$(n,r),l=!1):(a=oK.EMPTY_NODE,l=!1);let u=aT(new ab(a,l,!1),new ab(r,i,!1));return new a8(t,u)}return o}function la(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ll(e,t){let n=null;for(let r of e.views.values())n=n||a9(r,t);return n}function lu(e,t){let n=t._queryParams;if(n.loadsAllData())return ld(e);{let r=t._queryIdentifier;return e.views.get(r)}}function lc(e,t){return null!=lu(e,t)}function lh(e){return null!=ld(e)}function ld(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let lp,lf=1;class l_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new aN(null),this.pendingWriteTree_={visibleWrites:aO.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lm(e,t,n,r,i){var s,o,a,l,u;return(s=e.pendingWriteTree_,u=i,w(r>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===u&&(u=!0),s.allWrites.push({path:t,snap:n,writeId:r,visible:u}),u&&(s.visibleWrites=aA(s.visibleWrites,t,n)),s.lastWriteId=r,i)?lT(e,new av(ap(),t,n)):[]}function lg(e,t,n=!1){let r=function(e,t){for(let n=0;n<e.allWrites.length;n++){let r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t),i=function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);w(n>=0,"removeWrite called with nonexistent writeId.");let r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){let a=e.allWrites[o];a.visible&&(o>=n&&aW(a,r.path)?i=!1:og(r.path,a.path)&&(s=!0)),o--}if(!i)return!1;if(s){var l;return(l=e).visibleWrites=aB(l.allWrites,aV,os()),l.allWrites.length>0?l.lastWriteId=l.allWrites[l.allWrites.length-1].writeId:l.lastWriteId=-1,!0}if(r.snap)e.visibleWrites=ax(e.visibleWrites,r.path);else{let u=r.children;sF(u,t=>{e.visibleWrites=ax(e.visibleWrites,od(r.path,t))})}return!0}(e.pendingWriteTree_,t);if(!i)return[];{let s=new aN(null);return null!=r.snap?s=s.set(os(),!0):sF(r.children,e=>{s=s.set(new oi(e),!0)}),lT(e,new am(r.path,s,n))}}function lv(e,t,n){return lT(e,new av(af(),t,n))}function ly(e,t,n,r,i=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||lc(o,t))){var l,u;let c=function(e,t,n,r){let i=t._queryIdentifier,s=[],o=[],a=lh(e);if("default"===i)for(let[l,u]of e.views.entries())o=o.concat(le(u,n,r)),a7(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{let c=e.views.get(i);c&&(o=o.concat(le(c,n,r)),a7(c)&&(e.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!lh(e)&&s.push(new(w(lr,"Reference.ts has not been loaded"),lr)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=c.removed;if(a=c.events,!i){let d=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),p=e.syncPointTree_.findOnPath(s,(e,t)=>lh(t));if(d&&!p){let f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){let _=(u=f,u.fold((e,t,n)=>{if(t&&lh(t)){let r=ld(t);return[r]}{let i=[];return t&&(i=la(t)),sF(n,(e,t)=>{i=i.concat(t)}),i}}));for(let m=0;m<_.length;++m){let g=_[m],v=g.query,y=lE(e,g);e.listenProvider_.startListening(lN(v),lC(e,v),y.hashFn,y.onComplete)}}}p||!(h.length>0)||r||(d?e.listenProvider_.stopListening(lN(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(lk(t));e.listenProvider_.stopListening(lN(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let r=t[n];if(!r._queryParams.loadsAllData()){let i=lk(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}(e,h)}return a}function lb(e,t,n,r){let i=lS(e,r);if(null==i)return[];{let s=lR(i),o=s.path,a=s.queryId,l=of(o,t),u=new av(a_(a),l,n);return lP(e,o,u)}}function lw(e,t,n,r=!1){var i,s;let o=t._path,a=null,l=!1;e.syncPointTree_.foreachOnPath(o,(e,t)=>{let n=of(e,o);a=a||ll(t,n),l=l||lh(t)});let u=e.syncPointTree_.get(o);u?(l=l||lh(u),a=a||ll(u,os())):(u=new li,e.syncPointTree_=e.syncPointTree_.set(o,u));let c;if(null!=a)c=!0;else{c=!1,a=oK.EMPTY_NODE;let h=e.syncPointTree_.subtree(o);h.foreachChild((e,t)=>{let n=ll(t,os());n&&(a=a.updateImmediateChild(e,n))})}let d=lc(u,t);if(!d&&!t._queryParams.loadsAllData()){let p=lk(t);w(!e.queryToTagMap.has(p),"View does not exist, but we have a tag");let f=lf++;e.queryToTagMap.set(p,f),e.tagToQueryMap.set(f,p)}let _=aQ(o,i=e.pendingWriteTree_),m=function(e,t,n,r,i,s){let o=lo(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){let i=n.getNode();i.forEachChild(oj,(e,t)=>{r.push(o4(e,t))})}return n.isFullyInitialized()&&r.push(o3(n.getNode())),ln(e,r,n.getNode(),t)}(o,n)}(u,t,n,_,a,c);if(!d&&!l&&!r){let g=lu(u,t);m=m.concat(function(e,t,n){let r=t._path,i=lC(e,t),s=lE(e,n),o=e.listenProvider_.startListening(lN(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)w(!lh(a.value),"If we're adding a query, it shouldn't be shadowed");else{let l=a.fold((e,t,n)=>{if(!op(e)&&t&&lh(t))return[ld(t).query];{let r=[];return t&&(r=r.concat(la(t).map(e=>e.query))),sF(n,(e,t)=>{r=r.concat(t)}),r}});for(let u=0;u<l.length;++u){let c=l[u];e.listenProvider_.stopListening(lN(c),lC(e,c))}}return o}(e,t,g))}return m}function lI(e,t,n){let r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{let r=of(e,t),i=ll(n,r);if(i)return i});return aH(r,t,i,n,!0)}function lT(e,t){var n,r;return function e(t,n,r,i){if(op(t.path))return function e(t,n,r,i){let s=n.get(os());null==r&&null!=s&&(r=ll(s,os()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=r?r.getImmediateChild(n):null,l=aJ(i,n),u=t.operationForChild(n);u&&(o=o.concat(e(u,s,a,l)))}),s&&(o=o.concat(ls(s,t,i,r))),o}(t,n,r,i);{let s=n.get(os());null==r&&null!=s&&(r=ll(s,os()));let o=[],a=oo(t.path),l=t.operationForChild(a),u=n.children.get(a);if(u&&l){let c=r?r.getImmediateChild(a):null,h=aJ(i,a);o=o.concat(e(l,u,c,h))}return s&&(o=o.concat(ls(s,t,i,r))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,r=os(),aQ(r,n)))}function lE(e,t){let n=t.query,r=lC(e,n);return{hashFn(){var e;let n=t.viewCache_.serverCache.getNode()||oK.EMPTY_NODE;return n.hash()},onComplete(t){if("ok"===t){var i,s;return r?function(e,t,n){let r=lS(e,n);if(!r)return[];{let i=lR(r),s=i.path,o=i.queryId,a=of(s,t),l=new ag(a_(o),a);return lP(e,s,l)}}(e,n._path,r):(s=n._path,lT(e,new ag(af(),s)))}{let o=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let r=Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return ly(e,n,null,o)}}}}function lC(e,t){let n=lk(t);return e.queryToTagMap.get(n)}function lk(e){return e._path.toString()+"$"+e._queryIdentifier}function lS(e,t){return e.tagToQueryMap.get(t)}function lR(e){let t=e.indexOf("$");return w(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new oi(e.substr(0,t))}}function lP(e,t,n){var r,i;let s=e.syncPointTree_.get(t);w(s,"Missing sync point for query tag that we're tracking");let o=aQ(t,r=e.pendingWriteTree_);return ls(s,n,o,null)}function lN(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(w(lp,"Reference.ts has not been loaded"),lp)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lO{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new lO(t)}node(){return this.node_}}class lA{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=od(this.path_,e);return new lA(this.syncTree_,t)}node(){return lI(this.syncTree_,this.path_)}}let lD=function(e,t,n){return e&&"object"==typeof e?(w(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?lx(e[".sv"],t,n):"object"==typeof e[".sv"]?lL(e[".sv"],t):void w(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},lx=function(e,t,n){if("timestamp"===e)return n.timestamp;w(!1,"Unexpected server value: "+e)},lL=function(e,t,n){e.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let r=e.increment;"number"!=typeof r&&w(!1,"Unexpected increment value: "+r);let i=t.node();if(w(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;let s=i.getValue();return"number"!=typeof s?r:s+r},lM=function(e,t,n,r){return lF(t,new lA(n,e),r)},lU=function(e,t,n){return lF(e,new lO(t),n)};function lF(e,t,n){let r=e.getPriority().val(),i=lD(r,t.getImmediateChild(".priority"),n),s;if(!e.isLeafNode())return s=e,i!==e.getPriority().val()&&(s=s.updatePriority(new oU(i))),e.forEachChild(oj,(e,r)=>{let i=lF(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s;{let o=lD(e.getValue(),t,n);return o!==e.getValue()||i!==e.getPriority().val()?new oU(o,oJ(i)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lq{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function lj(e,t){let n=t instanceof oi?t:new oi(t),r=e,i=oo(n);for(;null!==i;){let s=z(r.node.children,i)||{children:{},childCount:0};r=new lq(i,r,s),n=ol(n),i=oo(n)}return r}function lW(e){return e.node.value}function lV(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,r){var i;let s=void 0===lW(r)&&!lB(r),o=H(t.node.children,n);s&&o?(delete t.node.children[n],t.node.childCount--,e(t)):s||o||(t.node.children[n]=r.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function lB(e){return e.node.childCount>0}function lH(e,t){sF(e.node.children,(n,r)=>{t(new lq(n,e,r))})}function lz(e){return new oi(null===e.parent?e.name:lz(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let l$=/[\[\].#$\/\u0000-\u001F\u007F]/,lG=/[\[\].#$\u0000-\u001F\u007F]/,lK=function(e){return"string"==typeof e&&0!==e.length&&!l$.test(e)},lY=function(e){return"string"==typeof e&&0!==e.length&&!lG.test(e)},lJ=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!sP(e)||e&&"object"==typeof e&&H(e,".sv")},lQ=function(e,t,n,r){(!r||void 0!==t)&&lX(en(e,"value"),t,n)},lX=function(e,t,n){let r=n instanceof oi?new ov(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+ob(r));if("function"==typeof t)throw Error(e+"contains a function "+ob(r)+" with contents = "+t.toString());if(sP(t))throw Error(e+"contains "+t.toString()+" "+ob(r));if("string"==typeof t&&t.length>3495253.3333333335&&ei(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+ob(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let i=!1,s=!1;if(sF(t,(t,n)=>{var o,a;if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!lK(t)))throw Error(e+" contains an invalid key ("+t+") "+ob(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(t),o.byteLength_+=ei(t),oy(o),lX(e,n,r),function(e){let t=e.parts_.pop();e.byteLength_-=ei(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)}),i&&s)throw Error(e+' contains ".value" child '+ob(r)+" in addition to actual children.")}},lZ=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];let i=oc(r);for(let s=0;s<i.length;s++)if(".priority"===i[s]&&s===i.length-1);else if(!lK(i[s]))throw Error(e+"contains an invalid key ("+i[s]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(o_);let o=null;for(n=0;n<t.length;n++){if(r=t[n],null!==o&&og(o,r))throw Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},l0=function(e,t,n,r){if(r&&void 0===t)return;let i=en(e,"values");if(!(t&&"object"==typeof t)||Array.isArray(t))throw Error(i+" must be an object containing the children to replace.");let s=[];sF(t,(e,t)=>{let r=new oi(e);if(lX(i,t,od(n,r)),".priority"===ou(r)&&!lJ(t))throw Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)}),lZ(i,s)},l1=function(e,t,n){if(!n||void 0!==t){if(sP(t))throw Error(en(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!lJ(t))throw Error(en(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},l2=function(e,t,n,r){if((!r||void 0!==n)&&!lK(n))throw Error(en(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},l3=function(e,t,n,r){if((!r||void 0!==n)&&!lY(n))throw Error(en(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},l4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),l3(e,t,n,r)},l6=function(e,t){if(".info"===oo(t))throw Error(e+" failed = Can't modify data under /.info/")},l5=function(e,t){var n;let r=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!lK(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==r.length&&((n=r)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!lY(n)))throw Error(en(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l8{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function l9(e,t){let n=null;for(let r=0;r<t.length;r++){let i=t[r],s=i.getPath();null===n||om(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function l7(e,t,n){l9(e,n),ut(e,e=>om(e,t))}function ue(e,t,n){l9(e,n),ut(e,e=>og(e,t)||og(t,e))}function ut(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){let i=e.eventLists_[r];if(i){let s=i.path;t(s)?(un(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function un(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let r=n.getEventRunner();sb&&sT("event: "+n.toString()),sV(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ur="repo_interrupt";class ui{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new l8,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=al(),this.transactionQueueTree_=new lq,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function us(e){let t=e.infoData_.getNode(new oi(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}function uo(e){var t;return(t=t={timestamp:us(e)}).timestamp=t.timestamp||new Date().getTime(),t}function ua(e,t,n,r,i){e.dataUpdateCount++;let s=new oi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i){if(r){let a=G(n,e=>oJ(e));o=function(e,t,n,r){let i=lS(e,r);if(!i)return[];{let s=lR(i),o=s.path,a=s.queryId,l=of(o,t),u=aN.fromObject(n),c=new ay(a_(a),l,u);return lP(e,o,c)}}(e.serverSyncTree_,s,a,i)}else{let l=oJ(n);o=lb(e.serverSyncTree_,s,l,i)}}else if(r){let u=G(n,e=>oJ(e));o=function(e,t,n){let r=aN.fromObject(n);return lT(e,new ay(af(),t,r))}(e.serverSyncTree_,s,u)}else{let c=oJ(n);o=lv(e.serverSyncTree_,s,c)}let h=s;o.length>0&&(h=uy(e,s)),ue(e.eventQueue_,h,o)}function ul(e,t){uu(e,"connected",t),!1===t&&function(e){u_(e,"onDisconnectEvents");let t=uo(e),n=al();ac(e.onDisconnect_,os(),(r,i)=>{let s=lM(r,i,e.serverSyncTree_,t);au(n,r,s)});let r=[];ac(n,os(),(t,n)=>{r=r.concat(lv(e.serverSyncTree_,t,n));let i=uT(e,t);uy(e,i)}),e.onDisconnect_=al(),ue(e.eventQueue_,os(),r)}(e)}function uu(e,t,n){let r=new oi("/.info/"+t),i=oJ(n);e.infoData_.updateSnapshot(r,i);let s=lv(e.infoSyncTree_,r,i);ue(e.eventQueue_,r,s)}function uc(e){return e.nextWriteId_++}function uh(e,t,n,r,i){u_(e,"set",{path:t.toString(),value:n,priority:r});let s=uo(e),o=oJ(n,r),a=lI(e.serverSyncTree_,t),l=lU(o,a,s),u=uc(e),c=lm(e.serverSyncTree_,t,l,u,!0);l9(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),(n,r)=>{let s="ok"===n;s||sS("set at "+t+" failed: "+n);let o=lg(e.serverSyncTree_,u,!s);ue(e.eventQueue_,t,o),um(e,i,n,r)});let h=uT(e,t);uy(e,h),ue(e.eventQueue_,h,[])}function ud(e,t,n,r){let i=oJ(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,s)=>{"ok"===n&&au(e.onDisconnect_,t,i),um(e,r,n,s)})}function up(e,t,n){let r;r=".info"===oo(t._path)?ly(e.infoSyncTree_,t,n):ly(e.serverSyncTree_,t,n),l7(e.eventQueue_,t._path,r)}function uf(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ur)}function u_(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),sT(n,...t)}function um(e,t,n,r){t&&sV(()=>{if("ok"===n)t(null);else{let e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);let s=Error(i);s.code=e,t(s)}})}function ug(e,t,n){return lI(e.serverSyncTree_,t,n)||oK.EMPTY_NODE}function uv(e,t=e.transactionQueueTree_){if(t||uI(e,t),lW(t)){let n=uw(e,t);w(n.length>0,"Sending zero length transaction queue");let r=n.every(e=>0===e.status);r&&function(e,t,n){let r=n.map(e=>e.currentWriteId),i=ug(e,t,r),s=i,o=i.hash();for(let a=0;a<n.length;a++){let l=n[a];w(0===l.status,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;let u=of(t,l.path);s=s.updateChild(u,l.currentOutputSnapshotRaw)}let c=s.val(!0);e.server_.put(t.toString(),c,r=>{u_(e,"transaction put response",{path:t.toString(),status:r});let i=[];if("ok"===r){let s=[];for(let o=0;o<n.length;o++)n[o].status=2,i=i.concat(lg(e.serverSyncTree_,n[o].currentWriteId)),n[o].onComplete&&s.push(()=>n[o].onComplete(null,!0,n[o].currentOutputSnapshotResolved)),n[o].unwatcher();uI(e,lj(e.transactionQueueTree_,t)),uv(e,e.transactionQueueTree_),ue(e.eventQueue_,t,i);for(let a=0;a<s.length;a++)sV(s[a])}else{if("datastale"===r)for(let l=0;l<n.length;l++)3===n[l].status?n[l].status=4:n[l].status=0;else{sS("transaction at "+t.toString()+" failed: "+r);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=r}uy(e,t)}},o)}(e,lz(t),n)}else lB(t)&&lH(t,t=>{uv(e,t)})}function uy(e,t){let n=ub(e,t),r=lz(n),i=uw(e,n);return function(e,t,n){if(0===t.length)return;let r=[],i=[],s=t.filter(e=>0===e.status),o=s.map(e=>e.currentWriteId);for(let a=0;a<t.length;a++){let l=t[a],u=of(n,l.path),c=!1,h;if(w(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)c=!0,h=l.abortReason,i=i.concat(lg(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status){if(l.retryCount>=25)c=!0,h="maxretry",i=i.concat(lg(e.serverSyncTree_,l.currentWriteId,!0));else{let d=ug(e,l.path,o);l.currentInputSnapshot=d;let p=t[a].update(d.val());if(void 0!==p){lX("transaction failed: Data returned ",p,l.path);let f=oJ(p),_="object"==typeof p&&null!=p&&H(p,".priority");_||(f=f.updatePriority(d.getPriority()));let m=l.currentWriteId,g=uo(e),v=lU(f,d,g);l.currentOutputSnapshotRaw=f,l.currentOutputSnapshotResolved=v,l.currentWriteId=uc(e),o.splice(o.indexOf(m),1),i=(i=i.concat(lm(e.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally))).concat(lg(e.serverSyncTree_,m,!0))}else c=!0,h="nodata",i=i.concat(lg(e.serverSyncTree_,l.currentWriteId,!0))}}if(ue(e.eventQueue_,n,i),i=[],c){var y;t[a].status=2,setTimeout(y=t[a].unwatcher,Math.floor(0)),t[a].onComplete&&("nodata"===h?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(Error(h),!1,null)))}}uI(e,e.transactionQueueTree_);for(let b=0;b<r.length;b++)sV(r[b]);uv(e,e.transactionQueueTree_)}(e,i,r),r}function ub(e,t){let n,r=e.transactionQueueTree_;for(n=oo(t);null!==n&&void 0===lW(r);)r=lj(r,n),t=ol(t),n=oo(t);return r}function uw(e,t){let n=[];return function e(t,n,r){let i=lW(n);if(i)for(let s=0;s<i.length;s++)r.push(i[s]);lH(n,n=>{e(t,n,r)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function uI(e,t){let n=lW(t);if(n){let r=0;for(let i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,lV(t,n.length>0?n:void 0)}lH(t,t=>{uI(e,t)})}function uT(e,t){let n=lz(ub(e,t)),r=lj(e.transactionQueueTree_,t);return!function(e,t,n){let r=e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}return!1}(r,t=>{uE(e,t)}),uE(e,r),!function e(t,n,r,i){r&&!i&&n(t),lH(t,t=>{e(t,n,!0,i)}),r&&i&&n(t)}(r,t=>{uE(e,t)}),n}function uE(e,t){let n=lW(t);if(n){let r=[],i=[],s=-1;for(let o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(w(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(w(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(lg(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,Error("set"),!1,null))));-1===s?lV(t,void 0):n.length=s+1,ue(e.eventQueue_,lz(t),i);for(let a=0;a<r.length;a++)sV(r[a])}}let uC=function(e,t){let n=uk(e),r=n.namespace;"firebase.com"===n.domain&&sk(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||sk("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sR();let i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new sQ(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new oi(n.pathString)}},uk=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");-1===c&&(c=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(c,h)),c<h&&(i=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t="",n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(s){}t+="/"+i}return t}(e.substring(c,h)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):sS(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));(u=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(u+1),10)):u=t.length;let p=t.slice(0,u);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let f=t.indexOf(".");r=t.substring(0,f).toLowerCase(),n=t.substring(f+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uS{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+j(this.snapshot.exportVal())}}class uR{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uP{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uN{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new N;return!function(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{"ok"===r&&function e(t,n){if(op(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{let r=t.value;return t.value=null,r.forEachChild(oj,(e,n)=>{au(t,new oi(e),n)}),e(t,n)}}if(!(t.children.size>0))return!0;{let i=oo(n);if(n=ol(n),t.children.has(i)){let s=e(t.children.get(i),n);s&&t.children.delete(i)}return 0===t.children.size}}(e.onDisconnect_,t),um(e,n,r,i)})}(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){l6("OnDisconnect.remove",this._path);let e=new N;return ud(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){l6("OnDisconnect.set",this._path),lQ("OnDisconnect.set",e,this._path,!1);let t=new N;return ud(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){l6("OnDisconnect.setWithPriority",this._path),lQ("OnDisconnect.setWithPriority",e,this._path,!1),l1("OnDisconnect.setWithPriority",t,!1);let n=new N;return!function(e,t,n,r,i){let s=oJ(n,r);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,r)=>{"ok"===n&&au(e.onDisconnect_,t,s),um(e,i,n,r)})}(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){l6("OnDisconnect.update",this._path),l0("OnDisconnect.update",e,this._path,!1);let t=new N;return!function(e,t,n,r){if($(n)){sT("onDisconnect().update() called with empty data.  Don't do anything."),um(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,(i,s)=>{"ok"===i&&sF(n,(n,r)=>{let i=oJ(r);au(e.onDisconnect_,od(t,n),i)}),um(e,r,i,s)})}(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uO{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return op(this._path)?null:ou(this._path)}get ref(){return new uL(this._repo,this._path)}get _queryIdentifier(){let e=as(this._queryParams),t=sM(e);return"{}"===t?"default":t}get _queryObject(){return as(this._queryParams)}isEqual(e){if(!((e=es(e))instanceof uO))return!1;let t=this._repo===e._repo,n=om(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function uA(e,t){if(!0===e._orderByCalled)throw Error(t+": You can't combine multiple orderBy calls.")}function uD(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===oS){let r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){let s=e.getIndexStartName();if(s!==sO)throw Error(r);if("string"!=typeof t)throw Error(i)}if(e.hasEnd()){let o=e.getIndexEndName();if(o!==sA)throw Error(r);if("string"!=typeof n)throw Error(i)}}else if(e.getIndex()===oj){if(null!=t&&!lJ(t)||null!=n&&!lJ(n))throw Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(e.getIndex() instanceof oQ||e.getIndex()===oX,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ux(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class uL extends uO{constructor(e,t){super(e,t,new ae,!1)}get parent(){let e=oh(this._path);return null===e?null:new uL(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class uM{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new oi(e),n=uq(this.ref,e);return new uM(this._node.getChild(t),n,oj)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;let t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new uM(n,uq(this.ref,t),oj)))}hasChild(e){let t=new oi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uU(e,t){return(e=es(e))._checkNotDeleted("ref"),void 0!==t?uq(e._root,t):e._root}function uF(e,t){(e=es(e))._checkNotDeleted("refFromURL");let n=uC(t,e._repo.repoInfo_.nodeAdmin);l5("refFromURL",n);let r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||sk("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),uU(e,n.path.toString())}function uq(e,t){return e=es(e),null===oo(e._path)?l4("child","path",t,!1):l3("child","path",t,!1),new uL(e._repo,od(e._path,t))}function uj(e){return e=es(e),new uN(e._repo,e._path)}function uW(e,t){e=es(e),l6("push",e._path),lQ("push",t,e._path,!0);let n=us(e._repo),r=o0(n),i=uq(e,r),s=uq(e,r),o;return o=null!=t?uB(s,t).then(()=>s):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function uV(e){return l6("remove",e._path),uB(e,null)}function uB(e,t){e=es(e),l6("set",e._path),lQ("set",t,e._path,!1);let n=new N;return uh(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function uH(e,t){e=es(e),l6("setPriority",e._path),l1("setPriority",t,!1);let n=new N;return uh(e._repo,od(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function uz(e,t,n){if(l6("setWithPriority",e._path),lQ("setWithPriority",t,e._path,!1),l1("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";let r=new N;return uh(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function u$(e,t){l0("update",t,e._path,!1);let n=new N;return!function(e,t,n,r){u_(e,"update",{path:t.toString(),value:n});let i=!0,s=uo(e),o={};if(sF(n,(n,r)=>{i=!1,o[n]=lM(od(t,n),oJ(r),e.serverSyncTree_,s)}),i)sT("update() called with empty data.  Don't do anything."),um(e,r,"ok",void 0);else{let a=uc(e),l=function(e,t,n,r){var i,s,o,a;w(r>(i=e.pendingWriteTree_).lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:t,children:n,writeId:r,visible:!0}),i.visibleWrites=aD(i.visibleWrites,t,n),i.lastWriteId=r;let l=aN.fromObject(n);return lT(e,new ay(ap(),t,l))}(e.serverSyncTree_,t,o,a);l9(e.eventQueue_,l),e.server_.merge(t.toString(),n,(n,i)=>{let s="ok"===n;s||sS("update at "+t+" failed: "+n);let o=lg(e.serverSyncTree_,a,!s),l=o.length>0?uy(e,t):t;ue(e.eventQueue_,l,o),um(e,r,n,i)}),sF(n,n=>{let r=uT(e,od(t,n));uy(e,r)}),ue(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function uG(e){e=es(e);let t=new uP(()=>{}),n=new uK(t);return(function(e,t,n){let r=function(e,t){var n,r,i;let s=t._path,o=null;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=of(e,s);o=o||ll(t,n)});let a=e.syncPointTree_.get(s);a?o=o||ll(a,os()):(a=new li,e.syncPointTree_=e.syncPointTree_.set(s,a));let l=null!=o,u=l?new ab(o,!0,!1):null,c=(n=e.pendingWriteTree_,aQ(r=t._path,n)),h=lo(a,t,c,l?u.getNode():oK.EMPTY_NODE,l);return ak(h.viewCache_)}(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then(r=>{let i=oJ(r).withIndex(t._queryParams.getIndex());lw(e.serverSyncTree_,t,n,!0);let s;if(t._queryParams.loadsAllData())s=lv(e.serverSyncTree_,t._path,i);else{let o=lC(e.serverSyncTree_,t);s=lb(e.serverSyncTree_,t._path,i,o)}return ue(e.eventQueue_,t._path,s),ly(e.serverSyncTree_,t,n,null,!0),i},n=>(u_(e,"get for query "+j(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,n).then(t=>new uM(t,new uL(e._repo,e._path),e._queryParams.getIndex()))}class uK{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new uS("value",this,new uM(e.snapshotNode,new uL(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uR(this,e,t):null}matches(e){return e instanceof uK&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class uY{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uR(this,e,t):null}createEvent(e,t){w(null!=e.childName,"Child events should have a childName.");let n=uq(new uL(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new uS(e.type,this,new uM(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof uY&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function uJ(e,t,n,r,i){var s,o,a;let l;if("object"==typeof r&&(l=void 0,i=r),"function"==typeof r&&(l=r),i&&i.onlyOnce){let u=n,c=(t,n)=>{up(e._repo,e,d),u(t,n)};c.userCallback=n.userCallback,c.context=n.context,n=c}let h=new uP(n,l||void 0),d="value"===t?new uK(h):new uY(t,h),p;return s=e._repo,p=".info"===oo(e._path)?lw(s.infoSyncTree_,e,d):lw(s.serverSyncTree_,e,d),l7(s.eventQueue_,e._path,p),()=>up(e._repo,e,d)}function uQ(e,t,n,r){return uJ(e,"value",t,n,r)}function uX(e,t,n,r){return uJ(e,"child_added",t,n,r)}function uZ(e,t,n,r){return uJ(e,"child_changed",t,n,r)}function u0(e,t,n,r){return uJ(e,"child_moved",t,n,r)}function u1(e,t,n,r){return uJ(e,"child_removed",t,n,r)}function u2(e,t,n){let r=null,i=n?new uP(n):null;"value"===t?r=new uK(i):t&&(r=new uY(t,i)),up(e._repo,e,r)}class u3{}class u4 extends u3{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){lQ("endAt",this._value,e._path,!0);let t=an(e._queryParams,this._value,this._key);if(ux(t),uD(t),e._queryParams.hasEnd())throw Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new uO(e._repo,e._path,t,e._orderByCalled)}}function u6(e,t){return l2("endAt","key",t,!0),new u4(e,t)}class u5 extends u3{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){var t,n,r;lQ("endBefore",this._value,e._path,!1);let i,s,o=(t=e._queryParams,n=this._value,r=this._key,t.index_===oS?("string"==typeof n&&(n=o2(n)),s=an(t,n,r)):(i=null==r?sO:o2(r),s=an(t,n,i)),s.endBeforeSet_=!0,s);if(ux(o),uD(o),e._queryParams.hasEnd())throw Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new uO(e._repo,e._path,o,e._orderByCalled)}}function u8(e,t){return l2("endBefore","key",t,!0),new u5(e,t)}class u9 extends u3{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){lQ("startAt",this._value,e._path,!0);let t=at(e._queryParams,this._value,this._key);if(ux(t),uD(t),e._queryParams.hasStart())throw Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new uO(e._repo,e._path,t,e._orderByCalled)}}function u7(e=null,t){return l2("startAt","key",t,!0),new u9(e,t)}class ce extends u3{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){lQ("startAfter",this._value,e._path,!1);let t=function(e,t,n){let r;if(e.index_===oS)"string"==typeof t&&(t=o1(t)),r=at(e,t,n);else{let i;i=null==n?sA:o1(n),r=at(e,t,i)}return r.startAfterSet_=!0,r}(e._queryParams,this._value,this._key);if(ux(t),uD(t),e._queryParams.hasStart())throw Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new uO(e._repo,e._path,t,e._orderByCalled)}}function ct(e,t){return l2("startAfter","key",t,!0),new ce(e,t)}class cn extends u3{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new uO(e._repo,e._path,function(e,t){let n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}function cr(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw Error("limitToFirst: First argument must be a positive integer.");return new cn(e)}class ci extends u3{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new uO(e._repo,e._path,function(e,t){let n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}function cs(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw Error("limitToLast: First argument must be a positive integer.");return new ci(e)}class co extends u3{constructor(e){super(),this._path=e}_apply(e){uA(e,"orderByChild");let t=new oi(this._path);if(op(t))throw Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");let n=new oQ(t),r=ar(e._queryParams,n);return uD(r),new uO(e._repo,e._path,r,!0)}}function ca(e){if("$key"===e)throw Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return l3("orderByChild","path",e,!1),new co(e)}class cl extends u3{_apply(e){uA(e,"orderByKey");let t=ar(e._queryParams,oS);return uD(t),new uO(e._repo,e._path,t,!0)}}function cu(){return new cl}class cc extends u3{_apply(e){uA(e,"orderByPriority");let t=ar(e._queryParams,oj);return uD(t),new uO(e._repo,e._path,t,!0)}}function ch(){return new cc}class cd extends u3{_apply(e){uA(e,"orderByValue");let t=ar(e._queryParams,oX);return uD(t),new uO(e._repo,e._path,t,!0)}}function cp(){return new cd}class cf extends u3{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(lQ("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new u4(this._value,this._key)._apply(new u9(this._value,this._key)._apply(e))}}function c_(e,t){return l2("equalTo","key",t,!0),new cf(e,t)}function cm(e,...t){let n=es(e);for(let r of t)n=r._apply(n);return n}w(!lr,"__referenceConstructor has already been defined"),lr=uL,w(!lp,"__referenceConstructor has already been defined"),lp=uL;let cg={},cv=!1;function cy(e,t,n,r,i){var s,o,a,l;let u=r||e.options.databaseURL;void 0===u&&(e.options.projectId||sk("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sT("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let c=uC(u,i),h=c.repoInfo,d,p;void 0!==ss&&ss.env&&(p=ss.env.FIREBASE_DATABASE_EMULATOR_HOST),p?(d=!0,h=(c=uC(u=`http://${p}?ns=${h.namespace}`,i)).repoInfo):d=!c.repoInfo.secure;let f=i&&d?new sG(sG.OWNER):new s$(e.name,e.options,t);l5("Invalid Firebase Database URL",c),op(c.path)||sk("Database URL must point to the root of a Firebase Database (not including a child path).");let _,m,g=(s=h,o=e,a=f,l=new sz(e.name,n),_=cg[o.name],_||(_={},cg[o.name]=_),m=_[s.toURLString()],m&&sk("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),m=new ui(s,cv,a,l),_[s.toURLString()]=m,m);return new cb(g,e)}class cb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=s2(e.repoInfo_),e.forceRestClient_||sB())e.server_=new ao(e.repoInfo_,(t,n,r,i)=>{ua(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>ul(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{j(n)}catch(r){throw Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new oI(e.repoInfo_,t,(t,n,r,i)=>{ua(e,t,n,r,i)},t=>{ul(e,t)},t=>{var n,r;n=e,r=t,sF(r,(e,t)=>{uu(n,e,t)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return s1[n]||(s1[n]=t()),s1[n]}(e.repoInfo_,()=>new ad(e.stats_,e.server_)),e.infoData_=new aa,e.infoSyncTree_=new l_({startListening(t,n,r,i){let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=lv(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening(){}}),uu(e,"connected",!1),e.serverSyncTree_=new l_({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{let s=i(n,r);ue(e.eventQueue_,t._path,s)}),[]),stopListening(t,n){e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new uL(this._repo,os())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=cg[t];n&&n[e.key]===e||sk(`Database ${t}(${e.repoInfo_}) has already been deleted.`),uf(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&sk("Cannot call "+e+" on a deleted database.")}}function cw(){s7.IS_TRANSPORT_INITIALIZED&&sS("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function cI(){cw(),s6.forceDisallow()}function cT(){cw(),s9.forceDisallow(),s6.forceAllow()}function cE(e=ez(),t){return eW(e,"database").getImmediate({identifier:t})}function cC(e,t,n,r={}){var i,s,o,a;(e=es(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&sk("Cannot call useEmulator() after instance has already been initialized.");let l=e._repoInternal,u;if(l.repoInfo_.nodeAdmin)r.mockUserToken&&sk('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new sG(sG.OWNER);else if(r.mockUserToken){let c="string"==typeof r.mockUserToken?r.mockUserToken:O(r.mockUserToken,e.app.options.projectId);u=new sG(c)}i=l,a=u,i.repoInfo_=new sQ(`${t}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams),a&&(i.authTokenProvider_=a)}function ck(e){(e=es(e))._checkNotDeleted("goOffline"),uf(e._repo)}function cS(e){var t;(e=es(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume(ur)}function cR(e,t){sI(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cP={".sv":"timestamp"};function cN(){return cP}function cO(e){return{".sv":{increment:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cA{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function cD(e,t,n){var r;if(e=es(e),l6("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";let i=null===(r=null==n?void 0:n.applyLocally)||void 0===r||r,s=new N,o=(t,n,r)=>{let i=null;t?s.reject(t):(i=new uM(r,new uL(e._repo,e._path),oj),s.resolve(new cA(n,i)))},a=uQ(e,()=>{});return!function(e,t,n,r,i,s){u_(e,"transaction on "+t);let o={path:t,update:n,onComplete:r,status:null,order:sg(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ug(e,t,void 0);o.currentInputSnapshot=a;let l=o.update(a.val());if(void 0===l)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{lX("transaction failed: Data returned ",l,o.path),o.status=0;let u=lj(e.transactionQueueTree_,t),c=lW(u)||[];c.push(o),lV(u,c);let h;if("object"==typeof l&&null!==l&&H(l,".priority"))h=z(l,".priority"),w(lJ(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{let d=lI(e.serverSyncTree_,t)||oK.EMPTY_NODE;h=d.getPriority().val()}let p=uo(e),f=oJ(l,h),_=lU(f,a,p);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=_,o.currentWriteId=uc(e);let m=lm(e.serverSyncTree_,t,_,o.currentWriteId,o.applyLocally);ue(e.eventQueue_,t,m),uv(e,e.transactionQueueTree_)}}(e._repo,e._path,t,o,a,i),s.promise}oI.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},oI.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};let cx=function(e){let t=oI.prototype.put;return oI.prototype.put=function(n,r,i,s){void 0!==s&&(s=e()),t.call(this,n,r,i,s)},function(){oI.prototype.put=t}},cL=function(e){var t;cv=e};sl=eH,ej(new eo("database",(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return cy(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),e$(so,sa,void 0),e$(so,sa,"esm2017");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cM="firebasestorage.googleapis.com",cU="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cF extends M{constructor(e,t){super(cq(e),`Firebase Storage: ${t} (${cq(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cF.prototype)}_codeEquals(e){return cq(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function cq(e){return"storage/"+e}function cj(){return new cF("unknown","An unknown error occurred, please check the error payload for server response.")}function cW(){return new cF("canceled","User canceled the upload/download.")}function cV(){return new cF("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function cB(e){return new cF("invalid-argument",e)}function cH(){return new cF("app-deleted","The Firebase app was deleted.")}function cz(e){return new cF("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function c$(e,t){return new cF("invalid-format","String does not match format '"+e+"': "+t)}function cG(e){throw new cF("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cK{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){var n;let r;try{r=cK.makeFromUrl(e,t)}catch(i){return new cK(e,"")}if(""===r.path)return r;throw new cF("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===cM?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),u=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:s},{regex:l,indices:{bucket:1,path:2},postModify:s}];for(let c=0;c<u.length;c++){let h=u[c],d=h.regex.exec(e);if(d){let p=d[h.indices.bucket],f=d[h.indices.path];f||(f=""),n=new cK(p,f),h.postModify(n);break}}if(null==n){var _;throw new cF("invalid-url","Invalid URL '"+e+"'.")}return n}}class cY{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function cJ(e){return"string"==typeof e||e instanceof String}function cQ(e){return cX()&&e instanceof Blob}function cX(){return"undefined"!=typeof Blob}function cZ(e,t,n,r){if(r<t)throw cB(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw cB(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function c0(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function c1(e){let t=encodeURIComponent,n="?";for(let r in e)if(e.hasOwnProperty(r)){let i=t(r)+"="+t(e[r]);n=n+i+"&"}return n.slice(0,-1)}(p=m||(m={}))[p.NO_ERROR=0]="NO_ERROR",p[p.NETWORK_ERROR=1]="NETWORK_ERROR",p[p.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c2{constructor(e,t,n,r,i,s,o,a,l,u,c){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new c3(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===m.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){let s=n.getErrorCode()===m.ABORT;e(!1,new c3(!1,null,s));return}let o=-1!==this.successCodes_.indexOf(i);e(!0,new c3(o,n))})},t=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{var s;let o=this.callback_(i,i.getResponse());void 0!==o?n(o):n()}catch(a){r(a)}else if(null!==i){let l=cj();l.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,l):l)}else if(t.canceled){let u=this.appDelete_?cH():cW();r(u)}else{let c=new cF("retry-limit-exceeded","Max retry time for operation exceeded, please try again.");r(c)}};this.canceled_?t(!1,new c3(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(p,l())},t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(u){d();return}if(e){d(),c.call(null,e,...t);return}let n=l()||o;if(n){d(),c.call(null,e,...t);return}r<64&&(r*=2);let i;1===a?(a=2,i=0):i=(r+Math.random())*1e3,h(i)}let f=!1;function _(e){if(!f)f=!0,d(),!u&&(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){if(this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_){var t;(t=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){let t=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return e>=500&&e<600||t||n}}class c3{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function c4(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}if(cX())return new Blob(e);throw new cF("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let c6={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class c5{constructor(e,t){this.data=e,this.contentType=t||null}}function c8(e,t){switch(e){case c6.RAW:return new c5(c9(t));case c6.BASE64:case c6.BASE64URL:return new c5(c7(e,t));case c6.DATA_URL:return new c5(function(e){let t=new he(e);return t.base64?c7(c6.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw c$(c6.DATA_URL,"Malformed data URL.")}return c9(t)}(t.rest)}(t),function(e){let t=new he(e);return t.contentType}(t))}throw cj()}function c9(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if((64512&r)==55296){let i=n<e.length-1&&(64512&e.charCodeAt(n+1))==56320;if(i){let s=r,o=e.charCodeAt(++n);r=65536|(1023&s)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else(64512&r)==56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function c7(e,t){switch(e){case c6.BASE64:{let n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw c$(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case c6.BASE64URL:{let i=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(i||s)throw c$(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}let o;try{var a;a=t,o=atob(a)}catch(l){throw c$(e,"Invalid character found")}let u=new Uint8Array(o.length);for(let c=0;c<o.length;c++)u[c]=o.charCodeAt(c);return u}class he{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw c$(c6.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=t[1]||null;null!=n&&(this.base64=function(e,t){let n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ht{constructor(e,t){let n=0,r="";cQ(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(cQ(this.data_)){var n,r,i;let s=this.data_,o=(n=s,r=e,i=t,n.webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new ht(o)}{let a=new Uint8Array(this.data_.buffer,e,t-e);return new ht(a,!0)}}static getBlob(...e){if(cX()){let t=e.map(e=>e instanceof ht?e.data_:e);return new ht(c4.apply(null,t))}{let n=e.map(e=>cJ(e)?c8(c6.RAW,e).data:e.data_),r=0;n.forEach(e=>{r+=e.byteLength});let i=new Uint8Array(r),s=0;return n.forEach(e=>{for(let t=0;t<e.length;t++)i[s++]=e[t]}),new ht(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hn(e){var t;let n;try{n=JSON.parse(e)}catch(r){return null}return"object"!=typeof(t=n)||Array.isArray(t)?null:n}function hr(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hi(e,t){return t}class hs{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||hi}}let ho=null;function ha(){if(ho)return ho;let e=[];e.push(new hs("bucket")),e.push(new hs("generation")),e.push(new hs("metageneration")),e.push(new hs("name","fullPath",!0));let t=new hs("name");t.xform=function(e,t){var n;return!cJ(t)||t.length<2?t:hr(t)},e.push(t);let n=new hs("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new hs("timeCreated")),e.push(new hs("updated")),e.push(new hs("md5Hash",null,!0)),e.push(new hs("cacheControl",null,!0)),e.push(new hs("contentDisposition",null,!0)),e.push(new hs("contentEncoding",null,!0)),e.push(new hs("contentLanguage",null,!0)),e.push(new hs("contentType",null,!0)),e.push(new hs("metadata","customMetadata",!0)),ho=e}function hl(e,t,n){let r=hn(t);return null===r?null:function(e,t,n){var r,i;let s={};s.type="file";let o=n.length;for(let a=0;a<o;a++){let l=n[a];s[l.local]=l.xform(s,t[l.server])}return Object.defineProperty(s,"ref",{get:function(){let t=s.bucket,n=s.fullPath,r=new cK(t,n);return e._makeStorageReference(r)}}),s}(e,r,n)}function hu(e,t){let n={},r=t.length;for(let i=0;i<r;i++){let s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hc="prefixes",hh="items";class hd{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hp(e){if(!e)throw cj()}function hf(e,t){return function(n,r){let i=hl(e,r,t);return hp(null!==i),i}}function h_(e){return function(t,n){var r,i;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new cF("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new cF("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,s=new cF("quota-exceeded","Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,s=new cF("unauthorized","User does not have permission to access '"+i+"'.")):s=n,s.serverResponse=n.serverResponse,s}}function hm(e){let t=h_(e);return function(n,r){let i=t(n,r);if(404===n.getStatus()){var s;s=e.path,i=new cF("object-not-found","Object '"+s+"' does not exist.")}return i.serverResponse=r.serverResponse,i}}function hg(e,t,n){let r=t.fullServerUrl(),i=c0(r,e.host,e._protocol),s=e.maxOperationRetryTime,o=new hd(i,"GET",hf(e,n),s);return o.errorHandler=hm(t),o}function hv(e,t,n){let r=t.fullServerUrl(),i=c0(r,e.host,e._protocol)+"?alt=media",s=e.maxOperationRetryTime,o=new hd(i,"GET",(e,t)=>t,s);return o.errorHandler=hm(t),void 0!==n&&(o.headers.Range=`bytes=0-${n}`,o.successCodes=[200,206]),o}function hy(e,t,n){let r=Object.assign({},n);if(r.fullPath=e.path,r.size=t.size(),!r.contentType){var i,s;r.contentType=t&&t.type()||"application/octet-stream"}return r}function hb(e,t,n,r,i){let s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;let l=hy(t,r,i),u=hu(l,n),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",h=ht.getBlob(c,r,"\r\n--"+a+"--");if(null===h)throw cV();let d={name:l.fullPath},p=c0(s,e.host,e._protocol),f=e.maxUploadRetryTime,_=new hd(p,"POST",hf(e,n),f);return _.urlParams=d,_.headers=o,_.body=h.uploadData(),_.errorHandler=h_(t),_}class hw{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function hI(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){hp(!1)}return hp(!!n&&-1!==(t||["active"]).indexOf(n)),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hT={STATE_CHANGED:"state_changed"},hE={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function hC(e){switch(e){case"running":case"pausing":case"canceling":return hE.RUNNING;case"paused":return hE.PAUSED;case"success":return hE.SUCCESS;case"canceled":return hE.CANCELED;default:return hE.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hk{constructor(e,t,n){var r;"function"==typeof e||null!=t||null!=n?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hS(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class hR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=m.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=m.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=m.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw cG("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(let i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cG("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cG("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw cG("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cG("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class hP extends hR{initXhr(){this.xhr_.responseType="text"}}function hN(){return new hP}class hO extends hR{initXhr(){this.xhr_.responseType="arraybuffer"}}function hA(){return new hO}class hD extends hR{initXhr(){this.xhr_.responseType="blob"}}function hx(){return new hD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hL{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ha(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let n=function(e,t,n,r,i){let s=t.bucketOnlyServerUrl(),o=hy(t,r,i),a={name:o.fullPath},l=c0(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=hu(o,n),h=e.maxUploadRetryTime,d=new hd(l,"POST",function(e){hI(e);let t;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){hp(!1)}return hp(cJ(t)),t},h);return d.urlParams=a,d.headers=u,d.body=c,d.errorHandler=h_(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,hN,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,n)=>{let r=function(e,t,n,r){let i=e.maxUploadRetryTime,s=new hd(n,"POST",function(e){let t=hI(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){hp(!1)}n||hp(!1);let s=Number(n);return hp(!isNaN(s)),new hw(s,r.size(),"final"===t)},i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=h_(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,hN,t,n);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new hw(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=function(e,t,n,r,i,s,o,a){let l=new hw(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new cF("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");let u=l.total-l.current,c=u;i>0&&(c=Math.min(c,i));let h=l.current,d=h+c,p=c===u?"upload, finalize":"upload",f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(h,d);if(null===_)throw cV();let m=t.maxUploadRetryTime,g=new hd(n,"POST",function(e,n){let i=hI(e,["active","final"]),o=l.current+c,a=r.size(),u;return u="final"===i?hf(t,s)(e,n):null,new hw(o,a,"final"===i,u)},m);return g.headers=f,g.body=_.uploadData(),g.progressCallback=a||null,g.errorHandler=h_(e),g}(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(o){this._error=o,this._transition("error");return}let a=this._ref.storage._makeRequest(s,hN,r,i);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let n=hg(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,hN,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let n=hb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,hN,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=cW(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=hC(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){let i=new hk(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(hC(this._state)){case hE.SUCCESS:hS(this._resolve.bind(null,this.snapshot))();break;case hE.CANCELED:case hE.ERROR:let t=this._reject;hS(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=hC(this._state);switch(t){case hE.RUNNING:case hE.PAUSED:e.next&&hS(e.next.bind(e,this.snapshot))();break;case hE.SUCCESS:e.complete&&hS(e.complete.bind(e))();break;case hE.CANCELED:case hE.ERROR:default:e.error&&hS(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hM{constructor(e,t){this._service=e,t instanceof cK?this._location=t:this._location=cK.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new hM(e,t)}get root(){let e=new cK(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hr(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let n=e.slice(0,t);return n}(this._location.path);if(null===e)return null;let t=new cK(this._location.bucket,e);return new hM(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw cz(e)}}function hU(e,t,n){e._throwIfRoot("uploadBytes");let r=hb(e.storage,e._location,ha(),new ht(t,!0),n);return e.storage.makeRequestWithTokens(r,hN).then(t=>({metadata:t,ref:e}))}async function hF(e,t,n){let r=await hq(e,{pageToken:n});t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await hF(e,t,r.nextPageToken)}function hq(e,t){null!=t&&"number"==typeof t.maxResults&&cZ("options.maxResults",1,1e3,t.maxResults);let n=t||{},r=function(e,t,n,r,i){var s,o;let a={};t.isRoot?a.prefix="":a.prefix=t.path+"/",n&&n.length>0&&(a.delimiter=n),r&&(a.pageToken=r),i&&(a.maxResults=i);let l=t.bucketOnlyServerUrl(),u=c0(l,e.host,e._protocol),c=e.maxOperationRetryTime,h=new hd(u,"GET",(o=t.bucket,function(t,n){let r=function(e,t,n){let r=hn(n);return null===r?null:function(e,t,n){let r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[hc])for(let i of n[hc]){let s=i.replace(/\/$/,""),o=e._makeStorageReference(new cK(t,s));r.prefixes.push(o)}if(n[hh])for(let a of n[hh]){let l=e._makeStorageReference(new cK(t,a.name));r.items.push(l)}return r}(e,t,r)}(e,o,n);return hp(null!==r),r}),c);return h.urlParams=a,h.errorHandler=h_(t),h}(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,hN)}function hj(e,t){let n=function(e,t){let n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new cK(e._location.bucket,n);return new hM(e.storage,r)}function hW(e,t){let n=null==t?void 0:t[cU];return null==n?null:cK.makeFromBucketSpec(n,e)}class hV{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=cM,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=cK.makeFromBucketSpec(r,this._host):this._bucket=hW(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=cK.makeFromBucketSpec(this._url,e):this._bucket=hW(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cZ("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cZ("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hM(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new cY(cH());{let i=function(e,t,n,r,i,s){var o,a,l,u,c,h,d,p;let f=c1(e.urlParams),_=e.url+f,m=Object.assign({},e.headers);return o=m,t&&(o["X-Firebase-GMPID"]=t),l=m,null!==n&&n.length>0&&(l.Authorization="Firebase "+n),(c=m)["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),d=m,null!==r&&(d["X-Firebase-AppCheck"]=r),new c2(_,e.method,m,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let hB="@firebase/storage",hH="0.9.9",hz="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function h$(e,t){return function(e,t){e._throwIfRoot("getBytes");let n=hv(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,hA).then(e=>void 0!==t?e.slice(0,t):e)}(e=es(e),t)}function hG(e,t,n){return e=es(e),hU(e,t,n)}function hK(e,t,n,r){return function(e,t,n=c6.RAW,r){e._throwIfRoot("uploadString");let i=c8(n,t),s=Object.assign({},r);return null==s.contentType&&null!=i.contentType&&(s.contentType=i.contentType),hU(e,i.data,s)}(e=es(e),t,n,r)}function hY(e,t,n){var r,i,s;return(r=e=es(e))._throwIfRoot("uploadBytesResumable"),new hL(r,new ht(t),n)}function hJ(e){return function(e){e._throwIfRoot("getMetadata");let t=hg(e.storage,e._location,ha());return e.storage.makeRequestWithTokens(t,hN)}(e=es(e))}function hQ(e,t){return function(e,t){e._throwIfRoot("updateMetadata");let n=function(e,t,n,r){let i=t.fullServerUrl(),s=c0(i,e.host,e._protocol),o=hu(n,r),a=e.maxOperationRetryTime,l=new hd(s,"PATCH",hf(e,r),a);return l.headers={"Content-Type":"application/json; charset=utf-8"},l.body=o,l.errorHandler=hm(t),l}(e.storage,e._location,t,ha());return e.storage.makeRequestWithTokens(n,hN)}(e=es(e),t)}function hX(e,t){return e=es(e),hq(e,t)}function hZ(e){return function(e){let t={prefixes:[],items:[]};return hF(e,t).then(()=>t)}(e=es(e))}function h0(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,n){var r,i;let s=t.fullServerUrl(),o=c0(s,e.host,e._protocol),a=e.maxOperationRetryTime,l=new hd(o,"GET",function(t,r){let i=hl(e,r,n);return hp(null!==i),function(e,t,n,r){let i=hn(t);if(null===i||!cJ(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let o=encodeURIComponent,a=s.split(","),l=a.map(t=>{let i=e.bucket,s=e.fullPath,a="/b/"+o(i)+"/o/"+o(s),l=c0(a,n,r),u=c1({alt:"media",token:t});return l+u});return l[0]}(i,r,e.host,e._protocol)},a);return l.errorHandler=hm(t),l}(e.storage,e._location,ha());return e.storage.makeRequestWithTokens(t,hN).then(e=>{if(null===e)throw new cF("no-download-url","The given file does not have any download URLs.");return e})}(e=es(e))}function h1(e){return function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let n=t.fullServerUrl(),r=c0(n,e.host,e._protocol),i=e.maxOperationRetryTime,s=new hd(r,"DELETE",function(e,t){},i);return s.successCodes=[200,204],s.errorHandler=hm(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,hN)}(e=es(e))}function h2(e,t){return function(e,t){var n,r,i;if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,n){if(t instanceof hV){if(null==t._bucket)throw new cF("no-default-bucket","No default bucket found. Did you set the '"+cU+"' property when initializing the app?");let r=new hM(t,t._bucket);return null!=n?e(r,n):r}return void 0!==n?hj(t,n):t}(e,t);if(e instanceof hV)return r=e,i=t,new hM(r,i);throw cB("To use ref(service, url), the first argument must be a Storage instance.")}(e=es(e),t)}function h3(e,t){return hj(e,t)}function h4(e=ez(),t){e=es(e);let n=eW(e,hz),r=n.getImmediate({identifier:t});return r}function h6(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:O(i,e.app.options.projectId))}(e,t,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function h5(e,t){return function(e,t){e._throwIfRoot("getBlob");let n=hv(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,hx).then(e=>void 0!==t?e.slice(0,t):e)}(e=es(e),t)}function h8(e,t){throw Error("getStream() is only supported by NodeJS builds")}ej(new eo(hz,function e(t,{instanceIdentifier:n}){let r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new hV(r,i,s,n,eH)},"PUBLIC").setMultipleInstances(!0)),e$(hB,hH,""),e$(hB,hH,"esm2017");var h9=function(e,t={}){if("object"!=typeof t){let n=t;t={name:n}}let r=Object.assign({name:eL,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw eV.create("bad-app-name",{appName:String(i)});let s=eU.get(i);if(s){if(K(e,s.options)&&K(r,s.config))return s;throw eV.create("duplicate-app",{appName:i})}let o=new eu(i);for(let a of eF.values())o.addComponent(a);let l=new eB(e,r,o);return eU.set(i,l),l}({apiKey:"AIzaSyDGIQoNHBmyjdiS3YLU_kFoGgyXzVcoM3k",authDomain:"proj2022-3cd0d.firebaseapp.com",databaseURL:"https://proj2022-3cd0d-default-rtdb.firebaseio.com",projectId:"proj2022-3cd0d",storageBucket:"proj2022-3cd0d.appspot.com",messagingSenderId:"752819259660",appId:"1:752819259660:web:ddf40d3d1e980ba343e129",measurementId:"G-W209NZMGC6"}),h7=si(h9),de=cE(h9),dt=h4(h9)},7726:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(1799),i=n(5893);n(6673),n(2206);var s,o,a=n(9473),l=n(9498),u=n(7568),c=n(655),h=n(3940),d=(0,l.hg)("auth/loginStatus",(s=(0,u.Z)(function(e,t){var n,r,i,s;return(0,c.__generator)(this,function(o){switch(o.label){case 0:n=e.email,r=e.password,i=t.rejectWithValue,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,h.fZ.signInWithEmailAndPassword(h.I8,n,r)];case 2:return o.sent(),[2];case 3:if(!(s=o.sent()).response)throw s.message;return i(s.response.data),[3,4];case 4:return[2]}})}),function(e,t){return s.apply(this,arguments)})),p=(0,l.hg)("auth/logoutStatus",(o=(0,u.Z)(function(e,t){var n,r;return(0,c.__generator)(this,function(e){switch(e.label){case 0:n=t.rejectWithValue,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,h.I8.signOut()];case 2:return e.sent(),[3,4];case 3:if(!(r=e.sent()).response)throw r.message;return n(r.response.data),[3,4];case 4:return[2]}})}),function(e,t){return o.apply(this,arguments)})),f=(0,l.oM)({name:"auth",initialState:{user:null,loading:!1},reducers:{},extraReducers:function(e){e.addCase(d.pending,function(e){e.loading=!0}),e.addCase(d.fulfilled,function(e){e.loading=!1}),e.addCase(p.fulfilled,function(e){e.user=null})}}).reducer,_=n(2826),m=(0,l.xC)({reducer:{auth:f,rooms:_.ZP}}),g=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.zt,{store:m,children:(0,i.jsx)(t,(0,r.Z)({},n))})})}},2826:function(e,t,n){"use strict";n.d(t,{CF:function(){return s},fL:function(){return o},qb:function(){return a}});var r=(0,n(9498).oM)({name:"rooms",initialState:{datas:[],nodes:[],bles:[],loading:null},reducers:{setRooms:function(e,t){e.datas=t.payload},setNodes:function(e,t){e.nodes=t.payload},setBles:function(e,t){e.bles=t.payload}},extraReducers:function(e){}}),i=r.actions,s=i.setRooms,o=i.setNodes,a=i.setBles;t.ZP=r.reducer},6673:function(){},2206:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(r){n=o}}();var l=[],u=!1,c=-1;function h(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,_=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case h:case s:case a:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case _:case l:return e;default:return t}}case i:return t}}}function I(e){return w(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=s,t.Lazy=m,t.Memo=_,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return I(e)||w(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===_},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===a||e===o||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===_||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w},9864:function(e,t,n){"use strict";e.exports=n(9921)},9473:function(e,t,n){"use strict";n.d(t,{zt:function(){return I},I0:function(){return C},v9:function(){return v}});var r,i,s,o=n(1688),a=n(2798),l=n(3935);function u(e){e()}let c=u,h=()=>c;var d=n(7294);let p=(0,d.createContext)(null);function f(){let e=(0,d.useContext)(p);return e}let _=()=>{throw Error("uSES not initialized!")},m=_,g=(e,t)=>e===t,v=function(e=p){let t=e===p?f:()=>(0,d.useContext)(e);return function(e,n=g){let{store:r,subscription:i,getServerState:s}=t(),o=m(i.addNestedSub,r.getState,s||r.getState,e,n);return(0,d.useDebugValue)(o),o}}();n(8679),n(2973);let y={notify(){},get:()=>[]},b=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),w=b?d.useLayoutEffect:d.useEffect;var I=function({store:e,context:t,children:n,serverState:r}){let i=(0,d.useMemo)(()=>{let t=function(e,t){let n,r=y;function i(){o.onStateChange&&o.onStateChange()}function s(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){let e=h(),t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}let o={addNestedSub:function(e){return s(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:s,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=y)},getListeners:()=>r};return o}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0}},[e,r]),s=(0,d.useMemo)(()=>e.getState(),[e]);return w(()=>{let{subscription:t}=i;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[i,s]),d.createElement((t||p).Provider,{value:i},n)};function T(e=p){let t=e===p?f:()=>(0,d.useContext)(e);return function(){let{store:e}=t();return e}}let E=T(),C=function(e=p){let t=e===p?E:T(e);return function(){let e=t();return e.dispatch}}();m=r=a.useSyncExternalStoreWithSelector,o.useSyncExternalStore,c=l.unstable_batchedUpdates},8359:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n;Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},2973:function(e,t,n){"use strict";n(8359)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,o=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}function c(e,t){return t()}var h="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?c:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,u(i)&&c({inst:i})},[e,n,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:h},139:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=n(7294),i=n(1688),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,a=r.useRef,l=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var h=a(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;var p=o(e,(h=u(function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(o=e,a=n)}var o,a,l=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,i]))[0],h[1]);return l(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)},7568:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o){try{var a=e[s](o),l=a.value}catch(u){n(u);return}a.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,l,"next",e)}function l(e){r(o,i,s,a,l,"throw",e)}a(void 0)})}}n.d(t,{Z:function(){return i}})},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}n.d(t,{Z:function(){return i}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);