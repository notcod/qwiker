import{o as V,V as E,y as H,t as U,F as b,m as v,_ as A,E as B,l as y,p as O,q as Q}from"./q-bd407218.js";const K='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',z=y("qc-s"),_t=y("qc-c"),mt=y("qc-ic"),$=y("qc-h"),Y=y("qc-l"),G=y("qc-n"),pt=y("qc-a"),Ct=y("qc-ir"),wt=v(()=>A(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),Et=()=>{},vt=b(v(()=>A(()=>import("./q-6fed947b.js"),["build/q-6fed947b.js","build/q-bd407218.js"]),"s_e0ssiDXoeAM")),R=new WeakMap,p=new Map,J="qaction",w=t=>t.pathname+t.search+t.hash,m=(t,e)=>new URL(t,e.href),X=(t,e)=>t.origin===e.origin,F=(t,e)=>t.pathname+t.search===e.pathname+e.search,Z=(t,e)=>t.pathname===e.pathname,tt=(t,e)=>t.search===e.search,et=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+J+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},At=(t,e)=>{const s=t.href;if(typeof s=="string"&&typeof t.target!="string"&&!t.reload)try{const n=m(s.trim(),e.url),o=m("",e.url);if(X(n,o))return w(n)}catch(n){console.error(n)}else if(t.reload)return w(m("",e.url));return null},St=(t,e,s)=>{if(t.prefetch===!0&&e){const n=m(e,s.url),o=m("",s.url);if(!Z(n,o)||!tt(n,o))return""}return null},nt=t=>t&&typeof t.then=="function",qt=(t,e,s,n)=>{const o=st(),i={head:o,withLocale:a=>O(n,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[c];if(nt(l))throw new Error("Loaders returning a function can not be referred to in the head function.");return l},...e};for(let a=s.length-1;a>=0;a--){const c=s[a]&&s[a].head;c&&(typeof c=="function"?L(o,O(n,()=>c(i))):typeof c=="object"&&L(o,c))}return i.head},L=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),C(t.meta,e.meta),C(t.links,e.links),C(t.styles,e.styles),C(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},C=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},st=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function ot(t,e){const s=I(t),n=P(t),o=I(e),r=P(e);return M(t,s,n,e,o,r)}function M(t,e,s,n,o,r){let i=null;for(;e<s;){const a=t.charCodeAt(e++),c=n.charCodeAt(o++);if(a===91){const l=x(t,e),f=e+(l?3:0),h=q(t,f,s,93),u=t.substring(f,h),g=q(t,h+1,s,47),d=t.substring(h+1,g);e=h+1;const _=o-1;if(l){const k=it(u,d,n,_,r,t,e+d.length+1,s);if(k)return Object.assign(i||(i={}),k)}const S=q(n,_,r,47,d);if(S==-1)return null;const T=n.substring(_,S);if(!l&&!d&&!T)return null;o=S,(i||(i={}))[u]=decodeURIComponent(T)}else if(a!==c&&!(isNaN(c)&&rt(t,e)))return null}return N(t,e)&&N(n,o)?i||{}:null}function rt(t,e){return t.charCodeAt(e)===91&&x(t,e+1)}function P(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function N(t,e){const s=t.length;return e>=s||e==s-1&&t.charCodeAt(e)===47}function I(t){return t.charCodeAt(0)===47?1:0}function x(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function q(t,e,s,n,o=""){for(;e<s&&t.charCodeAt(e)!==n;)e++;const r=o.length;for(let i=0;i<r;i++)if(t.charCodeAt(e-r+i)!==o.charCodeAt(i))return-1;return e-r}let W;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(W||(W={}));function it(t,e,s,n,o,r,i,a){s.charCodeAt(n)===47&&n++;let c=o;const l=e+"/";let f=5;for(;c>=n&&f--;){const h=M(r,i,a,s,c,o);if(h){let u=s.substring(n,Math.min(c,o));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),h[t]=decodeURIComponent(u),h}c=at(s,n,l,c,n-1)+l.length}return null}function at(t,e,s,n,o){let r=t.lastIndexOf(s,n);return r==n-s.length&&(r=t.lastIndexOf(s,n-s.length-1)),r>e?r:o}const Dt=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0],i=ot(r,n);if(i){const a=o[1],c=o[3],l=new Array(a.length),f=[],h=ct(e,n);let u;return a.forEach((g,d)=>{j(g,f,_=>l[d]=_,s)}),j(h,f,g=>u=g==null?void 0:g.default,s),f.length>0&&await Promise.all(f),[r,i,l,u,c]}}return null},j=(t,e,s,n)=>{if(typeof t=="function"){const o=R.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(i=>{n!==!1&&R.set(t,i),s(i)})):r&&s(r)}}},ct=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},bt=(t,e,s,n,o=!1)=>{if(e!=="popstate"){const r=F(s,n),i=s.hash===n.hash;if(!r||!i){const a={_qCityScroll:lt()};o?t.history.replaceState(a,"",w(n)):t.history.pushState(a,"",w(n))}}},lt=()=>({x:0,y:0,w:0,h:0}),ft=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ht=async(t,e,s,n)=>{const o=t.pathname,r=t.search,i=et(o,r,n);let a;n||(a=p.get(i)),ft({links:[o]});let c;if(!a){const l=ut(n);n&&(n.data=void 0),a=fetch(i,l).then(f=>{const h=new URL(f.url),u=h.pathname.endsWith("/q-data.json");if(h.origin!==location.origin||!u){location.href=h.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(g=>{const d=V(g,e);if(!d){location.href=t.href;return}if(s&&p.delete(i),d.redirect)location.href=d.redirect;else if(n){const _=d.loaders[n.id];c=()=>{n.resolve({status:f.status,result:_})}}return d});location.href=t.href}),n||p.set(i,a)}return a.then(l=>(l||p.delete(i),c&&c(),l))},ut=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Tt=()=>E($),kt=()=>E(Y),Ot=()=>E(G),Rt=()=>H(U("qwikcity")),Lt=(t,e,s,n)=>{t==="popstate"&&n?window.scrollTo(n.x,n.y):t==="link"&&(dt(e,s)||window.scrollTo(0,0))},dt=(t,e)=>{const s=t.hash.slice(1),n=s&&document.getElementById(s);return n?(n.scrollIntoView(),!0):!!(!n&&t.hash&&F(t,e))},Pt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),Nt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},It=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},Wt=b(v(()=>A(()=>import("./q-757bd580.js"),["build/q-757bd580.js","build/q-bd407218.js"]),"s_TxCFOy819ag"));function jt(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const Vt=b(v(()=>A(()=>import("./q-5bde9574.js"),["build/q-5bde9574.js","build/q-bd407218.js"]),"s_8gdLBszqbaM")),Bt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(D||(D=innerWidth),(!e||e&&D<520)&&ht(new URL(t.href),t))};let D=0;const Ft=t=>Q("script",{nonce:B(t,"nonce")},{dangerouslySetInnerHTML:K},null,3,"1Z_0"),Mt=(t,...e)=>{const{id:s,validators:n}=gt(e,t);function o(){return E(z,r=>{if(!(s in r))throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);return B(r,s)})}return o.__brand="server_loader",o.__qrl=t,o.__validators=n,o.__id=s,Object.freeze(o),o},gt=(t,e)=>{let s;const n=[];if(t.length===1){const o=t[0];o&&typeof o=="object"&&("validate"in o?n.push(o):(s=o.id,o.validation&&n.push(...o.validation)))}else t.length>1&&n.push(...t.filter(o=>!!o));return typeof s=="string"?s=`id_${s}`:s=e.getHash(),{validators:n.reverse(),id:s}},xt=async function*(t,e,s){const n=t.getReader();try{let o="";const r=new TextDecoder;for(;!(s!=null&&s.aborted);){const i=await n.read();if(i.done)break;o+=r.decode(i.value,{stream:!0});const a=o.split(/\n/);o=a.pop();for(const c of a)yield await V(c,e)}}finally{n.releaseLock()}};export{Tt as A,Et as B,_t as C,$ as D,Mt as E,vt as F,xt as G,Bt as H,Vt as L,Wt as Q,Y as R,Ft as S,kt as a,St as b,st as c,mt as d,G as e,z as f,At as g,pt as h,Ct as i,X as j,F as k,Nt as l,ht as m,Dt as n,Z as o,qt as p,p as q,Lt as r,It as s,m as t,Ot as u,Pt as v,wt as w,bt as x,jt as y,Rt as z};