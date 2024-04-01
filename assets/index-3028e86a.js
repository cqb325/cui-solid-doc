import{c as l,u as p,i as c,a as e,S as a,T as m,t as u}from"./index-5e251d81.js";import{C as y}from"./index-dff86af7.js";import{D as f,a as h,T as o,p as g,e as b,C as v}from"./code-c71fa51e.js";import{A as C}from"./index-2134e8e2.js";import{P as A}from"./Paragraph-a25cb645.js";import{T as n}from"./Title-52a6bda3.js";import{h as _}from"./hljs-74a5c6d1.js";import"./Collapase-bfad3ffa.js";import"./Option-72426df3.js";import"./Value-bf1a2078.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";import"./input-0366c6fe.js";import"./createField-7b35bf70.js";import"./index-b603bca5.js";import"./_commonjsHelpers-725317a4.js";const D=`const [data, setData] = createSignal([]);

<AutoComplete data={data()} onSearch={(v: any) => {
    const arr: any = [];
    arr.push(v);
    arr.push(v+v);
    arr.push(v+v+v);
    setData(arr);
}}/>`,x=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"multi",desc:"多选",type:"boolean",default:""},{name:"prefix",desc:"前缀",type:"string|JSXElement",default:""},{name:"data",desc:"传入的数据",type:"Array",default:""},{name:"textField",desc:"文案字段",type:"string",default:"label"},{name:"valueField",desc:"值字段",type:"string",default:"value"},{name:"filter",desc:"支持过滤",type:"boolean",default:""},{name:"renderOption",desc:"自定义选项渲染",type:"Function",default:""},{name:"emptyOption",desc:"空选项",type:"string",default:""},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"align",desc:"下拉内容位置 bottomLeft|bottomRight",type:"string",default:"bottomLeft"},{name:"onChange",desc:"值改变事件",type:"Function",default:""},{name:"onSearch",desc:"输入数据查询事件 参数：输入的内容",type:"Function",default:""}],S=[{name:"onChange",desc:"值改变事件",params:"value"},{name:"onSearch",desc:"输入数据查询事件",params:"keyword"}],F=[{id:"auto_base",text:"基础用法"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],P={auto_base:D},T=u('<div class="sys-ctx-main-left">');function K(){const[d,i]=l([]);return[(()=>{const s=T();return p(_,s,()=>""),c(s,e(a,{dir:"v",size:32,get children(){return[e(n,{heading:2,children:"AutoComplete 自动完成"}),e(a,{id:"auto_base",dir:"v",get children(){return e(y,{bordered:!0,get children(){return[e(C,{get data(){return d()},placeholder:"查询",onSearch:t=>{const r=[];r.push(t),r.push(t+t),r.push(t+t+t),i(r)}}),e(f,{align:"left",get children(){return e(m,{type:"primary",children:"基础用法"})}}),e(A,{type:"secondary",spacing:"extended",children:"基础用法"}),e(h,{get data(){return P.auto_base}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(n,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"AutoComplete Props"}),e(o,{columns:g,data:x,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Events"}),e(o,{columns:b,data:S,border:!0,size:"small"})]}})]}})]}})),s})(),e(v,{data:F})]}export{K as default};