import{fetch as J}from"undici";import{join as Q}from"node:path";async function i({apiKey:s,apiVersion:e="v1",baseUrl:t="https://api.lemonsqueezy.com",data:r,headers:n,include:p,method:l="GET",page:u,params:y,path:H}){try{let c=new URL(Q(e,H),t);p&&c.searchParams.append("include",p.map(m=>a[m]).join(",")),u&&c.searchParams.append("page",u.toString()),y&&l==="GET"&&Object.entries(y).forEach(([m,o])=>c.searchParams.append(m,o));let d=await J(c.href,{headers:{Accept:"application/vnd.api+json",Authorization:`Bearer ${s}`,"Content-Type":"application/vnd.api+json",...n},method:l,...r&&l!=="GET"?{body:JSON.stringify(r)}:{}});if(!d.ok){let m=await d.json();throw{status:d.status,message:d.statusText,errors:m.errors}}let O=await d.json();if(O.errors&&O.errors.length>0)throw O;return O}catch(c){throw c}}var a=(o=>(o.checkouts="checkouts",o.customers="customers",o.discounts="discounts",o.files="files",o.license_key_instances="license-key-instances",o.license_keys="license-keys",o.order_items="order-items",o.orders="orders",o.products="products",o.stores="stores",o.subscriptions="subscriptions",o.subscription_invoices="subscription-invoices",o.users="users",o.variants="variants",o))(a||{});async function R(s){let{checkout_data:e,checkout_options:t,custom_price:r,expires_at:n,product_options:p,store:l,variant:u,...y}=s;return i({data:{data:{attributes:{checkout_data:e,checkout_options:t,custom_price:r,expires_at:n,product_options:p},relationships:{store:{data:{id:l,type:"stores"}},variant:{data:{id:u,type:"variants"}}},type:"checkouts"}},path:"/checkouts",method:"POST",...y})}async function v(s){let{storeId:e,variantId:t,...r}=s;return i({params:{...e?{store_id:e}:{},...t?{variant_id:t}:{}},path:"/checkouts",...r})}async function L(s){let{id:e,...t}=s;return i({path:`/checkouts/${e}`,...t})}async function h(s){let{storeId:e,email:t,...r}=s;return i({params:{...e?{store_id:e}:{},...t?{email:t}:{}},path:"/customers",...r})}async function A(s){let{id:e,...t}=s;return i({path:`/customers/${e}`,...t})}async function S(s){let{storeId:e,...t}=s;return await i({params:{...e?{store_id:e}:{}},path:"/discounts",...t})}async function f(s){let{id:e,...t}=s;return i({path:`/discounts/${e}`,...t})}async function b(s){let{variantId:e,...t}=s;return i({params:{...e?{variant_id:e}:{}},path:"/files",...t})}async function K(s){let{id:e,...t}=s;return i({path:`/files/${e}`,...t})}async function I(s){let{orderId:e,orderItemId:t,productId:r,storeId:n,...p}=s;return i({params:{...e?{order_id:e}:{},...t?{order_item_id:t}:{},...r?{product_id:r}:{},...n?{store_id:n}:{}},path:"/license-keys",...p})}async function x(s){let{id:e,...t}=s;return i({path:`/license-keys/${e}`,...t})}async function C(s){let{licenseKeyId:e,...t}=s;return i({params:{...e?{license_key_id:e}:{}},path:"/license-key-instances",...t})}async function P(s){let{id:e,...t}=s;return i({path:`/license-key-instances/${e}`,...t})}async function k(s){let{storeId:e,userEmail:t,...r}=s;return i({params:{...e?{store_id:e}:{},...t?{user_email:t}:{}},path:"/orders",...r})}async function _(s){let{id:e,...t}=s;return i({path:`/orders/${e}`,...t})}async function q(s){let{orderId:e,productId:t,variantId:r,...n}=s;return i({params:{...e?{order_id:e}:{},...t?{product_id:t}:{},...r?{variant_id:r}:{}},path:"/order-items",...n})}async function M(s){let{id:e,...t}=s;return i({path:`/order-items/${e}`,...t})}async function z(s){let{storeId:e,...t}=s;return i({params:{...e?{store_id:e}:{}},path:"/products",...t})}async function g(s){let{id:e,...t}=s;return i({path:`/products/${e}`,...t})}async function D(s){return i({path:"/stores",...s})}async function V(s){let{id:e,...t}=s;return i({path:`/stores/${e}`,...t})}async function F(s){let{orderId:e,orderItemId:t,productId:r,storeId:n,variantId:p,...l}=s;return i({params:{...e?{order_id:e}:{},...t?{order_item_id:t}:{},...r?{product_id:r}:{},...n?{store_id:n}:{},...p?{variant_id:p}:{}},path:"/subscriptions",...l})}async function U(s){let{id:e,...t}=s;return i({path:`/subscriptions/${e}`,...t})}async function T(s){let{billingAnchor:e,cancelled:t,id:r,pause:n,productId:p,variantId:l,...u}=s;return i({data:{data:{attributes:{billing_anchor:e,cancelled:t,pause:n,product_id:p,variant_id:l},id:r,type:"subscriptions"}},path:`/subscriptions/${r}`,method:"PATCH",...u})}async function $(s){let{id:e,...t}=s;return i({path:`/subscriptions/${e}`,method:"DELETE",...t})}async function E(s){let{refunded:e,status:t,storeId:r,...n}=s;return i({params:{...e?{refunded:e}:{},...t?{status:t}:{},...r?{store_id:r}:{}},path:"/subscription-invoices",...n})}async function B(s){let{id:e,...t}=s;return i({path:`/subscription-invoices/${e}`,...t})}async function G(s){return i({path:"/users/me",...s})}async function j(s){let{productId:e,...t}=s;return i({params:{...e?{product_id:e}:{}},path:"/variants",...t})}async function w(s){let{id:e,...t}=s;return i({path:`/variants/${e}`,...t})}var N=class{_apiKey;constructor(e){this._apiKey=e}async getUser(e={}){return G({apiKey:this._apiKey,...e})}async retrieveStore(e){return V({apiKey:this._apiKey,...e})}async listAllStores(e={}){return D({apiKey:this._apiKey,...e})}async retrieveProduct(e){return g({apiKey:this._apiKey,...e})}async listAllProducts(e={}){return z({apiKey:this._apiKey,...e})}async retrieveVariant(e){return w({apiKey:this._apiKey,...e})}async listAllVariants(e={}){return j({apiKey:this._apiKey,...e})}async retrieveFile(e){return K({apiKey:this._apiKey,...e})}async listAllFiles(e={}){return b({apiKey:this._apiKey,...e})}async retrieveOrder(e){return _({apiKey:this._apiKey,...e})}async listAllOrders(e={}){return k({apiKey:this._apiKey,...e})}async retrieveOrderItem(e){return M({apiKey:this._apiKey,...e})}async listAllOrderItems(e={}){return q({apiKey:this._apiKey,...e})}async retrieveSubscription(e){return U({apiKey:this._apiKey,...e})}async listAllSubscriptions(e={}){return F({apiKey:this._apiKey,...e})}async updateSubscription(e){return T({apiKey:this._apiKey,...e})}async cancelSubscription(e){return $({apiKey:this._apiKey,...e})}async retrieveDiscount(e){return f({apiKey:this._apiKey,...e})}async listAllDiscounts(e={}){return S({apiKey:this._apiKey,...e})}async retrieveLicenseKey(e){return x({apiKey:this._apiKey,...e})}async listAllLicenseKeys(e={}){return I({apiKey:this._apiKey,...e})}async retrieveLicenseKeyInstance(e){return P({apiKey:this._apiKey,...e})}async listAllLicenseKeyInstances(e={}){return C({apiKey:this._apiKey,...e})}async retrieveCheckout(e){return L({apiKey:this._apiKey,...e})}async listAllCheckouts(e={}){return v({apiKey:this._apiKey,...e})}async createCheckout(e){return R({apiKey:this._apiKey,...e})}async retrieveSubscriptionInvoice(e){return B({apiKey:this._apiKey,...e})}async listAllSubscriptionInvoices(e={}){return E({apiKey:this._apiKey,...e})}async retrieveCustomer(e){return A({apiKey:this._apiKey,...e})}async listAllCustomers(e={}){return h({apiKey:this._apiKey,...e})}};export{N as LemonsqueezyClient};
//# sourceMappingURL=index.mjs.map