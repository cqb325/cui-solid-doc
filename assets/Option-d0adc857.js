import{O as d,a as s,i as r,f as u,h as v,j as o,s as m,g as $,t as f}from"./index-69f0698f.js";const h=f("<li>");function g(e){const n=()=>({"cm-select-option":!0,"cm-select-group-wrap":e.data.children&&e.data.children.length,"cm-select-option-active":e.checked,"cm-select-option-disabled":e.data.disabled}),c=e.data[e.valueField];return s($,{get when(){return e.visible},fallback:null,get children(){const a=h();return a.$$click=()=>e.onClick&&e.onClick(c,e.data),r(a,(()=>{const t=u(()=>!!e.renderOption);return()=>t()?e.renderOption(e.data):e.data[e.textField]})()),v(t=>{const l=n(),i=e.style;return t._v$=o(a,l,t._v$),t._v$2=m(a,i,t._v$2),t},{_v$:void 0,_v$2:void 0}),a}})}d(["click"]);export{g as O};
