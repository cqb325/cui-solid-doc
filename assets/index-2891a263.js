import{z as s,a as h,m as C}from"./index-452b01fb.js";import{I as i}from"./code-6c1bd720.js";import{c as m}from"./createField-daacc4ef.js";function l(e){const[a,r]=m(e,"checked",!1),[n,t]=s(e,["checked","onChange"]);return h(i,C({get checked(){return a()},onChange:(o,c)=>{e.disabled||(r(o),n.onChange&&n.onChange(o,c))}},t))}export{l as C};