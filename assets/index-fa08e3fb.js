import{u as o,i as u,a as r,S as e,B as t,a4 as i,T as d,P as s,d as p,t as c}from"./index-6b593c43.js";import{C as l}from"./index-92015a99.js";import{T as n}from"./Title-4bfa7384.js";import{h as m}from"./hljs-409c3200.js";import{D as h,a as g,C as y}from"./code-5b64fce7.js";import{p as C}from"./columns-cd2d5c33.js";const B=`<Space dir="h">
    <Button type='primary' onClick={() => {
        loadingBar.start();
    }}>开始</Button>
    <Button type='primary' onClick={() => {
        loadingBar.finish();
    }}>结束</Button>
    <Button type='primary' onClick={() => {
        loadingBar.error();
    }}>错误</Button>
</Space>`,f=[{name:"start",desc:"开始",type:"Function",default:""},{name:"finish",desc:"结束",type:"Function",default:""},{name:"error",desc:"错误",type:"Function",default:""}],F=[{id:"loadingbar_base",text:"基础用法"}],D={loadingbar_base:B},b=c('<div class="sys-ctx-main-left">');function P(){return[(()=>{const a=b();return o(m,a,()=>""),u(a,r(e,{dir:"v",size:32,get children(){return[r(n,{heading:2,children:"LoadingBar 加载进度条"}),r(e,{id:"loadingbar_base",dir:"v",get children(){return r(l,{bordered:!0,get children(){return[r(e,{dir:"h",get children(){return[r(t,{type:"primary",onClick:()=>{i.start()},children:"开始"}),r(t,{type:"primary",onClick:()=>{i.finish()},children:"结束"}),r(t,{type:"primary",onClick:()=>{i.error()},children:"错误"})]}}),r(h,{align:"left",get children(){return r(d,{type:"primary",children:"基础用法"})}}),r(s,{type:"secondary",spacing:"extended",children:"loadingBar 为全局变量，包含start、finish和error三个接口， 一般配合路由使用"}),r(g,{get data(){return D.loadingbar_base}})]}})}}),r(e,{dir:"v",size:24,id:"comp_api",get children(){return[r(n,{type:"primary",heading:3,children:"API"}),r(e,{id:"comp_props",dir:"v",get children(){return[r(n,{type:"primary",heading:4,children:"LoadingBar Props"}),r(p,{columns:C,data:f,border:!0,size:"small"})]}})]}})]}})),a})(),r(y,{data:F})]}export{P as default};
