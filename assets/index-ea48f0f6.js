import{u as S,i as x,a as e,S as r,T as a,B as l,t as R}from"./index-5e0fdc25.js";import{F as s,a as n}from"./createField-47c85f73.js";import{u as D}from"./useForm-67a02314.js";import{I as o}from"./index-f4505d97.js";import{C as _}from"./index-54626c01.js";import{d as m}from"./dayjs.min-ea173184.js";import{T as p}from"./Title-abffd9c9.js";import{C as h}from"./index-7b04ac17.js";import{D as F,a as f,T as v,p as E,C as T}from"./code-f8e23b11.js";import{P as C}from"./Paragraph-3448cd8e.js";import"./EmptyOption-a0a97b87.js";import"./Value-53f54136.js";import{O as I}from"./Option-70feb815.js";import{R as w}from"./index-76a317ef.js";import{R as c,C as i}from"./index-127f0a39.js";import{h as j}from"./hljs-74a5c6d1.js";import"./index-b9bc807d.js";import"./index-1c667118.js";import"./index-4677dd28.js";import"./index-6c8647a0.js";import"./index-c23a4a56.js";import"./index-4dd567cf.js";import"./countUp.min-350bca8d.js";import"./index-9079dd17.js";import"./index-2d5de52b.js";import"./Option-b2064aaf.js";import"./index-e15ddd1b.js";import"./Recommend-896a7f0e.js";import"./Item-9aa8d285.js";import"./index-ac540d5b.js";import"./index-fcdb4629.js";import"./index-55f40996.js";import"./ListItem-5ff4446f.js";import"./index-fc6b2245.js";import"./index-03a710f2.js";import"./index-0f2ca1c5.js";import"./index-d979f2ca.js";import"./index-0d1b63ee.js";import"./index-ef2935ae.js";import"./Navigations-4da64b19.js";import"./PageItem-9e5be538.js";import"./index-5bca1396.js";import"./index-24c40b86.js";import"./index-719e07c0.js";import"./index-0fcf3f59.js";import"./index-5c76b353.js";import"./index-6e7171b5.js";import"./index-a7132a78.js";import"./index-91040233.js";import"./input-62bed655.js";import"./index-840927f9.js";import"./index-8ba692c8.js";import"./index-7fa91870.js";import"./Collapase-29602e2e.js";import"./index-fc3be154.js";import"./_commonjsHelpers-725317a4.js";import"./index-5a242dd5.js";import"./index-93f1e655.js";import"./useSlots-be94a5a8.js";import"./index-13c54061.js";const q=`const form1 = useForm({
    data: {
        u: '',
        p: ''
    },
    validation: {
    },
    message: {
    }
});

<Form form={form1} inline>
    <FormItem name='u' label="用户名：">
        <Input type='text'/>
    </FormItem>
    <FormItem name='p' label="密码：">
        <Input type='password'/>
    </FormItem>
</Form>`,$=`const form = useForm({
    data: {
        count: 10,
        check: true,
        fruit: [],
        sex: 1,
        switch: true,
        age: 20,
        city: '1',
        cascader: [],
        time: '',
        timeRange: '',
        date: '',
        dateRange: '',
        month: '',
        monthRange: '',
        dateTime: '',
        dateTimeRange: '',
        slider: 0,
        tree: []
    },
    validation: {
        count: {
            min: 5,
            max: 15,
            required: true,
        },
        city: {
            required: true
        }
    },
    message: {
        count: {
            max: '最大值不能超过15',
            required: '请输入值'
        },
        city: {
            required: '请选择地市'
        }
    }
});

const data3 = [];
for (let i = 0; i < 3; i++) {
    const c = [];
    for (let j = 0; j < 3; j++) {
        c.push({id: \`\${i + 1}_\${j + 1}\`, title: \`node_\${i + 1}_\${j + 1}\`});
    }
    data3.push({id: \`\${i + 1}\`, title: \`node_\${i + 1}\`, children: c});
}

const cascaderData = [
    {
        value: 'beijing', title: '北京', 
        children: [
            {value: 'gugong', title: '故宫'},
            {value: 'tiantan', title: '天坛'},
            {value: 'wangfujing', title: '王府井'},
        ]
    },
    {
        value: 'jiangsu',
        title: '江苏',
        children: [
            {
                value: 'nanjing',
                title: '南京',
                children: [
                    {
                        value: 'fuzimiao',
                        title: '夫子庙',
                    }
                ]
            },
            {
                value: 'suzhou',
                title: '苏州',
                children: [
                    {
                        value: 'zhuozhengyuan',
                        title: '拙政园',
                        disabled: true
                    },
                    {
                        value: 'shizilin',
                        title: '狮子林',
                    }
                ]
            }
        ],
}]

<Form form={form} labelWidth={100} onChange={(name: string, v: any) => {
    console.log(name, v);
    console.log(form.getFormData());
}}>
    <Row>
        <Col grid={0.33}>
            <FormItem label='是否选择:' name='check'>
                <Space dir="h" align="baseline">
                    <Checkbox label='是否选择'/>
                    <Button onClick={() => {
                        form.check = !form.check;
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='水果:' name='fruit'>
                <Space dir="h" align="baseline">
                    <Input type='checkbox' data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]}/>
                    <Button onClick={() => {
                        form.fruit = ['2'];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='性别:' name='sex'>
                <Space dir="h" align="baseline">
                    <Input type='radio' data={[{label: '男', value: 1}, {label: '女', value: 2}]}/>
                    <Button onClick={() => {
                        form.sex = 2;
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
    </Row>
    
    <Row>
        <Col grid={0.33}>
            <FormItem label='开关：' name='switch'>
                <Space dir="h" align="center">
                    <Input type='switch' />
                    <Button onClick={() => {
                        form.switch = !form.switch;
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='阿萨德：' name='count'>
                <Space dir="h">
                    <Input prefix='￥' suffix='元' use:aaa={['count']}/>
                    <Button onClick={() => {
                        form.count = parseInt(form.count) + 1;
                        console.log(form.getFormData());
                    }}>Add</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='年龄：' name='age'>
                <Space dir="h" align="center">
                    <Input type='spinner' />
                    <Button onClick={() => {
                        form.age = form.age + 1;
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
    </Row>
    
    <Row>
        <Col grid={0.33}>
            <FormItem label='地市：' name='city'>
                <Space dir="h" align="center">
                    <Input type='select' data={cityData} clearable>
                        <Option label="北京" value="1"></Option>
                        <Option label="上海" value="2"></Option>
                        <Option label="深圳" value="3"></Option>
                    </Input>
                    <Button onClick={() => {
                        form.city = '2';
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='景点：' name='cascader'>
                <Space dir="h" align="center">
                    <Input type='cascader' data={cascaderData} />
                    <Button onClick={() => {
                        form.cascader = ['beijing','gugong'];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='时间：' name='time'>
                <Space dir="h" align="center">
                    <Input type='time' />
                    <Button onClick={() => {
                        form.time = '10:10:10';
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
    </Row>
    <Row>
        <Col grid={0.33}>
            <FormItem label='时间区间：' name='timeRange'>
                <Space dir="h" align="center">
                    <Input type='timeRange' />
                    <Button onClick={() => {
                        form.timeRange = ['10:10:10', '12:12:00'];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='日期：' name='date'>
                <Space dir="h" align="center">
                    <Input type='date' />
                    <Button onClick={() => {
                        form.date = '2023-04-05';
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='日期范围：' name='dateRange'>
                <Space dir="h" align="center">
                    <Input type='dateRange' />
                    <Button onClick={() => {
                        form.dateRange = ['2023-04-05', '2023-04-08'];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
    </Row>
    
    <Row>
        <Col grid={0.33}>
            <FormItem label='月份：' name='month'>
                <Space dir="h" align="center">
                    <Input type='month' />
                    <Button onClick={() => {
                        form.month = '2023-04';
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='月份范围：' name='monthRange'>
                <Space dir="h" align="center">
                    <Input type='monthRange' />
                    <Button onClick={() => {
                        form.monthRange = [dayjs('2023-04').toDate(), dayjs('2023-08').toDate()];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='日期时间：' name='dateTime'>
                <Space dir="h" align="center">
                    <Input type='dateTime' />
                    <Button onClick={() => {
                        form.dateTime = dayjs('2023-04-05 10:10:10').toDate();
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
    </Row>
    
    <Row>
        <Col grid={0.33}>
            <FormItem label='日期时间范围：' name='dateTimeRange'>
                <Space dir="h" align="center">
                    <Input type='dateTimeRange' />
                    <Button onClick={() => {
                        form.dateTimeRange = [dayjs('2023-04-05 10:10:10').toDate(), dayjs('2023-04-08 12:10:10').toDate()];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='进度：' name='slider'>
                <Space dir="h" align="center">
                    <Input type='slider' />
                    <Button onClick={() => {
                        form.slider = 30;
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
        <Col grid={0.33}>
            <FormItem label='地点：' name='tree'>
                <Space dir="h" align="center">
                    <Input type='treeSelect' data={data3} multi/>
                    <Button onClick={() => {
                        form.tree = ['2_1'];
                        console.log(form.getFormData());
                    }}>改变</Button>
                </Space>
            </FormItem>
        </Col>
    </Row>
    
    <Space dir="h">
        <Button onClick={() => {
            form.setFormData({
                count: '',
                check: true,
                fruit: [],
                sex: 1,
                switch: true,
                age: 20,
                city: '1',
                cascader: [],
                time: '',
                timeRange: '',
                date: '',
                dateRange: '',
                month: '',
                monthRange: '',
                dateTime: '',
                dateTimeRange: '',
                slider: 0,
                tree: []
            });
            form.clearValidates();
        }}>重置</Button>

        <Button onClick={() => {
            form.isValid();
        }}>校验</Button>
    </Space>
</Form>`,z=`const form2 = useForm({
    data: {
        select: 1,
        value: ''
    },
    validation: {
    },
    message: {
        value: {
            required: '请填写信息',
            email: '请填写正确的邮箱地址',
            mobile: '请填写正确的手机号码'
        }
    }
});

<Form form={form2}>
    <FormItem name='select' label="选项：">
        <RadioGroup data={[{label: '手机号验证', value: 1}, {label: '邮箱验证', value: 2}]}/>
    </FormItem>
    <FormItem name='value' label="校验值：" rules={form2.select === 1 ? {required: true, mobile: true} : {required: true, email: true}}>
        <Input type='text'/>
    </FormItem>
</Form>`,O=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"labelWidth",desc:"label宽度",type:"number",default:""},{name:"form",desc:"表单绑定",type:"Object",default:""},{name:"inline",desc:"内联模式",type:"boolean",default:""},{name:"autocomplete",desc:"自动填充选项",type:"string",default:""},{name:"errorTransfer",desc:"使用popover显示错误提示",type:"boolean",default:"false"},{name:"errorAlign",desc:"设置popover的显示位置",type:"string",default:"right"},{name:"onChange",desc:"表单项改变事件",type:"Function",default:""}],P=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"inline",desc:"内联模式",type:"boolean",default:""},{name:"labelStyle",desc:"label样式",type:"Object",default:""},{name:"label",desc:"表单项文本",type:"string",default:""},{name:"name",desc:"表单项名称",type:"string",default:""},{name:"errorTransfer",desc:"使用popover显示错误提示",type:"boolean",default:"false"},{name:"errorAlign",desc:"设置popover的显示位置",type:"string",default:"right"}],V=[{id:"form_base",text:"基础用法"},{id:"form_fields",text:"支持的表单项"},{id:"form_dynamic_rule",text:"动态校验"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],b={form_fields:$,form_dynamic_rule:z,form_base:q},W=R("<br>"),G=R('<div class="sys-ctx-main-left">');function Ne(){const k=D({data:{u:"",p:""},validation:{},message:{}}),t=D({data:{count:10,check:!0,fruit:[],sex:1,switch:!0,age:20,city:"1",cascader:[],time:"",timeRange:"",date:"",dateRange:"",month:"",monthRange:"",dateTime:"",dateTimeRange:"",slider:0,tree:[],color:""},validation:{count:{min:5,max:15,required:!0},city:{required:!0}},message:{count:{max:"最大值不能超过15",required:"请输入值"},city:{required:"请选择地市"}}}),y=D({data:{select:1,value:""},validation:{},message:{value:{required:"请填写信息",email:"请填写正确的邮箱地址",mobile:"请填写正确的手机号码"}}}),B=[];for(let u=0;u<3;u++){const g=[];for(let d=0;d<3;d++)g.push({id:`${u+1}_${d+1}`,title:`node_${u+1}_${d+1}`});B.push({id:`${u+1}`,title:`node_${u+1}`,children:g})}const A=[{value:"beijing",title:"北京",children:[{value:"gugong",title:"故宫"},{value:"tiantan",title:"天坛"},{value:"wangfujing",title:"王府井"}]},{value:"jiangsu",title:"江苏",children:[{value:"nanjing",title:"南京",children:[{value:"fuzimiao",title:"夫子庙"}]},{value:"suzhou",title:"苏州",children:[{value:"zhuozhengyuan",title:"拙政园",disabled:!0},{value:"shizilin",title:"狮子林"}]}]}];return[(()=>{const u=G();return S(j,u,()=>""),x(u,e(r,{dir:"v",size:32,get children(){return[e(p,{heading:2,children:"Form 表单"}),e(r,{id:"form_base",dir:"v",get children(){return e(h,{bordered:!0,get children(){return[e(s,{form:k,inline:!0,get children(){return[e(n,{name:"u",label:"用户名：",get children(){return e(o,{type:"text"})}}),e(n,{name:"p",label:"密码：",get children(){return e(o,{type:"password"})}})]}}),e(F,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(C,{type:"secondary",spacing:"extended",children:"设置属性 inline，表单元素可以水平排列。"}),e(f,{get data(){return b.form_base}})]}})}}),e(r,{id:"form_dynamic_rule",dir:"v",get children(){return e(h,{bordered:!0,get children(){return[e(s,{form:y,get children(){return[e(n,{name:"select",label:"选项：",get children(){return e(w,{data:[{label:"手机号验证",value:1},{label:"邮箱验证",value:2}]})}}),e(n,{name:"value",label:"校验值：",get rules(){return y.select===1?{required:!0,mobile:!0}:{required:!0,email:!0}},get children(){return e(o,{type:"text"})}})]}}),e(F,{align:"left",get children(){return e(a,{type:"primary",children:"动态校验"})}}),e(C,{type:"secondary",spacing:"extended",children:"FormItem 组件支持动态设置 rules ,可根据不同条件对数据进行校验"}),e(f,{get data(){return b.form_dynamic_rule}})]}})}}),e(r,{id:"form_error_transfer",dir:"v",get children(){return e(h,{bordered:!0,get children(){return[e(s,{form:y,errorTransfer:!0,errorAlign:"right",get children(){return e(n,{name:"value",label:"校验值：",rules:{required:!0,mobile:!0},get children(){return e(o,{type:"text"})}})}}),e(F,{align:"left",get children(){return e(a,{type:"primary",children:"错误提示位置"})}}),e(C,{type:"secondary",spacing:"extended",children:"Form 和 FormItem 组件支持指定位置显示错误信息, 设置errorTransfer，将使用popover显示错误信息 errorAlign可以设置错误提示的位置，默认是right"}),e(f,{get data(){return b.form_dynamic_rule}})]}})}}),e(r,{id:"form_fields",dir:"v",get children(){return e(h,{bordered:!0,get children(){return[e(s,{form:t,labelWidth:100,onChange:(g,d)=>{console.log(g,d),console.log(t.getFormData())},get children(){return[e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"是否选择:",name:"check",get children(){return e(r,{dir:"h",align:"baseline",get children(){return[e(_,{label:"是否选择"}),e(l,{onClick:()=>{t.check=!t.check,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"水果:",name:"fruit",get children(){return e(r,{dir:"h",align:"baseline",get children(){return[e(o,{type:"checkbox",data:[{label:"苹果",value:"1"},{label:"桃子",value:"2"}]}),e(l,{onClick:()=>{t.fruit=["2"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"性别:",name:"sex",get children(){return e(r,{dir:"h",align:"baseline",get children(){return[e(o,{type:"radio",data:[{label:"男",value:1},{label:"女",value:2}]}),e(l,{onClick:()=>{t.sex=2,console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"开关：",name:"switch",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"switch"}),e(l,{onClick:()=>{t.switch=!t.switch,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"阿萨德：",name:"count",get children(){return e(r,{dir:"h",get children(){return[e(o,{prefix:"￥",suffix:"元","use:aaa":["count"]}),e(l,{onClick:()=>{t.count=parseInt(t.count)+1,console.log(t.getFormData())},children:"Add"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"年龄：",name:"age",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"spinner"}),e(l,{onClick:()=>{t.age=t.age+1,console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"地市：",name:"city",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"select",clearable:!0,get children(){return[e(I,{label:"北京",value:"1"}),e(I,{label:"上海",value:"2"}),e(I,{label:"深圳",value:"3"})]}}),e(l,{onClick:()=>{t.city="2",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"景点：",name:"cascader",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"cascader",data:A}),e(l,{onClick:()=>{t.cascader=["beijing","gugong"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"时间：",name:"time",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"time"}),e(l,{onClick:()=>{t.time="10:10:10",console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"时间区间：",name:"timeRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"timeRange"}),e(l,{onClick:()=>{t.timeRange=["10:10:10","12:12:00"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"日期：",name:"date",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"date"}),e(l,{onClick:()=>{t.date="2023-04-05",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"日期范围：",name:"dateRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"dateRange"}),e(l,{onClick:()=>{t.dateRange=["2023-04-05","2023-04-08"],console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"月份：",name:"month",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"month"}),e(l,{onClick:()=>{t.month="2023-04",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"月份范围：",name:"monthRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"monthRange"}),e(l,{onClick:()=>{t.monthRange=[m("2023-04").toDate(),m("2023-08").toDate()],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"日期时间：",name:"dateTime",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"dateTime"}),e(l,{onClick:()=>{t.dateTime=m("2023-04-05 10:10:10").toDate(),console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"日期时间范围：",name:"dateTimeRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"dateTimeRange"}),e(l,{onClick:()=>{t.dateTimeRange=[m("2023-04-05 10:10:10").toDate(),m("2023-04-08 12:10:10").toDate()],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"进度：",name:"slider",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"slider"}),e(l,{onClick:()=>{t.slider=30,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"地点：",name:"tree",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"treeSelect",data:B,multi:!0}),e(l,{onClick:()=>{t.tree=["2_1"],console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return e(i,{grid:.33,get children(){return e(n,{label:"颜色：",name:"color",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"color"}),e(l,{onClick:()=>{t.color="",console.log(t.getFormData())},children:"改变"})]}})}})}})}}),e(r,{dir:"h",get children(){return[e(l,{onClick:()=>{t.setFormData({count:"",check:!0,fruit:[],sex:1,switch:!0,age:20,city:"1",cascader:[],time:"",timeRange:"",date:"",dateRange:"",month:"",monthRange:"",dateTime:"",dateTimeRange:"",slider:0,tree:[],color:""}),t.clearValidates()},children:"重置"}),e(l,{onClick:()=>{t.isValid()},children:"校验"})]}})]}}),e(F,{align:"left",get children(){return e(a,{type:"primary",children:"支持的表单项"})}}),e(C,{type:"secondary",spacing:"extended",get children(){return["form 支持 ",e(a,{code:!0,children:"Input"}),"、",e(a,{code:!0,children:"Checkbox"}),"、",e(a,{code:!0,children:"Radio"}),"、",e(a,{code:!0,children:"Select"}),"、",e(a,{code:!0,children:"Search"}),"、",e(a,{code:!0,children:"Textarea"}),"、",e(a,{code:!0,children:"AutoComplete"}),"、",e(a,{code:!0,children:"Cascader"}),"、",e(a,{code:!0,children:"Datepicker"}),"、",e(a,{code:!0,children:"Timepicker"}),"、",e(a,{code:!0,children:"Progress"}),"、",e(a,{code:!0,children:"Rate"}),"、",e(a,{code:!0,children:"Slider"}),"、",e(a,{code:!0,children:"Spinner"}),"、",e(a,{code:!0,children:"Switch"}),"、",e(a,{code:!0,children:"Transfer"}),"、",e(a,{code:!0,children:"TreeSelect"}),"、",e(a,{code:!0,children:"Upload"}),W(),"form绑定数据使用useForm创建对象并传递给From， useForm 包含 data validation 和 messages 参数，data 中的数据字段和FormItem的name对应"]}}),e(f,{get data(){return b.form_fields}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(p,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"Form Props"}),e(v,{columns:E,data:O,border:!0,size:"small"})]}}),e(r,{id:"comp_item_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"FormItem Props"}),e(v,{columns:E,data:P,border:!0,size:"small"})]}})]}})]}})),u})(),e(T,{data:V})]}export{Ne as default};
