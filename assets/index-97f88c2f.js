import{c as y,u as x,i as c,a as e,S as t,k as d,T as n,f as S,t as l}from"./index-39ed6b74.js";import{C as r,B as C}from"./index-f8aef721.js";import{T as a}from"./Title-9180e6b0.js";import{D as v,a as h,C as E}from"./code-a8f5f1bb.js";import{P as o}from"./Paragraph-97fd5b1c.js";import{T as b,p as f}from"./columns-f7fa8682.js";import{h as _}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const w=`<Space dir="v">
    <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <Spin type="pulse"></Spin>
    </Card>

    <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <Spin type="gear"></Spin>
    </Card>

    <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <Spin type="oval"></Spin>
    </Card>
</Space>`,A=`const [loading, setLoading] = createSignal(true);

<Space dir="v">
    <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <div>卡片内容卡片内容</div>
        <Show when={loading()}>
            <Spin title='加载中'></Spin>
        </Show>
    </Card>
    <div>
        <Button type='primary' onClick={() => {
            setLoading(!loading());
        }}>Toggle</Button>
    </div>
</Space>`,D=[{name:"type",desc:"类型,支持 pulse|gear",type:"string",default:"pulse"},{name:"size",desc:"大小尺寸",type:"string",default:""},{name:"title",desc:"标题",type:"string",default:"Loading..."}],F=[{id:"spin_base",text:"基础用法"},{id:"spin_control",text:"可控"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],g={spin_base:w,spin_control:A},i=l("<div>卡片内容卡片内容"),B=l("<div>"),T=l('<div class="sys-ctx-main-left">');function G(){const[s,m]=y(!0);return[(()=>{const p=T();return x(_,p,()=>""),c(p,e(t,{dir:"v",size:32,get children(){return[e(a,{heading:2,children:"Spin 加载中"}),e(t,{id:"spin_base",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{title:"卡片",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[i(),i(),i(),i(),i(),i(),e(d,{type:"pulse"})]}}),e(r,{title:"卡片",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[i(),i(),i(),i(),i(),i(),e(d,{type:"gear"})]}}),e(r,{title:"卡片",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[i(),i(),i(),i(),i(),i(),e(d,{type:"oval"})]}})]}}),e(v,{align:"left",get children(){return e(n,{type:"primary",children:"基础用法"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["Spin的父组件需要设置position为 ",e(n,{code:!0,children:"relative/absolute/fixed"})]}}),e(o,{type:"secondary",spacing:"extended",get children(){return["Spin的type支持 ",e(n,{code:!0,children:"pulse/gear/oval"})," 默认为 pulse"]}}),e(h,{get data(){return g.spin_base}})]}})}}),e(t,{id:"spin_control",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{title:"卡片",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[i(),i(),i(),i(),i(),i(),e(S,{get when(){return s()},get children(){return e(d,{title:"加载中"})}})]}}),(()=>{const u=B();return c(u,e(C,{type:"primary",onClick:()=>{m(!s())},children:"Toggle"})),u})()]}}),e(v,{align:"left",get children(){return e(n,{type:"primary",children:"可控"})}}),e(o,{type:"secondary",spacing:"extended",children:"可以设置title属性修改文案，默认为loading..."}),e(h,{get data(){return g.spin_control}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(a,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"Spin Props"}),e(b,{columns:f,data:D,border:!0,size:"small"})]}})]}})]}})),p})(),e(E,{data:F})]}export{G as default};
