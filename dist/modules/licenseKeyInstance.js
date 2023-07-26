"use strict";var d=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var b=(n,e)=>{for(var t in e)d(n,t,{get:e[t],enumerable:!0})},A=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of x(e))!v.call(n,r)&&r!==t&&d(n,r,{get:()=>e[r],enumerable:!(o=K(e,r))||o.enumerable});return n};var P=n=>A(d({},"__esModule",{value:!0}),n);var k={};b(k,{default:()=>T,listAllLicenseKeyInstances:()=>y,retrieveLicenseKeyInstance:()=>L});module.exports=P(k);var h=require("undici"),O=require("path");async function u({apiKey:n,apiVersion:e="v1",baseUrl:t="https://api.lemonsqueezy.com",data:o,headers:r,include:f,method:m="GET",page:R,params:g,path:I}){try{let i=new URL((0,O.join)(e,I),t);f&&i.searchParams.append("include",f.map(c=>l[c]).join(",")),R&&i.searchParams.append("page",R.toString()),g&&m==="GET"&&Object.entries(g).forEach(([c,s])=>i.searchParams.append(c,s));let a=await(0,h.fetch)(i.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${n}`,"Content-Type":"application/vnd.api+json",...r},method:m,...o&&m!=="GET"?{body:JSON.stringify(o)}:{}});if(!a.ok){let c=await a.json();throw{status:a.status,message:a.statusText,errors:c.errors}}let p=await a.json();if(p.errors&&p.errors.length>0)throw p;return p}catch(i){throw i}}var l=(s=>(s.checkouts="checkouts",s.customers="customers",s.discounts="discounts",s.files="files",s.license_key_instances="license-key-instances",s.license_keys="license-keys",s.order_items="order-items",s.orders="orders",s.products="products",s.stores="stores",s.subscriptions="subscriptions",s.subscription_invoices="subscription-invoices",s.users="users",s.variants="variants",s))(l||{});async function y(n){let{licenseKeyId:e,...t}=n;return u({params:{...e?{license_key_id:e}:{}},path:"/license-key-instances",...t})}async function L(n){let{id:e,...t}=n;return u({path:`/license-key-instances/${e}`,...t})}var T={listAllLicenseKeyInstances:y,retrieveLicenseKeyInstance:L};0&&(module.exports={listAllLicenseKeyInstances,retrieveLicenseKeyInstance});
//# sourceMappingURL=licenseKeyInstance.js.map