import{c as k,u as O,i as y,a as e,S as t,T as d,B as p,t as D}from"./index-5e251d81.js";import{T as r,D as i,a as u,p as f,e as G,C as H}from"./code-c71fa51e.js";import{T as b}from"./Title-52a6bda3.js";import{C as o}from"./index-dff86af7.js";import{P as l}from"./Paragraph-a25cb645.js";import{h as R}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const I=[{id:"100",name:"John Brown",age:18,address:"New York No. 1 Lake Park"},{id:"101",name:"Jim Green",age:24,address:"London No. 1 Lake Park",_showChildren:!0,children:[{id:"10100",name:"John Brown",age:18,address:"New York No. 1 Lake Park"},{id:"10101",name:"Joe Blackn",age:30,address:"Sydney No. 1 Lake Park"},{id:"10102",name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",children:[{id:"1010200",name:"Jim Green",age:24,address:"New York No. 1 Lake Park"}]}]},{id:"102",name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park"},{id:"103",name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park"}],A=[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",job:"Data engineer",interest:"badminton",birthday:"1991-05-14",book:"Steve Jobs",movie:"The Prestige",music:"I Cry"},{name:"Jim Green",age:25,address:"London No. 1 Lake Park",job:"Data Scientist",interest:"volleyball",birthday:"1989-03-18",book:"My Struggle",movie:"Roman Holiday",music:"My Heart Will Go On"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",job:"Data Product Manager",interest:"tennis",birthday:"1992-01-31",book:"Win",movie:"Jobs",music:"Don’t Cry"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",job:"Data Analyst",interest:"snooker",birthday:"1988-7-25",book:"A Dream in Red Mansions",movie:"A Chinese Ghost Story",music:"actor"}],$=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data}/>`,W=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} border/>`,q=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} border stripe/>`,K=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} border stripe height={200}/>`,Q=`const fixedColumns = [
    {type: 'index', title: '序号', width: '80px', fixed: 'left'},
    {name: 'name', title: '名称', width: '150px', fixed: 'left'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px', fixed: 'right'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<div style={{width: '800px'}}>
    <Table columns={fixedColumns} data={data} border stripe height={200}/>
</div>`,U=`let table: any;

const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} border  highlight ref={table}/>
    <div>
        <Button type="primary" onClick={() => {
            table.clearSelect();
        }}>清除高亮</Button>
    </div>
</Space>`,V=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} size='small' border />`,Z=`const [loading, setLoading] = createSignal(false);

const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} size='small' border loading={loading()}/>
    <div>
        <Button type="primary" onClick={() => {
            setLoading(!loading());
        }}>加载/完成</Button>
    </div>
