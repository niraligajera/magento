/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1//Z":function(e,t,a){"use strict"
a.r(t)
var r=a("HPDi")
a.d(t,"default",function(){return r.a})
var o=a("xg11")
a.d(t,"ProductOptionsShimmer",function(){return o.a})},BDXZ:function(e,t,a){"use strict"
var r=a("JPst"),o=a.n(r),n=a("fivx"),l=o()(function(e){return e[1]})
l.i(n.a,"",!0),l.push([e.i,'/* TODO @TW: review. This relies on custom prop to set color from JSX "style" prop. */\n.swatch-root-6VC {\n    --venia-swatch-bg: var(--venia-global-color-gray-100);\n    background: var(--venia-swatch-bg);\n}\n\n/* TODO @TW: review. This relies on custom prop to set color from JSX "style" prop. */\n.swatch-root_selected--kC {\n\n    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.2), transparent),\n        var(--venia-swatch-bg);\n}\n\n.swatch-root_focused-27- {\n}\n\n.swatch-root_selected_focused-WQx {\n}\n\n.swatch-checked-blv {\n    opacity: 1;\n    transition-property: opacity;\n    transition-duration: 256ms;\n}\n\n.swatch-unchecked-Aap {\n    opacity: 0;\n}\n',""]),l.locals={root:"swatch-root-6VC "+n.a.locals.root+" border-shaded-10 text-white w-[3rem]",root_selected:"swatch-root_selected--kC swatch-root-6VC "+n.a.locals.root+" border-shaded-10 text-white w-[3rem]",root_focused:"swatch-root_focused-27- swatch-root-6VC "+n.a.locals.root+" border-shaded-10 text-white w-[3rem]",root_selected_focused:"swatch-root_selected_focused-WQx swatch-root_selected--kC swatch-root-6VC "+n.a.locals.root+" border-shaded-10 text-white w-[3rem]",checked:"swatch-checked-blv",unchecked:"swatch-unchecked-Aap swatch-checked-blv"},t.a=l},HNsA:function(e,t,a){"use strict"
var r=a("JPst"),o=a.n(r),n=a("O7RW"),l=o()(function(e){return e[1]})
l.i(n.a,"",!0),l.push([e.i,".swatchList-root-m0x {\n}\n",""]),l.locals={root:"swatchList-root-m0x "+n.a.locals.root},t.a=l},HPDi:function(e,t,a){"use strict"
var r=a("pVnL"),o=a.n(r),n=a("q1tI"),l=a.n(n),s=a("17x9"),c=a("kriW"),i=a("y1Xp"),u={fashion_color:"swatch"},d=a("EpH3"),b=a("oTwF"),h=a("JoNN"),p=a("LboF"),m=a.n(p),f=a("BDXZ"),v={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(m()(f.a,v),f.a.locals||{}),y=e=>{var t=e.hasFocus,a=e.isSelected,r=e.item,o=r.label,s=r.value_index,c=r.swatch_data,u=e.onClick,p=e.style,m=(e=>{var t=e.onClick,a=e.value_index
return{handleClick:Object(n.useCallback)(()=>{t(a)},[a,t])}})({onClick:u,value_index:s}).handleClick,f=Object(i.a)(g,e.classes),v=Object(n.useMemo)(()=>a?f.checked:f.unchecked,[f.checked,f.unchecked,a]),y=p
if(c){var _=c.thumbnail,w=c.value,C=""
if(_){var O=Object(d.c)(_,"image-swatch")(48)
C='url("'.concat(O,'")')}else C=w
y=Object.assign({},p,{"--venia-swatch-bg":C})}var k=f[((e,t,a)=>"".concat(e).concat(t?"_selected":"").concat(a?"_focused":""))("root",a,t)]
return l.a.createElement("button",{className:k,onClick:m,style:y,title:o,type:"button"},l.a.createElement(b.a,{classes:{root:v},src:h.a}))}
y.propTypes={hasFocus:s.bool,isSelected:s.bool,item:Object(s.shape)({label:s.string.isRequired,value_index:Object(s.oneOfType)([s.number,s.string]).isRequired}).isRequired,onClick:s.func.isRequired,style:s.object},y.defaultProps={hasFocus:!1,isSelected:!1}
var _=y,w=a("HNsA"),C={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(m()(w.a,C),w.a.locals||{}),k=e=>{var t=e.getItemKey,a=e.selectedValue,r=void 0===a?{}:a,o=e.items,s=e.onSelectionChange,c=Object(i.a)(O,e.classes),u=Object(n.useMemo)(()=>o.map(e=>{var a=e.label===r.label
return l.a.createElement(_,{key:t(e),isSelected:a,item:e,onClick:s})}),[t,r.label,o,s])
return l.a.createElement("div",{className:c.root},u)}
k.propTypes={classes:Object(s.shape)({root:s.string}),getItemKey:s.func,selectedValue:s.object,items:Object(s.arrayOf)(s.object),onSelectionChange:s.func},k.displayName="SwatchList"
var j=k,S=a("fivx"),x={injectType:"singletonStyleTag",insert:"head",singleton:!0},T=(m()(S.a,x),S.a.locals||{}),V=e=>{var t=e.hasFocus,a=e.isSelected,r=e.item,o=r.label,s=r.value_index,c=(e=>{var t=e.onClick,a=e.value_index
return{handleClick:Object(n.useCallback)(()=>{t(a)},[a,t])}})({onClick:e.onClick,value_index:s}).handleClick,u=Object(i.a)(T,e.classes)[((e,t,a)=>"".concat(e).concat(t?"_selected":"").concat(a?"_focused":""))("root",a,t)]
return l.a.createElement("button",{className:u,onClick:c,title:o,type:"button"},l.a.createElement("span",null,o))},E=V
V.propTypes={hasFocus:s.bool,isSelected:s.bool,item:Object(s.shape)({label:s.string.isRequired,value_index:Object(s.oneOfType)([s.number,s.string]).isRequired}).isRequired,onClick:s.func.isRequired},V.defaultProps={hasFocus:!1,isSelected:!1}
var L=a("O6fr"),N=e=>{var t=e.getItemKey,a=e.selectedValue,r=void 0===a?{}:a,o=e.items,s=e.onSelectionChange,c=Object(i.a)(L.a,e.classes),u=Object(n.useMemo)(()=>o.map(e=>{var a=e.label===r.label
return l.a.createElement(E,{key:t(e),isSelected:a,item:e,onClick:s})}),[t,r.label,o,s])
return l.a.createElement("div",{className:c.root},u)}
N.propTypes={classes:Object(s.shape)({root:s.string}),getItemKey:s.func,selectedValue:s.object,items:Object(s.arrayOf)(s.object),onSelectionChange:s.func},N.displayName="TileList"
var R=N,q=a("WqNE"),A=a("J4zp"),J=a.n(A),I=e=>{return e.value_index},M=(e,t)=>{return"swatch"===function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).attribute_code
return u[e]}({attribute_code:e,values:t})?j:R},F=e=>{var t=e.attribute_code,a=e.attribute_id,r=e.label,o=e.onSelectionChange,s=e.selectedValue,u=e.values,d=(e=>{var t=e.attribute_id,a=e.onSelectionChange,r=e.selectedValue,o=e.values,l=Object(n.useState)(null),s=J()(l,2),c=s[0],i=s[1],u=Object(n.useMemo)(()=>{var e={},t=c||r
return t&&(e=o.find(e=>e.default_label===t)||{}),e},[r,c,o]),d=Object(n.useMemo)(()=>new Map(o.map(e=>[e.value_index,e.store_label])),[o]),b=c||u.default_label||"None"
return{handleSelectionChange:Object(n.useCallback)(e=>{i(d.get(e)),a&&a(t,e)},[t,a,d]),initialSelection:u,selectedValueDescription:b}})({attribute_id:a,label:r,onSelectionChange:o,selectedValue:s,values:u}),b=d.handleSelectionChange,h=d.initialSelection,p=d.selectedValueDescription,m=Object(n.useMemo)(()=>M(t,u),[t,u]),f=Object(i.a)(q.a,e.classes)
return l.a.createElement("div",{className:f.root},l.a.createElement("span",{className:f.title},r),l.a.createElement(m,{getItemKey:I,selectedValue:h,items:u,onSelectionChange:b}),l.a.createElement("dl",{className:f.selection},l.a.createElement("dt",{className:f.selectionLabel},l.a.createElement(c.a,{id:"productOptions.selectedLabel",defaultMessage:"Selected {label}:",values:{label:r}})),l.a.createElement("dd",null,p)))}
F.propTypes={attribute_code:s.string.isRequired,attribute_id:s.string,classes:Object(s.shape)({root:s.string,title:s.string}),label:s.string.isRequired,onSelectionChange:s.func,selectedValue:Object(s.oneOfType)([s.number,s.string]),values:Object(s.arrayOf)(s.object).isRequired}
var D=F
function _createForOfIteratorHelper(t,a){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!r){if(Array.isArray(t)||(r=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var a=Object.prototype.toString.call(e).slice(8,-1)
"Object"===a&&e.constructor&&(a=e.constructor.name)
if("Map"===a||"Set"===a)return Array.from(e)
if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(t))||a&&t&&"number"==typeof t.length){r&&(t=r)
var o=0,l=function F(){}
return{s:l,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1
return{s:function s(){r=r.call(t)},n:function n(){var e=r.next()
return i=e.done,e},e:function e(t){u=!0,c=t},f:function f(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a]
return r}var K=e=>{var t=e.classes,a=e.onSelectionChange,r=e.options,s=e.selectedValues,c=(e=>{var t,a=e.onSelectionChange,r=e.selectedValues,o=Object(n.useCallback)((e,t)=>{a&&a(e,t)},[a]),l=new Map,s=_createForOfIteratorHelper(r)
try{for(s.s();!(t=s.n()).done;){var c=t.value,i=c.option_label,u=c.value_label
l.set(i,u)}}catch(e){s.e(e)}finally{s.f()}return{handleSelectionChange:o,selectedValueMap:l}})({onSelectionChange:a,selectedValues:void 0===s?[]:s}),i=c.handleSelectionChange,u=c.selectedValueMap
return r.map(e=>l.a.createElement(D,o()({},e,{classes:t,key:e.attribute_id,onSelectionChange:i,selectedValue:u.get(e.label)})))}
K.propTypes={onSelectionChange:s.func,options:s.array.isRequired,selectedValues:s.array}
t.a=K},fivx:function(e,t,a){"use strict"
var r=a("JPst"),o=a.n(r),n=a("G4iS"),l=o()(function(e){return e[1]})
l.i(n.a,"",!0),l.push([e.i,".tile-root-zJL {\n}\n\n.tile-root_selected-Kmb {\n}\n\n.tile-root_focused-Rt5 {\n}\n\n.tile-root_selected_focused-sYj {\n}\n",""]),l.locals={root:"tile-root-zJL "+n.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm",root_selected:"tile-root_selected-Kmb tile-root-zJL "+n.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-gray-900 text-white",root_focused:"tile-root_focused-Rt5 tile-root-zJL "+n.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm",root_selected_focused:"tile-root_selected_focused-sYj tile-root_selected-Kmb tile-root-zJL "+n.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-gray-900 text-white"},t.a=l}}])
