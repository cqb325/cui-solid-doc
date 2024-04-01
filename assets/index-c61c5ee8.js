import{e as D,i,a as e,m as $,F as T,f as w,g as U,h as j,t as o,j as R,k,u as B,S as s,T as l}from"./index-5e251d81.js";import{A as r}from"./index-b8f19b5e.js";import{b as M,D as p,a as h,T as v,p as f,C as O}from"./code-c71fa51e.js";import{C as A}from"./index-dff86af7.js";import{P as y}from"./Paragraph-a25cb645.js";import{T as u}from"./Title-52a6bda3.js";import{h as I}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const P=o('<div class="cm-avatar-list-item">'),N=o("<div>");function b(t){const E=()=>k(t,"cm-avatar-list",{[`cm-avatar-list-${t.size}`]:t.size}),c=()=>t.max??Number.MAX_VALUE,z=D(()=>t.children),m=()=>z.toArray(),d=()=>m().length;return(()=>{const n=N();return i(n,e(T,{get each(){return m()},children:(a,S)=>{if(a.asProps=!1,S()<c())return(()=>{const g=P();return i(g,e(M,{get align(){return t.align||"top"},get content(){return a.title},get children(){return e(r,$(a,{get size(){return t.size}}))}})),g})()}}),null),i(n,e(U,{get when(){return d()>c()},get children(){const a=P();return i(a,e(r,{get size(){return t.size},get style(){return t.excessStyle},get children(){return["+",w(()=>d()-c())]}})),a}}),null),j(a=>R(n,E(),a)),n})()}const V=`import img1 from './1.png';
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
</Space>`,q=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"size",desc:"头像大小,small|large|数字",type:"number|string",default:""},{name:"max",desc:"最大显示数",type:"number",default:"Number.MAX_VALUE"},{name:"excessStyle",desc:"超过数目显示样式",type:"Object",default:""}],G=[{name:"name",desc:"数据项名称",type:"string",default:""},{name:"src/icon",desc:"头像图片地址/头像图标",type:"string",default:""}],H=[{id:"avatar_base",text:"头像尺寸"},{id:"avatar_max",text:"最大显示数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"头像属性"}],x={avatar_max:X,avatar_base:V},C=""+new URL("1-4cf76965.png",import.meta.url).href,_=""+new URL("2-36476a8a.png",import.meta.url).href,F=""+new URL("3-45c00e7d.png",import.meta.url).href,L=""+new URL("4-14cb6046.png",import.meta.url).href,J=o('<div class="sys-ctx-main-left">');function ae(){return[(()=>{const t=J();return B(I,t,()=>""),i(t,e(s,{dir:"v",size:32,get children(){return[e(u,{heading:2,children:"AvatarList 头像列表"}),e(s,{id:"avatar_base",dir:"v",get children(){return e(A,{bordered:!0,get children(){return[e(s,{dir:"h",align:"center",get children(){return e(b,{get children(){return[e(r,{asProps:!0,title:"头像1",src:C}),e(r,{asProps:!0,title:"头像2",src:_}),e(r,{asProps:!0,title:"头像3",src:F}),e(r,{asProps:!0,title:"头像4",src:L})]}})}}),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"基础用法"})}}),e(y,{type:"secondary",spacing:"extended",children:"基础用法"}),e(h,{get data(){return x.avatar_base}})]}})}}),e(s,{id:"avatar_max",dir:"v",get children(){return e(A,{bordered:!0,get children(){return[e(s,{dir:"h",align:"center",get children(){return e(b,{max:3,excessStyle:{"background-color":"rgb(253, 227, 207)",color:"rgb(245, 106, 0)"},get children(){return[e(r,{asProps:!0,title:"头像1",src:C}),e(r,{asProps:!0,title:"头像2",src:_}),e(r,{asProps:!0,title:"头像3",src:F}),e(r,{asProps:!0,title:"头像4",src:L})]}})}}),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"最大显示数"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["设置属性 ",e(l,{code:!0,children:"max"})," 可以指定最多显示几个头像，超出后会显示额外数目。"]}}),e(h,{get data(){return x.avatar_max}})]}})}}),e(s,{dir:"v",size:24,id:"comp_api",get children(){return[e(u,{type:"primary",heading:3,children:"API"}),e(s,{id:"comp_props",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"AvatarList Props"}),e(v,{columns:f,data:q,border:!0,size:"small"})]}}),e(s,{id:"data_props",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"data Props"}),e(v,{columns:f,data:G,border:!0,size:"small"})]}})]}})]}})),t})(),e(O,{data:H})]}export{ae as default};
