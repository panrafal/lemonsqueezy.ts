import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
interface LemonsqueezyOrderItem {
    attributes: {
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * The ID of the order this order item belongs to
         */
        order_id: number;
        /**
         * A positive integer in cents representing the price of this order item (in the order currency)
         *
         * Note, for “pay what you want” products the price will be whatever the customer entered at checkout
         */
        price: number;
        /**
         * The ID of the product associated with this order item
         */
        product_id: number;
        /**
         * The name of the product
         */
        product_name: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
        /**
         * The ID of the variant associated with this order item
         */
        variant_id: number;
        /**
         * The name of the variant
         */
        variant_name: string;
    };
    type: LemonsqueezyDataType.order_items;
    id: string;
}
interface ListAllOrderItemsOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return order items belonging to the order with this ID
     */
    orderId?: string;
    /**
     * Only return order items belonging to the product with this ID
     */
    productId?: string;
    /**
     * Only return order items belonging to the variant with this ID
     */
    variantId?: string;
}
type ListAllOrderItemsResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyOrderItem>>;
interface RetrieveOrderItemOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveOrderItemResult = BaseLemonsqueezyResponse<LemonsqueezyOrderItem>;

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

export { LemonsqueezyOrderItem as L, RetrieveOrderItemOptions as R, ListAllOrderItemsOptions as a, ListAllOrderItemsResult as b, RetrieveOrderItemResult as c, listAllOrderItems as l, retrieveOrderItem as r };
