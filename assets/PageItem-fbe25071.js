import{O as c,a4 as i,i as s,a as m,I as u,h as r,j as l,t as o}from"./index-69f0698f.js";const g=o("<li>");function p(n){const e=()=>({"cm-pagination-num":!0,"cm-pagination-prev":!0,"cm-pagination-num-disabled":n.current===1});return(()=>{const t=g();return i(t,"click",n.onClick,!0),s(t,m(u,{name:"chevron-left",size:14})),r(a=>l(t,e(),a)),t})()}c(["click"]);const d=o("<li>");function v(n){const e=()=>({"cm-pagination-num":!0,"cm-pagination-next":!0,"cm-pagination-num-disabled":n.disabled});return(()=>{const t=d();return i(t,"click",n.onClick,!0),s(t,m(u,{name:"chevron-right",size:14})),r(a=>l(t,e(),a)),t})()}c(["click"]);const $=o("<li>");function f(n){const e=()=>({"cm-pagination-num":!0,"cm-pagination-item-active":n.active});return(()=>{const t=$();return i(t,"click",n.onClick,!0),s(t,()=>n.currentIndex),r(a=>l(t,e(),a)),t})()}c(["click"]);export{p as P,v as a,f as b};
