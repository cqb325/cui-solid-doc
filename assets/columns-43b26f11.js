import{n as p,J as ee,b as X,a as c,O as H,u as A,i as _,f as P,I as D,g as z,h as N,A as W,Q as V,t as C,s as M,F as T,v as j,c as ce,Y as U,R as S,r as oe,k as se,p as he,j as ue,q as fe}from"./index-0246dc72.js";import{I as J,b as ge}from"./code-558518d5.js";const me=C('<span class="cm-table-sort">'),ye=C('<span class="cm-table-resize">'),xe=C('<th><div class="cm-table-cell">'),_e=C('<span class="cm-table-tree-level">'),we=C('<td><div class="cm-table-cell">'),be=C('<span class="cm-table-tree-icon-empty">');function q(e){let t;const n=e.column,i=e.colIndex,l=le();ee(()=>{setTimeout(()=>{o()})});const r=()=>({"cm-table-head-col":e.type==="th","cm-table-cell-fixed-left-last":n.fixedLeftLast&&e.showFixedLeft,"cm-table-cell-fixed-right-first":n.fixedRightFirst&&e.showFixedRight});X(()=>{n.width,n._,o()});const o=()=>{if(n.fixed&&t&&!e.placeholder){if(n.fixed==="left"){t.style.position="static";const d=t.closest(".cm-table");if(d){const b=d.querySelector("thead");let g=0;for(let y=1;y<=i;y++){const $=b.querySelector("th:nth-child("+y+")");$&&(g+=$.getBoundingClientRect().width)}t.style.position="sticky",t.style.left=g+"px",t.style.zIndex=e.type==="th"?3:1,t.classList.add("cm-table-cell-fixed-left"),n.fixedLeftLast&&e.showFixedLeft&&t.classList.add("cm-table-cell-fixed-left-last")}}if(n.fixed==="right"){const d=t.closest(".cm-table");if(d){const b=d.querySelector("thead"),g=b.querySelectorAll("th").length;let y=0;for(let $=i+2;$<=g;$++){const E=b.querySelector("th:nth-child("+$+")");console.log(E),y+=E.getBoundingClientRect().width}t.style.position="sticky",t.style.right=y+"px",t.style.zIndex=e.type==="th"?3:1,t.classList.add("cm-table-cell-fixed-right"),n.fixedRightFirst&&e.showFixedRight&&t.classList.add("cm-table-cell-fixed-right-first")}}}},f=()=>e.data._showChildren?"minus-square":"plus-square",a=d=>{l&&l.onRowChecked(e.data,d)},u=d=>{l&&l.onHeadChecked(d)},s=d=>{l&&l.onSort(n,d)},w=()=>{l&&l.onShowChildren(e.data)},k=()=>{l&&l.onExpand(n,e.data)},R=d=>{l&&l.onDragStart(n,d)},v=()=>{const d=e.column;return e.type==="td"?d.type==="index"?e.index+1:d.type==="checkbox"?c(J,{get disabled(){return e.data._disabled},get checked(){return e.data._checked},onChange:a}):e.data._type==="expandChildren"?e.data.render?e.data.render():null:d.type==="expand"?c(D,{name:"chevron-right",get class(){return`cm-table-expand ${e.data._expand?"cm-table-expand-open":""}`},onClick:k}):d.render&&typeof d.render=="function"?d.render(e.data[d.name],d,e.data):e.data[d.name]:d.type==="checkbox"?c(J,{get checked(){return e.checkedAll},onChange:u}):e.column.title};return c(V,{get children(){return[c(H,{get when(){return e.type==="th"},get children(){const d=xe(),b=d.firstChild;return A(g=>{t=g,e.ref&&e.ref(g)},d),_(b,v,null),_(b,c(P,{get when(){return n.sort},get children(){const g=me();return _(g,c(D,{name:"chevron-up",get class(){return n.sortType==="asc"?"cm-table-sort-active":""},get onClick(){return s.bind(null,"asc")}}),null),_(g,c(D,{name:"chevron-down",get class(){return n.sortType==="desc"?"cm-table-sort-active":""},get onClick(){return s.bind(null,"desc")}}),null),g}}),null),_(b,c(P,{get when(){return n.resize&&n.width&&l&&l.border},get children(){const g=ye();return g.$$mousedown=R,g}}),null),z(g=>{const y=r(),$=e.colIndex;return g._v$=N(d,y,g._v$),$!==g._v$2&&W(d,"data-index",g._v$2=$),g},{_v$:void 0,_v$2:void 0}),d}}),c(H,{get when(){return e.type==="td"},get children(){const d=we(),b=d.firstChild,g=t;return typeof g=="function"?A(g,d):t=d,_(b,c(P,{get when(){return n.tree},get children(){return[(()=>{const y=_e();return z(()=>`${e.data._level*16}px`!=null?y.style.setProperty("padding-left",`${e.data._level*16}px`):y.style.removeProperty("padding-left")),y})(),c(P,{get when(){return e.data.children&&e.data.children.length},get fallback(){return be()},get children(){return c(D,{get name(){return f()},class:"cm-table-tree-icon",onClick:w})}})]}}),null),_(b,v,null),z(y=>{const $=r(),E=e.colSpan,B=e.rowSpan;return y._v$3=N(d,$,y._v$3),E!==y._v$4&&W(d,"colspan",y._v$4=E),B!==y._v$5&&W(d,"rowspan",y._v$5=B),y},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),d}})]}})}p(["mousedown"]);const ve=C('<colgroup class="cm-table-colgroup">'),$e=C('<col class="cm-table-col">');function O(e){return(()=>{const t=ve();return _(t,c(T,{get each(){return e.data.columns},children:(n,i)=>{const l=()=>({width:n.width});return(()=>{const r=$e();return z(o=>M(r,l(),o)),r})()}})),t})()}const Ce=C('<div class="cm-table-header"><table><thead><tr>');function ke(e){let t,n;const i=f=>{const a=f.target,u=a.getAttribute("data-index");if(u){const s=parseInt(u);a&&e.onInitColumnWidth(s,a.getBoundingClientRect().width)}},l=f=>{const a=f.target;if(a.tagName==="THEAD"){const u=a.getBoundingClientRect();e.onResizeHeader(u.width,u.height),n.style.height=u.height+"px"}else setTimeout(()=>{const u=a.getBoundingClientRect(),s=a.closest(".cm-table-body").getBoundingClientRect();u.height>s.height?n.style.overflowY="scroll":n.style.overflowY=""})},r=new ResizeObserver(f=>{f.forEach(a=>i(a))});X(()=>{e.data.columns.length&&setTimeout(()=>{const a=t.querySelectorAll("th"),u=a.length;for(let s=0;s<u;s++)r.unobserve(a[s]),r.observe(a[s])})}),j(()=>{const f=t.querySelectorAll("th"),a=f.length;for(let u=0;u<a;u++)f[u]&&r.unobserve(f[u])}),ee(()=>{const f=new ResizeObserver(s=>{s.forEach(w=>l(w))});f.observe(t);const u=t.closest(".cm-table").querySelector(".cm-table-body-wrap");f.observe(u),j(()=>{f.unobserve(t),f.unobserve(u)})});const o=()=>({position:e.sticky?"sticky":"",top:0,"z-index":2,"min-width":"100%","overflow-x":"hidden"});return X(()=>{n&&(n.scrollLeft=e.data.headerLeft)}),(()=>{const f=Ce(),a=f.firstChild,u=a.firstChild,s=u.firstChild,w=n;typeof w=="function"?A(w,f):n=f,_(a,c(O,{get data(){return e.data}}),u);const k=t;return typeof k=="function"?A(k,u):t=u,_(s,c(T,{get each(){return e.data.columns},children:(R,v)=>c(q,{column:R,type:"th",get showFixedLeft(){return e.data.showFixedLeft},get colIndex(){return v()},get showFixedRight(){return e.data.showFixedRight},get checkedAll(){return e.data.checkedAll},ref:d=>{Promise.resolve().then(()=>{e.onInitColumnWidth(v(),d.getBoundingClientRect().width)})}})})),z(R=>M(f,o(),R)),f})()}const Re=C("<tr>"),Se=C('<tr><td><div class="cm-table-emprty-cell">暂无数据'),Ee=C('<div><table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'),Le=C('<table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'),ze=C('<div class="cm-table-body">');function Q(e){const t=le(),n=()=>{e.data._type!=="expandChildren"&&t&&t.highlight&&t.onSelectRow(e.data)},i=()=>({"cm-table-row":!0,"cm-table-row-ood":e.index%2===0,"cm-table-row-even":e.index%2!==0,"cm-table-row-selected":e.data._highlight}),l=()=>({display:e.data._show?"":"none"});return(()=>{const r=Re(),o=e.ref;return typeof o=="function"?A(o,r):e.ref=r,r.$$click=n,_(r,c(V,{get children(){return[c(H,{get when(){return e.data._type==="expandChildren"},get children(){return c(q,{type:"td",get data(){return e.data},get column(){return e.data.column},get index(){return e.index},get showFixedLeft(){return e.store.showFixedLeft},get showFixedRight(){return e.store.showFixedRight},get colSpan(){return e.store.columns.length}})}}),c(H,{get when(){return e.data._type!=="expandChildren"},get children(){return c(T,{get each(){return e.store.columns},children:(f,a)=>{let[u,s]=[1,1];if(t&&t.spanMethod){const w=t.spanMethod(e.data,f,e.index,a());w&&([u,s]=w)}return c(P,{when:u&&s,fallback:null,get children(){return c(q,{type:"td",get data(){return e.data},column:f,get index(){return e.index},get colIndex(){return a()},get showFixedLeft(){return e.store.showFixedLeft},get showFixedRight(){return e.store.showFixedRight},rowSpan:u,colSpan:s})}})}})}})]}})),z(f=>{const a=i(),u=l();return f._v$=N(r,a,f._v$),f._v$2=M(r,u,f._v$2),f},{_v$:void 0,_v$2:void 0}),r})()}function G(e){return(()=>{const t=Se(),n=t.firstChild;return z(()=>W(n,"colspan",e.store.columns.length)),t})()}function Fe(e){let t;const[n,i]=ce(),l=()=>{const a=e.data.columns;let u=0;return a.forEach(s=>{u+=s._width||0}),u};X(()=>{e.data.data;const a=e.data.headerSize.height;if(e.virtual){const u=e.height??document.documentElement.clientHeight;i(u-a)}else setTimeout(()=>{const s=t.querySelector(".cm-table-body-wrap").getBoundingClientRect().height;if(e.height&&s>e.height-a){const w=e.height-a;i(w)}})});const r=()=>{e.onScroll(t.scrollLeft,t.clientWidth,t.scrollWidth)};let o,f;return(()=>{const a=ze();a.addEventListener("scroll",r);const u=t;return typeof u=="function"?A(u,a):t=a,a.style.setProperty("display","block"),a.style.setProperty("width","100%"),a.style.setProperty("overflow","auto"),a.style.setProperty("position","relative"),_(a,c(V,{get children(){return[c(H,{get when(){return e.virtual},get children(){const s=Ee(),w=s.firstChild,k=w.firstChild,R=k.firstChild,v=k.nextSibling,d=o;typeof d=="function"?A(d,s):o=s,s.style.setProperty("min-width","100%"),s.style.setProperty("will-change","transform"),s.style.setProperty("box-sizing","border-box"),s.style.setProperty("contain","strict"),s.style.setProperty("position","absolute"),s.style.setProperty("top","0"),s.style.setProperty("left","0"),_(w,c(O,{get data(){return e.data}}),k),k.style.setProperty("display","none"),_(R,c(T,{get each(){return e.data.columns},children:(g,y)=>c(q,{column:g,type:"th",placeholder:!0,get colIndex(){return y()},get checkedAll(){return e.data.checkedAll}})}));const b=f;return typeof b=="function"?A(b,v):f=v,_(v,c(ge,{scrollElement:t,contentElement:o,bodyElement:f,get items(){return e.data.data},itemEstimatedSize:30,get maxHeight(){return n()||e.height},children:g=>{const y=g.item;return c(Q,{data:y,get index(){return g.index},get store(){return e.data},ref($){const E=g.ref;typeof E=="function"?E($):g.ref=$}})}}),null),_(v,c(P,{get when(){return!e.data.data||!e.data.data.length},get children(){return c(G,{get store(){return e.data}})}}),null),z(()=>l()+"px"!=null?s.style.setProperty("width",l()+"px"):s.style.removeProperty("width")),s}}),c(H,{get when(){return!e.virtual},get children(){const s=Le(),w=s.firstChild,k=w.firstChild,R=w.nextSibling,v=f;return typeof v=="function"?A(v,s):f=s,_(s,c(O,{get data(){return e.data}}),w),w.style.setProperty("display","none"),_(k,c(T,{get each(){return e.data.columns},children:(d,b)=>c(q,{column:d,type:"th",placeholder:!0,get colIndex(){return b()},get checkedAll(){return e.data.checkedAll}})})),_(R,c(T,{get each(){return e.data.data},children:(d,b)=>c(Q,{data:d,get index(){return b()},get store(){return e.data}})}),null),_(R,c(P,{get when(){return!e.data.data||!e.data.data.length},get children(){return c(G,{get store(){return e.data}})}}),null),s}})]}})),z(()=>n()+"px"!=null?a.style.setProperty("height",n()+"px"):a.style.removeProperty("height")),a})()}p(["click"]);function K(e){let t=-1,n=Number.MAX_VALUE;return e&&(e.forEach((i,l)=>{i.id=i.id??U(),i.fixed==="left"&&(t=Math.max(t,l)),i.fixed==="right"&&(n=Math.min(n,l))}),t>-1&&e[t]&&(e[t].fixedLeftLast=!0),n<Number.MAX_VALUE&&e[n]&&(e[n].fixedRightFirst=!0)),{maxFixedLeft:t,minFixedRight:n}}function Ae(e,t,n,i,l,r){(e>=0||t<Number.MAX_VALUE)&&(n("showFixedLeft",i>0),n("showFixedRight",l+i<r))}function Z(e){let t=e??[];return t=[...t],t.forEach((n,i)=>{n.id=n.id??U(),n._originSort=i}),t=Pe(e),t}function Ie(e,t,n){let i=[...t.data];n.sortType===""?i.sort((l,r)=>l._originSort-r._originSort>0?1:-1):n.sortMethod&&typeof n.sortMethod=="function"?i.sort(n.sortMethod):i.sort((l,r)=>{const o=n.name??"";return/^[0-9\.]+$/g.test(l[o])?(n.sortType==="asc"?1:-1)*(l[o]-r[o])>0?1:-1:(n.sortType==="asc"?1:-1)*l[o].localeCompare(r[o])}),e("data",i)}function te(e,t,n,i){e.forEach(l=>{l.id=l.id??U(),l._level=n,l._show=i,t.push(l),l.children&&l.children.length&&te(l.children,t,n+1,!!l._showChildren)})}function Pe(e){let t=[];return te(e,t,0,!0),t}const Y=(e,t)=>{e[t]&&e[t].children&&e[t].children.forEach(n=>{n._show=!1,Y(e,n.id)})},Te=(e,t)=>{const n=e[t];n&&n.children&&n.children.forEach(i=>{i._show=n._showChildren,Y(e,i.id)})};function Xe(e,t){e("data",n=>n.id===t.id,S(n=>n._showChildren=!n._showChildren)),e("data",S(n=>{const i=t.children.map(r=>r.id),l={};n.forEach(r=>{l[r.id]=r}),i.forEach(r=>{l[r]&&(l[r]._show=t._showChildren),t._showChildren?Te(l,r):Y(l,r)})}))}function He(e,t,n,i){e("columns",l=>l.name===n.name,S(l=>{l.sortType===i?l.sortType="":l.sortType=i})),n.sort!=="custom"&&Ie(e,t,n)}function Me(e,t,n){e("data",S(i=>{let l=-1;const r=i.find((o,f)=>{const a=o.id===n.id;return a&&(l=f),a});r._expand?(i.splice(l+1,1),r._expand=!1):(r._expand=!0,i.splice(l+1,0,{_type:"expandChildren",_show:!0,column:t,render:t.render?.bind(null,n)}))}))}const qe=(e,t,n)=>{if(typeof n.button=="number"&&n.button!==0)return!1;e("resizing",!0);const i=n.target.getBoundingClientRect().right,l=n.target.closest(".cm-table-wrap").getBoundingClientRect().left;e("posX",i-l),e("startX",i-l),e("x",n.clientX),e("resizeId",t.id)},Be=(e,t,n)=>{if(e.resizing){const i=n.clientX-e.x;t("x",n.clientX);const l=e.posX+i;t("posX",l)}},De=(e,t)=>{t("resizing",!1),t("columns",i=>i.id===e.resizeId,S(i=>{i.width=i.width?parseFloat(i.width)+(e.posX-e.startX)+"px":void 0}));let n;e.columns.find((i,l)=>{const r=i.id===e.resizeId;return r&&(n=e.columns[l+1]?e.columns[l+1].id:void 0),r}),t("columns",i=>i.id===n,S(i=>{i._=U()})),t("posX",0)},We=C('<div><div class="cm-table-resize-helper"></div><div class="cm-table-loading"></div><div class="cm-table">'),ne=he();function Oe(e){const t=()=>ue(e,"cm-table-wrap",{"cm-table-border":e.border,"cm-table-stripe":e.stripe,"cm-table-small":e.size==="small","cm-table-resizing":r.resizing}),{maxFixedLeft:n,minFixedRight:i}=K(e.columns);let l=Z(e.data);X(()=>{l=Z(e.data),o("data",l),o("checkedAll",!1)}),X(()=>{K(e.columns),o("columns",e.columns??[]),o("showFixedLeft",!1),o("showFixedRight",!0)});const[r,o]=oe({columns:[],data:[],showFixedLeft:!1,showFixedRight:!0,checkedAll:!1,resizing:!1,x:0,posX:0,startX:0,resizeId:void 0,headerSize:{with:0,height:48},headerLeft:0}),f=h=>{const x=r.data.find(m=>m._highlight);x&&o("data",m=>m.id===x.id,S(m=>m._highlight=!1)),o("data",m=>m.id===h.id,S(m=>m._highlight=!0)),e.onRowSelect&&e.onRowSelect(h,x)},a=(h,x)=>{o("data",I=>I.id===h.id,S(I=>I._checked=x));let m=!1,F=0,L=0;r.data.forEach(I=>{I._disabled||L++,I._checked&&(F++,m="indeterminate")}),F>=L&&(m=!0),o("checkedAll",m),e.onRowChecked&&e.onRowChecked(h,x)},u=h=>{o("checkedAll",h),o("data",m=>h?!m._disabled&&!m._checked:!m._disabled&&m._checked,S(m=>m._checked=h));const x=r.data.filter(m=>m._checked);e.onCheckedAll&&e.onCheckedAll(x)},s=(h,x)=>{He(o,r,h,x),e.onSort&&e.onSort(h,h.sortType)},w=h=>{Xe(o,h)},k=(h,x)=>{Me(o,h,x)},R=(h,x)=>{qe(o,h,x),document.addEventListener("mousemove",v,!1),document.addEventListener("mouseup",d,!1)},v=h=>{Be(r,o,h)},d=()=>{console.log("end"),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",d),De(r,o)},b=()=>({display:r.resizing?"block":"none",left:r.posX+"px"}),g=()=>r.data.filter(h=>h._checked),y=(h,x)=>{const m=r.data.find(F=>{F.id});a(m,x)},$=(h,x)=>{o("columns",h,"_width",x)},E=(h,x)=>{o("headerSize","width",h),o("headerSize","height",x)},B=(h,x,m)=>{Ae(n,i,o,h,x,m),r.headerLeft!==h&&o("headerLeft",h)};e.ref&&e.ref({clearSelect(){o("data",h=>h._highlight,S(h=>h._highlight=!1))},checkAll(h){u(h)},getAllChecked(){return g()},setChecked:y});const ie=()=>({...e.style,"max-height":e.height?`${e.height}px`:""}),re=()=>!!e.height;return c(ne.Provider,{get value(){return{onSelectRow:f,onRowChecked:a,onHeadChecked:u,onSort:s,onShowChildren:w,onExpand:k,onDragStart:R,highlight:e.highlight,border:e.border,spanMethod:e.spanMethod}},get children(){const h=We(),x=h.firstChild,m=x.nextSibling,F=m.nextSibling;return _(h,c(P,{get when(){return e.loading},fallback:null,get children(){return c(se,{})}}),F),_(F,c(ke,{data:r,get sticky(){return re()},onInitColumnWidth:$,onResizeHeader:E,get virtual(){return e.virtual}}),null),_(F,c(Fe,{data:r,onScroll:B,get height(){return e.height},get virtual(){return e.virtual}}),null),z(L=>{const I=t(),ae=b(),de=ie();return L._v$=N(h,I,L._v$),L._v$2=M(x,ae,L._v$2),L._v$3=M(F,de,L._v$3),L},{_v$:void 0,_v$2:void 0,_v$3:void 0}),h}})}const le=()=>fe(ne),Ve=[{name:"name",title:"属性",width:"120px"},{name:"desc",title:"说明"},{name:"type",title:"类型"},{name:"default",title:"默认值",width:"100px"}],Ye=[{name:"name",title:"事件名称",width:"120px"},{name:"desc",title:"说明"},{name:"params",title:"返回值",width:"220px"}],je=[{name:"name",title:"插槽名称",width:"120px"},{name:"desc",title:"说明"}];export{Oe as T,Ye as e,Ve as p,je as s};
