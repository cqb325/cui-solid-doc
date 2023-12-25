import{u as g,i as f,a as e,S as t,T as i,t as y}from"./index-39ed6b74.js";import{C as n}from"./index-f8aef721.js";import{m as h,D as a,a as d,C as b}from"./code-a8f5f1bb.js";import{I as w}from"./index-e36d94cf.js";import{S as r}from"./index-7ca18dac.js";import{m as _}from"./index-bb98c1ab.js";import{T as p,p as C,e as v}from"./columns-f7fa8682.js";import{P as s}from"./Paragraph-97fd5b1c.js";import{T as u}from"./Title-9180e6b0.js";import{h as F}from"./hljs-74a5c6d1.js";import"./index-c924219d.js";import"./createField-e888742b.js";import"./index-2cbe569a.js";import"./input-e76ec5b2.js";import"./index-e7586049.js";import"./index-18e0fa76.js";import"./Value-b4958db5.js";import"./index-28e8bdb4.js";import"./index-b36dd4e6.js";import"./index-f415fd0a.js";import"./Collapase-6a7dbf01.js";import"./index-582f7fb8.js";import"./dayjs.min-ea173184.js";import"./_commonjsHelpers-725317a4.js";import"./index-38020051.js";import"./index-52350584.js";import"./index-3eebae07.js";import"./index-f3ec7496.js";const S=`<Input type='switch' onChange={(v: boolean) => {
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
</Space>`,A=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"checked",desc:"默认是否开启",type:"any",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"size",desc:"尺寸大小  small、large",type:"string",default:""},{name:"loading",desc:"加载中状态，不可切换",type:"boolean",default:""},{name:"labels",desc:"开关的文案",type:"string[]",default:""},{name:"onBeforeChange",desc:"阻止操作钩子， 参数 v：boolean",type:"Function",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],O=[{name:"onChange",desc:"值改变事件",params:"value"}],P=[{id:"switch_base",text:"基础用法"},{id:"switch_disabled",text:"禁用"},{id:"switch_size",text:"尺寸"},{id:"switch_loading",text:"加载中"},{id:"switch_label",text:"文字和值"},{id:"switch_before",text:"阻止切换"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],c={switch_base:S,switch_disabled:x,switch_size:z,switch_loading:D,switch_label:E,switch_before:B},k=y('<div class="sys-ctx-main-left">');function ce(){return[(()=>{const o=k();return g(F,o,()=>""),f(o,e(t,{dir:"v",size:32,get children(){return[e(u,{heading:2,children:"Switch 开关"}),e(t,{id:"switch_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(w,{type:"switch",onChange:l=>{h.info({content:"状态改变:"+l,duration:1})}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"基础用法"})}}),e(s,{type:"secondary",spacing:"extended",children:"基础用法"}),e(d,{get data(){return c.switch_base}})]}})}}),e(t,{id:"switch_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{disabled:!0}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"禁用"})}}),e(s,{type:"secondary",spacing:"extended",children:"disabled 进行禁用"}),e(d,{get data(){return c.switch_disabled}})]}})}}),e(t,{id:"switch_size",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(r,{size:"large"}),e(r,{}),e(r,{size:"small"})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"尺寸"})}}),e(s,{type:"secondary",spacing:"extended",children:"size 支持 large 和 small"}),e(d,{get data(){return c.switch_size}})]}})}}),e(t,{id:"switch_loading",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(r,{size:"large",loading:!0}),e(r,{loading:!0,checked:!0}),e(r,{size:"small",loading:!0})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"加载中"})}}),e(s,{type:"secondary",spacing:"extended",children:"loading 为加载中状态，不可切换"}),e(d,{get data(){return c.switch_loading}})]}})}}),e(t,{id:"switch_label",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(r,{labels:["开","关"]}),e(r,{labels:["ON","OFF"],values:[1,0],onChange:l=>{h.info({content:"值:"+l,duration:1})}})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"文字和值"})}}),e(s,{type:"secondary",spacing:"extended",children:"labels 传入数组 修改文案， values 数组修改值"}),e(d,{get data(){return c.switch_label}})]}})}}),e(t,{id:"switch_before",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return e(r,{onBeforeChange:l=>new Promise(m=>{_.info({title:"提示",content:"确认进行切换？",onOk:()=>{m(!0)}})})})}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"阻止切换"})}}),e(s,{type:"secondary",spacing:"extended",children:"onBeforeChange 可以在切换之前判断是否需要切换， 返回 false 阻止切换"}),e(d,{get data(){return c.switch_before}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(u,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"Rate Props"}),e(p,{columns:C,data:A,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"Events"}),e(p,{columns:v,data:O,border:!0,size:"small"})]}})]}})]}})),o})(),e(b,{data:P})]}export{ce as default};
