import{u as P,i as n,a as e,S as i,T as d,t as o,h as L,s as I}from"./index-5e251d81.js";import{R as l,C as t}from"./index-34abc17d.js";/* empty css             */import{T as f}from"./Title-52a6bda3.js";import{D as u,a as c,T as R,p as j,C as G}from"./code-c71fa51e.js";import{P as s}from"./Paragraph-a25cb645.js";import{C as g}from"./index-dff86af7.js";import{h as k}from"./hljs-74a5c6d1.js";import"./createGridOffset-dd5a9514.js";import"./_commonjsHelpers-725317a4.js";const q=`
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

<Row gutter={16} class="example-demo">
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
</Row>
<div>row2</div>
<Row gutter={[16, 16]} class="example-demo">
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
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
</Space>`,Q=`<Space dir="v" size={5} style={{'margin-top': '20px'}}>
    <div>width, offset</div>
    <Row class="example-demo" gutter={16}>
        <Col xs={{grid: 1/6, offset: 1 / 24}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
        <Col xs={{grid: 5/12, offset: 1 / 12}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
        <Col xs={{grid: 1/6, offset: 1 / 12}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
    </Row>
    <div>gutter</div>
    <Row class="example-demo" gutter={{xs: [8, 8], lg: [32, 32]}}>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
    </Row>
</Space>`,U=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"justify",desc:"水平居中方式start|center|end|space-between|space-around",type:"string",default:""},{name:"align",desc:"垂直居中方式 top|middle|bottom",type:"string",default:""},{name:"gutter",desc:"间隔",type:"number|number[]|Object",default:"0"}],V=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"grid",desc:"Col暂用范围0~1",type:"number",default:"1"},{name:"push",desc:"栅格向右移动范围",type:"number",default:""},{name:"pull",desc:"栅格向左移动范围",type:"number",default:""},{name:"offset",desc:"栅格左侧的间隔范围，间隔内不可以有栅格",type:"number",default:""},{name:"flex",desc:"flex 布局属性",type:"string",default:""},{name:"xs",desc:"<576px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"number|Object",default:""},{name:"sm",desc:"屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"number|Object",default:""},{name:"md",desc:"屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"number|Object",default:""},{name:"lg",desc:"屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"number|Object",default:""},{name:"xl",desc:"屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"number|Object",default:""},{name:"xxl",desc:"屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"number|Object",default:""}],W=[{id:"grid_base",text:"基础用法"},{id:"grid_gutter",text:"区块间隔"},{id:"grid_offset",text:"左右偏移"},{id:"grid_push",text:"栅格排序"},{id:"grid_justify",text:"flex水平布局"},{id:"grid_align",text:"flex垂直对齐"},{id:"grid_responsive",text:"响应式布局"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Row属性"},{id:"comp_col_props",text:"Col属性"}],C={grid_base:q,grid_gutter:H,grid_offset:J,grid_push:K,grid_justify:M,grid_align:N,grid_responsive:Q},X=o('<div class="col-content">'),Y=o("<ul><li>使用 <!> 在水平方向创建一行</li><li>将一组 <!> 插入在 <!> 中</li><li>在每个 <!> 中，键入自己的内容</li><li>通过设置 <!> 的 <!> 参数，指定跨越的范围, <!> 范围为0~1"),Z=o("<div>row2"),ee=o("<div>start"),te=o("<div>end"),re=o("<div>center"),le=o("<div>space-between"),ie=o("<div>space-around"),de=o("<div>width, offset"),oe=o("<div>gutter"),ne=o('<div class="sys-ctx-main-left">');function r(h){return(()=>{const a=X();return n(a,()=>h.children),L(x=>I(a,{...h.style,"justify-content":"center"},x)),a})()}function fe(){return[(()=>{const h=ne();return P(k,h,()=>""),n(h,e(i,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Row/Col 栅格"}),e(i,{id:"grid_base",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,get children(){return[e(l,{class:"demo-row",get children(){return e(t,{class:"demo-col",get children(){return e(r,{children:"100%"})}})}}),e(l,{class:"demo-row light",get children(){return[e(t,{class:"demo-col",grid:.5,get children(){return e(r,{children:"50%"})}}),e(t,{class:"demo-col light",grid:.5,get children(){return e(r,{children:"50%"})}})]}}),e(l,{class:"demo-row",get children(){return[e(t,{class:"demo-col",grid:1/3,get children(){return e(r,{children:"1/3"})}}),e(t,{class:"demo-col light",grid:1/3,get children(){return e(r,{children:"1/3"})}}),e(t,{class:"demo-col",grid:1/3,get children(){return e(r,{children:"1/3"})}})]}}),e(l,{class:"demo-row light",get children(){return[e(t,{class:"demo-col",grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{class:"demo-col light",grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{class:"demo-col",grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{class:"demo-col light",grid:1/4,get children(){return e(r,{children:"1/4"})}})]}}),e(l,{class:"demo-row",get children(){return[e(t,{class:"demo-col",grid:2/3,get children(){return e(r,{children:"2/3"})}}),e(t,{class:"demo-col light",grid:1/3,get children(){return e(r,{children:"1/3"})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(s,{type:"secondary",spacing:"extended",get children(){const a=Y(),x=a.firstChild,D=x.firstChild,T=D.nextSibling;T.nextSibling;const p=x.nextSibling,$=p.firstChild,F=$.nextSibling,B=F.nextSibling,w=B.nextSibling;w.nextSibling;const y=p.nextSibling,S=y.firstChild,_=S.nextSibling;_.nextSibling;const m=y.nextSibling,A=m.firstChild,v=A.nextSibling,z=v.nextSibling,b=z.nextSibling,O=b.nextSibling,E=O.nextSibling;return E.nextSibling,n(x,e(d,{code:!0,children:"row"}),T),n(p,e(d,{code:!0,children:"col"}),F),n(p,e(d,{code:!0,children:"row"}),w),n(y,e(d,{code:!0,children:"col"}),_),n(m,e(d,{code:!0,children:"col"}),v),n(m,e(d,{code:!0,children:"grid"}),b),n(m,e(d,{code:!0,children:"grid"}),E),a}}),e(c,{get data(){return C.grid_base}})]}})}}),e(i,{id:"grid_gutter",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}})]}}),Z(),e(l,{gutter:[16,16],class:"example-demo",get children(){return[e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"区块间隔"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["通过给 ",e(d,{code:!0,children:"row"})," 添加 gutter 属性，可以给下属的 ",e(d,{code:!0,children:"col"})," 添加间距，推荐使用 (16+8n)px 作为栅格间隔。 gutter属性支持数字或数组，数组格式为 [水平间距, 垂直间距]。"]}}),e(c,{get data(){return C.grid_gutter}})]}})}}),e(i,{id:"grid_offset",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(t,{grid:1/4,offset:1/4,get children(){return e(r,{children:"1/4 offset 1/4"})}}),e(t,{grid:1/4,offset:1/4,get children(){return e(r,{children:"1/4 offset 1/4"})}})]}}),e(l,{gutter:16,class:"example-demo",get children(){return e(t,{grid:.5,offset:.25,get children(){return e(r,{children:"0.5 offset 0.25"})}})}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"左右偏移"})}}),e(s,{type:"secondary",spacing:"extended",children:"通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。"}),e(c,{get data(){return C.grid_offset}})]}})}}),e(i,{id:"grid_push",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return e(l,{class:"example-demo",get children(){return[e(t,{grid:3/4,push:1/4,get children(){return e(r,{children:"3/4 push-1/4"})}}),e(t,{grid:1/4,pull:3/4,get children(){return e(r,{children:"1/4 pull-3/4"})}})]}})}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"栅格排序"})}}),e(s,{type:"secondary",spacing:"extended",children:"通过设置push和pull来改变栅格的顺序。"}),e(c,{get data(){return C.grid_push}})]}})}}),e(i,{id:"grid_justify",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[ee(),e(l,{justify:"start",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),te(),e(l,{justify:"end",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),re(),e(l,{justify:"center",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),le(),e(l,{justify:"space-between",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),ie(),e(l,{justify:"space-around",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"flex水平布局"})}}),e(s,{type:"secondary",spacing:"extended",children:"通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。"}),e(c,{get data(){return C.grid_justify}})]}})}}),e(i,{id:"grid_align",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[e(l,{justify:"center",align:"top",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{style:{height:"80px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{style:{height:"100px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"bottom",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{style:{height:"80px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{style:{height:"100px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"middle",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{style:{height:"80px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{style:{height:"100px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"flex垂直对齐"})}}),e(s,{type:"secondary",spacing:"extended",children:"通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。"}),e(c,{get data(){return C.grid_align}})]}})}}),e(i,{id:"grid_responsive",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[de(),e(l,{class:"example-demo",gutter:16,get children(){return[e(t,{xs:{grid:1/6,offset:1/24},lg:{grid:.25,offset:1/12},get children(){return e(r,{style:{height:"80px"}})}}),e(t,{xs:{grid:5/12,offset:1/12},lg:{grid:.25,offset:1/12},get children(){return e(r,{style:{height:"80px"}})}}),e(t,{xs:{grid:1/6,offset:1/12},lg:{grid:.25,offset:1/12},get children(){return e(r,{style:{height:"80px"}})}})]}}),oe(),e(l,{class:"example-demo",gutter:{xs:[8,8],lg:[32,32]},get children(){return[e(t,{grid:1/3,get children(){return e(r,{style:{height:"80px"}})}}),e(t,{grid:1/3,get children(){return e(r,{style:{height:"80px"}})}}),e(t,{grid:1/3,get children(){return e(r,{style:{height:"80px"}})}}),e(t,{grid:1/3,get children(){return e(r,{style:{height:"80px"}})}}),e(t,{grid:1/3,get children(){return e(r,{style:{height:"80px"}})}}),e(t,{grid:1/3,get children(){return e(r,{style:{height:"80px"}})}})]}})]}}),e(u,{align:"left",get children(){return e(d,{type:"primary",children:"响应式布局"})}}),e(s,{type:"secondary",spacing:"extended",children:"预设六个响应尺寸：xs sm md lg xl xxl，调整浏览器尺寸来查看效果。 gutter也支持响应式，可以通过内嵌到 xs sm md lg xl xxl 属性中来使用"}),e(c,{get data(){return C.grid_responsive}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Row Props"}),e(R,{columns:j,data:U,border:!0,size:"small"})]}}),e(i,{id:"comp_col_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Col Props"}),e(R,{columns:j,data:V,border:!0,size:"small"})]}})]}})]}})),h})(),e(G,{data:W})]}export{fe as default};
