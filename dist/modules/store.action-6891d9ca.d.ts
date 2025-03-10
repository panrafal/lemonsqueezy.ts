import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/stores#the-store-object
 */
interface LemonsqueezyStore {
    attributes: {
        /**
         * The URL for the store avatar
         */
        avatar_url: string;
        /**
         * The full country name for the store (e.g. `United States`, `United Kingdom`, etc)
         */
        country_nicename: string;
        /**
         * The ISO 3166-1 two-letter country code for the store (e.g. `US`, `GB`, etc)
         *
         * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
         */
        country: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * The ISO 4217 currency code for the store (e.g. `USD`, `GBP`, etc)
         *
         * @see https://en.wikipedia.org/wiki/ISO_4217
         */
        currency: string;
        /**
         * The domain of the store in the format `{slug}.lemonsqueezy.com`
         */
        domain: string;
        /**
         * The name of the store
         */
        name: string;
        /**
         * The current billing plan for the store (e.g. `fresh`, `sweet`)
         */
        plan: string;
        /**
         * The slug used to identify the store
         */
        slug: string;
        /**
         * A positive integer in cents representing the total revenue of the store in USD in the last 30 days
         */
        thirty_day_revenue: number;
        /**
         * A count of the sales made by this store in the last 30 days
         */
        thirty_day_sales: number;
        /**
         * A positive integer in cents representing the total all-time revenue of the store in USD
         */
        total_revenue: number;
        /**
         * A count of the all-time total sales made by this store
         */
        total_sales: number;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
        /**
         * The fully-qualified URL for the store (e.g. `https://{slug}.lemonsqueezy.com)`
         */
        url: string;
    };
    id: string;
    type: LemonsqueezyDataType.stores;
}
interface ListAllStoresOptions extends SharedLemonsqueezyOptions {
}
type ListAllStoresResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyStore>>;
interface RetrieveStoreOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveStoreResult = BaseLemonsqueezyResponse<LemonsqueezyStore>;

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

export { LemonsqueezyStore as L, RetrieveStoreOptions as R, ListAllStoresOptions as a, ListAllStoresResult as b, RetrieveStoreResult as c, listAllStores as l, retrieveStore as r };
