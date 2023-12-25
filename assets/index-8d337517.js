import{n as H,i as r,e as g,g as z,h as A,s as I,t as m,j as D,o as J,a as e,p as X,q as k,u as K,S as l,F as B,T as o}from"./index-39ed6b74.js";import{A as O}from"./index-b58166c3.js";import{C as $,B as C}from"./index-f8aef721.js";import{i as M}from"./avatar-41ce13e3.js";import{T as y}from"./Title-9180e6b0.js";import{D as p,a as b,C as q}from"./code-a8f5f1bb.js";import{P as x}from"./Paragraph-97fd5b1c.js";import{T as E,p as S}from"./columns-f7fa8682.js";import{h as R}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const w=m('<div><div class="cm-list-item-main"><div class="cm-list-item-meta"></div><div class="cm-list-item-content">'),G=m('<div class="cm-list-item-avatar">'),N=m('<div class="cm-list-item-body"><div class="cm-list-item-title"></div><div class="cm-list-item-desc">'),Q=m('<ul class="cm-list-item-addon">');function U(t){const u=Z(),i=u?.signal[0],f=u?.signal[1],a=()=>D(t,"cm-list-item",{"cm-list-item-active":i&&i()===t.id}),s=()=>{f&&f(t.id),u?.onSelect&&u.onSelect(t.data)};return(()=>{const n=w(),F=n.firstChild,_=F.firstChild,T=_.nextSibling;return n.$$click=s,r(_,(()=>{const d=g(()=>!!t.avatar);return()=>d()?(()=>{const c=G();return r(c,()=>t.avatar),c})():null})(),null),r(_,(()=>{const d=g(()=>!!(t.title||t.desc));return()=>d()?(()=>{const c=N(),v=c.firstChild,j=v.nextSibling;return r(v,()=>t.title),r(j,()=>t.desc),c})():null})(),null),r(T,()=>t.children),r(n,(()=>{const d=g(()=>!!t.actions);return()=>d()?(()=>{const c=Q();return r(c,()=>t.actions),c})():null})(),null),z(d=>{const c=a(),v=t.style;return d._v$=A(n,c,d._v$),d._v$2=I(n,v,d._v$2),d},{_v$:void 0,_v$2:void 0}),n})()}H(["click"]);const V=m("<div>"),W=m('<div class="cm-list-head">'),Y=m('<div class="cm-list-foot">'),P=X();function h(t){const u=()=>D(t,"cm-list",{"cm-list-border":t.border,[`cm-list-${t.size}`]:t.size}),[i,f]=J(t,"activeKey","");return e(P.Provider,{get value(){return{render:t.render,signal:[i,f],onSelect:t.onSelect}},get children(){const a=V();return r(a,(()=>{const s=g(()=>!!t.head);return()=>s()?(()=>{const n=W();return r(n,()=>t.head),n})():null})(),null),r(a,()=>t.children,null),r(a,(()=>{const s=g(()=>!!t.foot);return()=>s()?(()=>{const n=Y();return r(n,()=>t.foot),n})():null})(),null),z(s=>{const n=u(),F=t.style;return s._v$=A(a,n,s._v$),s._v$2=I(a,F,s._v$2),s},{_v$:void 0,_v$2:void 0}),a}})}h.Item=U;const Z=()=>k(P),ee=`
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
</List>`,te=`const data = [
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
</List>`,ie=`const data = [
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
</List>`,ne=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"border",desc:"边框",type:"boolean",default:""},{name:"size",desc:"大小small|large",type:"string",default:""},{name:"head",desc:"头部",type:"string|JSXElement",default:""},{name:"foot",desc:"底部",type:"string|JSXElement",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"onSelect",desc:"列表项选中事件",type:"Function",default:""}],re=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"id",desc:"id标识",type:" string | number",default:""},{name:"data",desc:"数据项",type:"Object",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"actions",desc:"操作内容",type:"JSXElement",default:""},{name:"avatar",desc:"头像",type:"Avatar",default:""},{name:"content",desc:"内容",type:"string|JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"desc",desc:"描述",type:"string|JSXElement",default:""}],se=[{id:"list_base",text:"基础用法"},{id:"list_size",text:"列表尺寸"},{id:"list_complex",text:"基础列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"List属性"},{id:"comp_item_props",text:"List.Item属性"}],L={list_base:ee,list_size:te,list_complex:ie},de=m('<div class="sys-ctx-main-left">');function ye(){const t=[{id:"1",desc:"这是一段文本。"},{id:"2",desc:"这是一段文本。"},{id:"3",desc:"这是一段文本。"}];return[(()=>{const u=de();return K(R,u,()=>""),r(u,e(l,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"List 列表"}),e(l,{id:"list_base",dir:"v",get children(){return e($,{bordered:!0,get children(){return[e(h,{border:!0,onSelect:i=>{console.log(i)},head:"Header",foot:"Footer",get children(){return e(B,{each:t,children:i=>e(h.Item,{get id(){return i.id},get desc(){return i.desc},get content(){return i.content},data:i})})}}),e(p,{align:"left",get children(){return e(o,{type:"primary",children:"基础用法"})}}),e(x,{type:"secondary",spacing:"extended",get children(){return["默认列表, ",e(o,{code:!0,children:"head"})," ",e(o,{code:!0,children:"foot"})," 使用 ",e(o,{code:!0,children:"Slot"})," 名称为 ",e(o,{code:!0,children:"head"}),"、",e(o,{code:!0,children:"foot"})]}}),e(b,{get data(){return L.list_base}})]}})}}),e(l,{id:"list_size",dir:"v",get children(){return e($,{bordered:!0,get children(){return[e(h,{border:!0,size:"small",onSelect:i=>{console.log(i)},head:"Header",foot:"Footer",get children(){return e(B,{each:t,children:i=>e(h.Item,{get id(){return i.id},get desc(){return i.desc},data:i})})}}),e(p,{align:"left",get children(){return e(o,{type:"primary",children:"列表尺寸"})}}),e(x,{type:"secondary",spacing:"extended",children:"size可设置为small"}),e(b,{get data(){return L.list_size}})]}})}}),e(l,{id:"list_complex",dir:"v",get children(){return e($,{bordered:!0,get children(){return[e(h,{border:!0,head:"Header",foot:"Footer",get children(){return e(B,{each:t,children:i=>e(h.Item,{get avatar(){return e(O,{src:M})},get id(){return i.id},title:"Title",get desc(){return i.desc},data:i,get actions(){return e(l,{get children(){return[e(C,{type:"text",size:"small",onClick:()=>{console.log(i)},children:"Edit"}),e(C,{type:"text",size:"small",children:"More"})]}})},children:"具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容 具体内容具体内容具体内容具体内容具体内容具体内容 具体内容具体内容具体内容具体内容"})})}}),e(p,{align:"left",get children(){return e(o,{type:"primary",children:"基础列表"})}}),e(x,{type:"secondary",spacing:"extended",children:"带有图标、标题、描述的基础列表。也可以带有列表操作组。"}),e(b,{get data(){return L.list_complex}})]}})}}),e(l,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(l,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"List Props"}),e(E,{columns:S,data:ne,border:!0,size:"small"})]}}),e(l,{id:"comp_item_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"List.Item Props"}),e(E,{columns:S,data:re,border:!0,size:"small"})]}})]}})]}})),u})(),e(q,{data:se})]}export{ye as default};
