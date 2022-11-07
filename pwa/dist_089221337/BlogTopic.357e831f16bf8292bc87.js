/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{QjoE:function(e,a,t){"use strict"
t.r(a)
var l=t("ERkP"),n=t.n(l),c=t("21K/"),m=t("10Es"),i=t("NKFv"),o=t("3Lm4"),r=t("YR8S"),s=t("TJEr"),p=t("TTam"),d=t("Iqkd"),u=t("Wk1l"),E=t("zCf4"),b=t("eYVk"),g=t("x8tt"),f=t("GJUv"),v=t("UPvi"),k=t("kQwz")
a.default=function Topic(e){var a=Object(E.i)().topicUrl,t=void 0===a?"":a,l=Object(k.a)().formatMessage,_=Object(g.useQuery)(f.m,{variables:{url_key:t.replace(".html","")},skip:!t}),w=_.data
if(_.loading)return n.a.createElement(b.a,null)
if(!(w&&w.mpBlogTopics&&w.mpBlogTopics.items&&w.mpBlogTopics.items[0]))return l({id:"notFind",defaultMessage:"Cannot find item"})
var T=w.mpBlogTopics.items[0]
return n.a.createElement("div",{className:"".concat(m.a.mainCtn," container")},n.a.createElement(v.c,null,T.meta_title?T.meta_title:T.name),n.a.createElement(v.a,{name:"description",content:T.meta_description}),n.a.createElement(v.a,{name:"keywords",content:T.meta_keywords}),n.a.createElement(v.a,{name:"robots",content:T.meta_robots}),n.a.createElement(c.a,{items:[{label:l({id:"blog",defaultMessage:"Blog"}),path:"/blog.html"},{label:T.name}]}),n.a.createElement("h1",null,T.name),n.a.createElement("div",{className:m.a.blogRoot},n.a.createElement("div",{className:m.a.blogListing},n.a.createElement(i.a,{classes:m.a,filterType:"get_post_by_topic",filterValue:T.topic_id})),n.a.createElement("div",{className:m.a.blogSidebar},n.a.createElement(o.a,null),n.a.createElement(d.a,null),n.a.createElement(r.a,null),n.a.createElement(u.a,null),n.a.createElement(p.a,null),n.a.createElement(s.a,null))))}}}])
