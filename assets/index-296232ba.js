import{u as p,i as u,a as t,S as l,T as h,t as y,h as I,s as A}from"./index-5e251d81.js";import{_ as v,D as f,a as g,T as C,p as w,C as D}from"./code-c71fa51e.js";import{h as z}from"./hljs-74a5c6d1.js";import{T as m}from"./Title-52a6bda3.js";import{C as x}from"./index-dff86af7.js";import{P as _}from"./Paragraph-a25cb645.js";import"./_commonjsHelpers-725317a4.js";const P=`
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
</div>`,V=[{name:"height",desc:"固定高度",type:"number",default:""},{name:"maxHeight",desc:"最大高度",type:"number",default:""},{name:"itemEstimatedSize",desc:"项目预估高度",type:"number",default:""},{name:"overscan",desc:"前后预留数量",type:"number",default:"3"},{name:"items",desc:"数据项",type:"any[]",default:""}],M=[{id:"virtual_base",text:"基础用法"},{id:"countup_auto",text:"动态高度"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],L={virtual_base:P,countup_auto:S},E=y('<div role="listitem"><div>Row '),b=y("<div>"),O=y('<div class="sys-ctx-main-left">'),T=r=>{const s={...r.style};return(()=>{const e=E(),n=e.firstChild;n.firstChild;const d=r.ref;return typeof d=="function"?p(d,e):r.ref=e,u(n,()=>r.index,null),I(i=>{const c=s,a=r.index%2===0,o=r.index%2===1;return i._v$=A(e,c,i._v$),a!==i._v$2&&e.classList.toggle("ListItemOdd",i._v$2=a),o!==i._v$3&&e.classList.toggle("ListItemEven",i._v$3=o),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()},F=r=>{const s={...r.style,height:30+r.item+"px"};return(()=>{const e=E(),n=e.firstChild;n.firstChild;const d=r.ref;return typeof d=="function"?p(d,e):r.ref=e,u(n,()=>r.index,null),I(i=>{const c=s,a=r.index%2===0,o=r.index%2===1;return i._v$4=A(e,c,i._v$4),a!==i._v$5&&e.classList.toggle("ListItemOdd",i._v$5=a),o!==i._v$6&&e.classList.toggle("ListItemEven",i._v$6=o),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),e})()},$=r=>new Array(r).fill(!0).map(()=>1+Math.round(Math.random()*20));function q(){const r=$(1e3);return[(()=>{const s=O();return p(z,s,()=>""),u(s,t(l,{dir:"v",size:32,get children(){return[t(m,{heading:2,children:"Virtual List 虚拟列表"}),t(l,{id:"countup_base",dir:"v",get children(){return t(x,{bordered:!0,get children(){return[(()=>{const e=b();return e.style.setProperty("width","300px"),e.style.setProperty("border","1px solid #ccc"),u(e,t(v,{height:300,get items(){return $(1e3)},itemEstimatedSize:20,children:T})),e})(),t(f,{align:"left",get children(){return t(h,{type:"primary",children:"基础用法"})}}),t(_,{type:"secondary",spacing:"extended",children:"虚拟列表的基础用法。"}),t(g,{get data(){return L.virtual_base}})]}})}}),t(l,{id:"countup_auto",dir:"v",get children(){return t(x,{bordered:!0,get children(){return[(()=>{const e=b();return e.style.setProperty("width","300px"),e.style.setProperty("border","1px solid #ccc"),u(e,t(v,{height:300,items:r,itemEstimatedSize:20,children:F})),e})(),t(f,{align:"left",get children(){return t(h,{type:"primary",children:"动态高度"})}}),t(_,{type:"secondary",spacing:"extended",children:"内容动态高度"}),t(g,{get data(){return L.countup_auto}})]}})}}),t(l,{dir:"v",size:24,id:"comp_api",get children(){return[t(m,{type:"primary",heading:3,children:"API"}),t(l,{id:"comp_props",dir:"v",get children(){return[t(m,{type:"primary",heading:4,children:"VirtualList Props"}),t(C,{columns:w,data:V,border:!0,size:"small"})]}})]}})]}})),s})(),t(D,{data:M})]}export{T as ListItem,F as ListItem2,$ as createArray,q as default};
