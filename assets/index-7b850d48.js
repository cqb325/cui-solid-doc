import{i as h,a as e,f as x,g as v,h as D,t as l,j as B,s as A,u as P,S as n,T as m,I as z}from"./index-39ed6b74.js";import{C as a}from"./index-f8aef721.js";import{D as u,a as s,C as L}from"./code-a8f5f1bb.js";import{T as C,p as $}from"./columns-f7fa8682.js";import{P as d}from"./Paragraph-97fd5b1c.js";import{T as b}from"./Title-9180e6b0.js";import{h as S}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const j=l('<div class="cm-timeline-time">'),w=l('<div class="cm-timeline-item"><div class="cm-timeline-item-tail"></div><div></div><div class="cm-timeline-item-content">');function O(i){const I=i.color??"blue",p=()=>B(i,"cm-timeline-item-head",{[`cm-timeline-item-head-${I}`]:I,"cm-timeline-item-head-custom":i.icon,"cm-timeline-item-head-fill":i.fill});return(()=>{const c=w(),_=c.firstChild,g=_.nextSibling,F=g.nextSibling;return h(g,()=>i.icon),h(F,()=>i.children,null),h(F,e(x,{get when(){return i.time},get children(){const T=j();return h(T,()=>i.time),T}}),null),v(T=>D(g,p(),T)),c})()}const M=l("<div>");function t(i){const I=()=>B(i,"cm-timeline",{[`cm-timeline-${i.mode}`]:i.mode});return(()=>{const p=M();return h(p,()=>i.children),v(c=>{const _=I(),g=i.style;return c._v$=D(p,_,c._v$),c._v$2=A(p,g,c._v$2),c},{_v$:void 0,_v$2:void 0}),p})()}t.Item=O;const J=`<Timeline>
    <Timeline.Item>
        <label class="time">1976年</label>
        <span class="content">Apple I 问世</span>
    </Timeline.Item>
    <Timeline.Item>
        <label class="time">1984年</label>
        <span class="content">发布 Macintosh</span>
    </Timeline.Item>
    <Timeline.Item>
        <label class="time">2007年</label>
        <span class="content">发布 iPhone</span>
    </Timeline.Item>
    <Timeline.Item>
        <label class="time">2010年</label>
        <span class="content">发布 iPad</span>
    </Timeline.Item>
</Timeline>`,R=`<Timeline>
    <Timeline.Item color="green">发布1.0版本</Timeline.Item>
    <Timeline.Item color="green">发布2.0版本</Timeline.Item>
    <Timeline.Item color="red">严重故障</Timeline.Item>
    <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
</Timeline>`,X=`<Timeline>
    <Timeline.Item color="green" fill>发布1.0版本</Timeline.Item>
    <Timeline.Item color="green" fill>发布2.0版本</Timeline.Item>
    <Timeline.Item color="red" fill>严重故障</Timeline.Item>
    <Timeline.Item color="blue" fill>发布3.0版本</Timeline.Item>
</Timeline>`,k=`<Timeline>
    <Timeline.Item color="green" icon={<Icon name='trophy' size={13}/>}>发布1.0版本</Timeline.Item>
    <Timeline.Item color="green">发布2.0版本</Timeline.Item>
    <Timeline.Item color="red">严重故障</Timeline.Item>
    <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
</Timeline>`,q=`<Timeline mode='alternate'>
    <Timeline.Item time="2023-01-01 12:00:00">
        <label class="time">第一个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-02 12:00:00">
        <label class="time">第二个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-03 12:00:00">
        <label class="time">第三个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-04 12:00:00">
        <label class="time">第四个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-05 12:00:00">
        <label class="time">第五个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
</Timeline>`,G=`<Timeline mode='right'>
    <Timeline.Item time="2023-01-01 12:00:00">
        <label class="time">第一个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-02 12:00:00">
        <label class="time">第二个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-03 12:00:00">
        <label class="time">第三个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
</Timeline>`,H=`<Timeline mode='center'>
    <Timeline.Item time="2023-01-01 12:00:00">
        <label class="time">第一个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-02 12:00:00">
        <label class="time">第二个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
    <Timeline.Item time="2023-01-03 12:00:00">
        <label class="time">第三个节点内容</label>
        <span class="content">描述信息</span>
    </Timeline.Item>
</Timeline>`,K=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"mode",desc:"模式 left|right|alternate|center",type:"string",default:""}],N=[{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"color",desc:"轴点颜色 green blue, red",type:"string",default:"blue"},{name:"icon",desc:"轴点自定义图标",type:"JSXElement",default:""},{name:"fill",desc:"轴点填充color颜色",type:"boolean",default:""},{name:"time",desc:"时间轴每项的时间",type:"string",default:""}],Q=[{id:"timeline_base",text:"基础用法"},{id:"timeline_color",text:"颜色"},{id:"timeline_fill",text:"填充"},{id:"timeline_alternate",text:"交替"},{id:"timeline_right",text:"靠右"},{id:"timeline_center",text:"节点靠左"},{id:"timeline_icon",text:"自定义轴点"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_itemprops",text:"数据项属性"}],o={timeline_base:J,timeline_color:R,timeline_fill:X,timeline_alternate:q,timeline_right:G,timeline_center:H,timeline_icon:k};const U=l('<label class="time">1976年'),V=l('<span class="content">Apple I 问世'),W=l('<label class="time">1984年'),Y=l('<span class="content">发布 Macintosh'),Z=l('<label class="time">2007年'),ee=l('<span class="content">发布 iPhone'),te=l('<label class="time">2010年'),ie=l('<span class="content">发布 iPad'),E=l('<label class="time">第一个节点内容'),r=l('<span class="content">描述信息'),f=l('<label class="time">第二个节点内容'),y=l('<label class="time">第三个节点内容'),le=l('<label class="time">第四个节点内容'),ne=l('<label class="time">第五个节点内容'),re=l('<div class="sys-ctx-main-left">');function he(){return[(()=>{const i=re();return P(S,i,()=>""),h(i,e(n,{dir:"v",size:32,get children(){return[e(b,{heading:2,children:"Timeline 时间轴"}),e(n,{id:"timeline_base",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{get children(){return[U(),V()]}}),e(t.Item,{get children(){return[W(),Y()]}}),e(t.Item,{get children(){return[Z(),ee()]}}),e(t.Item,{get children(){return[te(),ie()]}})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"基础用法"})}}),e(d,{type:"secondary",spacing:"extended",children:"基础用法"}),e(s,{get data(){return o.timeline_base}})]}})}}),e(n,{id:"timeline_color",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{color:"green",children:"发布1.0版本"}),e(t.Item,{color:"green",children:"发布2.0版本"}),e(t.Item,{color:"red",children:"严重故障"}),e(t.Item,{color:"blue",children:"发布3.0版本"})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"颜色"})}}),e(d,{type:"secondary",spacing:"extended",children:"用各种颜色来标识不同状态，可以使用green、red、blue、yellow或自定义的颜色，默认是 blue 。"}),e(s,{get data(){return o.timeline_color}})]}})}}),e(n,{id:"timeline_fill",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{color:"green",fill:!0,children:"发布1.0版本"}),e(t.Item,{color:"green",fill:!0,children:"发布2.0版本"}),e(t.Item,{color:"red",fill:!0,children:"严重故障"}),e(t.Item,{color:"blue",fill:!0,children:"发布3.0版本"})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"填充"})}}),e(d,{type:"secondary",spacing:"extended",children:"设置fill可以将color填充节点"}),e(s,{get data(){return o.timeline_fill}})]}})}}),e(n,{id:"timeline_alternate",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{mode:"alternate",get children(){return[e(t.Item,{time:"2023-01-01 12:00:00",get children(){return[E(),r()]}}),e(t.Item,{time:"2023-01-02 12:00:00",get children(){return[f(),r()]}}),e(t.Item,{time:"2023-01-03 12:00:00",get children(){return[y(),r()]}}),e(t.Item,{time:"2023-01-04 12:00:00",get children(){return[le(),r()]}}),e(t.Item,{time:"2023-01-05 12:00:00",get children(){return[ne(),r()]}})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"交替"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(m,{code:!0,children:"mode='alternate'"})," 可以交替显示时间轴内容"]}}),e(s,{get data(){return o.timeline_alternate}})]}})}}),e(n,{id:"timeline_right",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{mode:"right",get children(){return[e(t.Item,{time:"2023-01-01 12:00:00",get children(){return[E(),r()]}}),e(t.Item,{time:"2023-01-02 12:00:00",get children(){return[f(),r()]}}),e(t.Item,{time:"2023-01-03 12:00:00",get children(){return[y(),r()]}})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"靠右"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(m,{code:!0,children:"mode='right'"})," 可以渲染靠右的时间轴"]}}),e(s,{get data(){return o.timeline_right}})]}})}}),e(n,{id:"timeline_center",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{mode:"center",get children(){return[e(t.Item,{time:"2023-01-01 12:00:00",get children(){return[E(),r()]}}),e(t.Item,{time:"2023-01-02 12:00:00",get children(){return[f(),r()]}}),e(t.Item,{time:"2023-01-03 12:00:00",get children(){return[y(),r()]}})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"时间节点靠左"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(m,{code:!0,children:"mode='center'"})," 可以将时间靠左显示"]}}),e(s,{get data(){return o.timeline_center}})]}})}}),e(n,{id:"timeline_icon",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{color:"green",get icon(){return e(z,{name:"trophy",size:13})},children:"发布1.0版本"}),e(t.Item,{color:"green",children:"发布2.0版本"}),e(t.Item,{color:"red",children:"严重故障"}),e(t.Item,{color:"blue",children:"发布3.0版本"})]}}),e(u,{align:"left",get children(){return e(m,{type:"primary",children:"自定义轴点"})}}),e(d,{type:"secondary",spacing:"extended",children:"自定义轴点的内容，一个图标。"}),e(s,{get data(){return o.timeline_icon}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(b,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Timeline Props"}),e(C,{columns:$,data:K,border:!0,size:"small"})]}}),e(n,{id:"comp_itemprops",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Timeline.Item Props"}),e(C,{columns:$,data:N,border:!0,size:"small"})]}})]}})]}})),i})(),e(L,{data:Q})]}export{he as default};
