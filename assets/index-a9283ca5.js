import{a5 as _,a as c,i as l,g as s,I as m,h as v,O as k,t as a,j as w,k as C}from"./index-69f0698f.js";import{u as y}from"./useSlots-306f7c02.js";const x=a('<div class="cm-banner-icon">'),I=a('<div class="cm-banner-title">'),B=a('<div class="cm-banner-desc">'),L=a('<span class="cm-banner-close">'),M=a('<div class="cm-banner-extra">'),E=a('<div><div class="cm-banner-body"><div class="cm-banner-content"><div class="cm-banner-content-body">');function z(e){const[b,f]=_(e,"visible",!0),h=()=>C(e,"cm-banner",{[`cm-banner-${e.type}`]:e.type,["cm-banner-bordered"]:e.bordered,["cm-banner-full"]:e.fullMode??!0,["cm-banner-not-full"]:e.fullMode===!1}),$=()=>{let t="";switch(e.type){case"info":{t="info";break}case"success":{t="check-circle";break}case"warning":{t="alert-circle";break}case"error":{t="x-circle";break}default:t="info"}return c(m,{name:t,size:20})},g=()=>{f(!1),e.onClose&&e.onClose()},r=y(e.children),o=e.icon===null?null:e.icon??$();return c(s,{get when(){return b()},get children(){const t=E(),u=t.firstChild,d=u.firstChild,i=d.firstChild;return l(d,c(s,{when:o,get children(){const n=x();return l(n,o),n}}),i),l(i,c(s,{get when(){return e.title},get children(){const n=I();return l(n,()=>e.title),n}}),null),l(i,c(s,{get when(){return r.default},get children(){const n=B();return l(n,()=>r.default),n}}),null),l(u,c(s,{get when(){return e.closeIcon!==null},get children(){const n=L();return n.$$click=g,l(n,()=>e.closeIcon??c(m,{name:"x"})),n}}),null),l(t,c(s,{get when(){return r.extra},get children(){const n=M();return l(n,()=>r.extra),n}}),null),v(n=>w(t,h(),n)),t}})}k(["click"]);export{z as B};
