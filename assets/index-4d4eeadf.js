import{u as o,i as u,a as r,S as e,B as t,Y as i,T as d,t as s}from"./index-012dff6d.js";import{C as p}from"./index-e07e4e01.js";import{T as n}from"./Title-7bbcb9dc.js";import{h as c}from"./hljs-74a5c6d1.js";import{D as l,a as m,C as h}from"./code-9a657405.js";import{P as g}from"./Paragraph-690c10ae.js";import{T as y,p as C}from"./columns-66bf7541.js";import"./_commonjsHelpers-725317a4.js";const B=`<Space dir="h">
    <Button type='primary' onClick={() => {
        loadingBar.start();
    }}>开始</Button>
    <Button type='primary' onClick={() => {
        loadingBar.finish();
    }}>结束</Button>
    <Button type='primary' onClick={() => {
        loadingBar.error();
    }}>错误</Button>
</Space>`,f=[{name:"start",desc:"开始",type:"Function",default:""},{name:"finish",desc:"结束",type:"Function",default:""},{name:"error",desc:"错误",type:"Function",default:""}],F=[{id:"loadingbar_base",text:"基础用法"}],D={loadingbar_base:B},b=s('<div class="sys-ctx-main-left">');function S(){return[(()=>{const a=b();return o(c,a,()=>""),u(a,r(e,{dir:"v",size:32,get children(){return[r(n,{heading:2,children:"LoadingBar 加载进度条"}),r(e,{id:"loadingbar_base",dir:"v",get children(){return r(p,{bordered:!0,get children(){return[r(e,{dir:"h",get children(){return[r(t,{type:"primary",onClick:()=>{i.start()},children:"开始"}),r(t,{type:"primary",onClick:()=>{i.finish()},children:"结束"}),r(t,{type:"primary",onClick:()=>{i.error()},children:"错误"})]}}),r(l,{align:"left",get children(){return r(d,{type:"primary",children:"基础用法"})}}),r(g,{type:"secondary",spacing:"extended",children:"loadingBar 为全局变量，包含start、finish和error三个接口， 一般配合路由使用"}),r(m,{get data(){return D.loadingbar_base}})]}})}}),r(e,{dir:"v",size:24,id:"comp_api",get children(){return[r(n,{type:"primary",heading:3,children:"API"}),r(e,{id:"comp_props",dir:"v",get children(){return[r(n,{type:"primary",heading:4,children:"LoadingBar Props"}),r(y,{columns:C,data:f,border:!0,size:"small"})]}})]}})]}})),a})(),r(h,{data:F})]}export{S as default};
