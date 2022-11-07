/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{SAkj:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return g}),r.d(t,"FilterSidebarShimmer",function(){return w.a})
var a=r("J4zp"),n=r.n(a),l=r("ERkP"),i=r.n(l),o=r("6sB8"),c=r("aWzz"),s=r("x8tt"),u=r("zCf4"),f=r("OlZo"),d=r("y1Xp"),b=r("Mhql"),p=r("+wQL"),m=r("qykw")
function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var l=0,i=function F(){}
return{s:i,n:function n(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return c=e.done,e},e:function e(t){u=!0,o=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw o}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r]
return a}var y=r("6QXU"),O=r("t1DO"),h=r("th2e"),v=r("bGkD"),j=function FilterSidebar(e){var t=e.filters,r=e.filterCountToOpen,a=function useFilterSidebar(e){var t=e.filters,r=Object(d.a)(m.a,e.operations).getFilterInputsQuery,a=Object(l.useState)(!1),i=n()(a,2),o=i[0],c=i[1],y=Object(f.b)(),O=n()(y,2),h=O[0].drawer,v=O[1],j=v.toggleDrawer,g=v.closeDrawer,w=Object(b.a)(),A=n()(w,2),k=A[0],S=A[1],C=Object(l.useRef)(null),E="filter"===h,_=Object(u.g)(),M=Object(u.h)(),I=M.pathname,T=M.search,F=Object(s.useQuery)(r).data,N=Object(l.useMemo)(function(){return t.map(function(e){return e.attribute_code})},[t]),R=Object(l.useMemo)(function(){var e=new Set
return"/search.html"!==I&&e.add("category_id"),e},[I]),z=Object(l.useMemo)(function(){var e,t=new Set,r=_createForOfIteratorHelper(F?F.__type.inputFields:[])
try{for(r.s();!(e=r.n()).done;){var a=e.value.name,n=N.includes(a),l=!R.has(a)
n&&l&&t.add(a)}}catch(e){r.e(e)}finally{r.f()}return t},[R,N,F]),D=Object(l.useMemo)(function(){var e,r=new Map,a=new Set,n=new Map,l=_createForOfIteratorHelper(t)
try{for(l.s();!(e=l.n()).done;){var i=e.value,o=i.options,c=i.label,s=i.attribute_code
if(z.has(s)){var u=[]
r.set(s,c),a.add("".concat(s,"[filter]"))
var f,d=_createForOfIteratorHelper(o)
try{for(d.s();!(f=d.n()).done;){var b=f.value,m=b.label,y=b.value
u.push({title:Object(p.e)(m),value:y})}}catch(e){d.e(e)}finally{d.f()}n.set(s,u)}}}catch(e){l.e(e)}finally{l.f()}return[r,a,n]},[t,z]),L=n()(D,3),H=L[0],Q=L[1],B=L[2]
Object(l.useEffect)(function(){if(o){var e=Object(p.c)(T,Q,k)
_.push({pathname:I,search:e}),c(!1)}},[Q,k,_,o,I,T])
var J=Object(l.useCallback)(function(){j("filter")},[j]),q=Object(l.useCallback)(function(){g()},[g]),x=Object(l.useCallback)(function(){c(!0),q()},[q]),K=Object(l.useCallback)(function(){S.clear(),c(!0)},[S,c]),P=Object(l.useCallback)(function(e){if(E)switch(e.keyCode){case 27:q()}},[E,q])
return Object(l.useEffect)(function(){var e=null===C.current&&"filter"===h,t="filter"===C.current&&null===h
if(e||t){var r=Object(p.d)(T,Q,B)
S.setItems(r)}t&&q(),C.current=h},[h,S,B,Q,T,q]),Object(l.useEffect)(function(){var e=Object(p.d)(T,Q,B)
S.setItems(e)},[S,B,Q,T]),{filterApi:S,filterItems:B,filterKeys:Q,filterNames:H,filterState:k,handleApply:x,handleClose:q,handleKeyDownActions:P,handleOpen:J,handleReset:K,isApplying:o,isOpen:E}}({filters:t}),c=a.filterApi,j=a.filterItems,g=a.filterNames,w=a.filterState,A=a.handleApply,k=a.handleReset,S=Object(l.useRef)(),C=Object(d.a)(v.a,e.classes),E=Object(l.useCallback)(function(){var e=S.current
if(e&&"function"==typeof e.getBoundingClientRect){var t=e.getBoundingClientRect().top,r=window.scrollY+t-150
window.scrollTo(0,r)}A.apply(void 0,arguments)},[A,S]),_=Object(l.useMemo)(function(){return Array.from(j,function(e,t){var a=n()(e,2),l=a[0],o=a[1],s=w.get(l),u=g.get(l)
return i.a.createElement(h.a,{key:l,filterApi:c,filterState:s,group:l,items:o,name:u,onApply:E,initialOpen:t<r})})},[c,j,g,w,r,E]),M=w.size?i.a.createElement("div",{className:C.action},i.a.createElement(y.a,{type:"button",onClick:k},i.a.createElement(o.a,{id:"filterModal.action",defaultMessage:"Clear all"}))):null
return i.a.createElement("aside",{className:C.root,ref:S,"aria-live":"polite","aria-busy":"false"},i.a.createElement("div",{className:C.body},i.a.createElement("div",{className:C.header},i.a.createElement("h2",{className:C.headerTitle},i.a.createElement(o.a,{id:"filterModal.headerTitle",defaultMessage:"Filters"}))),i.a.createElement(O.a,{filterApi:c,filterNames:g,filterState:w,onRemove:E}),M,i.a.createElement("ul",{className:C.blocks},_)))}
j.defaultProps={filterCountToOpen:3},j.propTypes={classes:Object(c.shape)({action:c.string,blocks:c.string,body:c.string,header:c.string,headerTitle:c.string,root:c.string,root_open:c.string}),filters:Object(c.arrayOf)(Object(c.shape)({attribute_code:c.string,items:c.array})),filterCountToOpen:c.number}
var g=j,w=r("LlM3")}}])
