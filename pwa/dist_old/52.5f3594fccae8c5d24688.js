/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2gSE":function(e,n,t){"use strict"
t.r(n),t.d(n,"default",function(){return w})
var a=t("q1tI"),r=t.n(a),s=t("17x9"),o=t("dDsW"),c=t("kriW"),i=t("J4zp"),g=t.n(i),l=t("Ty5D"),d=t("FITH"),u=t("y1Xp"),p=t("UPvi"),b=t("i8h6"),P=t("LboF"),m=t.n(P),h=t("mhba"),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},I=(m()(h.a,f),h.a.locals||{}),j=e=>{var n=Object(u.a)(I,e.classes),t=(e=>{var n=e.createAccountPageUrl,t=e.forgotPasswordPageUrl,r=e.signedInRedirectUrl,s=Object(l.g)(),o=Object(d.b)(),c=g()(o,1)[0].isSignedIn,i=Object(a.useMemo)(()=>s&&s.location.state?s.location.state:{},[s]),u=i.from||null
return Object(a.useEffect)(()=>{c&&(u||r)&&s.push(u||r)},[s,c,u,r]),{signInProps:{classes:{modal_active:void 0},showCreateAccount:Object(a.useCallback)(()=>{n&&s.push(n,i)},[n,s,i]),showForgotPassword:Object(a.useCallback)(()=>{t&&s.push(t,i)},[t,s,i])}}})(e).signInProps,s=Object(o.a)().formatMessage
return r.a.createElement("div",{className:n.root},r.a.createElement(p.b,null,s({id:"signInPage.title",defaultMessage:"Sign In"})),r.a.createElement("h1",{className:n.header},r.a.createElement(c.a,{id:"signInPage.header",defaultMessage:"Sign In or Create Account"})),r.a.createElement("div",{className:n.contentContainer},r.a.createElement(b.a,t)))}
j.defaultProps={createAccountPageUrl:"/create-account",forgotPasswordPageUrl:"/forgot-password",signedInRedirectUrl:"/order-history"},j.propTypes={classes:Object(s.shape)({root:s.string,header:s.string,contentContainer:s.string}),createAccountPageUrl:s.string,forgotPasswordPageUrl:s.string,signedInRedirectUrl:s.string}
var w=j},mhba:function(e,n,t){"use strict"
var a=t("JPst"),r=t.n(a)()(function(e){return e[1]})
r.push([e.i,".signInPage-root-Lz7 {\n    grid-template-columns: minmax(auto, 512px);\n}\n\n.signInPage-header-HZU {\n}\n\n.signInPage-contentContainer-Wjb {\n}\n",""]),r.locals={root:"signInPage-root-Lz7 gap-y-md grid justify-center px-0 py-lg text-center",header:"signInPage-header-HZU font-serif",contentContainer:"signInPage-contentContainer-Wjb lg_border-2 lg_border-solid lg_border-subtle lg_pb-md lg_rounded-md"},n.a=r}}])