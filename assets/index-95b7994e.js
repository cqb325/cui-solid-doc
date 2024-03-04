import{u as m,i as y,a as e,S as t,B as n,T as a,t as h,J as k}from"./index-5e0fdc25.js";import{m as r,D as u,a as i,T as g,p as C,e as b,C as f}from"./code-f8e23b11.js";import{T as s}from"./Title-abffd9c9.js";import{C as o}from"./index-7b04ac17.js";import{P as c}from"./Paragraph-3448cd8e.js";import{h as F}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const D=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info('提示信息')
    }}>消息</Button>
    <Button type='primary' onClick={() => {
        message.success('登录成功')
    }}>成功</Button>
    <Button type='primary' onClick={() => {
        message.error('添加错误')
    }}>错误</Button>
    <Button type='primary' onClick={() => {
        message.warning('需要数字类型')
    }}>警告</Button>
</Space>`,B=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info({
            content: '提示信息',
            background: true
        })
    }}>消息</Button>
    <Button type='primary' onClick={() => {
        message.success({
            content: '登录成功',
            background: true
        })
    }}>成功</Button>
    <Button type='primary' onClick={() => {
        message.error({
            content: '添加错误',
            background: true,
        })
    }}>错误</Button>
    <Button type='primary' onClick={() => {
        message.warning({
            content: '需要数字类型',
            background: true,
        })
    }}>警告</Button>
</Space>`,_=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info({
            content: '可关闭message',
            background: true,
            closeable: true,
            duration: 0
        })
    }}>可关闭</Button>
</Space>`,E=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        const key = createUniqueId();
        message.info({
            key,
            content: 'Loading...',
            background: true,
            loading: true,
            duration: 0
        })

        setTimeout(() => {
            message.close(key);
        }, 4000)
    }}>加载</Button>
</Space>`,v=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"key",desc:"消息的标识，调用close可根据key进行关闭",type:"string",default:""},{name:"duration",desc:"显示时间，为0时不销毁",type:"number",default:"4"},{name:"type",desc:"类型 info|success|warning|error",type:"string",default:"info"},{name:"class",desc:"class类",type:"string",default:""},{name:"content",desc:"内容",type:"JSXElement",default:""},{name:"closeable",desc:"可显示关闭按钮",type:"boolean",default:""},{name:"background",desc:"显示背景色",type:"any",default:""},{name:"loading",desc:"加载中",type:"boolean",default:""},{name:"onClose",desc:"关闭回调函数",type:"Function",default:""}],x=[{name:"onClose",desc:"关闭回调函数",params:""}],A=[{id:"message_base",text:"基础用法"},{id:"message_background",text:"背景色"},{id:"message_close",text:"可关闭"},{id:"message_loading",text:"加载中"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],d={message_base:D,message_background:B,message_close:_,message_loading:E},S=h('<div class="sys-ctx-main-left">');function q(){return[(()=>{const l=S();return m(F,l,()=>""),y(l,e(t,{dir:"v",size:32,get children(){return[e(s,{heading:2,children:"Message 消息提示"}),e(t,{id:"message_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(n,{type:"primary",onClick:()=>{r.info("提示信息")},children:"消息"}),e(n,{type:"primary",onClick:()=>{r.success("登录成功")},children:"成功"}),e(n,{type:"primary",onClick:()=>{r.error("添加错误")},children:"错误"}),e(n,{type:"primary",onClick:()=>{r.warning("需要数字类型")},children:"警告"})]}}),e(u,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(c,{type:"secondary",spacing:"extended",children:"基础用法"}),e(i,{get data(){return d.message_base}})]}})}}),e(t,{id:"message_background",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return[e(n,{type:"primary",onClick:()=>{r.info({content:"提示信息",background:!0})},children:"消息"}),e(n,{type:"primary",onClick:()=>{r.success({content:"登录成功",background:!0})},children:"成功"}),e(n,{type:"primary",onClick:()=>{r.error({content:"添加错误",background:!0})},children:"错误"}),e(n,{type:"primary",onClick:()=>{r.warning({content:"需要数字类型",background:!0})},children:"警告"})]}}),e(u,{align:"left",get children(){return e(a,{type:"primary",children:"背景色"})}}),e(c,{type:"secondary",spacing:"extended",children:"配置参数 background 可以显示背景色"}),e(i,{get data(){return d.message_background}})]}})}}),e(t,{id:"message_close",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return e(n,{type:"primary",onClick:()=>{r.info({content:"可关闭message",background:!0,closeable:!0,duration:0})},children:"可关闭"})}}),e(u,{align:"left",get children(){return e(a,{type:"primary",children:"可关闭"})}}),e(c,{type:"secondary",spacing:"extended",children:"配置参数 closeable 可关闭消息"}),e(i,{get data(){return d.message_close}})]}})}}),e(t,{id:"message_loading",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",get children(){return e(n,{type:"primary",onClick:()=>{const p=k();r.info({key:p,content:"Loading...",background:!0,loading:!0,duration:0}),setTimeout(()=>{r.close(p)},4e3)},children:"加载"})}}),e(u,{align:"left",get children(){return e(a,{type:"primary",children:"加载中"})}}),e(c,{type:"secondary",spacing:"extended",children:"配置参数 loading 显示加载中的消息， message可通过key关闭消息"}),e(i,{get data(){return d.message_loading}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(s,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Message Props"}),e(g,{columns:C,data:v,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Events"}),e(g,{columns:b,data:x,border:!0,size:"small"})]}})]}})]}})),l})(),e(f,{data:A})]}export{q as default};
