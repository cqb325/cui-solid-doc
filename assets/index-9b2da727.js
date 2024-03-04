import{u as o,i as u,a as r,S as e,B as t,G as i,T as d,t as s}from"./index-5e0fdc25.js";import{C as p}from"./index-7b04ac17.js";import{T as n}from"./Title-abffd9c9.js";import{h as c}from"./hljs-74a5c6d1.js";import{D as l,a as m,T as h,p as g,C as y}from"./code-f8e23b11.js";import{P as C}from"./Paragraph-3448cd8e.js";import"./_commonjsHelpers-725317a4.js";const B=`<Space dir="h">
    <Button type='primary' onClick={() => {
        loadingBar.start();
    }}>开始</Button>
    <Button type='primary' onClick={() => {
        loadingBar.finish();
    }}>结束</Button>
    <Button type='primary' onClick={() => {
        loadingBar.error();
    }}>错误</Button>
</Space>`,f=[{name:"start",desc:"开始",type:"Function",default:""},{name:"finish",desc:"结束",type:"Function",default:""},{name:"error",desc:"错误",type:"Function",default:""}],F=[{id:"loadingbar_base",text:"基础用法"}],D={loadingbar_base:B},b=s('<div class="sys-ctx-main-left">');function P(){return[(()=>{const a=b();return o(c,a,()=>""),u(a,r(e,{dir:"v",size:32,get children(){return[r(n,{heading:2,children:"LoadingBar 加载进度条"}),r(e,{id:"loadingbar_base",dir:"v",get children(){return r(p,{bordered:!0,get children(){return[r(e,{dir:"h",get children(){return[r(t,{type:"primary",onClick:()=>{i.start()},children:"开始"}),r(t,{type:"primary",onClick:()=>{i.finish()},children:"结束"}),r(t,{type:"primary",onClick:()=>{i.error()},children:"错误"})]}}),r(l,{align:"left",get children(){return r(d,{type:"primary",children:"基础用法"})}}),r(C,{type:"secondary",spacing:"extended",children:"loadingBar 为全局变量，包含start、finish和error三个接口， 一般配合路由使用"}),r(m,{get data(){return D.loadingbar_base}})]}})}}),r(e,{dir:"v",size:24,id:"comp_api",get children(){return[r(n,{type:"primary",heading:3,children:"API"}),r(e,{id:"comp_props",dir:"v",get children(){return[r(n,{type:"primary",heading:4,children:"LoadingBar Props"}),r(h,{columns:g,data:f,border:!0,size:"small"})]}})]}})]}})),a})(),r(y,{data:F})]}export{P as default};
