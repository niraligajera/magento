/*!
 * @version 956525a-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{MzPE:function(t,n,r){"use strict"
var e=r("PBB4"),o=r.n(e)()(function(t){return t[1]})
o.push([t.i,".buttons-root-sGM {\n    max-width: 100%;\n}\n.buttons-root-sGM > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-sGM button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-3wH {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-VwT > div {\n    -webkit-margin-end: 0.5rem;\n            margin-inline-end: 0.5rem;\n}\n",""]),o.locals={root:"buttons-root-sGM",stacked:"buttons-stacked-3wH",inline:"buttons-inline-VwT"},n.a=o},fwGW:function(t,n,r){"use strict"
r.r(n),r.d(n,"default",function(){return w})
var e=r("RIqP"),o=r.n(e),i=r("lSNA"),a=r.n(i),s=r("J4zp"),c=r.n(s),l=r("ERkP"),d=r.n(l),u=r("LboF"),f=r.n(u),g=r("MzPE"),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(f()(g.a,p),g.a.locals||{}),y=r("aWzz"),m=r("y1Xp")
function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!o){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(t,n){if(!t)return
if("string"==typeof t)return _arrayLikeToArray(t,n)
var r=Object.prototype.toString.call(t).slice(8,-1)
"Object"===r&&t.constructor&&(r=t.constructor.name)
if("Map"===r||"Set"===r)return Array.from(t)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,n)}(t))||r&&t&&"number"==typeof t.length){o&&(t=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1
return{s:function s(){o=o.call(t)},n:function n(){var t=o.next()
return l=t.done,t},e:function e(t){d=!0,c=t},f:function f(){try{l||null==o.return||o.return()}finally{if(d)throw c}}}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length)
for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r]
return e}function ownKeys(t,n){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t)
n&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,e)}return r}var h=function Buttons(t){var n=Object(m.a)(b,t.classes),r=t.appearance,e=t.isSameWidth,i=t.textAlign,s=t.border,u=t.borderColor,f=t.borderWidth,g=t.borderRadius,p=t.marginTop,y=t.marginRight,h=t.marginBottom,w=t.marginLeft,O=t.paddingTop,v=t.paddingRight,j=t.paddingBottom,T=t.paddingLeft,x=t.children,A=t.cssClasses,k=void 0===A?[]:A,S=n["".concat(r)],P=Object(l.useRef)(null),R=d.a.useState(0),L=c()(R,2),W=L[0],B=L[1],M=function _objectSpread(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(r),!0).forEach(function(n){a()(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}({border:s,borderColor:u,borderWidth:f,borderRadius:g,marginTop:p,marginRight:y,marginBottom:h,marginLeft:w,paddingTop:O,paddingRight:v,paddingBottom:j,paddingLeft:T},{"--buttonMinWidth":W?W+"px":null})
Object(l.useLayoutEffect)(function(){if(e){var t,n=0,r=_createForOfIteratorHelper(P.current.querySelectorAll("button"))
try{for(r.s();!(t=r.n()).done;){var o=t.value.offsetWidth
o>n&&(n=o)}}catch(t){r.e(t)}finally{r.f()}B(n)}},[e])
return M.justifyContent="flex-start",i&&(M.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[i]||"flex-start",M.textAlign=i),d.a.createElement("div",{ref:P,style:M,className:[n.root,S].concat(o()(k)).join(" ")},x)}
h.propTypes={appearance:Object(y.oneOf)(["inline","stacked"]),classes:Object(y.shape)({root:y.string,stacked:y.string,inline:y.string}),isSameWidth:y.bool,textAlign:y.string,border:y.string,borderColor:y.string,borderWidth:y.string,borderRadius:y.string,marginTop:y.string,marginRight:y.string,marginBottom:y.string,marginLeft:y.string,paddingTop:y.string,paddingRight:y.string,paddingBottom:y.string,paddingLeft:y.string,cssClasses:Object(y.arrayOf)(y.string)}
var w=h}}])
