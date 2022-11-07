/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"7crE":function(e,a,t){"use strict"
t.r(a)
var r=t("ERkP"),n=t.n(r),o=t("vtqO"),c=t("T2Eh"),i=t("Ej6s"),d=t("zCf4"),l=t("6sB8"),m=t("Vgyk")
a.default=function Category(e){var a=Object(d.i)().categoryUrl,t=void 0===a?"":a,r=Object(c.a)(),u=r.categoryData
if(r.categoryLoading)return i.a
if(!u||!u.mpbrandCategories||!u.mpbrandCategories.length)return n.a.createElement(l.a,{id:"brand.NoCategoryFound",defaultMessage:"Cannot find category"})
var g,s=t.replace(".html","")
return u.mpbrandCategories.map(function(e){e.url_key===s&&(g=e)}),g&&g.cat_id&&g.name?n.a.createElement(n.a.Fragment,null,g.meta_title&&n.a.createElement(m.a,null,n.a.createElement("title",null,g.meta_title)),g.meta_keywords&&n.a.createElement(m.a,null,n.a.createElement("meta",{name:"keywords",content:g.meta_keywords})),g.meta_description&&n.a.createElement(m.a,null,n.a.createElement("meta",{name:"description",content:g.meta_description})),n.a.createElement(o.a,{categoryId:g.cat_id,categoryName:g.name})):n.a.createElement(l.a,{id:"brand.NoCategoryFound",defaultMessage:"Cannot find category"})}},T2Eh:function(e,a,t){"use strict"
t.d(a,"a",function(){return o})
var r=t("d7Ma"),n=t("x8tt"),o=function useBrandCategory(e){var a=Object(n.useQuery)(r.b,{fetchPolicy:"cache-and-network"})
return{categoryData:a.data,categoryLoading:a.loading,categoryError:a.error}}}}])
