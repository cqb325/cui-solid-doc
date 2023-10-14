import{u as C,i as a,a as e,S as n,a6 as s,T as l,P as c,d as b,t as y}from"./index-425dee0a.js";import{C as u}from"./index-e48e332f.js";import{D as o,a as p,C as v}from"./code-22357574.js";import{C as F}from"./index-2661cf0d.js";import{T as h}from"./Title-1e253d7e.js";import{h as E}from"./hljs-a77543c9.js";import{p as _}from"./columns-cd2d5c33.js";const A=`const data = [{
    id: 'A', name: '安徽',
    children: [{name: '合肥', id: '1'},{name: '芜湖', id: '2'},{name: '蚌埠', id: '3'},{name: '淮南', id: '4'},{name: '马鞍山', id: '5'}
    ,{name: '淮北', id: '6'},{name: '铜陵', id: '7'},{name: '安庆', id: '8'}],
},{
    id: 'B', name: '北京',
    children: [{name: '北京市', id: '北京市'}],
}, {
    id: 'C', name: '重庆',
    children: [{name: '重庆市', id: '重庆市'}]
}, {
    id: 'F', name: '福建',
    children: [{name: '福州市', id: '福州市'}, {name: '厦门市', id: '厦门市'}, {name: '莆田市', id: '莆田市'}, {name: '三明市', id: '三明市'}]
}, {
    id: 'G', name: '甘肃',
    children: [{name: '兰州市', id: '兰州市'}, {name: '嘉峪关市', id: '嘉峪关市'}, {name: '金昌市', id: '金昌市'}, {name: '白银市', id: '白银市'}]
}];

<div style={{height: "500px"}}>
    <IndexList data={data}></IndexList>
</div>
`,I=`const data = [{
    id: 'A', name: '安徽',
    children: [{name: '合肥', id: '1'},{name: '芜湖', id: '2'},{name: '蚌埠', id: '3'},{name: '淮南', id: '4'},{name: '马鞍山', id: '5'}
    ,{name: '淮北', id: '6'},{name: '铜陵', id: '7'},{name: '安庆', id: '8'}],
},{
    id: 'B', name: '北京',
    children: [{name: '北京市', id: '北京市'}],
}, {
    id: 'C', name: '重庆',
    children: [{name: '重庆市', id: '重庆市'}]
}, {
    id: 'F', name: '福建',
    children: [{name: '福州市', id: '福州市'}, {name: '厦门市', id: '厦门市'}, {name: '莆田市', id: '莆田市'}, {name: '三明市', id: '三明市'}]
}, {
    id: 'G', name: '甘肃',
    children: [{name: '兰州市', id: '兰州市'}, {name: '嘉峪关市', id: '嘉峪关市'}, {name: '金昌市', id: '金昌市'}, {name: '白银市', id: '白银市'}]
}];

<div style={{height: "500px"}}>
    <IndexList data={data} selectable onChange={(v) => {
        console.log(v);
    }}></IndexList>
</div>
`,D=`const data = [{
    id: 'A', name: '安徽',
    children: [{name: '合肥', id: '1'},{name: '芜湖', id: '2'},{name: '蚌埠', id: '3'},{name: '淮南', id: '4'},{name: '马鞍山', id: '5'}
    ,{name: '淮北', id: '6'},{name: '铜陵', id: '7'},{name: '安庆', id: '8'}],
},{
    id: 'B', name: '北京',
    children: [{name: '北京市', id: '北京市'}],
}, {
    id: 'C', name: '重庆',
    children: [{name: '重庆市', id: '重庆市'}]
}, {
    id: 'F', name: '福建',
    children: [{name: '福州市', id: '福州市'}, {name: '厦门市', id: '厦门市'}, {name: '莆田市', id: '莆田市'}, {name: '三明市', id: '三明市'}]
}, {
    id: 'G', name: '甘肃',
    children: [{name: '兰州市', id: '兰州市'}, {name: '嘉峪关市', id: '嘉峪关市'}, {name: '金昌市', id: '金昌市'}, {name: '白银市', id: '白银市'}]
}];

<div style={{height: "500px"}}>
    <IndexList data={data} border></IndexList>
</div>
`,B=`const data = [{
    id: 'A', name: '安徽',
    children: [{name: '合肥', id: '1'},{name: '芜湖', id: '2'},{name: '蚌埠', id: '3'},{name: '淮南', id: '4'},{name: '马鞍山', id: '5'}
    ,{name: '淮北', id: '6'},{name: '铜陵', id: '7'},{name: '安庆', id: '8'}],
},{
    id: 'B', name: '北京',
    children: [{name: '北京市', id: '北京市'}],
}, {
    id: 'C', name: '重庆',
    children: [{name: '重庆市', id: '重庆市'}]
}, {
    id: 'F', name: '福建',
    children: [{name: '福州市', id: '福州市'}, {name: '厦门市', id: '厦门市'}, {name: '莆田市', id: '莆田市'}, {name: '三明市', id: '三明市'}]
}, {
    id: 'G', name: '甘肃',
    children: [{name: '兰州市', id: '兰州市'}, {name: '嘉峪关市', id: '嘉峪关市'}, {name: '金昌市', id: '金昌市'}, {name: '白银市', id: '白银市'}]
}];

<div style={{height: "500px"}}>
    <IndexList data={data} selectable renderItem={(item: any, active: boolean) => {
        return <Space dir="h">
            <Checkbox checked={active}/>
            <div style={{flex: 1}}>{item.name}</div>
            <span style={{"padding-right": '5px'}}>xxxxxxxxx</span></Space>
    }} onChange={(v) => {
        console.log(v);
    }}></IndexList>
</div>
`,P=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"data",desc:"传入的数据源",type:"array",default:""},{name:"selectable",desc:"可选择的",type:"boolean",default:""},{name:"promote",desc:"显示提示信息",type:"boolean",default:"true"},{name:"border",desc:"显示带边框的列表",type:"boolean",default:""},{name:"renderItem",desc:"自定义渲染方法",type:"Function",default:""},{name:"onChange",desc:"选择选项改变事件",type:"Function",default:""}],L=[{name:"id",desc:"选项标识",type:"string|number",default:""},{name:"name",desc:"显示名称",type:"string",default:""},{name:"children",desc:"子元素",type:"any[]",default:""}],$=[{id:"indexlist_base",text:"基础用法"},{id:"indexlist_selectable",text:"可选择"},{id:"indexlist_border",text:"边框"},{id:"indexlist_custom",text:"自定义渲染"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_item_props",text:"数据属性"}],x={indexlist_base:A,indexlist_selectable:I,indexlist_border:D,indexlist_custom:B},r=y("<div>"),G=y('<div class="sys-ctx-main-left">'),T=y("<span>xxxxxxxxx");function H(){const m=[{id:"A",name:"安徽",children:[{name:"合肥",id:"1"},{name:"芜湖",id:"2"},{name:"蚌埠",id:"3"},{name:"淮南",id:"4"},{name:"马鞍山",id:"5"},{name:"淮北",id:"6"},{name:"铜陵",id:"7"},{name:"安庆",id:"8"}]},{id:"B",name:"北京",children:[{name:"北京市",id:"北京市"}]},{id:"C",name:"重庆",children:[{name:"重庆市",id:"重庆市"}]},{id:"F",name:"福建",children:[{name:"福州市",id:"福州市"},{name:"厦门市",id:"厦门市"},{name:"莆田市",id:"莆田市"},{name:"三明市",id:"三明市"}]},{id:"G",name:"甘肃",children:[{name:"兰州市",id:"兰州市"},{name:"嘉峪关市",id:"嘉峪关市"},{name:"金昌市",id:"金昌市"},{name:"白银市",id:"白银市"}]}];return[(()=>{const g=G();return C(E,g,()=>""),a(g,e(n,{dir:"v",size:32,get children(){return[e(h,{heading:2,children:"IndexList 索引列表"}),e(n,{id:"indexlist_base",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[(()=>{const d=r();return d.style.setProperty("height","500px"),a(d,e(s,{data:m})),d})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"基础用法"})}}),e(c,{type:"secondary",spacing:"extended",children:"基础用法"}),e(p,{get data(){return x.indexlist_base}})]}})}}),e(n,{id:"indexlist_selectable",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[(()=>{const d=r();return d.style.setProperty("height","500px"),a(d,e(s,{data:m,selectable:!0,onChange:t=>{console.log(t)}})),d})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"可选择"})}}),e(c,{type:"secondary",spacing:"extended",children:"添加selectable属性可以对选项进行选择"}),e(p,{get data(){return x.indexlist_selectable}})]}})}}),e(n,{id:"indexlist_border",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[(()=>{const d=r();return d.style.setProperty("height","500px"),a(d,e(s,{data:m,border:!0})),d})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"边框"})}}),e(c,{type:"secondary",spacing:"extended",children:"添加 border 属性渲染边框"}),e(p,{get data(){return x.indexlist_border}})]}})}}),e(n,{id:"indexlist_custom",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[(()=>{const d=r();return d.style.setProperty("height","500px"),a(d,e(s,{data:m,selectable:!0,renderItem:(t,f)=>e(n,{dir:"h",get children(){return[e(F,{checked:f}),(()=>{const i=r();return i.style.setProperty("flex","1"),a(i,()=>t.name),i})(),(()=>{const i=T();return i.style.setProperty("padding-right","5px"),i})()]}}),onChange:t=>{console.log(t)}})),d})(),e(o,{align:"left",get children(){return e(l,{type:"primary",children:"自定义渲染"})}}),e(c,{type:"secondary",spacing:"extended",children:"通过 renderItem 方法可以自定义选项的渲染方式"}),e(p,{get data(){return x.indexlist_custom}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(h,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"IndexList Props"}),e(b,{columns:_,data:P,border:!0,size:"small"})]}}),e(n,{id:"comp_item_props",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"data Props"}),e(b,{columns:_,data:L,border:!0,size:"small"})]}})]}})]}})),g})(),e(v,{data:$})]}export{H as default};
