import{u as b,i as g,a as e,S as r,T as a,B as f,t as o}from"./index-5e251d81.js";import{h as x}from"./hljs-74a5c6d1.js";import{D as s,a as c,T as v,p as B,e as _,C as A}from"./code-c71fa51e.js";import{T as i}from"./Title-52a6bda3.js";import{C as p}from"./index-dff86af7.js";import{P as m}from"./Paragraph-a25cb645.js";import{B as n}from"./index-7cc647cb.js";import{S as F}from"./Slot-fdf990e2.js";import"./_commonjsHelpers-725317a4.js";import"./useSlots-e8273d0f.js";const C=`<Space dir="v">
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
</Space>`,E=`<Space dir="v" style={{width: '650px'}}>
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
</Space>`,P=`<Space dir="v" style={{width: '450px'}}>
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
`,w=[{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"type",desc:"样式类型 warning|info|success|error",type:"string",default:"info"},{name:"bordered",desc:"显示border",type:"boolean",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"icon",desc:"可自定义图标",type:"JSXElement",default:""},{name:"closeIcon",desc:"关闭的icon",type:"JSXElement",default:""},{name:"fullMode",desc:"全屏模式",type:"boolean",default:"true"},{name:"visible",desc:"控制显示",type:"Function[]",default:""},{name:"onClose",desc:"关闭时回调",type:"Function",default:""}],S=[{name:"onClose",desc:"关闭时回调",params:""}],M=[{id:"banner_base",text:"基础用法"},{id:"banner_fullmode",text:"非全屏模式"},{id:"banner_custom",text:"自定义内容"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],y={banner_base:C,banner_fullmode:E,banner_custom:P},h=o("<div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。"),$=o("<div>安装成功： 软件安装成功，已是最新版本。"),z=o("<div>尚未安装插件，该功能还无法使用"),l=o("<div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。"),D=o("<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),I=o("<div>"),q=o('<div class="sys-ctx-main-left">'),d=o("<div>不知道 AppKey？");function G(){return[(()=>{const u=q();return b(x,u,()=>""),g(u,e(r,{dir:"v",size:32,get children(){return[e(i,{heading:2,children:"Banner 通知横幅"}),e(r,{id:"banner_base",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(n,{type:"info",get children(){return h()}}),e(n,{type:"warning",get children(){return h()}}),e(n,{type:"success",get children(){return $()}}),e(n,{type:"error",get children(){return z()}})]}}),e(s,{align:"left",get children(){return e(a,{type:"primary",children:"基本用法"})}}),e(m,{type:"secondary",spacing:"extended",children:"基本用法,支持4种类型：info、warning、error、success。默认为 info。"}),e(c,{get data(){return y.banner_base}})]}})}}),e(r,{id:"banner_fullmode",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",style:{width:"650px"},get children(){return[e(n,{type:"info",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=d();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return l()}}),e(n,{type:"warning",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=d();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return l()}}),e(n,{type:"success",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=d();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return l()}}),e(n,{type:"error",fullMode:!1,bordered:!0,icon:null,closeIcon:null,get title(){return(()=>{const t=d();return t.style.setProperty("font-weight","bold"),t.style.setProperty("color","var(--cui-color-text-0)"),t.style.setProperty("font-size","14px"),t})()},get children(){return l()}})]}}),e(s,{align:"left",get children(){return e(a,{type:"primary",children:"非全屏模式"})}}),e(m,{type:"secondary",spacing:"extended",get children(){return["可以设置 fullMode=",!1," 使用非全屏模式的 banner 样式。 通过 bordered 属性可以设置边框。"]}}),e(c,{get data(){return y.banner_fullmode}})]}})}}),e(r,{id:"banner_custom",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",style:{width:"450px"},get children(){return e(n,{fullMode:!1,title:"Title",type:"warning",bordered:!0,get children(){return[D(),e(F,{name:"extra",get children(){const t=I();return t.style.setProperty("margin","16px 0"),t.style.setProperty("text-align","right"),g(t,e(r,{justify:"end",get children(){return[e(f,{type:"text",children:"No, thanks."}),e(f,{type:"warning",children:"Sounds great!"})]}})),t}})]}})}}),e(s,{align:"left",get children(){return e(a,{type:"primary",children:"自定义内容"})}}),e(m,{type:"secondary",spacing:"extended",children:'通过指定Slot name="extra" 指定额外内容'}),e(c,{get data(){return y.banner_custom}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(i,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Banner Props"}),e(v,{columns:B,data:w,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Events"}),e(v,{columns:_,data:S,border:!0,size:"small"})]}})]}})]}})),u})(),e(A,{data:M})]}export{G as default};
