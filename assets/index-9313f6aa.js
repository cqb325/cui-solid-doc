import{a5 as Y,c as M,d as Z,a as r,a1 as O,g as b,h as w,i as c,x as p,f as B,I as E,B as z,aa as ee,O as te,t as m,a0 as se,J as ne,u as I,j as g,s as T,a2 as le,m as oe,k as ae}from"./index-69f0698f.js";import{D as ce}from"./index-bb815219.js";const ie=m("<div>"),re=m('<span class="cm-modal-close">'),de=m('<div class="cm-modal-footer">'),ue=m('<div><div class="cm-modal-header"></div><div class="cm-modal-body">'),me=m('<div tabindex="1">'),fe=m('<div class="cm-modal-title">'),ve=m('<div class="cm-modal-left"><div class="cm-modal-icon">'),ye=m('<div class="cm-modal-right">');function he(t){let l,e,a;const[v,y]=Y(t,"visible",!1),[h,i]=M(!1);let d=!1,k="";const L=()=>ae(t,"cm-modal"),$=se(),H=()=>({"cm-modal-wrap":!0,"cm-modal-visible":v(),"cm-modal-fullscreen":t.fullScreen}),R=()=>({"cm-modal-mask":!0,"cm-modal-mask-visible":v()}),D=()=>{t.onClickClose&&t.onClickClose(),C()},C=()=>{t.onClosed&&t.onClosed(),y(!1)},F=()=>{C(),t.onCancel&&t.onCancel()},V=()=>{if(t.onOk&&t.onOk(),t.loading){h()||i(!0);return}C()};Z(()=>{if(!v())i(!1),d&&(document.body.style.overflow=k,d=!1);else{if(l){const f=l.getBoundingClientRect().height;l.children[0].getBoundingClientRect().height>f?(l.style.overflow="auto",l.children[0].style.top=0,k=window.getComputedStyle(document.body,null).overflow,k!=="hidden"&&(document.body.style.overflow="hidden",d=!0)):(l.style.overflow="none",d=!1),setTimeout(()=>{l.focus()},300)}Q&&a&&a.reset()}});const j=s=>{N&&s.target===e&&y(!1)},q=s=>{s.keyCode===27&&y(!1)},x="cm-modal-portal",A=t.footer??!0,J=t.hasCloseIcon??!0,P=ne(),U=t.okText||"确 定",G=t.cancleText||"取 消",K=t.mask??!0,N=t.maskClosable??!0,Q=t.resetPostion??!1;return r(ee,{get mount(){return O(x,x)},get children(){return[r(b,{when:K,get children(){const s=ie(),f=e;return typeof f=="function"?I(f,s):e=s,s.$$click=j,$-1!=null?s.style.setProperty("z-index",$-1):s.style.removeProperty("z-index"),w(o=>g(s,R(),o)),s}}),(()=>{const s=me();s.$$keydown=q;const f=l;return typeof f=="function"?I(f,s):l=s,$!=null?s.style.setProperty("z-index",$):s.style.removeProperty("z-index"),c(s,r(ce,{ref(o){const u=a;typeof u=="function"?u(o):a=o},get bounds(){return t.bounds||"body"},get style(){return t.defaultPosition},handle:'.cm-modal-header[data-id="'+P+'"]',get disabled(){return t.disabled},get children(){const o=ue(),u=o.firstChild,S=u.nextSibling;return p(u,"data-id",`${P}`),c(u,(()=>{const n=B(()=>!!t.title);return()=>n()?(()=>{const _=fe();return c(_,()=>t.title),_})():null})(),null),c(u,r(b,{when:J,get children(){const n=re();return n.$$click=D,c(n,r(E,{name:"x"})),n}}),null),c(S,()=>t.children),c(o,r(b,{when:A,get children(){const n=de();return c(n,r(z,{type:"primary",get loading(){return h()},onClick:V,children:U}),null),c(n,r(z,{type:"default",class:"mr-10",onClick:F,children:G}),null),n}}),null),w(n=>{const _=L(),W=t.style,X=t.bodyStyle;return n._v$=g(o,_,n._v$),n._v$2=T(o,W,n._v$2),n._v$3=T(S,X,n._v$3),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o}})),w(o=>g(s,H(),o)),s})()]}})}function $e(){const[t,l]=M(!0);return{open(e){l(!0);let a="";e.status==="success"&&(a="check-circle"),e.status==="info"&&(a="info"),e.status==="warning"&&(a="alert-circle"),e.status==="error"&&(a="x-circle"),e.status==="confirm"&&(a="help-circle");const v=i=>{l(i),setTimeout(()=>{h?.()},250)};e.style={"min-width":"24vw",...e.style},e.visible=[t,v],e.defaultPosition={top:"200px",...e.defaultPosition};const y=O("cm-modal-portal-instance","cm-modal-portal"),h=le(()=>r(he,oe(e,{class:"cm-modal-instance",get children(){return[(()=>{const i=ve(),d=i.firstChild;return c(d,r(E,{name:a,size:24})),i})(),(()=>{const i=ye();return c(i,(()=>{const d=B(()=>typeof e.content=="function");return()=>d()?e.content():e.content})()),i})()]}})),y)},success(e){return e.status="success",this.open(e)},info(e){return e.status="info",this.open(e)},warning(e){return e.status="warning",this.open(e)},error(e){return e.status="error",this.open(e)},confirm(e){return e.status="confirm",this.open(e)},remove(){l(!1),setTimeout(()=>{},250)}}}const Ce=$e();te(["click","keydown"]);export{he as M,Ce as m};
