import{c as f,u as B,i as g,a as e,S as a,T as t,t as y}from"./index-83d09049.js";import{T as r}from"./index-6d4ead51.js";import{T as h}from"./index-a1b5561e.js";import{A as v}from"./index-8d2cc1ec.js";import{C as i,B as F}from"./index-e34e5d64.js";import{T as o}from"./Title-9eb0645c.js";import{D as u,a as n,C as _}from"./code-799e34f9.js";import{P as d}from"./Paragraph-8bc200e6.js";import{T as b,p as C,e as x}from"./columns-300f9de5.js";import{h as A}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const S=`<Space dir="h">
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag closable>标签三</Tag>
</Space>`,D=`<Space dir="h">
    <Tag>标签一</Tag>
    <Tag value={10}>Value</Tag>
    <Tag theme='primary' circle>Circle</Tag>
    <Tag theme='primary' avatar={<Avatar>U</Avatar>}>Avatar</Tag>
</Space>`,z=`<Space dir="v">
    <Space dir="h">
        <Tag>default tag</Tag>
        <Tag theme='primary'>PRIMARY</Tag>
        <Tag theme='danger'>中文</Tag>
        <Tag theme='warning'>warning</Tag>
        <Tag theme='success'>success</Tag>
        <Tag theme='info'>Info</Tag>
        <Tag theme='magenta'>magenta</Tag>
        <Tag theme='red'>red</Tag>
        <Tag theme='volcano'>volcano</Tag>
        <Tag theme='orange'>orange</Tag>
    </Space>
    <Space>
        <Tag theme='gold'>gold</Tag>
        <Tag theme='yellow'>yellow</Tag>
        <Tag theme='lime'>lime</Tag>
        <Tag theme='green'>green</Tag>
        <Tag theme='cyan'>cyan</Tag>
        <Tag theme='blue'>blue</Tag>
        <Tag theme='geekblue'>geekblue</Tag>
        <Tag theme='purple'>purple</Tag>
    </Space>
</Space>`,k=`<Space dir="h">
    <Tag closable>标签一</Tag>
    <Tag value={10} closable>Value</Tag>
    <Tag theme='primary' circle closable>Circle</Tag>
    <Tag theme='primary' closable avatar={<Avatar>U</Avatar>}>Avatar</Tag>
</Space>`,P=`<Space dir="h">
    <Tag size='large'>标签一</Tag>
    <Tag theme='primary'>标签二</Tag>
</Space>`,w=`const [visible, setVisible] = createSignal(true);

<Space dir="h">
    <Tag theme='primary' closable visible={[visible, setVisible]}>标签一</Tag>
    <Button size='small' onClick={() => {
        setVisible(!visible());
    }}>关闭/显示</Button>
</Space>`,V=`<Space dir="h">
    <Space dir="v">
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup data={[
                {id: '1', title: '标签一'},
                {id: '2', title: '标签二'},
            ]}/>
        </div>
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup size='large' data={[
                {id: '1', title: '标签一'},
                {id: '2', title: '标签二'},
            ]}/>
        </div>
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup data={[
                {id: '1', title: '标签一'},
                {id: '2', title: '标签二'},
                {id: '3', title: '标签三'},
                {id: '4', title: '标签四'},
            ]} closable max={2}/>
        </div>
    </Space>
</Space>`,$=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"theme",desc:"内置样式primary|danger|warning|success|info|magenta|red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple",type:"string",default:"default"},{name:"value",desc:"数值",type:"number",default:""},{name:"circle",desc:"圆角标签",type:"boolean",default:""},{name:"size",desc:"标签尺寸small|large",type:"string",default:""},{name:"avatar",desc:"头像",type:"Avatar",default:""},{name:"closable",desc:"可关闭标签",type:"boolean",default:""},{name:"visible",desc:"可见性绑定属性",type:"Function[]",default:""},{name:"onBeforeClose",desc:"关闭标签前置回调",type:"Function",default:""},{name:"onClose",desc:"关闭标签回调",type:"Function",default:""}],I=[{name:"onBeforeClose",desc:"关闭标签前置回调",params:"Event"},{name:"onClose",desc:"关闭标签回调",params:"Event"}],G=[{id:"tag_base",text:"基础用法"},{id:"tag_type",text:"标签类型"},{id:"tag_theme",text:"内置样式"},{id:"tag_closeable",text:"可关闭"},{id:"tag_size",text:"尺寸"},{id:"tag_control",text:"可控"},{id:"tag_group",text:"标签组"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],c={tag_base:S,tag_type:D,tag_theme:z,tag_closeable:k,tag_size:P,tag_control:w,tag_group:V},p=y("<br>"),m=y("<div>"),R=y('<div class="sys-ctx-main-left">');function Q(){const[E,T]=f(!0);return[(()=>{const s=R();return B(A,s,()=>""),g(s,e(a,{dir:"v",size:32,get children(){return[e(o,{heading:2,children:"Tag 标签"}),e(a,{id:"tag_base",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{children:"标签一"}),e(r,{children:"标签二"}),e(r,{closable:!0,children:"标签三"})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"基础用法"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["简单的展示，添加属性closable可以关闭标签。",p(),"点击关闭标签时，会触发 onClose 事件。"]}}),e(n,{get data(){return c.tag_base}})]}})}}),e(a,{id:"tag_type",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{children:"标签一"}),e(r,{value:10,children:"Value"}),e(r,{theme:"primary",circle:!0,children:"Circle"}),e(r,{theme:"primary",get avatar(){return e(v,{children:"U"})},children:"Avatar"})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"标签类型"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["value属性可以设置具备显示值的标签",p(),"设置circle可以生成圆角标签",p(),"设置avatar可以生成带头像的标签"]}}),e(n,{get data(){return c.tag_type}})]}})}}),e(a,{id:"tag_theme",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(a,{dir:"h",get children(){return[e(r,{children:"default tag"}),e(r,{theme:"primary",children:"PRIMARY"}),e(r,{theme:"danger",children:"中文"}),e(r,{theme:"warning",children:"warning"}),e(r,{theme:"success",children:"success"}),e(r,{theme:"info",children:"Info"}),e(r,{theme:"magenta",children:"magenta"}),e(r,{theme:"red",children:"red"}),e(r,{theme:"volcano",children:"volcano"}),e(r,{theme:"orange",children:"orange"})]}}),e(a,{get children(){return[e(r,{theme:"gold",children:"gold"}),e(r,{theme:"yellow",children:"yellow"}),e(r,{theme:"lime",children:"lime"}),e(r,{theme:"green",children:"green"}),e(r,{theme:"cyan",children:"cyan"}),e(r,{theme:"blue",children:"blue"}),e(r,{theme:"geekblue",children:"geekblue"}),e(r,{theme:"purple",children:"purple"})]}})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"内置样式"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["通过设置theme选取内置样式 ",e(t,{code:!0,children:"primary"})," ",e(t,{code:!0,children:"danger"})," ",e(t,{code:!0,children:"warning"}),e(t,{code:!0,children:"success"})," ",e(t,{code:!0,children:"info"})," ",e(t,{code:!0,children:"magenta"}),e(t,{code:!0,children:"red"})," ",e(t,{code:!0,children:"volcano"})," ",e(t,{code:!0,children:"orange"}),e(t,{code:!0,children:"gold"})," ",e(t,{code:!0,children:"yellow"})," ",e(t,{code:!0,children:"lime"}),e(t,{code:!0,children:"green"})," ",e(t,{code:!0,children:"cyan"})," ",e(t,{code:!0,children:"blue"}),e(t,{code:!0,children:"geekblue"})," ",e(t,{code:!0,children:"purple"})]}}),e(n,{get data(){return c.tag_theme}})]}})}}),e(a,{id:"tag_closeable",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{closable:!0,children:"标签一"}),e(r,{value:10,closable:!0,children:"Value"}),e(r,{theme:"primary",circle:!0,closable:!0,children:"Circle"}),e(r,{theme:"primary",closable:!0,get avatar(){return e(v,{children:"U"})},children:"Avatar"})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"可关闭"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置closable属性可以关闭标签"}),e(n,{get data(){return c.tag_closeable}})]}})}}),e(a,{id:"tag_size",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{size:"large",children:"标签一"}),e(r,{theme:"primary",children:"标签二"})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"尺寸"})}}),e(d,{type:"secondary",spacing:"extended",children:"size属性支持large"}),e(n,{get data(){return c.tag_size}})]}})}}),e(a,{id:"tag_control",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{theme:"primary",closable:!0,visible:[E,T],children:"标签一"}),e(F,{size:"small",onClick:()=>{T(!E())},children:"关闭/显示"})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"可控标签"})}}),e(d,{type:"secondary",spacing:"extended",children:"closable为true的情况下，visible支持显示状态可控"}),e(n,{get data(){return c.tag_control}})]}})}}),e(a,{id:"tag_group",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return e(a,{dir:"v",get children(){return[(()=>{const l=m();return l.style.setProperty("background-color","var(--cui-color-fill-0)"),l.style.setProperty("padding","5px"),g(l,e(h,{data:[{id:"1",title:"标签一"},{id:"2",title:"标签二"}]})),l})(),(()=>{const l=m();return l.style.setProperty("background-color","var(--cui-color-fill-0)"),l.style.setProperty("padding","5px"),g(l,e(h,{size:"large",data:[{id:"1",title:"标签一"},{id:"2",title:"标签二"}]})),l})(),(()=>{const l=m();return l.style.setProperty("background-color","var(--cui-color-fill-0)"),l.style.setProperty("padding","5px"),g(l,e(h,{data:[{id:"1",title:"标签一"},{id:"2",title:"标签二"},{id:"3",title:"标签三"},{id:"4",title:"标签四"}],closable:!0,max:2})),l})()]}})}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"标签组"})}}),e(d,{type:"secondary",spacing:"extended",children:"标签组"}),e(n,{get data(){return c.tag_group}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(o,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(o,{type:"primary",heading:4,children:"Tag Props"}),e(b,{columns:C,data:$,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(o,{type:"primary",heading:4,children:"Tag Events"}),e(b,{columns:x,data:I,border:!0,size:"small"})]}})]}})]}})),s})(),e(_,{data:G})]}export{Q as default};
