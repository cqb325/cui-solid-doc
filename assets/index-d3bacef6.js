import{o as _,a as m,i as s,e as u,I as h,g as C,f as b,t as d,h as x,s as z,j as L}from"./index-0246dc72.js";const k=d('<div><div class="cm-tag-content"><div class="cm-tag-text">'),w=d('<span class="cm-tag-badge"><span class="cm-tag-badge-text">');function B(e){const l=()=>e.value||"",g=()=>L(e,"cm-tag",{[`cm-tag-${e.theme}`]:e.theme,"cm-tag-has-badge":l()!=="","cm-tag-circle":!l()&&e.circle,[`cm-tag-${e.size}`]:e.size,"cm-tag-has-avatar":e.avatar}),[v,f]=_(e,"visible",!0),$=t=>{e.onBeforeClose?e.onBeforeClose(t)&&o(t):o(t)},o=t=>{f(!1),e.onClose&&e.onClose(t)};return m(b,{get when(){return v()},fallback:null,get children(){const t=k(),c=t.firstChild,r=c.firstChild;return s(c,()=>e.avatar,r),s(r,()=>e.children),s(c,(()=>{const a=u(()=>!!e.closable);return()=>a()?m(h,{name:"x",class:"cm-tag-close",size:12,onClick:$}):null})(),null),s(t,(()=>{const a=u(()=>l()!=="");return()=>a()?(()=>{const n=w(),i=n.firstChild;return s(i,l),n})():null})(),null),C(a=>{const n=g(),i=e.style;return a._v$=x(t,n,a._v$),a._v$2=z(t,i,a._v$2),a},{_v$:void 0,_v$2:void 0}),t}})}export{B as T};
