import{a as e,r as V,k as G,v as W,m as Z,B as U,I as z,c as f,L as H,x as K,i as g,g as T,h as Q,j as Y,s as ee,t as y,S as m,z as te,T as C,P as ne}from"./index-012dff6d.js";import{D as b,a as _,m as re,C as ae}from"./code-9a657405.js";import{T as w,p as L,e as se}from"./columns-66bf7541.js";import{T as h}from"./Title-7bbcb9dc.js";import{C as E}from"./index-e07e4e01.js";import{P as F}from"./Paragraph-690c10ae.js";import{F as ue,u as D,a as I}from"./createField-0624a138.js";import{u as ie}from"./useForm-67a02314.js";import{I as $}from"./input-c3514f51.js";import{P as oe}from"./index-b8f5dce3.js";const J=V();function P(t){const a=ie({data:t.data||{},validation:{},message:{}}),o=()=>G(t,"cm-login"),u=async()=>{const l=await a.isValid();t.onSubmit&&t.onSubmit(l,a)};return e(J.Provider,{value:{onSubmit:u,form:a},get children(){return e(ue,{form:a,onBeforeSubmit:u,autocomplete:"off",get classList(){return o()},get style(){return t.style},get children(){return t.children}})}})}const M=()=>W(J);function x(t){const a=t.type??"primary",o=M(),u=()=>{o?.onSubmit&&o?.onSubmit()},l=t.size??"large";return e(U,Z(t,{size:l,type:a,onClick:u,block:!0,children:"登 录"}))}function j(t){const a=t.name??"username",o=t.icon??e(z,{name:"user"}),u={require:D().required,...t.rules},l={require:"请输入用户名！",...t.messages},c=t.placeholder??"请输入用户名",d=t.size??"large";return e(I,{get label(){return t.label},name:a,rules:u,messages:l,get children(){return e($,{prepend:o,size:d,placeholder:c,get onInput(){return t.onInput},autocomplete:"off"})}})}function S(t){const a=t.name??"password",o=t.icon??e(z,{name:"lock"}),u={require:D().required,...t.rules},l={require:"请输入密码！",...t.messages},c=t.placeholder??"请输入密码",d=t.size??"large";return e(I,{get label(){return t.label},name:a,rules:u,messages:l,get children(){return e($,{type:"password",prepend:o,size:d,placeholder:c,get onInput(){return t.onInput},autocomplete:"off"})}})}function le(t){const a=t.name??"mobile",o=t.icon??e(z,{name:"smartphone"}),u={require:D().required,mobile:!0,...t.rules},l={require:"请输入手机号码！",mobile:"输入的手机号码不正确！",...t.messages},c=t.placeholder??"请输入手机号码",d=t.size??"large";return e(I,{get label(){return t.label},name:a,rules:u,messages:l,get children(){return e($,{prepend:o,size:d,placeholder:c,get onInput(){return t.onInput},autocomplete:"off"})}})}function ce(t){const a=t.name??"email",o=t.icon??e(z,{name:"mail"}),u={require:D().required,email:!0,...t.rules},l={require:"请输入邮箱！",email:"输入的邮箱地址不正确！",...t.messages},c=t.placeholder??"请输入邮箱",d=t.size??"large";return e(I,{get label(){return t.label},name:a,rules:u,messages:l,get children(){return e($,{prepend:o,size:d,placeholder:c,get onInput(){return t.onInput},autocomplete:"off"})}})}const de=y('<span class="cm-count-down-prefix">'),me=y('<span class="cm-count-down-suffix">'),ge=y('<span><span class="cm-count-down-value">');function pe(t){return`${t}`.padStart(2,"0")}function he(t){let a;const o=t.duration??1e3,[u,l]=f(t.value),c=()=>{let n=u();n<=0&&(a&&(clearInterval(a),a=null),t.onEnd&&t.onEnd(),n=0);const s=pe(n),r=t.format??"s";let i=r;return r.match(/s+/)&&(i=i.replace(/s+/,s+"")),i},d=()=>{a=setInterval(()=>{l(u()-1)},o)};H(()=>{d()}),K(()=>{clearInterval(a),a=null});const p=()=>G(t,"cm-count-down");return(()=>{const n=ge(),s=n.firstChild;return g(n,e(T,{get when(){return t.prefix},get children(){const r=de();return g(r,()=>t.prefix),r}}),s),g(s,c),g(n,e(T,{get when(){return t.suffix},get children(){const r=me();return g(r,()=>t.suffix),r}}),null),Q(r=>{const i=p(),q=t.style;return r._v$=Y(n,i,r._v$),r._v$2=ee(n,q,r._v$2),r},{_v$:void 0,_v$2:void 0}),n})()}function O(t){const[a,o]=f(t.action??""),[u,l]=f(!1),c=t.name??"captcha",d=t.icon??e(z,{name:"key"}),p={require:D().required,...t.rules},n={require:"请输入验证码！",...t.messages},s=t.placeholder??"请输入验证码",r=t.size??"large",i=t.countDownNumber??60,q=()=>a()?e(te,{get src(){return a()}}):u()?e(he,{value:i,format:"s秒",onEnd:()=>{l(!1)}}):"获取验证码",X=M(),R=async()=>{const N=a();if(N){const v=N.split("?"),k=new URLSearchParams(v[1]);k.set("_",`${Date.now()}`),o(v[0]+"?"+k.toString())}else{const v=X?.form;if(t.field&&v&&!await v.checkField(t.field))return;l(!0),t.onGetCaptcha&&t.onGetCaptcha()}};return e(I,{get label(){return t.label},name:c,rules:p,messages:n,get children(){return e(m,{get children(){return[e($,{prepend:d,size:r,placeholder:s}),e(U,{size:r,onClick:R,get disabled(){return u()},style:{flex:"0 0 120px"},get children(){return q()}})]}})}})}const fe=`<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <UserName name='u'/>
        <Password name='p'/>
        <Submit />
    </Login>
</div>`,ye=`<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <Mobile />
        <Captcha field="mobile" onGetCaptcha={() => {
            message.info('获取验证码');
        }}/>
        <Submit />
    </Login>
</div>`,ve=`<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <UserName name='username'/>
        <Password name='password'/>
        <Captcha action="https://zitie.cqb325.cn/cui/manager/user/captchaGet"/>
        <Submit />
    </Login>
</div>`,Ce=`<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }} data={{u: '1111', p: '111'}}>
        <UserName name='u'/>
        <Password name='p'/>
        <Submit />
    </Login>
</div>`,be=`const [strong, setStrong] = createSignal('强');
const [percent, setPercent] = createSignal(0);
const [color, setColor] = createSignal('');
const onChangePassword = (v: string) => {
    if (v.length < 6) {
        setStrong('太短');
        setColor('#ed4014');
    } else if (v.length < 10) {
        setStrong('中');
        setColor('#ff9900');
    } else {
        setStrong('强');
        setColor('#19be6b');
    }
    setPercent((v.length > 10 ? 10 : v.length) * 10)
}

<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <Email />
        <Popover trigger="click" arrow theme="light" align="right" content={<div class="demo-register-tip" style={{width: '240px', "white-space": 'normal'}}>
            <div class="demo-register-tip-title">
                强度：{ strong() }
            </div>
            <Progress value={percent()} hidePercent strokeWidth={6} strokeColor={color()} />
            <div class="demo-register-tip-desc">
                请至少输入 6 个字符。请不要使用容易被猜到的密码。
            </div>
        </div>}>
            <Password name='password' rules={{pw: (v: string) => {
                if (v.length < 6) {
                    return false;
                }
                return true;
            }}} messages={{pw: '密码不能少于6位'}} onInput={(v) => {
                onChangePassword(v);
            }}/>
        </Popover>
        <Password name='confirmPassword' rules={{equalTo: 'password'}} messages={{equalTo: '密码不匹配'}} placeholder="请输入确认密码"/>
        <Submit />
    </Login>
</div>`,_e=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"data",desc:"初始化数据",type:"Object",default:""},{name:"onSubmit",desc:"表单提交事件",type:"Function",default:""}],we=[{name:"label",desc:"表单项文案",type:"string",default:""},{name:"size",desc:"尺寸 small|large",type:"string",default:"large"},{name:"placeholder",desc:"placeholder",type:"string",default:"请输入用户名"},{name:"name",desc:"表单项name",type:"string",default:"username"},{name:"icon",desc:"图标",type:"JSXElement",default:'<Icon name="user"/>'},{name:"rules",desc:"验证规则",type:"Object",default:""},{name:"messages",desc:"验证错误提示信息",type:"Object",default:""},{name:"onInput",desc:"输入事件 value, event",type:"Function",default:""}],Ee=[{name:"label",desc:"表单项文案",type:"string",default:""},{name:"size",desc:"尺寸 small|large",type:"string",default:"large"},{name:"placeholder",desc:"placeholder",type:"string",default:"请输入密码"},{name:"name",desc:"表单项name",type:"string",default:"password"},{name:"icon",desc:"图标",type:"JSXElement",default:'<Icon name="lock"/>'},{name:"rules",desc:"验证规则",type:"Object",default:""},{name:"messages",desc:"验证错误提示信息",type:"Object",default:""},{name:"onInput",desc:"输入事件 value, event",type:"Function",default:""}],Fe=[{name:"label",desc:"表单项文案",type:"string",default:""},{name:"size",desc:"尺寸 small|large",type:"string",default:"large"},{name:"placeholder",desc:"placeholder",type:"string",default:"请输入密码"},{name:"name",desc:"表单项name",type:"string",default:"password"},{name:"icon",desc:"图标",type:"JSXElement",default:'<Icon name="lock"/>'},{name:"rules",desc:"验证规则",type:"Object",default:""},{name:"messages",desc:"验证错误提示信息",type:"Object",default:""},{name:"action",desc:"图形验证码获取地址",type:"string",default:""},{name:"field",desc:"前提校验的字段名称",type:"string",default:""},{name:"countDownNumber",desc:"倒计时初始数字",type:"number",default:"60"},{name:"onInput",desc:"输入事件 value, event",type:"Function",default:""},{name:"onGetCaptcha",desc:"点击获取验证码事件",type:"Function",default:""}],Pe=[{name:"onSubmit",desc:"表单提交事件",params:"valid, data"}],xe=[{id:"login_base",text:"基础用法"},{id:"login_get_captcha",text:"获取验证码"},{id:"login_img_captcha",text:"图形验证码"},{id:"login_init",text:"初始化"},{id:"login_custom_rule",text:"自定义校验及组合"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Login属性"},{id:"comp_usernameprops",text:"UserName属性"},{id:"comp_passwordprops",text:"Password属性"},{id:"comp_captchaprops",text:"Captcha属性"},{id:"comp_events",text:"事件"}],B={login_base:fe,login_get_captcha:ye,login_img_captcha:ve,login_init:Ce,login_custom_rule:be},A=y("<div>"),Se=y('<div class="sys-ctx-main-left">'),Be=y('<div class="demo-register-tip"><div class="demo-register-tip-title">强度：</div><div class="demo-register-tip-desc">请至少输入 6 个字符。请不要使用容易被猜到的密码。');function Te(){const[t,a]=f("强"),[o,u]=f(0),[l,c]=f(""),d=p=>{p.length<6?(a("太短"),c("#ed4014")):p.length<10?(a("中"),c("#ff9900")):(a("强"),c("#19be6b")),u((p.length>10?10:p.length)*10)};return[(()=>{const p=Se();return g(p,e(m,{dir:"v",size:32,get children(){return[e(h,{heading:2,children:"Login 登录"}),e(m,{id:"login_base",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const n=A();return n.style.setProperty("width","450px"),n.style.setProperty("margin","auto"),g(n,e(P,{onSubmit:(s,{u:r,p:i})=>{console.log(s,r,i)},get children(){return[e(j,{name:"u"}),e(S,{name:"p"}),e(x,{})]}})),n})(),e(b,{align:"left",get children(){return e(C,{type:"primary",children:"基础用法"})}}),e(F,{type:"secondary",spacing:"extended",children:"Input的基础用法"}),e(_,{get data(){return B.login_base}})]}})}}),e(m,{id:"login_get_captcha",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const n=A();return n.style.setProperty("width","450px"),n.style.setProperty("margin","auto"),g(n,e(P,{onSubmit:(s,{u:r,p:i})=>{console.log(s,r,i)},get children(){return[e(le,{}),e(O,{field:"mobile",onGetCaptcha:()=>{re.info("获取验证码")}}),e(x,{})]}})),n})(),e(b,{align:"left",get children(){return e(C,{type:"primary",children:"获取验证码"})}}),e(F,{type:"secondary",spacing:"extended",children:"Captcha 组件内置了验证码获取的逻辑。"}),e(_,{get data(){return B.login_get_captcha}})]}})}}),e(m,{id:"login_img_captcha",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const n=A();return n.style.setProperty("width","450px"),n.style.setProperty("margin","auto"),g(n,e(P,{onSubmit:(s,{u:r,p:i})=>{console.log(s,r,i)},get children(){return[e(j,{name:"username"}),e(S,{name:"password"}),e(O,{action:"https://zitie.cqb325.cn/cui/manager/user/captchaGet"}),e(x,{})]}})),n})(),e(b,{align:"left",get children(){return e(C,{type:"primary",children:"图形验证码"})}}),e(F,{type:"secondary",spacing:"extended",children:"Captcha 默认为获取验证码按钮，指定action属性后为图形验证码，点击可刷新验证码。"}),e(_,{get data(){return B.login_img_captcha}})]}})}}),e(m,{id:"login_init",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const n=A();return n.style.setProperty("width","450px"),n.style.setProperty("margin","auto"),g(n,e(P,{onSubmit:(s,{u:r,p:i})=>{console.log(s,r,i)},data:{u:"1111",p:"111"},get children(){return[e(j,{name:"u"}),e(S,{name:"p"}),e(x,{})]}})),n})(),e(b,{align:"left",get children(){return e(C,{type:"primary",children:"初始化"})}}),e(F,{type:"secondary",spacing:"extended",children:"Login的data属性可初始化登录表单"}),e(_,{get data(){return B.login_init}})]}})}}),e(m,{id:"login_custom_rule",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const n=A();return n.style.setProperty("width","450px"),n.style.setProperty("margin","auto"),g(n,e(P,{onSubmit:(s,{u:r,p:i})=>{console.log(s,r,i)},get children(){return[e(ce,{}),e(ne,{trigger:"click",arrow:!0,theme:"light",align:"right",get content(){return(()=>{const s=Be(),r=s.firstChild;r.firstChild;const i=r.nextSibling;return s.style.setProperty("width","240px"),s.style.setProperty("white-space","normal"),g(r,t,null),g(s,e(oe,{get value(){return o()},hidePercent:!0,strokeWidth:6,get strokeColor(){return l()}}),i),s})()},get children(){return e(S,{name:"password",rules:{pw:s=>!(s.length<6)},messages:{pw:"密码不能少于6位"},onInput:s=>{d(s)}})}}),e(S,{name:"confirmPassword",rules:{equalTo:"password"},messages:{equalTo:"密码不匹配"},placeholder:"请输入确认密码"}),e(x,{})]}})),n})(),e(b,{align:"left",get children(){return e(C,{type:"primary",children:"自定义校验及组合"})}}),e(F,{type:"secondary",spacing:"extended",children:"各组件都有默认的校验规则 rules，不过也可以根据场景自定义，比如实现一个密码二次确认的校验。 还可以结合其它组件，实现更复杂的业务功能，比如示例的密码强度。"}),e(_,{get data(){return B.login_custom_rule}})]}})}}),e(m,{dir:"v",size:24,id:"comp_api",get children(){return[e(h,{type:"primary",heading:3,children:"API"}),e(m,{id:"comp_props",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"Login Props"}),e(w,{columns:L,data:_e,border:!0,size:"small"})]}}),e(m,{id:"comp_usernameprops",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"UserName Props"}),e(w,{columns:L,data:we,border:!0,size:"small"})]}}),e(m,{id:"comp_passwordprops",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"Password Props"}),e(w,{columns:L,data:Ee,border:!0,size:"small"})]}}),e(m,{id:"comp_captchaprops",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"Captcha Props"}),e(w,{columns:L,data:Fe,border:!0,size:"small"})]}}),e(m,{id:"comp_events",dir:"v",get children(){return[e(h,{type:"primary",heading:4,children:"Events"}),e(w,{columns:se,data:Pe,border:!0,size:"small"})]}})]}})]}})),p})(),e(ae,{data:xe})]}export{Te as default};
