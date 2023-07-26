"use strict";var l=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var b=Object.prototype.hasOwnProperty;var A=(s,e)=>{for(var t in e)l(s,t,{get:e[t],enumerable:!0})},P=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!b.call(s,o)&&o!==t&&l(s,o,{get:()=>e[o],enumerable:!(n=x(e,o))||n.enumerable});return s};var T=s=>P(l({},"__esModule",{value:!0}),s);var q={};A(q,{default:()=>S,listAllOrderItems:()=>O,retrieveOrderItem:()=>f});module.exports=T(q);var y=require("undici"),I=require("path");async function m({apiKey:s,apiVersion:e="v1",baseUrl:t="https://api.lemonsqueezy.com",data:n,headers:o,include:R,method:c="GET",page:g,params:h,path:L}){try{let i=new URL((0,I.join)(e,L),t);R&&i.searchParams.append("include",R.map(p=>u[p]).join(",")),g&&i.searchParams.append("page",g.toString()),h&&c==="GET"&&Object.entries(h).forEach(([p,r])=>i.searchParams.append(p,r));let a=await(0,y.fetch)(i.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${s}`,"Content-Type":"application/vnd.api+json",...o},method:c,...n&&c!=="GET"?{body:JSON.stringify(n)}:{}});if(!a.ok){let p=await a.json();throw{status:a.status,message:a.statusText,errors:p.errors}}let d=await a.json();if(d.errors&&d.errors.length>0)throw d;return d}catch(i){throw i}}var u=(r=>(r.checkouts="checkouts",r.customers="customers",r.discounts="discounts",r.files="files",r.license_key_instances="license-key-instances",r.license_keys="license-keys",r.order_items="order-items",r.orders="orders",r.products="products",r.stores="stores",r.subscriptions="subscriptions",r.subscription_invoices="subscription-invoices",r.users="users",r.variants="variants",r))(u||{});async function O(s){let{orderId:e,productId:t,variantId:n,...o}=s;return m({params:{...e?{order_id:e}:{},...t?{product_id:t}:{},...n?{variant_id:n}:{}},path:"/order-items",...o})}async function f(s){let{id:e,...t}=s;return m({path:`/order-items/${e}`,...t})}var S={listAllOrderItems:O,retrieveOrderItem:f};0&&(module.exports={listAllOrderItems,retrieveOrderItem});
//# sourceMappingURL=orderItem.js.map