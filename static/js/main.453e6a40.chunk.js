(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(8),a=n.n(c),s=(n(7),n(4)),i=n(0),r=function(t){var e=Object(o.useState)(""),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(i.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:c}),a("")},children:[Object(i.jsx)("input",{placeholder:"add a todo",value:c,name:"text",className:"todo-input",onChange:function(t){a(t.target.value)}}),Object(i.jsx)("button",{className:"todo-btn",children:"Add ToDo"})]})},d=n(6),j=n(9);var u=function(t){var e=t.todos,n=t.removeTodo;return e.map((function(t){return Object(i.jsxs)("div",{className:"todolist",children:[Object(i.jsx)("div",{className:"todos",children:t.text}),Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)(j.a,{onClick:function(){return n(t.id)},className:"delete-icon"})})]})}))};var l=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Todo's"}),Object(i.jsx)(r,{onSubmit:function(t){var e=[t].concat(Object(d.a)(n));c(e)}}),Object(i.jsx)(u,{todos:n,removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));c(e)}})]})},b=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(l,{})})};a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},7:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.453e6a40.chunk.js.map