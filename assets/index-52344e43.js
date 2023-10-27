import{u as p,i as u,a as t,S as l,al as h,T as v,P as f,d as C,t as y,j as I,s as A}from"./index-3a33c8c5.js";import{h as w}from"./hljs-35357388.js";import{C as g}from"./index-2f5e5bd6.js";import{D as x,a as _,C as D}from"./code-55c74af4.js";import{T as m}from"./Title-61428187.js";import{p as z}from"./columns-cd2d5c33.js";const P=`
<style>
.listItem {
    border: 1px solid grey;
    width: 100%;
    height: 100%;
}
.ListItemEven {
    background-color: #e6e4dc;
}
.ListItemEven, .ListItemOdd {
    display: flex;
    align-items: center;
    justify-content: center;
}
*{
    box-sizing: border-box;
}
</style>
export const ListItem = (props: any) : JSXElement => {
    const style = {...props.style}
    return <div
      style={style}
      role="listitem"
      classList={{
        "ListItemOdd": props.index % 2 === 0,
        "ListItemEven": props.index % 2 === 1,
      }}
      ref={props.ref}
    >
      <div>Row {props.index}</div>
    </div>
}
export const createArray = (count: number) => {
    return new Array(count).fill(true).map(() => 1 + Math.round(Math.random() * 20))
};

<div style={{width: '300px', border: '1px solid #ccc'}}>
    <VirtualList height={300} items={createArray(1000)} itemEstimatedSize={20}>
        {ListItem}
    </VirtualList>
</div>`,S=`
<style>
.listItem {
    border: 1px solid grey;
    width: 100%;
    height: 100%;
}
.ListItemEven {
    background-color: #e6e4dc;
}
.ListItemEven, .ListItemOdd {
    display: flex;
    align-items: center;
    justify-content: center;
}
*{
    box-sizing: border-box;
}
</style>
export const ListItem = (props: any) : JSXElement => {
    const style = {...props.style, height: (30 + props.item) + 'px'}
    return <div
      style={style}
      role="listitem"
      classList={{
        "ListItemOdd": props.index % 2 === 0,
        "ListItemEven": props.index % 2 === 1,
      }}
      ref={props.ref}
    >
      <div>Row {props.index}</div>
    </div>
}
export const createArray = (count: number) => {
    return new Array(count).fill(true).map(() => 1 + Math.round(Math.random() * 20))
};

<div style={{width: '300px', border: '1px solid #ccc'}}>
    <VirtualList height={300} items={createArray(1000)} itemEstimatedSize={20}>
        {ListItem}
    </VirtualList>
</div>`,V=[{name:"height",desc:"固定高度",type:"number",default:""},{name:"maxHeight",desc:"最大高度",type:"number",default:""},{name:"itemEstimatedSize",desc:"项目预估高度",type:"number",default:""},{name:"overscan",desc:"前后预留数量",type:"number",default:"3"},{name:"items",desc:"数据项",type:"any[]",default:""}],M=[{id:"virtual_base",text:"基础用法"},{id:"countup_auto",text:"动态高度"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],L={virtual_base:P,countup_auto:S},E=y('<div role="listitem"><div>Row '),b=y("<div>"),O=y('<div class="sys-ctx-main-left">'),T=r=>{const s={...r.style};return(()=>{const e=E(),n=e.firstChild;n.firstChild;const d=r.ref;return typeof d=="function"?p(d,e):r.ref=e,u(n,()=>r.index,null),I(i=>{const c=s,a=r.index%2===0,o=r.index%2===1;return i._v$=A(e,c,i._v$),a!==i._v$2&&e.classList.toggle("ListItemOdd",i._v$2=a),o!==i._v$3&&e.classList.toggle("ListItemEven",i._v$3=o),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()},j=r=>{const s={...r.style,height:30+r.item+"px"};return(()=>{const e=E(),n=e.firstChild;n.firstChild;const d=r.ref;return typeof d=="function"?p(d,e):r.ref=e,u(n,()=>r.index,null),I(i=>{const c=s,a=r.index%2===0,o=r.index%2===1;return i._v$4=A(e,c,i._v$4),a!==i._v$5&&e.classList.toggle("ListItemOdd",i._v$5=a),o!==i._v$6&&e.classList.toggle("ListItemEven",i._v$6=o),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),e})()},$=r=>new Array(r).fill(!0).map(()=>1+Math.round(Math.random()*20));function H(){const r=$(1e3);return[(()=>{const s=O();return p(w,s,()=>""),u(s,t(l,{dir:"v",size:32,get children(){return[t(m,{heading:2,children:"Virtual List 虚拟列表"}),t(l,{id:"countup_base",dir:"v",get children(){return t(g,{bordered:!0,get children(){return[(()=>{const e=b();return e.style.setProperty("width","300px"),e.style.setProperty("border","1px solid #ccc"),u(e,t(h,{height:300,get items(){return $(1e3)},itemEstimatedSize:20,children:T})),e})(),t(x,{align:"left",get children(){return t(v,{type:"primary",children:"基础用法"})}}),t(f,{type:"secondary",spacing:"extended",children:"虚拟列表的基础用法。"}),t(_,{get data(){return L.virtual_base}})]}})}}),t(l,{id:"countup_auto",dir:"v",get children(){return t(g,{bordered:!0,get children(){return[(()=>{const e=b();return e.style.setProperty("width","300px"),e.style.setProperty("border","1px solid #ccc"),u(e,t(h,{height:300,items:r,itemEstimatedSize:20,children:j})),e})(),t(x,{align:"left",get children(){return t(v,{type:"primary",children:"动态高度"})}}),t(f,{type:"secondary",spacing:"extended",children:"内容动态高度"}),t(_,{get data(){return L.countup_auto}})]}})}}),t(l,{dir:"v",size:24,id:"comp_api",get children(){return[t(m,{type:"primary",heading:3,children:"API"}),t(l,{id:"comp_props",dir:"v",get children(){return[t(m,{type:"primary",heading:4,children:"VirtualList Props"}),t(C,{columns:z,data:V,border:!0,size:"small"})]}})]}})]}})),s})(),t(D,{data:M})]}export{T as ListItem,j as ListItem2,$ as createArray,H as default};
