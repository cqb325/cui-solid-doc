import{c as v,u as _,i as C,a as e,S as r,aU as t,T as n,P as u,B as c,I as l,d as f,t as k}from"./index-602cfbf2.js";import{T as m}from"./Title-c2e5d943.js";import{C as s}from"./index-b85a489d.js";import{D as i,a,C as x}from"./code-fa44278e.js";import{p as B}from"./columns-cd2d5c33.js";import{h as P}from"./hljs-c6aaaaf8.js";const S=`<Space dir="v">
    <Progress value={30} />
    <Progress value={50} status='active'/>
    <Progress value={70} status='error'/>
    <Progress value={100} />
</Space>`,F=`<Space dir="v">
    <Progress value={70} textInside strokeWidth={16}/>
    <Progress value={70} textInside strokeWidth={16} status="active"/>
    <Progress value={100} textInside strokeWidth={16}/>
</Space>`,A=`<Space dir="v">
    <Progress value={70} strokeWidth={5}/>
    <Progress value={70} textInside strokeWidth={16} status="active"/>
</Space>`,b=`<Space dir="v">
    <Progress value={70} hidePercent/>
</Space>`,D=`const [value, setValue] = createSignal(0);

<Space dir="v">
    <Progress value={value()} />
    <Space dir="h">
        <Button type='primary' icon={<Icon name='plus'/>} onClick={() => {
            setValue(value() + 1);
        }}></Button>
        <Button type='primary' icon={<Icon name='minus'/>} onClick={() => {
            setValue(value() - 1);
        }}></Button>
    </Space>
</Space>`,I="<Progress value={50} strokeColor={['#108ee9', '#87d068', '#d9363e']}/>",W=`const [value2, setValue2] = createSignal(20);

<Space dir="h" inline>
    <Progress type='circle' value={value2()}/>
    </Space>
    <Space dir="h">
    <Button type='primary' icon={<Icon name='plus'/>} onClick={() => {
        setValue2(value2() + 5);
    }}></Button>
    <Button type='primary' icon={<Icon name='minus'/>} onClick={() => {
        setValue2(value2() - 5);
    }}></Button>
</Space>`,V=`const [value2, setValue2] = createSignal(20);

<Space dir="h" inline>
    <Progress type='circle' value={value2()} strokeColor={[
        {percent: 20, color: '#108ee9'},
        {percent: 50, color: '#87d068'},
        {percent: 70, color: '#d9363e'}
    ]}/>
</Space>
<Space dir="h">
    <Button type='primary' icon={<Icon name='plus'/>} onClick={() => {
        setValue2(value2() + 5);
    }}></Button>
    <Button type='primary' icon={<Icon name='minus'/>} onClick={() => {
        setValue2(value2() - 5);
    }}></Button>
</Space>`,T=`<Space dir="h" inline>
    <Progress type='circle' value={100} infoRender={(sta: string, value: number) => {
        if (value === 100) {
            return '完成'
        } else {
            return '进行中'
        }
    }}/>
</Space>`,w=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"hidePercent",desc:"隐藏百分比",type:"boolean",default:""},{name:"status",desc:"状态 normal|error|active|success",type:"string",default:"normal"},{name:"value",desc:"可控值",type:"number",default:""},{name:"strokeWidth",desc:"宽度",type:"number",default:""},{name:"textInside",desc:"内显文案",type:"boolean",default:""},{name:"infoRender",desc:"自定义文案",type:"Function",default:""},{name:"strokeColor",desc:"颜色",type:"string | string[] | StrokeProps[]",default:""},{name:"type",desc:"类型 line|circle",type:"string",default:"line"},{name:"radius",desc:"半径",type:"number",default:"60"},{name:"max",desc:"最大值",type:"number",default:"100"}],R=[{id:"progress_base",text:"基础用法"},{id:"progress_inside",text:"内部文案"},{id:"progress_strokewidth",text:"宽度"},{id:"progress_hide",text:"隐藏文案"},{id:"progress_control",text:"控制"},{id:"progress_color",text:"渐变色"},{id:"progress_circle",text:"圆形"},{id:"progress_colors",text:"色阶"},{id:"progress_render",text:"自定义文案"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],d={progress_base:S,progress_inside:F,progress_strokewidth:A,progress_hide:b,progress_control:D,progress_color:I,progress_circle:W,progress_colors:V,progress_render:T},j=k('<div class="sys-ctx-main-left">');function H(){const[g,y]=v(0),[o,p]=v(20);return[(()=>{const h=j();return _(P,h,()=>""),C(h,e(r,{dir:"v",size:32,get children(){return[e(m,{heading:2,children:"Progress 进度条"}),e(r,{id:"progress_base",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{value:30}),e(t,{value:50,status:"active"}),e(t,{value:70,status:"error"}),e(t,{value:100})]}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(a,{get data(){return d.progress_base}})]}})}}),e(r,{id:"progress_inside",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{value:70,textInside:!0,strokeWidth:16}),e(t,{value:70,textInside:!0,strokeWidth:16,status:"active"}),e(t,{value:100,textInside:!0,strokeWidth:16})]}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"内部文案"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置 textInside 可以让文案显示在内部"}),e(a,{get data(){return d.progress_inside}})]}})}}),e(r,{id:"progress_strokewidth",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{value:70,strokeWidth:5}),e(t,{value:70,textInside:!0,strokeWidth:16,status:"active"})]}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"宽度"})}}),e(u,{type:"secondary",spacing:"extended",children:"通过 strokeWidth 可以自定义进度条的粗细"}),e(a,{get data(){return d.progress_strokewidth}})]}})}}),e(r,{id:"progress_hide",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{value:70,hidePercent:!0})}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"隐藏文案"})}}),e(u,{type:"secondary",spacing:"extended",children:"通过 hidePercent 可以隐藏文案"}),e(a,{get data(){return d.progress_hide}})]}})}}),e(r,{id:"progress_control",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{get value(){return g()}}),e(r,{dir:"h",get children(){return[e(c,{type:"primary",get icon(){return e(l,{name:"plus"})},onClick:()=>{y(g()+1)}}),e(c,{type:"primary",get icon(){return e(l,{name:"minus"})},onClick:()=>{y(g()-1)}})]}})]}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"控制"})}}),e(u,{type:"secondary",spacing:"extended",children:"value 可控参数"}),e(a,{get data(){return d.progress_control}})]}})}}),e(r,{id:"progress_color",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(t,{value:50,strokeColor:["#108ee9","#87d068","#d9363e"]}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"渐变色"})}}),e(u,{type:"secondary",spacing:"extended",children:"strokeColor 传入数组的时候可显示渐变色"}),e(a,{get data(){return d.progress_color}})]}})}}),e(r,{id:"progress_circle",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",inline:!0,get children(){return e(t,{type:"circle",get value(){return o()}})}}),e(r,{dir:"h",get children(){return[e(c,{type:"primary",get icon(){return e(l,{name:"plus"})},onClick:()=>{p(o()+5)}}),e(c,{type:"primary",get icon(){return e(l,{name:"minus"})},onClick:()=>{p(o()-5)}})]}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"圆形"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置type='circle' 可以渲染圆形进度条"}),e(a,{get data(){return d.progress_circle}})]}})}}),e(r,{id:"progress_colors",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",inline:!0,get children(){return e(t,{type:"circle",get value(){return o()},strokeColor:[{percent:20,color:"#108ee9"},{percent:50,color:"#87d068"},{percent:70,color:"#d9363e"}]})}}),e(r,{dir:"h",get children(){return[e(c,{type:"primary",get icon(){return e(l,{name:"plus"})},onClick:()=>{p(o()+5)}}),e(c,{type:"primary",get icon(){return e(l,{name:"minus"})},onClick:()=>{p(o()-5)}})]}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"色阶"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置 strokeColor 数组可以在不同进度阶段 显示不同颜色"}),e(a,{get data(){return d.progress_colors}})]}})}}),e(r,{id:"progress_render",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",inline:!0,get children(){return e(t,{type:"circle",value:100,infoRender:(z,E)=>E===100?"完成":"进行中"})}}),e(i,{align:"left",get children(){return e(n,{type:"primary",children:"自定义文案"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置 infoRender 函数可以自定义渲染提示文案"}),e(a,{get data(){return d.progress_render}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(m,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"Progress Props"}),e(f,{columns:B,data:w,border:!0,size:"small"})]}})]}})]}})),h})(),e(x,{data:R})]}export{H as default};
