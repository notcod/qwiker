import{_ as f,z as Y,L as Z,f as st,y as it,h as lt,J as ct,t as ut,a as U,i as dt,G as j,K as v,c as _t,C as mt,m as z,d as pt,N as vt}from"./q-bd407218.js";import{t as ft,j as $,k as J,r as tt,l as et,m as ot,n as W,o as yt,p as ht,q as St,s as P,v as w,w as Ct,x as Et,y as bt,z as qt,c as gt,C as wt,d as Lt,D as Rt,R as Pt,e as At,f as Dt,h as It,i as Tt}from"./q-fa512c02.js";const kt=":root{view-transition-name:none}";const V=()=>f(()=>import("./q-128c5b39.js"),["build/q-128c5b39.js","build/q-bd407218.js"]),Q=[["/",[V,()=>f(()=>import("./q-cac970a1.js"),["build/q-cac970a1.js","build/q-bd407218.js"])]],["home/about/",[V,()=>f(()=>import("./q-f7068e36.js"),["build/q-f7068e36.js","build/q-bd407218.js"])]],["home/",[V,()=>f(()=>import("./q-a946fbf5.js"),["build/q-a946fbf5.js","build/q-bd407218.js","build/q-fa512c02.js"])]],["[...index]",[V,()=>f(()=>import("./q-cd064ce6.js"),["build/q-cd064ce6.js","build/q-bd407218.js","build/q-fa512c02.js"])]]],B=[];const G=!0;const Ot=async(y,n)=>{const[h,C,a,E]=Y(),{type:i="link",forceReload:d=y===void 0,replaceState:_=!1,scroll:b=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=y===void 0?l:ft(y,E.url);if(!$(o,l)){location.href=o.href;return}if(!d&&J(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),et()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:d,replaceState:_,scroll:b},ot(o,Z()),W(Q,B,G,o.pathname),h.value=void 0,E.isNavigating=!0,new Promise(q=>{C.r=q})},Ut=({track:y})=>{const[n,h,C,a,E,i,d,_,b,l,o]=Y();async function q(){var K;const[u,L]=y(()=>[l.value,n.value]),nt=st(""),A=o.url,m=L?"form":u.type,rt=u.replaceState;let r,R,x=null,D;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let I=W(Q,B,G,r.pathname);D=Z();const T=R=await ot(r,D,!0,L);if(!T){l.untrackedValue={type:m,dest:r};return}const H=T.href,k=new URL(H,r);yt(k,r)||(r=k,I=W(Q,B,G,r.pathname)),x=await I}if(x){const[I,T,H,k]=x,O=H,at=O[O.length-1];o.prevUrl=A,o.url=r,o.params={...T},l.untrackedValue={type:m,dest:r};const g=ht(R,o,O,nt);h.headings=at.headings,h.menu=k,C.value=it(O),a.links=g.links,a.meta=g.meta,a.styles=g.styles,a.scripts=g.scripts,a.title=g.title,a.frontmatter=g.frontmatter;{b.viewTransition!==!1&&(document.__q_view_transition__=!0);let X;m==="popstate"&&(X=et()),u.scroll&&(!u.forceReload||!J(r,A))&&(m==="link"||m==="popstate")&&(document.__q_scroll_restore__=()=>tt(m,r,A,X));const F=R==null?void 0:R.loaders,t=window;if(F&&Object.assign(d,F),St.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,p=history.replaceState,S=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,c,N)=>(e=S(e),s.call(history,e,c,N)),history.replaceState=(e,c,N)=>(e=S(e),p.call(history,e,c,N))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const p=s.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const S=p.getAttribute("href"),e=new URL(location.href),c=new URL(S,e);if($(c,e)&&J(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...w(document.documentElement),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=w(document.documentElement);P(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=w(document.documentElement);P(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(K=t._qCityBootstrap)==null||K.remove(),t._qCityBootstrap=void 0,Ct.resolve()}if(m!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=w(document.documentElement);P(s)}Et(window,m,A,r,rt),lt(D).then(()=>{var S;bt(D).setAttribute("q:route",I);const p=w(document.documentElement);P(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(S=_.r)==null||S.call(_)})}}}q()},Vt=y=>{ct(z(()=>f(()=>Promise.resolve().then(()=>M),void 0),"s_RPDJAz33WLA"));const n=qt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=ut("url");if(!h)throw new Error("Missing Qwik URL Env Data");const C=new URL(h),a=U({url:C,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),E={},i=dt(U(n.response.loaders,{deep:!1})),d=j({type:"initial",dest:C,forceReload:!1,replaceState:!1,scroll:!0}),_=U(gt),b=U({headings:void 0,menu:void 0}),l=j(),o=n.response.action,q=o?n.response.loaders[o]:void 0,u=j(q?{id:o,data:n.response.formData,output:{result:q,status:n.response.status}}:void 0),L=z(()=>f(()=>Promise.resolve().then(()=>M),void 0),"s_fX0bDjeJa0E",[u,E,d,a]);return v(wt,b),v(Lt,l),v(Rt,_),v(Pt,a),v(At,L),v(Dt,i),v(It,u),v(Tt,d),_t(z(()=>f(()=>Promise.resolve().then(()=>M),void 0),"s_02wMImzEAbk",[u,b,l,_,n,L,i,E,y,d,a])),mt(pt,null,3,"qY_0")},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:vt,s_02wMImzEAbk:Ut,s_RPDJAz33WLA:kt,s_TxCFOy819ag:Vt,s_fX0bDjeJa0E:Ot},Symbol.toStringTag,{value:"Module"}));export{vt as _hW,Ut as s_02wMImzEAbk,kt as s_RPDJAz33WLA,Vt as s_TxCFOy819ag,Ot as s_fX0bDjeJa0E};
