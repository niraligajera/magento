/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{O94r:function(e,t,n){var a
!function(){"use strict"
var n={}.hasOwnProperty
function classNames(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t]
if(a){var r=typeof a
if("string"===r||"number"===r)e.push(a)
else if(Array.isArray(a)){if(a.length){var o=classNames.apply(null,a)
o&&e.push(o)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)
else e.push(a.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(a=function(){return classNames}.apply(t,[]))||(e.exports=a)}()},TW5K:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return I})
var a=n("97Jx"),r=n.n(a),o=n("RhWx"),s=n.n(o),i=n("ddV6"),l=n.n(i),c=n("ERkP"),d=n.n(c),b=n("aWzz"),u=n("O94r"),p=n.n(u)
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){function Tab(){return e.apply(this,arguments)||this}!function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(Tab,e)
var t=Tab.prototype
return t.componentDidMount=function componentDidMount(){this.checkFocus()},t.componentDidUpdate=function componentDidUpdate(){this.checkFocus()},t.checkFocus=function checkFocus(){var e=this.props,t=e.selected,n=e.focus
t&&n&&this.node.focus()},t.render=function render(){var e,t=this,n=this.props,a=n.children,r=n.className,o=n.disabled,s=n.disabledClassName,i=(n.focus,n.id),l=n.panelId,c=n.selected,b=n.selectedClassName,u=n.tabIndex,f=n.tabRef,g=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"])
return d.a.createElement("li",_extends({},g,{className:p()(r,(e={},e[b]=c,e[s]=o,e)),ref:function ref(e){t.node=e,f&&f(e)},role:"tab",id:i,"aria-selected":c?"true":"false","aria-disabled":o?"true":"false","aria-controls":l,tabIndex:u||(c?"0":null)}),a)},Tab}(c.Component)
function TabPanel_extends(){return(TabPanel_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}f.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},f.propTypes={},f.tabsRole="Tab"
var g=function(e){function TabPanel(){return e.apply(this,arguments)||this}return function TabPanel_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(TabPanel,e),TabPanel.prototype.render=function render(){var e,t=this.props,n=t.children,a=t.className,r=t.forceRender,o=t.id,s=t.selected,i=t.selectedClassName,l=t.tabId,c=function TabPanel_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"])
return d.a.createElement("div",TabPanel_extends({},c,{className:p()(a,(e={},e[i]=s,e)),role:"tabpanel",id:o,"aria-labelledby":l}),r||s?n:null)},TabPanel}(c.Component)
g.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},g.propTypes={},g.tabsRole="TabPanel"
var h=0
function uuid(){return"react-tabs-"+h++}var m,v=n("T0aG"),T=n.n(v)
function isTab(e){return e.type&&"Tab"===e.type.tabsRole}function isTabPanel(e){return e.type&&"TabPanel"===e.type.tabsRole}function isTabList(e){return e.type&&"TabList"===e.type.tabsRole}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function deepMap(e,t){return c.Children.map(e,function(e){return null===e?null:function isTabChild(e){return isTab(e)||isTabList(e)||isTabPanel(e)}(e)?t(e):e.props&&e.props.children&&"object"===T()(e.props.children)?Object(c.cloneElement)(e,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){_defineProperty(e,t,n[t])})}return e}({},e.props,{children:deepMap(e.props.children,t)})):e})}function deepForEach(e,t){return c.Children.forEach(e,function(e){null!==e&&(isTab(e)||isTabPanel(e)?t(e):e.props&&e.props.children&&"object"===T()(e.props.children)&&(isTabList(e)&&t(e),deepForEach(e.props.children,t)))})}function count_getTabsCount(e){var t=0
return deepForEach(e,function(e){isTab(e)&&t++}),t}function UncontrolledTabs_extends(){return(UncontrolledTabs_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function isNode(e){return e&&"getAttribute"in e}function isTabNode(e){return isNode(e)&&"tab"===e.getAttribute("role")}function isTabDisabled(e){return isNode(e)&&"true"===e.getAttribute("aria-disabled")}try{m=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(e){m=!1}var y=function(e){function UncontrolledTabs(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r]
return(t=e.call.apply(e,[this].concat(a))||this).tabNodes=[],t.handleKeyDown=function(e){if(t.isTabFromContainer(e.target)){var n=t.props.selectedIndex,a=!1,r=!1
32!==e.keyCode&&13!==e.keyCode||(a=!0,r=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(n=t.getPrevTab(n),a=!0,r=!0):39===e.keyCode||40===e.keyCode?(n=t.getNextTab(n),a=!0,r=!0):35===e.keyCode?(n=t.getLastTab(),a=!0,r=!0):36===e.keyCode&&(n=t.getFirstTab(),a=!0,r=!0),a&&e.preventDefault(),r&&t.setSelected(n,e)}},t.handleClick=function(e){var n=e.target
do{if(t.isTabFromContainer(n)){if(isTabDisabled(n))return
var a=[].slice.call(n.parentNode.children).filter(isTabNode).indexOf(n)
return void t.setSelected(a,e)}}while(null!=(n=n.parentNode))},t}!function UncontrolledTabs_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(UncontrolledTabs,e)
var t=UncontrolledTabs.prototype
return t.setSelected=function setSelected(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},t.getNextTab=function getNextTab(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!isTabDisabled(this.getTab(n)))return n
for(var a=0;a<e;a++)if(!isTabDisabled(this.getTab(a)))return a
return e},t.getPrevTab=function getPrevTab(e){for(var t=e;t--;)if(!isTabDisabled(this.getTab(t)))return t
for(t=this.getTabsCount();t-- >e;)if(!isTabDisabled(this.getTab(t)))return t
return e},t.getFirstTab=function getFirstTab(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!isTabDisabled(this.getTab(t)))return t
return null},t.getLastTab=function getLastTab(){for(var e=this.getTabsCount();e--;)if(!isTabDisabled(this.getTab(e)))return e
return null},t.getTabsCount=function getTabsCount(){return count_getTabsCount(this.props.children)},t.getPanelsCount=function getPanelsCount(){return function count_getPanelsCount(e){var t=0
return deepForEach(e,function(e){isTabPanel(e)&&t++}),t}(this.props.children)},t.getTab=function getTab(e){return this.tabNodes["tabs-"+e]},t.getChildren=function getChildren(){var e=this,t=0,n=this.props,a=n.children,r=n.disabledTabClassName,o=n.focus,s=n.forceRenderTabPanel,i=n.selectedIndex,l=n.selectedTabClassName,b=n.selectedTabPanelClassName
this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[]
for(var u=this.tabIds.length-this.getTabsCount();u++<0;)this.tabIds.push(uuid()),this.panelIds.push(uuid())
return deepMap(a,function(n){var a=n
if(isTabList(n)){var u=0,p=!1
m&&(p=d.a.Children.toArray(n.props.children).filter(isTab).some(function(t,n){return document.activeElement===e.getTab(n)})),a=Object(c.cloneElement)(n,{children:deepMap(n.props.children,function(t){var n="tabs-"+u,a=i===u,s={tabRef:function tabRef(t){e.tabNodes[n]=t},id:e.tabIds[u],panelId:e.panelIds[u],selected:a,focus:a&&(o||p)}
return l&&(s.selectedClassName=l),r&&(s.disabledClassName=r),u++,Object(c.cloneElement)(t,s)})})}else if(isTabPanel(n)){var f={id:e.panelIds[t],tabId:e.tabIds[t],selected:i===t}
s&&(f.forceRender=s),b&&(f.selectedClassName=b),t++,a=Object(c.cloneElement)(n,f)}return a})},t.isTabFromContainer=function isTabFromContainer(e){if(!isTabNode(e))return!1
var t=e.parentElement
do{if(t===this.node)return!0
if(t.getAttribute("data-tabs"))break
t=t.parentElement}while(t)
return!1},t.render=function render(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),r=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function UncontrolledTabs_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]))
return d.a.createElement("div",UncontrolledTabs_extends({},r,{className:p()(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function ref(t){e.node=t,a&&a(t)},"data-tabs":!0}),this.getChildren())},UncontrolledTabs}(c.Component)
y.defaultProps={className:"react-tabs",focus:!1},y.propTypes={}
var C=1,x=function(e){function Tabs(t){var n
return(n=e.call(this,t)||this).handleSelected=function(e,t,a){var r=n.props.onSelect,o=n.state.mode
if("function"!=typeof r||!1!==r(e,t,a)){var s={focus:"keydown"===a.type}
o===C&&(s.selectedIndex=e),n.setState(s)}},n.state=Tabs.copyPropsToState(n.props,{},t.defaultFocus),n}return function Tabs_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(Tabs,e),Tabs.getDerivedStateFromProps=function getDerivedStateFromProps(e,t){return Tabs.copyPropsToState(e,t)},Tabs.getModeFromProps=function getModeFromProps(e){return null===e.selectedIndex?C:0},Tabs.copyPropsToState=function copyPropsToState(e,t,n){void 0===n&&(n=!1)
var a={focus:n,mode:Tabs.getModeFromProps(e)}
if(a.mode===C){var r=count_getTabsCount(e.children)-1,o=null
o=null!=t.selectedIndex?Math.min(t.selectedIndex,r):e.defaultIndex||0,a.selectedIndex=o}return a},Tabs.prototype.render=function render(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function Tabs_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,["children","defaultIndex","defaultFocus"])),a=this.state,r=a.focus,o=a.selectedIndex
return n.focus=r,n.onSelect=this.handleSelected,null!=o&&(n.selectedIndex=o),d.a.createElement(y,n,t)},Tabs}(c.Component)
function TabList_extends(){return(TabList_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}x.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},x.propTypes={},x.tabsRole="Tabs"
var N=function(e){function TabList(){return e.apply(this,arguments)||this}return function TabList_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(TabList,e),TabList.prototype.render=function render(){var e=this.props,t=e.children,n=e.className,a=function TabList_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,["children","className"])
return d.a.createElement("ul",TabList_extends({},a,{className:p()(n),role:"tablist"}),t)},TabList}(c.Component)
N.defaultProps={className:"react-tabs__tab-list"},N.propTypes={},N.tabsRole="TabList"
var P=n("LboF"),O=n.n(P),w=n("yWOS"),j={injectType:"singletonStyleTag",insert:"head",singleton:!0},_=(O()(w.a,j),w.a.locals||{}),L=n("YyrX"),k=function upperCaseString(e){if(e)return e.charAt(0).toUpperCase()+e.slice(1)},R=function Tabs(e){var t=Object(L.a)(_,e.classes),n=Object(c.useRef)(null),a=Object(c.useState)(null),o=l()(a,2),i=o[0],b=o[1],u=Object(c.useState)(null),p=l()(u,2),h=p[0],m=p[1],v=Object(c.useRef)(!1),T=Object(c.useRef)(0),y=Object(c.useRef)(0),C=e.tabNavigationAlignment,P=void 0===C?"left":C,O=e.minHeight,w=e.defaultIndex,j=void 0===w?0:w,R=e.headers,I=void 0===R?[]:R,S=e.textAlign,E=e.border,F=e.borderColor,D=e.borderWidth,G=e.borderRadius,U=e.marginTop,M=e.marginRight,W=e.marginBottom,A=e.marginLeft,B=e.paddingTop,z=e.paddingRight,H=e.paddingBottom,K=e.paddingLeft,X=e.cssClasses,J=void 0===X?[]:X,Y=e.children,V=Object(c.useCallback)(function(e){v.current=!0,T.current=e.clientX},[]),q=Object(c.useCallback)(function(){v.current=!1},[]),Q=Object(c.useCallback)(function(e){v.current&&i&&(i.scrollLeft=y.current+(T.current-e.clientX),y.current=i.scrollLeft,T.current=e.clientX)},[i]),Z=Object(c.useCallback)(function(e){var t=e.target
t.scrollLeft>0?t.scrollLeft+t.offsetWidth+1>=t.scrollWidth?m("left"):m("both"):m("right")},[m])
if(Object(c.useEffect)(function(){var e,t=n.current
return t&&"UL"===t.childNodes[0].nodeName&&(e=t.childNodes[0],b(e),e.scrollWidth>e.offsetWidth&&m("right"),e.addEventListener("scroll",Z)),function(){e&&e.removeEventListener("scroll",Z)}},[Z]),!I.length)return null
var $={marginTop:U,marginRight:M,marginBottom:W,marginLeft:A,paddingTop:B,paddingRight:z,paddingBottom:H,paddingLeft:K},ee={minHeight:O,textAlign:S},te={defaultIndex:j}
E&&($["--tabs-border"]=E,$["--tabs-border-color"]=F),D&&($["--tabs-border-width"]=D),G&&($["--tabs-border-radius"]=G)
var ne=I.map(function(e,n){return d.a.createElement(f,{className:t.header,key:n},e)}),ae=c.Children.map(Y,function(e,n){return d.a.createElement(g,{key:n,className:t.panel,selectedClassName:t.panelSelected},e)}),re=t["navigation".concat(k(P))],oe=t["content".concat(k(P))],se=h?t["navigationGradient".concat(k(h))]:null
return d.a.createElement(x,r()({style:$,className:[t.root].concat(s()(J)).join(" "),disabledTabClassName:t.disabled,selectedTabClassName:t.selected},te),d.a.createElement("div",{className:se,ref:n},d.a.createElement(N,{onMouseDown:V,onMouseUp:q,onMouseMove:Q,onMouseLeave:q,className:re},ne)),d.a.createElement("div",{className:oe,style:ee},ae))}
R.propTypes={classes:Object(b.shape)({header:b.string,panelSelected:b.string,panel:b.string,contentLeft:b.string,contentCenter:b.string,contentRight:b.string,navigationLeft:b.string,navigationCenter:b.string,navigationRight:b.string,navigationGradientLeft:b.string,navigationGradientRight:b.string,navigationGradientBoth:b.string,disabled:b.string,selected:b.string,item:b.string}),tabNavigationAlignment:Object(b.oneOf)(["left","center","right"]),minHeight:b.string,defaultIndex:b.number,headers:Object(b.arrayOf)(b.string),textAlign:b.string,border:b.string,borderColor:b.string,borderWidth:b.string,borderRadius:b.string,marginTop:b.string,marginRight:b.string,marginBottom:b.string,marginLeft:b.string,paddingTop:b.string,paddingRight:b.string,paddingBottom:b.string,paddingLeft:b.string,cssClasses:Object(b.arrayOf)(b.string)}
var I=R},yWOS:function(e,t,n){"use strict"
var a=n("PBB4"),r=n.n(a)()(function(e){return e[1]})
r.push([e.i,".tabs-root-25t {\n    -webkit-tap-highlight-color: transparent;\n    --tabs-border: solid;\n    --tabs-border-color: #ccc;\n    --tabs-border-width: 1px;\n    --tabs-border-radius: 0px;\n}\n\n.tabs-root-25t ul li.tabs-header-xw4.tabs-selected-CjG {\n    background: #fff;\n    z-index: 3;\n}\n\n.tabs-root-25t ul.tabs-navigation-heO {\n    display: block;\n    font-size: 0;\n    margin: 0 0 calc(var(--tabs-border-width) * -1);\n    white-space: nowrap;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\nul.tabs-navigation-heO::-webkit-scrollbar {\n    display: none;\n}\n.tabs-navigationLeft-DPU {\n    text-align: left;\n}\n.tabs-navigationCenter-1Ys {\n    text-align: center;\n}\n.tabs-navigationRight-mU9 {\n    text-align: right;\n}\n\n.tabs-navigationGradientLeft-27c,\n.tabs-navigationGradientBoth-1fm,\n.tabs-navigationGradientRight-3ig {\n    position: relative;\n}\n.tabs-navigationGradientLeft-27c:before,\n.tabs-navigationGradientBoth-1fm:before {\n    pointer-events: none;\n    opacity: 1;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: var(--tabs-border-width);\n    content: '';\n    display: block;\n    width: 100px;\n    z-index: 4;\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 1) 0%,\n        rgba(255, 255, 255, 0) 100%\n    );\n}\n.tabs-navigationGradientRight-3ig:after,\n.tabs-navigationGradientBoth-1fm:after {\n    pointer-events: none;\n    opacity: 1;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: var(--tabs-border-width);\n    content: '';\n    display: block;\n    width: 100px;\n    z-index: 4;\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 1) 100%\n    );\n}\n\n.tabs-root-25t ul li.tabs-header-xw4 {\n    list-style: none;\n    background: rgb(var(--venia-global-color-gray));\n    border: var(--tabs-border-width) var(--tabs-border) var(--tabs-border-color);\n    border-bottom: 0;\n    border-top-left-radius: var(--tabs-border-radius);\n    border-top-right-radius: var(--tabs-border-radius);\n    display: inline-block;\n    margin: 0;\n    max-width: 100%;\n    overflow-wrap: break-word;\n    position: relative;\n    word-wrap: break-word;\n    z-index: 1;\n    color: rgb(var(--venia-global-color-text));\n    cursor: pointer !important;\n    font-size: 14px;\n    font-weight: 600;\n    padding: 0.875rem 1.25rem;\n    transition: background-color 0.3s;\n    vertical-align: bottom;\n    white-space: normal;\n}\n\n.tabs-root-25t ul li.tabs-header-xw4:focus {\n    outline: 0;\n}\n\n.tabs-root-25t ul li.tabs-header-xw4:focus:after {\n    content: '';\n    position: absolute;\n    height: 5px;\n    left: -4px;\n    right: -4px;\n    bottom: -5px;\n    background: #fff;\n}\n\n.tabs-root-25t ul li.tabs-header-xw4:not(:first-child) {\n    margin-left: calc(var(--tabs-border-width) * -1);\n}\n\n.tabs-panel-nk0 {\n    min-height: inherit;\n}\n\n.tabs-panelSelected-10N {\n    display: block;\n}\n\n.tabs-panel-nk0:empty {\n    display: none !important; /* Necessary because of inline styles; to be fixed in MC-18326 */\n}\n\n.tabs-content-2PP {\n    border: var(--tabs-border-width) var(--tabs-border) var(--tabs-border-color);\n    overflow: hidden;\n    position: relative;\n    z-index: 2;\n    border-radius: var(--tabs-border-radius);\n}\n.tabs-contentLeft-1tm {\n    border-top-left-radius: 0px;\n}\n.tabs-contentCenter-29v {\n}\n.tabs-contentRight-i7H {\n    border-top-right-radius: 0px;\n}\n\n.tabs-root-25t ul.tabs-navigation-heO li:first-child {\n    margin-left: 0 !important;\n}\n\n.tabs-disabled-3aN {\n    color: GrayText;\n    cursor: default;\n}\n\n.tabs-item-1ja {\n    min-height: inherit;\n}\n\n.tabs-item-1ja:not(:first-child) {\n    display: none;\n}\n\n@media only screen and (max-width: 768px) {\n    .tabs-item-1ja {\n        background-attachment: scroll !important;\n    }\n}\n",""]),r.locals={root:"tabs-root-25t",header:"tabs-header-xw4",selected:"tabs-selected-CjG",navigation:"tabs-navigation-heO",navigationLeft:"tabs-navigationLeft-DPU tabs-navigation-heO",navigationCenter:"tabs-navigationCenter-1Ys tabs-navigation-heO",navigationRight:"tabs-navigationRight-mU9 tabs-navigation-heO",navigationGradientLeft:"tabs-navigationGradientLeft-27c",navigationGradientBoth:"tabs-navigationGradientBoth-1fm",navigationGradientRight:"tabs-navigationGradientRight-3ig",panel:"tabs-panel-nk0",panelSelected:"tabs-panelSelected-10N",content:"tabs-content-2PP",contentLeft:"tabs-contentLeft-1tm tabs-content-2PP",contentCenter:"tabs-contentCenter-29v tabs-content-2PP",contentRight:"tabs-contentRight-i7H tabs-content-2PP",disabled:"tabs-disabled-3aN",item:"tabs-item-1ja"},t.a=r}}])