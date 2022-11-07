/*!
 * @version 956525a-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[60,71],{"0gS9":function(e,t,r){"use strict"
r.d(t,"a",function(){return w})
var n,a=r("o0o1"),o=r.n(a),s=r("lSNA"),i=r.n(s),c=r("yXPU"),l=r.n(c),u=r("J4zp"),d=r.n(u),g=r("ERkP"),f=r("x8tt"),p=r("y1Xp"),m=r("VkAN"),b=r.n(m),h={getReCaptchaV3ConfigQuery:Object(f.gql)(n||(n=b()(["\n    query GetReCaptchaV3Config {\n        recaptchaV3Config {\n            website_key\n            badge_position\n            language_code\n            forms\n        }\n    }\n"])))},w=function useGoogleReCaptcha(e){var t,r,n,a,s=Object(p.a)(h,e.operations),c=e.currentForm,u=e.formAction,m=Object(f.useQuery)(s.getReCaptchaV3ConfigQuery,{fetchPolicy:"cache-and-network"}),b=m.data,w=m.error,v=m.loading
globalThis.recaptchaCallbacks||(globalThis.recaptchaCallbacks={})
var P=Object(g.useState)(globalThis.hasOwnProperty("grecaptcha")),y=d()(P,2),O=y[0],j=y[1],E=Object(g.useState)(!1),C=d()(E,2),S=C[0],k=C[1],T=Object(g.useState)(null),x=d()(T,2),M=x[0],F=x[1],R=Object(g.useState)(null),_=d()(R,2),N=_[0],A=_[1],V=Object(g.useCallback)(function(e){null!==e&&A(e)},[]),B=null!=b&&null!==(t=b.recaptchaV3Config)&&void 0!==t&&t.badge_position&&b.recaptchaV3Config.badge_position.length>0?b.recaptchaV3Config.badge_position:"bottomright",I=null==b?void 0:null===(r=b.recaptchaV3Config)||void 0===r?void 0:r.website_key,z=null==b?void 0:null===(n=b.recaptchaV3Config)||void 0===n?void 0:n.language_code,L=(null==b?void 0:null===(a=b.recaptchaV3Config)||void 0===a?void 0:a.forms)||[],D=!(w instanceof Error)&&I&&I.length>0&&L.includes(c),G="inline"===B,q=new URL("https://www.google.com/recaptcha/api.js")
q.searchParams.append("badge",B),q.searchParams.append("render",G?"explicit":I),q.searchParams.append("onload","onloadRecaptchaCallback"),z&&z.length>0&&q.searchParams.append("hl",z)
var U=function(e){var t=Object(g.useState)(e?"loading":"idle"),r=d()(t,2),n=r[0],a=r[1]
return Object(g.useEffect)(function(){if(e){var t=document.querySelector('script[src="'.concat(e,'"]'))
if(t)a(t.getAttribute("data-status"))
else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t)
var r=function setAttributeFromEvent(e){t.setAttribute("data-status","load"===e.type?"ready":"error")}
t.addEventListener("load",r),t.addEventListener("error",r)}var n=function setStateFromEvent(e){a("load"===e.type?"ready":"error")}
return t.addEventListener("load",n),t.addEventListener("error",n),function(){t&&(t.removeEventListener("load",n),t.removeEventListener("error",n))}}a("idle")},[e]),n}(!O&&D?q:null),W=v||D&&!O&&"ready"!==U
return Object(g.useEffect)(function(){if(null!==N&&G&&O&&null===M)if("widgetId"in N.dataset)F(N.dataset.widgetId)
else{var e=globalThis.grecaptcha.render(N,{sitekey:I,size:"invisible"})
F(e),N.dataset.widgetId=e}},[O,G,I,M,N]),!globalThis.recaptchaCallbacks[u]&&D&&(globalThis.recaptchaCallbacks[u]=function(){if(!G){var e=document.getElementsByClassName("grecaptcha-badge")
e&&e.length>0&&(e[0].style.zIndex=999)}j(!0)}),globalThis.onloadRecaptchaCallback=Object(g.useCallback)(function(){for(var e in globalThis.recaptchaCallbacks)globalThis.recaptchaCallbacks[e]()
globalThis.recaptchaCallbacks={}},[]),{recaptchaLoading:S||W,generateReCaptchaData:Object(g.useCallback)(l()(o.a.mark(function _callee(){var e,t
return o.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(!O){r.next=15
break}return r.prev=1,k(!0),r.next=5,globalThis.grecaptcha.execute(G?M:I,{action:u})
case 5:return e=r.sent,t={context:{headers:i()({},"X-ReCaptcha",e)}},k(!1),r.abrupt("return",t)
case 11:r.prev=11,r.t0=r.catch(1),k(!1)
case 15:return r.abrupt("return",{})
case 16:case"end":return r.stop()}},_callee,null,[[1,11]])})),[O,u,G,I,M]),recaptchaWidgetProps:{containerElement:V,shouldRender:!!(D&&G&&O)}}}},"2TWI":function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,".forgotPassword-root-3Zx {\n    display: grid;\n    gap: 0.9375rem;\n    justify-items: stretch;\n    padding: 1rem 1.5rem;\n}\n\n.forgotPassword-title-3-Q {\n    padding-top: 0.5rem;\n    text-transform: capitalize;\n}\n\n.forgotPassword-instructions-RwM {\n    font-weight: 300;\n    line-height: 1.25rem;\n}\n",""]),a.locals={root:"forgotPassword-root-3Zx",title:"forgotPassword-title-3-Q",instructions:"forgotPassword-instructions-RwM"},t.a=a},"2V+0":function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,".formSubmissionSuccessful-root-1fd {\n    display: grid;\n    gap: 1.5rem;\n}\n\n.formSubmissionSuccessful-text-3CV {\n    font-size: 0.875rem;\n    font-weight: 300;\n    line-height: 1.25rem;\n}\n\n.formSubmissionSuccessful-title-2G7 {\n    padding-top: 0.5rem;\n    text-transform: capitalize;\n}\n",""]),a.locals={root:"formSubmissionSuccessful-root-1fd",text:"formSubmissionSuccessful-text-3CV",title:"formSubmissionSuccessful-title-2G7"},t.a=a},"3VoT":function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,"",""]),a.locals={},t.a=a},"6Xjj":function(e,t,r){"use strict"
function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,u=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return l=e.done,e},e:function e(t){u=!0,c=t},f:function f(){try{l||null==a.return||a.return()}finally{if(u)throw c}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}r.d(t,"a",function(){return a})
var n=function toString(e,t){var r=e.graphQLErrors,n=e.message
return r&&r.length?t||r.map(function(e){return e.message}).join(", "):n},a=function deriveErrorMessage(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=[],o=_createForOfIteratorHelper(e)
try{for(o.s();!(t=o.n()).done;){var s=t.value
s&&a.push(n(s))}}catch(e){o.e(e)}finally{o.f()}return a.length||a.push(n(r)),a.join(", ")}},"8F0e":function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return J})
var n=r("ERkP"),a=r.n(n),o=r("aWzz"),s=r("kQwz"),i=r("6sB8"),c=r("J4zp"),l=r.n(c),u=r("zCf4"),d=r("FITH"),g=r("y1Xp"),f=r("lSNA"),p=r.n(f),m=r("o0o1"),b=r.n(m),h=r("yXPU"),w=r.n(h),v=r("x8tt"),P=r("0gS9")
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){p()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=r("dTQg"),O=r("g97/"),j=r("LGPB"),E=r("ACyH"),C=r("7X3U"),S=r("pfjg"),k=r("lX7o"),T=r("LboF"),x=r.n(T),M=r("YXoo"),F={injectType:"singletonStyleTag",insert:"head",singleton:!0},R=(x()(M.a,F),M.a.locals||{}),_=window.SMCONFIGS&&window.SMCONFIGS.plugins&&window.SMCONFIGS.plugins.SM_ENABLE_META_PACKAGES&&1===parseInt(window.SMCONFIGS.plugins.SM_ENABLE_META_PACKAGES),N=function ForgotPasswordForm(e){var t=Object(g.a)(R,e.classes),r=e.initialValues,n=e.isResettingPassword,o=e.onSubmit,c=e.onCancel,l=e.recaptchaWidgetProps,u=Object(s.a)().formatMessage
return a.a.createElement(O.b,{className:t.root,initialValues:r,onSubmit:o,"data-cy":"forgotPasswordForm-root"},a.a.createElement(C.a,{label:u({id:"forgotPasswordForm.emailAddressText",defaultMessage:"Email address"})},a.a.createElement(k.a,{autoComplete:"email",field:"email",validate:j.d,"data-cy":"email"})),_?a.a.createElement(S.a,l):"",a.a.createElement("div",{className:t.buttonContainer},a.a.createElement(E.a,{className:t.cancelButton,disabled:n,type:"button",priority:"low",onClick:c},a.a.createElement(i.a,{id:"forgotPasswordForm.cancelButtonText",defaultMessage:"Cancel"})),a.a.createElement(E.a,{className:t.submitButton,disabled:n,type:"submit",priority:"high","data-cy":"forgotPasswordForm-submitButton"},a.a.createElement(i.a,{id:"forgotPasswordForm.submitButtonText",defaultMessage:"Submit"}))))}
N.propTypes={classes:Object(o.shape)({form:o.string,buttonContainer:o.string}),initialValues:Object(o.shape)({email:o.string}),isResettingPassword:o.bool,onCancel:o.func.isRequired,onSubmit:o.func.isRequired},N.defaultProps={initialValues:{},isResettingPassword:!1}
var A=N,V=r("2V+0"),B={injectType:"singletonStyleTag",insert:"head",singleton:!0},I=(x()(V.a,B),V.a.locals||{}),z=function FormSubmissionSuccessful(e){var t=e.email,r=Object(s.a)().formatMessage,n=Object(g.a)(I,e.classes),o=r({id:"formSubmissionSuccessful.textMessage",defaultMessage:"If there is an account associated with {email} you will receive an email with a link to change your password."},{email:t})
return a.a.createElement("div",{className:n.root},a.a.createElement("h2",{className:n.title},a.a.createElement(i.a,{id:"formSubmissionSuccessful.recoverPasswordText",defaultMessage:"Recover Password"})),a.a.createElement("p",{className:n.text,"data-cy":"formSubmissionSuccessful-text"},o))},L=z
z.propTypes={classes:Object(o.shape)({root:o.string,text:o.string}),email:o.string}
var D={queries:{},mutations:{requestPasswordResetEmailMutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"requestPasswordResetEmail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"requestPasswordResetEmail"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}}],directives:[]}]}}],loc:{start:0,end:114,source:{body:"\n    mutation requestPasswordResetEmail($email: String!) {\n        requestPasswordResetEmail(email: $email)\n    }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}}},G=r("2TWI"),q={injectType:"singletonStyleTag",insert:"head",singleton:!0},U=(x()(G.a,q),G.a.locals||{})
function forgotPassword_ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var W=function ForgotPassword(e){var t=e.initialValues,r=e.onCancel,o=Object(s.a)().formatMessage,c=function useForgotPassword(e){var t=e.onCancel,r=e.mutations,a=Object(n.useState)(!1),o=l()(a,2),s=o[0],i=o[1],c=Object(n.useState)(null),u=l()(c,2),d=u[0],g=u[1],f=Object(v.useMutation)(r.requestPasswordResetEmailMutation),p=l()(f,2),m=p[0],h=p[1],y=h.error,O=h.loading,j=Object(P.a)({currentForm:"CUSTOMER_FORGOT_PASSWORD",formAction:"forgotPassword"}),E=j.recaptchaLoading,C=j.generateReCaptchaData,S=j.recaptchaWidgetProps,k=Object(n.useCallback)((T=w()(b.a.mark(function _callee(e){var t,r
return b.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,n.prev=1,n.next=4,C()
case 4:return r=n.sent,n.next=7,m(_objectSpread({variables:{email:t}},r))
case 7:g(t),i(!0),n.next=14
break
case 11:n.prev=11,n.t0=n.catch(1),i(!1)
case 14:case"end":return n.stop()}},_callee,null,[[1,11]])})),function(e){return T.apply(this,arguments)}),[C,m])
var T
return{forgotPasswordEmail:d,formErrors:[y],handleCancel:Object(n.useCallback)(function(){t()},[t]),handleFormSubmit:k,hasCompleted:s,isResettingPassword:O||E,recaptchaWidgetProps:S}}(function forgotPassword_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?forgotPassword_ownKeys(Object(r),!0).forEach(function(t){p()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):forgotPassword_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({onCancel:r},D)),u=c.forgotPasswordEmail,d=c.formErrors,f=c.handleCancel,m=c.handleFormSubmit,h=c.hasCompleted,O=c.isResettingPassword,j=c.recaptchaWidgetProps,E=Object(g.a)(U,e.classes),C=o({id:"forgotPassword.instructions",defaultMessage:"Please enter the email address associated with this account."}),S=h?a.a.createElement(L,{email:u}):a.a.createElement(n.Fragment,null,a.a.createElement("h2",{"data-cy":"ForgotPassword-title",className:E.title},a.a.createElement(i.a,{id:"forgotPassword.recoverPasswordText",defaultMessage:"Recover Password"})),a.a.createElement("p",{"data-cy":"ForgotPassword-instructions",className:E.instructions},C),a.a.createElement(A,{initialValues:t,isResettingPassword:O,onSubmit:m,onCancel:f,recaptchaWidgetProps:j}),a.a.createElement(y.a,{errors:d}))
return a.a.createElement("div",{className:E.root},S)},X=W
W.propTypes={classes:Object(o.shape)({instructions:o.string,root:o.string}),initialValues:Object(o.shape)({email:o.string}),onCancel:o.func},W.defaultProps={onCancel:function onCancel(){}}
var Q=r("UPvi"),H=r("E/YH"),K={injectType:"singletonStyleTag",insert:"head",singleton:!0},Y=(x()(H.a,K),H.a.locals||{}),$=function ForgotPasswordPage(e){var t=Object(g.a)(Y,e.classes),r=function useForgotPasswordPage(e){var t=e.signedInRedirectUrl,r=e.signInPageUrl,a=Object(u.g)(),o=Object(d.b)(),s=l()(o,1)[0].isSignedIn,i=Object(n.useMemo)(function(){return a&&a.location.state?a.location.state:{}},[a])
return Object(n.useEffect)(function(){s&&t&&a.push(t)},[a,s,t]),{forgotPasswordProps:{onCancel:Object(n.useCallback)(function(){r&&a.push(r,i)},[a,i,r])}}}(e).forgotPasswordProps,o=Object(s.a)().formatMessage
return a.a.createElement("div",{className:t.root},a.a.createElement(Q.b,null,o({id:"forgotPasswordPage.title",defaultMessage:"Forgot Your Password?"})),a.a.createElement("h1",{className:t.header},a.a.createElement(i.a,{id:"forgotPasswordPage.header",defaultMessage:"Forgot Your Password?"})),a.a.createElement("div",{className:t.contentContainer},a.a.createElement(X,r)))}
$.defaultProps={signedInRedirectUrl:"/order-history",signInPageUrl:"/sign-in"},$.propTypes={classes:Object(o.shape)({root:o.string,header:o.string,contentContainer:o.string}),signedInRedirectUrl:o.string,signInPageUrl:o.string}
var J=$},"9zHA":function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,".errorMessage-root-3ug {\n}\n\n.errorMessage-errorMessage-18_ {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n",""]),a.locals={root:"errorMessage-root-3ug",errorMessage:"errorMessage-errorMessage-18_"},t.a=a},"E/YH":function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,".forgotPasswordPage-root-3Cw {\n    display: grid;\n    justify-content: center;\n    padding: 2.5rem 0;\n    text-align: center;\n    grid-template-columns: minmax(auto, 512px);\n    row-gap: 2rem;\n}\n\n.forgotPasswordPage-header-2zl {\n    display: none;\n    font-family: var(--venia-global-fontFamily-serif);\n}\n\n.forgotPasswordPage-root-3Cw h2 {\n    font-size: 20px;\n    line-height: 24px;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-top: 20px;\n    margin-bottom: 15px;\n}\n\n.forgotPasswordPage-root-3Cw input {\n    border-radius: 0;\n    border-width: 1px;\n}\n\n.forgotPasswordPage-root-3Cw button {\n    border-radius: 4px;\n    background: white;\n    color: var(--venia-global-color-button);\n    border-color: var(--venia-global-color-button);\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 16px;\n    max-width: 100%;\n    min-height: 50px;\n    border-width: 1px;\n}\n\n.forgotPasswordPage-root-3Cw button[type='submit'] {\n    border-color: var(--venia-global-color-button);\n    background: var(--venia-global-color-button);\n    color: white;\n}\n\n.forgotPasswordPage-root-3Cw button:hover {\n    opacity: 0.8;\n}\n\n@media (min-width: 961px) {\n    .forgotPasswordPage-contentContainer-3ch {\n        padding-bottom: 2rem;\n        border: 2px solid rgb(var(--venia-global-color-border));\n        border-radius: 0.375rem;\n        background-color: white;\n    }\n}\n\n@media (max-width: 640px) {\n    .forgotPasswordPage-root-3Cw button {\n        padding-top: 5px;\n        min-height: 45px;\n        font-size: 14px;\n        line-height: 16px;\n    }\n}\n",""]),a.locals={root:"forgotPasswordPage-root-3Cw",header:"forgotPasswordPage-header-2zl",contentContainer:"forgotPasswordPage-contentContainer-3ch"},t.a=a},VY2t:function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,".googleReCaptcha-root-riG {\n}\n",""]),a.locals={root:"googleReCaptcha-root-riG mt-4"},t.a=a},YXoo:function(e,t,r){"use strict"
var n=r("PBB4"),a=r.n(n),o=r("jUrM"),s=a()(function(e){return e[1]})
s.i(o.a,"",!0),s.push([e.i,".forgotPasswordForm-root-bw0 {\n    display: grid;\n    gap: 0.9375rem;\n    justify-items: stretch;\n}\n\n.forgotPasswordForm-buttonContainer-26D {\n    align-items: center;\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    margin-top: 1rem;\n    text-align: center;\n}\n\n.forgotPasswordForm-cancelButton-OIg {\n\n    min-width: 9rem;\n}\n\n.forgotPasswordForm-submitButton-1vm {\n\n    min-width: 9rem;\n}\n",""]),s.locals={root:"forgotPasswordForm-root-bw0",buttonContainer:"forgotPasswordForm-buttonContainer-26D",cancelButton:"forgotPasswordForm-cancelButton-OIg "+o.a.locals.root_lowPriority,submitButton:"forgotPasswordForm-submitButton-1vm "+o.a.locals.root_highPriority},t.a=s},dTQg:function(e,t,r){"use strict"
var n=r("ERkP"),a=r.n(n),o=r("aWzz"),s=r("6Xjj"),i=r("kQwz"),c={behavior:"smooth",block:"center"},l=r("y1Xp"),u=r("LboF"),d=r.n(u),g=r("9zHA"),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(d()(g.a,f),g.a.locals||{}),m=a.a.forwardRef(function(e,t){var r=e.children,n=Object(l.a)(p,e.classes)
return a.a.createElement("div",{className:n.root,ref:t},a.a.createElement("span",{className:n.errorMessage},r))}),b=m
m.propTypes={classes:Object(o.shape)({root:o.string,errorMessage:o.string}),children:o.node}
var h=r("3VoT"),w={injectType:"singletonStyleTag",insert:"head",singleton:!0},v=(d()(h.a,w),h.a.locals||{}),P=function FormError(e){var t=e.classes,r=e.errors,o=e.scrollOnError,u=function useFormError(e){var t=e.errors,r=Object(i.a)().formatMessage
return{errorMessage:Object(n.useMemo)(function(){var e=r({id:"formError.errorMessage",defaultMessage:"An error has occurred. Please check the input and try again."})
return Object(s.a)(t,e)},[t,r])}}({errors:r}).errorMessage,d=Object(n.useRef)(null)
!function useScrollIntoView(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c
Object(n.useEffect)(function(){e.current&&e.current instanceof HTMLElement&&t&&e.current.scrollIntoView(r)},[r,e,t])}(d,o&&u)
var g=Object(l.a)(v,t)
return u?a.a.createElement(b,{classes:g,ref:d},u):null}
t.a=P
P.propTypes={classes:Object(o.shape)({root:o.string,errorMessage:o.string}),errors:Object(o.arrayOf)(Object(o.instanceOf)(Error)),scrollOnError:o.bool},P.defaultProps={scrollOnError:!0}},pfjg:function(e,t,r){"use strict"
var n=r("ERkP"),a=r.n(n),o=r("aWzz"),s=r("y1Xp"),i=r("LboF"),c=r.n(i),l=r("VY2t"),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(c()(l.a,u),l.a.locals||{}),g=function GoogleReCaptcha(e){var t=e.containerElement,r=void 0===t?function(){}:t,n=e.shouldRender,o=void 0!==n&&n,i=Object(s.a)(d,e.classes)
return o?a.a.createElement("div",{ref:r,className:i.root}):null}
g.propTypes={classes:Object(o.shape)({root:o.string}),containerElement:o.func.isRequired,shouldRender:o.bool.isRequired}
t.a=g}}])
