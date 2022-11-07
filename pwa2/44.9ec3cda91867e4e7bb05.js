/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"8M+E":function(e,t,s){"use strict"
s.r(t)
var o=s("tu45")
s.d(t,"default",function(){return o.a})},JJz0:function(e,t,s){"use strict"
var o=s("PBB4"),n=s.n(o)()(function(e){return e[1]})
n.push([e.i,".addToListButton-root-3FX {\n    -moz-column-gap: 0.5rem;\n         column-gap: 0.5rem;\n    display: inline-flex;\n    align-items: center;\n    min-height: 3rem;\n    min-width: 3rem;\n}\n\n.addToListButton-root_selected-VCZ {\n    --selectedColor: rgb(var(--venia-global-color-red-400));\n    --fill: var(--selectedColor);\n    --stroke: var(--selectedColor);\n\n    text-decoration: none;\n}\n",""]),n.locals={root:"addToListButton-root-3FX",root_selected:"addToListButton-root_selected-VCZ addToListButton-root-3FX"},t.a=n},JypR:function(e,t,s){"use strict"
s.d(t,"a",function(){return u})
var o,n,r=s("7wq/"),i=s.n(r),a=s("x8tt"),c=Object(a.gql)(o||(o=i()(["\n    mutation AddProductToWishlistFromGallery(\n        $wishlistId: ID!\n        $itemOptions: WishlistItemInput!\n    ) {\n        addProductsToWishlist(\n            wishlistId: $wishlistId\n            wishlistItems: [$itemOptions]\n        ) {\n            user_errors {\n                code\n                message\n            }\n        }\n    }\n"]))),u=Object(a.gql)(n||(n=i()(["\n    query GetProductsInWishlistsForGallery {\n        customerWishlistProducts @client\n    }\n"])))
t.b={addProductToWishlistMutation:c,getProductsInWishlistsQuery:u}},tu45:function(e,t,s){"use strict"
var o=s("97Jx"),n=s.n(o),r=s("ERkP"),i=s.n(r),a=s("aWzz"),c=s("x+w+"),u=s("VtSi"),l=s.n(u),d=s("RhWx"),b=s.n(d),p=s("cbiG"),f=s.n(p),g=s("ddV6"),m=s.n(g),h=s("kQwz"),y=s("x8tt"),O=s("o353"),j=s("YyrX"),P=s("JypR"),w=s("I4nd"),T=s("dN+G"),v=s("LboF"),x=s.n(v),W=s("JJz0"),S={injectType:"singletonStyleTag",insert:"head",singleton:!0},M=(x()(W.a,S),W.a.locals||{}),k=s("KEM+"),I=s.n(k),_=s("xStg"),E=s("W30r"),B=s("N2Z1"),z=s("UW3U")
function ownKeys(e,t){var s=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,o)}return s}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(s),!0).forEach(function(t){I()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ownKeys(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var J=i.a.createElement(T.a,{size:20,src:_.a}),A=i.a.createElement(T.a,{size:20,src:E.a}),C=i.a.createElement(T.a,{size:20,src:B.a}),F=i.a.createElement(T.a,{size:20,src:c.a}),L=function AddToListButton(e){var t=function useSingleWishlist(e){var t=e.afterAdd,s=e.beforeAdd,o=e.item,n=Object(j.a)(P.b,e.operations),i=Object(y.useMutation)(n.addProductToWishlistMutation),a=m()(i,2),c=a[0],u=a[1],d=u.data,p=u.error,g=u.loading,w=Object(y.useQuery)(n.getProductsInWishlistsQuery),T=w.client,v=w.data.customerWishlistProducts,x=Object(r.useMemo)(function(){return v.includes(o.sku)||g},[v,g,o.sku]),W=Object(r.useState)(0),S=m()(W,2),M=S[0],k=S[1],I=Object(h.a)().formatMessage,_=Object(O.b)(),E=m()(_,1)[0].isSignedIn,B=Object(r.useCallback)(f()(l.a.mark(function _callee(){return l.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=4
break}k(function(e){return++e}),e.next=17
break
case 4:if(e.prev=4,!s){e.next=8
break}return e.next=8,s()
case 8:return e.next=10,c({variables:{wishlistId:"0",itemOptions:o}})
case 10:T.writeQuery({query:n.getProductsInWishlistsQuery,data:{customerWishlistProducts:[].concat(b()(v),[o.sku])}}),t&&t(),e.next=17
break
case 14:e.prev=14,e.t0=e.catch(4)
case 17:case"end":return e.stop()}},_callee,null,[[4,14]])})),[c,t,s,T,v,E,o,n.getProductsInWishlistsQuery]),z=Object(r.useMemo)(function(){return M?{type:"info",message:I({id:"wishlist.galleryButton.loginMessage",defaultMessage:"Please sign-in to your Account to save items for later."}),timeout:5e3}:null},[I,M]),J=Object(r.useMemo)(function(){return d?{type:"success",message:I({id:"wishlist.galleryButton.successMessageGeneral",defaultMessage:"Item successfully added to your favorites list."}),timeout:5e3}:null},[d,I]),A=Object(r.useMemo)(function(){return p?{type:"error",message:I({id:"wishlist.galleryButton.addError",defaultMessage:"Something went wrong adding the product to your wishlist."}),timeout:5e3}:null},[p,I])
return{buttonProps:Object(r.useMemo)(function(){return{"aria-label":I({id:"wishlistButton.addText",defaultMessage:"Add to Favorites"}),isDisabled:x,onPress:B,type:"button"}},[I,B,x]),buttonText:e.buttonText&&e.buttonText(x),customerWishlistProducts:v,errorToastProps:A,handleClick:B,isSelected:x,loginToastProps:z,successToastProps:J}}(e),s=Object(r.useRef)(),o=t.buttonProps,a=t.buttonText,c=t.errorToastProps,u=t.isSelected
!function useCommonToasts(e){var t=e.errorToastProps,s=e.loginToastProps,o=e.successToastProps,n=Object(z.a)(),i=m()(n,2)[1].addToast
Object(r.useEffect)(function(){s&&i(_objectSpread(_objectSpread({},s),{},{icon:C}))},[i,s]),Object(r.useEffect)(function(){o&&i(_objectSpread(_objectSpread({},o),{},{icon:J}))},[i,o]),Object(r.useEffect)(function(){t&&i(_objectSpread(_objectSpread({},t),{},{icon:A}))},[i,t])}({errorToastProps:c,loginToastProps:t.loginToastProps,successToastProps:t.successToastProps})
var d=Object(w.a)(o,s).buttonProps,p=Object(j.a)(M,e.classes),g=u?p.root_selected:p.root
return i.a.createElement("button",n()({ref:s,className:g},d),e.icon," ",a)}
t.a=L
L.defaultProps={icon:F},L.propTypes={afterAdd:a.func,beforeAdd:a.func,classes:Object(a.shape)({root:a.string,root_selected:a.string}),icon:a.element}}}])
