import{O as N,c as T,a4 as A,i as v,a as d,g as x,I as P,$ as R,h as _,j as k,t as C,F as L,a5 as Z,E as q,d as E,D as B,Z as G,k as H,_ as K}from"./index-5e251d81.js";import{V as Q}from"./Value-bf1a2078.js";import{c as U}from"./createField-7b35bf70.js";const W=C('<div><span class="cm-cascader-text">');function X(e){const[r,n]=e.store,i=()=>r.selectedValue.includes(e.data.value),h=()=>({"cm-cascader-item":!0,"cm-cascader-item-active":i(),"cm-cascader-item-disabled":e.data.disabled}),s=ae(),[$,u]=T(!1),S=async()=>{if(!e.data.disabled){if(e.data.loading&&s&&s.loadData)try{u(!0);const a=await s.loadData(e.data);s&&s.addChildren(e.data,a),e.data.loading=!1}catch{}finally{u(!1)}e.trigger==="click"&&f(),s&&s.onSelect(e.data)}},f=()=>{const a=[];for(let o=0;o<e.level;o++)a.push(r.selectedValue[o]);a[e.level]=e.data.value,n("selectedValue",a)};let m=null;const D=()=>{e.data.disabled||(m&&clearTimeout(m),m=setTimeout(()=>{f()},100))};return(()=>{const a=W(),o=a.firstChild;return A(a,"mouseenter",e.trigger==="hover"?D:void 0),a.$$click=S,v(a,()=>e.data.icon,o),v(o,()=>e.data.title),v(a,d(x,{get when(){return e.data.children&&e.data.children.length||e.data.loading},get children(){return d(x,{get when(){return $()},get fallback(){return d(P,{name:"chevron-right",class:"cm-menu-submenu-cert"})},get children(){return d(R,{color:"#1890ff"})}})}}),null),_(b=>k(a,h(),b)),a})()}N(["click"]);const Y=C('<div class="cm-cascader-list">');function p(e){const[r,n]=e.store,i=()=>e.data;return(()=>{const h=Y();return v(h,d(L,{get each(){return i()},children:s=>d(X,{get trigger(){return e.trigger},get data(){return e.mapData[s]},store:[r,n],get level(){return e.level}})})),h})()}const ee=C('<div tabindex="0">'),te=C('<div class="cm-cascader-wrap">'),w=G();function y(e,r){e&&e.length&&e.forEach(n=>{r.push(n),n.children&&y(n.children,r)})}function I(e,r){e&&e.length&&e.forEach(n=>{r[n.value]=n,n.children&&I(n.children,r)})}function re(e){const[r,n]=Z(e,"visible",!1),[i,h]=U(e,[]),s=e.trigger??"click",$=[],u={},S=JSON.parse(JSON.stringify(e.data));y(e.data,$),I(S,u);const[f,m]=q({selectedValue:i()||[],columns:[]}),D=e.seperator??"/",a=e.align??"bottomLeft",o=()=>H(e,"cm-cascader",{"cm-cascader-disabled":e.disabled,"cm-cascader-clearable":!e.disabled&&e.clearable&&i()&&i().length,[`cm-cascader-${e.size}`]:e.size}),b={},M=e.data.map(t=>t.value);E(()=>{const t=i()||[];m("selectedValue",[...t])}),E(()=>{const t=f.selectedValue,c=[M];t&&t.length&&t.forEach(l=>{if(b[l])c.push(b[l]);else{const g=u[l];if(g&&g.children){const V=g.children.map(J=>J.value);b[l]=V,c.push(V)}}}),m("columns",c)});const z=()=>{const t=i(),c=t?t.map(l=>u[l].title):[];return c.length?c.join(D):""},O=t=>{if(!(t.children&&t.children.length)||e.changeOnSelect){e.onSelect&&e.onSelect(t);const l=f.selectedValue.map(g=>g);h(l),e.onChange&&e.onChange(l)}t.children&&t.children.length||n(!1)},F=(t,c)=>{t.loading=!1,t.children=c,c.forEach(l=>{u[l.value]=l})},j=()=>{h([]),e.onChange&&e.onChange([])};return d(w.Provider,{get value(){return{onSelect:O,loadData:e.loadData,addChildren:F}},get children(){const t=ee();return v(t,d(B,{visible:[r,n],get transfer(){return e.transfer},align:a,get revers(){return e.revers},trigger:"click",get disabled(){return e.disabled},get menu(){return(()=>{const c=te();return v(c,d(L,{get each(){return f.columns},children:(l,g)=>d(p,{data:l,trigger:s,store:[f,m],mapData:u,get level(){return g()}})})),c})()},get children(){return d(Q,{get prepend(){return e.prepend},get text(){return z()},onClear:j,get clearable(){return e.clearable},get placeholder(){return e.placeholder},get disabled(){return e.disabled},get size(){return e.size}})}})),_(c=>k(t,o(),c)),t}})}const ae=()=>K(w);export{re as C};