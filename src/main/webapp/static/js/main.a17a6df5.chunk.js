(this["webpackJsonpdoordash-app"]=this["webpackJsonpdoordash-app"]||[]).push([[0],{151:function(e,t,n){},228:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),s=n.n(r),i=(n(151),n(36)),o=n(235),l=n(238),u=n(75),j=n(142),d=n(70),h=n(57),b=n(233),f=n(232),m=function(e){var t="/login?username=".concat(e.username,"&password=").concat(e.password);return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to log in")}))},O=function(e){return fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(console.log(e),e.status<200||e.status>=300)throw Error("Fail to sign up")}))},p=n(145),x=n(7),g=u.a.Option,y=function(e){var t=e.itemId,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(x.jsx)(d.a,{title:"Add to shopping cart",children:Object(x.jsx)(h.a,{loading:r,type:"primary",icon:Object(x.jsx)(p.a,{}),onClick:function(){s(!0),function(e){return fetch("/order/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to add menu item to shopping cart")}))}(t).then((function(){return j.b.success("Successfully add item")})).catch((function(e){return j.b.error(e.message)})).finally((function(){s(!1)}))}})})};var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(i.a)(r,2),o=s[0],l=s[1],h=Object(a.useState)([]),m=Object(i.a)(h,2),O=m[0],p=m[1],v=Object(a.useState)(),S=Object(i.a)(v,2),w=S[0],C=S[1];return Object(a.useEffect)((function(){C(!0),fetch("/restaurants").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get restaurants");return e.json()})).then((function(e){p(e.map((function(e){return Object(x.jsx)(g,{value:e.id,children:e.name},e.id)})))})).catch((function(e){j.b.error(e.message)})).finally((function(){C(!1)}))}),[]),Object(a.useEffect)((function(){var e;o&&(C(!0),(e=o,fetch("/restaurant/".concat(e,"/menu")).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get menus");return e.json()}))).then((function(e){c(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){C(!1)})))}),[o]),Object(x.jsxs)("div",{children:[Object(x.jsx)(u.a,{value:o,placeholder:"Select a restaurant",style:{width:300},loading:w,onSelect:function(e){return l(e)},children:O}),o&&Object(x.jsx)(b.b,{style:{marginTop:20},loading:w,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:n,renderItem:function(e){return Object(x.jsx)(b.b.Item,{children:Object(x.jsxs)(f.a,{title:Object(x.jsx)(d.a,{title:e.name,children:e.name}),extra:Object(x.jsx)(y,{itemId:e.id}),children:[Object(x.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:"auto",width:"100%",display:"block"}}),"Price: ".concat(e.price)]})})}})]})},S=(n(228),n(101)),w=n(106),C=n(104),I=n(234),F=n(237),P=n(240),k=n(241),T=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={loading:!1},e.onFinish=function(t){e.setState({loading:!0}),m(t).then((function(){j.b.success("Login Successful"),e.props.onSuccess()})).catch((function(t){j.b.error(t.message),e.setState({loading:!1})}))},e.render=function(){return Object(x.jsxs)(I.a,{name:"normal_login",onFinish:e.onFinish,style:{width:300,margin:"auto"},children:[Object(x.jsx)(I.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(x.jsx)(F.a,{prefix:Object(x.jsx)(P.a,{}),placeholder:"Username"})}),Object(x.jsx)(I.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(x.jsx)(F.a.Password,{prefix:Object(x.jsx)(k.a,{}),placeholder:"Password"})}),Object(x.jsx)(I.a.Item,{children:Object(x.jsx)(h.a,{type:"primary",htmlType:"submit",loading:e.state.loading,children:"Login"})})]})},e}return n}(c.a.Component),E=T,M=n(239),L=o.a.Text,q=function(){var e,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(!1),f=Object(i.a)(d,2),m=f[0],O=f[1],p=Object(a.useState)(!1),g=Object(i.a)(p,2),y=g[0],v=g[1];Object(a.useEffect)((function(){c&&(O(!0),fetch("/cart").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get shopping cart data");return e.json()})).then((function(e){u(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){O(!1)})))}),[c]);var S=function(){r(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.a,{type:"primary",shape:"round",onClick:function(){r(!0)},children:"Cart"}),Object(x.jsx)(M.a,{title:"My Shopping Cart",onClose:S,visible:c,width:520,footer:Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(x.jsx)(L,{strong:!0,children:"Total price: $".concat(null===l||void 0===l?void 0:l.totalPrice)}),Object(x.jsxs)("div",{children:[Object(x.jsx)(h.a,{onClick:S,style:{marginRight:8},children:"Cancel"}),Object(x.jsx)(h.a,{onClick:function(){v(!0),fetch("/checkout").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to checkout")})).then((function(){j.b.success("Successfully checkout"),r(!1)})).catch((function(e){j.b.error(e.message)})).finally((function(){v(!1)}))},type:"primary",loading:y,disabled:m||0===(null===l||void 0===l||null===(e=l.orderItemList)||void 0===e?void 0:e.length),children:"Checkout"})]})]}),children:Object(x.jsx)(b.b,{loading:m,itemLayout:"horizontal",dataSource:null===l||void 0===l?void 0:l.orderItemList,renderItem:function(e){return Object(x.jsx)(b.b.Item,{children:Object(x.jsx)(b.b.Item.Meta,{title:e.menuItem.name,description:"$".concat(e.price)})})}})})]})},N=n(236),R=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){O(t).then((function(){e.setState({displayModal:!1}),j.b.success("Successfully signed up")})).catch((function(e){j.b.error(e.message)}))},e.render=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(x.jsx)(N.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(x.jsxs)(I.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(x.jsx)(I.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(x.jsx)(F.a,{prefix:Object(x.jsx)(P.a,{}),placeholder:"Email"})}),Object(x.jsx)(I.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(F.a,{prefix:Object(x.jsx)(k.a,{}),placeholder:"Password"})}),Object(x.jsx)(I.a.Item,{name:"firstName",rules:[{required:!0,message:"Please input your first name!"}],children:Object(x.jsx)(F.a,{placeholder:"firstname"})}),Object(x.jsx)(I.a.Item,{name:"lastName",rules:[{required:!0,message:"Please input your last name!"}],children:Object(x.jsx)(F.a,{placeholder:"lastname"})}),Object(x.jsx)(I.a.Item,{children:Object(x.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(c.a.Component),A=R,B=o.a.Title,H=l.a.Header,J=l.a.Content;var U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(l.a,{style:{height:"100vh"},children:[Object(x.jsx)(H,{children:Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)(B,{level:2,style:{color:"white",lineHeight:"inherit",marginBottom:0},children:"SinoDash"}),Object(x.jsx)("div",{children:n?Object(x.jsx)(q,{}):Object(x.jsx)(A,{})})]})}),Object(x.jsx)(J,{style:{padding:"50px",maxHeight:"calc(100% - 64px)",overflowY:"auto"},children:n?Object(x.jsx)(v,{}):Object(x.jsx)(E,{onSuccess:function(){return c(!0)}})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),D()}},[[230,1,2]]]);
//# sourceMappingURL=main.a17a6df5.chunk.js.map