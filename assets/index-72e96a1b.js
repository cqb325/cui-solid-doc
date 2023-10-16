import{c as C,u as f,i as v,a as e,S as r,aK as t,T as d,P as c,aL as b,B as E,d as q,t as h}from"./index-380e038c.js";import{T as g}from"./Title-c09746a1.js";import{C as u}from"./index-c58932b7.js";import{h as _}from"./hljs-37d3e333.js";import{D as s,a as l,C as w}from"./code-ca2ce82c.js";import{I as F}from"./index-138195b5.js";import{p as B}from"./columns-cd2d5c33.js";import"./index-859eb939.js";import"./index-1e7dd28f.js";import"./index-b6e082a5.js";import"./index-eb54a7d0.js";import"./index-56f45df8.js";const S=`const [src, setSrc] = createSignal('https://www.baidu.com');

<Space dir="v" inline>
    <div>
        <QRCode value={src()} />
    </div>
    <Input value={[src, setSrc]} />
</Space>`,R=`import img from '../../../assets/images/logo.svg';

const [src, setSrc] = createSignal('https://www.baidu.com');

<QRCode icon={img} value={src()} />`,A=`const [src, setSrc] = createSignal('https://www.baidu.com');

<Space dir="h">
    <QRCode value={src()} color="rgb(37,119,47)"/>
    <QRCode value={src()} color="#1890ff" bgColor="#ededed"/>
</Space>`,D=`<Space dir="h">
<QRCode value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" level="L"/>
<QRCode value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" level="M"/>
<QRCode value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" level="Q"/>
<QRCode value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" level="H"/>
</Space>`,Q=`let qrcode: any;
const [src, setSrc] = createSignal('https://www.baidu.com');

<QRCode value={src()} ref={qrcode}/>
<Button type="primary" onClick={() => {
    qrcode.download();
}}>下载</Button>`,x=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"level",desc:"二维码纠错等级 L | M | Q | H",type:"string",default:""},{name:"value",desc:"扫描后的文本",type:"string",default:""},{name:"size",desc:"二维码大小",type:"number",default:"128"},{name:"color",desc:"二维码颜色",type:"string",default:"#000"},{name:"bgColor",desc:"二维码背景颜色",type:"string",default:"#fff"},{name:"icon",desc:"二维码图标",type:"string",default:""},{name:"title",desc:"二维码标题",type:"string",default:""}],j=[{id:"qrcode_base",text:"基础用法"},{id:"qrcode_img",text:"带图标"},{id:"qrcode_color",text:"自定义颜色"},{id:"qrcode_level",text:"自定义颜色"},{id:"qrcode_download",text:"下载"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],i={qrcode_base:S,qrcode_img:R,qrcode_color:A,qrcode_level:D,qrcode_download:Q},P=h("<div>"),K=h('<div class="sys-ctx-main-left">');function U(){let n;const[o,y]=C("https://www.baidu.com");return[(()=>{const p=K();return f(_,p,()=>""),v(p,e(r,{dir:"v",size:32,get children(){return[e(g,{heading:2,children:"QRCode 二维码"}),e(r,{id:"qrcode_base",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"v",inline:!0,get children(){return[(()=>{const a=P();return v(a,e(t,{get value(){return o()}})),a})(),e(F,{value:[o,y]})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(c,{type:"secondary",spacing:"extended",children:"基础用法 。"}),e(l,{get data(){return i.qrcode_base}})]}})}}),e(r,{id:"qrcode_img",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(t,{icon:b,get value(){return o()}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"带图标"})}}),e(c,{type:"secondary",spacing:"extended",children:"使用icon 可以让二维码带图标 。"}),e(l,{get data(){return i.qrcode_img}})]}})}}),e(r,{id:"qrcode_color",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(t,{get value(){return o()},color:"rgb(37,119,47)"}),e(t,{get value(){return o()},color:"#1890ff",bgColor:"#ededed"})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"自定义颜色"})}}),e(c,{type:"secondary",spacing:"extended",children:"使用 color 可以自定义二维码颜色，bgColor 可以修改背景颜色 。"}),e(l,{get data(){return i.qrcode_color}})]}})}}),e(r,{id:"qrcode_level",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(t,{value:"https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg",level:"L"}),e(t,{value:"https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg",level:"M"}),e(t,{value:"https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg",level:"Q"}),e(t,{value:"https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg",level:"H"})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"纠错比例"})}}),e(c,{type:"secondary",spacing:"extended",children:"通过设置 level 调整不同的容错等级。"}),e(l,{get data(){return i.qrcode_level}})]}})}}),e(r,{id:"qrcode_download",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(t,{get value(){return o()},ref(a){const m=n;typeof m=="function"?m(a):n=a}}),e(E,{type:"primary",onClick:()=>{n.download()},children:"下载"}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"纠错比例"})}}),e(c,{type:"secondary",spacing:"extended",children:"通过设置 level 调整不同的容错等级。"}),e(l,{get data(){return i.qrcode_download}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(g,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(g,{type:"primary",heading:4,children:"QRCode Props"}),e(q,{columns:B,data:x,border:!0,size:"small"})]}})]}})]}})),p})(),e(w,{data:j})]}export{U as default};
