import{e as $,c as v,u as V,i as E,a as e,S as a,T as u,l as j,I as S,B as G,F as k,t as L}from"./index-012dff6d.js";import{I as r}from"./index-1b4d7a3b.js";import{T as y}from"./Title-7bbcb9dc.js";import{C as n}from"./index-e07e4e01.js";import{D as i,a as o,C as J}from"./code-9a657405.js";import{P as d}from"./Paragraph-690c10ae.js";import{R as X,C}from"./index-6e5dbe2a.js";import{T as A,p as I,e as H}from"./columns-66bf7541.js";import{S as g}from"./index-58d2b256.js";import{h as K}from"./hljs-74a5c6d1.js";import{O as l}from"./Option-70feb815.js";import"./index-2421ba35.js";import"./createField-0624a138.js";import"./index-a310aa05.js";import"./input-c3514f51.js";import"./index-b3a84b51.js";import"./index-aefa1e3f.js";import"./index-db4c6845.js";import"./Item-e310f37b.js";import"./index-da7e8516.js";import"./Collapase-e2e3c245.js";import"./Option-5b9f40bb.js";import"./Value-32b1f0db.js";import"./index-813dca78.js";import"./index-82006dec.js";import"./index-084c0867.js";import"./Recommend-69918709.js";import"./dayjs.min-ea173184.js";import"./_commonjsHelpers-725317a4.js";import"./index-a16afdb1.js";import"./index-2d88e173.js";import"./index-cdc29ff8.js";import"./index-c5757679.js";import"./EmptyOption-7c47c146.js";function w(b){b.group=!0;const O=$(()=>b.children),D=()=>O.toArray();return b.items=D(),b}const N=`<Input type='select'>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,U=`<Input type='select' disabled/>
<Input type='select'>
    <Option value={1} label="北京"></Option>
    <Option value={2} disabled label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,W=`<Row>
    <Col grid={0.33}>
        <Input type='select' size='large'>
            <Option value={1} label="北京"></Option>
            <Option value={2} label="上海"></Option>
            <Option value={3} label="杭州"></Option>
            <Option value={4} label="武汉"></Option>
            <Option value={5} label="天津"></Option>
        </Input>
    </Col>
    <Col grid={0.33}>
        <Input type='select'>
            <Option value={1} label="北京"></Option>
            <Option value={2} label="上海"></Option>
            <Option value={3} label="杭州"></Option>
            <Option value={4} label="武汉"></Option>
            <Option value={5} label="天津"></Option>
        </Input>
    </Col>
    <Col grid={0.33}>
        <Input type='select' size='small'>
            <Option value={1} label="北京"></Option>
            <Option value={2} label="上海"></Option>
            <Option value={3} label="杭州"></Option>
            <Option value={4} label="武汉"></Option>
            <Option value={5} label="天津"></Option>
        </Input>
    </Col>
</Row>`,Y=`<Input type='select' clearable placeholder="请选择">
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,Z=`<Input type='select' multi>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,ee=`<Input type='select' multi showMax={2}>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,le=`<Input type='select' multi showMax={2} valueClosable>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,te=`<Input type='select' clearable >
    <OptionGroup label='直辖市' value={1}>
        <Option value={11} label='北京'/>
        <Option value={5} label='天津'/>
        <Option value={2} label='上海'/>
    </OptionGroup>
    <OptionGroup label='浙江' value={3}>
        <Option value={31} label='杭州'/>
    </OptionGroup>
    <Option value={4} label='武汉'/>
</Input>`,ae=`<Space>
    <Select clearable filter >
        <Option value={1} label="北京"></Option>
        <Option value={2} label="上海"></Option>
        <Option value={3} label="杭州"></Option>
        <Option value={4} label="武汉"></Option>
        <Option value={5} label="天津"></Option>
    </Select>
    <Select clearable filter multi>
        <Option value={1} label="北京"></Option>
        <Option value={2} label="上海"></Option>
        <Option value={3} label="杭州"></Option>
        <Option value={4} label="武汉"></Option>
        <Option value={5} label="天津"></Option>
    </Select>
</Space>`,ue=`
const [loading, setLoading] = createSignal<boolean>(false);
const [filteredData, setFilteredData] = createSignal<any[]>([]);
const [filteredData2, setFilteredData2] = createSignal<any[]>([]);

const remoteQuery = (query: string) => {
    console.log(query);
    setLoading(true)
    const arr = new Array(10).fill(0).map((_, index) => ({value: query + index, label: query + index}))
    setFilteredData(arr);
    setLoading(false)
}

const remoteQuery2 = (query: string) => {
    console.log(query);
    setLoading(true)
    const arr = new Array(10).fill(0).map((_, index) => ({value: query + index, label: query + index}))
    setFilteredData2(arr);
    setLoading(false)
}

<Space>
    <Select clearable filter remoteMethod={remoteQuery} loading={loading()}>
        {filteredData().map(item => {
            return <Option value={item.value} label={item.label}></Option>
        })}
    </Select>
    <Select clearable filter multi remoteMethod={remoteQuery2} loading={loading()}>
        {filteredData2().map(item => {
            return <Option value={item.value} label={item.label}></Option>
        })}
    </Select>
</Space>`,re=`
const [filteredData, setFilteredData] = createSignal<any[]>([]);
const [filteredData2, setFilteredData2] = createSignal<any[]>([]);
const [loading, setLoading] = createSignal<boolean>(false);
const [val1, setVal1] = createSignal<string>('val1');
const [val2, setVal2] = createSignal<string[]>(['val1']);
const remoteQuery = (query: string) => {
    console.log(query);
    setLoading(true)
    const arr = new Array(10).fill(0).map((_, index) => ({value: query + index, label: query + index}))
    setFilteredData(arr);
    setLoading(false)
}
const remoteQuery2 = (query: string) => {
    console.log(query);
    setLoading(true)
    const arr = new Array(10).fill(0).map((_, index) => ({value: query + index, label: query + index}))
    setFilteredData2(arr);
    setLoading(false)
}

<Space>
    <Select clearable filter remoteMethod={remoteQuery} loading={loading()} value={[val1, setVal1]} defaultLabel="默认值">
        {filteredData().map(item => {
            return <Option value={item.value} label={item.label}></Option>
        })}
    </Select>
    <Select clearable filter multi remoteMethod={remoteQuery2} loading={loading()} value={[val2, setVal2]} defaultLabel={['值1']}>
        {filteredData2().map(item => {
            return <Option value={item.value} label={item.label}></Option>
        })}
    </Select>
</Space>
`,ne=`<Input type='select' clearable renderOption={(item: any) => {
    return <BothSide>
        <div>{item.label}</div>
        <div>{item.value}</div>
    </BothSide>
}}>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,ie=`<Input type='select' clearable prefix={<Icon name='tag'/>}>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,oe=`<Input type='select' clearable prefix={<Icon name='tag'/>} emptyOption='全部'>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,de=`const [city, setCity] = createSignal<number>();
<Space>
    <Input type='select' value={[city, setCity]} clearable emptyOption='全部' onChange={(v: any) => {
        console.log(v);
    }}>
        <Option value={1} label="北京"></Option>
        <Option value={2} label="上海"></Option>
        <Option value={3} label="杭州"></Option>
        <Option value={4} label="武汉"></Option>
        <Option value={5} label="天津"></Option>
    </Input>
    <Button type='primary' onClick={() => {
        setCity(2);
    }}>改变值</Button>
