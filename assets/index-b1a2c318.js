import{i as u,a as l,O as S,f as z,g as x,A as a,Q as G,t as g,I as L,s as R,h as H,j as J}from"./index-0b3654ac.js";const F=g('<span class="cm-progress-info">'),K=g('<div class="cm-progress-bar">'),N=g('<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle stroke="#f3f3f3" fill-opacity="0"></circle><path class="cm-progress-bar-path" stroke-linecap="round" fill-opacity="0">'),T=g('<div><div class="cm-progress-outer"><div class="cm-progress-inner">');function V(e){const _=()=>e.max??100,d=()=>e.value&&e.value<0?0:e.value&&e.value>=_()?_():e.value??0,f=e.strokeWidth??10,h=e.type??"line",o=()=>e.radius??60;let m=()=>d()===100?"finished":e.status??"normal";const W=()=>J(e,"cm-progress",{"cm-progress-hide-info":e.hidePercent,[`cm-progress-${m()}`]:!!m(),[`cm-progress-${h}`]:!!h}),E=()=>`${d()}%`,O=()=>{const s=m(),i=h==="line"?12:24;return e.infoRender?e.infoRender(s,d()):s==="finished"?l(L,{name:"check-circle",size:i}):s==="error"?l(L,{name:"x-circle",size:i}):`${d()}%`},Q=()=>{const s={width:E(),height:`${f}px`};if(e.strokeColor&&(typeof e.strokeColor=="string"&&(s["background-color"]=e.strokeColor),e.strokeColor instanceof Array)){const i=e.strokeColor.length,$=e.strokeColor.map((t,n)=>t+" "+n/i*100+"%");s["background-image"]=`linear-gradient(to right, ${$.join(",")})`}return s},k=2*Math.PI,C=()=>(Math.sin(k)*o()).toFixed(2),b=()=>-(Math.cos(k)*o()).toFixed(2),v=()=>o()+f/2,q=()=>["M",0,-o(),"A",o(),o(),0,1,1,C(),-b(),"A",o(),o(),0,1,1,C(),b()],B=()=>{const s=()=>d()/_(),i=()=>k*o(),t={"stroke-dashoffset":`${(()=>i()*(1-s()))()}`,"stroke-dasharray":i()};if(e.strokeColor&&(typeof e.strokeColor=="string"&&(t.stroke=e.strokeColor),e.strokeColor instanceof Array))for(let n=0;n<e.strokeColor.length;n++){const c=e.strokeColor[n];s()*100>=c.percent&&(t.stroke=c.color)}return t};return(()=>{const s=T(),i=s.firstChild,$=i.firstChild;return u($,l(G,{get children(){return[l(S,{when:h==="line",get children(){const t=K();return u(t,l(z,{get when(){return e.textInside},get children(){const n=F();return u(n,()=>`${d()}%`),n}})),x(n=>R(t,Q(),n)),t}}),l(S,{when:h==="circle",get children(){const t=N(),n=t.firstChild,c=n.nextSibling;return t.style.setProperty("display","block"),a(n,"stroke-width",f),a(c,"stroke-width",f),x(r=>{const y=2*o()+f+"px",w=2*o()+f+"px",P=v(),A=v(),j=o(),I=q().join(" "),M=`translate(${v()},${v()})`,D=B();return y!==r._v$&&((r._v$=y)!=null?t.style.setProperty("width",y):t.style.removeProperty("width")),w!==r._v$2&&((r._v$2=w)!=null?t.style.setProperty("height",w):t.style.removeProperty("height")),P!==r._v$3&&a(n,"cx",r._v$3=P),A!==r._v$4&&a(n,"cy",r._v$4=A),j!==r._v$5&&a(n,"r",r._v$5=j),I!==r._v$6&&a(c,"d",r._v$6=I),M!==r._v$7&&a(c,"transform",r._v$7=M),r._v$8=R(c,D,r._v$8),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),t}})]}})),u(s,l(z,{get when(){return!e.textInside},get children(){const t=F();return u(t,O),t}}),null),x(t=>H(s,W(),t)),s})()}export{V as P};