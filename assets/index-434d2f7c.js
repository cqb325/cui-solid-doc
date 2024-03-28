import{u as v,i,a as e,S as d,T as l,t as a}from"./index-69f0698f.js";import{C as n}from"./index-295b9dac.js";import{D as o,a as p,T as x,p as m,e as _,C as D}from"./code-0a2ad5d4.js";import{P as u}from"./Paragraph-6df96914.js";import{T as y}from"./Title-48407536.js";import{D as s}from"./index-bb815219.js";import{h as P}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const f=`<div style={{height: '200px', position: 'relative'}}>
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
</div>`,w=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"defaultPosition",desc:"初始化位置",type:"Object",default:"{x: 0, y: 0}"},{name:"position",desc:"控制位置",type:"Object",default:"{x: 0, y: 0}"},{name:"bounds",desc:"拖拽范围的容器元素",type:"string|HTMLElement",default:"parent"},{name:"axis",desc:"拖拽方向 both|x|y",type:"string",default:"both"},{name:"positionOffset",desc:"初始化偏移量",type:"object",default:"{x: 0, y: 0}"},{name:"grid",desc:"每次拖拽的最小距离",type:"Number[]",default:""},{name:"disabled",desc:"禁用拖拽",type:"boolean",default:""},{name:"handle",desc:"禁用触发的元素",type:"string|HTMLElement",default:""},{name:"onStart",desc:"拖拽开始触发事件, return false 可以阻断后续事件",type:"Function",default:""},{name:"onDrag",desc:"拖拽触发事件, return false 可以阻断后续事件",type:"Function",default:""},{name:"onStop",desc:"拖拽结束事件, return false 可以阻断后续执行",type:"Function",default:""}],A=[{name:"onStart",desc:"拖拽开始触发事件",params:"Event, uiData"},{name:"onDrag",desc:"拖拽触发事件",params:"Event, uiData"},{name:"onStop",desc:"拖拽结束事件",params:"Event, uiData"}],T=[{name:"x",desc:"x方向位置",type:"number",default:""},{name:"y",desc:"y方向位置",type:"number",default:""},{name:"deltaX",desc:"x方向距离上次位置距离",type:"number",default:""},{name:"deltaY",desc:"y方向距离上次位置距离",type:"number",default:""},{name:"lastX",desc:"x上次位置",type:"number",default:""},{name:"lastY",desc:"y上次位置",type:"number",default:""}],j=[{id:"draggable_base",text:"基础用法"},{id:"draggable_disabled",text:"禁用"},{id:"draggable_axis",text:"方向"},{id:"draggable_bounds",text:"限制范围"},{id:"draggable_handle",text:"触发元素"},{id:"draggable_grid",text:"最小距离"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"},{id:"comp_uidata_props",text:"事件属性"}],g={draggable_base:f,draggable_disabled:E,draggable_axis:$,draggable_bounds:F,draggable_handle:B,draggable_grid:C},H=a('<div><div class="drag-handler">Handler'),c=a("<div>"),S=a("<div>禁用"),z=a("<div>Both"),O=a("<div>X"),X=a("<div>Y"),Y=a("<br>"),L=a("<div>bounds"),I=a('<div><div class="handler">Handler'),M=a("<div>grid"),N=a('<div class="sys-ctx-main-left">');function V(){return[(()=>{const h=N();return v(P,h,()=>""),i(h,e(d,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Draggable 拖拽"}),e(d,{id:"draggable_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),i(r,e(s,{get children(){const t=H(),b=t.firstChild;return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),b.style.setProperty("height","30px"),t}})),r})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(p,{get data(){return g.draggable_base}})]}})}}),e(d,{id:"draggable_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),i(r,e(s,{disabled:!0,bounds:"parent",get children(){const t=S();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"禁用"})}}),e(u,{type:"secondary",spacing:"extended",children:"禁用拖拽"}),e(p,{get data(){return g.draggable_disabled}})]}})}}),e(d,{id:"draggable_axis",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),i(r,e(s,{axis:"both",bounds:"parent",get children(){const t=z();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),i(r,e(s,{axis:"x",bounds:"parent",defaultPosition:{x:200,y:0},get children(){const t=O();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),i(r,e(s,{axis:"y",bounds:"parent",defaultPosition:{x:400,y:0},get children(){const t=X();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),r})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"方向"})}}),e(u,{type:"secondary",spacing:"extended",get children(){return["axis默认为Both、可以限制在某X、Y轴上。",Y(),"设置defaultPosition可初始化位置"]}}),e(p,{get data(){return g.draggable_axis}})]}})}}),e(d,{id:"draggable_bounds",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),i(r,e(s,{axis:"both",bounds:"parent",get children(){const t=L();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"限制范围"})}}),e(u,{type:"secondary",spacing:"extended",children:"bounds默认为parent, 可指定css选择器选择指定的容器"}),e(p,{get data(){return g.draggable_bounds}})]}})}}),e(d,{id:"draggable_handle",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),i(r,e(s,{axis:"both",bounds:"parent",handle:".handler",get children(){const t=I(),b=t.firstChild;return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),b.style.setProperty("cursor","move"),t}})),r})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"触发元素"})}}),e(u,{type:"secondary",spacing:"extended",children:"通过设置 handle 的元素指定触发拖拽的元素"}),e(p,{get data(){return g.draggable_handle}})]}})}}),e(d,{id:"draggable_grid",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[(()=>{const r=c();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),i(r,e(s,{grid:[10,10],bounds:"parent",get children(){const t=M();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"最小距离"})}}),e(u,{type:"secondary",spacing:"extended",children:"通过设置 grid 拖拽移动的最小距离"}),e(p,{get data(){return g.draggable_grid}})]}})}}),e(d,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(d,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Draggable Props"}),e(x,{columns:m,data:w,border:!0,size:"small"})]}}),e(d,{id:"comp_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Events"}),e(x,{columns:_,data:A,border:!0,size:"small"})]}}),e(d,{id:"comp_uidata_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Event uiDaua Props"}),e(x,{columns:m,data:T,border:!0,size:"small"})]}})]}})]}})),h})(),e(D,{data:j})]}export{V as default};
