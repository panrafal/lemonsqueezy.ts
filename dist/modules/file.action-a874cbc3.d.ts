import { L as LemonsqueezyDataType, S as SharedLemonsqueezyOptions, P as PaginatedBaseLemonsqueezyResponse, B as BaseLemonsqueezyResponse, a as SharedModuleOptions } from './shared.types-7258f267.js';

/**
 * @docs https://docs.lemonsqueezy.com/api/files#the-file-object
 */
interface LemonsqueezyFile {
    attributes: {
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        createdAt: Date;
        /**
         * The unique URL to download the file. Note: for security reasons, download URLs are signed, expire after 1 hour and are rate-limited to 10 downloads per day per IP address
         */
        download_url: string;
        /**
         * The file extension of the file (e.g. `pdf`)
         */
        extension: string;
        /**
         * The unique identifier (UUID) for this file
         */
        identifier: string;
        /**
         * The name of the file (e.g. `example.pdf`)
         */
        name: string;
        /**
         * The human-readable size of the file (e.g. `5.5 MB`)
         */
        size_formatted: string;
        /**
         * A positive integer in bytes representing the size of the file
         */
        size: number;
        /**
         * An integer representing the order of this file when displayed
         */
        sort: number;
        /**
         * The status of the file. Either `draft` or `published`
         */
        status: "draft" | "published";
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updatedAt: Date;
        /**
         * The ID of the variant this file belongs to
         */
        variant_id: number;
        /**
         * The software version of this file (if one exists, e.g. `1.0.0`)
         */
        version: string;
    };
    type: LemonsqueezyDataType.files;
    id: string;
}
interface ListAllFilesOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return files belonging to the variant with this ID
     */
    variantId?: string;
}
type ListAllFilesResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyFile>>;
interface RetrieveFileOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveFileResult = BaseLemonsqueezyResponse<LemonsqueezyFile>;

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

export { LemonsqueezyFile as L, RetrieveFileOptions as R, ListAllFilesOptions as a, ListAllFilesResult as b, RetrieveFileResult as c, listAllFiles as l, retrieveFile as r };
