import{T as i,j as e,_ as t}from"./Toastify.e0872475.js";import{s as a}from"./index.e3b0c442.0942e724.js";import"./index.45a47ed6.js";const m=i(function({message:r}){const n=()=>{if(r==="trevortylerlee@gmail.com")try{c(r)&&t.success("Email copied!")}catch(o){console.log(o),t.error("Error copying to clipboard")}else try{c(r)&&t.success("Phone number copied!")}catch(o){console.log(o),t.error("Error copying to clipboard")}},c=async o=>{try{return navigator.clipboard.writeText(o),!0}catch(l){return console.log(l),!1}};return e.jsx(e.Fragment,{children:e.jsx("button",{"aria-label":r==="trevortylerlee@gmail.com"?"Copy email":"Copy phone number",onClick:n,style:a,children:r})})});export{m as default};