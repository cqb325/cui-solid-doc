import{c as F,u as J,i as _,a as e,S as r,E as m,T as i,P as o,p as X,B as y,I as H,F as S,aH as M,d as s,t}from"./index-6b593c43.js";import{R as w,C as n}from"./index-460cfa25.js";import{T as u}from"./Title-4bfa7384.js";import{C as g}from"./index-92015a99.js";import{D as d,a as p,C as N}from"./code-5b64fce7.js";import{p as I,e as x}from"./columns-cd2d5c33.js";import{h as W}from"./hljs-409c3200.js";const a=""+new URL("1-7ae6fd9d.jpg",import.meta.url).href,D=""+new URL("2-0e7024d4.jpg",import.meta.url).href,L=""+new URL("3-0adb05c6.jpg",import.meta.url).href,A=""+new URL("4-4c118fd5.jpg",import.meta.url).href,B=""+new URL("5-3478358e.jpg",import.meta.url).href,z=""+new URL("6-ba7e3a2c.jpg",import.meta.url).href,k=""+new URL("7-2d885787.jpg",import.meta.url).href,R=""+new URL("8-4009effe.jpg",import.meta.url).href,$=""+new URL("9-eab9f218.jpg",import.meta.url).href,C=""+new URL("10-c72440cb.jpg",import.meta.url).href,q=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

<Row gutter={20} style={{'text-align': 'center'}}>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='contain' src={img1}/>
        <div>contain</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='cover' src={img1}/>
        <div>cover</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='fill' src={img1}/>
        <div>fill</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='none' src={img1}/>
        <div>none</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='scale-down' src={img1}/>
        <div>scale-down</div>
    </Col>
</Row>`,G=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

const [src1, setSrc1] = createSignal('');


<Space dir="h">
    <Row style={{'text-align': 'center'}} gutter={20}>
        <Col grid={0.5}>
            <Image width={200} height={100} fit='cover' src={src1()}/>
            <div>默认</div>
        </Col>
        <Col grid={0.5}>
            <Image width={200} height={100} fit='cover' src={src1()} placeholder={<Spin />}/>
            <div>自定义</div>
        </Col>
    </Row>
    <Button type='primary' onClick={() => {
        setSrc1(img10)
    }}>加载</Button>
</Space>`,K=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

const [src2, setSrc2] = createSignal('');

<Space dir="h">
    <Row style={{'text-align': 'center'}} gutter={20}>
        <Col grid={0.5}>
            <Image width={200} height={100} fit='cover' src={src2()}/>
            <div>默认</div>
        </Col>
        <Col grid={0.5}>
            <Image width={200} height={100} fit='cover' src={src2()} failInfo={<Icon name='image'/>}/>
            <div>自定义</div>
        </Col>
    </Row>
    <Button type='primary' onClick={() => {
        setSrc2(img1)
    }}>加载</Button>
</Space>`,Q=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

const verticalUrlList = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
]

<Space dir="v">
    <div class="demo-image-lazy-vertical">
        <For each={verticalUrlList}>
            {(url: string) => {
                return <Image src={url} lazy scrollContainer='.demo-image-lazy-vertical'/>
            }}
        </For>
    </div>
</Space>`,Y=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

const verticalUrlList = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
]

<Space dir="h" wrap>
    <For each={verticalUrlList}>
        {(url: string, index: Function) => {
            return <Image src={url} width={120} maskClosable={false} height={80} fit="contain" preview previewIndex={index()} previewList={verticalUrlList}/>
        }}
    </For>
