import{c as $,i as s,f as d,a as m,I as g,h,O as v,t as l,u as _,s as C,j as x,k as b}from"./index-5e251d81.js";async function w(e){if(navigator.clipboard&&window.isSecureContext)try{return await navigator.clipboard.writeText(e),!0}catch{return!1}else{const n=document.createElement("textarea");return document.body.appendChild(n),n.setAttribute("value",e),n.select(),document.execCommand("copy"),document.body.removeChild(n),!0}}const k=l("<p>"),T=l('<span class="cm-typograghy-copyed">'),E=l('<span class="cm-typograghy-copy">');function z(e){const[n,i]=$(!1),u=()=>e.size||"normal",p=()=>b(e,"cm-typograghy-paragraph",{[`cm-typograghy-paragraph-${u()}`]:u(),[`cm-typograghy-paragraph-${e.type}`]:!!e.type,"cm-typograghy-extended":e.spacing==="extended"});let o;async function f(){const t=await w(e.copyText??o.innerText);i(t),t&&(e.onCopy&&e.onCopy(),setTimeout(()=>{i(!1)},4e3))}return(()=>{const t=k(),y=o;return typeof y=="function"?_(y,t):o=t,s(t,()=>e.children,null),s(t,(()=>{const c=d(()=>!!e.copyable);return()=>c()?(()=>{const r=d(()=>!!n());return()=>r()?(()=>{const a=T();return s(a,m(g,{name:"check"})),a})():(()=>{const a=E();return a.$$click=f,s(a,m(g,{name:"copy"})),a})()})():null})(),null),h(c=>{const r=e.style,a=p();return c._v$=C(t,r,c._v$),c._v$2=x(t,a,c._v$2),c},{_v$:void 0,_v$2:void 0}),t})()}v(["click"]);export{z as P,w as u};