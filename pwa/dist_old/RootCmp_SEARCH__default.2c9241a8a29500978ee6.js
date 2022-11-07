/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.6.0, @magento/upward-security-headers: ~1.0.10, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ~11.4.0, @magento/peregrine: ~12.5.1, @magento/pagebuilder: ~7.4.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0Ip5":function(e,t,a){"use strict"
var n=a("JPst"),r=a.n(n)()(function(e){return e[1]})
r.push([e.i,".searchPage-root-z9X {\n}\n\n.searchPage-noResult-u1x {\n}\n\n.searchPage-headerButtons-Gt1 {\n    flex-basis: 100%;\n}\n\n.searchPage-heading-K4n {\n}\n\n.searchPage-searchContent-6z0 {\n}\n\n.searchPage-searchInfo-GU7 {\n}\n\n@media (min-width: 960px) {\n    .searchPage-searchInfo-GU7 {\n        flex-basis: 100%;\n    }\n}\n\n.searchPage-totalPages-TJ1 {\n}\n\n.searchPage-headingHighlight-BYR {\n}\n\n.searchPage-sidebar-oT7 {\n}\n",""]),r.locals={root:"searchPage-root-z9X p-xs lg_flex lg_flex-nowrap",noResult:"searchPage-noResult-u1x flex",headerButtons:"searchPage-headerButtons-Gt1 flex justify-center mx-0 my-xs lg_justify-end",heading:"searchPage-heading-K4n flex flex-wrap justify-center lg_flex-nowrap lg_items-center lg_justify-between",searchContent:"searchPage-searchContent-6z0 lg_flex-grow",searchInfo:"searchPage-searchInfo-GU7 leading-tight max-w-[75vw] mb-xs ml-0 mr-0 mt-10 lg_m-0",totalPages:"searchPage-totalPages-TJ1 ml-2xs",headingHighlight:"searchPage-headingHighlight-BYR font-bold",sidebar:"searchPage-sidebar-oT7 hidden lg_flex lg_self-start lg_pt-16 lg_w-filterSidebarWidth"},t.a=r},N6ZK:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return te})
var n,r,l,s,c,i=a("J4zp"),o=a.n(i),u=a("q1tI"),g=a.n(u),h=a("dDsW"),d=a("kriW"),m=a("17x9"),p=a("RIqP"),f=a.n(p),b=a("+TN3"),P=a("Lm/n"),y=a("Ty5D"),E=a("y1Xp"),S=a("OlZo"),v=a("Cszt"),j=a("PKba"),_=a("IOPv"),O=a("Unmo"),w=a("+wQL"),x=a("VkAN"),N=a.n(x),R=a("UYTu"),z=Object(R.a)(n||(n=N()(["\n    query getPageSize {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        storeConfig {\n            store_code\n            grid_per_page\n        }\n    }\n"]))),T=Object(R.a)(r||(r=N()(["\n    query getProductFiltersBySearch($search: String!) {\n        products(search: $search) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n                position\n            }\n        }\n    }\n"]))),C=Object(R.a)(l||(l=N()(["\n    query ProductSearch(\n        $currentPage: Int = 1\n        $inputText: String!\n        $pageSize: Int = 6\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        products(\n            currentPage: $currentPage\n            pageSize: $pageSize\n            search: $inputText\n            filter: $filters\n            sort: $sort\n        ) {\n            items {\n                id\n                uid\n                name\n                price_range {\n                    maximum_price {\n                        final_price {\n                            currency\n                            value\n                        }\n                        regular_price {\n                            currency\n                            value\n                        }\n                        discount {\n                            amount_off\n                        }\n                    }\n                }\n                sku\n                small_image {\n                    url\n                }\n                stock_status\n                __typename\n                url_key\n            }\n            page_info {\n                total_pages\n            }\n            total_count\n        }\n    }\n"]))),F={getFilterInputsQuery:Object(R.a)(s||(s=N()(['\n    query GetFilterInputsForSearch {\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n']))),getPageSize:z,getProductFiltersBySearchQuery:T,getSearchAvailableSortMethods:Object(R.a)(c||(c=N()(["\n    query getSearchAvailableSortMethods($search: String!) {\n        products(search: $search) {\n            sort_fields {\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n"]))),productSearchQuery:C},I=a("Cess"),M=a("C0us"),k=a("rP9t"),$=a("vh/y"),A=a("tuiD"),q=a("JCOj"),B=a("LboF"),D=a.n(B),U=a("0Ip5"),L={injectType:"singletonStyleTag",insert:"head",singleton:!0},Q=(D()(U.a,L),U.a.locals||{}),J=a("Y5d+"),G=a("hbEb"),H=a("pezu"),K=a("RL9Z"),Y=a("LlM3"),W=a("zrp3"),X=a("UPvi"),Z=g.a.lazy(()=>Promise.all([a.e(0),a.e(2),a.e(9)]).then(a.bind(null,"dzHx"))),V=g.a.lazy(()=>Promise.all([a.e(0),a.e(2),a.e(12)]).then(a.bind(null,"SAkj"))),ee=e=>{var t=Object(E.a)(Q,e.classes),a=function useSearchPage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(I.b)(),a=o()(t,2)[1].dispatch,n=Object(E.a)(F,e.operations),r=n.getFilterInputsQuery,l=n.getPageSize,s=n.getProductFiltersBySearchQuery,c=n.getSearchAvailableSortMethods,i=n.productSearchQuery,g=Object(b.a)(l,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}).data,h=Object(P.a)(c,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),d=o()(h,2),m=d[0],p=d[1].data,x=g&&g.storeConfig.grid_per_page,N=Object(O.a)({sortFromSearch:!0}),R=o()(N,1)[0],z=R.sortAttribute,T=R.sortDirection,C=Object(u.useRef)(R),M=Object(y.h)(),k=M.search,$=Object(u.useRef)(k),A=Object(v.a)(),q=o()(A,2),B=q[0],D=q[1],U=B.currentPage,L=B.totalPages,Q=D.setCurrentPage,J=D.setTotalPages,G=Object(S.b)(),H=o()(G,2)[1],K=H.toggleDrawer,Y=H.actions.setPageLoading,W=Object(_.a)("query",M),X=Object(u.useMemo)(()=>{var e=Object(w.c)(k)
if(0===e.size)return null
var t=e.get("category_id")
return t?f()(t).map(e=>e.split(",")[0]).join(", "):null},[k]),Z=Object(u.useCallback)(()=>{K("filter")},[K]),V=Object(b.a)(r),ee=V.called,te=V.data,ae=V.loading,ne=Object(u.useMemo)(()=>{var e=new Map
return te&&te.__type.inputFields.forEach(t=>{var a=t.name,n=t.type
e.set(a,n.name)}),e},[te]),re={currentPage:U,setPage:Q,totalPages:L},le=Object(P.a)(i,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),se=o()(le,2),ce=se[0],ie=se[1],oe=ie.called,ue=ie.loading,ge=ie.error,he=ie.data,de=!!he&&ue
Object(u.useEffect)(()=>{Y(de)},[de,Y])
var me=Object(u.useRef)(!1)
Object(u.useEffect)(()=>{var e=new URLSearchParams($.current),t=new URLSearchParams(k)
e.delete("page"),t.delete("page"),e.toString()===t.toString()&&C.current.sortAttribute.toString()===R.sortAttribute.toString()&&C.current.sortDirection.toString()===R.sortDirection.toString()||(Q(1,!0),$.current=k,C.current=R,me.current=!1)},[R,k,Q]),Object(u.useEffect)(()=>{if(ne.size&&x){var e=Object(w.c)(k),t={},n=[]
e.forEach((e,a)=>{var r=ne.get(a)
t[a]=Object(w.b)(e,r),n.push({attribute:a,value:e,isRange:"FilterRangeTypeInput"===r})}),ce({variables:{currentPage:Number(U),filters:t,inputText:W,pageSize:Number(x),sort:{[z]:T}}}),me.current||(a({type:"SEARCH_REQUEST",payload:{query:W,refinements:n,sort:{attribute:z,order:T},pageSize:Number(x),currentPage:Number(U)}}),me.current=!0)}},[U,ne,W,ce,x,k,T,z,a]),Object(u.useEffect)(()=>{var e=he?he.products.page_info.total_pages:null
return J(e),()=>{J(null)}},[he,J]),Object(u.useEffect)(()=>{W&&m({variables:{search:W}})},[W,m])
var pe=Object(P.a)(s,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),fe=o()(pe,2),be=fe[0],Pe=fe[1].data
Object(u.useEffect)(()=>{W&&be({variables:{search:W}})},[be,W,k])
var ye=Pe?Pe.products.aggregations:null,Ee=ee&&!oe||ue||ae
return Object(j.a)(U),{availableSortMethods:p?p.products.sort_fields.options:null,data:he,error:ge,filters:ye,loading:Ee,openDrawer:Z,pageControl:re,searchCategory:X,searchTerm:W,sortProps:N}}(),n=a.availableSortMethods,r=a.data,l=a.error,s=a.filters,c=a.loading,i=a.pageControl,m=a.searchCategory,p=a.searchTerm,x=a.sortProps,N=Object(h.a)().formatMessage,R=o()(x,1)[0],z=Object(u.useMemo)(()=>!r&&c?g.a.createElement(u.Fragment,null,g.a.createElement("section",{className:t.gallery},g.a.createElement(k.a,{items:Array.from({length:12}).fill(null)})),g.a.createElement("section",{className:t.pagination})):!r&&l?g.a.createElement("div",{"aria-live":"polite",className:t.noResult},g.a.createElement(d.a,{id:"searchPage.noResult",defaultMessage:"No results found. The search term may be missing or invalid."})):r?0===r.products.items.length?g.a.createElement("div",{"aria-live":"polite",className:t.noResult},g.a.createElement(d.a,{id:"searchPage.noResultImportant",defaultMessage:"No results found!"})):g.a.createElement(u.Fragment,null,g.a.createElement("section",{className:t.gallery},g.a.createElement($.a,{items:r.products.items})),g.a.createElement("section",{className:t.pagination},g.a.createElement(M.a,{pageControl:i}))):null,[t.gallery,t.noResult,t.pagination,l,c,r,i]),T=r&&r.products&&r.products.total_count?r.products.total_count:0,C=s&&s.length,B=null===s,D=T&&n,U=!T&&c,L=C?g.a.createElement(H.a,{filters:s}):B?g.a.createElement(K.a,null):null,ee=C?g.a.createElement(Z,{filters:s}):null,te=C?g.a.createElement(V,{filters:s}):B?g.a.createElement(Y.a,null):null,ae=D?n&&g.a.createElement(A.a,{sortProps:x,availableSortMethods:n}):U?g.a.createElement(q.a,null):null,ne=D?g.a.createElement(J.a,{currentSort:R}):U?g.a.createElement(G.a,null):null,re=c?g.a.createElement(W.a,{width:5}):r?p?g.a.createElement(d.a,{id:"searchPage.searchTerm",values:{highlight:e=>g.a.createElement("span",{className:t.headingHighlight},e),category:m,term:p},defaultMessage:"Showing results for <highlight>{term}</highlight>{category, select, null {} other { in <highlight>{category}</highlight>}}:"}):g.a.createElement(d.a,{id:"searchPage.searchTermEmpty",defaultMessage:"Showing all results:"}):null,le=r&&!c?g.a.createElement("span",{"aria-live":"polite","aria-busy":"true",className:t.totalPages},N({id:"searchPage.totalPages",defaultMessage:"{totalCount} items"},{totalCount:T})):c?g.a.createElement(W.a,{width:5}):null,se=[p,"".concat("Default Store View"," Search")].filter(Boolean).join(" - ")
return g.a.createElement("article",{className:t.root},g.a.createElement("div",{className:t.sidebar},g.a.createElement(u.Suspense,{fallback:g.a.createElement(Y.a,null)},te)),g.a.createElement("div",{className:t.searchContent},g.a.createElement("div",{className:t.heading},g.a.createElement("div",{className:t.searchInfo},re,le),g.a.createElement("div",{className:t.headerButtons},L,ae),ne),z,g.a.createElement(u.Suspense,{fallback:null},ee)),g.a.createElement(X.c,null,se),g.a.createElement(X.a,{name:"title",content:se}),g.a.createElement(X.a,{name:"description",content:se}))},te=ee
ee.propTypes={classes:Object(m.shape)({noResult:m.string,root:m.string,totalPages:m.string})}}}])
