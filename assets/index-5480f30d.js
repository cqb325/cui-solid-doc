import{i as c,h as f,j as _,s as h,t as u,k as o,a,I as m,e as C,m as y,F as z}from"./index-012dff6d.js";const I=u('<div class="cm-step-head-inner">'),L=u('<div class="cm-step-head-inner"><span>'),b=u('<div><div class="cm-step-head"></div><div class="cm-step-main"><div class="cm-step-title"></div><div class="cm-step-description">');function k(e){let s=()=>{if(e.status)return e.status;let t="";return e.current+1>e.index&&(t="finished"),e.current+1===e.index&&(t="process"),t||"wait"},d=()=>{let t="";return e.current+1>e.index&&(t="done"),e.current+1===e.index&&(t="active"),t};const v=()=>o(e,"cm-steps-item",{[`cm-steps-status-${s()}`]:s(),[`cm-steps-status-${d()}`]:d()}),i=()=>{let t="";return e.icon?t=e.icon:s()==="finished"?t=(()=>{const n=I();return c(n,a(m,{name:"check"})),n})():s()==="error"?t=a(m,{name:"x-circle",size:26}):s()==="warning"?t=a(m,{name:"alert-triangle",size:26}):t=(()=>{const n=L(),r=n.firstChild;return c(r,()=>e.index),n})(),t};return(()=>{const t=b(),n=t.firstChild,r=n.nextSibling,$=r.firstChild,x=$.nextSibling;return c(n,i),c($,()=>e.title),c(x,()=>e.description),f(l=>{const g=v(),S=e.style;return l._v$=_(t,g,l._v$),l._v$2=h(t,S,l._v$2),l},{_v$:void 0,_v$2:void 0}),t})()}function w(e){return e}const F=u("<div>");function j(e){const s=C(()=>e.children),d=()=>s.toArray(),v=()=>o(e,"cm-steps",{[`cm-steps-${e.size}`]:e.size,"cm-steps-vertical":e.dir==="v"});return(()=>{const i=F();return c(i,a(z,{get each(){return d()},children:(t,n)=>a(k,y(t,{get index(){return n()+1},get current(){return e.current||0}}))})),f(t=>{const n=v(),r=e.style;return t._v$=_(i,n,t._v$),t._v$2=h(i,r,t._v$2),t},{_v$:void 0,_v$2:void 0}),i})()}j.Step=w;export{j as S};
