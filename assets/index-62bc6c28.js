import{o as I,a as e,i,f as d,I as w,g as z,n as D,t as l,h as k,j as T,u as j,S as a,T as f}from"./index-452b01fb.js";import{h as q}from"./hljs-74a5c6d1.js";import{D as g,a as h,C as N}from"./code-6c1bd720.js";import{T as C,p as L,e as K}from"./columns-64ff655e.js";import{T as u}from"./Title-92e03596.js";import{C as b,B as E}from"./index-0b64bc6d.js";import{P as v}from"./Paragraph-cb384130.js";import{u as J,S as X}from"./Slot-e6c6ab22.js";import"./_commonjsHelpers-725317a4.js";const U=`<Space dir="v">
    <Banner type="info">
        <div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。</div>
    </Banner>
    <Banner type="warning">
        <div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。</div>
    </Banner>
    <Banner type="success">
        <div>安装成功： 软件安装成功，已是最新版本。</div>
    </Banner>
    <Banner type="error">
        <div>尚未安装插件，该功能还无法使用</div>
    </Banner>
</Space>`,O=`<Space dir="v" style={{width: '650px'}}>
    <Banner type="info" fullMode={false} bordered icon={null} closeIcon={null}
        title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
        <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
    </Banner>
    <Banner type="warning" fullMode={false} bordered icon={null} closeIcon={null}
        title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
        <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
    </Banner>
    <Banner type="success" fullMode={false} bordered icon={null} closeIcon={null}
        title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
        <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
    </Banner>
    <Banner type="error" fullMode={false} bordered icon={null} closeIcon={null}
        title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
        <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
    </Banner>
</Space>`,R=`<Space dir="v" style={{width: '450px'}}>
    <Banner
        fullMode={false}
        title="Title"
        type="warning"
        bordered
    >
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
        <Slot name="extra">
            <div style={{margin: '16px 0', "text-align": 'right'}}>
                <Space justify="end">
                    <Button type="text">No, thanks.</Button>
                    <Button type="warning">Sounds great!</Button>
                </Space>
            </div>
        </Slot>
    </Banner>
</Space>
`,V=[{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"type",desc:"样式类型 warning|info|success|error",type:"string",default:"info"},{name:"bordered",desc:"显示border",type:"boolean",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"icon",desc:"可自定义图标",type:"JSXElement",default:""},{name:"closeIcon",desc:"关闭的icon",type:"JSXElement",default:""},{name:"fullMode",desc:"全屏模式",type:"boolean",default:"true"},{name:"visible",desc:"控制显示",type:"Function[]",default:""},{name:"onClose",desc:"关闭时回调",type:"Function",default:""}],G=[{name:"onClose",desc:"关闭时回调",params:""}],H=[{id:"banner_base",text:"基础用法"},{id:"banner_fullmode",text:"非全屏模式"},{id:"banner_custom",text:"自定义内容"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],x={banner_base:U,banner_fullmode:O,banner_custom:R},Q=l('<div class="cm-banner-icon">'),W=l('<div class="cm-banner-title">'),Y=l('<div class="cm-banner-desc">'),Z=l('<span class="cm-banner-close">'),ee=l('<div class="cm-banner-extra">'),te=l('<div><div class="cm-banner-body"><div class="cm-banner-content"><div class="cm-banner-content-body">');function s(n){const[t,F]=I(n,"visible",!0),P=()=>T(n,"cm-banner",{[`cm-banner-${n.type}`]:n.type,["cm-banner-bordered"]:n.bordered,["cm-banner-full"]:n.fullMode??!0,["cm-banner-not-full"]:n.fullMode===!1}),S=()=>{let o="";switch(n.type){case"info":{o="info";break}case"success":{o="check-circle";break}case"warning":{o="alert-circle";break}case"error":{o="x-circle";break}default:o="info"}return e(w,{name:o,size:20})},M=()=>{F(!1),n.onClose&&n.onClose()},c=J(n.children),_=n.icon===null?null:n.icon??S();return e(d,{get when(){return t()},get children(){const o=te(),B=o.firstChild,$=B.firstChild,y=$.firstChild;return i($,e(d,{when:_,get children(){const r=Q();return i(r,_),r}}),y),i(y,e(d,{get when(){return n.title},get children(){const r=W();return i(r,()=>n.title),r}}),null),i(y,e(d,{get when(){return c.default},get children(){const r=Y();return i(r,()=>c.default),r}}),null),i(B,e(d,{get when(){return n.closeIcon!==null},get children(){const r=Z();return r.$$click=M,i(r,()=>n.closeIcon??e(w,{name:"x"})),r}}),null),i(o,e(d,{get when(){return c.extra},get children(){const r=ee();return i(r,()=>c.extra),r}}),null),z(r=>k(o,P(),r)),o}})}D(["click"]);const A=l("<div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。"),ne=l("<div>安装成功： 软件安装成功，已是最新版本。"),re=l("<div>尚未安装插件，该功能还无法使用"),p=l("<div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。"),le=l("<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),ie=l("<div>"),oe=l('<div class="sys-ctx-main-left">'),m=l("<div>不知道 AppKey？");function ge(){return[(()=>{const n=oe();return j(q,n,()=>""),i(n,e(a,{dir:"v",size:32,get children(){return[e(u,{heading:2,children:"Banner 通知横幅"}),e(a,{id:"banner_base",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(s,{type:"info",get children(){return A()}}),e(s,{type:"warning",get children(){return A()}}),e(s,{type:"success",get children(){return ne()}}),e(s,{type:"error",get children(){return re()}})]}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"基本用法"})}}),e(v,{type:"secondary",spacing:"extended",children:"基本用法,支持4种类型：info、warning、error、success。默认为 info。"}),e(h,{get data(){return x.banner_base}})]}})}}),e(a,{id:"banner_fullmode",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(a,{dir:"v",style:{width:"650px"},get children(){return[e(s,{type:"info",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=m();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return p()}}),e(s,{type:"warning",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=m();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return p()}}),e(s,{type:"success",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=m();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return p()}}),e(s,{type:"error",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=m();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return p()}})]}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"非全屏模式"})}}),e(v,{type:"secondary",spacing:"extended",get children(){return["可以设置 fullMode=",!1," 使用非全屏模式的 banner 样式。 通过 bordered 属性可以设置边框。"]}}),e(h,{get data(){return x.banner_fullmode}})]}})}}),e(a,{id:"banner_custom",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(a,{dir:"v",style:{width:"450px"},get children(){return e(s,{fullMode:!1,title:"Title",type:"warning",bordered:!0,get children(){return[le(),e(X,{name:"extra",get children(){const t=ie();return t.style.setProperty("margin","16px 0"),t.style.setProperty("text-align","right"),i(t,e(a,{justify:"end",get children(){return[e(E,{type:"text",children:"No, thanks."}),e(E,{type:"warning",children:"Sounds great!"})]}})),t}})]}})}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"自定义内容"})}}),e(v,{type:"secondary",spacing:"extended",children:'通过指定Slot name="extra" 指定额外内容'}),e(h,{get data(){return x.banner_custom}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(u,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"Banner Props"}),e(C,{columns:L,data:V,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"Events"}),e(C,{columns:K,data:G,border:!0,size:"small"})]}})]}})]}})),n})(),e(N,{data:H})]}export{ge as default};
