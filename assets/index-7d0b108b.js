import{u as v,i as s,a as e,S as d,D as i,T as l,P as n,d as x,t as a}from"./index-5ee3594d.js";import{C as o}from"./index-24e0edd0.js";import{D as p,a as u,C as _}from"./code-4a131b7e.js";import{T as y}from"./Title-756b5815.js";import{p as m,e as D}from"./columns-cd2d5c33.js";import{h as P}from"./hljs-e5982031.js";const f=`<div style={{height: '200px', position: 'relative'}}>
    <Draggable >
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            <div style={{height: '30px'}} class='drag-handler'>Handler</div>
        </div>
    </Draggable>
</div>`,E=`<div style={{height: '200px', position: 'relative'}}>
    <Draggable disabled bounds="parent">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            禁用
        </div>
    </Draggable>
</div>`,$=`<div style={{height: '200px', position: 'relative'}}>

<Draggable axis="both" bounds="parent">
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        Both
    </div>
</Draggable>

<Draggable axis="x" bounds="parent" defaultPosition={{x: 200, y: 0}}>
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        X
    </div>
</Draggable>

<Draggable axis="y" bounds="parent" defaultPosition={{x: 400, y: 0}}>
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        Y
    </div>
</Draggable>
</div>`,F=`<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable axis="both" bounds="parent">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            bounds
        </div>
    </Draggable>
</div>`,B=`<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable axis="both" bounds="parent" handle=".handler">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            <div class="handler" style={{cursor: 'move'}}>Handler</div>
        </div>
    </Draggable>
</div>`,C=`<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable grid={[10, 10]} bounds="parent" >
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        grid
        </div>
    </Draggable>
</div>`,w=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"defaultPosition",desc:"初始化位置",type:"Object",default:"{x: 0, y: 0}"},{name:"position",desc:"控制位置",type:"Object",default:"{x: 0, y: 0}"},{name:"bounds",desc:"拖拽范围的容器元素",type:"string|HTMLElement",default:"parent"},{name:"axis",desc:"拖拽方向 both|x|y",type:"string",default:"both"},{name:"positionOffset",desc:"初始化偏移量",type:"object",default:"{x: 0, y: 0}"},{name:"grid",desc:"每次拖拽的最小距离",type:"Number[]",default:""},{name:"disabled",desc:"禁用拖拽",type:"boolean",default:""},{name:"handle",desc:"禁用触发的元素",type:"string|HTMLElement",default:""},{name:"onStart",desc:"拖拽开始触发事件, return false 可以阻断后续事件",type:"Function",default:""},{name:"onDrag",desc:"拖拽触发事件, return false 可以阻断后续事件",type:"Function",default:""},{name:"onStop",desc:"拖拽结束事件, return false 可以阻断后续执行",type:"Function",default:""}],A=[{name:"onStart",desc:"拖拽开始触发事件",params:"Event, uiData"},{name:"onDrag",desc:"拖拽触发事件",params:"Event, uiData"},{name:"onStop",desc:"拖拽结束事件",params:"Event, uiData"}],T=[{name:"x",desc:"x方向位置",type:"number",default:""},{name:"y",desc:"y方向位置",type:"number",default:""},{name:"deltaX",desc:"x方向距离上次位置距离",type:"number",default:""},{name:"deltaY",desc:"y方向距离上次位置距离",type:"number",default:""},{name:"lastX",desc:"x上次位置",type:"number",default:""},{name:"lastY",desc:"y上次位置",type:"number",default:""}],j=[{id:"draggable_base",text:"基础用法"},{id:"draggable_disabled",text:"禁用"},{id:"draggable_axis",text:"方向"},{id:"draggable_bounds",text:"限制范围"},{id:"draggable_handle",text:"触发元素"},{id:"draggable_grid",text:"最小距离"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"},{id:"comp_uidata_props",text:"事件属性"}],g={draggable_base:f,draggable_disabled:E,draggable_axis:$,draggable_bounds:F,draggable_handle:B,draggable_grid:C},H=a('<div><div class="drag-handler">Handler'),c=a("<div>"),S=a("<div>禁用"),z=a("<div>Both"),O=a("<div>X"),X=a("<div>Y"),Y=a("<br>"),L=a("<div>bounds"),I=a('<div><div class="handler">Handler'),M=a("<div>grid"),N=a('<div class="sys-ctx-main-left">');function R(){return[(()=>{const h=N();return v(P,h,()=>""),s(h,e(d,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Draggable 拖拽"}),e(d,{id:"draggable_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),s(r,e(i,{get children(){const t=H(),b=t.firstChild;return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),b.style.setProperty("height","30px"),t}})),r})(),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"基础用法"})}}),e(n,{type:"secondary",spacing:"extended",children:"基础用法"}),e(u,{get data(){return g.draggable_base}})]}})}}),e(d,{id:"draggable_disabled",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),s(r,e(i,{disabled:!0,bounds:"parent",get children(){const t=S();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"禁用"})}}),e(n,{type:"secondary",spacing:"extended",children:"禁用拖拽"}),e(u,{get data(){return g.draggable_disabled}})]}})}}),e(d,{id:"draggable_axis",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),s(r,e(i,{axis:"both",bounds:"parent",get children(){const t=z();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),s(r,e(i,{axis:"x",bounds:"parent",defaultPosition:{x:200,y:0},get children(){const t=O();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),s(r,e(i,{axis:"y",bounds:"parent",defaultPosition:{x:400,y:0},get children(){const t=X();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),r})(),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"方向"})}}),e(n,{type:"secondary",spacing:"extended",get children(){return["axis默认为Both、可以限制在某X、Y轴上。",Y(),"设置defaultPosition可初始化位置"]}}),e(u,{get data(){return g.draggable_axis}})]}})}}),e(d,{id:"draggable_bounds",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),s(r,e(i,{axis:"both",bounds:"parent",get children(){const t=L();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"限制范围"})}}),e(n,{type:"secondary",spacing:"extended",children:"bounds默认为parent, 可指定css选择器选择指定的容器"}),e(u,{get data(){return g.draggable_bounds}})]}})}}),e(d,{id:"draggable_handle",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),s(r,e(i,{axis:"both",bounds:"parent",handle:".handler",get children(){const t=I(),b=t.firstChild;return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),b.style.setProperty("cursor","move"),t}})),r})(),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"触发元素"})}}),e(n,{type:"secondary",spacing:"extended",children:"通过设置 handle 的元素指定触发拖拽的元素"}),e(u,{get data(){return g.draggable_handle}})]}})}}),e(d,{id:"draggable_grid",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),s(r,e(i,{grid:[10,10],bounds:"parent",get children(){const t=M();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(p,{align:"left",get children(){return e(l,{type:"primary",children:"最小距离"})}}),e(n,{type:"secondary",spacing:"extended",children:"通过设置 grid 拖拽移动的最小距离"}),e(u,{get data(){return g.draggable_grid}})]}})}}),e(d,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(d,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Draggable Props"}),e(x,{columns:m,data:w,border:!0,size:"small"})]}}),e(d,{id:"comp_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Events"}),e(x,{columns:D,data:A,border:!0,size:"small"})]}}),e(d,{id:"comp_uidata_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Event uiDaua Props"}),e(x,{columns:m,data:T,border:!0,size:"small"})]}})]}})]}})),h})(),e(_,{data:j})]}export{R as default};
