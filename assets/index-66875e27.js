import{E as x,d as g,i as h,a,F as d,g as m,f as v,P as C,h as z,t as u,Q as L,j as T,s as b,k}from"./index-5e251d81.js";import{T as i}from"./index-6e93bfa2.js";const f=u("<span>+"),E=u("<div>"),S=u('<div class="cm-tag-group-more-wrap">');function M(t){const w=()=>k(t,"cm-tag-group",{}),[l,o]=x({list:[],show:[],hide:[]}),$=(r,e)=>{const n=l.list.filter(c=>c.id!==r.id);o("list",n),t.onClose&&t.onClose(r,e)};return g(()=>{o("list",t.data)}),g(()=>{const r=l.list,e=t.max??r.length,n=[],c=[];L(()=>{for(let s=0;s<e;s++)r[s]&&n.push(r[s]);const _=t.data.length;for(let s=e;s<_;s++)c.push(r[s]);o("show",n),o("hide",c)})}),(()=>{const r=E();return h(r,a(d,{get each(){return l.show},children:e=>a(i,{get closable(){return t.closable},get size(){return t.size},get theme(){return e.theme},get avatar(){return e.avatar},onClose:n=>{$(e,n)},get children(){return e.title}})}),null),h(r,a(m,{get when(){return t.max&&l.list.length>t.max},get children(){return a(m,{get when(){return t.showMore},get fallback(){return a(i,{class:"cm-tag-more",get children(){return[f(),v(()=>l.hide.length)]}})},get children(){return a(C,{align:"top",arrow:!0,theme:"light",get content(){return(()=>{const e=S();return h(e,a(d,{get each(){return l.hide},children:(n,c)=>a(i,{get size(){return t.size},get theme(){return n.theme},get avatar(){return n.avatar},get children(){return n.title}})})),e})()},get children(){return a(i,{class:"cm-tag-more",get children(){return[f(),v(()=>l.hide.length)]}})}})}})}}),null),z(e=>{const n=w(),c=t.style;return e._v$=T(r,n,e._v$),e._v$2=b(r,c,e._v$2),e},{_v$:void 0,_v$2:void 0}),r})()}export{M as T};