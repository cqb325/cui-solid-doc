import{c as L,w as X,d as w,x as Y,i as f,h as p,p as C,t as N,X as k,u as D,j as M,s as v,k as R}from"./index-012dff6d.js";const B=N('<div><div class="cm-sbs-right-panel"></div><div class="cm-sbs-left-panel"></div><div class="cm-sbs-handler"><div class="cm-sbs-track"><div class="cm-sbs-line"></div><div class="cm-sbs-line"></div><div class="cm-sbs-line">');function q(i){const g=()=>R(i,"cm-side-by-side"),[l,$]=L(50),[c,s]=X({dragging:!1,x:NaN,y:NaN,deltaX:0,deltaY:0});let d;w(()=>{const e=d.getBoundingClientRect();let t=k(()=>l());t=t+c.deltaX/e.width*100,t=Math.min(t,100),t=Math.max(t,0),$(t)});const _=e=>{if(typeof e.button=="number"&&e.button!==0)return!1;s("dragging",!0);const t=e.clientX,a=e.clientY;s("x",t),s("y",a),document.addEventListener("mousemove",o,!1),document.addEventListener("mouseup",r,!1)},o=e=>{const t=e.clientX-c.x,a=e.clientY-c.y;s("x",e.clientX),s("y",e.clientY),s("deltaX",t),s("deltaY",a)},r=e=>{s("dragging",!1),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r),s("deltaX",0),s("deltaY",0)},b=()=>({"clip-path":`inset(0 ${100-l()}% 0 0)`}),y=()=>({left:`${l()}%`});return Y(()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r)}),(()=>{const e=B(),t=e.firstChild,a=t.nextSibling,u=a.nextSibling,m=d;return typeof m=="function"?D(m,e):d=e,f(t,()=>i.right),f(a,()=>i.left),u.$$mousedown=_,p(n=>{const S=g(),h=i.style,x=b(),E=y();return n._v$=M(e,S,n._v$),n._v$2=v(e,h,n._v$2),n._v$3=v(a,x,n._v$3),n._v$4=v(u,E,n._v$4),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}C(["mousedown"]);export{q as S};
