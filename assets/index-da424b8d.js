import{c as z,d as B,E as q,L as A,N as w,i as g,a as G,F as H,s as h,h as I,O as J,t as L,u as y,j as E,k as K}from"./index-5e251d81.js";import{u as P}from"./useSlots-e8273d0f.js";const Q=L('<div><div></div><div class="cm-slpit-handler-wrap"><div><div class="cm-split-handler-bar-wrap"></div></div></div><div>'),T=L('<div class="cm-split-handler-bar">');function W(a){const s=a.dir||"v",b=()=>K(a,"cm-split-wrap",{[`cm-split-wrap-${s}`]:s});let o=a.split;o&&o<1&&(o=o*100+"%");const[$,C]=z(o||"50%"),x=a.min||40;let m,d;const X=()=>({"cm-split-handler":!0,"cm-split-dragging":r.dragging,[`cm-split-handler-${s}`]:!!s}),v=P(a.children);v.prev||console.warn("Split need prev Slot Element"),v.next||console.warn("Split need next Slot Element"),B(()=>{const t=m.getBoundingClientRect(),n=s==="v"?t.width:t.height;let e=s==="v"?d.style.width:d.style.height;e.indexOf("px")>-1?e=parseFloat(e)/n*100:e=parseFloat(e);const c=a.max?a.max/n*100:100-x/n*100;e=e+(s==="v"?r.deltaX:r.deltaY)/n*100,e=Math.max(e,x/n*100),e=Math.min(e,c),C(e+"%")});const Y=()=>({[`${s==="v"?"width":"height"}`]:$()}),N=()=>({[`${s==="v"?"left":"top"}`]:$()}),F={flex:"1"},[r,l]=q({dragging:!1,x:NaN,y:NaN,deltaX:0,deltaY:0}),D=t=>{if(typeof t.button=="number"&&t.button!==0)return!1;l("dragging",!0);const n=t.clientX,e=t.clientY;l("x",n),l("y",e),document.addEventListener("mousemove",u,!1),document.addEventListener("mouseup",f,!1)},u=t=>{const n=t.clientX-r.x,e=t.clientY-r.y;l("x",t.clientX),l("y",t.clientY),l("deltaX",n),l("deltaY",e)},f=t=>{l("dragging",!1),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",f),l("deltaX",0),l("deltaY",0)};return A(()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",f)}),(()=>{const t=Q(),n=t.firstChild,e=n.nextSibling,c=e.firstChild,M=c.firstChild,p=e.nextSibling,S=m;typeof S=="function"?y(S,t):m=t;const _=d;return typeof _=="function"?y(_,n):d=n,w(n,`cm-split-panel cm-split-${s==="v"?"left":"top"}`),g(n,()=>v.prev),c.$$mousedown=D,g(M,G(H,{each:[1,2,3,4,5,6,7,8],children:()=>T()})),h(p,F),w(p,`cm-split-panel cm-split-${s==="v"?"right":"bottom"}`),g(p,()=>v.next),I(i=>{const R=b(),O=Y(),j=N(),k=X();return i._v$=E(t,R,i._v$),i._v$2=h(n,O,i._v$2),i._v$3=h(e,j,i._v$3),i._v$4=E(c,k,i._v$4),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})()}J(["mousedown"]);export{W as S};