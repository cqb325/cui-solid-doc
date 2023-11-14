import{u as m,i as h,a as e,S as r,T as a,P as n,d as p,t as s}from"./index-09986a33.js";import{C as u}from"./index-8452e71d.js";import{T as i}from"./Title-c78d5eaf.js";import{h as g}from"./hljs-f59721e8.js";import{D as c,a as d,C as b}from"./code-635398dd.js";import{C as t}from"./index-cf40f2dd.js";import{p as C,e as y}from"./columns-cd2d5c33.js";import"./index-02bae552.js";import"./index-55d77011.js";import"./index-a56dc077.js";import"./index-6cc6fbf5.js";import"./index-6ea61dc6.js";const f=`<Space dir="h" size={50}>
    <Space dir="h" align="center">
        <span>有默认值</span>
        <ColorPicker value={'#19be6b'}/>
    </Space>
    <Space dir="h" align="center">
        <span>无默认值</span>
        <ColorPicker />
    </Space>
</Space>`,v=`<Space dir="h">
    <ColorPicker value={'rgba(25, 190,107, .5)'} alpha/>
</Space>`,E=`<Space dir="h">
    <ColorPicker value={'#19be6b'} recommend />
    <ColorPicker value={'#19be6b'} recommend colors={['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9']}/>
</Space>`,_=`<Space dir="h" align="center">
    <ColorPicker value={'#19be6b'} size="large" />
    <ColorPicker value={'#19be6b'} />
    <ColorPicker value={'#19be6b'} size="small"/>
</Space>`,F=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控值",type:"any",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"align",desc:"下拉内容位置 bottomLeft|bottomRight",type:"string",default:"bottomLeft"},{name:"alpha",desc:"开启透明度",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"recommend",desc:"使用预设颜色",type:"boolean",default:""},{name:"colors",desc:"自定义预设颜色",type:"string[]",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],A=[{name:"onChange",desc:"值改变事件",params:"color"}],P=[{id:"cp_base",text:"基础用法"},{id:"cp_alpha",text:"透明"},{id:"cp_recommand",text:"颜色预设"},{id:"cp_size",text:"尺寸"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],l={cp_base:f,cp_alpha:v,cp_recommand:E,cp_size:_},D=s("<span>有默认值"),B=s("<span>无默认值"),z=s('<div class="sys-ctx-main-left">');function G(){return[(()=>{const o=z();return m(g,o,()=>""),h(o,e(r,{dir:"v",size:32,get children(){return[e(i,{heading:2,children:"ColorPicker 颜色选择器"}),e(r,{id:"cp_base",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"h",size:50,get children(){return[e(r,{dir:"h",align:"center",get children(){return[D(),e(t,{value:"#19be6b"})]}}),e(r,{dir:"h",align:"center",get children(){return[B(),e(t,{})]}})]}}),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(n,{type:"secondary",spacing:"extended",children:"基础用法"}),e(d,{get data(){return l.cp_base}})]}})}}),e(r,{id:"cp_alpha",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return e(t,{value:"rgba(25, 190,107, .5)",alpha:!0})}}),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"透明度"})}}),e(n,{type:"secondary",spacing:"extended",children:"开启属性 alpha，可以选择带 Alpha 通道的颜色"}),e(d,{get data(){return l.cp_alpha}})]}})}}),e(r,{id:"cp_recommand",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(t,{value:"#19be6b",recommend:!0}),e(t,{value:"#19be6b",recommend:!0,colors:["#311B92","#512DA8","#673AB7","#9575CD","#D1C4E9"]})]}}),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"颜色预设"})}}),e(n,{type:"secondary",spacing:"extended",children:"开启属性 recommend 可以显示推荐的颜色预设，或设置属性 colors 来自定义预设颜色。"}),e(d,{get data(){return l.cp_recommand}})]}})}}),e(r,{id:"cp_size",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(r,{dir:"h",align:"center",get children(){return[e(t,{value:"#19be6b",size:"large"}),e(t,{value:"#19be6b"}),e(t,{value:"#19be6b",size:"small"})]}}),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"尺寸"})}}),e(n,{type:"secondary",spacing:"extended",children:"选择器有三种尺寸：大、默认（中）、小。"}),e(d,{get data(){return l.cp_size}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(i,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Select Props"}),e(p,{columns:C,data:F,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Events"}),e(p,{columns:y,data:A,border:!0,size:"small"})]}})]}})]}})),o})(),e(b,{data:P})]}export{G as default};