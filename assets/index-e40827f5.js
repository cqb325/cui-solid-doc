import{c as b,u as v,i as S,a as e,S as r,T as i,B as n,P as a,w as m,d as P,t as p}from"./index-0bf9b376.js";import{T as x}from"./Title-cbc6ae43.js";import{C as s}from"./index-db8a9f9f.js";import{D as l,a as o,C as k}from"./code-a73a8c0d.js";import{p as _}from"./columns-cd2d5c33.js";import{h as F}from"./hljs-679eb70e.js";const w=`<Space align='center'>
    <Text>文本</Text>
    <Button>Button</Button>
</Space>`,E=`<Space dir='v'>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</Space>`,D=`<Space size={size()}>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</Space>`,C=`<Space dir='v'>
    <Space>
        <Space align='start' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>start</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
        <Space align='center' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>center</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
        <Space align='end' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>end</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
        <Space align='baseline' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>Baseline</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
    </Space>
    <Space>
        <Space align='center' justify='start' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>start</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
        <Space align='center' justify='center' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>center</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
        <Space align='center' justify='end' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
            <span>end</span>
            <Button>Button</Button>
            <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
        </Space>
    </Space>
    <Space>
        <Space dir='v' align='start' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
            <span>start</span>
            <Button>Button</Button>
            <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
        </Space>
        <Space dir='v' align='center' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
            <span>center</span>
            <Button>Button</Button>
            <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
        </Space>
        <Space dir='v' align='end' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
            <span>end</span>
            <Button>Button</Button>
            <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
        </Space>
    </Space>
    <Space>
        <Space dir='v' align='center' justify='start' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
            <span>start</span>
            <Button>Button</Button>
            <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
        </Space>
        <Space dir='v' align='center' justify='center' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
            <span>center</span>
            <Button>Button</Button>
            <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
        </Space>
        <Space dir='v' align='center' justify='end' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
            <span>end</span>
            <Button>Button</Button>
            <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
        </Space>
    </Space>
</Space>`,$=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"justify",desc:"垂直轴对齐方式start|center|end",type:"string",default:""},{name:"align",desc:"当前轴居中方式 center|start|end|baseline",type:"string",default:""},{name:"dir",desc:"内容方向, 支持 v|h",type:"string",default:"h"},{name:"wrap",desc:"内容超出的换行方式",type:"boolean",default:"false"},{name:"inline",desc:"行内元素",type:"boolean",default:"false"},{name:"size",desc:"间距大小",type:"number",default:"8"}],j=[{id:"space_base",text:"基础用法"},{id:"space_vertical",text:"垂直间距"},{id:"space_size",text:"间距大小"},{id:"space_align",text:"对齐方式"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Space属性"}],u={space_base:w,space_vertical:E,space_size:D,space_align:C},c=p("<span>start"),d=p("<div>Block"),g=p("<span>center"),h=p("<span>end"),z=p("<span>Baseline"),A=p('<div class="sys-ctx-main-left">');function G(){const[f,B]=b(10);return[(()=>{const y=A();return v(F,y,()=>""),S(y,e(r,{dir:"v",size:32,get children(){return[e(x,{heading:2,children:"Space 间隔"}),e(r,{id:"space_base",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{align:"center",get children(){return[e(i,{children:"文本"}),e(n,{children:"Button"})]}}),e(l,{align:"left",get children(){return e(i,{type:"primary",children:"基础用法"})}}),e(a,{type:"secondary",spacing:"extended",children:"默认横向布局，并添加间隔， 默认垂直居中"}),e(o,{get data(){return u.space_base}})]}})}}),e(r,{id:"space_vertical",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",inline:!0,get children(){return[e(n,{children:"Button"}),e(n,{children:"Button"}),e(n,{children:"Button"})]}}),e(l,{align:"left",get children(){return e(i,{type:"primary",children:"垂直间距"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["设置属性 ",e(i,{code:!0,children:"dir"})," 为 ",e(i,{code:!0,children:"v"})," 可以使相邻组件垂直排列。"]}}),e(o,{get data(){return u.space_vertical}})]}})}}),e(r,{id:"space_size",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{get size(){return f()},get children(){return[e(n,{children:"Button"}),e(n,{children:"Button"}),e(n,{children:"Button"})]}}),e(m,{value:[f,B]}),e(l,{align:"left",get children(){return e(i,{type:"primary",children:"间距大小"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["间距可以通过属性 ",e(i,{code:!0,children:"size"})," 设置，默认值为8。"]}}),e(o,{get data(){return u.space_size}})]}})}}),e(r,{id:"space_align",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(r,{get children(){return[e(r,{align:"start",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[c(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}}),e(r,{align:"center",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[g(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}}),e(r,{align:"end",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[h(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}}),e(r,{align:"baseline",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[z(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}})]}}),e(r,{get children(){return[e(r,{align:"center",justify:"start",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[c(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}}),e(r,{align:"center",justify:"center",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[g(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}}),e(r,{align:"center",justify:"end",style:{border:"1px solid #dfdfdf",padding:"8px",width:"200px"},get children(){return[h(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("height","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","100px"),t})()]}})]}}),e(r,{get children(){return[e(r,{dir:"v",align:"start",style:{border:"1px solid #dfdfdf",padding:"8px",height:"150px"},get children(){return[c(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("width","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","32px"),t})()]}}),e(r,{dir:"v",align:"center",style:{border:"1px solid #dfdfdf",padding:"8px",height:"150px"},get children(){return[g(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("width","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","32px"),t})()]}}),e(r,{dir:"v",align:"end",style:{border:"1px solid #dfdfdf",padding:"8px",height:"150px"},get children(){return[h(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("width","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","32px"),t})()]}})]}}),e(r,{get children(){return[e(r,{dir:"v",align:"center",justify:"start",style:{border:"1px solid #dfdfdf",padding:"8px",height:"150px"},get children(){return[c(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("width","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","32px"),t})()]}}),e(r,{dir:"v",align:"center",justify:"center",style:{border:"1px solid #dfdfdf",padding:"8px",height:"150px"},get children(){return[g(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("width","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","32px"),t})()]}}),e(r,{dir:"v",align:"center",justify:"end",style:{border:"1px solid #dfdfdf",padding:"8px",height:"150px"},get children(){return[h(),e(n,{children:"Button"}),(()=>{const t=d();return t.style.setProperty("width","100px"),t.style.setProperty("background","rgba(200,200,200,0.3)"),t.style.setProperty("line-height","32px"),t})()]}})]}})]}}),e(l,{align:"left",get children(){return e(i,{type:"primary",children:"对齐方式"})}}),e(a,{type:"secondary",spacing:"extended",children:"设置对齐模式。"}),e(o,{get data(){return u.space_align}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(x,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(x,{type:"primary",heading:4,children:"Row Props"}),e(P,{columns:_,data:$,border:!0,size:"small"})]}})]}})]}})),y})(),e(k,{data:j})]}export{G as default};