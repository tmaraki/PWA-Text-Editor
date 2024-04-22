/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var n={594:(n,t,e)=>{"use strict";function r(n,t,e,r,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var a=n.apply(t,e);function c(n){r(a,o,i,c,s,"next",n)}function s(n){r(a,o,i,c,s,"throw",n)}c(void 0)}))}}e.d(t,{L:()=>j,G:()=>L});var i=e(756),a=e.n(i);const c=(n,t)=>t.some((t=>n instanceof t));let s,u;const l=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,h=new WeakMap;let v={get(n,t,e){if(n instanceof IDBTransaction){if("done"===t)return f.get(n);if("objectStoreNames"===t)return n.objectStoreNames||d.get(n);if("store"===t)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return g(n[t])},set:(n,t,e)=>(n[t]=e,!0),has:(n,t)=>n instanceof IDBTransaction&&("done"===t||"store"===t)||t in n};function y(n){return"function"==typeof n?(t=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...n){return t.apply(m(this),n),g(l.get(this))}:function(...n){return g(t.apply(m(this),n))}:function(n,...e){const r=t.call(m(this),n,...e);return d.set(r,n.sort?n.sort():[n]),g(r)}:(n instanceof IDBTransaction&&function(n){if(f.has(n))return;const t=new Promise(((t,e)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",i),n.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{e(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",i),n.addEventListener("abort",i)}));f.set(n,t)}(n),c(n,s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(n,v):n);var t}function g(n){if(n instanceof IDBRequest)return function(n){const t=new Promise(((t,e)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",i)},o=()=>{t(g(n.result)),r()},i=()=>{e(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,n)})).catch((()=>{})),h.set(t,n),t}(n);if(p.has(n))return p.get(n);const t=y(n);return t!==n&&(p.set(n,t),h.set(t,n)),t}const m=n=>h.get(n);function b(n,t,{blocked:e,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(n,t),c=g(a);return r&&a.addEventListener("upgradeneeded",(n=>{r(g(a.result),n.oldVersion,n.newVersion,g(a.transaction))})),e&&a.addEventListener("blocked",(()=>e())),c.then((n=>{i&&n.addEventListener("close",(()=>i())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const w=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],_=new Map;function k(n,t){if(!(n instanceof IDBDatabase)||t in n||"string"!=typeof t)return;if(_.get(t))return _.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,o=x.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!w.includes(e))return;const i=async function(n,...t){const i=this.transaction(n,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[e](...t),o&&i.done]))[0]};return _.set(t,i),i}var E;E=v,v={...E,get:(n,t,e)=>k(n,t)||E.get(n,t,e),has:(n,t)=>!!k(n,t)||E.has(n,t)};var S=function(){var n=o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",b("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=o(a().mark((function n(t){var e,r,o,i,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("PUT to the database"),n.next=3,b("jate",1);case 3:return e=n.sent,r=e.transaction(["jate"],"readwrite"),o=r.objectStore("jate"),i=o.put({id:1,value:t}),n.next=9,i;case 9:c=n.sent,console.log("Data saved!",c);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),j=function(){var n=o(a().mark((function n(){var t,e,r,o,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("GET from database"),n.next=4,b("jate",1);case 4:return t=n.sent,e=t.transaction(["jate"],"readonly"),r=e.objectStore("jate"),o=r.getAll(),n.next=10,o;case 10:return i=n.sent,console.log("result.value",i),n.abrupt("return",null==i?void 0:i.value);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();S()},74:(n,t,e)=>{"use strict";e.d(t,{A:()=>c});var r=e(212),o=e(29),i=e(594),a=e(190),c=(0,r.A)((function n(){var t=this;(0,o.A)(this,n);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(0,i.L)().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(n||e||a.w)})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),(0,i.G)(localStorage.getItem("content"))}))}))},190:(n,t,e)=>{"use strict";e.d(t,{w:()=>r});var r="\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n"},16:(n,t,e)=>{"use strict";e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n#buttonInstall.hidden {\n  display: none;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=a},314:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},659:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},633:(n,t,e)=>{var r=e(738).default;function o(){"use strict";n.exports=o=function(){return e},n.exports.__esModule=!0,n.exports.default=n.exports;var t,e={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(n,t,e){n[t]=e.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function d(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{d({},"")}catch(t){d=function(n,t,e){return n[t]=e}}function p(n,t,e,r){var o=t&&t.prototype instanceof w?t:w,i=Object.create(o.prototype),a=new M(r||[]);return c(i,"_invoke",{value:P(n,e,a)}),i}function h(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}e.wrap=p;var v="suspendedStart",y="suspendedYield",g="executing",m="completed",b={};function w(){}function x(){}function _(){}var k={};d(k,u,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(D([])));S&&S!==i&&a.call(S,u)&&(k=S);var L=_.prototype=w.prototype=Object.create(k);function j(n){["next","throw","return"].forEach((function(t){d(n,t,(function(n){return this._invoke(t,n)}))}))}function I(n,t){function e(o,i,c,s){var u=h(n[o],n,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(n){e("next",n,c,s)}),(function(n){e("throw",n,c,s)})):t.resolve(f).then((function(n){l.value=n,c(l)}),(function(n){return e("throw",n,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(n,r){function i(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(i,i):i()}})}function P(n,e,r){var o=v;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=T(c,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=h(n,e,r);if("normal"===u.type){if(o=r.done?m:y,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function T(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,T(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=h(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function A(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function O(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function M(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(A,this),this.reset(!0)}function D(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(a.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(r(n)+" is not iterable")}return x.prototype=_,c(L,"constructor",{value:_,configurable:!0}),c(_,"constructor",{value:x,configurable:!0}),x.displayName=d(_,f,"GeneratorFunction"),e.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,_):(n.__proto__=_,d(n,f,"GeneratorFunction")),n.prototype=Object.create(L),n},e.awrap=function(n){return{__await:n}},j(I.prototype),d(I.prototype,l,(function(){return this})),e.AsyncIterator=I,e.async=function(n,t,r,o,i){void 0===i&&(i=Promise);var a=new I(p(n,t,r,o),i);return e.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},j(L),d(L,f,"Generator"),d(L,u,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),e.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=D,M.prototype={constructor:M,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=n,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),b},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),O(e),b}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:D(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},738:n=>{function t(e){return n.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.__esModule=!0,n.exports.default=n.exports,t(e)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},756:(n,t,e)=>{var r=e(633)();n.exports=r;try{regeneratorRuntime=r}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},29:(n,t,e)=>{"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,{A:()=>r})},212:(n,t,e)=>{"use strict";function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function o(n){var t=function(n,t){if("object"!=r(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==r(t)?t:t+""}function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,o(r.key),r)}}function a(n,t,e){return t&&i(n.prototype,t),e&&i(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}e.d(t,{A:()=>a})}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";try{self["workbox:window:6.5.4"]&&_()}catch(n){}function n(n,t){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(n){e(n.data)},n.postMessage(t,[r.port2])}))}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function r(n,e){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.4"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))};function i(n,t){var e=location.href;return new URL(n,e).href===new URL(t,e).href}var a=function(n,t){this.type=n,Object.assign(this,t)};function c(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}var f=function(t){var e,r;function s(n,e){var r,s;return void 0===e&&(e={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,t=n.installing;r.tn>0||!i(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,n.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(n){var t=r.fn,e=n.target,o=e.state,i=e===r.vn,c={sw:e,isExternal:i,originalEvent:n};!i&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new a(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===e&&r.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(n){var t=r.hn,e=t!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:e,originalEvent:n,sw:t,isUpdate:r.mn})),e||r.on.resolve(t)},r.gn=(s=function(n){var t=n.data,e=n.ports,o=n.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new a("message",{data:t,originalEvent:n,ports:e,sw:o}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=n,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}r=t,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var f,d=s.prototype;return d.register=function(n){var t=(void 0===n?{}:n).immediate,e=void 0!==t&&t;try{var r=this;return function(n,t){var e=n();return e&&e.then?e.then(t):t()}((function(){if(!e&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&i(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(t){try{return c(this.getSW(),(function(e){return n(e,t)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(s.prototype,f),s}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,e=r(this.Sn(n.type));!(t=e()).done;)(0,t.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}()),d=e(74),p=(e(594),e(72)),h=e.n(p),v=e(825),y=e.n(v),g=e(659),m=e.n(g),b=e(56),w=e.n(b),x=e(540),k=e.n(x),E=e(113),S=e.n(E),L=e(16),j={};j.styleTagTransform=S(),j.setAttributes=w(),j.insert=m().bind(null,"head"),j.domAPI=y(),j.insertStyleElement=k(),h()(L.A,j),L.A&&L.A.locals&&L.A.locals;var I,P=document.querySelector("#main");P.innerHTML="",void 0===new d.A&&((I=document.createElement("div")).classList.add("spinner"),I.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',P.appendChild(I)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();