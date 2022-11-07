/*!
 * @version 956525a-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{J7hn:function(e,a,t){"use strict"
t.r(a)
var l=t("ERkP"),r=t.n(l),n=t("21K/"),c=t("10Es"),s=t("NKFv"),i=t("3Lm4"),o=t("YR8S"),m=t("TJEr"),b=t("TTam"),u=t("Iqkd"),p=t("Wk1l"),h=t("zCf4"),d=t("eYVk"),g=t("x8tt"),E=t("GJUv"),k=t("UPvi"),v=t("kQwz")
a.default=function Category(e){var a,t=Object(h.i)().monthUrl,l=void 0===t?"":t,f=Object(v.a)().formatMessage,y=l.replace(".html","").replace(" ","").split("-"),M=parseInt(y[1]),w=parseInt(y[0]),J=Object(g.useQuery)(E.a,{fetchPolicy:"no-cache"}),A=J.data
if(J.loading)return r.a.createElement(d.a,null)
if(!(A&&A.mpBlogMonthlyArchive&&A.mpBlogMonthlyArchive.items&&A.mpBlogMonthlyArchive.items[0]))return f({id:"notFind",defaultMessage:"Cannot find item"})
!function handleData(){A.mpBlogMonthlyArchive.items.forEach(function(e){var t=e.label.replace(" ","").replace(" ","").split(",")
switch(t[0]?t[0]:""){case"January":t[0]="01"
break
case"Febuary":t[0]="02"
break
case"March":t[0]="03"
break
case"April":t[0]="04"
break
case"May":t[0]="05"
break
case"June":t[0]="06"
break
case"July":t[0]="07"
break
case"August":t[0]="08"
break
case"September":t[0]="09"
break
case"October":t[0]="10"
break
case"November":t[0]="11"
break
case"December":t[0]="12"}var l=parseInt(t[0]),r=parseInt(t[1])
return M===l&&w===r&&(a=Object.assign({},e)),a})}()
var N=a||{}
return r.a.createElement("div",{className:"".concat(c.a.mainCtn," container")},r.a.createElement(k.c,null,N?N.label:""),r.a.createElement(n.a,{items:[{label:f({id:"blog",defaultMessage:"Blog"}),path:"/blog.html"},{label:N.label}]}),r.a.createElement("h1",null,N?N.label:""),r.a.createElement("div",{className:c.a.blogRoot},r.a.createElement("div",{className:c.a.blogListing},r.a.createElement(s.a,{classes:c.a,filterType:"get_post_by_date_time",filterValue:"".concat(y[0],"-").concat(y[1])})),r.a.createElement("div",{className:c.a.blogSidebar},r.a.createElement(i.a,null),r.a.createElement(u.a,null),r.a.createElement(o.a,null),r.a.createElement(p.a,null),r.a.createElement(b.a,null),r.a.createElement(m.a,null))))}}}])
