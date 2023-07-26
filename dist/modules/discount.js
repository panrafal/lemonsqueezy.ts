"use strict";var l=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var b=Object.prototype.hasOwnProperty;var A=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},P=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of D(e))!b.call(t,n)&&n!==r&&l(t,n,{get:()=>e[n],enumerable:!(i=v(e,n))||i.enumerable});return t};var T=t=>P(l({},"__esModule",{value:!0}),t);var q={};A(q,{default:()=>S,listAllDiscounts:()=>f,retrieveDiscount:()=>R});module.exports=T(q);var O=require("undici"),L=require("path");async function c({apiKey:t,apiVersion:e="v1",baseUrl:r="https://api.lemonsqueezy.com",data:i,headers:n,include:g,method:m="GET",page:h,params:y,path:x}){try{let o=new URL((0,L.join)(e,x),r);g&&o.searchParams.append("include",g.map(u=>d[u]).join(",")),h&&o.searchParams.append("page",h.toString()),y&&m==="GET"&&Object.entries(y).forEach(([u,s])=>o.searchParams.append(u,s));let a=await(0,O.fetch)(o.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${t}`,"Content-Type":"application/vnd.api+json",...n},method:m,...i&&m!=="GET"?{body:JSON.stringify(i)}:{}});if(!a.ok){let u=await a.json();throw{status:a.status,message:a.statusText,errors:u.errors}}let p=await a.json();if(p.errors&&p.errors.length>0)throw p;return p}catch(o){throw o}}var d=(s=>(s.checkouts="checkouts",s.customers="customers",s.discounts="discounts",s.files="files",s.license_key_instances="license-key-instances",s.license_keys="license-keys",s.order_items="order-items",s.orders="orders",s.products="products",s.stores="stores",s.subscriptions="subscriptions",s.subscription_invoices="subscription-invoices",s.users="users",s.variants="variants",s))(d||{});async function f(t){let{storeId:e,...r}=t;return await c({params:{...e?{store_id:e}:{}},path:"/discounts",...r})}async function R(t){let{id:e,...r}=t;return c({path:`/discounts/${e}`,...r})}var S={listAllDiscounts:f,retrieveDiscount:R};0&&(module.exports={listAllDiscounts,retrieveDiscount});
//# sourceMappingURL=discount.js.map