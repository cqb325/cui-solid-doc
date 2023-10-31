import{u as y,i as m,a as e,S as t,A as r,I as a,T as n,P as s,s as A,d as p,t as v}from"./index-602cfbf2.js";import{T as i}from"./Title-c2e5d943.js";import{D as c,a as u,C as E}from"./code-fa44278e.js";import{C as o}from"./index-b85a489d.js";import{i as b}from"./avatar-41ce13e3.js";import{p as F,e as f}from"./columns-cd2d5c33.js";import{h as C}from"./hljs-c6aaaaf8.js";const _=`<Space dir="h" align="center">
    <Avatar size='small' icon={<Icon name='settings'/>}></Avatar>
    <Avatar icon={<Icon name='settings'/>}></Avatar>
    <Avatar size='large' icon={<Icon name='settings'/>}></Avatar>
    <Avatar size={48} icon={<Icon name='settings' size={24}/>}></Avatar>
</Space>`,z=`<Space dir="h" align="center">
    <Avatar icon={<Icon name='settings'/>}></Avatar>
    <Avatar shape="square" icon={<Icon name='settings'/>}></Avatar>
</Space>`,B=`
import img from '@/assets/images/avatar.png'

<Space dir="h" align="center">
    <Avatar icon={<Icon name='settings'/>}></Avatar>
    <Avatar>A</Avatar>
    <Avatar>Name</Avatar>
    <Avatar src={img}></Avatar>
    <Avatar style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>U</Avatar>
    <Avatar style={{'background-color': 'rgb(135, 208, 104)'}} icon={<Icon name='settings'/>}></Avatar>
</Space>`,x=`const style = {
    'background-color': 'var(--cui-color-overlay-bg)',
    height: '100%',
    width: '100%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
};

<Space dir="h" align="center">
    <Avatar size={48} icon={<Icon name='settings' size={24}/>} style={{'background-color': 'rgb(242 168 113)', color: 'rgb(245, 106, 0)'}}
    hoverMask={<div style={style}><Icon name="camera"/></div>}></Avatar>
</Space>`,I=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"size",desc:"头像大小,small|large|数字",type:"number|string",default:""},{name:"icon",desc:"图标",type:"Icon",default:""},{name:"src",desc:"图片地址",type:"string",default:""},{name:"shape",desc:"头像形状,circle|square",type:"string",default:"circle"},{name:"hoverMask",desc:"鼠标进入后的遮罩",type:"JSXElement",default:""},{name:"onClick",desc:"点击回调函数",type:"Function",default:""},{name:"onMouseEnter",desc:"鼠标进入回调函数",type:"Function",default:""},{name:"onMouseLeave",desc:"鼠标离开回调函数",type:"Function",default:""}],k=[{id:"avatar_base",text:"头像尺寸"},{id:"avatar_shape",text:"形状"},{id:"avatar_type",text:"类型"},{id:"avatar_hover",text:"遮罩"},{id:"comp_api",text:"API"},{id:"comp_props",text:"头像属性"},{id:"comp_events",text:"事件"}],S=[{name:"onClick",desc:"点击事件",params:"Event"},{name:"onMouseEnter",desc:"鼠标进入回调函数",params:"Event"},{name:"onMouseLeave",desc:"鼠标离开回调函数",params:"Event"}],d={avatar_base:_,avatar_shape:z,avatar_type:B,avatar_hover:x},D=v('<div class="sys-ctx-main-left">'),M=v("<div>");function N(){const h={"background-color":"var(--cui-color-overlay-bg)",height:"100%",width:"100%",display:"flex","align-items":"center","justify-content":"center"};return[(()=>{const l=D();return y(C,l,()=>""),m(l,e(t,{dir:"v",size:32,get children(){return[e(i,{heading:2,children:"Avatar 头像"}),e(t,{id:"avatar_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",align:"center",get children(){return[e(r,{size:"small",get icon(){return e(a,{name:"settings"})}}),e(r,{get icon(){return e(a,{name:"settings"})}}),e(r,{size:"large",get icon(){return e(a,{name:"settings"})}}),e(r,{size:48,get icon(){return e(a,{name:"settings",size:24})}})]}}),e(c,{align:"left",get children(){return e(n,{type:"primary",children:"头像尺寸"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["通过设置 ",e(n,{code:!0,children:"size"})," 可以设置图标大小,small或large"]}}),e(s,{type:"secondary",spacing:"extended",get children(){return[e(n,{code:!0,children:"size"})," 可以为number类型，自定义大小"]}}),e(u,{get data(){return d.avatar_base}})]}})}}),e(t,{id:"avatar_shape",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",align:"center",get children(){return[e(r,{get icon(){return e(a,{name:"settings"})}}),e(r,{shape:"square",get icon(){return e(a,{name:"settings"})}})]}}),e(c,{align:"left",get children(){return e(n,{type:"primary",children:"形状"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["通过设置 ",e(n,{code:!0,children:"shape"})," square为矩形头像"]}}),e(u,{get data(){return d.avatar_shape}})]}})}}),e(t,{id:"avatar_type",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",align:"center",get children(){return[e(r,{get icon(){return e(a,{name:"settings"})}}),e(r,{children:"A"}),e(r,{children:"Name"}),e(r,{src:b}),e(r,{style:{"background-color":"rgb(253, 227, 207)",color:"rgb(245, 106, 0)"},children:"U"}),e(r,{style:{"background-color":"rgb(135, 208, 104)"},get icon(){return e(a,{name:"settings"})}})]}}),e(c,{align:"left",get children(){return e(n,{type:"primary",children:"类型"})}}),e(s,{type:"secondary",spacing:"extended",children:"头像支持文字、图片和图标，可以自定义背景色和文字颜色"}),e(u,{get data(){return d.avatar_type}})]}})}}),e(t,{id:"avatar_hover",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"h",align:"center",get children(){return e(r,{size:48,get icon(){return e(a,{name:"settings",size:24})},style:{"background-color":"rgb(242 168 113)",color:"rgb(245, 106, 0)"},get hoverMask(){return(()=>{const g=M();return A(g,h),m(g,e(a,{name:"camera"})),g})()}})}}),e(c,{align:"left",get children(){return e(n,{type:"primary",children:"遮罩"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["通过设置 ",e(n,{code:!0,children:"hoverMask"})," 可以自定义悬浮遮罩"]}}),e(u,{get data(){return d.avatar_hover}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(i,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Avatar Props"}),e(p,{columns:F,data:I,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Avatar Events"}),e(p,{columns:f,data:S,border:!0,size:"small"})]}})]}})]}})),l})(),e(E,{data:k})]}export{N as default};
