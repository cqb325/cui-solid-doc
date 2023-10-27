import{c,u,i as r,a as e,S as a,B as m,C as h,T as g,P as y,d as p,t as l}from"./index-3a33c8c5.js";import{C}from"./index-2f5e5bd6.js";import{T as n}from"./Title-61428187.js";import{D as _,a as v,C as f}from"./code-55c74af4.js";import{p as b,e as x}from"./columns-cd2d5c33.js";import{h as D}from"./hljs-35357388.js";const $=`const [open, setOpen] = createSignal(true);

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
</div>`,T=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"open",desc:"控制打开状态",type:"Function[]",default:""},{name:"onOpen",desc:"打开回调",type:"Function",default:""},{name:"onEnd",desc:"动画结束回调",type:"Function",default:""}],O=[{name:"onOpen",desc:"打开收缩事件",params:"height"},{name:"onEnd",desc:"动画结束事件",params:"status"}],P=[{id:"collapse_base",text:"基础用法"},{id:"comp_api",text:"API"},{id:"comp_props",text:"折叠属性"},{id:"comp_events",text:"折叠事件"}],A={collapse_base:$},E=l("<ul><li>充分认识学习宣传贯彻党的二十大精神的重大意义。</li><li>全面准确学习领会党的二十大精神。</li><li>认真做好党的二十大精神的学习宣传。</li><li>坚持知行合一，贯彻落实好党的二十大作出的重大决策部署。</li><li>切实加强组织领导。"),z=l("<div><div>"),B=l('<div id="comp_api">'),F=l('<div class="sys-ctx-main-left">');function w(){const[i,d]=c(!0);return[(()=>{const s=F();return u(D,s,()=>""),r(s,e(a,{dir:"v",size:32,get children(){return[e(n,{heading:2,children:"Collapase 折叠"}),e(a,{id:"collapse_base",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[(()=>{const t=z(),o=t.firstChild;return t.style.setProperty("height","150px"),r(t,e(m,{onClick:()=>{d(!i())},type:"primary",children:"Toggle"}),o),r(o,e(h,{get open(){return i()},get children(){return E()}})),t})(),e(_,{align:"left",get children(){return e(g,{type:"primary",children:"基础用法"})}}),e(y,{type:"secondary",spacing:"extended",children:"控制折叠"}),e(v,{get data(){return A.collapse_base}})]}})}}),(()=>{const t=B();return r(t,e(a,{dir:"v",size:24,get children(){return[e(n,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Collapase Props"}),e(p,{columns:b,data:T,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(n,{type:"primary",heading:4,children:"Collapase Events"}),e(p,{columns:x,data:O,border:!0,size:"small"})]}})]}})),t})()]}})),s})(),e(f,{data:P})]}export{w as default};
