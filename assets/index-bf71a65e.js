import{n as G,c as K,b as N,i as V,a as e,I as y,g as H,h as P,s as j,t as h,j as k,o as Q,p as U,q as W,u as Y,S as v,H as S,l as o,B as Z,V as _,T as w}from"./index-0b3654ac.js";import{C as ee}from"./Collapase-02b786ca.js";import{C as b,B as te}from"./index-d0333dca.js";import{T as ne}from"./index-7c7ede71.js";/* empty css             */import{T as I}from"./Title-3c943f91.js";import{D as C,a as E,C as ce}from"./code-442d7b0b.js";import{P as $}from"./Paragraph-c3d75a98.js";import{T as F,p as D}from"./columns-42b6d002.js";import{h as ie}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const oe=h('<div class="cm-accordion-content">'),ae=h('<div><div class="cm-accordion-title"><div class="cm-accordion-item-title-text">');function le(t){const s=se(),x=s?.signal,d=s?.onSelect,u=s?.flex?!1:s?.multi,[c,f]=x,[A,z]=K(!1),[O,B]=K(!1),q=()=>{let n,i=!1;if(u){const p=c();if(p.includes(t.name)){const m=p.indexOf(t.name);p.splice(m,1),n=[].concat(p),i=!1}else p.push(t.name),n=[].concat(p),i=!0}else if(c()===t.name){if(s?.flex)return;n="",i=!1}else n=t.name,i=!0;f(n),d&&d(t.name,i,n)};N(()=>{let n=!1;const i=c();u?n=i.includes(t.name):n=i===t.name,B(!1),z(n)});const J=()=>k(t,"cm-accordion-item",{"cm-accordion-item-active":A(),"cm-accordion-item-full":A()&&O()}),M=()=>{B(!0)};return(()=>{const n=ae(),i=n.firstChild,p=i.firstChild;return i.$$click=q,V(i,()=>t.icon,p),V(p,()=>t.title),V(i,e(y,{class:"cm-accordion-title-arrow",name:"chevron-right"}),null),V(n,e(ee,{get open(){return A()},onEnd:M,get children(){const m=oe();return V(m,()=>t.children),m}}),null),H(m=>{const R=J(),X=t.style;return m._v$=P(n,R,m._v$),m._v$2=j(n,X,m._v$2),m},{_v$:void 0,_v$2:void 0}),n})()}G(["click"]);const re=h("<div>"),L=U();function r(t){const s=()=>k(t,"cm-accordion",{"cm-flex-accordion":t.flex}),[x,d]=Q(t,"activeKey",t.multi?[]:""),u={flex:t.flex,multi:t.multi,signal:[x,d],onSelect:t.onSelect};return e(L.Provider,{value:u,get children(){const c=re();return V(c,()=>t.children),H(f=>{const A=s(),z=t.style;return f._v$=P(c,A,f._v$),f._v$2=j(c,z,f._v$2),f},{_v$:void 0,_v$2:void 0}),c}})}r.Item=le;const se=()=>W(L),de=`<HView class="components-layout-demo" size="450px">
    <View size="250px" style={{'text-align': 'initial', 'box-shadow': '2px 0 8px 0 rgba(29, 35, 41, 0.05)'}} class="layout-demo-sider">
        <Accordion onSelect={(name: string, open: boolean, v: any) => {
            console.log(name, open, v);
        }}>
            <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
            <Accordion.Item name="a2" title={<BothSide>
                <span>Title2</span>
                <Tag size='small' theme='success'>1234</Tag>
            </BothSide>} icon={<Icon name='cog'/>}>
                <p>content2</p>
                <p>content2</p>
                <p>content2</p>
                <p>content2</p>
            </Accordion.Item>
        </Accordion>
    </View>
    <VView style={centerStyle}>
        <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        <View style={centerStyle}></View>
        <View class='layout-demo-header' size="64px" style={centerStyle}></View>
    </VView>
</HView>`,ue=`const [activeKey, setActiveKey] = createSignal(['a2']);

<VView size="300px">
    <HView class="components-layout-demo" size="450px">
        <View size="250px" style={{'text-align': 'initial', overflow: 'auto'}} class="layout-demo-sider">
            <Accordion activeKey={[activeKey, setActiveKey]} multi onSelect={(name: string, open: boolean, v: any) => {
                console.log(name, open, v);
            }}>
                <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                <Accordion.Item name="a2" title="Title2" icon={<Icon name='cog'/>}>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                </Accordion.Item>
                <Accordion.Item name="a3" title="Title3" icon={<Icon name='flag'/>}>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                </Accordion.Item>
            </Accordion>
        </View>
        <VView style={centerStyle}>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
            <View style={centerStyle}>
                <Button onClick={() => {
                    setActiveKey(['a1']);
                }}>更新</Button>
            </View>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        </VView>
    </HView>
</VView>`,me=`<VView size="300px">
    <HView class="components-layout-demo" size="450px">
        <View size="250px" style={{'text-align': 'initial'}} class="layout-demo-sider">
            <Accordion activeKey='a1' flex onSelect={(name: string, open: boolean, v: any) => {
                console.log(name, open, v);
            }}>
                <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                <Accordion.Item name="a2" title="Title2" icon={<Icon name='cog'/>}>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                </Accordion.Item>
                <Accordion.Item name="a3" title="Title3" icon={<Icon name='flag'/>}>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                </Accordion.Item>
            </Accordion>
        </View>
        <VView style={centerStyle}>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
            <View style={centerStyle}></View>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        </VView>
    </HView>
</VView>`,pe=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"multi",desc:"可以选择多个面板展开",type:"boolean",default:""},{name:"activeKey",desc:"选中面板，绑定属性",type:"Function[]",default:""},{name:"flex",desc:"flex布局并且占满容器",type:"boolean",default:""},{name:"onSelect",desc:"面板选中事件",type:"Function",default:""}],ye=[{name:"name",desc:"面板名称",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"title",desc:"面板标题",type:"any",default:""},{name:"icon",desc:"面板标题图标",type:"JSXElement",default:""}],ge=[{id:"accordion_base",text:"基础用法"},{id:"accordion_multi",text:"多选"},{id:"accordion_flex",text:"占满容器"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_item_props",text:"子项属性"}],T={accordion_base:de,accordion_multi:ue,accordion_flex:me},a=h("<p>content2"),g=h("<p>content3"),he=h("<br>"),xe=h('<div class="sys-ctx-main-left">'),fe=h("<span>Title2"),l={"justify-content":"center"};function $e(){const[t,s]=K(["a2"]);return[(()=>{const x=xe();return Y(ie,x,()=>""),V(x,e(v,{dir:"v",size:32,get children(){return[e(I,{heading:2,children:"Accordion 手风琴面板"}),e(v,{id:"accordion_base",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(S,{class:"components-layout-demo",size:"450px",get children(){return[e(o,{size:"250px",style:{"text-align":"initial","box-shadow":"2px 0 8px 0 rgba(29, 35, 41, 0.05)"},class:"layout-demo-sider",get children(){return e(r,{onSelect:(d,u,c)=>{console.log(d,u,c)},get children(){return[e(r.Item,{name:"a1",title:"Title1",get icon(){return e(y,{name:"dashboard"})},children:"content1"}),e(r.Item,{name:"a2",get title(){return e(Z,{get children(){return[fe(),e(ne,{size:"small",theme:"success",children:"1234"})]}})},get icon(){return e(y,{name:"cog"})},get children(){return[a(),a(),a(),a()]}})]}})}}),e(_,{style:l,get children(){return[e(o,{class:"layout-demo-header",size:"64px",style:l}),e(o,{style:l}),e(o,{class:"layout-demo-header",size:"64px",style:l})]}})]}}),e(C,{align:"left",get children(){return e(w,{type:"primary",children:"基础用法"})}}),e($,{type:"secondary",spacing:"extended",children:"基础用法"}),e(E,{get data(){return T.accordion_base}})]}})}}),e(v,{id:"accordion_multi",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(_,{size:"300px",get children(){return e(S,{class:"components-layout-demo",size:"450px",get children(){return[e(o,{size:"250px",style:{"text-align":"initial",overflow:"auto"},class:"layout-demo-sider",get children(){return e(r,{activeKey:[t,s],multi:!0,onSelect:(d,u,c)=>{console.log(d,u,c)},get children(){return[e(r.Item,{name:"a1",title:"Title1",get icon(){return e(y,{name:"dashboard"})},children:"content1"}),e(r.Item,{name:"a2",title:"Title2",get icon(){return e(y,{name:"cog"})},get children(){return[a(),a(),a(),a()]}}),e(r.Item,{name:"a3",title:"Title3",get icon(){return e(y,{name:"flag"})},get children(){return[g(),g(),g(),g()]}})]}})}}),e(_,{style:l,get children(){return[e(o,{class:"layout-demo-header",size:"64px",style:l}),e(o,{style:l,get children(){return e(te,{onClick:()=>{s(["a1"])},children:"更新"})}}),e(o,{class:"layout-demo-header",size:"64px",style:l})]}})]}})}}),e(C,{align:"left",get children(){return e(w,{type:"primary",children:"多选"})}}),e($,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(w,{code:!0,children:"multi"})," 属性可以展开多个面板",he(),e(w,{code:!0,children:"activeKey"})," 属性为可控展开面板属性"]}}),e(E,{get data(){return T.accordion_multi}})]}})}}),e(v,{id:"accordion_flex",dir:"v",get children(){return e(b,{bordered:!0,get children(){return[e(_,{size:"300px",get children(){return e(S,{class:"components-layout-demo",size:"450px",get children(){return[e(o,{size:"250px",style:{"text-align":"initial"},class:"layout-demo-sider",get children(){return e(r,{activeKey:"a1",flex:!0,onSelect:(d,u,c)=>{console.log(d,u,c)},get children(){return[e(r.Item,{name:"a1",title:"Title1",get icon(){return e(y,{name:"dashboard"})},children:"content1"}),e(r.Item,{name:"a2",title:"Title2",get icon(){return e(y,{name:"cog"})},get children(){return[a(),a(),a(),a()]}}),e(r.Item,{name:"a3",title:"Title3",get icon(){return e(y,{name:"flag"})},get children(){return[g(),g(),g(),g()]}})]}})}}),e(_,{style:l,get children(){return[e(o,{class:"layout-demo-header",size:"64px",style:l}),e(o,{style:l}),e(o,{class:"layout-demo-header",size:"64px",style:l})]}})]}})}}),e(C,{align:"left",get children(){return e(w,{type:"primary",children:"占满容器"})}}),e($,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(w,{code:!0,children:"flex"})," 属性可以将手风琴占满容器"]}}),e(E,{get data(){return T.accordion_flex}})]}})}}),e(v,{dir:"v",size:24,id:"comp_api",get children(){return[e(I,{type:"primary",heading:3,children:"API"}),e(v,{id:"comp_props",dir:"v",get children(){return[e(I,{type:"primary",heading:4,children:"Accordion Props"}),e(F,{columns:D,data:pe,border:!0,size:"small"})]}}),e(v,{id:"comp_item_props",dir:"v",get children(){return[e(I,{type:"primary",heading:4,children:"Accordion.Item Props"}),e(F,{columns:D,data:ye,border:!0,size:"small"})]}})]}})]}})),x})(),e(ce,{data:ge})]}export{$e as default};
