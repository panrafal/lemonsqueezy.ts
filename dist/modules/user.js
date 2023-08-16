"use strict";var l=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var P=(s,r)=>{for(var n in r)l(s,n,{get:r[n],enumerable:!0})},S=(s,r,n,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of q(r))!L.call(s,t)&&t!==n&&l(s,t,{get:()=>r[t],enumerable:!(o=T(r,t))||o.enumerable});return s};var k=s=>S(l({},"__esModule",{value:!0}),s);var U={};P(U,{default:()=>E,getUser:()=>g});module.exports=k(U);var b=require("undici"),x=require("path");var c=class extends Error{constructor(n,o,t){super(o);this.status=n;this.message=o;this.errors=t;this.name="LemonSqueezyError"}};async function f({apiKey:s,apiVersion:r="v1",baseUrl:n="https://api.lemonsqueezy.com",data:o,headers:t,include:y,method:d="GET",page:h,params:R,path:O}){try{let i=new URL((0,x.join)(r,O),n);y&&i.searchParams.append("include",y.map(p=>m[p]).join(",")),h&&i.searchParams.append("page",h.toString()),R&&d==="GET"&&Object.entries(R).forEach(([p,e])=>i.searchParams.append(p,e));let a=await(0,b.fetch)(i.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${s}`,"Content-Type":"application/vnd.api+json",...t},method:d,...o&&d!=="GET"?{body:JSON.stringify(o)}:{}});if(!a.ok){let p=await a.json();throw new c(a.status,a.statusText,p.errors)}let u=await a.json();if(u.errors&&u.errors.length>0)throw u;return u}catch(i){throw i}}var m=(e=>(e.checkouts="checkouts",e.customers="customers",e.discounts="discounts",e.files="files",e.license_key_instances="license-key-instances",e.license_keys="license-keys",e.order_items="order-items",e.orders="orders",e.products="products",e.stores="stores",e.subscriptions="subscriptions",e.subscription_invoices="subscription-invoices",e.users="users",e.variants="variants",e))(m||{});async function g(s){return f({path:"/users/me",...s})}var E={getUser:g};0&&(module.exports={getUser});
//# sourceMappingURL=user.js.map