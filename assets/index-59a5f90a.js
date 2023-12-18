import{d as D,i,a as t,m as $,F as T,e as w,f as U,g as j,t as o,h as R,j as B,u as M,S as s,T as l}from"./index-0246dc72.js";import{A as r}from"./index-c8466fd9.js";import{T as O,D as g,a as h,C as k}from"./code-558518d5.js";import{C as v}from"./index-f479a69a.js";import{T as f,p as A}from"./columns-43b26f11.js";import{P as y}from"./Paragraph-7a7dff1a.js";import{T as u}from"./Title-b2de7444.js";import{h as I}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const P=o('<div class="cm-avatar-list-item">'),N=o("<div>");function b(e){const E=()=>B(e,"cm-avatar-list",{[`cm-avatar-list-${e.size}`]:e.size}),c=()=>e.max??Number.MAX_VALUE,z=D(()=>e.children),m=()=>z.toArray(),d=()=>m().length;return(()=>{const n=N();return i(n,t(T,{get each(){return m()},children:(a,S)=>{if(a.asProps=!1,S()<c())return(()=>{const p=P();return i(p,t(O,{get align(){return e.align||"top"},get content(){return a.title},get children(){return t(r,$(a,{get size(){return e.size}}))}})),p})()}}),null),i(n,t(U,{get when(){return d()>c()},get children(){const a=P();return i(a,t(r,{get size(){return e.size},get style(){return e.excessStyle},get children(){return["+",w(()=>d()-c())]}})),a}}),null),j(a=>R(n,E(),a)),n})()}const V=`import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

<Space dir="h" align="center">
    <AvatarList>
        <Avatar asProps title='头像1' src={img1}/>
        <Avatar asProps title='头像2' src={img2}/>
        <Avatar asProps title='头像3' src={img3}/>
        <Avatar asProps title='头像4' src={img4}/>
    </AvatarList>
</Space>`,X=`import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

<Space dir="h" align="center">
    <AvatarList max={3} excessStyle={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>
        <Avatar asProps title='头像1' src={img1}/>
        <Avatar asProps title='头像2' src={img2}/>
        <Avatar asProps title='头像3' src={img3}/>
        <Avatar asProps title='头像4' src={img4}/>
    </AvatarList>
</Space>`,q=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"size",desc:"头像大小,small|large|数字",type:"number|string",default:""},{name:"max",desc:"最大显示数",type:"number",default:"Number.MAX_VALUE"},{name:"excessStyle",desc:"超过数目显示样式",type:"Object",default:""}],G=[{name:"name",desc:"数据项名称",type:"string",default:""},{name:"src/icon",desc:"头像图片地址/头像图标",type:"string",default:""}],H=[{id:"avatar_base",text:"头像尺寸"},{id:"avatar_max",text:"最大显示数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"头像属性"}],x={avatar_max:X,avatar_base:V},C=""+new URL("1-4cf76965.png",import.meta.url).href,_=""+new URL("2-36476a8a.png",import.meta.url).href,F=""+new URL("3-45c00e7d.png",import.meta.url).href,L=""+new URL("4-14cb6046.png",import.meta.url).href,J=o('<div class="sys-ctx-main-left">');function st(){return[(()=>{const e=J();return M(I,e,()=>""),i(e,t(s,{dir:"v",size:32,get children(){return[t(u,{heading:2,children:"AvatarList 头像列表"}),t(s,{id:"avatar_base",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(s,{dir:"h",align:"center",get children(){return t(b,{get children(){return[t(r,{asProps:!0,title:"头像1",src:C}),t(r,{asProps:!0,title:"头像2",src:_}),t(r,{asProps:!0,title:"头像3",src:F}),t(r,{asProps:!0,title:"头像4",src:L})]}})}}),t(g,{align:"left",get children(){return t(l,{type:"primary",children:"基础用法"})}}),t(y,{type:"secondary",spacing:"extended",children:"基础用法"}),t(h,{get data(){return x.avatar_base}})]}})}}),t(s,{id:"avatar_max",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(s,{dir:"h",align:"center",get children(){return t(b,{max:3,excessStyle:{"background-color":"rgb(253, 227, 207)",color:"rgb(245, 106, 0)"},get children(){return[t(r,{asProps:!0,title:"头像1",src:C}),t(r,{asProps:!0,title:"头像2",src:_}),t(r,{asProps:!0,title:"头像3",src:F}),t(r,{asProps:!0,title:"头像4",src:L})]}})}}),t(g,{align:"left",get children(){return t(l,{type:"primary",children:"最大显示数"})}}),t(y,{type:"secondary",spacing:"extended",get children(){return["设置属性 ",t(l,{code:!0,children:"max"})," 可以指定最多显示几个头像，超出后会显示额外数目。"]}}),t(h,{get data(){return x.avatar_max}})]}})}}),t(s,{dir:"v",size:24,id:"comp_api",get children(){return[t(u,{type:"primary",heading:3,children:"API"}),t(s,{id:"comp_props",dir:"v",get children(){return[t(u,{type:"primary",heading:4,children:"AvatarList Props"}),t(f,{columns:A,data:q,border:!0,size:"small"})]}}),t(s,{id:"data_props",dir:"v",get children(){return[t(u,{type:"primary",heading:4,children:"data Props"}),t(f,{columns:A,data:G,border:!0,size:"small"})]}})]}})]}})),e})(),t(k,{data:H})]}export{st as default};
