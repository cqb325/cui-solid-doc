import{u as B,i as y,a as e,S as r,F as n,T as d,B as h,t as f}from"./index-69f0698f.js";import{L as u}from"./index-237cd357.js";import{A as b}from"./index-85c9dfcc.js";import{i as E}from"./avatar-41ce13e3.js";import{T as a}from"./Title-48407536.js";import{C as c}from"./index-295b9dac.js";import{D as o,a as l,T as g,p as F,C as L}from"./code-0a2ad5d4.js";import{P as m}from"./Paragraph-6df96914.js";import{h as _}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const x=`
const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border onSelect={(item: any) => {
    console.log(item);
}} head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item id={item.id} desc={item.desc} content={item.content} data={item}></List.Item>
        }}
    </For>
</List>`,z=`const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border size='small' onSelect={(item: any) => {
    console.log(item);
}} head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item id={item.id} desc={item.desc} data={item}></List.Item>
        }}
    </For>
</List>`,S=`const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item avatar={<Avatar src={img}/>} 
                id={item.id} title='Title' desc={item.desc} data={item} actions={<Space>
                    <Button type='text' size='small' onClick={() => {console.log(item);
                    }}>Edit</Button>
                    <Button type='text' size='small'>More</Button>
                </Space>}>
                    具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
                    具体内容具体内容具体内容具体内容具体内容具体内容
                    具体内容具体内容具体内容具体内容
                </List.Item>
        }}
    </For>
</List>`,v=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"border",desc:"边框",type:"boolean",default:""},{name:"size",desc:"大小small|large",type:"string",default:""},{name:"head",desc:"头部",type:"string|JSXElement",default:""},{name:"foot",desc:"底部",type:"string|JSXElement",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"onSelect",desc:"列表项选中事件",type:"Function",default:""}],C=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"id",desc:"id标识",type:" string | number",default:""},{name:"data",desc:"数据项",type:"Object",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"actions",desc:"操作内容",type:"JSXElement",default:""},{name:"avatar",desc:"头像",type:"Avatar",default:""},{name:"content",desc:"内容",type:"string|JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"desc",desc:"描述",type:"string|JSXElement",default:""}],A=[{id:"list_base",text:"基础用法"},{id:"list_size",text:"列表尺寸"},{id:"list_complex",text:"基础列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"List属性"},{id:"comp_item_props",text:"List.Item属性"}],p={list_base:x,list_size:z,list_complex:S},I=f('<div class="sys-ctx-main-left">');function $(){const i=[{id:"1",desc:"这是一段文本。",content:""},{id:"2",desc:"这是一段文本。",content:""},{id:"3",desc:"这是一段文本。",content:""}];return[(()=>{const s=I();return B(_,s,()=>""),y(s,e(r,{dir:"v",size:32,get children(){return[e(a,{heading:2,children:"List 列表"}),e(r,{id:"list_base",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{border:!0,onSelect:t=>{console.log(t)},head:"Header",foot:"Footer",get children(){return e(n,{each:i,children:t=>e(u.Item,{get id(){return t.id},get desc(){return t.desc},get content(){return t.content},data:t})})}}),e(o,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(m,{type:"secondary",spacing:"extended",get children(){return["默认列表, ",e(d,{code:!0,children:"head"})," ",e(d,{code:!0,children:"foot"})," 使用 ",e(d,{code:!0,children:"Slot"})," 名称为 ",e(d,{code:!0,children:"head"}),"、",e(d,{code:!0,children:"foot"})]}}),e(l,{get data(){return p.list_base}})]}})}}),e(r,{id:"list_size",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{border:!0,size:"small",onSelect:t=>{console.log(t)},head:"Header",foot:"Footer",get children(){return e(n,{each:i,children:t=>e(u.Item,{get id(){return t.id},get desc(){return t.desc},data:t})})}}),e(o,{align:"left",get children(){return e(d,{type:"primary",children:"列表尺寸"})}}),e(m,{type:"secondary",spacing:"extended",children:"size可设置为small"}),e(l,{get data(){return p.list_size}})]}})}}),e(r,{id:"list_complex",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{border:!0,head:"Header",foot:"Footer",get children(){return e(n,{each:i,children:t=>e(u.Item,{get avatar(){return e(b,{src:E})},get id(){return t.id},title:"Title",get desc(){return t.desc},data:t,get actions(){return e(r,{get children(){return[e(h,{type:"text",size:"small",onClick:()=>{console.log(t)},children:"Edit"}),e(h,{type:"text",size:"small",children:"More"})]}})},children:"具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容 具体内容具体内容具体内容具体内容具体内容具体内容 具体内容具体内容具体内容具体内容"})})}}),e(o,{align:"left",get children(){return e(d,{type:"primary",children:"基础列表"})}}),e(m,{type:"secondary",spacing:"extended",children:"带有图标、标题、描述的基础列表。也可以带有列表操作组。"}),e(l,{get data(){return p.list_complex}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(a,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"List Props"}),e(g,{columns:F,data:v,border:!0,size:"small"})]}}),e(r,{id:"comp_item_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"List.Item Props"}),e(g,{columns:F,data:C,border:!0,size:"small"})]}})]}})]}})),s})(),e(L,{data:A})]}export{$ as default};
