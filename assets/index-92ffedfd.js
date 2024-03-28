import{c as y,u as F,i as _,a as e,S as u,T as a,I as E,B,F as v,t as x}from"./index-69f0698f.js";import{T as r}from"./index-15a4b690.js";import{T as b}from"./Title-48407536.js";import{C as n}from"./index-295b9dac.js";import{D as i,a as d,T as p,p as h,e as f,C}from"./code-0a2ad5d4.js";import{P as c}from"./Paragraph-6df96914.js";import{h as D}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const t=m=>m,A=`<Tabs activeName="tab1">
    <Tab title='标签一' name='tab1'>标签一的内容</Tab>
    <Tab title='标签二' name='tab2'>标签二的内容</Tab>
    <Tab title='标签三' name='tab3'>标签三的内容</Tab>
</Tabs>`,N=`<Tabs activeName="tab1">
    <Tab title='标签一' name='tab1'>标签一的内容</Tab>
    <Tab title='标签二' disabled name='tab2'>标签二的内容</Tab>
    <Tab title='标签三' name='tab3'>标签三的内容</Tab>
</Tabs>`,I=`<Tabs activeName="tab1" duration={0}>
    <Tab title='标签一' name='tab1'>标签一的内容</Tab>
    <Tab title='标签二' name='tab2'>标签二的内容</Tab>
    <Tab title='标签三' name='tab3'>标签三的内容</Tab>
</Tabs>`,P=`<Tabs activeName="tab1">
    <Tab title='标签一' name='tab1' icon={<Icon name='codesandbox'/>}>标签一的内容</Tab>
    <Tab title='标签二' name='tab2' icon={<Icon name='command'/>}>标签二的内容</Tab>
    <Tab title='标签三' name='tab3' icon={<Icon name='support'/>}>标签三的内容</Tab>
</Tabs>`,z=`<Tabs activeName="tab1" card>
    <Tab title='标签一' name='tab1'>标签一的内容</Tab>
    <Tab title='标签二' name='tab2'>标签二的内容</Tab>
    <Tab title='标签三' name='tab3'>标签三的内容</Tab>
</Tabs>`,j=`<Tabs activeName="tab1" extra={<Button size='small'>添加</Button>}>
    <Tab title='标签一' name='tab1'>标签一的内容</Tab>
    <Tab title='标签二' name='tab2'>标签二的内容</Tab>
    <Tab title='标签三' name='tab3'>标签三的内容</Tab>
</Tabs>`,S=`const [data, setData]: [any, any] = createSignal([
    {
        title: '标签一',
        name: 'tab1',
        context: '标签一内容'
    }
]);

<Tabs activeName="tab1" card>
    <For each={data()}>
        {(item: any)=> {
            return <Tab title={item.title} name={item.name} closeable>{item.context}</Tab>
        }}
    </For>
</Tabs>`,O=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"card",desc:"卡片标签",type:"boolean",default:""},{name:"activeName",desc:"当前活跃的标签,和Tab的name对应",type:"string",default:""},{name:"extra",desc:"额外内容",type:"JSXElement",default:""},{name:"onTabClick",desc:"标签页点击事件",type:"Function",default:""},{name:"onRemove",desc:"标签删除事件",type:"Function",default:""}],$=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"title",desc:"标签标题",type:"any",default:""},{name:"name",desc:"标签页名称，标签页的标识",type:"string",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"closeable",desc:"可关闭标签页",type:"boolean",default:""},{name:"icon",desc:"标签图标",type:"Icon",default:""}],k=[{name:"onTabClick",desc:"标签页点击事件",params:"ItemConfig"},{name:"onRemove",desc:"标签删除事件",params:"name"}],L=[{id:"tabs_base",text:"基础用法"},{id:"tabs_disabled",text:"禁用"},{id:"tabs_duration",text:"动画时间"},{id:"tabs_icon",text:"图标"},{id:"tabs_card",text:"卡片"},{id:"tabs_extra",text:"附加内容"},{id:"tabs_danymic",text:"动态"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_tab_props",text:"Tab属性"},{id:"comp_events",text:"事件"}],l={tabs_base:A,tabs_disabled:N,tabs_duration:I,tabs_icon:P,tabs_card:z,tabs_extra:j,tabs_danymic:S},R=x('<div class="sys-ctx-main-left">');function Q(){const[m,g]=y([{title:"标签一",name:"tab1",context:"标签一内容"}]);let T=1;return[(()=>{const o=R();return F(D,o,()=>""),o.style.setProperty("width","0"),_(o,e(u,{dir:"v",size:32,get children(){return[e(b,{heading:2,children:"Tabs 标签页"}),e(u,{id:"tabs_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",get children(){return[e(t,{title:"标签一",name:"tab1",children:"标签一的内容"}),e(t,{title:"标签二",name:"tab2",children:"标签二的内容"}),e(t,{title:"标签三",name:"tab3",children:"标签三的内容"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(c,{type:"secondary",spacing:"extended",children:"Tabs的activeName与Tab的name对应，用于标识当前激活的是哪一项"}),e(d,{get data(){return l.tabs_base}})]}})}}),e(u,{id:"tabs_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",get children(){return[e(t,{title:"标签一",name:"tab1",children:"标签一的内容"}),e(t,{title:"标签二",disabled:!0,name:"tab2",children:"标签二的内容"}),e(t,{title:"标签三",name:"tab3",children:"标签三的内容"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"禁用"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["使用 ",e(a,{code:!0,children:"disabled"})," 可以禁用某一项"]}}),e(d,{get data(){return l.tabs_disabled}})]}})}}),e(u,{id:"tabs_duration",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",duration:0,get children(){return[e(t,{title:"标签一",name:"tab1",children:"标签一的内容"}),e(t,{title:"标签二",name:"tab2",children:"标签二的内容"}),e(t,{title:"标签三",name:"tab3",children:"标签三的内容"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"动画时间"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["使用 ",e(a,{code:!0,children:"duration"})," 可以修改动画时间"]}}),e(d,{get data(){return l.tabs_duration}})]}})}}),e(u,{id:"tabs_icon",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",get children(){return[e(t,{title:"标签一",name:"tab1",get icon(){return e(E,{name:"codesandbox"})},children:"标签一的内容"}),e(t,{title:"标签二",name:"tab2",get icon(){return e(E,{name:"command"})},children:"标签二的内容"}),e(t,{title:"标签三",name:"tab3",get icon(){return e(E,{name:"support"})},children:"标签三的内容"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"图标"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["使用 ",e(a,{code:!0,children:"icon"})," 可以给Tab添加图标"]}}),e(d,{get data(){return l.tabs_icon}})]}})}}),e(u,{id:"tabs_card",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",card:!0,get children(){return[e(t,{title:"标签一",name:"tab1",children:"标签一的内容"}),e(t,{title:"标签二",name:"tab2",children:"标签二的内容"}),e(t,{title:"标签三",name:"tab3",children:"标签三的内容"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"卡片"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["设置属性 ",e(a,{code:!0,children:"type"})," 为 ",e(a,{code:!0,children:"card"})," 可以显示卡片样式，常用于容器顶部。"]}}),e(d,{get data(){return l.tabs_card}})]}})}}),e(u,{id:"tabs_extra",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",get extra(){return e(B,{size:"small",children:"添加"})},get children(){return[e(t,{title:"标签一",name:"tab1",children:"标签一的内容"}),e(t,{title:"标签二",name:"tab2",children:"标签二的内容"}),e(t,{title:"标签三",name:"tab3",children:"标签三的内容"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"附加内容"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["使用 ",e(a,{code:!0,children:"extra"})," 可以在页签右边添加附加操作"]}}),e(d,{get data(){return l.tabs_extra}})]}})}}),e(u,{id:"tabs_danymic",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{activeName:"tab1",card:!0,get children(){return e(v,{get each(){return m()},children:s=>e(t,{get title(){return s.title},get name(){return s.name},closeable:!0,get children(){return s.context}})})}}),e(B,{type:"primary",onClick:()=>{const s=T++;g([...m(),{title:`Title_${s}`,name:`tab_${s}`,context:"新增tab内容"}])},children:"添加"}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"动态tab"})}}),e(c,{type:"secondary",spacing:"extended",children:"Tab添加 closeable 属性可以支持关闭Tab页。"}),e(d,{get data(){return l.tabs_danymic}})]}})}}),e(u,{dir:"v",size:24,id:"comp_api",get children(){return[e(b,{type:"primary",heading:3,children:"API"}),e(u,{id:"comp_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Tabs Props"}),e(p,{columns:h,data:O,border:!0,size:"small"})]}}),e(u,{id:"comp_tab_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Tab Props"}),e(p,{columns:h,data:$,border:!0,size:"small"})]}}),e(u,{id:"comp_events",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Tabs Events"}),e(p,{columns:f,data:k,border:!0,size:"small"})]}})]}})]}})),o})(),e(C,{data:L})]}export{Q as default};
