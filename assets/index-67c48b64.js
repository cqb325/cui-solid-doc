import{c as F,u as S,i as x,a as e,S as a,as as t,T as i,P as n,B as D,d as h,t as A}from"./index-16a86ef8.js";import{T as c}from"./Title-50812969.js";import{C as l}from"./index-7042031b.js";import{D as u,a as r,C as O}from"./code-8b8cc1c0.js";import{p as y,e as B}from"./columns-cd2d5c33.js";import{h as J}from"./hljs-d1d68b29.js";const w=`const data = [
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
    }
]
<Cascader data={data}/>`,N=`const data = [
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
    }
]

<Cascader data={data} disabled/>`,P=`const data = [
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
    }
]

<Space>
    <Cascader data={data} size="small" value={['jiangsu','suzhou','shizilin']} />
    <Cascader data={data} value={['jiangsu','suzhou','shizilin']} />
    <Cascader data={data} size="large" value={['jiangsu','suzhou','shizilin']} />
</Space>`,T=`const data = [
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
    }
]

<Cascader data={data} seperator=">"/>`,k=`const data = [
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
    }
]

<Cascader data={data} trigger='hover' value={['jiangsu','suzhou','shizilin']} />`,V=`const data = [
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
    }
]

<Cascader data={data} changeOnSelect value={['jiangsu','suzhou','shizilin']} />`,I=`const data = [
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
    }
]

const [value, setValue]: any[] = createSignal();

<Space>
    <Cascader data={data} value={[value, setValue]} />
    <Button type='primary' onClick={() => {
        setValue(['jiangsu','suzhou','shizilin'])
    }}>
        设置值
    </Button>
</Space>`,L=`const data10 = [
    {
        value: 'beijing', title: '北京', loading: true
    },
    {
        value: 'jiangsu',
        title: '江苏',
        loading: true,
    }
];


<Space>
    <Cascader data={data10} loadData={(item: any) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (item.value === 'beijing') {
                    resolve([
                        {value: 'gugong', title: '故宫'},
                        {value: 'tiantan', title: '天坛'},
                        {value: 'wangfujing', title: '王府井'},
                    ]);
                }
                if (item.value === 'jiangsu') {
                    resolve([
                        {
                            value: 'nanjing',
                            title: '南京',
                        },
                        {
                            value: 'suzhou',
                            title: '苏州',
                        }
                    ]);
                }
            }, 1000);
        })
    }}/>
</Space>`,R=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"size",desc:"尺寸 small | large",type:"string",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"align",desc:"下拉位置bottomLeft|bottomRight",type:"string",default:"bottomRight"},{name:"prepend",desc:"前缀",type:"JSXElement",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"placeholder",desc:"placeholder",type:"string",default:""},{name:"seperator",desc:"分隔符",type:"string",default:"/"},{name:"transfer",desc:"下拉内容使用Portal渲染",type:"boolean",default:""},{name:"revers",desc:"是否需要翻转",type:"boolean",default:"true"},{name:"data",desc:"传入的数据体",type:"Array",default:""},{name:"trigger",desc:"展开触发条件 click|hover",type:"string",default:"click"},{name:"changeOnSelect",desc:"点击选项及改变值",type:"boolean",default:""},{name:"loadData",desc:"动态加载方法",type:"Function",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""},{name:"onSelect",desc:"选项选择事件",type:"Function",default:""}],$=[{name:"value",desc:"选项值",type:"string|number",default:""},{name:"title",desc:"选项显示信息",type:"string",default:""},{name:"children",desc:"子元素",type:"Array",default:""},{name:"disabled",desc:"选项禁用",type:"boolean",default:""}],X=[{name:"onChange",desc:"值改变事件",params:"value: string[]"},{name:"onSelect",desc:"选项选择事件",params:"item: Object"}],q=[{id:"cascader_base",text:"基础用法"},{id:"cascader_disabled",text:"禁用"},{id:"cascader_size",text:"尺寸"},{id:"cascader_sep",text:"分隔符"},{id:"cascader_trigger",text:"触发事件"},{id:"cascader_change",text:"选择及改变"},{id:"cascader_control",text:"可控"},{id:"cascader_loading",text:"动态加载"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_data_props",text:"数据属性"},{id:"comp_events",text:"事件"}],d={cascader_base:w,cascader_disabled:N,cascader_size:P,cascader_sep:T,cascader_trigger:k,cascader_change:V,cascader_control:I,cascader_loading:L},G=A('<div class="sys-ctx-main-left">');function Y(){const[z,v]=F(),s=[{value:"beijing",title:"北京",children:[{value:"gugong",title:"故宫"},{value:"tiantan",title:"天坛"},{value:"wangfujing",title:"王府井"}]},{value:"jiangsu",title:"江苏",children:[{value:"nanjing",title:"南京",children:[{value:"fuzimiao",title:"夫子庙"}]},{value:"suzhou",title:"苏州",children:[{value:"zhuozhengyuan",title:"拙政园",disabled:!0},{value:"shizilin",title:"狮子林"}]}]}],f=JSON.parse(JSON.stringify(s)),g=JSON.parse(JSON.stringify(s)),j=JSON.parse(JSON.stringify(s)),b=JSON.parse(JSON.stringify(s)),_=JSON.parse(JSON.stringify(s)),C=JSON.parse(JSON.stringify(s)),E=[{value:"beijing",title:"北京",loading:!0},{value:"jiangsu",title:"江苏",loading:!0}];return[(()=>{const o=G();return S(J,o,()=>""),x(o,e(a,{dir:"v",size:32,get children(){return[e(c,{heading:2,children:"Cascader 级联选择"}),e(a,{id:"cascader_base",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(t,{data:s}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"基础用法"})}}),e(n,{type:"secondary",spacing:"extended",children:"基础用法"}),e(r,{get data(){return d.cascader_base}})]}})}}),e(a,{id:"cascader_disabled",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(t,{data:f,disabled:!0}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"禁用"})}}),e(n,{type:"secondary",spacing:"extended",children:"使用 disabled 禁用"}),e(r,{get data(){return d.cascader_disabled}})]}})}}),e(a,{id:"cascader_size",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{get children(){return[e(t,{data:g,size:"small",value:["jiangsu","suzhou","shizilin"]}),e(t,{data:g,value:["jiangsu","suzhou","shizilin"]}),e(t,{data:g,size:"large",value:["jiangsu","suzhou","shizilin"]})]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"尺寸"})}}),e(n,{type:"secondary",spacing:"extended",children:"size 支持 small 和 large"}),e(r,{get data(){return d.cascader_size}})]}})}}),e(a,{id:"cascader_sep",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(t,{data:j,seperator:">"}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"自定义分隔符"})}}),e(n,{type:"secondary",spacing:"extended",children:"使用 seperator 可以自定义分隔符"}),e(r,{get data(){return d.cascader_sep}})]}})}}),e(a,{id:"cascader_trigger",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(t,{data:b,trigger:"hover",value:["jiangsu","suzhou","shizilin"]}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"触发事件"})}}),e(n,{type:"secondary",spacing:"extended",children:"使用 trigger 修改展开的触发条件， 支持hover和click"}),e(r,{get data(){return d.cascader_trigger}})]}})}}),e(a,{id:"cascader_change",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(t,{data:_,changeOnSelect:!0,value:["jiangsu","suzhou","shizilin"]}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"选择及改变"})}}),e(n,{type:"secondary",spacing:"extended",children:"设置 changeOnSelect 选择选项及改变值"}),e(r,{get data(){return d.cascader_change}})]}})}}),e(a,{id:"cascader_control",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{get children(){return[e(t,{data:C,value:[z,v]}),e(D,{type:"primary",onClick:()=>{v(["jiangsu","suzhou","shizilin"])},children:"设置值"})]}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"可控"})}}),e(n,{type:"secondary",spacing:"extended",children:"value 可控属性"}),e(r,{get data(){return d.cascader_control}})]}})}}),e(a,{id:"cascader_loading",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{get children(){return e(t,{data:E,loadData:p=>new Promise(m=>{setTimeout(()=>{p.value==="beijing"&&m([{value:"gugong",title:"故宫"},{value:"tiantan",title:"天坛"},{value:"wangfujing",title:"王府井"}]),p.value==="jiangsu"&&m([{value:"nanjing",title:"南京"},{value:"suzhou",title:"苏州"}])},1e3)})})}}),e(u,{align:"left",get children(){return e(i,{type:"primary",children:"动态加载"})}}),e(n,{type:"secondary",spacing:"extended",children:"数据属性存在loading 可配合 loadData 方法进行动态加载子元素"}),e(r,{get data(){return d.cascader_loading}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(c,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"Cascader Props"}),e(h,{columns:y,data:R,border:!0,size:"small"})]}}),e(a,{id:"comp_data_props",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"data Props"}),e(h,{columns:y,data:$,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"Events"}),e(h,{columns:B,data:X,border:!0,size:"small"})]}})]}})]}})),o})(),e(O,{data:q})]}export{Y as default};
