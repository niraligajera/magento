/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"7iuD":function(e,n,t){"use strict"
t.r(n),t.d(n,"default",function(){return u})
var i=t("RIqP"),o=t.n(i),r=t("ERkP"),a=t.n(r),d=t("LboF"),s=t.n(d),l=t("E8wV"),g={injectType:"singletonStyleTag",insert:"head",singleton:!0},c=(s()(l.a,g),l.a.locals||{}),p=t("y1Xp"),m=t("aWzz"),v=function Video(e){var n=Object(p.a)(c,e.classes),t=e.url,i=void 0===t?"":t,r=e.autoplay,d=e.muted,s=e.maxWidth,l=e.textAlign,g=e.border,m=e.borderColor,v=e.borderWidth,u=e.borderRadius,w=e.marginTop,h=e.marginRight,b=e.marginBottom,f=e.marginLeft,y=e.paddingTop,R=e.paddingRight,E=e.paddingBottom,B=e.paddingLeft,x=e.cssClasses,T=void 0===x?[]:x,W={textAlign:l,marginTop:w,marginRight:h,marginBottom:b,marginLeft:f},j={maxWidth:s},N={border:g,borderColor:m,borderWidth:v,borderRadius:u,paddingTop:y,paddingRight:R,paddingBottom:E,paddingLeft:B},V=new RegExp("^(?:https?://|//)?(?:www\\.|m\\.)?(?:youtu\\.be/|youtube\\.com/(?:embed/|v/|watch\\?v=|watch\\?.+&v=))([\\w-]{11})(?![\\w-])"),L=new RegExp("https?://(?:www\\.|player\\.)?vimeo.com/(?:channels/(?:\\w+/)?|groups/([^/]*)/videos/|album/(\\d+)/video/|video/|)(\\d+)(?:$|/|\\?)"),Video=""
return i&&i.length&&(V.test(i)||L.test(i))?Video=a.a.createElement("div",{className:n.container},a.a.createElement("iframe",{className:n.video,title:i,frameBorder:"0",allowFullScreen:"1",loading:"lazy",src:i})):i&&i.length&&(Video=a.a.createElement("div",{className:n.container},a.a.createElement("video",{className:n.video,src:i,autoPlay:r,muted:d,frameBorder:"0",controls:!0}))),a.a.createElement("div",{style:W,className:[n.root].concat(o()(T)).join(" ")},a.a.createElement("div",{style:j,className:n.inner},a.a.createElement("div",{style:N,className:n.wrapper},Video)))}
v.propTypes={classes:Object(m.shape)({root:m.string,inner:m.string,wrapper:m.string,container:m.string,video:m.string}),url:m.string,autoplay:m.bool,muted:m.bool,maxWidth:m.string,textAlign:m.string,border:m.string,borderColor:m.string,borderWidth:m.string,borderRadius:m.string,marginTop:m.string,marginRight:m.string,marginBottom:m.string,marginLeft:m.string,paddingTop:m.string,paddingRight:m.string,paddingBottom:m.string,cssClasses:Object(m.arrayOf)(m.string)}
var u=v},E8wV:function(e,n,t){"use strict"
var i=t("PBB4"),o=t.n(i)()(function(e){return e[1]})
o.push([e.i,".video-root-cuo {\n    font-size: 0;\n}\n\n.video-inner-3_A {\n    display: inline-block;\n    width: 100%;\n}\n\n.video-wrapper-2Fc {\n    overflow: hidden;\n    transform: translateZ(0px);\n}\n\n.video-container-2Zj {\n    overflow: hidden;\n    padding-top: 56.25%;\n    position: relative;\n}\n\n.video-video-2WD {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n",""]),o.locals={root:"video-root-cuo",inner:"video-inner-3_A",wrapper:"video-wrapper-2Fc",container:"video-container-2Zj",video:"video-video-2WD"},n.a=o}}])
