import{z as g,G as m,P as h,C as s,q as l,g as p,s as x,R as i,E as w,b as o,m as d,_ as c}from"./q-bd407218.js";import{useDadJoke as f}from"./q-35534059.js";import"./q-e1926474.js";const v=(t,r)=>{const[e]=g();return e.value=r.value},y=()=>{const t=m("busy"),r=h(d(()=>c(()=>Promise.resolve().then(()=>b),void 0),"s_BD1fPe8s0LY",[t])),e=f();return s(i,{children:[l("section",null,{class:"bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"},[l("div",null,{class:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative"},[l("a",null,{class:"inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800",href:"#"},[l("span",null,{class:"text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3"},"New",3,null)," ",l("span",null,{class:"text-sm font-medium"},"Jumbotron component was launched! See what's new",3,null),l("svg",null,{"aria-hidden":"true",class:"w-2.5 h-2.5 ml-2",fill:"none",viewBox:"0 0 6 10",xmlns:"http://www.w3.org/2000/svg"},l("path",null,{d:"m1 9 4-4-4-4",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},null,3,null),3,null)],3,null),l("h1",null,{class:"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"},"We invest in the world’s potential",3,null),l("p",null,{class:"mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200"},"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",3,null),l("form",null,{class:"w-full max-w-md mx-auto"},[l("label",null,{class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",for:"default-email"},"Email sign-up",3,null),l("div",null,{class:"relative"},[l("div",null,{class:"absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"},l("svg",null,{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 16",xmlns:"http://www.w3.org/2000/svg"},[l("path",null,{d:"m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"},null,3,null),l("path",null,{d:"M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"},null,3,null)],3,null),3,null),l("input",null,{class:"block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",id:"default-email",placeholder:"Enter your email here...",required:!0,type:"email"},null,3,null),l("button",null,{class:"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"submit"},"Sign up",3,null)],3,null)],3,null)],3,null),l("div",null,{class:"bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"},null,3,null)],3,null),l("h1",null,null,"home/index 👋",3,null),l("p",null,{class:"text-3xl font-bold underline"},["Can't wait to see what you build with qwik!",l("br",null,null,null,3,null),l("button",null,{class:"bg-violet-500 hover:bg-violet-600"},"Hello",3,null),"Happy coding."],3,null),l("section",null,{class:"section bright"},l("p",null,null,p(n=>n.value.joke,[e]),3,null),3,null),l("label",null,null,["Query: ",l("input",null,{onInput$:d(()=>c(()=>Promise.resolve().then(()=>b),void 0),"s_r00dKjrBczI",[t]),value:t},null,3,null)],3,null),l("button",null,null,"search",3,null),s(x,{onPending:()=>s(i,{children:"loading..."},3,"IV_0"),onResolved:n=>l("ul",null,{class:"bg-[red] text-white p-8"},n.map((u,a)=>l("li",null,{class:"pl-4 mb-3 underline"},[" ",">>"," ",w(u,"value")],1,a)),1,"IV_1"),value:r,[o]:{onPending:o,onResolved:o,value:o}},3,"IV_2")]},1,"IV_3")},k=async({track:t,cleanup:r})=>{const[e]=g();t(()=>e.value);const n=new AbortController;if(r(()=>n.abort()),e.value.length<3)return[];const u=new URL("https://api.chucknorris.io/jokes/search");return u.searchParams.set("query",e.value),(await(await fetch(u,{signal:n.signal})).json()).result},b=Object.freeze(Object.defineProperty({__proto__:null,s_BD1fPe8s0LY:k,s_l9h22MOdjKM:y,s_r00dKjrBczI:v},Symbol.toStringTag,{value:"Module"}));export{k as s_BD1fPe8s0LY,y as s_l9h22MOdjKM,v as s_r00dKjrBczI};