import{c as q,u as O,i as z,a as e,S as a,T as l,B as o,I as $,t as I}from"./index-5e251d81.js";import{F as s,a as r}from"./createField-7b35bf70.js";import{u as h}from"./useForm-1bdcf7e5.js";import{I as n}from"./index-992cf3bd.js";import{C as P}from"./index-98f2941d.js";import{d as p}from"./dayjs.min-ea173184.js";import{T as D}from"./Title-52a6bda3.js";import{C as F}from"./index-dff86af7.js";import{D as b,a as y,m as k,T as A,p as R,C as M}from"./code-c71fa51e.js";import{P as f}from"./Paragraph-a25cb645.js";import{S as G}from"./index-c1fbac61.js";import{R as x}from"./index-04bec966.js";import{R as m,C as i}from"./index-34abc17d.js";import{h as W}from"./hljs-74a5c6d1.js";import"./index-c72fc3e9.js";import"./index-b8f19b5e.js";import"./index-5e5c6671.js";import"./index-7cc647cb.js";import"./index-cee92ff6.js";import"./index-ceefaa5c.js";import"./countUp.min-350bca8d.js";import"./index-97f12a81.js";import"./index-46f5a904.js";import"./Option-72426df3.js";import"./Value-bf1a2078.js";import"./index-50b8f727.js";import{C as H}from"./index-2a737952.js";import"./Recommend-9274b6f4.js";import"./Item-eac954af.js";import"./index-7e2e5a37.js";import"./index-abcb3dc5.js";import"./index-bfe6ab9e.js";import"./ListItem-09e456b7.js";import"./index-c458963f.js";import"./index-8857f970.js";import"./index-ecc85791.js";import"./index-b1079608.js";import{M as V}from"./index-906e8388.js";import"./index-e5587131.js";import"./Navigations-46adbf5c.js";import"./PageItem-841382e7.js";import"./index-e7107b2c.js";import"./index-bef28995.js";import"./index-a61b21b1.js";import"./index-da424b8d.js";import"./index-77c05950.js";import"./index-dd0309f3.js";import"./index-e0a909f8.js";import{O as d}from"./Option-70feb815.js";import"./input-0366c6fe.js";import"./index-b603bca5.js";import"./index-111f9a6c.js";import"./index-2134e8e2.js";import"./Collapase-bfad3ffa.js";import"./index-11ac00f5.js";import"./_commonjsHelpers-725317a4.js";import"./EmptyOption-a97df827.js";import"./createGridOffset-dd5a9514.js";import"./useSlots-e8273d0f.js";import"./index-66875e27.js";import"./index-6e93bfa2.js";const L=`const form1 = useForm({
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
</Form>`,N=`const form = useForm({
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
             form.resetFields();
        }}>重置</Button>

        <Button onClick={() => {
            form.isValid();
        }}>校验</Button>
    </Space>
</Form>`,U=`const form2 = useForm({
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
</Form>`,J=`const form3 = useForm({
    data: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        desc: ''
    },
    validation: {
        name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
    }
})


<Form form={form3} labelWidth={80}>
    <FormItem name='name' label="Name">
        <Input type='text' placeholder="Enter your name"/>
    </FormItem>
    <FormItem name='mail' label="E-mail">
        <Input type='text' placeholder="Enter your e-mail"/>
    </FormItem>
    <FormItem name='city' label="City">
        <Select placeholder="Select your city">
            <Option label="Beijing" value="beijing"></Option>
            <Option label="Shanghai" value="shanghai"></Option>
            <Option label="Shenzhen" value="shenzhen"></Option>
        </Select>
    </FormItem>
    <FormItem label="Gender" name="gender">
        <RadioGroup data={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}>
        </RadioGroup>
    </FormItem>
    <FormItem label="Hobby" name="interest">
        <CheckboxGroup data={[
            {label: 'Eat', value: 'Eat'},
            {label: 'Sleep', value: 'Sleep'},
            {label: 'Run', value: 'Run'},
            {label: 'Movie', value: 'Movie'},
        ]}>
        </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" name="desc">
        <Input type="textarea" autoHeight rows={2} placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
        <Button type="primary" onClick={async () => {
            const valid = await form3.validate();
            if (valid) {
                message.success('Success!');
            } else {
                message.error('Fail!');
            }
        }}>Submit</Button>
        <Button onClick={() => {
            form3.setFormData({
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                desc: ''
            });
            form3.clearFieldsValidate();
        }} style="margin-left: 8px">Reset</Button>
    </FormItem>
</Form>
`,K=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"labelWidth",desc:"label宽度",type:"number",default:""},{name:"form",desc:"表单绑定",type:"Object",default:""},{name:"inline",desc:"内联模式",type:"boolean",default:""},{name:"autocomplete",desc:"自动填充选项",type:"string",default:""},{name:"errorTransfer",desc:"使用popover显示错误提示",type:"boolean",default:"false"},{name:"errorAlign",desc:"设置popover的显示位置",type:"string",default:"right"},{name:"onChange",desc:"表单项改变事件",type:"Function",default:""},{name:"resetFields",desc:"重置表单以及校验",type:"Function",default:""}],Q=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"inline",desc:"内联模式",type:"boolean",default:""},{name:"labelStyle",desc:"label样式",type:"Object",default:""},{name:"label",desc:"表单项文本",type:"string",default:""},{name:"name",desc:"表单项名称",type:"string",default:""},{name:"errorTransfer",desc:"使用popover显示错误提示",type:"boolean",default:"false"},{name:"errorAlign",desc:"设置popover的显示位置",type:"string",default:"right"}],X=[{id:"form_base",text:"基础用法"},{id:"form_dynamic_rule",text:"动态校验"},{id:"form_error_transfer",text:"错误提示位置"},{id:"form_async_validate",text:"async_validator"},{id:"form_fields",text:"支持的表单项"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],C={form_fields:N,form_dynamic_rule:U,form_async_validate:J,form_base:L},Y=I('<a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator'),Z=I("<br>"),ee=I('<div class="sys-ctx-main-left">');function ut(){const _=h({data:{u:"",p:""},validation:{},message:{}}),t=h({data:{count:10,check:!0,fruit:[],sex:1,switch:!0,age:20,city:"1",cascader:[],time:"",timeRange:"",date:"",dateRange:"",month:"",monthRange:"",dateTime:"",dateTimeRange:"",slider:0,tree:[],color:""},validation:{count:{min:5,max:15,required:!0},city:{required:!0}},message:{count:{max:"最大值不能超过15",required:"请输入值"},city:{required:"请选择地市"}}}),B=h({data:{select:1,value:""},validation:{},message:{value:{required:"请填写信息",email:"请填写正确的邮箱地址",mobile:"请填写正确的手机号码"}}}),w=h({data:{value:""},validation:{},message:{value:{required:"请填写信息",email:"请填写正确的邮箱地址",mobile:"请填写正确的手机号码"}}}),E=[];for(let u=0;u<3;u++){const g=[];for(let c=0;c<3;c++)g.push({id:`${u+1}_${c+1}`,title:`node_${u+1}_${c+1}`});E.push({id:`${u+1}`,title:`node_${u+1}`,children:g})}const j=[{value:"beijing",title:"北京",children:[{value:"gugong",title:"故宫"},{value:"tiantan",title:"天坛"},{value:"wangfujing",title:"王府井"}]},{value:"jiangsu",title:"江苏",children:[{value:"nanjing",title:"南京",children:[{value:"fuzimiao",title:"夫子庙"}]},{value:"suzhou",title:"苏州",children:[{value:"zhuozhengyuan",title:"拙政园",disabled:!0},{value:"shizilin",title:"狮子林"}]}]}],v=h({data:{name:"",mail:"",city:"",gender:"",interest:[],desc:""},validation:{name:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],city:[{required:!0,message:"Please select the city",trigger:"change"}],gender:[{required:!0,message:"Please select gender",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"Choose at least one hobby",trigger:"change"},{type:"array",max:2,message:"Choose two hobbies at best",trigger:"change"}],desc:[{required:!0,message:"Please enter a personal introduction",trigger:"blur"},{type:"string",min:20,message:"Introduce no less than 20 words",trigger:"blur"}]}}),[T,S]=q(!1);return[(()=>{const u=ee();return O(W,u,()=>""),z(u,e(a,{dir:"v",size:32,get children(){return[e(D,{heading:2,children:"Form 表单"}),e(a,{id:"form_base",dir:"v",get children(){return e(F,{bordered:!0,get children(){return[e(s,{form:_,inline:!0,get children(){return[e(r,{name:"u",label:"用户名：",get children(){return e(n,{type:"text"})}}),e(r,{name:"p",label:"密码：",get children(){return e(n,{type:"password"})}})]}}),e(b,{align:"left",get children(){return e(l,{type:"primary",children:"基础用法"})}}),e(f,{type:"secondary",spacing:"extended",children:"设置属性 inline，表单元素可以水平排列。"}),e(y,{get data(){return C.form_base}})]}})}}),e(a,{id:"form_dynamic_rule",dir:"v",get children(){return e(F,{bordered:!0,get children(){return[e(s,{form:B,get children(){return[e(r,{name:"select",label:"选项：",get children(){return e(x,{data:[{label:"手机号验证",value:1},{label:"邮箱验证",value:2}]})}}),e(r,{name:"value",label:"校验值：",get rules(){return B.select===1?{required:!0,mobile:!0}:{required:!0,email:!0}},get children(){return e(n,{type:"text"})}})]}}),e(b,{align:"left",get children(){return e(l,{type:"primary",children:"动态校验"})}}),e(f,{type:"secondary",spacing:"extended",children:"FormItem 组件支持动态设置 rules ,可根据不同条件对数据进行校验, 默认使用内置校验方式，支持自定义校验规则。"}),e(y,{get data(){return C.form_dynamic_rule}})]}})}}),e(a,{id:"form_error_transfer",dir:"v",get children(){return e(F,{bordered:!0,get children(){return[e(V,{title:"新增",visible:[T,S],get children(){return e(s,{form:w,errorTransfer:!0,errorAlign:"right",get children(){return e(r,{name:"value",label:"校验值：",rules:{required:!0,mobile:!0},get children(){return e(n,{type:"text"})}})}})}}),e(o,{type:"primary",onClick:()=>{S(!0)},children:"打开"}),e(b,{align:"left",get children(){return e(l,{type:"primary",children:"错误提示位置"})}}),e(f,{type:"secondary",spacing:"extended",children:"Form 和 FormItem 组件支持指定位置显示错误信息, 设置errorTransfer，将使用popover显示错误信息 errorAlign可以设置错误提示的位置，默认是right"}),e(y,{get data(){return C.form_dynamic_rule}})]}})}}),e(a,{id:"form_async_validate",dir:"v",get children(){return e(F,{bordered:!0,get children(){return[e(s,{form:v,labelWidth:80,get children(){return[e(r,{name:"name",label:"Name",get children(){return e(n,{type:"text",placeholder:"Enter your name"})}}),e(r,{name:"mail",label:"E-mail",get children(){return e(n,{type:"text",placeholder:"Enter your e-mail"})}}),e(r,{name:"city",label:"City",get children(){return e(G,{placeholder:"Select your city",get children(){return[e(d,{label:"Beijing",value:"beijing"}),e(d,{label:"Shanghai",value:"shanghai"}),e(d,{label:"Shenzhen",value:"shenzhen"})]}})}}),e(r,{label:"Gender",name:"gender",get children(){return e(x,{data:[{label:"Male",value:"male"},{label:"Female",value:"female"}]})}}),e(r,{label:"Hobby",name:"interest",get children(){return e(H,{data:[{label:"Eat",value:"Eat"},{label:"Sleep",value:"Sleep"},{label:"Run",value:"Run"},{label:"Movie",value:"Movie"}]})}}),e(r,{label:"Desc",name:"desc",get children(){return e(n,{type:"textarea",autoHeight:!0,rows:2,maxLength:100,wordCount:!0,placeholder:"Enter something..."})}}),e(r,{name:"btns",get children(){return[e(o,{type:"primary",onClick:async()=>{await v.validate()?k.success("Success!"):k.error("Fail!")},children:"Submit"}),e(o,{onClick:()=>{v.setFormData({name:"",mail:"",city:"",gender:"",interest:[],desc:""}),v.resetFieldsValidate()},style:{"margin-left":"8px"},children:"Reset"})]}})]}}),e(b,{align:"left",get children(){return e(l,{type:"primary",children:"async-validator"})}}),e(f,{type:"secondary",spacing:"extended",get children(){return["Form 组件支持 ",e(l,{type:"primary",get children(){return[e($,{name:"github"})," ",Y()]}})," 方式实现的数据验证，给在 useForm 中设置的 validation 各属性校验规则为数组格式。"]}}),e(y,{get data(){return C.form_async_validate}})]}})}}),e(a,{id:"form_fields",dir:"v",get children(){return e(F,{bordered:!0,get children(){return[e(s,{form:t,labelWidth:100,onChange:(g,c)=>{console.log(g,c),console.log(t.getFormData())},get children(){return[e(m,{get children(){return[e(i,{grid:.33,get children(){return e(r,{label:"是否选择:",name:"check",get children(){return e(a,{dir:"h",align:"baseline",get children(){return[e(P,{label:"是否选择"}),e(o,{onClick:()=>{t.check=!t.check,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"水果:",name:"fruit",get children(){return e(a,{dir:"h",align:"baseline",get children(){return[e(n,{type:"checkbox",data:[{label:"苹果",value:"1"},{label:"桃子",value:"2"}]}),e(o,{onClick:()=>{t.fruit=["2"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"性别:",name:"sex",get children(){return e(a,{dir:"h",align:"baseline",get children(){return[e(n,{type:"radio",data:[{label:"男",value:1},{label:"女",value:2}]}),e(o,{onClick:()=>{t.sex=2,console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(m,{get children(){return[e(i,{grid:.33,get children(){return e(r,{label:"开关：",name:"switch",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"switch"}),e(o,{onClick:()=>{t.switch=!t.switch,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"阿萨德：",name:"count",get children(){return e(a,{dir:"h",get children(){return[e(n,{prefix:"￥",suffix:"元"}),e(o,{onClick:()=>{t.count=t.count+1,console.log(t.getFormData())},children:"Add"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"年龄：",name:"age",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"spinner"}),e(o,{onClick:()=>{t.age=t.age+1,console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(m,{get children(){return[e(i,{grid:.33,get children(){return e(r,{label:"地市：",name:"city",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"select",clearable:!0,get children(){return[e(d,{label:"北京",value:"1"}),e(d,{label:"上海",value:"2"}),e(d,{label:"深圳",value:"3"})]}}),e(o,{onClick:()=>{t.city="2",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"景点：",name:"cascader",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"cascader",data:j}),e(o,{onClick:()=>{t.cascader=["beijing","gugong"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"时间：",name:"time",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"time"}),e(o,{onClick:()=>{t.time="10:10:10",console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(m,{get children(){return[e(i,{grid:.33,get children(){return e(r,{label:"时间区间：",name:"timeRange",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"timeRange"}),e(o,{onClick:()=>{t.timeRange=["10:10:10","12:12:00"],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"日期：",name:"date",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"date"}),e(o,{onClick:()=>{t.date="2023-04-05",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"日期范围：",name:"dateRange",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"dateRange"}),e(o,{onClick:()=>{t.dateRange=["2023-04-05","2023-04-08"],console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(m,{get children(){return[e(i,{grid:.33,get children(){return e(r,{label:"月份：",name:"month",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"month"}),e(o,{onClick:()=>{t.month="2023-04",console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"月份范围：",name:"monthRange",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"monthRange"}),e(o,{onClick:()=>{t.monthRange=[p("2023-04").toDate(),p("2023-08").toDate()],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"日期时间：",name:"dateTime",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"dateTime"}),e(o,{onClick:()=>{t.dateTime=p("2023-04-05 10:10:10").toDate(),console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(m,{get children(){return[e(i,{grid:.33,get children(){return e(r,{label:"日期时间范围：",name:"dateTimeRange",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"dateTimeRange"}),e(o,{onClick:()=>{t.dateTimeRange=[p("2023-04-05 10:10:10").toDate(),p("2023-04-08 12:10:10").toDate()],console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"进度：",name:"slider",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"slider"}),e(o,{onClick:()=>{t.slider=30,console.log(t.getFormData())},children:"改变"})]}})}})}}),e(i,{grid:.33,get children(){return e(r,{label:"地点：",name:"tree",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"treeSelect",data:E,multi:!0}),e(o,{onClick:()=>{t.tree=["2_1"],console.log(t.getFormData())},children:"改变"})]}})}})}})]}}),e(m,{get children(){return e(i,{grid:.33,get children(){return e(r,{label:"颜色：",name:"color",get children(){return e(a,{dir:"h",align:"center",get children(){return[e(n,{type:"color"}),e(o,{onClick:()=>{t.color="",console.log(t.getFormData())},children:"改变"})]}})}})}})}}),e(a,{dir:"h",get children(){return[e(o,{onClick:()=>{t.resetFields()},children:"重置"}),e(o,{onClick:()=>{t.isValid()},children:"校验"})]}})]}}),e(b,{align:"left",get children(){return e(l,{type:"primary",children:"支持的表单项"})}}),e(f,{type:"secondary",spacing:"extended",get children(){return["form 支持 ",e(l,{code:!0,children:"Input"}),"、",e(l,{code:!0,children:"Checkbox"}),"、",e(l,{code:!0,children:"Radio"}),"、",e(l,{code:!0,children:"Select"}),"、",e(l,{code:!0,children:"Search"}),"、",e(l,{code:!0,children:"Textarea"}),"、",e(l,{code:!0,children:"AutoComplete"}),"、",e(l,{code:!0,children:"Cascader"}),"、",e(l,{code:!0,children:"Datepicker"}),"、",e(l,{code:!0,children:"Timepicker"}),"、",e(l,{code:!0,children:"Progress"}),"、",e(l,{code:!0,children:"Rate"}),"、",e(l,{code:!0,children:"Slider"}),"、",e(l,{code:!0,children:"Spinner"}),"、",e(l,{code:!0,children:"Switch"}),"、",e(l,{code:!0,children:"Transfer"}),"、",e(l,{code:!0,children:"TreeSelect"}),"、",e(l,{code:!0,children:"Upload"}),Z(),"form绑定数据使用useForm创建对象并传递给From， useForm 包含 data validation 和 messages 参数，data 中的数据字段和FormItem的name对应"]}}),e(y,{get data(){return C.form_fields}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(D,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(D,{type:"primary",heading:4,children:"Form Props"}),e(A,{columns:R,data:K,border:!0,size:"small"})]}}),e(a,{id:"comp_item_props",dir:"v",get children(){return[e(D,{type:"primary",heading:4,children:"FormItem Props"}),e(A,{columns:R,data:Q,border:!0,size:"small"})]}})]}})]}})),u})(),e(M,{data:X})]}export{ut as default};
