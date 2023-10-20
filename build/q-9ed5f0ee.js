import{H as C,W as x,V as g,a as h,Z as u,q as d,C as m,b,g as r,T as y,m as i,_ as n,z as k}from"./q-bd407218.js";import{I as B,e as p,R as S,B as P,f as _,h as T,i as $}from"./q-c22a52f9.js";const w=e=>{C(),x(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_s7JLZz7MCCQ"));const t=g(P),l=h({cols:e.columns||[],flexDir:e.stackColumnsAt==="never"?"row":e.reverseColumnsWhenStacked?"column-reverse":"column",gutterSize:typeof e.space=="number"?e.space||0:20,stackAt:e.stackColumnsAt||"tablet"}),v=u(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_adFEq2RWT9s",[t,e,l])),c=u(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_nBtMPbzd1Wc",[t,e,l]));return d("div",null,{class:r(s=>`builder-columns ${s.builderBlock.id}-breakpoints div-Columns`,[e],'`builder-columns ${p0.builderBlock.id}-breakpoints`+" div-Columns"'),style:r(s=>s.value,[v],"p0.value")},[m(B,{get styles(){return c.value},[b]:{styles:r(s=>s.value,[c],"p0.value")}},3,"c0_0"),(e.columns||[]).map(function(s,o){return d("div",{style:p(e,l,t,o)},{class:"builder-column div-Columns-2"},m(S,{get blocks(){return s.blocks},path:`component.options.columns.${o}.blocks`,get parent(){return e.builderBlock.id},styleProp:{flexGrow:"1"},[b]:{blocks:y(s,"blocks"),parent:r(f=>f.builderBlock.id,[e],"p0.builderBlock.id")}},3,"c0_1"),1,o)})],1,"c0_2")},z=()=>{const[e,t,l]=k();return`
        @media (max-width: ${_(t,l,e,"medium")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir-tablet);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-tablet) !important;
            margin-left: var(--column-margin-left-tablet) !important;
          }
        }

        @media (max-width: ${_(t,l,e,"small")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-mobile) !important;
            margin-left: var(--column-margin-left-mobile) !important;
          }
        },
      `},E=()=>{const[e,t,l]=k();return{"--flex-dir":l.flexDir,"--flex-dir-tablet":T(t,l,e,{stackedStyle:l.flexDir,desktopStyle:"row"})}},W=$,a=Object.freeze(Object.defineProperty({__proto__:null,s_7yLj4bxdI6c:w,s_adFEq2RWT9s:E,s_nBtMPbzd1Wc:z,s_s7JLZz7MCCQ:W},Symbol.toStringTag,{value:"Module"}));export{w as s_7yLj4bxdI6c,E as s_adFEq2RWT9s,z as s_nBtMPbzd1Wc,W as s_s7JLZz7MCCQ};
