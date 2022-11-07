/*!
 * @version 956525a-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{djd6:function(e,t,n){"use strict"
var a=n("lwsE"),i=n.n(a),r=n("lSNA"),l=n.n(r),o=n("ERkP"),c=n.n(o),d=n("Vgyk")
var u=function TitleHelper(){i()(this,TitleHelper)}
l()(u,"renderMetaHeader",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:null,desc:null,meta_other:[]},t=null
return e.meta_other&&(t=e.meta_other instanceof Array&&e.meta_other.length>0?e.meta_other.map(function(e){return e}):e.meta_other),e.title&&function updateTracking(e){try{window.$zopim&&window.$zopim.livechat.sendVisitorPath({url:window.location,title:e})}catch(e){}}(e.title),c.a.createElement(d.a,null,e.title&&c.a.createElement("title",null,e.title),e.desc&&c.a.createElement("meta",{name:"description",content:e.desc}),t)}),t.a=u},"m+ye":function(e,t,n){"use strict"
n.r(t)
var a=n("ERkP"),i=n.n(a),r=n("djd6"),l=n("kQwz")
t.default=function CheckoutFailure(e){var t=Object(l.a)().formatMessage
return i.a.createElement("div",null,r.a.renderMetaHeader({title:t({id:"Payment Failure, please try again."})}),i.a.createElement("div",{style:{padding:50,textAlign:"center"}},t({id:"Payment Failure, please try again."})))}}}])
