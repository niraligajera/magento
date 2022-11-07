/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"1CTD":function(e,t,n){"use strict"
var r=n("PBB4"),i=n.n(r)()(function(e){return e[1]})
i.push([e.i,"",""]),i.locals={},t.a=i},IEum:function(e,t,n){"use strict"
var r=n("PBB4"),i=n.n(r)()(function(e){return e[1]})
i.push([e.i,".message-root-2op {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-2op:empty {\n    display: none;\n}\n\n.message-root_error-16K {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),i.locals={root:"message-root-2op",root_error:"message-root_error-16K message-root-2op"},t.a=i},LnRb:function(e,t,n){"use strict"
var r=n("ddV6"),i=n.n(r),o=n("ERkP"),a=n("g97/")
t.a=function useInformedFieldStateWrapper(e){var t=Object(o.useState)(!0),n=i()(t,2),r=n[0],s=n[1],l=console.warn,c=/^Attempting to get field (.*) but it does not exist$/g
r&&(console.warn=function(e){e.match(c)||l(e)}),Object(o.useEffect)(function(){s(!1)},[])
var u=Object(a.k)(e)
return r&&(console.warn=l),u}},MR3a:function(e,t,n){"use strict"
var r=n("ERkP"),i=n.n(r),o=n("aWzz"),a=n("UNMe"),s=n("kQwz"),l={behavior:"smooth",block:"center"},c=n("YyrX"),u=n("LboF"),f=n.n(u),m=n("hpr6"),d={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(f()(m.a,d),m.a.locals||{}),g=i.a.forwardRef(function(e,t){var n=e.children,r=Object(c.a)(p,e.classes)
return i.a.createElement("div",{className:r.root,ref:t},i.a.createElement("span",{className:r.errorMessage},n))}),v=g
g.propTypes={classes:Object(o.shape)({root:o.string,errorMessage:o.string}),children:o.node}
var b=n("1CTD"),h={injectType:"singletonStyleTag",insert:"head",singleton:!0},y=(f()(b.a,h),b.a.locals||{}),E=function FormError(e){var t=e.classes,n=e.errors,o=e.scrollOnError,u=function useFormError(e){var t=e.errors,n=Object(s.a)().formatMessage
return{errorMessage:Object(r.useMemo)(function(){var e=n({id:"formError.errorMessage",defaultMessage:"An error has occurred. Please check the input and try again."})
return Object(a.a)(t,e)},[t,n])}}({errors:n}).errorMessage,f=Object(r.useRef)(null)
!function useScrollIntoView(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l
Object(r.useEffect)(function(){e.current&&e.current instanceof HTMLElement&&t&&e.current.scrollIntoView(n)},[n,e,t])}(f,o&&u)
var m=Object(c.a)(y,t)
return u?i.a.createElement(v,{classes:m,ref:f},u):null}
t.a=E
E.propTypes={classes:Object(o.shape)({root:o.string,errorMessage:o.string}),errors:Object(o.arrayOf)(Object(o.instanceOf)(Error)),scrollOnError:o.bool},E.defaultProps={scrollOnError:!0}},TFJh:function(e,t,n){"use strict"
var r=n("PBB4"),i=n.n(r)()(function(e){return e[1]})
i.push([e.i,".field-root-ffA {\n    color: rgb(var(--venia-global-color-text));\n    display: grid;\n    align-content: start;\n}\n\n.field-label-2Ss {\n    align-items: center;\n    display: flex;\n    font-size: 1rem;\n    font-weight: var(--venia-global-fontWeight-semibold);\n    justify-content: space-between;\n    line-height: 1rem;\n    padding: 0.5625rem 0.125rem;\n    min-height: 2.125rem;\n}\n\n.field-input-3CJ {\n    background: white;\n    border: 2px solid rgb(var(--venia-global-color-gray-600));\n    border-radius: 6px;\n    color: rgb(var(--venia-global-color-text));\n    display: inline-flex;\n    flex: 0 0 100%;\n    font-size: 1rem;\n    height: 2.5rem;\n    margin: 0;\n    max-width: 100%;\n    padding: calc(0.375rem - 1px) calc(0.625rem - 1px);\n    width: 100%;\n    -webkit-appearance: none;\n}\n\n.field-input-3CJ:focus {\n    box-shadow: -6px 6px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n\n.field-optional-1pS {\n    color: rgb(var(--venia-global-color-gray-700));\n    font-size: var(--venia-global-fontSize-100);\n    font-weight: var(--venia-global-fontWeight-normal);\n}\n",""]),i.locals={root:"field-root-ffA",label:"field-label-2Ss",input:"field-input-3CJ",optional:"field-optional-1pS"},t.a=i},TuC4:function(e,t,n){"use strict"
var r=n("ERkP"),i=n.n(r),o=n("kQwz"),a=n("aWzz"),s=n("LboF"),l=n.n(s),c=n("IEum"),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},f=(l()(c.a,u),c.a.locals||{}),m=n("YyrX"),d=function Message(e){var t,n=e.children,r=e.classes,a=e.fieldState,s=Object(o.a)().formatMessage,l=a.error,c=Object(m.a)(f,r),u=l?c.root_error:c.root
return l&&(t=s({id:l.id,defaultMessage:l.defaultMessage},{value:l.value})),i.a.createElement("p",{className:u},t||n)}
t.a=d
d.defaultProps={fieldState:{}},d.propTypes={children:a.node,classes:Object(a.shape)({root:a.string,root_error:a.string}),fieldState:Object(a.shape)({error:Object(a.shape)({id:a.string,defaultMessage:a.string,value:Object(a.oneOfType)([a.number,a.string])})})}},UNMe:function(e,t,n){"use strict"
function _createForOfIteratorHelper(t,r){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!i){if(Array.isArray(t)||(i=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}(t))||r&&t&&"number"==typeof t.length){i&&(t=i)
var o=0,a=function F(){}
return{s:a,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1
return{s:function s(){i=i.call(t)},n:function n(){var e=i.next()
return c=e.done,e},e:function e(t){u=!0,l=t},f:function f(){try{c||null==i.return||i.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}n.d(t,"a",function(){return i})
var r=function toString(e,t){var n=e.graphQLErrors,r=e.message
return n&&n.length?t||n.map(function(e){return e.message}).join(", "):r},i=function deriveErrorMessage(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=[],o=_createForOfIteratorHelper(e)
try{for(o.s();!(t=o.n()).done;){var a=t.value
a&&i.push(r(a,n))}}catch(e){o.e(e)}finally{o.f()}return i.join(", ")}},b55c:function(e,t,n){"use strict"
var r=n("97Jx"),i=n.n(r),o=n("m3Bd"),a=n.n(o),s=n("ERkP"),l=n.n(s),c=n("aWzz"),u=n("g97/"),f=n("LnRb"),m=n("YyrX"),d=n("TuC4"),p=n("74O1"),g=n("JqxX"),v=n("LboF"),b=n.n(v),h=n("x19e"),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},E=(b()(h.a,y),h.a.locals||{}),w=["ariaLabel","classes","field","fieldValue","id","label","message"],L=l.a.createElement(p.a,null),x=l.a.createElement(g.a,null),O=function Checkbox(e){var t=e.ariaLabel,n=e.classes,r=e.field,o=e.fieldValue,c=e.id,p=e.label,g=e.message,v=a()(e,w),b=Object(u.j)(r),h=Object(f.a)(r),y=Object(m.a)(E,n),O=h.value?L:x
return Object(s.useEffect)(function(){null!=o&&o!==h.value&&b.setValue(o)},[b,h.value,o]),l.a.createElement(s.Fragment,null,l.a.createElement("label",{"aria-label":t,className:y.root,htmlFor:c},l.a.createElement(u.a,i()({},v,{className:y.input,field:r,id:c})),l.a.createElement("span",{className:y.icon},O),l.a.createElement("span",{className:y.label},p)),l.a.createElement(d.a,{fieldState:h},g))}
t.a=O
O.propTypes={ariaLabel:c.string,classes:Object(c.shape)({icon:c.string,input:c.string,label:c.string,message:c.string,root:c.string}),field:c.string.isRequired,id:c.string,label:c.node.isRequired,message:c.node}},dLb8:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return R})
var r,i,o=n("ddV6"),a=n.n(o),s=n("ERkP"),l=n.n(s),c=n("kQwz"),u=n("6sB8"),f=n("g97/"),m=n("UW3U"),d=n("VtSi"),p=n.n(d),g=n("cbiG"),v=n.n(g),b=n("x8tt"),h=n("YyrX"),y=n("o353"),E=n("7wq/"),w=n.n(E),L=Object(b.gql)(r||(r=w()(["\n    mutation SetNewsletterSubscription($isSubscribed: Boolean!) {\n        updateCustomer(input: { is_subscribed: $isSubscribed }) {\n            customer {\n                id\n                is_subscribed\n            }\n        }\n    }\n"]))),x={getCustomerSubscriptionQuery:Object(b.gql)(i||(i=w()(["\n    query GetCustomerSubscription {\n        customer {\n            id\n            is_subscribed\n        }\n    }\n"]))),setNewsletterSubscriptionMutation:L},O=n("loE8"),j=n("b55c"),k=n("v8zp"),_=n("MR3a"),M=n("lYeQ"),S=n("mHFa"),T=n("LboF"),P=n.n(T),C=n("mW82"),N={injectType:"singletonStyleTag",insert:"head",singleton:!0},A=(P()(C.a,N),C.a.locals||{}),R=function CommunicationsPage(e){var t=Object(c.a)().formatMessage,n=Object(h.a)(A,e.classes),r=Object(m.a)(),i=a()(r,2)[1].addToast,o=function useCommunicationsPage(e){var t,n=e.afterSubmit,r=Object(h.a)(x,e.operations),i=r.getCustomerSubscriptionQuery,o=r.setNewsletterSubscriptionMutation,l=Object(y.b)(),c=a()(l,1)[0].isSignedIn,u=Object(b.useQuery)(i,{skip:!c}),f=u.data,m=u.error,d=Object(s.useMemo)(function(){if(f)return{isSubscribed:f.customer.is_subscribed}},[f]),g=Object(b.useMutation)(o),E=a()(g,2),w=E[0],L=E[1],O=L.error,j=L.loading
return{formErrors:[O,m],initialValues:d,handleSubmit:Object(s.useCallback)((t=v()(p.a.mark(function _callee(e){return p.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w({variables:e})
case 3:t.next=8
break
case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return")
case 8:n&&n()
case 9:case"end":return t.stop()}},_callee,null,[[0,5]])})),function(e){return t.apply(this,arguments)}),[w,n]),isDisabled:j}}({afterSubmit:Object(s.useCallback)(function(){i({type:"info",message:t({id:"communicationsPage.preferencesText",defaultMessage:"Your preferences have been updated."}),timeout:5e3})},[i,t])}),d=o.formErrors,g=o.handleSubmit,E=o.initialValues,w=o.isDisabled
if(!E)return S.a
var L=t({id:"communicationsPage.title",defaultMessage:"Communications"})
return l.a.createElement("div",{className:n.root},l.a.createElement(M.b,null,L),l.a.createElement("h1",{className:n.title},l.a.createElement(u.a,{id:"communicationsPage.communicationsText",defaultMessage:"Communications"})),l.a.createElement("p",null,l.a.createElement(u.a,{id:"communicationsPage.optInText",defaultMessage:"We'd like to stay in touch. Please check the boxes next to the communications you'd like to receive."})),l.a.createElement(_.a,{errors:d}),l.a.createElement(f.b,{className:n.form,onSubmit:g,initialValues:E},l.a.createElement(k.a,{id:"isSubscribed",label:t({id:"communicationsPage.eNewsletterText",defaultMessage:"Venia E-Newsletter"})},l.a.createElement(j.a,{field:"isSubscribed",label:t({id:"communicationsPage.subscribeText",defaultMessage:"Stay on the cutting edge of fashion; subscribe to the monthly Venia Newsletter."})})),l.a.createElement("div",{className:n.buttonsContainer},l.a.createElement(O.a,{disabled:w,type:"submit",priority:"high"},t(w?{id:"communicationsPage.savingText",defaultMessage:"Saving"}:{id:"communicationsPage.changesText",defaultMessage:"Save Changes"})))))}},hpr6:function(e,t,n){"use strict"
var r=n("PBB4"),i=n.n(r)()(function(e){return e[1]})
i.push([e.i,".errorMessage-root-2-g {\n}\n\n.errorMessage-errorMessage-369 {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n",""]),i.locals={root:"errorMessage-root-2-g",errorMessage:"errorMessage-errorMessage-369"},t.a=i},mW82:function(e,t,n){"use strict"
var r=n("PBB4"),i=n.n(r)()(function(e){return e[1]})
i.push([e.i,".communicationsPage-root-k3K {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.communicationsPage-title-2uq {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.communicationsPage-form-NGB {\n    display: grid;\n    row-gap: 2rem;\n}\n\n.communicationsPage-buttonsContainer-2eb {\n    display: flex;\n    justify-content: flex-start;\n}\n\n@media (max-width: 960px) {\n    .communicationsPage-root-k3K {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .communicationsPage-buttonsContainer-2eb {\n        justify-content: center;\n    }\n}\n",""]),i.locals={root:"communicationsPage-root-k3K",title:"communicationsPage-title-2uq",form:"communicationsPage-form-NGB",buttonsContainer:"communicationsPage-buttonsContainer-2eb"},t.a=i},r2q8:function(e,t,n){"use strict"
var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function ReflectApply(e,t,n){return Function.prototype.apply.call(e,t,n)}
r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)}
var a=Number.isNaN||function NumberIsNaN(e){return e!=e}
function EventEmitter(){EventEmitter.init.call(this)}e.exports=EventEmitter,e.exports.once=function once(e,t){return new Promise(function(n,r){function errorListener(n){e.removeListener(t,resolver),r(n)}function resolver(){"function"==typeof e.removeListener&&e.removeListener("error",errorListener),n([].slice.call(arguments))}eventTargetAgnosticAddListener(e,t,resolver,{once:!0}),"error"!==t&&function addErrorHandlerIfEventEmitter(e,t,n){"function"==typeof e.on&&eventTargetAgnosticAddListener(e,"error",t,n)}(e,errorListener,{once:!0})})},EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0
var s=10
function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,r){var i,o,a
if(checkListener(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount
else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=_getMaxListeners(e))>0&&a.length>i&&!a.warned){a.warned=!0
var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,function ProcessEmitWarning(e){console&&console.warn}()}return e}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(r)
return i.listener=n,r.wrapFn=i,i}function _listeners(e,t,n){var r=e._events
if(void 0===r)return[]
var i=r[t]
return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n]
return t}(i):arrayClone(i,i.length)}function listenerCount(e){var t=this._events
if(void 0!==t){var n=t[e]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r]
return n}function eventTargetAgnosticAddListener(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n)
else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)
e.addEventListener(t,function wrapListener(i){r.once&&e.removeEventListener(t,wrapListener),n(i)})}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
s=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n])
var r="error"===e,i=this._events
if(void 0!==i)r=r&&void 0===i.error
else if(!r)return!1
if(r){var a
if(t.length>0&&(a=t[0]),a instanceof Error)throw a
var s=new Error("Unhandled error."+(a?" ("+a.message+")":""))
throw s.context=a,s}var l=i[e]
if(void 0===l)return!1
if("function"==typeof l)o(l,this,t)
else{var c=l.length,u=arrayClone(l,c)
for(n=0;n<c;++n)o(u[n],this,t)}return!0},EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function once(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function removeListener(e,t){var n,r,i,o,a
if(checkListener(t),void 0===(r=this._events))return this
if(void 0===(n=r[e]))return this
if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t))
else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o
break}if(i<0)return this
0===i?n.shift():function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this
if(0===arguments.length){var i,o=Object.keys(n)
for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t)
else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r])
return this},EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?r(this._events):[]}},v8zp:function(e,t,n){"use strict"
var r=n("ERkP"),i=n.n(r),o=n("6sB8"),a=n("aWzz"),s=n("YyrX"),l=n("LboF"),c=n.n(l),u=n("TFJh"),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(c()(u.a,f),u.a.locals||{}),d=function Field(e){var t=e.children,n=e.id,r=e.label,a=e.optional,l=Object(s.a)(m,e.classes),c=a?i.a.createElement("span",{className:l.optional},i.a.createElement(o.a,{id:"field.optional",defaultMessage:"Optional"})):null
return i.a.createElement("div",{className:l.root},i.a.createElement("label",{className:l.label,htmlFor:n},r,c),t)}
d.propTypes={children:a.node,classes:Object(a.shape)({label:a.string,root:a.string}),id:a.string,label:a.node,optional:a.bool}
t.a=d},x19e:function(e,t,n){"use strict"
var r=n("PBB4"),i=n.n(r)()(function(e){return e[1]})
i.push([e.i,".checkbox-root-1vJ {\n    --stroke: var(--venia-global-color-gray-600);\n    align-items: center;\n    color: rgb(var(--venia-global-color-gray-900));\n    display: grid;\n    gap: calc(0.875rem - 5px);\n    grid-auto-flow: column;\n    grid-template-areas: 'input label';\n    grid-template-columns: -webkit-min-content 1fr;\n    grid-template-columns: min-content 1fr;\n    justify-items: center;\n    line-height: 1.5rem;\n}\n\n.checkbox-input-33X {\n    -webkit-appearance: none;\n    background: none;\n    border: 2px solid transparent;\n    border-radius: 4px;\n    cursor: pointer;\n    grid-area: input;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3mn {\n    grid-area: input;\n    height: 1.5rem;\n    pointer-events: none;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3mn svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-1cy {\n    cursor: pointer;\n    font-size: var(--venia-typography-body-M-fontSize);\n    grid-area: label;\n    justify-self: start;\n}\n\n.checkbox-input-33X:disabled {\n    cursor: default;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n.checkbox-input-33X:disabled ~ .checkbox-label-1cy {\n    cursor: default;\n}\n\n.checkbox-input-33X:checked:enabled + .checkbox-icon-3mn {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n.checkbox-input-33X:active:enabled,\n.checkbox-input-33X:focus:enabled {\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n",""]),i.locals={root:"checkbox-root-1vJ",input:"checkbox-input-33X",icon:"checkbox-icon-3mn",label:"checkbox-label-1cy"},t.a=i}}])
