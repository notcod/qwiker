import{A as i,j as u,g as r,C as l,m,d,_ as p,z as _}from"./q-bd407218.js";import{u as f}from"./q-e1926474.js";const b=s=>{const e=i(s,["action","spaReset","reloadDocument","onSubmit$"]),a=f();return u("form",{...e,children:l(d,null,3,"BC_0"),onSubmit$:m(()=>p(()=>Promise.resolve().then(()=>g),void 0),"s_p9MSze0ojs4",[a])},{action:"get","data-spa-reset":r(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined'),"preventdefault:submit":r(t=>!t.reloadDocument,[s],"!p0.reloadDocument")},0,"BC_1")},v=async(s,e)=>{const[a]=_(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),a("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},g=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:b,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{b as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};