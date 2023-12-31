import{u as O,i as o,a as e,S as i,T as d,t as n,g as L,s as I}from"./index-452b01fb.js";import{R as l,C as r}from"./index-d2e3aebb.js";/* empty css             */import{T as f}from"./Title-92e03596.js";import{D as u,a as s,C as G}from"./code-6c1bd720.js";import{P as g}from"./Paragraph-cb384130.js";import{C as a}from"./index-0b64bc6d.js";import{T as j,p as S}from"./columns-64ff655e.js";import{h as k}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const q=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5}>
    <Row class='demo-row'>
        <Col class='demo-col'><ColText>100%</ColText></Col>
    </Row>
    <Row class='demo-row light'>
        <Col class='demo-col' grid={0.5}><ColText>50%</ColText></Col>
        <Col class='demo-col light' grid={0.5}><ColText>50%</ColText></Col>
    </Row>
    <Row class='demo-row'>
        <Col class='demo-col' grid={1/3}><ColText>1/3</ColText></Col>
        <Col class='demo-col light' grid={1/3}><ColText>1/3</ColText></Col>
        <Col class='demo-col' grid={1/3}><ColText>1/3</ColText></Col>
    </Row>
    <Row class='demo-row light'>
        <Col class='demo-col' grid={1/4}><ColText>1/4</ColText></Col>
        <Col class='demo-col light' grid={1/4}><ColText>1/4</ColText></Col>
        <Col class='demo-col' grid={1/4}><ColText>1/4</ColText></Col>
        <Col class='demo-col light' grid={1/4}><ColText>1/4</ColText></Col>
    </Row>
    <Row class='demo-row'>
        <Col class='demo-col' grid={2/3}><ColText>2/3</ColText></Col>
        <Col class='demo-col light' grid={1/3}><ColText>1/3</ColText></Col>
    </Row>
</Space>`,H=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Row gutter={16} class='example-demo'>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
</Row>`,J=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v'>
    <Row gutter={16} class='example-demo'>
        <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
        <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
    </Row>

    <Row gutter={16} class='example-demo'>
        <Col grid={0.5} offset={0.25}><ColText>0.5 offset 0.25</ColText></Col>
    </Row>
</Space>`,K=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v'>
    <Row class='example-demo'>
        <Col grid={3/4} push={1/4}><ColText>3/4 push-1/4</ColText></Col>
        <Col grid={1/4} pull={3/4}><ColText>1/4 pull-3/4</ColText></Col>
    </Row>
</Space>`,M=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5} style={{'margin-top': '20px'}}>
    <div>start</div>
    <Row justify='start' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>end</div>
    <Row justify='end' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>center</div>
    <Row justify='center' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>space-between</div>
    <Row justify='space-between' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>space-around</div>
    <Row justify='space-around' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
