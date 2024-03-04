import{c as d,u as I,i as S,a as e,S as l,B as r,T as i,t as m}from"./index-5e0fdc25.js";import{M as c,m as v}from"./index-0d1b63ee.js";import{T as b}from"./Title-abffd9c9.js";import{C as n}from"./index-7b04ac17.js";import{D as u,a,T as V,p as J,e as L,C as X}from"./code-f8e23b11.js";import{P as o}from"./Paragraph-3448cd8e.js";import{h as q}from"./hljs-74a5c6d1.js";import"./index-9079dd17.js";import"./_commonjsHelpers-725317a4.js";const G=`const [visible, setVisible] = createSignal(false);

<Button type='primary' onClick={() => {
    setVisible(true);
}}>打开</Button>
<Modal title='提示' visible={[visible, setVisible]}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>`,H=`const [visible2, setVisible2] = createSignal(false);

<Button type='primary' onClick={() => {
    setVisible2(true);
}}>打开</Button>
<Modal disabled title='提示' visible={[visible2, setVisible2]}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>`,K=`const [visible3, setVisible3] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible3(true);
}}>打开</Button>
<Modal title='提示' visible={[visible3, setVisible3]} defaultPosition={{top: '200px'}}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>`,N=`const [visible4, setVisible4] = createSignal(false);

<Button type='primary' onClick={() => {
    setVisible4(true);
}}>打开</Button>
<Modal title='提示' visible={[visible4, setVisible4]} footer={false}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`,Q=`const [visible5, setVisible5] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible5(true);
}}>打开</Button>
<Modal title='提示' visible={[visible5, setVisible5]} loading onOk={() => {
    console.log('click ok');
    setTimeout(() => {
        setVisible5(false);
    }, 2000);
}}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`,R=`const [visible6, setVisible6] = createSignal(false);
const [fullScreen, setFullScreen] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible6(true);
}}>打开</Button>
<Modal title='提示' resetPostion visible={[visible6, setVisible6]} fullScreen={fullScreen()}>
    <div><Button onClick={() => {
        setFullScreen(!fullScreen());
    }}>全屏</Button></div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`,U=`const [visible7, setVisible7] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible7(true);
}}>打开</Button>
<Modal title='提示' resetPostion visible={[visible7, setVisible7]} fullScreen={fullScreen()}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`,W=`const [visible8, setVisible8] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible8(true);
}}>打开</Button>
<Modal title='提示' mask={false} visible={[visible8, setVisible8]} fullScreen={fullScreen()}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`,Y=`const [visible9, setVisible9] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible9(true);
}}>打开</Button>
<Modal title='提示' maskClosable={false} visible={[visible9, setVisible9]} fullScreen={fullScreen()}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`,Z=`<Space dir="h">
    <Button type='primary' onClick={() => {
        modal.info({
            title: '信息',
            content: <div>信息</div>
        });
    }}>信息</Button>

    <Button type='success' onClick={() => {
        modal.success({
            title: '成功',
            content: <div>成功</div>
        });
    }}>成功</Button>

    <Button type='warning' onClick={() => {
        modal.warning({
            title: '警告',
            content: <div>警告</div>
        });
    }}>警告</Button>

    <Button type='error' onClick={() => {
        modal.error({
            title: '错误',
            content: <div>错误提示</div>
        });
    }}>错误</Button>

    <Button type='error' onClick={() => {
        modal.confirm({
            title: '提示',
            content: <div>确认信息</div>
        });
    }}>确认</Button>
</Space>}`,ee=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"bounds",desc:"拖拽边界",type:"string",default:"body"},{name:"disabled",desc:"禁用拖拽",type:"boolean",default:""},{name:"title",desc:"对话框的标题",type:"string|JSXElement",default:""},{name:"bodyStyle",desc:"内容区域的样式",type:"Object",default:""},{name:"footer",desc:"是否显示底部",type:"boolean",default:"true"},{name:"loading",desc:"加载中,可控",type:"boolean|Function[]",default:""},{name:"okText",desc:"确认按钮文案",type:"string",default:"确 定"},{name:"cancleText",desc:"取消按钮文案",type:"string",default:"取 消"},{name:"visible",desc:"控制对话框的显示隐藏",type:"boolean | Function[]",default:""},{name:"defaultPosition",desc:"默认位置",type:"Position{left: string, top: string}",default:""},{name:"mask",desc:"显示mask",type:"boolean",default:"true"},{name:"maskClosable",desc:"点击mask关闭",type:"boolean",default:"true"},{name:"hasCloseIcon",desc:"是否显示关闭按钮",type:"boolean",default:"true"},{name:"resetPostion",desc:"重新打开对话框进行位置重置",type:"boolean",default:""},{name:"fullScreen",desc:"全屏控制",type:"boolean | Function[]",default:""},{name:"onOk",desc:"点击确认按钮回调",type:"Function",default:""},{name:"onCancel",desc:"点击取消按钮回调",type:"Function",default:""},{name:"onClosed",desc:"关闭事件",type:"Function",default:""},{name:"onClickClose",desc:"点击关闭按钮事件",type:"Function",default:""}],te=[{name:"onOk",desc:"点击确认按钮回调",params:""},{name:"onCancel",desc:"点击取消按钮回调",params:""},{name:"onClosed",desc:"关闭事件",params:""},{name:"onClickClose",desc:"点击关闭按钮事件",params:""}],ie=[{id:"modal_base",text:"基础用法"},{id:"modal_disabled",text:"禁用拖拽"},{id:"modal_style",text:"自定义位置"},{id:"modal_footer",text:"影藏底部"},{id:"modal_loading",text:"加载中"},{id:"modal_fullscreen",text:"全屏"},{id:"modal_reset",text:"重置位置"},{id:"modal_mask",text:"不显示遮罩"},{id:"modal_maskclose",text:"禁用遮罩关闭"},{id:"modal_instance",text:"单实例使用"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],s={modal_base:G,modal_disabled:H,modal_style:K,modal_footer:N,modal_loading:Q,modal_fullscreen:R,modal_reset:U,modal_mask:W,modal_maskclose:Y,modal_instance:Z},t=m("<div>modal 内容"),le=m("<div>"),re=m('<div class="sys-ctx-main-left">'),de=m("<div>信息"),ne=m("<div>成功"),ue=m("<div>警告"),ae=m("<div>错误提示"),oe=m("<div>确认信息");function he(){const[A,f]=d(!1),[x,h]=d(!1),[M,F]=d(!1),[P,C]=d(!1),[T,g]=d(!1),[$,B]=d(!1),[O,k]=d(!1),[j,E]=d(!1),[w,_]=d(!1),[p,z]=d(!1);return[(()=>{const y=re();return I(q,y,()=>""),S(y,e(l,{dir:"v",size:32,get children(){return[e(b,{heading:2,children:"Modal 模态对话框"}),e(l,{id:"modal_base",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{f(!0)},children:"打开"}),e(c,{title:"提示",visible:[A,f],get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"基础用法"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return[e(i,{code:!0,children:"visible"})," 为可控绑定参数"]}}),e(a,{get data(){return s.modal_base}})]}})}}),e(l,{id:"modal_disabled",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{h(!0)},children:"打开"}),e(c,{disabled:!0,title:"提示",visible:[x,h],get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"禁用拖拽"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["使用",e(i,{code:!0,children:"disabled"})," 参数可禁用拖拽"]}}),e(a,{get data(){return s.modal_disabled}})]}})}}),e(l,{id:"modal_style",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{F(!0)},children:"打开"}),e(c,{title:"提示",visible:[M,F],defaultPosition:{top:"200px"},get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"自定义位置"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["使用",e(i,{code:!0,children:"defaultPosition"})," 参数可初始化位置"]}}),e(a,{get data(){return s.modal_style}})]}})}}),e(l,{id:"modal_footer",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{C(!0)},children:"打开"}),e(c,{title:"提示",visible:[P,C],footer:!1,get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"影藏底部"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置",e(i,{code:!0,children:"footer"})," 参数为false可隐藏底部元素"]}}),e(a,{get data(){return s.modal_footer}})]}})}}),e(l,{id:"modal_loading",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{g(!0)},children:"打开"}),e(c,{title:"提示",visible:[T,g],loading:!0,onOk:()=>{console.log("click ok"),setTimeout(()=>{g(!1)},2e3)},get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"加载中"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置",e(i,{code:!0,children:"loading"})," 参数，点击确定按钮变成加载中"]}}),e(a,{get data(){return s.modal_loading}})]}})}}),e(l,{id:"modal_fullscreen",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{B(!0)},children:"打开"}),e(c,{title:"提示",resetPostion:!0,visible:[$,B],get fullScreen(){return p()},get children(){return[(()=>{const D=le();return S(D,e(r,{onClick:()=>{z(!p())},children:"全屏"})),D})(),t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"全屏"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return[e(i,{code:!0,children:"fullScreen"})," 属性为可控全屏属性"]}}),e(a,{get data(){return s.modal_fullscreen}})]}})}}),e(l,{id:"modal_reset",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{k(!0)},children:"打开"}),e(c,{title:"提示",resetPostion:!0,visible:[O,k],get fullScreen(){return p()},get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"重新打开重置位置"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置",e(i,{code:!0,children:"resetPostion"})," 属性，拖拽后 重新打开会定位到初始化位置"]}}),e(a,{get data(){return s.modal_reset}})]}})}}),e(l,{id:"modal_mask",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{E(!0)},children:"打开"}),e(c,{title:"提示",mask:!1,visible:[j,E],get fullScreen(){return p()},get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"不显示遮罩"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置",e(i,{code:!0,children:"mask"})," 属性为false，将不会显示遮罩"]}}),e(a,{get data(){return s.modal_mask}})]}})}}),e(l,{id:"modal_maskclose",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(r,{type:"primary",onClick:()=>{_(!0)},children:"打开"}),e(c,{title:"提示",maskClosable:!1,visible:[w,_],get fullScreen(){return p()},get children(){return[t(),t(),t(),t()]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"禁用遮罩关闭"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置",e(i,{code:!0,children:"maskClosable"})," 属性为false，禁用遮罩点击关闭对话框功能"]}}),e(a,{get data(){return s.modal_maskclose}})]}})}}),e(l,{id:"modal_instance",dir:"v",get children(){return e(n,{bordered:!0,get children(){return[e(l,{dir:"h",get children(){return[e(r,{type:"primary",onClick:()=>{v.info({title:"信息",content:de()})},children:"信息"}),e(r,{type:"success",onClick:()=>{v.success({title:"成功",content:ne()})},children:"成功"}),e(r,{type:"warning",onClick:()=>{v.warning({title:"警告",content:ue()})},children:"警告"}),e(r,{type:"error",onClick:()=>{v.error({title:"错误",content:ae()})},children:"错误"}),e(r,{type:"error",onClick:()=>{v.confirm({title:"提示",content:oe()})},children:"确认"})]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"单实例使用"})}}),e(o,{type:"secondary",spacing:"extended",children:"使用modal的 方法弹出对话框"}),e(a,{get data(){return s.modal_instance}})]}})}}),e(l,{dir:"v",size:24,id:"comp_api",get children(){return[e(b,{type:"primary",heading:3,children:"API"}),e(l,{id:"comp_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Modal Props"}),e(V,{columns:J,data:ee,border:!0,size:"small"})]}}),e(l,{id:"comp_events",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Events"}),e(V,{columns:L,data:te,border:!0,size:"small"})]}})]}})]}})),y})(),e(X,{data:ie})]}export{he as default};
