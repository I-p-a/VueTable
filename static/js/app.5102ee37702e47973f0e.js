webpackJsonp([1],{NHnr:function(t,e,i){"use strict";function n(t){i("uODD")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={computed:{Price:function(){var t=0;return this.items.forEach(function(e){t+=e.price*e.count}),t}},methods:{removeItem:function(t){this.items.splice(t,1)},submit:function(){this.items.push(this.newItem),this.newItem={}}},data:function(){return{newItem:{},headers:[{text:"Наименование",align:"left",sortable:!1,value:"name"},{text:"Количество",sortable:!1,value:"count"},{text:"Цена",sortable:!1,value:"price"}],items:[{name:"Frozen Yogurt",count:159,price:6},{name:"Ice cream sandwich",count:237,price:9},{name:"Eclair",count:262,price:16},{name:"Cupcake",count:305,price:3.7}]}}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-data-table",{staticClass:"elevation-1",staticStyle:{overflow:"unset"},attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("tr",[i("td",{staticStyle:{height:"unset"}},[i("v-btn",{staticStyle:{float:"left"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(i){t.removeItem(e.index)}}},[i("v-icon",{attrs:{dark:""}},[t._v("remove")])],1),t._v(" "),i("v-edit-dialog",{attrs:{lazy:""}},[i("p",{staticStyle:{"min-width":"20px","padding-top":"1em"}},[t._v(t._s(e.item.name))]),t._v(" "),i("v-text-field",{attrs:{slot:"input",label:"Edit","single-line":"",counter:""},slot:"input",model:{value:e.item.name,callback:function(i){t.$set(e.item,"name",i)},expression:"props.item.name"}})],1)],1),t._v(" "),i("td",{staticClass:"text-xs-right"},[i("v-edit-dialog",{attrs:{lazy:""}},[i("p",{staticStyle:{"min-width":"20px"}},[t._v(t._s(e.item.count))]),t._v(" "),i("v-text-field",{attrs:{slot:"input",label:"Edit","single-line":"",counter:""},slot:"input",model:{value:e.item.count,callback:function(i){t.$set(e.item,"count",i)},expression:"props.item.count"}})],1)],1),t._v(" "),i("td",{staticClass:"text-xs-right"},[i("v-edit-dialog",{attrs:{lazy:""}},[i("p",{staticStyle:{"min-width":"20px"}},[t._v(t._s(e.item.price))]),t._v(" "),i("v-text-field",{attrs:{slot:"input",label:"Edit","single-line":"",counter:""},slot:"input",model:{value:e.item.price,callback:function(i){t.$set(e.item,"price",i)},expression:"props.item.price"}})],1)],1)])]}}])},[i("template",{slot:"footer"},[i("td",{attrs:{colspan:"100%"}},[i("strong",[t._v("Итог: "+t._s(t.Price))])])])],2),t._v(" "),i("v-container",{staticStyle:{"max-width":"400px",margin:"auto"},attrs:{fluid:"","grid-list-lg":""}},[i("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[i("v-card-title",{attrs:{"primary-title":""}},[i("div",{staticClass:"headline"},[t._v("Add new product")]),t._v(" "),i("div",[i("v-text-field",{attrs:{label:"Name"},model:{value:t.newItem.name,callback:function(e){t.$set(t.newItem,"name",e)},expression:"newItem.name"}}),t._v(" "),i("v-text-field",{attrs:{label:"Count",type:"number"},model:{value:t.newItem.count,callback:function(e){t.$set(t.newItem,"count",e)},expression:"newItem.count"}}),t._v(" "),i("v-text-field",{attrs:{label:"Price",type:"number"},model:{value:t.newItem.price,callback:function(e){t.$set(t.newItem,"price",e)},expression:"newItem.price"}})],1)]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",dark:""},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1)],1)},r=[],c={render:l,staticRenderFns:r},o=c,u=i("VU/8"),m=u(s,o,!1,null,null,null),p=m.exports,d={name:"app",components:{appTable:p}},v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("app-table")],1)},f=[],b={render:v,staticRenderFns:f},_=b,x=i("VU/8"),h=n,w=x(d,_,!1,h,null,null),g=w.exports,y=i("3EgV"),k=i.n(y);a.a.use(k.a),a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:g}})},uODD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5102ee37702e47973f0e.js.map