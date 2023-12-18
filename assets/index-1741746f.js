import{n as G,c as J,i as v,a as m,g as A,w as j,f as N,e as Q,h as H,s as W,t as x,F as X,o as O,b as V,r as Y,D as Z,p,a3 as ee,U as F,R as D,j as te,q as ae}from"./index-0246dc72.js";import{I as ne}from"./code-558518d5.js";import{L as le}from"./index-f479a69a.js";const I={Full:0,Half:1,Child:2,Shallow:3};class q{data=[];dataMap={};valueMap={};mode=1;lastSelected="";levels=[];checkRelation="related";constructor(e){this.data=e.data,this.checkRelation=e.checkRelation,this.setData(this.data),this.setValue(e.value),this.initDisabled(null,!1)}setData(e){this.dataMap={},this.valueMap={},this.data=e,this.links={},this.levels=[],e&&this.initData(null,e,0)}initData(e,a,l){const i=[];return this.levels[l]=[],a.forEach(c=>{c._level=l,i.push(c.id),this.dataMap[c.id]=c;const d={};if(this.links[c.id]=d,d.parent=e?e.id:null,this.levels[l].push(c.id),c.children){const f=this.initData(c,c.children,l+1);d.children=f}}),i}initValue(e,a){if(!this.data||!a)return 0;e||(e=this.levels[0]);let l;return e?.forEach(i=>{const c=this.links[i].children;let d=a.includes(i)?1:0;c&&c.length>0&&(this.checkRelation==="related"?d=this.initValue(c,a):this.initValue(c,a)),this.setValueMap(i,d),l===void 0?l=d:l!==d&&(l=2)}),l}initDisabled(e,a){e||(e=this.levels[0]),e?.forEach(l=>{const i=this.dataMap[l].disabled||a;this.dataMap[l].disabled=i;const c=this.links[l].children;c&&c.length>0&&this.initDisabled(c,i)})}setValue(e){this.initValue(null,e)}setValueMap(e,a){this.valueMap[e]=a}getAllChecked(){let e=[];for(let a in this.valueMap)this.valueMap[a]&&e.push(a);return e}getParentIds(e,a){a.push(e);const l=this.links[e];l.parent&&this.getParentIds(l.parent,a)}getOpened(){const e=[];return this.dataMap.forEach(a=>{a._open&&e.push(a.id)}),e}getValue(e){const a=[];for(let l in this.valueMap){const i=this.valueMap[l];switch(e){case I.Full:i===1&&a.push(l);break;case I.Half:i>=1&&a.push(l);break;case I.Child:{const c=this.links[l].children;i===1&&(!c||c.length===0)&&a.push(l);break}case I.Shallow:i===1&&((()=>{const d=this.links[l].parent;return d?this.valueMap[d]===1:!1})()||a.push(l));break}}return a}getAllCheckedData(e){const a=[];return e.forEach(l=>{const i=this.dataMap[l];a.push(i)}),a}getText(e){const a=[];return e.forEach(l=>{const i=this.dataMap[l];a.push(i.title)}),a}ifSets(e){const a={};e.forEach(i=>{this.ifSet(i,1,"",a)});let l=[];for(let i in a)a[i]&&l.push(i);return l}ifSet(e,a,l,i){this.isDisabled(e)||(i[e]=a);const{parent:c,children:d}=this.links[e];if(l!=="asc"&&d&&d.forEach(f=>{this.ifSet(f,a,"desc",i)}),l!=="desc"&&c){const f=c;let C=a;this.links[f].children.forEach(b=>{C!==i[b]&&(C=2)}),this.ifSet(f,C,"asc",i)}}set(e,a,l){if(this.isDisabled(e)||this.setValueMap(e,a),this.checkRelation==="unRelated")return;const{parent:i,children:c}=this.links[e];if(l!=="asc"&&c&&c.forEach(d=>{this.set(d,a,"desc")}),l!=="desc"&&i){const d=i;let f=a;this.links[d].children.forEach(C=>{f!==this.valueMap[C]&&(f=2)}),this.set(d,f,"asc")}}disabledNode(e){this.initDisabled([e],!0)}isDisabled(e){const a=this.dataMap[e];return a?a.disabled:!1}addChildren(e,a){this.dataMap[e]&&a.forEach(d=>{this.dataMap[d.id]=d});const i=this.links[e],c=a.map(d=>{const f={};return this.links[d.id]=f,f.parent=e,d.id});i.children=c}}const ie=x('<span class="cm-tree-item-folder">'),ce=x('<span class="cm-tree-item-file">'),se=x('<span class="cm-tree-item-icon">'),de=x('<li><div class="cm-tree-item-content"><span><span class="cm-tree-text">'),re=x('<span><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3571" width="16" height="16"><path d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z" p-id="3572">'),ue=x('<span class="cm-tree-patch">');function he(t){const e=fe(),[a,l]=J(!1),i=()=>({"padding-left":t.level*t.gutter+"px"}),c=()=>t.store.dataMap[t.data.id]._opened,d=()=>t.store.dataMap[t.data.id]._selected,f=()=>({"cm-tree-item":!0,"cm-tree-item-open":c(),"cm-tree-item-selected":d()}),C=()=>{let u=t.directory?o()?ie():ce():null;return t.data.icon&&(u=(()=>{const g=se();return v(g,()=>t.data.icon),g})()),u},b=()=>{t.store.dataMap[t.data.id].disabled||e&&e.onSelect&&e.onSelect(t.data)},r=async()=>{if(e){const u=t.store.dataMap[t.data.id];if(u.loading&&e.loadData){l(!0);try{const g=await e.loadData(t.data);g instanceof Array?e.addChildren(u.id,t.data,g):e.addChildren(u.id,t.data,[g]),e.cancelLoading(u.id)}catch{}finally{l(!1)}}e.onOpenClose(t.data.id)}},k=u=>{e&&e.onChecked(t.data.id,u)},o=()=>t.data.children&&t.data.children.length||t.data.loading,L=()=>{let u=0;return u=t.store.checkedMap[t.data.id],u===2?"indeterminate":u===1},R=u=>{e&&e.contextMenu&&e.onContextMenu&&e.onContextMenu({...t.data})};return(()=>{const u=de(),g=u.firstChild,_=g.firstChild,w=_.firstChild;return v(g,m(N,{get when(){return a()},get fallback(){return(()=>{const M=re();return M.$$click=r,A(()=>j(M,`cm-tree-arrow ${o()?"":"hide"}`)),M})()},get children(){return m(le,{color:"#1890ff",size:16})}}),_),v(g,m(N,{get when(){return t.multi},get children(){return m(ne,{get disabled(){return t.store.dataMap[t.data.id].disabled},get checked(){return L()},onChange:k})}}),_),v(g,C,_),_.$$contextmenu=R,w.$$click=b,v(w,()=>t.data.title),v(_,(()=>{const M=Q(()=>!!t.data.patch);return()=>M()?(()=>{const S=ue();return v(S,()=>t.data.patch),S})():null})(),null),v(u,m(N,{get when(){return t.data.children&&t.data.children.length},get children(){return m(P,{onSelect:b,get multi(){return t.multi},get directory(){return t.directory},get store(){return t.store},get data(){return t.data.children},get level(){return t.level+1},get gutter(){return t.gutter}})}}),null),A(M=>{const S=f(),T=i(),E=`cm-tree-title ${t.store.dataMap[t.data.id].disabled?"disabled":""}`;return M._v$=H(u,S,M._v$),M._v$2=W(g,T,M._v$2),E!==M._v$3&&j(_,M._v$3=E),M},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u})()}G(["contextmenu","click"]);const oe=x('<ul class="cm-tree-nodes">');function P(t){return(()=>{const e=oe();return v(e,m(X,{get each(){return t.data},children:a=>m(he,{data:a,get store(){return t.store},get level(){return t.level},get gutter(){return t.gutter},get multi(){return t.multi},get directory(){return t.directory}})})),e})()}const B=x("<div>"),K=p();function me(t){const e=()=>te(t,"cm-tree"),[a,l]=O(t,"value",""),[i,c]=O(t,"opened",[]),[d,f]=O(t,"selected",""),C=t.gutter??24,b=t.checkRelation??"related";let r=new q({value:a()||[],checkRelation:b,data:t.data});V(()=>{r=new q({value:[],checkRelation:b,data:t.data}),ee(()=>{o("data",t.data),o("dataMap",r.dataMap),o("selected",""),o("openIds",[]),o("checkedMap",{...r.valueMap})}),F(()=>{})});const[k,o]=Y({data:t.data,dataMap:r.dataMap,selected:"",openIds:[],checkedMap:{...r.valueMap}}),L=n=>{const s=i();s.includes(n)||(s.push(n),c([...s]))},R=n=>{const s=i();if(s.includes(n)){const h=s.indexOf(n);s.splice(h,1),c(s)}},u=(n,s)=>{r.set(n,s?1:0,"");const h=r.getAllChecked();l(h)};V(()=>{const n=i();F(()=>{k.openIds.forEach(s=>{n.includes(s)||o("dataMap",s,D(h=>{h._opened&&(h._opened=!1)}))})}),n.forEach(s=>{o("dataMap",s,D(h=>{h._opened||(h._opened=!0)}))}),o("openIds",n.concat([]))}),V(()=>{const n=d();o("dataMap",k.selected,D(s=>{s._selected=!1})),o("dataMap",n,D(s=>{s._selected=!0})),o("selected",n)}),V(()=>{let n=a();t.multi&&typeof n=="string"&&(n=n.split(",")),r.setValue(n);const s=r.getAllChecked();let h=[];F(()=>{for(let $ in k.checkedMap)k.checkedMap[$]&&!n.includes($)&&h.push($)}),h.forEach($=>{o("checkedMap",$,r.valueMap[$])}),s&&s.forEach($=>{o("checkedMap",$,r.valueMap[$])})});const g=n=>{const s=i();if(s.includes(n)){const h=s.indexOf(n);s.splice(h,1)}else s.push(n);c([...s])},_=n=>{f(n.id),t.onSelect&&t.onSelect(n)},w=n=>{f(n)},M=(n,s)=>{r.set(n,s?1:0,"");const h=r.getAllChecked();l(h),t.onChange&&t.onChange(h)},S=(n,s,h)=>{if(k.dataMap[n]){r.addChildren(n,h),r.set(n,0,"");const U=r.getAllChecked();l(U),o("dataMap",n,D(y=>{y.children=[],setTimeout(()=>{y.children=h})})),o("dataMap",D(y=>{h.map(z=>{y[z.id]=z})}))}},T=n=>{o("dataMap",n,"loading",!1)},E=()=>k.dataMap[k.selected];return t.ref&&t.ref({openNode:L,closeNode:R,checkNode:u,getAllChecked:()=>r.getValue(0),getAllCheckedData:n=>r.getAllCheckedData(n),getHalfChecked:()=>r.getValue(1),getChildChecked:()=>r.getValue(2),getShallowChecked:()=>r.getValue(3),getText:n=>r.getText(n),disabledNode:r.disabledNode,selectNode:w,getSelectNode:E,setValue:n=>{l(n)},getIfSets:n=>r.ifSets(n)}),m(K.Provider,{get value(){return{signal:[k,o],onSelect:_,onOpenClose:g,onChecked:M,loadData:t.loadData,addChildren:S,cancelLoading:T,onContextMenu:t.onContextMenu,contextMenu:t.contextMenu}},get children(){return m(N,{get when(){return t.contextMenu},get fallback(){return(()=>{const n=B();return v(n,m(P,{store:k,get data(){return k.data},level:0,gutter:C,get multi(){return t.multi},get directory(){return t.directory}})),A(s=>H(n,e(),s)),n})()},get children(){return m(Z,{trigger:"contextMenu",handler:".cm-tree-text",align:"bottomLeft",get menu(){return t.contextMenu},get onSelect(){return t.onSelectMenu},get children(){const n=B();return v(n,m(P,{store:k,get data(){return k.data},level:0,gutter:C,get multi(){return t.multi},get directory(){return t.directory}})),A(s=>H(n,e(),s)),n}})}})}})}const fe=()=>ae(K);export{me as T};