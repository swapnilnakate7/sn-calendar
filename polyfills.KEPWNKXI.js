import{d as Sr,e as Zr}from"./chunk-JEK6FY6R.js";var lr=Sr(We=>{"use strict";var Ne=We&&We.__assign||function(){return Ne=Object.assign||function(ue){for(var _e,Te=1,Le=arguments.length;Te<Le;Te++){_e=arguments[Te];for(var be in _e)Object.prototype.hasOwnProperty.call(_e,be)&&(ue[be]=_e[be])}return ue},Ne.apply(this,arguments)};(function(ue){typeof define=="function"&&define.amd?define(ue):ue()})(function(){"use strict";(function(e){var t,i=e.performance;function a(h){i&&i.mark&&i.mark(h)}function s(h,r){i&&i.measure&&i.measure(h,r)}a("Zone");var f=e.__Zone_symbol_prefix||"__zone_symbol__";function d(h){return f+h}var E=e[d("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(E||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}var b=function(){function h(r,n){this._parent=r,this._name=n?n.name||"unnamed":"<root>",this._properties=n&&n.properties||{},this._zoneDelegate=new m(this,this._parent&&this._parent._zoneDelegate,n)}return h.assertZonePatched=function(){if(e.Promise!==X.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(h,"root",{get:function(){for(var r=t.current;r.parent;)r=r.parent;return r},enumerable:!1,configurable:!0}),Object.defineProperty(h,"current",{get:function(){return J.zone},enumerable:!1,configurable:!0}),Object.defineProperty(h,"currentTask",{get:function(){return ne},enumerable:!1,configurable:!0}),h.__load_patch=function(r,n,o){if(o===void 0&&(o=!1),X.hasOwnProperty(r)){if(!o&&E)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){var p="Zone:"+r;a(p),X[r]=n(e,t,ae),s(p,p)}},Object.defineProperty(h.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),h.prototype.get=function(r){var n=this.getZoneWith(r);if(n)return n._properties[r]},h.prototype.getZoneWith=function(r){for(var n=this;n;){if(n._properties.hasOwnProperty(r))return n;n=n._parent}return null},h.prototype.fork=function(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)},h.prototype.wrap=function(r,n){if(typeof r!="function")throw new Error("Expecting function got: "+r);var o=this._zoneDelegate.intercept(this,r,n),p=this;return function(){return p.runGuarded(o,this,arguments,n)}},h.prototype.run=function(r,n,o,p){J={parent:J,zone:this};try{return this._zoneDelegate.invoke(this,r,n,o,p)}finally{J=J.parent}},h.prototype.runGuarded=function(r,n,o,p){n===void 0&&(n=null),J={parent:J,zone:this};try{try{return this._zoneDelegate.invoke(this,r,n,o,p)}catch(z){if(this._zoneDelegate.handleError(this,z))throw z}}finally{J=J.parent}},h.prototype.runTask=function(r,n,o){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||re).name+"; Execution: "+this.name+")");if(!(r.state===V&&(r.type===S||r.type===M))){var p=r.state!=y;p&&r._transitionTo(y,G),r.runCount++;var z=ne;ne=r,J={parent:J,zone:this};try{r.type==M&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,n,o)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{r.state!==V&&r.state!==D&&(r.type==S||r.data&&r.data.isPeriodic?p&&r._transitionTo(G,y):(r.runCount=0,this._updateTaskCount(r,-1),p&&r._transitionTo(V,y,V))),J=J.parent,ne=z}}},h.prototype.scheduleTask=function(r){if(r.zone&&r.zone!==this)for(var n=this;n;){if(n===r.zone)throw Error("can not reschedule task to ".concat(this.name," which is descendants of the original zone ").concat(r.zone.name));n=n.parent}r._transitionTo(x,V);var o=[];r._zoneDelegates=o,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(p){throw r._transitionTo(D,x,V),this._zoneDelegate.handleError(this,p),p}return r._zoneDelegates===o&&this._updateTaskCount(r,1),r.state==x&&r._transitionTo(G,x),r},h.prototype.scheduleMicroTask=function(r,n,o,p){return this.scheduleTask(new P(R,r,n,o,p,void 0))},h.prototype.scheduleMacroTask=function(r,n,o,p,z){return this.scheduleTask(new P(M,r,n,o,p,z))},h.prototype.scheduleEventTask=function(r,n,o,p,z){return this.scheduleTask(new P(S,r,n,o,p,z))},h.prototype.cancelTask=function(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||re).name+"; Execution: "+this.name+")");if(!(r.state!==G&&r.state!==y)){r._transitionTo(W,G,y);try{this._zoneDelegate.cancelTask(this,r)}catch(n){throw r._transitionTo(D,W),this._zoneDelegate.handleError(this,n),n}return this._updateTaskCount(r,-1),r._transitionTo(V,W),r.runCount=0,r}},h.prototype._updateTaskCount=function(r,n){var o=r._zoneDelegates;n==-1&&(r._zoneDelegates=null);for(var p=0;p<o.length;p++)o[p]._updateTaskCount(r.type,n)},h}();t=b,function(){t.__symbol__=d}();var g={name:"",onHasTask:function(h,r,n,o){return h.hasTask(n,o)},onScheduleTask:function(h,r,n,o){return h.scheduleTask(n,o)},onInvokeTask:function(h,r,n,o,p,z){return h.invokeTask(n,o,p,z)},onCancelTask:function(h,r,n,o){return h.cancelTask(n,o)}},m=function(){function h(r,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=r,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var p=o&&o.onHasTask,z=n&&n._hasTaskZS;(p||z)&&(this._hasTaskZS=p?o:g,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=r,o.onScheduleTask||(this._scheduleTaskZS=g,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=g,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=g,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}return h.prototype.fork=function(r,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,n):new b(r,n)},h.prototype.intercept=function(r,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,n,o):n},h.prototype.invoke=function(r,n,o,p,z){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,n,o,p,z):n.apply(o,p)},h.prototype.handleError=function(r,n){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,n):!0},h.prototype.scheduleTask=function(r,n){var o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else if(n.type==R)A(n);else throw new Error("Task is missing scheduleFn.");return o},h.prototype.invokeTask=function(r,n,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,n,o,p):n.callback.apply(o,p)},h.prototype.cancelTask=function(r,n){var o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o},h.prototype.hasTask=function(r,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,n)}catch(o){this.handleError(r,o)}},h.prototype._updateTaskCount=function(r,n){var o=this._taskCounts,p=o[r],z=o[r]=p+n;if(z<0)throw new Error("More tasks executed then were scheduled.");if(p==0||z==0){var u={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:r};this.hasTask(this.zone,u)}},h}(),P=function(){function h(r,n,o,p,z,u){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=p,this.scheduleFn=z,this.cancelFn=u,!o)throw new Error("callback is not defined");this.callback=o;var v=this;r===S&&p&&p.useG?this.invoke=h.invokeTask:this.invoke=function(){return h.invokeTask.call(e,v,this,arguments)}}return h.invokeTask=function(r,n,o){r||(r=this),ce++;try{return r.runCount++,r.zone.runTask(r,n,o)}finally{ce==1&&T(),ce--}},Object.defineProperty(h.prototype,"zone",{get:function(){return this._zone},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),h.prototype.cancelScheduleRequest=function(){this._transitionTo(V,x)},h.prototype._transitionTo=function(r,n,o){if(this._state===n||this._state===o)this._state=r,r==V&&(this._zoneDelegates=null);else throw new Error("".concat(this.type," '").concat(this.source,"': can not transition to '").concat(r,"', expecting state '").concat(n,"'").concat(o?" or '"+o+"'":"",", was '").concat(this._state,"'."))},h.prototype.toString=function(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)},h.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},h}(),Z=d("setTimeout"),N=d("Promise"),F=d("then"),j=[],ie=!1,B;function Y(h){if(B||e[N]&&(B=e[N].resolve(0)),B){var r=B[F];r||(r=B.then),r.call(B,h)}else e[Z](h,0)}function A(h){ce===0&&j.length===0&&Y(T),h&&j.push(h)}function T(){if(!ie){for(ie=!0;j.length;){var h=j;j=[];for(var r=0;r<h.length;r++){var n=h[r];try{n.zone.runTask(n,null,null)}catch(o){ae.onUnhandledError(o)}}}ae.microtaskDrainDone(),ie=!1}}var re={name:"NO ZONE"},V="notScheduled",x="scheduling",G="scheduled",y="running",W="canceling",D="unknown",R="microTask",M="macroTask",S="eventTask",X={},ae={symbol:d,currentZoneFrame:function(){return J},onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:A,showUncaughtError:function(){return!b[d("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:q,patchMethod:function(){return q},bindArguments:function(){return[]},patchThen:function(){return q},patchMacroTask:function(){return q},patchEventPrototype:function(){return q},isIEOrEdge:function(){return!1},getGlobalObjects:function(){},ObjectDefineProperty:function(){return q},ObjectGetOwnPropertyDescriptor:function(){},ObjectCreate:function(){},ArraySlice:function(){return[]},patchClass:function(){return q},wrapWithCurrentZone:function(){return q},filterProperties:function(){return[]},attachOriginToPatched:function(){return q},_redefineProperty:function(){return q},patchCallbacks:function(){return q},nativeScheduleMicroTask:Y},J={parent:null,zone:new b(null,null)},ne=null,ce=0;function q(){}return s("Zone","Zone"),e.Zone=b})(typeof window<"u"&&window||typeof self<"u"&&self||global);var ue=Object.getOwnPropertyDescriptor,_e=Object.defineProperty,Te=Object.getPrototypeOf,Le=Object.create,be=Array.prototype.slice,Me="addEventListener",Ae="removeEventListener",je=Zone.__symbol__(Me),He=Zone.__symbol__(Ae),fe="true",le="false",Pe=Zone.__symbol__("");function Ge(e,t){return Zone.current.wrap(e,t)}function Ve(e,t,i,a,s){return Zone.current.scheduleMacroTask(e,t,i,a,s)}var H=Zone.__symbol__,Se=typeof window<"u",ye=Se?window:void 0,$=Se&&ye||typeof self=="object"&&self||global,hr="removeAttribute";function Fe(e,t){for(var i=e.length-1;i>=0;i--)typeof e[i]=="function"&&(e[i]=Ge(e[i],t+"_"+i));return e}function vr(e,t){for(var i=e.constructor.name,a=function(f){var d=t[f],E=e[d];if(E){var b=ue(e,d);if(!Xe(b))return"continue";e[d]=function(g){var m=function(){return g.apply(this,Fe(arguments,i+"."+d))};return ve(m,g),m}(E)}},s=0;s<t.length;s++)a(s)}function Xe(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var Ye=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ze=!("nw"in $)&&typeof $.process<"u"&&{}.toString.call($.process)==="[object process]",Be=!Ze&&!Ye&&!!(Se&&ye.HTMLElement),qe=typeof $.process<"u"&&{}.toString.call($.process)==="[object process]"&&!Ye&&!!(Se&&ye.HTMLElement),Oe={},Je=function(e){if(e=e||$.event,!!e){var t=Oe[e.type];t||(t=Oe[e.type]=H("ON_PROPERTY"+e.type));var i=this||e.target||$,a=i[t],s;if(Be&&i===ye&&e.type==="error"){var f=e;s=a&&a.call(this,f.message,f.filename,f.lineno,f.colno,f.error),s===!0&&e.preventDefault()}else s=a&&a.apply(this,arguments),s!=null&&!s&&e.preventDefault();return s}};function Ke(e,t,i){var a=ue(e,t);if(!a&&i){var s=ue(i,t);s&&(a={enumerable:!0,configurable:!0})}if(!(!a||!a.configurable)){var f=H("on"+t+"patched");if(!(e.hasOwnProperty(f)&&e[f])){delete a.writable,delete a.value;var d=a.get,E=a.set,b=t.slice(2),g=Oe[b];g||(g=Oe[b]=H("ON_PROPERTY"+b)),a.set=function(m){var P=this;if(!P&&e===$&&(P=$),!!P){var Z=P[g];typeof Z=="function"&&P.removeEventListener(b,Je),E&&E.call(P,null),P[g]=m,typeof m=="function"&&P.addEventListener(b,Je,!1)}},a.get=function(){var m=this;if(!m&&e===$&&(m=$),!m)return null;var P=m[g];if(P)return P;if(d){var Z=d.call(this);if(Z)return a.set.call(this,Z),typeof m[hr]=="function"&&m.removeAttribute(t),Z}return null},_e(e,t,a),e[f]=!0}}}function Qe(e,t,i){if(t)for(var a=0;a<t.length;a++)Ke(e,"on"+t[a],i);else{var s=[];for(var f in e)f.slice(0,2)=="on"&&s.push(f);for(var d=0;d<s.length;d++)Ke(e,s[d],i)}}var se=H("originalInstance");function we(e){var t=$[e];if(t){$[H(e)]=t,$[e]=function(){var s=Fe(arguments,e);switch(s.length){case 0:this[se]=new t;break;case 1:this[se]=new t(s[0]);break;case 2:this[se]=new t(s[0],s[1]);break;case 3:this[se]=new t(s[0],s[1],s[2]);break;case 4:this[se]=new t(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},ve($[e],t);var i=new t(function(){}),a;for(a in i)e==="XMLHttpRequest"&&a==="responseBlob"||function(s){typeof i[s]=="function"?$[e].prototype[s]=function(){return this[se][s].apply(this[se],arguments)}:_e($[e].prototype,s,{set:function(f){typeof f=="function"?(this[se][s]=Ge(f,e+"."+s),ve(this[se][s],f)):this[se][s]=f},get:function(){return this[se][s]}})}(a);for(a in t)a!=="prototype"&&t.hasOwnProperty(a)&&($[e][a]=t[a])}}function he(e,t,i){for(var a=e;a&&!a.hasOwnProperty(t);)a=Te(a);!a&&e[t]&&(a=e);var s=H(t),f=null;if(a&&(!(f=a[s])||!a.hasOwnProperty(s))){f=a[s]=a[t];var d=a&&ue(a,t);if(Xe(d)){var E=i(f,s,t);a[t]=function(){return E(this,arguments)},ve(a[t],f)}}return f}function dr(e,t,i){var a=null;function s(f){var d=f.data;return d.args[d.cbIdx]=function(){f.invoke.apply(this,arguments)},a.apply(d.target,d.args),f}a=he(e,t,function(f){return function(d,E){var b=i(d,E);return b.cbIdx>=0&&typeof E[b.cbIdx]=="function"?Ve(b.name,E[b.cbIdx],b,s):f.apply(d,E)}})}function ve(e,t){e[H("OriginalDelegate")]=t}var $e=!1,Ue=!1;function _r(){try{var e=ye.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function Er(){if($e)return Ue;$e=!0;try{var e=ye.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ue=!0)}catch{}return Ue}Zone.__load_patch("ZoneAwarePromise",function(e,t,i){var a=Object.getOwnPropertyDescriptor,s=Object.defineProperty;function f(u){if(u&&u.toString===Object.prototype.toString){var v=u.constructor&&u.constructor.name;return(v||"")+": "+JSON.stringify(u)}return u?u.toString():Object.prototype.toString.call(u)}var d=i.symbol,E=[],b=e[d("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]===!0,g=d("Promise"),m=d("then"),P="__creationTrace__";i.onUnhandledError=function(u){if(i.showUncaughtError()){var v=u&&u.rejection;v?console.error("Unhandled Promise rejection:",v instanceof Error?v.message:v,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",v,v instanceof Error?v.stack:void 0):console.error(u)}},i.microtaskDrainDone=function(){for(var u=function(){var v=E.shift();try{v.zone.runGuarded(function(){throw v.throwOriginal?v.rejection:v})}catch(l){N(l)}};E.length;)u()};var Z=d("unhandledPromiseRejectionHandler");function N(u){i.onUnhandledError(u);try{var v=t[Z];typeof v=="function"&&v.call(this,u)}catch{}}function F(u){return u&&u.then}function j(u){return u}function ie(u){return r.reject(u)}var B=d("state"),Y=d("value"),A=d("finally"),T=d("parentPromiseValue"),re=d("parentPromiseState"),V="Promise.then",x=null,G=!0,y=!1,W=0;function D(u,v){return function(l){try{X(u,v,l)}catch(c){X(u,!1,c)}}}var R=function(){var u=!1;return function(l){return function(){u||(u=!0,l.apply(null,arguments))}}},M="Promise resolved with itself",S=d("currentTaskTrace");function X(u,v,l){var c=R();if(u===l)throw new TypeError(M);if(u[B]===x){var _=null;try{(typeof l=="object"||typeof l=="function")&&(_=l&&l.then)}catch(I){return c(function(){X(u,!1,I)})(),u}if(v!==y&&l instanceof r&&l.hasOwnProperty(B)&&l.hasOwnProperty(Y)&&l[B]!==x)J(l),X(u,l[B],l[Y]);else if(v!==y&&typeof _=="function")try{_.call(l,c(D(u,v)),c(D(u,!1)))}catch(I){c(function(){X(u,!1,I)})()}else{u[B]=v;var w=u[Y];if(u[Y]=l,u[A]===A&&v===G&&(u[B]=u[re],u[Y]=u[T]),v===y&&l instanceof Error){var k=t.currentTask&&t.currentTask.data&&t.currentTask.data[P];k&&s(l,S,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(var O=0;O<w.length;)ne(u,w[O++],w[O++],w[O++],w[O++]);if(w.length==0&&v==y){u[B]=W;var C=l;try{throw new Error("Uncaught (in promise): "+f(l)+(l&&l.stack?`
`+l.stack:""))}catch(I){C=I}b&&(C.throwOriginal=!0),C.rejection=l,C.promise=u,C.zone=t.current,C.task=t.currentTask,E.push(C),i.scheduleMicroTask()}}}return u}var ae=d("rejectionHandledHandler");function J(u){if(u[B]===W){try{var v=t[ae];v&&typeof v=="function"&&v.call(this,{rejection:u[Y],promise:u})}catch{}u[B]=y;for(var l=0;l<E.length;l++)u===E[l].promise&&E.splice(l,1)}}function ne(u,v,l,c,_){J(u);var w=u[B],k=w?typeof c=="function"?c:j:typeof _=="function"?_:ie;v.scheduleMicroTask(V,function(){try{var O=u[Y],C=!!l&&A===l[A];C&&(l[T]=O,l[re]=w);var I=v.run(k,void 0,C&&k!==ie&&k!==j?[]:[O]);X(l,!0,I)}catch(L){X(l,!1,L)}},l)}var ce="function ZoneAwarePromise() { [native code] }",q=function(){},h=e.AggregateError,r=function(){function u(v){var l=this;if(!(l instanceof u))throw new Error("Must be an instanceof Promise.");l[B]=x,l[Y]=[];try{var c=R();v&&v(c(D(l,G)),c(D(l,y)))}catch(_){X(l,!1,_)}}return u.toString=function(){return ce},u.resolve=function(v){return X(new this(null),G,v)},u.reject=function(v){return X(new this(null),y,v)},u.any=function(v){if(!v||typeof v[Symbol.iterator]!="function")return Promise.reject(new h([],"All promises were rejected"));var l=[],c=0;try{for(var _=0,w=v;_<w.length;_++){var k=w[_];c++,l.push(u.resolve(k))}}catch{return Promise.reject(new h([],"All promises were rejected"))}if(c===0)return Promise.reject(new h([],"All promises were rejected"));var O=!1,C=[];return new u(function(I,L){for(var U=0;U<l.length;U++)l[U].then(function(te){O||(O=!0,I(te))},function(te){C.push(te),c--,c===0&&(O=!0,L(new h(C,"All promises were rejected")))})})},u.race=function(v){var l,c,_=new this(function(L,U){l=L,c=U});function w(L){l(L)}function k(L){c(L)}for(var O=0,C=v;O<C.length;O++){var I=C[O];F(I)||(I=this.resolve(I)),I.then(w,k)}return _},u.all=function(v){return u.allWithCallback(v)},u.allSettled=function(v){var l=this&&this.prototype instanceof u?this:u;return l.allWithCallback(v,{thenCallback:function(c){return{status:"fulfilled",value:c}},errorCallback:function(c){return{status:"rejected",reason:c}}})},u.allWithCallback=function(v,l){for(var c,_,w=new this(function(Q,ee){c=Q,_=ee}),k=2,O=0,C=[],I=function(Q){F(Q)||(Q=L.resolve(Q));var ee=O;try{Q.then(function(K){C[ee]=l?l.thenCallback(K):K,k--,k===0&&c(C)},function(K){l?(C[ee]=l.errorCallback(K),k--,k===0&&c(C)):_(K)})}catch(K){_(K)}k++,O++},L=this,U=0,te=v;U<te.length;U++){var de=te[U];I(de)}return k-=2,k===0&&c(C),w},Object.defineProperty(u.prototype,Symbol.toStringTag,{get:function(){return"Promise"},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,Symbol.species,{get:function(){return u},enumerable:!1,configurable:!0}),u.prototype.then=function(v,l){var c,_=(c=this.constructor)===null||c===void 0?void 0:c[Symbol.species];(!_||typeof _!="function")&&(_=this.constructor||u);var w=new _(q),k=t.current;return this[B]==x?this[Y].push(k,w,v,l):ne(this,k,w,v,l),w},u.prototype.catch=function(v){return this.then(null,v)},u.prototype.finally=function(v){var l,c=(l=this.constructor)===null||l===void 0?void 0:l[Symbol.species];(!c||typeof c!="function")&&(c=u);var _=new c(q);_[A]=A;var w=t.current;return this[B]==x?this[Y].push(w,_,v,v):ne(this,w,_,v,v),_},u}();r.resolve=r.resolve,r.reject=r.reject,r.race=r.race,r.all=r.all;var n=e[g]=e.Promise;e.Promise=r;var o=d("thenPatched");function p(u){var v=u.prototype,l=a(v,"then");if(!(l&&(l.writable===!1||!l.configurable))){var c=v.then;v[m]=c,u.prototype.then=function(_,w){var k=this,O=new r(function(C,I){c.call(k,C,I)});return O.then(_,w)},u[o]=!0}}i.patchThen=p;function z(u){return function(v,l){var c=u.apply(v,l);if(c instanceof r)return c;var _=c.constructor;return _[o]||p(_),c}}return n&&(p(n),he(e,"fetch",function(u){return z(u)})),Promise[t.__symbol__("uncaughtPromiseErrors")]=E,r}),Zone.__load_patch("toString",function(e){var t=Function.prototype.toString,i=H("OriginalDelegate"),a=H("Promise"),s=H("Error"),f=function(){if(typeof this=="function"){var g=this[i];if(g)return typeof g=="function"?t.call(g):Object.prototype.toString.call(g);if(this===Promise){var m=e[a];if(m)return t.call(m)}if(this===Error){var P=e[s];if(P)return t.call(P)}}return t.call(this)};f[i]=t,Function.prototype.toString=f;var d=Object.prototype.toString,E="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?E:d.call(this)}});var pe=!1;if(typeof window<"u")try{var Ce=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",Ce,Ce),window.removeEventListener("test",Ce,Ce)}catch{pe=!1}var Tr={useG:!0},oe={},er={},rr=new RegExp("^"+Pe+"(\\w+)(true|false)$"),tr=H("propagationStopped");function nr(e,t){var i=(t?t(e):e)+le,a=(t?t(e):e)+fe,s=Pe+i,f=Pe+a;oe[e]={},oe[e][le]=s,oe[e][fe]=f}function yr(e,t,i,a){var s=a&&a.add||Me,f=a&&a.rm||Ae,d=a&&a.listeners||"eventListeners",E=a&&a.rmAll||"removeAllListeners",b=H(s),g="."+s+":",m="prependListener",P="."+m+":",Z=function(A,T,re){if(!A.isRemoved){var V=A.callback;typeof V=="object"&&V.handleEvent&&(A.callback=function(W){return V.handleEvent(W)},A.originalDelegate=V);var x;try{A.invoke(A,T,[re])}catch(W){x=W}var G=A.options;if(G&&typeof G=="object"&&G.once){var y=A.originalDelegate?A.originalDelegate:A.callback;T[f].call(T,re.type,y,G)}return x}};function N(A,T,re){if(T=T||e.event,!!T){var V=A||T.target||e,x=V[oe[T.type][re?fe:le]];if(x){var G=[];if(x.length===1){var y=Z(x[0],V,T);y&&G.push(y)}else for(var W=x.slice(),D=0;D<W.length&&!(T&&T[tr]===!0);D++){var y=Z(W[D],V,T);y&&G.push(y)}if(G.length===1)throw G[0];for(var R=function(M){var S=G[M];t.nativeScheduleMicroTask(function(){throw S})},D=0;D<G.length;D++)R(D)}}}var F=function(A){return N(this,A,!1)},j=function(A){return N(this,A,!0)};function ie(A,T){if(!A)return!1;var re=!0;T&&T.useG!==void 0&&(re=T.useG);var V=T&&T.vh,x=!0;T&&T.chkDup!==void 0&&(x=T.chkDup);var G=!1;T&&T.rt!==void 0&&(G=T.rt);for(var y=A;y&&!y.hasOwnProperty(s);)y=Te(y);if(!y&&A[s]&&(y=A),!y||y[b])return!1;var W=T&&T.eventNameToString,D={},R=y[b]=y[s],M=y[H(f)]=y[f],S=y[H(d)]=y[d],X=y[H(E)]=y[E],ae;T&&T.prepend&&(ae=y[H(T.prepend)]=y[T.prepend]);function J(c,_){return!pe&&typeof c=="object"&&c?!!c.capture:!pe||!_?c:typeof c=="boolean"?{capture:c,passive:!0}:c?typeof c=="object"&&c.passive!==!1?Ne(Ne({},c),{passive:!0}):c:{passive:!0}}var ne=function(c){if(!D.isExisting)return R.call(D.target,D.eventName,D.capture?j:F,D.options)},ce=function(c){if(!c.isRemoved){var _=oe[c.eventName],w=void 0;_&&(w=_[c.capture?fe:le]);var k=w&&c.target[w];if(k)for(var O=0;O<k.length;O++){var C=k[O];if(C===c){k.splice(O,1),c.isRemoved=!0,k.length===0&&(c.allRemoved=!0,c.target[w]=null);break}}}if(c.allRemoved)return M.call(c.target,c.eventName,c.capture?j:F,c.options)},q=function(c){return R.call(D.target,D.eventName,c.invoke,D.options)},h=function(c){return ae.call(D.target,D.eventName,c.invoke,D.options)},r=function(c){return M.call(c.target,c.eventName,c.invoke,c.options)},n=re?ne:q,o=re?ce:r,p=function(c,_){var w=typeof _;return w==="function"&&c.callback===_||w==="object"&&c.originalDelegate===_},z=T&&T.diff?T.diff:p,u=Zone[H("UNPATCHED_EVENTS")],v=e[H("PASSIVE_EVENTS")],l=function(c,_,w,k,O,C){return O===void 0&&(O=!1),C===void 0&&(C=!1),function(){var I=this||e,L=arguments[0];T&&T.transferEventName&&(L=T.transferEventName(L));var U=arguments[1];if(!U)return c.apply(this,arguments);if(Ze&&L==="uncaughtException")return c.apply(this,arguments);var te=!1;if(typeof U!="function"){if(!U.handleEvent)return c.apply(this,arguments);te=!0}if(!(V&&!V(c,U,I,arguments))){var de=pe&&!!v&&v.indexOf(L)!==-1,Q=J(arguments[2],de);if(u){for(var ee=0;ee<u.length;ee++)if(L===u[ee])return de?c.call(I,L,U,Q):c.apply(this,arguments)}var K=Q?typeof Q=="boolean"?!0:Q.capture:!1,me=Q&&typeof Q=="object"?Q.once:!1,Rr=Zone.current,ze=oe[L];ze||(nr(L,W),ze=oe[L]);var ur=ze[K?fe:le],ke=I[ur],sr=!1;if(ke){if(sr=!0,x){for(var ee=0;ee<ke.length;ee++)if(z(ke[ee],U))return}}else ke=I[ur]=[];var Ie,cr=I.constructor.name,fr=er[cr];fr&&(Ie=fr[L]),Ie||(Ie=cr+_+(W?W(L):L)),D.options=Q,me&&(D.options.once=!1),D.target=I,D.capture=K,D.eventName=L,D.isExisting=sr;var Re=re?Tr:void 0;Re&&(Re.taskData=D);var Ee=Rr.scheduleEventTask(Ie,U,Re,w,k);if(D.target=null,Re&&(Re.taskData=null),me&&(Q.once=!0),!pe&&typeof Ee.options=="boolean"||(Ee.options=Q),Ee.target=I,Ee.capture=K,Ee.eventName=L,te&&(Ee.originalDelegate=U),C?ke.unshift(Ee):ke.push(Ee),O)return I}}};return y[s]=l(R,g,n,o,G),ae&&(y[m]=l(ae,P,h,o,G,!0)),y[f]=function(){var c=this||e,_=arguments[0];T&&T.transferEventName&&(_=T.transferEventName(_));var w=arguments[2],k=w?typeof w=="boolean"?!0:w.capture:!1,O=arguments[1];if(!O)return M.apply(this,arguments);if(!(V&&!V(M,O,c,arguments))){var C=oe[_],I;C&&(I=C[k?fe:le]);var L=I&&c[I];if(L)for(var U=0;U<L.length;U++){var te=L[U];if(z(te,O)){if(L.splice(U,1),te.isRemoved=!0,L.length===0&&(te.allRemoved=!0,c[I]=null,typeof _=="string")){var de=Pe+"ON_PROPERTY"+_;c[de]=null}return te.zone.cancelTask(te),G?c:void 0}}return M.apply(this,arguments)}},y[d]=function(){var c=this||e,_=arguments[0];T&&T.transferEventName&&(_=T.transferEventName(_));for(var w=[],k=or(c,W?W(_):_),O=0;O<k.length;O++){var C=k[O],I=C.originalDelegate?C.originalDelegate:C.callback;w.push(I)}return w},y[E]=function(){var c=this||e,_=arguments[0];if(_){T&&T.transferEventName&&(_=T.transferEventName(_));var L=oe[_];if(L){var U=L[le],te=L[fe],de=c[U],Q=c[te];if(de)for(var ee=de.slice(),k=0;k<ee.length;k++){var K=ee[k],me=K.originalDelegate?K.originalDelegate:K.callback;this[f].call(this,_,me,K.options)}if(Q)for(var ee=Q.slice(),k=0;k<ee.length;k++){var K=ee[k],me=K.originalDelegate?K.originalDelegate:K.callback;this[f].call(this,_,me,K.options)}}}else{for(var w=Object.keys(c),k=0;k<w.length;k++){var O=w[k],C=rr.exec(O),I=C&&C[1];I&&I!=="removeListener"&&this[E].call(this,I)}this[E].call(this,"removeListener")}if(G)return this},ve(y[s],R),ve(y[f],M),X&&ve(y[E],X),S&&ve(y[d],S),!0}for(var B=[],Y=0;Y<i.length;Y++)B[Y]=ie(i[Y],a);return B}function or(e,t){if(!t){var i=[];for(var a in e){var s=rr.exec(a),f=s&&s[1];if(f&&(!t||f===t)){var d=e[a];if(d)for(var E=0;E<d.length;E++)i.push(d[E])}}return i}var b=oe[t];b||(nr(t),b=oe[t]);var g=e[b[le]],m=e[b[fe]];return g?m?g.concat(m):g.slice():m?m.slice():[]}function pr(e,t){var i=e.Event;i&&i.prototype&&t.patchMethod(i.prototype,"stopImmediatePropagation",function(a){return function(s,f){s[tr]=!0,a&&a.apply(s,f)}})}function gr(e,t,i,a,s){var f=Zone.__symbol__(a);if(!t[f]){var d=t[f]=t[a];t[a]=function(E,b,g){return b&&b.prototype&&s.forEach(function(m){var P="".concat(i,".").concat(a,"::")+m,Z=b.prototype;try{if(Z.hasOwnProperty(m)){var N=e.ObjectGetOwnPropertyDescriptor(Z,m);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,P),e._redefineProperty(b.prototype,m,N)):Z[m]&&(Z[m]=e.wrapWithCurrentZone(Z[m],P))}else Z[m]&&(Z[m]=e.wrapWithCurrentZone(Z[m],P))}catch{}}),d.call(t,E,b,g)},e.attachOriginToPatched(t[a],d)}}function ir(e,t,i){if(!i||i.length===0)return t;var a=i.filter(function(f){return f.target===e});if(!a||a.length===0)return t;var s=a[0].ignoreProperties;return t.filter(function(f){return s.indexOf(f)===-1})}function ar(e,t,i,a){if(e){var s=ir(e,t,i);Qe(e,s,a)}}function xe(e){return Object.getOwnPropertyNames(e).filter(function(t){return t.startsWith("on")&&t.length>2}).map(function(t){return t.substring(2)})}function mr(e,t){if(!(Ze&&!qe)&&!Zone[e.symbol("patchEvents")]){var i=t.__Zone_ignore_on_properties,a=[];if(Be){var s=window;a=a.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);var f=_r()?[{target:s,ignoreProperties:["error"]}]:[];ar(s,xe(s),i&&i.concat(f),Te(s))}a=a.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(var d=0;d<a.length;d++){var E=t[a[d]];E&&E.prototype&&ar(E.prototype,xe(E.prototype),i)}}}Zone.__load_patch("util",function(e,t,i){var a=xe(e);i.patchOnProperties=Qe,i.patchMethod=he,i.bindArguments=Fe,i.patchMacroTask=dr;var s=t.__symbol__("BLACK_LISTED_EVENTS"),f=t.__symbol__("UNPATCHED_EVENTS");e[f]&&(e[s]=e[f]),e[s]&&(t[s]=t[f]=e[s]),i.patchEventPrototype=pr,i.patchEventTarget=yr,i.isIEOrEdge=Er,i.ObjectDefineProperty=_e,i.ObjectGetOwnPropertyDescriptor=ue,i.ObjectCreate=Le,i.ArraySlice=be,i.patchClass=we,i.wrapWithCurrentZone=Ge,i.filterProperties=ir,i.attachOriginToPatched=ve,i._redefineProperty=Object.defineProperty,i.patchCallbacks=gr,i.getGlobalObjects=function(){return{globalSources:er,zoneSymbolEventNames:oe,eventNames:a,isBrowser:Be,isMix:qe,isNode:Ze,TRUE_STR:fe,FALSE_STR:le,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Ae}}});function kr(e,t){t.patchMethod(e,"queueMicrotask",function(i){return function(a,s){Zone.current.scheduleMicroTask("queueMicrotask",s[0])}})}var De=H("zoneTask");function ge(e,t,i,a){var s=null,f=null;t+=a,i+=a;var d={};function E(g){var m=g.data;return m.args[0]=function(){return g.invoke.apply(this,arguments)},m.handleId=s.apply(e,m.args),g}function b(g){return f.call(e,g.data.handleId)}s=he(e,t,function(g){return function(m,P){if(typeof P[0]=="function"){var Z={isPeriodic:a==="Interval",delay:a==="Timeout"||a==="Interval"?P[1]||0:void 0,args:P},N=P[0];P[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||(typeof Z.handleId=="number"?delete d[Z.handleId]:Z.handleId&&(Z.handleId[De]=null))}};var F=Ve(t,P[0],Z,E,b);if(!F)return F;var j=F.data.handleId;return typeof j=="number"?d[j]=F:j&&(j[De]=F),j&&j.ref&&j.unref&&typeof j.ref=="function"&&typeof j.unref=="function"&&(F.ref=j.ref.bind(j),F.unref=j.unref.bind(j)),typeof j=="number"||j?j:F}else return g.apply(e,P)}}),f=he(e,i,function(g){return function(m,P){var Z=P[0],N;typeof Z=="number"?N=d[Z]:(N=Z&&Z[De],N||(N=Z)),N&&typeof N.type=="string"?N.state!=="notScheduled"&&(N.cancelFn&&N.data.isPeriodic||N.runCount===0)&&(typeof Z=="number"?delete d[Z]:Z&&(Z[De]=null),N.zone.cancelTask(N)):g.apply(e,P)}})}function br(e,t){var i=t.getGlobalObjects(),a=i.isBrowser,s=i.isMix;if(!(!a&&!s||!e.customElements||!("customElements"in e))){var f=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",f)}}function Pr(e,t){if(!Zone[t.symbol("patchEventTarget")]){for(var i=t.getGlobalObjects(),a=i.eventNames,s=i.zoneSymbolEventNames,f=i.TRUE_STR,d=i.FALSE_STR,E=i.ZONE_SYMBOL_PREFIX,b=0;b<a.length;b++){var g=a[b],m=g+d,P=g+f,Z=E+m,N=E+P;s[g]={},s[g][d]=Z,s[g][f]=N}var F=e.EventTarget;if(!(!F||!F.prototype))return t.patchEventTarget(e,t,[F&&F.prototype]),!0}}function wr(e,t){t.patchEventPrototype(e,t)}Zone.__load_patch("legacy",function(e){var t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("timers",function(e){var t="set",i="clear";ge(e,t,i,"Timeout"),ge(e,t,i,"Interval"),ge(e,t,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",function(e){ge(e,"request","cancel","AnimationFrame"),ge(e,"mozRequest","mozCancel","AnimationFrame"),ge(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(e,t){for(var i=["alert","prompt","confirm"],a=0;a<i.length;a++){var s=i[a];he(e,s,function(f,d,E){return function(b,g){return t.current.run(f,e,g,E)}})}}),Zone.__load_patch("EventTarget",function(e,t,i){wr(e,i),Pr(e,i);var a=e.XMLHttpRequestEventTarget;a&&a.prototype&&i.patchEventTarget(e,i,[a.prototype])}),Zone.__load_patch("MutationObserver",function(e,t,i){we("MutationObserver"),we("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",function(e,t,i){we("IntersectionObserver")}),Zone.__load_patch("FileReader",function(e,t,i){we("FileReader")}),Zone.__load_patch("on_property",function(e,t,i){mr(i,e)}),Zone.__load_patch("customElements",function(e,t,i){br(e,i)}),Zone.__load_patch("XHR",function(e,t){b(e);var i=H("xhrTask"),a=H("xhrSync"),s=H("xhrListener"),f=H("xhrScheduled"),d=H("xhrURL"),E=H("xhrErrorBeforeScheduled");function b(g){var m=g.XMLHttpRequest;if(!m)return;var P=m.prototype;function Z(R){return R[i]}var N=P[je],F=P[He];if(!N){var j=g.XMLHttpRequestEventTarget;if(j){var ie=j.prototype;N=ie[je],F=ie[He]}}var B="readystatechange",Y="scheduled";function A(R){var M=R.data,S=M.target;S[f]=!1,S[E]=!1;var X=S[s];N||(N=S[je],F=S[He]),X&&F.call(S,B,X);var ae=S[s]=function(){if(S.readyState===S.DONE)if(!M.aborted&&S[f]&&R.state===Y){var ne=S[t.__symbol__("loadfalse")];if(S.status!==0&&ne&&ne.length>0){var ce=R.invoke;R.invoke=function(){for(var q=S[t.__symbol__("loadfalse")],h=0;h<q.length;h++)q[h]===R&&q.splice(h,1);!M.aborted&&R.state===Y&&ce.call(R)},ne.push(R)}else R.invoke()}else!M.aborted&&S[f]===!1&&(S[E]=!0)};N.call(S,B,ae);var J=S[i];return J||(S[i]=R),W.apply(S,M.args),S[f]=!0,R}function T(){}function re(R){var M=R.data;return M.aborted=!0,D.apply(M.target,M.args)}var V=he(P,"open",function(){return function(R,M){return R[a]=M[2]==!1,R[d]=M[1],V.apply(R,M)}}),x="XMLHttpRequest.send",G=H("fetchTaskAborting"),y=H("fetchTaskScheduling"),W=he(P,"send",function(){return function(R,M){if(t.current[y]===!0||R[a])return W.apply(R,M);var S={target:R,url:R[d],isPeriodic:!1,args:M,aborted:!1},X=Ve(x,T,S,A,re);R&&R[E]===!0&&!S.aborted&&X.state===Y&&X.invoke()}}),D=he(P,"abort",function(){return function(R,M){var S=Z(R);if(S&&typeof S.type=="string"){if(S.cancelFn==null||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(t.current[G]===!0)return D.apply(R,M)}})}}),Zone.__load_patch("geolocation",function(e){e.navigator&&e.navigator.geolocation&&vr(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(e,t){function i(a){return function(s){var f=or(e,a);f.forEach(function(d){var E=e.PromiseRejectionEvent;if(E){var b=new E(a,{promise:s.promise,reason:s.rejection});d.invoke(b)}})}}e.PromiseRejectionEvent&&(t[H("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),t[H("rejectionHandledHandler")]=i("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",function(e,t,i){kr(e,i)})})});var Cr=Zr(lr());
