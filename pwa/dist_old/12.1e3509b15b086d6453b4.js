/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{SAkj:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return A}),r.d(t,"FilterSidebarShimmer",function(){return k.a})
var a=r("J4zp"),n=r.n(a),l=r("q1tI"),i=r.n(l),o=r("kriW"),s=r("17x9"),c=r("RIqP"),u=r.n(c),f=r("+TN3"),p=r("Ty5D"),d=r("OlZo"),b=r("y1Xp"),y=r("Mhql"),m=r("+wQL"),O=r("qykw")
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
return a}var h=r("6QXU"),v=r("t1DO"),g=r("th2e"),j=r("bGkD"),w=e=>{var t=e.filters,r=e.filterCountToOpen,a=(e=>{var t=e.filters,r=Object(b.a)(O.a,e.operations).getFilterInputsQuery,a=Object(l.useState)(!1),i=n()(a,2),o=i[0],s=i[1],c=Object(d.b)(),h=n()(c,2),v=h[0].drawer,g=h[1],j=g.toggleDrawer,w=g.closeDrawer,A=Object(y.a)(),k=n()(A,2),_=k[0],S=k[1],I=Object(l.useRef)(null),C="filter"===v,E=Object(p.g)(),M=Object(p.h)(),N=M.pathname,T=M.search,F=Object(f.a)(r).data,R=Object(l.useMemo)(()=>t.map(e=>e.attribute_code),[t]),D=Object(l.useMemo)(()=>{var e=new Set
return"/search.html"!==N&&(e.add("category_id"),e.add("category_uid")),e},[N]),J=Object(l.useMemo)(()=>{var e,t=new Set,r=_createForOfIteratorHelper(F?F.__type.inputFields:[])
try{for(r.s();!(e=r.n()).done;){var a=e.value.name,n=R.includes(a),l=!D.has(a)
n&&l&&t.add(a)}}catch(e){r.e(e)}finally{r.f()}return t},[D,R,F]),L=e=>{var t=JSON.stringify(e)
return e.length<=2&&(t.includes(JSON.stringify({__typename:"AggregationOption",label:"0",value:"0"}))||t.includes(JSON.stringify({__typename:"AggregationOption",label:"1",value:"1"})))},q=Object(l.useMemo)(()=>{var e,r=new Map,a=new Set,n=new Map,l=new Map,i=_createForOfIteratorHelper(Object(m.f)(u()(t)))
try{for(i.s();!(e=i.n()).done;){var o=e.value,s=o.options,c=o.label,f=o.attribute_code
if(J.has(f)){var p=[]
if(r.set(f,c),a.add("".concat(f,"[filter]")),L(s))n.set(f,"boolean"),p.push({title:"No",value:"0",label:c+":No"}),p.push({title:"Yes",value:"1",label:c+":Yes"})
else{n.set(f,null)
var d,b=_createForOfIteratorHelper(s)
try{for(b.s();!(d=b.n()).done;){var y=d.value,O=y.label,h=y.value
p.push({title:Object(m.g)(O),value:h})}}catch(e){b.e(e)}finally{b.f()}}l.set(f,p)}}}catch(e){i.e(e)}finally{i.f()}return[r,a,l,n]},[t,J]),H=n()(q,4),Q=H[0],Y=H[1],x=H[2],z=H[3]
Object(l.useEffect)(()=>{if(o){var e=Object(m.d)(T,Y,_)
E.push({pathname:N,search:e}),s(!1)}},[Y,_,E,o,N,T])
var B=Object(l.useCallback)(()=>{j("filter")},[j]),K=Object(l.useCallback)(()=>{w()},[w]),P=Object(l.useCallback)(()=>{s(!0),K()},[K]),U=Object(l.useCallback)(()=>{S.clear(),s(!0)},[S,s]),X=Object(l.useCallback)(e=>{if(C)switch(e.keyCode){case 27:K()}},[C,K])
return Object(l.useEffect)(()=>{var e=null===I.current&&"filter"===v,t="filter"===I.current&&null===v
if(e||t){var r=Object(m.e)(T,Y,x)
S.setItems(r)}t&&K(),I.current=v},[v,S,x,Y,T,K]),Object(l.useEffect)(()=>{var e=Object(m.e)(T,Y,x)
S.setItems(e)},[S,x,Y,T]),{filterApi:S,filterItems:x,filterKeys:Y,filterNames:Q,filterFrontendInput:z,filterState:_,handleApply:P,handleClose:K,handleKeyDownActions:X,handleOpen:B,handleReset:U,isApplying:o,isOpen:C}})({filters:t}),s=a.filterApi,c=a.filterItems,w=a.filterNames,A=a.filterFrontendInput,k=a.filterState,_=a.handleApply,S=a.handleReset,I=Object(l.useRef)(),C=Object(b.a)(j.a,e.classes),E=Object(l.useCallback)(function(){var e=I.current
if(e&&"function"==typeof e.getBoundingClientRect){var t=e.getBoundingClientRect().top,r=window.scrollY+t-150
window.scrollTo(0,r)}_.apply(void 0,arguments)},[_,I]),M=Object(l.useMemo)(()=>Array.from(c,(e,t)=>{var a=n()(e,2),l=a[0],o=a[1],c=k.get(l),u=w.get(l),f=A.get(l)
return i.a.createElement(g.a,{key:l,filterApi:s,filterState:c,filterFrontendInput:f,group:l,items:o,name:u,onApply:E,initialOpen:t<r})}),[s,c,w,A,k,r,E]),N=k.size?i.a.createElement("div",{className:C.action},i.a.createElement(h.a,{type:"button",onClick:S},i.a.createElement(o.a,{id:"filterModal.action",defaultMessage:"Clear all"}))):null
return i.a.createElement("aside",{className:C.root,ref:I,"aria-live":"polite","aria-busy":"false"},i.a.createElement("div",{className:C.body},i.a.createElement("div",{className:C.header},i.a.createElement("h2",{className:C.headerTitle},i.a.createElement(o.a,{id:"filterModal.headerTitle",defaultMessage:"Filters"}))),i.a.createElement(v.a,{filterApi:s,filterNames:w,filterState:k,onRemove:E}),N,i.a.createElement("ul",{className:C.blocks},M)))}
w.defaultProps={filterCountToOpen:3},w.propTypes={classes:Object(s.shape)({action:s.string,blocks:s.string,body:s.string,header:s.string,headerTitle:s.string,root:s.string,root_open:s.string}),filters:Object(s.arrayOf)(Object(s.shape)({attribute_code:s.string,items:s.array})),filterCountToOpen:s.number}
var A=w,k=r("LlM3")}}])
