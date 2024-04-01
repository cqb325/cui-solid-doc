import{i as B,a as e,h as f,g as x,t as m,j as _,s as v,k as D,u as k,S as a,T as d,I as P}from"./index-5e251d81.js";import{T as E}from"./Title-52a6bda3.js";import{C as s}from"./index-dff86af7.js";import{D as l,a as g,T as I,p as T,C as W}from"./code-c71fa51e.js";import{P as i}from"./Paragraph-a25cb645.js";import{h as L}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const j=m("<sup>"),O=m('<sup class="cm-badge-dot">'),F=m("<span>"),M=m('<span class="cm-badge-status-text">');function R(r){if(r&&(r.startsWith("#")||r.startsWith("rgb")||r.startsWith("hsl"))){const b=new Option().style;return b.color=r,b.color.startsWith("rgb")}return!1}function t(r){const b=r.overflowCount??99,$=()=>D(r,"cm-badge",{"cm-badge-status":r.status}),C=()=>{const o={};return r.offset&&r.offset.length===2&&(o["margin-top"]=`${r.offset[0]}px`,o["margin-right"]=`${r.offset[1]}px`),o},w=()=>r.count&&r.count>b?Math.min(b,r.count)+"+":r.count,A=()=>({"cm-badge-status-dot":!0,[`cm-badge-status-${r.status}`]:!!r.status,[`cm-badge-status-${r.color}`]:!!r.color&&r.color.indexOf("#")===-1}),S=()=>({"background-color":R(r.color)?r.color:""}),z=()=>({"cm-badge-count":!0,[`cm-badge-count-${r.type}`]:!!r.type});return(()=>{const o=F();return B(o,()=>r.children,null),B(o,e(x,{get when(){return!r.status&&!r.color},get fallback(){return[(()=>{const n=F();return f(u=>{const p=A(),y=S();return u._v$3=_(n,p,u._v$3),u._v$4=v(n,y,u._v$4),u},{_v$3:void 0,_v$4:void 0}),n})(),(()=>{const n=M();return B(n,()=>r.text),n})()]},get children(){return[e(x,{get when(){return r.count!==void 0||r.text!==void 0},get children(){const n=j();return B(n,w,null),B(n,()=>r.text,null),f(u=>{const p=z(),y=C();return u._v$=_(n,p,u._v$),u._v$2=v(n,y,u._v$2),u},{_v$:void 0,_v$2:void 0}),n}}),e(x,{get when(){return r.dot!==void 0},get children(){const n=O();return f(u=>v(n,C(),u)),n}})]}}),null),f(n=>_(o,$(),n)),o})()}const q=`<Space dir="h">
    <Badge count={3}>
        <a href="#" class="demo-badge"></a>
    </Badge>
</Space>`,G=`<Space dir="h" size={24}>
    <Badge dot>
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge dot>
        <Icon name="bell1" size={26}></Icon>
    </Badge>
    <Badge dot>
        <a href="#">可以是一个链接</a>
    </Badge>
</Space>`,H=`<Space dir="h" size={24}>
    <Badge count={100}>
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count={1000} overflowCount={999}>
        <a href="#" class="demo-badge"></a>
    </Badge>
</Space>`,J=`<Space dir="h" size={50}>
    <Badge count={10} />
    <Badge count={10} class="demo-badge-alone"/>
</Space>`,K=`<Space dir="h" size={50}>
    <Badge text="new">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge text="hot">
        <a href="#" class="demo-badge"></a>
    </Badge>
</Space>`,N=`<Space dir="v">
    <Space dir="h">
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
    </Space>

    <Space dir="v">
        <Badge status="success" text='Success'/>
        <Badge status="error" text='Error'/>
        <Badge status="default" text='Default'/>
        <Badge status="processing" text='Processing'/>
        <Badge status="warning" text='Warning'/>
    </Space>
</Space>`,Q=`<Space dir="v">
    <Badge color="blue" text="blue" />
    <Badge color="green" text="green" />
    <Badge color="red" text="red" />
    <Badge color="yellow" text="yellow" />
    <Badge color="pink" text="pink" />
    <Badge color="magenta" text="magenta" />
    <Badge color="volcano" text="volcano" />
    <Badge color="orange" text="orange" />
    <Badge color="gold" text="gold" />
    <Badge color="lime" text="lime" />
    <Badge color="cyan" text="cyan" />
    <Badge color="geekblue" text="geekblue" />
    <Badge color="purple" text="purple" />
    <Badge color="#2db7f5" text="#2db7f5" />
    <Badge color="#f50" text="#f50" />
</Space>`,U=`<Space dir="h" size={24}>
    <Badge count={5} type="primary">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count={5} type="success">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count={5} type="normal">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count={5} type="info">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count={5} type="error">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count={5} type="warning">
        <a href="#" class="demo-badge"></a>
    </Badge>
</Space>`,V=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"count",desc:"徽标内显示的数量",type:"number",default:""},{name:"dot",desc:"小圆点徽标",type:"boolean",default:""},{name:"overflowCount",desc:"上限数量,超出显示overflowCount+",type:"number",default:""},{name:"text",desc:"自定义内容",type:"string",default:""},{name:"status",desc:"状态徽标success|error|processing|warning|default",type:"string",default:""},{name:"color",desc:"圆点徽标的颜色 blue|green|red|yellow|pink|magenta|volcano|orange|gold|lime|cyan|geekblue|purple，自定义颜色",type:"string",default:""},{name:"type",desc:"不通类型显示不同颜色 primary|success|normal|info|error|warning",type:"string",default:""}],X=[{id:"badge_base",text:"基础用法"},{id:"badge_dot",text:"小红点"},{id:"badge_overcount",text:"封顶数字"},{id:"badge_alone",text:"独立使用"},{id:"badge_text",text:"自定义内容"},{id:"badge_status",text:"状态点"},{id:"badge_color",text:"多彩徽标"},{id:"badge_type",text:"预设颜色"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],h={badge_base:q,badge_dot:G,badge_overcount:H,badge_alone:J,badge_text:K,badge_status:N,badge_color:Q,badge_type:U},c=m('<a href="#" class="demo-badge">'),Y=m('<a href="#">可以是一个链接'),Z=m('<div class="sys-ctx-main-left">');function ce(){return[(()=>{const r=Z();return k(L,r,()=>""),B(r,e(a,{dir:"v",size:32,get children(){return[e(E,{heading:2,children:"Badge 徽标"}),e(a,{id:"badge_base",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return e(t,{count:3,get children(){return c()}})}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(i,{type:"secondary",spacing:"extended",children:"最简单的使用方法。"}),e(g,{get data(){return h.badge_base}})]}})}}),e(a,{id:"badge_dot",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"h",size:24,get children(){return[e(t,{dot:!0,get children(){return c()}}),e(t,{dot:!0,get children(){return e(P,{name:"bell1",size:26})}}),e(t,{dot:!0,get children(){return Y()}})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"小红点"})}}),e(i,{type:"secondary",spacing:"extended",children:"小红点徽标"}),e(g,{get data(){return h.badge_dot}})]}})}}),e(a,{id:"badge_overcount",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"h",size:24,get children(){return[e(t,{count:100,get children(){return c()}}),e(t,{count:1e3,overflowCount:999,get children(){return c()}})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"封顶数字"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["通过设置 ",e(d,{code:!0,children:"overflowCount"})," 属性设置一个封顶值，当超过时，会显示","${overflowCount}","+"]}}),e(g,{get data(){return h.badge_overcount}})]}})}}),e(a,{id:"badge_alone",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"h",size:50,get children(){return[e(t,{count:10}),e(t,{count:10,class:"demo-badge-alone"})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"独立使用及自定义样式"})}}),e(i,{type:"secondary",spacing:"extended",children:"独立使用及自定义样式"}),e(g,{get data(){return h.badge_alone}})]}})}}),e(a,{id:"badge_text",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"h",size:50,get children(){return[e(t,{text:"new",get children(){return c()}}),e(t,{text:"hot",get children(){return c()}})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"自定义内容"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(d,{code:!0,children:"text"})," 属性，可以自定义显示内容。"]}}),e(g,{get data(){return h.badge_text}})]}})}}),e(a,{id:"badge_status",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(a,{dir:"h",get children(){return[e(t,{status:"success"}),e(t,{status:"error"}),e(t,{status:"default"}),e(t,{status:"processing"}),e(t,{status:"warning"})]}}),e(a,{dir:"v",get children(){return[e(t,{status:"success",text:"Success"}),e(t,{status:"error",text:"Error"}),e(t,{status:"default",text:"Default"}),e(t,{status:"processing",text:"Processing"}),e(t,{status:"warning",text:"Warning"})]}})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"状态点"})}}),e(i,{type:"secondary",spacing:"extended",children:"用于表示状态的小圆点。"}),e(g,{get data(){return h.badge_status}})]}})}}),e(a,{id:"badge_color",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(t,{color:"blue",text:"blue"}),e(t,{color:"green",text:"green"}),e(t,{color:"red",text:"red"}),e(t,{color:"yellow",text:"yellow"}),e(t,{color:"pink",text:"pink"}),e(t,{color:"magenta",text:"magenta"}),e(t,{color:"volcano",text:"volcano"}),e(t,{color:"orange",text:"orange"}),e(t,{color:"gold",text:"gold"}),e(t,{color:"lime",text:"lime"}),e(t,{color:"cyan",text:"cyan"}),e(t,{color:"geekblue",text:"geekblue"}),e(t,{color:"purple",text:"purple"}),e(t,{color:"#2db7f5",text:"#2db7f5"}),e(t,{color:"#f50",text:"#f50"})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"多彩徽标"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["属性 ",e(d,{code:!0,children:"color"})," 可以设置更多预设的状态点颜色，或者自定义颜色。"]}}),e(g,{get data(){return h.badge_color}})]}})}}),e(a,{id:"badge_type",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(a,{dir:"h",size:24,get children(){return[e(t,{count:5,type:"primary",get children(){return c()}}),e(t,{count:5,type:"success",get children(){return c()}}),e(t,{count:5,type:"normal",get children(){return c()}}),e(t,{count:5,type:"info",get children(){return c()}}),e(t,{count:5,type:"error",get children(){return c()}}),e(t,{count:5,type:"warning",get children(){return c()}})]}}),e(l,{align:"left",get children(){return e(d,{type:"primary",children:"预设颜色"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["使用 ",e(d,{code:!0,children:"type"})," 属性，可以设置不同的颜色。"]}}),e(g,{get data(){return h.badge_type}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(E,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(E,{type:"primary",heading:4,children:"Badge Props"}),e(I,{columns:T,data:V,border:!0,size:"small"})]}})]}})]}})),r})(),e(W,{data:X})]}export{ce as default};
