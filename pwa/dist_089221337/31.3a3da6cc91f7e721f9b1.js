/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{XWZH:function(n,e,t){"use strict"
t.r(e)
var a=t("ERkP"),o=t.n(a),i=t("6sB8"),r=t("aWzz"),d=t("S2ny"),l=t("J4zp"),s=t.n(l),c=t("OlZo"),p=t("y1Xp"),m=t("oTwF"),h=t("TsSr"),g=t("+y/R"),u=t("LboF"),b=t.n(u),f=t("t95y"),v={injectType:"singletonStyleTag",insert:"head",singleton:!0},y=(b()(f.a,v),f.a.locals||{}),w=function EditModal(n){var e=n.classes,t=n.shippingData,a=n.onSuccess,r=function useEditModal(){var n=Object(c.b)(),e=s()(n,2),t=e[0].drawer
return{handleClose:e[1].closeDrawer,isOpen:"shippingInformation.edit"===t}}(),l=r.handleClose,u=r.isOpen,b=Object(p.a)(y,e),f=u?b.root_open:b.root,v=u?o.a.createElement(g.a,{onSuccess:a,afterSubmit:l,onCancel:l,shippingData:t}):null
return o.a.createElement(h.a,null,o.a.createElement("aside",{className:f},o.a.createElement("div",{className:b.header},o.a.createElement("span",{className:b.headerText},o.a.createElement(i.a,{id:"checkoutPage.editShippingInfo",defaultMessage:"Edit Shipping Information"})),o.a.createElement("button",{className:b.closeButton,onClick:l},o.a.createElement(m.a,{src:d.a}))),o.a.createElement("div",{className:b.body},v)))}
e.default=w
w.propTypes={classes:Object(r.shape)({root:r.string,root_open:r.string,body:r.string,header:r.string,headerText:r.string}),shippingData:r.object}},t95y:function(n,e,t){"use strict"
var a=t("PBB4"),o=t.n(a)()(function(n){return n[1]})
o.push([n.i,".editModal-root-2kW {\n    background-color: white;\n    display: grid;\n    left: calc(50% - 370px);\n    grid-template-rows: auto 1fr;\n    max-height: 90vh;\n    max-width: 740px;\n    opacity: 0;\n    overflow: hidden;\n    position: fixed;\n    top: 5vh;\n    transform: scale(1.15);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    transition-property: opacity, transform, visibility;\n    visibility: hidden;\n    width: 100%;\n    z-index: 3;\n}\n\n.editModal-root_open-jeJ {\n    box-shadow: 1px 0 rgb(var(--venia-global-color-border));\n    opacity: 1;\n    transform: scale(1);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n    visibility: visible;\n}\n\n.editModal-body-1U3 {\n    overflow: auto;\n    padding: 0.5rem 2rem;\n}\n\n.editModal-header-h7u {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    padding: 0.875rem 2rem;\n}\n\n.editModal-headerText-i_l {\n    align-self: center;\n    color: rgb(var(--venia-global-color-text-alt));\n}\n\n@media (max-width: 960px) {\n    .editModal-root-2kW {\n        bottom: 0;\n        height: 100%;\n        left: auto;\n        max-height: none;\n        max-width: 360px;\n        right: 0;\n        top: 0;\n        transform: translate3d(100%, 0, 0);\n    }\n\n    .editModal-root_open-jeJ {\n        transform: translate3d(0, 0, 0);\n    }\n\n    .editModal-body-1U3 {\n        padding: 0.5rem 1rem;\n    }\n\n    .editModal-header-h7u {\n        padding: 0.875rem;\n    }\n}\n",""]),o.locals={root:"editModal-root-2kW",root_open:"editModal-root_open-jeJ editModal-root-2kW editModal-root-2kW",body:"editModal-body-1U3",header:"editModal-header-h7u",headerText:"editModal-headerText-i_l"},e.a=o}}])
