import{c as C,u as A,i as o,a as e,S as n,B as t,T as a,P as i,I as r,b as h,d as B,t as c}from"./index-602cfbf2.js";import{T as y}from"./Title-c2e5d943.js";import{C as d}from"./index-b85a489d.js";import{D as l,a as s,C as b}from"./code-fa44278e.js";import{p as E,e as f}from"./columns-cd2d5c33.js";import{h as S}from"./hljs-c6aaaaf8.js";const _=`<Space dir="v">
    <Space dir="h">
        <Button type='primary'>Primary</Button>
        <Button type='success'>Success</Button>
        <Button type='error'>Error</Button>
        <Button type='warning'>Warning</Button>
    </Space>
    <Space dir="h">
        <Button type='default'>Default</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>LINK</Button>
        <Button type='dashed'>Dashed BUTTON</Button>
    </Space>
</Space>`,D=`<Space dir="h" style={{background: '#7d7d7d', padding: '10px'}}>
    <Button type='primary' ghost>PRIMARY</Button>
    <Button type='success' ghost>SUCCESS</Button>
    <Button type='error' ghost>ERROR</Button>
    <Button type='warning' ghost>WARNING</Button>
    <Button type='default' ghost>DEFAULT</Button>
    <Button type='dashed' ghost>DASHED</Button>
</Space>`,x=`<Space dir="h">
    <Button type='primary' disabled>PRIMARY</Button>
    <Button type='primary' ghost disabled>Ghost</Button>
    <Button type='link' disabled>Link</Button>
    <Button type='text' disabled>Text</Button>
</Space>`,z=`<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' size='large'>LARGE</Button>
        <Button type='primary'>DEFAULT</Button>
        <Button type='primary' size='small'>SMALL</Button>
    </Space>
    <Space dir="h">
        <Button type='primary' size='large' icon={<Icon name='search1'/>}>SEARCH</Button>
        <Button type='primary' size='large' icon={<Icon name='search1'/>}></Button>
        <Button type='primary' size='large' circle icon={<Icon name='search1'/>}></Button>
    </Space>
    <Space dir="h">
        <Button type='primary' size='small' icon={<Icon name='search1'/>}>SEARCH</Button>
        <Button type='primary' size='small' icon={<Icon name='search1'/>}></Button>
        <Button type='primary' size='small' circle icon={<Icon name='search1'/>}></Button>
        <Button type='text' size='small'>Text</Button>
    </Space>
</Space>`,I=`<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' icon={<Icon name='search1'/>}></Button>
        <Button type='default' icon={<Icon name='search1'/>}></Button>
        <Button type='dashed' icon={<Icon name='plus'/>}></Button>
        <Button type='primary' circle icon={<Icon name='search1'/>}></Button>
    </Space>
    <Space dir="h" align="center">
        <Button type='primary' icon={<Icon name='search1'/>}>Search</Button>
        <Button type='primary' icon={<Icon name='search1'/>} iconAlign='right'>Search</Button>
    </Space>
</Space>`,v=`<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' loading size='small'>Sphinx</Button>
        <Button type='success' loading size='small'></Button>
        <Button type='success' loading size='small' circle></Button>
    </Space>
    <Space dir="h">
        <Button type='primary' loading>Loading</Button>
        <Button type='primary' loading={loading()} onClick={() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2500)
        }}>Click Load</Button>
    </Space>
</Space>`,L=`<Space dir="v">
    <ButtonGroup type="primary">
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Search</Button>
    </ButtonGroup>
    <ButtonGroup type="default">
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Search</Button>
    </ButtonGroup>
    <ButtonGroup type="default">
        <Button icon={<Icon name="home"/>}></Button>
        <Button icon={<Icon name="user"/>}></Button>
        <Button icon={<Icon name="search1"/>}></Button>
    </ButtonGroup>
    <ButtonGroup type="default" size="large">
        <Button icon={<Icon name="home"/>}></Button>
        <Button icon={<Icon name="user"/>}></Button>
        <Button icon={<Icon name="search1"/>}></Button>
    </ButtonGroup>
    <ButtonGroup type="default" disabled>
        <Button icon={<Icon name="home"/>}></Button>
        <Button icon={<Icon name="user"/>}></Button>
        <Button icon={<Icon name="search1"/>}></Button>
    </ButtonGroup>
</Space>`,R=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"link",desc:"按钮链接",type:"string",default:""},{name:"type",desc:"按钮类型支持",type:"primary|success|error|warning|default|dashed|link|text",default:"default"},{name:"block",desc:"块状按钮",type:"boolean",default:"false"},{name:"size",desc:"按钮大小",type:"small|default|large",default:""},{name:"active",desc:"选中按钮状态在ButtonGroup中使用",type:"boolean",default:"false"},{name:"circle",desc:"圆形按钮",type:"boolean",default:"false"},{name:"disabled",desc:"禁用状态",type:"boolean",default:"false"},{name:"loading",desc:"加载状态，true情况下不会响应点击事件",type:"boolean",default:"false"},{name:"ghost",desc:"幽灵按钮",type:"boolean",default:"false"},{name:"icon",desc:"按钮图标",type:"Icon",default:""},{name:"iconAlign",desc:"按钮图标位置",type:"left|right",default:"left"},{name:"onClick",desc:"点击回调函数",type:"Function",default:""}],G=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"type",desc:"按钮类型支持",type:"primary|success|error|warning|default|dashed|link|text",default:"default"},{name:"size",desc:"按钮大小",type:"small|default|large",default:""},{name:"disabled",desc:"禁用状态",type:"boolean",default:"false"},{name:"onClick",desc:"点击回调函数",type:"Function",default:""}],T=[{name:"onClick",desc:"点击事件",params:"Event"}],k=[{id:"button_type",text:"按钮类型"},{id:"button_ghost",text:"幽灵按钮"},{id:"button_disabled",text:"禁用按钮"},{id:"button_size",text:"按钮尺寸"},{id:"button_icon",text:"图标按钮"},{id:"button_loading",text:"加载中状态"},{id:"button_group",text:"按钮组"},{id:"button_api",text:"API"},{id:"button_props",text:"按钮属性"},{id:"button_events",text:"按钮事件"},{id:"button_group_props",text:"按钮组属性"}],p={button_type:_,button_ghost:D,button_disabled:x,button_size:z,button_icon:I,button_loading:v,button_group:L},$=c('<div id="button_type">'),P=c('<div id="button_ghost">'),N=c('<div id="button_disabled">'),U=c('<div id="button_size">'),w=c('<div id="button_icon">'),H=c('<div id="button_loading">'),M=c('<div id="button_group">'),O=c('<div id="button_api">'),W=c('<div class="sys-ctx-main-left">'),V=()=>{const[F,m]=C(!1);return[(()=>{const g=W();return A(S,g,()=>""),o(g,e(n,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Button 按钮"}),(()=>{const u=$();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(n,{dir:"h",get children(){return[e(t,{type:"primary",children:"Primary"}),e(t,{type:"success",children:"Success"}),e(t,{type:"error",children:"Error"}),e(t,{type:"warning",children:"Warning"})]}}),e(n,{dir:"h",get children(){return[e(t,{type:"default",children:"Default"}),e(t,{type:"text",children:"Text Button"}),e(t,{type:"link",children:"LINK"}),e(t,{type:"dashed",children:"Dashed BUTTON"})]}})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"按钮类型"})}}),e(i,{type:"secondary",spacing:"extended",children:"通过设置 type 为 primary、success、warning、error、default、dashed、text、link 创建不同样式的按钮，不设置为默认样式。"}),e(s,{get data(){return p.button_type}})]}})),u})(),(()=>{const u=P();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"h",style:{background:"var(--cui-color-fill-0)",padding:"10px"},get children(){return[e(t,{type:"primary",ghost:!0,children:"PRIMARY"}),e(t,{type:"success",ghost:!0,children:"SUCCESS"}),e(t,{type:"error",ghost:!0,children:"ERROR"}),e(t,{type:"warning",ghost:!0,children:"WARNING"}),e(t,{type:"default",ghost:!0,children:"DEFAULT"}),e(t,{type:"dashed",ghost:!0,children:"DASHED"})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"幽灵按钮"})}}),e(i,{type:"secondary",spacing:"extended",children:"幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。"}),e(s,{get data(){return p.button_ghost}})]}})),u})(),(()=>{const u=N();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return[e(t,{type:"primary",disabled:!0,children:"PRIMARY"}),e(t,{type:"primary",ghost:!0,disabled:!0,children:"Ghost"}),e(t,{type:"link",disabled:!0,children:"Link"}),e(t,{type:"text",disabled:!0,children:"Text"})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"禁用按钮"})}}),e(i,{type:"secondary",spacing:"extended",children:"通过添加disabled属性可将按钮设置为不可用状态。"}),e(s,{get data(){return p.button_disabled}})]}})),u})(),(()=>{const u=U();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(n,{dir:"h",align:"center",get children(){return[e(t,{type:"primary",size:"large",children:"LARGE"}),e(t,{type:"primary",children:"DEFAULT"}),e(t,{type:"primary",size:"small",children:"SMALL"})]}}),e(n,{dir:"h",get children(){return[e(t,{type:"primary",size:"large",get icon(){return e(r,{name:"search1"})},children:"SEARCH"}),e(t,{type:"primary",size:"large",get icon(){return e(r,{name:"search1"})}}),e(t,{type:"primary",size:"large",circle:!0,get icon(){return e(r,{name:"search1"})}})]}}),e(n,{dir:"h",get children(){return[e(t,{type:"primary",size:"small",get icon(){return e(r,{name:"search1"})},children:"SEARCH"}),e(t,{type:"primary",size:"small",get icon(){return e(r,{name:"search1"})}}),e(t,{type:"primary",size:"small",circle:!0,get icon(){return e(r,{name:"search1"})}}),e(t,{type:"text",size:"small",children:"Text"})]}})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"按钮尺寸"})}}),e(i,{type:"secondary",spacing:"extended",children:"按钮有三种尺寸：大、默认（中）、小"}),e(i,{type:"secondary",spacing:"extended",children:"通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。"}),e(s,{get data(){return p.button_size}})]}})),u})(),(()=>{const u=w();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(n,{dir:"h",align:"center",get children(){return[e(t,{type:"primary",get icon(){return e(r,{name:"search1"})}}),e(t,{type:"default",get icon(){return e(r,{name:"search1"})}}),e(t,{type:"dashed",get icon(){return e(r,{name:"plus"})}}),e(t,{type:"primary",circle:!0,get icon(){return e(r,{name:"search1"})}})]}}),e(n,{dir:"h",align:"center",get children(){return[e(t,{type:"primary",get icon(){return e(r,{name:"search1"})},children:"Search"}),e(t,{type:"primary",get icon(){return e(r,{name:"search1"})},iconAlign:"right",children:"Search"})]}})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"图标按钮"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["通过设置",e(a,{code:!0,children:"icon"}),"属性在Button内嵌入一个Icon"]}}),e(i,{type:"secondary",spacing:"extended",get children(){return["使用Button的",e(a,{code:!0,children:"icon"}),"属性，图标位置将在最左边，通过设置 ",e(a,{code:!0,children:"iconAlign"})," 将按钮放置在后面。"]}}),e(i,{type:"secondary",spacing:"extended",get children(){return["通过设置",e(a,{code:!0,children:"circle"}),"属性，可将按钮置为圆的形状"]}}),e(s,{get data(){return p.button_icon}})]}})),u})(),(()=>{const u=H();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(n,{dir:"h",align:"center",get children(){return[e(t,{type:"primary",loading:!0,size:"small",children:"Sphinx"}),e(t,{type:"success",loading:!0,size:"small"}),e(t,{type:"success",loading:!0,size:"small",circle:!0})]}}),e(n,{dir:"h",get children(){return[e(t,{type:"primary",loading:!0,children:"Loading"}),e(t,{type:"primary",get loading(){return F()},onClick:()=>{m(!0),setTimeout(()=>{m(!1)},2500)},children:"Click Load"})]}})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"加载中状态"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["通过添加",e(a,{code:!0,children:"loading"}),"属性可以让按钮处于加载中状态,可点击动态设置"]}}),e(s,{get data(){return p.button_loading}})]}})),u})(),(()=>{const u=M();return o(u,e(d,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(h,{type:"primary",get children(){return[e(t,{children:"Copy"}),e(t,{children:"Paste"}),e(t,{children:"Search"})]}}),e(h,{type:"default",get children(){return[e(t,{children:"Copy"}),e(t,{children:"Paste"}),e(t,{children:"Search"})]}}),e(h,{type:"default",get children(){return[e(t,{get icon(){return e(r,{name:"home"})}}),e(t,{get icon(){return e(r,{name:"user"})}}),e(t,{get icon(){return e(r,{name:"search1"})}})]}}),e(h,{type:"default",size:"large",get children(){return[e(t,{get icon(){return e(r,{name:"home"})}}),e(t,{get icon(){return e(r,{name:"user"})}}),e(t,{get icon(){return e(r,{name:"search1"})}})]}}),e(h,{type:"default",disabled:!0,get children(){return[e(t,{get icon(){return e(r,{name:"home"})}}),e(t,{get icon(){return e(r,{name:"user"})}}),e(t,{get icon(){return e(r,{name:"search1"})}})]}})]}}),e(l,{align:"left",get children(){return e(a,{type:"primary",children:"按钮组"})}}),e(i,{type:"secondary",spacing:"extended",children:"将多个Button放入ButtonGroup内，可实现按钮组合的效果。"}),e(i,{type:"secondary",spacing:"extended",get children(){return["通过设置ButtonGroup的属性",e(a,{code:!0,children:"size"}),"为large和small，可将按钮组尺寸设置为大和小，不设置",e(a,{code:!0,children:"size"}),"，则为默认（中）尺寸。"]}}),e(i,{type:"secondary",spacing:"extended",get children(){return["通过设置 ",e(a,{code:!0,children:"disabled"}),"属性可以禁用按钮组"]}}),e(s,{get data(){return p.button_group}})]}})),u})(),(()=>{const u=O();return o(u,e(n,{dir:"v",size:24,get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(n,{id:"button_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Button Props"}),e(B,{columns:E,data:R,border:!0,size:"small"})]}}),e(n,{id:"button_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Button Events"}),e(B,{columns:f,data:T,border:!0,size:"small"})]}}),e(n,{id:"button_group_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"ButtonGroup Props"}),e(B,{columns:E,data:G,border:!0,size:"small"})]}})]}})),u})()]}})),g})(),e(b,{data:k})]};export{V as default};
