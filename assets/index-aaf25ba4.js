import{c as b,u as w,i as l,a as t,S as r,P as e,T as u,B as n,l as S,I as F,t as i}from"./index-69f0698f.js";import{T as g}from"./Title-48407536.js";import{C as v}from"./index-295b9dac.js";import{D as s,a as m,T as $,p as T,C as x}from"./code-0a2ad5d4.js";import{P as h}from"./Paragraph-6df96914.js";import{h as E}from"./hljs-74a5c6d1.js";import"./index-6592714e.js";import"./index-85c9dfcc.js";import"./index-c3a26805.js";import"./index-a9283ca5.js";import"./index-91d5aab7.js";import"./index-1d1d6e49.js";import"./dayjs.min-ea173184.js";import"./countUp.min-350bca8d.js";import"./index-bb815219.js";import"./index-df2b688f.js";import"./Option-d0adc857.js";import"./Value-9535b38f.js";import"./index-e1bbb7b0.js";import"./Recommend-fbdba255.js";import"./index-2dc69d42.js";import"./index-ef84a332.js";import"./Item-d1e5d1c8.js";import"./EmptyOption-809941ab.js";import"./index-bdda7ea4.js";import"./index-3ce0eef9.js";import"./ListItem-7a4504f1.js";import"./index-434b852f.js";import"./index-12515812.js";import"./index-237cd357.js";import"./index-9313f6aa.js";import"./index-b0629f6b.js";import"./Navigations-8993dbdf.js";import"./PageItem-fbe25071.js";import"./index-16ffbac4.js";import"./index-f749d622.js";import"./index-1f120136.js";import"./index-ab942c9c.js";import"./index-e6ae549e.js";import"./index-15a4b690.js";import"./index-8a74f0c0.js";import"./_commonjsHelpers-725317a4.js";import"./Collapase-56fdf1ff.js";import"./useSlots-306f7c02.js";import"./index-3c53b4a9.js";import"./index-7ce9db01.js";import"./input-194e738a.js";import"./createField-bb19acb2.js";import"./index-227a106d.js";const R=`<Space dir="v">
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
