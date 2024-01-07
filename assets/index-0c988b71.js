import{n as V,i,a as t,t as p,Z as I,e as Y,F as Z,g as J,w as G,f as k,c as P,J as H,I as T,h as K,s as Q,j as W,u as X,r as tt,_ as et,$ as nt,Y as ot,R as it,S as u,T as l}from"./index-452b01fb.js";import{C as B,B as d}from"./index-0b64bc6d.js";import{T as C}from"./Title-92e03596.js";import{D as E,a as $,C as ct}from"./code-6c1bd720.js";import{P as F}from"./Paragraph-cb384130.js";import{T as N,p as rt,e as lt}from"./columns-64ff655e.js";import{h as st}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const ut=p('<div class="cm-notification-icon">'),at=p('<div class="cm-notification-head">'),dt=p('<span class="cm-notification-btn-wrap">'),mt=p('<div><div class="cm-notification-item-wrap"><a class="cm-notification-close"></a><div class="cm-notification-content"><div class="cm-notification-body">'),ht=p("<div>"),pt=p('<div class="cm-notification">');function ft(n){const[c,r]=P(!1),[s,e]=P(!1);let h;const a=n.data;let{style:_,icon:b,btn:x,theme:w,title:A,content:j}=a;const M=()=>W(n,"cm-notification-item",{"cm-notification-item-width-icon":b,"cm-notification-item-open":c(),"cm-notification-item-close":s(),[`cm-notification-item-${w}`]:w});H(()=>{setTimeout(()=>{r(!0)}),a.duration&&setTimeout(()=>{S()},a.duration*1e3)});const S=()=>{s()||(e(!0),setTimeout(()=>{q()},250))},q=()=>{n.onClose(a.key,a.dock),a.onClose&&a.onClose()};return(()=>{const f=mt(),L=f.firstChild,v=L.firstChild,g=v.nextSibling,R=g.firstChild,z=h;return typeof z=="function"?X(z,f):h=f,v.$$click=S,i(v,t(T,{name:"x",size:16})),i(L,t(k,{when:b,get children(){const o=ut();return i(o,t(T,{name:b})),o}}),g),i(g,t(k,{when:A,get children(){const o=at();return i(o,A),o}}),R),i(R,j),i(g,t(k,{when:x,get children(){const o=dt();return i(o,x),o}}),null),J(o=>{const O=M(),U=_;return o._v$=K(f,O,o._v$),o._v$2=Q(f,U,o._v$2),o},{_v$:void 0,_v$2:void 0}),f})()}function y(n){const c=()=>n.data,r=I();return t(k,{get when(){return Y(()=>!!c())()&&c().length},get children(){const s=ht();return r!=null?s.style.setProperty("z-index",r):s.style.removeProperty("z-index"),i(s,t(Z,{get each(){return c()},children:e=>t(ft,{data:e,get onClose(){return n.onClose}})})),J(()=>G(s,`cm-notification-box cm-notification-${n.docker}`)),s}})}function gt(n){const c=()=>n.data;return(()=>{const r=pt();return i(r,t(y,{get data(){return c().topLeft},docker:"top-left",get onClose(){return n.onClose}}),null),i(r,t(y,{get data(){return c().topRight},docker:"top-right",get onClose(){return n.onClose}}),null),i(r,t(y,{get data(){return c().bottomLeft},docker:"bottom-left",get onClose(){return n.onClose}}),null),i(r,t(y,{get data(){return c().bottomRight},docker:"bottom-right",get onClose(){return n.onClose}}),null),r})()}V(["click"]);function Ct(){const[n,c]=tt({topLeft:[],topRight:[],bottomLeft:[],bottomRight:[]}),r=(e,h)=>{const a=n[h].filter(_=>_.key!==e);c(h,a)},s=et("cm-notice-portal","cm-notices-wrap");return nt(()=>t(gt,{data:n,onClose:r}),s),{open(e){e.dock||(e.dock="topRight"),e.key===void 0&&(e.key=ot()),e.duration===void 0&&(e.duration=4.5),c(e.dock,it(h=>{h.push(e)})),s.style.zIndex=I()},info(e){e.icon="info",e.theme="info",this.open(e)},success(e){e.icon="check-circle",e.theme="success",this.open(e)},warning(e){e.icon="alert-circle",e.theme="warning",this.open(e)},error(e){e.icon="x-circle",e.theme="error",this.open(e)},help(e){e.icon="help-circle",e.theme="info",this.open(e)}}}const m=Ct(),yt=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
</Space>`,kt=`<Space dir="h">
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
</Space>`,_t=`<Space dir="h">
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
</Space>`,bt=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"key",desc:"消息的标识，调用close可根据key进行关闭",type:"string",default:""},{name:"duration",desc:"显示时间，为0时不销毁",type:"number",default:"4"},{name:"dock",desc:"通知弹出的位置 topRight|topLeft|bottomLeft|bottomRight",type:"string",default:"topRight"},{name:"content",desc:"内容",type:"JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"icon",desc:"图标",type:"JSXElement",default:""},{name:"theme",desc:"主题 success|warning|error|info",type:"any",default:""},{name:"btn",desc:"按钮",type:"JSXElement",default:""},{name:"onClose",desc:"关闭回调函数",type:"Function",default:""}],vt=[{name:"onClose",desc:"关闭回调函数",params:""}],Bt=[{id:"notice_base",text:"基础用法"},{id:"notice_type",text:"类型"},{id:"notice_dock",text:"位置"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],D={notice_base:yt,notice_type:kt,notice_dock:_t},Et=p('<div class="sys-ctx-main-left">');function Rt(){return[(()=>{const n=Et();return X(st,n,()=>""),i(n,t(u,{dir:"v",size:32,get children(){return[t(C,{heading:2,children:"Notice 通知"}),t(u,{id:"notice_base",dir:"v",get children(){return t(B,{bordered:!0,get children(){return[t(u,{dir:"h",get children(){return t(d,{onClick:()=>{m.info({title:"提示",content:"提示内容"})},children:"消息"})}}),t(E,{align:"left",get children(){return t(l,{type:"primary",children:"基础用法"})}}),t(F,{type:"secondary",spacing:"extended",children:"基础用法，notice 为全局对象"}),t($,{get data(){return D.notice_base}})]}})}}),t(u,{id:"notice_type",dir:"v",get children(){return t(B,{bordered:!0,get children(){return[t(u,{dir:"h",get children(){return[t(d,{onClick:()=>{m.info({title:"提示",content:"提示内容"})},children:"消息"}),t(d,{type:"success",onClick:()=>{m.success({title:"提示",content:"成功信息"})},children:"成功"}),t(d,{type:"warning",onClick:()=>{m.warning({title:"告警",content:"告警事件2023年3月24日11:40:29"})},children:"告警"}),t(d,{type:"error",onClick:()=>{m.error({title:"错误",content:"事件提交失败"})},children:"错误"}),t(d,{type:"default",onClick:()=>{m.help({title:"帮助",content:"ls 命令"})},children:"帮助"})]}}),t(E,{align:"left",get children(){return t(l,{type:"primary",children:"不同类型的通知"})}}),t(F,{type:"secondary",spacing:"extended",get children(){return["notice 不同的通知 可以使用不通的方法触发，包含 ",t(l,{code:!0,children:"info"}),"、",t(l,{code:!0,children:"success"}),t(l,{code:!0,children:"warning"}),"、",t(l,{code:!0,children:"error"}),"、",t(l,{code:!0,children:"help"})]}}),t($,{get data(){return D.notice_type}})]}})}}),t(u,{id:"notice_dock",dir:"v",get children(){return t(B,{bordered:!0,get children(){return[t(u,{dir:"h",get children(){return[t(d,{onClick:()=>{m.info({title:"提示",content:"提示内容",dock:"bottomRight"})},children:"右下角"}),t(d,{onClick:()=>{m.info({title:"提示",content:"提示内容",dock:"topLeft"})},children:"左上角"}),t(d,{onClick:()=>{m.info({title:"提示",content:"提示内容",dock:"bottomLeft"})},children:"左下角"})]}}),t(E,{align:"left",get children(){return t(l,{type:"primary",children:"位置"})}}),t(F,{type:"secondary",spacing:"extended",get children(){return["dock 属性定义通知出现的位置， 支持 ",t(l,{code:!0,children:"topRight(默认)"})," ",t(l,{code:!0,children:"bottomRight"}),t(l,{code:!0,children:"topLeft"})," ",t(l,{code:!0,children:"bottomLeft"})]}}),t($,{get data(){return D.notice_dock}})]}})}}),t(u,{dir:"v",size:24,id:"comp_api",get children(){return[t(C,{type:"primary",heading:3,children:"API"}),t(u,{id:"comp_props",dir:"v",get children(){return[t(C,{type:"primary",heading:4,children:"Notice Props"}),t(N,{columns:rt,data:bt,border:!0,size:"small"})]}}),t(u,{id:"comp_events",dir:"v",get children(){return[t(C,{type:"primary",heading:4,children:"Events"}),t(N,{columns:lt,data:vt,border:!0,size:"small"})]}})]}})]}})),n})(),t(ct,{data:Bt})]}export{Rt as default};
