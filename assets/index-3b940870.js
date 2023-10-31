import{u as h,i as m,a as e,S as n,B as o,a9 as i,T as t,P as u,d as p,t as g}from"./index-602cfbf2.js";import{C as d}from"./index-b85a489d.js";import{T as r}from"./Title-c2e5d943.js";import{D as l,a,C as y}from"./code-fa44278e.js";import{p as f,e as C}from"./columns-cd2d5c33.js";import{h as k}from"./hljs-c6aaaaf8.js";const B=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
</Space>`,E=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
    <Button type='success' onClick={() => {
        notice.success({
            title: '提示',
            content: '成功信息',
        });
    }}>成功</Button>
    <Button type='warning' onClick={() => {
        notice.warning({
            title: '告警',
            content: '告警事件2023年3月24日11:40:29',
        });
    }}>告警</Button>
    <Button type='error' onClick={() => {
        notice.error({
            title: '错误',
            content: '事件提交失败',
        });
    }}>错误</Button>
    <Button type='default' onClick={() => {
        notice.help({
            title: '帮助',
            content: 'ls 命令',
        });
    }}>帮助</Button>
</Space>`,F=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'bottomRight'
        });
    }}>右下角</Button>

    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'topLeft'
        });
    }}>左上角</Button>

    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'bottomLeft'
        });
    }}>左下角</Button>
</Space>`,D=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"key",desc:"消息的标识，调用close可根据key进行关闭",type:"string",default:""},{name:"duration",desc:"显示时间，为0时不销毁",type:"number",default:"4"},{name:"dock",desc:"通知弹出的位置 topRight|topLeft|bottomLeft|bottomRight",type:"string",default:"topRight"},{name:"content",desc:"内容",type:"JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"icon",desc:"图标",type:"JSXElement",default:""},{name:"theme",desc:"主题 success|warning|error|info",type:"any",default:""},{name:"btn",desc:"按钮",type:"JSXElement",default:""},{name:"onClose",desc:"关闭回调函数",type:"Function",default:""}],b=[{name:"onClose",desc:"关闭回调函数",params:""}],_=[{id:"notice_base",text:"基础用法"},{id:"notice_type",text:"类型"},{id:"notice_dock",text:"位置"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],s={notice_base:B,notice_type:E,notice_dock:F},A=g('<div class="sys-ctx-main-left">');function P(){return[(()=>{const c=A();return h(k,c,()=>""),m(c,e(n,{dir:"v",size:32,get children(){return[e(r,{heading:2,children:"Notice 通知"}),e(n,{id:"notice_base",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return e(o,{onClick:()=>{i.info({title:"提示",content:"提示内容"})},children:"消息"})}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法，notice 为全局对象"}),e(a,{get data(){return s.notice_base}})]}})}}),e(n,{id:"notice_type",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return[e(o,{onClick:()=>{i.info({title:"提示",content:"提示内容"})},children:"消息"}),e(o,{type:"success",onClick:()=>{i.success({title:"提示",content:"成功信息"})},children:"成功"}),e(o,{type:"warning",onClick:()=>{i.warning({title:"告警",content:"告警事件2023年3月24日11:40:29"})},children:"告警"}),e(o,{type:"error",onClick:()=>{i.error({title:"错误",content:"事件提交失败"})},children:"错误"}),e(o,{type:"default",onClick:()=>{i.help({title:"帮助",content:"ls 命令"})},children:"帮助"})]}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"不同类型的通知"})}}),e(u,{type:"secondary",spacing:"extended",get children(){return["notice 不同的通知 可以使用不通的方法触发，包含 ",e(t,{code:!0,children:"info"}),"、",e(t,{code:!0,children:"success"}),e(t,{code:!0,children:"warning"}),"、",e(t,{code:!0,children:"error"}),"、",e(t,{code:!0,children:"help"})]}}),e(a,{get data(){return s.notice_type}})]}})}}),e(n,{id:"notice_dock",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return[e(o,{onClick:()=>{i.info({title:"提示",content:"提示内容",dock:"bottomRight"})},children:"右下角"}),e(o,{onClick:()=>{i.info({title:"提示",content:"提示内容",dock:"topLeft"})},children:"左上角"}),e(o,{onClick:()=>{i.info({title:"提示",content:"提示内容",dock:"bottomLeft"})},children:"左下角"})]}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"位置"})}}),e(u,{type:"secondary",spacing:"extended",get children(){return["dock 属性定义通知出现的位置， 支持 ",e(t,{code:!0,children:"topRight(默认)"})," ",e(t,{code:!0,children:"bottomRight"}),e(t,{code:!0,children:"topLeft"})," ",e(t,{code:!0,children:"bottomLeft"})]}}),e(a,{get data(){return s.notice_dock}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(r,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Notice Props"}),e(p,{columns:f,data:D,border:!0,size:"small"})]}}),e(n,{id:"comp_events",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Events"}),e(p,{columns:C,data:b,border:!0,size:"small"})]}})]}})]}})),c})(),e(y,{data:_})]}export{P as default};
