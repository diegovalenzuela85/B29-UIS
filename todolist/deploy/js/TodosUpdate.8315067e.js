(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TodosUpdate"],{9235:function(o,t,e){"use strict";e.r(t);var d=function(){var o=this,t=o.$createElement,e=o._self._c||t;return o.selectedTodo?e("div",[e("todo-form",{attrs:{todo:o.selectedTodo,submitText:"Actualizar todo"},on:{submitForm:o.saveTodo}})],1):e("b-alert",{attrs:{show:""}},[o._v(" Todo no identificado ")])},s=[],a=e("5530"),c=e("2f62"),n=e("550a"),i={name:"TodosUpdate",components:{TodoForm:n["a"]},computed:Object(a["a"])({},Object(c["e"])("todos",["selectedTodo"])),created:function(){this.selectedTodo||this.fetchTodo(this.$route.params.id)},methods:Object(a["a"])(Object(a["a"])({},Object(c["b"])("todos",["updateTodo","fetchTodo"])),{},{saveTodo:function(o){var t=this;this.updateTodo(o).then((function(){t.$router.push({name:"Todos"})}))}})},r=i,u=e("2877"),T=Object(u["a"])(r,d,s,!1,null,null,null);t["default"]=T.exports}}]);
//# sourceMappingURL=TodosUpdate.8315067e.js.map