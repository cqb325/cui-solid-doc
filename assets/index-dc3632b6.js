import{u as y,i as f,a as e,S as r,L as u,F as c,T as d,P as o,A as S,B as g,d as F,t as b}from"./index-380e038c.js";import{i as E}from"./avatar-41ce13e3.js";import{T as a}from"./Title-c09746a1.js";import{C as l}from"./index-c58932b7.js";import{D as m,a as p,C as L}from"./code-ca2ce82c.js";import{S as i}from"./Slot-fdf990e2.js";import{p as B}from"./columns-cd2d5c33.js";import{h as _}from"./hljs-37d3e333.js";const x=`
const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border onSelect={(item: any) => {
    console.log(item);
}}>
    <Slot name="head">
        Header
    </Slot>
    <Slot name="foot">
        Footer
    </Slot>
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
}}>
    <Slot name="head">
        Header
    </Slot>
    <Slot name="foot">
        Footer
    </Slot>
    <For each={data}>
        {(item) => {
            return <List.Item id={item.id} desc={item.desc} data={item}></List.Item>
        }}
    </For>
</List>`,v=`const data = [
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
</List>`,C=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"border",desc:"边框",type:"boolean",default:""},{name:"size",desc:"大小small|large",type:"string",default:""},{name:"head",desc:"头部",type:"string|JSXElement",default:""},{name:"foot",desc:"底部",type:"string|JSXElement",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"onSelect",desc:"列表项选中事件",type:"Function",default:""}],A=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"id",desc:"id标识",type:" string | number",default:""},{name:"data",desc:"数据项",type:"Object",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"actions",desc:"操作内容",type:"JSXElement",default:""},{name:"avatar",desc:"头像",type:"Avatar",default:""},{name:"content",desc:"内容",type:"string|JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"desc",desc:"描述",type:"string|JSXElement",default:""}],I=[{id:"list_base",text:"基础用法"},{id:"list_size",text:"列表尺寸"},{id:"list_complex",text:"基础列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"List属性"},{id:"comp_item_props",text:"List.Item属性"}],h={list_base:x,list_size:z,list_complex:v},D=b('<div class="sys-ctx-main-left">');function M(){const s=[{id:"1",desc:"这是一段文本。"},{id:"2",desc:"这是一段文本。"},{id:"3",desc:"这是一段文本。"}];return[(()=>{const n=D();return y(_,n,()=>""),f(n,e(r,{dir:"v",size:32,get children(){return[e(a,{heading:2,children:"List 列表"}),e(r,{id:"list_base",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(u,{border:!0,onSelect:t=>{console.log(t)},get children(){return[e(i,{name:"head",children:"Header"}),e(i,{name:"foot",children:"Footer"}),e(c,{each:s,children:t=>e(u.Item,{get id(){return t.id},get desc(){return t.desc},get content(){return t.content},data:t})})]}}),e(m,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["默认列表, ",e(d,{code:!0,children:"head"})," ",e(d,{code:!0,children:"foot"})," 使用 ",e(d,{code:!0,children:"Slot"})," 名称为 ",e(d,{code:!0,children:"head"}),"、",e(d,{code:!0,children:"foot"})]}}),e(p,{get data(){return h.list_base}})]}})}}),e(r,{id:"list_size",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(u,{border:!0,size:"small",onSelect:t=>{console.log(t)},get children(){return[e(i,{name:"head",children:"Header"}),e(i,{name:"foot",children:"Footer"}),e(c,{each:s,children:t=>e(u.Item,{get id(){return t.id},get desc(){return t.desc},data:t})})]}}),e(m,{align:"left",get children(){return e(d,{type:"primary",children:"列表尺寸"})}}),e(o,{type:"secondary",spacing:"extended",children:"size可设置为small"}),e(p,{get data(){return h.list_size}})]}})}}),e(r,{id:"list_complex",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(u,{border:!0,head:"Header",foot:"Footer",get children(){return e(c,{each:s,children:t=>e(u.Item,{get avatar(){return e(S,{src:E})},get id(){return t.id},title:"Title",get desc(){return t.desc},data:t,get actions(){return e(r,{get children(){return[e(g,{type:"text",size:"small",onClick:()=>{console.log(t)},children:"Edit"}),e(g,{type:"text",size:"small",children:"More"})]}})},children:"具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容 具体内容具体内容具体内容具体内容具体内容具体内容 具体内容具体内容具体内容具体内容"})})}}),e(m,{align:"left",get children(){return e(d,{type:"primary",children:"基础列表"})}}),e(o,{type:"secondary",spacing:"extended",children:"带有图标、标题、描述的基础列表。也可以带有列表操作组。"}),e(p,{get data(){return h.list_complex}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(a,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"List Props"}),e(F,{columns:B,data:C,border:!0,size:"small"})]}}),e(r,{id:"comp_item_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"List.Item Props"}),e(F,{columns:B,data:A,border:!0,size:"small"})]}})]}})]}})),n})(),e(L,{data:I})]}export{M as default};
