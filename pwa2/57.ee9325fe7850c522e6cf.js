/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"+Mpj":function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return C})
var r=n("ERkP"),a=n.n(r),c=n("aWzz"),o=n("kQwz"),i=n("6sB8"),s=n("ddV6"),u=n.n(s),l=n("KEM+"),g=n.n(l),d=n("zCf4"),p=n("o353")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){g()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=["email","firstName","lastName"],f=function useCreateAccountPage(e){var t=e.signedInRedirectUrl,n=e.signInPageUrl,a=Object(d.g)(),c=Object(p.b)(),o=u()(c,1)[0].isSignedIn,i=Object(d.h)().search,s=Object(r.useMemo)(function(){return a&&a.location.state?a.location.state:{}},[a]),l=s.from||null
Object(r.useEffect)(function(){o&&(l||t)&&a.push(l||t)},[l,a,o,t])
var f=Object(r.useCallback)(function(){n&&a.push(n,s)},[a,s,n])
return{createAccountProps:{initialValues:Object(r.useMemo)(function(){return function getCreateAccountInitialValues(e){var t=new URLSearchParams(e)
return b.reduce(function(e,n){return _objectSpread(_objectSpread({},e),{},g()({},n,t.get(n)))},{})}(i)},[i]),isCancelButtonHidden:!1,onCancel:f}}},m=n("YyrX"),O=n("pcRz"),j=n("lYeQ"),P=n("LboF"),h=n.n(P),y=n("xcBD"),w={injectType:"singletonStyleTag",insert:"head",singleton:!0},v=(h()(y.a,w),y.a.locals||{}),A=function CreateAccountPage(e){var t=Object(m.a)(v,e.classes),n=f(e).createAccountProps,r=Object(o.a)().formatMessage
return a.a.createElement("div",{className:t.root},a.a.createElement(j.b,null,r({id:"createAccountPage.title",defaultMessage:"Create an Account"})),a.a.createElement("h1",{className:t.header},a.a.createElement(i.a,{id:"createAccountPage.header",defaultMessage:"Create an Account"})),a.a.createElement("div",{className:t.contentContainer},a.a.createElement(O.a,n)))}
A.defaultProps={signedInRedirectUrl:"/order-history",signInPageUrl:"/sign-in"},A.propTypes={classes:Object(c.shape)({root:c.string,header:c.string,contentContainer:c.string}),signedInRedirectUrl:c.string,signInPageUrl:c.string}
var C=A},xcBD:function(e,t,n){"use strict"
var r=n("PBB4"),a=n.n(r)()(function(e){return e[1]})
a.push([e.i,".createAccountPage-root-2Vh {\n    display: grid;\n    justify-content: center;\n    padding: 2.5rem 0;\n    text-align: center;\n    grid-template-columns: minmax(auto, 512px);\n    row-gap: 2rem;\n}\n\n.createAccountPage-header-2Km {\n    font-family: var(--venia-global-fontFamily-serif);\n}\n\n@media (min-width: 961px) {\n    .createAccountPage-contentContainer-1OK {\n        padding-bottom: 2rem;\n        border: 2px solid rgb(var(--venia-global-color-border));\n        border-radius: 0.375rem;\n    }\n}\n",""]),a.locals={root:"createAccountPage-root-2Vh",header:"createAccountPage-header-2Km",contentContainer:"createAccountPage-contentContainer-1OK"},t.a=a}}])
