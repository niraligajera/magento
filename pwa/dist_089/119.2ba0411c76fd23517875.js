/*! @version 12.0.0-bb701dc00a0a1d48e980 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{LYVK:function(t,i,n){"use strict"
n.r(i),n.d(i,"default",function(){return h})
var r=n("ERkP"),o=n.n(r),e=n("Tils"),a=n("STEg"),g=n("y1Xp"),d=n("LboF"),s=n.n(d),c=n("RjHh"),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(s()(c.a,m),c.a.locals||{}),l=n("aWzz"),p=globalThis.matchMedia,u=function TabItem(t){var i=Object(g.a)(b,t.classes),n=t.minHeight,r=t.verticalAlignment,d=t.backgroundColor,s=t.desktopImage,c=t.mobileImage,m=t.backgroundSize,l=t.backgroundPosition,u=t.backgroundAttachment,h=t.backgroundRepeat,k=void 0===h?"repeat":h,f=t.textAlign,R=t.border,T=t.borderColor,j=t.borderWidth,v=t.borderRadius,y=t.marginTop,w=t.marginRight,A=t.marginBottom,C=t.marginLeft,B=t.paddingTop,I=t.paddingRight,L=t.paddingBottom,O=t.paddingLeft,x=t.children,z=t.cssClasses,H=void 0===z?[]:z,P=s
c&&p&&p("(max-width: 768px)").matches&&(P=c)
var S={minHeight:n,verticalAlignment:r,backgroundColor:d,textAlign:f,border:R,borderColor:T,borderWidth:j,borderRadius:v,marginTop:y,marginRight:w,marginBottom:A,marginLeft:C,paddingTop:B,paddingRight:I,paddingBottom:L,paddingLeft:O}
if(P){var W=Object(a.a)(P,{type:"image-wysiwyg",quality:85})
S.backgroundImage="url(".concat(W,")"),S.backgroundSize=m,S.backgroundPosition=l,S.backgroundAttachment=u,S.backgroundRepeat=k}return r&&(S.display="flex",S.justifyContent=Object(e.j)(r),S.flexDirection="column"),o.a.createElement("div",{style:S,className:[H,i.root].join(" ")},x)}
u.propTypes={classes:Object(l.shape)({root:l.string}),tabName:l.string,verticalAlignment:Object(l.oneOf)(["top","middle","bottom"]),minHeight:l.string,backgroundColor:l.string,desktopImage:l.string,mobileImage:l.string,backgroundSize:l.string,backgroundPosition:l.string,backgroundAttachment:l.string,backgroundRepeat:l.string,textAlign:l.string,border:l.string,borderColor:l.string,borderWidth:l.string,borderRadius:l.string,marginTop:l.string,marginRight:l.string,marginBottom:l.string,marginLeft:l.string,paddingTop:l.string,paddingRight:l.string,paddingBottom:l.string,paddingLeft:l.string,cssClasses:Object(l.arrayOf)(l.string)}
var h=u},RjHh:function(t,i,n){"use strict"
var r=n("PBB4"),o=n.n(r)()(function(t){return t[1]})
o.push([t.i,".tabItem-root-1_K {\n    min-height: inherit;\n}\n",""]),o.locals={root:"tabItem-root-1_K"},i.a=o}}])
