import{e as V,c as g,u as j,i as C,a as e,S as t,T as u,F as y,l as G,I,B as k,t as z}from"./index-5e251d81.js";import{I as p}from"./index-992cf3bd.js";import{T as O}from"./Title-52a6bda3.js";import{C as r}from"./index-dff86af7.js";import{D as n,a as i,T as _,p as w,e as J,C as X}from"./code-c71fa51e.js";import{P as o}from"./Paragraph-a25cb645.js";import{R as H,C as A}from"./index-34abc17d.js";import{S as b}from"./index-c1fbac61.js";import{h as K}from"./hljs-74a5c6d1.js";import{O as l}from"./Option-70feb815.js";import"./index-2a737952.js";import"./createField-7b35bf70.js";import"./index-04bec966.js";import"./input-0366c6fe.js";import"./index-b603bca5.js";import"./index-bfe6ab9e.js";import"./index-abcb3dc5.js";import"./index-111f9a6c.js";import"./Item-eac954af.js";import"./index-2134e8e2.js";import"./Collapase-bfad3ffa.js";import"./Option-72426df3.js";import"./Value-bf1a2078.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";import"./index-50b8f727.js";import"./Recommend-9274b6f4.js";import"./dayjs.min-ea173184.js";import"./_commonjsHelpers-725317a4.js";import"./index-7e2e5a37.js";import"./index-97f12a81.js";import"./index-11ac00f5.js";import"./index-c458963f.js";import"./createGridOffset-dd5a9514.js";import"./EmptyOption-a97df827.js";function M(v){v.group=!0;const h=V(()=>v.children),D=()=>h.toArray();return v.items=D(),v}const N=`<Input type='select'>
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
</Input>`,de=`<Select clearable transfer>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Select>`,pe=`const [city, setCity] = createSignal<number>();
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
</Space>`,ce=`const largeArray = new Array(1000).fill(0).map((_, index) => ({value: index, num: 1 + Math.round(Math.random() * 20) }))

<Input type='select' filter>
    <For each={largeArray}>
        {(item, index) => {
            return <Option value={item.value} label={\`\${new Array(item.num).fill(true).map(() => 'Row').join(" ")} Row \` + index()}></Option>
        }}
    </For>
</Input>`,se=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"placeholder",desc:"placeholder",type:"string",default:""},{name:"multi",desc:"多选",type:"boolean",default:""},{name:"prefix",desc:"前缀",type:"string|JSXElement",default:""},{name:"data",desc:"传入的数据",type:"Array",default:""},{name:"textField",desc:"文案字段",type:"string",default:"label"},{name:"valueField",desc:"值字段",type:"string",default:"value"},{name:"filter",desc:"支持过滤",type:"boolean",default:""},{name:"renderOption",desc:"自定义选项渲染",type:"Function",default:""},{name:"emptyOption",desc:"空选项",type:"string",default:""},{name:"showMax",desc:"多选场景下最多显示个数",type:"number",default:""},{name:"valueClosable",desc:"值可关闭",type:"boolean",default:""},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"align",desc:"下拉内容位置 bottomLeft|bottomRight",type:"string",default:"bottomLeft"},{name:"showMore",desc:"多选设置showMax后是否在数字上显示更多",type:"boolean",default:""},{name:"ref",desc:"组件引用",type:"any",default:""},{name:"remoteMethod",desc:"远程过滤",type:"Function",default:""},{name:"debounceTime",desc:"防抖时间",type:"number",default:"300"},{name:"loading",desc:"远程过滤的状态",type:"Boolean",default:"false"},{name:"defaultLabel",desc:"远程过滤的默认label,配合默认value使用",type:"string|string[]",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],be=[{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"label",desc:"显示内容",type:"string",default:""},{name:"value",desc:"值",type:"string",default:""}],ve=[{name:"onChange",desc:"值改变事件",params:"checked,value"}],ge=[{id:"select_base",text:"基础用法"},{id:"select_disabled",text:"禁用"},{id:"select_size",text:"尺寸"},{id:"select_clearable",text:"可清空"},{id:"select_multi",text:"多选"},{id:"select_showmax",text:"显示个数"},{id:"select_valueClosable",text:"值可关闭"},{id:"select_group",text:"分组显示"},{id:"select_filter",text:"过滤"},{id:"select_remote",text:"远程过滤"},{id:"select_default_labels",text:"远程默认值"},{id:"select_renderOption",text:"自定义渲染"},{id:"select_prefix",text:"前缀"},{id:"select_emptyOption",text:"空选项"},{id:"select_transfer",text:"Transfer"},{id:"select_control",text:"可控"},{id:"select_largelist",text:"超大列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_group_props",text:"组合属性"},{id:"comp_events",text:"事件"}],d={select_base:N,select_disabled:U,select_size:W,select_clearable:Y,select_multi:Z,select_showmax:ee,select_valueClosable:le,select_group:te,select_filter:ae,select_remote:ue,select_default_labels:re,select_renderOption:ne,select_prefix:ie,select_emptyOption:oe,select_transfer:de,select_control:pe,select_largelist:ce},me=z('<div class="sys-ctx-main-left">'),L=z("<div>");function Ye(){const[v,h]=g(),D=new Array(1e3).fill(0).map((c,a)=>({value:a,num:1+Math.round(Math.random()*20)})),[F,q]=g([]),[x,P]=g([]),[f,E]=g(!1),[Q,R]=g("val1"),[T,$]=g(["val1"]),B=c=>{console.log(c),E(!0);const a=new Array(10).fill(0).map((s,m)=>({value:c+m,label:c+m}));q(a),E(!1)},S=c=>{console.log(c),E(!0);const a=new Array(10).fill(0).map((s,m)=>({value:c+m,label:c+m}));P(a),E(!1)};return[(()=>{const c=me();return j(K,c,()=>""),C(c,e(t,{dir:"v",size:32,get children(){return[e(O,{heading:2,children:"Select 选择框"}),e(t,{id:"select_base",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"基础用法"})}}),e(o,{type:"secondary",spacing:"extended",children:"基础用法"}),e(i,{get data(){return d.select_base}})]}})}}),e(t,{id:"select_disabled",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",disabled:!0}),e(p,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,disabled:!0,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"禁用"})}}),e(o,{type:"secondary",spacing:"extended",children:"使用disabled禁用选择框"}),e(i,{get data(){return d.select_disabled}})]}})}}),e(t,{id:"select_size",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(H,{get children(){return[e(A,{grid:.33,get children(){return e(p,{type:"select",size:"large",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}}),e(A,{grid:.33,get children(){return e(p,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}}),e(A,{grid:.33,get children(){return e(p,{type:"select",size:"small",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"尺寸"})}}),e(o,{type:"secondary",spacing:"extended",children:"size 支持small和large"}),e(i,{get data(){return d.select_size}})]}})}}),e(t,{id:"select_clearable",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",clearable:!0,placeholder:"请选择",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"可清空"})}}),e(o,{type:"secondary",spacing:"extended",children:"设置 clearable 后选择框选择后可清空"}),e(i,{get data(){return d.select_clearable}})]}})}}),e(t,{id:"select_multi",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",multi:!0,style:{width:"200px"},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"多选"})}}),e(o,{type:"secondary",spacing:"extended",children:"设置 multi 选择框可进行多选"}),e(i,{get data(){return d.select_multi}})]}})}}),e(t,{id:"select_showmax",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",multi:!0,showMax:2,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"显示个数"})}}),e(o,{type:"secondary",spacing:"extended",children:"多选场景下可限制最多显示个数， 超出的显示n+"}),e(i,{get data(){return d.select_showmax}})]}})}}),e(t,{id:"select_valueClosable",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",multi:!0,showMax:2,valueClosable:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"值可关闭"})}}),e(o,{type:"secondary",spacing:"extended",children:"设置 valueClosable 选中的值可消除"}),e(i,{get data(){return d.select_valueClosable}})]}})}}),e(t,{id:"select_group",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",clearable:!0,get children(){return[e(M,{label:"直辖市",value:1,get children(){return[e(l,{value:11,label:"北京"}),e(l,{value:5,label:"天津"}),e(l,{value:2,label:"上海"})]}}),e(M,{label:"浙江",value:3,get children(){return e(l,{value:31,label:"杭州"})}}),e(l,{value:4,label:"武汉"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"分组显示"})}}),e(o,{type:"secondary",spacing:"extended",children:"设置 data 中使用children进行分组"}),e(i,{get data(){return d.select_group}})]}})}}),e(t,{id:"select_filter",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{get children(){return[e(b,{clearable:!0,filter:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(b,{clearable:!0,filter:!0,multi:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"过滤"})}}),e(o,{type:"secondary",spacing:"extended",children:"设置 filter 支持过滤选择"}),e(i,{get data(){return d.select_filter}})]}})}}),e(t,{id:"select_remote",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{get children(){return[e(b,{clearable:!0,filter:!0,remoteMethod:B,get loading(){return f()},get children(){return e(y,{get each(){return F()},children:a=>e(l,{get value(){return a.value},get label(){return a.label}})})}}),e(b,{clearable:!0,filter:!0,multi:!0,remoteMethod:S,get loading(){return f()},get children(){return e(y,{get each(){return x()},children:a=>e(l,{get value(){return a.value},get label(){return a.label}})})}})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"远程过滤"})}}),e(o,{type:"secondary",spacing:"extended",children:"远程过滤，通过remoteMethod进行查询，重置选项，loading属性，切换加载状态"}),e(i,{get data(){return d.select_remote}})]}})}}),e(t,{id:"select_default_labels",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{get children(){return[e(b,{clearable:!0,filter:!0,remoteMethod:B,get loading(){return f()},value:[Q,R],defaultLabel:"默认值",get children(){return e(y,{get each(){return F()},children:a=>e(l,{get value(){return a.value},get label(){return a.label}})})}}),e(b,{clearable:!0,filter:!0,multi:!0,remoteMethod:S,get loading(){return f()},value:[T,$],defaultLabel:["值1"],get children(){return e(y,{get each(){return x()},children:a=>e(l,{get value(){return a.value},get label(){return a.label}})})}})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"过滤"})}}),e(o,{type:"secondary",spacing:"extended",children:"远程过滤支持默认值和默认label，通过属性defaultLabel设置"}),e(i,{get data(){return d.select_default_labels}})]}})}}),e(t,{id:"select_renderOption",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",clearable:!0,renderOption:a=>e(G,{get children(){return[(()=>{const s=L();return C(s,()=>a.label),s})(),(()=>{const s=L();return C(s,()=>a.value),s})()]}}),get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"自定义渲染"})}}),e(o,{type:"secondary",spacing:"extended",children:"renderOption 属性可以自定义选项的渲染方式"}),e(i,{get data(){return d.select_renderOption}})]}})}}),e(t,{id:"select_prefix",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",clearable:!0,get prefix(){return e(I,{name:"tag"})},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"前缀"})}}),e(o,{type:"secondary",spacing:"extended",children:"prefix 属性可以添加前缀"}),e(i,{get data(){return d.select_prefix}})]}})}}),e(t,{id:"select_emptyOption",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",clearable:!0,get prefix(){return e(I,{name:"tag"})},emptyOption:"全部",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"空选项"})}}),e(o,{type:"secondary",spacing:"extended",children:"emptyOption 支持空选项,并指定文案"}),e(i,{get data(){return d.select_emptyOption}})]}})}}),e(t,{id:"select_transfer",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(b,{clearable:!0,transfer:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"Transfer"})}}),e(o,{type:"secondary",spacing:"extended",children:"使用 Portal 将弹层放置于 body 内"}),e(i,{get data(){return d.select_transfer}})]}})}}),e(t,{id:"select_control",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{get children(){return[e(p,{type:"select",value:[v,h],clearable:!0,emptyOption:"全部",onChange:a=>{console.log(a)},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(k,{type:"primary",onClick:()=>{h(2)},children:"改变值"})]}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"可控"})}}),e(o,{type:"secondary",spacing:"extended",children:"value 为可控属性"}),e(i,{get data(){return d.select_control}})]}})}}),e(t,{id:"select_largelist",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(p,{type:"select",filter:!0,get children(){return e(y,{each:D,children:(a,s)=>e(l,{get value(){return a.value},get label(){return`${new Array(a.num).fill(!0).map(()=>"Row").join(" ")} Row `+s()}})})}}),e(n,{align:"left",get children(){return e(u,{type:"primary",children:"超大列表"})}}),e(o,{type:"secondary",spacing:"extended",children:"支持超大列表"}),e(i,{get data(){return d.select_largelist}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(O,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(O,{type:"primary",heading:4,children:"Select Props"}),e(_,{columns:w,data:se,border:!0,size:"small"})]}}),e(t,{id:"comp_props",dir:"v",get children(){return[e(O,{type:"primary",heading:4,children:"Option Props"}),e(_,{columns:w,data:be,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(O,{type:"primary",heading:4,children:"Events"}),e(_,{columns:J,data:ve,border:!0,size:"small"})]}})]}})]}})),c})(),e(X,{data:ge})]}export{Ye as default};
