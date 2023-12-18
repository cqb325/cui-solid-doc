import{c as k,u as b,i as d,a as t,S as n,P as e,T as u,B as _,t as l}from"./index-0246dc72.js";import{C as p,B as r}from"./index-f479a69a.js";import{T as v}from"./Title-b2de7444.js";import{D as s,a as h,C as w}from"./code-558518d5.js";import{P as m}from"./Paragraph-7a7dff1a.js";import{T as S,p as F}from"./columns-43b26f11.js";import{h as T}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const x=`<Space dir="v">
    <div>
        <Popover content="over Content">
            <span>OVER</span>
        </Popover>
    </div>
    <div>
        <Popover content="click Content" trigger="click">
            <span>Click</span>
        </Popover>
    </div>
</Space>`,E=`<Space dir="v" align="center">
    <Space dir="v" style={{width: '500px'}}>
        <Space dir="h" align="center" justify="center" size={30}>
            <Popover content="Content" trigger="click" align="topLeft" arrow>
                <Button style={style}>Top Left</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="top" arrow>
                <Button style={style}>Top Center</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="topRight" arrow>
                <Button style={style}>Top Right</Button>
            </Popover>
        </Space>
        <BothSide>
            <Space dir="v">
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="leftTop" arrow>
                    <Button>Left Top</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="left" arrow>
                    <Button>Left Center</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="leftBottom" arrow>
                    <Button>Left Bottom</Button>
                </Popover>
            </Space>
            <Space dir="v">
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="rightTop" arrow>
                    <Button>Right Top</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="right" arrow>
                    <Button>Right Center</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="rightBottom" arrow>
                    <Button>Right Bottom</Button>
                </Popover>
            </Space>
        </BothSide>
        <Space dir="h" align="center" justify="center" size={30}>
            <Popover content="Content" trigger="click" align="bottomLeft" arrow>
                <Button style={style}>Bottom Left</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="bottom" arrow>
                <Button style={style}>Bottom Center</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="bottomRight" arrow>
                <Button style={style}>Bottom Right</Button>
            </Popover>
        </Space>
    </Space>
</Space>`,R=`<Space dir="v">
    <div>
        <Popover visible={[visible, setVisible]} content={<div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <Button type='text' size='small' onClick={() => {
                setVisible(false);
            }}>Close</Button>
        </div>} arrow trigger="click">
            <span>Click</span>
        </Popover>
    </div>
</Space>`,$=[{name:"align",desc:"位置top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom",type:"string",default:"right"},{name:"trigger",desc:"触发条件 hover|click",type:"string",default:"hover"},{name:"disabled",desc:"禁用状态",type:"boolean",default:""},{name:"arrow",desc:"显示箭头",type:"boolean",default:""},{name:"theme",desc:"主题",type:"string",default:""},{name:"hideDelay",desc:"隐藏延迟",type:"number",default:"200"},{name:"content",desc:"提示内容",type:"string|JSXElement",default:""},{name:"visible",desc:"显示隐藏控制",type:"Function[]",default:""},{name:"onOpen",desc:"打开回调函数",type:"Function",default:""}],L=[{id:"popover_base",text:"基础用法"},{id:"popover_align",text:"位置"},{id:"popover_controller",text:"可控"},{id:"comp_api",text:"API"},{id:"comp_props",text:"气泡属性"}],C={popover_base:x,popover_align:E,popover_controller:R},A=l("<span>OVER"),f=l("<div>"),B=l("<span>Click"),D=l('<div class="sys-ctx-main-left">'),c=l("<div><div>Content</div><div>Content</div><div>Content"),z=l("<div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!");function N(){const[P,y]=k(!1),i={width:"120px","text-align":"center"};return[(()=>{const a=D();return b(T,a,()=>""),d(a,t(n,{dir:"v",size:32,get children(){return[t(v,{heading:2,children:"Popover 气泡提示"}),t(n,{id:"popover_base",dir:"v",get children(){return t(p,{bordered:!0,get children(){return[t(n,{dir:"v",get children(){return[(()=>{const o=f();return d(o,t(e,{content:"over Content",get children(){return A()}})),o})(),(()=>{const o=f();return d(o,t(e,{content:"click Content",trigger:"click",get children(){return B()}})),o})()]}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"基础用法"})}}),t(m,{type:"secondary",spacing:"extended",children:"支持两种种触发方式：鼠标悬停、点击。默认是鼠标悬停。"}),t(h,{get data(){return C.popover_base}})]}})}}),t(n,{id:"popover_align",dir:"v",get children(){return t(p,{bordered:!0,get children(){return[t(n,{dir:"v",align:"center",get children(){return t(n,{dir:"v",style:{width:"500px"},get children(){return[t(n,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"topLeft",arrow:!0,get children(){return t(r,{style:i,children:"Top Left"})}}),t(e,{content:"Content",trigger:"click",align:"top",arrow:!0,get children(){return t(r,{style:i,children:"Top Center"})}}),t(e,{content:"Content",trigger:"click",align:"topRight",arrow:!0,get children(){return t(r,{style:i,children:"Top Right"})}})]}}),t(_,{get children(){return[t(n,{dir:"v",get children(){return[t(e,{get content(){return c()},trigger:"click",align:"leftTop",arrow:!0,get children(){return t(r,{children:"Left Top"})}}),t(e,{get content(){return c()},trigger:"click",align:"left",arrow:!0,get children(){return t(r,{children:"Left Center"})}}),t(e,{get content(){return c()},trigger:"click",align:"leftBottom",arrow:!0,get children(){return t(r,{children:"Left Bottom"})}})]}}),t(n,{dir:"v",get children(){return[t(e,{get content(){return c()},trigger:"click",align:"rightTop",arrow:!0,get children(){return t(r,{children:"Right Top"})}}),t(e,{get content(){return c()},trigger:"click",align:"right",arrow:!0,get children(){return t(r,{children:"Right Center"})}}),t(e,{get content(){return c()},trigger:"click",align:"rightBottom",arrow:!0,get children(){return t(r,{children:"Right Bottom"})}})]}})]}}),t(n,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"bottomLeft",arrow:!0,get children(){return t(r,{style:i,children:"Bottom Left"})}}),t(e,{content:"Content",trigger:"click",align:"bottom",arrow:!0,get children(){return t(r,{style:i,children:"Bottom Center"})}}),t(e,{content:"Content",trigger:"click",align:"bottomRight",arrow:!0,get children(){return t(r,{style:i,children:"Bottom Right"})}})]}})]}})}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"位置"})}}),t(m,{type:"secondary",spacing:"extended",children:"支持12个不同的方向显示，具体配置可查看API。"}),t(h,{get data(){return C.popover_align}})]}})}}),t(n,{id:"popover_controller",dir:"v",get children(){return t(p,{bordered:!0,get children(){return[t(n,{dir:"v",get children(){const o=f();return d(o,t(e,{visible:[P,y],get content(){return(()=>{const g=z();return g.firstChild.nextSibling.nextSibling.nextSibling,d(g,t(r,{type:"text",size:"small",onClick:()=>{y(!1)},children:"Close"}),null),g})()},arrow:!0,trigger:"click",get children(){return B()}})),o}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"可控"})}}),t(m,{type:"secondary",spacing:"extended",children:"visible属性为可控属性"}),t(h,{get data(){return C.popover_controller}})]}})}}),t(n,{dir:"v",size:24,id:"comp_api",get children(){return[t(v,{type:"primary",heading:3,children:"API"}),t(n,{id:"comp_props",dir:"v",get children(){return[t(v,{type:"primary",heading:4,children:"Popover Props"}),t(S,{columns:F,data:$,border:!0,size:"small"})]}})]}})]}})),a})(),t(w,{data:L})]}export{N as default};
