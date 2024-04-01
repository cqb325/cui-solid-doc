import{w as A,L as $,d as D,h as S,t as E,u as F,j as z,s as P,k as T,c as U,i as j,a as e,S as n,B as d,T as f}from"./index-5e251d81.js";import{C}from"./index-dff86af7.js";import{T as p}from"./Title-52a6bda3.js";import{h as I}from"./hljs-74a5c6d1.js";import{D as y,a as g,T as L,p as R,C as V}from"./code-c71fa51e.js";import{i as w}from"./countUp.min-350bca8d.js";import{I as G}from"./index-992cf3bd.js";import{P as h}from"./Paragraph-a25cb645.js";import"./_commonjsHelpers-725317a4.js";import"./index-2a737952.js";import"./createField-7b35bf70.js";import"./index-04bec966.js";import"./input-0366c6fe.js";import"./index-b603bca5.js";import"./index-bfe6ab9e.js";import"./index-abcb3dc5.js";import"./index-111f9a6c.js";import"./Item-eac954af.js";import"./index-c1fbac61.js";import"./EmptyOption-a97df827.js";import"./Value-bf1a2078.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";import"./index-2134e8e2.js";import"./Collapase-bfad3ffa.js";import"./Option-72426df3.js";import"./index-50b8f727.js";import"./Recommend-9274b6f4.js";import"./dayjs.min-ea173184.js";import"./index-7e2e5a37.js";import"./index-97f12a81.js";import"./index-11ac00f5.js";import"./index-c458963f.js";const O=E("<span>");function v(t){const o=t.start??0;let s,u;A(()=>{u=new w(s,t.value,{startVal:o,duration:t.duration??2,decimalPlaces:t.decimal??0,useGrouping:t.useGrouping??!0,useEasing:t.useEasing??!0,separator:t.separator??",",formattingFn:t.formattingFn,prefix:t.prefix??"",suffix:t.suffix??"",onCompleteCallback:c}),u.error?console.error(u.error):r()}),$(()=>{u=null});const c=()=>{t.onEnd&&t.onEnd()},r=()=>{u&&u.start()},a=i=>{u&&u.update(i)},_=()=>{u&&u.pauseResume()};D(()=>{a(t.value)}),t.ref&&t.ref({reset:()=>{u&&u.reset()},update:a,start:r,pauseResume:_});const x=()=>T(t,"cm-count-up");return(()=>{const i=O(),m=s;return typeof m=="function"?F(m,i):s=i,S(l=>{const b=x(),k=t.style;return l._v$=z(i,b,l._v$),l._v$2=P(i,k,l._v$2),l},{_v$:void 0,_v$2:void 0}),i})()}const M=`let countup: any;
const [value, setValue] = createSignal(2000);

<Space dir="v">
    <CountUp value={2000} style={{"font-size": "32px"}} ref={countup} duration={6}/>
    <Space dir="h">
        <Button onClick={() => {
            countup.pauseResume();
        }}>暂停/继续</Button>
        <Button onClick={() => {
            countup.reset();
        }}>重置</Button>
        <Button onClick={() => {
            countup.start();
        }}>开始</Button>
        <Button onClick={() => {
            countup.update(value());
        }}>更新至：</Button>
        <Input style={{width: '100px'}} value={[value, setValue]}/>
    </Space>
</Space>`,q=`let countup: any;
<CountUp value={2000} style={{"font-size": "32px"}} ref={countup2} duration={4} decimal={2}/>
<Space dir="h">
    <Button onClick={() => {
        countup.reset();
        countup.start();
    }}>重新开始</Button>
</Space>
`,H=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"value",desc:"目标值",type:"number",default:""},{name:"start",desc:"起始值",type:"number",default:"0"},{name:"duration",desc:"持续时间单位秒",type:"number",default:"2"},{name:"decimal",desc:"小数点小数位数",type:"number",default:""},{name:"useGrouping",desc:"使用组",type:"boolean",default:"true"},{name:"useEasing",desc:"ease 动画",type:"boolean",default:"true"},{name:"separator",desc:"分隔符",type:"string",default:","},{name:"formattingFn",desc:"自定义格式函数",type:"Function",default:""},{name:"prefix",desc:"前缀",type:"string",default:""},{name:"suffix",desc:"后缀",type:"string",default:""},{name:"onEnd",desc:"结束回调",type:"Function",default:""}],J=[{id:"countup_base",text:"基础用法"},{id:"countup_decimal",text:"小数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],B={countup_base:M,countup_decimal:q},K=E('<div class="sys-ctx-main-left">');function Ae(){let t,o;const[s,u]=U(2e3);return[(()=>{const c=K();return F(I,c,()=>""),j(c,e(n,{dir:"v",size:32,get children(){return[e(p,{heading:2,children:"CountUp 数字动画"}),e(n,{id:"countup_base",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(v,{value:2e3,style:{"font-size":"32px"},ref(r){const a=t;typeof a=="function"?a(r):t=r},duration:6}),e(n,{dir:"h",get children(){return[e(d,{onClick:()=>{t.pauseResume()},children:"暂停/继续"}),e(d,{onClick:()=>{t.reset()},children:"重置"}),e(d,{onClick:()=>{t.start()},children:"开始"}),e(d,{onClick:()=>{t.update(s())},children:"更新至："}),e(G,{style:{width:"100px"},value:[s,u]})]}})]}}),e(y,{align:"left",get children(){return e(f,{type:"primary",children:"基础用法"})}}),e(h,{type:"secondary",spacing:"extended",children:"该组件基于 countup.js 封装，可以自由控制数字动画过程。"}),e(g,{get data(){return B.countup_base}})]}})}}),e(n,{id:"countup_decimal",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(v,{value:2e3,style:{"font-size":"32px"},ref(r){const a=o;typeof a=="function"?a(r):o=r},duration:4,decimal:2}),e(n,{dir:"h",get children(){return e(d,{onClick:()=>{o.reset(),o.start()},children:"重新开始"})}})]}}),e(y,{align:"left",get children(){return e(f,{type:"primary",children:"小数"})}}),e(h,{type:"secondary",spacing:"extended",children:"设置属性 decimal 指定小数位数。"}),e(g,{get data(){return B.countup_decimal}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(p,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"CountUp Props"}),e(L,{columns:R,data:H,border:!0,size:"small"})]}})]}})]}})),c})(),e(V,{data:J})]}export{Ae as default};
