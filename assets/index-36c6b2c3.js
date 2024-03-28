import{c,u as m,i as r,a as e,S as a,B as u,T as h,t as i}from"./index-69f0698f.js";import{C as g}from"./Collapase-56fdf1ff.js";import{C as y}from"./index-295b9dac.js";import{T as n}from"./Title-48407536.js";import{D as C,a as _,T as p,p as v,e as f,C as b}from"./code-0a2ad5d4.js";import{P as x}from"./Paragraph-6df96914.js";import{h as D}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const T=`const [open, setOpen] = createSignal(true);

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
</div>`,$=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"open",desc:"控制打开状态",type:"Function[]",default:""},{name:"onOpen",desc:"打开回调",type:"Function",default:""},{name:"onEnd",desc:"动画结束回调",type:"Function",default:""}],O=[{name:"onOpen",desc:"打开收缩事件",params:"height"},{name:"onEnd",desc:"动画结束事件",params:"status"}],P=[{id:"collapse_base",text:"基础用法"},{id:"comp_api",text:"API"},{id:"comp_props",text:"折叠属性"},{id:"comp_events",text:"折叠事件"}],A={collapse_base:T},E=i("<ul><li>充分认识学习宣传贯彻党的二十大精神的重大意义。</li><li>全面准确学习领会党的二十大精神。</li><li>认真做好党的二十大精神的学习宣传。</li><li>坚持知行合一，贯彻落实好党的二十大作出的重大决策部署。</li><li>切实加强组织领导。"),z=i("<div><div>"),B=i('<div id="comp_api">'),F=i('<div class="sys-ctx-main-left">');function H(){const[s,d]=c(!0);return[(()=>{const l=F();return m(D,l,()=>""),r(l,e(a,{dir:"v",size:32,get children(){return[e(n,{heading:2,children:"Collapase 折叠"}),e(a,{id:"collapse_base",dir:"v",get children(){return e(y,{bordered:!0,get children(){return[(()=>{const t=z(),o=t.firstChild;return t.style.setProperty("height","150px"),r(t,e(u,{onClick:()=>{d(!s())},type:"primary",children:"Toggle"}),o),r(o,e(g,{get open(){return s()},get children(){return E()}})),t})(),e(C,{align:"left",get children(){return e(h,{type:"primary",children:"基础用法"})}}),e(x,{type:"secondary",spacing:"extended",children:"控制折叠"}),e(_,{get data(){return A.collapse_base}})]}})}}),(()=>{const t=B();return r(t,e(a,{dir:"v",size:24,get children(){return[e(n,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Collapase Props"}),e(p,{columns:v,data:$,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Collapase Events"}),e(p,{columns:f,data:O,border:!0,size:"small"})]}})]}})),t})()]}})),l})(),e(b,{data:P})]}export{H as default};
