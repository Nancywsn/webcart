"use strict";(self["webpackChunkshopcart"]=self["webpackChunkshopcart"]||[]).push([[93],{3733:function(e,l,a){a.r(l),a.d(l,{default:function(){return f}});var t=a(3396),n=a(7139);const o=e=>((0,t.dD)("data-v-bc6a1e82"),e=e(),(0,t.Cn)(),e),u=o((()=>(0,t._)("span",null,"总计：",-1))),r=o((()=>(0,t._)("span",null,"元",-1)));function c(e,l,a,o,c,s){const i=(0,t.up)("el-breadcrumb-item"),d=(0,t.up)("el-breadcrumb"),m=(0,t.up)("el-button"),p=(0,t.up)("el-input"),h=(0,t.up)("el-col"),w=(0,t.up)("el-row"),g=(0,t.up)("el-table-column"),b=(0,t.up)("el-input-number"),f=(0,t.up)("el-table"),C=(0,t.up)("el-card"),W=(0,t.up)("el-text"),_=(0,t.up)("el-footer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d,{"separator-icon":o.ArrowRight},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{to:{path:"/home"}},{default:(0,t.w5)((()=>[(0,t.Uk)("首页")])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)("我的购物车")])),_:1})])),_:1},8,["separator-icon"]),(0,t.Wm)(C,{class:"box-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{gutter:20},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{span:12},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{placeholder:"搜素商品",modelValue:o.searchinput,"onUpdate:modelValue":l[1]||(l[1]=e=>o.searchinput=e),clearable:"",onClear:l[2]||(l[2]=e=>o.loadTable())},{append:(0,t.w5)((()=>[(0,t.Wm)(m,{onClick:l[0]||(l[0]=e=>o.search()),icon:o.Search},null,8,["icon"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(f,{data:e.tableData,stripe:"",style:{width:"100%"},height:"500","highlight-current-row":"",onCurrentChange:e.handleCurrentChange,onSelectionChange:o.handleSelectionChange},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{type:"selection",width:"55"}),(0,t.Wm)(g,{fixed:"left",type:"index"}),(0,t.Wm)(g,{prop:"name",label:"商品名称",width:"140"}),(0,t.Wm)(g,{prop:"shopid",label:"店铺",width:"140"}),(0,t.Wm)(g,{prop:"price",label:"单价/元"}),(0,t.Wm)(g,{prop:"quantity",label:"数量"},{default:(0,t.w5)((e=>[(0,t.Wm)(b,{size:"small",modelValue:e.row.quantity,"onUpdate:modelValue":l=>e.row.quantity=l,min:1,max:100,onChange:l=>o.handleChange(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,t.Uk)(" /> "),(0,t.Wm)(g,{fixed:"right",label:"操作"},{default:(0,t.w5)((e=>[(0,t.Wm)(m,{type:"primary",size:"small",onClick:l=>o.handleRemove(e.row)},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onCurrentChange","onSelectionChange"])])),_:1}),(0,t._)("div",null,[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[u,(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.sumPrice),1)])),_:1}),r,(0,t.Wm)(m,{type:"primary",onClick:o.shopResult},{default:(0,t.w5)((()=>[(0,t.Uk)("结算")])),_:1},8,["onClick"])])),_:1})])],64)}var s=a(2748),i=a(4870),d=a(7241),m=a(9224);let p=async()=>{let e=await(0,d.s)("/cart");return console.log(e),e},h=async e=>{await(0,m.CA)("是否确定删除\t"+e.name);let{success:l}=await(0,d.K)("/delete",e);return console.log(l),l?(0,m.EU)("删除成功！"):(0,m._G)("失败！请重试"),l};var w={name:"goods",setup(){const e=(0,i.iH)(1),l=(0,i.iH)("");let a=(0,i.qj)({tableData:[],sumPrice:0,selectedRows:[]}),n=async()=>{let e=await p();a.tableData=e};n();let o=async e=>{console.log(e);let l=await h(e);l&&n()},u=e=>{let l=0;return e?e.forEach((e=>{console.log(e.quantity),l+=e.quantity*e.price,console.log(a.sumPrice)})):console.log("nothing"),l},r=e=>{a.sumPrice=0,console.log("复选框"),console.log(e),a.selectedRows=e,a.sumPrice=u(e)};const c=e=>{a.sumPrice=0,console.log(`商品 ${e.name} 的数量为：${e.quantity}`),a.sumPrice=u(a.selectedRows)},d=(0,t.Fl)((()=>a.tableData.filter((e=>e.name.includes(l.value))))),m=()=>{let e=d.value;e.forEach((e=>{console.log(e.name)})),a.tableData=e};let w=()=>{console.log("结算")};return{...(0,i.BK)(a),Search:s.olm,ArrowRight:s.olP,num:e,handleRemove:o,shopResult:w,handleSelectionChange:r,handleChange:c,sumup:u,searchinput:l,results:d,search:m,loadTable:n}}},g=a(89);const b=(0,g.Z)(w,[["render",c],["__scopeId","data-v-bc6a1e82"]]);var f=b}}]);
//# sourceMappingURL=93.7288b86f.js.map