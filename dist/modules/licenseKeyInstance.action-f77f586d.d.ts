import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#the-license-key-instance-object
 */
interface LemonsqueezyLicenseKeyInstance {
    attributes: {
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * The unique identifier (UUID) for this instance
         *
         * This is the `instance_id` returned when activating a license key
         *
         * @docs https://docs.lemonsqueezy.com/help/licensing/license-api#post-v1-licenses-activate
         */
        identifier: string;
        /**
         * The ID of the license key this instance belongs to
         */
        license_key_id: number;
        /**
         * The name of the license key instance
         */
        name: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
    };
    type: LemonsqueezyDataType.license_key_instances;
    id: string;
}
interface ListAllLicenseKeyInstancesOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return instances belonging to the license key with this ID
     */
    licenseKeyId?: string;
}
type ListAllLicenseKeyInstancesResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyLicenseKeyInstance>>;
interface RetrieveLicenseKeyInstanceOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveLicenseKeyInstanceResult = BaseLemonsqueezyResponse<LemonsqueezyLicenseKeyInstance>;

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

export { LemonsqueezyLicenseKeyInstance as L, RetrieveLicenseKeyInstanceOptions as R, ListAllLicenseKeyInstancesOptions as a, ListAllLicenseKeyInstancesResult as b, RetrieveLicenseKeyInstanceResult as c, listAllLicenseKeyInstances as l, retrieveLicenseKeyInstance as r };
