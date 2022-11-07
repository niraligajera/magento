/*! @version 12.0.0-bb701dc00a0a1d48e980 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{ztep:function(e,a,t){"use strict"
t.r(a)
var l=t("ERkP"),n=t.n(l),r=t("21K/"),c=t("10Es"),m=t("NKFv"),o=t("3Lm4"),i=t("YR8S"),s=t("TJEr"),d=t("TTam"),g=t("Iqkd"),u=t("Wk1l"),E=t("zCf4"),b=t("eYVk"),p=t("x8tt"),f=t("GJUv"),v=t("UPvi"),k=t("kQwz")
a.default=function Category(e){var a=Object(E.i)().categoryUrl,t=void 0===a?"":a,l=Object(k.a)().formatMessage,y=Object(p.useQuery)(f.h,{variables:{url_key:t.replace(".html","")},skip:!t,fetchPolicy:"no-cache"}),_=y.data
if(y.loading)return n.a.createElement(b.a,null)
if(!(_&&_.mpBlogCategories&&_.mpBlogCategories.items&&_.mpBlogCategories.items[0]))return l({id:"notFind",defaultMessage:"Cannot find item"})
var w=_.mpBlogCategories.items[0]
return n.a.createElement("div",{className:"".concat(c.a.mainCtn," container")},n.a.createElement(v.c,null,w.meta_title?w.meta_title:w.name),n.a.createElement(v.a,{name:"description",content:w.meta_description}),n.a.createElement(v.a,{name:"keywords",content:w.meta_keywords}),n.a.createElement(v.a,{name:"robots",content:w.meta_robots}),n.a.createElement(r.a,{items:[{label:l({id:"blog",defaultMessage:"Blog"}),path:"/blog.html"},{label:w.name}]}),n.a.createElement("h1",null,w.name),n.a.createElement("div",{className:c.a.blogRoot},n.a.createElement("div",{className:c.a.blogListing},n.a.createElement(m.a,{classes:c.a,filterType:"get_post_by_categoryId",filterValue:w.category_id})),n.a.createElement("div",{className:c.a.blogSidebar},n.a.createElement(o.a,null),n.a.createElement(g.a,null),n.a.createElement(i.a,null),n.a.createElement(u.a,null),n.a.createElement(d.a,null),n.a.createElement(s.a,null))))}}}])
