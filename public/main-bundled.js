!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";var r=n(2),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===a.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:o,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))})))})),i=o.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),a=n(16),i={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(6)),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(15))},function(e,t,n){"use strict";var r=n(0),a=n(17),i=n(3),o=n(19),s=n(22),c=n(23),u=n(7);e.exports=function(e){return new Promise((function(t,l){var h=e.data,f=e.headers;r.isFormData(h)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",p=e.auth.password||"";f.Authorization="Basic "+btoa(m+":"+p)}var v=o(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};a(t,l,r),d=null}},d.onabort=function(){d&&(l(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){l(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(24),g=(e.withCredentials||c(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(f,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),l(e),d=null)})),void 0===h&&(h=null),d.send(h)}))}},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t,n,a,i){var o=new Error(e);return r(o,t,n,a,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},a=["url","method","params","data"],i=["headers","auth","proxy"],o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(a,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):void 0!==t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):void 0!==e[a]&&(n[a]=e[a])})),r.forEach(o,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=a.concat(i).concat(o),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(0),a=n(2),i=n(11),o=n(8);function s(e){var t=new i(e),n=a(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(5));c.Axios=i,c.create=function(e){return s(o(c.defaults,e))},c.Cancel=n(9),c.CancelToken=n(25),c.isCancel=n(4),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),a=n(3),i=n(12),o=n(13),s=n(8);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},function(e,t,n){"use strict";var r=n(0),a=n(14),i=n(4),o=n(5);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,h=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(20),a=n(21);e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,o={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(o[t]&&a.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,i,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(9);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.textField=document.querySelector(".live-search-field"),this.overlay=document.querySelector(".search-overlay"),this.closeIcon=document.querySelector(".close-live-search"),this.headerSearch=document.querySelector(".header-search-icon"),this.resultSearch=document.querySelector(".live-search-results"),this.loaderIcon=document.querySelector(".circle-loader"),this.typingWaitTimer,this.previousValue="",this.event()}var t,n,r;return t=e,(n=[{key:"event",value:function(){var e=this;this.textField.addEventListener("keyup",(function(t){return e.keyPressHandler()})),this.closeIcon.addEventListener("click",(function(){return e.closeSearch()})),this.headerSearch.addEventListener("click",(function(t){t.preventDefault(),e.openOverlay()}))}},{key:"openOverlay",value:function(){var e=this;this.overlay.classList.add("search-overlay--visible"),setTimeout((function(){e.textField.focus()}),50)}},{key:"keyPressHandler",value:function(){var e=this,t=this.textField.value;""==t&&(clearTimeout(this.typingWaitTimer),this.hideLoaderIcon(),this.hideResultArea()),""!=t&&t!=this.previousValue&&(clearTimeout(this.typingWaitTimer),this.showLoaderIcon(),this.hideResultArea(),this.typingWaitTimer=setTimeout((function(){e.sendRequest()}),750)),console.log(this.typingWaitTimer),this.previousValue=t}},{key:"sendRequest",value:function(){var e=this;a.a.post("/search",{setValue:this.textField.value}).then((function(t){e.renderResultHTML(t.data)})).catch((function(){alert("Hello, the request has failed")}))}},{key:"renderResultHTML",value:function(e){console.log(e),e.length?this.resultSearch.innerHTML='<div class="list-group-item active"><strong>Search Results</strong> ('.concat(e.length>1?"".concat(e.length," items found"):"1 item found",")</div>\n            ").concat(e.map((function(e){var t=new Date(e.createdDate);return'<a href="/post/'.concat(e._id,'" class="list-group-item list-group-item-action" />\n              <img class="avatar-tiny" src="').concat(e.author.avatar,'"></img> \n              <strong>').concat(e.title,'</strong>\n              <span class="text-muted small">by ').concat(e.author.firstname," ").concat(e.author.lastname," on ").concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear(),"</span>\n            </a>")})).join(" "),"\n\t\t\t</div>\n            "):this.resultSearch.innerHTML='<p class="alert alert-danger text-center shadow-sm">Sorry, we could find the value for that search</p>',this.hideLoaderIcon(),this.showResultArea()}},{key:"showLoaderIcon",value:function(){this.loaderIcon.classList.add("circle-loader--visible")}},{key:"hideLoaderIcon",value:function(){this.loaderIcon.classList.remove("circle-loader--visible")}},{key:"showResultArea",value:function(){this.resultSearch.classList.add("live-search-results--visible")}},{key:"hideResultArea",value:function(){this.resultSearch.classList.remove("live-search-results--visible")}},{key:"closeSearch",value:function(){this.overlay.classList.remove("search-overlay--visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'<div class="search-overlay">\n\t\t    <div class="search-overlay-top shadow-sm">\n\t\t      <div class="container container--narrow">\n\t\t        <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n\t\t        <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n\t\t        <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n\t\t      </div>\n\t\t    </div>\n\n\t\t    <div class="search-overlay-bottom">\n\t\t      <div class="container container--narrow py-3">\n\t\t        <div class="circle-loader"></div>\n\t\t        <div class="live-search-results">\n\t\t          <div class="list-group shadow-sm">\n\t\t            \n\t\t        </div>\n\t\t      </div>\n\t\t    </div>\n\t\t  </div>')}}])&&i(t.prototype,n),r&&i(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.chatWrapper=document.querySelector("#chat-wrapper"),this.openIcon=document.querySelector(".header-chat-icon"),this.injectHTML(),this.chatField=document.querySelector("#chatField"),this.chatLog=document.querySelector("#chat"),this.chatForm=document.querySelector("#chatForm"),this.openedYet=!1,this.closeIcon=document.querySelector(".chat-title-bar-close"),this.event()}var t,n,r;return t=e,(n=[{key:"event",value:function(){var e=this;this.chatForm.addEventListener("submit",(function(t){t.preventDefault(),e.sendMessageToServer()})),this.openIcon.addEventListener("click",(function(){return e.showChat()})),this.closeIcon.addEventListener("click",(function(){return e.closeChat()}))}},{key:"sendMessageToServer",value:function(){""!=this.chatField.value&&(this.socket.emit("chatMessageFromBrowser",{message:this.chatField.value}),this.chatLog.insertAdjacentHTML("beforeend",'\n\t\t\t  <div class="chat-self">\n\t\t        <div class="chat-message">\n\t\t          <div class="chat-message-inner">\n\t\t            '.concat(this.chatField.value,'\n\t\t          </div>\n\t\t        </div>\n\t\t        <img class="chat-avatar avatar-tiny" src="').concat(this.avatar,'">\n\t\t      </div>\n\t      \t'))),this.chatLog.scrollTop=this.chatLog.scrollHeight,this.chatField.value="",this.chatField.focus()}},{key:"closeChat",value:function(){this.chatWrapper.classList.remove("chat--visible")}},{key:"showChat",value:function(){this.openedYet||this.openConnection(),this.openedYet=!0,this.chatWrapper.classList.add("chat--visible"),this.chatField.focus()}},{key:"openConnection",value:function(){var e=this;this.socket=io(),this.socket.on("welcome",(function(t){e.username=t.username,e.avatar=t.avatar})),this.socket.on("chatMessageFromServer",(function(t){e.displayMessageFromServer(t)}))}},{key:"displayMessageFromServer",value:function(e){this.chatLog.insertAdjacentHTML("beforeend",'\n\t\t\t\t<div class="chat-other">\n\t\t\t        <a href="#"><img class="avatar-tiny" src="'.concat(e.avatar,'"></a>\n\t\t\t        <div class="chat-message"><div class="chat-message-inner">\n\t\t\t          <a href="#"><strong>').concat(e.username,":</strong></a>\n\t\t\t          ").concat(e.message,"\n\t\t\t        </div></div>\n\t\t\t    </div>\n\t\t\t")),this.chatLog.scrollTop=this.chatLog.scrollHeight}},{key:"injectHTML",value:function(){this.chatWrapper.innerHTML='\n\t\t<div class="chat-title-bar">Chat <span class="chat-title-bar-close"><i class="fas fa-times-circle"></i></span></div>\n\t\t<div id="chat" class="chat-log"></div>\n\n\n\t\t<form id="chatForm" class="chat-form border-top">\n\t      <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">\n\t    </form>\n\t\t'}}])&&s(t.prototype,n),r&&s(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.allField=document.querySelectorAll(".form-style .form-control"),this.insertValidationElement(),this.username=document.querySelector("#firstname"),this.username.previousValue="",this.lastname=document.querySelector("#lastname"),this.lastname.previousValue="",this.email=document.querySelector("#email"),this.email.previousValue="",this.event()}var t,n,r;return t=e,(n=[{key:"event",value:function(){var e=this;this.username.addEventListener("keyup",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.lastname.addEventListener("keyup",(function(){e.isDifferent(e.lastname,e.lastnameHandler)})),this.email.addEventListener("keyup",(function(){e.isDifferent(e.email,e.emailHandler)}))}},{key:"isDifferent",value:function(e,t){e.previousValue!=e.value&&t.call(this),e.previousValue=e.value,console.log(e.previousValue)}},{key:"usernameHandler",value:function(){var e=this;this.username.errors=!1,this.usernameImmediately(),clearTimeout(this.username.timer),this.username.timer=setTimeout((function(){return e.usernameAfterDelay()}),800)}},{key:"usernameImmediately",value:function(){""==this.username.value||/^([a-zA-Z0-9]+)$/.test(this.username.value)||this.showValidationError(this.username,"Username can only contain letters and numbers"),this.username.value.length>30&&this.showValidationError(this.username,"Username cannot contain more than 30 characters"),this.username.errors||this.hideValidationError(this.username)}},{key:"hideValidationError",value:function(e){e.previousElementSibling.classList.remove("elementVisible")}},{key:"showValidationError",value:function(e,t){e.previousElementSibling.innerHTML=t,e.previousElementSibling.classList.add("elementVisible"),e.errors=!0}},{key:"usernameAfterDelay",value:function(){var e=this;""!=this.username.value&&this.username.value.length<3&&this.showValidationError(this.username,"Username must contain more than 3 characters"),this.username.errors||a.a.post("/isUsernameExist",{username:this.username.value}).then((function(t){t.data?(e.showValidationError(e.username,"Username has been taken"),e.username.isUnique=!1):e.username.isUnique=!0}))}},{key:"lastnameHandler",value:function(){var e=this;this.lastname.errors=!1,this.lastnameImmediately(),clearTimeout(this.lastname.timer),this.lastname.timer=setTimeout((function(){return e.lastnameAfterDelay()}),800)}},{key:"lastnameImmediately",value:function(){""==this.lastname.value||/^([a-zA-Z0-9]+)$/.test(this.lastname.value)||this.showValidationError(this.lastname,"Lastname can only contain letters and numbers"),this.lastname.value.length>30&&this.showValidationError(this.lastname,"Lastname cannot contain more than 30 characters"),this.lastname.errors||this.hideValidationError(this.lastname)}},{key:"lastnameAfterDelay",value:function(){var e=this;""!=this.lastname.value&&this.lastname.value.length<3&&this.showValidationError(this.lastname,"Lastname must contain more than 3 characters"),this.lastname.errors||a.a.post("/isLastnameExist",{lastname:this.lastname.value}).then((function(t){console.log(t.data),t.data?(e.showValidationError(e.lastname,"Lastname has been taken"),console.log("Lastname already exist"),e.lastname.isUnique=!1):(console.log("username do not exist yet"),e.lastname.isUnique=!0)}))}},{key:"emailHandler",value:function(){var e=this;this.email.errors=!1,clearTimeout(this.email.timer),this.email.timer=setTimeout((function(){return e.emailAfterDelay()}),800)}},{key:"emailAfterDelay",value:function(){var e=this;""==this.email.value||/^\S+@\S+$/.test(this.email.value)?this.hideValidationError(this.email):this.showValidationError(this.email,"Please enter valid email address"),this.email.errors||a.a.post("/isEmailExist",{email:this.email.value}).then((function(t){console.log(t.data),t.data?(e.showValidationError(e.email,"Email has been used by another user"),console.log("Email already exist"),e.email.isUnique=!1):(console.log("email do not exist yet"),e.email.isUnique=!0,e.hideValidationError(e.email))}))}},{key:"insertValidationElement",value:function(){this.allField.forEach((function(e){e.insertAdjacentHTML("beforebegin","<div class='alert alert-danger small elementHidden' style='margin-bottom: 0;padding: 8px 15px;'>Hello</div>")}))}}])&&u(t.prototype,n),r&&u(t,r),e}();document.querySelector("#register-form")&&new l,document.querySelector("#chat-wrapper")&&new c,new o}]);