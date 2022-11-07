/*!
 * @version v12.0.0-rc.1-1-ge0e1a2b6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"5mk7":function(e,n,a){"use strict"
var t=a("PBB4"),o=a.n(t),r=a("+HDA"),i=o()(function(e){return e[1]})
i.i(r.a,"",!0),i.push([e.i,".accountInformationPage-root-1Z- {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.accountInformationPage-title-3Y2 {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-accountDetails-3c7 {\n    display: grid;\n    row-gap: 2rem;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.accountInformationPage-lineItemsContainer-2da {\n    grid-column: 1 / span 1;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    line-height: 1.5rem;\n}\n\n.accountInformationPage-lineItemLabel-1Pw {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-nameLabel-17j,\n.accountInformationPage-emailLabel-2HY,\n.accountInformationPage-passwordLabel-1p6 {\n}\n\n.accountInformationPage-nameValue-1n6,\n.accountInformationPage-emailValue-29h,\n.accountInformationPage-passwordValue-JtL {\n}\n\n.accountInformationPage-editButtonContainer-y1p {\n    grid-column: 1 / span 1;\n    text-align: center;\n}\n\n.accountInformationPage-editInformationButton-3WB {\n}\n\n@media (min-width: 961px) {\n    .accountInformationPage-nameLabel-17j,\n    .accountInformationPage-emailLabel-2HY,\n    .accountInformationPage-passwordLabel-1p6 {\n    }\n}\n\n@media (max-width: 960px) {\n    .accountInformationPage-accountDetails-3c7 {\n        grid-template-columns: 1fr;\n    }\n\n    .accountInformationPage-lineItemsContainer-2da {\n        grid-template-columns: 1fr;\n        grid-gap: 0.75rem;\n    }\n}\n",""]),i.locals={root:"accountInformationPage-root-1Z-",title:"accountInformationPage-title-3Y2",accountDetails:"accountInformationPage-accountDetails-3c7",lineItemsContainer:"accountInformationPage-lineItemsContainer-2da",lineItemLabel:"accountInformationPage-lineItemLabel-1Pw",nameLabel:"accountInformationPage-nameLabel-17j accountInformationPage-lineItemLabel-1Pw accountInformationPage-lineItemLabel-1Pw",emailLabel:"accountInformationPage-emailLabel-2HY accountInformationPage-lineItemLabel-1Pw accountInformationPage-lineItemLabel-1Pw",passwordLabel:"accountInformationPage-passwordLabel-1p6 accountInformationPage-lineItemLabel-1Pw accountInformationPage-lineItemLabel-1Pw",nameValue:"accountInformationPage-nameValue-1n6",emailValue:"accountInformationPage-emailValue-29h",passwordValue:"accountInformationPage-passwordValue-JtL",editButtonContainer:"accountInformationPage-editButtonContainer-y1p",editInformationButton:"accountInformationPage-editInformationButton-3WB "+r.a.locals.root_normalPriority},n.a=i},IEum:function(e,n,a){"use strict"
var t=a("PBB4"),o=a.n(t)()(function(e){return e[1]})
o.push([e.i,".message-root-2op {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-2op:empty {\n    display: none;\n}\n\n.message-root_error-16K {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),o.locals={root:"message-root-2op",root_error:"message-root_error-16K message-root-2op"},n.a=o},TuC4:function(e,n,a){"use strict"
var t=a("ERkP"),o=a.n(t),r=a("kQwz"),i=a("aWzz"),s=a("LboF"),c=a.n(s),l=a("IEum"),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},u=(c()(l.a,m),l.a.locals||{}),d=a("YyrX"),g=function Message(e){var n,a=e.children,t=e.classes,i=e.fieldState,s=Object(r.a)().formatMessage,c=i.error,l=Object(d.a)(u,t),m=c?l.root_error:l.root
return c&&(n=s({id:c.id,defaultMessage:c.defaultMessage},{value:c.value})),o.a.createElement("p",{className:m},n||a)}
n.a=g
g.defaultProps={fieldState:{}},g.propTypes={children:i.node,classes:Object(i.shape)({root:i.string,root_error:i.string}),fieldState:Object(i.shape)({error:Object(i.shape)({id:i.string,defaultMessage:i.string,value:Object(i.oneOfType)([i.number,i.string])})})}},dVp0:function(e,n,a){"use strict"
a.r(n),a.d(n,"default",function(){return A})
var t,o,r,i,s=a("KEM+"),c=a.n(s),l=a("ERkP"),m=a.n(l),u=a("kQwz"),d=a("6sB8"),g=a("VtSi"),f=a.n(g),b=a("cbiG"),p=a.n(b),P=a("ddV6"),w=a.n(P),I=a("x8tt"),h=a("o353"),y=a("YyrX"),O=a("loE8"),j=a("TuC4"),E=a("lYeQ"),v=a("mHFa"),C=a("LboF"),L=a.n(C),M=a("5mk7"),k={injectType:"singletonStyleTag",insert:"head",singleton:!0},S=(L()(M.a,k),M.a.locals||{}),V=a("7wq/"),N=a.n(V),B=Object(I.gql)(t||(t=N()(["\n    fragment AccountInformationPageFragment on Customer {\n        id\n        firstname\n        lastname\n        email\n    }\n"]))),D={mutations:{setCustomerInformationMutation:Object(I.gql)(o||(o=N()(['\n    mutation SetCustomerInformation($customerInput: CustomerInput!) {\n        updateCustomer(input: $customerInput)\n            @connection(key: "updateCustomer") {\n            customer {\n                id\n                ...AccountInformationPageFragment\n            }\n        }\n    }\n    ',"\n"])),B),changeCustomerPasswordMutation:Object(I.gql)(r||(r=N()(['\n    mutation ChangeCustomerPassword(\n        $currentPassword: String!\n        $newPassword: String!\n    ) {\n        changeCustomerPassword(\n            currentPassword: $currentPassword\n            newPassword: $newPassword\n        ) @connection(key: "changeCustomerPassword") {\n            id\n            email\n        }\n    }\n'])))},queries:{getCustomerInformationQuery:Object(I.gql)(i||(i=N()(["\n    query GetCustomerInformation {\n        customer {\n            id\n            ...AccountInformationPageFragment\n        }\n    }\n    ","\n"])),B)}}
function ownKeys(e,n){var a=Object.keys(e)
if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e)
n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}var x=m.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(34)]).then(a.bind(null,"VxGk"))}),A=function AccountInformationPage(e){var n=Object(y.a)(S,e.classes),a=function useAccountInformationPage(e){var n,a=e.mutations,t=a.setCustomerInformationMutation,o=a.changeCustomerPasswordMutation,r=e.queries.getCustomerInformationQuery,i=Object(h.b)(),s=w()(i,1)[0].isSignedIn,c=Object(l.useState)(!1),m=w()(c,2),u=m[0],d=m[1],g=Object(l.useState)(!1),b=w()(g,2),P=b[0],y=b[1],O=Object(l.useState)(!1),j=w()(O,2),E=j[0],v=j[1],C=Object(I.useQuery)(r,{skip:!s,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),L=C.data,M=C.error,k=Object(I.useMutation)(t),S=w()(k,2),V=S[0],N=S[1],B=N.error,D=N.loading,x=Object(I.useMutation)(o),A=w()(x,2),_=A[0],F=A[1],T=F.error,q=F.loading,Y=Object(l.useMemo)(function(){if(L)return{customer:L.customer}},[L]),$=Object(l.useCallback)(function(){d(!0)},[d]),z=Object(l.useCallback)(function(){y(!1),d(!1)},[y]),K=Object(l.useCallback)(function(){y(!0),v(!1)},[y]),Q=Object(l.useCallback)((n=p()(f.a.mark(function _callee(e){var n,a,t,o,r
return f.a.wrap(function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.email,a=e.firstname,t=e.lastname,o=e.password,r=e.newPassword,i.prev=1,n=n.trim(),a=a.trim(),t=t.trim(),o=o.trim(),r=r?r.trim():r,Y.customer.email===n&&Y.customer.firstname===a&&Y.customer.lastname===t){i.next=10
break}return i.next=10,V({variables:{customerInput:{email:n,firstname:a,lastname:t,password:o}}})
case 10:if(!o||!r){i.next=13
break}return i.next=13,_({variables:{currentPassword:o,newPassword:r}})
case 13:z(!1),i.next=20
break
case 16:return i.prev=16,i.t0=i.catch(1),v(!0),i.abrupt("return")
case 20:case"end":return i.stop()}},_callee,null,[[1,16]])})),function(e){return n.apply(this,arguments)}),[V,z,_,Y])
return{handleCancel:z,formErrors:E?[B,T]:[],handleSubmit:Q,handleChangePassword:$,initialValues:Y,isDisabled:D||q,isUpdateMode:P,loadDataError:M,shouldShowNewPassword:u,showUpdateMode:K}}(function _objectSpread(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(a),!0).forEach(function(n){c()(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}({},D)),t=a.handleCancel,o=a.formErrors,r=a.handleChangePassword,i=a.handleSubmit,s=a.initialValues,g=a.isDisabled,b=a.isUpdateMode,P=a.loadDataError,C=a.shouldShowNewPassword,L=a.showUpdateMode,M=Object(u.a)().formatMessage,k=P?m.a.createElement(j.a,null,m.a.createElement(d.a,{id:"accountInformationPage.errorTryAgain",defaultMessage:"Something went wrong. Please refresh and try again."})):null,V=null
if(!s)return v.a
var N=s.customer,B="".concat(N.firstname," ").concat(N.lastname)
return V=m.a.createElement(l.Fragment,null,m.a.createElement("div",{className:n.accountDetails},m.a.createElement("div",{className:n.lineItemsContainer},m.a.createElement("span",{className:n.nameLabel},m.a.createElement(d.a,{id:"global.name",defaultMessage:"Name"})),m.a.createElement("span",{className:n.nameValue},B),m.a.createElement("span",{className:n.emailLabel},m.a.createElement(d.a,{id:"global.email",defaultMessage:"Email"})),m.a.createElement("span",{className:n.emailValue},N.email),m.a.createElement("span",{className:n.passwordLabel},m.a.createElement(d.a,{id:"global.password",defaultMessage:"Password"})),m.a.createElement("span",{className:n.passwordValue},"***********")),m.a.createElement("div",{className:n.editButtonContainer},m.a.createElement(O.a,{className:n.editInformationButton,disabled:!1,onClick:L,priority:"normal"},m.a.createElement(d.a,{id:"global.editButton",defaultMessage:"Edit"})))),m.a.createElement(l.Suspense,{fallback:null},m.a.createElement(x,{formErrors:o,initialValues:N,isDisabled:g,isOpen:b,onCancel:t,onChangePassword:r,onSubmit:i,shouldShowNewPassword:C}))),m.a.createElement("div",{className:n.root},m.a.createElement(E.b,null,M({id:"accountInformationPage.titleAccount",defaultMessage:"Account Information"})),m.a.createElement("h1",{className:n.title},m.a.createElement(d.a,{id:"accountInformationPage.accountInformation",defaultMessage:"Account Information"})),k||V)}}}])