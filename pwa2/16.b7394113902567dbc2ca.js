/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HOj0:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return g}),r.d(t,"FilterSidebarShimmer",function(){return w.a})
var a=r("ddV6"),n=r.n(a),i=r("ERkP"),l=r.n(i),o=r("6sB8"),c=r("aWzz"),s=r("x8tt"),u=r("zCf4"),f=r("I3q4"),d=r("YyrX"),b=r("Ypfz"),p=r("Q2Pa"),m=r("q/76")
function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var i=0,l=function F(){}
return{s:l,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return c=e.done,e},e:function e(t){u=!0,o=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw o}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}var y=r("h8Zp"),O=r("sPgY"),h=r("jMQJ"),v=r("tfQx"),j=function FilterSidebar(e){var t=e.filters,r=e.filterCountToOpen,a=function useFilterSidebar(e){var t=e.filters,r=Object(d.a)(m.a,e.operations).getFilterInputsQuery,a=Object(i.useState)(!1),l=n()(a,2),o=l[0],c=l[1],y=Object(f.b)(),O=n()(y,2),h=O[0].drawer,v=O[1],j=v.toggleDrawer,g=v.closeDrawer,w=Object(b.a)(),A=n()(w,2),k=A[0],C=A[1],E=Object(i.useRef)(null),S="filter"===h,I=Object(u.g)(),_=Object(u.h)(),M=_.pathname,T=_.search,F=Object(s.useQuery)(r).data,N=Object(i.useMemo)(function(){return t.map(function(e){return e.attribute_code})},[t]),R=Object(i.useMemo)(function(){var e=new Set
return"/search.html"!==M&&e.add("category_id"),e},[M]),H=Object(i.useMemo)(function(){var e,t=new Set,r=_createForOfIteratorHelper(F?F.__type.inputFields:[])
try{for(r.s();!(e=r.n()).done;){var a=e.value.name,n=N.includes(a),i=!R.has(a)
n&&i&&t.add(a)}}catch(e){r.e(e)}finally{r.f()}return t},[R,N,F]),z=Object(i.useMemo)(function(){var e,r=new Map,a=new Set,n=new Map,i=_createForOfIteratorHelper(t)
try{for(i.s();!(e=i.n()).done;){var l=e.value,o=l.options,c=l.label,s=l.attribute_code
if(H.has(s)){var u=[]
r.set(s,c),a.add("".concat(s,"[filter]"))
var f,d=_createForOfIteratorHelper(o)
try{for(d.s();!(f=d.n()).done;){var b=f.value,m=b.label,y=b.value
u.push({title:Object(p.f)(m),value:y})}}catch(e){d.e(e)}finally{d.f()}n.set(s,u)}}}catch(e){i.e(e)}finally{i.f()}return[r,a,n]},[t,H]),Q=n()(z,3),P=Q[0],Y=Q[1],x=Q[2]
Object(i.useEffect)(function(){if(o){var e=Object(p.d)(T,Y,k)
I.push({pathname:M,search:e}),c(!1)}},[Y,k,I,o,M,T])
var B=Object(i.useCallback)(function(){j("filter")},[j]),D=Object(i.useCallback)(function(){g()},[g]),J=Object(i.useCallback)(function(){c(!0),D()},[D]),L=Object(i.useCallback)(function(){C.clear(),c(!0)},[C,c]),q=Object(i.useCallback)(function(e){if(S)switch(e.keyCode){case 27:D()}},[S,D])
return Object(i.useEffect)(function(){var e=null===E.current&&"filter"===h,t="filter"===E.current&&null===h
if(e||t){var r=Object(p.e)(T,Y,x)
C.setItems(r)}t&&D(),E.current=h},[h,C,x,Y,T,D]),Object(i.useEffect)(function(){var e=Object(p.e)(T,Y,x)
C.setItems(e)},[C,x,Y,T]),{filterApi:C,filterItems:x,filterKeys:Y,filterNames:P,filterState:k,handleApply:J,handleClose:D,handleKeyDownActions:q,handleOpen:B,handleReset:L,isApplying:o,isOpen:S}}({filters:t}),c=a.filterApi,j=a.filterItems,g=a.filterNames,w=a.filterState,A=a.handleApply,k=a.handleReset,C=Object(i.useRef)(),E=Object(d.a)(v.a,e.classes),S=Object(i.useCallback)(function(){var e=C.current
if(e&&"function"==typeof e.getBoundingClientRect){var t=e.getBoundingClientRect().top,r=window.scrollY+t-150
window.scrollTo(0,r)}A.apply(void 0,arguments)},[A,C]),I=Object(i.useMemo)(function(){return Array.from(j,function(e,t){var a=n()(e,2),i=a[0],o=a[1],s=w.get(i),u=g.get(i)
return l.a.createElement(h.a,{key:i,filterApi:c,filterState:s,group:i,items:o,name:u,onApply:S,initialOpen:t<r})})},[c,j,g,w,r,S]),_=w.size?l.a.createElement("div",{className:E.action},l.a.createElement(y.a,{type:"button",onClick:k},l.a.createElement(o.a,{id:"filterModal.action",defaultMessage:"Clear all"}))):null
return l.a.createElement("aside",{className:E.root,ref:C,"aria-live":"polite","aria-busy":"false"},l.a.createElement("div",{className:E.body},l.a.createElement("div",{className:E.header},l.a.createElement("h2",{className:E.headerTitle},l.a.createElement(o.a,{id:"filterModal.headerTitle",defaultMessage:"Filters"}))),l.a.createElement(O.a,{filterApi:c,filterNames:g,filterState:w,onRemove:S}),_,l.a.createElement("ul",{className:E.blocks},I)))}
j.defaultProps={filterCountToOpen:3},j.propTypes={classes:Object(c.shape)({action:c.string,blocks:c.string,body:c.string,header:c.string,headerTitle:c.string,root:c.string,root_open:c.string}),filters:Object(c.arrayOf)(Object(c.shape)({attribute_code:c.string,items:c.array})),filterCountToOpen:c.number}
var g=j,w=r("H/IE")}}])
