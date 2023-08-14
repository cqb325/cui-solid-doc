import{c as _,aR as h,u as D,i as F,a as e,S as t,T as r,P as n,at as a,B as y,d as b,t as f}from"./index-0bf9b376.js";import{T as o}from"./Title-cbc6ae43.js";import{C as d}from"./index-db8a9f9f.js";import{I as R}from"./index-cda6a703.js";import{D as u,a as i,C as x}from"./code-a73a8c0d.js";import{R as v,C as m}from"./index-3320e126.js";import{p as k,e as C}from"./columns-cd2d5c33.js";import{h as A}from"./hljs-679eb70e.js";import"./index-be4aede5.js";import"./index-5ae97041.js";import"./index-b6567141.js";import"./index-6ca95a8f.js";import"./index-9ea19dbc.js";const T="<Input type='date'/>",w="<Datepicker disabled/>",B=`<Row gutter={20}>
    <Col grid={0.33}>
        <Datepicker value='2023-05-01' size='large'/>
    </Col>
    <Col grid={0.33}>
        <Datepicker />
    </Col>
    <Col grid={0.33}>
        <Datepicker size='small'/>
    </Col>
</Row>`,z="<Datepicker clearable value='2023-05-01'/>",S=`<Datepicker clearable disabledDate={(date: Date) => {
    return date.getTime() > Date.now();
}}/>`,P=`<Datepicker clearable type='month' onChange={(date: Date) => {
    console.log(date);
}}/>`,j=`<Datepicker clearable type='monthRange' onChange={(dates: Date[]) => {
    console.log(dates);
}}/>`,I='<Datepicker clearable align="bottomRight"/>',J='<Datepicker clearable type="dateRange"/>',V='<Datepicker clearable type="dateRange" stick/>',X=`const [value, setValue] = createSignal<Date[]>([dayjs('2023-02-01').toDate(), dayjs('2023-05-15').toDate()]);

<Datepicker clearable value={[value, setValue]} stick shortCuts={<Space dir="v">
    <Button type="link" onClick={() => {
        const now = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 6);
        setValue([start, now]);
    }}>一周</Button>
    <Button type="text" onClick={() => {
        const now = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 30);
        setValue([start, now]);
    }}>一个月</Button>
</Space>} type='dateRange'/>`,L=`<Datepicker clearable type="dateTime" value='2023-04-05 15:35:30'/>`,O='<Datepicker clearable type="dateTimeRange" />',$='<Datepicker clearable type="dateRange" maxRange={7}/>',q=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"align",desc:"下拉位置bottomLeft|bottomRight",type:"string",default:"bottomRight"},{name:"format",desc:"格式化同dayjs",type:"string",default:""},{name:"theme",desc:"主题 light|dark",type:"string",default:"light"},{name:"prepend",desc:"前缀",type:"JSXElement",default:""},{name:"header",desc:"头部内容",type:"JSXElement",default:""},{name:"footer",desc:"底部内容",type:"JSXElement",default:""},{name:"seperator",desc:"timeRange的分隔符",type:"string",default:"~"},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"disabledDate",desc:"禁用日期的回调函数，参数Date",type:"Function",default:""},{name:"type",desc:"日期类型 支持 dateRange|monthRange|month|dateTime|dateTimeRange",type:"string",default:"date"},{name:"trigger",desc:"触发内容",type:"JSXElement",default:""},{name:"maxRange",desc:"日期范围可选最大跨度",type:"number",default:""},{name:"shortCuts",desc:"快捷选择区域",type:"Function|JSXElement",default:""},{name:"revers",desc:"超出后下拉是否翻转",type:"boolean",default:"true"},{name:"stick",desc:"daterange的月份是否粘连",type:"boolean",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],G=[{name:"onChange",desc:"值改变事件",params:"checked,value"}],H=[{id:"date_base",text:"基础用法"},{id:"date_disabled",text:"禁用"},{id:"date_size",text:"尺寸"},{id:"date_clearable",text:"可清空"},{id:"date_custom_disable",text:"不可用日期"},{id:"date_month",text:"月份"},{id:"date_monthRange",text:"月份范围"},{id:"date_align",text:"位置"},{id:"date_dateRange",text:"日期范围"},{id:"date_stick",text:"月份联动"},{id:"date_shortcut",text:"快捷选择"},{id:"date_dateTime",text:"日期时间"},{id:"date_dateTimeRange",text:"日期时间范围"},{id:"date_maxRange",text:"最大区间"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],l={date_base:T,date_disabled:w,date_size:B,date_clearable:z,date_custom_disable:S,date_month:P,date_monthRange:j,date_align:I,date_dateRange:J,date_stick:V,date_shortcut:X,date_dateTime:L,date_dateTimeRange:O,date_maxRange:$},K=f('<div class="sys-ctx-main-left">');function ue(){const[E,g]=_([h("2023-02-01").toDate(),h("2023-05-15").toDate()]);return[(()=>{const p=K();return D(A,p,()=>""),F(p,e(t,{dir:"v",size:32,get children(){return[e(o,{heading:2,children:"Datepicker 日期选择"}),e(t,{id:"date_base",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(R,{type:"date"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"基础用法"})}}),e(n,{type:"secondary",spacing:"extended",children:"基础用法"}),e(i,{get data(){return l.date_base}})]}})}}),e(t,{id:"date_disabled",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{disabled:!0}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"禁用"})}}),e(n,{type:"secondary",spacing:"extended",children:"使用disabled禁用"}),e(i,{get data(){return l.date_disabled}})]}})}}),e(t,{id:"date_size",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(v,{gutter:20,get children(){return[e(m,{grid:.33,get children(){return e(a,{value:"2023-05-01",size:"large"})}}),e(m,{grid:.33,get children(){return e(a,{})}}),e(m,{grid:.33,get children(){return e(a,{size:"small"})}})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"尺寸"})}}),e(n,{type:"secondary",spacing:"extended",children:"size 支持small和large"}),e(i,{get data(){return l.date_size}})]}})}}),e(t,{id:"date_clearable",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,value:"2023-05-01"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"可清空"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 clearable 选择后可清空"}),e(i,{get data(){return l.date_clearable}})]}})}}),e(t,{id:"date_custom_disable",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,disabledDate:c=>c.getTime()>Date.now()}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"自定义禁用"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 disabledDate 可自定义禁用的日期"}),e(i,{get data(){return l.date_custom_disable}})]}})}}),e(t,{id:"date_month",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"month",onChange:c=>{console.log(c)}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"月份"})}}),e(n,{type:"secondary",spacing:"extended",children:"type = month 为月份选择"}),e(i,{get data(){return l.date_month}})]}})}}),e(t,{id:"date_monthRange",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"monthRange",onChange:c=>{console.log(c)}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"月份范围"})}}),e(n,{type:"secondary",spacing:"extended",children:"type = monthRange 为月份范围选择"}),e(i,{get data(){return l.date_monthRange}})]}})}}),e(t,{id:"date_align",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,align:"bottomRight"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"位置"})}}),e(n,{type:"secondary",spacing:"extended",children:"align 支持 bottomLeft 和 bottomRight 默认为bottomLeft"}),e(i,{get data(){return l.date_align}})]}})}}),e(t,{id:"date_dateRange",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"dateRange"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"日期范围"})}}),e(n,{type:"secondary",spacing:"extended",children:"type = dateRange 为日期范围选择"}),e(i,{get data(){return l.date_dateRange}})]}})}}),e(t,{id:"date_stick",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"dateRange",stick:!0}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"月份联动"})}}),e(n,{type:"secondary",spacing:"extended",children:"stick属性月份为联动 默认不联动"}),e(i,{get data(){return l.date_stick}})]}})}}),e(t,{id:"date_shortcut",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,value:[E,g],stick:!0,get shortCuts(){return e(t,{dir:"v",get children(){return[e(y,{type:"link",onClick:()=>{const c=new Date,s=new Date;s.setDate(s.getDate()-6),g([s,c])},children:"一周"}),e(y,{type:"text",onClick:()=>{const c=new Date,s=new Date;s.setDate(s.getDate()-30),g([s,c])},children:"一个月"})]}})},type:"dateRange"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"快捷选择"})}}),e(n,{type:"secondary",spacing:"extended",children:"shortCuts 可以自定义快捷选择面板"}),e(i,{get data(){return l.date_shortcut}})]}})}}),e(t,{id:"date_dateTime",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"dateTime",value:"2023-04-05 15:35:30"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"日期时间"})}}),e(n,{type:"secondary",spacing:"extended",children:"type = dateTime 为日期时间选择"}),e(i,{get data(){return l.date_dateTime}})]}})}}),e(t,{id:"date_dateTimeRange",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"dateTimeRange"}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"日期时间范围"})}}),e(n,{type:"secondary",spacing:"extended",children:"type = dateTimeRange 为日期时间范围选择"}),e(i,{get data(){return l.date_dateTimeRange}})]}})}}),e(t,{id:"date_maxRange",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{clearable:!0,type:"dateRange",maxRange:7}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"最大区间"})}}),e(n,{type:"secondary",spacing:"extended",children:"使用 maxRange 可以限定最大区间范围"}),e(i,{get data(){return l.date_maxRange}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(o,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(o,{type:"primary",heading:4,children:"TimePicker Props"}),e(b,{columns:k,data:q,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(o,{type:"primary",heading:4,children:"Events"}),e(b,{columns:C,data:G,border:!0,size:"small"})]}})]}})]}})),p})(),e(x,{data:H})]}export{ue as default};
