interface SharedModuleOptions {
    apiKey: string;
    page?: number;
    include?: Array<keyof typeof LemonsqueezyDataType>;
}
interface SharedLemonsqueezyOptions {
    apiVersion?: "v1";
    baseUrl?: string;
}
declare enum LemonsqueezyDataType {
    checkouts = "checkouts",
    customers = "customers",
    discounts = "discounts",
    files = "files",
    license_key_instances = "license-key-instances",
    license_keys = "license-keys",
    order_items = "order-items",
    orders = "orders",
    products = "products",
    stores = "stores",
    subscriptions = "subscriptions",
    subscription_invoices = "subscription-invoices",
    users = "users",
    variants = "variants"
}
interface BaseLemonsqueezyResponse<TData, TLinks = {
    self: string;
}> {
    data: TData;
    errors?: Array<{
        detail: string;
        status: string | number;
        title: string;
    }>;
    jsonapi: {
        version: string;
    };
    links: TLinks;
}
interface PaginatedBaseLemonsqueezyResponse<TData, TLinks = {
    first: string;
    last: string;
}> extends BaseLemonsqueezyResponse<TData, TLinks> {
    meta: {
        page: {
            currentPage: number;
            from: number;
            lastPage: number;
            perPage: number;
            to: number;
            total: number;
        };
    };
}

export { BaseLemonsqueezyResponse as B, LemonsqueezyDataType as L, PaginatedBaseLemonsqueezyResponse as P, SharedLemonsqueezyOptions as S, SharedModuleOptions as a };
