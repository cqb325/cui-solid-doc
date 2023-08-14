import{c as C,u as O,i as P,a as e,S as i,aE as r,T as t,P as a,K as R,M as F,B as p,d as _,t as H}from"./index-0bf9b376.js";import{T as y}from"./Title-cbc6ae43.js";import{C as l}from"./index-db8a9f9f.js";import{D as u,a as c,C as J}from"./code-a73a8c0d.js";import{p as b,e as N}from"./columns-cd2d5c33.js";import{h as X}from"./hljs-679eb70e.js";const K=`const data1 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data1}/>`,L=`const data2 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]
const [opened, setOpened]: any = createSignal(['zhejiang']);

<Tree data={data2} opened={[opened, setOpened]}/>`,q=`const data3 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

const [opened, setOpened]: any = createSignal(['zhejiang']);
const [selected, setSelected]: any = createSignal('xihu');

<Tree data={data3} opened={[opened, setOpened]} selected={[selected, setSelected]} onSelect={(node: any) => {
    console.log(node);
}}/>`,G=`const data4 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data4} multi/>`,Q=`const data5 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data5} multi checkRelation='unRelated'/>`,U=`const data6 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫', disabled: true},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]
<Tree data={data6} multi />`,V=`const data7 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data7} multi directory />`,W=`const data8 = [];
for (let i = 0; i < 1 + Math.random() * 5; i++) {
    data8.push({title: \`node_\${i}\`, id: \`\${i}\`, loading: true});
}

<Tree data={data8} multi directory loadData={(data: any) => {
    return new Promise((resolve) => {
        const d: any = [];
        for (let i = 0; i < 1 + Math.random() * 5; i++) {
            d.push({title: \`node_\${data.id}_\${i}\`, id: \`\${data.id}_\${i}\`});
        }
        setTimeout(() => {
            resolve(d);
        }, 1000);
    });
}}/>`,Y=`const data9 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data9} multi directory onContextMenu={(data: any) => {
    console.log(data);
}} contextMenu={<DropdownMenu>
    <DropdownItem name='add'>添加</DropdownItem>
    <DropdownItem name='modity'>修改</DropdownItem>
</DropdownMenu>} onSelectMenu={(name: string) => {
    console.log(name);
}}/>`,Z=`let tree: any;
const data10 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data10} multi directory ref={tree}/>
                        
<Space dir="v">
    <Space dir="h">
        <Button onClick={() => {
            tree.checkNode('xihu', true);
        }}>勾选</Button>
    </Space>
    <Space>
        <Button type='primary' onClick={() => {
            console.log(tree.getAllChecked());
        }}>AllChecked</Button>
        <Button type='primary' onClick={() => {
            console.log(tree.getHalfChecked());
        }}>HalfChecked</Button>
        <Button type='primary' onClick={() => {
            console.log(tree.getChildChecked());
        }}>ChildChecked</Button>
        <Button type='primary' onClick={() => {
            console.log(tree.getShallowChecked());
        }}>Shallow</Button>
    </Space>
</Space>`,ee="const [data11, setData11]: any = createSignal([{id: '1', title: '动态数据'}]);\n\n<Tree data={data11()} multi directory/>\n<Button type='primary' onClick={() => {\n    const da = [];\n    for (let i = 0; i < 1 + Math.random() * 5; i++) {\n        let c = [];\n        for (let j = 0; j < 1 + Math.random() * 5; j++) {\n            c.push({title: `node_${i}_${j}`, id: `${i}_${j}`});\n        }\n        da.push({title: `node_${i}`, id: `${i}`, children: c});\n    }\n    setData11(da)\n}}>改变数据</Button>",te=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"data",desc:"源数据",type:"Array",default:""},{name:"opened",desc:"可控打开节点id",type:"Function[]",default:""},{name:"selected",desc:"可控选中节点id",type:"Function[]",default:""},{name:"ref",desc:"组件引用对象",type:"Object",default:""},{name:"gutter",desc:"错位距离",type:"number",default:"24"},{name:"value",desc:"可控值",type:"Function[]",default:""},{name:"multi",desc:"多选，显示复选框",type:"boolean",default:""},{name:"directory",desc:"显示目录图标",type:"boolean",default:""},{name:"loadData",desc:"配合数据项的loading",type:"Function",default:""},{name:"contextMenu",desc:"右键菜单配合DropdownMenu使用",type:"JSXElement",default:""},{name:"checkRelation",desc:"选择框的级联关系 related|unRelated ",type:"string",default:"related"},{name:"onSelect",desc:"节点选中事件",type:"Function",default:""},{name:"onChange",desc:"复选框选中事件",type:"Function",default:""},{name:"onContextMenu",desc:"右键菜单事件",type:"Function",default:""},{name:"onSelectMenu",desc:"右键菜单项选中事件",type:"Function",default:""}],ie=[{name:"id",desc:"数据项标识字段",type:"string|number",default:""},{name:"title",desc:"节点名称",type:"string",default:""},{name:"loading",desc:"动态加载节点",type:"boolean",default:""},{name:"icon",desc:"自定义图标",type:"any",default:""},{name:"disabled",desc:"节点禁用",type:"boolean",default:""},{name:"patch",desc:"追加数据",type:"JSXElement",default:""}],de=[{name:"onSelect",desc:"节点选中事件",params:"node"},{name:"onChange",desc:"复选框选中事件",params:"value"},{name:"onContextMenu",desc:"右键菜单事件",params:"node"},{name:"onSelectMenu",desc:"右键菜单项选中事件",params:"name"}],ne=[{id:"tree_base",text:"基础用法"},{id:"tree_opened",text:"默认展开"},{id:"tree_selected",text:"默认选中"},{id:"tree_multi",text:"级联多选"},{id:"tree_multi_unrelate",text:"非级联多选"},{id:"tree_disabled",text:"禁用"},{id:"tree_directory",text:"目录图标"},{id:"tree_loadData",text:"动态加载"},{id:"tree_contextmenu",text:"右键菜单"},{id:"tree_methods",text:"实例接口"},{id:"tree_data",text:"可控数据"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_dataprops",text:"数据项属性"},{id:"comp_events",text:"事件"}],o={tree_base:K,tree_opened:L,tree_selected:q,tree_multi:G,tree_multi_unrelate:Q,tree_disabled:U,tree_directory:V,tree_loadData:W,tree_contextmenu:Y,tree_methods:Z,tree_data:ee},re=H('<div class="sys-ctx-main-left">');function he(){const[E,f]=C(["zhejiang"]),[D,j]=C("xihu");C([]);const[B,A]=C([{id:"1",title:"动态数据"}]);let g;const k=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],S=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],v=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],z=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],$=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],M=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫",disabled:!0},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],T=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],x=[];for(let h=0;h<1+Math.random()*5;h++)x.push({title:`node_${h}`,id:`${h}`,loading:!0});const w=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}],I=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}];return[(()=>{const h=re();return O(X,h,()=>""),P(h,e(i,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Tree 树状控件"}),e(i,{id:"tree_base",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:k}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"基础用法"})}}),e(a,{type:"secondary",spacing:"extended",children:"Tree 传入data数据展示树状组件"}),e(c,{get data(){return o.tree_base}})]}})}}),e(i,{id:"tree_opened",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:S,opened:[E,f]}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"默认展开"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"opened"})," 参数控制默认打开的节点"]}}),e(c,{get data(){return o.tree_opened}})]}})}}),e(i,{id:"tree_selected",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:v,opened:[E,f],selected:[D,j],onSelect:d=>{console.log(d)}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"默认选中"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"selected"})," 参数控制选中的节点"]}}),e(c,{get data(){return o.tree_selected}})]}})}}),e(i,{id:"tree_multi",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:z,multi:!0}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"级联多选"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["设置",e(t,{code:!0,children:"multi"})," 参数可以进行多选，默认级联"]}}),e(c,{get data(){return o.tree_multi}})]}})}}),e(i,{id:"tree_multi_unrelate",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:$,multi:!0,checkRelation:"unRelated"}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"非级联多选"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"checkRelation"})," 参数可以设置多选场景下的级联情况，",e(t,{code:!0,children:"unRelated"}),"非级联 ",e(t,{code:!0,children:"related"})," 级联"]}}),e(c,{get data(){return o.tree_multi_unrelate}})]}})}}),e(i,{id:"tree_disabled",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:M,multi:!0}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"禁用"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["数据项添加 ",e(t,{code:!0,children:"disabled"})," 参数可以禁用节点"]}}),e(c,{get data(){return o.tree_disabled}})]}})}}),e(i,{id:"tree_directory",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:T,multi:!0,directory:!0}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"目录图标"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["添加",e(t,{code:!0,children:"directory"})," 参数可以显示目录图标"]}}),e(c,{get data(){return o.tree_directory}})]}})}}),e(i,{id:"tree_loadData",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:x,multi:!0,directory:!0,loadData:d=>new Promise(n=>{const m=[];for(let s=0;s<1+Math.random()*5;s++)m.push({title:`node_${d.id}_${s}`,id:`${d.id}_${s}`});setTimeout(()=>{n(m)},1e3)})}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"动态加载"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["数据项存在",e(t,{code:!0,children:"loading"})," 参数， 可通过 ",e(t,{code:!0,children:"loadData"})," 方法动态加载子节点"]}}),e(c,{get data(){return o.tree_loadData}})]}})}}),e(i,{id:"tree_contextmenu",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:w,multi:!0,directory:!0,onContextMenu:d=>{console.log(d)},get contextMenu(){return e(R,{get children(){return[e(F,{name:"add",children:"添加"}),e(F,{name:"modity",children:"修改"})]}})},onSelectMenu:d=>{console.log(d)}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"右键菜单"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["数据项存在",e(t,{code:!0,children:"loading"})," 参数， 可通过 ",e(t,{code:!0,children:"loadData"})," 方法动态加载子节点"]}}),e(c,{get data(){return o.tree_contextmenu}})]}})}}),e(i,{id:"tree_methods",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{data:I,multi:!0,directory:!0,ref(d){const n=g;typeof n=="function"?n(d):g=d}}),e(i,{dir:"v",get children(){return[e(i,{dir:"h",get children(){return e(p,{onClick:()=>{g.checkNode("xihu",!0)},children:"勾选"})}}),e(i,{get children(){return[e(p,{type:"primary",onClick:()=>{console.log(g.getAllChecked())},children:"AllChecked"}),e(p,{type:"primary",onClick:()=>{console.log(g.getHalfChecked())},children:"HalfChecked"}),e(p,{type:"primary",onClick:()=>{console.log(g.getChildChecked())},children:"ChildChecked"}),e(p,{type:"primary",onClick:()=>{console.log(g.getShallowChecked())},children:"Shallow"})]}})]}}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"接口"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["数据项存在",e(t,{code:!0,children:"loading"})," 参数， 可通过 ",e(t,{code:!0,children:"loadData"})," 方法动态加载子节点"]}}),e(c,{get data(){return o.tree_methods}})]}})}}),e(i,{id:"tree_data",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(r,{get data(){return B()},multi:!0,directory:!0}),e(p,{type:"primary",onClick:()=>{const d=[];for(let n=0;n<1+Math.random()*5;n++){let m=[];for(let s=0;s<1+Math.random()*5;s++)m.push({title:`node_${n}_${s}`,id:`${n}_${s}`});d.push({title:`node_${n}`,id:`${n}`,children:m})}A(d)},children:"改变数据"}),e(u,{align:"left",get children(){return e(t,{type:"primary",children:"可控数据"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["数据项存在",e(t,{code:!0,children:"loading"})," 参数， 可通过 ",e(t,{code:!0,children:"loadData"})," 方法动态加载子节点"]}}),e(c,{get data(){return o.tree_data}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Tree Props"}),e(_,{columns:b,data:te,border:!0,size:"small"})]}}),e(i,{id:"comp_dataprops",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"数据项属性"}),e(_,{columns:b,data:ie,border:!0,size:"small"})]}}),e(i,{id:"comp_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Events"}),e(_,{columns:N,data:de,border:!0,size:"small"})]}})]}})]}})),h})(),e(J,{data:ne})]}export{he as default};
