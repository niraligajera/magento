/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"5yLy":function(e,t,n){"use strict"
var r=n("JPst"),a=n.n(r),o=n("sARL"),i=a()(function(e){return e[1]})
i.i(o.a,"",!0),i.push([e.i,".accountInformationPage-root-9H5 {\n}\n\n.accountInformationPage-title-CzS {\n}\n\n.accountInformationPage-accountDetails-UxN {\n}\n\n.accountInformationPage-lineItemsContainer-4u8 {\n    grid-column: 1 / span 1;\n}\n\n.accountInformationPage-lineItemLabel-Kps {\n}\n\n.accountInformationPage-nameLabel-cHH,\n.accountInformationPage-emailLabel-1-X,\n.accountInformationPage-passwordLabel-dhQ {\n}\n\n.accountInformationPage-nameValue-NTd,\n.accountInformationPage-emailValue-XI3,\n.accountInformationPage-passwordValue-Bv- {\n}\n\n.accountInformationPage-editButtonContainer-OjG {\n    grid-column: 1 / span 1;\n}\n\n.accountInformationPage-editInformationButton-C64 {\n}\n",""]),i.locals={root:"accountInformationPage-root-9H5 grid gap-y-md px-lg py-md",title:"accountInformationPage-title-CzS font-bold font-serif justify-self-center",accountDetails:"accountInformationPage-accountDetails-UxN gap-y-md grid grid-cols-1 lg_grid-cols-3",lineItemsContainer:"accountInformationPage-lineItemsContainer-4u8 gap-3 grid grid-cols-1 leading-normal lg_gap-xs lg_grid-cols-2",lineItemLabel:"accountInformationPage-lineItemLabel-Kps font-bold",nameLabel:"accountInformationPage-nameLabel-cHH font-bold",emailLabel:"accountInformationPage-emailLabel-1-X font-bold",passwordLabel:"accountInformationPage-passwordLabel-dhQ font-bold",nameValue:"accountInformationPage-nameValue-NTd",emailValue:"accountInformationPage-emailValue-XI3",passwordValue:"accountInformationPage-passwordValue-Bv-",editButtonContainer:"accountInformationPage-editButtonContainer-OjG text-center",editInformationButton:"accountInformationPage-editInformationButton-C64 "+o.a.locals.root_normalPriority},t.a=i},GyKt:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return R})
var r=n("lSNA"),a=n.n(r),o=n("q1tI"),i=n.n(o),c=n("dDsW"),l=n("kriW"),s=n("yXPU"),u=n.n(s),d=n("J4zp"),f=n.n(d),h=n("+TN3"),p=n("pZLH"),m=n("FITH"),g=n("MsnC"),y=n("Cess")
function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e}
var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag"
function define(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function define(e,t,n){return e[t]=n}}function wrap(e,t,n,r){var a=t&&t.prototype instanceof Generator?t:Generator,o=Object.create(a.prototype),i=new Context(r||[])
return o._invoke=function(e,t,n){var r="suspendedStart"
return function(a,o){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===a)throw o
return doneResult()}for(n.method=a,n.arg=o;;){var i=n.delegate
if(i){var l=maybeInvokeDelegate(i,n)
if(l){if(l===c)continue
return l}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var s=tryCatch(e,t,n)
if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===c)continue
return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function tryCatch(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap
var c={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var l={}
define(l,a,function(){return this})
var s=Object.getPrototypeOf,u=s&&s(s(values([])))
u&&u!==t&&n.call(u,a)&&(l=u)
var d=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(l)
function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){define(e,t,function(e){return this._invoke(t,e)})})}function AsyncIterator(e,t){var r
this._invoke=function(a,o){function callInvokeWithMethodAndArg(){return new t(function(r,i){!function invoke(r,a,o,i){var c=tryCatch(e[r],e,a)
if("throw"!==c.type){var l=c.arg,s=l.value
return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){invoke("next",e,o,i)},function(e){invoke("throw",e,o,i)}):t.resolve(s).then(function(e){l.value=e,o(l)},function(e){return invoke("throw",e,o,i)})}i(c.arg)}(a,o,r,i)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(e,t){var n=e.iterator[t.method]
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
return o.next=o}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(d,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,i,"GeneratorFunction")),e.prototype=Object.create(d),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,o,function(){return this}),e.AsyncIterator=AsyncIterator,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise)
var i=new AsyncIterator(wrap(t,n,r,a),o)
return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},defineIteratorMethods(d),define(d,i,"Generator"),define(d,a,function(){return this}),define(d,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[]
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
resetTryEntry(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,t,n){return this.delegate={iterator:values(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v,b,w,P,x=e=>{var t=e.mutations,n=t.setCustomerInformationMutation,r=t.changeCustomerPasswordMutation,a=e.queries.getCustomerInformationQuery,i=Object(m.b)(),c=f()(i,1)[0].isSignedIn,l=Object(o.useState)(!1),s=f()(l,2),d=s[0],v=s[1],b=Object(o.useState)(!1),w=f()(b,2),P=w[0],x=w[1],E=Object(y.b)(),I=f()(E,2)[1].dispatch,O=Object(o.useState)(!1),C=f()(O,2),j=C[0],L=C[1],k=Object(h.a)(a,{skip:!c,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),_=k.data,G=k.error,A=Object(p.a)(n),S=f()(A,2),T=S[0],F=S[1],N=F.error,M=F.loading,D=Object(p.a)(r),R=f()(D,2),V=R[0],U=R[1],W=U.error,q=U.loading,B=Object(g.a)({currentForm:"CUSTOMER_EDIT",formAction:"editCustomer"}),H=B.generateReCaptchaData,K=B.recaptchaLoading,X=B.recaptchaWidgetProps,Y=Object(o.useMemo)(()=>{if(_)return{customer:_.customer}},[_]),$=Object(o.useCallback)(()=>{v(!0)},[v]),z=Object(o.useCallback)(()=>{x(!1),v(!1)},[x]),Q=Object(o.useCallback)(()=>{x(!0),L(!1)},[x]),J=Object(o.useCallback)(function(){var e=u()(_regeneratorRuntime().mark(function _callee(e){var t,n,r,a,o,i
return _regeneratorRuntime().wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(t=e.email,n=e.firstname,r=e.lastname,a=e.password,o=e.newPassword,c.prev=1,t=t.trim(),n=n.trim(),r=r.trim(),a=a.trim(),o=o?o.trim():o,Y.customer.email===t&&Y.customer.firstname===n&&Y.customer.lastname===r){c.next=10
break}return c.next=10,T({variables:{customerInput:{email:t,firstname:n,lastname:r,password:a}}})
case 10:if(!a||!o){c.next=16
break}return c.next=13,H()
case 13:return i=c.sent,c.next=16,V(_objectSpread({variables:{currentPassword:a,newPassword:o}},i))
case 16:I({type:"USER_ACCOUNT_UPDATE",payload:{email:t,firstName:n,lastName:r}}),z(!1),c.next=24
break
case 20:return c.prev=20,c.t0=c.catch(1),L(!0),c.abrupt("return")
case 24:case"end":return c.stop()}},_callee,null,[[1,20]])}))
return function(t){return e.apply(this,arguments)}}(),[Y,z,T,H,V,I])
return{handleCancel:z,formErrors:j?[N,W]:[],handleSubmit:J,handleChangePassword:$,initialValues:Y,isDisabled:M||q||K,isUpdateMode:P,loadDataError:G,shouldShowNewPassword:d,showUpdateMode:Q,recaptchaWidgetProps:X}},E=n("y1Xp"),I=n("ACyH"),O=n("gpca"),C=n("UPvi"),j=n("DUu4"),L=n("LboF"),k=n.n(L),_=n("5yLy"),G={injectType:"singletonStyleTag",insert:"head",singleton:!0},A=(k()(_.a,G),_.a.locals||{}),S=n("VkAN"),T=n.n(S),F=n("UYTu"),N=Object(F.a)(v||(v=T()(["\n    fragment AccountInformationPageFragment on Customer {\n        id\n        firstname\n        lastname\n        email\n    }\n"]))),M={mutations:{setCustomerInformationMutation:Object(F.a)(b||(b=T()(["\n    mutation SetCustomerInformation($customerInput: CustomerInput!) {\n        updateCustomer(input: $customerInput) {\n            # eslint-disable-next-line @graphql-eslint/require-id-when-available\n            customer {\n                ...AccountInformationPageFragment\n            }\n        }\n    }\n    ","\n"])),N),changeCustomerPasswordMutation:Object(F.a)(w||(w=T()(["\n    mutation ChangeCustomerPassword(\n        $currentPassword: String!\n        $newPassword: String!\n    ) {\n        changeCustomerPassword(\n            currentPassword: $currentPassword\n            newPassword: $newPassword # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        ) {\n            email\n        }\n    }\n"])))},queries:{getCustomerInformationQuery:Object(F.a)(P||(P=T()(["\n    query GetCustomerInformation {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        customer {\n            ...AccountInformationPageFragment\n        }\n    }\n    ","\n"])),N)}}
function accountInformationPage_ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var D=i.a.lazy(()=>Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"+jtD"))),R=e=>{var t=Object(E.a)(A,e.classes),n=x(function accountInformationPage_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?accountInformationPage_ownKeys(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):accountInformationPage_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},M)),r=n.handleCancel,s=n.formErrors,u=n.handleChangePassword,d=n.handleSubmit,f=n.initialValues,h=n.isDisabled,p=n.isUpdateMode,m=n.loadDataError,g=n.shouldShowNewPassword,y=n.showUpdateMode,v=n.recaptchaWidgetProps,b=Object(c.a)().formatMessage,w=m?i.a.createElement(O.a,null,i.a.createElement(l.a,{id:"accountInformationPage.errorTryAgain",defaultMessage:"Something went wrong. Please refresh and try again."})):null,P=null
if(!f)return j.a
var L=f.customer,k="".concat(L.firstname," ").concat(L.lastname)
return P=i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:t.accountDetails},i.a.createElement("div",{className:t.lineItemsContainer},i.a.createElement("span",{className:t.nameLabel},i.a.createElement(l.a,{id:"global.name",defaultMessage:"Name"})),i.a.createElement("span",{className:t.nameValue},k),i.a.createElement("span",{className:t.emailLabel},i.a.createElement(l.a,{id:"global.email",defaultMessage:"Email"})),i.a.createElement("span",{className:t.emailValue},L.email),i.a.createElement("span",{className:t.passwordLabel},i.a.createElement(l.a,{id:"global.password",defaultMessage:"Password"})),i.a.createElement("span",{className:t.passwordValue},"***********")),i.a.createElement("div",{className:t.editButtonContainer},i.a.createElement(I.a,{className:t.editInformationButton,disabled:!1,onClick:y,priority:"normal"},i.a.createElement(l.a,{id:"global.editButton",defaultMessage:"Edit"})))),i.a.createElement(o.Suspense,{fallback:null},i.a.createElement(D,{formErrors:s,initialValues:L,isDisabled:h,isOpen:p,onCancel:r,onChangePassword:u,onSubmit:d,shouldShowNewPassword:g,recaptchaWidgetProps:v}))),i.a.createElement("div",{className:t.root},i.a.createElement(C.b,null,b({id:"accountInformationPage.titleAccount",defaultMessage:"Account Information"})),i.a.createElement("h1",{"aria-live":"polite",className:t.title},i.a.createElement(l.a,{id:"accountInformationPage.accountInformation",defaultMessage:"Account Information"})),w||P)}},MsnC:function(e,t,n){"use strict"
n.d(t,"a",function(){return m})
var r,a=n("yXPU"),o=n.n(a),i=n("J4zp"),c=n.n(i),l=n("q1tI"),s=n("+TN3"),u=n("y1Xp"),d=n("VkAN"),f=n.n(d),h=n("UYTu"),p={getReCaptchaV3ConfigQuery:Object(h.a)(r||(r=f()(["\n    query GetReCaptchaV3Config {\n        recaptchaV3Config {\n            website_key\n            badge_position\n            language_code\n            forms\n        }\n    }\n"])))}
function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e}
var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag"
function define(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function define(e,t,n){return e[t]=n}}function wrap(e,t,n,r){var a=t&&t.prototype instanceof Generator?t:Generator,o=Object.create(a.prototype),i=new Context(r||[])
return o._invoke=function(e,t,n){var r="suspendedStart"
return function(a,o){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===a)throw o
return doneResult()}for(n.method=a,n.arg=o;;){var i=n.delegate
if(i){var l=maybeInvokeDelegate(i,n)
if(l){if(l===c)continue
return l}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var s=tryCatch(e,t,n)
if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===c)continue
return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function tryCatch(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap
var c={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var l={}
define(l,a,function(){return this})
var s=Object.getPrototypeOf,u=s&&s(s(values([])))
u&&u!==t&&n.call(u,a)&&(l=u)
var d=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(l)
function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){define(e,t,function(e){return this._invoke(t,e)})})}function AsyncIterator(e,t){var r
this._invoke=function(a,o){function callInvokeWithMethodAndArg(){return new t(function(r,i){!function invoke(r,a,o,i){var c=tryCatch(e[r],e,a)
if("throw"!==c.type){var l=c.arg,s=l.value
return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){invoke("next",e,o,i)},function(e){invoke("throw",e,o,i)}):t.resolve(s).then(function(e){l.value=e,o(l)},function(e){return invoke("throw",e,o,i)})}i(c.arg)}(a,o,r,i)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(e,t){var n=e.iterator[t.method]
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
return o.next=o}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(d,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,i,"GeneratorFunction")),e.prototype=Object.create(d),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,o,function(){return this}),e.AsyncIterator=AsyncIterator,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise)
var i=new AsyncIterator(wrap(t,n,r,a),o)
return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},defineIteratorMethods(d),define(d,i,"Generator"),define(d,a,function(){return this}),define(d,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[]
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
resetTryEntry(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,t,n){return this.delegate={iterator:values(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}var m=e=>{var t,n,r,a,i=Object(u.a)(p,e.operations),d=e.currentForm,f=e.formAction,h=Object(s.a)(i.getReCaptchaV3ConfigQuery,{fetchPolicy:"cache-and-network"}),m=h.data,g=h.error,y=h.loading
globalThis.recaptchaCallbacks||(globalThis.recaptchaCallbacks={})
var v=Object(l.useState)(globalThis.hasOwnProperty("grecaptcha")),b=c()(v,2),w=b[0],P=b[1],x=Object(l.useState)(!1),E=c()(x,2),I=E[0],O=E[1],C=Object(l.useState)(null),j=c()(C,2),L=j[0],k=j[1],_=Object(l.useState)(null),G=c()(_,2),A=G[0],S=G[1],T=Object(l.useCallback)(e=>{null!==e&&S(e)},[]),F=null!=m&&null!==(t=m.recaptchaV3Config)&&void 0!==t&&t.badge_position&&m.recaptchaV3Config.badge_position.length>0?m.recaptchaV3Config.badge_position:"bottomright",N=null==m?void 0:null===(n=m.recaptchaV3Config)||void 0===n?void 0:n.website_key,M=null==m?void 0:null===(r=m.recaptchaV3Config)||void 0===r?void 0:r.language_code,D=(null==m?void 0:null===(a=m.recaptchaV3Config)||void 0===a?void 0:a.forms)||[],R=!(g instanceof Error)&&N&&N.length>0&&D.includes(d),V="inline"===F,U=new URL("https://www.google.com/recaptcha/api.js")
U.searchParams.append("badge",F),U.searchParams.append("render",V?"explicit":N),U.searchParams.append("onload","onloadRecaptchaCallback"),M&&M.length>0&&U.searchParams.append("hl",M)
var W=(e=>{var t=Object(l.useState)(e?"loading":"idle"),n=c()(t,2),r=n[0],a=n[1]
return Object(l.useEffect)(()=>{if(e){var t=document.querySelector('script[src="'.concat(e,'"]'))
if(t)a(t.getAttribute("data-status"))
else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t)
var n=e=>{t.setAttribute("data-status","load"===e.type?"ready":"error")}
t.addEventListener("load",n),t.addEventListener("error",n)}var r=e=>{a("load"===e.type?"ready":"error")}
return t.addEventListener("load",r),t.addEventListener("error",r),()=>{t&&(t.removeEventListener("load",r),t.removeEventListener("error",r))}}a("idle")},[e]),r})(!w&&R?U:null),q=y||R&&!w&&"ready"!==W
return Object(l.useEffect)(()=>{if(null!==A&&V&&w&&null===L)if("widgetId"in A.dataset)k(A.dataset.widgetId)
else{var e=globalThis.grecaptcha.render(A,{sitekey:N,size:"invisible"})
k(e),A.dataset.widgetId=e}},[w,V,N,L,A]),!globalThis.recaptchaCallbacks[f]&&R&&(globalThis.recaptchaCallbacks[f]=(()=>{if(!V){var e=document.getElementsByClassName("grecaptcha-badge")
e&&e.length>0&&(e[0].style.zIndex=999)}P(!0)})),globalThis.onloadRecaptchaCallback=Object(l.useCallback)(()=>{for(var e in globalThis.recaptchaCallbacks)globalThis.recaptchaCallbacks[e]()
globalThis.recaptchaCallbacks={}},[]),{recaptchaLoading:I||q,generateReCaptchaData:Object(l.useCallback)(o()(_regeneratorRuntime().mark(function _callee(){var e,t
return _regeneratorRuntime().wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(!w){n.next=15
break}return n.prev=1,O(!0),n.next=5,globalThis.grecaptcha.execute(V?L:N,{action:f})
case 5:return e=n.sent,t={context:{headers:{"X-ReCaptcha":e}}},O(!1),n.abrupt("return",t)
case 11:n.prev=11,n.t0=n.catch(1),O(!1)
case 15:return n.abrupt("return",{})
case 16:case"end":return n.stop()}},_callee,null,[[1,11]])})),[w,f,V,N,L]),recaptchaWidgetProps:{containerElement:T,shouldRender:!!(R&&V&&w)}}}}}])
