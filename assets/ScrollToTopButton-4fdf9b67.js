import{r as s,j as e,F as n,d as i}from"./index-25cd8824.js";const c=()=>{const[l,t]=s.useState(!1),o=()=>{document.body.scrollHeight>800?t(!0):t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.useEffect(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),l?e.jsx("div",{className:"scroll-btn-container",children:e.jsx("button",{role:"button",className:"icon scroll-btn",title:"Scroll To Top","aria-label":"Scroll To Top",onClick:r,children:e.jsx(n,{icon:i})})}):null},u=c;export{u as S};
