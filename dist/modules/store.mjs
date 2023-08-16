import{fetch as O}from"undici";import{join as x}from"node:path";var u=class extends Error{constructor(i,a,d){super(a);this.status=i;this.message=a;this.errors=d;this.name="LemonSqueezyError"}};async function c({apiKey:s,apiVersion:n="v1",baseUrl:i="https://api.lemonsqueezy.com",data:a,headers:d,include:f,method:m="GET",page:R,params:S,path:h}){try{let t=new URL(x(n,h),i);f&&t.searchParams.append("include",f.map(o=>l[o]).join(",")),R&&t.searchParams.append("page",R.toString()),S&&m==="GET"&&Object.entries(S).forEach(([o,e])=>t.searchParams.append(o,e));let r=await O(t.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${s}`,"Content-Type":"application/vnd.api+json",...d},method:m,...a&&m!=="GET"?{body:JSON.stringify(a)}:{}});if(!r.ok){let o=await r.json();throw new u(r.status,r.statusText,o.errors)}let p=await r.json();if(p.errors&&p.errors.length>0)throw p;return p}catch(t){throw t}}var l=(e=>(e.checkouts="checkouts",e.customers="customers",e.discounts="discounts",e.files="files",e.license_key_instances="license-key-instances",e.license_keys="license-keys",e.order_items="order-items",e.orders="orders",e.products="products",e.stores="stores",e.subscriptions="subscriptions",e.subscription_invoices="subscription-invoices",e.users="users",e.variants="variants",e))(l||{});async function g(s){return c({path:"/stores",...s})}async function y(s){let{id:n,...i}=s;return c({path:`/stores/${n}`,...i})}var j={listAllStores:g,retrieveStore:y};export{j as default,g as listAllStores,y as retrieveStore};
//# sourceMappingURL=store.mjs.map