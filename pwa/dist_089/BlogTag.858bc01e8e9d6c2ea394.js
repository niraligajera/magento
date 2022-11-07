/*! @version 12.0.0-bb701dc00a0a1d48e980 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{o4i9:function(e,a,t){"use strict"
t.r(a)
var l=t("ERkP"),n=t.n(l),m=t("21K/"),r=t("10Es"),s=t("NKFv"),c=t("3Lm4"),i=t("YR8S"),o=t("TJEr"),g=t("TTam"),u=t("Iqkd"),d=t("Wk1l"),E=t("zCf4"),b=t("eYVk"),p=t("x8tt"),f=t("GJUv"),v=t("UPvi"),k=t("kQwz")
a.default=function Tag(e){var a=Object(E.i)().tagUrl,t=void 0===a?"":a,l=Object(k.a)().formatMessage,w=Object(p.useQuery)(f.l,{variables:{url_key:t.replace(".html","")},skip:!t}),T=w.data
if(w.loading)return n.a.createElement(b.a,null)
if(!(T&&T.mpBlogTags&&T.mpBlogTags.items&&T.mpBlogTags.items[0]))return l({id:"notFind",defaultMessage:"Cannot find item"})
var _=T.mpBlogTags.items[0]
return n.a.createElement("div",{className:"".concat(r.a.mainCtn," container")},n.a.createElement(v.c,null,_.meta_title?_.meta_title:_.name),n.a.createElement(v.a,{name:"description",content:_.meta_description}),n.a.createElement(v.a,{name:"keywords",content:_.meta_keywords}),n.a.createElement(v.a,{name:"robots",content:_.meta_robots}),n.a.createElement(m.a,{items:[{label:l({id:"blog",defaultMessage:"Blog"}),path:"/blog.html"},{label:_.name}]}),n.a.createElement("h1",null,_.name),n.a.createElement("div",{className:r.a.blogRoot},n.a.createElement("div",{className:r.a.blogListing},n.a.createElement(s.a,{classes:r.a,filterType:"get_post_by_tagName",filterValue:_.name})),n.a.createElement("div",{className:r.a.blogSidebar},n.a.createElement(c.a,null),n.a.createElement(u.a,null),n.a.createElement(i.a,null),n.a.createElement(d.a,null),n.a.createElement(g.a,null),n.a.createElement(o.a,null))))}}}])
