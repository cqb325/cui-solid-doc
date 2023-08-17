import{O as A,aW as $,e as D,j as S,t as E,aX as z,u as F,k as P,s as U,l as j,c as I,i as R,a as e,S as n,B as d,T as f,P as C,d as T}from"./index-6b593c43.js";import{C as y}from"./index-92015a99.js";import{T as p}from"./Title-4bfa7384.js";import{h as V}from"./hljs-409c3200.js";import{D as g,a as h,C as L}from"./code-5b64fce7.js";import{I as w}from"./index-cd471b78.js";import{p as G}from"./columns-cd2d5c33.js";import"./index-2804a7f3.js";import"./index-4879218f.js";import"./index-fff67a2b.js";import"./index-5bcd4766.js";import"./index-453afb1a.js";const O=E("<span>");function v(t){const i=t.start??0;let c,u;A(()=>{u=new z(c,t.value,{startVal:i,duration:t.duration??2,decimalPlaces:t.decimal??0,useGrouping:t.useGrouping??!0,useEasing:t.useEasing??!0,separator:t.separator??",",formattingFn:t.formattingFn,prefix:t.prefix??"",suffix:t.suffix??"",onCompleteCallback:o}),u.error?console.error(u.error):a()}),$(()=>{u=null});const o=()=>{t.onEnd&&t.onEnd()},a=()=>{u&&u.start()},r=s=>{u&&u.update(s)},_=()=>{u&&u.pauseResume()};D(()=>{r(t.value)}),t.ref&&t.ref({reset:()=>{u&&u.reset()},update:r,start:a,pauseResume:_});const x=()=>j(t,"cm-count-up");return(()=>{const s=O(),m=c;return typeof m=="function"?F(m,s):c=s,S(l=>{const b=x(),k=t.style;return l._v$=P(s,b,l._v$),l._v$2=U(s,k,l._v$2),l},{_v$:void 0,_v$2:void 0}),s})()}const M=`let countup: any;
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
</Space>`,W=`let countup: any;
<CountUp value={2000} style={{"font-size": "32px"}} ref={countup2} duration={4} decimal={2}/>
<Space dir="h">
    <Button onClick={() => {
        countup.reset();
        countup.start();
    }}>重新开始</Button>
</Space>
`,X=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"value",desc:"目标值",type:"number",default:""},{name:"start",desc:"起始值",type:"number",default:"0"},{name:"duration",desc:"持续时间单位秒",type:"number",default:"2"},{name:"decimal",desc:"小数点小数位数",type:"number",default:""},{name:"useGrouping",desc:"使用组",type:"boolean",default:"true"},{name:"useEasing",desc:"ease 动画",type:"boolean",default:"true"},{name:"separator",desc:"分隔符",type:"string",default:","},{name:"formattingFn",desc:"自定义格式函数",type:"Function",default:""},{name:"prefix",desc:"前缀",type:"string",default:""},{name:"suffix",desc:"后缀",type:"string",default:""},{name:"onEnd",desc:"结束回调",type:"Function",default:""}],q=[{id:"countup_base",text:"基础用法"},{id:"countup_decimal",text:"小数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],B={countup_base:M,countup_decimal:W},H=E('<div class="sys-ctx-main-left">');function se(){let t,i;const[c,u]=I(2e3);return[(()=>{const o=H();return F(V,o,()=>""),R(o,e(n,{dir:"v",size:32,get children(){return[e(p,{heading:2,children:"CountUp 数字动画"}),e(n,{id:"countup_base",dir:"v",get children(){return e(y,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(v,{value:2e3,style:{"font-size":"32px"},ref(a){const r=t;typeof r=="function"?r(a):t=a},duration:6}),e(n,{dir:"h",get children(){return[e(d,{onClick:()=>{t.pauseResume()},children:"暂停/继续"}),e(d,{onClick:()=>{t.reset()},children:"重置"}),e(d,{onClick:()=>{t.start()},children:"开始"}),e(d,{onClick:()=>{t.update(c())},children:"更新至："}),e(w,{style:{width:"100px"},value:[c,u]})]}})]}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"基础用法"})}}),e(C,{type:"secondary",spacing:"extended",children:"该组件基于 countup.js 封装，可以自由控制数字动画过程。"}),e(h,{get data(){return B.countup_base}})]}})}}),e(n,{id:"countup_decimal",dir:"v",get children(){return e(y,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(v,{value:2e3,style:{"font-size":"32px"},ref(a){const r=i;typeof r=="function"?r(a):i=a},duration:4,decimal:2}),e(n,{dir:"h",get children(){return e(d,{onClick:()=>{i.reset(),i.start()},children:"重新开始"})}})]}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"小数"})}}),e(C,{type:"secondary",spacing:"extended",children:"设置属性 decimal 指定小数位数。"}),e(h,{get data(){return B.countup_decimal}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(p,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"CountUp Props"}),e(T,{columns:G,data:X,border:!0,size:"small"})]}})]}})]}})),o})(),e(L,{data:q})]}export{se as default};