</Space>`,pe=`const largeArray = new Array(1000).fill(0).map((_, index) => ({value: index, num: 1 + Math.round(Math.random() * 20) }))

<Input type='select' filter>
    <For each={largeArray}>
        {(item, index) => {
            return <Option value={item.value} label={\`\${new Array(item.num).fill(true).map(() => 'Row').join(" ")} Row \` + index()}></Option>
        }}
    </For>
</Input>`,ce=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"placeholder",desc:"placeholder",type:"string",default:""},{name:"multi",desc:"多选",type:"boolean",default:""},{name:"prefix",desc:"前缀",type:"string|JSXElement",default:""},{name:"data",desc:"传入的数据",type:"Array",default:""},{name:"textField",desc:"文案字段",type:"string",default:"label"},{name:"valueField",desc:"值字段",type:"string",default:"value"},{name:"filter",desc:"支持过滤",type:"boolean",default:""},{name:"renderOption",desc:"自定义选项渲染",type:"Function",default:""},{name:"emptyOption",desc:"空选项",type:"string",default:""},{name:"showMax",desc:"多选场景下最多显示个数",type:"number",default:""},{name:"valueClosable",desc:"值可关闭",type:"boolean",default:""},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"align",desc:"下拉内容位置 bottomLeft|bottomRight",type:"string",default:"bottomLeft"},{name:"showMore",desc:"多选设置showMax后是否在数字上显示更多",type:"boolean",default:""},{name:"ref",desc:"组件引用",type:"any",default:""},{name:"remoteMethod",desc:"远程过滤",type:"Function",default:""},{name:"debounceTime",desc:"防抖时间",type:"number",default:"300"},{name:"loading",desc:"远程过滤的状态",type:"Boolean",default:"false"},{name:"defaultLabel",desc:"远程过滤的默认label,配合默认value使用",type:"string|string[]",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],se=[{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"label",desc:"显示内容",type:"string",default:""},{name:"value",desc:"值",type:"string",default:""}],be=[{name:"onChange",desc:"值改变事件",params:"checked,value"}],ve=[{id:"select_base",text:"基础用法"},{id:"select_disabled",text:"禁用"},{id:"select_size",text:"尺寸"},{id:"select_clearable",text:"可清空"},{id:"select_multi",text:"多选"},{id:"select_showmax",text:"显示个数"},{id:"select_valueClosable",text:"值可关闭"},{id:"select_group",text:"分组显示"},{id:"select_filter",text:"过滤"},{id:"select_remote",text:"远程过滤"},{id:"select_default_labels",text:"远程默认值"},{id:"select_renderOption",text:"自定义渲染"},{id:"select_prefix",text:"前缀"},{id:"select_emptyOption",text:"空选项"},{id:"select_control",text:"可控"},{id:"select_largelist",text:"超大列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_group_props",text:"组合属性"},{id:"comp_events",text:"事件"}],p={select_base:N,select_disabled:U,select_size:W,select_clearable:Y,select_multi:Z,select_showmax:ee,select_valueClosable:le,select_group:te,select_filter:ae,select_remote:ue,select_default_labels:re,select_renderOption:ne,select_prefix:ie,select_emptyOption:oe,select_control:de,select_largelist:pe},ge=L('<div class="sys-ctx-main-left">'),M=L("<div>");function Ue(){const[b,O]=v(),D=new Array(1e3).fill(0).map((c,t)=>({value:t,num:1+Math.round(Math.random()*20)})),[_,z]=v([]),[F,q]=v([]),[h,f]=v(!1),[Q,P]=v("val1"),[R,T]=v(["val1"]),x=c=>{console.log(c),f(!0);const t=new Array(10).fill(0).map((s,m)=>({value:c+m,label:c+m}));z(t),f(!1)},B=c=>{console.log(c),f(!0);const t=new Array(10).fill(0).map((s,m)=>({value:c+m,label:c+m}));q(t),f(!1)};return[(()=>{const c=ge();return V(K,c,()=>""),E(c,e(a,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Select 选择框"}),e(a,{id:"select_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"基础用法"})}}),e(d,{type:"secondary",spacing:"extended",children:"基础用法"}),e(o,{get data(){return p.select_base}})]}})}}),e(a,{id:"select_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",disabled:!0}),e(r,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,disabled:!0,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"禁用"})}}),e(d,{type:"secondary",spacing:"extended",children:"使用disabled禁用选择框"}),e(o,{get data(){return p.select_disabled}})]}})}}),e(a,{id:"select_size",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(X,{get children(){return[e(C,{grid:.33,get children(){return e(r,{type:"select",size:"large",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}}),e(C,{grid:.33,get children(){return e(r,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}}),e(C,{grid:.33,get children(){return e(r,{type:"select",size:"small",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"尺寸"})}}),e(d,{type:"secondary",spacing:"extended",children:"size 支持small和large"}),e(o,{get data(){return p.select_size}})]}})}}),e(a,{id:"select_clearable",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",clearable:!0,placeholder:"请选择",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"可清空"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置 clearable 后选择框选择后可清空"}),e(o,{get data(){return p.select_clearable}})]}})}}),e(a,{id:"select_multi",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",multi:!0,style:{width:"200px"},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"多选"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置 multi 选择框可进行多选"}),e(o,{get data(){return p.select_multi}})]}})}}),e(a,{id:"select_showmax",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",multi:!0,showMax:2,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"显示个数"})}}),e(d,{type:"secondary",spacing:"extended",children:"多选场景下可限制最多显示个数， 超出的显示n+"}),e(o,{get data(){return p.select_showmax}})]}})}}),e(a,{id:"select_valueClosable",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",multi:!0,showMax:2,valueClosable:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"值可关闭"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置 valueClosable 选中的值可消除"}),e(o,{get data(){return p.select_valueClosable}})]}})}}),e(a,{id:"select_group",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",clearable:!0,get children(){return[e(w,{label:"直辖市",value:1,get children(){return[e(l,{value:11,label:"北京"}),e(l,{value:5,label:"天津"}),e(l,{value:2,label:"上海"})]}}),e(w,{label:"浙江",value:3,get children(){return e(l,{value:31,label:"杭州"})}}),e(l,{value:4,label:"武汉"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"分组显示"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置 data 中使用children进行分组"}),e(o,{get data(){return p.select_group}})]}})}}),e(a,{id:"select_filter",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(a,{get children(){return[e(g,{clearable:!0,filter:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(g,{clearable:!0,filter:!0,multi:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"过滤"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置 filter 支持过滤选择"}),e(o,{get data(){return p.select_filter}})]}})}}),e(a,{id:"select_remote",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(a,{get children(){return[e(g,{clearable:!0,filter:!0,remoteMethod:x,get loading(){return h()},get children(){return _().map(t=>e(l,{get value(){return t.value},get label(){return t.label}}))}}),e(g,{clearable:!0,filter:!0,multi:!0,remoteMethod:B,get loading(){return h()},get children(){return F().map(t=>e(l,{get value(){return t.value},get label(){return t.label}}))}})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"远程过滤"})}}),e(d,{type:"secondary",spacing:"extended",children:"远程过滤，通过remoteMethod进行查询，重置选项，loading属性，切换加载状态"}),e(o,{get data(){return p.select_remote}})]}})}}),e(a,{id:"select_default_labels",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(a,{get children(){return[e(g,{clearable:!0,filter:!0,remoteMethod:x,get loading(){return h()},value:[Q,P],defaultLabel:"默认值",get children(){return _().map(t=>e(l,{get value(){return t.value},get label(){return t.label}}))}}),e(g,{clearable:!0,filter:!0,multi:!0,remoteMethod:B,get loading(){return h()},value:[R,T],defaultLabel:["值1"],get children(){return F().map(t=>e(l,{get value(){return t.value},get label(){return t.label}}))}})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"过滤"})}}),e(d,{type:"secondary",spacing:"extended",children:"远程过滤支持默认值和默认label，通过属性defaultLabel设置"}),e(o,{get data(){return p.select_default_labels}})]}})}}),e(a,{id:"select_renderOption",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",clearable:!0,renderOption:t=>e(j,{get children(){return[(()=>{const s=M();return E(s,()=>t.label),s})(),(()=>{const s=M();return E(s,()=>t.value),s})()]}}),get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"自定义渲染"})}}),e(d,{type:"secondary",spacing:"extended",children:"renderOption 属性可以自定义选项的渲染方式"}),e(o,{get data(){return p.select_renderOption}})]}})}}),e(a,{id:"select_prefix",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",clearable:!0,get prefix(){return e(S,{name:"tag"})},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"前缀"})}}),e(d,{type:"secondary",spacing:"extended",children:"prefix 属性可以添加前缀"}),e(o,{get data(){return p.select_prefix}})]}})}}),e(a,{id:"select_emptyOption",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",clearable:!0,get prefix(){return e(S,{name:"tag"})},emptyOption:"全部",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"空选项"})}}),e(d,{type:"secondary",spacing:"extended",children:"emptyOption 支持空选项,并指定文案"}),e(o,{get data(){return p.select_emptyOption}})]}})}}),e(a,{id:"select_control",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(a,{get children(){return[e(r,{type:"select",value:[b,O],clearable:!0,emptyOption:"全部",onChange:t=>{console.log(t)},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(G,{type:"primary",onClick:()=>{O(2)},children:"改变值"})]}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"可控"})}}),e(d,{type:"secondary",spacing:"extended",children:"value 为可控属性"}),e(o,{get data(){return p.select_control}})]}})}}),e(a,{id:"select_largelist",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"select",filter:!0,get children(){return e(k,{each:D,children:(t,s)=>e(l,{get value(){return t.value},get label(){return`${new Array(t.num).fill(!0).map(()=>"Row").join(" ")} Row `+s()}})})}}),e(i,{align:"left",get children(){return e(u,{type:"primary",children:"超大列表"})}}),e(d,{type:"secondary",spacing:"extended",children:"支持超大列表"}),e(o,{get data(){return p.select_largelist}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Select Props"}),e(A,{columns:I,data:ce,border:!0,size:"small"})]}}),e(a,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Option Props"}),e(A,{columns:I,data:se,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Events"}),e(A,{columns:H,data:be,border:!0,size:"small"})]}})]}})]}})),c})(),e(J,{data:ve})]}export{Ue as default};
