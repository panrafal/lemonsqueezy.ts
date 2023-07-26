export { C as CreateCheckoutOptions, a as CreateCheckoutResult, L as LemonsqueezyBillingAddress, b as LemonsqueezyCheckout, d as LemonsqueezyCheckoutData, e as LemonsqueezyCheckoutOptions, f as LemonsqueezyCheckoutPreview, g as LemonsqueezyProductOptions, h as ListAllCheckoutsOptions, i as ListAllCheckoutsResult, R as RetrieveCheckoutOptions, j as RetrieveCheckoutResult, c as createCheckout, l as listAllCheckouts, r as retrieveCheckout } from './checkout.action-a8ce9b22.js';
import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';
export { L as LemonsqueezyDiscount, a as ListAllDiscountsOptions, b as ListAllDiscountsResult, R as RetrieveDiscountOptions, c as RetrieveDiscountResult, l as listAllDiscounts, r as retrieveDiscount } from './discount.action-1d6b852f.js';
export { L as LemonsqueezyFile, a as ListAllFilesOptions, b as ListAllFilesResult, R as RetrieveFileOptions, c as RetrieveFileResult, l as listAllFiles, r as retrieveFile } from './file.action-a874cbc3.js';
export { L as LemonsqueezyLicenseKey, a as ListAllLicenseKeysOptions, b as ListAllLicenseKeysResult, R as RetrieveLicenseKeyOptions, c as RetrieveLicenseKeyResult, l as listAllLicenseKeys, r as retrieveLicenseKey } from './licenseKey.action-fd93ca93.js';
export { L as LemonsqueezyLicenseKeyInstance, a as ListAllLicenseKeyInstancesOptions, b as ListAllLicenseKeyInstancesResult, R as RetrieveLicenseKeyInstanceOptions, c as RetrieveLicenseKeyInstanceResult, l as listAllLicenseKeyInstances, r as retrieveLicenseKeyInstance } from './licenseKeyInstance.action-f77f586d.js';
export { L as LemonsqueezyOrder, a as ListAllOrdersOptions, b as ListAllOrdersResult, R as RetrieveOrderOptions, c as RetrieveOrderResult, l as listAllOrders, r as retrieveOrder } from './order.action-605aa5ea.js';
export { L as LemonsqueezyOrderItem, a as ListAllOrderItemsOptions, b as ListAllOrderItemsResult, R as RetrieveOrderItemOptions, c as RetrieveOrderItemResult, l as listAllOrderItems, r as retrieveOrderItem } from './orderItem.action-78561253.js';
export { L as LemonsqueezyProduct, a as ListAllProductsOptions, b as ListAllProductsResult, R as RetrieveProductOptions, c as RetrieveProductResult, l as listAllProducts, r as retrieveProduct } from './product.action-7ff766b7.js';
export { L as LemonsqueezyStore, a as ListAllStoresOptions, b as ListAllStoresResult, R as RetrieveStoreOptions, c as RetrieveStoreResult, l as listAllStores, r as retrieveStore } from './store.action-6891d9ca.js';
export { L as LemonsqueezySubscription, a as ListAllSubscriptionsOptions, b as ListAllSubscriptionsResult, R as RetrieveSubscriptionOptions, c as RetrieveSubscriptionResult, U as UpdateSubscriptionOptions, d as UpdateSubscriptionResult, l as listAllSubscriptions, r as retrieveSubscription, u as updateSubscription } from './subscription.action-9d7ccf11.js';
export { L as LemonsqueezySubscriptionInvoice, a as ListAllSubscriptionInvoicesOptions, b as ListAllSubscriptionInvoicesResult, R as RetrieveSubscriptionInvoiceOptions, c as RetrieveSubscriptionInvoiceResult, l as listAllSubscriptionInvoices, r as retrieveSubscriptionInvoice } from './subscriptionInvoice.action-b8577f0b.js';
export { G as GetUserOptions, a as GetUserResult, L as LemonsqueezyUser, g as getUser } from './user.action-24cebf70.js';
export { L as LemonsqueezyInterval, a as LemonsqueezyVariant, b as ListAllVariantsOptions, c as ListAllVariantsResult, R as RetrieveVariantOptions, d as RetrieveVariantResult, l as listAllVariants, r as retrieveVariant } from './variant.action-57ae9353.js';

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

export { LemonsqueezyCustomer, ListAllCustomersOptions, ListAllCustomersResult, RetrieveCustomerOptions, RetrieveCustomerResult, listAllCustomers, retrieveCustomer };
