import{ah as v,c as h,e as g,i as b,a as k,aB as x,j as C,k as _,s as $,t as m,l as F}from"./index-6b593c43.js";const y=m("<div>");function L(t){const r=()=>F(t,"cm-checkbox-group",{"cm-checkbox-group-stack":t.block}),[d,u]=v(t,[]),o=(n,e)=>{if(t.disabled)return;let a=d()||[];if(n)a.includes(e)||(a=a.concat(e));else{const i=a.indexOf(e);i>-1&&a.splice(i,1)}const l=JSON.parse(JSON.stringify(a));u(l),t.onChange&&t.onChange(l)},f=t.textField||"label",c=t.valueField||"value",s={};return t.data&&t.data.forEach(n=>{const a=(d()||[]).includes(n[c]);s[n[c]]=h(a)}),g(()=>{const n=d()??[];for(let e=0;e<t.data.length;e++){const a=t.data[e],l=n.includes(a[c]);s[a[c]]&&s[a[c]][1](l)}}),(()=>{const n=y();return b(n,()=>t.data.map(e=>k(x,{inner:!0,get disabled(){return t.disabled||e.disabled},get value(){return e[c]},get checked(){return s[e[c]][0]()},get label(){return e[f]},onChange:o}))),C(e=>{const a=r(),l=t.style;return e._v$=_(n,a,e._v$),e._v$2=$(n,l,e._v$2),e},{_v$:void 0,_v$2:void 0}),n})()}export{L as C};