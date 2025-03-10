import { C as CreateCheckoutOptions, S as SharedModuleOptions, a as CreateCheckoutResult, L as ListAllCheckoutsOptions, b as ListAllCheckoutsResult, R as RetrieveCheckoutOptions, c as RetrieveCheckoutResult, d as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, e as LemonsqueezyDataType, f as ListAllDiscountsOptions, g as ListAllDiscountsResult, h as RetrieveDiscountOptions, i as RetrieveDiscountResult, j as ListAllFilesOptions, k as ListAllFilesResult, l as RetrieveFileOptions, m as RetrieveFileResult, n as ListAllLicenseKeysOptions, o as ListAllLicenseKeysResult, p as RetrieveLicenseKeyOptions, q as RetrieveLicenseKeyResult, r as ListAllLicenseKeyInstancesOptions, s as ListAllLicenseKeyInstancesResult, t as RetrieveLicenseKeyInstanceOptions, u as RetrieveLicenseKeyInstanceResult, v as ListAllOrdersOptions, w as ListAllOrdersResult, x as RetrieveOrderOptions, y as RetrieveOrderResult, z as ListAllOrderItemsOptions, A as ListAllOrderItemsResult, D as RetrieveOrderItemOptions, E as RetrieveOrderItemResult, F as ListAllProductsOptions, G as ListAllProductsResult, H as RetrieveProductOptions, I as RetrieveProductResult, J as ListAllStoresOptions, K as ListAllStoresResult, M as RetrieveStoreOptions, N as RetrieveStoreResult, O as ListAllSubscriptionsOptions, Q as ListAllSubscriptionsResult, T as RetrieveSubscriptionOptions, U as RetrieveSubscriptionResult, V as UpdateSubscriptionOptions, W as UpdateSubscriptionResult, X as CancelSubscriptionOptions, Y as CancelSubscriptionResult, Z as GetUserOptions, _ as GetUserResult, $ as ListAllVariantsOptions, a0 as ListAllVariantsResult, a1 as RetrieveVariantOptions, a2 as RetrieveVariantResult } from './types-bb5a8397.js';
export { a3 as LemonSqueezyError } from './types-bb5a8397.js';

/**
 * Create checkout
 *
 * @description Create a custom checkout. Use this endpoint to create a unique checkout URL for a specific variant
 *
 * @docs https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
 *
 * @returns A checkout object
 */
declare function createCheckout(options: CreateCheckoutOptions & Pick<SharedModuleOptions, "apiKey">): Promise<CreateCheckoutResult>;
/**
 * List all checkouts
 *
 * @description Returns a paginated list of checkouts
 *
 * @docs https://docs.lemonsqueezy.com/api/checkouts#list-all-checkouts
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of checkout objects ordered by `created_at` (descending)
 */
declare function listAllCheckouts(options: ListAllCheckoutsOptions & SharedModuleOptions): Promise<ListAllCheckoutsResult>;
/**
 * Retrieve checkout
 *
 * @description Retrieves the checkout with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/checkouts#retrieve-a-checkout
 *
 * @param {String} options.id - The ID of the checkout to retrieve
 *
 * @returns A checkout object
 */
declare function retrieveCheckout(options: RetrieveCheckoutOptions & SharedModuleOptions): Promise<RetrieveCheckoutResult>;

