import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
interface LemonsqueezyLicenseKey {
    attributes: {
        /**
         * The activation limit of this license key
         */
        activation_limit: number;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * Has the value `true` if this license key has been disabled
         */
        disabled: number;
        /**
         * An ISO-8601 formatted date-time string indicating when the license key expires
         *
         * Can be null if the license key is perpetual
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        expires_at: Date | null;
        /**
         * A count of the number of instances this license key has been activated on
         */
        instances_count: number;
        /**
         * A “short” representation of the license key, made up of the string “XXXX-” followed by the last 12 characters of the license key
         */
        key_short: string;
        /**
         * The ID of the order associated with this license key
         */
        order_id: number;
        /**
         * The ID of the order item associated with this license key
         */
        order_item_id: number;
        /**
         * The ID of the product associated with this license key
         */
        product_id: number;
        /**
         * The formatted status of the license key
         */
        status_formatted: string;
        /**
         * The status of the license key
         *
         * One of `inactive`, `active`, `expired`, `disabled`
         */
        status: "inactive" | "active" | "expired" | "disabled";
        /**
         * The ID of the store this license key belongs to
         */
        store_id: number;
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
    type: LemonsqueezyDataType.license_keys;
    id: string;
}
interface ListAllLicenseKeysOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return license keys belonging to the order with this ID
     */
    orderId?: string;
    /**
     * Only return license keys belonging to the order item with this ID
     */
    orderItemId?: string;
    /**
     * Only return license keys belonging to the product with this ID
     */
    productId?: string;
    /**
     * Only return license keys belonging to the store with this ID
     */
    storeId?: string;
}
type ListAllLicenseKeysResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyLicenseKey>>;
interface RetrieveLicenseKeyOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveLicenseKeyResult = BaseLemonsqueezyResponse<LemonsqueezyLicenseKey>;

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

export { LemonsqueezyLicenseKey as L, RetrieveLicenseKeyOptions as R, ListAllLicenseKeysOptions as a, ListAllLicenseKeysResult as b, RetrieveLicenseKeyResult as c, listAllLicenseKeys as l, retrieveLicenseKey as r };
