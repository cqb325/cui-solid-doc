import{u as C,i as u,a as t,S as e,T as a,P as r,B as i,o as T,d as y,t as l}from"./index-16a86ef8.js";import{C as c}from"./index-7042031b.js";import{T as n,D as h,a as g,C as E}from"./code-8b8cc1c0.js";import{T as B}from"./Title-50812969.js";import{p as _}from"./columns-cd2d5c33.js";import{h as b}from"./hljs-d1d68b29.js";const F=`<Space dir="h">
    <Tooltip content={<div>Tip Content</div>}>
        <span>mouse over show tips</span>
    </Tooltip>
</Space>`,S=`const style = {width: '120px', 'text-align': 'center'}

<Space dir="v" align="center">
    <Space dir="v" style={{width: '500px'}}>
        <Space dir="h" align="center" justify="center" size={30}>
            <Tooltip content="Content" align="topLeft">
                <Button style={style}>Top Left</Button>
            </Tooltip>
            <Tooltip content="Content" align="top">
                <Button style={style}>Top Center</Button>
            </Tooltip>
            <Tooltip content="Content" align="topRight">
                <Button style={style}>Top Right</Button>
            </Tooltip>
        </Space>
        <BothSide>
            <Space dir="v">
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftTop">
                    <Button>Left Top</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="left">
                    <Button>Left Center</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftBottom">
                    <Button>Left Bottom</Button>
                </Tooltip>
            </Space>
            <Space dir="v">
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightTop">
                    <Button>Right Top</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="right">
                    <Button>Right Center</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightBottom">
                    <Button>Right Bottom</Button>
                </Tooltip>
            </Space>
        </BothSide>
        <Space dir="h" align="center" justify="center" size={30}>
            <Tooltip content="Content" align="bottomLeft">
                <Button style={style}>Bottom Left</Button>
            </Tooltip>
            <Tooltip content="Content" align="bottom">
                <Button style={style}>Bottom Center</Button>
            </Tooltip>
            <Tooltip content="Content" align="bottomRight">
                <Button style={style}>Bottom Right</Button>
            </Tooltip>
        </Space>
    </Space>
</Space>`,A=`<Space dir="h">
    <Tooltip content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
        <Paragraph style={{color: '#fff'}}>自定义多行内容</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`,x=`<Space dir="h">
    <Tooltip disabled content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`,D=`<Space dir="h">
    <Tooltip theme='light' content={<div>
        <Paragraph>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>

    <Tooltip content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`,P=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"align",desc:"位置top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom",type:"string",default:"bottom"},{name:"theme",desc:"样式 light|dark",type:"string",default:"dark"},{name:"content",desc:"提示内容",type:"any",default:""},{name:"disabled",desc:"禁用状态",type:"boolean",default:""}],L=[{id:"tooltip_base",text:"基础用法"},{id:"popover_align",text:"位置"},{id:"tooltip_multi",text:"多行内容"},{id:"tooltip_disabled",text:"禁用"},{id:"tooltip_theme",text:"样式"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],s={tooltip_base:F,popover_align:S,tooltip_multi:A,tooltip_disabled:x,tooltip_theme:D},R=l("<span>mouse over show tips"),$=l("<br>"),v=l("<span>show tips"),w=l('<div class="sys-ctx-main-left">'),z=l("<div>Tip Content"),p=l("<div><div>Content</div><div>Content</div><div>Content"),m=l("<div>");function q(){const d={width:"120px","text-align":"center"};return[(()=>{const f=w();return C(b,f,()=>""),u(f,t(e,{dir:"v",size:32,get children(){return[t(B,{heading:2,children:"Tooltip 文字提示"}),t(e,{id:"tooltip_base",dir:"v",get children(){return t(c,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return t(n,{get content(){return z()},get children(){return R()}})}}),t(h,{align:"left",get children(){return t(a,{type:"primary",children:"基础用法"})}}),t(r,{type:"secondary",spacing:"extended",get children(){return["简单的展示，添加属性closable可以关闭标签。",$(),"点击关闭标签时，会触发 onClose 事件。"]}}),t(g,{get data(){return s.tooltip_base}})]}})}}),t(e,{id:"popover_align",dir:"v",get children(){return t(c,{bordered:!0,get children(){return[t(e,{dir:"v",align:"center",get children(){return t(e,{dir:"v",style:{width:"500px"},get children(){return[t(e,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(n,{content:"Content",align:"topLeft",get children(){return t(i,{style:d,children:"Top Left"})}}),t(n,{content:"Content",align:"top",get children(){return t(i,{style:d,children:"Top Center"})}}),t(n,{content:"Content",align:"topRight",get children(){return t(i,{style:d,children:"Top Right"})}})]}}),t(T,{get children(){return[t(e,{dir:"v",get children(){return[t(n,{get content(){return p()},align:"leftTop",get children(){return t(i,{children:"Left Top"})}}),t(n,{get content(){return p()},align:"left",get children(){return t(i,{children:"Left Center"})}}),t(n,{get content(){return p()},align:"leftBottom",get children(){return t(i,{children:"Left Bottom"})}})]}}),t(e,{dir:"v",get children(){return[t(n,{get content(){return p()},align:"rightTop",get children(){return t(i,{children:"Right Top"})}}),t(n,{get content(){return p()},align:"right",get children(){return t(i,{children:"Right Center"})}}),t(n,{get content(){return p()},align:"rightBottom",get children(){return t(i,{children:"Right Bottom"})}})]}})]}}),t(e,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(n,{content:"Content",align:"bottomLeft",get children(){return t(i,{style:d,children:"Bottom Left"})}}),t(n,{content:"Content",align:"bottom",get children(){return t(i,{style:d,children:"Bottom Center"})}}),t(n,{content:"Content",align:"bottomRight",get children(){return t(i,{style:d,children:"Bottom Right"})}})]}})]}})}}),t(h,{align:"left",get children(){return t(a,{type:"primary",children:"位置"})}}),t(r,{type:"secondary",spacing:"extended",children:"支持12个不同的方向显示，具体配置可查看API。"}),t(g,{get data(){return s.popover_align}})]}})}}),t(e,{id:"tooltip_multi",dir:"v",get children(){return t(c,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return t(n,{get content(){return(()=>{const o=m();return u(o,t(r,{style:{color:"#fff"},children:"Tip Content"}),null),u(o,t(r,{style:{color:"#fff"},children:"自定义多行内容"}),null),o})()},get children(){return v()}})}}),t(h,{align:"left",get children(){return t(a,{type:"primary",children:"多行内容"})}}),t(r,{type:"secondary",spacing:"extended",children:"content内容为自定义JSX标签，可以编辑复杂内容。"}),t(g,{get data(){return s.tooltip_multi}})]}})}}),t(e,{id:"tooltip_disabled",dir:"v",get children(){return t(c,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return t(n,{disabled:!0,get content(){return(()=>{const o=m();return u(o,t(r,{style:{color:"#fff"},children:"Tip Content"})),o})()},get children(){return v()}})}}),t(h,{align:"left",get children(){return t(a,{type:"primary",children:"禁用"})}}),t(r,{type:"secondary",spacing:"extended",children:"设置disabled可以禁用提示。"}),t(g,{get data(){return s.tooltip_disabled}})]}})}}),t(e,{id:"tooltip_theme",dir:"v",get children(){return t(c,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return[t(n,{theme:"light",get content(){return(()=>{const o=m();return u(o,t(r,{children:"Tip Content"})),o})()},get children(){return v()}}),t(n,{get content(){return(()=>{const o=m();return u(o,t(r,{style:{color:"#fff"},children:"Tip Content"})),o})()},get children(){return v()}})]}}),t(h,{align:"left",get children(){return t(a,{type:"primary",children:"样式"})}}),t(r,{type:"secondary",spacing:"extended",children:"通过设置 theme 切换显示样式, 支持light和dark 默认dark"}),t(g,{get data(){return s.tooltip_theme}})]}})}}),t(e,{dir:"v",size:24,id:"comp_api",get children(){return[t(B,{type:"primary",heading:3,children:"API"}),t(e,{id:"comp_props",dir:"v",get children(){return[t(B,{type:"primary",heading:4,children:"Tooltip Props"}),t(y,{columns:_,data:P,border:!0,size:"small"})]}})]}})]}})),f})(),t(E,{data:L})]}export{q as default};
