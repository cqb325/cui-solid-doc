import{c as h,L as k,x as f,i as b,h as g,p as L,t as E,j as T,s as _,k as C}from"./index-012dff6d.js";import{s as x}from"./index-e07e4e01.js";const y=E('<div><div class="cm-back-top-inner">');function S(t){const[s,c]=h(!1),i=()=>C(t,"cm-back-top",{"cm-back-top-show":s()}),l=t.bottom??30,a=t.right??30,r=t.height??400,d=t.duration??1e3,m=()=>({...t.style,bottom:`${l}px`,right:`${a}px`}),v=()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;x(window,e,0,d),t.onClick&&t.onClick()},o=()=>{c(window.pageYOffset>=r)};return k(()=>{window.addEventListener("scroll",o),window.addEventListener("resize",o)}),f(()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}),(()=>{const e=y(),u=e.firstChild;return e.$$click=v,b(u,()=>t.children),g(n=>{const w=i(),$=m();return n._v$=T(e,w,n._v$),n._v$2=_(e,$,n._v$2),n},{_v$:void 0,_v$2:void 0}),e})()}L(["click"]);export{S as B};