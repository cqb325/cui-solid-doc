import{c,u as m,i as a,a as e,S as r,T as u,t as i}from"./index-0b3654ac.js";import{C as h}from"./Collapase-02b786ca.js";import{C as g,B as y}from"./index-d0333dca.js";import{T as n}from"./Title-3c943f91.js";import{D as C,a as _,C as f}from"./code-442d7b0b.js";import{P as v}from"./Paragraph-c3d75a98.js";import{T as p,p as b,e as x}from"./columns-42b6d002.js";import{h as D}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const T=`const [open, setOpen] = createSignal(true);

<Button onClick={() => {
    setOpen(!open());
}} type='primary'>Toggle</Button>
<div>
    <Collapase open={open()}>
        <ul>
            <li>充分认识学习宣传贯彻党的二十大精神的重大意义。</li>
            <li>全面准确学习领会党的二十大精神。</li>
            <li>认真做好党的二十大精神的学习宣传。</li>
            <li>坚持知行合一，贯彻落实好党的二十大作出的重大决策部署。</li>
            <li>切实加强组织领导。</li>
        </ul>
    </Collapase>
</div>`,$=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"open",desc:"控制打开状态",type:"Function[]",default:""},{name:"onOpen",desc:"打开回调",type:"Function",default:""},{name:"onEnd",desc:"动画结束回调",type:"Function",default:""}],O=[{name:"onOpen",desc:"打开收缩事件",params:"height"},{name:"onEnd",desc:"动画结束事件",params:"status"}],P=[{id:"collapse_base",text:"基础用法"},{id:"comp_api",text:"API"},{id:"comp_props",text:"折叠属性"},{id:"comp_events",text:"折叠事件"}],A={collapse_base:T},E=i("<ul><li>充分认识学习宣传贯彻党的二十大精神的重大意义。</li><li>全面准确学习领会党的二十大精神。</li><li>认真做好党的二十大精神的学习宣传。</li><li>坚持知行合一，贯彻落实好党的二十大作出的重大决策部署。</li><li>切实加强组织领导。"),z=i("<div><div>"),B=i('<div id="comp_api">'),F=i('<div class="sys-ctx-main-left">');function J(){const[s,d]=c(!0);return[(()=>{const l=F();return m(D,l,()=>""),a(l,e(r,{dir:"v",size:32,get children(){return[e(n,{heading:2,children:"Collapase 折叠"}),e(r,{id:"collapse_base",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[(()=>{const t=z(),o=t.firstChild;return t.style.setProperty("height","150px"),a(t,e(y,{onClick:()=>{d(!s())},type:"primary",children:"Toggle"}),o),a(o,e(h,{get open(){return s()},get children(){return E()}})),t})(),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"基础用法"})}}),e(v,{type:"secondary",spacing:"extended",children:"控制折叠"}),e(_,{get data(){return A.collapse_base}})]}})}}),(()=>{const t=B();return a(t,e(r,{dir:"v",size:24,get children(){return[e(n,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Collapase Props"}),e(p,{columns:b,data:$,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Collapase Events"}),e(p,{columns:x,data:O,border:!0,size:"small"})]}})]}})),t})()]}})),l})(),e(f,{data:P})]}export{J as default};
