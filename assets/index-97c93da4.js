import{u as g,i as h,a as e,S as t,I as r,T as a,t as y}from"./index-39ed6b74.js";import{C as n}from"./index-f8aef721.js";import{D as d,a as i,C as f}from"./code-a8f5f1bb.js";import{R as s}from"./index-18e0fa76.js";import{T as m,p as b,e as _}from"./columns-f7fa8682.js";import{P as u}from"./Paragraph-97fd5b1c.js";import{T as c}from"./Title-9180e6b0.js";import{h as v}from"./hljs-74a5c6d1.js";import"./createField-e888742b.js";import"./_commonjsHelpers-725317a4.js";const C=`<Rate icon={<Icon name="star" size={24}/>} onChange={(v: number) => {
    console.log(v);
}}/>`,F='<Rate disabled icon={<Icon name="star" size={24}/>}/>',x='<Rate count={3} icon={<Icon name="star" size={24}/>}/>',z='<Rate allowHalf icon={<Icon name="star" size={24}/>}/>',D=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"icon",desc:"进行显示的图标",type:"JSXElement",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"count",desc:"图标的数量",type:"number",default:"5"},{name:"allowHalf",desc:"允许选中半星",type:"boolean",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],A=[{name:"onChange",desc:"值改变事件",params:"value"}],R=[{id:"rate_base",text:"基础用法"},{id:"rate_disabled",text:"禁用"},{id:"rate_count",text:"数量"},{id:"rate_half",text:"半星"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],o={rate_base:C,rate_disabled:F,rate_count:x,rate_half:z},I=y('<div class="sys-ctx-main-left">');function J(){return[(()=>{const l=I();return g(v,l,()=>""),h(l,e(t,{dir:"v",size:32,get children(){return[e(c,{heading:2,children:"Rate 评分"}),e(t,{id:"rate_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(s,{get icon(){return e(r,{name:"star",size:24})},onChange:p=>{console.log(p)}}),e(d,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(i,{get data(){return o.rate_base}})]}})}}),e(t,{id:"rate_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(s,{disabled:!0,get icon(){return e(r,{name:"star",size:24})}}),e(d,{align:"left",get children(){return e(a,{type:"primary",children:"禁用"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 disabled 进行禁用"}),e(i,{get data(){return o.rate_disabled}})]}})}}),e(t,{id:"rate_count",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(s,{count:3,get icon(){return e(r,{name:"star",size:24})}}),e(d,{align:"left",get children(){return e(a,{type:"primary",children:"数量"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 count 指定图标的数量，默认为5"}),e(i,{get data(){return o.rate_count}})]}})}}),e(t,{id:"rate_half",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(s,{allowHalf:!0,get icon(){return e(r,{name:"star",size:24})}}),e(d,{align:"left",get children(){return e(a,{type:"primary",children:"半星"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 allowHalf 可选中半星"}),e(i,{get data(){return o.rate_half}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(c,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"Rate Props"}),e(m,{columns:b,data:D,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"Events"}),e(m,{columns:_,data:A,border:!0,size:"small"})]}})]}})]}})),l})(),e(f,{data:R})]}export{J as default};