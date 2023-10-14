import{N as k,O as w,e as z,i as M,a as e,Q as n,j as N,t as x,u as S,k as L,R as j,l as O,c as P,S as a,U as I,W as m,I as t,T as r,P as A,B as $,d as F}from"./index-425dee0a.js";import{T as p}from"./Title-1e253d7e.js";import{C as E}from"./index-e48e332f.js";import{D as b,a as y,C as R}from"./code-22357574.js";import{p as C,e as Q}from"./columns-cd2d5c33.js";import{h as U}from"./hljs-a77543c9.js";const W=x('<li><ul class="cm-menu-group-list">');function d(l){l.name||console.warn("MenuGroup need name prop");const v=()=>O(l,"cm-menu-group"),c=k();let o,h;return w(()=>{const u=o.parentElement.getAttribute("x-padding");o.setAttribute("x-padding",u),h.setAttribute("x-padding",u);const i=o.parentElement.getAttribute("x-name"),s={name:l.name,parent:null,children:[]};if(c&&l.name)if(c.treeMap[l.name]=s,i==="__root")c?.tree.push(s);else{const g=c.treeMap[i];s.parent=g,g.children.push(s)}}),z(()=>{let u=!1;if(c&&o){const i=o.parentElement.getAttribute("x-name");u=c.store.min&&i==="__root"}!u&&c?.dir==="v"&&setTimeout(()=>{const i=o.parentElement.getAttribute("x-padding"),s=parseInt(i)+16;o.setAttribute("x-padding",i),h.setAttribute("x-padding",s)})}),(()=>{const u=W(),i=u.firstChild,s=o;typeof s=="function"?S(s,u):o=u,M(u,e(n,{get icon(){return l.icon},isSubmenuTitle:!0,get children(){return l.title}}),i);const g=h;return typeof g=="function"?S(g,i):h=i,M(i,()=>l.children),N(B=>{const T=v(),G=l.name;return B._v$=L(u,T,B._v$),G!==B._v$2&&j(i,"x-name",B._v$2=G),B},{_v$:void 0,_v$2:void 0}),u})()}const q=`<Menu dir='h'>
    <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
        <SubMenu name='11' title='添加' align='rightTop'>
            <MenuItem name='111'>添加超管</MenuItem>
            <MenuItem name='112'>添加职员</MenuItem>
        </SubMenu>
        <MenuItem name='12'>修改</MenuItem>
        <MenuItem name='13'>删除</MenuItem>
    </SubMenu>
    <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
    <MenuItem name='31' icon={<Icon name='list'/>}>菜单管理</MenuItem>
    <MenuItem name='33' icon={<Icon name='tool'/>}>权限管理</MenuItem>
    <SubMenu name='32' title='字典管理' icon={<Icon name='cog'/>}>
        <MenuGroup name='321' title="系统字典">
            <MenuItem name='3211'>添加</MenuItem>
            <MenuItem name='3212'>修改</MenuItem>
            <MenuItem name='3213'>删除</MenuItem>
        </MenuGroup>
        <MenuGroup name='322' title="客户字典">
            <MenuItem name='3221'>添加</MenuItem>
            <MenuItem name='3222'>修改</MenuItem>
            <MenuItem name='3223'>删除</MenuItem>
        </MenuGroup>
    </SubMenu>
</Menu>`,H=`const [activeName, setActiveName] = createSignal('2');

<div style={{width: '220px', 'border-right': '1px solid var(--cui-color-border)'}}>
    <Menu dir='v' activeName={[activeName, setActiveName]}>
        <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
            <MenuItem name='11'>添加</MenuItem>
            <MenuItem name='12'>修改</MenuItem>
            <MenuItem name='13'>删除</MenuItem>
        </SubMenu>
        <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
        <SubMenu name='3' icon={<Icon name='cog'/>} title='系统管理'>
            <MenuItem name='31'>菜单管理</MenuItem>
            <SubMenu name='32' title='字典管理'>
                <MenuGroup name='321' title="系统字典">
                    <MenuItem name='3211'>添加</MenuItem>
                    <MenuItem name='3212'>修改</MenuItem>
                    <MenuItem name='3213'>删除</MenuItem>
                </MenuGroup>
                <MenuGroup name='322' title="客户字典">
                    <MenuItem name='3221'>添加</MenuItem>
                    <MenuItem name='3222'>修改</MenuItem>
                    <MenuItem name='3223'>删除</MenuItem>
                </MenuGroup>
            </SubMenu>
            <MenuItem name='33'>权限管理</MenuItem>
        </SubMenu>
    </Menu>
    <Button onClick={() => {
        setActiveName('3212');
    }}>选中指定菜单</Button>
</div>`,J=`<div style={{width: '220px', 'border-right': '1px solid var(--cui-color-border)'}}>
    <Menu dir='v' accordion>
        <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
            <MenuItem name='11'>添加</MenuItem>
            <MenuItem name='12'>修改</MenuItem>
            <MenuItem name='13'>删除</MenuItem>
        </SubMenu>
        <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
        <SubMenu name='3' icon={<Icon name='cog'/>} title='系统管理'>
            <MenuItem name='31'>菜单管理</MenuItem>
            <SubMenu name='32' title='字典管理'>
                <MenuGroup name='321' title="系统字典">
                    <MenuItem name='3211'>添加</MenuItem>
                    <MenuItem name='3212'>修改</MenuItem>
                    <MenuItem name='3213'>删除</MenuItem>
                </MenuGroup>
                <MenuGroup name='322' title="客户字典">
                    <MenuItem name='3221'>添加</MenuItem>
                    <MenuItem name='3222'>修改</MenuItem>
                    <MenuItem name='3223'>删除</MenuItem>
                </MenuGroup>
            </SubMenu>
            <MenuItem name='33'>权限管理</MenuItem>
        </SubMenu>
    </Menu>
</div>`,K=`<Space dir="v">
    <Menu dir='h' theme='dark'>
        <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
            <SubMenu name='11' title='添加' align='rightTop'>
                <MenuItem name='111'>添加超管</MenuItem>
                <MenuItem name='112'>添加职员</MenuItem>
            </SubMenu>
            <MenuItem name='12'>修改</MenuItem>
            <MenuItem name='13'>删除</MenuItem>
        </SubMenu>
        <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
        <MenuItem name='31' icon={<Icon name='list'/>}>菜单管理</MenuItem>
        <MenuItem name='33' icon={<Icon name='tool'/>}>权限管理</MenuItem>
        <SubMenu name='32' title='字典管理' icon={<Icon name='cog'/>}>
            <MenuGroup name='321' title="系统字典">
                <MenuItem name='3211'>添加</MenuItem>
                <MenuItem name='3212'>修改</MenuItem>
                <MenuItem name='3213'>删除</MenuItem>
            </MenuGroup>
            <MenuGroup name='322' title="客户字典">
                <MenuItem name='3221'>添加</MenuItem>
                <MenuItem name='3222'>修改</MenuItem>
                <MenuItem name='3223'>删除</MenuItem>
            </MenuGroup>
        </SubMenu>
    </Menu>

    <div style={{width: '220px', 'border-right': '1px solid #ccc'}}>
        <Menu dir='v' theme='dark'>
            <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
                <MenuItem name='11'>添加</MenuItem>
                <MenuItem name='12'>修改</MenuItem>
                <MenuItem name='13'>删除</MenuItem>
            </SubMenu>
            <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
            <SubMenu name='3' icon={<Icon name='cog'/>} title='系统管理'>
                <MenuItem name='31'>菜单管理</MenuItem>
                <SubMenu name='32' title='字典管理'>
                    <MenuGroup name='321' title="系统字典">
                        <MenuItem name='3211'>添加</MenuItem>
                        <MenuItem name='3212'>修改</MenuItem>
                        <MenuItem name='3213'>删除</MenuItem>
                    </MenuGroup>
                    <MenuGroup name='322' title="客户字典">
                        <MenuItem name='3221'>添加</MenuItem>
                        <MenuItem name='3222'>修改</MenuItem>
                        <MenuItem name='3223'>删除</MenuItem>
                    </MenuGroup>
                </SubMenu>
                <MenuItem name='33'>权限管理</MenuItem>
            </SubMenu>
        </Menu>
    </div>
</Space>`,V=`const [min, setMin] = createSignal(true);

<div style={{width: min() ? '80px' : '280px', 'transition': 'all 0.25s ease-in-out', 'border-right': '1px solid var(--cui-color-border)'}}>
    <Menu dir='v' accordion min={min()}>
        <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
            <MenuItem name='11'>添加</MenuItem>
            <MenuItem name='12'>修改</MenuItem>
            <MenuItem name='13'>删除</MenuItem>
        </SubMenu>
        <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
        <MenuItem name='31' icon={<Icon name='list'/>}>菜单管理</MenuItem>
        <MenuItem name='33' icon={<Icon name='tool'/>}>权限管理</MenuItem>
        <SubMenu name='32' title='字典管理' icon={<Icon name='cog'/>}>
            <MenuGroup name='321' title="系统字典">
                <MenuItem name='3211'>添加</MenuItem>
                <MenuItem name='3212'>修改</MenuItem>
                <MenuItem name='3213'>删除</MenuItem>
            </MenuGroup>
            <MenuGroup name='322' title="客户字典">
                <MenuItem name='3221'>添加</MenuItem>
                <MenuItem name='3222'>修改</MenuItem>
                <MenuItem name='3223'>删除</MenuItem>
            </MenuGroup>
        </SubMenu>
    </Menu>
    <Button onClick={() => {
        setMin(!min());
    }}>展开/收缩</Button>
</div>`,X=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"accordion",desc:"展开方式使用手风琴方式",type:"boolean",default:"false"},{name:"theme",desc:"主题色 dark|light",type:"string",default:"light"},{name:"dir",desc:"横向菜单或侧边菜单 v|h",type:"string",default:"v"},{name:"min",desc:"最小化菜单",type:"boolean",default:"false"},{name:"activeName",desc:"默认选中菜单项，绑定属性",type:"Function[]",default:""},{name:"onSelect",desc:"选择菜单项选中事件",type:"Function",default:""}],Y=[{name:"name",desc:"菜单项名称",type:"string",default:""},{name:"disabled",desc:"禁用状态",type:"boolean",default:""},{name:"icon",desc:"图标",type:"Icon",default:""},{name:"data",desc:"自定义的数据,在选中的时候携带",type:"any",default:""}],Z=[{name:"name",desc:"菜单项名称",type:"string",default:""},{name:"align",desc:"子菜单显示位置 bottom | right | bottomLeft | bottomRight | rightTop | left | leftTop",type:"string",default:"横向菜单bottom，侧边菜单rightTop"},{name:"icon",desc:"图标",type:"Icon",default:""},{name:"title",desc:"菜单文案",type:"any",default:""}],ee=[{name:"name",desc:"菜单项名称",type:"string",default:""},{name:"icon",desc:"图标",type:"Icon",default:""},{name:"title",desc:"菜单文案",type:"any",default:""}],ne=[{name:"OnSelect",desc:"选择菜单项选中事件",params:"name, data"}],ue=[{id:"menu_base",text:"横向菜单"},{id:"menu_vertical",text:"侧边菜单"},{id:"menu_accordion",text:"手风琴方式"},{id:"menu_theme",text:"主题"},{id:"menu_min",text:"最小化菜单"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_menu_item_props",text:"菜单项属性"},{id:"comp_submenu_props",text:"子菜单属性"},{id:"comp_menugroup_props",text:"菜单组属性"},{id:"comp_events",text:"事件"}],D={menu_base:q,menu_vertical:H,menu_accordion:J,menu_theme:K,menu_min:V},f=x("<br>"),_=x("<div>"),te=x('<div class="sys-ctx-main-left">');function le(){const[l,v]=P("2"),[c,o]=P(!0);return[(()=>{const h=te();return S(U,h,()=>""),M(h,e(a,{dir:"v",size:32,get children(){return[e(p,{heading:2,children:"Menu 导航菜单"}),e(a,{id:"menu_base",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[e(I,{dir:"h",get children(){return[e(m,{name:"1",get icon(){return e(t,{name:"users"})},title:"角色管理",get children(){return[e(m,{name:"11",title:"添加",align:"rightTop",get children(){return[e(n,{name:"111",children:"添加超管"}),e(n,{name:"112",children:"添加职员"})]}}),e(n,{name:"12",children:"修改"}),e(n,{name:"13",children:"删除"})]}}),e(n,{name:"2",get icon(){return e(t,{name:"user"})},children:"用户管理"}),e(n,{name:"31",get icon(){return e(t,{name:"list"})},children:"菜单管理"}),e(n,{name:"33",get icon(){return e(t,{name:"tool"})},children:"权限管理"}),e(m,{name:"32",title:"字典管理",get icon(){return e(t,{name:"cog"})},get children(){return[e(d,{name:"321",title:"系统字典",get children(){return[e(n,{name:"3211",children:"添加"}),e(n,{name:"3212",children:"修改"}),e(n,{name:"3213",children:"删除"})]}}),e(d,{name:"322",title:"客户字典",get children(){return[e(n,{name:"3221",children:"添加"}),e(n,{name:"3222",children:"修改"}),e(n,{name:"3223",children:"删除"})]}})]}})]}}),e(b,{align:"left",get children(){return e(r,{type:"primary",children:"横向菜单"})}}),e(A,{type:"secondary",spacing:"extended",get children(){return["菜单项包含 ",e(r,{code:!0,children:"MenuItem"}),"、",e(r,{code:!0,children:"SubMenu"}),"、",e(r,{code:!0,children:"MenuGroup"}),f(),"横向菜单需指定 ",e(r,{code:!0,children:"dir"})," 为 ",e(r,{code:!0,children:"h"}),f(),"横向菜单的子菜单触发条件为hover"]}}),e(y,{get data(){return D.menu_base}})]}})}}),e(a,{id:"menu_vertical",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const u=_();return u.style.setProperty("width","220px"),u.style.setProperty("border-right","1px solid var(--cui-color-border)"),M(u,e(I,{dir:"v",activeName:[l,v],get children(){return[e(m,{name:"1",get icon(){return e(t,{name:"users"})},title:"角色管理",get children(){return[e(n,{name:"11",children:"添加"}),e(n,{name:"12",children:"修改"}),e(n,{name:"13",children:"删除"})]}}),e(n,{name:"2",get icon(){return e(t,{name:"user"})},children:"用户管理"}),e(m,{name:"3",get icon(){return e(t,{name:"cog"})},title:"系统管理",get children(){return[e(n,{name:"31",children:"菜单管理"}),e(m,{name:"32",title:"字典管理",get children(){return[e(d,{name:"321",title:"系统字典",get children(){return[e(n,{name:"3211",children:"添加"}),e(n,{name:"3212",children:"修改"}),e(n,{name:"3213",children:"删除"})]}}),e(d,{name:"322",title:"客户字典",get children(){return[e(n,{name:"3221",children:"添加"}),e(n,{name:"3222",children:"修改"}),e(n,{name:"3223",children:"删除"})]}})]}}),e(n,{name:"33",children:"权限管理"})]}})]}}),null),M(u,e($,{onClick:()=>{v("3212")},children:"选中指定菜单"}),null),u})(),e(b,{align:"left",get children(){return e(r,{type:"primary",children:"侧边菜单"})}}),e(A,{type:"secondary",spacing:"extended",get children(){return["侧边菜单需指定 ",e(r,{code:!0,children:"dir"})," 为 ",e(r,{code:!0,children:"v"}),f(),"默认选中的菜单可指定 ",e(r,{code:!0,children:"activeName"}),"，如果选中的菜单项为子菜单，默认展开父菜单项,",e(r,{code:!0,children:"activeName"}),"属性为绑定可控属性"]}}),e(y,{get data(){return D.menu_vertical}})]}})}}),e(a,{id:"menu_accordion",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const u=_();return u.style.setProperty("width","220px"),u.style.setProperty("border-right","1px solid var(--cui-color-border)"),M(u,e(I,{dir:"v",accordion:!0,get children(){return[e(m,{name:"1",get icon(){return e(t,{name:"users"})},title:"角色管理",get children(){return[e(n,{name:"11",children:"添加"}),e(n,{name:"12",children:"修改"}),e(n,{name:"13",children:"删除"})]}}),e(n,{name:"2",get icon(){return e(t,{name:"user"})},children:"用户管理"}),e(m,{name:"3",get icon(){return e(t,{name:"cog"})},title:"系统管理",get children(){return[e(n,{name:"31",children:"菜单管理"}),e(m,{name:"32",title:"字典管理",get children(){return[e(d,{name:"321",title:"系统字典",get children(){return[e(n,{name:"3211",children:"添加"}),e(n,{name:"3212",children:"修改"}),e(n,{name:"3213",children:"删除"})]}}),e(d,{name:"322",title:"客户字典",get children(){return[e(n,{name:"3221",children:"添加"}),e(n,{name:"3222",children:"修改"}),e(n,{name:"3223",children:"删除"})]}})]}}),e(n,{name:"33",children:"权限管理"})]}})]}})),u})(),e(b,{align:"left",get children(){return e(r,{type:"primary",children:"手风琴方式"})}}),e(A,{type:"secondary",spacing:"extended",get children(){return["侧边菜单指定 ",e(r,{code:!0,children:"accordion"})," 属性，可以让菜单的打开方式支持手风琴方式",f()]}}),e(y,{get data(){return D.menu_accordion}})]}})}}),e(a,{id:"menu_theme",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(I,{dir:"h",theme:"dark",get children(){return[e(m,{name:"1",get icon(){return e(t,{name:"users"})},title:"角色管理",get children(){return[e(m,{name:"11",title:"添加",align:"rightTop",get children(){return[e(n,{name:"111",children:"添加超管"}),e(n,{name:"112",children:"添加职员"})]}}),e(n,{name:"12",children:"修改"}),e(n,{name:"13",children:"删除"})]}}),e(n,{name:"2",get icon(){return e(t,{name:"user"})},children:"用户管理"}),e(n,{name:"31",get icon(){return e(t,{name:"list"})},children:"菜单管理"}),e(n,{name:"33",get icon(){return e(t,{name:"tool"})},children:"权限管理"}),e(m,{name:"32",title:"字典管理",get icon(){return e(t,{name:"cog"})},get children(){return[e(d,{name:"321",title:"系统字典",get children(){return[e(n,{name:"3211",children:"添加"}),e(n,{name:"3212",children:"修改"}),e(n,{name:"3213",children:"删除"})]}}),e(d,{name:"322",title:"客户字典",get children(){return[e(n,{name:"3221",children:"添加"}),e(n,{name:"3222",children:"修改"}),e(n,{name:"3223",children:"删除"})]}})]}})]}}),(()=>{const u=_();return u.style.setProperty("width","220px"),u.style.setProperty("border-right","1px solid #ccc"),M(u,e(I,{dir:"v",theme:"dark",get children(){return[e(m,{name:"1",get icon(){return e(t,{name:"users"})},title:"角色管理",get children(){return[e(n,{name:"11",children:"添加"}),e(n,{name:"12",children:"修改"}),e(n,{name:"13",children:"删除"})]}}),e(n,{name:"2",get icon(){return e(t,{name:"user"})},children:"用户管理"}),e(m,{name:"3",get icon(){return e(t,{name:"cog"})},title:"系统管理",get children(){return[e(n,{name:"31",children:"菜单管理"}),e(m,{name:"32",title:"字典管理",get children(){return[e(d,{name:"321",title:"系统字典",get children(){return[e(n,{name:"3211",children:"添加"}),e(n,{name:"3212",children:"修改"}),e(n,{name:"3213",children:"删除"})]}}),e(d,{name:"322",title:"客户字典",get children(){return[e(n,{name:"3221",children:"添加"}),e(n,{name:"3222",children:"修改"}),e(n,{name:"3223",children:"删除"})]}})]}}),e(n,{name:"33",children:"权限管理"})]}})]}})),u})()]}}),e(b,{align:"left",get children(){return e(r,{type:"primary",children:"菜单主题"})}}),e(A,{type:"secondary",spacing:"extended",get children(){return["菜单主题通过 ",e(r,{code:!0,children:"theme"})," 属性设置 支持 ",e(r,{code:!0,children:"light"}),"、",e(r,{code:!0,children:"dark"})]}}),e(y,{get data(){return D.menu_theme}})]}})}}),e(a,{id:"menu_min",dir:"v",get children(){return e(E,{bordered:!0,get children(){return[(()=>{const u=_();return u.style.setProperty("transition","all 0.25s ease-in-out"),u.style.setProperty("border-right","1px solid var(--cui-color-border)"),M(u,e(I,{dir:"v",accordion:!0,get min(){return c()},get children(){return[e(m,{name:"1",get icon(){return e(t,{name:"users"})},title:"角色管理",get children(){return[e(n,{name:"11",children:"添加"}),e(n,{name:"12",children:"修改"}),e(n,{name:"13",children:"删除"})]}}),e(n,{name:"2",get icon(){return e(t,{name:"user"})},children:"用户管理"}),e(n,{name:"31",get icon(){return e(t,{name:"list"})},children:"菜单管理"}),e(n,{name:"33",get icon(){return e(t,{name:"tool"})},children:"权限管理"}),e(m,{name:"32",title:"字典管理",get icon(){return e(t,{name:"cog"})},get children(){return[e(d,{name:"321",title:"系统字典",get children(){return[e(n,{name:"3211",children:"添加"}),e(n,{name:"3212",children:"修改"}),e(n,{name:"3213",children:"删除"})]}}),e(d,{name:"322",title:"客户字典",get children(){return[e(n,{name:"3221",children:"添加"}),e(n,{name:"3222",children:"修改"}),e(n,{name:"3223",children:"删除"})]}})]}})]}}),null),M(u,e($,{onClick:()=>{o(!c())},children:"展开/收缩"}),null),N(()=>(c()?"80px":"280px")!=null?u.style.setProperty("width",c()?"80px":"280px"):u.style.removeProperty("width")),u})(),e(b,{align:"left",get children(){return e(r,{type:"primary",children:"最小化菜单"})}}),e(A,{type:"secondary",spacing:"extended",get children(){return["菜单最小化的顶级菜单需添加图标，最小化后只显示图标，最小化的 ",e(r,{code:!0,children:"min"})," 参数为可控绑定属性"]}}),e(y,{get data(){return D.menu_min}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(p,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"Menu Props"}),e(F,{columns:C,data:X,border:!0,size:"small"})]}}),e(a,{id:"comp_menu_item_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"MenuItem Props"}),e(F,{columns:C,data:Y,border:!0,size:"small"})]}}),e(a,{id:"comp_submenu_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"SubMenu Props"}),e(F,{columns:C,data:Z,border:!0,size:"small"})]}}),e(a,{id:"comp_menugroup_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"MenuGroup Props"}),e(F,{columns:C,data:ee,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"Events"}),e(F,{columns:Q,data:ne,border:!0,size:"small"})]}})]}})]}})),h})(),e(R,{data:ue})]}export{le as default};