</Space>`,ee=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} border spanMethod={(row: any, col: ColumnProps, rowIndex: number, columnIndex: number) => {
        if (rowIndex === 0 && columnIndex === 0) {
            return [1, 2];
        } else if (rowIndex === 0 && columnIndex === 1) {
            return  [0, 0];
        }
        if (rowIndex === 2 && columnIndex === 0) {
            return [2, 1];
        } else if (rowIndex === 3 && columnIndex === 0) {
            return [0, 0];
        }
    }}/>
</Space>`,te=`const columns = [
    {type: 'checkbox', width: '55px', },
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} />
</Space>`,ae=`const columns = [
    {name: 'name', title: '名称', width: '150px', sort: true},
    {name: 'x', title: 'X', width: '300px', sort: true},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];


const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} />
</Space>`,ne=`const columns = [
    {name: 'name', title: '名称', width: '150px', resize: true},
    {name: 'x', title: 'X', width: '300px', resize: true},
    {name: 'y', title: 'Y', width: '300px', resize: true},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v" style={{width: '100%', overflow: 'auto'}}>
    <Table columns={columns} data={data} border/>
</Space>`,re=`const [data, setData] = createSignal([
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        job: 'Data engineer',
        interest: 'badminton',
        birthday: '1991-05-14',
        book: 'Steve Jobs',
        movie: 'The Prestige',
        music: 'I Cry',
    },
    {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        job: 'Data Scientist',
        interest: 'volleyball',
        birthday: '1989-03-18',
        book: 'My Struggle',
        movie: 'Roman Holiday',
        music: 'My Heart Will Go On'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        job: 'Data Product Manager',
        interest: 'tennis',
        birthday: '1992-01-31',
        book: 'Win',
        movie: 'Jobs',
        music: 'Don’t Cry'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        job: 'Data Analyst',
        interest: 'snooker',
        birthday: '1988-7-25',
        book: 'A Dream in Red Mansions',
        movie: 'A Chinese Ghost Story',
        music: 'actor'
    }
]);

const columns = [
    {
        title: 'Name',
        name: 'name',
        width: '100px',
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    }
]

const [loading, setLoading] = createSignal(false);

<Space dir="v">
    <Table columns={columns} data={data()} border loading={loading()}/>
    <div>
        <Button type='primary' onClick={() => {
            setLoading(true);
            setTimeout(() => {
                const data: any[] = [];
                for (let i = 0; i < Math.random() * 10; i++) {
                    data.push({
                        name: 'name_' + i,
                        age: Math.round(10 + Math.random() * 50),
                        address: 'address ' + i
                    });
                }
                setData5(data);
                setLoading(false);
            }, 500)
        }}>请求数据</Button>
    </div>
</Space>`,de=`const data = [
    {
        id: '100',
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park'
    },
    {
        id: '101',
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        _showChildren: true,
        children: [
            {
                id: '10100',
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park'
            },
            {
                id: '10101',
                name: 'Joe Blackn',
                age: 30,
                address: 'Sydney No. 1 Lake Park'
            },
            {
                id: '10102',
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                children: [
                    {
                        id: '1010200',
                        name: 'Jim Green',
                        age: 24,
                        address: 'New York No. 1 Lake Park'
                    }
                ]
            }
        ]
    },
    {
        id: '102',
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        id: '103',
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park'
    }
];


const columns = [
    {
        title: 'Name',
        name: 'name',
        width: '100px',
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    }
]

<Space dir="v">
    <Table columns={columns} data={data} border />
</Space>`,ie=`const columns = [
    {
        type: 'expand',
        width: '50px',
        render: (row: any) => {
            return <div>{row.name}</div>
        }
    },
    {
        title: 'Name',
        name: 'name',
        width: '100px',
        resize: true,
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
        resize: true,
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    },
    {
        title: 'Job',
        name: 'job',
        width: '200px',
    },
    {
        title: 'Book',
        name: 'book',
        width: '250px',
    }
]

const data = [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        job: 'Data engineer',
        interest: 'badminton',
        birthday: '1991-05-14',
        book: 'Steve Jobs',
        movie: 'The Prestige',
        music: 'I Cry',
    },
    {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        job: 'Data Scientist',
        interest: 'volleyball',
        birthday: '1989-03-18',
        book: 'My Struggle',
        movie: 'Roman Holiday',
        music: 'My Heart Will Go On'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        job: 'Data Product Manager',
        interest: 'tennis',
        birthday: '1992-01-31',
        book: 'Win',
        movie: 'Jobs',
        music: 'Don’t Cry'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        job: 'Data Analyst',
        interest: 'snooker',
        birthday: '1988-7-25',
        book: 'A Dream in Red Mansions',
        movie: 'A Chinese Ghost Story',
        music: 'actor'
    }
]

<Space dir="v">
    <Table columns={columns} data={data} border />
</Space>`,ue=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const largedata = [];
for (let i = 0; i < 1000; i++) {
    largedata.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={largedata} border virtual height={300}/>`,v=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"columns",desc:"表头字段信息",type:"Array",default:""},{name:"data",desc:"数据体",type:"Array",default:""},{name:"height",desc:"表格最大高度，超出表头固定",type:"number",default:""},{name:"border",desc:"边框",type:"boolean",default:""},{name:"stripe",desc:"斑马条纹",type:"boolean",default:""},{name:"highlight",desc:"点击高亮选中的行",type:"boolean",default:""},{name:"size",desc:"大小， small",type:"string",default:""},{name:"loading",desc:"加载状态",type:"boolean",default:""},{name:"spanMethod",desc:"行列合并的钩子",type:"Function",default:""},{name:"onRowSelect",desc:"行选中事件 返回item",type:"Function",default:""},{name:"onRowChecked",desc:"行选中事件 返回item",type:"Function",default:""},{name:"onCheckedAll",desc:"全选事件, 所有选中的数据data",type:"Function",default:""},{name:"onSort",desc:"排序事件 column, sotyType",type:"Function",default:""},{name:"ref",desc:"表格组件的引用",type:"any",default:""}],oe=[{name:"onRowSelect",desc:"行选中事件",params:"item"},{name:"onRowChecked",desc:"行选中事件",params:"item"},{name:"onCheckedAll",desc:"全选事件",params:"data"},{name:"onSort",desc:"排序事件",params:"column, sotyType"}],le=[{id:"table_base",text:"基础用法"},{id:"table_border",text:"边框"},{id:"table_stripe",text:"斑马纹"},{id:"table_fixedHeader",text:"固定表头"},{id:"table_fixedCol",text:"固定列"},{id:"table_highlight",text:"行高亮"},{id:"table_size",text:"小尺寸"},{id:"table_loading",text:"加载中"},{id:"table_span",text:"行列合并"},{id:"table_checkbox",text:"选择框"},{id:"table_sort",text:"排序"},{id:"table_resize",text:"拖拽列宽"},{id:"table_data",text:"动态数据"},{id:"table_tree",text:"树状"},{id:"table_expand",text:"展开"},{id:"table_largedata",text:"大列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_column_props",text:"Column属性"},{id:"comp_events",text:"事件"}],s={table_base:$,table_border:W,table_stripe:q,table_fixedHeader:K,table_fixedCol:Q,table_highlight:U,table_size:V,table_loading:Z,table_span:ee,table_checkbox:te,table_sort:ae,table_resize:ne,table_data:re,table_tree:de,table_expand:ie,table_largedata:ue},w=D("<div>"),x=D("<br>"),se=D('<div class="sys-ctx-main-left">');function be(){const g=[{type:"index",title:"序号",width:"80px"},{name:"name",title:"名称",width:"150px"},{name:"x",title:"X"},{name:"y",title:"Y"},{name:"date",title:"日期",width:"200px"}],S=[{type:"index",title:"序号",width:"80px"},{name:"name",title:"名称",width:"150px"},{name:"x",title:"X"},{name:"y",title:"Y"},{name:"date",title:"日期",width:"200px"}],L=[{type:"index",title:"序号",width:"80px",fixed:"left"},{name:"name",title:"名称",width:"150px",fixed:"left"},{name:"x",title:"X",width:"300px"},{name:"y",title:"Y",width:"300px"},{name:"date",title:"日期",width:"200px",fixed:"right"}],M=[{type:"checkbox",width:"55px"},{name:"name",title:"名称",width:"150px"},{name:"x",title:"X",width:"300px"},{name:"y",title:"Y",width:"300px"},{name:"date",title:"日期",width:"200px"},{name:"_op",title:"操作",width:"150px",render:(n,a,c)=>e(t,{get children(){return[e(p,{type:"text",size:"small",ghost:!0,children:"添加"}),e(p,{type:"text",size:"small",ghost:!0,children:"修改"})]}})}],N=[{name:"name",title:"名称",width:"150px",sort:!0},{name:"x",title:"X",width:"300px",sort:!0},{name:"y",title:"Y",width:"300px"},{name:"date",title:"日期",width:"200px"},{name:"_op",title:"操作",width:"150px",render:(n,a,c)=>e(t,{get children(){return[e(p,{type:"text",size:"small",ghost:!0,children:"添加"}),e(p,{type:"text",size:"small",ghost:!0,children:"修改"})]}})}],P=[{name:"name",title:"名称",width:"150px",resize:!0},{name:"x",title:"X",width:"300px",resize:!0},{name:"y",title:"Y",width:"300px",resize:!0},{name:"date",title:"日期",width:"200px"},{name:"_op",title:"操作",width:"150px",render:(n,a,c)=>e(t,{get children(){return[e(p,{type:"text",size:"small",ghost:!0,children:"添加"}),e(p,{type:"text",size:"small",ghost:!0,children:"修改"})]}})}],z=[{type:"expand",width:"50px",render:n=>(()=>{const a=w();return y(a,()=>n.name),a})()},{title:"Name",name:"name",width:"100px",resize:!0},{title:"Age",name:"age",width:"100px",resize:!0},{title:"Address",name:"address",width:"300px"},{title:"Job",name:"job",width:"200px"},{title:"Book",name:"book",width:"250px"}],J=[{title:"Name",name:"name",width:"100px"},{title:"Age",name:"age",width:"100px"},{title:"Address",name:"address",width:"300px"}],T=[{title:"Name",name:"name",tree:!0,width:"100px"},{title:"Age",name:"age",width:"100px"},{title:"Address",name:"address",width:"300px"}],m=[];for(let n=0;n<5;n++)m.push({id:n,name:"name_"+n,x:Math.random()+100,y:Math.random()+30,_disabled:n%3===0,date:new Date().toLocaleDateString()});const C=[];for(let n=0;n<1e3;n++)C.push({id:n,name:"name_"+n,x:Math.random()+100,y:Math.random()+30,_disabled:n%3===0,date:new Date().toLocaleDateString()});const Y=JSON.parse(JSON.stringify(m));let E;const[_,B]=k(!1),[X,j]=k(A);return[(()=>{const n=se();return O(R,n,()=>""),n.style.setProperty("width","0"),y(n,e(t,{dir:"v",size:32,get children(){return[e(b,{heading:2,children:"Table 表格"}),e(t,{id:"table_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(r,{columns:S,data:m}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(l,{type:"secondary",spacing:"extended",children:"基础用法， columns中type支持 index 和 checkbox"}),e(u,{get data(){return s.table_base}})]}})}}),e(t,{id:"table_border",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(r,{columns:g,data:m,border:!0}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"边框"})}}),e(l,{type:"secondary",spacing:"extended",children:"添加 border 支持边框"}),e(u,{get data(){return s.table_border}})]}})}}),e(t,{id:"table_stripe",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(r,{columns:g,data:m,border:!0,stripe:!0}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"斑马纹"})}}),e(l,{type:"secondary",spacing:"extended",children:"添加 stripe 支持斑马纹"}),e(u,{get data(){return s.table_stripe}})]}})}}),e(t,{id:"table_fixedHeader",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(r,{columns:g,data:m,border:!0,stripe:!0,height:200}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"固定表头"})}}),e(l,{type:"secondary",spacing:"extended",children:"通过设置属性 height 给表格指定高度后，会自动固定表头。"}),e(u,{get data(){return s.table_fixedHeader}})]}})}}),e(t,{id:"table_fixedCol",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const a=w();return a.style.setProperty("width","800px"),y(a,e(r,{columns:L,data:m,border:!0,stripe:!0,height:200})),a})(),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"固定列"})}}),e(l,{type:"secondary",spacing:"extended",children:"通过给数据 columns 的项设置 fixed 为 left 或 right，可以左右固定需要的列。"}),e(u,{get data(){return s.table_fixedCol}})]}})}}),e(t,{id:"table_highlight",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{columns:g,data:Y,border:!0,highlight:!0,ref(a){const c=E;typeof c=="function"?c(a):E=a}}),(()=>{const a=w();return y(a,e(p,{type:"primary",onClick:()=>{E.clearSelect()},children:"清除高亮"})),a})()]}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"行高亮"})}}),e(l,{type:"secondary",spacing:"extended",children:"添加 highlight 选择一行的时候可以高亮显示, 可通过引用的clearSelect方法进行清除"}),e(u,{get data(){return s.table_highlight}})]}})}}),e(t,{id:"table_size",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(r,{columns:g,data:m,size:"small",border:!0}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"小尺寸"})}}),e(l,{type:"secondary",spacing:"extended",children:"size 支持small"}),e(u,{get data(){return s.table_size}})]}})}}),e(t,{id:"table_loading",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{columns:g,data:m,size:"small",border:!0,get loading(){return _()}}),(()=>{const a=w();return y(a,e(p,{type:"primary",onClick:()=>{B(!_())},children:"加载/完成"})),a})()]}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"加载中"})}}),e(l,{type:"secondary",spacing:"extended",children:"loading 属性可以在table上面覆盖一层加载的遮罩"}),e(u,{get data(){return s.table_loading}})]}})}}),e(t,{id:"table_span",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:g,data:m,border:!0,spanMethod:(a,c,h,F)=>{if(h===0&&F===0)return[1,2];if(h===0&&F===1)return[0,0];if(h===2&&F===0)return[2,1];if(h===3&&F===0)return[0,0]}})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"行列合并"})}}),e(l,{type:"secondary",spacing:"extended",children:"设置属性 spanMethod 可以指定合并行或列的算法。"}),e(u,{get data(){return s.table_span}})]}})}}),e(t,{id:"table_checkbox",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:M,data:m})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"选择框"})}}),e(l,{type:"secondary",spacing:"extended",children:"column 中设置type 为checkbox可以添加选择列, 通过render函数可自定义渲染内容"}),e(u,{get data(){return s.table_checkbox}})]}})}}),e(t,{id:"table_sort",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:N,data:m})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"排序"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["通过给 columns 数据的项，设置 sort: true，即可对该列数据进行排序。",x(),"通过给某一列设置 sortType 可以在初始化时使用排序。",x(),"如果使用远程排序，可以设置 sortable: 'custom'，然后在触发排序事件 onSort 后，进行远程排序，并手动设置新的 data"]}}),e(u,{get data(){return s.table_sort}})]}})}}),e(t,{id:"table_resize",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",style:{width:"100%",overflow:"auto"},get children(){return e(r,{columns:P,data:m,border:!0})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"拖拽列宽"})}}),e(l,{type:"secondary",spacing:"extended",children:"给某一列设置属性 resize 为 true，可以拖拽调整该列的宽度，需开启 border 属性，且该列设置了 width 属性。"}),e(u,{get data(){return s.table_resize}})]}})}}),e(t,{id:"table_data",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{columns:J,get data(){return X()},border:!0,get loading(){return _()}}),(()=>{const a=w();return y(a,e(p,{type:"primary",onClick:()=>{B(!0),setTimeout(()=>{const c=[];for(let h=0;h<Math.random()*10;h++)c.push({name:"name_"+h,age:Math.round(10+Math.random()*50),address:"address "+h});j(c),B(!1)},500)},children:"请求数据"})),a})()]}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"动态数据"})}}),e(l,{type:"secondary",spacing:"extended",children:"动态设置data属性"}),e(u,{get data(){return s.table_data}})]}})}}),e(t,{id:"table_tree",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:T,data:I,border:!0})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"树状"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["当数据中含有 children 字段，会以树形数据显示。",x(),"在 column 开启属性 tree，则该列会显示展开/收起图标。",x(),"设置 data 属性 _showChildren，默认会展开子数据。"]}}),e(u,{get data(){return s.table_tree}})]}})}}),e(t,{id:"table_expand",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:z,data:A,border:!0})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"展开"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["当表格内容较多不能一次性完全展示时使用。",x(),"通过给 columns 数据设置一项，指定 type: 'expand'，即可开启扩展功能。",x(),"渲染展开区域与自定义列模板方法类似，使用 render 函数。"]}}),e(u,{get data(){return s.table_expand}})]}})}}),e(t,{id:"table_largedata",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:g,data:C,border:!0,virtual:!0,height:300})}}),e(i,{align:"left",get children(){return e(d,{type:"primary",children:"大列表"})}}),e(l,{type:"secondary",spacing:"extended",get children(){return["当表格数据量较大时为了提升渲染性能，可以使用虚拟列表 通过指定 virtual 属性并设置 height，即可高性能渲染表格",x()]}}),e(u,{get data(){return s.table_largedata}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(b,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Table Props"}),e(r,{columns:f,data:v,border:!0,size:"small"})]}}),e(t,{id:"comp_column_props",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Column Props"}),e(r,{columns:f,data:v,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(b,{type:"primary",heading:4,children:"Events"}),e(r,{columns:G,data:oe,border:!0,size:"small"})]}})]}})]}})),n})(),e(H,{data:le})]}export{be as default};
