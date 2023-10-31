import{c as E,u as _,i as v,a as e,S as i,aT as s,B as g,I as n,T as o,P as l,d as L,t as b}from"./index-602cfbf2.js";import{T as f}from"./Title-c2e5d943.js";import{C as d}from"./index-b85a489d.js";import{D as u,a as c,C}from"./code-fa44278e.js";import{p as x,e as D}from"./columns-cd2d5c33.js";import{h as U}from"./hljs-c6aaaaf8.js";const B=`<Upload action="/test/file/upload/test" name="file" 
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
    <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>`,P=`<Upload action="/test/file/upload/test" name="file" accept="jpg" 
    defaultFileList={[
        {
            name: 'test.png',
            status: 'finished',
            size: 71183,
            preview: true,
            url: '/test/file/view/test/temp1.png',
        }
    ]}
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
    <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>`,S=`<Space dir="v">
    <Upload action="/test/file/upload/test" name="file" type="drag" data={data()} headers={headers} accept="jpg">
        <div class="cm-upload-drag-wrap">
            <Icon name='upload' size={32}/>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</Space>`,z=`<Space dir="v">
    <Upload action="/test/file/upload/test" listType="picture" name="file" data={data()} headers={headers} accept=".jpg,.jpeg" ref={upload}
        defaultFileList={[
            {
                name: 'test.png',
                status: 'finished',
                size: 71183,
                preview: true,
                url: '/test/file/view/test/temp1.png',
            }
        ]}>
            <Icon name='plus1' size={20}/>
    </Upload>
</Space>`,A=`<Upload action="/test/file/upload/test" name="file" data={data()} headers={headers} accept="jpg" ref={upload}
    defaultFileList={[
        {
            name: 'test.png',
            status: 'finished',
            size: 71183,
            preview: true,
            url: '/test/file/view/test/temp1.png',
        }
    ]}
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
        <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>

<Button type='primary' onClick={() => {
console.log(upload.getFileList());
}}>获取文件列表</Button>`,j=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"action",desc:"上传的地址",type:"string",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"multiple",desc:"是否支持多选文件",type:"boolean",default:""},{name:"webkitdirectory",desc:"是否开启选择文件夹，部分浏览器适用",type:"boolean",default:""},{name:"accept",desc:"接受上传的文件类型",type:"string",default:""},{name:"beforeUpload",desc:"上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传",type:"Function",default:""},{name:"format",desc:"支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名",type:"string[]",default:""},{name:"maxSize",desc:"文件大小限制，单位b",type:"Number",default:""},{name:"headers",desc:"设置上传的请求头部",type:"Object",default:""},{name:"withCredentials",desc:"支持发送 cookie 凭证信息",type:"boolean",default:""},{name:"data",desc:"上传时附带的额外参数",type:"Object",default:""},{name:"defaultFileList",desc:"默认已上传的文件列表",type:"Array",default:""},{name:"type",desc:"上传控件的类型， select|drag",type:"string",default:"select"},{name:"paste",desc:"是否支持粘贴上传文件",type:"boolean",default:""},{name:"ref",desc:"组件引用",type:"any",default:""},{name:"listType",desc:"列表的类型 picture",type:"boolean",default:""},{name:"onProgress",desc:"文件上传时的钩子，返回字段为 event, file, fileList",type:"Function",default:""},{name:"onSuccess",desc:"文件上传成功时的钩子，返回字段为 response, file, fileList",type:"Function",default:""},{name:"onError",desc:"文件上传失败时的钩子，返回字段为 error, file, fileList",type:"Function",default:""},{name:"onRemove",desc:"文件列表移除文件时的钩子，返回字段为 file, fileList",type:"Function",default:""},{name:"onPreview",desc:"点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据",type:"Function",default:""},{name:"onFormatError",desc:"文件格式验证失败时的钩子，返回字段为 file, fileList",type:"Function",default:""},{name:"onExceededSize",desc:"文件超出指定大小限制时的钩子，返回字段为 file, fileList",type:"Function",default:""}],w=[{name:"onProgress",desc:"文件上传时的钩子",params:"event, file, fileList"},{name:"onSuccess",desc:"文件上传成功时的钩子",params:"response, file, fileList"},{name:"onError",desc:"文件上传失败时的钩子",params:"error, file, fileList"},{name:"onRemove",desc:"文件列表移除文件时的钩子",params:"file, fileList"},{name:"onPreview",desc:"点击已上传的文件链接时的钩子",params:"file"},{name:"onFormatError",desc:"文件格式验证失败时的钩子",params:"file, fileList"},{name:"onExceededSize",desc:"文件超出指定大小限制时的钩子",params:"file, fileList"}],T=[{id:"upload_base",text:"基础用法"},{id:"upload_defaultList",text:"默认列表"},{id:"upload_drag",text:"拖拽"},{id:"upload_pictures",text:"照片墙"},{id:"upload_getList",text:"获取列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],p={upload_base:B,upload_defaultList:P,upload_drag:S,upload_pictures:z,upload_getList:A},I=b('<div class="cm-upload-drag-wrap"><p>Click or drag files here to upload'),k=b('<div class="sys-ctx-main-left">');function J(){const[m,q]=E({field:"1"}),y={"x-token":"123456"};let r;return[(()=>{const h=k();return _(U,h,()=>""),v(h,e(i,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Upload 上传"}),e(i,{id:"upload_base",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(s,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",onProgress:(t,a,F)=>{console.log(a)},onSuccess:()=>{console.log("success")},onError:t=>{console.log(t)},get children(){return e(g,{get icon(){return e(n,{name:"upload"})},type:"primary",children:"Upload Files"})}}),e(u,{align:"left",get children(){return e(o,{type:"primary",children:"基础用法"})}}),e(l,{type:"secondary",spacing:"extended",children:"基础用法"}),e(c,{get data(){return p.upload_base}})]}})}}),e(i,{id:"upload_defaultList",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(s,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",accept:"jpg",defaultFileList:[{name:"test.png",status:"finished",size:71183,preview:!0,url:"https://cqb325.gitee.io/cui-solid-doc/logo.svg"}],onProgress:(t,a,F)=>{console.log(a)},onSuccess:()=>{console.log("success")},onError:t=>{console.log(t)},get children(){return e(g,{get icon(){return e(n,{name:"upload"})},type:"primary",children:"Upload Files"})}}),e(u,{align:"left",get children(){return e(o,{type:"primary",children:"默认列表"})}}),e(l,{type:"secondary",spacing:"extended",children:"defaultFileList 可以初始化默认的列表"}),e(c,{get data(){return p.upload_defaultList}})]}})}}),e(i,{id:"upload_drag",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return e(s,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",type:"drag",get data(){return m()},headers:y,accept:"jpg",get children(){const t=I(),a=t.firstChild;return v(t,e(n,{name:"upload",size:32}),a),t}})}}),e(u,{align:"left",get children(){return e(o,{type:"primary",children:"拖拽"})}}),e(l,{type:"secondary",spacing:"extended",children:'type="drag" 可以支持拖拽上传， 上传的数据使用data传入， 自定义请求头通过 headers 参数传输'}),e(c,{get data(){return p.upload_drag}})]}})}}),e(i,{id:"upload_pictures",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return e(s,{action:"https://cqb325.gitee.io/cui-solid-doc/",listType:"picture",name:"file",get data(){return m()},headers:y,accept:".jpg,.jpeg",ref(t){const a=r;typeof a=="function"?a(t):r=t},defaultFileList:[{name:"test.png",status:"finished",size:71183,preview:!0,url:"https://cqb325.gitee.io/cui-solid-doc/logo.svg"}],get children(){return e(n,{name:"plus1",size:20})}})}}),e(u,{align:"left",get children(){return e(o,{type:"primary",children:"照片墙"})}}),e(l,{type:"secondary",spacing:"extended",children:'listType="picture" 文件列表以照片墙的形式展示'}),e(c,{get data(){return p.upload_pictures}})]}})}}),e(i,{id:"upload_getList",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(s,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",get data(){return m()},headers:y,accept:"jpg",ref(t){const a=r;typeof a=="function"?a(t):r=t},defaultFileList:[{name:"test.png",status:"finished",size:71183,preview:!0,url:"https://cqb325.gitee.io/cui-solid-doc/logo.svg"}],onProgress:(t,a,F)=>{console.log(a)},onSuccess:()=>{console.log("success")},onError:t=>{console.log(t)},get children(){return e(g,{get icon(){return e(n,{name:"upload"})},type:"primary",children:"Upload Files"})}}),e(g,{type:"primary",onClick:()=>{console.log(r.getFileList())},children:"获取文件列表"}),e(u,{align:"left",get children(){return e(o,{type:"primary",children:"获取列表"})}}),e(l,{type:"secondary",spacing:"extended",children:"通过ref获取upload的引用， 可调用 getFileList 获取文件列表"}),e(c,{get data(){return p.upload_getList}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"TimePicker Props"}),e(L,{columns:x,data:j,border:!0,size:"small"})]}}),e(i,{id:"comp_events",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Events"}),e(L,{columns:D,data:w,border:!0,size:"small"})]}})]}})]}})),h})(),e(C,{data:T})]}export{J as default};
