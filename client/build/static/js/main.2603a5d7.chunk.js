(this.webpackJsonplinkshortener=this.webpackJsonplinkshortener||[]).push([[0],{23:function(e,t,n){e.exports={LinkBox:"LinkBox_LinkBox__280WX",p:"LinkBox_p__e8Tqd",LinkBoxPreview:"LinkBox_LinkBoxPreview__228HB",pPreview:"LinkBox_pPreview__2bEKy",socialIconWrapper:"LinkBox_socialIconWrapper__2XMJl",content:"LinkBox_content__uLS74",directIcon:"LinkBox_directIcon__3_VSy"}},25:function(e,t,n){e.exports={homeScreenStyle:"AddLinkScreen_homeScreenStyle__3TzaX",buttonStyle:"AddLinkScreen_buttonStyle__1_1kt",errorStyle:"AddLinkScreen_errorStyle__2h91w",errorStyleHide:"AddLinkScreen_errorStyleHide__3M1Cw",separaterStyle:"AddLinkScreen_separaterStyle__3Vy-V"}},26:function(e,t,n){e.exports={confirmScreenStyle:"ConfirmScreen_confirmScreenStyle__1nu0f",buttonStyle:"ConfirmScreen_buttonStyle__lqfS0",copyButton:"ConfirmScreen_copyButton__1otww",buttonContainer:"ConfirmScreen_buttonContainer__2ck9H"}},28:function(e,t,n){e.exports={Modal:"Modal_Modal__2WBTT",ModalOpen:"Modal_ModalOpen__1f3ef",ModalClosed:"Modal_ModalClosed__L8S50",Button:"Modal_Button__fOyjj",container:"Modal_container__1LvOf",closeButton:"Modal_closeButton__840KP"}},30:function(e,t,n){e.exports={body:"Loader_body__DM7Xs",circleLoad:"Loader_circleLoad__fR1ei",rotation:"Loader_rotation__3ql_m",innerLoad:"Loader_innerLoad__7wIBa",switch:"Loader_switch__2_PI4"}},32:function(e,t,n){e.exports={homeScreenStyle:"StartScreen_homeScreenStyle__1zGG0",linkContainer:"StartScreen_linkContainer__3OrLO",buttonStyle:"StartScreen_buttonStyle__2A-Jw",errorStyle:"StartScreen_errorStyle__nQKCb",errorStyleHide:"StartScreen_errorStyleHide__3DKsA"}},36:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},8:function(e,t,n){e.exports={inputStyle:"TextBox_inputStyle__1NNTs",textBoxContainer:"TextBox_textBoxContainer__N726f",textBoxContainerError:"TextBox_textBoxContainerError__3dqm7",iconContainer:"TextBox_iconContainer__3cH9T",message:"TextBox_message__3LSyj",errorMessage:"TextBox_errorMessage__3iLGD",infoMessage:"TextBox_infoMessage__a70y1",roof:"TextBox_roof__2QUl5"}},87:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(18),r=n.n(a),o=(n.p,n(36),n(3)),s=n(32),i=n.n(s),l=n(23),u=n.n(l),d=n(10),j=n(4),b=n.n(j),p=n(14),m="LOGOUT",O="ADDLINK",f="CHOOSE_DOMAIN",x="ADDLINKDONE",h=function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:x,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=n(1),y=function(e){var t=e.content,n=e.url,c=[u.a.LinkBox],a=[u.a.p],r=Object(d.b)();return Object(_.jsxs)("div",{className:c.join(" "),onClick:function(){r(function(e,t){return function(){var n=Object(p.a)(b.a.mark((function n(c){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c({type:f,payload:{name:e,url:t}}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))},children:[Object(_.jsx)("div",{className:u.a.socialIconWrapper,children:Object(_.jsx)("div",{className:u.a.iconPlate})}),Object(_.jsx)("h2",{className:u.a.content,children:Object(_.jsx)("p",{className:a.join(" "),children:t})}),Object(_.jsx)("div",{className:u.a.directIcon,children:Object(_.jsx)("i",{className:"fas fa-angle-right"})})]})},v=function(e){var t=e.history,n=i.a.homeScreenStyle,a=i.a.linkContainer,r=Object(d.c)((function(e){return e.appReducer.domainName})),o=[{name:"linker.link",url:"https://linker.link"},{name:"linker.live",url:"https://linker.live"},{name:"linkweb.link",url:"https://linkweb.link"},{name:"hosthub.live",url:"https://hosthub.live"},{name:"vietweb.site",url:"https://vietweb.site"},{name:"rutgon.live",url:"https://rutgon.live"}].map((function(e,t){return Object(_.jsx)(y,{content:e.name,url:e.url},t)}));return Object(c.useEffect)((function(){r&&t.push("/addlink")}),[r]),Object(_.jsxs)("div",{className:n,children:[Object(_.jsxs)("h3",{children:["Welcome To TrungTrinh's ",Object(_.jsx)("br",{})," Link Shortener!"]}),Object(_.jsx)("h4",{children:"Choose the domain name to shorten you link"}),Object(_.jsx)("div",{className:a,children:o})]})},k=n(7),S=n(11),N=n(100),L=n(25),C=n.n(L),w=n(8),g=n.n(w),B=function(e){var t=g.a.inputStyle,n=g.a.textBoxContainer,a=g.a.iconContainer,r=e.setContent,o=e.placeHolder,s=e.value,i=e.accessName,l=e.error,u=Object(c.useState)([g.a.message]),j=Object(S.a)(u,2),b=j[0],p=j[1],m=Object(c.useState)([g.a.roof]),O=Object(S.a)(m,2),f=O[0],x=O[1],h=Object(c.useState)(!1),y=Object(S.a)(h,2),v=y[0],k=y[1],N=Object(d.c)((function(e){return e.appReducer.domainName}));return Object(c.useEffect)((function(){x([g.a.roof]),v&&(x([g.a.roof,g.a.infoMessage]),p([g.a.message,g.a.infoMessage])),l&&(x([g.a.roof,g.a.errorMessage]),p([g.a.message,g.a.errorMessage]))}),[v,l]),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:l&&!v?g.a.textBoxContainerError:n,children:[Object(_.jsx)("input",{className:t,type:"text",placeholder:o,onChange:function(t){return function(t){e.resetError(),r(t.toLowerCase().replace(/\s/g,""))}(t.target.value)},value:s}),Object(_.jsxs)("div",{className:a,onClick:function(){k(!v)},children:[i&&!v&&Object(_.jsx)("i",{className:"fas fa-exclamation-circle"}),i&&v&&Object(_.jsx)("i",{className:"fas fa-times-circle"}),Object(_.jsx)("div",{className:f.join(" ")})]})]}),(v||l)&&Object(_.jsxs)("div",{className:b.join(" "),children:[l&&Object(_.jsx)("h3",{children:l}),!l&&Object(_.jsxs)("h3",{children:["If you enter access name:"," ",Object(_.jsx)("span",{style:{fontWeight:"900"},children:"newlink"}),", your shorten link will be:"," ",Object(_.jsxs)("span",{style:{fontWeight:"900"},children:[N,"/newlink"]})]})]})]})};var M=n(28),T=n.n(M),E=(n(64),function(){return Object(_.jsxs)("div",{className:"sk-folding-cube",children:[Object(_.jsx)("div",{className:"sk-cube1 sk-cube"}),Object(_.jsx)("div",{className:"sk-cube2 sk-cube"}),Object(_.jsx)("div",{className:"sk-cube4 sk-cube"}),Object(_.jsx)("div",{className:"sk-cube3 sk-cube"})]})}),I=function(e){var t=[T.a.Modal,e.show?T.a.ModalOpen:T.a.ModalClosed];return Object(_.jsxs)("div",{className:t.join(" "),children:[Object(_.jsx)(E,{}),Object(_.jsx)("h5",{style:{position:"relative",alignItems:"center",fontSize:"1.5rem"},children:"Loading..."})]})},R=(n(65),function(e){var t=["Backdrop",e.show?"BackdropOpen":"BackdropClosed"];return Object(_.jsx)("div",{className:t.join(" ")})}),A=n(29),H=n.n(A),D="http://localhost:8080",P={create:D+"/link/create/",auth:D+"/auth"},U=function(){var e=Object(p.a)(b.a.mark((function e(t,n,c,a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.post(P.create,{accessName:t,redirectLink:n,domainName:c,domainURL:a});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,c,a){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get(D+"/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(S.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)("Hello"),j=Object(S.a)(u,1)[0],m=Object(c.useState)({link:"",accessName:""}),O=Object(S.a)(m,2),f=O[0],x=O[1],y=Object(c.useState)(!1),v=Object(S.a)(y,2),L=v[0],w=v[1],g=Object(d.c)((function(e){return e.appReducer})),M=g.domainURL,T=g.domainName,E=Object(d.b)(),A=Object(o.f)(),H=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n,i,T,M);case 2:if((t=e.sent).linkCreated){e.next=6;break}return w(!1),e.abrupt("return",x(Object(k.a)(Object(k.a)({},f),{},{accessName:t.error})));case 6:E(h("".concat(T,"/").concat(n))),setTimeout((function(){return w(!1),A.push("/confirm")}),900);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return T?Object(_.jsxs)("div",{className:C.a.homeScreenStyle,children:[Object(_.jsx)("h3",{children:"Enter Your Link and Access Name"}),Object(_.jsx)(B,{placeHolder:"Enter Your Link",setContent:l,value:i,error:f.link,resetError:function(){return x(Object(k.a)(Object(k.a)({},f),{},{link:""}))}}),Object(_.jsx)("div",{className:C.a.separaterStyle}),Object(_.jsx)(B,{placeHolder:"Enter Access Name",setContent:a,value:n,error:f.accessName,accessName:!0,resetError:function(){return x(Object(k.a)(Object(k.a)({},f),{},{accessName:""}))}}),Object(_.jsx)("br",{}),Object(_.jsxs)("h5",{className:C.a.errorStyleHide,children:["* ",j]}),Object(_.jsx)(N.a,{color:"primary",variant:"contained",className:C.a.buttonStyle,onClick:function(){w(!0);var e=function(e){return null===e||""===e?"Please enter your Link":e.includes("http")?"":"Invalid link. Please copy and paste the full link"}(i),t=function(e){return null===e||""===e?"Please enter Access Name":e.includes(",")?", symbol not accepted":e.includes("(")?"( symbol not accepted":e.includes(")")?") symbol not accepted":e.includes("^")?"^ symbol not accepted":e.includes("/")?"/ symbol not accepted":e.includes("$")?"$ symbol not accepted":e.includes("[")?"[ symbol not accepted":e.includes("]")?"] symbol not accepted":e.includes("@")?"@ symbol not accepted":e.includes("*")?"* symbol not accepted":e.includes("!")?"! symbol not accepted":e.includes("?")?"? symbol not accepted":e.includes(">")?"> symbol not accepted":e.includes("<")?"< symbol not accepted":e.includes(";")?"; symbol not accepted":e.includes("|")?"| symbol not accepted":""}(n);return t||e?(w(!1),x({link:e,accessName:t})):H()},children:"Shortern Your Link"}),Object(_.jsx)(I,{show:L}),Object(_.jsx)(R,{show:L})]}):(A.push("/"),Object(_.jsx)("div",{}))},Y=n(26),q=n.n(Y),G=function(){var e=q.a.confirmScreenStyle,t=q.a.buttonStyle,n=Object(d.c)((function(e){return e.appReducer})).domainName,a=Object(c.useState)(!1),r=Object(S.a)(a,2),s=r[0],i=r[1],l=Object(d.b)(),u=Object(o.f)(),j="https://".concat(n);return n?Object(_.jsxs)("div",{className:e,children:[Object(_.jsx)("h3",{children:"YOUR LINK IS SUCCESSFULLY SHORTENED!!"}),Object(_.jsx)("p",{children:"The link down below is your shortened link. "}),Object(_.jsx)("p",{onClick:function(){window.open(j)},children:n}),Object(_.jsxs)("div",{className:q.a.buttonContainer,children:[Object(_.jsxs)(N.a,{className:t,variant:"contained",color:"primary",onClick:function(){l(function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:m}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u.push("/")},children:[Object(_.jsx)("i",{className:"fas fa-chevron-left"}),"\xa0 Return"]}),Object(_.jsxs)(N.a,{className:q.a.copyButton,variant:"contained",color:"primary",onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px",display:"none"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(j),i(!0)},children:[s?Object(_.jsx)("i",{className:"fas fa-check-circle"}):Object(_.jsx)("i",{className:"fas fa-clone"}),s?"Link Copied":"Copy Link"]})]})]}):(u.push("/"),Object(_.jsx)("div",{}))},J=n(30),X=n.n(J),z=function(){return Object(_.jsxs)("div",{className:X.a.body,children:[Object(_.jsx)("div",{className:X.a.circleLoad,children:Object(_.jsx)("div",{className:X.a.innerLoad})}),Object(_.jsx)("h1",{children:"N"})]})},F=function(){var e=Object(o.h)().id;return W(e).then((function(e){var t=e.data,n=t.redirectLink;t.error?alert("Link Doesn't Exist"):window.location.href=n})),Object(_.jsx)(z,{})};var V=function(){var e="/confirm"===Object(o.g)().pathname;return Object(_.jsxs)("div",{className:"appCover",children:[e?Object(_.jsx)("img",{className:"imageResponsiveConfirm",src:"https://firebasestorage.googleapis.com/v0/b/on-card.appspot.com/o/personal%2Ftoronto%20moon.jpg?alt=media&token=88a40233-1432-4078-89d1-f4aa6443da7d"}):Object(_.jsx)("img",{className:"imageResponsive",src:"https://firebasestorage.googleapis.com/v0/b/on-card.appspot.com/o/personal%2Ftoronto_day.jpg?alt=media&token=36ba690a-e5e7-46c0-accc-cb0a9ac7362a"}),Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/addlink",component:K}),Object(_.jsx)(o.a,{path:"/confirm",component:G}),Object(_.jsx)(o.a,{path:"/:id",component:F}),Object(_.jsx)(o.a,{path:"/",exact:!0,component:v})]})]})},Q=n(19),$=n(21),Z=n(48),ee=n(49),te=Object($.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{domainURL:"",domainName:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=t.payload,c=n.name,a=n.url;return Object(k.a)(Object(k.a)({},e),{},{domainURL:a,domainName:c});case O:return console.log(e),Object(k.a)(Object(k.a)({},e),{},{accessLink:t.payload});case x:return console.log(e),Object(k.a)(Object(k.a)({},e),{},{domainName:t.payload});case m:return Object(k.a)(Object(k.a)({},e),{},{domainURL:"",domainName:""});default:return e}}}),ne=[Z.a],ce=Object($.createStore)(te,Object(ee.composeWithDevTools)($.applyMiddleware.apply(void 0,ne)));r.a.render(Object(_.jsx)(Q.a,{children:Object(_.jsx)(d.a,{store:ce,children:Object(_.jsx)(V,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.2603a5d7.chunk.js.map