/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{YQ8e:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return C})
var r=n("q1tI"),a=n.n(r),c=n("17x9"),o=n("dDsW"),s=n("kriW"),i=n("J4zp"),l=n.n(i),u=n("lSNA"),d=n.n(u),g=n("Ty5D"),p=n("FITH")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){d()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=["email","firstName","lastName"],f=e=>{var t=e.signedInRedirectUrl,n=e.signInPageUrl,a=Object(g.g)(),c=Object(p.b)(),o=l()(c,1)[0].isSignedIn,s=Object(g.h)().search,i=Object(r.useMemo)(()=>a&&a.location.state?a.location.state:{},[a]),u=i.from||null
Object(r.useEffect)(()=>{o&&(u||t)&&a.push(u||t)},[u,a,o,t])
var d=Object(r.useCallback)(()=>{n&&a.push(n,i)},[a,i,n])
return{createAccountProps:{initialValues:Object(r.useMemo)(()=>(e=>{var t=new URLSearchParams(e)
return b.reduce((e,n)=>_objectSpread(_objectSpread({},e),{},{[n]:t.get(n)}),{})})(s),[s]),isCancelButtonHidden:!1,onCancel:d}}},m=n("y1Xp"),O=n("+h8t"),j=n("UPvi"),P=n("LboF"),y=n.n(P),h=n("n4HV"),w={injectType:"singletonStyleTag",insert:"head",singleton:!0},v=(y()(h.a,w),h.a.locals||{}),A=e=>{var t=Object(m.a)(v,e.classes),n=f(e).createAccountProps,r=Object(o.a)().formatMessage
return a.a.createElement("div",{className:t.root},a.a.createElement(j.b,null,r({id:"createAccountPage.title",defaultMessage:"Create an Account"})),a.a.createElement("h1",{className:t.header},a.a.createElement(s.a,{id:"createAccountPage.header",defaultMessage:"Create an Account"})),a.a.createElement("div",{className:t.contentContainer},a.a.createElement(O.a,n)))}
A.defaultProps={signedInRedirectUrl:"/order-history",signInPageUrl:"/sign-in"},A.propTypes={classes:Object(c.shape)({root:c.string,header:c.string,contentContainer:c.string}),signedInRedirectUrl:c.string,signInPageUrl:c.string}
var C=A},n4HV:function(e,t,n){"use strict"
var r=n("JPst"),a=n.n(r)()(function(e){return e[1]})
a.push([e.i,".createAccountPage-root-5tc {\n    grid-template-columns: minmax(auto, 512px);\n}\n\n.createAccountPage-header-77p {\n}\n\n.createAccountPage-contentContainer-0Td {\n}\n",""]),a.locals={root:"createAccountPage-root-5tc gap-y-md grid justify-center px-0 py-md text-center",header:"createAccountPage-header-77p font-serif",contentContainer:"createAccountPage-contentContainer-0Td lg_border-2 lg_border-solid lg_border-subtle lg_pb-md lg_rounded-md"},t.a=a}}])
