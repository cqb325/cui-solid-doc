import{c as b,u as w,i as l,a as t,S as r,P as e,T as u,B as n,l as S,I as F,t as i}from"./index-5e0fdc25.js";import{T as g}from"./Title-abffd9c9.js";import{C as v}from"./index-7b04ac17.js";import{D as s,a as m,T as $,p as T,C as x}from"./code-f8e23b11.js";import{P as h}from"./Paragraph-3448cd8e.js";import{h as E}from"./hljs-74a5c6d1.js";import"./index-b9bc807d.js";import"./index-1c667118.js";import"./index-4677dd28.js";import"./index-6c8647a0.js";import"./index-c23a4a56.js";import"./index-4dd567cf.js";import"./dayjs.min-ea173184.js";import"./countUp.min-350bca8d.js";import"./index-9079dd17.js";import"./index-2d5de52b.js";import"./Option-b2064aaf.js";import"./Value-53f54136.js";import"./index-e15ddd1b.js";import"./Recommend-896a7f0e.js";import"./index-55f40996.js";import"./index-fcdb4629.js";import"./Item-9aa8d285.js";import"./EmptyOption-a0a97b87.js";import"./index-ac540d5b.js";import"./index-fc6b2245.js";import"./ListItem-5ff4446f.js";import"./index-03a710f2.js";import"./index-0f2ca1c5.js";import"./index-d979f2ca.js";import"./index-0d1b63ee.js";import"./index-ef2935ae.js";import"./Navigations-4da64b19.js";import"./PageItem-9e5be538.js";import"./index-5bca1396.js";import"./index-24c40b86.js";import"./index-719e07c0.js";import"./index-0fcf3f59.js";import"./index-5c76b353.js";import"./index-6e7171b5.js";import"./index-a7132a78.js";import"./_commonjsHelpers-725317a4.js";import"./Collapase-29602e2e.js";import"./useSlots-be94a5a8.js";import"./index-5a242dd5.js";import"./index-93f1e655.js";import"./input-62bed655.js";import"./createField-47c85f73.js";import"./index-13c54061.js";const R=`<Space dir="v">
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
</Space>`,D=[{name:"align",desc:"位置top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom",type:"string",default:"right"},{name:"trigger",desc:"触发条件 hover|click",type:"string",default:"hover"},{name:"disabled",desc:"禁用状态",type:"boolean",default:""},{name:"arrow",desc:"显示箭头",type:"boolean",default:""},{name:"theme",desc:"主题",type:"string",default:""},{name:"hideDelay",desc:"隐藏延迟",type:"number",default:"200"},{name:"content",desc:"提示内容",type:"string|JSXElement",default:""},{name:"visible",desc:"显示隐藏控制",type:"Function[]",default:""},{name:"onOpen",desc:"打开回调函数",type:"Function",default:""}],z=[{id:"popover_base",text:"基础用法"},{id:"popover_align",text:"位置"},{id:"popover_controller",text:"可控"},{id:"comp_api",text:"API"},{id:"comp_props",text:"气泡属性"}],C={popover_base:R,popover_align:A,popover_controller:L},j=i("<span>OVER"),P=i("<div>"),_=i("<span>Click"),I=i("<span>confirm"),V=i("<div><div>"),O=i('<div class="sys-ctx-main-left">'),p=i("<div><div>Content</div><div>Content</div><div>Content"),J=i("<div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!"),X=i("<div> "),q=i("<div>是否确认删除该信息");function Jt(){const[k,f]=b(!1),d={width:"120px","text-align":"center"};return[(()=>{const a=O();return w(E,a,()=>""),l(a,t(r,{dir:"v",size:32,get children(){return[t(g,{heading:2,children:"Popover 气泡提示"}),t(r,{id:"popover_base",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[(()=>{const c=P();return l(c,t(e,{content:"over Content",get children(){return j()}})),c})(),(()=>{const c=P();return l(c,t(e,{content:"click Content",trigger:"click",get children(){return _()}})),c})()]}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"基础用法"})}}),t(h,{type:"secondary",spacing:"extended",children:"支持两种种触发方式：鼠标悬停、点击。默认是鼠标悬停。"}),t(m,{get data(){return C.popover_base}})]}})}}),t(r,{id:"popover_align",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(r,{dir:"v",align:"center",get children(){return t(r,{dir:"v",style:{width:"500px"},get children(){return[t(r,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"topLeft",arrow:!0,get children(){return t(n,{style:d,children:"Top Left"})}}),t(e,{content:"Content",trigger:"click",align:"top",arrow:!0,get children(){return t(n,{style:d,children:"Top Center"})}}),t(e,{content:"Content",trigger:"click",align:"topRight",arrow:!0,get children(){return t(n,{style:d,children:"Top Right"})}})]}}),t(S,{get children(){return[t(r,{dir:"v",get children(){return[t(e,{get content(){return p()},trigger:"click",align:"leftTop",arrow:!0,get children(){return t(n,{children:"Left Top"})}}),t(e,{get content(){return p()},trigger:"click",align:"left",arrow:!0,get children(){return t(n,{children:"Left Center"})}}),t(e,{get content(){return p()},trigger:"click",align:"leftBottom",arrow:!0,get children(){return t(n,{children:"Left Bottom"})}})]}}),t(r,{dir:"v",get children(){return[t(e,{get content(){return p()},trigger:"click",align:"rightTop",arrow:!0,get children(){return t(n,{children:"Right Top"})}}),t(e,{get content(){return p()},trigger:"click",align:"right",arrow:!0,get children(){return t(n,{children:"Right Center"})}}),t(e,{get content(){return p()},trigger:"click",align:"rightBottom",arrow:!0,get children(){return t(n,{children:"Right Bottom"})}})]}})]}}),t(r,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"bottomLeft",arrow:!0,get children(){return t(n,{style:d,children:"Bottom Left"})}}),t(e,{content:"Content",trigger:"click",align:"bottom",arrow:!0,get children(){return t(n,{style:d,children:"Bottom Center"})}}),t(e,{content:"Content",trigger:"click",align:"bottomRight",arrow:!0,get children(){return t(n,{style:d,children:"Bottom Right"})}})]}})]}})}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"位置"})}}),t(h,{type:"secondary",spacing:"extended",children:"支持12个不同的方向显示，具体配置可查看API。"}),t(m,{get data(){return C.popover_align}})]}})}}),t(r,{id:"popover_controller",dir:"v",get children(){return t(v,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){const c=V(),y=c.firstChild;return l(c,t(e,{visible:[k,f],theme:"light",get content(){return(()=>{const o=J();return o.firstChild.nextSibling.nextSibling.nextSibling,l(o,t(n,{type:"text",size:"small",onClick:()=>{f(!1)},children:"Close"}),null),o})()},arrow:!0,trigger:"click",get children(){return _()}}),y),l(y,t(e,{theme:"light",align:"topRight",get content(){return t(r,{dir:"v",style:{width:"150px"},get children(){return[(()=>{const o=X(),B=o.firstChild;return l(o,t(F,{name:"help-circle",color:"var(--cui-warning-color)"}),B),l(o,t(u,{children:"确认用户信息"}),null),o})(),q()]}})},arrow:!0,confirm:!0,onOk:()=>(console.log(1),new Promise(o=>{setTimeout(()=>{o(!1)},2e3)})),get children(){return I()}})),c}}),t(s,{align:"left",get children(){return t(u,{type:"primary",children:"可控"})}}),t(h,{type:"secondary",spacing:"extended",children:"visible属性为可控属性"}),t(m,{get data(){return C.popover_controller}})]}})}}),t(r,{dir:"v",size:24,id:"comp_api",get children(){return[t(g,{type:"primary",heading:3,children:"API"}),t(r,{id:"comp_props",dir:"v",get children(){return[t(g,{type:"primary",heading:4,children:"Popover Props"}),t($,{columns:T,data:D,border:!0,size:"small"})]}})]}})]}})),a})(),t(x,{data:z})]}export{Jt as default};
