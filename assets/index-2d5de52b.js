import{a5 as I,a7 as M,U,i as l,a as o,g as h,I as j,h as K,O,t as _,u as w,j as R,s as C,k as T}from"./index-5e0fdc25.js";const V=_('<div class="cm-drawer-title">'),q=_('<div tabindex="1"><div class="cm-drawer-mask"></div><div class="cm-drawer-wrap"><div class="cm-drawer-body">');function B(e){const[g,d]=I(e,"visible",!1),n=()=>e.align??"right",k=e.maskCloseable??!0,b=()=>(e.size??256)+"px",y=()=>({[n()==="left"||n()==="right"?"width":"height"]:b()}),x=()=>T(e,"cm-drawer",{[`cm-drawer-${n()}`]:n()});let i,c;const v=M({el:()=>i,target:()=>c,startClass:"cm-drawer-visible",activeClass:"cm-drawer-open",onLeave:()=>{e.onClose&&e.onClose()}}),L=()=>{k&&f()},f=()=>{d(!1)};U(()=>{g()?(v.enter(),e.onShow&&e.onShow()):v.leave()});const S=t=>{e.escClose&&t.code==="Escape"&&d(!1)};return(()=>{const t=q(),u=t.firstChild,a=u.nextSibling,r=a.firstChild;t.$$keyup=S;const $=i;typeof $=="function"?w($,t):i=t,u.$$click=L;const m=c;return typeof m=="function"?w(m,a):c=a,l(a,o(h,{get when(){return e.title},get children(){const s=V();return l(s,()=>e.title),s}}),r),l(a,o(h,{get when(){return e.hasClose??!0},get children(){return o(j,{name:"x",size:18,class:"cm-drawer-close",onClick:f})}}),r),l(r,()=>e.children),K(s=>{const z=x(),E=e.style,D=y();return s._v$=R(t,z,s._v$),s._v$2=C(t,E,s._v$2),s._v$3=C(a,D,s._v$3),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()}O(["keyup","click"]);export{B as D};
