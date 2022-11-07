/*!
 * @version caa1f67-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"5PnS":function(n,t,e){"use strict"
function showFogLoading(){document.getElementById("app-loading").style.display="flex"}function hideFogLoading(){document.getElementById("app-loading").style.display="none"}e.d(t,"b",function(){return showFogLoading}),e.d(t,"a",function(){return hideFogLoading})},Gkk9:function(n,t,e){"use strict"
e.d(t,"a",function(){return a})
var u,i=e("VkAN"),o=e.n(i),c=e("x8tt"),a=Object(c.gql)(u||(u=o()(["\n    mutation SignOutFromMenu {\n        revokeCustomerToken {\n            result\n        }\n    }\n"])))
t.b={signOutMutation:a}},cQCn:function(n,t,e){"use strict"
e.r(t)
var u=e("ERkP"),i=e("o0o1"),o=e.n(i),c=e("yXPU"),a=e.n(c),s=e("J4zp"),r=e.n(s),l=e("FITH"),g=e("x8tt"),d=e("cG95"),b=e("GpxZ"),f=e("5PnS"),O=e("zCf4"),p=e("Gkk9")
t.default=function Logout(n){var t=n.history,e=function useMyAccount(n){var t=Object(g.useApolloClient)(),e=Object(u.useState)(!1),i=r()(e,2),c=(i[0],i[1]),s=n.signOutMutation,p=Object(l.b)(),k=r()(p,2),j=k[0],m=j.isSignedIn,w=j.currentUser,h=k[1].signOut,y=Object(g.useMutation)(s),S=r()(y,1)[0],x=Object(O.g)(),v=w.email,M=w.firstname,F=w.lastname,I="".concat(M," ").concat(F).trim()||"My Account",C=v?I:"Signing Out",L=v||"Please wait..."
return{handleSignOut:Object(u.useCallback)(a()(o.a.mark(function _callee(){return o.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return Object(f.b)(),c(!0),n.next=4,h({revokeToken:S})
case 4:return n.next=6,Object(d.a)(t)
case 6:return n.next=8,Object(b.a)(t)
case 8:x.go(0),Object(f.a)()
case 10:case"end":return n.stop()}},_callee)})),[t,x,S,h]),subtitle:L,title:C,isSignedIn:m}}({signOutMutation:p.a}),i=e.handleSignOut,c=e.isSignedIn
return Object(u.useEffect)(function(){c?i():t.push("/")},[c,i]),null}}}])
