import{c as C,u as y,i as w,a as e,S as d,J as u,K as o,M as r,I as i,T as n,P as l,B as v,d as E,t as s}from"./index-3a33c8c5.js";import{T as g}from"./Title-61428187.js";import{C as c}from"./index-2f5e5bd6.js";import{D as p,a,C as F}from"./code-55c74af4.js";import{p as I}from"./columns-cd2d5c33.js";import{h as A}from"./hljs-35357388.js";const B=`<Dropdown align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>下拉菜单</Text>
</Dropdown>`,x=`const [visible, setVisible] = createSignal(false);

<Space dir="h">
    <Dropdown trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>Click</Text>
    </Dropdown>



    <Dropdown trigger="contextMenu" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>rightClick</Text>
    </Dropdown>


    <Dropdown trigger="custom" align="bottom" 
        visible={[visible, setVisible]}
        menu={<div style={{width: '150px', padding: '20px', background: '#fff'}}>
        <div>dropdown内容</div>
        <Button type='primary' onClick={() => {
            setVisible(false)
        }}>关闭</Button>
    </div>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>custom</Text>
    </Dropdown>
</Space>`,M=`<Dropdown theme="dark" trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>暗色菜单</Text>
</Dropdown>`,_=`<Dropdown transfer trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
    <Text>下拉菜单</Text>
</Dropdown>`,T=`<Space dir="h">
    <Dropdown trigger="click" align="rightTop" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>右侧</Text>
    </Dropdown>

    <Dropdown trigger="click" align="bottomRight" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>右下侧</Text>
    </Dropdown>
</Space>`,S=`<Dropdown disabled trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>下拉菜单</Text>
</Dropdown>`,k=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"trigger",desc:"触发方式 hover|click|contextMenu|custom",type:"string",default:"hover"},{name:"handler",desc:"触发事件的元素",type:"string",default:""},{name:"align",desc:"触发方式 bottom|bottomLeft|bottomRight|right|left|rightTop|leftTop",type:"string",default:"bottom"},{name:"menu",desc:"下拉菜单内容",type:"any",default:""},{name:"visible",desc:"菜单显隐绑定属性",type:"Function[]",default:""},{name:"transfer",desc:"是否将弹层放置于 body 内，在overflow 为 hidden的容器内效果更友好",type:"boolean",default:""},{name:"theme",desc:"主题色 dark|light",type:"string",default:"light"},{name:"disabled",desc:"禁用状态",type:"boolean",default:""},{name:"revers",desc:"超出范围反向显示",type:"boolean",default:""},{name:"onSelect",desc:"选择菜单项选中事件",type:"Function",default:""}],L=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"disabled",desc:"禁用状态",type:"boolean",default:""},{name:"name",desc:"菜单项名称",type:"string",default:""}],P=[{id:"dropdown_base",text:"基础用法"},{id:"dropdown_trigger",text:"触发条件"},{id:"dropdown_theme",text:"主题"},{id:"dropdown_transfer",text:"Transfer"},{id:"dropdown_align",text:"位置"},{id:"dropdown_disabled",text:"禁用"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_item_props",text:"菜单项属性"}],m={dropdown_base:B,dropdown_trigger:x,dropdown_theme:M,dropdown_transfer:_,dropdown_align:T,dropdown_disabled:S},b=s("<br>"),j=s('<div class="sys-ctx-main-left">'),$=s("<div><div>dropdown内容");function q(){const[f,h]=C(!1);return[(()=>{const D=j();return y(A,D,()=>""),w(D,e(d,{dir:"v",size:32,get children(){return[e(g,{heading:2,children:"Dropdown 下拉菜单"}),e(d,{id:"dropdown_base",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{align:"bottomLeft",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"下拉菜单"})}}),e(p,{align:"left",get children(){return e(n,{type:"primary",children:"基础用法"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["需要配合 DropdownMenu 和 DropdownItem 两个组件来使用。",b(),"选中菜单项触发 ",e(n,{code:!0,children:"onSelect"})," 事件"]}}),e(a,{get data(){return m.dropdown_base}})]}})}}),e(d,{id:"dropdown_trigger",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(d,{dir:"h",get children(){return[e(u,{trigger:"click",align:"bottomLeft",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"Click"})}}),e(u,{trigger:"contextMenu",align:"bottomLeft",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"rightClick"})}}),e(u,{trigger:"custom",align:"bottom",visible:[f,h],get menu(){return(()=>{const t=$();return t.firstChild,t.style.setProperty("width","150px"),t.style.setProperty("padding","20px"),t.style.setProperty("background","#fff"),w(t,e(v,{type:"primary",onClick:()=>{h(!1)},children:"关闭"}),null),t})()},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"custom"})}})]}}),e(p,{align:"left",get children(){return e(n,{type:"primary",children:"触发条件"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["通过设置属性 ",e(n,{code:!0,children:"trigger"})," 可以更改触发方式，可选项为 ",e(n,{code:!0,children:"click"})," 、 ",e(n,{code:!0,children:"hover(默认)"}),"、 ",e(n,{code:!0,children:"contextMenu"})," 或 ",e(n,{code:!0,children:"custom(自定义)"}),"。",b(),"触发方式设置为 ",e(n,{code:!0,children:"custom"})," 自定义时，需手动设置 ",e(n,{code:!0,children:"visible"})," 属性来控制下拉框的显示。"]}}),e(a,{get data(){return m.dropdown_trigger}})]}})}}),e(d,{id:"dropdown_theme",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{theme:"dark",trigger:"click",align:"bottomLeft",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"暗色菜单"})}}),e(p,{align:"left",get children(){return e(n,{type:"primary",children:"主题"})}}),e(l,{type:"secondary",spacing:"extended",children:"通过 theme 属性可以设置暗色下拉菜单 dark。"}),e(a,{get data(){return m.dropdown_theme}})]}})}}),e(d,{id:"dropdown_transfer",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{transfer:!0,trigger:"click",align:"bottomLeft",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"下拉菜单"})}}),e(p,{align:"left",get children(){return e(n,{type:"primary",children:"Transfer"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(n,{code:!0,children:"transfer"})," 属性可以让下拉菜单渲染到Body节点下"]}}),e(a,{get data(){return m.dropdown_transfer}})]}})}}),e(d,{id:"dropdown_align",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(d,{dir:"h",get children(){return[e(u,{trigger:"click",align:"rightTop",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"右侧"})}}),e(u,{trigger:"click",align:"bottomRight",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"右下侧"})}})]}}),e(p,{align:"left",get children(){return e(n,{type:"primary",children:"位置"})}}),e(l,{type:"secondary",spacing:"extended",children:"align属性支持12个方位， 最常用的是bottom/bottomLeft/bottomRight, 默认为bottom"}),e(a,{get data(){return m.dropdown_align}})]}})}}),e(d,{id:"dropdown_disabled",dir:"v",get children(){return e(c,{bordered:!0,get children(){return[e(u,{disabled:!0,trigger:"click",align:"bottomLeft",get menu(){return e(o,{get children(){return[e(r,{children:"驴打滚"}),e(r,{children:"炸酱面"}),e(r,{disabled:!0,children:"豆汁儿"}),e(r,{divided:!0,get children(){return["北京烤鸭",e(i,{name:"chevron-right"}),e(o,{get children(){return[e(r,{name:"挂炉烤鸭",children:"挂炉烤鸭"}),e(r,{children:"焖炉烤鸭"})]}})]}})]}})},onSelect:t=>{console.log(t)},get children(){return e(n,{children:"下拉菜单"})}}),e(p,{align:"left",get children(){return e(n,{type:"primary",children:"禁用"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(n,{code:!0,children:"disabled"})," 属性可以禁用菜单"]}}),e(a,{get data(){return m.dropdown_disabled}})]}})}}),e(d,{dir:"v",size:24,id:"comp_api",get children(){return[e(g,{type:"primary",heading:3,children:"API"}),e(d,{id:"comp_props",dir:"v",get children(){return[e(g,{type:"primary",heading:4,children:"Dropdown Props"}),e(E,{columns:I,data:k,border:!0,size:"small"})]}}),e(d,{id:"comp_item_props",dir:"v",get children(){return[e(g,{type:"primary",heading:4,children:"DropdownItem Props"}),e(E,{columns:I,data:L,border:!0,size:"small"})]}})]}})]}})),D})(),e(F,{data:P})]}export{q as default};
