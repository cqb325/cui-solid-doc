import{u as g,i as y,a as e,S as t,T as i,t as f}from"./index-5e251d81.js";import{C as n}from"./index-dff86af7.js";import{m as p,D as a,a as d,T as h,p as b,e as w,C as _}from"./code-c71fa51e.js";import{I as C}from"./index-992cf3bd.js";import{S as r}from"./index-bfe6ab9e.js";import{m as v}from"./index-906e8388.js";import{P as s}from"./Paragraph-a25cb645.js";import{T as l}from"./Title-52a6bda3.js";import{h as F}from"./hljs-74a5c6d1.js";import"./index-2a737952.js";import"./createField-7b35bf70.js";import"./index-04bec966.js";import"./input-0366c6fe.js";import"./index-b603bca5.js";import"./index-abcb3dc5.js";import"./index-111f9a6c.js";import"./Item-eac954af.js";import"./index-c1fbac61.js";import"./EmptyOption-a97df827.js";import"./Value-bf1a2078.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";import"./index-2134e8e2.js";import"./Collapase-bfad3ffa.js";import"./Option-72426df3.js";import"./index-50b8f727.js";import"./Recommend-9274b6f4.js";import"./dayjs.min-ea173184.js";import"./_commonjsHelpers-725317a4.js";import"./index-7e2e5a37.js";import"./index-97f12a81.js";import"./index-11ac00f5.js";import"./index-c458963f.js";const S=`<Input type='switch' onChange={(v: boolean) => {
    message.info({
        content: '状态改变:' + v,
        duration: 1
    });
}}/>`,x="<Switch disabled/>",z=`<Space dir="h">
    <Switch size='large'/>
    <Switch />
    <Switch size='small'/>
</Space>`,D=`<Space dir="h">
    <Switch size='large' loading/>
    <Switch loading checked/>
    <Switch size='small' loading/>
</Space>`,E=`<Space dir="h">
    <Switch labels={['开', '关']}/>
    <Switch labels={['ON', 'OFF']} values={[1, 0]} onChange={(v: number) => {
        message.info({
            content: '值:' + v,
            duration: 1
        });
    }}/>
</Space>`,B=`import { modal } from "../../../components/Modal";

<Space dir="h">
    <Switch onBeforeChange={(checked: boolean) => {
        return new Promise((resolve) => {
            modal.info({
                title: '提示',
                content: '确认进行切换？',
                onOk: () => {
                    resolve(true);
                }
            })
        })
    }}/>
</Space>`,A=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"checked",desc:"默认是否开启",type:"any",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"size",desc:"尺寸大小  small、large",type:"string",default:""},{name:"loading",desc:"加载中状态，不可切换",type:"boolean",default:""},{name:"labels",desc:"开关的文案",type:"string[]",default:""},{name:"onBeforeChange",desc:"阻止操作钩子， 参数 v：boolean",type:"Function",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],O=[{name:"onChange",desc:"值改变事件",params:"value"}],P=[{id:"switch_base",text:"基础用法"},{id:"switch_disabled",text:"禁用"},{id:"switch_size",text:"尺寸"},{id:"switch_loading",text:"加载中"},{id:"switch_label",text:"文字和值"},{id:"switch_before",text:"阻止切换"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],c={switch_base:S,switch_disabled:x,switch_size:z,switch_loading:D,switch_label:E,switch_before:B},k=f('<div class="sys-ctx-main-left">');function he(){return[(()=>{const u=k();return g(F,u,()=>""),y(u,e(t,{dir:"v",size:32,get children(){return[e(l,{heading:2,children:"Switch 开关"}),e(t,{id:"switch_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(C,{type:"switch",onChange:o=>{p.info({content:"状态改变:"+o,duration:1})}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"基础用法"})}}),e(s,{type:"secondary",spacing:"extended",children:"基础用法"}),e(d,{get data(){return c.switch_base}})]}})}}),e(t,{id:"switch_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{disabled:!0}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"禁用"})}}),e(s,{type:"secondary",spacing:"extended",children:"disabled 进行禁用"}),e(d,{get data(){return c.switch_disabled}})]}})}}),e(t,{id:"switch_size",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(r,{size:"large"}),e(r,{}),e(r,{size:"small"})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"尺寸"})}}),e(s,{type:"secondary",spacing:"extended",children:"size 支持 large 和 small"}),e(d,{get data(){return c.switch_size}})]}})}}),e(t,{id:"switch_loading",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(r,{size:"large",loading:!0}),e(r,{loading:!0,checked:!0}),e(r,{size:"small",loading:!0})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"加载中"})}}),e(s,{type:"secondary",spacing:"extended",children:"loading 为加载中状态，不可切换"}),e(d,{get data(){return c.switch_loading}})]}})}}),e(t,{id:"switch_label",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(r,{labels:["开","关"]}),e(r,{labels:["ON","OFF"],values:[1,0],onChange:o=>{p.info({content:"值:"+o,duration:1})}})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"文字和值"})}}),e(s,{type:"secondary",spacing:"extended",children:"labels 传入数组 修改文案， values 数组修改值"}),e(d,{get data(){return c.switch_label}})]}})}}),e(t,{id:"switch_before",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return e(r,{onBeforeChange:o=>new Promise(m=>{v.info({title:"提示",content:"确认进行切换？",onOk:()=>{m(!0)}})})})}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"阻止切换"})}}),e(s,{type:"secondary",spacing:"extended",children:"onBeforeChange 可以在切换之前判断是否需要切换， 返回 false 阻止切换"}),e(d,{get data(){return c.switch_before}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(l,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(l,{type:"primary",heading:4,children:"Rate Props"}),e(h,{columns:b,data:A,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(l,{type:"primary",heading:4,children:"Events"}),e(h,{columns:w,data:O,border:!0,size:"small"})]}})]}})]}})),u})(),e(_,{data:P})]}export{he as default};
