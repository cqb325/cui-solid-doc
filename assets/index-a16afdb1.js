import{d as K,i as v,a as h,h as F,F as M,P as S,g as B,p as N,t as $,u as O,j as W,s as E,k as Q}from"./index-012dff6d.js";import{c as U}from"./createField-0624a138.js";import{D as X}from"./index-2d88e173.js";const Y=$('<div class="cm-slider-handle" tabindex="0">'),Z=$('<div class="cm-slider-handle" tabindex="1">'),p=$('<div class="cm-slider-marks">'),tt=$('<div><div class="cm-slider-rail"></div><div class="cm-slider-track"></div><div class="cm-slider-steps">'),et=$("<span>"),nt=$('<span class="cm-slider-mark">');function at(n){let m,b,w,x,y,l=n.min??0,g=n.max??100;const _=n.step??1,d=n.range??!1,[i,R]=U(n,d?[0,0]:0),T=()=>Q(n,"cm-slider",{"cm-slider-disabled":n.disabled});let C=()=>m.getBoundingClientRect().width/(g-l)*_;const P=()=>{const t=d?i():[l,i()],r=Math.abs(t[1]-t[0])/(g-l)*100,c=(t[0]-l)/(g-l)*100,u=(t[1]-l)/(g-l)*100;return{left:c,width:r,right:u}},j=()=>{const t=P();return{left:t.left+"%",width:t.width+"%"}},A=()=>{const t=d?i()[0]:i();return n.tipFormatter?n.tipFormatter(t):t},V=()=>n.tipFormatter?n.tipFormatter(i()[1]):i()[1];K(()=>{const t=P(),r=m.getBoundingClientRect(),c=d?r.width*t.left/100:r.width*t.right/100,u=d?r.width*(t.left+t.width)/100:0;b&&b.setPosition({x:c,y:0}),w&&w.setPosition({x:u,y:0})});const L=t=>{let r;try{r=_.toString().split(".")[1].length}catch{r=0}const c=Math.pow(10,r);return Math.round(t*c)/c},q=(t,r)=>{const u=m.getBoundingClientRect().width,o=L(r.x/u*(g-l)+l);if(setTimeout(()=>{x&&x.updatePosition()}),d&&o>i()[1])return!1;let e=d?[o,Math.max(o,i()[1])]:o;R(e),n.onChange&&n.onChange(e)},z=(t,r)=>{const u=m.getBoundingClientRect().width,o=L(r.x/u*(g-l)+l);if(setTimeout(()=>{y&&y.updatePosition()}),d&&o<i()[0])return!1;let e=d?[Math.min(i()[0],o),o]:o;R(e),n.onChange&&n.onChange(e)},G=t=>{if(n.disabled||t.target.classList.contains("cm-slider-handle"))return;const r=t.target.closest(".cm-slider");if(!r)return;const c=r.getBoundingClientRect(),u=t.pageX-c.left,e=m.getBoundingClientRect().width,s=L(Math.round(u/e*(g-l)/_+l)*_);let a=i();d?(a=Math.abs(a[1]-s)>Math.abs(a[0]-s)?[s,a[1]]:[a[0],s],R(a),n.onChange&&n.onChange(a)):(R(s),n.onChange&&n.onChange(s))},H=()=>{if(!n.marks)return[];let t=[];for(let r=l;r<=g;r+=_)n.marks[r]&&t.push(r);return t},I=()=>{if(n.marks){const t=[];for(let r in n.marks)t.push({step:parseFloat(r),label:n.marks[r]});return t}return[]};return(()=>{const t=tt(),r=t.firstChild,c=r.nextSibling,u=c.nextSibling;t.$$mousedown=G;const o=m;return typeof o=="function"?O(o,r):m=r,v(u,h(M,{get each(){return H()},children:e=>{const s=d?i():[l,i()],a=e>=s[0]&&e<=s[1],f=()=>({"cm-slider-step":!0,"cm-slider-step-active":a}),D=`${(e-l)/(g-l)*100}%`;return(()=>{const k=et();return D!=null?k.style.setProperty("left",D):k.style.removeProperty("left"),F(J=>W(k,f(),J)),k})()}})),v(t,h(S,{get disabled(){return n.disabled},get content(){return A()},align:"top",ref(e){const s=x;typeof s=="function"?s(e):x=e},arrow:!0,get children(){return h(X,{axis:"x",get disabled(){return n.disabled},ref(e){const s=b;typeof s=="function"?s(e):b=e},onDrag:q,bounds:"parent",class:"cm-slider-handle-drag",get grid(){return[C(),C()]},get children(){return Y()}})}}),null),v(t,h(B,{when:d,get children(){return h(S,{get disabled(){return n.disabled},get content(){return V()},align:"top",ref(e){const s=y;typeof s=="function"?s(e):y=e},arrow:!0,get children(){return h(X,{axis:"x",get disabled(){return n.disabled},ref(e){const s=w;typeof s=="function"?s(e):w=e},onDrag:z,bounds:"parent",class:"cm-slider-handle-drag",get grid(){return[C(),C()]},get children(){return Z()}})}})}}),null),v(t,h(B,{get when(){return n.marks},get children(){const e=p();return v(e,h(M,{get each(){return I()},children:s=>{const a=`${(s.step-l)/(g-l)*100}%`;return(()=>{const f=nt();return a!=null?f.style.setProperty("left",a):f.style.removeProperty("left"),v(f,()=>s.label),f})()}})),e}}),null),F(e=>{const s=T(),a=n.style,f=j();return e._v$=W(t,s,e._v$),e._v$2=E(t,a,e._v$2),e._v$3=E(c,f,e._v$3),e},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()}N(["mousedown"]);export{at as S};