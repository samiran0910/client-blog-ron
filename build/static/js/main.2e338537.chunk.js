(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{39:function(e,t,s){},41:function(e,t,s){},47:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(32),r=s.n(n),i=s(4),l=s.n(i),o=s(8),j=s(2),u=(s(39),s(0));function b(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleSm",children:"React & Node"}),Object(u.jsx)("span",{className:"headerTitleLg",children:"Blog"})]}),Object(u.jsx)("img",{className:"headerImg",src:"https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})]})}s(41);var p=s(5);function d(e){var t=e.post;return Object(u.jsxs)("div",{className:"post",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:"https://blog-ron.herokuapp.com/images/"+t.photo,alt:""}),Object(u.jsxs)("div",{className:"postInfo",children:[Object(u.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(u.jsx)("span",{className:"postCat",children:e.name})}))}),Object(u.jsx)(p.b,{to:"/post/".concat(t._id),className:"link",children:Object(u.jsx)("span",{className:"postTitle",children:t.title})}),Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(u.jsx)("p",{className:"postDesc",children:t.desc})]})}s(47);function O(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(d,{post:e})}))})}var m=s(7),h=s.n(m);s(66);function x(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(u.jsx)("img",{src:"https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg",alt:""}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit."})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(u.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(u.jsx)(p.b,{to:"/?cat=".concat(e.name),className:"link",children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(u.jsxs)("div",{className:"sidebarSocial",children:[Object(u.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(u.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"}),Object(u.jsx)("i",{className:"sidebarIcon fab fa-pinterest-square"}),Object(u.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"})]})]})]})}s(67);var f=s(3);function g(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(f.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(O,{posts:s}),Object(u.jsx)(x,{})]})]})}var N=s(21),v=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(N.a)(Object(N.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},I={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},w=Object(a.createContext)(I),y=function(e){var t=e.children,s=Object(a.useReducer)(v,I),c=Object(j.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(w.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};s(68);function S(){var e=Object(a.useContext)(w),t=e.user,s=e.dispatch;return Object(u.jsxs)("div",{className:"top",children:[Object(u.jsxs)("div",{className:"topLeft",children:[Object(u.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(u.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(u.jsx)("i",{className:"topIcon fab fa-pinterest-square"}),Object(u.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(u.jsx)("div",{className:"topCenter",children:Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(p.b,{className:"link",to:"/",children:"HOME"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(p.b,{className:"link",to:"/",children:"ABOUT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(p.b,{className:"link",to:"/",children:"CONTACT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(p.b,{className:"link",to:"/write",children:"WRITE"})}),Object(u.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(u.jsxs)("div",{className:"topRight",children:[t?Object(u.jsx)(p.b,{to:"/settings",children:Object(u.jsx)("img",{className:"topImg",src:"https://blog-ron.herokuapp.com/images/"+t.profilePic,alt:""})}):Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(p.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(p.b,{className:"link",to:"/register",children:"REGISTER"})})]}),Object(u.jsx)("i",{className:"topSearchIcon fas fa-search"})]})]})}s(69),s(70);function T(){var e=Object(f.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(j.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(w).user,i=Object(a.useState)(""),b=Object(j.a)(i,2),d=b[0],O=b[1],m=Object(a.useState)(""),x=Object(j.a)(m,2),g=x[0],N=x[1],v=Object(a.useState)(!1),I=Object(j.a)(v,2),y=I[0],S=I[1];Object(a.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/posts/"+e);case 2:s=t.sent,n(s.data),O(s.data.title),N(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var T=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/posts/".concat(c._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.put("/posts/".concat(c._id),{username:r.username,title:d,desc:g});case 3:S(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlePost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(u.jsx)("img",{src:"https://blog-ron.herokuapp.com/images/"+c.photo,alt:"",className:"singlePostImg"}),y?Object(u.jsx)("input",{type:"text",value:d,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return O(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[d,c.username===(null===r||void 0===r?void 0:r.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return S(!0)}}),Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:T})]})]}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(u.jsx)(p.b,{to:"/?user=".concat(c.username),className:"link",children:Object(u.jsxs)("b",{children:[" ",c.username]})})]}),Object(u.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),y?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:g,onChange:function(e){return N(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:g}),y&&Object(u.jsx)("button",{className:"singlePostButton",onClick:k,children:"Update"})]})})}function k(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(T,{}),Object(u.jsx)(x,{})]})}s(71);function L(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],b=r[1],p=Object(a.useState)(null),d=Object(j.a)(p,2),O=d[0],m=d[1],x=Object(a.useContext)(w).user,f=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:x.username,title:s,desc:i},!O){e.next=15;break}return c=new FormData,n=Date.now()+O.name,c.append("name",n),c.append("file",O),a.photo=n,e.prev=8,e.next=11,h.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,h.a.post("/posts",a);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[O&&Object(u.jsx)("img",{className:"writeImg",src:URL.createObjectURL(O),alt:""}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:f,children:[Object(u.jsxs)("div",{className:"writeFormGroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return m(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsx)("div",{className:"writeFormGroup",children:Object(u.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return b(e.target.value)}})}),Object(u.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}s(72);function C(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],b=r[1],p=Object(a.useState)(""),d=Object(j.a)(p,2),O=d[0],m=d[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),N=g[0],v=g[1],I=Object(a.useState)(!1),y=Object(j.a)(I,2),S=y[0],T=y[1],k=Object(a.useContext)(w),L=k.user,C=k.dispatch,P=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C({type:"UPDATE_START"}),a={userId:L._id,username:i,email:O,password:N},!s){e.next=16;break}return c=new FormData,n=Date.now()+s.name,c.append("name",n),c.append("file",s),a.profilePic=n,e.prev=9,e.next=12,h.a.post("/upload",c);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,h.a.put("/users/"+L._id,a);case 19:r=e.sent,T(!0),C({type:"UPDATE_SUCCESS",payload:r.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),C({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"settingsWrapper",children:[Object(u.jsxs)("div",{className:"settingsTitle",children:[Object(u.jsx)("span",{className:"settingsUpdateTitle",children:"Update Your Account"}),Object(u.jsx)("span",{className:"settingsDeleteTitle",children:"Delete Account"})]}),Object(u.jsxs)("form",{className:"settingsForm",onSubmit:P,children:[Object(u.jsx)("label",{children:"Profile Picture"}),Object(u.jsxs)("div",{className:"settingsPP",children:[Object(u.jsx)("img",{src:s?URL.createObjectURL(s):"https://blog-ron.herokuapp.com/images/"+L.profilePic,alt:""}),Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",placeholder:L.username,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",placeholder:L.email,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"}),S&&Object(u.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(u.jsx)(x,{})]})}s(73);function P(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(w),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(o.a)(l.a.mark((function s(a){var n;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,h.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("span",{className:"loginTitle",children:"Login"}),Object(u.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(u.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(u.jsx)("button",{className:"loginRegisterButton",children:Object(u.jsx)(p.b,{className:"link",to:"/register",children:"Register"})})]})}s(74);function E(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],b=r[1],d=Object(a.useState)(""),O=Object(j.a)(d,2),m=O[0],x=O[1],f=Object(a.useState)(!1),g=Object(j.a)(f,2),N=g[0],v=g[1],I=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!1),e.prev=2,e.next=5,h.a.post("/auth/register",{username:s,email:i,password:m});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("span",{className:"registerTitle",children:"Register"}),Object(u.jsxs)("form",{className:"registerForm",onSubmit:I,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(u.jsx)("button",{className:"registerLoginButton",children:Object(u.jsx)(p.b,{className:"link",to:"/login",children:"Login"})}),N&&Object(u.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}var U=function(){var e=Object(a.useContext)(w).user;return Object(u.jsxs)(p.a,{children:[Object(u.jsx)(S,{}),Object(u.jsxs)(f.c,{children:[Object(u.jsx)(f.a,{exact:!0,path:"/",children:Object(u.jsx)(g,{})}),Object(u.jsx)(f.a,{path:"/register",children:e?Object(u.jsx)(g,{}):Object(u.jsx)(E,{})}),Object(u.jsx)(f.a,{path:"/login",children:e?Object(u.jsx)(g,{}):Object(u.jsx)(P,{})}),Object(u.jsx)(f.a,{path:"/write",children:e?Object(u.jsx)(L,{}):Object(u.jsx)(E,{})}),Object(u.jsx)(f.a,{path:"/settings",children:e?Object(u.jsx)(C,{}):Object(u.jsx)(E,{})}),Object(u.jsx)(f.a,{path:"/post/:postId",children:Object(u.jsx)(k,{})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{children:Object(u.jsx)(U,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2e338537.chunk.js.map