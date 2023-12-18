import{Y as de,J as ee,A as ue,i as o,g as z,h as $,t as x,j as te,o as me,r as ge,v as ve,b as V,a as e,I as W,F as fe,n as Ie,p as he,u as U,s as Ce,q as pe,c as ye,S as g,y as c,T as f}from"./index-0246dc72.js";import{C as T,B as _e}from"./index-f479a69a.js";import{T as R}from"./Title-b2de7444.js";import{D,a as F,C as $e}from"./code-558518d5.js";import{P as E}from"./Paragraph-7a7dff1a.js";import{R as xe,C as X}from"./index-b76d8044.js";import{T as Z,p as Ae,e as je}from"./columns-43b26f11.js";import{h as be}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const Te=x("<div>");function De(l){const s=we(),n=de(),v=()=>te(l,"cm-carousel-item",{"cm-carousel-item-active-fade":s&&s.effect==="fade"&&s.store.activeKey===n,"cm-carousel-item-active":s&&s.effect==="slide"&&s.store.dir==="normal"&&s.store.activeKey===n,"cm-carousel-item-active-next":s&&s.effect==="slide"&&s.store.dir==="normal"&&s.store.prevKey===n,"cm-carousel-item-active-reverse":s&&s.effect==="slide"&&s.store.dir==="reverse"&&s.store.activeKey===n,"cm-carousel-item-active-reverse-next":s&&s.effect==="slide"&&s.store.dir==="reverse"&&s.store.nextKey===n});return ee(()=>{s&&s.addItem({id:n})}),(()=>{const t=Te();return ue(t,"data-id",n),o(t,()=>l.children),z(P=>$(t,v(),P)),t})()}const Fe=x('<div><div x-placement="left"></div><div class="cm-carousel-list"></div><div x-placement="right"></div><ul>'),Ee=x("<li>"),re=he();function r(l){const s=()=>te(l,"cm-carousel"),[n,v]=me(l,"activeIndex",0),t=l.arrow??"hover",P=l.dotType??"dot",q=l.dotAlign??"center",oe=l.autoPlay??!1,N=l.duration??4e3,ce=l.effect??"slide";let S,A,j=null;const M=()=>({"cm-carousel-arrow":!0,[`cm-carousel-arrow-${t}`]:!!t}),ie=()=>({"cm-carousel-dots":!0,[`cm-carousel-dots-${P}`]:!!P,[`cm-carousel-dots-${q}`]:!!q});let O=!1;const[u,I]=ge({data:[],activeIndex:n(),activeKey:"",nextKey:"",prevKey:"",dir:"normal"}),se=a=>{a.index=u.data.length,I("data",[...u.data,a])},J=()=>{clearTimeout(j),Y(),j=setTimeout(()=>{J()},N)};ee(()=>{if(S){const a=S.querySelectorAll(".cm-carousel-item");if(a.length){const d=a[0].getBoundingClientRect();A.style.height=d.height+"px"}oe&&(j=setTimeout(()=>{J()},N))}}),ve(()=>{j&&clearTimeout(j)}),V(()=>{const a=n();I("activeIndex",a)}),V(()=>{const a=u.activeIndex,d=u.data;if(d&&d.length)if(!O)A.children[u.activeIndex].classList.add("cm-carousel-item-active-init"),O=!0;else{const h=A.querySelector(".cm-carousel-item-active-init");h&&h.classList.remove("cm-carousel-item-active-init"),I("activeKey",d[a].id),I("prevKey",d[(d.length+a-1)%d.length].id),I("nextKey",d[(d.length+a+1)%d.length].id)}});const Y=()=>{v((u.activeIndex+1)%u.data.length),I("dir","normal"),l.onChange&&l.onChange(n())},ae=()=>{v((u.data.length+u.activeIndex-1)%u.data.length),I("dir","reverse"),l.onChange&&l.onChange(n())},le=a=>{I("dir",u.activeIndex-a<0?"normal":"reverse"),v(a),l.onChange&&l.onChange(n())};return e(re.Provider,{value:{addItem:se,store:u,effect:ce},get children(){const a=Fe(),d=a.firstChild,h=d.nextSibling,K=h.nextSibling,G=K.nextSibling,H=S;typeof H=="function"?U(H,a):S=a,d.$$click=ae,o(d,e(W,{name:"chevron-left",size:24}));const Q=A;return typeof Q=="function"?U(Q,h):A=h,o(h,()=>l.children),K.$$click=Y,o(K,e(W,{name:"chevron-right",size:24})),o(G,e(fe,{get each(){return u.data},children:(m,L)=>{const B=()=>({"cm-carousel-dot":!0,"cm-carousel-dot-active":u.activeIndex===L()});return(()=>{const b=Ee();return b.$$click=()=>{le(L())},z(k=>$(b,B(),k)),b})()}})),z(m=>{const L=s(),B=l.style,b=M(),k=M(),ne=ie();return m._v$=$(a,L,m._v$),m._v$2=Ce(a,B,m._v$2),m._v$3=$(d,b,m._v$3),m._v$4=$(K,k,m._v$4),m._v$5=$(G,ne,m._v$5),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),a}})}r.Item=De;const we=()=>pe(re);Ie(["click"]);const C=""+new URL("1-a8b02a30.jpg",import.meta.url).href,p=""+new URL("2-6b758c64.jpg",import.meta.url).href,y=""+new URL("3-6403de82.jpg",import.meta.url).href,_=""+new URL("4-e81a9b66.jpg",import.meta.url).href,Pe=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Carousel>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>`,Se=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Carousel autoPlay>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>
`,Ke=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Row gutter={20}>
    <Col grid={0.5}>
        <Carousel dotAlign="left">
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Col>
    <Col grid={0.5}>
        <Carousel dotAlign="right">
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Col>
</Row>`,Le=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Carousel dotType="line">
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>

<Carousel dotType="columnar">
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>`,Re=`const [index, setIndex] = createSignal(0);

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Space id="image_base" dir="v">
    <Carousel dotType="line" activeIndex={[index, setIndex]}>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img1} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img2} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img3} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img4} fit="cover"/>
            </div>
        </Carousel.Item>
    </Carousel>
    <div>
        <Button type="primary" onClick={() => {
            setIndex((index() + 1) % 4)
        }}>Next</Button>
    </div>
</Space>`,Be=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"arrow",desc:"切换按钮的显示方式 hover|always|never",type:"string",default:"hover"},{name:"autoPlay",desc:"自动播放",type:"boolean",default:""},{name:"duration",desc:"自动播放时间ms",type:"number",default:"4000"},{name:"effect",desc:"动效 fade|slide",type:"number",default:"4000"},{name:"dotType",desc:"缩略点位的样式 dot|line|columnar",type:"string",default:"dot"},{name:"dotAlign",desc:"点位的位置 left|center|right",type:"string",default:"center"},{name:"activeIndex",desc:"控制活跃的索引",type:"Function[]",default:""},{name:"onChange",desc:"切换事件",type:"Function",default:""}],ke=[{name:"onChange",desc:"切换事件",params:""}],ze=[{id:"carousel_base",text:"基础用法"},{id:"carousel_autoplay",text:"自动播放"},{id:"carousel_dotAlign",text:"dot位置"},{id:"carousel_dotstyle",text:"dot样式"},{id:"carousel_control",text:"可控"},{id:"comp_api",text:"API"},{id:"comp_props",text:"数据项属性"}],w={carousel_base:Pe,carousel_autoplay:Se,carousel_dotAlign:Ke,carousel_dotstyle:Le,carousel_control:Re},i=x('<div class="demo-carousel">'),Ue=x("<div>"),qe=x('<div class="sys-ctx-main-left">');function We(l){const[s,n]=ye(0);return[(()=>{const v=qe();return U(be,v,()=>""),o(v,e(g,{dir:"v",size:32,get children(){return[e(R,{heading:2,children:"Carousel 跑马灯"}),e(g,{id:"carousel_base",dir:"v",get children(){return e(T,{bordered:!0,get children(){return[e(r,{get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}}),e(D,{align:"left",get children(){return e(f,{type:"primary",children:"基本用法"})}}),e(E,{type:"secondary",spacing:"extended",children:"基本用法"}),e(F,{get data(){return w.carousel_base}})]}})}}),e(g,{id:"carousel_autoplay",dir:"v",get children(){return e(T,{bordered:!0,get children(){return[e(r,{autoPlay:!0,get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}}),e(D,{align:"left",get children(){return e(f,{type:"primary",children:"自动播放"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return["添加",e(f,{code:!0,children:"autoPlay"})," 可以自动播放"]}}),e(F,{get data(){return w.carousel_autoplay}})]}})}}),e(g,{id:"carousel_dotAlign",dir:"v",get children(){return e(T,{bordered:!0,get children(){return[e(xe,{gutter:20,get children(){return[e(X,{grid:.5,get children(){return e(r,{dotAlign:"left",get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}})}}),e(X,{grid:.5,get children(){return e(r,{dotAlign:"right",get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}})}})]}}),e(D,{align:"left",get children(){return e(f,{type:"primary",children:"dot位置"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return[e(f,{code:!0,children:"dotAlign"})," 支持left和right 默认center"]}}),e(F,{get data(){return w.carousel_dotAlign}})]}})}}),e(g,{id:"carousel_dotstyle",dir:"v",get children(){return e(T,{bordered:!0,get children(){return[e(r,{dotType:"line",get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}}),e(r,{dotType:"columnar",get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}}),e(D,{align:"left",get children(){return e(f,{type:"primary",children:"dot样式"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return[e(f,{code:!0,children:"dotType"})," 支持 line 和 columnar 默认圆形"]}}),e(F,{get data(){return w.carousel_dotstyle}})]}})}}),e(g,{id:"carousel_control",dir:"v",get children(){return e(T,{bordered:!0,get children(){return[e(g,{id:"image_base",dir:"v",get children(){return[e(r,{dotType:"line",activeIndex:[s,n],get children(){return[e(r.Item,{get children(){const t=i();return o(t,e(c,{src:C,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:p,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:y,fit:"cover"})),t}}),e(r.Item,{get children(){const t=i();return o(t,e(c,{src:_,fit:"cover"})),t}})]}}),(()=>{const t=Ue();return o(t,e(_e,{type:"primary",onClick:()=>{n((s()+1)%4)},children:"Next"})),t})()]}}),e(D,{align:"left",get children(){return e(f,{type:"primary",children:"可控"})}}),e(E,{type:"secondary",spacing:"extended",get children(){return[e(f,{code:!0,children:"activeIndex"})," 属性进行控制显示的索引"]}}),e(F,{get data(){return w.carousel_control}})]}})}}),e(g,{dir:"v",size:24,id:"comp_api",get children(){return[e(R,{type:"primary",heading:3,children:"API"}),e(g,{id:"comp_props",dir:"v",get children(){return[e(R,{type:"primary",heading:4,children:"Carousel Props"}),e(Z,{columns:Ae,data:Be,border:!0,size:"small"})]}}),e(g,{id:"comp_events",dir:"v",get children(){return[e(R,{type:"primary",heading:4,children:"Events"}),e(Z,{columns:je,data:ke,border:!0,size:"small"})]}})]}})]}})),v})(),e($e,{data:ze})]}export{We as default};
