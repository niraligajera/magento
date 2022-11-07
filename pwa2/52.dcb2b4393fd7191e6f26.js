/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{SKbs:function(t,n,i){"use strict"
var r=i("PBB4"),o=i.n(r)()(function(t){return t[1]})
o.push([t.i,".tabItem-root-39G {\n    min-height: inherit;\n}\n",""]),o.locals={root:"tabItem-root-39G"},n.a=o},"y2+v":function(t,n,i){"use strict"
i.r(n),i.d(n,"default",function(){return h})
var r=i("ERkP"),o=i.n(r),e=i("GldI"),a=i("ouhz"),g=i("YyrX"),d=i("LboF"),s=i.n(d),c=i("SKbs"),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(s()(c.a,m),c.a.locals||{}),l=i("aWzz"),p=globalThis.matchMedia,u=function TabItem(t){var n=Object(g.a)(b,t.classes),i=t.minHeight,r=t.verticalAlignment,d=t.backgroundColor,s=t.desktopImage,c=t.mobileImage,m=t.backgroundSize,l=t.backgroundPosition,u=t.backgroundAttachment,h=t.backgroundRepeat,k=void 0===h?"repeat":h,f=t.textAlign,v=t.border,y=t.borderColor,R=t.borderWidth,T=t.borderRadius,j=t.marginTop,w=t.marginRight,A=t.marginBottom,C=t.marginLeft,I=t.paddingTop,B=t.paddingRight,O=t.paddingBottom,x=t.paddingLeft,L=t.children,z=t.cssClasses,S=void 0===z?[]:z,P=s
c&&p&&p("(max-width: 768px)").matches&&(P=c)
var W={minHeight:i,verticalAlignment:r,backgroundColor:d,textAlign:f,border:v,borderColor:y,borderWidth:R,borderRadius:T,marginTop:j,marginRight:w,marginBottom:A,marginLeft:C,paddingTop:I,paddingRight:B,paddingBottom:O,paddingLeft:x}
if(P){var G=Object(a.a)(P,{type:"image-wysiwyg",quality:85})
W.backgroundImage="url(".concat(G,")"),W.backgroundSize=m,W.backgroundPosition=l,W.backgroundAttachment=u,W.backgroundRepeat=k}return r&&(W.display="flex",W.justifyContent=Object(e.j)(r),W.flexDirection="column"),o.a.createElement("div",{style:W,className:[S,n.root].join(" ")},L)}
u.propTypes={classes:Object(l.shape)({root:l.string}),tabName:l.string,verticalAlignment:Object(l.oneOf)(["top","middle","bottom"]),minHeight:l.string,backgroundColor:l.string,desktopImage:l.string,mobileImage:l.string,backgroundSize:l.string,backgroundPosition:l.string,backgroundAttachment:l.string,backgroundRepeat:l.string,textAlign:l.string,border:l.string,borderColor:l.string,borderWidth:l.string,borderRadius:l.string,marginTop:l.string,marginRight:l.string,marginBottom:l.string,marginLeft:l.string,paddingTop:l.string,paddingRight:l.string,paddingBottom:l.string,paddingLeft:l.string,cssClasses:Object(l.arrayOf)(l.string)}
var h=u}}])
