import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

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
declare function listAllSubscriptionInvoices(options: ListAllSubscriptionInvoicesOptions & SharedModuleOptions): Promise<ListAllSubscriptionInvoicesResult>;
/**
 * Retrieve subscription invoice
 *
 * @description Retrieves a subscription invoice with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/subscription-invoices#retrieve-a-subscription-invoice
 *
 * @param {String} options.id - The ID of the subscription invoice to retrieve
 *
 * @returns A subscription invoice object
 */
declare function retrieveSubscriptionInvoice(options: RetrieveSubscriptionInvoiceOptions & SharedModuleOptions): Promise<RetrieveSubscriptionInvoiceResult>;

export { LemonsqueezySubscriptionInvoice as L, RetrieveSubscriptionInvoiceOptions as R, ListAllSubscriptionInvoicesOptions as a, ListAllSubscriptionInvoicesResult as b, RetrieveSubscriptionInvoiceResult as c, listAllSubscriptionInvoices as l, retrieveSubscriptionInvoice as r };
