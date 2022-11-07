/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"7eBD":function(e,t,n){"use strict"
var i=n("PBB4"),r=n.n(i)()(function(e){return e[1]})
r.push([e.i,".suggestedCategories-root-2AN {\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    gap: 0.75rem;\n    padding-top: 0.75rem;\n}\n\n.suggestedCategories-root-2AN:empty {\n    display: none;\n}\n",""]),r.locals={root:"suggestedCategories-root-2AN"},t.a=r},"E/ZA":function(e,t,n){(function(t){var n="Expected a function",i=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=u||d||Function("return this")(),p=Object.prototype.toString,g=Math.max,f=Math.min,v=function(){return m.Date.now()}
function isObject(e){var t=typeof e
return!!e&&("object"==t||"function"==t)}function toNumber(e){if("number"==typeof e)return e
if(function isSymbol(e){return"symbol"==typeof e||function isObjectLike(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return i
if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(a,"")
var n=o.test(e)
return n||c.test(e)?l(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function debounce(e,t,i){var r,a,s,o,c,l,u=0,d=!1,m=!1,p=!0
if("function"!=typeof e)throw new TypeError(n)
function invokeFunc(t){var n=r,i=a
return r=a=void 0,u=t,o=e.apply(i,n)}function shouldInvoke(e){var n=e-l
return void 0===l||n>=t||n<0||m&&e-u>=s}function timerExpired(){var e=v()
if(shouldInvoke(e))return trailingEdge(e)
c=setTimeout(timerExpired,function remainingWait(e){var n=t-(e-l)
return m?f(n,s-(e-u)):n}(e))}function trailingEdge(e){return c=void 0,p&&r?invokeFunc(e):(r=a=void 0,o)}function debounced(){var e=v(),n=shouldInvoke(e)
if(r=arguments,a=this,l=e,n){if(void 0===c)return function leadingEdge(e){return u=e,c=setTimeout(timerExpired,t),d?invokeFunc(e):o}(l)
if(m)return c=setTimeout(timerExpired,t),invokeFunc(l)}return void 0===c&&(c=setTimeout(timerExpired,t)),o}return t=toNumber(t)||0,isObject(i)&&(d=!!i.leading,s=(m="maxWait"in i)?g(toNumber(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),debounced.cancel=function cancel(){void 0!==c&&clearTimeout(c),u=0,r=l=a=c=void 0},debounced.flush=function flush(){return void 0===c?o:trailingEdge(v())},debounced}}).call(this,n("yLpj"))},JWpJ:function(e,t,n){"use strict"
n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a})
var i=n("8Gy0"),r={kind:"Document",definitions:function _unique(e){var t={}
return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0
var n=e.name.value
return!t[n]&&(t[n]=!0,!0)})}([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getSearchNoFilter"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"inputText"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currentPage"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filters"}},type:{kind:"NamedType",name:{kind:"Name",value:"ProductAttributeFilterInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"ProductAttributeSortInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"search"},value:{kind:"Variable",name:{kind:"Name",value:"inputText"}}},{kind:"Argument",name:{kind:"Name",value:"pageSize"},value:{kind:"Variable",name:{kind:"Name",value:"pageSize"}}},{kind:"Argument",name:{kind:"Name",value:"currentPage"},value:{kind:"Variable",name:{kind:"Name",value:"currentPage"}}},{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filters"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProductOfListFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"page_info"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total_pages"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"total_count"},arguments:[],directives:[]}]}}]}}].concat(i.b.definitions)),loc:{start:0,end:571,source:{body:"\n    query getSearchNoFilter(\n        $inputText: String\n        $pageSize: Int\n        $currentPage: Int\n        $filters: ProductAttributeFilterInput\n        $sort: ProductAttributeSortInput\n    ) {\n        products(\n            search: $inputText\n            pageSize: $pageSize\n            currentPage: $currentPage\n            filter: $filters\n            sort: $sort\n        ) {\n            items {\n                ...ProductOfListFragment\n            }\n            page_info {\n                total_pages\n            }\n            total_count\n        }\n    }\n    \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getFilterFromSearch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"inputText"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"search"},value:{kind:"Variable",name:{kind:"Name",value:"inputText"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"__type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"ProductAttributeFilterInput",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"inputFields"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:533,source:{body:'\n    query getFilterFromSearch($inputText: String) {\n        products(\n            search: $inputText\n        ) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n            }\n        }\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n',name:"GraphQL request",locationOffset:{line:1,column:1}}}}},NCqZ:function(e,t,n){"use strict"
var i=n("PBB4"),r=n.n(i)()(function(e){return e[1]})
r.push([e.i,".suggestedProducts-products-2nX {\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    gap: 0.75rem;\n    padding-top: 0.75rem;\n}\n\n.suggestedProducts-products-2nX:empty {\n    display: none;\n}\n",""]),r.locals={products:"suggestedProducts-products-2nX"},t.a=r},SsQS:function(e,t,n){"use strict"
var i=n("PBB4"),r=n.n(i)()(function(e){return e[1]})
r.push([e.i,".suggestedProduct-root-qr_ {\n    align-items: center;\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    grid-template-columns: 60px 1fr;\n}\n\n.suggestedProduct-image-3a4 {\n    align-items: center;\n    display: inline-flex;\n    justify-content: center;\n    padding: 2px;\n    width: 64px;\n    height: 64px;\n    border: solid #eaeaea 1px;\n    margin-bottom: 5px;\n}\n\n.suggestedProduct-name-BHi {\n    word-break: break-word;\n}\n",""]),r.locals={root:"suggestedProduct-root-qr_",image:"suggestedProduct-image-3a4",name:"suggestedProduct-name-BHi"},t.a=r},YpH0:function(e,t,n){"use strict"
var i=n("PBB4"),r=n.n(i)()(function(e){return e[1]})
r.push([e.i,".searchAutoComplete-hidden-CeP {\n    opacity: 0;\n    transform: translate3d(0, -2rem, 0);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    visibility: hidden;\n}\n\n.searchAutoComplete-visible-1Ky {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n    visibility: visible;\n}\n\n.searchAutoComplete-root-1Fp {\n    background-color: white;\n    border: 1px solid rgb(var(--venia-global-color-border));\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n    display: grid;\n    font-size: 0.8125rem;\n    gap: 0.75rem;\n    left: 0;\n    padding: 1rem 1rem;\n    position: absolute;\n    right: 0;\n    transition-property: opacity, transform, visibility;\n    z-index: 3;\n    top: 65px;\n}\n@media (max-width: 768px) {\n    .searchAutoComplete-root-1Fp {\n        background-color: white;\n        border: 1px solid rgb(var(--venia-global-color-border));\n        box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n        display: grid;\n        font-size: 0.8125rem;\n        gap: 0.75rem;\n        padding: 1rem 1rem;\n        position: fixed;\n        /* right: 6px; */\n        transition-property: opacity, transform, visibility;\n        z-index: 3;\n        top: 90px;\n        right: 52px;\n        left: 43px;\n    }\n}\n\n.searchAutoComplete-root_hidden-16C {\n}\n\n.searchAutoComplete-root_visible-j3h {\n}\n\n.searchAutoComplete-message-2Zb {\n    color: rgb(var(--venia-global-color-text-alt));\n    padding: 0 0.75rem;\n    text-align: center;\n}\n\n.searchAutoComplete-message-2Zb:empty {\n    padding: 0;\n}\n\n.searchAutoComplete-suggestions-3X4 {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.searchAutoComplete-suggestions-3X4:empty {\n    display: none;\n}\n.searchAutoComplete-close-icon-cs5 {\n    display: flex;\n    justify-content: flex-end;\n}\n",""]),r.locals={hidden:"searchAutoComplete-hidden-CeP",visible:"searchAutoComplete-visible-1Ky",root:"searchAutoComplete-root-1Fp",root_hidden:"searchAutoComplete-root_hidden-16C searchAutoComplete-root-1Fp searchAutoComplete-hidden-CeP",root_visible:"searchAutoComplete-root_visible-j3h searchAutoComplete-root-1Fp searchAutoComplete-visible-1Ky",message:"searchAutoComplete-message-2Zb",suggestions:"searchAutoComplete-suggestions-3X4","close-icon":"searchAutoComplete-close-icon-cs5"},t.a=r},cT9s:function(e,t,n){"use strict"
var i=n("lwsE"),r=n.n(i),a=n("PJYZ"),s=n.n(a),o=n("7W2i"),c=n.n(o),l=n("a1gu"),u=n.n(l),d=n("Nsbk"),m=n.n(d),p=n("lSNA"),g=n.n(p),f=n("ERkP"),v=n.n(f),b=n("aWzz"),y=n.n(b)
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){g()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()
return function _createSuperInternal(){var n,i=m()(e)
if(t){var r=m()(this).constructor
n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments)
return u()(this,n)}}var h=function(e){c()(Abstract,e)
var t=_createSuper(Abstract)
function Abstract(e){var n
r()(this,Abstract),n=t.call(this,e),g()(s()(n),"renderSvg",function(e,t){return v.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:n.className,viewBox:e,style:n.style},t)})
var i=e.color?{fill:e.color}:{}
return n.style=_objectSpread(_objectSpread(_objectSpread({},{display:"inline-block",color:"rgba(0, 0, 0, 0.87)",fill:"rgb(0, 0, 0, 0.87)",height:25,width:25,userSelect:"none",transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"}),e.style),i),n.className=n.props.className,n}return Abstract}(v.a.PureComponent)
h.propTypes={className:y.a.string,style:y.a.object},h.defaultProps={color:null,style:{},className:""},t.a=h},koQW:function(e,t,n){"use strict"
var i=n("PBB4"),r=n.n(i)()(function(e){return e[1]})
r.push([e.i,".suggestions-heading-3bS {\n    color: rgb(var(--venia-global-color-text-alt));\n    font-size: 0.875rem;\n    padding-top: 0.75rem;\n    text-transform: uppercase;\n}\n",""]),r.locals={heading:"suggestions-heading-3bS"},t.a=r},sKgU:function(e,t,n){"use strict"
n.r(t)
var i=n("J4zp"),r=n.n(i),a=n("ERkP"),s=n.n(a),o=n("aWzz"),c=n("x8tt"),l=n("y1Xp"),u=n("JWpJ"),d=n("qkyD"),m=n("daAW"),p=function(e,t){var n=new URL("/search.html",window.location)
return n.searchParams.set("q",e),n.searchParams.set("filter",JSON.stringify({category_id:[t]})),{pathname:n.pathname,search:n.search}},g=n("LboF"),f=n.n(g),v=n("7eBD"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},y=(f()(v.a,b),v.a.locals||{}),h=function SuggestedCategories(e){var t=e.limit,n=e.onNavigate,i=e.value,r=e.categories?e.categories:[],o=Object(l.a)(y,e.classes),c=Object(a.useCallback)(function(){"function"==typeof n&&n()},[n]),u=r.slice(0,t).map(function(e){var t=e.label,n=e.value_string
return s.a.createElement("li",{key:n,className:o.item},s.a.createElement(m.b,{className:o.link,to:p(i,n),onClick:c},s.a.createElement("strong",{className:o.value},i),s.a.createElement("span",null," in ".concat(t))))})
return s.a.createElement("ul",{className:o.root},u)},k=h
h.defaultProps={limit:4},h.propTypes={categories:Object(o.arrayOf)(Object(o.shape)({label:o.string.isRequired,value_string:o.string.isRequired})).isRequired,classes:Object(o.shape)({item:o.string,link:o.string,root:o.string,value:o.string}),limit:o.number.isRequired,onNavigate:o.func,value:o.string}
var N=n("pVnL"),O=n.n(N),S=n("cDf5"),j=n.n(S),x=n("lSNA"),w=n.n(x)
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){w()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=n("sBuH"),C=n("LiNO"),E=n("2nvq"),_=n("9Ona"),A=n("SsQS"),F={injectType:"singletonStyleTag",insert:"head",singleton:!0},T=(f()(A.a,F),A.a.locals||{}),R=n("w0Cm"),V=function SuggestedProduct(e){var t=Object(E.c)(),n=e.classes,i=e.url_key,r=e.small_image,a=e.name,o=e.price,c=e.type_id,l=Object(E.e)("/".concat(i).concat(Object(E.d)())),u=s.a.createElement("img",{alt:a,src:t,style:{maxWidth:60,maxHeight:60}})
return s.a.createElement(m.b,{className:n.root,to:l,onClick:function handleClick(){var t=e.onNavigate
"function"==typeof t&&t()}},s.a.createElement("span",{className:n.image},s.a.createElement(_.a,{placeholder:u},s.a.createElement(R.a,{alt:a,src:r?Object(E.e)(r,{type:"image-product",width:60}):Object(E.c)(),style:{maxWidth:60,maxHeight:60}}))),s.a.createElement("span",{className:n.name},a),s.a.createElement("span",{className:n.price},s.a.createElement(P.a,{prices:o,type:c,classes:n})))}
V.propTypes={url_key:o.string.isRequired,small_image:o.string.isRequired,name:o.string.isRequired,onNavigate:o.func,price:Object(o.shape)({regularPrice:Object(o.shape)({amount:Object(o.shape)({currency:o.string,value:o.number})})}).isRequired,classes:Object(o.shape)({root:o.string,image:o.string,name:o.string,price:o.string})}
var q=Object(C.a)(T)(V),D=n("NCqZ"),I={injectType:"singletonStyleTag",insert:"head",singleton:!0},z=(f()(D.a,I),D.a.locals||{}),B=function SuggestedProducts(e){var t=e.limit,n=e.onNavigate,i=e.products,r=Object(l.a)(z,e.classes),a=i.slice(0,t).map(function(e){return s.a.createElement("li",{key:e.id,className:r.item},s.a.createElement(q,O()({},function(e){var t=e.small_image
return _objectSpread(_objectSpread({},e),{},{small_image:"object"===j()(t)?t.url:t})}(e),{onNavigate:n})))})
return s.a.createElement("ul",{className:r.root},a)},J=B
B.defaultProps={limit:3},B.propTypes={classes:Object(o.shape)({item:o.string,root:o.string}),limit:o.number.isRequired,onNavigate:o.func,products:Object(o.arrayOf)(Object(o.shape)({id:Object(o.oneOfType)([o.number,o.string]).isRequired})).isRequired}
var $=n("koQW"),W={injectType:"singletonStyleTag",insert:"head",singleton:!0},L=(f()($.a,W),$.a.locals||{}),K=function Suggestions(e){var t,n=e.products,i=e.searchValue,r=e.setVisible,o=e.visible,c=n.filters,u=n.items,d=Object(l.a)(L,e.classes),m=Object(a.useCallback)(function(){r(!1)},[r])
if(!o||!u)return null
c&&c.length&&(t=c.find(function(e){return"Category"===e.name})||{})
var p=t?t.filter_items:[]
return s.a.createElement(a.Fragment,null,s.a.createElement(k,{categories:p,onNavigate:m,value:i}),s.a.createElement("h2",{className:d.heading},s.a.createElement("span",null,"Product Suggestions")),s.a.createElement(J,{onNavigate:m,products:u}))},Q=K
K.propTypes={classes:Object(o.shape)({heading:o.string}),products:Object(o.shape)({filters:Object(o.arrayOf)(Object(o.shape)({filter_items:Object(o.arrayOf)(Object(o.shape)({})),name:o.string.isRequired}).isRequired),items:Object(o.arrayOf)(Object(o.shape)({}))}),searchValue:o.string,setVisible:o.func,visible:o.bool}
var Z=n("lwsE"),H=n.n(Z),M=n("W8MJ"),X=n.n(M),U=n("7W2i"),G=n.n(U),Y=n("a1gu"),ee=n.n(Y),te=n("Nsbk"),ne=n.n(te)
function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()
return function _createSuperInternal(){var n,i=ne()(e)
if(t){var r=ne()(this).constructor
n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments)
return ee()(this,n)}}var ie=function(e){G()(CloseIcon,e)
var t=_createSuper(CloseIcon)
function CloseIcon(){return H()(this,CloseIcon),t.apply(this,arguments)}return X()(CloseIcon,[{key:"render",value:function render(){return s.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:this.style,x:"0px",y:"0px",className:this.className,viewBox:"0 0 186.8 184.8"},s.a.createElement("path",{d:"M182.6,4.4c-4.5-4.5-11.7-4.5-16.1,0l-73,72.9l-73-72.9C16-0.1,8.8-0.1,4.4,4.4c-4.5,4.5-4.5,11.7,0,16.1l73,72.9l-73,72.9\r c-4.5,4.5-4.5,11.7,0,16.1c4.5,4.5,11.7,4.5,16.1,0l73-72.9l73,72.9c4.5,4.5,11.7,4.5,16.1,0c4.5-4.5,4.5-11.7,0-16.1l-72.9-72.9\r l72.9-72.9C187.1,16.1,187.1,8.9,182.6,4.4z"}))}}]),CloseIcon}(n("cT9s").a),re=n("YpH0"),ae={injectType:"singletonStyleTag",insert:"head",singleton:!0},se=(f()(re.a,ae),re.a.locals||{}),oe=n("E/ZA"),ce=n.n(oe),le=n("kQwz")
var ue=function SearchAutoComplete(e){var t=e.setVisible,n=e.visible,i=e.value,o=Object(le.a)().formatMessage,m=Object(a.useRef)(null)
!function useOutsideAlerter(e,t){function handleClickOutside(n){e.current&&!e.current.contains(n.target)&&t&&t&&t(!1)}Object(a.useEffect)(function(){return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}})}(m,t)
var p=Object(l.a)(se,e.classes),g=n?p.root_visible:p.root_hidden,f="",v=Object(c.useLazyQuery)(u.b,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),b=r()(v,2),y=b[0],h=b[1],k=Object(c.useLazyQuery)(u.a),N=r()(k,2),O=N[0],S=N[1].data,j=Object(a.useMemo)(function(){return ce()(function(e){y({variables:{inputText:e}}),O({variables:{inputText:e}})},500)},[y]),x=0
try{if(window.simicartRNinsets){var w=JSON.parse(window.simicartRNinsets)
x=parseInt(w.top)}else if(window.simpifyRNinsets){var P=JSON.parse(window.simpifyRNinsets)
x=parseInt(P.top)}}catch(e){}Object(a.useEffect)(function(){n&&j(i)},[j,i,n])
var C=h.data,E=h.error,_=h.loading,A=Object(a.useMemo)(function(){var e
if(C)if((e=JSON.parse(JSON.stringify(C))).simiproducts&&(e.products=e.simiproducts),S&&S.simiproducts&&S.simiproducts.simi_filters)e.products.filters=JSON.parse(JSON.stringify(S.simiproducts.simi_filters))
else if(S&&S.products&&S.products.aggregations){var t=JSON.parse(JSON.stringify(S.products.aggregations))
e.products.filters=Object(d.a)(t)}return e},[C,S])
return f=E?o({id:"An error occurred while fetching results."}):_?o({id:"Fetching results..."}):A?A.products.items.length?A.products.items.length+o({id:"Items"}):o({id:"No results were found."}):o({id:"Search for a product"}),s.a.createElement("div",{style:{top:75+x},className:g,ref:m},s.a.createElement("div",{role:"button",tabIndex:"0",className:p["close-icon"],onClick:function onClick(){return t(!1)},onKeyUp:function onKeyUp(){return t(!1)}},s.a.createElement(ie,{style:{width:14,height:14,display:"block"}})),s.a.createElement("div",{className:p.message},f),s.a.createElement("div",{className:p.suggestions},s.a.createElement(Q,{products:A?A.products:{},searchValue:i,setVisible:t,visible:n})))}
t.default=ue
ue.propTypes={classes:Object(o.shape)({message:o.string,root_hidden:o.string,root_visible:o.string,suggestions:o.string}),setVisible:o.func,visible:o.bool}}}])