import{c as f,u as b,i as F,a as e,S as t,T as i,P as u,B as E,g as _,aR as v,d as g,t as C}from"./index-380e038c.js";import{T as m}from"./Title-c09746a1.js";import{C as n}from"./index-c58932b7.js";import{D as a,a as d,C as B}from"./code-ca2ce82c.js";import{I as r}from"./index-138195b5.js";import{R as x,C as p}from"./index-d72d83f0.js";import{p as A,e as S}from"./columns-cd2d5c33.js";import{h as D}from"./hljs-37d3e333.js";import"./index-859eb939.js";import"./index-1e7dd28f.js";import"./index-b6e082a5.js";import"./index-eb54a7d0.js";import"./index-56f45df8.js";const I="<Input type='time'/>",z="<Input type='time' value='22:35:11' disabled/>",T=`<Row gutter={20}>
    <Col grid={0.33}>
        <Input type='time' value='22:35:11' size='large'/>
    </Col>
    <Col grid={0.33}>
        <Input type='time' value='22:35:11' />
    </Col>
    <Col grid={0.33}>
        <Input type='time' value='22:35:11' size='small'/>
    </Col>
</Row>`,H="<Input type='time' value='22:35:11' clearable/>",R=`<Input type='time' value='22:35:11' clearable format="HH时mm分ss秒"/>`,P="<Input type='time' hourStep={2} minuteStep={5} secondStep={15}/>",j="<Input type='time' header={'开始时间'} footer='底部'/>",k=`<Input type='time' disabledTime={(num: number, type: string) => {
    if ((type === 'minute' || type === 'second') && num % 3 === 0) {
        return true;
    }
    return false;
}}/>`,w=`<Input type='timeRange' format="HH时mm分ss秒"/>`,J=`const [time, setTime] = createSignal('');

<Input type='time' value={[time, setTime]} trigger={() => {
    return <Button type='primary' >
        {time() ? dayjs(time()).format('HH:mm:ss') : '请选择时间'}
    </Button>
}}/>`,X=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"align",desc:"下拉位置bottomLeft|bottomRight",type:"string",default:"bottomRight"},{name:"format",desc:"时间格式化同dayjs",type:"string",default:""},{name:"prepend",desc:"前缀",type:"JSXElement",default:""},{name:"disabledTime",desc:"禁用时间的回调函数，参数number和type",type:"Function",default:""},{name:"hourStep",desc:"小时步长",type:"number",default:"1"},{name:"minuteStep",desc:"分钟步长",type:"number",default:"1"},{name:"secondStep",desc:"分钟步长",type:"number",default:"1"},{name:"header",desc:"头部内容",type:"JSXElement",default:""},{name:"footer",desc:"底部内容",type:"JSXElement",default:""},{name:"seperator",desc:"timeRange的分隔符",type:"string",default:"~"},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"placeholder",desc:"placeholder",type:"string",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""},{name:"theme",desc:"主题 light|dark",type:"string",default:"light"}],L=[{name:"onChange",desc:"值改变事件",params:"checked,value"}],O=[{id:"time_base",text:"基础用法"},{id:"time_disabled",text:"禁用"},{id:"time_size",text:"尺寸"},{id:"time_clearable",text:"可清空"},{id:"time_format",text:"格式化"},{id:"time_step",text:"步长"},{id:"time_head",text:"头部底部"},{id:"time_disable_time",text:"不可用时间"},{id:"time_range",text:"时间范围"},{id:"time_trigger",text:"触发元素"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],l={time_base:I,time_disabled:z,time_size:T,time_clearable:H,time_format:R,time_step:P,time_head:j,time_disable_time:k,time_range:w,time_trigger:J},$=C('<div class="sys-ctx-main-left">');function re(){const[s,y]=f("");return[(()=>{const c=$();return b(D,c,()=>""),F(c,e(t,{dir:"v",size:32,get children(){return[e(m,{heading:2,children:"Timepicker 时间选择"}),e(t,{id:"time_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time"}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(d,{get data(){return l.time_base}})]}})}}),e(t,{id:"time_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",value:"22:35:11",disabled:!0}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"可禁用"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用disabled禁用"}),e(d,{get data(){return l.time_disabled}})]}})}}),e(t,{id:"time_size",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(x,{gutter:20,get children(){return[e(p,{grid:.33,get children(){return e(r,{type:"time",value:"22:35:11",size:"large"})}}),e(p,{grid:.33,get children(){return e(r,{type:"time",value:"22:35:11"})}}),e(p,{grid:.33,get children(){return e(r,{type:"time",value:"22:35:11",size:"small"})}})]}}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"尺寸"})}}),e(u,{type:"secondary",spacing:"extended",children:"size 支持small和large"}),e(d,{get data(){return l.time_size}})]}})}}),e(t,{id:"time_clearable",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",value:"22:35:11",clearable:!0}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"可清空"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置 clearable 选择后可清空"}),e(d,{get data(){return l.time_clearable}})]}})}}),e(t,{id:"time_format",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",value:"22:35:11",clearable:!0,format:"HH时mm分ss秒"}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"格式化"})}}),e(u,{type:"secondary",spacing:"extended",children:"通过 format 可自定义时间显示格式，格式同dayjs"}),e(d,{get data(){return l.time_format}})]}})}}),e(t,{id:"time_step",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",hourStep:2,minuteStep:5,secondStep:15}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"步长"})}}),e(u,{type:"secondary",spacing:"extended",children:"hourStep、minuteStep、secondStep 可分别设置小时分钟秒的显示步长"}),e(d,{get data(){return l.time_step}})]}})}}),e(t,{id:"time_head",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",header:"开始时间",footer:"底部"}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"头部底部"})}}),e(u,{type:"secondary",spacing:"extended",children:"header/footer 可分别设置头部显示内容和底部显示内容"}),e(d,{get data(){return l.time_head}})]}})}}),e(t,{id:"time_disable_time",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",disabledTime:(h,o)=>(o==="minute"||o==="second")&&h%3===0}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"不可用时间"})}}),e(u,{type:"secondary",spacing:"extended",children:"header/footer 可分别设置头部显示内容和底部显示内容"}),e(d,{get data(){return l.time_disable_time}})]}})}}),e(t,{id:"time_range",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"timeRange",format:"HH时mm分ss秒"}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"时间范围"})}}),e(u,{type:"secondary",spacing:"extended",children:"type 支持time和timeRange， timeRange为时间范围选择"}),e(d,{get data(){return l.time_range}})]}})}}),e(t,{id:"time_trigger",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"time",value:[s,y],trigger:()=>e(E,{type:"primary",get children(){return _(()=>!!s())()?v(s()).format("HH:mm:ss"):"请选择时间"}})}),e(a,{align:"left",get children(){return e(i,{type:"primary",children:"触发元素"})}}),e(u,{type:"secondary",spacing:"extended",children:"通过trigger可设置自定义触发元素"}),e(d,{get data(){return l.time_trigger}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(m,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"TimePicker Props"}),e(g,{columns:A,data:X,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"Events"}),e(g,{columns:S,data:L,border:!0,size:"small"})]}})]}})]}})),c})(),e(B,{data:O})]}export{re as default};