interface LemonsqueezyCustomer {
    attributes: {
        /**
         * The ID of the store this customer belongs to
         */
        store_id: number;
        /**
         * The full name of the customer
         */
        name: string;
        /**
         * The email address of the customer
         */
        email: string;
        /**
         * The email marketing status of the customer.
         */
        status: "subscribed" | "unsubscribed" | "archived" | "requires_verification" | "invalid_email" | "bounced";
        /**
         * The city of the customer
         */
        city: string;
        /**
         * The region of the customer
         */
        region: string;
        /**
         * The country of the customer
         */
        country: string;
        /**
         * A positive integer in cents representing the total revenue from the customer (USD).
         */
        total_revenue_currency: number;
        /**
         * A positive integer in cents representing the monthly recurring revenue from the customer (USD).
         */
        mrr: number;
        /**
         * The formatted status of the customer.
         */
        status_formatted: string;
        /**
         * The formatted country of the customer.
         */
        country_formatted: string;
        /**
         * A human-readable string representing the total revenue from the customer (e.g. $9.99).
         */
        total_revenue_currency_formatted: string;
        /**
         * A human-readable string representing the monthly recurring revenue from the customer (e.g. $9.99).
         */
        mrr_formatted: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
    };
    type: LemonsqueezyDataType.customers;
    id: string;
}
interface ListAllCustomersOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return checkouts belonging to the store with this ID
     */
    storeId?: string;
    /**
     * Only return customers where the email field is equal to this email address.
     */
    email?: string;
}
type ListAllCustomersResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyCustomer>>;
interface RetrieveCustomerOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveCustomerResult = BaseLemonsqueezyResponse<LemonsqueezyCustomer>;

/**
 * List all customers
 *
 * @description Returns a paginated list of customers
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#list-all-customers
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of customer objects ordered by `created_at` (descending)
 */
declare function listAllCustomers(options: ListAllCustomersOptions & SharedModuleOptions): Promise<ListAllCustomersResult>;
/**
 * Retrieve customer
 *
 * @description Retrieves the customer with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#retrieve-a-customer
 *
 * @param {String} options.id - The ID of the customer to retrieve
 *
 * @returns A customer object
 */
declare function retrieveCustomer(options: RetrieveCustomerOptions & SharedModuleOptions): Promise<RetrieveCustomerResult>;

/**
 * List all discounts
 *
 * @description Returns a paginated list of discounts
 *
 * @docs https://docs.lemonsqueezy.com/api/discounts#list-all-discounts
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of discount objects ordered by `created_at`
 */
declare function listAllDiscounts(options: ListAllDiscountsOptions & SharedModuleOptions): Promise<ListAllDiscountsResult>;
/**
 * Retrieve discount
 *
 * @description Retrieves the discount with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/discounts#retrieve-a-discount
 *
 * @param {String} options.id - The ID of the discount to retrieve
 *
 * @returns A discount object
 */
declare function retrieveDiscount(options: RetrieveDiscountOptions & SharedModuleOptions): Promise<RetrieveDiscountResult>;

/**
 * List all files
 *
 * @description Returns a paginated list of files
 *
 * @docs https://docs.lemonsqueezy.com/api/files#list-all-files
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of file objects ordered by `sort`
 */
declare function listAllFiles(options: ListAllFilesOptions & SharedModuleOptions): Promise<ListAllFilesResult>;
/**
 * Retrieve file
 *
 * @description Retrieves the file with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/files#retrieve-a-file
 *
 * @param {String} options.id - The ID of the file to retrieve
 *
 * @returns A file object
 */
declare function retrieveFile(options: RetrieveFileOptions & SharedModuleOptions): Promise<RetrieveFileResult>;

/**
 * List all license keys
 *
 * @description Returns a paginated list of license keys
 *
 * @docs https://docs.lemonsqueezy.com/api/license-keys#list-all-license-keys
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of license key objects ordered by `id`
 */
declare function listAllLicenseKeys(options: ListAllLicenseKeysOptions & SharedModuleOptions): Promise<ListAllLicenseKeysResult>;
/**
 * Retrieve license key
 *
 * @description Retrieves the license key with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/license-keys#retrieve-a-license-key
 *
 * @param {String} options.id - The ID of the license key to retrieve
 *
 * @returns A license key object
 */
declare function retrieveLicenseKey(options: RetrieveLicenseKeyOptions & SharedModuleOptions): Promise<RetrieveLicenseKeyResult>;

/**
 * List all license key instances
 *
 * @description Returns a paginated list of license key instances
 *
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#list-all-license-key-instances
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of license key instance objects ordered by `id`
 */
