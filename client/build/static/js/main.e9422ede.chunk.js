(this.webpackJsonplinkshortener=this.webpackJsonplinkshortener||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(27),c=n.n(a),s=n.p+"static/media/background.fdaf12a6.jpg",o=n.p+"static/media/bg.ffa978a9.jpg",i=(n(57),n(8)),u=n(7),l=n.n(u),d=n(16),p=n(19),j=n(136),b=n(39),h=n.n(b),O=n(51),f=n.n(O),y=n(68),x=n.n(y),g=n(69),S=n.n(g),_=n(135),m=n(3),v=function(e){var t=f.a.inputStyle,n=f.a.textBoxContainer,r=e.show,a=e.setShow,c=e.setContent,s=e.placeHolder,o=e.typePW,i=e.value;return Object(m.jsxs)("div",{className:n,children:[Object(m.jsx)("input",{className:t,type:r?"password":"text",placeholder:s,onChange:function(e){return function(e){c(e)}(e.target.value)},value:i}),o&&Object(m.jsx)(_.a,{"aria-label":"toggle password visibility",onClick:function(){return a(!r)},edge:"end",children:r?Object(m.jsx)(x.a,{}):Object(m.jsx)(S.a,{})})]})},k=n(44),T=n.n(k),C=(n(92),function(){return Object(m.jsxs)("div",{className:"sk-folding-cube",children:[Object(m.jsx)("div",{className:"sk-cube1 sk-cube"}),Object(m.jsx)("div",{className:"sk-cube2 sk-cube"}),Object(m.jsx)("div",{className:"sk-cube4 sk-cube"}),Object(m.jsx)("div",{className:"sk-cube3 sk-cube"})]})}),w=function(e){var t=[T.a.Modal,e.show?T.a.ModalOpen:T.a.ModalClosed];return Object(m.jsxs)("div",{className:t.join(" "),children:[Object(m.jsx)(C,{}),Object(m.jsx)("h5",{style:{position:"relative",alignItems:"center",fontSize:"1.5rem"},children:"\u0110ang T\u1ea3i..."})]})},L=(n(93),function(e){var t=["Backdrop",e.show?"BackdropOpen":"BackdropClosed"];return Object(m.jsx)("div",{className:t.join(" ")})}),N=n(22),K="BACK_UP_DATA",B="AUTHENTICATE",D="LOGOUT",I="ADDLINK",M=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:B,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:I,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=n(45),R=n.n(H),G="https://trevtrinh.com",P={create:G+"/link/create/"},U=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("https://trevtrinh.com/auth",{password:t});case 2:return n=e.sent,e.abrupt("return",n.data.validated);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post(P.create,{accessName:t,redirectLink:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get(G+"/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.history,n=Object(r.useState)(""),a=Object(p.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!0),i=Object(p.a)(o,2),u=i[0],b=i[1],O=Object(r.useState)(!1),f=Object(p.a)(O,2),y=f[0],x=f[1],g=Object(r.useState)(!1),S=Object(p.a)(g,2),_=S[0],k=S[1],T=h.a.homeScreenStyle,C=h.a.buttonStyle,K=h.a.errorStyle,B=h.a.errorStyleHide,D=Object(N.b)(),I=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,U(c);case 3:n=e.sent,console.log(n),n?(x(!1),D(M(c)),setTimeout((function(){return k(!1),t.push("/addlink")}),1e3)):(x(!0),k(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:T,children:[Object(m.jsx)("h3",{children:"App R\xfat G\u1ecdn \u0110\u01b0\u1eddng Link OTC"}),Object(m.jsx)(v,{placeHolder:"M\u1eadt Kh\u1ea9u",show:u,setContent:s,setShow:b,typePW:!0}),Object(m.jsx)("br",{}),Object(m.jsx)("h5",{className:y?K:B,children:"* M\u1eadt Kh\u1ea9u Kh\xf4ng \u0110\xfang"}),Object(m.jsx)(j.a,{color:"primary",variant:"contained",className:C,onClick:I,children:"\u0110\u0103ng Nh\u1eadp"}),Object(m.jsx)(w,{show:_}),Object(m.jsx)(L,{show:_})]})},z=n(34),J=n.n(z),q=n(72),Q=n(40),X=(n(112),n(114),n(121),{apiKey:"AIzaSyD-E9OnROwhZBobJxl0UfTNy5LSbj3_Vd0",authDomain:"rutgonn.firebaseapp.com",databaseURL:"https://rutgonn-default-rtdb.firebaseio.com",projectId:"rutgonn",storageBucket:"rutgonn.appspot.com",messagingSenderId:"532052697114",appId:"1:532052697114:web:429b166d880e419998f1a3",measurementId:"G-NEVW6KKREP"}),$=(new function e(){var t=this;Object(q.a)(this,e),this.addLink=function(e,n){return t.dataBase.ref("links/"+e).set({userID:e,redirectTo:n})},this.addLinkk=function(){return t.dataBase.ref("links/trung").set({userID:"trung",redirectTo:"trungtrinh"})},this.checkAccessLink=function(e){return t.dataBase.ref("links/"+e).once("value")},Q.a.initializeApp(X),this.auth=Q.a.auth(),this.dataBase=Q.a.database(),this.storage=Q.a.storage()},function(e){return null===e||""===e?"Vui L\xf2ng \u0110i\u1ec1n T\xean Truy C\u1eadp":e.includes(".")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u .":e.includes(",")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u ,":e.includes("@")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u @":e.includes("(")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u (":e.includes(")")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u )":e.includes("^")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u ^":e.includes("#")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u #":e.includes("$")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u $":e.includes("[")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u [":e.includes("]")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 D\u1ea5u ]":e.includes(" ")?"T\xean Truy C\u1eadp Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 Kho\u1ea3ng Tr\u1ed1ng":null}),Z=function(e){return null===e||""===e?"Vui L\xf2ng Nh\u1eadp \u0110\u01b0\u1eddng Link":e.includes(" ")?"\u0110\u01b0\u1eddng Link Kh\xf4ng \u0110\u01b0\u1ee3c C\xf3 Kho\u1ea3ng Tr\u1ed1ng":null},F=function(e){var t=e.history,n=Object(r.useState)(""),a=Object(p.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),i=Object(p.a)(o,2),u=i[0],b=i[1],h=Object(r.useState)(""),O=Object(p.a)(h,2),f=O[0],y=O[1],x=Object(r.useState)(!1),g=Object(p.a)(x,2),S=g[0],_=g[1],k=Object(N.c)((function(e){return e.appReducer.loggedIn})),T=Object(N.b)(),C=J.a.homeScreenStyle,K=J.a.buttonStyle,B=J.a.errorStyle,D=J.a.errorStyleHide,I=J.a.separaterStyle,M=function(){console.log("set show")},H=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=$(c),_(!0),n||(n=Z(u)),n){e.next=11;break}return e.next=6,V(c,u);case 6:e.sent.linkCreated?(T(A(c)),t.push("/confirm")):y("Vui L\xf2ng Ch\u1ecdn T\xean Truy C\u1eadp Kh\xe1c !"),_(!1),e.next=13;break;case 11:return _(!1),e.abrupt("return",y(n));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return k?Object(m.jsxs)("div",{className:C,children:[Object(m.jsx)("h3",{children:"T\u1ea1o \u0110\u01b0\u1eddng Link R\xfat G\u1ecdn C\u1ee7a B\u1ea1n"}),Object(m.jsx)(v,{placeHolder:"T\xean Truy C\u1eadp",show:!1,setContent:s,setShow:M,typePW:!1,value:c}),Object(m.jsx)("div",{className:I}),Object(m.jsx)(v,{placeHolder:"\u0110\u01b0\u1eddng Link D\u1eabn T\u1edbi",show:!1,setContent:b,setShow:M,typePW:!1,value:u}),Object(m.jsx)("br",{}),Object(m.jsxs)("h5",{className:f?B:D,children:["* ",f]}),Object(m.jsx)(j.a,{color:"primary",variant:"contained",className:K,onClick:H,children:"T\u1ea1o Link R\xfat G\u1ecdn"}),Object(m.jsx)(w,{show:S}),Object(m.jsx)(L,{show:S})]}):(t.push("/"),Object(m.jsx)("div",{}))},Y=n(53),ee=n.n(Y),te=n(74),ne=n.n(te),re=function(e){var t=e.history,n=ee.a.confirmScreenStyle,r=ee.a.buttonStyle,a=Object(N.c)((function(e){return e.appReducer.accessLink}));return Object(N.c)((function(e){return e.appReducer.loggedIn}))?Object(m.jsxs)("div",{className:n,children:[Object(m.jsx)("h3",{children:"LINK R\xdaT G\u1eccN KH\u1edeI T\u1ea0O TH\xc0NH C\xd4NG"}),Object(m.jsx)("p",{children:"Nh\u1ea5p v\xe0o link d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 truy c\u1eadp \u0111\u01b0\u1eddng link r\xfat g\u1ecdn c\u1ee7a b\u1ea1n"}),Object(m.jsxs)("p",{onClick:function(){window.open("https://rutgon.live/".concat(a))},children:["rutgon.live/",a]}),Object(m.jsxs)(j.a,{className:r,variant:"contained",color:"primary",onClick:function(){t.push("/addlink")},children:[Object(m.jsx)(ne.a,{})," Quay L\u1ea1i"]})]}):(t.push("/"),Object(m.jsx)("div",{}))},ae=n(46),ce=n.n(ae),se=function(){return Object(m.jsxs)("div",{className:ce.a.body,children:[Object(m.jsx)("div",{className:ce.a.circleLoad,children:Object(m.jsx)("div",{className:ce.a.innerLoad})}),Object(m.jsx)("h1",{children:"N"})]})},oe=function(){var e=Object(i.g)().id;return W(e).then((function(e){var t=e.data,n=t.redirectLink;t.error?alert("\u0110\u01b0\u1eddng Link Kh\xf4ng T\u1ed3n T\u1ea1i"):window.location.href=n})),Object(m.jsx)(se,{})};var ie=function(e){var t;return t="/addlink"===Object(i.f)().pathname?s:o,Object(m.jsxs)("div",{className:"appCover",children:[Object(m.jsx)("img",{className:"imageResponsive",src:t}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/addlink",component:F}),Object(m.jsx)(i.a,{path:"/confirm",component:re}),Object(m.jsx)(i.a,{path:"/:id",component:oe}),Object(m.jsx)(i.a,{path:"/",exact:!0,component:E})]})]})},ue=n(35),le=n(30),de=n(75),pe=n(76),je=n(26),be=Object(le.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1,username:"",dataBackedUp:!1,accessLink:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return console.log(e),Object(je.a)(Object(je.a)({},e),{},{loggedIn:!0,username:t.payload});case I:return console.log(e),Object(je.a)(Object(je.a)({},e),{},{accessLink:t.payload});case D:return Object(je.a)(Object(je.a)({},e),{},{loggedIn:!1,username:""});case K:return console.log(e),Object(je.a)(Object(je.a)({},e),{},{dataBackedUp:!0});default:return e}}}),he=[de.a],Oe=Object(le.createStore)(be,Object(pe.composeWithDevTools)(le.applyMiddleware.apply(void 0,he)));c.a.render(Object(m.jsx)(ue.a,{children:Object(m.jsx)(N.a,{store:Oe,children:Object(m.jsx)(ie,{})})}),document.getElementById("root"))},34:function(e,t,n){e.exports={homeScreenStyle:"AddLinkScreen_homeScreenStyle__3TzaX",buttonStyle:"AddLinkScreen_buttonStyle__1_1kt",errorStyle:"AddLinkScreen_errorStyle__2h91w",errorStyleHide:"AddLinkScreen_errorStyleHide__3M1Cw",separaterStyle:"AddLinkScreen_separaterStyle__3Vy-V"}},39:function(e,t,n){e.exports={homeScreenStyle:"StartScreen_homeScreenStyle__1zGG0",buttonStyle:"StartScreen_buttonStyle__2A-Jw",errorStyle:"StartScreen_errorStyle__nQKCb",errorStyleHide:"StartScreen_errorStyleHide__3DKsA"}},44:function(e,t,n){e.exports={Modal:"Modal_Modal__2WBTT",ModalOpen:"Modal_ModalOpen__1f3ef",ModalClosed:"Modal_ModalClosed__L8S50",Button:"Modal_Button__fOyjj",container:"Modal_container__1LvOf",closeButton:"Modal_closeButton__840KP"}},46:function(e,t,n){e.exports={body:"Loader_body__DM7Xs",circleLoad:"Loader_circleLoad__fR1ei",rotation:"Loader_rotation__3ql_m",innerLoad:"Loader_innerLoad__7wIBa",switch:"Loader_switch__2_PI4"}},51:function(e,t,n){e.exports={inputStyle:"TextBox_inputStyle__1NNTs",textBoxContainer:"TextBox_textBoxContainer__N726f"}},53:function(e,t,n){e.exports={confirmScreenStyle:"ConfirmScreen_confirmScreenStyle__1nu0f",buttonStyle:"ConfirmScreen_buttonStyle__lqfS0"}},57:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.e9422ede.chunk.js.map