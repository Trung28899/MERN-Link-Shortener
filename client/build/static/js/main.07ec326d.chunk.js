(this.webpackJsonplinkshortener=this.webpackJsonplinkshortener||[]).push([[0],{23:function(e,t,n){e.exports={LinkBox:"LinkBox_LinkBox__280WX",p:"LinkBox_p__e8Tqd",LinkBoxPreview:"LinkBox_LinkBoxPreview__228HB",pPreview:"LinkBox_pPreview__2bEKy",socialIconWrapper:"LinkBox_socialIconWrapper__2XMJl",content:"LinkBox_content__uLS74",directIcon:"LinkBox_directIcon__3_VSy"}},25:function(e,t,n){e.exports={homeScreenStyle:"AddLinkScreen_homeScreenStyle__3TzaX",buttonStyle:"AddLinkScreen_buttonStyle__1_1kt",errorStyle:"AddLinkScreen_errorStyle__2h91w",errorStyleHide:"AddLinkScreen_errorStyleHide__3M1Cw",separaterStyle:"AddLinkScreen_separaterStyle__3Vy-V"}},26:function(e,t,n){e.exports={confirmScreenStyle:"ConfirmScreen_confirmScreenStyle__1nu0f",buttonStyle:"ConfirmScreen_buttonStyle__lqfS0",copyButton:"ConfirmScreen_copyButton__1otww",buttonContainer:"ConfirmScreen_buttonContainer__2ck9H"}},28:function(e,t,n){e.exports={Modal:"Modal_Modal__2WBTT",ModalOpen:"Modal_ModalOpen__1f3ef",ModalClosed:"Modal_ModalClosed__L8S50",Button:"Modal_Button__fOyjj",container:"Modal_container__1LvOf",closeButton:"Modal_closeButton__840KP"}},29:function(e,t,n){e.exports={body:"Loader_body__DM7Xs",circleLoad:"Loader_circleLoad__fR1ei",rotation:"Loader_rotation__3ql_m",innerLoad:"Loader_innerLoad__7wIBa",switch:"Loader_switch__2_PI4"}},31:function(e,t,n){e.exports={homeScreenStyle:"StartScreen_homeScreenStyle__1zGG0",linkContainer:"StartScreen_linkContainer__3OrLO",buttonStyle:"StartScreen_buttonStyle__2A-Jw",errorStyle:"StartScreen_errorStyle__nQKCb",errorStyleHide:"StartScreen_errorStyleHide__3DKsA"}},36:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},8:function(e,t,n){e.exports={inputStyle:"TextBox_inputStyle__1NNTs",textBoxContainer:"TextBox_textBoxContainer__N726f",textBoxContainerError:"TextBox_textBoxContainerError__3dqm7",iconContainer:"TextBox_iconContainer__3cH9T",message:"TextBox_message__3LSyj",errorMessage:"TextBox_errorMessage__3iLGD",infoMessage:"TextBox_infoMessage__a70y1",roof:"TextBox_roof__2QUl5"}},87:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(18),r=n.n(c),o=(n.p,n(36),n(3)),s=n(31),i=n.n(s),l=n(23),u=n.n(l),d=n(10),j=n(5),b=n.n(j),p=n(16),m="LOGOUT",O="ADDLINK",f="CHOOSE_DOMAIN",x="ADDLINKDONE",h=function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:x,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=n(1),y=function(e){var t=e.content,n=e.url,a=[u.a.LinkBox],c=[u.a.p],r=Object(d.b)();return Object(_.jsxs)("div",{className:a.join(" "),onClick:function(){r(function(e,t){return function(){var n=Object(p.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a({type:f,payload:{name:e,url:t}}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))},children:[Object(_.jsx)("div",{className:u.a.socialIconWrapper,children:Object(_.jsx)("div",{className:u.a.iconPlate})}),Object(_.jsx)("h2",{className:u.a.content,children:Object(_.jsx)("p",{className:c.join(" "),children:t})}),Object(_.jsx)("div",{className:u.a.directIcon,children:Object(_.jsx)("i",{className:"fas fa-angle-right"})})]})},v=function(e){var t=e.history,n=i.a.homeScreenStyle,c=i.a.linkContainer,r=Object(d.c)((function(e){return e.appReducer.domainName})),o=[{name:"linker.link",url:"https://linker.link"},{name:"linker.live",url:"https://linker.live"},{name:"linkweb.link",url:"https://linkweb.link"},{name:"hosthub.live",url:"https://hosthub.live"},{name:"vietweb.site",url:"https://vietweb.site"},{name:"rutgon.live",url:"https://rutgon.live"}].map((function(e,t){return Object(_.jsx)(y,{content:e.name,url:e.url},t)}));return Object(a.useEffect)((function(){r&&t.push("/addlink")}),[r]),Object(_.jsxs)("div",{className:n,children:[Object(_.jsxs)("h3",{children:["Welcome To TrungTrinh's ",Object(_.jsx)("br",{})," Link Shortener!"]}),Object(_.jsx)("h4",{children:"Choose the domain name to shorten you link"}),Object(_.jsx)("div",{className:c,children:o})]})},k=n(7),S=n(11),N=n(100),L=n(25),g=n.n(L),w=n(8),C=n.n(w),B=function(e){var t=C.a.inputStyle,n=C.a.textBoxContainer,c=C.a.iconContainer,r=e.setContent,o=e.placeHolder,s=e.value,i=e.accessName,l=e.error,u=Object(a.useState)([C.a.message]),j=Object(S.a)(u,2),b=j[0],p=j[1],m=Object(a.useState)([C.a.roof]),O=Object(S.a)(m,2),f=O[0],x=O[1],h=Object(a.useState)(!1),y=Object(S.a)(h,2),v=y[0],k=y[1],N=Object(d.c)((function(e){return e.appReducer.domainName}));return Object(a.useEffect)((function(){x([C.a.roof]),v&&(x([C.a.roof,C.a.infoMessage]),p([C.a.message,C.a.infoMessage])),l&&(x([C.a.roof,C.a.errorMessage]),p([C.a.message,C.a.errorMessage]))}),[v,l]),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:l&&!v?C.a.textBoxContainerError:n,children:[Object(_.jsx)("input",{className:t,type:"text",placeholder:o,onChange:function(t){return function(t){e.resetError(),r(t.replace(/\s/g,""))}(t.target.value)},value:s}),Object(_.jsxs)("div",{className:c,onClick:function(){k(!v)},children:[i&&!v&&Object(_.jsx)("i",{className:"fas fa-exclamation-circle"}),i&&v&&Object(_.jsx)("i",{className:"fas fa-times-circle"}),Object(_.jsx)("div",{className:f.join(" ")})]})]}),(v||l)&&Object(_.jsxs)("div",{className:b.join(" "),children:[l&&Object(_.jsx)("h3",{children:l}),!l&&Object(_.jsxs)("h3",{children:["If you enter access name:"," ",Object(_.jsx)("span",{style:{fontWeight:"900"},children:"newlink"}),", your shorten link will be:"," ",Object(_.jsxs)("span",{style:{fontWeight:"900"},children:[N,"/newlink"]})]})]})]})};var M=n(28),T=n.n(M),E=(n(64),function(){return Object(_.jsxs)("div",{className:"sk-folding-cube",children:[Object(_.jsx)("div",{className:"sk-cube1 sk-cube"}),Object(_.jsx)("div",{className:"sk-cube2 sk-cube"}),Object(_.jsx)("div",{className:"sk-cube4 sk-cube"}),Object(_.jsx)("div",{className:"sk-cube3 sk-cube"})]})}),R=function(e){var t=[T.a.Modal,e.show?T.a.ModalOpen:T.a.ModalClosed];return Object(_.jsxs)("div",{className:t.join(" "),children:[Object(_.jsx)(E,{}),Object(_.jsx)("h5",{style:{position:"relative",alignItems:"center",fontSize:"1.5rem"},children:"Loading..."})]})},I=(n(65),function(e){var t=["Backdrop",e.show?"BackdropOpen":"BackdropClosed"];return Object(_.jsx)("div",{className:t.join(" ")})}),A=n(33),H=n.n(A),D="https://trungtrinh.net",P={create:D+"/link/create/",auth:D+"/auth"},U=function(){var e=Object(p.a)(b.a.mark((function e(t,n,a,c){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.post(P.create,{accessName:t,redirectLink:n,domainName:a,domainURL:c});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(b.a.mark((function e(t,n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post(D+"/"+t,{domainURL:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{redirectLink:"",error:!0,errorMessage:"Error making a request to redirect. Please try again ! \nError: ".concat(e.t0.message)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(a.useState)(""),t=Object(S.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(S.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)("Hello"),j=Object(S.a)(u,1)[0],m=Object(a.useState)({link:"",accessName:""}),O=Object(S.a)(m,2),f=O[0],x=O[1],y=Object(a.useState)(!1),v=Object(S.a)(y,2),L=v[0],w=v[1],C=Object(d.c)((function(e){return e.appReducer})),M=C.domainURL,T=C.domainName,E=Object(d.b)(),A=Object(o.f)(),H=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n,i,T,M);case 2:if((t=e.sent).linkCreated){e.next=6;break}return w(!1),e.abrupt("return",x(Object(k.a)(Object(k.a)({},f),{},{accessName:t.error})));case 6:E(h("".concat(T,"/").concat(n))),setTimeout((function(){return w(!1),A.push("/confirm")}),900);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return T?Object(_.jsxs)("div",{className:g.a.homeScreenStyle,children:[Object(_.jsx)("h3",{children:"Enter Your Link and Access Name"}),Object(_.jsx)(B,{placeHolder:"Enter Your Link",setContent:l,value:i,error:f.link,resetError:function(){return x(Object(k.a)(Object(k.a)({},f),{},{link:""}))}}),Object(_.jsx)("div",{className:g.a.separaterStyle}),Object(_.jsx)(B,{placeHolder:"Enter Access Name",setContent:c,value:n,error:f.accessName,accessName:!0,resetError:function(){return x(Object(k.a)(Object(k.a)({},f),{},{accessName:""}))}}),Object(_.jsx)("br",{}),Object(_.jsxs)("h5",{className:g.a.errorStyleHide,children:["* ",j]}),Object(_.jsx)(N.a,{color:"primary",variant:"contained",className:g.a.buttonStyle,onClick:function(){w(!0);var e=function(e){return null===e||""===e?"Please enter your Link":e.includes("http")?"":"Invalid link. Please copy and paste the full link"}(i),t=function(e){return null===e||""===e?"Please enter Access Name":e.includes(",")?", symbol not accepted":e.includes("(")?"( symbol not accepted":e.includes(")")?") symbol not accepted":e.includes("^")?"^ symbol not accepted":e.includes("/")?"/ symbol not accepted":e.includes("$")?"$ symbol not accepted":e.includes("[")?"[ symbol not accepted":e.includes("]")?"] symbol not accepted":e.includes("@")?"@ symbol not accepted":e.includes("*")?"* symbol not accepted":e.includes("!")?"! symbol not accepted":e.includes("?")?"? symbol not accepted":e.includes(">")?"> symbol not accepted":e.includes("<")?"< symbol not accepted":e.includes(";")?"; symbol not accepted":e.includes("|")?"| symbol not accepted":""}(n);return t||e?(w(!1),x({link:e,accessName:t})):H()},children:"Shortern Your Link"}),Object(_.jsx)(R,{show:L}),Object(_.jsx)(I,{show:L})]}):(A.push("/"),Object(_.jsx)("div",{}))},q=n(26),Y=n.n(q),G=function(){var e=Y.a.confirmScreenStyle,t=Y.a.buttonStyle,n=Object(d.c)((function(e){return e.appReducer})).domainName,c=Object(a.useState)(!1),r=Object(S.a)(c,2),s=r[0],i=r[1],l=Object(d.b)(),u=Object(o.f)(),j="https://".concat(n);return n?Object(_.jsxs)("div",{className:e,children:[Object(_.jsx)("h3",{children:"YOUR LINK IS SUCCESSFULLY SHORTENED!!"}),Object(_.jsx)("p",{children:"The link down below is your shortened link. "}),Object(_.jsx)("p",{onClick:function(){window.open(j)},children:n}),Object(_.jsxs)("div",{className:Y.a.buttonContainer,children:[Object(_.jsxs)(N.a,{className:t,variant:"contained",color:"primary",onClick:function(){l(function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:m}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u.push("/")},children:[Object(_.jsx)("i",{className:"fas fa-chevron-left"}),"\xa0 Return"]}),Object(_.jsxs)(N.a,{className:Y.a.copyButton,variant:"contained",color:"primary",onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px",display:"none"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(j),i(!0)},children:[s?Object(_.jsx)("i",{className:"fas fa-check-circle"}):Object(_.jsx)("i",{className:"fas fa-clone"}),s?"Link Copied":"Copy Link"]})]})]}):(u.push("/"),Object(_.jsx)("div",{}))},J=n(29),X=n.n(J),z=function(){return Object(_.jsxs)("div",{className:X.a.body,children:[Object(_.jsx)("div",{className:X.a.circleLoad,children:Object(_.jsx)("div",{className:X.a.innerLoad})}),Object(_.jsx)("h1",{children:"N"})]})},F=function(){var e=Object(o.h)().id,t=window.location.origin;return W(e,t).then((function(e){var t=e.redirectLink,n=e.error,a=e.errorMessage;n?alert(a):window.location.href=t})),Object(_.jsx)(z,{})};var V=function(){var e="/confirm"===Object(o.g)().pathname;return Object(_.jsxs)("div",{className:"appCover",children:[e?Object(_.jsx)("img",{className:"imageResponsiveConfirm",src:"https://firebasestorage.googleapis.com/v0/b/on-card.appspot.com/o/personal%2Ftoronto%20moon.jpg?alt=media&token=88a40233-1432-4078-89d1-f4aa6443da7d"}):Object(_.jsx)("img",{className:"imageResponsive",src:"https://firebasestorage.googleapis.com/v0/b/on-card.appspot.com/o/personal%2Ftoronto_day.jpg?alt=media&token=36ba690a-e5e7-46c0-accc-cb0a9ac7362a"}),Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/addlink",component:K}),Object(_.jsx)(o.a,{path:"/confirm",component:G}),Object(_.jsx)(o.a,{path:"/:id",component:F}),Object(_.jsx)(o.a,{path:"/",exact:!0,component:v})]})]})},Q=n(19),$=n(21),Z=n(48),ee=n(49),te=Object($.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{domainURL:"",domainName:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=t.payload,a=n.name,c=n.url;return Object(k.a)(Object(k.a)({},e),{},{domainURL:c,domainName:a});case O:return console.log(e),Object(k.a)(Object(k.a)({},e),{},{accessLink:t.payload});case x:return console.log(e),Object(k.a)(Object(k.a)({},e),{},{domainName:t.payload});case m:return Object(k.a)(Object(k.a)({},e),{},{domainURL:"",domainName:""});default:return e}}}),ne=[Z.a],ae=Object($.createStore)(te,Object(ee.composeWithDevTools)($.applyMiddleware.apply(void 0,ne)));r.a.render(Object(_.jsx)(Q.a,{children:Object(_.jsx)(d.a,{store:ae,children:Object(_.jsx)(V,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.07ec326d.chunk.js.map