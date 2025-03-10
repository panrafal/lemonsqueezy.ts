import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/discounts#the-discount-object
 */
interface LemonsqueezyDiscount {
    attributes: {
        /**
         * The type of the amount. Either `percent` or `fixed`
         */
        amount_type: "percent" | "fixed";
        /**
         * The amount of discount to apply to the order
         *
         * Either a fixed amount or a percentage depending on the value of `amount_type`
         */
        amount: number;
        /**
         * The discount code that can be used at checkout
         */
        code: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * If `duration` is `repeating`, this specifies how many months the discount should apply
         */
        duration_in_months: number;
        /**
         * If the discount is applied to a subscription, this specifies how often the discount should be applied.
         *
         * One of `once`, `repeating`, `forever`
         */
        duration: "once" | "repeating" | "forever";
        /**
         * An ISO-8601 formatted date-time string indicating when the discount expires
         *
         * Can be `null` if no expiration date is specified
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        expires_at: Date | null;
        /**
         * Has the value `true` if the discount can only be redeemed a limited number of times
         */
        is_limited_redemptions: boolean;
        /**
         * Has the value `true` if the discount can only be applied to certain products/variants
         */
        is_limited_to_products: boolean;
        /**
         * If `is_limited_redemptions` is `true`, this is the maximum number of redemptions
         */
        max_redemptions: number;
        /**
         * The name of the discount
         */
        name: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the discount is valid from
         *
         * Can be `null` if no start date is specified
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        starts_at: Date | null;
        /**
         * The formatted status of the discount
         */
        status_formatted: string;
        /**
         * The status of the discount. Either `draft` or `published`
         */
        status: "draft" | "published";
        /**
         * The ID of the store this discount belongs to
         */
        store_id: number;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
    };
    type: LemonsqueezyDataType.discounts;
    id: string;
}
interface ListAllDiscountsOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return discounts belonging to the store with this ID
     */
    storeId?: number;
}
type ListAllDiscountsResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyDiscount>>;
interface RetrieveDiscountOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveDiscountResult = BaseLemonsqueezyResponse<LemonsqueezyDiscount>;

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

export { LemonsqueezyDiscount as L, RetrieveDiscountOptions as R, ListAllDiscountsOptions as a, ListAllDiscountsResult as b, RetrieveDiscountResult as c, listAllDiscounts as l, retrieveDiscount as r };
