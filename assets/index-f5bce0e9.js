import{q as H,c as x,w as I,Z as J,i as a,a as _,u as k,F as T,U as y,f as K,h as f,g as Q,p as W,t as m,_ as P,y as Y,D as ee,j as C,s as te,k as ne}from"./index-012dff6d.js";const q=m("<div>"),ie=m('<div><div class="cm-index-list-list"></div><div class="cm-index-list-nav">'),oe=m("<dl><dt>"),ce=m("<dd>");function le(s){const S=()=>s.promote??!0,[w,M]=H(s,"value",[]),[D,B]=x(""),[O,A]=x(!1),[R,U]=x(""),[E,L]=I({list:[],listMap:{}});let d={},u,p={};J(()=>{const i=[];d={};let t={};s.data.forEach(n=>{(n.id===void 0||n.id===null)&&(n.id=P());const o={id:n.id};d[n.id]=n,t[n.id]=o,i.push(o),n.children&&(o.children=[],n.children.forEach(e=>{(e.id===void 0||e.id===null)&&(e.id=P()),d[e.id]=e;const c={id:e.id};t[e.id]=c,o.children.push(c)}))}),L({list:i,listMap:t})});const F=()=>ne(s,"cm-index-list",{"cm-index-list-border":s.border}),N=i=>{if(!s.selectable)return;const t=w(),n=i.id;if(i.active){const o=t.indexOf(n);t.splice(o,1),M(t)}else t.push(n),M([...t]);s.onChange&&s.onChange(w()),L("listMap",i.id,"active",!i.active)};let $=null;const V=(i,t,n)=>{n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation();const o=document.querySelector(i);if(o){S()&&(U(t),A(!0),$&&clearTimeout($),$=setTimeout(()=>{j()},1e3));const e=o.getBoundingClientRect().top,c=u.getBoundingClientRect().top,l=e-c;u.scrollTo({top:u.scrollTop+l,behavior:"smooth"})}},j=()=>{A(!1)},X=()=>{const i=u.scrollTop,t=Z(i);B(t)},Z=i=>{let t="",n=Number.MAX_VALUE;for(let o in p){const e=Math.abs(p[o]-i);n>e&&(n=e,t=o)}return t},b=(i,t)=>{queueMicrotask(()=>{p[t]=i.offsetTop})},z=()=>({"cm-index-list-promote":!0,"cm-index-list-promote-show":O()});return(()=>{const i=ie(),t=i.firstChild,n=t.nextSibling;t.addEventListener("scroll",X);const o=u;return typeof o=="function"?k(o,t):u=t,a(t,_(T,{get each(){return E.list},children:e=>{const c=d[e.id];return(()=>{const l=oe(),g=l.firstChild;return k(r=>{b(r,e.id)},l),a(g,()=>c.name),a(l,_(T,{get each(){return e.children},children:r=>{const h=d[r.id];return(()=>{const v=ce();return y(v,"click",N.bind(null,r),!0),a(v,(()=>{const G=K(()=>!!s.renderItem);return()=>G()?s.renderItem(h,r.active):h.name})()),f(()=>Y(v,r.active?"active":"")),v})()}}),null),f(()=>ee(l,"id",`cm_index_list_${e.id}`)),l})()}})),a(n,_(T,{get each(){return E.list},children:e=>{const c=d[e.id],l=()=>D()===e.id,g=()=>({"cm-index-list-nav-item":!0,active:l()});return(()=>{const r=q();return y(r,"click",V.bind(null,`#cm_index_list_${e.id}`,c.id),!0),a(r,()=>c.id),f(h=>C(r,g(),h)),r})()}})),a(i,_(Q,{get when(){return S()},get children(){const e=q();return a(e,R),f(c=>C(e,z(),c)),e}}),null),f(e=>{const c=F(),l=s.style;return e._v$=C(i,c,e._v$),e._v$2=te(i,l,e._v$2),e},{_v$:void 0,_v$2:void 0}),i})()}W(["click"]);export{le as I};
