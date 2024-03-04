import{C as U}from"./index-2421ba35.js";import{R as G}from"./index-a310aa05.js";import{I as R}from"./input-c3514f51.js";import{C as A,a5 as F,m as T,h as w,j as P,s as H,t as y,k as L,a as t,I as B,c as k,d as I,i as _,g as E,D as j,S as V,B as z,E as M,Q as a,R as O}from"./index-012dff6d.js";import{c as D}from"./createField-0624a138.js";import{S as Q}from"./index-b3a84b51.js";import{S as Y}from"./index-aefa1e3f.js";import{R as q}from"./index-db4c6845.js";import{S as J}from"./index-58d2b256.js";import{A as N}from"./index-da7e8516.js";import{C as W}from"./index-084c0867.js";import{c as x,S as X,H as Z,A as p,R as ee,t as te,T as ne,D as re}from"./Recommend-69918709.js";import{S as ae}from"./index-a16afdb1.js";import{T as le}from"./index-cdc29ff8.js";const ie=y('<div><textarea class="cm-input">');function ce(e){const[n,h]=A(e,["classList","class","style","value","autoHeight","disabled","onChange","onInput","onKeyUp","onEnter","name","trigger"]),s=()=>L(n,"cm-textarea","cm-input-wrapper",{"cm-input-disabled":n.disabled,"cm-input-auto-height":n.autoHeight}),[l,d]=D(e,""),c=n.trigger||"blur",g=r=>{},m=r=>{d(r.target.value),n.onChange&&n.onChange(r.target.value)},$=r=>{c==="input"&&(d(r.target.value),n.onChange&&n.onChange(r.target.value)),n.onInput&&n.onInput(r.target.value,r),n.autoHeight&&C(r)},b=r=>{n.onKeyUp&&n.onKeyUp(r.target.value,r),r.keyCode===13&&n.onEnter&&n.onEnter(r.target.value,r)};let v;const C=r=>{const i=r.target;v||(v=i.clientHeight),i.scrollHeight>v&&(i.value.split(`
`).length===1?i.style.height=`${v}px`:i.style.height="auto",i.style.overflowY="hidden",i.scrollTop=0,i.style.height=`${i.scrollHeight}px`)};return(()=>{const r=ie(),i=r.firstChild;return F(i,T(h,{get value(){return l()},spellcheck:!1,autocomplete:"off",wrap:"soft",onChange:g,onInput:$,onKeyUp:b,onBlur:m}),!1,!1),w(f=>{const u=s(),o=e.style;return f._v$=P(r,u,f._v$),f._v$2=H(r,o,f._v$2),f},{_v$:void 0,_v$2:void 0}),r})()}function ue(e){const[n,h]=A(e,["enterButton","onEnter","onSearch"]),s=n.enterButton?null:t(B,{name:"search",style:{cursor:"pointer"},get onClick(){return n.onSearch}});let l=null;return n.enterButton&&(l=typeof n.enterButton=="string"?n.enterButton:t(B,{name:"search",get onClick(){return n.onSearch}})),t(R,T({get onEnter(){return n.onEnter},suffix:s,append:l},h))}const oe=y('<div class="cm-select-color">'),se=y('<div class="cm-color-picker-value" tabindex="0"><span>A</span><input type="hidden"><div class="cm-select-color-wrap">'),ge=y('<div class="cm-select-color cm-select-color-empty">');function he(e){const[n,h]=k({});return I(()=>{const s=e.open?{background:`rgba(${e.currentValue.rgba.r},${e.currentValue.rgba.g},${e.currentValue.rgba.b},${e.currentValue.rgba.a})`}:{background:e.value};h(s)}),(()=>{const s=se(),l=s.firstChild,d=l.nextSibling,c=d.nextSibling;return l.style.setProperty("width","0px"),l.style.setProperty("font-size","12px"),l.style.setProperty("visibility","hidden"),l.style.setProperty("line-height","initial"),_(c,t(E,{get when(){return n().background},get fallback(){return(()=>{const g=ge();return _(g,t(B,{name:"x",size:12})),g})()},get children(){const g=oe();return w(m=>H(g,n(),m)),g}})),w(()=>j(d,"name",e.name)),w(()=>d.value=e.value),s})()}const de=y("<div>"),me=y('<div class="cm-color-picker-confirm">'),fe=y('<div class="cm-color-picker-wrap">');function ye(e){const[n,h]=k(!1),s=e.align??"bottomLeft",[l,d]=D(e,""),[c,g]=k(x(l()||"#2D8CF0")),[m,$]=k("");let b=c();const v=()=>L(e,"cm-color-picker",{[`cm-color-picker-${e.size}`]:e.size}),C=u=>{r(u)},r=(u,o)=>{b=c().hsl.h,g(x(u,o||b))},i=()=>{h(!1),d(m()),e.onChange&&e.onChange(m())},f=()=>{h(!1),d(""),e.onChange&&e.onChange("")};return I(()=>{e.alpha?$(te(c().rgba)):$(c().hex)}),I(()=>{const u=x(m());g(u)}),(()=>{const u=de();return _(u,t(M,{get transfer(){return e.transfer},align:s,get disabled(){return e.disabled},trigger:"click",visible:[n,h],get menu(){return(()=>{const o=fe();return _(o,t(V,{dir:"v",get children(){return[t(X,{get value(){return c()},onChange:C}),t(Z,{get value(){return c()},onChange:C}),t(E,{get when(){return e.alpha},get children(){return t(p,{get value(){return c()},onChange:C})}}),t(E,{get when(){return e.recommend},get children(){return t(ee,{get colors(){return e.colors},onChange:C})}}),(()=>{const S=me();return _(S,t(V,{dir:"h",get children(){return[t(ve,{size:"small",class:"cm-color-picker-input",value:[m,$]}),t(z,{size:"small",type:"default",onClick:f,children:"清除"}),t(z,{size:"small",type:"primary",onClick:i,children:"确定"})]}})),S})()]}})),o})()},get children(){return t(he,{get disabled(){return e.disabled},get size(){return e.size},get currentValue(){return c()},get value(){return l()},get open(){return n()}})}})),w(o=>{const S=v(),K=e.style;return o._v$=P(u,S,o._v$),o._v$2=H(u,K,o._v$2),o},{_v$:void 0,_v$2:void 0}),u})()}function ve(e){return t(O,{get fallback(){return t(R,e)},get children(){return[t(a,{get when(){return e.type==="text"||!e.type||e.type==="password"},get children(){return t(R,e)}}),t(a,{get when(){return e.type==="checkbox"},get children(){return t(U,e)}}),t(a,{get when(){return e.type==="radio"},get children(){return t(G,e)}}),t(a,{get when(){return e.type==="textarea"},get children(){return t(ce,e)}}),t(a,{get when(){return e.type==="switch"},get children(){return t(Q,e)}}),t(a,{get when(){return e.type==="search"},get children(){return t(ue,e)}}),t(a,{get when(){return e.type==="spinner"},get children(){return t(Y,e)}}),t(a,{get when(){return e.type==="rate"},get children(){return t(q,e)}}),t(a,{get when(){return e.type==="select"},get children(){return t(J,e)}}),t(a,{get when(){return e.type==="autocomplete"},get children(){return t(N,e)}}),t(a,{get when(){return e.type==="cascader"},get children(){return t(W,e)}}),t(a,{get when(){return e.type==="time"||e.type==="timeRange"},get children(){return t(ne,e)}}),t(a,{get when(){return e.type==="date"||e.type==="dateRange"||e.type==="month"||e.type==="monthRange"||e.type==="dateTime"||e.type==="dateTimeRange"},get children(){return t(re,e)}}),t(a,{get when(){return e.type==="slider"},get children(){return t(ae,e)}}),t(a,{get when(){return e.type==="treeSelect"},get children(){return t(le,e)}}),t(a,{get when(){return e.type==="color"},get children(){return t(ye,e)}})]}})}export{ye as C,ve as I};