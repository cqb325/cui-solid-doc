import{_ as Q,L as M,D as V,i as $,h as K,j as d,t as w,k as R,q as W,w as X,x as Y,d as z,a as C,I as D,F as Z,p,r as ee,u as F,s as te,v as ne}from"./index-012dff6d.js";const ce=w("<div>");function ae(n){const e=re(),s=Q(),v=()=>R(n,"cm-carousel-item",{"cm-carousel-item-active-fade":e&&e.effect==="fade"&&e.store.activeKey===s,"cm-carousel-item-active":e&&e.effect==="slide"&&e.store.dir==="normal"&&e.store.activeKey===s,"cm-carousel-item-active-next":e&&e.effect==="slide"&&e.store.dir==="normal"&&e.store.prevKey===s,"cm-carousel-item-active-reverse":e&&e.effect==="slide"&&e.store.dir==="reverse"&&e.store.activeKey===s,"cm-carousel-item-active-reverse-next":e&&e.effect==="slide"&&e.store.dir==="reverse"&&e.store.nextKey===s});return M(()=>{e&&e.addItem({id:s})}),(()=>{const r=ce();return V(r,"data-id",s),$(r,()=>n.children),K(h=>d(r,v(),h)),r})()}const se=w('<div><div x-placement="left"></div><div class="cm-carousel-list"></div><div x-placement="right"></div><ul>'),ie=w("<li>"),j=ee();function oe(n){const e=()=>R(n,"cm-carousel"),[s,v]=W(n,"activeIndex",0),r=n.arrow??"hover",h=n.dotType??"dot",L=n.dotAlign??"center",B=n.autoPlay??!1,S=n.duration??4e3,N=n.effect??"slide";let x,u,m=null;const T=()=>({"cm-carousel-arrow":!0,[`cm-carousel-arrow-${r}`]:!!r}),U=()=>({"cm-carousel-dots":!0,[`cm-carousel-dots-${h}`]:!!h,[`cm-carousel-dots-${L}`]:!!L});let k=!1;const[a,o]=X({data:[],activeIndex:s(),activeKey:"",nextKey:"",prevKey:"",dir:"normal"}),G=t=>{t.index=a.data.length,o("data",[...a.data,t])},A=()=>{clearTimeout(m),b(),m=setTimeout(()=>{A()},S)};M(()=>{if(x){const t=x.querySelectorAll(".cm-carousel-item");if(t.length){const c=t[0].getBoundingClientRect();u.style.height=c.height+"px"}B&&(m=setTimeout(()=>{A()},S))}}),Y(()=>{m&&clearTimeout(m)}),z(()=>{const t=s();o("activeIndex",t)}),z(()=>{const t=a.activeIndex,c=a.data;if(c&&c.length)if(!k)u.children[a.activeIndex].classList.add("cm-carousel-item-active-init"),k=!0;else{const l=u.querySelector(".cm-carousel-item-active-init");l&&l.classList.remove("cm-carousel-item-active-init"),o("activeKey",c[t].id),o("prevKey",c[(c.length+t-1)%c.length].id),o("nextKey",c[(c.length+t+1)%c.length].id)}});const b=()=>{v((a.activeIndex+1)%a.data.length),o("dir","normal"),n.onChange&&n.onChange(s())},H=()=>{v((a.data.length+a.activeIndex-1)%a.data.length),o("dir","reverse"),n.onChange&&n.onChange(s())},J=t=>{o("dir",a.activeIndex-t<0?"normal":"reverse"),v(t),n.onChange&&n.onChange(s())};return C(j.Provider,{value:{addItem:G,store:a,effect:N},get children(){const t=se(),c=t.firstChild,l=c.nextSibling,g=l.nextSibling,q=g.nextSibling,P=x;typeof P=="function"?F(P,t):x=t,c.$$click=H,$(c,C(D,{name:"chevron-left",size:24}));const E=u;return typeof E=="function"?F(E,l):u=l,$(l,()=>n.children),g.$$click=b,$(g,C(D,{name:"chevron-right",size:24})),$(q,C(Z,{get each(){return a.data},children:(i,y)=>{const _=()=>({"cm-carousel-dot":!0,"cm-carousel-dot-active":a.activeIndex===y()});return(()=>{const f=ie();return f.$$click=()=>{J(y())},K(I=>d(f,_(),I)),f})()}})),K(i=>{const y=e(),_=n.style,f=T(),I=T(),O=U();return i._v$=d(t,y,i._v$),i._v$2=te(t,_,i._v$2),i._v$3=d(c,f,i._v$3),i._v$4=d(g,I,i._v$4),i._v$5=d(q,O,i._v$5),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),t}})}oe.Item=ae;const re=()=>ne(j);p(["click"]);export{oe as C};
