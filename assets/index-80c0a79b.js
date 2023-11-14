import{c as y,u as f,i as T,a as e,S as r,a7 as t,B as h,T as s,P as n,I as S,d as m,t as v}from"./index-09986a33.js";import{C as p}from"./index-8452e71d.js";import{D as c,a as d,C as _}from"./code-635398dd.js";import{T as a}from"./Title-c78d5eaf.js";import{h as F}from"./hljs-f59721e8.js";import{p as g}from"./columns-cd2d5c33.js";const C=`const [current, setCurrent] = createSignal(0);

<Space dir="v">
    <Steps current={current()}>
        <Steps.Step title='First' description='This is a description.' />
        <Steps.Step title='Second' description='This is a description.' />
        <Steps.Step title='Third' description='This is a description.' />
    </Steps>
    <Space dir="h">
        <Button type="primary" onClick={() => {
            setCurrent(current() - 1);
        }}>Prev</Button>
        <Button type="primary" onClick={() => {
            setCurrent(current() + 1);
        }}>Next</Button>
    </Space>
</Space>`,B=`<Space dir="v">
    <Steps current={current()} size="small">
        <Steps.Step title='First' description='This is a description.' />
        <Steps.Step title='Second' description='This is a description.' />
        <Steps.Step title='Third' description='This is a description.' />
    </Steps>
</Space>`,b=`<Space dir="v">
    <Steps current={current()} dir="v">
        <Steps.Step title='First' description='This is a description.' />
        <Steps.Step title='Second' description='This is a description.' />
        <Steps.Step title='Third' description='This is a description.' />
    </Steps>
</Space>`,x=`<Space dir="v">
    <Steps current={current()}>
        <Steps.Step title='已完成'/>
        <Steps.Step title='进行中' status='process' icon={<Icon name='cog' size={26}/>}/>
        <Steps.Step title='错误' status="error"/>
        <Steps.Step title='告警' status="warning"/>
        <Steps.Step title='等待' status="wait" icon={<Icon name='lock' size={26}/>}/>
    </Steps>
</Space>
`,A=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"size",desc:"分页尺寸 small",type:"string",default:""},{name:"current",desc:"当前步骤",type:"number",default:"0"},{name:"dir",desc:"方向 v|h",type:"string",default:"h"}],D=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"title",desc:"标题",type:"JSXElement|string",default:""},{name:"description",desc:"步骤描述",type:"JSXElement|string",default:""},{name:"icon",desc:"自定义图标",type:"JSXElement",default:""},{name:"status",desc:"finished|process|error|warning|wait",type:"string",default:""}],z=[{id:"steps_base",text:"基础用法"},{id:"steps_mini",text:"迷你型"},{id:"steps_v",text:"垂直步骤"},{id:"steps_icon",text:"状态和图标"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_itemprops",text:"Step属性"}],u={steps_base:C,steps_mini:B,steps_v:b,steps_icon:x},w=v('<div class="sys-ctx-main-left">');function J(){const[i,l]=y(0);return[(()=>{const o=w();return f(F,o,()=>""),T(o,e(r,{dir:"v",size:32,get children(){return[e(a,{heading:2,children:"Steps 步骤"}),e(r,{id:"steps_base",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{get current(){return i()},get children(){return[e(t.Step,{title:"First",description:"This is a description."}),e(t.Step,{title:"Second",description:"This is a description."}),e(t.Step,{title:"Third",description:"This is a description."})]}}),e(r,{dir:"h",get children(){return[e(h,{type:"primary",onClick:()=>{l(i()-1)},children:"Prev"}),e(h,{type:"primary",onClick:()=>{l(i()+1)},children:"Next"})]}})]}}),e(c,{align:"left",get children(){return e(s,{type:"primary",children:"基础用法"})}}),e(n,{type:"secondary",spacing:"extended",children:"基础用法"}),e(d,{get data(){return u.steps_base}})]}})}}),e(r,{id:"steps_mini",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{get current(){return i()},size:"small",get children(){return[e(t.Step,{title:"First",description:"This is a description."}),e(t.Step,{title:"Second",description:"This is a description."}),e(t.Step,{title:"Third",description:"This is a description."})]}})}}),e(c,{align:"left",get children(){return e(s,{type:"primary",children:"迷你型"})}}),e(n,{type:"secondary",spacing:"extended",children:"迷你型"}),e(d,{get data(){return u.steps_mini}})]}})}}),e(r,{id:"steps_v",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{get current(){return i()},dir:"v",get children(){return[e(t.Step,{title:"First",description:"This is a description."}),e(t.Step,{title:"Second",description:"This is a description."}),e(t.Step,{title:"Third",description:"This is a description."})]}})}}),e(c,{align:"left",get children(){return e(s,{type:"primary",children:"垂直步骤"})}}),e(n,{type:"secondary",spacing:"extended",children:"dir='v' 垂直步骤"}),e(d,{get data(){return u.steps_v}})]}})}}),e(r,{id:"steps_icon",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{get current(){return i()},get children(){return[e(t.Step,{title:"已完成"}),e(t.Step,{title:"进行中",status:"process",get icon(){return e(S,{name:"cog",size:26})}}),e(t.Step,{title:"错误",status:"error"}),e(t.Step,{title:"告警",status:"warning"}),e(t.Step,{title:"等待",status:"wait",get icon(){return e(S,{name:"lock",size:26})}})]}})}}),e(c,{align:"left",get children(){return e(s,{type:"primary",children:"状态和图标"})}}),e(n,{type:"secondary",spacing:"extended",children:"status 支持 finished process error warning wait 其中finished状态、warning和error状态有默认图标"}),e(d,{get data(){return u.steps_icon}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(a,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"Steps Props"}),e(m,{columns:g,data:A,border:!0,size:"small"})]}}),e(r,{id:"comp_itemprops",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"Step Props"}),e(m,{columns:g,data:D,border:!0,size:"small"})]}})]}})]}})),o})(),e(_,{data:z})]}export{J as default};
