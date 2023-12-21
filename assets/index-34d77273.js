import{i as a,a as e,s as C,F,g as I,h as A,t as s,m as j,j as P,x as B,f as U,c as O,u as q,S as c,y as R,T as x}from"./index-83d09049.js";import{h as H}from"./hljs-74a5c6d1.js";import{D as v,a as f,C as J}from"./code-799e34f9.js";import{T as _,p as w}from"./columns-300f9de5.js";import{T as m}from"./Title-9eb0645c.js";import{C as $,B as E}from"./index-e34e5d64.js";import{S as G}from"./index-6d1d74fc.js";import{A as D}from"./index-8d2cc1ec.js";import{P as b}from"./Paragraph-8bc200e6.js";import{R as T,C as k}from"./index-a49f3cfc.js";import"./_commonjsHelpers-725317a4.js";import"./createField-01899bee.js";const X=`const [loading, setLoading] = createSignal(true)
const showContent = () => {
    setLoading(!loading());
}

<div>
    <Switch onChange={() => showContent()} />
    <span style={{ 'margin-left': '10px' }}>显示加载内容</span>
</div>
<br/>
<div>
    <Skeleton placeholder={<Skeleton.Avatar />} loading={loading()}>
        <Avatar style={{color: "blue", 'margin-bottom': '10px'}}>U</Avatar>
    </Skeleton>
    <br/>
    <Skeleton width="150px" height="150px" placeholder={<Skeleton.Image />} loading={loading()}>
        <Image
            src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
            width="150px"
            height="150px"
            alt="avatar"
        />
    </Skeleton>
    <br/>
    <Skeleton
        style={{ width: '80px' }}
        placeholder={<Skeleton.Title style={{ 'margin-bottom': '10px' }} />}
        loading={loading()}
    >
        <h4 style={{ 'margin-bottom': 0 }}>CUI/SolidJs</h4>
    </Skeleton>
    <br/>
    <Skeleton width="240px" placeholder={<Skeleton.Paragraph rows={2} />} loading={loading()}>
        <p style={{width: '240px'}}>精心打磨每一个组件的用户体验，从用户的角度考虑每个组件的使用场景。</p>
    </Skeleton>
    <br/>
    <Skeleton placeholder={<Skeleton.Button />} loading={loading()}>
        <Button>Button</Button>
    </Skeleton>
</div>`,K=`<Skeleton placeholder={<div>
    <Skeleton.Image width="200px" height="150px"/>
    <Skeleton.Title width="120px" style={{ 'margin-top': '10px' }} />
</div>} loading={true}>
    <img
        src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
        height="150px"
        alt="avatar"
    />
    <h4>CUI/SolidJs</h4>
</Skeleton>`,M=`<Skeleton placeholder={<div style={{display: 'flex', "align-items": 'flex-start'}}>
    <Skeleton.Avatar shape='square' style={{ 'margin-right': '12px' }} />
    <div>
        <Skeleton.Title width='120px' style={{ 'margin-bottom': '12px', 'margin-top': '12px' }} />
        <Skeleton.Paragraph width={['240px', '220px', '180px']} rows={3} />
    </div>
    </div>} loading={true}>
    <div style={{display: 'flex', "align-items": 'flex-start'}}>
    <Avatar style={{ 'margin-right': '12px' }}>
        UI
    </Avatar>
    <div>
        <h3>Semi UI</h3>
        <p>Hi, Bytedance dance dance.</p>
        <p>Hi, Bytedance dance dance.</p>
        <p>Hi, Bytedance dance dance.</p>
    </div>
    </div>
</Skeleton>`,N=`<Skeleton active placeholder={<Row>
    <Col flex="1 1 0%">
        <Row>
            <Col flex="0">
                <Skeleton.Avatar style={{ 'margin-right': "16px"}}/>
            </Col>
            <Col flex="1 1 0%">
                <Skeleton.Title width="20%" />
                <Skeleton.Item width="50%" />
            </Col>
        </Row>
        <Skeleton.Item width="80%" />
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
    </Col>
    <Col flex="0">
        <Skeleton.Image width="280px" height="140px" />
    </Col>
</Row>} loading={true}>
    <div style={{display: 'flex', "align-items": 'flex-start'}}>
        
    </div>
</Skeleton>`,Q=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"active",desc:"动画效果",type:"boolean",default:""},{name:"loading",desc:"加载中",type:"boolean",default:""},{name:"placeholder",desc:"骨架屏内容",type:"JSXElement",default:""},{name:"width",desc:"宽度",type:"string",default:""},{name:"height",desc:"高度",type:"string",default:""}],V=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"inline",desc:"内联项",type:"boolean",default:""},{name:"width",desc:"宽度",type:"string",default:""},{name:"height",desc:"高度",type:"string",default:""}],W=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"inline",desc:"内联项",type:"boolean",default:""},{name:"width",desc:"宽度",type:"string",default:""},{name:"height",desc:"高度",type:"string",default:""},{name:"size",desc:"大小尺寸 extra-small|small|medium|large|extra-large|number",type:"string|number",default:"medium"},{name:"shape",desc:"形状",type:"circle|square",default:"circle"}],Y=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"inline",desc:"内联项",type:"boolean",default:""},{name:"width",desc:"string类型为容器宽度，数组为子元素对应行的宽度",type:"string|string[]",default:""},{name:"height",desc:"高度",type:"string",default:""},{name:"rows",desc:"行数",type:"number",default:"4"}],Z=[{id:"skeleton_base",text:"基础用法"},{id:"skeleton_img",text:"图形"},{id:"skeleton_combine",text:"组合"},{id:"skeleton_active",text:"动画"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Skeleton属性"},{id:"comp_item_props",text:"Item属性"},{id:"comp_avatar_props",text:"Avatar属性"},{id:"comp_paragraph_props",text:"Paragraph属性"}],S={skeleton_base:X,skeleton_img:K,skeleton_combine:M,skeleton_active:N},ee=s("<div>"),te=s("<ul>"),ne=s("<li>");function re(t){const o=t.size??"medium",g=t.shape??"circle",d=()=>P(t,"cm-skeleton-item",{[`cm-skeleton-${t.type}`]:t.type,[`cm-skeleton-${t.type}-${o}`]:o,[`cm-skeleton-${t.type}-${g}`]:g,["cm-skeleton-inline"]:t.inline}),n=()=>B(t,{width:typeof t.size=="number"?t.size+"px":t.width,height:typeof t.size=="number"?t.size+"px":t.height});return(()=>{const l=ee();return I(i=>{const h=d(),p=n();return i._v$=A(l,h,i._v$),i._v$2=C(l,p,i._v$2),i},{_v$:void 0,_v$2:void 0}),l})()}const y=t=>o=>e(re,j({type:t},o)),le=y("avatar"),ie=y("image"),ae=y("title"),se=y("button"),de=y("item");function oe(t){const o=t.rows??4,g=()=>P(t,"cm-skeleton-paragraph"),d=new Array(o).fill(1),n=()=>B(t,{width:t.width});return(()=>{const l=te();return a(l,e(F,{each:d,children:(i,h)=>{let p={};return t.width&&t.width instanceof Array&&(p.width=t.width[h()]),(()=>{const u=ne();return C(u,p),u})()}})),I(i=>{const h=g(),p=n();return i._v$3=A(l,h,i._v$3),i._v$4=C(l,p,i._v$4),i},{_v$3:void 0,_v$4:void 0}),l})()}const ce=s("<div>");function r(t){const o=()=>P(t,"cm-skeleton",{"cm-skeleton-active":t.active}),g=()=>B(t,{width:t.width,height:t.height});return e(U,{get when(){return t.loading},get fallback(){return t.children},get children(){const d=ce();return a(d,()=>t.placeholder),I(n=>{const l=o(),i=g();return n._v$=A(d,l,n._v$),n._v$2=C(d,i,n._v$2),n},{_v$:void 0,_v$2:void 0}),d}})}r.Avatar=le;r.Image=ie;r.Title=ae;r.Button=se;r.Item=de;r.Paragraph=oe;const ge=s("<div><span>显示加载内容"),he=s("<br>"),z=s("<h4>CUI/SolidJs"),pe=s("<p>精心打磨每一个组件的用户体验，从用户的角度考虑每个组件的使用场景。"),ue=s("<div><br><br><br><br>"),me=s('<img src="https://cqb325.gitee.io/cui-solid-doc/logo.svg" height="150px" alt="avatar">'),ye=s("<div><div><h3>Semi UI</h3><p>Hi, Bytedance dance dance.</p><p>Hi, Bytedance dance dance.</p><p>Hi, Bytedance dance dance."),L=s("<div>"),xe=s('<div class="sys-ctx-main-left">'),ve=s("<div><div>");function De(){const[t,o]=O(!0),g=()=>{o(!t())};return[(()=>{const d=xe();return q(H,d,()=>""),a(d,e(c,{dir:"v",size:32,get children(){return[e(m,{heading:2,children:"Skeleton 骨架屏"}),e(c,{id:"skeleton_base",dir:"v",get children(){return e($,{bordered:!0,get children(){return[(()=>{const n=ge(),l=n.firstChild;return a(n,e(G,{onChange:()=>g()}),l),l.style.setProperty("margin-left","10px"),n})(),he(),(()=>{const n=ue(),l=n.firstChild,i=l.nextSibling,h=i.nextSibling,p=h.nextSibling;return a(n,e(r,{get placeholder(){return e(r.Avatar,{})},get loading(){return t()},get children(){return e(D,{style:{color:"blue","margin-bottom":"10px"},children:"U"})}}),l),a(n,e(r,{width:"150px",height:"150px",get placeholder(){return e(r.Image,{})},get loading(){return t()},get children(){return e(R,{src:"https://cqb325.gitee.io/cui-solid-doc/logo.svg",width:"150px",height:"150px",alt:"avatar"})}}),i),a(n,e(r,{style:{width:"80px"},get placeholder(){return e(r.Title,{style:{"margin-bottom":"10px"}})},get loading(){return t()},get children(){const u=z();return u.style.setProperty("margin-bottom","0"),u}}),h),a(n,e(r,{width:"240px",get placeholder(){return e(r.Paragraph,{rows:2})},get loading(){return t()},get children(){const u=pe();return u.style.setProperty("width","240px"),u}}),p),a(n,e(r,{get placeholder(){return e(r.Button,{})},get loading(){return t()},get children(){return e(E,{children:"Button"})}}),null),n})(),e(v,{align:"left",get children(){return e(x,{type:"primary",children:"基础用法"})}}),e(b,{type:"secondary",spacing:"extended",children:"基础用法"}),e(f,{get data(){return S.skeleton_base}})]}})}}),e(c,{id:"skeleton_img",dir:"v",get children(){return e($,{bordered:!0,get children(){return[e(r,{get placeholder(){return(()=>{const n=L();return a(n,e(r.Image,{width:"200px",height:"150px"}),null),a(n,e(r.Title,{width:"120px",style:{"margin-top":"10px"}}),null),n})()},loading:!0,get children(){return[me(),z()]}}),e(v,{align:"left",get children(){return e(x,{type:"primary",children:"基础用法"})}}),e(b,{type:"secondary",spacing:"extended",children:"基础用法"}),e(f,{get data(){return S.skeleton_img}})]}})}}),e(c,{id:"skeleton_combine",dir:"v",get children(){return e($,{bordered:!0,get children(){return[e(r,{get placeholder(){return(()=>{const n=ve(),l=n.firstChild;return n.style.setProperty("display","flex"),n.style.setProperty("align-items","flex-start"),a(n,e(r.Avatar,{shape:"square",style:{"margin-right":"12px"}}),l),a(l,e(r.Title,{width:"120px",style:{"margin-bottom":"12px","margin-top":"12px"}}),null),a(l,e(r.Paragraph,{width:["240px","220px","180px"],rows:3}),null),n})()},loading:!0,get children(){const n=ye(),l=n.firstChild;return n.style.setProperty("display","flex"),n.style.setProperty("align-items","flex-start"),a(n,e(D,{style:{"margin-right":"12px"},children:"UI"}),l),n}}),e(v,{align:"left",get children(){return e(x,{type:"primary",children:"基础用法"})}}),e(b,{type:"secondary",spacing:"extended",children:"基础用法"}),e(f,{get data(){return S.skeleton_combine}})]}})}}),e(c,{id:"skeleton_active",dir:"v",get children(){return e($,{bordered:!0,get children(){return[e(r,{active:!0,get placeholder(){return e(T,{get children(){return[e(k,{flex:"1 1 0%",get children(){return[e(T,{get children(){return[e(k,{flex:"0",get children(){return e(r.Avatar,{style:{"margin-right":"16px"}})}}),e(k,{flex:"1 1 0%",get children(){return[e(r.Title,{width:"20%"}),e(r.Item,{width:"50%"})]}})]}}),e(r.Item,{width:"80%"}),e(r.Item,{inline:!0,width:"8%",style:{"margin-right":"16px"}}),e(r.Item,{inline:!0,width:"8%",style:{"margin-right":"16px"}}),e(r.Item,{inline:!0,width:"8%",style:{"margin-right":"16px"}})]}}),e(k,{flex:"0",get children(){return e(r.Image,{width:"280px",height:"140px"})}})]}})},loading:!0,get children(){const n=L();return n.style.setProperty("display","flex"),n.style.setProperty("align-items","flex-start"),n}}),e(v,{align:"left",get children(){return e(x,{type:"primary",children:"基础用法"})}}),e(b,{type:"secondary",spacing:"extended",children:"基础用法"}),e(f,{get data(){return S.skeleton_active}})]}})}}),e(c,{dir:"v",size:24,id:"comp_api",get children(){return[e(m,{type:"primary",heading:3,children:"API"}),e(c,{id:"comp_props",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"Skeleton Props"}),e(_,{columns:w,data:Q,border:!0,size:"small"})]}}),e(c,{id:"comp_item_props",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"Item Props"}),e(_,{columns:w,data:V,border:!0,size:"small"})]}}),e(c,{id:"comp_avatar_props",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"Avatar Props"}),e(_,{columns:w,data:W,border:!0,size:"small"})]}}),e(c,{id:"comp_paragraph_props",dir:"v",get children(){return[e(m,{type:"primary",heading:4,children:"Paragraph Props"}),e(_,{columns:w,data:Y,border:!0,size:"small"})]}})]}})]}})),d})(),e(J,{data:Z})]}export{De as default};
