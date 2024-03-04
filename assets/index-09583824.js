import{c as ee,d as te,i as c,a as e,Q as J,g as A,F as ne,R as ae,h as re,t as h,j as ie,s as ue,k as se,w as k,u as ge,S as o,T as u}from"./index-012dff6d.js";import{S as le}from"./index-58d2b256.js";import{I as j}from"./input-c3514f51.js";import{P as L,a as O,b as N}from"./PageItem-7eba1298.js";import{O as ce}from"./Option-70feb815.js";import{T as B}from"./Title-7bbcb9dc.js";import{C as S}from"./index-e07e4e01.js";import{D as C,a as P,C as oe}from"./code-9a657405.js";import{P as F}from"./Paragraph-690c10ae.js";import{T as M,p as de,e as pe}from"./columns-66bf7541.js";import{h as he}from"./hljs-74a5c6d1.js";import"./EmptyOption-7c47c146.js";import"./Value-32b1f0db.js";import"./index-813dca78.js";import"./index-82006dec.js";import"./createField-0624a138.js";import"./_commonjsHelpers-725317a4.js";const R=h('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'),me=h('<ul class="cm-pagination-num-list"><span class="cm-pagination-mini-pages">/ '),ze=h('<span class="cm-pagination-text mr-5">共<!>条'),fe=h('<ul class="cm-pagination-num-list">'),Se=h('<span class="cm-pagination-sizer">'),Ce=h('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'),Pe=h("<div>"),Q=[{value:10,label:"10条/页"},{value:20,label:"20条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}];function E(n){const d=()=>se(n,"cm-pagination",{[`cm-pagination-${n.shape}`]:n.shape,[`cm-pagination-${n.size}`]:n.size}),r=()=>n.current,p=()=>n.total??0,m=()=>n.pageSize??10,a=n.innerNear??2,z=n.startEndShowNum??2,V=n.showNums??!0,q=n.showTotal??!0,G=n.pages??Q,H=n.showJumper??!0,K=n.showPage??!0,[x,b]=ee(r());te(()=>{r()!=x()&&b(r())});const T=()=>{r()>1&&y(r()-1)},D=()=>{r()<f()&&y(r()+1)},I=i=>{y(parseInt(i,10))},f=()=>p()===0?1:Math.floor((p()-1)/m())+1,U=i=>typeof i=="number"&&i>=1,y=i=>{let t=i;U(t)&&t!==r()&&(t>f()&&(t=f()),b(t),n.onChange&&n.onChange(t,m))},W=i=>{const t=Math.floor((p()-1)/i)+1;n.onChangePageSize&&n.onChangePageSize(i),r()>t&&(b(1),n.onChange&&n.onChange(1,m))};function X(){const i=f(),t=r()>z+a+1?r()-a:z+1,s=r()+a+z>=i?i-z:r()+a;return{start:t,end:s}}function Y(){if(!V)return null;const i=f(),t=[],s=X(),l=r();for(let g=1;g<=z;g++){let $=l===g;t.push(e(N,{active:$,get onClick(){return y.bind(null,g)},currentIndex:g}))}l>z+a+1&&t.push(R());let v=s.start;const Z=s.end;for(;v<=Z;v++){let g=l===v;t.push(e(N,{get onClick(){return y.bind(null,v)},currentIndex:v,active:g}))}l+a+z<i&&t.push(R());for(let g=i-z+1;g<=i;g++){let $=l===g;t.push(e(N,{active:$,get onClick(){return y.bind(null,g)},currentIndex:g}))}return t}return(()=>{const i=Pe();return c(i,e(ae,{get children(){return[e(J,{get when(){return n.mini},get children(){const t=me(),s=t.firstChild;return s.firstChild,c(t,e(L,{current:r,onClick:T}),s),c(t,e(j,{get style(){return{width:n.size==="small"?"35px":"50px"}},class:"mr-5",value:[x,b],get size(){return n.size},onChange:I}),s),c(s,f,null),c(t,e(O,{current:r,onClick:D,get disabled(){return r()===f()}}),null),t}}),e(J,{get when(){return!n.mini},get children(){return[e(A,{when:q,get children(){const t=ze(),s=t.firstChild,l=s.nextSibling;return l.nextSibling,c(t,p,l),t}}),(()=>{const t=fe();return c(t,e(L,{current:r,onClick:T}),null),c(t,Y,null),c(t,e(O,{current:r,onClick:D,get disabled(){return r()===f()}}),null),t})(),e(A,{when:K,get children(){const t=Se();return c(t,e(le,{get value(){return m()},get size(){return n.size},onChange:W,data:G,get children(){return e(ne,{each:Q,children:s=>e(ce,{get label(){return s.label},get value(){return s.value}})})}})),t}}),e(A,{when:H,get children(){const t=Ce(),s=t.firstChild,l=s.nextSibling;return c(t,e(j,{get style(){return{width:n.size==="small"?"35px":"50px"}},class:"mr-5",value:[x,b],get size(){return n.size},onChange:I}),l),t}})]}})]}})),re(t=>{const s=d(),l=n.style;return t._v$=ie(i,s,t._v$),t._v$2=ue(i,l,t._v$2),t},{_v$:void 0,_v$2:void 0}),i})()}const Fe=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,Ee=`const [page1, setPage1] = createStore({
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
}}/>`,Be=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"shape",desc:"可以选择 normal|circle",type:"string",default:"normal"},{name:"size",desc:"分页尺寸 small|large",type:"string",default:""},{name:"current",desc:"当前页",type:"number",default:""},{name:"total",desc:"总数据量",type:"number",default:""},{name:"pageSize",desc:"每页数据量",type:"number",default:""},{name:"pages",desc:"每页数据量选项",type:"Array",default:""},{name:"mini",desc:"最小化只有跳转和总页数和前一页后一页",type:"Boolean",default:""},{name:"innerNear",desc:"中间当前页的前后页数",type:"number",default:"2"},{name:"startEndShowNum",desc:"前后最少显示的页数",type:"number",default:"2"},{name:"showJumper",desc:"是否显示跳转",type:"boolean",default:"true"},{name:"showPage",desc:"是否显示页数选择",type:"boolean",default:"true"},{name:"showTotal",desc:"是否显示总数",type:"boolean",default:"true"},{name:"showNums",desc:"是否显示页号",type:"boolean",default:"true"},{name:"onChange",desc:"页号选择事件",type:"Function",default:""},{name:"onChangePageSize",desc:"每页数量变化事件",type:"Function",default:""}],xe=[{name:"onChange",desc:"页号选择事件",params:"pageNum"},{name:"onChangePageSize",desc:"每页数量变化事件",params:"pageSize"}],$e=[{id:"pagination_base",text:"基础用法"},{id:"pagination_small",text:"尺寸"},{id:"pagination_hide",text:"数字分页"},{id:"pagination_min",text:"最小化分页"},{id:"pagination_circle",text:"圆形"},{id:"pagination_pages",text:"每页数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],_={pagination_base:Fe,pagination_small:Ee,pagination_hide:_e,pagination_min:be,pagination_mini:ye,pagination_circle:ve,pagination_pages:we},w=h("<br>"),Ae=h('<div class="sys-ctx-main-left">');function Ue(){const[n,d]=k({current:1,pageSize:10}),[r,p]=k({current:1,pageSize:10});return[(()=>{const m=Ae();return ge(he,m,()=>""),c(m,e(o,{dir:"v",size:32,get children(){return[e(B,{heading:2,children:"Pagination 分页"}),e(o,{id:"pagination_base",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"基础用法"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["基础用法，当前页 ",e(u,{code:!0,children:"current"})," 为控制属性"]}}),e(P,{get data(){return _.pagination_base}})]}})}}),e(o,{id:"pagination_small",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{size:"small",get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"尺寸"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["小尺寸分页组件， 设置 ",e(u,{code:!0,children:"size"})," 为 ",e(u,{code:!0,children:"small"})]}}),e(P,{get data(){return _.pagination_small}})]}})}}),e(o,{id:"pagination_mini",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{mini:!0,size:"small",get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"迷你型"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(u,{code:!0,children:"mini"})," 属性可以设置迷你型分页"]}}),e(P,{get data(){return _.pagination_mini}})]}})}}),e(o,{id:"pagination_hide",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return n.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return n.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"数字分页"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(u,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(u,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(u,{code:!0,children:"showJumper"})," 为false"]}}),e(P,{get data(){return _.pagination_hide}})]}})}}),e(o,{id:"pagination_min",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return r.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return r.pageSize},total:1e3,showNums:!1,onChange:a=>{p("current",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"最小化分页"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(u,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(u,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(u,{code:!0,children:"showJumper"})," 为false ",w(),"数字可通过设置 ",e(u,{code:!0,children:"showNums"})," 为false"]}}),e(P,{get data(){return _.pagination_min}})]}})}}),e(o,{id:"pagination_circle",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return r.current},shape:"circle",get pageSize(){return r.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"圆形"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(u,{code:!0,children:"shape='circle'"})," 可渲染圆形按钮的分页"]}}),e(P,{get data(){return _.pagination_circle}})]}})}}),e(o,{id:"pagination_pages",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return r.current},pages:[{value:10,label:"10条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}],get pageSize(){return r.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"每页数"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["可通过 ",e(u,{code:!0,children:"pages"})," 属性自定义 每页的数据量"]}}),e(P,{get data(){return _.pagination_pages}})]}})}}),e(o,{dir:"v",size:24,id:"comp_api",get children(){return[e(B,{type:"primary",heading:3,children:"API"}),e(o,{id:"comp_props",dir:"v",get children(){return[e(B,{type:"primary",heading:4,children:"Pagination Props"}),e(M,{columns:de,data:Be,border:!0,size:"small"})]}}),e(o,{id:"comp_events",dir:"v",get children(){return[e(B,{type:"primary",heading:4,children:"Pagination Events"}),e(M,{columns:pe,data:xe,border:!0,size:"small"})]}})]}})]}})),m})(),e(oe,{data:$e})]}export{Ue as default};
