(this.webpackJsonpmalong=this.webpackJsonpmalong||[]).push([[0],{41:function(e,n){},66:function(e,n){},67:function(e,n){},68:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(42),i=t.n(a),o=t(8),d=t(32),j=t(9),s=t(19),l=t.n(s),b=t(22),x=t(4),h=t(33);t(52),t(69);h.a.initializeApp({apiKey:"AIzaSyAu2E8hHKTZOm37zke0JogTrq8wgIh_kdo",authDomain:"malong-107a8.firebaseapp.com",projectId:"malong-107a8",storageBucket:"malong-107a8.appspot.com",messagingSenderId:"8344814137",appId:"1:8344814137:web:1af64d1e1ad04a365803e8"});var u,p,O,f,m,y,g,w,k,v,C,P,D,T,F,S,z,q,E,I,Y,A,R,V,M,_,B,G,J,K,L,W,H,U,Z,N,Q,X,$,ee,ne,te,ce,re,ae,ie,oe,de,je,se,le,be=h.a.auth(),xe=h.a.firestore(),he=t(3),ue=t(1),pe=he.c.div(u||(u=Object(x.a)(["\n  width: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  margin-top: 80px;\n  margin-bottom: 40px;\n"]))),Oe=he.c.div(p||(p=Object(x.a)(["\n  width: 250px;\n  height: 250px;\n  border: 10px solid #00b894;\n  border-radius: 100%;\n  font-size: 65px;\n  font-weight: 900;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n"]))),fe=he.c.div(O||(O=Object(x.a)(["\n  width: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),me=he.c.input(f||(f=Object(x.a)(["\n  width: 100%;\n  border: none;\n  outline: none;\n  padding: 15px 25px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  border-radius: 25px;\n  background-color: #00b894;\n  color: white;\n"]))),ye=he.c.input(m||(m=Object(x.a)(["\n  width: 100%;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  border-radius: 25px;\n  border: 2px solid #00b894;\n  color: #00b894;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  &:hover {\n    background-color: white;\n  }\n"]))),ge=he.c.div(y||(y=Object(x.a)(["\n  color: #00b894;\n  font-size: 18px;\n  font-weight: 700;\n  text-decoration: underline;\n  cursor: pointer;\n"]))),we=function(){var e=Object(c.useState)(""),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),d=i[0],j=i[1],s=Object(c.useState)(!1),x=Object(o.a)(s,2),h=x[0],u=x[1],p=Object(c.useState)(""),O=Object(o.a)(p,2),f=O[0],m=O[1],y=function(){var e=Object(b.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!h){e.next=10;break}return e.next=5,be.createUserWithEmailAndPassword(t,d);case 5:return c=e.sent,e.next=8,c.user.sendEmailVerification();case 8:e.next=12;break;case 10:return e.next=12,be.signInWithEmailAndPassword(t,d);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),m(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}(),g=function(e){var n=e.target,t=n.name,c=n.value;"email"===t?r(c):"password"===t&&j(c)};return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(pe,{children:Object(ue.jsx)(Oe,{children:"\ub9c8\ub871\uc774"})}),Object(ue.jsx)("form",{onSubmit:y,children:Object(ue.jsxs)(fe,{children:[Object(ue.jsx)(me,{name:"email",type:"text",placeholder:"Email",value:t,onChange:g,required:!0}),Object(ue.jsx)(me,{name:"password",type:"password",placeholder:"Password",value:d,onChange:g,required:!0}),Object(ue.jsx)(ye,{type:"submit",value:h?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778",required:!0}),Object(ue.jsx)(ge,{onClick:function(){return u((function(e){return!e}))},children:h?"\ub85c\uadf8\uc778\ud558\ub7ec \uac00\uae30":"\ud68c\uc6d0\uac00\uc785\ud558\ub7ec \uac00\uae30"}),f]})})]})},ke=t(21),ve=t(27),Ce=t(12),Pe=t(13),De=he.c.div(g||(g=Object(x.a)(["\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: white;\n"]))),Te=he.c.div(w||(w=Object(x.a)(["\n  width: inherit;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),Fe=he.c.div(k||(k=Object(x.a)(["\n  min-width: 200px;\n  min-width: 100px;\n  padding: 10px 15px;\n  flex: 0 0 auto;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n"]))),Se=he.c.div(v||(v=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ze=he.c.div(C||(C=Object(x.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]))),qe=he.c.div(P||(P=Object(x.a)(["\n  max-width: 200px;\n  font-size: 14px;\n"]))),Ee=he.c.label(D||(D=Object(x.a)(["\n  display: inline-block;\n  width: auto;\n  padding: 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  border: 0.5px solid #636e72;\n  cursor: pointer;\n  &:not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),Ie=he.c.input(T||(T=Object(x.a)(["\n  display: none;\n  &:checked + "," {\n    font-weight: 700;\n    border: 3px solid #00b894;\n    color: #2d3436;\n  }\n"])),Ee),Ye=he.c.input(F||(F=Object(x.a)(["\n  width: 160px;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 700;\n  outline: none;\n  background-color: rgba(245, 245, 245, 1);\n  border-width: 0 0 3px;\n  border-color: #00b894;\n  color: #2d3436;\n"]))),Ae=he.c.div(S||(S=Object(x.a)(["\n  position: relative;\n"]))),Re=he.c.div(z||(z=Object(x.a)(["\n  position: absolute;\n  bottom: 15px;\n  right: 0;\n"]))),Ve=he.c.input(q||(q=Object(x.a)(["\n  width: 160px;\n  height: 40px;\n  padding: 0px 5px;\n  background-color: white;\n  border: 3px solid #00b894;\n  color: black;\n  outline: none;\n  font-weight: 700;\n  font-size: 16px;\n  border-radius: 10px;\n"]))),Me=he.c.div(E||(E=Object(x.a)(["\n  cursor: pointer;\n  text-align: center;\n"]))),_e=he.c.div(I||(I=Object(x.a)(["\n  padding: 8px 10px;\n  border: 3px solid #0984e3;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  background-color: #0984e3;\n  color: white;\n"]))),Be=he.c.div(Y||(Y=Object(x.a)(["\n  padding: 8px 10px;\n  border: 3px solid #d63031;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  color: white;\n  background-color: #d63031;\n"]))),Ge=he.c.input(A||(A=Object(x.a)(["\n  background-color: #00b894;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  height: 40px;\n  width: 100px;\n  font-weight: 700;\n  color: white;\n  border-radius: 5px;\n"]))),Je=he.c.div(R||(R=Object(x.a)(["\n  margin-left: 5px;\n  display: inline-block;\n  color: red;\n  height: 40px;\n  width: 80px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.1s linear;\n  &:hover {\n    background-color: red;\n    color: white;\n    border-radius: 5px;\n  }\n"]))),Ke=he.c.div(V||(V=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 10px;\n"]))),Le=function(e){var n=e.CreateProject,t=e.initValues,r=e.initCheckValues,a=e.userObj,i=e.projectObj,d=e.setEdit,j=e.setAddProject,s=Object(c.useState)(t),x=Object(o.a)(s,2),h=x[0],u=x[1],p=Object(c.useState)(r.downPayCheck),O=Object(o.a)(p,2),f=O[0],m=O[1],y=Object(c.useState)(r.downPayTaxCheck),g=Object(o.a)(y,2),w=g[0],k=g[1],v=Object(c.useState)(r.orderCheck),C=Object(o.a)(v,2),P=C[0],D=C[1],T=Object(c.useState)(r.deliveryCheck),F=Object(o.a)(T,2),S=F[0],z=F[1],q=Object(c.useState)(r.upPayCheck),E=Object(o.a)(q,2),I=E[0],Y=E[1],A=Object(c.useState)(r.upPayTaxCheck),R=Object(o.a)(A,2),V=R[0],M=R[1],_=function(){return m((function(e){return!e}))},B=function(){return k((function(e){return!e}))},G=function(){return D((function(e){return!e}))},J=function(){return z((function(e){return!e}))},K=function(){return Y((function(e){return!e}))},L=function(){return M((function(e){return!e}))},W=h.client,H=h.material,U=h.contents,Z=h.deliveryDate,N=h.orderDeliveryDate,Q=h.contract,X=h.orderCompany,$=h.downPay,ee=h.upPay,ne=h.downPayTaxDate,te=h.upPayTaxDate,ce=function(e){var n=e.target,t=n.value,c=n.name;u("downPay"===c||"upPay"===c?Object(ke.a)(Object(ke.a)({},h),{},Object(ve.a)({},c,function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}(t.toString().replace(/[^0-9.]/g,"")))):Object(ke.a)(Object(ke.a)({},h),{},Object(ve.a)({},c,t)))},re=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,xe.collection("projects").add({client:W,material:H,contents:U,deliveryDate:Z,orderDeliveryDate:N,contract:Q,downPay:$,downPayCheck:f,downPayTaxCheck:w,orderCheck:P,orderCompany:X,deliveryCheck:S,upPay:ee,upPayCheck:I,downPayTaxDate:ne,upPayTaxDate:te,upPayTaxCheck:V,createAt:Date.now(),creatorId:a.uid,completion:!1});case 3:j(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ae=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,xe.doc("projects/".concat(i.id)).update({client:W,material:H,contents:U,deliveryDate:Z,orderDeliveryDate:N,contract:Q,downPay:$,downPayCheck:f,downPayTaxCheck:w,orderCheck:P,orderCompany:X,deliveryCheck:S,upPay:ee,upPayCheck:I,downPayTaxDate:ne,upPayTaxDate:te,upPayTaxCheck:V});case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(ue.jsx)("form",{onSubmit:n?re:ae,children:Object(ue.jsxs)(De,{children:[Object(ue.jsxs)(Te,{children:[Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8"}),Object(ue.jsx)(Ye,{onChange:ce,value:W,name:"client",type:"text",placeholder:"\uae30\uc5c5\uba85",required:!0})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\uc18c\uc7ac"}),Object(ue.jsxs)(qe,{children:[Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"\uc2a4\ud2f0\ub85c\ud3fc",id:"\uc2a4\ud2f0\ub85c\ud3fc",checked:"\uc2a4\ud2f0\ub85c\ud3fc"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uc2a4\ud2f0\ub85c\ud3fc",children:"\uc2a4\ud2f0\ub85c\ud3fc"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"FRP",id:"FRP",checked:"FRP"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"FRP",children:"FRP"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"EPS",id:"EPS",checked:"EPS"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"EPS",children:"EPS"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"\uae08\uc18d\uac00\uacf5",id:"\uae08\uc18d\uac00\uacf5",checked:"\uae08\uc18d\uac00\uacf5"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uae08\uc18d\uac00\uacf5",children:"\uae08\uc18d\uac00\uacf5"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"\ube0c\ub860\uc988",id:"\ube0c\ub860\uc988",checked:"\ube0c\ub860\uc988"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\ube0c\ub860\uc988",children:"\ube0c\ub860\uc988"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"\uc778\uacf5\ud3ed\ud3ec",id:"\uc778\uacf5\ud3ed\ud3ec",checked:"\uc778\uacf5\ud3ed\ud3ec"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uc778\uacf5\ud3ed\ud3ec",children:"\uc778\uacf5\ud3ed\ud3ec"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"GRC",id:"GRC",checked:"GRC"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"GRC",children:"GRC"}),Object(ue.jsx)(Ie,{type:"radio",name:"material",value:"\ub514\uc790\uc778",id:"\ub514\uc790\uc778",checked:"\ub514\uc790\uc778"===H,onChange:ce,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\ub514\uc790\uc778",children:"\ub514\uc790\uc778"})]})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\ucf58\ud150\uce20"}),Object(ue.jsx)(Ye,{type:"text",name:"contents",onChange:ce,value:U,placeholder:"\uc608) \uce90\ub9ad\ud130",required:!0})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\ub0a9\ud488\uc608\uc815\uc77c"}),Object(ue.jsx)(Ve,{type:"date",name:"deliveryDate",value:Z,onChange:ce,required:!0})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\ubc1c\uc8fc\uc0c1 \uc608\uc815\uc77c"}),Object(ue.jsx)(Ve,{type:"date",name:"orderDeliveryDate",value:N,onChange:ce,required:!0})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\uacc4\uc57d"}),Object(ue.jsxs)(qe,{children:[Object(ue.jsx)(Ie,{type:"radio",name:"contract",onChange:ce,value:"\uc2e4\ubb3c\uc11c\ub958(\ub4f1\uae30)",id:"\uc2e4\ubb3c\uc11c\ub958(\ub4f1\uae30)",checked:"\uc2e4\ubb3c\uc11c\ub958(\ub4f1\uae30)"===Q,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uc2e4\ubb3c\uc11c\ub958(\ub4f1\uae30)",children:"\uc2e4\ubb3c\uc11c\ub958(\ub4f1\uae30)"}),Object(ue.jsx)(Ie,{type:"radio",name:"contract",onChange:ce,value:"\uc804\uc790\uacc4\uc57d",id:"\uc804\uc790\uacc4\uc57d",checked:"\uc804\uc790\uacc4\uc57d"===Q,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uc804\uc790\uacc4\uc57d",children:"\uc804\uc790\uacc4\uc57d"}),Object(ue.jsx)(Ie,{type:"radio",name:"contract",onChange:ce,value:"\uc81c\uc791\uc758\ub8b0\uc11c",id:"\uc81c\uc791\uc758\ub8b0\uc11c",checked:"\uc81c\uc791\uc758\ub8b0\uc11c"===Q,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uc81c\uc791\uc758\ub8b0\uc11c",children:"\uc81c\uc791\uc758\ub8b0\uc11c"}),Object(ue.jsx)(Ie,{type:"radio",name:"contract",onChange:ce,value:"\uac1c\uc778\uacc4\uc57d",id:"\uac1c\uc778\uacc4\uc57d",checked:"\uac1c\uc778\uacc4\uc57d"===Q,required:!0}),Object(ue.jsx)(Ee,{htmlFor:"\uac1c\uc778\uacc4\uc57d",children:"\uac1c\uc778\uacc4\uc57d"})]})]})})]}),Object(ue.jsxs)(Te,{children:[Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\uacc4\uc57d\uae08"}),f?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:_,children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})})}):Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:_,children:Object(ue.jsx)(Be,{children:Object(ue.jsx)(Ce.a,{icon:Pe.e})})})}),Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)(Ye,{name:"downPay",type:"text",onChange:ce,value:$,placeholder:"\uae08\uc561"}),Object(ue.jsx)(Re,{children:"\uc6d0"})]})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\uacc4\uc57d\uae08 \uc138\uae08\uacc4\uc0b0\uc11c"}),w?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:B,children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})})}):Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:B,children:Object(ue.jsx)(Be,{children:Object(ue.jsx)(Ce.a,{icon:Pe.e})})})}),Object(ue.jsx)(Ve,{type:"date",name:"downPayTaxDate",value:ne,onChange:ce})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\ubc1c\uc8fc"}),P?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:G,children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})})}):Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:G,children:Object(ue.jsx)(Be,{children:Object(ue.jsx)(Ce.a,{icon:Pe.e})})})}),Object(ue.jsx)(Ye,{type:"text",name:"orderCompany",placeholder:"\ubc1c\uc8fc\ucc98",value:X,onChange:ce})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\ub0a9\ud488\uc5ec\ubd80"}),S?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:J,children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})})}):Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:J,children:Object(ue.jsx)(Be,{children:Object(ue.jsx)(Ce.a,{icon:Pe.e})})})})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\uc794\uae08"}),I?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:K,children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})})}):Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:K,children:Object(ue.jsx)(Be,{children:Object(ue.jsx)(Ce.a,{icon:Pe.e})})})}),Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)(Ye,{name:"upPay",type:"text",onChange:ce,value:ee,placeholder:"\uae08\uc561"}),Object(ue.jsx)(Re,{children:"\uc6d0"})]})]})}),Object(ue.jsx)(Fe,{children:Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(ze,{children:"\uc794\uae08 \uc138\uae08\uacc4\uc0b0\uc11c"}),V?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:L,children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})})}):Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Me,{onClick:L,children:Object(ue.jsx)(Be,{children:Object(ue.jsx)(Ce.a,{icon:Pe.e})})})}),Object(ue.jsx)(Ve,{type:"date",name:"upPayTaxDate",value:te,onChange:ce})]})})]}),Object(ue.jsxs)(Ke,{children:[Object(ue.jsx)(Ge,{type:"submit",value:n?"\ucd94\uac00\ud558\uae30":"\uc218\uc815\ud558\uae30"}),Object(ue.jsx)(Je,{onClick:n?function(){return j(!1)}:function(){return d(!1)},children:Object(ue.jsx)("div",{children:"\ucde8\uc18c"})})]})]})})},We=he.c.div(M||(M=Object(x.a)(["\n  position: relative;\n  width: 100%;\n  background-color: white;\n  color: black;\n  border-radius: 15px;\n  font-size: 18px;\n  font-weight: 700;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 10px;\n"]))),He=he.c.div(_||(_=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"]))),Ue=he.c.div(B||(B=Object(x.a)(["\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),Ze=he.c.div(G||(G=Object(x.a)(["\n  font-size: 24px;\n"]))),Ne=he.c.div(J||(J=Object(x.a)(["\n  display: flex;\n  margin-top: 15px;\n  align-items: center;\n  color: #7f8c8d;\n"]))),Qe=he.c.div(K||(K=Object(x.a)(["\n  font-size: 13px;\n"]))),Xe=he.c.div(L||(L=Object(x.a)(["\n  padding: 0 10px;\n"]))),$e=he.c.div(W||(W=Object(x.a)(["\n  width: fit-content;\n  background-color: ",";\n  color: white;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 10px;\n  margin-left: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])),(function(e){return e.check?"#1abc9c":"#ff7675"})),en=he.c.div(H||(H=Object(x.a)(["\n  margin-top: ",";\n"])),(function(e){return e.check?"5px":0})),nn=he.c.div(U||(U=Object(x.a)(["\n  position: absolute;\n  top: 2px;\n  right: 0;\n  margin-right: 20px;\n  display: flex;\n"]))),tn=he.c.button(Z||(Z=Object(x.a)(["\n  background-color: inherit;\n  color: white;\n  border: none;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  font-size: 16px;\n  transition: all 0.1s linear;\n  color: #00b894;\n  &:not(:first-child) {\n    margin-left: 5px;\n  }\n  &:hover {\n    background-color: white;\n    color: white;\n    background-color: #00b894;\n    cursor: pointer;\n  }\n"]))),cn=function(e){var n=e.projectObj,t=e.isOwner,r=e.userObj,a=Object(c.useState)(!1),i=Object(o.a)(a,2),d=i[0],j=i[1],s=Object(c.useState)(!1),x=Object(o.a)(s,2),h=x[0],u=x[1],p=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.downPayCheck){e.next=4;break}return alert("\uacc4\uc57d\uae08\uc774 \uc544\uc9c1 \uc548\ub4e4\uc5b4\uc654\ub124\uc694~"),j(!0),e.abrupt("return");case 4:if(n.downPay){e.next=8;break}return alert("\uacc4\uc57d\uae08\uc774 \uc5bc\ub9c8\uc778\uc9c0 \uc548\uc801\ud600\uc788\ub124\uc694~"),j(!0),e.abrupt("return");case 8:if(n.downPayTaxCheck){e.next=12;break}return alert("\uacc4\uc57d\uae08 \uc138\uae08\uacc4\uc0b0\uc11c\ub97c \uc544\uc9c1 \uc548\ud588\ub124\uc694~"),j(!0),e.abrupt("return");case 12:if(n.downPayTaxDate){e.next=16;break}return alert("\uacc4\uc57d\uae08 \uc138\uae08\uacc4\uc0b0\uc11c \ub0a0\uc9dc\uac00 \uc5b8\uc81c\uc778\uc9c0 \ubaa8\ub974\uaca0\ub124\uc694~"),j(!0),e.abrupt("return");case 16:if(n.orderCheck){e.next=20;break}return alert("\ubc1c\uc8fc\ub97c \uc544\uc9c1 \uc548\ud588\ub124\uc694~"),j(!0),e.abrupt("return");case 20:if(n.orderCompany){e.next=24;break}return alert("\ubc1c\uc8fc\ucc98\uac00 \uc5b4\ub518\uc9c0 \ubaa8\ub974\uaca0\ub124\uc694~"),j(!0),e.abrupt("return");case 24:if(n.deliveryCheck){e.next=28;break}return alert("\uc544\uc9c1 \ub0a9\ud488\uc744 \uc548\ud588\ub124\uc694~"),j(!0),e.abrupt("return");case 28:if(n.upPayCheck){e.next=32;break}return alert("\uc794\uae08\uc774 \uc544\uc9c1 \uc548\ub4e4\uc5b4\uc654\ub124\uc694~"),j(!0),e.abrupt("return");case 32:if(n.upPay){e.next=36;break}return alert("\uc794\uae08\uc774 \uc5bc\ub9c8\uc778\uc9c0 \ubaa8\ub974\uaca0\ub124\uc694~"),j(!0),e.abrupt("return");case 36:if(n.upPayTaxCheck){e.next=40;break}return alert("\uc794\uae08 \uc138\uae08\uacc4\uc0b0\uc11c\ub97c \uc544\uc9c1 \uc548\ud588\ub124\uc694~"),j(!0),e.abrupt("return");case 40:if(n.upPayTaxDate){e.next=44;break}return alert("\uc794\uae08 \uc138\uae08\uacc4\uc0b0\uc11c \ub0a0\uc9dc\uac00 \uc5b8\uc81c\uc778\uc9c0 \ubaa8\ub974\uaca0\ub124\uc694~"),j(!0),e.abrupt("return");case 44:return e.next=46,xe.doc("projects/".concat(n.id)).update({completion:!0});case 46:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={client:n.client,material:n.material,contents:n.contents,deliveryDate:n.deliveryDate,orderDeliveryDate:n.orderDeliveryDate,contract:n.contract,orderCompany:n.orderCompany,downPay:n.downPay,upPay:n.upPay,downPayTaxDate:n.downPayTaxDate,upPayTaxDate:n.upPayTaxDate},f={downPayCheck:n.downPayCheck,downPayTaxCheck:n.downPayTaxCheck,orderCheck:n.orderCheck,deliveryCheck:n.deliveryCheck,upPayCheck:n.upPayCheck,upPayTaxCheck:n.upPayTaxCheck};return Object(ue.jsx)("div",{children:d?Object(ue.jsx)("div",{style:{marginBottom:"10px"},children:Object(ue.jsx)(Le,{CreateProject:!1,initValues:O,initCheckValues:f,userObj:r,projectObj:n,setEdit:j})}):Object(ue.jsxs)(We,{children:[Object(ue.jsxs)(He,{children:[Object(ue.jsx)(Ze,{children:n.client}),Object(ue.jsxs)(Ne,{children:[Object(ue.jsx)(Qe,{children:n.material}),Object(ue.jsx)(Xe,{children:"\u2022"}),Object(ue.jsx)(Qe,{children:n.contents}),Object(ue.jsx)(Xe,{children:"\u2022"}),Object(ue.jsx)(Qe,{children:"\ub0a9\ud488:".concat(n.deliveryDate)}),Object(ue.jsx)(Xe,{children:"\u2022"}),Object(ue.jsx)(Qe,{children:"\ubc1c\uc8fc\uc0c1:".concat(n.orderDeliveryDate)})]})]}),Object(ue.jsxs)(Ue,{children:[Object(ue.jsxs)($e,{check:n.downPayCheck,children:[Object(ue.jsx)(en,{children:"\uacc4\uc57d\uae08"}),h&&Object(ue.jsx)(en,{check:n.downPay,children:n.downPay?"".concat(n.downPay,"\uc6d0"):""})]}),Object(ue.jsxs)($e,{check:n.downPayTaxCheck,children:[Object(ue.jsx)(en,{children:"\uacc4\uc57d\uae08 \uc138\uae08\uacc4\uc0b0\uc11c"}),h&&Object(ue.jsx)(en,{check:n.downPayTaxDate,children:n.downPayTaxDate})]}),Object(ue.jsxs)($e,{check:n.orderCheck,children:[Object(ue.jsx)(en,{children:"\ubc1c\uc8fc"}),h&&Object(ue.jsx)(en,{check:n.orderCompany,children:n.orderCompany})]}),Object(ue.jsx)($e,{check:n.deliveryCheck,children:Object(ue.jsx)(en,{children:"\ub0a9\ud488"})}),Object(ue.jsxs)($e,{check:n.upPayCheck,children:[Object(ue.jsx)(en,{children:"\uc794\uae08"}),h&&Object(ue.jsx)(en,{check:n.upPay,children:n.upPay?"".concat(n.upPay,"\uc6d0"):""})]}),Object(ue.jsxs)($e,{check:n.upPayTaxCheck,children:[Object(ue.jsx)(en,{children:"\uc794\uae08 \uc138\uae08\uacc4\uc0b0\uc11c"}),h&&Object(ue.jsx)(en,{check:n.upPayTaxDate,children:n.upPayTaxDate})]})]}),t&&Object(ue.jsxs)(nn,{children:[Object(ue.jsx)(tn,{onClick:function(){return u((function(e){return!e}))},children:h?Object(ue.jsx)(Ce.a,{icon:Pe.c}):Object(ue.jsx)(Ce.a,{icon:Pe.b})}),!n.completion&&Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(tn,{onClick:function(){return j((function(e){return!e}))},children:Object(ue.jsx)(Ce.a,{icon:Pe.d})}),Object(ue.jsx)(tn,{onClick:p,children:Object(ue.jsx)(Ce.a,{icon:Pe.a})})]})]})]})})},rn=t(28),an=he.c.div(N||(N=Object(x.a)(["\n  width: 100%;\n  max-width: 1250px;\n  margin: 0 auto;\n"]))),on=he.c.div(Q||(Q=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),dn=he.c.button(X||(X=Object(x.a)(["\n  padding: 10px 20px;\n  border: none;\n  background-color: #00b894;\n  color: white;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 700;\n"]))),jn=function(e){var n=e.userObj,t=Object(c.useState)(!1),r=Object(o.a)(t,2),a=r[0],i=r[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),s=j[0],l=j[1],b={client:"",material:"FRP",contents:"",deliveryDate:rn(Date.now()).format("YYYY-MM-DD"),orderDeliveryDate:rn(Date.now()).format("YYYY-MM-DD"),contract:"\uc2e4\ubb3c\uc11c\ub958(\ub4f1\uae30)",orderCompany:"",downPay:"",upPay:"",downPayTaxDate:"",upPayTaxDate:""};return Object(c.useEffect)((function(){try{xe.collection("projects").where("creatorId","==",n.uid).where("completion","==",!1).orderBy("createAt","desc").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(ke.a)({id:e.id},e.data())}));l(n)}))}catch(e){}}),[]),Object(ue.jsx)(an,{children:Object(ue.jsxs)(ue.Fragment,{children:[a?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(Le,{CreateProject:!0,initValues:b,initCheckValues:{downPayCheck:!1,downPayTaxCheck:!1,orderCheck:!1,deliveryCheck:!1,upPayCheck:!1,upPayTaxCheck:!1},userObj:n,setAddProject:i})}):Object(ue.jsx)(on,{children:Object(ue.jsx)(dn,{onClick:function(){return i((function(e){return!e}))},children:"\ud504\ub85c\uc81d\ud2b8 \ucd94\uac00"})}),Object(ue.jsx)("div",{style:{marginTop:"20px"},children:s.map((function(e){return Object(ue.jsx)(cn,{projectObj:e,userObj:n,isOwner:n.uid===e.creatorId},e.id)}))})]})})},sn=he.c.div($||($=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 150px;\n"]))),ln=he.c.div(ee||(ee=Object(x.a)(["\n  font-size: 24px;\n  color: #00b894;\n"]))),bn=he.c.div(ne||(ne=Object(x.a)(["\n  margin-top: 40px;\n  cursor: pointer;\n  font-size: 20px;\n  background-color: white;\n  padding: 15px 25px;\n  border-radius: 5px;\n  transition: all 0.15s ease-in-out;\n  &:hover {\n    background-color: #00b894;\n    color: white;\n  }\n"]))),xn=function(){return Object(ue.jsxs)(sn,{children:[Object(ue.jsx)(ln,{children:"\uc774\uba54\uc77c\uc778\uc99d\uc744 \ud574\uc57c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\uc694."}),Object(ue.jsx)(bn,{onClick:function(){window.location.reload(!1)},children:"\uc774\uba54\uc77c\uc778\uc99d\uc744 \ud588\uc2b5\ub2c8\ub2e4\uc694."})]})},hn=he.c.div(te||(te=Object(x.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  font-size: 18px;\n"]))),un=he.c.ul(ce||(ce=Object(x.a)(["\n  width: 100%;\n  max-width: 1250px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),pn=he.c.ul(re||(re=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),On=he.c.li(ae||(ae=Object(x.a)(["\n  height: 50px;\n  border-bottom: 4px solid\n    ",";\n  &:first-child {\n    margin-right: 20px;\n  }\n  transition: border-bottom 0.4s ease-in-out;\n"])),(function(e){return e.current?"#00b894":"transparent"})),fn=Object(he.c)(d.b)(ie||(ie=Object(x.a)(["\n  font-weight: 700;\n  height: 50px;\n  display: flex;\n  align-items: center;\n"]))),mn=he.c.div(oe||(oe=Object(x.a)(["\n  display: flex;\n  height: 50px;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin-left: 20px;\n  transition: all 0.2s linear;\n  &:hover {\n    background-color: #00b894;\n  }\n"]))),yn=Object(j.h)((function(e){var n=e.location.pathname,t=Object(j.g)();return Object(ue.jsx)(hn,{children:Object(ue.jsxs)(un,{children:[Object(ue.jsxs)(pn,{children:[Object(ue.jsx)(On,{current:"/"===n,children:Object(ue.jsx)(fn,{to:"/",children:"\ud504\ub85c\uc81d\ud2b8\ucd94\uac00"})}),Object(ue.jsx)(On,{current:"/completion"===n,children:Object(ue.jsx)(fn,{to:"/completion",children:"\ud504\ub85c\uc81d\ud2b8\uc644\ub8cc"})})]}),Object(ue.jsx)(On,{children:Object(ue.jsx)(mn,{onClick:function(){be.signOut(),t.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})})]})})})),gn=t(30),wn=t.n(gn),kn=he.c.div(de||(de=Object(x.a)(["\n  width: 100%;\n  max-width: 1250px;\n  margin: 0 auto;\n"]))),vn=he.c.div(je||(je=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),Cn=he.c.button(se||(se=Object(x.a)(["\n  padding: 10px 20px;\n  border: none;\n  background-color: #00b894;\n  color: white;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 700;\n"]))),Pn=function(e){var n=e.userObj,t=Object(c.useState)([]),r=Object(o.a)(t,2),a=r[0],i=r[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),s=j[0],l=j[1];Object(c.useEffect)((function(){try{xe.collection("projects").where("creatorId","==",n.uid).where("completion","==",!0).orderBy("createAt","desc").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(ke.a)({id:e.id},e.data())})),t=e.docs.map((function(e){return{"\ud074\ub77c\uc774\uc5b8\ud2b8":e.data().client,"\uc18c\uc7ac":e.data().material,"\ubc1c\uc8fc\ucc98":e.data().orderCompany,"\ucf58\ud150\uce20":e.data().contents,"\ub0a9\ud488\uc77c":e.data().deliveryDate,"\uacc4\uc57d\uc885\ub958":e.data().contract,"\uacc4\uc57d\uae08":e.data().downPay,"\uacc4\uc57d\uae08\uc138\uae08\uacc4\uc0b0\uc11c":e.data().downPayTaxDate,"\uc794\uae08":e.data().upPay,"\uc794\uae08\uc138\uae08\uacc4\uc0b0\uc11c":e.data().upPayTaxDate}}));l(t),i(n)}))}catch(e){}}),[]);return Object(ue.jsxs)(kn,{children:[Object(ue.jsx)(vn,{children:Object(ue.jsx)(Cn,{onClick:function(){if(window.confirm("\uc5d1\uc140\ub85c \ud30c\uc77c\uc744 \ub0b4\ubcf4\ub0b4\uaca0\uc2b5\ub2c8\uae4c?")){var e=wn.a.utils.json_to_sheet(s),n=wn.a.utils.book_new();wn.a.utils.book_append_sheet(n,e,"test"),wn.a.writeFile(n,"\ud504\ub85c\uc81d\ud2b8_".concat(rn(Date.now()).format("YYYY/MM/DD"),".xlsx"))}},children:"\uc5d1\uc140\ub85c \ud30c\uc77c \ub0b4\ubcf4\ub0b4\uae30"})}),a.map((function(e){return Object(ue.jsx)(cn,{projectObj:e,userObj:n,isOwner:n.uid===e.creatorId},e.id)}))]})},Dn=function(e){var n=e.emailVerify,t=e.isLoggedIn,c=e.userObj;return Object(ue.jsxs)(d.a,{children:[t&&Object(ue.jsx)(yn,{userObj:c}),t?n?Object(ue.jsxs)(j.d,{children:[Object(ue.jsx)(j.b,{exact:!0,path:"/",children:Object(ue.jsx)(jn,{userObj:c})}),Object(ue.jsx)(j.b,{exact:!0,path:"/completion",children:Object(ue.jsx)(Pn,{userObj:c})}),Object(ue.jsx)(j.a,{from:"*",to:"/"})]}):Object(ue.jsxs)(j.d,{children:[Object(ue.jsx)(j.b,{exact:!0,path:"/",children:Object(ue.jsx)(xn,{})}),Object(ue.jsx)(j.a,{from:"*",to:"/"})]}):Object(ue.jsxs)(j.d,{children:[Object(ue.jsx)(j.b,{exact:!0,path:"/",children:Object(ue.jsx)(we,{})}),Object(ue.jsx)(j.a,{from:"*",to:"/"})]})]})},Tn=t(46),Fn=Object(he.a)(le||(le=Object(x.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        margin-top:70px;\n        font-size:16px;\n        background-color: rgba(20, 20, 20, 1);\n        color:#636e72;\n    }\n    input {\n        border:none;\n        outline:none;\n    }\n"])),Tn.a);var Sn=function(){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),d=i[0],j=i[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),b=l[0],x=l[1],h=Object(c.useState)(null),u=Object(o.a)(h,2),p=u[0],O=u[1];return Object(c.useEffect)((function(){be.onAuthStateChanged((function(e){e?(e.emailVerified?x(!0):(x(!1),window.alert("\uc774\uba54\uc77c\uc778\uc99d\uc744 \ud574\uc8fc\uc138\uc694.")),O(e),j(!0),r(!0)):(j(!1),r(!0))}))}),[]),Object(ue.jsx)(ue.Fragment,{children:t?Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(Dn,{userObj:p,emailVerify:b,isLoggedIn:d}),Object(ue.jsx)(Fn,{})]}):"\ub85c\ub529\uc911..."})};i.a.render(Object(ue.jsx)(r.a.StrictMode,{children:Object(ue.jsx)(Sn,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.80838260.chunk.js.map