declare function listAllLicenseKeyInstances(options: ListAllLicenseKeyInstancesOptions & SharedModuleOptions): Promise<ListAllLicenseKeyInstancesResult>;
/**
 * Retrieve license key instance
 *
 * @description Retrieves the license key instance with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#retrieve-a-license-key-instance
 *
 * @param {String} options.id - The ID of the license key instance to retrieve
 *
 * @returns A license key instance object
 */
declare function retrieveLicenseKeyInstance(options: RetrieveLicenseKeyInstanceOptions & SharedModuleOptions): Promise<RetrieveLicenseKeyInstanceResult>;

/**
 * List all files
 *
 * @description Returns a paginated list of files
 *
 * @docs https://docs.lemonsqueezy.com/api/files#list-all-files
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of file objects ordered by `sort`
 */
declare function listAllOrders(options: ListAllOrdersOptions & SharedModuleOptions): Promise<ListAllOrdersResult>;
/**
 * Retrieve order
 *
 * @description Retrieves the order with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/orders#retrieve-an-order
 *
 * @param {String} options.id - The ID of the order to retrieve
 *
 * @returns A order object
 */
declare function retrieveOrder(options: RetrieveOrderOptions & SharedModuleOptions): Promise<RetrieveOrderResult>;

/**
 * List all order items
 *
 * @description Returns a paginated list of order items
 *
 * @docs https://docs.lemonsqueezy.com/api/order-items#list-all-order-items
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of order item objects ordered by `id`
 */
declare function listAllOrderItems(options: ListAllOrderItemsOptions & SharedModuleOptions): Promise<ListAllOrderItemsResult>;
/**
 * Retrieve order item
 *
 * @description Retrieves the order item with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/order-items#retrieve-an-order-item
 *
 * @param {String} options.id - The ID of the order item to retrieve
 *
 * @returns A order item object
 */
declare function retrieveOrderItem(options: RetrieveOrderItemOptions & SharedModuleOptions): Promise<RetrieveOrderItemResult>;

/**
 * List all products
 *
 * @description Returns a paginated list of products
 *
 * @docs https://docs.lemonsqueezy.com/api/products#list-all-products
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of product objects ordered by `name`
 */
declare function listAllProducts(options: ListAllProductsOptions & SharedModuleOptions): Promise<ListAllProductsResult>;
/**
 * Retrieve product
 *
 * @description Retrieves the product with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/products#retrieve-a-product
 *
 * @param {String} options.id - The ID of the product to retrieve
 *
 * @returns A product object
 */
declare function retrieveProduct(options: RetrieveProductOptions & SharedModuleOptions): Promise<RetrieveProductResult>;

/**
 * List all stores
 *
 * @description Returns a paginated list of stores
 *
 * @docs https://docs.lemonsqueezy.com/api/stores#list-all-stores
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of `store` objects ordered by name
 */
declare function listAllStores(options: ListAllStoresOptions & SharedModuleOptions): Promise<ListAllStoresResult>;
/**
 * Retrieve store
 *
 * @description Retrieves the store with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/stores#retrieve-a-store
 *
 * @param {String} options.id - The ID of the store to retrieve
 *
 * @returns A store object
 */
declare function retrieveStore(options: RetrieveStoreOptions & SharedModuleOptions): Promise<RetrieveStoreResult>;

/**
 * List all subscriptions
 *
 * @description Returns a paginated list of subscriptions
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#list-all-subscriptions
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of subscription objects ordered by `created_at` (descending)
 */
declare function listAllSubscriptions(options: ListAllSubscriptionsOptions & SharedModuleOptions): Promise<ListAllSubscriptionsResult>;
/**
 * Retrieve subscription
 *
 * @description Retrieves the subscription with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#retrieve-a-subscription
 *
 * @param {String} options.id - The ID of the subscription to retrieve
 *
 * @returns A subscription object
 */
