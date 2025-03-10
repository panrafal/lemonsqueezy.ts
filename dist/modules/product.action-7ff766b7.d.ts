import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/products#the-product-object
 */
interface LemonsqueezyProduct {
    attributes: {
        /**
         * A URL to purchase this product using the Lemon Squeezy checkout
         */
        buy_now_url: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * The description of the product in HTML
         */
        description: string;
        /**
         * If this product has multiple variants, this will be a positive integer in cents representing the price of the cheapest variant.
         *
         * Otherwise, it will be `null`
         */
        from_price: null;
        /**
         * A URL to the large thumbnail image for this product (if one exists).
         *
         * The image will be 1000x1000px in size
         */
        large_thumb_url: string;
        /**
         * The name of the product
         */
        name: string;
        /**
         * Has the value true if this is a “pay what you want” product where the price can be set by the customer at checkout
         */
        pay_what_you_want: false;
        /**
         * A human-readable string representing the price of the product (e.g. `$9.99`)
         */
        price_formatted: string;
        /**
         * A positive integer in cents representing the price of the product
         */
        price: number;
        /**
         * The slug used to identify the product
         */
        slug: string;
        /**
         * The formatted status of the product
         */
        status_formatted: string;
        /**
         * The status of the product. Either `draft` or `published`
         */
        status: "draft" | "published";
        /**
         * The ID of the store this product belongs to
         */
        store_id: number;
        /**
         * A URL to the thumbnail image for this product (if one exists).
         *
         * The image will be 100x100px in size
         */
        thumb_url: string;
        /**
         * If this product has multiple variants, this will be a positive integer in cents representing the price of the most expensive variant.
         *
         * Otherwise, it will be `null`
         */
        to_price: null;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
    };
    type: LemonsqueezyDataType.products;
    id: string;
}
interface ListAllProductsOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return products belonging to the store with this ID
     */
    storeId?: string;
}
type ListAllProductsResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyProduct>>;
interface RetrieveProductOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveProductResult = BaseLemonsqueezyResponse<LemonsqueezyProduct>;

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

export { LemonsqueezyProduct as L, RetrieveProductOptions as R, ListAllProductsOptions as a, ListAllProductsResult as b, RetrieveProductResult as c, listAllProducts as l, retrieveProduct as r };
