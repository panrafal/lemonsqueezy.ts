import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/orders#the-order-object
 */
interface LemonsqueezyOrder {
    attributes: {
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * If the order currency is USD, this will always be `1.0`.
         *
         * Otherwise, this is the currency conversion rate used to determine the cost of the order in USD at the time of purchase
         */
        currency_rate: string;
        /**
         * The ISO 4217 currency code for the order (e.g. `USD`, `GBP`, etc)
         *
         * @see https://en.wikipedia.org/wiki/ISO_4217
         */
        currency: string;
        /**
         * A positive integer in cents representing the total discount value applied to the order in USD
         */
        discount_total_usd: number;
        /**
         * A positive integer in cents representing the total discount value applied to the order in the order currency
         */
        discount_total: number;
        /**
         * The unique identifier (UUID) for this order
         */
        identifier: string;
        /**
         * An integer representing the sequential order number for this store
         */
        order_number: number;
        /**
         * If the order has been refunded, this will be an ISO-8601 formatted date-time string indicating when the order was refunded
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        refunded_at: Date | null;
        /**
         * Has the value true if the order has been refunded
         */
        refunded: number;
        /**
         * The formatted status of the order
         */
        status_formatted: string;
        /**
         * The status of the order. One of `pending`, `failed`, `paid`, `refunded`
         */
        status: "pending" | "failed" | "paid" | "refunded";
        /**
         * The ID of the store this order belongs to
         */
        store_id: number;
        /**
         * A positive integer in cents representing the subtotal of the order in USD
         */
        subtotal_usd: number;
        /**
         * A positive integer in cents representing the subtotal of the order in the order currency
         */
        subtotal: number;
        /**
         * If tax is applied to the order, this will be the name of the tax rate (e.g. `VAT`, `Sales Tax`, etc)
         */
        tax_name: string;
        /**
         * If tax is applied to the order, this will be the rate of tax as a decimal percentage
         */
        tax_rate: string;
        /**
         * A positive integer in cents representing the tax applied to the order in USD
         */
        tax_usd: number;
        /**
         * A positive integer in cents representing the tax applied to the order in the order currency
         */
        tax: number;
        /**
         * A positive integer in cents representing the total cost of the order in USD
         */
        total_usd: number;
        /**
         * A positive integer in cents representing the total cost of the order in the order currency
         */
        total: number;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
        /**
         * The email address of the customer
         */
        user_email: string;
        /**
         * The full name of the customer
         */
        user_name: string;
    };
    type: LemonsqueezyDataType.orders;
    id: string;
}
interface ListAllOrdersOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return orders belonging to the store with this ID
     */
    storeId?: string;
    /**
     * Only return orders where the `user_email` field is equal to this email address
     */
    userEmail?: string;
}
type ListAllOrdersResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyOrder>>;
interface RetrieveOrderOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveOrderResult = BaseLemonsqueezyResponse<LemonsqueezyOrder>;

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

export { LemonsqueezyOrder as L, RetrieveOrderOptions as R, ListAllOrdersOptions as a, ListAllOrdersResult as b, RetrieveOrderResult as c, listAllOrders as l, retrieveOrder as r };
