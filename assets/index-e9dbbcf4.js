import{u as b,i as E,a as e,S as l,aI as t,T as r,P as m,I as y,d as I,t as i}from"./index-602cfbf2.js";import{C as a}from"./index-b85a489d.js";import{D as u,a as c,C as _}from"./code-fa44278e.js";import{T as d}from"./Title-c2e5d943.js";import{p as T}from"./columns-cd2d5c33.js";import{h as F}from"./hljs-c6aaaaf8.js";const f=`<Timeline>
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
</Timeline>`,C=`<Timeline>
    <Timeline.Item color="green">发布1.0版本</Timeline.Item>
    <Timeline.Item color="green">发布2.0版本</Timeline.Item>
    <Timeline.Item color="red">严重故障</Timeline.Item>
    <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
</Timeline>`,D=`<Timeline>
    <Timeline.Item color="green" fill>发布1.0版本</Timeline.Item>
    <Timeline.Item color="green" fill>发布2.0版本</Timeline.Item>
    <Timeline.Item color="red" fill>严重故障</Timeline.Item>
    <Timeline.Item color="blue" fill>发布3.0版本</Timeline.Item>
</Timeline>`,B=`<Timeline>
    <Timeline.Item color="green" icon={<Icon name='trophy' size={13}/>}>发布1.0版本</Timeline.Item>
    <Timeline.Item color="green">发布2.0版本</Timeline.Item>
    <Timeline.Item color="red">严重故障</Timeline.Item>
    <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
</Timeline>`,x=`<Timeline mode='alternate'>
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
</Timeline>`,A=`<Timeline mode='right'>
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
</Timeline>`,$=`<Timeline mode='center'>
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
</Timeline>`,v=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"mode",desc:"模式 left|right|alternate|center",type:"string",default:""}],P=[{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"color",desc:"轴点颜色 green blue, red",type:"string",default:"blue"},{name:"icon",desc:"轴点自定义图标",type:"JSXElement",default:""},{name:"fill",desc:"轴点填充color颜色",type:"boolean",default:""},{name:"time",desc:"时间轴每项的时间",type:"string",default:""}],z=[{id:"timeline_base",text:"基础用法"},{id:"timeline_color",text:"颜色"},{id:"timeline_fill",text:"填充"},{id:"timeline_alternate",text:"交替"},{id:"timeline_right",text:"靠右"},{id:"timeline_center",text:"节点靠左"},{id:"timeline_icon",text:"自定义轴点"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_itemprops",text:"数据项属性"}],s={timeline_base:f,timeline_color:C,timeline_fill:D,timeline_alternate:x,timeline_right:A,timeline_center:$,timeline_icon:B};const j=i('<label class="time">1976年'),O=i('<span class="content">Apple I 问世'),S=i('<label class="time">1984年'),L=i('<span class="content">发布 Macintosh'),M=i('<label class="time">2007年'),w=i('<span class="content">发布 iPhone'),J=i('<label class="time">2010年'),X=i('<span class="content">发布 iPad'),p=i('<label class="time">第一个节点内容'),n=i('<span class="content">描述信息'),g=i('<label class="time">第二个节点内容'),h=i('<label class="time">第三个节点内容'),k=i('<label class="time">第四个节点内容'),q=i('<label class="time">第五个节点内容'),G=i('<div class="sys-ctx-main-left">');function V(){return[(()=>{const o=G();return b(F,o,()=>""),E(o,e(l,{dir:"v",size:32,get children(){return[e(d,{heading:2,children:"Timeline 时间轴"}),e(l,{id:"timeline_base",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{get children(){return[j(),O()]}}),e(t.Item,{get children(){return[S(),L()]}}),e(t.Item,{get children(){return[M(),w()]}}),e(t.Item,{get children(){return[J(),X()]}})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"基础用法"})}}),e(m,{type:"secondary",spacing:"extended",children:"基础用法"}),e(c,{get data(){return s.timeline_base}})]}})}}),e(l,{id:"timeline_color",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{color:"green",children:"发布1.0版本"}),e(t.Item,{color:"green",children:"发布2.0版本"}),e(t.Item,{color:"red",children:"严重故障"}),e(t.Item,{color:"blue",children:"发布3.0版本"})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"颜色"})}}),e(m,{type:"secondary",spacing:"extended",children:"用各种颜色来标识不同状态，可以使用green、red、blue、yellow或自定义的颜色，默认是 blue 。"}),e(c,{get data(){return s.timeline_color}})]}})}}),e(l,{id:"timeline_fill",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{color:"green",fill:!0,children:"发布1.0版本"}),e(t.Item,{color:"green",fill:!0,children:"发布2.0版本"}),e(t.Item,{color:"red",fill:!0,children:"严重故障"}),e(t.Item,{color:"blue",fill:!0,children:"发布3.0版本"})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"填充"})}}),e(m,{type:"secondary",spacing:"extended",children:"设置fill可以将color填充节点"}),e(c,{get data(){return s.timeline_fill}})]}})}}),e(l,{id:"timeline_alternate",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{mode:"alternate",get children(){return[e(t.Item,{time:"2023-01-01 12:00:00",get children(){return[p(),n()]}}),e(t.Item,{time:"2023-01-02 12:00:00",get children(){return[g(),n()]}}),e(t.Item,{time:"2023-01-03 12:00:00",get children(){return[h(),n()]}}),e(t.Item,{time:"2023-01-04 12:00:00",get children(){return[k(),n()]}}),e(t.Item,{time:"2023-01-05 12:00:00",get children(){return[q(),n()]}})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"交替"})}}),e(m,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(r,{code:!0,children:"mode='alternate'"})," 可以交替显示时间轴内容"]}}),e(c,{get data(){return s.timeline_alternate}})]}})}}),e(l,{id:"timeline_right",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{mode:"right",get children(){return[e(t.Item,{time:"2023-01-01 12:00:00",get children(){return[p(),n()]}}),e(t.Item,{time:"2023-01-02 12:00:00",get children(){return[g(),n()]}}),e(t.Item,{time:"2023-01-03 12:00:00",get children(){return[h(),n()]}})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"靠右"})}}),e(m,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(r,{code:!0,children:"mode='right'"})," 可以渲染靠右的时间轴"]}}),e(c,{get data(){return s.timeline_right}})]}})}}),e(l,{id:"timeline_center",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{mode:"center",get children(){return[e(t.Item,{time:"2023-01-01 12:00:00",get children(){return[p(),n()]}}),e(t.Item,{time:"2023-01-02 12:00:00",get children(){return[g(),n()]}}),e(t.Item,{time:"2023-01-03 12:00:00",get children(){return[h(),n()]}})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"时间节点靠左"})}}),e(m,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(r,{code:!0,children:"mode='center'"})," 可以将时间靠左显示"]}}),e(c,{get data(){return s.timeline_center}})]}})}}),e(l,{id:"timeline_icon",dir:"v",get children(){return e(a,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{color:"green",get icon(){return e(y,{name:"trophy",size:13})},children:"发布1.0版本"}),e(t.Item,{color:"green",children:"发布2.0版本"}),e(t.Item,{color:"red",children:"严重故障"}),e(t.Item,{color:"blue",children:"发布3.0版本"})]}}),e(u,{align:"left",get children(){return e(r,{type:"primary",children:"自定义轴点"})}}),e(m,{type:"secondary",spacing:"extended",children:"自定义轴点的内容，一个图标。"}),e(c,{get data(){return s.timeline_icon}})]}})}}),e(l,{dir:"v",size:24,id:"comp_api",get children(){return[e(d,{type:"primary",heading:3,children:"API"}),e(l,{id:"comp_props",dir:"v",get children(){return[e(d,{type:"primary",heading:4,children:"Timeline Props"}),e(I,{columns:T,data:v,border:!0,size:"small"})]}}),e(l,{id:"comp_itemprops",dir:"v",get children(){return[e(d,{type:"primary",heading:4,children:"Timeline.Item Props"}),e(I,{columns:T,data:P,border:!0,size:"small"})]}})]}})]}})),o})(),e(_,{data:z})]}export{V as default};
