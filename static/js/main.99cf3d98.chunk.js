(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{25:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),o=e(12),c=e.n(o),s=e(4),u=e.n(s),d=e(6),b=e(10),p=e(2),f=e(5),x=e(3),l={baseUrl:"https://jsonplaceholder.typicode.com/",requestPosts:function(){var n=this;return Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n.baseUrl,"posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))()},requestUsers:function(){var n=this;return Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n.baseUrl,"users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))()}};function h(){var n=Object(p.a)(["\n  margin: 10px;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  & div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    margin: 8px;\n    border: 4px solid #fff;\n    border-radius: 50%;\n    animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n  }\n  & div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  & div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  & div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(p.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return j=function(){return n},n}var g=Object(x.c)(j()),O=x.b.div(h(),g),v=function(){return Object(r.jsxs)(O,{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},m=e.p+"static/media/user-photo.ff80f565.png",w=e(16),y=e.n(w);function S(){var n=Object(p.a)(["\n  line-height: 1.2;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]);return S=function(){return n},n}function E(){var n=Object(p.a)(["\n  line-height: 1.2;\n  margin-bottom: 10px;\n  font-size: 20px;\n  color: #ffffff;\n  background: #5a48ff;\n  border-radius: 5px;\n  padding: 5px;\n  text-align: center;\n  font-weight: 500;\n  border-bottom: 1px solid #b8b8b8;\n  padding-bottom: 5px;\n"]);return E=function(){return n},n}function k(){var n=Object(p.a)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n"]);return k=function(){return n},n}function L(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #dbdbdb;\n"]);return L=function(){return n},n}function T(){var n=Object(p.a)(["\n  font-size: 14px;\n  color: #2db4b4;\n"]);return T=function(){return n},n}function z(){var n=Object(p.a)(["\n  margin-bottom: 3px;\n  font-weight: 500;\n  font-size: 14px;\n"]);return z=function(){return n},n}function U(){var n=Object(p.a)(["\n  max-width: 400px;\n  background: #fff;\n  box-shadow: 0 0 3px rgb(177, 177, 177);\n  margin-top: 20px;\n  border-radius: 10px;\n  padding: 10px 10px 5px;\n"]);return U=function(){return n},n}var G=x.b.div(U()),I=x.b.div(z()),_=x.b.div(T()),C=x.b.div(L()),q=x.b.img(k()),P=x.b.div(E()),R=x.b.div(S()),N=function(n){var t=n.user,e=n.post,i=n.filterInputValue;return Object(r.jsxs)(G,{children:[Object(r.jsx)(P,{children:e.title}),Object(r.jsxs)(C,{children:[Object(r.jsx)(q,{src:m,alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)(I,{children:t.name}),Object(r.jsxs)(_,{children:["@",t.username]})]})]}),Object(r.jsx)(R,{children:Object(r.jsx)(y.a,{highlightClassName:"YourHighlightClass",searchWords:[i],autoEscape:!0,textToHighlight:e.body})})]})};function A(){var n=Object(p.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  line-height: 1;\n  font-family: 'Roboto', sans-serif;\n  border: none;\n  outline: none;\n}\nbody {\n  background-color: #302f3a;\n}\nbutton {\n  cursor: pointer;\n}\n"]);return A=function(){return n},n}var D=Object(x.a)(A());function H(){var n=Object(p.a)(["\n  margin: 0 auto;\n  max-width: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 90vh;\n"]);return H=function(){return n},n}function J(){var n=Object(p.a)(["\n  flex: 1 1 0;\n  text-align: center;\n  font-size: 35px;\n  color: #fff;\n  margin-top: 20px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #a0a0a0;\n  width: 400px;\n  @media (max-width: 550px) {\n    width: 80vw;\n  }\n"]);return J=function(){return n},n}function V(){var n=Object(p.a)(["\n  width: 500px;\n  height: 35px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #29282e;\n  border-radius: 5px;\n  padding: 0 5px;\n  &:focus,\n  &:hover {\n    box-shadow: 0 0 8px #2bafc7;\n  }\n  @media (max-width: 550px) {\n    width: 90vw;\n  }\n"]);return V=function(){return n},n}function B(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 20px;\n"]);return B=function(){return n},n}var M=function(n,t){switch(t.type){case"SET_POSTS":return Object(f.a)(Object(f.a)({},n),{},{posts:t.payload});case"SET_USERS":return Object(f.a)(Object(f.a)({},n),{},{users:t.payload});case"TOGGLE_LOADING":return Object(f.a)(Object(f.a)({},n),{},{isLoading:!n.isLoading});default:return n}},W=x.b.div(B()),Y=x.b.input(V()),F=x.b.div(J()),K=x.b.div(H()),Q=function(){var n=Object(i.useState)(""),t=Object(b.a)(n,2),e=t[0],a=t[1],o=Object(i.useReducer)(M,{posts:null,users:null,isLoading:!0}),c=Object(b.a)(o,2),s=c[0],p=c[1],f=s.posts,x=s.users,h=s.isLoading,j=function(){var n=Object(d.a)(u.a.mark((function n(){var t,e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.requestPosts();case 2:return t=n.sent,p({type:"SET_POSTS",payload:t}),n.next=6,l.requestUsers();case 6:e=n.sent,p({type:"SET_USERS",payload:e}),p({type:"TOGGLE_LOADING"});case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(i.useEffect)((function(){j()}),[]);return Object(r.jsxs)(W,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(Y,{value:e,onChange:function(n){return a(n.target.value)},placeholder:"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0441\u0442"}),Object(r.jsx)(F,{children:"\u041f\u043e\u0441\u0442\u044b"}),Object(r.jsx)(K,{children:h?Object(r.jsx)(v,{}):f.filter((function(n){return-1!==n.body.toLowerCase().indexOf(e.toLowerCase().trim())})).map((function(n){var t;return x.filter((function(e){return e.id===n.userId?t=e:null})),Object(r.jsx)(N,{user:t,post:n,filterInputValue:e},n.id)}))})]})};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.99cf3d98.chunk.js.map