declare function retrieveSubscription(options: RetrieveSubscriptionOptions & SharedModuleOptions): Promise<RetrieveSubscriptionResult>;
/**
 * Update subscription
 *
 * @description Update an existing subscription to specific parameters. With this endpoint, you can:
 *
 *  - Upgrade & Downgrade a subscripion to a different Product or Variant
 *  - Change payment pause collection behaviour
 *  - Update the billing date for when payments are collected
 *
 * When changing the plan of a subscription, we prorate the charge for the next billing cycle.
 * For example, if a customer buys your product on April 1st for $50, they'll be charged $50 immediately.
 * If on April 15th they upgrade to your $100 product, on May 1st they'll be charged $125.
 * This is made up of $100 for renewing, $50 of used time on your upgraded $100 plan from April 15th - May 1st, and then a credited -$25 for unused time on your $50 plan.
 *
 * If downgrading a subscription, we'll issue a credit which is then applied on the next invoice.
 *
 * Changing a subscription plan may change the billing date or charge immediately if:
 *
 *  - The variant has a different billing cycle (from monthly to yearly, etc)
 *  - The subscription is no longer free, or is now free
 *  - A trial starts or ends
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#update-a-subscription
 *
 * @param {String} options.id - The ID of the subscription to retrieve
 *
 * @returns A subscription object
 */
declare function updateSubscription(options: UpdateSubscriptionOptions & SharedModuleOptions): Promise<UpdateSubscriptionResult>;
/**
 * Cancel subscription
 *
 * @description Cancel an active subscription
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#cancel-a-subscription
 *
 * @param {String} options.id - The ID of the subscription to cancel
 *
 * @returns A subscription object
 */
declare function cancelSubscription(options: CancelSubscriptionOptions & SharedModuleOptions): Promise<CancelSubscriptionResult>;

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
interface LemonsqueezySubscriptionInvoice {
    attributes: {
        billing_reason: string;
        card_brand: string;
        card_last_four: string;
        created_at: Date;
        currency_rate: string;
        currency: string;
        discount_total_formatted: string;
        discount_total_usd: number;
        discount_total: number;
        refunded_at: Date | null;
        refunded: number;
        status_formatted: string;
        status: string;
        store_id: number;
        subscription_id: number;
        subtotal_formatted: string;
        subtotal_usd: number;
        subtotal: number;
        tax_formatted: string;
        tax_usd: number;
        tax: number;
        test_mode: boolean;
        total_formatted: string;
        total_usd: number;
        total: number;
        updated_at: Date;
        urls: {
            invoice_url: string;
        };
    };
    type: LemonsqueezyDataType.subscription_invoices;
    id: string;
}
interface ListAllSubscriptionInvoicesOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return subscription invoices that are `refunded` (the value should be `true` or `false`).
     */
    refunded?: boolean;
    /**
     * Only return subscription invoices with this status
     */
    status?: string;
    /**
     * Only return subscription invoices belonging to the store with this ID
     */
    storeId?: string;
}
type ListAllSubscriptionInvoicesResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezySubscriptionInvoice>>;
interface RetrieveSubscriptionInvoiceOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveSubscriptionInvoiceResult = BaseLemonsqueezyResponse<LemonsqueezySubscriptionInvoice>;

/**
 * Get User
 *
 * @description Retrieves the currently authenticated user
 *
 * @docs https://docs.lemonsqueezy.com/api/users#retrieve-the-authenticated-user
 *
 * @param {Object} [options]
 *
 * @returns A user object
 */
declare function getUser(options: GetUserOptions & SharedModuleOptions): Promise<GetUserResult>;

/**
 * List all variants
 *
 * @description Returns a paginated list of variants
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#list-all-variants
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of variant objects ordered by sort
 */
declare function listAllVariants(options: ListAllVariantsOptions & SharedModuleOptions): Promise<ListAllVariantsResult>;
/**
 * Retrieve variant
 *
 * @description Retrieves the variant with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
 *
 * @param {String} options.id - The ID of the variant to retrieve
 *
 * @returns A variant object
 */
