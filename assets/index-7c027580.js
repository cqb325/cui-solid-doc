import{q as X,c as M,d as Y,a as r,a0 as O,g as b,h as w,i as c,D as Z,f as p,I as B,B as z,aa as ee,p as te,t as u,$ as se,_ as le,u as I,j as g,s as T,a1 as ne,m as oe,k as ae}from"./index-012dff6d.js";import{D as ce}from"./index-2d88e173.js";const ie=u("<div>"),re=u('<span class="cm-modal-close">'),de=u('<div class="cm-modal-footer">'),ue=u('<div><div class="cm-modal-header"></div><div class="cm-modal-body">'),me=u('<div tabindex="1">'),fe=u('<div class="cm-modal-title">'),ve=u('<div class="cm-modal-left"><div class="cm-modal-icon">'),he=u('<div class="cm-modal-right">');function ye(t){let n,e,a;const[v,h]=X(t,"visible",!1),[y,i]=M(!1);let f=!1,k="";const E=()=>ae(t,"cm-modal"),$=se(),L=()=>({"cm-modal-wrap":!0,"cm-modal-visible":v(),"cm-modal-fullscreen":t.fullScreen}),D=()=>({"cm-modal-mask":!0,"cm-modal-mask-visible":v()}),H=()=>{t.onClickClose&&t.onClickClose(),C()},C=()=>{t.onClosed&&t.onClosed(),h(!1)},R=()=>{C(),t.onCancel&&t.onCancel()},q=()=>{if(t.onOk&&t.onOk(),t.loading){y()||i(!0);return}C()};Y(()=>{if(!v())i(!1),f&&(document.body.style.overflow=k,f=!1);else{if(n){const m=n.getBoundingClientRect().height;n.children[0].getBoundingClientRect().height>m?(n.style.overflow="auto",n.children[0].style.top=0,k=window.getComputedStyle(document.body,null).overflow,k!=="hidden"&&(document.body.style.overflow="hidden",f=!0)):(n.style.overflow="none",f=!1),setTimeout(()=>{n.focus()},300)}K&&a&&a.reset()}});const F=s=>{J&&s.target===e&&h(!1)},V=s=>{s.keyCode===27&&h(!1)},x="cm-modal-portal",j=t.footer??!0,A=t.hasCloseIcon??!0,P=le(),N=t.okText||"确 定",U=t.cancleText||"取 消",G=t.mask??!0,J=t.maskClosable??!0,K=t.resetPostion??!1;return r(ee,{get mount(){return O(x,x)},get children(){return[r(b,{when:G,get children(){const s=ie(),m=e;return typeof m=="function"?I(m,s):e=s,s.$$click=F,$-1!=null?s.style.setProperty("z-index",$-1):s.style.removeProperty("z-index"),w(o=>g(s,D(),o)),s}}),(()=>{const s=me();s.$$keydown=V;const m=n;return typeof m=="function"?I(m,s):n=s,$!=null?s.style.setProperty("z-index",$):s.style.removeProperty("z-index"),c(s,r(ce,{ref(o){const d=a;typeof d=="function"?d(o):a=o},get bounds(){return t.bounds||"body"},get style(){return t.defaultPosition},handle:'.cm-modal-header[data-id="'+P+'"]',get disabled(){return t.disabled},get children(){const o=ue(),d=o.firstChild,S=d.nextSibling;return Z(d,"data-id",`${P}`),c(d,(()=>{const l=p(()=>!!t.title);return()=>l()?(()=>{const _=fe();return c(_,()=>t.title),_})():null})(),null),c(d,r(b,{when:A,get children(){const l=re();return l.$$click=H,c(l,r(B,{name:"x"})),l}}),null),c(S,()=>t.children),c(o,r(b,{when:j,get children(){const l=de();return c(l,r(z,{type:"primary",get loading(){return y()},onClick:q,children:N}),null),c(l,r(z,{type:"default",className:"mr-10",onClick:R,children:U}),null),l}}),null),w(l=>{const _=E(),Q=t.style,W=t.bodyStyle;return l._v$=g(o,_,l._v$),l._v$2=T(o,Q,l._v$2),l._v$3=T(S,W,l._v$3),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o}})),w(o=>g(s,L(),o)),s})()]}})}function $e(){const[t,n]=M(!0);return{open(e){n(!0);let a="";e.status==="success"&&(a="check-circle"),e.status==="info"&&(a="info"),e.status==="warning"&&(a="alert-circle"),e.status==="error"&&(a="x-circle"),e.status==="confirm"&&(a="help-circle");const v=i=>{n(i),setTimeout(()=>{y?.()},250)};e.style={"min-width":"24vw",...e.style},e.visible=[t,v],e.defaultPosition={top:"200px",...e.defaultPosition};const h=O("cm-modal-portal-instance","cm-modal-portal"),y=ne(()=>r(ye,oe(e,{class:"cm-modal-instance",get children(){return[(()=>{const i=ve(),f=i.firstChild;return c(f,r(B,{name:a,size:24})),i})(),(()=>{const i=he();return c(i,()=>e.content),i})()]}})),h)},success(e){return e.status="success",this.open(e)},info(e){return e.status="info",this.open(e)},warning(e){return e.status="warning",this.open(e)},error(e){return e.status="error",this.open(e)},confirm(e){return e.status="confirm",this.open(e)},remove(){n(!1),setTimeout(()=>{},250)}}}const Ce=$e();te(["click","keydown"]);export{ye as M,Ce as m};