import{f as _,c as x,u as F,i as y,a as e,S as t,T as a,P as n,o as I,I as E,B,F as w,d as m,t as A}from"./index-0e28ff91.js";import{I as u}from"./index-f4ff48db.js";import{T as b}from"./Title-1e26531c.js";import{C as r}from"./index-50d316ba.js";import{D as i,a as p,C as z}from"./code-f57eb3d5.js";import{R as S,C as h}from"./index-448612e3.js";import{p as D,e as M}from"./columns-cd2d5c33.js";import{O as l}from"./Option-70feb815.js";import{h as P}from"./hljs-97c5734b.js";import"./index-90373c85.js";import"./index-64ff7890.js";import"./index-1aa8f8c8.js";import"./index-19ed88f8.js";import"./index-0808eb84.js";function f(s){s.group=!0;const v=_(()=>s.children),g=()=>v.toArray();return s.items=g(),s}const R=`<Input type='select'>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,$=`<Input type='select' disabled/>
<Input type='select'>
    <Option value={1} label="北京"></Option>
    <Option value={2} disabled label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,j=`<Row>
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
</Row>`,G=`<Input type='select' clearable>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,T=`<Input type='select' multi>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,k=`<Input type='select' multi showMax={2}>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,L=`<Input type='select' multi showMax={2} valueClosable>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,J=`<Input type='select' clearable >
    <OptionGroup label='直辖市' value={1}>
        <Option value={11} label='北京'/>
        <Option value={5} label='天津'/>
        <Option value={2} label='上海'/>
    </OptionGroup>
    <OptionGroup label='浙江' value={3}>
        <Option value={31} label='杭州'/>
    </OptionGroup>
    <Option value={4} label='武汉'/>
</Input>`,X=`<Input type='select' clearable filter>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,q=`<Input type='select' clearable renderOption={(item: any) => {
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
</Input>`,H=`<Input type='select' clearable prefix={<Icon name='tag'/>}>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,K=`<Input type='select' clearable prefix={<Icon name='tag'/>} emptyOption='全部'>
    <Option value={1} label="北京"></Option>
    <Option value={2} label="上海"></Option>
    <Option value={3} label="杭州"></Option>
    <Option value={4} label="武汉"></Option>
    <Option value={5} label="天津"></Option>
</Input>`,N=`const [city, setCity] = createSignal<number>();
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
</Space>`,Q=`const largeArray = new Array(1000).fill(0).map((_, index) => ({value: index, num: 1 + Math.round(Math.random() * 20) }))

<Input type='select' filter>
    <For each={largeArray}>
        {(item, index) => {
            return <Option value={item.value} label={\`\${new Array(item.num).fill(true).map(() => 'Row').join(" ")} Row \` + index()}></Option>
        }}
    </For>
</Input>`,U=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"multi",desc:"多选",type:"boolean",default:""},{name:"prefix",desc:"前缀",type:"string|JSXElement",default:""},{name:"data",desc:"传入的数据",type:"Array",default:""},{name:"textField",desc:"文案字段",type:"string",default:"label"},{name:"valueField",desc:"值字段",type:"string",default:"value"},{name:"filter",desc:"支持过滤",type:"boolean",default:""},{name:"renderOption",desc:"自定义选项渲染",type:"Function",default:""},{name:"emptyOption",desc:"空选项",type:"string",default:""},{name:"showMax",desc:"多选场景下最多显示个数",type:"number",default:""},{name:"valueClosable",desc:"值可关闭",type:"boolean",default:""},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"align",desc:"下拉内容位置 bottomLeft|bottomRight",type:"string",default:"bottomLeft"},{name:"showMore",desc:"多选设置showMax后是否在数字上显示更多",type:"boolean",default:""},{name:"ref",desc:"组件引用",type:"any",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],V=[{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"label",desc:"显示内容",type:"string",default:""},{name:"value",desc:"值",type:"string",default:""}],W=[{name:"onChange",desc:"值改变事件",params:"checked,value"}],Y=[{id:"select_base",text:"基础用法"},{id:"select_disabled",text:"禁用"},{id:"select_size",text:"尺寸"},{id:"select_clearable",text:"可清空"},{id:"select_multi",text:"多选"},{id:"select_showmax",text:"显示个数"},{id:"select_valueClosable",text:"值可关闭"},{id:"select_group",text:"分组显示"},{id:"select_filter",text:"过滤"},{id:"select_renderOption",text:"自定义渲染"},{id:"select_prefix",text:"前缀"},{id:"select_emptyOption",text:"空选项"},{id:"select_control",text:"可控"},{id:"select_largelist",text:"超大列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_group_props",text:"组合属性"},{id:"comp_events",text:"事件"}],o={select_base:R,select_disabled:$,select_size:j,select_clearable:G,select_multi:T,select_showmax:k,select_valueClosable:L,select_group:J,select_filter:X,select_renderOption:q,select_prefix:H,select_emptyOption:K,select_control:N,select_largelist:Q},Z=A('<div class="sys-ctx-main-left">'),C=A("<div>");function ve(){const[s,v]=x(),g=new Array(1e3).fill(0).map((O,d)=>({value:d,num:1+Math.round(Math.random()*20)}));return[(()=>{const O=Z();return F(P,O,()=>""),y(O,e(t,{dir:"v",size:32,get children(){return[e(b,{heading:2,children:"Select 选择框"}),e(t,{id:"select_base",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(n,{type:"secondary",spacing:"extended",children:"基础用法"}),e(p,{get data(){return o.select_base}})]}})}}),e(t,{id:"select_disabled",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",disabled:!0}),e(u,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,disabled:!0,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"禁用"})}}),e(n,{type:"secondary",spacing:"extended",children:"使用disabled禁用选择框"}),e(p,{get data(){return o.select_disabled}})]}})}}),e(t,{id:"select_size",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(S,{get children(){return[e(h,{grid:.33,get children(){return e(u,{type:"select",size:"large",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}}),e(h,{grid:.33,get children(){return e(u,{type:"select",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}}),e(h,{grid:.33,get children(){return e(u,{type:"select",size:"small",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}})}})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"尺寸"})}}),e(n,{type:"secondary",spacing:"extended",children:"size 支持small和large"}),e(p,{get data(){return o.select_size}})]}})}}),e(t,{id:"select_clearable",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",clearable:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"可清空"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 clearable 后选择框选择后可清空"}),e(p,{get data(){return o.select_clearable}})]}})}}),e(t,{id:"select_multi",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",multi:!0,style:{width:"200px"},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"多选"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 multi 选择框可进行多选"}),e(p,{get data(){return o.select_multi}})]}})}}),e(t,{id:"select_showmax",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",multi:!0,showMax:2,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"显示个数"})}}),e(n,{type:"secondary",spacing:"extended",children:"多选场景下可限制最多显示个数， 超出的显示n+"}),e(p,{get data(){return o.select_showmax}})]}})}}),e(t,{id:"select_valueClosable",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",multi:!0,showMax:2,valueClosable:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"值可关闭"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 valueClosable 选中的值可消除"}),e(p,{get data(){return o.select_valueClosable}})]}})}}),e(t,{id:"select_group",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",clearable:!0,get children(){return[e(f,{label:"直辖市",value:1,get children(){return[e(l,{value:11,label:"北京"}),e(l,{value:5,label:"天津"}),e(l,{value:2,label:"上海"})]}}),e(f,{label:"浙江",value:3,get children(){return e(l,{value:31,label:"杭州"})}}),e(l,{value:4,label:"武汉"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"分组显示"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 data 中使用children进行分组"}),e(p,{get data(){return o.select_group}})]}})}}),e(t,{id:"select_filter",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",clearable:!0,filter:!0,get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"过滤"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 filter 支持过滤选择"}),e(p,{get data(){return o.select_filter}})]}})}}),e(t,{id:"select_renderOption",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",clearable:!0,renderOption:d=>e(I,{get children(){return[(()=>{const c=C();return y(c,()=>d.label),c})(),(()=>{const c=C();return y(c,()=>d.value),c})()]}}),get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"自定义渲染"})}}),e(n,{type:"secondary",spacing:"extended",children:"renderOption 属性可以自定义选项的渲染方式"}),e(p,{get data(){return o.select_renderOption}})]}})}}),e(t,{id:"select_prefix",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",clearable:!0,get prefix(){return e(E,{name:"tag"})},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"前缀"})}}),e(n,{type:"secondary",spacing:"extended",children:"prefix 属性可以添加前缀"}),e(p,{get data(){return o.select_prefix}})]}})}}),e(t,{id:"select_emptyOption",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",clearable:!0,get prefix(){return e(E,{name:"tag"})},emptyOption:"全部",get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"空选项"})}}),e(n,{type:"secondary",spacing:"extended",children:"emptyOption 支持空选项,并指定文案"}),e(p,{get data(){return o.select_emptyOption}})]}})}}),e(t,{id:"select_control",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(t,{get children(){return[e(u,{type:"select",value:[s,v],clearable:!0,emptyOption:"全部",onChange:d=>{console.log(d)},get children(){return[e(l,{value:1,label:"北京"}),e(l,{value:2,label:"上海"}),e(l,{value:3,label:"杭州"}),e(l,{value:4,label:"武汉"}),e(l,{value:5,label:"天津"})]}}),e(B,{type:"primary",onClick:()=>{v(2)},children:"改变值"})]}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"可控"})}}),e(n,{type:"secondary",spacing:"extended",children:"value 为可控属性"}),e(p,{get data(){return o.select_control}})]}})}}),e(t,{id:"select_largelist",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(u,{type:"select",filter:!0,get children(){return e(w,{each:g,children:(d,c)=>e(l,{get value(){return d.value},get label(){return`${new Array(d.num).fill(!0).map(()=>"Row").join(" ")} Row `+c()}})})}}),e(i,{align:"left",get children(){return e(a,{type:"primary",children:"超大列表"})}}),e(n,{type:"secondary",spacing:"extended",children:"支持超大列表"}),e(p,{get data(){return o.select_largelist}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(b,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Select Props"}),e(m,{columns:D,data:U,border:!0,size:"small"})]}}),e(t,{id:"comp_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Option Props"}),e(m,{columns:D,data:V,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Events"}),e(m,{columns:M,data:W,border:!0,size:"small"})]}})]}})]}})),O})(),e(z,{data:Y})]}export{ve as default};