declare function retrieveVariant(options: RetrieveVariantOptions & SharedModuleOptions): Promise<RetrieveVariantResult>;

declare class LemonsqueezyClient {
    private _apiKey;
    constructor(apiKey: string);
    /**
     * Get User
     *
     * @description Retrieves the currently authenticated user
     *
     * @docs https://docs.lemonsqueezy.com/api/users#retrieve-the-authenticated-user
     *
     * @param {Object} [options]
     *
     * @returns A user object
     */
    getUser(options?: GetUserOptions): Promise<GetUserResult>;
    /**
     * Retrieve store
     *
     * @description Retrieves the store with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/stores#retrieve-a-store
     *
     * @param {String} options.id - The ID of the store to retrieve
     *
     * @returns A store object
     */
    retrieveStore(options: RetrieveStoreOptions): Promise<RetrieveStoreResult>;
    /**
     * List all stores
     *
     * @description Returns a paginated list of stores
     *
     * @docs https://docs.lemonsqueezy.com/api/stores#list-all-stores
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of `store` objects ordered by name
     */
    listAllStores(options?: ListAllStoresOptions): Promise<ListAllStoresResult>;
    /**
     * Retrieve product
     *
     * @description Retrieves the product with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/products#retrieve-a-product
     *
     * @param {String} options.id - The ID of the product to retrieve
     *
     * @returns A product object
     */
    retrieveProduct(options: RetrieveProductOptions): Promise<RetrieveProductResult>;
    /**
     * List all products
     *
     * @description Returns a paginated list of products
     *
     * @docs https://docs.lemonsqueezy.com/api/products#list-all-products
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of product objects ordered by `name`
     */
    listAllProducts(options?: ListAllProductsOptions): Promise<ListAllProductsResult>;
    /**
     * Retrieve variant
     *
     * @description Retrieves the variant with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
     *
     * @param {String} options.id - The ID of the variant to retrieve
     *
     * @returns A variant object
     */
    retrieveVariant(options: RetrieveVariantOptions): Promise<RetrieveVariantResult>;
    /**
     * List all variants
     *
     * @description Returns a paginated list of variants
     *
     * @docs https://docs.lemonsqueezy.com/api/variants#list-all-variants
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of variant objects ordered by sort
     */
    listAllVariants(options?: ListAllVariantsOptions): Promise<ListAllVariantsResult>;
    /**
     * Retrieve file
     *
     * @description Retrieves the file with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/files#retrieve-a-file
     *
     * @param {String} options.id - The ID of the file to retrieve
     *
     * @returns A file object
     */
    retrieveFile(options: RetrieveFileOptions): Promise<RetrieveFileResult>;
    /**
     * List all files
     *
     * @description Returns a paginated list of files
     *
     * @docs https://docs.lemonsqueezy.com/api/files#list-all-files
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of file objects ordered by `sort`
     */
    listAllFiles(options?: ListAllFilesOptions): Promise<ListAllFilesResult>;
    /**
     * Retrieve order
     *
     * @description Retrieves the order with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/orders#retrieve-an-order
     *
     * @param {String} options.id - The ID of the order to retrieve
     *
     * @returns A order object
     */
    retrieveOrder(options: RetrieveOrderOptions): Promise<RetrieveOrderResult>;
    /**
     * List all orders
     *
     * @description Returns a paginated list of orders
     *
     * @docs https://docs.lemonsqueezy.com/api/orders#list-all-orders
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of file objects ordered by `sort`
     */
    listAllOrders(options?: ListAllOrdersOptions): Promise<ListAllOrdersResult>;
    /**
     * Retrieve order item
     *
     * @description Retrieves the order item with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/order-items#retrieve-an-order-item
     *
     * @param {String} options.id - The ID of the order item to retrieve
     *
     * @returns A order item object
     */
    retrieveOrderItem(options: RetrieveOrderItemOptions): Promise<RetrieveOrderItemResult>;
    /**
     * List all order items
     *
     * @description Returns a paginated list of order items
     *
     * @docs https://docs.lemonsqueezy.com/api/order-items#list-all-order-items
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of order item objects ordered by `id`
     */
    listAllOrderItems(options?: ListAllOrderItemsOptions): Promise<ListAllOrderItemsResult>;
    /**
     * Retrieve subscription
     *
     * @description Retrieves the subscription with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#retrieve-a-subscription
     *
     * @param {String} options.id - The ID of the subscription to retrieve
     *
     * @returns A subscription object
     */
    retrieveSubscription(options: RetrieveSubscriptionOptions): Promise<RetrieveSubscriptionResult>;
    /**
     * List all subscriptions
     *
     * @description Returns a paginated list of subscriptions
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#list-all-subscriptions
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of subscription objects ordered by `created_at` (descending)
     */
    listAllSubscriptions(options?: ListAllSubscriptionsOptions): Promise<ListAllSubscriptionsResult>;
    /**
     * Update subscription
     *
     * @description Update an existing subscription to specific parameters. With this endpoint, you can:
     *
     *  - Upgrade & Downgrade a subscripion to a different Product or Variant
     *  - Change payment pause collection behaviour
     *  - Update the billing date for when payments are collected
     *
     * When changing the plan of a subscription, we prorate the charge for the next billing cycle.
     * For example, if a customer buys your product on April 1st for $50, they'll be charged $50 immediately.
     * If on April 15th they upgrade to your $100 product, on May 1st they'll be charged $125.
     * This is made up of $100 for renewing, $50 of used time on your upgraded $100 plan from April 15th - May 1st, and then a credited -$25 for unused time on your $50 plan.
     *
     * If downgrading a subscription, we'll issue a credit which is then applied on the next invoice.
     *
     * Changing a subscription plan may change the billing date or charge immediately if:
     *
     *  - The variant has a different billing cycle (from monthly to yearly, etc)
     *  - The subscription is no longer free, or is now free
     *  - A trial starts or ends
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#update-a-subscription
     *
     * @param {String} options.id - The ID of the subscription to retrieve
     *
     * @returns A subscription object
     */
    updateSubscription(options: UpdateSubscriptionOptions): Promise<UpdateSubscriptionResult>;
    /**
     * Cancel subscription
     *
     * @description Cancel an active subscription
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#cancel-a-subscription
     *
     * @param {String} options.id - The ID of the subscription to cancel
     *
     * @returns A subscription object
     */
    cancelSubscription(options: CancelSubscriptionOptions): Promise<CancelSubscriptionResult>;
    /**
     * Retrieve discount
     *
     * @description Retrieves the discount with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/discounts#retrieve-a-discount
     *
     * @param {String} options.id - The ID of the discount to retrieve
     *
     * @returns A discount object
     */
    retrieveDiscount(options: RetrieveDiscountOptions): Promise<RetrieveDiscountResult>;
    /**
     * List all discounts
     *
     * @description Returns a paginated list of discounts
     *
     * @docs https://docs.lemonsqueezy.com/api/discounts#list-all-discounts
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of discount objects ordered by `created_at`
     */
    listAllDiscounts(options?: ListAllDiscountsOptions): Promise<ListAllDiscountsResult>;
    /**
     * Retrieve license key
     *
     * @description Retrieves the license key with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/license-keys#retrieve-a-license-key
     *
     * @param {String} options.id - The ID of the license key to retrieve
     *
     * @returns A license key object
     */
    retrieveLicenseKey(options: RetrieveLicenseKeyOptions): Promise<RetrieveLicenseKeyResult>;
    /**
     * List all license keys
     *
     * @description Returns a paginated list of license keys
     *
     * @docs https://docs.lemonsqueezy.com/api/license-keys#list-all-license-keys
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of license key objects ordered by `id`
     */
    listAllLicenseKeys(options?: ListAllLicenseKeysOptions): Promise<ListAllLicenseKeysResult>;
    /**
     * Retrieve license key instance
     *
     * @description Retrieves the license key instance with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/license-key-instances#retrieve-a-license-key-instance
     *
     * @param {String} options.id - The ID of the license key instance to retrieve
     *
     * @returns A license key instance object
     */
    retrieveLicenseKeyInstance(options: RetrieveLicenseKeyInstanceOptions): Promise<RetrieveLicenseKeyInstanceResult>;
    /**
     * List all license key instances
     *
     * @description Returns a paginated list of license key instances
     *
     * @docs https://docs.lemonsqueezy.com/api/license-key-instances#list-all-license-key-instances
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of license key instance objects ordered by `id`
     */
    listAllLicenseKeyInstances(options?: ListAllLicenseKeyInstancesOptions): Promise<ListAllLicenseKeyInstancesResult>;
    /**
     * Retrieve checkout
     *
     * @description Retrieves the checkout with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/checkouts#retrieve-a-checkout
     *
     * @param {String} options.id - The ID of the checkout to retrieve
     *
     * @returns A checkout object
     */
    retrieveCheckout(options: RetrieveCheckoutOptions): Promise<RetrieveCheckoutResult>;
    /**
     * List all checkouts
     *
     * @description Returns a paginated list of checkouts
     *
     * @docs https://docs.lemonsqueezy.com/api/checkouts#list-all-checkouts
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of checkout objects ordered by `created_at` (descending)
     */
    listAllCheckouts(options?: ListAllCheckoutsOptions): Promise<ListAllCheckoutsResult>;
    /**
     * Create checkout
     *
     * @description Create a custom checkout. Use this endpoint to create a unique checkout URL for a specific variant
     *
     * @docs https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
     *
     * @returns A checkout object
     */
    createCheckout(options: CreateCheckoutOptions): Promise<CreateCheckoutResult>;
    /**
     * Retrieve subscription invoice
     *
     * @description Retrieves a subscription invoice with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/subscription-invoices#retrieve-a-subscription-invoice
     *
     * @param {String} options.id - The ID of the subscription to retrieve
     *
     * @returns A subscription invoice object
     */
    retrieveSubscriptionInvoice(options: RetrieveSubscriptionInvoiceOptions): Promise<RetrieveSubscriptionInvoiceResult>;
    /**
     * List all subscription invoices
     *
     * @description Returns a paginated list of subscriptions
     *
     * @docs https://docs.lemonsqueezy.com/api/subscription-invoices#list-all-subscription-invoices
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of subscription invoice objects.
     */
    listAllSubscriptionInvoices(options?: ListAllSubscriptionInvoicesOptions): Promise<ListAllSubscriptionInvoicesResult>;
    /**
     * Retrieve customer
     *
     * @description Retrieves the customer with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/customers#retrieve-a-customer
     *
     * @param {String} options.id - The ID of the customer to retrieve
     *
     * @returns A customer object
     */
    retrieveCustomer(options: RetrieveCustomerOptions): Promise<RetrieveCustomerResult>;
    /**
     * List all customers
     *
     * @description Returns a paginated list of customers
     *
     * @docs https://docs.lemonsqueezy.com/api/customers#list-all-customers
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of customer objects ordered by `created_at` (descending)
     */
    listAllCustomers(options?: ListAllCustomersOptions): Promise<ListAllCustomersResult>;
}

export { LemonsqueezyClient, cancelSubscription, createCheckout, getUser, listAllCheckouts, listAllCustomers, listAllDiscounts, listAllFiles, listAllLicenseKeyInstances, listAllLicenseKeys, listAllOrderItems, listAllOrders, listAllProducts, listAllStores, listAllSubscriptions, listAllVariants, retrieveCheckout, retrieveCustomer, retrieveDiscount, retrieveFile, retrieveLicenseKey, retrieveLicenseKeyInstance, retrieveOrder, retrieveOrderItem, retrieveProduct, retrieveStore, retrieveSubscription, retrieveVariant, updateSubscription };
