import{c as b,u as w,i as l,a as t,S as r,P as e,T as u,B as n,l as S,I as F,t as i}from"./index-5e251d81.js";import{T as g}from"./Title-52a6bda3.js";import{C as v}from"./index-dff86af7.js";import{D as s,a as m,T as $,p as T,C as x}from"./code-c71fa51e.js";import{P as h}from"./Paragraph-a25cb645.js";import{h as E}from"./hljs-74a5c6d1.js";import"./index-c72fc3e9.js";import"./index-b8f19b5e.js";import"./index-5e5c6671.js";import"./index-7cc647cb.js";import"./index-cee92ff6.js";import"./index-ceefaa5c.js";import"./createGridOffset-dd5a9514.js";import"./dayjs.min-ea173184.js";import"./countUp.min-350bca8d.js";import"./index-97f12a81.js";import"./index-46f5a904.js";import"./Option-72426df3.js";import"./Value-bf1a2078.js";import"./index-50b8f727.js";import"./Recommend-9274b6f4.js";import"./index-bfe6ab9e.js";import"./index-abcb3dc5.js";import"./Item-eac954af.js";import"./EmptyOption-a97df827.js";import"./index-7e2e5a37.js";import"./index-c458963f.js";import"./ListItem-09e456b7.js";import"./index-8857f970.js";import"./index-ecc85791.js";import"./index-b1079608.js";import"./index-906e8388.js";import"./index-e5587131.js";import"./Navigations-46adbf5c.js";import"./PageItem-841382e7.js";import"./index-e7107b2c.js";import"./index-bef28995.js";import"./index-a61b21b1.js";import"./index-da424b8d.js";import"./index-77c05950.js";import"./index-dd0309f3.js";import"./index-e0a909f8.js";import"./_commonjsHelpers-725317a4.js";import"./Collapase-bfad3ffa.js";import"./useSlots-e8273d0f.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";import"./input-0366c6fe.js";import"./createField-7b35bf70.js";import"./index-b603bca5.js";const R=`<Space dir="v">
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
</Space>`,A=`<Space dir="v" align="center">
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
</Space>`,L=`<Space dir="v">
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
</Space>`,D=[{name:"align",desc:"位置top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom",type:"string",default:"right"},{name:"trigger",desc:"触发条件 hover|click",type:"string",default:"hover"},{name:"disabled",desc:"禁用状态",type:"boolean",default:""},{name:"arrow",desc:"显示箭头",type:"boolean",default:""},{name:"theme",desc:"主题",type:"string",default:""},{name:"hideDelay",desc:"隐藏延迟",type:"number",default:"200"},{name:"content",desc:"提示内容",type:"string|JSXElement",default:""},{name:"visible",desc:"显示隐藏控制",type:"Function[]",default:""},{name:"onOpen",desc:"打开回调函数",type:"Function",default:""}],z=[{id:"popover_base",text:"基础用法"},{id:"popover_align",text:"位置"},{id:"popover_controller",text:"可控"},{id:"comp_api",text:"API"},{id:"comp_props",text:"气泡属性"}],C={popover_base:R,popover_align:A,popover_controller:L},j=i("<span>OVER"),P=i("<div>"),_=i("<span>Click"),I=i("<span>confirm"),V=i("<div><div>"),O=i('<div class="sys-ctx-main-left">'),p=i("<div><div>Content</div><div>Content</div><div>Content"),J=i("<div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!"),X=i("<div> "),q=i("<div>是否确认删除该信息");function Xt(){const[k,f]=b(!1),d={width:"120px","text-align":"center"};return[(()=>{const a=O();return w(E,a,()=>""),l(a,t(r,{dir:"v",size:32,get children(){return[t(g,{heading:2,children:"Popover 气泡提示"}),t(r,{id:"popover_base",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[(()=>{const c=P();return l(c,t(e,{content:"over Content",get children(){return j()}})),c})(),(()=>{const c=P();return l(c,t(e,{content:"click Content",trigger:"click",get children(){return _()}})),c})()]}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"基础用法"})}}),t(h,{type:"secondary",spacing:"extended",children:"支持两种种触发方式：鼠标悬停、点击。默认是鼠标悬停。"}),t(m,{get data(){return C.popover_base}})]}})}}),t(r,{id:"popover_align",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(r,{dir:"v",align:"center",get children(){return t(r,{dir:"v",style:{width:"500px"},get children(){return[t(r,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"topLeft",arrow:!0,get children(){return t(n,{style:d,children:"Top Left"})}}),t(e,{content:"Content",trigger:"click",align:"top",arrow:!0,get children(){return t(n,{style:d,children:"Top Center"})}}),t(e,{content:"Content",trigger:"click",align:"topRight",arrow:!0,get children(){return t(n,{style:d,children:"Top Right"})}})]}}),t(S,{get children(){return[t(r,{dir:"v",get children(){return[t(e,{get content(){return p()},trigger:"click",align:"leftTop",arrow:!0,get children(){return t(n,{children:"Left Top"})}}),t(e,{get content(){return p()},trigger:"click",align:"left",arrow:!0,get children(){return t(n,{children:"Left Center"})}}),t(e,{get content(){return p()},trigger:"click",align:"leftBottom",arrow:!0,get children(){return t(n,{children:"Left Bottom"})}})]}}),t(r,{dir:"v",get children(){return[t(e,{get content(){return p()},trigger:"click",align:"rightTop",arrow:!0,get children(){return t(n,{children:"Right Top"})}}),t(e,{get content(){return p()},trigger:"click",align:"right",arrow:!0,get children(){return t(n,{children:"Right Center"})}}),t(e,{get content(){return p()},trigger:"click",align:"rightBottom",arrow:!0,get children(){return t(n,{children:"Right Bottom"})}})]}})]}}),t(r,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"bottomLeft",arrow:!0,get children(){return t(n,{style:d,children:"Bottom Left"})}}),t(e,{content:"Content",trigger:"click",align:"bottom",arrow:!0,get children(){return t(n,{style:d,children:"Bottom Center"})}}),t(e,{content:"Content",trigger:"click",align:"bottomRight",arrow:!0,get children(){return t(n,{style:d,children:"Bottom Right"})}})]}})]}})}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"位置"})}}),t(h,{type:"secondary",spacing:"extended",children:"支持12个不同的方向显示，具体配置可查看API。"}),t(m,{get data(){return C.popover_align}})]}})}}),t(r,{id:"popover_controller",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){const c=V(),y=c.firstChild;return l(c,t(e,{visible:[k,f],theme:"light",get content(){return(()=>{const o=J();return o.firstChild.nextSibling.nextSibling.nextSibling,l(o,t(n,{type:"text",size:"small",onClick:()=>{f(!1)},children:"Close"}),null),o})()},arrow:!0,trigger:"click",get children(){return _()}}),y),l(y,t(e,{theme:"light",align:"topRight",get content(){return t(r,{dir:"v",style:{width:"150px"},get children(){return[(()=>{const o=X(),B=o.firstChild;return l(o,t(F,{name:"help-circle",color:"var(--cui-warning-color)"}),B),l(o,t(u,{children:"确认用户信息"}),null),o})(),q()]}})},arrow:!0,confirm:!0,onOk:()=>(console.log(1),new Promise(o=>{setTimeout(()=>{o(!1)},2e3)})),get children(){return I()}})),c}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"可控"})}}),t(h,{type:"secondary",spacing:"extended",children:"visible属性为可控属性"}),t(m,{get data(){return C.popover_controller}})]}})}}),t(r,{dir:"v",size:24,id:"comp_api",get children(){return[t(g,{type:"primary",heading:3,children:"API"}),t(r,{id:"comp_props",dir:"v",get children(){return[t(g,{type:"primary",heading:4,children:"Popover Props"}),t($,{columns:T,data:D,border:!0,size:"small"})]}})]}})]}})),a})(),t(x,{data:z})]}export{Xt as default};
