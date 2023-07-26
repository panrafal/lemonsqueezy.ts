import{fetch as h}from"undici";import{join as O}from"node:path";async function c({apiKey:t,apiVersion:s="v1",baseUrl:r="https://api.lemonsqueezy.com",data:l,headers:R,include:m,method:u="GET",page:d,params:y,path:g}){try{let n=new URL(O(s,g),r);m&&n.searchParams.append("include",m.map(o=>p[o]).join(",")),d&&n.searchParams.append("page",d.toString()),y&&u==="GET"&&Object.entries(y).forEach(([o,e])=>n.searchParams.append(o,e));let i=await h(n.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${t}`,"Content-Type":"application/vnd.api+json",...R},method:u,...l&&u!=="GET"?{body:JSON.stringify(l)}:{}});if(!i.ok){let o=await i.json();throw{status:i.status,message:i.statusText,errors:o.errors}}let a=await i.json();if(a.errors&&a.errors.length>0)throw a;return a}catch(n){throw n}}var p=(e=>(e.checkouts="checkouts",e.customers="customers",e.discounts="discounts",e.files="files",e.license_key_instances="license-key-instances",e.license_keys="license-keys",e.order_items="order-items",e.orders="orders",e.products="products",e.stores="stores",e.subscriptions="subscriptions",e.subscription_invoices="subscription-invoices",e.users="users",e.variants="variants",e))(p||{});async function L(t){let{licenseKeyId:s,...r}=t;return c({params:{...s?{license_key_id:s}:{}},path:"/license-key-instances",...r})}async function f(t){let{id:s,...r}=t;return c({path:`/license-key-instances/${s}`,...r})}var z={listAllLicenseKeyInstances:L,retrieveLicenseKeyInstance:f};export{z as default,L as listAllLicenseKeyInstances,f as retrieveLicenseKeyInstance};
//# sourceMappingURL=licenseKeyInstance.mjs.map