(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"data":[{"question":"Which of the following is the major element in earth crust?","choices":["Silicon","Oxygen","Iron","Aluminium"],"answer":"Oxygen"},{"question":"Which among the following country is known as \u201cLand of White Elephant\u201d?","choices":["India","Sri Lanka","UAE","Thailand"],"answer":"Thailand"},{"question":"What is the capital of Austria ?","choices":["Graz","Salzburg","Innsbruck","Vienna"],"answer":"Vienna"},{"question":"The term Ground Stroke is associated with which of the following games?","choices":["Cricket","Badminton","Tennis","Draughts"],"answer":"Tennis"},{"question":"What is the name of the biggest planet in our solar system ?","choices":["Mars","Jupiter","Earth","Mercury"],"answer":"Jupiter"}]}')},22:function(e,t,n){},23:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(9),a=n.n(s),i=(n(22),n(3)),o=(n(23),n(4)),r="QUIZ_START",l="QUIZ_RESET",u="QUIZ_NEXT",j="QUIZ_PREV",d="QUIZ_SUBMIT",b=n(2),O=n(1),h=function(e){var t=e.show,n=e.children,c=t?"modal display-block":"modal display-none";return Object(O.jsx)("div",{className:c,children:Object(O.jsx)("section",{className:"modal-main",children:n})})},v=n.p+"static/media/trophy.16e6df06.png",f=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.quizReducer})),n=t.answers,s=t.time,a=Object(c.useState)(0),r=Object(i.a)(a,2),u=r[0],j=r[1],d=Object(c.useState)(!1),f=Object(i.a)(d,2),m=f[0],p=f[1];Object(c.useEffect)((function(){var e=0;n.forEach((function(t,n){t.a===(null===b||void 0===b?void 0:b.data[n].answer)&&e++})),j(e)}),[]);return Object(O.jsxs)("div",{className:"endBox",children:[Object(O.jsx)("img",{src:v,className:"trophy",alt:"",srcset:""}),Object(O.jsx)("h3",{children:"Your results"}),Object(O.jsxs)("p",{children:[u," of ",null===b||void 0===b?void 0:b.data.length]}),Object(O.jsx)("p",{children:Object(O.jsxs)("strong",{children:[Math.floor(u/(null===b||void 0===b?void 0:b.data.length)*100),"%"]})}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Your time:"})," ",s,"sec"]}),Object(O.jsxs)("section",{children:[Object(O.jsx)("button",{className:"button",onClick:function(){return p(!0)},children:"Check your answers"}),Object(O.jsx)("button",{className:"button",style:{marginLeft:"20px"},onClick:function(){e((function(e){e({type:l,payload:null})}))},children:"Try again"})]}),Object(O.jsx)(h,{show:m,children:Object(O.jsxs)("section",{className:"modalBody",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{className:"",children:"Your Answers"}),Object(O.jsx)("p",{style:{cursor:"pointer"},onClick:function(){return p(!1)},children:"X"})]}),Object(O.jsx)("section",{className:"content",children:Object(O.jsx)("ul",{children:n.map((function(e,t){return Object(O.jsxs)("li",{className:"mb-6",children:[Object(O.jsx)("p",{children:Object(O.jsx)("strong",{children:e.q})}),Object(O.jsxs)("p",{className:e.a===(null===b||void 0===b?void 0:b.data[t].answer)?"bg-success":"bg-danger",children:["Your answer: ",e.a]}),e.a!==(null===b||void 0===b?void 0:b.data[t].answer)&&Object(O.jsxs)("p",{className:"bg-warning",children:["Correct answer: ",null===b||void 0===b?void 0:b.data[t].answer]})]},t)}))})})]})})]})},m=n(6),p=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return null===e||void 0===e?void 0:e.quizReducer})),n=t.activeQuestion,s=t.answers,a=t.time,r=Object(c.useState)(null===b||void 0===b?void 0:b.data[n]),l=Object(i.a)(r,2),h=l[0],v=l[1],f=Object(c.useState)(""),p=Object(i.a)(f,2),x=p[0],g=p[1],w=Object(c.useState)(""),y=Object(i.a)(w,2),N=y[0],S=y[1],k=Object(c.useState)(a),q=Object(i.a)(k,2),C=q[0],T=q[1];Object(c.useEffect)((function(){C>0&&setTimeout((function(){return T(C-1)}),1e3)}),[C]);var I=Object(c.useRef)();Object(c.useEffect)((function(){v(null===b||void 0===b?void 0:b.data[n]),void 0!=s[n]&&(S(s[n].a),console.log("RUn once"))}),[h,n]);var E=function(e){S(e.target.value),x&&g("")};return Object(O.jsxs)("div",{className:"questionBox",children:[Object(O.jsxs)("section",{className:"questionHead",children:[Object(O.jsxs)("h3",{children:["Question ",n+1,"/",null===b||void 0===b?void 0:b.data.length]}),Object(O.jsx)("h5",{children:C})]}),Object(O.jsxs)("section",{className:"middleBox",children:[Object(O.jsxs)("div",{className:"question",children:[Object(O.jsx)("p",{children:null===h||void 0===h?void 0:h.question}),x&&Object(O.jsx)("div",{children:x})]}),Object(O.jsx)("div",{className:"option",ref:I,children:null===h||void 0===h?void 0:h.choices.map((function(e,t){return Object(O.jsxs)("label",{className:"".concat(e===N?"selected":"text"),children:[Object(O.jsx)("input",{type:"radio",name:"answer",value:e,onChange:E,checked:e===N}),e]},t)}))})]}),Object(O.jsxs)("section",{className:"questionBottom",children:[n<=0?null:Object(O.jsx)("button",{className:"button",onClick:function(){g(""),e((function(e){e({type:j,payload:null})}))},children:"Prev"}),n+1>=(null===b||void 0===b?void 0:b.data.length)?Object(O.jsx)("button",{className:"button nextBtn",onClick:function(){if(""===N)return g("Please select one option!");e(function(e){var t=e.answers,n=e.time;return function(e){e({type:d,payload:{answers:t,time:n}})}}({answers:[].concat(Object(m.a)(s),[s[n]={q:h.question,a:N}]),time:a-C}))},children:"Submit"}):Object(O.jsx)("button",{className:"button nextBtn",onClick:function(t){if(""===N)return g("Please select one option!");var c=Object(m.a)(s);c[n]={q:h.question,a:N},e(function(e){var t=e.answers;return function(e){e({type:u,payload:t})}}({answers:c})),S("");var a=I.current.querySelector("input:checked");a&&(a.checked=!1)},children:"Next"})]})]})},x=function(){var e=Object(o.b)(),t=Object(c.useState)(1),n=Object(i.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)(0),u=Object(i.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(60),h=Object(i.a)(b,2),v=h[0],f=h[1];return Object(c.useEffect)((function(){s>59&&a(1),j>59&&d(1)}),[s,j]),Object(c.useEffect)((function(){console.log(s),console.log(typeof s),NaN!==s&&NaN!==j&&f(60*s+j)}),[s,j]),Object(O.jsx)("div",{className:"startBox",children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Start the Quiz"}),Object(O.jsx)("p",{children:"Good luck!"}),Object(O.jsxs)("p",{children:["Time:\xa0\xa0",v,"sec"]}),Object(O.jsxs)("section",{children:[Object(O.jsxs)("label",{htmlFor:"",children:[Object(O.jsx)("input",{type:"number",className:"timeInput",value:s,onChange:function(e){return a(parseInt(e.target.value))}})," min"]}),Object(O.jsxs)("label",{htmlFor:"",children:[Object(O.jsx)("input",{type:"number",className:"timeInput",value:j,onChange:function(e){return d(parseInt(e.target.value))}})," sec"]})]}),Object(O.jsx)("button",{className:"startButton",onClick:function(){e(function(e){return function(t){t({type:r,payload:e})}}(v))},children:"START"})]})})})},g=function(){Object(o.b)();var e=Object(o.c)((function(e){return null===e||void 0===e?void 0:e.quizReducer})),t=e.step,n=e.answers;console.log(t),console.log(n);var s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=(a[0],a[1]),l=Object(c.useState)(0),u=Object(i.a)(l,2),j=u[0];u[1];return Object(c.useEffect)((function(){3===t&&clearInterval(undefined)}),[t]),Object(O.jsxs)("div",{className:"App",children:[1===t&&Object(O.jsx)(x,{}),2===t&&Object(O.jsx)(p,{}),3===t&&Object(O.jsx)(f,{data:b.data,time:j,onAnswersCheck:function(){return r(!0)}})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))},y=n(7),N=n(15),S=(n(31),n(16)),k=n.n(S),q=n(11),C=n(5),T={step:1,activeQuestion:0,answers:[],time:60},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case r:return Object(C.a)(Object(C.a)({},e),{},{step:2,time:c});case u:return Object(C.a)(Object(C.a)({},e),{},{answers:Object(m.a)(c),activeQuestion:(null===e||void 0===e?void 0:e.activeQuestion)+1});case d:return Object(C.a)(Object(C.a)({},e),{},{step:3,answers:Object(m.a)(null===c||void 0===c?void 0:c.answers),time:null===c||void 0===c?void 0:c.time});case l:return Object(C.a)(Object(C.a)({},e),{},{step:1,activeQuestion:0,answers:[],time:60});case j:return Object(C.a)(Object(C.a)({},e),{},{activeQuestion:(null===e||void 0===e?void 0:e.activeQuestion)-1});default:return e}},E=Object(q.a)({storage:k.a,key:"a27"},Object(y.b)({quizReducer:I})),Q=[];Q=[].concat(Object(m.a)(Q),[N.a]);var B=Object(y.c)(E,{},y.a.apply(void 0,Object(m.a)(Q))),R=n(17),z=Object(q.b)(B);a.a.render(Object(O.jsx)(o.a,{store:B,children:Object(O.jsx)(R.a,{loading:null,persistor:z,children:Object(O.jsx)(g,{})})}),document.getElementById("root")),w()}},[[35,1,2]]]);
//# sourceMappingURL=main.c3913837.chunk.js.map