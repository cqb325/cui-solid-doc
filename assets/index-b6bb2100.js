import{p as E,i,a as s,t as u,$ as z,f as F,F as M,h as R,y as j,g as f,c as x,L as q,I as L,j as B,s as U,k as V,u as W,w as A,a0 as D,a1 as G,_ as H,W as J}from"./index-012dff6d.js";const K=u('<div class="cm-notification-icon">'),O=u('<div class="cm-notification-head">'),Q=u('<span class="cm-notification-btn-wrap">'),X=u('<div><div class="cm-notification-item-wrap"><a class="cm-notification-close"></a><div class="cm-notification-content"><div class="cm-notification-body">'),Y=u("<div>"),Z=u('<div class="cm-notification">');function tt(e){const[o,c]=x(!1),[a,t]=x(!1);let l;const r=e.data;let{style:$,icon:_,btn:v,theme:p,title:k,content:I}=r;const N=()=>V(e,"cm-notification-item",{"cm-notification-item-width-icon":_,"cm-notification-item-open":o(),"cm-notification-item-close":a(),[`cm-notification-item-${p}`]:p});q(()=>{setTimeout(()=>{c(!0)}),r.duration&&setTimeout(()=>{y()},r.duration*1e3)});const y=()=>{a()||(t(!0),setTimeout(()=>{S()},250))},S=()=>{e.onClose(r.key,r.dock),r.onClose&&r.onClose()};return(()=>{const d=X(),b=d.firstChild,C=b.firstChild,m=C.nextSibling,w=m.firstChild,g=l;return typeof g=="function"?W(g,d):l=d,C.$$click=y,i(C,s(L,{name:"x",size:16})),i(b,s(f,{when:_,get children(){const n=K();return i(n,s(L,{name:_})),n}}),m),i(m,s(f,{when:k,get children(){const n=O();return i(n,k),n}}),w),i(w,I),i(m,s(f,{when:v,get children(){const n=Q();return i(n,v),n}}),null),R(n=>{const P=N(),T=$;return n._v$=B(d,P,n._v$),n._v$2=U(d,T,n._v$2),n},{_v$:void 0,_v$2:void 0}),d})()}function h(e){const o=()=>e.data,c=z();return s(f,{get when(){return F(()=>!!o())()&&o().length},get children(){const a=Y();return c!=null?a.style.setProperty("z-index",c):a.style.removeProperty("z-index"),i(a,s(M,{get each(){return o()},children:t=>s(tt,{data:t,get onClose(){return e.onClose}})})),R(()=>j(a,`cm-notification-box cm-notification-${e.docker}`)),a}})}function et(e){const o=()=>e.data;return(()=>{const c=Z();return i(c,s(h,{get data(){return o().topLeft},docker:"top-left",get onClose(){return e.onClose}}),null),i(c,s(h,{get data(){return o().topRight},docker:"top-right",get onClose(){return e.onClose}}),null),i(c,s(h,{get data(){return o().bottomLeft},docker:"bottom-left",get onClose(){return e.onClose}}),null),i(c,s(h,{get data(){return o().bottomRight},docker:"bottom-right",get onClose(){return e.onClose}}),null),c})()}E(["click"]);function nt(){const[e,o]=A({topLeft:[],topRight:[],bottomLeft:[],bottomRight:[]}),c=(t,l)=>{const r=e[l].filter($=>$.key!==t);o(l,r)},a=D("cm-notice-portal","cm-notices-wrap");return G(()=>s(et,{data:e,onClose:c}),a),{open(t){t.dock||(t.dock="topRight"),t.key===void 0&&(t.key=H()),t.duration===void 0&&(t.duration=4.5),o(t.dock,J(l=>{l.push(t)})),a.style.zIndex=z()},info(t){t.icon="info",t.theme="info",this.open(t)},success(t){t.icon="check-circle",t.theme="success",this.open(t)},warning(t){t.icon="alert-circle",t.theme="warning",this.open(t)},error(t){t.icon="x-circle",t.theme="error",this.open(t)},help(t){t.icon="help-circle",t.theme="info",this.open(t)}}}const it=nt();export{it as n};