</Space>`,N=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5} style={{'margin-top': '20px'}}>
    <Row justify='center' align='top' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <Row justify='center' align='bottom' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <Row justify='center' align='middle' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
</Space>`,Q=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"justify",desc:"水平居中方式start|center|end|space-between|space-around",type:"string",default:""},{name:"align",desc:"垂直居中方式 top|middle|bottom",type:"string",default:""},{name:"gutter",desc:"间隔",type:"number",default:"0"}],U=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"grid",desc:"Col暂用范围0~1",type:"number",default:"1"},{name:"push",desc:"栅格向右移动范围",type:"number",default:""},{name:"pull",desc:"栅格向左移动范围",type:"number",default:""},{name:"offset",desc:"栅格左侧的间隔范围，间隔内不可以有栅格",type:"number",default:""},{name:"flex",desc:"flex 布局属性",type:"string",default:""}],V=[{id:"grid_base",text:"基础用法"},{id:"grid_gutter",text:"区块间隔"},{id:"grid_offset",text:"左右偏移"},{id:"grid_push",text:"栅格排序"},{id:"grid_justify",text:"flex水平布局"},{id:"grid_align",text:"flex垂直对齐"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Row属性"},{id:"comp_col_props",text:"Col属性"}],C={grid_base:q,grid_gutter:H,grid_offset:J,grid_push:K,grid_justify:M,grid_align:N},W=n('<div class="col-content">'),X=n("<ul><li>使用 <!> 在水平方向创建一行</li><li>将一组 <!> 插入在 <!> 中</li><li>在每个 <!> 中，键入自己的内容</li><li>通过设置 <!> 的 <!> 参数，指定跨越的范围, <!> 范围为0~1"),Y=n("<div>start"),Z=n("<div>end"),ee=n("<div>center"),re=n("<div>space-between"),te=n("<div>space-around"),le=n('<div class="sys-ctx-main-left">');function t({children:h,style:x}){return(()=>{const c=W();return o(c,h),L(y=>I(c,{...x,"justify-content":"center"},y)),c})()}function he(){return[(()=>{const h=le();return O(k,h,()=>""),o(h,e(i,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Row/Col 栅格"}),e(i,{id:"grid_base",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,get children(){return[e(l,{class:"demo-row",get children(){return e(r,{class:"demo-col",get children(){return e(t,{children:"100%"})}})}}),e(l,{class:"demo-row light",get children(){return[e(r,{class:"demo-col",grid:.5,get children(){return e(t,{children:"50%"})}}),e(r,{class:"demo-col light",grid:.5,get children(){return e(t,{children:"50%"})}})]}}),e(l,{class:"demo-row",get children(){return[e(r,{class:"demo-col",grid:1/3,get children(){return e(t,{children:"1/3"})}}),e(r,{class:"demo-col light",grid:1/3,get children(){return e(t,{children:"1/3"})}}),e(r,{class:"demo-col",grid:1/3,get children(){return e(t,{children:"1/3"})}})]}}),e(l,{class:"demo-row light",get children(){return[e(r,{class:"demo-col",grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{class:"demo-col light",grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{class:"demo-col",grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{class:"demo-col light",grid:1/4,get children(){return e(t,{children:"1/4"})}})]}}),e(l,{class:"demo-row",get children(){return[e(r,{class:"demo-col",grid:2/3,get children(){return e(t,{children:"2/3"})}}),e(r,{class:"demo-col light",grid:1/3,get children(){return e(t,{children:"1/3"})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(g,{type:"secondary",spacing:"extended",get children(){const x=X(),c=x.firstChild,y=c.firstChild,_=y.nextSibling;_.nextSibling;const p=c.nextSibling,$=p.firstChild,w=$.nextSibling,B=w.nextSibling,F=B.nextSibling;F.nextSibling;const T=p.nextSibling,D=T.firstChild,v=D.nextSibling;v.nextSibling;const m=T.nextSibling,A=m.firstChild,b=A.nextSibling,z=b.nextSibling,R=z.nextSibling,P=R.nextSibling,E=P.nextSibling;return E.nextSibling,o(c,e(d,{code:!0,children:"row"}),_),o(p,e(d,{code:!0,children:"col"}),w),o(p,e(d,{code:!0,children:"row"}),F),o(T,e(d,{code:!0,children:"col"}),v),o(m,e(d,{code:!0,children:"col"}),b),o(m,e(d,{code:!0,children:"grid"}),R),o(m,e(d,{code:!0,children:"grid"}),E),x}}),e(s,{get data(){return C.grid_base}})]}})}}),e(i,{id:"grid_gutter",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"区块间隔"})}}),e(g,{type:"secondary",spacing:"extended",get children(){return["通过给 ",e(d,{code:!0,children:"row"})," 添加 gutter 属性，可以给下属的 ",e(d,{code:!0,children:"col"})," 添加间距，推荐使用 (16+8n)px 作为栅格间隔。"]}}),e(s,{get data(){return C.grid_gutter}})]}})}}),e(i,{id:"grid_offset",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(r,{grid:1/4,offset:1/4,get children(){return e(t,{children:"1/4 offset 1/4"})}}),e(r,{grid:1/4,offset:1/4,get children(){return e(t,{children:"1/4 offset 1/4"})}})]}}),e(l,{gutter:16,class:"example-demo",get children(){return e(r,{grid:.5,offset:.25,get children(){return e(t,{children:"0.5 offset 0.25"})}})}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"左右偏移"})}}),e(g,{type:"secondary",spacing:"extended",children:"通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。"}),e(s,{get data(){return C.grid_offset}})]}})}}),e(i,{id:"grid_push",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return e(l,{class:"example-demo",get children(){return[e(r,{grid:3/4,push:1/4,get children(){return e(t,{children:"3/4 push-1/4"})}}),e(r,{grid:1/4,pull:3/4,get children(){return e(t,{children:"1/4 pull-3/4"})}})]}})}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"栅格排序"})}}),e(g,{type:"secondary",spacing:"extended",children:"通过设置push和pull来改变栅格的顺序。"}),e(s,{get data(){return C.grid_push}})]}})}}),e(i,{id:"grid_justify",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[Y(),e(l,{justify:"start",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),Z(),e(l,{justify:"end",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),ee(),e(l,{justify:"center",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),re(),e(l,{justify:"space-between",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),te(),e(l,{justify:"space-around",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"flex水平布局"})}}),e(g,{type:"secondary",spacing:"extended",children:"通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。"}),e(s,{get data(){return C.grid_justify}})]}})}}),e(i,{id:"grid_align",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[e(l,{justify:"center",align:"top",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{style:{height:"80px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{style:{height:"100px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"bottom",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{style:{height:"80px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{style:{height:"100px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"middle",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{style:{height:"80px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{style:{height:"100px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"flex垂直对齐"})}}),e(g,{type:"secondary",spacing:"extended",children:"通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。"}),e(s,{get data(){return C.grid_align}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Row Props"}),e(j,{columns:S,data:Q,border:!0,size:"small"})]}}),e(i,{id:"comp_col_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Col Props"}),e(j,{columns:S,data:U,border:!0,size:"small"})]}})]}})]}})),h})(),e(G,{data:V})]}export{he as default};
