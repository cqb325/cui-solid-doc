import{u as S,i as E,a as e,S as r,aP as h,aQ as n,T as a,P as s,B as l,aR as m,t as v}from"./index-425dee0a.js";import{u as F}from"./useForm-67a02314.js";import{I as o}from"./index-87292715.js";import{C as x}from"./index-2661cf0d.js";import{T as A}from"./Title-1e253d7e.js";import{C as p}from"./index-e48e332f.js";import{D as f,a as C,C as _}from"./code-22357574.js";import{O as b}from"./Option-70feb815.js";import{R as w}from"./index-3bb550a4.js";import{R as c,C as i}from"./index-11bd8521.js";import{h as T}from"./hljs-a77543c9.js";import"./index-5b476b9c.js";import"./index-44c2cf79.js";import"./index-38bd895b.js";import"./index-c64799c5.js";const j=`const form1 = useForm({
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
</Form>`,q=`const form2 = useForm({
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
</Form>`,z=[{id:"form_base",text:"基础用法"},{id:"form_fields",text:"支持的表单项"},{id:"form_dynamic_rule",text:"动态校验"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],D={form_fields:$,form_dynamic_rule:q,form_base:j},O=v("<br>"),P=v('<div class="sys-ctx-main-left">');function te(){const B=F({data:{u:"",p:""},validation:{},message:{}}),t=F({data:{count:10,check:!0,fruit:[],sex:1,switch:!0,age:20,city:"1",cascader:[],time:"",timeRange:"",date:"",dateRange:"",month:"",monthRange:"",dateTime:"",dateTimeRange:"",slider:0,tree:[],color:""},validation:{count:{min:5,max:15,required:!0},city:{required:!0}},message:{count:{max:"最大值不能超过15",required:"请输入值"},city:{required:"请选择地市"}}}),y=F({data:{select:1,value:""},validation:{},message:{value:{required:"请填写信息",email:"请填写正确的邮箱地址",mobile:"请填写正确的手机号码"}}}),R=[{value:"1",label:"北京"},{value:"2",label:"上海"},{value:"3",label:"杭州"},{value:"4",label:"武汉"},{value:"5",label:"天津"}],I=[];for(let u=0;u<3;u++){const g=[];for(let d=0;d<3;d++)g.push({id:`${u+1}_${d+1}`,title:`node_${u+1}_${d+1}`});I.push({id:`${u+1}`,title:`node_${u+1}`,children:g})}const k=[{value:"beijing",title:"北京",children:[{value:"gugong",title:"故宫"},{value:"tiantan",title:"天坛"},{value:"wangfujing",title:"王府井"}]},{value:"jiangsu",title:"江苏",children:[{value:"nanjing",title:"南京",children:[{value:"fuzimiao",title:"夫子庙"}]},{value:"suzhou",title:"苏州",children:[{value:"zhuozhengyuan",title:"拙政园",disabled:!0},{value:"shizilin",title:"狮子林"}]}]}];return[(()=>{const u=P();return S(T,u,()=>""),E(u,e(r,{dir:"v",size:32,get children(){return[e(A,{heading:2,children:"Form 表单"}),e(r,{id:"form_base",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(h,{form:B,inline:!0,get children(){return[e(n,{name:"u",label:"用户名：",get children(){return e(o,{type:"text"})}}),e(n,{name:"p",label:"密码：",get children(){return e(o,{type:"password"})}})]}}),e(f,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(s,{type:"secondary",spacing:"extended",children:"设置属性 inline，表单元素可以水平排列。"}),e(C,{get data(){return D.form_base}})]}})}}),e(r,{id:"form_dynamic_rule",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(h,{form:y,get children(){return[e(n,{name:"select",label:"选项：",get children(){return e(w,{data:[{label:"手机号验证",value:1},{label:"邮箱验证",value:2}]})}}),e(n,{name:"value",label:"校验值：",get rules(){return y.select===1?{required:!0,mobile:!0}:{required:!0,email:!0}},get children(){return e(o,{type:"text"})}})]}}),e(f,{align:"left",get children(){return e(a,{type:"primary",children:"动态校验"})}}),e(s,{type:"secondary",spacing:"extended",children:"FormItem 组件支持动态设置 rules ,可根据不同条件对数据进行校验"}),e(C,{get data(){return D.form_dynamic_rule}})]}})}}),e(r,{id:"form_fields",dir:"v",get children(){return e(p,{bordered:!0,get children(){return[e(h,{form:t,labelWidth:100,onChange:(g,d)=>{console.log(g,d),console.log(t.getFormData())},get children(){return[e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"是否选择:",name:"check",get children(){return e(r,{dir:"h",align:"baseline",get children(){return[e(x,{label:"是否选择"}),e(l,{onClick:()=>{t.check=!t.check,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"水果:",name:"fruit",get children(){return e(r,{dir:"h",align:"baseline",get children(){return[e(o,{type:"checkbox",data:[{label:"苹果",value:"1"},{label:"桃子",value:"2"}]}),e(l,{onClick:()=>{t.fruit=["2"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"性别:",name:"sex",get children(){return e(r,{dir:"h",align:"baseline",get children(){return[e(o,{type:"radio",data:[{label:"男",value:1},{label:"女",value:2}]}),e(l,{onClick:()=>{t.sex=2,console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"开关：",name:"switch",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"switch"}),e(l,{onClick:()=>{t.switch=!t.switch,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"阿萨德：",name:"count",get children(){return e(r,{dir:"h",get children(){return[e(o,{prefix:"￥",suffix:"元","use:aaa":["count"]}),e(l,{onClick:()=>{t.count=parseInt(t.count)+1,console.log(t.getFormData())},children:"Add"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"年龄：",name:"age",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"spinner"}),e(l,{onClick:()=>{t.age=t.age+1,console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"地市：",name:"city",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"select",data:R,clearable:!0,get children(){return[e(b,{label:"北京",value:"1"}),e(b,{label:"上海",value:"2"}),e(b,{label:"深圳",value:"3"})]}}),e(l,{onClick:()=>{t.city="2",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"景点：",name:"cascader",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"cascader",data:k}),e(l,{onClick:()=>{t.cascader=["beijing","gugong"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"时间：",name:"time",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"time"}),e(l,{onClick:()=>{t.time="10:10:10",console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"时间区间：",name:"timeRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"timeRange"}),e(l,{onClick:()=>{t.timeRange=["10:10:10","12:12:00"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"日期：",name:"date",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"date"}),e(l,{onClick:()=>{t.date="2023-04-05",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"日期范围：",name:"dateRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"dateRange"}),e(l,{onClick:()=>{t.dateRange=["2023-04-05","2023-04-08"],console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"月份：",name:"month",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"month"}),e(l,{onClick:()=>{t.month="2023-04",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"月份范围：",name:"monthRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"monthRange"}),e(l,{onClick:()=>{t.monthRange=[m("2023-04").toDate(),m("2023-08").toDate()],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"日期时间：",name:"dateTime",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"dateTime"}),e(l,{onClick:()=>{t.dateTime=m("2023-04-05 10:10:10").toDate(),console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return[e(i,{grid:.33,get children(){return e(n,{label:"日期时间范围：",name:"dateTimeRange",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"dateTimeRange"}),e(l,{onClick:()=>{t.dateTimeRange=[m("2023-04-05 10:10:10").toDate(),m("2023-04-08 12:10:10").toDate()],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"进度：",name:"slider",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"slider"}),e(l,{onClick:()=>{t.slider=30,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(n,{label:"地点：",name:"tree",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"treeSelect",data:I,multi:!0}),e(l,{onClick:()=>{t.tree=["2_1"],console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(c,{get children(){return e(i,{grid:.33,get children(){return e(n,{label:"颜色：",name:"color",get children(){return e(r,{dir:"h",align:"center",get children(){return[e(o,{type:"color"}),e(l,{onClick:()=>{t.color="",console.log(t.getFormData())},children:"改变"})]}})}})}})}}),e(r,{dir:"h",get children(){return[e(l,{onClick:()=>{t.setFormData({count:"",check:!0,fruit:[],sex:1,switch:!0,age:20,city:"1",cascader:[],time:"",timeRange:"",date:"",dateRange:"",month:"",monthRange:"",dateTime:"",dateTimeRange:"",slider:0,tree:[],color:""}),t.clearValidates()},children:"重置"}),e(l,{onClick:()=>{t.isValid()},children:"校验"})]}})]}}),e(f,{align:"left",get children(){return e(a,{type:"primary",children:"支持的表单项"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["form 支持 ",e(a,{code:!0,children:"Input"}),"、",e(a,{code:!0,children:"Checkbox"}),"、",e(a,{code:!0,children:"Radio"}),"、",e(a,{code:!0,children:"Select"}),"、",e(a,{code:!0,children:"Search"}),"、",e(a,{code:!0,children:"Textarea"}),"、",e(a,{code:!0,children:"AutoComplete"}),"、",e(a,{code:!0,children:"Cascader"}),"、",e(a,{code:!0,children:"Datepicker"}),"、",e(a,{code:!0,children:"Timepicker"}),"、",e(a,{code:!0,children:"Progress"}),"、",e(a,{code:!0,children:"Rate"}),"、",e(a,{code:!0,children:"Slider"}),"、",e(a,{code:!0,children:"Spinner"}),"、",e(a,{code:!0,children:"Switch"}),"、",e(a,{code:!0,children:"Transfer"}),"、",e(a,{code:!0,children:"TreeSelect"}),"、",e(a,{code:!0,children:"Upload"}),O(),"form绑定数据使用useForm创建对象并传递给From， useForm 包含 data validation 和 messages 参数，data 中的数据字段和FormItem的name对应"]}}),e(C,{get data(){return D.form_fields}})]}})}})]}})),u})(),e(_,{data:z})]}export{te as default};
