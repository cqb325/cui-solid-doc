import{c as ee,d as te,i as l,a as e,A as J,g as $,F as ne,C as ae,h as re,t as h,j as ie,s as ue,k as se,E as k,u as ge,S as o,T as u}from"./index-5e251d81.js";import{S as ce}from"./index-c1fbac61.js";import{I as j}from"./input-0366c6fe.js";import{P as L,a as O,b as N}from"./PageItem-841382e7.js";import{O as le}from"./Option-70feb815.js";import{T as B}from"./Title-52a6bda3.js";import{C as f}from"./index-dff86af7.js";import{D as C,a as P,T as M,p as oe,e as de,C as pe}from"./code-c71fa51e.js";import{P as E}from"./Paragraph-a25cb645.js";import{h as he}from"./hljs-74a5c6d1.js";import"./EmptyOption-a97df827.js";import"./Value-bf1a2078.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";import"./createField-7b35bf70.js";import"./index-b603bca5.js";import"./_commonjsHelpers-725317a4.js";const R=h('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'),me=h('<ul class="cm-pagination-num-list"><span class="cm-pagination-mini-pages">/ '),ze=h('<span class="cm-pagination-text mr-5">共<!>条'),Se=h('<ul class="cm-pagination-num-list">'),fe=h('<span class="cm-pagination-sizer">'),Ce=h('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'),Pe=h("<div>"),V=[{value:10,label:"10条/页"},{value:20,label:"20条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}];function F(n){const d=()=>se(n,"cm-pagination",{[`cm-pagination-${n.shape}`]:n.shape,[`cm-pagination-${n.size}`]:n.size}),r=()=>n.current,p=()=>n.total??0,m=()=>n.pageSize??10,a=n.innerNear??2,z=n.startEndShowNum??2,q=n.showNums??!0,G=n.showTotal??!0,H=n.pages??V,K=n.showJumper??!0,Q=n.showPage??!0,[x,b]=ee(r());te(()=>{r()!=x()&&b(r())});const T=()=>{r()>1&&y(r()-1)},D=()=>{r()<S()&&y(r()+1)},I=i=>{y(parseInt(i,10))},S=()=>p()===0?1:Math.floor((p()-1)/m())+1,U=i=>typeof i=="number"&&i>=1,y=i=>{let t=i;U(t)&&t!==r()&&(t>S()&&(t=S()),b(t),n.onChange&&n.onChange(t,m()))},W=i=>{const t=Math.floor((p()-1)/i)+1;n.onChangePageSize&&n.onChangePageSize(i),r()>t&&(b(1),n.onChange&&n.onChange(1,m()))};function X(){const i=S(),t=r()>z+a+1?r()-a:z+1,s=r()+a+z>=i?i-z:r()+a;return{start:t,end:s}}function Y(){if(!q)return null;const i=S(),t=[],s=X(),c=r();for(let g=1;g<=z;g++){const A=c===g;t.push(e(N,{active:A,get onClick(){return y.bind(null,g)},currentIndex:g}))}c>z+a+1&&t.push(R());let v=s.start;const Z=s.end;for(;v<=Z;v++){const g=c===v;t.push(e(N,{get onClick(){return y.bind(null,v)},currentIndex:v,active:g}))}c+a+z<i&&t.push(R());for(let g=i-z+1;g<=i;g++){const A=c===g;t.push(e(N,{active:A,get onClick(){return y.bind(null,g)},currentIndex:g}))}return t}return(()=>{const i=Pe();return l(i,e(ae,{get children(){return[e(J,{get when(){return n.mini},get children(){const t=me(),s=t.firstChild;return s.firstChild,l(t,e(L,{current:r,onClick:T}),s),l(t,e(j,{get style(){return{width:n.size==="small"?"35px":"50px"}},class:"mr-5",value:[x,b],get size(){return n.size},onChange:I}),s),l(s,S,null),l(t,e(O,{current:r,onClick:D,get disabled(){return r()===S()}}),null),t}}),e(J,{get when(){return!n.mini},get children(){return[e($,{when:G,get children(){const t=ze(),s=t.firstChild,c=s.nextSibling;return c.nextSibling,l(t,p,c),t}}),(()=>{const t=Se();return l(t,e(L,{current:r,onClick:T}),null),l(t,Y,null),l(t,e(O,{current:r,onClick:D,get disabled(){return r()===S()}}),null),t})(),e($,{when:Q,get children(){const t=fe();return l(t,e(ce,{get value(){return m()},get size(){return n.size},onChange:W,data:H,get children(){return e(ne,{each:V,children:s=>e(le,{get label(){return s.label},get value(){return s.value}})})}})),t}}),e($,{when:K,get children(){const t=Ce(),s=t.firstChild,c=s.nextSibling;return l(t,e(j,{get style(){return{width:n.size==="small"?"35px":"50px"}},class:"mr-5",value:[x,b],get size(){return n.size},onChange:I}),c),t}})]}})]}})),re(t=>{const s=d(),c=n.style;return t._v$=ie(i,s,t._v$),t._v$2=ue(i,c,t._v$2),t},{_v$:void 0,_v$2:void 0}),i})()}const Ee=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,Fe=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination size='small' current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,_e=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} showTotal={false} showPage={false} showJumper={false} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,ye=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination mini size='small' current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,be=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} showTotal={false} showPage={false} showJumper={false} 
pageSize={page2.pageSize} total={1000} showNums={false} onChange={(page: number) => {
    setPage2('current', page);
}}/>`,ve=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} shape='circle' pageSize={page2.pageSize} total={1000} onChange={(page) => {
    setPage2('current', page);
}} onChangePageSize={(size: number) => {
    setPage2('pageSize', size);
}}/>`,we=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} pages={[
    {value: 10, label: '10条/页'},
    {value: 50, label: '50条/页'},
    {value: 100, label: '100条/页'}
]}  pageSize={page2.pageSize} total={1000} onChange={(page) => {
    setPage2('current', page);
}} onChangePageSize={(size: number) => {
    setPage2('pageSize', size);
}}/>`,Be=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"shape",desc:"可以选择 normal|circle",type:"string",default:"normal"},{name:"size",desc:"分页尺寸 small|large",type:"string",default:""},{name:"current",desc:"当前页",type:"number",default:""},{name:"total",desc:"总数据量",type:"number",default:""},{name:"pageSize",desc:"每页数据量",type:"number",default:""},{name:"pages",desc:"每页数据量选项",type:"Array",default:""},{name:"mini",desc:"最小化只有跳转和总页数和前一页后一页",type:"Boolean",default:""},{name:"innerNear",desc:"中间当前页的前后页数",type:"number",default:"2"},{name:"startEndShowNum",desc:"前后最少显示的页数",type:"number",default:"2"},{name:"showJumper",desc:"是否显示跳转",type:"boolean",default:"true"},{name:"showPage",desc:"是否显示页数选择",type:"boolean",default:"true"},{name:"showTotal",desc:"是否显示总数",type:"boolean",default:"true"},{name:"showNums",desc:"是否显示页号",type:"boolean",default:"true"},{name:"onChange",desc:"页号选择事件",type:"Function",default:""},{name:"onChangePageSize",desc:"每页数量变化事件",type:"Function",default:""}],xe=[{name:"onChange",desc:"页号选择事件",params:"pageNum"},{name:"onChangePageSize",desc:"每页数量变化事件",params:"pageSize"}],Ae=[{id:"pagination_base",text:"基础用法"},{id:"pagination_small",text:"尺寸"},{id:"pagination_hide",text:"数字分页"},{id:"pagination_min",text:"最小化分页"},{id:"pagination_circle",text:"圆形"},{id:"pagination_pages",text:"每页数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],_={pagination_base:Ee,pagination_small:Fe,pagination_hide:_e,pagination_min:be,pagination_mini:ye,pagination_circle:ve,pagination_pages:we},w=h("<br>"),$e=h('<div class="sys-ctx-main-left">');function Ue(){const[n,d]=k({current:1,pageSize:10}),[r,p]=k({current:1,pageSize:10});return[(()=>{const m=$e();return ge(he,m,()=>""),l(m,e(o,{dir:"v",size:32,get children(){return[e(B,{heading:2,children:"Pagination 分页"}),e(o,{id:"pagination_base",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"基础用法"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["基础用法，当前页 ",e(u,{code:!0,children:"current"})," 为控制属性"]}}),e(P,{get data(){return _.pagination_base}})]}})}}),e(o,{id:"pagination_small",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{size:"small",get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"尺寸"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["小尺寸分页组件， 设置 ",e(u,{code:!0,children:"size"})," 为 ",e(u,{code:!0,children:"small"})]}}),e(P,{get data(){return _.pagination_small}})]}})}}),e(o,{id:"pagination_mini",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{mini:!0,size:"small",get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"迷你型"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(u,{code:!0,children:"mini"})," 属性可以设置迷你型分页"]}}),e(P,{get data(){return _.pagination_mini}})]}})}}),e(o,{id:"pagination_hide",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{get current(){return n.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"数字分页"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(u,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(u,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(u,{code:!0,children:"showJumper"})," 为false"]}}),e(P,{get data(){return _.pagination_hide}})]}})}}),e(o,{id:"pagination_min",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{get current(){return r.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return r.pageSize},total:1e3,showNums:!1,onChange:a=>{p("current",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"最小化分页"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(u,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(u,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(u,{code:!0,children:"showJumper"})," 为false ",w(),"数字可通过设置 ",e(u,{code:!0,children:"showNums"})," 为false"]}}),e(P,{get data(){return _.pagination_min}})]}})}}),e(o,{id:"pagination_circle",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{get current(){return r.current},shape:"circle",get pageSize(){return r.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"圆形"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(u,{code:!0,children:"shape='circle'"})," 可渲染圆形按钮的分页"]}}),e(P,{get data(){return _.pagination_circle}})]}})}}),e(o,{id:"pagination_pages",dir:"v",get children(){return e(f,{bordered:!0,get children(){return[e(F,{get current(){return r.current},pages:[{value:10,label:"10条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}],get pageSize(){return r.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"每页数"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["可通过 ",e(u,{code:!0,children:"pages"})," 属性自定义 每页的数据量"]}}),e(P,{get data(){return _.pagination_pages}})]}})}}),e(o,{dir:"v",size:24,id:"comp_api",get children(){return[e(B,{type:"primary",heading:3,children:"API"}),e(o,{id:"comp_props",dir:"v",get children(){return[e(B,{type:"primary",heading:4,children:"Pagination Props"}),e(M,{columns:oe,data:Be,border:!0,size:"small"})]}}),e(o,{id:"comp_events",dir:"v",get children(){return[e(B,{type:"primary",heading:4,children:"Pagination Events"}),e(M,{columns:de,data:xe,border:!0,size:"small"})]}})]}})]}})),m})(),e(pe,{data:Ae})]}export{Ue as default};