</Space>`,Z=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

const [visible, setVisible] = createSignal(false);

<Space dir="h" wrap>
    <Button type='primary' onClick={() => {
        setVisible(true);
    }}>打开</Button>
    <ImagePreview visible={[visible, setVisible]} previewList={
        [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
        ]
    } />
</Space>`,ee=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"failInfo",desc:"失败显示信息",type:"JSXElement",default:""},{name:"preview",desc:"打开预览功能",type:"boolean",default:""},{name:"previewTip",desc:"预览的提示文案",type:"string",default:"预览"},{name:"previewList",desc:"预览图片列表",type:"String[]",default:""},{name:"fit",desc:"图片fit fill|contain|cover|none|scale-down",type:"string",default:""},{name:"alt",desc:"图片alt",type:"string",default:""},{name:"src",desc:"图片地址",type:"string",default:""},{name:"lazy",desc:"懒加载",type:"boolean",default:""},{name:"referrerPolicy",desc:"图片引用策略",type:"string",default:""},{name:"scrollContainer",desc:"懒加载滚动的容器",type:"string | HTMLElement",default:""},{name:"placeholder",desc:"占位",type:"string| JSXElement",default:""},{name:"width",desc:"宽度",type:"number | string",default:""},{name:"height",desc:"高度",type:"number | string",default:""},{name:"infinite",desc:"预览的是否连续",type:"boolean",default:"true"},{name:"maskClosable",desc:"点击遮罩进行关闭",type:"boolean",default:""},{name:"previewIndex",desc:"预览默认索引",type:"number",default:"0"},{name:"onLoad",desc:"图片加载完成事件",type:"Function",default:""},{name:"onError",desc:"图片加载失败事件",type:"Function",default:""},{name:"onClose",desc:"预览关闭事件",type:"Function",default:""},{name:"onSwitch",desc:"预览图片切换事件",type:"Function",default:""}],re=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"failInfo",desc:"失败显示信息",type:"JSXElement",default:""},{name:"previewList",desc:"预览图片列表",type:"String[]",default:""},{name:"infinite",desc:"预览的是否连续",type:"boolean",default:"true"},{name:"visible",desc:"预览控制显示",type:"Function[]",default:""},{name:"initIndex",desc:"预览默认索引",type:"number",default:"0"},{name:"maskClosable",desc:"点击遮罩进行关闭",type:"boolean",default:""},{name:"onClose",desc:"预览关闭事件",type:"Function",default:""},{name:"onSwitch",desc:"预览图片切换事件",type:"Function",default:""}],te=[{name:"onLoad",desc:"图片加载完成事件",params:"node"},{name:"onError",desc:"图片加载失败事件",params:"value"},{name:"onClose",desc:"预览关闭事件",params:"node"},{name:"onSwitch",desc:"预览图片切换事件",params:"name"}],ie=[{name:"onClose",desc:"预览关闭事件",params:"node"},{name:"onSwitch",desc:"预览图片切换事件",params:"name"}],me=[{id:"image_base",text:"基础用法"},{id:"image_placeholder",text:"占位"},{id:"image_error",text:"失败"},{id:"image_lazy",text:"懒加载"},{id:"image_preview",text:"预览"},{id:"image_image_preview",text:"单独使用"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_previewprops",text:"预览属性"},{id:"comp_events",text:"事件"},{id:"comp_previewevents",text:"预览事件"}],l={image_base:q,image_placeholder:G,image_error:K,image_lazy:Q,image_preview:Y,image_image_preview:Z},ne=t("<div>contain"),ae=t("<div>cover"),oe=t("<div>fill"),ue=t("<div>none"),ge=t("<div>scale-down"),U=t("<div>默认"),P=t("<div>自定义"),de=t('<div class="demo-image-lazy-vertical">'),pe=t("<br>"),le=t("<kbd>←"),ce=t("<kbd>→"),se=t("<kbd>↑"),he=t("<kbd>↓"),fe=t("<kbd>Space"),ve=t("<kbd>ESC"),Fe=t('<div class="sys-ctx-main-left">');function Se(){const[j,T]=F(""),[E,O]=F(""),[V,b]=F(!1),h=[a,D,L,A,B,z,k,R,$,C];return[(()=>{const f=Fe();return J(W,f,()=>""),_(f,e(r,{dir:"v",size:32,get children(){return[e(u,{heading:2,children:"Image 图片"}),e(r,{id:"image_base",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(w,{gutter:20,style:{"text-align":"center"},get children(){return[e(n,{grid:1/5,get children(){return[e(m,{width:100,height:100,fit:"contain",src:a}),ne()]}}),e(n,{grid:1/5,get children(){return[e(m,{width:100,height:100,fit:"cover",src:a}),ae()]}}),e(n,{grid:1/5,get children(){return[e(m,{width:100,height:100,fit:"fill",src:a}),oe()]}}),e(n,{grid:1/5,get children(){return[e(m,{width:100,height:100,fit:"none",src:a}),ue()]}}),e(n,{grid:1/5,get children(){return[e(m,{width:100,height:100,fit:"scale-down",src:a}),ge()]}})]}}),e(d,{align:"left",get children(){return e(i,{type:"primary",children:"基本用法"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["可通过 fit 来设置图片在容器的样式，同原生 ",e(i,{link:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",children:"object-fit"}),"。"]}}),e(p,{get data(){return l.image_base}})]}})}}),e(r,{id:"image_placeholder",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(w,{style:{"text-align":"center"},gutter:20,get children(){return[e(n,{grid:.5,get children(){return[e(m,{width:200,height:100,fit:"cover",get src(){return j()}}),U()]}}),e(n,{grid:.5,get children(){return[e(m,{width:200,height:100,fit:"cover",get src(){return j()},get placeholder(){return e(X,{})}}),P()]}})]}}),e(y,{type:"primary",onClick:()=>{T(C)},children:"加载"})]}}),e(d,{align:"left",get children(){return e(i,{type:"primary",children:"占位"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["通过",e(i,{code:!0,children:"placeholder"}),"属性可以自定义占位样式，可通过console的Network修改网络速率进行测试"]}}),e(p,{get data(){return l.image_placeholder}})]}})}}),e(r,{id:"image_error",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(w,{style:{"text-align":"center"},gutter:20,get children(){return[e(n,{grid:.5,get children(){return[e(m,{width:200,height:100,fit:"cover",get src(){return E()}}),U()]}}),e(n,{grid:.5,get children(){return[e(m,{width:200,height:100,fit:"cover",get src(){return E()},get failInfo(){return e(H,{name:"image"})}}),P()]}})]}}),e(y,{type:"primary",onClick:()=>{O(a)},children:"加载"})]}}),e(d,{align:"left",get children(){return e(i,{type:"primary",children:"失败"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["通过",e(i,{code:!0,children:"failInfo"}),"属性可以自定义图片加载失败样式"]}}),e(p,{get data(){return l.image_error}})]}})}}),e(r,{id:"image_lazy",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){const c=de();return _(c,e(S,{each:h,children:v=>e(m,{src:v,lazy:!0,scrollContainer:".demo-image-lazy-vertical"})})),c}}),e(d,{align:"left",get children(){return e(i,{type:"primary",children:"懒加载"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置属性 ",e(i,{code:!0,children:"lazy"})," 可以开启图片懒加载功能，当图片滚动到可视范围内才会加载。"]}}),e(p,{get data(){return l.image_lazy}})]}})}}),e(r,{id:"image_preview",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(r,{dir:"h",wrap:!0,get children(){return e(S,{each:h,children:(c,v)=>e(m,{src:c,width:120,maskClosable:!1,height:80,fit:"contain",preview:!0,get previewIndex(){return v()},previewList:h})})}}),e(d,{align:"left",get children(){return e(i,{type:"primary",children:"预览"})}}),e(o,{type:"secondary",spacing:"extended",get children(){return["设置属性 ",e(i,{code:!0,children:"preview"})," 可以开启图片预览模式，通过属性 ",e(i,{code:!0,children:"previewList"})," 来设置图片列表，",e(i,{code:!0,children:"previewIndex"})," 属性设置打开预览时显示图片的索引。",pe(),"预览时，可以使用 ",le(),"、",ce()," 切换图片，",se(),"、",he()," 缩放图片，",fe()," 显示 1:1 图片，",ve()," 退出预览。"]}}),e(p,{get data(){return l.image_preview}})]}})}}),e(r,{id:"image_image_preview",dir:"v",get children(){return e(g,{bordered:!0,get children(){return[e(r,{dir:"h",wrap:!0,get children(){return[e(y,{type:"primary",onClick:()=>{b(!0)},children:"打开"}),e(M,{visible:[V,b],previewList:[a,D,L,A,B,z,k,R,$,C]})]}}),e(d,{align:"left",get children(){return e(i,{type:"primary",children:"单独使用图片预览"})}}),e(o,{type:"secondary",spacing:"extended",children:"图片预览组件 ImagePreview 也可以单独使用。"}),e(p,{get data(){return l.image_image_preview}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(u,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"Image Props"}),e(s,{columns:I,data:ee,border:!0,size:"small"})]}}),e(r,{id:"comp_previewprops",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"ImagePreview Props"}),e(s,{columns:I,data:re,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"Events"}),e(s,{columns:x,data:te,border:!0,size:"small"})]}}),e(r,{id:"comp_previewevents",dir:"v",get children(){return[e(u,{type:"primary",heading:4,children:"ImagePreview Events"}),e(s,{columns:x,data:ie,border:!0,size:"small"})]}})]}})]}})),f})(),e(N,{data:me})]}export{Se as default};
