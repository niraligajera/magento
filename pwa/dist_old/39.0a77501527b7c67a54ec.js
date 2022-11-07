/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{NYgU:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return M})
var r,a,o=n("J4zp"),i=n.n(o),c=n("q1tI"),s=n.n(c),u=n("dDsW"),l=n("kriW"),f=n("8UhI"),d=n("J3e4"),h=n("yXPU"),m=n.n(h),p=n("+TN3"),y=n("pZLH"),g=n("y1Xp"),v=n("FITH"),b=n("VkAN"),w=n.n(b),x=n("UYTu"),E=Object(x.a)(r||(r=w()(["\n    mutation SetNewsletterSubscription($isSubscribed: Boolean!) {\n        updateCustomer(input: { is_subscribed: $isSubscribed }) {\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            customer {\n                is_subscribed\n            }\n        }\n    }\n"]))),L={getCustomerSubscriptionQuery:Object(x.a)(a||(a=w()(["\n    query GetCustomerSubscription {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        customer {\n            is_subscribed\n        }\n    }\n"]))),setNewsletterSubscriptionMutation:E}
function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e}
var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag"
function define(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function define(e,t,n){return e[t]=n}}function wrap(e,t,n,r){var a=t&&t.prototype instanceof Generator?t:Generator,o=Object.create(a.prototype),i=new Context(r||[])
return o._invoke=function(e,t,n){var r="suspendedStart"
return function(a,o){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===a)throw o
return doneResult()}for(n.method=a,n.arg=o;;){var i=n.delegate
if(i){var s=maybeInvokeDelegate(i,n)
if(s){if(s===c)continue
return s}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var u=tryCatch(e,t,n)
if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===c)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function tryCatch(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap
var c={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var s={}
define(s,a,function(){return this})
var u=Object.getPrototypeOf,l=u&&u(u(values([])))
l&&l!==t&&n.call(l,a)&&(s=l)
var f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){define(e,t,function(e){return this._invoke(t,e)})})}function AsyncIterator(e,t){var r
this._invoke=function(a,o){function callInvokeWithMethodAndArg(){return new t(function(r,i){!function invoke(r,a,o,i){var c=tryCatch(e[r],e,a)
if("throw"!==c.type){var s=c.arg,u=s.value
return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){invoke("next",e,o,i)},function(e){invoke("throw",e,o,i)}):t.resolve(u).then(function(e){s.value=e,o(s)},function(e){return invoke("throw",e,o,i)})}i(c.arg)}(a,o,r,i)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(e,t){var n=e.iterator[t.method]
if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,maybeInvokeDelegate(e,t),"throw"===t.method))return c
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=tryCatch(n,e.iterator,t.arg)
if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c
var a=r.arg
return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function pushTryEntry(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[a]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var r=-1,o=function next(){for(;++r<e.length;)if(n.call(e,r))return next.value=e[r],next.done=!1,next
return next.value=void 0,next.done=!0,next}
return o.next=o}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(f,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,i,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,o,function(){return this}),e.AsyncIterator=AsyncIterator,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise)
var i=new AsyncIterator(wrap(t,n,r,a),o)
return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},defineIteratorMethods(f),define(f,i,"Generator"),define(f,a,function(){return this}),define(f,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function next(){for(;t.length;){var n=t.pop()
if(n in e)return next.value=n,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function stop(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e
var t=this
function handle(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion
if("root"===a.tryLoc)return handle("end")
if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc")
if(i&&c){if(this.prev<a.catchLoc)return handle(a.catchLoc,!0)
if(this.prev<a.finallyLoc)return handle(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return handle(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally")
if(this.prev<a.finallyLoc)return handle(a.finallyLoc)}}}},abrupt:function abrupt(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r]
if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a
break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null)
var i=o?o.completion:{}
return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(i)},complete:function complete(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function finish(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),resetTryEntry(n),c}},catch:function _catch(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var a=r.arg
resetTryEntry(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,t,n){return this.delegate={iterator:values(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}var j=e=>{var t=e.afterSubmit,n=Object(g.a)(L,e.operations),r=n.getCustomerSubscriptionQuery,a=n.setNewsletterSubscriptionMutation,o=Object(v.b)(),s=i()(o,1)[0].isSignedIn,u=Object(p.a)(r,{skip:!s}),l=u.data,f=u.error,d=Object(c.useMemo)(()=>{if(l)return{isSubscribed:l.customer.is_subscribed}},[l]),h=Object(y.a)(a),b=i()(h,2),w=b[0],x=b[1],E=x.error,j=x.loading
return{formErrors:[E,f],initialValues:d,handleSubmit:Object(c.useCallback)(function(){var e=m()(_regeneratorRuntime().mark(function _callee(e){return _regeneratorRuntime().wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w({variables:e})
case 3:n.next=8
break
case 5:return n.prev=5,n.t0=n.catch(0),n.abrupt("return")
case 8:t&&t()
case 9:case"end":return n.stop()}},_callee,null,[[0,5]])}))
return function(t){return e.apply(this,arguments)}}(),[w,t]),isDisabled:j}},P=n("ACyH"),k=n("Ri9G"),S=n("7X3U"),T=n("dTQg"),_=n("UPvi"),G=n("DUu4"),O=n("LboF"),N=n.n(O),I=n("kEv4"),C={injectType:"singletonStyleTag",insert:"head",singleton:!0},F=(N()(I.a,C),I.a.locals||{}),M=e=>{var t=Object(u.a)().formatMessage,n=Object(g.a)(F,e.classes),r=Object(d.a)(),a=i()(r,2)[1].addToast,o=Object(c.useCallback)(()=>{a({type:"info",message:t({id:"communicationsPage.preferencesText",defaultMessage:"Your preferences have been updated."}),timeout:5e3})},[a,t]),h=j({afterSubmit:o}),m=h.formErrors,p=h.handleSubmit,y=h.initialValues,v=h.isDisabled
if(!y)return G.a
var b=t({id:"communicationsPage.title",defaultMessage:"Communications"})
return s.a.createElement("div",{className:n.root},s.a.createElement(_.b,null,b),s.a.createElement("h1",{className:n.title},s.a.createElement(l.a,{id:"communicationsPage.communicationsText",defaultMessage:"Communications"})),s.a.createElement("p",null,s.a.createElement(l.a,{id:"communicationsPage.optInText",defaultMessage:"We'd like to stay in touch. Please check the boxes next to the communications you'd like to receive."})),s.a.createElement(T.a,{errors:m}),s.a.createElement(f.b,{className:n.form,onSubmit:p,initialValues:y},s.a.createElement(S.a,{id:"isSubscribed",label:t({id:"communicationsPage.eNewsletterText",defaultMessage:"Venia E-Newsletter"})},s.a.createElement(k.a,{field:"isSubscribed",label:t({id:"communicationsPage.subscribeText",defaultMessage:"Stay on the cutting edge of fashion; subscribe to the monthly Venia Newsletter."})})),s.a.createElement("div",{className:n.buttonsContainer},s.a.createElement(P.a,{disabled:v,type:"submit",priority:"high"},t(v?{id:"communicationsPage.savingText",defaultMessage:"Saving"}:{id:"communicationsPage.changesText",defaultMessage:"Save Changes"})))))}},Ri9G:function(e,t,n){"use strict"
var r=n("pVnL"),a=n.n(r),o=n("QILm"),i=n.n(o),c=n("q1tI"),s=n.n(c),u=n("17x9"),l=n("8UhI"),f=n("c3RJ"),d=n("y1Xp"),h=n("gpca"),m=n("/Gi5"),p=n("ZRVi"),y=n("LboF"),g=n.n(y),v=n("jMiJ"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},w=(g()(v.a,b),v.a.locals||{}),x=["ariaLabel","classes","field","fieldValue","id","label","message"],E=s.a.createElement(m.a,null),L=s.a.createElement(p.a,null),j=e=>{var t=e.ariaLabel,n=e.classes,r=e.field,o=e.fieldValue,u=e.id,m=e.label,p=e.message,y=i()(e,x),g=Object(l.i)(r),v=Object(f.a)(r),b=Object(d.a)(w,n),j=v.value?E:L
return Object(c.useEffect)(()=>{null!=o&&o!==v.value&&g.setValue(o)},[g,v.value,o]),s.a.createElement(c.Fragment,null,s.a.createElement("label",{"aria-label":t,className:b.root,htmlFor:u},s.a.createElement(l.a,a()({},y,{className:b.input,field:r,id:u})),s.a.createElement("span",{className:b.icon},j),s.a.createElement("span",{className:b.label},m)),s.a.createElement(h.a,{fieldState:v},p))}
t.a=j
j.propTypes={ariaLabel:u.string,classes:Object(u.shape)({icon:u.string,input:u.string,label:u.string,message:u.string,root:u.string}),field:u.string.isRequired,id:u.string,label:u.node.isRequired,message:u.node}},kEv4:function(e,t,n){"use strict"
var r=n("JPst"),a=n.n(r)()(function(e){return e[1]})
a.push([e.i,".communicationsPage-root-BcS {\n}\n\n.communicationsPage-title-yCV {\n}\n\n.communicationsPage-form-Na6 {\n}\n\n.communicationsPage-buttonsContainer-YRT {\n}\n",""]),a.locals={root:"communicationsPage-root-BcS grid gap-y-md px-sm py-md lg_px-lg",title:"communicationsPage-title-yCV font-bold font-serif justify-self-center",form:"communicationsPage-form-Na6 grid gap-y-md",buttonsContainer:"communicationsPage-buttonsContainer-YRT flex justify-center lg_justify-start"},t.a=a}}])
