import{u as O,i as n,a as e,S as i,T as d,t as o,h as L,s as I}from"./index-69f0698f.js";import{R as l,C as r}from"./index-ba4f8788.js";/* empty css             */import{T as f}from"./Title-48407536.js";import{D as s,a as g,T as E,p as j,C as G}from"./code-0a2ad5d4.js";import{P as a}from"./Paragraph-6df96914.js";import{C}from"./index-295b9dac.js";import{h as k}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const q=`
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
</Space>`,Q=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"justify",desc:"水平居中方式start|center|end|space-between|space-around",type:"string",default:""},{name:"align",desc:"垂直居中方式 top|middle|bottom",type:"string",default:""},{name:"gutter",desc:"间隔",type:"number",default:"0"}],U=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"grid",desc:"Col暂用范围0~1",type:"number",default:"1"},{name:"push",desc:"栅格向右移动范围",type:"number",default:""},{name:"pull",desc:"栅格向左移动范围",type:"number",default:""},{name:"offset",desc:"栅格左侧的间隔范围，间隔内不可以有栅格",type:"number",default:""},{name:"flex",desc:"flex 布局属性",type:"string",default:""}],V=[{id:"grid_base",text:"基础用法"},{id:"grid_gutter",text:"区块间隔"},{id:"grid_offset",text:"左右偏移"},{id:"grid_push",text:"栅格排序"},{id:"grid_justify",text:"flex水平布局"},{id:"grid_align",text:"flex垂直对齐"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Row属性"},{id:"comp_col_props",text:"Col属性"}],h={grid_base:q,grid_gutter:H,grid_offset:J,grid_push:K,grid_justify:M,grid_align:N},W=o('<div class="col-content">'),X=o("<ul><li>使用 <!> 在水平方向创建一行</li><li>将一组 <!> 插入在 <!> 中</li><li>在每个 <!> 中，键入自己的内容</li><li>通过设置 <!> 的 <!> 参数，指定跨越的范围, <!> 范围为0~1"),Y=o("<div>start"),Z=o("<div>end"),ee=o("<div>center"),re=o("<div>space-between"),te=o("<div>space-around"),le=o('<div class="sys-ctx-main-left">');function t(c){return(()=>{const u=W();return n(u,()=>c.children),L(x=>I(u,{...c.style,"justify-content":"center"},x)),u})()}function Ce(){return[(()=>{const c=le();return O(k,c,()=>""),n(c,e(i,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Row/Col 栅格"}),e(i,{id:"grid_base",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,get children(){return[e(l,{class:"demo-row",get children(){return e(r,{class:"demo-col",get children(){return e(t,{children:"100%"})}})}}),e(l,{class:"demo-row light",get children(){return[e(r,{class:"demo-col",grid:.5,get children(){return e(t,{children:"50%"})}}),e(r,{class:"demo-col light",grid:.5,get children(){return e(t,{children:"50%"})}})]}}),e(l,{class:"demo-row",get children(){return[e(r,{class:"demo-col",grid:1/3,get children(){return e(t,{children:"1/3"})}}),e(r,{class:"demo-col light",grid:1/3,get children(){return e(t,{children:"1/3"})}}),e(r,{class:"demo-col",grid:1/3,get children(){return e(t,{children:"1/3"})}})]}}),e(l,{class:"demo-row light",get children(){return[e(r,{class:"demo-col",grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{class:"demo-col light",grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{class:"demo-col",grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{class:"demo-col light",grid:1/4,get children(){return e(t,{children:"1/4"})}})]}}),e(l,{class:"demo-row",get children(){return[e(r,{class:"demo-col",grid:2/3,get children(){return e(t,{children:"2/3"})}}),e(r,{class:"demo-col light",grid:1/3,get children(){return e(t,{children:"1/3"})}})]}})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(a,{type:"secondary",spacing:"extended",get children(){const u=X(),x=u.firstChild,S=x.firstChild,T=S.nextSibling;T.nextSibling;const p=x.nextSibling,$=p.firstChild,_=$.nextSibling,B=_.nextSibling,w=B.nextSibling;w.nextSibling;const y=p.nextSibling,D=y.firstChild,F=D.nextSibling;F.nextSibling;const m=y.nextSibling,A=m.firstChild,v=A.nextSibling,z=v.nextSibling,b=z.nextSibling,P=b.nextSibling,R=P.nextSibling;return R.nextSibling,n(x,e(d,{code:!0,children:"row"}),T),n(p,e(d,{code:!0,children:"col"}),_),n(p,e(d,{code:!0,children:"row"}),w),n(y,e(d,{code:!0,children:"col"}),F),n(m,e(d,{code:!0,children:"col"}),v),n(m,e(d,{code:!0,children:"grid"}),b),n(m,e(d,{code:!0,children:"grid"}),R),u}}),e(g,{get data(){return h.grid_base}})]}})}}),e(i,{id:"grid_gutter",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}}),e(r,{grid:1/4,get children(){return e(t,{children:"1/4"})}})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"区块间隔"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["通过给 ",e(d,{code:!0,children:"row"})," 添加 gutter 属性，可以给下属的 ",e(d,{code:!0,children:"col"})," 添加间距，推荐使用 (16+8n)px 作为栅格间隔。"]}}),e(g,{get data(){return h.grid_gutter}})]}})}}),e(i,{id:"grid_offset",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(r,{grid:1/4,offset:1/4,get children(){return e(t,{children:"1/4 offset 1/4"})}}),e(r,{grid:1/4,offset:1/4,get children(){return e(t,{children:"1/4 offset 1/4"})}})]}}),e(l,{gutter:16,class:"example-demo",get children(){return e(r,{grid:.5,offset:.25,get children(){return e(t,{children:"0.5 offset 0.25"})}})}})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"左右偏移"})}}),e(a,{type:"secondary",spacing:"extended",children:"通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。"}),e(g,{get data(){return h.grid_offset}})]}})}}),e(i,{id:"grid_push",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return e(l,{class:"example-demo",get children(){return[e(r,{grid:3/4,push:1/4,get children(){return e(t,{children:"3/4 push-1/4"})}}),e(r,{grid:1/4,pull:3/4,get children(){return e(t,{children:"1/4 pull-3/4"})}})]}})}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"栅格排序"})}}),e(a,{type:"secondary",spacing:"extended",children:"通过设置push和pull来改变栅格的顺序。"}),e(g,{get data(){return h.grid_push}})]}})}}),e(i,{id:"grid_justify",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[Y(),e(l,{justify:"start",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),Z(),e(l,{justify:"end",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),ee(),e(l,{justify:"center",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),re(),e(l,{justify:"space-between",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),te(),e(l,{justify:"space-around",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"flex水平布局"})}}),e(a,{type:"secondary",spacing:"extended",children:"通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。"}),e(g,{get data(){return h.grid_justify}})]}})}}),e(i,{id:"grid_align",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[e(l,{justify:"center",align:"top",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{style:{height:"80px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{style:{height:"100px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"bottom",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{style:{height:"80px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{style:{height:"100px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"middle",class:"example-demo",get children(){return[e(r,{grid:1/6,get children(){return e(t,{style:{height:"80px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{style:{height:"100px"},children:"1/6"})}}),e(r,{grid:1/6,get children(){return e(t,{children:"1/6"})}})]}})]}}),e(s,{align:"left",get children(){return e(d,{type:"primary",children:"flex垂直对齐"})}}),e(a,{type:"secondary",spacing:"extended",children:"通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。"}),e(g,{get data(){return h.grid_align}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Row Props"}),e(E,{columns:j,data:Q,border:!0,size:"small"})]}}),e(i,{id:"comp_col_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Col Props"}),e(E,{columns:j,data:U,border:!0,size:"small"})]}})]}})]}})),c})(),e(G,{data:V})]}export{Ce as default};
