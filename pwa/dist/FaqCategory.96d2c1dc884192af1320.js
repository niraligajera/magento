/*!
 * @version 956525a-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"1Rd6":function(e,n,t){"use strict"
t.r(n)
var a=t("J4zp"),r=t.n(a),i=t("ERkP"),o=t.n(i),l=t("zCf4"),c=t("Vgyk"),s=t("GQfX"),m=t("4QIS"),g=t("4uo0"),u=t("x8tt"),p=t("Kcy8"),d=t("VDSs"),f=t("kQwz")
n.default=function Category(e){var n=Object(l.i)().categoryUrl,t=void 0===n?"":n,a=Object(f.a)().formatMessage,h=function useCategoryListUrl(e){var n,t=e.url_key,a=Object(u.useQuery)(p.c,{variables:{urlKey:t},fetchPolicy:"no-cache"}),r=a.data,i=a.loading,o=a.error
if(o){var l=o
n=l.graphQLErrors?l.graphQLErrors.map(function(e){return e.message}).join(", "):l.message}return{categoryData:r,categoryLoading:i,derivedErrorMessage:n}}({url_key:t}),b=h.categoryData,y=(h.categoryLoading,h.categoryErrorMessage,Object(d.a)()),E=y.categoriesData,w=(y.categoriesLoading,y.categoriesError,Object(i.useState)("")),k=r()(w,2),x=k[0],v=k[1],C=Object(i.useState)(""),z=r()(C,2),L=z[0],S=z[1],A=Object(i.useState)([]),I=r()(A,2),N=I[0],j=I[1],M=Object(i.useState)(!1),O=r()(M,2),T=O[0],B=O[1],Q=Object(i.useState)(!1),_=r()(Q,2),q=_[0],F=_[1]
if(Object(i.useEffect)(function(){if(b){var e=b.MpMageplazaFaqsCategoryList.items
j(e)}},[q]),Object(i.useEffect)(function(){setTimeout(function(){return F(!0)},2e3)}),!b||!b.MpMageplazaFaqsCategoryList)return o.a.createElement(m.a,null)
if(!E||!E.MpMageplazaFaqsCategoryList)return o.a.createElement(m.a,null)
return o.a.createElement("div",{className:"container"},o.a.createElement(c.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,N.length?N[0].name:"",a({id:"answerAndQuestion",defaultMessage:"- Frequently Answer and Question"}))),o.a.createElement(s.a,{onChange:function onChange(e){v(e.target.value)},userInput:x,onSearch:function onSearch(){B(!0),setTimeout(function(){B(!1),j(""!=x?E.MpMageplazaFaqsCategoryList.items:b.MpMageplazaFaqsCategoryList.items),S(x)},500)}}),o.a.createElement(g.a,{loading:T,categories:N,searchInput:L,reRender:q}))}},"4uo0":function(e,n,t){"use strict"
var a=t("ERkP"),r=t.n(a),i=t("Ks66"),o=t("4QIS"),l=t("LboF"),c=t.n(l),s=t("ELeS"),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(c()(s.a,m),s.a.locals||{})
n.a=function CategoriesList(e){var n=g,t=e.categories,a=e.searchInput,l=e.column,c=e.loading,s=e.reRender,m=JSON.parse(JSON.stringify(t))
m=m.map(function(e){return e.articles.items=e.articles.items.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}),e})
var u=0,p=m.map(function(e){if(e.articles.items.length)return r.a.createElement(i.a,{key:e.category_id,data:e,column:l,searchInput:a})
u++})
return u===m.length&&(p=r.a.createElement("div",null,"There is no FAQ match with your search.")),s||(p=r.a.createElement("div",null)),r.a.createElement("div",{className:n.container},c?r.a.createElement(o.a,null):"",r.a.createElement("div",{className:n.section},p))}},"6TrS":function(e,n,t){"use strict"
var a=t("PBB4"),r=t.n(a)()(function(e){return e[1]})
r.push([e.i,".CategoryBlock-block-39J {\n    left: auto;\n    right: auto;\n\tfloat: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n    min-height: 1px;\n    margin-bottom: 15px;\n    margin-left: 0 !important;\n}\n\n.CategoryBlock-category-1V3 {\n    box-sizing: inherit;\n    padding: 5px;\n    margin-bottom: 15px;\n}\n\nh4 > a {\n\tfont-weight: inherit;\n\tcolor: inherit !important;\n\t-webkit-tap-highlight-color: transparent;\n    box-sizing: inherit;\n    cursor: pointer;\n}\n\nh4 > a:hover {\n  color: #1abc9c !important;\n} \n\nh4 {\n\tfont-size: 1.4rem;\n    line-height: 110%;\n    margin: 1rem 0 0.6rem 0;\n    display: block;\n    box-sizing: inherit;\n}\n\nhr {\n\tborder-top: solid 2px #1abc9c;\n    width: 100%;\n    margin: 10px 0 0 0;\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n}\n.CategoryBlock-wrapIcon-1Pi{\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -0.125em;\n    width: 1.125em;\n}\nspan {\n\t/* color: #fff !important; */\n    font-size: 0.9rem;\n    box-sizing: inherit;\n}\n@media (max-width: 768px) {\n    .CategoryBlock-block-39J{\n        padding: 0;\n        width: 100%!important;\n    }\n}",""]),r.locals={block:"CategoryBlock-block-39J",category:"CategoryBlock-category-1V3",wrapIcon:"CategoryBlock-wrapIcon-1Pi"},n.a=r},ELeS:function(e,n,t){"use strict"
var a=t("PBB4"),r=t.n(a)()(function(e){return e[1]})
r.push([e.i,".CategoriesList-container-22H {\n    position: relative;\n    font-size: 14px;\n    line-height: 1.5;\n    font-family: Roboto;\n    font-weight: normal;\n    font-style: normal;\n    color: rgba(0, 0, 0, 0.87);\n    box-sizing: border-box;\n    display: block;\n}\n\n.CategoriesList-section-1Tu {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 25px;\n    padding-left: 30px;\n    padding-right: 30px;\n\tbackground-color: #f2f2f3 !important;\n\tmargin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    box-sizing: inherit;\n}\n@media (max-width: 768px) {\n    .CategoriesList-section-1Tu{\n        padding-left: 0;\n        padding-right: 15px;\n    }\n}",""]),r.locals={container:"CategoriesList-container-22H",section:"CategoriesList-section-1Tu"},n.a=r},Ks66:function(e,n,t){"use strict"
var a=t("ERkP"),r=t.n(a),i=t("LboF"),o=t.n(i),l=t("6TrS"),c={injectType:"singletonStyleTag",insert:"head",singleton:!0},s=(o()(l.a,c),l.a.locals||{}),m=t("J4zp"),g=t.n(m),u=t("liap"),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(o()(u.a,p),u.a.locals||{}),f=t("daAW"),h=t("T8kG"),b=t("kQwz"),y=function Articles(e){var n=d,t=Object(b.a)().formatMessage,i=e.articles,o=Object(a.useState)(!1),l=g()(o,2),c=l[0],s=l[1],m=function onClick(){s(!c)}
i.slice(3,i.length).map(function(e){return r.a.createElement("li",{key:e.article_id},r.a.createElement("div",{className:n.header},r.a.createElement("span",null,r.a.createElement(f.b,{to:"/faq/article/".concat(e.url_key)},r.a.createElement("span",{className:n.wrapIcon},r.a.createElement(h.f,{size:25})),e.name))))})
return r.a.createElement("ul",{className:n.articles},i.slice(0,3).map(function(e){return r.a.createElement("li",{key:e.article_id},r.a.createElement("div",{className:n.header},r.a.createElement("span",null,r.a.createElement(f.b,{to:"/faq/article/".concat(e.url_key)},r.a.createElement("span",{className:n.wrapIcon},r.a.createElement(h.f,null)),e.name))))}),i.length<=3?null:c?r.a.createElement(a.Fragment,null,i.slice(3,i.length).map(function(e){return r.a.createElement("li",{key:e.article_id},r.a.createElement("div",{className:n.header},r.a.createElement("span",null,r.a.createElement(f.b,{to:"/faq/article/".concat(e.url_key)},r.a.createElement("span",{className:n.wrapIcon},r.a.createElement(h.f,null)),e.name))))}),r.a.createElement("a",{className:n.extend,onClick:m},r.a.createElement(h.b,null),t({id:"showLess",defaultMessage:" Show less"}))):r.a.createElement("a",{className:n.extend,onClick:m},r.a.createElement(h.a,null),t({id:"viewAll",defaultMessage:" View all"})))}
n.a=function CategoryBlock(e){var n=e.data,t=n.url_key,a=n.name,i=n.articles,o=n.icon,l=s,c=100/e.column,m="".concat(c,"%")
return r.a.createElement("div",{className:l.block,style:{width:m}},r.a.createElement("div",{className:l.category},r.a.createElement("h4",null,r.a.createElement("span",{className:l.wrapIcon},r.a.createElement(h.f,null)),r.a.createElement(f.b,{to:"/faq/category/".concat(t)},r.a.createElement("i",{className:o})," ",a," ",r.a.createElement("span",null,"(".concat(i.items.length,")"))),r.a.createElement("hr",null))),r.a.createElement(y,{articles:i.items,searchInput:e.searchInput}))}},liap:function(e,n,t){"use strict"
var a=t("PBB4"),r=t.n(a)()(function(e){return e[1]})
r.push([e.i,".Articles-articles-C8K {\n    margin: 0.5rem 0 1rem 0;\n    border: none !important;\n    box-shadow: none !important;\n    display: block;\n    list-style-type: disc;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n    -webkit-padding-start: 40px;\n            padding-inline-start: 40px;\n}\n\n.Articles-articles-C8K li, .Articles-extend-3pQ {\n    margin-bottom: 0;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    box-sizing: inherit;\n    margin-top: 0rem;\n}\n.Articles-wrapIcon-21G svg{\n    font-size: 1rem;\n    display: inline-block;\n    text-align: center;\n    margin-right: 1rem;\n    color: #ccc;\n    width: 0.75em;\n    overflow: visible;\n}\n.Articles-extend-3pQ {\n    font-weight: 600\n}\n\n.Articles-header-34R {\n\tpadding: 0;\n    background: transparent;\n    border: none;\n    cursor: unset;\n    display: flex;\n    line-height: 1.5;\n    box-sizing: inherit;\n}\n\na {\n\tcolor: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n::marker {\n    unicode-bidi: -webkit-isolate;\n    unicode-bidi: -moz-isolate;\n    unicode-bidi: isolate;\n    font-variant-numeric: tabular-nums;\n    text-transform: none;\n    font-size: 1.2em;\n}\n\n.Articles-icon-5uH, .Articles-arrow-28_ {\n    width: 1rem;\n    font-size: 1rem;\n    display: inline-block;\n    text-align: center;\n    margin-right: 1rem;\n    color: #ccc;\n}\n\n.Articles-arrow-28_ {\n    color: #000;\n}",""]),r.locals={articles:"Articles-articles-C8K",extend:"Articles-extend-3pQ",wrapIcon:"Articles-wrapIcon-21G",header:"Articles-header-34R",icon:"Articles-icon-5uH",arrow:"Articles-arrow-28_"},n.a=r}}])
