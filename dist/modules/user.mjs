import{fetch as R}from"undici";import{join as O}from"node:path";async function p({apiKey:i,apiVersion:g="v1",baseUrl:l="https://api.lemonsqueezy.com",data:u,headers:y,include:c,method:a="GET",page:m,params:d,path:h}){try{let s=new URL(O(g,h),l);c&&s.searchParams.append("include",c.map(t=>o[t]).join(",")),m&&s.searchParams.append("page",m.toString()),d&&a==="GET"&&Object.entries(d).forEach(([t,e])=>s.searchParams.append(t,e));let r=await R(s.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${i}`,"Content-Type":"application/vnd.api+json",...y},method:a,...u&&a!=="GET"?{body:JSON.stringify(u)}:{}});if(!r.ok){let t=await r.json();throw{status:r.status,message:r.statusText,errors:t.errors}}let n=await r.json();if(n.errors&&n.errors.length>0)throw n;return n}catch(s){throw s}}var o=(e=>(e.checkouts="checkouts",e.customers="customers",e.discounts="discounts",e.files="files",e.license_key_instances="license-key-instances",e.license_keys="license-keys",e.order_items="order-items",e.orders="orders",e.products="products",e.stores="stores",e.subscriptions="subscriptions",e.subscription_invoices="subscription-invoices",e.users="users",e.variants="variants",e))(o||{});async function f(i){return p({path:"/users/me",...i})}var G={getUser:f};export{G as default,f as getUser};
//# sourceMappingURL=user.mjs.map