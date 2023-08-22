import{c as H,e as K,i as p,a as e,h as B,Y as Q,Z as U,F as W,_ as X,j as ee,t as C,$ as P,k as te,s as ne,l as ae,a0 as k,u as re,S as d,T as s,P as y,d as I}from"./index-0e28ff91.js";import{S as ie}from"./index-f4ff48db.js";import{O as ue}from"./Option-70feb815.js";import{T as A}from"./Title-1e26531c.js";import{C as b}from"./index-50d316ba.js";import{D as _,a as F,C as se}from"./code-f57eb3d5.js";import{p as ge,e as le}from"./columns-cd2d5c33.js";import{h as ce}from"./hljs-97c5734b.js";import"./index-90373c85.js";import"./index-64ff7890.js";import"./index-1aa8f8c8.js";import"./index-19ed88f8.js";import"./index-0808eb84.js";const T=C('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'),oe=C('<span class="cm-pagination-text mr-5">共<!>条'),de=C('<span class="cm-pagination-sizer">'),pe=C('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'),he=C('<div><ul class="cm-pagination-num-list">'),D=[{value:10,label:"10条/页"},{value:20,label:"20条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}];function E(t){const m=()=>ae(t,"cm-pagination",{[`cm-pagination-${t.shape}`]:t.shape,[`cm-pagination-${t.size}`]:t.size}),i=()=>t.current,c=()=>t.total??0,f=()=>t.pageSize??10,u=t.displayedPages??5,M=t.showNums??!0,N=t.showTotal??!0,J=t.pages??D,j=t.showJumper??!0,L=t.showPage??!0,[$,x]=H(i());K(()=>{i()!=$()&&x(i())});const O=()=>{i()>1&&h(i()-1)},R=()=>{i()<S()&&h(i()+1)},V=a=>{h(parseInt(a,10))},S=()=>c()===0?1:Math.floor((c()-1)/f())+1,Y=a=>typeof a=="number"&&a>=1,h=a=>{let r=a;Y(r)&&r!==i()&&(r>S()&&(r=S()),x(r),t.onChange&&t.onChange(r,f))},Z=a=>{const r=Math.floor((c()-1)/a)+1;t.onChangePageSize&&t.onChangePageSize(a),i()>r&&(x(1),t.onChange&&t.onChange(1,f))};function q(){const a=S(),r=u/2;return{start:Math.ceil(i()>r?Math.max(Math.min(i()-r,a-u),0):0),end:Math.ceil(i()>r?Math.min(i()+r,a):Math.min(r,a))}}function G(){if(!M)return null;const a=S(),r=[],n=q();if(a<=9)for(let g=0;g<a;g++){const o=i()===g+1;r.push(e(P,{key:g+1,get onClick(){return h.bind(null,g+1)},active:o,currentIndex:g+1}))}else{const o=Math.min(2,n.start);for(let l=0;l<o;l++)r.push(e(P,{key:l+1,get onClick(){return h.bind(null,l+1)},currentIndex:l+1}));2<n.start&&n.start-2!==1?r.push(T()):n.start-2===1&&r.push(e(P,{key:2+1,get onClick(){return h.bind(null,2+1)},currentIndex:2+1}));for(let l=n.start;l<n.end;l++){const z=i()===l+1;r.push(e(P,{key:l+1,get onClick(){return h.bind(null,l+1)},currentIndex:l+1,active:z}))}if(n.end<a&&2>0){a-2>n.end&&a-2-n.end!==1?r.push(T()):a-2-n.end===1&&r.push(e(P,{get key(){return n.end+1},get onClick(){return h.bind(null,n.end+1)},get currentIndex(){return n.end+1}}));const l=Math.max(a-2,n.end);for(let z=l;z<a;z++)r.push(e(P,{key:z+1,get onClick(){return h.bind(null,z+1)},currentIndex:z+1}))}}return r}return(()=>{const a=he(),r=a.firstChild;return p(a,e(B,{when:N,get children(){const n=oe(),g=n.firstChild,o=g.nextSibling;return o.nextSibling,p(n,c,o),n}}),r),p(r,e(Q,{current:i,onClick:O}),null),p(r,G,null),p(r,e(U,{current:i,onClick:R,get disabled(){return i()===S()}}),null),p(a,e(B,{when:L,get children(){const n=de();return p(n,e(ie,{get value(){return f()},get size(){return t.size},onChange:Z,data:J,style:{width:"80px"},get children(){return e(W,{each:D,children:g=>e(ue,{get label(){return g.label},get value(){return g.value}})})}})),n}}),null),p(a,e(B,{when:j,get children(){const n=pe(),g=n.firstChild,o=g.nextSibling;return p(n,e(X,{get style(){return{width:t.size==="small"?"30px":"50px"}},class:"mr-5",value:[$,x],get size(){return t.size},onChange:V}),o),n}}),null),ee(n=>{const g=m(),o=t.style;return n._v$=te(a,g,n._v$),n._v$2=ne(a,o,n._v$2),n},{_v$:void 0,_v$2:void 0}),a})()}const me=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,fe=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination size='small' current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,ze=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} showTotal={false} showPage={false} showJumper={false} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,Ce=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} showTotal={false} showPage={false} showJumper={false} 
pageSize={page2.pageSize} total={1000} showNums={false} onChange={(page: number) => {
    setPage2('current', page);
}}/>`,Se=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} shape='circle' pageSize={page2.pageSize} total={1000} onChange={(page) => {
    setPage2('current', page);
}} onChangePageSize={(size: number) => {
    setPage2('pageSize', size);
}}/>`,Pe=`const [page2, setPage2] = createStore({
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
}}/>`,ye=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"shape",desc:"可以选择 normal|circle",type:"string",default:"normal"},{name:"size",desc:"分页尺寸 small|large",type:"string",default:""},{name:"current",desc:"当前页",type:"number",default:""},{name:"total",desc:"总数据量",type:"number",default:""},{name:"pageSize",desc:"每页数据量",type:"number",default:""},{name:"pages",desc:"每页数据量选项",type:"Array",default:""},{name:"showJumper",desc:"是否显示跳转",type:"boolean",default:"true"},{name:"showPage",desc:"是否显示页数选择",type:"boolean",default:"true"},{name:"showTotal",desc:"是否显示总数",type:"boolean",default:"true"},{name:"showNums",desc:"是否显示页号",type:"boolean",default:"true"},{name:"onChange",desc:"页号选择事件",type:"Function",default:""},{name:"onChangePageSize",desc:"每页数量变化事件",type:"Function",default:""}],be=[{name:"onChange",desc:"页号选择事件",params:"pageNum"},{name:"onChangePageSize",desc:"每页数量变化事件",params:"pageSize"}],_e=[{id:"pagination_base",text:"基础用法"},{id:"pagination_small",text:"尺寸"},{id:"pagination_hide",text:"数字分页"},{id:"pagination_min",text:"最小化分页"},{id:"pagination_circle",text:"圆形"},{id:"pagination_pages",text:"每页数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],v={pagination_base:me,pagination_small:fe,pagination_hide:ze,pagination_min:Ce,pagination_circle:Se,pagination_pages:Pe},w=C("<br>"),Fe=C('<div class="sys-ctx-main-left">');function Je(){const[t,m]=k({current:1,pageSize:10}),[i,c]=k({current:1,pageSize:10});return[(()=>{const f=Fe();return re(ce,f,()=>""),p(f,e(d,{dir:"v",size:32,get children(){return[e(A,{heading:2,children:"Pagination 分页"}),e(d,{id:"pagination_base",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(E,{get current(){return t.current},get pageSize(){return t.pageSize},total:1e3,onChange:u=>{m("current",u)},onChangePageSize:u=>{m("pageSize",u)}}),e(_,{align:"left",get children(){return e(s,{type:"primary",children:"基础用法"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["基础用法，当前页 ",e(s,{code:!0,children:"current"})," 为控制属性"]}}),e(F,{get data(){return v.pagination_base}})]}})}}),e(d,{id:"pagination_small",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(E,{size:"small",get current(){return t.current},get pageSize(){return t.pageSize},total:1e3,onChange:u=>{m("current",u)},onChangePageSize:u=>{m("pageSize",u)}}),e(_,{align:"left",get children(){return e(s,{type:"primary",children:"尺寸"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["小尺寸分页组件， 设置 ",e(s,{code:!0,children:"size"})," 为 ",e(s,{code:!0,children:"small"})]}}),e(F,{get data(){return v.pagination_small}})]}})}}),e(d,{id:"pagination_hide",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(E,{get current(){return t.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return t.pageSize},total:1e3,onChange:u=>{m("current",u)},onChangePageSize:u=>{m("pageSize",u)}}),e(_,{align:"left",get children(){return e(s,{type:"primary",children:"数字分页"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(s,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(s,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(s,{code:!0,children:"showJumper"})," 为false"]}}),e(F,{get data(){return v.pagination_hide}})]}})}}),e(d,{id:"pagination_min",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(E,{get current(){return i.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return i.pageSize},total:1e3,showNums:!1,onChange:u=>{c("current",u)}}),e(_,{align:"left",get children(){return e(s,{type:"primary",children:"最小化分页"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(s,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(s,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(s,{code:!0,children:"showJumper"})," 为false ",w(),"数字可通过设置 ",e(s,{code:!0,children:"showNums"})," 为false"]}}),e(F,{get data(){return v.pagination_min}})]}})}}),e(d,{id:"pagination_circle",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(E,{get current(){return i.current},shape:"circle",get pageSize(){return i.pageSize},total:1e3,onChange:u=>{c("current",u)},onChangePageSize:u=>{c("pageSize",u)}}),e(_,{align:"left",get children(){return e(s,{type:"primary",children:"圆形"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(s,{code:!0,children:"shape='circle'"})," 可渲染圆形按钮的分页"]}}),e(F,{get data(){return v.pagination_circle}})]}})}}),e(d,{id:"pagination_pages",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(E,{get current(){return i.current},pages:[{value:10,label:"10条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}],get pageSize(){return i.pageSize},total:1e3,onChange:u=>{c("current",u)},onChangePageSize:u=>{c("pageSize",u)}}),e(_,{align:"left",get children(){return e(s,{type:"primary",children:"每页数"})}}),e(y,{type:"secondary",spacing:"extended",get children(){return["可通过 ",e(s,{code:!0,children:"pages"})," 属性自定义 每页的数据量"]}}),e(F,{get data(){return v.pagination_pages}})]}})}}),e(d,{dir:"v",size:24,id:"comp_api",get children(){return[e(A,{type:"primary",heading:3,children:"API"}),e(d,{id:"comp_props",dir:"v",get children(){return[e(A,{type:"primary",heading:4,children:"Pagination Props"}),e(I,{columns:ge,data:ye,border:!0,size:"small"})]}}),e(d,{id:"comp_events",dir:"v",get children(){return[e(A,{type:"primary",heading:4,children:"Pagination Events"}),e(I,{columns:le,data:be,border:!0,size:"small"})]}})]}})]}})),f})(),e(se,{data:_e})]}export{Je as default};
